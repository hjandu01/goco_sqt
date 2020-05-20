from django.shortcuts import render
#from .forms import Product_HPBXForm
from django.views.generic import ListView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from django.http import HttpResponse
from django.forms import modelformset_factory
from .forms import CustomerForm
from django.contrib.auth.mixins import LoginRequiredMixin

# Create your views here.

from goco_sqt.models import Product_HPBX, Customer, Customer_Order, Hardware

class MyView(LoginRequiredMixin, CreateView):
    login_url = '/login/'
    redirect_field_name = 'redirect_to'


# view for the customer entry page

class CustomerCreate(CreateView):
    model = Customer
# the fields mentioned below become the entry rows in the generated form
    fields = [
        'company_name',
        'company_address',
        'web_url',
        'company_number',
        'contact_name',
        'contact_email',
        'contact_phone',
        'onsite_contact',
        'onsite_email',
        'onsite_phone',
        'service_packages',
        'lease'
        ]

class OrderCreate(CreateView):
    model = Customer_Order

    fields = [
    'order_no',
    'customer',
    'product',
    'qty_mrc',
    'qty_nrc',
    'total_mrc',
    'total_nrc'
    ]


# view for the Order page
class OrderView(ListView):
    # name of the object to be used in the orders_form.html
    context_object_name = 'order_list'
    template_name = 'goco_sqt/order_form.html'
    queryset = Product_HPBX.objects.all()

    def get_context_data(self, **kwargs):
        context = super(OrderView, self).get_context_data(**kwargs)
        context['customers'] = Customer.objects.latest('id')
        context['product_hpbxs'] = self.queryset.filter(svc_type='bsft_hpbx')
        context['product_msteamss'] = self.queryset.filter(svc_type='msteams_dr')
        context['product_ccs'] = self.queryset.filter(svc_type='hcc')
        context['product_addons'] = self.queryset.filter(svc_type='addon')
        context['product_sfbs'] = self.queryset.filter(svc_type='sfb')
        context['product_sipts'] = self.queryset.filter(svc_type='sipt')
        context['hardwares'] = Hardware.objects.filter(type='hw')
        context['phones'] = Hardware.objects.filter(type='phone')
        return context

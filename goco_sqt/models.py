from djmoney.models.fields import MoneyField
from django.db import models
from django import forms
from django.forms import ModelForm, ChoiceField

# Create your models here.
from django.urls import reverse
from multiselectfield import MultiSelectField


LEASE_TERM = [
    ('3', '36 Months (3 Year)'),
    ('5', '60 Months (5 Year)')
]

class Product_HPBX(models.Model):
    # Foreign Key used because Product_HPBX can only have one customer, but customers can have multiple
    sku_no = models.CharField(max_length=10)
    product_desc = models.CharField(max_length=100)
    monthly_price = MoneyField(max_digits=8, null=True, blank=True, default_currency='CAD')
    setup = MoneyField(max_digits=8, null=True, blank=True, default_currency='CAD')
    unit = models.CharField(max_length=100, null=True, blank=True)
    comments = models.CharField(max_length=200, null=True, blank=True)
    svc_type = models.CharField(max_length=10, null=True, blank=True)

    # Returns the url to access a detail record for this HPBX product.
    def get_absolute_url(self):
        return reverse('hpbx-detail', args=[str(self.id)])

    #    String for representing the Model object.
    def __str__(self):
        return self.product_desc

class Customer(models.Model):
    # VOIP Service package options
    VOIP_SERVICES = [
        ('hpbx_bsft', 'Hosted PBX UC'),
        ('hpbx_sfb', 'Hosted PBX UC (Skype for Business)'),
        ('sipt', 'SIP Trunking (for on premise IP PBX’s)'),
        ('teams_dr', 'TEAMS Direct Routing'),
        ('hcc', 'Hosted Call/Contact Center')
    ]

    # Customer fields
    company_name = models.CharField(max_length=100)
    company_address = models.CharField(max_length=100)
    web_url = models.CharField(max_length=100, blank=True)
    company_number = models.CharField(max_length=100)
    contact_name = models.CharField(max_length=100)
    contact_email = models.EmailField(max_length=100)
    contact_phone = models.CharField(max_length=100)
    onsite_contact = models.CharField(max_length=100)
    onsite_email = models.EmailField(max_length=100)
    onsite_phone = models.CharField(max_length=100)
    service_packages = MultiSelectField(choices=VOIP_SERVICES)
    lease = MultiSelectField(choices=LEASE_TERM, blank=True)
    lease = models.CharField(max_length=3, choices=LEASE_TERM, default='3')


    def __str__(self):
        return self.company_name

    # on submit click on the customer entry page, it redirects to order page
    def get_absolute_url(self):
#        return reverse('customer-detail', args=[str(self.id)])
        return reverse('goco_sqt:order_list')

class Customer_Order(models.Model):
    order_no = models.CharField(max_length=100)
    customer = models.ForeignKey('Customer', on_delete=models.SET_NULL, null=True)
    product = models.ManyToManyField(Product_HPBX, help_text='Select Product Sku')
    total_mrc = MoneyField(max_digits=10, null=True, blank=True, default_currency='CAD')
    total_nrc = MoneyField(max_digits=10, null=True, blank=True, default_currency='CAD')

    def __str__(self):
        return self.order_no

    # on submit click on the product entry page, it redirects to the url below.
    def get_absolute_url(self):
        return reverse('order-detail', args=[str(self.id)])


class Hardware(models.Model):
    mfg_no = models.CharField(max_length=100)
    mfg = models.CharField(max_length=100)
    model_desc = models.CharField(max_length=100)
    price_3yr = MoneyField(max_digits=7, null=True, blank=True, default_currency='CAD')
    price_1yr_2yr = MoneyField(max_digits=7, null=True, blank=True, default_currency='CAD')
    price_nt = MoneyField(max_digits=7, null=True, blank=True, default_currency='CAD')
    type = models.CharField(max_length=10, null=True, blank=True)

    def __str__(self):
        return self.model_desc

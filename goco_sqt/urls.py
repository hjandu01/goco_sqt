from django.urls import path
from django.conf.urls import url

from goco_sqt import views
from goco_sqt.views import CustomerCreate

app_name = 'goco_sqt'

urlpatterns = [

    path('customer/add/', CustomerCreate.as_view(), name='customer-add'),
    url(r'^orders_form/$', views.OrderView.as_view(), name='order_list'),

]

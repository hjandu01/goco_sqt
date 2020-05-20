from django.urls import path
from django.conf.urls import url

from goco_sqt import views
from goco_sqt.views import CustomerCreate, OrderCreate

app_name = 'goco_sqt'

urlpatterns = [

    # /product/
#    url(r'^$', views.IndexView.as_view(), name='index2'),

    # /product/entry
#    url(r'^entry/$',views.ProductEntry.as_view(),name='product-entry'),

    # quote/product/2
#    url(r'^product/(?P<pk>[0-9]+)/$', views.ProductUpdate.as_view(), name='product-update'),

    # quote/product/(?P<pk>[0-9]+)/delete
#    url(r'^album/(?P<pk>[0-9]+)/delete$', views.ProductDelete.as_view(), name='product-delete'),

    # /customer
    #url(r'^quote/$', views.CustomerEntry.as_view(),name='customer-entry'),
    path('customer/add/', CustomerCreate.as_view(), name='customer-add'),
#    path('customer/<int:pk>/', CustomerUpdate.as_view(), name='customer-update'),

    url(r'^orders_form/$', views.OrderView.as_view(), name='order_list'),
#    url(r'^orders_form/$', OrderCreate.as_view(), name='order_list')
#    url(r'^summary/$', views.OrderSummary.as_view(), name='summary'),
#    path('skudetails/', views.skuDetails),
#    path('display/', views.skuDetails),
]

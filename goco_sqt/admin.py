from django.contrib import admin

# Register your models here.
from goco_sqt.models import Product_HPBX, Customer, Customer_Order, Hardware
from import_export import resources
from import_export.admin import ImportExportModelAdmin

admin.site.site_header = "GoCo Sales Tool Dashboard"

#  HPBX for import / export via Admin
class Product_HPBXResource(resources.ModelResource):

    class Meta:
        model = Product_HPBX

#admin.site.register(Product_HPBX)
# Define the Admin Class - Product_HPBX
class Product_HPBXAdmin(ImportExportModelAdmin):
    resource_class = Product_HPBXResource
    list_display = ('sku_no', 'product_desc', 'monthly_price')

#  Hardware for import / export via Admin
class HardwareResource(resources.ModelResource):

    class Meta:
        model = Hardware

#admin.site.register(Product_HPBX)
# Define the Admin Class - Hardware
class HardwareAdmin(ImportExportModelAdmin):
    resource_class = HardwareResource
    list_display = ('mfg_no', 'mfg', 'model_desc', 'price_3yr', 'price_1yr_2yr', 'price_nt')

# Register the admin class with the associated model
admin.site.register(Product_HPBX, Product_HPBXAdmin)
admin.site.register(Hardware, HardwareAdmin)

#admin.site.register(Customer)

# Register the Admin classes for Customer using the decorator
@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ('company_name',  'contact_name', 'company_number', 'contact_email', 'contact_phone')

# Register the Admin classes for BookInstance using the decorator
@admin.register(Customer_Order)
class Customer_OrderAdmin(admin.ModelAdmin):
    pass

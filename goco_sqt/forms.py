#from django.forms import ModelForm, CheckboxSelectMultiple
from django import forms
from django.forms import ModelForm, ChoiceField
from .models import Customer
#from multiselectfield import MultiSelectField


class CustomerForm(ModelForm):
    class Meta:
        model = Customer
        LEASE_TERM = [
            ('3', '36 Months (3 Year)'),
            ('5', '60 Months (5 Year)')
        ]

        fields = [
            'company_name',
            'company_address',
            'web_url',
            'company_number',
            'company_name',
            'contact_email',
            'contact_phone',
            'onsite_contact',
            'onsite_email',
            'onsite_phone',
            'service_packages',
            'lease'
            ]
        widgets = {
            'lease': ChoiceField(
                required=True,
                widget=forms.RadioSelect,
                choices=LEASE_TERM,
            )
        }

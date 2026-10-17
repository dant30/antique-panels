from django.contrib import admin
from .model.models import Payment

@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = ['receipt_number', 'invoice', 'amount', 'payment_method', 'transaction_reference', 'status', 'payment_date']
    list_filter = ['payment_method', 'status', 'payment_date']
    search_fields = ['receipt_number', 'transaction_reference', 'payer_phone', 'payer_name']

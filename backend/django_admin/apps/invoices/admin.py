from django.contrib import admin
from .model.models import Invoice, InvoiceItem

class InvoiceItemInline(admin.TabularInline):
    model = InvoiceItem
    extra = 1

@admin.register(Invoice)
class InvoiceAdmin(admin.ModelAdmin):
    list_display = ['invoice_number', 'customer', 'subtotal_amount', 'vat_amount', 'total_amount', 'amount_paid', 'status', 'issue_date', 'due_date']
    list_filter = ['status', 'issue_date', 'due_date']
    search_fields = ['invoice_number', 'customer__first_name', 'customer__last_name']
    inlines = [InvoiceItemInline]

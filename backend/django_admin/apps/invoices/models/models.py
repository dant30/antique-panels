import uuid
from django.db import models
from apps.customers.models.models import Customer
from apps.job_cards.models.models import JobCard

class InvoiceStatus(models.TextChoices):
    DRAFT = 'DRAFT', 'Draft Estimate / Quotation'
    ISSUED = 'ISSUED', 'Issued to Client'
    PARTIALLY_PAID = 'PARTIALLY_PAID', 'Partially Paid'
    PAID = 'PAID', 'Fully Paid & Cleared'
    VOID = 'VOID', 'Void / Cancelled'

class Invoice(models.Model):
    invoice_number = models.CharField(max_length=30, unique=True, editable=False)
    customer = models.ForeignKey(Customer, on_delete=models.PROTECT, related_name='invoices')
    job_card = models.ForeignKey(JobCard, on_delete=models.SET_NULL, null=True, blank=True, related_name='invoices')
    subtotal_amount = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    vat_percentage = models.DecimalField(max_digits=5, decimal_places=2, default=16.00, help_text="Kenya Standard VAT (16%)")
    vat_amount = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    discount_amount = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    total_amount = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    amount_paid = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    status = models.CharField(max_length=30, choices=InvoiceStatus.choices, default=InvoiceStatus.DRAFT)
    issue_date = models.DateField()
    due_date = models.DateField()
    notes = models.TextField(blank=True, null=True, help_text="Bank details, MPESA Paybill, Warranty terms")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-issue_date', '-created_at']

    def save(self, *args, **kwargs):
        if not self.invoice_number:
            self.invoice_number = f"INV-{uuid.uuid4().hex[:6].upper()}"
        super().save(*args, **kwargs)

    @property
    def balance_due(self):
        return self.total_amount - self.amount_paid

    def __str__(self):
        return f"{self.invoice_number} - {self.customer.last_name} (KES {self.total_amount})"

class InvoiceItem(models.Model):
    invoice = models.ForeignKey(Invoice, on_delete=models.CASCADE, related_name='items')
    description = models.CharField(max_length=255)
    quantity = models.DecimalField(max_digits=10, decimal_places=2, default=1.00)
    unit_price = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    line_total = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)

    def save(self, *args, **kwargs):
        self.line_total = self.quantity * self.unit_price
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.description} ({self.quantity} x {self.unit_price})"

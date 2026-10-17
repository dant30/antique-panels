import uuid
from django.db import models
from apps.invoices.model.models import Invoice

class PaymentMethod(models.TextChoices):
    MPESA = 'MPESA', 'Safaricom M-Pesa (C2B / Till / Paybill)'
    BANK_TRANSFER = 'BANK_TRANSFER', 'Direct Bank Wire (RTGS / EFT)'
    CREDIT_CARD = 'CREDIT_CARD', 'Credit / Debit Card (Visa, Mastercard)'
    CASH = 'CASH', 'Cash at Workshop Desk'
    CHEQUE = 'CHEQUE', 'Banker's Cheque'

class PaymentStatus(models.TextChoices):
    PENDING = 'PENDING', 'Pending Verification'
    COMPLETED = 'COMPLETED', 'Completed & Verified'
    FAILED = 'FAILED', 'Transaction Failed'
    REVERSED = 'REVERSED', 'Reversed / Refunded'

class Payment(models.Model):
    receipt_number = models.CharField(max_length=30, unique=True, editable=False)
    invoice = models.ForeignKey(Invoice, on_delete=models.CASCADE, related_name='payments')
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    payment_method = models.CharField(max_length=30, choices=PaymentMethod.choices, default=PaymentMethod.MPESA)
    transaction_reference = models.CharField(max_length=100, unique=True, help_text="M-Pesa Code e.g. QKH7129J8K or Bank Slip Ref")
    status = models.CharField(max_length=30, choices=PaymentStatus.choices, default=PaymentStatus.COMPLETED)
    payer_phone = models.CharField(max_length=30, blank=True, null=True)
    payer_name = models.CharField(max_length=150, blank=True, null=True)
    payment_date = models.DateTimeField(auto_now_add=True)
    notes = models.TextField(blank=True, null=True)

    class Meta:
        ordering = ['-payment_date']

    def save(self, *args, **kwargs):
        if not self.receipt_number:
            self.receipt_number = f"RCP-{uuid.uuid4().hex[:6].upper()}"
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.receipt_number} - {self.transaction_reference} (KES {self.amount})"

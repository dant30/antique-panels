from ..model.models import Payment, PaymentStatus
from apps.invoices.model.models import InvoiceStatus

class PaymentService:
    @staticmethod
    def record_successful_payment(payment: Payment) -> Payment:
        payment.status = PaymentStatus.COMPLETED
        payment.save()
        inv = payment.invoice
        inv.amount_paid += payment.amount
        if inv.amount_paid >= inv.total_amount:
            inv.status = InvoiceStatus.PAID
        else:
            inv.status = InvoiceStatus.PARTIALLY_PAID
        inv.save()
        return payment

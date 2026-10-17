from django.test import TestCase
from apps.customers.model.models import Customer
from apps.invoices.model.models import Invoice
from ..model.models import Payment
import datetime

class PaymentModelTest(TestCase):
    def test_payment(self):
        c = Customer.objects.create(first_name="Payer", last_name="One", phone_number="+254700000001")
        inv = Invoice.objects.create(customer=c, issue_date=datetime.date.today(), due_date=datetime.date.today(), total_amount=50000)
        p = Payment.objects.create(invoice=inv, amount=50000, transaction_reference="MPESA123456")
        self.assertTrue(p.receipt_number.startswith("RCP-"))

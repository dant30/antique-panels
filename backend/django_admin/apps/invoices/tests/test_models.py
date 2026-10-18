from django.test import TestCase
from apps.customers.models.models import Customer
from ..models.models import Invoice
import datetime

class InvoiceModelTest(TestCase):
    def test_invoice(self):
        c = Customer.objects.create(first_name="Car", last_name="Owner", phone_number="+254700000000")
        inv = Invoice.objects.create(customer=c, issue_date=datetime.date.today(), due_date=datetime.date.today())
        self.assertTrue(inv.invoice_number.startswith("INV-"))

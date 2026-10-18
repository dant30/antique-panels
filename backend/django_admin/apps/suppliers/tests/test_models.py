from django.test import TestCase
from ..models.models import Supplier

class SupplierModelTest(TestCase):
    def test_supplier(self):
        s = Supplier.objects.create(name="Apex Paint Supplies", phone="+254711223344")
        self.assertEqual(s.name, "Apex Paint Supplies")

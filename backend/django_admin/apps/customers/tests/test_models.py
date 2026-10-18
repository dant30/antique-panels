from django.test import TestCase
from ..models.models import Customer

class CustomerModelTest(TestCase):
    def test_customer(self):
        c = Customer.objects.create(first_name="Dan", last_name="K", phone_number="+254721757776")
        self.assertEqual(c.first_name, "Dan")

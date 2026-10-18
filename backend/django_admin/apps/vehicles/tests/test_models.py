from django.test import TestCase
from apps.customers.models.models import Customer
from ..models.models import Vehicle

class VehicleModelTest(TestCase):
    def test_vehicle(self):
        c = Customer.objects.create(first_name="Alice", last_name="M", phone_number="+254711111111")
        v = Vehicle.objects.create(owner=c, license_plate="KBZ001A", make="Toyota", model="Land Cruiser FJ40", year=1978)
        self.assertEqual(v.make, "Toyota")

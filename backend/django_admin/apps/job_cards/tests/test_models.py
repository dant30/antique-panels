from django.test import TestCase
from apps.customers.model.models import Customer
from apps.vehicles.model.models import Vehicle
from ..model.models import JobCard

class JobCardModelTest(TestCase):
    def test_job_card(self):
        c = Customer.objects.create(first_name="Bob", last_name="M", phone_number="+254700111222")
        v = Vehicle.objects.create(owner=c, license_plate="KBB100A", make="Jaguar", model="E-Type", year=1968)
        jc = JobCard.objects.create(vehicle=v, scope_of_work="Rotisserie body restoration")
        self.assertTrue(jc.job_number.startswith("JC-"))

from django.test import TestCase
from ..model.models import Booking
import datetime

class BookingModelTest(TestCase):
    def test_booking_reference(self):
        b = Booking.objects.create(
            vehicle_registration="KDD 123A",
            vehicle_make="Ford",
            vehicle_model="Mustang",
            preferred_date=datetime.date.today()
        )
        self.assertTrue(b.reference_number.startswith("AP-"))

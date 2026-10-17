from django.views.generic import ListView
from django.contrib.auth.mixins import LoginRequiredMixin
from ..model.models import Booking

class BookingCalendarView(LoginRequiredMixin, ListView):
    model = Booking
    template_name = 'bookings/calendar.html'
    context_object_name = 'bookings'

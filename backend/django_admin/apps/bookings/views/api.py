from rest_framework import viewsets
from ..models.models import Booking
from ..serializers.serializers import BookingSerializer
from ..permissions import BookingPermission

class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [BookingPermission]
    search_fields = ['reference_number', 'vehicle_registration', 'guest_phone']
    filterset_fields = ['status', 'needs_towing', 'preferred_date']

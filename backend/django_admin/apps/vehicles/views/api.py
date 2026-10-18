from rest_framework import viewsets
from ..models.models import Vehicle
from ..serializers.serializers import VehicleSerializer

class VehicleViewSet(viewsets.ModelViewSet):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer
    search_fields = ['license_plate', 'vin', 'make', 'model']
    filterset_fields = ['era', 'make', 'year']

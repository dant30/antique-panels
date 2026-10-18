from rest_framework import viewsets
from ..models.models import WorkshopService
from ..serializers.serializers import WorkshopServiceSerializer
from ..permissions import ServicePermission

class WorkshopServiceViewSet(viewsets.ModelViewSet):
    queryset = WorkshopService.objects.filter(is_active=True)
    serializer_class = WorkshopServiceSerializer
    permission_classes = [ServicePermission]
    search_fields = ['name', 'short_description']
    filterset_fields = ['category', 'featured']

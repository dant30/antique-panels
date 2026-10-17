from rest_framework import viewsets
from ..model.models import InventoryItem
from ..serializer.serializers import InventoryItemSerializer
from ..permissions import InventoryPermission

class InventoryItemViewSet(viewsets.ModelViewSet):
    queryset = InventoryItem.objects.all()
    serializer_class = InventoryItemSerializer
    permission_classes = [InventoryPermission]
    search_fields = ['sku', 'name', 'location_bin']
    filterset_fields = ['category', 'is_active']

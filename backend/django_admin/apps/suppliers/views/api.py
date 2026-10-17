from rest_framework import viewsets
from ..model.models import Supplier
from ..serializer.serializers import SupplierSerializer
from ..permissions import SupplierPermission

class SupplierViewSet(viewsets.ModelViewSet):
    queryset = Supplier.objects.all()
    serializer_class = SupplierSerializer
    permission_classes = [SupplierPermission]
    search_fields = ['name', 'contact_person', 'phone']

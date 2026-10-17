from rest_framework import viewsets
from ..model.models import Invoice
from ..serializer.serializers import InvoiceSerializer
from ..permissions import InvoicePermission

class InvoiceViewSet(viewsets.ModelViewSet):
    queryset = Invoice.objects.all()
    serializer_class = InvoiceSerializer
    permission_classes = [InvoicePermission]
    search_fields = ['invoice_number', 'customer__first_name', 'customer__last_name']
    filterset_fields = ['status', 'issue_date']

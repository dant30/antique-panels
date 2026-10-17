from rest_framework import viewsets
from ..model.models import Payment
from ..serializer.serializers import PaymentSerializer
from ..permissions import PaymentPermission

class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
    permission_classes = [PaymentPermission]
    search_fields = ['receipt_number', 'transaction_reference']
    filterset_fields = ['payment_method', 'status']

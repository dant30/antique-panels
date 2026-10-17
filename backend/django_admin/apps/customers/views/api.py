from rest_framework import viewsets
from ..model.models import Customer
from ..serializer.serializers import CustomerSerializer

class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    search_fields = ['first_name', 'last_name', 'phone_number', 'email', 'kra_pin']
    filterset_fields = ['customer_type', 'is_vip', 'city']

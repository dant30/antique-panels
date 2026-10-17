from rest_framework import serializers
from ..model.models import Payment

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'
        read_only_fields = ['receipt_number', 'payment_date']

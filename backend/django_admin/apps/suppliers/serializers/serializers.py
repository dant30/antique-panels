from rest_framework import serializers
from ..model.models import Supplier

class SupplierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supplier
        fields = '__all__'

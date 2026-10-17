from rest_framework import serializers
from ..model.models import InventoryItem

class InventoryItemSerializer(serializers.ModelSerializer):
    is_low_stock = serializers.BooleanField(read_only=True)
    class Meta:
        model = InventoryItem
        fields = '__all__'

from rest_framework import serializers
from ..models.models import Vehicle

class VehicleSerializer(serializers.ModelSerializer):
    owner_name = serializers.CharField(source='owner.__str__', read_only=True)
    class Meta:
        model = Vehicle
        fields = '__all__'

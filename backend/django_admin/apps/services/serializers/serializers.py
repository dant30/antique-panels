from rest_framework import serializers
from ..models.models import WorkshopService

class WorkshopServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkshopService
        fields = '__all__'

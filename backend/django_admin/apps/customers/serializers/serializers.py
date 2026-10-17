from rest_framework import serializers
from ..model.models import Customer

class CustomerSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField()
    class Meta:
        model = Customer
        fields = '__all__'

    def get_full_name(self, obj):
        return f"{obj.first_name} {obj.last_name}"

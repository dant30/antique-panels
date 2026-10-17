from rest_framework import serializers
from ..model.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'role', 'phone_number', 'badge_number', 'is_active_technician', 'hourly_labor_rate', 'created_at']
        read_only_fields = ['id', 'created_at']

class UserBriefSerializer(serializers.ModelSerializer):
    full_name = serializers.CharField(source='get_full_name', read_only=True)
    class Meta:
        model = User
        fields = ['id', 'full_name', 'role', 'badge_number', 'phone_number']

from rest_framework import serializers
from ..model.models import AuditLog

class AuditLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuditLog
        fields = '__all__'

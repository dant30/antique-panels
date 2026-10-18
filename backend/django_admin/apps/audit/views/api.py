from rest_framework import viewsets
from ..models.models import AuditLog
from ..serializers.serializers import AuditLogSerializer
from ..permissions import AuditPermission

class AuditLogViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AuditLog.objects.all()
    serializer_class = AuditLogSerializer
    permission_classes = [AuditPermission]

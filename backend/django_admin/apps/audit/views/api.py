from rest_framework import viewsets
from ..model.models import AuditLog
from ..serializer.serializers import AuditLogSerializer
from ..permissions import AuditPermission

class AuditLogViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AuditLog.objects.all()
    serializer_class = AuditLogSerializer
    permission_classes = [AuditPermission]

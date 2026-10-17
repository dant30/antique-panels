from rest_framework import viewsets
from ..model.models import Notification
from ..serializer.serializers import NotificationSerializer
from ..permissions import NotificationPermission

class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
    permission_classes = [NotificationPermission]
    search_fields = ['recipient_identifier', 'subject']
    filterset_fields = ['channel', 'status']

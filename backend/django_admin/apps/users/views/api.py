from rest_framework import viewsets, permissions
from ..model.models import User
from ..serializer.serializers import UserSerializer
from ..permissions import IsAdminOrManager

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated, IsAdminOrManager]
    filterset_fields = ['role', 'is_active_technician']
    search_fields = ['first_name', 'last_name', 'email', 'badge_number', 'phone_number']

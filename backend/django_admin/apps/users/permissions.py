from rest_framework import permissions

class IsAdminOrManager(permissions.BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_authenticated and (
            request.user.is_staff or getattr(request.user, 'role', '') in ['ADMIN', 'WORKSHOP_MANAGER']
        ))

class IsTechnicianOrStaff(permissions.BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_authenticated and (
            request.user.is_staff or getattr(request.user, 'is_active_technician', False)
        ))

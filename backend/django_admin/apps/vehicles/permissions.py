from rest_framework import permissions

class VehiclePermission(permissions.BasePermission):
    def has_permission(self, request, view):
        return True

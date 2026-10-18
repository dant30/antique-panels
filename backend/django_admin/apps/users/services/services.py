from ..models.models import User, UserRole

class UserService:
    @staticmethod
    def get_available_technicians(specialty=None):
        qs = User.objects.filter(is_active=True, is_active_technician=True)
        if specialty:
            qs = qs.filter(specialties__contains=[specialty])
        return qs

    @staticmethod
    def assign_technician_role(user: User, role: str, badge_number: str = None):
        user.role = role
        user.is_active_technician = role in [
            UserRole.LEAD_TECHNICIAN, UserRole.PAINTER, UserRole.PANEL_BEATER, UserRole.MECHANIC
        ]
        if badge_number:
            user.badge_number = badge_number
        user.save()
        return user

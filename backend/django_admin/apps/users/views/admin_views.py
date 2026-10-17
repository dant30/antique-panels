from django.views.generic import ListView
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from ..model.models import User

class StaffRosterListView(LoginRequiredMixin, UserPassesTestMixin, ListView):
    model = User
    template_name = 'users/staff_roster.html'
    context_object_name = 'staff_members'

    def test_func(self):
        return self.request.user.is_staff or getattr(self.request.user, 'role', '') in ['ADMIN', 'WORKSHOP_MANAGER']

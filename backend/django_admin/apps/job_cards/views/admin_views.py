from django.views.generic import ListView
from django.contrib.auth.mixins import LoginRequiredMixin
from ..model.models import JobCard

class WorkshopKanbanBoardView(LoginRequiredMixin, ListView):
    model = JobCard
    template_name = 'job_cards/kanban_board.html'
    context_object_name = 'active_jobs'

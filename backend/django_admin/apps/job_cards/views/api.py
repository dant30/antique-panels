from rest_framework import viewsets
from ..models.models import JobCard
from ..serializers.serializers import JobCardSerializer
from ..permissions import JobCardPermission

class JobCardViewSet(viewsets.ModelViewSet):
    queryset = JobCard.objects.all()
    serializer_class = JobCardSerializer
    permission_classes = [JobCardPermission]
    search_fields = ['job_number', 'vehicle__license_plate']
    filterset_fields = ['current_stage', 'bay_number', 'is_blocked']

from rest_framework import viewsets
from ..models.models import GeneratedReport
from ..serializers.serializers import GeneratedReportSerializer
from ..permissions import ReportPermission

class GeneratedReportViewSet(viewsets.ModelViewSet):
    queryset = GeneratedReport.objects.all()
    serializer_class = GeneratedReportSerializer
    permission_classes = [ReportPermission]

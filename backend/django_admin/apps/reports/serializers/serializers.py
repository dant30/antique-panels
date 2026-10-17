from rest_framework import serializers
from ..model.models import GeneratedReport

class GeneratedReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = GeneratedReport
        fields = '__all__'

from rest_framework import serializers
from ..models.models import JobCard, JobCardPhotoLog

class JobCardPhotoLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobCardPhotoLog
        fields = '__all__'

class JobCardSerializer(serializers.ModelSerializer):
    photo_logs = JobCardPhotoLogSerializer(many=True, read_only=True)
    vehicle_plate = serializers.CharField(source='vehicle.license_plate', read_only=True)
    vehicle_info = serializers.CharField(source='vehicle.__str__', read_only=True)

    class Meta:
        model = JobCard
        fields = '__all__'
        read_only_fields = ['job_number', 'created_at', 'updated_at']

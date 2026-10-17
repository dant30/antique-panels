from django.urls import path, include
from rest_framework.routers import DefaultRouter
from ..views.api import GeneratedReportViewSet

router = DefaultRouter()
router.register(r'', GeneratedReportViewSet, basename='reports')

urlpatterns = [
    path('', include(router.urls)),
]

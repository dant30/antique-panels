from django.urls import path, include
from rest_framework.routers import DefaultRouter
from ..views.api import JobCardViewSet

router = DefaultRouter()
router.register(r'', JobCardViewSet, basename='job_cards')

urlpatterns = [
    path('', include(router.urls)),
]

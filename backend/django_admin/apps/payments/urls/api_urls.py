from django.urls import path, include
from rest_framework.routers import DefaultRouter
from ..views.api import PaymentsViewSet

router = DefaultRouter()
router.register(r'', PaymentsViewSet, basename='payments')

urlpatterns = [
    path('', include(router.urls)),
]

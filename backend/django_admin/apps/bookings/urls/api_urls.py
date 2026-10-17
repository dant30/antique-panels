from django.urls import path, include
from rest_framework.routers import DefaultRouter
from ..views.api import BookingsViewSet

router = DefaultRouter()
router.register(r'', BookingsViewSet, basename='bookings')

urlpatterns = [
    path('', include(router.urls)),
]

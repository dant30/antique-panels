from django.urls import path, include
from rest_framework.routers import DefaultRouter
from ..views.api import VehiclesViewSet

router = DefaultRouter()
router.register(r'', VehiclesViewSet, basename='vehicles')

urlpatterns = [
    path('', include(router.urls)),
]

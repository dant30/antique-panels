from django.urls import path, include
from rest_framework.routers import DefaultRouter
from ..views.api import WorkshopServiceViewSet

router = DefaultRouter()
router.register(r'', WorkshopServiceViewSet, basename='services')

urlpatterns = [
    path('', include(router.urls)),
]

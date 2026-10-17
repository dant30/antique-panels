from django.urls import path, include
from rest_framework.routers import DefaultRouter
from ..views.api import SuppliersViewSet

router = DefaultRouter()
router.register(r'', SuppliersViewSet, basename='suppliers')

urlpatterns = [
    path('', include(router.urls)),
]

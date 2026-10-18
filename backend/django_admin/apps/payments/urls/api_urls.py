from django.urls import path, include
from rest_framework.routers import DefaultRouter
from ..views.api import PaymentViewSet

router = DefaultRouter()
router.register(r'', PaymentViewSet, basename='payments')

urlpatterns = [
    path('', include(router.urls)),
]

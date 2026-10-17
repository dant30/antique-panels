from django.urls import path, include
from rest_framework.routers import DefaultRouter
from ..views.api import CustomersViewSet

router = DefaultRouter()
router.register(r'', CustomersViewSet, basename='customers')

urlpatterns = [
    path('', include(router.urls)),
]

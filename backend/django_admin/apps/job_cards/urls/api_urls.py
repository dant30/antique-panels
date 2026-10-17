from django.urls import path, include
from rest_framework.routers import DefaultRouter
from ..views.api import JobCardsViewSet

router = DefaultRouter()
router.register(r'', JobCardsViewSet, basename='job_cards')

urlpatterns = [
    path('', include(router.urls)),
]

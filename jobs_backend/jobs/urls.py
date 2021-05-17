from django.urls import path, include
from .views import JobViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', JobViewSet, basename='job')
urlpatterns = router.urls
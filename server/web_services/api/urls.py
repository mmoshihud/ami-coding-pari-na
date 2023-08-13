from django.urls import path
from web_services.api.views import create_user

urlpatterns = [path("user", create_user)]

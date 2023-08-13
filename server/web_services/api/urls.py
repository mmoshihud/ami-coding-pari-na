from django.urls import path

from web_services.api.views import test

urlpatterns = [path("test", test)]

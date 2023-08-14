from django.urls import path
from web_services.api.views import create_user, logout, khoj_the_search
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path("login", obtain_auth_token),
    path("user", create_user),
    path("logout", logout),
    path("khoj-search", khoj_the_search),
]

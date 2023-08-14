from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from web_services.api.views import *

urlpatterns = [
    path("login", obtain_auth_token),
    path("user", create_user),
    path("logout", logout),
    path("khoj-search", khoj_the_search),
    path("input-values", get_all_input_values),
]

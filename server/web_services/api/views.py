from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from web_services.api.serializers import UserSerializer
from rest_framework.authtoken.models import Token
from rest_framework import status


@api_view(["POST"])
def create_user(request):
    if request.method == "POST":
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token, created = Token.objects.get_or_create(user=user)
            response_data = {
                "user": serializer.data,
                "token": token.key,
            }
            return Response(response_data, status=201)
        return Response(serializer.errors, status=400)


@api_view(["POST"])
def logout(request):
    if request.method == "POST":
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)

from rest_framework.decorators import api_view
from rest_framework.response import Response
from web_services.api.serializers import UserSerializer
from django.contrib.auth.models import User


@api_view(["GET", "POST"])
def create_user(request):
    if request.method == "GET":
        all_users = User.objects.all()
        serializer = UserSerializer(all_users, many=True)
        return Response(serializer.data)

    if request.method == "POST":
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

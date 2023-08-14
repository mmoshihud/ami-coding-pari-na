from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view
from rest_framework.response import Response
from web_services.api.serializers import SearchValueSerializer
from web_services.api.serializers import UserSerializer


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


@api_view(["POST"])
def khoj_the_search(request):
    if request.method == "POST":
        input_values = request.data.get("input_values")
        search_value = request.data.get("search_value")
        user = request.user

        input_values = [int(x.strip()) for x in input_values.split(",")]
        input_values.sort(reverse=True)

        sorted_input_values = ",".join(map(str, input_values))

        serializer = SearchValueSerializer(
            data={
                "user": user.id,
                "input_values": sorted_input_values,
            }
        )
        if serializer.is_valid():
            serializer.save()
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        search_result = search_value in sorted_input_values

        return Response({"result": search_result}, status=status.HTTP_200_OK)

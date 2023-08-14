from django.contrib.auth.models import User
from rest_framework import serializers
from web_services.models import InputValue


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        if User.objects.filter(email=validated_data["email"]).exists():
            raise serializers.ValidationError("Email address already in use")
        user = User.objects.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
            password=validated_data["password"],
        )
        return user


class InputValueSerializer(serializers.ModelSerializer):
    class Meta:
        model = InputValue
        fields = "__all__"

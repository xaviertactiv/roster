from rest_framework import serializers
from users.serializers import BaseUserSerializer

from .models import Job, Category, Tag


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('id', 'name')


class JobSerializer(serializers.ModelSerializer):
    """ job serializer
    """
    contractor = BaseUserSerializer()
    user_hired = BaseUserSerializer()
    categories = CategorySerializer(many=True)
    tags = TagSerializer(many=True)

    class Meta:
        model = Job
        fields = (
            'id',
            'title',
            'contractor',
            'description',
            'categories',
            'tags',
            'date_created',
            'date_updated',
            'user_hired',
        )
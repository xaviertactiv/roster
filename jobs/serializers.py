from rest_framework import serializers
from users.serializers import (
    UserSerializer,
    ClientSerializer,
    ContractorSerializer,
)

from .models import Job, Category, Tag, Application


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
    client = ClientSerializer(read_only=True)
    user_hired = ContractorSerializer(read_only=True)
    categories = CategorySerializer(required=False, many=True)
    tags = TagSerializer(required=False, many=True)

    class Meta:
        model = Job
        fields = (
            'id',
            'title',
            'client',
            'description',
            'categories',
            'tags',
            'date_created',
            'date_updated',
            'user_hired',
        )

    def __init__(self, *args, **kwargs):
        self.user = kwargs.pop('user', None)
        return super(JobSerializer, self).__init__(*args, **kwargs)

    def create(self, data):
        return self.Meta.model.objects.create(
            client=self.user.client_set.get(),
            **data,
        )

class ApplicationSerializer(serializers.ModelSerializer):
    """job application serializer
    """
    contractor = ContractorSerializer(read_only=True)
    job = serializers.CharField(min_length=1,allow_blank=True)
    status = serializers.CharField(source='get_status_choices_display', read_only=True)

    class Meta:
        model = Application
        fields = (
            'id', 
            'contractor',
            'job',
            'details',
            'rate',
            'status'
        )
    
    def __init__(self, *args, **kwargs):
        self.user = kwargs.pop('user', None)
        return super(ApplicationSerializer, self).__init__(*args, **kwargs)
    
    def create(self, data):
        job_id = data.pop('job')
        return self.Meta.model.objects.create(
            contractor=self.user.contractor_set.get(),
            job=Job.objects.get(pk=job_id),
            **data
        )


from .models import Contact

from rest_framework.serializers import(
    ModelSerializer,

)


class ContactAppSerializer(ModelSerializer):

    class Meta:
        model = Contact
        fields = ('name', 'id', 'phone_number')

    def create(self, validated_data):
        """
        Create and return a new `Contact` instance, given the validated data.
        """

        return Contact.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Contact` instance, given the validated data.
        """

        instance.name = validated_data.get('name', instance.name)
        instance.phone_number = validated_data.get(
            'phone_number', instance.phone_number)
        instance.save()
        return instance

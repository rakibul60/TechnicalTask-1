from django.shortcuts import render

from taskapp.models import Contact
from taskapp.serializers import ContactAppSerializer
from rest_framework import generics


class ContactListView(generics.ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactAppSerializer


class ContactUpdateAndDeleteView(generics.RetrieveUpdateDestroyAPIView):

    queryset = Contact.objects.all()
    serializer_class = ContactAppSerializer
    lookup_field = 'id'
    lookup_url_kwarg = "id"

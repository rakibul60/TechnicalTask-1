
from django.contrib import admin
from django.urls import path, re_path, include
from taskapp.views import ContactListView, ContactUpdateAndDeleteView
from .views import IndexView


urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api-auth/', include('rest_framework.urls',
                                   namespace='rest_framework')),
    re_path(r'^api/v1/contact/create/$',
            ContactListView.as_view(), name='contact_list'),
    re_path(r'^api/v1/contact/(?P<id>\d+)/$',
            ContactUpdateAndDeleteView.as_view(), name='contact_update_delete'),
    re_path(r'^.*$', IndexView.as_view(), name='index')

]

from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from . import views

urlpatterns = [
    path('bookevent/', views.bookevent, name="bookevent"),
    path('booktable/', views.booktable, name="booktable"),
    path('contact/', views.contact, name="contact"),
    path('order/', views.order, name="order"),
    # Endpoint to obtain access token with provided credentials
    path('api/token/', views.obtain_token, name='obtain_token'),

    # Example endpoint that requires authentication
    path('api/<str:endpoint>/', views.dashboard, name='dashboard'),
    path('api/orderid/<str:endpoint>/', views.orderid, name='order'),
]

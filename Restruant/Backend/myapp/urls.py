from django.urls import path
from . import views

urlpatterns = [
    path('services/', views.service, name='members'),
    path('popularitems/', views.popularItems, name='popular'),
    path('testimonials/', views.testimonials, name='testimonial'),
    path('breakfast/', views.breakfastItems, name='breakfast'),
    path('lunch/', views.lunchItems, name='lunch'),
    path('dinner/', views.dinnerItems, name='dinner'),
    path('event/', views.event, name="event"),
    path('chef/', views.chef, name="chef"),
    path('gallery/', views.gallery, name="gallery")
]

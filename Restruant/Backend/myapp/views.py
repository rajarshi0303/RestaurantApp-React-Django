from myapp.models import Services, PopularItems, Testimonial
from .models import BreakfastItems, LunchItems, DinnerItems
from .models import Event, Chef, Gallery

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .Serializer import ServiceSerializer, PopularItemSerializer, TestimonialSerializer
from .Serializer import BreakfastItemsSerializer, DinnerItemsSerializer, LunchItemsSerializer
from .Serializer import EventSerializer, ChefSerializer, GallerySerializer


@api_view(['GET'])
def service(request):
    service = Services.objects.all()
    serializer = ServiceSerializer(service, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def popularItems(request):
    items = PopularItems.objects.all()
    serializer = PopularItemSerializer(items, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def testimonials(request):
    items = Testimonial.objects.all()
    serializer = TestimonialSerializer(items, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def breakfastItems(request):
    items = BreakfastItems.objects.all()
    serializer = BreakfastItemsSerializer(items, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def lunchItems(request):
    items = LunchItems.objects.all()
    serializer = LunchItemsSerializer(items, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def dinnerItems(request):
    items = DinnerItems.objects.all()
    serializer = DinnerItemsSerializer(items, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def event(request):
    items = Event.objects.all()
    serializer = EventSerializer(items, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def chef(request):
    items = Chef.objects.all()
    serializer = ChefSerializer(items, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def gallery(request):
    items = Gallery.objects.all()
    serializer = GallerySerializer(items, many=True)
    return Response(serializer.data)

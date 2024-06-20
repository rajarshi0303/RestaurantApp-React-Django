from rest_framework import serializers
from .models import Services, PopularItems, Testimonial
from .models import BreakfastItems, DinnerItems, LunchItems
from .models import Event, Chef, Gallery


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Services
        fields = "__all__"


class PopularItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = PopularItems
        fields = "__all__"


class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = "__all__"


class BreakfastItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = BreakfastItems
        fields = "__all__"


class LunchItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = LunchItems
        fields = "__all__"


class DinnerItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = DinnerItems
        fields = "__all__"


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = "__all__"


class ChefSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chef
        fields = "__all__"


class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = "__all__"

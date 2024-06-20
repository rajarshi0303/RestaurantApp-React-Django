from rest_framework import serializers
from .models import BookTable, BookEvent, Contact ,Customer,Order


class BookTableSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookTable
        fields = "__all__"


class BookEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookEvent
        fields = '__all__'


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model=Customer
        fields='__all__'

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model=Order
        fields = '__all__'
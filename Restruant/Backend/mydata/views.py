from tokenize import TokenError
from django.shortcuts import render
import json

from .models import Customer ,Order ,BookTable ,BookEvent ,Contact

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .Serializer import BookTableSerializer, BookEventSerializer, ContactSerializer
from.Serializer import CustomerSerializer,OrderSerializer

from rest_framework_simplejwt.tokens import AccessToken
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.authentication import JWTAuthentication

@api_view(['POST'])
def obtain_token(request):
    # Get username and password from request data
    username = request.data.get('username')
    password = request.data.get('password')

    # Authenticate user using provided credentials
    user = authenticate(username=username, password=password)

    # If authentication is successful, generate new access token and return it in response
    if user:
        token = AccessToken.for_user(user)
        return Response({'token': str(token)})
    
    # If authentication fails, return error response
    else:
        return Response({'error': 'Invalid credentials'}, status=400)

@api_view(['GET'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def dashboard(request, endpoint):
    if endpoint == "dashboard":
        customers = Customer.objects.all()
        serializer = CustomerSerializer(customers, many=True)
        data = serializer.data
    elif endpoint == "tablebookings":
        bookings = BookTable.objects.all()
        serializer = BookTableSerializer(bookings, many=True)
        data = serializer.data
    elif endpoint == "eventbookings":
        bookings = BookEvent.objects.all()
        serializer = BookEventSerializer(bookings, many=True)
        data = serializer.data
    elif endpoint == "contactus":
        bookings = Contact.objects.all()
        serializer = ContactSerializer(bookings, many=True)
        data = serializer.data
    else:
        data = {}
    print(data)
    return Response(data)

@api_view(['GET'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def orderid(request, endpoint):
    orders = Order.objects.filter(customer=endpoint)
    serializer = OrderSerializer(orders, many=True)
    data = serializer.data
    return Response(data)


@api_view(['POST'])
def bookevent(request):
    serializer = BookEventSerializer(data=request.data)
    print(request.data)
    if serializer.is_valid():
        print("Saving...............................")
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(['POST'])
def booktable(request):
    serializer = BookTableSerializer(data=request.data)
    print(request.data)
    if serializer.is_valid():
        print("Saving...............................")
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(['POST'])
def contact(request):
    print(request.data)
    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid():
        print("Saving...............................")
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

@api_view(['POST'])
def order(request):
    customer_data = request.data
    item_name_list = customer_data.pop('item_name', [])
    item_price_list = customer_data.pop('item_price', [])
    
    customer_serializer = CustomerSerializer(data=customer_data)
    if customer_serializer.is_valid():
        customer=customer_serializer.save()
        print(customer)
        for i in range(len(item_name_list)):
            order_data = {
                'item_name': item_name_list[i],
                'item_price': item_price_list[i],
                'customer': customer.id
            }
            print(order_data)
            order_serializer = OrderSerializer(data=order_data)
            if order_serializer.is_valid():
                order_serializer.save()
            else:
                return Response(order_serializer.errors, status=401)
        return Response(customer_serializer.data, status=201)
    else:
        return Response(customer_serializer.errors, status=400)
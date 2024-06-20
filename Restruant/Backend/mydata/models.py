from django.db import models


class BookTable(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    date = models.DateField()
    time = models.TimeField()
    number = models.IntegerField()
    message = models.TextField()


class BookEvent(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    event = models.CharField(max_length=255)
    date = models.DateField()
    time = models.TimeField()
    number = models.IntegerField()
    message = models.TextField()


class Contact(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField()
    subject = models.CharField(max_length=255)
    message = models.TextField()

class Customer(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=14)
    card_number = models.CharField(max_length=50)
    card_expiry = models.CharField(max_length=15)
    card_cvc = models.CharField(max_length=18)
    address = models.CharField(max_length=500)
    postal_code = models.CharField(max_length=20)
    delivery_fee = models.DecimalField(max_digits=10, decimal_places=2)
    discount = models.DecimalField(max_digits=10, decimal_places=2)
    service_fee = models.DecimalField(max_digits=10, decimal_places=2)
    total = models.DecimalField(max_digits=10, decimal_places=2)
    

class Order(models.Model):
    customer=models.ForeignKey(Customer,on_delete=models.CASCADE)
    item_name=models.CharField(max_length=100)
    item_price=models.DecimalField(max_digits=10,decimal_places=2)
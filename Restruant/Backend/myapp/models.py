from django.db import models


class Services(models.Model):
    icon = models.CharField(max_length=50)
    title = models.CharField(max_length=50)
    content = models.CharField(max_length=300)


class PopularItems(models.Model):
    src = models.CharField(max_length=70)
    name = models.CharField(max_length=100)
    content = models.CharField(max_length=200)
    price = models.IntegerField()


class Testimonial(models.Model):
    name = models.CharField(max_length=70)
    date = models.DateField()
    imageurl = models.CharField(max_length=100)
    content = models.CharField(max_length=800)
    rating = models.IntegerField()


class BreakfastItems(models.Model):
    src = models.CharField(max_length=70)
    name = models.CharField(max_length=100)
    content = models.CharField(max_length=200)
    price = models.IntegerField()


class LunchItems(models.Model):
    src = models.CharField(max_length=70)
    name = models.CharField(max_length=100)
    content = models.CharField(max_length=200)
    price = models.IntegerField()


class DinnerItems(models.Model):
    src = models.CharField(max_length=70)
    name = models.CharField(max_length=100)
    content = models.CharField(max_length=200)
    price = models.IntegerField()


class Event(models.Model):
    imageUrl = models.CharField(max_length=100)
    title = models.CharField(max_length=150)
    content = models.CharField(max_length=400)
    price = models.IntegerField()


class Chef(models.Model):
    imageUrl = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    profession = models.CharField(max_length=70)
    description = models.CharField(max_length=400)


class Gallery(models.Model):
    imageUrl = models.CharField(max_length=100)

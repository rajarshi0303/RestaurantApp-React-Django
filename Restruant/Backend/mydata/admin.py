from django.contrib import admin
from .models import BookTable, BookEvent, Contact ,Customer,Order
# Register your models here.

admin.site.register(BookTable)
admin.site.register(BookEvent)
admin.site.register(Contact)
admin.site.register(Customer)
admin.site.register(Order)
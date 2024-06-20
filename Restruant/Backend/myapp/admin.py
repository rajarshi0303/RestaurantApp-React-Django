from django.contrib import admin
from .models import Services, PopularItems, Testimonial
from .models import BreakfastItems, DinnerItems, LunchItems
from .models import Event, Chef, Gallery

# Register your models here.
admin.site.register(Services)
admin.site.register(PopularItems)
admin.site.register(Testimonial)

admin.site.register(BreakfastItems)
admin.site.register(DinnerItems)
admin.site.register(LunchItems)

admin.site.register(Event)
admin.site.register(Chef)
admin.site.register(Gallery)

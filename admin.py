from django.contrib import admin

from .models import Hero
from .models import echo

admin.site.register(Hero)
admin.site.register(echo)
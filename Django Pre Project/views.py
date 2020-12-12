from django.shortcuts import render
from rest_framework import viewsets

from .serializers import HeroSerializer
from .models import Hero

from .serializers import EchoSerializer
from .models import echo


class HeroViewSet(viewsets.ModelViewSet):
    queryset = Hero.objects.all().order_by('name')
    serializer_class = HeroSerializer


class EchoViewSet(viewsets.ModelViewSet):
    queryset = echo.objects.all()  #.order_by('message')
    serializer_class = EchoSerializer

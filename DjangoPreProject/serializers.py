from rest_framework import serializers

from .models import Hero
from .models import echo

class HeroSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Hero
        fields = ('name', 'alias')

class EchoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = echo
        fields = ('url', 'message')


        
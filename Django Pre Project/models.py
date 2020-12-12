from django.db import models

# Create your models here.

class Hero(models.Model):
    name = models.CharField(max_length=60)
    alias = models.CharField(max_length=60)
    def __str__(self):
        return self.name


class echo(models.Model):
    message = models.CharField(max_length=360)

    def __str__(self):
        return self.message
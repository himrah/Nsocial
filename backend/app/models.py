from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser,User
from datetime import datetime
from PIL import Image

class Flat(models.Model):
    # user = models.ForeignKey(User,on_delete=models.CASCADE) 
    number = models.CharField(max_length=20,null=True)
    def __str__(self):
        return self.number

class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    about = models.TextField(blank=True)
    phone = models.CharField(blank=True,max_length=10)
    gender = models.CharField(null=True,blank=True,max_length=10)
    isPhoneVisible = models.BooleanField(default=1)
    isNameVisible = models.BooleanField(default=1)
    flat = models.ForeignKey(Flat,related_name="flat", on_delete=models.CASCADE)
    pic = models.ImageField('pic',upload_to="photos",blank=True)
    def __str__(self):
        return self.user.username


#
#
#
#
#
#
#
#



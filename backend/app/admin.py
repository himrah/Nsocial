from django.contrib import admin
from app.models import *
# Register your models here.
admin.site.register(Flat)
admin.site.register(Profile)
admin.site.register(FlatUserRelation)
admin.site.register(Society)
admin.site.register(SocietyUserRelation)
admin.site.register(SocietyFlatRelation)
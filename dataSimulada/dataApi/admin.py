from django.contrib import admin
from .models import Tareas,Trabajadores,User

# Register your models here.
admin.site.register(Tareas)
admin.site.register(Trabajadores)
admin.site.register(User)
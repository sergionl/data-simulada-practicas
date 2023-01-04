from django.db import models

# Create your models here.

class User(models.Model):
    usuario = models.CharField(max_length=250)
    correo = models.CharField(max_length=250)
    contraseña = models.CharField(max_length=250)

    def __str__(self):
        return self.usuario

class Trabajadores(models.Model):
    usuario_id = models.ForeignKey(User,on_delete=models.CASCADE)

    nombres = models.CharField(max_length=250)
    apellidos = models.CharField(max_length=250)
    posicion = models.CharField(max_length=250)

    def __str__(self):
        return self.nombres

class Tareas(models.Model):
    usuario_id = models.ForeignKey(User,on_delete=models.CASCADE)

    titulo = models.CharField(max_length=250)
    descripcion = models.CharField(max_length=250)
    fecha_entrega = models.CharField(max_length=250)

    

    def __str__(self):
        return self.titulo

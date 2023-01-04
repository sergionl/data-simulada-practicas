from rest_framework import viewsets
from . import models
from . import serializers


from rest_framework.decorators import action
from rest_framework.response import Response
import pandas as pd

class UserViewset(viewsets.ModelViewSet):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer

    @action(detail = False, methods=['POST'])
    def login(self,request):
        correo = request.data["correo"]
        contraseña = request.data["contraseña"]

        user_info = models.User.objects.filter(correo = correo)
        serializer = serializers.UserSerializer(user_info, many = True)
        print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        print(user_info)
        #print(serializer.data)

        data = pd.DataFrame(serializer.data)

        data = data.to_dict()
        print(data)

        try:

            cont=data['contraseña'][0]
        except:
            return Response("no existe el usuario")
        
        try:
            print(contraseña,cont)
            
            if cont == contraseña:
                return Response(serializer.data)
            
        except:
            return Response("Contraseña incorrecta")
                

            
            
        return Response("Contraseña incorrecta")

        

    


class TrabajadorViewset(viewsets.ModelViewSet):
    queryset = models.Trabajadores.objects.all()
    serializer_class = serializers.TrabajadoresSerializer

    @action(detail = False, methods=['GET'])
    def trabajador_get_with_fk(self, request):
        
        u_id = request.query_params["u_id"]
    
        user_info = models.Trabajadores.objects.filter(usuario_id = u_id)
        print(user_info)
        serializer = serializers.TrabajadoresSerializer(user_info, many = True)

        return Response(serializer.data)


class TareaViewset(viewsets.ModelViewSet):
    queryset = models.Tareas.objects.all()
    serializer_class = serializers.TareasSerializer

    @action(detail = False, methods=['GET'])
    def tarea_get_with_fk(self, request):
        
        u_id = request.query_params["u_id"]
    
        user_info = models.Tareas.objects.filter(usuario_id = u_id)
        print(user_info)
        serializer = serializers.TareasSerializer(user_info, many = True)

        return Response(serializer.data)
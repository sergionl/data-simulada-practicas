from dataApi.viewsets import UserViewset,TrabajadorViewset,TareaViewset
from rest_framework import routers

router = routers.DefaultRouter()

router.register('user',UserViewset)
router.register('trabajo',TrabajadorViewset)
router.register('tarea',TareaViewset)
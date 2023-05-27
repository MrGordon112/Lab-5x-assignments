from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('car/', views.car_list),
    path('cars/all_id', views.car_id_list),
    path('car/<int:id>', views.car_detail),
    path('carTypes/', views.carType_list),
    path('carType/<int:id>', views.carType_detail),
    path('carType/filter/revenue/<int:revenue>', views.carType_filter_revenue),
    path('mechanics/', views.mechanic_list),
    path('mechanics/<int:id>', views.mechanic_detail),
    path('repaired/', views.repaired_list),
    path('repaired/<int:id>', views.repaired_detail),
    path('report/age/', views.car_average_age, name='car_average_age'),
]

urlpatterns = format_suffix_patterns(urlpatterns)

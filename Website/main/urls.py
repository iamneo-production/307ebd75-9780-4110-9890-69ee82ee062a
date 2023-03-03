from django.contrib import admin
from django.urls import path, include
from main import views
from django.views.generic import TemplateView

urlpatterns = [
    # path('', views.home, name='index'),
    path('', TemplateView.as_view(template_name = 'index.html')),
    path('Districts', views.district),
    path('Districts/Predictions', views.predictions),
    path('Districts/Predictions/Heat Wave', views.HeatWave),
    path('Districts/Predictions/AQI', views.AQI),
    path('Districts/Predictions/HEATWAVES/<slug:District>/<slug:HeatWave_ID>', views.HWMonth),
    path('Districts/Predictions/AQI/<slug:District>/<slug:AQI_ID>', views.AQIMonth),
]

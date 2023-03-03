import json
from pathlib import Path
import os
from django.http import JsonResponse, HttpResponse
from django.shortcuts import render
BASE_DIR = Path(__file__).resolve().parent.parent
def home(request):
    return render(request, "index.html")

def district(request):
    return render(request, "district.html")

def predictions(request):
    return render(request, "predictions.html")

def HeatWave(request):
    return render(request, "heatwave.html")

def AQI(request):
    # f = open(r"C:\Users\Sai Saran\Downloads\Adilabad AQI.json")
    # data = json.load(f)
    return render(request, '<html>{BASE_DIR}</html>')

def HWMonth(request, District = None, HeatWave_ID = None):
    # return HttpResponse(HeatWave_ID)
    month = HeatWave_ID
    if month == 'January':
        i = 0
    elif month == 'February':
        i = 1
    elif month == 'March':
        i = 2
    elif month == 'April':
        i = 3
    elif month == 'May':
        i = 4
    elif month == 'June':
        i = 5
    elif month == 'July':
        i = 6
    elif month == 'August':
        i = 7
    elif month == 'September':
        i = 8
    elif month == 'October':
        i = 9
    elif month == 'November':
        i = 10
    elif month == 'December':
        i = 11
    path1 = os.path.join(BASE_DIR, 'main/predictions/Heatwave')
    path2 = "/" + District +" Heatwave.json"
    path = path1 + path2
    f = open(path)
    data = json.load(f)
    return JsonResponse(data[i])

def AQIMonth(request, AQI_ID = None, District = None):
    month = AQI_ID
    if month == 'January':
        i = 0
    elif month == 'February':
        i = 1
    elif month == 'March':
        i = 2
    elif month == 'April':
        i = 3
    elif month == 'May':
        i = 4
    elif month == 'June':
        i = 5
    elif month == 'July':
        i = 6
    elif month == 'August':
        i = 7
    elif month == 'September':
        i = 8
    elif month == 'October':
        i = 9
    elif month == 'November':
        i = 10
    elif month == 'December':
        i = 11
    
    path1 = os.path.join(BASE_DIR, 'main/predictions/AQI')
    path2 = "/" + District +" AQI.json"
    path = path1 + path2
    f = open(path)
    data = json.load(f)
    return JsonResponse(data[i])
    
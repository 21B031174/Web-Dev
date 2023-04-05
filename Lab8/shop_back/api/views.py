from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
from django.http.response import JsonResponse
from api.models import *


def index(request):
    return render(request, 'products/index.html')

def products(request):
    prod = Product.objects.all()
    products_json = [p.to_json() for p in prod]
    return JsonResponse(products_json, safe=False)

def categories(request):
    try:
        cate = Category.objects.all()
        categories_json = [c.to_json() for c in cate]
    except:
        categories_json = []
    return JsonResponse(categories_json, safe=False)

def get_product(request,id):
    try:
        prod = Product.objects.get(id=id)
        product_json = prod.to_json()
    except:
        product_json = []
    return JsonResponse(product_json, safe=False)

def get_category(request,id):
    try:
        cate = Category.objects.get(id=id)
        category_json = cate.to_json()
    except:
        category_json = []
    return JsonResponse(category_json, safe=False)

def get_products_by_category(request,id):
    try:
        cate = Category.objects.get(id=id)
        products = Product.objects.filter(category=cate)
        products_json = [p.to_json() for p in products]
    except:
        products_json = []
    return JsonResponse(products_json, safe=False)
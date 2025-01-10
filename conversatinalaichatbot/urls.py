from django.contrib import admin
from django.urls import path
from chatbot import views

urlpatterns = [
    path('', views.index, name='index'),
    path('chat/', views.chat, name='chat'),
]

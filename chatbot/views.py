from django.http import JsonResponse
from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def chat(request):
    if request.method == 'POST':
        import json
        user_message = json.loads(request.body).get('message', '')
        
        # Replace with your AI chatbot integration logic
        response = "This is a placeholder response in Telugu."
        
        return JsonResponse({'response': response})

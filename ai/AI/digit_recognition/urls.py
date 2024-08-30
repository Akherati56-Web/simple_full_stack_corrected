from django.urls import path
from .views import DigitRecognitionView

urlpatterns = [
    path('recognize-digit/', DigitRecognitionView.as_view(), name='recognize_digit'),
]

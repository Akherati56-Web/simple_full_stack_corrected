from django.shortcuts import render
import numpy as np
import tensorflow as tf
from tflite_runtime.interpreter import Interpreter
from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import json

@method_decorator(csrf_exempt, name='dispatch')
class DigitRecognitionView(View):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        # Load TFLite model and allocate tensors
        model_path = 'digit_recognition/model/digit_recognition.tflite'
        self.interpreter = Interpreter(model_path=model_path)
        self.interpreter.allocate_tensors()

        # Get input and output tensors.
        self.input_details = self.interpreter.get_input_details()
        self.output_details = self.interpreter.get_output_details()

    def get(self, request, *args, **kwargs):
        return 'test'

    def post(self, request, *args, **kwargs):
        try:
            # Parse input data
            data = json.loads(request.body)
            image = np.array(data['image'], dtype=np.float32)
            image = image.reshape((1, 28, 28, 1))  # Reshape for the model input

            # Set the tensor to point to the input data to be inferred
            self.interpreter.set_tensor(self.input_details[0]['index'], image)

            # Run inference
            self.interpreter.invoke()

            # Get the output
            output_data = self.interpreter.get_tensor(self.output_details[0]['index'])
            predicted_digit = int(np.argmax(output_data))

            return JsonResponse({'digit': predicted_digit})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)


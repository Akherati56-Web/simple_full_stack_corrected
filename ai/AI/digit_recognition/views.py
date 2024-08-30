from django.shortcuts import render
from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import numpy as np
import io
from PIL import Image
from tflite_runtime.interpreter import Interpreter

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

    def post(self, request, *args, **kwargs):
        try:
            # Handle file upload
            uploaded_file = request.FILES['image']
            image = Image.open(uploaded_file)
            image = image.convert('L')  # Ensure image is in grayscale
            image = image.resize((28, 28))  # Resize to match model input
            image = np.array(image).astype(np.float32) / 255.0  # Normalize

            # Reshape to match the expected input shape: [1, 28, 28]
            image = image.reshape((1, 28, 28))

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


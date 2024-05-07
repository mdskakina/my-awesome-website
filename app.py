from flask import Flask, request, jsonify
from PIL import Image

app = Flask(__name__)

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/upload', methods=['POST'])
def upload():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'})

    image = request.files['image']
    image = Image.open(image)

    # Process the image (remove background)

    # Save the processed image
    processed_image_path = 'processed_image.png'
    image.save(processed_image_path)

    return jsonify({'url': processed_image_path})

if __name__ == '__main__':
    app.run(debug=True)

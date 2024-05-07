function uploadImage() {
    const fileInput = document.getElementById('imageInput');
    const file = fileInput.files[0];

    const formData = new FormData();
    formData.append('image', file);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        displayResult(data.url);
    })
    .catch(error => console.error('Error:', error));
}

function displayResult(imageUrl) {
    const resultContainer = document.getElementById('resultContainer');
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    resultContainer.innerHTML = '';
    resultContainer.appendChild(imgElement);
}

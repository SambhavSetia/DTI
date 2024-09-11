function detectDisease() {
    const imageUpload = document.getElementById('imageUpload');
    const diseaseInfo = document.getElementById('diseaseInfo');

    if (imageUpload.files.length === 0) {
        alert('Please upload an image first.');
        return;
    }

    // Placeholder for disease detection logic
    // You need to implement backend logic or call an API for detection

    diseaseInfo.textContent = "Analyzing the image...";

    // Simulate API call and response
    setTimeout(() => {
        // Simulated detection result
        const result = "Model Required!!!!";

        diseaseInfo.textContent = result;
    }, 2000);
}

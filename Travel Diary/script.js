// script.js

// Function to handle form submission
document.getElementById('entryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get values from the form
    const location = document.getElementById('location').value;
    const notes = document.getElementById('notes').value;
    const photo = document.getElementById('photo').files[0];

    // Create a FileReader to read the uploaded image
    const reader = new FileReader();
    reader.onload = function(e) {
        // Create a new journal entry element
        const entryHTML = `
            <div class="entry p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h3 class="font-bold text-lg text-blue-600">${location}</h3>
                <img src="${e.target.result}" alt="${location}" class="mt-2 rounded">
                <p class="mt-2 text-gray-700">${notes}</p>
            </div>
        `;
        // Insert the new entry into the entries section
        document.getElementById('entries').insertAdjacentHTML('beforeend', entryHTML);
    };
    
    // Read the image as a data URL
    reader.readAsDataURL(photo);

    // Clear the form after submission
    document.getElementById('entryForm').reset();
});
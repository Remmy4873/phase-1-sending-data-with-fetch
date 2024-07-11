// Add your code here


function submitData(name, email) {
    // Create the data object
    const data = {
        name: name,
        email: email
    };

    // Send the POST request using fetch
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        // Parse the JSON response
        return response.json();
    })
    .then(data => {
        // Append the new id to the DOM
        const idElement = document.createElement('p');
        idElement.textContent = `ID: ${data.id}`;
        document.body.appendChild(idElement);
    })
    .catch(error => {
        // Append the error message to the DOM
        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement);
    });
}
document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        const url = this.getAttribute('data-url'); // Retrieve the URL from the data attribute
        const alertMessage = document.getElementById("alertMessage");
        const notifications = document.getElementById("notifications");

        if (url === "http://malicious-site.com") {
            alertMessage.style.display = "block";
            alertMessage.textContent = `Warning! You clicked a phishing link: ${url}`;
            alertMessage.style.backgroundColor = "#dc3545"; 
            alertMessage.style.color = "white";

            // Send a phishing alert to the backend
            fetch('http://localhost:3000/phishing-alert', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ url: url })
            })
            .then(response => response.json())
            .then(data => {
                notifications.style.display = "block";
                notifications.innerHTML += `<div class="notification">Phishing alert for "${url}" has been sent to the backend.</div>`;
            })
            .catch(error => {
                console.error('Error:', error);
            });
        } else {
            alertMessage.style.display = "block";
            alertMessage.textContent = `Safe! You clicked a safe link: ${url}`;
            alertMessage.style.backgroundColor = "#28a745"; 
            alertMessage.style.color = "white";
        }
    });
});

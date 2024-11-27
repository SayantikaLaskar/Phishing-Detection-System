# Phishing Detection System

## Overview
The **Phishing Detection System** is a web-based application designed to help users identify malicious phishing websites and ensure their safety while browsing. This system alerts users when they click on a suspicious link, notifying them of potential phishing threats. The backend sends phishing alerts to a server for monitoring and logging.

The app consists of:
- A **client-side** interface where users can click on links to test whether they are safe or malicious.
- A **Node.js** server that logs phishing alerts and responds to requests.

## Features
- **Real-time phishing alerts:** Detects phishing links and warns users immediately.
- **Backend alerting:** Sends phishing reports to the backend server for tracking.
- **User-friendly interface:** Modern UI with visual alerts and animations.
- **Safe link identification:** Provides positive feedback for safe links.

## Tech Stack
- **Frontend:** HTML, CSS (with custom styles), JavaScript (for interactivity)
- **Backend:** Node.js with Express.js
- **Libraries:** 
  - **Express:** For building the server.
  - **Body-Parser:** To parse incoming request bodies.
  - **CORS:** For enabling Cross-Origin Resource Sharing.
  - **Orbitron Font:** For a futuristic look on the UI.
  
## Installation

### Clone the Repository
```bash
git clone https://github.com/your-username/phishing-detection-system.git
cd phishing-detection-system
```

### Install Dependencies
Install the backend dependencies using npm:
```bash
npm install
```

### Running the App
To start the application:
1. **Start the backend server:**
   ```bash
   npm start
   ```

2. **Open the `index.html` file in your browser.** The frontend should now be accessible, and you can interact with the phishing detection system.

### Testing the Links
Click on the links in the interface:
- **Malicious Link** (`http://malicious-site.com`) will trigger a phishing warning.
- **Safe Link** (`http://safe-site.com`) will confirm that the link is safe.

## Contributing
Contributions are welcome! If you find any bugs or want to add new features, feel free to open an issue or submit a pull request.

### How to Contribute
1. Fork the repository.
2. Clone your forked repository locally.
3. Create a new branch for your feature or bug fix.
4. Commit your changes and push them to your forked repository.
5. Submit a pull request to the original repository.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

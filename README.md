## Purpose

Honorlock is a dumb spy ware type of test monitoring service colleges use. They make use of fake websites with "test material" to find students attempting to find test materials. (**honey pots**)

An unsuspecting student taking a test may access "APCSA final B test answers" during the exam and there IP, time accessed, etc. would be reported leading to diciplanary actions. 

I think this is an infringnment on user privacy so I decided to create my own :)
Its completely free because i'm broke. 

Important to note that if screen was locked, students can use their phone to access test banks. The whole point of honey pots is to stop phone usage. 

You can compare test taking time with site access time. Possibly even run a comparison of ip. 

You can avoid this by using cellular!

## Whats used
- **Flask** – Lightweight web framework to handle logging requests
- **gunicorn** – WSGI server for Flask app (used in production via Render)

### Cloud & Hosting
- **Render** – Hosts the Flask server with HTTPS endpoint (free closed 50 second refresh)
- **Neon** – Cloud PostgreSQL database to store access logs
- **psycopg2** – PostgreSQL database adapter for Python

### Security & Config
- **Render Secrets** – Manage database URLs securely in production


## What it does
- Tracks when a user visits known honeypot URLs
- Automatically logs IP address, user-agent, and timestamp
- It runs in the background silenty. 
- Chrome extension fetches honeypot list dynamically
- Logs are stored in a PostgreSQL database on Neon for later review

![Architecture Diagram](architecture.png)
![Access Log](neon_log.png)

# Privacy Notice for chrome extension
Privacy Policy for honeyPotted Chrome Extension
Effective Date: May 24, 2025

Overview
The honeyPotted Chrome extension is a free and open-source tool designed to log access to known academic honeypot websites, commonly used by third-party proctoring services. It helps users understand when they visit these sites by recording metadata related to such visits.

We take your privacy seriously. This policy explains what data we collect, how it is used, and what control you have over it.

Information Collected
When you visit a known honeypot website (e.g., answersfinal.netlify.app), the extension collects and sends the following information to a secure, private database:

The full URL visited

Timestamp of the visit

Browser user-agent string

We do NOT collect names, emails, cookies, passwords, keystrokes, or any personally identifiable information (PII).

Purpose of Data Collection
The data is collected solely to:

Allow users to self-monitor their visits to suspicious academic sites.

Create a personal log that can be reviewed later for awareness and education.

Provide insights into potentially privacy-invasive surveillance systems.

Data Storage
All data is securely transmitted via HTTPS and stored in a PostgreSQL cloud database hosted by Neon.tech, protected by industry-standard encryption and access controls.

Data Sharing
We do not sell, rent, or share user data with any third parties. Access to the database is restricted solely to the extension owner for debugging and visualization purposes.

User Control
At any time, users can:

Disable or uninstall the extension

Contact the developer to request deletion of any stored logs (if applicable)

Changes to This Policy
Any updates to this Privacy Policy will be reflected on the project’s GitHub repository or Chrome Web Store listing. Continued use of the extension after changes constitutes acceptance of the new terms.

Contact
For any questions or concerns, contact:

Thavas Antonio
📧 Email: thavas.antonio@example.com
🔗 GitHub: github.com/BuddyBob/honeyPotted


# Privacy Notice for chrome extension
Privacy Policy for honeyPotted Chrome Extension
Effective Date: May 24, 2025

Overview
The honeyPotted Chrome extension is a free and open-source tool designed to log access to known academic honeypot websites, commonly used by third-party proctoring services. It helps users understand when they visit these sites by recording metadata related to such visits.

We take your privacy seriously. This policy explains what data we collect, how it is used, and what control you have over it.

Information Collected
When you visit a known honeypot website (e.g., answersfinal.netlify.app), the extension collects and sends the following information to a secure, private database:

The full URL visited

Timestamp of the visit

Browser user-agent string

We do NOT collect names, emails, cookies, passwords, keystrokes, or any personally identifiable information (PII).

Purpose of Data Collection
The data is collected solely to:

Allow users to self-monitor their visits to suspicious academic sites.

Create a personal log that can be reviewed later for awareness and education.

Provide insights into potentially privacy-invasive surveillance systems.

Data Storage
All data is securely transmitted via HTTPS and stored in a PostgreSQL cloud database hosted by Neon.tech, protected by industry-standard encryption and access controls.

Data Sharing
We do not sell, rent, or share user data with any third parties. Access to the database is restricted solely to the extension owner for debugging and visualization purposes.

User Control
At any time, users can:

Disable or uninstall the extension

Contact the developer to request deletion of any stored logs (if applicable)

Changes to This Policy
Any updates to this Privacy Policy will be reflected on the project’s GitHub repository or Chrome Web Store listing. Continued use of the extension after changes constitutes acceptance of the new terms.

Contact
For any questions or concerns, contact:

Thavas Antonio
📧 Email: thavas.antonio@example.com
🔗 GitHub: github.com/BuddyBob/honeyPotted

# Privacy Notice for chrome extension
Privacy Policy for honeyPotted Chrome Extension
Effective Date: May 24, 2025

Overview
The honeyPotted Chrome extension is a free and open-source tool designed to log access to known academic honeypot websites, commonly used by third-party proctoring services. It helps users understand when they visit these sites by recording metadata related to such visits.

We take your privacy seriously. This policy explains what data we collect, how it is used, and what control you have over it.

Information Collected
When you visit a known honeypot website (e.g., answersfinal.netlify.app), the extension collects and sends the following information to a secure, private database:

The full URL visited

Timestamp of the visit

Browser user-agent string

We do NOT collect names, emails, cookies, passwords, keystrokes, or any personally identifiable information (PII).

Purpose of Data Collection
The data is collected solely to:

Allow users to self-monitor their visits to suspicious academic sites.

Create a personal log that can be reviewed later for awareness and education.

Provide insights into potentially privacy-invasive surveillance systems.

Data Storage
All data is securely transmitted via HTTPS and stored in a PostgreSQL cloud database hosted by Neon.tech, protected by industry-standard encryption and access controls.

Data Sharing
We do not sell, rent, or share user data with any third parties. Access to the database is restricted solely to the extension owner for debugging and visualization purposes.

User Control
At any time, users can:

Disable or uninstall the extension

Contact the developer to request deletion of any stored logs (if applicable)

Changes to This Policy
Any updates to this Privacy Policy will be reflected on the project’s GitHub repository or Chrome Web Store listing. Continued use of the extension after changes constitutes acceptance of the new terms.

Contact
For any questions or concerns, contact:

Thavas Antonio
📧 Email: thavas.antonio@example.com
🔗 GitHub: github.com/BuddyBob/honeyPotted

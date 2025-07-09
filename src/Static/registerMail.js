export const registerMail = ()=>{
    return (`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Registering - Backend Mastery</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Arial', sans-serif;
            background-color: #f0f8f0;
            line-height: 1.6;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(46, 125, 50, 0.1);
        }
        
        .header {
            background: linear-gradient(135deg, #66bb6a, #4caf50);
            color: white;
            text-align: center;
            padding: 40px 20px;
        }
        
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: bold;
            text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .header .subtitle {
            margin: 10px 0 0 0;
            font-size: 16px;
            opacity: 0.9;
        }
        
        .content {
            padding: 40px 30px;
        }
        
        .greeting {
            font-size: 18px;
            color: #2e7d32;
            margin-bottom: 20px;
            font-weight: 600;
        }
        
        .message {
            color: #333333;
            font-size: 16px;
            margin-bottom: 25px;
        }
        
        .highlight-box {
            background-color: #e8f5e8;
            border-left: 4px solid #4caf50;
            padding: 20px;
            margin: 25px 0;
            border-radius: 5px;
        }
        
        .highlight-box h3 {
            margin: 0 0 10px 0;
            color: #2e7d32;
            font-size: 18px;
        }
        
        .highlight-box p {
            margin: 0;
            color: #555555;
        }
        
        .course-details {
            background-color: #f1f8e9;
            padding: 20px;
            border-radius: 8px;
            margin: 25px 0;
        }
        
        .course-details h3 {
            color: #2e7d32;
            margin: 0 0 15px 0;
            font-size: 20px;
        }
        
        .detail-item {
            display: flex;
            margin-bottom: 10px;
            align-items: center;
        }
        
        .detail-label {
            font-weight: bold;
            color: #388e3c;
            min-width: 100px;
        }
        
        .detail-value {
            color: #555555;
        }
        
        .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #66bb6a, #4caf50);
            color: white;
            text-decoration: none;
            padding: 15px 30px;
            border-radius: 25px;
            font-weight: bold;
            margin: 20px 0;
            text-align: center;
            transition: transform 0.2s ease;
        }
        
        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
        }
        
        .footer {
            background-color: #2e7d32;
            color: white;
            text-align: center;
            padding: 30px 20px;
        }
        
        .footer p {
            margin: 5px 0;
            font-size: 14px;
        }
        
        .footer .company-name {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        
        .social-links {
            margin: 20px 0;
        }
        
        .social-links a {
            color: #a5d6a7;
            text-decoration: none;
            margin: 0 10px;
            font-size: 14px;
        }
        
        .divider {
            height: 2px;
            background: linear-gradient(to right, #66bb6a, #4caf50, #66bb6a);
            margin: 30px 0;
            border: none;
        }
        
        @media (max-width: 600px) {
            .email-container {
                margin: 10px;
                border-radius: 5px;
            }
            
            .content {
                padding: 20px 15px;
            }
            
            .header {
                padding: 30px 15px;
            }
            
            .header h1 {
                font-size: 24px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header Section -->
        <div class="header">
            <h1> Registration Confirmed!</h1>
            <p class="subtitle">Welcome to Backend Mastery</p>
        </div>
        
        <!-- Main Content -->
        <div class="content">
            <div class="greeting">
                Hello there, Future Backend Developer! 
            </div>
            
            <p class="message">
                Thank you for registering for <strong>Backend Mastery</strong> organized by <strong>COTS</strong>! 
                We're thrilled to have you join us on this exciting journey to master backend development.
            </p>
            
            <div class="highlight-box">
                <h3> What's Next?</h3>
                <p>Get ready to dive deep into the world of backend development. You'll learn cutting-edge technologies, 
                best practices, and real-world applications that will transform you into a backend expert!</p>
            </div>
            
            <hr class="divider">
            
            <div class="course-details">
                <h3> Course Information</h3>
                <div class="detail-item">
                    <span class="detail-label">Course:</span>
                    <span class="detail-value">Backend Mastery</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Organizer:</span>
                    <span class="detail-value">COTS (Community of Tech Students)</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Level:</span>
                    <span class="detail-value">Beginner to Advanced</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Duration:</span>
                    <span class="detail-value">7 days Intensive Program</span>
                </div>
            </div>
            
            <div class="highlight-box">
                <h3> What You'll Learn</h3>
                <p>
                    • RESTful API Development<br>
                    • Database Design & Management<br>
                    • Authentication & Security<br>
                    • Performance Optimization<br>
                    • And much more!
                </p>
            </div>
            
            <center>
                <a href="#" class="cta-button">Access Course Materials </a>
            </center>
            
            <p class="message">
                We'll send you more details about the course schedule, materials, and joining instructions 
                shortly. In the meantime, feel free to reach out if you have any questions.
            </p>
            
            <p class="message">
                Ready to become a backend master? Let's code the future together! 💚
            </p>
        </div>
        
        <!-- Footer Section -->
        <div class="footer">
            <div class="company-name">COTS</div>
            <p>Community of Tech Students</p>
            <p>Empowering the next generation of developers</p>
            
            <div class="social-links">
                <a href="#">Website</a> |
                <a href="#">Discord</a> |
                <a href="#">LinkedIn</a> |
                <a href="#">GitHub</a>
            </div>
            
            <p style="font-size: 12px; opacity: 0.8; margin-top: 20px;">
                © 2025 COTS. All rights reserved.<br>
                You're receiving this email because you registered for Backend Mastery.
            </p>
        </div>
    </div>
</body>
</html>`)
}
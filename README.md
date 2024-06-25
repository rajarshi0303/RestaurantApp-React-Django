# Fullstack RestaurantApp
RestaurantApp is a full-stack web application for managing restaurant operations. It offers a comprehensive suite of features for both customers and restaurant staff, including features like online ordering, table booking, event booking, and a restaurant dashboard for viewing orders. It is built using React for the frontend and Django for the backend, with MySQL as the database.

## ✨ Features
* Online Ordering: Customers can conveniently browse the menu and place orders online.
* Restaurant Dashboard: Restaurant staff can view and manage incoming orders and track order status.
* Event Booking: Customers can book tables for special occasions or events through the app.
* Table Reservation: Customers can reserve tables in advance for a smooth dining experience.
* Admin Panel: Provides restaurant management with comprehensive control over user accounts, orders, menus, events, and table reservations.

## 🛠️ Technologies Used
* Frontend: HTML5, TailwindCSS, React.js, Framer-motion(animation) 
* Backend: Django
* Database: MySQL
* APIs: REST API with Django REST Framework

## Installation Guide

### Requirements
* Node.js
* Python
* MySQl

### Steps
Clone the Repository
```shell
git clone https://github.com/rajarshi0303/RestaurantApp-React-Django.git
cd RestaurantApp-React-Django
```
Set up the Frontend (ReactJs)
```shell
cd Restruant_Frontend
npm install
```
Start the React development server:
```shell
npm run dev
```

Set up the Backend (Django)
```shell
cd backend
```
Install Dependencies
```shell
pip install django
pip install djangorestframework
pip install djangorestframework-simplejwt
pip install django-cors-headers
pip install mysqlclient
```


## Usage
* Access the frontend application at http://localhost:3000
* Access the Django development server at http://127.0.0.1:8000/ in your web browser. This will display the restaurant application's frontend.
* You can create a superuser account for administrative access using the python manage.py createsuperuser command as mentioned in the installation steps.
* Explore the features of the application, such as online ordering, restaurant dashboard, event booking, table reservation, and admin panel functionality.

## Additional Notes
* Remember to replace placeholders with your actual database credentials in backend/settings.py.
* Configure email settings in backend/settings.py if you wish to send order confirmation emails or other notifications.
* Consider using a production-grade web server (e.g., Nginx, Gunicorn) for deployment in a real-world environment.

## Contributing
We welcome contributions to this project to enhance functionality and improve it. Please create pull requests to share your improvements and bug fixes.

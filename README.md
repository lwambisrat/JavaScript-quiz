# Project Summary

This project includes modules for handling customer orders with payment simulation, managing team tasks with progress tracking, scheduling and confirming job candidate interviews, tracking student progress and generating course certificates, and monitoring stock prices to trigger alerts. Together, these components showcase how object-oriented patterns and async/await can be used to solve common business and workflow  challenges in a clean and modular way.

## CustomerOrder

Manages customer orders with properties for order ID, a list of items (including name, quantity, price), and status.
Includes a method to calculate the total order amount.
Features an asynchronous payment simulation: after a 2-second delay, the order status changes to "paid" and a success message is printed.

## TeamMember


Represents a team member with a name, role, and a list of tasks (each task has a title and completion status).
Provides a method to mark tasks as completed by title.
Includes an asynchronous progress checker that resolves if all tasks are completed or rejects if any tasks are still pending.

## Candidate


Models a job candidate with a name, position applied for, and a list of scheduled interviews (with date and status).
Allows scheduling new interviews with a default "pending" status.
Supports an asynchronous interview confirmation, which waits 1 second before confirming and logging a message.
These classes showcase real-world OOP patterns, state management, and the use of Promises and async/await in JavaScript.

## Course Management Project

This project models a simple course management system. It allows an instructor to track each student’s progress in the course. The main features include updating a student’s 
progress and generating a course completion certificate when a student has finished all requirements. The certificate is only issued if the student’s progress reaches 100%, 
helping ensure only fully completed students are recognized.

## Stock Tracker Project

This project simulates a basic stock monitoring tool. Users can keep a watchlist of different stocks, each with a target price (threshold). The system allows real-time 
updates of stock prices and automatically checks if any stocks have reached or surpassed their alert threshold. If a stock meets the criteria, it triggers an alert, making 
It useful for monitoring investments or tracking market movements.


## Table of Contents

-Features

-Technologies

-Installation

-Usage

### Features

-CustomerOrder: 

Order management with total calculation and payment simulation.

-TeamMember: 

Task completion and progress tracking with async status checking.

-Candidate:

Interview scheduling and confirmation using Promises.


-Course: 

Student progress updates and certificate generation based on performance.


-StockTracker: 

Real-time stock alert system with async notifications.

### Technologies

-JavaScript 

-Node.js (for running and testing the code locally)

### Installation

Clone the repository   =git clone https://github.com/lwambisrat/JavaScript-quiz.git

Navigate to the project directory  =cd JavaScript-quiz


node index.js

### Usage

-Open index.js to view the class implementations and example usages.

-Run the file using Node.js to see live outputs of each class and method demonstration.

-Modify class instances and method calls to practice and experiment with the code.



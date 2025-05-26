// 1 Create a CustomerOrder class with properties: orderId (string), items (array of objects with name,
//  quantity, price), and status (string). Add a method calculateTotal() that returns the total order 
//  amount. Write an async method processPayment() that simulates payment with a Promise that resolves
//   after 2 seconds. After calling the method, change the status to "paid" and print a success message.


class CustomerOrder {
    constructor(orderId, items, status = "pending") {
      this.orderId = orderId;
      this.items = items; 
      this.status = status;
    }
calculateTotal() {
    let total = 0;
    for (let item of this.items) {
      total += item.quantity * item.price;
    }
    return total;
  }

  async processPayment() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    this.status = "paid";
    console.log("Payment successful!");
  }
}
const orderedItem = new CustomerOrder("obj001",[
    { name: "Nike", quantity: 2, price: 2000 },
    { name: "Allstar", quantity: 1, price: 3000 }
  ]
);

console.log("Total:", orderedItem.calculateTotal()); 
orderedItem.processPayment(); 

// 2 Create a TeamMember class that takes name, role, and an array of tasks (each task is an object with 
// title and completed boolean). Write a prototype method completeTask(taskTitle) that marks a task as completed.
//  Write another method checkProgress() that returns a Promise resolving to "All tasks completed!" or rejecting 
//  with "Pending tasks remaining" based on the state of the tasks array.


class TeamMember {
    constructor(name, role, tasks) {
      this.name = name;
      this.role = role;
      this.tasks = tasks; 
    }
  
    completeTask(taskTitle) {
      for (let task of this.tasks) {
        if (task.title === taskTitle) {
          task.completed = true;
        }
      }
    }
  
    checkProgress() {
      return new Promise((resolve, reject) => {
        const allCompleted = this.tasks.every(task => task.completed);
        if (allCompleted) {
          resolve("All tasks completed!");
        } else {
          reject("Pending tasks remaining");
        }
      });
    }
  }
  const employee = new TeamMember("Fiona", "Researcher", [
    { title: "Research", completed: false },
    { title: "Gather data", completed: true }
  ]);
  
  employee.completeTask("Research");
  employee.checkProgress()
    .then(msg => console.log(msg))
    .catch(err => console.log(err)); 
  
  employee.completeTask("Gather data");
  employee.checkProgress()
    .then(msg => console.log(msg))  
    .catch(err => console.log(err));

    // 3 Build a Candidate class with properties: name, position, and interviews (array of objects with date, status).
    //  Add a method scheduleInterview(date) that pushes a new interview with status "pending". Then write an async function 
    //  sendConfirmation() that returns a Promise that resolves after 1 second with a message "Interview confirmed with [name]", and log the message.

    class Candidate {
        constructor(name, position) {
          this.name = name;
          this.position = position;
          this.interviews = [];
        }
      
        scheduleInterview(date) {
          this.interviews.push({ date: date, status: "pending" });
        }
      
        async sendConfirmation() {
          return new Promise((resolve) => {
            setTimeout(() => {
              const message = `Interview confirmed with ${this.name}`;
              console.log(message);
              resolve(message);
            }, 1000);
          });
        }
      }
      
    
      const candidate = new Candidate("Marry Bisrat", "Quality Assurance");
      candidate.scheduleInterview("2025-09-12");
      candidate.sendConfirmation();

      //4 Design a Course class with properties: title, instructor, and students (array of student 
    //   objects with name and progress). Add a method updateProgress(studentName, value) that modifies
    //    the student’s progress. Create an async method generateCertificate(studentName) that returns
    //     a Promise resolving only if the progress is 100, otherwise reject with "Incomplete progress".

    class Course {
        constructor(title, instructor, students) {
          this.title = title;
          this.instructor = instructor;
          this.students = students; 
        }
      
        updateProgress(studentName, value) {
          const student = this.students.find(s => s.name === studentName);
          if (student) {
            student.progress = value;
          }
        }
      
        async generateCertificate(studentName) {
          const student = this.students.find(s => s.name === studentName);
          return new Promise((resolve, reject) => {
            if (student && student.progress === 100) {
              resolve(`Certificate generated for ${studentName}`);
            } else {
              reject("Incomplete progress");
            }
          });
        }
      }
      const course = new Course("Backend", "James", [
        { name: "Helen", progress: 70 },
        { name: "Jerry", progress: 100 }
      ]);
      
      course.updateProgress("Helen", 100);
      
      course.generateCertificate("Helen")
        .then(msg => console.log(msg)) 
        .catch(err => console.log(err));
      
      course.generateCertificate("Jerry")
        .then(msg => console.log(msg)) 
        .catch(err => console.log(err));
      
      course.generateCertificate("None")
        .then(msg => console.log(msg))
        .catch(err => console.log(err)); 

        // 5 Create a StockTracker class with a property watchlist (array of objects with symbol, 
        // threshold, currentPrice). Add a method updatePrice(symbol, newPrice) that updates the stock’s
        //  current price. Write an async method checkAlerts() that loops through the watchlist and returns
        //   a Promise resolving with a list of stocks where currentPrice >= threshold, or rejecting with "No alerts triggered".

        class StockTracker {
            constructor(watchlist) {
              this.watchlist = watchlist; 
            }
          
            updatePrice(symbol, newPrice) {
              const stock = this.watchlist.find(s => s.symbol === symbol);
              if (stock) {
                stock.currentPrice = newPrice;
              }
            }
          
            async checkAlerts() {
              return new Promise((resolve, reject) => {
                const triggered = this.watchlist.filter(
                  stock => stock.currentPrice >= stock.threshold
                );
                if (triggered.length > 0) {
                  resolve(triggered);
                } else {
                  reject("No alerts triggered");
                }
              });
            }
          }
          const tracker = new StockTracker([
            { symbol: "Sharesight", threshold: 300, currentPrice: 295 },
            { symbol: "kubera", threshold: 500, currentPrice: 300 }
          ]);
          
          tracker.updatePrice("Sharesight", 200);
          
          tracker.checkAlerts()
            .then(alerts => console.log("Alerts triggered:", alerts))
            .catch(msg => console.log(msg));
          


    
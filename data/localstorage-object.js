let localStorageData = {
    userData: {


      users: [
        {
          id: 1,
          username: "john_doe",
          password: "hashedPassword1", // Store hashed password securely
          firstName: "John",
          lastName: "Doe",
          email: "john.doe@example.com",
          // Add more user-related fields as needed
        },
        {
          id: 2,
          username: "jane_smith",
          password: "hashedPassword2",
          firstName: "Jane",
          lastName: "Smith",
          email: "jane.smith@example.com",
          // Add more user-related fields as needed
        }
        // Add more users as needed
      ],
      loggedInUser: null // To track the currently logged-in user
    },


    appData: {


      tasks: [
        {
          taskId: 1,
          taskTitle: "Task 1",
          taskDescription: "Description of Task 1",
          dueDate: "2024-06-30",
          assignedTo: "employeeId1" // Example employee ID
        },
        {
          taskId: 2,
          taskTitle: "Task 2",
          taskDescription: "Description of Task 2",
          dueDate: "2024-07-05",
          assignedTo: "employeeId2" // Example employee ID
        }
        // Add more tasks as needed
      ],



      employees: [
        {
          employeeId: "employeeId1",
          name: "Employee 1",
          department: "Department A"
          // Add more employee details as needed
        },
        {
          employeeId: "employeeId2",
          name: "Employee 2",
          department: "Department B"
          // Add more employee details as needed
        }
        // Add more employees as needed
      ],



      leaveApplications: [
        {
          applicationId: 1,
          employeeId: "employeeId1",
          leaveType: "Casual Leave",
          fromDate: "2024-07-01",
          toDate: "2024-07-02",
          reason: "Family vacation",
          leaveDuration: "Full Day"
        }
        // Add more leave applications as needed
      ],



      contactMessages: [
        {
          firstName: "John",
          lastName: "Doe",
          email: "john.doe@example.com",
          message: "Sample message content 1",
          timestamp: "2024-06-16T12:00:00Z" // Example timestamp
        },
        {
          firstName: "Jane",
          lastName: "Smith",
          email: "jane.smith@example.com",
          message: "Sample message content 2",
          timestamp: "2024-06-16T13:00:00Z" // Example timestamp
        }
        // Add more contact messages as needed
      ]

      
    }
  };
  
  // Store initial data in local storage
  localStorage.setItem('localStorageData', JSON.stringify(localStorageData));
  
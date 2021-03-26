var employee = { 
    eid: "07", 
    ename: "Jay", 
    eaddress: "Pune", 
    salary: 85000000000
} 
  
  
console.log("Employee=> ", employee); 
var newEmployee = employee;    // Shallow copy 
console.log("New Employee=> ", newEmployee); 
  
console.log("---------After modification----------"); 
newEmployee.ename = "Shubham"; 
console.log("Employee=> ", employee); 
console.log("New Employee=> ", newEmployee);
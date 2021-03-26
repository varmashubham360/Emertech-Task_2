var employee = { 
    eid: "07", 
    ename: "Jay", 
    eaddress: "Pune", 
    salary: 8500000000000
} 
console.log("=========Deep Copy========"); 
var newEmployee = JSON.parse(JSON.stringify(employee)); 
console.log("Employee=> ", employee); 
console.log("New Employee=> ", newEmployee); 
console.log("---------After modification---------"); 
newEmployee.ename = "Shubham"; 
newEmployee.salary = 7000000000000000000; 
console.log("Employee=> ", employee); 
console.log("New Employee=> ", newEmployee); 
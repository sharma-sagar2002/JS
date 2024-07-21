

const company={
"departments": [ {
"name": "Engineering",
"employees": [ { "id": 1, "name": "Alice", "role": "Engineer" }, { "id": 2, "name": "Bob", "role": "Senior Engineer" }
]
}
, {
"name": "HR",
"employees": [ { "id": 3, "name": "Carol", "role": "HR Manager" }
]
}
]
};
//find all employees
function findAllEmployee(department){
      let result =company.departments.filter((ele)=>(ele.name==department));
     console.log(result[0].employees);
}
//create employee
function createEmployee(detail, department){
    // finding the department of the employee
    company.departments.every((ele)=>{
         if(ele.name===department){
            // adding the new employee in respective department
            ele.employees.push(detail);
            return false;
         }
    })
     // printing details of all employees 
    console.log(company.departments[0].employees);
}


createEmployee({"id":7,"name":"Sagar","role":"ase"},"Engineering");
//remove employee
function removeEmployee(eid,dname){
    //finding the respective department
    company.departments.every((department)=>{
        //checking if the department is same
        if(department.name===dname){
               let employees =department.employees;
               // iterating on employees array
               employees.every((employee,index)=>{
                // employee id matched 
                if(employee.id===eid){
                   // removing the employee from employees data 
                   employees.splice(index,1);
                   return false;
                }
               })
        }
   })
   console.log(company.departments[0].employees);
}
// removing an empployee 
removeEmployee(3,"HR");

//update employee
function updateEmployee(detail,departmentName,employeeId){
    
    company.departments.every((department)=>{
        // respective department matched 
        if(department.name===departmentName){
               let employees =department.employees;
               // iterating on employees array
               employees.every((employee,index)=>{
                //respective employee id matched 
                if(employee.id===employeeId){
                   employees[index]=detail;
                   return false;
                }
               })
        }
   })
   
}
//updating the details of an employee
console.log(updateEmployee({"id":1,"name": "ram", "role":"SSE"},"Engineering", 1));


// Improve this with the help of object's method
// using find method --> how to improve
// spread

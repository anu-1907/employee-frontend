import axios from 'axios'

const EMPLOYEE_API_BASE_URL= "http://employee-management-system-proj-git-anupammishra-1-dev.apps.sandbox.x8i5.p1.openshiftapps.com/api/v1/employees"
class EmployeeServices{

    getEmployee(){
        return axios.get(EMPLOYEE_API_BASE_URL);


    }


    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL,employee);


    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL+"/"+employeeId);

    }

    updateEmployees(employee,employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL+"/"+employeeId,employee);


    }
    deleteEmployees(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL+"/"+employeeId);


    }



}
export default new EmployeeServices();
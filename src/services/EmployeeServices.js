import axios from "axios";

const EMPLOYEE_API_BASE_URL="http://localhost:8080/api/v1/employees";

class EmployeeServices{

    saveEmployee(employee){

        return axios.post(EMPLOYEE_API_BASE_URL,employee);
    }

    getEmployee(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

}

export default new EmployeeServices();
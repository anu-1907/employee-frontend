import React, {useState,useEffect} from "react";
import EmployeeServices from "../Services/EmployeeServices";
import { useHistory } from 'react-router-dom';



const EmployeeList=()=>{
    const history=useHistory();



    const [employees, setEmployees]=useState([]);


    useEffect(() => {
        EmployeeServices.getEmployee().then((res)=>{
            setEmployees(res.data);
        }
        
      );
    });
    function addEmployee(){
        history.push('/add',)

    }
    function editEmployee(id){
        history.push("/update-employee/"+id)
    }
    function deleteEmployee(id){
        EmployeeServices.deleteEmployees(id).then( res=>{
            setEmployees(employees.filter(employee=>employee.id!==id))
        })

    }
    function viewEmployee(id){
        history.push("/view-employee/"+id)
    }

    return(
        <>
        <h2 className="text-center">Employee List</h2>
        <div className="row">
            <button style={{width:"300px",margin:"5px"}} className="btn  btn-primary" onClick={addEmployee} >Add Employee</button>
        </div>

        <div className="row">
            <table className="table table-dark table-hover table-bordered ">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>E-mail Id</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                            <tr key={employee.id}>
                                <td>
                                    {employee.firstName}
                                </td>
                                <td>
                                    {employee.lastName}
                                </td>
                                <td>
                                    {employee.emailId}
                                </td>
                                <td>
                                   <div style={{display:"flex"}}> <button onClick = {()=>(editEmployee(employee.id))} className="btn btn-info">Update</button>
                                    <button style={{marginLeft:"20px"}} onClick = {()=>(deleteEmployee(employee.id))} className="btn btn-danger">Delete</button>
                                    <button style={{marginLeft:"20px"}} onClick = {()=>(viewEmployee(employee.id))} className="btn btn-info">View</button>

                                    </div>

                                </td>


                            </tr>

                        )
                    }




                </tbody>






            </table>




        </div>





        </>

    );
}
export default EmployeeList;
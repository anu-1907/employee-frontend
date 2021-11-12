import React,{useState,useEffect} from "react"
import { useHistory } from 'react-router-dom';
import EmployeeServices from "../Services/EmployeeServices";



const ViewEmployee=(props)=>{
    const [employees, setEmployees]=useState({
        id:props.match.params.id,
        // employee:{},


    });
    useEffect(()=>{
        EmployeeServices.getEmployeeById(employees.id).then((resp)=>{
            setEmployees(
                resp.data

            
            );

        })},[employees.id])


    return(
        <>
        <div className="row">
        <div>First Name:  {employees.firstName} </div>
        <div>Last Name:  {employees.lastName} </div>
        <div>Email:  {employees.emailId} </div>          
           
        

        </div>


        </>
    );

}
export default ViewEmployee;

import React from "react"
import  {useState,useEffect} from "react";
import EmployeeServices from "../Services/EmployeeServices";
import { useHistory } from 'react-router-dom';



const CreateEmployee=()=>{
    const history=useHistory();
    const[allValues,setAllValues]=useState({
        firstName:"",
        lastName:"",
        emailId:"",

    }

    );
    
    function cancel(event){
        event.preventDefault();
        history.push('./')


    }
    function changeHandler(event){
        setAllValues({...allValues,[event.target.name]:event.target.value})


    }
    function saveEmployee(event){
        event.preventDefault();
        let employee ={
            firstName:allValues.firstName,
            lastName:allValues.lastName,
            emailId:allValues.emailId,
        }
            console.log('employee=>'+JSON.stringify(employee));
            EmployeeServices.createEmployee(employee).then(res =>{
                history.push('./')
            })

       

    }
    
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">Add Employee</h3>
                    <div className="class-body">
                        <form>
                        <div className="form-group">
                            <label>First Name</label>
                            <input placeholder="First Name" name="firstName" className='form-control'
                              value={allValues.firstName}  onChange={changeHandler}   />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input placeholder="Last Name" name="lastName" className='form-control'
                               value={allValues.lastName} onChange={changeHandler}   />
                        </div>
                        <div className="form-group">
                            <label>Email Id</label>
                            <input placeholder="Email" name="emailId" className='form-control'
                               value={allValues.emailId} onChange={changeHandler}   />
                        </div>
                        <button className="btn btn-success" onClick={saveEmployee} >Save</button>
                        <button className="btn btn-danger" onClick={cancel} style={{margin:10}}>Cancel</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>



        </>

    )

}
export default CreateEmployee;
import React from "react";
import  {useState,useEffect} from "react";
import EmployeeServices from "../Services/EmployeeServices";



import { useHistory } from 'react-router-dom';


const UpdateEmployee=(props)=>{
    // console.log(props);
    const history=useHistory();
    const[allValues,setAllValues]=useState({
        id:props.match.params.id,
        
        firstName:"",
        lastName:"",
        emailId:"",

    } 

    );   
    const id=allValues.id;

    useEffect(() => {

        EmployeeServices.getEmployeeById(allValues.id).then((resp)=>{
            let employee =resp.data;
            setAllValues({
                id:props.match.params.id,
                firstName:employee.firstName,
                lastName:employee.lastName,
                emailId:employee.emailId
            })
        }
        
      );
    },[allValues.id]);
     
    function changeHandler(event){

        setAllValues( {...allValues,[event.target.name]:event.target.value})


    }
    function updateEmployee(event){
        event.preventDefault();
        let employee ={
            firstName:allValues.firstName,
            lastName:allValues.lastName,
            emailId:allValues.emailId,
        }
            console.log('employee=>'+JSON.stringify(employee));
            EmployeeServices.updateEmployees(employee,id).then(res =>{
                      history.push('../');
                })
                  

    }
    
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">Update Employee</h3>
                    <div className="class-body">
                        <form >
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
                        <button className="btn btn-success" onClick={updateEmployee} >Save</button>
                        <button className="btn btn-danger" style={{marginLeft:10}}>Cancel</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    </>

    )
}
export default UpdateEmployee;

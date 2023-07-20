import React, {useEffect, useState} from 'react';
import '../Components/main.css'
import '../Components/office-plan.css'
import '../Components/bootstrap-theme.css'
import {Link, Route} from "react-router-dom";
import addEmployee from "./addEmployee";
import axios from "axios";
const Employees = () => {

    const url = process.env.REACT_APP_API_URL
    async function fetchEmp(){
        try {
            const res = axios.get(`${url}/api/employee/`)
            console.log((await res).data)
            setEmployees((await res).data)
        }
        catch (e){
            console.log(e)
        }
    }
    useEffect(() => {
        let ignore = false;

        if (!ignore)  fetchEmp()
        return () => { ignore = true; }
    },[]);

    const [employees, setEmployees] = useState([
        {id:"Loading...", name:"Loading...", technology:"Loading...", workspace:"Loading..."}
    ])
    return (
        <main className="mt-3">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-7">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Filter by name or technology..."
                                   aria-label="Filter"/>
                    <span className="input-group-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" className="bi bi-cursor"
                                                            viewBox="0 0 16 16">
                        <path
                            d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z"/>
                      </svg>
                    </span>
                        </div>
                    </div>
                    <div className="col-2 align-baseline">
                        <a href={"employee/add"}>
                        <button type="button" className="btn btn-success">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                <path fill-rule="evenodd"
                                      d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                            </svg>
                            New Employee
                        </button>
                        </a>
                    </div>
                </div>
                <table className="table table-hover table-fixed  ">
                    <thead>
                    <tr>
                        <th className="th-sm" scope="col">id</th>
                        <th className="th-sm" scope="col">Name</th>
                        <th className="th-sm" scope="col">technology</th>
                        <th className="th-sm" scope="col">Workspace</th>
                        <th className="th-sm" scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {employees.map((employee)=>
                    <tr key={employee.id}>
                        <th scope="row">{employee.id}</th>
                        <td>{employee.name}</td>
                        <td>{employee.technology}</td>
                        <td>{employee.workspace}</td>
                        <td><a href={"/employee/more?id="+employee.id}>more</a></td>
                    </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default Employees;
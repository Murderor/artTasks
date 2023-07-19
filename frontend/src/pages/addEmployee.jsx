import React, {useRef} from 'react';
import '../Components/main.css'
import '../Components/office-plan.css'
import '../Components/bootstrap-theme.css'
import {Button} from "react-bootstrap";
import axios from "axios";
const AddEmployee = () => {
    const nameRef = useRef()
    const techRef = useRef()
    const  workRef = useRef()
    function test(tes){
        console.log("works " + tes.current.value)
    }

    function sub(){
        axios.post('http://localhost:5000/api/employee/', {
            "name": `${nameRef.current.value}`,
            "technology": `${techRef.current.value}`,
            "workspace": `${workRef.current.value}`
        }).then(r =>{
            console.log("Good")
        }).catch(e=>{
            console.log(e)
        })
    }

    return (
        <div className={"addEmployee"}>
            <h2>Добавление сотрудника</h2>
            <input className={"itr"} type={"text"} placeholder={"Name"} ref={nameRef}/>
            <br/>
            <input className={"itr"} type={"text"} placeholder={"Technology"} ref={techRef}/>
            <br/>
            <input className={"itr"} type={"text"} placeholder={"Workspace"} ref={workRef}/>
            <br/>
            <input className={"itr"} type={"file"} placeholder={"аватар"}/>
            <br/>
            <a href={'/employee'}><Button className={"itr"} onClick={sub}>Create</Button></a>
        </div>
    );
};

export default AddEmployee;
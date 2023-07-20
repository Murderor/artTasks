import React, {useRef, useState} from 'react';
import '../Components/main.css'
import '../Components/office-plan.css'
import '../Components/bootstrap-theme.css'
import {Button} from "react-bootstrap";
import axios from "axios";
const AddEmployee = () => {

    const url = process.env.REACT_APP_API_URL
    const nameRef = useRef()
    const techRef = useRef()
    const  workRef = useRef()
    const posRef = useRef()
    const imgRef = useRef()
    function test(tes){
        console.log("works " + tes.current.value)
    }

    function sub(){
        const im = new Image(imgRef.current.value)
        let bodyForm = new FormData()
        bodyForm.append("name",nameRef.current.value)
        bodyForm.append("technology", techRef.current.value)
        bodyForm.append("workspace", workRef.current.value)
        bodyForm.append("possition", posRef.current.value)
        if(document.querySelector('input[type=file]').files[0]){
            bodyForm.append("img",document.querySelector('input[type=file]').files[0], "dfdf.jpg")
        }
        axios.post(`${url}/api/employee/`,bodyForm )
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
            <input className={"itr"} type={"text"} placeholder={"Possition"} ref={posRef}/>
            <br/>
            <input className={"itr"} type={"file"} placeholder={"аватар"} ref={imgRef}/>
            <br/>
            <a href={"/employee"}><Button className={"itr"} onClick={sub}>Create</Button></a>
        </div>
    );
};

export default AddEmployee;
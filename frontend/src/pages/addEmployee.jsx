import React, {useRef} from 'react';
import '../Components/main.css'
import '../Components/office-plan.css'
import '../Components/bootstrap-theme.css'
import {Button} from "react-bootstrap";
const AddEmployee = () => {
    const nameRef = useRef()
    function test(tes){
        console.log("works " + tes.current.value)
    }
    return (
        <div className={"addEmployee"}>
            <h2>Добавление сотрудника</h2>
            <input className={"itr"} type={"text"} placeholder={"Name"}/>
            <br/>
            <input className={"itr"} type={"text"} placeholder={"Technology"}/>
            <br/>
            <input className={"itr"} type={"text"} placeholder={"Workspace"}/>
            <br/>
            <input className={"itr"} type={"file"} placeholder={"аватар"} ref={nameRef}/>
            <br/>
            <Button className={"itr"} onClick={e=>{test(nameRef)}}>Create</Button>
        </div>
    );
};

export default AddEmployee;
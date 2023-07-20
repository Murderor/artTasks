import React, {useEffect, useState} from 'react';
import '../Components/main.css'
import '../Components/office-plan.css'
import '../Components/bootstrap-theme.css'
import '../Components/about.css'
import avatar from '../images/avatar.jpg'
import {Button} from "react-bootstrap";
import axios from "axios";

const About = () => {
    const pic = null || avatar
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get("id")

    const [name, setName] = useState(["unknown"])
    const [technology, setTechnology] = useState(["unknown"])
    const [position, setPosition] = useState(["unknown"])
    const [workspace, setWorkspace] = useState(["unknown"])
    const [employed_since, setEmployed_since] = useState(["unknown"])
    const [avat, setAvat] = useState([pic])
    let test

    async function loadEmp() {
        try {
            const url = process.env.REACT_APP_API_URL
            const data = {"id": `${id}`}
            const res = axios.get(`${url}/api/employee/`,{headers:{
                "id":`${id}`
                }})
            setName((await res).data.name)
            setTechnology((await res).data.technology)
            setWorkspace((await res).data.workspace)
            setEmployed_since((await res).data.createdAt)
            setPosition((await res).data.possition)
        } catch (e) {

        }
    }
    async function loadAvatar(){
        try {
            const url = process.env.REACT_APP_API_URL
            const data = {"id": `${id}`}
            const res = axios.get(`${url}/api/employee/`,{headers:{
                    "id":`${id}`
                }})
            const imName = (await res).data.img
            if(imName){
                setAvat(`${url}/image/${imName}`)
            }
            console.log(imName)
        } catch (e) {
            console.log(e)
        }
    }


    useEffect(() => {
        let ignore = false;

        if (!ignore) {
            loadEmp()
            loadAvatar()
        }
        return () => { ignore = true; }
    },[]);

    return (
        <div className="aboutContainer">
            <div className={"leftSide"}>
                <h1>{name}</h1>
                <br/>
                <img src={avat} width="300px"/>
            </div>
            <div className={"middleSide"}>
                <h3>Technology: <span className={"item"}>{technology}</span></h3>
                <h3>Position: <span className={"item"}>{position}</span></h3>
                <h3>Workspace: <span className={"item"}>{workspace}</span></h3>
                <h3>Employed since: <span className={"item"}>{employed_since}</span></h3>
            </div>
            <div className={"rightSide"}><Button>Edit</Button></div>
        </div>
    );
};

export default About;
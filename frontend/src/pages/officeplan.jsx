import React, {useEffect, useState} from 'react';
import "../Components/office-plan.css"
import {Navigate, Route, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import avatar from '../images/avatar.jpg'
import axios from "axios";

const Officeplan = () => {
    const pic = null || avatar


    const [name, setName] = useState(["unknown"])
    const [technology, setTechnology] = useState(["unknown"])
    const [position, setPosition] = useState(["unknown"])
    const [workspace, setWorkspace] = useState(["unknown"])
    const [employed_since, setEmployed_since] = useState(["unknown"])
    const [avat, setAvat] = useState([pic])
    const [iden, setIden] = useState([""])



    const ws = "workspace"
    const ocupped = "workspace occupied"
    const active ="workspace active"
    const navigate = useNavigate()
    var worckspaces = document.getElementsByName("WorkSpace")
    const urlParams = new URLSearchParams(window.location.search)
    const workspaceUrl = urlParams.get("workspace")

    async function showInfo(){
        document.getElementById("info").style.display = "flex"
    }


    const reDir = (workSpace) =>{
        navigate(`/office_plan?workspace=${workSpace}`)
        window.location.reload()
    }

    async function loadEmp() {
        try {
            const url = process.env.REACT_APP_API_URL
            const res = axios.get(`${url}/api/employee/`,{headers:{
                    "workspace":`${workspaceUrl}`
                }})
            setName((await res).data.name)
            setTechnology((await res).data.technology)
            setWorkspace((await res).data.workspace)
            setEmployed_since((await res).data.employed)
            setPosition((await res).data.possition)
            setIden((await res).data.id)
        } catch (e) {

        }
    }
    async function loadAvatar(){
        try {
            const url = process.env.REACT_APP_API_URL
            const res = axios.get(`${url}/api/employee/`,{headers:{
                    "workspace":`${workspaceUrl}`
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


    async function rendWorkspace(){
        const url = process.env.REACT_APP_API_URL
        try {
            const res = axios.get(`${url}/api/employee/`)
            for(var j=0; j<(await res).data.length; ++j){
                worckspaces[(await res).data[j].workspace-1].setAttribute("class", ocupped)
            }
            for (var i = 0; i < worckspaces.length; ++i) {
                var item = worckspaces[i];
                if(i+1==workspaceUrl){
                    worckspaces[i].setAttribute("class",active)
                }
            }
        }
        catch (e){
            console.log(e)
        }
    }


    useEffect(() => {
        let ignore = false;

        if (!ignore) {
            loadEmp()
            loadAvatar()
            rendWorkspace()
            if(workspaceUrl){
                document.getElementById("info").style.display = "flex"
            }
        }
        return () => { ignore = true; }
    },[]);

    return (
        <main className="mt-3">
            <div className="office-plan">
                <svg className="room-plan room1-plan" height="600px" width="500px">
                    <line stroke="black" stroke-width="2" x1="50" x2="400" y1="45" y2="45"/>
                    <line stroke="black" stroke-width="2" x1="399" x2="399" y1="45" y2="30"/>

                    <line stroke="black" stroke-width="2" x1="50" x2="50" y1="30" y2="560"/>
                    <line stroke="black" stroke-width="2" x1="50" x2="400" y1="545" y2="545"/>

                    <line stroke="black" stroke-width="2" x1="480" x2="480" y1="30" y2="560"/>

                    <rect fill="white" height="30" stroke="black" width="4" x="476" y="60"/>
                    <rect fill="white" height="30" stroke="black" width="4" x="476" y="220"/>
                    <rect fill="white" height="30" stroke="black" width="4" x="476" y="475"/>



                    <rect fill="black" height="10" width="10" x="50" y="40"/>
                    <rect fill="black" height="10" width="10" x="390" y="40"/>

                    <rect fill="black" height="10" width="10" x="50" y="275"/>
                    <rect fill="black" height="10" width="10" x="390" y="275"/>

                    <rect fill="black" height="10" width="10" x="50" y="540"/>
                    <rect fill="black" height="10" width="10" x="390" y="540"/>


                    <path className={ws} name={"WorkSpace"} onClick={event => reDir(1)}
                          d="m 150 150
               v -80
               h -24

               q 0 56 -56 56
               v 24
               h 81"
                          data-workspace="4"
                          fill="transparent" stroke="black" stroke-width="2"/>
                    <text x="135" y="140">1</text>

                   <path className={ws} name={"WorkSpace"} onClick={event => reDir(2)}
                          d="m 150 150
               v -80
               h 24

               q 0 56 56 56
               v 24
               h -81"
                          data-workspace="3"
                          fill="transparent" stroke="black" stroke-width="2"/>
                    <text x="157" y="140">2</text>

                    <path className={ws} name={"WorkSpace"} onClick={event => reDir(3)}
                          d="m 310 150
               v -80
               h -24

               q 0 56 -56 56
               v 24
               h 81"
                          data-workspace="2"
                          fill="transparent" stroke="black" stroke-width="2"/>
                    <text x="295" y="140">3</text>

                    <path className={ws} name={"WorkSpace"} onClick={event => reDir(4)}
                          d="m 310 150
               v -80
               h 24

               q 0 56 56 56
               v 24
               h -81"
                          data-workspace="1"
                          fill="transparent" stroke="black" stroke-width="2"/>
                    <text x="315" y="140">4</text>

                    <path className={ws} name={"WorkSpace"} onClick={event => reDir(5)}
                          d="m 150 150
               l -80 0
               l 0 24

               q 56 0 56 56
               h 24
               v -81"
                          data-workspace="5"
                          fill="transparent" stroke="black" stroke-width="2"/>
                    <text x="135" y="170">5</text>

                    <path className={ws} name={"WorkSpace"} onClick={event => reDir(6)}
                          d="m 150 150
               l 80 0
               l 0 24

               q -56 0 -56 56
               h -24
               v -81"
                          data-workspace="6"
                          fill="transparent" stroke="black" stroke-width="2"/>
                    <text x="157" y="170">6</text>

                    <path className={ws} name={"WorkSpace"} onClick={event => reDir(7)}
                          d="m 310 150
               l -80 0
               l 0 24

               q 56 0 56 56
               h 24
               v -81"
                          data-workspace="7"
                          fill="transparent" stroke="black" stroke-width="2"/>
                    <text x="295" y="170">7</text>

                    <path className={ws} name={"WorkSpace"} onClick={event => reDir(8)}
                          d="m 310 150
               l 80 0
               l 0 24

               q -56 0 -56 56
               h -24
               v -81"
                          data-workspace="8"
                          fill="transparent" stroke="black" stroke-width="2"/>
                    <text x="315" y="170">8</text>



                    <path className={ws} name={"WorkSpace"} onClick={event => reDir(9)}
                          d="m 150 420
               v -80
               h -24

               q 0 56 -56 56
               v 24
               h 81"
                          data-workspace="12"
                          fill="transparent" stroke="black" stroke-width="2"/>
                    <text x="125" y="410">9</text>

                    <path className={ws} name={"WorkSpace"} onClick={event => reDir(10)}
                          d="m 150 420
               v -80
               h 24

               q 0 56 56 56
               v 24
               h -81"
                          data-workspace="11"
                          fill="transparent" stroke="black" stroke-width="2"/>
                    <text x="157" y="410">10</text>

                    <path className={ws} name={"WorkSpace"} onClick={event => reDir(11)}
                          d="m 310 420
           v -80
           h -24

           q 0 56 -56 56
           v 24
           h 81"
                          data-workspace="10"
                          fill="transparent" stroke="black" stroke-width="2"/>
                    <text x="285" y="410">11</text>

                    <path className={ws} name={"WorkSpace"} onClick={event => reDir(12)}
                          d="m 310 420
               v -80
               h 24

               q 0 56 56 56
               v 24
               h -81"
                          data-workspace="9"
                          fill="transparent" stroke="black" stroke-width="2"/>
                    <text x="315" y="410">12</text>

                    <path className={ws} name={"WorkSpace"} onClick={event => reDir(13)}
                          d="m 150 420
               l -80 0
               l 0 24

               q 56 0 56 56
               h 24
               v -81"
                          data-workspace="13"
                          fill="transparent" stroke="black" stroke-width="2"/>
                    <text x="125" y="440">13</text>

                    <path className={ws} name={"WorkSpace"} onClick={event => reDir(14)}
                          d="m 150 420
               l 80 0
               l 0 24

               q -56 0 -56 56
               h -24
               v -81"
                          data-workspace="14"
                          fill="transparent" stroke="black" stroke-width="2"/>
                    <text x="157" y="440">14</text>

                    <path className={ws} name={"WorkSpace"} onClick={event => reDir(15)}
                          d="m 310 420
               l -80 0
               l 0 24

               q 56 0 56 56
               h 24
               v -81"
                          data-workspace="15"
                          fill="transparent" stroke="black" stroke-width="2"/>
                    <text x="285" y="440">15</text>

                    <path className={ws} name={"WorkSpace"} onClick={event => reDir(16)}
                          d="m 310 420
               l 80 0
               l 0 24

               q -56 0 -56 56
               h -24
               v -81"
                          data-workspace="16"
                          fill="transparent" stroke="black" stroke-width="2"/>
                    <text x="315" y="440">16</text>

                </svg>

                <div className="room-switcher">
                    <div className="current-room">
                        Room #
                    </div>
                    <a className="to-bottom-room" href="#" title="To the next room">
                        <i className="bi-chevron-compact-down"></i>
                    </a>
                </div>

                <div className="workspace-info" id={"info"}>
                    <div className={"left_info"}>
                        <h2 className="workspace-info__title">Workspace #<span className="workspace-info__number">{workspaceUrl}</span></h2>
                        <h3>{name}</h3>
                        <img src={avat} width={300} height={300}/>
                    </div>
                    <div>
                        <div className="ws_info">
                            <h2>Technology: <span className="workspace-info__number">{technology}</span></h2>
                            <h2>Possition: <span className="workspace-info__number">{position}</span></h2>
                            <a href={`/employee/more?id=${iden}`}>More</a>
                        </div>

                    </div>
                </div>

                <div className="workspace-empty">
                    <h2 className="workspace-info__title">Workspace #<span
                        className="workspace-info__number">3</span> unoccupied</h2>
                </div>
            </div>
        </main>
    );
};

export default Officeplan;
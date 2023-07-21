import React, {useEffect, useState} from 'react';
import '../Components/main.css'
import '../Components/office-plan.css'
import '../Components/bootstrap-theme.css'
import '../Components/about.css'
import avatar from '../images/avatar.jpg'
import {Button} from "react-bootstrap";
import axios from "axios";

export const InfoEmployeePage = () => {
  const pic = null || avatar
  const urlParams = new URLSearchParams(window.location.search)
  const id = urlParams.get("id")

  const [name, setName] = useState(["unknown"])
  const [technology, setTechnology] = useState(["unknown"])
  const [position, setPosition] = useState(["unknown"])
  const [workspace, setWorkspace] = useState(["unknown"])
  const [employed_since, setEmployed_since] = useState(["unknown"])
  const [avat, setAvat] = useState([pic])

  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  async function loadEmp() {
    try {
      const url = process.env.REACT_APP_API_URL
      const res = axios.get(`${url}/api/employee/`,{headers:{
          "id":`${id}`
        }})
      setName((await res).data.name)
      setTechnology((await res).data.technology)
      setWorkspace((await res).data.workspace)
      setEmployed_since((await res).data.employed)
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

  return <div className="container mt-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li className="breadcrumb-item"><a href="/home">Home</a></li>
        <li className="breadcrumb-item"><a href="/employee">Employees</a></li>
        <li className="breadcrumb-item active" aria-current="page">Name</li>
      </ol>
    </nav>
    <div className="row fs-5">
      <div className="col-4">
        <p className="mb-1 text-center fs-3 fw-bold">{name}</p>
        <img src={avat} class="image img-thumbnail" alt="..." />
      </div>
      <div className="col-8">
        <div className="d-flex justify-content-end">
          <a className="btn btn-outline-secondary" href={`/employee/edit?id=${id}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="1 0 16 16">
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
            </svg>
            <span> Edit</span>
          </a>
        </div>
        <div className="row mt-1">
          <div className="col-3">
            <p className=" text-end fw-bold">Technology</p>
          </div>
          <div className="col-3">
            <p className=" text-start">{technology}</p>
          </div>
        </div>
        <div className="row mt-1 mb-1">
          <div className="col-3">
            <p className=" text-end fw-bold">Position</p>
          </div>
          <div className="col-3">
            <p className=" text-start">{position}</p>
          </div>
        </div>
        <div className="row mb-1">
          <div className="col-3">
            <p className=" text-end fw-bold">Workspace</p>
          </div>
          <div className="col-5 d-flex flex-row">
            <p>#</p>
            <p>{workspace}</p>
            <a className="ms-1" href="#">&lt;Choose on the plan&gt;</a>
          </div>
        </div>
        <div className="row mt-1 mb-1">
          <div className="col-3">
            <p className=" text-end fw-bold">Employed since</p>
          </div>
          <div className="col-3 d-flex flex-row">
            <span>{employed_since}</span>
          </div>
        </div>

      </div>
    </div>
  </div>
}
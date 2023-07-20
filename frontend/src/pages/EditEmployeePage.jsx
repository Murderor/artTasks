import React, {useEffect, useRef, useState} from 'react';
import '../Components/main.css'
import '../Components/office-plan.css'
import '../Components/bootstrap-theme.css'
import '../Components/about.css'
import avatar from '../images/avatar.jpg'
import {Button} from "react-bootstrap";
import axios from "axios";

export const EditEmployeePage = () => {

  const pic = null || avatar

  const urlParams = new URLSearchParams(window.location.search)
  const id = urlParams.get("id")



  const nameRef = useRef()
  const techRef = useRef()
  const  workRef = useRef()
  const posRef = useRef()
  const scince = useRef()
  const imgRef = useRef()



  const [name, setName] = useState(["unknown"])
  const [technology, setTechnology] = useState(["unknown"])
  const [position, setPosition] = useState(["unknown"])
  const [workspace, setWorkspace] = useState(["unknown"])
  const [employed_since, setEmployed_since] = useState(["unknown"])
  const [avat, setAvat] = useState([pic])

  async function loadEmp() {
    try {
      const url = process.env.REACT_APP_API_URL
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
  async function editEmp(){
    try{
      const url = process.env.REACT_APP_API_URL
      let data = new FormData()
      data.append("name",nameRef.current.value)
      data.append("technology", techRef.current.value)
      data.append("workspace", workRef.current.value)
      data.append("possition", posRef.current.value)
      if(document.querySelector('input[type=file]').files[0]){
        data.append("img",document.querySelector('input[type=file]').files[0], "dfdf.jpg")
      }
      const res = axios.put(`${url}/api/employee/`,data,{headers:{"id":`${id}`}})
      loadEmp()
      loadAvatar()
    }
    catch (e){
      console.log(e)
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
      <li className="breadcrumb-item"><a href="/">Home</a></li>
      <li className="breadcrumb-item"><a href="/employee">Employees</a></li>
      <li className="breadcrumb-item"><a href="#">Name</a></li>
      <li className="breadcrumb-item active" aria-current="page">Edit</li>
    </ol>
  </nav>
  <div className="row">
    <div className="col-4">
      <img src={avat} class="image img-thumbnail" alt="..." />
      <div>
        <label for="formFileLg" class="mt-2 mb-2 fs-5 form-label">Upload avatar picture</label>
        <input class="form-control" id="formFileLg" type="file" />
      </div>
    </div>
    <div className="col-8">
      <form>
        <div className="d-flex justify-content-end">
          <a href="/info/:id" className="btn btn-outline-dark me-1">Cancel</a>
          <button className="btn btn-primary" type="button" onClick={editEmp}>Save</button>
        </div>
        <div className="row mt-4">
          <div className="col-2">
            <p className="form-label fs-5">Name</p>
          </div>
          <div className="col-10">
            <input type="text" className="form-control" maxlength="200" ref={nameRef} placeholder={name}/>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-2">
            <p className="form-label fs-5">Technology</p>
          </div>
          <div className="col-10">
            <select class="form-select" ref={techRef}>
              <option>Java</option>
              <option>JavaScript</option>
              <option>.NET</option>
              <option>QA</option>
            </select>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-2">
            <p className="form-label fs-5">Position</p>
          </div>
          <div className="col-10">
            <input type="text" className="form-control" maxlength="100" placeholder={position} ref={posRef}/>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-2">
            <p className="form-label fs-5">Workspace</p>
          </div>
          <div className="col-2">
            <select class="form-select" ref={workRef}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </div>
          <div className="col-4">
            <a className="fs-5" href="/officePlan">&lt;Choose on the plan&gt;</a>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-2">
            <p className="form-label fs-5">Employed</p>
          </div>
          <div className="col-10">
            <h2>{employed_since}</h2>
          </div>
        </div>
        
      </form>
    </div>

  </div>
</div>
}
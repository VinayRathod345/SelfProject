import React, { useState } from 'react';
import './PopUp.css';
const PopUp = (props) => {


    console.log(props.val[0].type)

    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [type, settype] = useState();
    const [location, setLocation] = useState("");
    const [workspace, setWorkspace] = useState();
    const [description, setDescription] = useState("");
    const [skills, setSkills] = useState("");
    const [image, setImage] = useState();
    const [iserror, setiserror] = useState(false);
    const [error, seterror] = useState("");

    const data = {
        id: Math.random(),
        name: name,
        title: title,
        description: description,
        location: location,
        type: type,
        workspace: workspace,
        skills: skills,
        img: image
    }

    const handleClick = event => {

        props.OnCloseClicked(false);

    };
    const edithandler = () => {
    }
    const savehandler = () => {

           
        if (Object.keys(title).length === 0) {
            setiserror(true)
            seterror("Please enter job title!");
        }
        else if (!workspace) {
            setiserror(true)
            seterror("Please select workplace!");
        }
        else if (Object.keys(location).length === 0) {
            setiserror(true)
            seterror("Please enter job location!");
        }
        else if (!type) {
            setiserror(true)
            seterror("Please select job type!");
        }
        else if (Object.keys(description).length === 0) {
            setiserror(true)
            seterror("Please enter job description!");
        }
        else if (Object.keys(name).length === 0) {
            setiserror(true)
            seterror("Please enter company name!");
        }
       

        else {

            fetch('http://localhost:3001/createJob', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: data.id,
                    name: name,
                    title: title,
                    description: description,
                    location: location,
                    type: type,
                    workspace: workspace,
                    skills: skills,
                    img: image
                })
            });

            props.OnCloseClicked(false);
            props.OnSaveClicked(data)
        }
    }
    return (
        <div className="hover_bkgr_fricc">
            <span className="helper"></span>
            <div className='popup-container'>

                <div className='popup-header'>
                    <p>Create new job</p>
                    <div className="popupCloseButton" onClick={handleClick}>&times;</div>

                </div>


                {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                {iserror ? <span className="error">{error}</span> : ""}
                {/* <form> */}
                <input type="text" placeholder="Job title" onChange={(e) => setTitle(e.target.value)} defaultValue={props.edit?props.val[0].title:"" }/>
                <select className="types" onChange={(e) => setWorkspace(e.target.value)} selected={props.edit?props.val[0].type:"" }>
                    <option value="Type of workplace" hidden>Type of workplace</option>
                    <option value="Onsite">Onsite</option>
                    <option value="Off-site">Off-site</option>
                    <option value="Hybrid">Hybrid</option>
                </select>


                <input type="text" placeholder="Location of job" onChange={(e) => setLocation(e.target.value)} defaultValue={props.edit?props.val[0].location:"" }/>

                <select className="jobs" onChange={(e) => settype(e.target.value)} selected={props.error?props.val[0].workspace:"" }>
                    <option value="Job type" hidden>Job type</option>
                    
                    <option value=" Fully Remote"> Fully Remote</option>
                    <option value="Full Time">Full-time</option>
                    <option value="Part time/Internship">Part time/Internship</option>
                </select>

                <textarea className='new-job-description' type="text" onChange={(e) => setDescription(e.target.value)} placeholder="Job Description and required Experience " defaultValue={props.edit?props.val[0].description:"" }/>

                <input type="text" placeholder="Company name" onChange={(e) => setName(e.target.value)} defaultValue={props.edit?props.val[0].name:"" } />

                {/* <div className='company-logo'>
                <label>Company logo</label>
                <input type="file" onChange={(e) => setImage(e.target.value)} />
                </div> */}

                <input type="text"  placeholder="skill" onChange={(e) => setSkills(e.target.value)} defaultValue={props.edit?props.val[0].title:"" }/>
                {/* <input type="text" name="location" placeholder="skill" /> */}

                <button className="save-btn" type="submit" onClick={props.edit?edithandler: savehandler}>
                    Save
                </button>
                {/* </form> */}
            </div>
        </div >
    )
}
export default PopUp;
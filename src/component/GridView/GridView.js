import React, { useEffect, useState } from 'react';
import JobList from '../JobList/JobList';
import './GridView.css'
import logo from './logo192.png'
import { BsGrid3X2 } from "react-icons/bs";
import { IoListSharp } from "react-icons/io5";
import RightButton from '../Rightfilter/RightButton';
import { FiChevronDown } from "react-icons/fi";
const GridView = (props) => {

    const jobs = props.jobs;
    const isjob = props.isjob;
    // const [jobs, setJobs] = useState([props.jobs]);
    // const [isjob, setisjob] = useState(props.isjob);
    const [showFav, setFav] = useState(false);
    const [issaidView, setissaidView] = useState(true);
    const [islistView, setisListView] = useState(true);
    const [searchKeyword, setsearchKeyword] = useState();
    const [sortState, setSortState] = useState("latest");
    function compareStrings(a, b) {

        a = a.toLowerCase();
        b = b.toLowerCase();

        return (a < b) ? -1 : (a > b) ? 1 : 0;
    }
    const sortMethods = {
        name: { method: (a, b) => compareStrings(a.name, b.name) },
        title: { method: (a, b) => compareStrings(a.title, b.title) },
        oldest: { method: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime() },
        latest: { method: (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime() }
    };
    // useEffect(() => {
    //     fetch("http://localhost:3001/jobs")
    //         .then(res => {
    //             if (!res.ok)
    //                 throw Error("could not fetch API")
    //             return res.json()
    //         })
    //         .then(
    //             (result) => {
    //                 setJobs(result);
    //             },
    //             // Note: it's important to handle errors here
    //             // instead of a catch() block so that we don't swallow
    //             // exceptions from actual bugs in components.
    //             (error) => {
    //                 console.log(error)
    //             }
    //         )
    // }, [])


    function applyHandler(jobId) {

        const updatedJobs = jobs.filter(job => job.id != jobId);
        // if (Object.keys(updatedJobs).length === 0)
        //     setisjob(false)

        props.OnApplyClicked(jobId);

        // fetch('http://localhost:3001/deletejob', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         id: jobId
        //     })
        // });
    }
    // setJobs(prevGoals => {
    //     const updatedJobs = prevGoals.filter(job => job.id != jobId);
    //     if (Object.keys(jobs).length - 1 === 0)
    //         setisjob(false)
    //     return updatedJobs;
    // })


    function jobclickhandler(id) {

        props.OnJovViewClicked(id);
    }


    function timeSince(date) {

        var seconds = Math.floor((new Date() - date) / 1000);

        var interval = seconds / 31536000;

        if (interval > 1) {
            return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " d";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " h";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " mins";
        }
        if (isNaN(Math.floor(seconds)))
            return "Just Now";

        return Math.floor(seconds) + " secs";
    }
    function favhandler() {
        setFav(!showFav)
    }


    const togglesidebas = () => {
        setissaidView(!issaidView);
        props.OnSildebarfilter();
    }
    const ListGridViewHandler = () => {
        console.log(islistView)
        setisListView(!islistView)
    }
    function inputHandler(e) {
        props.OnfilterSearch(e);

    }
    function sortByhandler(e) {

       // console.log(e);
        setSortState(e)
        // props.OnsortByhandler(e);
    }

    return (


        <div className="grid-main" style={issaidView ? { marginLeft: '25%' } : { marginLeft: '0' }}>

            <RightButton OnSildebarfilter={togglesidebas} />
            <div className="jobs-card">


                <div className='job-header'>
                    <div className="search-box">

                        <div>
                            <form className="nosubmit">
                                <input className="nosubmit" type="search" placeholder="Search..." onChange={(e) => inputHandler(e.target.value)} />
                            </form>
                        </div>

                        <div className='sortby-box' >
                            <div>Sort by:</div>

                            <div className=''>

                                <select className='sortfilters' onChange={(e) => sortByhandler(e.target.value)}>
                                    <option value="latest">Latest</option>
                                    <option value="oldest">Oldest</option>
                                    <option value="name">Company name</option>
                                    <option value="title">Job title(a-z)</option>
                                </select>

                                {/* <FiChevronDown/> */}
                            </div>
                        </div>

                    </div>
                    <div className='viewicon'>
                        {islistView ? <BsGrid3X2 style={{ cursor: "pointer" }} onClick={ListGridViewHandler} /> : <IoListSharp style={{ cursor: "pointer" }} onClick={ListGridViewHandler} />}
                    </div>
                </div>
                <hr ></hr>


                {isjob ? null : <p className='isjob'>No Job Found!!</p>}
                <div className="grid" style={islistView ? { gridTemplateColumns: '100%' } : { gridTemplateColumns: '50% 50%' }}>
                    {jobs.sort(sortMethods[sortState].method).map((v) => (
                        <div key={v.id} className="displayList" >
                            <div className="container" >
                                <div className="company-img">

                                    <div className="name" onClick={() => jobclickhandler(v.id)}>
                                        <img src={logo} alt="logo" />
                                        <p >{v.name}</p>
                                    </div>

                                </div>

                                <button className="apply-btn" type="submit" onClick={() => applyHandler(v.id)}>
                                    Apply
                                </button>

                            </div>

                            <div className="container-2">
                                <h3 onClick={() => jobclickhandler(v.id)}>{v.title}</h3>
                                <span><i className="fa fa-map-marker" aria-hidden="true"></i>{v.location}</span>
                            </div>

                            <div className="container-3">
                                <p className="job-description">
                                    {v.description}
                                </p>

                                <a className="favorite">

                                    {showFav ? <i className="fa fa-heart" onClick={favhandler}></i> :
                                        <i className="fa fa-heart-o" onClick={favhandler}></i>}
                                </a>
                            </div>


                            <div className="container-4">
                                <p className="type">{v.type}</p>
                                <p className="days">{
                                    timeSince(new Date(new Date(Date.parse(v.date))))
                                }</p>
                            </div>
                        </div>

                    ))}

                </div>
            </div>
        </div>

    )

}
export default GridView;
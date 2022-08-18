import './App.css';
import React, { useEffect, useState } from 'react';
import HeaderBar from './component/HeaderBar/HeaderBar';
import SideBar from './component/SideBar/SideBar';
//import JobList from './component/JobList/JobList'
import GridView from './component/GridView/GridView';
import PopUp from './component/PopUp/PopUp';
import DisplayJob from './component/DisplayJob/DisplayJob';
//import axios from 'axios';


function App() {

  const [jobs, setJobs] = useState([]);
  const [isjob, setisjob] = useState(true);
  const [showPopUp, setShowPopUp] = useState(false);
  const [showJobview, setjobView] = useState(false);
  const [jobView, setJobVieww] = useState([]);
  const [locationjobView, setlocationFilter] = useState([]);
  const [isSideView, setisSideView] = useState(true);
  const [iserror, setisrrorb] = useState(true);
  const [isedit, setisedit] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/jobs")
      .then(res => {
        if (!res.ok)
          throw Error("could not fetch API")
        return res.json()
      })
      .then(
        (result) => {
          setJobs(result);
          setJobVieww(result)
          setlocationFilter(result)
        },

        (error) => {
          console.log(error)
        }
      )
  }, [])



  const closeClickhandler = (value) => {
    setShowPopUp(value);
  }
  const closeSavehandler = (newJob) => {

    setJobs(prevGoals => {
      return [newJob, ...prevGoals];
    });
    setJobVieww(prevGoals => {
      return [newJob, ...prevGoals];
    });
    setlocationFilter(jobs)
    setlocationFilter(prevGoals => {
      return [newJob, ...prevGoals];
    });


  }
  const applyhandler = (id) => {

    fetch('http://localhost:3001/deletejob', {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id
      })
    });
    
    setJobs(prevGoals => {
      const updatedJobs = prevGoals.filter(job => job.id !== id);
      return updatedJobs;
    });
    setJobVieww(jobs);
    setlocationFilter(prevGoals => {
      const updatedJobs = prevGoals.filter(job => job.id !== id);
      return updatedJobs;
    });
  }

  const jobviewhandler = (id) => {

    
    setJobVieww(prevGoals => {
      const updatedJobs = prevGoals.filter(job => job.id === id);
      setjobView(!showJobview)

      return updatedJobs;
    });
  }
  const jobbackhandler = () => {
    setjobView(!showJobview)
    setJobVieww(jobs)
    setlocationFilter(jobs)
  }

  const locationFilter = (f_location) => {
    setlocationFilter(prevGoals => {
      const updatedJobs = jobs.filter((x) => {
        return (x.location).toLowerCase().includes(f_location.toLowerCase())
      })
      if (Object.keys(updatedJobs).length === 0)
        setisjob(false)
      else
        setisjob(true)
      return updatedJobs;
    });
  }


  const OnfilterSearchhandler = (search) => {
    // locationFilter();
    setlocationFilter(prevGoals => {
      const updatedJobs = jobs.filter((x) => {
        return (x.location).toLowerCase().includes(search.toLowerCase()) ||
          (x.name).toLowerCase().includes(search.toLowerCase()) ||
          (x.title).toLowerCase().includes(search.toLowerCase()) ||
          (x.type).toLowerCase().includes(search.toLowerCase())
      })
      if (Object.keys(updatedJobs).length === 0)
        setisjob(false)
      else
        setisjob(true)
      return updatedJobs;
    });
  }

  const togglesidebas = () => {
    setisSideView(!isSideView)
  }
  function compareStrings(a, b) {

    a = a.toLowerCase();
    b = b.toLowerCase();

    return (a < b) ? -1 : (a > b) ? 1 : 0;
  }
  const sortByhandler = () => {

    const updatedJobs = jobs.sort(function (a, b) {
      return compareStrings(a.location, b.location);
    })
    if (Object.keys(updatedJobs).length === 0)
      setisjob(false)
    else
      setisjob(true)
    setlocationFilter( updatedJobs);
    
  }
  const edithandler=(id)=>
  {
    setJobVieww(prevGoals => {
      const updatedJobs = prevGoals.filter(job => job.id === id);
     setjobView(!isedit)
     setShowPopUp(true);
      return updatedJobs;
    });
  }
  return (
    <div className="App">

      <HeaderBar className="navbar" OnCloseClicked={closeClickhandler} />

      {isSideView ? <SideBar className="sidebar" OnfilterLocation={locationFilter} OnfilterType={OnfilterSearchhandler} /> : null}

      {showJobview ? null : <GridView jobs={locationjobView} isjob={isjob} OnsortByhandler={sortByhandler} OnfilterSearch={OnfilterSearchhandler} OnSildebarfilter={togglesidebas} OnJovViewClicked={jobviewhandler} OnApplyClicked={applyhandler} />}

      {showJobview ? <DisplayJob jobs={jobView} OnEditClicked={edithandler} OnJovBackClicked={jobbackhandler} OnApplyClicked={applyhandler} /> : null}

      {showPopUp ? <PopUp error={iserror} edit={isedit}  val={jobView} OnCloseClicked={closeClickhandler} OnSaveClicked={closeSavehandler} /> : null}


    </div>
  );
}

export default App;

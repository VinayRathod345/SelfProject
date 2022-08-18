import './DisplayJob.css';
import RightButton from '../Rightfilter/RightButton';
import { IoChevronBackSharp } from "react-icons/io5";
import { TbEdit } from "react-icons/tb";
const DisplayJob = (props) => {

    const jobs = props.jobs[0];
    function applyHandler(jobId) {

        props.OnJovBackClicked();
        props.OnApplyClicked(jobId);
    }
    function jobclickhandler() {
        props.OnJovBackClicked();
    }
    function editHandler(jobId)
    {
        props.OnEditClicked(jobId);
    }

    return (
        <div className='displayjob-main'>
            <div className="back-main">
                <div className='back-btn' onClick={() => jobclickhandler()}>
                    <IoChevronBackSharp />
                    <p>JOB DESCRIPTION – {jobs.title}</p>
                </div>
            </div>
            <div className='display-card'>
                <h3 className='job-title'>{jobs.title} </h3>
                <p>Type of workplace : {jobs.workspace}</p>
                <p>Location of job : {jobs.location}</p>
                <p>Job type : {jobs.type}</p>
                <p>Job Description and required Experience{<br></br>}{jobs.description}</p>

                <p>Name of company : {jobs.name}</p>
                <p></p>
                <button className="display-apply-btn" onClick={() => applyHandler(jobs.id)} >
                    Apply
                </button>
                {/* <TbEdit  size={'2em'} className="display-edit-btn" onClick={() => editHandler(jobs.id)}/> */}
                {/* <button className="display-edit-btn" onClick={() => applyHandler(jobs.id)} >
                    Edit
                </button> */}
            </div>
            </div>
 

    );
}
export default DisplayJob;


import './SideBar.css'

const SideBar = (props) => {


    function filterLocationhandler(JobLocation) {

        props.OnfilterLocation(JobLocation);
    }
    function filterTypehandler(Jobtype) {
        props.OnfilterType(Jobtype);
    }
    return (
        <div className="side">
            <p>Filters</p>
            <div className="side-filter">

                <div>
                    <input type="radio" name="All Jobs" />
                    <label>All Jobs</label><br></br>
                </div>

                <div>
                    <input type="radio" name="All Jobs" />
                    <label>Most Relevant</label><br></br>
                </div>


                <div>
                    <input type="radio" name="All Jobs" />
                    <label>Recommeended Jobs</label><br></br>
                </div>
                <div>
                    <input type="radio" name="All Jobs" />
                    <label>Most Recents</label><br></br>
                </div>

            </div>
            <p>Select Location</p>
            <input type="text" name="location" placeholder="Location..." autoComplete="off" onChange={(e) => filterLocationhandler(e.target.value)} />


            <p>Type of Job</p>
            <select name="jobs" id="cars" onChange={(e) => filterTypehandler(e.target.value)}>
                <option value="Job type" hidden>Job type</option>
                <option value=" Fully Remote"> Fully Remote</option>
                <option value="Full Time">Full-time</option>
                <option value="Part time/Internship">Part time/Internship</option>
            </select>

            <p>Type of Industries</p>
            <select name="Industries" id="Industries">
                <option hidden>All industries</option>
                <option value="Software">Software</option>
                <option value="Medical">Medical</option>
                <option value="Finance">Finance</option>
            </select>


            <br></br>
            {/* <label class="switch">
            <input type="checkbox"/>
            <span class="slider-pink-purple round"></span>
            </label>
            <label>Full remote</label> */}


        </div>
    )
}
export default SideBar;
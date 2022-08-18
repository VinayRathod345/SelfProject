
// import './JobList.css'
import logo from './logo192.png'
const JobList = () => {

    return (

        <div className="main">


            <div className="card">
                {/* <div className="top">
                    <form class="nosubmit">
                        <input class="nosubmit" type="search" placeholder="Search..."/>
                    </form>
                </div> */}

                {/* <div className="main-content">
                <div class="container">
			<h1 class="text-center text-uppercase">Job Card</h1>
			<br/>
			<br/>

			<div class="row">
				<div class="col-sm-6 offset-sm-3">
					<div class="job-card">
						<div class="job-card__content">
							<div class="job-card_img">
								<img src="https://blog.hubspot.com/hubfs/image8-2.jpg" alt="Company Logo"/>
							</div>
							<div class="job-card_info">
								<h6 class="text-muted">
									<a href="#!" class="job-card_company">Google</a> 
									<a href="#!" class="float-right">
										<i class="fa fa-heart-o"></i>
									</a>
								</h6>
								<h4>Sr. Userexperience Designer</h4>
								<p class="mb-0">$75k - $105k</p>
							</div>
						</div>
						<div class="job-card__footer">
							<div class="job-card_job-type">
								<span class="job-label">Full time</span>
								<span class="job-label">Senior</span>
								<span class="job-label">UX/UI</span>
							</div>
							<button class="btn btn-primary">Apply</button>
						</div>
					</div>
				</div>
			</div>
		</div>
</div> */}

                <div className="list">
                    <div className="displayList">
                        <div className="container">
                            <div className="company-img">

                                <div className="name">
                                    <img src={logo} alt="logo" />
                                    <p>AgencyAnalytics</p>
                                </div>

                            </div>

                            <button className="apply-btn" type="submit">
                                Apply
                            </button>

                        </div>

                        <div className="container-2">
                            <h3>Senior Engineer (Java)</h3>
                            <span><i class="fa fa-map-marker" aria-hidden="true"></i>Pune</span>
                        </div>

                        <div className="container-3">
                            <p className="job-description">
                                Nearsure was created to bring amazing talent within Latin America to the US market, helping professionals land cool projects and US companies build development teams efficiently.
                            </p>

                            <a href="#!" class="favorite">
                                <i class="fa fa-heart-o"></i>
                            </a>
                        </div>


                        <div className="container-4">
                            <p className="time">Full Time</p>
                            <p className="days">1d </p>
                        </div>
                    </div>
                    <div className="displayList">
                        <div className="container">
                            <div className="company-img">

                                <div className="name">
                                    <img src={logo} alt="logo" />
                                    <p>AgencyAnalytics</p>
                                </div>

                            </div>

                            <button className="apply-btn" type="submit">
                                Apply
                            </button>

                        </div>

                        <div className="container-2">
                            <h3>Senior Engineer (Java)</h3>
                            <span><i class="fa fa-map-marker" aria-hidden="true"></i>Pune</span>
                        </div>

                        <div className="container-3">
                            <p className="job-description">
                                Nearsure was created to bring amazing talent within Latin America to the US market, helping professionals land cool projects and US companies build development teams efficiently.
                            </p>

                            <a href="#!" class="favorite">
                                <i class="fa fa-heart-o"></i>
                            </a>
                        </div>


                        <div className="container-4">
                            <p className="time">Full Time</p>
                            <p className="days">1d </p>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    )

}
export default JobList;
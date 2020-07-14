import React from 'react';

//images imported from assets
import Camera from './../../assets/Images/camera.jpg';
import JSQuiz from './../../assets/Images/JSQuiz.png';
import EmployeeTracker from './../../assets/Images/employeeTracker.png';
import DailyPlanner from './../../assets/Images/dailyPlanner.png';
import FridgeRaider from './../../assets/Images/fridgeraider.jpg';
import RandomPassword from './../../assets/Images/randomPassword.png';



const PortfolioPage = (props) => (
    <div className="ownBackground">
        <div className="container well">
            <br />
            <div>
                <div className="row border-top border-bottom border-success">
                    <div className="col-auto text-success">
                        <h5 className="text-justify-center align-middle">Portfolio</h5>
                    </div>
                </div>
            </div>
            <br />

            <div className="container well" id="customTextOnCard">
                <div className="row">
                    <div className="col-6 flexbox d-none d-md-block">

                        <div className="card text-white bg-success mb-3">
                            <a href="https://adrianromero13.github.io/PassowrodGenerator/Generator.html" target="_blank" rel="noopener noreferrer">
                                <img className="card-img-top shadow-lg p-2 mb-5 img-fluid" src={RandomPassword} alt="Password Generator" />
                            </a>
                            <div className="card-header">Password Generator</div>
                        </div>

                        <div className="card text-info bg-light mb-3">
                            <a href="https://github.com/adrianromero13/EmployeeDatabase-HW" target="_blank" rel="noopener noreferrer">
                                <img className="card-img-top shadow-lg p-2 mb-5 img-fluid" src={EmployeeTracker} alt="Employee Tracker"/>
                            </a>
                            <div className="card-header">Employee Tracker</div>
                        </div>

                        <div className="card text-light bg-danger mb-3">
                            <a href="https://adrianromero13.github.io/Daily-planner/" target="_blank" rel="noopener noreferrer">
                                <img className="card-img-top shadow-lg p-2 mb-5 img-fluid" src={DailyPlanner} alt="Empoyee Daily Planner" />
                            </a>
                            <div className="card-header">Daily Planner</div>
                        </div>

                    </div>

                    <div className="col-6 flexbox d-none d-md-block">
                        <div className="card text-white bg-secondary mb-3">
                            <a href="https://adrianromero13.github.io/fridge.raider/" target="_blank" rel="noopener noreferrer">
                                <img className="card-img-top shadow-lg p-2 mb-5 img-fluid" src={FridgeRaider} alt="Fridge Raider" />
                            </a>
                            <div className="card-header">Fridge Raider</div>
                        </div>

                        <div className="card text-white bg-secondary mb-3">
                            <a href="https://github.com/adrianromero13/ReadMeGenerator-03-02" target="_blank" rel="noopener noreferrer">
                                <img className="card-img-top shadow-lg p-2 mb-5 img-fluid" src={Camera} alt="Github Resume Generator" />
                            </a>
                            <div className="card-header">Github Resume Generator</div>
                        </div>

                        <div className="card text-white bg-secondary mb-3">
                            <a href="https://adrianromero13.github.io/Question-game/index.html" target="_blank" rel="noopener noreferrer">
                                <img className="card-img-top shadow-lg p-2 mb-5 img-fluid" src={JSQuiz} alt="Full moon" />
                            </a>
                            <div className="card-header">JavaScript Quiz</div>
                        </div>
                    </div>
                </div>
            </div>

            <br />

            <div className="container well d-md-none">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                    </ol>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <a href="https://adrianromero13.github.io/PassowrodGenerator/Generator.html" target="_blank" rel="noopener noreferrer">
                                <img className="d-block w-100" src={RandomPassword} alt="First slide" />
                            </a>
                        </div>
                        {/* friendcard exercise map*/}
                        <div className="carousel-item">
                            <a href="https://github.com/adrianromero13/EmployeeDatabase-HW" target="_blank" rel="noopener noreferrer">
                                <img className="d-block w-100" src={EmployeeTracker} alt="Second slide" />
                            </a>
                        </div>
                        <div className="carousel-item">
                            <a href="https://adrianromero13.github.io/Daily-planner/" target="_blank" rel="noopener noreferrer">
                                <img className="d-block w-100" src={DailyPlanner} alt="Third slide" />
                            </a>
                        </div>
                        <div className="carousel-item">
                            <a href="https://adrianromero13.github.io/fridge.raider/" target="_blank" rel="noopener noreferrer">
                                <img className="d-block w-100" src={FridgeRaider} alt="Fourth slide" />
                            </a>
                        </div>
                        <div className="carousel-item">
                            <a href="https://github.com/adrianromero13/ReadMeGenerator-03-02" target="_blank" rel="noopener noreferrer">
                                <img className="d-block w-100" src={Camera} alt="Fifth slide" />
                            </a>
                        </div>
                        <div className="carousel-item">
                            <a href="https://adrianromero13.github.io/Question-game/index.html" target="_blank" rel="noopener noreferrer">
                                <img className="d-block w-100" src={JSQuiz} alt="Sixth slide" />
                            </a>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </div>

)

export default PortfolioPage;
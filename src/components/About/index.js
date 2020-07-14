import React from 'react';

import GrizleyPeak from './../../assets/Images/GrizleyPeak.jpg';
import './../../assets/Styles/styles.css';


const About = props => (
    <div className="ownBackground">
        <div className="container well">
            <br />
            <div className="row border-top border-bottom border-success">
                <div className="col-auto text-success">
                    <h5 className="text-justify-center align-middle">About Me</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-4 text-light justify-content-end">
                    <img src={GrizleyPeak} alt="me out in the woods" className="shadow-lg p-2 mb-5 img-fluid" max-width="100%" height="auto" />
                </div>
                <div className="col text-light text-left">
                    <p>
                        Born and raised in the small and lively city of <strong>Pomona</strong>, <strong>California</strong>, <br />where I grew up with a strong affiliation to music, art, and the life sciences.
                    </p>
                    <p>
                        Before moving to the Bay Area for bigger, and better opportunnities, Pomona is where I learned to play 5 different instruments, picked up on the culture of brewing beer, and graduated with a Bachelor's of Science in Microbiology.
                    </p>
                    <p>
                        Now I am living in The Bay, where I enjoy cycling, homebrewing, occasionally visiting new places in the energetic city of San Fransisco.
                    </p>
                    <p>
                        On my down time, I enjoy playing video games, reading medical journals, watching cooking tutorials, youtuber chefs, and my favorite anime T.V shows.
                        </p>
                    <p>
                        I aspire to learn.
                    </p>
                    <p>
                        I'm currently attending the Coding Bootcamp of UC Berkeley, Extensions to become a <strong>Full Stack Developer</strong>, and obtain the tools I seek to expand my knowledge and understanding of the world of computer engineering.
                    </p>
                    <p>
                        I hope to one day utilize those skills to combine with my aspirations in the fields of medical sciences.
                        </p>
                </div>
            </div>
        </div>
    </div>
);

export default About;
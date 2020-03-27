import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Skill(){
    return(
        <div className="Skill">
                <div className="container">
                    <div className="row">
                    <div className="Myskills col-12">
                       Skills
                   </div>
                    </div>
                    <div className="row Skilllist">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{ textAlign: 'left'}}>
                            <label>HTML</label>
                        <ProgressBar animated variant="success" now={99} />
                        <label>CSS</label>
                        <ProgressBar animated variant="info" now={98} />
                        <label>JavaScript</label>
                        <ProgressBar animated variant="warning" now={95} />
                        <label>ReactJS</label>
                        <ProgressBar animated variant="danger" now={92} />
                        <label>NodeJS</label>
                        <ProgressBar animated variant="dark" now={85} />
                        <label>Azure & AWS</label>
                        <ProgressBar animated variant="success" now={75} />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{ textAlign: 'left'}}>
                        <label>C#</label>
                        <ProgressBar animated variant="blue" now={95} />
                        <label>.Net</label>
                        <ProgressBar animated variant="dark" now={95} />
                        <label>SQL</label>
                        <ProgressBar animated variant="info" now={90} />
                        <label>MongoDB</label>
                        <ProgressBar animated variant="dark" now={85} />
                        <label>Angular</label>
                        <ProgressBar animated variant="danger" now={60} />
                        <label>Python</label>
                        <ProgressBar animated variant="warning" now={10} />
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Skill;
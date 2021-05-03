import React, { Fragment } from 'react';
import Project from '../components/Project.jsx';
import Skill from '../components/Skill.jsx'
import Header from '../components/Header.jsx'
import Certification from '../components/Certification.jsx'
import GithubActivity from '../components/GithubActivity.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MetaTags from 'react-meta-tags'
import api from '../api-connection'

class Home extends React.Component {

constructor(props) {
super(props)
this.state = {
projects: [],
skills: [],
certifications: []
}
}

componentDidMount() {
api.get('/projects')
.then(response => {
this.setState({projects: response.data})
})
.catch(err => {
console.log(err)
})

api.get('/skills')
.then(response => {
this.setState({skills: response.data})
})
.catch(err => {
console.log(err)
})

api.get('/certifications')
.then(response => {
this.setState({certifications: response.data})
})
.catch(err => {
console.log(err)
})
}

render() {
let projects;
if (this.state.projects.length > 0) {
projects = this.state.projects.map(project =>
<Project key={project._id} title={project.title} link={project.link} image={"storage/images/projects/" + project.image}
    description={project.description} />
)
} else {
projects = <div className="d-flex justify-content-center">
    <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
    </div>
</div>
}

let skills;

if (this.state.skills.length > 0) {
skills = this.state.skills.map(skill =>
<Skill key={skill._id} title={skill.title} status={skill.status} level={skill.level} />
)
} else {
skills = <div className="d-flex justify-content-center">
    <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
    </div>
</div>
}

return (
<Fragment>
    <MetaTags>
        <title>Portfolio</title>
        <meta property="og:title" content="Byron portfolio" />
        <meta property="og:description" content="Professional info about Byron Jimenez" />
        <meta property="og:image" content="" />
    </MetaTags>
    <Header />
    <div className="container sections-wrapper">
        <div className="row">
            <div className="primary col-lg-8 col-12">
                <section className="about section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">About Me</h2>
                        <div className="content">
                            <p>I'm a web and mobile developer, I have two years of programming experience. I'm
                                self-taught, creative, passionate about design, I seek to expand my skills daily
                                and
                                I
                                love challenges. I would love to be part of a dynamic and creative team where I
                                can
                                contribute with all my knowledge</p>
                        </div>
                    </div>
                </section>

                <section className="latest section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">Latest Projects</h2>
                        <div className="content">
                            {projects}
                            <h6>
                                <FontAwesomeIcon icon="info-circle" />Some projects are missing</h6>
                            <hr />
                            <a className="btn btn-cta-secondary" href="https://github.com/bydavid1">More on GitHub
                                <FontAwesomeIcon icon="chevron-right" className="ms-2" /></a>
                        </div>
                    </div>
                </section>

                <section className="experience section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">Work Experience</h2>
                        <div className="content">
                            <div className="item">
                                <h3 className="title">Web Developer <span className="place"><a href="#">Grupo
                                            Fenix</a></span>
                                    <span className="year">(2019 - 2020)</span></h3>
                                <p>Building description</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="github section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">My GitHub</h2>
                        <GithubActivity />
                    </div>
                </section>

            </div>
            <div className="secondary col-lg-4 col-12">
                <aside className="info aside section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading sr-only">Basic Information</h2>
                        <div className="content">
                            <ul className="list-unstyled">
                                <li>
                                    <FontAwesomeIcon icon="map-marker-alt" /><span
                                        className="sr-only">Location:</span>El
                                    Salvador</li>
                                <li>
                                    <FontAwesomeIcon icon="envelope" /><span className="sr-only">Email:</span><a
                                        href="#">
                                        byronjimenez9911@gmail.com</a></li>
                                <li>
                                    <FontAwesomeIcon icon="calendar" /><span className="sr-only">Born
                                        Date:</span>February,
                                    22/1999</li>
                            </ul>
                        </div>
                    </div>
                </aside>

                <aside className="skills aside section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">Skills</h2>
                        <div className="content">
                            <div className="skillset">
                                {skills}
                                <p><a className="more-link" href="https://github.com/bydavid1">
                                        <FontAwesomeIcon icon="external-link-alt" />More on
                                        GitHub</a></p>
                            </div>
                        </div>
                    </div>
                </aside>


                <aside className="education aside section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">Education</h2>
                        <div className="content">
                            {
                            this.state.certifications.map(certi => certi.important == 1 ?
                            <Certification key={certi._id} title={certi.title} school={certi.school} dateRange={certi.dateRange} /> :
                            "")
                            }
                            <h4 className="heading">Courses</h4>
                            {
                            this.state.certifications.map(certi => certi.important > 1 ?
                            <Certification key={certi._id} title={certi.title} school={certi.school} dateRange={certi.dateRange} /> :
                            "")
                            }
                        </div>
                    </div>
                </aside>

                <aside className="languages aside section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">Languages</h2>
                        <div className="content">
                            <ul className="list-unstyled">
                                <li className="item">
                                    <span className="title"><strong>English:</strong></span>
                                </li>
                                <li className="item">
                                    <span className="level">Write <br className="visible-sm visible-xs" />
                                        <FontAwesomeIcon icon="star" />
                                        <FontAwesomeIcon icon="star" />
                                    </span>
                                </li>
                                <li className="item">
                                    <span className="level">Read <br className="visible-sm visible-xs" />
                                        <FontAwesomeIcon icon="star" />
                                        <FontAwesomeIcon icon="star" />
                                        <FontAwesomeIcon icon="star" />
                                        <FontAwesomeIcon icon="star" />
                                    </span>
                                </li>
                                <li className="item">
                                    <span className="level">Speak <br className="visible-sm visible-xs" />
                                        <FontAwesomeIcon icon="star" />
                                        <FontAwesomeIcon icon="star" />
                                    </span>
                                </li>
                                <h6>
                                    <FontAwesomeIcon icon="info-circle" className="me-1" />I'm getting better every day
                                </h6>
                            </ul>
                        </div>
                    </div>
                </aside>

                <aside className="list music aside section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">Favourite coding music</h2>
                        <div className="content">
                            <iframe src="https://open.spotify.com/embed?uri=spotify:playlist:7D3Qw59hB8XhqUdIZImepN"
                                width="300" height="380" frameBorder="0" allowtransparency="true"
                                allow="encrypted-media"></iframe>
                        </div>
                    </div>
                </aside>

                <aside className="list conferences aside section">
                    <aside className="credits aside section">
                        <div className="section-inner shadow-sm rounded">
                            <h2 className="heading">Credits</h2>
                            <div className="content">
                                <ul className="list-unstyled pb-2">
                                    <li><a href="https://getbootstrap.com/" target="_blank">
                                            <FontAwesomeIcon icon="external-link-alt" />Bootstrap</a></li>
                                    <li><a href="https://fortawesome.github.io/Font-Awesome/" target="_blank">
                                            <FontAwesomeIcon icon="external-link-alt" />FontAwesome</a></li>
                                    <li><a href="https://github.com/IonicaBizau/github-calendar" target="_blank">
                                            <FontAwesomeIcon icon="external-link-alt" />GitHub
                                            Calendar Plugin</a></li>
                                    <li><a href="https://caseyscarborough.com/projects/github-activity/"
                                            target="_blank">
                                            <FontAwesomeIcon icon="external-link-alt" />GitHub
                                            Activity
                                            Stream</a></li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </aside>
            </div>
        </div>
    </div>
</Fragment>
)
}
}

export default Home;
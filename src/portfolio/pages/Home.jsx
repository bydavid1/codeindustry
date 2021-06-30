import React, { Fragment } from 'react';
import Project from '../components/Project.jsx';
import Skill from '../components/Skill.jsx'
import Links from '../components/Links.jsx'
import Certification from '../components/Certification.jsx'
import Experience from '../components/Experience.jsx';
import GithubActivity from '../components/GithubActivity.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import account from '../../../storage/images/account.jpg'
import MetaTags from 'react-meta-tags'
import api from '../api'

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }

        this.data = {
            projects: [],
            skills: [],
            experience: [],
            projects: [],
            certifications: [],
            links: {}
        }
    }

    componentDidMount() {
        api.get('/portfolio')
        .then(response => {
            this.data = response.data

            this.setState({
                loading: false
            })
        })
        .catch(error => {
            console.log("error: " + error)
        })
    }

    render() {
        if (this.state.loading != true) {
            return (
                <Fragment>
                    <MetaTags>
                        <title>Portfolio</title>
                        <meta property="og:title" content="Byron portfolio" />
                        <meta property="og:description" content="Professional info about Byron Jimenez" />
                        <meta property="og:image" content="" />
                    </MetaTags>
                    <header className="header">
                    <div className="container clearfix">
                        <img className="profile-image img-fluid float-start rounded-circle" src={account}
                            alt="profile image" />
                        <div className="profile-content float-start">
                            <h1 className="name">{this.data.fullName}</h1>
                            <h2 className="desc">{this.data.grade}</h2>
                            <Links links={this.data.links}/>
                            <h6><i className="fa fa-exclamation-circle mr-1"></i>Building Portfolio</h6>
                        </div>
                        <a className="btn btn-success float-end" href="/curriculum" target="_blank">
                            <FontAwesomeIcon icon="download"/> Descargar CV</a>
                    </div>
                </header>
                    <div className="container sections-wrapper">
                        <div className="row">
                            <div className="primary col-lg-8 col-12">
                                <section className="about section">
                                    <div className="section-inner shadow-sm rounded">
                                        <h2 className="heading">About Me</h2>
                                        <div className="content">
                                            <p>{ this.data.biography }</p>
                                        </div>
                                    </div>
                                </section>
    
                                <section className="latest section">
                                    <div className="section-inner shadow-sm rounded">
                                        <h2 className="heading">Latest Projects</h2>
                                        <div className="content">
                                            {
                                                this.data.projects.length > 0 ? (
                                                    this.data.projects.map(project =>
                                                        <Project key={project._id} 
                                                            title={project.title} 
                                                            link={project.link} 
                                                            image={project.image ? process.env.DB_HOST + project.image.url : ''}
                                                            description={project.description} />)
                                                ) : (
                                                    <div className="d-flex justify-content-center">
                                                        <div className="spinner-grow text-primary" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            <h6>
                                                <FontAwesomeIcon icon="info-circle" className="mx-1"/>Some projects are missing</h6>
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
                                            {
                                                this.data.experience.length > 0 ? (
                                                    this.data.experience.map(experience =>
                                                        <Experience key={experience._id} 
                                                            jobTitle={experience.jobTitle} 
                                                            company={experience.company} 
                                                            startDate={experience.startDate}
                                                            endDate={experience.endDate}
                                                            description={experience.description} />)
                                                ) : (
                                                    <div className="d-flex justify-content-center">
                                                        <div className="spinner-grow text-primary" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </div>
                                                    </div>
                                                )
                                            }
    
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
                                                        className="sr-only">Location:</span>{ this.data.address }</li>
                                                <li>
                                                    <FontAwesomeIcon icon="envelope" /><span className="sr-only">Email:</span><a
                                                        href="#">
                                                        { this.data.email }</a></li>
                                                <li>
                                                    <FontAwesomeIcon icon="calendar" /><span className="sr-only">Born
                                                        Date:</span>{ this.data.birthDate }</li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
    
                                <aside className="skills aside section">
                                    <div className="section-inner shadow-sm rounded">
                                        <h2 className="heading">Skills</h2>
                                        <div className="content">
                                            <div className="skillset">
                                                {
                                                    this.data.skills.length > 0 ? (
                                                        this.data.skills.map(skill =>
                                                            <Skill key={skill._id} title={skill.title} status={skill.status} level={skill.level} />)    
                                                    ) : (
                                                        <div className="d-flex justify-content-center">
                                                            <div className="spinner-grow text-primary" role="status">
                                                                <span className="visually-hidden">Loading...</span>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                <p>
                                                    <a className="more-link" href="https://github.com/bydavid1">
                                                        <FontAwesomeIcon icon="external-link-alt" />More on
                                                        GitHub</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
    
                                <aside className="education aside section">
                                    <div className="section-inner shadow-sm rounded">
                                        <h2 className="heading">Education</h2>
                                        <div className="content">
                                            {
                                                this.data.certifications.map(certi => certi.isImportant === true ?
                                                <Certification key={certi._id} 
                                                    title={certi.title} 
                                                    school={certi.school} 
                                                    startDate={certi.startDate}
                                                    endDate={certi.endDate} /> :
                                                "")
                                            }
                                            <h4 className="heading">Courses</h4>
                                            {
                                                this.data.certifications.map(certi => certi.isImportant != true ?
                                                <Certification key={certi._id} 
                                                    title={certi.title} 
                                                    school={certi.school} 
                                                    startDate={certi.startDate}
                                                    endDate={certi.endDate} /> :
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
                                                    <li>
                                                        <a href="https://getbootstrap.com/" target="_blank">
                                                            <FontAwesomeIcon icon="external-link-alt" />Bootstrap
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://fortawesome.github.io/Font-Awesome/" target="_blank">
                                                            <FontAwesomeIcon icon="external-link-alt" />FontAwesome
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://github.com/IonicaBizau/github-calendar" target="_blank">
                                                            <FontAwesomeIcon icon="external-link-alt" />GitHub Calendar Plugin
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://caseyscarborough.com/projects/github-activity/" target="_blank">
                                                            <FontAwesomeIcon icon="external-link-alt" />GitHub Activity Stream
                                                        </a>
                                                    </li>
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
        } else {
            return (
                <div className="d-flex justify-content-center mt-5">
                    <div className="spinner-border text-secondary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )
        }
    }
}

export default Home;
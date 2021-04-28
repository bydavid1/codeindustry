import React, { Fragment } from 'react';
import Project from './Project.jsx';
import Skill from './Skill.jsx'
import Header from './Header.jsx'

const Home = function() {
    return (
       <Fragment>
           <Header />
           <div class="container sections-wrapper">
               <div class="row">
                   <div class="primary col-lg-8 col-12">
                       <section class="about section">
                           <div class="section-inner shadow-sm rounded">
                               <h2 class="heading">About Me</h2>
                               <div class="content">
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

                       <section class="latest section">
                           <div class="section-inner shadow-sm rounded">
                               <h2 class="heading">Latest Projects</h2>
                               <div class="content">
                                   <Project title="Web system inventory (Own)"
                                       link="https://github.com/bydavid1/inventory-web-laravel"
                                       image="assets/images/projects/project1-1.png" description="" />

                                   <hr class="divider" />

                                   <Project title="My version pocket" link="https://still-earth-29114.herokuapp.com/#/"
                                       image="assets/images/projects/project7.png" description="Project made using technologies like Vue and Laravel. Is my
                                    'remastered version' of pocket.com.
                                    check my demo in the next link" />

                                   <Project title="GESTEM Landing Page (Grupo Fenix)"
                                       link="https://gestem.herokuapp.com/" image="assets/images/projects/project2.png"
                                       description="" />

                                   <Project title="TEM - Moran Landing Page (Grupo Fenix)"
                                       link="https://tem-moran.herokuapp.com/"
                                       image="assets/images/projects/project3.PNG" description="" />

                                   <Project title="Wommentors.com(Grupo Fenix)" link="https://wommentors.com/"
                                       image="assets/images/projects/project4.PNG" description="" />

                                   <Project title="La Octava Maravilla Landing Page (Grupo Fenix)"
                                       link="http://laoctavamaravilla.com/" image="assets/images/projects/project5.PNG"
                                       description="" />

                                   <Project title="Batallon Aguila Landing Page Multilanguage (Grupo Fenix)"
                                       link="http://batallonaguila.com/" image="assets/images/projects/project6.PNG"
                                       description="" />

                                   <Project title="Web system inventory (Own)"
                                       link="https://github.com/bydavid1/inventory-web-laravel"
                                       image="assets/images/projects/project1-1.png" description="" />

                                   <h6><i class="fa fa-exclamation-circle mr-1"></i>Some projects are missing</h6>
                                   <hr />
                                   <a class="btn btn-cta-secondary" href="https://github.com/bydavid1">More on GitHub <i
                                           class="fas fa-chevron-right pt-1"></i></a>
                               </div>
                           </div>
                       </section>

                       <section class="experience section">
                           <div class="section-inner shadow-sm rounded">
                               <h2 class="heading">Work Experience</h2>
                               <div class="content">
                                   <div class="item">
                                       <h3 class="title">Web Developer <span class="place"><a href="#">Grupo
                                                   Fenix</a></span>
                                           <span class="year">(2019 - 2020)</span></h3>
                                       <p>Building description</p>
                                   </div>
                               </div>
                           </div>
                       </section>

                       <section class="github section">
                           <div class="section-inner shadow-sm rounded">
                               <h2 class="heading">My GitHub</h2>
                               <div id="calendar" class="github-graph"></div>
                               <div id="feed" class="ghfeed">
                               </div>
                           </div>
                       </section>

                   </div>
                   <div class="secondary col-lg-4 col-12">
                       <aside class="info aside section">
                           <div class="section-inner shadow-sm rounded">
                               <h2 class="heading sr-only">Basic Information</h2>
                               <div class="content">
                                   <ul class="list-unstyled">
                                       <li><i class="fas fa-map-marker-alt"></i><span class="sr-only">Location:</span>El
                                           Salvador</li>
                                       <li><i class="fas fa-envelope"></i><span class="sr-only">Email:</span><a
                                               href="#">
                                               byronjimenez9911@gmail.com</a></li>
                                       <li><i class="fas fa-calendar"></i><span class="sr-only">Born
                                               Date:</span>February,
                                           22/1999</li>
                                   </ul>
                               </div>
                           </div>
                       </aside>

                       <aside class="skills aside section">
                           <div class="section-inner shadow-sm rounded">
                               <h2 class="heading">Skills</h2>
                               <div class="content">
                                   <div class="skillset">
                                       <Skill title="PHP & Laravel" status="Learnig" level="60" />
                                       <Skill title="Javascript &amp; jQuery" status="Learnig" level="50" />
                                       <Skill title="CSS & Bootstrap" status="Learnig" level="75" />
                                       <Skill title="Xamarin" status="Learnig" level="50" />
                                       <Skill title="Vue js" status="Learnig" level="50" />
                                       <Skill title="Wordpress" status="Learnig" level="75" />
                                       <Skill title="Photoshop" status="Learnig" level="70" />
                                       <Skill title="Illustrator" status="Learnig" level="35" />

                                       <p><a class="more-link" href="https://github.com/bydavid1"><i
                                                   class="fas fa-external-link-alt"></i>More on
                                               GitHub</a></p>
                                   </div>
                               </div>
                           </div>
                       </aside>


                       <aside class="education aside section">
                           <div class="section-inner shadow-sm rounded">
                               <h2 class="heading">Education</h2>
                               <div class="content">
                                   <div class="item">
                                       <h3 class="title"><i class="fas fa-graduation-cap"></i> Técnico en Ingeniería de
                                           Sistemas Informaticos</h3>
                                       <h4 class="university">ITCA - FEPADE Santa Ana <span
                                               class="year">(2017-2018)</span>
                                       </h4>
                                   </div>
                                   <h4 class="heading">Courses</h4>
                                   <div class="item">
                                       <h3 class="title"><i class="fas fa-graduation-cap"></i>Desarrollador de Apps
                                           Moviles
                                           con
                                           Xamarin</h3>
                                       <h4 class="university">Centro de Desarrollo de Software(CDS) Santa Ana <span
                                               class="year">(2019 - 2020)</span></h4>
                                   </div>
                                   <div class="item">
                                       <h3 class="title"><i class="fas fa-graduation-cap"></i>Técnico Programador
                                           Analista
                                           de
                                           Computadoras</h3>
                                       <h4 class="university">Centro Técnico Superior en Computación <span
                                               class="year">(2013 -
                                               2014)</span></h4>
                                   </div>
                               </div>
                           </div>
                       </aside>


                       <aside class="languages aside section">
                           <div class="section-inner shadow-sm rounded">
                               <h2 class="heading">Languages</h2>
                               <div class="content">
                                   <ul class="list-unstyled">
                                       <li class="item">
                                           <span class="title"><strong>English:</strong></span>
                                       </li>
                                       <li class="item">
                                           <span class="level">Write <br class="visible-sm visible-xs" /><i
                                                   class="fas fa-star"></i> <i class="fas fa-star"></i></span>
                                       </li>
                                       <li class="item">
                                           <span class="level">Read <br class="visible-sm visible-xs" /><i
                                                   class="fas fa-star"></i> <i class="fas fa-star"></i> <i
                                                   class="fas fa-star"></i></span>
                                       </li>
                                       <li class="item">
                                           <span class="level">Speak <br class="visible-sm visible-xs" /><i
                                                   class="fas fa-star"></i> <i class="fas fa-star"></i></span>
                                       </li>
                                       <h6><i class="fa fa-exclamation-circle mr-1"></i>I'm getting better every day
                                       </h6>
                                   </ul>
                               </div>
                           </div>
                       </aside>

                       <aside class="list music aside section">
                           <div class="section-inner shadow-sm rounded">
                               <h2 class="heading">Favourite coding music</h2>
                               <div class="content">
                                   <iframe
                                       src="https://open.spotify.com/embed?uri=spotify:playlist:7D3Qw59hB8XhqUdIZImepN"
                                       width="300" height="380" frameborder="0" allowtransparency="true"
                                       allow="encrypted-media"></iframe>
                               </div>
                           </div>
                       </aside>

                       <aside class="list conferences aside section">
                           <aside class="credits aside section">
                               <div class="section-inner shadow-sm rounded">
                                   <h2 class="heading">Credits</h2>
                                   <div class="content">
                                       <ul class="list-unstyled pb-2">
                                           <li><a href="https://getbootstrap.com/" target="_blank"><i
                                                       class="fas fa-external-link-alt"></i>Bootstrap</a></li>
                                           <li><a href="https://fortawesome.github.io/Font-Awesome/" target="_blank"><i
                                                       class="fas fa-external-link-alt"></i>FontAwesome</a></li>
                                           <li><a href="https://jquery.com/" target="_blank"><i
                                                       class="fas fa-external-link-alt"></i>jQuery</a></li>
                                           <li><a href="https://github.com/IonicaBizau/github-calendar"
                                                   target="_blank"><i class="fas fa-external-link-alt"></i>GitHub
                                                   Calendar Plugin</a></li>

                                           <li><a href="https://caseyscarborough.com/projects/github-activity/"
                                                   target="_blank"><i class="fas fa-external-link-alt"></i>GitHub
                                                   Activity
                                                   Stream</a></li>

                                           <li><a href="https://github.com/sdepold/jquery-rss" target="_blank"><i
                                                       class="fas fa-external-link-alt"></i>jQuery RSS</a></li>
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

export default Home;
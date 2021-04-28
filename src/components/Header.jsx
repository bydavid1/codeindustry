import React from 'react';

const Header = function() {
    return (
        <header class="header">
            <div class="container clearfix">
                <img class="profile-image img-fluid float-left rounded-circle" src="assets/images/account.jpg"
                    alt="profile image" />
                <div class="profile-content float-left">
                    <h1 class="name">Byron Jimenez</h1>
                    <h2 class="desc">Web App Developer</h2>
                    <ul class="social list-inline">
                        <li class="list-inline-item"><a href="https://www.linkedin.com/in/bydavid/"><i
                                    class="fab fa-linkedin-in"></i></a></li>
                        <li class="list-inline-item"><a href="https://github.com/bydavid1"><i
                                    class="fab fa-github-alt"></i></a></li>
                        <li class="list-inline-item"><a href="https://es.stackoverflow.com/users/142564/byron-jimenez"><i
                                    class="fab fa-stack-overflow"></i></a></li>
                        <li class="list-inline-item last-item"><a href="#"><i class="fab fa-codepen"></i></a></li>
                    </ul>
                    <h6><i class="fa fa-exclamation-circle mr-1"></i>Building Portfolio</h6>
                </div>
    
                <a class="btn btn-success float-right" href="assets/documents/CVSpanish.pdf" target="_blank"><i
                        class="fas fa-download"></i> Descargar CV</a>
    
            </div>
        </header>
    )
}

export default Header;
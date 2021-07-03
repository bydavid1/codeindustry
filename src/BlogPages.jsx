//Core
import React, { lazy, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
//Components
const Home = lazy(() => import('./pages/Home.jsx'))
const Article = lazy(() => import('./pages/Article.jsx'))
const Category = lazy(() => import('./pages/Category.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const Tag = lazy(() => import('./pages/Tag.jsx'))
const Header = lazy(() => import('./components/Header.jsx'))
const Footer = lazy(() => import('./components/Footer.jsx'))
//Services
import api from './api'
//Assets
import '../resources/scss/blog.scss'

function BlogPages () {

    const [menu, setMenu] = useState([])
    
    let tags = []
    let def = [
        {name: 'Inicio', link: '/'},
        {name: 'Acerca de', link: '/about'},
    ]

    useEffect(() => {
        api.get('/tags/menu')
        .then(response => {
            tags = response.data.map(item => {
                return {name: item.name, link: '/tag/' + item.slug}
            })
            setMenu(def.concat(tags)) 
        })
        .catch(error => console.error(error))
    }, [])

    return (
        <>
            <Header menu={menu}/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/post/:slug" component={Article}/>
                    <Route exact path="/category/:slug" component={Category}/>
                    <Route exact path="/tag/:slug" component={Tag}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/contact" component={Contact}/>
                </Switch>
            <Footer menu={menu}/>
        </>
    );
}

export default BlogPages;
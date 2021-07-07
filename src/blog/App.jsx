//Core
import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//Components
import PageLoader from './components/PageLoader.jsx'
const Home = lazy(() => import('./pages/Home.jsx'))
const Article = lazy(() => import('./pages/Article.jsx'))
const Category = lazy(() => import('./pages/Category.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const Tag = lazy(() => import('./pages/Tag.jsx'))
const NotFound = lazy(() => import('./components/NotFound.jsx'))
const Header = lazy(() => import('./components/Header.jsx'))
const Footer = lazy(() => import('./components/Footer.jsx'))
//Services
import api from './api.js';

function App() {
    
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
                return {name: item.name, link: `/tag/${item.slug}` }
            })
            setMenu(def.concat(tags)) 
        })
        .catch(error => console.error(error))
    }, [])

    return (
        <>
            <BrowserRouter>
                <Suspense fallback={<div><PageLoader/></div>}>
                    <Header menu={menu}/>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/post/:slug" component={Article}/>
                            <Route exact path="/category/:slug" component={Category}/>
                            <Route exact path="/tag/:slug" component={Tag}/>
                            <Route exact path="/about" component={About}/>
                            <Route exact path="/contact" component={Contact}/>
                            <Route path="*" component={NotFound}/>
                        </Switch>
                    <Footer menu={menu}/>
                </Suspense>
            </BrowserRouter>

        </>
    )
}

export default App;
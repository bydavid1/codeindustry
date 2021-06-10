import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Article from './pages/Article.jsx'
import Category from './pages/Category.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
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
                return {name: item.name, link: '/' + item.slug}
            })
            setMenu(def.concat(tags)) 
        })
        .catch(error => console.error(error))
    }, [])



    return (
        <>
            <BrowserRouter>
                <Header menu={menu}/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/post/:slug" component={Article}/>
                        <Route exact path="/category/:slug" component={Category}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/contact" component={Contact}/>
                    </Switch>
                <Footer menu={menu}/>
            </BrowserRouter>

        </>
    )
}

export default App;
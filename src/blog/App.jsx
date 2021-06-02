import React from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Post from './pages/Post.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/post/:slug" component={Post}/>
                </Switch>
            </BrowserRouter>
            <Footer/>
        </>
    )
}

export default App;
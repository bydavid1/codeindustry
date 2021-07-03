//Core
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//Components
import PageLoader from './components/PageLoader.jsx'
const NotFound = lazy(() => import('./components/NotFound.jsx'))
const BlogPages = lazy(() => import('./BlogPages.jsx'))
const Portfolio = lazy(() => import('./pages/Portfolio.jsx'))

function App() {
    
    return (
        <>
            <BrowserRouter>
                <Suspense fallback={<div><PageLoader/></div>}>
                    <Switch>
                        <Route path="/portfolio" component={Portfolio}/>
                        <Route component={BlogPages}/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </Suspense>
            </BrowserRouter>

        </>
    )
}

export default App;
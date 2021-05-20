import { Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import Home from './screens/Home/Home'
import Form from './screens/Form/Form'
import SingleBlog from './screens/SingleBlog/SingleBlog'
import './App.scss'
import Articles from './screens/ARTICLES/Articles.js'
import SinglePortfolio from './screens/SinglePortfolio/SinglePortfolio.js'
import SingleService from './screens/SingleService/SingleService'

function App() {
    return (
        <>
            <Header />
            <main>
                <Switch>
                    <Route path='/' component={Home} exact />
                    <Route path='/contacts' component={Form} exact />
                    <Route path='/articles' component={Articles} exact />
                    <Route path='/single-blog' component={SingleBlog} exact />
                    <Route
                        path='/single-portfolio'
                        component={SinglePortfolio}
                        exact
                    />
                    <Route
                        path='/single-service'
                        component={SingleService}
                        exact
                    />
                </Switch>
            </main>
            <Footer />
        </>
    )
}

export default App

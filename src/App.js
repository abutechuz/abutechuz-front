import { Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import Home from './screens/Home/Home'
import Form from './screens/Form/Form'
import './App.scss'

function App() {
    return (
        <>
            <Header />
            <main>
                <Switch>
                    <Route path='/' component={Home} exact/>
                    <Route path='/form' component={Form} exact/>
                </Switch>
            </main>
            <Footer />
        </>
    )
}

export default App

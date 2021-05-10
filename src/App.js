import { Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import Home from './screens/Home/Home'
import './App.scss'

function App() {
    return (
        <>
            <Header />
            <main>
                <Switch>
                    <Route path='/' component={Home} />
                </Switch>
            </main>
            <Footer />
        </>
    )
}

export default App

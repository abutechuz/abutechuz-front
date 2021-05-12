import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import Container from '../Container/Container'
import './HomeTool.scss'

function HomeTool() {
    return (
        <section className='hometool'>
            <Container>
                <h2 className='hometool__heading'>
                    <small className='hometool__small-heading'>
                        ЗНАЕТЕ ЛИ ВЫ
                    </small>
                    ЧТО МЫ <br /> ИСПОЛЬЗУЕМ ЭТИ?
                </h2>

                <ul className='hometool__nav-list'>
                    <li className='hometool__nav-item'>
                        <NavLink
                            className='hometool__nav-link'
                            activeClassName='hometool__nav-link--active'
                            to='/'
                            exact>
                            Backend
                        </NavLink>
                    </li>
                    <li className='hometool__nav-item'>
                        <NavLink
                            className='hometool__nav-link'
                            activeClassName='hometool__nav-link--active'
                            to='/hometool/frontend'
                            exact>
                            Frontend
                        </NavLink>
                    </li>
                    <li className='hometool__nav-item'>
                        <NavLink
                            className='hometool__nav-link'
                            activeClassName='hometool__nav-link--active'
                            to='/hometool/mobile'
                            exact>
                            Mobile
                        </NavLink>
                    </li>
                    <li className='hometool__nav-item'>
                        <NavLink
                            className='hometool__nav-link'
                            activeClassName='hometool__nav-link--active'
                            to='/hometool/database'
                            exact>
                            Database
                        </NavLink>
                    </li>
                    <li className='hometool__nav-item'>
                        <NavLink
                            className='hometool__nav-link'
                            activeClassName='hometool__nav-link--active'
                            to='/hometool/design'
                            exact>
                            Dizayn
                        </NavLink>
                    </li>
                    <li className='hometool__nav-item'>
                        <NavLink
                            className='hometool__nav-link'
                            activeClassName='hometool__nav-link--active'
                            to='/hometool/production'
                            exact>
                            Production
                        </NavLink>
                    </li>
                </ul>

                <Switch>
                    <Route path='/' exact>
                        <ul className='hometool__tools-list'>
                            <li className='hometool__tools-item'>
                                <img
                                    className='hometool__tools-img'
                                    src='https://via.placeholder.com/65x60'
                                    alt='Tech tool illustration'
                                    width='65'
                                    height='60'
                                />

                                <h3 className='hometool__tools-heading'>
                                    React
                                </h3>
                            </li>
                            <li className='hometool__tools-item'>
                                <img
                                    className='hometool__tools-img'
                                    src='https://via.placeholder.com/65x60'
                                    alt='Tech tool illustration'
                                    width='65'
                                    height='60'
                                />

                                <h3 className='hometool__tools-heading'>
                                    React
                                </h3>
                            </li>
                            <li className='hometool__tools-item'>
                                <img
                                    className='hometool__tools-img'
                                    src='https://via.placeholder.com/65x60'
                                    alt='Tech tool illustration'
                                    width='65'
                                    height='60'
                                />

                                <h3 className='hometool__tools-heading'>
                                    React
                                </h3>
                            </li>
                            <li className='hometool__tools-item'>
                                <img
                                    className='hometool__tools-img'
                                    src='https://via.placeholder.com/65x60'
                                    alt='Tech tool illustration'
                                    width='65'
                                    height='60'
                                />

                                <h3 className='hometool__tools-heading'>
                                    React
                                </h3>
                            </li>
                            <li className='hometool__tools-item'>
                                <img
                                    className='hometool__tools-img'
                                    src='https://via.placeholder.com/65x60'
                                    alt='Tech tool illustration'
                                    width='65'
                                    height='60'
                                />

                                <h3 className='hometool__tools-heading'>
                                    React
                                </h3>
                            </li>
                            <li className='hometool__tools-item'>
                                <img
                                    className='hometool__tools-img'
                                    src='https://via.placeholder.com/65x60'
                                    alt='Tech tool illustration'
                                    width='65'
                                    height='60'
                                />

                                <h3 className='hometool__tools-heading'>
                                    React
                                </h3>
                            </li>
                            <li className='hometool__tools-item'>
                                <img
                                    className='hometool__tools-img'
                                    src='https://via.placeholder.com/65x60'
                                    alt='Tech tool illustration'
                                    width='65'
                                    height='60'
                                />

                                <h3 className='hometool__tools-heading'>
                                    React
                                </h3>
                            </li>
                            <li className='hometool__tools-item'>
                                <img
                                    className='hometool__tools-img'
                                    src='https://via.placeholder.com/65x60'
                                    alt='Tech tool illustration'
                                    width='65'
                                    height='60'
                                />

                                <h3 className='hometool__tools-heading'>
                                    React
                                </h3>
                            </li>
                            <li className='hometool__tools-item'>
                                <img
                                    className='hometool__tools-img'
                                    src='https://via.placeholder.com/65x60'
                                    alt='Tech tool illustration'
                                    width='65'
                                    height='60'
                                />

                                <h3 className='hometool__tools-heading'>
                                    React
                                </h3>
                            </li>
                        </ul>
                    </Route>
                    <Route path='/hometool/frontend' exact>
                        Frontend
                    </Route>
                </Switch>
            </Container>
        </section>
    )
}

export default HomeTool

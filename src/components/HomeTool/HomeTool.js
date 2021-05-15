import React from 'react'
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom'
import Container from '../Container/Container'
import './HomeTool.scss'

function HomeTool() {
    const { path, url } = useRouteMatch()
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
                            to={url}
                            exact>
                            Backend
                        </NavLink>
                    </li>
                    <li className='hometool__nav-item'>
                        <NavLink
                            className='hometool__nav-link'
                            activeClassName='hometool__nav-link--active'
                            to={`${url}/home-frontend`}>
                            Frontend
                        </NavLink>
                    </li>
                    <li className='hometool__nav-item'>
                        <NavLink
                            className='hometool__nav-link'
                            activeClassName='hometool__nav-link--active'
                            to={`${url}/home-mobile`}>
                            {' '}
                            Mobile
                        </NavLink>
                    </li>
                    <li className='hometool__nav-item'>
                        <NavLink
                            className='hometool__nav-link'
                            activeClassName='hometool__nav-link--active'
                            to='/hometool/database'>
                            Database
                        </NavLink>
                    </li>
                    <li className='hometool__nav-item'>
                        <NavLink
                            className='hometool__nav-link'
                            activeClassName='hometool__nav-link--active'
                            to='/hometool/design'>
                            Dizayn
                        </NavLink>
                    </li>
                    <li className='hometool__nav-item'>
                        <NavLink
                            className='hometool__nav-link'
                            activeClassName='hometool__nav-link--active'
                            to='/hometool/production'>
                            Production
                        </NavLink>
                    </li>
                </ul>

                <Switch>
                    <Route path={path} exact>
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
                    <Route path={`${path}/home-frontend`}>Frontend</Route>
                </Switch>
            </Container>
        </section>
    )
}

export default HomeTool

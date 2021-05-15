import "./ArticleVideo.scss"
import { Link } from "react-router-dom"
import bigImg from '../../assets/img/bigImgVid.png'

import "./ArticleVideo"

function ArticleVideo () {
    return (
        <>
            <section className="art-vid">
                <div className="art-vid__big art-vid-big">
                    <Link className="art-vid-big__link">
                        <img className="art-vid-big__img" src={bigImg} alt="" width="735" height="400"/>
                        <span className="art-vid-big__span" aria-label="play"></span>
                    </Link>

                    <div className="art-vid__big-inner">
                        <time className="art-vid__big-time" dateTime="2018-07-07">2018-07-07</time>
                        <h2 className="art-vid__big-title">Here goes the video title which is not longer than 70 characters</h2>
                        <p className="art-vid__big-text">Tristique sit pretium, bibendum diam. Ullamcorper tortor integer hac donec euismod est, vivamus nulla bibendum. Et, suscipit in maecenas cras amet, quam pretium donec. Id morbi sed quisque enim. Augue sit euismod neque pulvinar sed aliquet donec. Aliquet tincidunt purus mi sed donec orci. Purus nibh habitant in sem turpis id sit a quis. Auctor pellentesque volutpat hendrerit lobortis. Amet odio tortor.</p>
                    </div>
                </div>

                <div className="art-vid__inner">
                <ul className="art-vid__list">
                    <li className="art-vid__item">
                        <Link className="art-vid__link">
                            <img className="art-vid__img" src={bigImg} alt="" width="408" height="408"/>
                            <span className="art-vid__span" aria-label="play"></span>
                        </Link>
                        <time className="art-vid__big-time" dateTime="2018-07-07">2018-07-07</time>
                        <h2 className="art-vid__big-title">Here goes the video title which is not longer than 70 characters</h2>
                        <p className="art-vid__big-text">Tristique sit pretium, bibendum diam. Ullamcorper tortor integer hac donec euismod est, vivamus nulla bibendum.</p>
                    </li>
                    <li className="art-vid__item">
                        <Link className="art-vid__link">
                            <img className="art-vid__img" src={bigImg} alt="" width="408" height="408"/>
                            <span className="art-vid__span" aria-label="play"></span>
                        </Link>
                        <time className="art-vid__big-time" dateTime="2018-07-07">2018-07-07</time>
                        <h2 className="art-vid__big-title">Here goes the video title which is not longer than 70 characters</h2>
                        <p className="art-vid__big-text">Tristique sit pretium, bibendum diam. Ullamcorper tortor integer hac donec euismod est, vivamus nulla bibendum.</p>
                    </li>
                    <li className="art-vid__item">
                        <Link className="art-vid__link">
                            <img className="art-vid__img" src={bigImg} alt="" width="408" height="408"/>
                            <span className="art-vid__span" aria-label="play"></span>
                        </Link>
                        <time className="art-vid__big-time" dateTime="2018-07-07">2018-07-07</time>
                        <h2 className="art-vid__big-title">Here goes the video title which is not longer than 70 characters</h2>
                        <p className="art-vid__big-text">Tristique sit pretium, bibendum diam. Ullamcorper tortor integer hac donec euismod est, vivamus nulla bibendum.</p>
                    </li>
                </ul>
                <Link className="art-vid__more" aria-label="see more"></Link>
                </div>
            </section>
        </>
    );
}

export default ArticleVideo
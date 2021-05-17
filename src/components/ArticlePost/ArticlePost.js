import "./ArticlePost.scss"
import bigImg from '../../assets/img/stone.jpg'
import { Link } from "react-router-dom";

function ArticlePost () {
    return (
        <>
        <section className="art-post">
            <h3 className="art-post__title">Read about what’s new in the IT world</h3>
            <ul className="art-post__list">
                <li className="art-post__item">
                    <img src={bigImg} alt="a" width="407" height="300"/>
                    <h3 className="art-post__in-title">against ransomware</h3>
                    <p className="art-post__text">Risus Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolor maxime aliquam quod numquam quas assumenda sint dignissimos laboriosam odio repellat maiores pariatur sunt itaque deleniti, odit similique reiciendis iusto. scelerisque tincidunt semper mattis consequat. Scelerisque imperdiet quam risus tincidunt.</p>
                    <div className="art-post__inner">
                        <time className="art-vid__big-time art-post__titme" dateTime="2018-07-07">2018-07-07</time>
                        <Link className="art-post__link"></Link>
                    </div>
                </li>
                <li className="art-post__item">
                    <img src={bigImg} alt="a" width="407" height="300"/>
                    <h3 className="art-post__in-title">5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus totam rem delectus amet provident laborum beatae qui praesentium laudantium aut. Quas earum esse minus beatae rem magnam porro neque inventore. steps to protect yourself against ransomware</h3>
                    <p className="art-post__text">Risus scelet Lorem ipsum dolor Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, fugiat! Doloremque laudantium rem maxime, laboriosam quae, ullam ducimus a tempore expedita consequatur temporibus delectus ab debitis non totam dolores. Iste. sit amet. quam risus tincidunt.</p>
                    <div className="art-post__inner">
                        <time className="art-vid__big-time art-post__titme" dateTime="2018-07-07">2018-07-07</time>
                        <Link className="art-post__link"></Link>
                    </div>
                </li>
                <li className="art-post__item">
                    <img src={bigImg} alt="a" width="407" height="300"/>
                    <h3 className="art-post__in-title">5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam laudantium quaerat odit quam fugiat, quod non dolores. Nesciunt magnam maiores consequatur obcaecati dolor necessitatibus ut, illo eum, eligendi, nemo nisi? steps to protect yourself against ransomware</h3>
                    <p className="art-post__text">Risus Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, asperiores a. Eaque unde quos nulla tempora nostrum aperiam sit recusandae, iusto eius dolorem, deleniti aspernatur earum. Reprehenderit suscipit aliquam alias. scelerisque tincidunt semper mattis consequat. Scelerisque imperdiet quam risus tincidunt.</p>
                    <div className="art-post__inner">
                        <time className="art-vid__big-time art-post__titme" dateTime="2018-07-07">2018-07-07</time>
                        <Link className="art-post__link"></Link>
                    </div>
                </li>
            </ul>
            <Link className="art-vid__more" aria-label="see more"></Link>
        </section>
        </>
    )
}

export default ArticlePost;
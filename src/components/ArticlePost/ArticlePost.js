import "./ArticlePost.scss"
import stone from "../../assets/img/stone.png"

function ArticlePost () {
    return (
        <>
        <section className="art-post">
            <h3 className="art-post__title">Read about what’s new in the IT world</h3>
            <ul className="art-post__list">
                <li className="art-post__item">
                    <img src={stone} alt="a" width="407" height="300"/>
                    <h3 className="art-post__in-title">5 steps to protect yourself against ransomware</h3>
                    <p className="art-post__text">Risus scelerisque tincidunt semper mattis consequat. Scelerisque imperdiet quam risus tincidunt.</p>
                    <div className=""></div>
                </li>
            </ul>
        </section>
        </>
    )
}

export default ArticlePost;
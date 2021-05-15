import './ArticleIntro.scss'
function ArticleIntro () {
    return (
        <>
            <section className="article-intro">
                <h2 className="article-intro__title">
                    <div className="article-intro__inner">
                        <span className="article-intro__inner-span">VIDEOS</span>
                        <span className="article-intro__inner-span-small">Trends and insights from our IT Experts</span>
                    </div>
                    <span className="article-intro__inner-span-mid">ARTICLES</span>
                    <span className="article-intro__inner-span-botm">NEWS</span>
                </h2>
            </section>
        </>
    );
}
export default ArticleIntro
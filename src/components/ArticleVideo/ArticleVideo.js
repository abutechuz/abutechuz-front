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
                    </Link>

                    
                </div>
            </section>
        </>
    );
}

export default ArticleVideo
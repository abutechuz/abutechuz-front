import './Articles'
import Container from "../../components/Container/Container"
import ArticleIntro from "../../components/ArticleIntro/ArticleIntro"
import ArticleVideo from '../../components/ArticleVideo/ArticleVideo'

function Articles () {
    return (
        <>
            <Container>
                <ArticleIntro/>
                <ArticleVideo/>
            </Container>    
        </>
    )
}
export default Articles
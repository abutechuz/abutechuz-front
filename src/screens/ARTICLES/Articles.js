import './Articles'
import Container from "../../components/Container/Container"
import ArticleIntro from "../../components/ArticleIntro/ArticleIntro"
import ArticleVideo from '../../components/ArticleVideo/ArticleVideo'
import ArticlePost from '../../components/ArticlePost/ArticlePost'

function Articles () {
    return (
        <>
            <Container>
                <ArticleIntro/>
                <ArticleVideo/>
                <ArticlePost/>
            </Container>    
        </>
    )
}
export default Articles
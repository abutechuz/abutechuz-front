import './Form.scss'
import Container from '../../components/Container/Container'
import FormInner from '../../components/FormInner/FormInner'
import FormSocial from '../../components/FormSocial/FormSocial';
import FormMain from '../../components/Form/FormMain';

function Form () {
    return (
        <>
        <section className="form">
            <Container className="form-wrapper">
                <div className="form-wrapper__inner">
                    <FormInner />
                    <FormSocial />
                </div>
                <FormMain />
            </Container>
        </section>
        </>
    );
}

export default Form
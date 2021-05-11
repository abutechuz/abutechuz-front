import "./FormSocial.scss"
import YouTube from "../Lib/Svg/YouTube"
import Telegram from "../Lib/Svg/Telegram"
import Insta from "../Lib/Svg/Insta"
import Facebook from "../Lib/Svg/Facebook"


function FormSocial () {
    return (
        <>
            <h3 className="form-social__title">Мы в соцсетях</h3>
            <ul className="form-social__list">
                <li className="form-social__item">
                    <a className="form-social__link" href="google.com" target="_blank">
                        <YouTube />
                    </a>
                </li>
                <li className="form-social__item">
                    <a className="form-social__link" href="google.com" target="_blank">
                        <Telegram />
                    </a>
                </li>
                <li className="form-social__item">
                    <a className="form-social__link" href="google.com" target="_blank">
                        <Insta />
                    </a>
                </li>
                <li className="form-social__item">
                    <a className="form-social__link" href="google.com" target="_blank">
                        <Facebook />
                    </a>
                </li>
            </ul>
        </>
    )
}
export default FormSocial
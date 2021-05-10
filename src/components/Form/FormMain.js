import Clip from "../Lib/Svg/Clip"
import "./FormMain.scss"

function FormMain () {
    return (
        <form className="form-main" action="/" encType="multipart/form-data" autoComplete="off">
            <input className="form-main__input" type="text" name="username" placeholder="Ф.И.О"/>
            <div className="form-main__inner">
                <label className="form-main__label">
                    <input className="form-main__sub-input" type="text" name="usercomp" placeholder="Название компании"/>
                </label>
                <label className="form-main__label">
                    <input className="form-main__sub-input" type="text" name="userphonenumber" placeholder="+998 _ _   _ _ _   _ _   _ _"/>
                    <span>Введите действительный номер</span>
                </label>
            </div>
            <textarea className="form-main__texarea" name="texarea" id="" placeholder="Рассказивайте больше о проекте"></textarea>
            <label className="form-main__file">
                <Clip />
                <span className="form-main__file-span">Приложите файл</span>
                <input className="visually-hidden" type="file" name="file"/>
            </label>
            <button className="form-main__btn" type="submit">отправить</button>
        </form>
    )
}
export default FormMain
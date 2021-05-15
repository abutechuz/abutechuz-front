import Clip from "../Lib/Svg/Clip"
import "./FormMain.scss"

function FormMain () {
    return (
        <form className="form-main" action="/" encType="multipart/form-data" autoComplete="off">
            <input className="form-main__input" type="text" name="username" placeholder="Ф.И.О" required/>
            <div className="form-main__inner">
                <label className="form-main__label">
                    <input className="form-main__sub-input" type="text" name="usercomp" placeholder="Название компании" required/>
                </label>
                <label className="form-main__label">
                    <input className="form-main__sub-input" type="text" name="userphonenumber" placeholder="+998 _ _   _ _ _   _ _   _ _" required
                    pattern="^(?:\d{10,12}|\+\d{10,12}|\w+@\w+\.\w{2,4})$"/>
                    <span className="form-main__sub-input-span">Введите действительный номер</span>
                </label>
            </div>
            <textarea className="form-main__texarea" name="texarea" id="" placeholder="Рассказивайте больше о проекте" required></textarea>
            <label className="form-main__file">
                <Clip />
                <span className="form-main__file-span">Приложите файл</span>
                <input className="visually-hidden" type="file" name="file" required/>
            </label>
            <button className="form-main__btn" type="submit">отправить</button>
        </form>
    )
}
export default FormMain
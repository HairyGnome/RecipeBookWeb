import style from "./RegisterForm.module.css"

function RegisterForm() {
    return (
        <div className={style['register-form']}>
            <div className={style['title-div']}>
                <h1 className={style['title']}>Register</h1>
            </div>
            <div className={style['form-div']}>
                <form className={style['form']}>
                    <input type="text" placeholder="Username" className={style['input']}/>
                    <input type="email" placeholder="Email" className={style['input']}/>
                    <input type="password" placeholder="Password" className={style['input']}/>
                    <input type="password" placeholder="Confirm Password" className={style['input']}/>
                    <div>
                        <button className={style['button']}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm;
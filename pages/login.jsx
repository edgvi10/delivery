import Link from "next/link";
import { useState } from "react"
import Header from "../components/Header";

export default function LoginPage(props) {
    const [loading, toggleLoading] = useState(false);
    const [sending, toggleSending] = useState(false);
    const appname = process.env.NEXT_PUBLIC_APP_NAME;
    const [login_form, setLoginForm] = useState({});

    const loginFormInputChange = (e) => {
        let { id, name, value } = e.target;
        const key = name !== "" ? name : id;

        setLoginForm({ ...login_form, [key]: value });
    }

    const loginFormSubmit = (e) => {
        e.preventDefault();
    };

    return <main className="flex-fill h-100">
        <Header title="Entrar" hideheader />
        <div className="row h-100 m-0 align-items-md-center">
            <div className="col-12 col-md-4 m-0 p-0 h-100 bg-primary d-none d-sm-block"></div>
            <div className="col-12 col-md-6">
                <div className="p-3 py-5">
                    <form onSubmit={loginFormSubmit} className="d-flex flex-column gap-3">
                        <h1 className="text-uppercase display-6">
                            <small className="d-block text-muted small">{appname}</small>
                            <b>Entrar</b>
                        </h1>
                        <fieldset className="row g-2">
                            <div className="col-12 col-md-5">
                                <input type="search" id="username" value={login_form.username ?? ''} onChange={loginFormInputChange} className="form-control" placeholder="Usuário, e-mail ou telefone" />
                            </div>
                            <div className="col-12 col-md-5">
                                <input type="password" id="password" value={login_form.password ?? ''} onChange={loginFormInputChange} className="form-control" placeholder="Senha de acesso" />
                            </div>
                        </fieldset>

                        <footer className="d-flex flex-row align-items-center gap-3 flex-wrap">
                            <button type="submit" className={`btn btn-primary text-uppercase d-flex gap-3 align-items-center ${sending && "disabled"}`}>Entrar {sending ? <i className="fal fa-spinner-third fa-spin" /> : <i className="fal fa-arrow-right" />}</button>
                            <Link href={`/register`}><a className="btn btn-link p-0 text-uppercase">cadastre-se <i className="fal fa-arrow-right ms-3"></i></a></Link>
                        </footer>
                    </form>
                </div>

            </div>
        </div>
    </main>
}
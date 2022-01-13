import Link from "next/link";
import { useState } from "react"
import Header from "../components/Header";

export default function RegisterPage(props) {
    const [loading, toggleLoading] = useState(false);
    const [sending, toggleSending] = useState(false);
    const appname = process.env.NEXT_PUBLIC_APP_NAME;
    const [register_form, setRegisterForm] = useState({});

    const registerFormInputChange = (e) => {
        let { id, name, value } = e.target;
        const key = name !== "" ? name : id;

        setRegisterForm({ ...register_form, [key]: value });
    }

    const registerFormSubmit = (e) => {
        e.preventDefault();
    };

    return <main className="flex-fill h-100">
        <Header title="Cadastre-se" hideheader />
        <div className="row h-100 m-0 align-items-md-center">
            <div className="col-12 col-md-4 m-0 p-0 h-100 bg-primary d-none d-sm-block"></div>
            <div className="col-12 col-md-6">
                <div className="p-3 py-5">
                    <form onSubmit={registerFormSubmit} className="d-flex flex-column">
                        <Link href={"/login"}><a className="btn btn-link me-auto p-0 text-uppercase"><i className="fal fa-arrow-left me-3"></i> Entrar</a></Link>
                        <h1 className="my-3 text-uppercase display-6">
                            <small className="d-block text-muted small">{appname}</small>
                            <b>Cadastro</b>
                        </h1>
                        <fieldset className="row g-2">
                            <div className="col-12 d-flex gap-2">
                                <button type="button" className="btn btn-primary btn-sm" ><i className="fal fa-user me-2" /> Pessoa Física</button>
                                <button type="button" className="btn btn-outline-primary btn-sm"><i className="fal fa-building me-2" /> Pessoa Jurídica</button>
                            </div>
                            <div className="col-12 col-md-5">
                                <input type="tel" id="document" value={register_form.document ?? ''} onChange={registerFormInputChange} className="form-control" placeholder="CPF ou CNPJ" />
                            </div>

                            <div className="col-12">
                                <input type="text" id="name" value={register_form.name ?? ''} onChange={registerFormInputChange} className="form-control" placeholder="Nome Completo" />
                            </div>

                            <div className="col-12">
                                <input type="text" id="name" value={register_form.name ?? ''} onChange={registerFormInputChange} className="form-control" placeholder="Razão social" />
                            </div>

                            <div className="col-12">
                                <input type="text" id="fancyname" value={register_form.fancyname ?? ''} onChange={registerFormInputChange} className="form-control" placeholder="Nome Fantasia" />
                            </div>

                            <div className="col-12 col-md-7">
                                <input type="email" id="email" value={register_form.email ?? ''} onChange={registerFormInputChange} className="form-control" placeholder="E-mail" />
                            </div>
                            <div className="col-12 col-md-5">
                                <input type="tel" id="phone" value={register_form.phone ?? ''} onChange={registerFormInputChange} className="form-control" placeholder="Telefone com DDD" />
                            </div>

                            <div className="col-12 col-md-5">
                                <input type="password" id="password" value={register_form.password ?? ''} onChange={registerFormInputChange} className="form-control" placeholder="Senha de acesso" />
                            </div>
                        </fieldset>

                        <footer className="mt-3">
                            <button type="submit" className={`btn btn-primary text-uppercase d-flex gap-3 align-items-center ${sending && "disabled"}`}>Cadastrar {sending ? <i className="fal fa-spinner-third fa-spin" /> : <i className="fal fa-arrow-right" />}</button>
                        </footer>
                    </form>
                </div>
            </div>
        </div>
    </main>
}
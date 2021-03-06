import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [ user, userSave ] = useState({
        email: '',
        password: ''
    });

    const { email, password } = user;

    const onChange = e => {
        userSave({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
    }

    return (
    <div className="form-usuario">
        <div className="contenedor-form sombra-dark">
            <h1>Iniciar Sesion</h1>
            <form onSubmit={onSubmit}>
                <div className="campo-form">
                    <label htmlFor="email" >Email</label>
                    <input type="email" id="email" name="email" placeholder="Tu email"
                    value={email}
                    onChange={onChange} />   
                </div>
                <div className="campo-form">
                    <label htmlFor="password" >Password</label>
                    <input type="password" id="password" name="password" placeholder="Tu contraseña"
                    value={password}
                    onChange={onChange} />   
                </div>
                <div className="campo-form">
                    <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesión" />   
                </div>
            </form>
            <Link to={'/signup'} className="enlace-cuenta">
                Obtener Cuenta
            </Link>
        </div>
    </div>);
}
 
export default Login;
import React from "react";


    class Login extends React.Component {
        render() {
            return (
                <div>
                    <input placeholder={'Usuário'}></input>
                    <br />
                    <input placeholder={'Senha'}></input>
                    <br />
                    <button onClick={this.props.fazerLogin}>Entrar</button>
                </div>
            )
        }
    }

    export default Login;











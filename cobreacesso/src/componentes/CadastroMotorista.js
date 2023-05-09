import React from "react";

    function CadastroMotorista (props) {
        return <div>
            <h2>Cadastro de Motorista</h2>
            <form>
                <label>NOME:</label>
                <imput type="text" value="nome">.</imput>
                <br/>
                <label>IDADE:{props.texto}</label>
                <imput type="number">.</imput>
            </form>
        </div>
    }


export default CadastroMotorista;
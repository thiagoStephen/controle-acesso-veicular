import React from "react";

    class CadastroMotorista extends React.Component {
        state = {
            valorNome: '',
            valorIdade: ''
        }
        onChangeNome = (event) => {
            this.setState({valorNome: event.target.value})
        }
        onChangeIdade = (event) => {
            this.setState({valorIdade: event.target.value})
        }
        onClickSalvar = () => {
            alert(this.state.valorNome)
            alert(this.state.valorIdade)
            this.setState({valorNome: '', valorIdade: ''})
        }

        render(){
            return (<div>
                <h2>Cadastro de Motorista</h2>
                <form>
                    <label>NOME:</label>
                    <input name={'nome'} onChange={this.onChangeNome} value={this.state.valorNome} placeholder={'Digite o nome'} />
                    <br/>
                    <label>IDADE:</label>
                    <input name={'idade'} onChange={this.onChangeIdade} value={this.state.valorIdade} placeholder={'Digite a idade'}  />
                    <br />
                    <button onClick={this.onClickSalvar}>Salvar</button>
                    <button onClick={this.props.fazerLogof}>Cancelar</button>
                </form>
            </div>
           )
        }
       
    }


export default CadastroMotorista;
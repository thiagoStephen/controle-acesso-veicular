import React from 'react';
import logo from './logo.svg';
import Login from './componentes/Login';
import CadastroMotorista from './componentes/CadastroMotorista';
import './App.css';


    class App extends React.Component {
      state = {
        loginTela : false
      }

      onClickloginOuLogof = () => {
        this.setState({loginTela: ! this.state.loginTela})
      }

      render() {
        if(this.state.loginTela) {
          return (
            <div>
              <Login fazerLogin={this.onClickloginOuLogof}
              /> 
              
            </div>
            
          )
          } else {
            return(
              <div>
                <CadastroMotorista 
                  fazerLogof={this.onClickloginOuLogof}
                 />
                
              </div>
              
            )
          }
        
      }
    
    }
    export default App;

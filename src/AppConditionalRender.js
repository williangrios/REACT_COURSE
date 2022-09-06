import React, {Component} from "react";

class AppConditionalRender extends Component{
    constructor(props){
        super(props);
        this.state = {
            status: 1,
            age: 5
        }

        this.entrar = this.entrar.bind(this);
        this.sair = this.sair.bind(this);
    }

    entrar(){
        this.setState({age: 5});
    }

    sair(){
        this.setState({age: 20});
    }

    render(){
        return (
            <div>
                <h1>Renderização condicional</h1> 
                
                {this.state.status === 1 &&
                    <h3>Usuário logado</h3>
                }
                
                {this.state.age > 18 ?
                <>
                    <h3>Bem vindo</h3>
                    <button onClick={this.entrar}>Entrar</button></>
                :
                    <><h3>Você não possui permissão</h3>
                    <button onClick={this.sair}>Sair</button></>
                }
            </div>
        )
    }

}

export default AppConditionalRender;
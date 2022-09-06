import React, {Component} from "react";

class Membro extends Component{ 
    constructor(props){
         super(props);
         this.state = {
            nome: props.nome
         }

         //bind para encontrar os métodos
         this.entrar = this.entrar.bind(this);
         this.sair = this.sair.bind(this);
    }

    entrar(){
        this.setState({nome: "Will"});
    }

    sair(){
        this.setState({nome: "Visitante"});
    }

    render(){
        return(
            <div>
                <h2>Bem vindo {this.state.nome}</h2><br/>
                <button onClick={this.entrar}>Entrar como Willian</button><br/>
                <button onClick={this.sair}>Sair</button>
            </div>
        )
    }
}

export default Membro;
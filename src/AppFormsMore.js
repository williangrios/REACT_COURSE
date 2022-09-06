import React, {Component} from "react";

class AppFormsMore extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            email: '',
            senha: ''
        }
        this.handleNome = this.handleNome.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNome(e){
        this.setState({nome: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        const {nome, email, password} = this.state;
        if (nome !='' && email != '' && password != ''){
            //todos os campos preenchidos
            this.setState({error: null})
        }
        else{
            this.setState({error: 'Preencha todos os campos'})
        }
    }

    render() {
        return(
            <div>
                Forms More
                <h3>Novo usuario</h3>
                <form onSubmit={this.handleSubmit}>
                    Nome:
                    <input type='text' value={this.state.nome} onChange={this.handleNome}/><br/>
                    Email:
                    <input type='email' value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/><br/>
                    Senha:
                    <input type='password' value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})} /><br/>
                    <button type='submit'>Cadastrar</button>
                    { this.state.error && 
                        <p>Preencha todos os campos</p>
                    }
                </form>
            </div>
        )
    }
}

export default AppFormsMore;
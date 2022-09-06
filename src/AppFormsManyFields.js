import React, {Component} from "react";

class AppFormsManyFields extends Component{
    constructor(props){
        super(props);
        this.state ={
            form:{
                nome: '',
                email: '',
                senha: '',
                sexo: ''
            }
        }
        this.handleData = this.handleData.bind(this);
    }

    handleData(e){
        let form = this.state.form;
        form[e.target.name] = e.target.value;
        this.setState({form: form});
    }

    render(){
        return(
            <div><h1>Forms Many Fields</h1>
                <h3>Login</h3>
                <form>
                    Nome:<input type='text' name='nome' value={this.state.form.nome} onChange={this.handleData}/><br/>
                    Email:<input type='email' name='email' value={this.state.form.email} onChange={this.handleData}/><br/>
                    Senha:<input type='password' name='senha' value={this.state.form.senha} onChange={this.handleData}/><br/>
                    Sexo:<select name='sexo' value={this.state.form.sexo} onChange={this.handleData}>
                            <option value='masculino'>Masculino</option>
                            <option value='feminino'>Feminino</option>
                        </select><br/>
                </form>
                <div>
                    <p>Nome digitado: {this.state.form.nome}</p>
                    <p>Email digitado: {this.state.form.email}</p>
                    <p>Senha digitada: {this.state.form.senha}</p>
                    <p>Sexo escolhido: {this.state.form.sexo}</p>
                </div>
            </div>

        )
    }

}

export default AppFormsManyFields;
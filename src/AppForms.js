import React, {Component} from "react";

class AppForms extends Component {
    constructor(props){
        super(props);
        this.state ={
            email: '',
            password: '',
            sexo: 'masculino'

        }

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSexo = this.handleSexo.bind(this);

    }

    handleEmail(e){
        this.setState({email: e.target.value})
    }

    handlePassword(e){
        this.setState({password: e.target.value})
    }

    handleSexo(e){
        this.setState({sexo: e.target.value})
    }

    render() {
        return(
            <div>
                <div>
                    <h3>Forms</h3>
                    email:
                    <input type="email" name="email" value={this.state.email} onChange={this.handleEmail} /> <br/>
                    senha:
                    <input type="password" name="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/><br/>
                    sexo:
                    <select name='sexo' value={this.state.sexo} onChange={this.handleSexo}>
                        <option value='masculino'>Masculino</option>
                        <option value='feminino'>Feminino</option>
                    </select>
                </div>

                <div>
                    <p>Email digitado: {this.state.email}</p>
                    <p>Senha digitada: {this.state.password}</p>
                    <p>Sexo escolhido: {this.state.sexo}</p>
                </div>
            </div>
        )
    }
}

export default AppForms;
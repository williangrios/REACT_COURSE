import React, {Component} from 'react';

class AppTwo extends Component{
    constructor(props){
        super(props);
        this.state ={
            operacao: "",
            contador: 0
        }
        this.add = this.add.bind(this);
        this.sub = this.sub.bind(this);

    }

    add() {   
        let _state = this.state;
        _state.contador +=1;      
        _state.operacao = "Soma";                                                                  
        this.setState(_state);
    }

    sub() { 
        let _state = this.state;
        _state.contador -=1;     
        _state.operacao = "Subtracao";                                                                   
        this.setState(_state);
    }

    render() {
        return(
            <div>
                App Two (Statefull)<br/>
                Compomentes que, quando tem seu valor alterado, impactarão diretamente na renderização do componente<br/>
                são sempre representados, de fato, por uma classe<br/>
                também tem o método render() pois ele sera responsável por colocar e recolocar as informacoes na tela
                Operacao: {this.state.operacao}<br/>
                <button onClick={this.sub}>-</button>
                {this.state.contador}
                <button onClick={this.add}>+</button>
            </div>
        )
    }
}

export default AppTwo;
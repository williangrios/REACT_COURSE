import React, {Component} from "react";

class AppLifeCycle extends Component{
    constructor(props){
        super(props);
        this.state = {
            hour: '00:00:00'
        };
    }

    

    componentDidMount(){
        //depois que o comonente é montado
        setInterval(() => {
            this.setState({hora: new Date().toLocaleTimeString()});
        }, 1000);
        
    }

    //componentDidUpdate(){
        //roda quando o componente atualizar
        //console.log('atualizou  ')
    //}

    //shouldComponentUpdate(){
        //o componente deve atualizar?
    //}

    //componentWillUnmount(){
        //o componente nao e mais necessario e sera desmontado do DOM
    //}

    render(){
        return (
            <div>Life Cycle
                <br/>
                Hora: {this.state.hora}
            </div>
        );
    }
}

export default AppLifeCycle;
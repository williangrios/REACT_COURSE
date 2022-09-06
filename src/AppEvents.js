import React, {Component} from "react";
import Membro from "./components/Membro/Membro";

class AppEvents extends Component{
    constructor(props){
        super(props);
     }

    render(){
        return(
            <div><h1>Eventos</h1>
                <Membro nome='visitante'/>
            </div>
        )
    }
}

export default AppEvents;
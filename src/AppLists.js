
import React, {Component} from "react";
import Feed from "./components/Feed/Feed";

class AppLists extends Component{
    constructor(props){
        super(props);
        this.state = {
            feed: [
                {id:1 , username:'Willian' , curtidas:1 , comentarios:2 },
                {id:2 , username:'Fernanda' , curtidas:105 , comentarios:24 },
                {id:3 , username:'Romario' , curtidas:104 , comentarios:1 }
            ]
        }
    }

    
    render() {
        return(
            <div id='divAppLists'>
                <h2>Listas</h2>
                {this.state.feed.map((item) => {
                    return(
                        <Feed id={item.id} username={item.username} curtidas={item.curtidas} comentarios={item.comentarios} />
                    );
                })}
            </div>
        )
    }

}

export default AppLists;
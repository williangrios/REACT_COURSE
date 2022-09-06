import React, {Component} from 'react'

class About extends Component{
    render() {
        return(<div>
            <h6>By {this.props.teamName}</h6>
        </div>)
    }
}

class Team extends Component{
    render(){
        return(
            <div>
                <h1>Class Component</h1>
                <h2>Nome da equipe: {this.props.teamName}</h2>
                <h2>Número de membros: {this.props.numMembers}</h2>
                <About teamName={this.props.teamName}/>
            </div>
        )
    }
}

export default Team
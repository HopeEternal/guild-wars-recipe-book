import React from 'react'
import axios from 'axios'

export default class Recipes extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
        const persons = res.data;
        this.setState({ persons });
        })
    }
    render() {
        return (
            <div style={recipeCont} class="container">
                <div class="row">
                    { this.state.persons.map(person => 
                    <div class="col s12 m6 l3">
                        <div class="card-panel hoverable">
                            <div class="card-content">
                                <i class="material-icons palette right">palette</i>
                                <p class="blue-grey-text-darken-3">{person.name}</p>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        )
    }
}

const recipeCont = {
    padding: '20px',
}


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
            <div class="container">
                <h2>Recipes Here</h2>
                <div class="row">
                    { this.state.persons.map(person => 
                    <div class="col s12 m6 l3">
                        <div class="card-panel teal lighten-2">
                            <div class="card-content">
                                <i class="material-icons delete">delete</i>
                                <p class="white-text">{person.name}</p>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        )
    }
}


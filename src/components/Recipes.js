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
            <div>
                <h2>Recipes Here</h2>
                <ul>
                { this.state.persons.map(person => <li>{person.name}</li>)}
                </ul>
            </div>
        )
    }
}


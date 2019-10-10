import React from 'react'
import axios from 'axios'

export default class Recipes extends React.Component {
    state = {
        recipes: [],
        recipeIDs: []
    }

    componentDidMount() {
    axios.get(`https://api.guildwars2.com/v2/recipes`)
        .then(res => { this.setState({ recipeIDs: res.data });
          //  console.log(this.state.recipeIDs);

            this.state.recipeIDs.forEach((element) => {
                    axios.get(`https://api.guildwars2.com/v2/recipes/` + element)
                    .then(res => {
                        res.data.disciplines.includes("Weaponsmith") ? this.state.recipes.push(res.data) : console.log("POOP!");
                    
                 //   this.setState({ recipes });
                    console.log(this.state.recipes);
                    })  
                    .catch(
                        console.log(err);
                    )
                             
            })

        })
    }
    render() {
        return (
            <div style={recipeCont} className="container">
                {
                    /* <div className="row">
                    { this.state.recipes.map(recipe => 
                    <div className="col s12 m6 l3">
                        <div className="card-panel hoverable">
                            <div className="card-content">
                                <i className="material-icons palette right">palette</i>
                                <p className="blue-grey-text-darken-3">{recipe.type}</p>
                            </div>
                        </div>
                    </div>
                    )}
                </div> */}
            </div>
        )
    }
}

const recipeCont = {
    padding: '20px',
}


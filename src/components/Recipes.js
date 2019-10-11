import React from 'react'
import axios from 'axios'

export default class Recipes extends React.Component {
    state = {
        recipes: [],
        recipeIDs: []
    }

    componentDidMount() {
    //Grab and Store Recipe IDs
    axios.get(`https://api.guildwars2.com/v2/recipes`)
        .then(res => { this.setState({ recipeIDs: res.data })
            //Grab Recipes by ID
            this.state.recipeIDs.forEach((element) => {
                if (element > 9200 && element < 9210) {
                    axios.get(`https://api.guildwars2.com/v2/recipes/` + element)
                    .then(res => {
                       if (res.data.disciplines.includes("Chef")) {
                           this.setState({ recipes: [...this.state.recipes, res.data]})
                           // console.log(this.state.recipes);
                       } 
                    })  
                    .catch((error) => console.log(error))
                }             
            })

            setTimeout(() => {
                alert("Hello"); 
               this.state.recipes.forEach((element) => {
                axios.get(`https://api.guildwars2.com/v2/items?ids=` + element.output_item_id)
                .then(res => {
                    console.log(res.data);
                    
                })
            })
                
              }, 2000);

            
            
        })
        .catch((error) => console.log(error))
        //Grab item names
        
    }
    render() {
        return (
            <div style={recipeCont} className="container">
                {/* <i className="material-icons cake right">cake</i>
                <i className="material-icons free_breakfast right">free_breakfast</i>
                <i className="material-icons local_bar right">local_bar</i>
                <i className="material-icons local_dining right">local_dining</i> */}
                <div className="row">
                    { this.state.recipes.map(recipe => 
                        <div className="col s12 m6 l3">
                            <div className="card-panel hoverable">
                                <div className="card-content">
                                    <i className="material-icons local_dining right">local_dining</i>
                                    <p className="blue-grey-text-darken-3"><strong>Type:</strong> {recipe.type}</p>
                                    <p><strong>Time to craft</strong>: {recipe.time_to_craft_ms}ms</p>
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


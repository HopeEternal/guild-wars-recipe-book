import React from 'react'
import axios from 'axios'

export default class Recipes extends React.Component {
    state = {
        recipes: [],
        recipeIDs: [],
        recipeDetails: []
    }

    componentDidMount() {
    //Grab and Store Recipe IDs
    let promise1 = axios.get(`https://api.guildwars2.com/v2/recipes`)
        .then(res => { this.setState({ recipeIDs: res.data })

            //Grab Recipes by ID
            this.state.recipeIDs.forEach((element) => {
                if (element > 9200 && element < 9210) {
                    axios.get(`https://api.guildwars2.com/v2/recipes/` + element)
                    .then(res => {
                    
                       //Filter out everything but Chef Discipline
                       if (res.data.disciplines.includes("Chef")) {
                           this.setState({ recipes: [...this.state.recipes, res.data]})
                           // console.log(this.state.recipes);
                       } 
                    })  
                    .catch((error) => console.log(error))
                }             
            })            
            
        })
        .catch((error) => console.log(error))
        //Grab item names

        promise1.then(() => {
            //Using output_item_id, fetch specific Recipe info for each recipe
            this.state.recipes.forEach((element) => {
                axios.get(`https://api.guildwars2.com/v2/items?ids=` + element.output_item_id)
                .then(res => {
                    this.setState({ recipeDetails: [...this.state.recipeDetails, ...res.data]})
                    console.log(this.state.recipeDetails);
                })
            })
        })
        
        
    }
    render() {
        return (
            <div className="container recipeCont">
                {/* <i className="material-icons cake right">cake</i>
                <i className="material-icons free_breakfast right">free_breakfast</i>
                <i className="material-icons local_bar right">local_bar</i>
                <i className="material-icons local_dining right">local_dining</i> */}
                <div className="row">
                    { this.state.recipeDetails.map((recipe) => 
                        <div className="col s12 m6 l3">
                            <div className="card-panel hoverable">
                                <div className="card-content">
                                    <img className="right circle" src={recipe.icon} alt ={recipe.description} />
                                    {/* <p className="blue-grey-text-darken-3 dataField"><span className="fieldTitle">Type:</span> {recipe.type}</p> */}
                                    <p className="blue-grey-text-darken-3 dataField"><span className="fieldTitle">Name:</span> {recipe.name}</p> 
                                    <p className="blue-grey-text-darken-3 dataField"><span className="fieldTitle">Description:</span> {recipe.description}</p>                                    
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
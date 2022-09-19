import React from "react";
import ReactDOM from "react-dom";

import Navigation from "./Components/Navigation";
import Order from "./Components/Order";

import { pizzaTypes, pizzaIngredients, pizzaToppings } from "./PizzaAPI"

import "./style.css"
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pizzaTypes: [],
            pizzaIngredients: [],
            pizzaToppings: []
        }
    }

    componentDidMount() {
        //getting ingredients and pizzaTypes from api
        //axios(`/pizzaApi/getPizzaInfo`).then(--set to state--) but to keep things simple I'll grab them from a .json file I made.
        //The json is what I would assume I would get from the API, so it might not be 100% accurate to what I could expect in a scenario.
        let sortedTypes = pizzaTypes.PizzaTypes.sort((a, b) => {
            if (a.Name > b.Name) {
                return 1
            } else {
                return -1
            }
        })
        let sortedIngredients = pizzaIngredients.Ingredients.sort((a, b) => {
            if (a.Name > b.Name) {
                return 1
            } else {
                return -1
            }
        })
        let sortedToppings = pizzaToppings.Toppings.sort((a, b) => {
            if (a.Name > b.Name) {
                return 1
            } else {
                return -1
            }
        })
        this.setState({
            pizzaTypes: sortedTypes,
            pizzaIngredients: { Ingredients: sortedIngredients, DoughTypes: pizzaIngredients.DoughTypes },
            pizzaToppings: sortedToppings
        })
    }


    render() {
        return (
            <div>
                <Navigation />
                <Order types={this.state.pizzaTypes} ingredients={this.state.pizzaIngredients} toppings={this.state.pizzaToppings} />
            </div>)
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
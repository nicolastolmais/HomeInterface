import React, { Component } from 'react';
import { object, string } from 'prop-types';
// import '../styles/Recipe.css';
import RecipeThin from './RecipeThin.js';
import RecipeThicc from './RecipeThicc.js';
import { Grid, GridInner, GridCell } from 'rmwc/Grid';
import '../../common/styles/ThinTile.css';

class RecipeComponent extends Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        recipe: object,
        view: string,
    }

    componentWillMount() {
        this.getRecipe()
    }

    getRecipe() {
        fetch('http://localhost:3001/recipe')
            .then(response => response.json())
            .then(json => {
                this.props.setRecipe(json)
            })
    }

    render() {
        switch (this.props.view) {
            case 'thin': {
                return (
                    this.props.recipe ?
                        <GridCell className="tile" span="4">
                            <RecipeThin
                                recipe={this.props.recipe}
                                switchView={this.props.switchView} />
                        </GridCell> : null
                )
            }
            case 'recipe': {
                return (
                    this.props.recipe ?
                        <GridCell className="tile" span="12">
                            <RecipeThicc
                                recipe={this.props.recipe}
                                switchView={this.props.switchView} />
                        </GridCell> : null
                )
            }
            default:
                return (
                    null
                )
        }
    }
}
export default RecipeComponent;
import React, { Component } from 'react';
import { object } from 'prop-types';
import { Grid, GridCell } from 'rmwc/Grid';
import '../styles/Recipe.css';

class RecipeThin extends Component {
    static propTypes = {
        recipe: object
    }

    render() {
        if (!this.props.recipe) {
            return null;
        }
        return (
            <Grid>
            <GridCell span="12" role="button" onClick={() => this.props.switchView('recipe')}>
                <h1>Recipe</h1>
            </GridCell>
            <GridCell className="recipeTile" span="6">
                {this.props.recipe.hits[0].recipe.label}
            </GridCell>
            <GridCell className="recipeTile" span="6">
                <img src={this.props.recipe.hits[0].recipe.image} alt={this.props.recipe.hits[0].recipe.label} />
            </GridCell>
            </Grid>
        );
    }
}

export default RecipeThin;
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
            <div className="recipeTile" role="button" onClick={() => this.props.switchView('recipe')}>
                <img src={this.props.recipe.hits[0].recipe.image} alt={this.props.recipe.hits[0].recipe.label} />
                <div className="top-left"> Recipe</div>
                <div className="bottom-left">{this.props.recipe.hits[0].recipe.label}</div>
            </div>
        );
    }
}

export default RecipeThin;
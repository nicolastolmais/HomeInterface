import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { Grid, GridInner, GridCell } from 'rmwc/Grid';
// import WeatherCard from './WeatherCard.js';
// import '../styles/Weather.css';
// import moment from 'moment';

class WeatherThicc extends Component {
    static propTypes = {
        recipe: object,
        switchView: func.isRequired
    }

    render() {
        return (
            <Grid>
                <GridCell role="button" onClick={() => this.props.switchView('thin')} span="12">
                    <h1>Recipe</h1>
                </GridCell>
                <GridCell span="12">
                    <h2>{this.props.recipe.hits[0].recipe.label}</h2>
                </GridCell>
                <GridCell span="3">
                    <div>
                        <img src={this.props.recipe.hits[0].recipe.image} alt={this.props.recipe.hits[0].recipe.label} />
                    </div>
                </GridCell>
                <GridCell span="5">
                    Ingredients
                    {Array.isArray(this.props.recipe.hits[0].recipe.ingredientLines) && this.props.recipe.hits[0].recipe.ingredientLines
                        .map((ingredient, index) =>
                            <div>
                                {ingredient}
                            </div>
                        )}
                </GridCell>
                <GridCell span="4">
                    Nutrition
                    calories: {this.props.recipe.hits[0].recipe.calories}
                    yield: {this.props.recipe.hits[0].recipe.yield}
                    ADD A SAVE RECIPE BUTTON THAT ADDS URL TO DATABASE AND SHOW ON SCREEN
                </GridCell>
                <GridCell span="12">
                    <div >
                        <iframe src={this.props.recipe.hits[0].recipe.url} height="400px" width="100%" >
                            <p>Your browser does not support iframes.</p>
                        </iframe>
                    </div>
                </GridCell>
            </Grid>
        );
    }
}

export default WeatherThicc;
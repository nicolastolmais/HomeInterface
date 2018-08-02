import React, { Component } from 'react';
import { object } from 'prop-types';
import { Grid, GridCell } from 'rmwc/Grid';
import '../styles/Home.css';
import { Menu, MenuItem, MenuAnchor } from 'rmwc/Menu';
import { Button } from 'rmwc/Button';

class HomeThin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuIsOpen: false
        }
    }
    static propTypes = {
    }

    render() {
        return (
            <Grid>
                <GridCell span="12" role="button" onClick={() => this.props.switchView('home')}>
                    <h1>Home</h1>
                </GridCell>
                <GridCell span="12">
                    Profile
                </GridCell>
            </Grid>
        );
    }
}

export default HomeThin;
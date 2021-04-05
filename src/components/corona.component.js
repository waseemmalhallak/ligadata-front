import React, { Component } from "react";
import CoronaDataService from "../services/corona.service";

import { styles } from "../css-common"
import { TextField, Button, withStyles } from "@material-ui/core";

class Corona extends Component {
    constructor(props) {
        super(props);
        this.getCorona = this.getCorona.bind(this);
        this.state = {
            
            message: ""
        };
    }

    componentDidMount() {
        this.getCorona(this.props.match.params.id);
    }

    getCorona(id) {
        CoronaDataService.getAll()
            .then(response => {
                this.setState({
                    currentCorona: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { currentCorona } = this.state;
        const { classes } = this.props

        return (
            <div>
                {currentCorona ? (
                    <div className={classes.form}>
                        <h2>Corona</h2>
                        <form>
                            <div>
                                <TextField
                                    className={classes.textField}
                                    label="Name"
                                    name="name"
                                    value={currentCorona.name}
                                    required
                                />
                            </div>
                            <div>
                                <TextField
                                    className={classes.textField}
                                    label="Region"
                                    name="region"
                                    value={currentCorona.name}
                                    required
                                />
                            </div>
                            <div>
                                <TextField
                                    className={classes.textField}
                                    label="Country"
                                    name="country"
                                    value={currentCorona.name}
                                    required
                                />
                            </div>
                            <div>
                                <TextField
                                    className={classes.textField}
                                    label="Date"
                                    name="date"
                                    value={currentCorona.name}
                                    required
                                />
                            </div>
                            <div>
                                <TextField
                                    className={classes.textField}
                                    label="Value"
                                    name="value"
                                    value={currentCorona.name}
                                    required
                                />
                            </div>
                        </form>
                    </div>
                ) : (
                        <div>
                            <br />
                            <p>Please click on a Corona...</p>
                        </div>
                    )}
            </div>
        );
    }
}

export default withStyles(styles)(Corona)
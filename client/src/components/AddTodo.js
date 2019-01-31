import React, { Component } from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

class AddTodo extends Component {

    constructor (props){
        super(props);

		this.state = {
			inputValue:''
        };
        this.onInputChange=this.onInputChange.bind(this);
        this.onClickAddButton=this.onClickAddButton.bind(this);
    }
    
    onInputChange (e){
        this.setState({ inputValue: e.target.value });
    }

    onClickAddButton(e){
        e.preventDefault();
        var input=this.state.inputValue;
        if(input=='') return
        this.props.addItem(input);
        this.setState({inputValue:''});
    }

    render () {
        return (
            <Paper style={{ margin: 16, padding: 16 }}>
                <Grid container>
                <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
                    <TextField
                    placeholder="Please, add your feedback here"
                    value={this.state.inputValue}
                    onChange={this.onInputChange}
                    fullWidth
                    />
                </Grid>
                <Grid xs={2} md={1} item>
                    <Button
                    fullWidth
                    color="secondary"
                    variant="outlined"
                    onClick={this.onClickAddButton}
                    >
                    Add
                    </Button>
                </Grid>
                </Grid>
            </Paper>
        );

    }
}

export default AddTodo;
import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import ThemeContext from "../../context/ThemeContext/ThemeContext";
import "./SearchBox.css";

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: "",
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (props.active === null) return { val: "" };
        if (props.active !== null) return { val: props.active };
        return null;
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.isPressed();
    };

    textChangeHandler = (e) => {
        this.setState({ val: e.target.value });
        this.props.search(e.target.value);
    };

    render() {
        const theme = createMuiTheme({
            palette: {
                type: this.context.theme === "light" ? "light" : "dark",
            },
        });

        return (
            <ThemeProvider theme={theme}>
                <form
                    onSubmit={this.handleFormSubmit}
                    className="searchbox-form"
                    autoComplete="off"
                >
                    <TextField
                        label="Search for Food"
                        placeholder="Let's see what you eat!"
                        value={this.state.val}
                        onChange={this.textChangeHandler}
                        helperText="Whatever that makes your jaw drop!"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                        variant="outlined"
                    />
                </form>
            </ThemeProvider>
        );
    }
}

SearchBox.contextType = ThemeContext;

export default SearchBox;

import React, {useState} from "react";
import {useStoreContext} from "../../../utils/GlobalState";
import {ACTIVE_LOGIN_PLATE} from "../../../utils/actions";
import {useMutation} from '@apollo/client';
import {ADD_USER} from "../../../utils/mutations";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import Box from '@mui/material/Box';
import Auth from '../../../utils/auth';


const SignupForm = () => {

    const [state, dispatch] = useStoreContext()

    const handlePlateChange = () => {
        dispatch({
            type:ACTIVE_LOGIN_PLATE,

        })
    }

  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    console.log(event);
    console.log(userFormData);
    try {
      const {data} = await addUser({
        variables: {
            username: userFormData.username,
            email: userFormData.email,
            password: userFormData.password,
        }
      });
      console.log(data);

      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };


    return (
        <div className="login-signup-plate">
            <div className="flex-container-row" id="tabs-wrapper">
                <div className="cursor" id="login-comp-tab" onClick={handlePlateChange}>Login</div>
                <div className="cursor" id="signup-comp-tab">Sign Up</div>
            </div>
            {/* <Box
                component="form"
                noValidate 
                validated={validated}
            > */}
            <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12} md={8} 
                >
                    <TextField
                        id="signup-username"
                        label="Username"
                        name='username'
                        variant="standard"
                        onChange={handleInputChange}
                        value={userFormData.username}
                        sx={{
                            width: "100%",
                        }}
                    />
                    <Collapse in={showAlert}>
                        <Alert severity="error">Username is required!</Alert>
                    </Collapse>
                </Grid>
                <Grid item xs={12} md={8}>
                    <TextField
                        id="signup-email"
                        label="Email"
                        name='email'
                        variant="standard"
                        onChange={handleInputChange}
                        value={userFormData.email}
                        sx={{
                            width: "100%",
                        }}
                    />
                    <Collapse in={showAlert}>
                        <Alert severity="error">Email is required!</Alert>
                    </Collapse>
                </Grid>
                <Grid item xs={12} md={8}>
                    <TextField
                        id="signup-password"
                        label="Password"
                        name='password'
                        variant="standard"
                        onChange={handleInputChange}
                        value={userFormData.password}
                        sx={{
                            width: "100%",
                        }}
                    />
                    <Collapse in={showAlert}>
                        <Alert severity="error">Password is required!</Alert>
                    </Collapse>
                </Grid>
                
                <Grid item xs={12} md={8}>
                    <Button
                        color="success"
                        variant="contained"
                        sx={{
                            width: "100%"
                        }}
                        disabled={!(userFormData.username && userFormData.email && userFormData.password)}
                        type='submit'
                        onClick={handleFormSubmit}
                    >
                        Sign Up
                    </Button>
                </Grid>   
            </Grid>
            {/* </Box>  */}
        </div>
    );
};

export default SignupForm;

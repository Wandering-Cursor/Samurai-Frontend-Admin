"use client";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState, useEffect } from "react";
import { sendLoginRequest } from "@/api/auth/login";
import { AxiosError } from "axios";
import Alert from "@mui/material/Alert";
import { useRouter } from "next/router";

export default function LoginForm() {
    const Router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (email.trim() != "" && password.trim() != "") {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [email, password]);

    function redirectToMain() {
        Router.push("/");
    }

    function setError(error: AxiosError) {
        setErrorMessage(error.toString());
    }

    return (
        <Paper elevation={24} square={false} sx={{ maxWidth: 2 / 3 }}>
            {errorMessage && <Alert color="error">{errorMessage}</Alert>}
            <Grid container spacing={8} padding={4}>
                <Grid item xs={12}>
                    <Typography variant="h2" textAlign="center">
                        Log In
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="email-input"
                        label="Email"
                        variant="filled"
                        fullWidth
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="password-input"
                        label="Password"
                        type="password"
                        variant="filled"
                        fullWidth
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        id="logIn-button"
                        variant="contained"
                        disabled={buttonDisabled}
                        fullWidth
                        onClick={() => {
                            sendLoginRequest(
                                email,
                                password,
                                redirectToMain,
                                setError
                            );
                        }}
                    >
                        Log In
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
}

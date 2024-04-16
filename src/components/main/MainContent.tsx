import { Box, Grid, Paper, Typography } from "@mui/material";

export default function MainContent() {
    return (
        <Paper
            elevation={6}
            sx={{
                padding: 4,
                alignSelf: "stretch",
                flexGrow: 1,
                display: "flex",
            }}
        >
            <Grid container alignItems="center">
                <Grid item xs={12}>
                    <Typography variant="h1" textAlign="center">
                        Select section from the left menu
                    </Typography>
                    <Typography variant="subtitle1" textAlign="center">
                        Maybe will be replaced with something useful
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}

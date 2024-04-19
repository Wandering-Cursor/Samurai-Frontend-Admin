import {
    Typography,
    Card,
    CardActions,
    Button,
    CardContent,
    Divider,
} from "@mui/material";
import { useRouter } from "next/router";

export default function NotFoundPage() {
    let router = useRouter();

    return (
        <Card variant="outlined" sx={{ flexGrow: 1, alignContent: "center" }}>
            <CardContent>
                <Typography variant="h1" textAlign="center">
                    Could not find requested page.
                </Typography>
                <Divider />
                <Typography
                    variant="h4"
                    textAlign="center"
                    color="text.secondary"
                >
                    Error 404
                </Typography>
            </CardContent>

            <CardActions sx={{ justifyContent: "center" }}>
                <Button
                    onClick={() => {
                        router.push("/");
                    }}
                >
                    Go to main page
                </Button>
            </CardActions>
        </Card>
    );
}

import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";
import Link from "@mui/material/Link";

export default function Footer() {
    return (
        <Box>
            <Typography variant="subtitle1" textAlign="center">
                By{" "}
                <Link href="https://github.com/Wandering-Cursor/">
                    Wandering Cursor
                </Link>{" "}
                team
            </Typography>
        </Box>
    );
}

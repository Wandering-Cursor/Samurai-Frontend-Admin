import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { AdminPageName } from "@/components/misc/AdminPageName";

export default function AdminTitle() {
    return (
        <Box alignContent="center" justifyContent="center">
            <Typography variant="h2" textAlign="center">
                {AdminPageName}
            </Typography>
        </Box>
    );
}

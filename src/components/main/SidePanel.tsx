import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { Stack } from "@mui/material";
import AdminTitle from "@/components/main/SidePanelComponents/AdminTitle";
import SectionsList from "@/components/main/SidePanelComponents/SectionsList";
import Footer from "@/components/main/SidePanelComponents/Footer";

export default function SidePanel() {
    return (
        <Paper elevation={4} sx={{ padding: 4 }}>
            <Stack justifyContent="space-between" height={1 / 1}>
                <Stack
                    paddingTop={2}
                    spacing={2}
                    useFlexGap
                    flexWrap="wrap"
                    divider={<Divider flexItem />}
                    alignSelf={"stretch"}
                >
                    <AdminTitle />
                    <SectionsList />
                </Stack>
                <Footer />
            </Stack>
        </Paper>
    );
}

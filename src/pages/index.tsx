import requireAuthorization from "@/components/utils/RequireAuthorization";
import Grid from "@mui/material/Grid";
import SidePanel from "@/components/main/SidePanel";
import MainContent from "@/components/main/MainContent";

function MainPage() {
    return (
        <Grid
            container
            direction="row"
            justifyContent="stretch"
            columnGap={1}
            padding={1}
            alignSelf="stretch"
        >
            <Grid item xs={2} sx={{ display: "flex" }}>
                <SidePanel />
            </Grid>
            <Grid
                item
                alignSelf="stretch"
                flexGrow={1}
                sx={{ display: "flex" }}
            >
                <MainContent />
            </Grid>
        </Grid>
    );
}

export default requireAuthorization(MainPage);

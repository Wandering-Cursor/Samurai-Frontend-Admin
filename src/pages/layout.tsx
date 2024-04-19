import requireAuthorization from "@/components/utils/RequireAuthorization";
import Grid from "@mui/material/Grid";
import SidePanel from "@/components/main/SidePanel";

function MainPage(children: any, props: object) {
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
                alignContent="center"
                justifyContent="center"
                flexGrow={1}
                sx={{ display: "flex" }}
            >
                {children.children}
            </Grid>
        </Grid>
    );
}

export default requireAuthorization(MainPage);

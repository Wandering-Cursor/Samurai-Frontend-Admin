import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import { useRouter, NextRouter } from "next/router";

function getSubLevelPadding(subLevel: number | undefined) {
    if (!subLevel) {
        return 0;
    }

    return subLevel * 4;
}

function redirectTo(router: NextRouter, redirect: string) {
    router.push(redirect);
}

export default function SectionsListButton({
    icon,
    text,
    onClick,
    redirect,
    children,
    subLevel,
}: {
    icon: React.ReactNode;
    text: string;
    onClick?: () => void;
    redirect?: string;
    children?: React.ReactNode;
    subLevel?: number;
}) {
    const router = useRouter();

    return (
        <ListItemButton
            onClick={onClick || (() => redirectTo(router, redirect || ""))}
            sx={{ pl: getSubLevelPadding(subLevel) }}
        >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
            {children}
        </ListItemButton>
    );
}

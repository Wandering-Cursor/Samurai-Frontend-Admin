import List from "@mui/material/List";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SchoolIcon from "@mui/icons-material/School";
import SectionsListButton from "@/components/main/SidePanelComponents/SectionsListButton";
import WorkIcon from "@mui/icons-material/Work";
import ConstructionIcon from "@mui/icons-material/Construction";
import Collapse from "@mui/material/Collapse/Collapse";
import React from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export default function SectionsList() {
    const [accountsOpen, setOpen] = React.useState(false);
    const [organizationOpen, setOrganizationOpen] = React.useState(false);
    const [projectsOpen, setProjectsOpen] = React.useState(false);

    const switchState = (state: any, callback: (variable: any) => void) => {
        callback(!state);
    };

    return (
        <List>
            <SectionsListButton
                icon={<SpaceDashboardIcon />}
                text="Home"
                redirect="/"
            />
            <SectionsListButton
                icon={<AccountCircleIcon />}
                text="Accounts"
                onClick={() => switchState(accountsOpen, setOpen)}
            >
                {accountsOpen ? <ExpandLess /> : <ExpandMore />}
            </SectionsListButton>
            <Collapse in={accountsOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <SectionsListButton
                        icon={<AccountCircleIcon />}
                        text="Accounts list"
                        subLevel={1}
                        redirect="/accounts"
                    />
                    <SectionsListButton
                        icon={<AccountCircleIcon />}
                        text="Connections"
                        subLevel={1}
                        redirect="/accounts/connections"
                    />
                </List>
            </Collapse>
            <SectionsListButton
                icon={<SchoolIcon />}
                text="Organization"
                onClick={() =>
                    switchState(organizationOpen, setOrganizationOpen)
                }
            >
                {organizationOpen ? <ExpandLess /> : <ExpandMore />}
            </SectionsListButton>
            <Collapse in={organizationOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <SectionsListButton
                        icon={<SchoolIcon />}
                        text="Departments"
                        subLevel={1}
                        redirect="/organization/departments"
                    />
                    <SectionsListButton
                        icon={<SchoolIcon />}
                        text="Faculties"
                        subLevel={1}
                        redirect="/organization/faculties"
                    />
                    <SectionsListButton
                        icon={<SchoolIcon />}
                        text="Groups"
                        subLevel={1}
                        redirect="/organization/groups"
                    />
                </List>
            </Collapse>
            <SectionsListButton
                icon={<WorkIcon />}
                text="Projects"
                onClick={() => switchState(projectsOpen, setProjectsOpen)}
            >
                {projectsOpen ? <ExpandLess /> : <ExpandMore />}
            </SectionsListButton>
            <Collapse in={projectsOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <SectionsListButton
                        icon={<WorkIcon />}
                        text="Projects list"
                        subLevel={1}
                        redirect="/projects"
                    />
                    <SectionsListButton
                        icon={<WorkIcon />}
                        text="Tasks"
                        subLevel={1}
                        redirect="/projects/tasks"
                    />
                </List>
            </Collapse>
            <SectionsListButton
                icon={<ConstructionIcon />}
                text="Other settings"
                redirect="/settings"
            />
        </List>
    );
}

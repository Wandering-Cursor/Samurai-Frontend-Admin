export const topics = {
    home: "Home",
    accounts: "Accounts",
    organization: "Organization",
    projects: "Projects",
    miscellaneous: "Miscellaneous",
}

export const homeSubTopics = {
    home: "Home",
}

export const accountsSubTopics = {
    accounts: "Accounts",
}

export const organizationSubTopics = {
    departments: "Departments",
    faculties: "Faculties",
    groups: "Groups",
}

export const projectsSubTopics = {
    projects: "Projects",
}

export const miscellaneousSubTopics = {
    importAccounts: "Import Accounts",
    importProjects: "Import Projects",
}


export const SideMenu = {
    topics: topics,
    homeSubTopics: homeSubTopics,
    accountsSubTopics: accountsSubTopics,
    organizationSubTopics: organizationSubTopics,
    projectsSubTopics: projectsSubTopics,
    miscellaneousSubTopics: miscellaneousSubTopics,
}

export const blankPage = {
    title: "Blank Page",
    content: "Select an option from the side menu on the left to see content here.",
}

export const accountListPage = {
    title: "Accounts control",
}

export const connectionsPage = {
    title: "Connections of:",
    listTitle: "Connections List",
    modal: {
        title: "Create Connection",
        subtitle: "Add new connection for: ",
    }
}

export const permissionsPage = {
    title: "Permissions:",
    listTitle: "Permissions List",
    modal: {
        title: "Create Permission",
        subtitle: "Add new permission for:",
    }
}

export const filters = {
    panelTitle: "Filters",
    accountID: "Account ID",
    email: "Email",
    username: "Username",
    accountType: "Account Type",
    registrationCode: "Registration Code",
    accountSearchName: "Accounts",
    firstName: "First Name",
    lastName: "Last Name",
    fullName: "Legal Name",
    state: "State",
    permissions: "Permissions",
    connections: "Connections",
    emailRegistrationCodes: "Email Registration Codes",
    departments: "Departments",
    genericName: "Name",
    facultiesCount: "Faculties Count",
}

export const buttons = {
    filter: "Filter",
    actions: {
        create: "New",
        save: "Save",
        delete: "Delete",
        edit: "Edit",
        copyID: "Copy ID",
        yes: "Yes",
        no: "No",
    }
}

export const strings = {
    actionsColumn: "Actions",
    copyAccountID: `Copy ${filters.accountID}`,
    editConnections: "Edit Connections",
    editPermissions: "Edit Permissions",
    isAccountActive: "Is account active?",
    isEmailVerified: "Is email verified?",
    noConnections: "No connections",
    noPermissions: "No permissions",
    noEmailConfirmationCodes: "No email confirmation codes",
    departmentSearchPlaceholder: "Search department",
    facultySearchPlaceholder: "Search faculty",
    groupSearchPlaceholder: "Search group",
    permissionSearchPlaceholder: "Search permission",
    select: "Select an option",
}

export const message = {
    hello: "Hello!",
    chooseLanguage: "Choose language",
}

export const commonEntity = {
    id: "ID",
    name: "Name",
    description: "Description",
    createdAt: "Created At",
    updatedAt: "Updated At",
}

export const entities = {
    permissions: {
        title: "Permission",
        name: "Name",
        description: "Description",
    },
    account: {
        title: "Account",
    },
    connection: {
        title: "Connection",
        toGroup: "To Group",
        toFaculty: "To Faculty",
        toDepartment: "To Department",
        createdAt: commonEntity.createdAt,
        updatedAt: commonEntity.updatedAt,
    },
    registrationEmailCode: {
        title: "Registration Email Code",
        value: "Value",
        isUsed: "Is used?",
        createdAt: commonEntity.createdAt,
        updatedAt: commonEntity.updatedAt,
    },
}

export const label = {
    department: "Department",
    faculty: "Faculty",
    group: "Group",
    permission: "Permission",
}

export const departmentsPages = {
    list: {
        title: "List of Departments",
        modal: {
            title: "Delete Department",
            subtitle: "Are you sure you want to delete this department?",
        }
    },
    edit: {
        title: "",
    },
    create: {
        title: "Create new department",
    }
}

export const EnTranslation = {
    sideMenu: SideMenu,
    message: message,
    blankPage: blankPage,
    accountListPage: accountListPage,
    connectionsPage: connectionsPage,
    permissionsPage: permissionsPage,
    departmentsPages: departmentsPages,
    filters: filters,
    buttons: buttons,
    strings: strings,
    entities: entities,
    label: label,
    commonEntity: commonEntity,
}

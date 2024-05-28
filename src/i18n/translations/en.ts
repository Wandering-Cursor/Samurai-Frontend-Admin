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
    groupsCount: "Groups Count",
    departmentID: "Department ID",
    facultyID: "Faculty ID",
    priority: "Priority",
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
        apply: "Apply",
        update: "Update",
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
    userSearchPlaceholder: "Enter email to search for a user",
    select: "Select an option",
    taskReviewer: "Task Reviewer",
    dueDate: "Due Date",
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
    teacher: "Teacher",
    student: "Student",
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
        title: "Editing department",
    },
    create: {
        title: "Create new department",
    }
}

export const facultiesPages = {
    list: {
        title: "List of Faculties",
        modal: {
            title: "Delete Faculty",
            subtitle: "Are you sure you want to delete this faculty?",
        }
    },
    edit: {
        title: "Editing faculty",
    },
    create: {
        title: "Create new faculty",
    }
}

export const groupsPages = {
    list: {
        title: "List of Groups",
        modal: {
            title: "Delete Group",
            subtitle: "Are you sure you want to delete this group?",
        }
    },
    edit: {
        title: "Editing group",
    },
    create: {
        title: "Create new group",
    }
}

export const projectsPages = {
    list: {
        title: SideMenu.projectsSubTopics.projects,
        modal: {
            title: "Assign project",
            subtitle: "Assign project to the following users:",
        },
        buttons: {
            assign: "Призначити",
        }
    },
    edit: {
        title: "Editing project",
        deleteModal: {
            title: "Delete project",
            subtitle: "Are you sure you want to delete this project?",
        }
    },
    create: {
        title: "Create project",
    },
    tasks: {
        list: "List of tasks",
        create: "Create new task",
        edit: "Edit a task",
        deleteModal: {
            title: "Delete task",
            subtitle: "Are you sure you want to delete this task?",
        }
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
    facultiesPages: facultiesPages,
    groupsPages: groupsPages,
    projectsPages: projectsPages,
}

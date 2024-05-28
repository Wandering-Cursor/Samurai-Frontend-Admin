export const topics = {
    home: "",
    accounts: "",
    organization: "",
    projects: "",
    miscellaneous: "",
}

export const homeSubTopics = {
    home: "",
}

export const accountsSubTopics = {
    accounts: "",
}

export const organizationSubTopics = {
    departments: "",
    faculties: "",
    groups: "",
}

export const projectsSubTopics = {
    projects: "",
}

export const miscellaneousSubTopics = {
    importAccounts: "",
    importProjects: "",
}

export const message = {
    hello: "",
    chooseLanguage: "",
}

export const blankPage = {
    title: "",
    content: "",
}

export const accountListPage = {
    title: "",
}

export const filters = {
    panelTitle: "",
    accountID: "",
    email: "",
    username: "",
    accountType: "",
    registrationCode: "",
    accountSearchName: "",
    firstName: "",
    lastName: "",
    fullName: "",
    state: "",
    permissions: "",
    connections: "",
    emailRegistrationCodes: "",
    departments: "",
    genericName: "",
    facultiesCount: "",
    groupsCount: "",
    departmentID: "",
    facultyID: "",
}

export const strings = {
    actionsColumn: "",
    copyAccountID: "",
    editConnections: "",
    editPermissions: "",
    isAccountActive: "",
    isEmailVerified: "",
    noConnections: "",
    noPermissions: "",
    noEmailConfirmationCodes: "",
    departmentSearchPlaceholder: "",
    facultySearchPlaceholder: "",
    groupSearchPlaceholder: "",
    permissionSearchPlaceholder: "",
    userSearchPlaceholder: "",
    select: "",
}

export const buttons = {
    filter: "",
    actions: {
        create: "",
        save: "",
        delete: "",
        edit: "",
        copyID: "",
        yes: "",
        no: "",
        apply: "",
    },
}

export const commonEntity = {
    id: "",
    name: "",
    description: "",
    createdAt: "",
    updatedAt: "",
}

export const connectionsPage = {
    title: "",
    listTitle: "",
    modal: {
        title: "",
        subtitle: "",
    }
}

export const permissionsPage = {
    title: "",
    listTitle: "",
    modal: {
        title: "",
        subtitle: "",
    }
}

export const entities = {
    permissions: {
        title: "",
        name: "",
        description: "",
    },
    account: {
        title: ""
    },
    connection: {
        title: "",
        toGroup: "",
        toFaculty: "",
        toDepartment: "",
        createdAt: commonEntity.createdAt,
        updatedAt: commonEntity.updatedAt,
    },
    registrationEmailCode: {
        title: "",
        value: "",
        isUsed: "",
        createdAt: commonEntity.createdAt,
        updatedAt: commonEntity.updatedAt,
    },
}

export const SideMenu = {
    topics: topics,
    homeSubTopics: homeSubTopics,
    accountsSubTopics: accountsSubTopics,
    organizationSubTopics: organizationSubTopics,
    projectsSubTopics: projectsSubTopics,
    miscellaneousSubTopics: miscellaneousSubTopics,
}

export const label = {
    department: "",
    faculty: "",
    group: "",
    permission: "",
    teacher: "",
    student: "",
}

export const departmentsPages = {
    list: {
        title: "",
        modal: {
            title: "",
            subtitle: "",
        }
    },
    edit: {
        title: "",
    },
    create: {
        title: "",
    }
}

export const facultiesPages = {
    list: {
        title: "",
        modal: {
            title: "",
            subtitle: "",
        }
    },
    edit: {
        title: "",
    },
    create: {
        title: "",
    }
}

export const groupsPages = {
    list: {
        title: "",
        modal: {
            title: "",
            subtitle: "",
        }
    },
    edit: {
        title: "",
    },
    create: {
        title: "",
    }
}

export const projectsPages = {
    list: {
        title: SideMenu.projectsSubTopics.projects,
        modal: {
            title: "",
            subtitle: "",
        },
        buttons: {
            assign: "",
        }
    },
    edit: {
        title: "",
    },
    create: {
        title: "",
    }

}

export const BlankTranslation = {
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

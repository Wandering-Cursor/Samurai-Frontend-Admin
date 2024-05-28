export const topics = {
    home: "Головна",
    accounts: "Акаунти",
    organization: "Організаційний розділ",
    projects: "Проєкти",
    miscellaneous: "Інше",
}

export const homeSubTopics = {
    home: "Головна",
}

export const accountsSubTopics = {
    accounts: "Акаунти",
}

export const organizationSubTopics = {
    departments: "Підрозділи",
    faculties: "Факультети",
    groups: "Групи",
}

export const projectsSubTopics = {
    projects: "Проєкти",
}

export const miscellaneousSubTopics = {
    importAccounts: "Імпортувати акаунти",
    importProjects: "Імпортувати проєкти",
}

export const message = {
    hello: "Привіт!",
    chooseLanguage: "Виберіть мову",
}

export const blankPage = {
    title: "Вітання!",
    content: "Це місце наразі порожнє. Оберіть один з пунктів меню зліва щоб побачити вміст.",
}

export const accountListPage = {
    title: "Керування акаунтами",
}

export const connectionsPage = {
    title: "Зв'язки:",
    listTitle: "Список зв'язків",
    modal: {
        title: "Створити Зв'язок",
        subtitle: "Додати новий зв'язок для: ",
    }
}

export const permissionsPage = {
    title: "Дозволи:",
    listTitle: "Список Дозволів",
    modal: {
        title: "Створити новий дозвіл",
        subtitle: "Додати новий дозвіл для:",
    }
}

export const filters = {
    panelTitle: "Фільтрація",
    accountID: "ID акаунту",
    email: "Електрона пошта",
    username: "Ім'я користувача",
    accountType: "Тип акаунту",
    registrationCode: "Код реєстрації",
    accountSearchName: "Акаунти",
    firstName: "Ім'я",
    lastName: "Прізвище",
    fullName: "Повне ім'я",
    state: "Стан",
    permissions: "Дозволи",
    connections: "Зв'язки",
    emailRegistrationCodes: "Коди підтвердження електронної пошти",
    departments: "Підрозділи",
    genericName: "Назва",
    facultiesCount: "К-ть факультетів",
    groupsCount: "К-ть груп",
    departmentID: "ID підрозділу",
}

export const buttons = {
    filter: "Фільтрувати",
    actions: {
        create: "Створити",
        save: "Зберегти",
        delete: "Видалити",
        edit: "Редагувати",
        copyID: "Скопіювати ID",
        yes: "Так",
        no: "Ні",
    }
}

export const SideMenu = {
    topics: topics,
    homeSubTopics: homeSubTopics,
    accountsSubTopics: accountsSubTopics,
    organizationSubTopics: organizationSubTopics,
    projectsSubTopics: projectsSubTopics,
    miscellaneousSubTopics: miscellaneousSubTopics,
}

export const strings = {
    actionsColumn: "Додаткові дії",
    copyAccountID: `Скопіювати ${filters.accountID}`,
    editConnections: "Редагувати Зв'язки",
    editPermissions: "Редагувати Дозволи",
    isAccountActive: "Чи активний акаунт?",
    isEmailVerified: "Чи підтверджена електронна пошта?",
    noConnections: "Зв'язки відсутні",
    noPermissions: "Дозволи відсутні",
    noEmailConfirmationCodes: "Коди підтвердження електронної пошти відсутні",
    departmentSearchPlaceholder: "Пошук підрозділу",
    facultySearchPlaceholder: "Пошук факультету",
    groupSearchPlaceholder: "Пошук групи",
    permissionSearchPlaceholder: "Пошук дозволу",
    select: "Оберіть варіант",
}

export const commonEntity = {
    id: "Унікальний ідентифікатор",
    name: "Назва",
    description: "Опис",
    createdAt: "Створено Об",
    updatedAt: "Оновлено Об",
}

export const entities = {
    permissions: {
        "title": "Дозвіл",
        "name": "Назва",
        "description": "Опис",
    },
    account: {
        title: "Акаунт",
    },
    connection: {
        title: "Зв'язок",
        toGroup: "До групи",
        toFaculty: "До факультету",
        toDepartment: "До підрозділу",
        createdAt: commonEntity.createdAt,
        updatedAt: commonEntity.updatedAt,
    },
    registrationEmailCode: {
        title: "Код підтвердження електронної пошти",
        value: "Значення",
        isUsed: "Використано?",
        createdAt: commonEntity.createdAt,
        updatedAt: commonEntity.updatedAt,
    },
}

export const label = {
    department: "Підрозділ",
    faculty: "Факультет",
    group: "Група",
    permission: "Дозвіл",
}

export const departmentsPages = {
    list: {
        title: "Список підрозділів",
        modal: {
            title: "Видалити підрозділ",
            subtitle: "Ви впевнені, що хочете видалити цей підрозділ?",
        }
    },
    edit: {
        title: "Редагування підрозділу",
    },
    create: {
        title: "Створити новий підрозділ",
    }
}

export const facultiesPages = {
    list: {
        title: "Список факультетів",
        modal: {
            title: "Видалити факультет",
            subtitle: "Ви впевнені, що хочете видалити цей факультет?",
        }
    },
    edit: {
        title: "Редагування факультету",
    },
    create: {
        title: "Створити новий факультет",
    }
}

export const UaTranslation = {
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
}

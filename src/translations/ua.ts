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
}

export const buttons = {
    filter: "Фільтрувати",
    actions: {
        create: "Створити",
        save: "Зберегти",
        delete: "Видалити",
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
    departmentSearchPlaceholder: "Пошук відділення",
    facultySearchPlaceholder: "Пошук факультету",
    groupSearchPlaceholder: "Пошук групи",
    permissionSearchPlaceholder: "Пошук дозволу",
    select: "Оберіть варіант",
}

export const commonEntity = {
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
        toDepartment: "До відділу",
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
    department: "Відділення",
    faculty: "Факультет",
    group: "Група",
    permission: "Дозвіл",
}

export const UaTranslation = {
    sideMenu: SideMenu,
    message: message,
    blankPage: blankPage,
    accountListPage: accountListPage,
    connectionsPage: connectionsPage,
    permissionsPage: permissionsPage,
    filters: filters,
    buttons: buttons,
    strings: strings,
    entities: entities,
    label: label,
}

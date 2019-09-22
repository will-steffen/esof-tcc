export interface LocaleType {
    code: string,
    dateFormat: string,
    label: {
        cleanFilter: string,
        searchFilter: string,
        actions: string,
        noResults: string,
        filterResult: string,
        saveSuccess: string,
        saveError: string,
        yes: string,
        no: string,
        select: string,
        show: string,
        perPage: string,
        requiredField: string,
        cancel: string,
        save: string,
        delete: string,
        logout: string,
        add: string,
        showFilter: string,
        hideFilter: string,
    },

    customer: {
        title: string,
        titleDetail: string,
        address: string,
        birthDate: string,
        annualPlan: string,
        registration: string,
    },

    groupClass: {
        title: string,
        titleDetail: string,
        initHour: string,
        endHour: string,
        room: string,
        name: string,
        instructor: string,
    },

    home: {
        title: string,
    },

    instructor: {
        title: string,
        titleDetail: string,
        authorizedMuscle: string,
        authorizedGroupClass: string,
    },

    login: {
        username: string,
        password: string,
        signin: string,
        error: string,
    },

    user: {
        title: string,
        titleDetail: string,
        type: string,
        username: string,
        password: string,
        message: {
            usernameNotUnique: string,
            notFound: string
        },
    },

    personData: {
        name: string,
        rg: string,
        cpf: string
    },

    enum: {
        UserType: any
    }
}
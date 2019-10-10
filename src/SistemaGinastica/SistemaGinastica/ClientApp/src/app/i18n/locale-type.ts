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
        deleteSuccess: string,
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
        confirmDelete: string,
        confirmLogout: string,
        close: string,
    },

    customer: {
        title: string,
        titleDetail: string,
        address: string,
        birthDate: string,
        planType: string,
        registration: string,
        nextPayment: string,
        planValue: string,
    },

    groupClass: {
        title: string,
        titleDetail: string,
        initHour: string,
        endHour: string,
        room: string,
        name: string,
        instructor: string,
        weekDay: string
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

    payment: {
        value: string,
        date: string,
        registerPayment: string,
        expectedDate: string,
        message: {
            generalError: string,
        },
    },

    enum: {
        UserType: any,
        PlanType: any,
        WeekDay: any
    }
}
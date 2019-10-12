export type CalendarLocaleType = {
    firstDayOfWeek: number,
    dayNames: string[],
    dayNamesShort: string[],
    dayNamesMin: string[],
    monthNames: string[],
    monthNamesShort: string[],
    today: string,
    clear: string,
    dateFormat: string,
    dateMonthFormat: string
}

export interface LocaleType {
    code: string,
    calendar: CalendarLocaleType,
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
        edit: string,
        back: string,
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
        payment: string,
        vacation: string,
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

    vacation: {
        initDate: string,
        endDate: string,
        daysLeft: string,
        periodsLeft: string,
        registerVacation: string,
    },

    enum: {
        UserType: any,
        PlanType: any,
        WeekDay: any
    }
}
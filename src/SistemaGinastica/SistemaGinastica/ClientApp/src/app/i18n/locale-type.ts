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
    },

    customer: {
        title: string,
    },

    groupClass: {
        title: string,
    },

    home: {
        title: string,
    },

    instructor: {
        title: string,
    },

    login: {
        username: string,
        password: string,
        signin: string,
        error: string,
    },

    user: {
        title: string,
        type: string,
        username: string, 
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
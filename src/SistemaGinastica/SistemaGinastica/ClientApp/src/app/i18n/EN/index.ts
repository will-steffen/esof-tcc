import { I18nTags } from "src/app/enums/i18n-tags";
import { Language } from "src/app/enums/language";
import { LocaleType } from "../locale-type";
import { EnumLocale } from "./enum";
import { CalendarLocale } from "./calendar";

export let Locale: LocaleType = {
    code: Language.EN,
    calendar: CalendarLocale,
    label: {
        cleanFilter: 'Clean',
        searchFilter: 'Seach',
        actions: 'Actions',
        noResults: 'No Results',
        filterResult: `${I18nTags.Total} items found, showing ${I18nTags.StarCount} to ${I18nTags.EndCount}`,
        saveSuccess: 'Register sucessful saved',
        deleteSuccess: 'Register sucessful delete',
        saveError: 'Error on saving register',
        yes: 'Yes',
        no: 'No',
        select: 'Select',
        show: 'Show',
        perPage: 'per Page',
        requiredField: 'Required field not filled',
        cancel: 'Cancel',
        save: 'Save',
        delete: 'Delete', 
        logout: 'Logout',
        add: 'Add',
        showFilter: 'Expand Filter',
        hideFilter: 'Hide Filter',
        confirmDelete: 'Are you sure you want to delete this register?',
        confirmLogout: 'Are you sure you want to leave the system?',
        close: 'Close',
        edit: 'Edit',
        back: 'Back',
        language: 'Idiom',
        selectLanguage: 'Select Idiom',
        active: 'Active',
    },

    customer: {
        title: 'Customers',
        titleDetail: 'Customer',
        address: 'Address',
        birthDate: 'Birth Date',
        planType: 'Plan Type',
        registration: 'Registration',
        nextPayment: 'Next Payment',
        planValue: 'Plan Valueo',
        payment: 'Payments',
        vacation: 'Vacation',
        registerPayment: 'Register Payment',
        registerVacation: 'Register Vacation',
    },

    groupClass: {
        title: 'Group Classes',
        titleDetail: 'Group Class',
        initHour: 'Start Hour',
        endHour: 'End Hour',
        room: 'Room',
        name: 'Name',
        instructor: 'Instructor',
        weekDay: 'Week Day'
    },

    home: {
        title: 'Home',
        customers: {
            title: 'Customers',
            tooltip: 'Registered customers'
        },
        exams: {
            title: 'Pending Exams',
            tooltip: 'Clients who have been without exams for more than 6 months'
        },
        payments: {
            title: 'Delayed payments',
            tooltip: 'Customers with pending payments'
        },
    },

    instructor: {
        title: 'Instructors',
        titleDetail: 'Instructor',
        authorizedMuscle: 'Bodybuilding Instructor',
        authorizedGroupClass: 'Group Class Instructor',
    },

    login: {
        username: 'Username',
        password: 'Password',
        signin: 'Sign In',
        error: 'Incorrect username or password',
    },

    user: {
        title: 'Users',
        titleDetail: 'User',
        type: 'Type',
        username: 'Username',
        password: 'Password',
        message: {
            usernameNotUnique: 'Username informed already in use.',
            notFound: 'User not found.',
        },
    },

    personData: {
        name: 'Name',
        rg: 'RG',
        cpf: 'CPF'
    },

    payment: {
        value: 'Value',
        date: 'Payday',
        registerPayment: 'Register New Payment',
        expectedDate: 'Estimated date',
        usePeriod: 'Period of Use',
        vacationDays: 'Vacation Days',
        message: {
            generalError: 'Failed to register Payment',
            noVacationRegistered: 'No vacation periods registered yet',
        },
    },

    vacation: {
        initDate: 'Start Date',
        endDate: 'Return Date',
        daysLeft: 'Remaining Days',
        periodsLeft: 'Remaining Periods',
        registerVacation: 'Schedule Vacation Period',
        daysQuantity: 'Number of days'
    },

    system: {
        modalTitle: 'Simulate Date',
        systemDate: 'System Date',       
    },

    enum: EnumLocale
}
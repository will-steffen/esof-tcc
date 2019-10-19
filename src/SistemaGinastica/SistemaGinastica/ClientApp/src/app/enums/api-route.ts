export const ApiRoute = {
    auth: '/api/auth',
    user: {
        default: '/api/user',
        filter: '/api/user/filter',
    },
    customer: {
        default: '/api/customer',
        filter: '/api/customer/filter',
        payment: '/api/customer/payment',
        vacation: '/api/customer/vacation',
        homeData: '/api/customer/home-data',
    },
    instructor: {
        default: '/api/instructor',
        filter: '/api/instructor/filter',
        groupClass: '/api/instructor/groupclass',
    },
    groupClass: {
        default: '/api/groupclass',
        filter: '/api/groupclass/filter',
    },
    system: {
        default: '/api/system',
        mock: '/api/system/mock'
    }
}

import { Route } from "@angular/router";
import { HomePage } from "./pages/home/home.page";
import { RouteConfig } from "./enums/route-config";
import { LoginPage } from "./pages/login/login.page";
import { LayoutPage } from "./pages/layout/layout.page";
import { AuthService } from "./services/auth.service";
import { UserPage } from "./pages/user/user.page";
import { CustomerPage } from "./pages/customer/customer.page";
import { GroupClassPage } from "./pages/group-class/group-class.page";
import { InstructorPage } from "./pages/instructor/instructor.page";
import { CustomerDetailPage } from "./pages/customer-detail/customer-detail.page";



export const AppRouting: Route[] = [
    { path: RouteConfig.login, component: LoginPage, canActivate: [AuthService] },
    {
        path: '', component: LayoutPage, canActivate: [AuthService], children: [
            { path: RouteConfig.app, component: HomePage },
            { path: RouteConfig.user, component: UserPage },
            { path: RouteConfig.customer, component: CustomerPage },
            { path: RouteConfig.customer + '/:id', component: CustomerDetailPage },
            { path: RouteConfig.groupClass, component: GroupClassPage },
            { path: RouteConfig.instructor, component: InstructorPage },
        ]
    },
    { path: '**', redirectTo: '' }
]
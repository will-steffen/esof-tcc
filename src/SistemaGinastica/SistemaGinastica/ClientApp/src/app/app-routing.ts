import { Route } from "@angular/router";
import { HomePage } from "./pages/home/home.page";
import { RouteConfig } from "./enums/route-config";
import { LoginPage } from "./pages/login/login.page";
import { LayoutPage } from "./pages/layout/layout.page";
import { AuthService } from "./services/auth.service";
import { UserPage } from "./pages/user/user.page";



export const AppRouting: Route[] = [
    { path: RouteConfig.login, component: LoginPage, canActivate: [AuthService] },
    {
        path: '', component: LayoutPage, canActivate: [AuthService], children: [
            { path: RouteConfig.app, component: HomePage },
            { path: RouteConfig.user, component: UserPage },
        ]
    },
    { path: '**', redirectTo: '' }
]
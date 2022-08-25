import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";

const routes: Routes = [{
    path: "login",
    title: "login",
    component: LoginComponent
}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true, anchorScrolling: 'enabled'})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}

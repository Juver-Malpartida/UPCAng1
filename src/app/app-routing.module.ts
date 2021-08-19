import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { ContactusComponent } from "./pages/contactus/contactus.component";
import { AboutusComponent } from "./pages/aboutus/aboutus.component";
import { TeamComponent } from "./pages/team/team.component";
import { ProjectComponent } from "./pages/project/project.component";
import { ApartmentComponent } from "./pages/apartment/apartment.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'contactus', component: ContactusComponent},
    { path: 'aboutus', component: AboutusComponent},
    { path: 'project', component: ProjectComponent},
    { path: 'project/:id', component: ProjectComponent},
    { path: 'apartment', component: ApartmentComponent},
    { path: 'apartment/:id', component: ApartmentComponent},
    { path: 'team', component: TeamComponent}
];

@NgModule(
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    }
)
export class AppRoutingModule {

}
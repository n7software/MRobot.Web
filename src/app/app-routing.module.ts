import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AdminComponent } from "./admin/admin.component"
import { BoostComponent } from "./boost/boost.component"
import { CommunityComponent } from "./community/community.component"
import { DashboardComponent } from "./dashboard/dashboard.component"
import { DesktopAppComponent } from "./desktop-app/desktop-app.component"
import { GamesComponent } from "./games/games.component"
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component"

const routes: Routes = [
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full",
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    data: { title: "dashboard" },
  },
  {
    path: "games",
    component: GamesComponent,
    data: { title: "games" },
  },
  {
    path: "community",
    component: CommunityComponent,
    data: { title: "community" },
  },
  {
    path: "desktop-app",
    component: DesktopAppComponent,
    data: { title: "desktopApp" },
  },
  {
    path: "boost",
    component: BoostComponent,
    data: { title: "boost" },
  },
  {
    path: "admin",
    component: AdminComponent,
    data: { title: "Admin" },
  },
  {
    path: "**",
    component: PageNotFoundComponent,
    data: { title: "pageNotFound" },
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

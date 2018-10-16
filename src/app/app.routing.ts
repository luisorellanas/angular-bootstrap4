import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArchivosComponent } from "./components/archivos/archivos.component";
import { DigitadoresComponent } from "./components/digitadores/digitadores.component";
import { PathNotFoundComponent } from "./components/path-not-found/path-not-found.component";
import { CreateComponent } from "./components/create/create.component";
const appRoutes: Routes = [
  { path: "", component: ArchivosComponent },
  { path: "digitadores", component: DigitadoresComponent },
  { path: "create", component: CreateComponent },
  { path: "**", component: PathNotFoundComponent }
];
DigitadoresComponent;
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

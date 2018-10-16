import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ArchivosComponent } from "./components/archivos/archivos.component";
import { appRoutingProviders, routing } from "./app.routing";
import { DigitadoresComponent } from "./components/digitadores/digitadores.component";
import { PathNotFoundComponent } from "./components/path-not-found/path-not-found.component";
import { ProjectService } from "./services/project/project.service";
import { CreateComponent } from './components/create/create.component';
@NgModule({
  declarations: [
    AppComponent,
    ArchivosComponent,
    DigitadoresComponent,
    PathNotFoundComponent,
    CreateComponent
  ],
  imports: [BrowserModule, routing, FormsModule, HttpClientModule],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}

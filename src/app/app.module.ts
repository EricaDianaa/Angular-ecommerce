import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainComponent } from "./components/main/main.component";
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './page/home/home.component';
import { PreferitiComponent } from './page/preferiti/preferiti.component';
import { PipesPipe } from './pipe/pipes.pipe';

@NgModule({
  declarations: [AppComponent, MainComponent, NavComponent, HomeComponent, PreferitiComponent, PipesPipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListLivresComponent } from './list-livres/list-livres.component';
import { FormsModule } from '@angular/forms';
import { DeleteSpacePipe } from './pipes/delete-space.pipe';
import { EtoileComponent } from './etoile/etoile.component';

@NgModule({
  declarations: [
    AppComponent,
    ListLivresComponent,
    DeleteSpacePipe,
    EtoileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

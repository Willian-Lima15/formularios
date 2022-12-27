import { MaiorIdadeDirective } from './shared/directive/maior-idade.directive';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MensagemComponent } from './components/mensagem/mensagem.component';

@NgModule({
  declarations: [
    AppComponent,
      FormularioComponent,
      MensagemComponent,
      MaiorIdadeDirective
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

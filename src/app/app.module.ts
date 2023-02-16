import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicamentosComponent } from './componentes/medicamentos/medicamentos.component';
import { VentasComponent } from './componentes/ventas/ventas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { AddDialogComponent } from './componentes/medicamentos/dialogs/add/add.dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditDialogComponent } from './componentes/medicamentos/dialogs/edit/edit.dialog.component';
import { VenderDialogComponent } from './componentes/medicamentos/dialogs/vender/vender.dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    MedicamentosComponent,
    VentasComponent,
    AddDialogComponent,
    EditDialogComponent,
    VenderDialogComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

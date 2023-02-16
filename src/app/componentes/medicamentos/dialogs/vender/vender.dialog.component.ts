import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {MedicamentosService} from '../../../../servicios/medicamentos.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-vender.dialog',
  templateUrl: '../../dialogs/vender/vender.dialog.html',
  styleUrls: ['../../dialogs/vender/vender.dialog.css']
})

export class VenderDialogComponent {
  constructor(public dialogRef: MatDialogRef<VenderDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public medicamentosService: MedicamentosService) { }

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
  // empty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    console.log("entrooooo")
    this.data.fechaHora='2023-02-16T02:41:42.426+00:00';
    this.data.precioTotal= parseInt(this.data.precioUni)*parseInt(this.data.cantidad)
    console.log(this.data)
      this.medicamentosService.addVenta(this.data).subscribe(res=>{
      console.log(res)
    });  
  }
}

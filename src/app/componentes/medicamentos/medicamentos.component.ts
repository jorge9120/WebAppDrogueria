import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {MedicamentosService} from '../../servicios/medicamentos.service';
import {AddDialogComponent} from './dialogs/add/add.dialog.component'
import { EditDialogComponent } from './dialogs/edit/edit.dialog.component';
import { VenderDialogComponent } from './dialogs/vender/vender.dialog.component';
@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.css']
})

export class MedicamentosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'fabricacion', 'vencimiento','laboratorio',"cantidad",'precio','actions'];
  dataSource:any=[];
  arrayMedicamentos=[];
  exampleDatabase: any | null;

 nombre: any;
 cantidad: any;
 fechaFabricacion: any;
 fechaVencimiento: any;
 laboratorio:any;
 precio:any;
  constructor(private medicamentosService:MedicamentosService,public dialog: MatDialog,){
  }
  ngOnInit() {
    this.listadoMedicamentos()
  }

  listadoMedicamentos(){
    this.medicamentosService.getMedicamentos().subscribe(
      data=>{
        console.log(data)
        this.arrayMedicamentos = data
        this.dataSource = new MatTableDataSource(data);
      }
    );
  }
  addNew(){
    const dialogRef = this.dialog.open(AddDialogComponent, {
      data: {  nombre: this.nombre,
        cantidad: this.cantidad,
        fechaFabricacion: this.fechaFabricacion,
        fechaVencimiento: this.fechaVencimiento,
        laboratorio:this.laboratorio,
        precio:this.precio}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
       // this.exampleDatabase.dataChange.value.push(this.dataService.getDialogData());
       // this.refreshTable();
      }
    });
  }
  startEdit(i: number, row:any){

    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: {
        id:row.id,
        nombre: row.nombre,
        cantidad: row.cantidad,
        fechaFabricacion: row.fechaFabricacion,
        fechaVencimiento: row.fechaVencimiento,
        laboratorio: row.laboratorio,
        precio:row.precio
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        
      }
    });
  }
  deleteItem(i: number, id: number, title: string, state: string, url: string){
    //this.medicamentosService
    console.log("eliminando"+id)
    this.medicamentosService.deleteItem(id).subscribe(data=>{
      this.listadoMedicamentos()
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addventa(row:any){
    const dialogRef = this.dialog.open(VenderDialogComponent, {
      data: {
         
        medicamentos:{
          id:row.id,
          nombre: row.nombre,
          cantidad: row.cantidad,
          fechaFabricacion: row.fechaFabricacion,
          fechaVencimiento: row.fechaVencimiento,
          laboratorio: row.laboratorio,
          precio:row.precio
        }
        }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
       // this.exampleDatabase.dataChange.value.push(this.dataService.getDialogData());
       // this.refreshTable();
      }
    });
  }

}

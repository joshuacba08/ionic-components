import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild(IonList) ionList: IonList;

  usuarios: Observable<any>;


  constructor( private dataService: DataService ) { }

  ngOnInit() {

    this.usuarios = this.dataService.getUsuarios();

  }

  edit( usuario: any){
    console.log('editar',usuario);
    this.ionList.closeSlidingItems();
  }

  delete( usuario: any){
    console.log('borrar',usuario);
    this.ionList.closeSlidingItems();
  }
}

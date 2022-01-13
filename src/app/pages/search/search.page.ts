import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albums: any[] = [];
  textoBuscar = '';

  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe( albums => {
      this.albums = albums;
    });
  }

  onSearchChange(ev: any){
    this.textoBuscar = ev.detail.value;
  }

}

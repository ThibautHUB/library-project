import { AfterContentInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Ilivre } from '../models/livre';
import { LivreService } from '../services/livre/livre.service';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-list-livres',
  templateUrl: './list-livres.component.html',
  styleUrls: ['./list-livres.component.css']
})
export class ListLivresComponent implements OnInit {

  titre:string = "La liste des livres";
  WidthImg=60;
  Height=80;
  affichage:boolean=true;
  livres: Ilivre[] = [];

  listCategorie: string[] = [];
  categorieId: string = 'all';
  livreTemp:any[] = [];

  constructor(private serviceLivre: LivreService, private serviceCategorie: CategorieService) {
    console.log('Constructeur');
  }

  ngOnInit(): void {
    this.listCategorie = this.serviceCategorie.getAllCategories();
    this.livres = this.serviceLivre.getAllLivre();
    this.livreTemp = this.livres;
  }

  onclick() {
    this.affichage = !this.affichage;
  }

  ChangeCategory(){
    if(this.categorieId=="all"){
      this.livres = this.livreTemp;
    } else {
      this.livres = this.livreTemp.filter(p=>p.Category == this.categorieId);
    }
  }

  onNotify(event:number){
    alert(event);
  }

}

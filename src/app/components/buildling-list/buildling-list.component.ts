import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Structure } from 'src/app/shared/models/structure.model';
import { AoeService } from 'src/app/shared/services/aoe.service';

@Component({
  selector: 'app-buildling-list',
  templateUrl: './buildling-list.component.html',
  styleUrls: ['./buildling-list.component.css']
})
export class BuildlingListComponent implements OnInit {
  structures$!: Observable<Structure[]>;
  
  constructor(private aoeService: AoeService) { }

  ngOnInit(): void {
    this.structures$ = this.aoeService.getStructures();
  }

}

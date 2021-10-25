import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AoeService } from 'src/app/shared/services/aoe.service';

@Component({
  selector: 'app-civilization-list',
  templateUrl: './civilization-list.component.html',
  styleUrls: ['./civilization-list.component.css']
})
export class CivilizationListComponent implements OnInit, AfterViewInit {

  constructor(private aoeService: AoeService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
  }
}

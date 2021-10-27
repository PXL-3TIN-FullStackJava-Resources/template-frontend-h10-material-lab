# H10 Angular material
In deze lab maken we gebruik van angular material. Er is reeds een service voorzien die een age of empires API aanspreekt. Daarnaast is er ook een routing module voorzien met de nodige routes. Het `ng add @angular/material` commando is in dit project reeds uitgevoerd waardoor alle material dependencies al toegevoegd zijn.

Gegeven is deze repo. Hierin staat een Angular project. **Navigeer naar deze folder via de CLI** en voer volgend commando uit: ```npm install```
 
Vervolgens voer je, nog steeds in deze folder, het commando ```ng serve -o``` uit. Hiermee zal de applicatie gestart worden en gaat er automatisch een browser open. Moest dit laatste niet het geval zijn, surf je naar http://localhost:4200. Bij elke aanpassing in de code zal de browser automatisch refreshen.

![alt_text](https://i.imgur.com/TT9FcyW.png "image_tooltip") Bekijk voor het starten van de lab de applicatie code. Leg hierbij de focus op het linken van de verschillende modules in de `modules` folder.

# Material module
![alt_text](https://i.imgur.com/TT9FcyW.png "image_tooltip") Bekijk de `material.module.ts` file en hoe deze opgebouwd is. Deze file bevat alle material components die we doorheen de lab gaan gebruiken.

# Sidenav
Voor deze uitwerking is reeds extra css code voorzien in `app.component.css`. We starten met het voorzien van een toolbar in de `app.component.html`.  Deze toolbar gebruiken we als navigatiebalk in de applicatie. In de CSS file is ook reeds css voorzien:
```html
<div class="example-container">
  <mat-toolbar color="primary" class="example-toolbar">
      <span>AOE2 Docs</span>
      <span class="example-spacer"></span>
  </mat-toolbar>
</div>
```
Daarna voorzien we een material menu icon button in de navigatiebalk die we gebruiken om later de navigatielijst te tonen:
```html
<div class="example-container">
  <mat-toolbar color="primary" class="example-toolbar">
      <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
        <mat-icon>menu</mat-icon>
      </button>
      <span>AOE2 Docs</span>
      <span class="example-spacer"></span>
  </mat-toolbar>
</div>
```

Onder de toolbar plaatsen we de sidenav container met daarin de `mat-sidenav` en `mat-sidenav-content` elementen.
```html
<div class="example-container">
    <mat-toolbar color="primary" class="example-toolbar">
        <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
            <mat-icon>menu</mat-icon>
        </button>
        <span>AOE2 Docs</span>
        <span class="example-spacer"></span>
    </mat-toolbar>
    <mat-sidenav-container class="example-sidenav-container">
        <mat-sidenav #sidenav [fixedInViewport]="true" mode="side" class="example-sidenav">
            sidenav content
        </mat-sidenav>
        <mat-sidenav-content class="example-sidenav-content">
            <router-outlet></router-outlet>
        </mat-sidenav-content>
    </mat-sidenav-container>
</div>
```
de `fixedInViewport` binding zorgt ervoor dat de sidenav de volledige viewport hoogte in beslag neemt. Het `mode`attribuut zorgt er dan weer voor dat de content naar rechts geduwd wordt bij het openen van de sidenav. In de `mat-sidenav` is een referentievariabele voorzien. Bij de menu button voorzien we een click event die de sidenav aanspreekt via die variabele en vervolgens toont/verbergt:
```html
<button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon" (click)="sidenav.toggle()">
```


Hierna integreren we ook meteen de `routerLink` bindings in een `mat-list` zodat onze routing binnen de applicatie ook meteen werkt.
```html
<div class="example-container">
    <mat-toolbar color="primary" class="example-toolbar">
        <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
            <mat-icon>menu</mat-icon>
        </button>
        <span>AOE2 Docs</span>
        <span class="example-spacer"></span>
    </mat-toolbar>
    <mat-sidenav-container class="example-sidenav-container">
    <mat-sidenav #sidenav [fixedInViewport]="true" mode="side" class="example-sidenav">
        <mat-nav-list class="example-nav-list">
            <a mat-list-item [routerLink]="['/home']" routerLinkActive="router-link-active" >Home</a>
            <a mat-list-item [routerLink]="['/civilizations']" routerLinkActive="router-link-active" >Civilisation list</a>
            <a mat-list-item [routerLink]="['/buildings']" routerLinkActive="router-link-active">Buildings</a>
        </mat-nav-list>
    </mat-sidenav>
    <mat-sidenav-content class="example-sidenav-content">
        <router-outlet></router-outlet>
    </mat-sidenav-content>
    </mat-sidenav-container>
</div>
```

# Cards
Voor de `buildling-detail.component.html` file gebruiken we een material card view. Deze bestaat uit een `mat-card-title`, `mat-card-content` en `mat-card-footer`:

```html
<mat-card>
    <mat-card-title>{{structure.name}}</mat-card-title>
    <mat-card-subtitle>{{structure.age}} age</mat-card-subtitle>
    <mat-card-content>
        <ul>
            <li>Build time: {{structure.build_time}}</li>
            <li>Hitpoints: {{structure.hit_points}}</li>
            <li>Attack: {{structure.attack}}</li>
        </ul>
    </mat-card-content>
    <mat-card-footer>
        <img src="assets/wood.png" alt="wood" *ngIf="structure.cost.Wood"> {{structure.cost.Wood}}
        <img src="assets/food.png" alt="food" *ngIf="structure.cost.Food"> {{structure.cost.Food}}
        <img src="assets/gold.png" alt="gold" *ngIf="structure.cost.Gold"> {{structure.cost.Gold}}
        <img src="assets/stone.png" alt="stone" *ngIf="structure.cost.Stone"> {{structure.cost.Stone}}
    </mat-card-footer>
</mat-card>
```

# Datatable - basics
Voor de `civilization-list.component` wordt er een `MatDataTable` voorzien. We starten met het aanmaken van een datasource in de `civilization-list.component.ts` file en wordt er ook een property aangemaakt waarin we bijhouden welke kolommen getoond moeten worden:
```typescript
export class CivilizationListComponent implements OnInit {
  isLoading: boolean = true;
  dataSource!:MatTableDataSource<Civilization>;
  displayedColumns: string[] = ['id', 'name', 'expansion', 'army_type', 'team_bonus'];
```
Hierna wordt de `ngOninit` methode aangevuld zodat de `dataSource` property opgevuld wordt:
```typescript
  ngOnInit(): void {
    this.aoeService.getCivilizations().subscribe(data => {
      this.dataSource = new MatTableDataSource<Civilization>(data);
    });
  }
```

Vervolgens maken we de datatable aan in de view van deze component:
```html
<div class="mat-elevation-z8">
    <table mat-table [dataSource]="dataSource">
      <ng-container matColumnDef="id">
        <th mat-header-cell *matHeaderCellDef> # </th>
        <td mat-cell *matCellDef="let element"> {{element.id}} </td>
      </ng-container>
  
      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef> Name </th>
        <td mat-cell *matCellDef="let element"> {{element.name}} </td>
      </ng-container>
  
      <ng-container matColumnDef="expansion">
        <th mat-header-cell *matHeaderCellDef> Expansion </th>
        <td mat-cell *matCellDef="let element"> {{element.expansion}} </td>
      </ng-container>
  
      <ng-container matColumnDef="army_type">
        <th mat-header-cell *matHeaderCellDef> Army type </th>
        <td mat-cell *matCellDef="let element"> {{element.army_type}} </td>
      </ng-container>

      <ng-container matColumnDef="team_bonus">
        <th mat-header-cell *matHeaderCellDef> Team bonus </th>
        <td mat-cell *matCellDef="let element"> {{element.team_bonus}} </td>
      </ng-container>
  
      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  </div>
```

Voorzie volgende css klasse in de `civilization.component.css`:
```css
table{
    width: 100%;
}
```

# Datatable - pagination
In de datatable maken we gebruik van paginatie. We starten met een aanmaken van een pagination component in de view, onder het <table> element:
```html
    <mat-paginator [pageSizeOptions]="[5, 10, 20]"
                 showFirstLastButtons 
                 aria-label="Select page of civilizations">
    </mat-paginator>
```

Hierna maken we deze component aanspreekbaar vanuit de `civilization-list.component.ts` file a.d.h.v. een `@ViewChild` decorator. Daarnaast maken we ook gebruik van de `AfterViewInit` lifecycle hook:
```typescript
export class CivilizationListComponent implements AfterViewInit {
  isLoading: boolean = true;
  dataSource!:MatTableDataSource<Civilization>;
  displayedColumns: string[] = ['id', 'name', 'expansion', 'army_type', 'team_bonus'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    this.aoeService.getCivilizations().subscribe(data => {
      this.dataSource = new MatTableDataSource<Civilization>(data);
      this.dataSource.paginator = this.paginator;
    });
  }
```
We gebruiken deze lifecycle hook zodat we zeker zijn dat de view volledig opgebouwd is vooraleer we de paginator component koppelen aan de `MatTableDataSource`. Als we dit in de ngOnInit doen, bestaat er een kans dat de child components nog niet opgebouwd, en dus ook niet aanspreekbaar, zijn. Dit is een vereiste vanuit de material library.

# Datatable - sorting
Ook voor sorting gebruiken we een `@ViewChild` decorator, voeg deze toe onder de paginator:
```typescript
@ViewChild(MatSort) sort!: MatSort;
```
Hierna passen we de `ngAfterViewInit` methode aan als volgt:
```typescript
  ngAfterViewInit(): void{
    this.aoeService.getCivilizations().subscribe(data => {
      this.dataSource = new MatTableDataSource<Civilization>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
```

Pas vervolgens de view aan waarin we `matSort` toevoegen aan de `table` tag
```html
<table mat-table [dataSource]="dataSource" matSort>
```
tenslotte voegen we nog aan elke kolom waar we een sortering willen voorzien het `mat-sort-header` attribuut toe aan de `th` elementen:
```html
<th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>
```
Voorzie dit attribuut in alle `th` elemenenten op deze pagina.

# Datatable - filtering
Voor het filteren van de data voorzien we in de view een `MatFormField` net boven het `table` element:
```html
<mat-form-field>
    <input matInput placeholder="Filter" #filterInput (keyup)="filter(filterInput.value)">
</mat-form-field>
```
Hierin zit een `input` element met een gekoppelde `keyup` event. de methode die hieraan gelinkt wordt, maken we vervolgens aan in de component klasse:
```typescript
  filter(searchText: string): void{
    this.dataSource.filter = searchText.trim().toLowerCase();
  }
```
Voeg tenslotte volgende css klasse toe aan ```civilization-list.component.css```:
```css
.mat-form-field {
    font-size: 14px;
    width: 95%;
    margin: 0 auto;
    display: block;
}
```
# Dialog
Als er op een rij in de datalist geklikt wordt, willen we dat de `civ-detail-dialog` component als modal dialog verschijnt op de pagina. Hiervoor starten we met aanpassingen in de `civilization-list.component.ts` file waarin we een `MatDialog` injecteren in de constructor:
```typescript
constructor(private aoeService: AoeService, public dialog: MatDialog) { }
```

We voorzien ook een methode die we later koppelen aan een klik event. Deze methode opent de `CivDetailDialogComponent` als modal dialog en geeft ook het geklikte object mee aan deze dialog component:
```typescript
  onClick(row: Civilization): void{
    this.dialog.open(CivDetailDialogComponent, {
      data: {
        civ: row
      }
    });
  }
```
Vervolgens koppelen we de click event in `civilization-list.component.html` als volgt:
```html
<tr mat-row *matRowDef="let row; columns: displayedColumns;" (click)="onClick(row)"></tr>
```
Voorzie ook nog volgende css regels in `civilization-list.component.css`:
```css
.mat-row:hover .mat-cell {
    border-color: rgba(0,0,0,.06);
    background-color: rgba(0,0,0,.04);
}

.mat-row .mat-cell {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
    cursor: pointer;
  }
```

Hierna starten we met de configuratie van de `civ-detail-dialog.component.ts` file. In de constructor doen we injectie van de service als van de `MAT_DIALOG_DATA`:
```typescript
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
...

constructor(@Inject(MAT_DIALOG_DATA) public data: {civ: Civilization}, private aoeService: AoeService) { }
```
De manier van dataoverdracht werkt anders als bij dialogs in verlijking met components. Vervolgens passen we de `ngOnInit` hook aan om de data van het specifieke object op te vragen:
```typescript
 ngOnInit(): void {
    this.data.civ.unique_unit.forEach(ele => {
      this.aoeService.getUnit(ele).subscribe(data =>{
        this.units.push(data);
      });
    });
  }
```
Tenslotte voorzien we volgende code in de `civ-detail-dialog.component.html` file:
```html
<h2 mat-dialog-title>{{data.civ.name}}</h2>
<mat-dialog-content>
    <p>Expansion: {{data.civ.expansion}}</p>
    <p>Army type: {{data.civ.army_type}}</p>
    <p>Team bonus: {{data.civ.team_bonus}}</p>
    <p>Unique units:</p>
    <ul>
        <li *ngFor="let item of units">{{item.name}} : {{item.description}}</li>
    </ul>
    <p>Civilization bonus:</p>
    <ul>
        <li *ngFor="let item of data.civ.civilization_bonus">{{item}}</li>
    </ul>
</mat-dialog-content>
<mat-dialog-actions>
    <button mat-button [mat-dialog-close]="true">Close</button>
</mat-dialog-actions>
```








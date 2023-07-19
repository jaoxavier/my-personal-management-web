import { Component } from '@angular/core';
import { ChangeModuleService } from '../shared/change-module.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  constructor(
    private changeModule: ChangeModuleService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {    
    this.changeModule.getSelectedModule().subscribe((module) => {
      this.router.navigate([
        {
          outlets: {
            detailsOutlet: module
          }
        }], 
        {
          relativeTo: this.route.parent,
          skipLocationChange: true
        }
      );
    })
  }
}

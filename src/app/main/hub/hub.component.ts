import { Component } from '@angular/core';
import { HubItens } from 'src/app/models/HubItens';
import { Itens } from 'src/app/models/Itens';
import { ChangeModuleService } from 'src/app/shared/change-module.service';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.scss']
})
export class HubComponent{

  itens: Itens[];

  constructor(
    private changeModule: ChangeModuleService
  ){
    this.itens = HubItens;
  }

  openModuleDetails(moduleName: string){
    this.changeModule.setSelectedModule(moduleName);
  }
}

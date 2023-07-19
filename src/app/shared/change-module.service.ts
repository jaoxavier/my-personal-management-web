import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeModuleService {

  private selectedModule = new BehaviorSubject<string>('default');

  constructor(){}

  setSelectedModule(module: string){
    this.selectedModule.next(module);
  }
  
  getSelectedModule(){
    return this.selectedModule.asObservable();
  }
}

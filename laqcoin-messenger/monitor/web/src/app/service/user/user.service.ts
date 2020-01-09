import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  SSHCLIENTINFO = '_LAQWIRE_SSHCLIENTINFO';
  SOCKETCLIENTINFO = '_LAQWIRE_SOCKETCLIENTINFO';
  HOMENODELABLE = '_LAQWIRE_HOMENODELABEL';
  constructor() { }
  saveHomeLabel(nodeKey: string, label: string) {
    let homeLabels = this.get(this.HOMENODELABLE);
    if (!homeLabels) {
      homeLabels = {};
    }
    homeLabels[nodeKey] = label;
    localStorage.setItem(this.HOMENODELABLE, JSON.stringify(homeLabels));
  }
  get(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }
}
// export interface LinkedList


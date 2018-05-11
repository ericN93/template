import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable()
export class StorageService {

  constructor(private storage: LocalStorageService) { }

  public stor(key: string, value: any){
    this.storage.store(key, value);
  }

  public retrieve (key: string) {
    let value = this.storage.retrieve(key);
    if (value === null)
      return '';
    else
      return value;
  }

  public clear (key: string) {
    this.storage.clear(key);
  }

  public clearAll() {
    this.storage.clear();
  }

}

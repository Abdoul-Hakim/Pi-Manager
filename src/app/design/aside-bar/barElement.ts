import { IBarElement } from './iBarElement';

export class BarElement implements IBarElement{
  name: string;
  tag: string;
  path: string;

  constructor(name: string, tag: string, path: string){
    this.setName(name);
    this.setTag(tag);
    this.setPath(path);
  }

  getName(){
    return this.name;
  }

  private setName(name: string){
    this.name = name;
  }

  getTag(){
    return this.tag;
  }

  private setTag(tag: string){
    this.tag = tag;
  }

  getPath(){
    return this.path;
  }

  private setPath(path: string){
    this.path = path;
  }
}

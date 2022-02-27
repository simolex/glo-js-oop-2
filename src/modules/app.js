export class App {
  constructor() {
    this.equipments = {};
    this.nextId = 1;
  }
  get nextId() {
    return this.nextId++;
  }
  set nextId(id) {
    this.nextId = id;
  }
}

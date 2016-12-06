import './datos';

class Usuarios{
  usuario : Usuario;
  constructor( name : string,
  age : number
  ){
    this.usuario = {
      name : name,
      age : age
    }
    console.log(this.usuario);
  }
}

const u = new Usuarios('Josue', 30);
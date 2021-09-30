export class Student {
    code: number;
    id: number;
    age: number;
    adress: string;
    phone: number;
  
    constructor(code: number, age: number, id: number, adress: string, phone: number) {
      this.code = code;
      this.id = id;
      this.age = age;
      this.adress = adress;
      this.phone = phone;
    }
  }
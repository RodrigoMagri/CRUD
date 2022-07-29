export class Product {
    id: number
    name: string
    price: number

    constructor(opt : {  id? :number, name? : string, price? : number}){
        this.id = opt.id ?? 0;
        this.name = opt.name ?? 'default product';
        this.price = opt.price ?? 0;
       
    }
}
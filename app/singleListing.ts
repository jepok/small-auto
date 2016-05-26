export class SingleListing {
  constructor (
    public id:number,
    public featured:boolean,
    public title:string,
    public make:string,
    public model:string,
    public monthlyPrice:number,
    public price:number,
    public isTruck:boolean,
    public summary:string) {}

}

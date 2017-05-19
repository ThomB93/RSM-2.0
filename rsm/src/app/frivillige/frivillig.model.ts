export class Frivillig {
  public fornavn: string;
  public efternavn: string;
  public tlfnr: string;
  public email: string;
  public postnr: number;
  public by: string;

  constructor(fornavn: string, efternavn: string, tlfnr: string, email : string, postnr : number, by : string) {
    this.fornavn = fornavn;
    this.efternavn = efternavn;
    this.tlfnr = tlfnr;
    this.email = email;
    this.postnr = postnr;
    this.by = by;
  }
}
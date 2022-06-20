export class Gigasecond {
  static gig: number = Math.pow(10, 12);

  private _inputDate: Date;

  constructor(inputDate: Date) {
    this._inputDate = inputDate;
  }

  public date(): Date {
    return new Date(this._inputDate.getTime() + Gigasecond.gig);
  }
}

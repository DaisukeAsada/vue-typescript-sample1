export class Calc {
  public _x: number
  public _y: number

  constructor (x: number, y: number) {
    this._x = x
    this._y = y
  }

  public plus (): number {
    return this._x + this._y
  }
}

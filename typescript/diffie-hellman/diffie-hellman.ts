export class DiffieHellman {
  constructor(private p: number, private g: number) {
    this.constructorCheck();
  }

  private constructorCheck(): void {
    if (this.p < 2 || !this.isPrime(this.p)) {
      throw new Error("p is not prime");
    }
    if (this.g < 2 || this.g >= this.p) {
      throw new Error("g is out of range");
    }
  }

  private isPrime(num: number): boolean {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  }

  public getPublicKey(privateKey: number): number {
    if (privateKey < 0) {
      throw new Error("private key is negative");
    }
    if (privateKey === 0) {
      throw new Error("private key is zero");
    }
    if (privateKey === 1) {
      throw new Error("private key is one");
    }
    if (privateKey === this.p) {
      throw new Error("private key equals the modulus parameter p");
    }
    if (privateKey > this.p) {
      throw new Error("private key is greater than the modulus parameter p");
    }

    return Math.pow(this.g, privateKey) % this.p;
  }

  public getSecret(theirPublicKey: number, myPrivateKey: number): number {
    return Math.pow(theirPublicKey, myPrivateKey) % this.p;
  }
}

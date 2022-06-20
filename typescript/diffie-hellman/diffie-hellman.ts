export class DiffieHellman {
  constructor(private p: number, private g: number) {
    if (p < 2 || !this.isPrime(p)) {
      throw new Error("p is not prime");
    }
    if (g < 2 || g >= p) {
      throw new Error("g is out of range");
    }
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

  private isPrime(num: number): boolean {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  }
}

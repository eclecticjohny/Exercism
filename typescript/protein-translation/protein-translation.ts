export function translate(rna: string): string[] {
  const codons: string[] = Array.from(
    new Array(Math.ceil(rna.length / 3)),
    (_, i) => rna.slice(i * 3, i * 3 + 3)
  );
  const proteins: string[] = [];

  for (let i = 0; i < codons.length; i++) {
    const codon = codons[i];
    const protein = codonToProtein(codon);

    if (protein === "STOP") {
      i = codons.length;
    }
    if (protein && protein !== "STOP") {
      proteins.push(protein);
    }
  }
  return proteins;
}

function codonToProtein(codon: string): string | undefined {
  switch (codon) {
    case "AUG":
      return "Methionine";
    case "UUU":
    case "UUC":
      return "Phenylalanine";
    case "UUA":
    case "UUG":
      return "Leucine";
    case "UCU":
    case "UCC":
    case "UCA":
    case "UCG":
      return "Serine";
    case "UAU":
    case "UAC":
      return "Tyrosine";
    case "UGU":
    case "UGC":
      return "Cysteine";
    case "UGG":
      return "Tryptophan";
    case "UAA":
    case "UAG":
    case "UGA":
      return "STOP";
    default:
      return undefined;
  }
}

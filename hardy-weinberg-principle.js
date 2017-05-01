var a1a1 = 0.15; //homozygous
var a2a2 = 0.35; //homozygous
var a1a2 = 1 - (a1a1 + a2a2); //heterozygous
// now we calculate the allele frequencies
var p = a1a1 + a1a2/2;
var q  = 1 - p; //we know p + q = 1 always
console.log(p);
console.log(q);

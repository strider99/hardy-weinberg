var a1a1 = 0.15; //homozygous
var a2a2 = 0.35; //homozygous
var a1a2 = 1 - (a1a1 + a2a2); //heterozygous
// now we calculate the allele frequencies
var p = a1a1 + a1a2/2;
var q  = 1 - p; //we know p + q = 1 always
console.log("Allele frequencies are p = " + p + " and q = " + q);
console.log("Generation 0: ", a1a1, a1a2, a2a2);

// Calculation the next generation
function create_next_generation () {
	a1a1 = p * p;
	a1a2 = 2 * p * q;
	a2a2 = q * q;	
}

for(var i = 0; i < 5; i++){
	create_next_generation();
	console.log(`Generation ${i+1}: `, a1a1, a1a2, a2a2);
	
}


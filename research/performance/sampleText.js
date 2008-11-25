var sampleText = [];
var sampleWords = [];

var t1 = "0a0b0c0d0e0f0g0h1a1b1c1d1e";
var t2 = "1f1g1h2a2b2c2d2e2f2g2h3a3b";
var t3 = "3c3d3e3f3g3h5a5b5c5d5e5f5g5h";

var template = t1 + t2 + t3;
for(var i=0; i<1000; i++){
	sampleText.push(template);
	
	sampleWords.push(t1);
	sampleWords.push(t2);
	sampleWords.push(t3);
}

sampleText = sampleText.join("");
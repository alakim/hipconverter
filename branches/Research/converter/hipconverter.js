function HipConverter(htmlMode){var _=this;
	_.htmlMode = htmlMode==null?false:htmlMode;
	
	_.templates = [];
	var coll = _.getSortedKeys(_.table);
	for(var i=0; i<coll.length; i++){var k=coll[i];
		var repl = _.table[k];
		if(typeof(repl)!="string")
			repl = String.fromCharCode(repl);
		_.templates.push({re:new RegExp(k, "g"), repl:repl});
	}
}

HipConverter.prototype = {
	table: {
//	"":0x20,
//	"!":0x21,
//	"":0x22,
	"([À-ß])=":"$1#",//+String.fromCharCode(0x23),
	"([À-ß])='":"$1$$"+String.fromCharCode(0x24),
	"([À-ß])=`":"$1%"+String.fromCharCode(0x25),
	"([À-ß])~":"$1&"+String.fromCharCode(0x26),
//	"":0x24,
//	"":0x25,
//	"":0x26,
//	"":0x27,
//	"":0x28,
//	"":0x29,
//	"":0x2a,
	"\\\\â":0x2b,
//	"":0x2c,
//	"":0x2d,
//	"":0x2e,
//	"":0x2f,
//	
	"î'":0x30,
	"'":0x31,
	"`":0x32,
	"=":0x33,
	"='":0x34,
	"=`":0x35,
	"\\^":0x36,
	"~":0x37,
	"\\\\ú":0x38,
	"æ~":0x39,
//	"":0x3a,
//	"":0x3b,
	"\\\\õ":0x3c,
	"\\\\í":0x3d,
	"\\\\ð":0x3e,
	"\\\\÷":0x3f,
//	
	"([À-ß])`":"$1"+String.fromCharCode(0x40),
	"à`":0x41,
	"jü\\^":0x42,
	"\\\\ñ":0x43,
	"ä\\\\ñ":0x44,
	"å'":0x45,
	"F":0x46,
	"ã~":0x47,
	"w'":0x48,
//	"":0x49,
	"i`":0x4a,
	"J[Àà]=":0x4b,
	"ë\\\\ä":0x4c,
	"V\"":0x4d,
	"_Î=":0x4e,
	"_Î":0x4f,
//	
	"_Ï[Ññ]":0x50,
	"_W":0x51,
	"ð~":0x52,
	"ÿ`":0x53,
	"W\\\\ò":0x54,
	"_Î[Óó]":0x55,
//	"V":0x56,
//	"W":0x57,
	"_Ê[Ññ]":0x58,
	"ó`":0x59,
	"ß":0x5a,
//	"":0x5b,
	"((w\\\\ò)|ô|(_ïñ))\\\\":"$1\\\\",
//	"":0x5d,
	"(À-ß)^":"$1"+String.fromCharCode(0x5e),
	"(À-ß)\\\\ú":"$1"+String.fromCharCode(0x5f),
//	
//	"":0x60,
	"à'":0x61,
	"\\\\î":0x62,
	"\\\\ñ":0x63,
	"\\\\ä":0x64,
	"å'":0x65,
	"f":0x66,
	"\\\\ã":0x67,
	"û'":0x68,
	"_i":0x69,
	"i'":0x6a,
	"jà=":0x6b,
	"ë~":0x6c,
	"v\"":0x6d,
	"_î=":0x6e,
	"_î":0x6f,
//	
	"_ïñ":0x70,
	"_w":0x71,
	"ð\\\\ñ":0x72,
	"ÿ'":0x73,
	"w\\\\ò":0x74,
	"_îó":0x75,
//	"v":0x76,
//	"w":0x77,
	"_êñ":0x78,
	"ó'":0x79,
	"ÿ":0x7a,
	"ó^":0x7b,
	"ÿ=`":0x7c,
	"í~":0x7d,
	"(À-ß)'":"$1"+String.fromCharCode(0x7e),
//	"":0x7f,
//	
	"v'":0x80,
	"À='":0x81,
//	"":0x82,
	"à='":"ƒ",//0x83,
//	"":0x84,
	"_êñ~":0x85,
	"à^":0x86,
	"i^":0x87,
	"\\\\ç":0x88,
	"ÿ^":0x89,
	"ß^":0x8a,
	"i~":0x8b,
	"W^":0x8c,
	"_Î[Óó]='":0x8d,
	"J[Àà]='":"Ž",//0x8e,
	"_Î='":0x8f,
//	
	"v\\\\ã":0x90,
//	"":0x91,
//	"":0x92,
//	"":0x93,
//	"":0x94,
//	"":0x95,
//	"":0x96,
//	"":0x97,
//	"":0x98,
	"ò~":0x99,
	"ÿ=":0x9a,
	"v^":0x9b,
	"w=":0x9c,
	"_îó='":0x9d,
	"jà='":"ž",//0x9e,
	"_î='":0x9f,
//	
//	"":0xa0,
	"_Î[Óó]=":0xa1,
	"îó=":0xa2,
	"I='":0xa3,
	"([^À-ß])#":0xa4,
	"À=":0xa5,
	"õ~":0xa6,
	"÷~":0xa7,
	"jü`":"¨",
	"ñ~":0xa9,
//	"":0xaa,
//	"":0xab,
//	"":0xac,
//	"":0xad,
	"ð\\\\ä":0xae,
	"I=":0xaf,
//	
	"@":0xb0,
	"jà=`":0xb1,
	"_I":0xb2,
	"i":"³",//0xb3,
	"à=":0xb4,
	"_ó":0xb5,
//	"":0xb6,
//	"":0xb7,
	"jü'":"¸",
	"à~":"¹",//0xb9,
	"\\_å":"º",//0xba,
//	"":0xbb,
	"i='":0xbc,
	"S":0xbd,
	"s":"¾",//0xbe,
	"i=":0xbf,

	"J[Üü]":"Ý",
//	"":0xde,
	"J[Àà]":0xdf,

	"jü":"ý",
//	"":0xfe,
	"jà":0xff
	},
	
	templates:[],
	htmlMode:false,
	
	markup:[
		{re:/\%\(/g, repl:"<span class=\"red\">"},
		{re:/\%\)/g, repl:"</span>"}
		//,{re:/\n/g, repl:"<br>"}
	],
	
	getSortedKeys:function(codeTable){
		var coll = [];
		for(var k in codeTable){
			coll.push(k);
		}
		
		return coll.sort(function(x,y){
			return x.length<y.length
				?1
				:x.length>y.length
					?-1
					:0;
		});
	},
	
	convert: function(txt){var _=this;
		for(var i=0; i<_.templates.length; i++){var tpl=_.templates[i];
			txt = txt.replace(tpl.re, tpl.repl);
		}
		if(_.htmlMode){
			for(var i=0; i<_.markup.length; i++){var m=_.markup[i];
				txt = txt.replace(m.re, m.repl);
			}
		}
		else{
			txt = txt.replace(/\%[\)\(]/g, "");
		}
		return txt
	}
};
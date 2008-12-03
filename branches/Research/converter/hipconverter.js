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
	"([�-�])=":"$1#",//+String.fromCharCode(0x23),
	"([�-�])='":"$1$$"+String.fromCharCode(0x24),
	"([�-�])=`":"$1%"+String.fromCharCode(0x25),
	"([�-�])~":"$1&"+String.fromCharCode(0x26),
//	"":0x24,
//	"":0x25,
//	"":0x26,
//	"":0x27,
//	"":0x28,
//	"":0x29,
//	"":0x2a,
	"\\\\�":0x2b,
//	"":0x2c,
//	"":0x2d,
//	"":0x2e,
//	"":0x2f,
//	
	"�'":0x30,
	"'":0x31,
	"`":0x32,
	"=":0x33,
	"='":0x34,
	"=`":0x35,
	"\\^":0x36,
	"~":0x37,
	"\\\\�":0x38,
	"�~":0x39,
//	"":0x3a,
//	"":0x3b,
	"\\\\�":0x3c,
	"\\\\�":0x3d,
	"\\\\�":0x3e,
	"\\\\�":0x3f,
//	
	"([�-�])`":"$1"+String.fromCharCode(0x40),
	"�`":0x41,
	"j�\\^":0x42,
	"\\\\�":0x43,
	"�\\\\�":0x44,
	"�'":0x45,
	"F":0x46,
	"�~":0x47,
	"w'":0x48,
//	"":0x49,
	"i`":0x4a,
	"J[��]=":0x4b,
	"�\\\\�":0x4c,
	"V\"":0x4d,
	"_�=":0x4e,
	"_�":0x4f,
//	
	"_�[��]":0x50,
	"_W":0x51,
	"�~":0x52,
	"�`":0x53,
	"W\\\\�":0x54,
	"_�[��]":0x55,
//	"V":0x56,
//	"W":0x57,
	"_�[��]":0x58,
	"�`":0x59,
	"�":0x5a,
//	"":0x5b,
	"((w\\\\�)|�|(_��))\\\\":"$1\\\\",
//	"":0x5d,
	"(�-�)^":"$1"+String.fromCharCode(0x5e),
	"(�-�)\\\\�":"$1"+String.fromCharCode(0x5f),
//	
//	"":0x60,
	"�'":0x61,
	"\\\\�":0x62,
	"\\\\�":0x63,
	"\\\\�":0x64,
	"�'":0x65,
	"f":0x66,
	"\\\\�":0x67,
	"�'":0x68,
	"_i":0x69,
	"i'":0x6a,
	"j�=":0x6b,
	"�~":0x6c,
	"v\"":0x6d,
	"_�=":0x6e,
	"_�":0x6f,
//	
	"_��":0x70,
	"_w":0x71,
	"�\\\\�":0x72,
	"�'":0x73,
	"w\\\\�":0x74,
	"_��":0x75,
//	"v":0x76,
//	"w":0x77,
	"_��":0x78,
	"�'":0x79,
	"�":0x7a,
	"�^":0x7b,
	"�=`":0x7c,
	"�~":0x7d,
	"(�-�)'":"$1"+String.fromCharCode(0x7e),
//	"":0x7f,
//	
	"v'":0x80,
	"�='":0x81,
//	"":0x82,
	"�='":"�",//0x83,
//	"":0x84,
	"_��~":0x85,
	"�^":0x86,
	"i^":0x87,
	"\\\\�":0x88,
	"�^":0x89,
	"�^":0x8a,
	"i~":0x8b,
	"W^":0x8c,
	"_�[��]='":0x8d,
	"J[��]='":"�",//0x8e,
	"_�='":0x8f,
//	
	"v\\\\�":0x90,
//	"":0x91,
//	"":0x92,
//	"":0x93,
//	"":0x94,
//	"":0x95,
//	"":0x96,
//	"":0x97,
//	"":0x98,
	"�~":0x99,
	"�=":0x9a,
	"v^":0x9b,
	"w=":0x9c,
	"_��='":0x9d,
	"j�='":"�",//0x9e,
	"_�='":0x9f,
//	
//	"":0xa0,
	"_�[��]=":0xa1,
	"��=":0xa2,
	"I='":0xa3,
	"([^�-�])#":0xa4,
	"�=":0xa5,
	"�~":0xa6,
	"�~":0xa7,
	"j�`":"�",
	"�~":0xa9,
//	"":0xaa,
//	"":0xab,
//	"":0xac,
//	"":0xad,
	"�\\\\�":0xae,
	"I=":0xaf,
//	
	"@":0xb0,
	"j�=`":0xb1,
	"_I":0xb2,
	"i":"�",//0xb3,
	"�=":0xb4,
	"_�":0xb5,
//	"":0xb6,
//	"":0xb7,
	"j�'":"�",
	"�~":"�",//0xb9,
	"\\_�":"�",//0xba,
//	"":0xbb,
	"i='":0xbc,
	"S":0xbd,
	"s":"�",//0xbe,
	"i=":0xbf,

	"J[��]":"�",
//	"":0xde,
	"J[��]":0xdf,

	"j�":"�",
//	"":0xfe,
	"j�":0xff
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
function HipConverter(htmlMode){var _=this;
	_.htmlMode = htmlMode==null?false:htmlMode;
}

HipConverter.version = "2.0.23";

HipConverter.prototype = {
	htmlMode:false,
	templates:[[/`/g, "2"],[/([À-ß])='/g, "$1$$$"],[/=/g, "3"],[/'/g, "1"],[/î'/g, "0"],[/([À-ß])=`/g, "$1%%"],[/([À-ß])=/g, "$1##"],[/([À-ß])~/g, "$1&&"]],
	markup:[
		{re:/\%\(/g, repl:"<span class=\"red\">"},
		{re:/\%\)/g, repl:"</span>"}
	],

	convert: function(txt){var _=this;
		for(var i=0; i<_.templates.length; i++){var tpl=_.templates[i];
			txt = txt.replace(tpl[0], tpl[1]);
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


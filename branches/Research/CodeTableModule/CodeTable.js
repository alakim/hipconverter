function CodeTable(codeTable){var _=this;
	var coll = _.getSortedKeys(codeTable);
	_.re = new RegExp(_.buildRegex(coll),"g");
	var fDef = _.buildReplacementFunction(coll, codeTable);
	_.reFunct = new Function(fDef.args, fDef.bodyCode);
}

CodeTable.prototype = {
	convert: function(str){
		return str.replace(this.re, this.reFunct);
	},
	
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
	
	buildRegex:function(keys){
		var str = [];
		for(var i=0; i<keys.length; i++){var k=keys[i];
			str.push("("+k+")");
		}
		return str.join("|");
	},
	
	buildReplacementFunction: function(keys, codeTable){
		var args = [];
		var bodyCode = [];
		
		args.push("$0");
		bodyCode.push("return ");
		var idx = 1;
		for(var i=0; i<keys.length; i++){var k=keys[i];
			var condition = "$"+idx;
			var repl = codeTable[k];
			if(typeof(repl)!="string")
				repl = String.fromCharCode(repl);
			if(idx>1)
				bodyCode.push(":");
			var mt = k.match(/\(/g);
			if(mt){
				repl = "(\""+ repl.replace(/\$(\d+)/g, function($0, $1){return "\"+$"+(parseInt($1)+idx)+"+\"";}) + "\")";
				
				for(var j=0;j<mt.length; j++){
					args.push("$"+(idx+j));
				}
				idx+=mt.length;
			}
			else
				repl = "\""+repl+"\"";
			args.push("$"+idx);
			bodyCode.push(condition+"?"+repl);
			idx++;
		}
		bodyCode.push(":0;");
		
		return {args: args.join(","), bodyCode:bodyCode.join("")};
	}
	
}

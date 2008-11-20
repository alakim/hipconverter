function CodeTable(codeTable){var _=this;
	_.re = new RegExp(_.buildRegex(codeTable),"g");
	var fDef = _.buildReplacementFunction(codeTable);
	_.reFunct = new Function(fDef.args, fDef.bodyCode);
}

CodeTable.prototype = {
	convert: function(str){
		return str.replace(this.re, this.reFunct);;
	},
	
	buildRegex:function(codeTable){
		var str = [];
		for(var k in codeTable){
			str.push("("+k+")");
		}
		return str.join("|");
	},
	
	buildReplacementFunction: function(codeTable){
		var args = [];
		var bodyCode = [];
		
		args.push("$0");
		bodyCode.push("return ");
		var idx = 1;
		for(var k in codeTable){
			var condition = "$"+idx;
			var repl = codeTable[k];
			if(idx>1)
				bodyCode.push(":");
			var mt = k.match(/\(/g);
			if(mt){
					var add = mt.length;
					for(var j=0;j<add; j++){
						args.push("$"+idx);
						repl = "(\""+ repl.replace("$"+(j+1), "\"+$"+(idx+1)+"+\"") + "\")";
					}
					idx++;
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

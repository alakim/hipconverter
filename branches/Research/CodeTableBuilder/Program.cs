using System;
using System.Collections.Generic;
using System.Text;
using System.IO;

namespace CodeTableBuilder {
	class Program {
		static void Main(string[] args) {
			Encoding enc = Encoding.GetEncoding(1251);
			using(StreamWriter wrt = new StreamWriter("table.js", false, enc)) {
				wrt.WriteLine(@"var codeTable = {{");
				for(int c = 0x20; c <= 0xff; c++) {
					wrt.WriteLine(@"	0x{0:x}: ""{1}""{2}", c, enc.GetString(new byte[] { (byte)c }),  c < 0xff ? "," : string.Empty);
				}
				wrt.WriteLine(@"}};");
			}

			Console.WriteLine("Done...");
		}
	}
}

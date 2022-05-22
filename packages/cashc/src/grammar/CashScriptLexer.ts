// Generated from src/grammar/CashScript.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class CashScriptLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly VersionLiteral = 53;
	public static readonly BooleanLiteral = 54;
	public static readonly NumberUnit = 55;
	public static readonly NumberLiteral = 56;
	public static readonly Bytes = 57;
	public static readonly Bound = 58;
	public static readonly StringLiteral = 59;
	public static readonly DateLiteral = 60;
	public static readonly HexLiteral = 61;
	public static readonly TxVar = 62;
	public static readonly NullaryOp = 63;
	public static readonly Identifier = 64;
	public static readonly WHITESPACE = 65;
	public static readonly COMMENT = 66;
	public static readonly LINE_COMMENT = 67;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "T__31", "T__32", 
		"T__33", "T__34", "T__35", "T__36", "T__37", "T__38", "T__39", "T__40", 
		"T__41", "T__42", "T__43", "T__44", "T__45", "T__46", "T__47", "T__48", 
		"T__49", "T__50", "T__51", "VersionLiteral", "BooleanLiteral", "NumberUnit", 
		"NumberLiteral", "Bytes", "Bound", "StringLiteral", "DateLiteral", "HexLiteral", 
		"TxVar", "NullaryOp", "Identifier", "WHITESPACE", "COMMENT", "LINE_COMMENT",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'pragma'", "';'", "'cashscript'", "'^'", "'~'", "'>='", "'>'", 
		"'<'", "'<='", "'='", "'contract'", "'{'", "'}'", "'function'", "'('", 
		"','", "')'", "'require'", "'if'", "'else'", "'new'", "'['", "']'", "'tx.outputs'", 
		"'.value'", "'.lockingBytecode'", "'tx.inputs'", "'.outpointTransactionHash'", 
		"'.outpointIndex'", "'.unlockingBytecode'", "'.sequenceNumber'", "'.reverse()'", 
		"'.length'", "'.split'", "'!'", "'-'", "'*'", "'/'", "'%'", "'+'", "'=='", 
		"'!='", "'&'", "'|'", "'&&'", "'||'", "'int'", "'bool'", "'string'", "'pubkey'", 
		"'sig'", "'datasig'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "VersionLiteral", "BooleanLiteral", 
		"NumberUnit", "NumberLiteral", "Bytes", "Bound", "StringLiteral", "DateLiteral", 
		"HexLiteral", "TxVar", "NullaryOp", "Identifier", "WHITESPACE", "COMMENT", 
		"LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CashScriptLexer._LITERAL_NAMES, CashScriptLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CashScriptLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(CashScriptLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "CashScript.g4"; }

	// @Override
	public get ruleNames(): string[] { return CashScriptLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return CashScriptLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return CashScriptLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return CashScriptLexer.modeNames; }

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02E\u02EC\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03" +
		"\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10" +
		"\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18" +
		"\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03" +
		" \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03!\x03!\x03" +
		"!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03" +
		"\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03$\x03$\x03" +
		"%\x03%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03)\x03)\x03*\x03*\x03*\x03+\x03" +
		"+\x03+\x03,\x03,\x03-\x03-\x03.\x03.\x03.\x03/\x03/\x03/\x030\x030\x03" +
		"0\x030\x031\x031\x031\x031\x031\x032\x032\x032\x032\x032\x032\x032\x03" +
		"3\x033\x033\x033\x033\x033\x033\x034\x034\x034\x034\x035\x035\x035\x03" +
		"5\x035\x035\x035\x035\x036\x066\u01B4\n6\r6\x0E6\u01B5\x036\x036\x066" +
		"\u01BA\n6\r6\x0E6\u01BB\x036\x036\x066\u01C0\n6\r6\x0E6\u01C1\x037\x03" +
		"7\x037\x037\x037\x037\x037\x037\x037\x057\u01CD\n7\x038\x038\x038\x03" +
		"8\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x03" +
		"8\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x03" +
		"8\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x03" +
		"8\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x058\u0208\n" +
		"8\x039\x059\u020B\n9\x039\x069\u020E\n9\r9\x0E9\u020F\x039\x039\x069\u0214" +
		"\n9\r9\x0E9\u0215\x059\u0218\n9\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x05" +
		":\u0221\n:\x03:\x03:\x03:\x03:\x05:\u0227\n:\x03;\x03;\x07;\u022B\n;\f" +
		";\x0E;\u022E\v;\x03<\x03<\x03<\x03<\x07<\u0234\n<\f<\x0E<\u0237\v<\x03" +
		"<\x03<\x03<\x03<\x03<\x07<\u023E\n<\f<\x0E<\u0241\v<\x03<\x05<\u0244\n" +
		"<\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03>\x03>\x03>\x07>\u0252" +
		"\n>\f>\x0E>\u0255\v>\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03" +
		"?\x03?\x03?\x03?\x05?\u0264\n?\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
		"@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
		"@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
		"@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
		"@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
		"@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
		"@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
		"@\x03@\x03@\x05@\u02C4\n@\x03A\x03A\x07A\u02C8\nA\fA\x0EA\u02CB\vA\x03" +
		"B\x06B\u02CE\nB\rB\x0EB\u02CF\x03B\x03B\x03C\x03C\x03C\x03C\x07C\u02D8" +
		"\nC\fC\x0EC\u02DB\vC\x03C\x03C\x03C\x03C\x03C\x03D\x03D\x03D\x03D\x07" +
		"D\u02E6\nD\fD\x0ED\u02E9\vD\x03D\x03D\x05\u0235\u023F\u02D9\x02\x02E\x03" +
		"\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t" +
		"\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02" +
		"\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17" +
		"-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F" +
		"=\x02 ?\x02!A\x02\"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S" +
		"\x02+U\x02,W\x02-Y\x02.[\x02/]\x020_\x021a\x022c\x023e\x024g\x025i\x02" +
		"6k\x027m\x028o\x029q\x02:s\x02;u\x02<w\x02=y\x02>{\x02?}\x02@\x7F\x02" +
		"A\x81\x02B\x83\x02C\x85\x02D\x87\x02E\x03\x02\x0E\x03\x022;\x03\x02//" +
		"\x04\x02GGgg\x03\x023;\x05\x02\f\f\x0F\x0F$$\x05\x02\f\f\x0F\x0F))\x04" +
		"\x02ZZzz\x05\x022;CHch\x04\x02C\\c|\x06\x022;C\\aac|\x05\x02\v\f\x0E\x0F" +
		"\"\"\x04\x02\f\f\x0F\x0F\x02\u030F\x02\x03\x03\x02\x02\x02\x02\x05\x03" +
		"\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02" +
		"\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02" +
		"\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02" +
		"\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02" +
		"\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02" +
		"\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02" +
		"+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02" +
		"\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02" +
		"\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03" +
		"\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02" +
		"\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02" +
		"M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02" +
		"\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02" +
		"\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02a\x03" +
		"\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02\x02" +
		"\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02m\x03\x02\x02\x02\x02" +
		"o\x03\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02\x02\x02\x02u\x03\x02" +
		"\x02\x02\x02w\x03\x02\x02\x02\x02y\x03\x02\x02\x02\x02{\x03\x02\x02\x02" +
		"\x02}\x03\x02\x02\x02\x02\x7F\x03\x02\x02\x02\x02\x81\x03\x02\x02\x02" +
		"\x02\x83\x03\x02\x02\x02\x02\x85\x03\x02\x02\x02\x02\x87\x03\x02\x02\x02" +
		"\x03\x89\x03\x02\x02\x02\x05\x90\x03\x02\x02\x02\x07\x92\x03\x02\x02\x02" +
		"\t\x9D\x03\x02\x02\x02\v\x9F\x03\x02\x02\x02\r\xA1\x03\x02\x02\x02\x0F" +
		"\xA4\x03\x02\x02\x02\x11\xA6\x03\x02\x02\x02\x13\xA8\x03\x02\x02\x02\x15" +
		"\xAB\x03\x02\x02\x02\x17\xAD\x03\x02\x02\x02\x19\xB6\x03\x02\x02\x02\x1B" +
		"\xB8\x03\x02\x02\x02\x1D\xBA\x03\x02\x02\x02\x1F\xC3\x03\x02\x02\x02!" +
		"\xC5\x03\x02\x02\x02#\xC7\x03\x02\x02\x02%\xC9\x03\x02\x02\x02\'\xD1\x03" +
		"\x02\x02\x02)\xD4\x03\x02\x02\x02+\xD9\x03\x02\x02\x02-\xDD\x03\x02\x02" +
		"\x02/\xDF\x03\x02\x02\x021\xE1\x03\x02\x02\x023\xEC\x03\x02\x02\x025\xF3" +
		"\x03\x02\x02\x027\u0104\x03\x02\x02\x029\u010E\x03\x02\x02\x02;\u0127" +
		"\x03\x02\x02\x02=\u0136\x03\x02\x02\x02?\u0149\x03\x02\x02\x02A\u0159" +
		"\x03\x02\x02\x02C\u0164\x03\x02\x02\x02E\u016C\x03\x02\x02\x02G\u0173" +
		"\x03\x02\x02\x02I\u0175\x03\x02\x02\x02K\u0177\x03\x02\x02\x02M\u0179" +
		"\x03\x02\x02\x02O\u017B\x03\x02\x02\x02Q\u017D\x03\x02\x02\x02S\u017F" +
		"\x03\x02\x02\x02U\u0182\x03\x02\x02\x02W\u0185\x03\x02\x02\x02Y\u0187" +
		"\x03\x02\x02\x02[\u0189\x03\x02\x02\x02]\u018C\x03\x02\x02\x02_\u018F" +
		"\x03\x02\x02\x02a\u0193\x03\x02\x02\x02c\u0198\x03\x02\x02\x02e\u019F" +
		"\x03\x02\x02\x02g\u01A6\x03\x02\x02\x02i\u01AA\x03\x02\x02\x02k\u01B3" +
		"\x03\x02\x02\x02m\u01CC\x03\x02\x02\x02o\u0207\x03\x02\x02\x02q\u020A" +
		"\x03\x02\x02\x02s\u0226\x03\x02\x02\x02u\u0228\x03\x02\x02\x02w\u0243" +
		"\x03\x02\x02\x02y\u0245\x03\x02\x02\x02{\u024E\x03\x02\x02\x02}\u0263" +
		"\x03\x02\x02\x02\x7F\u02C3\x03\x02\x02\x02\x81\u02C5\x03\x02\x02\x02\x83" +
		"\u02CD\x03\x02\x02\x02\x85\u02D3\x03\x02\x02\x02\x87\u02E1\x03\x02\x02" +
		"\x02\x89\x8A\x07r\x02\x02\x8A\x8B\x07t\x02\x02\x8B\x8C\x07c\x02\x02\x8C" +
		"\x8D\x07i\x02\x02\x8D\x8E\x07o\x02\x02\x8E\x8F\x07c\x02\x02\x8F\x04\x03" +
		"\x02\x02\x02\x90\x91\x07=\x02\x02\x91\x06\x03\x02\x02\x02\x92\x93\x07" +
		"e\x02\x02\x93\x94\x07c\x02\x02\x94\x95\x07u\x02\x02\x95\x96\x07j\x02\x02" +
		"\x96\x97\x07u\x02\x02\x97\x98\x07e\x02\x02\x98\x99\x07t\x02\x02\x99\x9A" +
		"\x07k\x02\x02\x9A\x9B\x07r\x02\x02\x9B\x9C\x07v\x02\x02\x9C\b\x03\x02" +
		"\x02\x02\x9D\x9E\x07`\x02\x02\x9E\n\x03\x02\x02\x02\x9F\xA0\x07\x80\x02" +
		"\x02\xA0\f\x03\x02\x02\x02\xA1\xA2\x07@\x02\x02\xA2\xA3\x07?\x02\x02\xA3" +
		"\x0E\x03\x02\x02\x02\xA4\xA5\x07@\x02\x02\xA5\x10\x03\x02\x02\x02\xA6" +
		"\xA7\x07>\x02\x02\xA7\x12\x03\x02\x02\x02\xA8\xA9\x07>\x02\x02\xA9\xAA" +
		"\x07?\x02\x02\xAA\x14\x03\x02\x02\x02\xAB\xAC\x07?\x02\x02\xAC\x16\x03" +
		"\x02\x02\x02\xAD\xAE\x07e\x02\x02\xAE\xAF\x07q\x02\x02\xAF\xB0\x07p\x02" +
		"\x02\xB0\xB1\x07v\x02\x02\xB1\xB2\x07t\x02\x02\xB2\xB3\x07c\x02\x02\xB3" +
		"\xB4\x07e\x02\x02\xB4\xB5\x07v\x02\x02\xB5\x18\x03\x02\x02\x02\xB6\xB7" +
		"\x07}\x02\x02\xB7\x1A\x03\x02\x02\x02\xB8\xB9\x07\x7F\x02\x02\xB9\x1C" +
		"\x03\x02\x02\x02\xBA\xBB\x07h\x02\x02\xBB\xBC\x07w\x02\x02\xBC\xBD\x07" +
		"p\x02\x02\xBD\xBE\x07e\x02\x02\xBE\xBF\x07v\x02\x02\xBF\xC0\x07k\x02\x02" +
		"\xC0\xC1\x07q\x02\x02\xC1\xC2\x07p\x02\x02\xC2\x1E\x03\x02\x02\x02\xC3" +
		"\xC4\x07*\x02\x02\xC4 \x03\x02\x02\x02\xC5\xC6\x07.\x02\x02\xC6\"\x03" +
		"\x02\x02\x02\xC7\xC8\x07+\x02\x02\xC8$\x03\x02\x02\x02\xC9\xCA\x07t\x02" +
		"\x02\xCA\xCB\x07g\x02\x02\xCB\xCC\x07s\x02\x02\xCC\xCD\x07w\x02\x02\xCD" +
		"\xCE\x07k\x02\x02\xCE\xCF\x07t\x02\x02\xCF\xD0\x07g\x02\x02\xD0&\x03\x02" +
		"\x02\x02\xD1\xD2\x07k\x02\x02\xD2\xD3\x07h\x02\x02\xD3(\x03\x02\x02\x02" +
		"\xD4\xD5\x07g\x02\x02\xD5\xD6\x07n\x02\x02\xD6\xD7\x07u\x02\x02\xD7\xD8" +
		"\x07g\x02\x02\xD8*\x03\x02\x02\x02\xD9\xDA\x07p\x02\x02\xDA\xDB\x07g\x02" +
		"\x02\xDB\xDC\x07y\x02\x02\xDC,\x03\x02\x02\x02\xDD\xDE\x07]\x02\x02\xDE" +
		".\x03\x02\x02\x02\xDF\xE0\x07_\x02\x02\xE00\x03\x02\x02\x02\xE1\xE2\x07" +
		"v\x02\x02\xE2\xE3\x07z\x02\x02\xE3\xE4\x070\x02\x02\xE4\xE5\x07q\x02\x02" +
		"\xE5\xE6\x07w\x02\x02\xE6\xE7\x07v\x02\x02\xE7\xE8\x07r\x02\x02\xE8\xE9" +
		"\x07w\x02\x02\xE9\xEA\x07v\x02\x02\xEA\xEB\x07u\x02\x02\xEB2\x03\x02\x02" +
		"\x02\xEC\xED\x070\x02\x02\xED\xEE\x07x\x02\x02\xEE\xEF\x07c\x02\x02\xEF" +
		"\xF0\x07n\x02\x02\xF0\xF1\x07w\x02\x02\xF1\xF2\x07g\x02\x02\xF24\x03\x02" +
		"\x02\x02\xF3\xF4\x070\x02\x02\xF4\xF5\x07n\x02\x02\xF5\xF6\x07q\x02\x02" +
		"\xF6\xF7\x07e\x02\x02\xF7\xF8\x07m\x02\x02\xF8\xF9\x07k\x02\x02\xF9\xFA" +
		"\x07p\x02\x02\xFA\xFB\x07i\x02\x02\xFB\xFC\x07D\x02\x02\xFC\xFD\x07{\x02" +
		"\x02\xFD\xFE\x07v\x02\x02\xFE\xFF\x07g\x02\x02\xFF\u0100\x07e\x02\x02" +
		"\u0100\u0101\x07q\x02\x02\u0101\u0102\x07f\x02\x02\u0102\u0103\x07g\x02" +
		"\x02\u01036\x03\x02\x02\x02\u0104\u0105\x07v\x02\x02\u0105\u0106\x07z" +
		"\x02\x02\u0106\u0107\x070\x02\x02\u0107\u0108\x07k\x02\x02\u0108\u0109" +
		"\x07p\x02\x02\u0109\u010A\x07r\x02\x02\u010A\u010B\x07w\x02\x02\u010B" +
		"\u010C\x07v\x02\x02\u010C\u010D\x07u\x02\x02\u010D8\x03\x02\x02\x02\u010E" +
		"\u010F\x070\x02\x02\u010F\u0110\x07q\x02\x02\u0110\u0111\x07w\x02\x02" +
		"\u0111\u0112\x07v\x02\x02\u0112\u0113\x07r\x02\x02\u0113\u0114\x07q\x02" +
		"\x02\u0114\u0115\x07k\x02\x02\u0115\u0116\x07p\x02\x02\u0116\u0117\x07" +
		"v\x02\x02\u0117\u0118\x07V\x02\x02\u0118\u0119\x07t\x02\x02\u0119\u011A" +
		"\x07c\x02\x02\u011A\u011B\x07p\x02\x02\u011B\u011C\x07u\x02\x02\u011C" +
		"\u011D\x07c\x02\x02\u011D\u011E\x07e\x02\x02\u011E\u011F\x07v\x02\x02" +
		"\u011F\u0120\x07k\x02\x02\u0120\u0121\x07q\x02\x02\u0121\u0122\x07p\x02" +
		"\x02\u0122\u0123\x07J\x02\x02\u0123\u0124\x07c\x02\x02\u0124\u0125\x07" +
		"u\x02\x02\u0125\u0126\x07j\x02\x02\u0126:\x03\x02\x02\x02\u0127\u0128" +
		"\x070\x02\x02\u0128\u0129\x07q\x02\x02\u0129\u012A\x07w\x02\x02\u012A" +
		"\u012B\x07v\x02\x02\u012B\u012C\x07r\x02\x02\u012C\u012D\x07q\x02\x02" +
		"\u012D\u012E\x07k\x02\x02\u012E\u012F\x07p\x02\x02\u012F\u0130\x07v\x02" +
		"\x02\u0130\u0131\x07K\x02\x02\u0131\u0132\x07p\x02\x02\u0132\u0133\x07" +
		"f\x02\x02\u0133\u0134\x07g\x02\x02\u0134\u0135\x07z\x02\x02\u0135<\x03" +
		"\x02\x02\x02\u0136\u0137\x070\x02\x02\u0137\u0138\x07w\x02\x02\u0138\u0139" +
		"\x07p\x02\x02\u0139\u013A\x07n\x02\x02\u013A\u013B\x07q\x02\x02\u013B" +
		"\u013C\x07e\x02\x02\u013C\u013D\x07m\x02\x02\u013D\u013E\x07k\x02\x02" +
		"\u013E\u013F\x07p\x02\x02\u013F\u0140\x07i\x02\x02\u0140\u0141\x07D\x02" +
		"\x02\u0141\u0142\x07{\x02\x02\u0142\u0143\x07v\x02\x02\u0143\u0144\x07" +
		"g\x02\x02\u0144\u0145\x07e\x02\x02\u0145\u0146\x07q\x02\x02\u0146\u0147" +
		"\x07f\x02\x02\u0147\u0148\x07g\x02\x02\u0148>\x03\x02\x02\x02\u0149\u014A" +
		"\x070\x02\x02\u014A\u014B\x07u\x02\x02\u014B\u014C\x07g\x02\x02\u014C" +
		"\u014D\x07s\x02\x02\u014D\u014E\x07w\x02\x02\u014E\u014F\x07g\x02\x02" +
		"\u014F\u0150\x07p\x02\x02\u0150\u0151\x07e\x02\x02\u0151\u0152\x07g\x02" +
		"\x02\u0152\u0153\x07P\x02\x02\u0153\u0154\x07w\x02\x02\u0154\u0155\x07" +
		"o\x02\x02\u0155\u0156\x07d\x02\x02\u0156\u0157\x07g\x02\x02\u0157\u0158" +
		"\x07t\x02\x02\u0158@\x03\x02\x02\x02\u0159\u015A\x070\x02\x02\u015A\u015B" +
		"\x07t\x02\x02\u015B\u015C\x07g\x02\x02\u015C\u015D\x07x\x02\x02\u015D" +
		"\u015E\x07g\x02\x02\u015E\u015F\x07t\x02\x02\u015F\u0160\x07u\x02\x02" +
		"\u0160\u0161\x07g\x02\x02\u0161\u0162\x07*\x02\x02\u0162\u0163\x07+\x02" +
		"\x02\u0163B\x03\x02\x02\x02\u0164\u0165\x070\x02\x02\u0165\u0166\x07n" +
		"\x02\x02\u0166\u0167\x07g\x02\x02\u0167\u0168\x07p\x02\x02\u0168\u0169" +
		"\x07i\x02\x02\u0169\u016A\x07v\x02\x02\u016A\u016B\x07j\x02\x02\u016B" +
		"D\x03\x02\x02\x02\u016C\u016D\x070\x02\x02\u016D\u016E\x07u\x02\x02\u016E" +
		"\u016F\x07r\x02\x02\u016F\u0170\x07n\x02\x02\u0170\u0171\x07k\x02\x02" +
		"\u0171\u0172\x07v\x02\x02\u0172F\x03\x02\x02\x02\u0173\u0174\x07#\x02" +
		"\x02\u0174H\x03\x02\x02\x02\u0175\u0176\x07/\x02\x02\u0176J\x03\x02\x02" +
		"\x02\u0177\u0178\x07,\x02\x02\u0178L\x03\x02\x02\x02\u0179\u017A\x071" +
		"\x02\x02\u017AN\x03\x02\x02\x02\u017B\u017C\x07\'\x02\x02\u017CP\x03\x02" +
		"\x02\x02\u017D\u017E\x07-\x02\x02\u017ER\x03\x02\x02\x02\u017F\u0180\x07" +
		"?\x02\x02\u0180\u0181\x07?\x02\x02\u0181T\x03\x02\x02\x02\u0182\u0183" +
		"\x07#\x02\x02\u0183\u0184\x07?\x02\x02\u0184V\x03\x02\x02\x02\u0185\u0186" +
		"\x07(\x02\x02\u0186X\x03\x02\x02\x02\u0187\u0188\x07~\x02\x02\u0188Z\x03" +
		"\x02\x02\x02\u0189\u018A\x07(\x02\x02\u018A\u018B\x07(\x02\x02\u018B\\" +
		"\x03\x02\x02\x02\u018C\u018D\x07~\x02\x02\u018D\u018E\x07~\x02\x02\u018E" +
		"^\x03\x02\x02\x02\u018F\u0190\x07k\x02\x02\u0190\u0191\x07p\x02\x02\u0191" +
		"\u0192\x07v\x02\x02\u0192`\x03\x02\x02\x02\u0193\u0194\x07d\x02\x02\u0194" +
		"\u0195\x07q\x02\x02\u0195\u0196\x07q\x02\x02\u0196\u0197\x07n\x02\x02" +
		"\u0197b\x03\x02\x02\x02\u0198\u0199\x07u\x02\x02\u0199\u019A\x07v\x02" +
		"\x02\u019A\u019B\x07t\x02\x02\u019B\u019C\x07k\x02\x02\u019C\u019D\x07" +
		"p\x02\x02\u019D\u019E\x07i\x02\x02\u019Ed\x03\x02\x02\x02\u019F\u01A0" +
		"\x07r\x02\x02\u01A0\u01A1\x07w\x02\x02\u01A1\u01A2\x07d\x02\x02\u01A2" +
		"\u01A3\x07m\x02\x02\u01A3\u01A4\x07g\x02\x02\u01A4\u01A5\x07{\x02\x02" +
		"\u01A5f\x03\x02\x02\x02\u01A6\u01A7\x07u\x02\x02\u01A7\u01A8\x07k\x02" +
		"\x02\u01A8\u01A9\x07i\x02\x02\u01A9h\x03\x02\x02\x02\u01AA\u01AB\x07f" +
		"\x02\x02\u01AB\u01AC\x07c\x02\x02\u01AC\u01AD\x07v\x02\x02\u01AD\u01AE" +
		"\x07c\x02\x02\u01AE\u01AF\x07u\x02\x02\u01AF\u01B0\x07k\x02\x02\u01B0" +
		"\u01B1\x07i\x02\x02\u01B1j\x03\x02\x02\x02\u01B2\u01B4\t\x02\x02\x02\u01B3" +
		"\u01B2\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5\u01B3\x03\x02" +
		"\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7" +
		"\u01B9\x070\x02\x02\u01B8\u01BA\t\x02\x02\x02\u01B9\u01B8\x03\x02\x02" +
		"\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01B9\x03\x02\x02\x02\u01BB\u01BC" +
		"\x03\x02\x02\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD\u01BF\x070\x02\x02" +
		"\u01BE\u01C0\t\x02\x02\x02\u01BF\u01BE\x03\x02\x02\x02\u01C0\u01C1\x03" +
		"\x02\x02\x02\u01C1\u01BF\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2" +
		"l\x03\x02\x02\x02\u01C3\u01C4\x07v\x02\x02\u01C4\u01C5\x07t\x02\x02\u01C5" +
		"\u01C6\x07w\x02\x02\u01C6\u01CD\x07g\x02\x02\u01C7\u01C8\x07h\x02\x02" +
		"\u01C8\u01C9\x07c\x02\x02\u01C9\u01CA\x07n\x02\x02\u01CA\u01CB\x07u\x02" +
		"\x02\u01CB\u01CD\x07g\x02\x02\u01CC\u01C3\x03\x02\x02\x02\u01CC\u01C7" +
		"\x03\x02\x02\x02\u01CDn\x03\x02\x02\x02\u01CE\u01CF\x07u\x02\x02\u01CF" +
		"\u01D0\x07c\x02\x02\u01D0\u01D1\x07v\x02\x02\u01D1\u01D2\x07q\x02\x02" +
		"\u01D2\u01D3\x07u\x02\x02\u01D3\u01D4\x07j\x02\x02\u01D4\u01D5\x07k\x02" +
		"\x02\u01D5\u0208\x07u\x02\x02\u01D6\u01D7\x07u\x02\x02\u01D7\u01D8\x07" +
		"c\x02\x02\u01D8\u01D9\x07v\x02\x02\u01D9\u0208\x07u\x02\x02\u01DA\u01DB" +
		"\x07h\x02\x02\u01DB\u01DC\x07k\x02\x02\u01DC\u01DD\x07p\x02\x02\u01DD" +
		"\u01DE\x07p\x02\x02\u01DE\u01DF\x07g\x02\x02\u01DF\u0208\x07{\x02\x02" +
		"\u01E0\u01E1\x07d\x02\x02\u01E1\u01E2\x07k\x02\x02\u01E2\u01E3\x07v\x02" +
		"\x02\u01E3\u0208\x07u\x02\x02\u01E4\u01E5\x07d\x02\x02\u01E5\u01E6\x07" +
		"k\x02\x02\u01E6\u01E7\x07v\x02\x02\u01E7\u01E8\x07e\x02\x02\u01E8\u01E9" +
		"\x07q\x02\x02\u01E9\u01EA\x07k\x02\x02\u01EA\u0208\x07p\x02\x02\u01EB" +
		"\u01EC\x07u\x02\x02\u01EC\u01ED\x07g\x02\x02\u01ED\u01EE\x07e\x02\x02" +
		"\u01EE\u01EF\x07q\x02\x02\u01EF\u01F0\x07p\x02\x02\u01F0\u01F1\x07f\x02" +
		"\x02\u01F1\u0208\x07u\x02\x02\u01F2\u01F3\x07o\x02\x02\u01F3\u01F4\x07" +
		"k\x02\x02\u01F4\u01F5\x07p\x02\x02\u01F5\u01F6\x07w\x02\x02\u01F6\u01F7" +
		"\x07v\x02\x02\u01F7\u01F8\x07g\x02\x02\u01F8\u0208\x07u\x02\x02\u01F9" +
		"\u01FA\x07j\x02\x02\u01FA\u01FB\x07q\x02\x02\u01FB\u01FC\x07w\x02\x02" +
		"\u01FC\u01FD\x07t\x02\x02\u01FD\u0208\x07u\x02\x02\u01FE\u01FF\x07f\x02" +
		"\x02\u01FF\u0200\x07c\x02\x02\u0200\u0201\x07{\x02\x02\u0201\u0208\x07" +
		"u\x02\x02\u0202\u0203\x07y\x02\x02\u0203\u0204\x07g\x02\x02\u0204\u0205" +
		"\x07g\x02\x02\u0205\u0206\x07m\x02\x02\u0206\u0208\x07u\x02\x02\u0207" +
		"\u01CE\x03\x02\x02\x02\u0207\u01D6\x03\x02\x02\x02\u0207\u01DA\x03\x02" +
		"\x02\x02\u0207\u01E0\x03\x02\x02\x02\u0207\u01E4\x03\x02\x02\x02\u0207" +
		"\u01EB\x03\x02\x02\x02\u0207\u01F2\x03\x02\x02\x02\u0207\u01F9\x03\x02" +
		"\x02\x02\u0207\u01FE";
	private static readonly _serializedATNSegment1: string =
		"\x03\x02\x02\x02\u0207\u0202\x03\x02\x02\x02\u0208p\x03\x02\x02\x02\u0209" +
		"\u020B\t\x03\x02\x02\u020A\u0209\x03\x02\x02\x02\u020A\u020B\x03\x02\x02" +
		"\x02\u020B\u020D\x03\x02\x02\x02\u020C\u020E\t\x02\x02\x02\u020D\u020C" +
		"\x03\x02\x02\x02\u020E\u020F\x03\x02\x02\x02\u020F\u020D\x03\x02\x02\x02" +
		"\u020F\u0210\x03\x02\x02\x02\u0210\u0217\x03\x02\x02\x02\u0211\u0213\t" +
		"\x04\x02\x02\u0212\u0214\t\x02\x02\x02\u0213\u0212\x03\x02\x02\x02\u0214" +
		"\u0215\x03\x02\x02\x02\u0215\u0213\x03\x02\x02\x02\u0215\u0216\x03\x02" +
		"\x02\x02\u0216\u0218\x03\x02\x02\x02\u0217\u0211\x03\x02\x02\x02\u0217" +
		"\u0218\x03\x02\x02\x02\u0218r\x03\x02\x02\x02\u0219\u021A\x07d\x02\x02" +
		"\u021A\u021B\x07{\x02\x02\u021B\u021C\x07v\x02\x02\u021C\u021D\x07g\x02" +
		"\x02\u021D\u021E\x07u\x02\x02\u021E\u0220\x03\x02\x02\x02\u021F\u0221" +
		"\x05u;\x02\u0220\u021F\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02\u0221" +
		"\u0227\x03\x02\x02\x02\u0222\u0223\x07d\x02\x02\u0223\u0224\x07{\x02\x02" +
		"\u0224\u0225\x07v\x02\x02\u0225\u0227\x07g\x02\x02\u0226\u0219\x03\x02" +
		"\x02\x02\u0226\u0222\x03\x02\x02\x02\u0227t\x03\x02\x02\x02\u0228\u022C" +
		"\t\x05\x02\x02\u0229\u022B\t\x02\x02\x02\u022A\u0229\x03\x02\x02\x02\u022B" +
		"\u022E\x03\x02\x02\x02\u022C\u022A\x03\x02\x02\x02\u022C\u022D\x03\x02" +
		"\x02\x02\u022Dv\x03\x02\x02\x02\u022E\u022C\x03\x02\x02\x02\u022F\u0235" +
		"\x07$\x02\x02\u0230\u0231\x07^\x02\x02\u0231\u0234\x07$\x02\x02\u0232" +
		"\u0234\n\x06\x02\x02\u0233\u0230\x03\x02\x02\x02\u0233\u0232\x03\x02\x02" +
		"\x02\u0234\u0237\x03\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u0235\u0233" +
		"\x03\x02\x02\x02\u0236\u0238\x03\x02\x02\x02\u0237\u0235\x03\x02\x02\x02" +
		"\u0238\u0244\x07$\x02\x02\u0239\u023F\x07)\x02\x02\u023A\u023B\x07^\x02" +
		"\x02\u023B\u023E\x07)\x02\x02\u023C\u023E\n\x07\x02\x02\u023D\u023A\x03" +
		"\x02\x02\x02\u023D\u023C\x03\x02\x02\x02\u023E\u0241\x03\x02\x02\x02\u023F" +
		"\u0240\x03\x02\x02\x02\u023F\u023D\x03\x02\x02\x02\u0240\u0242\x03\x02" +
		"\x02\x02\u0241\u023F\x03\x02\x02\x02\u0242\u0244\x07)\x02\x02\u0243\u022F" +
		"\x03\x02\x02\x02\u0243\u0239\x03\x02\x02\x02\u0244x\x03\x02\x02\x02\u0245" +
		"\u0246\x07f\x02\x02\u0246\u0247\x07c\x02\x02\u0247\u0248\x07v\x02\x02" +
		"\u0248\u0249\x07g\x02\x02\u0249\u024A\x07*\x02\x02\u024A\u024B\x03\x02" +
		"\x02\x02\u024B\u024C\x05w<\x02\u024C\u024D\x07+\x02\x02\u024Dz\x03\x02" +
		"\x02\x02\u024E\u024F\x072\x02\x02\u024F\u0253\t\b\x02\x02\u0250\u0252" +
		"\t\t\x02\x02\u0251\u0250\x03\x02\x02\x02\u0252\u0255\x03\x02\x02\x02\u0253" +
		"\u0251\x03\x02\x02\x02\u0253\u0254\x03\x02\x02\x02\u0254|\x03\x02\x02" +
		"\x02\u0255\u0253\x03\x02\x02\x02\u0256\u0257\x07v\x02\x02\u0257\u0258" +
		"\x07z\x02\x02\u0258\u0259\x070\x02\x02\u0259\u025A\x07c\x02\x02\u025A" +
		"\u025B\x07i\x02\x02\u025B\u0264\x07g\x02\x02\u025C\u025D\x07v\x02\x02" +
		"\u025D\u025E\x07z\x02\x02\u025E\u025F\x070\x02\x02\u025F\u0260\x07v\x02" +
		"\x02\u0260\u0261\x07k\x02\x02\u0261\u0262\x07o\x02\x02\u0262\u0264\x07" +
		"g\x02\x02\u0263\u0256\x03\x02\x02\x02\u0263\u025C\x03\x02\x02\x02\u0264" +
		"~\x03\x02\x02\x02\u0265\u0266\x07v\x02\x02\u0266\u0267\x07j\x02\x02\u0267" +
		"\u0268\x07k\x02\x02\u0268\u0269\x07u\x02\x02\u0269\u026A\x070\x02\x02" +
		"\u026A\u026B\x07c\x02\x02\u026B\u026C\x07e\x02\x02\u026C\u026D\x07v\x02" +
		"\x02\u026D\u026E\x07k\x02\x02\u026E\u026F\x07x\x02\x02\u026F\u0270\x07" +
		"g\x02\x02\u0270\u0271\x07K\x02\x02\u0271\u0272\x07p\x02\x02\u0272\u0273" +
		"\x07r\x02\x02\u0273\u0274\x07w\x02\x02\u0274\u0275\x07v\x02\x02\u0275" +
		"\u0276\x07K\x02\x02\u0276\u0277\x07p\x02\x02\u0277\u0278\x07f\x02\x02" +
		"\u0278\u0279\x07g\x02\x02\u0279\u02C4\x07z\x02\x02\u027A\u027B\x07v\x02" +
		"\x02\u027B\u027C\x07j\x02\x02\u027C\u027D\x07k\x02\x02\u027D\u027E\x07" +
		"u\x02\x02\u027E\u027F\x070\x02\x02\u027F\u0280\x07c\x02\x02\u0280\u0281" +
		"\x07e\x02\x02\u0281\u0282\x07v\x02\x02\u0282\u0283\x07k\x02\x02\u0283" +
		"\u0284\x07x\x02\x02\u0284\u0285\x07g\x02\x02\u0285\u0286\x07D\x02\x02" +
		"\u0286\u0287\x07{\x02\x02\u0287\u0288\x07v\x02\x02\u0288\u0289\x07g\x02" +
		"\x02\u0289\u028A\x07e\x02\x02\u028A\u028B\x07q\x02\x02\u028B\u028C\x07" +
		"f\x02\x02\u028C\u02C4\x07g\x02\x02\u028D\u028E\x07v\x02\x02\u028E\u028F" +
		"\x07z\x02\x02\u028F\u0290\x070\x02\x02\u0290\u0291\x07k\x02\x02\u0291" +
		"\u0292\x07p\x02\x02\u0292\u0293\x07r\x02\x02\u0293\u0294\x07w\x02\x02" +
		"\u0294\u0295\x07v\x02\x02\u0295\u0296\x07u\x02\x02\u0296\u0297\x070\x02" +
		"\x02\u0297\u0298\x07n\x02\x02\u0298\u0299\x07g\x02\x02\u0299\u029A\x07" +
		"p\x02\x02\u029A\u029B\x07i\x02\x02\u029B\u029C\x07v\x02\x02\u029C\u02C4" +
		"\x07j\x02\x02\u029D\u029E\x07v\x02\x02\u029E\u029F\x07z\x02\x02\u029F" +
		"\u02A0\x070\x02\x02\u02A0\u02A1\x07q\x02\x02\u02A1\u02A2\x07w\x02\x02" +
		"\u02A2\u02A3\x07v\x02\x02\u02A3\u02A4\x07r\x02\x02\u02A4\u02A5\x07w\x02" +
		"\x02\u02A5\u02A6\x07v\x02\x02\u02A6\u02A7\x07u\x02\x02\u02A7\u02A8\x07" +
		"0\x02\x02\u02A8\u02A9\x07n\x02\x02\u02A9\u02AA\x07g\x02\x02\u02AA\u02AB" +
		"\x07p\x02\x02\u02AB\u02AC\x07i\x02\x02\u02AC\u02AD\x07v\x02\x02\u02AD" +
		"\u02C4\x07j\x02\x02\u02AE\u02AF\x07v\x02\x02\u02AF\u02B0\x07z\x02\x02" +
		"\u02B0\u02B1\x070\x02\x02\u02B1\u02B2\x07x\x02\x02\u02B2\u02B3\x07g\x02" +
		"\x02\u02B3\u02B4\x07t\x02\x02\u02B4\u02B5\x07u\x02\x02\u02B5\u02B6\x07" +
		"k\x02\x02\u02B6\u02B7\x07q\x02\x02\u02B7\u02C4\x07p\x02\x02\u02B8\u02B9" +
		"\x07v\x02\x02\u02B9\u02BA\x07z\x02\x02\u02BA\u02BB\x070\x02\x02\u02BB" +
		"\u02BC\x07n\x02\x02\u02BC\u02BD\x07q\x02\x02\u02BD\u02BE\x07e\x02\x02" +
		"\u02BE\u02BF\x07m\x02\x02\u02BF\u02C0\x07v\x02\x02\u02C0\u02C1\x07k\x02" +
		"\x02\u02C1\u02C2\x07o\x02\x02\u02C2\u02C4\x07g\x02\x02\u02C3\u0265\x03" +
		"\x02\x02\x02\u02C3\u027A\x03\x02\x02\x02\u02C3\u028D\x03\x02\x02\x02\u02C3" +
		"\u029D\x03\x02\x02\x02\u02C3\u02AE\x03\x02\x02\x02\u02C3\u02B8\x03\x02" +
		"\x02\x02\u02C4\x80\x03\x02\x02\x02\u02C5\u02C9\t\n\x02\x02\u02C6\u02C8" +
		"\t\v\x02\x02\u02C7\u02C6\x03\x02\x02\x02\u02C8\u02CB\x03\x02\x02\x02\u02C9" +
		"\u02C7\x03\x02\x02\x02\u02C9\u02CA\x03\x02\x02\x02\u02CA\x82\x03\x02\x02" +
		"\x02\u02CB\u02C9\x03\x02\x02\x02\u02CC\u02CE\t\f\x02\x02\u02CD\u02CC\x03" +
		"\x02\x02\x02\u02CE\u02CF\x03\x02\x02\x02\u02CF\u02CD\x03\x02\x02\x02\u02CF" +
		"\u02D0\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1\u02D2\bB\x02" +
		"\x02\u02D2\x84\x03\x02\x02\x02\u02D3\u02D4\x071\x02\x02\u02D4\u02D5\x07" +
		",\x02\x02\u02D5\u02D9\x03\x02\x02\x02\u02D6\u02D8\v\x02\x02\x02\u02D7" +
		"\u02D6\x03\x02\x02\x02\u02D8\u02DB\x03\x02\x02\x02\u02D9\u02DA\x03\x02" +
		"\x02\x02\u02D9\u02D7\x03\x02\x02\x02\u02DA\u02DC\x03\x02\x02\x02\u02DB" +
		"\u02D9\x03\x02\x02\x02\u02DC\u02DD\x07,\x02\x02\u02DD\u02DE\x071\x02\x02" +
		"\u02DE\u02DF\x03\x02\x02\x02\u02DF\u02E0\bC\x03\x02\u02E0\x86\x03\x02" +
		"\x02\x02\u02E1\u02E2\x071\x02\x02\u02E2\u02E3\x071\x02\x02\u02E3\u02E7" +
		"\x03\x02\x02\x02\u02E4\u02E6\n\r\x02\x02\u02E5\u02E4\x03\x02\x02\x02\u02E6" +
		"\u02E9\x03\x02\x02\x02\u02E7\u02E5\x03\x02\x02\x02\u02E7\u02E8\x03\x02" +
		"\x02\x02\u02E8\u02EA\x03\x02\x02\x02\u02E9\u02E7\x03\x02\x02\x02\u02EA" +
		"\u02EB\bD\x03\x02\u02EB\x88\x03\x02\x02\x02\x1B\x02\u01B5\u01BB\u01C1" +
		"\u01CC\u0207\u020A\u020F\u0215\u0217\u0220\u0226\u022C\u0233\u0235\u023D" +
		"\u023F\u0243\u0253\u0263\u02C3\u02C9\u02CF\u02D9\u02E7\x04\b\x02\x02\x02" +
		"\x03\x02";
	public static readonly _serializedATN: string = Utils.join(
		[
			CashScriptLexer._serializedATNSegment0,
			CashScriptLexer._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CashScriptLexer.__ATN) {
			CashScriptLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CashScriptLexer._serializedATN));
		}

		return CashScriptLexer.__ATN;
	}

}


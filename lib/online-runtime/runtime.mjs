import { Buffer as Buffer$1 } from "node:buffer";
import vm from "node:vm";
import { createHash, randomUUID } from "node:crypto";
import { inflateSync } from "node:zlib";

//#region rolldown:runtime
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
	return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (all) => {
	let target = {};
	for (var name$1 in all) __defProp(target, name$1, {
		get: all[name$1],
		enumerable: true
	});
	return target;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i$1 = 0, n = keys.length, key$2; i$1 < n; i$1++) {
		key$2 = keys[i$1];
		if (!__hasOwnProp.call(to, key$2) && key$2 !== except) __defProp(to, key$2, {
			get: ((k) => from[k]).bind(null, key$2),
			enumerable: !(desc = __getOwnPropDesc(from, key$2)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion
//#region node_modules/.pnpm/cheerio@1.2.0/node_modules/cheerio/dist/esm/options.js
const defaultOpts$1 = { _useHtmlParser2: false };
/**
* Flatten the options for Cheerio.
*
* This will set `_useHtmlParser2` to true if `xml` is set to true.
*
* @param options - The options to flatten.
* @param baseOptions - The base options to use.
* @returns The flattened options.
*/
function flattenOptions(options, baseOptions) {
	if (!options) return baseOptions !== null && baseOptions !== void 0 ? baseOptions : defaultOpts$1;
	const opts = {
		_useHtmlParser2: !!options.xmlMode,
		...baseOptions,
		...options
	};
	if (options.xml) {
		opts._useHtmlParser2 = true;
		opts.xmlMode = true;
		if (options.xml !== true) Object.assign(opts, options.xml);
	} else if (options.xmlMode) opts._useHtmlParser2 = true;
	return opts;
}

//#endregion
//#region node_modules/.pnpm/domelementtype@2.3.0/node_modules/domelementtype/lib/esm/index.js
/** Types of elements found in htmlparser2's DOM */
var ElementType;
(function(ElementType$1) {
	/** Type for the root element of a document */
	ElementType$1["Root"] = "root";
	/** Type for Text */
	ElementType$1["Text"] = "text";
	/** Type for <? ... ?> */
	ElementType$1["Directive"] = "directive";
	/** Type for <!-- ... --> */
	ElementType$1["Comment"] = "comment";
	/** Type for <script> tags */
	ElementType$1["Script"] = "script";
	/** Type for <style> tags */
	ElementType$1["Style"] = "style";
	/** Type for Any tag */
	ElementType$1["Tag"] = "tag";
	/** Type for <![CDATA[ ... ]]> */
	ElementType$1["CDATA"] = "cdata";
	/** Type for <!doctype ...> */
	ElementType$1["Doctype"] = "doctype";
})(ElementType || (ElementType = {}));
/**
* Tests whether an element is a tag or not.
*
* @param elem Element to test
*/
function isTag$1(elem) {
	return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
}
/** Type for the root element of a document */
const Root = ElementType.Root;
/** Type for Text */
const Text$2 = ElementType.Text;
/** Type for <? ... ?> */
const Directive = ElementType.Directive;
/** Type for <!-- ... --> */
const Comment$3 = ElementType.Comment;
/** Type for <script> tags */
const Script = ElementType.Script;
/** Type for <style> tags */
const Style = ElementType.Style;
/** Type for Any tag */
const Tag = ElementType.Tag;
/** Type for <![CDATA[ ... ]]> */
const CDATA$1 = ElementType.CDATA;
/** Type for <!doctype ...> */
const Doctype = ElementType.Doctype;

//#endregion
//#region node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/node.js
/**
* This object will be used as the prototype for Nodes when creating a
* DOM-Level-1-compliant structure.
*/
var Node$1 = class {
	constructor() {
		/** Parent of the node */
		this.parent = null;
		/** Previous sibling */
		this.prev = null;
		/** Next sibling */
		this.next = null;
		/** The start index of the node. Requires `withStartIndices` on the handler to be `true. */
		this.startIndex = null;
		/** The end index of the node. Requires `withEndIndices` on the handler to be `true. */
		this.endIndex = null;
	}
	/**
	* Same as {@link parent}.
	* [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	*/
	get parentNode() {
		return this.parent;
	}
	set parentNode(parent$1) {
		this.parent = parent$1;
	}
	/**
	* Same as {@link prev}.
	* [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	*/
	get previousSibling() {
		return this.prev;
	}
	set previousSibling(prev$1) {
		this.prev = prev$1;
	}
	/**
	* Same as {@link next}.
	* [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	*/
	get nextSibling() {
		return this.next;
	}
	set nextSibling(next$1) {
		this.next = next$1;
	}
	/**
	* Clone this node, and optionally its children.
	*
	* @param recursive Clone child nodes as well.
	* @returns A clone of the node.
	*/
	cloneNode(recursive$1 = false) {
		return cloneNode$1(this, recursive$1);
	}
};
/**
* A node that contains some data.
*/
var DataNode = class extends Node$1 {
	/**
	* @param data The content of the data node
	*/
	constructor(data$1) {
		super();
		this.data = data$1;
	}
	/**
	* Same as {@link data}.
	* [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	*/
	get nodeValue() {
		return this.data;
	}
	set nodeValue(data$1) {
		this.data = data$1;
	}
};
/**
* Text within the document.
*/
var Text$1 = class extends DataNode {
	constructor() {
		super(...arguments);
		this.type = ElementType.Text;
	}
	get nodeType() {
		return 3;
	}
};
/**
* Comments within the document.
*/
var Comment$2 = class extends DataNode {
	constructor() {
		super(...arguments);
		this.type = ElementType.Comment;
	}
	get nodeType() {
		return 8;
	}
};
/**
* Processing instructions, including doc types.
*/
var ProcessingInstruction$1 = class extends DataNode {
	constructor(name$1, data$1) {
		super(data$1);
		this.name = name$1;
		this.type = ElementType.Directive;
	}
	get nodeType() {
		return 1;
	}
};
/**
* A `Node` that can have children.
*/
var NodeWithChildren = class extends Node$1 {
	/**
	* @param children Children of the node. Only certain node types can have children.
	*/
	constructor(children$1) {
		super();
		this.children = children$1;
	}
	/** First child of the node. */
	get firstChild() {
		var _a$4;
		return (_a$4 = this.children[0]) !== null && _a$4 !== void 0 ? _a$4 : null;
	}
	/** Last child of the node. */
	get lastChild() {
		return this.children.length > 0 ? this.children[this.children.length - 1] : null;
	}
	/**
	* Same as {@link children}.
	* [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	*/
	get childNodes() {
		return this.children;
	}
	set childNodes(children$1) {
		this.children = children$1;
	}
};
var CDATA = class extends NodeWithChildren {
	constructor() {
		super(...arguments);
		this.type = ElementType.CDATA;
	}
	get nodeType() {
		return 4;
	}
};
/**
* The root node of the document.
*/
var Document$1 = class extends NodeWithChildren {
	constructor() {
		super(...arguments);
		this.type = ElementType.Root;
	}
	get nodeType() {
		return 9;
	}
};
/**
* An element within the DOM.
*/
var Element$1 = class extends NodeWithChildren {
	/**
	* @param name Name of the tag, eg. `div`, `span`.
	* @param attribs Object mapping attribute names to attribute values.
	* @param children Children of the node.
	*/
	constructor(name$1, attribs, children$1 = [], type = name$1 === "script" ? ElementType.Script : name$1 === "style" ? ElementType.Style : ElementType.Tag) {
		super(children$1);
		this.name = name$1;
		this.attribs = attribs;
		this.type = type;
	}
	get nodeType() {
		return 1;
	}
	/**
	* Same as {@link name}.
	* [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	*/
	get tagName() {
		return this.name;
	}
	set tagName(name$1) {
		this.name = name$1;
	}
	get attributes() {
		return Object.keys(this.attribs).map((name$1) => {
			var _a$4, _b;
			return {
				name: name$1,
				value: this.attribs[name$1],
				namespace: (_a$4 = this["x-attribsNamespace"]) === null || _a$4 === void 0 ? void 0 : _a$4[name$1],
				prefix: (_b = this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name$1]
			};
		});
	}
};
/**
* @param node Node to check.
* @returns `true` if the node is a `Element`, `false` otherwise.
*/
function isTag(node$1) {
	return isTag$1(node$1);
}
/**
* @param node Node to check.
* @returns `true` if the node has the type `CDATA`, `false` otherwise.
*/
function isCDATA(node$1) {
	return node$1.type === ElementType.CDATA;
}
/**
* @param node Node to check.
* @returns `true` if the node has the type `Text`, `false` otherwise.
*/
function isText(node$1) {
	return node$1.type === ElementType.Text;
}
/**
* @param node Node to check.
* @returns `true` if the node has the type `Comment`, `false` otherwise.
*/
function isComment(node$1) {
	return node$1.type === ElementType.Comment;
}
/**
* @param node Node to check.
* @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
*/
function isDirective(node$1) {
	return node$1.type === ElementType.Directive;
}
/**
* @param node Node to check.
* @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
*/
function isDocument(node$1) {
	return node$1.type === ElementType.Root;
}
/**
* @param node Node to check.
* @returns `true` if the node has children, `false` otherwise.
*/
function hasChildren(node$1) {
	return Object.prototype.hasOwnProperty.call(node$1, "children");
}
/**
* Clone a node, and optionally its children.
*
* @param recursive Clone child nodes as well.
* @returns A clone of the node.
*/
function cloneNode$1(node$1, recursive$1 = false) {
	let result;
	if (isText(node$1)) result = new Text$1(node$1.data);
	else if (isComment(node$1)) result = new Comment$2(node$1.data);
	else if (isTag(node$1)) {
		const children$1 = recursive$1 ? cloneChildren(node$1.children) : [];
		const clone$2 = new Element$1(node$1.name, { ...node$1.attribs }, children$1);
		children$1.forEach((child) => child.parent = clone$2);
		if (node$1.namespace != null) clone$2.namespace = node$1.namespace;
		if (node$1["x-attribsNamespace"]) clone$2["x-attribsNamespace"] = { ...node$1["x-attribsNamespace"] };
		if (node$1["x-attribsPrefix"]) clone$2["x-attribsPrefix"] = { ...node$1["x-attribsPrefix"] };
		result = clone$2;
	} else if (isCDATA(node$1)) {
		const children$1 = recursive$1 ? cloneChildren(node$1.children) : [];
		const clone$2 = new CDATA(children$1);
		children$1.forEach((child) => child.parent = clone$2);
		result = clone$2;
	} else if (isDocument(node$1)) {
		const children$1 = recursive$1 ? cloneChildren(node$1.children) : [];
		const clone$2 = new Document$1(children$1);
		children$1.forEach((child) => child.parent = clone$2);
		if (node$1["x-mode"]) clone$2["x-mode"] = node$1["x-mode"];
		result = clone$2;
	} else if (isDirective(node$1)) {
		const instruction = new ProcessingInstruction$1(node$1.name, node$1.data);
		if (node$1["x-name"] != null) {
			instruction["x-name"] = node$1["x-name"];
			instruction["x-publicId"] = node$1["x-publicId"];
			instruction["x-systemId"] = node$1["x-systemId"];
		}
		result = instruction;
	} else throw new Error(`Not implemented yet: ${node$1.type}`);
	result.startIndex = node$1.startIndex;
	result.endIndex = node$1.endIndex;
	if (node$1.sourceCodeLocation != null) result.sourceCodeLocation = node$1.sourceCodeLocation;
	return result;
}
function cloneChildren(childs) {
	const children$1 = childs.map((child) => cloneNode$1(child, true));
	for (let i$1 = 1; i$1 < children$1.length; i$1++) {
		children$1[i$1].prev = children$1[i$1 - 1];
		children$1[i$1 - 1].next = children$1[i$1];
	}
	return children$1;
}

//#endregion
//#region node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/index.js
const defaultOpts = {
	withStartIndices: false,
	withEndIndices: false,
	xmlMode: false
};
var DomHandler = class {
	/**
	* @param callback Called once parsing has completed.
	* @param options Settings for the handler.
	* @param elementCB Callback whenever a tag is closed.
	*/
	constructor(callback, options, elementCB) {
		/** The elements of the DOM */
		this.dom = [];
		/** The root element for the DOM */
		this.root = new Document$1(this.dom);
		/** Indicated whether parsing has been completed. */
		this.done = false;
		/** Stack of open tags. */
		this.tagStack = [this.root];
		/** A data node that is still being written to. */
		this.lastNode = null;
		/** Reference to the parser instance. Used for location information. */
		this.parser = null;
		if (typeof options === "function") {
			elementCB = options;
			options = defaultOpts;
		}
		if (typeof callback === "object") {
			options = callback;
			callback = void 0;
		}
		this.callback = callback !== null && callback !== void 0 ? callback : null;
		this.options = options !== null && options !== void 0 ? options : defaultOpts;
		this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
	}
	onparserinit(parser) {
		this.parser = parser;
	}
	onreset() {
		this.dom = [];
		this.root = new Document$1(this.dom);
		this.done = false;
		this.tagStack = [this.root];
		this.lastNode = null;
		this.parser = null;
	}
	onend() {
		if (this.done) return;
		this.done = true;
		this.parser = null;
		this.handleCallback(null);
	}
	onerror(error$1) {
		this.handleCallback(error$1);
	}
	onclosetag() {
		this.lastNode = null;
		const elem = this.tagStack.pop();
		if (this.options.withEndIndices) elem.endIndex = this.parser.endIndex;
		if (this.elementCB) this.elementCB(elem);
	}
	onopentag(name$1, attribs) {
		const element = new Element$1(name$1, attribs, void 0, this.options.xmlMode ? ElementType.Tag : void 0);
		this.addNode(element);
		this.tagStack.push(element);
	}
	ontext(data$1) {
		const { lastNode } = this;
		if (lastNode && lastNode.type === ElementType.Text) {
			lastNode.data += data$1;
			if (this.options.withEndIndices) lastNode.endIndex = this.parser.endIndex;
		} else {
			const node$1 = new Text$1(data$1);
			this.addNode(node$1);
			this.lastNode = node$1;
		}
	}
	oncomment(data$1) {
		if (this.lastNode && this.lastNode.type === ElementType.Comment) {
			this.lastNode.data += data$1;
			return;
		}
		const node$1 = new Comment$2(data$1);
		this.addNode(node$1);
		this.lastNode = node$1;
	}
	oncommentend() {
		this.lastNode = null;
	}
	oncdatastart() {
		const text$2 = new Text$1("");
		const node$1 = new CDATA([text$2]);
		this.addNode(node$1);
		text$2.parent = node$1;
		this.lastNode = text$2;
	}
	oncdataend() {
		this.lastNode = null;
	}
	onprocessinginstruction(name$1, data$1) {
		const node$1 = new ProcessingInstruction$1(name$1, data$1);
		this.addNode(node$1);
	}
	handleCallback(error$1) {
		if (typeof this.callback === "function") this.callback(error$1, this.dom);
		else if (error$1) throw error$1;
	}
	addNode(node$1) {
		const parent$1 = this.tagStack[this.tagStack.length - 1];
		const previousSibling = parent$1.children[parent$1.children.length - 1];
		if (this.options.withStartIndices) node$1.startIndex = this.parser.startIndex;
		if (this.options.withEndIndices) node$1.endIndex = this.parser.endIndex;
		parent$1.children.push(node$1);
		if (previousSibling) {
			node$1.prev = previousSibling;
			previousSibling.next = node$1;
		}
		node$1.parent = parent$1;
		this.lastNode = null;
	}
};

//#endregion
//#region node_modules/.pnpm/entities@4.5.0/node_modules/entities/lib/esm/escape.js
const xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
const xmlCodeMap = new Map([
	[34, "&quot;"],
	[38, "&amp;"],
	[39, "&apos;"],
	[60, "&lt;"],
	[62, "&gt;"]
]);
const getCodePoint = String.prototype.codePointAt != null ? (str, index$2) => str.codePointAt(index$2) : (c$1, index$2) => (c$1.charCodeAt(index$2) & 64512) === 55296 ? (c$1.charCodeAt(index$2) - 55296) * 1024 + c$1.charCodeAt(index$2 + 1) - 56320 + 65536 : c$1.charCodeAt(index$2);
/**
* Encodes all non-ASCII characters, as well as characters not valid in XML
* documents using XML entities.
*
* If a character has no equivalent entity, a
* numeric hexadecimal reference (eg. `&#xfc;`) will be used.
*/
function encodeXML(str) {
	let ret = "";
	let lastIdx = 0;
	let match;
	while ((match = xmlReplacer.exec(str)) !== null) {
		const i$1 = match.index;
		const char = str.charCodeAt(i$1);
		const next$1 = xmlCodeMap.get(char);
		if (next$1 !== void 0) {
			ret += str.substring(lastIdx, i$1) + next$1;
			lastIdx = i$1 + 1;
		} else {
			ret += `${str.substring(lastIdx, i$1)}&#x${getCodePoint(str, i$1).toString(16)};`;
			lastIdx = xmlReplacer.lastIndex += Number((char & 64512) === 55296);
		}
	}
	return ret + str.substr(lastIdx);
}
/**
* Creates a function that escapes all characters matched by the given regular
* expression using the given map of characters to escape to their entities.
*
* @param regex Regular expression to match characters to escape.
* @param map Map of characters to escape to their entities.
*
* @returns Function that escapes all characters matched by the given regular
* expression using the given map of characters to escape to their entities.
*/
function getEscaper(regex, map$1) {
	return function escape$1(data$1) {
		let match;
		let lastIdx = 0;
		let result = "";
		while (match = regex.exec(data$1)) {
			if (lastIdx !== match.index) result += data$1.substring(lastIdx, match.index);
			result += map$1.get(match[0].charCodeAt(0));
			lastIdx = match.index + 1;
		}
		return result + data$1.substring(lastIdx);
	};
}
/**
* Encodes all characters not valid in XML documents using XML entities.
*
* Note that the output will be character-set dependent.
*
* @param data String to escape.
*/
const escapeUTF8 = getEscaper(/[&<>'"]/g, xmlCodeMap);
/**
* Encodes all characters that have to be escaped in HTML attributes,
* following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
*
* @param data String to escape.
*/
const escapeAttribute = getEscaper(/["&\u00A0]/g, new Map([
	[34, "&quot;"],
	[38, "&amp;"],
	[160, "&nbsp;"]
]));
/**
* Encodes all characters that have to be escaped in HTML text,
* following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
*
* @param data String to escape.
*/
const escapeText = getEscaper(/[&<>\u00A0]/g, new Map([
	[38, "&amp;"],
	[60, "&lt;"],
	[62, "&gt;"],
	[160, "&nbsp;"]
]));

//#endregion
//#region node_modules/.pnpm/dom-serializer@2.0.0/node_modules/dom-serializer/lib/esm/foreignNames.js
const elementNames = new Map([
	"altGlyph",
	"altGlyphDef",
	"altGlyphItem",
	"animateColor",
	"animateMotion",
	"animateTransform",
	"clipPath",
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feDropShadow",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence",
	"foreignObject",
	"glyphRef",
	"linearGradient",
	"radialGradient",
	"textPath"
].map((val$1) => [val$1.toLowerCase(), val$1]));
const attributeNames = new Map([
	"definitionURL",
	"attributeName",
	"attributeType",
	"baseFrequency",
	"baseProfile",
	"calcMode",
	"clipPathUnits",
	"diffuseConstant",
	"edgeMode",
	"filterUnits",
	"glyphRef",
	"gradientTransform",
	"gradientUnits",
	"kernelMatrix",
	"kernelUnitLength",
	"keyPoints",
	"keySplines",
	"keyTimes",
	"lengthAdjust",
	"limitingConeAngle",
	"markerHeight",
	"markerUnits",
	"markerWidth",
	"maskContentUnits",
	"maskUnits",
	"numOctaves",
	"pathLength",
	"patternContentUnits",
	"patternTransform",
	"patternUnits",
	"pointsAtX",
	"pointsAtY",
	"pointsAtZ",
	"preserveAlpha",
	"preserveAspectRatio",
	"primitiveUnits",
	"refX",
	"refY",
	"repeatCount",
	"repeatDur",
	"requiredExtensions",
	"requiredFeatures",
	"specularConstant",
	"specularExponent",
	"spreadMethod",
	"startOffset",
	"stdDeviation",
	"stitchTiles",
	"surfaceScale",
	"systemLanguage",
	"tableValues",
	"targetX",
	"targetY",
	"textLength",
	"viewBox",
	"viewTarget",
	"xChannelSelector",
	"yChannelSelector",
	"zoomAndPan"
].map((val$1) => [val$1.toLowerCase(), val$1]));

//#endregion
//#region node_modules/.pnpm/dom-serializer@2.0.0/node_modules/dom-serializer/lib/esm/index.js
const unencodedElements = new Set([
	"style",
	"script",
	"xmp",
	"iframe",
	"noembed",
	"noframes",
	"plaintext",
	"noscript"
]);
function replaceQuotes(value) {
	return value.replace(/"/g, "&quot;");
}
/**
* Format attributes
*/
function formatAttributes(attributes$1, opts) {
	var _a$4;
	if (!attributes$1) return;
	const encode$2 = ((_a$4 = opts.encodeEntities) !== null && _a$4 !== void 0 ? _a$4 : opts.decodeEntities) === false ? replaceQuotes : opts.xmlMode || opts.encodeEntities !== "utf8" ? encodeXML : escapeAttribute;
	return Object.keys(attributes$1).map((key$2) => {
		var _a$5, _b;
		const value = (_a$5 = attributes$1[key$2]) !== null && _a$5 !== void 0 ? _a$5 : "";
		if (opts.xmlMode === "foreign") key$2 = (_b = attributeNames.get(key$2)) !== null && _b !== void 0 ? _b : key$2;
		if (!opts.emptyAttrs && !opts.xmlMode && value === "") return key$2;
		return `${key$2}="${encode$2(value)}"`;
	}).join(" ");
}
/**
* Self-enclosing tags
*/
const singleTag = new Set([
	"area",
	"base",
	"basefont",
	"br",
	"col",
	"command",
	"embed",
	"frame",
	"hr",
	"img",
	"input",
	"isindex",
	"keygen",
	"link",
	"meta",
	"param",
	"source",
	"track",
	"wbr"
]);
/**
* Renders a DOM node or an array of DOM nodes to a string.
*
* Can be thought of as the equivalent of the `outerHTML` of the passed node(s).
*
* @param node Node to be rendered.
* @param options Changes serialization behavior
*/
function render$1(node$1, options = {}) {
	const nodes = "length" in node$1 ? node$1 : [node$1];
	let output = "";
	for (let i$1 = 0; i$1 < nodes.length; i$1++) output += renderNode(nodes[i$1], options);
	return output;
}
var esm_default = render$1;
function renderNode(node$1, options) {
	switch (node$1.type) {
		case Root: return render$1(node$1.children, options);
		case Doctype:
		case Directive: return renderDirective(node$1);
		case Comment$3: return renderComment(node$1);
		case CDATA$1: return renderCdata(node$1);
		case Script:
		case Style:
		case Tag: return renderTag(node$1, options);
		case Text$2: return renderText(node$1, options);
	}
}
const foreignModeIntegrationPoints = new Set([
	"mi",
	"mo",
	"mn",
	"ms",
	"mtext",
	"annotation-xml",
	"foreignObject",
	"desc",
	"title"
]);
const foreignElements = new Set(["svg", "math"]);
function renderTag(elem, opts) {
	var _a$4;
	if (opts.xmlMode === "foreign") {
		elem.name = (_a$4 = elementNames.get(elem.name)) !== null && _a$4 !== void 0 ? _a$4 : elem.name;
		if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) opts = {
			...opts,
			xmlMode: false
		};
	}
	if (!opts.xmlMode && foreignElements.has(elem.name)) opts = {
		...opts,
		xmlMode: "foreign"
	};
	let tag = `<${elem.name}`;
	const attribs = formatAttributes(elem.attribs, opts);
	if (attribs) tag += ` ${attribs}`;
	if (elem.children.length === 0 && (opts.xmlMode ? opts.selfClosingTags !== false : opts.selfClosingTags && singleTag.has(elem.name))) {
		if (!opts.xmlMode) tag += " ";
		tag += "/>";
	} else {
		tag += ">";
		if (elem.children.length > 0) tag += render$1(elem.children, opts);
		if (opts.xmlMode || !singleTag.has(elem.name)) tag += `</${elem.name}>`;
	}
	return tag;
}
function renderDirective(elem) {
	return `<${elem.data}>`;
}
function renderText(elem, opts) {
	var _a$4;
	let data$1 = elem.data || "";
	if (((_a$4 = opts.encodeEntities) !== null && _a$4 !== void 0 ? _a$4 : opts.decodeEntities) !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) data$1 = opts.xmlMode || opts.encodeEntities !== "utf8" ? encodeXML(data$1) : escapeText(data$1);
	return data$1;
}
function renderCdata(elem) {
	return `<![CDATA[${elem.children[0].data}]]>`;
}
function renderComment(elem) {
	return `<!--${elem.data}-->`;
}

//#endregion
//#region node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/stringify.js
/**
* @category Stringify
* @deprecated Use the `dom-serializer` module directly.
* @param node Node to get the outer HTML of.
* @param options Options for serialization.
* @returns `node`'s outer HTML.
*/
function getOuterHTML(node$1, options) {
	return esm_default(node$1, options);
}
/**
* @category Stringify
* @deprecated Use the `dom-serializer` module directly.
* @param node Node to get the inner HTML of.
* @param options Options for serialization.
* @returns `node`'s inner HTML.
*/
function getInnerHTML(node$1, options) {
	return hasChildren(node$1) ? node$1.children.map((node$2) => getOuterHTML(node$2, options)).join("") : "";
}
/**
* Get a node's inner text. Same as `textContent`, but inserts newlines for `<br>` tags. Ignores comments.
*
* @category Stringify
* @deprecated Use `textContent` instead.
* @param node Node to get the inner text of.
* @returns `node`'s inner text.
*/
function getText(node$1) {
	if (Array.isArray(node$1)) return node$1.map(getText).join("");
	if (isTag(node$1)) return node$1.name === "br" ? "\n" : getText(node$1.children);
	if (isCDATA(node$1)) return getText(node$1.children);
	if (isText(node$1)) return node$1.data;
	return "";
}
/**
* Get a node's text content. Ignores comments.
*
* @category Stringify
* @param node Node to get the text content of.
* @returns `node`'s text content.
* @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent}
*/
function textContent(node$1) {
	if (Array.isArray(node$1)) return node$1.map(textContent).join("");
	if (hasChildren(node$1) && !isComment(node$1)) return textContent(node$1.children);
	if (isText(node$1)) return node$1.data;
	return "";
}
/**
* Get a node's inner text, ignoring `<script>` and `<style>` tags. Ignores comments.
*
* @category Stringify
* @param node Node to get the inner text of.
* @returns `node`'s inner text.
* @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText}
*/
function innerText(node$1) {
	if (Array.isArray(node$1)) return node$1.map(innerText).join("");
	if (hasChildren(node$1) && (node$1.type === ElementType.Tag || isCDATA(node$1))) return innerText(node$1.children);
	if (isText(node$1)) return node$1.data;
	return "";
}

//#endregion
//#region node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/traversal.js
/**
* Get a node's children.
*
* @category Traversal
* @param elem Node to get the children of.
* @returns `elem`'s children, or an empty array.
*/
function getChildren(elem) {
	return hasChildren(elem) ? elem.children : [];
}
/**
* Get a node's parent.
*
* @category Traversal
* @param elem Node to get the parent of.
* @returns `elem`'s parent node, or `null` if `elem` is a root node.
*/
function getParent(elem) {
	return elem.parent || null;
}
/**
* Gets an elements siblings, including the element itself.
*
* Attempts to get the children through the element's parent first. If we don't
* have a parent (the element is a root node), we walk the element's `prev` &
* `next` to get all remaining nodes.
*
* @category Traversal
* @param elem Element to get the siblings of.
* @returns `elem`'s siblings, including `elem`.
*/
function getSiblings(elem) {
	const parent$1 = getParent(elem);
	if (parent$1 != null) return getChildren(parent$1);
	const siblings$1 = [elem];
	let { prev: prev$1, next: next$1 } = elem;
	while (prev$1 != null) {
		siblings$1.unshift(prev$1);
		({prev: prev$1} = prev$1);
	}
	while (next$1 != null) {
		siblings$1.push(next$1);
		({next: next$1} = next$1);
	}
	return siblings$1;
}
/**
* Gets an attribute from an element.
*
* @category Traversal
* @param elem Element to check.
* @param name Attribute name to retrieve.
* @returns The element's attribute value, or `undefined`.
*/
function getAttributeValue(elem, name$1) {
	var _a$4;
	return (_a$4 = elem.attribs) === null || _a$4 === void 0 ? void 0 : _a$4[name$1];
}
/**
* Checks whether an element has an attribute.
*
* @category Traversal
* @param elem Element to check.
* @param name Attribute name to look for.
* @returns Returns whether `elem` has the attribute `name`.
*/
function hasAttrib(elem, name$1) {
	return elem.attribs != null && Object.prototype.hasOwnProperty.call(elem.attribs, name$1) && elem.attribs[name$1] != null;
}
/**
* Get the tag name of an element.
*
* @category Traversal
* @param elem The element to get the name for.
* @returns The tag name of `elem`.
*/
function getName(elem) {
	return elem.name;
}
/**
* Returns the next element sibling of a node.
*
* @category Traversal
* @param elem The element to get the next sibling of.
* @returns `elem`'s next sibling that is a tag, or `null` if there is no next
* sibling.
*/
function nextElementSibling(elem) {
	let { next: next$1 } = elem;
	while (next$1 !== null && !isTag(next$1)) ({next: next$1} = next$1);
	return next$1;
}
/**
* Returns the previous element sibling of a node.
*
* @category Traversal
* @param elem The element to get the previous sibling of.
* @returns `elem`'s previous sibling that is a tag, or `null` if there is no
* previous sibling.
*/
function prevElementSibling(elem) {
	let { prev: prev$1 } = elem;
	while (prev$1 !== null && !isTag(prev$1)) ({prev: prev$1} = prev$1);
	return prev$1;
}

//#endregion
//#region node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/manipulation.js
/**
* Remove an element from the dom
*
* @category Manipulation
* @param elem The element to be removed
*/
function removeElement(elem) {
	if (elem.prev) elem.prev.next = elem.next;
	if (elem.next) elem.next.prev = elem.prev;
	if (elem.parent) {
		const childs = elem.parent.children;
		const childsIndex = childs.lastIndexOf(elem);
		if (childsIndex >= 0) childs.splice(childsIndex, 1);
	}
	elem.next = null;
	elem.prev = null;
	elem.parent = null;
}
/**
* Replace an element in the dom
*
* @category Manipulation
* @param elem The element to be replaced
* @param replacement The element to be added
*/
function replaceElement(elem, replacement) {
	const prev$1 = replacement.prev = elem.prev;
	if (prev$1) prev$1.next = replacement;
	const next$1 = replacement.next = elem.next;
	if (next$1) next$1.prev = replacement;
	const parent$1 = replacement.parent = elem.parent;
	if (parent$1) {
		const childs = parent$1.children;
		childs[childs.lastIndexOf(elem)] = replacement;
		elem.parent = null;
	}
}
/**
* Append a child to an element.
*
* @category Manipulation
* @param parent The element to append to.
* @param child The element to be added as a child.
*/
function appendChild(parent$1, child) {
	removeElement(child);
	child.next = null;
	child.parent = parent$1;
	if (parent$1.children.push(child) > 1) {
		const sibling = parent$1.children[parent$1.children.length - 2];
		sibling.next = child;
		child.prev = sibling;
	} else child.prev = null;
}
/**
* Append an element after another.
*
* @category Manipulation
* @param elem The element to append after.
* @param next The element be added.
*/
function append$1(elem, next$1) {
	removeElement(next$1);
	const { parent: parent$1 } = elem;
	const currNext = elem.next;
	next$1.next = currNext;
	next$1.prev = elem;
	elem.next = next$1;
	next$1.parent = parent$1;
	if (currNext) {
		currNext.prev = next$1;
		if (parent$1) {
			const childs = parent$1.children;
			childs.splice(childs.lastIndexOf(currNext), 0, next$1);
		}
	} else if (parent$1) parent$1.children.push(next$1);
}
/**
* Prepend a child to an element.
*
* @category Manipulation
* @param parent The element to prepend before.
* @param child The element to be added as a child.
*/
function prependChild(parent$1, child) {
	removeElement(child);
	child.parent = parent$1;
	child.prev = null;
	if (parent$1.children.unshift(child) !== 1) {
		const sibling = parent$1.children[1];
		sibling.prev = child;
		child.next = sibling;
	} else child.next = null;
}
/**
* Prepend an element before another.
*
* @category Manipulation
* @param elem The element to prepend before.
* @param prev The element be added.
*/
function prepend$1(elem, prev$1) {
	removeElement(prev$1);
	const { parent: parent$1 } = elem;
	if (parent$1) {
		const childs = parent$1.children;
		childs.splice(childs.indexOf(elem), 0, prev$1);
	}
	if (elem.prev) elem.prev.next = prev$1;
	prev$1.parent = parent$1;
	prev$1.prev = elem.prev;
	prev$1.next = elem;
	elem.prev = prev$1;
}

//#endregion
//#region node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/querying.js
/**
* Search a node and its children for nodes passing a test function. If `node` is not an array, it will be wrapped in one.
*
* @category Querying
* @param test Function to test nodes on.
* @param node Node to search. Will be included in the result set if it matches.
* @param recurse Also consider child nodes.
* @param limit Maximum number of nodes to return.
* @returns All nodes passing `test`.
*/
function filter$2(test, node$1, recurse = true, limit = Infinity) {
	return find$4(test, Array.isArray(node$1) ? node$1 : [node$1], recurse, limit);
}
/**
* Search an array of nodes and their children for nodes passing a test function.
*
* @category Querying
* @param test Function to test nodes on.
* @param nodes Array of nodes to search.
* @param recurse Also consider child nodes.
* @param limit Maximum number of nodes to return.
* @returns All nodes passing `test`.
*/
function find$4(test, nodes, recurse, limit) {
	const result = [];
	/** Stack of the arrays we are looking at. */
	const nodeStack = [Array.isArray(nodes) ? nodes : [nodes]];
	/** Stack of the indices within the arrays. */
	const indexStack = [0];
	for (;;) {
		if (indexStack[0] >= nodeStack[0].length) {
			if (indexStack.length === 1) return result;
			nodeStack.shift();
			indexStack.shift();
			continue;
		}
		const elem = nodeStack[0][indexStack[0]++];
		if (test(elem)) {
			result.push(elem);
			if (--limit <= 0) return result;
		}
		if (recurse && hasChildren(elem) && elem.children.length > 0) {
			indexStack.unshift(0);
			nodeStack.unshift(elem.children);
		}
	}
}
/**
* Finds the first element inside of an array that matches a test function. This is an alias for `Array.prototype.find`.
*
* @category Querying
* @param test Function to test nodes on.
* @param nodes Array of nodes to search.
* @returns The first node in the array that passes `test`.
* @deprecated Use `Array.prototype.find` directly.
*/
function findOneChild(test, nodes) {
	return nodes.find(test);
}
/**
* Finds one element in a tree that passes a test.
*
* @category Querying
* @param test Function to test nodes on.
* @param nodes Node or array of nodes to search.
* @param recurse Also consider child nodes.
* @returns The first node that passes `test`.
*/
function findOne(test, nodes, recurse = true) {
	const searchedNodes = Array.isArray(nodes) ? nodes : [nodes];
	for (let i$1 = 0; i$1 < searchedNodes.length; i$1++) {
		const node$1 = searchedNodes[i$1];
		if (isTag(node$1) && test(node$1)) return node$1;
		if (recurse && hasChildren(node$1) && node$1.children.length > 0) {
			const found = findOne(test, node$1.children, true);
			if (found) return found;
		}
	}
	return null;
}
/**
* Checks if a tree of nodes contains at least one node passing a test.
*
* @category Querying
* @param test Function to test nodes on.
* @param nodes Array of nodes to search.
* @returns Whether a tree of nodes contains at least one node passing the test.
*/
function existsOne(test, nodes) {
	return (Array.isArray(nodes) ? nodes : [nodes]).some((node$1) => isTag(node$1) && test(node$1) || hasChildren(node$1) && existsOne(test, node$1.children));
}
/**
* Search an array of nodes and their children for elements passing a test function.
*
* Same as `find`, but limited to elements and with less options, leading to reduced complexity.
*
* @category Querying
* @param test Function to test nodes on.
* @param nodes Array of nodes to search.
* @returns All nodes passing `test`.
*/
function findAll(test, nodes) {
	const result = [];
	const nodeStack = [Array.isArray(nodes) ? nodes : [nodes]];
	const indexStack = [0];
	for (;;) {
		if (indexStack[0] >= nodeStack[0].length) {
			if (nodeStack.length === 1) return result;
			nodeStack.shift();
			indexStack.shift();
			continue;
		}
		const elem = nodeStack[0][indexStack[0]++];
		if (isTag(elem) && test(elem)) result.push(elem);
		if (hasChildren(elem) && elem.children.length > 0) {
			indexStack.unshift(0);
			nodeStack.unshift(elem.children);
		}
	}
}

//#endregion
//#region node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/legacy.js
/**
* A map of functions to check nodes against.
*/
const Checks = {
	tag_name(name$1) {
		if (typeof name$1 === "function") return (elem) => isTag(elem) && name$1(elem.name);
		else if (name$1 === "*") return isTag;
		return (elem) => isTag(elem) && elem.name === name$1;
	},
	tag_type(type) {
		if (typeof type === "function") return (elem) => type(elem.type);
		return (elem) => elem.type === type;
	},
	tag_contains(data$1) {
		if (typeof data$1 === "function") return (elem) => isText(elem) && data$1(elem.data);
		return (elem) => isText(elem) && elem.data === data$1;
	}
};
/**
* Returns a function to check whether a node has an attribute with a particular
* value.
*
* @param attrib Attribute to check.
* @param value Attribute value to look for.
* @returns A function to check whether the a node has an attribute with a
*   particular value.
*/
function getAttribCheck(attrib, value) {
	if (typeof value === "function") return (elem) => isTag(elem) && value(elem.attribs[attrib]);
	return (elem) => isTag(elem) && elem.attribs[attrib] === value;
}
/**
* Returns a function that returns `true` if either of the input functions
* returns `true` for a node.
*
* @param a First function to combine.
* @param b Second function to combine.
* @returns A function taking a node and returning `true` if either of the input
*   functions returns `true` for the node.
*/
function combineFuncs(a, b) {
	return (elem) => a(elem) || b(elem);
}
/**
* Returns a function that executes all checks in `options` and returns `true`
* if any of them match a node.
*
* @param options An object describing nodes to look for.
* @returns A function that executes all checks in `options` and returns `true`
*   if any of them match a node.
*/
function compileTest(options) {
	const funcs = Object.keys(options).map((key$2) => {
		const value = options[key$2];
		return Object.prototype.hasOwnProperty.call(Checks, key$2) ? Checks[key$2](value) : getAttribCheck(key$2, value);
	});
	return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
}
/**
* Checks whether a node matches the description in `options`.
*
* @category Legacy Query Functions
* @param options An object describing nodes to look for.
* @param node The element to test.
* @returns Whether the element matches the description in `options`.
*/
function testElement(options, node$1) {
	const test = compileTest(options);
	return test ? test(node$1) : true;
}
/**
* Returns all nodes that match `options`.
*
* @category Legacy Query Functions
* @param options An object describing nodes to look for.
* @param nodes Nodes to search through.
* @param recurse Also consider child nodes.
* @param limit Maximum number of nodes to return.
* @returns All nodes that match `options`.
*/
function getElements(options, nodes, recurse, limit = Infinity) {
	const test = compileTest(options);
	return test ? filter$2(test, nodes, recurse, limit) : [];
}
/**
* Returns the node with the supplied ID.
*
* @category Legacy Query Functions
* @param id The unique ID attribute value to look for.
* @param nodes Nodes to search through.
* @param recurse Also consider child nodes.
* @returns The node with the supplied ID.
*/
function getElementById(id, nodes, recurse = true) {
	if (!Array.isArray(nodes)) nodes = [nodes];
	return findOne(getAttribCheck("id", id), nodes, recurse);
}
/**
* Returns all nodes with the supplied `tagName`.
*
* @category Legacy Query Functions
* @param tagName Tag name to search for.
* @param nodes Nodes to search through.
* @param recurse Also consider child nodes.
* @param limit Maximum number of nodes to return.
* @returns All nodes with the supplied `tagName`.
*/
function getElementsByTagName(tagName, nodes, recurse = true, limit = Infinity) {
	return filter$2(Checks["tag_name"](tagName), nodes, recurse, limit);
}
/**
* Returns all nodes with the supplied `className`.
*
* @category Legacy Query Functions
* @param className Class name to search for.
* @param nodes Nodes to search through.
* @param recurse Also consider child nodes.
* @param limit Maximum number of nodes to return.
* @returns All nodes with the supplied `className`.
*/
function getElementsByClassName(className, nodes, recurse = true, limit = Infinity) {
	return filter$2(getAttribCheck("class", className), nodes, recurse, limit);
}
/**
* Returns all nodes with the supplied `type`.
*
* @category Legacy Query Functions
* @param type Element type to look for.
* @param nodes Nodes to search through.
* @param recurse Also consider child nodes.
* @param limit Maximum number of nodes to return.
* @returns All nodes with the supplied `type`.
*/
function getElementsByTagType(type, nodes, recurse = true, limit = Infinity) {
	return filter$2(Checks["tag_type"](type), nodes, recurse, limit);
}

//#endregion
//#region node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/helpers.js
/**
* Given an array of nodes, remove any member that is contained by another
* member.
*
* @category Helpers
* @param nodes Nodes to filter.
* @returns Remaining nodes that aren't contained by other nodes.
*/
function removeSubsets(nodes) {
	let idx = nodes.length;
	while (--idx >= 0) {
		const node$1 = nodes[idx];
		if (idx > 0 && nodes.lastIndexOf(node$1, idx - 1) >= 0) {
			nodes.splice(idx, 1);
			continue;
		}
		for (let ancestor = node$1.parent; ancestor; ancestor = ancestor.parent) if (nodes.includes(ancestor)) {
			nodes.splice(idx, 1);
			break;
		}
	}
	return nodes;
}
/**
* @category Helpers
* @see {@link http://dom.spec.whatwg.org/#dom-node-comparedocumentposition}
*/
var DocumentPosition$1;
(function(DocumentPosition$2) {
	DocumentPosition$2[DocumentPosition$2["DISCONNECTED"] = 1] = "DISCONNECTED";
	DocumentPosition$2[DocumentPosition$2["PRECEDING"] = 2] = "PRECEDING";
	DocumentPosition$2[DocumentPosition$2["FOLLOWING"] = 4] = "FOLLOWING";
	DocumentPosition$2[DocumentPosition$2["CONTAINS"] = 8] = "CONTAINS";
	DocumentPosition$2[DocumentPosition$2["CONTAINED_BY"] = 16] = "CONTAINED_BY";
})(DocumentPosition$1 || (DocumentPosition$1 = {}));
/**
* Compare the position of one node against another node in any other document,
* returning a bitmask with the values from {@link DocumentPosition}.
*
* Document order:
* > There is an ordering, document order, defined on all the nodes in the
* > document corresponding to the order in which the first character of the
* > XML representation of each node occurs in the XML representation of the
* > document after expansion of general entities. Thus, the document element
* > node will be the first node. Element nodes occur before their children.
* > Thus, document order orders element nodes in order of the occurrence of
* > their start-tag in the XML (after expansion of entities). The attribute
* > nodes of an element occur after the element and before its children. The
* > relative order of attribute nodes is implementation-dependent.
*
* Source:
* http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
*
* @category Helpers
* @param nodeA The first node to use in the comparison
* @param nodeB The second node to use in the comparison
* @returns A bitmask describing the input nodes' relative position.
*
* See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
* a description of these values.
*/
function compareDocumentPosition(nodeA, nodeB) {
	const aParents = [];
	const bParents = [];
	if (nodeA === nodeB) return 0;
	let current = hasChildren(nodeA) ? nodeA : nodeA.parent;
	while (current) {
		aParents.unshift(current);
		current = current.parent;
	}
	current = hasChildren(nodeB) ? nodeB : nodeB.parent;
	while (current) {
		bParents.unshift(current);
		current = current.parent;
	}
	const maxIdx = Math.min(aParents.length, bParents.length);
	let idx = 0;
	while (idx < maxIdx && aParents[idx] === bParents[idx]) idx++;
	if (idx === 0) return DocumentPosition$1.DISCONNECTED;
	const sharedParent = aParents[idx - 1];
	const siblings$1 = sharedParent.children;
	const aSibling = aParents[idx];
	const bSibling = bParents[idx];
	if (siblings$1.indexOf(aSibling) > siblings$1.indexOf(bSibling)) {
		if (sharedParent === nodeB) return DocumentPosition$1.FOLLOWING | DocumentPosition$1.CONTAINED_BY;
		return DocumentPosition$1.FOLLOWING;
	}
	if (sharedParent === nodeA) return DocumentPosition$1.PRECEDING | DocumentPosition$1.CONTAINS;
	return DocumentPosition$1.PRECEDING;
}
/**
* Sort an array of nodes based on their relative position in the document,
* removing any duplicate nodes. If the array contains nodes that do not belong
* to the same document, sort order is unspecified.
*
* @category Helpers
* @param nodes Array of DOM nodes.
* @returns Collection of unique nodes, sorted in document order.
*/
function uniqueSort(nodes) {
	nodes = nodes.filter((node$1, i$1, arr) => !arr.includes(node$1, i$1 + 1));
	nodes.sort((a, b) => {
		const relative = compareDocumentPosition(a, b);
		if (relative & DocumentPosition$1.PRECEDING) return -1;
		else if (relative & DocumentPosition$1.FOLLOWING) return 1;
		return 0;
	});
	return nodes;
}

//#endregion
//#region node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/feeds.js
/**
* Get the feed object from the root of a DOM tree.
*
* @category Feeds
* @param doc - The DOM to to extract the feed from.
* @returns The feed.
*/
function getFeed(doc) {
	const feedRoot = getOneElement(isValidFeed, doc);
	return !feedRoot ? null : feedRoot.name === "feed" ? getAtomFeed(feedRoot) : getRssFeed(feedRoot);
}
/**
* Parse an Atom feed.
*
* @param feedRoot The root of the feed.
* @returns The parsed feed.
*/
function getAtomFeed(feedRoot) {
	var _a$4;
	const childs = feedRoot.children;
	const feed = {
		type: "atom",
		items: getElementsByTagName("entry", childs).map((item) => {
			var _a$5;
			const { children: children$1 } = item;
			const entry = { media: getMediaElements(children$1) };
			addConditionally(entry, "id", "id", children$1);
			addConditionally(entry, "title", "title", children$1);
			const href$1 = (_a$5 = getOneElement("link", children$1)) === null || _a$5 === void 0 ? void 0 : _a$5.attribs["href"];
			if (href$1) entry.link = href$1;
			const description = fetch("summary", children$1) || fetch("content", children$1);
			if (description) entry.description = description;
			const pubDate = fetch("updated", children$1);
			if (pubDate) entry.pubDate = new Date(pubDate);
			return entry;
		})
	};
	addConditionally(feed, "id", "id", childs);
	addConditionally(feed, "title", "title", childs);
	const href = (_a$4 = getOneElement("link", childs)) === null || _a$4 === void 0 ? void 0 : _a$4.attribs["href"];
	if (href) feed.link = href;
	addConditionally(feed, "description", "subtitle", childs);
	const updated = fetch("updated", childs);
	if (updated) feed.updated = new Date(updated);
	addConditionally(feed, "author", "email", childs, true);
	return feed;
}
/**
* Parse a RSS feed.
*
* @param feedRoot The root of the feed.
* @returns The parsed feed.
*/
function getRssFeed(feedRoot) {
	var _a$4, _b;
	const childs = (_b = (_a$4 = getOneElement("channel", feedRoot.children)) === null || _a$4 === void 0 ? void 0 : _a$4.children) !== null && _b !== void 0 ? _b : [];
	const feed = {
		type: feedRoot.name.substr(0, 3),
		id: "",
		items: getElementsByTagName("item", feedRoot.children).map((item) => {
			const { children: children$1 } = item;
			const entry = { media: getMediaElements(children$1) };
			addConditionally(entry, "id", "guid", children$1);
			addConditionally(entry, "title", "title", children$1);
			addConditionally(entry, "link", "link", children$1);
			addConditionally(entry, "description", "description", children$1);
			const pubDate = fetch("pubDate", children$1) || fetch("dc:date", children$1);
			if (pubDate) entry.pubDate = new Date(pubDate);
			return entry;
		})
	};
	addConditionally(feed, "title", "title", childs);
	addConditionally(feed, "link", "link", childs);
	addConditionally(feed, "description", "description", childs);
	const updated = fetch("lastBuildDate", childs);
	if (updated) feed.updated = new Date(updated);
	addConditionally(feed, "author", "managingEditor", childs, true);
	return feed;
}
const MEDIA_KEYS_STRING = [
	"url",
	"type",
	"lang"
];
const MEDIA_KEYS_INT = [
	"fileSize",
	"bitrate",
	"framerate",
	"samplingrate",
	"channels",
	"duration",
	"height",
	"width"
];
/**
* Get all media elements of a feed item.
*
* @param where Nodes to search in.
* @returns Media elements.
*/
function getMediaElements(where) {
	return getElementsByTagName("media:content", where).map((elem) => {
		const { attribs } = elem;
		const media = {
			medium: attribs["medium"],
			isDefault: !!attribs["isDefault"]
		};
		for (const attrib of MEDIA_KEYS_STRING) if (attribs[attrib]) media[attrib] = attribs[attrib];
		for (const attrib of MEDIA_KEYS_INT) if (attribs[attrib]) media[attrib] = parseInt(attribs[attrib], 10);
		if (attribs["expression"]) media.expression = attribs["expression"];
		return media;
	});
}
/**
* Get one element by tag name.
*
* @param tagName Tag name to look for
* @param node Node to search in
* @returns The element or null
*/
function getOneElement(tagName, node$1) {
	return getElementsByTagName(tagName, node$1, true, 1)[0];
}
/**
* Get the text content of an element with a certain tag name.
*
* @param tagName Tag name to look for.
* @param where Node to search in.
* @param recurse Whether to recurse into child nodes.
* @returns The text content of the element.
*/
function fetch(tagName, where, recurse = false) {
	return textContent(getElementsByTagName(tagName, where, recurse, 1)).trim();
}
/**
* Adds a property to an object if it has a value.
*
* @param obj Object to be extended
* @param prop Property name
* @param tagName Tag name that contains the conditionally added property
* @param where Element to search for the property
* @param recurse Whether to recurse into child nodes.
*/
function addConditionally(obj, prop$1, tagName, where, recurse = false) {
	const val$1 = fetch(tagName, where, recurse);
	if (val$1) obj[prop$1] = val$1;
}
/**
* Checks if an element is a feed root node.
*
* @param value The name of the element to check.
* @returns Whether an element is a feed root node.
*/
function isValidFeed(value) {
	return value === "rss" || value === "feed" || value === "rdf:RDF";
}

//#endregion
//#region node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/index.js
var esm_exports$2 = /* @__PURE__ */ __export({
	DocumentPosition: () => DocumentPosition$1,
	append: () => append$1,
	appendChild: () => appendChild,
	compareDocumentPosition: () => compareDocumentPosition,
	existsOne: () => existsOne,
	filter: () => filter$2,
	find: () => find$4,
	findAll: () => findAll,
	findOne: () => findOne,
	findOneChild: () => findOneChild,
	getAttributeValue: () => getAttributeValue,
	getChildren: () => getChildren,
	getElementById: () => getElementById,
	getElements: () => getElements,
	getElementsByClassName: () => getElementsByClassName,
	getElementsByTagName: () => getElementsByTagName,
	getElementsByTagType: () => getElementsByTagType,
	getFeed: () => getFeed,
	getInnerHTML: () => getInnerHTML,
	getName: () => getName,
	getOuterHTML: () => getOuterHTML,
	getParent: () => getParent,
	getSiblings: () => getSiblings,
	getText: () => getText,
	hasAttrib: () => hasAttrib,
	hasChildren: () => hasChildren,
	innerText: () => innerText,
	isCDATA: () => isCDATA,
	isComment: () => isComment,
	isDocument: () => isDocument,
	isTag: () => isTag,
	isText: () => isText,
	nextElementSibling: () => nextElementSibling,
	prepend: () => prepend$1,
	prependChild: () => prependChild,
	prevElementSibling: () => prevElementSibling,
	removeElement: () => removeElement,
	removeSubsets: () => removeSubsets,
	replaceElement: () => replaceElement,
	testElement: () => testElement,
	textContent: () => textContent,
	uniqueSort: () => uniqueSort
});

//#endregion
//#region node_modules/.pnpm/cheerio@1.2.0/node_modules/cheerio/dist/esm/static.js
var static_exports = /* @__PURE__ */ __export({
	contains: () => contains,
	extract: () => extract$2,
	html: () => html$1,
	merge: () => merge$1,
	parseHTML: () => parseHTML,
	root: () => root$1,
	text: () => text,
	xml: () => xml
});
/**
* Helper function to render a DOM.
*
* @param that - Cheerio instance to render.
* @param dom - The DOM to render. Defaults to `that`'s root.
* @param options - Options for rendering.
* @returns The rendered document.
*/
function render(that, dom$2, options) {
	if (!that) return "";
	return that(dom$2 !== null && dom$2 !== void 0 ? dom$2 : that._root.children, null, void 0, options).toString();
}
/**
* Checks if a passed object is an options object.
*
* @param dom - Object to check if it is an options object.
* @param options - Options object.
* @returns Whether the object is an options object.
*/
function isOptions(dom$2, options) {
	return !options && typeof dom$2 === "object" && dom$2 != null && !("length" in dom$2) && !("type" in dom$2);
}
function html$1(dom$2, options) {
	const toRender = isOptions(dom$2) ? (options = dom$2, void 0) : dom$2;
	const opts = {
		...this === null || this === void 0 ? void 0 : this._options,
		...flattenOptions(options)
	};
	return render(this, toRender, opts);
}
/**
* Render the document as XML.
*
* @category Static
* @param dom - Element to render.
* @returns THe rendered document.
*/
function xml(dom$2) {
	const options = {
		...this._options,
		xmlMode: true
	};
	return render(this, dom$2, options);
}
/**
* Render the document as text.
*
* This returns the `textContent` of the passed elements. The result will
* include the contents of `<script>` and `<style>` elements. To avoid this, use
* `.prop('innerText')` instead.
*
* @category Static
* @param elements - Elements to render.
* @returns The rendered document.
*/
function text(elements) {
	const elems = elements !== null && elements !== void 0 ? elements : this ? this.root() : [];
	let ret = "";
	for (let i$1 = 0; i$1 < elems.length; i$1++) ret += textContent(elems[i$1]);
	return ret;
}
function parseHTML(data$1, context, keepScripts = typeof context === "boolean" ? context : false) {
	if (!data$1 || typeof data$1 !== "string") return null;
	if (typeof context === "boolean") keepScripts = context;
	const parsed = this.load(data$1, this._options, false);
	if (!keepScripts) parsed("script").remove();
	return [...parsed.root()[0].children];
}
/**
* Sometimes you need to work with the top-level root element. To query it, you
* can use `$.root()`.
*
* @category Static
* @example
*
* ```js
* $.root().append('<ul id="vegetables"></ul>').html();
* //=> <ul id="fruits">...</ul><ul id="vegetables"></ul>
* ```
*
* @returns Cheerio instance wrapping the root node.
* @alias Cheerio.root
*/
function root$1() {
	return this(this._root);
}
/**
* Checks to see if the `contained` DOM element is a descendant of the
* `container` DOM element.
*
* @category Static
* @param container - Potential parent node.
* @param contained - Potential child node.
* @returns Indicates if the nodes contain one another.
* @alias Cheerio.contains
* @see {@link https://api.jquery.com/jQuery.contains/}
*/
function contains(container, contained) {
	if (contained === container) return false;
	let next$1 = contained;
	while (next$1 && next$1 !== next$1.parent) {
		next$1 = next$1.parent;
		if (next$1 === container) return true;
	}
	return false;
}
/**
* Extract multiple values from a document, and store them in an object.
*
* @category Static
* @param map - An object containing key-value pairs. The keys are the names of
*   the properties to be created on the object, and the values are the
*   selectors to be used to extract the values.
* @returns An object containing the extracted values.
*/
function extract$2(map$1) {
	return this.root().extract(map$1);
}
/**
* $.merge().
*
* @category Static
* @param arr1 - First array.
* @param arr2 - Second array.
* @returns `arr1`, with elements of `arr2` inserted.
* @alias Cheerio.merge
* @see {@link https://api.jquery.com/jQuery.merge/}
*/
function merge$1(arr1, arr2) {
	if (!isArrayLike(arr1) || !isArrayLike(arr2)) return;
	let newLength = arr1.length;
	const len = +arr2.length;
	for (let i$1 = 0; i$1 < len; i$1++) arr1[newLength++] = arr2[i$1];
	arr1.length = newLength;
	return arr1;
}
/**
* Checks if an object is array-like.
*
* @category Static
* @param item - Item to check.
* @returns Indicates if the item is array-like.
*/
function isArrayLike(item) {
	if (Array.isArray(item)) return true;
	if (typeof item !== "object" || item === null || !("length" in item) || typeof item.length !== "number" || item.length < 0) return false;
	for (let i$1 = 0; i$1 < item.length; i$1++) if (!(i$1 in item)) return false;
	return true;
}

//#endregion
//#region node_modules/.pnpm/cheerio@1.2.0/node_modules/cheerio/dist/esm/utils.js
/**
* Checks if an object is a Cheerio instance.
*
* @category Utils
* @param maybeCheerio - The object to check.
* @returns Whether the object is a Cheerio instance.
*/
function isCheerio(maybeCheerio) {
	return maybeCheerio.cheerio != null;
}
/**
* Convert a string to camel case notation.
*
* @private
* @category Utils
* @param str - The string to be converted.
* @returns String in camel case notation.
*/
function camelCase(str) {
	return str.replace(/[._-](\w|$)/g, (_, x) => x.toUpperCase());
}
/**
* Convert a string from camel case to "CSS case", where word boundaries are
* described by hyphens ("-") and all characters are lower-case.
*
* @private
* @category Utils
* @param str - The string to be converted.
* @returns String in "CSS case".
*/
function cssCase(str) {
	return str.replace(/[A-Z]/g, "-$&").toLowerCase();
}
/**
* Iterate over each DOM element without creating intermediary Cheerio
* instances.
*
* This is indented for use internally to avoid otherwise unnecessary memory
* pressure introduced by _make.
*
* @category Utils
* @param array - The array to iterate over.
* @param fn - Function to call.
* @returns The original instance.
*/
function domEach(array$1, fn$1) {
	const len = array$1.length;
	for (let i$1 = 0; i$1 < len; i$1++) fn$1(array$1[i$1], i$1);
	return array$1;
}
var CharacterCode;
(function(CharacterCode$1) {
	CharacterCode$1[CharacterCode$1["LowerA"] = 97] = "LowerA";
	CharacterCode$1[CharacterCode$1["LowerZ"] = 122] = "LowerZ";
	CharacterCode$1[CharacterCode$1["UpperA"] = 65] = "UpperA";
	CharacterCode$1[CharacterCode$1["UpperZ"] = 90] = "UpperZ";
	CharacterCode$1[CharacterCode$1["Exclamation"] = 33] = "Exclamation";
})(CharacterCode || (CharacterCode = {}));
/**
* Check if string is HTML.
*
* Tests for a `<` within a string, immediate followed by a letter and
* eventually followed by a `>`.
*
* @private
* @category Utils
* @param str - The string to check.
* @returns Indicates if `str` is HTML.
*/
function isHtml(str) {
	if (typeof str !== "string") return false;
	const tagStart = str.indexOf("<");
	if (tagStart === -1 || tagStart > str.length - 3) return false;
	const tagChar = str.charCodeAt(tagStart + 1);
	return (tagChar >= CharacterCode.LowerA && tagChar <= CharacterCode.LowerZ || tagChar >= CharacterCode.UpperA && tagChar <= CharacterCode.UpperZ || tagChar === CharacterCode.Exclamation) && str.includes(">", tagStart + 2);
}

//#endregion
//#region node_modules/.pnpm/entities@7.0.1/node_modules/entities/dist/esm/decode-codepoint.js
var _a$3;
const decodeMap = new Map([
	[0, 65533],
	[128, 8364],
	[130, 8218],
	[131, 402],
	[132, 8222],
	[133, 8230],
	[134, 8224],
	[135, 8225],
	[136, 710],
	[137, 8240],
	[138, 352],
	[139, 8249],
	[140, 338],
	[142, 381],
	[145, 8216],
	[146, 8217],
	[147, 8220],
	[148, 8221],
	[149, 8226],
	[150, 8211],
	[151, 8212],
	[152, 732],
	[153, 8482],
	[154, 353],
	[155, 8250],
	[156, 339],
	[158, 382],
	[159, 376]
]);
/**
* Polyfill for `String.fromCodePoint`. It is used to create a string from a Unicode code point.
*/
const fromCodePoint = (_a$3 = String.fromCodePoint) !== null && _a$3 !== void 0 ? _a$3 : ((codePoint) => {
	let output = "";
	if (codePoint > 65535) {
		codePoint -= 65536;
		output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
		codePoint = 56320 | codePoint & 1023;
	}
	output += String.fromCharCode(codePoint);
	return output;
});
/**
* Replace the given code point with a replacement character if it is a
* surrogate or is outside the valid range. Otherwise return the code
* point unchanged.
*/
function replaceCodePoint(codePoint) {
	var _a$4;
	if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) return 65533;
	return (_a$4 = decodeMap.get(codePoint)) !== null && _a$4 !== void 0 ? _a$4 : codePoint;
}

//#endregion
//#region node_modules/.pnpm/entities@7.0.1/node_modules/entities/dist/esm/internal/decode-shared.js
function decodeBase64(input) {
	const binary = typeof atob === "function" ? atob(input) : typeof Buffer.from === "function" ? Buffer.from(input, "base64").toString("binary") : new Buffer(input, "base64").toString("binary");
	const evenLength = binary.length & -2;
	const out = new Uint16Array(evenLength / 2);
	for (let index$2 = 0, outIndex = 0; index$2 < evenLength; index$2 += 2) {
		const lo = binary.charCodeAt(index$2);
		const hi = binary.charCodeAt(index$2 + 1);
		out[outIndex++] = lo | hi << 8;
	}
	return out;
}

//#endregion
//#region node_modules/.pnpm/entities@7.0.1/node_modules/entities/dist/esm/generated/decode-data-html.js
const htmlDecodeTree = /* @__PURE__ */ decodeBase64("QR08ALkAAgH6AYsDNQR2BO0EPgXZBQEGLAbdBxMISQrvCmQLfQurDKQNLw4fD4YPpA+6D/IPAAAAAAAAAAAAAAAAKhBMEY8TmxUWF2EYLBkxGuAa3RsJHDscWR8YIC8jSCSIJcMl6ie3Ku8rEC0CLjoupS7kLgAIRU1hYmNmZ2xtbm9wcnN0dVQAWgBeAGUAaQBzAHcAfgCBAIQAhwCSAJoAoACsALMAbABpAGcAO4DGAMZAUAA7gCYAJkBjAHUAdABlADuAwQDBQHIiZXZlAAJhAAFpeW0AcgByAGMAO4DCAMJAEGRyAADgNdgE3XIAYQB2AGUAO4DAAMBA8CFoYZFj4SFjcgBhZAAAoFMqAAFncIsAjgBvAG4ABGFmAADgNdg43fAlbHlGdW5jdGlvbgCgYSBpAG4AZwA7gMUAxUAAAWNzpACoAHIAAOA12Jzc6SFnbgCgVCJpAGwAZABlADuAwwDDQG0AbAA7gMQAxEAABGFjZWZvcnN1xQDYANoA7QDxAPYA+QD8AAABY3LJAM8AayNzbGFzaAAAoBYidgHTANUAAKDnKmUAZAAAoAYjeQARZIABY3J0AOAA5QDrAGEidXNlAACgNSLuI291bGxpcwCgLCFhAJJjcgAA4DXYBd1wAGYAAOA12Dnd5SF2ZdhiYwDyAOoAbSJwZXEAAKBOIgAHSE9hY2RlZmhpbG9yc3UXARoBHwE6AVIBVQFiAWQBZgGCAakB6QHtAfIBYwB5ACdkUABZADuAqQCpQIABY3B5ACUBKAE1AfUhdGUGYWmg0iJ0KGFsRGlmZmVyZW50aWFsRAAAoEUhbCJleXMAAKAtIQACYWVpb0EBRAFKAU0B8iFvbgxhZABpAGwAO4DHAMdAcgBjAAhhbiJpbnQAAKAwIm8AdAAKYQABZG5ZAV0BaSJsbGEAuGB0I2VyRG90ALdg8gA5AWkAp2NyImNsZQAAAkRNUFRwAXQBeQF9AW8AdAAAoJkiaSJudXMAAKCWIuwhdXMAoJUiaSJtZXMAAKCXIm8AAAFjc4cBlAFrKndpc2VDb250b3VySW50ZWdyYWwAAKAyImUjQ3VybHkAAAFEUZwBpAFvJXVibGVRdW90ZQAAoB0gdSJvdGUAAKAZIAACbG5wdbABtgHNAdgBbwBuAGWgNyIAoHQqgAFnaXQAvAHBAcUB8iJ1ZW50AKBhIm4AdAAAoC8i7yV1ckludGVncmFsAKAuIgABZnLRAdMBAKACIe8iZHVjdACgECJuLnRlckNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbAAAoDMi7yFzcwCgLypjAHIAAOA12J7ccABDoNMiYQBwAACgTSKABURKU1phY2VmaW9zAAsCEgIVAhgCGwIsAjQCOQI9AnMCfwNvoEUh9CJyYWhkAKARKWMAeQACZGMAeQAFZGMAeQAPZIABZ3JzACECJQIoAuchZXIAoCEgcgAAoKEhaAB2AACg5CoAAWF5MAIzAvIhb24OYRRkbAB0oAciYQCUY3IAAOA12AfdAAFhZkECawIAAWNtRQJnAvIjaXRpY2FsAAJBREdUUAJUAl8CYwJjInV0ZQC0YG8AdAFZAloC2WJiJGxlQWN1dGUA3WJyImF2ZQBgYGkibGRlANxi7yFuZACgxCJmJWVyZW50aWFsRAAAoEYhcAR9AgAAAAAAAIECjgIAABoDZgAA4DXYO91EoagAhQKJAm8AdAAAoNwgcSJ1YWwAAKBQIuIhbGUAA0NETFJVVpkCqAK1Au8C/wIRA28AbgB0AG8AdQByAEkAbgB0AGUAZwByAGEA7ADEAW8AdAKvAgAAAACwAqhgbiNBcnJvdwAAoNMhAAFlb7kC0AJmAHQAgAFBUlQAwQLGAs0CciJyb3cAAKDQIekkZ2h0QXJyb3cAoNQhZQDlACsCbgBnAAABTFLWAugC5SFmdAABQVLcAuECciJyb3cAAKD4J+kkZ2h0QXJyb3cAoPon6SRnaHRBcnJvdwCg+SdpImdodAAAAUFU9gL7AnIicm93AACg0iFlAGUAAKCoInAAQQIGAwAAAAALA3Iicm93AACg0SFvJHduQXJyb3cAAKDVIWUlcnRpY2FsQmFyAACgJSJuAAADQUJMUlRhJAM2AzoDWgNxA3oDciJyb3cAAKGTIUJVLAMwA2EAcgAAoBMpcCNBcnJvdwAAoPUhciJldmUAEWPlIWZ00gJDAwAASwMAAFIDaSVnaHRWZWN0b3IAAKBQKWUkZVZlY3RvcgAAoF4p5SJjdG9yQqC9IWEAcgAAoFYpaSJnaHQA1AFiAwAAaQNlJGVWZWN0b3IAAKBfKeUiY3RvckKgwSFhAHIAAKBXKWUAZQBBoKQiciJyb3cAAKCnIXIAcgBvAPcAtAIAAWN0gwOHA3IAAOA12J/c8iFvaxBhAAhOVGFjZGZnbG1vcHFzdHV4owOlA6kDsAO/A8IDxgPNA9ID8gP9AwEEFAQeBCAEJQRHAEphSAA7gNAA0EBjAHUAdABlADuAyQDJQIABYWl5ALYDuQO+A/Ihb24aYXIAYwA7gMoAykAtZG8AdAAWYXIAAOA12AjdcgBhAHYAZQA7gMgAyEDlIm1lbnQAoAgiAAFhcNYD2QNjAHIAEmF0AHkAUwLhAwAAAADpA20lYWxsU3F1YXJlAACg+yVlJ3J5U21hbGxTcXVhcmUAAKCrJQABZ3D2A/kDbwBuABhhZgAA4DXYPN3zImlsb26VY3UAAAFhaQYEDgRsAFSgdSppImxkZQAAoEIi7CNpYnJpdW0AoMwhAAFjaRgEGwRyAACgMCFtAACgcyphAJdjbQBsADuAywDLQAABaXApBC0E8yF0cwCgAyLvJG5lbnRpYWxFAKBHIYACY2Zpb3MAPQQ/BEMEXQRyBHkAJGRyAADgNdgJ3WwibGVkAFMCTAQAAAAAVARtJWFsbFNxdWFyZQAAoPwlZSdyeVNtYWxsU3F1YXJlAACgqiVwA2UEAABpBAAAAABtBGYAAOA12D3dwSFsbACgACLyI2llcnRyZgCgMSFjAPIAcQQABkpUYWJjZGZnb3JzdIgEiwSOBJMElwSkBKcEqwStBLIE5QTqBGMAeQADZDuAPgA+QO0hbWFkoJMD3GNyImV2ZQAeYYABZWl5AJ0EoASjBOQhaWwiYXIAYwAcYRNkbwB0ACBhcgAA4DXYCt0AoNkicABmAADgNdg+3eUiYXRlcgADRUZHTFNUvwTIBM8E1QTZBOAEcSJ1YWwATKBlIuUhc3MAoNsidSRsbEVxdWFsAACgZyJyI2VhdGVyAACgoirlIXNzAKB3IuwkYW50RXF1YWwAoH4qaSJsZGUAAKBzImMAcgAA4DXYotwAoGsiAARBYWNmaW9zdfkE/QQFBQgFCwUTBSIFKwVSIkRjeQAqZAABY3QBBQQFZQBrAMdiXmDpIXJjJGFyAACgDCFsJWJlcnRTcGFjZQAAoAsh8AEYBQAAGwVmAACgDSHpJXpvbnRhbExpbmUAoAAlAAFjdCYFKAXyABIF8iFvayZhbQBwAEQBMQU5BW8AdwBuAEgAdQBtAPAAAAFxInVhbAAAoE8iAAdFSk9hY2RmZ21ub3N0dVMFVgVZBVwFYwVtBXAFcwV6BZAFtgXFBckFzQVjAHkAFWTsIWlnMmFjAHkAAWRjAHUAdABlADuAzQDNQAABaXlnBWwFcgBjADuAzgDOQBhkbwB0ADBhcgAAoBEhcgBhAHYAZQA7gMwAzEAAoREhYXB/BYsFAAFjZ4MFhQVyACphaSNuYXJ5SQAAoEghbABpAGUA8wD6AvQBlQUAAKUFZaAsIgABZ3KaBZ4F8iFhbACgKyLzI2VjdGlvbgCgwiJpI3NpYmxlAAABQ1SsBbEFbyJtbWEAAKBjIGkibWVzAACgYiCAAWdwdAC8Bb8FwwVvAG4ALmFmAADgNdhA3WEAmWNjAHIAAKAQIWkibGRlAChh6wHSBQAA1QVjAHkABmRsADuAzwDPQIACY2Zvc3UA4QXpBe0F8gX9BQABaXnlBegFcgBjADRhGWRyAADgNdgN3XAAZgAA4DXYQd3jAfcFAAD7BXIAAOA12KXc8iFjeQhk6yFjeQRkgANISmFjZm9zAAwGDwYSBhUGHQYhBiYGYwB5ACVkYwB5AAxk8CFwYZpjAAFleRkGHAbkIWlsNmEaZHIAAOA12A7dcABmAADgNdhC3WMAcgAA4DXYptyABUpUYWNlZmxtb3N0AD0GQAZDBl4GawZkB2gHcAd0B80H2gdjAHkACWQ7gDwAPECAAmNtbnByAEwGTwZSBlUGWwb1IXRlOWHiIWRhm2NnAACg6ifsI2FjZXRyZgCgEiFyAACgniGAAWFleQBkBmcGagbyIW9uPWHkIWlsO2EbZAABZnNvBjQHdAAABUFDREZSVFVWYXKABp4GpAbGBssG3AYDByEHwQIqBwABbnKEBowGZyVsZUJyYWNrZXQAAKDoJ/Ihb3cAoZAhQlKTBpcGYQByAACg5CHpJGdodEFycm93AKDGIWUjaWxpbmcAAKAII28A9QGqBgAAsgZiJWxlQnJhY2tldAAAoOYnbgDUAbcGAAC+BmUkZVZlY3RvcgAAoGEp5SJjdG9yQqDDIWEAcgAAoFkpbCJvb3IAAKAKI2kiZ2h0AAABQVbSBtcGciJyb3cAAKCUIeUiY3RvcgCgTikAAWVy4AbwBmUAAKGjIkFW5gbrBnIicm93AACgpCHlImN0b3IAoFopaSNhbmdsZQBCorIi+wYAAAAA/wZhAHIAAKDPKXEidWFsAACgtCJwAIABRFRWAAoHEQcYB+8kd25WZWN0b3IAoFEpZSRlVmVjdG9yAACgYCnlImN0b3JCoL8hYQByAACgWCnlImN0b3JCoLwhYQByAACgUilpAGcAaAB0AGEAcgByAG8A9wDMAnMAAANFRkdMU1Q/B0cHTgdUB1gHXwfxJXVhbEdyZWF0ZXIAoNoidSRsbEVxdWFsAACgZiJyI2VhdGVyAACgdiLlIXNzAKChKuwkYW50RXF1YWwAoH0qaSJsZGUAAKByInIAAOA12A/dZaDYIuYjdGFycm93AKDaIWkiZG90AD9hgAFucHcAege1B7kHZwAAAkxSbHKCB5QHmwerB+UhZnQAAUFSiAeNB3Iicm93AACg9SfpJGdodEFycm93AKD3J+kkZ2h0QXJyb3cAoPYn5SFmdAABYXLcAqEHaQBnAGgAdABhAHIAcgBvAPcA5wJpAGcAaAB0AGEAcgByAG8A9wDuAmYAAOA12EPdZQByAAABTFK/B8YHZSRmdEFycm93AACgmSHpJGdodEFycm93AKCYIYABY2h0ANMH1QfXB/IAWgYAoLAh8iFva0FhAKBqIgAEYWNlZmlvc3XpB+wH7gf/BwMICQgOCBEIcAAAoAUpeQAcZAABZGzyB/kHaSR1bVNwYWNlAACgXyBsI2ludHJmAACgMyFyAADgNdgQ3e4jdXNQbHVzAKATInAAZgAA4DXYRN1jAPIA/gecY4AESmFjZWZvc3R1ACEIJAgoCDUIgQiFCDsKQApHCmMAeQAKZGMidXRlAENhgAFhZXkALggxCDQI8iFvbkdh5CFpbEVhHWSAAWdzdwA7CGEIfQjhInRpdmWAAU1UVgBECEwIWQhlJWRpdW1TcGFjZQAAoAsgaABpAAABY25SCFMIawBTAHAAYQBjAOUASwhlAHIAeQBUAGgAaQDuAFQI9CFlZAABR0xnCHUIcgBlAGEAdABlAHIARwByAGUAYQB0AGUA8gDrBGUAcwBzAEwAZQBzAPMA2wdMImluZQAKYHIAAOA12BHdAAJCbnB0jAiRCJkInAhyImVhawAAoGAgwiZyZWFraW5nU3BhY2WgYGYAAKAVIUOq7CqzCMIIzQgAAOcIGwkAAAAAAAAtCQAAbwkAAIcJAACdCcAJGQoAADQKAAFvdbYIvAjuI2dydWVudACgYiJwIkNhcAAAoG0ibyh1YmxlVmVydGljYWxCYXIAAKAmIoABbHF4ANII1wjhCOUibWVudACgCSL1IWFsVKBgImkibGRlAADgQiI4A2kic3RzAACgBCJyI2VhdGVyAACjbyJFRkdMU1T1CPoIAgkJCQ0JFQlxInVhbAAAoHEidSRsbEVxdWFsAADgZyI4A3IjZWF0ZXIAAOBrIjgD5SFzcwCgeSLsJGFudEVxdWFsAOB+KjgDaSJsZGUAAKB1IvUhbXBEASAJJwnvI3duSHVtcADgTiI4A3EidWFsAADgTyI4A2UAAAFmczEJRgn0JFRyaWFuZ2xlQqLqIj0JAAAAAEIJYQByAADgzyk4A3EidWFsAACg7CJzAICibiJFR0xTVABRCVYJXAlhCWkJcSJ1YWwAAKBwInIjZWF0ZXIAAKB4IuUhc3MA4GoiOAPsJGFudEVxdWFsAOB9KjgDaSJsZGUAAKB0IuUic3RlZAABR0x1CX8J8iZlYXRlckdyZWF0ZXIA4KIqOAPlI3NzTGVzcwDgoSo4A/IjZWNlZGVzAKGAIkVTjwmVCXEidWFsAADgryo4A+wkYW50RXF1YWwAoOAiAAFlaaAJqQl2JmVyc2VFbGVtZW50AACgDCLnJWh0VHJpYW5nbGVCousitgkAAAAAuwlhAHIAAODQKTgDcSJ1YWwAAKDtIgABcXXDCeAJdSNhcmVTdQAAAWJwywnVCfMhZXRF4I8iOANxInVhbAAAoOIi5SJyc2V0ReCQIjgDcSJ1YWwAAKDjIoABYmNwAOYJ8AkNCvMhZXRF4IIi0iBxInVhbAAAoIgi4yJlZWRzgKGBIkVTVAD6CQAKBwpxInVhbAAA4LAqOAPsJGFudEVxdWFsAKDhImkibGRlAADgfyI4A+UicnNldEXggyLSIHEidWFsAACgiSJpImxkZQCAoUEiRUZUACIKJwouCnEidWFsAACgRCJ1JGxsRXF1YWwAAKBHImkibGRlAACgSSJlJXJ0aWNhbEJhcgAAoCQiYwByAADgNdip3GkAbABkAGUAO4DRANFAnWMAB0VhY2RmZ21vcHJzdHV2XgphCmgKcgp2CnoKgQqRCpYKqwqtCrsKyArNCuwhaWdSYWMAdQB0AGUAO4DTANNAAAFpeWwKcQpyAGMAO4DUANRAHmRiImxhYwBQYXIAAOA12BLdcgBhAHYAZQA7gNIA0kCAAWFlaQCHCooKjQpjAHIATGFnAGEAqWNjInJvbgCfY3AAZgAA4DXYRt3lI25DdXJseQABRFGeCqYKbyV1YmxlUXVvdGUAAKAcIHUib3RlAACgGCAAoFQqAAFjbLEKtQpyAADgNdiq3GEAcwBoADuA2ADYQGkAbAHACsUKZABlADuA1QDVQGUAcwAAoDcqbQBsADuA1gDWQGUAcgAAAUJQ0wrmCgABYXLXCtoKcgAAoD4gYQBjAAABZWvgCuIKAKDeI2UAdAAAoLQjYSVyZW50aGVzaXMAAKDcI4AEYWNmaGlsb3JzAP0KAwsFCwkLCwsMCxELIwtaC3IjdGlhbEQAAKACInkAH2RyAADgNdgT3WkApmOgY/Ujc01pbnVzsWAAAWlwFQsgC24AYwBhAHIAZQBwAGwAYQBuAOUACgVmAACgGSGAobsqZWlvACoLRQtJC+MiZWRlc4CheiJFU1QANAs5C0ALcSJ1YWwAAKCvKuwkYW50RXF1YWwAoHwiaSJsZGUAAKB+Im0AZQAAoDMgAAFkcE0LUQv1IWN0AKAPIm8jcnRpb24AYaA3ImwAAKAdIgABY2leC2ILcgAA4DXYq9yoYwACVWZvc2oLbwtzC3cLTwBUADuAIgAiQHIAAOA12BTdcABmAACgGiFjAHIAAOA12KzcAAZCRWFjZWZoaW9yc3WPC5MLlwupC7YL2AvbC90LhQyTDJoMowzhIXJyAKAQKUcAO4CuAK5AgAFjbnIAnQugC6ML9SF0ZVRhZwAAoOsncgB0oKAhbAAAoBYpgAFhZXkArwuyC7UL8iFvblhh5CFpbFZhIGR2oBwhZSJyc2UAAAFFVb8LzwsAAWxxwwvIC+UibWVudACgCyL1JGlsaWJyaXVtAKDLIXAmRXF1aWxpYnJpdW0AAKBvKXIAAKAcIW8AoWPnIWh0AARBQ0RGVFVWYewLCgwQDDIMNwxeDHwM9gIAAW5y8Av4C2clbGVCcmFja2V0AACg6SfyIW93AKGSIUJM/wsDDGEAcgAAoOUhZSRmdEFycm93AACgxCFlI2lsaW5nAACgCSNvAPUBFgwAAB4MYiVsZUJyYWNrZXQAAKDnJ24A1AEjDAAAKgxlJGVWZWN0b3IAAKBdKeUiY3RvckKgwiFhAHIAAKBVKWwib29yAACgCyMAAWVyOwxLDGUAAKGiIkFWQQxGDHIicm93AACgpiHlImN0b3IAoFspaSNhbmdsZQBCorMiVgwAAAAAWgxhAHIAAKDQKXEidWFsAACgtSJwAIABRFRWAGUMbAxzDO8kd25WZWN0b3IAoE8pZSRlVmVjdG9yAACgXCnlImN0b3JCoL4hYQByAACgVCnlImN0b3JCoMAhYQByAACgUykAAXB1iQyMDGYAAKAdIe4kZEltcGxpZXMAoHAp6SRnaHRhcnJvdwCg2yEAAWNongyhDHIAAKAbIQCgsSHsJGVEZWxheWVkAKD0KYAGSE9hY2ZoaW1vcXN0dQC/DMgMzAzQDOIM5gwKDQ0NFA0ZDU8NVA1YDQABQ2PDDMYMyCFjeSlkeQAoZEYiVGN5ACxkYyJ1dGUAWmEAorwqYWVpedgM2wzeDOEM8iFvbmBh5CFpbF5hcgBjAFxhIWRyAADgNdgW3e8hcnQAAkRMUlXvDPYM/QwEDW8kd25BcnJvdwAAoJMhZSRmdEFycm93AACgkCHpJGdodEFycm93AKCSIXAjQXJyb3cAAKCRIechbWGjY+EkbGxDaXJjbGUAoBgicABmAADgNdhK3XICHw0AAAAAIg10AACgGiLhIXJlgKGhJUlTVQAqDTINSg3uJXRlcnNlY3Rpb24AoJMidQAAAWJwNw1ADfMhZXRFoI8icSJ1YWwAAKCRIuUicnNldEWgkCJxInVhbAAAoJIibiJpb24AAKCUImMAcgAA4DXYrtxhAHIAAKDGIgACYmNtcF8Nag2ODZANc6DQImUAdABFoNAicSJ1YWwAAKCGIgABY2huDYkNZSJlZHMAgKF7IkVTVAB4DX0NhA1xInVhbAAAoLAq7CRhbnRFcXVhbACgfSJpImxkZQAAoH8iVABoAGEA9ADHCwCgESIAodEiZXOVDZ8NciJzZXQARaCDInEidWFsAACghyJlAHQAAKDRIoAFSFJTYWNmaGlvcnMAtQ27Db8NyA3ODdsN3w3+DRgOHQ4jDk8AUgBOADuA3gDeQMEhREUAoCIhAAFIY8MNxg1jAHkAC2R5ACZkAAFidcwNzQ0JYKRjgAFhZXkA1A3XDdoN8iFvbmRh5CFpbGJhImRyAADgNdgX3QABZWnjDe4N8gHoDQAA7Q3lImZvcmUAoDQiYQCYYwABY27yDfkNayNTcGFjZQAA4F8gCiDTInBhY2UAoAkg7CFkZYChPCJFRlQABw4MDhMOcSJ1YWwAAKBDInUkbGxFcXVhbAAAoEUiaSJsZGUAAKBIInAAZgAA4DXYS93pI3BsZURvdACg2yAAAWN0Jw4rDnIAAOA12K/c8iFva2Zh4QpFDlYOYA5qDgAAbg5yDgAAAAAAAAAAAAB5DnwOqA6zDgAADg8RDxYPGg8AAWNySA5ODnUAdABlADuA2gDaQHIAb6CfIeMhaXIAoEkpcgDjAVsOAABdDnkADmR2AGUAbGEAAWl5Yw5oDnIAYwA7gNsA20AjZGIibGFjAHBhcgAA4DXYGN1yAGEAdgBlADuA2QDZQOEhY3JqYQABZGl/Dp8OZQByAAABQlCFDpcOAAFhcokOiw5yAF9gYQBjAAABZWuRDpMOAKDfI2UAdAAAoLUjYSVyZW50aGVzaXMAAKDdI28AbgBQoMMi7CF1cwCgjiIAAWdwqw6uDm8AbgByYWYAAOA12EzdAARBREVUYWRwc78O0g7ZDuEOBQPqDvMOBw9yInJvdwDCoZEhyA4AAMwOYQByAACgEilvJHduQXJyb3cAAKDFIW8kd25BcnJvdwAAoJUhcSV1aWxpYnJpdW0AAKBuKWUAZQBBoKUiciJyb3cAAKClIW8AdwBuAGEAcgByAG8A9wAQA2UAcgAAAUxS+Q4AD2UkZnRBcnJvdwAAoJYh6SRnaHRBcnJvdwCglyFpAGyg0gNvAG4ApWPpIW5nbmFjAHIAAOA12LDcaSJsZGUAaGFtAGwAO4DcANxAgAREYmNkZWZvc3YALQ8xDzUPNw89D3IPdg97D4AP4SFzaACgqyJhAHIAAKDrKnkAEmThIXNobKCpIgCg5ioAAWVyQQ9DDwCgwSKAAWJ0eQBJD00Paw9hAHIAAKAWIGmgFiDjIWFsAAJCTFNUWA9cD18PZg9hAHIAAKAjIukhbmV8YGUkcGFyYXRvcgAAoFgnaSJsZGUAAKBAItQkaGluU3BhY2UAoAogcgAA4DXYGd1wAGYAAOA12E3dYwByAADgNdix3GQiYXNoAACgqiKAAmNlZm9zAI4PkQ+VD5kPng/pIXJjdGHkIWdlAKDAInIAAOA12BrdcABmAADgNdhO3WMAcgAA4DXYstwAAmZpb3OqD64Prw+0D3IAAOA12BvdnmNwAGYAAOA12E/dYwByAADgNdiz3IAEQUlVYWNmb3N1AMgPyw/OD9EP2A/gD+QP6Q/uD2MAeQAvZGMAeQAHZGMAeQAuZGMAdQB0AGUAO4DdAN1AAAFpedwP3w9yAGMAdmErZHIAAOA12BzdcABmAADgNdhQ3WMAcgAA4DXYtNxtAGwAeGEABEhhY2RlZm9z/g8BEAUQDRAQEB0QIBAkEGMAeQAWZGMidXRlAHlhAAFheQkQDBDyIW9ufWEXZG8AdAB7YfIBFRAAABwQbwBXAGkAZAB0AOgAVAhhAJZjcgAAoCghcABmAACgJCFjAHIAAOA12LXc4QtCEEkQTRAAAGcQbRByEAAAAAAAAAAAeRCKEJcQ8hD9EAAAGxEhETIROREAAD4RYwB1AHQAZQA7gOEA4UByImV2ZQADYYCiPiJFZGl1eQBWEFkQWxBgEGUQAOA+IjMDAKA/InIAYwA7gOIA4kB0AGUAO4C0ALRAMGRsAGkAZwA7gOYA5kByoGEgAOA12B7dcgBhAHYAZQA7gOAA4EAAAWVwfBCGEAABZnCAEIQQ8yF5bQCgNSHoAIMQaABhALFjAAFhcI0QWwAAAWNskRCTEHIAAWFnAACgPypkApwQAAAAALEQAKInImFkc3ajEKcQqRCuEG4AZAAAoFUqAKBcKmwib3BlAACgWCoAoFoqAKMgImVsbXJzersQvRDAEN0Q5RDtEACgpCllAACgICJzAGQAYaAhImEEzhDQENIQ1BDWENgQ2hDcEACgqCkAoKkpAKCqKQCgqykAoKwpAKCtKQCgrikAoK8pdAB2oB8iYgBkoL4iAKCdKQABcHTpEOwQaAAAoCIixWDhIXJyAKB8IwABZ3D1EPgQbwBuAAVhZgAA4DXYUt0Ao0giRWFlaW9wBxEJEQ0RDxESERQRAKBwKuMhaXIAoG8qAKBKImQAAKBLInMAJ2DyIW94ZaBIIvEADhFpAG4AZwA7gOUA5UCAAWN0eQAmESoRKxFyAADgNdi23CpgbQBwAGWgSCLxAPgBaQBsAGQAZQA7gOMA40BtAGwAO4DkAORAAAFjaUERRxFvAG4AaQBuAPQA6AFuAHQAAKARKgAITmFiY2RlZmlrbG5vcHJzdWQRaBGXEZ8RpxGrEdIR1hErEjASexKKEn0RThNbE3oTbwB0AACg7SoAAWNybBGJEWsAAAJjZXBzdBF4EX0RghHvIW5nAKBMInAjc2lsb24A9mNyImltZQAAoDUgaQBtAGWgPSJxAACgzSJ2AY0RkRFlAGUAAKC9ImUAZABnoAUjZQAAoAUjcgBrAHSgtSPiIXJrAKC2IwABb3mjEaYRbgDnAHcRMWTxIXVvAKAeIIACY21wcnQAtBG5Eb4RwRHFEeEhdXPloDUi5ABwInR5dgAAoLApcwDpAH0RbgBvAPUA6gCAAWFodwDLEcwRzhGyYwCgNiHlIWVuAKBsInIAAOA12B/dZwCAA2Nvc3R1dncA4xHyEQUSEhIhEiYSKRKAAWFpdQDpEesR7xHwAKMFcgBjAACg7yVwAACgwyKAAWRwdAD4EfwRABJvAHQAAKAAKuwhdXMAoAEqaSJtZXMAAKACKnECCxIAAAAADxLjIXVwAKAGKmEAcgAAoAUm8iNpYW5nbGUAAWR1GhIeEu8hd24AoL0lcAAAoLMlcCJsdXMAAKAEKmUA5QBCD+UAkg9hInJvdwAAoA0pgAFha28ANhJoEncSAAFjbjoSZRJrAIABbHN0AEESRxJNEm8jemVuZ2UAAKDrKXEAdQBhAHIA5QBcBPIjaWFuZ2xlgKG0JWRscgBYElwSYBLvIXduAKC+JeUhZnQAoMIlaSJnaHQAAKC4JWsAAKAjJLEBbRIAAHUSsgFxEgAAcxIAoJIlAKCRJTQAAKCTJWMAawAAoIglAAFlb38ShxJx4D0A5SD1IWl2AOBhIuUgdAAAoBAjAAJwdHd4kRKVEpsSnxJmAADgNdhT3XSgpSJvAG0AAKClIvQhaWUAoMgiAAZESFVWYmRobXB0dXayEsES0RLgEvcS+xIKExoTHxMjEygTNxMAAkxSbHK5ErsSvRK/EgCgVyUAoFQlAKBWJQCgUyUAolAlRFVkdckSyxLNEs8SAKBmJQCgaSUAoGQlAKBnJQACTFJsctgS2hLcEt4SAKBdJQCgWiUAoFwlAKBZJQCjUSVITFJobHLrEu0S7xLxEvMS9RIAoGwlAKBjJQCgYCUAoGslAKBiJQCgXyVvAHgAAKDJKQACTFJscgITBBMGEwgTAKBVJQCgUiUAoBAlAKAMJQCiACVEVWR1EhMUExYTGBMAoGUlAKBoJQCgLCUAoDQlaSJudXMAAKCfIuwhdXMAoJ4iaSJtZXMAAKCgIgACTFJsci8TMRMzEzUTAKBbJQCgWCUAoBglAKAUJQCjAiVITFJobHJCE0QTRhNIE0oTTBMAoGolAKBhJQCgXiUAoDwlAKAkJQCgHCUAAWV2UhNVE3YA5QD5AGIAYQByADuApgCmQAACY2Vpb2ITZhNqE24TcgAA4DXYt9xtAGkAAKBPIG0A5aA9IogRbAAAoVwAYmh0E3YTAKDFKfMhdWIAoMgnbAF+E4QTbABloCIgdAAAoCIgcAAAoU4iRWWJE4sTAKCuKvGgTyI8BeEMqRMAAN8TABQDFB8UAAAjFDQUAAAAAIUUAAAAAI0UAAAAANcU4xT3FPsUAACIFQAAlhWAAWNwcgCuE7ET1RP1IXRlB2GAoikiYWJjZHMAuxO/E8QTzhPSE24AZAAAoEQqciJjdXAAAKBJKgABYXXIE8sTcAAAoEsqcAAAoEcqbwB0AACgQCoA4CkiAP4AAWVv2RPcE3QAAKBBIO4ABAUAAmFlaXXlE+8T9RP4E/AB6hMAAO0TcwAAoE0qbwBuAA1hZABpAGwAO4DnAOdAcgBjAAlhcABzAHOgTCptAACgUCpvAHQAC2GAAWRtbgAIFA0UEhRpAGwAO4C4ALhAcCJ0eXYAAKCyKXQAAIGiADtlGBQZFKJAcgBkAG8A9ABiAXIAAOA12CDdgAFjZWkAKBQqFDIUeQBHZGMAawBtoBMn4SFyawCgEyfHY3IAAKPLJUVjZWZtcz8UQRRHFHcUfBSAFACgwykAocYCZWxGFEkUcQAAoFciZQBhAlAUAAAAAGAUciJyb3cAAAFsclYUWhTlIWZ0AKC6IWkiZ2h0AACguyGAAlJTYWNkAGgUaRRrFG8UcxSuYACgyCRzAHQAAKCbIukhcmMAoJoi4SFzaACgnSJuImludAAAoBAqaQBkAACg7yrjIWlyAKDCKfUhYnN1oGMmaQB0AACgYybsApMUmhS2FAAAwxRvAG4AZaA6APGgVCKrAG0CnxQAAAAAoxRhAHSgLABAYAChASJmbKcUqRTuABMNZQAAAW14rhSyFOUhbnQAoAEiZQDzANIB5wG6FAAAwBRkoEUibwB0AACgbSpuAPQAzAGAAWZyeQDIFMsUzhQA4DXYVN1vAOQA1wEAgakAO3MeAdMUcgAAoBchAAFhb9oU3hRyAHIAAKC1IXMAcwAAoBcnAAFjdeYU6hRyAADgNdi43AABYnDuFPIUZaDPKgCg0SploNAqAKDSKuQhb3QAoO8igANkZWxwcnZ3AAYVEBUbFSEVRBVlFYQV4SFycgABbHIMFQ4VAKA4KQCgNSlwAhYVAAAAABkVcgAAoN4iYwAAoN8i4SFycnCgtiEAoD0pgKIqImJjZG9zACsVMBU6FT4VQRVyImNhcAAAoEgqAAFhdTQVNxVwAACgRipwAACgSipvAHQAAKCNInIAAKBFKgDgKiIA/gACYWxydksVURVuFXMVcgByAG2gtyEAoDwpeQCAAWV2dwBYFWUVaRVxAHACXxUAAAAAYxVyAGUA4wAXFXUA4wAZFWUAZQAAoM4iZSJkZ2UAAKDPImUAbgA7gKQApEBlI2Fycm93AAABbHJ7FX8V5SFmdACgtiFpImdodAAAoLchZQDkAG0VAAFjaYsVkRVvAG4AaQBuAPQAkwFuAHQAAKAxImwiY3R5AACgLSOACUFIYWJjZGVmaGlqbG9yc3R1d3oAuBW7Fb8V1RXgFegV+RUKFhUWHxZUFlcWZRbFFtsW7xb7FgUXChdyAPIAtAJhAHIAAKBlKQACZ2xyc8YVyhXOFdAV5yFlcgCgICDlIXRoAKA4IfIA9QxoAHagECAAoKMiawHZFd4VYSJyb3cAAKAPKWEA4wBfAgABYXnkFecV8iFvbg9hNGQAoUYhYW/tFfQVAAFnciEC8RVyAACgyiF0InNlcQAAoHcqgAFnbG0A/xUCFgUWO4CwALBAdABhALRjcCJ0eXYAAKCxKQABaXIOFhIW8yFodACgfykA4DXYId1hAHIAAAFschsWHRYAoMMhAKDCIYACYWVnc3YAKBauAjYWOhY+Fm0AAKHEIm9zLhY0Fm4AZABzoMQi9SFpdACgZiZhIm1tYQDdY2kAbgAAoPIiAKH3AGlvQxZRFmQAZQAAgfcAO29KFksW90BuI3RpbWVzAACgxyJuAPgAUBZjAHkAUmRjAG8CXhYAAAAAYhZyAG4AAKAeI28AcAAAoA0jgAJscHR1dwBuFnEWdRaSFp4W7CFhciRgZgAA4DXYVd0AotkCZW1wc30WhBaJFo0WcQBkoFAibwB0AACgUSJpIm51cwAAoDgi7CF1cwCgFCLxInVhcmUAoKEiYgBsAGUAYgBhAHIAdwBlAGQAZwDlANcAbgCAAWFkaAClFqoWtBZyAHIAbwD3APUMbwB3AG4AYQByAHIAbwB3APMA8xVhI3Jwb29uAAABbHK8FsAWZQBmAPQAHBZpAGcAaAD0AB4WYgHJFs8WawBhAHIAbwD3AJILbwLUFgAAAADYFnIAbgAAoB8jbwBwAACgDCOAAWNvdADhFukW7BYAAXJ55RboFgDgNdi53FVkbAAAoPYp8iFvaxFhAAFkcvMW9xZvAHQAAKDxImkA5qC/JVsSAAFhaP8WAhdyAPIANQNhAPIA1wvhIm5nbGUAoKYpAAFjaQ4XEBd5AF9k5yJyYXJyAKD/JwAJRGFjZGVmZ2xtbm9wcXJzdHV4MRc4F0YXWxcyBF4XaRd5F40XrBe0F78X2RcVGCEYLRg1GEAYAAFEbzUXgRZvAPQA+BUAAWNzPBdCF3UAdABlADuA6QDpQPQhZXIAoG4qAAJhaW95TRdQF1YXWhfyIW9uG2FyAGOgViI7gOoA6kDsIW9uAKBVIk1kbwB0ABdhAAFEcmIXZhdvAHQAAKBSIgDgNdgi3XKhmipuF3QXYQB2AGUAO4DoAOhAZKCWKm8AdAAAoJgqgKGZKmlscwCAF4UXhxfuInRlcnMAoOcjAKATIWSglSpvAHQAAKCXKoABYXBzAJMXlheiF2MAcgATYXQAeQBzogUinxcAAAAAoRdlAHQAAKAFInAAMaADIDMBqRerFwCgBCAAoAUgAAFnc7AXsRdLYXAAAKACIAABZ3C4F7sXbwBuABlhZgAA4DXYVt2AAWFscwDFF8sXzxdyAHOg1SJsAACg4yl1AHMAAKBxKmkAAKG1A2x21RfYF28AbgC1Y/VjAAJjc3V24BfoF/0XEBgAAWlv5BdWF3IAYwAAoFYiaQLuFwAAAADwF+0ADQThIW50AAFnbPUX+Rd0AHIAAKCWKuUhc3MAoJUqgAFhZWkAAxgGGAoYbABzAD1gcwB0AACgXyJ2AESgYSJEAACgeCrwImFyc2wAoOUpAAFEYRkYHRhvAHQAAKBTInIAcgAAoHEpgAFjZGkAJxgqGO0XcgAAoC8hbwD0AIwCAAFhaDEYMhi3YzuA8ADwQAABbXI5GD0YbAA7gOsA60BvAACgrCCAAWNpcABGGEgYSxhsACFgcwD0ACwEAAFlb08YVxhjAHQAYQB0AGkAbwDuABoEbgBlAG4AdABpAGEAbADlADME4Ql1GAAAgRgAAIMYiBgAAAAAoRilGAAAqhgAALsYvhjRGAAA1xgnGWwAbABpAG4AZwBkAG8AdABzAGUA8QBlF3kARGRtImFsZQAAoEAmgAFpbHIAjRiRGJ0Y7CFpZwCgA/tpApcYAAAAAJoYZwAAoAD7aQBnAACgBPsA4DXYI93sIWlnAKAB++whaWcA4GYAagCAAWFsdACvGLIYthh0AACgbSZpAGcAAKAC+24AcwAAoLElbwBmAJJh8AHCGAAAxhhmAADgNdhX3QABYWvJGMwYbADsAGsEdqDUIgCg2SphI3J0aW50AACgDSoAAWFv2hgiGQABY3PeGB8ZsQPnGP0YBRkSGRUZAAAdGbID7xjyGPQY9xj5GAAA+xg7gL0AvUAAoFMhO4C8ALxAAKBVIQCgWSEAoFshswEBGQAAAxkAoFQhAKBWIbQCCxkOGQAAAAAQGTuAvgC+QACgVyEAoFwhNQAAoFghtgEZGQAAGxkAoFohAKBdITgAAKBeIWwAAKBEIHcAbgAAoCIjYwByAADgNdi73IAIRWFiY2RlZmdpamxub3JzdHYARhlKGVoZXhlmGWkZkhmWGZkZnRmgGa0ZxhnLGc8Z4BkjGmygZyIAoIwqgAFjbXAAUBlTGVgZ9SF0ZfVhbQBhAOSgswM6FgCghipyImV2ZQAfYQABaXliGWUZcgBjAB1hM2RvAHQAIWGAoWUibHFzAMYEcBl6GfGhZSLOBAAAdhlsAGEAbgD0AN8EgKF+KmNkbACBGYQZjBljAACgqSpvAHQAb6CAKmyggioAoIQqZeDbIgD+cwAAoJQqcgAA4DXYJN3noGsirATtIWVsAKA3IWMAeQBTZIChdyJFYWoApxmpGasZAKCSKgCgpSoAoKQqAAJFYWVztBm2Gb0ZwhkAoGkicABwoIoq8iFveACgiipxoIgq8aCIKrUZaQBtAACg5yJwAGYAAOA12FjdYQB2AOUAYwIAAWNp0xnWGXIAAKAKIW0AAKFzImVs3BneGQCgjioAoJAqAIM+ADtjZGxxco0E6xn0GfgZ/BkBGgABY2nvGfEZAKCnKnIAAKB6Km8AdAAAoNci0CFhcgCglSl1ImVzdAAAoHwqgAJhZGVscwAKGvQZFhrVBCAa8AEPGgAAFBpwAHIAbwD4AFkZcgAAoHgpcQAAAWxxxAQbGmwAZQBzAPMASRlpAO0A5AQAAWVuJxouGnIjdG5lcXEAAOBpIgD+xQAsGgAFQWFiY2Vma29zeUAaQxpmGmoabRqDGocalhrCGtMacgDyAMwCAAJpbG1yShpOGlAaVBpyAHMA8ABxD2YAvWBpAGwA9AASBQABZHJYGlsaYwB5AEpkAKGUIWN3YBpkGmkAcgAAoEgpAKCtIWEAcgAAoA8h6SFyYyVhgAFhbHIAcxp7Gn8a8iF0c3WgZSZpAHQAAKBlJuwhaXAAoCYg4yFvbgCguSJyAADgNdgl3XMAAAFld4wakRphInJvdwAAoCUpYSJyb3cAAKAmKYACYW1vcHIAnxqjGqcauhq+GnIAcgAAoP8h9CFodACgOyJrAAABbHKsGrMaZSRmdGFycm93AACgqSHpJGdodGFycm93AKCqIWYAAOA12Fnd4iFhcgCgFSCAAWNsdADIGswa0BpyAADgNdi93GEAcwDoAGka8iFvaydhAAFicNca2xr1IWxsAKBDIOghZW4AoBAg4Qr2GgAA/RoAAAgbExsaGwAAIRs7GwAAAAA+G2IbmRuVG6sbAACyG80b0htjAHUAdABlADuA7QDtQAChYyBpeQEbBhtyAGMAO4DuAO5AOGQAAWN4CxsNG3kANWRjAGwAO4ChAKFAAAFmcssCFhsA4DXYJt1yAGEAdgBlADuA7ADsQIChSCFpbm8AJxsyGzYbAAFpbisbLxtuAHQAAKAMKnQAAKAtIuYhaW4AoNwpdABhAACgKSHsIWlnM2GAAWFvcABDG1sbXhuAAWNndABJG0sbWRtyACthgAFlbHAAcQVRG1UbaQBuAOUAyAVhAHIA9AByBWgAMWFmAACgtyJlAGQAtWEAoggiY2ZvdGkbbRt1G3kb4SFyZQCgBSFpAG4AdKAeImkAZQAAoN0pZABvAPQAWxsAoisiY2VscIEbhRuPG5QbYQBsAACguiIAAWdyiRuNG2UAcgDzACMQ4wCCG2EicmhrAACgFyryIW9kAKA8KgACY2dwdJ8boRukG6gbeQBRZG8AbgAvYWYAAOA12FrdYQC5Y3UAZQBzAHQAO4C/AL9AAAFjabUbuRtyAADgNdi+3G4AAKIIIkVkc3bCG8QbyBvQAwCg+SJvAHQAAKD1Inag9CIAoPMiaaBiIOwhZGUpYesB1hsAANkbYwB5AFZkbAA7gO8A70AAA2NmbW9zdeYb7hvyG/Ub+hsFHAABaXnqG+0bcgBjADVhOWRyAADgNdgn3eEhdGg3YnAAZgAA4DXYW93jAf8bAAADHHIAAOA12L/c8iFjeVhk6yFjeVRkAARhY2ZnaGpvcxUcGhwiHCYcKhwtHDAcNRzwIXBhdqC6A/BjAAFleR4cIRzkIWlsN2E6ZHIAAOA12CjdciJlZW4AOGFjAHkARWRjAHkAXGRwAGYAAOA12FzdYwByAADgNdjA3IALQUJFSGFiY2RlZmdoamxtbm9wcnN0dXYAXhxtHHEcdRx5HN8cBx0dHTwd3B3tHfEdAR4EHh0eLB5FHrwewx7hHgkfPR9LH4ABYXJ0AGQcZxxpHHIA8gBvB/IAxQLhIWlsAKAbKeEhcnIAoA4pZ6BmIgCgiyphAHIAAKBiKWMJjRwAAJAcAACVHAAAAAAAAAAAAACZHJwcAACmHKgcrRwAANIc9SF0ZTph7SJwdHl2AKC0KXIAYQDuAFoG4iFkYbtjZwAAoegnZGyhHKMcAKCRKeUAiwYAoIUqdQBvADuAqwCrQHIAgKOQIWJmaGxwc3QAuhy/HMIcxBzHHMoczhxmoOQhcwAAoB8pcwAAoB0p6wCyGnAAAKCrIWwAAKA5KWkAbQAAoHMpbAAAoKIhAKGrKmFl1hzaHGkAbAAAoBkpc6CtKgDgrSoA/oABYWJyAOUc6RztHHIAcgAAoAwpcgBrAACgcicAAWFr8Rz4HGMAAAFla/Yc9xx7YFtgAAFlc/wc/hwAoIspbAAAAWR1Ax0FHQCgjykAoI0pAAJhZXV5Dh0RHRodHB3yIW9uPmEAAWRpFR0YHWkAbAA8YewAowbiAPccO2QAAmNxcnMkHScdLB05HWEAAKA2KXUAbwDyoBwgqhEAAWR1MB00HeghYXIAoGcpcyJoYXIAAKBLKWgAAKCyIQCiZCJmZ3FzRB1FB5Qdnh10AIACYWhscnQATh1WHWUdbB2NHXIicm93AHSgkCFhAOkAzxxhI3Jwb29uAAABZHVeHWId7yF3bgCgvSFwAACgvCHlJGZ0YXJyb3dzAKDHIWkiZ2h0AIABYWhzAHUdex2DHXIicm93APOglCGdBmEAcgBwAG8AbwBuAPMAzgtxAHUAaQBnAGEAcgByAG8A9wBlGugkcmVldGltZXMAoMsi8aFkIk0HAACaHWwAYQBuAPQAXgcAon0qY2Rnc6YdqR2xHbcdYwAAoKgqbwB0AG+gfypyoIEqAKCDKmXg2iIA/nMAAKCTKoACYWRlZ3MAwB3GHcod1h3ZHXAAcAByAG8A+ACmHG8AdAAAoNYicQAAAWdxzx3SHXQA8gBGB2cAdADyAHQcdADyAFMHaQDtAGMHgAFpbHIA4h3mHeod8yFodACgfClvAG8A8gDKBgDgNdgp3UWgdiIAoJEqYQH1Hf4dcgAAAWR1YB35HWygvCEAoGopbABrAACghCVjAHkAWWQAomoiYWNodAweDx4VHhkecgDyAGsdbwByAG4AZQDyAGAW4SFyZACgaylyAGkAAKD6JQABaW8hHiQe5CFvdEBh9SFzdGGgsCPjIWhlAKCwIwACRWFlczMeNR48HkEeAKBoInAAcKCJKvIhb3gAoIkqcaCHKvGghyo0HmkAbQAAoOYiAARhYm5vcHR3elIeXB5fHoUelh6mHqsetB4AAW5yVh5ZHmcAAKDsJ3IAAKD9IXIA6wCwBmcAgAFsbXIAZh52Hnse5SFmdAABYXKIB2weaQBnAGgAdABhAHIAcgBvAPcAkwfhInBzdG8AoPwnaQBnAGgAdABhAHIAcgBvAPcAmgdwI2Fycm93AAABbHKNHpEeZQBmAPQAxhxpImdodAAAoKwhgAFhZmwAnB6fHqIecgAAoIUpAOA12F3ddQBzAACgLSppIm1lcwAAoDQqYQGvHrMecwB0AACgFyLhAIoOZaHKJbkeRhLuIWdlAKDKJWEAcgBsoCgAdAAAoJMpgAJhY2htdADMHs8e1R7bHt0ecgDyAJ0GbwByAG4AZQDyANYWYQByAGSgyyEAoG0pAKAOIHIAaQAAoL8iAANhY2hpcXTrHu8e1QfzHv0eBh/xIXVvAKA5IHIAAOA12MHcbQDloXIi+h4AAPweAKCNKgCgjyoAAWJ19xwBH28AcqAYIACgGiDyIW9rQmEAhDwAO2NkaGlscXJCBhcfxh0gHyQfKB8sHzEfAAFjaRsfHR8AoKYqcgAAoHkqcgBlAOUAkx3tIWVzAKDJIuEhcnIAoHYpdSJlc3QAAKB7KgABUGk1HzkfYQByAACglillocMlAgdfEnIAAAFkdUIfRx9zImhhcgAAoEop6CFhcgCgZikAAWVuTx9WH3IjdG5lcXEAAOBoIgD+xQBUHwAHRGFjZGVmaGlsbm9wc3VuH3Ifoh+rH68ftx+7H74f5h/uH/MfBwj/HwsgxCFvdACgOiIAAmNscHJ5H30fiR+eH3IAO4CvAK9AAAFldIEfgx8AoEImZaAgJ3MAZQAAoCAnc6CmIXQAbwCAoaYhZGx1AJQfmB+cH28AdwDuAHkDZQBmAPQA6gbwAOkO6yFlcgCgriUAAW95ph+qH+0hbWEAoCkqPGThIXNoAKAUIOElc3VyZWRhbmdsZQCgISJyAADgNdgq3W8AAKAnIYABY2RuAMQfyR/bH3IAbwA7gLUAtUBhoiMi0B8AANMf1x9zAPQAKxFpAHIAAKDwKm8AdAA7gLcAt0B1AHMA4qESIh4TAADjH3WgOCIAoCoqYwHqH+0fcAAAoNsq8gB+GnAAbAB1APMACAgAAWRw9x/7H+UhbHMAoKciZgAA4DXYXt0AAWN0AyAHIHIAAOA12MLc8CFvcwCgPiJsobwDECAVIPQiaW1hcACguCJhAPAAEyAADEdMUlZhYmNkZWZnaGlqbG1vcHJzdHV2dzwgRyBmIG0geSCqILgg2iDeIBEhFSEyIUMhTSFQIZwhnyHSIQAiIyKLIrEivyIUIwABZ3RAIEMgAODZIjgD9uBrItIgBwmAAWVsdABNIF8gYiBmAHQAAAFhclMgWCByInJvdwAAoM0h6SRnaHRhcnJvdwCgziEA4NgiOAP24Goi0iBfCekkZ2h0YXJyb3cAoM8hAAFEZHEgdSDhIXNoAKCvIuEhc2gAoK4igAJiY25wdACCIIYgiSCNIKIgbABhAACgByL1IXRlRGFnAADgICLSIACiSSJFaW9wlSCYIJwgniAA4HAqOANkAADgSyI4A3MASWFyAG8A+AAyCnUAcgBhoG4mbADzoG4mmwjzAa8gAACzIHAAO4CgAKBAbQBwAOXgTiI4AyoJgAJhZW91eQDBIMogzSDWINkg8AHGIAAAyCAAoEMqbwBuAEhh5CFpbEZhbgBnAGSgRyJvAHQAAOBtKjgDcAAAoEIqPWThIXNoAKATIACjYCJBYWRxc3jpIO0g+SD+IAIhDCFyAHIAAKDXIXIAAAFocvIg9SBrAACgJClvoJch9wAGD28AdAAA4FAiOAN1AGkA9gC7CAABZWkGIQohYQByAACgKCntAN8I6SFzdPOgBCLlCHIAAOA12CvdAAJFZXN0/wgcISshLiHxoXEiIiEAABMJ8aFxIgAJAAAnIWwAYQBuAPQAEwlpAO0AGQlyoG8iAKBvIoABQWFwADghOyE/IXIA8gBeIHIAcgAAoK4hYQByAACg8ipzogsiSiEAAAAAxwtkoPwiAKD6ImMAeQBaZIADQUVhZGVzdABcIV8hYiFmIWkhkyGWIXIA8gBXIADgZiI4A3IAcgAAoJohcgAAoCUggKFwImZxcwBwIYQhjiF0AAABYXJ1IXohcgByAG8A9wBlIWkAZwBoAHQAYQByAHIAbwD3AD4h8aFwImAhAACKIWwAYQBuAPQAZwlz4H0qOAMAoG4iaQDtAG0JcqBuImkA5aDqIkUJaQDkADoKAAFwdKMhpyFmAADgNdhf3YCBrAA7aW4AriGvIcchrEBuAIChCSJFZHYAtyG6Ib8hAOD5IjgDbwB0AADg9SI4A+EB1gjEIcYhAKD3IgCg9iJpAHagDCLhAagJzyHRIQCg/iIAoP0igAFhb3IA2CHsIfEhcgCAoSYiYXN0AOAh5SHpIWwAbABlAOwAywhsAADg/SrlIADgAiI4A2wiaW50AACgFCrjoYAi9yEAAPohdQDlAJsJY+CvKjgDZaCAIvEAkwkAAkFhaXQHIgoiFyIeInIA8gBsIHIAcgAAoZshY3cRIhQiAOAzKTgDAOCdITgDZyRodGFycm93AACgmyFyAGkA5aDrIr4JgANjaGltcHF1AC8iPCJHIpwhTSJQIloigKGBImNlcgA2Iv0JOSJ1AOUABgoA4DXYw9zvIXJ0bQKdIQAAAABEImEAcgDhAOEhbQBloEEi8aBEIiYKYQDyAMsIcwB1AAABYnBWIlgi5QDUCeUA3wmAAWJjcABgInMieCKAoYQiRWVzAGci7glqIgDgxSo4A2UAdABl4IIi0iBxAPGgiCJoImMAZaCBIvEA/gmAoYUiRWVzAH8iFgqCIgDgxio4A2UAdABl4IMi0iBxAPGgiSKAIgACZ2lscpIilCKaIpwi7AAMCWwAZABlADuA8QDxQOcAWwlpI2FuZ2xlAAABbHKkIqoi5SFmdGWg6iLxAEUJaSJnaHQAZaDrIvEAvgltoL0DAKEjAGVzuCK8InIAbwAAoBYhcAAAoAcggARESGFkZ2lscnMAziLSItYi2iLeIugi7SICIw8j4SFzaACgrSLhIXJyAKAEKXAAAOBNItIg4SFzaACgrCIAAWV04iLlIgDgZSLSIADgPgDSIG4iZmluAACg3imAAUFldADzIvci+iJyAHIAAKACKQDgZCLSIHLgPADSIGkAZQAA4LQi0iAAAUF0BiMKI3IAcgAAoAMp8iFpZQDgtSLSIGkAbQAA4Dwi0iCAAUFhbgAaIx4jKiNyAHIAAKDWIXIAAAFociMjJiNrAACgIylvoJYh9wD/DuUhYXIAoCcpUxJqFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVCMAAF4jaSN/I4IjjSOeI8AUAAAAAKYjwCMAANoj3yMAAO8jHiQvJD8kRCQAAWNzVyNsFHUAdABlADuA8wDzQAABaXlhI2cjcgBjoJoiO4D0APRAPmSAAmFiaW9zAHEjdCN3I3EBeiNzAOgAdhTsIWFjUWF2AACgOCrvIWxkAKC8KewhaWdTYQABY3KFI4kjaQByAACgvykA4DXYLN1vA5QjAAAAAJYjAACcI24A22JhAHYAZQA7gPIA8kAAoMEpAAFibaEjjAphAHIAAKC1KQACYWNpdKwjryO6I70jcgDyAFkUAAFpcrMjtiNyAACgvinvIXNzAKC7KW4A5QDZCgCgwCmAAWFlaQDFI8gjyyNjAHIATWFnAGEAyWOAAWNkbgDRI9Qj1iPyIW9uv2MAoLYpdQDzAHgBcABmAADgNdhg3YABYWVsAOQj5yPrI3IAAKC3KXIAcAAAoLkpdQDzAHwBAKMoImFkaW9zdvkj/CMPJBMkFiQbJHIA8gBeFIChXSplZm0AAyQJJAwkcgBvoDQhZgAAoDQhO4CqAKpAO4C6ALpA5yFvZgCgtiJyAACgVipsIm9wZQAAoFcqAKBbKoABY2xvACMkJSQrJPIACCRhAHMAaAA7gPgA+EBsAACgmCJpAGwBMyQ4JGQAZQA7gPUA9UBlAHMAYaCXInMAAKA2Km0AbAA7gPYA9kDiIWFyAKA9I+EKXiQAAHokAAB8JJQkAACYJKkkAAAAALUkEQsAAPAkAAAAAAQleiUAAIMlcgCAoSUiYXN0AGUkbyQBCwCBtgA7bGokayS2QGwAZQDsABgDaQJ1JAAAAAB4JG0AAKDzKgCg/Sp5AD9kcgCAAmNpbXB0AIUkiCSLJJkSjyRuAHQAJWBvAGQALmBpAGwAAKAwIOUhbmsAoDEgcgAA4DXYLd2AAWltbwCdJKAkpCR2oMYD1WNtAGEA9AD+B24AZQAAoA4m9KHAA64kAAC0JGMjaGZvcmsAAKDUItZjAAFhdbgkxCRuAAABY2u9JMIkawBooA8hAKAOIfYAaRpzAACkKwBhYmNkZW1zdNMkIRPXJNsk4STjJOck6yTjIWlyAKAjKmkAcgAAoCIqAAFvdYsW3yQAoCUqAKByKm4AO4CxALFAaQBtAACgJip3AG8AAKAnKoABaXB1APUk+iT+JO4idGludACgFSpmAADgNdhh3W4AZAA7gKMAo0CApHoiRWFjZWlub3N1ABMlFSUYJRslTCVRJVklSSV1JQCgsypwAACgtyp1AOUAPwtjoK8qgKJ6ImFjZW5zACclLSU0JTYlSSVwAHAAcgBvAPgAFyV1AHIAbAB5AGUA8QA/C/EAOAuAAWFlcwA8JUElRSXwInByb3gAoLkqcQBxAACgtSppAG0AAKDoImkA7QBEC20AZQDzoDIgIguAAUVhcwBDJVclRSXwAEAlgAFkZnAATwtfJXElgAFhbHMAZSVpJW0l7CFhcgCgLiPpIW5lAKASI/UhcmYAoBMjdKAdIu8AWQvyIWVsAKCwIgABY2l9JYElcgAA4DXYxdzIY24iY3NwAACgCCAAA2Zpb3BzdZElKxuVJZolnyWkJXIAAOA12C7dcABmAADgNdhi3XIiaW1lAACgVyBjAHIAAOA12MbcgAFhZW8AqiW6JcAldAAAAWVpryW2JXIAbgBpAG8AbgDzABkFbgB0AACgFipzAHQAZaA/APEACRj0AG0LgApBQkhhYmNkZWZoaWxtbm9wcnN0dXgA4yXyJfYl+iVpJpAmpia9JtUm5ib4JlonaCdxJ3UnnietJ7EnyCfiJ+cngAFhcnQA6SXsJe4lcgDyAJkM8gD6AuEhaWwAoBwpYQByAPIA3BVhAHIAAKBkKYADY2RlbnFydAAGJhAmEyYYJiYmKyZaJgABZXUKJg0mAOA9IjEDdABlAFVhaQDjACAN7SJwdHl2AKCzKWcAgKHpJ2RlbAAgJiImJCYAoJIpAKClKeUA9wt1AG8AO4C7ALtAcgAApZIhYWJjZmhscHN0dz0mQCZFJkcmSiZMJk4mUSZVJlgmcAAAoHUpZqDlIXMAAKAgKQCgMylzAACgHinrALka8ACVHmwAAKBFKWkAbQAAoHQpbAAAoKMhAKCdIQABYWleJmImaQBsAACgGilvAG6gNiJhAGwA8wB2C4ABYWJyAG8mciZ2JnIA8gAvEnIAawAAoHMnAAFha3omgSZjAAABZWt/JoAmfWBdYAABZXOFJocmAKCMKWwAAAFkdYwmjiYAoI4pAKCQKQACYWV1eZcmmiajJqUm8iFvbllhAAFkaZ4moSZpAGwAV2HsAA8M4gCAJkBkAAJjbHFzrSawJrUmuiZhAACgNylkImhhcgAAoGkpdQBvAPKgHSCjAWgAAKCzIYABYWNnAMMm0iaUC2wAgKEcIWlwcwDLJs4migxuAOUAoAxhAHIA9ADaC3QAAKCtJYABaWxyANsm3ybjJvMhaHQAoH0pbwBvAPIANgwA4DXYL90AAWFv6ib1JnIAAAFkde8m8SYAoMEhbKDAIQCgbCl2oMED8WOAAWducwD+Jk4nUCdoAHQAAANhaGxyc3QKJxInISc1Jz0nRydyInJvdwB0oJIhYQDpAFYmYSNycG9vbgAAAWR1GiceJ28AdwDuAPAmcAAAoMAh5SFmdAABYWgnJy0ncgByAG8AdwDzAAkMYQByAHAAbwBvAG4A8wATBGklZ2h0YXJyb3dzAACgySFxAHUAaQBnAGEAcgByAG8A9wBZJugkcmVldGltZXMAoMwiZwDaYmkAbgBnAGQAbwB0AHMAZQDxABwYgAFhaG0AYCdjJ2YncgDyAAkMYQDyABMEAKAPIG8idXN0AGGgsSPjIWhlAKCxI+0haWQAoO4qAAJhYnB0fCeGJ4knmScAAW5ygCeDJ2cAAKDtJ3IAAKD+IXIA6wAcDIABYWZsAI8nkieVJ3IAAKCGKQDgNdhj3XUAcwAAoC4qaSJtZXMAAKA1KgABYXCiJ6gncgBnoCkAdAAAoJQp7yJsaW50AKASKmEAcgDyADwnAAJhY2hxuCe8J6EMwCfxIXVvAKA6IHIAAOA12MfcAAFidYAmxCdvAPKgGSCoAYABaGlyAM4n0ifWJ3IAZQDlAE0n7SFlcwCgyiJpAIChuSVlZmwAXAxjEt4n9CFyaQCgzinsInVoYXIAoGgpAKAeIWENBSgJKA0oSyhVKIYoAACLKLAoAAAAAOMo5ygAABApJCkxKW0pcSmHKaYpAACYKgAAAACxKmMidXRlAFthcQB1AO8ABR+ApHsiRWFjZWlucHN5ABwoHignKCooLygyKEEoRihJKACgtCrwASMoAAAlKACguCpvAG4AYWF1AOUAgw1koLAqaQBsAF9hcgBjAF1hgAFFYXMAOCg6KD0oAKC2KnAAAKC6KmkAbQAAoOki7yJsaW50AKATKmkA7QCIDUFkbwB0AGKixSKRFgAAAABTKACgZiqAA0FhY21zdHgAYChkKG8ocyh1KHkogihyAHIAAKDYIXIAAAFocmkoayjrAJAab6CYIfcAzAd0ADuApwCnQGkAO2D3IWFyAKApKW0AAAFpbn4ozQBuAHUA8wDOAHQAAKA2J3IA7+A12DDdIxkAAmFjb3mRKJUonSisKHIAcAAAoG8mAAFoeZkonChjAHkASWRIZHIAdABtAqUoAAAAAKgoaQDkAFsPYQByAGEA7ABsJDuArQCtQAABZ22zKLsobQBhAAChwwNmdroouijCY4CjPCJkZWdsbnByAMgozCjPKNMo1yjaKN4obwB0AACgairxoEMiCw5FoJ4qAKCgKkWgnSoAoJ8qZQAAoEYi7CF1cwCgJCrhIXJyAKByKWEAcgDyAPwMAAJhZWl07Sj8KAEpCCkAAWxz8Sj4KGwAcwBlAHQAbQDpAH8oaABwAACgMyrwImFyc2wAoOQpAAFkbFoPBSllAACgIyNloKoqc6CsKgDgrCoA/oABZmxwABUpGCkfKfQhY3lMZGKgLwBhoMQpcgAAoD8jZgAA4DXYZN1hAAABZHIoKRcDZQBzAHWgYCZpAHQAAKBgJoABY3N1ADYpRilhKQABYXU6KUApcABzoJMiAOCTIgD+cABzoJQiAOCUIgD+dQAAAWJwSylWKQChjyJlcz4NUCllAHQAZaCPIvEAPw0AoZAiZXNIDVspZQB0AGWgkCLxAEkNAKGhJWFmZilbBHIAZQFrKVwEAKChJWEAcgDyAAMNAAJjZW10dyl7KX8pgilyAADgNdjI3HQAbQDuAM4AaQDsAAYpYQByAOYAVw0AAWFyiimOKXIA5qAGJhESAAFhbpIpoylpImdodAAAAWVwmSmgKXAAcwBpAGwAbwDuANkXaADpAKAkcwCvYIACYmNtbnAArin8KY4NJSooKgCkgiJFZGVtbnByc7wpvinCKcgpzCnUKdgp3CkAoMUqbwB0AACgvSpkoIYibwB0AACgwyr1IWx0AKDBKgABRWXQKdIpAKDLKgCgiiLsIXVzAKC/KuEhcnIAoHkpgAFlaXUA4inxKfQpdAAAoYIiZW7oKewpcQDxoIYivSllAHEA8aCKItEpbQAAoMcqAAFicPgp+ikAoNUqAKDTKmMAgKJ7ImFjZW5zAAcqDSoUKhYqRihwAHAAcgBvAPgAIyh1AHIAbAB5AGUA8QCDDfEAfA2AAWFlcwAcKiIqPShwAHAAcgBvAPgAPChxAPEAOShnAACgaiYApoMiMTIzRWRlaGxtbnBzPCo/KkIqRSpHKlIqWCpjKmcqaypzKncqO4C5ALlAO4CyALJAO4CzALNAAKDGKgABb3NLKk4qdAAAoL4qdQBiAACg2CpkoIcibwB0AACgxCpzAAABb3VdKmAqbAAAoMknYgAAoNcq4SFycgCgeyn1IWx0AKDCKgABRWVvKnEqAKDMKgCgiyLsIXVzAKDAKoABZWl1AH0qjCqPKnQAAKGDImVugyqHKnEA8aCHIkYqZQBxAPGgiyJwKm0AAKDIKgABYnCTKpUqAKDUKgCg1iqAAUFhbgCdKqEqrCpyAHIAAKDZIXIAAAFocqYqqCrrAJUab6CZIfcAxQf3IWFyAKAqKWwAaQBnADuA3wDfQOELzyrZKtwq6SrsKvEqAAD1KjQrAAAAAAAAAAAAAEwrbCsAAHErvSsAAAAAAADRK3IC1CoAAAAA2CrnIWV0AKAWI8RjcgDrAOUKgAFhZXkA4SrkKucq8iFvbmVh5CFpbGNhQmRvAPQAIg5sInJlYwAAoBUjcgAA4DXYMd0AAmVpa2/7KhIrKCsuK/IBACsAAAkrZQAAATRm6g0EK28AcgDlAOsNYQBzorgDECsAAAAAEit5AG0A0WMAAWNuFislK2sAAAFhcxsrIStwAHAAcgBvAPgAFw5pAG0AAKA8InMA8AD9DQABYXMsKyEr8AAXDnIAbgA7gP4A/kDsATgrOyswG2QA5QBnAmUAcwCAgdcAO2JkAEMrRCtJK9dAYaCgInIAAKAxKgCgMCqAAWVwcwBRK1MraSvhAAkh4qKkIlsrXysAAAAAYytvAHQAAKA2I2kAcgAAoPEqb+A12GXdcgBrAACg2irhAHgociJpbWUAAKA0IIABYWlwAHYreSu3K2QA5QC+DYADYWRlbXBzdACFK6MrmiunK6wrsCuzK24iZ2xlAACitSVkbHFykCuUK5ornCvvIXduAKC/JeUhZnRloMMl8QACBwCgXCJpImdodABloLkl8QBdDG8AdAAAoOwlaSJudXMAAKA6KuwhdXMAoDkqYgAAoM0p6SFtZQCgOyrlInppdW0AoOIjgAFjaHQAwivKK80rAAFyecYrySsA4DXYydxGZGMAeQBbZPIhb2tnYQABaW/UK9creAD0ANERaCJlYWQAAAFsct4r5ytlAGYAdABhAHIAcgBvAPcAXQbpJGdodGFycm93AKCgIQAJQUhhYmNkZmdobG1vcHJzdHV3CiwNLBEsHSwnLDEsQCxLLFIsYix6LIQsjyzLLOgs7Sz/LAotcgDyAAkDYQByAACgYykAAWNyFSwbLHUAdABlADuA+gD6QPIACQ1yAOMBIywAACUseQBeZHYAZQBtYQABaXkrLDAscgBjADuA+wD7QENkgAFhYmgANyw6LD0scgDyANEO7CFhY3FhYQDyAOAOAAFpckQsSCzzIWh0AKB+KQDgNdgy3XIAYQB2AGUAO4D5APlAYQFWLF8scgAAAWxyWixcLACgvyEAoL4hbABrAACggCUAAWN0Zix2LG8CbCwAAAAAcyxyAG4AZaAcI3IAAKAcI28AcAAAoA8jcgBpAACg+CUAAWFsfiyBLGMAcgBrYTuAqACoQAABZ3CILIssbwBuAHNhZgAA4DXYZt0AA2FkaGxzdZksniynLLgsuyzFLHIAcgBvAPcACQ1vAHcAbgBhAHIAcgBvAPcA2A5hI3Jwb29uAAABbHKvLLMsZQBmAPQAWyxpAGcAaAD0AF0sdQDzAKYOaQAAocUDaGzBLMIs0mNvAG4AxWPwI2Fycm93cwCgyCGAAWNpdADRLOEs5CxvAtcsAAAAAN4scgBuAGWgHSNyAACgHSNvAHAAAKAOI24AZwBvYXIAaQAAoPklYwByAADgNdjK3IABZGlyAPMs9yz6LG8AdAAAoPAi7CFkZWlhaQBmoLUlAKC0JQABYW0DLQYtcgDyAMosbAA7gPwA/EDhIm5nbGUAoKcpgAdBQkRhY2RlZmxub3Byc3oAJy0qLTAtNC2bLZ0toS2/LcMtxy3TLdgt3C3gLfwtcgDyABADYQByAHag6CoAoOkqYQBzAOgA/gIAAW5yOC08LechcnQAoJwpgANla25wcnN0AJkpSC1NLVQtXi1iLYItYQBwAHAA4QAaHG8AdABoAGkAbgDnAKEXgAFoaXIAoSmzJFotbwBwAPQAdCVooJUh7wD4JgABaXVmLWotZwBtAOEAuygAAWJwbi14LXMjZXRuZXEAceCKIgD+AODLKgD+cyNldG5lcQBx4IsiAP4A4MwqAP4AAWhyhi2KLWUAdADhABIraSNhbmdsZQAAAWxyki2WLeUhZnQAoLIiaSJnaHQAAKCzInkAMmThIXNoAKCiIoABZWxyAKcttC24LWKiKCKuLQAAAACyLWEAcgAAoLsicQAAoFoi7CFpcACg7iIAAWJ0vC1eD2EA8gBfD3IAAOA12DPddAByAOkAlS1zAHUAAAFicM0t0C0A4IIi0iAA4IMi0iBwAGYAAOA12GfdcgBvAPAAWQt0AHIA6QCaLQABY3XkLegtcgAA4DXYy9wAAWJw7C30LW4AAAFFZXUt8S0A4IoiAP5uAAABRWV/LfktAOCLIgD+6SJnemFnAKCaKYADY2Vmb3BycwANLhAuJS4pLiMuLi40LukhcmN1YQABZGkULiEuAAFiZxguHC5hAHIAAKBfKmUAcaAnIgCgWSLlIXJwAKAYIXIAAOA12DTdcABmAADgNdho3WWgQCJhAHQA6ABqD2MAcgAA4DXYzNzjCuQRUC4AAFQuAABYLmIuAAAAAGMubS5wLnQuAAAAAIguki4AAJouJxIqEnQAcgDpAB0ScgAA4DXYNd0AAUFhWy5eLnIA8gDnAnIA8gCTB75jAAFBYWYuaS5yAPIA4AJyAPIAjAdhAPAAeh5pAHMAAKD7IoABZHB0APgReS6DLgABZmx9LoAuAOA12GnddQDzAP8RaQBtAOUABBIAAUFhiy6OLnIA8gDuAnIA8gCaBwABY3GVLgoScgAA4DXYzdwAAXB0nS6hLmwAdQDzACUScgDpACASAARhY2VmaW9zdbEuvC7ELsguzC7PLtQu2S5jAAABdXm2LrsudABlADuA/QD9QE9kAAFpecAuwy5yAGMAd2FLZG4AO4ClAKVAcgAA4DXYNt1jAHkAV2RwAGYAAOA12GrdYwByAADgNdjO3AABY23dLt8ueQBOZGwAO4D/AP9AAAVhY2RlZmhpb3N38y73Lv8uAi8MLxAvEy8YLx0vIi9jInV0ZQB6YQABYXn7Lv4u8iFvbn5hN2RvAHQAfGEAAWV0Bi8KL3QAcgDmAB8QYQC2Y3IAAOA12DfdYwB5ADZk5yJyYXJyAKDdIXAAZgAA4DXYa91jAHIAAOA12M/cAAFqbiYvKC8AoA0gagAAoAwg");

//#endregion
//#region node_modules/.pnpm/entities@7.0.1/node_modules/entities/dist/esm/generated/decode-data-xml.js
const xmlDecodeTree = /* @__PURE__ */ decodeBase64("AAJhZ2xxBwARABMAFQBtAg0AAAAAAA8AcAAmYG8AcwAnYHQAPmB0ADxg9SFvdCJg");

//#endregion
//#region node_modules/.pnpm/entities@7.0.1/node_modules/entities/dist/esm/internal/bin-trie-flags.js
/**
* Bit flags & masks for the binary trie encoding used for entity decoding.
*
* Bit layout (16 bits total):
* 15..14 VALUE_LENGTH   (+1 encoding; 0 => no value)
* 13     FLAG13.        If valueLength>0: semicolon required flag (implicit ';').
*                       If valueLength==0: compact run flag.
* 12..7  BRANCH_LENGTH  Branch length (0 => single branch in 6..0 if jumpOffset==char) OR run length (when compact run)
* 6..0   JUMP_TABLE     Jump offset (jump table) OR single-branch char code OR first run char
*/
var BinTrieFlags;
(function(BinTrieFlags$1) {
	BinTrieFlags$1[BinTrieFlags$1["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
	BinTrieFlags$1[BinTrieFlags$1["FLAG13"] = 8192] = "FLAG13";
	BinTrieFlags$1[BinTrieFlags$1["BRANCH_LENGTH"] = 8064] = "BRANCH_LENGTH";
	BinTrieFlags$1[BinTrieFlags$1["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags || (BinTrieFlags = {}));

//#endregion
//#region node_modules/.pnpm/entities@7.0.1/node_modules/entities/dist/esm/decode.js
var CharCodes$1;
(function(CharCodes$2) {
	CharCodes$2[CharCodes$2["NUM"] = 35] = "NUM";
	CharCodes$2[CharCodes$2["SEMI"] = 59] = "SEMI";
	CharCodes$2[CharCodes$2["EQUALS"] = 61] = "EQUALS";
	CharCodes$2[CharCodes$2["ZERO"] = 48] = "ZERO";
	CharCodes$2[CharCodes$2["NINE"] = 57] = "NINE";
	CharCodes$2[CharCodes$2["LOWER_A"] = 97] = "LOWER_A";
	CharCodes$2[CharCodes$2["LOWER_F"] = 102] = "LOWER_F";
	CharCodes$2[CharCodes$2["LOWER_X"] = 120] = "LOWER_X";
	CharCodes$2[CharCodes$2["LOWER_Z"] = 122] = "LOWER_Z";
	CharCodes$2[CharCodes$2["UPPER_A"] = 65] = "UPPER_A";
	CharCodes$2[CharCodes$2["UPPER_F"] = 70] = "UPPER_F";
	CharCodes$2[CharCodes$2["UPPER_Z"] = 90] = "UPPER_Z";
})(CharCodes$1 || (CharCodes$1 = {}));
/** Bit that needs to be set to convert an upper case ASCII character to lower case */
const TO_LOWER_BIT = 32;
function isNumber(code) {
	return code >= CharCodes$1.ZERO && code <= CharCodes$1.NINE;
}
function isHexadecimalCharacter(code) {
	return code >= CharCodes$1.UPPER_A && code <= CharCodes$1.UPPER_F || code >= CharCodes$1.LOWER_A && code <= CharCodes$1.LOWER_F;
}
function isAsciiAlphaNumeric(code) {
	return code >= CharCodes$1.UPPER_A && code <= CharCodes$1.UPPER_Z || code >= CharCodes$1.LOWER_A && code <= CharCodes$1.LOWER_Z || isNumber(code);
}
/**
* Checks if the given character is a valid end character for an entity in an attribute.
*
* Attribute values that aren't terminated properly aren't parsed, and shouldn't lead to a parser error.
* See the example in https://html.spec.whatwg.org/multipage/parsing.html#named-character-reference-state
*/
function isEntityInAttributeInvalidEnd(code) {
	return code === CharCodes$1.EQUALS || isAsciiAlphaNumeric(code);
}
var EntityDecoderState;
(function(EntityDecoderState$1) {
	EntityDecoderState$1[EntityDecoderState$1["EntityStart"] = 0] = "EntityStart";
	EntityDecoderState$1[EntityDecoderState$1["NumericStart"] = 1] = "NumericStart";
	EntityDecoderState$1[EntityDecoderState$1["NumericDecimal"] = 2] = "NumericDecimal";
	EntityDecoderState$1[EntityDecoderState$1["NumericHex"] = 3] = "NumericHex";
	EntityDecoderState$1[EntityDecoderState$1["NamedEntity"] = 4] = "NamedEntity";
})(EntityDecoderState || (EntityDecoderState = {}));
var DecodingMode;
(function(DecodingMode$1) {
	/** Entities in text nodes that can end with any character. */
	DecodingMode$1[DecodingMode$1["Legacy"] = 0] = "Legacy";
	/** Only allow entities terminated with a semicolon. */
	DecodingMode$1[DecodingMode$1["Strict"] = 1] = "Strict";
	/** Entities in attributes have limitations on ending characters. */
	DecodingMode$1[DecodingMode$1["Attribute"] = 2] = "Attribute";
})(DecodingMode || (DecodingMode = {}));
/**
* Token decoder with support of writing partial entities.
*/
var EntityDecoder = class {
	constructor(decodeTree, emitCodePoint, errors$4) {
		this.decodeTree = decodeTree;
		this.emitCodePoint = emitCodePoint;
		this.errors = errors$4;
		/** The current state of the decoder. */
		this.state = EntityDecoderState.EntityStart;
		/** Characters that were consumed while parsing an entity. */
		this.consumed = 1;
		/**
		* The result of the entity.
		*
		* Either the result index of a numeric entity, or the codepoint of a
		* numeric entity.
		*/
		this.result = 0;
		/** The current index in the decode tree. */
		this.treeIndex = 0;
		/** The number of characters that were consumed in excess. */
		this.excess = 1;
		/** The mode in which the decoder is operating. */
		this.decodeMode = DecodingMode.Strict;
		/** The number of characters that have been consumed in the current run. */
		this.runConsumed = 0;
	}
	/** Resets the instance to make it reusable. */
	startEntity(decodeMode) {
		this.decodeMode = decodeMode;
		this.state = EntityDecoderState.EntityStart;
		this.result = 0;
		this.treeIndex = 0;
		this.excess = 1;
		this.consumed = 1;
		this.runConsumed = 0;
	}
	/**
	* Write an entity to the decoder. This can be called multiple times with partial entities.
	* If the entity is incomplete, the decoder will return -1.
	*
	* Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
	* entity is incomplete, and resume when the next string is written.
	*
	* @param input The string containing the entity (or a continuation of the entity).
	* @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
	* @returns The number of characters that were consumed, or -1 if the entity is incomplete.
	*/
	write(input, offset) {
		switch (this.state) {
			case EntityDecoderState.EntityStart:
				if (input.charCodeAt(offset) === CharCodes$1.NUM) {
					this.state = EntityDecoderState.NumericStart;
					this.consumed += 1;
					return this.stateNumericStart(input, offset + 1);
				}
				this.state = EntityDecoderState.NamedEntity;
				return this.stateNamedEntity(input, offset);
			case EntityDecoderState.NumericStart: return this.stateNumericStart(input, offset);
			case EntityDecoderState.NumericDecimal: return this.stateNumericDecimal(input, offset);
			case EntityDecoderState.NumericHex: return this.stateNumericHex(input, offset);
			case EntityDecoderState.NamedEntity: return this.stateNamedEntity(input, offset);
		}
	}
	/**
	* Switches between the numeric decimal and hexadecimal states.
	*
	* Equivalent to the `Numeric character reference state` in the HTML spec.
	*
	* @param input The string containing the entity (or a continuation of the entity).
	* @param offset The current offset.
	* @returns The number of characters that were consumed, or -1 if the entity is incomplete.
	*/
	stateNumericStart(input, offset) {
		if (offset >= input.length) return -1;
		if ((input.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes$1.LOWER_X) {
			this.state = EntityDecoderState.NumericHex;
			this.consumed += 1;
			return this.stateNumericHex(input, offset + 1);
		}
		this.state = EntityDecoderState.NumericDecimal;
		return this.stateNumericDecimal(input, offset);
	}
	/**
	* Parses a hexadecimal numeric entity.
	*
	* Equivalent to the `Hexademical character reference state` in the HTML spec.
	*
	* @param input The string containing the entity (or a continuation of the entity).
	* @param offset The current offset.
	* @returns The number of characters that were consumed, or -1 if the entity is incomplete.
	*/
	stateNumericHex(input, offset) {
		while (offset < input.length) {
			const char = input.charCodeAt(offset);
			if (isNumber(char) || isHexadecimalCharacter(char)) {
				const digit$1 = char <= CharCodes$1.NINE ? char - CharCodes$1.ZERO : (char | TO_LOWER_BIT) - CharCodes$1.LOWER_A + 10;
				this.result = this.result * 16 + digit$1;
				this.consumed++;
				offset++;
			} else return this.emitNumericEntity(char, 3);
		}
		return -1;
	}
	/**
	* Parses a decimal numeric entity.
	*
	* Equivalent to the `Decimal character reference state` in the HTML spec.
	*
	* @param input The string containing the entity (or a continuation of the entity).
	* @param offset The current offset.
	* @returns The number of characters that were consumed, or -1 if the entity is incomplete.
	*/
	stateNumericDecimal(input, offset) {
		while (offset < input.length) {
			const char = input.charCodeAt(offset);
			if (isNumber(char)) {
				this.result = this.result * 10 + (char - CharCodes$1.ZERO);
				this.consumed++;
				offset++;
			} else return this.emitNumericEntity(char, 2);
		}
		return -1;
	}
	/**
	* Validate and emit a numeric entity.
	*
	* Implements the logic from the `Hexademical character reference start
	* state` and `Numeric character reference end state` in the HTML spec.
	*
	* @param lastCp The last code point of the entity. Used to see if the
	*               entity was terminated with a semicolon.
	* @param expectedLength The minimum number of characters that should be
	*                       consumed. Used to validate that at least one digit
	*                       was consumed.
	* @returns The number of characters that were consumed.
	*/
	emitNumericEntity(lastCp, expectedLength) {
		var _a$4;
		if (this.consumed <= expectedLength) {
			(_a$4 = this.errors) === null || _a$4 === void 0 || _a$4.absenceOfDigitsInNumericCharacterReference(this.consumed);
			return 0;
		}
		if (lastCp === CharCodes$1.SEMI) this.consumed += 1;
		else if (this.decodeMode === DecodingMode.Strict) return 0;
		this.emitCodePoint(replaceCodePoint(this.result), this.consumed);
		if (this.errors) {
			if (lastCp !== CharCodes$1.SEMI) this.errors.missingSemicolonAfterCharacterReference();
			this.errors.validateNumericCharacterReference(this.result);
		}
		return this.consumed;
	}
	/**
	* Parses a named entity.
	*
	* Equivalent to the `Named character reference state` in the HTML spec.
	*
	* @param input The string containing the entity (or a continuation of the entity).
	* @param offset The current offset.
	* @returns The number of characters that were consumed, or -1 if the entity is incomplete.
	*/
	stateNamedEntity(input, offset) {
		const { decodeTree } = this;
		let current = decodeTree[this.treeIndex];
		let valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
		while (offset < input.length) {
			if (valueLength === 0 && (current & BinTrieFlags.FLAG13) !== 0) {
				const runLength = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
				if (this.runConsumed === 0) {
					const firstChar = current & BinTrieFlags.JUMP_TABLE;
					if (input.charCodeAt(offset) !== firstChar) return this.result === 0 ? 0 : this.emitNotTerminatedNamedEntity();
					offset++;
					this.excess++;
					this.runConsumed++;
				}
				while (this.runConsumed < runLength) {
					if (offset >= input.length) return -1;
					const charIndexInPacked = this.runConsumed - 1;
					const packedWord = decodeTree[this.treeIndex + 1 + (charIndexInPacked >> 1)];
					const expectedChar = charIndexInPacked % 2 === 0 ? packedWord & 255 : packedWord >> 8 & 255;
					if (input.charCodeAt(offset) !== expectedChar) {
						this.runConsumed = 0;
						return this.result === 0 ? 0 : this.emitNotTerminatedNamedEntity();
					}
					offset++;
					this.excess++;
					this.runConsumed++;
				}
				this.runConsumed = 0;
				this.treeIndex += 1 + (runLength >> 1);
				current = decodeTree[this.treeIndex];
				valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
			}
			if (offset >= input.length) break;
			const char = input.charCodeAt(offset);
			if (char === CharCodes$1.SEMI && valueLength !== 0 && (current & BinTrieFlags.FLAG13) !== 0) return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
			this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
			if (this.treeIndex < 0) return this.result === 0 || this.decodeMode === DecodingMode.Attribute && (valueLength === 0 || isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
			current = decodeTree[this.treeIndex];
			valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
			if (valueLength !== 0) {
				if (char === CharCodes$1.SEMI) return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
				if (this.decodeMode !== DecodingMode.Strict && (current & BinTrieFlags.FLAG13) === 0) {
					this.result = this.treeIndex;
					this.consumed += this.excess;
					this.excess = 0;
				}
			}
			offset++;
			this.excess++;
		}
		return -1;
	}
	/**
	* Emit a named entity that was not terminated with a semicolon.
	*
	* @returns The number of characters consumed.
	*/
	emitNotTerminatedNamedEntity() {
		var _a$4;
		const { result, decodeTree } = this;
		const valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
		this.emitNamedEntityData(result, valueLength, this.consumed);
		(_a$4 = this.errors) === null || _a$4 === void 0 || _a$4.missingSemicolonAfterCharacterReference();
		return this.consumed;
	}
	/**
	* Emit a named entity.
	*
	* @param result The index of the entity in the decode tree.
	* @param valueLength The number of bytes in the entity.
	* @param consumed The number of characters consumed.
	*
	* @returns The number of characters consumed.
	*/
	emitNamedEntityData(result, valueLength, consumed) {
		const { decodeTree } = this;
		this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~(BinTrieFlags.VALUE_LENGTH | BinTrieFlags.FLAG13) : decodeTree[result + 1], consumed);
		if (valueLength === 3) this.emitCodePoint(decodeTree[result + 2], consumed);
		return consumed;
	}
	/**
	* Signal to the parser that the end of the input was reached.
	*
	* Remaining data will be emitted and relevant errors will be produced.
	*
	* @returns The number of characters consumed.
	*/
	end() {
		var _a$4;
		switch (this.state) {
			case EntityDecoderState.NamedEntity: return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
			case EntityDecoderState.NumericDecimal: return this.emitNumericEntity(0, 2);
			case EntityDecoderState.NumericHex: return this.emitNumericEntity(0, 3);
			case EntityDecoderState.NumericStart:
				(_a$4 = this.errors) === null || _a$4 === void 0 || _a$4.absenceOfDigitsInNumericCharacterReference(this.consumed);
				return 0;
			case EntityDecoderState.EntityStart: return 0;
		}
	}
};
/**
* Determines the branch of the current node that is taken given the current
* character. This function is used to traverse the trie.
*
* @param decodeTree The trie.
* @param current The current node.
* @param nodeIdx The index right after the current node and its value.
* @param char The current character.
* @returns The index of the next node, or -1 if no branch is taken.
*/
function determineBranch(decodeTree, current, nodeIndex, char) {
	const branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
	const jumpOffset = current & BinTrieFlags.JUMP_TABLE;
	if (branchCount === 0) return jumpOffset !== 0 && char === jumpOffset ? nodeIndex : -1;
	if (jumpOffset) {
		const value = char - jumpOffset;
		return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIndex + value] - 1;
	}
	const packedKeySlots = branchCount + 1 >> 1;
	let lo = 0;
	let hi = branchCount - 1;
	while (lo <= hi) {
		const mid = lo + hi >>> 1;
		const midKey = decodeTree[nodeIndex + (mid >> 1)] >> (mid & 1) * 8 & 255;
		if (midKey < char) lo = mid + 1;
		else if (midKey > char) hi = mid - 1;
		else return decodeTree[nodeIndex + packedKeySlots + mid];
	}
	return -1;
}

//#endregion
//#region node_modules/.pnpm/htmlparser2@10.1.0/node_modules/htmlparser2/dist/esm/Tokenizer.js
var CharCodes;
(function(CharCodes$2) {
	CharCodes$2[CharCodes$2["Tab"] = 9] = "Tab";
	CharCodes$2[CharCodes$2["NewLine"] = 10] = "NewLine";
	CharCodes$2[CharCodes$2["FormFeed"] = 12] = "FormFeed";
	CharCodes$2[CharCodes$2["CarriageReturn"] = 13] = "CarriageReturn";
	CharCodes$2[CharCodes$2["Space"] = 32] = "Space";
	CharCodes$2[CharCodes$2["ExclamationMark"] = 33] = "ExclamationMark";
	CharCodes$2[CharCodes$2["Number"] = 35] = "Number";
	CharCodes$2[CharCodes$2["Amp"] = 38] = "Amp";
	CharCodes$2[CharCodes$2["SingleQuote"] = 39] = "SingleQuote";
	CharCodes$2[CharCodes$2["DoubleQuote"] = 34] = "DoubleQuote";
	CharCodes$2[CharCodes$2["Dash"] = 45] = "Dash";
	CharCodes$2[CharCodes$2["Slash"] = 47] = "Slash";
	CharCodes$2[CharCodes$2["Zero"] = 48] = "Zero";
	CharCodes$2[CharCodes$2["Nine"] = 57] = "Nine";
	CharCodes$2[CharCodes$2["Semi"] = 59] = "Semi";
	CharCodes$2[CharCodes$2["Lt"] = 60] = "Lt";
	CharCodes$2[CharCodes$2["Eq"] = 61] = "Eq";
	CharCodes$2[CharCodes$2["Gt"] = 62] = "Gt";
	CharCodes$2[CharCodes$2["Questionmark"] = 63] = "Questionmark";
	CharCodes$2[CharCodes$2["UpperA"] = 65] = "UpperA";
	CharCodes$2[CharCodes$2["LowerA"] = 97] = "LowerA";
	CharCodes$2[CharCodes$2["UpperF"] = 70] = "UpperF";
	CharCodes$2[CharCodes$2["LowerF"] = 102] = "LowerF";
	CharCodes$2[CharCodes$2["UpperZ"] = 90] = "UpperZ";
	CharCodes$2[CharCodes$2["LowerZ"] = 122] = "LowerZ";
	CharCodes$2[CharCodes$2["LowerX"] = 120] = "LowerX";
	CharCodes$2[CharCodes$2["OpeningSquareBracket"] = 91] = "OpeningSquareBracket";
})(CharCodes || (CharCodes = {}));
/** All the states the tokenizer can be in. */
var State;
(function(State$1) {
	State$1[State$1["Text"] = 1] = "Text";
	State$1[State$1["BeforeTagName"] = 2] = "BeforeTagName";
	State$1[State$1["InTagName"] = 3] = "InTagName";
	State$1[State$1["InSelfClosingTag"] = 4] = "InSelfClosingTag";
	State$1[State$1["BeforeClosingTagName"] = 5] = "BeforeClosingTagName";
	State$1[State$1["InClosingTagName"] = 6] = "InClosingTagName";
	State$1[State$1["AfterClosingTagName"] = 7] = "AfterClosingTagName";
	State$1[State$1["BeforeAttributeName"] = 8] = "BeforeAttributeName";
	State$1[State$1["InAttributeName"] = 9] = "InAttributeName";
	State$1[State$1["AfterAttributeName"] = 10] = "AfterAttributeName";
	State$1[State$1["BeforeAttributeValue"] = 11] = "BeforeAttributeValue";
	State$1[State$1["InAttributeValueDq"] = 12] = "InAttributeValueDq";
	State$1[State$1["InAttributeValueSq"] = 13] = "InAttributeValueSq";
	State$1[State$1["InAttributeValueNq"] = 14] = "InAttributeValueNq";
	State$1[State$1["BeforeDeclaration"] = 15] = "BeforeDeclaration";
	State$1[State$1["InDeclaration"] = 16] = "InDeclaration";
	State$1[State$1["InProcessingInstruction"] = 17] = "InProcessingInstruction";
	State$1[State$1["BeforeComment"] = 18] = "BeforeComment";
	State$1[State$1["CDATASequence"] = 19] = "CDATASequence";
	State$1[State$1["InSpecialComment"] = 20] = "InSpecialComment";
	State$1[State$1["InCommentLike"] = 21] = "InCommentLike";
	State$1[State$1["BeforeSpecialS"] = 22] = "BeforeSpecialS";
	State$1[State$1["BeforeSpecialT"] = 23] = "BeforeSpecialT";
	State$1[State$1["SpecialStartSequence"] = 24] = "SpecialStartSequence";
	State$1[State$1["InSpecialTag"] = 25] = "InSpecialTag";
	State$1[State$1["InEntity"] = 26] = "InEntity";
})(State || (State = {}));
function isWhitespace$1(c$1) {
	return c$1 === CharCodes.Space || c$1 === CharCodes.NewLine || c$1 === CharCodes.Tab || c$1 === CharCodes.FormFeed || c$1 === CharCodes.CarriageReturn;
}
function isEndOfTagSection(c$1) {
	return c$1 === CharCodes.Slash || c$1 === CharCodes.Gt || isWhitespace$1(c$1);
}
function isASCIIAlpha(c$1) {
	return c$1 >= CharCodes.LowerA && c$1 <= CharCodes.LowerZ || c$1 >= CharCodes.UpperA && c$1 <= CharCodes.UpperZ;
}
var QuoteType;
(function(QuoteType$1) {
	QuoteType$1[QuoteType$1["NoValue"] = 0] = "NoValue";
	QuoteType$1[QuoteType$1["Unquoted"] = 1] = "Unquoted";
	QuoteType$1[QuoteType$1["Single"] = 2] = "Single";
	QuoteType$1[QuoteType$1["Double"] = 3] = "Double";
})(QuoteType || (QuoteType = {}));
/**
* Sequences used to match longer strings.
*
* We don't have `Script`, `Style`, or `Title` here. Instead, we re-use the *End
* sequences with an increased offset.
*/
const Sequences = {
	Cdata: new Uint8Array([
		67,
		68,
		65,
		84,
		65,
		91
	]),
	CdataEnd: new Uint8Array([
		93,
		93,
		62
	]),
	CommentEnd: new Uint8Array([
		45,
		45,
		62
	]),
	ScriptEnd: new Uint8Array([
		60,
		47,
		115,
		99,
		114,
		105,
		112,
		116
	]),
	StyleEnd: new Uint8Array([
		60,
		47,
		115,
		116,
		121,
		108,
		101
	]),
	TitleEnd: new Uint8Array([
		60,
		47,
		116,
		105,
		116,
		108,
		101
	]),
	TextareaEnd: new Uint8Array([
		60,
		47,
		116,
		101,
		120,
		116,
		97,
		114,
		101,
		97
	]),
	XmpEnd: new Uint8Array([
		60,
		47,
		120,
		109,
		112
	])
};
var Tokenizer = class {
	constructor({ xmlMode = false, decodeEntities = true }, cbs) {
		this.cbs = cbs;
		/** The current state the tokenizer is in. */
		this.state = State.Text;
		/** The read buffer. */
		this.buffer = "";
		/** The beginning of the section that is currently being read. */
		this.sectionStart = 0;
		/** The index within the buffer that we are currently looking at. */
		this.index = 0;
		/** The start of the last entity. */
		this.entityStart = 0;
		/** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */
		this.baseState = State.Text;
		/** For special parsing behavior inside of script and style tags. */
		this.isSpecial = false;
		/** Indicates whether the tokenizer has been paused. */
		this.running = true;
		/** The offset of the current buffer. */
		this.offset = 0;
		this.currentSequence = void 0;
		this.sequenceIndex = 0;
		this.xmlMode = xmlMode;
		this.decodeEntities = decodeEntities;
		this.entityDecoder = new EntityDecoder(xmlMode ? xmlDecodeTree : htmlDecodeTree, (cp, consumed) => this.emitCodePoint(cp, consumed));
	}
	reset() {
		this.state = State.Text;
		this.buffer = "";
		this.sectionStart = 0;
		this.index = 0;
		this.baseState = State.Text;
		this.currentSequence = void 0;
		this.running = true;
		this.offset = 0;
	}
	write(chunk) {
		this.offset += this.buffer.length;
		this.buffer = chunk;
		this.parse();
	}
	end() {
		if (this.running) this.finish();
	}
	pause() {
		this.running = false;
	}
	resume() {
		this.running = true;
		if (this.index < this.buffer.length + this.offset) this.parse();
	}
	stateText(c$1) {
		if (c$1 === CharCodes.Lt || !this.decodeEntities && this.fastForwardTo(CharCodes.Lt)) {
			if (this.index > this.sectionStart) this.cbs.ontext(this.sectionStart, this.index);
			this.state = State.BeforeTagName;
			this.sectionStart = this.index;
		} else if (this.decodeEntities && c$1 === CharCodes.Amp) this.startEntity();
	}
	stateSpecialStartSequence(c$1) {
		const isEnd = this.sequenceIndex === this.currentSequence.length;
		if (!(isEnd ? isEndOfTagSection(c$1) : (c$1 | 32) === this.currentSequence[this.sequenceIndex])) this.isSpecial = false;
		else if (!isEnd) {
			this.sequenceIndex++;
			return;
		}
		this.sequenceIndex = 0;
		this.state = State.InTagName;
		this.stateInTagName(c$1);
	}
	/** Look for an end tag. For <title> tags, also decode entities. */
	stateInSpecialTag(c$1) {
		if (this.sequenceIndex === this.currentSequence.length) {
			if (c$1 === CharCodes.Gt || isWhitespace$1(c$1)) {
				const endOfText = this.index - this.currentSequence.length;
				if (this.sectionStart < endOfText) {
					const actualIndex = this.index;
					this.index = endOfText;
					this.cbs.ontext(this.sectionStart, endOfText);
					this.index = actualIndex;
				}
				this.isSpecial = false;
				this.sectionStart = endOfText + 2;
				this.stateInClosingTagName(c$1);
				return;
			}
			this.sequenceIndex = 0;
		}
		if ((c$1 | 32) === this.currentSequence[this.sequenceIndex]) this.sequenceIndex += 1;
		else if (this.sequenceIndex === 0) {
			if (this.currentSequence === Sequences.TitleEnd) {
				if (this.decodeEntities && c$1 === CharCodes.Amp) this.startEntity();
			} else if (this.fastForwardTo(CharCodes.Lt)) this.sequenceIndex = 1;
		} else this.sequenceIndex = Number(c$1 === CharCodes.Lt);
	}
	stateCDATASequence(c$1) {
		if (c$1 === Sequences.Cdata[this.sequenceIndex]) {
			if (++this.sequenceIndex === Sequences.Cdata.length) {
				this.state = State.InCommentLike;
				this.currentSequence = Sequences.CdataEnd;
				this.sequenceIndex = 0;
				this.sectionStart = this.index + 1;
			}
		} else {
			this.sequenceIndex = 0;
			this.state = State.InDeclaration;
			this.stateInDeclaration(c$1);
		}
	}
	/**
	* When we wait for one specific character, we can speed things up
	* by skipping through the buffer until we find it.
	*
	* @returns Whether the character was found.
	*/
	fastForwardTo(c$1) {
		while (++this.index < this.buffer.length + this.offset) if (this.buffer.charCodeAt(this.index - this.offset) === c$1) return true;
		this.index = this.buffer.length + this.offset - 1;
		return false;
	}
	/**
	* Comments and CDATA end with `-->` and `]]>`.
	*
	* Their common qualities are:
	* - Their end sequences have a distinct character they start with.
	* - That character is then repeated, so we have to check multiple repeats.
	* - All characters but the start character of the sequence can be skipped.
	*/
	stateInCommentLike(c$1) {
		if (c$1 === this.currentSequence[this.sequenceIndex]) {
			if (++this.sequenceIndex === this.currentSequence.length) {
				if (this.currentSequence === Sequences.CdataEnd) this.cbs.oncdata(this.sectionStart, this.index, 2);
				else this.cbs.oncomment(this.sectionStart, this.index, 2);
				this.sequenceIndex = 0;
				this.sectionStart = this.index + 1;
				this.state = State.Text;
			}
		} else if (this.sequenceIndex === 0) {
			if (this.fastForwardTo(this.currentSequence[0])) this.sequenceIndex = 1;
		} else if (c$1 !== this.currentSequence[this.sequenceIndex - 1]) this.sequenceIndex = 0;
	}
	/**
	* HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
	*
	* XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
	* We allow anything that wouldn't end the tag.
	*/
	isTagStartChar(c$1) {
		return this.xmlMode ? !isEndOfTagSection(c$1) : isASCIIAlpha(c$1);
	}
	startSpecial(sequence, offset) {
		this.isSpecial = true;
		this.currentSequence = sequence;
		this.sequenceIndex = offset;
		this.state = State.SpecialStartSequence;
	}
	stateBeforeTagName(c$1) {
		if (c$1 === CharCodes.ExclamationMark) {
			this.state = State.BeforeDeclaration;
			this.sectionStart = this.index + 1;
		} else if (c$1 === CharCodes.Questionmark) {
			this.state = State.InProcessingInstruction;
			this.sectionStart = this.index + 1;
		} else if (this.isTagStartChar(c$1)) {
			const lower = c$1 | 32;
			this.sectionStart = this.index;
			if (this.xmlMode) this.state = State.InTagName;
			else if (lower === Sequences.ScriptEnd[2]) this.state = State.BeforeSpecialS;
			else if (lower === Sequences.TitleEnd[2] || lower === Sequences.XmpEnd[2]) this.state = State.BeforeSpecialT;
			else this.state = State.InTagName;
		} else if (c$1 === CharCodes.Slash) this.state = State.BeforeClosingTagName;
		else {
			this.state = State.Text;
			this.stateText(c$1);
		}
	}
	stateInTagName(c$1) {
		if (isEndOfTagSection(c$1)) {
			this.cbs.onopentagname(this.sectionStart, this.index);
			this.sectionStart = -1;
			this.state = State.BeforeAttributeName;
			this.stateBeforeAttributeName(c$1);
		}
	}
	stateBeforeClosingTagName(c$1) {
		if (isWhitespace$1(c$1)) {} else if (c$1 === CharCodes.Gt) this.state = State.Text;
		else {
			this.state = this.isTagStartChar(c$1) ? State.InClosingTagName : State.InSpecialComment;
			this.sectionStart = this.index;
		}
	}
	stateInClosingTagName(c$1) {
		if (c$1 === CharCodes.Gt || isWhitespace$1(c$1)) {
			this.cbs.onclosetag(this.sectionStart, this.index);
			this.sectionStart = -1;
			this.state = State.AfterClosingTagName;
			this.stateAfterClosingTagName(c$1);
		}
	}
	stateAfterClosingTagName(c$1) {
		if (c$1 === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
			this.state = State.Text;
			this.sectionStart = this.index + 1;
		}
	}
	stateBeforeAttributeName(c$1) {
		if (c$1 === CharCodes.Gt) {
			this.cbs.onopentagend(this.index);
			if (this.isSpecial) {
				this.state = State.InSpecialTag;
				this.sequenceIndex = 0;
			} else this.state = State.Text;
			this.sectionStart = this.index + 1;
		} else if (c$1 === CharCodes.Slash) this.state = State.InSelfClosingTag;
		else if (!isWhitespace$1(c$1)) {
			this.state = State.InAttributeName;
			this.sectionStart = this.index;
		}
	}
	stateInSelfClosingTag(c$1) {
		if (c$1 === CharCodes.Gt) {
			this.cbs.onselfclosingtag(this.index);
			this.state = State.Text;
			this.sectionStart = this.index + 1;
			this.isSpecial = false;
		} else if (!isWhitespace$1(c$1)) {
			this.state = State.BeforeAttributeName;
			this.stateBeforeAttributeName(c$1);
		}
	}
	stateInAttributeName(c$1) {
		if (c$1 === CharCodes.Eq || isEndOfTagSection(c$1)) {
			this.cbs.onattribname(this.sectionStart, this.index);
			this.sectionStart = this.index;
			this.state = State.AfterAttributeName;
			this.stateAfterAttributeName(c$1);
		}
	}
	stateAfterAttributeName(c$1) {
		if (c$1 === CharCodes.Eq) this.state = State.BeforeAttributeValue;
		else if (c$1 === CharCodes.Slash || c$1 === CharCodes.Gt) {
			this.cbs.onattribend(QuoteType.NoValue, this.sectionStart);
			this.sectionStart = -1;
			this.state = State.BeforeAttributeName;
			this.stateBeforeAttributeName(c$1);
		} else if (!isWhitespace$1(c$1)) {
			this.cbs.onattribend(QuoteType.NoValue, this.sectionStart);
			this.state = State.InAttributeName;
			this.sectionStart = this.index;
		}
	}
	stateBeforeAttributeValue(c$1) {
		if (c$1 === CharCodes.DoubleQuote) {
			this.state = State.InAttributeValueDq;
			this.sectionStart = this.index + 1;
		} else if (c$1 === CharCodes.SingleQuote) {
			this.state = State.InAttributeValueSq;
			this.sectionStart = this.index + 1;
		} else if (!isWhitespace$1(c$1)) {
			this.sectionStart = this.index;
			this.state = State.InAttributeValueNq;
			this.stateInAttributeValueNoQuotes(c$1);
		}
	}
	handleInAttributeValue(c$1, quote) {
		if (c$1 === quote || !this.decodeEntities && this.fastForwardTo(quote)) {
			this.cbs.onattribdata(this.sectionStart, this.index);
			this.sectionStart = -1;
			this.cbs.onattribend(quote === CharCodes.DoubleQuote ? QuoteType.Double : QuoteType.Single, this.index + 1);
			this.state = State.BeforeAttributeName;
		} else if (this.decodeEntities && c$1 === CharCodes.Amp) this.startEntity();
	}
	stateInAttributeValueDoubleQuotes(c$1) {
		this.handleInAttributeValue(c$1, CharCodes.DoubleQuote);
	}
	stateInAttributeValueSingleQuotes(c$1) {
		this.handleInAttributeValue(c$1, CharCodes.SingleQuote);
	}
	stateInAttributeValueNoQuotes(c$1) {
		if (isWhitespace$1(c$1) || c$1 === CharCodes.Gt) {
			this.cbs.onattribdata(this.sectionStart, this.index);
			this.sectionStart = -1;
			this.cbs.onattribend(QuoteType.Unquoted, this.index);
			this.state = State.BeforeAttributeName;
			this.stateBeforeAttributeName(c$1);
		} else if (this.decodeEntities && c$1 === CharCodes.Amp) this.startEntity();
	}
	stateBeforeDeclaration(c$1) {
		if (c$1 === CharCodes.OpeningSquareBracket) {
			this.state = State.CDATASequence;
			this.sequenceIndex = 0;
		} else this.state = c$1 === CharCodes.Dash ? State.BeforeComment : State.InDeclaration;
	}
	stateInDeclaration(c$1) {
		if (c$1 === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
			this.cbs.ondeclaration(this.sectionStart, this.index);
			this.state = State.Text;
			this.sectionStart = this.index + 1;
		}
	}
	stateInProcessingInstruction(c$1) {
		if (c$1 === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
			this.cbs.onprocessinginstruction(this.sectionStart, this.index);
			this.state = State.Text;
			this.sectionStart = this.index + 1;
		}
	}
	stateBeforeComment(c$1) {
		if (c$1 === CharCodes.Dash) {
			this.state = State.InCommentLike;
			this.currentSequence = Sequences.CommentEnd;
			this.sequenceIndex = 2;
			this.sectionStart = this.index + 1;
		} else this.state = State.InDeclaration;
	}
	stateInSpecialComment(c$1) {
		if (c$1 === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
			this.cbs.oncomment(this.sectionStart, this.index, 0);
			this.state = State.Text;
			this.sectionStart = this.index + 1;
		}
	}
	stateBeforeSpecialS(c$1) {
		const lower = c$1 | 32;
		if (lower === Sequences.ScriptEnd[3]) this.startSpecial(Sequences.ScriptEnd, 4);
		else if (lower === Sequences.StyleEnd[3]) this.startSpecial(Sequences.StyleEnd, 4);
		else {
			this.state = State.InTagName;
			this.stateInTagName(c$1);
		}
	}
	stateBeforeSpecialT(c$1) {
		switch (c$1 | 32) {
			case Sequences.TitleEnd[3]:
				this.startSpecial(Sequences.TitleEnd, 4);
				break;
			case Sequences.TextareaEnd[3]:
				this.startSpecial(Sequences.TextareaEnd, 4);
				break;
			case Sequences.XmpEnd[3]:
				this.startSpecial(Sequences.XmpEnd, 4);
				break;
			default:
				this.state = State.InTagName;
				this.stateInTagName(c$1);
		}
	}
	startEntity() {
		this.baseState = this.state;
		this.state = State.InEntity;
		this.entityStart = this.index;
		this.entityDecoder.startEntity(this.xmlMode ? DecodingMode.Strict : this.baseState === State.Text || this.baseState === State.InSpecialTag ? DecodingMode.Legacy : DecodingMode.Attribute);
	}
	stateInEntity() {
		const indexInBuffer = this.index - this.offset;
		const length = this.entityDecoder.write(this.buffer, indexInBuffer);
		if (length >= 0) {
			this.state = this.baseState;
			if (length === 0) this.index -= 1;
		} else {
			if (indexInBuffer < this.buffer.length && this.buffer.charCodeAt(indexInBuffer) === CharCodes.Amp) {
				this.state = this.baseState;
				this.index -= 1;
				return;
			}
			this.index = this.offset + this.buffer.length - 1;
		}
	}
	/**
	* Remove data that has already been consumed from the buffer.
	*/
	cleanup() {
		if (this.running && this.sectionStart !== this.index) {
			if (this.state === State.Text || this.state === State.InSpecialTag && this.sequenceIndex === 0) {
				this.cbs.ontext(this.sectionStart, this.index);
				this.sectionStart = this.index;
			} else if (this.state === State.InAttributeValueDq || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueNq) {
				this.cbs.onattribdata(this.sectionStart, this.index);
				this.sectionStart = this.index;
			}
		}
	}
	shouldContinue() {
		return this.index < this.buffer.length + this.offset && this.running;
	}
	/**
	* Iterates through the buffer, calling the function corresponding to the current state.
	*
	* States that are more likely to be hit are higher up, as a performance improvement.
	*/
	parse() {
		while (this.shouldContinue()) {
			const c$1 = this.buffer.charCodeAt(this.index - this.offset);
			switch (this.state) {
				case State.Text:
					this.stateText(c$1);
					break;
				case State.SpecialStartSequence:
					this.stateSpecialStartSequence(c$1);
					break;
				case State.InSpecialTag:
					this.stateInSpecialTag(c$1);
					break;
				case State.CDATASequence:
					this.stateCDATASequence(c$1);
					break;
				case State.InAttributeValueDq:
					this.stateInAttributeValueDoubleQuotes(c$1);
					break;
				case State.InAttributeName:
					this.stateInAttributeName(c$1);
					break;
				case State.InCommentLike:
					this.stateInCommentLike(c$1);
					break;
				case State.InSpecialComment:
					this.stateInSpecialComment(c$1);
					break;
				case State.BeforeAttributeName:
					this.stateBeforeAttributeName(c$1);
					break;
				case State.InTagName:
					this.stateInTagName(c$1);
					break;
				case State.InClosingTagName:
					this.stateInClosingTagName(c$1);
					break;
				case State.BeforeTagName:
					this.stateBeforeTagName(c$1);
					break;
				case State.AfterAttributeName:
					this.stateAfterAttributeName(c$1);
					break;
				case State.InAttributeValueSq:
					this.stateInAttributeValueSingleQuotes(c$1);
					break;
				case State.BeforeAttributeValue:
					this.stateBeforeAttributeValue(c$1);
					break;
				case State.BeforeClosingTagName:
					this.stateBeforeClosingTagName(c$1);
					break;
				case State.AfterClosingTagName:
					this.stateAfterClosingTagName(c$1);
					break;
				case State.BeforeSpecialS:
					this.stateBeforeSpecialS(c$1);
					break;
				case State.BeforeSpecialT:
					this.stateBeforeSpecialT(c$1);
					break;
				case State.InAttributeValueNq:
					this.stateInAttributeValueNoQuotes(c$1);
					break;
				case State.InSelfClosingTag:
					this.stateInSelfClosingTag(c$1);
					break;
				case State.InDeclaration:
					this.stateInDeclaration(c$1);
					break;
				case State.BeforeDeclaration:
					this.stateBeforeDeclaration(c$1);
					break;
				case State.BeforeComment:
					this.stateBeforeComment(c$1);
					break;
				case State.InProcessingInstruction:
					this.stateInProcessingInstruction(c$1);
					break;
				case State.InEntity:
					this.stateInEntity();
					break;
			}
			this.index++;
		}
		this.cleanup();
	}
	finish() {
		if (this.state === State.InEntity) {
			this.entityDecoder.end();
			this.state = this.baseState;
		}
		this.handleTrailingData();
		this.cbs.onend();
	}
	/** Handle any trailing data. */
	handleTrailingData() {
		const endIndex = this.buffer.length + this.offset;
		if (this.sectionStart >= endIndex) return;
		if (this.state === State.InCommentLike) if (this.currentSequence === Sequences.CdataEnd) this.cbs.oncdata(this.sectionStart, endIndex, 0);
		else this.cbs.oncomment(this.sectionStart, endIndex, 0);
		else if (this.state === State.InTagName || this.state === State.BeforeAttributeName || this.state === State.BeforeAttributeValue || this.state === State.AfterAttributeName || this.state === State.InAttributeName || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueDq || this.state === State.InAttributeValueNq || this.state === State.InClosingTagName) {} else this.cbs.ontext(this.sectionStart, endIndex);
	}
	emitCodePoint(cp, consumed) {
		if (this.baseState !== State.Text && this.baseState !== State.InSpecialTag) {
			if (this.sectionStart < this.entityStart) this.cbs.onattribdata(this.sectionStart, this.entityStart);
			this.sectionStart = this.entityStart + consumed;
			this.index = this.sectionStart - 1;
			this.cbs.onattribentity(cp);
		} else {
			if (this.sectionStart < this.entityStart) this.cbs.ontext(this.sectionStart, this.entityStart);
			this.sectionStart = this.entityStart + consumed;
			this.index = this.sectionStart - 1;
			this.cbs.ontextentity(cp, this.sectionStart);
		}
	}
};

//#endregion
//#region node_modules/.pnpm/htmlparser2@10.1.0/node_modules/htmlparser2/dist/esm/Parser.js
const formTags = new Set([
	"input",
	"option",
	"optgroup",
	"select",
	"button",
	"datalist",
	"textarea"
]);
const pTag = new Set(["p"]);
const tableSectionTags = new Set(["thead", "tbody"]);
const ddtTags = new Set(["dd", "dt"]);
const rtpTags = new Set(["rt", "rp"]);
const openImpliesClose = new Map([
	["tr", new Set([
		"tr",
		"th",
		"td"
	])],
	["th", new Set(["th"])],
	["td", new Set([
		"thead",
		"th",
		"td"
	])],
	["body", new Set([
		"head",
		"link",
		"script"
	])],
	["li", new Set(["li"])],
	["p", pTag],
	["h1", pTag],
	["h2", pTag],
	["h3", pTag],
	["h4", pTag],
	["h5", pTag],
	["h6", pTag],
	["select", formTags],
	["input", formTags],
	["output", formTags],
	["button", formTags],
	["datalist", formTags],
	["textarea", formTags],
	["option", new Set(["option"])],
	["optgroup", new Set(["optgroup", "option"])],
	["dd", ddtTags],
	["dt", ddtTags],
	["address", pTag],
	["article", pTag],
	["aside", pTag],
	["blockquote", pTag],
	["details", pTag],
	["div", pTag],
	["dl", pTag],
	["fieldset", pTag],
	["figcaption", pTag],
	["figure", pTag],
	["footer", pTag],
	["form", pTag],
	["header", pTag],
	["hr", pTag],
	["main", pTag],
	["nav", pTag],
	["ol", pTag],
	["pre", pTag],
	["section", pTag],
	["table", pTag],
	["ul", pTag],
	["rt", rtpTags],
	["rp", rtpTags],
	["tbody", tableSectionTags],
	["tfoot", tableSectionTags]
]);
const voidElements = new Set([
	"area",
	"base",
	"basefont",
	"br",
	"col",
	"command",
	"embed",
	"frame",
	"hr",
	"img",
	"input",
	"isindex",
	"keygen",
	"link",
	"meta",
	"param",
	"source",
	"track",
	"wbr"
]);
const foreignContextElements = new Set(["math", "svg"]);
const htmlIntegrationElements = new Set([
	"mi",
	"mo",
	"mn",
	"ms",
	"mtext",
	"annotation-xml",
	"foreignobject",
	"desc",
	"title"
]);
const reNameEnd = /\s|\//;
var Parser = class {
	constructor(cbs, options = {}) {
		var _a$4, _b, _c, _d, _e, _f;
		this.options = options;
		/** The start index of the last event. */
		this.startIndex = 0;
		/** The end index of the last event. */
		this.endIndex = 0;
		/**
		* Store the start index of the current open tag,
		* so we can update the start index for attributes.
		*/
		this.openTagStart = 0;
		this.tagname = "";
		this.attribname = "";
		this.attribvalue = "";
		this.attribs = null;
		this.stack = [];
		this.buffers = [];
		this.bufferOffset = 0;
		/** The index of the last written buffer. Used when resuming after a `pause()`. */
		this.writeIndex = 0;
		/** Indicates whether the parser has finished running / `.end` has been called. */
		this.ended = false;
		this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
		this.htmlMode = !this.options.xmlMode;
		this.lowerCaseTagNames = (_a$4 = options.lowerCaseTags) !== null && _a$4 !== void 0 ? _a$4 : this.htmlMode;
		this.lowerCaseAttributeNames = (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : this.htmlMode;
		this.recognizeSelfClosing = (_c = options.recognizeSelfClosing) !== null && _c !== void 0 ? _c : !this.htmlMode;
		this.tokenizer = new ((_d = options.Tokenizer) !== null && _d !== void 0 ? _d : Tokenizer)(this.options, this);
		this.foreignContext = [!this.htmlMode];
		(_f = (_e = this.cbs).onparserinit) === null || _f === void 0 || _f.call(_e, this);
	}
	/** @internal */
	ontext(start, endIndex) {
		var _a$4, _b;
		const data$1 = this.getSlice(start, endIndex);
		this.endIndex = endIndex - 1;
		(_b = (_a$4 = this.cbs).ontext) === null || _b === void 0 || _b.call(_a$4, data$1);
		this.startIndex = endIndex;
	}
	/** @internal */
	ontextentity(cp, endIndex) {
		var _a$4, _b;
		this.endIndex = endIndex - 1;
		(_b = (_a$4 = this.cbs).ontext) === null || _b === void 0 || _b.call(_a$4, fromCodePoint(cp));
		this.startIndex = endIndex;
	}
	/**
	* Checks if the current tag is a void element. Override this if you want
	* to specify your own additional void elements.
	*/
	isVoidElement(name$1) {
		return this.htmlMode && voidElements.has(name$1);
	}
	/** @internal */
	onopentagname(start, endIndex) {
		this.endIndex = endIndex;
		let name$1 = this.getSlice(start, endIndex);
		if (this.lowerCaseTagNames) name$1 = name$1.toLowerCase();
		this.emitOpenTag(name$1);
	}
	emitOpenTag(name$1) {
		var _a$4, _b, _c, _d;
		this.openTagStart = this.startIndex;
		this.tagname = name$1;
		const impliesClose = this.htmlMode && openImpliesClose.get(name$1);
		if (impliesClose) while (this.stack.length > 0 && impliesClose.has(this.stack[0])) {
			const element = this.stack.shift();
			(_b = (_a$4 = this.cbs).onclosetag) === null || _b === void 0 || _b.call(_a$4, element, true);
		}
		if (!this.isVoidElement(name$1)) {
			this.stack.unshift(name$1);
			if (this.htmlMode) {
				if (foreignContextElements.has(name$1)) this.foreignContext.unshift(true);
				else if (htmlIntegrationElements.has(name$1)) this.foreignContext.unshift(false);
			}
		}
		(_d = (_c = this.cbs).onopentagname) === null || _d === void 0 || _d.call(_c, name$1);
		if (this.cbs.onopentag) this.attribs = {};
	}
	endOpenTag(isImplied) {
		var _a$4, _b;
		this.startIndex = this.openTagStart;
		if (this.attribs) {
			(_b = (_a$4 = this.cbs).onopentag) === null || _b === void 0 || _b.call(_a$4, this.tagname, this.attribs, isImplied);
			this.attribs = null;
		}
		if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) this.cbs.onclosetag(this.tagname, true);
		this.tagname = "";
	}
	/** @internal */
	onopentagend(endIndex) {
		this.endIndex = endIndex;
		this.endOpenTag(false);
		this.startIndex = endIndex + 1;
	}
	/** @internal */
	onclosetag(start, endIndex) {
		var _a$4, _b, _c, _d, _e, _f, _g, _h;
		this.endIndex = endIndex;
		let name$1 = this.getSlice(start, endIndex);
		if (this.lowerCaseTagNames) name$1 = name$1.toLowerCase();
		if (this.htmlMode && (foreignContextElements.has(name$1) || htmlIntegrationElements.has(name$1))) this.foreignContext.shift();
		if (!this.isVoidElement(name$1)) {
			const pos$1 = this.stack.indexOf(name$1);
			if (pos$1 !== -1) for (let index$2 = 0; index$2 <= pos$1; index$2++) {
				const element = this.stack.shift();
				(_b = (_a$4 = this.cbs).onclosetag) === null || _b === void 0 || _b.call(_a$4, element, index$2 !== pos$1);
			}
			else if (this.htmlMode && name$1 === "p") {
				this.emitOpenTag("p");
				this.closeCurrentTag(true);
			}
		} else if (this.htmlMode && name$1 === "br") {
			(_d = (_c = this.cbs).onopentagname) === null || _d === void 0 || _d.call(_c, "br");
			(_f = (_e = this.cbs).onopentag) === null || _f === void 0 || _f.call(_e, "br", {}, true);
			(_h = (_g = this.cbs).onclosetag) === null || _h === void 0 || _h.call(_g, "br", false);
		}
		this.startIndex = endIndex + 1;
	}
	/** @internal */
	onselfclosingtag(endIndex) {
		this.endIndex = endIndex;
		if (this.recognizeSelfClosing || this.foreignContext[0]) {
			this.closeCurrentTag(false);
			this.startIndex = endIndex + 1;
		} else this.onopentagend(endIndex);
	}
	closeCurrentTag(isOpenImplied) {
		var _a$4, _b;
		const name$1 = this.tagname;
		this.endOpenTag(isOpenImplied);
		if (this.stack[0] === name$1) {
			(_b = (_a$4 = this.cbs).onclosetag) === null || _b === void 0 || _b.call(_a$4, name$1, !isOpenImplied);
			this.stack.shift();
		}
	}
	/** @internal */
	onattribname(start, endIndex) {
		this.startIndex = start;
		const name$1 = this.getSlice(start, endIndex);
		this.attribname = this.lowerCaseAttributeNames ? name$1.toLowerCase() : name$1;
	}
	/** @internal */
	onattribdata(start, endIndex) {
		this.attribvalue += this.getSlice(start, endIndex);
	}
	/** @internal */
	onattribentity(cp) {
		this.attribvalue += fromCodePoint(cp);
	}
	/** @internal */
	onattribend(quote, endIndex) {
		var _a$4, _b;
		this.endIndex = endIndex;
		(_b = (_a$4 = this.cbs).onattribute) === null || _b === void 0 || _b.call(_a$4, this.attribname, this.attribvalue, quote === QuoteType.Double ? "\"" : quote === QuoteType.Single ? "'" : quote === QuoteType.NoValue ? void 0 : null);
		if (this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) this.attribs[this.attribname] = this.attribvalue;
		this.attribvalue = "";
	}
	getInstructionName(value) {
		const index$2 = value.search(reNameEnd);
		let name$1 = index$2 < 0 ? value : value.substr(0, index$2);
		if (this.lowerCaseTagNames) name$1 = name$1.toLowerCase();
		return name$1;
	}
	/** @internal */
	ondeclaration(start, endIndex) {
		this.endIndex = endIndex;
		const value = this.getSlice(start, endIndex);
		if (this.cbs.onprocessinginstruction) {
			const name$1 = this.getInstructionName(value);
			this.cbs.onprocessinginstruction(`!${name$1}`, `!${value}`);
		}
		this.startIndex = endIndex + 1;
	}
	/** @internal */
	onprocessinginstruction(start, endIndex) {
		this.endIndex = endIndex;
		const value = this.getSlice(start, endIndex);
		if (this.cbs.onprocessinginstruction) {
			const name$1 = this.getInstructionName(value);
			this.cbs.onprocessinginstruction(`?${name$1}`, `?${value}`);
		}
		this.startIndex = endIndex + 1;
	}
	/** @internal */
	oncomment(start, endIndex, offset) {
		var _a$4, _b, _c, _d;
		this.endIndex = endIndex;
		(_b = (_a$4 = this.cbs).oncomment) === null || _b === void 0 || _b.call(_a$4, this.getSlice(start, endIndex - offset));
		(_d = (_c = this.cbs).oncommentend) === null || _d === void 0 || _d.call(_c);
		this.startIndex = endIndex + 1;
	}
	/** @internal */
	oncdata(start, endIndex, offset) {
		var _a$4, _b, _c, _d, _e, _f, _g, _h, _j, _k;
		this.endIndex = endIndex;
		const value = this.getSlice(start, endIndex - offset);
		if (!this.htmlMode || this.options.recognizeCDATA) {
			(_b = (_a$4 = this.cbs).oncdatastart) === null || _b === void 0 || _b.call(_a$4);
			(_d = (_c = this.cbs).ontext) === null || _d === void 0 || _d.call(_c, value);
			(_f = (_e = this.cbs).oncdataend) === null || _f === void 0 || _f.call(_e);
		} else {
			(_h = (_g = this.cbs).oncomment) === null || _h === void 0 || _h.call(_g, `[CDATA[${value}]]`);
			(_k = (_j = this.cbs).oncommentend) === null || _k === void 0 || _k.call(_j);
		}
		this.startIndex = endIndex + 1;
	}
	/** @internal */
	onend() {
		var _a$4, _b;
		if (this.cbs.onclosetag) {
			this.endIndex = this.startIndex;
			for (let index$2 = 0; index$2 < this.stack.length; index$2++) this.cbs.onclosetag(this.stack[index$2], true);
		}
		(_b = (_a$4 = this.cbs).onend) === null || _b === void 0 || _b.call(_a$4);
	}
	/**
	* Resets the parser to a blank state, ready to parse a new HTML document
	*/
	reset() {
		var _a$4, _b, _c, _d;
		(_b = (_a$4 = this.cbs).onreset) === null || _b === void 0 || _b.call(_a$4);
		this.tokenizer.reset();
		this.tagname = "";
		this.attribname = "";
		this.attribs = null;
		this.stack.length = 0;
		this.startIndex = 0;
		this.endIndex = 0;
		(_d = (_c = this.cbs).onparserinit) === null || _d === void 0 || _d.call(_c, this);
		this.buffers.length = 0;
		this.foreignContext.length = 0;
		this.foreignContext.unshift(!this.htmlMode);
		this.bufferOffset = 0;
		this.writeIndex = 0;
		this.ended = false;
	}
	/**
	* Resets the parser, then parses a complete document and
	* pushes it to the handler.
	*
	* @param data Document to parse.
	*/
	parseComplete(data$1) {
		this.reset();
		this.end(data$1);
	}
	getSlice(start, end$1) {
		while (start - this.bufferOffset >= this.buffers[0].length) this.shiftBuffer();
		let slice$1 = this.buffers[0].slice(start - this.bufferOffset, end$1 - this.bufferOffset);
		while (end$1 - this.bufferOffset > this.buffers[0].length) {
			this.shiftBuffer();
			slice$1 += this.buffers[0].slice(0, end$1 - this.bufferOffset);
		}
		return slice$1;
	}
	shiftBuffer() {
		this.bufferOffset += this.buffers[0].length;
		this.writeIndex--;
		this.buffers.shift();
	}
	/**
	* Parses a chunk of data and calls the corresponding callbacks.
	*
	* @param chunk Chunk to parse.
	*/
	write(chunk) {
		var _a$4, _b;
		if (this.ended) {
			(_b = (_a$4 = this.cbs).onerror) === null || _b === void 0 || _b.call(_a$4, /* @__PURE__ */ new Error(".write() after done!"));
			return;
		}
		this.buffers.push(chunk);
		if (this.tokenizer.running) {
			this.tokenizer.write(chunk);
			this.writeIndex++;
		}
	}
	/**
	* Parses the end of the buffer and clears the stack, calls onend.
	*
	* @param chunk Optional final chunk to parse.
	*/
	end(chunk) {
		var _a$4, _b;
		if (this.ended) {
			(_b = (_a$4 = this.cbs).onerror) === null || _b === void 0 || _b.call(_a$4, /* @__PURE__ */ new Error(".end() after done!"));
			return;
		}
		if (chunk) this.write(chunk);
		this.ended = true;
		this.tokenizer.end();
	}
	/**
	* Pauses parsing. The parser won't emit events until `resume` is called.
	*/
	pause() {
		this.tokenizer.pause();
	}
	/**
	* Resumes parsing after `pause` was called.
	*/
	resume() {
		this.tokenizer.resume();
		while (this.tokenizer.running && this.writeIndex < this.buffers.length) this.tokenizer.write(this.buffers[this.writeIndex++]);
		if (this.ended) this.tokenizer.end();
	}
	/**
	* Alias of `write`, for backwards compatibility.
	*
	* @param chunk Chunk to parse.
	* @deprecated
	*/
	parseChunk(chunk) {
		this.write(chunk);
	}
	/**
	* Alias of `end`, for backwards compatibility.
	*
	* @param chunk Optional final chunk to parse.
	* @deprecated
	*/
	done(chunk) {
		this.end(chunk);
	}
};

//#endregion
//#region node_modules/.pnpm/htmlparser2@10.1.0/node_modules/htmlparser2/dist/esm/index.js
/**
* Parses the data, returns the resulting document.
*
* @param data The data that should be parsed.
* @param options Optional options for the parser and DOM handler.
*/
function parseDocument(data$1, options) {
	const handler = new DomHandler(void 0, options);
	new Parser(handler, options).end(data$1);
	return handler.root;
}

//#endregion
//#region node_modules/.pnpm/cheerio@1.2.0/node_modules/cheerio/dist/esm/api/attributes.js
var attributes_exports = /* @__PURE__ */ __export({
	addClass: () => addClass,
	attr: () => attr,
	data: () => data,
	hasClass: () => hasClass,
	prop: () => prop,
	removeAttr: () => removeAttr,
	removeClass: () => removeClass,
	toggleClass: () => toggleClass,
	val: () => val
});
/**
* Methods for getting and modifying attributes.
*
* @module cheerio/attributes
*/
var _a$2;
const hasOwn$3 = (_a$2 = Object.hasOwn) !== null && _a$2 !== void 0 ? _a$2 : ((object$1, prop$1) => Object.prototype.hasOwnProperty.call(object$1, prop$1));
const rspace = /\s+/;
const dataAttrPrefix = "data-";
const rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i;
const rbrace = /^{[^]*}$|^\[[^]*]$/;
function getAttr(elem, name$1, xmlMode) {
	var _a$4;
	if (!elem || !isTag(elem)) return void 0;
	(_a$4 = elem.attribs) !== null && _a$4 !== void 0 || (elem.attribs = {});
	if (!name$1) return elem.attribs;
	if (hasOwn$3(elem.attribs, name$1)) return !xmlMode && rboolean.test(name$1) ? name$1 : elem.attribs[name$1];
	if (elem.name === "option" && name$1 === "value") return text(elem.children);
	if (elem.name === "input" && (elem.attribs["type"] === "radio" || elem.attribs["type"] === "checkbox") && name$1 === "value") return "on";
}
/**
* Sets the value of an attribute. The attribute will be deleted if the value is
* `null`.
*
* @private
* @param el - The element to set the attribute on.
* @param name - The attribute's name.
* @param value - The attribute's value.
*/
function setAttr(el, name$1, value) {
	if (value === null) removeAttribute(el, name$1);
	else el.attribs[name$1] = `${value}`;
}
function attr(name$1, value) {
	if (typeof name$1 === "object" || value !== void 0) {
		if (typeof value === "function") {
			if (typeof name$1 !== "string") throw new Error("Bad combination of arguments.");
			return domEach(this, (el, i$1) => {
				if (isTag(el)) setAttr(el, name$1, value.call(el, i$1, el.attribs[name$1]));
			});
		}
		return domEach(this, (el) => {
			if (!isTag(el)) return;
			if (typeof name$1 === "object") for (const objName of Object.keys(name$1)) {
				const objValue = name$1[objName];
				setAttr(el, objName, objValue);
			}
			else setAttr(el, name$1, value);
		});
	}
	return arguments.length > 1 ? this : getAttr(this[0], name$1, this.options.xmlMode);
}
/**
* Gets a node's prop.
*
* @private
* @category Attributes
* @param el - Element to get the prop of.
* @param name - Name of the prop.
* @param xmlMode - Disable handling of special HTML attributes.
* @returns The prop's value.
*/
function getProp(el, name$1, xmlMode) {
	return name$1 in el ? el[name$1] : !xmlMode && rboolean.test(name$1) ? getAttr(el, name$1, false) !== void 0 : getAttr(el, name$1, xmlMode);
}
/**
* Sets the value of a prop.
*
* @private
* @param el - The element to set the prop on.
* @param name - The prop's name.
* @param value - The prop's value.
* @param xmlMode - Disable handling of special HTML attributes.
*/
function setProp(el, name$1, value, xmlMode) {
	if (name$1 in el) el[name$1] = value;
	else setAttr(el, name$1, !xmlMode && rboolean.test(name$1) ? value ? "" : null : `${value}`);
}
function prop(name$1, value) {
	var _a$4;
	if (typeof name$1 === "string" && value === void 0) {
		const el = this[0];
		if (!el) return void 0;
		switch (name$1) {
			case "style": {
				const property = this.css();
				const keys = Object.keys(property);
				for (let i$1 = 0; i$1 < keys.length; i$1++) property[i$1] = keys[i$1];
				property.length = keys.length;
				return property;
			}
			case "tagName":
			case "nodeName":
				if (!isTag(el)) return void 0;
				return el.name.toUpperCase();
			case "href":
			case "src": {
				if (!isTag(el)) return void 0;
				const prop$1 = (_a$4 = el.attribs) === null || _a$4 === void 0 ? void 0 : _a$4[name$1];
				if (typeof URL !== "undefined" && (name$1 === "href" && (el.tagName === "a" || el.tagName === "link") || name$1 === "src" && (el.tagName === "img" || el.tagName === "iframe" || el.tagName === "audio" || el.tagName === "video" || el.tagName === "source")) && prop$1 !== void 0 && this.options.baseURI) return new URL(prop$1, this.options.baseURI).href;
				return prop$1;
			}
			case "innerText": return innerText(el);
			case "textContent": return textContent(el);
			case "outerHTML":
				if (el.type === Root) return this.html();
				return this.clone().wrap("<container />").parent().html();
			case "innerHTML": return this.html();
			default:
				if (!isTag(el)) return void 0;
				return getProp(el, name$1, this.options.xmlMode);
		}
	}
	if (typeof name$1 === "object" || value !== void 0) {
		if (typeof value === "function") {
			if (typeof name$1 === "object") throw new TypeError("Bad combination of arguments.");
			return domEach(this, (el, i$1) => {
				if (isTag(el)) setProp(el, name$1, value.call(el, i$1, getProp(el, name$1, this.options.xmlMode)), this.options.xmlMode);
			});
		}
		return domEach(this, (el) => {
			if (!isTag(el)) return;
			if (typeof name$1 === "object") for (const key$2 of Object.keys(name$1)) {
				const val$1 = name$1[key$2];
				setProp(el, key$2, val$1, this.options.xmlMode);
			}
			else setProp(el, name$1, value, this.options.xmlMode);
		});
	}
}
/**
* Sets the value of a data attribute.
*
* @private
* @param elem - The element to set the data attribute on.
* @param name - The data attribute's name.
* @param value - The data attribute's value.
*/
function setData(elem, name$1, value) {
	var _a$4;
	(_a$4 = elem.data) !== null && _a$4 !== void 0 || (elem.data = {});
	if (typeof name$1 === "object") Object.assign(elem.data, name$1);
	else if (typeof name$1 === "string" && value !== void 0) elem.data[name$1] = value;
}
/**
* Read _all_ HTML5 `data-*` attributes from the equivalent HTML5 `data-*`
* attribute, and cache the value in the node's internal data store.
*
* @private
* @category Attributes
* @param el - Element to get the data attribute of.
* @returns A map with all of the data attributes.
*/
function readAllData(el) {
	for (const domName of Object.keys(el.attribs)) {
		if (!domName.startsWith(dataAttrPrefix)) continue;
		const jsName = camelCase(domName.slice(5));
		if (!hasOwn$3(el.data, jsName)) el.data[jsName] = parseDataValue(el.attribs[domName]);
	}
	return el.data;
}
/**
* Read the specified attribute from the equivalent HTML5 `data-*` attribute,
* and (if present) cache the value in the node's internal data store.
*
* @private
* @category Attributes
* @param el - Element to get the data attribute of.
* @param name - Name of the data attribute.
* @returns The data attribute's value.
*/
function readData(el, name$1) {
	const domName = dataAttrPrefix + cssCase(name$1);
	const data$1 = el.data;
	if (hasOwn$3(data$1, name$1)) return data$1[name$1];
	if (hasOwn$3(el.attribs, domName)) return data$1[name$1] = parseDataValue(el.attribs[domName]);
}
/**
* Coerce string data-* attributes to their corresponding JavaScript primitives.
*
* @private
* @category Attributes
* @param value - The value to parse.
* @returns The parsed value.
*/
function parseDataValue(value) {
	if (value === "null") return null;
	if (value === "true") return true;
	if (value === "false") return false;
	const num = Number(value);
	if (value === String(num)) return num;
	if (rbrace.test(value)) try {
		return JSON.parse(value);
	} catch {}
	return value;
}
function data(name$1, value) {
	var _a$4;
	const elem = this[0];
	if (!elem || !isTag(elem)) return;
	const dataEl = elem;
	(_a$4 = dataEl.data) !== null && _a$4 !== void 0 || (dataEl.data = {});
	if (name$1 == null) return readAllData(dataEl);
	if (typeof name$1 === "object" || value !== void 0) {
		domEach(this, (el) => {
			if (isTag(el)) if (typeof name$1 === "object") setData(el, name$1);
			else setData(el, name$1, value);
		});
		return this;
	}
	return readData(dataEl, name$1);
}
function val(value) {
	const querying = arguments.length === 0;
	const element = this[0];
	if (!element || !isTag(element)) return querying ? void 0 : this;
	switch (element.name) {
		case "textarea": return this.text(value);
		case "select": {
			const option = this.find("option:selected");
			if (!querying) {
				if (this.attr("multiple") == null && typeof value === "object") return this;
				this.find("option").removeAttr("selected");
				const values = typeof value === "object" ? value : [value];
				for (const val$1 of values) this.find(`option[value="${val$1}"]`).attr("selected", "");
				return this;
			}
			return this.attr("multiple") ? option.toArray().map((el) => text(el.children)) : option.attr("value");
		}
		case "button":
		case "input":
		case "option": return querying ? this.attr("value") : this.attr("value", value);
	}
}
/**
* Remove an attribute.
*
* @private
* @param elem - Node to remove attribute from.
* @param name - Name of the attribute to remove.
*/
function removeAttribute(elem, name$1) {
	if (!elem.attribs || !hasOwn$3(elem.attribs, name$1)) return;
	delete elem.attribs[name$1];
}
/**
* Splits a space-separated list of names to individual names.
*
* @category Attributes
* @param names - Names to split.
* @returns - Split names.
*/
function splitNames(names) {
	return names ? names.trim().split(rspace) : [];
}
/**
* Method for removing attributes by `name`.
*
* @category Attributes
* @example
*
* ```js
* $('.pear').removeAttr('class').prop('outerHTML');
* //=> <li>Pear</li>
*
* $('.apple').attr('id', 'favorite');
* $('.apple').removeAttr('id class').prop('outerHTML');
* //=> <li>Apple</li>
* ```
*
* @param name - Name of the attribute.
* @returns The instance itself.
* @see {@link https://api.jquery.com/removeAttr/}
*/
function removeAttr(name$1) {
	const attrNames = splitNames(name$1);
	for (const attrName of attrNames) domEach(this, (elem) => {
		if (isTag(elem)) removeAttribute(elem, attrName);
	});
	return this;
}
/**
* Check to see if _any_ of the matched elements have the given `className`.
*
* @category Attributes
* @example
*
* ```js
* $('.pear').hasClass('pear');
* //=> true
*
* $('apple').hasClass('fruit');
* //=> false
*
* $('li').hasClass('pear');
* //=> true
* ```
*
* @param className - Name of the class.
* @returns Indicates if an element has the given `className`.
* @see {@link https://api.jquery.com/hasClass/}
*/
function hasClass(className) {
	return this.toArray().some((elem) => {
		const clazz = isTag(elem) && elem.attribs["class"];
		let idx = -1;
		if (clazz && className.length > 0) while ((idx = clazz.indexOf(className, idx + 1)) > -1) {
			const end$1 = idx + className.length;
			if ((idx === 0 || rspace.test(clazz[idx - 1])) && (end$1 === clazz.length || rspace.test(clazz[end$1]))) return true;
		}
		return false;
	});
}
/**
* Adds class(es) to all of the matched elements. Also accepts a `function`.
*
* @category Attributes
* @example
*
* ```js
* $('.pear').addClass('fruit').prop('outerHTML');
* //=> <li class="pear fruit">Pear</li>
*
* $('.apple').addClass('fruit red').prop('outerHTML');
* //=> <li class="apple fruit red">Apple</li>
* ```
*
* @param value - Name of new class.
* @returns The instance itself.
* @see {@link https://api.jquery.com/addClass/}
*/
function addClass(value) {
	if (typeof value === "function") return domEach(this, (el, i$1) => {
		if (isTag(el)) {
			const className = el.attribs["class"] || "";
			addClass.call([el], value.call(el, i$1, className));
		}
	});
	if (!value || typeof value !== "string") return this;
	const classNames = value.split(rspace);
	const numElements = this.length;
	for (let i$1 = 0; i$1 < numElements; i$1++) {
		const el = this[i$1];
		if (!isTag(el)) continue;
		const className = getAttr(el, "class", false);
		if (className) {
			let setClass = ` ${className} `;
			for (const cn of classNames) {
				const appendClass = `${cn} `;
				if (!setClass.includes(` ${appendClass}`)) setClass += appendClass;
			}
			setAttr(el, "class", setClass.trim());
		} else setAttr(el, "class", classNames.join(" ").trim());
	}
	return this;
}
/**
* Removes one or more space-separated classes from the selected elements. If no
* `className` is defined, all classes will be removed. Also accepts a
* `function`.
*
* @category Attributes
* @example
*
* ```js
* $('.pear').removeClass('pear').prop('outerHTML');
* //=> <li class="">Pear</li>
*
* $('.apple').addClass('red').removeClass().prop('outerHTML');
* //=> <li class="">Apple</li>
* ```
*
* @param name - Name of the class. If not specified, removes all elements.
* @returns The instance itself.
* @see {@link https://api.jquery.com/removeClass/}
*/
function removeClass(name$1) {
	if (typeof name$1 === "function") return domEach(this, (el, i$1) => {
		if (isTag(el)) removeClass.call([el], name$1.call(el, i$1, el.attribs["class"] || ""));
	});
	const classes = splitNames(name$1);
	const numClasses = classes.length;
	const removeAll = arguments.length === 0;
	return domEach(this, (el) => {
		if (!isTag(el)) return;
		if (removeAll) el.attribs["class"] = "";
		else {
			const elClasses = splitNames(el.attribs["class"]);
			let changed = false;
			for (let j = 0; j < numClasses; j++) {
				const index$2 = elClasses.indexOf(classes[j]);
				if (index$2 !== -1) {
					elClasses.splice(index$2, 1);
					changed = true;
					j--;
				}
			}
			if (changed) el.attribs["class"] = elClasses.join(" ");
		}
	});
}
/**
* Add or remove class(es) from the matched elements, depending on either the
* class's presence or the value of the switch argument. Also accepts a
* `function`.
*
* @category Attributes
* @example
*
* ```js
* $('.apple.green').toggleClass('fruit green red').prop('outerHTML');
* //=> <li class="apple fruit red">Apple</li>
*
* $('.apple.green').toggleClass('fruit green red', true).prop('outerHTML');
* //=> <li class="apple green fruit red">Apple</li>
* ```
*
* @param value - Name of the class. Can also be a function.
* @param stateVal - If specified the state of the class.
* @returns The instance itself.
* @see {@link https://api.jquery.com/toggleClass/}
*/
function toggleClass(value, stateVal) {
	if (typeof value === "function") return domEach(this, (el, i$1) => {
		if (isTag(el)) toggleClass.call([el], value.call(el, i$1, el.attribs["class"] || "", stateVal), stateVal);
	});
	if (!value || typeof value !== "string") return this;
	const classNames = value.split(rspace);
	const numClasses = classNames.length;
	const state = typeof stateVal === "boolean" ? stateVal ? 1 : -1 : 0;
	const numElements = this.length;
	for (let i$1 = 0; i$1 < numElements; i$1++) {
		const el = this[i$1];
		if (!isTag(el)) continue;
		const elementClasses = splitNames(el.attribs["class"]);
		for (let j = 0; j < numClasses; j++) {
			const index$2 = elementClasses.indexOf(classNames[j]);
			if (state >= 0 && index$2 === -1) elementClasses.push(classNames[j]);
			else if (state <= 0 && index$2 !== -1) elementClasses.splice(index$2, 1);
		}
		el.attribs["class"] = elementClasses.join(" ");
	}
	return this;
}

//#endregion
//#region node_modules/.pnpm/css-what@6.2.2/node_modules/css-what/lib/commonjs/types.js
var require_types$2 = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/css-what@6.2.2/node_modules/css-what/lib/commonjs/types.js": ((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AttributeAction = exports.IgnoreCaseMode = exports.SelectorType = void 0;
	(function(SelectorType$4) {
		SelectorType$4["Attribute"] = "attribute";
		SelectorType$4["Pseudo"] = "pseudo";
		SelectorType$4["PseudoElement"] = "pseudo-element";
		SelectorType$4["Tag"] = "tag";
		SelectorType$4["Universal"] = "universal";
		SelectorType$4["Adjacent"] = "adjacent";
		SelectorType$4["Child"] = "child";
		SelectorType$4["Descendant"] = "descendant";
		SelectorType$4["Parent"] = "parent";
		SelectorType$4["Sibling"] = "sibling";
		SelectorType$4["ColumnCombinator"] = "column-combinator";
	})(exports.SelectorType || (exports.SelectorType = {}));
	/**
	* Modes for ignore case.
	*
	* This could be updated to an enum, and the object is
	* the current stand-in that will allow code to be updated
	* without big changes.
	*/
	exports.IgnoreCaseMode = {
		Unknown: null,
		QuirksMode: "quirks",
		IgnoreCase: true,
		CaseSensitive: false
	};
	(function(AttributeAction$1) {
		AttributeAction$1["Any"] = "any";
		AttributeAction$1["Element"] = "element";
		AttributeAction$1["End"] = "end";
		AttributeAction$1["Equals"] = "equals";
		AttributeAction$1["Exists"] = "exists";
		AttributeAction$1["Hyphen"] = "hyphen";
		AttributeAction$1["Not"] = "not";
		AttributeAction$1["Start"] = "start";
	})(exports.AttributeAction || (exports.AttributeAction = {}));
}) });

//#endregion
//#region node_modules/.pnpm/css-what@6.2.2/node_modules/css-what/lib/commonjs/parse.js
var require_parse$1 = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/css-what@6.2.2/node_modules/css-what/lib/commonjs/parse.js": ((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.parse = exports.isTraversal = void 0;
	var types_1$8 = require_types$2();
	var reName = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/;
	var reEscape = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
	var actionTypes = new Map([
		[126, types_1$8.AttributeAction.Element],
		[94, types_1$8.AttributeAction.Start],
		[36, types_1$8.AttributeAction.End],
		[42, types_1$8.AttributeAction.Any],
		[33, types_1$8.AttributeAction.Not],
		[124, types_1$8.AttributeAction.Hyphen]
	]);
	var unpackPseudos = new Set([
		"has",
		"not",
		"matches",
		"is",
		"where",
		"host",
		"host-context"
	]);
	/**
	* Checks whether a specific selector is a traversal.
	* This is useful eg. in swapping the order of elements that
	* are not traversals.
	*
	* @param selector Selector to check.
	*/
	function isTraversal$2(selector$1) {
		switch (selector$1.type) {
			case types_1$8.SelectorType.Adjacent:
			case types_1$8.SelectorType.Child:
			case types_1$8.SelectorType.Descendant:
			case types_1$8.SelectorType.Parent:
			case types_1$8.SelectorType.Sibling:
			case types_1$8.SelectorType.ColumnCombinator: return true;
			default: return false;
		}
	}
	exports.isTraversal = isTraversal$2;
	var stripQuotesFromPseudos = new Set(["contains", "icontains"]);
	function funescape(_, escaped, escapedWhitespace) {
		var high = parseInt(escaped, 16) - 65536;
		return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
	}
	function unescapeCSS(str) {
		return str.replace(reEscape, funescape);
	}
	function isQuote(c$1) {
		return c$1 === 39 || c$1 === 34;
	}
	function isWhitespace(c$1) {
		return c$1 === 32 || c$1 === 9 || c$1 === 10 || c$1 === 12 || c$1 === 13;
	}
	/**
	* Parses `selector`, optionally with the passed `options`.
	*
	* @param selector Selector to parse.
	* @param options Options for parsing.
	* @returns Returns a two-dimensional array.
	* The first dimension represents selectors separated by commas (eg. `sub1, sub2`),
	* the second contains the relevant tokens for that selector.
	*/
	function parse$9(selector$1) {
		var subselects$1 = [];
		var endIndex = parseSelector(subselects$1, "".concat(selector$1), 0);
		if (endIndex < selector$1.length) throw new Error("Unmatched selector: ".concat(selector$1.slice(endIndex)));
		return subselects$1;
	}
	exports.parse = parse$9;
	function parseSelector(subselects$1, selector$1, selectorIndex) {
		var tokens = [];
		function getName$1(offset) {
			var match = selector$1.slice(selectorIndex + offset).match(reName);
			if (!match) throw new Error("Expected name, found ".concat(selector$1.slice(selectorIndex)));
			var name$1 = match[0];
			selectorIndex += offset + name$1.length;
			return unescapeCSS(name$1);
		}
		function stripWhitespace(offset) {
			selectorIndex += offset;
			while (selectorIndex < selector$1.length && isWhitespace(selector$1.charCodeAt(selectorIndex))) selectorIndex++;
		}
		function readValueWithParenthesis() {
			selectorIndex += 1;
			var start = selectorIndex;
			var counter = 1;
			for (; counter > 0 && selectorIndex < selector$1.length; selectorIndex++) if (selector$1.charCodeAt(selectorIndex) === 40 && !isEscaped(selectorIndex)) counter++;
			else if (selector$1.charCodeAt(selectorIndex) === 41 && !isEscaped(selectorIndex)) counter--;
			if (counter) throw new Error("Parenthesis not matched");
			return unescapeCSS(selector$1.slice(start, selectorIndex - 1));
		}
		function isEscaped(pos$1) {
			var slashCount = 0;
			while (selector$1.charCodeAt(--pos$1) === 92) slashCount++;
			return (slashCount & 1) === 1;
		}
		function ensureNotTraversal() {
			if (tokens.length > 0 && isTraversal$2(tokens[tokens.length - 1])) throw new Error("Did not expect successive traversals.");
		}
		function addTraversal(type) {
			if (tokens.length > 0 && tokens[tokens.length - 1].type === types_1$8.SelectorType.Descendant) {
				tokens[tokens.length - 1].type = type;
				return;
			}
			ensureNotTraversal();
			tokens.push({ type });
		}
		function addSpecialAttribute(name$1, action$1) {
			tokens.push({
				type: types_1$8.SelectorType.Attribute,
				name: name$1,
				action: action$1,
				value: getName$1(1),
				namespace: null,
				ignoreCase: "quirks"
			});
		}
		/**
		* We have finished parsing the current part of the selector.
		*
		* Remove descendant tokens at the end if they exist,
		* and return the last index, so that parsing can be
		* picked up from here.
		*/
		function finalizeSubselector() {
			if (tokens.length && tokens[tokens.length - 1].type === types_1$8.SelectorType.Descendant) tokens.pop();
			if (tokens.length === 0) throw new Error("Empty sub-selector");
			subselects$1.push(tokens);
		}
		stripWhitespace(0);
		if (selector$1.length === selectorIndex) return selectorIndex;
		loop: while (selectorIndex < selector$1.length) {
			var firstChar = selector$1.charCodeAt(selectorIndex);
			switch (firstChar) {
				case 32:
				case 9:
				case 10:
				case 12:
				case 13:
					if (tokens.length === 0 || tokens[0].type !== types_1$8.SelectorType.Descendant) {
						ensureNotTraversal();
						tokens.push({ type: types_1$8.SelectorType.Descendant });
					}
					stripWhitespace(1);
					break;
				case 62:
					addTraversal(types_1$8.SelectorType.Child);
					stripWhitespace(1);
					break;
				case 60:
					addTraversal(types_1$8.SelectorType.Parent);
					stripWhitespace(1);
					break;
				case 126:
					addTraversal(types_1$8.SelectorType.Sibling);
					stripWhitespace(1);
					break;
				case 43:
					addTraversal(types_1$8.SelectorType.Adjacent);
					stripWhitespace(1);
					break;
				case 46:
					addSpecialAttribute("class", types_1$8.AttributeAction.Element);
					break;
				case 35:
					addSpecialAttribute("id", types_1$8.AttributeAction.Equals);
					break;
				case 91:
					stripWhitespace(1);
					var name_1 = void 0;
					var namespace = null;
					if (selector$1.charCodeAt(selectorIndex) === 124) name_1 = getName$1(1);
					else if (selector$1.startsWith("*|", selectorIndex)) {
						namespace = "*";
						name_1 = getName$1(2);
					} else {
						name_1 = getName$1(0);
						if (selector$1.charCodeAt(selectorIndex) === 124 && selector$1.charCodeAt(selectorIndex + 1) !== 61) {
							namespace = name_1;
							name_1 = getName$1(1);
						}
					}
					stripWhitespace(0);
					var action = types_1$8.AttributeAction.Exists;
					var possibleAction = actionTypes.get(selector$1.charCodeAt(selectorIndex));
					if (possibleAction) {
						action = possibleAction;
						if (selector$1.charCodeAt(selectorIndex + 1) !== 61) throw new Error("Expected `=`");
						stripWhitespace(2);
					} else if (selector$1.charCodeAt(selectorIndex) === 61) {
						action = types_1$8.AttributeAction.Equals;
						stripWhitespace(1);
					}
					var value = "";
					var ignoreCase = null;
					if (action !== "exists") {
						if (isQuote(selector$1.charCodeAt(selectorIndex))) {
							var quote = selector$1.charCodeAt(selectorIndex);
							var sectionEnd = selectorIndex + 1;
							while (sectionEnd < selector$1.length && (selector$1.charCodeAt(sectionEnd) !== quote || isEscaped(sectionEnd))) sectionEnd += 1;
							if (selector$1.charCodeAt(sectionEnd) !== quote) throw new Error("Attribute value didn't end");
							value = unescapeCSS(selector$1.slice(selectorIndex + 1, sectionEnd));
							selectorIndex = sectionEnd + 1;
						} else {
							var valueStart = selectorIndex;
							while (selectorIndex < selector$1.length && (!isWhitespace(selector$1.charCodeAt(selectorIndex)) && selector$1.charCodeAt(selectorIndex) !== 93 || isEscaped(selectorIndex))) selectorIndex += 1;
							value = unescapeCSS(selector$1.slice(valueStart, selectorIndex));
						}
						stripWhitespace(0);
						var forceIgnore = selector$1.charCodeAt(selectorIndex) | 32;
						if (forceIgnore === 115) {
							ignoreCase = false;
							stripWhitespace(1);
						} else if (forceIgnore === 105) {
							ignoreCase = true;
							stripWhitespace(1);
						}
					}
					if (selector$1.charCodeAt(selectorIndex) !== 93) throw new Error("Attribute selector didn't terminate");
					selectorIndex += 1;
					var attributeSelector = {
						type: types_1$8.SelectorType.Attribute,
						name: name_1,
						action,
						value,
						namespace,
						ignoreCase
					};
					tokens.push(attributeSelector);
					break;
				case 58:
					if (selector$1.charCodeAt(selectorIndex + 1) === 58) {
						tokens.push({
							type: types_1$8.SelectorType.PseudoElement,
							name: getName$1(2).toLowerCase(),
							data: selector$1.charCodeAt(selectorIndex) === 40 ? readValueWithParenthesis() : null
						});
						continue;
					}
					var name_2 = getName$1(1).toLowerCase();
					var data$1 = null;
					if (selector$1.charCodeAt(selectorIndex) === 40) if (unpackPseudos.has(name_2)) {
						if (isQuote(selector$1.charCodeAt(selectorIndex + 1))) throw new Error("Pseudo-selector ".concat(name_2, " cannot be quoted"));
						data$1 = [];
						selectorIndex = parseSelector(data$1, selector$1, selectorIndex + 1);
						if (selector$1.charCodeAt(selectorIndex) !== 41) throw new Error("Missing closing parenthesis in :".concat(name_2, " (").concat(selector$1, ")"));
						selectorIndex += 1;
					} else {
						data$1 = readValueWithParenthesis();
						if (stripQuotesFromPseudos.has(name_2)) {
							var quot = data$1.charCodeAt(0);
							if (quot === data$1.charCodeAt(data$1.length - 1) && isQuote(quot)) data$1 = data$1.slice(1, -1);
						}
						data$1 = unescapeCSS(data$1);
					}
					tokens.push({
						type: types_1$8.SelectorType.Pseudo,
						name: name_2,
						data: data$1
					});
					break;
				case 44:
					finalizeSubselector();
					tokens = [];
					stripWhitespace(1);
					break;
				default:
					if (selector$1.startsWith("/*", selectorIndex)) {
						var endIndex = selector$1.indexOf("*/", selectorIndex + 2);
						if (endIndex < 0) throw new Error("Comment was not terminated");
						selectorIndex = endIndex + 2;
						if (tokens.length === 0) stripWhitespace(0);
						break;
					}
					var namespace = null;
					var name_3 = void 0;
					if (firstChar === 42) {
						selectorIndex += 1;
						name_3 = "*";
					} else if (firstChar === 124) {
						name_3 = "";
						if (selector$1.charCodeAt(selectorIndex + 1) === 124) {
							addTraversal(types_1$8.SelectorType.ColumnCombinator);
							stripWhitespace(2);
							break;
						}
					} else if (reName.test(selector$1.slice(selectorIndex))) name_3 = getName$1(0);
					else break loop;
					if (selector$1.charCodeAt(selectorIndex) === 124 && selector$1.charCodeAt(selectorIndex + 1) !== 124) {
						namespace = name_3;
						if (selector$1.charCodeAt(selectorIndex + 1) === 42) {
							name_3 = "*";
							selectorIndex += 2;
						} else name_3 = getName$1(1);
					}
					tokens.push(name_3 === "*" ? {
						type: types_1$8.SelectorType.Universal,
						namespace
					} : {
						type: types_1$8.SelectorType.Tag,
						name: name_3,
						namespace
					});
			}
		}
		finalizeSubselector();
		return selectorIndex;
	}
}) });

//#endregion
//#region node_modules/.pnpm/css-what@6.2.2/node_modules/css-what/lib/commonjs/stringify.js
var require_stringify$1 = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/css-what@6.2.2/node_modules/css-what/lib/commonjs/stringify.js": ((exports) => {
	var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
		if (pack || arguments.length === 2) {
			for (var i$1 = 0, l = from.length, ar; i$1 < l; i$1++) if (ar || !(i$1 in from)) {
				if (!ar) ar = Array.prototype.slice.call(from, 0, i$1);
				ar[i$1] = from[i$1];
			}
		}
		return to.concat(ar || Array.prototype.slice.call(from));
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.stringify = void 0;
	var types_1$7 = require_types$2();
	var attribValChars = ["\\", "\""];
	var pseudoValChars = __spreadArray(__spreadArray([], attribValChars, true), ["(", ")"], false);
	var charsToEscapeInAttributeValue = new Set(attribValChars.map(function(c$1) {
		return c$1.charCodeAt(0);
	}));
	var charsToEscapeInPseudoValue = new Set(pseudoValChars.map(function(c$1) {
		return c$1.charCodeAt(0);
	}));
	var charsToEscapeInName = new Set(__spreadArray(__spreadArray([], pseudoValChars, true), [
		"~",
		"^",
		"$",
		"*",
		"+",
		"!",
		"|",
		":",
		"[",
		"]",
		" ",
		"."
	], false).map(function(c$1) {
		return c$1.charCodeAt(0);
	}));
	/**
	* Turns `selector` back into a string.
	*
	* @param selector Selector to stringify.
	*/
	function stringify$1(selector$1) {
		return selector$1.map(function(token$1) {
			return token$1.map(stringifyToken).join("");
		}).join(", ");
	}
	exports.stringify = stringify$1;
	function stringifyToken(token$1, index$2, arr) {
		switch (token$1.type) {
			case types_1$7.SelectorType.Child: return index$2 === 0 ? "> " : " > ";
			case types_1$7.SelectorType.Parent: return index$2 === 0 ? "< " : " < ";
			case types_1$7.SelectorType.Sibling: return index$2 === 0 ? "~ " : " ~ ";
			case types_1$7.SelectorType.Adjacent: return index$2 === 0 ? "+ " : " + ";
			case types_1$7.SelectorType.Descendant: return " ";
			case types_1$7.SelectorType.ColumnCombinator: return index$2 === 0 ? "|| " : " || ";
			case types_1$7.SelectorType.Universal: return token$1.namespace === "*" && index$2 + 1 < arr.length && "name" in arr[index$2 + 1] ? "" : "".concat(getNamespace(token$1.namespace), "*");
			case types_1$7.SelectorType.Tag: return getNamespacedName(token$1);
			case types_1$7.SelectorType.PseudoElement: return "::".concat(escapeName(token$1.name, charsToEscapeInName)).concat(token$1.data === null ? "" : "(".concat(escapeName(token$1.data, charsToEscapeInPseudoValue), ")"));
			case types_1$7.SelectorType.Pseudo: return ":".concat(escapeName(token$1.name, charsToEscapeInName)).concat(token$1.data === null ? "" : "(".concat(typeof token$1.data === "string" ? escapeName(token$1.data, charsToEscapeInPseudoValue) : stringify$1(token$1.data), ")"));
			case types_1$7.SelectorType.Attribute:
				if (token$1.name === "id" && token$1.action === types_1$7.AttributeAction.Equals && token$1.ignoreCase === "quirks" && !token$1.namespace) return "#".concat(escapeName(token$1.value, charsToEscapeInName));
				if (token$1.name === "class" && token$1.action === types_1$7.AttributeAction.Element && token$1.ignoreCase === "quirks" && !token$1.namespace) return ".".concat(escapeName(token$1.value, charsToEscapeInName));
				var name_1 = getNamespacedName(token$1);
				if (token$1.action === types_1$7.AttributeAction.Exists) return "[".concat(name_1, "]");
				return "[".concat(name_1).concat(getActionValue(token$1.action), "=\"").concat(escapeName(token$1.value, charsToEscapeInAttributeValue), "\"").concat(token$1.ignoreCase === null ? "" : token$1.ignoreCase ? " i" : " s", "]");
		}
	}
	function getActionValue(action) {
		switch (action) {
			case types_1$7.AttributeAction.Equals: return "";
			case types_1$7.AttributeAction.Element: return "~";
			case types_1$7.AttributeAction.Start: return "^";
			case types_1$7.AttributeAction.End: return "$";
			case types_1$7.AttributeAction.Any: return "*";
			case types_1$7.AttributeAction.Not: return "!";
			case types_1$7.AttributeAction.Hyphen: return "|";
			case types_1$7.AttributeAction.Exists: throw new Error("Shouldn't be here");
		}
	}
	function getNamespacedName(token$1) {
		return "".concat(getNamespace(token$1.namespace)).concat(escapeName(token$1.name, charsToEscapeInName));
	}
	function getNamespace(namespace) {
		return namespace !== null ? "".concat(namespace === "*" ? "*" : escapeName(namespace, charsToEscapeInName), "|") : "";
	}
	function escapeName(str, charsToEscape) {
		var lastIdx = 0;
		var ret = "";
		for (var i$1 = 0; i$1 < str.length; i$1++) if (charsToEscape.has(str.charCodeAt(i$1))) {
			ret += "".concat(str.slice(lastIdx, i$1), "\\").concat(str.charAt(i$1));
			lastIdx = i$1 + 1;
		}
		return ret.length > 0 ? ret + str.slice(lastIdx) : str;
	}
}) });

//#endregion
//#region node_modules/.pnpm/css-what@6.2.2/node_modules/css-what/lib/commonjs/index.js
var require_commonjs = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/css-what@6.2.2/node_modules/css-what/lib/commonjs/index.js": ((exports) => {
	var __createBinding$6 = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __exportStar$2 = exports && exports.__exportStar || function(m, exports$1) {
		for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports$1, p)) __createBinding$6(exports$1, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.stringify = exports.parse = exports.isTraversal = void 0;
	__exportStar$2(require_types$2(), exports);
	var parse_1 = require_parse$1();
	Object.defineProperty(exports, "isTraversal", {
		enumerable: true,
		get: function() {
			return parse_1.isTraversal;
		}
	});
	Object.defineProperty(exports, "parse", {
		enumerable: true,
		get: function() {
			return parse_1.parse;
		}
	});
	var stringify_1 = require_stringify$1();
	Object.defineProperty(exports, "stringify", {
		enumerable: true,
		get: function() {
			return stringify_1.stringify;
		}
	});
}) });

//#endregion
//#region node_modules/.pnpm/boolbase@1.0.0/node_modules/boolbase/index.js
var require_boolbase = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/boolbase@1.0.0/node_modules/boolbase/index.js": ((exports, module) => {
	module.exports = {
		trueFunc: function trueFunc() {
			return true;
		},
		falseFunc: function falseFunc() {
			return false;
		}
	};
}) });

//#endregion
//#region node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/sort.js
var import_boolbase$6 = /* @__PURE__ */ __toESM(require_boolbase(), 1);
var import_commonjs$4 = /* @__PURE__ */ __toESM(require_commonjs(), 1);
const procedure = new Map([
	[import_commonjs$4.SelectorType.Universal, 50],
	[import_commonjs$4.SelectorType.Tag, 30],
	[import_commonjs$4.SelectorType.Attribute, 1],
	[import_commonjs$4.SelectorType.Pseudo, 0]
]);
function isTraversal$1(token$1) {
	return !procedure.has(token$1.type);
}
const attributes = new Map([
	[import_commonjs$4.AttributeAction.Exists, 10],
	[import_commonjs$4.AttributeAction.Equals, 8],
	[import_commonjs$4.AttributeAction.Not, 7],
	[import_commonjs$4.AttributeAction.Start, 6],
	[import_commonjs$4.AttributeAction.End, 6],
	[import_commonjs$4.AttributeAction.Any, 5]
]);
/**
* Sort the parts of the passed selector,
* as there is potential for optimization
* (some types of selectors are faster than others)
*
* @param arr Selector to sort
*/
function sortByProcedure(arr) {
	const procs = arr.map(getProcedure);
	for (let i$1 = 1; i$1 < arr.length; i$1++) {
		const procNew = procs[i$1];
		if (procNew < 0) continue;
		for (let j = i$1 - 1; j >= 0 && procNew < procs[j]; j--) {
			const token$1 = arr[j + 1];
			arr[j + 1] = arr[j];
			arr[j] = token$1;
			procs[j + 1] = procs[j];
			procs[j] = procNew;
		}
	}
}
function getProcedure(token$1) {
	var _a$4, _b;
	let proc = (_a$4 = procedure.get(token$1.type)) !== null && _a$4 !== void 0 ? _a$4 : -1;
	if (token$1.type === import_commonjs$4.SelectorType.Attribute) {
		proc = (_b = attributes.get(token$1.action)) !== null && _b !== void 0 ? _b : 4;
		if (token$1.action === import_commonjs$4.AttributeAction.Equals && token$1.name === "id") proc = 9;
		if (token$1.ignoreCase) proc >>= 1;
	} else if (token$1.type === import_commonjs$4.SelectorType.Pseudo) if (!token$1.data) proc = 3;
	else if (token$1.name === "has" || token$1.name === "contains") proc = 0;
	else if (Array.isArray(token$1.data)) {
		proc = Math.min(...token$1.data.map((d) => Math.min(...d.map(getProcedure))));
		if (proc < 0) proc = 0;
	} else proc = 2;
	return proc;
}

//#endregion
//#region node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/attributes.js
/**
* All reserved characters in a regex, used for escaping.
*
* Taken from XRegExp, (c) 2007-2020 Steven Levithan under the MIT license
* https://github.com/slevithan/xregexp/blob/95eeebeb8fac8754d54eafe2b4743661ac1cf028/src/xregexp.js#L794
*/
const reChars = /[-[\]{}()*+?.,\\^$|#\s]/g;
function escapeRegex$1(value) {
	return value.replace(reChars, "\\$&");
}
/**
* Attributes that are case-insensitive in HTML.
*
* @private
* @see https://html.spec.whatwg.org/multipage/semantics-other.html#case-sensitivity-of-selectors
*/
const caseInsensitiveAttributes = new Set([
	"accept",
	"accept-charset",
	"align",
	"alink",
	"axis",
	"bgcolor",
	"charset",
	"checked",
	"clear",
	"codetype",
	"color",
	"compact",
	"declare",
	"defer",
	"dir",
	"direction",
	"disabled",
	"enctype",
	"face",
	"frame",
	"hreflang",
	"http-equiv",
	"lang",
	"language",
	"link",
	"media",
	"method",
	"multiple",
	"nohref",
	"noresize",
	"noshade",
	"nowrap",
	"readonly",
	"rel",
	"rev",
	"rules",
	"scope",
	"scrolling",
	"selected",
	"shape",
	"target",
	"text",
	"type",
	"valign",
	"valuetype",
	"vlink"
]);
function shouldIgnoreCase(selector$1, options) {
	return typeof selector$1.ignoreCase === "boolean" ? selector$1.ignoreCase : selector$1.ignoreCase === "quirks" ? !!options.quirksMode : !options.xmlMode && caseInsensitiveAttributes.has(selector$1.name);
}
/**
* Attribute selectors
*/
const attributeRules = {
	equals(next$1, data$1, options) {
		const { adapter } = options;
		const { name: name$1 } = data$1;
		let { value } = data$1;
		if (shouldIgnoreCase(data$1, options)) {
			value = value.toLowerCase();
			return (elem) => {
				const attr$1 = adapter.getAttributeValue(elem, name$1);
				return attr$1 != null && attr$1.length === value.length && attr$1.toLowerCase() === value && next$1(elem);
			};
		}
		return (elem) => adapter.getAttributeValue(elem, name$1) === value && next$1(elem);
	},
	hyphen(next$1, data$1, options) {
		const { adapter } = options;
		const { name: name$1 } = data$1;
		let { value } = data$1;
		const len = value.length;
		if (shouldIgnoreCase(data$1, options)) {
			value = value.toLowerCase();
			return function hyphenIC(elem) {
				const attr$1 = adapter.getAttributeValue(elem, name$1);
				return attr$1 != null && (attr$1.length === len || attr$1.charAt(len) === "-") && attr$1.substr(0, len).toLowerCase() === value && next$1(elem);
			};
		}
		return function hyphen(elem) {
			const attr$1 = adapter.getAttributeValue(elem, name$1);
			return attr$1 != null && (attr$1.length === len || attr$1.charAt(len) === "-") && attr$1.substr(0, len) === value && next$1(elem);
		};
	},
	element(next$1, data$1, options) {
		const { adapter } = options;
		const { name: name$1, value } = data$1;
		if (/\s/.test(value)) return import_boolbase$6.default.falseFunc;
		const regex = new RegExp(`(?:^|\\s)${escapeRegex$1(value)}(?:$|\\s)`, shouldIgnoreCase(data$1, options) ? "i" : "");
		return function element(elem) {
			const attr$1 = adapter.getAttributeValue(elem, name$1);
			return attr$1 != null && attr$1.length >= value.length && regex.test(attr$1) && next$1(elem);
		};
	},
	exists(next$1, { name: name$1 }, { adapter }) {
		return (elem) => adapter.hasAttrib(elem, name$1) && next$1(elem);
	},
	start(next$1, data$1, options) {
		const { adapter } = options;
		const { name: name$1 } = data$1;
		let { value } = data$1;
		const len = value.length;
		if (len === 0) return import_boolbase$6.default.falseFunc;
		if (shouldIgnoreCase(data$1, options)) {
			value = value.toLowerCase();
			return (elem) => {
				const attr$1 = adapter.getAttributeValue(elem, name$1);
				return attr$1 != null && attr$1.length >= len && attr$1.substr(0, len).toLowerCase() === value && next$1(elem);
			};
		}
		return (elem) => {
			var _a$4;
			return !!((_a$4 = adapter.getAttributeValue(elem, name$1)) === null || _a$4 === void 0 ? void 0 : _a$4.startsWith(value)) && next$1(elem);
		};
	},
	end(next$1, data$1, options) {
		const { adapter } = options;
		const { name: name$1 } = data$1;
		let { value } = data$1;
		const len = -value.length;
		if (len === 0) return import_boolbase$6.default.falseFunc;
		if (shouldIgnoreCase(data$1, options)) {
			value = value.toLowerCase();
			return (elem) => {
				var _a$4;
				return ((_a$4 = adapter.getAttributeValue(elem, name$1)) === null || _a$4 === void 0 ? void 0 : _a$4.substr(len).toLowerCase()) === value && next$1(elem);
			};
		}
		return (elem) => {
			var _a$4;
			return !!((_a$4 = adapter.getAttributeValue(elem, name$1)) === null || _a$4 === void 0 ? void 0 : _a$4.endsWith(value)) && next$1(elem);
		};
	},
	any(next$1, data$1, options) {
		const { adapter } = options;
		const { name: name$1, value } = data$1;
		if (value === "") return import_boolbase$6.default.falseFunc;
		if (shouldIgnoreCase(data$1, options)) {
			const regex = new RegExp(escapeRegex$1(value), "i");
			return function anyIC(elem) {
				const attr$1 = adapter.getAttributeValue(elem, name$1);
				return attr$1 != null && attr$1.length >= value.length && regex.test(attr$1) && next$1(elem);
			};
		}
		return (elem) => {
			var _a$4;
			return !!((_a$4 = adapter.getAttributeValue(elem, name$1)) === null || _a$4 === void 0 ? void 0 : _a$4.includes(value)) && next$1(elem);
		};
	},
	not(next$1, data$1, options) {
		const { adapter } = options;
		const { name: name$1 } = data$1;
		let { value } = data$1;
		if (value === "") return (elem) => !!adapter.getAttributeValue(elem, name$1) && next$1(elem);
		else if (shouldIgnoreCase(data$1, options)) {
			value = value.toLowerCase();
			return (elem) => {
				const attr$1 = adapter.getAttributeValue(elem, name$1);
				return (attr$1 == null || attr$1.length !== value.length || attr$1.toLowerCase() !== value) && next$1(elem);
			};
		}
		return (elem) => adapter.getAttributeValue(elem, name$1) !== value && next$1(elem);
	}
};

//#endregion
//#region node_modules/.pnpm/nth-check@2.1.1/node_modules/nth-check/lib/esm/parse.js
const whitespace = new Set([
	9,
	10,
	12,
	13,
	32
]);
const ZERO = "0".charCodeAt(0);
const NINE = "9".charCodeAt(0);
/**
* Parses an expression.
*
* @throws An `Error` if parsing fails.
* @returns An array containing the integer step size and the integer offset of the nth rule.
* @example nthCheck.parse("2n+3"); // returns [2, 3]
*/
function parse$8(formula) {
	formula = formula.trim().toLowerCase();
	if (formula === "even") return [2, 0];
	else if (formula === "odd") return [2, 1];
	let idx = 0;
	let a = 0;
	let sign$1 = readSign();
	let number$2 = readNumber();
	if (idx < formula.length && formula.charAt(idx) === "n") {
		idx++;
		a = sign$1 * (number$2 !== null && number$2 !== void 0 ? number$2 : 1);
		skipWhitespace();
		if (idx < formula.length) {
			sign$1 = readSign();
			skipWhitespace();
			number$2 = readNumber();
		} else sign$1 = number$2 = 0;
	}
	if (number$2 === null || idx < formula.length) throw new Error(`n-th rule couldn't be parsed ('${formula}')`);
	return [a, sign$1 * number$2];
	function readSign() {
		if (formula.charAt(idx) === "-") {
			idx++;
			return -1;
		}
		if (formula.charAt(idx) === "+") idx++;
		return 1;
	}
	function readNumber() {
		const start = idx;
		let value = 0;
		while (idx < formula.length && formula.charCodeAt(idx) >= ZERO && formula.charCodeAt(idx) <= NINE) {
			value = value * 10 + (formula.charCodeAt(idx) - ZERO);
			idx++;
		}
		return idx === start ? null : value;
	}
	function skipWhitespace() {
		while (idx < formula.length && whitespace.has(formula.charCodeAt(idx))) idx++;
	}
}

//#endregion
//#region node_modules/.pnpm/nth-check@2.1.1/node_modules/nth-check/lib/esm/compile.js
var import_boolbase$5 = /* @__PURE__ */ __toESM(require_boolbase(), 1);
/**
* Returns a function that checks if an elements index matches the given rule
* highly optimized to return the fastest solution.
*
* @param parsed A tuple [a, b], as returned by `parse`.
* @returns A highly optimized function that returns whether an index matches the nth-check.
* @example
*
* ```js
* const check = nthCheck.compile([2, 3]);
*
* check(0); // `false`
* check(1); // `false`
* check(2); // `true`
* check(3); // `false`
* check(4); // `true`
* check(5); // `false`
* check(6); // `true`
* ```
*/
function compile$2(parsed) {
	const a = parsed[0];
	const b = parsed[1] - 1;
	if (b < 0 && a <= 0) return import_boolbase$5.default.falseFunc;
	if (a === -1) return (index$2) => index$2 <= b;
	if (a === 0) return (index$2) => index$2 === b;
	if (a === 1) return b < 0 ? import_boolbase$5.default.trueFunc : (index$2) => index$2 >= b;
	const absA = Math.abs(a);
	const bMod = (b % absA + absA) % absA;
	return a > 1 ? (index$2) => index$2 >= b && index$2 % absA === bMod : (index$2) => index$2 <= b && index$2 % absA === bMod;
}

//#endregion
//#region node_modules/.pnpm/nth-check@2.1.1/node_modules/nth-check/lib/esm/index.js
/**
* Parses and compiles a formula to a highly optimized function.
* Combination of {@link parse} and {@link compile}.
*
* If the formula doesn't match any elements,
* it returns [`boolbase`](https://github.com/fb55/boolbase)'s `falseFunc`.
* Otherwise, a function accepting an _index_ is returned, which returns
* whether or not the passed _index_ matches the formula.
*
* Note: The nth-rule starts counting at `1`, the returned function at `0`.
*
* @param formula The formula to compile.
* @example
* const check = nthCheck("2n+3");
*
* check(0); // `false`
* check(1); // `false`
* check(2); // `true`
* check(3); // `false`
* check(4); // `true`
* check(5); // `false`
* check(6); // `true`
*/
function nthCheck(formula) {
	return compile$2(parse$8(formula));
}

//#endregion
//#region node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/pseudo-selectors/filters.js
var import_boolbase$4 = /* @__PURE__ */ __toESM(require_boolbase(), 1);
function getChildFunc(next$1, adapter) {
	return (elem) => {
		const parent$1 = adapter.getParent(elem);
		return parent$1 != null && adapter.isTag(parent$1) && next$1(elem);
	};
}
const filters = {
	contains(next$1, text$2, { adapter }) {
		return function contains$1(elem) {
			return next$1(elem) && adapter.getText(elem).includes(text$2);
		};
	},
	icontains(next$1, text$2, { adapter }) {
		const itext = text$2.toLowerCase();
		return function icontains(elem) {
			return next$1(elem) && adapter.getText(elem).toLowerCase().includes(itext);
		};
	},
	"nth-child"(next$1, rule, { adapter, equals }) {
		const func = nthCheck(rule);
		if (func === import_boolbase$4.default.falseFunc) return import_boolbase$4.default.falseFunc;
		if (func === import_boolbase$4.default.trueFunc) return getChildFunc(next$1, adapter);
		return function nthChild(elem) {
			const siblings$1 = adapter.getSiblings(elem);
			let pos$1 = 0;
			for (let i$1 = 0; i$1 < siblings$1.length; i$1++) {
				if (equals(elem, siblings$1[i$1])) break;
				if (adapter.isTag(siblings$1[i$1])) pos$1++;
			}
			return func(pos$1) && next$1(elem);
		};
	},
	"nth-last-child"(next$1, rule, { adapter, equals }) {
		const func = nthCheck(rule);
		if (func === import_boolbase$4.default.falseFunc) return import_boolbase$4.default.falseFunc;
		if (func === import_boolbase$4.default.trueFunc) return getChildFunc(next$1, adapter);
		return function nthLastChild(elem) {
			const siblings$1 = adapter.getSiblings(elem);
			let pos$1 = 0;
			for (let i$1 = siblings$1.length - 1; i$1 >= 0; i$1--) {
				if (equals(elem, siblings$1[i$1])) break;
				if (adapter.isTag(siblings$1[i$1])) pos$1++;
			}
			return func(pos$1) && next$1(elem);
		};
	},
	"nth-of-type"(next$1, rule, { adapter, equals }) {
		const func = nthCheck(rule);
		if (func === import_boolbase$4.default.falseFunc) return import_boolbase$4.default.falseFunc;
		if (func === import_boolbase$4.default.trueFunc) return getChildFunc(next$1, adapter);
		return function nthOfType(elem) {
			const siblings$1 = adapter.getSiblings(elem);
			let pos$1 = 0;
			for (let i$1 = 0; i$1 < siblings$1.length; i$1++) {
				const currentSibling = siblings$1[i$1];
				if (equals(elem, currentSibling)) break;
				if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === adapter.getName(elem)) pos$1++;
			}
			return func(pos$1) && next$1(elem);
		};
	},
	"nth-last-of-type"(next$1, rule, { adapter, equals }) {
		const func = nthCheck(rule);
		if (func === import_boolbase$4.default.falseFunc) return import_boolbase$4.default.falseFunc;
		if (func === import_boolbase$4.default.trueFunc) return getChildFunc(next$1, adapter);
		return function nthLastOfType(elem) {
			const siblings$1 = adapter.getSiblings(elem);
			let pos$1 = 0;
			for (let i$1 = siblings$1.length - 1; i$1 >= 0; i$1--) {
				const currentSibling = siblings$1[i$1];
				if (equals(elem, currentSibling)) break;
				if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === adapter.getName(elem)) pos$1++;
			}
			return func(pos$1) && next$1(elem);
		};
	},
	root(next$1, _rule, { adapter }) {
		return (elem) => {
			const parent$1 = adapter.getParent(elem);
			return (parent$1 == null || !adapter.isTag(parent$1)) && next$1(elem);
		};
	},
	scope(next$1, rule, options, context) {
		const { equals } = options;
		if (!context || context.length === 0) return filters["root"](next$1, rule, options);
		if (context.length === 1) return (elem) => equals(context[0], elem) && next$1(elem);
		return (elem) => context.includes(elem) && next$1(elem);
	},
	hover: dynamicStatePseudo("isHovered"),
	visited: dynamicStatePseudo("isVisited"),
	active: dynamicStatePseudo("isActive")
};
/**
* Dynamic state pseudos. These depend on optional Adapter methods.
*
* @param name The name of the adapter method to call.
* @returns Pseudo for the `filters` object.
*/
function dynamicStatePseudo(name$1) {
	return function dynamicPseudo(next$1, _rule, { adapter }) {
		const func = adapter[name$1];
		if (typeof func !== "function") return import_boolbase$4.default.falseFunc;
		return function active(elem) {
			return func(elem) && next$1(elem);
		};
	};
}

//#endregion
//#region node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/pseudo-selectors/pseudos.js
const pseudos = {
	empty(elem, { adapter }) {
		return !adapter.getChildren(elem).some((elem$1) => adapter.isTag(elem$1) || adapter.getText(elem$1) !== "");
	},
	"first-child"(elem, { adapter, equals }) {
		if (adapter.prevElementSibling) return adapter.prevElementSibling(elem) == null;
		const firstChild = adapter.getSiblings(elem).find((elem$1) => adapter.isTag(elem$1));
		return firstChild != null && equals(elem, firstChild);
	},
	"last-child"(elem, { adapter, equals }) {
		const siblings$1 = adapter.getSiblings(elem);
		for (let i$1 = siblings$1.length - 1; i$1 >= 0; i$1--) {
			if (equals(elem, siblings$1[i$1])) return true;
			if (adapter.isTag(siblings$1[i$1])) break;
		}
		return false;
	},
	"first-of-type"(elem, { adapter, equals }) {
		const siblings$1 = adapter.getSiblings(elem);
		const elemName = adapter.getName(elem);
		for (let i$1 = 0; i$1 < siblings$1.length; i$1++) {
			const currentSibling = siblings$1[i$1];
			if (equals(elem, currentSibling)) return true;
			if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === elemName) break;
		}
		return false;
	},
	"last-of-type"(elem, { adapter, equals }) {
		const siblings$1 = adapter.getSiblings(elem);
		const elemName = adapter.getName(elem);
		for (let i$1 = siblings$1.length - 1; i$1 >= 0; i$1--) {
			const currentSibling = siblings$1[i$1];
			if (equals(elem, currentSibling)) return true;
			if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === elemName) break;
		}
		return false;
	},
	"only-of-type"(elem, { adapter, equals }) {
		const elemName = adapter.getName(elem);
		return adapter.getSiblings(elem).every((sibling) => equals(elem, sibling) || !adapter.isTag(sibling) || adapter.getName(sibling) !== elemName);
	},
	"only-child"(elem, { adapter, equals }) {
		return adapter.getSiblings(elem).every((sibling) => equals(elem, sibling) || !adapter.isTag(sibling));
	}
};
function verifyPseudoArgs(func, name$1, subselect, argIndex) {
	if (subselect === null) {
		if (func.length > argIndex) throw new Error(`Pseudo-class :${name$1} requires an argument`);
	} else if (func.length === argIndex) throw new Error(`Pseudo-class :${name$1} doesn't have any arguments`);
}

//#endregion
//#region node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/pseudo-selectors/aliases.js
/**
* Aliases are pseudos that are expressed as selectors.
*/
const aliases = {
	"any-link": ":is(a, area, link)[href]",
	link: ":any-link:not(:visited)",
	disabled: `:is(
        :is(button, input, select, textarea, optgroup, option)[disabled],
        optgroup[disabled] > option,
        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)
    )`,
	enabled: ":not(:disabled)",
	checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
	required: ":is(input, select, textarea)[required]",
	optional: ":is(input, select, textarea):not([required])",
	selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
	checkbox: "[type=checkbox]",
	file: "[type=file]",
	password: "[type=password]",
	radio: "[type=radio]",
	reset: "[type=reset]",
	image: "[type=image]",
	submit: "[type=submit]",
	parent: ":not(:empty)",
	header: ":is(h1, h2, h3, h4, h5, h6)",
	button: ":is(button, input[type=button])",
	input: ":is(input, textarea, select, button)",
	text: "input:is(:not([type!='']), [type=text])"
};

//#endregion
//#region node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/pseudo-selectors/subselects.js
var import_boolbase$3 = /* @__PURE__ */ __toESM(require_boolbase(), 1);
/** Used as a placeholder for :has. Will be replaced with the actual element. */
const PLACEHOLDER_ELEMENT = {};
function ensureIsTag(next$1, adapter) {
	if (next$1 === import_boolbase$3.default.falseFunc) return import_boolbase$3.default.falseFunc;
	return (elem) => adapter.isTag(elem) && next$1(elem);
}
function getNextSiblings(elem, adapter) {
	const siblings$1 = adapter.getSiblings(elem);
	if (siblings$1.length <= 1) return [];
	const elemIndex = siblings$1.indexOf(elem);
	if (elemIndex < 0 || elemIndex === siblings$1.length - 1) return [];
	return siblings$1.slice(elemIndex + 1).filter(adapter.isTag);
}
function copyOptions(options) {
	return {
		xmlMode: !!options.xmlMode,
		lowerCaseAttributeNames: !!options.lowerCaseAttributeNames,
		lowerCaseTags: !!options.lowerCaseTags,
		quirksMode: !!options.quirksMode,
		cacheResults: !!options.cacheResults,
		pseudos: options.pseudos,
		adapter: options.adapter,
		equals: options.equals
	};
}
const is$2 = (next$1, token$1, options, context, compileToken$1) => {
	const func = compileToken$1(token$1, copyOptions(options), context);
	return func === import_boolbase$3.default.trueFunc ? next$1 : func === import_boolbase$3.default.falseFunc ? import_boolbase$3.default.falseFunc : (elem) => func(elem) && next$1(elem);
};
const subselects = {
	is: is$2,
	matches: is$2,
	where: is$2,
	not(next$1, token$1, options, context, compileToken$1) {
		const func = compileToken$1(token$1, copyOptions(options), context);
		return func === import_boolbase$3.default.falseFunc ? next$1 : func === import_boolbase$3.default.trueFunc ? import_boolbase$3.default.falseFunc : (elem) => !func(elem) && next$1(elem);
	},
	has(next$1, subselect, options, _context, compileToken$1) {
		const { adapter } = options;
		const opts = copyOptions(options);
		opts.relativeSelector = true;
		const context = subselect.some((s) => s.some(isTraversal$1)) ? [PLACEHOLDER_ELEMENT] : void 0;
		const compiled = compileToken$1(subselect, opts, context);
		if (compiled === import_boolbase$3.default.falseFunc) return import_boolbase$3.default.falseFunc;
		const hasElement = ensureIsTag(compiled, adapter);
		if (context && compiled !== import_boolbase$3.default.trueFunc) {
			const { shouldTestNextSiblings = false } = compiled;
			return (elem) => {
				if (!next$1(elem)) return false;
				context[0] = elem;
				const childs = adapter.getChildren(elem);
				const nextElements = shouldTestNextSiblings ? [...childs, ...getNextSiblings(elem, adapter)] : childs;
				return adapter.existsOne(hasElement, nextElements);
			};
		}
		return (elem) => next$1(elem) && adapter.existsOne(hasElement, adapter.getChildren(elem));
	}
};

//#endregion
//#region node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/pseudo-selectors/index.js
var import_commonjs$3 = /* @__PURE__ */ __toESM(require_commonjs(), 1);
function compilePseudoSelector(next$1, selector$1, options, context, compileToken$1) {
	var _a$4;
	const { name: name$1, data: data$1 } = selector$1;
	if (Array.isArray(data$1)) {
		if (!(name$1 in subselects)) throw new Error(`Unknown pseudo-class :${name$1}(${data$1})`);
		return subselects[name$1](next$1, data$1, options, context, compileToken$1);
	}
	const userPseudo = (_a$4 = options.pseudos) === null || _a$4 === void 0 ? void 0 : _a$4[name$1];
	const stringPseudo = typeof userPseudo === "string" ? userPseudo : aliases[name$1];
	if (typeof stringPseudo === "string") {
		if (data$1 != null) throw new Error(`Pseudo ${name$1} doesn't have any arguments`);
		const alias = (0, import_commonjs$3.parse)(stringPseudo);
		return subselects["is"](next$1, alias, options, context, compileToken$1);
	}
	if (typeof userPseudo === "function") {
		verifyPseudoArgs(userPseudo, name$1, data$1, 1);
		return (elem) => userPseudo(elem, data$1) && next$1(elem);
	}
	if (name$1 in filters) return filters[name$1](next$1, data$1, options, context);
	if (name$1 in pseudos) {
		const pseudo = pseudos[name$1];
		verifyPseudoArgs(pseudo, name$1, data$1, 2);
		return (elem) => pseudo(elem, options, data$1) && next$1(elem);
	}
	throw new Error(`Unknown pseudo-class :${name$1}`);
}

//#endregion
//#region node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/general.js
var import_commonjs$2 = /* @__PURE__ */ __toESM(require_commonjs(), 1);
function getElementParent(node$1, adapter) {
	const parent$1 = adapter.getParent(node$1);
	if (parent$1 && adapter.isTag(parent$1)) return parent$1;
	return null;
}
function compileGeneralSelector(next$1, selector$1, options, context, compileToken$1) {
	const { adapter, equals } = options;
	switch (selector$1.type) {
		case import_commonjs$2.SelectorType.PseudoElement: throw new Error("Pseudo-elements are not supported by css-select");
		case import_commonjs$2.SelectorType.ColumnCombinator: throw new Error("Column combinators are not yet supported by css-select");
		case import_commonjs$2.SelectorType.Attribute:
			if (selector$1.namespace != null) throw new Error("Namespaced attributes are not yet supported by css-select");
			if (!options.xmlMode || options.lowerCaseAttributeNames) selector$1.name = selector$1.name.toLowerCase();
			return attributeRules[selector$1.action](next$1, selector$1, options);
		case import_commonjs$2.SelectorType.Pseudo: return compilePseudoSelector(next$1, selector$1, options, context, compileToken$1);
		case import_commonjs$2.SelectorType.Tag: {
			if (selector$1.namespace != null) throw new Error("Namespaced tag names are not yet supported by css-select");
			let { name: name$1 } = selector$1;
			if (!options.xmlMode || options.lowerCaseTags) name$1 = name$1.toLowerCase();
			return function tag(elem) {
				return adapter.getName(elem) === name$1 && next$1(elem);
			};
		}
		case import_commonjs$2.SelectorType.Descendant: {
			if (options.cacheResults === false || typeof WeakSet === "undefined") return function descendant(elem) {
				let current = elem;
				while (current = getElementParent(current, adapter)) if (next$1(current)) return true;
				return false;
			};
			const isFalseCache = /* @__PURE__ */ new WeakSet();
			return function cachedDescendant(elem) {
				let current = elem;
				while (current = getElementParent(current, adapter)) if (!isFalseCache.has(current)) {
					if (adapter.isTag(current) && next$1(current)) return true;
					isFalseCache.add(current);
				}
				return false;
			};
		}
		case "_flexibleDescendant": return function flexibleDescendant(elem) {
			let current = elem;
			do
				if (next$1(current)) return true;
			while (current = getElementParent(current, adapter));
			return false;
		};
		case import_commonjs$2.SelectorType.Parent: return function parent$1(elem) {
			return adapter.getChildren(elem).some((elem$1) => adapter.isTag(elem$1) && next$1(elem$1));
		};
		case import_commonjs$2.SelectorType.Child: return function child(elem) {
			const parent$1 = adapter.getParent(elem);
			return parent$1 != null && adapter.isTag(parent$1) && next$1(parent$1);
		};
		case import_commonjs$2.SelectorType.Sibling: return function sibling(elem) {
			const siblings$1 = adapter.getSiblings(elem);
			for (let i$1 = 0; i$1 < siblings$1.length; i$1++) {
				const currentSibling = siblings$1[i$1];
				if (equals(elem, currentSibling)) break;
				if (adapter.isTag(currentSibling) && next$1(currentSibling)) return true;
			}
			return false;
		};
		case import_commonjs$2.SelectorType.Adjacent:
			if (adapter.prevElementSibling) return function adjacent(elem) {
				const previous = adapter.prevElementSibling(elem);
				return previous != null && next$1(previous);
			};
			return function adjacent(elem) {
				const siblings$1 = adapter.getSiblings(elem);
				let lastElement;
				for (let i$1 = 0; i$1 < siblings$1.length; i$1++) {
					const currentSibling = siblings$1[i$1];
					if (equals(elem, currentSibling)) break;
					if (adapter.isTag(currentSibling)) lastElement = currentSibling;
				}
				return !!lastElement && next$1(lastElement);
			};
		case import_commonjs$2.SelectorType.Universal:
			if (selector$1.namespace != null && selector$1.namespace !== "*") throw new Error("Namespaced universal selectors are not yet supported by css-select");
			return next$1;
	}
}

//#endregion
//#region node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/compile.js
var import_commonjs$1 = /* @__PURE__ */ __toESM(require_commonjs(), 1);
var import_boolbase$2 = /* @__PURE__ */ __toESM(require_boolbase(), 1);
/**
* Compiles a selector to an executable function.
*
* @param selector Selector to compile.
* @param options Compilation options.
* @param context Optional context for the selector.
*/
function compile(selector$1, options, context) {
	return ensureIsTag(compileUnsafe(selector$1, options, context), options.adapter);
}
function compileUnsafe(selector$1, options, context) {
	return compileToken(typeof selector$1 === "string" ? (0, import_commonjs$1.parse)(selector$1) : selector$1, options, context);
}
function includesScopePseudo(t) {
	return t.type === import_commonjs$1.SelectorType.Pseudo && (t.name === "scope" || Array.isArray(t.data) && t.data.some((data$1) => data$1.some(includesScopePseudo)));
}
const DESCENDANT_TOKEN = { type: import_commonjs$1.SelectorType.Descendant };
const FLEXIBLE_DESCENDANT_TOKEN = { type: "_flexibleDescendant" };
const SCOPE_TOKEN = {
	type: import_commonjs$1.SelectorType.Pseudo,
	name: "scope",
	data: null
};
function absolutize(token$1, { adapter }, context) {
	const hasContext = !!(context === null || context === void 0 ? void 0 : context.every((e) => {
		const parent$1 = adapter.isTag(e) && adapter.getParent(e);
		return e === PLACEHOLDER_ELEMENT || parent$1 && adapter.isTag(parent$1);
	}));
	for (const t of token$1) {
		if (t.length > 0 && isTraversal$1(t[0]) && t[0].type !== import_commonjs$1.SelectorType.Descendant) {} else if (hasContext && !t.some(includesScopePseudo)) t.unshift(DESCENDANT_TOKEN);
		else continue;
		t.unshift(SCOPE_TOKEN);
	}
}
function compileToken(token$1, options, context) {
	var _a$4;
	token$1.forEach(sortByProcedure);
	context = (_a$4 = options.context) !== null && _a$4 !== void 0 ? _a$4 : context;
	const isArrayContext = Array.isArray(context);
	const finalContext = context && (Array.isArray(context) ? context : [context]);
	if (options.relativeSelector !== false) absolutize(token$1, options, finalContext);
	else if (token$1.some((t) => t.length > 0 && isTraversal$1(t[0]))) throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
	let shouldTestNextSiblings = false;
	const query = token$1.map((rules) => {
		if (rules.length >= 2) {
			const [first$1, second] = rules;
			if (first$1.type !== import_commonjs$1.SelectorType.Pseudo || first$1.name !== "scope") {} else if (isArrayContext && second.type === import_commonjs$1.SelectorType.Descendant) rules[1] = FLEXIBLE_DESCENDANT_TOKEN;
			else if (second.type === import_commonjs$1.SelectorType.Adjacent || second.type === import_commonjs$1.SelectorType.Sibling) shouldTestNextSiblings = true;
		}
		return compileRules(rules, options, finalContext);
	}).reduce(reduceRules, import_boolbase$2.default.falseFunc);
	query.shouldTestNextSiblings = shouldTestNextSiblings;
	return query;
}
function compileRules(rules, options, context) {
	var _a$4;
	return rules.reduce((previous, rule) => previous === import_boolbase$2.default.falseFunc ? import_boolbase$2.default.falseFunc : compileGeneralSelector(previous, rule, options, context, compileToken), (_a$4 = options.rootFunc) !== null && _a$4 !== void 0 ? _a$4 : import_boolbase$2.default.trueFunc);
}
function reduceRules(a, b) {
	if (b === import_boolbase$2.default.falseFunc || a === import_boolbase$2.default.trueFunc) return a;
	if (a === import_boolbase$2.default.falseFunc || b === import_boolbase$2.default.trueFunc) return b;
	return function combine(elem) {
		return a(elem) || b(elem);
	};
}

//#endregion
//#region node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/index.js
var import_boolbase$1 = /* @__PURE__ */ __toESM(require_boolbase(), 1);
const defaultEquals = (a, b) => a === b;
const defaultOptions = {
	adapter: esm_exports$2,
	equals: defaultEquals
};
function convertOptionFormats(options) {
	var _a$4, _b, _c, _d;
	const opts = options !== null && options !== void 0 ? options : defaultOptions;
	(_a$4 = opts.adapter) !== null && _a$4 !== void 0 || (opts.adapter = esm_exports$2);
	(_b = opts.equals) !== null && _b !== void 0 || (opts.equals = (_d = (_c = opts.adapter) === null || _c === void 0 ? void 0 : _c.equals) !== null && _d !== void 0 ? _d : defaultEquals);
	return opts;
}
function wrapCompile(func) {
	return function addAdapter(selector$1, options, context) {
		return func(selector$1, convertOptionFormats(options), context);
	};
}
/**
* Compiles the query, returns a function.
*/
const compile$1 = wrapCompile(compile);
const _compileUnsafe = wrapCompile(compileUnsafe);
const _compileToken = wrapCompile(compileToken);
function getSelectorFunc(searchFunc) {
	return function select$2(query, elements, options) {
		const opts = convertOptionFormats(options);
		if (typeof query !== "function") query = compileUnsafe(query, opts, elements);
		const filteredElements = prepareContext(elements, opts.adapter, query.shouldTestNextSiblings);
		return searchFunc(query, filteredElements, opts);
	};
}
function prepareContext(elems, adapter, shouldTestNextSiblings = false) {
	if (shouldTestNextSiblings) elems = appendNextSiblings(elems, adapter);
	return Array.isArray(elems) ? adapter.removeSubsets(elems) : adapter.getChildren(elems);
}
function appendNextSiblings(elem, adapter) {
	const elems = Array.isArray(elem) ? elem.slice(0) : [elem];
	const elemsLength = elems.length;
	for (let i$1 = 0; i$1 < elemsLength; i$1++) {
		const nextSiblings = getNextSiblings(elems[i$1], adapter);
		elems.push(...nextSiblings);
	}
	return elems;
}
/**
* @template Node The generic Node type for the DOM adapter being used.
* @template ElementNode The Node type for elements for the DOM adapter being used.
* @param elems Elements to query. If it is an element, its children will be queried..
* @param query can be either a CSS selector string or a compiled query function.
* @param [options] options for querying the document.
* @see compile for supported selector queries.
* @returns All matching elements.
*
*/
const selectAll = getSelectorFunc((query, elems, options) => query === import_boolbase$1.default.falseFunc || !elems || elems.length === 0 ? [] : options.adapter.findAll(query, elems));
/**
* @template Node The generic Node type for the DOM adapter being used.
* @template ElementNode The Node type for elements for the DOM adapter being used.
* @param elems Elements to query. If it is an element, its children will be queried..
* @param query can be either a CSS selector string or a compiled query function.
* @param [options] options for querying the document.
* @see compile for supported selector queries.
* @returns the first match, or null if there was no match.
*/
const selectOne = getSelectorFunc((query, elems, options) => query === import_boolbase$1.default.falseFunc || !elems || elems.length === 0 ? null : options.adapter.findOne(query, elems));

//#endregion
//#region node_modules/.pnpm/cheerio-select@2.1.0/node_modules/cheerio-select/lib/esm/positionals.js
const filterNames = new Set([
	"first",
	"last",
	"eq",
	"gt",
	"nth",
	"lt",
	"even",
	"odd"
]);
function isFilter(s) {
	if (s.type !== "pseudo") return false;
	if (filterNames.has(s.name)) return true;
	if (s.name === "not" && Array.isArray(s.data)) return s.data.some((s$1) => s$1.some(isFilter));
	return false;
}
function getLimit(filter$3, data$1, partLimit) {
	const num = data$1 != null ? parseInt(data$1, 10) : NaN;
	switch (filter$3) {
		case "first": return 1;
		case "nth":
		case "eq": return isFinite(num) ? num >= 0 ? num + 1 : Infinity : 0;
		case "lt": return isFinite(num) ? num >= 0 ? Math.min(num, partLimit) : Infinity : 0;
		case "gt": return isFinite(num) ? Infinity : 0;
		case "odd": return 2 * partLimit;
		case "even": return 2 * partLimit - 1;
		case "last":
		case "not": return Infinity;
	}
}

//#endregion
//#region node_modules/.pnpm/cheerio-select@2.1.0/node_modules/cheerio-select/lib/esm/helpers.js
function getDocumentRoot(node$1) {
	while (node$1.parent) node$1 = node$1.parent;
	return node$1;
}
function groupSelectors(selectors) {
	const filteredSelectors = [];
	const plainSelectors = [];
	for (const selector$1 of selectors) if (selector$1.some(isFilter)) filteredSelectors.push(selector$1);
	else plainSelectors.push(selector$1);
	return [plainSelectors, filteredSelectors];
}

//#endregion
//#region node_modules/.pnpm/cheerio-select@2.1.0/node_modules/cheerio-select/lib/esm/index.js
var import_commonjs = /* @__PURE__ */ __toESM(require_commonjs(), 1);
var import_boolbase = /* @__PURE__ */ __toESM(require_boolbase(), 1);
const UNIVERSAL_SELECTOR = {
	type: import_commonjs.SelectorType.Universal,
	namespace: null
};
const SCOPE_PSEUDO = {
	type: import_commonjs.SelectorType.Pseudo,
	name: "scope",
	data: null
};
function is$1(element, selector$1, options = {}) {
	return some([element], selector$1, options);
}
function some(elements, selector$1, options = {}) {
	if (typeof selector$1 === "function") return elements.some(selector$1);
	const [plain, filtered] = groupSelectors((0, import_commonjs.parse)(selector$1));
	return plain.length > 0 && elements.some(_compileToken(plain, options)) || filtered.some((sel) => filterBySelector(sel, elements, options).length > 0);
}
function filterByPosition(filter$3, elems, data$1, options) {
	const num = typeof data$1 === "string" ? parseInt(data$1, 10) : NaN;
	switch (filter$3) {
		case "first":
		case "lt": return elems;
		case "last": return elems.length > 0 ? [elems[elems.length - 1]] : elems;
		case "nth":
		case "eq": return isFinite(num) && Math.abs(num) < elems.length ? [num < 0 ? elems[elems.length + num] : elems[num]] : [];
		case "gt": return isFinite(num) ? elems.slice(num + 1) : [];
		case "even": return elems.filter((_, i$1) => i$1 % 2 === 0);
		case "odd": return elems.filter((_, i$1) => i$1 % 2 === 1);
		case "not": {
			const filtered = new Set(filterParsed(data$1, elems, options));
			return elems.filter((e) => !filtered.has(e));
		}
	}
}
function filter$1(selector$1, elements, options = {}) {
	return filterParsed((0, import_commonjs.parse)(selector$1), elements, options);
}
/**
* Filter a set of elements by a selector.
*
* Will return elements in the original order.
*
* @param selector Selector to filter by.
* @param elements Elements to filter.
* @param options Options for selector.
*/
function filterParsed(selector$1, elements, options) {
	if (elements.length === 0) return [];
	const [plainSelectors, filteredSelectors] = groupSelectors(selector$1);
	let found;
	if (plainSelectors.length) {
		const filtered = filterElements(elements, plainSelectors, options);
		if (filteredSelectors.length === 0) return filtered;
		if (filtered.length) found = new Set(filtered);
	}
	for (let i$1 = 0; i$1 < filteredSelectors.length && (found === null || found === void 0 ? void 0 : found.size) !== elements.length; i$1++) {
		const filteredSelector = filteredSelectors[i$1];
		if ((found ? elements.filter((e) => isTag(e) && !found.has(e)) : elements).length === 0) break;
		const filtered = filterBySelector(filteredSelector, elements, options);
		if (filtered.length) if (!found) {
			if (i$1 === filteredSelectors.length - 1) return filtered;
			found = new Set(filtered);
		} else filtered.forEach((el) => found.add(el));
	}
	return typeof found !== "undefined" ? found.size === elements.length ? elements : elements.filter((el) => found.has(el)) : [];
}
function filterBySelector(selector$1, elements, options) {
	var _a$4;
	if (selector$1.some(import_commonjs.isTraversal)) {
		const root$2 = (_a$4 = options.root) !== null && _a$4 !== void 0 ? _a$4 : getDocumentRoot(elements[0]);
		const opts = {
			...options,
			context: elements,
			relativeSelector: false
		};
		selector$1.push(SCOPE_PSEUDO);
		return findFilterElements(root$2, selector$1, opts, true, elements.length);
	}
	return findFilterElements(elements, selector$1, options, false, elements.length);
}
function select$1(selector$1, root$2, options = {}, limit = Infinity) {
	if (typeof selector$1 === "function") return find$3(root$2, selector$1);
	const [plain, filtered] = groupSelectors((0, import_commonjs.parse)(selector$1));
	const results = filtered.map((sel) => findFilterElements(root$2, sel, options, true, limit));
	if (plain.length) results.push(findElements(root$2, plain, options, limit));
	if (results.length === 0) return [];
	if (results.length === 1) return results[0];
	return uniqueSort(results.reduce((a, b) => [...a, ...b]));
}
/**
*
* @param root Element(s) to search from.
* @param selector Selector to look for.
* @param options Options for querying.
* @param queryForSelector Query multiple levels deep for the initial selector, even if it doesn't contain a traversal.
*/
function findFilterElements(root$2, selector$1, options, queryForSelector, totalLimit) {
	const filterIndex = selector$1.findIndex(isFilter);
	const sub = selector$1.slice(0, filterIndex);
	const filter$3 = selector$1[filterIndex];
	const partLimit = selector$1.length - 1 === filterIndex ? totalLimit : Infinity;
	const limit = getLimit(filter$3.name, filter$3.data, partLimit);
	if (limit === 0) return [];
	const elems = (sub.length === 0 && !Array.isArray(root$2) ? getChildren(root$2).filter(isTag) : sub.length === 0 ? (Array.isArray(root$2) ? root$2 : [root$2]).filter(isTag) : queryForSelector || sub.some(import_commonjs.isTraversal) ? findElements(root$2, [sub], options, limit) : filterElements(root$2, [sub], options)).slice(0, limit);
	let result = filterByPosition(filter$3.name, elems, filter$3.data, options);
	if (result.length === 0 || selector$1.length === filterIndex + 1) return result;
	const remainingSelector = selector$1.slice(filterIndex + 1);
	const remainingHasTraversal = remainingSelector.some(import_commonjs.isTraversal);
	if (remainingHasTraversal) {
		if ((0, import_commonjs.isTraversal)(remainingSelector[0])) {
			const { type } = remainingSelector[0];
			if (type === import_commonjs.SelectorType.Sibling || type === import_commonjs.SelectorType.Adjacent) result = prepareContext(result, esm_exports$2, true);
			remainingSelector.unshift(UNIVERSAL_SELECTOR);
		}
		options = {
			...options,
			relativeSelector: false,
			rootFunc: (el) => result.includes(el)
		};
	} else if (options.rootFunc && options.rootFunc !== import_boolbase.trueFunc) options = {
		...options,
		rootFunc: import_boolbase.trueFunc
	};
	return remainingSelector.some(isFilter) ? findFilterElements(result, remainingSelector, options, false, totalLimit) : remainingHasTraversal ? findElements(result, [remainingSelector], options, totalLimit) : filterElements(result, [remainingSelector], options);
}
function findElements(root$2, sel, options, limit) {
	return find$3(root$2, _compileToken(sel, options, root$2), limit);
}
function find$3(root$2, query, limit = Infinity) {
	const elems = prepareContext(root$2, esm_exports$2, query.shouldTestNextSiblings);
	return find$4((node$1) => isTag(node$1) && query(node$1), elems, true, limit);
}
function filterElements(elements, sel, options) {
	const els = (Array.isArray(elements) ? elements : [elements]).filter(isTag);
	if (els.length === 0) return els;
	const query = _compileToken(sel, options);
	return query === import_boolbase.trueFunc ? els : els.filter(query);
}

//#endregion
//#region node_modules/.pnpm/cheerio@1.2.0/node_modules/cheerio/dist/esm/api/traversing.js
var traversing_exports = /* @__PURE__ */ __export({
	_findBySelector: () => _findBySelector,
	add: () => add,
	addBack: () => addBack,
	children: () => children,
	closest: () => closest,
	contents: () => contents,
	each: () => each,
	end: () => end,
	eq: () => eq,
	filter: () => filter,
	filterArray: () => filterArray,
	find: () => find$2,
	first: () => first,
	get: () => get,
	has: () => has,
	index: () => index$1,
	is: () => is,
	last: () => last,
	map: () => map,
	next: () => next,
	nextAll: () => nextAll,
	nextUntil: () => nextUntil,
	not: () => not,
	parent: () => parent,
	parents: () => parents,
	parentsUntil: () => parentsUntil,
	prev: () => prev,
	prevAll: () => prevAll,
	prevUntil: () => prevUntil,
	siblings: () => siblings,
	slice: () => slice,
	toArray: () => toArray
});
const reContextSelector = /^\s*(?:[+~]|:scope\b)/;
/**
* Get the descendants of each element in the current set of matched elements,
* filtered by a selector, jQuery object, or element.
*
* @category Traversing
* @example
*
* ```js
* $('#fruits').find('li').length;
* //=> 3
* $('#fruits').find($('.apple')).length;
* //=> 1
* ```
*
* @param selectorOrHaystack - Element to look for.
* @returns The found elements.
* @see {@link https://api.jquery.com/find/}
*/
function find$2(selectorOrHaystack) {
	if (!selectorOrHaystack) return this._make([]);
	if (typeof selectorOrHaystack !== "string") {
		const haystack = isCheerio(selectorOrHaystack) ? selectorOrHaystack.toArray() : [selectorOrHaystack];
		const context = this.toArray();
		return this._make(haystack.filter((elem) => context.some((node$1) => contains(node$1, elem))));
	}
	return this._findBySelector(selectorOrHaystack, Number.POSITIVE_INFINITY);
}
/**
* Find elements by a specific selector.
*
* @private
* @category Traversing
* @param selector - Selector to filter by.
* @param limit - Maximum number of elements to match.
* @returns The found elements.
*/
function _findBySelector(selector$1, limit) {
	var _a$4;
	const context = this.toArray();
	const elems = reContextSelector.test(selector$1) ? context : this.children().toArray();
	const options = {
		context,
		root: (_a$4 = this._root) === null || _a$4 === void 0 ? void 0 : _a$4[0],
		xmlMode: this.options.xmlMode,
		lowerCaseTags: this.options.lowerCaseTags,
		lowerCaseAttributeNames: this.options.lowerCaseAttributeNames,
		pseudos: this.options.pseudos,
		quirksMode: this.options.quirksMode
	};
	return this._make(select$1(selector$1, elems, options, limit));
}
/**
* Creates a matcher, using a particular mapping function. Matchers provide a
* function that finds elements using a generating function, supporting
* filtering.
*
* @private
* @param matchMap - Mapping function.
* @returns - Function for wrapping generating functions.
*/
function _getMatcher(matchMap) {
	return function(fn$1, ...postFns) {
		return function(selector$1) {
			var _a$4;
			let matched = matchMap(fn$1, this);
			if (selector$1) matched = filterArray(matched, selector$1, this.options.xmlMode, (_a$4 = this._root) === null || _a$4 === void 0 ? void 0 : _a$4[0]);
			return this._make(this.length > 1 && matched.length > 1 ? postFns.reduce((elems, fn$2) => fn$2(elems), matched) : matched);
		};
	};
}
/** Matcher that adds multiple elements for each entry in the input. */
const _matcher = _getMatcher((fn$1, elems) => {
	let ret = [];
	for (let i$1 = 0; i$1 < elems.length; i$1++) {
		const value = fn$1(elems[i$1]);
		if (value.length > 0) ret = ret.concat(value);
	}
	return ret;
});
/** Matcher that adds at most one element for each entry in the input. */
const _singleMatcher = _getMatcher((fn$1, elems) => {
	const ret = [];
	for (let i$1 = 0; i$1 < elems.length; i$1++) {
		const value = fn$1(elems[i$1]);
		if (value !== null) ret.push(value);
	}
	return ret;
});
/**
* Matcher that supports traversing until a condition is met.
*
* @param nextElem - Function that returns the next element.
* @param postFns - Post processing functions.
* @returns A function usable for `*Until` methods.
*/
function _matchUntil(nextElem, ...postFns) {
	let matches = null;
	const innerMatcher = _getMatcher((nextElem$1, elems) => {
		const matched = [];
		domEach(elems, (elem) => {
			for (let next$1; next$1 = nextElem$1(elem); elem = next$1) {
				if (matches === null || matches === void 0 ? void 0 : matches(next$1, matched.length)) break;
				matched.push(next$1);
			}
		});
		return matched;
	})(nextElem, ...postFns);
	return function(selector$1, filterSelector) {
		matches = typeof selector$1 === "string" ? (elem) => is$1(elem, selector$1, this.options) : selector$1 ? getFilterFn(selector$1) : null;
		const ret = innerMatcher.call(this, filterSelector);
		matches = null;
		return ret;
	};
}
function _removeDuplicates(elems) {
	return elems.length > 1 ? Array.from(new Set(elems)) : elems;
}
/**
* Get the parent of each element in the current set of matched elements,
* optionally filtered by a selector.
*
* @category Traversing
* @example
*
* ```js
* $('.pear').parent().attr('id');
* //=> fruits
* ```
*
* @param selector - If specified filter for parent.
* @returns The parents.
* @see {@link https://api.jquery.com/parent/}
*/
const parent = _singleMatcher(({ parent: parent$1 }) => parent$1 && !isDocument(parent$1) ? parent$1 : null, _removeDuplicates);
/**
* Get a set of parents filtered by `selector` of each element in the current
* set of match elements.
*
* @category Traversing
* @example
*
* ```js
* $('.orange').parents().length;
* //=> 2
* $('.orange').parents('#fruits').length;
* //=> 1
* ```
*
* @param selector - If specified filter for parents.
* @returns The parents.
* @see {@link https://api.jquery.com/parents/}
*/
const parents = _matcher((elem) => {
	const matched = [];
	while (elem.parent && !isDocument(elem.parent)) {
		matched.push(elem.parent);
		elem = elem.parent;
	}
	return matched;
}, uniqueSort, (elems) => elems.reverse());
/**
* Get the ancestors of each element in the current set of matched elements, up
* to but not including the element matched by the selector, DOM node, or
* cheerio object.
*
* @category Traversing
* @example
*
* ```js
* $('.orange').parentsUntil('#food').length;
* //=> 1
* ```
*
* @param selector - Selector for element to stop at.
* @param filterSelector - Optional filter for parents.
* @returns The parents.
* @see {@link https://api.jquery.com/parentsUntil/}
*/
const parentsUntil = _matchUntil(({ parent: parent$1 }) => parent$1 && !isDocument(parent$1) ? parent$1 : null, uniqueSort, (elems) => elems.reverse());
/**
* For each element in the set, get the first element that matches the selector
* by testing the element itself and traversing up through its ancestors in the
* DOM tree.
*
* @category Traversing
* @example
*
* ```js
* $('.orange').closest();
* //=> []
*
* $('.orange').closest('.apple');
* // => []
*
* $('.orange').closest('li');
* //=> [<li class="orange">Orange</li>]
*
* $('.orange').closest('#fruits');
* //=> [<ul id="fruits"> ... </ul>]
* ```
*
* @param selector - Selector for the element to find.
* @returns The closest nodes.
* @see {@link https://api.jquery.com/closest/}
*/
function closest(selector$1) {
	var _a$4;
	const set = [];
	if (!selector$1) return this._make(set);
	const selectOpts = {
		xmlMode: this.options.xmlMode,
		root: (_a$4 = this._root) === null || _a$4 === void 0 ? void 0 : _a$4[0]
	};
	const selectFn = typeof selector$1 === "string" ? (elem) => is$1(elem, selector$1, selectOpts) : getFilterFn(selector$1);
	domEach(this, (elem) => {
		if (elem && !isDocument(elem) && !isTag(elem)) elem = elem.parent;
		while (elem && isTag(elem)) {
			if (selectFn(elem, 0)) {
				if (!set.includes(elem)) set.push(elem);
				break;
			}
			elem = elem.parent;
		}
	});
	return this._make(set);
}
/**
* Gets the next sibling of each selected element, optionally filtered by a
* selector.
*
* @category Traversing
* @example
*
* ```js
* $('.apple').next().hasClass('orange');
* //=> true
* ```
*
* @param selector - If specified filter for sibling.
* @returns The next nodes.
* @see {@link https://api.jquery.com/next/}
*/
const next = _singleMatcher((elem) => nextElementSibling(elem));
/**
* Gets all the following siblings of the each selected element, optionally
* filtered by a selector.
*
* @category Traversing
* @example
*
* ```js
* $('.apple').nextAll();
* //=> [<li class="orange">Orange</li>, <li class="pear">Pear</li>]
* $('.apple').nextAll('.orange');
* //=> [<li class="orange">Orange</li>]
* ```
*
* @param selector - If specified filter for siblings.
* @returns The next nodes.
* @see {@link https://api.jquery.com/nextAll/}
*/
const nextAll = _matcher((elem) => {
	const matched = [];
	while (elem.next) {
		elem = elem.next;
		if (isTag(elem)) matched.push(elem);
	}
	return matched;
}, _removeDuplicates);
/**
* Gets all the following siblings up to but not including the element matched
* by the selector, optionally filtered by another selector.
*
* @category Traversing
* @example
*
* ```js
* $('.apple').nextUntil('.pear');
* //=> [<li class="orange">Orange</li>]
* ```
*
* @param selector - Selector for element to stop at.
* @param filterSelector - If specified filter for siblings.
* @returns The next nodes.
* @see {@link https://api.jquery.com/nextUntil/}
*/
const nextUntil = _matchUntil((el) => nextElementSibling(el), _removeDuplicates);
/**
* Gets the previous sibling of each selected element optionally filtered by a
* selector.
*
* @category Traversing
* @example
*
* ```js
* $('.orange').prev().hasClass('apple');
* //=> true
* ```
*
* @param selector - If specified filter for siblings.
* @returns The previous nodes.
* @see {@link https://api.jquery.com/prev/}
*/
const prev = _singleMatcher((elem) => prevElementSibling(elem));
/**
* Gets all the preceding siblings of each selected element, optionally filtered
* by a selector.
*
* @category Traversing
* @example
*
* ```js
* $('.pear').prevAll();
* //=> [<li class="orange">Orange</li>, <li class="apple">Apple</li>]
*
* $('.pear').prevAll('.orange');
* //=> [<li class="orange">Orange</li>]
* ```
*
* @param selector - If specified filter for siblings.
* @returns The previous nodes.
* @see {@link https://api.jquery.com/prevAll/}
*/
const prevAll = _matcher((elem) => {
	const matched = [];
	while (elem.prev) {
		elem = elem.prev;
		if (isTag(elem)) matched.push(elem);
	}
	return matched;
}, _removeDuplicates);
/**
* Gets all the preceding siblings up to but not including the element matched
* by the selector, optionally filtered by another selector.
*
* @category Traversing
* @example
*
* ```js
* $('.pear').prevUntil('.apple');
* //=> [<li class="orange">Orange</li>]
* ```
*
* @param selector - Selector for element to stop at.
* @param filterSelector - If specified filter for siblings.
* @returns The previous nodes.
* @see {@link https://api.jquery.com/prevUntil/}
*/
const prevUntil = _matchUntil((el) => prevElementSibling(el), _removeDuplicates);
/**
* Get the siblings of each element (excluding the element) in the set of
* matched elements, optionally filtered by a selector.
*
* @category Traversing
* @example
*
* ```js
* $('.pear').siblings().length;
* //=> 2
*
* $('.pear').siblings('.orange').length;
* //=> 1
* ```
*
* @param selector - If specified filter for siblings.
* @returns The siblings.
* @see {@link https://api.jquery.com/siblings/}
*/
const siblings = _matcher((elem) => getSiblings(elem).filter((el) => isTag(el) && el !== elem), uniqueSort);
/**
* Gets the element children of each element in the set of matched elements.
*
* @category Traversing
* @example
*
* ```js
* $('#fruits').children().length;
* //=> 3
*
* $('#fruits').children('.pear').text();
* //=> Pear
* ```
*
* @param selector - If specified filter for children.
* @returns The children.
* @see {@link https://api.jquery.com/children/}
*/
const children = _matcher((elem) => getChildren(elem).filter(isTag), _removeDuplicates);
/**
* Gets the children of each element in the set of matched elements, including
* text and comment nodes.
*
* @category Traversing
* @example
*
* ```js
* $('#fruits').contents().length;
* //=> 3
* ```
*
* @returns The children.
* @see {@link https://api.jquery.com/contents/}
*/
function contents() {
	const elems = this.toArray().reduce((newElems, elem) => hasChildren(elem) ? newElems.concat(elem.children) : newElems, []);
	return this._make(elems);
}
/**
* Iterates over a cheerio object, executing a function for each matched
* element. When the callback is fired, the function is fired in the context of
* the DOM element, so `this` refers to the current element, which is equivalent
* to the function parameter `element`. To break out of the `each` loop early,
* return with `false`.
*
* @category Traversing
* @example
*
* ```js
* const fruits = [];
*
* $('li').each(function (i, elem) {
*   fruits[i] = $(this).text();
* });
*
* fruits.join(', ');
* //=> Apple, Orange, Pear
* ```
*
* @param fn - Function to execute.
* @returns The instance itself, useful for chaining.
* @see {@link https://api.jquery.com/each/}
*/
function each(fn$1) {
	let i$1 = 0;
	const len = this.length;
	while (i$1 < len && fn$1.call(this[i$1], i$1, this[i$1]) !== false) ++i$1;
	return this;
}
/**
* Pass each element in the current matched set through a function, producing a
* new Cheerio object containing the return values. The function can return an
* individual data item or an array of data items to be inserted into the
* resulting set. If an array is returned, the elements inside the array are
* inserted into the set. If the function returns null or undefined, no element
* will be inserted.
*
* @category Traversing
* @example
*
* ```js
* $('li')
*   .map(function (i, el) {
*     // this === el
*     return $(this).text();
*   })
*   .toArray()
*   .join(' ');
* //=> "apple orange pear"
* ```
*
* @param fn - Function to execute.
* @returns The mapped elements, wrapped in a Cheerio collection.
* @see {@link https://api.jquery.com/map/}
*/
function map(fn$1) {
	let elems = [];
	for (let i$1 = 0; i$1 < this.length; i$1++) {
		const el = this[i$1];
		const val$1 = fn$1.call(el, i$1, el);
		if (val$1 != null) elems = elems.concat(val$1);
	}
	return this._make(elems);
}
/**
* Creates a function to test if a filter is matched.
*
* @param match - A filter.
* @returns A function that determines if a filter has been matched.
*/
function getFilterFn(match) {
	if (typeof match === "function") return (el, i$1) => match.call(el, i$1, el);
	if (isCheerio(match)) return (el) => Array.prototype.includes.call(match, el);
	return function(el) {
		return match === el;
	};
}
function filter(match) {
	var _a$4;
	return this._make(filterArray(this.toArray(), match, this.options.xmlMode, (_a$4 = this._root) === null || _a$4 === void 0 ? void 0 : _a$4[0]));
}
function filterArray(nodes, match, xmlMode, root$2) {
	return typeof match === "string" ? filter$1(match, nodes, {
		xmlMode,
		root: root$2
	}) : nodes.filter(getFilterFn(match));
}
/**
* Checks the current list of elements and returns `true` if _any_ of the
* elements match the selector. If using an element or Cheerio selection,
* returns `true` if _any_ of the elements match. If using a predicate function,
* the function is executed in the context of the selected element, so `this`
* refers to the current element.
*
* @category Traversing
* @param selector - Selector for the selection.
* @returns Whether or not the selector matches an element of the instance.
* @see {@link https://api.jquery.com/is/}
*/
function is(selector$1) {
	const nodes = this.toArray();
	return typeof selector$1 === "string" ? some(nodes.filter(isTag), selector$1, this.options) : selector$1 ? nodes.some(getFilterFn(selector$1)) : false;
}
/**
* Remove elements from the set of matched elements. Given a Cheerio object that
* represents a set of DOM elements, the `.not()` method constructs a new
* Cheerio object from a subset of the matching elements. The supplied selector
* is tested against each element; the elements that don't match the selector
* will be included in the result.
*
* The `.not()` method can take a function as its argument in the same way that
* `.filter()` does. Elements for which the function returns `true` are excluded
* from the filtered set; all other elements are included.
*
* @category Traversing
* @example <caption>Selector</caption>
*
* ```js
* $('li').not('.apple').length;
* //=> 2
* ```
*
* @example <caption>Function</caption>
*
* ```js
* $('li').not(function (i, el) {
*   // this === el
*   return $(this).attr('class') === 'orange';
* }).length; //=> 2
* ```
*
* @param match - Value to look for, following the rules above.
* @returns The filtered collection.
* @see {@link https://api.jquery.com/not/}
*/
function not(match) {
	let nodes = this.toArray();
	if (typeof match === "string") {
		const matches = new Set(filter$1(match, nodes, this.options));
		nodes = nodes.filter((el) => !matches.has(el));
	} else {
		const filterFn = getFilterFn(match);
		nodes = nodes.filter((el, i$1) => !filterFn(el, i$1));
	}
	return this._make(nodes);
}
/**
* Filters the set of matched elements to only those which have the given DOM
* element as a descendant or which have a descendant that matches the given
* selector. Equivalent to `.filter(':has(selector)')`.
*
* @category Traversing
* @example <caption>Selector</caption>
*
* ```js
* $('ul').has('.pear').attr('id');
* //=> fruits
* ```
*
* @example <caption>Element</caption>
*
* ```js
* $('ul').has($('.pear')[0]).attr('id');
* //=> fruits
* ```
*
* @param selectorOrHaystack - Element to look for.
* @returns The filtered collection.
* @see {@link https://api.jquery.com/has/}
*/
function has(selectorOrHaystack) {
	return this.filter(typeof selectorOrHaystack === "string" ? `:has(${selectorOrHaystack})` : (_, el) => this._make(el).find(selectorOrHaystack).length > 0);
}
/**
* Will select the first element of a cheerio object.
*
* @category Traversing
* @example
*
* ```js
* $('#fruits').children().first().text();
* //=> Apple
* ```
*
* @returns The first element.
* @see {@link https://api.jquery.com/first/}
*/
function first() {
	return this.length > 1 ? this._make(this[0]) : this;
}
/**
* Will select the last element of a cheerio object.
*
* @category Traversing
* @example
*
* ```js
* $('#fruits').children().last().text();
* //=> Pear
* ```
*
* @returns The last element.
* @see {@link https://api.jquery.com/last/}
*/
function last() {
	return this.length > 0 ? this._make(this[this.length - 1]) : this;
}
/**
* Reduce the set of matched elements to the one at the specified index. Use
* `.eq(-i)` to count backwards from the last selected element.
*
* @category Traversing
* @example
*
* ```js
* $('li').eq(0).text();
* //=> Apple
*
* $('li').eq(-1).text();
* //=> Pear
* ```
*
* @param i - Index of the element to select.
* @returns The element at the `i`th position.
* @see {@link https://api.jquery.com/eq/}
*/
function eq(i$1) {
	var _a$4;
	i$1 = +i$1;
	if (i$1 === 0 && this.length <= 1) return this;
	if (i$1 < 0) i$1 = this.length + i$1;
	return this._make((_a$4 = this[i$1]) !== null && _a$4 !== void 0 ? _a$4 : []);
}
function get(i$1) {
	if (i$1 == null) return this.toArray();
	return this[i$1 < 0 ? this.length + i$1 : i$1];
}
/**
* Retrieve all the DOM elements contained in the jQuery set as an array.
*
* @example
*
* ```js
* $('li').toArray();
* //=> [ {...}, {...}, {...} ]
* ```
*
* @returns The contained items.
*/
function toArray() {
	return Array.prototype.slice.call(this);
}
/**
* Search for a given element from among the matched elements.
*
* @category Traversing
* @example
*
* ```js
* $('.pear').index();
* //=> 2 $('.orange').index('li');
* //=> 1
* $('.apple').index($('#fruit, li'));
* //=> 1
* ```
*
* @param selectorOrNeedle - Element to look for.
* @returns The index of the element.
* @see {@link https://api.jquery.com/index/}
*/
function index$1(selectorOrNeedle) {
	let $haystack;
	let needle;
	if (selectorOrNeedle == null) {
		$haystack = this.parent().children();
		needle = this[0];
	} else if (typeof selectorOrNeedle === "string") {
		$haystack = this._make(selectorOrNeedle);
		needle = this[0];
	} else {
		$haystack = this;
		needle = isCheerio(selectorOrNeedle) ? selectorOrNeedle[0] : selectorOrNeedle;
	}
	return Array.prototype.indexOf.call($haystack, needle);
}
/**
* Gets the elements matching the specified range (0-based position).
*
* @category Traversing
* @example
*
* ```js
* $('li').slice(1).eq(0).text();
* //=> 'Orange'
*
* $('li').slice(1, 2).length;
* //=> 1
* ```
*
* @param start - A position at which the elements begin to be selected. If
*   negative, it indicates an offset from the end of the set.
* @param end - A position at which the elements stop being selected. If
*   negative, it indicates an offset from the end of the set. If omitted, the
*   range continues until the end of the set.
* @returns The elements matching the specified range.
* @see {@link https://api.jquery.com/slice/}
*/
function slice(start, end$1) {
	return this._make(Array.prototype.slice.call(this, start, end$1));
}
/**
* End the most recent filtering operation in the current chain and return the
* set of matched elements to its previous state.
*
* @category Traversing
* @example
*
* ```js
* $('li').eq(0).end().length;
* //=> 3
* ```
*
* @returns The previous state of the set of matched elements.
* @see {@link https://api.jquery.com/end/}
*/
function end() {
	var _a$4;
	return (_a$4 = this.prevObject) !== null && _a$4 !== void 0 ? _a$4 : this._make([]);
}
/**
* Add elements to the set of matched elements.
*
* @category Traversing
* @example
*
* ```js
* $('.apple').add('.orange').length;
* //=> 2
* ```
*
* @param other - Elements to add.
* @param context - Optionally the context of the new selection.
* @returns The combined set.
* @see {@link https://api.jquery.com/add/}
*/
function add(other, context) {
	const selection = this._make(other, context);
	const contents$1 = uniqueSort([...this.get(), ...selection.get()]);
	return this._make(contents$1);
}
/**
* Add the previous set of elements on the stack to the current set, optionally
* filtered by a selector.
*
* @category Traversing
* @example
*
* ```js
* $('li').eq(0).addBack('.orange').length;
* //=> 2
* ```
*
* @param selector - Selector for the elements to add.
* @returns The combined set.
* @see {@link https://api.jquery.com/addBack/}
*/
function addBack(selector$1) {
	return this.prevObject ? this.add(selector$1 ? this.prevObject.filter(selector$1) : this.prevObject) : this;
}

//#endregion
//#region node_modules/.pnpm/cheerio@1.2.0/node_modules/cheerio/dist/esm/parse.js
/**
* Get the parse function with options.
*
* @param parser - The parser function.
* @returns The parse function with options.
*/
function getParse(parser) {
	/**
	* Parse a HTML string or a node.
	*
	* @param content - The HTML string or node.
	* @param options - The parser options.
	* @param isDocument - If `content` is a document.
	* @param context - The context node in the DOM tree.
	* @returns The parsed document node.
	*/
	return function parse$10(content, options, isDocument$1, context) {
		if (typeof Buffer !== "undefined" && Buffer.isBuffer(content)) content = content.toString();
		if (typeof content === "string") return parser(content, options, isDocument$1, context);
		const doc = content;
		if (!Array.isArray(doc) && isDocument(doc)) return doc;
		const root$2 = new Document$1([]);
		update(doc, root$2);
		return root$2;
	};
}
/**
* Update the dom structure, for one changed layer.
*
* @param newChilds - The new children.
* @param parent - The new parent.
* @returns The parent node.
*/
function update(newChilds, parent$1) {
	const arr = Array.isArray(newChilds) ? newChilds : [newChilds];
	if (parent$1) parent$1.children = arr;
	else parent$1 = null;
	for (let i$1 = 0; i$1 < arr.length; i$1++) {
		const node$1 = arr[i$1];
		if (node$1.parent && node$1.parent.children !== arr) removeElement(node$1);
		if (parent$1) {
			node$1.prev = arr[i$1 - 1] || null;
			node$1.next = arr[i$1 + 1] || null;
		} else node$1.prev = node$1.next = null;
		node$1.parent = parent$1;
	}
	return parent$1;
}

//#endregion
//#region node_modules/.pnpm/cheerio@1.2.0/node_modules/cheerio/dist/esm/api/manipulation.js
var manipulation_exports = /* @__PURE__ */ __export({
	_makeDomArray: () => _makeDomArray,
	after: () => after,
	append: () => append,
	appendTo: () => appendTo,
	before: () => before,
	clone: () => clone$1,
	empty: () => empty,
	html: () => html,
	insertAfter: () => insertAfter,
	insertBefore: () => insertBefore,
	prepend: () => prepend,
	prependTo: () => prependTo,
	remove: () => remove,
	replaceWith: () => replaceWith,
	text: () => text$1,
	toString: () => toString,
	unwrap: () => unwrap,
	wrap: () => wrap,
	wrapAll: () => wrapAll,
	wrapInner: () => wrapInner
});
/**
* Create an array of nodes, recursing into arrays and parsing strings if
* necessary.
*
* @private
* @category Manipulation
* @param elem - Elements to make an array of.
* @param clone - Optionally clone nodes.
* @returns The array of nodes.
*/
function _makeDomArray(elem, clone$2) {
	if (elem == null) return [];
	if (typeof elem === "string") return this._parse(elem, this.options, false, null).children.slice(0);
	if ("length" in elem) {
		if (elem.length === 1) return this._makeDomArray(elem[0], clone$2);
		const result = [];
		for (let i$1 = 0; i$1 < elem.length; i$1++) {
			const el = elem[i$1];
			if (typeof el === "object") {
				if (el == null) continue;
				if (!("length" in el)) {
					result.push(clone$2 ? cloneNode$1(el, true) : el);
					continue;
				}
			}
			result.push(...this._makeDomArray(el, clone$2));
		}
		return result;
	}
	return [clone$2 ? cloneNode$1(elem, true) : elem];
}
function _insert(concatenator) {
	return function(...elems) {
		const lastIdx = this.length - 1;
		return domEach(this, (el, i$1) => {
			if (!hasChildren(el)) return;
			const domSrc = typeof elems[0] === "function" ? elems[0].call(el, i$1, this._render(el.children)) : elems;
			concatenator(this._makeDomArray(domSrc, i$1 < lastIdx), el.children, el);
		});
	};
}
/**
* Modify an array in-place, removing some number of elements and adding new
* elements directly following them.
*
* @private
* @category Manipulation
* @param array - Target array to splice.
* @param spliceIdx - Index at which to begin changing the array.
* @param spliceCount - Number of elements to remove from the array.
* @param newElems - Elements to insert into the array.
* @param parent - The parent of the node.
* @returns The spliced array.
*/
function uniqueSplice(array$1, spliceIdx, spliceCount, newElems, parent$1) {
	var _a$4, _b;
	const spliceArgs = [
		spliceIdx,
		spliceCount,
		...newElems
	];
	const prev$1 = spliceIdx === 0 ? null : array$1[spliceIdx - 1];
	const next$1 = spliceIdx + spliceCount >= array$1.length ? null : array$1[spliceIdx + spliceCount];
	for (let idx = 0; idx < newElems.length; ++idx) {
		const node$1 = newElems[idx];
		const oldParent = node$1.parent;
		if (oldParent) {
			const prevIdx = oldParent.children.indexOf(node$1);
			if (prevIdx !== -1) {
				oldParent.children.splice(prevIdx, 1);
				if (parent$1 === oldParent && spliceIdx > prevIdx) spliceArgs[0]--;
			}
		}
		node$1.parent = parent$1;
		if (node$1.prev) node$1.prev.next = (_a$4 = node$1.next) !== null && _a$4 !== void 0 ? _a$4 : null;
		if (node$1.next) node$1.next.prev = (_b = node$1.prev) !== null && _b !== void 0 ? _b : null;
		node$1.prev = idx === 0 ? prev$1 : newElems[idx - 1];
		node$1.next = idx === newElems.length - 1 ? next$1 : newElems[idx + 1];
	}
	if (prev$1) prev$1.next = newElems[0];
	if (next$1) next$1.prev = newElems[newElems.length - 1];
	return array$1.splice(...spliceArgs);
}
/**
* Insert every element in the set of matched elements to the end of the target.
*
* @category Manipulation
* @example
*
* ```js
* $('<li class="plum">Plum</li>').appendTo('#fruits');
* $.html();
* //=>  <ul id="fruits">
* //      <li class="apple">Apple</li>
* //      <li class="orange">Orange</li>
* //      <li class="pear">Pear</li>
* //      <li class="plum">Plum</li>
* //    </ul>
* ```
*
* @param target - Element to append elements to.
* @returns The instance itself.
* @see {@link https://api.jquery.com/appendTo/}
*/
function appendTo(target) {
	(isCheerio(target) ? target : this._make(target)).append(this);
	return this;
}
/**
* Insert every element in the set of matched elements to the beginning of the
* target.
*
* @category Manipulation
* @example
*
* ```js
* $('<li class="plum">Plum</li>').prependTo('#fruits');
* $.html();
* //=>  <ul id="fruits">
* //      <li class="plum">Plum</li>
* //      <li class="apple">Apple</li>
* //      <li class="orange">Orange</li>
* //      <li class="pear">Pear</li>
* //    </ul>
* ```
*
* @param target - Element to prepend elements to.
* @returns The instance itself.
* @see {@link https://api.jquery.com/prependTo/}
*/
function prependTo(target) {
	(isCheerio(target) ? target : this._make(target)).prepend(this);
	return this;
}
/**
* Inserts content as the _last_ child of each of the selected elements.
*
* @category Manipulation
* @example
*
* ```js
* $('ul').append('<li class="plum">Plum</li>');
* $.html();
* //=>  <ul id="fruits">
* //      <li class="apple">Apple</li>
* //      <li class="orange">Orange</li>
* //      <li class="pear">Pear</li>
* //      <li class="plum">Plum</li>
* //    </ul>
* ```
*
* @see {@link https://api.jquery.com/append/}
*/
const append = _insert((dom$2, children$1, parent$1) => {
	uniqueSplice(children$1, children$1.length, 0, dom$2, parent$1);
});
/**
* Inserts content as the _first_ child of each of the selected elements.
*
* @category Manipulation
* @example
*
* ```js
* $('ul').prepend('<li class="plum">Plum</li>');
* $.html();
* //=>  <ul id="fruits">
* //      <li class="plum">Plum</li>
* //      <li class="apple">Apple</li>
* //      <li class="orange">Orange</li>
* //      <li class="pear">Pear</li>
* //    </ul>
* ```
*
* @see {@link https://api.jquery.com/prepend/}
*/
const prepend = _insert((dom$2, children$1, parent$1) => {
	uniqueSplice(children$1, 0, 0, dom$2, parent$1);
});
function _wrap(insert) {
	return function(wrapper) {
		const lastIdx = this.length - 1;
		const lastParent = this.parents().last();
		for (let i$1 = 0; i$1 < this.length; i$1++) {
			const el = this[i$1];
			const wrap$1 = typeof wrapper === "function" ? wrapper.call(el, i$1, el) : typeof wrapper === "string" && !isHtml(wrapper) ? lastParent.find(wrapper).clone() : wrapper;
			const [wrapperDom] = this._makeDomArray(wrap$1, i$1 < lastIdx);
			if (!wrapperDom || !hasChildren(wrapperDom)) continue;
			let elInsertLocation = wrapperDom;
			let j = 0;
			while (j < elInsertLocation.children.length) {
				const child = elInsertLocation.children[j];
				if (isTag(child)) {
					elInsertLocation = child;
					j = 0;
				} else j++;
			}
			insert(el, elInsertLocation, [wrapperDom]);
		}
		return this;
	};
}
/**
* The .wrap() function can take any string or object that could be passed to
* the $() factory function to specify a DOM structure. This structure may be
* nested several levels deep, but should contain only one inmost element. A
* copy of this structure will be wrapped around each of the elements in the set
* of matched elements. This method returns the original set of elements for
* chaining purposes.
*
* @category Manipulation
* @example
*
* ```js
* const redFruit = $('<div class="red-fruit"></div>');
* $('.apple').wrap(redFruit);
*
* //=> <ul id="fruits">
* //     <div class="red-fruit">
* //      <li class="apple">Apple</li>
* //     </div>
* //     <li class="orange">Orange</li>
* //     <li class="plum">Plum</li>
* //   </ul>
*
* const healthy = $('<div class="healthy"></div>');
* $('li').wrap(healthy);
*
* //=> <ul id="fruits">
* //     <div class="healthy">
* //       <li class="apple">Apple</li>
* //     </div>
* //     <div class="healthy">
* //       <li class="orange">Orange</li>
* //     </div>
* //     <div class="healthy">
* //        <li class="plum">Plum</li>
* //     </div>
* //   </ul>
* ```
*
* @param wrapper - The DOM structure to wrap around each element in the
*   selection.
* @see {@link https://api.jquery.com/wrap/}
*/
const wrap = _wrap((el, elInsertLocation, wrapperDom) => {
	const { parent: parent$1 } = el;
	if (!parent$1) return;
	const siblings$1 = parent$1.children;
	const index$2 = siblings$1.indexOf(el);
	update([el], elInsertLocation);
	uniqueSplice(siblings$1, index$2, 0, wrapperDom, parent$1);
});
/**
* The .wrapInner() function can take any string or object that could be passed
* to the $() factory function to specify a DOM structure. This structure may be
* nested several levels deep, but should contain only one inmost element. The
* structure will be wrapped around the content of each of the elements in the
* set of matched elements.
*
* @category Manipulation
* @example
*
* ```js
* const redFruit = $('<div class="red-fruit"></div>');
* $('.apple').wrapInner(redFruit);
*
* //=> <ul id="fruits">
* //     <li class="apple">
* //       <div class="red-fruit">Apple</div>
* //     </li>
* //     <li class="orange">Orange</li>
* //     <li class="pear">Pear</li>
* //   </ul>
*
* const healthy = $('<div class="healthy"></div>');
* $('li').wrapInner(healthy);
*
* //=> <ul id="fruits">
* //     <li class="apple">
* //       <div class="healthy">Apple</div>
* //     </li>
* //     <li class="orange">
* //       <div class="healthy">Orange</div>
* //     </li>
* //     <li class="pear">
* //       <div class="healthy">Pear</div>
* //     </li>
* //   </ul>
* ```
*
* @param wrapper - The DOM structure to wrap around the content of each element
*   in the selection.
* @returns The instance itself, for chaining.
* @see {@link https://api.jquery.com/wrapInner/}
*/
const wrapInner = _wrap((el, elInsertLocation, wrapperDom) => {
	if (!hasChildren(el)) return;
	update(el.children, elInsertLocation);
	update(wrapperDom, el);
});
/**
* The .unwrap() function, removes the parents of the set of matched elements
* from the DOM, leaving the matched elements in their place.
*
* @category Manipulation
* @example <caption>without selector</caption>
*
* ```js
* const $ = cheerio.load(
*   '<div id=test>\n  <div><p>Hello</p></div>\n  <div><p>World</p></div>\n</div>',
* );
* $('#test p').unwrap();
*
* //=> <div id=test>
* //     <p>Hello</p>
* //     <p>World</p>
* //   </div>
* ```
*
* @example <caption>with selector</caption>
*
* ```js
* const $ = cheerio.load(
*   '<div id=test>\n  <p>Hello</p>\n  <b><p>World</p></b>\n</div>',
* );
* $('#test p').unwrap('b');
*
* //=> <div id=test>
* //     <p>Hello</p>
* //     <p>World</p>
* //   </div>
* ```
*
* @param selector - A selector to check the parent element against. If an
*   element's parent does not match the selector, the element won't be
*   unwrapped.
* @returns The instance itself, for chaining.
* @see {@link https://api.jquery.com/unwrap/}
*/
function unwrap(selector$1) {
	this.parent(selector$1).not("body").each((_, el) => {
		this._make(el).replaceWith(el.children);
	});
	return this;
}
/**
* The .wrapAll() function can take any string or object that could be passed to
* the $() function to specify a DOM structure. This structure may be nested
* several levels deep, but should contain only one inmost element. The
* structure will be wrapped around all of the elements in the set of matched
* elements, as a single group.
*
* @category Manipulation
* @example <caption>With markup passed to `wrapAll`</caption>
*
* ```js
* const $ = cheerio.load(
*   '<div class="container"><div class="inner">First</div><div class="inner">Second</div></div>',
* );
* $('.inner').wrapAll("<div class='new'></div>");
*
* //=> <div class="container">
* //     <div class='new'>
* //       <div class="inner">First</div>
* //       <div class="inner">Second</div>
* //     </div>
* //   </div>
* ```
*
* @example <caption>With an existing cheerio instance</caption>
*
* ```js
* const $ = cheerio.load(
*   '<span>Span 1</span><strong>Strong</strong><span>Span 2</span>',
* );
* const wrap = $('<div><p><em><b></b></em></p></div>');
* $('span').wrapAll(wrap);
*
* //=> <div>
* //     <p>
* //       <em>
* //         <b>
* //           <span>Span 1</span>
* //           <span>Span 2</span>
* //         </b>
* //       </em>
* //     </p>
* //   </div>
* //   <strong>Strong</strong>
* ```
*
* @param wrapper - The DOM structure to wrap around all matched elements in the
*   selection.
* @returns The instance itself.
* @see {@link https://api.jquery.com/wrapAll/}
*/
function wrapAll(wrapper) {
	const el = this[0];
	if (el) {
		const wrap$1 = this._make(typeof wrapper === "function" ? wrapper.call(el, 0, el) : wrapper).insertBefore(el);
		let elInsertLocation;
		for (let i$1 = 0; i$1 < wrap$1.length; i$1++) if (wrap$1[i$1].type === Tag) elInsertLocation = wrap$1[i$1];
		let j = 0;
		while (elInsertLocation && j < elInsertLocation.children.length) {
			const child = elInsertLocation.children[j];
			if (child.type === Tag) {
				elInsertLocation = child;
				j = 0;
			} else j++;
		}
		if (elInsertLocation) this._make(elInsertLocation).append(this);
	}
	return this;
}
/**
* Insert content next to each element in the set of matched elements.
*
* @category Manipulation
* @example
*
* ```js
* $('.apple').after('<li class="plum">Plum</li>');
* $.html();
* //=>  <ul id="fruits">
* //      <li class="apple">Apple</li>
* //      <li class="plum">Plum</li>
* //      <li class="orange">Orange</li>
* //      <li class="pear">Pear</li>
* //    </ul>
* ```
*
* @param elems - HTML string, DOM element, array of DOM elements or Cheerio to
*   insert after each element in the set of matched elements.
* @returns The instance itself.
* @see {@link https://api.jquery.com/after/}
*/
function after(...elems) {
	const lastIdx = this.length - 1;
	return domEach(this, (el, i$1) => {
		if (!hasChildren(el) || !el.parent) return;
		const siblings$1 = el.parent.children;
		const index$2 = siblings$1.indexOf(el);
		/* istanbul ignore next */
		if (index$2 === -1) return;
		const domSrc = typeof elems[0] === "function" ? elems[0].call(el, i$1, this._render(el.children)) : elems;
		const dom$2 = this._makeDomArray(domSrc, i$1 < lastIdx);
		uniqueSplice(siblings$1, index$2 + 1, 0, dom$2, el.parent);
	});
}
/**
* Insert every element in the set of matched elements after the target.
*
* @category Manipulation
* @example
*
* ```js
* $('<li class="plum">Plum</li>').insertAfter('.apple');
* $.html();
* //=>  <ul id="fruits">
* //      <li class="apple">Apple</li>
* //      <li class="plum">Plum</li>
* //      <li class="orange">Orange</li>
* //      <li class="pear">Pear</li>
* //    </ul>
* ```
*
* @param target - Element to insert elements after.
* @returns The set of newly inserted elements.
* @see {@link https://api.jquery.com/insertAfter/}
*/
function insertAfter(target) {
	if (typeof target === "string") target = this._make(target);
	this.remove();
	const clones = [];
	for (const el of this._makeDomArray(target)) {
		const clonedSelf = this.clone().toArray();
		const { parent: parent$1 } = el;
		if (!parent$1) continue;
		const siblings$1 = parent$1.children;
		const index$2 = siblings$1.indexOf(el);
		/* istanbul ignore next */
		if (index$2 === -1) continue;
		uniqueSplice(siblings$1, index$2 + 1, 0, clonedSelf, parent$1);
		clones.push(...clonedSelf);
	}
	return this._make(clones);
}
/**
* Insert content previous to each element in the set of matched elements.
*
* @category Manipulation
* @example
*
* ```js
* $('.apple').before('<li class="plum">Plum</li>');
* $.html();
* //=>  <ul id="fruits">
* //      <li class="plum">Plum</li>
* //      <li class="apple">Apple</li>
* //      <li class="orange">Orange</li>
* //      <li class="pear">Pear</li>
* //    </ul>
* ```
*
* @param elems - HTML string, DOM element, array of DOM elements or Cheerio to
*   insert before each element in the set of matched elements.
* @returns The instance itself.
* @see {@link https://api.jquery.com/before/}
*/
function before(...elems) {
	const lastIdx = this.length - 1;
	return domEach(this, (el, i$1) => {
		if (!hasChildren(el) || !el.parent) return;
		const siblings$1 = el.parent.children;
		const index$2 = siblings$1.indexOf(el);
		/* istanbul ignore next */
		if (index$2 === -1) return;
		const domSrc = typeof elems[0] === "function" ? elems[0].call(el, i$1, this._render(el.children)) : elems;
		uniqueSplice(siblings$1, index$2, 0, this._makeDomArray(domSrc, i$1 < lastIdx), el.parent);
	});
}
/**
* Insert every element in the set of matched elements before the target.
*
* @category Manipulation
* @example
*
* ```js
* $('<li class="plum">Plum</li>').insertBefore('.apple');
* $.html();
* //=>  <ul id="fruits">
* //      <li class="plum">Plum</li>
* //      <li class="apple">Apple</li>
* //      <li class="orange">Orange</li>
* //      <li class="pear">Pear</li>
* //    </ul>
* ```
*
* @param target - Element to insert elements before.
* @returns The set of newly inserted elements.
* @see {@link https://api.jquery.com/insertBefore/}
*/
function insertBefore(target) {
	const targetArr = this._make(target);
	this.remove();
	const clones = [];
	domEach(targetArr, (el) => {
		const clonedSelf = this.clone().toArray();
		const { parent: parent$1 } = el;
		if (!parent$1) return;
		const siblings$1 = parent$1.children;
		const index$2 = siblings$1.indexOf(el);
		/* istanbul ignore next */
		if (index$2 === -1) return;
		uniqueSplice(siblings$1, index$2, 0, clonedSelf, parent$1);
		clones.push(...clonedSelf);
	});
	return this._make(clones);
}
/**
* Removes the set of matched elements from the DOM and all their children.
* `selector` filters the set of matched elements to be removed.
*
* @category Manipulation
* @example
*
* ```js
* $('.pear').remove();
* $.html();
* //=>  <ul id="fruits">
* //      <li class="apple">Apple</li>
* //      <li class="orange">Orange</li>
* //    </ul>
* ```
*
* @param selector - Optional selector for elements to remove.
* @returns The instance itself.
* @see {@link https://api.jquery.com/remove/}
*/
function remove(selector$1) {
	domEach(selector$1 ? this.filter(selector$1) : this, (el) => {
		removeElement(el);
		el.prev = el.next = el.parent = null;
	});
	return this;
}
/**
* Replaces matched elements with `content`.
*
* @category Manipulation
* @example
*
* ```js
* const plum = $('<li class="plum">Plum</li>');
* $('.pear').replaceWith(plum);
* $.html();
* //=> <ul id="fruits">
* //     <li class="apple">Apple</li>
* //     <li class="orange">Orange</li>
* //     <li class="plum">Plum</li>
* //   </ul>
* ```
*
* @param content - Replacement for matched elements.
* @returns The instance itself.
* @see {@link https://api.jquery.com/replaceWith/}
*/
function replaceWith(content) {
	return domEach(this, (el, i$1) => {
		const { parent: parent$1 } = el;
		if (!parent$1) return;
		const siblings$1 = parent$1.children;
		const cont = typeof content === "function" ? content.call(el, i$1, el) : content;
		const dom$2 = this._makeDomArray(cont);
		update(dom$2, null);
		uniqueSplice(siblings$1, siblings$1.indexOf(el), 1, dom$2, parent$1);
		if (!dom$2.includes(el)) el.parent = el.prev = el.next = null;
	});
}
/**
* Removes all children from each item in the selection. Text nodes and comment
* nodes are left as is.
*
* @category Manipulation
* @example
*
* ```js
* $('ul').empty();
* $.html();
* //=>  <ul id="fruits"></ul>
* ```
*
* @returns The instance itself.
* @see {@link https://api.jquery.com/empty/}
*/
function empty() {
	return domEach(this, (el) => {
		if (!hasChildren(el)) return;
		for (const child of el.children) child.next = child.prev = child.parent = null;
		el.children.length = 0;
	});
}
function html(str) {
	if (str === void 0) {
		const el = this[0];
		if (!el || !hasChildren(el)) return null;
		return this._render(el.children);
	}
	return domEach(this, (el) => {
		if (!hasChildren(el)) return;
		for (const child of el.children) child.next = child.prev = child.parent = null;
		update(isCheerio(str) ? str.toArray() : this._parse(`${str}`, this.options, false, el).children, el);
	});
}
/**
* Turns the collection to a string. Alias for `.html()`.
*
* @category Manipulation
* @returns The rendered document.
*/
function toString() {
	return this._render(this);
}
function text$1(str) {
	if (str === void 0) return text(this);
	if (typeof str === "function") return domEach(this, (el, i$1) => this._make(el).text(str.call(el, i$1, text([el]))));
	return domEach(this, (el) => {
		if (!hasChildren(el)) return;
		for (const child of el.children) child.next = child.prev = child.parent = null;
		update(new Text$1(`${str}`), el);
	});
}
/**
* Clone the cheerio object.
*
* @category Manipulation
* @example
*
* ```js
* const moreFruit = $('#fruits').clone();
* ```
*
* @returns The cloned object.
* @see {@link https://api.jquery.com/clone/}
*/
function clone$1() {
	const clone$2 = Array.prototype.map.call(this.get(), (el) => cloneNode$1(el, true));
	const root$2 = new Document$1(clone$2);
	for (const node$1 of clone$2) node$1.parent = root$2;
	return this._make(clone$2);
}

//#endregion
//#region node_modules/.pnpm/cheerio@1.2.0/node_modules/cheerio/dist/esm/api/css.js
var css_exports = /* @__PURE__ */ __export({ css: () => css });
/**
* Set multiple CSS properties for every matched element.
*
* @category CSS
* @param prop - The names of the properties.
* @param val - The new values.
* @returns The instance itself.
* @see {@link https://api.jquery.com/css/}
*/
function css(prop$1, val$1) {
	if (prop$1 != null && val$1 != null || typeof prop$1 === "object" && !Array.isArray(prop$1)) return domEach(this, (el, i$1) => {
		if (isTag(el)) setCss(el, prop$1, val$1, i$1);
	});
	if (this.length === 0) return;
	return getCss(this[0], prop$1);
}
/**
* Set styles of all elements.
*
* @private
* @param el - Element to set style of.
* @param prop - Name of property.
* @param value - Value to set property to.
* @param idx - Optional index within the selection.
*/
function setCss(el, prop$1, value, idx) {
	if (typeof prop$1 === "string") {
		const styles = getCss(el);
		const val$1 = typeof value === "function" ? value.call(el, idx, styles[prop$1]) : value;
		if (val$1 === "") delete styles[prop$1];
		else if (val$1 != null) styles[prop$1] = val$1;
		el.attribs["style"] = stringify(styles);
	} else if (typeof prop$1 === "object") {
		const keys = Object.keys(prop$1);
		for (let i$1 = 0; i$1 < keys.length; i$1++) {
			const k = keys[i$1];
			setCss(el, k, prop$1[k], i$1);
		}
	}
}
function getCss(el, prop$1) {
	if (!el || !isTag(el)) return;
	const styles = parse$4(el.attribs["style"]);
	if (typeof prop$1 === "string") return styles[prop$1];
	if (Array.isArray(prop$1)) {
		const newStyles = {};
		for (const item of prop$1) if (styles[item] != null) newStyles[item] = styles[item];
		return newStyles;
	}
	return styles;
}
/**
* Stringify `obj` to styles.
*
* @private
* @category CSS
* @param obj - Object to stringify.
* @returns The serialized styles.
*/
function stringify(obj) {
	return Object.keys(obj).reduce((str, prop$1) => `${str}${str ? " " : ""}${prop$1}: ${obj[prop$1]};`, "");
}
/**
* Parse `styles`.
*
* @private
* @category CSS
* @param styles - Styles to be parsed.
* @returns The parsed styles.
*/
function parse$4(styles) {
	styles = (styles || "").trim();
	if (!styles) return {};
	const obj = {};
	let key$2;
	for (const str of styles.split(";")) {
		const n = str.indexOf(":");
		if (n < 1 || n === str.length - 1) {
			const trimmed = str.trimEnd();
			if (trimmed.length > 0 && key$2 !== void 0) obj[key$2] += `;${trimmed}`;
		} else {
			key$2 = str.slice(0, n).trim();
			obj[key$2] = str.slice(n + 1).trim();
		}
	}
	return obj;
}

//#endregion
//#region node_modules/.pnpm/cheerio@1.2.0/node_modules/cheerio/dist/esm/api/forms.js
var forms_exports = /* @__PURE__ */ __export({
	serialize: () => serialize,
	serializeArray: () => serializeArray
});
const submittableSelector = "input,select,textarea,keygen";
const r20 = /%20/g;
const rCRLF = /\r?\n/g;
/**
* Encode a set of form elements as a string for submission.
*
* @category Forms
* @example
*
* ```js
* $('<form><input name="foo" value="bar" /></form>').serialize();
* //=> 'foo=bar'
* ```
*
* @returns The serialized form.
* @see {@link https://api.jquery.com/serialize/}
*/
function serialize() {
	return this.serializeArray().map((data$1) => `${encodeURIComponent(data$1.name)}=${encodeURIComponent(data$1.value)}`).join("&").replace(r20, "+");
}
/**
* Encode a set of form elements as an array of names and values.
*
* @category Forms
* @example
*
* ```js
* $('<form><input name="foo" value="bar" /></form>').serializeArray();
* //=> [ { name: 'foo', value: 'bar' } ]
* ```
*
* @returns The serialized form.
* @see {@link https://api.jquery.com/serializeArray/}
*/
function serializeArray() {
	return this.map((_, elem) => {
		const $elem = this._make(elem);
		if (isTag(elem) && elem.name === "form") return $elem.find(submittableSelector).toArray();
		return $elem.filter(submittableSelector).toArray();
	}).filter("[name!=\"\"]:enabled:not(:submit, :button, :image, :reset, :file):matches([checked], :not(:checkbox, :radio))").map((_, elem) => {
		var _a$4;
		const $elem = this._make(elem);
		const name$1 = $elem.attr("name");
		const value = (_a$4 = $elem.val()) !== null && _a$4 !== void 0 ? _a$4 : "";
		if (Array.isArray(value)) return value.map((val$1) => ({
			name: name$1,
			value: val$1.replace(rCRLF, "\r\n")
		}));
		return {
			name: name$1,
			value: value.replace(rCRLF, "\r\n")
		};
	}).toArray();
}

//#endregion
//#region node_modules/.pnpm/cheerio@1.2.0/node_modules/cheerio/dist/esm/api/extract.js
var extract_exports = /* @__PURE__ */ __export({ extract: () => extract$1 });
function getExtractDescr(descr) {
	var _a$4;
	if (typeof descr === "string") return {
		selector: descr,
		value: "textContent"
	};
	return {
		selector: descr.selector,
		value: (_a$4 = descr.value) !== null && _a$4 !== void 0 ? _a$4 : "textContent"
	};
}
/**
* Extract multiple values from a document, and store them in an object.
*
* @param map - An object containing key-value pairs. The keys are the names of
*   the properties to be created on the object, and the values are the
*   selectors to be used to extract the values.
* @returns An object containing the extracted values.
*/
function extract$1(map$1) {
	const ret = {};
	for (const key$2 in map$1) {
		const descr = map$1[key$2];
		const isArray = Array.isArray(descr);
		const { selector: selector$1, value } = getExtractDescr(isArray ? descr[0] : descr);
		const fn$1 = typeof value === "function" ? value : typeof value === "string" ? (el) => this._make(el).prop(value) : (el) => this._make(el).extract(value);
		if (isArray) ret[key$2] = this._findBySelector(selector$1, Number.POSITIVE_INFINITY).map((_, el) => fn$1(el, key$2, ret)).get();
		else {
			const $ = this._findBySelector(selector$1, 1);
			ret[key$2] = $.length > 0 ? fn$1($[0], key$2, ret) : void 0;
		}
	}
	return ret;
}

//#endregion
//#region node_modules/.pnpm/cheerio@1.2.0/node_modules/cheerio/dist/esm/cheerio.js
/**
* The cheerio class is the central class of the library. It wraps a set of
* elements and provides an API for traversing, modifying, and interacting with
* the set.
*
* Loading a document will return the Cheerio class bound to the root element of
* the document. The class will be instantiated when querying the document (when
* calling `$('selector')`).
*
* @example This is the HTML markup we will be using in all of the API examples:
*
* ```html
* <ul id="fruits">
*   <li class="apple">Apple</li>
*   <li class="orange">Orange</li>
*   <li class="pear">Pear</li>
* </ul>
* ```
*/
var Cheerio = class {
	/**
	* Instance of cheerio. Methods are specified in the modules. Usage of this
	* constructor is not recommended. Please use `$.load` instead.
	*
	* @private
	* @param elements - The new selection.
	* @param root - Sets the root node.
	* @param options - Options for the instance.
	*/
	constructor(elements, root$2, options) {
		this.length = 0;
		this.options = options;
		this._root = root$2;
		if (elements) {
			for (let idx = 0; idx < elements.length; idx++) this[idx] = elements[idx];
			this.length = elements.length;
		}
	}
};
/** Set a signature of the object. */
Cheerio.prototype.cheerio = "[cheerio object]";
Cheerio.prototype.splice = Array.prototype.splice;
Cheerio.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
Object.assign(Cheerio.prototype, attributes_exports, traversing_exports, manipulation_exports, css_exports, forms_exports, extract_exports);

//#endregion
//#region node_modules/.pnpm/cheerio@1.2.0/node_modules/cheerio/dist/esm/load.js
function getLoad(parse$10, render$2) {
	/**
	* Create a querying function, bound to a document created from the provided
	* markup.
	*
	* Note that similar to web browser contexts, this operation may introduce
	* `<html>`, `<head>`, and `<body>` elements; set `isDocument` to `false` to
	* switch to fragment mode and disable this.
	*
	* @param content - Markup to be loaded.
	* @param options - Options for the created instance.
	* @param isDocument - Allows parser to be switched to fragment mode.
	* @returns The loaded document.
	* @see {@link https://cheerio.js.org/docs/basics/loading#load} for additional usage information.
	*/
	return function load$2(content, options, isDocument$1 = true) {
		if (content == null) throw new Error("cheerio.load() expects a string");
		const internalOpts = flattenOptions(options);
		const initialRoot = parse$10(content, internalOpts, isDocument$1, null);
		/**
		* Create an extended class here, so that extensions only live on one
		* instance.
		*/
		class LoadedCheerio extends Cheerio {
			_make(selector$1, context) {
				const cheerio = initialize(selector$1, context);
				cheerio.prevObject = this;
				return cheerio;
			}
			_parse(content$1, options$1, isDocument$2, context) {
				return parse$10(content$1, options$1, isDocument$2, context);
			}
			_render(dom$2) {
				return render$2(dom$2, this.options);
			}
		}
		function initialize(selector$1, context, root$2 = initialRoot, opts) {
			if (selector$1 && isCheerio(selector$1)) return selector$1;
			const options$1 = flattenOptions(opts, internalOpts);
			const r = typeof root$2 === "string" ? [parse$10(root$2, options$1, false, null)] : "length" in root$2 ? root$2 : [root$2];
			const rootInstance = isCheerio(r) ? r : new LoadedCheerio(r, null, options$1);
			rootInstance._root = rootInstance;
			if (!selector$1) return new LoadedCheerio(void 0, rootInstance, options$1);
			const elements = typeof selector$1 === "string" && isHtml(selector$1) ? parse$10(selector$1, options$1, false, null).children : isNode(selector$1) ? [selector$1] : Array.isArray(selector$1) ? selector$1 : void 0;
			const instance = new LoadedCheerio(elements, rootInstance, options$1);
			if (elements) return instance;
			if (typeof selector$1 !== "string") throw new TypeError("Unexpected type of selector");
			let search = selector$1;
			const searchContext = context ? typeof context === "string" ? isHtml(context) ? new LoadedCheerio([parse$10(context, options$1, false, null)], rootInstance, options$1) : (search = `${context} ${search}`, rootInstance) : isCheerio(context) ? context : new LoadedCheerio(Array.isArray(context) ? context : [context], rootInstance, options$1) : rootInstance;
			if (!searchContext) return instance;
			return searchContext.find(search);
		}
		Object.assign(initialize, static_exports, {
			load: load$2,
			_root: initialRoot,
			_options: internalOpts,
			fn: LoadedCheerio.prototype,
			prototype: LoadedCheerio.prototype
		});
		return initialize;
	};
}
function isNode(obj) {
	return !!obj.name || obj.type === Root || obj.type === Text$2 || obj.type === Comment$3;
}

//#endregion
//#region node_modules/.pnpm/cheerio@1.2.0/node_modules/cheerio/dist/esm/slim.js
/**
* Create a querying function, bound to a document created from the provided
* markup.
*
* @param content - Markup to be loaded.
* @param options - Options for the created instance.
* @param isDocument - Always `false` here, as we are always using
*   `htmlparser2`.
* @returns The loaded document.
* @see {@link https://cheerio.js.org#loading} for additional usage information.
*/
const load$1 = getLoad(getParse(parseDocument), esm_default);

//#endregion
//#region src/online/html.ts
/** Preserve readable Unicode when serializing extracted HTML in the portable parser. */
const load = (content, options, isDocument$1) => load$1(content, {
	xml: {
		xmlMode: false,
		decodeEntities: true,
		encodeEntities: "utf8"
	},
	...options
}, isDocument$1);

//#endregion
//#region src/shared/constants.ts
const LARGE_FILE_BYTES = 10 * 1024 * 1024;
const MAX_FILE_BYTES = 50 * 1024 * 1024;

//#endregion
//#region src/shared/id.ts
/** Small deterministic hash used only as a local storage key, not for security. */
function hashText(value) {
	let hash = 2166136261;
	for (let index$2 = 0; index$2 < value.length; index$2 += 1) {
		hash ^= value.charCodeAt(index$2);
		hash = Math.imul(hash, 16777619);
	}
	return (hash >>> 0).toString(36);
}

//#endregion
//#region src/shared/online-book.ts
var OnlineBookBuildError = class extends Error {
	constructor(message, code) {
		super(message);
		this.code = code;
		this.name = "OnlineBookBuildError";
	}
};
function buildOnlineBook(input, now = Date.now()) {
	if (input.chapters.length === 0) throw new OnlineBookBuildError("书籍目录为空。", "TOC_EMPTY");
	const contentParts = [];
	const chapters = [];
	const paragraphs = [];
	let offset = 0;
	const append$2 = (text$2) => {
		if (contentParts.length > 0) {
			contentParts.push("\n");
			offset += 1;
		}
		const start = offset;
		contentParts.push(text$2);
		offset += text$2.length;
		return {
			start,
			end: offset
		};
	};
	input.chapters.forEach((sourceChapter, chapterIndex) => {
		const title = sourceChapter.title.trim() || `第 ${chapterIndex + 1} 章`;
		const chapterStart = offset + (contentParts.length > 0 ? 1 : 0);
		const paragraphStart = paragraphs.length;
		const headingPosition = append$2(title);
		paragraphs.push({
			id: `paragraph-${paragraphs.length}`,
			index: paragraphs.length,
			chapterId: `chapter-${chapterIndex}`,
			text: title,
			...headingPosition,
			isHeading: true
		});
		for (const raw of sourceChapter.paragraphs) {
			const text$2 = raw.trim();
			if (text$2.length === 0) continue;
			const position$1 = append$2(text$2);
			paragraphs.push({
				id: `paragraph-${paragraphs.length}`,
				index: paragraphs.length,
				chapterId: `chapter-${chapterIndex}`,
				text: text$2,
				...position$1,
				isHeading: false
			});
		}
		chapters.push({
			id: `chapter-${chapterIndex}`,
			index: chapterIndex,
			title,
			level: 1,
			start: chapterStart,
			end: offset,
			paragraphStart,
			paragraphEnd: Math.max(paragraphStart, paragraphs.length - 1)
		});
	});
	const content = contentParts.join("");
	const size = new TextEncoder().encode(content).byteLength;
	if (size > MAX_FILE_BYTES) throw new OnlineBookBuildError("抓取后的正文超过 50MB，请选择分卷版本。", "BOOK_TOO_LARGE");
	return {
		id: `book-${hashText(`${input.origin.sourceId}:${input.origin.bookUrl}`)}`,
		name: input.name.trim() || "未命名在线书籍",
		format: "online",
		encoding: "utf-8",
		size,
		lastModified: now,
		content,
		chapters,
		paragraphs,
		openedAt: now,
		largeFileMode: size > LARGE_FILE_BYTES,
		origin: {
			...input.origin,
			fetchedAt: now
		}
	};
}

//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/util.js
function getEnumValues(entries$1) {
	const numericValues = Object.values(entries$1).filter((v) => typeof v === "number");
	return Object.entries(entries$1).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
}
function joinValues(array$1, separator = "|") {
	return array$1.map((val$1) => stringifyPrimitive(val$1)).join(separator);
}
function jsonStringifyReplacer(_, value) {
	if (typeof value === "bigint") return value.toString();
	return value;
}
var Cached = class {
	constructor(getter) {
		this._getter = getter;
		this._value = void 0;
	}
	get value() {
		const getter = this._getter;
		if (getter !== void 0) {
			this._value = getter();
			this._getter = void 0;
		}
		return this._value;
	}
};
function cached(getter) {
	return new Cached(getter);
}
function nullish(input) {
	return input === null || input === void 0;
}
function cleanRegex(source$1) {
	const start = source$1.startsWith("^") ? 1 : 0;
	const end$1 = source$1.endsWith("$") ? source$1.length - 1 : source$1.length;
	return source$1.slice(start, end$1);
}
function floatSafeRemainder(val$1, step) {
	const ratio = val$1 / step;
	const roundedRatio = Math.round(ratio);
	const tolerance = 4 * Number.EPSILON * Math.max(Math.abs(ratio), 1);
	if (Math.abs(ratio - roundedRatio) < tolerance) return 0;
	return ratio - roundedRatio;
}
function assignProp(target, prop$1, value) {
	Object.defineProperty(target, prop$1, {
		value,
		writable: true,
		enumerable: true,
		configurable: true
	});
}
/**
* Whichever object a def's `shape` currently answers from: the one the caller passed until the first read, the frozen copy after it.
*
* Its keys and descriptors read without invoking anything, which is what lets a discriminated union check its discriminator, and the cycle walk read a shape, without resolving a getter that references the schema being constructed. A def that answers `shape` from an accessor of its own has none.
*/
function rawShape(def) {
	const desc = Object.getOwnPropertyDescriptor(def, "shape");
	return desc?.get ? desc.get.raw : desc?.value;
}
function sourceShape(schema) {
	return rawShape(schema._zod.def) ?? schema._zod.def.shape;
}
function deferProp(target, key$2, getter) {
	Object.defineProperty(target, key$2, {
		get() {
			const value = getter();
			assignProp(this, key$2, value);
			return value;
		},
		enumerable: true,
		configurable: true
	});
}
function putProp(target, key$2, value) {
	if (key$2 in target) assignProp(target, key$2, value);
	else target[key$2] = value;
}
/**
* Copies `keys` of `source`'s shape onto `target`, each value passed through `wrap`.
*
* A key the source has resolved is copied through now, so the derived shape states it outright and nothing has to resolve it to learn what it holds. A key the source still defers stays deferred, and reads back through the source's own `shape`, so it resolves once and both shapes get that one schema.
*/
function mirrorShape(target, source$1, keys, wrap$1) {
	const raw = sourceShape(source$1);
	for (const key$2 of keys) {
		const desc = Object.getOwnPropertyDescriptor(raw, key$2);
		if (!desc.enumerable) continue;
		if (desc.get) deferProp(target, key$2, () => {
			const value = source$1._zod.def.shape[key$2];
			return wrap$1 ? wrap$1(value, key$2) : value;
		});
		else putProp(target, key$2, wrap$1 ? wrap$1(desc.value, key$2) : desc.value);
	}
}
function mirrorProps(target, source$1) {
	for (const key$2 of Reflect.ownKeys(source$1)) {
		const desc = Object.getOwnPropertyDescriptor(source$1, key$2);
		if (!desc.enumerable) continue;
		if (desc.get) deferProp(target, key$2, () => source$1[key$2]);
		else putProp(target, key$2, desc.value);
	}
}
function mergeDefs(...defs) {
	const mergedDescriptors = {};
	for (const def of defs) {
		const descriptors = Object.getOwnPropertyDescriptors(def);
		Object.assign(mergedDescriptors, descriptors);
	}
	return Object.defineProperties({}, mergedDescriptors);
}
function esc(str) {
	return JSON.stringify(str);
}
function slugify(input) {
	return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {};
function isObject(data$1) {
	return typeof data$1 === "object" && data$1 !== null && !Array.isArray(data$1);
}
const allowsEval = /* @__PURE__ */ cached(() => {
	if (globalConfig.jitless) return false;
	if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) return false;
	try {
		new Function("");
		return true;
	} catch (_) {
		return false;
	}
});
function isPlainObject(o) {
	if (isObject(o) === false) return false;
	const ctor = o.constructor;
	if (ctor === void 0) return true;
	if (typeof ctor !== "function") return true;
	const prot = ctor.prototype;
	if (isObject(prot) === false) return false;
	if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) return false;
	return true;
}
function shallowClone(o) {
	if (isPlainObject(o)) return { ...o };
	if (Array.isArray(o)) return [...o];
	if (o instanceof Map) return new Map(o);
	if (o instanceof Set) return new Set(o);
	return o;
}
const propertyKeyTypes = /* @__PURE__ */ new Set([
	"string",
	"number",
	"symbol"
]);
function escapeRegex(str) {
	return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone(inst, def, params) {
	const cl = new inst._zod.constr(def ?? inst._zod.def);
	if (!def || params?.parent) cl._zod.parent = inst;
	return cl;
}
function normalizeParams(_params) {
	const params = _params;
	if (!params) return {};
	if (typeof params === "string") return { error: () => params };
	if (params?.message !== void 0) {
		if (params?.error !== void 0) throw new Error("Cannot specify both `message` and `error` params");
		params.error = params.message;
	}
	delete params.message;
	if (typeof params.error === "string") return {
		...params,
		error: () => params.error
	};
	return params;
}
function stringifyPrimitive(value) {
	if (typeof value === "bigint") return value.toString() + "n";
	if (typeof value === "string") return `"${value}"`;
	return `${value}`;
}
function optionalKeys(shape) {
	return Object.keys(shape).filter((k) => {
		return shape[k]._zod.optin !== void 0 && shape[k]._zod.optout === "optional";
	});
}
const NUMBER_FORMAT_RANGES = /* @__PURE__ */ (() => ({
	safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}))();
const BIGINT_FORMAT_RANGES = {
	int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
	uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function pick(schema, mask) {
	const currDef = schema._zod.def;
	const checks = currDef.checks;
	if (checks && checks.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
	const newShape = {};
	mirrorShape(newShape, schema, maskedKeys(schema, mask));
	return clone(schema, mergeDefs(currDef, {
		shape: newShape,
		checks: []
	}));
}
function maskedKeys(schema, mask) {
	const raw = sourceShape(schema);
	const keys = [];
	for (const key$2 of Reflect.ownKeys(mask)) {
		if (!Object.getOwnPropertyDescriptor(raw, key$2)?.enumerable) throw new Error(`Unrecognized key: "${String(key$2)}"`);
		if (mask[key$2]) keys.push(key$2);
	}
	return keys;
}
function omit(schema, mask) {
	const currDef = schema._zod.def;
	const checks = currDef.checks;
	if (checks && checks.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
	const omitted = new Set(maskedKeys(schema, mask));
	const newShape = {};
	mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)).filter((key$2) => !omitted.has(key$2)));
	return clone(schema, mergeDefs(currDef, {
		shape: newShape,
		checks: []
	}));
}
function extend(schema, shape) {
	if (!isPlainObject(shape)) throw new Error("Invalid input to extend: expected a plain object");
	const checks = schema._zod.def.checks;
	if (checks && checks.length > 0) {
		const existingShape = sourceShape(schema);
		for (const key$2 of Reflect.ownKeys(shape)) if (Object.getOwnPropertyDescriptor(existingShape, key$2) !== void 0) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return clone(schema, mergeDefs(schema._zod.def, { shape: extended(schema, shape) }));
}
function extended(schema, shape) {
	const newShape = {};
	mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)));
	mirrorProps(newShape, shape);
	return newShape;
}
function safeExtend(schema, shape) {
	if (!isPlainObject(shape)) throw new Error("Invalid input to safeExtend: expected a plain object");
	return clone(schema, mergeDefs(schema._zod.def, { shape: extended(schema, shape) }));
}
function merge(a, b) {
	if (!b?._zod?.def) throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
	if (a._zod.def.checks?.length) throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
	const newShape = {};
	mirrorShape(newShape, a, Reflect.ownKeys(sourceShape(a)));
	mirrorShape(newShape, b, Reflect.ownKeys(sourceShape(b)));
	return clone(a, mergeDefs(a._zod.def, {
		shape: newShape,
		get catchall() {
			return b._zod.def.catchall;
		},
		checks: b._zod.def.checks ?? []
	}));
}
function partial(Class, schema, mask, name$1 = "partial") {
	const checks = schema._zod.def.checks;
	if (checks && checks.length > 0) throw new Error(`.${name$1}() cannot be used on object schemas containing refinements`);
	const selected = mask ? new Set(maskedKeys(schema, mask)) : void 0;
	const newShape = {};
	mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)), Class && ((value, key$2) => selected && !selected.has(key$2) ? value : new Class({
		type: "optional",
		innerType: value
	})));
	return clone(schema, mergeDefs(schema._zod.def, {
		shape: newShape,
		checks: []
	}));
}
function required(Class, schema, mask) {
	const selected = mask ? new Set(maskedKeys(schema, mask)) : void 0;
	const newShape = {};
	mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)), (value, key$2) => selected && !selected.has(key$2) ? value : new Class({
		type: "nonoptional",
		innerType: value
	}));
	return clone(schema, mergeDefs(schema._zod.def, { shape: newShape }));
}
function aborted(x, startIndex = 0) {
	if (x.aborted === true) return true;
	for (let i$1 = startIndex; i$1 < x.issues.length; i$1++) if (x.issues[i$1]?.continue !== true) return true;
	return false;
}
function explicitlyAborted(x, startIndex = 0) {
	if (x.aborted === true) return true;
	for (let i$1 = startIndex; i$1 < x.issues.length; i$1++) if (x.issues[i$1]?.continue === false) return true;
	return false;
}
function prefixIssues(path, issues) {
	return issues.map((iss) => {
		var _a$4;
		(_a$4 = iss).path ?? (_a$4.path = []);
		iss.path.unshift(path);
		return iss;
	});
}
function unwrapMessage(message) {
	return typeof message === "string" ? message : message?.message;
}
function attachSchema(issues, start, inst) {
	var _a$4;
	for (let i$1 = start; i$1 < issues.length; i$1++) (_a$4 = issues[i$1]).schema ?? (_a$4.schema = inst);
}
function finalizeIssue(iss, ctx, config$1) {
	var _a$4;
	const traits = iss.inst?._zod?.traits;
	if (traits?.has("$ZodType")) if (traits.has("$ZodCheck")) (_a$4 = iss).schema ?? (_a$4.schema = iss.inst);
	else iss.schema = iss.inst;
	const schemaError = iss.schema !== iss.inst ? iss.schema?._zod.def?.error : void 0;
	const message = iss.message ? iss.message : unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(schemaError?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config$1.customError?.(iss)) ?? unwrapMessage(config$1.localeError?.(iss)) ?? "Invalid input";
	const full = {};
	for (const k of Object.keys(iss)) {
		if (k === "inst" || k === "schema" || k === "continue" || k === "input" || k === "__proto__") continue;
		full[k] = iss[k];
	}
	full.path ?? (full.path = []);
	full.message = message;
	if (ctx?.reportInput) full.input = iss.input;
	return full;
}
const highSurrogate = /[\uD800-\uDBFF]/;
function codePointLength(str) {
	const units = str.length;
	if (!highSurrogate.test(str)) return units;
	let count = units;
	for (let i$1 = 0; i$1 < units - 1; i$1++) if ((str.charCodeAt(i$1) & 64512) === 55296 && (str.charCodeAt(i$1 + 1) & 64512) === 56320) {
		count--;
		i$1++;
	}
	return count;
}
function getLengthableOrigin(input) {
	if (Array.isArray(input)) return "array";
	if (typeof input === "string") return "string";
	return "unknown";
}
function parsedType(data$1) {
	const t = typeof data$1;
	switch (t) {
		case "number": return Number.isNaN(data$1) ? "nan" : "number";
		case "object": {
			if (data$1 === null) return "null";
			if (Array.isArray(data$1)) return "array";
			const obj = data$1;
			if (obj && Object.getPrototypeOf(obj) !== Object.prototype && "constructor" in obj && obj.constructor) return obj.constructor.name;
		}
	}
	return t;
}
function issue(...args) {
	const [iss, input, inst] = args;
	if (typeof iss === "string") return {
		message: iss,
		code: "custom",
		input,
		inst
	};
	return { ...iss };
}
/**
* Installs a trait's members on its prototype. Each value builds that member for the instance on first read; the built value shadows the accessor as an own property, so a detached `const { parse } = schema` keeps working.
*
* Call this from a `proto` initializer, which runs once per prototype — never per instance.
*/
function members(proto, table) {
	for (const key$2 in table) {
		const desc = Object.getOwnPropertyDescriptor(table, key$2);
		if (desc.get) Object.defineProperty(proto, key$2, {
			...desc,
			enumerable: false
		});
		else defineBound(proto, key$2, desc.value);
	}
}
/** Shadows a prototype member with an own value, so a getter that builds from the instance runs once. */
function own(inst, key$2, value, enumerable = true) {
	Object.defineProperty(inst, key$2, {
		configurable: true,
		writable: true,
		enumerable,
		value
	});
	return value;
}
/** Like {@link own}, for a member that was never an own data property and has to stay out of `Object.keys`. */
function hide(inst, key$2, value) {
	return own(inst, key$2, value, false);
}
/** Adds members a table derives from the instance: each builds on first read and shadows as own data, and assignment shadows the same way, as when these were own properties. */
function derived(computes, table) {
	for (const key$2 in computes) {
		const compute = computes[key$2];
		Object.defineProperty(table, key$2, {
			configurable: true,
			enumerable: true,
			get() {
				return own(this, key$2, compute(this));
			},
			set(value) {
				own(this, key$2, value);
			}
		});
	}
	return table;
}
function defineBound(proto, key$2, fn$1) {
	Object.defineProperty(proto, key$2, {
		configurable: true,
		get() {
			return this == null ? fn$1 : own(this, key$2, fn$1.bind(this));
		},
		set(value) {
			own(this, key$2, value);
		}
	});
}
/** Returns the prototype to install on, or `undefined` if this group is already installed on it. */
function claim(inst, sentinel) {
	const proto = Object.getPrototypeOf(inst);
	return sentinel in proto ? void 0 : proto;
}
let installing;
let broke = false;
const breaker = {
	configurable: true,
	get() {
		broke = true;
	}
};
/**
* Installs a lazily-derived internal on the `_zod` prototype of `inst`'s
* constructor, computed from the internals object itself and cached there on
* first read. One accessor per constructor rather than one per instance.
*/
function defineLazyInternal(inst, key$2, compute) {
	const proto = Object.getPrototypeOf(inst._zod);
	if (key$2 in proto && installing !== inst._zod) {
		installing = void 0;
		return;
	}
	installing = inst._zod;
	Object.defineProperty(proto, key$2, {
		configurable: true,
		get() {
			Object.defineProperty(this, key$2, breaker);
			const outer = broke;
			broke = false;
			try {
				const value = compute(this);
				if (broke) delete this[key$2];
				else Object.defineProperty(this, key$2, {
					configurable: true,
					writable: true,
					value
				});
				broke = broke || outer;
				return value;
			} catch (err) {
				delete this[key$2];
				broke = broke || outer;
				throw err;
			}
		},
		set(value) {
			Object.defineProperty(this, key$2, {
				configurable: true,
				writable: true,
				value
			});
		}
	});
}
/**
* Installs `key` on `inst`'s prototype, computed by `make` on first read and cached there as an own
* data property. One accessor per constructor rather than one per instance, because an own accessor
* puts every instance after the first into v8 dictionary mode. The key doubles as the sentinel.
*/
function installLazyProp(inst, key$2, make, enumerable) {
	const proto = claim(inst, key$2);
	if (!proto) return;
	Object.defineProperty(proto, key$2, {
		configurable: true,
		get() {
			const desc = {
				configurable: true,
				writable: true,
				enumerable,
				value: void 0
			};
			Object.defineProperty(this, key$2, desc);
			desc.value = make(this);
			Object.defineProperty(this, key$2, desc);
			return desc.value;
		},
		set(value) {
			Object.defineProperty(this, key$2, {
				configurable: true,
				writable: true,
				enumerable,
				value
			});
		}
	});
}
/** Marks the thunk `_catch` synthesises for a constant catch value. `Function.length` cannot tell that thunk from a user callback — rest and defaulted parameters both report arity 0 — and a user callback reads `ctx.error`, whose issues only finalize correctly against the caller's per-parse error map. Provenance can say what arity cannot. A plain string key rather than `Symbol.for`, whose call at module scope no bundler can prove pure — the same shape that anchored `urlCanParse` into every build. */
const CONSTANT_CATCH = "~constantCatch";
/** Wraps a constant catch value in a thunk tagged with {@link CONSTANT_CATCH}. */
function constantCatch(value) {
	const fn$1 = () => value;
	fn$1[CONSTANT_CATCH] = true;
	return fn$1;
}

//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/core.js
var _a$1;
const _zodDesc = {
	value: void 0,
	enumerable: false
};
let _E = "captureStackTrace" in Error ? Error : null;
function newError(Definition) {
	const E = _E;
	if (E) {
		const saved = E.stackTraceLimit;
		if (typeof saved === "number") {
			try {
				E.stackTraceLimit = 0;
			} catch {
				_E = null;
				return new Definition();
			}
			try {
				return new Definition();
			} finally {
				E.stackTraceLimit = saved;
			}
		}
	}
	return new Definition();
}
function $constructor(name$1, initializer$2, proto, params) {
	const zodProto = {};
	function Internals(def) {
		this.def = def;
		this.constr = _;
		this.traits = /* @__PURE__ */ new Set();
	}
	Internals.prototype = zodProto;
	const protoMembers = proto;
	const initialized = protoMembers && /* @__PURE__ */ new WeakSet();
	function init(inst, def) {
		if (!inst._zod) {
			_zodDesc.value = new Internals(def);
			try {
				Object.defineProperty(inst, "_zod", _zodDesc);
			} finally {
				_zodDesc.value = void 0;
			}
		} else if (inst._zod.traits.has(name$1)) return;
		inst._zod.traits.add(name$1);
		initializer$2(inst, def);
		if (initialized) {
			const own$1 = Object.getPrototypeOf(inst);
			const ctorProto = inst._zod.constr.prototype;
			let up = own$1;
			while (up && up !== ctorProto) up = Object.getPrototypeOf(up);
			const target = up ?? own$1;
			if (!initialized.has(target)) {
				initialized.add(target);
				members(target, protoMembers);
			}
		}
		const proto$1 = _.prototype;
		for (const k in proto$1) {
			if (!Object.prototype.hasOwnProperty.call(proto$1, k)) continue;
			if (!(k in inst)) inst[k] = proto$1[k].bind(inst);
		}
	}
	const Parent = params?.Parent ?? Object;
	class Definition extends Parent {}
	Object.defineProperty(Definition, "name", { value: name$1 });
	function _(def) {
		const inst = params?.Parent ? newError(Definition) : this;
		init(inst, def);
		const deferred = inst._zod.deferred;
		if (deferred) {
			for (const fn$1 of deferred) fn$1();
			inst._zod.deferred = void 0;
		}
		const pp = globalThis.__zod_globalConfig?.postProcessor;
		if (pp) pp(inst);
		return inst;
	}
	Object.defineProperty(_, "init", { value: init });
	Object.defineProperty(_, Symbol.hasInstance, { value: (inst) => {
		if (params?.Parent && inst instanceof params.Parent) return true;
		return inst?._zod?.traits?.has(name$1);
	} });
	Object.defineProperty(_, "name", { value: name$1 });
	return _;
}
var $ZodAsyncError = class extends Error {
	constructor() {
		super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
	}
};
var $ZodEncodeError = class extends Error {
	constructor(name$1) {
		super(`Encountered unidirectional transform during encode: ${name$1}`);
		this.name = "ZodEncodeError";
	}
};
(_a$1 = globalThis).__zod_globalConfig ?? (_a$1.__zod_globalConfig = {});
const globalConfig = globalThis.__zod_globalConfig;
function config(newConfig) {
	if (newConfig) Object.assign(globalConfig, newConfig);
	return globalConfig;
}

//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/errors.js
function _getMessage() {
	const internals = this._zod;
	internals.message ?? (internals.message = JSON.stringify(internals.def, jsonStringifyReplacer, 2));
	return internals.message;
}
function _setMessage(value) {
	this._zod.message = value;
}
const _messageDesc = {
	get: _getMessage,
	set: _setMessage,
	enumerable: true,
	configurable: true
};
const _issuesDesc = {
	value: void 0,
	enumerable: false
};
const _installedToString = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
const initializer$1 = (inst, def) => {
	inst.name = "$ZodError";
	_issuesDesc.value = def;
	Object.defineProperty(inst, "issues", _issuesDesc);
	_issuesDesc.value = void 0;
	Object.defineProperty(inst, "message", _messageDesc);
	const proto = Object.getPrototypeOf(inst);
	if (!_installedToString.has(proto)) {
		_installedToString.add(proto);
		Object.defineProperty(proto, "toString", {
			configurable: true,
			enumerable: false,
			get() {
				const value = () => this.message;
				Object.defineProperty(this, "toString", {
					value,
					configurable: true,
					writable: true
				});
				return value;
			},
			set(value) {
				Object.defineProperty(this, "toString", {
					value,
					configurable: true,
					writable: true
				});
			}
		});
	}
};
const $ZodError = $constructor("$ZodError", initializer$1);
const $ZodRealError = $constructor("$ZodError", initializer$1, void 0, { Parent: Error });
/** Get-or-create `obj[key]` as an own data property. A path segment naming an inherited member
* ("toString", "constructor") would otherwise read through to the prototype, and assigning
* "__proto__" would hit the setter instead of creating a key. */
function node(obj, key$2, make) {
	if (!Object.prototype.hasOwnProperty.call(obj, key$2)) if (key$2 === "__proto__") Object.defineProperty(obj, key$2, {
		value: make(),
		writable: true,
		enumerable: true,
		configurable: true
	});
	else obj[key$2] = make();
	return obj[key$2];
}
function flattenError(error$1, mapper = (issue$1) => issue$1.message) {
	const fieldErrors = {};
	const formErrors = [];
	for (const sub of error$1.issues) if (sub.path.length > 0) node(fieldErrors, sub.path[0], () => []).push(mapper(sub));
	else formErrors.push(mapper(sub));
	return {
		formErrors,
		fieldErrors
	};
}
function formatError(error$1, mapper = (issue$1) => issue$1.message) {
	const fieldErrors = { _errors: [] };
	const processError = (error$2, path = []) => {
		for (const issue$1 of error$2.issues) if (issue$1.code === "invalid_union" && issue$1.errors.length) issue$1.errors.map((issues) => processError({ issues }, [...path, ...issue$1.path]));
		else if (issue$1.code === "invalid_key") processError({ issues: issue$1.issues }, [...path, ...issue$1.path]);
		else if (issue$1.code === "invalid_element") processError({ issues: issue$1.issues }, [...path, ...issue$1.path]);
		else {
			const fullpath = [...path, ...issue$1.path];
			if (fullpath.length === 0) fieldErrors._errors.push(mapper(issue$1));
			else {
				let curr = fieldErrors;
				let i$1 = 0;
				while (i$1 < fullpath.length) {
					const el = fullpath[i$1];
					const terminal = i$1 === fullpath.length - 1;
					if (el === "_errors") {
						if (terminal) curr._errors.push(mapper(issue$1));
						i$1++;
						continue;
					}
					if (!Object.prototype.hasOwnProperty.call(curr, el)) Object.defineProperty(curr, el, {
						value: { _errors: [] },
						enumerable: true,
						writable: true,
						configurable: true
					});
					const node$1 = curr[el];
					if (terminal) node$1._errors.push(mapper(issue$1));
					curr = node$1;
					i$1++;
				}
			}
		}
	};
	processError(error$1);
	return fieldErrors;
}

//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/parse.js
function finalizeParams(callee, params) {
	return {
		callee: params?.callee ?? callee,
		Err: params?.Err
	};
}
const _parse = (_Err) => {
	const fn$1 = (schema, value, _ctx, _params) => {
		const ctx = _ctx ? {
			..._ctx,
			async: false
		} : { async: false };
		const result = schema._zod.run({
			value,
			issues: []
		}, ctx);
		if (result instanceof Promise) throw new $ZodAsyncError();
		if (result.issues.length) {
			const e = new (_params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
			captureStackTrace(e, _params?.callee ?? fn$1);
			throw e;
		}
		return result.value;
	};
	return fn$1;
};
const parse$3 = /* @__PURE__ */ _parse($ZodRealError);
const _parseAsync = (_Err) => {
	const fn$1 = async (schema, value, _ctx, params) => {
		const ctx = _ctx ? {
			..._ctx,
			async: true
		} : { async: true };
		let result = schema._zod.run({
			value,
			issues: []
		}, ctx);
		if (result instanceof Promise) result = await result;
		if (result.issues.length) {
			const e = new (params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
			captureStackTrace(e, params?.callee ?? fn$1);
			throw e;
		}
		return result.value;
	};
	return fn$1;
};
const parseAsync$1 = /* @__PURE__ */ _parseAsync($ZodRealError);
const _safeParse = (_Err) => (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		async: false
	} : { async: false };
	const result = schema._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) throw new $ZodAsyncError();
	return result.issues.length ? failure(_Err, result.issues, ctx) : {
		success: true,
		data: result.value
	};
};
const safeParse$1 = /* @__PURE__ */ _safeParse($ZodRealError);
function failure(Err, issues, ctx) {
	let error$1;
	return {
		success: false,
		get error() {
			if (!error$1) {
				error$1 = new Err(issues.map((iss) => finalizeIssue(iss, ctx, config())));
				issues = void 0;
				ctx = void 0;
			}
			return error$1;
		},
		set error(e) {
			error$1 = e;
			issues = void 0;
			ctx = void 0;
		}
	};
}
const _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		async: true
	} : { async: true };
	let result = schema._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) result = await result;
	return result.issues.length ? failure(_Err, result.issues, ctx) : {
		success: true,
		data: result.value
	};
};
const safeParseAsync$1 = /* @__PURE__ */ _safeParseAsync($ZodRealError);
const COMPILE_INVALID = /* @__PURE__ */ Symbol.for("zod.compile.invalid");
const COMPILE_FALLBACK = /* @__PURE__ */ Symbol.for("zod.compile.fallback");
const validate = ((schema, value, _ctx) => {
	const validator = schema._zod.bag.validator;
	if (validator !== void 0) {
		if (validator(value) !== COMPILE_INVALID) return true;
		if (validator.definite === true && _ctx === void 0) return false;
	}
	return validateFallback(schema, value, _ctx);
});
function validateFallback(schema, value, _ctx) {
	const ctx = _ctx ? {
		..._ctx,
		async: false,
		abortEarly: true
	} : {
		async: false,
		abortEarly: true
	};
	const fallbackRun = schema._zod.bag.fallbackRun;
	let result;
	if (fallbackRun) {
		ctx[COMPILE_FALLBACK] = true;
		result = fallbackRun({
			value,
			issues: []
		}, ctx);
	} else result = schema._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) throw new $ZodAsyncError();
	return result.issues.length === 0;
}
const validateAsync = async (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		async: true,
		abortEarly: true
	} : {
		async: true,
		abortEarly: true
	};
	let result = schema._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) result = await result;
	return result.issues.length === 0;
};
const _encode = (_Err) => {
	const parse$10 = _parse(_Err);
	const fn$1 = (schema, value, _ctx, _params) => {
		return parse$10(schema, value, _ctx ? {
			..._ctx,
			direction: "backward"
		} : { direction: "backward" }, finalizeParams(fn$1, _params));
	};
	return fn$1;
};
const encode$1 = /* @__PURE__ */ _encode($ZodRealError);
const _decode = (_Err) => {
	const parse$10 = _parse(_Err);
	const fn$1 = (schema, value, _ctx, _params) => {
		return parse$10(schema, value, _ctx, finalizeParams(fn$1, _params));
	};
	return fn$1;
};
const decode$1 = /* @__PURE__ */ _decode($ZodRealError);
const _encodeAsync = (_Err) => {
	const parseAsync$2 = _parseAsync(_Err);
	const fn$1 = async (schema, value, _ctx, _params) => {
		return await parseAsync$2(schema, value, _ctx ? {
			..._ctx,
			direction: "backward"
		} : { direction: "backward" }, finalizeParams(fn$1, _params));
	};
	return fn$1;
};
const encodeAsync$1 = /* @__PURE__ */ _encodeAsync($ZodRealError);
const _decodeAsync = (_Err) => {
	const parseAsync$2 = _parseAsync(_Err);
	const fn$1 = async (schema, value, _ctx, _params) => {
		return await parseAsync$2(schema, value, _ctx, finalizeParams(fn$1, _params));
	};
	return fn$1;
};
const decodeAsync$1 = /* @__PURE__ */ _decodeAsync($ZodRealError);
const _safeEncode = (_Err) => (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		direction: "backward"
	} : { direction: "backward" };
	return _safeParse(_Err)(schema, value, ctx);
};
const safeEncode$1 = /* @__PURE__ */ _safeEncode($ZodRealError);
const _safeDecode = (_Err) => (schema, value, _ctx) => {
	return _safeParse(_Err)(schema, value, _ctx);
};
const safeDecode$1 = /* @__PURE__ */ _safeDecode($ZodRealError);
const _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		direction: "backward"
	} : { direction: "backward" };
	return _safeParseAsync(_Err)(schema, value, ctx);
};
const safeEncodeAsync$1 = /* @__PURE__ */ _safeEncodeAsync($ZodRealError);
const _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => {
	return _safeParseAsync(_Err)(schema, value, _ctx);
};
const safeDecodeAsync$1 = /* @__PURE__ */ _safeDecodeAsync($ZodRealError);

//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/regexes.js
/**
* @deprecated CUID v1 is deprecated by its authors due to information leakage
* (timestamps embedded in the id). Use {@link cuid2} instead.
* See https://github.com/paralleldrive/cuid.
*/
const cuid = /^[cC][0-9a-z]{6,}$/;
const cuid2 = /^[0-9a-z]+$/;
const ulid = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/;
const xid = /^[0-9a-vA-V]{20}$/;
const ksuid = /^[A-Za-z0-9]{27}$/;
const nanoid = /^[a-zA-Z0-9_-]{21}$/;
function nanoidOfLength(length) {
	return /* @__PURE__ */ new RegExp(`^[a-zA-Z0-9_-]{${length}}$`);
}
/** ISO 8601-1 duration regex. Does not support the 8601-2 extensions like negative durations or fractional/negative components. */
const duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
/** A regex for any UUID-like identifier: 8-4-4-4-12 hex pattern */
const guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
/** Returns a regex for validating an RFC 9562/4122 UUID.
*
* @param version Optionally specify a version 1-8. If no version is specified, all versions are supported. */
const uuid = (version$1) => {
	if (!version$1) return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
	return /* @__PURE__ */ new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version$1}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
};
/** Practical email validation */
const email = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
const _emoji$1 = `^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$`;
function emoji() {
	return new RegExp(_emoji$1, "u");
}
const ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
const cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
const cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
const base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
const base64url = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/;
const httpProtocol = /^https?$/;
const e164 = /^\+[1-9]\d{6,14}$/;
const dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
/** Anchors a pattern source. The interpolation lives here rather than at the call site because
* esbuild will not drop a `@__PURE__` call whose own argument interpolates a variable, but it
* will drop `anchor(dateSource)`. Keeping it inline pinned `date` into every bundle. */
function anchor(source$1) {
	return /* @__PURE__ */ new RegExp(`^${source$1}$`);
}
const date = /* @__PURE__ */ anchor(dateSource);
function timeSource(args) {
	const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
	return typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : args.seconds ? `${hhmm}:[0-5]\\d(?:\\.\\d+)?` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function time(args) {
	return /* @__PURE__ */ new RegExp(`^${timeSource(args)}$`);
}
function datetime(args) {
	const opts = ["Z"];
	if (args.offset) opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
	const qualified = `${timeSource({
		precision: args.precision,
		seconds: true
	})}(?:${opts.join("|")})`;
	const timeRegex = args.local ? `${qualified}|${timeSource({ precision: args.precision })}` : qualified;
	return /* @__PURE__ */ new RegExp(`^${dateSource}T(?:${timeRegex})$`);
}
const anyString = /^[\s\S]{0,}$/;
const integer = /^-?\d+$/;
const number$1 = /^-?\d+(?:\.\d+)?$/;
const boolean$1 = /^(?:true|false)$/i;
const lowercase = /^[^A-Z]*$/;
const uppercase = /^[^a-z]*$/;

//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/checks.js
const $ZodCheck = /* @__PURE__ */ $constructor("$ZodCheck", (inst, def) => {
	var _a$4;
	inst._zod ?? (inst._zod = {});
	inst._zod.def = def;
	(_a$4 = inst._zod).onattach ?? (_a$4.onattach = []);
});
/** Default `when` for length-based checks: run only on non-nullish values with a `length`. */
const _whenHasLength = (payload) => {
	const val$1 = payload.value;
	return !nullish(val$1) && val$1.length !== void 0;
};
const numericOriginMap = {
	number: "number",
	bigint: "bigint",
	object: "date"
};
const $ZodCheckLessThan = /* @__PURE__ */ $constructor("$ZodCheckLessThan", (inst, def) => {
	$ZodCheck.init(inst, def);
	const origin = numericOriginMap[typeof def.value];
	inst._zod.check = (payload) => {
		if (def.inclusive ? payload.value <= def.value : payload.value < def.value) return;
		payload.issues.push({
			origin: numericOriginMap[typeof payload.value] ?? origin,
			code: "too_big",
			maximum: typeof def.value === "object" ? def.value.getTime() : def.value,
			input: payload.value,
			inclusive: def.inclusive,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodCheckGreaterThan = /* @__PURE__ */ $constructor("$ZodCheckGreaterThan", (inst, def) => {
	$ZodCheck.init(inst, def);
	const origin = numericOriginMap[typeof def.value];
	inst._zod.check = (payload) => {
		if (def.inclusive ? payload.value >= def.value : payload.value > def.value) return;
		payload.issues.push({
			origin: numericOriginMap[typeof payload.value] ?? origin,
			code: "too_small",
			minimum: typeof def.value === "object" ? def.value.getTime() : def.value,
			input: payload.value,
			inclusive: def.inclusive,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodCheckMultipleOf = /* @__PURE__ */ $constructor("$ZodCheckMultipleOf", (inst, def) => {
	$ZodCheck.init(inst, def);
	inst._zod.check = (payload) => {
		if (typeof payload.value !== typeof def.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
		if (typeof payload.value === "bigint" ? def.value !== BigInt(0) && payload.value % def.value === BigInt(0) : floatSafeRemainder(payload.value, def.value) === 0) return;
		payload.issues.push({
			origin: typeof payload.value,
			code: "not_multiple_of",
			divisor: def.value,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodCheckNumberFormat = /* @__PURE__ */ $constructor("$ZodCheckNumberFormat", (inst, def) => {
	$ZodCheck.init(inst, def);
	def.format = def.format || "float64";
	const isInt = def.format?.includes("int");
	const origin = isInt ? "int" : "number";
	const [minimum, maximum] = NUMBER_FORMAT_RANGES[def.format];
	inst._zod.check = (payload) => {
		const input = payload.value;
		if (isInt) {
			if (!Number.isInteger(input)) {
				payload.issues.push({
					expected: origin,
					format: def.format,
					code: "invalid_type",
					continue: false,
					input,
					inst
				});
				return;
			}
			if (!Number.isSafeInteger(input)) {
				if (input > 0) payload.issues.push({
					input,
					code: "too_big",
					maximum: Number.MAX_SAFE_INTEGER,
					note: "Integers must be within the safe integer range.",
					inst,
					origin,
					inclusive: true,
					continue: !def.abort
				});
				else payload.issues.push({
					input,
					code: "too_small",
					minimum: Number.MIN_SAFE_INTEGER,
					note: "Integers must be within the safe integer range.",
					inst,
					origin,
					inclusive: true,
					continue: !def.abort
				});
				return;
			}
		}
		if (input < minimum) payload.issues.push({
			origin: "number",
			input,
			code: "too_small",
			minimum,
			inclusive: true,
			inst,
			continue: !def.abort
		});
		if (input > maximum) payload.issues.push({
			origin: "number",
			input,
			code: "too_big",
			maximum,
			inclusive: true,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodCheckMaxLength = /* @__PURE__ */ $constructor("$ZodCheckMaxLength", (inst, def) => {
	var _a$4;
	$ZodCheck.init(inst, def);
	(_a$4 = inst._zod.def).when ?? (_a$4.when = _whenHasLength);
	inst._zod.check = (payload) => {
		const input = payload.value;
		const units = input.length;
		if ((typeof input === "string" && units > def.maximum ? codePointLength(input) : units) <= def.maximum) return;
		const origin = getLengthableOrigin(input);
		payload.issues.push({
			origin,
			code: "too_big",
			maximum: def.maximum,
			inclusive: true,
			input,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodCheckMinLength = /* @__PURE__ */ $constructor("$ZodCheckMinLength", (inst, def) => {
	var _a$4;
	$ZodCheck.init(inst, def);
	(_a$4 = inst._zod.def).when ?? (_a$4.when = _whenHasLength);
	inst._zod.check = (payload) => {
		const input = payload.value;
		const units = input.length;
		if ((typeof input === "string" && units >= def.minimum && units < def.minimum * 2 ? codePointLength(input) : units) >= def.minimum) return;
		const origin = getLengthableOrigin(input);
		payload.issues.push({
			origin,
			code: "too_small",
			minimum: def.minimum,
			inclusive: true,
			input,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodCheckLengthEquals = /* @__PURE__ */ $constructor("$ZodCheckLengthEquals", (inst, def) => {
	var _a$4;
	$ZodCheck.init(inst, def);
	(_a$4 = inst._zod.def).when ?? (_a$4.when = _whenHasLength);
	inst._zod.check = (payload) => {
		const input = payload.value;
		const units = input.length;
		const length = typeof input === "string" && units >= def.length && units <= def.length * 2 ? codePointLength(input) : units;
		if (length === def.length) return;
		const origin = getLengthableOrigin(input);
		const tooBig = length > def.length;
		payload.issues.push({
			origin,
			...tooBig ? {
				code: "too_big",
				maximum: def.length
			} : {
				code: "too_small",
				minimum: def.length
			},
			inclusive: true,
			exact: true,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodCheckStringFormat = /* @__PURE__ */ $constructor("$ZodCheckStringFormat", (inst, def) => {
	var _a$4, _b;
	$ZodCheck.init(inst, def);
	if (def.pattern) (_a$4 = inst._zod).check ?? (_a$4.check = (payload) => {
		def.pattern.lastIndex = 0;
		if (def.pattern.test(payload.value)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: def.format,
			input: payload.value,
			...def.pattern ? { pattern: def.pattern.toString() } : {},
			inst,
			continue: !def.abort
		});
	});
	else (_b = inst._zod).check ?? (_b.check = () => {});
});
const $ZodCheckRegex = /* @__PURE__ */ $constructor("$ZodCheckRegex", (inst, def) => {
	$ZodCheckStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		def.pattern.lastIndex = 0;
		if (def.pattern.test(payload.value)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "regex",
			input: payload.value,
			pattern: def.pattern.toString(),
			inst,
			continue: !def.abort
		});
	};
});
const $ZodCheckLowerCase = /* @__PURE__ */ $constructor("$ZodCheckLowerCase", (inst, def) => {
	def.pattern ?? (def.pattern = lowercase);
	$ZodCheckStringFormat.init(inst, def);
});
const $ZodCheckUpperCase = /* @__PURE__ */ $constructor("$ZodCheckUpperCase", (inst, def) => {
	def.pattern ?? (def.pattern = uppercase);
	$ZodCheckStringFormat.init(inst, def);
});
const $ZodCheckIncludes = /* @__PURE__ */ $constructor("$ZodCheckIncludes", (inst, def) => {
	$ZodCheck.init(inst, def);
	const escapedRegex = escapeRegex(def.includes);
	def.pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position},}${escapedRegex}` : escapedRegex);
	inst._zod.check = (payload) => {
		if (payload.value.includes(def.includes, def.position)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "includes",
			includes: def.includes,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodCheckStartsWith = /* @__PURE__ */ $constructor("$ZodCheckStartsWith", (inst, def) => {
	$ZodCheck.init(inst, def);
	const pattern = /* @__PURE__ */ new RegExp(`^${escapeRegex(def.prefix)}.*`);
	def.pattern ?? (def.pattern = pattern);
	inst._zod.check = (payload) => {
		if (payload.value.startsWith(def.prefix)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "starts_with",
			prefix: def.prefix,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodCheckEndsWith = /* @__PURE__ */ $constructor("$ZodCheckEndsWith", (inst, def) => {
	$ZodCheck.init(inst, def);
	const pattern = /* @__PURE__ */ new RegExp(`.*${escapeRegex(def.suffix)}$`);
	def.pattern ?? (def.pattern = pattern);
	inst._zod.check = (payload) => {
		if (payload.value.endsWith(def.suffix)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "ends_with",
			suffix: def.suffix,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodCheckOverwrite = /* @__PURE__ */ $constructor("$ZodCheckOverwrite", (inst, def) => {
	$ZodCheck.init(inst, def);
	inst._zod.check = (payload) => {
		payload.value = def.tx(payload.value);
	};
});

//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/doc.js
var Doc = class {
	constructor(args = [], closed = {}) {
		this.content = [];
		this.indent = 0;
		this.args = args;
		this.closed = closed;
	}
	indented(fn$1) {
		this.indent += 1;
		try {
			fn$1(this);
		} finally {
			this.indent -= 1;
		}
	}
	write(arg) {
		if (typeof arg === "function") {
			arg(this, { execution: "sync" });
			arg(this, { execution: "async" });
			return;
		}
		const lines = arg.split("\n").filter((x) => x);
		const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
		const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
		for (const line$1 of dedented) this.content.push(line$1);
	}
	compile() {
		const F = Function;
		const content = this?.content ?? [``];
		return new F(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {\n${content.join("\n")}\n};`)(...Object.values(this.closed));
	}
};

//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/versions.js
const version = {
	major: 4,
	minor: 6,
	patch: 5
};

//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/schemas.js
const $ZodType = /* @__PURE__ */ $constructor("$ZodType", (inst, def) => {
	var _a$4;
	inst ?? (inst = {});
	inst._zod.def = def;
	inst._zod.bag = inst._zod.bag || {};
	inst._zod.version = version;
	const defChecks = inst._zod.def.checks;
	const checks = inst._zod.traits.has("$ZodCheck") ? [inst, ...defChecks ?? []] : defChecks?.length ? [...defChecks] : [];
	for (const ch of checks) for (const fn$1 of ch._zod.onattach) fn$1(inst);
	if (checks.length === 0) {
		(_a$4 = inst._zod).deferred ?? (_a$4.deferred = []);
		inst._zod.deferred?.push(() => {
			inst._zod.run = inst._zod.parse;
		});
	} else {
		const runChecks = (payload, checks$1, ctx) => {
			if (payload.memo) return payload;
			let isAborted = aborted(payload);
			let asyncResult;
			for (const ch of checks$1) {
				if (ch._zod.def.when) {
					if (explicitlyAborted(payload)) continue;
					if (!ch._zod.def.when(payload)) continue;
				} else if (isAborted) continue;
				const currLen = payload.issues.length;
				const _ = ch._zod.check(payload);
				if (_ instanceof Promise && ctx?.async === false) throw new $ZodAsyncError();
				if (asyncResult || _ instanceof Promise) asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
					await _;
					if (payload.issues.length === currLen) return;
					attachSchema(payload.issues, currLen, inst);
					if (!isAborted) isAborted = aborted(payload, currLen);
				});
				else {
					if (payload.issues.length === currLen) continue;
					attachSchema(payload.issues, currLen, inst);
					if (!isAborted) isAborted = aborted(payload, currLen);
				}
			}
			if (asyncResult) return asyncResult.then(() => {
				return payload;
			});
			return payload;
		};
		const handleCanaryResult = (canary, payload, ctx) => {
			if (aborted(canary)) {
				canary.aborted = true;
				return canary;
			}
			const checkResult = runChecks(payload, checks, ctx);
			if (checkResult instanceof Promise) {
				if (ctx.async === false) throw new $ZodAsyncError();
				return checkResult.then((checkResult$1) => inst._zod.parse(checkResult$1, ctx));
			}
			return inst._zod.parse(checkResult, ctx);
		};
		inst._zod.run = (payload, ctx) => {
			if (ctx.skipChecks) return inst._zod.parse(payload, ctx);
			if (ctx.direction === "backward") {
				const canary = inst._zod.parse({
					value: payload.value,
					issues: []
				}, {
					...ctx,
					skipChecks: true
				});
				if (canary instanceof Promise) return canary.then((canary$1) => {
					return handleCanaryResult(canary$1, payload, ctx);
				});
				return handleCanaryResult(canary, payload, ctx);
			}
			const result = inst._zod.parse(payload, ctx);
			if (result instanceof Promise) {
				if (ctx.async === false) throw new $ZodAsyncError();
				return result.then((result$1) => runChecks(result$1, checks, ctx));
			}
			return runChecks(result, checks, ctx);
		};
	}
}, {
	get "~standard"() {
		return hide(this, "~standard", standardProps(this));
	},
	set "~standard"(value) {
		own(this, "~standard", value);
	}
});
/** The Standard Schema surface for `inst`. Shared so wrappers can extend it without forcing it. */
const toStandardResult = (r, ctx) => r.issues.length ? { issues: r.issues.map((iss) => finalizeIssue(iss, ctx, config())) } : { value: r.value };
async function validateAsync$1(inst, value) {
	const ctx = { async: true };
	return toStandardResult(await inst._zod.run({
		value,
		issues: []
	}, ctx), ctx);
}
function standardProps(inst) {
	return {
		validate: (value) => {
			const ctx = { async: false };
			try {
				const r = inst._zod.run({
					value,
					issues: []
				}, ctx);
				if (!(r instanceof Promise)) return toStandardResult(r, ctx);
			} catch (_) {}
			return validateAsync$1(inst, value);
		},
		vendor: "zod",
		version: 1
	};
}
const $ZodString = /* @__PURE__ */ $constructor("$ZodString", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.pattern = def.pattern ?? anyString;
	inst._zod.parse = (payload, _) => {
		if (def.coerce) try {
			payload.value = String(payload.value);
		} catch (_$1) {}
		if (typeof payload.value === "string") return payload;
		payload.issues.push({
			expected: "string",
			code: "invalid_type",
			input: payload.value,
			inst
		});
		return payload;
	};
});
const $ZodStringFormat = /* @__PURE__ */ $constructor("$ZodStringFormat", (inst, def) => {
	$ZodCheckStringFormat.init(inst, def);
	$ZodString.init(inst, def);
});
const $ZodGUID = /* @__PURE__ */ $constructor("$ZodGUID", (inst, def) => {
	def.pattern ?? (def.pattern = guid);
	$ZodStringFormat.init(inst, def);
});
const $ZodUUID = /* @__PURE__ */ $constructor("$ZodUUID", (inst, def) => {
	if (def.version) {
		const v = {
			v1: 1,
			v2: 2,
			v3: 3,
			v4: 4,
			v5: 5,
			v6: 6,
			v7: 7,
			v8: 8
		}[def.version];
		if (v === void 0) throw new Error(`Invalid UUID version: "${def.version}"`);
		def.pattern ?? (def.pattern = uuid(v));
	} else def.pattern ?? (def.pattern = uuid());
	$ZodStringFormat.init(inst, def);
});
const $ZodEmail = /* @__PURE__ */ $constructor("$ZodEmail", (inst, def) => {
	def.pattern ?? (def.pattern = email);
	$ZodStringFormat.init(inst, def);
});
/** The `://` guard rejected the input before the URL constructor saw it. */
const URL_BAD_FORMAT = 1;
/** The URL parser rejected the input. */
const URL_UNPARSEABLE = 2;
function canParseURL(input) {
	try {
		if (typeof URL !== "undefined" && typeof URL.canParse === "function") return URL.canParse(input);
		new URL(input);
		return true;
	} catch {
		return false;
	}
}
function validateURL(trimmed, def) {
	if (!("normalize" in def) && !("hostname" in def) && !("protocol" in def)) return canParseURL(trimmed) || URL_UNPARSEABLE;
	return parseURLObject(trimmed, def);
}
/** Parses a URL while preserving the non-normalizing HTTP guard. */
function parseURLObject(trimmed, def) {
	if (!def.normalize && def.protocol?.source === httpProtocol.source && !/^https?:\/\//i.test(trimmed)) return URL_BAD_FORMAT;
	try {
		if (typeof URL !== "undefined") {
			const URLStatic = URL;
			if (typeof URLStatic.parse === "function") return URLStatic.parse(trimmed) ?? URL_UNPARSEABLE;
		}
		return new URL(trimmed);
	} catch {
		return URL_UNPARSEABLE;
	}
}
const asciiTabOrNewline = /[\t\n\r]/g;
/** The URL parser deletes every ASCII tab, LF and CR from its input before it parses, so `new URL("https://exa\nmple.com")` reports on `example.com`. Applying the same deletion to the returned value closes the half of that divergence which can move the host; the parser's other rewrite, stripping C0 controls at the edges, cannot. */
function stripTabAndNewline(value) {
	return value.replace(asciiTabOrNewline, "");
}
function urlHostnameOk(url, hostname) {
	hostname.lastIndex = 0;
	return hostname.test(url.hostname);
}
function urlProtocolOk(url, protocol) {
	protocol.lastIndex = 0;
	return protocol.test(url.protocol.endsWith(":") ? url.protocol.slice(0, -1) : url.protocol);
}
const $ZodURL = /* @__PURE__ */ $constructor("$ZodURL", (inst, def) => {
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		try {
			const trimmed = payload.value.trim();
			const url = validateURL(trimmed, def);
			if (url === URL_BAD_FORMAT) {
				payload.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid URL format",
					input: payload.value,
					inst,
					continue: !def.abort
				});
				return;
			}
			if (url === URL_UNPARSEABLE) {
				payload.issues.push({
					code: "invalid_format",
					format: "url",
					input: payload.value,
					inst,
					continue: !def.abort
				});
				return;
			}
			if (url === true) {
				payload.value = stripTabAndNewline(trimmed);
				return;
			}
			if (def.hostname && !urlHostnameOk(url, def.hostname)) payload.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid hostname",
				pattern: def.hostname.source,
				input: payload.value,
				inst,
				continue: !def.abort
			});
			if (def.protocol && !urlProtocolOk(url, def.protocol)) payload.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid protocol",
				pattern: def.protocol.source,
				input: payload.value,
				inst,
				continue: !def.abort
			});
			payload.value = def.normalize ? url.href : stripTabAndNewline(trimmed);
			return;
		} catch (_) {
			payload.issues.push({
				code: "invalid_format",
				format: "url",
				input: payload.value,
				inst,
				continue: !def.abort
			});
		}
	};
});
const $ZodEmoji = /* @__PURE__ */ $constructor("$ZodEmoji", (inst, def) => {
	def.pattern ?? (def.pattern = emoji());
	$ZodStringFormat.init(inst, def);
});
const $ZodNanoID = /* @__PURE__ */ $constructor("$ZodNanoID", (inst, def) => {
	if (def.length !== void 0 && (!Number.isInteger(def.length) || def.length < 1)) throw new Error(`Invalid nanoid length: ${def.length}`);
	def.pattern ?? (def.pattern = def.length === void 0 ? nanoid : nanoidOfLength(def.length));
	$ZodStringFormat.init(inst, def);
});
/**
* @deprecated CUID v1 is deprecated by its authors due to information leakage
* (timestamps embedded in the id). Use {@link $ZodCUID2} instead.
* See https://github.com/paralleldrive/cuid.
*/
const $ZodCUID = /* @__PURE__ */ $constructor("$ZodCUID", (inst, def) => {
	def.pattern ?? (def.pattern = cuid);
	$ZodStringFormat.init(inst, def);
});
const $ZodCUID2 = /* @__PURE__ */ $constructor("$ZodCUID2", (inst, def) => {
	def.pattern ?? (def.pattern = cuid2);
	$ZodStringFormat.init(inst, def);
});
const $ZodULID = /* @__PURE__ */ $constructor("$ZodULID", (inst, def) => {
	def.pattern ?? (def.pattern = ulid);
	$ZodStringFormat.init(inst, def);
});
const $ZodXID = /* @__PURE__ */ $constructor("$ZodXID", (inst, def) => {
	def.pattern ?? (def.pattern = xid);
	$ZodStringFormat.init(inst, def);
});
const $ZodKSUID = /* @__PURE__ */ $constructor("$ZodKSUID", (inst, def) => {
	def.pattern ?? (def.pattern = ksuid);
	$ZodStringFormat.init(inst, def);
});
const $ZodISODateTime = /* @__PURE__ */ $constructor("$ZodISODateTime", (inst, def) => {
	def.pattern ?? (def.pattern = datetime(def));
	$ZodStringFormat.init(inst, def);
});
const $ZodISODate = /* @__PURE__ */ $constructor("$ZodISODate", (inst, def) => {
	def.pattern ?? (def.pattern = date);
	$ZodStringFormat.init(inst, def);
});
const $ZodISOTime = /* @__PURE__ */ $constructor("$ZodISOTime", (inst, def) => {
	def.pattern ?? (def.pattern = time(def));
	$ZodStringFormat.init(inst, def);
});
const $ZodISODuration = /* @__PURE__ */ $constructor("$ZodISODuration", (inst, def) => {
	def.pattern ?? (def.pattern = duration);
	$ZodStringFormat.init(inst, def);
});
const $ZodIPv4 = /* @__PURE__ */ $constructor("$ZodIPv4", (inst, def) => {
	def.pattern ?? (def.pattern = ipv4);
	$ZodStringFormat.init(inst, def);
});
/** An IPv6 address is written with hex digits, colons and dots, and nothing else. The guard is what makes the check below an IPv6 check: `new URL("http://[...]")` parses an authority, not an address, so `@` and `\` re-delimit it and `"::@1\\"` validates against the host `0.0.0.1`. The URL parser also deletes ASCII tab, LF and CR rather than failing, which is how `"::1\n"` validated as `::1`. */
const ipv6Alphabet = /^[0-9a-fA-F:.]+$/;
function isValidIPv6(value) {
	if (!ipv6Alphabet.test(value)) return false;
	return canParseURL(`http://[${value}]`);
}
const $ZodIPv6 = /* @__PURE__ */ $constructor("$ZodIPv6", (inst, def) => {
	def.pattern ?? (def.pattern = ipv6);
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		if (!isValidIPv6(payload.value)) payload.issues.push({
			code: "invalid_format",
			format: "ipv6",
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodCIDRv4 = /* @__PURE__ */ $constructor("$ZodCIDRv4", (inst, def) => {
	def.pattern ?? (def.pattern = cidrv4);
	$ZodStringFormat.init(inst, def);
});
function isValidCIDRv6(value) {
	const parts = value.split("/");
	if (parts.length !== 2) return false;
	const [address, prefix] = parts;
	if (!prefix) return false;
	const prefixNum = Number(prefix);
	if (`${prefixNum}` !== prefix) return false;
	if (prefixNum < 0 || prefixNum > 128) return false;
	return isValidIPv6(address);
}
const $ZodCIDRv6 = /* @__PURE__ */ $constructor("$ZodCIDRv6", (inst, def) => {
	def.pattern ?? (def.pattern = cidrv6);
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		if (!isValidCIDRv6(payload.value)) payload.issues.push({
			code: "invalid_format",
			format: "cidrv6",
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
function isValidBase64(data$1) {
	if (data$1 === "") return true;
	if (/\s/.test(data$1)) return false;
	if (data$1.length % 4 !== 0) return false;
	try {
		atob(data$1);
		return true;
	} catch {
		return false;
	}
}
const base64Charset = /^[0-9a-zA-Z+/]*={0,2}$/;
const $ZodBase64 = /* @__PURE__ */ $constructor("$ZodBase64", (inst, def) => {
	def.pattern ?? (def.pattern = base64Charset);
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		if (isValidBase64(payload.value)) return;
		payload.issues.push({
			code: "invalid_format",
			format: "base64",
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
const base64urlCharset = /^[A-Za-z0-9_-]*$/;
function isValidBase64URL(data$1) {
	if (!base64urlCharset.test(data$1)) return false;
	const base64$1 = data$1.replace(/[-_]/g, (c$1) => c$1 === "-" ? "+" : "/");
	return isValidBase64(base64$1.padEnd(Math.ceil(base64$1.length / 4) * 4, "="));
}
const $ZodBase64URL = /* @__PURE__ */ $constructor("$ZodBase64URL", (inst, def) => {
	def.pattern ?? (def.pattern = base64urlCharset);
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		if (isValidBase64URL(payload.value)) return;
		payload.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodE164 = /* @__PURE__ */ $constructor("$ZodE164", (inst, def) => {
	def.pattern ?? (def.pattern = e164);
	$ZodStringFormat.init(inst, def);
});
function isValidJWT(token$1, algorithm = null) {
	try {
		const tokensParts = token$1.split(".");
		if (tokensParts.length !== 3) return false;
		const [header] = tokensParts;
		if (!header) return false;
		const parsedHeader = JSON.parse(atob(header));
		if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT") return false;
		if (!parsedHeader.alg) return false;
		if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm)) return false;
		return true;
	} catch {
		return false;
	}
}
const $ZodJWT = /* @__PURE__ */ $constructor("$ZodJWT", (inst, def) => {
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		if (isValidJWT(payload.value, def.alg)) return;
		payload.issues.push({
			code: "invalid_format",
			format: "jwt",
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodNumber = /* @__PURE__ */ $constructor("$ZodNumber", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.pattern = number$1;
	inst._zod.parse = (payload, _ctx) => {
		if (def.coerce) try {
			payload.value = Number(payload.value);
		} catch (_) {}
		const input = payload.value;
		if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) return payload;
		const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? String(input) : void 0 : void 0;
		payload.issues.push({
			expected: "number",
			code: "invalid_type",
			input,
			inst,
			...received ? { received } : {}
		});
		return payload;
	};
});
const $ZodNumberFormat = /* @__PURE__ */ $constructor("$ZodNumberFormat", (inst, def) => {
	$ZodCheckNumberFormat.init(inst, def);
	$ZodNumber.init(inst, def);
});
const $ZodBoolean = /* @__PURE__ */ $constructor("$ZodBoolean", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.pattern = boolean$1;
	inst._zod.parse = (payload, _ctx) => {
		if (def.coerce) try {
			payload.value = Boolean(payload.value);
		} catch (_) {}
		const input = payload.value;
		if (typeof input === "boolean") return payload;
		payload.issues.push({
			expected: "boolean",
			code: "invalid_type",
			input,
			inst
		});
		return payload;
	};
});
const $ZodUnknown = /* @__PURE__ */ $constructor("$ZodUnknown", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload) => payload;
});
const $ZodNever = /* @__PURE__ */ $constructor("$ZodNever", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, _ctx) => {
		payload.issues.push({
			expected: "never",
			code: "invalid_type",
			input: payload.value,
			inst
		});
		return payload;
	};
});
function handleArrayResult(result, final, index$2) {
	if (result.issues.length) final.issues.push(...prefixIssues(index$2, result.issues));
	final.value[index$2] = result.value;
}
const $ZodArray = /* @__PURE__ */ $constructor("$ZodArray", (inst, def) => {
	$ZodType.init(inst, def);
	const memo$1 = globalConfig.memoizer;
	memo$1?.attach(inst);
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		if (!Array.isArray(input)) {
			payload.issues.push({
				expected: "array",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		payload.value = memo$1 ? memo$1.alloc(inst, payload, Array(input.length), ctx) : Array(input.length);
		const proms = [];
		const abortEarly = ctx?.abortEarly;
		for (let i$1 = 0; i$1 < input.length; i$1++) {
			const item = input[i$1];
			const result = def.element._zod.run({
				value: item,
				issues: []
			}, ctx);
			if (result instanceof Promise) proms.push(result.then((result$1) => handleArrayResult(result$1, payload, i$1)));
			else {
				handleArrayResult(result, payload, i$1);
				if (abortEarly && result.issues.length !== 0 && aborted(result)) break;
			}
		}
		if (proms.length) return Promise.all(proms).then(() => payload);
		return payload;
	};
});
function handlePropertyResult(result, final, key$2, input, optin, optout) {
	const isPresent = key$2 in input;
	const isOptionalOut = optout === "optional";
	if (!isPresent && isOptionalOut && optin === "optional") return;
	if (result.issues.length) {
		if (optin !== void 0 && isOptionalOut && !isPresent) return;
		final.issues.push(...prefixIssues(key$2, result.issues));
	}
	if (!isPresent && optin === void 0) {
		if (!result.issues.length) final.issues.push({
			code: "invalid_type",
			expected: "nonoptional",
			input: void 0,
			path: [key$2]
		});
		return;
	}
	if (result.value === void 0) {
		if (isPresent || optin === "defaulted" && !isOptionalOut) final.value[key$2] = void 0;
	} else final.value[key$2] = result.value;
}
const NO_SYMBOL_KEYS = [];
function normalizeDef(def) {
	const keys = Object.keys(def.shape);
	const ownSymbols = Object.getOwnPropertySymbols(def.shape);
	const symbolKeys = ownSymbols.length ? ownSymbols : NO_SYMBOL_KEYS;
	const allKeys = symbolKeys.length ? [...keys, ...symbolKeys] : keys;
	for (const k of allKeys) if (!def.shape?.[k]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${String(k)}": expected a Zod schema`);
	const okeys = optionalKeys(def.shape);
	return {
		...def,
		allKeys,
		symbolKeys,
		keySet: new Set(keys),
		numKeys: keys.length,
		optionalKeys: new Set(okeys)
	};
}
function handleCatchall(proms, input, payload, ctx, def, inst, abortEarly) {
	const unrecognized = [];
	const keySet = def.keySet;
	const _catchall = def.catchall._zod;
	const t = _catchall.def.type;
	const optin = _catchall.optin;
	const optout = _catchall.optout;
	let seen = 0;
	for (const key$2 in input) {
		if (abortEarly && payload.issues.length !== seen) {
			if (aborted(payload, seen)) break;
			seen = payload.issues.length;
		}
		if (keySet.has(key$2)) continue;
		if (key$2 === "__proto__") {
			if (t === "never") unrecognized.push(key$2);
			continue;
		}
		if (t === "never") {
			unrecognized.push(key$2);
			continue;
		}
		const r = _catchall.run({
			value: input[key$2],
			issues: []
		}, ctx);
		if (r instanceof Promise) proms.push(r.then((r$1) => handlePropertyResult(r$1, payload, key$2, input, optin, optout)));
		else handlePropertyResult(r, payload, key$2, input, optin, optout);
	}
	if (unrecognized.length) payload.issues.push({
		code: "unrecognized_keys",
		keys: unrecognized,
		input,
		inst,
		continue: true
	});
	if (!proms.length) return payload;
	return Promise.all(proms).then(() => {
		return payload;
	});
}
const $ZodObject = /* @__PURE__ */ $constructor("$ZodObject", (inst, def) => {
	$ZodType.init(inst, def);
	const desc = Object.getOwnPropertyDescriptor(def, "shape");
	const sh = desc?.get ? desc.get.raw : def.shape ?? {};
	if (sh) {
		const get$1 = () => {
			const newSh = { ...sh };
			Object.defineProperty(def, "shape", { value: newSh });
			get$1.raw = newSh;
			return newSh;
		};
		get$1.raw = sh;
		Object.defineProperty(def, "shape", { get: get$1 });
	}
	const _normalized = cached(() => normalizeDef(def));
	defineLazyInternal(inst, "propValues", (zod) => {
		const shape = zod.def.shape;
		const propValues = {};
		for (const key$2 in shape) {
			const field$1 = shape[key$2]._zod;
			if (field$1.values) {
				if (!Object.prototype.hasOwnProperty.call(propValues, key$2)) assignProp(propValues, key$2, /* @__PURE__ */ new Set());
				for (const v of field$1.values) propValues[key$2].add(v);
				if (field$1.optin !== void 0) propValues[key$2].add(void 0);
			}
		}
		return propValues;
	});
	const isObject$1 = isObject;
	const catchall = def.catchall;
	let value;
	const memo$1 = globalConfig.memoizer;
	memo$1?.attach(inst);
	inst._zod.parse = (payload, ctx) => {
		value ?? (value = _normalized.value);
		const input = payload.value;
		if (!isObject$1(input)) {
			payload.issues.push({
				expected: "object",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		payload.value = memo$1 ? memo$1.alloc(inst, payload, {}, ctx) : {};
		const proms = [];
		const shape = value.shape;
		const abortEarly = ctx?.abortEarly;
		let seen = payload.issues.length;
		for (const key$2 of value.allKeys) {
			if (abortEarly && payload.issues.length !== seen) {
				if (aborted(payload, seen)) break;
				seen = payload.issues.length;
			}
			if (key$2 === "__proto__") continue;
			const el = shape[key$2];
			const optin = el._zod.optin;
			const optout = el._zod.optout;
			const r = el._zod.run({
				value: input[key$2],
				issues: []
			}, ctx);
			if (r instanceof Promise) proms.push(r.then((r$1) => handlePropertyResult(r$1, payload, key$2, input, optin, optout)));
			else handlePropertyResult(r, payload, key$2, input, optin, optout);
		}
		if (!catchall) return proms.length ? Promise.all(proms).then(() => payload) : payload;
		return handleCatchall(proms, input, payload, ctx, _normalized.value, inst, abortEarly === true);
	};
});
const $ZodObjectJIT = /* @__PURE__ */ $constructor("$ZodObjectJIT", (inst, def) => {
	$ZodObject.init(inst, def);
	const superParse = inst._zod.parse;
	const _normalized = cached(() => normalizeDef(def));
	const memo$1 = globalConfig.memoizer;
	const generateFastpass = (shape) => {
		const normalized = _normalized.value;
		const syms = normalized.symbolKeys;
		const doc = new Doc(["payload", "ctx"], {
			shape,
			inst,
			memo: memo$1,
			syms
		});
		const parseStr = (k) => `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
		const prefixStr = (id, k) => `
          let ${id}_ab = false;
          for (let i = 0; i < ${id}.issues.length; i++) {
            const iss = ${id}.issues[i];
            iss.path = iss.path ? [${k}, ...iss.path] : [${k}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${id}_ab = true;
          }
          if (${id}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
		doc.write(`const input = payload.value;`);
		const ids = Object.create(null);
		let counter = 0;
		for (const key$2 of normalized.allKeys) ids[key$2] = `key_${counter++}`;
		doc.write(memo$1 ? `const newResult = memo.alloc(inst, payload, {}, ctx);` : `const newResult = {};`);
		for (const key$2 of normalized.allKeys) {
			if (key$2 === "__proto__") continue;
			const id = ids[key$2];
			const k = typeof key$2 === "symbol" ? `syms[${syms.indexOf(key$2)}]` : esc(key$2);
			const isPresent = `${k} in input`;
			const schema = shape[key$2];
			const optin = schema?._zod?.optin;
			const isOptionalIn = optin !== void 0;
			const isOptionalOut = schema?._zod?.optout === "optional";
			doc.write(`const ${id} = ${parseStr(k)};`);
			if (isOptionalIn && isOptionalOut) {
				const assign$1 = optin === "optional" ? `${id}_present` : `${id}.value !== undefined || ${id}_present`;
				doc.write(`
        const ${id}_present = ${isPresent};
        if (!${id}.issues.length || ${id}_present) {
          if (${id}.issues.length) {${prefixStr(id, k)}
          }

          if (${assign$1}) {
            newResult[${k}] = ${id}.value;
          }
        }

      `);
			} else if (!isOptionalIn) doc.write(`
        const ${id}_present = ${isPresent};
        if (${id}.issues.length) {${prefixStr(id, k)}
        }
        if (!${id}_present && !${id}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${k}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${id}_present) {
          newResult[${k}] = ${id}.value;
        }

      `);
			else {
				doc.write(`
        if (${id}.issues.length) {${prefixStr(id, k)}
        }
      `);
				if (optin === "defaulted") doc.write(`newResult[${k}] = ${id}.value;`);
				else doc.write(`
        if (${id}.value !== undefined || ${isPresent}) {
          newResult[${k}] = ${id}.value;
        }
      `);
			}
		}
		doc.write(`payload.value = newResult;`);
		doc.write(`return payload;`);
		return doc.compile();
	};
	let fastpass;
	const isObject$1 = isObject;
	const jit = !globalConfig.jitless;
	const allowsEval$1 = allowsEval;
	const fastEnabled = jit && allowsEval$1.value;
	const catchall = def.catchall;
	let value;
	inst._zod.parse = (payload, ctx) => {
		value ?? (value = _normalized.value);
		const input = payload.value;
		if (!isObject$1(input)) {
			payload.issues.push({
				expected: "object",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
			if (!fastpass) fastpass = generateFastpass(def.shape);
			payload = fastpass(payload, ctx);
			if (!catchall) return payload;
			return handleCatchall([], input, payload, ctx, value, inst, ctx?.abortEarly === true);
		}
		return superParse(payload, ctx);
	};
});
function handleUnionResults(results, final, inst, ctx) {
	for (const result of results) if (result.issues.length === 0) {
		final.value = result.value;
		return final;
	}
	const nonaborted = results.filter((r) => !aborted(r));
	if (nonaborted.length === 1) {
		final.value = nonaborted[0].value;
		return nonaborted[0];
	}
	final.issues.push({
		code: "invalid_union",
		input: final.value,
		inst,
		errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
	});
	return final;
}
const $ZodUnion = /* @__PURE__ */ $constructor("$ZodUnion", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazyInternal(inst, "optin", (zod) => zod.def.options.some((o) => o._zod.optin === "defaulted") ? "defaulted" : zod.def.options.some((o) => o._zod.optin !== void 0) ? "optional" : void 0);
	defineLazyInternal(inst, "optout", (zod) => zod.def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0);
	defineLazyInternal(inst, "values", (zod) => {
		if (zod.def.options.every((o) => o._zod.values)) return new Set(zod.def.options.flatMap((option) => Array.from(option._zod.values)));
	});
	defineLazyInternal(inst, "pattern", (zod) => {
		if (zod.def.options.every((o) => o._zod.pattern)) {
			const patterns = zod.def.options.map((o) => o._zod.pattern);
			return /* @__PURE__ */ new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
		}
	});
	const first$1 = def.options.length === 1 ? def.options[0]._zod.run : null;
	inst._zod.parse = (payload, ctx) => {
		if (first$1) return first$1(payload, ctx);
		let async = false;
		const results = [];
		for (const option of def.options) {
			const result = option._zod.run({
				value: payload.value,
				issues: []
			}, ctx);
			if (result instanceof Promise) {
				results.push(result);
				async = true;
			} else {
				if (result.issues.length === 0) return result;
				results.push(result);
			}
		}
		if (!async) return handleUnionResults(results, payload, inst, ctx);
		return Promise.all(results).then((results$1) => {
			return handleUnionResults(results$1, payload, inst, ctx);
		});
	};
});
const $ZodIntersection = /* @__PURE__ */ $constructor("$ZodIntersection", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		const left = def.left._zod.run({
			value: input,
			issues: []
		}, ctx);
		const right = def.right._zod.run({
			value: input,
			issues: []
		}, ctx);
		if (left instanceof Promise || right instanceof Promise) return Promise.all([left, right]).then(([left$1, right$1]) => {
			return handleIntersectionResults(payload, left$1, right$1);
		});
		return handleIntersectionResults(payload, left, right);
	};
});
function mergeValues(a, b) {
	if (a === b) return {
		valid: true,
		data: a
	};
	if (a instanceof Date && b instanceof Date && +a === +b) return {
		valid: true,
		data: a
	};
	if (isPlainObject(a) && isPlainObject(b)) {
		const bKeys = Object.keys(b);
		const sharedKeys = Object.keys(a).filter((key$2) => bKeys.indexOf(key$2) !== -1);
		const newObj = {
			...a,
			...b
		};
		if (Object.prototype.hasOwnProperty.call(newObj, "__proto__")) delete newObj.__proto__;
		for (const key$2 of sharedKeys) {
			if (key$2 === "__proto__") continue;
			const sharedValue = mergeValues(a[key$2], b[key$2]);
			if (!sharedValue.valid) return {
				valid: false,
				mergeErrorPath: [key$2, ...sharedValue.mergeErrorPath]
			};
			newObj[key$2] = sharedValue.data;
		}
		return {
			valid: true,
			data: newObj
		};
	}
	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) return {
			valid: false,
			mergeErrorPath: []
		};
		const newArray = [];
		for (let index$2 = 0; index$2 < a.length; index$2++) {
			const itemA = a[index$2];
			const itemB = b[index$2];
			const sharedValue = mergeValues(itemA, itemB);
			if (!sharedValue.valid) return {
				valid: false,
				mergeErrorPath: [index$2, ...sharedValue.mergeErrorPath]
			};
			newArray.push(sharedValue.data);
		}
		return {
			valid: true,
			data: newArray
		};
	}
	return {
		valid: false,
		mergeErrorPath: []
	};
}
function handleIntersectionResults(result, left, right) {
	const unrecKeys = /* @__PURE__ */ new Map();
	let unrecIssue;
	const keyIssues = /* @__PURE__ */ new Map();
	const collect = (iss, side) => {
		let keys;
		if (iss.code === "unrecognized_keys" && !iss.path?.length) {
			unrecIssue ?? (unrecIssue = iss);
			keys = iss.keys;
		} else if (iss.code === "invalid_key" && iss.origin === "record" && iss.path?.length === 1) {
			const k = String(iss.path[0]);
			if (!keyIssues.has(k)) keyIssues.set(k, iss);
			keys = [k];
		} else return false;
		for (const k of keys) {
			if (!unrecKeys.has(k)) unrecKeys.set(k, {});
			unrecKeys.get(k)[side] = true;
		}
		return true;
	};
	for (const iss of left.issues) if (!collect(iss, "l")) result.issues.push(iss);
	for (const iss of right.issues) if (!collect(iss, "r")) result.issues.push(iss);
	const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
	if (bothKeys.length) {
		const aggregated = unrecIssue ? bothKeys.filter((k) => unrecIssue.keys.includes(k)) : [];
		if (aggregated.length) result.issues.push({
			...unrecIssue,
			keys: aggregated
		});
		for (const k of bothKeys) if (!aggregated.includes(k) && keyIssues.has(k)) result.issues.push(keyIssues.get(k));
	}
	const merged = mergeValues(left.value, right.value);
	if (!merged.valid) {
		if (aborted(result)) return result;
		throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
	}
	result.value = merged.data;
	return result;
}
const $ZodRecord = /* @__PURE__ */ $constructor("$ZodRecord", (inst, def) => {
	$ZodType.init(inst, def);
	const memo$1 = globalConfig.memoizer;
	memo$1?.attach(inst);
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		if (!isPlainObject(input)) {
			payload.issues.push({
				expected: "record",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		const proms = [];
		const values = def.keyType._zod.values;
		if (values && !def.partial) {
			payload.value = memo$1 ? memo$1.alloc(inst, payload, {}, ctx) : {};
			const recordKeys = /* @__PURE__ */ new Set();
			for (const key$2 of values) if (typeof key$2 === "string" || typeof key$2 === "number" || typeof key$2 === "symbol") {
				recordKeys.add(typeof key$2 === "number" ? key$2.toString() : key$2);
				if (key$2 === "__proto__") continue;
				const keyResult = def.keyType._zod.run({
					value: key$2,
					issues: []
				}, ctx);
				if (keyResult instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
				if (keyResult.issues.length) {
					payload.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
						input: key$2,
						path: [key$2],
						inst
					});
					continue;
				}
				const outKey = keyResult.value;
				if (outKey === "__proto__") continue;
				const result = def.valueType._zod.run({
					value: input[key$2],
					issues: []
				}, ctx);
				if (result instanceof Promise) proms.push(result.then((result$1) => {
					if (result$1.issues.length) payload.issues.push(...prefixIssues(key$2, result$1.issues));
					payload.value[outKey] = result$1.value;
				}));
				else {
					if (result.issues.length) payload.issues.push(...prefixIssues(key$2, result.issues));
					payload.value[outKey] = result.value;
				}
			}
			let unrecognized;
			for (const key$2 in input) if (!recordKeys.has(key$2)) if (def.mode === "loose") {
				if (key$2 === "__proto__") continue;
				payload.value[key$2] = input[key$2];
			} else {
				unrecognized = unrecognized ?? [];
				unrecognized.push(key$2);
			}
			if (unrecognized && unrecognized.length > 0) payload.issues.push({
				code: "unrecognized_keys",
				input,
				inst,
				keys: unrecognized,
				continue: true
			});
		} else {
			payload.value = memo$1 ? memo$1.alloc(inst, payload, {}, ctx) : {};
			let unrecognized;
			for (const key$2 of Reflect.ownKeys(input)) {
				if (key$2 === "__proto__") continue;
				if (!Object.prototype.propertyIsEnumerable.call(input, key$2)) continue;
				let keyResult = def.keyType._zod.run({
					value: key$2,
					issues: []
				}, ctx);
				if (keyResult instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
				if (typeof key$2 === "string" && number$1.test(key$2) && keyResult.issues.length) {
					const retryResult = def.keyType._zod.run({
						value: Number(key$2),
						issues: []
					}, ctx);
					if (retryResult instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
					if (retryResult.issues.length === 0) keyResult = retryResult;
				}
				if (keyResult.issues.length) {
					if (def.mode === "loose") payload.value[key$2] = input[key$2];
					else if (values) {
						unrecognized = unrecognized ?? [];
						unrecognized.push(key$2);
					} else payload.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
						input: key$2,
						path: [key$2],
						inst
					});
					continue;
				}
				const outKey = keyResult.value;
				if (outKey === "__proto__") continue;
				const result = def.valueType._zod.run({
					value: input[key$2],
					issues: []
				}, ctx);
				if (result instanceof Promise) proms.push(result.then((result$1) => {
					if (result$1.issues.length) payload.issues.push(...prefixIssues(key$2, result$1.issues));
					payload.value[outKey] = result$1.value;
				}));
				else {
					if (result.issues.length) payload.issues.push(...prefixIssues(key$2, result.issues));
					payload.value[outKey] = result.value;
				}
			}
			if (unrecognized && unrecognized.length > 0) payload.issues.push({
				code: "unrecognized_keys",
				input,
				inst,
				keys: unrecognized,
				continue: true
			});
		}
		if (proms.length) return Promise.all(proms).then(() => payload);
		return payload;
	};
});
const $ZodEnum = /* @__PURE__ */ $constructor("$ZodEnum", (inst, def) => {
	$ZodType.init(inst, def);
	const values = getEnumValues(def.entries);
	const valuesSet = new Set(values);
	inst._zod.values = valuesSet;
	defineLazyInternal(inst, "pattern", (zod) => {
		const patternValues = getEnumValues(zod.def.entries).filter((k) => propertyKeyTypes.has(typeof k));
		return /* @__PURE__ */ new RegExp(patternValues.length ? `^(${patternValues.map((o) => escapeRegex(o.toString())).join("|")})$` : "^[^\\s\\S]$");
	});
	inst._zod.parse = (payload, _ctx) => {
		const input = payload.value;
		if (valuesSet.has(input)) return payload;
		payload.issues.push({
			code: "invalid_value",
			values,
			input,
			inst
		});
		return payload;
	};
});
const $ZodTransform = /* @__PURE__ */ $constructor("$ZodTransform", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	globalConfig.memoizer.guard(inst);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") throw new $ZodEncodeError(inst.constructor.name);
		const _out = def.transform(payload.value, payload);
		if (ctx.async) return (_out instanceof Promise ? _out : Promise.resolve(_out)).then((output) => {
			payload.value = output;
			return payload;
		});
		if (_out instanceof Promise) throw new $ZodAsyncError();
		payload.value = _out;
		return payload;
	};
});
function handleOptionalResult(payload, result) {
	payload.value = result.issues.length ? void 0 : result.value;
	return payload;
}
const $ZodOptional = /* @__PURE__ */ $constructor("$ZodOptional", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional");
	inst._zod.optout = "optional";
	defineLazyInternal(inst, "values", (zod) => {
		const values = zod.def.innerType._zod.values;
		return values ? new Set([...values, void 0]) : void 0;
	});
	defineLazyInternal(inst, "pattern", (zod) => {
		const pattern = zod.def.innerType._zod.pattern;
		return pattern ? /* @__PURE__ */ new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
	});
	inst._zod.parse = (payload, ctx) => {
		if (payload.value === void 0) {
			if (def.innerType._zod.optin !== "defaulted") return payload;
			const result = def.innerType._zod.run({
				value: payload.value,
				issues: []
			}, ctx);
			if (result instanceof Promise) return result.then((result$1) => handleOptionalResult(payload, result$1));
			return handleOptionalResult(payload, result);
		}
		return def.innerType._zod.run(payload, ctx);
	};
});
const $ZodExactOptional = /* @__PURE__ */ $constructor("$ZodExactOptional", (inst, def) => {
	$ZodOptional.init(inst, def);
	defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
	defineLazyInternal(inst, "pattern", (zod) => zod.def.innerType._zod.pattern);
	inst._zod.parse = (payload, ctx) => {
		return def.innerType._zod.run(payload, ctx);
	};
});
const $ZodNullable = /* @__PURE__ */ $constructor("$ZodNullable", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin);
	defineLazyInternal(inst, "optout", (zod) => zod.def.innerType._zod.optout);
	defineLazyInternal(inst, "pattern", (zod) => {
		const pattern = zod.def.innerType._zod.pattern;
		return pattern ? /* @__PURE__ */ new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
	});
	defineLazyInternal(inst, "values", (zod) => {
		return zod.def.innerType._zod.values ? new Set([...zod.def.innerType._zod.values, null]) : void 0;
	});
	inst._zod.parse = (payload, ctx) => {
		if (payload.value === null) return payload;
		return def.innerType._zod.run(payload, ctx);
	};
});
const $ZodDefault = /* @__PURE__ */ $constructor("$ZodDefault", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "defaulted";
	defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		if (payload.value === void 0) {
			payload.value = def.defaultValue;
			/**
			* $ZodDefault returns the default value immediately in forward direction.
			* It doesn't pass the default value into the validator ("prefault"). There's no reason to pass the default value through validation. The validity of the default is enforced by TypeScript statically. Otherwise, it's the responsibility of the user to ensure the default is valid. In the case of pipes with divergent in/out types, you can specify the default on the `in` schema of your ZodPipe to set a "prefault" for the pipe.   */
			return payload;
		}
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then((result$1) => handleDefaultResult(result$1, def));
		return handleDefaultResult(result, def);
	};
});
function handleDefaultResult(payload, def) {
	if (payload.value === void 0) payload.value = def.defaultValue;
	return payload;
}
const $ZodPrefault = /* @__PURE__ */ $constructor("$ZodPrefault", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "defaulted";
	defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		if (payload.value === void 0) payload.value = def.defaultValue;
		return def.innerType._zod.run(payload, ctx);
	};
});
const $ZodNonOptional = /* @__PURE__ */ $constructor("$ZodNonOptional", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazyInternal(inst, "values", (zod) => {
		const v = zod.def.innerType._zod.values;
		return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
	});
	inst._zod.parse = (payload, ctx) => {
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then((result$1) => handleNonOptionalResult(result$1, inst));
		return handleNonOptionalResult(result, inst);
	};
});
function handleNonOptionalResult(payload, inst) {
	if (!payload.issues.length && payload.value === void 0) payload.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: payload.value,
		inst
	});
	return payload;
}
function handleCatchResult(payload, result, def, ctx) {
	if (!result.issues.length) {
		payload.value = result.value;
		if (result.memo) payload.memo = true;
		return payload;
	}
	payload.value = def.catchValue({
		...result,
		value: payload.value,
		error: { issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config())) },
		input: payload.value
	});
	return payload;
}
const $ZodCatch = /* @__PURE__ */ $constructor("$ZodCatch", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional");
	defineLazyInternal(inst, "optout", (zod) => zod.def.innerType._zod.optout);
	defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		const result = def.innerType._zod.run({
			value: payload.value,
			issues: []
		}, ctx);
		if (result instanceof Promise) return result.then((result$1) => handleCatchResult(payload, result$1, def, ctx));
		return handleCatchResult(payload, result, def, ctx);
	};
});
const $ZodPipe = /* @__PURE__ */ $constructor("$ZodPipe", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazyInternal(inst, "values", (zod) => zod.def.in._zod.values);
	defineLazyInternal(inst, "optin", (zod) => zod.def.in._zod.optin);
	defineLazyInternal(inst, "optout", (zod) => zod.def.out._zod.optout);
	defineLazyInternal(inst, "propValues", (zod) => zod.def.in._zod.propValues);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") {
			const right = def.out._zod.run(payload, ctx);
			if (right instanceof Promise) return right.then((right$1) => handlePipeResult(right$1, def.in, ctx));
			return handlePipeResult(right, def.in, ctx);
		}
		const left = def.in._zod.run(payload, ctx);
		if (left instanceof Promise) return left.then((left$1) => handlePipeResult(left$1, def.out, ctx));
		return handlePipeResult(left, def.out, ctx);
	};
});
function handlePipeResult(left, next$1, ctx) {
	if (left.issues.some((iss) => iss.code !== "unrecognized_keys")) {
		left.aborted = true;
		return left;
	}
	return next$1._zod.run({
		value: left.value,
		issues: left.issues
	}, ctx);
}
const $ZodReadonly = /* @__PURE__ */ $constructor("$ZodReadonly", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazyInternal(inst, "propValues", (zod) => zod.def.innerType._zod.propValues);
	defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
	defineLazyInternal(inst, "optin", (zod) => zod.def.innerType?._zod?.optin);
	defineLazyInternal(inst, "optout", (zod) => zod.def.innerType?._zod?.optout);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then(handleReadonlyResult);
		return handleReadonlyResult(result);
	};
});
function handleReadonlyResult(payload) {
	if (!payload.memo) payload.value = Object.freeze(payload.value);
	return payload;
}
const $ZodCustom = /* @__PURE__ */ $constructor("$ZodCustom", (inst, def) => {
	$ZodCheck.init(inst, def);
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, _) => {
		return payload;
	};
	inst._zod.check = (payload) => {
		const input = payload.value;
		const r = def.fn(input);
		if (r instanceof Promise) return r.then((r$1) => handleRefineResult(r$1, payload, input, inst));
		handleRefineResult(r, payload, input, inst);
	};
});
function handleRefineResult(result, payload, input, inst) {
	if (!result) {
		const _iss = {
			code: "custom",
			input,
			inst,
			path: [...inst._zod.def.path ?? []],
			continue: !inst._zod.def.abort
		};
		if (inst._zod.def.params) _iss.params = inst._zod.def.params;
		payload.issues.push(issue(_iss));
	}
}

//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/memoizer.js
var $ZodCyclicError = class extends Error {
	constructor() {
		super(`Cannot parse a reference cycle that closes through a transform`);
		this.name = "ZodCyclicError";
	}
};
/** Keyed off the context object every schema in one parse call already shares. */
const STATE = "~memo";
const NO_ISSUES = [];
function isRef(value) {
	return value !== null && typeof value === "object";
}
function cloneIssues(issues) {
	return issues.map((iss) => iss.path ? {
		...iss,
		path: iss.path.slice()
	} : { ...iss });
}
const recursive = /* @__PURE__ */ new WeakMap();
/** What the walk established, in order of certainty: ordered so the strongest answer among children wins. */
const NONE = 0;
const ASSUMED = 1;
const PROVEN = 2;
/** Whether this schema's subtree contains a cycle, so one parse can re-enter it. */
function isRecursive(inst, stack$1, resolve) {
	const cached$1 = recursive.get(inst);
	if (cached$1 !== void 0) return cached$1 ? PROVEN : NONE;
	if (stack$1.has(inst)) return PROVEN;
	stack$1.add(inst);
	let result = NONE;
	const check = (child) => {
		if (result !== PROVEN && child?._zod) {
			const answer = isRecursive(child, stack$1, resolve);
			if (answer > result) result = answer;
		}
	};
	const shape = (sh, spread) => {
		let answer = NONE;
		for (const key$2 of Reflect.ownKeys(sh)) {
			const desc = Object.getOwnPropertyDescriptor(sh, key$2);
			if (spread && !desc.enumerable) continue;
			const child = desc.get ? ASSUMED : desc.value?._zod ? isRecursive(desc.value, stack$1, resolve) : NONE;
			if (child > answer) answer = child;
		}
		return answer;
	};
	const merge$2 = (answer) => {
		if (answer > result) result = answer;
	};
	const def = inst._zod.def;
	switch (def.type) {
		case "object": {
			const raw = rawShape(def);
			merge$2(raw ? shape(raw, true) : ASSUMED);
			check(def.catchall);
			break;
		}
		case "array":
			check(def.element);
			break;
		case "tuple":
			for (const el of def.items) check(el);
			check(def.rest);
			break;
		case "record":
		case "map":
			check(def.keyType);
			check(def.valueType);
			break;
		case "set":
			check(def.valueType);
			break;
		case "union":
			for (const el of def.options) check(el);
			break;
		case "intersection":
			check(def.left);
			check(def.right);
			break;
		case "optional":
		case "nullable":
		case "default":
		case "prefault":
		case "catch":
		case "readonly":
		case "nonoptional":
		case "promise":
		case "success":
			check(def.innerType);
			break;
		case "pipe":
			check(def.in);
			check(def.out);
			break;
		case "function":
			check(def.input);
			check(def.output);
			break;
		case "lazy": {
			const inner = def._cachedInner ?? (resolve ? inst._zod.innerType : void 0);
			merge$2(inner ? isRecursive(inner, stack$1, false) : ASSUMED);
			break;
		}
		case "template_literal":
		case "string":
		case "number":
		case "int":
		case "boolean":
		case "bigint":
		case "symbol":
		case "undefined":
		case "null":
		case "void":
		case "never":
		case "any":
		case "unknown":
		case "date":
		case "nan":
		case "enum":
		case "literal":
		case "file":
		case "transform":
		case "custom": break;
		default: for (const key$2 in def) {
			const desc = Object.getOwnPropertyDescriptor(def, key$2);
			if (!desc || desc.get) continue;
			const value = desc.value;
			if (!value || typeof value !== "object") continue;
			if (value._zod) check(value);
			else if (Array.isArray(value)) for (const el of value) check(el);
		}
	}
	stack$1.delete(inst);
	return settle(inst, result);
}
/** An assumed answer must not outlive the resolution that settles it, so only a certain one is cached. */
function settle(inst, answer) {
	if (answer !== ASSUMED) recursive.set(inst, answer === PROVEN);
	return answer;
}
function bucketFor(state, inst) {
	let bucket = state.buckets.get(inst);
	if (!bucket) {
		bucket = /* @__PURE__ */ new WeakMap();
		state.buckets.set(inst, bucket);
	}
	return bucket;
}
let handoff;
const open = [];
const memo = {
	alloc(_inst, payload, empty$1) {
		const bucket = handoff;
		if (!bucket) return empty$1;
		handoff = void 0;
		const entry = {
			value: empty$1,
			issues: null
		};
		bucket.set(payload.value, entry);
		open.push(entry);
		return empty$1;
	},
	guard(inst) {
		var _a$4;
		(_a$4 = inst._zod).deferred ?? (_a$4.deferred = []);
		inst._zod.deferred.push(() => {
			const base = inst._zod.parse;
			const wrapped = (payload, ctx) => {
				if (ctx.direction !== "backward" && isBackEdge(ctx, payload.value)) throw new $ZodCyclicError();
				return base(payload, ctx);
			};
			inst._zod.parse = wrapped;
			if (inst._zod.run === base) inst._zod.run = wrapped;
		});
	},
	attach(inst) {
		var _a$4;
		let isRecursiveInst;
		let rechecked = false;
		let lastCtx;
		let lastBucket;
		(_a$4 = inst._zod).deferred ?? (_a$4.deferred = []);
		inst._zod.deferred.push(() => {
			const base = inst._zod.parse;
			const wrapped = (payload, ctx) => {
				if (isRecursiveInst === void 0) {
					const walked = isRecursive(inst, /* @__PURE__ */ new Set(), false);
					if (walked === NONE) {
						inst._zod.parse = base;
						if (inst._zod.run === wrapped) inst._zod.run = base;
						return base(payload, ctx);
					}
					if (walked === PROVEN || rechecked) isRecursiveInst = true;
					else rechecked = true;
				}
				const input = payload.value;
				if (!isRef(input)) return base(payload, ctx);
				let state = ctx[STATE];
				if (!state) {
					state = {
						buckets: /* @__PURE__ */ new WeakMap(),
						backEdges: void 0
					};
					ctx[STATE] = state;
				}
				let bucket;
				if (lastCtx === ctx) bucket = lastBucket;
				else {
					bucket = bucketFor(state, inst);
					lastCtx = ctx;
					lastBucket = bucket;
				}
				const hit = bucket.get(input);
				if (hit) {
					payload.value = hit.value;
					if (hit.issues) {
						if (hit.issues.length) payload.issues.push(...cloneIssues(hit.issues));
					} else {
						payload.memo = true;
						state.backEdges ?? (state.backEdges = /* @__PURE__ */ new WeakSet());
						state.backEdges.add(hit.value);
					}
					return payload;
				}
				handoff = bucket;
				const depth = open.length;
				const result = base(payload, ctx);
				handoff = void 0;
				const entry = open.length > depth ? open.pop() : void 0;
				if (result instanceof Promise) return result.then((r) => {
					if (entry) entry.issues = r.issues.length ? cloneIssues(r.issues) : NO_ISSUES;
					return r;
				});
				if (entry) entry.issues = result.issues.length ? cloneIssues(result.issues) : NO_ISSUES;
				return result;
			};
			inst._zod.parse = wrapped;
			if (inst._zod.run === base) inst._zod.run = wrapped;
		});
	}
};
/** The memoizer that gives containers cycle support. `zod` installs it by default; `zod/mini` opts in with `config({ memoizer: memoizer() })`. */
function memoizer() {
	return memo;
}
/** Whether this value is a node a back-edge resolved to before it finished. */
function isBackEdge(ctx, value) {
	const backEdges = ctx[STATE]?.backEdges;
	return backEdges !== void 0 && isRef(value) && backEdges.has(value);
}

//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/locales/en.js
const error = () => {
	const Sizable = {
		string: {
			unit: "characters",
			verb: "to have"
		},
		file: {
			unit: "bytes",
			verb: "to have"
		},
		array: {
			unit: "items",
			verb: "to have"
		},
		set: {
			unit: "items",
			verb: "to have"
		},
		map: {
			unit: "entries",
			verb: "to have"
		}
	};
	function getSizing(origin) {
		return Sizable[origin] ?? null;
	}
	const FormatDictionary = {
		regex: "input",
		email: "email address",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO datetime",
		date: "ISO date",
		time: "ISO time",
		duration: "ISO duration",
		ipv4: "IPv4 address",
		ipv6: "IPv6 address",
		mac: "MAC address",
		cidrv4: "IPv4 range",
		cidrv6: "IPv6 range",
		base64: "base64-encoded string",
		base64url: "base64url-encoded string",
		json_string: "JSON string",
		e164: "E.164 number",
		currency_code: "currency code",
		credit_card: "credit card number",
		iban: "IBAN",
		jwt: "JWT",
		template_literal: "input"
	};
	const TypeDictionary = { nan: "NaN" };
	function getTypeName(type, input) {
		if (type === "number" && typeof input === "number" && !Number.isFinite(input)) return String(input);
		return TypeDictionary[type] ?? type;
	}
	return (issue$1) => {
		switch (issue$1.code) {
			case "invalid_type": return `Invalid input: expected ${getTypeName(issue$1.expected)}, received ${getTypeName(parsedType(issue$1.input), issue$1.input)}`;
			case "invalid_value":
				if (issue$1.values.length === 1) return `Invalid input: expected ${stringifyPrimitive(issue$1.values[0])}`;
				return `Invalid option: expected one of ${joinValues(issue$1.values, "|")}`;
			case "too_big": {
				const adj = issue$1.exact ? "exactly " : issue$1.inclusive ? "<=" : "<";
				const sizing = getSizing(issue$1.origin);
				if (sizing) return `Too big: expected ${issue$1.origin ?? "value"} to have ${adj}${issue$1.maximum.toString()} ${sizing.unit ?? "elements"}`;
				return `Too big: expected ${issue$1.origin ?? "value"} to be ${adj}${issue$1.maximum.toString()}`;
			}
			case "too_small": {
				const adj = issue$1.exact ? "exactly " : issue$1.inclusive ? ">=" : ">";
				const sizing = getSizing(issue$1.origin);
				if (sizing) return `Too small: expected ${issue$1.origin} to have ${adj}${issue$1.minimum.toString()} ${sizing.unit}`;
				return `Too small: expected ${issue$1.origin} to be ${adj}${issue$1.minimum.toString()}`;
			}
			case "invalid_format": {
				const _issue = issue$1;
				if (_issue.format === "starts_with") return `Invalid string: must start with "${_issue.prefix}"`;
				if (_issue.format === "ends_with") return `Invalid string: must end with "${_issue.suffix}"`;
				if (_issue.format === "includes") return `Invalid string: must include "${_issue.includes}"`;
				if (_issue.format === "regex") return `Invalid string: must match pattern ${_issue.pattern}`;
				return `Invalid ${FormatDictionary[_issue.format] ?? issue$1.format}`;
			}
			case "not_multiple_of": return `Invalid number: must be a multiple of ${issue$1.divisor}`;
			case "unrecognized_keys": return `Unrecognized key${issue$1.keys.length > 1 ? "s" : ""}: ${joinValues(issue$1.keys, ", ")}`;
			case "invalid_key": return `Invalid key in ${issue$1.origin}`;
			case "invalid_union":
				if (issue$1.options && Array.isArray(issue$1.options) && issue$1.options.length > 0) return `Invalid discriminator value. Expected ${issue$1.options.map((o) => `'${o}'`).join(" | ")}`;
				if (issue$1.inclusive === false) return "Invalid input: more than one option matched";
				return "Invalid input";
			case "invalid_element": return `Invalid value in ${issue$1.origin}`;
			default: return `Invalid input`;
		}
	};
};
function en_default() {
	return { localeError: error() };
}

//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/registries.js
var _a;
var $ZodRegistry = class {
	constructor() {
		this._map = /* @__PURE__ */ new WeakMap();
		this._idmap = /* @__PURE__ */ new Map();
	}
	add(schema, ..._meta) {
		const meta$2 = _meta[0];
		this._map.set(schema, meta$2);
		if (meta$2 && typeof meta$2 === "object" && "id" in meta$2) this._idmap.set(meta$2.id, schema);
		return this;
	}
	clear() {
		this._map = /* @__PURE__ */ new WeakMap();
		this._idmap = /* @__PURE__ */ new Map();
		return this;
	}
	remove(schema) {
		const meta$2 = this._map.get(schema);
		if (meta$2 && typeof meta$2 === "object" && "id" in meta$2) this._idmap.delete(meta$2.id);
		this._map.delete(schema);
		return this;
	}
	get(schema) {
		const p = schema._zod.parent;
		if (p) {
			const pm = { ...this.get(p) ?? {} };
			delete pm.id;
			const f = {
				...pm,
				...this._map.get(schema)
			};
			return Object.keys(f).length ? f : void 0;
		}
		return this._map.get(schema);
	}
	has(schema) {
		return this._map.has(schema);
	}
};
function registry() {
	return new $ZodRegistry();
}
(_a = globalThis).__zod_globalRegistry ?? (_a.__zod_globalRegistry = registry());
const globalRegistry = globalThis.__zod_globalRegistry;

//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/api.js
function snapshotChecks(def) {
	if (def.checks) def.checks = [...def.checks];
	return def;
}
/* @__NO_SIDE_EFFECTS__ */
function _string(Class, params) {
	return new Class(snapshotChecks({
		type: "string",
		...normalizeParams(params)
	}));
}
/* @__NO_SIDE_EFFECTS__ */
function _email(Class, params) {
	return new Class({
		type: "string",
		format: "email",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _guid(Class, params) {
	return new Class({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _uuid(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _uuidv4(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		version: "v4",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _uuidv6(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		version: "v6",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _uuidv7(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		version: "v7",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _url(Class, params) {
	return new Class({
		type: "string",
		format: "url",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _emoji(Class, params) {
	return new Class({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _nanoid(Class, params) {
	return new Class({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/**
* @deprecated CUID v1 is deprecated by its authors due to information leakage
* (timestamps embedded in the id). Use {@link _cuid2} instead.
* See https://github.com/paralleldrive/cuid.
*/
/* @__NO_SIDE_EFFECTS__ */
function _cuid(Class, params) {
	return new Class({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _cuid2(Class, params) {
	return new Class({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _ulid(Class, params) {
	return new Class({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _xid(Class, params) {
	return new Class({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _ksuid(Class, params) {
	return new Class({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _ipv4(Class, params) {
	return new Class({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _ipv6(Class, params) {
	return new Class({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _cidrv4(Class, params) {
	return new Class({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _cidrv6(Class, params) {
	return new Class({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _base64(Class, params) {
	return new Class({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _base64url(Class, params) {
	return new Class({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _e164(Class, params) {
	return new Class({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _jwt(Class, params) {
	return new Class({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _isoDateTime(Class, params) {
	return new Class({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: false,
		local: false,
		precision: null,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _isoDate(Class, params) {
	return new Class({
		type: "string",
		format: "date",
		check: "string_format",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _isoTime(Class, params) {
	return new Class({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _isoDuration(Class, params) {
	return new Class({
		type: "string",
		format: "duration",
		check: "string_format",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _number(Class, params) {
	return new Class(snapshotChecks({
		type: "number",
		checks: [],
		...normalizeParams(params)
	}));
}
/* @__NO_SIDE_EFFECTS__ */
function _int(Class, params) {
	return new Class({
		type: "number",
		check: "number_format",
		abort: false,
		format: "safeint",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _boolean(Class, params) {
	return new Class({
		type: "boolean",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _unknown(Class) {
	return new Class({ type: "unknown" });
}
/* @__NO_SIDE_EFFECTS__ */
function _never(Class, params) {
	return new Class({
		type: "never",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _lt(value, params) {
	return new $ZodCheckLessThan({
		check: "less_than",
		...normalizeParams(params),
		value,
		inclusive: false
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _lte(value, params) {
	return new $ZodCheckLessThan({
		check: "less_than",
		...normalizeParams(params),
		value,
		inclusive: true
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _gt(value, params) {
	return new $ZodCheckGreaterThan({
		check: "greater_than",
		...normalizeParams(params),
		value,
		inclusive: false
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _gte(value, params) {
	return new $ZodCheckGreaterThan({
		check: "greater_than",
		...normalizeParams(params),
		value,
		inclusive: true
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _multipleOf(value, params) {
	return new $ZodCheckMultipleOf({
		check: "multiple_of",
		...normalizeParams(params),
		value
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _maxLength(maximum, params) {
	return new $ZodCheckMaxLength({
		check: "max_length",
		...normalizeParams(params),
		maximum
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _minLength(minimum, params) {
	return new $ZodCheckMinLength({
		check: "min_length",
		...normalizeParams(params),
		minimum
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _length(length, params) {
	return new $ZodCheckLengthEquals({
		check: "length_equals",
		...normalizeParams(params),
		length
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _regex(pattern, params) {
	return new $ZodCheckRegex({
		check: "string_format",
		format: "regex",
		...normalizeParams(params),
		pattern
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _lowercase(params) {
	return new $ZodCheckLowerCase({
		check: "string_format",
		format: "lowercase",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _uppercase(params) {
	return new $ZodCheckUpperCase({
		check: "string_format",
		format: "uppercase",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _includes(includes, params) {
	return new $ZodCheckIncludes({
		check: "string_format",
		format: "includes",
		...normalizeParams(params),
		includes
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _startsWith(prefix, params) {
	return new $ZodCheckStartsWith({
		check: "string_format",
		format: "starts_with",
		...normalizeParams(params),
		prefix
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _endsWith(suffix, params) {
	return new $ZodCheckEndsWith({
		check: "string_format",
		format: "ends_with",
		...normalizeParams(params),
		suffix
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _overwrite(tx) {
	return new $ZodCheckOverwrite({
		check: "overwrite",
		tx
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _normalize(form) {
	return /* @__PURE__ */ _overwrite((input) => input.normalize(form));
}
/* @__NO_SIDE_EFFECTS__ */
function _trim() {
	return /* @__PURE__ */ _overwrite((input) => input.trim());
}
/* @__NO_SIDE_EFFECTS__ */
function _toLowerCase() {
	return /* @__PURE__ */ _overwrite((input) => input.toLowerCase());
}
/* @__NO_SIDE_EFFECTS__ */
function _toUpperCase() {
	return /* @__PURE__ */ _overwrite((input) => input.toUpperCase());
}
/* @__NO_SIDE_EFFECTS__ */
function _slugify() {
	return /* @__PURE__ */ _overwrite((input) => slugify(input));
}
/* @__NO_SIDE_EFFECTS__ */
function _array(Class, element, params) {
	return new Class({
		type: "array",
		element,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _refine(Class, fn$1, _params) {
	return new Class({
		type: "custom",
		check: "custom",
		fn: fn$1,
		...normalizeParams(_params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _superRefine(fn$1, params) {
	const ch = /* @__PURE__ */ _check((payload) => {
		payload.addIssue = (issue$1) => {
			if (typeof issue$1 === "string") payload.issues.push(issue(issue$1, payload.value, ch._zod.def));
			else {
				const _issue = issue$1;
				if (_issue.fatal) _issue.continue = false;
				_issue.code ?? (_issue.code = "custom");
				if (!("input" in _issue)) _issue.input = payload.value;
				_issue.inst ?? (_issue.inst = ch);
				_issue.continue ?? (_issue.continue = !ch._zod.def.abort);
				payload.issues.push(issue(_issue));
			}
		};
		return fn$1(payload.value, payload);
	}, params);
	return ch;
}
/* @__NO_SIDE_EFFECTS__ */
function _check(fn$1, params) {
	const ch = new $ZodCheck({
		check: "custom",
		...normalizeParams(params)
	});
	ch._zod.check = fn$1;
	return ch;
}
/* @__NO_SIDE_EFFECTS__ */
function describe$1(description) {
	const ch = new $ZodCheck({ check: "describe" });
	ch._zod.onattach = [(inst) => {
		const existing = globalRegistry.get(inst) ?? {};
		globalRegistry.add(inst, {
			...existing,
			description
		});
	}];
	ch._zod.check = () => {};
	return ch;
}
/* @__NO_SIDE_EFFECTS__ */
function meta$1(metadata) {
	const ch = new $ZodCheck({ check: "meta" });
	ch._zod.onattach = [(inst) => {
		const existing = globalRegistry.get(inst) ?? {};
		globalRegistry.add(inst, {
			...existing,
			...metadata
		});
	}];
	ch._zod.check = () => {};
	return ch;
}

//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/to-json-schema.js
function assignProps(target, ...sources) {
	for (const source$1 of sources) for (const key$2 of Reflect.ownKeys(source$1)) if (Object.prototype.propertyIsEnumerable.call(source$1, key$2)) assignProp(target, key$2, source$1[key$2]);
	return target;
}
function initializeContext(params) {
	let target = params?.target ?? "draft-2020-12";
	if (target === "draft-4") target = "draft-04";
	if (target === "draft-7") target = "draft-07";
	return {
		processors: params.processors ?? {},
		metadataRegistry: params?.metadata ?? globalRegistry,
		target,
		unrepresentable: params?.unrepresentable ?? "throw",
		override: params?.override ?? (() => {}),
		io: params?.io ?? "output",
		counter: 0,
		seen: /* @__PURE__ */ new Map(),
		sharedDefsExtractedFor: void 0,
		sharedEmitDoneFor: void 0,
		cycles: params?.cycles ?? "ref",
		reused: params?.reused ?? "inline",
		intersections: [],
		deferred: [],
		external: params?.external ?? void 0
	};
}
/**
* Applies the `unrepresentable` setting at a site that has no JSON Schema equivalent. Throws
* `message` unless the setting (or the handler's return value) says otherwise. Returns `true` if a
* custom JSON Schema was written into `json`, in which case the caller must not write its own.
*/
function handleUnrepresentable(schema, ctx, json, params, message) {
	const result = typeof ctx.unrepresentable === "function" ? ctx.unrepresentable({
		zodSchema: schema,
		path: params.path,
		message
	}) : ctx.unrepresentable;
	if (result === "any") return false;
	if (result === void 0 || result === "throw") throw new Error(message);
	Object.assign(json, result);
	return true;
}
function processSchema(schema, ctx, _params = {
	path: [],
	schemaPath: []
}) {
	var _a$4;
	const def = schema._zod.def;
	const seen = ctx.seen.get(schema);
	if (seen) {
		seen.count++;
		if (_params.schemaPath.includes(schema)) seen.cycle = _params.path;
		return seen.schema;
	}
	const result = {
		schema: {},
		count: 1,
		cycle: void 0,
		path: _params.path
	};
	ctx.seen.set(schema, result);
	ctx.sharedDefsExtractedFor = void 0;
	ctx.sharedEmitDoneFor = void 0;
	const overrideSchema = schema._zod.toJSONSchema?.();
	if (overrideSchema) result.schema = overrideSchema;
	else {
		const params = {
			..._params,
			schemaPath: [..._params.schemaPath, schema],
			path: _params.path
		};
		if (schema._zod.processJSONSchema) schema._zod.processJSONSchema(ctx, result.schema, params);
		else {
			const _json = result.schema;
			const processor = ctx.processors[def.type];
			if (!processor) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
			processor(schema, ctx, _json, params);
		}
		const parent$1 = schema._zod.parent;
		if (parent$1) {
			if (!result.ref) result.ref = parent$1;
			processSchema(parent$1, ctx, params);
			ctx.seen.get(parent$1).isParent = true;
		}
	}
	const meta$2 = ctx.metadataRegistry.get(schema);
	if (meta$2) assignProps(result.schema, meta$2);
	if (ctx.io === "input" && isTransforming(schema)) {
		delete result.schema.examples;
		delete result.schema.default;
	}
	if (ctx.io === "input" && "_prefault" in result.schema) (_a$4 = result.schema).default ?? (_a$4.default = result.schema._prefault);
	delete result.schema._prefault;
	return ctx.seen.get(schema).schema;
}
function encodeJSONPointerSegment(segment) {
	return segment.replace(/~/g, "~0").replace(/\//g, "~1");
}
function extractDefs(ctx, schema) {
	const root$2 = ctx.seen.get(schema);
	if (!root$2) throw new Error("Unprocessed schema. This is a bug in Zod.");
	if (ctx.external && ctx.sharedDefsExtractedFor === ctx.external) return;
	const idToSchema = /* @__PURE__ */ new Map();
	for (const entry of ctx.seen.entries()) {
		const id = ctx.metadataRegistry.get(entry[0])?.id;
		if (id) {
			const existing = idToSchema.get(id);
			if (existing && existing !== entry[0]) throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
			idToSchema.set(id, entry[0]);
		}
	}
	const makeURI = (entry) => {
		const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
		if (ctx.external) {
			const externalId = ctx.external.registry.get(entry[0])?.id;
			const uriGenerator = ctx.external.uri ?? ((id$1) => id$1);
			if (externalId) return { ref: uriGenerator(externalId) };
			const id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
			entry[1].defId = id;
			return {
				defId: id,
				ref: `${uriGenerator("__shared")}#/${defsSegment}/${encodeJSONPointerSegment(id)}`
			};
		}
		const uriPrefix = `#`;
		const defUriPrefix = `${uriPrefix}/${defsSegment}/`;
		if (entry[1] === root$2 && !entry[1].schema.id) return { ref: uriPrefix };
		const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
		return {
			defId,
			ref: defUriPrefix + encodeJSONPointerSegment(defId)
		};
	};
	const extractToDef = (entry) => {
		if (entry[1].schema.$ref) return;
		const seen = entry[1];
		const { ref, defId } = makeURI(entry);
		seen.def = { ...seen.schema };
		if (defId) seen.defId = defId;
		const schema$1 = seen.schema;
		for (const key$2 in schema$1) delete schema$1[key$2];
		schema$1.$ref = ref;
	};
	if (ctx.cycles === "throw") for (const entry of ctx.seen.entries()) {
		const seen = entry[1];
		if (seen.cycle) throw new Error(`Cycle detected: #/${seen.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
	}
	for (const entry of ctx.seen.entries()) {
		const seen = entry[1];
		if (schema === entry[0]) {
			extractToDef(entry);
			continue;
		}
		if (ctx.external) {
			const ext = ctx.external.registry.get(entry[0])?.id;
			if (schema !== entry[0] && ext) {
				extractToDef(entry);
				continue;
			}
		}
		if (ctx.metadataRegistry.get(entry[0])?.id) {
			extractToDef(entry);
			continue;
		}
		if (seen.cycle) {
			extractToDef(entry);
			continue;
		}
		if (seen.count > 1) {
			if (ctx.reused === "ref") extractToDef(entry);
		}
	}
	if (ctx.external) ctx.sharedDefsExtractedFor = ctx.external;
}
/** Rewrites `anyOf: [{type: "a"}, {type: "b"}]` to `type: ["a", "b"]`, which every JSON Schema draft treats as equivalent and most consumers render far better for the nullable case. Only branches that are a bare type assertion qualify — anything carrying a constraint, `$ref`, `const` or metadata is left alone. Runs after `flattenRef`, so a branch an override decorated or `$defs` extraction turned into a `$ref` is no longer bare and correctly stays in `anyOf`. `oneOf` is excluded: `integer` and `number` overlap, so "exactly one" and "at least one" are not the same there. OpenAPI 3.0 is excluded: its `type` must be a single string. */
function compactTypeUnion(schema) {
	const options = schema.anyOf;
	if (!Array.isArray(options) || options.length === 0 || schema.type !== void 0) return;
	const types$1 = [];
	for (const option of options) {
		if (!option || typeof option !== "object") return;
		compactTypeUnion(option);
		const keys = Object.keys(option);
		if (keys.length !== 1 || keys[0] !== "type") return;
		const type = option.type;
		for (const member of Array.isArray(type) ? type : [type]) {
			if (typeof member !== "string") return;
			if (!types$1.includes(member)) types$1.push(member);
		}
	}
	delete schema.anyOf;
	schema.type = types$1.length === 1 ? types$1[0] : types$1;
}
/** Keywords `foldIntersection` knows how to combine. Anything else — `$ref`, `patternProperties`,
* an annotation like `description` — makes a member unfoldable, so a constraint this does not
* understand leaves the `allOf` alone instead of being silently dropped or misattributed. */
const FOLDABLE_KEYS = new Set([
	"type",
	"properties",
	"required",
	"additionalProperties"
]);
const UNION_KEYS = ["oneOf", "anyOf"];
/** A member's constraint on a key it does not declare itself. A `catchall` states one; `false`, an absent `additionalProperties`, and the empty schema a loose object emits state nothing. */
function undeclaredConstraint(member) {
	const extra = member.additionalProperties;
	if (extra === void 0 || extra === false || typeof extra !== "object" || extra === null) return null;
	return Object.keys(extra).length ? extra : null;
}
/** Combines object members into the single object they describe together, or returns `null` if any of them carries a keyword outside {@link FOLDABLE_KEYS}. */
function foldObjects(members$1) {
	const objects = [];
	for (const member of members$1) {
		if (typeof member !== "object" || member.type !== "object") return null;
		for (const key$2 in member) if (!FOLDABLE_KEYS.has(key$2)) return null;
		objects.push(member);
	}
	const properties = {};
	const required$1 = /* @__PURE__ */ new Set();
	for (const object$1 of objects) {
		for (const key$2 in object$1.properties) {
			if (Object.prototype.hasOwnProperty.call(properties, key$2)) continue;
			const parts = [];
			for (const other of objects) {
				const part = other.properties?.[key$2] ?? undeclaredConstraint(other);
				if (part === null || part === void 0) continue;
				if (!parts.some((seen) => JSON.stringify(seen) === JSON.stringify(part))) parts.push(part);
			}
			assignProp(properties, key$2, parts.length === 1 ? parts[0] : foldObjects(parts) ?? { allOf: parts });
		}
		for (const key$2 of object$1.required ?? []) required$1.add(key$2);
	}
	const folded = {
		type: "object",
		properties
	};
	if (required$1.size) folded.required = [...required$1];
	if (objects.every((object$1) => object$1.additionalProperties === false)) folded.additionalProperties = false;
	else {
		const constraints = [];
		for (const object$1 of objects) {
			const constraint = undeclaredConstraint(object$1);
			if (constraint && !constraints.some((seen) => JSON.stringify(seen) === JSON.stringify(constraint))) constraints.push(constraint);
		}
		if (constraints.length === 1) folded.additionalProperties = constraints[0];
		else if (constraints.length > 1) folded.additionalProperties = { allOf: constraints };
	}
	return folded;
}
/** `additionalProperties` in an `allOf` member sees only that member's own `properties`, so two
* closed object members reject each other's keys and the schema validates nothing. Zod's parser
* pools the key sets instead — `handleIntersectionResults` reports a key as unrecognized only when
* *every* side rejects it — so the emitted schema has to pool them too, and folding the members
* into one object is the encoding that says so on every target.
*
* This runs from `finalize`, after `extractDefs`, which is what keeps it clear of the `$ref`
* machinery: a member extracted into `$defs` is already a `$ref` by now and declines to fold, so it
* keeps its reference and its own closedness rather than being inlined as a stale copy. */
function foldIntersection(json) {
	const allOf = json.allOf;
	if (!Array.isArray(allOf) || allOf.length < 2) return;
	for (const key$2 of FOLDABLE_KEYS) if (key$2 in json) return;
	const unions = allOf.filter((m) => UNION_KEYS.some((k) => Array.isArray(m[k])));
	let folded = null;
	if (!unions.length) folded = foldObjects(allOf);
	else {
		const union$1 = unions[0];
		const keyword = UNION_KEYS.find((k) => Array.isArray(union$1[k]));
		if (Object.keys(union$1).length !== 1) return;
		const rest = allOf.filter((m) => m !== union$1);
		const branches = union$1[keyword].map((branch) => foldObjects([...rest, branch]));
		if (branches.some((b) => !b)) return;
		folded = { [keyword]: branches };
	}
	if (!folded) return;
	delete json.allOf;
	assignProps(json, folded);
}
function finalize(ctx, schema) {
	const root$2 = ctx.seen.get(schema);
	if (!root$2) throw new Error("Unprocessed schema. This is a bug in Zod.");
	const flattenRef = (zodSchema) => {
		const seen = ctx.seen.get(zodSchema);
		if (seen.ref === null) return;
		const schema$1 = seen.def ?? seen.schema;
		const _cached = { ...schema$1 };
		const ref = seen.ref;
		seen.ref = null;
		if (ref) {
			flattenRef(ref);
			const refSeen = ctx.seen.get(ref);
			const refSchema = refSeen.schema;
			if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
				schema$1.allOf = schema$1.allOf ?? [];
				schema$1.allOf.push(refSchema);
			} else assignProps(schema$1, refSchema);
			assignProps(schema$1, _cached);
			if (zodSchema._zod.parent === ref) for (const key$2 in schema$1) {
				if (key$2 === "$ref" || key$2 === "allOf") continue;
				if (!(key$2 in _cached)) delete schema$1[key$2];
			}
			if (refSchema.$ref && refSeen.def) for (const key$2 in schema$1) {
				if (key$2 === "$ref" || key$2 === "allOf") continue;
				if (key$2 in refSeen.def && JSON.stringify(schema$1[key$2]) === JSON.stringify(refSeen.def[key$2])) delete schema$1[key$2];
			}
		}
		const parent$1 = zodSchema._zod.parent;
		if (parent$1 && parent$1 !== ref) {
			flattenRef(parent$1);
			const parentSeen = ctx.seen.get(parent$1);
			if (parentSeen?.schema.$ref) {
				schema$1.$ref = parentSeen.schema.$ref;
				if (parentSeen.def) for (const key$2 in schema$1) {
					if (key$2 === "$ref" || key$2 === "allOf") continue;
					if (key$2 in parentSeen.def && JSON.stringify(schema$1[key$2]) === JSON.stringify(parentSeen.def[key$2])) delete schema$1[key$2];
				}
			}
		}
		ctx.override({
			zodSchema,
			jsonSchema: schema$1,
			path: seen.path ?? []
		});
	};
	if (!ctx.external || ctx.sharedEmitDoneFor !== ctx.external) {
		for (const entry of [...ctx.seen.entries()].reverse()) flattenRef(entry[0]);
		if (ctx.target !== "openapi-3.0") for (const entry of ctx.seen.entries()) compactTypeUnion(entry[1].def ?? entry[1].schema);
		for (const rewrite of ctx.deferred) rewrite();
		if (ctx.intersections.length) {
			const carriers = /* @__PURE__ */ new Map();
			for (const seen of ctx.seen.values()) for (const json of [seen.schema, seen.def]) {
				const allOf = json?.allOf;
				if (!Array.isArray(allOf)) continue;
				const existing = carriers.get(allOf);
				if (existing) existing.push(json);
				else carriers.set(allOf, [json]);
			}
			for (const allOf of ctx.intersections) for (const json of carriers.get(allOf) ?? []) foldIntersection(json);
		}
	}
	const result = {};
	if (ctx.target === "draft-2020-12") result.$schema = "https://json-schema.org/draft/2020-12/schema";
	else if (ctx.target === "draft-07") result.$schema = "http://json-schema.org/draft-07/schema#";
	else if (ctx.target === "draft-04") result.$schema = "http://json-schema.org/draft-04/schema#";
	else if (ctx.target === "openapi-3.0") {}
	if (ctx.external?.uri) {
		const id = ctx.external.registry.get(schema)?.id;
		if (!id) throw new Error("Schema is missing an `id` property");
		result.$id = ctx.external.uri(id);
	}
	assignProps(result, root$2.defId ? root$2.schema : root$2.def ?? root$2.schema);
	const rootMetaId = ctx.metadataRegistry.get(schema)?.id;
	if (rootMetaId !== void 0 && result.id === rootMetaId) delete result.id;
	const defs = ctx.external?.defs ?? {};
	if (!ctx.external || ctx.sharedEmitDoneFor !== ctx.external) for (const entry of ctx.seen.entries()) {
		const seen = entry[1];
		if (seen.def && seen.defId) {
			if (seen.def.id === seen.defId) delete seen.def.id;
			assignProp(defs, seen.defId, seen.def);
		}
	}
	if (ctx.external) ctx.sharedEmitDoneFor = ctx.external;
	if (ctx.external) {} else if (Object.keys(defs).length > 0) if (ctx.target === "draft-2020-12") result.$defs = defs;
	else result.definitions = defs;
	try {
		const finalized = JSON.parse(JSON.stringify(result));
		Object.defineProperty(finalized, "~standard", {
			value: {
				...schema["~standard"],
				jsonSchema: {
					input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
					output: createStandardJSONSchemaMethod(schema, "output", ctx.processors)
				}
			},
			enumerable: false,
			writable: false
		});
		return finalized;
	} catch (_err) {
		throw new Error("Error converting schema to JSON.");
	}
}
function isTransforming(_schema, _ctx) {
	const ctx = _ctx ?? { seen: /* @__PURE__ */ new Set() };
	if (ctx.seen.has(_schema)) return false;
	ctx.seen.add(_schema);
	const def = _schema._zod.def;
	if (def.type === "transform") return true;
	if (def.type === "array") return isTransforming(def.element, ctx);
	if (def.type === "set") return isTransforming(def.valueType, ctx);
	if (def.type === "lazy") return isTransforming(def.getter(), ctx);
	if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault" || def.type === "catch") return isTransforming(def.innerType, ctx);
	if (def.type === "intersection") return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
	if (def.type === "record" || def.type === "map") return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
	if (def.type === "pipe") {
		if (_schema._zod.traits.has("$ZodCodec")) return true;
		return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
	}
	if (def.type === "object") {
		for (const key$2 in def.shape) if (isTransforming(def.shape[key$2], ctx)) return true;
		return false;
	}
	if (def.type === "union") {
		for (const option of def.options) if (isTransforming(option, ctx)) return true;
		return false;
	}
	if (def.type === "tuple") {
		for (const item of def.items) if (isTransforming(item, ctx)) return true;
		if (def.rest && isTransforming(def.rest, ctx)) return true;
		return false;
	}
	return false;
}
/**
* Creates a toJSONSchema method for a schema instance.
* This encapsulates the logic of initializing context, processing, extracting defs, and finalizing.
*/
const createToJSONSchemaMethod = (schema, processors = {}) => (params) => {
	const ctx = initializeContext({
		...params,
		processors
	});
	processSchema(schema, ctx);
	extractDefs(ctx, schema);
	return finalize(ctx, schema);
};
const createStandardJSONSchemaMethod = (schema, io, processors = {}) => (params) => {
	const { libraryOptions, target } = params ?? {};
	const ctx = initializeContext({
		...libraryOptions ?? {},
		target,
		io,
		processors
	});
	processSchema(schema, ctx);
	extractDefs(ctx, schema);
	return finalize(ctx, schema);
};

//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/json-schema-processors.js
const narrowMin = (agg, key$2, value) => {
	if (agg[key$2] === void 0 || value > agg[key$2]) agg[key$2] = value;
};
const narrowMax = (agg, key$2, value) => {
	if (agg[key$2] === void 0 || value < agg[key$2]) agg[key$2] = value;
};
const narrowBoth = (agg, value) => {
	narrowMin(agg, "minimum", value);
	narrowMax(agg, "maximum", value);
};
const addDivisor = (agg, value) => {
	agg.multipleOf ?? (agg.multipleOf = []);
	if (!agg.multipleOf.includes(value)) agg.multipleOf.push(value);
};
const addPattern = (agg, pattern) => {
	agg.patterns ?? (agg.patterns = /* @__PURE__ */ new Set());
	agg.patterns.add(pattern);
};
const intersectMime = (agg, mime) => {
	agg.mime = agg.mime ? agg.mime.filter((m) => mime.includes(m)) : [...mime];
};
const setFormat = (agg, format) => {
	agg.format = format;
	if (format.includes("int")) agg.isInt = true;
};
const minContributor = (agg, def) => narrowMin(agg, "minimum", def.minimum);
const maxContributor = (agg, def) => narrowMax(agg, "maximum", def.maximum);
const formatContributor = (ranges) => (agg, def) => {
	setFormat(agg, def.format);
	const [minimum, maximum] = ranges[def.format];
	narrowMin(agg, "minimum", minimum);
	narrowMax(agg, "maximum", maximum);
};
const contributors = {
	greater_than: (agg, def) => narrowMin(agg, def.inclusive ? "minimum" : "exclusiveMinimum", def.value),
	less_than: (agg, def) => narrowMax(agg, def.inclusive ? "maximum" : "exclusiveMaximum", def.value),
	multiple_of: (agg, def) => addDivisor(agg, def.value),
	number_format: formatContributor(NUMBER_FORMAT_RANGES),
	bigint_format: formatContributor(BIGINT_FORMAT_RANGES),
	min_length: minContributor,
	max_length: maxContributor,
	length_equals: (agg, def) => narrowBoth(agg, def.length),
	min_size: minContributor,
	max_size: maxContributor,
	size_equals: (agg, def) => narrowBoth(agg, def.size),
	string_format: (agg, def) => {
		setFormat(agg, def.format);
		if (def.pattern) addPattern(agg, def.pattern);
		if (def.format === "base64" || def.format === "base64url") agg.contentEncoding = def.format;
		if (def.local || def.precision === -1) agg.laxFormat = true;
	},
	mime_type: (agg, def) => intersectMime(agg, def.mime)
};
function aggregateChecks(schema) {
	const agg = {};
	const def = schema._zod.def;
	const list = schema._zod.traits.has("$ZodCheck") ? [schema, ...def.checks ?? []] : def.checks ?? [];
	for (const ch of list) contributors[ch._zod.def.check]?.(agg, ch._zod.def);
	const bag = schema._zod.bag;
	if (bag.minimum !== void 0) narrowMin(agg, "minimum", bag.minimum);
	if (bag.exclusiveMinimum !== void 0) narrowMin(agg, "exclusiveMinimum", bag.exclusiveMinimum);
	if (bag.maximum !== void 0) narrowMax(agg, "maximum", bag.maximum);
	if (bag.exclusiveMaximum !== void 0) narrowMax(agg, "exclusiveMaximum", bag.exclusiveMaximum);
	if (bag.multipleOf !== void 0) addDivisor(agg, bag.multipleOf);
	if (bag.format !== void 0) {
		agg.format ?? (agg.format = bag.format);
		if (bag.format.includes("int")) agg.isInt = true;
	}
	if (bag.mime) intersectMime(agg, bag.mime);
	for (const pattern of bag.patterns ?? []) addPattern(agg, pattern);
	return agg;
}
const formatMap = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
};
const exactPatterns = new Map([[base64Charset, base64], [base64urlCharset, base64url]]);
const exactPattern = (p) => exactPatterns.get(p) ?? p;
const stringProcessor = (schema, ctx, _json, _params) => {
	const json = _json;
	json.type = "string";
	const { minimum, maximum, format, patterns, contentEncoding, laxFormat } = aggregateChecks(schema);
	if (typeof minimum === "number") json.minLength = minimum;
	if (typeof maximum === "number") json.maxLength = maximum;
	if (format) {
		json.format = formatMap[format] ?? format;
		if (json.format === "") delete json.format;
		if (format === "time" || laxFormat) delete json.format;
	}
	if (contentEncoding) json.contentEncoding = contentEncoding;
	if (patterns && patterns.size > 0) {
		const patternList = [...patterns].map(exactPattern);
		if (patternList.length === 1) json.pattern = patternList[0].source;
		else if (patternList.length > 1) json.allOf = [...patternList.map((regex) => ({
			...ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? { type: "string" } : {},
			pattern: regex.source
		}))];
	}
};
const numberProcessor = (schema, ctx, _json, params) => {
	const json = _json;
	const { minimum, maximum, multipleOf, exclusiveMaximum, exclusiveMinimum, isInt } = aggregateChecks(schema);
	json.type = isInt ? "integer" : "number";
	const exMin = typeof exclusiveMinimum === "number" && exclusiveMinimum >= (minimum ?? Number.NEGATIVE_INFINITY);
	const exMax = typeof exclusiveMaximum === "number" && exclusiveMaximum <= (maximum ?? Number.POSITIVE_INFINITY);
	const legacy = ctx.target === "draft-04" || ctx.target === "openapi-3.0";
	if (exMin) if (legacy) {
		json.minimum = exclusiveMinimum;
		json.exclusiveMinimum = true;
	} else json.exclusiveMinimum = exclusiveMinimum;
	else if (typeof minimum === "number") json.minimum = minimum;
	if (exMax) if (legacy) {
		json.maximum = exclusiveMaximum;
		json.exclusiveMaximum = true;
	} else json.exclusiveMaximum = exclusiveMaximum;
	else if (typeof maximum === "number") json.maximum = maximum;
	if (multipleOf) {
		const divisors = /* @__PURE__ */ new Set();
		for (const divisor of multipleOf) if (Number.isFinite(divisor) && divisor !== 0) divisors.add(Math.abs(divisor));
		else handleUnrepresentable(schema, ctx, json, params, `A multipleOf divisor of ${divisor} cannot be represented in JSON Schema`);
		const [first$1, ...rest] = divisors;
		if (first$1 !== void 0) json.multipleOf = first$1;
		if (rest.length) json.allOf = [...json.allOf ?? [], ...rest.map((m) => ({ multipleOf: m }))];
	}
};
const booleanProcessor = (_schema, _ctx, json, _params) => {
	json.type = "boolean";
};
const neverProcessor = (_schema, _ctx, json, _params) => {
	json.not = {};
};
const unknownProcessor = (_schema, _ctx, _json, _params) => {};
const enumProcessor = (schema, _ctx, json, _params) => {
	const def = schema._zod.def;
	const values = getEnumValues(def.entries);
	if (values.length === 0) {
		json.not = {};
		return;
	}
	if (values.every((v) => typeof v === "number")) json.type = "number";
	if (values.every((v) => typeof v === "string")) json.type = "string";
	json.enum = values;
};
const customProcessor = (schema, ctx, json, params) => {
	handleUnrepresentable(schema, ctx, json, params, "Custom types cannot be represented in JSON Schema");
};
const transformProcessor = (schema, ctx, json, params) => {
	handleUnrepresentable(schema, ctx, json, params, "Transforms cannot be represented in JSON Schema");
};
const arrayProcessor = (schema, ctx, _json, params) => {
	const json = _json;
	const def = schema._zod.def;
	const { minimum, maximum } = aggregateChecks(schema);
	if (typeof minimum === "number") json.minItems = minimum;
	if (typeof maximum === "number") json.maxItems = maximum;
	json.type = "array";
	json.items = processSchema(def.element, ctx, {
		...params,
		path: [...params.path, "items"]
	});
};
function inputOptin(schema) {
	const def = schema._zod.def;
	if (def.type === "pipe" && def.in._zod.traits.has("$ZodTransform")) return inputOptin(def.out);
	if (def.type === "catch") return inputOptin(def.innerType);
	return schema._zod.optin;
}
const objectProcessor = (schema, ctx, _json, params) => {
	const json = _json;
	const def = schema._zod.def;
	const shape = def.shape;
	if (Object.getOwnPropertySymbols(shape).length && handleUnrepresentable(schema, ctx, json, params, "Symbol keys cannot be represented in JSON Schema")) return;
	json.type = "object";
	json.properties = {};
	for (const key$2 in shape) assignProp(json.properties, key$2, processSchema(shape[key$2], ctx, {
		...params,
		path: [
			...params.path,
			"properties",
			key$2
		]
	}));
	const requiredKeys = [];
	for (const key$2 of Object.keys(shape)) {
		const field$1 = def.shape[key$2];
		if (ctx.io === "input" ? inputOptin(field$1) === void 0 : field$1._zod.optout === void 0) requiredKeys.push(key$2);
	}
	if (requiredKeys.length > 0) json.required = requiredKeys;
	if (def.catchall?._zod.def.type === "never") json.additionalProperties = false;
	else if (!def.catchall) {
		if (ctx.io === "output") json.additionalProperties = false;
	} else if (def.catchall) json.additionalProperties = processSchema(def.catchall, ctx, {
		...params,
		path: [...params.path, "additionalProperties"]
	});
};
const unionProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	const isExclusive = def.inclusive === false;
	const options = def.options.map((x, i$1) => processSchema(x, ctx, {
		...params,
		path: [
			...params.path,
			isExclusive ? "oneOf" : "anyOf",
			i$1
		]
	}));
	if (isExclusive) json.oneOf = options;
	else json.anyOf = options;
};
const intersectionProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	const a = processSchema(def.left, ctx, {
		...params,
		path: [
			...params.path,
			"allOf",
			0
		]
	});
	const b = processSchema(def.right, ctx, {
		...params,
		path: [
			...params.path,
			"allOf",
			1
		]
	});
	const isSimpleIntersection = (val$1) => "allOf" in val$1 && Object.keys(val$1).length === 1;
	const allOf = [...isSimpleIntersection(a) ? a.allOf : [a], ...isSimpleIntersection(b) ? b.allOf : [b]];
	json.allOf = allOf;
	ctx.intersections.push(allOf);
};
/** JSON object keys are always strings, so a numeric record key schema is re-expressed over the
* numeric-string form the record parser matches. Deferred to `finalize`, after the flatten: a key
* behind a wrapper only carries its own `type` before then, and a union key only has its branches.
*
* A numeric bound cannot apply to a property name, so `minimum` and its siblings are dropped rather
* than carried over: keeping them beside `type: "string"` reproduces the match-nothing schema this
* exists to fix. A key that carries one therefore emits wider than the record parses — `z.record(z.number().min(5), V)`
* accepts `"3"` — which is the deliberate trade, since throwing on it would reject an ordinary schema
* outright. */
function stringifyKeyNames(bySchema, json, visited) {
	if (json.$ref) {
		if (visited.has(json)) return json;
		visited.add(json);
		const def = bySchema.get(json)?.def;
		if (!def) return json;
		const inlined = stringifyKeyNames(bySchema, def, visited);
		return inlined === def ? json : inlined;
	}
	for (const keyword of ["anyOf", "oneOf"]) {
		const branches = json[keyword];
		if (!Array.isArray(branches)) continue;
		const mapped = branches.map((branch) => stringifyKeyNames(bySchema, branch, visited));
		if (mapped.some((branch, i$1) => branch !== branches[i$1])) json = {
			...json,
			[keyword]: mapped
		};
	}
	const types$1 = Array.isArray(json.type) ? json.type : [json.type];
	const numericType = !types$1.includes("string") && types$1.some((t) => t === "number" || t === "integer");
	const values = json.enum ?? (json.const !== void 0 ? [json.const] : void 0);
	if (!numericType && !values?.some((v) => typeof v === "number")) return json;
	const { minimum, maximum, exclusiveMinimum, exclusiveMaximum, multipleOf, format, id,...rest } = json;
	if (rest.enum) rest.enum = rest.enum.map((v) => typeof v === "number" ? String(v) : v);
	else if (typeof rest.const === "number") rest.const = String(rest.const);
	if (!numericType) return rest;
	rest.type = "string";
	if (!values) rest.pattern = (types$1.includes("number") ? number$1 : integer).source;
	return rest;
}
/** Every record of one conversion, so the carriers are found in a single pass rather than once per record. */
const pendingRecords = /* @__PURE__ */ new WeakMap();
function rewriteKeyNames(ctx) {
	const bySchema = /* @__PURE__ */ new Map();
	for (const entry of ctx.seen.values()) if (entry.def && !bySchema.has(entry.schema)) bySchema.set(entry.schema, entry);
	const rewrites = /* @__PURE__ */ new Map();
	for (const record$1 of pendingRecords.get(ctx) ?? []) {
		const seen = ctx.seen.get(record$1);
		const names = (seen?.def ?? seen?.schema)?.propertyNames;
		if (!names || names === true || rewrites.has(names)) continue;
		const rewritten = stringifyKeyNames(bySchema, names, /* @__PURE__ */ new Set());
		if (rewritten !== names) rewrites.set(names, rewritten);
	}
	if (!rewrites.size) return;
	for (const entry of ctx.seen.values()) for (const carrier of [entry.schema, entry.def]) {
		const rewritten = carrier && rewrites.get(carrier.propertyNames);
		if (rewritten) carrier.propertyNames = rewritten;
	}
}
const recordProcessor = (schema, ctx, _json, params) => {
	const json = _json;
	const def = schema._zod.def;
	json.type = "object";
	const keyType = def.keyType;
	const patterns = aggregateChecks(keyType).patterns;
	if (def.mode === "loose" && patterns && patterns.size > 0) {
		const valueSchema = processSchema(def.valueType, ctx, {
			...params,
			path: [
				...params.path,
				"patternProperties",
				"*"
			]
		});
		json.patternProperties = {};
		for (const pattern of patterns) assignProp(json.patternProperties, exactPattern(pattern).source, valueSchema);
	} else {
		if (ctx.target === "draft-07" || ctx.target === "draft-2020-12") {
			json.propertyNames = processSchema(def.keyType, ctx, {
				...params,
				path: [...params.path, "propertyNames"]
			});
			let pending = pendingRecords.get(ctx);
			if (!pending) {
				pending = [];
				pendingRecords.set(ctx, pending);
				ctx.deferred.push(() => rewriteKeyNames(ctx));
			}
			pending.push(schema);
		}
		json.additionalProperties = processSchema(def.valueType, ctx, {
			...params,
			path: [...params.path, "additionalProperties"]
		});
	}
	const keyValues = keyType._zod.values;
	const omittableOnInput = ctx.io === "input" && inputOptin(def.valueType) !== void 0;
	if (keyValues && !def.partial && !omittableOnInput) {
		const validKeyValues = [...keyValues].filter((v) => typeof v === "string" || typeof v === "number");
		if (validKeyValues.length > 0) json.required = validKeyValues.map(String);
	}
};
const nullableProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	const inner = processSchema(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	if (ctx.target === "openapi-3.0") {
		seen.ref = def.innerType;
		json.nullable = true;
	} else json.anyOf = [inner, { type: "null" }];
};
const nonoptionalProcessor = (schema, ctx, _json, params) => {
	const def = schema._zod.def;
	processSchema(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
};
/** Round-trips a default value through JSON so the emitted schema is guaranteed to be valid JSON.
* A BigInt has no reliable encoding, so it goes through `unrepresentable` like any other
* unrepresentable value. Returns a sentinel when the caller must not write a default of its own. */
const UNREPRESENTABLE_DEFAULT = Symbol();
function serializeDefaultValue(value, schema, ctx, json, params) {
	let unrepresentable = false;
	const serialized = JSON.stringify(value, (_, val$1) => {
		if (typeof val$1 !== "bigint") return val$1;
		unrepresentable = true;
		return null;
	});
	if (!unrepresentable) return JSON.parse(serialized);
	handleUnrepresentable(schema, ctx, json, params, "BigInt defaults cannot be represented in JSON Schema");
	return UNREPRESENTABLE_DEFAULT;
}
const defaultProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	processSchema(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	const value = serializeDefaultValue(def.defaultValue, schema, ctx, json, params);
	if (value !== UNREPRESENTABLE_DEFAULT) json.default = value;
};
const prefaultProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	processSchema(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	if (ctx.io !== "input") return;
	const value = serializeDefaultValue(def.defaultValue, schema, ctx, json, params);
	if (value !== UNREPRESENTABLE_DEFAULT) json._prefault = value;
};
const catchProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	processSchema(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	let catchValue;
	try {
		catchValue = def.catchValue(void 0);
	} catch {
		handleUnrepresentable(schema, ctx, json, params, "Dynamic catch values are not supported in JSON Schema");
		return;
	}
	json.default = catchValue;
};
const pipeProcessor = (schema, ctx, _json, params) => {
	const def = schema._zod.def;
	const inIsTransform = def.in._zod.traits.has("$ZodTransform");
	const innerType = ctx.io === "input" ? inIsTransform ? def.out : def.in : def.out;
	processSchema(innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = innerType;
};
const readonlyProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	processSchema(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	json.readOnly = true;
};
const optionalProcessor = (schema, ctx, _json, params) => {
	const def = schema._zod.def;
	processSchema(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
};

//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/errors.js
const _installedErrorProtos = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
function _lazyMethod(proto, key$2, make) {
	Object.defineProperty(proto, key$2, {
		configurable: true,
		enumerable: false,
		get() {
			const value = make(this);
			Object.defineProperty(this, key$2, {
				value,
				configurable: true,
				writable: true
			});
			return value;
		},
		set(value) {
			Object.defineProperty(this, key$2, {
				value,
				configurable: true,
				writable: true
			});
		}
	});
}
const initializer = (inst, issues) => {
	$ZodError.init(inst, issues);
	inst.name = "ZodError";
	const proto = Object.getPrototypeOf(inst);
	if (_installedErrorProtos.has(proto)) return;
	_installedErrorProtos.add(proto);
	_lazyMethod(proto, "format", (self) => (mapper) => formatError(self, mapper));
	_lazyMethod(proto, "flatten", (self) => (mapper) => flattenError(self, mapper));
	_lazyMethod(proto, "addIssue", (self) => (issue$1) => {
		self.issues.push(issue$1);
		self.message = JSON.stringify(self.issues, jsonStringifyReplacer, 2);
	});
	_lazyMethod(proto, "addIssues", (self) => (issues$1) => {
		self.issues.push(...issues$1);
		self.message = JSON.stringify(self.issues, jsonStringifyReplacer, 2);
	});
	Object.defineProperty(proto, "isEmpty", {
		configurable: true,
		enumerable: false,
		get() {
			return this.issues.length === 0;
		}
	});
};
const ZodRealError = /* @__PURE__ */ $constructor("ZodError", initializer, void 0, { Parent: Error });

//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/parse.js
const parse$2 = /* @__PURE__ */ _parse(ZodRealError);
const parseAsync = /* @__PURE__ */ _parseAsync(ZodRealError);
const safeParse = /* @__PURE__ */ _safeParse(ZodRealError);
const safeParseAsync = /* @__PURE__ */ _safeParseAsync(ZodRealError);
const encode = /* @__PURE__ */ _encode(ZodRealError);
const decode = /* @__PURE__ */ _decode(ZodRealError);
const encodeAsync = /* @__PURE__ */ _encodeAsync(ZodRealError);
const decodeAsync = /* @__PURE__ */ _decodeAsync(ZodRealError);
const safeEncode = /* @__PURE__ */ _safeEncode(ZodRealError);
const safeDecode = /* @__PURE__ */ _safeDecode(ZodRealError);
const safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync(ZodRealError);
const safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);

//#endregion
//#region node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/schemas.js
function _ensureDefaultLocale() {
	if (!globalConfig.localeError) config(en_default());
}
function _ensureDefaultMemoizer() {
	if (!globalConfig.memoizer) config({ memoizer: memoizer() });
}
const ZodType = /* @__PURE__ */ $constructor("ZodType", (inst, def) => {
	_ensureDefaultLocale();
	$ZodType.init(inst, def);
	inst.def = def;
	inst.type = def.type;
	return inst;
}, {
	check(...chks) {
		const def = this.def;
		return this.clone(mergeDefs(def, { checks: [...def.checks ?? [], ...chks.map((ch) => typeof ch === "function" ? { _zod: {
			check: ch,
			def: { check: "custom" },
			onattach: []
		} } : ch)] }), { parent: true });
	},
	with(...chks) {
		return this.check(...chks);
	},
	clone(def, params) {
		return clone(this, def, params);
	},
	brand() {
		return this;
	},
	register(reg$1, meta$2) {
		reg$1.add(this, meta$2);
		return this;
	},
	refine(check, params) {
		return this.check(refine(check, params));
	},
	superRefine(refinement, params) {
		return this.check(superRefine(refinement, params));
	},
	overwrite(fn$1) {
		return this.check(_overwrite(fn$1));
	},
	optional() {
		return optional(this);
	},
	exactOptional() {
		return exactOptional(this);
	},
	nullable() {
		return nullable(this);
	},
	nullish() {
		return optional(nullable(this));
	},
	nonoptional(params) {
		return nonoptional(this, params);
	},
	array() {
		return array(this);
	},
	or(arg) {
		return union([this, arg]);
	},
	and(arg) {
		return intersection(this, arg);
	},
	transform(tx) {
		return pipe(this, transform(tx));
	},
	default(d) {
		return _default(this, d);
	},
	prefault(d) {
		return prefault(this, d);
	},
	catch(params) {
		return _catch(this, params);
	},
	pipe(target) {
		return pipe(this, target);
	},
	readonly() {
		return readonly(this);
	},
	describe(description) {
		const cl = this.clone();
		globalRegistry.add(cl, { description });
		return cl;
	},
	meta(...args) {
		if (args.length === 0) return globalRegistry.get(this);
		const cl = this.clone();
		globalRegistry.add(cl, args[0]);
		return cl;
	},
	isOptional() {
		return this.safeParse(void 0).success;
	},
	isNullable() {
		return this.safeParse(null).success;
	},
	apply(fn$1, ...args) {
		return args.length === 0 ? fn$1(this) : fn$1(this, ...args);
	},
	get "~standard"() {
		return hide(this, "~standard", {
			...standardProps(this),
			jsonSchema: {
				input: createStandardJSONSchemaMethod(this, "input"),
				output: createStandardJSONSchemaMethod(this, "output")
			}
		});
	},
	set "~standard"(value) {
		own(this, "~standard", value);
	},
	parse: function _parse$1(data$1, params) {
		return parse$2(this, data$1, params, { callee: _parse$1 });
	},
	parseAsync: async function _parseAsync$1(data$1, params) {
		return await parseAsync(this, data$1, params, { callee: _parseAsync$1 });
	},
	safeParse(data$1, params) {
		return safeParse(this, data$1, params);
	},
	async safeParseAsync(data$1, params) {
		return safeParseAsync(this, data$1, params);
	},
	get spa() {
		return this?.safeParseAsync;
	},
	set spa(value) {
		own(this, "spa", value);
	},
	validate(data$1, params) {
		return validate(this, data$1, params);
	},
	validateAsync(data$1, params) {
		return validateAsync(this, data$1, params);
	},
	encode: function _encode$1(data$1, params) {
		return encode(this, data$1, params, { callee: _encode$1 });
	},
	decode: function _decode$1(data$1, params) {
		return decode(this, data$1, params, { callee: _decode$1 });
	},
	encodeAsync: async function _encodeAsync$1(data$1, params) {
		return await encodeAsync(this, data$1, params, { callee: _encodeAsync$1 });
	},
	decodeAsync: async function _decodeAsync$1(data$1, params) {
		return await decodeAsync(this, data$1, params, { callee: _decodeAsync$1 });
	},
	safeEncode(data$1, params) {
		return safeEncode(this, data$1, params);
	},
	safeDecode(data$1, params) {
		return safeDecode(this, data$1, params);
	},
	async safeEncodeAsync(data$1, params) {
		return safeEncodeAsync(this, data$1, params);
	},
	async safeDecodeAsync(data$1, params) {
		return safeDecodeAsync(this, data$1, params);
	},
	toJSONSchema(params) {
		return createToJSONSchemaMethod(this, {})(params);
	},
	get description() {
		return globalRegistry.get(this)?.description;
	},
	get _def() {
		return this._zod.def;
	}
});
/** @internal */
const _ZodString = /* @__PURE__ */ $constructor("_ZodString", (inst, def) => {
	$ZodString.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => stringProcessor(inst, ctx, json, params);
}, /* @__PURE__ */ derived({
	format: (inst) => aggregateChecks(inst).format ?? null,
	minLength: (inst) => aggregateChecks(inst).minimum ?? null,
	maxLength: (inst) => aggregateChecks(inst).maximum ?? null
}, {
	regex(...args) {
		return this.check(_regex(...args));
	},
	includes(...args) {
		return this.check(_includes(...args));
	},
	startsWith(...args) {
		return this.check(_startsWith(...args));
	},
	endsWith(...args) {
		return this.check(_endsWith(...args));
	},
	min(...args) {
		return this.check(_minLength(...args));
	},
	max(...args) {
		return this.check(_maxLength(...args));
	},
	length(...args) {
		return this.check(_length(...args));
	},
	nonempty(...args) {
		return this.check(_minLength(1, ...args));
	},
	lowercase(params) {
		return this.check(_lowercase(params));
	},
	uppercase(params) {
		return this.check(_uppercase(params));
	},
	trim() {
		return this.check(_trim());
	},
	normalize(...args) {
		return this.check(_normalize(...args));
	},
	toLowerCase() {
		return this.check(_toLowerCase());
	},
	toUpperCase() {
		return this.check(_toUpperCase());
	},
	slugify() {
		return this.check(_slugify());
	}
}));
const ZodString = /* @__PURE__ */ $constructor("ZodString", (inst, def) => {
	$ZodString.init(inst, def);
	_ZodString.init(inst, def);
}, {
	email(params) {
		return this.check(_email(ZodEmail, params));
	},
	url(params) {
		return this.check(_url(ZodURL, params));
	},
	jwt(params) {
		return this.check(_jwt(ZodJWT, params));
	},
	emoji(params) {
		return this.check(_emoji(ZodEmoji, params));
	},
	guid(params) {
		return this.check(_guid(ZodGUID, params));
	},
	uuid(params) {
		return this.check(_uuid(ZodUUID, params));
	},
	uuidv4(params) {
		return this.check(_uuidv4(ZodUUID, params));
	},
	uuidv6(params) {
		return this.check(_uuidv6(ZodUUID, params));
	},
	uuidv7(params) {
		return this.check(_uuidv7(ZodUUID, params));
	},
	nanoid(params) {
		return this.check(_nanoid(ZodNanoID, params));
	},
	cuid(params) {
		return this.check(_cuid(ZodCUID, params));
	},
	cuid2(params) {
		return this.check(_cuid2(ZodCUID2, params));
	},
	ulid(params) {
		return this.check(_ulid(ZodULID, params));
	},
	base64(params) {
		return this.check(_base64(ZodBase64, params));
	},
	base64url(params) {
		return this.check(_base64url(ZodBase64URL, params));
	},
	xid(params) {
		return this.check(_xid(ZodXID, params));
	},
	ksuid(params) {
		return this.check(_ksuid(ZodKSUID, params));
	},
	ipv4(params) {
		return this.check(_ipv4(ZodIPv4, params));
	},
	ipv6(params) {
		return this.check(_ipv6(ZodIPv6, params));
	},
	cidrv4(params) {
		return this.check(_cidrv4(ZodCIDRv4, params));
	},
	cidrv6(params) {
		return this.check(_cidrv6(ZodCIDRv6, params));
	},
	e164(params) {
		return this.check(_e164(ZodE164, params));
	},
	datetime(params) {
		return this.check(_isoDateTime(ZodISODateTime, params));
	},
	date(params) {
		return this.check(_isoDate(ZodISODate, params));
	},
	time(params) {
		return this.check(_isoTime(ZodISOTime, params));
	},
	duration(params) {
		return this.check(_isoDuration(ZodISODuration, params));
	}
});
function string(params) {
	return _string(ZodString, params);
}
const ZodStringFormat = /* @__PURE__ */ $constructor("ZodStringFormat", (inst, def) => {
	$ZodStringFormat.init(inst, def);
	_ZodString.init(inst, def);
});
const ZodISODateTime = /* @__PURE__ */ $constructor("ZodISODateTime", (inst, def) => {
	$ZodISODateTime.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodISODate = /* @__PURE__ */ $constructor("ZodISODate", (inst, def) => {
	$ZodISODate.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodISOTime = /* @__PURE__ */ $constructor("ZodISOTime", (inst, def) => {
	$ZodISOTime.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodISODuration = /* @__PURE__ */ $constructor("ZodISODuration", (inst, def) => {
	$ZodISODuration.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodEmail = /* @__PURE__ */ $constructor("ZodEmail", (inst, def) => {
	$ZodEmail.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodGUID = /* @__PURE__ */ $constructor("ZodGUID", (inst, def) => {
	$ZodGUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodUUID = /* @__PURE__ */ $constructor("ZodUUID", (inst, def) => {
	$ZodUUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodURL = /* @__PURE__ */ $constructor("ZodURL", (inst, def) => {
	$ZodURL.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodEmoji = /* @__PURE__ */ $constructor("ZodEmoji", (inst, def) => {
	$ZodEmoji.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodNanoID = /* @__PURE__ */ $constructor("ZodNanoID", (inst, def) => {
	$ZodNanoID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
/**
* @deprecated CUID v1 is deprecated by its authors due to information leakage
* (timestamps embedded in the id). Use {@link ZodCUID2} instead.
* See https://github.com/paralleldrive/cuid.
*/
const ZodCUID = /* @__PURE__ */ $constructor("ZodCUID", (inst, def) => {
	$ZodCUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodCUID2 = /* @__PURE__ */ $constructor("ZodCUID2", (inst, def) => {
	$ZodCUID2.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodULID = /* @__PURE__ */ $constructor("ZodULID", (inst, def) => {
	$ZodULID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodXID = /* @__PURE__ */ $constructor("ZodXID", (inst, def) => {
	$ZodXID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodKSUID = /* @__PURE__ */ $constructor("ZodKSUID", (inst, def) => {
	$ZodKSUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodIPv4 = /* @__PURE__ */ $constructor("ZodIPv4", (inst, def) => {
	$ZodIPv4.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodIPv6 = /* @__PURE__ */ $constructor("ZodIPv6", (inst, def) => {
	$ZodIPv6.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodCIDRv4 = /* @__PURE__ */ $constructor("ZodCIDRv4", (inst, def) => {
	$ZodCIDRv4.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodCIDRv6 = /* @__PURE__ */ $constructor("ZodCIDRv6", (inst, def) => {
	$ZodCIDRv6.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodBase64 = /* @__PURE__ */ $constructor("ZodBase64", (inst, def) => {
	$ZodBase64.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodBase64URL = /* @__PURE__ */ $constructor("ZodBase64URL", (inst, def) => {
	$ZodBase64URL.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodE164 = /* @__PURE__ */ $constructor("ZodE164", (inst, def) => {
	$ZodE164.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodJWT = /* @__PURE__ */ $constructor("ZodJWT", (inst, def) => {
	$ZodJWT.init(inst, def);
	ZodStringFormat.init(inst, def);
});
const ZodNumber = /* @__PURE__ */ $constructor("ZodNumber", (inst, def) => {
	$ZodNumber.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => numberProcessor(inst, ctx, json, params);
	inst.isFinite = true;
}, /* @__PURE__ */ derived({
	minValue: (inst) => {
		const { minimum, exclusiveMinimum } = aggregateChecks(inst);
		return Math.max(minimum ?? Number.NEGATIVE_INFINITY, exclusiveMinimum ?? Number.NEGATIVE_INFINITY);
	},
	maxValue: (inst) => {
		const { maximum, exclusiveMaximum } = aggregateChecks(inst);
		return Math.min(maximum ?? Number.POSITIVE_INFINITY, exclusiveMaximum ?? Number.POSITIVE_INFINITY);
	},
	isInt: (inst) => {
		const { isInt, multipleOf } = aggregateChecks(inst);
		return !!isInt || !!multipleOf?.some(Number.isSafeInteger);
	},
	format: (inst) => aggregateChecks(inst).format ?? null
}, {
	gt(value, params) {
		return this.check(_gt(value, params));
	},
	gte(value, params) {
		return this.check(_gte(value, params));
	},
	min(value, params) {
		return this.check(_gte(value, params));
	},
	lt(value, params) {
		return this.check(_lt(value, params));
	},
	lte(value, params) {
		return this.check(_lte(value, params));
	},
	max(value, params) {
		return this.check(_lte(value, params));
	},
	int(params) {
		return this.check(int(params));
	},
	safe(params) {
		return this.check(int(params));
	},
	positive(params) {
		return this.check(_gt(0, params));
	},
	nonnegative(params) {
		return this.check(_gte(0, params));
	},
	negative(params) {
		return this.check(_lt(0, params));
	},
	nonpositive(params) {
		return this.check(_lte(0, params));
	},
	multipleOf(value, params) {
		return this.check(_multipleOf(value, params));
	},
	step(value, params) {
		return this.check(_multipleOf(value, params));
	},
	finite() {
		return this;
	}
}));
function number(params) {
	return _number(ZodNumber, params);
}
const ZodNumberFormat = /* @__PURE__ */ $constructor("ZodNumberFormat", (inst, def) => {
	$ZodNumberFormat.init(inst, def);
	ZodNumber.init(inst, def);
});
function int(params) {
	return _int(ZodNumberFormat, params);
}
const ZodBoolean = /* @__PURE__ */ $constructor("ZodBoolean", (inst, def) => {
	$ZodBoolean.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => booleanProcessor(inst, ctx, json, params);
});
function boolean(params) {
	return _boolean(ZodBoolean, params);
}
const ZodUnknown = /* @__PURE__ */ $constructor("ZodUnknown", (inst, def) => {
	$ZodUnknown.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => unknownProcessor(inst, ctx, json, params);
});
function unknown() {
	return _unknown(ZodUnknown);
}
const ZodNever = /* @__PURE__ */ $constructor("ZodNever", (inst, def) => {
	$ZodNever.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => neverProcessor(inst, ctx, json, params);
});
function never(params) {
	return _never(ZodNever, params);
}
const ZodArray = /* @__PURE__ */ $constructor("ZodArray", (inst, def) => {
	_ensureDefaultMemoizer();
	$ZodArray.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => arrayProcessor(inst, ctx, json, params);
	inst.element = def.element;
}, {
	min(n, params) {
		return this.check(_minLength(n, params));
	},
	nonempty(params) {
		return this.check(_minLength(1, params));
	},
	max(n, params) {
		return this.check(_maxLength(n, params));
	},
	length(n, params) {
		return this.check(_length(n, params));
	},
	unwrap() {
		return this.element;
	}
});
function array(element, params) {
	return _array(ZodArray, element, params);
}
const ZodObject = /* @__PURE__ */ $constructor("ZodObject", (inst, def) => {
	_ensureDefaultMemoizer();
	$ZodObjectJIT.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => objectProcessor(inst, ctx, json, params);
	installLazyProp(inst, "shape", (self) => self._zod.def.shape, false);
}, {
	keyof() {
		return _enum(Object.keys(this._zod.def.shape));
	},
	catchall(catchall) {
		return this.clone(mergeDefs(this._zod.def, { catchall }));
	},
	passthrough() {
		return this.clone(mergeDefs(this._zod.def, { catchall: unknown() }));
	},
	loose() {
		return this.clone(mergeDefs(this._zod.def, { catchall: unknown() }));
	},
	strict() {
		return this.clone(mergeDefs(this._zod.def, { catchall: never() }));
	},
	strip() {
		return this.clone(mergeDefs(this._zod.def, { catchall: void 0 }));
	},
	extend(incoming) {
		return extend(this, incoming);
	},
	safeExtend(incoming) {
		return safeExtend(this, incoming);
	},
	merge(other) {
		return merge(this, other);
	},
	pick(mask) {
		return pick(this, mask);
	},
	omit(mask) {
		return omit(this, mask);
	},
	partial(...args) {
		return partial(ZodOptional, this, args[0]);
	},
	exactPartial(...args) {
		return partial(ZodExactOptional, this, args[0], "exactPartial");
	},
	required(...args) {
		return required(ZodNonOptional, this, args[0]);
	}
});
function object(shape, params) {
	return new ZodObject({
		type: "object",
		shape: shape ?? {},
		...normalizeParams(params)
	});
}
const ZodUnion = /* @__PURE__ */ $constructor("ZodUnion", (inst, def) => {
	$ZodUnion.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => unionProcessor(inst, ctx, json, params);
	inst.options = def.options;
});
function union(options, params) {
	return new ZodUnion({
		type: "union",
		options,
		...normalizeParams(params)
	});
}
const ZodIntersection = /* @__PURE__ */ $constructor("ZodIntersection", (inst, def) => {
	$ZodIntersection.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => intersectionProcessor(inst, ctx, json, params);
});
function intersection(left, right) {
	return new ZodIntersection({
		type: "intersection",
		left,
		right
	});
}
const ZodRecord = /* @__PURE__ */ $constructor("ZodRecord", (inst, def) => {
	_ensureDefaultMemoizer();
	$ZodRecord.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => recordProcessor(inst, ctx, json, params);
	inst.keyType = def.keyType;
	inst.valueType = def.valueType;
});
function record(keyType, valueType, params) {
	if (!valueType || !valueType._zod) return new ZodRecord({
		type: "record",
		keyType: string(),
		valueType: keyType,
		...normalizeParams(valueType)
	});
	return new ZodRecord({
		type: "record",
		keyType,
		valueType,
		...normalizeParams(params)
	});
}
const ZodEnum = /* @__PURE__ */ $constructor("ZodEnum", (inst, def) => {
	$ZodEnum.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => enumProcessor(inst, ctx, json, params);
	inst.enum = def.entries;
	inst.options = [...inst._zod.values];
	const keys = new Set(Object.keys(def.entries));
	inst.extract = (values, params) => {
		const newEntries = {};
		for (const value of values) if (keys.has(value)) newEntries[value] = def.entries[value];
		else throw new Error(`Key ${value} not found in enum`);
		return new ZodEnum({
			...def,
			checks: [],
			...normalizeParams(params),
			entries: newEntries
		});
	};
	inst.exclude = (values, params) => {
		const newEntries = { ...def.entries };
		for (const value of values) if (keys.has(value)) delete newEntries[value];
		else throw new Error(`Key ${value} not found in enum`);
		return new ZodEnum({
			...def,
			checks: [],
			...normalizeParams(params),
			entries: newEntries
		});
	};
});
function _enum(values, params) {
	return new ZodEnum({
		type: "enum",
		entries: Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values,
		...normalizeParams(params)
	});
}
const ZodTransform = /* @__PURE__ */ $constructor("ZodTransform", (inst, def) => {
	_ensureDefaultMemoizer();
	$ZodTransform.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => transformProcessor(inst, ctx, json, params);
	inst._zod.parse = (payload, _ctx) => {
		if (_ctx.direction === "backward") throw new $ZodEncodeError(inst.constructor.name);
		payload.addIssue = (issue$1) => {
			if (typeof issue$1 === "string") payload.issues.push(issue(issue$1, payload.value, def));
			else {
				const _issue = issue$1;
				if (_issue.fatal) _issue.continue = false;
				_issue.code ?? (_issue.code = "custom");
				if (!("input" in _issue)) _issue.input = payload.value;
				_issue.inst ?? (_issue.inst = inst);
				payload.issues.push(issue(_issue));
			}
		};
		const output = def.transform(payload.value, payload);
		if (output instanceof Promise) return output.then((output$1) => {
			payload.value = output$1;
			return payload;
		});
		payload.value = output;
		return payload;
	};
});
function transform(fn$1) {
	return new ZodTransform({
		type: "transform",
		transform: fn$1
	});
}
const ZodOptional = /* @__PURE__ */ $constructor("ZodOptional", (inst, def) => {
	$ZodOptional.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function optional(innerType) {
	return new ZodOptional({
		type: "optional",
		innerType
	});
}
const ZodExactOptional = /* @__PURE__ */ $constructor("ZodExactOptional", (inst, def) => {
	$ZodExactOptional.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function exactOptional(innerType) {
	return new ZodExactOptional({
		type: "optional",
		innerType
	});
}
const ZodNullable = /* @__PURE__ */ $constructor("ZodNullable", (inst, def) => {
	$ZodNullable.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => nullableProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function nullable(innerType) {
	return new ZodNullable({
		type: "nullable",
		innerType
	});
}
const ZodDefault = /* @__PURE__ */ $constructor("ZodDefault", (inst, def) => {
	$ZodDefault.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => defaultProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
	inst.removeDefault = inst.unwrap;
});
function _default(innerType, defaultValue) {
	return new ZodDefault({
		type: "default",
		innerType,
		get defaultValue() {
			return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
		}
	});
}
const ZodPrefault = /* @__PURE__ */ $constructor("ZodPrefault", (inst, def) => {
	$ZodPrefault.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => prefaultProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function prefault(innerType, defaultValue) {
	return new ZodPrefault({
		type: "prefault",
		innerType,
		get defaultValue() {
			return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
		}
	});
}
const ZodNonOptional = /* @__PURE__ */ $constructor("ZodNonOptional", (inst, def) => {
	$ZodNonOptional.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => nonoptionalProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function nonoptional(innerType, params) {
	return new ZodNonOptional({
		type: "nonoptional",
		innerType,
		...normalizeParams(params)
	});
}
const ZodCatch = /* @__PURE__ */ $constructor("ZodCatch", (inst, def) => {
	$ZodCatch.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => catchProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
	inst.removeCatch = inst.unwrap;
});
function _catch(innerType, catchValue) {
	return new ZodCatch({
		type: "catch",
		innerType,
		catchValue: typeof catchValue === "function" ? catchValue : constantCatch(catchValue)
	});
}
const ZodPipe = /* @__PURE__ */ $constructor("ZodPipe", (inst, def) => {
	$ZodPipe.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => pipeProcessor(inst, ctx, json, params);
	inst.in = def.in;
	inst.out = def.out;
});
function pipe(in_, out) {
	return new ZodPipe({
		type: "pipe",
		in: in_,
		out
	});
}
const ZodReadonly = /* @__PURE__ */ $constructor("ZodReadonly", (inst, def) => {
	$ZodReadonly.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => readonlyProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function readonly(innerType) {
	return new ZodReadonly({
		type: "readonly",
		innerType
	});
}
const ZodCustom = /* @__PURE__ */ $constructor("ZodCustom", (inst, def) => {
	$ZodCustom.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => customProcessor(inst, ctx, json, params);
});
function refine(fn$1, _params = {}) {
	return _refine(ZodCustom, fn$1, _params);
}
function superRefine(fn$1, params) {
	return _superRefine(fn$1, params);
}
const describe = describe$1;
const meta = meta$1;

//#endregion
//#region rules/main.json
var main_default = [
	{
		"url": "http://www.xbiqugu.la/",
		"name": "香书小说",
		"comment": "",
		"search": {
			"url": "http://www.xbiqugu.la/modules/article/waps.php",
			"method": "post",
			"data": "{searchkey: %s}",
			"result": "#checkform > table > tbody > tr",
			"bookName": "td.even > a",
			"author": "td:nth-of-type(3)",
			"latestChapter": "td.odd > a",
			"lastUpdateTime": "td:nth-of-type(4)"
		},
		"book": {
			"latestChapter": "#info > p:nth-child(5) > a",
			"latestChapterUrl": "#info > p:nth-child(5) > a@href",
			"lastUpdateTime": "#info > p:nth-child(4)"
		},
		"toc": { "item": "#list > dl > dd > a" },
		"chapter": {
			"title": ".bookname > h1",
			"content": "#content",
			"paragraphTagClosed": false,
			"paragraphTag": "<br>+",
			"filterTxt": "一秒记住【文学巴士&nbsp;】，精彩无弹窗免费阅读！|(www.xbiquge.la 新笔趣阁)，高速全文字在线阅读！|天才一秒记住本站地址：.+。手机版阅读网址：m.|手机用户请浏览阅读，更优质的阅读体验。|天才壹秒記住.+，為您提供精彩小說閱讀。|\\(本章完\\)",
			"filterTag": "div, p, script"
		}
	},
	{
		"url": "https://www.shuhaige.net/",
		"name": "书海阁小说网",
		"comment": "部分书源正文段落顺序错乱的书在这里可能正常，搜索爬取过快会丢包(Unexpected end of file from server)",
		"search": {
			"url": "https://www.shuhaige.net/search.html",
			"method": "post",
			"data": "{searchkey: %s, searchtype: all}",
			"cookies": "waf_sc=''; HMACCOUNT=''",
			"result": "#sitembox > dl",
			"bookName": "dd > h3 > a",
			"author": "dd:nth-child(3) > span:nth-child(1)",
			"category": "dd:nth-child(3) > span:nth-child(3)",
			"latestChapter": "dd:nth-child(5) > a",
			"lastUpdateTime": "dd:nth-child(5) > span",
			"wordCount": "dd:nth-child(3) > span:nth-child(4)",
			"status": "dd:nth-child(3) > span:nth-child(2)",
			"nextPage": "#pagelink > a:not(.pgroup):not(.ngroup)"
		},
		"book": { "intro": "#intro > p:nth-child(1)" },
		"toc": { "item": "dl > dt:nth-of-type(2) ~ dd > a" },
		"chapter": {
			"title": ".bookname > h1",
			"content": "#content",
			"paragraphTagClosed": true,
			"filterTxt": "本小章还未完，请点击下一页继续阅读后面精彩内容！|小主，这个章节后面还有哦，请点击下一页继续阅读，后面更精彩！|这章没有结束，请点击下一页继续阅读！|喜欢(.+?)请大家收藏：\\(([^)]+)\\)\\1书海阁小说网更新速度全网最快。|\\(本章完\\)",
			"filterTag": ".bottem2, hr, script, table",
			"nextPage": "#pager_next"
		}
	},
	{
		"url": "http://www.mcxs.info/",
		"name": "梦书中文",
		"comment": "搜索有限流(Connect timed out)",
		"search": {
			"url": "http://www.mcxs.info/search.html",
			"method": "post",
			"data": "{name: %s}",
			"result": ".novelslist2 > ul > li",
			"bookName": "span.s2.wid > a",
			"author": "span.s4.wid > a",
			"latestChapter": "span.s3.wid3 > a",
			"lastUpdateTime": "span.s6.wid6"
		},
		"book": { "coverUrl": "meta[property=\"og:image\"]@js:r='http://www.mcxs.info'+r" },
		"toc": { "item": "dl > dt:nth-of-type(2) ~ dd > a" },
		"chapter": {
			"title": ".bookname > h1",
			"content": "#content",
			"paragraphTagClosed": false,
			"paragraphTag": "<br>+",
			"filterTxt": "天才一秒记住本站地址：[.+] .+最快更新！无广告！|(.+)，高速全文字在线阅读！|一秒记住【.+】，精彩无弹窗免费阅读！|《.+》.+全文字更新，牢记网址：([a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\\.[a-zA-Z]{2,})|\\(本章完\\)",
			"filterTag": "div, p, script"
		}
	},
	{
		"url": "http://www.99xs.info/",
		"name": "鸟书网",
		"comment": "搜索有限流 (Read timed out)，数量15w+",
		"search": {
			"url": "http://www.99xs.info/read/search/",
			"method": "post",
			"data": "{searchkey: %s}",
			"result": "div.wrap > div > div > div",
			"bookName": "div.bookinfo > h4 > a",
			"author": "div.bookinfo > div.author",
			"latestChapter": "div.bookinfo > div.update > a"
		},
		"book": {},
		"toc": { "item": "dl > dt:nth-of-type(2) ~ dd > a" },
		"chapter": {
			"title": ".content > h1",
			"content": "#content",
			"paragraphTagClosed": false,
			"paragraphTag": "<br>+",
			"filterTxt": "请记住本书首发域名：.+。鸟书网手机版阅读网址：.+|7017k|\\(本章完\\)",
			"filterTag": ""
		}
	},
	{
		"url": "https://www.22biqu.com/",
		"name": "笔趣阁22",
		"comment": "meta信息lastest_chapter_name拼写错误",
		"search": {
			"url": "https://www.22biqu.com/ss/",
			"method": "post",
			"data": "{searchkey: %s, Submit: 搜索}",
			"result": "body > div.container > div > div > ul > li",
			"bookName": "span.s2 > a",
			"author": "span.s4",
			"category": "span.s1",
			"latestChapter": "span.s3",
			"lastUpdateTime": "span.s5"
		},
		"book": {
			"latestChapter": "meta[property=\"og:novel:lastest_chapter_name\"]",
			"latestChapterUrl": "meta[property=\"og:novel:lastest_chapter_url\"]"
		},
		"toc": {
			"item": "div:nth-child(4) > ul > li > a",
			"nextPage": "#indexselect > option"
		},
		"chapter": {
			"title": ".title",
			"content": "#content",
			"paragraphTagClosed": true,
			"filterTxt": "\\(本章完\\)",
			"filterTag": "",
			"nextPage": "#next_url"
		}
	},
	{
		"url": "http://www.xbiquzw.net/",
		"name": "笔尖中文",
		"comment": "",
		"search": {
			"url": "http://www.xbiquzw.net/modules/article/search.php",
			"method": "post",
			"data": "{searchkey: %s}",
			"result": "#wrapper > table > tbody > tr",
			"bookName": "td:nth-child(1) > a",
			"author": "td:nth-child(3)",
			"latestChapter": "td:nth-child(2)",
			"lastUpdateTime": "td:nth-child(5)"
		},
		"book": { "url": "http://www.xbiquzw.net/(.*?)/" },
		"toc": {
			"baseUri": "http://www.xbiquzw.net/%s/",
			"item": "#list > dl > dd > a"
		},
		"chapter": {
			"title": ".bookname > h1",
			"content": "#content",
			"paragraphTagClosed": false,
			"paragraphTag": "<br>+",
			"filterTxt": "<!--.*?-->|喜欢.+请大家收藏：.+|\\(本章完\\)",
			"filterTag": ""
		}
	},
	{
		"url": "http://www.ujxsw.org/",
		"name": "悠久小说网",
		"comment": "下载速度快",
		"search": {
			"url": "http://www.ujxsw.org/searchbooks.php",
			"method": "post",
			"data": "{searchkey: %s}",
			"result": "#main > div.shuku_list > div.shulist > ul",
			"bookName": "li.three > a",
			"author": "li.four > a",
			"category": "li.two",
			"status": "li.six",
			"latestChapter": "li.three > span > a",
			"lastUpdateTime": "li.five"
		},
		"book": {
			"url": "http://www.ujxsw.org/book/(.*?)/",
			"bookName": "#maininfo > div.coverecom.w_770.left > div.tabstit > a:nth-child(4)",
			"author": "#bookinfo > div.bookright > div.d_title > h1 > em > a",
			"intro": "#bookintro",
			"category": "#count > span:nth-child(1)",
			"coverUrl": "#bookimg > a > img",
			"latestChapter": "#bookinfo > div.bookright > div.new > span.new_t > a",
			"latestChapterUrl": "#bookinfo > div.bookright > div.new > span.new_t > a@href",
			"lastUpdateTime": "#bookinfo > div.bookright > div.new > span.new_p"
		},
		"toc": {
			"url": "http://www.ujxsw.org/read/%s/",
			"item": "#readerlist > ul > li > a"
		},
		"chapter": {
			"title": "#mlfy_main_text > h3",
			"content": "#mlfy_main_text > div.read-content > p",
			"paragraphTagClosed": false,
			"paragraphTag": "<br>+",
			"filterTxt": "【悠久小説網ωωω.ＵＪХＳw.ｎｅｔ】，免费小说无弹窗免费阅读！|佰度搜索 【悠久小說網 ＷＷＷ.ＵＪХＳw．ＮＥＴ】 全集TXT电子书免费下载！|《.*》悠久小说网全文字更新,牢记网址:www.ujxsw.org|1秒记住网：",
			"filterTag": ""
		}
	},
	{
		"url": "http://www.yeudusk.com/",
		"name": "阅读库",
		"comment": "",
		"search": {
			"url": "http://www.yeudusk.com/modules/article/search.php?q=%s",
			"method": "get",
			"result": "#jieqi_page_contents > div > div:nth-child(2)",
			"bookName": "div:nth-child(1) > span > a",
			"author": "div:nth-child(2) > span:nth-child(2)",
			"category": "div:nth-child(2) > span:nth-child(4)",
			"status": "span:nth-child(8)",
			"latestChapter": "div:nth-child(4) > span:nth-child(2) > a",
			"lastUpdateTime": "div:nth-child(4) > span:nth-child(4)"
		},
		"book": {
			"url": "http://www.yeudusk.com/book/(.*?)/",
			"intro": "#content > div.divbox.cf > div:nth-child(2) > div:nth-child(3) > div.tabcontent > div:nth-child(1) > div",
			"latestChapter": "#content > div:nth-child(4) > h3",
			"latestChapterUrl": "#content > div:nth-child(4) > h3 > a@href",
			"lastUpdateTime": "#content > div.divbox.cf > div:nth-child(2) > div:nth-child(3) > div.tabcontent > div:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child(3)"
		},
		"toc": {
			"url": "http://www.yeudusk.com/html/0/%s/",
			"item": "ul > li > a"
		},
		"chapter": {
			"title": "#cont > h1",
			"content": "#clickeye_content",
			"paragraphTagClosed": false,
			"paragraphTag": "<br>+",
			"filterTxt": "\\(阅读库\\s?www\\.yeudusk\\.com\\)|阅读库 www.yeudusk.comyeudusk www.yeudusk.com|《.+》阅读库全文字更新,牢记网址:www\\.yeudusk\\.com"
		}
	},
	{
		"url": "https://www.wxsy.net/",
		"name": "顶点小说",
		"comment": "搜索、详情、章节限流。目录乱序、正文段落被base64编码",
		"search": {
			"url": "https://www.wxsy.net/search.html",
			"method": "post",
			"data": "{s: %s}",
			"result": "body > div.container > div:nth-child(1) > div > ul > li",
			"bookName": "span.s2 > a",
			"author": "span.s3 > a",
			"category": "span.s1",
			"latestChapter": "span.s4 > a",
			"lastUpdateTime": "span.s5"
		},
		"book": {
			"url": "https://www.wxsy.net/novel/(.*?)/",
			"coverUrl": ".imgbox > img"
		},
		"toc": {
			"url": "https://www.wxsy.net/novel/%s/chapter_1.html",
			"list": "/html@js:const childRegex=/\\.section-list\\.ycxsid>li:nth-child\\(\\d+\\){display:none}/g;const lastChildRegex=/\\.section-list\\.ycxsid>li:nth-last-child\\(\\d+\\){display:none}/g;const preHiddenCount=[...r.matchAll(childRegex)].length;const afterHiddenCount=[...r.matchAll(lastChildRegex)].length;r=r.replace(/<ul[^>]*class=\"[^\"]*\\bsection-list\\b[^\"]*\\bycxsid\\b[^\"]*\"[^>]*>([\\s\\S]*?)<\\/ul>/g,(match,liContent)=>{const lis=liContent.match(/<li[\\s\\S]*?<\\/li>/g)||[];const newLis=lis.slice(preHiddenCount,lis.length-afterHiddenCount);return match.replace(liContent,newLis.join(''))});",
			"item": ".biqunaicc > div:nth-child(2) > div > ul > li > a",
			"nextPage": ".biqunaicc > div:nth-child(2) > div > div:nth-child(2) > select > option"
		},
		"chapter": {
			"title": "h3",
			"content": ".row-detail > div > div@js:var qsbs={_keyStr:\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\",bb:function(input){var output=\"\",chr1,chr2,chr3,enc1,enc2,enc3,enc4,i=0;input=input.replace(/[^A-Za-z0-9+\\/=]/g,\"\");while(i<input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output+=String.fromCharCode(chr1);if(enc3!=64)output+=String.fromCharCode(chr2);if(enc4!=64)output+=String.fromCharCode(chr3)}return this._utf8_decode(output)},_utf8_encode:function(string){string=string.replace(/\\r\\n/g,\"\\n\");var utftext=\"\";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c)}else if(c<2048){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128)}else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128)}}return utftext},_utf8_decode:function(utftext){var string=\"\",i=0,c=0,c1=0,c2=0,c3=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++}else if(c<224){c2=utftext.charCodeAt(i+1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2}else{c2=utftext.charCodeAt(i+1);c3=utftext.charCodeAt(i+2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3}}return string}};r=r.replace(/<script>\\s*document\\.writeln\\(qsbs\\.bb\\('([^']+)'\\)\\);\\s*<\\/script>/g,function(match,p1){return qsbs.bb(p1)});r=r.replace(/<p[^>]*?>相邻推荐:([\\s\\S]*?)<\\/p>/,'');",
			"paragraphTagClosed": true,
			"filterTxt": "请勿开启浏览器阅读模式，否则将导致章节内容缺失及无法阅读下一章。|\\(本章完\\)",
			"filterTag": "h3, div",
			"nextPage": ".row.row-detail > div > div > div:nth-child(2) > a:nth-child(4)"
		}
	},
	{
		"url": "https://www.biquge365.net/",
		"name": "笔趣阁365",
		"comment": "搜索间隔15秒，若搜索结果为空则手动打开网页搜一次后再试",
		"search": {
			"url": "https://www.biquge365.net/s.php",
			"method": "post",
			"data": "{type: articlename, s: %s}",
			"result": "body > div.menu > div > ul > li",
			"bookName": "span.name > a",
			"author": "span.zuo > a",
			"category": "span.lei > a",
			"latestChapter": "span.jie > a",
			"lastUpdateTime": "span.time"
		},
		"book": {
			"url": "https://www.biquge365.net/book/(.*?)/",
			"latestChapterUrl": "body > div.menu > div.right > div:nth-child(1) > div > div.xinxi > span:nth-child(8) > a@href",
			"lastUpdateTime": "body > div.menu > div.right > div:nth-child(1) > div > div.xinxi > span:nth-child(7)"
		},
		"toc": {
			"url": "https://www.biquge365.net/newbook/%s/",
			"item": "body > div.menu > div.border > ul > li > a"
		},
		"chapter": {
			"title": "#neirong > h1",
			"content": "#txt",
			"paragraphTagClosed": false,
			"paragraphTag": "<br>+",
			"filterTxt": "",
			"filterTag": "p"
		}
	},
	{
		"url": "https://www.ranwen8.cc/",
		"name": "燃文小说网",
		"comment": "正文段落被base64编码",
		"search": {
			"url": "https://www.ranwen8.cc/search.html",
			"method": "post",
			"data": "{submit: 搜索, s: %s}",
			"result": "body > div.padding > div > table > tbody > tr",
			"bookName": "td:nth-child(1) > a",
			"author": "td:nth-child(3)",
			"latestChapter": "td:nth-child(2) > a",
			"lastUpdateTime": "td:nth-child(4)"
		},
		"book": {
			"url": "https://www.ranwen8.cc/book/(.*?)/",
			"bookName": "meta[property=\"og:title\"]",
			"author": "#info > h1 > small > a",
			"coverUrl": "meta[property=\"og:image\"]@js:r='https://www.ranwen8.cc'+r"
		},
		"toc": {
			"url": "https://www.ranwen8.cc/book/%s/index_1.html",
			"item": "body > div:nth-child(4) > div > ul > li > a",
			"nextPage": "body > div:nth-child(4) > div > div > select > option"
		},
		"chapter": {
			"title": "#jsnc_l > div > h1",
			"content": "#htmlContent@js:var qsbs={_keyStr:\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\",bb:function(input){var output=\"\";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\\+\\/\\=]/g,\"\");while(i<input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+String.fromCharCode(chr1);if(enc3!=64){output=output+String.fromCharCode(chr2)}if(enc4!=64){output=output+String.fromCharCode(chr3)}}output=qsbs._utf8_decode(output);return output},_utf8_encode:function(string){string=string.replace(/\\r\\n/g,\"\\n\");var utftext=\"\";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c)}else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128)}else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128)}}return utftext},_utf8_decode:function(utftext){var string=\"\";var i=0,c1,c2,c3;var c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++}else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2}else{c2=utftext.charCodeAt(i+1);c3=utftext.charCodeAt(i+2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3}}return string}};r=r.replace(/<script>\\s*document\\.writeln\\(qsbs\\.bb\\('([^']+)'\\)\\);\\s*<\\/script>/g,function(match,p1){return qsbs.bb(p1)});",
			"paragraphTagClosed": false,
			"paragraphTag": "<br>+",
			"filterTxt": "首发：~小÷说◎网】，♂小÷说◎网】，",
			"filterTag": "",
			"nextPage": "#link-next"
		}
	}
];

//#endregion
//#region src/online/rules.ts
const selector = string().optional().default("");
const searchRuleSchema = object({
	disabled: boolean().optional().default(false),
	baseUri: selector,
	timeout: number().int().min(1e3).max(12e4).optional(),
	url: string().min(1),
	method: _enum([
		"get",
		"post",
		"GET",
		"POST"
	]),
	data: selector,
	cookies: selector,
	result: string().min(1),
	bookName: string().min(1),
	author: selector,
	category: selector,
	latestChapter: selector,
	lastUpdateTime: selector,
	status: selector,
	wordCount: selector,
	nextPage: selector
});
const bookRuleSchema = object({
	url: selector,
	bookName: selector,
	author: selector,
	intro: selector,
	category: selector,
	coverUrl: selector,
	latestChapter: selector,
	latestChapterUrl: selector,
	lastUpdateTime: selector,
	status: selector
}).default({
	url: "",
	bookName: "",
	author: "",
	intro: "",
	category: "",
	coverUrl: "",
	latestChapter: "",
	latestChapterUrl: "",
	lastUpdateTime: "",
	status: ""
});
const tocRuleSchema = object({
	baseUri: selector,
	url: selector,
	list: selector,
	item: string().min(1),
	isDesc: boolean().optional().default(false),
	nextPage: selector
});
const chapterRuleSchema = object({
	title: string().min(1),
	content: string().min(1),
	paragraphTagClosed: union([boolean(), _enum(["true", "false"])]).optional().default(false),
	paragraphTag: selector,
	filterTxt: selector,
	filterTag: selector,
	nextPage: selector
});
const crawlRuleSchema = object({
	concurrency: number().int().min(1).max(50).optional(),
	minInterval: number().min(0).max(60).optional(),
	maxInterval: number().min(0).max(60).optional(),
	maxAttempts: number().int().min(1).max(11).optional(),
	retryMinInterval: number().nonnegative().optional(),
	retryMaxInterval: number().nonnegative().optional()
}).optional();
const sourceRuleSchema = object({
	url: string().url(),
	name: string().min(1),
	comment: string().optional().default(""),
	language: string().optional().default(""),
	disabled: boolean().optional().default(false),
	search: searchRuleSchema,
	book: bookRuleSchema,
	toc: tocRuleSchema,
	chapter: chapterRuleSchema,
	crawl: crawlRuleSchema
});
function selectorBase(value) {
	return value.split("@js:", 1)[0] ?? value;
}
function configuredHost(value) {
	const base = selectorBase(value);
	if (!/^https?:\/\//iu.test(base)) return null;
	try {
		return new URL(base.replace("%s", "placeholder")).hostname.toLocaleLowerCase();
	} catch {
		return null;
	}
}
function validateHttpUrl(value, label, optional$1 = false) {
	const candidate = selectorBase(value).trim();
	if (candidate.length === 0 && optional$1) return;
	try {
		const parsed = new URL(candidate.replaceAll("%s", "placeholder"));
		if (parsed.protocol !== "http:" && parsed.protocol !== "https:") throw new Error("unsupported protocol");
	} catch (cause) {
		throw new Error(`dsh-novel-reader: invalid ${label} in bundled rules`, { cause });
	}
}
function parseSoNovelRule(raw, id) {
	const rule = sourceRuleSchema.parse(raw);
	validateHttpUrl(rule.url, `source URL in ${id}`);
	validateHttpUrl(rule.search.url, `search URL in ${id}`);
	validateHttpUrl(rule.search.baseUri, `search base URI in ${id}`, true);
	validateHttpUrl(rule.toc.url, `TOC URL in ${id}`, true);
	validateHttpUrl(rule.toc.baseUri, `TOC base URI in ${id}`, true);
	if (rule.crawl?.minInterval !== void 0 && rule.crawl.maxInterval !== void 0 && rule.crawl.maxInterval < rule.crawl.minInterval) throw new Error(`dsh-novel-reader: invalid crawl interval in ${id}`);
	const hosts = [
		rule.url,
		rule.search.url,
		rule.search.baseUri,
		rule.toc.url,
		rule.toc.baseUri
	].map(configuredHost).filter((host) => host !== null);
	if (hosts.length === 0) throw new Error(`dsh-novel-reader: rule ${id} has no allowed HTTP host`);
	return {
		...rule,
		id,
		allowedHosts: new Set(hosts),
		...typeof raw.builtinTransform === "string" ? { builtinTransform: String(raw.builtinTransform) } : {}
	};
}
function loadBuiltinRules() {
	return array(unknown()).parse(main_default).map((rule, index$2) => parseSoNovelRule(rule, `sonovel-${index$2 + 1}`)).filter((rule) => !rule.disabled && !rule.search.disabled);
}

//#endregion
//#region node_modules/.pnpm/json5@2.2.3/node_modules/json5/lib/unicode.js
var require_unicode = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/json5@2.2.3/node_modules/json5/lib/unicode.js": ((exports, module) => {
	module.exports.Space_Separator = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/;
	module.exports.ID_Start = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/;
	module.exports.ID_Continue = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/;
}) });

//#endregion
//#region node_modules/.pnpm/json5@2.2.3/node_modules/json5/lib/util.js
var require_util$1 = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/json5@2.2.3/node_modules/json5/lib/util.js": ((exports, module) => {
	const unicode = require_unicode();
	module.exports = {
		isSpaceSeparator(c$1) {
			return typeof c$1 === "string" && unicode.Space_Separator.test(c$1);
		},
		isIdStartChar(c$1) {
			return typeof c$1 === "string" && (c$1 >= "a" && c$1 <= "z" || c$1 >= "A" && c$1 <= "Z" || c$1 === "$" || c$1 === "_" || unicode.ID_Start.test(c$1));
		},
		isIdContinueChar(c$1) {
			return typeof c$1 === "string" && (c$1 >= "a" && c$1 <= "z" || c$1 >= "A" && c$1 <= "Z" || c$1 >= "0" && c$1 <= "9" || c$1 === "$" || c$1 === "_" || c$1 === "‌" || c$1 === "‍" || unicode.ID_Continue.test(c$1));
		},
		isDigit(c$1) {
			return typeof c$1 === "string" && /[0-9]/.test(c$1);
		},
		isHexDigit(c$1) {
			return typeof c$1 === "string" && /[0-9A-Fa-f]/.test(c$1);
		}
	};
}) });

//#endregion
//#region node_modules/.pnpm/json5@2.2.3/node_modules/json5/lib/parse.js
var require_parse = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/json5@2.2.3/node_modules/json5/lib/parse.js": ((exports, module) => {
	const util$2 = require_util$1();
	let source;
	let parseState;
	let stack;
	let pos;
	let line;
	let column;
	let token;
	let key$1;
	let root;
	module.exports = function parse$10(text$2, reviver) {
		source = String(text$2);
		parseState = "start";
		stack = [];
		pos = 0;
		line = 1;
		column = 0;
		token = void 0;
		key$1 = void 0;
		root = void 0;
		do {
			token = lex();
			parseStates[parseState]();
		} while (token.type !== "eof");
		if (typeof reviver === "function") return internalize({ "": root }, "", reviver);
		return root;
	};
	function internalize(holder, name$1, reviver) {
		const value = holder[name$1];
		if (value != null && typeof value === "object") if (Array.isArray(value)) for (let i$1 = 0; i$1 < value.length; i$1++) {
			const key$2 = String(i$1);
			const replacement = internalize(value, key$2, reviver);
			if (replacement === void 0) delete value[key$2];
			else Object.defineProperty(value, key$2, {
				value: replacement,
				writable: true,
				enumerable: true,
				configurable: true
			});
		}
		else for (const key$2 in value) {
			const replacement = internalize(value, key$2, reviver);
			if (replacement === void 0) delete value[key$2];
			else Object.defineProperty(value, key$2, {
				value: replacement,
				writable: true,
				enumerable: true,
				configurable: true
			});
		}
		return reviver.call(holder, name$1, value);
	}
	let lexState;
	let buffer;
	let doubleQuote;
	let sign;
	let c;
	function lex() {
		lexState = "default";
		buffer = "";
		doubleQuote = false;
		sign = 1;
		for (;;) {
			c = peek();
			const token$1 = lexStates[lexState]();
			if (token$1) return token$1;
		}
	}
	function peek() {
		if (source[pos]) return String.fromCodePoint(source.codePointAt(pos));
	}
	function read() {
		const c$1 = peek();
		if (c$1 === "\n") {
			line++;
			column = 0;
		} else if (c$1) column += c$1.length;
		else column++;
		if (c$1) pos += c$1.length;
		return c$1;
	}
	const lexStates = {
		default() {
			switch (c) {
				case "	":
				case "\v":
				case "\f":
				case " ":
				case "\xA0":
				case "﻿":
				case "\n":
				case "\r":
				case "\u2028":
				case "\u2029":
					read();
					return;
				case "/":
					read();
					lexState = "comment";
					return;
				case void 0:
					read();
					return newToken("eof");
			}
			if (util$2.isSpaceSeparator(c)) {
				read();
				return;
			}
			return lexStates[parseState]();
		},
		comment() {
			switch (c) {
				case "*":
					read();
					lexState = "multiLineComment";
					return;
				case "/":
					read();
					lexState = "singleLineComment";
					return;
			}
			throw invalidChar(read());
		},
		multiLineComment() {
			switch (c) {
				case "*":
					read();
					lexState = "multiLineCommentAsterisk";
					return;
				case void 0: throw invalidChar(read());
			}
			read();
		},
		multiLineCommentAsterisk() {
			switch (c) {
				case "*":
					read();
					return;
				case "/":
					read();
					lexState = "default";
					return;
				case void 0: throw invalidChar(read());
			}
			read();
			lexState = "multiLineComment";
		},
		singleLineComment() {
			switch (c) {
				case "\n":
				case "\r":
				case "\u2028":
				case "\u2029":
					read();
					lexState = "default";
					return;
				case void 0:
					read();
					return newToken("eof");
			}
			read();
		},
		value() {
			switch (c) {
				case "{":
				case "[": return newToken("punctuator", read());
				case "n":
					read();
					literal("ull");
					return newToken("null", null);
				case "t":
					read();
					literal("rue");
					return newToken("boolean", true);
				case "f":
					read();
					literal("alse");
					return newToken("boolean", false);
				case "-":
				case "+":
					if (read() === "-") sign = -1;
					lexState = "sign";
					return;
				case ".":
					buffer = read();
					lexState = "decimalPointLeading";
					return;
				case "0":
					buffer = read();
					lexState = "zero";
					return;
				case "1":
				case "2":
				case "3":
				case "4":
				case "5":
				case "6":
				case "7":
				case "8":
				case "9":
					buffer = read();
					lexState = "decimalInteger";
					return;
				case "I":
					read();
					literal("nfinity");
					return newToken("numeric", Infinity);
				case "N":
					read();
					literal("aN");
					return newToken("numeric", NaN);
				case "\"":
				case "'":
					doubleQuote = read() === "\"";
					buffer = "";
					lexState = "string";
					return;
			}
			throw invalidChar(read());
		},
		identifierNameStartEscape() {
			if (c !== "u") throw invalidChar(read());
			read();
			const u = unicodeEscape();
			switch (u) {
				case "$":
				case "_": break;
				default:
					if (!util$2.isIdStartChar(u)) throw invalidIdentifier();
					break;
			}
			buffer += u;
			lexState = "identifierName";
		},
		identifierName() {
			switch (c) {
				case "$":
				case "_":
				case "‌":
				case "‍":
					buffer += read();
					return;
				case "\\":
					read();
					lexState = "identifierNameEscape";
					return;
			}
			if (util$2.isIdContinueChar(c)) {
				buffer += read();
				return;
			}
			return newToken("identifier", buffer);
		},
		identifierNameEscape() {
			if (c !== "u") throw invalidChar(read());
			read();
			const u = unicodeEscape();
			switch (u) {
				case "$":
				case "_":
				case "‌":
				case "‍": break;
				default:
					if (!util$2.isIdContinueChar(u)) throw invalidIdentifier();
					break;
			}
			buffer += u;
			lexState = "identifierName";
		},
		sign() {
			switch (c) {
				case ".":
					buffer = read();
					lexState = "decimalPointLeading";
					return;
				case "0":
					buffer = read();
					lexState = "zero";
					return;
				case "1":
				case "2":
				case "3":
				case "4":
				case "5":
				case "6":
				case "7":
				case "8":
				case "9":
					buffer = read();
					lexState = "decimalInteger";
					return;
				case "I":
					read();
					literal("nfinity");
					return newToken("numeric", sign * Infinity);
				case "N":
					read();
					literal("aN");
					return newToken("numeric", NaN);
			}
			throw invalidChar(read());
		},
		zero() {
			switch (c) {
				case ".":
					buffer += read();
					lexState = "decimalPoint";
					return;
				case "e":
				case "E":
					buffer += read();
					lexState = "decimalExponent";
					return;
				case "x":
				case "X":
					buffer += read();
					lexState = "hexadecimal";
					return;
			}
			return newToken("numeric", sign * 0);
		},
		decimalInteger() {
			switch (c) {
				case ".":
					buffer += read();
					lexState = "decimalPoint";
					return;
				case "e":
				case "E":
					buffer += read();
					lexState = "decimalExponent";
					return;
			}
			if (util$2.isDigit(c)) {
				buffer += read();
				return;
			}
			return newToken("numeric", sign * Number(buffer));
		},
		decimalPointLeading() {
			if (util$2.isDigit(c)) {
				buffer += read();
				lexState = "decimalFraction";
				return;
			}
			throw invalidChar(read());
		},
		decimalPoint() {
			switch (c) {
				case "e":
				case "E":
					buffer += read();
					lexState = "decimalExponent";
					return;
			}
			if (util$2.isDigit(c)) {
				buffer += read();
				lexState = "decimalFraction";
				return;
			}
			return newToken("numeric", sign * Number(buffer));
		},
		decimalFraction() {
			switch (c) {
				case "e":
				case "E":
					buffer += read();
					lexState = "decimalExponent";
					return;
			}
			if (util$2.isDigit(c)) {
				buffer += read();
				return;
			}
			return newToken("numeric", sign * Number(buffer));
		},
		decimalExponent() {
			switch (c) {
				case "+":
				case "-":
					buffer += read();
					lexState = "decimalExponentSign";
					return;
			}
			if (util$2.isDigit(c)) {
				buffer += read();
				lexState = "decimalExponentInteger";
				return;
			}
			throw invalidChar(read());
		},
		decimalExponentSign() {
			if (util$2.isDigit(c)) {
				buffer += read();
				lexState = "decimalExponentInteger";
				return;
			}
			throw invalidChar(read());
		},
		decimalExponentInteger() {
			if (util$2.isDigit(c)) {
				buffer += read();
				return;
			}
			return newToken("numeric", sign * Number(buffer));
		},
		hexadecimal() {
			if (util$2.isHexDigit(c)) {
				buffer += read();
				lexState = "hexadecimalInteger";
				return;
			}
			throw invalidChar(read());
		},
		hexadecimalInteger() {
			if (util$2.isHexDigit(c)) {
				buffer += read();
				return;
			}
			return newToken("numeric", sign * Number(buffer));
		},
		string() {
			switch (c) {
				case "\\":
					read();
					buffer += escape();
					return;
				case "\"":
					if (doubleQuote) {
						read();
						return newToken("string", buffer);
					}
					buffer += read();
					return;
				case "'":
					if (!doubleQuote) {
						read();
						return newToken("string", buffer);
					}
					buffer += read();
					return;
				case "\n":
				case "\r": throw invalidChar(read());
				case "\u2028":
				case "\u2029":
					separatorChar(c);
					break;
				case void 0: throw invalidChar(read());
			}
			buffer += read();
		},
		start() {
			switch (c) {
				case "{":
				case "[": return newToken("punctuator", read());
			}
			lexState = "value";
		},
		beforePropertyName() {
			switch (c) {
				case "$":
				case "_":
					buffer = read();
					lexState = "identifierName";
					return;
				case "\\":
					read();
					lexState = "identifierNameStartEscape";
					return;
				case "}": return newToken("punctuator", read());
				case "\"":
				case "'":
					doubleQuote = read() === "\"";
					lexState = "string";
					return;
			}
			if (util$2.isIdStartChar(c)) {
				buffer += read();
				lexState = "identifierName";
				return;
			}
			throw invalidChar(read());
		},
		afterPropertyName() {
			if (c === ":") return newToken("punctuator", read());
			throw invalidChar(read());
		},
		beforePropertyValue() {
			lexState = "value";
		},
		afterPropertyValue() {
			switch (c) {
				case ",":
				case "}": return newToken("punctuator", read());
			}
			throw invalidChar(read());
		},
		beforeArrayValue() {
			if (c === "]") return newToken("punctuator", read());
			lexState = "value";
		},
		afterArrayValue() {
			switch (c) {
				case ",":
				case "]": return newToken("punctuator", read());
			}
			throw invalidChar(read());
		},
		end() {
			throw invalidChar(read());
		}
	};
	function newToken(type, value) {
		return {
			type,
			value,
			line,
			column
		};
	}
	function literal(s) {
		for (const c$1 of s) {
			if (peek() !== c$1) throw invalidChar(read());
			read();
		}
	}
	function escape() {
		switch (peek()) {
			case "b":
				read();
				return "\b";
			case "f":
				read();
				return "\f";
			case "n":
				read();
				return "\n";
			case "r":
				read();
				return "\r";
			case "t":
				read();
				return "	";
			case "v":
				read();
				return "\v";
			case "0":
				read();
				if (util$2.isDigit(peek())) throw invalidChar(read());
				return "\0";
			case "x":
				read();
				return hexEscape();
			case "u":
				read();
				return unicodeEscape();
			case "\n":
			case "\u2028":
			case "\u2029":
				read();
				return "";
			case "\r":
				read();
				if (peek() === "\n") read();
				return "";
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9": throw invalidChar(read());
			case void 0: throw invalidChar(read());
		}
		return read();
	}
	function hexEscape() {
		let buffer$1 = "";
		let c$1 = peek();
		if (!util$2.isHexDigit(c$1)) throw invalidChar(read());
		buffer$1 += read();
		c$1 = peek();
		if (!util$2.isHexDigit(c$1)) throw invalidChar(read());
		buffer$1 += read();
		return String.fromCodePoint(parseInt(buffer$1, 16));
	}
	function unicodeEscape() {
		let buffer$1 = "";
		let count = 4;
		while (count-- > 0) {
			const c$1 = peek();
			if (!util$2.isHexDigit(c$1)) throw invalidChar(read());
			buffer$1 += read();
		}
		return String.fromCodePoint(parseInt(buffer$1, 16));
	}
	const parseStates = {
		start() {
			if (token.type === "eof") throw invalidEOF();
			push$1();
		},
		beforePropertyName() {
			switch (token.type) {
				case "identifier":
				case "string":
					key$1 = token.value;
					parseState = "afterPropertyName";
					return;
				case "punctuator":
					pop();
					return;
				case "eof": throw invalidEOF();
			}
		},
		afterPropertyName() {
			if (token.type === "eof") throw invalidEOF();
			parseState = "beforePropertyValue";
		},
		beforePropertyValue() {
			if (token.type === "eof") throw invalidEOF();
			push$1();
		},
		beforeArrayValue() {
			if (token.type === "eof") throw invalidEOF();
			if (token.type === "punctuator" && token.value === "]") {
				pop();
				return;
			}
			push$1();
		},
		afterPropertyValue() {
			if (token.type === "eof") throw invalidEOF();
			switch (token.value) {
				case ",":
					parseState = "beforePropertyName";
					return;
				case "}": pop();
			}
		},
		afterArrayValue() {
			if (token.type === "eof") throw invalidEOF();
			switch (token.value) {
				case ",":
					parseState = "beforeArrayValue";
					return;
				case "]": pop();
			}
		},
		end() {}
	};
	function push$1() {
		let value;
		switch (token.type) {
			case "punctuator":
				switch (token.value) {
					case "{":
						value = {};
						break;
					case "[":
						value = [];
						break;
				}
				break;
			case "null":
			case "boolean":
			case "numeric":
			case "string":
				value = token.value;
				break;
		}
		if (root === void 0) root = value;
		else {
			const parent$1 = stack[stack.length - 1];
			if (Array.isArray(parent$1)) parent$1.push(value);
			else Object.defineProperty(parent$1, key$1, {
				value,
				writable: true,
				enumerable: true,
				configurable: true
			});
		}
		if (value !== null && typeof value === "object") {
			stack.push(value);
			if (Array.isArray(value)) parseState = "beforeArrayValue";
			else parseState = "beforePropertyName";
		} else {
			const current = stack[stack.length - 1];
			if (current == null) parseState = "end";
			else if (Array.isArray(current)) parseState = "afterArrayValue";
			else parseState = "afterPropertyValue";
		}
	}
	function pop() {
		stack.pop();
		const current = stack[stack.length - 1];
		if (current == null) parseState = "end";
		else if (Array.isArray(current)) parseState = "afterArrayValue";
		else parseState = "afterPropertyValue";
	}
	function invalidChar(c$1) {
		if (c$1 === void 0) return syntaxError(`JSON5: invalid end of input at ${line}:${column}`);
		return syntaxError(`JSON5: invalid character '${formatChar(c$1)}' at ${line}:${column}`);
	}
	function invalidEOF() {
		return syntaxError(`JSON5: invalid end of input at ${line}:${column}`);
	}
	function invalidIdentifier() {
		column -= 5;
		return syntaxError(`JSON5: invalid identifier character at ${line}:${column}`);
	}
	function separatorChar(c$1) {
		console.warn(`JSON5: '${formatChar(c$1)}' in strings is not valid ECMAScript; consider escaping`);
	}
	function formatChar(c$1) {
		const replacements = {
			"'": "\\'",
			"\"": "\\\"",
			"\\": "\\\\",
			"\b": "\\b",
			"\f": "\\f",
			"\n": "\\n",
			"\r": "\\r",
			"	": "\\t",
			"\v": "\\v",
			"\0": "\\0",
			"\u2028": "\\u2028",
			"\u2029": "\\u2029"
		};
		if (replacements[c$1]) return replacements[c$1];
		if (c$1 < " ") {
			const hexString = c$1.charCodeAt(0).toString(16);
			return "\\x" + ("00" + hexString).substring(hexString.length);
		}
		return c$1;
	}
	function syntaxError(message) {
		const err = new SyntaxError(message);
		err.lineNumber = line;
		err.columnNumber = column;
		return err;
	}
}) });

//#endregion
//#region node_modules/.pnpm/json5@2.2.3/node_modules/json5/lib/stringify.js
var require_stringify = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/json5@2.2.3/node_modules/json5/lib/stringify.js": ((exports, module) => {
	const util$1 = require_util$1();
	module.exports = function stringify$2(value, replacer, space) {
		const stack$1 = [];
		let indent = "";
		let propertyList;
		let replacerFunc;
		let gap = "";
		let quote;
		if (replacer != null && typeof replacer === "object" && !Array.isArray(replacer)) {
			space = replacer.space;
			quote = replacer.quote;
			replacer = replacer.replacer;
		}
		if (typeof replacer === "function") replacerFunc = replacer;
		else if (Array.isArray(replacer)) {
			propertyList = [];
			for (const v of replacer) {
				let item;
				if (typeof v === "string") item = v;
				else if (typeof v === "number" || v instanceof String || v instanceof Number) item = String(v);
				if (item !== void 0 && propertyList.indexOf(item) < 0) propertyList.push(item);
			}
		}
		if (space instanceof Number) space = Number(space);
		else if (space instanceof String) space = String(space);
		if (typeof space === "number") {
			if (space > 0) {
				space = Math.min(10, Math.floor(space));
				gap = "          ".substr(0, space);
			}
		} else if (typeof space === "string") gap = space.substr(0, 10);
		return serializeProperty("", { "": value });
		function serializeProperty(key$2, holder) {
			let value$1 = holder[key$2];
			if (value$1 != null) {
				if (typeof value$1.toJSON5 === "function") value$1 = value$1.toJSON5(key$2);
				else if (typeof value$1.toJSON === "function") value$1 = value$1.toJSON(key$2);
			}
			if (replacerFunc) value$1 = replacerFunc.call(holder, key$2, value$1);
			if (value$1 instanceof Number) value$1 = Number(value$1);
			else if (value$1 instanceof String) value$1 = String(value$1);
			else if (value$1 instanceof Boolean) value$1 = value$1.valueOf();
			switch (value$1) {
				case null: return "null";
				case true: return "true";
				case false: return "false";
			}
			if (typeof value$1 === "string") return quoteString(value$1, false);
			if (typeof value$1 === "number") return String(value$1);
			if (typeof value$1 === "object") return Array.isArray(value$1) ? serializeArray$1(value$1) : serializeObject(value$1);
		}
		function quoteString(value$1) {
			const quotes = {
				"'": .1,
				"\"": .2
			};
			const replacements = {
				"'": "\\'",
				"\"": "\\\"",
				"\\": "\\\\",
				"\b": "\\b",
				"\f": "\\f",
				"\n": "\\n",
				"\r": "\\r",
				"	": "\\t",
				"\v": "\\v",
				"\0": "\\0",
				"\u2028": "\\u2028",
				"\u2029": "\\u2029"
			};
			let product = "";
			for (let i$1 = 0; i$1 < value$1.length; i$1++) {
				const c$1 = value$1[i$1];
				switch (c$1) {
					case "'":
					case "\"":
						quotes[c$1]++;
						product += c$1;
						continue;
					case "\0": if (util$1.isDigit(value$1[i$1 + 1])) {
						product += "\\x00";
						continue;
					}
				}
				if (replacements[c$1]) {
					product += replacements[c$1];
					continue;
				}
				if (c$1 < " ") {
					let hexString = c$1.charCodeAt(0).toString(16);
					product += "\\x" + ("00" + hexString).substring(hexString.length);
					continue;
				}
				product += c$1;
			}
			const quoteChar = quote || Object.keys(quotes).reduce((a, b) => quotes[a] < quotes[b] ? a : b);
			product = product.replace(new RegExp(quoteChar, "g"), replacements[quoteChar]);
			return quoteChar + product + quoteChar;
		}
		function serializeObject(value$1) {
			if (stack$1.indexOf(value$1) >= 0) throw TypeError("Converting circular structure to JSON5");
			stack$1.push(value$1);
			let stepback = indent;
			indent = indent + gap;
			let keys = propertyList || Object.keys(value$1);
			let partial$1 = [];
			for (const key$2 of keys) {
				const propertyString = serializeProperty(key$2, value$1);
				if (propertyString !== void 0) {
					let member = serializeKey(key$2) + ":";
					if (gap !== "") member += " ";
					member += propertyString;
					partial$1.push(member);
				}
			}
			let final;
			if (partial$1.length === 0) final = "{}";
			else {
				let properties;
				if (gap === "") {
					properties = partial$1.join(",");
					final = "{" + properties + "}";
				} else {
					let separator = ",\n" + indent;
					properties = partial$1.join(separator);
					final = "{\n" + indent + properties + ",\n" + stepback + "}";
				}
			}
			stack$1.pop();
			indent = stepback;
			return final;
		}
		function serializeKey(key$2) {
			if (key$2.length === 0) return quoteString(key$2, true);
			const firstChar = String.fromCodePoint(key$2.codePointAt(0));
			if (!util$1.isIdStartChar(firstChar)) return quoteString(key$2, true);
			for (let i$1 = firstChar.length; i$1 < key$2.length; i$1++) if (!util$1.isIdContinueChar(String.fromCodePoint(key$2.codePointAt(i$1)))) return quoteString(key$2, true);
			return key$2;
		}
		function serializeArray$1(value$1) {
			if (stack$1.indexOf(value$1) >= 0) throw TypeError("Converting circular structure to JSON5");
			stack$1.push(value$1);
			let stepback = indent;
			indent = indent + gap;
			let partial$1 = [];
			for (let i$1 = 0; i$1 < value$1.length; i$1++) {
				const propertyString = serializeProperty(String(i$1), value$1);
				partial$1.push(propertyString !== void 0 ? propertyString : "null");
			}
			let final;
			if (partial$1.length === 0) final = "[]";
			else if (gap === "") final = "[" + partial$1.join(",") + "]";
			else {
				let separator = ",\n" + indent;
				let properties = partial$1.join(separator);
				final = "[\n" + indent + properties + ",\n" + stepback + "]";
			}
			stack$1.pop();
			indent = stepback;
			return final;
		}
	};
}) });

//#endregion
//#region node_modules/.pnpm/json5@2.2.3/node_modules/json5/lib/index.js
var require_lib$1 = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/json5@2.2.3/node_modules/json5/lib/index.js": ((exports, module) => {
	const JSON5$2 = {
		parse: require_parse(),
		stringify: require_stringify()
	};
	module.exports = JSON5$2;
}) });

//#endregion
//#region node_modules/.pnpm/@xmldom+xmldom@0.9.12/node_modules/@xmldom/xmldom/lib/conventions.js
var require_conventions = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/@xmldom+xmldom@0.9.12/node_modules/@xmldom/xmldom/lib/conventions.js": ((exports) => {
	/**
	* Ponyfill for `Array.prototype.find` which is only available in ES6 runtimes.
	*
	* Works with anything that has a `length` property and index access properties,
	* including NodeList.
	*
	* @param {T[] | { length: number; [number]: T }} list
	* @param {function (item: T, index: number, list:T[]):boolean} predicate
	* @param {Partial<Pick<ArrayConstructor['prototype'], 'find'>>?} ac
	* Allows injecting a custom implementation in tests (`Array.prototype` by default).
	* @returns {T | undefined}
	* @template {unknown} T
	* @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
	* @see https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.find
	*/
	function find$1(list, predicate, ac) {
		if (ac === void 0) ac = Array.prototype;
		if (list && typeof ac.find === "function") return ac.find.call(list, predicate);
		for (var i$1 = 0; i$1 < list.length; i$1++) if (hasOwn$2(list, i$1)) {
			var item = list[i$1];
			if (predicate.call(void 0, item, i$1, list)) return item;
		}
	}
	/**
	* "Shallow freezes" an object to render it immutable.
	* Uses `Object.freeze` if available,
	* otherwise the immutability is only in the type.
	*
	* Is used to create "enum like" objects.
	*
	* If `Object.getOwnPropertyDescriptors` is available,
	* a new object with all properties of object but without any prototype is created and returned
	* after freezing it.
	*
	* @param {T} object
	* The object to freeze.
	* @param {Pick<ObjectConstructor, 'create' | 'freeze' | 'getOwnPropertyDescriptors'>} [oc=Object]
	* `Object` by default,
	* allows to inject custom object constructor for tests.
	* @returns {Readonly<T>}
	* @template {Object} T
	* @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
	* @prettierignore
	*/
	function freeze$1(object$1, oc) {
		if (oc === void 0) oc = Object;
		if (oc && typeof oc.getOwnPropertyDescriptors === "function") object$1 = oc.create(null, oc.getOwnPropertyDescriptors(object$1));
		return oc && typeof oc.freeze === "function" ? oc.freeze(object$1) : object$1;
	}
	/**
	* Implementation for `Object.hasOwn` but ES5 compatible.
	*
	* @param {any} object
	* @param {string | number} key
	* @returns {boolean}
	*/
	function hasOwn$2(object$1, key$2) {
		return Object.prototype.hasOwnProperty.call(object$1, key$2);
	}
	/**
	* Since xmldom can not rely on `Object.assign`,
	* it uses/provides a simplified version that is sufficient for its needs.
	*
	* @param {Object} target
	* @param {Object | null | undefined} source
	* @returns {Object}
	* The target with the merged/overridden properties.
	* @throws {TypeError}
	* If target is not an object.
	* @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
	* @see https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.assign
	*/
	function assign(target, source$1) {
		if (target === null || typeof target !== "object") throw new TypeError("target is not an object");
		for (var key$2 in source$1) if (hasOwn$2(source$1, key$2)) target[key$2] = source$1[key$2];
		return target;
	}
	/**
	* A number of attributes are boolean attributes.
	* The presence of a boolean attribute on an element represents the `true` value,
	* and the absence of the attribute represents the `false` value.
	*
	* If the attribute is present, its value must either be the empty string, or a value that is
	* an ASCII case-insensitive match for the attribute's canonical name,
	* with no leading or trailing whitespace.
	*
	* Note: The values `"true"` and `"false"` are not allowed on boolean attributes.
	* To represent a `false` value, the attribute has to be omitted altogether.
	*
	* @see https://html.spec.whatwg.org/#boolean-attributes
	* @see https://html.spec.whatwg.org/#attributes-3
	*/
	var HTML_BOOLEAN_ATTRIBUTES = freeze$1({
		allowfullscreen: true,
		async: true,
		autofocus: true,
		autoplay: true,
		checked: true,
		controls: true,
		default: true,
		defer: true,
		disabled: true,
		formnovalidate: true,
		hidden: true,
		ismap: true,
		itemscope: true,
		loop: true,
		multiple: true,
		muted: true,
		nomodule: true,
		novalidate: true,
		open: true,
		playsinline: true,
		readonly: true,
		required: true,
		reversed: true,
		selected: true
	});
	/**
	* Check if `name` is matching one of the HTML boolean attribute names.
	* This method doesn't check if such attributes are allowed in the context of the current
	* document/parsing.
	*
	* @param {string} name
	* @returns {boolean}
	* @see {@link HTML_BOOLEAN_ATTRIBUTES}
	* @see https://html.spec.whatwg.org/#boolean-attributes
	* @see https://html.spec.whatwg.org/#attributes-3
	*/
	function isHTMLBooleanAttribute(name$1) {
		return hasOwn$2(HTML_BOOLEAN_ATTRIBUTES, name$1.toLowerCase());
	}
	/**
	* Void elements only have a start tag; end tags must not be specified for void elements.
	* These elements should be written as self-closing like this: `<area />`.
	* This should not be confused with optional tags that HTML allows to omit the end tag for
	* (like `li`, `tr` and others), which can have content after them,
	* so they can not be written as self-closing.
	* xmldom does not have any logic for optional end tags cases,
	* and will report them as a warning.
	* Content that would go into the unopened element,
	* will instead be added as a sibling text node.
	*
	* @type {Readonly<{
	* 	area: boolean;
	* 	col: boolean;
	* 	img: boolean;
	* 	wbr: boolean;
	* 	link: boolean;
	* 	hr: boolean;
	* 	source: boolean;
	* 	br: boolean;
	* 	input: boolean;
	* 	param: boolean;
	* 	meta: boolean;
	* 	embed: boolean;
	* 	track: boolean;
	* 	base: boolean;
	* }>}
	* @see https://html.spec.whatwg.org/#void-elements
	* @see https://html.spec.whatwg.org/#optional-tags
	*/
	var HTML_VOID_ELEMENTS = freeze$1({
		area: true,
		base: true,
		br: true,
		col: true,
		embed: true,
		hr: true,
		img: true,
		input: true,
		link: true,
		meta: true,
		param: true,
		source: true,
		track: true,
		wbr: true
	});
	/**
	* Check if `tagName` is matching one of the HTML void element names.
	* This method doesn't check if such tags are allowed in the context of the current
	* document/parsing.
	*
	* @param {string} tagName
	* @returns {boolean}
	* @see {@link HTML_VOID_ELEMENTS}
	* @see https://html.spec.whatwg.org/#void-elements
	*/
	function isHTMLVoidElement$1(tagName) {
		return hasOwn$2(HTML_VOID_ELEMENTS, tagName.toLowerCase());
	}
	/**
	* Tag names that are raw text elements according to HTML spec.
	* The value denotes whether they are escapable or not.
	*
	* @see {@link isHTMLEscapableRawTextElement}
	* @see {@link isHTMLRawTextElement}
	* @see https://html.spec.whatwg.org/#raw-text-elements
	* @see https://html.spec.whatwg.org/#escapable-raw-text-elements
	*/
	var HTML_RAW_TEXT_ELEMENTS = freeze$1({
		script: false,
		style: false,
		textarea: true,
		title: true
	});
	/**
	* Check if `tagName` is matching one of the HTML raw text element names.
	* This method doesn't check if such tags are allowed in the context of the current
	* document/parsing.
	*
	* @param {string} tagName
	* @returns {boolean}
	* @see {@link isHTMLEscapableRawTextElement}
	* @see {@link HTML_RAW_TEXT_ELEMENTS}
	* @see https://html.spec.whatwg.org/#raw-text-elements
	* @see https://html.spec.whatwg.org/#escapable-raw-text-elements
	*/
	function isHTMLRawTextElement$2(tagName) {
		var key$2 = tagName.toLowerCase();
		return hasOwn$2(HTML_RAW_TEXT_ELEMENTS, key$2) && !HTML_RAW_TEXT_ELEMENTS[key$2];
	}
	/**
	* Check if `tagName` is matching one of the HTML escapable raw text element names.
	* This method doesn't check if such tags are allowed in the context of the current
	* document/parsing.
	*
	* @param {string} tagName
	* @returns {boolean}
	* @see {@link isHTMLRawTextElement}
	* @see {@link HTML_RAW_TEXT_ELEMENTS}
	* @see https://html.spec.whatwg.org/#raw-text-elements
	* @see https://html.spec.whatwg.org/#escapable-raw-text-elements
	*/
	function isHTMLEscapableRawTextElement$1(tagName) {
		var key$2 = tagName.toLowerCase();
		return hasOwn$2(HTML_RAW_TEXT_ELEMENTS, key$2) && HTML_RAW_TEXT_ELEMENTS[key$2];
	}
	/**
	* Only returns true if `value` matches MIME_TYPE.HTML, which indicates an HTML document.
	*
	* @param {string} mimeType
	* @returns {mimeType is 'text/html'}
	* @see https://www.iana.org/assignments/media-types/text/html
	* @see https://en.wikipedia.org/wiki/HTML
	* @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString
	* @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring
	*/
	function isHTMLMimeType$3(mimeType) {
		return mimeType === MIME_TYPE$2.HTML;
	}
	/**
	* For both the `text/html` and the `application/xhtml+xml` namespace the spec defines that the
	* HTML namespace is provided as the default.
	*
	* @param {string} mimeType
	* @returns {boolean}
	* @see https://dom.spec.whatwg.org/#dom-document-createelement
	* @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument
	* @see https://dom.spec.whatwg.org/#dom-domimplementation-createhtmldocument
	*/
	function hasDefaultHTMLNamespace$2(mimeType) {
		return isHTMLMimeType$3(mimeType) || mimeType === MIME_TYPE$2.XML_XHTML_APPLICATION;
	}
	/**
	* All mime types that are allowed as input to `DOMParser.parseFromString`
	*
	* @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString#Argument02
	*      MDN
	* @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#domparsersupportedtype
	*      WHATWG HTML Spec
	* @see {@link DOMParser.prototype.parseFromString}
	*/
	var MIME_TYPE$2 = freeze$1({
		HTML: "text/html",
		XML_APPLICATION: "application/xml",
		XML_TEXT: "text/xml",
		XML_XHTML_APPLICATION: "application/xhtml+xml",
		XML_SVG_IMAGE: "image/svg+xml"
	});
	/**
	* @typedef {'application/xhtml+xml' | 'application/xml' | 'image/svg+xml' | 'text/html' | 'text/xml'}
	* MimeType
	*/
	/**
	* @type {MimeType[]}
	* @private
	* Basically `Object.values`, which is not available in ES5.
	*/
	var _MIME_TYPES = Object.keys(MIME_TYPE$2).map(function(key$2) {
		return MIME_TYPE$2[key$2];
	});
	/**
	* Only returns true if `mimeType` is one of the allowed values for
	* `DOMParser.parseFromString`.
	*
	* @param {string} mimeType
	* @returns {mimeType is 'application/xhtml+xml' | 'application/xml' | 'image/svg+xml' |  'text/html' | 'text/xml'}
	*
	*/
	function isValidMimeType$1(mimeType) {
		return _MIME_TYPES.indexOf(mimeType) > -1;
	}
	/**
	* Namespaces that are used in this code base.
	*
	* @see http://www.w3.org/TR/REC-xml-names
	*/
	var NAMESPACE$3 = freeze$1({
		HTML: "http://www.w3.org/1999/xhtml",
		SVG: "http://www.w3.org/2000/svg",
		XML: "http://www.w3.org/XML/1998/namespace",
		XMLNS: "http://www.w3.org/2000/xmlns/"
	});
	exports.assign = assign;
	exports.find = find$1;
	exports.freeze = freeze$1;
	exports.HTML_BOOLEAN_ATTRIBUTES = HTML_BOOLEAN_ATTRIBUTES;
	exports.HTML_RAW_TEXT_ELEMENTS = HTML_RAW_TEXT_ELEMENTS;
	exports.HTML_VOID_ELEMENTS = HTML_VOID_ELEMENTS;
	exports.hasDefaultHTMLNamespace = hasDefaultHTMLNamespace$2;
	exports.hasOwn = hasOwn$2;
	exports.isHTMLBooleanAttribute = isHTMLBooleanAttribute;
	exports.isHTMLRawTextElement = isHTMLRawTextElement$2;
	exports.isHTMLEscapableRawTextElement = isHTMLEscapableRawTextElement$1;
	exports.isHTMLMimeType = isHTMLMimeType$3;
	exports.isHTMLVoidElement = isHTMLVoidElement$1;
	exports.isValidMimeType = isValidMimeType$1;
	exports.MIME_TYPE = MIME_TYPE$2;
	exports.NAMESPACE = NAMESPACE$3;
}) });

//#endregion
//#region node_modules/.pnpm/@xmldom+xmldom@0.9.12/node_modules/@xmldom/xmldom/lib/errors.js
var require_errors = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/@xmldom+xmldom@0.9.12/node_modules/@xmldom/xmldom/lib/errors.js": ((exports) => {
	var conventions$4 = require_conventions();
	function extendError(constructor, writableName) {
		constructor.prototype = Object.create(Error.prototype, {
			constructor: { value: constructor },
			name: {
				value: constructor.name,
				enumerable: true,
				writable: writableName
			}
		});
	}
	var DOMExceptionName$1 = conventions$4.freeze({
		Error: "Error",
		IndexSizeError: "IndexSizeError",
		DomstringSizeError: "DomstringSizeError",
		HierarchyRequestError: "HierarchyRequestError",
		WrongDocumentError: "WrongDocumentError",
		InvalidCharacterError: "InvalidCharacterError",
		NoDataAllowedError: "NoDataAllowedError",
		NoModificationAllowedError: "NoModificationAllowedError",
		NotFoundError: "NotFoundError",
		NotSupportedError: "NotSupportedError",
		InUseAttributeError: "InUseAttributeError",
		InvalidStateError: "InvalidStateError",
		SyntaxError: "SyntaxError",
		InvalidModificationError: "InvalidModificationError",
		NamespaceError: "NamespaceError",
		InvalidAccessError: "InvalidAccessError",
		ValidationError: "ValidationError",
		TypeMismatchError: "TypeMismatchError",
		SecurityError: "SecurityError",
		NetworkError: "NetworkError",
		AbortError: "AbortError",
		URLMismatchError: "URLMismatchError",
		QuotaExceededError: "QuotaExceededError",
		TimeoutError: "TimeoutError",
		InvalidNodeTypeError: "InvalidNodeTypeError",
		DataCloneError: "DataCloneError",
		EncodingError: "EncodingError",
		NotReadableError: "NotReadableError",
		UnknownError: "UnknownError",
		ConstraintError: "ConstraintError",
		DataError: "DataError",
		TransactionInactiveError: "TransactionInactiveError",
		ReadOnlyError: "ReadOnlyError",
		VersionError: "VersionError",
		OperationError: "OperationError",
		NotAllowedError: "NotAllowedError",
		OptOutError: "OptOutError"
	});
	var DOMExceptionNames = Object.keys(DOMExceptionName$1);
	function isValidDomExceptionCode(value) {
		return typeof value === "number" && value >= 1 && value <= 25;
	}
	function endsWithError(value) {
		return typeof value === "string" && value.substring(value.length - DOMExceptionName$1.Error.length) === DOMExceptionName$1.Error;
	}
	/**
	* DOM operations only raise exceptions in "exceptional" circumstances, i.e., when an operation
	* is impossible to perform (either for logical reasons, because data is lost, or because the
	* implementation has become unstable). In general, DOM methods return specific error values in
	* ordinary processing situations, such as out-of-bound errors when using NodeList.
	*
	* Implementations should raise other exceptions under other circumstances. For example,
	* implementations should raise an implementation-dependent exception if a null argument is
	* passed when null was not expected.
	*
	* This implementation supports the following usages:
	* 1. according to the living standard (both arguments are optional):
	* ```
	* new DOMException("message (can be empty)", DOMExceptionNames.HierarchyRequestError)
	* ```
	* 2. according to previous xmldom implementation (only the first argument is required):
	* ```
	* new DOMException(DOMException.HIERARCHY_REQUEST_ERR, "optional message")
	* ```
	* both result in the proper name being set.
	*
	* @class DOMException
	* @param {number | string} messageOrCode
	* The reason why an operation is not acceptable.
	* If it is a number, it is used to determine the `name`, see
	* {@link https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-258A00AF ExceptionCode}
	* @param {string | keyof typeof DOMExceptionName | Error} [nameOrMessage]
	* The `name` to use for the error.
	* If `messageOrCode` is a number, this arguments is used as the `message` instead.
	* @augments Error
	* @see https://webidl.spec.whatwg.org/#idl-DOMException
	* @see https://webidl.spec.whatwg.org/#dfn-error-names-table
	* @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-17189187
	* @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
	* @see http://www.w3.org/TR/REC-DOM-Level-1/ecma-script-language-binding.html
	*/
	function DOMException$3(messageOrCode, nameOrMessage) {
		if (isValidDomExceptionCode(messageOrCode)) {
			this.name = DOMExceptionNames[messageOrCode];
			this.message = nameOrMessage || "";
		} else {
			this.message = messageOrCode;
			this.name = endsWithError(nameOrMessage) ? nameOrMessage : DOMExceptionName$1.Error;
		}
		if (Error.captureStackTrace) Error.captureStackTrace(this, DOMException$3);
	}
	extendError(DOMException$3, true);
	Object.defineProperties(DOMException$3.prototype, { code: {
		enumerable: true,
		get: function() {
			var code = DOMExceptionNames.indexOf(this.name);
			if (isValidDomExceptionCode(code)) return code;
			return 0;
		}
	} });
	var ExceptionCode = {
		INDEX_SIZE_ERR: 1,
		DOMSTRING_SIZE_ERR: 2,
		HIERARCHY_REQUEST_ERR: 3,
		WRONG_DOCUMENT_ERR: 4,
		INVALID_CHARACTER_ERR: 5,
		NO_DATA_ALLOWED_ERR: 6,
		NO_MODIFICATION_ALLOWED_ERR: 7,
		NOT_FOUND_ERR: 8,
		NOT_SUPPORTED_ERR: 9,
		INUSE_ATTRIBUTE_ERR: 10,
		INVALID_STATE_ERR: 11,
		SYNTAX_ERR: 12,
		INVALID_MODIFICATION_ERR: 13,
		NAMESPACE_ERR: 14,
		INVALID_ACCESS_ERR: 15,
		VALIDATION_ERR: 16,
		TYPE_MISMATCH_ERR: 17,
		SECURITY_ERR: 18,
		NETWORK_ERR: 19,
		ABORT_ERR: 20,
		URL_MISMATCH_ERR: 21,
		QUOTA_EXCEEDED_ERR: 22,
		TIMEOUT_ERR: 23,
		INVALID_NODE_TYPE_ERR: 24,
		DATA_CLONE_ERR: 25
	};
	var entries = Object.entries(ExceptionCode);
	for (var i = 0; i < entries.length; i++) {
		var key = entries[i][0];
		DOMException$3[key] = entries[i][1];
	}
	/**
	* Creates an error that will not be caught by XMLReader aka the SAX parser.
	*
	* @class
	* @param {string} message
	* @param {any} [locator]
	* @param {Error} [cause]
	* The error that caused this one, e.g. a `DOMException` thrown while building the DOM.
	*/
	function ParseError$2(message, locator, cause) {
		this.message = message;
		this.locator = locator;
		this.cause = cause;
		if (Error.captureStackTrace) Error.captureStackTrace(this, ParseError$2);
	}
	extendError(ParseError$2);
	exports.DOMException = DOMException$3;
	exports.DOMExceptionName = DOMExceptionName$1;
	exports.ExceptionCode = ExceptionCode;
	exports.ParseError = ParseError$2;
}) });

//#endregion
//#region node_modules/.pnpm/@xmldom+xmldom@0.9.12/node_modules/@xmldom/xmldom/lib/grammar.js
var require_grammar = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/@xmldom+xmldom@0.9.12/node_modules/@xmldom/xmldom/lib/grammar.js": ((exports) => {
	/**
	* Detects relevant unicode support for regular expressions in the runtime.
	* Should the runtime not accepts the flag `u` or unicode ranges,
	* character classes without unicode handling will be used.
	*
	* @param {typeof RegExp} [RegExpImpl=RegExp]
	* For testing: the RegExp class.
	* @returns {boolean}
	* @see https://node.green/#ES2015-syntax-RegExp--y--and--u--flags
	*/
	function detectUnicodeSupport(RegExpImpl) {
		try {
			if (typeof RegExpImpl !== "function") RegExpImpl = RegExp;
			var match = new RegExpImpl("𝌆", "u").exec("𝌆");
			return !!match && match[0].length === 2;
		} catch (error$1) {}
		return false;
	}
	var UNICODE_SUPPORT = detectUnicodeSupport();
	/**
	* Removes `[`, `]` and any trailing quantifiers from the source of a RegExp.
	*
	* @param {RegExp} regexp
	*/
	function chars(regexp) {
		if (regexp.source[0] !== "[") throw new Error(regexp + " can not be used with chars");
		return regexp.source.slice(1, regexp.source.lastIndexOf("]"));
	}
	/**
	* Creates a new character list regular expression,
	* by removing `search` from the source of `regexp`.
	*
	* @param {RegExp} regexp
	* @param {string} search
	* The character(s) to remove.
	* @returns {RegExp}
	*/
	function chars_without(regexp, search) {
		if (regexp.source[0] !== "[") throw new Error("/" + regexp.source + "/ can not be used with chars_without");
		if (!search || typeof search !== "string") throw new Error(JSON.stringify(search) + " is not a valid search");
		if (regexp.source.indexOf(search) === -1) throw new Error("\"" + search + "\" is not is /" + regexp.source + "/");
		if (search === "-" && regexp.source.indexOf(search) !== 1) throw new Error("\"" + search + "\" is not at the first postion of /" + regexp.source + "/");
		return new RegExp(regexp.source.replace(search, ""), UNICODE_SUPPORT ? "u" : "");
	}
	/**
	* Combines and Regular expressions correctly by using `RegExp.source`.
	*
	* @param {...(RegExp | string)[]} args
	* @returns {RegExp}
	*/
	function reg(args) {
		var self = this;
		return new RegExp(Array.prototype.slice.call(arguments).map(function(part) {
			var isStr = typeof part === "string";
			if (isStr && self === void 0 && part === "|") throw new Error("use regg instead of reg to wrap expressions with `|`!");
			return isStr ? part : part.source;
		}).join(""), UNICODE_SUPPORT ? "u" : "");
	}
	/**
	* Like `reg` but wraps the expression in `(?:`,`)` to create a non tracking group.
	*
	* @param {...(RegExp | string)[]} args
	* @returns {RegExp}
	*/
	function regg(args) {
		if (arguments.length === 0) throw new Error("no parameters provided");
		return reg.apply(regg, ["(?:"].concat(Array.prototype.slice.call(arguments), [")"]));
	}
	/**
	* A character usually appearing in wrongly converted strings.
	*
	* @type {string}
	* @see https://en.wikipedia.org/wiki/Specials_(Unicode_block)#Replacement_character
	* @see https://nodejs.dev/en/api/v18/buffer/#buffers-and-character-encodings
	* @see https://www.unicode.org/faq/utf_bom.html#BOM
	* @readonly
	*/
	var UNICODE_REPLACEMENT_CHARACTER = "�";
	var Char = /[-\x09\x0A\x0D\x20-\x2C\x2E-\uD7FF\uE000-\uFFFD]/;
	if (UNICODE_SUPPORT) Char = reg("[", chars(Char), "\\u{10000}-\\u{10FFFF}", "]");
	var InvalidChar = new RegExp("[^" + chars(Char) + "]", UNICODE_SUPPORT ? "u" : "");
	var _SChar = /[\x20\x09\x0D\x0A]/;
	var SChar_s = chars(_SChar);
	var S = reg(_SChar, "+");
	var S_OPT = reg(_SChar, "*");
	var NameStartChar = /[:_a-zA-Z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
	if (UNICODE_SUPPORT) NameStartChar = reg("[", chars(NameStartChar), "\\u{10000}-\\u{10FFFF}", "]");
	var NameChar = reg("[", chars(NameStartChar), chars(/[-.0-9\xB7]/), chars(/[\u0300-\u036F\u203F-\u2040]/), "]");
	var Name = reg(NameStartChar, NameChar, "*");
	var Name_exact = reg("^", Name, "$");
	var Nmtoken = reg(NameChar, "+");
	var Reference = regg(reg("&", Name, ";"), "|", regg(/&#[0-9]+;|&#x[0-9a-fA-F]+;/));
	var PEReference = reg("%", Name, ";");
	var EntityValue = regg(reg("\"", regg(/[^%&"]/, "|", PEReference, "|", Reference), "*", "\""), "|", reg("'", regg(/[^%&']/, "|", PEReference, "|", Reference), "*", "'"));
	var AttValue = regg("\"", regg(/[^<&"]/, "|", Reference), "*", "\"", "|", "'", regg(/[^<&']/, "|", Reference), "*", "'");
	var NCName = reg(chars_without(NameStartChar, ":"), chars_without(NameChar, ":"), "*");
	var NCName_exact = reg("^", NCName, "$");
	/**
	https://www.w3.org/TR/xml-names/#ns-qualnames
	
	```
	[7] QName ::= PrefixedName | UnprefixedName
	=== (NCName ':' NCName) | NCName
	=== NCName (':' NCName)?
	[8] PrefixedName ::= Prefix ':' LocalPart
	=== NCName ':' NCName
	[9] UnprefixedName ::= LocalPart
	=== NCName
	[10] Prefix ::= NCName
	[11] LocalPart ::= NCName
	```
	*/
	var QName = reg(NCName, regg(":", NCName), "?");
	var QName_exact = reg("^", QName, "$");
	var QName_group = reg("(", QName, ")");
	var SystemLiteral = regg(/"[^"]*"|'[^']*'/);
	var PI = reg(/^<\?/, "(", Name, ")", regg(S, "(?!", _SChar, ")(", Char, "*?)"), "?", /\?>/);
	var PubidChar = /[\x20\x0D\x0Aa-zA-Z0-9-'()+,./:=?;!*#@$_%]/;
	var PubidLiteral = regg("\"", PubidChar, "*\"", "|", "'", chars_without(PubidChar, "'"), "*'");
	var COMMENT_START = "<!--";
	var COMMENT_END = "-->";
	var Comment$1 = reg(COMMENT_START, regg(chars_without(Char, "-"), "|", reg("-", chars_without(Char, "-"))), "*", COMMENT_END);
	var PCDATA = "#PCDATA";
	var contentspec = regg("EMPTY", "|", "ANY", "|", regg(reg(/\(/, S_OPT, PCDATA, regg(S_OPT, /\|/, S_OPT, QName), "*", S_OPT, /\)\*/), "|", reg(/\(/, S_OPT, PCDATA, S_OPT, /\)/)), "|", reg(/\([^>]+\)/, /[?*+]?/));
	var elementdecl = reg("<!ELEMENT", S, regg(QName, "|", PEReference), S, regg(contentspec, "|", PEReference), S_OPT, ">");
	var AttlistDecl = reg("<!ATTLIST", S, Name, regg(S, Name, S, regg(/CDATA|ID|IDREF|IDREFS|ENTITY|ENTITIES|NMTOKEN|NMTOKENS/, "|", regg(reg("NOTATION", S, /\(/, S_OPT, Name, regg(S_OPT, /\|/, S_OPT, Name), "*", S_OPT, /\)/), "|", reg(/\(/, S_OPT, Nmtoken, regg(S_OPT, /\|/, S_OPT, Nmtoken), "*", S_OPT, /\)/))), S, regg(/#REQUIRED|#IMPLIED/, "|", regg(regg("#FIXED", S), "?", AttValue))), "*", S_OPT, ">");
	var ABOUT_LEGACY_COMPAT = "about:legacy-compat";
	var ABOUT_LEGACY_COMPAT_SystemLiteral = regg("\"" + ABOUT_LEGACY_COMPAT + "\"", "|", "'" + ABOUT_LEGACY_COMPAT + "'");
	var SYSTEM = "SYSTEM";
	var PUBLIC = "PUBLIC";
	var ExternalID = regg(regg(SYSTEM, S, SystemLiteral), "|", regg(PUBLIC, S, PubidLiteral, S, SystemLiteral));
	var ExternalID_match = reg("^", regg(regg(SYSTEM, S, "(?<SystemLiteralOnly>", SystemLiteral, ")"), "|", regg(PUBLIC, S, "(?<PubidLiteral>", PubidLiteral, ")", S, "(?<SystemLiteral>", SystemLiteral, ")")));
	var PubidLiteral_match = reg("^", PubidLiteral, "$");
	var SystemLiteral_match = reg("^", SystemLiteral, "$");
	var EntityDef = regg(EntityValue, "|", regg(ExternalID, regg(S, "NDATA", S, Name), "?"));
	var ENTITY_DECL_START = "<!ENTITY";
	var EntityDecl = regg(reg(ENTITY_DECL_START, S, Name, S, EntityDef, S_OPT, ">"), "|", reg(ENTITY_DECL_START, S, "%", S, Name, S, regg(EntityValue, "|", ExternalID), S_OPT, ">"));
	var NotationDecl = reg("<!NOTATION", S, Name, S, regg(ExternalID, "|", reg(PUBLIC, S, PubidLiteral)), S_OPT, ">");
	var Eq = reg(S_OPT, "=", S_OPT);
	var VersionNum = /1[.]\d+/;
	var VersionInfo = reg(S, "version", Eq, regg("'", VersionNum, "'", "|", "\"", VersionNum, "\""));
	var EncName = /[A-Za-z][-A-Za-z0-9._]*/;
	var XMLDecl = reg(/^<\?xml/, VersionInfo, regg(S, "encoding", Eq, regg("\"", EncName, "\"", "|", "'", EncName, "'")), "?", regg(S, "standalone", Eq, regg("'", regg("yes", "|", "no"), "'", "|", "\"", regg("yes", "|", "no"), "\"")), "?", S_OPT, /\?>/);
	var DOCTYPE_DECL_START = "<!DOCTYPE";
	var CDATA_START = "<![CDATA[";
	var CDATA_END = "]]>";
	var CDSect = reg(/<!\[CDATA\[/, reg(Char, "*?", /\]\]>/));
	exports.chars = chars;
	exports.chars_without = chars_without;
	exports.detectUnicodeSupport = detectUnicodeSupport;
	exports.reg = reg;
	exports.regg = regg;
	exports.ABOUT_LEGACY_COMPAT = ABOUT_LEGACY_COMPAT;
	exports.ABOUT_LEGACY_COMPAT_SystemLiteral = ABOUT_LEGACY_COMPAT_SystemLiteral;
	exports.AttlistDecl = AttlistDecl;
	exports.CDATA_START = CDATA_START;
	exports.CDATA_END = CDATA_END;
	exports.CDSect = CDSect;
	exports.Char = Char;
	exports.Comment = Comment$1;
	exports.COMMENT_START = COMMENT_START;
	exports.COMMENT_END = COMMENT_END;
	exports.DOCTYPE_DECL_START = DOCTYPE_DECL_START;
	exports.elementdecl = elementdecl;
	exports.EntityDecl = EntityDecl;
	exports.EntityValue = EntityValue;
	exports.ExternalID = ExternalID;
	exports.ExternalID_match = ExternalID_match;
	exports.Name = Name;
	exports.Name_exact = Name_exact;
	exports.NCName_exact = NCName_exact;
	exports.NotationDecl = NotationDecl;
	exports.Reference = Reference;
	exports.PEReference = PEReference;
	exports.PI = PI;
	exports.PUBLIC = PUBLIC;
	exports.PubidLiteral = PubidLiteral;
	exports.PubidLiteral_match = PubidLiteral_match;
	exports.QName = QName;
	exports.QName_exact = QName_exact;
	exports.QName_group = QName_group;
	exports.S = S;
	exports.SChar_s = SChar_s;
	exports.S_OPT = S_OPT;
	exports.SYSTEM = SYSTEM;
	exports.SystemLiteral = SystemLiteral;
	exports.SystemLiteral_match = SystemLiteral_match;
	exports.InvalidChar = InvalidChar;
	exports.UNICODE_REPLACEMENT_CHARACTER = UNICODE_REPLACEMENT_CHARACTER;
	exports.UNICODE_SUPPORT = UNICODE_SUPPORT;
	exports.XMLDecl = XMLDecl;
}) });

//#endregion
//#region node_modules/.pnpm/@xmldom+xmldom@0.9.12/node_modules/@xmldom/xmldom/lib/dom.js
var require_dom = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/@xmldom+xmldom@0.9.12/node_modules/@xmldom/xmldom/lib/dom.js": ((exports) => {
	var conventions$3 = require_conventions();
	var find = conventions$3.find;
	var hasDefaultHTMLNamespace$1 = conventions$3.hasDefaultHTMLNamespace;
	var hasOwn$1 = conventions$3.hasOwn;
	var isHTMLMimeType$2 = conventions$3.isHTMLMimeType;
	var isHTMLRawTextElement$1 = conventions$3.isHTMLRawTextElement;
	var isHTMLVoidElement = conventions$3.isHTMLVoidElement;
	var MIME_TYPE$1 = conventions$3.MIME_TYPE;
	var NAMESPACE$2 = conventions$3.NAMESPACE;
	/**
	* Private DOM Constructor symbol
	*
	* Internal symbol used for construction of all classes whose constructors should be private.
	* Currently used for checks in `Node`, `Document`, `Element`, `Attr`, `CharacterData`, `Text`, `Comment`,
	* `CDATASection`, `DocumentType`, `Notation`, `Entity`, `EntityReference`, `DocumentFragment`, `ProcessingInstruction`
	* so the constructor can't be used from outside the module.
	*/
	var PDC = Symbol();
	var errors$3 = require_errors();
	var DOMException$2 = errors$3.DOMException;
	var DOMExceptionName = errors$3.DOMExceptionName;
	var g$1 = require_grammar();
	/**
	* Checks if the given symbol equals the Private DOM Constructor symbol (PDC)
	* and throws an Illegal constructor exception when the symbols don't match.
	* This ensures that the constructor remains private and can't be used outside this module.
	*/
	function checkSymbol(symbol) {
		if (symbol !== PDC) throw new TypeError("Illegal constructor");
	}
	/**
	* A prerequisite for `[].filter`, to drop elements that are empty.
	*
	* @param {string} input
	* The string to be checked.
	* @returns {boolean}
	* Returns `true` if the input string is not empty, `false` otherwise.
	*/
	function notEmptyString(input) {
		return input !== "";
	}
	/**
	* Splits a string on ASCII whitespace characters (U+0009 TAB, U+000A LF, U+000C FF, U+000D CR,
	* U+0020 SPACE).
	* It follows the definition from the infra specification from WHATWG.
	*
	* @param {string} input
	* The string to be split.
	* @returns {string[]}
	* An array of the split strings. The array can be empty if the input string is empty or only
	* contains whitespace characters.
	* @see {@link https://infra.spec.whatwg.org/#split-on-ascii-whitespace}
	* @see {@link https://infra.spec.whatwg.org/#ascii-whitespace}
	*/
	function splitOnASCIIWhitespace(input) {
		return input ? input.split(/[\t\n\f\r ]+/).filter(notEmptyString) : [];
	}
	/**
	* Adds element as a key to current if it is not already present.
	*
	* @param {Record<string, boolean | undefined>} current
	* The current record object to which the element will be added as a key.
	* The object's keys are string types and values are either boolean or undefined.
	* @param {string} element
	* The string to be added as a key to the current record.
	* @returns {Record<string, boolean | undefined>}
	* The updated record object after the addition of the new element.
	*/
	function orderedSetReducer(current, element) {
		if (!hasOwn$1(current, element)) current[element] = true;
		return current;
	}
	/**
	* Converts a string into an ordered set by splitting the input on ASCII whitespace and
	* ensuring uniqueness of elements.
	* This follows the definition of an ordered set from the infra specification by WHATWG.
	*
	* @param {string} input
	* The input string to be transformed into an ordered set.
	* @returns {string[]}
	* An array of unique strings obtained from the input, preserving the original order.
	* The array can be empty if the input string is empty or only contains whitespace characters.
	* @see {@link https://infra.spec.whatwg.org/#ordered-set}
	*/
	function toOrderedSet(input) {
		if (!input) return [];
		var list = splitOnASCIIWhitespace(input);
		return Object.keys(list.reduce(orderedSetReducer, {}));
	}
	/**
	* Uses `list.indexOf` to implement a function that behaves like `Array.prototype.includes`.
	* This function is used in environments where `Array.prototype.includes` may not be available.
	*
	* @param {any[]} list
	* The array in which to search for the element.
	* @returns {function(any): boolean}
	* A function that accepts an element and returns a boolean indicating whether the element is
	* included in the provided list.
	*/
	function arrayIncludes(list) {
		return function(element) {
			return list && list.indexOf(element) !== -1;
		};
	}
	/**
	* Validates a qualified name based on the criteria provided in the DOM specification by
	* WHATWG.
	*
	* @param {string} qualifiedName
	* The qualified name to be validated.
	* @throws {DOMException}
	* With code {@link DOMException.INVALID_CHARACTER_ERR} if the qualified name contains an
	* invalid character.
	* @see {@link https://dom.spec.whatwg.org/#validate}
	*/
	function validateQualifiedName(qualifiedName) {
		if (!g$1.QName_exact.test(qualifiedName)) throw new DOMException$2(DOMException$2.INVALID_CHARACTER_ERR, "invalid character in qualified name \"" + qualifiedName + "\"");
	}
	/**
	* Validates a qualified name and the namespace associated with it,
	* based on the criteria provided in the DOM specification by WHATWG.
	*
	* @param {string | null} namespace
	* The namespace to be validated. It can be a string or null.
	* @param {string} qualifiedName
	* The qualified name to be validated.
	* @returns {[namespace: string | null, prefix: string | null, localName: string]}
	* Returns a tuple with the namespace,
	* prefix and local name of the qualified name.
	* @throws {DOMException}
	* Throws a DOMException if the qualified name or the namespace is not valid.
	* @see {@link https://dom.spec.whatwg.org/#validate-and-extract}
	*/
	function validateAndExtract(namespace, qualifiedName) {
		validateQualifiedName(qualifiedName);
		namespace = namespace || null;
		/**
		* @type {string | null}
		*/
		var prefix = null;
		var localName = qualifiedName;
		if (qualifiedName.indexOf(":") >= 0) {
			var splitResult = qualifiedName.split(":");
			prefix = splitResult[0];
			localName = splitResult[1];
		}
		if (prefix !== null && namespace === null) throw new DOMException$2(DOMException$2.NAMESPACE_ERR, "prefix is non-null and namespace is null");
		if (prefix === "xml" && namespace !== conventions$3.NAMESPACE.XML) throw new DOMException$2(DOMException$2.NAMESPACE_ERR, "prefix is \"xml\" and namespace is not the XML namespace");
		if ((prefix === "xmlns" || qualifiedName === "xmlns") && namespace !== conventions$3.NAMESPACE.XMLNS) throw new DOMException$2(DOMException$2.NAMESPACE_ERR, "either qualifiedName or prefix is \"xmlns\" and namespace is not the XMLNS namespace");
		if (namespace === conventions$3.NAMESPACE.XMLNS && prefix !== "xmlns" && qualifiedName !== "xmlns") throw new DOMException$2(DOMException$2.NAMESPACE_ERR, "namespace is the XMLNS namespace and neither qualifiedName nor prefix is \"xmlns\"");
		return [
			namespace,
			prefix,
			localName
		];
	}
	/**
	* Copies properties from one object to another.
	* It only copies the object's own (not inherited) properties.
	*
	* @param {Object} src
	* The source object from which properties are copied.
	* @param {Object} dest
	* The destination object to which properties are copied.
	*/
	function copy(src, dest) {
		for (var p in src) if (hasOwn$1(src, p)) dest[p] = src[p];
	}
	/**
	* Extends a class with the properties and methods of a super class.
	* It uses a form of prototypal inheritance, and establishes the `constructor` property
	* correctly(?).
	*
	* It is not clear to the current maintainers if this implementation is making sense,
	* since it creates an intermediate prototype function,
	* which all properties of `Super` are copied onto using `_copy`.
	*
	* @param {Object} Class
	* The class that is to be extended.
	* @param {Object} Super
	* The super class from which properties and methods are inherited.
	* @private
	*/
	function _extends(Class, Super) {
		var pt = Class.prototype;
		if (!(pt instanceof Super)) {
			function t() {}
			t.prototype = Super.prototype;
			t = new t();
			copy(pt, t);
			Class.prototype = pt = t;
		}
		if (pt.constructor != Class) {
			if (typeof Class != "function") console.error("unknown Class:" + Class);
			pt.constructor = Class;
		}
	}
	var NodeType = {};
	var ELEMENT_NODE = NodeType.ELEMENT_NODE = 1;
	var ATTRIBUTE_NODE = NodeType.ATTRIBUTE_NODE = 2;
	var TEXT_NODE = NodeType.TEXT_NODE = 3;
	var CDATA_SECTION_NODE = NodeType.CDATA_SECTION_NODE = 4;
	var ENTITY_REFERENCE_NODE = NodeType.ENTITY_REFERENCE_NODE = 5;
	var ENTITY_NODE = NodeType.ENTITY_NODE = 6;
	var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
	var COMMENT_NODE = NodeType.COMMENT_NODE = 8;
	var DOCUMENT_NODE = NodeType.DOCUMENT_NODE = 9;
	var DOCUMENT_TYPE_NODE = NodeType.DOCUMENT_TYPE_NODE = 10;
	var DOCUMENT_FRAGMENT_NODE = NodeType.DOCUMENT_FRAGMENT_NODE = 11;
	var NOTATION_NODE = NodeType.NOTATION_NODE = 12;
	var DocumentPosition = conventions$3.freeze({
		DOCUMENT_POSITION_DISCONNECTED: 1,
		DOCUMENT_POSITION_PRECEDING: 2,
		DOCUMENT_POSITION_FOLLOWING: 4,
		DOCUMENT_POSITION_CONTAINS: 8,
		DOCUMENT_POSITION_CONTAINED_BY: 16,
		DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 32
	});
	/**
	* Finds the common ancestor in two parent chains.
	*
	* @param {Node[]} a
	* The first parent chain.
	* @param {Node[]} b
	* The second parent chain.
	* @returns {Node}
	* The common ancestor node if it exists. If there is no common ancestor, the function will
	* return `null`.
	*/
	function commonAncestor(a, b) {
		if (b.length < a.length) return commonAncestor(b, a);
		var c$1 = null;
		for (var n in a) {
			if (a[n] !== b[n]) return c$1;
			c$1 = a[n];
		}
		return c$1;
	}
	/**
	* Assigns a unique identifier to a document to ensure consistency while comparing unrelated
	* nodes.
	*
	* @param {Document} doc
	* The document to which a unique identifier is to be assigned.
	* @returns {string}
	* The unique identifier of the document. If the document already had a unique identifier, the
	* function will return the existing one.
	*/
	function docGUID(doc) {
		if (!doc.guid) doc.guid = Math.random();
		return doc.guid;
	}
	/**
	* The NodeList interface provides the abstraction of an ordered collection of nodes,
	* without defining or constraining how this collection is implemented.
	* NodeList objects in the DOM are live.
	* The items in the NodeList are accessible via an integral index, starting from 0.
	* You can also access the items of the NodeList with a `for...of` loop.
	*
	* @class NodeList
	* @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-536297177
	* @constructs NodeList
	*/
	function NodeList() {}
	NodeList.prototype = {
		length: 0,
		item: function(index$2) {
			return index$2 >= 0 && index$2 < this.length ? this[index$2] : null;
		},
		toString: function(options) {
			var opts;
			if (typeof options === "function") opts = {
				requireWellFormed: false,
				splitCDATASections: true,
				nodeFilter: options
			};
			else if (!!options) opts = {
				requireWellFormed: !!options.requireWellFormed,
				splitCDATASections: options.splitCDATASections !== false,
				nodeFilter: options.nodeFilter || null
			};
			else opts = {
				requireWellFormed: false,
				splitCDATASections: true,
				nodeFilter: null
			};
			for (var buf = [], i$1 = 0; i$1 < this.length; i$1++) serializeToString(this[i$1], buf, null, opts);
			return buf.join("");
		},
		filter: function(predicate) {
			return Array.prototype.filter.call(this, predicate);
		},
		indexOf: function(item) {
			return Array.prototype.indexOf.call(this, item);
		}
	};
	NodeList.prototype[Symbol.iterator] = function() {
		var me = this;
		var index$2 = 0;
		return {
			next: function() {
				if (index$2 < me.length) return {
					value: me[index$2++],
					done: false
				};
				else return { done: true };
			},
			return: function() {
				return { done: true };
			}
		};
	};
	/**
	* Represents a live collection of nodes that is automatically updated when its associated
	* document changes.
	*
	* @class LiveNodeList
	* @param {Node} node
	* The associated node.
	* @param {function} refresh
	* The function to refresh the live node list.
	* @augments NodeList
	* @constructs LiveNodeList
	*/
	function LiveNodeList(node$1, refresh) {
		this._node = node$1;
		this._refresh = refresh;
		_updateLiveList(this);
	}
	/**
	* Updates the live node list.
	*
	* @param {LiveNodeList} list
	* The live node list to update.
	* @private
	*/
	function _updateLiveList(list) {
		var inc = list._node._inc || list._node.ownerDocument._inc;
		if (list._inc !== inc) {
			var ls = list._refresh(list._node);
			__set__(list, "length", ls.length);
			if (!list.$$length || ls.length < list.$$length) {
				for (var i$1 = ls.length; i$1 in list; i$1++) if (hasOwn$1(list, i$1)) delete list[i$1];
			}
			copy(ls, list);
			list._inc = inc;
		}
	}
	/**
	* Returns the node at position `index` in the LiveNodeList, or null if that is not a valid
	* index.
	*
	* @param {number} i
	* Index into the collection.
	* @returns {Node | null}
	* The node at position `index` in the LiveNodeList, or null if that is not a valid index.
	*/
	LiveNodeList.prototype.item = function(i$1) {
		_updateLiveList(this);
		return this[i$1] || null;
	};
	_extends(LiveNodeList, NodeList);
	/**
	* Objects implementing the NamedNodeMap interface are used to represent collections of nodes
	* that can be accessed by name.
	* Note that NamedNodeMap does not inherit from NodeList;
	* NamedNodeMaps are not maintained in any particular order.
	* Objects contained in an object implementing NamedNodeMap may also be accessed by an ordinal
	* index,
	* but this is simply to allow convenient enumeration of the contents of a NamedNodeMap,
	* and does not imply that the DOM specifies an order to these Nodes.
	* NamedNodeMap objects in the DOM are live.
	* used for attributes or DocumentType entities
	*
	* This implementation only supports property indices, but does not support named properties,
	* as specified in the living standard.
	*
	* @class NamedNodeMap
	* @see https://dom.spec.whatwg.org/#interface-namednodemap
	* @see https://webidl.spec.whatwg.org/#dfn-supported-property-names
	* @constructs NamedNodeMap
	*/
	/**
	* A live collection of an element's attributes, keyed by name.
	*
	* The numbered entries and `length` are the sole authority for attribute order.
	* A separate two-level null-prototype membership index (`namespaceURI` ->
	* `localName` -> `Attr`, with the null/empty namespace held in its own bucket)
	* lets the parse-time de-duplication in `setNamedItem` resolve an existing
	* attribute in O(1) instead of scanning the list, so building an element with M
	* attributes costs O(M) rather than O(M^2). The index never reorders attributes.
	*/
	function NamedNodeMap() {
		this._nsIndex = Object.create(null);
		this._noNsIndex = Object.create(null);
	}
	/**
	* Returns the index of a node within the list.
	*
	* @param {Array} list
	* The list of nodes.
	* @param {Node} node
	* The node to find.
	* @returns {number}
	* The index of the node within the list, or -1 if not found.
	* @private
	*/
	function _findNodeIndex(list, node$1) {
		var i$1 = 0;
		while (i$1 < list.length) {
			if (list[i$1] === node$1) return i$1;
			i$1++;
		}
	}
	/**
	* Returns the second-level index bucket (`localName` -> `Attr`) for a namespace,
	* replicating `getNamedItemNS`'s falsy-namespace normalization: `null`,
	* `undefined` and `''` all resolve to the dedicated null-namespace bucket, kept separate from
	* any real URI (so a namespace URI equal to the string `"null"`
	* cannot collide with the null namespace). Both levels are null-prototype objects, so an
	* attribute named `__proto__` or `constructor` is an ordinary key.
	*
	* @param {NamedNodeMap} map
	* @param {string | null | undefined} namespaceURI
	* @param {boolean} create
	* Create the bucket if it does not exist yet.
	* @returns {Object | undefined}
	* @private
	*/
	function _nnmBucket(map$1, namespaceURI, create) {
		if (!namespaceURI) return map$1._noNsIndex;
		var bucket = map$1._nsIndex[namespaceURI];
		if (!bucket && create) bucket = map$1._nsIndex[namespaceURI] = Object.create(null);
		return bucket;
	}
	/**
	* Looks up an attribute by namespace and local name through the membership index.
	*
	* @param {NamedNodeMap} map
	* @param {string | null | undefined} namespaceURI
	* @param {string} localName
	* @returns {Attr | null}
	* The matching attribute, or `null` when absent.
	* @private
	*/
	function _nnmIndexFind(map$1, namespaceURI, localName) {
		var bucket = _nnmBucket(map$1, namespaceURI, false);
		var found = bucket && bucket[localName];
		return found ? found : null;
	}
	/**
	* Records `attr` in the membership index under its namespace and local name,
	* replacing any previous attribute with the same key.
	*
	* @param {NamedNodeMap} map
	* @param {Attr} attr
	* @private
	*/
	function _nnmIndexAdd(map$1, attr$1) {
		_nnmBucket(map$1, attr$1.namespaceURI, true)[attr$1.localName] = attr$1;
	}
	/**
	* Removes `attr` from the membership index.
	*
	* @param {NamedNodeMap} map
	* @param {Attr} attr
	* @private
	*/
	function _nnmIndexRemove(map$1, attr$1) {
		var bucket = _nnmBucket(map$1, attr$1.namespaceURI, false);
		if (bucket) delete bucket[attr$1.localName];
	}
	/**
	* Adds a new attribute to the list and updates the owner element of the attribute.
	*
	* @param {Element} el
	* The element which will become the owner of the new attribute.
	* @param {NamedNodeMap} list
	* The list to which the new attribute will be added.
	* @param {Attr} newAttr
	* The new attribute to be added.
	* @param {Attr} oldAttr
	* The old attribute to be replaced, or null if no attribute is to be replaced.
	* @returns {void}
	* @private
	*/
	function _addNamedNode(el, list, newAttr, oldAttr) {
		if (oldAttr) list[_findNodeIndex(list, oldAttr)] = newAttr;
		else {
			list[list.length] = newAttr;
			list.length++;
		}
		_nnmIndexAdd(list, newAttr);
		if (el) {
			newAttr.ownerElement = el;
			var doc = el.ownerDocument;
			if (doc) {
				oldAttr && _onRemoveAttribute(doc, el, oldAttr);
				_onAddAttribute(doc, el, newAttr);
			}
		}
	}
	/**
	* Removes an attribute from the list and updates the owner element of the attribute.
	*
	* @param {Element} el
	* The element which is the current owner of the attribute.
	* @param {NamedNodeMap} list
	* The list from which the attribute will be removed.
	* @param {Attr} attr
	* The attribute to be removed.
	* @returns {void}
	* @private
	*/
	function _removeNamedNode(el, list, attr$1) {
		var i$1 = _findNodeIndex(list, attr$1);
		if (i$1 >= 0) {
			var lastIndex = list.length - 1;
			while (i$1 <= lastIndex) list[i$1] = list[++i$1];
			list.length = lastIndex;
			_nnmIndexRemove(list, attr$1);
			if (el) {
				var doc = el.ownerDocument;
				if (doc) _onRemoveAttribute(doc, el, attr$1);
				attr$1.ownerElement = null;
			}
		}
	}
	NamedNodeMap.prototype = {
		length: 0,
		item: NodeList.prototype.item,
		getNamedItem: function(localName) {
			if (this._ownerElement && this._ownerElement._isInHTMLDocumentAndNamespace()) localName = localName.toLowerCase();
			var i$1 = 0;
			while (i$1 < this.length) {
				var attr$1 = this[i$1];
				if (attr$1.nodeName === localName) return attr$1;
				i$1++;
			}
			return null;
		},
		setNamedItem: function(attr$1) {
			var el = attr$1.ownerElement;
			if (el && el !== this._ownerElement) throw new DOMException$2(DOMException$2.INUSE_ATTRIBUTE_ERR);
			var oldAttr = _nnmIndexFind(this, attr$1.namespaceURI, attr$1.localName);
			if (oldAttr === attr$1) return attr$1;
			_addNamedNode(this._ownerElement, this, attr$1, oldAttr);
			return oldAttr;
		},
		setNamedItemNS: function(attr$1) {
			return this.setNamedItem(attr$1);
		},
		removeNamedItem: function(localName) {
			var attr$1 = this.getNamedItem(localName);
			if (!attr$1) throw new DOMException$2(DOMException$2.NOT_FOUND_ERR, localName);
			_removeNamedNode(this._ownerElement, this, attr$1);
			return attr$1;
		},
		removeNamedItemNS: function(namespaceURI, localName) {
			var attr$1 = this.getNamedItemNS(namespaceURI, localName);
			if (!attr$1) throw new DOMException$2(DOMException$2.NOT_FOUND_ERR, namespaceURI ? namespaceURI + " : " + localName : localName);
			_removeNamedNode(this._ownerElement, this, attr$1);
			return attr$1;
		},
		getNamedItemNS: function(namespaceURI, localName) {
			if (!namespaceURI) namespaceURI = null;
			var i$1 = 0;
			while (i$1 < this.length) {
				var node$1 = this[i$1];
				if (node$1.localName === localName && node$1.namespaceURI === namespaceURI) return node$1;
				i$1++;
			}
			return null;
		}
	};
	NamedNodeMap.prototype[Symbol.iterator] = function() {
		var me = this;
		var index$2 = 0;
		return {
			next: function() {
				if (index$2 < me.length) return {
					value: me[index$2++],
					done: false
				};
				else return { done: true };
			},
			return: function() {
				return { done: true };
			}
		};
	};
	/**
	* The DOMImplementation interface provides a number of methods for performing operations that
	* are independent of any particular instance of the document object model.
	*
	* The DOMImplementation interface represents an object providing methods which are not
	* dependent on any particular document.
	* Such an object is returned by the `Document.implementation` property.
	*
	* **The individual methods describe the differences compared to the specs**.
	*
	* @class DOMImplementation
	* @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation MDN
	* @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-102161490 DOM Level 1 Core
	*      (Initial)
	* @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-102161490 DOM Level 2 Core
	* @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-102161490 DOM Level 3 Core
	* @see https://dom.spec.whatwg.org/#domimplementation DOM Living Standard
	* @constructs DOMImplementation
	*/
	function DOMImplementation$1() {}
	DOMImplementation$1.prototype = {
		hasFeature: function(feature, version$1) {
			return true;
		},
		createDocument: function(namespaceURI, qualifiedName, doctype) {
			var contentType = MIME_TYPE$1.XML_APPLICATION;
			if (namespaceURI === NAMESPACE$2.HTML) contentType = MIME_TYPE$1.XML_XHTML_APPLICATION;
			else if (namespaceURI === NAMESPACE$2.SVG) contentType = MIME_TYPE$1.XML_SVG_IMAGE;
			var doc = new Document(PDC, { contentType });
			doc.implementation = this;
			doc.childNodes = new NodeList();
			doc.doctype = doctype || null;
			if (doctype) doc.appendChild(doctype);
			if (qualifiedName) {
				var root$2 = doc.createElementNS(namespaceURI, qualifiedName);
				doc.appendChild(root$2);
			}
			return doc;
		},
		createDocumentType: function(qualifiedName, publicId, systemId, internalSubset) {
			validateQualifiedName(qualifiedName);
			var node$1 = new DocumentType(PDC);
			node$1.name = qualifiedName;
			node$1.nodeName = qualifiedName;
			node$1.publicId = publicId || "";
			node$1.systemId = systemId || "";
			node$1.internalSubset = internalSubset || "";
			node$1.childNodes = new NodeList();
			return node$1;
		},
		createHTMLDocument: function(title) {
			var doc = new Document(PDC, { contentType: MIME_TYPE$1.HTML });
			doc.implementation = this;
			doc.childNodes = new NodeList();
			if (title !== false) {
				doc.doctype = this.createDocumentType("html");
				doc.doctype.ownerDocument = doc;
				doc.appendChild(doc.doctype);
				var htmlNode = doc.createElement("html");
				doc.appendChild(htmlNode);
				var headNode = doc.createElement("head");
				htmlNode.appendChild(headNode);
				if (typeof title === "string") {
					var titleNode = doc.createElement("title");
					titleNode.appendChild(doc.createTextNode(title));
					headNode.appendChild(titleNode);
				}
				htmlNode.appendChild(doc.createElement("body"));
			}
			return doc;
		}
	};
	/**
	* The DOM Node interface is an abstract base class upon which many other DOM API objects are
	* based, thus letting those object types to be used similarly and often interchangeably. As an
	* abstract class, there is no such thing as a plain Node object. All objects that implement
	* Node functionality are based on one of its subclasses. Most notable are Document, Element,
	* and DocumentFragment.
	*
	* In addition, every kind of DOM node is represented by an interface based on Node. These
	* include Attr, CharacterData (which Text, Comment, CDATASection and ProcessingInstruction are
	* all based on), and DocumentType.
	*
	* In some cases, a particular feature of the base Node interface may not apply to one of its
	* child interfaces; in that case, the inheriting node may return null or throw an exception,
	* depending on circumstances. For example, attempting to add children to a node type that
	* cannot have children will throw an exception.
	*
	* **This behavior is slightly different from the in the specs**:
	* - unimplemented interfaces: `EventTarget`
	*
	* @class
	* @abstract
	* @param {Symbol} symbol
	* @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1950641247
	* @see https://dom.spec.whatwg.org/#node
	* @prettierignore
	*/
	function Node(symbol) {
		checkSymbol(symbol);
	}
	Node.prototype = {
		firstChild: null,
		lastChild: null,
		previousSibling: null,
		nextSibling: null,
		parentNode: null,
		get parentElement() {
			return this.parentNode && this.parentNode.nodeType === this.ELEMENT_NODE ? this.parentNode : null;
		},
		childNodes: null,
		ownerDocument: null,
		nodeValue: null,
		namespaceURI: null,
		prefix: null,
		localName: null,
		baseURI: "about:blank",
		get isConnected() {
			var rootNode = this.getRootNode();
			return rootNode && rootNode.nodeType === rootNode.DOCUMENT_NODE;
		},
		contains: function(other) {
			if (!other) return false;
			var parent$1 = other;
			do {
				if (this === parent$1) return true;
				parent$1 = parent$1.parentNode;
			} while (parent$1);
			return false;
		},
		getRootNode: function(options) {
			var parent$1 = this;
			do {
				if (!parent$1.parentNode) return parent$1;
				parent$1 = parent$1.parentNode;
			} while (parent$1);
		},
		isEqualNode: function(otherNode) {
			if (!otherNode) return false;
			var stack$1 = [{
				node: this,
				other: otherNode
			}];
			while (stack$1.length > 0) {
				var pair = stack$1.pop();
				var node$1 = pair.node;
				var other = pair.other;
				if (node$1.nodeType !== other.nodeType) return false;
				switch (node$1.nodeType) {
					case node$1.DOCUMENT_TYPE_NODE:
						if (node$1.name !== other.name) return false;
						if (node$1.publicId !== other.publicId) return false;
						if (node$1.systemId !== other.systemId) return false;
						break;
					case node$1.ELEMENT_NODE:
						if (node$1.namespaceURI !== other.namespaceURI) return false;
						if (node$1.prefix !== other.prefix) return false;
						if (node$1.localName !== other.localName) return false;
						if (node$1.attributes.length !== other.attributes.length) return false;
						for (var i$1 = 0; i$1 < node$1.attributes.length; i$1++) {
							var attr$1 = node$1.attributes.item(i$1);
							var otherAttr = other.getAttributeNodeNS(attr$1.namespaceURI, attr$1.localName);
							if (!otherAttr) return false;
							stack$1.push({
								node: attr$1,
								other: otherAttr
							});
						}
						break;
					case node$1.ATTRIBUTE_NODE:
						if (node$1.namespaceURI !== other.namespaceURI) return false;
						if (node$1.localName !== other.localName) return false;
						if (node$1.value !== other.value) return false;
						break;
					case node$1.PROCESSING_INSTRUCTION_NODE:
						if (node$1.target !== other.target || node$1.data !== other.data) return false;
						break;
					case node$1.TEXT_NODE:
					case node$1.CDATA_SECTION_NODE:
					case node$1.COMMENT_NODE:
						if (node$1.data !== other.data) return false;
						break;
				}
				if (node$1.childNodes.length !== other.childNodes.length) return false;
				for (var i$1 = node$1.childNodes.length - 1; i$1 >= 0; i$1--) stack$1.push({
					node: node$1.childNodes[i$1],
					other: other.childNodes[i$1]
				});
			}
			return true;
		},
		isSameNode: function(otherNode) {
			return this === otherNode;
		},
		insertBefore: function(newChild, refChild) {
			return _insertBefore(this, newChild, refChild);
		},
		replaceChild: function(newChild, oldChild) {
			_insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
			if (oldChild) this.removeChild(oldChild);
		},
		removeChild: function(oldChild) {
			return _removeChild(this, oldChild);
		},
		appendChild: function(newChild) {
			return this.insertBefore(newChild, null);
		},
		hasChildNodes: function() {
			return this.firstChild != null;
		},
		cloneNode: function(deep) {
			return cloneNode(this.ownerDocument || this, this, deep);
		},
		normalize: function() {
			walkDOM(this, null, { enter: function(node$1) {
				var child = node$1.firstChild;
				while (child) {
					var next$1 = child.nextSibling;
					if (next$1 !== null && next$1.nodeType === TEXT_NODE && child.nodeType === TEXT_NODE) {
						var tail = [];
						var sibling = next$1;
						while (sibling !== null && sibling.nodeType === TEXT_NODE) {
							tail.push(sibling.data);
							sibling = sibling.nextSibling;
						}
						var removed = child.nextSibling;
						while (removed !== sibling) {
							var following = removed.nextSibling;
							removed.parentNode = null;
							removed.previousSibling = null;
							removed.nextSibling = null;
							removed = following;
						}
						child.nextSibling = sibling;
						if (sibling !== null) sibling.previousSibling = child;
						else node$1.lastChild = child;
						child.appendData(tail.join(""));
						_onUpdateChild(node$1.ownerDocument, node$1);
						child = sibling;
					} else child = next$1;
				}
				return true;
			} });
		},
		isSupported: function(feature, version$1) {
			return this.ownerDocument.implementation.hasFeature(feature, version$1);
		},
		lookupPrefix: function(namespaceURI) {
			var el = this;
			while (el) {
				var map$1 = el._nsMap;
				if (map$1) {
					for (var n in map$1) if (hasOwn$1(map$1, n) && map$1[n] === namespaceURI) return n;
				}
				el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
			}
			return null;
		},
		lookupNamespaceURI: function(prefix) {
			var el = this;
			while (el) {
				var map$1 = el._nsMap;
				if (map$1) {
					if (hasOwn$1(map$1, prefix)) return map$1[prefix];
				}
				el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
			}
			return null;
		},
		isDefaultNamespace: function(namespaceURI) {
			return this.lookupPrefix(namespaceURI) == null;
		},
		compareDocumentPosition: function(other) {
			if (this === other) return 0;
			var node1 = other;
			var node2 = this;
			var attr1 = null;
			var attr2 = null;
			if (node1 instanceof Attr) {
				attr1 = node1;
				node1 = attr1.ownerElement;
			}
			if (node2 instanceof Attr) {
				attr2 = node2;
				node2 = attr2.ownerElement;
				if (attr1 && node1 && node2 === node1) for (var i$1 = 0, attr$1; attr$1 = node2.attributes[i$1]; i$1++) {
					if (attr$1 === attr1) return DocumentPosition.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC + DocumentPosition.DOCUMENT_POSITION_PRECEDING;
					if (attr$1 === attr2) return DocumentPosition.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC + DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
				}
			}
			if (!node1 || !node2 || node2.ownerDocument !== node1.ownerDocument) return DocumentPosition.DOCUMENT_POSITION_DISCONNECTED + DocumentPosition.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC + (docGUID(node2.ownerDocument) > docGUID(node1.ownerDocument) ? DocumentPosition.DOCUMENT_POSITION_FOLLOWING : DocumentPosition.DOCUMENT_POSITION_PRECEDING);
			if (attr2 && node1 === node2) return DocumentPosition.DOCUMENT_POSITION_CONTAINS + DocumentPosition.DOCUMENT_POSITION_PRECEDING;
			if (attr1 && node1 === node2) return DocumentPosition.DOCUMENT_POSITION_CONTAINED_BY + DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
			var chain1 = [];
			var ancestor1 = node1.parentNode;
			while (ancestor1) {
				if (!attr2 && ancestor1 === node2) return DocumentPosition.DOCUMENT_POSITION_CONTAINED_BY + DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
				chain1.push(ancestor1);
				ancestor1 = ancestor1.parentNode;
			}
			chain1.reverse();
			var chain2 = [];
			var ancestor2 = node2.parentNode;
			while (ancestor2) {
				if (!attr1 && ancestor2 === node1) return DocumentPosition.DOCUMENT_POSITION_CONTAINS + DocumentPosition.DOCUMENT_POSITION_PRECEDING;
				chain2.push(ancestor2);
				ancestor2 = ancestor2.parentNode;
			}
			chain2.reverse();
			var ca = commonAncestor(chain1, chain2);
			for (var n in ca.childNodes) {
				var child = ca.childNodes[n];
				if (child === node2) return DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
				if (child === node1) return DocumentPosition.DOCUMENT_POSITION_PRECEDING;
				if (chain2.indexOf(child) >= 0) return DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
				if (chain1.indexOf(child) >= 0) return DocumentPosition.DOCUMENT_POSITION_PRECEDING;
			}
			return 0;
		}
	};
	/**
	* Encodes special XML characters to their corresponding entities.
	*
	* @param {string} c
	* The character to be encoded.
	* @returns {string}
	* The encoded character.
	* @private
	*/
	function _xmlEncoder(c$1) {
		return c$1 == "<" && "&lt;" || c$1 == ">" && "&gt;" || c$1 == "&" && "&amp;" || c$1 == "\"" && "&quot;" || "&#" + c$1.charCodeAt() + ";";
	}
	copy(NodeType, Node);
	copy(NodeType, Node.prototype);
	copy(DocumentPosition, Node);
	copy(DocumentPosition, Node.prototype);
	/**
	* Visits every node in the subtree rooted at `node` in depth-first pre-order.
	*
	* Delegates to {@link walkDOM} for traversal. The `callback` is called on each node;
	* if it returns a truthy value, traversal stops immediately.
	*
	* @param {Node} node
	* Root of the subtree to visit.
	* @param {function(Node): *} callback
	* Called for each node. A truthy return value stops traversal early.
	*/
	function _visitNode(node$1, callback) {
		walkDOM(node$1, null, { enter: function(n) {
			return callback(n) ? walkDOM.STOP : true;
		} });
	}
	/**
	* Depth-first pre/post-order DOM tree walker.
	*
	* Visits every node in the subtree rooted at `node`. For each node:
	*
	* 1. Calls `callbacks.enter(node, context)` before descending into the node's children. The
	* return value becomes the `context` passed to each child's `enter` call and to the matching
	* `exit` call.
	* 2. If `enter` returns `null` or `undefined`, the node's children are skipped;
	* sibling traversal continues normally.
	* 3. If `enter` returns `walkDOM.STOP`, the entire traversal is aborted immediately — no
	* further `enter` or `exit` calls are made.
	* 4. `lastChild` and `previousSibling` are read **after** `enter` returns, so `enter` may
	* safely modify the node's own child list before the walker descends. Modifying siblings of
	* the current node or any other part of the tree produces unpredictable results: nodes already
	* queued on the stack are visited regardless of DOM changes, and newly inserted nodes outside
	* the current child list are never visited.
	* 5. Calls `callbacks.exit(node, context)` (if provided) after all of a node's children have
	* been visited, passing the same `context` that `enter`
	* returned for that node.
	*
	* This implementation uses an explicit stack and does not recurse — it is safe on arbitrarily
	* deep trees.
	*
	* @param {Node} node
	* Root of the subtree to walk.
	* @param {*} context
	* Initial context value passed to the root node's `enter`.
	* @param {{ enter: function(Node, *): *, exit?: function(Node, *): void }} callbacks
	* @returns {void | walkDOM.STOP}
	* @see ../docs/walk-dom.md.
	*/
	function walkDOM(node$1, context, callbacks) {
		var stack$1 = [{
			node: node$1,
			context,
			phase: walkDOM.ENTER
		}];
		while (stack$1.length > 0) {
			var frame = stack$1.pop();
			if (frame.phase === walkDOM.ENTER) {
				var childContext = callbacks.enter(frame.node, frame.context);
				if (childContext === walkDOM.STOP) return walkDOM.STOP;
				stack$1.push({
					node: frame.node,
					context: childContext,
					phase: walkDOM.EXIT
				});
				if (childContext === null || childContext === void 0) continue;
				var child = frame.node.lastChild;
				while (child) {
					stack$1.push({
						node: child,
						context: childContext,
						phase: walkDOM.ENTER
					});
					child = child.previousSibling;
				}
			} else if (callbacks.exit) callbacks.exit(frame.node, frame.context);
		}
	}
	/**
	* Sentinel value returned from a `walkDOM` `enter` callback to abort the entire traversal
	* immediately.
	*
	* @type {symbol}
	*/
	walkDOM.STOP = Symbol("walkDOM.STOP");
	/**
	* Phase constant for a stack frame that has not yet been visited.
	* The `enter` callback is called and children are scheduled.
	*
	* @type {number}
	*/
	walkDOM.ENTER = 0;
	/**
	* Phase constant for a stack frame whose subtree has been fully visited.
	* The `exit` callback is called.
	*
	* @type {number}
	*/
	walkDOM.EXIT = 1;
	/**
	* @typedef DocumentOptions
	* @property {string} [contentType=MIME_TYPE.XML_APPLICATION]
	*/
	/**
	* The Document interface describes the common properties and methods for any kind of document.
	*
	* It should usually be created using `new DOMImplementation().createDocument(...)`
	* or `new DOMImplementation().createHTMLDocument(...)`.
	*
	* The constructor is considered a private API and offers to initially set the `contentType`
	* property via it's options parameter.
	*
	* @class
	* @param {Symbol} symbol
	* @param {DocumentOptions} [options]
	* @augments Node
	* @private
	* @see https://developer.mozilla.org/en-US/docs/Web/API/Document
	* @see https://dom.spec.whatwg.org/#interface-document
	*/
	function Document(symbol, options) {
		checkSymbol(symbol);
		var opt = options || {};
		this.ownerDocument = this;
		/**
		* The mime type of the document is determined at creation time and can not be modified.
		*
		* @type {string}
		* @see https://dom.spec.whatwg.org/#concept-document-content-type
		* @see {@link DOMImplementation}
		* @see {@link MIME_TYPE}
		* @readonly
		*/
		this.contentType = opt.contentType || MIME_TYPE$1.XML_APPLICATION;
		/**
		* @type {'html' | 'xml'}
		* @see https://dom.spec.whatwg.org/#concept-document-type
		* @see {@link DOMImplementation}
		* @readonly
		*/
		this.type = isHTMLMimeType$2(this.contentType) ? "html" : "xml";
	}
	/**
	* Updates the namespace mapping of an element when a new attribute is added.
	*
	* @param {Document} doc
	* The document that the element belongs to.
	* @param {Element} el
	* The element to which the attribute is being added.
	* @param {Attr} newAttr
	* The new attribute being added.
	* @private
	*/
	function _onAddAttribute(doc, el, newAttr) {
		doc && doc._inc++;
		if (newAttr.namespaceURI === NAMESPACE$2.XMLNS) el._nsMap[newAttr.prefix ? newAttr.localName : ""] = newAttr.value;
	}
	/**
	* Updates the namespace mapping of an element when an attribute is removed.
	*
	* @param {Document} doc
	* The document that the element belongs to.
	* @param {Element} el
	* The element from which the attribute is being removed.
	* @param {Attr} newAttr
	* The attribute being removed.
	* @param {boolean} remove
	* Indicates whether the attribute is to be removed.
	* @private
	*/
	function _onRemoveAttribute(doc, el, newAttr, remove$1) {
		doc && doc._inc++;
		if (newAttr.namespaceURI === NAMESPACE$2.XMLNS) delete el._nsMap[newAttr.prefix ? newAttr.localName : ""];
	}
	/**
	* Updates `parent.childNodes`, adjusting the indexed items and its `length`.
	* If `newChild` is provided and has no nextSibling, it will be appended.
	* Otherwise, it's assumed that an item has been removed or inserted,
	* and `parent.firstNode` and its `.nextSibling` to re-indexing all child nodes of `parent`.
	*
	* @param {Document} doc
	* The parent document of `el`.
	* @param {Node} parent
	* The parent node whose childNodes list needs to be updated.
	* @param {Node} [newChild]
	* The new child node to be appended. If not provided, the function assumes a node has been
	* removed.
	* @private
	*/
	function _onUpdateChild(doc, parent$1, newChild) {
		if (doc && doc._inc) {
			doc._inc++;
			var childNodes = parent$1.childNodes;
			if (newChild && !newChild.nextSibling) childNodes[childNodes.length++] = newChild;
			else {
				var child = parent$1.firstChild;
				var i$1 = 0;
				while (child) {
					childNodes[i$1++] = child;
					child = child.nextSibling;
				}
				childNodes.length = i$1;
				delete childNodes[childNodes.length];
			}
		}
	}
	/**
	* Removes the connections between `parentNode` and `child`
	* and any existing `child.previousSibling` or `child.nextSibling`.
	*
	* @param {Node} parentNode
	* The parent node from which the child node is to be removed.
	* @param {Node} child
	* The child node to be removed from the parentNode.
	* @returns {Node}
	* Returns the child node that was removed.
	* @throws {DOMException}
	* With code:
	* - {@link DOMException.NOT_FOUND_ERR} If the parentNode is not the parent of the child node.
	* @private
	* @see https://github.com/xmldom/xmldom/issues/135
	* @see https://github.com/xmldom/xmldom/issues/145
	*/
	function _removeChild(parentNode, child) {
		if (parentNode !== child.parentNode) throw new DOMException$2(DOMException$2.NOT_FOUND_ERR, "child's parent is not parent");
		var oldPreviousSibling = child.previousSibling;
		var oldNextSibling = child.nextSibling;
		if (oldPreviousSibling) oldPreviousSibling.nextSibling = oldNextSibling;
		else parentNode.firstChild = oldNextSibling;
		if (oldNextSibling) oldNextSibling.previousSibling = oldPreviousSibling;
		else parentNode.lastChild = oldPreviousSibling;
		_onUpdateChild(parentNode.ownerDocument, parentNode);
		child.parentNode = null;
		child.previousSibling = null;
		child.nextSibling = null;
		return child;
	}
	/**
	* Returns `true` if `node` can be a parent for insertion.
	*
	* @param {Node} node
	* @returns {boolean}
	*/
	function hasValidParentNodeType(node$1) {
		return node$1 && (node$1.nodeType === Node.DOCUMENT_NODE || node$1.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node$1.nodeType === Node.ELEMENT_NODE);
	}
	/**
	* Returns `true` if `node` can be inserted according to it's `nodeType`.
	*
	* @param {Node} node
	* @returns {boolean}
	*/
	function hasInsertableNodeType(node$1) {
		return node$1 && (node$1.nodeType === Node.CDATA_SECTION_NODE || node$1.nodeType === Node.COMMENT_NODE || node$1.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node$1.nodeType === Node.DOCUMENT_TYPE_NODE || node$1.nodeType === Node.ELEMENT_NODE || node$1.nodeType === Node.PROCESSING_INSTRUCTION_NODE || node$1.nodeType === Node.TEXT_NODE);
	}
	/**
	* Returns true if `node` is a DOCTYPE node.
	*
	* @param {Node} node
	* @returns {boolean}
	*/
	function isDocTypeNode(node$1) {
		return node$1 && node$1.nodeType === Node.DOCUMENT_TYPE_NODE;
	}
	/**
	* Returns true if the node is an element.
	*
	* @param {Node} node
	* @returns {boolean}
	*/
	function isElementNode(node$1) {
		return node$1 && node$1.nodeType === Node.ELEMENT_NODE;
	}
	/**
	* Returns true if `node` is a text node.
	*
	* @param {Node} node
	* @returns {boolean}
	*/
	function isTextNode(node$1) {
		return node$1 && node$1.nodeType === Node.TEXT_NODE;
	}
	/**
	* Check if en element node can be inserted before `child`, or at the end if child is falsy,
	* according to the presence and position of a doctype node on the same level.
	*
	* @param {Document} doc
	* The document node.
	* @param {Node} child
	* The node that would become the nextSibling if the element would be inserted.
	* @returns {boolean}
	* `true` if an element can be inserted before child.
	* @private
	*/
	function isElementInsertionPossible(doc, child) {
		var parentChildNodes = doc.childNodes || [];
		if (find(parentChildNodes, isElementNode) || isDocTypeNode(child)) return false;
		var docTypeNode = find(parentChildNodes, isDocTypeNode);
		return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
	}
	/**
	* Check if en element node can be inserted before `child`, or at the end if child is falsy,
	* according to the presence and position of a doctype node on the same level.
	*
	* @param {Node} doc
	* The document node.
	* @param {Node} child
	* The node that would become the nextSibling if the element would be inserted.
	* @returns {boolean}
	* `true` if an element can be inserted before child.
	* @private
	*/
	function isElementReplacementPossible(doc, child) {
		var parentChildNodes = doc.childNodes || [];
		function hasElementChildThatIsNotChild(node$1) {
			return isElementNode(node$1) && node$1 !== child;
		}
		if (find(parentChildNodes, hasElementChildThatIsNotChild)) return false;
		var docTypeNode = find(parentChildNodes, isDocTypeNode);
		return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
	}
	/**
	* Asserts pre-insertion validity of a node into a parent before a child.
	* Throws errors for invalid node combinations that would result in an ill-formed DOM.
	*
	* @param {Node} parent
	* The parent node to insert `node` into.
	* @param {Node} node
	* The node to insert.
	* @param {Node | null} child
	* The node that should become the `nextSibling` of `node`. If null, no sibling is considered.
	* @throws {DOMException}
	* With code:
	* - {@link DOMException.HIERARCHY_REQUEST_ERR} If `parent` is not a Document,
	* DocumentFragment, or Element node.
	* - {@link DOMException.HIERARCHY_REQUEST_ERR} If `node` is a host-including inclusive
	* ancestor of `parent`. (Currently not implemented)
	* - {@link DOMException.NOT_FOUND_ERR} If `child` is non-null and its `parent` is not
	* `parent`.
	* - {@link DOMException.HIERARCHY_REQUEST_ERR} If `node` is not a DocumentFragment,
	* DocumentType, Element, or CharacterData node.
	* - {@link DOMException.HIERARCHY_REQUEST_ERR} If either `node` is a Text node and `parent` is
	* a document, or if `node` is a doctype and `parent` is not a document.
	* @private
	* @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
	* @see https://dom.spec.whatwg.org/#concept-node-replace
	*/
	function assertPreInsertionValidity1to5(parent$1, node$1, child) {
		if (!hasValidParentNodeType(parent$1)) throw new DOMException$2(DOMException$2.HIERARCHY_REQUEST_ERR, "Unexpected parent node type " + parent$1.nodeType);
		if (child && child.parentNode !== parent$1) throw new DOMException$2(DOMException$2.NOT_FOUND_ERR, "child not in parent");
		if (!hasInsertableNodeType(node$1) || isDocTypeNode(node$1) && parent$1.nodeType !== Node.DOCUMENT_NODE) throw new DOMException$2(DOMException$2.HIERARCHY_REQUEST_ERR, "Unexpected node type " + node$1.nodeType + " for parent node type " + parent$1.nodeType);
	}
	/**
	* Asserts pre-insertion validity of a node into a document before a child.
	* Throws errors for invalid node combinations that would result in an ill-formed DOM.
	*
	* @param {Document} parent
	* The parent node to insert `node` into.
	* @param {Node} node
	* The node to insert.
	* @param {Node | undefined} child
	* The node that should become the `nextSibling` of `node`. If undefined, no sibling is
	* considered.
	* @returns {Node}
	* @throws {DOMException}
	* With code:
	* - {@link DOMException.HIERARCHY_REQUEST_ERR} If `node` is a DocumentFragment with more than
	* one element child or has a Text node child.
	* - {@link DOMException.HIERARCHY_REQUEST_ERR} If `node` is a DocumentFragment with one
	* element child and either `parent` has an element child, `child` is a doctype, or `child` is
	* non-null and a doctype is following `child`.
	* - {@link DOMException.HIERARCHY_REQUEST_ERR} If `node` is an Element and `parent` has an
	* element child, `child` is a doctype, or `child` is non-null and a doctype is following
	* `child`.
	* - {@link DOMException.HIERARCHY_REQUEST_ERR} If `node` is a DocumentType and `parent` has a
	* doctype child, `child` is non-null and an element is preceding `child`, or `child` is null
	* and `parent` has an element child.
	* @private
	* @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
	* @see https://dom.spec.whatwg.org/#concept-node-replace
	*/
	function assertPreInsertionValidityInDocument(parent$1, node$1, child) {
		var parentChildNodes = parent$1.childNodes || [];
		var nodeChildNodes = node$1.childNodes || [];
		if (node$1.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
			var nodeChildElements = nodeChildNodes.filter(isElementNode);
			if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) throw new DOMException$2(DOMException$2.HIERARCHY_REQUEST_ERR, "More than one element or text in fragment");
			if (nodeChildElements.length === 1 && !isElementInsertionPossible(parent$1, child)) throw new DOMException$2(DOMException$2.HIERARCHY_REQUEST_ERR, "Element in fragment can not be inserted before doctype");
		}
		if (isElementNode(node$1)) {
			if (!isElementInsertionPossible(parent$1, child)) throw new DOMException$2(DOMException$2.HIERARCHY_REQUEST_ERR, "Only one element can be added and only after doctype");
		}
		if (isDocTypeNode(node$1)) {
			if (find(parentChildNodes, isDocTypeNode)) throw new DOMException$2(DOMException$2.HIERARCHY_REQUEST_ERR, "Only one doctype is allowed");
			var parentElementChild = find(parentChildNodes, isElementNode);
			if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) throw new DOMException$2(DOMException$2.HIERARCHY_REQUEST_ERR, "Doctype can only be inserted before an element");
			if (!child && parentElementChild) throw new DOMException$2(DOMException$2.HIERARCHY_REQUEST_ERR, "Doctype can not be appended since element is present");
		}
	}
	/**
	* @param {Document} parent
	* The parent node to insert `node` into.
	* @param {Node} node
	* The node to insert.
	* @param {Node | undefined} child
	* the node that should become the `nextSibling` of `node`
	* @returns {Node}
	* @throws {DOMException}
	* For several node combinations that would create a DOM that is not well-formed.
	* @throws {DOMException}
	* If `child` is provided but is not a child of `parent`.
	* @private
	* @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
	* @see https://dom.spec.whatwg.org/#concept-node-replace
	*/
	function assertPreReplacementValidityInDocument(parent$1, node$1, child) {
		var parentChildNodes = parent$1.childNodes || [];
		var nodeChildNodes = node$1.childNodes || [];
		if (node$1.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
			var nodeChildElements = nodeChildNodes.filter(isElementNode);
			if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) throw new DOMException$2(DOMException$2.HIERARCHY_REQUEST_ERR, "More than one element or text in fragment");
			if (nodeChildElements.length === 1 && !isElementReplacementPossible(parent$1, child)) throw new DOMException$2(DOMException$2.HIERARCHY_REQUEST_ERR, "Element in fragment can not be inserted before doctype");
		}
		if (isElementNode(node$1)) {
			if (!isElementReplacementPossible(parent$1, child)) throw new DOMException$2(DOMException$2.HIERARCHY_REQUEST_ERR, "Only one element can be added and only after doctype");
		}
		if (isDocTypeNode(node$1)) {
			function hasDoctypeChildThatIsNotChild(node$2) {
				return isDocTypeNode(node$2) && node$2 !== child;
			}
			if (find(parentChildNodes, hasDoctypeChildThatIsNotChild)) throw new DOMException$2(DOMException$2.HIERARCHY_REQUEST_ERR, "Only one doctype is allowed");
			var parentElementChild = find(parentChildNodes, isElementNode);
			if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) throw new DOMException$2(DOMException$2.HIERARCHY_REQUEST_ERR, "Doctype can only be inserted before an element");
		}
	}
	/**
	* Inserts a node into a parent node before a child node.
	*
	* @param {Node} parent
	* The parent node to insert the node into.
	* @param {Node} node
	* The node to insert into the parent.
	* @param {Node | null} child
	* The node that should become the next sibling of the node.
	* If null, the function inserts the node at the end of the children of the parent node.
	* @param {Function} [_inDocumentAssertion]
	* An optional function to check pre-insertion validity if parent is a document node.
	* Defaults to {@link assertPreInsertionValidityInDocument}
	* @returns {Node}
	* Returns the inserted node.
	* @throws {DOMException}
	* Throws a DOMException if inserting the node would result in a DOM tree that is not
	* well-formed. See {@link assertPreInsertionValidity1to5},
	* {@link assertPreInsertionValidityInDocument}.
	* @throws {DOMException}
	* Throws a DOMException if child is provided but is not a child of the parent. See
	* {@link Node.removeChild}
	* @private
	* @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
	*/
	function _insertBefore(parent$1, node$1, child, _inDocumentAssertion) {
		assertPreInsertionValidity1to5(parent$1, node$1, child);
		if (parent$1.nodeType === Node.DOCUMENT_NODE) (_inDocumentAssertion || assertPreInsertionValidityInDocument)(parent$1, node$1, child);
		var cp = node$1.parentNode;
		if (cp) cp.removeChild(node$1);
		if (node$1.nodeType === DOCUMENT_FRAGMENT_NODE) {
			var newFirst = node$1.firstChild;
			if (newFirst == null) return node$1;
			var newLast = node$1.lastChild;
		} else newFirst = newLast = node$1;
		var pre = child ? child.previousSibling : parent$1.lastChild;
		newFirst.previousSibling = pre;
		newLast.nextSibling = child;
		if (pre) pre.nextSibling = newFirst;
		else parent$1.firstChild = newFirst;
		if (child == null) parent$1.lastChild = newLast;
		else child.previousSibling = newLast;
		do
			newFirst.parentNode = parent$1;
		while (newFirst !== newLast && (newFirst = newFirst.nextSibling));
		_onUpdateChild(parent$1.ownerDocument || parent$1, parent$1, node$1);
		if (node$1.nodeType == DOCUMENT_FRAGMENT_NODE) node$1.firstChild = node$1.lastChild = null;
		return node$1;
	}
	Document.prototype = {
		implementation: null,
		nodeName: "#document",
		nodeType: DOCUMENT_NODE,
		doctype: null,
		documentElement: null,
		_inc: 1,
		insertBefore: function(newChild, refChild) {
			if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
				var child = newChild.firstChild;
				while (child) {
					var next$1 = child.nextSibling;
					this.insertBefore(child, refChild);
					child = next$1;
				}
				return newChild;
			}
			_insertBefore(this, newChild, refChild);
			newChild.ownerDocument = this;
			if (this.documentElement === null && newChild.nodeType === ELEMENT_NODE) this.documentElement = newChild;
			return newChild;
		},
		removeChild: function(oldChild) {
			var removed = _removeChild(this, oldChild);
			if (removed === this.documentElement) this.documentElement = null;
			return removed;
		},
		replaceChild: function(newChild, oldChild) {
			_insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
			newChild.ownerDocument = this;
			if (oldChild) this.removeChild(oldChild);
			if (isElementNode(newChild)) this.documentElement = newChild;
		},
		importNode: function(importedNode, deep) {
			return importNode(this, importedNode, deep);
		},
		getElementById: function(id) {
			var rtv = null;
			_visitNode(this.documentElement, function(node$1) {
				if (node$1.nodeType == ELEMENT_NODE) {
					if (node$1.getAttribute("id") == id) {
						rtv = node$1;
						return true;
					}
				}
			});
			return rtv;
		},
		createElement: function(tagName) {
			var node$1 = new Element(PDC);
			node$1.ownerDocument = this;
			if (this.type === "html") tagName = tagName.toLowerCase();
			if (hasDefaultHTMLNamespace$1(this.contentType)) node$1.namespaceURI = NAMESPACE$2.HTML;
			node$1.nodeName = tagName;
			node$1.tagName = tagName;
			node$1.localName = tagName;
			node$1.childNodes = new NodeList();
			var attrs = node$1.attributes = new NamedNodeMap();
			attrs._ownerElement = node$1;
			return node$1;
		},
		createDocumentFragment: function() {
			var node$1 = new DocumentFragment(PDC);
			node$1.ownerDocument = this;
			node$1.childNodes = new NodeList();
			return node$1;
		},
		createTextNode: function(data$1) {
			var node$1 = new Text(PDC);
			node$1.ownerDocument = this;
			node$1.childNodes = new NodeList();
			node$1.appendData(data$1);
			return node$1;
		},
		createComment: function(data$1) {
			var node$1 = new Comment(PDC);
			node$1.ownerDocument = this;
			node$1.childNodes = new NodeList();
			node$1.appendData(data$1);
			return node$1;
		},
		createCDATASection: function(data$1) {
			if (data$1.indexOf("]]>") !== -1) throw new DOMException$2(DOMException$2.INVALID_CHARACTER_ERR, "data contains \"]]>\"");
			var node$1 = new CDATASection(PDC);
			node$1.ownerDocument = this;
			node$1.childNodes = new NodeList();
			node$1.appendData(data$1);
			return node$1;
		},
		createProcessingInstruction: function(target, data$1) {
			var node$1 = new ProcessingInstruction(PDC);
			node$1.ownerDocument = this;
			node$1.childNodes = new NodeList();
			node$1.nodeName = node$1.target = target;
			node$1.nodeValue = node$1.data = data$1;
			return node$1;
		},
		createAttribute: function(name$1) {
			if (!g$1.QName_exact.test(name$1)) throw new DOMException$2(DOMException$2.INVALID_CHARACTER_ERR, "invalid character in name \"" + name$1 + "\"");
			if (this.type === "html") name$1 = name$1.toLowerCase();
			return this._createAttribute(name$1);
		},
		_createAttribute: function(name$1) {
			var node$1 = new Attr(PDC);
			node$1.ownerDocument = this;
			node$1.childNodes = new NodeList();
			node$1.name = name$1;
			node$1.nodeName = name$1;
			node$1.localName = name$1;
			node$1.specified = true;
			return node$1;
		},
		createEntityReference: function(name$1) {
			if (!g$1.Name_exact.test(name$1)) throw new DOMException$2(DOMException$2.INVALID_CHARACTER_ERR, "not a valid xml name \"" + name$1 + "\"");
			if (this.type === "html") throw new DOMException$2("document is an html document", DOMExceptionName.NotSupportedError);
			var node$1 = new EntityReference(PDC);
			node$1.ownerDocument = this;
			node$1.childNodes = new NodeList();
			node$1.nodeName = name$1;
			return node$1;
		},
		createElementNS: function(namespaceURI, qualifiedName) {
			var validated = validateAndExtract(namespaceURI, qualifiedName);
			var node$1 = new Element(PDC);
			var attrs = node$1.attributes = new NamedNodeMap();
			node$1.childNodes = new NodeList();
			node$1.ownerDocument = this;
			node$1.nodeName = qualifiedName;
			node$1.tagName = qualifiedName;
			node$1.namespaceURI = validated[0];
			node$1.prefix = validated[1];
			node$1.localName = validated[2];
			attrs._ownerElement = node$1;
			return node$1;
		},
		createAttributeNS: function(namespaceURI, qualifiedName) {
			var validated = validateAndExtract(namespaceURI, qualifiedName);
			var node$1 = new Attr(PDC);
			node$1.ownerDocument = this;
			node$1.childNodes = new NodeList();
			node$1.nodeName = qualifiedName;
			node$1.name = qualifiedName;
			node$1.specified = true;
			node$1.namespaceURI = validated[0];
			node$1.prefix = validated[1];
			node$1.localName = validated[2];
			return node$1;
		}
	};
	_extends(Document, Node);
	function Element(symbol) {
		checkSymbol(symbol);
		this._nsMap = Object.create(null);
	}
	Element.prototype = {
		nodeType: ELEMENT_NODE,
		attributes: null,
		getQualifiedName: function() {
			return this.prefix ? this.prefix + ":" + this.localName : this.localName;
		},
		_isInHTMLDocumentAndNamespace: function() {
			return this.ownerDocument.type === "html" && this.namespaceURI === NAMESPACE$2.HTML;
		},
		hasAttributes: function() {
			return !!(this.attributes && this.attributes.length);
		},
		hasAttribute: function(name$1) {
			return !!this.getAttributeNode(name$1);
		},
		getAttribute: function(name$1) {
			var attr$1 = this.getAttributeNode(name$1);
			return attr$1 ? attr$1.value : null;
		},
		getAttributeNode: function(name$1) {
			if (this._isInHTMLDocumentAndNamespace()) name$1 = name$1.toLowerCase();
			return this.attributes.getNamedItem(name$1);
		},
		setAttribute: function(name$1, value) {
			if (this._isInHTMLDocumentAndNamespace()) name$1 = name$1.toLowerCase();
			var attr$1 = this.getAttributeNode(name$1);
			if (attr$1) attr$1.value = attr$1.nodeValue = "" + value;
			else {
				attr$1 = this.ownerDocument._createAttribute(name$1);
				attr$1.value = attr$1.nodeValue = "" + value;
				this.setAttributeNode(attr$1);
			}
		},
		removeAttribute: function(name$1) {
			var attr$1 = this.getAttributeNode(name$1);
			attr$1 && this.removeAttributeNode(attr$1);
		},
		setAttributeNode: function(newAttr) {
			return this.attributes.setNamedItem(newAttr);
		},
		setAttributeNodeNS: function(newAttr) {
			return this.attributes.setNamedItemNS(newAttr);
		},
		removeAttributeNode: function(oldAttr) {
			return this.attributes.removeNamedItem(oldAttr.nodeName);
		},
		removeAttributeNS: function(namespaceURI, localName) {
			var old = this.getAttributeNodeNS(namespaceURI, localName);
			old && this.removeAttributeNode(old);
		},
		hasAttributeNS: function(namespaceURI, localName) {
			return this.getAttributeNodeNS(namespaceURI, localName) != null;
		},
		getAttributeNS: function(namespaceURI, localName) {
			var attr$1 = this.getAttributeNodeNS(namespaceURI, localName);
			return attr$1 ? attr$1.value : null;
		},
		setAttributeNS: function(namespaceURI, qualifiedName, value) {
			var localName = validateAndExtract(namespaceURI, qualifiedName)[2];
			var attr$1 = this.getAttributeNodeNS(namespaceURI, localName);
			if (attr$1) attr$1.value = attr$1.nodeValue = "" + value;
			else {
				attr$1 = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
				attr$1.value = attr$1.nodeValue = "" + value;
				this.setAttributeNode(attr$1);
			}
		},
		getAttributeNodeNS: function(namespaceURI, localName) {
			return this.attributes.getNamedItemNS(namespaceURI, localName);
		},
		getElementsByClassName: function(classNames) {
			var classNamesSet = toOrderedSet(classNames);
			return new LiveNodeList(this, function(base) {
				var ls = [];
				if (classNamesSet.length > 0) _visitNode(base, function(node$1) {
					if (node$1 !== base && node$1.nodeType === ELEMENT_NODE) {
						var nodeClassNames = node$1.getAttribute("class");
						if (nodeClassNames) {
							var matches = classNames === nodeClassNames;
							if (!matches) {
								var nodeClassNamesSet = toOrderedSet(nodeClassNames);
								matches = classNamesSet.every(arrayIncludes(nodeClassNamesSet));
							}
							if (matches) ls.push(node$1);
						}
					}
				});
				return ls;
			});
		},
		getElementsByTagName: function(qualifiedName) {
			var isHTMLDocument = (this.nodeType === DOCUMENT_NODE ? this : this.ownerDocument).type === "html";
			var lowerQualifiedName = qualifiedName.toLowerCase();
			return new LiveNodeList(this, function(base) {
				var ls = [];
				_visitNode(base, function(node$1) {
					if (node$1 === base || node$1.nodeType !== ELEMENT_NODE) return;
					if (qualifiedName === "*") ls.push(node$1);
					else if (node$1.getQualifiedName() === (isHTMLDocument && node$1.namespaceURI === NAMESPACE$2.HTML ? lowerQualifiedName : qualifiedName)) ls.push(node$1);
				});
				return ls;
			});
		},
		getElementsByTagNameNS: function(namespaceURI, localName) {
			return new LiveNodeList(this, function(base) {
				var ls = [];
				_visitNode(base, function(node$1) {
					if (node$1 !== base && node$1.nodeType === ELEMENT_NODE && (namespaceURI === "*" || node$1.namespaceURI === namespaceURI) && (localName === "*" || node$1.localName == localName)) ls.push(node$1);
				});
				return ls;
			});
		}
	};
	Document.prototype.getElementsByClassName = Element.prototype.getElementsByClassName;
	Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
	Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;
	_extends(Element, Node);
	function Attr(symbol) {
		checkSymbol(symbol);
		this.namespaceURI = null;
		this.prefix = null;
		this.ownerElement = null;
	}
	Attr.prototype.nodeType = ATTRIBUTE_NODE;
	_extends(Attr, Node);
	function CharacterData(symbol) {
		checkSymbol(symbol);
	}
	CharacterData.prototype = {
		data: "",
		substringData: function(offset, count) {
			return this.data.substring(offset, offset + count);
		},
		appendData: function(text$2) {
			text$2 = this.data + text$2;
			this.nodeValue = this.data = text$2;
			this.length = text$2.length;
		},
		insertData: function(offset, text$2) {
			this.replaceData(offset, 0, text$2);
		},
		deleteData: function(offset, count) {
			this.replaceData(offset, count, "");
		},
		replaceData: function(offset, count, text$2) {
			var start = this.data.substring(0, offset);
			var end$1 = this.data.substring(offset + count);
			text$2 = start + text$2 + end$1;
			this.nodeValue = this.data = text$2;
			this.length = text$2.length;
		}
	};
	_extends(CharacterData, Node);
	function Text(symbol) {
		checkSymbol(symbol);
	}
	Text.prototype = {
		nodeName: "#text",
		nodeType: TEXT_NODE,
		splitText: function(offset) {
			var text$2 = this.data;
			var newText = text$2.substring(offset);
			text$2 = text$2.substring(0, offset);
			this.data = this.nodeValue = text$2;
			this.length = text$2.length;
			var newNode = this.ownerDocument.createTextNode(newText);
			if (this.parentNode) this.parentNode.insertBefore(newNode, this.nextSibling);
			return newNode;
		}
	};
	_extends(Text, CharacterData);
	function Comment(symbol) {
		checkSymbol(symbol);
	}
	Comment.prototype = {
		nodeName: "#comment",
		nodeType: COMMENT_NODE
	};
	_extends(Comment, CharacterData);
	function CDATASection(symbol) {
		checkSymbol(symbol);
	}
	CDATASection.prototype = {
		nodeName: "#cdata-section",
		nodeType: CDATA_SECTION_NODE
	};
	_extends(CDATASection, Text);
	/**
	* @class DocumentType
	* @augments Node
	* @property {string} name
	* The doctype name, stored verbatim. Declared `readonly` by the WHATWG DOM spec; xmldom does
	* not enforce this constraint — direct property writes succeed and the written value is
	* serialized verbatim. When serialized with `requireWellFormed: true`, the serializer
	* validates the value against the XML `Name` production and throws `InvalidStateError` if it
	* does not match.
	* @property {string} publicId
	* The external subset public identifier, stored verbatim (including surrounding quotes).
	* Declared `readonly` by the WHATWG DOM spec; xmldom does not enforce this constraint —
	* direct property writes succeed and the written value is serialized verbatim.
	* When serialized with `requireWellFormed: true`, the serializer validates the value against
	* the XML `PubidLiteral` production and throws `InvalidStateError` if it does not match.
	* @property {string} systemId
	* The external subset system identifier, stored verbatim (including surrounding quotes).
	* Declared `readonly` by the WHATWG DOM spec; xmldom does not enforce this constraint —
	* direct property writes succeed and the written value is serialized verbatim.
	* When serialized with `requireWellFormed: true`, the serializer validates the value against
	* the XML `SystemLiteral` production and throws `InvalidStateError` if it does not match.
	* @property {string} internalSubset
	* The internal subset string (the raw content between `[` and `]`), or an empty string.
	* Declared `readonly` by the WHATWG DOM spec; xmldom does not enforce this constraint —
	* direct property writes succeed and the written value is serialized verbatim.
	* When serialized with `requireWellFormed: true`, the serializer throws `InvalidStateError`
	* if the value contains `"]>"`.
	* @see https://developer.mozilla.org/docs/Web/API/DocumentType MDN
	* @see https://dom.spec.whatwg.org/#interface-documenttype WHATWG DOM
	* @prettierignore
	*/
	function DocumentType(symbol) {
		checkSymbol(symbol);
	}
	DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
	_extends(DocumentType, Node);
	function Notation(symbol) {
		checkSymbol(symbol);
	}
	Notation.prototype.nodeType = NOTATION_NODE;
	_extends(Notation, Node);
	function Entity(symbol) {
		checkSymbol(symbol);
	}
	Entity.prototype.nodeType = ENTITY_NODE;
	_extends(Entity, Node);
	/**
	* Represents an EntityReference node, serialized as `&nodeName;`.
	*
	* `nodeName` is the referenced entity's name, stored verbatim. When serialized with
	* `requireWellFormed: true`, the serializer validates `nodeName` against the XML `Name`
	* production and throws `InvalidStateError` if it does not match; without that option the name
	* is emitted verbatim between `&` and `;`.
	*
	* __This implementation differs from the specification:__ xmldom does not expand entities —
	* the parser resolves entity references inline and never constructs `EntityReference` nodes,
	* so the only producer is {@link Document#createEntityReference}.
	*
	* @class
	* @see https://www.w3.org/TR/xml/#NT-Name
	*/
	function EntityReference(symbol) {
		checkSymbol(symbol);
	}
	EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
	_extends(EntityReference, Node);
	function DocumentFragment(symbol) {
		checkSymbol(symbol);
	}
	DocumentFragment.prototype.nodeName = "#document-fragment";
	DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE;
	_extends(DocumentFragment, Node);
	function ProcessingInstruction(symbol) {
		checkSymbol(symbol);
	}
	ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
	_extends(ProcessingInstruction, CharacterData);
	function XMLSerializer$1() {}
	/**
	* Returns the result of serializing `node` to XML.
	*
	* When `options.requireWellFormed` is `true`, the serializer throws `InvalidStateError` for
	* content that would produce ill-formed XML (e.g. CDATASection data containing `"]]>"`, Text
	* data containing characters outside the XML Char production, or a Document with no
	* `documentElement`).
	*
	* When `options.splitCDATASections` is `false`, CDATASection data is emitted verbatim even
	* when it contains `"]]>"`. When `true` (the default), `"]]>"` sequences are split across
	* concatenated CDATA sections — this behavior is **deprecated** and will be removed in the
	* next breaking release. Callers should migrate to `{ requireWellFormed: true }`, which throws
	* `InvalidStateError` instead of transforming.
	*
	* __This implementation differs from the specification:__ - CDATASection serialization is not
	* specified by W3C DOM Parsing or WHATWG DOM Parsing (see
	* {@link https://github.com/w3c/DOM-Parsing/issues/38 w3c/DOM-Parsing#38}).
	* When `splitCDATASections` is `true` (the default), `"]]>"` sequences in CDATASection data
	* are split across concatenated CDATA sections — this mechanism is derived from DOM Level 3
	* Core and is **deprecated**. The split mechanics will be removed in the next breaking
	* release. Callers that rely on this behavior should migrate to `{ requireWellFormed: true }`.
	* - W3C DOM Parsing §3.2.1.1 requires well-formedness checks on Element `localName`s,
	* prefixes,
	* and attribute serialization (duplicate attributes, namespace declarations, attribute value
	* characters) when `requireWellFormed` is `true`. Element and attribute qualified names (which
	* cover the namespace prefix) are validated against the XML `QName` production; the remaining
	* §3.2.1.1 checks (duplicate attributes, namespace-declaration consistency) and creation-time
	* name validation are **not implemented** in this release — see the tracking issue filed
	* against the next breaking milestone.
	*
	* @param {Node} node
	* @param {Object | function} [options]
	* Options object, or a legacy nodeFilter function (backward compatible).
	* @param {boolean} [options.requireWellFormed=false]
	* When `true`, throws `InvalidStateError` for content that would produce ill-formed XML.
	* @param {boolean} [options.splitCDATASections=true]
	* When `true` (default), splits `"]]>"` sequences in CDATASection data across concatenated
	* CDATA sections. **Deprecated** — will be removed in the next breaking release.
	* @param {function} [options.nodeFilter]
	* A filter function applied to each node before serialization.
	* @returns {string}
	* @throws {DOMException}
	* With name `InvalidStateError` when `requireWellFormed` is `true` and any of the following
	* conditions hold:
	* - an Element's qualified name (including any namespace prefix) is not a valid XML QName
	* - an attribute's qualified name (including a synthesized `xmlns:` namespace declaration) is
	* not a valid XML QName
	* - CDATASection data contains `"]]>"`
	* - Text data contains characters outside the XML Char production
	* - a Comment node's data contains `--` anywhere or ends with `-`
	* - a ProcessingInstruction's target is not a valid XML `NCName` (a `Name` with no colon) or is
	* an ASCII case-insensitive match for `"xml"`, or its data contains `?>` or characters outside
	* the XML Char production
	* - a DocumentType's `name` is not a valid XML `Name` (XML 1.0 production [5])
	* - a DocumentType's `publicId` is non-empty and does not match the XML `PubidLiteral`
	* production (W3C DOM Parsing §3.2.1.3; XML 1.0 production [12])
	* - a DocumentType's `systemId` is non-empty and does not match the XML `SystemLiteral`
	* production (W3C DOM Parsing §3.2.1.3; XML 1.0 production [11])
	* - a DocumentType's `internalSubset` contains `"]>"`
	* - an EntityReference's `nodeName` is not a valid XML `Name` (XML 1.0 production [5])
	* - the Document has no `documentElement`
	* @see https://developer.mozilla.org/docs/Web/API/XMLSerializer/serializeToString
	* @see https://html.spec.whatwg.org/#dom-xmlserializer-serializetostring
	* @see https://github.com/w3c/DOM-Parsing/issues/84
	* @prettierignore
	*/
	XMLSerializer$1.prototype.serializeToString = function(node$1, options) {
		return nodeSerializeToString.call(node$1, options);
	};
	Node.prototype.toString = nodeSerializeToString;
	function nodeSerializeToString(options) {
		var opts;
		if (typeof options === "function") opts = {
			requireWellFormed: false,
			splitCDATASections: true,
			nodeFilter: options
		};
		else if (options != null) opts = {
			requireWellFormed: !!options.requireWellFormed,
			splitCDATASections: options.splitCDATASections !== false,
			nodeFilter: options.nodeFilter || null
		};
		else opts = {
			requireWellFormed: false,
			splitCDATASections: true,
			nodeFilter: null
		};
		var buf = [];
		var refNode = this.nodeType === DOCUMENT_NODE && this.documentElement || this;
		var prefix = refNode.prefix;
		var uri = refNode.namespaceURI;
		if (uri && prefix == null) {
			var prefix = refNode.lookupPrefix(uri);
			if (prefix == null) var visibleNamespaces = [{
				namespace: uri,
				prefix: null
			}];
		}
		serializeToString(this, buf, visibleNamespaces, opts);
		return buf.join("");
	}
	function needNamespaceDefine(node$1, isHTML, visibleNamespaces) {
		var prefix = node$1.prefix || "";
		var uri = node$1.namespaceURI;
		if (!uri) return false;
		if (prefix === "xml" && uri === NAMESPACE$2.XML || uri === NAMESPACE$2.XMLNS) return false;
		var i$1 = visibleNamespaces.length;
		while (i$1--) {
			var ns = visibleNamespaces[i$1];
			if (ns.prefix === prefix) return ns.namespace !== uri;
		}
		return true;
	}
	/**
	* Literal whitespace other than space that appear in attribute values are serialized as
	* their entity references, so they will be preserved.
	* (In contrast to whitespace literals in the input which are normalized to spaces).
	*
	* Well-formed constraint: No < in Attribute Values:
	* > The replacement text of any entity referred to directly or indirectly
	* > in an attribute value must not contain a <.
	*
	* @see https://www.w3.org/TR/xml11/#CleanAttrVals
	* @see https://www.w3.org/TR/xml11/#NT-AttValue
	* @see https://www.w3.org/TR/xml11/#AVNormalize
	* @see https://w3c.github.io/DOM-Parsing/#serializing-an-element-s-attributes
	* @prettierignore
	*/
	function addSerializedAttribute(buf, qualifiedName, value, requireWellFormed) {
		if (requireWellFormed && !g$1.QName_exact.test(qualifiedName)) throw new DOMException$2("The attribute name \"" + qualifiedName + "\" is not a valid XML QName", DOMExceptionName.InvalidStateError);
		buf.push(" ", qualifiedName, "=\"", value.replace(/[<>&"\t\n\r]/g, _xmlEncoder), "\"");
	}
	function serializeToString(node$1, buf, visibleNamespaces, opts) {
		if (!visibleNamespaces) visibleNamespaces = [];
		var nodeFilter = opts.nodeFilter;
		var requireWellFormed = opts.requireWellFormed;
		var splitCDATASections = opts.splitCDATASections;
		var isHTML = (node$1.nodeType === DOCUMENT_NODE ? node$1 : node$1.ownerDocument).type === "html";
		walkDOM(node$1, { ns: visibleNamespaces }, {
			enter: function(n, ctx) {
				var namespaces = ctx.ns;
				if (nodeFilter) {
					n = nodeFilter(n);
					if (n) {
						if (typeof n == "string") {
							buf.push(n);
							return null;
						}
					} else return null;
				}
				switch (n.nodeType) {
					case ELEMENT_NODE:
						var attrs = n.attributes;
						var len = attrs.length;
						var nodeName = n.tagName;
						var prefixedNodeName = nodeName;
						if (!isHTML && !n.prefix && n.namespaceURI) {
							var defaultNS;
							for (var ai = 0; ai < attrs.length; ai++) if (attrs.item(ai).name === "xmlns") {
								defaultNS = attrs.item(ai).value;
								break;
							}
							if (!defaultNS) for (var nsi = namespaces.length - 1; nsi >= 0; nsi--) {
								var nsEntry = namespaces[nsi];
								if (nsEntry.prefix === "" && nsEntry.namespace === n.namespaceURI) {
									defaultNS = nsEntry.namespace;
									break;
								}
							}
							if (defaultNS !== n.namespaceURI) for (var nsi = namespaces.length - 1; nsi >= 0; nsi--) {
								var nsEntry = namespaces[nsi];
								if (nsEntry.namespace === n.namespaceURI) {
									if (nsEntry.prefix) prefixedNodeName = nsEntry.prefix + ":" + nodeName;
									break;
								}
							}
						}
						if (requireWellFormed && !g$1.QName_exact.test(prefixedNodeName)) throw new DOMException$2("The element name \"" + prefixedNodeName + "\" is not a valid XML QName", DOMExceptionName.InvalidStateError);
						buf.push("<", prefixedNodeName);
						var childNamespaces = namespaces.slice();
						for (var i$1 = 0; i$1 < len; i$1++) {
							var attr$1 = attrs.item(i$1);
							if (attr$1.prefix == "xmlns") childNamespaces.push({
								prefix: attr$1.localName,
								namespace: attr$1.value
							});
							else if (attr$1.nodeName == "xmlns") childNamespaces.push({
								prefix: "",
								namespace: attr$1.value
							});
						}
						for (var i$1 = 0; i$1 < len; i$1++) {
							var attr$1 = attrs.item(i$1);
							if (needNamespaceDefine(attr$1, isHTML, childNamespaces)) {
								var attrPrefix = attr$1.prefix || "";
								var uri = attr$1.namespaceURI;
								addSerializedAttribute(buf, attrPrefix ? "xmlns:" + attrPrefix : "xmlns", uri, requireWellFormed);
								childNamespaces.push({
									prefix: attrPrefix,
									namespace: uri
								});
							}
							var filteredAttr = nodeFilter ? nodeFilter(attr$1) : attr$1;
							if (filteredAttr) if (typeof filteredAttr === "string") buf.push(filteredAttr);
							else addSerializedAttribute(buf, filteredAttr.name, filteredAttr.value, requireWellFormed);
						}
						if (nodeName === prefixedNodeName && needNamespaceDefine(n, isHTML, childNamespaces)) {
							var nodePrefix = n.prefix || "";
							var uri = n.namespaceURI;
							addSerializedAttribute(buf, nodePrefix ? "xmlns:" + nodePrefix : "xmlns", uri, requireWellFormed);
							childNamespaces.push({
								prefix: nodePrefix,
								namespace: uri
							});
						}
						var canCloseTag = !n.firstChild;
						if (canCloseTag && (isHTML || n.namespaceURI === NAMESPACE$2.HTML)) canCloseTag = isHTMLVoidElement(nodeName);
						if (canCloseTag) {
							buf.push("/>");
							return null;
						}
						buf.push(">");
						if (isHTML && isHTMLRawTextElement$1(nodeName)) {
							var child = n.firstChild;
							while (child) {
								if (child.data) buf.push(child.data);
								else serializeToString(child, buf, childNamespaces.slice(), opts);
								child = child.nextSibling;
							}
							buf.push("</", prefixedNodeName, ">");
							return null;
						}
						return {
							ns: childNamespaces,
							tag: prefixedNodeName
						};
					case DOCUMENT_NODE:
					case DOCUMENT_FRAGMENT_NODE:
						if (requireWellFormed && n.nodeType === DOCUMENT_NODE && n.documentElement == null) throw new DOMException$2("The Document has no documentElement", DOMExceptionName.InvalidStateError);
						return { ns: namespaces };
					case ATTRIBUTE_NODE:
						addSerializedAttribute(buf, n.name, n.value, requireWellFormed);
						return null;
					case TEXT_NODE:
						if (requireWellFormed && g$1.InvalidChar.test(n.data)) throw new DOMException$2("The Text node data contains characters outside the XML Char production", DOMExceptionName.InvalidStateError);
						buf.push(n.data.replace(/[<&>]/g, _xmlEncoder));
						return null;
					case CDATA_SECTION_NODE:
						if (requireWellFormed && n.data.indexOf("]]>") !== -1) throw new DOMException$2("The CDATASection data contains \"]]>\"", DOMExceptionName.InvalidStateError);
						if (splitCDATASections) buf.push(g$1.CDATA_START, n.data.replace(/]]>/g, "]]]]><![CDATA[>"), g$1.CDATA_END);
						else buf.push(g$1.CDATA_START, n.data, g$1.CDATA_END);
						return null;
					case COMMENT_NODE:
						if (requireWellFormed) {
							if (g$1.InvalidChar.test(n.data)) throw new DOMException$2("The comment node data contains characters outside the XML Char production", DOMExceptionName.InvalidStateError);
							if (n.data.indexOf("--") !== -1 || n.data[n.data.length - 1] === "-") throw new DOMException$2("The comment node data contains \"--\" or ends with \"-\"", DOMExceptionName.InvalidStateError);
						}
						buf.push(g$1.COMMENT_START, n.data, g$1.COMMENT_END);
						return null;
					case DOCUMENT_TYPE_NODE:
						var pubid = n.publicId;
						var sysid = n.systemId;
						if (requireWellFormed) {
							if (!g$1.Name_exact.test(n.name)) throw new DOMException$2("The doctype name \"" + n.name + "\" is not a valid XML Name", DOMExceptionName.InvalidStateError);
							if (pubid && !g$1.PubidLiteral_match.test(pubid)) throw new DOMException$2("DocumentType publicId is not a valid PubidLiteral", DOMExceptionName.InvalidStateError);
							if (sysid && sysid !== "." && !g$1.SystemLiteral_match.test(sysid)) throw new DOMException$2("DocumentType systemId is not a valid SystemLiteral", DOMExceptionName.InvalidStateError);
							if (n.internalSubset && n.internalSubset.indexOf("]>") !== -1) throw new DOMException$2("DocumentType internalSubset contains \"]>\"", DOMExceptionName.InvalidStateError);
						}
						buf.push(g$1.DOCTYPE_DECL_START, " ", n.name);
						if (pubid) {
							buf.push(" ", g$1.PUBLIC, " ", pubid);
							if (sysid && sysid !== ".") buf.push(" ", sysid);
						} else if (sysid && sysid !== ".") buf.push(" ", g$1.SYSTEM, " ", sysid);
						if (n.internalSubset) buf.push(" [", n.internalSubset, "]");
						buf.push(">");
						return null;
					case PROCESSING_INSTRUCTION_NODE:
						if (requireWellFormed) {
							if (!g$1.NCName_exact.test(n.target) || n.target.toLowerCase() === "xml") throw new DOMException$2("The processing instruction target \"" + n.target + "\" is not a valid XML NCName or is reserved", DOMExceptionName.InvalidStateError);
							if (g$1.InvalidChar.test(n.data)) throw new DOMException$2("The ProcessingInstruction data contains characters outside the XML Char production", DOMExceptionName.InvalidStateError);
							if (n.data.indexOf("?>") !== -1) throw new DOMException$2("The ProcessingInstruction data contains \"?>\"", DOMExceptionName.InvalidStateError);
						}
						buf.push("<?", n.target, " ", n.data, "?>");
						return null;
					case ENTITY_REFERENCE_NODE:
						if (requireWellFormed && !g$1.Name_exact.test(n.nodeName)) throw new DOMException$2("The entity reference name \"" + n.nodeName + "\" is not a valid XML Name", DOMExceptionName.InvalidStateError);
						buf.push("&", n.nodeName, ";");
						return null;
					default:
						buf.push("??", n.nodeName);
						return null;
				}
			},
			exit: function(n, childCtx) {
				if (childCtx && childCtx.tag) buf.push("</", childCtx.tag, ">");
			}
		});
	}
	/**
	* Imports a node from a different document into `doc`, creating a new copy.
	* Delegates to {@link walkDOM} for traversal. Each node in the subtree is shallow-cloned,
	* stamped with `doc` as its `ownerDocument`, and detached (`parentNode` set to `null`).
	* Children are imported recursively when `deep` is `true`; for {@link Attr} nodes `deep` is
	* always forced to `true`
	* because an attribute's value lives in a child text node.
	*
	* @param {Document} doc
	* The document that will own the imported node.
	* @param {Node} node
	* The node to import.
	* @param {boolean} deep
	* If `true`, descendants are imported recursively.
	* @returns {Node}
	* The newly imported node, now owned by `doc`.
	*/
	function importNode(doc, node$1, deep) {
		var destRoot;
		walkDOM(node$1, null, { enter: function(srcNode, destParent) {
			var destNode = srcNode.cloneNode(false);
			destNode.ownerDocument = doc;
			destNode.parentNode = null;
			if (destParent === null) destRoot = destNode;
			else destParent.appendChild(destNode);
			return srcNode.nodeType === ATTRIBUTE_NODE || deep ? destNode : null;
		} });
		return destRoot;
	}
	/**
	* Creates a copy of a node from an existing one.
	*
	* @param {Document} doc
	* The Document object representing the document that the new node will belong to.
	* @param {Node} node
	* The node to clone.
	* @param {boolean} deep
	* If true, the contents of the node are recursively copied.
	* If false, only the node itself (and its attributes, if it is an element) are copied.
	* @returns {Node}
	* Returns the newly created copy of the node.
	* @throws {DOMException}
	* May throw a DOMException if operations within setAttributeNode or appendChild (which are
	* potentially invoked in this function) do not meet their specific constraints.
	*/
	function cloneNode(doc, node$1, deep) {
		var destRoot;
		walkDOM(node$1, null, { enter: function(srcNode, destParent) {
			var destNode = new srcNode.constructor(PDC);
			for (var n in srcNode) if (hasOwn$1(srcNode, n)) {
				var v = srcNode[n];
				if (typeof v != "object") {
					if (v != destNode[n]) destNode[n] = v;
				}
			}
			if (srcNode.childNodes) destNode.childNodes = new NodeList();
			destNode.ownerDocument = doc;
			var shouldDeep = deep;
			switch (destNode.nodeType) {
				case ELEMENT_NODE:
					var attrs = srcNode.attributes;
					var attrs2 = destNode.attributes = new NamedNodeMap();
					var len = attrs.length;
					attrs2._ownerElement = destNode;
					for (var i$1 = 0; i$1 < len; i$1++) destNode.setAttributeNode(cloneNode(doc, attrs.item(i$1), true));
					break;
				case ATTRIBUTE_NODE: shouldDeep = true;
			}
			if (destParent !== null) destParent.appendChild(destNode);
			else destRoot = destNode;
			return shouldDeep ? destNode : null;
		} });
		return destRoot;
	}
	function __set__(object$1, key$2, value) {
		object$1[key$2] = value;
	}
	function childrenRefresh(node$1) {
		var ls = [];
		var child = node$1.firstChild;
		while (child) {
			if (child.nodeType === ELEMENT_NODE) ls.push(child);
			child = child.nextSibling;
		}
		return ls;
	}
	try {
		if (Object.defineProperty) {
			Object.defineProperty(LiveNodeList.prototype, "length", { get: function() {
				_updateLiveList(this);
				return this.$$length;
			} });
			/**
			* The text content of this node and its descendants.
			*
			* For {@link Element} and {@link DocumentFragment} nodes, returns the concatenation of the
			* `nodeValue` of every descendant text node, excluding processing instruction and comment
			* nodes. For all other node types, returns `nodeValue`.
			*
			* Setting `textContent` on an element or document fragment replaces all child nodes with a
			* single text node; on other nodes it sets `data`, `value`, and `nodeValue` directly.
			*
			* @type {string | null}
			* @see {@link https://dom.spec.whatwg.org/#dom-node-textcontent}
			*/
			Object.defineProperty(Node.prototype, "textContent", {
				get: function() {
					if (this.nodeType === ELEMENT_NODE || this.nodeType === DOCUMENT_FRAGMENT_NODE) {
						var buf = [];
						walkDOM(this, null, { enter: function(n) {
							if (n.nodeType === ELEMENT_NODE || n.nodeType === DOCUMENT_FRAGMENT_NODE) return true;
							if (n.nodeType === PROCESSING_INSTRUCTION_NODE || n.nodeType === COMMENT_NODE) return null;
							buf.push(n.nodeValue);
						} });
						return buf.join("");
					}
					return this.nodeValue;
				},
				set: function(data$1) {
					switch (this.nodeType) {
						case ELEMENT_NODE:
						case DOCUMENT_FRAGMENT_NODE:
							while (this.firstChild) this.removeChild(this.firstChild);
							if (data$1 || String(data$1)) this.appendChild(this.ownerDocument.createTextNode(data$1));
							break;
						default:
							this.data = data$1;
							this.value = data$1;
							this.nodeValue = data$1;
					}
				}
			});
			Object.defineProperty(CharacterData.prototype, "data", {
				get: function() {
					return this._data != null ? this._data : "";
				},
				set: function(v) {
					this._data = v;
					this.length = typeof v === "string" ? v.length : 0;
				}
			});
			Object.defineProperty(CharacterData.prototype, "nodeValue", {
				get: function() {
					return this.data;
				},
				set: function(v) {
					this.data = v;
				},
				enumerable: true,
				configurable: true
			});
			Object.defineProperty(Element.prototype, "children", { get: function() {
				return new LiveNodeList(this, childrenRefresh);
			} });
			Object.defineProperty(Document.prototype, "children", { get: function() {
				return new LiveNodeList(this, childrenRefresh);
			} });
			Object.defineProperty(DocumentFragment.prototype, "children", { get: function() {
				return new LiveNodeList(this, childrenRefresh);
			} });
			__set__ = function(object$1, key$2, value) {
				object$1["$$" + key$2] = value;
			};
		}
	} catch (e) {}
	exports._updateLiveList = _updateLiveList;
	exports.Attr = Attr;
	exports.CDATASection = CDATASection;
	exports.CharacterData = CharacterData;
	exports.Comment = Comment;
	exports.Document = Document;
	exports.DocumentFragment = DocumentFragment;
	exports.DocumentType = DocumentType;
	exports.DOMImplementation = DOMImplementation$1;
	exports.Element = Element;
	exports.Entity = Entity;
	exports.EntityReference = EntityReference;
	exports.LiveNodeList = LiveNodeList;
	exports.NamedNodeMap = NamedNodeMap;
	exports.Node = Node;
	exports.NodeList = NodeList;
	exports.Notation = Notation;
	exports.Text = Text;
	exports.ProcessingInstruction = ProcessingInstruction;
	exports.walkDOM = walkDOM;
	exports.XMLSerializer = XMLSerializer$1;
}) });

//#endregion
//#region node_modules/.pnpm/@xmldom+xmldom@0.9.12/node_modules/@xmldom/xmldom/lib/entities.js
var require_entities = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/@xmldom+xmldom@0.9.12/node_modules/@xmldom/xmldom/lib/entities.js": ((exports) => {
	var freeze = require_conventions().freeze;
	/**
	* The entities that are predefined in every XML document.
	*
	* @see https://www.w3.org/TR/2006/REC-xml11-20060816/#sec-predefined-ent W3C XML 1.1
	* @see https://www.w3.org/TR/2008/REC-xml-20081126/#sec-predefined-ent W3C XML 1.0
	* @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Predefined_entities_in_XML
	*      Wikipedia
	*/
	exports.XML_ENTITIES = freeze({
		amp: "&",
		apos: "'",
		gt: ">",
		lt: "<",
		quot: "\""
	});
	/**
	* A map of all entities that are detected in an HTML document.
	* They contain all entries from `XML_ENTITIES`.
	*
	* @see {@link XML_ENTITIES}
	* @see {@link DOMParser.parseFromString}
	* @see {@link DOMImplementation.prototype.createHTMLDocument}
	* @see https://html.spec.whatwg.org/#named-character-references WHATWG HTML(5)
	*      Spec
	* @see https://html.spec.whatwg.org/entities.json JSON
	* @see https://www.w3.org/TR/xml-entity-names/ W3C XML Entity Names
	* @see https://www.w3.org/TR/html4/sgml/entities.html W3C HTML4/SGML
	* @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML
	*      Wikipedia (HTML)
	* @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Entities_representing_special_characters_in_XHTML
	*      Wikpedia (XHTML)
	*/
	exports.HTML_ENTITIES = freeze({
		Aacute: "Á",
		aacute: "á",
		Abreve: "Ă",
		abreve: "ă",
		ac: "∾",
		acd: "∿",
		acE: "∾̳",
		Acirc: "Â",
		acirc: "â",
		acute: "´",
		Acy: "А",
		acy: "а",
		AElig: "Æ",
		aelig: "æ",
		af: "⁡",
		Afr: "𝔄",
		afr: "𝔞",
		Agrave: "À",
		agrave: "à",
		alefsym: "ℵ",
		aleph: "ℵ",
		Alpha: "Α",
		alpha: "α",
		Amacr: "Ā",
		amacr: "ā",
		amalg: "⨿",
		AMP: "&",
		amp: "&",
		And: "⩓",
		and: "∧",
		andand: "⩕",
		andd: "⩜",
		andslope: "⩘",
		andv: "⩚",
		ang: "∠",
		ange: "⦤",
		angle: "∠",
		angmsd: "∡",
		angmsdaa: "⦨",
		angmsdab: "⦩",
		angmsdac: "⦪",
		angmsdad: "⦫",
		angmsdae: "⦬",
		angmsdaf: "⦭",
		angmsdag: "⦮",
		angmsdah: "⦯",
		angrt: "∟",
		angrtvb: "⊾",
		angrtvbd: "⦝",
		angsph: "∢",
		angst: "Å",
		angzarr: "⍼",
		Aogon: "Ą",
		aogon: "ą",
		Aopf: "𝔸",
		aopf: "𝕒",
		ap: "≈",
		apacir: "⩯",
		apE: "⩰",
		ape: "≊",
		apid: "≋",
		apos: "'",
		ApplyFunction: "⁡",
		approx: "≈",
		approxeq: "≊",
		Aring: "Å",
		aring: "å",
		Ascr: "𝒜",
		ascr: "𝒶",
		Assign: "≔",
		ast: "*",
		asymp: "≈",
		asympeq: "≍",
		Atilde: "Ã",
		atilde: "ã",
		Auml: "Ä",
		auml: "ä",
		awconint: "∳",
		awint: "⨑",
		backcong: "≌",
		backepsilon: "϶",
		backprime: "‵",
		backsim: "∽",
		backsimeq: "⋍",
		Backslash: "∖",
		Barv: "⫧",
		barvee: "⊽",
		Barwed: "⌆",
		barwed: "⌅",
		barwedge: "⌅",
		bbrk: "⎵",
		bbrktbrk: "⎶",
		bcong: "≌",
		Bcy: "Б",
		bcy: "б",
		bdquo: "„",
		becaus: "∵",
		Because: "∵",
		because: "∵",
		bemptyv: "⦰",
		bepsi: "϶",
		bernou: "ℬ",
		Bernoullis: "ℬ",
		Beta: "Β",
		beta: "β",
		beth: "ℶ",
		between: "≬",
		Bfr: "𝔅",
		bfr: "𝔟",
		bigcap: "⋂",
		bigcirc: "◯",
		bigcup: "⋃",
		bigodot: "⨀",
		bigoplus: "⨁",
		bigotimes: "⨂",
		bigsqcup: "⨆",
		bigstar: "★",
		bigtriangledown: "▽",
		bigtriangleup: "△",
		biguplus: "⨄",
		bigvee: "⋁",
		bigwedge: "⋀",
		bkarow: "⤍",
		blacklozenge: "⧫",
		blacksquare: "▪",
		blacktriangle: "▴",
		blacktriangledown: "▾",
		blacktriangleleft: "◂",
		blacktriangleright: "▸",
		blank: "␣",
		blk12: "▒",
		blk14: "░",
		blk34: "▓",
		block: "█",
		bne: "=⃥",
		bnequiv: "≡⃥",
		bNot: "⫭",
		bnot: "⌐",
		Bopf: "𝔹",
		bopf: "𝕓",
		bot: "⊥",
		bottom: "⊥",
		bowtie: "⋈",
		boxbox: "⧉",
		boxDL: "╗",
		boxDl: "╖",
		boxdL: "╕",
		boxdl: "┐",
		boxDR: "╔",
		boxDr: "╓",
		boxdR: "╒",
		boxdr: "┌",
		boxH: "═",
		boxh: "─",
		boxHD: "╦",
		boxHd: "╤",
		boxhD: "╥",
		boxhd: "┬",
		boxHU: "╩",
		boxHu: "╧",
		boxhU: "╨",
		boxhu: "┴",
		boxminus: "⊟",
		boxplus: "⊞",
		boxtimes: "⊠",
		boxUL: "╝",
		boxUl: "╜",
		boxuL: "╛",
		boxul: "┘",
		boxUR: "╚",
		boxUr: "╙",
		boxuR: "╘",
		boxur: "└",
		boxV: "║",
		boxv: "│",
		boxVH: "╬",
		boxVh: "╫",
		boxvH: "╪",
		boxvh: "┼",
		boxVL: "╣",
		boxVl: "╢",
		boxvL: "╡",
		boxvl: "┤",
		boxVR: "╠",
		boxVr: "╟",
		boxvR: "╞",
		boxvr: "├",
		bprime: "‵",
		Breve: "˘",
		breve: "˘",
		brvbar: "¦",
		Bscr: "ℬ",
		bscr: "𝒷",
		bsemi: "⁏",
		bsim: "∽",
		bsime: "⋍",
		bsol: "\\",
		bsolb: "⧅",
		bsolhsub: "⟈",
		bull: "•",
		bullet: "•",
		bump: "≎",
		bumpE: "⪮",
		bumpe: "≏",
		Bumpeq: "≎",
		bumpeq: "≏",
		Cacute: "Ć",
		cacute: "ć",
		Cap: "⋒",
		cap: "∩",
		capand: "⩄",
		capbrcup: "⩉",
		capcap: "⩋",
		capcup: "⩇",
		capdot: "⩀",
		CapitalDifferentialD: "ⅅ",
		caps: "∩︀",
		caret: "⁁",
		caron: "ˇ",
		Cayleys: "ℭ",
		ccaps: "⩍",
		Ccaron: "Č",
		ccaron: "č",
		Ccedil: "Ç",
		ccedil: "ç",
		Ccirc: "Ĉ",
		ccirc: "ĉ",
		Cconint: "∰",
		ccups: "⩌",
		ccupssm: "⩐",
		Cdot: "Ċ",
		cdot: "ċ",
		cedil: "¸",
		Cedilla: "¸",
		cemptyv: "⦲",
		cent: "¢",
		CenterDot: "·",
		centerdot: "·",
		Cfr: "ℭ",
		cfr: "𝔠",
		CHcy: "Ч",
		chcy: "ч",
		check: "✓",
		checkmark: "✓",
		Chi: "Χ",
		chi: "χ",
		cir: "○",
		circ: "ˆ",
		circeq: "≗",
		circlearrowleft: "↺",
		circlearrowright: "↻",
		circledast: "⊛",
		circledcirc: "⊚",
		circleddash: "⊝",
		CircleDot: "⊙",
		circledR: "®",
		circledS: "Ⓢ",
		CircleMinus: "⊖",
		CirclePlus: "⊕",
		CircleTimes: "⊗",
		cirE: "⧃",
		cire: "≗",
		cirfnint: "⨐",
		cirmid: "⫯",
		cirscir: "⧂",
		ClockwiseContourIntegral: "∲",
		CloseCurlyDoubleQuote: "”",
		CloseCurlyQuote: "’",
		clubs: "♣",
		clubsuit: "♣",
		Colon: "∷",
		colon: ":",
		Colone: "⩴",
		colone: "≔",
		coloneq: "≔",
		comma: ",",
		commat: "@",
		comp: "∁",
		compfn: "∘",
		complement: "∁",
		complexes: "ℂ",
		cong: "≅",
		congdot: "⩭",
		Congruent: "≡",
		Conint: "∯",
		conint: "∮",
		ContourIntegral: "∮",
		Copf: "ℂ",
		copf: "𝕔",
		coprod: "∐",
		Coproduct: "∐",
		COPY: "©",
		copy: "©",
		copysr: "℗",
		CounterClockwiseContourIntegral: "∳",
		crarr: "↵",
		Cross: "⨯",
		cross: "✗",
		Cscr: "𝒞",
		cscr: "𝒸",
		csub: "⫏",
		csube: "⫑",
		csup: "⫐",
		csupe: "⫒",
		ctdot: "⋯",
		cudarrl: "⤸",
		cudarrr: "⤵",
		cuepr: "⋞",
		cuesc: "⋟",
		cularr: "↶",
		cularrp: "⤽",
		Cup: "⋓",
		cup: "∪",
		cupbrcap: "⩈",
		CupCap: "≍",
		cupcap: "⩆",
		cupcup: "⩊",
		cupdot: "⊍",
		cupor: "⩅",
		cups: "∪︀",
		curarr: "↷",
		curarrm: "⤼",
		curlyeqprec: "⋞",
		curlyeqsucc: "⋟",
		curlyvee: "⋎",
		curlywedge: "⋏",
		curren: "¤",
		curvearrowleft: "↶",
		curvearrowright: "↷",
		cuvee: "⋎",
		cuwed: "⋏",
		cwconint: "∲",
		cwint: "∱",
		cylcty: "⌭",
		Dagger: "‡",
		dagger: "†",
		daleth: "ℸ",
		Darr: "↡",
		dArr: "⇓",
		darr: "↓",
		dash: "‐",
		Dashv: "⫤",
		dashv: "⊣",
		dbkarow: "⤏",
		dblac: "˝",
		Dcaron: "Ď",
		dcaron: "ď",
		Dcy: "Д",
		dcy: "д",
		DD: "ⅅ",
		dd: "ⅆ",
		ddagger: "‡",
		ddarr: "⇊",
		DDotrahd: "⤑",
		ddotseq: "⩷",
		deg: "°",
		Del: "∇",
		Delta: "Δ",
		delta: "δ",
		demptyv: "⦱",
		dfisht: "⥿",
		Dfr: "𝔇",
		dfr: "𝔡",
		dHar: "⥥",
		dharl: "⇃",
		dharr: "⇂",
		DiacriticalAcute: "´",
		DiacriticalDot: "˙",
		DiacriticalDoubleAcute: "˝",
		DiacriticalGrave: "`",
		DiacriticalTilde: "˜",
		diam: "⋄",
		Diamond: "⋄",
		diamond: "⋄",
		diamondsuit: "♦",
		diams: "♦",
		die: "¨",
		DifferentialD: "ⅆ",
		digamma: "ϝ",
		disin: "⋲",
		div: "÷",
		divide: "÷",
		divideontimes: "⋇",
		divonx: "⋇",
		DJcy: "Ђ",
		djcy: "ђ",
		dlcorn: "⌞",
		dlcrop: "⌍",
		dollar: "$",
		Dopf: "𝔻",
		dopf: "𝕕",
		Dot: "¨",
		dot: "˙",
		DotDot: "⃜",
		doteq: "≐",
		doteqdot: "≑",
		DotEqual: "≐",
		dotminus: "∸",
		dotplus: "∔",
		dotsquare: "⊡",
		doublebarwedge: "⌆",
		DoubleContourIntegral: "∯",
		DoubleDot: "¨",
		DoubleDownArrow: "⇓",
		DoubleLeftArrow: "⇐",
		DoubleLeftRightArrow: "⇔",
		DoubleLeftTee: "⫤",
		DoubleLongLeftArrow: "⟸",
		DoubleLongLeftRightArrow: "⟺",
		DoubleLongRightArrow: "⟹",
		DoubleRightArrow: "⇒",
		DoubleRightTee: "⊨",
		DoubleUpArrow: "⇑",
		DoubleUpDownArrow: "⇕",
		DoubleVerticalBar: "∥",
		DownArrow: "↓",
		Downarrow: "⇓",
		downarrow: "↓",
		DownArrowBar: "⤓",
		DownArrowUpArrow: "⇵",
		DownBreve: "̑",
		downdownarrows: "⇊",
		downharpoonleft: "⇃",
		downharpoonright: "⇂",
		DownLeftRightVector: "⥐",
		DownLeftTeeVector: "⥞",
		DownLeftVector: "↽",
		DownLeftVectorBar: "⥖",
		DownRightTeeVector: "⥟",
		DownRightVector: "⇁",
		DownRightVectorBar: "⥗",
		DownTee: "⊤",
		DownTeeArrow: "↧",
		drbkarow: "⤐",
		drcorn: "⌟",
		drcrop: "⌌",
		Dscr: "𝒟",
		dscr: "𝒹",
		DScy: "Ѕ",
		dscy: "ѕ",
		dsol: "⧶",
		Dstrok: "Đ",
		dstrok: "đ",
		dtdot: "⋱",
		dtri: "▿",
		dtrif: "▾",
		duarr: "⇵",
		duhar: "⥯",
		dwangle: "⦦",
		DZcy: "Џ",
		dzcy: "џ",
		dzigrarr: "⟿",
		Eacute: "É",
		eacute: "é",
		easter: "⩮",
		Ecaron: "Ě",
		ecaron: "ě",
		ecir: "≖",
		Ecirc: "Ê",
		ecirc: "ê",
		ecolon: "≕",
		Ecy: "Э",
		ecy: "э",
		eDDot: "⩷",
		Edot: "Ė",
		eDot: "≑",
		edot: "ė",
		ee: "ⅇ",
		efDot: "≒",
		Efr: "𝔈",
		efr: "𝔢",
		eg: "⪚",
		Egrave: "È",
		egrave: "è",
		egs: "⪖",
		egsdot: "⪘",
		el: "⪙",
		Element: "∈",
		elinters: "⏧",
		ell: "ℓ",
		els: "⪕",
		elsdot: "⪗",
		Emacr: "Ē",
		emacr: "ē",
		empty: "∅",
		emptyset: "∅",
		EmptySmallSquare: "◻",
		emptyv: "∅",
		EmptyVerySmallSquare: "▫",
		emsp: " ",
		emsp13: " ",
		emsp14: " ",
		ENG: "Ŋ",
		eng: "ŋ",
		ensp: " ",
		Eogon: "Ę",
		eogon: "ę",
		Eopf: "𝔼",
		eopf: "𝕖",
		epar: "⋕",
		eparsl: "⧣",
		eplus: "⩱",
		epsi: "ε",
		Epsilon: "Ε",
		epsilon: "ε",
		epsiv: "ϵ",
		eqcirc: "≖",
		eqcolon: "≕",
		eqsim: "≂",
		eqslantgtr: "⪖",
		eqslantless: "⪕",
		Equal: "⩵",
		equals: "=",
		EqualTilde: "≂",
		equest: "≟",
		Equilibrium: "⇌",
		equiv: "≡",
		equivDD: "⩸",
		eqvparsl: "⧥",
		erarr: "⥱",
		erDot: "≓",
		Escr: "ℰ",
		escr: "ℯ",
		esdot: "≐",
		Esim: "⩳",
		esim: "≂",
		Eta: "Η",
		eta: "η",
		ETH: "Ð",
		eth: "ð",
		Euml: "Ë",
		euml: "ë",
		euro: "€",
		excl: "!",
		exist: "∃",
		Exists: "∃",
		expectation: "ℰ",
		ExponentialE: "ⅇ",
		exponentiale: "ⅇ",
		fallingdotseq: "≒",
		Fcy: "Ф",
		fcy: "ф",
		female: "♀",
		ffilig: "ﬃ",
		fflig: "ﬀ",
		ffllig: "ﬄ",
		Ffr: "𝔉",
		ffr: "𝔣",
		filig: "ﬁ",
		FilledSmallSquare: "◼",
		FilledVerySmallSquare: "▪",
		fjlig: "fj",
		flat: "♭",
		fllig: "ﬂ",
		fltns: "▱",
		fnof: "ƒ",
		Fopf: "𝔽",
		fopf: "𝕗",
		ForAll: "∀",
		forall: "∀",
		fork: "⋔",
		forkv: "⫙",
		Fouriertrf: "ℱ",
		fpartint: "⨍",
		frac12: "½",
		frac13: "⅓",
		frac14: "¼",
		frac15: "⅕",
		frac16: "⅙",
		frac18: "⅛",
		frac23: "⅔",
		frac25: "⅖",
		frac34: "¾",
		frac35: "⅗",
		frac38: "⅜",
		frac45: "⅘",
		frac56: "⅚",
		frac58: "⅝",
		frac78: "⅞",
		frasl: "⁄",
		frown: "⌢",
		Fscr: "ℱ",
		fscr: "𝒻",
		gacute: "ǵ",
		Gamma: "Γ",
		gamma: "γ",
		Gammad: "Ϝ",
		gammad: "ϝ",
		gap: "⪆",
		Gbreve: "Ğ",
		gbreve: "ğ",
		Gcedil: "Ģ",
		Gcirc: "Ĝ",
		gcirc: "ĝ",
		Gcy: "Г",
		gcy: "г",
		Gdot: "Ġ",
		gdot: "ġ",
		gE: "≧",
		ge: "≥",
		gEl: "⪌",
		gel: "⋛",
		geq: "≥",
		geqq: "≧",
		geqslant: "⩾",
		ges: "⩾",
		gescc: "⪩",
		gesdot: "⪀",
		gesdoto: "⪂",
		gesdotol: "⪄",
		gesl: "⋛︀",
		gesles: "⪔",
		Gfr: "𝔊",
		gfr: "𝔤",
		Gg: "⋙",
		gg: "≫",
		ggg: "⋙",
		gimel: "ℷ",
		GJcy: "Ѓ",
		gjcy: "ѓ",
		gl: "≷",
		gla: "⪥",
		glE: "⪒",
		glj: "⪤",
		gnap: "⪊",
		gnapprox: "⪊",
		gnE: "≩",
		gne: "⪈",
		gneq: "⪈",
		gneqq: "≩",
		gnsim: "⋧",
		Gopf: "𝔾",
		gopf: "𝕘",
		grave: "`",
		GreaterEqual: "≥",
		GreaterEqualLess: "⋛",
		GreaterFullEqual: "≧",
		GreaterGreater: "⪢",
		GreaterLess: "≷",
		GreaterSlantEqual: "⩾",
		GreaterTilde: "≳",
		Gscr: "𝒢",
		gscr: "ℊ",
		gsim: "≳",
		gsime: "⪎",
		gsiml: "⪐",
		Gt: "≫",
		GT: ">",
		gt: ">",
		gtcc: "⪧",
		gtcir: "⩺",
		gtdot: "⋗",
		gtlPar: "⦕",
		gtquest: "⩼",
		gtrapprox: "⪆",
		gtrarr: "⥸",
		gtrdot: "⋗",
		gtreqless: "⋛",
		gtreqqless: "⪌",
		gtrless: "≷",
		gtrsim: "≳",
		gvertneqq: "≩︀",
		gvnE: "≩︀",
		Hacek: "ˇ",
		hairsp: " ",
		half: "½",
		hamilt: "ℋ",
		HARDcy: "Ъ",
		hardcy: "ъ",
		hArr: "⇔",
		harr: "↔",
		harrcir: "⥈",
		harrw: "↭",
		Hat: "^",
		hbar: "ℏ",
		Hcirc: "Ĥ",
		hcirc: "ĥ",
		hearts: "♥",
		heartsuit: "♥",
		hellip: "…",
		hercon: "⊹",
		Hfr: "ℌ",
		hfr: "𝔥",
		HilbertSpace: "ℋ",
		hksearow: "⤥",
		hkswarow: "⤦",
		hoarr: "⇿",
		homtht: "∻",
		hookleftarrow: "↩",
		hookrightarrow: "↪",
		Hopf: "ℍ",
		hopf: "𝕙",
		horbar: "―",
		HorizontalLine: "─",
		Hscr: "ℋ",
		hscr: "𝒽",
		hslash: "ℏ",
		Hstrok: "Ħ",
		hstrok: "ħ",
		HumpDownHump: "≎",
		HumpEqual: "≏",
		hybull: "⁃",
		hyphen: "‐",
		Iacute: "Í",
		iacute: "í",
		ic: "⁣",
		Icirc: "Î",
		icirc: "î",
		Icy: "И",
		icy: "и",
		Idot: "İ",
		IEcy: "Е",
		iecy: "е",
		iexcl: "¡",
		iff: "⇔",
		Ifr: "ℑ",
		ifr: "𝔦",
		Igrave: "Ì",
		igrave: "ì",
		ii: "ⅈ",
		iiiint: "⨌",
		iiint: "∭",
		iinfin: "⧜",
		iiota: "℩",
		IJlig: "Ĳ",
		ijlig: "ĳ",
		Im: "ℑ",
		Imacr: "Ī",
		imacr: "ī",
		image: "ℑ",
		ImaginaryI: "ⅈ",
		imagline: "ℐ",
		imagpart: "ℑ",
		imath: "ı",
		imof: "⊷",
		imped: "Ƶ",
		Implies: "⇒",
		in: "∈",
		incare: "℅",
		infin: "∞",
		infintie: "⧝",
		inodot: "ı",
		Int: "∬",
		int: "∫",
		intcal: "⊺",
		integers: "ℤ",
		Integral: "∫",
		intercal: "⊺",
		Intersection: "⋂",
		intlarhk: "⨗",
		intprod: "⨼",
		InvisibleComma: "⁣",
		InvisibleTimes: "⁢",
		IOcy: "Ё",
		iocy: "ё",
		Iogon: "Į",
		iogon: "į",
		Iopf: "𝕀",
		iopf: "𝕚",
		Iota: "Ι",
		iota: "ι",
		iprod: "⨼",
		iquest: "¿",
		Iscr: "ℐ",
		iscr: "𝒾",
		isin: "∈",
		isindot: "⋵",
		isinE: "⋹",
		isins: "⋴",
		isinsv: "⋳",
		isinv: "∈",
		it: "⁢",
		Itilde: "Ĩ",
		itilde: "ĩ",
		Iukcy: "І",
		iukcy: "і",
		Iuml: "Ï",
		iuml: "ï",
		Jcirc: "Ĵ",
		jcirc: "ĵ",
		Jcy: "Й",
		jcy: "й",
		Jfr: "𝔍",
		jfr: "𝔧",
		jmath: "ȷ",
		Jopf: "𝕁",
		jopf: "𝕛",
		Jscr: "𝒥",
		jscr: "𝒿",
		Jsercy: "Ј",
		jsercy: "ј",
		Jukcy: "Є",
		jukcy: "є",
		Kappa: "Κ",
		kappa: "κ",
		kappav: "ϰ",
		Kcedil: "Ķ",
		kcedil: "ķ",
		Kcy: "К",
		kcy: "к",
		Kfr: "𝔎",
		kfr: "𝔨",
		kgreen: "ĸ",
		KHcy: "Х",
		khcy: "х",
		KJcy: "Ќ",
		kjcy: "ќ",
		Kopf: "𝕂",
		kopf: "𝕜",
		Kscr: "𝒦",
		kscr: "𝓀",
		lAarr: "⇚",
		Lacute: "Ĺ",
		lacute: "ĺ",
		laemptyv: "⦴",
		lagran: "ℒ",
		Lambda: "Λ",
		lambda: "λ",
		Lang: "⟪",
		lang: "⟨",
		langd: "⦑",
		langle: "⟨",
		lap: "⪅",
		Laplacetrf: "ℒ",
		laquo: "«",
		Larr: "↞",
		lArr: "⇐",
		larr: "←",
		larrb: "⇤",
		larrbfs: "⤟",
		larrfs: "⤝",
		larrhk: "↩",
		larrlp: "↫",
		larrpl: "⤹",
		larrsim: "⥳",
		larrtl: "↢",
		lat: "⪫",
		lAtail: "⤛",
		latail: "⤙",
		late: "⪭",
		lates: "⪭︀",
		lBarr: "⤎",
		lbarr: "⤌",
		lbbrk: "❲",
		lbrace: "{",
		lbrack: "[",
		lbrke: "⦋",
		lbrksld: "⦏",
		lbrkslu: "⦍",
		Lcaron: "Ľ",
		lcaron: "ľ",
		Lcedil: "Ļ",
		lcedil: "ļ",
		lceil: "⌈",
		lcub: "{",
		Lcy: "Л",
		lcy: "л",
		ldca: "⤶",
		ldquo: "“",
		ldquor: "„",
		ldrdhar: "⥧",
		ldrushar: "⥋",
		ldsh: "↲",
		lE: "≦",
		le: "≤",
		LeftAngleBracket: "⟨",
		LeftArrow: "←",
		Leftarrow: "⇐",
		leftarrow: "←",
		LeftArrowBar: "⇤",
		LeftArrowRightArrow: "⇆",
		leftarrowtail: "↢",
		LeftCeiling: "⌈",
		LeftDoubleBracket: "⟦",
		LeftDownTeeVector: "⥡",
		LeftDownVector: "⇃",
		LeftDownVectorBar: "⥙",
		LeftFloor: "⌊",
		leftharpoondown: "↽",
		leftharpoonup: "↼",
		leftleftarrows: "⇇",
		LeftRightArrow: "↔",
		Leftrightarrow: "⇔",
		leftrightarrow: "↔",
		leftrightarrows: "⇆",
		leftrightharpoons: "⇋",
		leftrightsquigarrow: "↭",
		LeftRightVector: "⥎",
		LeftTee: "⊣",
		LeftTeeArrow: "↤",
		LeftTeeVector: "⥚",
		leftthreetimes: "⋋",
		LeftTriangle: "⊲",
		LeftTriangleBar: "⧏",
		LeftTriangleEqual: "⊴",
		LeftUpDownVector: "⥑",
		LeftUpTeeVector: "⥠",
		LeftUpVector: "↿",
		LeftUpVectorBar: "⥘",
		LeftVector: "↼",
		LeftVectorBar: "⥒",
		lEg: "⪋",
		leg: "⋚",
		leq: "≤",
		leqq: "≦",
		leqslant: "⩽",
		les: "⩽",
		lescc: "⪨",
		lesdot: "⩿",
		lesdoto: "⪁",
		lesdotor: "⪃",
		lesg: "⋚︀",
		lesges: "⪓",
		lessapprox: "⪅",
		lessdot: "⋖",
		lesseqgtr: "⋚",
		lesseqqgtr: "⪋",
		LessEqualGreater: "⋚",
		LessFullEqual: "≦",
		LessGreater: "≶",
		lessgtr: "≶",
		LessLess: "⪡",
		lesssim: "≲",
		LessSlantEqual: "⩽",
		LessTilde: "≲",
		lfisht: "⥼",
		lfloor: "⌊",
		Lfr: "𝔏",
		lfr: "𝔩",
		lg: "≶",
		lgE: "⪑",
		lHar: "⥢",
		lhard: "↽",
		lharu: "↼",
		lharul: "⥪",
		lhblk: "▄",
		LJcy: "Љ",
		ljcy: "љ",
		Ll: "⋘",
		ll: "≪",
		llarr: "⇇",
		llcorner: "⌞",
		Lleftarrow: "⇚",
		llhard: "⥫",
		lltri: "◺",
		Lmidot: "Ŀ",
		lmidot: "ŀ",
		lmoust: "⎰",
		lmoustache: "⎰",
		lnap: "⪉",
		lnapprox: "⪉",
		lnE: "≨",
		lne: "⪇",
		lneq: "⪇",
		lneqq: "≨",
		lnsim: "⋦",
		loang: "⟬",
		loarr: "⇽",
		lobrk: "⟦",
		LongLeftArrow: "⟵",
		Longleftarrow: "⟸",
		longleftarrow: "⟵",
		LongLeftRightArrow: "⟷",
		Longleftrightarrow: "⟺",
		longleftrightarrow: "⟷",
		longmapsto: "⟼",
		LongRightArrow: "⟶",
		Longrightarrow: "⟹",
		longrightarrow: "⟶",
		looparrowleft: "↫",
		looparrowright: "↬",
		lopar: "⦅",
		Lopf: "𝕃",
		lopf: "𝕝",
		loplus: "⨭",
		lotimes: "⨴",
		lowast: "∗",
		lowbar: "_",
		LowerLeftArrow: "↙",
		LowerRightArrow: "↘",
		loz: "◊",
		lozenge: "◊",
		lozf: "⧫",
		lpar: "(",
		lparlt: "⦓",
		lrarr: "⇆",
		lrcorner: "⌟",
		lrhar: "⇋",
		lrhard: "⥭",
		lrm: "‎",
		lrtri: "⊿",
		lsaquo: "‹",
		Lscr: "ℒ",
		lscr: "𝓁",
		Lsh: "↰",
		lsh: "↰",
		lsim: "≲",
		lsime: "⪍",
		lsimg: "⪏",
		lsqb: "[",
		lsquo: "‘",
		lsquor: "‚",
		Lstrok: "Ł",
		lstrok: "ł",
		Lt: "≪",
		LT: "<",
		lt: "<",
		ltcc: "⪦",
		ltcir: "⩹",
		ltdot: "⋖",
		lthree: "⋋",
		ltimes: "⋉",
		ltlarr: "⥶",
		ltquest: "⩻",
		ltri: "◃",
		ltrie: "⊴",
		ltrif: "◂",
		ltrPar: "⦖",
		lurdshar: "⥊",
		luruhar: "⥦",
		lvertneqq: "≨︀",
		lvnE: "≨︀",
		macr: "¯",
		male: "♂",
		malt: "✠",
		maltese: "✠",
		Map: "⤅",
		map: "↦",
		mapsto: "↦",
		mapstodown: "↧",
		mapstoleft: "↤",
		mapstoup: "↥",
		marker: "▮",
		mcomma: "⨩",
		Mcy: "М",
		mcy: "м",
		mdash: "—",
		mDDot: "∺",
		measuredangle: "∡",
		MediumSpace: " ",
		Mellintrf: "ℳ",
		Mfr: "𝔐",
		mfr: "𝔪",
		mho: "℧",
		micro: "µ",
		mid: "∣",
		midast: "*",
		midcir: "⫰",
		middot: "·",
		minus: "−",
		minusb: "⊟",
		minusd: "∸",
		minusdu: "⨪",
		MinusPlus: "∓",
		mlcp: "⫛",
		mldr: "…",
		mnplus: "∓",
		models: "⊧",
		Mopf: "𝕄",
		mopf: "𝕞",
		mp: "∓",
		Mscr: "ℳ",
		mscr: "𝓂",
		mstpos: "∾",
		Mu: "Μ",
		mu: "μ",
		multimap: "⊸",
		mumap: "⊸",
		nabla: "∇",
		Nacute: "Ń",
		nacute: "ń",
		nang: "∠⃒",
		nap: "≉",
		napE: "⩰̸",
		napid: "≋̸",
		napos: "ŉ",
		napprox: "≉",
		natur: "♮",
		natural: "♮",
		naturals: "ℕ",
		nbsp: "\xA0",
		nbump: "≎̸",
		nbumpe: "≏̸",
		ncap: "⩃",
		Ncaron: "Ň",
		ncaron: "ň",
		Ncedil: "Ņ",
		ncedil: "ņ",
		ncong: "≇",
		ncongdot: "⩭̸",
		ncup: "⩂",
		Ncy: "Н",
		ncy: "н",
		ndash: "–",
		ne: "≠",
		nearhk: "⤤",
		neArr: "⇗",
		nearr: "↗",
		nearrow: "↗",
		nedot: "≐̸",
		NegativeMediumSpace: "​",
		NegativeThickSpace: "​",
		NegativeThinSpace: "​",
		NegativeVeryThinSpace: "​",
		nequiv: "≢",
		nesear: "⤨",
		nesim: "≂̸",
		NestedGreaterGreater: "≫",
		NestedLessLess: "≪",
		NewLine: "\n",
		nexist: "∄",
		nexists: "∄",
		Nfr: "𝔑",
		nfr: "𝔫",
		ngE: "≧̸",
		nge: "≱",
		ngeq: "≱",
		ngeqq: "≧̸",
		ngeqslant: "⩾̸",
		nges: "⩾̸",
		nGg: "⋙̸",
		ngsim: "≵",
		nGt: "≫⃒",
		ngt: "≯",
		ngtr: "≯",
		nGtv: "≫̸",
		nhArr: "⇎",
		nharr: "↮",
		nhpar: "⫲",
		ni: "∋",
		nis: "⋼",
		nisd: "⋺",
		niv: "∋",
		NJcy: "Њ",
		njcy: "њ",
		nlArr: "⇍",
		nlarr: "↚",
		nldr: "‥",
		nlE: "≦̸",
		nle: "≰",
		nLeftarrow: "⇍",
		nleftarrow: "↚",
		nLeftrightarrow: "⇎",
		nleftrightarrow: "↮",
		nleq: "≰",
		nleqq: "≦̸",
		nleqslant: "⩽̸",
		nles: "⩽̸",
		nless: "≮",
		nLl: "⋘̸",
		nlsim: "≴",
		nLt: "≪⃒",
		nlt: "≮",
		nltri: "⋪",
		nltrie: "⋬",
		nLtv: "≪̸",
		nmid: "∤",
		NoBreak: "⁠",
		NonBreakingSpace: "\xA0",
		Nopf: "ℕ",
		nopf: "𝕟",
		Not: "⫬",
		not: "¬",
		NotCongruent: "≢",
		NotCupCap: "≭",
		NotDoubleVerticalBar: "∦",
		NotElement: "∉",
		NotEqual: "≠",
		NotEqualTilde: "≂̸",
		NotExists: "∄",
		NotGreater: "≯",
		NotGreaterEqual: "≱",
		NotGreaterFullEqual: "≧̸",
		NotGreaterGreater: "≫̸",
		NotGreaterLess: "≹",
		NotGreaterSlantEqual: "⩾̸",
		NotGreaterTilde: "≵",
		NotHumpDownHump: "≎̸",
		NotHumpEqual: "≏̸",
		notin: "∉",
		notindot: "⋵̸",
		notinE: "⋹̸",
		notinva: "∉",
		notinvb: "⋷",
		notinvc: "⋶",
		NotLeftTriangle: "⋪",
		NotLeftTriangleBar: "⧏̸",
		NotLeftTriangleEqual: "⋬",
		NotLess: "≮",
		NotLessEqual: "≰",
		NotLessGreater: "≸",
		NotLessLess: "≪̸",
		NotLessSlantEqual: "⩽̸",
		NotLessTilde: "≴",
		NotNestedGreaterGreater: "⪢̸",
		NotNestedLessLess: "⪡̸",
		notni: "∌",
		notniva: "∌",
		notnivb: "⋾",
		notnivc: "⋽",
		NotPrecedes: "⊀",
		NotPrecedesEqual: "⪯̸",
		NotPrecedesSlantEqual: "⋠",
		NotReverseElement: "∌",
		NotRightTriangle: "⋫",
		NotRightTriangleBar: "⧐̸",
		NotRightTriangleEqual: "⋭",
		NotSquareSubset: "⊏̸",
		NotSquareSubsetEqual: "⋢",
		NotSquareSuperset: "⊐̸",
		NotSquareSupersetEqual: "⋣",
		NotSubset: "⊂⃒",
		NotSubsetEqual: "⊈",
		NotSucceeds: "⊁",
		NotSucceedsEqual: "⪰̸",
		NotSucceedsSlantEqual: "⋡",
		NotSucceedsTilde: "≿̸",
		NotSuperset: "⊃⃒",
		NotSupersetEqual: "⊉",
		NotTilde: "≁",
		NotTildeEqual: "≄",
		NotTildeFullEqual: "≇",
		NotTildeTilde: "≉",
		NotVerticalBar: "∤",
		npar: "∦",
		nparallel: "∦",
		nparsl: "⫽⃥",
		npart: "∂̸",
		npolint: "⨔",
		npr: "⊀",
		nprcue: "⋠",
		npre: "⪯̸",
		nprec: "⊀",
		npreceq: "⪯̸",
		nrArr: "⇏",
		nrarr: "↛",
		nrarrc: "⤳̸",
		nrarrw: "↝̸",
		nRightarrow: "⇏",
		nrightarrow: "↛",
		nrtri: "⋫",
		nrtrie: "⋭",
		nsc: "⊁",
		nsccue: "⋡",
		nsce: "⪰̸",
		Nscr: "𝒩",
		nscr: "𝓃",
		nshortmid: "∤",
		nshortparallel: "∦",
		nsim: "≁",
		nsime: "≄",
		nsimeq: "≄",
		nsmid: "∤",
		nspar: "∦",
		nsqsube: "⋢",
		nsqsupe: "⋣",
		nsub: "⊄",
		nsubE: "⫅̸",
		nsube: "⊈",
		nsubset: "⊂⃒",
		nsubseteq: "⊈",
		nsubseteqq: "⫅̸",
		nsucc: "⊁",
		nsucceq: "⪰̸",
		nsup: "⊅",
		nsupE: "⫆̸",
		nsupe: "⊉",
		nsupset: "⊃⃒",
		nsupseteq: "⊉",
		nsupseteqq: "⫆̸",
		ntgl: "≹",
		Ntilde: "Ñ",
		ntilde: "ñ",
		ntlg: "≸",
		ntriangleleft: "⋪",
		ntrianglelefteq: "⋬",
		ntriangleright: "⋫",
		ntrianglerighteq: "⋭",
		Nu: "Ν",
		nu: "ν",
		num: "#",
		numero: "№",
		numsp: " ",
		nvap: "≍⃒",
		nVDash: "⊯",
		nVdash: "⊮",
		nvDash: "⊭",
		nvdash: "⊬",
		nvge: "≥⃒",
		nvgt: ">⃒",
		nvHarr: "⤄",
		nvinfin: "⧞",
		nvlArr: "⤂",
		nvle: "≤⃒",
		nvlt: "<⃒",
		nvltrie: "⊴⃒",
		nvrArr: "⤃",
		nvrtrie: "⊵⃒",
		nvsim: "∼⃒",
		nwarhk: "⤣",
		nwArr: "⇖",
		nwarr: "↖",
		nwarrow: "↖",
		nwnear: "⤧",
		Oacute: "Ó",
		oacute: "ó",
		oast: "⊛",
		ocir: "⊚",
		Ocirc: "Ô",
		ocirc: "ô",
		Ocy: "О",
		ocy: "о",
		odash: "⊝",
		Odblac: "Ő",
		odblac: "ő",
		odiv: "⨸",
		odot: "⊙",
		odsold: "⦼",
		OElig: "Œ",
		oelig: "œ",
		ofcir: "⦿",
		Ofr: "𝔒",
		ofr: "𝔬",
		ogon: "˛",
		Ograve: "Ò",
		ograve: "ò",
		ogt: "⧁",
		ohbar: "⦵",
		ohm: "Ω",
		oint: "∮",
		olarr: "↺",
		olcir: "⦾",
		olcross: "⦻",
		oline: "‾",
		olt: "⧀",
		Omacr: "Ō",
		omacr: "ō",
		Omega: "Ω",
		omega: "ω",
		Omicron: "Ο",
		omicron: "ο",
		omid: "⦶",
		ominus: "⊖",
		Oopf: "𝕆",
		oopf: "𝕠",
		opar: "⦷",
		OpenCurlyDoubleQuote: "“",
		OpenCurlyQuote: "‘",
		operp: "⦹",
		oplus: "⊕",
		Or: "⩔",
		or: "∨",
		orarr: "↻",
		ord: "⩝",
		order: "ℴ",
		orderof: "ℴ",
		ordf: "ª",
		ordm: "º",
		origof: "⊶",
		oror: "⩖",
		orslope: "⩗",
		orv: "⩛",
		oS: "Ⓢ",
		Oscr: "𝒪",
		oscr: "ℴ",
		Oslash: "Ø",
		oslash: "ø",
		osol: "⊘",
		Otilde: "Õ",
		otilde: "õ",
		Otimes: "⨷",
		otimes: "⊗",
		otimesas: "⨶",
		Ouml: "Ö",
		ouml: "ö",
		ovbar: "⌽",
		OverBar: "‾",
		OverBrace: "⏞",
		OverBracket: "⎴",
		OverParenthesis: "⏜",
		par: "∥",
		para: "¶",
		parallel: "∥",
		parsim: "⫳",
		parsl: "⫽",
		part: "∂",
		PartialD: "∂",
		Pcy: "П",
		pcy: "п",
		percnt: "%",
		period: ".",
		permil: "‰",
		perp: "⊥",
		pertenk: "‱",
		Pfr: "𝔓",
		pfr: "𝔭",
		Phi: "Φ",
		phi: "φ",
		phiv: "ϕ",
		phmmat: "ℳ",
		phone: "☎",
		Pi: "Π",
		pi: "π",
		pitchfork: "⋔",
		piv: "ϖ",
		planck: "ℏ",
		planckh: "ℎ",
		plankv: "ℏ",
		plus: "+",
		plusacir: "⨣",
		plusb: "⊞",
		pluscir: "⨢",
		plusdo: "∔",
		plusdu: "⨥",
		pluse: "⩲",
		PlusMinus: "±",
		plusmn: "±",
		plussim: "⨦",
		plustwo: "⨧",
		pm: "±",
		Poincareplane: "ℌ",
		pointint: "⨕",
		Popf: "ℙ",
		popf: "𝕡",
		pound: "£",
		Pr: "⪻",
		pr: "≺",
		prap: "⪷",
		prcue: "≼",
		prE: "⪳",
		pre: "⪯",
		prec: "≺",
		precapprox: "⪷",
		preccurlyeq: "≼",
		Precedes: "≺",
		PrecedesEqual: "⪯",
		PrecedesSlantEqual: "≼",
		PrecedesTilde: "≾",
		preceq: "⪯",
		precnapprox: "⪹",
		precneqq: "⪵",
		precnsim: "⋨",
		precsim: "≾",
		Prime: "″",
		prime: "′",
		primes: "ℙ",
		prnap: "⪹",
		prnE: "⪵",
		prnsim: "⋨",
		prod: "∏",
		Product: "∏",
		profalar: "⌮",
		profline: "⌒",
		profsurf: "⌓",
		prop: "∝",
		Proportion: "∷",
		Proportional: "∝",
		propto: "∝",
		prsim: "≾",
		prurel: "⊰",
		Pscr: "𝒫",
		pscr: "𝓅",
		Psi: "Ψ",
		psi: "ψ",
		puncsp: " ",
		Qfr: "𝔔",
		qfr: "𝔮",
		qint: "⨌",
		Qopf: "ℚ",
		qopf: "𝕢",
		qprime: "⁗",
		Qscr: "𝒬",
		qscr: "𝓆",
		quaternions: "ℍ",
		quatint: "⨖",
		quest: "?",
		questeq: "≟",
		QUOT: "\"",
		quot: "\"",
		rAarr: "⇛",
		race: "∽̱",
		Racute: "Ŕ",
		racute: "ŕ",
		radic: "√",
		raemptyv: "⦳",
		Rang: "⟫",
		rang: "⟩",
		rangd: "⦒",
		range: "⦥",
		rangle: "⟩",
		raquo: "»",
		Rarr: "↠",
		rArr: "⇒",
		rarr: "→",
		rarrap: "⥵",
		rarrb: "⇥",
		rarrbfs: "⤠",
		rarrc: "⤳",
		rarrfs: "⤞",
		rarrhk: "↪",
		rarrlp: "↬",
		rarrpl: "⥅",
		rarrsim: "⥴",
		Rarrtl: "⤖",
		rarrtl: "↣",
		rarrw: "↝",
		rAtail: "⤜",
		ratail: "⤚",
		ratio: "∶",
		rationals: "ℚ",
		RBarr: "⤐",
		rBarr: "⤏",
		rbarr: "⤍",
		rbbrk: "❳",
		rbrace: "}",
		rbrack: "]",
		rbrke: "⦌",
		rbrksld: "⦎",
		rbrkslu: "⦐",
		Rcaron: "Ř",
		rcaron: "ř",
		Rcedil: "Ŗ",
		rcedil: "ŗ",
		rceil: "⌉",
		rcub: "}",
		Rcy: "Р",
		rcy: "р",
		rdca: "⤷",
		rdldhar: "⥩",
		rdquo: "”",
		rdquor: "”",
		rdsh: "↳",
		Re: "ℜ",
		real: "ℜ",
		realine: "ℛ",
		realpart: "ℜ",
		reals: "ℝ",
		rect: "▭",
		REG: "®",
		reg: "®",
		ReverseElement: "∋",
		ReverseEquilibrium: "⇋",
		ReverseUpEquilibrium: "⥯",
		rfisht: "⥽",
		rfloor: "⌋",
		Rfr: "ℜ",
		rfr: "𝔯",
		rHar: "⥤",
		rhard: "⇁",
		rharu: "⇀",
		rharul: "⥬",
		Rho: "Ρ",
		rho: "ρ",
		rhov: "ϱ",
		RightAngleBracket: "⟩",
		RightArrow: "→",
		Rightarrow: "⇒",
		rightarrow: "→",
		RightArrowBar: "⇥",
		RightArrowLeftArrow: "⇄",
		rightarrowtail: "↣",
		RightCeiling: "⌉",
		RightDoubleBracket: "⟧",
		RightDownTeeVector: "⥝",
		RightDownVector: "⇂",
		RightDownVectorBar: "⥕",
		RightFloor: "⌋",
		rightharpoondown: "⇁",
		rightharpoonup: "⇀",
		rightleftarrows: "⇄",
		rightleftharpoons: "⇌",
		rightrightarrows: "⇉",
		rightsquigarrow: "↝",
		RightTee: "⊢",
		RightTeeArrow: "↦",
		RightTeeVector: "⥛",
		rightthreetimes: "⋌",
		RightTriangle: "⊳",
		RightTriangleBar: "⧐",
		RightTriangleEqual: "⊵",
		RightUpDownVector: "⥏",
		RightUpTeeVector: "⥜",
		RightUpVector: "↾",
		RightUpVectorBar: "⥔",
		RightVector: "⇀",
		RightVectorBar: "⥓",
		ring: "˚",
		risingdotseq: "≓",
		rlarr: "⇄",
		rlhar: "⇌",
		rlm: "‏",
		rmoust: "⎱",
		rmoustache: "⎱",
		rnmid: "⫮",
		roang: "⟭",
		roarr: "⇾",
		robrk: "⟧",
		ropar: "⦆",
		Ropf: "ℝ",
		ropf: "𝕣",
		roplus: "⨮",
		rotimes: "⨵",
		RoundImplies: "⥰",
		rpar: ")",
		rpargt: "⦔",
		rppolint: "⨒",
		rrarr: "⇉",
		Rrightarrow: "⇛",
		rsaquo: "›",
		Rscr: "ℛ",
		rscr: "𝓇",
		Rsh: "↱",
		rsh: "↱",
		rsqb: "]",
		rsquo: "’",
		rsquor: "’",
		rthree: "⋌",
		rtimes: "⋊",
		rtri: "▹",
		rtrie: "⊵",
		rtrif: "▸",
		rtriltri: "⧎",
		RuleDelayed: "⧴",
		ruluhar: "⥨",
		rx: "℞",
		Sacute: "Ś",
		sacute: "ś",
		sbquo: "‚",
		Sc: "⪼",
		sc: "≻",
		scap: "⪸",
		Scaron: "Š",
		scaron: "š",
		sccue: "≽",
		scE: "⪴",
		sce: "⪰",
		Scedil: "Ş",
		scedil: "ş",
		Scirc: "Ŝ",
		scirc: "ŝ",
		scnap: "⪺",
		scnE: "⪶",
		scnsim: "⋩",
		scpolint: "⨓",
		scsim: "≿",
		Scy: "С",
		scy: "с",
		sdot: "⋅",
		sdotb: "⊡",
		sdote: "⩦",
		searhk: "⤥",
		seArr: "⇘",
		searr: "↘",
		searrow: "↘",
		sect: "§",
		semi: ";",
		seswar: "⤩",
		setminus: "∖",
		setmn: "∖",
		sext: "✶",
		Sfr: "𝔖",
		sfr: "𝔰",
		sfrown: "⌢",
		sharp: "♯",
		SHCHcy: "Щ",
		shchcy: "щ",
		SHcy: "Ш",
		shcy: "ш",
		ShortDownArrow: "↓",
		ShortLeftArrow: "←",
		shortmid: "∣",
		shortparallel: "∥",
		ShortRightArrow: "→",
		ShortUpArrow: "↑",
		shy: "­",
		Sigma: "Σ",
		sigma: "σ",
		sigmaf: "ς",
		sigmav: "ς",
		sim: "∼",
		simdot: "⩪",
		sime: "≃",
		simeq: "≃",
		simg: "⪞",
		simgE: "⪠",
		siml: "⪝",
		simlE: "⪟",
		simne: "≆",
		simplus: "⨤",
		simrarr: "⥲",
		slarr: "←",
		SmallCircle: "∘",
		smallsetminus: "∖",
		smashp: "⨳",
		smeparsl: "⧤",
		smid: "∣",
		smile: "⌣",
		smt: "⪪",
		smte: "⪬",
		smtes: "⪬︀",
		SOFTcy: "Ь",
		softcy: "ь",
		sol: "/",
		solb: "⧄",
		solbar: "⌿",
		Sopf: "𝕊",
		sopf: "𝕤",
		spades: "♠",
		spadesuit: "♠",
		spar: "∥",
		sqcap: "⊓",
		sqcaps: "⊓︀",
		sqcup: "⊔",
		sqcups: "⊔︀",
		Sqrt: "√",
		sqsub: "⊏",
		sqsube: "⊑",
		sqsubset: "⊏",
		sqsubseteq: "⊑",
		sqsup: "⊐",
		sqsupe: "⊒",
		sqsupset: "⊐",
		sqsupseteq: "⊒",
		squ: "□",
		Square: "□",
		square: "□",
		SquareIntersection: "⊓",
		SquareSubset: "⊏",
		SquareSubsetEqual: "⊑",
		SquareSuperset: "⊐",
		SquareSupersetEqual: "⊒",
		SquareUnion: "⊔",
		squarf: "▪",
		squf: "▪",
		srarr: "→",
		Sscr: "𝒮",
		sscr: "𝓈",
		ssetmn: "∖",
		ssmile: "⌣",
		sstarf: "⋆",
		Star: "⋆",
		star: "☆",
		starf: "★",
		straightepsilon: "ϵ",
		straightphi: "ϕ",
		strns: "¯",
		Sub: "⋐",
		sub: "⊂",
		subdot: "⪽",
		subE: "⫅",
		sube: "⊆",
		subedot: "⫃",
		submult: "⫁",
		subnE: "⫋",
		subne: "⊊",
		subplus: "⪿",
		subrarr: "⥹",
		Subset: "⋐",
		subset: "⊂",
		subseteq: "⊆",
		subseteqq: "⫅",
		SubsetEqual: "⊆",
		subsetneq: "⊊",
		subsetneqq: "⫋",
		subsim: "⫇",
		subsub: "⫕",
		subsup: "⫓",
		succ: "≻",
		succapprox: "⪸",
		succcurlyeq: "≽",
		Succeeds: "≻",
		SucceedsEqual: "⪰",
		SucceedsSlantEqual: "≽",
		SucceedsTilde: "≿",
		succeq: "⪰",
		succnapprox: "⪺",
		succneqq: "⪶",
		succnsim: "⋩",
		succsim: "≿",
		SuchThat: "∋",
		Sum: "∑",
		sum: "∑",
		sung: "♪",
		Sup: "⋑",
		sup: "⊃",
		sup1: "¹",
		sup2: "²",
		sup3: "³",
		supdot: "⪾",
		supdsub: "⫘",
		supE: "⫆",
		supe: "⊇",
		supedot: "⫄",
		Superset: "⊃",
		SupersetEqual: "⊇",
		suphsol: "⟉",
		suphsub: "⫗",
		suplarr: "⥻",
		supmult: "⫂",
		supnE: "⫌",
		supne: "⊋",
		supplus: "⫀",
		Supset: "⋑",
		supset: "⊃",
		supseteq: "⊇",
		supseteqq: "⫆",
		supsetneq: "⊋",
		supsetneqq: "⫌",
		supsim: "⫈",
		supsub: "⫔",
		supsup: "⫖",
		swarhk: "⤦",
		swArr: "⇙",
		swarr: "↙",
		swarrow: "↙",
		swnwar: "⤪",
		szlig: "ß",
		Tab: "	",
		target: "⌖",
		Tau: "Τ",
		tau: "τ",
		tbrk: "⎴",
		Tcaron: "Ť",
		tcaron: "ť",
		Tcedil: "Ţ",
		tcedil: "ţ",
		Tcy: "Т",
		tcy: "т",
		tdot: "⃛",
		telrec: "⌕",
		Tfr: "𝔗",
		tfr: "𝔱",
		there4: "∴",
		Therefore: "∴",
		therefore: "∴",
		Theta: "Θ",
		theta: "θ",
		thetasym: "ϑ",
		thetav: "ϑ",
		thickapprox: "≈",
		thicksim: "∼",
		ThickSpace: "  ",
		thinsp: " ",
		ThinSpace: " ",
		thkap: "≈",
		thksim: "∼",
		THORN: "Þ",
		thorn: "þ",
		Tilde: "∼",
		tilde: "˜",
		TildeEqual: "≃",
		TildeFullEqual: "≅",
		TildeTilde: "≈",
		times: "×",
		timesb: "⊠",
		timesbar: "⨱",
		timesd: "⨰",
		tint: "∭",
		toea: "⤨",
		top: "⊤",
		topbot: "⌶",
		topcir: "⫱",
		Topf: "𝕋",
		topf: "𝕥",
		topfork: "⫚",
		tosa: "⤩",
		tprime: "‴",
		TRADE: "™",
		trade: "™",
		triangle: "▵",
		triangledown: "▿",
		triangleleft: "◃",
		trianglelefteq: "⊴",
		triangleq: "≜",
		triangleright: "▹",
		trianglerighteq: "⊵",
		tridot: "◬",
		trie: "≜",
		triminus: "⨺",
		TripleDot: "⃛",
		triplus: "⨹",
		trisb: "⧍",
		tritime: "⨻",
		trpezium: "⏢",
		Tscr: "𝒯",
		tscr: "𝓉",
		TScy: "Ц",
		tscy: "ц",
		TSHcy: "Ћ",
		tshcy: "ћ",
		Tstrok: "Ŧ",
		tstrok: "ŧ",
		twixt: "≬",
		twoheadleftarrow: "↞",
		twoheadrightarrow: "↠",
		Uacute: "Ú",
		uacute: "ú",
		Uarr: "↟",
		uArr: "⇑",
		uarr: "↑",
		Uarrocir: "⥉",
		Ubrcy: "Ў",
		ubrcy: "ў",
		Ubreve: "Ŭ",
		ubreve: "ŭ",
		Ucirc: "Û",
		ucirc: "û",
		Ucy: "У",
		ucy: "у",
		udarr: "⇅",
		Udblac: "Ű",
		udblac: "ű",
		udhar: "⥮",
		ufisht: "⥾",
		Ufr: "𝔘",
		ufr: "𝔲",
		Ugrave: "Ù",
		ugrave: "ù",
		uHar: "⥣",
		uharl: "↿",
		uharr: "↾",
		uhblk: "▀",
		ulcorn: "⌜",
		ulcorner: "⌜",
		ulcrop: "⌏",
		ultri: "◸",
		Umacr: "Ū",
		umacr: "ū",
		uml: "¨",
		UnderBar: "_",
		UnderBrace: "⏟",
		UnderBracket: "⎵",
		UnderParenthesis: "⏝",
		Union: "⋃",
		UnionPlus: "⊎",
		Uogon: "Ų",
		uogon: "ų",
		Uopf: "𝕌",
		uopf: "𝕦",
		UpArrow: "↑",
		Uparrow: "⇑",
		uparrow: "↑",
		UpArrowBar: "⤒",
		UpArrowDownArrow: "⇅",
		UpDownArrow: "↕",
		Updownarrow: "⇕",
		updownarrow: "↕",
		UpEquilibrium: "⥮",
		upharpoonleft: "↿",
		upharpoonright: "↾",
		uplus: "⊎",
		UpperLeftArrow: "↖",
		UpperRightArrow: "↗",
		Upsi: "ϒ",
		upsi: "υ",
		upsih: "ϒ",
		Upsilon: "Υ",
		upsilon: "υ",
		UpTee: "⊥",
		UpTeeArrow: "↥",
		upuparrows: "⇈",
		urcorn: "⌝",
		urcorner: "⌝",
		urcrop: "⌎",
		Uring: "Ů",
		uring: "ů",
		urtri: "◹",
		Uscr: "𝒰",
		uscr: "𝓊",
		utdot: "⋰",
		Utilde: "Ũ",
		utilde: "ũ",
		utri: "▵",
		utrif: "▴",
		uuarr: "⇈",
		Uuml: "Ü",
		uuml: "ü",
		uwangle: "⦧",
		vangrt: "⦜",
		varepsilon: "ϵ",
		varkappa: "ϰ",
		varnothing: "∅",
		varphi: "ϕ",
		varpi: "ϖ",
		varpropto: "∝",
		vArr: "⇕",
		varr: "↕",
		varrho: "ϱ",
		varsigma: "ς",
		varsubsetneq: "⊊︀",
		varsubsetneqq: "⫋︀",
		varsupsetneq: "⊋︀",
		varsupsetneqq: "⫌︀",
		vartheta: "ϑ",
		vartriangleleft: "⊲",
		vartriangleright: "⊳",
		Vbar: "⫫",
		vBar: "⫨",
		vBarv: "⫩",
		Vcy: "В",
		vcy: "в",
		VDash: "⊫",
		Vdash: "⊩",
		vDash: "⊨",
		vdash: "⊢",
		Vdashl: "⫦",
		Vee: "⋁",
		vee: "∨",
		veebar: "⊻",
		veeeq: "≚",
		vellip: "⋮",
		Verbar: "‖",
		verbar: "|",
		Vert: "‖",
		vert: "|",
		VerticalBar: "∣",
		VerticalLine: "|",
		VerticalSeparator: "❘",
		VerticalTilde: "≀",
		VeryThinSpace: " ",
		Vfr: "𝔙",
		vfr: "𝔳",
		vltri: "⊲",
		vnsub: "⊂⃒",
		vnsup: "⊃⃒",
		Vopf: "𝕍",
		vopf: "𝕧",
		vprop: "∝",
		vrtri: "⊳",
		Vscr: "𝒱",
		vscr: "𝓋",
		vsubnE: "⫋︀",
		vsubne: "⊊︀",
		vsupnE: "⫌︀",
		vsupne: "⊋︀",
		Vvdash: "⊪",
		vzigzag: "⦚",
		Wcirc: "Ŵ",
		wcirc: "ŵ",
		wedbar: "⩟",
		Wedge: "⋀",
		wedge: "∧",
		wedgeq: "≙",
		weierp: "℘",
		Wfr: "𝔚",
		wfr: "𝔴",
		Wopf: "𝕎",
		wopf: "𝕨",
		wp: "℘",
		wr: "≀",
		wreath: "≀",
		Wscr: "𝒲",
		wscr: "𝓌",
		xcap: "⋂",
		xcirc: "◯",
		xcup: "⋃",
		xdtri: "▽",
		Xfr: "𝔛",
		xfr: "𝔵",
		xhArr: "⟺",
		xharr: "⟷",
		Xi: "Ξ",
		xi: "ξ",
		xlArr: "⟸",
		xlarr: "⟵",
		xmap: "⟼",
		xnis: "⋻",
		xodot: "⨀",
		Xopf: "𝕏",
		xopf: "𝕩",
		xoplus: "⨁",
		xotime: "⨂",
		xrArr: "⟹",
		xrarr: "⟶",
		Xscr: "𝒳",
		xscr: "𝓍",
		xsqcup: "⨆",
		xuplus: "⨄",
		xutri: "△",
		xvee: "⋁",
		xwedge: "⋀",
		Yacute: "Ý",
		yacute: "ý",
		YAcy: "Я",
		yacy: "я",
		Ycirc: "Ŷ",
		ycirc: "ŷ",
		Ycy: "Ы",
		ycy: "ы",
		yen: "¥",
		Yfr: "𝔜",
		yfr: "𝔶",
		YIcy: "Ї",
		yicy: "ї",
		Yopf: "𝕐",
		yopf: "𝕪",
		Yscr: "𝒴",
		yscr: "𝓎",
		YUcy: "Ю",
		yucy: "ю",
		Yuml: "Ÿ",
		yuml: "ÿ",
		Zacute: "Ź",
		zacute: "ź",
		Zcaron: "Ž",
		zcaron: "ž",
		Zcy: "З",
		zcy: "з",
		Zdot: "Ż",
		zdot: "ż",
		zeetrf: "ℨ",
		ZeroWidthSpace: "​",
		Zeta: "Ζ",
		zeta: "ζ",
		Zfr: "ℨ",
		zfr: "𝔷",
		ZHcy: "Ж",
		zhcy: "ж",
		zigrarr: "⇝",
		Zopf: "ℤ",
		zopf: "𝕫",
		Zscr: "𝒵",
		zscr: "𝓏",
		zwj: "‍",
		zwnj: "‌"
	});
	/**
	* @deprecated
	* Use `HTML_ENTITIES` instead.
	* @see {@link HTML_ENTITIES}
	*/
	exports.entityMap = exports.HTML_ENTITIES;
}) });

//#endregion
//#region node_modules/.pnpm/@xmldom+xmldom@0.9.12/node_modules/@xmldom/xmldom/lib/sax.js
var require_sax = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/@xmldom+xmldom@0.9.12/node_modules/@xmldom/xmldom/lib/sax.js": ((exports) => {
	var conventions$2 = require_conventions();
	var g = require_grammar();
	var errors$2 = require_errors();
	var isHTMLEscapableRawTextElement = conventions$2.isHTMLEscapableRawTextElement;
	var isHTMLMimeType$1 = conventions$2.isHTMLMimeType;
	var isHTMLRawTextElement = conventions$2.isHTMLRawTextElement;
	var hasOwn = conventions$2.hasOwn;
	var NAMESPACE$1 = conventions$2.NAMESPACE;
	var ParseError$1 = errors$2.ParseError;
	var DOMException$1 = errors$2.DOMException;
	var S_TAG = 0;
	var S_ATTR = 1;
	var S_ATTR_SPACE = 2;
	var S_EQ = 3;
	var S_ATTR_NOQUOT_VALUE = 4;
	var S_ATTR_END = 5;
	var S_TAG_SPACE = 6;
	var S_TAG_CLOSE = 7;
	function XMLReader$1() {}
	XMLReader$1.prototype = { parse: function(source$1, defaultNSMap, entityMap) {
		var domBuilder = this.domBuilder;
		domBuilder.startDocument();
		_copy(defaultNSMap, defaultNSMap = Object.create(null));
		parse$1(source$1, defaultNSMap, entityMap, domBuilder, this.errorHandler);
		domBuilder.endDocument();
	} };
	/**
	* Detecting everything that might be a reference,
	* including those without ending `;`, since those are allowed in HTML.
	* The entityReplacer takes care of verifying and transforming each occurrence,
	* and reports to the errorHandler on those that are not OK,
	* depending on the context.
	*/
	var ENTITY_REG = /&#?\w+;?/g;
	function parse$1(source$1, defaultNSMapCopy, entityMap, domBuilder, errorHandler) {
		var isHTML = isHTMLMimeType$1(domBuilder.mimeType);
		if (source$1.indexOf(g.UNICODE_REPLACEMENT_CHARACTER) >= 0) errorHandler.warning("Unicode replacement character detected, source encoding issues?");
		function fixedFromCharCode(code) {
			if (code > 65535) {
				code -= 65536;
				var surrogate1 = 55296 + (code >> 10), surrogate2 = 56320 + (code & 1023);
				return String.fromCharCode(surrogate1, surrogate2);
			} else return String.fromCharCode(code);
		}
		function entityReplacer(a$1) {
			var complete = a$1[a$1.length - 1] === ";" ? a$1 : a$1 + ";";
			if (!isHTML && complete !== a$1) {
				errorHandler.error("EntityRef: expecting ;");
				return a$1;
			}
			var match = g.Reference.exec(complete);
			if (!match || match[0].length !== complete.length) {
				errorHandler.error("entity not matching Reference production: " + a$1);
				return a$1;
			}
			var k = complete.slice(1, -1);
			if (hasOwn(entityMap, k)) return entityMap[k];
			else if (k.charAt(0) === "#") return fixedFromCharCode(parseInt(k.substring(1).replace("x", "0x")));
			else {
				errorHandler.error("entity not found:" + a$1);
				return a$1;
			}
		}
		function appendText(end$2) {
			if (end$2 > start) {
				var xt = source$1.substring(start, end$2).replace(ENTITY_REG, entityReplacer);
				locator && position$1(start);
				domBuilder.characters(xt, 0, end$2 - start);
				start = end$2;
			}
		}
		var lineStart = 0;
		var lineEnd = 0;
		var linePattern = /\r\n?|\n|$/g;
		var locator = domBuilder.locator;
		function position$1(p, m) {
			while (p >= lineEnd && (m = linePattern.exec(source$1))) {
				lineStart = lineEnd;
				lineEnd = m.index + m[0].length;
				locator.lineNumber++;
			}
			locator.columnNumber = p - lineStart + 1;
		}
		var parseStack = [{ currentNSMap: defaultNSMapCopy }];
		var unclosedTags = [];
		var start = 0;
		while (true) {
			try {
				var tagStart = source$1.indexOf("<", start);
				if (tagStart < 0) {
					if (!isHTML && unclosedTags.length > 0) return errorHandler.fatalError("unclosed xml tag(s): " + unclosedTags.join(", "));
					if (!source$1.substring(start).match(/^\s*$/)) {
						var doc = domBuilder.doc;
						var text$2 = doc.createTextNode(source$1.substring(start));
						if (doc.documentElement) return errorHandler.error("Extra content at the end of the document");
						doc.appendChild(text$2);
						domBuilder.currentElement = text$2;
					}
					return;
				}
				if (tagStart > start) {
					var fromSource = source$1.substring(start, tagStart);
					if (!isHTML && unclosedTags.length === 0) {
						fromSource = fromSource.replace(new RegExp(g.S_OPT.source, "g"), "");
						fromSource && errorHandler.error("Unexpected content outside root element: '" + fromSource + "'");
					}
					appendText(tagStart);
				}
				switch (source$1.charAt(tagStart + 1)) {
					case "/":
						var end$1 = source$1.indexOf(">", tagStart + 2);
						var tagNameRaw = source$1.substring(tagStart + 2, end$1 > 0 ? end$1 : void 0);
						if (!tagNameRaw) return errorHandler.fatalError("end tag name missing");
						var endTagNameStrict = g.reg("^", g.QName_group, g.S_OPT, "$");
						var tagNameMatch = end$1 > 0 && endTagNameStrict.exec(tagNameRaw);
						if (!tagNameMatch) {
							var leadingTagNameMatch = end$1 > 0 && g.reg("^", g.QName_group).exec(tagNameRaw);
							if (isHTML && leadingTagNameMatch) {
								errorHandler.warning("end tag name contains invalid trailing characters: \"" + tagNameRaw + "\"");
								tagNameMatch = leadingTagNameMatch;
							} else if (leadingTagNameMatch && new RegExp(endTagNameStrict.source, endTagNameStrict.flags + "m").test(tagNameRaw)) {
								errorHandler.error("end tag name is followed by a line break and trailing content: \"" + tagNameRaw + "\"");
								tagNameMatch = leadingTagNameMatch;
							} else return errorHandler.fatalError("end tag name contains invalid characters: \"" + tagNameRaw + "\"");
						}
						if (!domBuilder.currentElement && !domBuilder.doc.documentElement) return;
						var currentTagName = unclosedTags[unclosedTags.length - 1] || domBuilder.currentElement.tagName || domBuilder.doc.documentElement.tagName || "";
						if (currentTagName !== tagNameMatch[1]) {
							var tagNameLower = tagNameMatch[1].toLowerCase();
							if (!isHTML || currentTagName.toLowerCase() !== tagNameLower) return errorHandler.fatalError("Opening and ending tag mismatch: \"" + currentTagName + "\" != \"" + tagNameRaw + "\"");
						}
						var config$1 = parseStack.pop();
						unclosedTags.pop();
						var localNSMap = config$1.localNSMap;
						domBuilder.endElement(config$1.uri, config$1.localName, currentTagName);
						if (localNSMap) {
							for (var prefix in localNSMap) if (hasOwn(localNSMap, prefix)) domBuilder.endPrefixMapping(prefix);
						}
						end$1++;
						break;
					case "?":
						locator && position$1(tagStart);
						end$1 = parseProcessingInstruction(source$1, tagStart, domBuilder, errorHandler);
						break;
					case "!":
						locator && position$1(tagStart);
						end$1 = parseDoctypeCommentOrCData(source$1, tagStart, domBuilder, errorHandler, isHTML);
						break;
					default:
						locator && position$1(tagStart);
						var el = new ElementAttributes();
						var currentNSMap = parseStack[parseStack.length - 1].currentNSMap;
						var end$1 = parseElementStartPart(source$1, tagStart, el, currentNSMap, entityReplacer, errorHandler, isHTML);
						var len = el.length;
						if (!el.closed) if (isHTML && conventions$2.isHTMLVoidElement(el.tagName)) el.closed = true;
						else unclosedTags.push(el.tagName);
						if (locator && len) {
							var locator2 = copyLocator(locator, {});
							for (var i$1 = 0; i$1 < len; i$1++) {
								var a = el[i$1];
								position$1(a.offset);
								a.locator = copyLocator(locator, {});
							}
							domBuilder.locator = locator2;
							if (appendElement$1(el, domBuilder, currentNSMap)) parseStack.push(el);
							domBuilder.locator = locator;
						} else if (appendElement$1(el, domBuilder, currentNSMap)) parseStack.push(el);
						if (isHTML && !el.closed) end$1 = parseHtmlSpecialContent(source$1, end$1, el.tagName, entityReplacer, domBuilder);
						else end$1++;
				}
			} catch (e) {
				if (e instanceof ParseError$1) throw e;
				else if (e instanceof DOMException$1) return errorHandler.fatalError("Error constructing the DOM: " + e.name + ": " + e.message, e);
				errorHandler.error("element parse error: " + e);
				end$1 = -1;
			}
			if (end$1 > start) start = end$1;
			else appendText(Math.max(tagStart, start) + 1);
		}
	}
	function copyLocator(f, t) {
		t.lineNumber = f.lineNumber;
		t.columnNumber = f.columnNumber;
		return t;
	}
	/**
	* @returns
	* end of the elementStartPart(end of elementEndPart for selfClosed el)
	* @see {@link #appendElement}
	*/
	function parseElementStartPart(source$1, start, el, currentNSMap, entityReplacer, errorHandler, isHTML) {
		/**
		* @param {string} qname
		* @param {string} value
		* @param {number} startIndex
		*/
		function addAttribute(qname, value$1, startIndex) {
			if (hasOwn(el.attributeNames, qname)) return errorHandler.fatalError("Attribute " + qname + " redefined");
			if (!isHTML && value$1.indexOf("<") >= 0) return errorHandler.fatalError("Unescaped '<' not allowed in attributes values");
			el.addValue(qname, value$1.replace(/[\t\n\r]/g, " ").replace(ENTITY_REG, entityReplacer), startIndex);
		}
		var attrName;
		var value;
		var p = ++start;
		var s = S_TAG;
		while (true) {
			var c$1 = source$1.charAt(p);
			if (s === S_TAG && c$1 === "<") throw new Error("unexpected < in tag name: " + source$1.slice(start, p));
			switch (c$1) {
				case "=":
					if (s === S_ATTR) {
						attrName = source$1.slice(start, p);
						s = S_EQ;
					} else if (s === S_ATTR_SPACE) s = S_EQ;
					else throw new Error("attribute equal must after attrName");
					break;
				case "'":
				case "\"":
					if (s === S_EQ || s === S_ATTR) {
						if (s === S_ATTR) {
							errorHandler.warning("attribute value must after \"=\"");
							attrName = source$1.slice(start, p);
						}
						start = p + 1;
						p = source$1.indexOf(c$1, start);
						if (p > 0) {
							value = source$1.slice(start, p);
							addAttribute(attrName, value, start - 1);
							s = S_ATTR_END;
						} else throw new Error("attribute value no end '" + c$1 + "' match");
					} else if (s == S_ATTR_NOQUOT_VALUE) {
						value = source$1.slice(start, p);
						addAttribute(attrName, value, start);
						errorHandler.warning("attribute \"" + attrName + "\" missed start quot(" + c$1 + ")!!");
						start = p + 1;
						s = S_ATTR_END;
					} else throw new Error("attribute value must after \"=\"");
					break;
				case "/":
					switch (s) {
						case S_TAG: el.setTagName(source$1.slice(start, p));
						case S_ATTR_END:
						case S_TAG_SPACE:
						case S_TAG_CLOSE:
							s = S_TAG_CLOSE;
							el.closed = true;
						case S_ATTR_NOQUOT_VALUE:
						case S_ATTR: break;
						case S_ATTR_SPACE:
							el.closed = true;
							break;
						default: throw new Error("attribute invalid close char('/')");
					}
					break;
				case "":
					errorHandler.error("unexpected end of input");
					if (s == S_TAG) el.setTagName(source$1.slice(start, p));
					return p;
				case ">":
					switch (s) {
						case S_TAG: el.setTagName(source$1.slice(start, p));
						case S_ATTR_END:
						case S_TAG_SPACE:
						case S_TAG_CLOSE: break;
						case S_ATTR_NOQUOT_VALUE:
						case S_ATTR:
							value = source$1.slice(start, p);
							if (value.slice(-1) === "/") {
								el.closed = true;
								value = value.slice(0, -1);
							}
						case S_ATTR_SPACE:
							if (s === S_ATTR_SPACE) value = attrName;
							if (s == S_ATTR_NOQUOT_VALUE) {
								errorHandler.warning("attribute \"" + value + "\" missed quot(\")!");
								addAttribute(attrName, value, start);
							} else {
								if (!isHTML) errorHandler.warning("attribute \"" + value + "\" missed value!! \"" + value + "\" instead!!");
								addAttribute(value, value, start);
							}
							break;
						case S_EQ: if (!isHTML) return errorHandler.fatalError("AttValue: ' or \" expected");
					}
					return p;
				case "": c$1 = " ";
				default: if (c$1 <= " ") switch (s) {
					case S_TAG:
						el.setTagName(source$1.slice(start, p));
						s = S_TAG_SPACE;
						break;
					case S_ATTR:
						attrName = source$1.slice(start, p);
						s = S_ATTR_SPACE;
						break;
					case S_ATTR_NOQUOT_VALUE:
						var value = source$1.slice(start, p);
						errorHandler.warning("attribute \"" + value + "\" missed quot(\")!!");
						addAttribute(attrName, value, start);
					case S_ATTR_END:
						s = S_TAG_SPACE;
						break;
				}
				else switch (s) {
					case S_ATTR_SPACE:
						if (!isHTML) errorHandler.warning("attribute \"" + attrName + "\" missed value!! \"" + attrName + "\" instead2!!");
						addAttribute(attrName, attrName, start);
						start = p;
						s = S_ATTR;
						break;
					case S_ATTR_END: errorHandler.warning("attribute space is required\"" + attrName + "\"!!");
					case S_TAG_SPACE:
						s = S_ATTR;
						start = p;
						break;
					case S_EQ:
						s = S_ATTR_NOQUOT_VALUE;
						start = p;
						break;
					case S_TAG_CLOSE: throw new Error("elements closed character '/' and '>' must be connected to");
				}
			}
			p++;
		}
	}
	/**
	* @returns
	* `true` if a new namespace has been defined.
	*/
	function appendElement$1(el, domBuilder, currentNSMap) {
		var tagName = el.tagName;
		var localNSMap = null;
		var i$1 = el.length;
		while (i$1--) {
			var a = el[i$1];
			var qName = a.qName;
			var value = a.value;
			var nsp = qName.indexOf(":");
			if (nsp > 0) {
				var prefix = a.prefix = qName.slice(0, nsp);
				var localName = qName.slice(nsp + 1);
				var nsPrefix = prefix === "xmlns" && localName;
			} else {
				localName = qName;
				prefix = null;
				nsPrefix = qName === "xmlns" && "";
			}
			a.localName = localName;
			if (nsPrefix !== false) {
				if (localNSMap == null) {
					localNSMap = Object.create(null);
					currentNSMap = Object.create(currentNSMap);
				}
				currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
				a.uri = NAMESPACE$1.XMLNS;
				domBuilder.startPrefixMapping(nsPrefix, value);
			}
		}
		var i$1 = el.length;
		while (i$1--) {
			a = el[i$1];
			if (a.prefix) {
				if (a.prefix === "xml") a.uri = NAMESPACE$1.XML;
				if (a.prefix !== "xmlns") a.uri = currentNSMap[a.prefix];
			}
		}
		var nsp = tagName.indexOf(":");
		if (nsp > 0) {
			prefix = el.prefix = tagName.slice(0, nsp);
			localName = el.localName = tagName.slice(nsp + 1);
		} else {
			prefix = null;
			localName = el.localName = tagName;
		}
		var ns = el.uri = currentNSMap[prefix || ""];
		domBuilder.startElement(ns, localName, tagName, el);
		if (el.closed) {
			domBuilder.endElement(ns, localName, tagName);
			if (localNSMap) {
				for (prefix in localNSMap) if (hasOwn(localNSMap, prefix)) domBuilder.endPrefixMapping(prefix);
			}
		} else {
			el.currentNSMap = currentNSMap;
			el.localNSMap = localNSMap;
			return true;
		}
	}
	function parseHtmlSpecialContent(source$1, elStartEnd, tagName, entityReplacer, domBuilder) {
		var isEscapableRaw = isHTMLEscapableRawTextElement(tagName);
		if (isEscapableRaw || isHTMLRawTextElement(tagName)) {
			var closeTag = new RegExp("</" + tagName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ">", "ig");
			closeTag.lastIndex = elStartEnd;
			var match = closeTag.exec(source$1);
			var elEndStart = match ? match.index : -1;
			if (elEndStart < 0) return elStartEnd + 1;
			var text$2 = source$1.substring(elStartEnd + 1, elEndStart);
			if (isEscapableRaw) text$2 = text$2.replace(ENTITY_REG, entityReplacer);
			domBuilder.characters(text$2, 0, text$2.length);
			return elEndStart;
		}
		return elStartEnd + 1;
	}
	function _copy(source$1, target) {
		for (var n in source$1) if (hasOwn(source$1, n)) target[n] = source$1[n];
	}
	/**
	* @typedef ParseUtils
	* @property {function(relativeIndex: number?): string | undefined} char
	* Provides look ahead access to a singe character relative to the current index.
	* @property {function(): number} getIndex
	* Provides read-only access to the current index.
	* @property {function(reg: RegExp): string | null} getMatch
	* Applies the provided regular expression enforcing that it starts at the current index and
	* returns the complete matching string,
	* and moves the current index by the length of the matching string.
	* @property {function(): string} getSource
	* Provides read-only access to the complete source.
	* @property {function(places: number?): void} skip
	* moves the current index by places (defaults to 1)
	* @property {function(): number} skipBlanks
	* Moves the current index by the amount of white space that directly follows the current index
	* and returns the amount of whitespace chars skipped (0..n),
	* or -1 if the end of the source was reached.
	* @property {function(): string} substringFromIndex
	* creates a substring from the current index to the end of `source`
	* @property {function(compareWith: string): boolean} substringStartsWith
	* Checks if `source` contains `compareWith`, starting from the current index.
	* @property {function(compareWith: string): boolean} substringStartsWithCaseInsensitive
	* Checks if `source` contains `compareWith`, starting from the current index,
	* comparing the upper case of both sides.
	* @see {@link parseUtils}
	*/
	/**
	* A temporary scope for parsing and look ahead operations in `source`,
	* starting from index `start`.
	*
	* Some operations move the current index by a number of positions,
	* after which `getIndex` returns the new index.
	*
	* @param {string} source
	* @param {number} start
	* @returns {ParseUtils}
	*/
	function parseUtils(source$1, start) {
		var index$2 = start;
		function char(n) {
			n = n || 0;
			return source$1.charAt(index$2 + n);
		}
		function skip(n) {
			n = n || 1;
			index$2 += n;
		}
		function skipBlanks() {
			var blanks = 0;
			while (index$2 < source$1.length) {
				var c$1 = char();
				if (c$1 !== " " && c$1 !== "\n" && c$1 !== "	" && c$1 !== "\r") return blanks;
				blanks++;
				skip();
			}
			return -1;
		}
		function substringFromIndex() {
			return source$1.substring(index$2);
		}
		function substringStartsWith(text$2) {
			return source$1.substring(index$2, index$2 + text$2.length) === text$2;
		}
		function substringStartsWithCaseInsensitive(text$2) {
			return source$1.substring(index$2, index$2 + text$2.length).toUpperCase() === text$2.toUpperCase();
		}
		function getMatch(args) {
			var match = g.reg("^", args).exec(substringFromIndex());
			if (match) {
				skip(match[0].length);
				return match[0];
			}
			return null;
		}
		return {
			char,
			getIndex: function() {
				return index$2;
			},
			getMatch,
			getSource: function() {
				return source$1;
			},
			skip,
			skipBlanks,
			substringFromIndex,
			substringStartsWith,
			substringStartsWithCaseInsensitive
		};
	}
	/**
	* @param {ParseUtils} p
	* @param {DOMHandler} errorHandler
	* @returns {string}
	*/
	function parseDoctypeInternalSubset(p, errorHandler) {
		/**
		* @param {ParseUtils} p
		* @param {DOMHandler} errorHandler
		* @returns {string}
		*/
		function parsePI(p$1, errorHandler$1) {
			var match = g.PI.exec(p$1.substringFromIndex());
			if (!match) return errorHandler$1.fatalError("processing instruction is not well-formed at position " + p$1.getIndex());
			if (match[1].toLowerCase() === "xml") return errorHandler$1.fatalError("xml declaration is only allowed at the start of the document, but found at position " + p$1.getIndex());
			p$1.skip(match[0].length);
			return match[0];
		}
		var source$1 = p.getSource();
		if (p.char() === "[") {
			p.skip(1);
			var intSubsetStart = p.getIndex();
			while (p.getIndex() < source$1.length) {
				p.skipBlanks();
				if (p.char() === "]") {
					var internalSubset = source$1.substring(intSubsetStart, p.getIndex());
					p.skip(1);
					return internalSubset;
				}
				var current = null;
				if (p.char() === "<" && p.char(1) === "!") switch (p.char(2)) {
					case "E":
						if (p.char(3) === "L") current = p.getMatch(g.elementdecl);
						else if (p.char(3) === "N") current = p.getMatch(g.EntityDecl);
						break;
					case "A":
						current = p.getMatch(g.AttlistDecl);
						break;
					case "N":
						current = p.getMatch(g.NotationDecl);
						break;
					case "-":
						current = p.getMatch(g.Comment);
						break;
				}
				else if (p.char() === "<" && p.char(1) === "?") current = parsePI(p, errorHandler);
				else if (p.char() === "%") current = p.getMatch(g.PEReference);
				else return errorHandler.fatalError("Error detected in Markup declaration");
				if (!current) return errorHandler.fatalError("Error in internal subset at position " + p.getIndex());
			}
			return errorHandler.fatalError("doctype internal subset is not well-formed, missing ]");
		}
	}
	/**
	* Called when the parser encounters an element starting with '<!'.
	*
	* @param {string} source
	* The xml.
	* @param {number} start
	* the start index of the '<!'
	* @param {DOMHandler} domBuilder
	* @param {DOMHandler} errorHandler
	* @param {boolean} isHTML
	* @returns {number | never}
	* The end index of the element.
	* @throws {ParseError}
	* In case the element is not well-formed.
	*/
	function parseDoctypeCommentOrCData(source$1, start, domBuilder, errorHandler, isHTML) {
		var p = parseUtils(source$1, start);
		switch (isHTML ? p.char(2).toUpperCase() : p.char(2)) {
			case "-":
				var comment = p.getMatch(g.Comment);
				if (comment) {
					domBuilder.comment(comment, g.COMMENT_START.length, comment.length - g.COMMENT_START.length - g.COMMENT_END.length);
					return p.getIndex();
				} else return errorHandler.fatalError("comment is not well-formed at position " + p.getIndex());
			case "[":
				var cdata = p.getMatch(g.CDSect);
				if (cdata) {
					if (!isHTML && !domBuilder.currentElement) return errorHandler.fatalError("CDATA outside of element");
					domBuilder.startCDATA();
					domBuilder.characters(cdata, g.CDATA_START.length, cdata.length - g.CDATA_START.length - g.CDATA_END.length);
					domBuilder.endCDATA();
					return p.getIndex();
				} else return errorHandler.fatalError("Invalid CDATA starting at position " + start);
			case "D":
				if (domBuilder.doc && domBuilder.doc.documentElement) return errorHandler.fatalError("Doctype not allowed inside or after documentElement at position " + p.getIndex());
				if (isHTML ? !p.substringStartsWithCaseInsensitive(g.DOCTYPE_DECL_START) : !p.substringStartsWith(g.DOCTYPE_DECL_START)) return errorHandler.fatalError("Expected " + g.DOCTYPE_DECL_START + " at position " + p.getIndex());
				p.skip(g.DOCTYPE_DECL_START.length);
				if (p.skipBlanks() < 1) return errorHandler.fatalError("Expected whitespace after " + g.DOCTYPE_DECL_START + " at position " + p.getIndex());
				var doctype = {
					name: void 0,
					publicId: void 0,
					systemId: void 0,
					internalSubset: void 0
				};
				doctype.name = p.getMatch(g.Name);
				if (!doctype.name) return errorHandler.fatalError("doctype name missing or contains unexpected characters at position " + p.getIndex());
				if (isHTML && doctype.name.toLowerCase() !== "html") errorHandler.warning("Unexpected DOCTYPE in HTML document at position " + p.getIndex());
				p.skipBlanks();
				if (p.substringStartsWith(g.PUBLIC) || p.substringStartsWith(g.SYSTEM)) {
					var match = g.ExternalID_match.exec(p.substringFromIndex());
					if (!match) return errorHandler.fatalError("doctype external id is not well-formed at position " + p.getIndex());
					if (match.groups.SystemLiteralOnly !== void 0) doctype.systemId = match.groups.SystemLiteralOnly;
					else {
						doctype.systemId = match.groups.SystemLiteral;
						doctype.publicId = match.groups.PubidLiteral;
					}
					p.skip(match[0].length);
				} else if (isHTML && p.substringStartsWithCaseInsensitive(g.SYSTEM)) {
					p.skip(g.SYSTEM.length);
					if (p.skipBlanks() < 1) return errorHandler.fatalError("Expected whitespace after " + g.SYSTEM + " at position " + p.getIndex());
					doctype.systemId = p.getMatch(g.ABOUT_LEGACY_COMPAT_SystemLiteral);
					if (!doctype.systemId) return errorHandler.fatalError("Expected " + g.ABOUT_LEGACY_COMPAT + " in single or double quotes after " + g.SYSTEM + " at position " + p.getIndex());
				}
				if (isHTML && doctype.systemId && !g.ABOUT_LEGACY_COMPAT_SystemLiteral.test(doctype.systemId)) errorHandler.warning("Unexpected doctype.systemId in HTML document at position " + p.getIndex());
				if (!isHTML) {
					p.skipBlanks();
					doctype.internalSubset = parseDoctypeInternalSubset(p, errorHandler);
				}
				p.skipBlanks();
				if (p.char() !== ">") return errorHandler.fatalError("doctype not terminated with > at position " + p.getIndex());
				p.skip(1);
				domBuilder.startDTD(doctype.name, doctype.publicId, doctype.systemId, doctype.internalSubset);
				domBuilder.endDTD();
				return p.getIndex();
			default: return errorHandler.fatalError("Not well-formed XML starting with \"<!\" at position " + start);
		}
	}
	function parseProcessingInstruction(source$1, start, domBuilder, errorHandler) {
		var match = source$1.substring(start).match(g.PI);
		if (!match) return errorHandler.fatalError("Invalid processing instruction starting at position " + start);
		if (match[1].toLowerCase() === "xml") {
			if (start > 0) return errorHandler.fatalError("processing instruction at position " + start + " is an xml declaration which is only at the start of the document");
			if (!g.XMLDecl.test(source$1.substring(start))) return errorHandler.fatalError("xml declaration is not well-formed");
		}
		domBuilder.processingInstruction(match[1], match[2]);
		return start + match[0].length;
	}
	function ElementAttributes() {
		this.attributeNames = Object.create(null);
	}
	ElementAttributes.prototype = {
		setTagName: function(tagName) {
			if (!g.QName_exact.test(tagName)) throw new Error("invalid tagName:" + tagName);
			this.tagName = tagName;
		},
		addValue: function(qName, value, offset) {
			if (!g.QName_exact.test(qName)) throw new Error("invalid attribute:" + qName);
			this.attributeNames[qName] = this.length;
			this[this.length++] = {
				qName,
				value,
				offset
			};
		},
		length: 0,
		getLocalName: function(i$1) {
			return this[i$1].localName;
		},
		getLocator: function(i$1) {
			return this[i$1].locator;
		},
		getQName: function(i$1) {
			return this[i$1].qName;
		},
		getURI: function(i$1) {
			return this[i$1].uri;
		},
		getValue: function(i$1) {
			return this[i$1].value;
		}
	};
	exports.XMLReader = XMLReader$1;
	exports.parseUtils = parseUtils;
	exports.parseDoctypeCommentOrCData = parseDoctypeCommentOrCData;
}) });

//#endregion
//#region node_modules/.pnpm/@xmldom+xmldom@0.9.12/node_modules/@xmldom/xmldom/lib/dom-parser.js
var require_dom_parser = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/@xmldom+xmldom@0.9.12/node_modules/@xmldom/xmldom/lib/dom-parser.js": ((exports) => {
	var conventions$1 = require_conventions();
	var dom$1 = require_dom();
	var errors$1 = require_errors();
	var entities = require_entities();
	var sax = require_sax();
	var DOMImplementation = dom$1.DOMImplementation;
	var hasDefaultHTMLNamespace = conventions$1.hasDefaultHTMLNamespace;
	var isHTMLMimeType = conventions$1.isHTMLMimeType;
	var isValidMimeType = conventions$1.isValidMimeType;
	var MIME_TYPE = conventions$1.MIME_TYPE;
	var NAMESPACE = conventions$1.NAMESPACE;
	var ParseError = errors$1.ParseError;
	var XMLReader = sax.XMLReader;
	/**
	* Normalizes line ending according to <https://www.w3.org/TR/xml11/#sec-line-ends>,
	* including some Unicode "newline" characters:
	*
	* > XML parsed entities are often stored in computer files which,
	* > for editing convenience, are organized into lines.
	* > These lines are typically separated by some combination
	* > of the characters CARRIAGE RETURN (#xD) and LINE FEED (#xA).
	* >
	* > To simplify the tasks of applications, the XML processor must behave
	* > as if it normalized all line breaks in external parsed entities (including the document entity)
	* > on input, before parsing, by translating the following to a single #xA character:
	* >
	* > 1. the two-character sequence #xD #xA,
	* > 2. the two-character sequence #xD #x85,
	* > 3. the single character #x85,
	* > 4. the single character #x2028,
	* > 5. the single character #x2029,
	* > 6. any #xD character that is not immediately followed by #xA or #x85.
	*
	* @param {string} input
	* @returns {string}
	* @prettierignore
	*/
	function normalizeLineEndings(input) {
		return input.replace(/\r[\n\u0085]/g, "\n").replace(/[\r\u0085\u2028\u2029]/g, "\n");
	}
	/**
	* @typedef Locator
	* @property {number} [columnNumber]
	* @property {number} [lineNumber]
	*/
	/**
	* @typedef DOMParserOptions
	* @property {typeof assign} [assign]
	* The method to use instead of `conventions.assign`, which is used to copy values from
	* `options` before they are used for parsing.
	* @property {typeof DOMHandler} [domHandler]
	* For internal testing: The class for creating an instance for handling events from the SAX
	* parser.
	* *****Warning: By configuring a faulty implementation, the specified behavior can completely
	* be broken.*****.
	* @property {Function} [errorHandler]
	* DEPRECATED! use `onError` instead.
	* @property {function(level:ErrorLevel, message:string, context: DOMHandler):void}
	* [onError]
	* A function invoked for every error that occurs during parsing.
	*
	* If it is not provided, all errors are reported to `console.error`
	* and only `fatalError`s are thrown as a `ParseError`,
	* which prevents any further processing.
	* If the provided method throws, a `ParserError` is thrown,
	* which prevents any further processing.
	*
	* Be aware that many `warning`s are considered an error that prevents further processing in
	* most implementations.
	* @property {boolean} [locator=true]
	* Configures if the nodes created during parsing will have a `lineNumber` and a `columnNumber`
	* attribute describing their location in the XML string.
	* Default is true.
	* @property {(string) => string} [normalizeLineEndings]
	* used to replace line endings before parsing, defaults to exported `normalizeLineEndings`,
	* which normalizes line endings according to <https://www.w3.org/TR/xml11/#sec-line-ends>,
	* including some Unicode "newline" characters.
	* @property {Object} [xmlns]
	* The XML namespaces that should be assumed when parsing.
	* The default namespace can be provided by the key that is the empty string.
	* When the `mimeType` for HTML, XHTML or SVG are passed to `parseFromString`,
	* the default namespace that will be used,
	* will be overridden according to the specification.
	* @see {@link normalizeLineEndings}
	*/
	/**
	* The DOMParser interface provides the ability to parse XML or HTML source code from a string
	* into a DOM `Document`.
	*
	* ***xmldom is different from the spec in that it allows an `options` parameter,
	* to control the behavior***.
	*
	* @class
	* @param {DOMParserOptions} [options]
	* @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser
	* @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-parsing-and-serialization
	*/
	function DOMParser$1(options) {
		options = options || {};
		if (options.locator === void 0) options.locator = true;
		/**
		* The method to use instead of `conventions.assign`, which is used to copy values from
		* `options`
		* before they are used for parsing.
		*
		* @type {conventions.assign}
		* @private
		* @see {@link conventions.assign}
		* @readonly
		*/
		this.assign = options.assign || conventions$1.assign;
		/**
		* For internal testing: The class for creating an instance for handling events from the SAX
		* parser.
		* *****Warning: By configuring a faulty implementation, the specified behavior can completely
		* be broken*****.
		*
		* @type {typeof DOMHandler}
		* @private
		* @readonly
		*/
		this.domHandler = options.domHandler || DOMHandler;
		/**
		* A function that is invoked for every error that occurs during parsing.
		*
		* If it is not provided, all errors are reported to `console.error`
		* and only `fatalError`s are thrown as a `ParseError`,
		* which prevents any further processing.
		* If the provided method throws, a `ParserError` is thrown,
		* which prevents any further processing.
		*
		* Be aware that many `warning`s are considered an error that prevents further processing in
		* most implementations.
		*
		* @type {function(level:ErrorLevel, message:string, context: DOMHandler):void}
		* @see {@link onErrorStopParsing}
		* @see {@link onWarningStopParsing}
		*/
		this.onError = options.onError || options.errorHandler;
		if (options.errorHandler && typeof options.errorHandler !== "function") throw new TypeError("errorHandler object is no longer supported, switch to onError!");
		else if (options.errorHandler) options.errorHandler("warning", "The `errorHandler` option has been deprecated, use `onError` instead!", this);
		/**
		* used to replace line endings before parsing, defaults to `normalizeLineEndings`
		*
		* @type {(string) => string}
		* @readonly
		*/
		this.normalizeLineEndings = options.normalizeLineEndings || normalizeLineEndings;
		/**
		* Configures if the nodes created during parsing will have a `lineNumber` and a
		* `columnNumber`
		* attribute describing their location in the XML string.
		* Default is true.
		*
		* @type {boolean}
		* @readonly
		*/
		this.locator = !!options.locator;
		/**
		* The default namespace can be provided by the key that is the empty string.
		* When the `mimeType` for HTML, XHTML or SVG are passed to `parseFromString`,
		* the default namespace that will be used,
		* will be overridden according to the specification.
		*
		* @type {Readonly<Object>}
		* @readonly
		*/
		this.xmlns = this.assign(Object.create(null), options.xmlns);
	}
	/**
	* Parses `source` using the options in the way configured by the `DOMParserOptions` of `this`
	* `DOMParser`. If `mimeType` is `text/html` an HTML `Document` is created,
	* otherwise an XML `Document` is created.
	*
	* __It behaves different from the description in the living standard__:
	* - Uses the `options` passed to the `DOMParser` constructor to modify the behavior.
	* - Any unexpected input is reported to `onError` with either a `warning`,
	* `error` or `fatalError` level.
	* - Any `fatalError` throws a `ParseError` which prevents further processing.
	* - Any error thrown by `onError` is converted to a `ParseError` which prevents further
	* processing - If no `Document` was created during parsing it is reported as a `fatalError`.
	* - A `DOMException` raised while building the DOM (e.g. an unbound namespace prefix) is
	* reported as a `fatalError` and rethrown as a `ParseError` with the `DOMException` as its
	* `cause`.
	* *****Warning: By configuring a faulty DOMHandler implementation,
	* the specified behavior can completely be broken*****.
	*
	* @param {string} source
	* The XML mime type only allows string input!
	* @param {string} [mimeType='application/xml']
	* the mimeType or contentType of the document to be created determines the `type` of document
	* created (XML or HTML)
	* @returns {Document}
	* The `Document` node.
	* @throws {ParseError}
	* for any `fatalError` or anything that is thrown by `onError`
	* @throws {TypeError}
	* for any invalid `mimeType`
	* @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString
	* @see https://html.spec.whatwg.org/#dom-domparser-parsefromstring-dev
	*/
	DOMParser$1.prototype.parseFromString = function(source$1, mimeType) {
		if (!isValidMimeType(mimeType)) throw new TypeError("DOMParser.parseFromString: the provided mimeType \"" + mimeType + "\" is not valid.");
		var defaultNSMap = this.assign(Object.create(null), this.xmlns);
		var entityMap = entities.XML_ENTITIES;
		var defaultNamespace = defaultNSMap[""] || null;
		if (hasDefaultHTMLNamespace(mimeType)) {
			entityMap = entities.HTML_ENTITIES;
			defaultNamespace = NAMESPACE.HTML;
		} else if (mimeType === MIME_TYPE.XML_SVG_IMAGE) defaultNamespace = NAMESPACE.SVG;
		defaultNSMap[""] = defaultNamespace;
		defaultNSMap.xml = defaultNSMap.xml || NAMESPACE.XML;
		var domBuilder = new this.domHandler({
			mimeType,
			defaultNamespace,
			onError: this.onError
		});
		var locator = this.locator ? {} : void 0;
		if (this.locator) domBuilder.setDocumentLocator(locator);
		var sax$1 = new XMLReader();
		sax$1.errorHandler = domBuilder;
		sax$1.domBuilder = domBuilder;
		if (!conventions$1.isHTMLMimeType(mimeType) && typeof source$1 !== "string") sax$1.errorHandler.fatalError("source is not a string");
		sax$1.parse(this.normalizeLineEndings(String(source$1)), defaultNSMap, entityMap);
		if (!domBuilder.doc.documentElement) sax$1.errorHandler.fatalError("missing root element");
		return domBuilder.doc;
	};
	/**
	* @typedef DOMHandlerOptions
	* @property {string} [mimeType=MIME_TYPE.XML_APPLICATION]
	* @property {string | null} [defaultNamespace=null]
	*/
	/**
	* The class that is used to handle events from the SAX parser to create the related DOM
	* elements.
	*
	* Some methods are only implemented as an empty function,
	* since they are (at least currently) not relevant for xmldom.
	*
	* @class
	* @param {DOMHandlerOptions} [options]
	* @see http://www.saxproject.org/apidoc/org/xml/sax/ext/DefaultHandler2.html
	*/
	function DOMHandler(options) {
		var opt = options || {};
		/**
		* The mime type is used to determine if the DOM handler will create an XML or HTML document.
		* Only if it is set to `text/html` it will create an HTML document.
		* It defaults to MIME_TYPE.XML_APPLICATION.
		*
		* @type {string}
		* @see {@link MIME_TYPE}
		* @readonly
		*/
		this.mimeType = opt.mimeType || MIME_TYPE.XML_APPLICATION;
		/**
		* The namespace to use to create an XML document.
		* For the following reasons this is required:
		* - The SAX API for `startDocument` doesn't offer any way to pass a namespace,
		* since at that point there is no way for the parser to know what the default namespace from
		* the document will be.
		* - When creating using `DOMImplementation.createDocument` it is required to pass a
		* namespace,
		* to determine the correct `Document.contentType`, which should match `this.mimeType`.
		* - When parsing an XML document with the `application/xhtml+xml` mimeType,
		* the HTML namespace needs to be the default namespace.
		*
		* @type {string | null}
		* @private
		* @readonly
		*/
		this.defaultNamespace = opt.defaultNamespace || null;
		/**
		* @type {boolean}
		* @private
		*/
		this.cdata = false;
		/**
		* The last `Element` that was created by `startElement`.
		* `endElement` sets it to the `currentElement.parentNode`.
		*
		* Note: The sax parser currently sets it to white space text nodes between tags.
		*
		* @type {Element | Node | undefined}
		* @private
		*/
		this.currentElement = void 0;
		/**
		* The Document that is created as part of `startDocument`,
		* and returned by `DOMParser.parseFromString`.
		*
		* @type {Document | undefined}
		* @readonly
		*/
		this.doc = void 0;
		/**
		* The locator is stored as part of setDocumentLocator.
		* It is controlled and mutated by the SAX parser to store the current parsing position.
		* It is used by DOMHandler to set `columnNumber` and `lineNumber`
		* on the DOM nodes.
		*
		* @type {Readonly<Locator> | undefined}
		* @private
		* @readonly (the
		* sax parser currently sometimes set's it)
		*/
		this.locator = void 0;
		/**
		* @type {function (level:ErrorLevel ,message:string, context:DOMHandler):void}
		* @readonly
		*/
		this.onError = opt.onError;
	}
	function position(locator, node$1) {
		node$1.lineNumber = locator.lineNumber;
		node$1.columnNumber = locator.columnNumber;
	}
	DOMHandler.prototype = {
		startDocument: function() {
			var impl = new DOMImplementation();
			this.doc = isHTMLMimeType(this.mimeType) ? impl.createHTMLDocument(false) : impl.createDocument(this.defaultNamespace, "");
		},
		startElement: function(namespaceURI, localName, qName, attrs) {
			var doc = this.doc;
			var el = doc.createElementNS(namespaceURI, qName || localName);
			var len = attrs.length;
			appendElement(this, el);
			this.currentElement = el;
			this.locator && position(this.locator, el);
			for (var i$1 = 0; i$1 < len; i$1++) {
				var namespaceURI = attrs.getURI(i$1);
				var value = attrs.getValue(i$1);
				var qName = attrs.getQName(i$1);
				var attr$1 = doc.createAttributeNS(namespaceURI, qName);
				this.locator && position(attrs.getLocator(i$1), attr$1);
				attr$1.value = attr$1.nodeValue = value;
				el.setAttributeNode(attr$1);
			}
		},
		endElement: function(namespaceURI, localName, qName) {
			this.currentElement = this.currentElement.parentNode;
		},
		startPrefixMapping: function(prefix, uri) {},
		endPrefixMapping: function(prefix) {},
		processingInstruction: function(target, data$1) {
			var ins = this.doc.createProcessingInstruction(target, data$1);
			this.locator && position(this.locator, ins);
			appendElement(this, ins);
		},
		ignorableWhitespace: function(ch, start, length) {},
		characters: function(chars$1, start, length) {
			chars$1 = _toString.apply(this, arguments);
			if (chars$1) {
				if (this.cdata) var charNode = this.doc.createCDATASection(chars$1);
				else var charNode = this.doc.createTextNode(chars$1);
				if (this.currentElement) this.currentElement.appendChild(charNode);
				else if (/^\s*$/.test(chars$1)) this.doc.appendChild(charNode);
				this.locator && position(this.locator, charNode);
			}
		},
		skippedEntity: function(name$1) {},
		endDocument: function() {
			this.doc.normalize();
		},
		setDocumentLocator: function(locator) {
			if (locator) locator.lineNumber = 0;
			this.locator = locator;
		},
		comment: function(chars$1, start, length) {
			chars$1 = _toString.apply(this, arguments);
			var comm = this.doc.createComment(chars$1);
			this.locator && position(this.locator, comm);
			appendElement(this, comm);
		},
		startCDATA: function() {
			this.cdata = true;
		},
		endCDATA: function() {
			this.cdata = false;
		},
		startDTD: function(name$1, publicId, systemId, internalSubset) {
			var impl = this.doc.implementation;
			if (impl && impl.createDocumentType) {
				var dt = impl.createDocumentType(name$1, publicId, systemId, internalSubset);
				this.locator && position(this.locator, dt);
				appendElement(this, dt);
				this.doc.doctype = dt;
			}
		},
		reportError: function(level, message) {
			if (typeof this.onError === "function") try {
				this.onError(level, message, this);
			} catch (e) {
				throw new ParseError("Reporting " + level + " \"" + message + "\" caused " + e, this.locator);
			}
			else console.error("[xmldom " + level + "]	" + message, _locator(this.locator));
		},
		warning: function(message) {
			this.reportError("warning", message);
		},
		error: function(message) {
			this.reportError("error", message);
		},
		fatalError: function(message, cause) {
			this.reportError("fatalError", message);
			throw new ParseError(message, this.locator, cause);
		}
	};
	function _locator(l) {
		if (l) return "\n@#[line:" + l.lineNumber + ",col:" + l.columnNumber + "]";
	}
	function _toString(chars$1, start, length) {
		if (typeof chars$1 == "string") return chars$1.substr(start, length);
		else {
			if (chars$1.length >= start + length || start) return new java.lang.String(chars$1, start, length) + "";
			return chars$1;
		}
	}
	"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(key$2) {
		DOMHandler.prototype[key$2] = function() {
			return null;
		};
	});
	function appendElement(handler, node$1) {
		if (!handler.currentElement) handler.doc.appendChild(node$1);
		else handler.currentElement.appendChild(node$1);
	}
	/**
	* A method that prevents any further parsing when an `error`
	* with level `error` is reported during parsing.
	*
	* @see {@link DOMParserOptions.onError}
	* @see {@link onWarningStopParsing}
	*/
	function onErrorStopParsing(level) {
		if (level === "error") throw "onErrorStopParsing";
	}
	/**
	* A method that prevents any further parsing when any `error` is reported during parsing.
	*
	* @see {@link DOMParserOptions.onError}
	* @see {@link onErrorStopParsing}
	*/
	function onWarningStopParsing() {
		throw "onWarningStopParsing";
	}
	exports.__DOMHandler = DOMHandler;
	exports.DOMParser = DOMParser$1;
	exports.normalizeLineEndings = normalizeLineEndings;
	exports.onErrorStopParsing = onErrorStopParsing;
	exports.onWarningStopParsing = onWarningStopParsing;
}) });

//#endregion
//#region node_modules/.pnpm/@xmldom+xmldom@0.9.12/node_modules/@xmldom/xmldom/lib/index.js
var require_lib = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/@xmldom+xmldom@0.9.12/node_modules/@xmldom/xmldom/lib/index.js": ((exports) => {
	var conventions = require_conventions();
	exports.assign = conventions.assign;
	exports.hasDefaultHTMLNamespace = conventions.hasDefaultHTMLNamespace;
	exports.isHTMLMimeType = conventions.isHTMLMimeType;
	exports.isValidMimeType = conventions.isValidMimeType;
	exports.MIME_TYPE = conventions.MIME_TYPE;
	exports.NAMESPACE = conventions.NAMESPACE;
	var errors = require_errors();
	exports.DOMException = errors.DOMException;
	exports.DOMExceptionName = errors.DOMExceptionName;
	exports.ExceptionCode = errors.ExceptionCode;
	exports.ParseError = errors.ParseError;
	var dom = require_dom();
	exports.Attr = dom.Attr;
	exports.CDATASection = dom.CDATASection;
	exports.CharacterData = dom.CharacterData;
	exports.Comment = dom.Comment;
	exports.Document = dom.Document;
	exports.DocumentFragment = dom.DocumentFragment;
	exports.DocumentType = dom.DocumentType;
	exports.DOMImplementation = dom.DOMImplementation;
	exports.Element = dom.Element;
	exports.Entity = dom.Entity;
	exports.EntityReference = dom.EntityReference;
	exports.LiveNodeList = dom.LiveNodeList;
	exports.NamedNodeMap = dom.NamedNodeMap;
	exports.Node = dom.Node;
	exports.NodeList = dom.NodeList;
	exports.Notation = dom.Notation;
	exports.ProcessingInstruction = dom.ProcessingInstruction;
	exports.Text = dom.Text;
	exports.XMLSerializer = dom.XMLSerializer;
	var domParser = require_dom_parser();
	exports.DOMParser = domParser.DOMParser;
	exports.normalizeLineEndings = domParser.normalizeLineEndings;
	exports.onErrorStopParsing = domParser.onErrorStopParsing;
	exports.onWarningStopParsing = domParser.onWarningStopParsing;
}) });

//#endregion
//#region node_modules/.pnpm/xpath@0.0.35/node_modules/xpath/xpath.js
var require_xpath = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/xpath@0.0.35/node_modules/xpath/xpath.js": ((exports) => {
	(function(exports$1) {
		var NAMESPACE_NODE_NODETYPE = "__namespace";
		var isNil = function(x) {
			return x === null || x === void 0;
		};
		var isPositiveInteger = function(x) {
			return typeof x === "number" && x >= 1 && Math.floor(x) === x;
		};
		var isValidNodeType = function(nodeType) {
			return nodeType === NAMESPACE_NODE_NODETYPE || Number.isInteger(nodeType) && nodeType >= 1 && nodeType <= 11;
		};
		var isNodeLike = function(value) {
			return value && isValidNodeType(value.nodeType) && typeof value.nodeName === "string";
		};
		function curry(func) {
			var slice$1 = Array.prototype.slice, totalargs = func.length, partial$1 = function(args, fn$2) {
				return function() {
					return fn$2.apply(this, args.concat(slice$1.call(arguments)));
				};
			}, fn$1 = function() {
				var args = slice$1.call(arguments);
				return args.length < totalargs ? partial$1(args, fn$1) : func.apply(this, slice$1.apply(arguments, [0, totalargs]));
			};
			return fn$1;
		}
		var forEach = function(f, xs) {
			for (var i$1 = 0; i$1 < xs.length; i$1 += 1) f(xs[i$1], i$1, xs);
		};
		var reduce = function(f, seed, xs) {
			var acc = seed;
			forEach(function(x, i$1) {
				acc = f(acc, x, i$1);
			}, xs);
			return acc;
		};
		var map$1 = function(f, xs) {
			var mapped = new Array(xs.length);
			forEach(function(x, i$1) {
				mapped[i$1] = f(x);
			}, xs);
			return mapped;
		};
		var filter$3 = function(f, xs) {
			var filtered = [];
			forEach(function(x, i$1) {
				if (f(x, i$1)) filtered.push(x);
			}, xs);
			return filtered;
		};
		var includes = function(values, value) {
			for (var i$1 = 0; i$1 < values.length; i$1 += 1) if (values[i$1] === value) return true;
			return false;
		};
		function always(value) {
			return function() {
				return value;
			};
		}
		function toString$1(x) {
			return x.toString();
		}
		var join = function(s, xs) {
			return xs.join(s);
		};
		var wrap$1 = function(pref, suf, str) {
			return pref + str + suf;
		};
		var prototypeConcat = Array.prototype.concat;
		var sortNodes = function(nodes, reverse) {
			var ns = new XNodeSet();
			ns.addArray(nodes);
			var sorted = ns.toArray();
			return reverse ? sorted.reverse() : sorted;
		};
		var MAX_ARGUMENT_LENGTH = 32767;
		function flatten(arr) {
			var result = [];
			for (var start = 0; start < arr.length; start += MAX_ARGUMENT_LENGTH) {
				var chunk = arr.slice(start, start + MAX_ARGUMENT_LENGTH);
				result = prototypeConcat.apply(result, chunk);
			}
			return result;
		}
		function assign$1(target, varArgs) {
			var to = Object(target);
			for (var index$2 = 1; index$2 < arguments.length; index$2++) {
				var nextSource = arguments[index$2];
				if (nextSource != null) {
					for (var nextKey in nextSource) if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) to[nextKey] = nextSource[nextKey];
				}
			}
			return to;
		}
		var NodeTypes = {
			ELEMENT_NODE: 1,
			ATTRIBUTE_NODE: 2,
			TEXT_NODE: 3,
			CDATA_SECTION_NODE: 4,
			PROCESSING_INSTRUCTION_NODE: 7,
			COMMENT_NODE: 8,
			DOCUMENT_NODE: 9,
			DOCUMENT_TYPE_NODE: 10,
			DOCUMENT_FRAGMENT_NODE: 11,
			NAMESPACE_NODE: NAMESPACE_NODE_NODETYPE
		};
		XPathParser.prototype = /* @__PURE__ */ new Object();
		XPathParser.prototype.constructor = XPathParser;
		XPathParser.superclass = Object.prototype;
		function XPathParser() {
			this.init();
		}
		XPathParser.prototype.init = function() {
			this.reduceActions = [];
			this.reduceActions[3] = function(rhs) {
				return new OrOperation(rhs[0], rhs[2]);
			};
			this.reduceActions[5] = function(rhs) {
				return new AndOperation(rhs[0], rhs[2]);
			};
			this.reduceActions[7] = function(rhs) {
				return new EqualsOperation(rhs[0], rhs[2]);
			};
			this.reduceActions[8] = function(rhs) {
				return new NotEqualOperation(rhs[0], rhs[2]);
			};
			this.reduceActions[10] = function(rhs) {
				return new LessThanOperation(rhs[0], rhs[2]);
			};
			this.reduceActions[11] = function(rhs) {
				return new GreaterThanOperation(rhs[0], rhs[2]);
			};
			this.reduceActions[12] = function(rhs) {
				return new LessThanOrEqualOperation(rhs[0], rhs[2]);
			};
			this.reduceActions[13] = function(rhs) {
				return new GreaterThanOrEqualOperation(rhs[0], rhs[2]);
			};
			this.reduceActions[15] = function(rhs) {
				return new PlusOperation(rhs[0], rhs[2]);
			};
			this.reduceActions[16] = function(rhs) {
				return new MinusOperation(rhs[0], rhs[2]);
			};
			this.reduceActions[18] = function(rhs) {
				return new MultiplyOperation(rhs[0], rhs[2]);
			};
			this.reduceActions[19] = function(rhs) {
				return new DivOperation(rhs[0], rhs[2]);
			};
			this.reduceActions[20] = function(rhs) {
				return new ModOperation(rhs[0], rhs[2]);
			};
			this.reduceActions[22] = function(rhs) {
				return new UnaryMinusOperation(rhs[1]);
			};
			this.reduceActions[24] = function(rhs) {
				return new BarOperation(rhs[0], rhs[2]);
			};
			this.reduceActions[25] = function(rhs) {
				return new PathExpr(void 0, void 0, rhs[0]);
			};
			this.reduceActions[27] = function(rhs) {
				rhs[0].locationPath = rhs[2];
				return rhs[0];
			};
			this.reduceActions[28] = function(rhs) {
				rhs[0].locationPath = rhs[2];
				rhs[0].locationPath.steps.unshift(new Step(Step.DESCENDANTORSELF, NodeTest.nodeTest, []));
				return rhs[0];
			};
			this.reduceActions[29] = function(rhs) {
				return new PathExpr(rhs[0], [], void 0);
			};
			this.reduceActions[30] = function(rhs) {
				if (Utilities.instance_of(rhs[0], PathExpr)) {
					if (rhs[0].filterPredicates == void 0) rhs[0].filterPredicates = [];
					rhs[0].filterPredicates.push(rhs[1]);
					return rhs[0];
				} else return new PathExpr(rhs[0], [rhs[1]], void 0);
			};
			this.reduceActions[32] = function(rhs) {
				return rhs[1];
			};
			this.reduceActions[33] = function(rhs) {
				return new XString(rhs[0]);
			};
			this.reduceActions[34] = function(rhs) {
				return new XNumber(rhs[0]);
			};
			this.reduceActions[36] = function(rhs) {
				return new FunctionCall(rhs[0], []);
			};
			this.reduceActions[37] = function(rhs) {
				return new FunctionCall(rhs[0], rhs[2]);
			};
			this.reduceActions[38] = function(rhs) {
				return [rhs[0]];
			};
			this.reduceActions[39] = function(rhs) {
				rhs[2].unshift(rhs[0]);
				return rhs[2];
			};
			this.reduceActions[43] = function(rhs) {
				return new LocationPath(true, []);
			};
			this.reduceActions[44] = function(rhs) {
				rhs[1].absolute = true;
				return rhs[1];
			};
			this.reduceActions[46] = function(rhs) {
				return new LocationPath(false, [rhs[0]]);
			};
			this.reduceActions[47] = function(rhs) {
				rhs[0].steps.push(rhs[2]);
				return rhs[0];
			};
			this.reduceActions[49] = function(rhs) {
				return new Step(rhs[0], rhs[1], []);
			};
			this.reduceActions[50] = function(rhs) {
				return new Step(Step.CHILD, rhs[0], []);
			};
			this.reduceActions[51] = function(rhs) {
				return new Step(rhs[0], rhs[1], rhs[2]);
			};
			this.reduceActions[52] = function(rhs) {
				return new Step(Step.CHILD, rhs[0], rhs[1]);
			};
			this.reduceActions[54] = function(rhs) {
				return [rhs[0]];
			};
			this.reduceActions[55] = function(rhs) {
				rhs[1].unshift(rhs[0]);
				return rhs[1];
			};
			this.reduceActions[56] = function(rhs) {
				if (rhs[0] == "ancestor") return Step.ANCESTOR;
				else if (rhs[0] == "ancestor-or-self") return Step.ANCESTORORSELF;
				else if (rhs[0] == "attribute") return Step.ATTRIBUTE;
				else if (rhs[0] == "child") return Step.CHILD;
				else if (rhs[0] == "descendant") return Step.DESCENDANT;
				else if (rhs[0] == "descendant-or-self") return Step.DESCENDANTORSELF;
				else if (rhs[0] == "following") return Step.FOLLOWING;
				else if (rhs[0] == "following-sibling") return Step.FOLLOWINGSIBLING;
				else if (rhs[0] == "namespace") return Step.NAMESPACE;
				else if (rhs[0] == "parent") return Step.PARENT;
				else if (rhs[0] == "preceding") return Step.PRECEDING;
				else if (rhs[0] == "preceding-sibling") return Step.PRECEDINGSIBLING;
				else if (rhs[0] == "self") return Step.SELF;
				return -1;
			};
			this.reduceActions[57] = function(rhs) {
				return Step.ATTRIBUTE;
			};
			this.reduceActions[59] = function(rhs) {
				if (rhs[0] == "comment") return NodeTest.commentTest;
				else if (rhs[0] == "text") return NodeTest.textTest;
				else if (rhs[0] == "processing-instruction") return NodeTest.anyPiTest;
				else if (rhs[0] == "node") return NodeTest.nodeTest;
				return new NodeTest(-1, void 0);
			};
			this.reduceActions[60] = function(rhs) {
				return new NodeTest.PITest(rhs[2]);
			};
			this.reduceActions[61] = function(rhs) {
				return rhs[1];
			};
			this.reduceActions[63] = function(rhs) {
				rhs[1].absolute = true;
				rhs[1].steps.unshift(new Step(Step.DESCENDANTORSELF, NodeTest.nodeTest, []));
				return rhs[1];
			};
			this.reduceActions[64] = function(rhs) {
				rhs[0].steps.push(new Step(Step.DESCENDANTORSELF, NodeTest.nodeTest, []));
				rhs[0].steps.push(rhs[2]);
				return rhs[0];
			};
			this.reduceActions[65] = function(rhs) {
				return new Step(Step.SELF, NodeTest.nodeTest, []);
			};
			this.reduceActions[66] = function(rhs) {
				return new Step(Step.PARENT, NodeTest.nodeTest, []);
			};
			this.reduceActions[67] = function(rhs) {
				return new VariableReference(rhs[1]);
			};
			this.reduceActions[68] = function(rhs) {
				return NodeTest.nameTestAny;
			};
			this.reduceActions[69] = function(rhs) {
				return new NodeTest.NameTestPrefixAny(rhs[0].split(":")[0]);
			};
			this.reduceActions[70] = function(rhs) {
				return new NodeTest.NameTestQName(rhs[0]);
			};
		};
		XPathParser.actionTable = [
			" s s        sssssssss    s ss  s  ss",
			"                 s                  ",
			"r  rrrrrrrrr         rrrrrrr rr  r  ",
			"                rrrrr               ",
			" s s        sssssssss    s ss  s  ss",
			"rs  rrrrrrrr s  sssssrrrrrr  rrs rs ",
			" s s        sssssssss    s ss  s  ss",
			"                            s       ",
			"                            s       ",
			"r  rrrrrrrrr         rrrrrrr rr rr  ",
			"r  rrrrrrrrr         rrrrrrr rr rr  ",
			"r  rrrrrrrrr         rrrrrrr rr rr  ",
			"r  rrrrrrrrr         rrrrrrr rr rr  ",
			"r  rrrrrrrrr         rrrrrrr rr rr  ",
			"  s                                 ",
			"                            s       ",
			" s           s  sssss          s  s ",
			"r  rrrrrrrrr         rrrrrrr rr  r  ",
			"a                                   ",
			"r       s                    rr  r  ",
			"r      sr                    rr  r  ",
			"r   s  rr            s       rr  r  ",
			"r   rssrr            rss     rr  r  ",
			"r   rrrrr            rrrss   rr  r  ",
			"r   rrrrrsss         rrrrr   rr  r  ",
			"r   rrrrrrrr         rrrrr   rr  r  ",
			"r   rrrrrrrr         rrrrrs  rr  r  ",
			"r   rrrrrrrr         rrrrrr  rr  r  ",
			"r   rrrrrrrr         rrrrrr  rr  r  ",
			"r  srrrrrrrr         rrrrrrs rr sr  ",
			"r  srrrrrrrr         rrrrrrs rr  r  ",
			"r  rrrrrrrrr         rrrrrrr rr rr  ",
			"r  rrrrrrrrr         rrrrrrr rr rr  ",
			"r  rrrrrrrrr         rrrrrrr rr rr  ",
			"r   rrrrrrrr         rrrrrr  rr  r  ",
			"r   rrrrrrrr         rrrrrr  rr  r  ",
			"r  rrrrrrrrr         rrrrrrr rr  r  ",
			"r  rrrrrrrrr         rrrrrrr rr  r  ",
			"                sssss               ",
			"r  rrrrrrrrr         rrrrrrr rr sr  ",
			"r  rrrrrrrrr         rrrrrrr rr  r  ",
			"r  rrrrrrrrr         rrrrrrr rr rr  ",
			"r  rrrrrrrrr         rrrrrrr rr rr  ",
			"                             s      ",
			"r  srrrrrrrr         rrrrrrs rr  r  ",
			"r   rrrrrrrr         rrrrr   rr  r  ",
			"              s                     ",
			"                             s      ",
			"                rrrrr               ",
			" s s        sssssssss    s sss s  ss",
			"r  srrrrrrrr         rrrrrrs rr  r  ",
			" s s        sssssssss    s ss  s  ss",
			" s s        sssssssss    s ss  s  ss",
			" s s        sssssssss    s ss  s  ss",
			" s s        sssssssss    s ss  s  ss",
			" s s        sssssssss    s ss  s  ss",
			" s s        sssssssss    s ss  s  ss",
			" s s        sssssssss    s ss  s  ss",
			" s s        sssssssss    s ss  s  ss",
			" s s        sssssssss    s ss  s  ss",
			" s s        sssssssss    s ss  s  ss",
			" s s        sssssssss    s ss  s  ss",
			" s s        sssssssss    s ss  s  ss",
			" s s        sssssssss    s ss  s  ss",
			" s s        sssssssss      ss  s  ss",
			" s s        sssssssss    s ss  s  ss",
			" s           s  sssss          s  s ",
			" s           s  sssss          s  s ",
			"r  rrrrrrrrr         rrrrrrr rr rr  ",
			" s           s  sssss          s  s ",
			" s           s  sssss          s  s ",
			"r  rrrrrrrrr         rrrrrrr rr sr  ",
			"r  rrrrrrrrr         rrrrrrr rr sr  ",
			"r  rrrrrrrrr         rrrrrrr rr  r  ",
			"r  rrrrrrrrr         rrrrrrr rr rr  ",
			"                             s      ",
			"r  rrrrrrrrr         rrrrrrr rr rr  ",
			"r  rrrrrrrrr         rrrrrrr rr rr  ",
			"                             rr     ",
			"                             s      ",
			"                             rs     ",
			"r      sr                    rr  r  ",
			"r   s  rr            s       rr  r  ",
			"r   rssrr            rss     rr  r  ",
			"r   rssrr            rss     rr  r  ",
			"r   rrrrr            rrrss   rr  r  ",
			"r   rrrrr            rrrss   rr  r  ",
			"r   rrrrr            rrrss   rr  r  ",
			"r   rrrrr            rrrss   rr  r  ",
			"r   rrrrrsss         rrrrr   rr  r  ",
			"r   rrrrrsss         rrrrr   rr  r  ",
			"r   rrrrrrrr         rrrrr   rr  r  ",
			"r   rrrrrrrr         rrrrr   rr  r  ",
			"r   rrrrrrrr         rrrrr   rr  r  ",
			"r   rrrrrrrr         rrrrrr  rr  r  ",
			"                                 r  ",
			"                                 s  ",
			"r  srrrrrrrr         rrrrrrs rr  r  ",
			"r  srrrrrrrr         rrrrrrs rr  r  ",
			"r  rrrrrrrrr         rrrrrrr rr  r  ",
			"r  rrrrrrrrr         rrrrrrr rr  r  ",
			"r  rrrrrrrrr         rrrrrrr rr  r  ",
			"r  rrrrrrrrr         rrrrrrr rr  r  ",
			"r  rrrrrrrrr         rrrrrrr rr rr  ",
			"r  rrrrrrrrr         rrrrrrr rr rr  ",
			" s s        sssssssss    s ss  s  ss",
			"r  rrrrrrrrr         rrrrrrr rr rr  ",
			"                             r      "
		];
		XPathParser.actionTableNumber = [
			" 1 0        /.-,+*)('    & %$  #  \"!",
			"                 J                  ",
			"a  aaaaaaaaa         aaaaaaa aa  a  ",
			"                YYYYY               ",
			" 1 0        /.-,+*)('    & %$  #  \"!",
			"K1  KKKKKKKK .  +*)('KKKKKK  KK# K\" ",
			" 1 0        /.-,+*)('    & %$  #  \"!",
			"                            N       ",
			"                            O       ",
			"e  eeeeeeeee         eeeeeee ee ee  ",
			"f  fffffffff         fffffff ff ff  ",
			"d  ddddddddd         ddddddd dd dd  ",
			"B  BBBBBBBBB         BBBBBBB BB BB  ",
			"A  AAAAAAAAA         AAAAAAA AA AA  ",
			"  P                                 ",
			"                            Q       ",
			" 1           .  +*)('          #  \" ",
			"b  bbbbbbbbb         bbbbbbb bb  b  ",
			"                                    ",
			"!       S                    !!  !  ",
			"\"      T\"                    \"\"  \"  ",
			"$   V  $$            U       $$  $  ",
			"&   &ZY&&            &XW     &&  &  ",
			")   )))))            )))\\[   ))  )  ",
			".   ....._^]         .....   ..  .  ",
			"1   11111111         11111   11  1  ",
			"5   55555555         55555`  55  5  ",
			"7   77777777         777777  77  7  ",
			"9   99999999         999999  99  9  ",
			":  c::::::::         ::::::b :: a:  ",
			"I  fIIIIIIII         IIIIIIe II  I  ",
			"=  =========         ======= == ==  ",
			"?  ?????????         ??????? ?? ??  ",
			"C  CCCCCCCCC         CCCCCCC CC CC  ",
			"J   JJJJJJJJ         JJJJJJ  JJ  J  ",
			"M   MMMMMMMM         MMMMMM  MM  M  ",
			"N  NNNNNNNNN         NNNNNNN NN  N  ",
			"P  PPPPPPPPP         PPPPPPP PP  P  ",
			"                +*)('               ",
			"R  RRRRRRRRR         RRRRRRR RR aR  ",
			"U  UUUUUUUUU         UUUUUUU UU  U  ",
			"Z  ZZZZZZZZZ         ZZZZZZZ ZZ ZZ  ",
			"c  ccccccccc         ccccccc cc cc  ",
			"                             j      ",
			"L  fLLLLLLLL         LLLLLLe LL  L  ",
			"6   66666666         66666   66  6  ",
			"              k                     ",
			"                             l      ",
			"                XXXXX               ",
			" 1 0        /.-,+*)('    & %$m #  \"!",
			"_  f________         ______e __  _  ",
			" 1 0        /.-,+*)('    & %$  #  \"!",
			" 1 0        /.-,+*)('    & %$  #  \"!",
			" 1 0        /.-,+*)('    & %$  #  \"!",
			" 1 0        /.-,+*)('    & %$  #  \"!",
			" 1 0        /.-,+*)('    & %$  #  \"!",
			" 1 0        /.-,+*)('    & %$  #  \"!",
			" 1 0        /.-,+*)('    & %$  #  \"!",
			" 1 0        /.-,+*)('    & %$  #  \"!",
			" 1 0        /.-,+*)('    & %$  #  \"!",
			" 1 0        /.-,+*)('    & %$  #  \"!",
			" 1 0        /.-,+*)('    & %$  #  \"!",
			" 1 0        /.-,+*)('    & %$  #  \"!",
			" 1 0        /.-,+*)('    & %$  #  \"!",
			" 1 0        /.-,+*)('      %$  #  \"!",
			" 1 0        /.-,+*)('    & %$  #  \"!",
			" 1           .  +*)('          #  \" ",
			" 1           .  +*)('          #  \" ",
			">  >>>>>>>>>         >>>>>>> >> >>  ",
			" 1           .  +*)('          #  \" ",
			" 1           .  +*)('          #  \" ",
			"Q  QQQQQQQQQ         QQQQQQQ QQ aQ  ",
			"V  VVVVVVVVV         VVVVVVV VV aV  ",
			"T  TTTTTTTTT         TTTTTTT TT  T  ",
			"@  @@@@@@@@@         @@@@@@@ @@ @@  ",
			"                                   ",
			"[  [[[[[[[[[         [[[[[[[ [[ [[  ",
			"D  DDDDDDDDD         DDDDDDD DD DD  ",
			"                             HH     ",
			"                                   ",
			"                             F     ",
			"#      T#                    ##  #  ",
			"%   V  %%            U       %%  %  ",
			"'   'ZY''            'XW     ''  '  ",
			"(   (ZY((            (XW     ((  (  ",
			"+   +++++            +++\\[   ++  +  ",
			"*   *****            ***\\[   **  *  ",
			"-   -----            ---\\[   --  -  ",
			",   ,,,,,            ,,,\\[   ,,  ,  ",
			"0   00000_^]         00000   00  0  ",
			"/   /////_^]         /////   //  /  ",
			"2   22222222         22222   22  2  ",
			"3   33333333         33333   33  3  ",
			"4   44444444         44444   44  4  ",
			"8   88888888         888888  88  8  ",
			"                                 ^  ",
			"                                   ",
			";  f;;;;;;;;         ;;;;;;e ;;  ;  ",
			"<  f<<<<<<<<         <<<<<<e <<  <  ",
			"O  OOOOOOOOO         OOOOOOO OO  O  ",
			"`  `````````         ``````` ``  `  ",
			"S  SSSSSSSSS         SSSSSSS SS  S  ",
			"W  WWWWWWWWW         WWWWWWW WW  W  ",
			"\\  \\\\\\\\\\\\\\\\\\         \\\\\\\\\\\\\\ \\\\ \\\\  ",
			"E  EEEEEEEEE         EEEEEEE EE EE  ",
			" 1 0        /.-,+*)('    & %$  #  \"!",
			"]  ]]]]]]]]]         ]]]]]]] ]] ]]  ",
			"                             G      "
		];
		XPathParser.gotoTable = [
			"3456789:;<=>?@ AB  CDEFGH IJ ",
			"                             ",
			"                             ",
			"                             ",
			"L456789:;<=>?@ AB  CDEFGH IJ ",
			"            M        EFGH IJ ",
			"       N;<=>?@ AB  CDEFGH IJ ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"            S        EFGH IJ ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"              e              ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                        h  J ",
			"              i          j   ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"o456789:;<=>?@ ABpqCDEFGH IJ ",
			"                             ",
			"  r6789:;<=>?@ AB  CDEFGH IJ ",
			"   s789:;<=>?@ AB  CDEFGH IJ ",
			"    t89:;<=>?@ AB  CDEFGH IJ ",
			"    u89:;<=>?@ AB  CDEFGH IJ ",
			"     v9:;<=>?@ AB  CDEFGH IJ ",
			"     w9:;<=>?@ AB  CDEFGH IJ ",
			"     x9:;<=>?@ AB  CDEFGH IJ ",
			"     y9:;<=>?@ AB  CDEFGH IJ ",
			"      z:;<=>?@ AB  CDEFGH IJ ",
			"      {:;<=>?@ AB  CDEFGH IJ ",
			"       |;<=>?@ AB  CDEFGH IJ ",
			"       };<=>?@ AB  CDEFGH IJ ",
			"       ~;<=>?@ AB  CDEFGH IJ ",
			"         =>?@ AB  CDEFGH IJ ",
			"456789:;<=>?@ AB  CDEFGH IJ",
			"                    EFGH IJ ",
			"                    EFGH IJ ",
			"                             ",
			"                      GH IJ ",
			"                      GH IJ ",
			"              i             ",
			"              i             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"                             ",
			"o456789:;<=>?@ ABqCDEFGH IJ ",
			"                             ",
			"                             "
		];
		XPathParser.productions = [
			[
				1,
				1,
				2
			],
			[
				2,
				1,
				3
			],
			[
				3,
				1,
				4
			],
			[
				3,
				3,
				3,
				-9,
				4
			],
			[
				4,
				1,
				5
			],
			[
				4,
				3,
				4,
				-8,
				5
			],
			[
				5,
				1,
				6
			],
			[
				5,
				3,
				5,
				-22,
				6
			],
			[
				5,
				3,
				5,
				-5,
				6
			],
			[
				6,
				1,
				7
			],
			[
				6,
				3,
				6,
				-23,
				7
			],
			[
				6,
				3,
				6,
				-24,
				7
			],
			[
				6,
				3,
				6,
				-6,
				7
			],
			[
				6,
				3,
				6,
				-7,
				7
			],
			[
				7,
				1,
				8
			],
			[
				7,
				3,
				7,
				-25,
				8
			],
			[
				7,
				3,
				7,
				-26,
				8
			],
			[
				8,
				1,
				9
			],
			[
				8,
				3,
				8,
				-12,
				9
			],
			[
				8,
				3,
				8,
				-11,
				9
			],
			[
				8,
				3,
				8,
				-10,
				9
			],
			[
				9,
				1,
				10
			],
			[
				9,
				2,
				-26,
				9
			],
			[
				10,
				1,
				11
			],
			[
				10,
				3,
				10,
				-27,
				11
			],
			[
				11,
				1,
				12
			],
			[
				11,
				1,
				13
			],
			[
				11,
				3,
				13,
				-28,
				14
			],
			[
				11,
				3,
				13,
				-4,
				14
			],
			[
				13,
				1,
				15
			],
			[
				13,
				2,
				13,
				16
			],
			[
				15,
				1,
				17
			],
			[
				15,
				3,
				-29,
				2,
				-30
			],
			[
				15,
				1,
				-15
			],
			[
				15,
				1,
				-16
			],
			[
				15,
				1,
				18
			],
			[
				18,
				3,
				-13,
				-29,
				-30
			],
			[
				18,
				4,
				-13,
				-29,
				19,
				-30
			],
			[
				19,
				1,
				20
			],
			[
				19,
				3,
				20,
				-31,
				19
			],
			[
				20,
				1,
				2
			],
			[
				12,
				1,
				14
			],
			[
				12,
				1,
				21
			],
			[
				21,
				1,
				-28
			],
			[
				21,
				2,
				-28,
				14
			],
			[
				21,
				1,
				22
			],
			[
				14,
				1,
				23
			],
			[
				14,
				3,
				14,
				-28,
				23
			],
			[
				14,
				1,
				24
			],
			[
				23,
				2,
				25,
				26
			],
			[
				23,
				1,
				26
			],
			[
				23,
				3,
				25,
				26,
				27
			],
			[
				23,
				2,
				26,
				27
			],
			[
				23,
				1,
				28
			],
			[
				27,
				1,
				16
			],
			[
				27,
				2,
				16,
				27
			],
			[
				25,
				2,
				-14,
				-3
			],
			[
				25,
				1,
				-32
			],
			[
				26,
				1,
				29
			],
			[
				26,
				3,
				-20,
				-29,
				-30
			],
			[
				26,
				4,
				-21,
				-29,
				-15,
				-30
			],
			[
				16,
				3,
				-33,
				30,
				-34
			],
			[
				30,
				1,
				2
			],
			[
				22,
				2,
				-4,
				14
			],
			[
				24,
				3,
				14,
				-4,
				23
			],
			[
				28,
				1,
				-35
			],
			[
				28,
				1,
				-2
			],
			[
				17,
				2,
				-36,
				-18
			],
			[
				29,
				1,
				-17
			],
			[
				29,
				1,
				-19
			],
			[
				29,
				1,
				-18
			]
		];
		XPathParser.DOUBLEDOT = 2;
		XPathParser.DOUBLECOLON = 3;
		XPathParser.DOUBLESLASH = 4;
		XPathParser.NOTEQUAL = 5;
		XPathParser.LESSTHANOREQUAL = 6;
		XPathParser.GREATERTHANOREQUAL = 7;
		XPathParser.AND = 8;
		XPathParser.OR = 9;
		XPathParser.MOD = 10;
		XPathParser.DIV = 11;
		XPathParser.MULTIPLYOPERATOR = 12;
		XPathParser.FUNCTIONNAME = 13;
		XPathParser.AXISNAME = 14;
		XPathParser.LITERAL = 15;
		XPathParser.NUMBER = 16;
		XPathParser.ASTERISKNAMETEST = 17;
		XPathParser.QNAME = 18;
		XPathParser.NCNAMECOLONASTERISK = 19;
		XPathParser.NODETYPE = 20;
		XPathParser.PROCESSINGINSTRUCTIONWITHLITERAL = 21;
		XPathParser.EQUALS = 22;
		XPathParser.LESSTHAN = 23;
		XPathParser.GREATERTHAN = 24;
		XPathParser.PLUS = 25;
		XPathParser.MINUS = 26;
		XPathParser.BAR = 27;
		XPathParser.SLASH = 28;
		XPathParser.LEFTPARENTHESIS = 29;
		XPathParser.RIGHTPARENTHESIS = 30;
		XPathParser.COMMA = 31;
		XPathParser.AT = 32;
		XPathParser.LEFTBRACKET = 33;
		XPathParser.RIGHTBRACKET = 34;
		XPathParser.DOT = 35;
		XPathParser.DOLLAR = 36;
		XPathParser.prototype.tokenize = function(s1) {
			var types$1 = [];
			var values = [];
			var s = s1 + "\0";
			var pos$1 = 0;
			var c$1 = s.charAt(pos$1++);
			while (1) {
				while (c$1 == " " || c$1 == "	" || c$1 == "\r" || c$1 == "\n") c$1 = s.charAt(pos$1++);
				if (c$1 == "\0" || pos$1 >= s.length) break;
				if (c$1 == "(") {
					types$1.push(XPathParser.LEFTPARENTHESIS);
					values.push(c$1);
					c$1 = s.charAt(pos$1++);
					continue;
				}
				if (c$1 == ")") {
					types$1.push(XPathParser.RIGHTPARENTHESIS);
					values.push(c$1);
					c$1 = s.charAt(pos$1++);
					continue;
				}
				if (c$1 == "[") {
					types$1.push(XPathParser.LEFTBRACKET);
					values.push(c$1);
					c$1 = s.charAt(pos$1++);
					continue;
				}
				if (c$1 == "]") {
					types$1.push(XPathParser.RIGHTBRACKET);
					values.push(c$1);
					c$1 = s.charAt(pos$1++);
					continue;
				}
				if (c$1 == "@") {
					types$1.push(XPathParser.AT);
					values.push(c$1);
					c$1 = s.charAt(pos$1++);
					continue;
				}
				if (c$1 == ",") {
					types$1.push(XPathParser.COMMA);
					values.push(c$1);
					c$1 = s.charAt(pos$1++);
					continue;
				}
				if (c$1 == "|") {
					types$1.push(XPathParser.BAR);
					values.push(c$1);
					c$1 = s.charAt(pos$1++);
					continue;
				}
				if (c$1 == "+") {
					types$1.push(XPathParser.PLUS);
					values.push(c$1);
					c$1 = s.charAt(pos$1++);
					continue;
				}
				if (c$1 == "-") {
					types$1.push(XPathParser.MINUS);
					values.push(c$1);
					c$1 = s.charAt(pos$1++);
					continue;
				}
				if (c$1 == "=") {
					types$1.push(XPathParser.EQUALS);
					values.push(c$1);
					c$1 = s.charAt(pos$1++);
					continue;
				}
				if (c$1 == "$") {
					types$1.push(XPathParser.DOLLAR);
					values.push(c$1);
					c$1 = s.charAt(pos$1++);
					continue;
				}
				if (c$1 == ".") {
					c$1 = s.charAt(pos$1++);
					if (c$1 == ".") {
						types$1.push(XPathParser.DOUBLEDOT);
						values.push("..");
						c$1 = s.charAt(pos$1++);
						continue;
					}
					if (c$1 >= "0" && c$1 <= "9") {
						var number$2 = "." + c$1;
						c$1 = s.charAt(pos$1++);
						while (c$1 >= "0" && c$1 <= "9") {
							number$2 += c$1;
							c$1 = s.charAt(pos$1++);
						}
						types$1.push(XPathParser.NUMBER);
						values.push(number$2);
						continue;
					}
					types$1.push(XPathParser.DOT);
					values.push(".");
					continue;
				}
				if (c$1 == "'" || c$1 == "\"") {
					var delimiter = c$1;
					var literal$1 = "";
					while (pos$1 < s.length && (c$1 = s.charAt(pos$1)) !== delimiter) {
						literal$1 += c$1;
						pos$1 += 1;
					}
					if (c$1 !== delimiter) throw XPathException.fromMessage("Unterminated string literal: " + delimiter + literal$1);
					pos$1 += 1;
					types$1.push(XPathParser.LITERAL);
					values.push(literal$1);
					c$1 = s.charAt(pos$1++);
					continue;
				}
				if (c$1 >= "0" && c$1 <= "9") {
					var number$2 = c$1;
					c$1 = s.charAt(pos$1++);
					while (c$1 >= "0" && c$1 <= "9") {
						number$2 += c$1;
						c$1 = s.charAt(pos$1++);
					}
					if (c$1 == ".") {
						if (s.charAt(pos$1) >= "0" && s.charAt(pos$1) <= "9") {
							number$2 += c$1;
							number$2 += s.charAt(pos$1++);
							c$1 = s.charAt(pos$1++);
							while (c$1 >= "0" && c$1 <= "9") {
								number$2 += c$1;
								c$1 = s.charAt(pos$1++);
							}
						}
					}
					types$1.push(XPathParser.NUMBER);
					values.push(number$2);
					continue;
				}
				if (c$1 == "*") {
					if (types$1.length > 0) {
						var last$1 = types$1[types$1.length - 1];
						if (last$1 != XPathParser.AT && last$1 != XPathParser.DOUBLECOLON && last$1 != XPathParser.LEFTPARENTHESIS && last$1 != XPathParser.LEFTBRACKET && last$1 != XPathParser.AND && last$1 != XPathParser.OR && last$1 != XPathParser.MOD && last$1 != XPathParser.DIV && last$1 != XPathParser.MULTIPLYOPERATOR && last$1 != XPathParser.SLASH && last$1 != XPathParser.DOUBLESLASH && last$1 != XPathParser.BAR && last$1 != XPathParser.PLUS && last$1 != XPathParser.MINUS && last$1 != XPathParser.EQUALS && last$1 != XPathParser.NOTEQUAL && last$1 != XPathParser.LESSTHAN && last$1 != XPathParser.LESSTHANOREQUAL && last$1 != XPathParser.GREATERTHAN && last$1 != XPathParser.GREATERTHANOREQUAL) {
							types$1.push(XPathParser.MULTIPLYOPERATOR);
							values.push(c$1);
							c$1 = s.charAt(pos$1++);
							continue;
						}
					}
					types$1.push(XPathParser.ASTERISKNAMETEST);
					values.push(c$1);
					c$1 = s.charAt(pos$1++);
					continue;
				}
				if (c$1 == ":") {
					if (s.charAt(pos$1) == ":") {
						types$1.push(XPathParser.DOUBLECOLON);
						values.push("::");
						pos$1++;
						c$1 = s.charAt(pos$1++);
						continue;
					}
				}
				if (c$1 == "/") {
					c$1 = s.charAt(pos$1++);
					if (c$1 == "/") {
						types$1.push(XPathParser.DOUBLESLASH);
						values.push("//");
						c$1 = s.charAt(pos$1++);
						continue;
					}
					types$1.push(XPathParser.SLASH);
					values.push("/");
					continue;
				}
				if (c$1 == "!") {
					if (s.charAt(pos$1) == "=") {
						types$1.push(XPathParser.NOTEQUAL);
						values.push("!=");
						pos$1++;
						c$1 = s.charAt(pos$1++);
						continue;
					}
				}
				if (c$1 == "<") {
					if (s.charAt(pos$1) == "=") {
						types$1.push(XPathParser.LESSTHANOREQUAL);
						values.push("<=");
						pos$1++;
						c$1 = s.charAt(pos$1++);
						continue;
					}
					types$1.push(XPathParser.LESSTHAN);
					values.push("<");
					c$1 = s.charAt(pos$1++);
					continue;
				}
				if (c$1 == ">") {
					if (s.charAt(pos$1) == "=") {
						types$1.push(XPathParser.GREATERTHANOREQUAL);
						values.push(">=");
						pos$1++;
						c$1 = s.charAt(pos$1++);
						continue;
					}
					types$1.push(XPathParser.GREATERTHAN);
					values.push(">");
					c$1 = s.charAt(pos$1++);
					continue;
				}
				if (c$1 == "_" || Utilities.isLetter(c$1.charCodeAt(0))) {
					var name$1 = c$1;
					c$1 = s.charAt(pos$1++);
					while (Utilities.isNCNameChar(c$1.charCodeAt(0))) {
						name$1 += c$1;
						c$1 = s.charAt(pos$1++);
					}
					if (types$1.length > 0) {
						var last$1 = types$1[types$1.length - 1];
						if (last$1 != XPathParser.AT && last$1 != XPathParser.DOUBLECOLON && last$1 != XPathParser.LEFTPARENTHESIS && last$1 != XPathParser.LEFTBRACKET && last$1 != XPathParser.AND && last$1 != XPathParser.OR && last$1 != XPathParser.MOD && last$1 != XPathParser.DIV && last$1 != XPathParser.MULTIPLYOPERATOR && last$1 != XPathParser.SLASH && last$1 != XPathParser.DOUBLESLASH && last$1 != XPathParser.BAR && last$1 != XPathParser.PLUS && last$1 != XPathParser.MINUS && last$1 != XPathParser.EQUALS && last$1 != XPathParser.NOTEQUAL && last$1 != XPathParser.LESSTHAN && last$1 != XPathParser.LESSTHANOREQUAL && last$1 != XPathParser.GREATERTHAN && last$1 != XPathParser.GREATERTHANOREQUAL) {
							if (name$1 == "and") {
								types$1.push(XPathParser.AND);
								values.push(name$1);
								continue;
							}
							if (name$1 == "or") {
								types$1.push(XPathParser.OR);
								values.push(name$1);
								continue;
							}
							if (name$1 == "mod") {
								types$1.push(XPathParser.MOD);
								values.push(name$1);
								continue;
							}
							if (name$1 == "div") {
								types$1.push(XPathParser.DIV);
								values.push(name$1);
								continue;
							}
						}
					}
					if (c$1 == ":") {
						if (s.charAt(pos$1) == "*") {
							types$1.push(XPathParser.NCNAMECOLONASTERISK);
							values.push(name$1 + ":*");
							pos$1++;
							c$1 = s.charAt(pos$1++);
							continue;
						}
						if (s.charAt(pos$1) == "_" || Utilities.isLetter(s.charCodeAt(pos$1))) {
							name$1 += ":";
							c$1 = s.charAt(pos$1++);
							while (Utilities.isNCNameChar(c$1.charCodeAt(0))) {
								name$1 += c$1;
								c$1 = s.charAt(pos$1++);
							}
							if (c$1 == "(") {
								types$1.push(XPathParser.FUNCTIONNAME);
								values.push(name$1);
								continue;
							}
							types$1.push(XPathParser.QNAME);
							values.push(name$1);
							continue;
						}
						if (s.charAt(pos$1) == ":") {
							types$1.push(XPathParser.AXISNAME);
							values.push(name$1);
							continue;
						}
					}
					if (c$1 == "(") {
						if (name$1 == "comment" || name$1 == "text" || name$1 == "node") {
							types$1.push(XPathParser.NODETYPE);
							values.push(name$1);
							continue;
						}
						if (name$1 == "processing-instruction") {
							if (s.charAt(pos$1) == ")") types$1.push(XPathParser.NODETYPE);
							else types$1.push(XPathParser.PROCESSINGINSTRUCTIONWITHLITERAL);
							values.push(name$1);
							continue;
						}
						types$1.push(XPathParser.FUNCTIONNAME);
						values.push(name$1);
						continue;
					}
					types$1.push(XPathParser.QNAME);
					values.push(name$1);
					continue;
				}
				throw new Error("Unexpected character " + c$1);
			}
			types$1.push(1);
			values.push("[EOF]");
			return [types$1, values];
		};
		XPathParser.SHIFT = "s";
		XPathParser.REDUCE = "r";
		XPathParser.ACCEPT = "a";
		XPathParser.prototype.parse = function(s) {
			if (!s) throw new Error("XPath expression unspecified.");
			if (typeof s !== "string") throw new Error("XPath expression must be a string.");
			var types$1;
			var values;
			var res = this.tokenize(s);
			if (res == void 0) return;
			types$1 = res[0];
			values = res[1];
			var tokenPos = 0;
			var state = [];
			var tokenType = [];
			var tokenValue = [];
			var s;
			var a;
			var t;
			state.push(0);
			tokenType.push(1);
			tokenValue.push("_S");
			a = types$1[tokenPos];
			t = values[tokenPos++];
			while (1) {
				s = state[state.length - 1];
				switch (XPathParser.actionTable[s].charAt(a - 1)) {
					case XPathParser.SHIFT:
						tokenType.push(-a);
						tokenValue.push(t);
						state.push(XPathParser.actionTableNumber[s].charCodeAt(a - 1) - 32);
						a = types$1[tokenPos];
						t = values[tokenPos++];
						break;
					case XPathParser.REDUCE:
						var num = XPathParser.productions[XPathParser.actionTableNumber[s].charCodeAt(a - 1) - 32][1];
						var rhs = [];
						for (var i$1 = 0; i$1 < num; i$1++) {
							tokenType.pop();
							rhs.unshift(tokenValue.pop());
							state.pop();
						}
						var s_ = state[state.length - 1];
						tokenType.push(XPathParser.productions[XPathParser.actionTableNumber[s].charCodeAt(a - 1) - 32][0]);
						if (this.reduceActions[XPathParser.actionTableNumber[s].charCodeAt(a - 1) - 32] == void 0) tokenValue.push(rhs[0]);
						else tokenValue.push(this.reduceActions[XPathParser.actionTableNumber[s].charCodeAt(a - 1) - 32](rhs));
						state.push(XPathParser.gotoTable[s_].charCodeAt(XPathParser.productions[XPathParser.actionTableNumber[s].charCodeAt(a - 1) - 32][0] - 2) - 33);
						break;
					case XPathParser.ACCEPT: return new XPath(tokenValue.pop());
					default: throw new Error("XPath parse error");
				}
			}
		};
		XPath.prototype = /* @__PURE__ */ new Object();
		XPath.prototype.constructor = XPath;
		XPath.superclass = Object.prototype;
		function XPath(e) {
			this.expression = e;
		}
		XPath.prototype.toString = function() {
			return this.expression.toString();
		};
		function setIfUnset(obj, prop$1, value) {
			if (!(prop$1 in obj)) obj[prop$1] = value;
		}
		XPath.prototype.evaluate = function(c$1) {
			var node$1 = c$1.expressionContextNode;
			if (!(isNil(node$1) || isNodeLike(node$1))) throw new Error("Context node does not appear to be a valid DOM node.");
			var size = isNil(c$1.expressionContextSize) ? 1 : c$1.expressionContextSize;
			var position$1 = isNil(c$1.expressionContextPosition) ? 1 : c$1.expressionContextPosition;
			if (!isPositiveInteger(size) || !isPositiveInteger(position$1) || position$1 > size) throw new Error("Context position and size must be positive integers, with position no greater than size.");
			c$1.contextNode = c$1.expressionContextNode;
			c$1.contextSize = size;
			c$1.contextPosition = position$1;
			if (c$1.isHtml) {
				setIfUnset(c$1, "caseInsensitive", true);
				setIfUnset(c$1, "allowAnyNamespaceForNoPrefix", true);
			}
			setIfUnset(c$1, "caseInsensitive", false);
			return this.expression.evaluate(c$1);
		};
		XPath.XML_NAMESPACE_URI = "http://www.w3.org/XML/1998/namespace";
		XPath.XMLNS_NAMESPACE_URI = "http://www.w3.org/2000/xmlns/";
		Expression.prototype = /* @__PURE__ */ new Object();
		Expression.prototype.constructor = Expression;
		Expression.superclass = Object.prototype;
		function Expression() {}
		Expression.prototype.init = function() {};
		Expression.prototype.toString = function() {
			return "<Expression>";
		};
		Expression.prototype.evaluate = function(c$1) {
			throw new Error("Could not evaluate expression.");
		};
		UnaryOperation.prototype = new Expression();
		UnaryOperation.prototype.constructor = UnaryOperation;
		UnaryOperation.superclass = Expression.prototype;
		function UnaryOperation(rhs) {
			if (arguments.length > 0) this.init(rhs);
		}
		UnaryOperation.prototype.init = function(rhs) {
			this.rhs = rhs;
		};
		UnaryMinusOperation.prototype = new UnaryOperation();
		UnaryMinusOperation.prototype.constructor = UnaryMinusOperation;
		UnaryMinusOperation.superclass = UnaryOperation.prototype;
		function UnaryMinusOperation(rhs) {
			if (arguments.length > 0) this.init(rhs);
		}
		UnaryMinusOperation.prototype.init = function(rhs) {
			UnaryMinusOperation.superclass.init.call(this, rhs);
		};
		UnaryMinusOperation.prototype.evaluate = function(c$1) {
			return this.rhs.evaluate(c$1).number().negate();
		};
		UnaryMinusOperation.prototype.toString = function() {
			return "-" + this.rhs.toString();
		};
		BinaryOperation.prototype = new Expression();
		BinaryOperation.prototype.constructor = BinaryOperation;
		BinaryOperation.superclass = Expression.prototype;
		function BinaryOperation(lhs, rhs) {
			if (arguments.length > 0) this.init(lhs, rhs);
		}
		BinaryOperation.prototype.init = function(lhs, rhs) {
			this.lhs = lhs;
			this.rhs = rhs;
		};
		OrOperation.prototype = new BinaryOperation();
		OrOperation.prototype.constructor = OrOperation;
		OrOperation.superclass = BinaryOperation.prototype;
		function OrOperation(lhs, rhs) {
			if (arguments.length > 0) this.init(lhs, rhs);
		}
		OrOperation.prototype.init = function(lhs, rhs) {
			OrOperation.superclass.init.call(this, lhs, rhs);
		};
		OrOperation.prototype.toString = function() {
			return "(" + this.lhs.toString() + " or " + this.rhs.toString() + ")";
		};
		OrOperation.prototype.evaluate = function(c$1) {
			var b = this.lhs.evaluate(c$1).bool();
			if (b.booleanValue()) return b;
			return this.rhs.evaluate(c$1).bool();
		};
		AndOperation.prototype = new BinaryOperation();
		AndOperation.prototype.constructor = AndOperation;
		AndOperation.superclass = BinaryOperation.prototype;
		function AndOperation(lhs, rhs) {
			if (arguments.length > 0) this.init(lhs, rhs);
		}
		AndOperation.prototype.init = function(lhs, rhs) {
			AndOperation.superclass.init.call(this, lhs, rhs);
		};
		AndOperation.prototype.toString = function() {
			return "(" + this.lhs.toString() + " and " + this.rhs.toString() + ")";
		};
		AndOperation.prototype.evaluate = function(c$1) {
			var b = this.lhs.evaluate(c$1).bool();
			if (!b.booleanValue()) return b;
			return this.rhs.evaluate(c$1).bool();
		};
		EqualsOperation.prototype = new BinaryOperation();
		EqualsOperation.prototype.constructor = EqualsOperation;
		EqualsOperation.superclass = BinaryOperation.prototype;
		function EqualsOperation(lhs, rhs) {
			if (arguments.length > 0) this.init(lhs, rhs);
		}
		EqualsOperation.prototype.init = function(lhs, rhs) {
			EqualsOperation.superclass.init.call(this, lhs, rhs);
		};
		EqualsOperation.prototype.toString = function() {
			return "(" + this.lhs.toString() + " = " + this.rhs.toString() + ")";
		};
		EqualsOperation.prototype.evaluate = function(c$1) {
			return this.lhs.evaluate(c$1).equals(this.rhs.evaluate(c$1));
		};
		NotEqualOperation.prototype = new BinaryOperation();
		NotEqualOperation.prototype.constructor = NotEqualOperation;
		NotEqualOperation.superclass = BinaryOperation.prototype;
		function NotEqualOperation(lhs, rhs) {
			if (arguments.length > 0) this.init(lhs, rhs);
		}
		NotEqualOperation.prototype.init = function(lhs, rhs) {
			NotEqualOperation.superclass.init.call(this, lhs, rhs);
		};
		NotEqualOperation.prototype.toString = function() {
			return "(" + this.lhs.toString() + " != " + this.rhs.toString() + ")";
		};
		NotEqualOperation.prototype.evaluate = function(c$1) {
			return this.lhs.evaluate(c$1).notequal(this.rhs.evaluate(c$1));
		};
		LessThanOperation.prototype = new BinaryOperation();
		LessThanOperation.prototype.constructor = LessThanOperation;
		LessThanOperation.superclass = BinaryOperation.prototype;
		function LessThanOperation(lhs, rhs) {
			if (arguments.length > 0) this.init(lhs, rhs);
		}
		LessThanOperation.prototype.init = function(lhs, rhs) {
			LessThanOperation.superclass.init.call(this, lhs, rhs);
		};
		LessThanOperation.prototype.evaluate = function(c$1) {
			return this.lhs.evaluate(c$1).lessthan(this.rhs.evaluate(c$1));
		};
		LessThanOperation.prototype.toString = function() {
			return "(" + this.lhs.toString() + " < " + this.rhs.toString() + ")";
		};
		GreaterThanOperation.prototype = new BinaryOperation();
		GreaterThanOperation.prototype.constructor = GreaterThanOperation;
		GreaterThanOperation.superclass = BinaryOperation.prototype;
		function GreaterThanOperation(lhs, rhs) {
			if (arguments.length > 0) this.init(lhs, rhs);
		}
		GreaterThanOperation.prototype.init = function(lhs, rhs) {
			GreaterThanOperation.superclass.init.call(this, lhs, rhs);
		};
		GreaterThanOperation.prototype.evaluate = function(c$1) {
			return this.lhs.evaluate(c$1).greaterthan(this.rhs.evaluate(c$1));
		};
		GreaterThanOperation.prototype.toString = function() {
			return "(" + this.lhs.toString() + " > " + this.rhs.toString() + ")";
		};
		LessThanOrEqualOperation.prototype = new BinaryOperation();
		LessThanOrEqualOperation.prototype.constructor = LessThanOrEqualOperation;
		LessThanOrEqualOperation.superclass = BinaryOperation.prototype;
		function LessThanOrEqualOperation(lhs, rhs) {
			if (arguments.length > 0) this.init(lhs, rhs);
		}
		LessThanOrEqualOperation.prototype.init = function(lhs, rhs) {
			LessThanOrEqualOperation.superclass.init.call(this, lhs, rhs);
		};
		LessThanOrEqualOperation.prototype.evaluate = function(c$1) {
			return this.lhs.evaluate(c$1).lessthanorequal(this.rhs.evaluate(c$1));
		};
		LessThanOrEqualOperation.prototype.toString = function() {
			return "(" + this.lhs.toString() + " <= " + this.rhs.toString() + ")";
		};
		GreaterThanOrEqualOperation.prototype = new BinaryOperation();
		GreaterThanOrEqualOperation.prototype.constructor = GreaterThanOrEqualOperation;
		GreaterThanOrEqualOperation.superclass = BinaryOperation.prototype;
		function GreaterThanOrEqualOperation(lhs, rhs) {
			if (arguments.length > 0) this.init(lhs, rhs);
		}
		GreaterThanOrEqualOperation.prototype.init = function(lhs, rhs) {
			GreaterThanOrEqualOperation.superclass.init.call(this, lhs, rhs);
		};
		GreaterThanOrEqualOperation.prototype.evaluate = function(c$1) {
			return this.lhs.evaluate(c$1).greaterthanorequal(this.rhs.evaluate(c$1));
		};
		GreaterThanOrEqualOperation.prototype.toString = function() {
			return "(" + this.lhs.toString() + " >= " + this.rhs.toString() + ")";
		};
		PlusOperation.prototype = new BinaryOperation();
		PlusOperation.prototype.constructor = PlusOperation;
		PlusOperation.superclass = BinaryOperation.prototype;
		function PlusOperation(lhs, rhs) {
			if (arguments.length > 0) this.init(lhs, rhs);
		}
		PlusOperation.prototype.init = function(lhs, rhs) {
			PlusOperation.superclass.init.call(this, lhs, rhs);
		};
		PlusOperation.prototype.evaluate = function(c$1) {
			return this.lhs.evaluate(c$1).number().plus(this.rhs.evaluate(c$1).number());
		};
		PlusOperation.prototype.toString = function() {
			return "(" + this.lhs.toString() + " + " + this.rhs.toString() + ")";
		};
		MinusOperation.prototype = new BinaryOperation();
		MinusOperation.prototype.constructor = MinusOperation;
		MinusOperation.superclass = BinaryOperation.prototype;
		function MinusOperation(lhs, rhs) {
			if (arguments.length > 0) this.init(lhs, rhs);
		}
		MinusOperation.prototype.init = function(lhs, rhs) {
			MinusOperation.superclass.init.call(this, lhs, rhs);
		};
		MinusOperation.prototype.evaluate = function(c$1) {
			return this.lhs.evaluate(c$1).number().minus(this.rhs.evaluate(c$1).number());
		};
		MinusOperation.prototype.toString = function() {
			return "(" + this.lhs.toString() + " - " + this.rhs.toString() + ")";
		};
		MultiplyOperation.prototype = new BinaryOperation();
		MultiplyOperation.prototype.constructor = MultiplyOperation;
		MultiplyOperation.superclass = BinaryOperation.prototype;
		function MultiplyOperation(lhs, rhs) {
			if (arguments.length > 0) this.init(lhs, rhs);
		}
		MultiplyOperation.prototype.init = function(lhs, rhs) {
			MultiplyOperation.superclass.init.call(this, lhs, rhs);
		};
		MultiplyOperation.prototype.evaluate = function(c$1) {
			return this.lhs.evaluate(c$1).number().multiply(this.rhs.evaluate(c$1).number());
		};
		MultiplyOperation.prototype.toString = function() {
			return "(" + this.lhs.toString() + " * " + this.rhs.toString() + ")";
		};
		DivOperation.prototype = new BinaryOperation();
		DivOperation.prototype.constructor = DivOperation;
		DivOperation.superclass = BinaryOperation.prototype;
		function DivOperation(lhs, rhs) {
			if (arguments.length > 0) this.init(lhs, rhs);
		}
		DivOperation.prototype.init = function(lhs, rhs) {
			DivOperation.superclass.init.call(this, lhs, rhs);
		};
		DivOperation.prototype.evaluate = function(c$1) {
			return this.lhs.evaluate(c$1).number().div(this.rhs.evaluate(c$1).number());
		};
		DivOperation.prototype.toString = function() {
			return "(" + this.lhs.toString() + " div " + this.rhs.toString() + ")";
		};
		ModOperation.prototype = new BinaryOperation();
		ModOperation.prototype.constructor = ModOperation;
		ModOperation.superclass = BinaryOperation.prototype;
		function ModOperation(lhs, rhs) {
			if (arguments.length > 0) this.init(lhs, rhs);
		}
		ModOperation.prototype.init = function(lhs, rhs) {
			ModOperation.superclass.init.call(this, lhs, rhs);
		};
		ModOperation.prototype.evaluate = function(c$1) {
			return this.lhs.evaluate(c$1).number().mod(this.rhs.evaluate(c$1).number());
		};
		ModOperation.prototype.toString = function() {
			return "(" + this.lhs.toString() + " mod " + this.rhs.toString() + ")";
		};
		BarOperation.prototype = new BinaryOperation();
		BarOperation.prototype.constructor = BarOperation;
		BarOperation.superclass = BinaryOperation.prototype;
		function BarOperation(lhs, rhs) {
			if (arguments.length > 0) this.init(lhs, rhs);
		}
		BarOperation.prototype.init = function(lhs, rhs) {
			BarOperation.superclass.init.call(this, lhs, rhs);
		};
		BarOperation.prototype.evaluate = function(c$1) {
			return this.lhs.evaluate(c$1).nodeset().union(this.rhs.evaluate(c$1).nodeset());
		};
		BarOperation.prototype.toString = function() {
			return map$1(toString$1, [this.lhs, this.rhs]).join(" | ");
		};
		PathExpr.prototype = new Expression();
		PathExpr.prototype.constructor = PathExpr;
		PathExpr.superclass = Expression.prototype;
		function PathExpr(filter$4, filterPreds, locpath) {
			if (arguments.length > 0) this.init(filter$4, filterPreds, locpath);
		}
		PathExpr.prototype.init = function(filter$4, filterPreds, locpath) {
			PathExpr.superclass.init.call(this);
			this.filter = filter$4;
			this.filterPredicates = filterPreds;
			this.locationPath = locpath;
		};
		/**
		* Returns the topmost node of the tree containing node
		*/
		function findRoot(node$1) {
			while (node$1 && node$1.parentNode) node$1 = node$1.parentNode;
			return node$1;
		}
		var applyPredicates = function(predicates, c$1, nodes, reverse) {
			if (predicates.length === 0) return nodes;
			var ctx = c$1.extend({});
			return reduce(function(inNodes, pred) {
				ctx.contextSize = inNodes.length;
				return filter$3(function(node$1, i$1) {
					ctx.contextNode = node$1;
					ctx.contextPosition = i$1 + 1;
					return PathExpr.predicateMatches(pred, ctx);
				}, inNodes);
			}, sortNodes(nodes, reverse), predicates);
		};
		PathExpr.getRoot = function(xpc, nodes) {
			var firstNode = nodes[0];
			if (firstNode && firstNode.nodeType === NodeTypes.DOCUMENT_NODE) return firstNode;
			if (xpc.virtualRoot) return xpc.virtualRoot;
			if (!firstNode) throw new Error("Context node not found when determining document root.");
			var ownerDoc = firstNode.ownerDocument;
			if (ownerDoc) return ownerDoc;
			var n = firstNode;
			while (n.parentNode != null) n = n.parentNode;
			return n;
		};
		var getPrefixForNamespaceNode = function(attrNode) {
			var nm = String(attrNode.name);
			if (nm === "xmlns") return "";
			if (nm.substring(0, 6) === "xmlns:") return nm.substring(6, nm.length);
			return null;
		};
		PathExpr.applyStep = function(step, xpc, node$1) {
			if (!node$1) throw new Error("Context node not found when evaluating XPath step: " + step);
			var newNodes = [];
			xpc.contextNode = node$1;
			switch (step.axis) {
				case Step.ANCESTOR:
					if (xpc.contextNode === xpc.virtualRoot) break;
					var m;
					if (xpc.contextNode.nodeType == NodeTypes.ATTRIBUTE_NODE) m = PathExpr.getOwnerElement(xpc.contextNode);
					else m = xpc.contextNode.parentNode;
					while (m != null) {
						if (step.nodeTest.matches(m, xpc)) newNodes.push(m);
						if (m === xpc.virtualRoot) break;
						m = m.parentNode;
					}
					break;
				case Step.ANCESTORORSELF:
					for (var m = xpc.contextNode; m != null; m = m.nodeType == NodeTypes.ATTRIBUTE_NODE ? PathExpr.getOwnerElement(m) : m.parentNode) {
						if (step.nodeTest.matches(m, xpc)) newNodes.push(m);
						if (m === xpc.virtualRoot) break;
					}
					break;
				case Step.ATTRIBUTE:
					var nnm = xpc.contextNode.attributes;
					if (nnm != null) for (var k = 0; k < nnm.length; k++) {
						var m = nnm.item(k);
						if (step.nodeTest.matches(m, xpc)) newNodes.push(m);
					}
					break;
				case Step.CHILD:
					for (var m = xpc.contextNode.firstChild; m != null; m = m.nextSibling) if (step.nodeTest.matches(m, xpc)) newNodes.push(m);
					break;
				case Step.DESCENDANT:
					var st = [xpc.contextNode.firstChild];
					while (st.length > 0) for (var m = st.pop(); m != null;) {
						if (step.nodeTest.matches(m, xpc)) newNodes.push(m);
						if (m.firstChild != null) {
							st.push(m.nextSibling);
							m = m.firstChild;
						} else m = m.nextSibling;
					}
					break;
				case Step.DESCENDANTORSELF:
					if (step.nodeTest.matches(xpc.contextNode, xpc)) newNodes.push(xpc.contextNode);
					var st = [xpc.contextNode.firstChild];
					while (st.length > 0) for (var m = st.pop(); m != null;) {
						if (step.nodeTest.matches(m, xpc)) newNodes.push(m);
						if (m.firstChild != null) {
							st.push(m.nextSibling);
							m = m.firstChild;
						} else m = m.nextSibling;
					}
					break;
				case Step.FOLLOWING:
					if (xpc.contextNode === xpc.virtualRoot) break;
					var st = [];
					if (xpc.contextNode.firstChild != null) st.unshift(xpc.contextNode.firstChild);
					else st.unshift(xpc.contextNode.nextSibling);
					for (var m = xpc.contextNode.parentNode; m != null && m.nodeType != NodeTypes.DOCUMENT_NODE && m !== xpc.virtualRoot; m = m.parentNode) st.unshift(m.nextSibling);
					do
						for (var m = st.pop(); m != null;) {
							if (step.nodeTest.matches(m, xpc)) newNodes.push(m);
							if (m.firstChild != null) {
								st.push(m.nextSibling);
								m = m.firstChild;
							} else m = m.nextSibling;
						}
					while (st.length > 0);
					break;
				case Step.FOLLOWINGSIBLING:
					if (xpc.contextNode === xpc.virtualRoot) break;
					for (var m = xpc.contextNode.nextSibling; m != null; m = m.nextSibling) if (step.nodeTest.matches(m, xpc)) newNodes.push(m);
					break;
				case Step.NAMESPACE:
					var nodes = {};
					if (xpc.contextNode.nodeType == NodeTypes.ELEMENT_NODE) {
						nodes["xml"] = new XPathNamespace("xml", null, XPath.XML_NAMESPACE_URI, xpc.contextNode);
						for (var m = xpc.contextNode; m != null && m.nodeType == NodeTypes.ELEMENT_NODE; m = m.parentNode) for (var k = 0; k < m.attributes.length; k++) {
							var attr$1 = m.attributes.item(k);
							var pre = getPrefixForNamespaceNode(attr$1);
							if (pre != null && nodes[pre] == void 0) nodes[pre] = new XPathNamespace(pre, attr$1, attr$1.value, xpc.contextNode);
						}
						for (var pre in nodes) {
							var node$1 = nodes[pre];
							if (step.nodeTest.matches(node$1, xpc)) newNodes.push(node$1);
						}
					}
					break;
				case Step.PARENT:
					m = null;
					if (xpc.contextNode !== xpc.virtualRoot) if (xpc.contextNode.nodeType == NodeTypes.ATTRIBUTE_NODE) m = PathExpr.getOwnerElement(xpc.contextNode);
					else m = xpc.contextNode.parentNode;
					if (m != null && step.nodeTest.matches(m, xpc)) newNodes.push(m);
					break;
				case Step.PRECEDING:
					var st;
					if (xpc.virtualRoot != null) st = [xpc.virtualRoot];
					else st = [findRoot(xpc.contextNode)];
					outer: while (st.length > 0) for (var m = st.pop(); m != null;) {
						if (m == xpc.contextNode) break outer;
						if (step.nodeTest.matches(m, xpc)) newNodes.unshift(m);
						if (m.firstChild != null) {
							st.push(m.nextSibling);
							m = m.firstChild;
						} else m = m.nextSibling;
					}
					break;
				case Step.PRECEDINGSIBLING:
					if (xpc.contextNode === xpc.virtualRoot) break;
					for (var m = xpc.contextNode.previousSibling; m != null; m = m.previousSibling) if (step.nodeTest.matches(m, xpc)) newNodes.push(m);
					break;
				case Step.SELF:
					if (step.nodeTest.matches(xpc.contextNode, xpc)) newNodes.push(xpc.contextNode);
					break;
				default:
			}
			return newNodes;
		};
		function applyStepWithPredicates(step, xpc, node$1) {
			return applyPredicates(step.predicates, xpc, PathExpr.applyStep(step, xpc, node$1), includes(REVERSE_AXES, step.axis));
		}
		function applyStepToNodes(context, nodes, step) {
			return flatten(map$1(applyStepWithPredicates.bind(null, step, context), nodes));
		}
		PathExpr.applySteps = function(steps, xpc, nodes) {
			return reduce(applyStepToNodes.bind(null, xpc), nodes, steps);
		};
		PathExpr.prototype.applyFilter = function(c$1, xpc) {
			if (!this.filter) return { nodes: [c$1.contextNode] };
			var ns = this.filter.evaluate(c$1);
			if (!Utilities.instance_of(ns, XNodeSet)) {
				if (this.filterPredicates != null && this.filterPredicates.length > 0 || this.locationPath != null) throw new Error("Path expression filter must evaluate to a nodeset if predicates or location path are used");
				return { nonNodes: ns };
			}
			return { nodes: applyPredicates(this.filterPredicates || [], xpc, ns.toUnsortedArray(), false) };
		};
		PathExpr.applyLocationPath = function(locationPath, xpc, nodes) {
			if (!locationPath) return nodes;
			var startNodes = locationPath.absolute ? [PathExpr.getRoot(xpc, nodes)] : nodes;
			return PathExpr.applySteps(locationPath.steps, xpc, startNodes);
		};
		PathExpr.prototype.evaluate = function(c$1) {
			var xpc = assign$1(new XPathContext(), c$1);
			var filterResult = this.applyFilter(c$1, xpc);
			if ("nonNodes" in filterResult) return filterResult.nonNodes;
			var ns = new XNodeSet();
			ns.addArray(PathExpr.applyLocationPath(this.locationPath, xpc, filterResult.nodes));
			return ns;
		};
		PathExpr.predicateMatches = function(pred, c$1) {
			var res = pred.evaluate(c$1);
			return Utilities.instance_of(res, XNumber) ? c$1.contextPosition === res.numberValue() : res.booleanValue();
		};
		PathExpr.predicateString = function(predicate) {
			return wrap$1("[", "]", predicate.toString());
		};
		PathExpr.predicatesString = function(predicates) {
			return join("", map$1(PathExpr.predicateString, predicates));
		};
		PathExpr.prototype.toString = function() {
			if (this.filter != void 0) {
				var filterStr = toString$1(this.filter);
				if (Utilities.instance_of(this.filter, XString)) return wrap$1("'", "'", filterStr);
				if (this.filterPredicates != void 0 && this.filterPredicates.length) return wrap$1("(", ")", filterStr) + PathExpr.predicatesString(this.filterPredicates);
				if (this.locationPath != void 0) return filterStr + (this.locationPath.absolute ? "" : "/") + toString$1(this.locationPath);
				return filterStr;
			}
			return toString$1(this.locationPath);
		};
		PathExpr.getOwnerElement = function(n) {
			if (n.ownerElement) return n.ownerElement;
			try {
				if (n.selectSingleNode) return n.selectSingleNode("..");
			} catch (e) {}
			var elts = (n.nodeType == NodeTypes.DOCUMENT_NODE ? n : n.ownerDocument).getElementsByTagName("*");
			for (var i$1 = 0; i$1 < elts.length; i$1++) {
				var elt = elts.item(i$1);
				var nnm = elt.attributes;
				for (var j = 0; j < nnm.length; j++) if (nnm.item(j) === n) return elt;
			}
			return null;
		};
		LocationPath.prototype = /* @__PURE__ */ new Object();
		LocationPath.prototype.constructor = LocationPath;
		LocationPath.superclass = Object.prototype;
		function LocationPath(abs, steps) {
			if (arguments.length > 0) this.init(abs, steps);
		}
		LocationPath.prototype.init = function(abs, steps) {
			this.absolute = abs;
			this.steps = steps;
		};
		LocationPath.prototype.toString = function() {
			return (this.absolute ? "/" : "") + map$1(toString$1, this.steps).join("/");
		};
		Step.prototype = /* @__PURE__ */ new Object();
		Step.prototype.constructor = Step;
		Step.superclass = Object.prototype;
		function Step(axis, nodetest, preds) {
			if (arguments.length > 0) this.init(axis, nodetest, preds);
		}
		Step.prototype.init = function(axis, nodetest, preds) {
			this.axis = axis;
			this.nodeTest = nodetest;
			this.predicates = preds;
		};
		Step.prototype.toString = function() {
			return Step.STEPNAMES[this.axis] + "::" + this.nodeTest.toString() + PathExpr.predicatesString(this.predicates);
		};
		Step.ANCESTOR = 0;
		Step.ANCESTORORSELF = 1;
		Step.ATTRIBUTE = 2;
		Step.CHILD = 3;
		Step.DESCENDANT = 4;
		Step.DESCENDANTORSELF = 5;
		Step.FOLLOWING = 6;
		Step.FOLLOWINGSIBLING = 7;
		Step.NAMESPACE = 8;
		Step.PARENT = 9;
		Step.PRECEDING = 10;
		Step.PRECEDINGSIBLING = 11;
		Step.SELF = 12;
		Step.STEPNAMES = reduce(function(acc, x) {
			return acc[x[0]] = x[1], acc;
		}, {}, [
			[Step.ANCESTOR, "ancestor"],
			[Step.ANCESTORORSELF, "ancestor-or-self"],
			[Step.ATTRIBUTE, "attribute"],
			[Step.CHILD, "child"],
			[Step.DESCENDANT, "descendant"],
			[Step.DESCENDANTORSELF, "descendant-or-self"],
			[Step.FOLLOWING, "following"],
			[Step.FOLLOWINGSIBLING, "following-sibling"],
			[Step.NAMESPACE, "namespace"],
			[Step.PARENT, "parent"],
			[Step.PRECEDING, "preceding"],
			[Step.PRECEDINGSIBLING, "preceding-sibling"],
			[Step.SELF, "self"]
		]);
		var REVERSE_AXES = [
			Step.ANCESTOR,
			Step.ANCESTORORSELF,
			Step.PARENT,
			Step.PRECEDING,
			Step.PRECEDINGSIBLING
		];
		NodeTest.prototype = /* @__PURE__ */ new Object();
		NodeTest.prototype.constructor = NodeTest;
		NodeTest.superclass = Object.prototype;
		function NodeTest(type, value) {
			if (arguments.length > 0) this.init(type, value);
		}
		NodeTest.prototype.init = function(type, value) {
			this.type = type;
			this.value = value;
		};
		NodeTest.prototype.toString = function() {
			return "<unknown nodetest type>";
		};
		NodeTest.prototype.matches = function(n, xpc) {
			console.warn("unknown node test type");
		};
		NodeTest.NAMETESTANY = 0;
		NodeTest.NAMETESTPREFIXANY = 1;
		NodeTest.NAMETESTQNAME = 2;
		NodeTest.COMMENT = 3;
		NodeTest.TEXT = 4;
		NodeTest.PI = 5;
		NodeTest.NODE = 6;
		NodeTest.isNodeType = function(types$1) {
			return function(node$1) {
				return includes(types$1, node$1.nodeType);
			};
		};
		NodeTest.makeNodeTestType = function(type, members$1, ctor) {
			var newType = ctor || function() {};
			newType.prototype = new NodeTest(type);
			newType.prototype.constructor = newType;
			assign$1(newType.prototype, members$1);
			return newType;
		};
		NodeTest.makeNodeTypeTest = function(type, nodeTypes, stringVal) {
			return new (NodeTest.makeNodeTestType(type, {
				matches: NodeTest.isNodeType(nodeTypes),
				toString: always(stringVal)
			}))();
		};
		NodeTest.hasPrefix = function(node$1) {
			return node$1.prefix || (node$1.nodeName || node$1.tagName).indexOf(":") !== -1;
		};
		NodeTest.isElementOrAttribute = NodeTest.isNodeType([1, 2]);
		NodeTest.nameSpaceMatches = function(prefix, xpc, n) {
			var nNamespace = n.namespaceURI || "";
			if (!prefix) return !nNamespace || xpc.allowAnyNamespaceForNoPrefix && !NodeTest.hasPrefix(n);
			var ns = xpc.namespaceResolver.getNamespace(prefix, xpc.expressionContextNode);
			if (ns == null) throw new Error("Cannot resolve QName " + prefix);
			return ns === nNamespace;
		};
		NodeTest.localNameMatches = function(localName, xpc, n) {
			var nLocalName = n.localName || n.nodeName;
			return xpc.caseInsensitive ? localName.toLowerCase() === nLocalName.toLowerCase() : localName === nLocalName;
		};
		NodeTest.NameTestPrefixAny = NodeTest.makeNodeTestType(NodeTest.NAMETESTPREFIXANY, {
			matches: function(n, xpc) {
				return NodeTest.isElementOrAttribute(n) && NodeTest.nameSpaceMatches(this.prefix, xpc, n);
			},
			toString: function() {
				return this.prefix + ":*";
			}
		}, function NameTestPrefixAny(prefix) {
			this.prefix = prefix;
		});
		NodeTest.NameTestQName = NodeTest.makeNodeTestType(NodeTest.NAMETESTQNAME, {
			matches: function(n, xpc) {
				return NodeTest.isNodeType([
					NodeTypes.ELEMENT_NODE,
					NodeTypes.ATTRIBUTE_NODE,
					NodeTypes.NAMESPACE_NODE
				])(n) && NodeTest.nameSpaceMatches(this.prefix, xpc, n) && NodeTest.localNameMatches(this.localName, xpc, n);
			},
			toString: function() {
				return this.name;
			}
		}, function NameTestQName(name$1) {
			var nameParts = name$1.split(":");
			this.name = name$1;
			this.prefix = nameParts.length > 1 ? nameParts[0] : null;
			this.localName = nameParts[nameParts.length > 1 ? 1 : 0];
		});
		NodeTest.PITest = NodeTest.makeNodeTestType(NodeTest.PI, {
			matches: function(n, xpc) {
				return NodeTest.isNodeType([NodeTypes.PROCESSING_INSTRUCTION_NODE])(n) && (n.target || n.nodeName) === this.name;
			},
			toString: function() {
				return wrap$1("processing-instruction(\"", "\")", this.name);
			}
		}, function(name$1) {
			this.name = name$1;
		});
		NodeTest.nameTestAny = NodeTest.makeNodeTypeTest(NodeTest.NAMETESTANY, [
			NodeTypes.ELEMENT_NODE,
			NodeTypes.ATTRIBUTE_NODE,
			NodeTypes.NAMESPACE_NODE
		], "*");
		NodeTest.textTest = NodeTest.makeNodeTypeTest(NodeTest.TEXT, [NodeTypes.TEXT_NODE, NodeTypes.CDATA_SECTION_NODE], "text()");
		NodeTest.commentTest = NodeTest.makeNodeTypeTest(NodeTest.COMMENT, [NodeTypes.COMMENT_NODE], "comment()");
		NodeTest.nodeTest = NodeTest.makeNodeTypeTest(NodeTest.NODE, [
			NodeTypes.ELEMENT_NODE,
			NodeTypes.ATTRIBUTE_NODE,
			NodeTypes.TEXT_NODE,
			NodeTypes.CDATA_SECTION_NODE,
			NodeTypes.PROCESSING_INSTRUCTION_NODE,
			NodeTypes.COMMENT_NODE,
			NodeTypes.DOCUMENT_NODE
		], "node()");
		NodeTest.anyPiTest = NodeTest.makeNodeTypeTest(NodeTest.PI, [NodeTypes.PROCESSING_INSTRUCTION_NODE], "processing-instruction()");
		VariableReference.prototype = new Expression();
		VariableReference.prototype.constructor = VariableReference;
		VariableReference.superclass = Expression.prototype;
		function VariableReference(v) {
			if (arguments.length > 0) this.init(v);
		}
		VariableReference.prototype.init = function(v) {
			this.variable = v;
		};
		VariableReference.prototype.toString = function() {
			return "$" + this.variable;
		};
		VariableReference.prototype.evaluate = function(c$1) {
			var parts = Utilities.resolveQName(this.variable, c$1.namespaceResolver, c$1.contextNode, false);
			if (parts[0] == null) throw new Error("Cannot resolve QName " + fn);
			var result = c$1.variableResolver.getVariable(parts[1], parts[0]);
			if (!result) throw XPathException.fromMessage("Undeclared variable: " + this.toString());
			return result;
		};
		FunctionCall.prototype = new Expression();
		FunctionCall.prototype.constructor = FunctionCall;
		FunctionCall.superclass = Expression.prototype;
		function FunctionCall(fn$1, args) {
			if (arguments.length > 0) this.init(fn$1, args);
		}
		FunctionCall.prototype.init = function(fn$1, args) {
			this.functionName = fn$1;
			this.arguments = args;
		};
		FunctionCall.prototype.toString = function() {
			var s = this.functionName + "(";
			for (var i$1 = 0; i$1 < this.arguments.length; i$1++) {
				if (i$1 > 0) s += ", ";
				s += this.arguments[i$1].toString();
			}
			return s + ")";
		};
		FunctionCall.prototype.evaluate = function(c$1) {
			var f = FunctionResolver.getFunctionFromContext(this.functionName, c$1);
			if (!f) throw new Error("Unknown function " + this.functionName);
			var a = [c$1].concat(this.arguments);
			return f.apply(c$1.functionResolver.thisArg, a);
		};
		var Operators = /* @__PURE__ */ new Object();
		Operators.equals = function(l, r) {
			return l.equals(r);
		};
		Operators.notequal = function(l, r) {
			return l.notequal(r);
		};
		Operators.lessthan = function(l, r) {
			return l.lessthan(r);
		};
		Operators.greaterthan = function(l, r) {
			return l.greaterthan(r);
		};
		Operators.lessthanorequal = function(l, r) {
			return l.lessthanorequal(r);
		};
		Operators.greaterthanorequal = function(l, r) {
			return l.greaterthanorequal(r);
		};
		XString.prototype = new Expression();
		XString.prototype.constructor = XString;
		XString.superclass = Expression.prototype;
		function XString(s) {
			if (arguments.length > 0) this.init(s);
		}
		XString.prototype.init = function(s) {
			this.str = String(s);
		};
		XString.prototype.toString = function() {
			return this.str;
		};
		XString.prototype.evaluate = function(c$1) {
			return this;
		};
		XString.prototype.string = function() {
			return this;
		};
		XString.prototype.number = function() {
			return new XNumber(this.str);
		};
		XString.prototype.bool = function() {
			return new XBoolean(this.str);
		};
		XString.prototype.nodeset = function() {
			throw new Error("Cannot convert string to nodeset");
		};
		XString.prototype.stringValue = function() {
			return this.str;
		};
		XString.prototype.numberValue = function() {
			return this.number().numberValue();
		};
		XString.prototype.booleanValue = function() {
			return this.bool().booleanValue();
		};
		XString.prototype.equals = function(r) {
			if (Utilities.instance_of(r, XBoolean)) return this.bool().equals(r);
			if (Utilities.instance_of(r, XNumber)) return this.number().equals(r);
			if (Utilities.instance_of(r, XNodeSet)) return r.compareWithString(this, Operators.equals);
			return new XBoolean(this.str == r.str);
		};
		XString.prototype.notequal = function(r) {
			if (Utilities.instance_of(r, XBoolean)) return this.bool().notequal(r);
			if (Utilities.instance_of(r, XNumber)) return this.number().notequal(r);
			if (Utilities.instance_of(r, XNodeSet)) return r.compareWithString(this, Operators.notequal);
			return new XBoolean(this.str != r.str);
		};
		XString.prototype.lessthan = function(r) {
			return this.number().lessthan(r);
		};
		XString.prototype.greaterthan = function(r) {
			return this.number().greaterthan(r);
		};
		XString.prototype.lessthanorequal = function(r) {
			return this.number().lessthanorequal(r);
		};
		XString.prototype.greaterthanorequal = function(r) {
			return this.number().greaterthanorequal(r);
		};
		XNumber.prototype = new Expression();
		XNumber.prototype.constructor = XNumber;
		XNumber.superclass = Expression.prototype;
		function XNumber(n) {
			if (arguments.length > 0) this.init(n);
		}
		XNumber.prototype.init = function(n) {
			this.num = typeof n === "string" ? this.parse(n) : Number(n);
		};
		XNumber.prototype.numberFormat = /^\s*-?[0-9]*\.?[0-9]+\s*$/;
		XNumber.prototype.parse = function(s) {
			return this.numberFormat.test(s) ? parseFloat(s) : NaN;
		};
		function padSmallNumber(numberStr) {
			var parts = numberStr.split("e-");
			var base = parts[0].replace(".", "");
			var exponent = Number(parts[1]);
			for (var i$1 = 0; i$1 < exponent - 1; i$1 += 1) base = "0" + base;
			return "0." + base;
		}
		function padLargeNumber(numberStr) {
			var parts = numberStr.split("e");
			var base = parts[0].replace(".", "");
			var zerosToAppend = Number(parts[1]) + 1 - base.length;
			for (var i$1 = 0; i$1 < zerosToAppend; i$1 += 1) base += "0";
			return base;
		}
		XNumber.prototype.toString = function() {
			var strValue = this.num.toString();
			if (strValue.indexOf("e-") !== -1) return padSmallNumber(strValue);
			if (strValue.indexOf("e") !== -1) return padLargeNumber(strValue);
			return strValue;
		};
		XNumber.prototype.evaluate = function(c$1) {
			return this;
		};
		XNumber.prototype.string = function() {
			return new XString(this.toString());
		};
		XNumber.prototype.number = function() {
			return this;
		};
		XNumber.prototype.bool = function() {
			return new XBoolean(this.num);
		};
		XNumber.prototype.nodeset = function() {
			throw new Error("Cannot convert number to nodeset");
		};
		XNumber.prototype.stringValue = function() {
			return this.string().stringValue();
		};
		XNumber.prototype.numberValue = function() {
			return this.num;
		};
		XNumber.prototype.booleanValue = function() {
			return this.bool().booleanValue();
		};
		XNumber.prototype.negate = function() {
			return new XNumber(-this.num);
		};
		XNumber.prototype.equals = function(r) {
			if (Utilities.instance_of(r, XBoolean)) return this.bool().equals(r);
			if (Utilities.instance_of(r, XString)) return this.equals(r.number());
			if (Utilities.instance_of(r, XNodeSet)) return r.compareWithNumber(this, Operators.equals);
			return new XBoolean(this.num == r.num);
		};
		XNumber.prototype.notequal = function(r) {
			if (Utilities.instance_of(r, XBoolean)) return this.bool().notequal(r);
			if (Utilities.instance_of(r, XString)) return this.notequal(r.number());
			if (Utilities.instance_of(r, XNodeSet)) return r.compareWithNumber(this, Operators.notequal);
			return new XBoolean(this.num != r.num);
		};
		XNumber.prototype.lessthan = function(r) {
			if (Utilities.instance_of(r, XNodeSet)) return r.compareWithNumber(this, Operators.greaterthan);
			if (Utilities.instance_of(r, XBoolean) || Utilities.instance_of(r, XString)) return this.lessthan(r.number());
			return new XBoolean(this.num < r.num);
		};
		XNumber.prototype.greaterthan = function(r) {
			if (Utilities.instance_of(r, XNodeSet)) return r.compareWithNumber(this, Operators.lessthan);
			if (Utilities.instance_of(r, XBoolean) || Utilities.instance_of(r, XString)) return this.greaterthan(r.number());
			return new XBoolean(this.num > r.num);
		};
		XNumber.prototype.lessthanorequal = function(r) {
			if (Utilities.instance_of(r, XNodeSet)) return r.compareWithNumber(this, Operators.greaterthanorequal);
			if (Utilities.instance_of(r, XBoolean) || Utilities.instance_of(r, XString)) return this.lessthanorequal(r.number());
			return new XBoolean(this.num <= r.num);
		};
		XNumber.prototype.greaterthanorequal = function(r) {
			if (Utilities.instance_of(r, XNodeSet)) return r.compareWithNumber(this, Operators.lessthanorequal);
			if (Utilities.instance_of(r, XBoolean) || Utilities.instance_of(r, XString)) return this.greaterthanorequal(r.number());
			return new XBoolean(this.num >= r.num);
		};
		XNumber.prototype.plus = function(r) {
			return new XNumber(this.num + r.num);
		};
		XNumber.prototype.minus = function(r) {
			return new XNumber(this.num - r.num);
		};
		XNumber.prototype.multiply = function(r) {
			return new XNumber(this.num * r.num);
		};
		XNumber.prototype.div = function(r) {
			return new XNumber(this.num / r.num);
		};
		XNumber.prototype.mod = function(r) {
			return new XNumber(this.num % r.num);
		};
		XBoolean.prototype = new Expression();
		XBoolean.prototype.constructor = XBoolean;
		XBoolean.superclass = Expression.prototype;
		function XBoolean(b) {
			if (arguments.length > 0) this.init(b);
		}
		XBoolean.prototype.init = function(b) {
			this.b = Boolean(b);
		};
		XBoolean.prototype.toString = function() {
			return this.b.toString();
		};
		XBoolean.prototype.evaluate = function(c$1) {
			return this;
		};
		XBoolean.prototype.string = function() {
			return new XString(this.b);
		};
		XBoolean.prototype.number = function() {
			return new XNumber(this.b);
		};
		XBoolean.prototype.bool = function() {
			return this;
		};
		XBoolean.prototype.nodeset = function() {
			throw new Error("Cannot convert boolean to nodeset");
		};
		XBoolean.prototype.stringValue = function() {
			return this.string().stringValue();
		};
		XBoolean.prototype.numberValue = function() {
			return this.number().numberValue();
		};
		XBoolean.prototype.booleanValue = function() {
			return this.b;
		};
		XBoolean.prototype.not = function() {
			return new XBoolean(!this.b);
		};
		XBoolean.prototype.equals = function(r) {
			if (Utilities.instance_of(r, XString) || Utilities.instance_of(r, XNumber)) return this.equals(r.bool());
			if (Utilities.instance_of(r, XNodeSet)) return r.compareWithBoolean(this, Operators.equals);
			return new XBoolean(this.b == r.b);
		};
		XBoolean.prototype.notequal = function(r) {
			if (Utilities.instance_of(r, XString) || Utilities.instance_of(r, XNumber)) return this.notequal(r.bool());
			if (Utilities.instance_of(r, XNodeSet)) return r.compareWithBoolean(this, Operators.notequal);
			return new XBoolean(this.b != r.b);
		};
		XBoolean.prototype.lessthan = function(r) {
			return this.number().lessthan(r);
		};
		XBoolean.prototype.greaterthan = function(r) {
			return this.number().greaterthan(r);
		};
		XBoolean.prototype.lessthanorequal = function(r) {
			return this.number().lessthanorequal(r);
		};
		XBoolean.prototype.greaterthanorequal = function(r) {
			return this.number().greaterthanorequal(r);
		};
		XBoolean.true_ = new XBoolean(true);
		XBoolean.false_ = new XBoolean(false);
		AVLTree.prototype = /* @__PURE__ */ new Object();
		AVLTree.prototype.constructor = AVLTree;
		AVLTree.superclass = Object.prototype;
		function AVLTree(n) {
			this.init(n);
		}
		AVLTree.prototype.init = function(n) {
			this.left = null;
			this.right = null;
			this.node = n;
			this.depth = 1;
		};
		AVLTree.prototype.balance = function() {
			var ldepth = this.left == null ? 0 : this.left.depth;
			var rdepth = this.right == null ? 0 : this.right.depth;
			if (ldepth > rdepth + 1) {
				if ((this.left.left == null ? 0 : this.left.left.depth) < (this.left.right == null ? 0 : this.left.right.depth)) this.left.rotateRR();
				this.rotateLL();
			} else if (ldepth + 1 < rdepth) {
				var rrdepth = this.right.right == null ? 0 : this.right.right.depth;
				if ((this.right.left == null ? 0 : this.right.left.depth) > rrdepth) this.right.rotateLL();
				this.rotateRR();
			}
		};
		AVLTree.prototype.rotateLL = function() {
			var nodeBefore = this.node;
			var rightBefore = this.right;
			this.node = this.left.node;
			this.right = this.left;
			this.left = this.left.left;
			this.right.left = this.right.right;
			this.right.right = rightBefore;
			this.right.node = nodeBefore;
			this.right.updateInNewLocation();
			this.updateInNewLocation();
		};
		AVLTree.prototype.rotateRR = function() {
			var nodeBefore = this.node;
			var leftBefore = this.left;
			this.node = this.right.node;
			this.left = this.right;
			this.right = this.right.right;
			this.left.right = this.left.left;
			this.left.left = leftBefore;
			this.left.node = nodeBefore;
			this.left.updateInNewLocation();
			this.updateInNewLocation();
		};
		AVLTree.prototype.updateInNewLocation = function() {
			this.getDepthFromChildren();
		};
		AVLTree.prototype.getDepthFromChildren = function() {
			this.depth = this.node == null ? 0 : 1;
			if (this.left != null) this.depth = this.left.depth + 1;
			if (this.right != null && this.depth <= this.right.depth) this.depth = this.right.depth + 1;
		};
		function nodeOrder(n1, n2) {
			if (n1 === n2) return 0;
			if (n1.compareDocumentPosition) {
				var cpos = n1.compareDocumentPosition(n2);
				if (cpos & 1) return 1;
				if (cpos & 10) return 1;
				if (cpos & 20) return -1;
				return 0;
			}
			var d1 = 0, d2 = 0;
			for (var m1 = n1; m1 != null; m1 = m1.parentNode || m1.ownerElement) d1++;
			for (var m2 = n2; m2 != null; m2 = m2.parentNode || m2.ownerElement) d2++;
			if (d1 > d2) {
				while (d1 > d2) {
					n1 = n1.parentNode || n1.ownerElement;
					d1--;
				}
				if (n1 === n2) return 1;
			} else if (d2 > d1) {
				while (d2 > d1) {
					n2 = n2.parentNode || n2.ownerElement;
					d2--;
				}
				if (n1 === n2) return -1;
			}
			var n1Par = n1.parentNode || n1.ownerElement, n2Par = n2.parentNode || n2.ownerElement;
			while (n1Par !== n2Par) {
				n1 = n1Par;
				n2 = n2Par;
				n1Par = n1.parentNode || n1.ownerElement;
				n2Par = n2.parentNode || n2.ownerElement;
			}
			var n1isAttr = isAttributeLike(n1);
			var n2isAttr = isAttributeLike(n2);
			if (n1isAttr && !n2isAttr) return -1;
			if (!n1isAttr && n2isAttr) return 1;
			if (n1.isXPathNamespace) {
				if (n1.nodeValue === XPath.XML_NAMESPACE_URI) return -1;
				if (!n2.isXPathNamespace) return -1;
				if (n2.nodeValue === XPath.XML_NAMESPACE_URI) return 1;
			} else if (n2.isXPathNamespace) return 1;
			if (n1Par) {
				var cn = n1isAttr ? n1Par.attributes : n1Par.childNodes;
				var len = cn.length;
				var n1Compare = n1.baseNode || n1;
				var n2Compare = n2.baseNode || n2;
				for (var i$1 = 0; i$1 < len; i$1 += 1) {
					var n = cn[i$1];
					if (n === n1Compare) return -1;
					if (n === n2Compare) return 1;
				}
			}
			throw new Error("Unexpected: could not determine node order");
		}
		AVLTree.prototype.add = function(n) {
			if (n === this.node) return false;
			var o = nodeOrder(n, this.node);
			var ret = false;
			if (o == -1) if (this.left == null) {
				this.left = new AVLTree(n);
				ret = true;
			} else {
				ret = this.left.add(n);
				if (ret) this.balance();
			}
			else if (o == 1) if (this.right == null) {
				this.right = new AVLTree(n);
				ret = true;
			} else {
				ret = this.right.add(n);
				if (ret) this.balance();
			}
			if (ret) this.getDepthFromChildren();
			return ret;
		};
		XNodeSet.prototype = new Expression();
		XNodeSet.prototype.constructor = XNodeSet;
		XNodeSet.superclass = Expression.prototype;
		function XNodeSet() {
			this.init();
		}
		XNodeSet.prototype.init = function() {
			this.tree = null;
			this.nodes = [];
			this.size = 0;
		};
		XNodeSet.prototype.toString = function() {
			var p = this.first();
			if (p == null) return "";
			return this.stringForNode(p);
		};
		XNodeSet.prototype.evaluate = function(c$1) {
			return this;
		};
		XNodeSet.prototype.string = function() {
			return new XString(this.toString());
		};
		XNodeSet.prototype.stringValue = function() {
			return this.toString();
		};
		XNodeSet.prototype.number = function() {
			return new XNumber(this.string());
		};
		XNodeSet.prototype.numberValue = function() {
			return Number(this.string());
		};
		XNodeSet.prototype.bool = function() {
			return new XBoolean(this.booleanValue());
		};
		XNodeSet.prototype.booleanValue = function() {
			return !!this.size;
		};
		XNodeSet.prototype.nodeset = function() {
			return this;
		};
		XNodeSet.prototype.stringForNode = function(n) {
			if (n.nodeType == NodeTypes.DOCUMENT_NODE || n.nodeType == NodeTypes.ELEMENT_NODE || n.nodeType === NodeTypes.DOCUMENT_FRAGMENT_NODE) return this.stringForContainerNode(n);
			if (n.nodeType === NodeTypes.ATTRIBUTE_NODE) return n.value || n.nodeValue;
			if (n.isNamespaceNode) return n.namespace;
			return n.nodeValue;
		};
		XNodeSet.prototype.stringForContainerNode = function(n) {
			var s = "";
			for (var n2 = n.firstChild; n2 != null; n2 = n2.nextSibling) {
				var nt = n2.nodeType;
				if (nt === 1 || nt === 3 || nt === 4 || nt === 9 || nt === 11) s += this.stringForNode(n2);
			}
			return s;
		};
		XNodeSet.prototype.buildTree = function() {
			if (!this.tree && this.nodes.length) {
				this.tree = new AVLTree(this.nodes[0]);
				for (var i$1 = 1; i$1 < this.nodes.length; i$1 += 1) this.tree.add(this.nodes[i$1]);
			}
			return this.tree;
		};
		XNodeSet.prototype.first = function() {
			var p = this.buildTree();
			if (p == null) return null;
			while (p.left != null) p = p.left;
			return p.node;
		};
		XNodeSet.prototype.add = function(n) {
			for (var i$1 = 0; i$1 < this.nodes.length; i$1 += 1) if (n === this.nodes[i$1]) return;
			this.tree = null;
			this.nodes.push(n);
			this.size += 1;
		};
		XNodeSet.prototype.addArray = function(ns) {
			var self = this;
			forEach(function(x) {
				self.add(x);
			}, ns);
		};
		/**
		* Returns an array of the node set's contents in document order
		*/
		XNodeSet.prototype.toArray = function() {
			var a = [];
			this.toArrayRec(this.buildTree(), a);
			return a;
		};
		XNodeSet.prototype.toArrayRec = function(t, a) {
			if (t != null) {
				this.toArrayRec(t.left, a);
				a.push(t.node);
				this.toArrayRec(t.right, a);
			}
		};
		/**
		* Returns an array of the node set's contents in arbitrary order
		*/
		XNodeSet.prototype.toUnsortedArray = function() {
			return this.nodes.slice();
		};
		XNodeSet.prototype.compareWithString = function(r, o) {
			var a = this.toUnsortedArray();
			for (var i$1 = 0; i$1 < a.length; i$1++) {
				var n = a[i$1];
				var res = o(new XString(this.stringForNode(n)), r);
				if (res.booleanValue()) return res;
			}
			return new XBoolean(false);
		};
		XNodeSet.prototype.compareWithNumber = function(r, o) {
			var a = this.toUnsortedArray();
			for (var i$1 = 0; i$1 < a.length; i$1++) {
				var n = a[i$1];
				var res = o(new XNumber(this.stringForNode(n)), r);
				if (res.booleanValue()) return res;
			}
			return new XBoolean(false);
		};
		XNodeSet.prototype.compareWithBoolean = function(r, o) {
			return o(this.bool(), r);
		};
		XNodeSet.prototype.compareWithNodeSet = function(r, o) {
			var arr = this.toUnsortedArray();
			var oInvert = function(lop, rop) {
				return o(rop, lop);
			};
			for (var i$1 = 0; i$1 < arr.length; i$1++) {
				var l = new XString(this.stringForNode(arr[i$1]));
				var res = r.compareWithString(l, oInvert);
				if (res.booleanValue()) return res;
			}
			return new XBoolean(false);
		};
		XNodeSet.compareWith = curry(function(o, r) {
			if (Utilities.instance_of(r, XString)) return this.compareWithString(r, o);
			if (Utilities.instance_of(r, XNumber)) return this.compareWithNumber(r, o);
			if (Utilities.instance_of(r, XBoolean)) return this.compareWithBoolean(r, o);
			return this.compareWithNodeSet(r, o);
		});
		XNodeSet.prototype.equals = XNodeSet.compareWith(Operators.equals);
		XNodeSet.prototype.notequal = XNodeSet.compareWith(Operators.notequal);
		XNodeSet.prototype.lessthan = XNodeSet.compareWith(Operators.lessthan);
		XNodeSet.prototype.greaterthan = XNodeSet.compareWith(Operators.greaterthan);
		XNodeSet.prototype.lessthanorequal = XNodeSet.compareWith(Operators.lessthanorequal);
		XNodeSet.prototype.greaterthanorequal = XNodeSet.compareWith(Operators.greaterthanorequal);
		XNodeSet.prototype.union = function(r) {
			var ns = new XNodeSet();
			ns.addArray(this.toUnsortedArray());
			ns.addArray(r.toUnsortedArray());
			return ns;
		};
		XPathNamespace.prototype = /* @__PURE__ */ new Object();
		XPathNamespace.prototype.constructor = XPathNamespace;
		XPathNamespace.superclass = Object.prototype;
		function XPathNamespace(pre, node$1, uri, p) {
			this.isXPathNamespace = true;
			this.baseNode = node$1;
			this.ownerDocument = p.ownerDocument;
			this.nodeName = pre;
			this.prefix = pre;
			this.localName = pre;
			this.namespaceURI = null;
			this.nodeValue = uri;
			this.ownerElement = p;
			this.nodeType = NodeTypes.NAMESPACE_NODE;
		}
		XPathNamespace.prototype.toString = function() {
			return "{ \"" + this.prefix + "\", \"" + this.namespaceURI + "\" }";
		};
		XPathContext.prototype = /* @__PURE__ */ new Object();
		XPathContext.prototype.constructor = XPathContext;
		XPathContext.superclass = Object.prototype;
		function XPathContext(vr, nr, fr) {
			this.variableResolver = vr != null ? vr : new VariableResolver();
			this.namespaceResolver = nr != null ? nr : new NamespaceResolver();
			this.functionResolver = fr != null ? fr : new FunctionResolver();
		}
		XPathContext.prototype.extend = function(newProps) {
			return assign$1(new XPathContext(), this, newProps);
		};
		VariableResolver.prototype = /* @__PURE__ */ new Object();
		VariableResolver.prototype.constructor = VariableResolver;
		VariableResolver.superclass = Object.prototype;
		function VariableResolver() {}
		VariableResolver.prototype.getVariable = function(ln, ns) {
			return null;
		};
		FunctionResolver.prototype = /* @__PURE__ */ new Object();
		FunctionResolver.prototype.constructor = FunctionResolver;
		FunctionResolver.superclass = Object.prototype;
		function FunctionResolver(thisArg) {
			this.thisArg = thisArg != null ? thisArg : Functions;
			this.functions = /* @__PURE__ */ new Object();
			this.addStandardFunctions();
		}
		FunctionResolver.prototype.addStandardFunctions = function() {
			this.functions["{}last"] = Functions.last;
			this.functions["{}position"] = Functions.position;
			this.functions["{}count"] = Functions.count;
			this.functions["{}id"] = Functions.id;
			this.functions["{}local-name"] = Functions.localName;
			this.functions["{}namespace-uri"] = Functions.namespaceURI;
			this.functions["{}name"] = Functions.name;
			this.functions["{}string"] = Functions.string;
			this.functions["{}concat"] = Functions.concat;
			this.functions["{}starts-with"] = Functions.startsWith;
			this.functions["{}contains"] = Functions.contains;
			this.functions["{}substring-before"] = Functions.substringBefore;
			this.functions["{}substring-after"] = Functions.substringAfter;
			this.functions["{}substring"] = Functions.substring;
			this.functions["{}string-length"] = Functions.stringLength;
			this.functions["{}normalize-space"] = Functions.normalizeSpace;
			this.functions["{}translate"] = Functions.translate;
			this.functions["{}boolean"] = Functions.boolean_;
			this.functions["{}not"] = Functions.not;
			this.functions["{}true"] = Functions.true_;
			this.functions["{}false"] = Functions.false_;
			this.functions["{}lang"] = Functions.lang;
			this.functions["{}number"] = Functions.number;
			this.functions["{}sum"] = Functions.sum;
			this.functions["{}floor"] = Functions.floor;
			this.functions["{}ceiling"] = Functions.ceiling;
			this.functions["{}round"] = Functions.round;
		};
		FunctionResolver.prototype.addFunction = function(ns, ln, f) {
			this.functions["{" + ns + "}" + ln] = f;
		};
		FunctionResolver.getFunctionFromContext = function(qName, context) {
			var parts = Utilities.resolveQName(qName, context.namespaceResolver, context.contextNode, false);
			if (parts[0] === null) throw new Error("Cannot resolve QName " + name);
			return context.functionResolver.getFunction(parts[1], parts[0]);
		};
		FunctionResolver.prototype.getFunction = function(localName, namespace) {
			return this.functions["{" + namespace + "}" + localName];
		};
		NamespaceResolver.prototype = /* @__PURE__ */ new Object();
		NamespaceResolver.prototype.constructor = NamespaceResolver;
		NamespaceResolver.superclass = Object.prototype;
		function NamespaceResolver() {}
		NamespaceResolver.prototype.getNamespace = function(prefix, n) {
			if (prefix == "xml") return XPath.XML_NAMESPACE_URI;
			else if (prefix == "xmlns") return XPath.XMLNS_NAMESPACE_URI;
			if (n.nodeType == NodeTypes.DOCUMENT_NODE) n = n.documentElement;
			else if (n.nodeType == NodeTypes.ATTRIBUTE_NODE) n = PathExpr.getOwnerElement(n);
			else if (n.nodeType != NodeTypes.ELEMENT_NODE) n = n.parentNode;
			while (n != null && n.nodeType == NodeTypes.ELEMENT_NODE) {
				var nnm = n.attributes;
				for (var i$1 = 0; i$1 < nnm.length; i$1++) {
					var a = nnm.item(i$1);
					var aname = a.name || a.nodeName;
					if (aname === "xmlns" && prefix === "" || aname === "xmlns:" + prefix) return String(a.value || a.nodeValue);
				}
				n = n.parentNode;
			}
			return null;
		};
		var Functions = /* @__PURE__ */ new Object();
		Functions.last = function(c$1) {
			if (arguments.length != 1) throw new Error("Function last expects ()");
			return new XNumber(c$1.contextSize);
		};
		Functions.position = function(c$1) {
			if (arguments.length != 1) throw new Error("Function position expects ()");
			return new XNumber(c$1.contextPosition);
		};
		Functions.count = function() {
			var c$1 = arguments[0];
			var ns;
			if (arguments.length != 2 || !Utilities.instance_of(ns = arguments[1].evaluate(c$1), XNodeSet)) throw new Error("Function count expects (node-set)");
			return new XNumber(ns.size);
		};
		Functions.id = function() {
			var c$1 = arguments[0];
			var id;
			if (arguments.length != 2) throw new Error("Function id expects (object)");
			id = arguments[1].evaluate(c$1);
			if (Utilities.instance_of(id, XNodeSet)) id = id.toArray().join(" ");
			else id = id.stringValue();
			var ids = id.split(/[\x0d\x0a\x09\x20]+/);
			var count = 0;
			var ns = new XNodeSet();
			var doc = c$1.contextNode.nodeType == NodeTypes.DOCUMENT_NODE ? c$1.contextNode : c$1.contextNode.ownerDocument;
			for (var i$1 = 0; i$1 < ids.length; i$1++) {
				var n;
				if (doc.getElementById) n = doc.getElementById(ids[i$1]);
				else n = Utilities.getElementById(doc, ids[i$1]);
				if (n != null) {
					ns.add(n);
					count++;
				}
			}
			return ns;
		};
		Functions.localName = function(c$1, eNode) {
			var n;
			if (arguments.length == 1) n = c$1.contextNode;
			else if (arguments.length == 2) n = eNode.evaluate(c$1).first();
			else throw new Error("Function local-name expects (node-set?)");
			if (n == null) return new XString("");
			return new XString(n.localName || n.baseName || n.target || n.nodeName || "");
		};
		Functions.namespaceURI = function() {
			var c$1 = arguments[0];
			var n;
			if (arguments.length == 1) n = c$1.contextNode;
			else if (arguments.length == 2) n = arguments[1].evaluate(c$1).first();
			else throw new Error("Function namespace-uri expects (node-set?)");
			if (n == null) return new XString("");
			return new XString(n.namespaceURI || "");
		};
		Functions.name = function() {
			var c$1 = arguments[0];
			var n;
			if (arguments.length == 1) n = c$1.contextNode;
			else if (arguments.length == 2) n = arguments[1].evaluate(c$1).first();
			else throw new Error("Function name expects (node-set?)");
			if (n == null) return new XString("");
			if (n.nodeType == NodeTypes.ELEMENT_NODE) return new XString(n.nodeName);
			else if (n.nodeType == NodeTypes.ATTRIBUTE_NODE) return new XString(n.name || n.nodeName);
			else if (n.nodeType === NodeTypes.PROCESSING_INSTRUCTION_NODE) return new XString(n.target || n.nodeName);
			else if (n.localName == null) return new XString("");
			else return new XString(n.localName);
		};
		Functions.string = function() {
			var c$1 = arguments[0];
			if (arguments.length == 1) return new XString(XNodeSet.prototype.stringForNode(c$1.contextNode));
			else if (arguments.length == 2) return arguments[1].evaluate(c$1).string();
			throw new Error("Function string expects (object?)");
		};
		Functions.concat = function(c$1) {
			if (arguments.length < 3) throw new Error("Function concat expects (string, string[, string]*)");
			var s = "";
			for (var i$1 = 1; i$1 < arguments.length; i$1++) s += arguments[i$1].evaluate(c$1).stringValue();
			return new XString(s);
		};
		Functions.startsWith = function() {
			var c$1 = arguments[0];
			if (arguments.length != 3) throw new Error("Function startsWith expects (string, string)");
			var s1 = arguments[1].evaluate(c$1).stringValue();
			var s2 = arguments[2].evaluate(c$1).stringValue();
			return new XBoolean(s1.substring(0, s2.length) == s2);
		};
		Functions.contains = function() {
			var c$1 = arguments[0];
			if (arguments.length != 3) throw new Error("Function contains expects (string, string)");
			var s1 = arguments[1].evaluate(c$1).stringValue();
			var s2 = arguments[2].evaluate(c$1).stringValue();
			return new XBoolean(s1.indexOf(s2) !== -1);
		};
		Functions.substringBefore = function() {
			var c$1 = arguments[0];
			if (arguments.length != 3) throw new Error("Function substring-before expects (string, string)");
			var s1 = arguments[1].evaluate(c$1).stringValue();
			var s2 = arguments[2].evaluate(c$1).stringValue();
			return new XString(s1.substring(0, s1.indexOf(s2)));
		};
		Functions.substringAfter = function() {
			var c$1 = arguments[0];
			if (arguments.length != 3) throw new Error("Function substring-after expects (string, string)");
			var s1 = arguments[1].evaluate(c$1).stringValue();
			var s2 = arguments[2].evaluate(c$1).stringValue();
			if (s2.length == 0) return new XString(s1);
			var i$1 = s1.indexOf(s2);
			if (i$1 == -1) return new XString("");
			return new XString(s1.substring(i$1 + s2.length));
		};
		Functions.substring = function() {
			var c$1 = arguments[0];
			if (!(arguments.length == 3 || arguments.length == 4)) throw new Error("Function substring expects (string, number, number?)");
			var s = arguments[1].evaluate(c$1).stringValue();
			var n1 = Math.round(arguments[2].evaluate(c$1).numberValue()) - 1;
			var n2 = arguments.length == 4 ? n1 + Math.round(arguments[3].evaluate(c$1).numberValue()) : void 0;
			return new XString(s.substring(n1, n2));
		};
		Functions.stringLength = function() {
			var c$1 = arguments[0];
			var s;
			if (arguments.length == 1) s = XNodeSet.prototype.stringForNode(c$1.contextNode);
			else if (arguments.length == 2) s = arguments[1].evaluate(c$1).stringValue();
			else throw new Error("Function string-length expects (string?)");
			return new XNumber(s.length);
		};
		Functions.normalizeSpace = function() {
			var c$1 = arguments[0];
			var s;
			if (arguments.length == 1) s = XNodeSet.prototype.stringForNode(c$1.contextNode);
			else if (arguments.length == 2) s = arguments[1].evaluate(c$1).stringValue();
			else throw new Error("Function normalize-space expects (string?)");
			var i$1 = 0;
			var j = s.length - 1;
			while (Utilities.isSpace(s.charCodeAt(j))) j--;
			var t = "";
			while (i$1 <= j && Utilities.isSpace(s.charCodeAt(i$1))) i$1++;
			while (i$1 <= j) if (Utilities.isSpace(s.charCodeAt(i$1))) {
				t += " ";
				while (i$1 <= j && Utilities.isSpace(s.charCodeAt(i$1))) i$1++;
			} else {
				t += s.charAt(i$1);
				i$1++;
			}
			return new XString(t);
		};
		Functions.translate = function(c$1, eValue, eFrom, eTo) {
			if (arguments.length != 4) throw new Error("Function translate expects (string, string, string)");
			var value = eValue.evaluate(c$1).stringValue();
			var from = eFrom.evaluate(c$1).stringValue();
			var to = eTo.evaluate(c$1).stringValue();
			var cMap = reduce(function(acc, ch, i$1) {
				if (!(ch in acc)) acc[ch] = i$1 > to.length ? "" : to[i$1];
				return acc;
			}, {}, from);
			return new XString(join("", map$1(function(ch) {
				return ch in cMap ? cMap[ch] : ch;
			}, value)));
		};
		Functions.boolean_ = function() {
			var c$1 = arguments[0];
			if (arguments.length != 2) throw new Error("Function boolean expects (object)");
			return arguments[1].evaluate(c$1).bool();
		};
		Functions.not = function(c$1, eValue) {
			if (arguments.length != 2) throw new Error("Function not expects (object)");
			return eValue.evaluate(c$1).bool().not();
		};
		Functions.true_ = function() {
			if (arguments.length != 1) throw new Error("Function true expects ()");
			return XBoolean.true_;
		};
		Functions.false_ = function() {
			if (arguments.length != 1) throw new Error("Function false expects ()");
			return XBoolean.false_;
		};
		Functions.lang = function() {
			var c$1 = arguments[0];
			if (arguments.length != 2) throw new Error("Function lang expects (string)");
			var lang;
			for (var n = c$1.contextNode; n != null && n.nodeType != NodeTypes.DOCUMENT_NODE; n = n.parentNode) {
				var a = n.getAttributeNS(XPath.XML_NAMESPACE_URI, "lang");
				if (a != null) {
					lang = String(a);
					break;
				}
			}
			if (lang == null) return XBoolean.false_;
			var s = arguments[1].evaluate(c$1).stringValue();
			return new XBoolean(lang.substring(0, s.length) == s && (lang.length == s.length || lang.charAt(s.length) == "-"));
		};
		Functions.number = function() {
			var c$1 = arguments[0];
			if (!(arguments.length == 1 || arguments.length == 2)) throw new Error("Function number expects (object?)");
			if (arguments.length == 1) return new XNumber(XNodeSet.prototype.stringForNode(c$1.contextNode));
			return arguments[1].evaluate(c$1).number();
		};
		Functions.sum = function() {
			var c$1 = arguments[0];
			var ns;
			if (arguments.length != 2 || !Utilities.instance_of(ns = arguments[1].evaluate(c$1), XNodeSet)) throw new Error("Function sum expects (node-set)");
			ns = ns.toUnsortedArray();
			var n = 0;
			for (var i$1 = 0; i$1 < ns.length; i$1++) n += new XNumber(XNodeSet.prototype.stringForNode(ns[i$1])).numberValue();
			return new XNumber(n);
		};
		Functions.floor = function() {
			var c$1 = arguments[0];
			if (arguments.length != 2) throw new Error("Function floor expects (number)");
			return new XNumber(Math.floor(arguments[1].evaluate(c$1).numberValue()));
		};
		Functions.ceiling = function() {
			var c$1 = arguments[0];
			if (arguments.length != 2) throw new Error("Function ceiling expects (number)");
			return new XNumber(Math.ceil(arguments[1].evaluate(c$1).numberValue()));
		};
		Functions.round = function() {
			var c$1 = arguments[0];
			if (arguments.length != 2) throw new Error("Function round expects (number)");
			return new XNumber(Math.round(arguments[1].evaluate(c$1).numberValue()));
		};
		var Utilities = /* @__PURE__ */ new Object();
		var isAttributeLike = function(val$1) {
			return val$1 && (val$1.nodeType === NodeTypes.ATTRIBUTE_NODE || val$1.ownerElement || val$1.isXPathNamespace);
		};
		Utilities.splitQName = function(qn) {
			var i$1 = qn.indexOf(":");
			if (i$1 == -1) return [null, qn];
			return [qn.substring(0, i$1), qn.substring(i$1 + 1)];
		};
		Utilities.resolveQName = function(qn, nr, n, useDefault) {
			var parts = Utilities.splitQName(qn);
			if (parts[0] != null) parts[0] = nr.getNamespace(parts[0], n);
			else if (useDefault) {
				parts[0] = nr.getNamespace("", n);
				if (parts[0] == null) parts[0] = "";
			} else parts[0] = "";
			return parts;
		};
		Utilities.isSpace = function(c$1) {
			return c$1 == 9 || c$1 == 13 || c$1 == 10 || c$1 == 32;
		};
		Utilities.isLetter = function(c$1) {
			return c$1 >= 65 && c$1 <= 90 || c$1 >= 97 && c$1 <= 122 || c$1 >= 192 && c$1 <= 214 || c$1 >= 216 && c$1 <= 246 || c$1 >= 248 && c$1 <= 255 || c$1 >= 256 && c$1 <= 305 || c$1 >= 308 && c$1 <= 318 || c$1 >= 321 && c$1 <= 328 || c$1 >= 330 && c$1 <= 382 || c$1 >= 384 && c$1 <= 451 || c$1 >= 461 && c$1 <= 496 || c$1 >= 500 && c$1 <= 501 || c$1 >= 506 && c$1 <= 535 || c$1 >= 592 && c$1 <= 680 || c$1 >= 699 && c$1 <= 705 || c$1 == 902 || c$1 >= 904 && c$1 <= 906 || c$1 == 908 || c$1 >= 910 && c$1 <= 929 || c$1 >= 931 && c$1 <= 974 || c$1 >= 976 && c$1 <= 982 || c$1 == 986 || c$1 == 988 || c$1 == 990 || c$1 == 992 || c$1 >= 994 && c$1 <= 1011 || c$1 >= 1025 && c$1 <= 1036 || c$1 >= 1038 && c$1 <= 1103 || c$1 >= 1105 && c$1 <= 1116 || c$1 >= 1118 && c$1 <= 1153 || c$1 >= 1168 && c$1 <= 1220 || c$1 >= 1223 && c$1 <= 1224 || c$1 >= 1227 && c$1 <= 1228 || c$1 >= 1232 && c$1 <= 1259 || c$1 >= 1262 && c$1 <= 1269 || c$1 >= 1272 && c$1 <= 1273 || c$1 >= 1329 && c$1 <= 1366 || c$1 == 1369 || c$1 >= 1377 && c$1 <= 1414 || c$1 >= 1488 && c$1 <= 1514 || c$1 >= 1520 && c$1 <= 1522 || c$1 >= 1569 && c$1 <= 1594 || c$1 >= 1601 && c$1 <= 1610 || c$1 >= 1649 && c$1 <= 1719 || c$1 >= 1722 && c$1 <= 1726 || c$1 >= 1728 && c$1 <= 1742 || c$1 >= 1744 && c$1 <= 1747 || c$1 == 1749 || c$1 >= 1765 && c$1 <= 1766 || c$1 >= 2309 && c$1 <= 2361 || c$1 == 2365 || c$1 >= 2392 && c$1 <= 2401 || c$1 >= 2437 && c$1 <= 2444 || c$1 >= 2447 && c$1 <= 2448 || c$1 >= 2451 && c$1 <= 2472 || c$1 >= 2474 && c$1 <= 2480 || c$1 == 2482 || c$1 >= 2486 && c$1 <= 2489 || c$1 >= 2524 && c$1 <= 2525 || c$1 >= 2527 && c$1 <= 2529 || c$1 >= 2544 && c$1 <= 2545 || c$1 >= 2565 && c$1 <= 2570 || c$1 >= 2575 && c$1 <= 2576 || c$1 >= 2579 && c$1 <= 2600 || c$1 >= 2602 && c$1 <= 2608 || c$1 >= 2610 && c$1 <= 2611 || c$1 >= 2613 && c$1 <= 2614 || c$1 >= 2616 && c$1 <= 2617 || c$1 >= 2649 && c$1 <= 2652 || c$1 == 2654 || c$1 >= 2674 && c$1 <= 2676 || c$1 >= 2693 && c$1 <= 2699 || c$1 == 2701 || c$1 >= 2703 && c$1 <= 2705 || c$1 >= 2707 && c$1 <= 2728 || c$1 >= 2730 && c$1 <= 2736 || c$1 >= 2738 && c$1 <= 2739 || c$1 >= 2741 && c$1 <= 2745 || c$1 == 2749 || c$1 == 2784 || c$1 >= 2821 && c$1 <= 2828 || c$1 >= 2831 && c$1 <= 2832 || c$1 >= 2835 && c$1 <= 2856 || c$1 >= 2858 && c$1 <= 2864 || c$1 >= 2866 && c$1 <= 2867 || c$1 >= 2870 && c$1 <= 2873 || c$1 == 2877 || c$1 >= 2908 && c$1 <= 2909 || c$1 >= 2911 && c$1 <= 2913 || c$1 >= 2949 && c$1 <= 2954 || c$1 >= 2958 && c$1 <= 2960 || c$1 >= 2962 && c$1 <= 2965 || c$1 >= 2969 && c$1 <= 2970 || c$1 == 2972 || c$1 >= 2974 && c$1 <= 2975 || c$1 >= 2979 && c$1 <= 2980 || c$1 >= 2984 && c$1 <= 2986 || c$1 >= 2990 && c$1 <= 2997 || c$1 >= 2999 && c$1 <= 3001 || c$1 >= 3077 && c$1 <= 3084 || c$1 >= 3086 && c$1 <= 3088 || c$1 >= 3090 && c$1 <= 3112 || c$1 >= 3114 && c$1 <= 3123 || c$1 >= 3125 && c$1 <= 3129 || c$1 >= 3168 && c$1 <= 3169 || c$1 >= 3205 && c$1 <= 3212 || c$1 >= 3214 && c$1 <= 3216 || c$1 >= 3218 && c$1 <= 3240 || c$1 >= 3242 && c$1 <= 3251 || c$1 >= 3253 && c$1 <= 3257 || c$1 == 3294 || c$1 >= 3296 && c$1 <= 3297 || c$1 >= 3333 && c$1 <= 3340 || c$1 >= 3342 && c$1 <= 3344 || c$1 >= 3346 && c$1 <= 3368 || c$1 >= 3370 && c$1 <= 3385 || c$1 >= 3424 && c$1 <= 3425 || c$1 >= 3585 && c$1 <= 3630 || c$1 == 3632 || c$1 >= 3634 && c$1 <= 3635 || c$1 >= 3648 && c$1 <= 3653 || c$1 >= 3713 && c$1 <= 3714 || c$1 == 3716 || c$1 >= 3719 && c$1 <= 3720 || c$1 == 3722 || c$1 == 3725 || c$1 >= 3732 && c$1 <= 3735 || c$1 >= 3737 && c$1 <= 3743 || c$1 >= 3745 && c$1 <= 3747 || c$1 == 3749 || c$1 == 3751 || c$1 >= 3754 && c$1 <= 3755 || c$1 >= 3757 && c$1 <= 3758 || c$1 == 3760 || c$1 >= 3762 && c$1 <= 3763 || c$1 == 3773 || c$1 >= 3776 && c$1 <= 3780 || c$1 >= 3904 && c$1 <= 3911 || c$1 >= 3913 && c$1 <= 3945 || c$1 >= 4256 && c$1 <= 4293 || c$1 >= 4304 && c$1 <= 4342 || c$1 == 4352 || c$1 >= 4354 && c$1 <= 4355 || c$1 >= 4357 && c$1 <= 4359 || c$1 == 4361 || c$1 >= 4363 && c$1 <= 4364 || c$1 >= 4366 && c$1 <= 4370 || c$1 == 4412 || c$1 == 4414 || c$1 == 4416 || c$1 == 4428 || c$1 == 4430 || c$1 == 4432 || c$1 >= 4436 && c$1 <= 4437 || c$1 == 4441 || c$1 >= 4447 && c$1 <= 4449 || c$1 == 4451 || c$1 == 4453 || c$1 == 4455 || c$1 == 4457 || c$1 >= 4461 && c$1 <= 4462 || c$1 >= 4466 && c$1 <= 4467 || c$1 == 4469 || c$1 == 4510 || c$1 == 4520 || c$1 == 4523 || c$1 >= 4526 && c$1 <= 4527 || c$1 >= 4535 && c$1 <= 4536 || c$1 == 4538 || c$1 >= 4540 && c$1 <= 4546 || c$1 == 4587 || c$1 == 4592 || c$1 == 4601 || c$1 >= 7680 && c$1 <= 7835 || c$1 >= 7840 && c$1 <= 7929 || c$1 >= 7936 && c$1 <= 7957 || c$1 >= 7960 && c$1 <= 7965 || c$1 >= 7968 && c$1 <= 8005 || c$1 >= 8008 && c$1 <= 8013 || c$1 >= 8016 && c$1 <= 8023 || c$1 == 8025 || c$1 == 8027 || c$1 == 8029 || c$1 >= 8031 && c$1 <= 8061 || c$1 >= 8064 && c$1 <= 8116 || c$1 >= 8118 && c$1 <= 8124 || c$1 == 8126 || c$1 >= 8130 && c$1 <= 8132 || c$1 >= 8134 && c$1 <= 8140 || c$1 >= 8144 && c$1 <= 8147 || c$1 >= 8150 && c$1 <= 8155 || c$1 >= 8160 && c$1 <= 8172 || c$1 >= 8178 && c$1 <= 8180 || c$1 >= 8182 && c$1 <= 8188 || c$1 == 8486 || c$1 >= 8490 && c$1 <= 8491 || c$1 == 8494 || c$1 >= 8576 && c$1 <= 8578 || c$1 >= 12353 && c$1 <= 12436 || c$1 >= 12449 && c$1 <= 12538 || c$1 >= 12549 && c$1 <= 12588 || c$1 >= 44032 && c$1 <= 55203 || c$1 >= 19968 && c$1 <= 40869 || c$1 == 12295 || c$1 >= 12321 && c$1 <= 12329;
		};
		Utilities.isNCNameChar = function(c$1) {
			return c$1 >= 48 && c$1 <= 57 || c$1 >= 1632 && c$1 <= 1641 || c$1 >= 1776 && c$1 <= 1785 || c$1 >= 2406 && c$1 <= 2415 || c$1 >= 2534 && c$1 <= 2543 || c$1 >= 2662 && c$1 <= 2671 || c$1 >= 2790 && c$1 <= 2799 || c$1 >= 2918 && c$1 <= 2927 || c$1 >= 3047 && c$1 <= 3055 || c$1 >= 3174 && c$1 <= 3183 || c$1 >= 3302 && c$1 <= 3311 || c$1 >= 3430 && c$1 <= 3439 || c$1 >= 3664 && c$1 <= 3673 || c$1 >= 3792 && c$1 <= 3801 || c$1 >= 3872 && c$1 <= 3881 || c$1 == 46 || c$1 == 45 || c$1 == 95 || Utilities.isLetter(c$1) || c$1 >= 768 && c$1 <= 837 || c$1 >= 864 && c$1 <= 865 || c$1 >= 1155 && c$1 <= 1158 || c$1 >= 1425 && c$1 <= 1441 || c$1 >= 1443 && c$1 <= 1465 || c$1 >= 1467 && c$1 <= 1469 || c$1 == 1471 || c$1 >= 1473 && c$1 <= 1474 || c$1 == 1476 || c$1 >= 1611 && c$1 <= 1618 || c$1 == 1648 || c$1 >= 1750 && c$1 <= 1756 || c$1 >= 1757 && c$1 <= 1759 || c$1 >= 1760 && c$1 <= 1764 || c$1 >= 1767 && c$1 <= 1768 || c$1 >= 1770 && c$1 <= 1773 || c$1 >= 2305 && c$1 <= 2307 || c$1 == 2364 || c$1 >= 2366 && c$1 <= 2380 || c$1 == 2381 || c$1 >= 2385 && c$1 <= 2388 || c$1 >= 2402 && c$1 <= 2403 || c$1 >= 2433 && c$1 <= 2435 || c$1 == 2492 || c$1 == 2494 || c$1 == 2495 || c$1 >= 2496 && c$1 <= 2500 || c$1 >= 2503 && c$1 <= 2504 || c$1 >= 2507 && c$1 <= 2509 || c$1 == 2519 || c$1 >= 2530 && c$1 <= 2531 || c$1 == 2562 || c$1 == 2620 || c$1 == 2622 || c$1 == 2623 || c$1 >= 2624 && c$1 <= 2626 || c$1 >= 2631 && c$1 <= 2632 || c$1 >= 2635 && c$1 <= 2637 || c$1 >= 2672 && c$1 <= 2673 || c$1 >= 2689 && c$1 <= 2691 || c$1 == 2748 || c$1 >= 2750 && c$1 <= 2757 || c$1 >= 2759 && c$1 <= 2761 || c$1 >= 2763 && c$1 <= 2765 || c$1 >= 2817 && c$1 <= 2819 || c$1 == 2876 || c$1 >= 2878 && c$1 <= 2883 || c$1 >= 2887 && c$1 <= 2888 || c$1 >= 2891 && c$1 <= 2893 || c$1 >= 2902 && c$1 <= 2903 || c$1 >= 2946 && c$1 <= 2947 || c$1 >= 3006 && c$1 <= 3010 || c$1 >= 3014 && c$1 <= 3016 || c$1 >= 3018 && c$1 <= 3021 || c$1 == 3031 || c$1 >= 3073 && c$1 <= 3075 || c$1 >= 3134 && c$1 <= 3140 || c$1 >= 3142 && c$1 <= 3144 || c$1 >= 3146 && c$1 <= 3149 || c$1 >= 3157 && c$1 <= 3158 || c$1 >= 3202 && c$1 <= 3203 || c$1 >= 3262 && c$1 <= 3268 || c$1 >= 3270 && c$1 <= 3272 || c$1 >= 3274 && c$1 <= 3277 || c$1 >= 3285 && c$1 <= 3286 || c$1 >= 3330 && c$1 <= 3331 || c$1 >= 3390 && c$1 <= 3395 || c$1 >= 3398 && c$1 <= 3400 || c$1 >= 3402 && c$1 <= 3405 || c$1 == 3415 || c$1 == 3633 || c$1 >= 3636 && c$1 <= 3642 || c$1 >= 3655 && c$1 <= 3662 || c$1 == 3761 || c$1 >= 3764 && c$1 <= 3769 || c$1 >= 3771 && c$1 <= 3772 || c$1 >= 3784 && c$1 <= 3789 || c$1 >= 3864 && c$1 <= 3865 || c$1 == 3893 || c$1 == 3895 || c$1 == 3897 || c$1 == 3902 || c$1 == 3903 || c$1 >= 3953 && c$1 <= 3972 || c$1 >= 3974 && c$1 <= 3979 || c$1 >= 3984 && c$1 <= 3989 || c$1 == 3991 || c$1 >= 3993 && c$1 <= 4013 || c$1 >= 4017 && c$1 <= 4023 || c$1 == 4025 || c$1 >= 8400 && c$1 <= 8412 || c$1 == 8417 || c$1 >= 12330 && c$1 <= 12335 || c$1 == 12441 || c$1 == 12442 || c$1 == 183 || c$1 == 720 || c$1 == 721 || c$1 == 903 || c$1 == 1600 || c$1 == 3654 || c$1 == 3782 || c$1 == 12293 || c$1 >= 12337 && c$1 <= 12341 || c$1 >= 12445 && c$1 <= 12446 || c$1 >= 12540 && c$1 <= 12542;
		};
		Utilities.coalesceText = function(n) {
			for (var m = n.firstChild; m != null; m = m.nextSibling) if (m.nodeType == NodeTypes.TEXT_NODE || m.nodeType == NodeTypes.CDATA_SECTION_NODE) {
				var s = m.nodeValue;
				var first$1 = m;
				m = m.nextSibling;
				while (m != null && (m.nodeType == NodeTypes.TEXT_NODE || m.nodeType == NodeTypes.CDATA_SECTION_NODE)) {
					s += m.nodeValue;
					var del = m;
					m = m.nextSibling;
					del.parentNode.removeChild(del);
				}
				if (first$1.nodeType == NodeTypes.CDATA_SECTION_NODE) {
					var p = first$1.parentNode;
					if (first$1.nextSibling == null) {
						p.removeChild(first$1);
						p.appendChild(p.ownerDocument.createTextNode(s));
					} else {
						var next$1 = first$1.nextSibling;
						p.removeChild(first$1);
						p.insertBefore(p.ownerDocument.createTextNode(s), next$1);
					}
				} else first$1.nodeValue = s;
				if (m == null) break;
			} else if (m.nodeType == NodeTypes.ELEMENT_NODE) Utilities.coalesceText(m);
		};
		Utilities.instance_of = function(o, c$1) {
			while (o != null) {
				if (o.constructor === c$1) return true;
				if (o === Object) return false;
				o = o.constructor.superclass;
			}
			return false;
		};
		Utilities.getElementById = function(n, id) {
			if (n.nodeType == NodeTypes.ELEMENT_NODE) {
				if (n.getAttribute("id") == id || n.getAttributeNS(null, "id") == id) return n;
			}
			for (var m = n.firstChild; m != null; m = m.nextSibling) {
				var res = Utilities.getElementById(m, id);
				if (res != null) return res;
			}
			return null;
		};
		var XPathException = (function() {
			function getMessage(code, exception) {
				var msg = exception ? ": " + exception.toString() : "";
				switch (code) {
					case XPathException$1.INVALID_EXPRESSION_ERR: return "Invalid expression" + msg;
					case XPathException$1.TYPE_ERR: return "Type error" + msg;
				}
				return null;
			}
			function XPathException$1(code, error$1, message) {
				var err = Error.call(this, getMessage(code, error$1) || message);
				err.code = code;
				err.exception = error$1;
				return err;
			}
			XPathException$1.prototype = Object.create(Error.prototype);
			XPathException$1.prototype.constructor = XPathException$1;
			XPathException$1.superclass = Error;
			XPathException$1.prototype.toString = function() {
				return this.message;
			};
			XPathException$1.fromMessage = function(message, error$1) {
				return new XPathException$1(null, error$1, message);
			};
			XPathException$1.INVALID_EXPRESSION_ERR = 51;
			XPathException$1.TYPE_ERR = 52;
			return XPathException$1;
		})();
		XPathExpression.prototype = {};
		XPathExpression.prototype.constructor = XPathExpression;
		XPathExpression.superclass = Object.prototype;
		function XPathExpression(e, r, p) {
			this.xpath = p.parse(e);
			this.context = new XPathContext();
			this.context.namespaceResolver = new XPathNSResolverWrapper(r);
		}
		XPathExpression.getOwnerDocument = function(n) {
			return n.nodeType === NodeTypes.DOCUMENT_NODE ? n : n.ownerDocument;
		};
		XPathExpression.detectHtmlDom = function(n) {
			if (!n) return false;
			var doc = XPathExpression.getOwnerDocument(n);
			try {
				return doc.implementation.hasFeature("HTML", "2.0");
			} catch (e) {
				return true;
			}
		};
		XPathExpression.prototype.evaluate = function(n, t, res) {
			this.context.expressionContextNode = n;
			this.context.caseInsensitive = XPathExpression.detectHtmlDom(n);
			return new XPathResult(this.xpath.evaluate(this.context), t);
		};
		XPathNSResolverWrapper.prototype = {};
		XPathNSResolverWrapper.prototype.constructor = XPathNSResolverWrapper;
		XPathNSResolverWrapper.superclass = Object.prototype;
		function XPathNSResolverWrapper(r) {
			this.xpathNSResolver = r;
		}
		XPathNSResolverWrapper.prototype.getNamespace = function(prefix, n) {
			if (this.xpathNSResolver == null) return null;
			return this.xpathNSResolver.lookupNamespaceURI(prefix);
		};
		NodeXPathNSResolver.prototype = {};
		NodeXPathNSResolver.prototype.constructor = NodeXPathNSResolver;
		NodeXPathNSResolver.superclass = Object.prototype;
		function NodeXPathNSResolver(n) {
			this.node = n;
			this.namespaceResolver = new NamespaceResolver();
		}
		NodeXPathNSResolver.prototype.lookupNamespaceURI = function(prefix) {
			return this.namespaceResolver.getNamespace(prefix, this.node);
		};
		XPathResult.prototype = {};
		XPathResult.prototype.constructor = XPathResult;
		XPathResult.superclass = Object.prototype;
		function XPathResult(v, t) {
			if (t == XPathResult.ANY_TYPE) {
				if (v.constructor === XString) t = XPathResult.STRING_TYPE;
				else if (v.constructor === XNumber) t = XPathResult.NUMBER_TYPE;
				else if (v.constructor === XBoolean) t = XPathResult.BOOLEAN_TYPE;
				else if (v.constructor === XNodeSet) t = XPathResult.UNORDERED_NODE_ITERATOR_TYPE;
			}
			this.resultType = t;
			switch (t) {
				case XPathResult.NUMBER_TYPE:
					this.numberValue = v.numberValue();
					return;
				case XPathResult.STRING_TYPE:
					this.stringValue = v.stringValue();
					return;
				case XPathResult.BOOLEAN_TYPE:
					this.booleanValue = v.booleanValue();
					return;
				case XPathResult.ANY_UNORDERED_NODE_TYPE:
				case XPathResult.FIRST_ORDERED_NODE_TYPE:
					if (v.constructor === XNodeSet) {
						this.singleNodeValue = v.first();
						return;
					}
					break;
				case XPathResult.UNORDERED_NODE_ITERATOR_TYPE:
				case XPathResult.ORDERED_NODE_ITERATOR_TYPE:
					if (v.constructor === XNodeSet) {
						this.invalidIteratorState = false;
						this.nodes = v.toArray();
						this.iteratorIndex = 0;
						return;
					}
					break;
				case XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE:
				case XPathResult.ORDERED_NODE_SNAPSHOT_TYPE:
					if (v.constructor === XNodeSet) {
						this.nodes = v.toArray();
						this.snapshotLength = this.nodes.length;
						return;
					}
					break;
			}
			throw new XPathException(XPathException.TYPE_ERR);
		}
		XPathResult.prototype.iterateNext = function() {
			if (this.resultType != XPathResult.UNORDERED_NODE_ITERATOR_TYPE && this.resultType != XPathResult.ORDERED_NODE_ITERATOR_TYPE) throw new XPathException(XPathException.TYPE_ERR);
			return this.nodes[this.iteratorIndex++];
		};
		XPathResult.prototype.snapshotItem = function(i$1) {
			if (this.resultType != XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE && this.resultType != XPathResult.ORDERED_NODE_SNAPSHOT_TYPE) throw new XPathException(XPathException.TYPE_ERR);
			return this.nodes[i$1];
		};
		XPathResult.ANY_TYPE = 0;
		XPathResult.NUMBER_TYPE = 1;
		XPathResult.STRING_TYPE = 2;
		XPathResult.BOOLEAN_TYPE = 3;
		XPathResult.UNORDERED_NODE_ITERATOR_TYPE = 4;
		XPathResult.ORDERED_NODE_ITERATOR_TYPE = 5;
		XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE = 6;
		XPathResult.ORDERED_NODE_SNAPSHOT_TYPE = 7;
		XPathResult.ANY_UNORDERED_NODE_TYPE = 8;
		XPathResult.FIRST_ORDERED_NODE_TYPE = 9;
		function installDOM3XPathSupport(doc, p) {
			doc.createExpression = function(e, r) {
				try {
					return new XPathExpression(e, r, p);
				} catch (e$1) {
					throw new XPathException(XPathException.INVALID_EXPRESSION_ERR, e$1);
				}
			};
			doc.createNSResolver = function(n) {
				return new NodeXPathNSResolver(n);
			};
			doc.evaluate = function(e, cn, r, t, res) {
				if (t < 0 || t > 9) throw {
					code: 0,
					toString: function() {
						return "Request type not supported";
					}
				};
				return doc.createExpression(e, r, p).evaluate(cn, t, res);
			};
		}
		try {
			var shouldInstall = true;
			try {
				if (document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("XPath", null)) shouldInstall = false;
			} catch (e) {}
			if (shouldInstall) installDOM3XPathSupport(document, new XPathParser());
		} catch (e) {}
		installDOM3XPathSupport(exports$1, new XPathParser());
		(function() {
			var parser = new XPathParser();
			var defaultNSResolver = new NamespaceResolver();
			var defaultFunctionResolver = new FunctionResolver();
			var defaultVariableResolver = new VariableResolver();
			function makeNSResolverFromFunction(func) {
				return { getNamespace: function(prefix, node$1) {
					return func(prefix, node$1) || defaultNSResolver.getNamespace(prefix, node$1);
				} };
			}
			function makeNSResolverFromObject(obj) {
				return makeNSResolverFromFunction(obj.getNamespace.bind(obj));
			}
			function makeNSResolverFromMap(map$2) {
				return makeNSResolverFromFunction(function(prefix) {
					return map$2[prefix];
				});
			}
			function makeNSResolver(resolver) {
				if (resolver && typeof resolver.getNamespace === "function") return makeNSResolverFromObject(resolver);
				if (typeof resolver === "function") return makeNSResolverFromFunction(resolver);
				if (typeof resolver === "object") return makeNSResolverFromMap(resolver);
				return defaultNSResolver;
			}
			/** Converts native JavaScript types to their XPath library equivalent */
			function convertValue(value) {
				if (value === null || typeof value === "undefined" || value instanceof XString || value instanceof XBoolean || value instanceof XNumber || value instanceof XNodeSet) return value;
				switch (typeof value) {
					case "string": return new XString(value);
					case "boolean": return new XBoolean(value);
					case "number": return new XNumber(value);
				}
				var ns = new XNodeSet();
				ns.addArray([].concat(value));
				return ns;
			}
			function makeEvaluator(func) {
				return function(context) {
					var args = Array.prototype.slice.call(arguments, 1).map(function(arg) {
						return arg.evaluate(context);
					});
					return convertValue(func.apply(this, [].concat(context, args)));
				};
			}
			function makeFunctionResolverFromFunction(func) {
				return { getFunction: function(name$1, namespace) {
					var found = func(name$1, namespace);
					if (found) return makeEvaluator(found);
					return defaultFunctionResolver.getFunction(name$1, namespace);
				} };
			}
			function makeFunctionResolverFromObject(obj) {
				return makeFunctionResolverFromFunction(obj.getFunction.bind(obj));
			}
			function makeFunctionResolverFromMap(map$2) {
				return makeFunctionResolverFromFunction(function(name$1) {
					return map$2[name$1];
				});
			}
			function makeFunctionResolver(resolver) {
				if (resolver && typeof resolver.getFunction === "function") return makeFunctionResolverFromObject(resolver);
				if (typeof resolver === "function") return makeFunctionResolverFromFunction(resolver);
				if (typeof resolver === "object") return makeFunctionResolverFromMap(resolver);
				return defaultFunctionResolver;
			}
			function makeVariableResolverFromFunction(func) {
				return { getVariable: function(name$1, namespace) {
					return convertValue(func(name$1, namespace));
				} };
			}
			function makeVariableResolver(resolver) {
				if (resolver) {
					if (typeof resolver.getVariable === "function") return makeVariableResolverFromFunction(resolver.getVariable.bind(resolver));
					if (typeof resolver === "function") return makeVariableResolverFromFunction(resolver);
					if (typeof resolver === "object") return makeVariableResolverFromFunction(function(name$1) {
						return resolver[name$1];
					});
				}
				return defaultVariableResolver;
			}
			function copyIfPresent(prop$1, dest, source$1) {
				if (prop$1 in source$1) dest[prop$1] = source$1[prop$1];
			}
			function makeContext(options) {
				var context = new XPathContext();
				if (options) {
					context.namespaceResolver = makeNSResolver(options.namespaces);
					context.functionResolver = makeFunctionResolver(options.functions);
					context.variableResolver = makeVariableResolver(options.variables);
					context.expressionContextNode = options.node;
					context.expressionContextPosition = options.position;
					context.expressionContextSize = options.size;
					copyIfPresent("allowAnyNamespaceForNoPrefix", context, options);
					copyIfPresent("isHtml", context, options);
				} else context.namespaceResolver = defaultNSResolver;
				return context;
			}
			function evaluate$1(parsedExpression, options) {
				var context = makeContext(options);
				return parsedExpression.evaluate(context);
			}
			var evaluatorPrototype = {
				evaluate: function(options) {
					return evaluate$1(this.expression, options);
				},
				evaluateNumber: function(options) {
					return this.evaluate(options).numberValue();
				},
				evaluateString: function(options) {
					return this.evaluate(options).stringValue();
				},
				evaluateBoolean: function(options) {
					return this.evaluate(options).booleanValue();
				},
				evaluateNodeSet: function(options) {
					return this.evaluate(options).nodeset();
				},
				select: function(options) {
					return this.evaluateNodeSet(options).toArray();
				},
				select1: function(options) {
					return this.select(options)[0];
				}
			};
			function parse$10(xpath) {
				var parsed = parser.parse(xpath);
				return Object.create(evaluatorPrototype, { expression: { value: parsed } });
			}
			exports$1.parse = parse$10;
		})();
		assign$1(exports$1, {
			XPath,
			XPathParser,
			XPathResult,
			Step,
			PathExpr,
			NodeTest,
			LocationPath,
			OrOperation,
			AndOperation,
			BarOperation,
			EqualsOperation,
			NotEqualOperation,
			LessThanOperation,
			GreaterThanOperation,
			LessThanOrEqualOperation,
			GreaterThanOrEqualOperation,
			PlusOperation,
			MinusOperation,
			MultiplyOperation,
			DivOperation,
			ModOperation,
			UnaryMinusOperation,
			FunctionCall,
			VariableReference,
			XPathContext,
			XNodeSet,
			XBoolean,
			XString,
			XNumber,
			NamespaceResolver,
			FunctionResolver,
			VariableResolver,
			Utilities
		});
		exports$1.select = function(e, doc, single) {
			return exports$1.selectWithResolver(e, doc, null, single);
		};
		exports$1.useNamespaces = function(mappings) {
			var resolver = {
				mappings: mappings || {},
				lookupNamespaceURI: function(prefix) {
					return this.mappings[prefix];
				}
			};
			return function(e, doc, single) {
				return exports$1.selectWithResolver(e, doc, resolver, single);
			};
		};
		exports$1.selectWithResolver = function(e, doc, resolver, single) {
			var expression = new XPathExpression(e, resolver, new XPathParser());
			var type = XPathResult.ANY_TYPE;
			var result = expression.evaluate(doc, type, null);
			if (result.resultType == XPathResult.STRING_TYPE) result = result.stringValue;
			else if (result.resultType == XPathResult.NUMBER_TYPE) result = result.numberValue;
			else if (result.resultType == XPathResult.BOOLEAN_TYPE) result = result.booleanValue;
			else {
				result = result.nodes;
				if (single) result = result[0];
			}
			return result;
		};
		exports$1.select1 = function(e, doc) {
			return exports$1.select(e, doc, true);
		};
		var isArrayOfNodes = function(value) {
			return Array.isArray(value) && value.every(isNodeLike);
		};
		var isNodeOfType = function(type) {
			return function(value) {
				return isNodeLike(value) && value.nodeType === type;
			};
		};
		assign$1(exports$1, {
			isNodeLike,
			isArrayOfNodes,
			isElement: isNodeOfType(NodeTypes.ELEMENT_NODE),
			isAttribute: isNodeOfType(NodeTypes.ATTRIBUTE_NODE),
			isTextNode: isNodeOfType(NodeTypes.TEXT_NODE),
			isCDATASection: isNodeOfType(NodeTypes.CDATA_SECTION_NODE),
			isProcessingInstruction: isNodeOfType(NodeTypes.PROCESSING_INSTRUCTION_NODE),
			isComment: isNodeOfType(NodeTypes.COMMENT_NODE),
			isDocumentNode: isNodeOfType(NodeTypes.DOCUMENT_NODE),
			isDocumentTypeNode: isNodeOfType(NodeTypes.DOCUMENT_TYPE_NODE),
			isDocumentFragment: isNodeOfType(NodeTypes.DOCUMENT_FRAGMENT_NODE)
		});
	})(typeof exports === "undefined" ? {} : exports);
}) });

//#endregion
//#region node_modules/.pnpm/jsonpath-plus@11.2.0/node_modules/jsonpath-plus/dist/index-node-esm.js
var import_xpath = /* @__PURE__ */ __toESM(require_xpath(), 1);
var import_lib$2 = /* @__PURE__ */ __toESM(require_lib(), 1);
var import_lib$1 = /* @__PURE__ */ __toESM(require_lib$1(), 1);
/**
* @implements {IHooks}
*/
var Hooks = class {
	/**
	* @callback HookCallback
	* @this {*|Jsep} this
	* @param {Jsep} env
	* @returns: void
	*/
	/**
	* Adds the given callback to the list of callbacks for the given hook.
	*
	* The callback will be invoked when the hook it is registered for is run.
	*
	* One callback function can be registered to multiple hooks and the same hook multiple times.
	*
	* @param {string|object} name The name of the hook, or an object of callbacks keyed by name
	* @param {HookCallback|boolean} callback The callback function which is given environment variables.
	* @param {?boolean} [first=false] Will add the hook to the top of the list (defaults to the bottom)
	* @public
	*/
	add(name$1, callback, first$1) {
		if (typeof arguments[0] != "string") for (let name$2 in arguments[0]) this.add(name$2, arguments[0][name$2], arguments[1]);
		else (Array.isArray(name$1) ? name$1 : [name$1]).forEach(function(name$2) {
			this[name$2] = this[name$2] || [];
			if (callback) this[name$2][first$1 ? "unshift" : "push"](callback);
		}, this);
	}
	/**
	* Runs a hook invoking all registered callbacks with the given environment variables.
	*
	* Callbacks will be invoked synchronously and in the order in which they were registered.
	*
	* @param {string} name The name of the hook.
	* @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
	* @public
	*/
	run(name$1, env) {
		this[name$1] = this[name$1] || [];
		this[name$1].forEach(function(callback) {
			callback.call(env && env.context ? env.context : env, env);
		});
	}
};
/**
* @implements {IPlugins}
*/
var Plugins = class {
	constructor(jsep$1) {
		this.jsep = jsep$1;
		this.registered = {};
	}
	/**
	* @callback PluginSetup
	* @this {Jsep} jsep
	* @returns: void
	*/
	/**
	* Adds the given plugin(s) to the registry
	*
	* @param {object} plugins
	* @param {string} plugins.name The name of the plugin
	* @param {PluginSetup} plugins.init The init function
	* @public
	*/
	register(...plugins) {
		plugins.forEach((plugin$1) => {
			if (typeof plugin$1 !== "object" || !plugin$1.name || !plugin$1.init) throw new Error("Invalid JSEP plugin format");
			if (this.registered[plugin$1.name]) return;
			plugin$1.init(this.jsep);
			this.registered[plugin$1.name] = plugin$1;
		});
	}
};
var Jsep = class Jsep {
	/**
	* @returns {string}
	*/
	static get version() {
		return "1.4.0";
	}
	/**
	* @returns {string}
	*/
	static toString() {
		return "JavaScript Expression Parser (JSEP) v" + Jsep.version;
	}
	/**
	* @method addUnaryOp
	* @param {string} op_name The name of the unary op to add
	* @returns {Jsep}
	*/
	static addUnaryOp(op_name) {
		Jsep.max_unop_len = Math.max(op_name.length, Jsep.max_unop_len);
		Jsep.unary_ops[op_name] = 1;
		return Jsep;
	}
	/**
	* @method jsep.addBinaryOp
	* @param {string} op_name The name of the binary op to add
	* @param {number} precedence The precedence of the binary op (can be a float). Higher number = higher precedence
	* @param {boolean} [isRightAssociative=false] whether operator is right-associative
	* @returns {Jsep}
	*/
	static addBinaryOp(op_name, precedence, isRightAssociative) {
		Jsep.max_binop_len = Math.max(op_name.length, Jsep.max_binop_len);
		Jsep.binary_ops[op_name] = precedence;
		if (isRightAssociative) Jsep.right_associative.add(op_name);
		else Jsep.right_associative.delete(op_name);
		return Jsep;
	}
	/**
	* @method addIdentifierChar
	* @param {string} char The additional character to treat as a valid part of an identifier
	* @returns {Jsep}
	*/
	static addIdentifierChar(char) {
		Jsep.additional_identifier_chars.add(char);
		return Jsep;
	}
	/**
	* @method addLiteral
	* @param {string} literal_name The name of the literal to add
	* @param {*} literal_value The value of the literal
	* @returns {Jsep}
	*/
	static addLiteral(literal_name, literal_value) {
		Jsep.literals[literal_name] = literal_value;
		return Jsep;
	}
	/**
	* @method removeUnaryOp
	* @param {string} op_name The name of the unary op to remove
	* @returns {Jsep}
	*/
	static removeUnaryOp(op_name) {
		delete Jsep.unary_ops[op_name];
		if (op_name.length === Jsep.max_unop_len) Jsep.max_unop_len = Jsep.getMaxKeyLen(Jsep.unary_ops);
		return Jsep;
	}
	/**
	* @method removeAllUnaryOps
	* @returns {Jsep}
	*/
	static removeAllUnaryOps() {
		Jsep.unary_ops = {};
		Jsep.max_unop_len = 0;
		return Jsep;
	}
	/**
	* @method removeIdentifierChar
	* @param {string} char The additional character to stop treating as a valid part of an identifier
	* @returns {Jsep}
	*/
	static removeIdentifierChar(char) {
		Jsep.additional_identifier_chars.delete(char);
		return Jsep;
	}
	/**
	* @method removeBinaryOp
	* @param {string} op_name The name of the binary op to remove
	* @returns {Jsep}
	*/
	static removeBinaryOp(op_name) {
		delete Jsep.binary_ops[op_name];
		if (op_name.length === Jsep.max_binop_len) Jsep.max_binop_len = Jsep.getMaxKeyLen(Jsep.binary_ops);
		Jsep.right_associative.delete(op_name);
		return Jsep;
	}
	/**
	* @method removeAllBinaryOps
	* @returns {Jsep}
	*/
	static removeAllBinaryOps() {
		Jsep.binary_ops = {};
		Jsep.max_binop_len = 0;
		return Jsep;
	}
	/**
	* @method removeLiteral
	* @param {string} literal_name The name of the literal to remove
	* @returns {Jsep}
	*/
	static removeLiteral(literal_name) {
		delete Jsep.literals[literal_name];
		return Jsep;
	}
	/**
	* @method removeAllLiterals
	* @returns {Jsep}
	*/
	static removeAllLiterals() {
		Jsep.literals = {};
		return Jsep;
	}
	/**
	* @returns {string}
	*/
	get char() {
		return this.expr.charAt(this.index);
	}
	/**
	* @returns {number}
	*/
	get code() {
		return this.expr.charCodeAt(this.index);
	}
	/**
	* @param {string} expr a string with the passed in express
	* @returns Jsep
	*/
	constructor(expr) {
		this.expr = expr;
		this.index = 0;
	}
	/**
	* static top-level parser
	* @returns {jsep.Expression}
	*/
	static parse(expr) {
		return new Jsep(expr).parse();
	}
	/**
	* Get the longest key length of any object
	* @param {object} obj
	* @returns {number}
	*/
	static getMaxKeyLen(obj) {
		return Math.max(0, ...Object.keys(obj).map((k) => k.length));
	}
	/**
	* `ch` is a character code in the next three functions
	* @param {number} ch
	* @returns {boolean}
	*/
	static isDecimalDigit(ch) {
		return ch >= 48 && ch <= 57;
	}
	/**
	* Returns the precedence of a binary operator or `0` if it isn't a binary operator. Can be float.
	* @param {string} op_val
	* @returns {number}
	*/
	static binaryPrecedence(op_val) {
		return Jsep.binary_ops[op_val] || 0;
	}
	/**
	* Looks for start of identifier
	* @param {number} ch
	* @returns {boolean}
	*/
	static isIdentifierStart(ch) {
		return ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122 || ch >= 128 && !Jsep.binary_ops[String.fromCharCode(ch)] || Jsep.additional_identifier_chars.has(String.fromCharCode(ch));
	}
	/**
	* @param {number} ch
	* @returns {boolean}
	*/
	static isIdentifierPart(ch) {
		return Jsep.isIdentifierStart(ch) || Jsep.isDecimalDigit(ch);
	}
	/**
	* throw error at index of the expression
	* @param {string} message
	* @throws
	*/
	throwError(message) {
		const error$1 = /* @__PURE__ */ new Error(message + " at character " + this.index);
		error$1.index = this.index;
		error$1.description = message;
		throw error$1;
	}
	/**
	* Run a given hook
	* @param {string} name
	* @param {jsep.Expression|false} [node]
	* @returns {?jsep.Expression}
	*/
	runHook(name$1, node$1) {
		if (Jsep.hooks[name$1]) {
			const env = {
				context: this,
				node: node$1
			};
			Jsep.hooks.run(name$1, env);
			return env.node;
		}
		return node$1;
	}
	/**
	* Runs a given hook until one returns a node
	* @param {string} name
	* @returns {?jsep.Expression}
	*/
	searchHook(name$1) {
		if (Jsep.hooks[name$1]) {
			const env = { context: this };
			Jsep.hooks[name$1].find(function(callback) {
				callback.call(env.context, env);
				return env.node;
			});
			return env.node;
		}
	}
	/**
	* Push `index` up to the next non-space character
	*/
	gobbleSpaces() {
		let ch = this.code;
		while (ch === Jsep.SPACE_CODE || ch === Jsep.TAB_CODE || ch === Jsep.LF_CODE || ch === Jsep.CR_CODE) ch = this.expr.charCodeAt(++this.index);
		this.runHook("gobble-spaces");
	}
	/**
	* Top-level method to parse all expressions and returns compound or single node
	* @returns {jsep.Expression}
	*/
	parse() {
		this.runHook("before-all");
		const nodes = this.gobbleExpressions();
		const node$1 = nodes.length === 1 ? nodes[0] : {
			type: Jsep.COMPOUND,
			body: nodes
		};
		return this.runHook("after-all", node$1);
	}
	/**
	* top-level parser (but can be reused within as well)
	* @param {number} [untilICode]
	* @returns {jsep.Expression[]}
	*/
	gobbleExpressions(untilICode) {
		let nodes = [], ch_i, node$1;
		while (this.index < this.expr.length) {
			ch_i = this.code;
			if (ch_i === Jsep.SEMCOL_CODE || ch_i === Jsep.COMMA_CODE) this.index++;
			else if (node$1 = this.gobbleExpression()) nodes.push(node$1);
			else if (this.index < this.expr.length) {
				if (ch_i === untilICode) break;
				this.throwError("Unexpected \"" + this.char + "\"");
			}
		}
		return nodes;
	}
	/**
	* The main parsing function.
	* @returns {?jsep.Expression}
	*/
	gobbleExpression() {
		const node$1 = this.searchHook("gobble-expression") || this.gobbleBinaryExpression();
		this.gobbleSpaces();
		return this.runHook("after-expression", node$1);
	}
	/**
	* Search for the operation portion of the string (e.g. `+`, `===`)
	* Start by taking the longest possible binary operations (3 characters: `===`, `!==`, `>>>`)
	* and move down from 3 to 2 to 1 character until a matching binary operation is found
	* then, return that binary operation
	* @returns {string|boolean}
	*/
	gobbleBinaryOp() {
		this.gobbleSpaces();
		let to_check = this.expr.substr(this.index, Jsep.max_binop_len);
		let tc_len = to_check.length;
		while (tc_len > 0) {
			if (Jsep.binary_ops.hasOwnProperty(to_check) && (!Jsep.isIdentifierStart(this.code) || this.index + to_check.length < this.expr.length && !Jsep.isIdentifierPart(this.expr.charCodeAt(this.index + to_check.length)))) {
				this.index += tc_len;
				return to_check;
			}
			to_check = to_check.substr(0, --tc_len);
		}
		return false;
	}
	/**
	* This function is responsible for gobbling an individual expression,
	* e.g. `1`, `1+2`, `a+(b*2)-Math.sqrt(2)`
	* @returns {?jsep.BinaryExpression}
	*/
	gobbleBinaryExpression() {
		let node$1, biop, prec, stack$1, biop_info, left, right, i$1, cur_biop;
		left = this.gobbleToken();
		if (!left) return left;
		biop = this.gobbleBinaryOp();
		if (!biop) return left;
		biop_info = {
			value: biop,
			prec: Jsep.binaryPrecedence(biop),
			right_a: Jsep.right_associative.has(biop)
		};
		right = this.gobbleToken();
		if (!right) this.throwError("Expected expression after " + biop);
		stack$1 = [
			left,
			biop_info,
			right
		];
		while (biop = this.gobbleBinaryOp()) {
			prec = Jsep.binaryPrecedence(biop);
			if (prec === 0) {
				this.index -= biop.length;
				break;
			}
			biop_info = {
				value: biop,
				prec,
				right_a: Jsep.right_associative.has(biop)
			};
			cur_biop = biop;
			const comparePrev = (prev$1) => biop_info.right_a && prev$1.right_a ? prec > prev$1.prec : prec <= prev$1.prec;
			while (stack$1.length > 2 && comparePrev(stack$1[stack$1.length - 2])) {
				right = stack$1.pop();
				biop = stack$1.pop().value;
				left = stack$1.pop();
				node$1 = {
					type: Jsep.BINARY_EXP,
					operator: biop,
					left,
					right
				};
				stack$1.push(node$1);
			}
			node$1 = this.gobbleToken();
			if (!node$1) this.throwError("Expected expression after " + cur_biop);
			stack$1.push(biop_info, node$1);
		}
		i$1 = stack$1.length - 1;
		node$1 = stack$1[i$1];
		while (i$1 > 1) {
			node$1 = {
				type: Jsep.BINARY_EXP,
				operator: stack$1[i$1 - 1].value,
				left: stack$1[i$1 - 2],
				right: node$1
			};
			i$1 -= 2;
		}
		return node$1;
	}
	/**
	* An individual part of a binary expression:
	* e.g. `foo.bar(baz)`, `1`, `"abc"`, `(a % 2)` (because it's in parenthesis)
	* @returns {boolean|jsep.Expression}
	*/
	gobbleToken() {
		let ch, to_check, tc_len, node$1;
		this.gobbleSpaces();
		node$1 = this.searchHook("gobble-token");
		if (node$1) return this.runHook("after-token", node$1);
		ch = this.code;
		if (Jsep.isDecimalDigit(ch) || ch === Jsep.PERIOD_CODE) return this.gobbleNumericLiteral();
		if (ch === Jsep.SQUOTE_CODE || ch === Jsep.DQUOTE_CODE) node$1 = this.gobbleStringLiteral();
		else if (ch === Jsep.OBRACK_CODE) node$1 = this.gobbleArray();
		else {
			to_check = this.expr.substr(this.index, Jsep.max_unop_len);
			tc_len = to_check.length;
			while (tc_len > 0) {
				if (Jsep.unary_ops.hasOwnProperty(to_check) && (!Jsep.isIdentifierStart(this.code) || this.index + to_check.length < this.expr.length && !Jsep.isIdentifierPart(this.expr.charCodeAt(this.index + to_check.length)))) {
					this.index += tc_len;
					const argument = this.gobbleToken();
					if (!argument) this.throwError("missing unaryOp argument");
					return this.runHook("after-token", {
						type: Jsep.UNARY_EXP,
						operator: to_check,
						argument,
						prefix: true
					});
				}
				to_check = to_check.substr(0, --tc_len);
			}
			if (Jsep.isIdentifierStart(ch)) {
				node$1 = this.gobbleIdentifier();
				if (Jsep.literals.hasOwnProperty(node$1.name)) node$1 = {
					type: Jsep.LITERAL,
					value: Jsep.literals[node$1.name],
					raw: node$1.name
				};
				else if (node$1.name === Jsep.this_str) node$1 = { type: Jsep.THIS_EXP };
			} else if (ch === Jsep.OPAREN_CODE) node$1 = this.gobbleGroup();
		}
		if (!node$1) return this.runHook("after-token", false);
		node$1 = this.gobbleTokenProperty(node$1);
		return this.runHook("after-token", node$1);
	}
	/**
	* Gobble properties of of identifiers/strings/arrays/groups.
	* e.g. `foo`, `bar.baz`, `foo['bar'].baz`
	* It also gobbles function calls:
	* e.g. `Math.acos(obj.angle)`
	* @param {jsep.Expression} node
	* @returns {jsep.Expression}
	*/
	gobbleTokenProperty(node$1) {
		this.gobbleSpaces();
		let ch = this.code;
		while (ch === Jsep.PERIOD_CODE || ch === Jsep.OBRACK_CODE || ch === Jsep.OPAREN_CODE || ch === Jsep.QUMARK_CODE) {
			let optional$1;
			if (ch === Jsep.QUMARK_CODE) {
				if (this.expr.charCodeAt(this.index + 1) !== Jsep.PERIOD_CODE) break;
				optional$1 = true;
				this.index += 2;
				this.gobbleSpaces();
				ch = this.code;
			}
			this.index++;
			if (ch === Jsep.OBRACK_CODE) {
				node$1 = {
					type: Jsep.MEMBER_EXP,
					computed: true,
					object: node$1,
					property: this.gobbleExpression()
				};
				if (!node$1.property) this.throwError("Unexpected \"" + this.char + "\"");
				this.gobbleSpaces();
				ch = this.code;
				if (ch !== Jsep.CBRACK_CODE) this.throwError("Unclosed [");
				this.index++;
			} else if (ch === Jsep.OPAREN_CODE) node$1 = {
				type: Jsep.CALL_EXP,
				"arguments": this.gobbleArguments(Jsep.CPAREN_CODE),
				callee: node$1
			};
			else if (ch === Jsep.PERIOD_CODE || optional$1) {
				if (optional$1) this.index--;
				this.gobbleSpaces();
				node$1 = {
					type: Jsep.MEMBER_EXP,
					computed: false,
					object: node$1,
					property: this.gobbleIdentifier()
				};
			}
			if (optional$1) node$1.optional = true;
			this.gobbleSpaces();
			ch = this.code;
		}
		return node$1;
	}
	/**
	* Parse simple numeric literals: `12`, `3.4`, `.5`. Do this by using a string to
	* keep track of everything in the numeric literal and then calling `parseFloat` on that string
	* @returns {jsep.Literal}
	*/
	gobbleNumericLiteral() {
		let number$2 = "", ch, chCode;
		while (Jsep.isDecimalDigit(this.code)) number$2 += this.expr.charAt(this.index++);
		if (this.code === Jsep.PERIOD_CODE) {
			number$2 += this.expr.charAt(this.index++);
			while (Jsep.isDecimalDigit(this.code)) number$2 += this.expr.charAt(this.index++);
		}
		ch = this.char;
		if (ch === "e" || ch === "E") {
			number$2 += this.expr.charAt(this.index++);
			ch = this.char;
			if (ch === "+" || ch === "-") number$2 += this.expr.charAt(this.index++);
			while (Jsep.isDecimalDigit(this.code)) number$2 += this.expr.charAt(this.index++);
			if (!Jsep.isDecimalDigit(this.expr.charCodeAt(this.index - 1))) this.throwError("Expected exponent (" + number$2 + this.char + ")");
		}
		chCode = this.code;
		if (Jsep.isIdentifierStart(chCode)) this.throwError("Variable names cannot start with a number (" + number$2 + this.char + ")");
		else if (chCode === Jsep.PERIOD_CODE || number$2.length === 1 && number$2.charCodeAt(0) === Jsep.PERIOD_CODE) this.throwError("Unexpected period");
		return {
			type: Jsep.LITERAL,
			value: parseFloat(number$2),
			raw: number$2
		};
	}
	/**
	* Parses a string literal, staring with single or double quotes with basic support for escape codes
	* e.g. `"hello world"`, `'this is\nJSEP'`
	* @returns {jsep.Literal}
	*/
	gobbleStringLiteral() {
		let str = "";
		const startIndex = this.index;
		const quote = this.expr.charAt(this.index++);
		let closed = false;
		while (this.index < this.expr.length) {
			let ch = this.expr.charAt(this.index++);
			if (ch === quote) {
				closed = true;
				break;
			} else if (ch === "\\") {
				ch = this.expr.charAt(this.index++);
				switch (ch) {
					case "n":
						str += "\n";
						break;
					case "r":
						str += "\r";
						break;
					case "t":
						str += "	";
						break;
					case "b":
						str += "\b";
						break;
					case "f":
						str += "\f";
						break;
					case "v":
						str += "\v";
						break;
					default: str += ch;
				}
			} else str += ch;
		}
		if (!closed) this.throwError("Unclosed quote after \"" + str + "\"");
		return {
			type: Jsep.LITERAL,
			value: str,
			raw: this.expr.substring(startIndex, this.index)
		};
	}
	/**
	* Gobbles only identifiers
	* e.g.: `foo`, `_value`, `$x1`
	* Also, this function checks if that identifier is a literal:
	* (e.g. `true`, `false`, `null`) or `this`
	* @returns {jsep.Identifier}
	*/
	gobbleIdentifier() {
		let ch = this.code, start = this.index;
		if (Jsep.isIdentifierStart(ch)) this.index++;
		else this.throwError("Unexpected " + this.char);
		while (this.index < this.expr.length) {
			ch = this.code;
			if (Jsep.isIdentifierPart(ch)) this.index++;
			else break;
		}
		return {
			type: Jsep.IDENTIFIER,
			name: this.expr.slice(start, this.index)
		};
	}
	/**
	* Gobbles a list of arguments within the context of a function call
	* or array literal. This function also assumes that the opening character
	* `(` or `[` has already been gobbled, and gobbles expressions and commas
	* until the terminator character `)` or `]` is encountered.
	* e.g. `foo(bar, baz)`, `my_func()`, or `[bar, baz]`
	* @param {number} termination
	* @returns {jsep.Expression[]}
	*/
	gobbleArguments(termination) {
		const args = [];
		let closed = false;
		let separator_count = 0;
		while (this.index < this.expr.length) {
			this.gobbleSpaces();
			let ch_i = this.code;
			if (ch_i === termination) {
				closed = true;
				this.index++;
				if (termination === Jsep.CPAREN_CODE && separator_count && separator_count >= args.length) this.throwError("Unexpected token " + String.fromCharCode(termination));
				break;
			} else if (ch_i === Jsep.COMMA_CODE) {
				this.index++;
				separator_count++;
				if (separator_count !== args.length) {
					if (termination === Jsep.CPAREN_CODE) this.throwError("Unexpected token ,");
					else if (termination === Jsep.CBRACK_CODE) for (let arg = args.length; arg < separator_count; arg++) args.push(null);
				}
			} else if (args.length !== separator_count && separator_count !== 0) this.throwError("Expected comma");
			else {
				const node$1 = this.gobbleExpression();
				if (!node$1 || node$1.type === Jsep.COMPOUND) this.throwError("Expected comma");
				args.push(node$1);
			}
		}
		if (!closed) this.throwError("Expected " + String.fromCharCode(termination));
		return args;
	}
	/**
	* Responsible for parsing a group of things within parentheses `()`
	* that have no identifier in front (so not a function call)
	* This function assumes that it needs to gobble the opening parenthesis
	* and then tries to gobble everything within that parenthesis, assuming
	* that the next thing it should see is the close parenthesis. If not,
	* then the expression probably doesn't have a `)`
	* @returns {boolean|jsep.Expression}
	*/
	gobbleGroup() {
		this.index++;
		let nodes = this.gobbleExpressions(Jsep.CPAREN_CODE);
		if (this.code === Jsep.CPAREN_CODE) {
			this.index++;
			if (nodes.length === 1) return nodes[0];
			else if (!nodes.length) return false;
			else return {
				type: Jsep.SEQUENCE_EXP,
				expressions: nodes
			};
		} else this.throwError("Unclosed (");
	}
	/**
	* Responsible for parsing Array literals `[1, 2, 3]`
	* This function assumes that it needs to gobble the opening bracket
	* and then tries to gobble the expressions as arguments.
	* @returns {jsep.ArrayExpression}
	*/
	gobbleArray() {
		this.index++;
		return {
			type: Jsep.ARRAY_EXP,
			elements: this.gobbleArguments(Jsep.CBRACK_CODE)
		};
	}
};
const hooks = new Hooks();
Object.assign(Jsep, {
	hooks,
	plugins: new Plugins(Jsep),
	COMPOUND: "Compound",
	SEQUENCE_EXP: "SequenceExpression",
	IDENTIFIER: "Identifier",
	MEMBER_EXP: "MemberExpression",
	LITERAL: "Literal",
	THIS_EXP: "ThisExpression",
	CALL_EXP: "CallExpression",
	UNARY_EXP: "UnaryExpression",
	BINARY_EXP: "BinaryExpression",
	ARRAY_EXP: "ArrayExpression",
	TAB_CODE: 9,
	LF_CODE: 10,
	CR_CODE: 13,
	SPACE_CODE: 32,
	PERIOD_CODE: 46,
	COMMA_CODE: 44,
	SQUOTE_CODE: 39,
	DQUOTE_CODE: 34,
	OPAREN_CODE: 40,
	CPAREN_CODE: 41,
	OBRACK_CODE: 91,
	CBRACK_CODE: 93,
	QUMARK_CODE: 63,
	SEMCOL_CODE: 59,
	COLON_CODE: 58,
	unary_ops: {
		"-": 1,
		"!": 1,
		"~": 1,
		"+": 1
	},
	binary_ops: {
		"||": 1,
		"??": 1,
		"&&": 2,
		"|": 3,
		"^": 4,
		"&": 5,
		"==": 6,
		"!=": 6,
		"===": 6,
		"!==": 6,
		"<": 7,
		">": 7,
		"<=": 7,
		">=": 7,
		"<<": 8,
		">>": 8,
		">>>": 8,
		"+": 9,
		"-": 9,
		"*": 10,
		"/": 10,
		"%": 10,
		"**": 11
	},
	right_associative: new Set(["**"]),
	additional_identifier_chars: new Set(["$", "_"]),
	literals: {
		"true": true,
		"false": false,
		"null": null
	},
	this_str: "this"
});
Jsep.max_unop_len = Jsep.getMaxKeyLen(Jsep.unary_ops);
Jsep.max_binop_len = Jsep.getMaxKeyLen(Jsep.binary_ops);
const jsep = (expr) => new Jsep(expr).parse();
const stdClassProps = Object.getOwnPropertyNames(class Test {});
Object.getOwnPropertyNames(Jsep).filter((prop$1) => !stdClassProps.includes(prop$1) && jsep[prop$1] === void 0).forEach((m) => {
	jsep[m] = Jsep[m];
});
jsep.Jsep = Jsep;
const CONDITIONAL_EXP = "ConditionalExpression";
jsep.plugins.register({
	name: "ternary",
	init(jsep$1) {
		jsep$1.hooks.add("after-expression", function gobbleTernary(env) {
			if (env.node && this.code === jsep$1.QUMARK_CODE) {
				this.index++;
				const test = env.node;
				const consequent = this.gobbleExpression();
				if (!consequent) this.throwError("Expected expression");
				this.gobbleSpaces();
				if (this.code === jsep$1.COLON_CODE) {
					this.index++;
					const alternate = this.gobbleExpression();
					if (!alternate) this.throwError("Expected expression");
					env.node = {
						type: CONDITIONAL_EXP,
						test,
						consequent,
						alternate
					};
					if (test.operator && jsep$1.binary_ops[test.operator] <= .9) {
						let newTest = test;
						while (newTest.right.operator && jsep$1.binary_ops[newTest.right.operator] <= .9) newTest = newTest.right;
						env.node.test = newTest.right;
						newTest.right = env.node;
						env.node = test;
					}
				} else this.throwError("Expected :");
			}
		});
	}
});
const FSLASH_CODE = 47;
const BSLASH_CODE = 92;
var index = {
	name: "regex",
	init(jsep$1) {
		jsep$1.hooks.add("gobble-token", function gobbleRegexLiteral(env) {
			if (this.code === FSLASH_CODE) {
				const patternIndex = ++this.index;
				let inCharSet = false;
				while (this.index < this.expr.length) {
					if (this.code === FSLASH_CODE && !inCharSet) {
						const pattern = this.expr.slice(patternIndex, this.index);
						let flags = "";
						while (++this.index < this.expr.length) {
							const code = this.code;
							if (code >= 97 && code <= 122 || code >= 65 && code <= 90 || code >= 48 && code <= 57) flags += this.char;
							else break;
						}
						let value;
						try {
							value = new RegExp(pattern, flags);
						} catch (e) {
							this.throwError(e.message);
						}
						env.node = {
							type: jsep$1.LITERAL,
							value,
							raw: this.expr.slice(patternIndex - 1, this.index)
						};
						env.node = this.gobbleTokenProperty(env.node);
						return env.node;
					}
					if (this.code === jsep$1.OBRACK_CODE) inCharSet = true;
					else if (inCharSet && this.code === jsep$1.CBRACK_CODE) inCharSet = false;
					this.index += this.code === BSLASH_CODE ? 2 : 1;
				}
				this.throwError("Unclosed Regex");
			}
		});
	}
};
const PLUS_CODE = 43;
const plugin = {
	name: "assignment",
	assignmentOperators: new Set([
		"=",
		"*=",
		"**=",
		"/=",
		"%=",
		"+=",
		"-=",
		"<<=",
		">>=",
		">>>=",
		"&=",
		"^=",
		"|=",
		"||=",
		"&&=",
		"??="
	]),
	updateOperators: [PLUS_CODE, 45],
	assignmentPrecedence: .9,
	init(jsep$1) {
		const updateNodeTypes = [jsep$1.IDENTIFIER, jsep$1.MEMBER_EXP];
		plugin.assignmentOperators.forEach((op) => jsep$1.addBinaryOp(op, plugin.assignmentPrecedence, true));
		jsep$1.hooks.add("gobble-token", function gobbleUpdatePrefix(env) {
			const code = this.code;
			if (plugin.updateOperators.some((c$1) => c$1 === code && c$1 === this.expr.charCodeAt(this.index + 1))) {
				this.index += 2;
				env.node = {
					type: "UpdateExpression",
					operator: code === PLUS_CODE ? "++" : "--",
					argument: this.gobbleTokenProperty(this.gobbleIdentifier()),
					prefix: true
				};
				if (!env.node.argument || !updateNodeTypes.includes(env.node.argument.type)) this.throwError(`Unexpected ${env.node.operator}`);
			}
		});
		jsep$1.hooks.add("after-token", function gobbleUpdatePostfix(env) {
			if (env.node) {
				const code = this.code;
				if (plugin.updateOperators.some((c$1) => c$1 === code && c$1 === this.expr.charCodeAt(this.index + 1))) {
					if (!updateNodeTypes.includes(env.node.type)) this.throwError(`Unexpected ${env.node.operator}`);
					this.index += 2;
					env.node = {
						type: "UpdateExpression",
						operator: code === PLUS_CODE ? "++" : "--",
						argument: env.node,
						prefix: false
					};
				}
			}
		});
		jsep$1.hooks.add("after-expression", function gobbleAssignment(env) {
			if (env.node) updateBinariesToAssignments(env.node);
		});
		function updateBinariesToAssignments(node$1) {
			if (plugin.assignmentOperators.has(node$1.operator)) {
				node$1.type = "AssignmentExpression";
				updateBinariesToAssignments(node$1.left);
				updateBinariesToAssignments(node$1.right);
			} else if (!node$1.operator) Object.values(node$1).forEach((val$1) => {
				if (val$1 && typeof val$1 === "object") updateBinariesToAssignments(val$1);
			});
		}
	}
};
/**
* @import {EvaluatedResult, UnknownResult} from './jsonpath.js';
*/
/**
* @typedef {any} AssignmentExpression
*/
/**
* @typedef {any} Substitution
*/
/**
* @typedef {any} AnyParameter
*/
/**
* @typedef {Record<string, Substitution>} Substitutions
*/
jsep.plugins.register(index, plugin);
jsep.addUnaryOp("typeof");
jsep.addUnaryOp("void");
jsep.addLiteral("null", null);
jsep.addLiteral("undefined", void 0);
const BLOCKED_PROTO_PROPERTIES = new Set([
	"constructor",
	"__proto__",
	"__defineGetter__",
	"__defineSetter__",
	"__lookupGetter__",
	"__lookupSetter__"
]);
/** @type {WeakSet<object>} */
const BLOCKED_FUNCTIONS = new WeakSet([
	Function,
	function* () {}.constructor,
	async function() {}.constructor,
	async function* () {}.constructor,
	Function.prototype.call,
	Function.prototype.apply,
	Function.prototype.bind,
	Reflect.apply,
	Reflect.construct,
	...[...BLOCKED_PROTO_PROPERTIES].map((name$1) => Reflect.get(Object.prototype, name$1)).filter((value) => typeof value === "function")
]);
/**
* @param {UnknownResult} value
* @returns {boolean}
*/
const isBlockedFunction = (value) => {
	return typeof value === "function" && BLOCKED_FUNCTIONS.has(value);
};
/**
* Guarded `obj[prop]`, applying the same restrictions as a MemberExpression.
* @param {UnknownResult} obj
* @param {string} prop
* @returns {UnknownResult}
*/
const getSafeProperty = (obj, prop$1) => {
	if (obj === void 0 || obj === null) throw new TypeError(`Cannot read properties of ${obj} (reading '${prop$1}')`);
	if (!Object.hasOwn(obj, prop$1) && BLOCKED_PROTO_PROPERTIES.has(prop$1)) throw new TypeError(`Cannot read properties of ${obj} (reading '${prop$1}')`);
	const result = obj[prop$1];
	if (isBlockedFunction(result)) throw new TypeError("Function constructor is disabled");
	return result;
};
/**
* @typedef {Record<
*   string,
*   (a: AnyParameter, b: AnyParameter) => UnknownResult
* >} OperatorTable
*/
const BINOPS = Object.assign(
	Object.create(null),
	/** @type {OperatorTable} */
	{
		"||": (a, b) => a || b(),
		"&&": (a, b) => a && b(),
		"|": (a, b) => a | b(),
		"^": (a, b) => a ^ b(),
		"&": (a, b) => a & b(),
		"==": (a, b) => a == b(),
		"!=": (a, b) => a != b(),
		"===": (a, b) => a === b(),
		"!==": (a, b) => a !== b(),
		"<": (a, b) => a < b(),
		">": (a, b) => a > b(),
		"<=": (a, b) => a <= b(),
		">=": (a, b) => a >= b(),
		"<<": (a, b) => a << b(),
		">>": (a, b) => a >> b(),
		">>>": (a, b) => a >>> b(),
		"+": (a, b) => a + b(),
		"-": (a, b) => a - b(),
		"*": (a, b) => a * b(),
		"/": (a, b) => a / b(),
		"%": (a, b) => a % b()
	}
);
/**
* @typedef {{
*   [key: string]: (a: AnyParameter) => UnknownResult
* }} UnaryOperatorTable
*/
const UNOPS = Object.assign(
	Object.create(null),
	/** @type {UnaryOperatorTable} */
	{
		"-": (a) => -a,
		"!": (a) => !a,
		"~": (a) => ~a,
		"+": (a) => +a,
		typeof: (a) => typeof a,
		void: () => void 0
	}
);
const SafeEval = {
	evalAst(ast, subs) {
		switch (ast.type) {
			case "BinaryExpression":
			case "LogicalExpression": return SafeEval.evalBinaryExpression(
				/** @type {jsep.BinaryExpression} */
				ast,
				subs
			);
			case "Compound": return SafeEval.evalCompound(
				/** @type {jsep.Compound} */
				ast,
				subs
			);
			case "ConditionalExpression": return SafeEval.evalConditionalExpression(
				/** @type {jsep.ConditionalExpression} */
				ast,
				subs
			);
			case "Identifier": return SafeEval.evalIdentifier(
				/** @type {jsep.Identifier} */
				ast,
				subs
			);
			case "Literal": return SafeEval.evalLiteral(
				/** @type {jsep.Literal} */
				ast
			);
			case "MemberExpression": return SafeEval.evalMemberExpression(
				/** @type {jsep.MemberExpression} */
				ast,
				subs
			);
			case "UnaryExpression": return SafeEval.evalUnaryExpression(
				/** @type {jsep.UnaryExpression} */
				ast,
				subs
			);
			case "ArrayExpression": return SafeEval.evalArrayExpression(
				/** @type {jsep.ArrayExpression} */
				ast,
				subs
			);
			case "CallExpression": return SafeEval.evalCallExpression(
				/** @type {jsep.CallExpression} */
				ast,
				subs
			);
			case "AssignmentExpression": return SafeEval.evalAssignmentExpression(
				/** @type {AssignmentExpression} */
				ast,
				subs
			);
			default: throw new SyntaxError("Unexpected expression", { cause: ast });
		}
	},
	evalBinaryExpression(ast, subs) {
		/* c8 ignore next 3 -- Defensive guard for malformed ASTs */
		if (!Object.hasOwn(BINOPS, ast.operator)) throw new SyntaxError(`Unknown binary operator: ${ast.operator}`);
		return BINOPS[ast.operator](SafeEval.evalAst(ast.left, subs), () => SafeEval.evalAst(ast.right, subs));
	},
	evalCompound(ast, subs) {
		let last$1;
		for (let i$1 = 0; i$1 < ast.body.length; i$1++) {
			if (ast.body[i$1].type === "Identifier" && [
				"var",
				"let",
				"const"
			].includes(ast.body[i$1].name) && Object.hasOwn(ast.body, i$1 + 1) && ast.body[i$1 + 1].type === "AssignmentExpression") i$1 += 1;
			const expr = ast.body[i$1];
			last$1 = SafeEval.evalAst(expr, subs);
		}
		return last$1;
	},
	evalConditionalExpression(ast, subs) {
		return SafeEval.evalAst(ast.test, subs) ? SafeEval.evalAst(ast.consequent, subs) : SafeEval.evalAst(ast.alternate, subs);
	},
	evalIdentifier(ast, subs) {
		if (Object.hasOwn(subs, ast.name)) return subs[ast.name];
		throw new ReferenceError(`${ast.name} is not defined`);
	},
	evalLiteral(ast) {
		return ast.value;
	},
	evalMemberExpression(ast, subs) {
		const prop$1 = String(ast.computed ? SafeEval.evalAst(ast.property, subs) : ast.property.name);
		const obj = SafeEval.evalAst(ast.object, subs);
		const result = getSafeProperty(obj, prop$1);
		if (typeof result === "function") return result.bind(obj);
		return result;
	},
	evalUnaryExpression(ast, subs) {
		/* c8 ignore next 3 -- Defensive guard for malformed ASTs */
		if (!Object.hasOwn(UNOPS, ast.operator)) throw new SyntaxError(`Unknown unary operator: ${ast.operator}`);
		const operand = SafeEval.evalAst(ast.argument, subs);
		return UNOPS[ast.operator](operand);
	},
	evalArrayExpression(ast, subs) {
		return ast.elements.map((el) => SafeEval.evalAst(el, subs));
	},
	evalCallExpression(ast, subs) {
		const args = ast.arguments.map((arg) => SafeEval.evalAst(arg, subs));
		const func = SafeEval.evalAst(ast.callee, subs);
		if (isBlockedFunction(func) || args.some((arg) => isBlockedFunction(arg))) throw new Error("Function constructor is disabled");
		return func(...args);
	},
	evalAssignmentExpression(ast, subs) {
		if (ast.left.type !== "Identifier") throw new SyntaxError("Invalid left-hand side in assignment");
		const id = ast.left.name;
		subs[id] = SafeEval.evalAst(ast.right, subs);
		return subs[id];
	}
};
/**
* A replacement for NodeJS' VM.Script which is also {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP | Content Security Policy} friendly.
*/
var SafeScript = class {
	/**
	* @param {string} expr Expression to evaluate
	*/
	constructor(expr) {
		this.code = expr;
		this.ast = jsep(this.code);
	}
	/**
	* @param {object} context Object whose items will be added
	*   to evaluation
	* @returns {EvaluatedResult} Result of evaluated code
	*/
	runInNewContext(context) {
		const keyMap = Object.assign(Object.create(null), context);
		return SafeEval.evalAst(
			/** @type {jsep.Expression} */
			this.ast,
			keyMap
		);
	}
};
/**
* @param {unknown} val
*/
const toStringTag = (val$1) => {
	return Object.prototype.toString.call(val$1).slice(8, -1);
};
const scriptCache = /* @__PURE__ */ new Map();
const pathCache = /* @__PURE__ */ new Map();
/**
* @typedef {any} AnyInput
*/
/**
* @typedef {((...args: any[]) => any)} SandboxCallback
*/
/**
* @typedef {any|SandboxCallback} SandboxPropertyValue
*/
/**
* @typedef {(string|number)[]} ExpressionArray
*/
/**
* @typedef {"scalar"|"boolean"|"string"|"undefined"
*   |"function"|"integer"|"number"|"nonFinite"|"object"
*   |"array"|"other"|"null"|"symbol"|"Promise"|"BigInt"
*   |"jsonReference"} ValueType
*/
/**
* @typedef {unknown} ParentValue
*/
/**
* @typedef {unknown} UnknownResult
*/
/**
* @typedef {string|number|null} ParentProperty
*/
/**
* @typedef {ReturnObject|string|number|boolean|null|unknown[]
*   |Record<string, unknown>} PreferredOutput
*/
/**
* Copies array and then pushes item into it.
* @param {ExpressionArray} arr Array to copy and into which to push
* @param {string|number} item Array item to add (to end)
* @returns {ExpressionArray} Copy of the original array
*/
function push(arr, item) {
	arr = arr.slice();
	arr.push(item);
	return arr;
}
/**
* Copies array and then unshifts item into it.
* @param {string|number} item Array item to add (to beginning)
* @param {ExpressionArray} arr Array to copy and into which to unshift
* @returns {ExpressionArray} Copy of the original array
*/
function unshift(item, arr) {
	arr = arr.slice();
	arr.unshift(item);
	return arr;
}
/**
* @typedef {object} ReturnObject
* @property {ExpressionArray|string} path
* @property {unknown} value
* @property {ParentValue} parent
* @property {ParentProperty} parentProperty
* @property {boolean} [isParentSelector]
* @property {boolean} [hasArrExpr]
* @property {ExpressionArray} [expr]
* @property {string} [pointer]
*/
/**
* @callback JSONPathCallback
* @param {any} preferredOutput Using `any` type instead of `PreferredOutput` so
*    that user can supply flexible type
* @param {"value"|"property"} type
* @param {ReturnObject} fullRetObj
* @returns {void}
*/
/**
* @callback OtherTypeCallback
* @param {unknown} val
* @param {ExpressionArray} path
* @param {ParentValue} parent
* @param {string|number|null} parentPropName
* @param {string} arg
* @returns {boolean|null}
*/
/**
* @typedef {any} ContextItem
*/
/**
* @typedef {any} EvaluatedResult
*/
/**
* @callback EvalCallback
* @param {string} code
* @param {ContextItem} context
* @returns {EvaluatedResult}
*/
/**
* @typedef {new (expr: string) => {
*   runInNewContext: (context: object) => EvaluatedResult
* }} ScriptConstructor
*/
/**
* @typedef {ScriptConstructor} EvalClass
*/
/**
* @typedef {"value"|"path"|"pointer"|"parent"|"parentProperty"
*   |"all"} ResultType
*/
/**
* @typedef {EvalCallback|EvalClass|'safe'|'native'|boolean} EvalValue
*/
/**
* @typedef {string|string[]} PathType
*/
/**
* @typedef {{Script: ScriptConstructor}} SafeScriptType
*/
/**
* @typedef {{Script: ScriptConstructor}} ScriptType
*/
/**
* @typedef {{
*   _$_path?: string,
*   _$_parentProperty?: ParentProperty,
*   _$_parent?: ParentValue,
*   _$_property?: string|number,
*   _$_root?: AnyInput,
*   _$_v?: unknown,
*   [key: string]: SandboxPropertyValue
* }} SandboxType
*/
/**
* @typedef {object} JSONPathOptions
* @property {AnyInput} [json]
* @property {PathType} [path]
* @property {ResultType} [resultType="value"]
* @property {boolean} [flatten=false]
* @property {boolean} [wrap=true]
* @property {SandboxType} [sandbox={}]
* @property {EvalValue} [eval='safe']
* @property {any|null} [parent=null]
* @property {ParentProperty} [parentProperty=null]
* @property {JSONPathCallback} [callback]
* @property {OtherTypeCallback} [otherTypeCallback] Defaults to
*   function which throws on encountering `@other`
* @property {Record<string, OtherTypeCallback>} [customTypes] Map of
*   custom type operator names to their evaluation callbacks
* @property {boolean} [autostart=true]
* @property {boolean} [ignoreEvalErrors=false]
*/
/**
* @overload
* @param {string} opts JSON path to evaluate
* @param {AnyInput} [expr] JSON object to evaluate against
* @param {JSONPathCallback} [obj] Passed 3 arguments: 1) desired
*     payload per `resultType`, 2) `"value"|"property"`, 3) Full returned
*     object with all payloads
* @param {OtherTypeCallback} [callback] If `@other()` is at the
*   end of one's query, this will be invoked with the value of the item,
*   its path, its parent, and its parent's property name, and it should
*   return a boolean indicating whether the supplied value belongs to the
*   "other" type or not (or it may handle transformations and return
*   `false`).
* @param {undefined} [otherTypeCallback]
* @returns {unknown} The string form always has `autostart` implicitly
*   `true`, so the result is the evaluated value, not a `JSONPathClass`
*/
/**
* @overload
* @param {JSONPathOptions & {autostart: false}} opts An options object
*   with `autostart` explicitly set to `false` defers evaluation and
*   returns the `JSONPathClass` instance instead
* @returns {JSONPathClass}
*/
/**
* @overload
* @param {JSONPathOptions} opts If a string, will be treated as
*   `expr`
* @returns {unknown}
*/
/**
* @param {JSONPathOptions|string} opts If a string, will be treated as `expr`
* @param {string|AnyInput} [expr] JSON path to evaluate
* @param {AnyInput|JSONPathCallback} [obj] JSON object to evaluate against
* @param {JSONPathCallback|OtherTypeCallback} [callback] Passed 3
*     arguments: 1) desired payload per `resultType`,
*     2) `"value"|"property"`, 3) Full returned object with
*     all payloads
* @param {OtherTypeCallback} [otherTypeCallback] If `@other()` is at the end
*   of one's query, this will be invoked with the value of the item, its
*   path, its parent, and its parent's property name, and it should return
*   a boolean indicating whether the supplied value belongs to the "other"
*   type or not (or it may handle transformations and return `false`).
* @throws {Error}
* @returns {unknown|JSONPathClass}
*/
function JSONPath(opts, expr, obj, callback, otherTypeCallback) {
	try {
		if (opts && typeof opts === "object") return new JSONPathClass(opts);
		return new JSONPathClass(
			opts,
			expr,
			/** @type {JSONPathCallback|undefined} */
			obj,
			/** @type {OtherTypeCallback|undefined} */
			callback,
			/** @type {undefined} */
			otherTypeCallback
		);
	} catch (e) {
		if (new.target) throw e;
		if (e && typeof e === "object" && "value" in e) return e.value;
		throw e;
	}
}
/**
*
*/
var JSONPathClass = class {
	/**
	* @overload
	* @param {string} opts JSON path to evaluate
	* @param {AnyInput} [expr] JSON object to evaluate against
	* @param {JSONPathCallback} [obj] Passed 3 arguments: 1) desired
	*     payload per `resultType`, 2) `"value"|"property"`, 3) Full returned
	*     object with all payloads
	* @param {OtherTypeCallback} [callback] If `@other()` is at the
	*   end of one's query, this will be invoked with the value of the item,
	*   its path, its parent, and its parent's property name, and it should
	*   return a boolean indicating whether the supplied value belongs to the
	*   "other" type or not (or it may handle transformations and return
	*   `false`).
	* @param {undefined} [otherTypeCallback]
	*/
	/**
	* @overload
	* @param {JSONPathOptions} opts If a string, will be treated as
	*   `expr`
	*/
	/**
	* @param {null|string|JSONPathOptions} opts If a string, will be treated as
	*   `expr`
	* @param {string|AnyInput} [expr] JSON path to evaluate
	* @param {AnyInput|JSONPathCallback} [obj] JSON object to evaluate against
	* @param {JSONPathCallback|OtherTypeCallback} [callback] Passed 3
	*     arguments: 1) desired payload per `resultType`,
	*     2) `"value"|"property"`, 3) Full returned
	*     object with all payloads
	* @param {OtherTypeCallback} [otherTypeCallback] If `@other()` is at the
	*   end of one's query, this will be invoked with the value of the item,
	*   its path, its parent, and its parent's property name, and it should
	*   return a boolean indicating whether the supplied value belongs to the
	*   "other" type or not (or it may handle transformations and return
	*   `false`).
	*/
	constructor(opts, expr, obj, callback, otherTypeCallback) {
		if (typeof opts === "string") {
			otherTypeCallback = callback;
			callback = obj;
			obj = expr;
			expr = opts;
			opts = null;
		}
		const optObj = opts && typeof opts === "object";
		opts ||= (		/** @type {JSONPathOptions} */ {});
		/** @type {ResultType|undefined} */
		this.currResultType = void 0;
		/** @type {EvalValue|undefined} */
		this.currEval = void 0;
		/** @type {OtherTypeCallback|undefined} */
		this.currOtherTypeCallback = void 0;
		/** @type {Record<string, OtherTypeCallback>|undefined} */
		this.currCustomTypes = void 0;
		/** @type {SandboxType|undefined} */
		this.currSandbox = void 0;
		this._hasParentSelector = false;
		this.json = opts.json || obj;
		this.path = opts.path || expr;
		this.resultType = opts.resultType || "value";
		this.flatten = Object.hasOwn(opts, "flatten") && opts.flatten;
		this.wrap = !Object.hasOwn(opts, "wrap") || opts.wrap;
		this.sandbox = opts.sandbox || {};
		this.eval = opts.eval === void 0 ? "safe" : opts.eval;
		this.ignoreEvalErrors = typeof opts.ignoreEvalErrors !== "undefined" && opts.ignoreEvalErrors;
		this.parent = Object.hasOwn(opts, "parent") ? opts.parent : null;
		this.parentProperty = Object.hasOwn(opts, "parentProperty") ? opts.parentProperty : null;
		this.callback = opts.callback || callback || null;
		this.otherTypeCallback = opts.otherTypeCallback || otherTypeCallback || function() {
			throw new TypeError("You must supply an otherTypeCallback callback option with the @other() operator.");
		};
		this.customTypes = opts.customTypes || {};
		if (opts.autostart === false) return;
		const args = (		/** @type {JSONPathOptions} */ { path: optObj ? opts.path : expr });
		if (!optObj && obj !== void 0) args.json = obj;
		else if ("json" in opts) args.json = opts.json;
		const ret = this.evaluate(args);
		if (!ret || typeof ret !== "object") {
			const err = /* @__PURE__ */ new Error("JSONPath should not be called with \"new\" (it prevents return of (unwrapped) scalar values)");
			err.value = ret;
			throw err;
		}
		return ret;
	}
	/**
	* @overload
	* @param {JSONPathOptions} [expr]
	* @returns {ReturnObject|ReturnObject[]|undefined|unknown}
	*/
	/**
	* @overload
	* @param {PathType|undefined} [expr]
	* @param {AnyInput} [json]
	* @param {JSONPathCallback|null} [callback]
	* @param {OtherTypeCallback} [otherTypeCallback]
	* @returns {ReturnObject|ReturnObject[]|undefined|unknown}
	*/
	/**
	* @param {PathType|JSONPathOptions|undefined} [expr]
	* @param {AnyInput} [json]
	* @param {JSONPathCallback|null} [callback]
	* @param {OtherTypeCallback} [otherTypeCallback]
	* @returns {ReturnObject|ReturnObject[]|undefined|unknown}
	*/
	evaluate(expr, json, callback, otherTypeCallback) {
		let currParent = this.parent, currParentProperty = this.parentProperty;
		let { flatten, wrap: wrap$1 } = this;
		this.currResultType = this.resultType;
		this.currEval = this.eval;
		this.currSandbox = this.sandbox;
		callback ||= this.callback;
		this.currOtherTypeCallback = otherTypeCallback || this.otherTypeCallback;
		this.currCustomTypes = this.customTypes;
		if (expr && typeof expr === "object" && !Array.isArray(expr)) {
			const exprObj = expr;
			if (!exprObj.path && exprObj.path !== "") throw new TypeError("You must supply a \"path\" property when providing an object argument to JSONPath.evaluate().");
			if (!Object.hasOwn(exprObj, "json")) throw new TypeError("You must supply a \"json\" property when providing an object argument to JSONPath.evaluate().");
			({json} = exprObj);
			flatten = Object.hasOwn(exprObj, "flatten") ? exprObj.flatten : flatten;
			this.currResultType = Object.hasOwn(exprObj, "resultType") ? exprObj.resultType : this.currResultType;
			this.currSandbox = Object.hasOwn(exprObj, "sandbox") ? exprObj.sandbox : this.currSandbox;
			wrap$1 = Object.hasOwn(exprObj, "wrap") ? exprObj.wrap : wrap$1;
			this.currEval = Object.hasOwn(exprObj, "eval") ? exprObj.eval : this.currEval;
			callback = Object.hasOwn(exprObj, "callback") ? exprObj.callback : callback;
			this.currOtherTypeCallback = Object.hasOwn(exprObj, "otherTypeCallback") ? exprObj.otherTypeCallback : this.currOtherTypeCallback;
			this.currCustomTypes = Object.hasOwn(exprObj, "customTypes") ? exprObj.customTypes : this.currCustomTypes;
			currParent = Object.hasOwn(exprObj, "parent") ? exprObj.parent : currParent;
			currParentProperty = Object.hasOwn(exprObj, "parentProperty") ? exprObj.parentProperty : currParentProperty;
			expr = exprObj.path;
		} else {
			json ||= this.json;
			expr ||= this.path;
		}
		currParent ||= null;
		currParentProperty ||= null;
		if (Array.isArray(expr)) expr = JSONPath.toPathString(expr);
		if (!json || !expr && expr !== "") return;
		const exprList = JSONPath.toPathArray(expr);
		if (exprList[0] === "$" && exprList.length > 1) exprList.shift();
		this._hasParentSelector = false;
		const traceResult = this._trace(exprList, json, ["$"], currParent, currParentProperty, callback ?? void 0, void 0);
		/* c8 ignore next 2 -- Unreachable: _trace returns array when hasArrExpr set */
		const result = (Array.isArray(traceResult) ? traceResult : [traceResult]).filter((ea) => {
			return ea && !ea.isParentSelector;
		});
		if (!result.length)
 /* c8 ignore next -- Unreachable: valid queries always produce results */
		return wrap$1 ? [] : void 0;
		if (!wrap$1 && result.length === 1 && !result[0].hasArrExpr) return this._getPreferredOutput(result[0]);
		return result.reduce((rslt, ea) => {
			const valOrPath = this._getPreferredOutput(ea);
			if (flatten && Array.isArray(valOrPath)) rslt = rslt.concat(valOrPath);
			else rslt.push(valOrPath);
			return rslt;
		}, []);
	}
	/**
	* @param {ReturnObject} ea
	* @returns {PreferredOutput}
	*/
	_getPreferredOutput(ea) {
		const resultType = this.currResultType;
		switch (resultType) {
			case "all": {
				const path = Array.isArray(ea.path) ? ea.path : JSONPath.toPathArray(ea.path);
				ea.pointer = JSONPath.toPointer(
					/** @type {string[]} */
					path
				);
				ea.path = typeof ea.path === "string" ? ea.path : JSONPath.toPathString(
					/** @type {string[]} */
					ea.path
				);
				return ea;
			}
			case "value":
			case "parent":
			case "parentProperty": return ea[resultType];
			case "path":
				if (typeof ea.path === "string") return ea.path;
				return JSONPath.toPathString(
					/** @type {string[]} */
					ea.path
				);
			case "pointer": {
				const pathArray = Array.isArray(ea.path) ? ea.path : JSONPath.toPathArray(ea.path);
				return JSONPath.toPointer(
					/** @type {string[]} */
					pathArray
				);
			}
			default: throw new TypeError("Unknown result type");
		}
	}
	/**
	* @param {ReturnObject} fullRetObj
	* @param {JSONPathCallback|undefined} callback
	* @param {"value"|"property"} type
	* @returns {void}
	*/
	_handleCallback(fullRetObj, callback, type) {
		if (!callback) return;
		const preferredOutput = this._getPreferredOutput(fullRetObj);
		if (Array.isArray(fullRetObj.path)) fullRetObj.path = JSONPath.toPathString(
			/** @type {string[]} */
			fullRetObj.path
		);
		callback(preferredOutput, type, fullRetObj);
	}
	/**
	*
	* @param {ExpressionArray} expr
	* @param {unknown} val
	* @param {ExpressionArray} path
	* @param {ParentValue} parent
	* @param {ParentProperty} parentPropName
	* @param {JSONPathCallback|undefined} callback
	* @param {boolean|undefined} hasArrExpr
	* @param {boolean} [literalPriority]
	* @returns {ReturnObject|ReturnObject[]}
	*/
	_trace(expr, val$1, path, parent$1, parentPropName, callback, hasArrExpr, literalPriority) {
		let retObj;
		if (!expr.length) {
			retObj = {
				path,
				value: val$1,
				parent: parent$1,
				parentProperty: parentPropName,
				hasArrExpr
			};
			this._handleCallback(retObj, callback, "value");
			return retObj;
		}
		const loc = expr[0], x = expr.slice(1);
		/** @type {ReturnObject[]} */
		const ret = [];
		/**
		*
		* @param {ReturnObject|ReturnObject[]} elems
		* @returns {void}
		*/
		function addRet(elems) {
			if (Array.isArray(elems)) elems.forEach((t) => {
				ret.push(t);
			});
			else ret.push(elems);
		}
		if (val$1 && (typeof loc !== "string" || literalPriority) && Object.hasOwn(
			val$1,
			/** @type {PropertyKey} */
			loc
		)) {
			const valObj = val$1;
			addRet(this._trace(
				x,
				valObj[loc],
				push(path, loc),
				val$1,
				/** @type {string|number} */
				loc,
				callback,
				hasArrExpr
			));
		} else if (loc === "*") this._walk(val$1, (m) => {
			const valObj = val$1;
			addRet(this._trace(x, valObj[m], push(path, m), val$1, m, callback, true, true));
		});
		else if (loc === "..") {
			addRet(this._trace(x, val$1, path, parent$1, parentPropName, callback, hasArrExpr));
			this._walk(val$1, (m) => {
				const valObj = val$1;
				if (typeof valObj[m] === "object") addRet(this._trace(expr.slice(), valObj[m], push(path, m), val$1, m, callback, true));
			});
		} else if (loc === "^") {
			this._hasParentSelector = true;
			return (			/** @type {ReturnObject} */ {
				path: path.slice(0, -1),
				expr: x,
				isParentSelector: true,
				value: void 0,
				parent: void 0,
				parentProperty: null
			});
		} else if (loc === "~") {
			retObj = {
				path: push(path, loc),
				value: parentPropName,
				parent: parent$1,
				parentProperty: null
			};
			this._handleCallback(retObj, callback, "property");
			return retObj;
		} else if (loc === "$") addRet(this._trace(x, val$1, path, null, null, callback, hasArrExpr));
		else if (new RegExp("^(-?\\d*):(-?\\d*):?(\\d*)$", "v").test(loc)) {
			const sliceResult = this._slice(loc, x, val$1, path, parent$1, parentPropName, callback);
			if (sliceResult) addRet(sliceResult);
		} else if (loc.indexOf("?(") === 0) {
			if (this.currEval === false) throw new Error("Eval [?(expr)] prevented in JSONPath expression.");
			const safeLoc = loc.replace(new RegExp("^\\?\\((.*?)\\)$", "v"), "$1");
			const nested = new RegExp("@.?([^?]*)[\\['](\\??\\(.*?\\))(?!.\\)\\])[\\]']", "gv").exec(safeLoc);
			if (nested) this._walk(val$1, (m) => {
				const npath = [nested[2]];
				const valObj2 = val$1;
				const nvalue = nested[1] ? getSafeProperty(valObj2[m], nested[1]) : valObj2[m];
				const filterResults = this._trace(npath, nvalue, path, parent$1, parentPropName, callback, true);
				if ((Array.isArray(filterResults) ? filterResults : [filterResults]).length > 0) addRet(this._trace(x, valObj2[m], push(path, m), val$1, m, callback, true));
			});
			else {
				const valObj3 = val$1;
				this._walk(val$1, (m) => {
					if (this._eval(safeLoc, valObj3[m], m, path, parent$1, parentPropName)) addRet(this._trace(x, valObj3[m], push(path, m), val$1, m, callback, true));
				});
			}
		} else if (loc[0] === "(") {
			if (this.currEval === false) throw new Error("Eval [(expr)] prevented in JSONPath expression.");
			const evalResult = this._eval(
				/** @type {string} */
				loc,
				val$1,
				/** @type {string|number} */
				path.at(-1),
				path.slice(0, -1),
				parent$1,
				parentPropName
			);
			const exprToUse = evalResult !== void 0 ? evalResult : "";
			addRet(this._trace(unshift(exprToUse, x), val$1, path, parent$1, parentPropName, callback, hasArrExpr));
		} else if (loc[0] === "@") {
			let addType = false;
			const parenthIndex = loc.indexOf("(");
			const valueType = loc.slice(1, parenthIndex);
			const lastParenth = loc.lastIndexOf(")");
			const argRaw = loc.slice(parenthIndex + 1, lastParenth);
			const arg = argRaw ? JSON.parse(argRaw) : void 0;
			switch (valueType) {
				case "scalar":
					addType = !val$1 || !["object", "function"].includes(typeof val$1);
					break;
				case "boolean":
				case "string":
				case "undefined":
				case "function":
					addType = typeof val$1 === valueType;
					break;
				case "integer":
					addType = Number.isFinite(val$1) && !(val$1 % 1);
					break;
				case "number":
					addType = Number.isFinite(val$1);
					break;
				case "nonFinite":
					addType = typeof val$1 === "number" && !Number.isFinite(val$1);
					break;
				case "object":
					addType = Boolean(val$1) && typeof val$1 === valueType;
					break;
				case "array":
					addType = Array.isArray(val$1);
					break;
				case "other":
					addType = this.currOtherTypeCallback(val$1, path, parent$1, parentPropName, arg) || false;
					break;
				case "null":
					addType = val$1 === null;
					break;
				case "symbol":
					addType = typeof val$1 === "symbol";
					break;
				case "BigInt":
					addType = typeof val$1 === "bigint";
					break;
				case "Promise":
					addType = toStringTag(val$1) === "Promise";
					break;
				case "jsonReference":
					addType = Boolean(val$1) && typeof val$1 === "object" && Object.hasOwn(
						/** @type {object} */
						val$1,
						"$ref"
					);
					break;
				default: if (this.currCustomTypes && Object.hasOwn(this.currCustomTypes, valueType)) addType = this.currCustomTypes[valueType](val$1, path, parent$1, parentPropName, arg) || false;
				else throw new TypeError("Unknown value type " + valueType);
			}
			if (addType) {
				retObj = {
					path,
					value: val$1,
					parent: parent$1,
					parentProperty: parentPropName
				};
				this._handleCallback(retObj, callback, "value");
				return retObj;
			}
		} else if (val$1 && loc[0] === "`" && Object.hasOwn(val$1, loc.slice(1))) {
			const locProp = loc.slice(1);
			const valObj = val$1;
			addRet(this._trace(x, valObj[locProp], push(path, locProp), val$1, locProp, callback, hasArrExpr, true));
		} else if (loc[0] === "'" || loc[0] === "\"") for (const [, single, double] of loc.matchAll(new RegExp("'((?:\\\\.|[^'\\\\])*)'|\"((?:\\\\.|[^\"\\\\])*)\"", "gv"))) {
			const prop$1 = (single ?? double).replaceAll(new RegExp("\\\\(['\"\\\\])", "gv"), "$1");
			if (!val$1 || !Object.hasOwn(val$1, prop$1)) continue;
			const valObj = val$1;
			addRet(this._trace(x, valObj[prop$1], push(path, prop$1), val$1, prop$1, callback, true));
		}
		else if (loc.includes(",")) {
			const parts = loc.split(",");
			for (const part of parts) addRet(this._trace(unshift(part, x), val$1, path, parent$1, parentPropName, callback, true));
		} else if (!literalPriority && val$1 && Object.hasOwn(val$1, loc)) {
			const valObj = val$1;
			addRet(this._trace(x, valObj[loc], push(path, loc), val$1, loc, callback, hasArrExpr, true));
		}
		if (this._hasParentSelector) for (let t = 0; t < ret.length; t++) {
			const rett = ret[t];
			if (!rett || !rett.isParentSelector) continue;
			const exprToUse = rett.expr;
			const pathToUse = rett.path;
			const tmp = this._trace(exprToUse, val$1, pathToUse, parent$1, parentPropName, callback, hasArrExpr);
			if (Array.isArray(tmp)) {
				ret[t] = tmp[0];
				const tl = tmp.length;
				for (let tt = 1; tt < tl; tt++) {
					t++;
					ret.splice(t, 0, tmp[tt]);
				}
			} else ret[t] = tmp;
		}
		return ret;
	}
	/**
	* @param {unknown} val
	* @param {(prop: string|number) => void} f
	* @returns {void}
	*/
	_walk(val$1, f) {
		if (Array.isArray(val$1)) {
			const n = val$1.length;
			for (let i$1 = 0; i$1 < n; i$1++) f(i$1);
		} else if (val$1 && typeof val$1 === "object") Object.keys(val$1).forEach((m) => {
			f(m);
		});
	}
	/**
	* @param {string} loc
	* @param {ExpressionArray} expr
	* @param {unknown} val
	* @param {ExpressionArray} path
	* @param {ParentValue} parent
	* @param {ParentProperty} parentPropName
	* @param {JSONPathCallback|undefined} callback
	* @returns {ReturnObject[]|undefined}
	*/
	_slice(loc, expr, val$1, path, parent$1, parentPropName, callback) {
		if (!Array.isArray(val$1)) return;
		const len = val$1.length, parts = loc.split(":"), step = parts[2] && Number(parts[2]) || 1;
		let start = parts[0] && Number(parts[0]) || 0, end$1 = parts[1] ? Number(parts[1]) : len;
		start = start < 0 ? Math.max(0, start + len) : Math.min(len, start);
		end$1 = end$1 < 0 ? Math.max(0, end$1 + len) : Math.min(len, end$1);
		/** @type {ReturnObject[]} */
		const ret = [];
		for (let i$1 = start; i$1 < end$1; i$1 += step) {
			const tmp = this._trace(unshift(i$1, expr), val$1, path, parent$1, parentPropName, callback, true);
			(Array.isArray(tmp) ? tmp : [tmp]).forEach((t) => {
				ret.push(t);
			});
		}
		return ret;
	}
	/**
	* @param {string} code
	* @param {unknown} _v
	* @param {string|number} _vname
	* @param {ExpressionArray} path
	* @param {ParentValue} parent
	* @param {ParentProperty} parentPropName
	* @returns {UnknownResult}
	*/
	_eval(code, _v, _vname, path, parent$1, parentPropName) {
		if (this.currSandbox) {
			this.currSandbox._$_parentProperty = parentPropName;
			this.currSandbox._$_parent = parent$1;
			this.currSandbox._$_property = _vname;
			this.currSandbox._$_root = this.json;
			this.currSandbox._$_v = _v;
		}
		const containsPath = code.includes("@path");
		if (containsPath) {
			/* c8 ignore next -- Unreachable: currSandbox set in evaluate() before _eval */
			const currSandbox = this.currSandbox ?? {};
			currSandbox._$_path = JSONPath.toPathString(
				/** @type {string[]} */
				path.concat([_vname])
			);
		}
		const scriptCacheKey = this.currEval + "Script:" + code;
		if (!scriptCache.has(scriptCacheKey)) {
			let script = code.replaceAll("@parentProperty", "_$_parentProperty").replaceAll("@parent", "_$_parent").replaceAll("@property", "_$_property").replaceAll("@root", "_$_root").replaceAll(new RegExp("('(?:\\\\.|[^'\\\\])*'|\"(?:\\\\.|[^\"\\\\])*\"|(?<=(?:^|[\\(,=:\\[!\\|?\\{\\};+\\-*%<>~^]|&)\\s*)\\/(?:\\\\.|\\[(?:\\\\.|[^\\]\\\\])*\\]|[^\\/\\\\\\[])+\\/[dgimsuvy]*)|@(?![\\w$])", "gv"), (_, literal$1) => literal$1 ?? "_$_v");
			if (containsPath) script = script.replaceAll("@path", "_$_path");
			const evalType = this.currEval;
			if ([
				"safe",
				true,
				void 0
			].includes(evalType)) scriptCache.set(scriptCacheKey, new this.safeVm.Script(script));
			else if (this.currEval === "native") scriptCache.set(scriptCacheKey, new this.vm.Script(script));
			else if (typeof this.currEval === "function" && this.currEval.prototype && Object.hasOwn(this.currEval.prototype, "runInNewContext")) {
				const CurrEval = this.currEval;
				scriptCache.set(scriptCacheKey, new CurrEval(script));
			} else if (typeof this.currEval === "function") {
				const evalFunc = this.currEval;
				scriptCache.set(scriptCacheKey, { runInNewContext: (context) => evalFunc(script, context) });
			} else throw new TypeError(`Unknown "eval" property "${this.currEval}"`);
		}
		try {
			/**
			* @typedef {{
			*   runInNewContext: (
			*     ctx: SandboxType|undefined
			*   ) => EvaluatedResult
			* }} RunInNewContext
			*/
			return scriptCache.get(scriptCacheKey).runInNewContext(this.currSandbox);
		} catch (e) {
			if (this.ignoreEvalErrors) return false;
			const error$1 = e;
			throw new Error("jsonPath: " + error$1.message + ": " + code, { cause: e });
		}
	}
};
/** @type {{safeVm: SafeScriptType}} */
JSONPathClass.prototype.safeVm = { Script: SafeScript };
JSONPath.prototype = JSONPathClass.prototype;
/**
* Clears cached parsed paths and compiled scripts.
* @returns {void}
*/
JSONPath.clearCache = function() {
	pathCache.clear();
	scriptCache.clear();
};
/**
* @param {string[]} pathArr Array to convert
* @returns {string} The path string
*/
JSONPath.toPathString = function(pathArr) {
	const x = pathArr, n = x.length;
	let p = "$";
	for (let i$1 = 1; i$1 < n; i$1++) if (!new RegExp("^(~|\\^|@.*?\\(\\))$", "v").test(x[i$1])) p += new RegExp("^[0-9*]+$", "v").test(x[i$1]) ? "[" + x[i$1] + "]" : "['" + String(x[i$1]).replaceAll(new RegExp("['\\\\]", "gv"), String.raw`\$&`) + "']";
	return p;
};
/**
* @param {string[]} pointer JSON Path array
* @returns {string} JSON Pointer
*/
JSONPath.toPointer = function(pointer) {
	const x = pointer, n = x.length;
	let p = "";
	for (let i$1 = 1; i$1 < n; i$1++) if (!new RegExp("^(~|\\^|@.*?\\(\\))$", "v").test(x[i$1])) p += "/" + x[i$1].toString().replaceAll("~", "~0").replaceAll("/", "~1");
	return p;
};
/**
* @param {string} expr Expression to convert
* @returns {string[]}
*/
JSONPath.toPathArray = function(expr) {
	if (pathCache.has(expr)) return pathCache.get(expr).concat();
	/** @type {string[]} */
	const subx = [];
	const exprList = expr.replaceAll(new RegExp("@[\\w$\\-]+\\([^\\)]*\\)", "gv"), ";$&;").replaceAll(new RegExp("[\\['](\\??\\(.*?\\))[\\]'](?!.\\])", "gv"), function($0, $1) {
		return "[#" + (subx.push($1) - 1) + "]";
	}).replaceAll(new RegExp("\\[\\s*((?:'(?:\\\\.|[^'\\\\])*'|\"(?:\\\\.|[^\"\\\\])*\")(?:\\s*,\\s*(?:'(?:\\\\.|[^'\\\\])*'|\"(?:\\\\.|[^\"\\\\])*\"))*)\\s*\\]", "gv"), function($0, $1) {
		if (!new RegExp("[,\\\\]", "v").test($1)) return $0;
		return "[#" + (subx.push($1) - 1) + "]";
	}).replaceAll(new RegExp("\\[['\"]([^'\\]]*)['\"]\\]", "gv"), function($0, prop$1) {
		return "['" + prop$1.replaceAll(".", "%@%").replaceAll("~", "%%@@%%") + "']";
	}).replaceAll("~", ";~;").replaceAll(new RegExp("['\"]?\\.['\"]?(?![^\\[]*\\])|\\[['\"]?", "gv"), ";").replaceAll("%@%", ".").replaceAll("%%@@%%", "~").replaceAll(new RegExp("(?:;)?(\\^+)(?:;)?", "gv"), function($0, ups) {
		return ";" + ups.split("").join(";") + ";";
	}).replaceAll(new RegExp(";;;|;;", "gv"), ";..;").replaceAll(new RegExp(";$|'?\\]|'$", "gv"), "").split(";").map(function(exp) {
		const match = exp.match(new RegExp("#(\\d+)", "v"));
		return !match || !match[1] ? exp : subx[Number(match[1])];
	});
	pathCache.set(expr, exprList);
	return pathCache.get(expr).concat();
};
/**
* @typedef {import('./jsonpath.js').AnyInput} AnyInput
*/
/**
* @typedef {import('./jsonpath.js').SandboxCallback} SandboxCallback
*/
/**
* @typedef {import('./jsonpath.js').SandboxPropertyValue} SandboxPropertyValue
*/
/**
* @typedef {import('./jsonpath.js').ExpressionArray} ExpressionArray
*/
/**
* @typedef {import('./jsonpath.js').ValueType} ValueType
*/
/**
* @typedef {import('./jsonpath.js').ParentValue} ParentValue
*/
/**
* @typedef {import('./jsonpath.js').UnknownResult} UnknownResult
*/
/**
* @typedef {import('./jsonpath.js').ParentProperty} ParentProperty
*/
/**
* @typedef {import('./jsonpath.js').PreferredOutput} PreferredOutput
*/
/**
* @typedef {import('./jsonpath.js').ReturnObject} ReturnObject
*/
/**
* @typedef {import('./jsonpath.js').JSONPathCallback} JSONPathCallback
*/
/**
* @typedef {import('./jsonpath.js').OtherTypeCallback} OtherTypeCallback
*/
/**
* @typedef {import('./jsonpath.js').ContextItem} ContextItem
*/
/**
* @typedef {import('./jsonpath.js').EvaluatedResult} EvaluatedResult
*/
/**
* @typedef {import('./jsonpath.js').EvalCallback} EvalCallback
*/
/**
* @typedef {import('./jsonpath.js').EvalClass} EvalClass
*/
/**
* @typedef {import('./jsonpath.js').ResultType} ResultType
*/
/**
* @typedef {import('./jsonpath.js').EvalValue} EvalValue
*/
/**
* @typedef {import('./jsonpath.js').PathType} PathType
*/
/**
* @typedef {import('./jsonpath.js').SafeScriptType} SafeScriptType
*/
/**
* @typedef {import('./jsonpath.js').ScriptType} ScriptType
*/
/**
* @typedef {import('./jsonpath.js').SandboxType} SandboxType
*/
/**
* @typedef {import('./jsonpath.js').JSONPathOptions} JSONPathOptions
*/
/** @type {{vm: ScriptType}} */
JSONPathClass.prototype.vm = vm;

//#endregion
//#region node_modules/.pnpm/ret@0.5.0/node_modules/ret/dist/types/tokens.js
var require_tokens = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/ret@0.5.0/node_modules/ret/dist/types/tokens.js": ((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
}) });

//#endregion
//#region node_modules/.pnpm/ret@0.5.0/node_modules/ret/dist/types/types.js
var require_types$1 = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/ret@0.5.0/node_modules/ret/dist/types/types.js": ((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.types = void 0;
	(function(types$1) {
		types$1[types$1["ROOT"] = 0] = "ROOT";
		types$1[types$1["GROUP"] = 1] = "GROUP";
		types$1[types$1["POSITION"] = 2] = "POSITION";
		types$1[types$1["SET"] = 3] = "SET";
		types$1[types$1["RANGE"] = 4] = "RANGE";
		types$1[types$1["REPETITION"] = 5] = "REPETITION";
		types$1[types$1["REFERENCE"] = 6] = "REFERENCE";
		types$1[types$1["CHAR"] = 7] = "CHAR";
	})(exports.types || (exports.types = {}));
}) });

//#endregion
//#region node_modules/.pnpm/ret@0.5.0/node_modules/ret/dist/types/set-lookup.js
var require_set_lookup = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/ret@0.5.0/node_modules/ret/dist/types/set-lookup.js": ((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
}) });

//#endregion
//#region node_modules/.pnpm/ret@0.5.0/node_modules/ret/dist/types/index.js
var require_types = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/ret@0.5.0/node_modules/ret/dist/types/index.js": ((exports) => {
	var __createBinding$5 = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		Object.defineProperty(o, k2, {
			enumerable: true,
			get: function() {
				return m[k];
			}
		});
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __exportStar$1 = exports && exports.__exportStar || function(m, exports$1) {
		for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports$1, p)) __createBinding$5(exports$1, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	__exportStar$1(require_tokens(), exports);
	__exportStar$1(require_types$1(), exports);
	__exportStar$1(require_set_lookup(), exports);
}) });

//#endregion
//#region node_modules/.pnpm/ret@0.5.0/node_modules/ret/dist/sets.js
var require_sets = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/ret@0.5.0/node_modules/ret/dist/sets.js": ((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.anyChar = exports.notWhitespace = exports.whitespace = exports.notInts = exports.ints = exports.notWords = exports.words = void 0;
	const types_1$6 = require_types();
	const INTS = () => [{
		type: types_1$6.types.RANGE,
		from: 48,
		to: 57
	}];
	const WORDS = () => [
		{
			type: types_1$6.types.CHAR,
			value: 95
		},
		{
			type: types_1$6.types.RANGE,
			from: 97,
			to: 122
		},
		{
			type: types_1$6.types.RANGE,
			from: 65,
			to: 90
		},
		{
			type: types_1$6.types.RANGE,
			from: 48,
			to: 57
		}
	];
	const WHITESPACE = () => [
		{
			type: types_1$6.types.CHAR,
			value: 9
		},
		{
			type: types_1$6.types.CHAR,
			value: 10
		},
		{
			type: types_1$6.types.CHAR,
			value: 11
		},
		{
			type: types_1$6.types.CHAR,
			value: 12
		},
		{
			type: types_1$6.types.CHAR,
			value: 13
		},
		{
			type: types_1$6.types.CHAR,
			value: 32
		},
		{
			type: types_1$6.types.CHAR,
			value: 160
		},
		{
			type: types_1$6.types.CHAR,
			value: 5760
		},
		{
			type: types_1$6.types.RANGE,
			from: 8192,
			to: 8202
		},
		{
			type: types_1$6.types.CHAR,
			value: 8232
		},
		{
			type: types_1$6.types.CHAR,
			value: 8233
		},
		{
			type: types_1$6.types.CHAR,
			value: 8239
		},
		{
			type: types_1$6.types.CHAR,
			value: 8287
		},
		{
			type: types_1$6.types.CHAR,
			value: 12288
		},
		{
			type: types_1$6.types.CHAR,
			value: 65279
		}
	];
	const NOTANYCHAR = () => [
		{
			type: types_1$6.types.CHAR,
			value: 10
		},
		{
			type: types_1$6.types.CHAR,
			value: 13
		},
		{
			type: types_1$6.types.CHAR,
			value: 8232
		},
		{
			type: types_1$6.types.CHAR,
			value: 8233
		}
	];
	exports.words = () => ({
		type: types_1$6.types.SET,
		set: WORDS(),
		not: false
	});
	exports.notWords = () => ({
		type: types_1$6.types.SET,
		set: WORDS(),
		not: true
	});
	exports.ints = () => ({
		type: types_1$6.types.SET,
		set: INTS(),
		not: false
	});
	exports.notInts = () => ({
		type: types_1$6.types.SET,
		set: INTS(),
		not: true
	});
	exports.whitespace = () => ({
		type: types_1$6.types.SET,
		set: WHITESPACE(),
		not: false
	});
	exports.notWhitespace = () => ({
		type: types_1$6.types.SET,
		set: WHITESPACE(),
		not: true
	});
	exports.anyChar = () => ({
		type: types_1$6.types.SET,
		set: NOTANYCHAR(),
		not: true
	});
}) });

//#endregion
//#region node_modules/.pnpm/ret@0.5.0/node_modules/ret/dist/util.js
var require_util = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/ret@0.5.0/node_modules/ret/dist/util.js": ((exports) => {
	var __createBinding$4 = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		Object.defineProperty(o, k2, {
			enumerable: true,
			get: function() {
				return m[k];
			}
		});
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __setModuleDefault$3 = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		});
	}) : function(o, v) {
		o["default"] = v;
	});
	var __importStar$3 = exports && exports.__importStar || function(mod) {
		if (mod && mod.__esModule) return mod;
		var result = {};
		if (mod != null) {
			for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding$4(result, mod, k);
		}
		__setModuleDefault$3(result, mod);
		return result;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.tokenizeClass = exports.strToChars = void 0;
	const types_1$5 = require_types();
	const sets$2 = __importStar$3(require_sets());
	const CTRL = "@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^ ?";
	/**
	* Finds character representations in str and convert all to
	* their respective characters.
	*
	* @param {string} str
	* @returns {string}
	*/
	exports.strToChars = (str) => {
		return str.replace(/(\[\\b\])|(\\)?\\(?:u([A-F0-9]{4})|x([A-F0-9]{2})|c([@A-Z[\\\]^?])|([0tnvfr]))/g, (s, b, lbs, a16, b16, dctrl, eslsh) => {
			if (lbs) return s;
			let code = b ? 8 : a16 ? parseInt(a16, 16) : b16 ? parseInt(b16, 16) : dctrl ? CTRL.indexOf(dctrl) : {
				0: 0,
				t: 9,
				n: 10,
				v: 11,
				f: 12,
				r: 13
			}[eslsh];
			let c$1 = String.fromCharCode(code);
			return /[[\]{}^$.|?*+()]/.test(c$1) ? `\\${c$1}` : c$1;
		});
	};
	/**
	* Turns class into tokens
	* reads str until it encounters a ] not preceeded by a \
	*
	* @param {string} str
	* @param {string} regexpStr
	* @returns {Array.<Array.<Object>, number>}
	*/
	exports.tokenizeClass = (str, regexpStr) => {
		var _a$4, _b, _c, _d, _e, _f, _g;
		let tokens = [], rs, c$1;
		const regexp = /\\(?:(w)|(d)|(s)|(W)|(D)|(S))|((?:(?:\\)(.)|([^\]\\]))-(((?:\\)])|(((?:\\)?([^\]])))))|(\])|(?:\\)?([^])/g;
		while ((rs = regexp.exec(str)) !== null) {
			const p = (_g = (_f = (_e = (_d = (_c = (_b = (_a$4 = rs[1] && sets$2.words()) !== null && _a$4 !== void 0 ? _a$4 : rs[2] && sets$2.ints()) !== null && _b !== void 0 ? _b : rs[3] && sets$2.whitespace()) !== null && _c !== void 0 ? _c : rs[4] && sets$2.notWords()) !== null && _d !== void 0 ? _d : rs[5] && sets$2.notInts()) !== null && _e !== void 0 ? _e : rs[6] && sets$2.notWhitespace()) !== null && _f !== void 0 ? _f : rs[7] && {
				type: types_1$5.types.RANGE,
				from: (rs[8] || rs[9]).charCodeAt(0),
				to: (c$1 = rs[10]).charCodeAt(c$1.length - 1)
			}) !== null && _g !== void 0 ? _g : (c$1 = rs[16]) && {
				type: types_1$5.types.CHAR,
				value: c$1.charCodeAt(0)
			};
			if (p) tokens.push(p);
			else return [tokens, regexp.lastIndex];
		}
		throw new SyntaxError(`Invalid regular expression: /${regexpStr}/: Unterminated character class`);
	};
}) });

//#endregion
//#region node_modules/.pnpm/ret@0.5.0/node_modules/ret/dist/tokenizer.js
var require_tokenizer = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/ret@0.5.0/node_modules/ret/dist/tokenizer.js": ((exports) => {
	var __createBinding$3 = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		Object.defineProperty(o, k2, {
			enumerable: true,
			get: function() {
				return m[k];
			}
		});
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __setModuleDefault$2 = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		});
	}) : function(o, v) {
		o["default"] = v;
	});
	var __importStar$2 = exports && exports.__importStar || function(mod) {
		if (mod && mod.__esModule) return mod;
		var result = {};
		if (mod != null) {
			for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding$3(result, mod, k);
		}
		__setModuleDefault$2(result, mod);
		return result;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.tokenizer = void 0;
	const util = __importStar$2(require_util());
	const types_1$4 = require_types();
	const sets$1 = __importStar$2(require_sets());
	/**
	* Valid opening characters for capture group names.
	*/
	const captureGroupFirstChar = /^[a-zA-Z_$]$/i;
	/**
	* Valid characters for capture group names.
	*/
	const captureGroupChars = /^[a-zA-Z0-9_$]$/i;
	const digit = /\d/;
	/**
	* Tokenizes a regular expression (that is currently a string)
	* @param {string} regexpStr String of regular expression to be tokenized
	*
	* @returns {Root}
	*/
	exports.tokenizer = (regexpStr) => {
		let i$1 = 0, c$1;
		let start = {
			type: types_1$4.types.ROOT,
			stack: []
		};
		let lastGroup = start;
		let last$1 = start.stack;
		let groupStack = [];
		let referenceQueue = [];
		let groupCount = 0;
		const repeatErr = (col) => {
			throw new SyntaxError(`Invalid regular expression: /${regexpStr}/: Nothing to repeat at column ${col - 1}`);
		};
		let str = util.strToChars(regexpStr);
		while (i$1 < str.length) switch (c$1 = str[i$1++]) {
			case "\\":
				if (i$1 === str.length) throw new SyntaxError(`Invalid regular expression: /${regexpStr}/: \\ at end of pattern`);
				switch (c$1 = str[i$1++]) {
					case "b":
						last$1.push({
							type: types_1$4.types.POSITION,
							value: "b"
						});
						break;
					case "B":
						last$1.push({
							type: types_1$4.types.POSITION,
							value: "B"
						});
						break;
					case "w":
						last$1.push(sets$1.words());
						break;
					case "W":
						last$1.push(sets$1.notWords());
						break;
					case "d":
						last$1.push(sets$1.ints());
						break;
					case "D":
						last$1.push(sets$1.notInts());
						break;
					case "s":
						last$1.push(sets$1.whitespace());
						break;
					case "S":
						last$1.push(sets$1.notWhitespace());
						break;
					default: if (digit.test(c$1)) {
						let digits = c$1;
						while (i$1 < str.length && digit.test(str[i$1])) digits += str[i$1++];
						let value = parseInt(digits, 10);
						const reference = {
							type: types_1$4.types.REFERENCE,
							value
						};
						last$1.push(reference);
						referenceQueue.push({
							reference,
							stack: last$1,
							index: last$1.length - 1
						});
					} else last$1.push({
						type: types_1$4.types.CHAR,
						value: c$1.charCodeAt(0)
					});
				}
				break;
			case "^":
				last$1.push({
					type: types_1$4.types.POSITION,
					value: "^"
				});
				break;
			case "$":
				last$1.push({
					type: types_1$4.types.POSITION,
					value: "$"
				});
				break;
			case "[": {
				let not$1;
				if (str[i$1] === "^") {
					not$1 = true;
					i$1++;
				} else not$1 = false;
				let classTokens = util.tokenizeClass(str.slice(i$1), regexpStr);
				i$1 += classTokens[1];
				last$1.push({
					type: types_1$4.types.SET,
					set: classTokens[0],
					not: not$1
				});
				break;
			}
			case ".":
				last$1.push(sets$1.anyChar());
				break;
			case "(": {
				let group = {
					type: types_1$4.types.GROUP,
					stack: [],
					remember: true
				};
				if (str[i$1] === "?") {
					c$1 = str[i$1 + 1];
					i$1 += 2;
					if (c$1 === "=") {
						group.followedBy = true;
						group.remember = false;
					} else if (c$1 === "!") {
						group.notFollowedBy = true;
						group.remember = false;
					} else if (c$1 === "<") {
						let name$1 = "";
						if (captureGroupFirstChar.test(str[i$1])) {
							name$1 += str[i$1];
							i$1++;
						} else throw new SyntaxError(`Invalid regular expression: /${regexpStr}/: Invalid capture group name, character '${str[i$1]}' after '<' at column ${i$1 + 1}`);
						while (i$1 < str.length && captureGroupChars.test(str[i$1])) {
							name$1 += str[i$1];
							i$1++;
						}
						if (!name$1) throw new SyntaxError(`Invalid regular expression: /${regexpStr}/: Invalid capture group name, character '${str[i$1]}' after '<' at column ${i$1 + 1}`);
						if (str[i$1] !== ">") throw new SyntaxError(`Invalid regular expression: /${regexpStr}/: Unclosed capture group name, expected '>', found '${str[i$1]}' at column ${i$1 + 1}`);
						group.name = name$1;
						i$1++;
					} else if (c$1 === ":") group.remember = false;
					else throw new SyntaxError(`Invalid regular expression: /${regexpStr}/: Invalid group, character '${c$1}' after '?' at column ${i$1 - 1}`);
				} else groupCount += 1;
				last$1.push(group);
				groupStack.push(lastGroup);
				lastGroup = group;
				last$1 = group.stack;
				break;
			}
			case ")":
				if (groupStack.length === 0) throw new SyntaxError(`Invalid regular expression: /${regexpStr}/: Unmatched ) at column ${i$1 - 1}`);
				lastGroup = groupStack.pop();
				last$1 = lastGroup.options ? lastGroup.options[lastGroup.options.length - 1] : lastGroup.stack;
				break;
			case "|": {
				if (!lastGroup.options) {
					lastGroup.options = [lastGroup.stack];
					delete lastGroup.stack;
				}
				let stack$1 = [];
				lastGroup.options.push(stack$1);
				last$1 = stack$1;
				break;
			}
			case "{": {
				let rs = /^(\d+)(,(\d+)?)?\}/.exec(str.slice(i$1)), min, max;
				if (rs !== null) {
					if (last$1.length === 0) repeatErr(i$1);
					min = parseInt(rs[1], 10);
					max = rs[2] ? rs[3] ? parseInt(rs[3], 10) : Infinity : min;
					i$1 += rs[0].length;
					last$1.push({
						type: types_1$4.types.REPETITION,
						min,
						max,
						value: last$1.pop()
					});
				} else last$1.push({
					type: types_1$4.types.CHAR,
					value: 123
				});
				break;
			}
			case "?":
				if (last$1.length === 0) repeatErr(i$1);
				last$1.push({
					type: types_1$4.types.REPETITION,
					min: 0,
					max: 1,
					value: last$1.pop()
				});
				break;
			case "+":
				if (last$1.length === 0) repeatErr(i$1);
				last$1.push({
					type: types_1$4.types.REPETITION,
					min: 1,
					max: Infinity,
					value: last$1.pop()
				});
				break;
			case "*":
				if (last$1.length === 0) repeatErr(i$1);
				last$1.push({
					type: types_1$4.types.REPETITION,
					min: 0,
					max: Infinity,
					value: last$1.pop()
				});
				break;
			default: last$1.push({
				type: types_1$4.types.CHAR,
				value: c$1.charCodeAt(0)
			});
		}
		if (groupStack.length !== 0) throw new SyntaxError(`Invalid regular expression: /${regexpStr}/: Unterminated group`);
		updateReferences(referenceQueue, groupCount);
		return start;
	};
	/**
	* This is a side effecting function that changes references to chars
	* if there are not enough capturing groups to reference
	* See: https://github.com/fent/ret.js/pull/39#issuecomment-1006475703
	* See: https://github.com/fent/ret.js/issues/38
	* @param {(Reference | Char)[]} referenceQueue
	* @param {number} groupCount
	* @returns {void}
	*/
	function updateReferences(referenceQueue, groupCount) {
		for (const elem of referenceQueue.reverse()) if (groupCount < elem.reference.value) {
			elem.reference.type = types_1$4.types.CHAR;
			const valueString = elem.reference.value.toString();
			elem.reference.value = parseInt(valueString, 8);
			if (!/^[0-7]+$/.test(valueString)) {
				let i$1 = 0;
				while (valueString[i$1] !== "8" && valueString[i$1] !== "9") i$1 += 1;
				if (i$1 === 0) {
					elem.reference.value = valueString.charCodeAt(0);
					i$1 += 1;
				} else elem.reference.value = parseInt(valueString.slice(0, i$1), 8);
				if (valueString.length > i$1) {
					const tail = elem.stack.splice(elem.index + 1);
					for (const char of valueString.slice(i$1)) elem.stack.push({
						type: types_1$4.types.CHAR,
						value: char.charCodeAt(0)
					});
					elem.stack.push(...tail);
				}
			}
		}
	}
}) });

//#endregion
//#region node_modules/.pnpm/ret@0.5.0/node_modules/ret/dist/sets-lookup.js
var require_sets_lookup = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/ret@0.5.0/node_modules/ret/dist/sets-lookup.js": ((exports) => {
	var __createBinding$2 = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		Object.defineProperty(o, k2, {
			enumerable: true,
			get: function() {
				return m[k];
			}
		});
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __setModuleDefault$1 = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		});
	}) : function(o, v) {
		o["default"] = v;
	});
	var __importStar$1 = exports && exports.__importStar || function(mod) {
		if (mod && mod.__esModule) return mod;
		var result = {};
		if (mod != null) {
			for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding$2(result, mod, k);
		}
		__setModuleDefault$1(result, mod);
		return result;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.NOTANYCHAR = exports.WHITESPACE = exports.WORDS = exports.INTS = void 0;
	const Sets = __importStar$1(require_sets());
	const types_1$3 = require_types();
	function setToLookup(tokens) {
		let lookup = {};
		let len = 0;
		for (const token$1 of tokens) {
			if (token$1.type === types_1$3.types.CHAR) lookup[token$1.value] = true;
			if (token$1.type === types_1$3.types.RANGE) lookup[`${token$1.from}-${token$1.to}`] = true;
			len += 1;
		}
		return {
			lookup: () => Object.assign({}, lookup),
			len
		};
	}
	exports.INTS = setToLookup(Sets.ints().set);
	exports.WORDS = setToLookup(Sets.words().set);
	exports.WHITESPACE = setToLookup(Sets.whitespace().set);
	exports.NOTANYCHAR = setToLookup(Sets.anyChar().set);
}) });

//#endregion
//#region node_modules/.pnpm/ret@0.5.0/node_modules/ret/dist/write-set-tokens.js
var require_write_set_tokens = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/ret@0.5.0/node_modules/ret/dist/write-set-tokens.js": ((exports) => {
	var __createBinding$1 = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		Object.defineProperty(o, k2, {
			enumerable: true,
			get: function() {
				return m[k];
			}
		});
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		});
	}) : function(o, v) {
		o["default"] = v;
	});
	var __importStar = exports && exports.__importStar || function(mod) {
		if (mod && mod.__esModule) return mod;
		var result = {};
		if (mod != null) {
			for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding$1(result, mod, k);
		}
		__setModuleDefault(result, mod);
		return result;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.writeSetTokens = exports.setChar = void 0;
	const types_1$2 = require_types();
	const sets = __importStar(require_sets_lookup());
	/**
	* Takes character code and returns character to be displayed in a set
	* @param {number} charCode Character code of set element
	* @returns {string} The string for the sets character
	*/
	function setChar(charCode) {
		return charCode === 94 ? "\\^" : charCode === 92 ? "\\\\" : charCode === 93 ? "\\]" : charCode === 45 ? "\\-" : String.fromCharCode(charCode);
	}
	exports.setChar = setChar;
	/**
	* Test if a character set matches a 'set-lookup'
	* @param {SetTokens} set The set to be tested
	* @param {SetLookup} param The predefined 'set-lookup' & the number of elements in the lookup
	* @returns {boolean} True if the character set corresponds to the 'set-lookup'
	*/
	function isSameSet(set, { lookup, len }) {
		if (len !== set.length) return false;
		const map$1 = lookup();
		for (const elem of set) {
			if (elem.type === types_1$2.types.SET) return false;
			const key$2 = elem.type === types_1$2.types.CHAR ? elem.value : `${elem.from}-${elem.to}`;
			if (map$1[key$2]) map$1[key$2] = false;
			else return false;
		}
		return true;
	}
	/**
	* Writes the tokens for a set
	* @param {Set} set The set to display
	* @param {boolean} isNested Whether the token is nested inside another set token
	* @returns {string} The tokens for the set
	*/
	function writeSetTokens(set, isNested = false) {
		if (isSameSet(set.set, sets.INTS)) return set.not ? "\\D" : "\\d";
		if (isSameSet(set.set, sets.WORDS)) return set.not ? "\\W" : "\\w";
		if (set.not && isSameSet(set.set, sets.NOTANYCHAR)) return ".";
		if (isSameSet(set.set, sets.WHITESPACE)) return set.not ? "\\S" : "\\s";
		let tokenString = "";
		for (let i$1 = 0; i$1 < set.set.length; i$1++) {
			const subset = set.set[i$1];
			tokenString += writeSetToken(subset);
		}
		const contents$1 = `${set.not ? "^" : ""}${tokenString}`;
		return isNested ? contents$1 : `[${contents$1}]`;
	}
	exports.writeSetTokens = writeSetTokens;
	/**
	* Writes a token within a set
	* @param {Range | Char | Set} set The set token to display
	* @returns {string} The token as a string
	*/
	function writeSetToken(set) {
		if (set.type === types_1$2.types.CHAR) return setChar(set.value);
		else if (set.type === types_1$2.types.RANGE) return `${setChar(set.from)}-${setChar(set.to)}`;
		return writeSetTokens(set, true);
	}
}) });

//#endregion
//#region node_modules/.pnpm/ret@0.5.0/node_modules/ret/dist/reconstruct.js
var require_reconstruct = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/ret@0.5.0/node_modules/ret/dist/reconstruct.js": ((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.reconstruct = void 0;
	const types_1$1 = require_types();
	const write_set_tokens_1 = require_write_set_tokens();
	const reduceStack = (stack$1) => stack$1.map(exports.reconstruct).join("");
	const createAlternate = (token$1) => {
		if ("options" in token$1) return token$1.options.map(reduceStack).join("|");
		else if ("stack" in token$1) return reduceStack(token$1.stack);
		else throw new Error(`options or stack must be Root or Group token`);
	};
	exports.reconstruct = (token$1) => {
		switch (token$1.type) {
			case types_1$1.types.ROOT: return createAlternate(token$1);
			case types_1$1.types.CHAR: {
				const c$1 = String.fromCharCode(token$1.value);
				return (/[[\\{}$^.|?*+()]/.test(c$1) ? "\\" : "") + c$1;
			}
			case types_1$1.types.POSITION: if (token$1.value === "^" || token$1.value === "$") return token$1.value;
			else return `\\${token$1.value}`;
			case types_1$1.types.REFERENCE: return `\\${token$1.value}`;
			case types_1$1.types.SET: return write_set_tokens_1.writeSetTokens(token$1);
			case types_1$1.types.GROUP: return `(${token$1.name ? `?<${token$1.name}>` : token$1.remember ? "" : token$1.followedBy ? "?=" : token$1.notFollowedBy ? "?!" : "?:"}${createAlternate(token$1)})`;
			case types_1$1.types.REPETITION: {
				const { min, max } = token$1;
				let endWith;
				if (min === 0 && max === 1) endWith = "?";
				else if (min === 1 && max === Infinity) endWith = "+";
				else if (min === 0 && max === Infinity) endWith = "*";
				else if (max === Infinity) endWith = `{${min},}`;
				else if (min === max) endWith = `{${min}}`;
				else endWith = `{${min},${max}}`;
				return `${exports.reconstruct(token$1.value)}${endWith}`;
			}
			case types_1$1.types.RANGE: return `${write_set_tokens_1.setChar(token$1.from)}-${write_set_tokens_1.setChar(token$1.to)}`;
			default: throw new Error(`Invalid token type ${token$1}`);
		}
	};
}) });

//#endregion
//#region node_modules/.pnpm/ret@0.5.0/node_modules/ret/dist/index.js
var require_dist = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/ret@0.5.0/node_modules/ret/dist/index.js": ((exports, module) => {
	var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		Object.defineProperty(o, k2, {
			enumerable: true,
			get: function() {
				return m[k];
			}
		});
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __exportStar = exports && exports.__exportStar || function(m, exports$1) {
		for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports$1, p)) __createBinding(exports$1, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.types = void 0;
	/* istanbul ignore file */
	const types_1 = require_types();
	Object.defineProperty(exports, "types", {
		enumerable: true,
		get: function() {
			return types_1.types;
		}
	});
	__exportStar(require_tokenizer(), exports);
	__exportStar(require_reconstruct(), exports);
	const tokenizer_1 = require_tokenizer();
	const reconstruct_1 = require_reconstruct();
	__exportStar(require_types(), exports);
	exports.default = tokenizer_1.tokenizer;
	module.exports = tokenizer_1.tokenizer;
	module.exports.types = types_1.types;
	module.exports.reconstruct = reconstruct_1.reconstruct;
}) });

//#endregion
//#region node_modules/.pnpm/safe-regex2@5.1.1/node_modules/safe-regex2/index.js
var require_safe_regex2 = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/safe-regex2@5.1.1/node_modules/safe-regex2/index.js": ((exports, module) => {
	const parse = require_dist();
	const { types } = require_dist();
	/**
	* @param {*} node
	* @param {object} opts
	* @param {number} opts.reps - The number of repetitions encountered
	* @param {number} opts.limit - The maximum number of repetitions allowed
	* @param {number} starHeight - The current height of the star in the regex tree
	* @returns {boolean}
	*/
	function walk(node$1, opts, starHeight) {
		let i$1;
		let ok;
		let len;
		if (node$1.type === types.REPETITION) {
			starHeight++;
			opts.reps++;
			if (starHeight > 1) return false;
			if (opts.reps > opts.limit) return false;
		}
		const options = node$1.options || node$1.value?.options;
		if (options) for (i$1 = 0, len = options.length; i$1 < len; i$1++) {
			ok = walk({ stack: options[i$1] }, opts, starHeight);
			if (!ok) return false;
		}
		const stack$1 = node$1.stack || node$1.value?.stack;
		if (!stack$1) return true;
		for (i$1 = 0, len = stack$1.length; i$1 < len; i$1++) {
			ok = walk(stack$1[i$1], opts, starHeight);
			if (!ok) return false;
		}
		return true;
	}
	/**
	* @param {string|RegExp} re - The regular expression to check, can be a string or RegExp object
	* @param {object} [options]
	* @param {number} [options.limit=25] - The maximum number of repetitions allowed
	* @returns {boolean} - Returns true if the regex is safe, false if it is unsafe or invalid
	*/
	function safeRegex$1(re, options) {
		const opts = {
			reps: 0,
			limit: options?.limit ?? 25
		};
		if (isRegExp(re)) re = re.source;
		else if (typeof re !== "string") re = String(re);
		try {
			return walk(parse(re), opts, 0);
		} catch {
			return false;
		}
	}
	/**
	* @param {*} x
	* @returns {x is RegExp}
	*/
	function isRegExp(x) {
		return Object.prototype.toString.call(x) === "[object RegExp]";
	}
	module.exports = safeRegex$1;
	module.exports.default = safeRegex$1;
	module.exports.safeRegex = safeRegex$1;
}) });

//#endregion
//#region src/online/expressions.ts
var import_safe_regex2 = /* @__PURE__ */ __toESM(require_safe_regex2(), 1);
var RuleExpressionError = class extends Error {
	constructor(field$1, message) {
		super(`${field$1}: ${message}`);
		this.field = field$1;
	}
};
function valueText(value) {
	return value === void 0 || value === null ? "" : typeof value === "object" ? JSON.stringify(value) : String(value);
}
function checkedRegex(pattern, flags) {
	const regex = new RegExp(pattern, flags);
	if (pattern.length > 16384 || !(0, import_safe_regex2.default)(regex)) throw new Error("正则表达式复杂度过高，请简化嵌套重复。");
	return regex;
}
function splitAnalyzers(value) {
	const parts = [];
	let quote = "", depth = 0, start = 0;
	for (let i$1 = 0; i$1 < value.length; i$1++) {
		const character = value[i$1];
		if (character === "\\") {
			i$1++;
			continue;
		}
		if (quote) {
			if (character === quote) quote = "";
			continue;
		}
		if (character === "\"" || character === "'") {
			quote = character;
			continue;
		}
		if ("[({".includes(character)) depth++;
		if ("])}".includes(character)) depth--;
		const marker = depth === 0 ? /^@(?:css|json|xpath|replace):/i.exec(value.slice(i$1)) : null;
		if (marker) {
			if (i$1 > start) parts.push(value.slice(start, i$1));
			start = i$1;
			i$1 += marker[0].length - 1;
		}
	}
	parts.push(value.slice(start));
	return parts.filter(Boolean);
}
function splitOutside(value, separator) {
	const parts = [];
	let quote = "", depth = 0, start = 0;
	for (let i$1 = 0; i$1 < value.length; i$1++) {
		const character = value[i$1];
		if (character === "\\") {
			i$1++;
			continue;
		}
		if (quote) {
			if (character === quote) quote = "";
			continue;
		}
		if (character === "\"" || character === "'") {
			quote = character;
			continue;
		}
		if ("[({".includes(character)) depth++;
		if ("])}".includes(character)) depth--;
		if (depth === 0 && value.startsWith(separator, i$1)) {
			parts.push(value.slice(start, i$1));
			i$1 += separator.length - 1;
			start = i$1 + 1;
		}
	}
	parts.push(value.slice(start));
	return parts;
}
function textParagraphs(value) {
	const $ = load(value, null, false);
	$("script, style, iframe, object").remove();
	$("br").replaceWith("\n");
	$("p, div, li, blockquote, h1, h2, h3, h4, h5, h6").append("\n");
	return $.root().text().replace(/\r/g, "").split("\n").map((line$1) => line$1.replace(/\u00a0/g, " ").trim()).filter(Boolean);
}
function variables(expression, context) {
	return expression.replace(/\$(host|keyword|lastResult|result|pageSize|page)\b/g, (_, name$1) => {
		if (name$1 === "page") return "1";
		if (name$1 === "pageSize") return "20";
		return valueText(context[name$1]);
	});
}
function evaluate(expression, input, context, field$1 = "rule", depth = 0) {
	try {
		if (depth > 24) throw new Error("规则嵌套过深。");
		if (!expression.trim()) return [];
		if (/@(?:js|hetu|web|webview|filter|http|encode|decode):/i.test(expression)) throw new Error("不支持脚本或浏览器规则。");
		const direct = /^(?:\$)?(result|lastResult|host|keyword)$/.exec(expression.trim());
		if (direct) return [context[direct[1]]].filter((value) => value !== void 0);
		if (expression.includes("{{")) return [variables(expression.replace(/\{\{([\s\S]*?)\}\}/g, (_, rule) => evaluate(rule, input, context, field$1, depth + 1).map(valueText).join("  ")), context)];
		const chain = splitAnalyzers(expression);
		if (chain.length > 1) {
			let values = [input];
			for (const step of chain) values = values.flatMap((value) => evaluate(step, value, context, field$1, depth + 1));
			return values;
		}
		const replacement = splitOutside(expression, "##");
		if (replacement.length > 1) {
			const [base, pattern = "", substitute$1 = "", first$1] = replacement;
			const regex = checkedRegex(pattern, first$1 ? "" : "g");
			return evaluate(base, input, context, field$1, depth + 1).map((value) => valueText(value).replace(regex, substitute$1));
		}
		const merged = splitOutside(expression, "&&");
		if (merged.length > 1) return merged.flatMap((branch) => evaluate(branch, input, context, field$1, depth + 1));
		const fallback = splitOutside(expression, "||");
		if (fallback.length > 1) {
			for (const branch of fallback) {
				const found = evaluate(branch, input, context, field$1, depth + 1).filter((value) => valueText(value).trim() !== "");
				if (found.length) return found;
			}
			return [];
		}
		if (expression.startsWith("@replace:")) return [valueText(input).replace(checkedRegex(expression.slice(9), "g"), "")];
		if (/^@json:|^\$(?:[.\[]|$)/i.test(expression)) {
			const path = expression.replace(/^@json:/i, "");
			if (/\?\s*\(|\[\s*\(/.test(path)) throw new Error("JSONPath 脚本表达式不受支持。");
			const result = JSONPath({
				path,
				json: typeof input === "string" ? JSON.parse(input) : input,
				eval: false,
				wrap: true
			});
			return result.length === 1 && Array.isArray(result[0]) ? result[0] : result;
		}
		if (/^https?:/i.test(expression)) return [variables(expression, context)];
		if (/^@xpath:|^\//i.test(expression)) {
			const html$2 = load(valueText(input), null, false).xml();
			const document$1 = new import_lib$2.DOMParser().parseFromString(`<dnr-root>${html$2}</dnr-root>`, "text/xml");
			const result = (0, import_xpath.select)(expression.replace(/^@xpath:/i, ""), document$1);
			return (Array.isArray(result) ? result : [result]).map((value) => {
				if (typeof value !== "object" || value === null) return value;
				const node$1 = value;
				return node$1.nodeType === 2 || node$1.nodeType === 3 ? node$1.nodeValue ?? "" : new import_lib$2.XMLSerializer().serializeToString(value);
			});
		}
		const css$1 = expression.replace(/^@css:/i, "");
		const match = /^(.*?)@([\w-]+)$/.exec(css$1);
		const selector$1 = match ? match[1] : css$1;
		const mode = match?.[2];
		const $ = load(valueText(input), null, false);
		return (selector$1.trim() ? $(selector$1) : $.root().children()).toArray().map((element) => {
			const root$2 = $(element);
			if (!mode || mode === "outerHtml") return $.html(element);
			if (mode === "text") return root$2.text().trim();
			if (mode === "textNodes") return root$2.contents().toArray().map((node$1) => $(node$1).text()).join("\n").trim();
			if (mode === "innerHtml") return root$2.html() ?? "";
			if (mode === "html") return textParagraphs($.html(element)).join("\n");
			return root$2.attr(mode) ?? "";
		});
	} catch (error$1) {
		if (error$1 instanceof RuleExpressionError) throw error$1;
		throw new RuleExpressionError(field$1, error$1 instanceof Error ? error$1.message : String(error$1));
	}
}
function extract(expression, input, context, field$1) {
	return evaluate(expression, input, context, field$1).map(valueText).filter(Boolean).join("  ").trim();
}

//#endregion
//#region src/online/any-reader.ts
const expressionFields = [
	"searchList",
	"searchName",
	"searchAuthor",
	"searchCover",
	"searchChapter",
	"searchDescription",
	"searchResult",
	"searchNextUrl",
	"chapterList",
	"chapterName",
	"chapterResult",
	"chapterNextUrl",
	"contentItems",
	"contentNextUrl"
];
const requiredFields = [
	"searchUrl",
	"searchList",
	"searchName",
	"searchResult",
	"chapterList",
	"chapterName",
	"chapterResult",
	"contentItems"
];
function field(rule, key$2) {
	return typeof rule[key$2] === "string" ? rule[key$2] : "";
}
function substitute(value, context, encodeKeyword = false) {
	if (typeof value === "string") {
		if (value === "$result") return context.result ?? "";
		if (value === "$lastResult") return context.lastResult ?? "";
		return value.replace(/\$(host|keyword|lastResult|result|pageSize|page)\b|searchKey|searchPage/g, (match, key$2) => {
			if (match === "searchPage" || key$2 === "page") return "1";
			if (key$2 === "pageSize") return "20";
			const result = key$2 === void 0 ? context.keyword : context[key$2];
			return (key$2 === "keyword" || match === "searchKey") && encodeKeyword ? encodeURIComponent(valueText(result)) : valueText(result);
		});
	}
	if (Array.isArray(value)) return value.map((item) => substitute(item, context));
	if (typeof value === "object" && value !== null) return Object.fromEntries(Object.entries(value).map(([key$2, item]) => [key$2, substitute(item, context)]));
	return value;
}
function headerObject(value) {
	if (value === void 0 || value === "") return {};
	if (typeof value === "string") value = value.trim().startsWith("{") ? import_lib$1.default.parse(value) : { "user-agent": value };
	if (value === null || typeof value !== "object" || Array.isArray(value)) throw new Error("请求头必须是 JSON 对象。");
	const headers = {};
	for (const [key$2, item] of Object.entries(value)) {
		if (!/^[\w!#$%&'*+.^`|~-]+$/.test(key$2) || typeof item !== "string" || /[\r\n]/.test(item)) throw new Error(`无效的请求头：${key$2}`);
		if (/^(host|content-length|connection|transfer-encoding|upgrade|proxy-.*|forwarded|x-forwarded-.*|x-real-ip)$/i.test(key$2)) throw new Error(`不允许覆盖请求头：${key$2}`);
		headers[key$2.toLowerCase()] = item;
	}
	return headers;
}
function buildRuleRequest(rule, key$2, context, baseUrl = rule.host) {
	const raw = rule[key$2];
	let description = raw === void 0 || raw === "" ? context.result : raw;
	if (typeof description === "string" && description.trim().startsWith("{") && !description.trim().startsWith("{{")) description = import_lib$1.default.parse(description);
	if (typeof description === "string") description = { url: description };
	if (description === null || typeof description !== "object" || Array.isArray(description)) throw new Error(`${key$2}: 请求描述必须包含 URL。`);
	const params = description;
	if (typeof params.url !== "string") throw new Error(`${key$2}: 缺少 URL。`);
	let address = params.url;
	if (/^@(css|json|xpath):|\{\{/.test(address)) address = extract(address, context.result, {
		...context,
		keyword: encodeURIComponent(context.keyword ?? "")
	}, key$2);
	address = valueText(substitute(address, context, true));
	const url = new URL(address, baseUrl).toString();
	const parsedUrl = new URL(url);
	if (!/^https?:$/.test(parsedUrl.protocol) || parsedUrl.username || parsedUrl.password) throw new Error(`${key$2}: URL 必须是无凭据的 HTTP(S) 地址。`);
	const method = valueText(params.method || "GET").toUpperCase();
	if (!["GET", "POST"].includes(method)) throw new Error(`${key$2}: 仅支持 GET 和 POST。`);
	const headers = {
		...headerObject(substitute(headerObject(rule.userAgent), context)),
		...headerObject(substitute(headerObject(params.headers), context))
	};
	const body = substitute(params.body ?? params.data, context);
	if (method === "GET" && body !== void 0) throw new Error(`${key$2}: GET 请求不能带正文。`);
	if (body === void 0) return {
		url,
		method,
		headers
	};
	if (typeof body === "object") {
		if (headers["content-type"]?.includes("application/x-www-form-urlencoded")) return {
			url,
			method,
			headers,
			body: new URLSearchParams(Object.entries(body ?? {}).map(([key$3, value]) => [key$3, valueText(value)])).toString()
		};
		headers["content-type"] ??= "application/json";
		return {
			url,
			method,
			headers,
			body: JSON.stringify(body)
		};
	}
	return {
		url,
		method,
		headers,
		body: valueText(body)
	};
}
function diagnoseAnyReader(raw) {
	const errors$4 = [];
	const add$1 = (field$1, message) => {
		errors$4.push({
			field: field$1,
			message
		});
	};
	if (raw.contentType !== void 0 && raw.contentType !== 1) add$1("contentType", "首版仅支持小说（contentType: 1）。");
	if (raw.id !== void 0 && (typeof raw.id !== "string" || !raw.id.trim())) add$1("id", "规则 ID 必须是非空字符串。");
	if (raw.sort !== void 0 && (typeof raw.sort !== "number" || !Number.isFinite(raw.sort))) add$1("sort", "排序必须是有限数值。");
	if (raw.enableSearch !== void 0 && typeof raw.enableSearch !== "boolean") add$1("enableSearch", "必须是布尔值。");
	if (typeof raw.name !== "string" || !raw.name.trim()) add$1("name", "请填写书源名称。");
	try {
		const host = new URL(String(raw.host));
		if (!/^https?:$/.test(host.protocol) || host.username || host.password) throw new Error();
	} catch {
		add$1("host", "域名必须是无凭据的 HTTP(S) 地址。");
	}
	for (const key$2 of requiredFields) {
		if (raw.enableSearch === false && key$2.startsWith("search")) continue;
		if (key$2 === "searchUrl" && raw[key$2] && typeof raw[key$2] === "object" && !Array.isArray(raw[key$2])) continue;
		if (typeof raw[key$2] !== "string" || !String(raw[key$2]).trim()) add$1(key$2, "缺少必需规则。");
	}
	for (const [key$2, value] of Object.entries(raw)) {
		if (typeof value === "string" && /@(?:js|hetu|web|webview|filter|http|encode|decode):/i.test(value)) add$1(key$2, "首版不执行脚本或浏览器规则。");
		if ([
			"loadJs",
			"contentDecoder",
			"chapterRoads",
			"chapterRoadName"
		].includes(key$2) && value) add$1(key$2, "首版不支持该功能。");
		if (key$2 === "enableMultiRoads" && value === true) add$1(key$2, "首版不支持多线路。");
		if (expressionFields.includes(key$2) && value !== void 0 && typeof value !== "string") add$1(key$2, "表达式必须是字符串。");
		if (expressionFields.includes(key$2) && typeof value === "string" && value) try {
			evaluate(value, /^@json:|^\$(?:[.\[]|$)/.test(value) ? "{}" : "<div></div>", {
				host: String(raw.host),
				result: {},
				lastResult: {}
			}, key$2);
		} catch (error$1) {
			add$1(key$2, error$1 instanceof Error ? error$1.message : String(error$1));
		}
	}
	if (raw.allowedHosts !== void 0 && (!Array.isArray(raw.allowedHosts) || raw.allowedHosts.some((host) => typeof host !== "string" || !/^[a-z\d.-]+$/i.test(host)))) add$1("allowedHosts", "必须是域名数组，不支持通配符或路径。");
	if (typeof raw.host === "string") for (const key$2 of [
		"searchUrl",
		"chapterUrl",
		"contentUrl"
	]) {
		if (!raw[key$2]) continue;
		try {
			buildRuleRequest(raw, key$2, {
				host: raw.host,
				keyword: "测试",
				result: /\{\{|@json:/.test(JSON.stringify(raw[key$2])) ? { id: "placeholder" } : `${raw.host}/book`
			});
		} catch (error$1) {
			add$1(key$2, error$1 instanceof Error ? error$1.message : String(error$1));
		}
	}
	return [...new Map(errors$4.map((error$1) => [`${error$1.field}:${error$1.message}`, error$1])).values()];
}
function compileAnyReader(raw, id) {
	const diagnostics$1 = diagnoseAnyReader(raw);
	if (diagnostics$1.length) throw new Error(diagnostics$1.map((item) => `${item.field}: ${item.message}`).join("\n"));
	const rule = structuredClone(raw);
	const allowedHosts = new Set([new URL(rule.host).hostname.toLowerCase()]);
	for (const key$2 of [
		"searchUrl",
		"chapterUrl",
		"contentUrl"
	]) {
		const rawUrl = rule[key$2];
		let url = typeof rawUrl === "object" && rawUrl !== null ? valueText(rawUrl.url) : valueText(rawUrl);
		if (typeof rawUrl === "string" && rawUrl.trim().startsWith("{") && !rawUrl.trim().startsWith("{{")) url = valueText(import_lib$1.default.parse(rawUrl).url);
		const literalHost = /^(?:https?:)?\/\/([^/?#{}$]+)/i.exec(url)?.[1];
		if (literalHost) allowedHosts.add(new URL(`https://${literalHost}`).hostname.toLowerCase());
	}
	if (raw.allowedHosts !== void 0) {
		if (!Array.isArray(raw.allowedHosts)) throw new Error("allowedHosts: 必须是域名数组。");
		for (const host of raw.allowedHosts) {
			if (typeof host !== "string" || !/^[a-z\d.-]+$/i.test(host)) throw new Error("allowedHosts: 不支持通配符或带路径的地址。");
			allowedHosts.add(host.toLowerCase());
		}
	}
	return {
		id,
		url: rule.host,
		name: rule.name,
		comment: valueText(rule.author),
		language: "",
		disabled: false,
		allowedHosts,
		anyReader: rule,
		search: {
			disabled: rule.enableSearch === false,
			baseUri: "",
			url: rule.host,
			method: "GET",
			data: "",
			cookies: "",
			result: "",
			bookName: "",
			author: "",
			category: "",
			latestChapter: "",
			lastUpdateTime: "",
			status: "",
			wordCount: "",
			nextPage: ""
		},
		book: {
			url: "",
			bookName: "",
			author: "",
			intro: "",
			category: "",
			coverUrl: "",
			latestChapter: "",
			latestChapterUrl: "",
			lastUpdateTime: "",
			status: ""
		},
		toc: {
			baseUri: "",
			url: "",
			list: "",
			item: "",
			isDesc: false,
			nextPage: ""
		},
		chapter: {
			title: "",
			content: "",
			paragraphTagClosed: false,
			paragraphTag: "",
			filterTxt: "",
			filterTag: "",
			nextPage: ""
		}
	};
}

//#endregion
//#region src/online/network-error.ts
const REASONS = {
	ENOTFOUND: "域名解析失败",
	EAI_AGAIN: "域名解析暂时失败",
	ECONNREFUSED: "连接被拒绝",
	ECONNRESET: "连接被重置",
	ETIMEDOUT: "连接超时",
	UND_ERR_CONNECT_TIMEOUT: "连接超时",
	UND_ERR_SOCKET: "连接被对端关闭",
	CERT_HAS_EXPIRED: "HTTPS 证书已过期",
	UNABLE_TO_VERIFY_LEAF_SIGNATURE: "HTTPS 证书验证失败",
	DEPTH_ZERO_SELF_SIGNED_CERT: "HTTPS 证书不受信任"
};
/** Explain transport errors without exposing request URLs, headers or credentials. */
function networkErrorMessage(error$1, fallback) {
	if (!(error$1 instanceof Error)) return fallback;
	if (error$1.message !== "fetch failed") return error$1.message;
	let current = error$1.cause;
	for (let depth = 0; depth < 4 && current && typeof current === "object"; depth += 1) {
		const item = current;
		if (typeof item.code === "string" && REASONS[item.code]) return `书源${REASONS[item.code]}（${item.code}）。请检查网络或代理，或更换书源。`;
		current = item.cause ?? item.errors?.[0];
	}
	return "书源网络请求失败，请检查网络或代理，或更换书源。";
}

//#endregion
//#region src/online/engine-core.ts
const MAX_HTML_BYTES = 8 * 1024 * 1024;
const MAX_REDIRECTS = 5;
const MAX_PAGES = 12;
const MAX_CHAPTERS = 1e4;
var OnlineEngineError = class extends Error {
	constructor(message, code) {
		super(message);
		this.code = code;
		this.name = "OnlineEngineError";
	}
};
function cleanText(value) {
	return value.replace(/\u00a0/gu, " ").replace(/\s+/gu, " ").trim();
}
function normalizeForScore(value) {
	return value.normalize("NFKC").toLocaleLowerCase().replace(/[\s\p{P}\p{S}]+/gu, "");
}
function relevance(item, query) {
	const needle = normalizeForScore(query);
	const title = normalizeForScore(item.bookName);
	const author = normalizeForScore(item.author);
	if (title === needle) return 100;
	if (title.includes(needle)) return 80 - Math.min(20, title.length - needle.length);
	if (author === needle) return 70;
	if (author.includes(needle)) return 55;
	return title.split("").filter((character) => needle.includes(character)).length;
}
function splitSelector(value) {
	const index$2 = value.indexOf("@js:");
	return index$2 < 0 ? {
		selector: value,
		hasScript: false
	} : {
		selector: value.slice(0, index$2),
		hasScript: true
	};
}
function parseAttributeSelector(value) {
	const plain = splitSelector(value).selector;
	const match = /^(.*)@([a-zA-Z][\w-]*)$/u.exec(plain);
	return match === null ? { selector: plain } : {
		selector: match[1],
		attribute: match[2]
	};
}
function selectedValue($, root$2, selectorValue) {
	if (selectorValue.trim().length === 0) return "";
	const parsed = parseAttributeSelector(selectorValue);
	const element = root$2.find(parsed.selector).addBack(parsed.selector).first();
	if (element.length === 0) return "";
	if (parsed.attribute !== void 0) return cleanText(element.attr(parsed.attribute) ?? "");
	if (element.prop("tagName")?.toLocaleLowerCase() === "meta") return cleanText(element.attr("content") ?? "");
	return cleanText(element.text());
}
function selectedUrl($, root$2, selectorValue, baseUrl) {
	const parsed = parseAttributeSelector(selectorValue);
	const element = parsed.selector.trim().length === 0 ? root$2.first() : root$2.find(parsed.selector).addBack(parsed.selector).first();
	const raw = element.attr(parsed.attribute ?? "href") ?? element.attr("value") ?? "";
	if (raw.trim().length === 0) return "";
	try {
		return new URL(raw, baseUrl).toString();
	} catch {
		return "";
	}
}
function formData(template, query) {
	const params = new URLSearchParams();
	const body = template.trim().replace(/^\{/u, "").replace(/\}$/u, "");
	if (body.length === 0) return params;
	for (const entry of body.split(",")) {
		const separator = entry.indexOf(":");
		if (separator < 0) continue;
		const key$2 = entry.slice(0, separator).trim().replace(/^['"]|['"]$/gu, "");
		const value = entry.slice(separator + 1).trim().replace(/^['"]|['"]$/gu, "").replaceAll("%s", query);
		if (key$2.length > 0) params.append(key$2, value);
	}
	return params;
}
function randomBetween(minimum, maximum) {
	if (maximum <= minimum) return minimum;
	return minimum + Math.floor(Math.random() * (maximum - minimum + 1));
}
function wait(milliseconds, signal) {
	if (milliseconds <= 0) return Promise.resolve();
	return new Promise((resolve, reject) => {
		const timer = setTimeout(() => {
			signal.removeEventListener("abort", abort);
			resolve();
		}, milliseconds);
		const abort = () => {
			clearTimeout(timer);
			reject(new DOMException("The operation was aborted", "AbortError"));
		};
		if (signal.aborted) abort();
		else signal.addEventListener("abort", abort, { once: true });
	});
}
async function mapLimit(items, limit, mapper) {
	const output = new Array(items.length);
	let cursor = 0;
	const worker = async () => {
		while (cursor < items.length) {
			const index$2 = cursor;
			cursor += 1;
			output[index$2] = await mapper(items[index$2], index$2);
		}
	};
	await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
	return output;
}
async function mapLimitSettled(items, limit, mapper) {
	let active = 0;
	const waiting = [];
	const acquire = async () => {
		if (active < limit) {
			active += 1;
			return;
		}
		await new Promise((resolve) => waiting.push(resolve));
		active += 1;
	};
	const release = () => {
		active -= 1;
		waiting.shift()?.();
	};
	return await Promise.allSettled(items.map(async (item, index$2) => {
		await acquire();
		try {
			return await mapper(item, index$2);
		} finally {
			release();
		}
	}));
}
function decodeHtml(bytes, contentType) {
	const charset = /charset\s*=\s*["']?([^;\s"']+)/iu.exec(contentType ?? "")?.[1]?.toLocaleLowerCase();
	const data$1 = new Uint8Array(bytes);
	const labels = charset !== void 0 ? [
		charset,
		"utf-8",
		"gb18030"
	] : ["utf-8", "gb18030"];
	for (const label of [...new Set(labels)]) try {
		return new TextDecoder(label, { fatal: true }).decode(data$1);
	} catch {}
	return new TextDecoder("utf-8").decode(data$1);
}
function transformWxsyToc(value) {
	const before$1 = [...value.matchAll(/\.section-list\.ycxsid>li:nth-child\(\d+\)\{display:none\}/gu)].length;
	const after$1 = [...value.matchAll(/\.section-list\.ycxsid>li:nth-last-child\(\d+\)\{display:none\}/gu)].length;
	return value.replace(/(<ul[^>]*class="[^"]*\bsection-list\b[^"]*\bycxsid\b[^"]*">)([\s\S]*?)(<\/ul>)/giu, (_all, open$1, body, close) => {
		const items = body.match(/<li[\s\S]*?<\/li>/giu) ?? [];
		return `${open$1}${items.slice(before$1, Math.max(before$1, items.length - after$1)).join("")}${close}`;
	});
}
function transformBase64Chapter(value, removeRecommendations = false) {
	const decoded = value.replace(/<script>\s*document\.writeln\([^']*'([^']+)'\s*\)\s*\);\s*<\/script>/giu, (_all, encoded) => {
		try {
			return Buffer$1.from(encoded, "base64").toString("utf8");
		} catch {
			return "";
		}
	});
	return removeRecommendations ? decoded.replace(/<p[^>]*>相邻推荐:[\s\S]*?<\/p>/giu, "") : decoded;
}
function transformWxsyChapter(value) {
	return transformBase64Chapter(value, true);
}
function transformRanwenChapter(value) {
	return transformBase64Chapter(value, false);
}
function sourceTransformation(source$1, stage, value) {
	const id = source$1.builtinTransform ?? source$1.id;
	if (stage === "toc" && id === "sonovel-9") return transformWxsyToc(value);
	if (stage === "chapter" && id === "sonovel-9") return transformWxsyChapter(value);
	if (stage === "chapter" && id === "sonovel-11") return transformRanwenChapter(value);
	return value;
}
function paragraphsFromHtml(source$1, html$2, rule) {
	const root$2 = load(`<section id="dnr-content">${sourceTransformation(source$1, "chapter", html$2)}</section>`)("#dnr-content");
	if (rule.filterTag.trim().length > 0) root$2.find(rule.filterTag).remove();
	let normalized = root$2.html() ?? "";
	if (rule.paragraphTag.trim().length > 0) try {
		normalized = normalized.replace(new RegExp(rule.paragraphTag, "giu"), "\n");
	} catch {
		normalized = normalized.replace(/<br\s*\/?\s*>/giu, "\n");
	}
	normalized = normalized.replace(/<\/(p|div|li|blockquote|h[1-6])>/giu, "</$1>\n").replace(/<br\s*\/?\s*>/giu, "\n");
	let filtered = load(`<div>${normalized}</div>`).root().text().replace(/\r/gu, "");
	if (rule.filterTxt.trim().length > 0) try {
		filtered = filtered.replace(new RegExp(rule.filterTxt, "giu"), "");
	} catch {}
	return filtered.split("\n").map(cleanText).filter(Boolean);
}
function parseSearchDocument(source$1, html$2, pageUrl) {
	const $ = load(sourceTransformation(source$1, "search", html$2), { baseURI: source$1.search.baseUri || pageUrl });
	const resultSelector = splitSelector(source$1.search.result).selector;
	const results = [];
	$(resultSelector).each((_index, element) => {
		const root$2 = $(element);
		const bookName = selectedValue($, root$2, source$1.search.bookName);
		const bookUrl = selectedUrl($, root$2, source$1.search.bookName, source$1.search.baseUri || pageUrl);
		if (bookName.length === 0 || bookUrl.length === 0) return;
		const publicResult = {
			id: "",
			sourceId: source$1.id,
			sourceName: source$1.name,
			sourceUrl: bookUrl,
			bookName,
			author: selectedValue($, root$2, source$1.search.author),
			intro: "",
			category: selectedValue($, root$2, source$1.search.category),
			latestChapter: selectedValue($, root$2, source$1.search.latestChapter),
			lastUpdateTime: selectedValue($, root$2, source$1.search.lastUpdateTime),
			status: selectedValue($, root$2, source$1.search.status),
			wordCount: selectedValue($, root$2, source$1.search.wordCount)
		};
		results.push({
			public: publicResult,
			source: source$1,
			bookUrl
		});
	});
	return results;
}
var OnlineSourceEngine = class {
	sources;
	cookies = /* @__PURE__ */ new Map();
	constructor(config$1, transport) {
		this.config = config$1;
		this.transport = transport;
		this.sources = loadBuiltinRules();
	}
	async dispose() {
		this.cookies.clear();
		await this.transport.dispose?.();
	}
	listSources() {
		return this.sources.map((source$1) => ({
			id: source$1.id,
			name: source$1.name,
			url: source$1.url,
			comment: source$1.comment
		}));
	}
	setSources(sources) {
		for (const source$1 of this.sources) if (!sources.some((next$1) => next$1.id === source$1.id && next$1.revision === source$1.revision)) {
			for (const key$2 of this.cookies.keys()) if (key$2.startsWith(`${source$1.id}:`)) this.cookies.delete(key$2);
		}
		this.sources = sources;
	}
	isResultCurrent(result) {
		return this.sources.some((source$1) => source$1.id === result.source.id && source$1.revision === result.source.revision);
	}
	get testTimeoutMs() {
		return this.config.searchTimeoutMs;
	}
	async assertSafeUrl(source$1, rawUrl) {
		return await this.transport.validateUrl(source$1, rawUrl);
	}
	async request(source$1, rawUrl, init) {
		let url = await this.assertSafeUrl(source$1, rawUrl);
		let method = init.method;
		let body = init.body;
		let referer = `${url.protocol}//${url.host}/`;
		let headers = { ...init.headers };
		for (let redirect = 0; redirect <= MAX_REDIRECTS; redirect += 1) {
			init.signal.throwIfAborted();
			init.trace?.push(url.toString());
			const timeout = AbortSignal.timeout(source$1.search.timeout ?? this.config.requestTimeoutMs);
			const signal = AbortSignal.any([init.signal, timeout]);
			let response;
			try {
				const cookieKey = `${source$1.id}:${url.origin}`;
				const storedCookies = [...this.cookies.get(cookieKey)?.entries() ?? []].map(([name$1, value]) => `${name$1}=${value}`).join("; ");
				const cookie = [url.origin === new URL(rawUrl).origin ? source$1.search.cookies.trim() : "", storedCookies].filter(Boolean).join("; ");
				response = await this.transport.fetch(url, {
					...method === void 0 ? {} : { method },
					...body === void 0 ? {} : { body },
					signal,
					redirect: "manual",
					headers: {
						accept: "text/html,application/xhtml+xml,application/json;q=0.9,*/*;q=0.8",
						"accept-language": "zh-CN,zh;q=0.9",
						"user-agent": "Mozilla/5.0 (compatible; DSHNovelReader/0.2; +https://github.com/zycode1561/deepseek-novel-reader)",
						referer,
						...cookie.length > 0 ? { cookie } : {},
						...headers
					}
				});
			} catch (error$1) {
				if (init.signal.aborted) throw new OnlineEngineError("抓取已取消。", "CANCELLED");
				if (signal.aborted) throw new OnlineEngineError("书源请求超时。", "SOURCE_UNAVAILABLE");
				throw new OnlineEngineError(networkErrorMessage(error$1, "书源请求失败。"), "REQUEST_FAILED");
			}
			const setCookies = response.headers.getSetCookie();
			if (setCookies.length > 0) {
				const cookieKey = `${source$1.id}:${url.origin}`;
				const jar = this.cookies.get(cookieKey) ?? /* @__PURE__ */ new Map();
				for (const header of setCookies) {
					const pair = header.split(";", 1)[0] ?? "";
					const separator = pair.indexOf("=");
					if (separator > 0) jar.set(pair.slice(0, separator).trim(), pair.slice(separator + 1).trim());
				}
				this.cookies.set(cookieKey, jar);
			}
			if ([
				301,
				302,
				303,
				307,
				308
			].includes(response.status)) {
				const location = response.headers.get("location");
				if (location === null) throw new OnlineEngineError("书源返回了无目标的重定向。", "REQUEST_FAILED");
				referer = url.toString();
				const target = await this.assertSafeUrl(source$1, new URL(location, url).toString());
				if (target.origin !== url.origin) headers = Object.fromEntries(Object.entries(headers).filter(([key$2]) => !/^(authorization|cookie)$/i.test(key$2)));
				await response.body?.cancel();
				url = target;
				if (response.status === 303 || (response.status === 301 || response.status === 302) && method?.toLocaleUpperCase() === "POST") {
					method = "GET";
					body = void 0;
				}
				continue;
			}
			if (!response.ok) throw new OnlineEngineError(`书源返回 HTTP ${response.status}。`, "SOURCE_UNAVAILABLE");
			if (Number(response.headers.get("content-length") ?? "0") > MAX_HTML_BYTES) throw new OnlineEngineError("书源页面体积超过安全限制。", "REQUEST_FAILED");
			let bytes;
			try {
				const chunks = [];
				let size = 0;
				const reader = response.body?.getReader();
				if (reader) try {
					for (;;) {
						const { done, value: chunk } = await reader.read();
						if (done) break;
						size += chunk.byteLength;
						if (size > MAX_HTML_BYTES) {
							await reader.cancel();
							throw new OnlineEngineError("书源页面体积超过安全限制。", "REQUEST_FAILED");
						}
						chunks.push(chunk);
					}
				} finally {
					reader.releaseLock();
				}
				bytes = Uint8Array.from(Buffer$1.concat(chunks)).buffer;
			} catch (error$1) {
				if (init.signal.aborted) throw new OnlineEngineError("抓取已取消。", "CANCELLED");
				if (signal.aborted) throw new OnlineEngineError("书源请求超时。", "SOURCE_UNAVAILABLE");
				throw new OnlineEngineError(networkErrorMessage(error$1, "书源响应读取失败。"), "REQUEST_FAILED");
			}
			if (bytes.byteLength > MAX_HTML_BYTES) throw new OnlineEngineError("书源页面体积超过安全限制。", "REQUEST_FAILED");
			return {
				html: decodeHtml(bytes, response.headers.get("content-type")),
				url: url.toString()
			};
		}
		throw new OnlineEngineError("书源重定向次数过多。", "REQUEST_FAILED");
	}
	async previewSearch(source$1, query, signal, trace = []) {
		return await this.searchSource(source$1, query, signal, trace);
	}
	async previewToc(result, signal, trace = []) {
		if (result.source.anyReader) return await this.loadAnyToc(result, signal, trace);
		const details = await this.loadBookDetails(result, signal, trace);
		return await this.loadToc(result, signal, details, trace);
	}
	async previewContent(source$1, link, signal, trace = []) {
		return await this.loadChapter(source$1, link, signal, trace);
	}
	async resumeReading(reference, signal) {
		const source$1 = this.sources.find((item) => item.id === reference.sourceId);
		if (!source$1) throw new OnlineEngineError("该书源已停用或删除，请在书源管理中恢复。", "SOURCE_UNAVAILABLE");
		if (!source$1.anyReader || !field(source$1.anyReader, "chapterUrl").trim()) {
			signal.throwIfAborted();
			await this.assertSafeUrl(source$1, reference.bookUrl);
			signal.throwIfAborted();
			return {
				source: source$1,
				bookUrl: reference.bookUrl,
				keyword: reference.keyword,
				...source$1.anyReader ? { stageInput: reference.bookUrl } : {},
				public: {
					id: "",
					sourceId: source$1.id,
					sourceName: source$1.name,
					sourceUrl: reference.bookUrl,
					bookName: reference.bookName,
					author: "",
					intro: "",
					category: "",
					latestChapter: "",
					lastUpdateTime: "",
					status: "",
					wordCount: ""
				}
			};
		}
		const combined = AbortSignal.any([signal, AbortSignal.timeout(this.config.searchTimeoutMs)]);
		const result = (await this.previewSearch(source$1, reference.keyword, combined)).find((item) => item.bookUrl === reference.bookUrl && item.public.bookName === reference.bookName);
		if (!result) throw new OnlineEngineError("源站已找不到这本书，请重新搜索或更换书源。", "SOURCE_UNAVAILABLE");
		result.keyword = reference.keyword;
		return result;
	}
	async readChapter(result, link, signal) {
		const attempts = result.source.crawl?.maxAttempts ?? this.config.maxRetries + 1;
		for (let attempt = 0;; attempt += 1) {
			signal.throwIfAborted();
			const min = (result.source.crawl?.minInterval ?? this.config.minRequestIntervalMs / 1e3) * 1e3;
			const max = (result.source.crawl?.maxInterval ?? this.config.maxRequestIntervalMs / 1e3) * 1e3;
			await wait(randomBetween(Math.round(min), Math.round(max)), signal);
			try {
				return await this.loadChapter(result.source, link, signal);
			} catch (error$1) {
				if (signal.aborted || attempt + 1 >= attempts || error$1 instanceof OnlineEngineError && error$1.code === "CANCELLED") throw error$1;
			}
		}
	}
	async anyPages(source$1, first$1, nextField, context, signal, trace) {
		const rule = source$1.anyReader;
		const pages = [];
		const visited = /* @__PURE__ */ new Set();
		let request = first$1;
		while (request && pages.length < MAX_PAGES && !visited.has(request.url)) {
			visited.add(request.url);
			const page = await this.request(source$1, request.url, {
				...request,
				signal,
				...trace ? { trace } : {}
			});
			pages.push(page);
			visited.add(page.url);
			const next$1 = extract(field(rule, nextField), page.html, {
				...context,
				result: page.html
			}, nextField);
			if (next$1) {
				const url = new URL(next$1, page.url);
				const headers = url.origin === new URL(first$1.url).origin ? first$1.headers : Object.fromEntries(Object.entries(first$1.headers).filter(([key$2]) => !/^(authorization|cookie)$/i.test(key$2)));
				request = {
					url: url.toString(),
					method: "GET",
					headers
				};
			} else request = void 0;
		}
		if (request && pages.length >= MAX_PAGES && !visited.has(request.url)) throw new OnlineEngineError("分页超过 12 页限制，请调整分页规则。", "REQUEST_FAILED");
		return pages;
	}
	async searchAny(source$1, query, signal, trace) {
		const rule = source$1.anyReader;
		const context = {
			host: rule.host,
			keyword: query
		};
		return (await this.anyPages(source$1, buildRuleRequest(rule, "searchUrl", context), "searchNextUrl", context, signal, trace)).flatMap((page) => evaluate(field(rule, "searchList"), page.html, {
			...context,
			result: page.html
		}, "searchList").flatMap((row) => {
			const itemContext = {
				...context,
				result: row
			};
			const get$1 = (key$2) => extract(field(rule, key$2), row, itemContext, key$2);
			const name$1 = get$1("searchName");
			const values = evaluate(field(rule, "searchResult"), row, itemContext, "searchResult");
			if (!name$1 || values.length === 0) return [];
			const stageInput = values.length === 1 ? values[0] : values;
			const bookUrl = buildRuleRequest(rule, "chapterUrl", {
				...context,
				result: stageInput
			}, page.url).url;
			return [{
				source: source$1,
				bookUrl,
				stageInput,
				keyword: query,
				public: {
					id: "",
					sourceId: source$1.id,
					sourceName: source$1.name,
					sourceUrl: bookUrl,
					bookName: name$1,
					author: get$1("searchAuthor"),
					intro: get$1("searchDescription"),
					category: "",
					latestChapter: get$1("searchChapter"),
					lastUpdateTime: "",
					status: "",
					wordCount: ""
				}
			}];
		}));
	}
	async loadAnyToc(result, signal, trace) {
		const { source: source$1 } = result;
		const rule = source$1.anyReader;
		const context = {
			host: rule.host,
			keyword: result.keyword ?? "",
			result: result.stageInput ?? result.bookUrl
		};
		const first$1 = buildRuleRequest(rule, "chapterUrl", context, result.bookUrl);
		const links = (await this.anyPages(source$1, first$1, "chapterNextUrl", {
			...context,
			lastResult: context.result
		}, signal, trace)).flatMap((page) => evaluate(field(rule, "chapterList"), page.html, {
			...context,
			lastResult: context.result,
			result: page.html
		}, "chapterList").flatMap((row) => {
			const itemContext = {
				...context,
				lastResult: context.result,
				result: row
			};
			const title = extract(field(rule, "chapterName"), row, itemContext, "chapterName");
			const values = evaluate(field(rule, "chapterResult"), row, itemContext, "chapterResult");
			if (!title || !values.length) return [];
			const stageInput = values.length === 1 ? values[0] : values;
			return [{
				title,
				url: buildRuleRequest(rule, "contentUrl", {
					...itemContext,
					result: stageInput
				}, page.url).url,
				stageInput,
				lastResult: context.result,
				keyword: result.keyword ?? ""
			}];
		}));
		const unique = [...new Map(links.map((link) => [JSON.stringify([link.url, link.stageInput]), link])).values()];
		if (!unique.length) throw new OnlineEngineError("源站章节目录为空。", "TOC_EMPTY");
		if (unique.length > MAX_CHAPTERS) throw new OnlineEngineError("章节数量超过安全限制。", "TOO_MANY_CHAPTERS");
		return unique;
	}
	async loadAnyContent(source$1, link, signal, trace) {
		const rule = source$1.anyReader;
		const context = {
			host: rule.host,
			keyword: link.keyword ?? "",
			result: link.stageInput ?? link.url,
			lastResult: link.lastResult
		};
		const paragraphs = (await this.anyPages(source$1, buildRuleRequest(rule, "contentUrl", context, link.url), "contentNextUrl", {
			...context,
			lastResult: context.result
		}, signal, trace)).flatMap((page) => evaluate(field(rule, "contentItems"), page.html, {
			...context,
			lastResult: context.result,
			result: page.html
		}, "contentItems").flatMap((value) => textParagraphs(valueText(value))));
		if (!paragraphs.length) throw new OnlineEngineError("contentItems: 未提取到正文。", "REQUEST_FAILED");
		return {
			title: link.title,
			paragraphs
		};
	}
	async searchSource(source$1, query, signal, trace) {
		if (source$1.anyReader) return await this.searchAny(source$1, query, signal, trace);
		const searchUrl = source$1.search.url.replaceAll("%s", encodeURIComponent(query));
		const method = source$1.search.method.toLocaleUpperCase();
		const first$1 = await this.request(source$1, searchUrl, {
			method,
			...method === "POST" ? { body: formData(source$1.search.data, query) } : {},
			signal,
			...trace ? { trace } : {}
		});
		const pages = [first$1];
		if (source$1.search.nextPage.trim().length > 0) {
			const $ = load(sourceTransformation(source$1, "search", first$1.html));
			const urls = $(source$1.search.nextPage).toArray().map((element) => selectedUrl($, $(element), "", first$1.url)).filter(Boolean);
			for (const url of [...new Set(urls)].slice(0, MAX_PAGES - 1)) pages.push(await this.request(source$1, url, {
				signal,
				...trace ? { trace } : {}
			}));
		}
		const results = [];
		for (const page of pages) results.push(...parseSearchDocument(source$1, page.html, page.url));
		return results;
	}
	async search(query, signal) {
		const sources = this.sources;
		const timeout = AbortSignal.timeout(this.config.searchTimeoutMs);
		const combined = AbortSignal.any([signal, timeout]);
		const settled = await mapLimitSettled(sources, this.config.searchConcurrency, (source$1) => this.searchSource(source$1, query, combined));
		const merged = settled.flatMap((item) => item.status === "fulfilled" ? item.value : []);
		const unique = [...new Map(merged.map((item) => [`${item.source.id}:${item.bookUrl}:${JSON.stringify(item.stageInput)}`, item])).values()].sort((left, right) => relevance(right.public, query) - relevance(left.public, query)).slice(0, this.config.maxSearchResults);
		return {
			results: unique.map((item) => item.public),
			resolved: unique,
			failedSources: settled.filter((item) => item.status === "rejected").length,
			searchedSources: sources.length
		};
	}
	resolveTocUrl(result) {
		const { source: source$1, bookUrl } = result;
		const usesIdentifier = source$1.toc.url.includes("%s") || source$1.toc.baseUri.includes("%s");
		let identifier = "";
		if (usesIdentifier) {
			if (source$1.book.url.trim().length === 0) throw new OnlineEngineError("书源缺少目录 URL 所需的书籍标识规则。", "TOC_EMPTY");
			identifier = new RegExp(source$1.book.url, "u").exec(bookUrl)?.[1] ?? "";
			if (identifier.length === 0) throw new OnlineEngineError("无法从书籍链接解析目录标识。", "TOC_EMPTY");
		}
		return {
			url: (source$1.toc.url || bookUrl).replaceAll("%s", identifier),
			baseUri: (source$1.toc.baseUri || source$1.toc.url || bookUrl).replaceAll("%s", identifier)
		};
	}
	async loadBookDetails(result, signal, trace) {
		const document$1 = await this.request(result.source, result.bookUrl, {
			signal,
			...trace ? { trace } : {}
		});
		const $ = load(document$1.html, { baseURI: document$1.url });
		const fields = result.source.book;
		result.public = {
			...result.public,
			bookName: selectedValue($, $.root(), fields.bookName) || result.public.bookName,
			author: selectedValue($, $.root(), fields.author) || result.public.author,
			intro: selectedValue($, $.root(), fields.intro) || result.public.intro,
			category: selectedValue($, $.root(), fields.category) || result.public.category,
			latestChapter: selectedValue($, $.root(), fields.latestChapter) || result.public.latestChapter,
			lastUpdateTime: selectedValue($, $.root(), fields.lastUpdateTime) || result.public.lastUpdateTime,
			status: selectedValue($, $.root(), fields.status) || result.public.status
		};
		return document$1;
	}
	tocLinks(source$1, html$2, pageUrl, baseUri) {
		const $ = load(splitSelector(source$1.toc.list).hasScript ? sourceTransformation(source$1, "toc", html$2) : html$2, { baseURI: baseUri || pageUrl });
		return $(source$1.toc.item).toArray().flatMap((element) => {
			const root$2 = $(element);
			const url = selectedUrl($, root$2, "", baseUri || pageUrl);
			const title = cleanText(root$2.text());
			return url.length > 0 && title.length > 0 ? [{
				title,
				url
			}] : [];
		});
	}
	async loadToc(result, signal, details, trace) {
		const { source: source$1 } = result;
		const toc = this.resolveTocUrl(result);
		const first$1 = source$1.toc.url.trim().length === 0 ? details : await this.request(source$1, toc.url, {
			signal,
			...trace ? { trace } : {}
		});
		const pages = [first$1];
		if (source$1.toc.nextPage.trim().length > 0) {
			const $ = load(splitSelector(source$1.toc.list).hasScript ? sourceTransformation(source$1, "toc", first$1.html) : first$1.html, { baseURI: toc.baseUri || first$1.url });
			const urls = $(source$1.toc.nextPage).toArray().map((element) => selectedUrl($, $(element), "", toc.baseUri || first$1.url)).filter(Boolean);
			for (const url of [...new Set(urls)].slice(0, MAX_PAGES - 1)) pages.push(await this.request(source$1, url, {
				signal,
				...trace ? { trace } : {}
			}));
		}
		const links = [...new Map(pages.flatMap((page) => this.tocLinks(source$1, page.html, page.url, toc.baseUri)).map((link) => [link.url, link])).values()];
		if (source$1.toc.isDesc) links.reverse();
		if (links.length === 0) throw new OnlineEngineError("源站章节目录为空。", "TOC_EMPTY");
		if (links.length > MAX_CHAPTERS) throw new OnlineEngineError(`章节数量超过 ${MAX_CHAPTERS} 的安全限制。`, "TOO_MANY_CHAPTERS");
		return links;
	}
	async loadChapter(source$1, link, signal, trace) {
		if (source$1.anyReader) return await this.loadAnyContent(source$1, link, signal, trace);
		let url = link.url;
		let title = link.title;
		const paragraphs = [];
		const visited = /* @__PURE__ */ new Set();
		for (let page = 0; page < MAX_PAGES && url.length > 0 && !visited.has(url); page += 1) {
			visited.add(url);
			const document$1 = await this.request(source$1, url, {
				signal,
				...trace ? { trace } : {}
			});
			const $ = load(document$1.html, { baseURI: document$1.url });
			if (page === 0) title = selectedValue($, $.root(), source$1.chapter.title) || title;
			const contentSelector = splitSelector(source$1.chapter.content).selector;
			const html$2 = $(contentSelector).toArray().map((element) => $(element).html() ?? "").join("\n");
			paragraphs.push(...paragraphsFromHtml(source$1, html$2, source$1.chapter));
			url = source$1.chapter.nextPage.trim().length > 0 ? selectedUrl($, $.root(), source$1.chapter.nextPage, document$1.url) : "";
		}
		return {
			title,
			paragraphs
		};
	}
	async acquire(result, progress, signal) {
		const links = await this.previewToc(result, signal);
		progress(0, links.length, 0);
		let completed = 0;
		let retries = 0;
		let downloadedBytes = 0;
		const sourceConcurrency = result.source.crawl?.concurrency ?? this.config.chapterConcurrency;
		const failureController = new AbortController();
		const acquisitionSignal = AbortSignal.any([signal, failureController.signal]);
		let chapters;
		try {
			chapters = await mapLimit(links, sourceConcurrency, async (link) => {
				let lastError;
				const attempts = result.source.crawl?.maxAttempts ?? this.config.maxRetries + 1;
				for (let attempt = 0; attempt < attempts; attempt += 1) {
					if (acquisitionSignal.aborted) throw new OnlineEngineError("抓取已取消。", "CANCELLED");
					const min = (result.source.crawl?.minInterval ?? this.config.minRequestIntervalMs / 1e3) * 1e3;
					const max = (result.source.crawl?.maxInterval ?? this.config.maxRequestIntervalMs / 1e3) * 1e3;
					await wait(randomBetween(Math.round(min), Math.round(max)), acquisitionSignal);
					try {
						const chapter = await this.loadChapter(result.source, link, acquisitionSignal);
						downloadedBytes += new TextEncoder().encode(`${chapter.title}\n${chapter.paragraphs.join("\n")}\n`).byteLength;
						if (downloadedBytes > MAX_FILE_BYTES) throw new OnlineEngineError("抓取后的正文超过 50MB，请选择分卷版本。", "BOOK_TOO_LARGE");
						completed += 1;
						progress(completed, links.length, retries);
						return chapter;
					} catch (error$1) {
						lastError = error$1;
						if (error$1 instanceof OnlineEngineError && (error$1.code === "CANCELLED" || error$1.code === "BOOK_TOO_LARGE")) throw error$1;
						if (attempt + 1 < attempts) {
							retries += 1;
							progress(completed, links.length, retries);
						}
					}
				}
				throw lastError instanceof Error ? lastError : new OnlineEngineError("章节抓取失败。", "REQUEST_FAILED");
			});
		} catch (error$1) {
			failureController.abort();
			throw error$1;
		}
		try {
			return buildOnlineBook({
				name: result.public.bookName,
				origin: {
					sourceId: result.source.id,
					sourceName: result.source.name,
					bookUrl: result.bookUrl,
					fetchedAt: Date.now()
				},
				chapters
			});
		} catch (error$1) {
			if (error$1 instanceof OnlineBookBuildError) throw new OnlineEngineError(error$1.message, error$1.code);
			throw error$1;
		}
	}
};

//#endregion
//#region src/online/rule-store.ts
var import_lib = /* @__PURE__ */ __toESM(require_lib$1(), 1);
const MAX_RULE_BYTES = 1024 * 1024;
const MAX_IMPORT_RULES = 200;
const builtinSources = loadBuiltinRules();
const storedRuleSchema = object({
	id: string().min(1).max(240),
	format: _enum(["any-reader", "sonovel"]),
	raw: record(string(), unknown()),
	enabled: boolean()
});
const ruleStateSchema = object({
	custom: array(storedRuleSchema).max(2e3),
	builtinEnabled: record(string(), boolean())
});
var RuleStoreError = class extends Error {
	constructor(code, message) {
		super(message);
		this.code = code;
	}
};
function sizeCheck(value) {
	if (Buffer.byteLength(typeof value === "string" ? value : JSON.stringify(value)) > MAX_RULE_BYTES) throw new RuleStoreError("RULE_TOO_LARGE", "规则输入超过 1 MiB。");
}
function decodeRuleImport(text$2) {
	sizeCheck(text$2);
	let value;
	try {
		if (text$2.trim().startsWith("eso://")) {
			const start = text$2.lastIndexOf("@");
			if (start < 0) throw new Error("缺少 ESO 压缩数据。");
			const base64$1 = text$2.slice(start + 1).trim();
			if (!/^[a-z\d+/]+={0,2}$/i.test(base64$1)) throw new Error("无效的 Base64 数据。");
			value = JSON.parse(inflateSync(Buffer.from(base64$1, "base64"), { maxOutputLength: MAX_RULE_BYTES }).toString("utf8"));
		} else value = import_lib.default.parse(text$2);
	} catch (error$1) {
		throw new RuleStoreError("INVALID_RULE", `规则解码失败：${error$1 instanceof Error ? error$1.message : String(error$1)}`);
	}
	const rows = Array.isArray(value) ? value : [value];
	if (!rows.length || rows.length > MAX_IMPORT_RULES) throw new RuleStoreError("IMPORT_LIMIT", "每次请导入 1–200 条规则。");
	if (rows.some((row) => row === null || typeof row !== "object" || Array.isArray(row))) throw new RuleStoreError("INVALID_RULE", "每条规则必须是 JSON 对象。");
	sizeCheck(value);
	return rows;
}
function compileRule(raw, format, id) {
	if (format === "any-reader") return compileAnyReader(raw, id);
	const source$1 = parseSoNovelRule(raw, id);
	const original = builtinSources.find((item) => item.id === source$1.builtinTransform);
	for (const [group, fields] of Object.entries(raw)) {
		if (typeof fields !== "object" || fields === null || Array.isArray(fields)) continue;
		for (const [key$2, value] of Object.entries(fields)) {
			if (typeof value !== "string" || !value.includes("@js:")) continue;
			if (value !== (original ? original[group]?.[key$2] : void 0)) throw new Error(`${group}.${key$2}: 自定义 SoNovel 规则不支持 JavaScript。`);
		}
	}
	for (const [name$1, pattern] of [
		["book.url", source$1.book.url],
		["chapter.paragraphTag", source$1.chapter.paragraphTag],
		["chapter.filterTxt", source$1.chapter.filterTxt]
	]) {
		if (!pattern) continue;
		const [group, key$2] = name$1.split(".");
		if (original && original[group]?.[key$2] === pattern) continue;
		try {
			checkedRegex(pattern, "gu");
		} catch (error$1) {
			throw new Error(`${name$1}: ${error$1 instanceof Error ? error$1.message : String(error$1)}`);
		}
	}
	return source$1;
}
function diagnostics(raw, format, id) {
	try {
		compileRule(raw, format, id);
		return [];
	} catch (error$1) {
		return (error$1 instanceof Error ? error$1.message : String(error$1)).split("\n").map((message) => {
			const match = /^([\w.]+):\s*(.*)$/.exec(message);
			return {
				field: match?.[1] ?? "rule",
				message: match?.[2] ?? message
			};
		});
	}
}
function publicRule(item, kind) {
	const issues = diagnostics(item.raw, item.format, item.id);
	return {
		...structuredClone(item),
		name: typeof item.raw.name === "string" ? item.raw.name : "未命名书源",
		kind,
		compatible: issues.length === 0,
		enabled: issues.length === 0 && item.enabled,
		diagnostics: issues
	};
}
var RuleStore = class {
	state;
	queue = Promise.resolve();
	imports = /* @__PURE__ */ new Map();
	listeners = /* @__PURE__ */ new Set();
	builtins = builtinSources.map((source$1) => {
		const { allowedHosts: _allowedHosts, id,...raw } = source$1;
		return {
			id,
			format: "sonovel",
			raw: {
				...raw,
				builtinTransform: id
			},
			enabled: true
		};
	});
	constructor(persistence) {
		this.persistence = persistence;
		this.state = ruleStateSchema.parse(persistence.get());
	}
	dispose() {
		this.imports.clear();
		this.listeners.clear();
	}
	onChanged(listener) {
		this.listeners.add(listener);
		return () => {
			this.listeners.delete(listener);
		};
	}
	list() {
		return [...this.builtins.map((item) => publicRule({
			...item,
			enabled: this.state.builtinEnabled[item.id] ?? true
		}, "builtin")), ...this.state.custom.map((item) => publicRule(item, "custom"))];
	}
	get(id) {
		const item = this.list().find((rule) => rule.id === id);
		if (!item) throw new RuleStoreError("RULE_NOT_FOUND", "未找到书源规则。");
		return item;
	}
	sources() {
		return this.list().filter((item) => item.enabled).map((item) => {
			const source$1 = compileRule(item.raw, item.format, item.id);
			source$1.revision = createHash("sha256").update(JSON.stringify([item.raw, item.enabled])).digest("hex");
			return source$1;
		}).filter((source$1) => !source$1.disabled && !source$1.search.disabled).sort((left, right) => Number(right.anyReader?.sort ?? 0) - Number(left.anyReader?.sort ?? 0));
	}
	transact(mutator) {
		const operation = this.queue.catch(() => void 0).then(async () => {
			const next$1 = structuredClone(this.state);
			mutator(next$1);
			ruleStateSchema.parse(next$1);
			await this.persistence.set(next$1);
			this.state = next$1;
			for (const listener of this.listeners) listener();
		});
		this.queue = operation;
		return operation;
	}
	async save(raw, format, enabled, id) {
		sizeCheck(raw);
		if (id && this.builtins.some((item$1) => item$1.id === id)) throw new RuleStoreError("BUILTIN_READONLY", "内置规则请复制为自定义书源后修改。");
		const copy$1 = structuredClone(raw);
		copy$1.id ??= randomUUID();
		const ruleId = id ?? `custom:${format}:${String(copy$1.id)}`;
		if (ruleId.length > 240 || !ruleId.startsWith("custom:")) throw new RuleStoreError("INVALID_RULE", "无效的规则 ID。");
		const item = {
			id: ruleId,
			format,
			raw: copy$1,
			enabled: enabled && diagnostics(copy$1, format, ruleId).length === 0
		};
		await this.transact((state) => {
			const index$2 = state.custom.findIndex((rule) => rule.id === ruleId);
			if (index$2 < 0) state.custom.push(item);
			else state.custom[index$2] = item;
		});
		return this.get(ruleId);
	}
	async setEnabled(id, enabled) {
		const existing = this.get(id);
		if (enabled && !existing.compatible) throw new RuleStoreError("UNSUPPORTED_RULE", "请先修复不兼容字段再启用。");
		await this.transact((state) => {
			if (existing.kind === "builtin") state.builtinEnabled[id] = enabled;
			else state.custom.find((item) => item.id === id).enabled = enabled;
		});
		return this.get(id);
	}
	async remove(id) {
		if (this.get(id).kind === "builtin") throw new RuleStoreError("BUILTIN_READONLY", "内置书源支持禁用，不支持删除。");
		await this.transact((state) => {
			state.custom = state.custom.filter((item) => item.id !== id);
		});
	}
	preview(text$2) {
		const rows = decodeRuleImport(text$2);
		const seen = new Set(this.state.custom.map((item) => item.id));
		const items = rows.map((raw) => {
			const format = typeof raw.host === "string" || "contentType" in raw ? "any-reader" : "sonovel";
			const copy$1 = structuredClone(raw);
			copy$1.id ??= randomUUID();
			const id = `custom:${format}:${String(copy$1.id)}`;
			if (id.length > 240) throw new RuleStoreError("INVALID_RULE", "规则 ID 过长。");
			const item = publicRule({
				id,
				format,
				raw: copy$1,
				enabled: true
			}, "custom");
			const duplicate = seen.has(id);
			seen.add(id);
			return {
				...item,
				duplicate
			};
		});
		const preview = {
			token: randomUUID(),
			items
		};
		for (const [token$1, entry] of this.imports) if (entry.expiresAt < Date.now()) this.imports.delete(token$1);
		if (this.imports.size >= 20) this.imports.delete(this.imports.keys().next().value);
		this.imports.set(preview.token, {
			expiresAt: Date.now() + 15 * 6e4,
			preview
		});
		return structuredClone(preview);
	}
	async commit(token$1, updateIds = []) {
		const entry = this.imports.get(token$1);
		if (!entry || entry.expiresAt < Date.now()) throw new RuleStoreError("IMPORT_EXPIRED", "导入预览已过期，请重新校验。");
		const update$1 = new Set(updateIds);
		let imported = 0, skipped = 0;
		await this.transact((state) => {
			for (const item of entry.preview.items) {
				const index$2 = state.custom.findIndex((rule) => rule.id === item.id);
				if (index$2 >= 0 && !update$1.has(item.id)) {
					skipped++;
					continue;
				}
				const stored = {
					id: item.id,
					format: item.format,
					raw: item.raw,
					enabled: item.enabled
				};
				if (index$2 < 0) state.custom.push(stored);
				else state.custom[index$2] = stored;
				imported++;
			}
		});
		this.imports.delete(token$1);
		return {
			imported,
			skipped
		};
	}
};

//#endregion
export { MAX_RULE_BYTES, OnlineEngineError, OnlineSourceEngine, RuleStore, RuleStoreError, compileRule };
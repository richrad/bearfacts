var quote=new Array();

quote[0] = "Bears discovered fire before man, but prefer their fish raw.";
quote[1] = "Mitt Romney personally employs seven riding bears to help him navigate his underground fortress.";
quote[2] = "Trigger Warning: This website is about bears.";

var attrib=new Array();
attrib[0] = "Jane's Guide to the Modern Bear";
attrib[1] = "Bears: No, You Prove to ME That They Aren't From Space";


var randquote=Math.round(Math.random()*((quote.length)-1));
var randattrib=Math.round(Math.random()*((attrib.length)-1));

function showquote()
	{
	document.write(quote[randquote]);
	}

function showattrib()
	{
	document.write(attrib[randattrib]);
	}
	
function tweet()
	{
	window.open("http://twitter.com/home?status=" + quote[randquote] + " http://bearfacts.info %23bearfacts");
	}
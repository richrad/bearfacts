var quote=new Array();

quote[0] = "Bears discovered fire before man, but prefer their fish raw.";
quote[1] = "Mitt Romney personally employs seven riding bears to help him navigate his underground fortress.";
quote[2] = "Trigger Warning: This website is about bears.";
quote[3] = "Only four U.S. Congressmen have been bears.";
quote[4] = "What to do if you encounter a panda bear:<ol><li>Hide any and all bamboo.</li><li>Close your eyes. If you cannot see the panda, it cannot see you.</li><li>Say [very clearly and loudly], &#8220;I sure am glad that there are NO PANDAS around here. I see no pandas at all!&#8221; [this step is necessary in case the panda does not see that your eyes are closed. This will ensure that the panda knows that it does not see you.]</li></ol>";
quote[5] = "Alaska's first Miss USA candidate was a polar bear named Patricia Ogreteeth, who took the crown in 1959 but was later disqualified for eating an opposing candidate.";
quote[6] = "Paul Ryan's first coach for both noodling [barehanded catfish catching] and P90X was a brown bear named Rolf, whose European ancestry made him tolerable to Ryan despite his color."

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
	
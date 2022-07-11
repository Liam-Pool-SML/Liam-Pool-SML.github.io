var destiniSVal = "";
var destiniCurrHeight = 0;
var ecHeight = 0;
var ecType = 0;

function destiniSend() {
    if (document.getElementById("destini")) {
        document.getElementById("destini").contentWindow.postMessage(destiniSVal, "https://destinilocators.com");
    }
}

function destiniLocKeypress(e) {
    if (document.getElementById("destiniLocation")) {
        var key;
        if (window.event) {
            key = window.event.keyCode;
        } else {
            key = e.which;
        }
        if (key == 13) {
            destiniSVal = "DLOC:" + document.getElementById('destiniLocation').value;
            destiniSend();
            return false;
        }
    }
}

function destiniLocSubmit() {
    if (document.getElementById("destiniLocation")) {
        destiniSVal = "DLOC:" + document.getElementById('destiniLocation').value;
        destiniSend();
    }
}

function destiniSetRange() {
    if (document.getElementById("destiniRange")) {
        var selIndex = document.getElementById('destiniRange').selectedIndex;
        destiniSVal = "RNGE:" + document.getElementById('destiniRange').options[selIndex].value;
        destiniSend();
    }
}

function destiniAddProducts(upc, subFlag) {
    if (subFlag) {
        sendFlag = subFlag;
    } else {
        sendFlag = 0;
    }
    if (document.getElementById("destini")) {
        destiniSVal = "PROD:" + sendFlag + "|" + upc;
        destiniSend();
    }
}

function destiniReset(upc) {
    if (upc) {
        sendUpc = upc;
    } else {
        sendUpc = "|";
    }
    if (document.getElementById("destini")) {
        destiniSVal = "RSET:" + sendUpc;
        destiniSend();
    }
}

function getPoint(el) {
    const bound = el.getBoundingClientRect();
    return {
        left: bound.left + window.scrollX,
        top: bound.top + window.scrollY
    };
}

function destiniScrollPoint(whatPoint,offVal) {
	var theOff = 0;
	if (offVal) {
		if (!isNaN(offVal)) {
			theOff = offVal;
		}
	}
	console.log("destiniScrollPoint",whatPoint,ecHeight,ecType,theOff);
	if (document.getElementById("destini")) {
		var offset = getPoint(document.getElementById("destini")).top;
		if (whatPoint == "top") {window.scrollTo(0,(offset+theOff));}
		else if (whatPoint == "bot") {window.scrollTo(0,(offset+destiniCurrHeight+theOff));}
		else if (whatPoint == "mid") {
			if (ecType == 1){window.scrollTo(0,(offset+(offset+ecHeight)+theOff));}
			else if (ecType == 2){window.scrollTo(0,(offset+(destiniCurrHeight-ecHeight)+theOff));}
		}
	}
}
window.addEventListener("message", function(event) {
    var checkOr = 0;
	if (event.origin) {
		console.log("addEventListener (event.origin)",event.origin);
		orVal = String(event.origin);
		let parser = document.createElement('a');
		parser.href = orVal;
        let r2 = RegExp('(^destinilocators[.]com$|.+[.]destinilocators[.]com$)', 'gi').test(parser.hostname);
        checkOr = r2 === true ? 1 : checkOr;
	}
    if (checkOr == 1) {
        var checkVal = "";
        var setVal = "";
        if (event.data) {
            var baseVal = String(event.data);
            checkVal = baseVal.substring(0, 5);
            setVal = baseVal.substring(5);
        }
        if (checkVal === "RSIZ:") {
            if (document.getElementById("destini")) {
                var newSize = parseInt(setVal);
                console.log("Resizer event.data/newSize = " + checkVal + " / " + newSize);
                document.getElementById('destini').style.height = newSize + "px";
                destiniCurrHeight = newSize;
            }
        } else if (checkVal === "ECHT:") {
            if (document.getElementById("destini")) {
                var subPos = setVal.indexOf("|");
                var thisSet = setVal.substring(0, subPos);
                var thisType = setVal.substring(subPos + 1);
                ecHeight = parseInt(thisSet);
                ecType = parseInt(thisType);
            }
        } else if (checkVal === "SCRL:") {
            if (document.getElementById("destini")) {
                document.getElementById('destini').scrollTop = 0;
            }
        } else if (checkVal === "SZIP:") {
            if (document.getElementById("destiniLocation")) {
                var setZip = setVal;
                document.getElementById('destiniLocation').value = setZip;
            }
        } else if (checkVal === "LCTN:") {
            if (document.getElementById("destini")) {
                document.getElementById('destini').contentWindow.location.replace(setVal);
            }
        }
    }
}, false);
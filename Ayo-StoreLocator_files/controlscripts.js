var shareArr = [];
var suggestions = [];
var words = [];
var outp;
var oldins;
var posi = -1;
var input;
var key;
var tempObj = {};
function autotextIt(inoutObj,tempName) {
	var baseHTML = "";
	if (inoutObj != "" && inoutObj != undefined) {
		baseHTML = inoutObj;
		var cdbON = 1;
		while (cdbON == 1) {
			var cdbTagStart = baseHTML.indexOf("<!--CDB");
			if (cdbTagStart != -1) {
				var cdbTagEnd = baseHTML.indexOf(">",cdbTagStart);
				var cdbTagStrip = baseHTML.substring(cdbTagStart,(cdbTagEnd+1));
				var cdbTagHTMLStart = baseHTML.substr(0,cdbTagStart);
				var cdbTagHTMLEnd = baseHTML.substr((cdbTagEnd+1));
				baseHTML = cdbTagHTMLStart + coreClient + cdbTagHTMLEnd;
			}
			else {
				cdbON = 0;
			}
		}
		var urlTagStart = baseHTML.indexOf("<!--BASEURL");
		if (urlTagStart != -1) {
			var urlTagEnd = baseHTML.indexOf(">",urlTagStart);
			var urlTagStrip = baseHTML.substring(urlTagStart,(urlTagEnd+1));
			var urlHTMLStart = baseHTML.substr(0,urlTagStart);
			var urlHTMLEnd = baseHTML.substr((urlTagEnd+1));
			baseHTML = urlHTMLStart + disUs + urlHTMLEnd;
		}
		var rteConsoleTagStart = baseHTML.indexOf("<!--RTECONSOLE");
		if (rteConsoleTagStart != -1 && rtEcomm == 1) {
			var rteConsoleTagEnd = baseHTML.indexOf(">",rteConsoleTagStart);
			var rteConsoleTagStrip = baseHTML.substring(rteConsoleTagStart,(rteConsoleTagEnd+1));
			var rteConsoleHTMLStart = baseHTML.substr(0,rteConsoleTagStart);
			var rteConsoleHTMLEnd = baseHTML.substr((rteConsoleTagEnd+1));
			baseHTML = rteConsoleHTMLStart + "<span id='rteWriteDiv'><\/span>" + rteConsoleHTMLEnd;
		}
		var zipTagStart = baseHTML.indexOf("<!--ALTZIPTEXT");
		if (zipTagStart != -1) {
			var zipTagEnd = baseHTML.indexOf(">",zipTagStart);
			var zipTagStrip = baseHTML.substring(zipTagStart,(zipTagEnd+1));
			var zipHTMLStart = baseHTML.substr(0,zipTagStart);
			var zipHTMLEnd = baseHTML.substr((zipTagEnd+1));
			baseHTML = zipHTMLStart + document.getElementById('revCodeZip').value + zipHTMLEnd;
		}
		var addFieldTagStart = baseHTML.indexOf("<!--ALTADDFIELD");
		if (addFieldTagStart != -1) {
			var addFieldTagEnd = baseHTML.indexOf(">",addFieldTagStart);
			var addFieldTagStrip = baseHTML.substring(addFieldTagStart,(addFieldTagEnd+1));
			var addFieldHTMLStart = baseHTML.substr(0,addFieldTagStart);
			var addFieldHTMLEnd = baseHTML.substr((addFieldTagEnd+1));
			var addFieldRender = "";
			var addFieldValueVal = "";
			var addFieldValueStart = addFieldTagStrip.indexOf(" VALUE=");
			if (addFieldValueStart != -1) {
				var addFieldValueEnd = addFieldTagStrip.indexOf("]");
				addFieldValueVal = addFieldTagStrip.substring((addFieldValueStart+8),(addFieldValueEnd));
				var addFieldValueRender = " placeholder='"+addFieldValueVal+"'";
			}
			else {
				var addFieldValueRender = "";
			}
			addFieldRender = "<input type='text' name='altAddressField_" + tempName + "' id='altAddressField_" + tempName + "' class='alt_address_field alt_address_field_" + tempName + " alt_address_field_base' onkeyup='altFieldKeypress(event,\"altAddressField_" + tempName + "\",1);'" + addFieldValueRender + " title=\"" + addFieldValueVal + "\" aria-label='Enter a city, state, or postal code to find stores near you'>";
			baseHTML = addFieldHTMLStart + addFieldRender + addFieldHTMLEnd;
		}
		var submitButtonTagStart = baseHTML.indexOf("<!--ALTSUBBUTTON");
		if (submitButtonTagStart != -1) {
			var submitButtonTagEnd = baseHTML.indexOf(">",submitButtonTagStart);
			var submitButtonTagStrip = baseHTML.substring(submitButtonTagStart,(submitButtonTagEnd+1));
			var submitButtonHTMLStart = baseHTML.substr(0,submitButtonTagStart);
			var submitButtonHTMLEnd = baseHTML.substr((submitButtonTagEnd+1));
			var submitButtonRender = "";
			var submitButtonValueStart = submitButtonTagStrip.indexOf(" VALUE=");
			if (submitButtonValueStart != -1) {
				var submitButtonValueEnd = submitButtonTagStrip.indexOf("]",submitButtonValueStart);
				submitButtonValueVar = submitButtonTagStrip.substring((submitButtonValueStart+8),(submitButtonValueEnd));
			}
			else {
				submitButtonValueVar = "SUBMIT";
			}
			var submitButtonItalicStart = submitButtonTagStrip.indexOf(" FNTAW=");
			if (submitButtonItalicStart != -1) {
				var submitButtonItalicEnd = submitButtonTagStrip.indexOf("]",submitButtonItalicStart);
				var submitButtonItalicVar = "<i class='fa " + submitButtonTagStrip.substring((submitButtonItalicStart+8),(submitButtonItalicEnd)) + "'><\/i>";
			}
			else {
				var submitButtonItalicVar = "";
			}
			submitButtonRender = "<div id='altSubmitButton_" + tempName + "' class='alt_submit_button alt_submit_button_" + tempName + " alt_submit_button_" + tempName + "_off'";
			if (hoverState==1) {
				submitButtonRender += " onmouseover='genericButtonOver(\"alt_submit_button_" + tempName + "\",\"alt_submit_button_" + tempName + "\");' onfocus='genericButtonOver(\"alt_submit_button_" + tempName + "\",\"alt_submit_button_" + tempName + "\");' onmouseout='genericButtonOut(\"alt_submit_button_" + tempName + "\",\"alt_submit_button_" + tempName + "\");' onblur='genericButtonOut(\"alt_submit_button_" + tempName + "\",\"alt_submit_button_" + tempName + "\");'";
			}
			submitButtonRender += " onclick='altSubmitForm(\"altAddressField_" + tempName + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){altSubmitForm(\"altAddressField_" + tempName + "\");}' tabindex='0' title=\"" + submitButtonValueVar + "\">" + submitButtonItalicVar + submitButtonValueVar + "<\/div>";
			baseHTML = submitButtonHTMLStart + submitButtonRender + submitButtonHTMLEnd;
		}
		var resultsStreetTagStart = baseHTML.indexOf("<!--RESULTSSTREET");
		if (resultsStreetTagStart != -1) {
			var resultsStreetTagEnd = baseHTML.indexOf(">",resultsStreetTagStart);
			var resultsStreetHTMLStart = baseHTML.substr(0,resultsStreetTagStart);
			var resultsStreetHTMLEnd = baseHTML.substr((resultsStreetTagEnd+1));
			baseHTML = resultsStreetHTMLStart + "<span id='altResultsStreet_" + tempName + "'>" + document.getElementById('revCodeStreet').value + "<\/span>" + resultsStreetHTMLEnd;
		}
		var resultsCityTagStart = baseHTML.indexOf("<!--RESULTSCITY");
		if (resultsCityTagStart != -1) {
			var resultsCityTagEnd = baseHTML.indexOf(">",resultsCityTagStart);
			var resultsCityHTMLStart = baseHTML.substr(0,resultsCityTagStart);
			var resultsCityHTMLEnd = baseHTML.substr((resultsCityTagEnd+1));
			baseHTML = resultsCityHTMLStart + "<span id='altResultsCity_" + tempName + "'>" + document.getElementById('revCodeCity').value + "<\/span>" + resultsCityHTMLEnd;
		}
		var resultsStateTagStart = baseHTML.indexOf("<!--RESULTSSTATE");
		if (resultsStateTagStart != -1) {
			var resultsStateTagEnd = baseHTML.indexOf(">",resultsStateTagStart);
			var resultsStateHTMLStart = baseHTML.substr(0,resultsStateTagStart);
			var resultsStateHTMLEnd = baseHTML.substr((resultsStateTagEnd+1));
			baseHTML = resultsStateHTMLStart + "<span id='altResultsState_" + tempName + "'>" + document.getElementById('revCodeState').value + "<\/span>" + resultsStateHTMLEnd;
		}
		var resultsZipTagStart = baseHTML.indexOf("<!--RESULTSZIP");
		if (resultsZipTagStart != -1) {
			var resultsZipTagEnd = baseHTML.indexOf(">",resultsZipTagStart);
			var resultsZipHTMLStart = baseHTML.substr(0,resultsZipTagStart);
			var resultsZipHTMLEnd = baseHTML.substr((resultsZipTagEnd+1));
			baseHTML = resultsZipHTMLStart + "<span id='altResultsZip_" + tempName + "'>" + document.getElementById('revCodeZip').value + "<\/span>" + resultsZipHTMLEnd;
		}
		var resultsCountryTagStart = baseHTML.indexOf("<!--RESULTSCOUNTRY");
		if (resultsCountryTagStart != -1) {
			var resultsCountryTagEnd = baseHTML.indexOf(">",resultsCountryTagStart);
			var resultsCountryHTMLStart = baseHTML.substr(0,resultsCountryTagStart);
			var resultsCountryHTMLEnd = baseHTML.substr((resultsCountryTagEnd+1));
			baseHTML = resultsCountryHTMLStart + "<span id='altResultsCountry_" + tempName + "'>" + document.getElementById('revCodeCountry').value + "<\/span>" + resultsCountryHTMLEnd;
		}
		var dtON = 1;
		while (dtON == 1) {
			var discTextTagStart = baseHTML.indexOf("<!--DISCLAIMERTEXT");
			if (discTextTagStart != -1) {
				var discTextTagEnd = baseHTML.indexOf(">",discTextTagStart+1);
				var discTextHTMLStart = baseHTML.substr(0,discTextTagStart);
				var discTextHTMLEnd = baseHTML.substr((discTextTagEnd+1));
				baseHTML = discTextHTMLStart + disclaimerText + discTextHTMLEnd;
			}
			else {
				dtON = 0;
			}
		}
	}
	else {
		baseHTML = "";
	}
	return baseHTML;
}
function altFieldKeypress(e,addField,result) {
	var key;
	if(window.event) {key = window.event.keyCode;}
	else {key = e.which;}
	if(key == 13){
		if (result == 1) {
			altSubmitForm(addField);
		}
		return false;
	}
}
function altSubmitForm(addField) {
	if(gLog==1){console.log("altSubmitForm loaderToggle state=1");}
	loaderToggle(1);
	whatStoreUp = 0;
	var canSubmit = 0;
	if (document.getElementById(addField)) {
		if (document.getElementById(addField).value != "") {
			document.getElementById('street').value = document.getElementById(addField).value;
			document.getElementById('city').value = "";
			document.getElementById('state').value = "";
			document.getElementById('zip').value = "";
			canSubmit = 1;
		}
	}
	if (prodCartArray.length == 0) {
		prodSelectedArray.length = 0;
		if (document.getElementById('PROD').value=="") {
			for (p=0;p<prodDisplayArray.length;p++) {
				if (prodDisplayArray[p][9] == "1") {
					prodSelectedArray.push(prodDisplayArray[p][1]);
				}
			}
			document.getElementById('PROD').value = prodSelectedArray.toString();
		}
		if (document.getElementById('PROD').value == "") {
			document.getElementById('PROD').value = prodSelString;
		}
	}
	else {
		var tempProdArray = [];
		for (c=0;c<prodCartArray.length;c++) {
			for (p=0;p<prodDisplayArray.length;p++) {
				if (prodDisplayArray[p][0] == prodCartArray[c]) {
					tempProdArray.push(prodDisplayArray[p][1]);
				}
			}
		}
		document.getElementById('PROD').value = tempProdArray.toString();
	}
	groupSelectedArray.length = 0;
	for (g=0;g<catArray.length;g++) {
		if (catArray[g][6] == "1") {
			groupSelectedArray.push(catArray[g][5]);
		}
	}
	document.getElementById('GROUP').value = groupSelectedArray.toString();
	if (document.getElementById('SCFILTER').value=="" && panel1StoreCatOn == 1) {
		storeCatSelectedArray.length = 0;
		for (sc=0;sc<storeCatArray.length;sc++) {
			if (storeCatArray[sc][8] == 1) {
				storeCatSelectedArray.push(storeCatArray[sc][0]);
			}
		}
		document.getElementById('SCFILTER').value = storeCatSelectedArray.toString();
	}
	if(gLog==1){console.log("altSubmitForm - canSubmit = " + canSubmit);}
	if (canSubmit == 1) {
		if (enableResize == 2) {
			parent.postMessage("SRCH:"+document.getElementById(addField).value,refurl);
		}
		var urlParamPush = "";
		var urlParamTrack = 0;
		if (urlParamArray.length) {
			for (l=0;l<urlParamArray.length;l++) {
				if (urlParamTrack == 0) {
					urlParamPush += "?";
					urlParamTrack = 1;
				}
				else {
					urlParamPush += "&";
				}
				urlParamPush += urlParamArray[l][0] + "=" + urlParamArray[l][1];
			}
		}
		ecPos = ecPosOrig;
		bmPos = bmPosOrig;
		tabSelect = tabSelectOrig;
		bmNoRes = 0;
		ecNoRes = 0;
		ecbmNoRes = 0;
		panel2CodeAddress();
	}
	else {
		errorText("Please Enter a Valid Location",2);
	}
}
function setTrackObj() {
		tempObj = {};
		tempObj['CB'] = noCache;
		tempObj['CLG'] = gLog;
		tempObj['PNL'] = whatPanelUp.toUpperCase();
		tempObj['ITR'] = iteration;
		tempObj['VER'] = version;
		tempObj['CLI'] = coreClient;
		tempObj['DEV'] = deviceType;
		tempObj['REF'] = referer;
		tempObj['TLL'] = tlVal;
		tempObj['SES'] = daSESSID;
		tempObj['UTV'] = dutv;
		tempObj['TBN'] = t_browser_name;
		tempObj['TBV'] = t_browser_version;
		tempObj['TON'] = t_os_name;
		tempObj['TOV'] = t_os_version;
		tempObj['TEN'] = t_engine_name;
		tempObj['TEV'] = t_engine_version;
		tempObj['TAG'] = t_agent;
		tempObj['TEP'] = t_endpoint;
		tempObj['UTMC'] = utm_campaign;
		tempObj['UTMM'] = utm_medium;
		tempObj['UTMS'] = utm_source;
		if (CBI != "") {
			tempObj['CBI'] = CBI;
		}
		var now = new Date();
		var realMonth = parseInt(now.getUTCMonth()) + 1;
		tempObj['DAT'] = now.getUTCFullYear() + "-" + String("00" + realMonth).slice(-2) + "-" + String("00" + now.getUTCDate()).slice(-2) + " " + String("00" + now.getUTCHours()).slice(-2) + ":" + String("00" + now.getUTCMinutes()).slice(-2) + ":" + String("00" + now.getUTCSeconds()).slice(-2);
		return tempObj;
}
function sendTrackObj(thisObj) {
	//if(gLog==1){console.log(thisObj.RQF + " - thisObj: " , thisObj);}
	$.post(trackEnd, {sendJSON: thisObj}, function(data){
		if(gLog==1){console.log("trackapi: " , data);}
	});
}
function p2NoLoc() {
	document.getElementById('LO').value = "32.6768138";
	document.getElementById('LA').value = "-117.0383080";
	haltTrack = 1;
	p0PreConnect(2);
}
function esriIntervalOn(panelVar) {
	esriInterval = setInterval(function(){
		esriTimeCurr = esriTimeCurr + 100;
		if (esriTimeCurr >= esriTime) {
			esriIntTrack = 2;
			esriIntervalOff("TIMEOUT",panelVar);
		}
		else if (esriIntTrack == 0) {
			esriIntervalOff("SUCCESS",panelVar);
		}
	}, 100);
}
function esriIntervalOff(offCode,panelVar) {
	if (EIO == 1) {
		EIO = 0;
		esriCA = 0;
		esriInterval = clearInterval(esriInterval);
		if (offCode == "TIMEOUT" && esriLoadIt == 0) {
			failOver(panelVar);
		}
		else if (offCode == "SUCCESS") {
		}
		if(gLog==1){console.log("esriIntervalOff - " + offCode + " " + esriTimeCurr + "ms");}
	}
}
function failOver(panelVar) {
}
function setVisible(visi) {
	var x = document.getElementById("autocompShadow");
	var t = document.getElementsByName("panel1FilterField")[0];
	x.style.position = 'absolute';
	x.style.top =  (findPosY(t)+3)+"px";
	x.style.left = (findPosX(t)+2)+"px";
	x.style.visibility = visi;
}
function autoCompleteInit() {
	outp = document.getElementById("autocompOutput");
	setVisible("hidden");
	document.onkeydown = keygetter;
	document.onkeyup = keyHandler;
}
function findPosX(obj) {
	var curleft = 0;
	if (obj.offsetParent) {
		while (obj.offsetParent) {
			curleft += obj.offsetLeft;
			obj = obj.offsetParent;
		}
	}
	else if (obj.x) {
		curleft += obj.x;
	}
	return curleft;
}
function findPosY(obj) {
	var curtop = 0;
	if (obj.offsetParent) {
		curtop += obj.offsetHeight;
		while (obj.offsetParent) {
			curtop += obj.offsetTop;
			obj = obj.offsetParent;
		}
	}
	else if (obj.y) {
		curtop += obj.y;
		curtop += obj.height;
	}
	return curtop;
}
function lookAt() {
	var ins = document.getElementsByName("panel1FilterField")[0].value;
	if (oldins == ins) {
		return;
	}
	else if (posi > -1) {
	}
	else if (ins.length > 0) {
		words = getWord(ins);
		if (words.length > 0) {
			clearOutput();
			for (var i=0;i < words.length; ++i) {
				addWord (words[i]);
			}
			setVisible("visible");
			input = document.getElementsByName("panel1FilterField")[0].value;
		}
		else{
			setVisible("hidden");
			posi = -1;
		}
	}
	else{
		setVisible("hidden");
		posi = -1;
	}
	oldins = ins;
}
function addWord(word){
	var sp = document.createElement("div");
	sp.appendChild(document.createTextNode(word));
	sp.onmouseover = mouseHandler;
	sp.onmouseout = mouseHandlerOut;
	sp.onclick = mouseClick;
	outp.appendChild(sp);
}
function clearOutput(){
	while (outp.hasChildNodes()){
		noten=outp.firstChild;
		outp.removeChild(noten);
	}
	posi = -1;
}
function getWord(beginning) {
	var words = [];
	for (var i=0;i < suggestions.length; ++i) {
		var j = -1;
		var correct = 1;
		while (correct == 1 && ++j < beginning.length) {
			if (suggestions[i].charAt(j) != beginning.charAt(j).toLowerCase()) {
				if (suggestions[i].charAt(j) != beginning.charAt(j).toUpperCase()) {
					correct = 0;
				}
			}
		}
		if (correct == 1) {
			words[words.length] = suggestions[i];
		}
	}
	return words;
}
function setColor (_posi, _color, _forg) {
	outp.childNodes[_posi].style.background = _color;
	outp.childNodes[_posi].style.color = _forg;
}
function keygetter(event) {
	if (!event && window.event) event = window.event;
	if (event) key = event.keyCode;
	else key = event.which;
}
function keyHandler(event) {
	if (document.getElementById("autocompShadow").style.visibility == "visible") {
		var textfield = document.getElementsByName("panel1FilterField")[0];
		if (key == 40) {
			if (words.length > 0 && posi < words.length-1) {
				if (posi >=0) {
					setColor(posi, "#fff", "#666");
				}
				else {
					input = textfield.value;
				}
				setColor(++posi, "#ddd", "#666");
				textfield.value = outp.childNodes[posi].firstChild.nodeValue;
			}
		}
		else if (key == 38) {
			if (words.length > 0 && posi >= 0) {
				if (posi >=1) {
					setColor(posi, "#fff", "#666");
					setColor(--posi, "#ddd", "#666");
					textfield.value = outp.childNodes[posi].firstChild.nodeValue;
				}
				else {
					setColor(posi, "#fff", "#666");
					textfield.value = input;
					textfield.focus();
					posi--;
				}
			}
		}
		else if (key == 27) {
			textfield.value = input;
			setVisible("hidden");
			posi = -1;
			oldins = input;
		}
		else if (key == 8) {
			posi = -1;
			oldins=-1;
		}
		panel1ClassFilterType(event);
	}
}
function clickOff() {
}
var mouseHandler = function() {
	for (var i=0; i < words.length; ++i) {
		setColor (i, "#fff", "#666");
	}
	this.style.background = "#ddd";
	this.style.color= "#666";
}
var mouseHandlerOut = function() {
	this.style.background = "#fff";
	this.style.color= "#666";
}
var mouseClick = function() {
	document.getElementsByName("panel1FilterField")[0].value = this.firstChild.nodeValue;
	setVisible("hidden");
	posi = -1;
	oldins = this.firstChild.nodeValue;
}
var checkSetSize=1;
function setSize(reDraw) {
	if (atlantis == 1) {whatPanelUp = "panel2";}
	var runSize = 0;
	if (document.getElementById('panel0').getBoundingClientRect()) {
		var winInfo = document.getElementById('panel0').getBoundingClientRect();
		if (winWidth != parseInt(winInfo.width)) {
			winWidth = parseInt(winInfo.width);
			runSize++;
			if (document.getElementById('loaderDivFront').getBoundingClientRect()) {
				var loaderLeftInfo = document.getElementById('loaderDivFront').getBoundingClientRect();
				if (loaderLeft != parseInt(loaderLeftInfo.width)) {
					loaderLeft = parseInt(loaderLeftInfo.width);
					runSize++;
				}
			}
		}
		if (winHeight != parseInt(winInfo.height)) {
			winHeight = parseInt(winInfo.height);
			runSize++;
			if (document.getElementById('loaderDivFront').getBoundingClientRect()) {
				var loaderTopInfo = document.getElementById('loaderDivFront').getBoundingClientRect();
				if (loaderTop != parseInt(loaderTopInfo.height)) {
					loaderTop = parseInt(loaderTopInfo.height);
					runSize++;
				}
			}
		}
	}
	if (runSize != 0 && checkSetSize == 1) {
		checkSetSize = 0;
		/*
		if ( typeof( window.innerWidth ) == 'number' ) {
			winWidth = document.getElementById('panel0').offsetWidth;
			winHeight = document.getElementById('panel0').offsetHeight;
			loaderLeft = document.getElementById('loaderDivFront').offsetWidth;
			loaderTop = document.getElementById('loaderDivFront').offsetHeight;
		}
		else if ( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
			winWidth = document.getElementById('panel0').offsetWidth;
			winHeight = document.getElementById('panel0').offsetHeight;
			loaderLeft = document.getElementById('loaderDivFront').offsetWidth;
			loaderTop = document.getElementById('loaderDivFront').offsetHeight;
		}
		else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
			winWidth = document.getElementById('panel0').offsetWidth;
			winHeight = document.getElementById('panel0').offsetHeight;
			loaderLeft = document.getElementById('loaderDivFront').offsetWidth;
			loaderTop = document.getElementById('loaderDivFront').offsetHeight;
		}
		*/
		if (reDraw) {
			itsReSized++;
		}
		if (globalRespWidth != 0) {
			if(winWidth > globalRespWidth) {
				$("#cssmenu").show();
				$("#cssmenu_two").hide();
			}
			else {
				$("#cssmenu").hide();
				$("#cssmenu_two").show();
			}
			if(winWidth > globalRespWidth && respTrack == 0 && whatPanelUp == "panel1") {
				if(gLog==1){console.log("RespWidth Redraw P1 Increase");}
				catModalClose(whatPanelUp);
				for (x=0;x<labelArray.length;x++) {
					$('.panel_1_product_label_'+labelArray[x][0]).removeClass('panel_1_product_label_hover');
					$('.panel_1_product_label_'+labelArray[x][0]).removeClass('panel_1_product_label_on');
					$('.panel_1_product_label_'+labelArray[x][0]).addClass('panel_1_product_label_off');
					labelArray[x][3] = 0;
				}
				hoverState = 1;
				if (p1LoadType != 0) {
					if (p1LoadType == 2) {
						for (x=0;x<famArray.length;x++) {
							famArray[x][5] = 0;
						}
					}
					if (p1TemplateSet.panel1BaseDiv){panel1Load(p1LoadType);}
				}
				else {
					if (p1TemplateSet.panel1BaseDiv){panel1Load();}
				}
			}
			if(winWidth <= globalRespWidth && respTrack == 1 && whatPanelUp == "panel1") {
				if(gLog==1){console.log("RespWidth Redraw P1 Decrease");}
				catModalClose(whatPanelUp);
				for (x=0;x<labelArray.length;x++) {
					$('.panel_1_product_label_'+labelArray[x][0]).removeClass('panel_1_product_label_hover');
					$('.panel_1_product_label_'+labelArray[x][0]).removeClass('panel_1_product_label_on');
					$('.panel_1_product_label_'+labelArray[x][0]).addClass('panel_1_product_label_off');
					labelArray[x][3] = 0;
				}
				hoverState = 0;
				if (p1LoadType != 0) {
					if (p1LoadType == 2) {
						for (x=0;x<famArray.length;x++) {
							famArray[x][5] = 0;
						}
					}
					if (p1TemplateSet.panel1BaseDiv){panel1Load(p1LoadType);}
				}
				else {
					if (p1TemplateSet.panel1BaseDiv){panel1Load();}
				}
			}
			if(winWidth > globalRespWidth && respTrack == 0 && whatPanelUp == "panel2") {
				if(gLog==1){console.log("RespWidth Redraw P2 Increase");}
				hoverState = 1;
				panel2Load("panel2");
			}
			if(winWidth <= globalRespWidth && respTrack == 1 && whatPanelUp == "panel2") {
				if(gLog==1){console.log("RespWidth Redraw P2 Decrease");}
				hoverState = 0;
				panel2Load("panel2");
			}
			if(winWidth > globalRespWidth && respTrack == 0 && whatPanelUp == "panel3") {
				if(gLog==1){console.log("RespWidth Redraw P3 Increase");}
				hoverState = 1;
				panel3Load();
				setTimeout(function() {
					if (document.getElementById('revDirCompile').value != "") {
						if (document.getElementById('panel3NewLocField')) {
							document.getElementById('panel3NewLocField').value = document.getElementById('revDirCompile').value;
							panel3CodeDirectAddress(1);
						}
					}
				}, 1000);
			}
			if(winWidth <= globalRespWidth && respTrack == 1 && whatPanelUp == "panel3") {
				if(gLog==1){console.log("RespWidth Redraw P3 Decrease");}
				hoverState = 0;
				panel3Load();
				setTimeout(function() {
					if (document.getElementById('revDirCompile').value != "") {
						if (document.getElementById('panel3NewLocField')) {
							document.getElementById('panel3NewLocField').value = document.getElementById('revDirCompile').value;
							panel3CodeDirectAddress(1);
						}
					}
				}, 1000);
			}
			if(winWidth > globalRespWidth && document.getElementById('panel4MultiMap') && reDraw && itsReSized > 0 && whatPanelUp == "panel4") {
				if(gLog==1){console.log("RespWidth Redraw P4");}
				panel4DrawMultiMap();
			}
			if(winWidth > globalRespWidth && document.getElementById('panel5MultiMap') && respTrack == 0 && whatPanelUp == "panel5") {
				if(gLog==1){console.log("RespWidth Redraw P5");}
				panel5Load();
			}
			if (cPanelOp == 1 && atlantis == 0) {
				var pNum = whatPanelUp.substring(5,6);
				if (window["cpPH"+pNum] != 0 && winWidth > globalRespWidth && reDraw && itsReSized) {
					if (document.getElementById('cpDivFront').style.display == "block") {
						document.getElementById('panel1').style.display = "none";
						document.getElementById('panel2').style.display = "none";
						document.getElementById('panel3').style.display = "none";
						document.getElementById('panel4').style.display = "none";
						document.getElementById('panel5').style.display = "none";
					}
					else {
						document.getElementById(whatPanelUp).style.display = "block";
					}
				}
				if (window["cpPH"+pNum] == 0 && winWidth > globalRespWidth && reDraw && itsReSized) {
					document.getElementById(whatPanelUp).style.display = "block";
				}
				if (window["cpPH"+pNum+"m"] != 0 && winWidth <= globalRespWidth && reDraw && itsReSized) {
					if (document.getElementById('cpDivFront').style.display == "block") {
						document.getElementById('panel1').style.display = "none";
						document.getElementById('panel2').style.display = "none";
						document.getElementById('panel3').style.display = "none";
						document.getElementById('panel4').style.display = "none";
						document.getElementById('panel5').style.display = "none";
					}
					else {
						document.getElementById(whatPanelUp).style.display = "block";
					}
				}
				if (window["cpPH"+pNum+"m"] == 0 && winWidth <= globalRespWidth && reDraw && itsReSized) {
					document.getElementById(whatPanelUp).style.display = "block";
				}
			}
			if (onretOn == 2) {
				if(gLog==1){console.log("RespWidth - onretOn == 2 ",winWidth,globalRespWidth,reDraw,itsReSized);}
				if (winWidth <= globalRespWidth && reDraw && itsReSized) {
					if (ecommModalState == 1) {
						document.getElementById('panel1').style.display = "none";
						document.getElementById('panel2').style.display = "none";
						document.getElementById('panel3').style.display = "none";
						document.getElementById('panel4').style.display = "none";
						document.getElementById('panel5').style.display = "none";
					}
					else {
						document.getElementById(whatPanelUp).style.display = "block";
					}
				}
				else {
					document.getElementById(whatPanelUp).style.display = "block";
				}
			}
			if (winWidth > globalRespWidth && respTrack == 0) {
				if (panel1ChildDesktopHide == 1) {
					$(".panel_1_child_label_control_on").hide();
					$(".panel_1_child_label_control_off").show();
					$(".panel_1_child_label_content").hide();
					if (panel1ChildIDHolder != 0) {
						var tempChildID = panel1ChildIDHolder;
						panel1ChildIDHolder = 0;
						panel1ChildSelect(tempChildID);
					}
				}
				else {
					$(".panel_1_child_label_control_on").hide();
					$(".panel_1_child_label_control_off").hide();
					$(".panel_1_child_label_content").show();
				}
				if (document.getElementById('panel1RedrawLabelShell') && whatPanelUp == "panel1") {
					p1WriteRedrawLabels();
				}
				if (document.getElementById('panel1DietListShell') && whatPanelUp == "panel1") {
					p1WriteDietList();
				}
				modalClose();
			}
			if (winWidth <= globalRespWidth && respTrack == 1) {
				if (panel1ChildMobileHide == 1) {
					$(".panel_1_child_label_control_on").hide();
					$(".panel_1_child_label_control_off").show();
					$(".panel_1_child_label_content").hide();
					if (panel1ChildIDHolder != 0) {
						var tempChildID = panel1ChildIDHolder;
						panel1ChildIDHolder = 0;
						panel1ChildSelect(tempChildID);
					}
				}
				else {
					$(".panel_1_child_label_control_on").hide();
					$(".panel_1_child_label_control_off").hide();
					$(".panel_1_child_label_content").show();
				}
				if (document.getElementById('panel1RedrawLabelShell') && whatPanelUp == "panel1") {
						p1WriteRedrawLabels();
				}
				if (document.getElementById('panel1DietListShell') && whatPanelUp == "panel1") {
						p1WriteDietList();
				}
			}
			if(winWidth <= globalRespWidth) {
				respTrack = 0;
			}
			else {
				respTrack = 1;
			}
			if (enableResize == 2) {
				if (winWidth <= globalRespWidth && onRetShowState == 1 && onretOn <2) {
					document.getElementById('panel0').style.display = "none";
				}
				if (winWidth > globalRespWidth && onRetShowState == 1 && onretOn <2) {
					document.getElementById('panel0').style.display = "block";
				}
			}
		}
		if (enableResize == 2) {
			if (document.getElementById('panel0').getBoundingClientRect()) {
				var pzInfo = document.getElementById('panel0').getBoundingClientRect();
				var curr_height = parseInt(pzInfo.height);
				if(gLog==1){console.log("setSize reSizer " + curr_height);}
				parent.postMessage("RSIZ:"+curr_height,refurl);
			}
		}
		checkSetSize = 1;
	}
	else {
		if(gLog==1){console.log("setSize NOCALL");}
	}
	if (enableResize == 2 && ecommPos != 0) {
		if (document.getElementById('eCommPanel').getBoundingClientRect()) {
			var pzInfo = document.getElementById('eCommPanel').getBoundingClientRect();
			var curr_height = parseInt(pzInfo.height);
			if(gLog==1){console.log("eCommPanel reSizer " + curr_height);}
			parent.postMessage("ECHT:"+curr_height+"|"+ecommPos,refurl);
		}
	}
}
function sizeCheck() {
	if (document.getElementById('panel0').getBoundingClientRect()) {
		var pzInfo = document.getElementById('panel0').getBoundingClientRect();
		var curr_height = parseInt(pzInfo.height);
		if (curr_height != winHeight) {
			if(gLog==1){console.log("sizeCheck reSizer " + curr_height);}
			winHeight = curr_height;
			parent.postMessage("RSIZ:"+curr_height,refurl);
		}
	}
}
function loaderToggle(state) {
	if(gLog==1){console.log("loaderToggle state=",state);}
	if (state == 0) {
		document.getElementById('loaderDivFront').style.left = "0px";
		document.getElementById('loaderDivFront').style.top = "0px";
		$("#loaderDivBack").fadeOut(100);
		$("#loaderDivFront").fadeOut(100);
	}
	else {
		if (enableResize == 2 && loaderScroll == 1) {
			if(gLog==1){console.log("loaderToggle scroll");}
			parent.postMessage("SCRL:",refurl);
		}
		document.getElementById('loaderDivFront').style.left = "0px";
		document.getElementById('loaderDivFront').style.top = "0px";
		$("#loaderDivBack").fadeIn(100);
		$("#loaderDivFront").fadeIn(100);
	}
}
function prodLoaderToggle(state) {
	if (state == 0) {
		$("#prodLoaderDivBack").fadeOut(100);
		$("#prodLoaderDivFront").fadeOut(100);
	}
	else {
		$("#prodLoaderDivBack").fadeIn(100);
		$("#prodLoaderDivFront").fadeIn(100);
	}
}
function errorOut(errorPage) {
	if (enableResize == 2) {
		if(gLog==1){console.log("errorOut scroll");}
		parent.postMessage("SCRL:",refurl);
	}
	$.get("alerts/" + errorPage, function(result) {
		$('#errorDivFront').append(result);
		document.getElementById('errorDivFront').style.display = "none";
		document.getElementById('errorDivFront').style.left = "0px";
		document.getElementById('errorDivFront').style.top = "0px";
		$("#errorDivBack").fadeIn(100);
		$("#errorDivFront").fadeIn(100);
		setTimeout(function(){
			errorClose();
		},2000);
	});
}
function errorText(errorValue,errorCode) {
	document.getElementById('errorDivFront').innerHTML = "<div class='box' onclick='errorClose();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){errorClose();}' tabindex='0' title=\"Close Modal\"><div id='theErrorBoxText' class='error_text'> <\/div><div class='loader-footer'>&nbsp; <\/div><p class='text'><span class='not-bold'>Powered by<\/span> Destini Locators&trade;<\/p><\/div>";
	if (enableResize == 2) {
		if(gLog==1){console.log("errorText scroll");}
		parent.postMessage("SCRL:",refurl);
	}
	document.getElementById('theErrorBoxText').innerHTML = errorValue;
	$("#loaderDivFront").fadeOut(100);
	$("#loaderDivBack").fadeOut(100);
	document.getElementById('errorDivFront').style.display = "none";
	document.getElementById('errorDivFront').style.left = "0px";
	document.getElementById('errorDivFront').style.top = "0px";
	$("#errorDivBack").fadeIn(100);
	$("#errorDivFront").fadeIn(100);
	if (alertWait != 0) {
		var alertTime = alertWait * 1000;
		setTimeout(function(){
			errorClose();
		},alertTime);
	}
	if (errorCode) {
		if (errorCode != 0 && allOnOne == 0) {
			if (trackVal == 1) {
				$.post(controlURL + "tracktest.php", {
					CB: noCache,
					TLL: tlVal,
					A1: trackVal,
					UP1: "PANEL1",
					UC1: "HIT",
					US1: "SUCCESS",
					USRC1: version,
					CLIENT: coreClient,
					ITER: iteration,
					DEVICE: deviceType,
					REF: referer,
					SESSID: daSESSID,
					EMODAL: errorValue,
					ECODE: errorCode,
					TRACK: "21",
					DUTV: dutv
					}, function(data){
						if(gLog==1){console.log("errorText - tracktest: " , JSON.parse(data));}
					}
				);
			}
			else if (trackVal == 2) {
				var sendObj = setTrackObj();
				sendObj['TRK'] = 21;
				sendObj['EMD'] = errorValue;
				sendObj['ECD'] = errorCode;
				sendObj['RQF'] = "errorText";
				sendTrackObj(sendObj);
			}
		}
	}
}
function confirmEmail() {
}
function errorClose() {
	if (clickToOff == 1) {
		$("#loaderDivFront").fadeOut(100);
		$("#loaderDivBack").fadeOut(100);
		document.getElementById('errorDivFront').style.left = "-9000px";
		document.getElementById('errorDivFront').style.top = "-9000px";
		$("#errorDivBack").fadeOut(100);
	}
}
function panelSwitch(startPanel,endPanel,switchType,killRedraw) {
	if(gLog==1){console.log("panelSwitch - startPanel,endPanel,switchType,killRedraw",startPanel,endPanel,switchType,killRedraw);}
	whatPanelUp = endPanel;
	if (endPanel == "panel2") {
		if (p2dealDisable == 0) {
			if (dealAutoshow == 1) {
				showDeals(document.getElementById('revCodeZip').value, document.getElementById('revCodeState').value, document.getElementById('revCodeCountry').value, "fa-angle-left", "fa-angle-right", "fa-times", "");
			}
			else {
				panel2OpenDealShell();
			}
			p2dealDisable = 1;
		}
	}
	if (endPanel == "panel1" && startPanel != "") {
		if(gLog==1){console.log("panelSwitch - endPanel/startPanel");}
		prodCartArray.length = 0;
		onretClientArray.length = 0;for(za=0;za<onretClientArrayAlt.length;za++){onretClientArray[za] = onretClientArrayAlt[za];}
		onretProdArray.length = 0;for(za=0;za<onretProdArrayAlt.length;za++){onretProdArray[za] = onretProdArrayAlt[za];}
		onretZipArray.length = 0;for(za=0;za<onretZipArrayAlt.length;za++){onretZipArray[za] = onretZipArrayAlt[za];}
		/*
		$("#panel1ECommButton").hide();
		$("#panel1ECommButtonNone").hide();
		$("#panel1ECommButtonLoad").hide();
		*/
		$(".counter_badge").hide();
		$(".img_replace_active_static").addClass("img_replace_active");
		$(".img_replace_active_static").removeClass("img_replace_active_static");
		$(".panel_1_category_name_all").addClass("panel_1_category_name_all_off");
		$(".panel_1_category_name_all").removeClass("panel_1_category_name_all_on");
		$(".panel_1_category_name_all").removeClass("panel_1_category_name_on");
		$(".panel_1_category_name").removeClass("panel_1_category_name_on");
		$(".panel_1_category_name").addClass("panel_1_category_name_off");
		$(".panel_1_category_big_img_div_back").removeClass("panel_1_category_big_img_div_back_on");
		$(".panel_1_category_big_img_div_back").addClass("panel_1_category_big_img_div_back_off");
		$(".panel_1_category_sm_img_div_back").removeClass("panel_1_category_sm_img_div_back_on");
		$(".panel_1_category_sm_img_div_back").addClass("panel_1_category_sm_img_div_back_off");
		$(".panel_1_category_big_img_div_over").hide();
		$(".panel_1_category_sm_img_div_over").hide();
		$(".panel_1_product_big_img_div_back").removeClass("panel_1_product_big_img_div_back_on");
		$(".panel_1_product_big_img_div_back").addClass("panel_1_product_big_img_div_back_off");
		$(".panel_1_product_sm_img_div_back").removeClass("panel_1_product_sm_img_div_back_on");
		$(".panel_1_product_sm_img_div_back").addClass("panel_1_product_sm_img_div_back_off");
		$(".panel_1_product_big_img_div_over").hide();
		$(".panel_1_product_sm_img_div_over").hide();
		$('.panel_1_multiFilter_l3_prodname_ion').hide();
		$('.panel_1_multiFilter_l3_prodname_ioff').show();
		$('.panel_1_multiFilter_l3_prodname').removeClass('panel_1_multiFilter_l3_prodname_hover');
		$('.panel_1_multiFilter_l3_prodname').removeClass('panel_1_multiFilter_l3_prodname_on');
		$('.panel_1_multiFilter_l3_prodname').addClass('panel_1_multiFilter_l3_prodname_off');
		$(".panel_1_product_name").removeClass("panel_1_product_name_on");
		$(".panel_1_product_name").removeClass("panel_1_product_name_hover");
		$(".panel_1_product_name").addClass("panel_1_product_name_off");
		$(".panel_1_product_big_img").removeClass("panel_1_product_big_img_on");
		$(".panel_1_product_big_img").removeClass("panel_1_product_big_img_hover");
		$(".panel_1_product_big_img").addClass("panel_1_product_big_img_off");
		$(".panel_1_product_big_img_link").removeClass("panel_1_product_big_img_link_on");
		$(".panel_1_product_big_img_link").removeClass("panel_1_product_big_img_link_hover");
		$(".panel_1_product_big_img_link").addClass("panel_1_product_big_img_link_off");
		$(".panel_1_product_sm_img").removeClass("panel_1_product_sm_img_on");
		$(".panel_1_product_sm_img").removeClass("panel_1_product_sm_img_hover");
		$(".panel_1_product_sm_img").addClass("panel_1_product_sm_img_off");
		$(".panel_1_product_sm_img_link").removeClass("panel_1_product_sm_img_link_on");
		$(".panel_1_product_sm_img_link").removeClass("panel_1_product_sm_img_link_hover");
		$(".panel_1_product_sm_img_link").addClass("panel_1_product_sm_img_link_off");
		$(".panel_1_hover_count_nosel_shell_outer").hide();
		$(".panel_1_hover_count_sel_shell_outer").hide();
		$(".panel_1_group_shell").removeClass("panel_1_group_shell_on");
		$(".panel_1_group_shell").removeClass("panel_1_group_shell_hover_on");
		$(".panel_1_group_shell").addClass("panel_1_group_shell_off");
		document.getElementById('PROD').value = "";
		whatStoreUp = 0;
		panel2PinIncr = 0;
		panel2ListIncr = 0;
		for (z=0;z<famArray.length;z++) {
			famArray[z][5] = 0;
			window["panel1FamilyNameVar"+famArray[z][0]] = 0;
			if (document.getElementById("panel1FamilyName"+famArray[z][0])) {
				if ($("#panel1FamilyName"+famArray[z][0]).hasClass("panel_1_family_name_on")) {
					$("#panel1FamilyName"+famArray[z][0]).removeClass("panel_1_family_name_on");
					$("#panel1FamilyName"+famArray[z][0]).addClass("panel_1_family_name_off");
				}
			}
			if (document.getElementById("panel1FamilyBigImg"+famArray[z][0])) {
				document.getElementById("panel1FamilyBigImg"+famArray[z][0]).src = clientImgBase + famArray[z][2];
			}
			if (document.getElementById("panel1FamilySmImg"+famArray[z][0])) {
				document.getElementById("panel1FamilySmImg"+famArray[z][0]).src = clientImgBase + famArray[z][3];
			}
		}
		for (j=0;j<catArray.length;j++) {
			catArray[j][6] = 0;
			catArray[j][9] = 0;
			window["panel1CategoryNameVar"+catArray[j][0]] = 0;
			if (document.getElementById("panel1CategoryBigImg"+catArray[j][0])) {
				document.getElementById("panel1CategoryBigImg"+catArray[j][0]).src = clientImgBase + catArray[j][3];
			}
			if (document.getElementById("panel1CategorySmImg"+catArray[j][0])) {
				document.getElementById("panel1CategorySmImg"+catArray[j][0]).src = clientImgBase + catArray[j][4];
			}
		}
		for (q=0;q<prodDisplayArray.length;q++) {
			prodDisplayArray[q][9] = 0;
			prodDisplayArray[q][7] = 0;
			window["panel1ProductNameVar"+prodDisplayArray[q][0]] = 0;
			if (document.getElementById("panel1ProductName"+prodDisplayArray[q][0])) {
				if ($("#panel1ProductName"+prodDisplayArray[q][0]).hasClass("panel_1_product_name_on")) {
					$("#panel1ProductName"+prodDisplayArray[q][0]).removeClass("panel_1_product_name_on");
					$("#panel1ProductName"+prodDisplayArray[q][0]).addClass("panel_1_product_name_off");
				}
			}
			if (document.getElementById("panel1ProductBigImg"+prodDisplayArray[q][0])) {
				document.getElementById("panel1ProductBigImg"+prodDisplayArray[q][0]).src = clientImgBase + prodDisplayArray[q][4];
			}
			if (document.getElementById("panel1ProductSmImg"+prodDisplayArray[q][0])) {
				document.getElementById("panel1ProductSmImg"+prodDisplayArray[q][0]).src = clientImgBase + prodDisplayArray[q][5];
			}
		}
		for (q=0;q<prodGroupArray.length;q++) {
			prodGroupArray[q][6] = 0;
		}
		$(".panel_1_cart_button").removeClass("panel_1_cart_button_on");
		$(".panel_1_cart_button").addClass("panel_1_cart_button_off");
		if (document.getElementById("panel1ProdCartCount")) {
			document.getElementById("panel1ProdCartCount").innerHTML = "0";
		}
		if (document.getElementById("panel1ProdShopCartShell")) {
			document.getElementById("panel1ProdShopCartShell").innerHTML = "";
		}
		if (document.getElementById('panel1OnRetSelectShell')) {
			panel1WriteOnlineRetailer();
		}
		if (document.getElementById('panel1FilterField')) {
			document.getElementById("panel1FilterField").value = "";
		}
		for (m=0;m<labelArray.length;m++) {
			labelArray[m][3] = 0;
		}
		for (m=0;m<famArray.length;m++) {
			famArray[m][5] = 0;
		}
		for (m=0;m<dietArray.length;m++) {
			dietArray[m][3] = 0;
		}
		if (panel1SimpleVar == 1) {
			panel1FamLabelReset();
			panel1LabelReset();
			panel1SimpleFilter();
		}
		redrawLabelCountArr.length = 0;
		$('.product_holder_area').hide();
		$('.discontinued_holder_area').hide();
		$('.brand_holder_area').show();
		if(document.getElementById('caProdRedrawArea')) {
			document.getElementById('caProdRedrawArea').innerHTML = "";
		}
		isaFamLabelOn = 0;
		isaLabelOn = 0;
		caFilterTextArray.length = 0;
		p1RedrawDietArray.length = 0;
		$('#caPaginationArea').hide();
		$("#panel1LabelCrumbShell").hide();
		$("#panel1FilterNum").hide();
		if (document.getElementById('panel1RedrawLabelShell')) {
			p1WriteRedrawLabels();
		}
		if (document.getElementById('panel1DietListShell') && dietArray.length != 0) {
			p1WriteDietList();
		}
		if (preRedrawOn != "") {
			for (q=0; q<labelArray.length; q++) {
				if (labelArray[q][4] == preRedrawOn) {
					panel1RedrawLabelSelect(labelArray[q][0]);
					if(gLog==1){console.log("prodSwitch preRedrawOn - " + preRedrawOn);}
					break;
				}
			}
		}
		if (p1ReLoad == 1) {
			p1ReLoad = 0;
			if(gLog==1){console.log("prodSwitch p1ReLoad == 1");}
			/*
			panel1Load();
			*/
		}
	}
	if (switchType == "fade") {
		if (hidePanels == 1) {
			$('.core_panel').fadeOut(50);
			if(gLog==1){console.log("panelSwitch - core_panel Fadeout");}
			setTimeout(function(){
				if(gLog==1){console.log("panelSwitch - endPanel Fadein ", endPanel);}
				$('#'+endPanel).fadeIn(50);
			},60);
			if (endPanel == 'panel2') {
				if (killRedraw) {
					if(gLog==1){console.log("panelSwitch - killRedraw Present");}
				}
				else {
					if(gLog==1){console.log("panelSwitch - killRedraw Absent");}
					setTimeout(function() {
						if (atlantis == 1) {
							drawMap();
						}
						else {
							panel2DrawMultiMap();
						}
					},300);
				}
			}
		}
		else {
			if (startPanel != "") {
				if (directionsStep==0) {
					$('#'+startPanel).fadeOut(50);
				}
				else if (startPanel != 'panel2' || endPanel == 'panel1' || endPanel == 'panel8') {
					$('#'+startPanel).fadeOut(50);
				}
				setTimeout(function(){
					$('#'+endPanel).fadeIn(50);
					if (enableResize == 2) {
						document.getElementById(startPanel+"templates").innerHTML = "";
					}
				},60);
			}
			else {
				$('#'+endPanel).fadeIn(50);
			}
		}
		setTimeout(function(){
			scrollItUp();
		},75);
	}
	else if (switchType == "left") {
		if (startPanel != "") {
			document.getElementById(startPanel).style.left = "0px";
			document.getElementById(startPanel).style.top = "0px";
			//document.getElementById(startPanel).style.display = "block";
			document.getElementById(endPanel).style.left = winWidth + "px";
			document.getElementById(endPanel).style.top = "0px";
			document.getElementById(endPanel).style.display = "block";
			$('#'+startPanel).animate({left: "-" + winWidth + "px"}, {'duration': 900, 'easing': 'easeOutCubic'});
			$('#'+endPanel).animate({left: "0px"}, {'duration': 900, 'easing': 'easeOutCubic'});
			setTimeout(function(){
				document.getElementById(startPanel).style.display = "none";
			},950);
		}
		else {
			document.getElementById(endPanel).style.left = winWidth + "px";
			document.getElementById(endPanel).style.top = "0px";
			document.getElementById(endPanel).style.display = "block";
			$('#'+endPanel).animate({left: "0px"}, {'duration': 900, 'easing': 'easeOutCubic'});
		}
	}
	else if (switchType == "right") {
		if (startPanel != "") {
			document.getElementById(startPanel).style.left = "0px";
			document.getElementById(startPanel).style.top = "0px";
			//document.getElementById(startPanel).style.display = "block";
			document.getElementById(endPanel).style.left = "-" + winWidth + "px";
			document.getElementById(endPanel).style.top = "0px";
			document.getElementById(endPanel).style.display = "block";
			$('#'+startPanel).animate({left: winWidth + "px"}, {'duration': 900, 'easing': 'easeOutCubic'});
			$('#'+endPanel).animate({left: "0px"}, {'duration': 900, 'easing': 'easeOutCubic'});
			setTimeout(function(){
				document.getElementById(startPanel).style.display = "none";
			},950);
		}
		else {
			document.getElementById(endPanel).style.left = "-" + winWidth + "px";
			document.getElementById(endPanel).style.top = "0px";
			document.getElementById(endPanel).style.display = "block";
			$('#'+endPanel).animate({left: "0px"}, {'duration': 900, 'easing': 'easeOutCubic'});
		}
	}
	else if (switchType == "slide") {
		if (startPanel != "") {
			document.getElementById(startPanel).style.left = "0px";
			document.getElementById(startPanel).style.top = "0px";
			//document.getElementById(startPanel).style.display = "block";
			document.getElementById(endPanel).style.display = "none";
			document.getElementById(endPanel).style.left = "0px";
			document.getElementById(endPanel).style.top = "0px";
			$('#'+startPanel).slideUp(300);
			setTimeout(function(){
				$('#'+endPanel).slideDown(600);
			},300);
		}
		else {
			document.getElementById(endPanel).style.display = "none";
			document.getElementById(endPanel).style.left = "0px";
			document.getElementById(endPanel).style.top = "0px";
			$('#'+endPanel).slideDown(600);
		}
	}
	else {
		if(gLog==1){console.log("Undeclared: Switch Type");}
	}
	if(gLog==1){console.log("panelSwitch - Before the loader");}
	if (enableResize == 1) {
		var start_height = $('#'+endPanel).height();
		frameVar = document.getElementById("reSizer");
		frameVar.contentWindow.location.replace(resizeURL+'?height='+start_height);
		loaderToggle(0);
	}
	else if (enableResize == 2) {
		if (document.getElementById('panel0').getBoundingClientRect()) {
			var pzInfo = document.getElementById('panel0').getBoundingClientRect();
			var start_height = parseInt(pzInfo.height);
			if (start_height != winHeight) {
				if(gLog==1){console.log("panelSwitch reSizer " + start_height);}
				parent.postMessage("RSIZ:"+start_height,refurl);
			}
			loaderToggle(0);
		}
	}
	else {
		loaderToggle(0);
	}
	if (document.getElementById('loaderFrontText')) {
		document.getElementById('loaderFrontText').innerHTML = "Loading...";
	}
	if (endPanel == "panel1") {
		if (document.getElementById('panel2templates')) {
			document.getElementById('panel2templates').innerHTML = "";
		}
		if (document.getElementById('panel3templates')) {
			document.getElementById('panel3templates').innerHTML = "";
		}
		if (document.getElementById('panel4templates')) {
			document.getElementById('panel4templates').innerHTML = "";
		}
		if (document.getElementById('panel5templates')) {
			document.getElementById('panel5templates').innerHTML = "";
		}
		if (pmBackProd != "") {
	    	if (pmBackProd.indexOf(",") != -1) {
	    		var postProdArr = pmBackProd.split(",");
	    	}
	    	else {
	     		var postProdArr = new Array(pmBackProd);
			}
			pmBackProd = "";
			if(gLog==1){console.log("panelSwitch (PROD): postProdArr = " + postProdArr.toString(","));}
			for (b=0; b<postProdArr.length; b++) {
	    		for (g=0;g<prodDisplayArray.length;g++) {
					if (postProdArr[b] == prodDisplayArray[g][1]) {
						if (prodDisplayArray[g][9] == 0) {
							prodDisplayArray[g][9] = 1;
							window["panel1ProductNameVar" + prodDisplayArray[g][0]] = 1;
							if(gLog==1){console.log("panelSwitch (PROD): ENABLE " + prodDisplayArray[g][1]);}
						}
						else {
							prodDisplayArray[g][9] = 0;
							window["panel1ProductNameVar" + prodDisplayArray[g][0]] = 0;
							if(gLog==1){console.log("panelSwitch (PROD): DISABLE " + prodDisplayArray[g][1]);}
						}
						break;
					}
				}
			}
			prodCartArray.length = 0;
			for (d=0; d<prodDisplayArray.length; d++) {
				if (prodDisplayArray[d][9] == 1) {
					prodCartArray.push(prodDisplayArray[d][0]);
				}
			}
	    	panel1ProdCartDraw();
	    }
	}
	var pNum = endPanel.substring(5,6);
	if (atlantis == 0) {
		if (window["cpsP"+pNum] == 2 && param_CP2 == 0) {
			document.getElementById('cpsDiv').style.display = "block";
		}
		else {
			document.getElementById('cpsDiv').style.display = "none";
			param_CP2 = 0;
		}
		if (window["cpP"+pNum] == 2) {
			if(gLog==1){console.log("panelSwitch - CONTROLPANEL auto-open:" + endPanel,pNum);}
			controlPanelOpen(whatPanelUp);
		}
	}
}
function scrollItUp() {
	if(gLog==1){console.log("scrollItUp - Scroller Sequence");}
	$('html,body').scrollTop(0);
	window.scrollTo(0,0);
	document.getElementById('panel0').scrollTop = 0;
	if (document.getElementById('panel1')) {
		document.getElementById('panel1').scrollTop = 0;
	}
	if (document.getElementById('panel2')) {
		document.getElementById('panel2').scrollTop = 0;
	}
	if (document.getElementById('panel3')) {
		document.getElementById('panel3').scrollTop = 0;
	}
	if (document.getElementById('panel4')) {
		document.getElementById('panel4').scrollTop = 0;
	}
	if (document.getElementById('panel5')) {
		document.getElementById('panel5').scrollTop = 0;
	}
	if (document.getElementById('panel6')) {
		document.getElementById('panel6').scrollTop = 0;
	}
	if (document.getElementById('panel7')) {
		document.getElementById('panel7').scrollTop = 0;
	}
	if (document.getElementById('panel8')) {
		document.getElementById('panel8').scrollTop = 0;
	}
	if (document.getElementById('panel9')) {
		document.getElementById('panel9').scrollTop = 0;
	}
	if (enableResize == 2 && loaderScroll == 1) {
		if(gLog==1){console.log("loaderToggle scroll");}
		parent.postMessage("SCRL:",refurl);
	}
}
function sortCol(Arr,colNum, DESC){
	function Sort(a,b){
		if(a[col] < b[col]){if(DESC){return 1;}else{return -1;}}
		if(a[col] > b[col]){if(DESC){return -1;}else{return 1;}}
		return 0;
	}
	col=colNum;
	return Arr.sort(Sort);
}
function fieldClearVal(fieldID,testVal){
	if(document.getElementById(fieldID).value==testVal) {
		document.getElementById(fieldID).value="";
	}
}
function fieldSetVal(fieldID,testVal){
	if(document.getElementById(fieldID).value=="") {
		document.getElementById(fieldID).value=testVal;
	}
}
function checkIsEmail(fieldToCheck) {
/*
	emailTest = /^([\w]+)(\.[\w]+)*@([\w\-]+)(\.[\w]{2,7})(\.[a-z]{2})?$/;
	if(emailTest.test(document.getElementById(fieldToCheck).value)==false) {
		return false;
	}
	else {
		return true;
	} */
		return true;
}
function escCheck(evt) {
	var evt  = (evt) ? evt : ((event) ? event : null);
	var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
	if (evt.keyCode == 27 && document.getElementById('blanket').style.display == "block") {
		document.getElementById('blanket').style.display = "none";
		document.getElementById('popUpStore').style.display = "none";
	}
}
function checkURL(checkName) {
	checkName = checkName.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regexS = "[\\?&]"+checkName+"=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.href);
	if (results == null) {
		return "";
	}
	else {
		return results[1];
	}
}
function stripField(destField,sourceField) {
	var inputString = document.getElementById(sourceField).value;
	document.getElementById(destField).value = inputString;
}
function setCheckbox(toHidden,checkVal) {
	if (checkVal == true) {
		document.getElementById(toHidden).value = "1";
	}
	else if (checkVal == false) {
		document.getElementById(toHidden).value = "0";
	}
}
function setSelect(fromSelect,toHidden) {
	selIndex = document.getElementById(fromSelect).selectedIndex;
	document.getElementById(toHidden).value = document.getElementById(fromSelect).options[selIndex].value;
}
function setProductSelect(fromSelect,toHidden) {
	selIndex = document.getElementById(fromSelect).selectedIndex;
	if (document.getElementById(fromSelect).options[selIndex].value == "ALL") {
		document.getElementById('PROD').value = document.getElementById('FULLPROD').value;
	}
	else {
		document.getElementById('PROD').value = document.getElementById(fromSelect).options[selIndex].value;
		for (x=0; x<prodDisplayArray.length; x++) {
			if (prodDisplayArray[x][1] == document.getElementById(fromSelect).options[selIndex].value) {
				prodDisplayArray[x][9] = "1";
				window["panel1ProductNameVar"+prodDisplayArray[x][0]] = 1;
			}
			else {
				prodDisplayArray[x][9] = "0";
				window["panel1ProductNameVar"+prodDisplayArray[x][1]] = 1;
			}
		}
	}
}
var multiSelectArray = [];
function setMultiSelect(fromSelect,toHidden) {
	selIndex = document.getElementById(fromSelect).options.length;
	multiSelectArray.length = 0;
	for (x=0;x<selIndex;x++) {
		if (document.getElementById(fromSelect).options[x].selected) {
			multiSelectArray.push(document.getElementById(fromSelect).options[x].value);
		}
	}
	if (multiSelectArray.length) {
		var multiString = multiSelectArray.toString();
	}
	else {
		var multiString = "";
	}
	document.getElementById(toHidden).value = multiString;
}
function roundNumber(num, dec) {
	var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
	return result;
}
function fieldBlurFocus(fieldID,fieldVal,selSwitch,noClose) {
	if (!noClose) {
		genericCloseMe();
	}
	if (selSwitch == 1) {
		document.getElementById(fieldID).value = "";
	}
}
function gup(paramName){
	paramName = paramName.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regexS = "[\\?&]"+paramName+"=([^&#]*)";
	var regex = new RegExp( regexS );
	var results = regex.exec( window.location.href );
	if( results == null ) {
		return "";
	}
	else {
		return results[1];
	}
}
function showDeals(whatZip, whatState, whatCountry, prevVal, nextVal, exitIcon, exitText) {
	$('html,body').scrollTop(0);
	window.scrollTo(0,0);
	document.getElementById('panel0').scrollTop = 0;
	panel2CloseDealShell();
	panel3CloseDealShell();
	shareArr = [];
	var dealWrite = "";
	dealWrite += "<div class='deal-slideshow' data-cycle-timeout='0' data-cycle-pager='.deal-pager' data-cycle-fx='scrollHorz' data-cycle-swipe='true' data-cycle-swipe-fx='scrollHorz' data-cycle-slides='> div'>";
	var thisDealOBJ = dealOBJ;
	var trackJSON = '{"client":"' + coreClient + '", "sessionid":"'+daSESSID+'", "timestamp":"YMDHIS", "iteration":"' + iteration + '", "ip":"' + endpoint + '", "agent":"' + agent + '", "zipbase":"'+whatZip+'", "statebase": "'+whatState+'", "countrybase":"'+whatCountry+'", "track":"SHOWDEALS", "values":[';
	var newTrackJSON = "";
	var apiTrackJSON = {};
	apiTrackJSON['DLL'] = {};
	apiTrackJSON['DLC'] = 0;
	var tzi = 0;
	if (document.getElementById("revCodeCountry").value == "CA" || document.getElementById("revCodeCountry").value == "CAN") {
		var convertZip = whatZip.substring(0,3);
	}
	else {
		var convertZip = whatZip;
	}
	for (d=0; d<thisDealOBJ.dealcount; d++) {
		for (dz=0; dz<thisDealOBJ.deal[d].zipcount; dz++) {
			if (document.getElementById("revCodeCountry").value == "CA" || document.getElementById("revCodeCountry").value == "CAN") {
				var convertDynZip = thisDealOBJ.deal[d].zip[dz].code.substring(0,3);
			}
			else {
				var convertDynZip = thisDealOBJ.deal[d].zip[dz].code;
			}
			if (convertDynZip == convertZip && (document.getElementById('revCodeCountry').value == thisDealOBJ.deal[d].zip[dz].google || document.getElementById('revCodeCountry').value == thisDealOBJ.deal[d].zip[dz].esri)) {
				if (tzi != 0) {trackJSON += ",";newTrackJSON += ",";}
				trackJSON += '{"dealid":"'+thisDealOBJ.deal[d].id+'","lastmod":"'+thisDealOBJ.deal[d].lastmod+'"}';
				newTrackJSON += '{"id":"'+thisDealOBJ.deal[d].id+'","link":"'+thisDealOBJ.deal[d].link.replace('#', '|')+'","last_modified":"'+thisDealOBJ.deal[d].lastmod+'"}';
				apiTrackJSON['DLL'][tzi] = {};
				apiTrackJSON['DLL'][tzi]['ID'] = thisDealOBJ.deal[d].id;
				apiTrackJSON['DLL'][tzi]['LNK'] = thisDealOBJ.deal[d].link;
				apiTrackJSON['DLL'][tzi]['LMD'] = thisDealOBJ.deal[d].lastmod;
				tzi++;
				var dealHTML = autotextIt(p0TemplateSet.dealDiv,"deal");
				if(gLog==1){console.log("showDeals - Found Deal " + thisDealOBJ.deal[d].name);}
				var dealNameTagStart = dealHTML.indexOf("<!--DEALNAME");
				if (dealNameTagStart != -1) {
					var dealNameTagEnd = dealHTML.indexOf(">",dealNameTagStart);
					var dealNameTagStrip = dealHTML.substring(dealNameTagStart,(dealNameTagEnd+1));
					var dealNameHTMLStart = dealHTML.substr(0,dealNameTagStart);
					var dealNameHTMLEnd = dealHTML.substr((dealNameTagEnd+1));
					dealHTML = dealNameHTMLStart + "<div id='dealName" + thisDealOBJ.deal[d].id + "' class='deal_name'>" + thisDealOBJ.deal[d].name + "<\/div>" + dealNameHTMLEnd;
				}
				var dealDescTagStart = dealHTML.indexOf("<!--DEALDESC");
				if (dealDescTagStart != -1) {
					var dealDescTagEnd = dealHTML.indexOf(">",dealDescTagStart);
					var dealDescTagStrip = dealHTML.substring(dealDescTagStart,(dealDescTagEnd+1));
					var dealDescHTMLStart = dealHTML.substr(0,dealDescTagStart);
					var dealDescHTMLEnd = dealHTML.substr((dealDescTagEnd+1));
					dealHTML = dealDescHTMLStart + "<div id='dealDesc" + thisDealOBJ.deal[d].id + "' class='deal_desc'>" + thisDealOBJ.deal[d].desc + "<\/div>" + dealDescHTMLEnd;
				}
				var dealLinkTagStart = dealHTML.indexOf("<!--DEALLINK");
				if (dealLinkTagStart != -1) {
					var dealLinkTagEnd = dealHTML.indexOf(">",dealLinkTagStart);
					var dealLinkTagStrip = dealHTML.substring(dealLinkTagStart,(dealLinkTagEnd+1));
					var dealLinkHTMLStart = dealHTML.substr(0,dealLinkTagStart);
					var dealLinkHTMLEnd = dealHTML.substr((dealLinkTagEnd+1));
					var dealLinkValueStart = dealLinkTagStrip.indexOf(" VALUE=");
					var dealLinkValueVar = "Get Deal";
					if (dealLinkValueStart != -1) {
						var dealLinkValueEnd = dealLinkTagStrip.indexOf("]",dealLinkValueStart);
						var dealLinkValueTest = dealLinkTagStrip.substring((dealLinkValueStart+8),(dealLinkValueEnd));
						if (thisDealOBJ.deal[d].text != "") {
							dealLinkValueVar = thisDealOBJ.deal[d].text;
						}
						else if (dealLinkValueTest == "deal_button_link_text") {
							dealLinkValueVar = dLiteDealBannerLT;
						}
						else {
							dealLinkValueVar = dealLinkValueTest;
						}
					}
					else {
						if (thisDealOBJ.deal[d].text != "") {
							dealLinkValueVar = thisDealOBJ.deal[d].text;
						}
					}
					var dealLinkItalicStart = dealLinkTagStrip.indexOf(" FNTAW=");
					if (dealLinkItalicStart != -1) {
						var dealLinkItalicEnd = dealLinkTagStrip.indexOf("]",dealLinkItalicStart);
						dealLinkItalicVar = "<i class='fa " + dealLinkTagStrip.substring((dealLinkItalicStart+8),(dealLinkItalicEnd)) + "'><\/i>";
					}
					else {
						dealLinkItalicVar = "";
					}
					if (thisDealOBJ.deal[d].link != "") {
						dealHTML = dealLinkHTMLStart + "<div id='dealLink" + thisDealOBJ.deal[d].id + "' class='deal_link deal_link_off' onmouseover='genericButtonOver(\"dealLink" + thisDealOBJ.deal[d].id + "\",\"deal_link\");' onfocus='genericButtonOver(\"dealLink" + thisDealOBJ.deal[d].id + "\",\"deal_link\");' onmouseout='genericButtonOut(\"dealLink" + thisDealOBJ.deal[d].id + "\",\"deal_link\");' onblur='genericButtonOut(\"dealLink" + thisDealOBJ.deal[d].id + "\",\"deal_link\");' onclick='trackDealLink(\""+whatZip+ "\", \""+whatState+ "\", \""+whatCountry+ "\", \""+thisDealOBJ.deal[d].id + "\", \"" + thisDealOBJ.deal[d].lastmod + "\", \"" + thisDealOBJ.deal[d].link + "\");window.open(\"" + thisDealOBJ.deal[d].link + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){trackDealLink(\""+whatZip+ "\", \""+whatState+ "\", \""+whatCountry+ "\", \""+thisDealOBJ.deal[d].id + "\", \"" + thisDealOBJ.deal[d].lastmod + "\", \"" + thisDealOBJ.deal[d].link + "\");window.open(\"" + thisDealOBJ.deal[d].link + "\");}' tabindex='0' title=\"Redeem Deal\">" + dealLinkItalicVar + dealLinkValueVar + "<\/div>" + dealLinkHTMLEnd;
					}
					else {
						dealHTML = dealLinkHTMLStart + dealLinkHTMLEnd;
					}
				}
				var dealMobileTagStart = dealHTML.indexOf("<!--DEALMOBILE");
				if (dealMobileTagStart != -1) {
					var dealMobileTagEnd = dealHTML.indexOf(">",dealMobileTagStart);
					var dealMobileTagStrip = dealHTML.substring(dealMobileTagStart,(dealMobileTagEnd+1));
					var dealMobileHTMLStart = dealHTML.substr(0,dealMobileTagStart);
					var dealMobileHTMLEnd = dealHTML.substr((dealMobileTagEnd+1));
					var dealMobileValueStart = dealMobileTagStrip.indexOf(" VALUE=");
					var dealMobileValueVar = "Get Deal";
					if (dealMobileValueStart != -1) {
						var dealMobileValueEnd = dealMobileTagStrip.indexOf("]",dealMobileValueStart);
						var dealMobileValueTest = dealMobileTagStrip.substring((dealMobileValueStart+8),(dealMobileValueEnd));
						if (thisDealOBJ.deal[d].text != "") {
							dealMobileValueVar = thisDealOBJ.deal[d].text;
						}
						else if (dealLinkValueTest == "deal_button_link_text") {
							dealMobileValueVar = dLiteDealBannerLT;
						}
						else {
							dealMobileValueVar = dealMobileValueTest;
						}
					}
					else {
						if (thisDealOBJ.deal[d].text != "") {
							dealMobileValueVar = thisDealOBJ.deal[d].text;
						}
					}
					var dealMobileItalicStart = dealMobileTagStrip.indexOf(" FNTAW=");
					if (dealMobileItalicStart != -1) {
						var dealMobileItalicEnd = dealMobileTagStrip.indexOf("]",dealMobileItalicStart);
						dealMobileItalicVar = "<i class='fa " + dealMobileTagStrip.substring((dealMobileItalicStart+8),(dealMobileItalicEnd)) + "'><\/i>";
					}
					else {
						dealMobileItalicVar = "";
					}
					if (thisDealOBJ.deal[d].mobilelink != "") {
						dealHTML = dealMobileHTMLStart + "<div id='dealMobile" + thisDealOBJ.deal[d].id + "' class='deal_mobilelink deal_mobilelink_off' onmouseover='genericButtonOver(\"dealMobile" + thisDealOBJ.deal[d].id + "\",\"deal_mobilelink\");' onfocus='genericButtonOver(\"dealMobile" + thisDealOBJ.deal[d].id + "\",\"deal_mobilelink\");' onmouseout='genericButtonOut(\"dealMobile" + thisDealOBJ.deal[d].id + "\",\"deal_mobilelink\");' onblur='genericButtonOut(\"dealMobile" + thisDealOBJ.deal[d].id + "\",\"deal_mobilelink\");' onclick='trackDealMobile(\""+whatZip+ "\", \""+whatState+ "\", \""+whatCountry+ "\", \""+thisDealOBJ.deal[d].id + "\", \"" + thisDealOBJ.deal[d].lastmod + "\", \"" + thisDealOBJ.deal[d].mobilelink + "\");window.open(\"" + thisDealOBJ.deal[d].mobilelink + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){trackDealMobile(\""+whatZip+ "\", \""+whatState+ "\", \""+whatCountry+ "\", \""+thisDealOBJ.deal[d].id + "\", \"" + thisDealOBJ.deal[d].lastmod + "\", \"" + thisDealOBJ.deal[d].mobilelink + "\");window.open(\"" + thisDealOBJ.deal[d].mobilelink + "\");}' tabindex='0' title=\"Redeem Deal\">" + dealMobileItalicVar + dealMobileValueVar + "<\/div>" + dealMobileHTMLEnd;
					}
					else {
						dealHTML = dealMobileHTMLStart + dealMobileHTMLEnd;
					}
				}
				var dealImgTagStart = dealHTML.indexOf("<!--DEALIMG");
				if (dealImgTagStart != -1) {
					var dealImgTagEnd = dealHTML.indexOf(">",dealImgTagStart);
					var dealImgTagStrip = dealHTML.substring(dealImgTagStart,(dealImgTagEnd+1));
					var dealImgHTMLStart = dealHTML.substr(0,dealImgTagStart);
					var dealImgHTMLEnd = dealHTML.substr((dealImgTagEnd+1));
					if (thisDealOBJ.deal[d].link != "" && winWidth > globalRespWidth) {
						dealHTML = dealImgHTMLStart + "<span id='dealLinkImg" + thisDealOBJ.deal[d].id + "' onclick='trackDealLink(\""+whatZip+ "\", \""+whatState+ "\", \""+whatCountry+ "\", \""+thisDealOBJ.deal[d].id + "\", \"" + thisDealOBJ.deal[d].lastmod + "\", \"" + thisDealOBJ.deal[d].link + "\");window.open(\"" + thisDealOBJ.deal[d].link + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){trackDealLink(\""+whatZip+ "\", \""+whatState+ "\", \""+whatCountry+ "\", \""+thisDealOBJ.deal[d].id + "\", \"" + thisDealOBJ.deal[d].lastmod + "\", \"" + thisDealOBJ.deal[d].link + "\");window.open(\"" + thisDealOBJ.deal[d].link + "\");}'><img title=\"" + thisDealOBJ.deal[d].name + "\" alt=\"" + thisDealOBJ.deal[d].name + "\" id='dealImg" + thisDealOBJ.deal[d].id + "' class='deal_img' src='" + clientImgBase + thisDealOBJ.deal[d].image + "'><\/span>" + dealImgHTMLEnd;
					}
					else if (thisDealOBJ.deal[d].mobilelink != "" && winWidth <= globalRespWidth) {
						dealHTML = dealImgHTMLStart + "<span id='dealLinkImg" + thisDealOBJ.deal[d].id + "' onclick='trackDealMobile(\""+whatZip+ "\", \""+whatState+ "\", \""+whatCountry+ "\", \""+thisDealOBJ.deal[d].id + "\", \"" + thisDealOBJ.deal[d].lastmod + "\", \"" + thisDealOBJ.deal[d].mobilelink + "\");window.open(\"" + thisDealOBJ.deal[d].mobilelink + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){trackDealMobile(\""+whatZip+ "\", \""+whatState+ "\", \""+whatCountry+ "\", \""+thisDealOBJ.deal[d].id + "\", \"" + thisDealOBJ.deal[d].lastmod + "\", \"" + thisDealOBJ.deal[d].mobilelink + "\");window.open(\"" + thisDealOBJ.deal[d].mobilelink + "\");}'><img title=\"" + thisDealOBJ.deal[d].name + "\" alt=\"" + thisDealOBJ.deal[d].name + "\" id='dealImg" + thisDealOBJ.deal[d].id + "' class='deal_img' src='" + clientImgBase + thisDealOBJ.deal[d].image + "'><\/span>" + dealImgHTMLEnd;
					}
					else {
						dealHTML = dealImgHTMLStart + "<img title=\"" + thisDealOBJ.deal[d].name + "\" alt=\"" + thisDealOBJ.deal[d].name + "\" id='dealImg" + thisDealOBJ.deal[d].id + "' class='deal_img' src='" + clientImgBase + thisDealOBJ.deal[d].image + "'>" + dealImgHTMLEnd;
					}
				}
				var dealFBTagStart = dealHTML.indexOf("<!--DEALFB");
				if (dealFBTagStart != -1) {
					var dealFBTagEnd = dealHTML.indexOf(">",dealFBTagStart);
					var dealFBTagStrip = dealHTML.substring(dealFBTagStart,(dealFBTagEnd+1));
					var dealFBHTMLStart = dealHTML.substr(0,dealFBTagStart);
					var dealFBHTMLEnd = dealHTML.substr((dealFBTagEnd+1));
					var dealFBValueStart = dealFBTagStrip.indexOf(" VALUE=");
					if (dealFBValueStart != -1) {
						var dealFBValueEnd = dealFBTagStrip.indexOf("]",dealFBValueStart);
						dealFBValueVar = dealFBTagStrip.substring((dealFBValueStart+8),(dealFBValueEnd));
					}
					else {
						dealFBValueVar = " ";
					}
					var dealFBItalicStart = dealFBTagStrip.indexOf(" FNTAW=");
					if (dealFBItalicStart != -1) {
						var dealFBItalicEnd = dealFBTagStrip.indexOf("]",dealFBItalicStart);
						dealFBItalicVar = "<i class='fa " + dealFBTagStrip.substring((dealFBItalicStart+8),(dealFBItalicEnd)) + "'><\/i>";
					}
					else {
						dealFBItalicVar = "";
					}
					if (thisDealOBJ.deal[d].share == 1) {
						if (thisDealOBJ.deal[d].link != "" || thisDealOBJ.deal[d].mobilelink != "") {
							dealHTML = dealFBHTMLStart + "<div id='dealFB" + thisDealOBJ.deal[d].id + "' class='deal_fb deal_fb_off' onmouseover='genericButtonOver(\"dealFB" + thisDealOBJ.deal[d].id + "\",\"deal_fb\");' onfocus='genericButtonOver(\"dealFB" + thisDealOBJ.deal[d].id + "\",\"deal_fb\");' onmouseout='genericButtonOut(\"dealFB" + thisDealOBJ.deal[d].id + "\",\"deal_fb\");' onblur='genericButtonOut(\"dealFB" + thisDealOBJ.deal[d].id + "\",\"deal_fb\");' onclick='trackDealShare(\""+whatZip+ "\", \""+whatState+ "\", \""+whatCountry+ "\", \""+thisDealOBJ.deal[d].id + "\", \"" + thisDealOBJ.deal[d].lastmod + "\", \"" + thisDealOBJ.deal[d].link + "\","+d+");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){trackDealShare(\""+whatZip+ "\", \""+whatState+ "\", \""+whatCountry+ "\", \""+thisDealOBJ.deal[d].id + "\", \"" + thisDealOBJ.deal[d].lastmod + "\", \"" + thisDealOBJ.deal[d].link + "\","+d+");}'>" + dealFBItalicVar + dealFBValueVar + "<\/div>" + dealFBHTMLEnd;
							shareArr[d] = [thisDealOBJ.deal[d].link, thisDealOBJ.deal[d].image, thisDealOBJ.deal[d].name, thisDealOBJ.deal[d].desc];
						}
						else {
							dealHTML = dealFBHTMLStart + dealFBHTMLEnd;
						}
					}
					else {
						dealHTML = dealFBHTMLStart + dealFBHTMLEnd;
					}
				}
				dealWrite += "<div><div id='dealItemShell" + d + "' class='deal_item_shell'>" + dealHTML + "<\/div><\/div>";
				if(gLog==1){console.log("showDeals - dealHTML ", dealHTML);}
				break;
			}
		}
	}
	apiTrackJSON['DLC'] = tzi;
	dealWrite += "<\/div>";
	var startHTML = autotextIt(p0TemplateSet.dealStartDiv,"dealStart");
	var exitTextTagStart = startHTML.indexOf("<!--EXITTEXT");
	if (exitTextTagStart != -1) {
		var exitTextTagEnd = startHTML.indexOf(">",exitTextTagStart);
		var exitTextTagStrip = startHTML.substring(exitTextTagStart,(exitTextTagEnd+1));
		var exitTextHTMLStart = startHTML.substr(0,exitTextTagStart);
		var exitTextHTMLEnd = startHTML.substr((exitTextTagEnd+1));
		startHTML = exitTextHTMLStart + exitText + exitTextHTMLEnd;
	}
	var exitIconTagStart = startHTML.indexOf("<!--EXITICON");
	if (exitIconTagStart != -1) {
		var exitIconTagEnd = startHTML.indexOf(">",exitIconTagStart);
		var exitIconTagStrip = startHTML.substring(exitIconTagStart,(exitIconTagEnd+1));
		var exitIconHTMLStart = startHTML.substr(0,exitIconTagStart);
		var exitIconHTMLEnd = startHTML.substr((exitIconTagEnd+1));
		startHTML = exitIconHTMLStart + "<i class='fa " + exitIcon + "'><\/i>" + exitIconHTMLEnd;
	}
	var clientImgTagStart = startHTML.indexOf("<!--CLIENTIMG");
	if (clientImgTagStart != -1) {
		var clientImgTagEnd = startHTML.indexOf(">",clientImgTagStart);
		var clientImgTagStrip = startHTML.substring(clientImgTagStart,(clientImgTagEnd+1));
		var clientImgHTMLStart = startHTML.substr(0,clientImgTagStart);
		var clientImgHTMLEnd = startHTML.substr((clientImgTagEnd+1));
		startHTML = clientImgHTMLStart + "<img title=\"" + mainClientName + "\" alt=\"" + mainClientName + "\" class='panel_2_deal_shell_banner' src='" + clientImgBase + dLiteDealBanner + "'>" + clientImgHTMLEnd;
	}
	var browseDealTagStart = startHTML.indexOf("<!--BROWSEDEAL");
	if (browseDealTagStart != -1) {
		var browseDealTagEnd = startHTML.indexOf(">",browseDealTagStart);
		var browseDealTagStrip = startHTML.substring(browseDealTagStart,(browseDealTagEnd+1));
		var browseDealHTMLStart = startHTML.substr(0,browseDealTagStart);
		var browseDealHTMLEnd = startHTML.substr((browseDealTagEnd+1));
		var browseDealValueStart = browseDealTagStrip.indexOf(" VALUE=");
		var browseDealValueVar = "Browse Deals";
		if (browseDealValueStart != -1) {
			var browseDealValueEnd = browseDealTagStrip.indexOf("]",browseDealValueStart);
			browseDealValueVar = browseDealTagStrip.substring((browseDealValueStart+8),(browseDealValueEnd));
		}
		if (tzi > 1) {
			startHTML = browseDealHTMLStart + "<div class='deals_shell_browse'>" + browseDealValueVar + "<\/div>" + browseDealHTMLEnd;
		}
		else{
			startHTML = browseDealHTMLStart + browseDealHTMLEnd;
		}
	}
	var prevDealTagStart = startHTML.indexOf("<!--PREVDEAL");
	if (prevDealTagStart != -1) {
		var prevDealTagEnd = startHTML.indexOf(">",prevDealTagStart);
		var prevDealTagStrip = startHTML.substring(prevDealTagStart,(prevDealTagEnd+1));
		var prevDealHTMLStart = startHTML.substr(0,prevDealTagStart);
		var prevDealHTMLEnd = startHTML.substr((prevDealTagEnd+1));
		if (prevVal != "" && nextVal && tzi > 1) {
			startHTML = prevDealHTMLStart + "<span class='deals_shell_page_span_prev'><i class='fa " + prevVal + " deal_shell_prev' onclick='$(\".deal-slideshow\").cycle(\"prev\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){$(\".deal-slideshow\").cycle(\"prev\");}' tabindex='0' title=\"Previous Deal\"><\/i><\/span>" + prevDealHTMLEnd;
		}
		else{
			startHTML = prevDealHTMLStart + prevDealHTMLEnd;
		}
	}
	var nextDealTagStart = startHTML.indexOf("<!--NEXTDEAL");
	if (nextDealTagStart != -1) {
		var nextDealTagEnd = startHTML.indexOf(">",nextDealTagStart);
		var nextDealTagStrip = startHTML.substring(nextDealTagStart,(nextDealTagEnd+1));
		var nextDealHTMLStart = startHTML.substr(0,nextDealTagStart);
		var nextDealHTMLEnd = startHTML.substr((nextDealTagEnd+1));
		if (prevVal != "" && nextVal && tzi > 1) {
			startHTML = nextDealHTMLStart + "<span class='deals_shell_page_span_next'><i class='fa " + nextVal + " deal_shell_next' onclick='$(\".deal-slideshow\").cycle(\"next\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){$(\".deal-slideshow\").cycle(\"next\");}' tabindex='0' title=\"Next Deal\"><\/i><\/span>" + nextDealHTMLEnd;
		}
		else{
			startHTML = nextDealHTMLStart + nextDealHTMLEnd;
		}
	}
	var dealPagerTagStart = startHTML.indexOf("<!--DEALPAGER");
	if (dealPagerTagStart != -1) {
		var dealPagerTagEnd = startHTML.indexOf(">",dealPagerTagStart);
		var dealPagerTagStrip = startHTML.substring(dealPagerTagStart,(dealPagerTagEnd+1));
		var dealPagerHTMLStart = startHTML.substr(0,dealPagerTagStart);
		var dealPagerHTMLEnd = startHTML.substr((dealPagerTagEnd+1));
		if (tzi > 1) {
			startHTML = dealPagerHTMLStart + "<div class='deal-pager'></div>" + dealPagerHTMLEnd;
		}
		else{
			startHTML = dealPagerHTMLStart + dealPagerHTMLEnd;
		}
	}
	dealWrite = startHTML + dealWrite;
	var endHTML = autotextIt(p0TemplateSet.dealEndDiv,"dealEnd");
	var browseDealTagStart = endHTML.indexOf("<!--BROWSEDEAL");
	if (browseDealTagStart != -1) {
		var browseDealTagEnd = endHTML.indexOf(">",browseDealTagStart);
		var browseDealTagStrip = endHTML.substring(browseDealTagStart,(browseDealTagEnd+1));
		var browseDealHTMLStart = endHTML.substr(0,browseDealTagStart);
		var browseDealHTMLEnd = endHTML.substr((browseDealTagEnd+1));
		var browseDealValueStart = browseDealTagStrip.indexOf(" VALUE=");
		var browseDealValueVar = "Browse Deals";
		if (browseDealValueStart != -1) {
			var browseDealValueEnd = browseDealTagStrip.indexOf("]",browseDealValueStart);
			browseDealValueVar = browseDealTagStrip.substring((browseDealValueStart+8),(browseDealValueEnd));
		}
		if (tzi > 1) {
			endHTML = browseDealHTMLStart + "<div class='deals_shell_browse'>" + browseDealValueVar + "<\/div>" + browseDealHTMLEnd;
		}
		else{
			endHTML = browseDealHTMLStart + browseDealHTMLEnd;
		}
	}
	var prevDealTagStart = endHTML.indexOf("<!--PREVDEAL");
	if (prevDealTagStart != -1) {
		var prevDealTagEnd = endHTML.indexOf(">",prevDealTagStart);
		var prevDealTagStrip = endHTML.substring(prevDealTagStart,(prevDealTagEnd+1));
		var prevDealHTMLStart = endHTML.substr(0,prevDealTagStart);
		var prevDealHTMLEnd = endHTML.substr((prevDealTagEnd+1));
		if (prevVal != "" && nextVal && tzi > 1) {
			endHTML = prevDealHTMLStart + "<span class='deals_shell_page_span_prev'><i class='fa " + prevVal + " deal_shell_prev' onclick='$(\".deal-slideshow\").cycle(\"prev\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){$(\".deal-slideshow\").cycle(\"prev\");}' tabindex='0' title=\"Previous Deal\"><\/i><\/span>" + prevDealHTMLEnd;
		}
		else{
			endHTML = prevDealHTMLStart + prevDealHTMLEnd;
		}
	}
	var nextDealTagStart = endHTML.indexOf("<!--NEXTDEAL");
	if (nextDealTagStart != -1) {
		var nextDealTagEnd = endHTML.indexOf(">",nextDealTagStart);
		var nextDealTagStrip = endHTML.substring(nextDealTagStart,(nextDealTagEnd+1));
		var nextDealHTMLStart = endHTML.substr(0,nextDealTagStart);
		var nextDealHTMLEnd = endHTML.substr((nextDealTagEnd+1));
		if (prevVal != "" && nextVal && tzi > 1) {
			endHTML = nextDealHTMLStart + "<span class='deals_shell_page_span_next'><i class='fa " + nextVal + " deal_shell_next' onclick='$(\".deal-slideshow\").cycle(\"next\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){$(\".deal-slideshow\").cycle(\"next\");}' tabindex='0' title=\"Next Deal\"><\/i><\/span>" + nextDealHTMLEnd;
		}
		else{
			endHTML = nextDealHTMLStart + nextDealHTMLEnd;
		}
	}
	var dealPagerTagStart = endHTML.indexOf("<!--DEALPAGER");
	if (dealPagerTagStart != -1) {
		var dealPagerTagEnd = endHTML.indexOf(">",dealPagerTagStart);
		var dealPagerTagStrip = endHTML.substring(dealPagerTagStart,(dealPagerTagEnd+1));
		var dealPagerHTMLStart = endHTML.substr(0,dealPagerTagStart);
		var dealPagerHTMLEnd = endHTML.substr((dealPagerTagEnd+1));
		if (tzi > 1) {
			endHTML = dealPagerHTMLStart + "<div class='deal-pager'></div>" + dealPagerHTMLEnd;
		}
		else{
			endHTML = dealPagerHTMLStart + dealPagerHTMLEnd;
		}
	}
	dealWrite += endHTML;
	trackJSON += ']}';
	if (trackVal == 1 && allOnOne == 0) {
		setTimeout(function(){
			var thisTrackJson = '{"deals":[' + newTrackJSON + ']}';
			var compLoc = '{"compiled_location":"' + document.getElementById('addressCompile').value.replace(/"/g, '') + '","latitude":"' + parseFloat(document.getElementById('LA').value).toFixed(5) + '","longitude":"' + parseFloat(document.getElementById('LO').value).toFixed(5) + '","city":"' + document.getElementById('revCodeCity').value.replace(/"/g, '') + '","state":"' + document.getElementById('revCodeState').value + '","zip":"' + document.getElementById('revCodeZip').value + '","country":"' + document.getElementById('revCodeCountry').value + '","us_code":"' + document.getElementById('revCodeUS').value + '"}';
			$.post(controlURL+"tracktest.php", {
				CB: noCache,
				TLL: tlVal,
				A1: trackVal,
				UP1: "PANEL2",
				UC1: "DEAL",
				US1: "SUCCESS",
				USRC1: version,
				CLIENT: coreClient,
				ITER: iteration,
				DEVICE: deviceType,
				REF: referer,
				SESSID: daSESSID,
				LOCATION: compLoc,
				DEALLIST: thisTrackJson,
				TRACK: "15",
				DUTV: dutv
				}, function(data){
					if(gLog==1){console.log("showDeals - tracktest: " , JSON.parse(data));}
				}
			);
		},1000);
	}
	else if (trackVal == 2 && allOnOne == 0) {
		setTimeout(function(){
			var sendObj = setTrackObj();
			sendObj['TRK'] = 15;
			sendObj['RQF'] = "showDeals";
			sendObj['LOC'] = {};
			sendObj['LOC']['CMP'] = document.getElementById('addressCompile').value.replace(/"/g, '');
			sendObj['LOC']['LAT'] = parseFloat(document.getElementById('LA').value).toFixed(5);
			sendObj['LOC']['LNG'] = parseFloat(document.getElementById('LO').value).toFixed(5);
			sendObj['LOC']['CTY'] = document.getElementById('revCodeCity').value.replace(/"/g, '');
			sendObj['LOC']['STA'] = document.getElementById('revCodeState').value;
			sendObj['LOC']['ZIP'] = document.getElementById('revCodeZip').value;
			sendObj['LOC']['CNT'] = document.getElementById('revCodeCountry').value;
			sendObj['LOC']['USC'] = document.getElementById('revCodeUS').value;
			sendObj['DLL'] = {};
			sendObj['DLC'] = apiTrackJSON.DLC;
			for (dlcT=0; dlcT<apiTrackJSON.DLC; dlcT++) {
				sendObj['DLL'][dlcT] = {};
				sendObj['DLL'][dlcT]['ID'] = apiTrackJSON.DLL[dlcT].ID;
				sendObj['DLL'][dlcT]['LNK'] = apiTrackJSON.DLL[dlcT].LNK;
				sendObj['DLL'][dlcT]['LMD'] = apiTrackJSON.DLL[dlcT].LMD;
			}
			sendTrackObj(sendObj);
		},300);
	}
	document.getElementById('errorDivFront').innerHTML = dealWrite;
	document.getElementById('errorDivFront').style.display = "none";
	document.getElementById('errorDivFront').style.left = "0px";
	document.getElementById('errorDivFront').style.top = "0px";
	$('.deal-slideshow').cycle();
	$("#errorDivBack").fadeIn(100);
	$("#errorDivFront").fadeIn(100);
	if(gLog==1){console.log("showDeals() newTrackJSON " + newTrackJSON);}
}
function trackDealLink(whatZip, whatState, whatCountry, whatId, whatMod, whatLink) {
	var trackJSON = '{"client":"' + coreClient + '", "sessionid":"'+daSESSID+'", "timestamp":"YMDHIS", "iteration":"' + iteration + '", "ip":"' + endpoint + '", "agent":"' + agent + '", "zipbase":"'+whatZip+'", "statebase": "'+whatState+'", "countrybase":"'+whatCountry+'", "track":"VIEWDEAL", "values":[{"dealid":"'+whatId+'","lastmod":"'+whatMod+'","link":"'+whatLink+'"}]}';
	if (trackVal == 1 && allOnOne == 0) {
		setTimeout(function(){
			var compLoc = '{"compiled_location":"' + document.getElementById('addressCompile').value.replace(/"/g, '') + '","latitude":"' + parseFloat(document.getElementById('LA').value).toFixed(5) + '","longitude":"' + parseFloat(document.getElementById('LO').value).toFixed(5) + '","city":"' + document.getElementById('revCodeCity').value.replace(/"/g, '') + '","state":"' + document.getElementById('revCodeState').value + '","zip":"' + document.getElementById('revCodeZip').value + '","country":"' + document.getElementById('revCodeCountry').value + '","us_code":"' + document.getElementById('revCodeUS').value + '"}';
			var newTrackJSON = '{"id":"'+whatId+'","link":"'+whatLink.replace('#', '|')+'","last_modified":"'+whatMod+'"}';
			var thisTrackJson = '{"deals":[' + newTrackJSON + ']}';
			$.post(controlURL+"tracktest.php", {
				CB: noCache,
				TLL: tlVal,
				A1: trackVal,
				UP1: "PANEL2",
				UC1: "DEAL",
				US1: "SUCCESS",
				USRC1: version,
				CLIENT: coreClient,
				ITER: iteration,
				DEVICE: deviceType,
				REF: referer,
				SESSID: daSESSID,
				LOCATION: compLoc,
				DEALLIST: thisTrackJson,
				TRACK: "16",
				DUTV: dutv
				}, function(data){
					if(gLog==1){console.log("trackDealLink - tracktest: " , JSON.parse(data));}
				}
			);
		},1000);
	}
	else if (trackVal == 2 && allOnOne == 0) {
		setTimeout(function(){
			var sendObj = setTrackObj();
			sendObj['TRK'] = 16;
			sendObj['RQF'] = "trackDealLink";
			sendObj['LOC'] = {};
			sendObj['LOC']['CMP'] = document.getElementById('addressCompile').value.replace(/"/g, '');
			sendObj['LOC']['LAT'] = parseFloat(document.getElementById('LA').value).toFixed(5);
			sendObj['LOC']['LNG'] = parseFloat(document.getElementById('LO').value).toFixed(5);
			sendObj['LOC']['CTY'] = document.getElementById('revCodeCity').value.replace(/"/g, '');
			sendObj['LOC']['STA'] = document.getElementById('revCodeState').value;
			sendObj['LOC']['ZIP'] = document.getElementById('revCodeZip').value;
			sendObj['LOC']['CNT'] = document.getElementById('revCodeCountry').value;
			sendObj['LOC']['USC'] = document.getElementById('revCodeUS').value;
			sendObj['DLL'] = {};
			sendObj['DLC'] = 1;
			sendObj['DLL'][0] = {};
			sendObj['DLL'][0]['ID'] = whatId;
			sendObj['DLL'][0]['LNK'] = whatLink;
			sendObj['DLL'][0]['LMD'] = whatMod;
			sendTrackObj(sendObj);
		},300);
	}
}
var thisDealInd = 0;
function trackDealShare(whatZip, whatState, whatCountry, whatId, whatMod, whatLink, dInd) {
	thisDealInd = dInd;
	var trackJSON = '{"client":"' + coreClient + '", "sessionid":"'+daSESSID+'", "timestamp":"YMDHIS", "iteration":"' + iteration + '", "ip":"' + endpoint + '", "agent":"' + agent + '", "zipbase":"'+whatZip+'", "statebase": "'+whatState+'", "countrybase":"'+whatCountry+'", "track":"SHAREDEAL", "values":[{"dealid":"'+whatId+'","lastmod":"'+whatMod+'"}]}';
	if (trackVal == 1 && allOnOne == 0) {
		setTimeout(function(){
			var compLoc = '{"compiled_location":"' + document.getElementById('addressCompile').value.replace(/"/g, '') + '","latitude":"' + parseFloat(document.getElementById('LA').value).toFixed(5) + '","longitude":"' + parseFloat(document.getElementById('LO').value).toFixed(5) + '","city":"' + document.getElementById('revCodeCity').value.replace(/"/g, '') + '","state":"' + document.getElementById('revCodeState').value + '","zip":"' + document.getElementById('revCodeZip').value + '","country":"' + document.getElementById('revCodeCountry').value + '","us_code":"' + document.getElementById('revCodeUS').value + '"}';
			var newTrackJSON = '{"id":"'+whatId+'","link":"'+whatLink.replace('#', '|')+'","last_modified":"'+whatMod+'"}';
			var thisTrackJson = '{"deals":[' + newTrackJSON + ']}';
			$.post(controlURL+"tracktest.php", {
				CB: noCache,
				TLL: tlVal,
				A1: trackVal,
				UP1: "PANEL2",
				UC1: "DEAL",
				US1: "SUCCESS",
				USRC1: version,
				CLIENT: coreClient,
				ITER: iteration,
				DEVICE: deviceType,
				REF: referer,
				SESSID: daSESSID,
				LOCATION: compLoc,
				DEALLIST: thisTrackJson,
				TRACK: "17",
				DUTV: dutv
				}, function(data){
					if(gLog==1){console.log("trackDealShare - tracktest: " , JSON.parse(data));}
				}
			);
		},1000);
	}
	else if (trackVal == 2 && allOnOne == 0) {
		setTimeout(function(){
			var sendObj = setTrackObj();
			sendObj['TRK'] = 17;
			sendObj['RQF'] = "trackDealShare";
			sendObj['LOC'] = {};
			sendObj['LOC']['CMP'] = document.getElementById('addressCompile').value.replace(/"/g, '');
			sendObj['LOC']['LAT'] = parseFloat(document.getElementById('LA').value).toFixed(5);
			sendObj['LOC']['LNG'] = parseFloat(document.getElementById('LO').value).toFixed(5);
			sendObj['LOC']['CTY'] = document.getElementById('revCodeCity').value.replace(/"/g, '');
			sendObj['LOC']['STA'] = document.getElementById('revCodeState').value;
			sendObj['LOC']['ZIP'] = document.getElementById('revCodeZip').value;
			sendObj['LOC']['CNT'] = document.getElementById('revCodeCountry').value;
			sendObj['LOC']['USC'] = document.getElementById('revCodeUS').value;
			sendObj['DLL'] = {};
			sendObj['DLC'] = 1;
			sendObj['DLL'][0] = {};
			sendObj['DLL'][0]['ID'] = whatId;
			sendObj['DLL'][0]['LNK'] = whatLink;
			sendObj['DLL'][0]['LMD'] = whatMod;
			sendTrackObj(sendObj);
		},300);
	}
	fbSharer(shareArr[thisDealInd]);
}
function fbSharer(arrIn){
	var image = "http://destinilocators.com/" + coreClient + "/images/"+arrIn[1].toString();
	var outLink = 'http://www.facebook.com/dialog/feed?'
	outLink+='app_id='+fbAppID+'&';
	outLink+='link='+arrIn[0].toString()+'&';
	outLink+='picture='+image+'&';
	outLink+='name='+encodeURIComponent(arrIn[2].toString())+'&';
	outLink+='caption='+encodeURIComponent(arrIn[2].toString())+'&';
	outLink+='description='+encodeURIComponent(arrIn[3].toString())+'&';
	outLink+='redirect_uri=http://www.facebook.com';
	window.open(outLink,"_blank");
}
function checkFormVal() {
	if (formArrayLoaded == 0) {
		for (x=0;x<formArray.length;x++) {
			formArray[x][1] = document.getElementById(formArray[x][0]).value;
		}
		document.getElementById('holderForm').submit();
		formArrayLoaded = 1;
	}
	else {
		var sendItYo = 0;
		for (x=0;x<formArray.length;x++) {
			if (document.getElementById(formArray[x][0]).value != formArray[x][1]) {
				sendItYo = 1;
				break;
			}
		}
		if (sendItYo == 1) {
			for (y=0;y<formArray.length;y++) {
				formArray[y][1] = document.getElementById(formArray[y][0]).value;
			}
			document.getElementById('holderForm').submit();
		}
	}
}
function genericButtonOver(buttonName,coreClass) {
	if ($('.'+buttonName).hasClass(coreClass+'_on')) {
	}
	else {
		$('.'+buttonName).removeClass(coreClass+'_off');
		$('.'+buttonName).addClass(coreClass+'_hover');
	}
}
function genericButtonOut(buttonName,coreClass) {
	if ($('.'+buttonName).hasClass(coreClass+'_on')) {
	}
	else {
		$('.'+buttonName).removeClass(coreClass+'_hover');
		$('.'+buttonName).addClass(coreClass+'_off');
	}
}
function genericButtonClick(buttonName,coreClass) {
	if ($('.'+buttonName).hasClass(coreClass+'_on')) {
		$('.'+buttonName).removeClass(coreClass+'_on');
		$('.'+buttonName).addClass(coreClass+'_off');
	}
	else {
		$('.'+buttonName).removeClass(coreClass+'_hover');
		$('.'+buttonName).removeClass(coreClass+'_off');
		$('.'+buttonName).addClass(coreClass+'_on');
	}
}
function genericCloseMe() {
	$('.panel_close_me').hide();
	trackActiveCatNum = -1;
	panel2DetailLocCount = -1;
}
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
function setAuthCookie(cName, cValue, expMin) {
	var daDate = new Date();
	daDate.setTime(daDate.getTime() + (expMin*60*1000));
	var expires = "expires="+daDate.toUTCString();
	var multiCookie = cName.indexOf(",");
	if (multiCookie != -1) {
		var nameArr = cName.split(",");
		var valueArr = cValue.split(",");
		for (x=0; x<nameArr.length; x++) {
			document.cookie = nameArr[x] + "=" + valueArr[x] + "; " + expires;
		}
	}
	else {
		document.cookie = cName + "=" + cValue + "; " + expires;
	}
	frameVar = document.getElementById("cookieFrame");
	frameVar.contentWindow.location.reload();
}
function authCheckEmail(fieldToCheck) {
	emailTest = /^([\w]+)(\.[\w]+)*@([\w\-]+)(\.[\w]{2,7})(\.[a-z]{2})?$/;
	if (emailTest.test(document.getElementById(fieldToCheck).value) == false) {
		return false;
	}
	else {
		return true;
	}
}
function authEmptyField(fieldToEmpty) {
	var checkMulti = fieldToEmpty.indexOf(",");
	if (checkMulti != -1) {
		var multiField = fieldToEmpty.split(",");
		for (x=0; x<multiField.length; x++) {
			if (document.getElementById(multiField[x])) {
				document.getElementById(multiField[x]).value = "";
			}
		}
	}
	else {
		if (document.getElementById(fieldToEmpty)) {
			document.getElementById(fieldToEmpty).value = "";
		}
	}
}
function authLogOut(responseDiv) {
	var daDate = new Date();
	daDate.setTime(daDate.getTime() - (30*60*1000));
	var expires = "expires="+daDate.toUTCString();
	document.cookie = "Private=0; " + expires;
	document.cookie = "UID=0; " + expires;
	document.cookie = "UFNAME=0; " + expires;
	document.cookie = "ULNAME=0; " + expires;
	document.cookie = "UEMAIL=0; " + expires;
	frameVar = document.getElementById("cookieFrame");
	frameVar.contentWindow.location.reload();
	$.post(authEndPoint, { CALL: "LOGOUT", CERT: certifierID, DIV: responseDiv, SESS: daSESSID }, function(data){
		var baseResponse = data;
		document.getElementById(responseDiv).innerHTML = baseResponse;
	});
}
function authFBLogin(responseDiv) {
	fbResponseLoc = responseDiv;
	FB.login(function(response) {}, {scope: 'email'});
}
function authFBResponse() {
	$.post(authEndPoint, { CALL: "FBLOGIN", CERT: certifierID, RLBLFN: LBLFN, RLBLLN: LBLLN, RLBLEM: LBLEM, SESS: daSESSID }, function(data){
		var baseResponse = data;
		var baseJSONStart = baseResponse.indexOf("<!--JSON");
		if (baseJSONStart != -1) {
			var baseJSONEnd = baseResponse.indexOf(">",baseJSONStart);
			var baseJSONStrip = baseResponse.substring(baseJSONStart+9,(baseJSONEnd-2));
			var baseJSONHTMLStart = baseResponse.substr(0,baseJSONStart);
			var baseJSONHTMLEnd = baseResponse.substr((baseJSONEnd+1));
			if(gLog==1){console.log("controlscripts.php - FB Login JSON Response " + baseJSONStrip);}
			if (baseJSONStrip != "ERROR") {
				var baseJSON = JSON.parse(baseJSONStrip);
				var disNameArr = [];
				var disValArr = [];
				disNameArr.push("UID", "UFNAME", "ULNAME", "UEMAIL");
				disValArr.push(baseJSON.credentials[0].UID, baseJSON.credentials[0].FNAME, baseJSON.credentials[0].LNAME, baseJSON.credentials[0].EMAIL);
				fbUID = baseJSON.credentials[0].UID;
				fbUserName = baseJSON.credentials[0].FNAME + " " + baseJSON.credentials[0].LNAME;
				fbEmail = baseJSON.credentials[0].EMAIL;
				var disNameStr = disNameArr.toString();
				var disValStr = disValArr.toString();
				setAuthCookie(disNameStr, disValStr, authCookieExp);
				favoriteArray.length = 0;
				for (fv=0; fv<baseJSON.favorites.length; fv++) {
					favoriteArray[fv] = baseJSON.favorites[fv].id;
				}
			}
			baseResponse = baseJSONHTMLStart + baseJSONHTMLEnd;
			if (whatLoginShell == "DCERT") {
				panel9Load();
			}
		}
	});
}
function llnewuserFormStart(responseDiv, formType) {
	$.post(authEndPoint, { CALL: "GETLLFORM", CERT: certifierID, TYPE: formType, DIV: responseDiv, RLBLFN: LBLFN, RLBLLN: LBLLN, RLBLEM: LBLEM, RLBLZP: LBLZP, RLBLPW: LBLPW, SESS: daSESSID }, function(data){
		var baseResponse = data;
		var baseResponseStart = baseResponse.indexOf("<!--PKEY");
		if (baseResponseStart != -1) {
			var baseResponseEnd = baseResponse.indexOf(">",baseResponseStart);
			var baseResponseStrip = baseResponse.substring(baseResponseStart,(baseResponseEnd+1));
			var baseResponseHTMLStart = baseResponse.substr(0,baseResponseStart);
			var baseResponseHTMLEnd = baseResponse.substr((baseResponseEnd+1));
			var baseResponseValueStart = baseResponseStrip.indexOf(" VALUE=");
			var baseResponseValueEnd = baseResponseStrip.indexOf("]",baseResponseValueStart);
			var baseResponseValueVar = baseResponseStrip.substring((baseResponseValueStart+8),(baseResponseValueEnd));
			setAuthCookie("Private", baseResponseValueVar, authCookieExp);
			baseResponse = baseResponseHTMLStart + baseResponseHTMLEnd;
		}
		document.getElementById(responseDiv).innerHTML = baseResponse;
	});
}
function lluserLogin(responseDiv, formType) {
	$.post(authEndPoint, { CALL: "LLOGINFORM", CERT: certifierID, TYPE: formType, DIV: responseDiv, SESS: daSESSID }, function(data){
		var baseResponse = data;
		var baseResponseStart = baseResponse.indexOf("<!--PKEY");
		if (baseResponseStart != -1) {
			var baseResponseEnd = baseResponse.indexOf(">",baseResponseStart);
			var baseResponseStrip = baseResponse.substring(baseResponseStart,(baseResponseEnd+1));
			var baseResponseHTMLStart = baseResponse.substr(0,baseResponseStart);
			var baseResponseHTMLEnd = baseResponse.substr((baseResponseEnd+1));
			var baseResponseValueStart = baseResponseStrip.indexOf(" VALUE=");
			var baseResponseValueEnd = baseResponseStrip.indexOf("]",baseResponseValueStart);
			var baseResponseValueVar = baseResponseStrip.substring((baseResponseValueStart+8),(baseResponseValueEnd));
			setAuthCookie("Private", baseResponseValueVar, authCookieExp);
			baseResponse = baseResponseHTMLStart + baseResponseHTMLEnd;
		}
		document.getElementById(responseDiv).innerHTML = baseResponse;
	});
}
function llnewuserFormSubmit(responseDiv, formType) {
	var canSubmit = 1;
	if (document.getElementById("llnewuserFirstName")) {
		if (document.getElementById("llnewuserFirstName").value == "") {
			canSubmit = 0;
			LBLFN = "";
			if (document.getElementById("llnewuserFirstNameError")) {
				$("#llnewuserFirstNameError").slideDown(200);
			}
		}
		else {
			LBLFN = document.getElementById("llnewuserFirstName").value;
			if (document.getElementById("llnewuserFirstNameError")) {
				document.getElementById("llnewuserFirstNameError").style.display = "none";
			}
		}
	}
	if (document.getElementById("llnewuserLastName")) {
		if (document.getElementById("llnewuserLastName").value == "") {
			canSubmit = 0;
			LBLLN = "";
			if (document.getElementById("llnewuserLastNameError")) {
				$("#llnewuserLastNameError").slideDown(200);
			}
		}
		else {
			LBLLN = document.getElementById("llnewuserLastName").value;
			if (document.getElementById("llnewuserLastNameError")) {
				document.getElementById("llnewuserLastNameError").style.display = "none";
			}
		}
	}
	if (document.getElementById("llnewuserEmail")) {
		var emailResult = authCheckEmail('llnewuserEmail');
		if (emailResult == false) {
			canSubmit = 0;
			LBLEM = "";
			if (document.getElementById("llnewuserEmailError")) {
				$("#llnewuserEmailError").slideDown(200);
			}
		}
		else if (document.getElementById("llnewuserEmail").value == "") {
			canSubmit = 0;
			LBLEM = "";
			if (document.getElementById("llnewuserEmailError")) {
				$("#llnewuserEmailError").slideDown(200);
			}
		}
		else {
			LBLEM = document.getElementById("llnewuserEmail").value;
			if (document.getElementById("llnewuserEmailError")) {
				document.getElementById("llnewuserEmailError").style.display = "none";
			}
		}
	}
	if (document.getElementById("llnewuserZip")) {
		if (document.getElementById("llnewuserZip").value == "") {
			canSubmit = 0;
			LBLZP = "";
			if (document.getElementById("llnewuserZipError")) {
				$("#llnewuserZipError").slideDown(200);
			}
		}
		else {
			LBLZP = document.getElementById("llnewuserZip").value;
			if (document.getElementById("llnewuserZipError")) {
				document.getElementById("llnewuserZipError").style.display = "none";
			}
		}
	}
	if (document.getElementById("llnewuserPasswordA")) {
		if (document.getElementById("llnewuserPasswordA").value == "") {
			canSubmit = 0;
			LBLPW = "";
			if (document.getElementById("llnewuserPasswordAError")) {
				$("#llnewuserPasswordAError").slideDown(200);
			}
		}
		else {
			LBLPW = document.getElementById("llnewuserPasswordA").value;
			if (document.getElementById("llnewuserPasswordAError")) {
				document.getElementById("llnewuserPasswordAError").style.display = "none";
			}
		}
	}
	if (document.getElementById("llnewuserPasswordB")) {
		if (document.getElementById("llnewuserPasswordB").value == "" || document.getElementById("llnewuserPasswordB").value != document.getElementById("llnewuserPasswordA").value) {
			canSubmit = 0;
			LBLPW = "";
			if (document.getElementById("llnewuserPasswordBError")) {
				$("#llnewuserPasswordBError").slideDown(200);
			}
		}
		else {
			if (document.getElementById("llnewuserPasswordBError")) {
				document.getElementById("llnewuserPasswordBError").style.display = "none";
			}
		}
	}
	if (canSubmit == 1) {
		$.post(authEndPoint, { CALL: "ADDUSER", CERT: certifierID, TYPE: formType, DIV: responseDiv, RLBLFN: LBLFN, RLBLLN: LBLLN, RLBLEM: LBLEM, RLBLZP: LBLZP, RLBLPW: LBLPW, SESS: daSESSID }, function(data){
			var baseResponse = data;
			var baseResponseStart = baseResponse.indexOf("<!--ACTIVATE");
			var baseResponseEmailVar = "";
			var baseResponseCodeVar = "";
			if (baseResponseStart != -1) {
				var baseResponseEnd = baseResponse.indexOf(">",baseResponseStart);
				var baseResponseStrip = baseResponse.substring(baseResponseStart,(baseResponseEnd+1));
				var baseResponseHTMLStart = baseResponse.substr(0,baseResponseStart);
				var baseResponseHTMLEnd = baseResponse.substr((baseResponseEnd+1));
				var baseResponseEmailStart = baseResponseStrip.indexOf(" EMAIL=");
				var baseResponseEmailEnd = baseResponseStrip.indexOf("]",baseResponseEmailStart);
				baseResponseEmailVar = baseResponseStrip.substring((baseResponseEmailStart+8),(baseResponseEmailEnd));
				var baseResponseCodeStart = baseResponseStrip.indexOf(" CODE=");
				var baseResponseCodeEnd = baseResponseStrip.indexOf("]",baseResponseCodeStart);
				baseResponseCodeVar = baseResponseStrip.substring((baseResponseCodeStart+7),(baseResponseCodeEnd));
				baseResponse = baseResponseHTMLStart + baseResponseHTMLEnd;
			}
			if (whatLoginShell == "DCERT") {
				document.getElementById(responseDiv).innerHTML = baseResponse;
				if (baseResponseEmailVar != "" && baseResponseCodeVar != "") {
					llnewuserEmailSend(baseResponseEmailVar,baseResponseCodeVar);
				}
			}
			else {
				document.getElementById(responseDiv).innerHTML = baseResponse;
			}
		});
	}
}
function lloginFormSubmit(responseDiv, formType) {
	var canSubmit = 1;
	if (document.getElementById("lloginEmail")) {
		var emailResult = authCheckEmail('lloginEmail');
		if (emailResult == false) {
			canSubmit = 0;
			LLEM = "";
			if (document.getElementById("lloginEmailError")) {
				$("#lloginEmailError").slideDown(200);
			}
		}
		else if (document.getElementById("lloginEmail").value == "") {
			canSubmit = 0;
			LLEM = "";
			if (document.getElementById("lloginEmailError")) {
				$("#lloginEmailError").slideDown(200);
			}
		}
		else {
			LLEM = document.getElementById("lloginEmail").value;
			if (document.getElementById("lloginEmailError")) {
				document.getElementById("lloginEmailError").style.display = "none";
			}
		}
	}
	if (document.getElementById("lloginPasswordA")) {
		if (document.getElementById("lloginPasswordA").value == "") {
			canSubmit = 0;
			LLPW = "";
			if (document.getElementById("lloginPasswordAError")) {
				$("#lloginPasswordAError").slideDown(200);
			}
		}
		else {
			LLPW = document.getElementById("lloginPasswordA").value;
			if (document.getElementById("lloginPasswordAError")) {
				document.getElementById("lloginPasswordAError").style.display = "none";
			}
		}
	}
	if (canSubmit == 1) {
		$.post(authEndPoint, { CALL: "LLOGIN", CERT: certifierID, TYPE: formType, DIV: responseDiv, RLLEM: LLEM, RLLPW: LLPW, SESS: daSESSID }, function(data){
			var baseResponse = data;
			var baseJSONStart = baseResponse.indexOf("<!--JSON");
			if (baseJSONStart != -1) {
				var baseJSONEnd = baseResponse.indexOf(">",baseJSONStart);
				var baseJSONStrip = baseResponse.substring(baseJSONStart+9,(baseJSONEnd-2));
				var baseJSONHTMLStart = baseResponse.substr(0,baseJSONStart);
				var baseJSONHTMLEnd = baseResponse.substr((baseJSONEnd+1));
				if(gLog==1){console.log("controlscripts.php - Local Login JSON Response " + baseJSONStrip);}
				if (baseJSONStrip != "ERROR") {
					var baseJSON = JSON.parse(baseJSONStrip);
					var disNameArr = [];
					var disValArr = [];
					disNameArr.push("UID", "UFNAME", "ULNAME", "UEMAIL");
					disValArr.push(baseJSON.credentials[0].UID, baseJSON.credentials[0].FNAME, baseJSON.credentials[0].LNAME, baseJSON.credentials[0].EMAIL);
					fbUID = baseJSON.credentials[0].UID;
					fbUserName = baseJSON.credentials[0].FNAME + " " + baseJSON.credentials[0].LNAME;
					fbEmail = baseJSON.credentials[0].EMAIL;
					var disNameStr = disNameArr.toString();
					var disValStr = disValArr.toString();
					setAuthCookie(disNameStr, disValStr, authCookieExp);
					favoriteArray.length = 0;
					for (fv=0; fv<baseJSON.favorites.length; fv++) {
						favoriteArray[fv] = baseJSON.favorites[fv].id;
					}
				}
				baseResponse = baseJSONHTMLStart + baseJSONHTMLEnd;
				if (whatLoginShell == "DCERT") {
					panel9Load();
				}
			}
			document.getElementById(responseDiv).innerHTML = baseResponse;
		});
	}
}
function llnewuserEmailSend(toAdd,actCode) {
	frameVar = document.getElementById("iFrameForms");
	if (whatLoginShell == "DCERT") {
		frameVar.contentWindow.location.replace(controlURL+"panel9AuthEmail.php?FROM=" + emailFrom + "&EMAIL=" + toAdd + "&CODE=" + actCode + "&REDIRECT=" + baseURL + "/" + origClient + "/" + iteration + "/");
	}
}
function clearAddfield(addNum) {
	document.getElementById('panel'+addNum+'AddressField').value = "";
}
window.addEventListener("message", function( event ) {
	if(gLog==1){console.log("addEventListener: ", event);}
	var checkVal = "";
	var setVal = "";
	if (event.data) {
		var baseVal = String(event.data);
		checkVal = baseVal.substring(0, 5);
		setVal = baseVal.substring(5);
	}
    if ( checkVal === "DLOC:" ) {
        document.getElementById(whatPanelUp+'AddressField').value = setVal;
        window[whatPanelUp+'SubmitForm']();
    }
    else if ( checkVal === "RNGE:" ) {
    	var newRange = parseInt(setVal);
        window[whatPanelUp+'DistanceUpdate'](newRange);
    }
    else if ( checkVal === "PROD:" ) {
		if(gLog==1){console.log("addEventListener (PROD)");}
    	var baseCheck = setVal;
    	var baseSubmit = parseInt(baseCheck.substring(0,1));
    	var baseProd = baseCheck.substring(2);
    	if (baseProd.indexOf(",") != -1) {
    		var postProdArr = baseProd.split(",");
    	}
    	else {
     		var postProdArr = new Array(baseProd);
		}
		if(gLog==1){console.log("addEventListener (PROD): postProdArr = " + postProdArr.toString(","));}
		for (b=0; b<postProdArr.length; b++) {
    		for (g=0;g<prodDisplayArray.length;g++) {
				if (postProdArr[b] == prodDisplayArray[g][1]) {
					if (prodDisplayArray[g][9] == 0) {
						prodDisplayArray[g][9] = 1;
						window["panel1ProductNameVar" + prodDisplayArray[g][0]] = 1;
						if(gLog==1){console.log("addEventListener (PROD): ENABLE " + prodDisplayArray[g][1]);}
					}
					else {
						prodDisplayArray[g][9] = 0;
						window["panel1ProductNameVar" + prodDisplayArray[g][0]] = 0;
						if(gLog==1){console.log("addEventListener (PROD): DISABLE " + prodDisplayArray[g][1]);}
					}
					break;
				}
			}
		}
		prodCartArray.length = 0;
		for (d=0; d<prodDisplayArray.length; d++) {
			if (prodDisplayArray[d][9] == 1) {
				prodCartArray.push(prodDisplayArray[d][0]);
			}
		}
    	if (whatPanelUp == "panel1") {
    		panel1ProdCartDraw();
    	}
    	else if (whatPanelUp == "panel2") {
    		panel2WriteProdCart();
    		if (baseSubmit == 1) {
    			panel2SubmitForm();
    		}
    	}
    	else if (whatPanelUp == "panel3") {
    		panel3WriteProdCart();
    		if (baseSubmit == 1) {
    			panel3SubmitForm();
    		}
    	}
    	else if (whatPanelUp == "panel4") {
    		panel4WriteProdCart();
    		if (baseSubmit == 1) {
    			panel4SubmitForm();
    		}
    	}
    	else if (whatPanelUp == "panel5") {
    		panel5WriteProdCart();
    		if (baseSubmit == 1) {
    			panel5SubmitForm();
    		}
    	}
    }
    else if ( checkVal === "RSET:" ) {
		if(gLog==1){console.log("addEventListener (PROD)");}
    	var baseCheck = setVal;
    	if (baseCheck != "|") {
    		pmBackProd = baseCheck;
    	}
    	panelSwitch(whatPanelUp,"panel1",transNext,1);
    }
}, false );
function mmnrDetail(lat,lng) {
	document.getElementById('LO').value = lng;
	document.getElementById('LA').value = lat;
	if(gLog==1){console.log("mmnrDetail (Esri) START " + lat + "/" + lng);}
	require(["esri/tasks/locator", "esri/geometry/Point", "esri/geometry/webMercatorUtils", "dojo/number", "dojo/parser", "esri/tasks/AddressCandidate", "dojo/_base/array", "dojo/domReady!"],
	function(Locator, Point, webMercatorUtils, number, parser, AddressCandidate, array) {
		parser.parse();
		mmnrLocator = new Locator("//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer");
		var thisPoint = new Point(parseFloat(lng),parseFloat(lat));
		var mmlocationToAddress = mmnrLocator.locationToAddress(thisPoint, 10000);
		mmlocationToAddress.then(function(evt){
			if (evt.address) {
				if(gLog==1){console.log(evt.address);}
				if(evt.address.Address){document.getElementById('revCodeStreet').value = evt.address.Address;}
				if(evt.address.City){document.getElementById('revCodeCity').value = evt.address.City;}
				if(evt.address.Region){document.getElementById('revCodeState').value = evt.address.Region;}
				if(evt.address.CountryCode){document.getElementById('revCodeCountry').value = evt.address.CountryCode;}
				if (evt.address.CountryCode == "CAN") {
					document.getElementById('revCodeZip').value = evt.address.Postal + " " + evt.address.PostalExt;
				}
				else {
					document.getElementById('revCodeZip').value = evt.address.Postal;
				}
				if(evt.address.Postal){document.getElementById('revCodeCompile').value = evt.address.Postal;}
				if (document.getElementById('panel1AddressField')) {
					if(evt.address.Postal){document.getElementById('panel1AddressField').value = evt.address.Postal;}
				}
				if (document.getElementById('panel2AddressField')) {
					if(evt.address.Postal){document.getElementById('panel2AddressField').value = evt.address.Postal;}
				}
	      		if (mmnrPanel == "panel1") {
					if(gLog==1){console.log("mmnrDetail mmnrPanel: panel1");}
					p0PreConnect(1);
				}
	      		else if (mmnrPanel == "panel2") {
					if(gLog==1){console.log("mmnrDetail mmnrPanel: panel2");}
					haltTrack = 1;
					p0PreConnect(2);
				}
	      		else {
					if(gLog==1){console.log("mmnrDetail mmnrPanel: ELSE");}
					p0PreConnect(1);
				}
			}
    		else {
				if(gLog==1){console.log("mmnrDetail evt.address FAIL");}
				mmFail();
    		}
		},
		function(err){
			if(gLog==1){console.log("mmnrDetail total FAIL");}
			mmFail();
		});
	});
}
function mmFail() {
	p4Connect();
}
var mmnrSuccess = function(location){
	var thebaseLat = location.location.latitude;
	var thebaseLong = location.location.longitude;
	if(gLog==1){console.log("onSuccess " + thebaseLat + " , " + thebaseLong);}
	mmnrDetail(thebaseLat,thebaseLong);
};
var mmnrError = function(error){
	var thebaseLat = "32.6768138";
	var thebaseLong = "-117.0383080";
	if(gLog==1){console.log("onError " + thebaseLat + " , " + thebaseLong);}
	mmnrDetail(thebaseLat,thebaseLong);
};
function mmNoReload(panelSet,hasZip) {
	mmnrPanel = panelSet;
	if (hasZip) {
		if(gLog==1){console.log("mmNoReload ENGAGE ZIP");}
		var addressCompile = hasZip;
		var addTest = addressCompile.replace(/[^a-z0-9]/gi,'');
		if (addTest.length == 4) {
			if (isNaN(addTest)) {}
			else {addressCompile += zcr4Array[zcr4];}
		}
		if (addTest.length == 5) {
			if (isNaN(addTest)) {}
			else {addressCompile += zcr5Array[zcr5];}
		}
		if (addTest.length == 6) {
			for (x=0; x<6; x++) {
				if (isNaN(addTest.charAt(x))) {}
				else {addressCompile += zcr6Array[zcr6];break;}
			}
		}
		require(["esri/config", "esri/tasks/locator", "esri/SpatialReference", "esri/geometry/Point", "esri/geometry/Extent", "esri/geometry/webMercatorUtils", "dojo/_base/array", "dojo/number", "dojo/parser", "dojo/json", "dijit/registry", "dojo/domReady!"], function(esriConfig, Locator, SpatialReference, Point, Extent, webMercatorUtils, arrayUtils, number, parser, JSON, registry) {
			parser.parse();
			var mmlocator = new Locator("//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer");
			var address = {
				"SingleLine": addressCompile
			};
			var options = {
				address: address,
				outFields: ["*"]
			};
			var mmaddressToLocations = mmlocator.addressToLocations(options);
			mmaddressToLocations.then(function(evt){
				var thebaseLat = "32.6768138";
				var thebaseLong = "-117.0383080";
				if (evt[0]) {
					var result = evt[0];
					thebaseLong = result.location.x.toFixed(5);
					thebaseLat = result.location.y.toFixed(5);
				}
				mmnrDetail(thebaseLat,thebaseLong);
			},
			function(err){
				var thebaseLat = "32.6768138";
				var thebaseLong = "-117.0383080";
				mmnrDetail(thebaseLat,thebaseLong);
			});
		});
	}
	else {
		if(gLog==1){console.log("mmNoReload ENGAGE");}

		require([
			"Destini/Geo/Locators/AutoPositionDetector",
			"dojo/domReady!"
		], function (AutoPositionDetector) {
			var detector = new AutoPositionDetector();

			detector.detect().then(function (position) {
				mmnrSuccess({
					location: position
				});
			}, function (error) {
				mmnrError(error);
			});
		});
	}
}
function apGeoPosition(position) {
	document.getElementById('LA').value = position.coords.latitude;
	document.getElementById('LO').value = position.coords.longitude;
	if (p1GeoLocButtonSubmitVar == 1) {
        if(gLog==1){console.log("apGeoPosition - SUBMIT");}
		loaderToggle(1);
		apAutoPreSubmit(position.coords.latitude,position.coords.longitude,1);
	}
	else{
    	if (whatPanelUp == "panel1") {
			if(gLog==1){console.log("apGeoPosition - NOSUBMIT Panel 1");}
			panel1GetLatLngDetail(position.coords.latitude,position.coords.longitude,2);
    	}
    	else if (whatPanelUp == "panel2") {
			if(gLog==1){console.log("apGeoPosition - NOSUBMIT Panel 2");}
			panel2GetLatLngDetail(position.coords.latitude,position.coords.longitude,1);
    	}
    	else if (whatPanelUp == "panel3") {
			if(gLog==1){console.log("apGeoPosition - NOSUBMIT Panel 3");}
			panel3GetLatLngDetail(position.coords.latitude,position.coords.longitude,1);
    	}
    	else if (whatPanelUp == "panel4") {
			if(gLog==1){console.log("apGeoPosition - NOSUBMIT Panel 4");}
			panel4GetLatLngDetail(position.coords.latitude,position.coords.longitude,1);
    	}
    	else if (whatPanelUp == "panel5") {
			if(gLog==1){console.log("apGeoPosition - NOSUBMIT Panel 5");}
			panel5GetLatLngDetail(position.coords.latitude,position.coords.longitude,1);
    	}
	}
}
function apGeoError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            if(gLog==1){console.log("apGeoError - Browser denied the request for Geolocation.");}
            if (isItAutoMM == 1) {
    			apGeoBackup();
    		}
            break;
        case error.POSITION_UNAVAILABLE:
            if(gLog==1){console.log("apGeoError - Location information is unavailable.");}
    		apGeoBackup();
            break;
        case error.TIMEOUT:
            if(gLog==1){console.log("apGeoError - The request to get user location timed out.");}
    		apGeoBackup();
            break;
        case error.UNKNOWN_ERROR:
            if(gLog==1){console.log("apGeoError - An unknown error occurred.");}
     		apGeoBackup();
           break;
        default:
            if(gLog==1){console.log("apGeoError - An uncaught error occurred.");}
    		apGeoBackup();
            break;
    }
}
function apGeoBackup() {
	geoip2.city(apGeoBackupSuccess, apGeoBackupError);
}
var apGeoBackupSuccess = function(location){
	if(gLog==1){console.log("apGeoBackupSuccess - " + location.location.latitude + "/" + location.location.longitude);}
	document.getElementById('LA').value = location.location.latitude;
	document.getElementById('LO').value = location.location.longitude;
	var thisSubVar = 0;
    if (whatPanelUp == "panel1") {
    	thisSubVar = p1GeoLocButtonSubmitVar;
    }
    else if (whatPanelUp == "panel2") {
    	thisSubVar = p2GeoLocButtonSubmitVar;
    }
    else if (whatPanelUp == "panel3") {
    	thisSubVar = p3GeoLocButtonSubmitVar;
    }
    else if (whatPanelUp == "panel4") {
    	thisSubVar = p4GeoLocButtonSubmitVar;
    }
    else if (whatPanelUp == "panel5") {
    	thisSubVar = p5GeoLocButtonSubmitVar;
    }
	if (thisSubVar == 1) {
    	if (whatPanelUp == "panel1") {
			if (panel1Written == 1) {
        		if(gLog==1){console.log("apGeoBackupSuccess - SUBMIT Panel 1");}
				loaderToggle(1);
        		apMMShowVal = 1;
				apAutoPreSubmit(location.location.latitude,location.location.longitude,1);
			}
			else {
        		if(gLog==1){console.log("apGeoBackupSuccess - SUBMIT ELSE Panel 1");}
				panel1Load();
			}
    	}
    	else if (whatPanelUp == "panel2") {
			if(gLog==1){console.log("apGeoBackupSuccess - SUBMIT Panel 2");}
			panel2GetLatLngDetail(location.location.latitude,location.location.longitude,2);
    	}
    	else if (whatPanelUp == "panel3") {
			if(gLog==1){console.log("apGeoBackupSuccess - SUBMIT Panel 3");}
			panel3GetLatLngDetail(location.location.latitude,location.location.longitude,2);
    	}
    	else if (whatPanelUp == "panel4") {
			if(gLog==1){console.log("apGeoBackupSuccess - SUBMIT Panel 4");}
			panel4GetLatLngDetail(location.location.latitude,location.location.longitude,2);
    	}
    	else if (whatPanelUp == "panel5") {
			if(gLog==1){console.log("apGeoBackupSuccess - SUBMIT Panel 5");}
			panel5GetLatLngDetail(location.location.latitude,location.location.longitude,2);
    	}
	}
	else{
    	if (whatPanelUp == "panel1") {
			if (panel1Written == 1) {
        		if(gLog==1){console.log("apGeoBackupSuccess - NOSUBMIT Panel 1");}
        		apMMShowVal = 1;
				panel1GetLatLngDetail(location.location.latitude,location.location.longitude,2);
			}
			else {
     	  		if(gLog==1){console.log("apGeoBackupSuccess - NOSUBMIT ELSE Panel 1");}
				panel1Load();
			}
    	}
    	else if (whatPanelUp == "panel2") {
			if(gLog==1){console.log("apGeoBackupSuccess - NOSUBMIT Panel 2");}
			panel2GetLatLngDetail(location.location.latitude,location.location.longitude,1);
    	}
    	else if (whatPanelUp == "panel3") {
			if(gLog==1){console.log("apGeoBackupSuccess - NOSUBMIT Panel 3");}
			panel3GetLatLngDetail(location.location.latitude,location.location.longitude,1);
    	}
    	else if (whatPanelUp == "panel4") {
			if(gLog==1){console.log("apGeoBackupSuccess - NOSUBMIT Panel 4");}
			panel4GetLatLngDetail(location.location.latitude,location.location.longitude,1);
    	}
    	else if (whatPanelUp == "panel5") {
			if(gLog==1){console.log("apGeoBackupSuccess - NOSUBMIT Panel 5");}
			panel5GetLatLngDetail(location.location.latitude,location.location.longitude,1);
    	}
	}
};
var apGeoBackupError = function(error){
	if(gLog==1){console.log("apGeoBackupError - MaxMind Fail");}
	loaderToggle(0);
    if (whatPanelUp == "panel1") {
		if (panel1Written == 1) {
    		if(gLog==1){console.log("apGeoBackupError - WRITTEN");}
			errorText("We're sorry, but we could not find your location.",1);
		}
		else {
        	if(gLog==1){console.log("apGeoBackupError - ELSE");}
			panel1Load();
		}
    }
    else if (whatPanelUp == "panel2") {
 		errorText("We're sorry, but we could not find your location.",1);
    }
    else if (whatPanelUp == "panel3") {
		errorText("We're sorry, but we could not find your location.",1);
    }
    else if (whatPanelUp == "panel4") {
		errorText("We're sorry, but we could not find your location.",1);
    }
    else if (whatPanelUp == "panel5") {
		errorText("We're sorry, but we could not find your location.",1);
    }
};
function apAutoPreSubmit(thisLat,thisLng,subVar) {
	if(gLog==1){console.log("apAutoPreSubmit - START");}
    if (whatPanelUp == "panel1") {
		if (document.getElementById('panel1ScopeField')) {
			document.getElementById('scope').value = document.getElementById('panel1ScopeField').value;
		}
		if (document.getElementById('panel1DistanceField')) {
			document.getElementById('distance').value = document.getElementById('panel1DistanceField').value;
		}
		if (document.getElementById('panel1ResultsField')) {
			document.getElementById('results').value = document.getElementById('panel1ResultsField').value;
		}
		if (document.getElementById('panel1SortField')) {
			document.getElementById('sort').value = document.getElementById('panel1SortField').value;
		}
    }
    else if (whatPanelUp == "panel2") {
		if (document.getElementById('panel2ScopeField')) {
			document.getElementById('scope').value = document.getElementById('panel2ScopeField').value;
		}
		if (document.getElementById('panel2DistanceField')) {
			document.getElementById('distance').value = document.getElementById('panel2DistanceField').value;
		}
		if (document.getElementById('panel2ResultsField')) {
			document.getElementById('results').value = document.getElementById('panel2ResultsField').value;
		}
		if (document.getElementById('panel2SortField')) {
			document.getElementById('sort').value = document.getElementById('panel2SortField').value;
		}
    }
    else if (whatPanelUp == "panel3") {
		if (document.getElementById('panel3ScopeField')) {
			document.getElementById('scope').value = document.getElementById('panel3ScopeField').value;
		}
		if (document.getElementById('panel3DistanceField')) {
			document.getElementById('distance').value = document.getElementById('panel3DistanceField').value;
		}
		if (document.getElementById('panel3ResultsField')) {
			document.getElementById('results').value = document.getElementById('panel3ResultsField').value;
		}
		if (document.getElementById('panel3SortField')) {
			document.getElementById('sort').value = document.getElementById('panel3SortField').value;
		}
    }
    else if (whatPanelUp == "panel4") {
		if (document.getElementById('panel4ScopeField')) {
			document.getElementById('scope').value = document.getElementById('panel4ScopeField').value;
		}
		if (document.getElementById('panel4DistanceField')) {
			document.getElementById('distance').value = document.getElementById('panel4DistanceField').value;
		}
		if (document.getElementById('panel4ResultsField')) {
			document.getElementById('results').value = document.getElementById('panel4ResultsField').value;
		}
		if (document.getElementById('panel4SortField')) {
			document.getElementById('sort').value = document.getElementById('panel4SortField').value;
		}
    }
    else if (whatPanelUp == "panel5") {
		if (document.getElementById('panel5ScopeField')) {
			document.getElementById('scope').value = document.getElementById('panel5ScopeField').value;
		}
		if (document.getElementById('panel5DistanceField')) {
			document.getElementById('distance').value = document.getElementById('panel5DistanceField').value;
		}
		if (document.getElementById('panel5ResultsField')) {
			document.getElementById('results').value = document.getElementById('panel5ResultsField').value;
		}
		if (document.getElementById('panel5SortField')) {
			document.getElementById('sort').value = document.getElementById('panel5SortField').value;
		}
    }
	if (prodCartArray.length == 0) {
		prodSelectedArray.length = 0;
		if (document.getElementById('PROD').value=="") {
			for (p=0;p<prodDisplayArray.length;p++) {
				if (prodDisplayArray[p][9] == "1") {
					prodSelectedArray.push(prodDisplayArray[p][1]);
				}
			}
			document.getElementById('PROD').value = prodSelectedArray.toString();
		}
		if (document.getElementById('PROD').value == "") {
			document.getElementById('PROD').value = prodSelString;
		}
	}
	else {
		var tempProdArray = [];
		for (c=0;c<prodCartArray.length;c++) {
			for (p=0;p<prodDisplayArray.length;p++) {
				if (prodDisplayArray[p][0] == prodCartArray[c]) {
					tempProdArray.push(prodDisplayArray[p][1]);
				}
			}
		}
		document.getElementById('PROD').value = tempProdArray.toString();
	}
	groupSelectedArray.length = 0;
	for (g=0;g<catArray.length;g++) {
		if (catArray[g][6] == "1") {
			groupSelectedArray.push(catArray[g][5]);
		}
	}
	document.getElementById('GROUP').value = groupSelectedArray.toString();
	if (document.getElementById('SCFILTER').value=="" && panel1StoreCatOn == 1) {
		storeCatSelectedArray.length = 0;
		for (sc=0;sc<storeCatArray.length;sc++) {
			if (storeCatArray[sc][8] == 1) {
				storeCatSelectedArray.push(storeCatArray[sc][0]);
			}
		}
		document.getElementById('SCFILTER').value = storeCatSelectedArray.toString();
	}
	var hasProducts = 1;
	if (panel1CartReq == 1 && prodCartArray.length == 0) {
		if(gLog==1){console.log("apAutoPreSubmit - panel1CartReq == 1 && prodCartArray.length == 0");}
		loaderToggle(0);
		hasProducts = 0;
		errorText('Please select at least one product.',3);
	}
	if (hasProducts==1) {
		var urlParamPush = "";
		var urlParamTrack = 0;
		if (urlParamArray.length) {
			for (l=0;l<urlParamArray.length;l++) {
				if (urlParamTrack == 0) {
					urlParamPush += "?";
					urlParamTrack = 1;
				}
				else {
					urlParamPush += "&";
				}
				urlParamPush += urlParamArray[l][0] + "=" + urlParamArray[l][1];
			}
		}
	    if (whatPanelUp == "panel1") {
			if (panel1NoProdSelectOn == 1) {
				if (document.getElementById('PROD').value == document.getElementById('FULLPROD').value) {
					loaderToggle(0);
					if(gLog==1){console.log("apAutoPreSubmit - panel1AlertNoProducts()");}
					panel1AlertNoProducts();
				}
				else {
					if(gLog==1){console.log("apAutoPreSubmit - panel1GetLatLngDetail(panel1NoProdSelectOn)");}
					panel1GetLatLngDetail(thisLat,thisLng,1);
				}
			}
			else {
				if(gLog==1){console.log("apAutoPreSubmit - panel1GetLatLngDetail()");}
				panel1GetLatLngDetail(thisLat,thisLng,1);
			}
	    }
	    else if (whatPanelUp == "panel2") {
			if(gLog==1){console.log("apAutoPreSubmit - panel2GetLatLngDetail()");}
			panel2GetLatLngDetail(thisLat,thisLng,2);
	    }
	    else if (whatPanelUp == "panel3") {
			if(gLog==1){console.log("apAutoPreSubmit - panel3GetLatLngDetail()");}
			panel3GetLatLngDetail(thisLat,thisLng,2);
	    }
	    else if (whatPanelUp == "panel4") {
			if(gLog==1){console.log("apAutoPreSubmit - panel4GetLatLngDetail()");}
			panel4GetLatLngDetail(thisLat,thisLng,2);
	    }
	    else if (whatPanelUp == "panel5") {
			if(gLog==1){console.log("apAutoPreSubmit - panel5GetLatLngDetail()");}
			panel5GetLatLngDetail(thisLat,thisLng,2);
	    }
	}
}
function p0PreConnect(whatLoad) {
	p0TemplateList['TBN'] = t_browser_name;
	p0TemplateList['TBV'] = t_browser_version;
	p0TemplateList['TON'] = t_os_name;
	p0TemplateList['TOV'] = t_os_version;
	p0TemplateList['TEN'] = t_engine_name;
	p0TemplateList['TEV'] = t_engine_version;
	p0TemplateList["dealCommon"] = dealCommon;
	p0TemplateList["templateRoot"] = templateRoot;
	p0TemplateList["templateRootAlt"] = "../../templates/deals/";
	p0TemplateList["templateRootCoupons"] = "../../templates/coupons/";
	p0TemplateList["coreClient"] = coreClient;
	p0TemplateList["whatLoad"] = whatLoad;
	if (hasDeals == 1) {
		p0TemplateList["dealStartDiv"] = 1;
		p0TemplateList["dealDiv"] = 1;
		p0TemplateList["dealEndDiv"] = 1;
		p0TemplateList["panel2DealHoverDiv"] = 1;
		p0TemplateList["panel3DealHoverDiv"] = 1;
		p0TemplateList["dealListDiv"] = 1;
	}
	else {
		p0TemplateList["dealStartDiv"] = 0;
		p0TemplateList["dealDiv"] = 0;
		p0TemplateList["dealEndDiv"] = 0;
		p0TemplateList["panel2DealHoverDiv"] = 0;
		p0TemplateList["panel3DealHoverDiv"] = 0;
		p0TemplateList["dealListDiv"] = 0;
	}
	p0TemplateList["onlineSelectDiv"] = onretOn;
	p0TemplateList["onlineStartDiv"] = onretOn;
	p0TemplateList["onlineDelItemStartDiv"] = onretOn;
	p0TemplateList["onlineDelItemDiv"] = onretOn;
	p0TemplateList["onlineDelItemEndDiv"] = onretOn;
	p0TemplateList["onlineItemStartDiv"] = onretOn;
	p0TemplateList["onlineItemDiv"] = onretOn;
	p0TemplateList["onlineItemEndDiv"] = onretOn;
	p0TemplateList["onlineNoItemDiv"] = onretOn;
	p0TemplateList["onlineEndDiv"] = onretOn;
	p0TemplateList["onlineProdStartDiv"] = onretOn;
	p0TemplateList["onlineProdItemDiv"] = onretOn;
	p0TemplateList["onlineProdEndDiv"] = onretOn;
	p0TemplateList["onlineListStartDiv"] = onretOn;
	p0TemplateList["onlineListItemDiv"] = onretOn;
	p0TemplateList["onlineListItemStartDiv"] = onretOn;
	p0TemplateList["onlineListItemMultiDiv"] = onretOn;
	p0TemplateList["onlineListItemEndDiv"] = onretOn;
	p0TemplateList["onlineListEndDiv"] = onretOn;
	p0TemplateList["onlineListNoneDiv"] = onretOn;
	p0TemplateList["onlineNoResultsDiv"] = onretOn;
	p0TemplateList["onlineModalRetailerStartDiv"] = onretStyle;
	p0TemplateList["onlineModalRetailerItemDiv"] = onretStyle;
	p0TemplateList["onlineModalRetailerEndDiv"] = onretStyle;
	p0TemplateList["onlineModalProductsStartDiv"] = onretStyle;
	p0TemplateList["onlineModalProductsItemDiv"] = onretStyle;
	p0TemplateList["onlineModalProductsEndDiv"] = onretStyle;
	p0TemplateList["onlineModalListStartDiv"] = onretStyle;
	p0TemplateList["onlineModalListItemDiv"] = onretStyle;
	p0TemplateList["onlineModalListEndDiv"] = onretStyle;
	p0TemplateList["onlineModalDiv"] = onretStyle;
	p0TemplateList["onlineModalFilterDiv"] = onretStyle;
	p0TemplateList["cpsDiv"] = cPanelOp;
	p0TemplateList["cpStartDiv"] = cPanelOp;
	p0TemplateList["cpContentDiv"] = cPanelOp;
	p0TemplateList["cpEndDiv"] = cPanelOp;
	p0TemplateList["cpProductDiv"] = cPanelOp;
	p0TemplateList["cpLabelDiv"] = cPanelOp;
	p0TemplateList["cpCategoryDiv"] = cPanelOp;
	p0TemplateList["cpGroupDiv"] = cPanelOp;
	p0TemplateList["cpCartDiv"] = cPanelOp;
	p0TemplateList["cpCartProductDiv"] = cPanelOp;
	p0TemplateList["cpEmptyDiv"] = cPanelOp;
	p0TemplateList["cpCartEmptyDiv"] = cPanelOp;
	p0TemplateList["cpCatModalStartDiv"] = cPanelOp;
	p0TemplateList["cpCatModalItemDiv"] = cPanelOp;
	p0TemplateList["cpCatModalEndDiv"] = cPanelOp;
	p0TemplateList["cpCatModalMobStartDiv"] = cPanelOp;
	p0TemplateList["cpCatModalMobItemDiv"] = cPanelOp;
	p0TemplateList["cpCatModalMobEndDiv"] = cPanelOp;
	p0TemplateList["cpGroupModalStartDiv"] = cPanelOp;
	p0TemplateList["cpGroupModalItemDiv"] = cPanelOp;
	p0TemplateList["cpGroupModalEndDiv"] = cPanelOp;
	p0TemplateList["cpLabelModalStartDiv"] = cPanelOp;
	p0TemplateList["cpLabelModalItemDiv"] = cPanelOp;
	p0TemplateList["cpLabelModalEndDiv"] = cPanelOp;
	p0TemplateList["premiseBaseDiv"] = premiseCheck;
	p0TemplateList["couponLocListHeadDiv"] = cpAPI;
	p0TemplateList["couponLocListDiv"] = cpAPI;
	p0TemplateList["couponInfoWindowHeadDiv"] = cpAPI;
	p0TemplateList["couponInfoWindowDiv"] = cpAPI;
	p0TemplateList["couponLocDetailHeadDiv"] = cpAPI;
	p0TemplateList["couponLocDetailDiv"] = cpAPI;
	p0TemplateList["couponModalDiv"] = cpAPI;
	p0TemplateList["copyModalDiv"] = 1;
	p0TemplateList["rteConsoleOnDiv"] = rtEcomm;
	p0TemplateList["rteConsoleOffDiv"] = rtEcomm;
	p0TemplateList["discontinuedDiv"] = sHP;
	p0TemplateList["newreleaseDiv"] = sHP;
	p0TemplateList["onlineonlyDiv"] = sHP;
	p0TemplateList["limitedtimeDiv"] = sHP;
	p0TemplateList["CB"] = noCache;
	if(gLog==1){console.log("p0PreConnect - p0TemplateList ", p0TemplateList);}
	$.post(controlURL + scriptVersion + "/panel0Templates.php", p0TemplateList, function(data){
		p0TemplateSet = data;
		if (p0TemplateSet.discontinuedDiv){hpArr[2] = [autotextIt(p0TemplateSet.discontinuedDiv,"discontinued"),"discontinued"];}else{hpArr[2] = ["",""];}
		if (p0TemplateSet.newreleaseDiv){hpArr[3] = [autotextIt(p0TemplateSet.newreleaseDiv,"newrelease"),"newrelease"];}else{hpArr[3] = ["",""];}
		if (p0TemplateSet.onlineonlyDiv){hpArr[4] = [autotextIt(p0TemplateSet.onlineonlyDiv,"onlineonly"),"onlineonly"];}else{hpArr[4] = ["",""];}
		if (p0TemplateSet.limitedtimeDiv){hpArr[5] = [autotextIt(p0TemplateSet.limitedtimeDiv,"limitedtime"),"limitedtime"];}else{hpArr[5] = ["",""];}
		if(gLog==1){console.log("p0PreConnect - Response: ",p0TemplateSet);}
		if(gLog==1){
			if (p0TemplateSet.error_count != 0) {
				for (e=0; e<p0TemplateSet.error_count; e++) {
					console.log("p0PreConnect - Error: ",p0TemplateSet.errors[e].error_code,p0TemplateSet.errors[e].error_level,p0TemplateSet.errors[e].error_scope,p0TemplateSet.errors[e].error_desc);
				}
			}
		}
		var winInfo = document.getElementById('panel0').getBoundingClientRect();
		winWidth = parseInt(winInfo.width);
		if (tabSelect == 1 && winWidth <= globalRespWidth) {tabSelect=2;}
		if (p0TemplateSet.copyModalDiv != "") {
			copyModal();
		}
		if (p0TemplateSet.whatLoad == 2) {
			p2Connect(1);
		}
		else if (p0TemplateSet.whatLoad == 3) {
			p1Connect(1);
		}
		else {
			p1Connect();
		}
	});
}
var onretClientArrayAlt = [];
var onretProdArrayAlt = [];
var onretZipArrayAlt = [];
function p1Connect(writeCP) {
	var param = {};
	urlParamArray[urlParamArray.length] = ["productPreset", productPreset];
	urlParamArray[urlParamArray.length] = ["CB", noCache];
	urlParamArray[urlParamArray.length] = ["GLOG", gLog];
	urlParamArray[urlParamArray.length] = ["MKTC", mktCalled];
	urlParamArray[urlParamArray.length] = ["numPost", numPost];
	urlParamArray[urlParamArray.length] = ["MKTON", MKTON];
	urlParamArray[urlParamArray.length] = ["NCID", NCID];
	urlParamArray[urlParamArray.length] = ["APO", APO];
	urlParamArray[urlParamArray.length] = ["LA", document.getElementById('LA').value];
	urlParamArray[urlParamArray.length] = ["LO", document.getElementById('LO').value];
	urlParamArray[urlParamArray.length] = ["ZIP", document.getElementById('revCodeZip').value];
	urlParamArray[urlParamArray.length] = ["UTMC", utm_campaign];
	urlParamArray[urlParamArray.length] = ["VINC", VINC];
	if (writeCP) {
		urlParamArray[urlParamArray.length] = ["writeCP", writeCP];
	}
	var thisBEC = 0;
	var thisBBM = 0;
	for (q=0; q<urlParamArray.length; q++) {
		if (urlParamArray[q][0] == "BEC") {
			thisBEC++;
		}
		if (urlParamArray[q][0] == "BBM") {
			thisBBM++;
		}
	}
	if (thisBEC == 0) {
		urlParamArray[urlParamArray.length] = ["BEC", BEC];
	}
	if (thisBBM == 0) {
		urlParamArray[urlParamArray.length] = ["BBM", BBM];
	}
	var thisCTRY = 1;
	if (document.getElementById('revCodeCountry').value == "US" || document.getElementById('revCodeCountry').value == "USA") {
		thisCTRY = 1;
	}
	else if (document.getElementById('revCodeCountry').value == "CA" || document.getElementById('revCodeCountry').value == "CAN") {
		thisCTRY = 2;
	}
	urlParamArray[urlParamArray.length] = ["DEFCTRY", thisCTRY];
	if (urlParamArray.length) {
		for (l=0;l<urlParamArray.length;l++) {
			if (urlParamArray[l][0] !== undefined) {
				param[urlParamArray[l][0]] = urlParamArray[l][1];
			}
		}
	}
	if(gLog==1){console.log("p1Connect - Params: ",param);}
	$.post(controlURL + scriptVersion + "/panel1Connect.php", param, function(data){
		var postBack = JSON.parse(data);
		if(gLog==1){console.log("p1Connect - Response: ",postBack);}
		urlParamArray.length = 0;
		if (postBack.premiseArray.count != 0 && premiseArray.length == 0) {
			premiseArray.length = 0;
			for (x=0; x<postBack.premiseArray.count; x++) {
				premiseArray[x]=[postBack.premiseArray.val[x].id, postBack.premiseArray.val[x].name, postBack.premiseArray.val[x].code, postBack.premiseArray.val[x].parent, postBack.premiseArray.val[x].bigImg, postBack.premiseArray.val[x].smImg, postBack.premiseArray.val[x].sort, postBack.premiseArray.val[x].on];
			}
		}
		if(gLog==1){console.log("p1Connect - Premise Count: ",postBack.premiseArray.count);}
		if (postBack.onretClientArray.count != -1) {
			onretClientArray.length = 0;
			if (postBack.onretClientArray.count != 0) {
				var orCN = 0;
				for (x=0; x<postBack.onretClientArray.count; x++) {
					if (postBack.onretClientArray.val[x].inc != -1) {
						onretClientArray[orCN]=[postBack.onretClientArray.val[x].id, postBack.onretClientArray.val[x].ret_id, postBack.onretClientArray.val[x].text, postBack.onretClientArray.val[x].web, postBack.onretClientArray.val[x].mobile, postBack.onretClientArray.val[x].inc, postBack.onretClientArray.val[x].name, postBack.onretClientArray.val[x].image, postBack.onretClientArray.val[x].type, postBack.onretClientArray.val[x].sort, postBack.onretClientArray.val[x].no_prod, postBack.onretClientArray.val[x].rtEcomm, postBack.onretClientArray.val[x].rtEndpoint];
						orCN++;
					}
				}
				sortCol(onretClientArray,9);
			}
		}
		for(za=0;za<onretClientArray.length;za++){onretClientArrayAlt[za] = onretClientArray[za];}
		if (postBack.onretZipArray.count != 0) {
			onretZipArray.length = 0;
			for (x=0; x<postBack.onretZipArray.count; x++) {
				onretZipArray[x]=[postBack.onretZipArray.val[x].id, postBack.onretZipArray.val[x].ret_id, postBack.onretZipArray.val[x].zip];
			}
		}
		for(za=0;za<onretZipArray.length;za++){onretZipArrayAlt[za] = onretZipArray[za];}
		if (postBack.onretProdArray.count != -1) {
			onretProdArray.length = 0;
			if (postBack.onretProdArray.count != 0) {
				var onretSrcL = 0;
				var onretSrcMT = 0;
				var onretSrcSM = 0;
				for (x=0; x<postBack.onretProdArray.count; x++) {
					onretProdArray[x]=[postBack.onretProdArray.val[x].id, postBack.onretProdArray.val[x].ret_id, postBack.onretProdArray.val[x].prod_id, postBack.onretProdArray.val[x].web, postBack.onretProdArray.val[x].mobile, postBack.onretProdArray.val[x].connotate, postBack.onretProdArray.val[x].price, postBack.onretProdArray.val[x].available, postBack.onretProdArray.val[x].dedup, postBack.onretProdArray.val[x].source, postBack.onretProdArray.val[x].filter_on, postBack.onretProdArray.val[x].rtEndpoint];
					if (postBack.onretProdArray.val[x].source == 1) {
						onretSrcL++;
					}
					else if (postBack.onretProdArray.val[x].source == 2) {
						mktArr[onretSrcMT]=[postBack.onretProdArray.val[x].id, postBack.onretProdArray.val[x].ret_id, postBack.onretProdArray.val[x].prod_id, postBack.onretProdArray.val[x].web, postBack.onretProdArray.val[x].mobile, postBack.onretProdArray.val[x].connotate, postBack.onretProdArray.val[x].price, postBack.onretProdArray.val[x].available, postBack.onretProdArray.val[x].dedup, postBack.onretProdArray.val[x].source, postBack.onretProdArray.val[x].filter_on, postBack.onretProdArray.val[x].rtEndpoint];
						onretSrcMT++;
					}
					else if (postBack.onretProdArray.val[x].source == 4) {
						onretSrcSM++;
					}
				}
				if (mktCalled == 1) {
					for (q=0; q<mktArr.length; q++) {
						onretProdArray[onretProdArray.length] = mktArr[q];
					}
				}
			}
		}
		for(za=0;za<onretProdArray.length;za++){onretProdArrayAlt[za] = onretProdArray[za];}
		if(gLog==1){console.log("p1Connect - Online Retailers (client/zip/prod): ",postBack.onretClientArray.count,postBack.onretZipArray.count,onretProdArray);}
		if(gLog==1){console.log("p1Connect - Result Sources (local/MT/Sem3): ",onretSrcL,onretSrcMT,onretSrcSM);}
		if (postBack.producerArray.count != 0) {
			producerArray.length = 0;
			for (x=0; x<postBack.producerArray.count; x++) {
				producerArray[x]=[postBack.producerArray.val[x].id, postBack.producerArray.val[x].name, postBack.producerArray.val[x].db, postBack.producerArray.val[x].b_img, postBack.producerArray.val[x].s_img];
			}
		}
		if (postBack.classArray.count != 0) {
			classArray.length = 0;
			for (x=0; x<postBack.classArray.count; x++) {
				classArray[x]=[postBack.classArray.val[x].id, postBack.classArray.val[x].name, postBack.classArray.val[x].b_img, postBack.classArray.val[x].s_img, postBack.classArray.val[x].code, postBack.classArray.val[x].on];
			}
		}
		if (postBack.stockArray.count != 0) {
			stockArray.length = 0;
			for (x=0; x<postBack.stockArray.count; x++) {
				stockArray[x]=[postBack.stockArray.val[x].id, postBack.stockArray.val[x].name];
			}
		}
		if (postBack.stocklocArray.count != 0) {
			stocklocArray.length = 0;
			for (x=0; x<postBack.stocklocArray.count; x++) {
				stocklocArray[x]=[postBack.stocklocArray.val[x].id, postBack.stocklocArray.val[x].name, postBack.stocklocArray.val[x].desc, postBack.stocklocArray.val[x].link];
			}
		}
		var noFam = 0
		var famX = 0
		if (postBack.famArray.count != 0) {
			famArray.length = 0;
			for (x=0; x<postBack.famArray.count; x++) {
				if (postBack.famArray.val[x].num_cats != 0) {
					famArray[famX]=[postBack.famArray.val[x].id, postBack.famArray.val[x].name, postBack.famArray.val[x].b_img, postBack.famArray.val[x].s_img, postBack.famArray.val[x].code, postBack.famArray.val[x].on, postBack.famArray.val[x].num_cats, postBack.famArray.val[x].name_fr, postBack.famArray.val[x].name_es, postBack.famArray.val[x].name_de, postBack.famArray.val[x].name_it];
					window["panel1FamilyNameVar" + postBack.famArray.val[x].id] = postBack.famArray.val[x].on;
					famX++;
				}
				else {
					noFam++;
				}
			}
		}
		if(gLog==1){console.log("p1Connect - Families (active/inactive): ",famX,noFam);}
		var noCat = 0
		var catX = 0
		if (postBack.catArray.count != 0) {
			catArray.length = 0;
			for (x=0; x<postBack.catArray.count; x++) {
				if (postBack.catArray.val[x].num_cats != 0) {
					catArray[catX]=[postBack.catArray.val[x].id, postBack.catArray.val[x].name, postBack.catArray.val[x].fam_id, postBack.catArray.val[x].b_img, postBack.catArray.val[x].s_img, postBack.catArray.val[x].code, postBack.catArray.val[x].on, postBack.catArray.val[x].num_cats, postBack.catArray.val[x].cat_tot, postBack.catArray.val[x].cat_some, postBack.catArray.val[x].name_fr, postBack.catArray.val[x].name_es, postBack.catArray.val[x].name_de, postBack.catArray.val[x].name_it];
					window["panel1CategoryNameVar" + postBack.catArray.val[x].id] = postBack.catArray.val[x].on;
					catX++;
				}
				else {
					noCat++;
				}
			}
		}
		if(gLog==1){console.log("p1Connect - Categories (active/inactive): ",catX,noCat);}
		var prodX = 0
		var discX = 0
		var prerX = 0
		foundProducts = postBack.prodArray.count;
		if (postBack.prodArray.count != 0) {
			prodArray.length = 0;
			for (x=0; x<postBack.prodArray.count; x++) {
				if (postBack.prodArray.val[x].high_p == 1 || postBack.prodArray.val[x].high_p == 4 || (postBack.prodArray.val[x].high_p != 0 && sHP == 1)) {
					prodArray[prodX]=[postBack.prodArray.val[x].id, postBack.prodArray.val[x].p_id, postBack.prodArray.val[x].name, postBack.prodArray.val[x].desc, postBack.prodArray.val[x].b_img, postBack.prodArray.val[x].s_img, postBack.prodArray.val[x].high_p, postBack.prodArray.val[x].check, postBack.prodArray.val[x].cat_id, postBack.prodArray.val[x].on, postBack.prodArray.val[x].match, postBack.prodArray.val[x].lab_set, postBack.prodArray.val[x].spins, postBack.prodArray.val[x].iri, postBack.prodArray.val[x].wfm, postBack.prodArray.val[x].niel, postBack.prodArray.val[x].cat_name, postBack.prodArray.val[x].fam_id, postBack.prodArray.val[x].tt, postBack.prodArray.val[x].labels, postBack.prodArray.val[x].m_over, postBack.prodArray.val[x].p_size, postBack.prodArray.val[x].fam_name, postBack.prodArray.val[x].on_ret, postBack.prodArray.val[x].on_ret_prod, postBack.prodArray.val[x].order, postBack.prodArray.val[x].name_fr, postBack.prodArray.val[x].cat_fr, postBack.prodArray.val[x].fam_fr, postBack.prodArray.val[x].gtin, postBack.prodArray.val[x].name_es, postBack.prodArray.val[x].cat_es, postBack.prodArray.val[x].fam_es, postBack.prodArray.val[x].name_de, postBack.prodArray.val[x].cat_de, postBack.prodArray.val[x].fam_de, postBack.prodArray.val[x].name_it, postBack.prodArray.val[x].cat_it, postBack.prodArray.val[x].fam_it, postBack.prodArray.val[x].diet];
					prodDisplayArray[prodX]=[postBack.prodArray.val[x].id, postBack.prodArray.val[x].p_id, postBack.prodArray.val[x].name, postBack.prodArray.val[x].desc, postBack.prodArray.val[x].b_img, postBack.prodArray.val[x].s_img, postBack.prodArray.val[x].high_p, postBack.prodArray.val[x].check, postBack.prodArray.val[x].cat_id, postBack.prodArray.val[x].on, postBack.prodArray.val[x].match, postBack.prodArray.val[x].lab_set, postBack.prodArray.val[x].spins, postBack.prodArray.val[x].iri, postBack.prodArray.val[x].wfm, postBack.prodArray.val[x].niel, postBack.prodArray.val[x].cat_name, postBack.prodArray.val[x].fam_id, postBack.prodArray.val[x].tt, postBack.prodArray.val[x].labels, postBack.prodArray.val[x].m_over, postBack.prodArray.val[x].p_size, postBack.prodArray.val[x].fam_name, postBack.prodArray.val[x].on_ret, postBack.prodArray.val[x].on_ret_prod, postBack.prodArray.val[x].order, postBack.prodArray.val[x].name_fr, postBack.prodArray.val[x].cat_fr, postBack.prodArray.val[x].fam_fr, postBack.prodArray.val[x].gtin, postBack.prodArray.val[x].name_es, postBack.prodArray.val[x].cat_es, postBack.prodArray.val[x].fam_es, postBack.prodArray.val[x].name_de, postBack.prodArray.val[x].cat_de, postBack.prodArray.val[x].fam_de, postBack.prodArray.val[x].name_it, postBack.prodArray.val[x].cat_it, postBack.prodArray.val[x].fam_it, postBack.prodArray.val[x].diet];
					window["panel1ProductNameVar" + postBack.prodArray.val[x].id] = postBack.prodArray.val[x].on;
					prodX++;
				}
				else if (postBack.prodArray.val[x].high_p == 2) {
					prodDiscontinuedArray[discX]=[postBack.prodArray.val[x].id, postBack.prodArray.val[x].p_id, postBack.prodArray.val[x].name, postBack.prodArray.val[x].desc, postBack.prodArray.val[x].b_img, postBack.prodArray.val[x].s_img, postBack.prodArray.val[x].high_p, postBack.prodArray.val[x].check, postBack.prodArray.val[x].cat_id, postBack.prodArray.val[x].on, postBack.prodArray.val[x].match, postBack.prodArray.val[x].lab_set, postBack.prodArray.val[x].spins, postBack.prodArray.val[x].iri, postBack.prodArray.val[x].wfm, postBack.prodArray.val[x].niel, postBack.prodArray.val[x].cat_name, postBack.prodArray.val[x].fam_id, postBack.prodArray.val[x].tt, postBack.prodArray.val[x].labels, postBack.prodArray.val[x].m_over, postBack.prodArray.val[x].p_size, postBack.prodArray.val[x].fam_name, postBack.prodArray.val[x].on_ret, postBack.prodArray.val[x].on_ret_prod, postBack.prodArray.val[x].order, postBack.prodArray.val[x].name_fr, postBack.prodArray.val[x].cat_fr, postBack.prodArray.val[x].fam_fr, postBack.prodArray.val[x].gtin, postBack.prodArray.val[x].name_es, postBack.prodArray.val[x].cat_es, postBack.prodArray.val[x].fam_es, postBack.prodArray.val[x].name_de, postBack.prodArray.val[x].cat_de, postBack.prodArray.val[x].fam_de, postBack.prodArray.val[x].name_it, postBack.prodArray.val[x].cat_it, postBack.prodArray.val[x].fam_it, postBack.prodArray.val[x].diet];
					discX++;
				}
				else if (postBack.prodArray.val[x].high_p == 3) {
					prodPrereleaseArray[prerX]=[postBack.prodArray.val[x].id, postBack.prodArray.val[x].p_id, postBack.prodArray.val[x].name, postBack.prodArray.val[x].desc, postBack.prodArray.val[x].b_img, postBack.prodArray.val[x].s_img, postBack.prodArray.val[x].high_p, postBack.prodArray.val[x].check, postBack.prodArray.val[x].cat_id, postBack.prodArray.val[x].on, postBack.prodArray.val[x].match, postBack.prodArray.val[x].lab_set, postBack.prodArray.val[x].spins, postBack.prodArray.val[x].iri, postBack.prodArray.val[x].wfm, postBack.prodArray.val[x].niel, postBack.prodArray.val[x].cat_name, postBack.prodArray.val[x].fam_id, postBack.prodArray.val[x].tt, postBack.prodArray.val[x].labels, postBack.prodArray.val[x].m_over, postBack.prodArray.val[x].p_size, postBack.prodArray.val[x].fam_name, postBack.prodArray.val[x].on_ret, postBack.prodArray.val[x].on_ret_prod, postBack.prodArray.val[x].order, postBack.prodArray.val[x].name_fr, postBack.prodArray.val[x].cat_fr, postBack.prodArray.val[x].fam_fr, postBack.prodArray.val[x].gtin, postBack.prodArray.val[x].name_es, postBack.prodArray.val[x].cat_es, postBack.prodArray.val[x].fam_es, postBack.prodArray.val[x].name_de, postBack.prodArray.val[x].cat_de, postBack.prodArray.val[x].fam_de, postBack.prodArray.val[x].name_it, postBack.prodArray.val[x].cat_it, postBack.prodArray.val[x].fam_it, postBack.prodArray.val[x].diet];
					prerX++;
				}
			}
			sortCol(prodDisplayArray,25);
		}
		if(gLog==1){console.log("p1Connect - Products (active/discontinued/prerelease): ",prodX,discX,prerX);}
		prodSelString = postBack.prodSelString;
		document.getElementById('FULLPROD').value = postBack.prodSelString;
		if(gLog==1){console.log("p1Connect - FULLPROD: ",postBack.prodSelString);}
		upcFilterArr.length = 0;
		if (rfrConfigArr.length) {
			if(gLog==1){console.log("p1Connect - rfrConfigArr.length: ",rfrConfigArr.length);}
			for (p=0; p<prodDisplayArray.length; p++) {
				if (prodDisplayArray[p][1] == rfrConfigArr[0][2]) {
					upcFilterArr[0] = prodDisplayArray[p];
					if(gLog==1){console.log("p1Connect - upcFilterArr: ",upcFilterArr[0]);}
					break;
				}
			}
		}
		if (upcFilterArr.length == 0) {
			if (foundProducts != 0) {
				upcFilterArr[0] = prodDisplayArray[0];
			}
			else {
				upcFilterArr[0]=[999999999, "00000000000000", "Product Not Found", "", "", "", 1, 0, 1, 1, 1, 0, "", "", "", "", "", 1, "", "", 0, "", "", "", "", 1, "", "", "", "00000000000000", "", "", "", "", "", "", "", "", "", ""];
			}
		}
		if (postBack.storeFamArray.count != 0) {
			storeFamArray.length = 0;
			for (x=0; x<postBack.storeFamArray.count; x++) {
				storeFamArray[x]=[postBack.storeFamArray.val[x].id, postBack.storeFamArray.val[x].name, postBack.storeFamArray.val[x].b_img, postBack.storeFamArray.val[x].s_img, postBack.storeFamArray.val[x].on];
				window["panel1StoreFamilyNameVar" + postBack.storeFamArray.val[x].id] = 0;
			}
		}
		if (postBack.storeCatArray.count != 0) {
			storeCatArray.length = 0;
			for (x=0; x<postBack.storeCatArray.count; x++) {
				storeCatArray[x]=[postBack.storeCatArray.val[x].id, postBack.storeCatArray.val[x].name, postBack.storeCatArray.val[x].fam_id, postBack.storeCatArray.val[x].b_img, postBack.storeCatArray.val[x].s_img, postBack.storeCatArray.val[x].m_pin, postBack.storeCatArray.val[x].l_pin, postBack.storeCatArray.val[x].color, postBack.storeCatArray.val[x].on];
				window["panel1StoreCategoryNameVar" + postBack.storeCatArray.val[x].id] = 0;
			}
		}
		if (postBack.parentArray.count != 0) {
			parentArray.length = 0;
			for (x=0; x<postBack.parentArray.count; x++) {
				parentArray[x]=[postBack.parentArray.val[x].id, postBack.parentArray.val[x].name, postBack.parentArray.val[x].desc, postBack.parentArray.val[x].img, postBack.parentArray.val[x].code, postBack.parentArray.val[x].on];
			}
		}
		if (postBack.parentChildArray.count != 0) {
			parentChildArray.length = 0;
			for (x=0; x<postBack.parentChildArray.count; x++) {
				parentChildArray[x]=[postBack.parentChildArray.val[x].id, postBack.parentChildArray.val[x].p_id, postBack.parentChildArray.val[x].c_id];
			}
		}
		if (postBack.childArray.count != 0) {
			childArray.length = 0;
			for (x=0; x<postBack.childArray.count; x++) {
				childArray[x]=[postBack.childArray.val[x].id, postBack.childArray.val[x].name, postBack.childArray.val[x].desc, postBack.childArray.val[x].img, postBack.childArray.val[x].code, postBack.childArray.val[x].on];
			}
		}
		if (postBack.childLabelArray.count != 0) {
			childLabelArray.length = 0;
			for (x=0; x<postBack.childLabelArray.count; x++) {
				childLabelArray[x]=[postBack.childLabelArray.val[x].id, postBack.childLabelArray.val[x].c_id, postBack.childLabelArray.val[x].l_id];
			}
		}
		if (postBack.labelFamilyArray.count != 0) {
			labelFamilyArray.length = 0;
			for (x=0; x<postBack.labelFamilyArray.count; x++) {
				labelFamilyArray[x]=[postBack.labelFamilyArray.val[x].id, postBack.labelFamilyArray.val[x].name, postBack.labelFamilyArray.val[x].order];
			}
		}
		if (postBack.labelArray.count != 0) {
			labelArray.length = 0;
			var tcl = 0;
			for (x=0; x<postBack.labelArray.count; x++) {
				if (postBack.labelArray.val[x].count != 0 || postBack.labelArray.val[x].group_count != 0) {
					labelArray[tcl]=[postBack.labelArray.val[x].id, postBack.labelArray.val[x].name, postBack.labelArray.val[x].desc, postBack.labelArray.val[x].on, postBack.labelArray.val[x].code, postBack.labelArray.val[x].class_id, postBack.labelArray.val[x].b_img, postBack.labelArray.val[x].s_img, postBack.labelArray.val[x].child, postBack.labelArray.val[x].sub, postBack.labelArray.val[x].fam_id, postBack.labelArray.val[x].count, postBack.labelArray.val[x].name_fr, postBack.labelArray.val[x].name_es, postBack.labelArray.val[x].name_de, postBack.labelArray.val[x].name_it, postBack.labelArray.val[x].famlabel, postBack.labelArray.val[x].showLabel, postBack.labelArray.val[x].labelSort, "", postBack.labelArray.val[x].group_count];
					tcl++;
				}
			}
		}
		if (postBack.prodLabelArray.count != 0) {
			prodLabelArray.length = 0;
			for (x=0; x<postBack.prodLabelArray.count; x++) {
				prodLabelArray[x]=[postBack.prodLabelArray.val[x].id, postBack.prodLabelArray.val[x].p_id, postBack.prodLabelArray.val[x].l_id];
			}
		}
		if (postBack.prodGroupArray.count != 0) {
			prodGroupArray.length = 0;
			for (x=0; x<postBack.prodGroupArray.count; x++) {
				prodGroupArray[x]=[postBack.prodGroupArray.val[x].id, postBack.prodGroupArray.val[x].name, postBack.prodGroupArray.val[x].code, postBack.prodGroupArray.val[x].bigImg, postBack.prodGroupArray.val[x].smImg, postBack.prodGroupArray.val[x].sort, postBack.prodGroupArray.val[x].on, postBack.prodGroupArray.val[x].pList, postBack.prodGroupArray.val[x].pCount, postBack.prodGroupArray.val[x].lList, postBack.prodGroupArray.val[x].dList, postBack.prodGroupArray.val[x].fList];
			}
		}
		if (postBack.prodGroupLabelArray.count != 0) {
			prodGroupLabelArray.length = 0;
			for (x=0; x<postBack.prodGroupLabelArray.count; x++) {
				prodGroupLabelArray[x]=[postBack.prodGroupLabelArray.val[x].id, postBack.prodGroupLabelArray.val[x].g_id, postBack.prodGroupLabelArray.val[x].l_id];
			}
		}
		if (postBack.dietArray.count != 0) {
			dietArray.length = 0;
			for (x=0; x<postBack.dietArray.count; x++) {
				dietArray[x]=[postBack.dietArray.val[x].id, postBack.dietArray.val[x].name, postBack.dietArray.val[x].code, postBack.dietArray.val[x].on, postBack.dietArray.val[x].dietSort, postBack.dietArray.val[x].count];
			}
		}
		if(gLog==1){
			if (postBack.error_count != 0) {
				for (e=0; e<postBack.error_count; e++) {
					console.log("p1Connect - Error: ",postBack.errors[e].error_code,postBack.errors[e].error_level,postBack.errors[e].error_scope,postBack.errors[e].error_desc);
				}
			}
		}
		productsAreLoaded = 1;
		mktCalled = postBack.MKTC;
		genericCloseMe();
		if (atlantis == 0){panel1Hit(postBack.time_elapsed);}
		p1LoadType = postBack.load_type;
		if (p1TemplateSet.panel1BaseDiv) {
			if(gLog==1){console.log("p1Connect - No p1TemplateFetch");}
			if (p1LoadType != 0) {
				panel1Load(p1LoadType);
			}
			else {
				panel1Load();
			}
		}
		else {
			if (postBack.writeCP == 1) {
				cpWrite(1);
			}
			else {
				p1TemplateFetch();
			}
		}
	});
}
function p1TemplateFetch() {
	p1TemplateList['TBN'] = t_browser_name;
	p1TemplateList['TBV'] = t_browser_version;
	p1TemplateList['TON'] = t_os_name;
	p1TemplateList['TOV'] = t_os_version;
	p1TemplateList['TEN'] = t_engine_name;
	p1TemplateList['TEV'] = t_engine_version;
	p1TemplateList["panel1BaseDiv"] = 1;
	p1TemplateList["panel1ProducerDiv"] = producerArray.length;
	p1TemplateList["panel1FamilyDiv"] = 1;
	p1TemplateList["panel1CategoryDiv"] = 1;
	p1TemplateList["panel1ProductDiv"] = 1;
	p1TemplateList["panel1CatProductDiv"] = 1;
	p1TemplateList["panel1StoreFamilyDiv"] = storeFamArray.length;
	p1TemplateList["panel1StoreCategoryDiv"] = storeCatArray.length;
	p1TemplateList["panel1ProductCartHead"] = 1;
	p1TemplateList["panel1ProductCartDiv"] = 1;
	p1TemplateList["panel1ProductCartFoot"] = 1;
	p1TemplateList["panel1ProductPopupDiv"] = 1;
	p1TemplateList["panel1NoProductsDiv"] = 1;
	p1TemplateList["panel1NoFilterProductsDiv"] = 1;
	p1TemplateList["panel1FilterModalDiv"] = 1;
	p1TemplateList["panel1Filter1LabelDiv"] = 1;
	p1TemplateList["panel1Filter1FamDiv"] = 1;
	p1TemplateList["panel1Filter2Div"] = 1;
	p1TemplateList["panel1Filter3HeadDiv"] = 1;
	p1TemplateList["panel1Filter3ProdDiv"] = 1;
	p1TemplateList["panel1CatModalStartDiv"] = 1;
	p1TemplateList["panel1CatModalItemDiv"] = 1;
	p1TemplateList["panel1CatModalEndDiv"] = 1;
	p1TemplateList["panel1CatModalMobStartDiv"] = 1;
	p1TemplateList["panel1CatModalMobItemDiv"] = 1;
	p1TemplateList["panel1CatModalMobEndDiv"] = 1;
	p1TemplateList["panel1LabCatParentStartDiv"] = prodLabelArray.length;
	p1TemplateList["panel1LabCatParentDiv"] = prodLabelArray.length;
	p1TemplateList["panel1LabCatParentEndDiv"] = prodLabelArray.length;
	p1TemplateList["panel1LabCatChildStartDiv"] = prodLabelArray.length;
	p1TemplateList["panel1LabCatChildDiv"] = prodLabelArray.length;
	p1TemplateList["panel1LabCatChildEndDiv"] = prodLabelArray.length;
	p1TemplateList["panel1LabCatSubStartDiv"] = prodLabelArray.length;
	p1TemplateList["panel1LabCatSubDiv"] = prodLabelArray.length;
	p1TemplateList["panel1LabCatSubEndDiv"] = prodLabelArray.length;
	p1TemplateList["panel1LabCatProductStartDiv"] = prodLabelArray.length;
	p1TemplateList["panel1LabCatProductDiv"] = prodLabelArray.length;
	p1TemplateList["panel1LabCatProductEndDiv"] = prodLabelArray.length;
	p1TemplateList["panel1ParentDiv"] = parentArray.length;
	p1TemplateList["panel1ParentOverDiv"] = parentArray.length;
	p1TemplateList["panel1ParentMenuDiv"] = parentArray.length;
	p1TemplateList["panel1ParentMenuOverDiv"] = parentArray.length;
	p1TemplateList["panel1ProductTabDiv"] = allOnOne;
	p1TemplateList["panel1ProductAreaDiv"] = allOnOne;
	p1TemplateList["panel1ShopCartTabDiv"] = allOnOne;
	p1TemplateList["panel1ShopCartAreaDiv"] = allOnOne;
	p1TemplateList["panel1StoreTabDiv"] = allOnOne;
	p1TemplateList["panel1StoreAreaDiv"] = allOnOne;
	p1TemplateList["panel1OnlineTabDiv"] = allOnOne;
	p1TemplateList["panel1OnlineAreaDiv"] = allOnOne;
	p1TemplateList["panel1LocListStartDiv"] = allOnOne;
	p1TemplateList["panel1LocListDiv"] = allOnOne;
	p1TemplateList["panel1LocListSplitDiv"] = allOnOne;
	p1TemplateList["panel1LocListDetailDiv"] = allOnOne;
	p1TemplateList["panel1LocListProductsDiv"] = allOnOne;
	p1TemplateList["panel1LocNoResDiv"] = allOnOne;
	p1TemplateList["panel1InfoWindowDiv"] = allOnOne;
	p1TemplateList["panel1AllProductsDiv"] = allOnOne;
	p1TemplateList["panel1DiscFamilyDiv"] = allOnOne;
	p1TemplateList["panel1DiscCategoryDiv"] = allOnOne;
	p1TemplateList["panel1DiscProductDiv"] = allOnOne;
	p1TemplateList["panel1EmailModalDirectionsDiv"] = allOnOne;
	p1TemplateList["panel1EmailModalStoreListDiv"] = allOnOne;
	p1TemplateList["panel1EmailModalFinalDiv"] = allOnOne;
	p1TemplateList["panel1EmailModalNewDiv"] = allOnOne;
	p1TemplateList["panel1ProdSelectStartDiv"] = allOnOne;
	p1TemplateList["panel1ProdSelectItemDiv"] = allOnOne;
	p1TemplateList["panel1ProdSelectEndDiv"] = allOnOne;
	p1TemplateList["panel1PaginationStartDiv"] = 1;
	p1TemplateList["panel1PaginationItemDiv"] = 1;
	p1TemplateList["panel1PaginationEndDiv"] = 1;
	p1TemplateList["panel1RedrawBrandLabelDiv"] = 1;
	p1TemplateList["panel1GroupDiv"] = prodGroupArray.length;
	p1TemplateList["panel1GroupHoverSelDiv"] = prodGroupArray.length;
	p1TemplateList["panel1GroupHoverNoSelDiv"] = prodGroupArray.length;
	p1TemplateList["panel1GroupModalStartDiv"] = 1;
	p1TemplateList["panel1GroupModalItemDiv"] = 1;
	p1TemplateList["panel1GroupModalEndDiv"] = 1;
	p1TemplateList["templateRoot"] = templateRoot;
	p1TemplateList["coreClient"] = coreClient;
	p1TemplateList["CB"] = noCache;
	if(gLog==1){console.log("p1TemplateFetch - Start",p1TemplateList);}
	$.post(controlURL + scriptVersion + "/panel1Templates.php", p1TemplateList, function(data){
		p1TemplateSet = data;
		if(gLog==1){console.log("p1TemplateFetch - Response: ",p1TemplateSet);}
		if(gLog==1){
			if (p1TemplateSet.error_count != 0) {
				for (e=0; e<p1TemplateSet.error_count; e++) {
					console.log("p1TemplateFetch - Error: ",p1TemplateSet.errors[e].error_code,p1TemplateSet.errors[e].error_level,p1TemplateSet.errors[e].error_scope,p1TemplateSet.errors[e].error_desc);
				}
			}
		}
		if (p1LoadType != 0) {
			panel1Load(p1LoadType);
		}
		else {
			panel1Load();
		}
	});
}
function p2Connect(sp) {
	$(".panel_2_preload_hide").hide();
	$("#panel2LocPrelistShell").hide();
	rteStoreObj.val.length = 0;
	if (atlantis == 0 || (atlantis == 1 && cpAtlantis == 0)) {
		loaderToggle(1);
	}
	var sendProd = document.getElementById("PROD").value;
	if (document.getElementById("PROD").value.length == document.getElementById("FULLPROD").value.length) {sendProd = "";}
	if (sp) {
		urlParamArray[urlParamArray.length] = ["SP1", 1];
		if (BPS != "") {
			urlParamArray[urlParamArray.length] = ["BPS", BPS];
		}
	}
	urlParamArray[urlParamArray.length] = ["productPreset", productPreset];
	urlParamArray[urlParamArray.length] = ["CB", noCache];
	urlParamArray[urlParamArray.length] = ["TLL", tlVal];
	urlParamArray[urlParamArray.length] = ["BMB", bmBypass];
	urlParamArray[urlParamArray.length] = ["GLOG", gLog];
	urlParamArray[urlParamArray.length] = ["MKTC", mktCalled];
	urlParamArray[urlParamArray.length] = ["numPost", numPost];
	urlParamArray[urlParamArray.length] = ["MKTON", MKTON];
	urlParamArray[urlParamArray.length] = ["NCID", NCID];
	urlParamArray[urlParamArray.length] = ["APO", APO];
	urlParamArray[urlParamArray.length] = ["UTMC", utm_campaign];
	urlParamArray[urlParamArray.length] = ["VINC", VINC];
	var thisCTRY = 1;
	if (document.getElementById('revCodeCountry').value == "US" || document.getElementById('revCodeCountry').value == "USA") {
		thisCTRY = 1;
	}
	else if (document.getElementById('revCodeCountry').value == "CA" || document.getElementById('revCodeCountry').value == "CAN") {
		thisCTRY = 2;
	}
	urlParamArray[urlParamArray.length] = ["DEFCTRY", thisCTRY];
	urlParamArray[urlParamArray.length] = ["PAGE", PAGE];
	var thisZIP = 0;
	var thisLA = 0;
	var thisLO = 0;
	var thisPROD = 0;
	var thisGROUP = 0;
	var thisSTYPE = 0;
	var thisSCAT = 0;
	var thisCLIENT = 0;
	var thisITER = 0;
	var thisRFR = 0;
	if (saveASSC == "") {
		var thisASSC = 1;
	}
	else {
		var thisASSC = 0;
	}
	var thisBEC = 0;
	var thisBBM = 0;
	for (q=0; q<urlParamArray.length; q++) {
		if (urlParamArray[q][0] == "BEC") {
			thisBEC++;
		}
		if (urlParamArray[q][0] == "BBM") {
			thisBBM++;
		}
		if (urlParamArray[q][0] == "ASSC" && thisASSC == 0) {
			urlParamArray[q][1] = saveASSC;
			thisASSC++;
		}
		if (urlParamArray[q][0] == "ZIP" && thisZIP == 0) {
			urlParamArray[q][1] = document.getElementById('revCodeZip').value;
			thisZIP++;
		}
		if (urlParamArray[q][0] == "LA" && thisLA == 0) {
			urlParamArray[q][1] = document.getElementById('LA').value;
			thisLA++;
		}
		if (urlParamArray[q][0] == "LO" && thisLO == 0) {
			urlParamArray[q][1] = document.getElementById('LO').value;
			thisLO++;
		}
		if (urlParamArray[q][0] == "PROD" && thisPROD == 0) {
			urlParamArray[q][1] = sendProd;
			thisPROD++;
		}
		if (urlParamArray[q][0] == "GROUP" && thisGROUP == 0) {
			urlParamArray[q][1] = document.getElementById('GROUP').value;
			thisGROUP++;
		}
		if (urlParamArray[q][0] == "STYPE" && thisSTYPE == 0) {
			urlParamArray[q][1] = document.getElementById('SCAT').value;
			thisSTYPE++;
		}
		if (urlParamArray[q][0] == "SCAT" && thisSCAT == 0 && coreSCat != "") {
			urlParamArray[q][1] = coreSCat;
			thisSCAT++;
		}
		if (urlParamArray[q][0] == "CLIENT" && thisCLIENT == 0) {
			urlParamArray[q][1] = coreClient;
			thisCLIENT++;
		}
		if (urlParamArray[q][0] == "ITER" && thisITER == 0) {
			urlParamArray[q][1] = iteration;
			thisITER++;
		}
		if (urlParamArray[q][0] == "RFR" && thisRFR == 0) {
			urlParamArray[q][1] = referer;
			thisRFR++;
		}
	}
	if (thisBEC == 0) {
		urlParamArray[urlParamArray.length] = ["BEC", BEC];
	}
	if (thisBBM == 0) {
		urlParamArray[urlParamArray.length] = ["BBM", BBM];
	}
	if (thisASSC == 0) {
		urlParamArray[urlParamArray.length] = ["ASSC", saveASSC];
	}
	if (thisZIP == 0) {
		urlParamArray[urlParamArray.length] = ["ZIP", document.getElementById('revCodeZip').value];
	}
	if (thisLA == 0) {
		urlParamArray[urlParamArray.length] = ["LA", document.getElementById('LA').value];
	}
	if (thisLO == 0) {
		urlParamArray[urlParamArray.length] = ["LO", document.getElementById('LO').value];
	}
	if (thisPROD == 0) {
		urlParamArray[urlParamArray.length] = ["PROD", sendProd];
	}
	if (thisGROUP == 0) {
		urlParamArray[urlParamArray.length] = ["GROUP", document.getElementById('GROUP').value];
	}
	if (thisSTYPE == 0) {
		urlParamArray[urlParamArray.length] = ["STYPE", document.getElementById('STYPE').value];
	}
	if (thisSCAT == 0 && coreSCat != "") {
		urlParamArray[urlParamArray.length] = ["SCAT", document.getElementById('SCAT').value];
	}
	if (thisCLIENT == 0) {
		urlParamArray[urlParamArray.length] = ["CLIENT", coreClient];
	}
	if (thisITER == 0) {
		urlParamArray[urlParamArray.length] = ["ITER", iteration];
	}
	if (thisRFR == 0) {
		urlParamArray[urlParamArray.length] = ["RFR", referer];
	}
	var param = {};
	if (urlParamArray.length) {
		for (l=0;l<urlParamArray.length;l++) {
			if (urlParamArray[l][0] !== undefined) {
				param[urlParamArray[l][0]] = urlParamArray[l][1];
			}
		}
	}
	if (gtm != 0) {
		var thisZip = "NULL";
		if (document.getElementById('revCodeZip').value != "") {thisZip = document.getElementById('revCodeZip').value;}
		GTMit("SRCHLCTN", "submit", document.getElementById('LA').value + "|" + document.getElementById('LO').value + "|" + thisZip + "|" + document.getElementById('revCodeState').value + "|" + document.getElementById('revCodeCountry').value,true);
		if (sendProd == "") {
			GTMit("PRDCTSEL", "submit", "ALL",true);
		}
		else {
			GTMit("PRDCTSEL", "submit", sendProd.replace(/,/g, '|'),true);
		}
	}
	if(gLog==1){console.log("p2Connect - Params: ",param);}
	$.post(controlURL + scriptVersion + "/panel2Connect.php", param, function(data){
		var postBack = JSON.parse(data);
		if(gLog==1){console.log("p2Connect - Response: ",postBack);}
		urlParamArray.length = 0;
		p2SearchMade = postBack.p2SearchMade;
		if(gLog==1){console.log("p2Connect - p2SearchMade: ",p2SearchMade);}
		if (postBack.premiseArray.count != 0 && premiseArray.length == 0) {
			premiseArray.length = 0;
			for (x=0; x<postBack.premiseArray.count; x++) {
				premiseArray[x]=[postBack.premiseArray.val[x].id, postBack.premiseArray.val[x].name, postBack.premiseArray.val[x].code, postBack.premiseArray.val[x].parent, postBack.premiseArray.val[x].bigImg, postBack.premiseArray.val[x].smImg, postBack.premiseArray.val[x].sort, postBack.premiseArray.val[x].on];
			}
		}
		if(gLog==1){console.log("p2Connect - Premise Count: ",postBack.premiseArray.count);}
		if (postBack.onretClientArray.count != -1) {
			onretClientArray.length = 0;
			if (postBack.onretClientArray.count != 0) {
				var orCN = 0;
				for (x=0; x<postBack.onretClientArray.count; x++) {
					if (postBack.onretClientArray.val[x].inc != -1) {
						onretClientArray[orCN]=[postBack.onretClientArray.val[x].id, postBack.onretClientArray.val[x].ret_id, postBack.onretClientArray.val[x].text, postBack.onretClientArray.val[x].web, postBack.onretClientArray.val[x].mobile, postBack.onretClientArray.val[x].inc, postBack.onretClientArray.val[x].name, postBack.onretClientArray.val[x].image, postBack.onretClientArray.val[x].type, postBack.onretClientArray.val[x].sort, postBack.onretClientArray.val[x].no_prod, postBack.onretClientArray.val[x].rtEcomm, postBack.onretClientArray.val[x].rtEndpoint];
						orCN++;
					}
				}
				sortCol(onretClientArray,9);
			}
		}
		if (postBack.onretZipArray.count != 0) {
			onretZipArray.length = 0;
			for (x=0; x<postBack.onretZipArray.count; x++) {
				onretZipArray[x]=[postBack.onretZipArray.val[x].id, postBack.onretZipArray.val[x].ret_id, postBack.onretZipArray.val[x].zip];
			}
		}
		if (postBack.onretProdArray.count != -1) {
			onretProdArray.length = 0;
			if (postBack.onretProdArray.count != 0) {
				var onretSrcL = 0;
				var onretSrcMT = 0;
				var onretSrcSM = 0;
				for (x=0; x<postBack.onretProdArray.count; x++) {
					onretProdArray[x]=[postBack.onretProdArray.val[x].id, postBack.onretProdArray.val[x].ret_id, postBack.onretProdArray.val[x].prod_id, postBack.onretProdArray.val[x].web, postBack.onretProdArray.val[x].mobile, postBack.onretProdArray.val[x].connotate, postBack.onretProdArray.val[x].price, postBack.onretProdArray.val[x].available, postBack.onretProdArray.val[x].dedup, postBack.onretProdArray.val[x].source, postBack.onretProdArray.val[x].filter_on, postBack.onretProdArray.val[x].rtEndpoint];
					if (postBack.onretProdArray.val[x].source == 1) {
						onretSrcL++;
					}
					else if (postBack.onretProdArray.val[x].source == 2) {
						mktArr[onretSrcMT]=[postBack.onretProdArray.val[x].id, postBack.onretProdArray.val[x].ret_id, postBack.onretProdArray.val[x].prod_id, postBack.onretProdArray.val[x].web, postBack.onretProdArray.val[x].mobile, postBack.onretProdArray.val[x].connotate, postBack.onretProdArray.val[x].price, postBack.onretProdArray.val[x].available, postBack.onretProdArray.val[x].dedup, postBack.onretProdArray.val[x].source, postBack.onretProdArray.val[x].filter_on, postBack.onretProdArray.val[x].rtEndpoint];
						onretSrcMT++;
					}
					else if (postBack.onretProdArray.val[x].source == 4) {
						onretSrcSM++;
					}
				}
				if (mktCalled == 1) {
					for (q=0; q<mktArr.length; q++) {
						onretProdArray[onretProdArray.length] = mktArr[q];
					}
				}
			}
		}
		if (postBack.onretClientArray.count != 0 || postBack.onretZipArray.count != 0 || postBack.onretProdArray.count != 0) {
			if(gLog==1){console.log("p2Connect - Online Retailers (client/zip/prod): ",postBack.onretClientArray.count,postBack.onretZipArray.count,postBack.onretProdArray.count,onretProdArray);}
			if(gLog==1){console.log("p2Connect - Result Sources (local/MT/Sem3): ",onretSrcL,onretSrcMT,onretSrcSM);}
		}
		if (postBack.classArray.count != 0) {
			classArray.length = 0;
			for (x=0; x<postBack.classArray.count; x++) {
				classArray[x]=[postBack.classArray.val[x].id, postBack.classArray.val[x].name, postBack.classArray.val[x].b_img, postBack.classArray.val[x].s_img, postBack.classArray.val[x].code, postBack.classArray.val[x].on];
			}
		}
		if (postBack.stockArray.count != 0) {
			stockArray.length = 0;
			for (x=0; x<postBack.stockArray.count; x++) {
				stockArray[x]=[postBack.stockArray.val[x].id, postBack.stockArray.val[x].name];
			}
		}
		if (postBack.stocklocArray.count != 0) {
			stocklocArray.length = 0;
			for (x=0; x<postBack.stocklocArray.count; x++) {
				stocklocArray[x]=[postBack.stocklocArray.val[x].id, postBack.stocklocArray.val[x].name, postBack.stocklocArray.val[x].desc, postBack.stocklocArray.val[x].link];
			}
		}
		var noFam = 0;
		var famX = 0;
		if (postBack.famArray.count != 0) {
			famArray.length = 0;
			for (x=0; x<postBack.famArray.count; x++) {
				if (postBack.famArray.val[x].num_cats != 0) {
					famArray[famX]=[postBack.famArray.val[x].id, postBack.famArray.val[x].name, postBack.famArray.val[x].b_img, postBack.famArray.val[x].s_img, postBack.famArray.val[x].code, postBack.famArray.val[x].on, postBack.famArray.val[x].num_cats, postBack.famArray.val[x].name_fr, postBack.famArray.val[x].name_es, postBack.famArray.val[x].name_de, postBack.famArray.val[x].name_it];
					window["panel1FamilyNameVar" + postBack.famArray.val[x].id] = postBack.famArray.val[x].on;
					famX++;
				}
				else {
					noFam++;
				}
			}
			if(gLog==1){console.log("p2Connect - Families (active/inactive): ",famX,noFam);}
		}
		var noCat = 0;
		var catX = 0;
		if (postBack.catArray.count != 0) {
			catArray.length = 0;
			for (x=0; x<postBack.catArray.count; x++) {
				if (postBack.catArray.val[x].num_cats != 0) {
					catArray[catX]=[postBack.catArray.val[x].id, postBack.catArray.val[x].name, postBack.catArray.val[x].fam_id, postBack.catArray.val[x].b_img, postBack.catArray.val[x].s_img, postBack.catArray.val[x].code, postBack.catArray.val[x].on, postBack.catArray.val[x].num_cats, postBack.catArray.val[x].cat_tot, postBack.catArray.val[x].cat_some, postBack.catArray.val[x].name_fr, postBack.catArray.val[x].name_es, postBack.catArray.val[x].name_de, postBack.catArray.val[x].name_it];
					window["panel1CategoryNameVar" + postBack.catArray.val[x].id] = postBack.catArray.val[x].on;
					catX++;
				}
				else {
					noCat++;
				}
			}
			if(gLog==1){console.log("p2Connect - Categories (active/inactive): ",catX,noCat);}
		}
		var prodX = 0;
		var discX = 0;
		var prerX = 0;
		foundProducts = postBack.foundCount;
		if (postBack.prodArray.count != 0) {
			prodArray.length = 0;
			for (x=0; x<postBack.prodArray.count; x++) {
				if (postBack.prodArray.val[x].high_p == 1 || postBack.prodArray.val[x].high_p == 4 || (postBack.prodArray.val[x].high_p != 0 && sHP == 1)) {
					prodArray[prodX]=[postBack.prodArray.val[x].id, postBack.prodArray.val[x].p_id, postBack.prodArray.val[x].name, postBack.prodArray.val[x].desc, postBack.prodArray.val[x].b_img, postBack.prodArray.val[x].s_img, postBack.prodArray.val[x].high_p, postBack.prodArray.val[x].check, postBack.prodArray.val[x].cat_id, postBack.prodArray.val[x].on, postBack.prodArray.val[x].match, postBack.prodArray.val[x].lab_set, postBack.prodArray.val[x].spins, postBack.prodArray.val[x].iri, postBack.prodArray.val[x].wfm, postBack.prodArray.val[x].niel, postBack.prodArray.val[x].cat_name, postBack.prodArray.val[x].fam_id, postBack.prodArray.val[x].tt, postBack.prodArray.val[x].labels, postBack.prodArray.val[x].m_over, postBack.prodArray.val[x].p_size, postBack.prodArray.val[x].fam_name, postBack.prodArray.val[x].on_ret, postBack.prodArray.val[x].on_ret_prod, postBack.prodArray.val[x].order, postBack.prodArray.val[x].name_fr, postBack.prodArray.val[x].cat_fr, postBack.prodArray.val[x].fam_fr, postBack.prodArray.val[x].gtin, postBack.prodArray.val[x].name_es, postBack.prodArray.val[x].cat_es, postBack.prodArray.val[x].fam_es, postBack.prodArray.val[x].name_de, postBack.prodArray.val[x].cat_de, postBack.prodArray.val[x].fam_de, postBack.prodArray.val[x].name_it, postBack.prodArray.val[x].cat_it, postBack.prodArray.val[x].fam_it, postBack.prodArray.val[x].diet];
					prodDisplayArray[prodX]=[postBack.prodArray.val[x].id, postBack.prodArray.val[x].p_id, postBack.prodArray.val[x].name, postBack.prodArray.val[x].desc, postBack.prodArray.val[x].b_img, postBack.prodArray.val[x].s_img, postBack.prodArray.val[x].high_p, postBack.prodArray.val[x].check, postBack.prodArray.val[x].cat_id, postBack.prodArray.val[x].on, postBack.prodArray.val[x].match, postBack.prodArray.val[x].lab_set, postBack.prodArray.val[x].spins, postBack.prodArray.val[x].iri, postBack.prodArray.val[x].wfm, postBack.prodArray.val[x].niel, postBack.prodArray.val[x].cat_name, postBack.prodArray.val[x].fam_id, postBack.prodArray.val[x].tt, postBack.prodArray.val[x].labels, postBack.prodArray.val[x].m_over, postBack.prodArray.val[x].p_size, postBack.prodArray.val[x].fam_name, postBack.prodArray.val[x].on_ret, postBack.prodArray.val[x].on_ret_prod, postBack.prodArray.val[x].order, postBack.prodArray.val[x].name_fr, postBack.prodArray.val[x].cat_fr, postBack.prodArray.val[x].fam_fr, postBack.prodArray.val[x].gtin, postBack.prodArray.val[x].name_es, postBack.prodArray.val[x].cat_es, postBack.prodArray.val[x].fam_es, postBack.prodArray.val[x].name_de, postBack.prodArray.val[x].cat_de, postBack.prodArray.val[x].fam_de, postBack.prodArray.val[x].name_it, postBack.prodArray.val[x].cat_it, postBack.prodArray.val[x].fam_it, postBack.prodArray.val[x].diet];
					window["panel1ProductNameVar" + postBack.prodArray.val[x].id] = postBack.prodArray.val[x].on;
					prodX++;
				}
				else if (postBack.prodArray.val[x].high_p == 2) {
					prodDiscontinuedArray[discX]=[postBack.prodArray.val[x].id, postBack.prodArray.val[x].p_id, postBack.prodArray.val[x].name, postBack.prodArray.val[x].desc, postBack.prodArray.val[x].b_img, postBack.prodArray.val[x].s_img, postBack.prodArray.val[x].high_p, postBack.prodArray.val[x].check, postBack.prodArray.val[x].cat_id, postBack.prodArray.val[x].on, postBack.prodArray.val[x].match, postBack.prodArray.val[x].lab_set, postBack.prodArray.val[x].spins, postBack.prodArray.val[x].iri, postBack.prodArray.val[x].wfm, postBack.prodArray.val[x].niel, postBack.prodArray.val[x].cat_name, postBack.prodArray.val[x].fam_id, postBack.prodArray.val[x].tt, postBack.prodArray.val[x].labels, postBack.prodArray.val[x].m_over, postBack.prodArray.val[x].p_size, postBack.prodArray.val[x].fam_name, postBack.prodArray.val[x].on_ret, postBack.prodArray.val[x].on_ret_prod, postBack.prodArray.val[x].order, postBack.prodArray.val[x].name_fr, postBack.prodArray.val[x].cat_fr, postBack.prodArray.val[x].fam_fr, postBack.prodArray.val[x].gtin, postBack.prodArray.val[x].name_es, postBack.prodArray.val[x].cat_es, postBack.prodArray.val[x].fam_es, postBack.prodArray.val[x].name_de, postBack.prodArray.val[x].cat_de, postBack.prodArray.val[x].fam_de, postBack.prodArray.val[x].name_it, postBack.prodArray.val[x].cat_it, postBack.prodArray.val[x].fam_it, postBack.prodArray.val[x].diet];
					discX++;
				}
				else if (postBack.prodArray.val[x].high_p == 3) {
					prodPrereleaseArray[prerX]=[postBack.prodArray.val[x].id, postBack.prodArray.val[x].p_id, postBack.prodArray.val[x].name, postBack.prodArray.val[x].desc, postBack.prodArray.val[x].b_img, postBack.prodArray.val[x].s_img, postBack.prodArray.val[x].high_p, postBack.prodArray.val[x].check, postBack.prodArray.val[x].cat_id, postBack.prodArray.val[x].on, postBack.prodArray.val[x].match, postBack.prodArray.val[x].lab_set, postBack.prodArray.val[x].spins, postBack.prodArray.val[x].iri, postBack.prodArray.val[x].wfm, postBack.prodArray.val[x].niel, postBack.prodArray.val[x].cat_name, postBack.prodArray.val[x].fam_id, postBack.prodArray.val[x].tt, postBack.prodArray.val[x].labels, postBack.prodArray.val[x].m_over, postBack.prodArray.val[x].p_size, postBack.prodArray.val[x].fam_name, postBack.prodArray.val[x].on_ret, postBack.prodArray.val[x].on_ret_prod, postBack.prodArray.val[x].order, postBack.prodArray.val[x].name_fr, postBack.prodArray.val[x].cat_fr, postBack.prodArray.val[x].fam_fr, postBack.prodArray.val[x].gtin, postBack.prodArray.val[x].name_es, postBack.prodArray.val[x].cat_es, postBack.prodArray.val[x].fam_es, postBack.prodArray.val[x].name_de, postBack.prodArray.val[x].cat_de, postBack.prodArray.val[x].fam_de, postBack.prodArray.val[x].name_it, postBack.prodArray.val[x].cat_it, postBack.prodArray.val[x].fam_it, postBack.prodArray.val[x].diet];
					prerX++;
				}
			}
			if(gLog==1){console.log("p2Connect - Products (active/discontinued/prerelease): ",prodX,discX,prerX,prodDisplayArray);}
		}
		sortCol(prodDisplayArray,25);
		prodSelString = postBack.prodSelString;
		document.getElementById('FULLPROD').value = postBack.prodSelString;
		upcFilterArr.length = 0;
		if (rfrConfigArr.length) {
			if(gLog==1){console.log("p2Connect - rfrConfigArr.length: ",rfrConfigArr.length);}
			for (p=0; p<prodDisplayArray.length; p++) {
				if (prodDisplayArray[p][1] == rfrConfigArr[0][2]) {
					upcFilterArr[0] = prodDisplayArray[p];
					break;
				}
			}
		}
		if (upcFilterArr.length == 0) {
			if (foundProducts != 0) {
				upcFilterArr[0] = prodDisplayArray[0];
			}
			else {
				upcFilterArr[0]=[999999999, "00000000000000", "Product Not Found", "", "", "", 1, 0, 1, 1, 1, 0, "", "", "", "", "", 1, "", "", 0, "", "", "", "", 1, "", "", "", "00000000000000", "", "", "", "", "", "", "", "", "", ""];
			}
		}
		if(gLog==1){console.log("p2Connect - upcFilterArr: ",upcFilterArr[0]);}
		if (postBack.storeFamArray.count != 0) {
			storeFamArray.length = 0;
			for (x=0; x<postBack.storeFamArray.count; x++) {
				storeFamArray[x]=[postBack.storeFamArray.val[x].id, postBack.storeFamArray.val[x].name, postBack.storeFamArray.val[x].b_img, postBack.storeFamArray.val[x].s_img, postBack.storeFamArray.val[x].on];
				window["panel1StoreFamilyNameVar" + postBack.storeFamArray.val[x].id] = 0;
			}
		}
		if (postBack.storeCatArray.count != 0) {
			storeCatArray.length = 0;
			for (x=0; x<postBack.storeCatArray.count; x++) {
				storeCatArray[x]=[postBack.storeCatArray.val[x].id, postBack.storeCatArray.val[x].name, postBack.storeCatArray.val[x].fam_id, postBack.storeCatArray.val[x].b_img, postBack.storeCatArray.val[x].s_img, postBack.storeCatArray.val[x].m_pin, postBack.storeCatArray.val[x].l_pin, postBack.storeCatArray.val[x].color, postBack.storeCatArray.val[x].on];
				window["panel1StoreCategoryNameVar" + postBack.storeCatArray.val[x].id] = 0;
			}
		}
		if (postBack.parentArray.count != 0) {
			parentArray.length = 0;
			for (x=0; x<postBack.parentArray.count; x++) {
				parentArray[x]=[postBack.parentArray.val[x].id, postBack.parentArray.val[x].name, postBack.parentArray.val[x].desc, postBack.parentArray.val[x].img, postBack.parentArray.val[x].code, postBack.parentArray.val[x].on];
			}
		}
		if (postBack.parentChildArray.count != 0) {
			parentChildArray.length = 0;
			for (x=0; x<postBack.parentChildArray.count; x++) {
				parentChildArray[x]=[postBack.parentChildArray.val[x].id, postBack.parentChildArray.val[x].p_id, postBack.parentChildArray.val[x].c_id];
			}
		}
		if (postBack.childArray.count != 0) {
			childArray.length = 0;
			for (x=0; x<postBack.childArray.count; x++) {
				childArray[x]=[postBack.childArray.val[x].id, postBack.childArray.val[x].name, postBack.childArray.val[x].desc, postBack.childArray.val[x].img, postBack.childArray.val[x].code, postBack.childArray.val[x].on];
			}
		}
		if (postBack.childLabelArray.count != 0) {
			childLabelArray.length = 0;
			for (x=0; x<postBack.childLabelArray.count; x++) {
				childLabelArray[x]=[postBack.childLabelArray.val[x].id, postBack.childLabelArray.val[x].c_id, postBack.childLabelArray.val[x].l_id];
			}
		}
		if (postBack.labelFamilyArray.count != 0) {
			labelFamilyArray.length = 0;
			for (x=0; x<postBack.labelFamilyArray.count; x++) {
				labelFamilyArray[x]=[postBack.labelFamilyArray.val[x].id, postBack.labelFamilyArray.val[x].name, postBack.labelFamilyArray.val[x].order];
			}
		}
		if (postBack.labelArray.count != 0) {
			labelArray.length = 0;
			var tcl = 0;
			for (x=0; x<postBack.labelArray.count; x++) {
				if (postBack.labelArray.val[x].count != 0 || postBack.labelArray.val[x].group_count != 0) {
					labelArray[tcl]=[postBack.labelArray.val[x].id, postBack.labelArray.val[x].name, postBack.labelArray.val[x].desc, postBack.labelArray.val[x].on, postBack.labelArray.val[x].code, postBack.labelArray.val[x].class_id, postBack.labelArray.val[x].b_img, postBack.labelArray.val[x].s_img, postBack.labelArray.val[x].child, postBack.labelArray.val[x].sub, postBack.labelArray.val[x].fam_id, postBack.labelArray.val[x].count, postBack.labelArray.val[x].name_fr, postBack.labelArray.val[x].name_es, postBack.labelArray.val[x].name_de, postBack.labelArray.val[x].name_it, postBack.labelArray.val[x].famlabel, postBack.labelArray.val[x].showLabel, postBack.labelArray.val[x].labelSort, "", postBack.labelArray.val[x].group_count];
					tcl++;
				}
			}
		}
		if (postBack.prodLabelArray.count != 0) {
			prodLabelArray.length = 0;
			for (x=0; x<postBack.prodLabelArray.count; x++) {
				prodLabelArray[x]=[postBack.prodLabelArray.val[x].id, postBack.prodLabelArray.val[x].p_id, postBack.prodLabelArray.val[x].l_id];
			}
		}
		if (postBack.prodGroupArray.count != 0) {
			prodGroupArray.length = 0;
			for (x=0; x<postBack.prodGroupArray.count; x++) {
				prodGroupArray[x]=[postBack.prodGroupArray.val[x].id, postBack.prodGroupArray.val[x].name, postBack.prodGroupArray.val[x].code, postBack.prodGroupArray.val[x].bigImg, postBack.prodGroupArray.val[x].smImg, postBack.prodGroupArray.val[x].sort, postBack.prodGroupArray.val[x].on, postBack.prodGroupArray.val[x].pList, postBack.prodGroupArray.val[x].pCount, postBack.prodGroupArray.val[x].lList, postBack.prodGroupArray.val[x].dList, postBack.prodGroupArray.val[x].fList];
			}
		}
		if (postBack.prodGroupLabelArray.count != 0) {
			prodGroupLabelArray.length = 0;
			for (x=0; x<postBack.prodGroupLabelArray.count; x++) {
				prodGroupLabelArray[x]=[postBack.prodGroupLabelArray.val[x].id, postBack.prodGroupLabelArray.val[x].g_id, postBack.prodGroupLabelArray.val[x].l_id];
			}
		}
		if (postBack.dietArray.count != 0) {
			dietArray.length = 0;
			for (x=0; x<postBack.dietArray.count; x++) {
				dietArray[x]=[postBack.dietArray.val[x].id, postBack.dietArray.val[x].name, postBack.dietArray.val[x].code, postBack.dietArray.val[x].on, postBack.dietArray.val[x].dietSort, postBack.dietArray.val[x].count];
			}
		}
		if (postBack.dealOBJ.dealcount != 0) {
			dealOBJ = postBack.dealOBJ;
		}
		if (postBack.resp_prod != "") {
			resp_prod = postBack.resp_prod;
			document.getElementById('PROD').value = postBack.resp_prod;
		}
		storeArray.length = 0;
		storeDisplayArray.length = 0;
		document.getElementById('STORERES').value = postBack.total_count;
		if (postBack.storeArray.count != 0) {
			for (x=0; x<postBack.storeArray.count; x++) {
				storeArray[x]=[postBack.storeArray.val[x].name, postBack.storeArray.val[x].add1, postBack.storeArray.val[x].add2, postBack.storeArray.val[x].city, postBack.storeArray.val[x].state, postBack.storeArray.val[x].zip, postBack.storeArray.val[x].lat, postBack.storeArray.val[x].lng, postBack.storeArray.val[x].df, postBack.storeArray.val[x].prod, postBack.storeArray.val[x].dist, postBack.storeArray.val[x].disp, postBack.storeArray.val[x].ch_id, postBack.storeArray.val[x].s_id, postBack.storeArray.val[x].scat, postBack.storeArray.val[x].phone, postBack.storeArray.val[x].dtype, postBack.storeArray.val[x].ch_name, postBack.storeArray.val[x].ch_b_img, postBack.storeArray.val[x].ch_s_img, postBack.storeArray.val[x].stock_id, postBack.storeArray.val[x].sloc_id, postBack.storeArray.val[x].web, postBack.storeArray.val[x].hours, postBack.storeArray.val[x].ch_local, postBack.storeArray.val[x].dup, postBack.storeArray.val[x].phone_raw, postBack.storeArray.val[x].country, postBack.storeArray.val[x].iter, postBack.storeArray.val[x].pbc_cbk, postBack.storeArray.val[x].match, postBack.storeArray.val[x].premise, postBack.storeArray.val[x].ret_code, postBack.storeArray.val[x].coupon];
			}
		}
		if(gLog==1){console.log("p2Connect - storeArray",storeArray);}
		if(gLog==1){console.log("p2Connect - (count/time) Total: " + postBack.storeArray.count + "/" + postBack.time_elapsed + " | Local:" + postBack.local_count + "/" + postBack.local_elapsed + " | SPINS:" + postBack.spins_count + "/" + postBack.spins_elapsed + " | IRI:" + postBack.iri_count + "/" + postBack.iri_elapsed + " | WFM:" + postBack.wfm_count + "/" + postBack.wfm_elapsed + " | Nielsen:" + postBack.niel_count + "/" + postBack.niel_elapsed + " | PBC:" + postBack.pbc_count + "/" + postBack.pbc_elapsed + " | TT:" + postBack.tt_count +"/" + postBack.tt_elapsed + " | VIP:" + postBack.vip_count +"/" + postBack.vip_elapsed);}
		if(gLog==1){
			if (postBack.error_count != 0) {
				for (e=0; e<postBack.error_count; e++) {
					console.log("p2Connect - Error: ",postBack.errors[e].error_code,postBack.errors[e].error_level,postBack.errors[e].error_scope,postBack.errors[e].error_desc);
				}
			}
		}
		p2RespSource = postBack.source_panel;
		p2RespAllProd = postBack.all_products;
		productsAreLoaded = 1;
		mktCalled = postBack.MKTC;
		genericCloseMe();
		if (allOnOne == 0) {
			panel2Hit(postBack.time_elapsed, postBack.local_elapsed, postBack.spins_elapsed, postBack.iri_elapsed, postBack.wfm_elapsed, postBack.niel_elapsed, postBack.pbc_elapsed, postBack.tt_elapsed);
		}
		if (p2TemplateSet.panel2BaseDiv) {
			if(gLog==1){console.log("p2Connect - No p2TemplateFetch");}
			if (allOnOne == 0) {
				panel2Load(postBack.source_panel,postBack.all_products);
			}
			else {
				panel1CompileMultiMap();
			}
		}
		else {
			if (allOnOne == 0) {
				p2TemplateFetch();
			}
			else {
				panel1CompileMultiMap();
			}
		}
		if (atlantis == 1 && cpWritten == 0) {
			cpWrite();
		}
	});
}
function p2OnDemand(sp) {
	$(".panel_2_preload_hide").hide();
	$("#panel2LocPrelistShell").hide();
	rteStoreObj.val.length = 0;
	p2FilterByUPCMap = 0;
	var sendProd = document.getElementById("PROD").value;
	if (document.getElementById("PROD").value.length == document.getElementById("FULLPROD").value.length) {sendProd = "";}
	if (sp) {
		urlParamArray[urlParamArray.length] = ["SP1", 1];
	}
	urlParamArray[urlParamArray.length] = ["productPreset", productPreset];
	urlParamArray[urlParamArray.length] = ["CB", noCache];
	urlParamArray[urlParamArray.length] = ["TLL", tlVal];
	urlParamArray[urlParamArray.length] = ["BMB", bmBypass];
	urlParamArray[urlParamArray.length] = ["GLOG", gLog];
	urlParamArray[urlParamArray.length] = ["APO", APO];
	urlParamArray[urlParamArray.length] = ["VINC", VINC];
	var thisCTRY = 0;
	if (document.getElementById('revCodeCountry').value == "US" || document.getElementById('revCodeCountry').value == "USA") {
		thisCTRY = 1;
	}
	else if (document.getElementById('revCodeCountry').value == "CA" || document.getElementById('revCodeCountry').value == "CAN") {
		thisCTRY = 2;
	}
	urlParamArray[urlParamArray.length] = ["DEFCTRY", thisCTRY];
	urlParamArray[urlParamArray.length] = ["PAGE", PAGE];
	var thisZIP = 0;
	var thisLA = 0;
	var thisLO = 0;
	var thisPROD = 0;
	var thisGROUP = 0;
	var thisSTYPE = 0;
	var thisSCAT = 0;
	var thisCLIENT = 0;
	var thisITER = 0;
	var thisRFR = 0;
	if (saveASSC == "") {
		var thisASSC = 1;
	}
	else {
		var thisASSC = 0;
	}
	for (q=0; q<urlParamArray.length; q++) {
		if (urlParamArray[q][0] == "ASSC" && thisASSC == 0) {
			urlParamArray[q][1] = saveASSC;
			thisASSC++;
		}
		if (urlParamArray[q][0] == "ZIP" && thisZIP == 0) {
			urlParamArray[q][1] = document.getElementById('revCodeZip').value;
			thisZIP++;
		}
		if (urlParamArray[q][0] == "LA" && thisLA == 0) {
			urlParamArray[q][1] = document.getElementById('LA').value;
			thisLA++;
		}
		if (urlParamArray[q][0] == "LO" && thisLO == 0) {
			urlParamArray[q][1] = document.getElementById('LO').value;
			thisLO++;
		}
		if (urlParamArray[q][0] == "PROD" && thisPROD == 0) {
			urlParamArray[q][1] = sendProd;
			thisPROD++;
		}
		if (urlParamArray[q][0] == "GROUP" && thisGROUP == 0) {
			urlParamArray[q][1] = document.getElementById('GROUP').value;
			thisGROUP++;
		}
		if (urlParamArray[q][0] == "STYPE" && thisSTYPE == 0) {
			urlParamArray[q][1] = document.getElementById('SCAT').value;
			thisSTYPE++;
		}
		if (urlParamArray[q][0] == "SCAT" && thisSCAT == 0 && coreSCat != "") {
			urlParamArray[q][1] = coreSCat;
			thisSCAT++;
		}
		if (urlParamArray[q][0] == "CLIENT" && thisCLIENT == 0) {
			urlParamArray[q][1] = coreClient;
			thisCLIENT++;
		}
		if (urlParamArray[q][0] == "ITER" && thisITER == 0) {
			urlParamArray[q][1] = iteration;
			thisITER++;
		}
		if (urlParamArray[q][0] == "RFR" && thisRFR == 0) {
			urlParamArray[q][1] = referer;
			thisRFR++;
		}
	}
	if (thisASSC == 0) {
		urlParamArray[urlParamArray.length] = ["ASSC", saveASSC];
	}
	if (thisZIP == 0) {
		urlParamArray[urlParamArray.length] = ["ZIP", document.getElementById('revCodeZip').value];
	}
	if (thisLA == 0) {
		urlParamArray[urlParamArray.length] = ["LA", document.getElementById('LA').value];
	}
	if (thisLO == 0) {
		urlParamArray[urlParamArray.length] = ["LO", document.getElementById('LO').value];
	}
	if (thisPROD == 0) {
		urlParamArray[urlParamArray.length] = ["PROD", sendProd];
	}
	if (thisGROUP == 0) {
		urlParamArray[urlParamArray.length] = ["GROUP", document.getElementById('GROUP').value];
	}
	if (thisSTYPE == 0) {
		urlParamArray[urlParamArray.length] = ["STYPE", document.getElementById('STYPE').value];
	}
	if (thisSCAT == 0 && coreSCat != "") {
		urlParamArray[urlParamArray.length] = ["SCAT", document.getElementById('SCAT').value];
	}
	if (thisCLIENT == 0) {
		urlParamArray[urlParamArray.length] = ["CLIENT", coreClient];
	}
	if (thisITER == 0) {
		urlParamArray[urlParamArray.length] = ["ITER", iteration];
	}
	if (thisRFR == 0) {
		urlParamArray[urlParamArray.length] = ["RFR", referer];
	}
	var param = {};
	if (urlParamArray.length) {
		for (l=0;l<urlParamArray.length;l++) {
			if (urlParamArray[l][0] !== undefined) {
				param[urlParamArray[l][0]] = urlParamArray[l][1];
			}
		}
	}
	if (gtm != 0) {
		var thisZip = "NULL";
		if (document.getElementById('revCodeZip').value != "") {thisZip = document.getElementById('revCodeZip').value;}
		GTMit("SRCHLCTN", "submit", document.getElementById('LA').value + "|" + document.getElementById('LO').value + "|" + thisZip + "|" + document.getElementById('revCodeState').value + "|" + document.getElementById('revCodeCountry').value,true);
		if (sendProd == "") {
			GTMit("PRDCTSEL", "submit", "ALL",true);
		}
		else {
			GTMit("PRDCTSEL", "submit", sendProd.replace(/,/g, '|'),true);
		}
	}
	if(gLog==1){console.log("p2OnDemand - Params: ",param);}
	$.post(controlURL + scriptVersion + "/panel2OnDemand.php", param, function(data){
		var postBack = JSON.parse(data);
		if(gLog==1){console.log("p2OnDemand - Response: ",postBack);}
		p2SearchMade = postBack.p2SearchMade;
		if(gLog==1){console.log("p2OnDemand - p2SearchMade: ",p2SearchMade);}
		urlParamArray.length = 0;
		if (postBack.resp_prod != "") {
			resp_prod = postBack.resp_prod;
			document.getElementById('PROD').value = postBack.resp_prod;
		}
		storeArray.length = 0;
		storeDisplayArray.length = 0;
		document.getElementById('STORERES').value = postBack.total_count;
		if (postBack.storeArray.count != 0) {
			for (x=0; x<postBack.storeArray.count; x++) {
				storeArray[x]=[postBack.storeArray.val[x].name, postBack.storeArray.val[x].add1, postBack.storeArray.val[x].add2, postBack.storeArray.val[x].city, postBack.storeArray.val[x].state, postBack.storeArray.val[x].zip, postBack.storeArray.val[x].lat, postBack.storeArray.val[x].lng, postBack.storeArray.val[x].df, postBack.storeArray.val[x].prod, postBack.storeArray.val[x].dist, postBack.storeArray.val[x].disp, postBack.storeArray.val[x].ch_id, postBack.storeArray.val[x].s_id, postBack.storeArray.val[x].scat, postBack.storeArray.val[x].phone, postBack.storeArray.val[x].dtype, postBack.storeArray.val[x].ch_name, postBack.storeArray.val[x].ch_b_img, postBack.storeArray.val[x].ch_s_img, postBack.storeArray.val[x].stock_id, postBack.storeArray.val[x].sloc_id, postBack.storeArray.val[x].web, postBack.storeArray.val[x].hours, postBack.storeArray.val[x].ch_local, postBack.storeArray.val[x].dup, postBack.storeArray.val[x].phone_raw, postBack.storeArray.val[x].country, postBack.storeArray.val[x].iter, postBack.storeArray.val[x].pbc_cbk, postBack.storeArray.val[x].match, postBack.storeArray.val[x].premise, postBack.storeArray.val[x].ret_code];
			}
		}
		if(gLog==1){console.log("p2OnDemand - storeArray",storeArray);}
		if(gLog==1){console.log("p2OnDemand - (count/time) Total: " + postBack.storeArray.count + "/" + postBack.time_elapsed + " | Local:" + postBack.local_count + "/" + postBack.local_elapsed + " | SPINS:" + postBack.spins_count + "/" + postBack.spins_elapsed + " | IRI:" + postBack.iri_count + "/" + postBack.iri_elapsed + " | WFM:" + postBack.wfm_count + "/" + postBack.wfm_elapsed + " | Nielsen:" + postBack.niel_count + "/" + postBack.niel_elapsed + " | PBC:" + postBack.pbc_count + "/" + postBack.pbc_elapsed + " | TT:" + postBack.tt_count +"/" + postBack.tt_elapsed + " | VIP:" + postBack.vip_count +"/" + postBack.vip_elapsed);}
		if(gLog==1){
			if (postBack.error_count != 0) {
				for (e=0; e<postBack.error_count; e++) {
					console.log("p2OnDemand - Error: ",postBack.errors[e].error_code,postBack.errors[e].error_level,postBack.errors[e].error_scope,postBack.errors[e].error_desc);
				}
			}
		}
		p2RespSource = postBack.source_panel;
		p2RespAllProd = postBack.all_products;
		productsAreLoaded = 1;
		genericCloseMe();
		if (allOnOne == 0) {
			panel2Hit(postBack.time_elapsed, postBack.local_elapsed, postBack.spins_elapsed, postBack.iri_elapsed, postBack.wfm_elapsed, postBack.niel_elapsed, postBack.pbc_elapsed, postBack.tt_elapsed);
		}
		storeDisplayArray.length = 0;
		storeProdHoldArray.length = 0;
		panel2SliderArray.length = 0;
		distanceNum = eval(document.getElementById('distance').value);
		if (panel2DistanceFlag == 1) {
			distanceNum =  Math.round((parseInt(distanceNum)*0.621371)*100)/100;
		}
		scopeNum = eval(document.getElementById('scope').value);
		sortNum = eval(document.getElementById('sort').value);
		resultsNum = eval(document.getElementById('results').value);
		whatStoreUp = 0;
		if (document.getElementById('SCFILTER').value != "") {
			var scFilterBase = document.getElementById('SCFILTER').value;
			var scFilterArray = scFilterBase.split(",");
		}
		else {
			var scFilterArray = new Array("0");
		}
		if (allProductCall==1) {
			prodString = document.getElementById('PROD').value;
		}
		else {
			prodString = document.getElementById('PROD').value;
		}
		prodCheckAgainArr = prodString.split(",");
		var newIncr = 0;
		if(storeArray.length) {
			if(gLog==1){console.log("p2OnDemand storeArray.length = " + storeArray.length);}
			if(gLog==1){console.log("p2OnDemand maxStoreNum = " + maxStoreNum);}
			for (s=0;s<storeArray.length;s++) {
				if (eval(storeArray[s][8]) <= distanceNum) {
					if(gLog==1){console.log("p2OnDemand (" + eval(storeArray[s][8]) + " <= " + distanceNum + ") && (id == "+storeArray[s][13]+")");}
					if (document.getElementById('SCFILTER').value != "") {
						var foundAFilteredStore = 0;
						var storeCatArrBase = storeArray[s][14].split(",");
						if(gLog==1){console.log("p2OnDemand SCFILTER - " + document.getElementById('SCFILTER').value + " / " , storeCatArrBase);}
						for (sc=0;sc<scFilterArray.length;sc++) {
							var breakIt = 0;
							for (sb=0;sb<storeCatArrBase.length;sb++) {
								if (scFilterArray[sc] == storeCatArrBase[sb]) {
									var isUPCFilter = 0;
									if (upcFilterArr.length) {
										var prodFilTestArr = storeArray[s][9].split(",");
										for (pft=0; pft<prodFilTestArr.length; pft++) {
											if (prodFilTestArr[pft] == upcFilterArr[0][0]) {
												isUPCFilter = 1;
												break;
											}
										}
									}
									else {
										if (onretPar == 1) {
											var prodFilTestArr = storeArray[s][9].split(",");
											var thisProdEnforce = prodFilTestArr[0];
											for (pft=0; pft<prodDisplayArray.length; pft++) {
												if (prodDisplayArray[pft][0] == thisProdEnforce) {
													upcFilterArr[0] = prodDisplayArray[pft];
													if(gLog==1){console.log("p2OnDemand upcFilterArr Backfill - ", upcFilterArr[0]);}
													break;
												}
											}
										}
										isUPCFilter = 1;
									}
									if (isUPCFilter == 1) {
										if(gLog==1){console.log("p2OnDemand SCFILTER INCLUDE - " + storeArray[s][8] + " / " + distanceNum);}
										storeDisplayArray[newIncr] = storeArray[s];
										foundAFilteredStore = 1;
										newIncr++;
										breakIt = 1;
										break;
									}
								}
							}
							if (breakIt == 1) {
								break;
							}
						}
						if (foundAFilteredStore == 0) {
							storeProdHoldArray.push(storeArray[s][13]);
						}
					}
					else {
						var isUPCFilter = 0;
						if (upcFilterArr.length) {
							var prodFilTestArr = storeArray[s][9].split(",");
							for (pft=0; pft<prodFilTestArr.length; pft++) {
								if (prodFilTestArr[pft] == upcFilterArr[0][0]) {
									isUPCFilter = 1;
									break;
								}
							}
						}
						else {
							if (onretPar == 1) {
								var prodFilTestArr = storeArray[s][9].split(",");
								var thisProdEnforce = prodFilTestArr[0];
								for (pft=0; pft<prodDisplayArray.length; pft++) {
									if (prodDisplayArray[pft][0] == thisProdEnforce) {
										upcFilterArr[0] = prodDisplayArray[pft];
										if(gLog==1){console.log("p2OnDemand upcFilterArr Backfill - ", upcFilterArr[0]);}
										break;
									}
								}
							}
							isUPCFilter = 1;
						}
						if (isUPCFilter == 1) {
							if(gLog==1){console.log("p2OnDemand distanceNum INCLUDE - " + storeArray[s][8] + " / " + distanceNum);}
							storeDisplayArray[newIncr] = storeArray[s];
							newIncr++;
						}
					}
				}
				if (newIncr == (maxStoreNum)) {
					break;
				}
			}
		}
		if (document.getElementById('panel2LocListShell')) {
			panel2WriteLocList();
		}
		if ((storeDisplayArray.length)) {
			if (document.getElementById('panel2MultiMap')) {
				panel2CompileMultiMap();
			}
		}
		prodLoaderToggle(0);
		p2FilterByUPCMap = 1;
	});
}
function p2TemplateFetch() {
	p2TemplateList['TBN'] = t_browser_name;
	p2TemplateList['TBV'] = t_browser_version;
	p2TemplateList['TON'] = t_os_name;
	p2TemplateList['TOV'] = t_os_version;
	p2TemplateList['TEN'] = t_engine_name;
	p2TemplateList['TEV'] = t_engine_version;
	p2TemplateList["panel2BaseDiv"] = 1;
	p2TemplateList["panel2ProdSelectAreaDiv"] = showPSA;
	p2TemplateList["panel2ProdInfoAreaDiv"] = showPSA;
	if (tabSelect == 0){p2TemplateList["panel2WidgetTabNoneDiv"] = 1;}else{p2TemplateList["panel2WidgetTabNoneDiv"] = 0;}
	if (tabSelect == 1){p2TemplateList["panel2WidgetTabStaticDiv"] = 1;}else{p2TemplateList["panel2WidgetTabStaticDiv"] = 0;}
	if (tabSelect == 2){p2TemplateList["panel2WidgetTabActiveDiv"] = 1;}else{p2TemplateList["panel2WidgetTabActiveDiv"] = 0;}
	if (globShowMap == 0) {
		p2TemplateList["panel2WidgetAreaBMNoMapDiv"] = bmPos;
		p2TemplateList["panel2WidgetAreaBMSideNoMapDiv"] = bmPos;
		p2TemplateList["panel2WidgetAreaBMDiv"] = 0;
		p2TemplateList["panel2WidgetAreaBMSideDiv"] = 0;
	}
	else {
		p2TemplateList["panel2WidgetAreaBMNoMapDiv"] = 0;
		p2TemplateList["panel2WidgetAreaBMSideNoMapDiv"] = 0;
		p2TemplateList["panel2WidgetAreaBMDiv"] = bmPos;
		p2TemplateList["panel2WidgetAreaBMSideDiv"] = bmPos;
	}
	p2TemplateList["panel2WidgetNoBMDiv"] = bmPos;
	p2TemplateList["panel2WidgetAreaECDiv"] = ecPos;
	p2TemplateList["panel2WidgetAreaECSideDiv"] = ecPos;
	p2TemplateList["panel2WidgetNoECDiv"] = ecPos;
	p2TemplateList["panel2WidgetAreaNoneDiv"] = (ecPos + bmPos);
	p2TemplateList["panel2WidgetAreaNoProdDiv"] = onretPar;
	p2TemplateList["panel2LocPrelistDiv"] = bmBypass;
	p2TemplateList["panel2LocListDiv"] = 1;
	p2TemplateList["panel2LocListSplitDiv"] = 1;
	p2TemplateList["panel2LocListDetailDiv"] = 1;
	p2TemplateList["panel2LocNoResDiv"] = 1;
	p2TemplateList["panel2InfoWindowDiv"] = 1;
	p2TemplateList["panel2AllProductsDiv"] = 1;
	p2TemplateList["panel2ProductCartHead"] = 1;
	p2TemplateList["panel2ProductCartDiv"] = 1;
	p2TemplateList["panel2ProductCartFoot"] = 1;
	p2TemplateList["panel2PrintStartDiv"] = 1;
	p2TemplateList["panel2PrintStepDiv"] = 1;
	p2TemplateList["panel2PrintStopDiv"] = 1;
	p2TemplateList["panel2EmailStartDiv"] = 1;
	p2TemplateList["panel2EmailStepDiv"] = 1;
	p2TemplateList["panel2EmailStopDiv"] = 1;
	p2TemplateList["panel2StoreFamilyDiv"] = storeFamArray.length;
	p2TemplateList["panel2StoreCategoryDiv"] = storeCatArray.length;
	p2TemplateList["panel2LabelDiv"] = 1;
	p2TemplateList["panel2FamilyDiv"] = 1;
	p2TemplateList["panel2CategoryDiv"] = 1;
	p2TemplateList["panel2ProductDiv"] = 1;
	p2TemplateList["panel2DeliveryDiv"] = deliveryService;
	p2TemplateList["templateRoot"] = templateRoot;
	p2TemplateList["coreClient"] = coreClient;
	p2TemplateList["source_panel"] = p2RespSource;
	p2TemplateList["all_products"] = p2RespAllProd;
	p2TemplateList["CB"] = noCache;
	if(gLog==1){console.log("p2TemplateFetch - Start",p2TemplateList);}
	$.post(controlURL + scriptVersion + "/panel2Templates.php", p2TemplateList, function(data){
		p2TemplateSet = data;
		if(gLog==1){console.log("p2TemplateFetch - Response: ",p2TemplateSet);}
		if(gLog==1){
			if (p2TemplateSet.error_count != 0) {
				for (e=0; e<p2TemplateSet.error_count; e++) {
					console.log("p2TemplateFetch - Error: ",p2TemplateSet.errors[e].error_code,p2TemplateSet.errors[e].error_level,p2TemplateSet.errors[e].error_scope,p2TemplateSet.errors[e].error_desc);
				}
			}
		}
		if (allOnOne == 0) {
			panel2Load(p2TemplateSet.source_panel,p2TemplateSet.all_products);
		}
		else {
			panel1CompileMultiMap();
		}
	});
}
function p3Connect(hoverButt) {
	loaderToggle(1);
	if (hoverButt) {
		urlParamArray[urlParamArray.length] = ["P3B", hoverButt];
	}
	urlParamArray[urlParamArray.length] = ["productPreset", productPreset];
	urlParamArray[urlParamArray.length] = ["CB", noCache];
	urlParamArray[urlParamArray.length] = ["TLL", tlVal];
	urlParamArray[urlParamArray.length] = ["GLOG", gLog];
	var thisstoreID = 0;
	var thisstoreTYPE = 0;
	var thisstoreSQL = 0;
	var thisTTPROD = 0;
	var thisVIPPROD = 0;
	var thisPBCPROD = 0;
	var thisPBCCBK = 0;
	var thisCLIENT = 0;
	var thisITER = 0;
	for (q=0; q<urlParamArray.length; q++) {
		if (urlParamArray[q][0] == "storeID" && thisstoreID == 0) {
			urlParamArray[q][1] = document.getElementById('storeID').value;
			thisstoreID++;
		}
		if (urlParamArray[q][0] == "storeTYPE" && thisstoreTYPE == 0) {
			urlParamArray[q][1] = document.getElementById('storeTYPE').value;
			thisstoreTYPE++;
		}
		if (urlParamArray[q][0] == "storeSQL" && thisstoreSQL == 0) {
			urlParamArray[q][1] = document.getElementById('storeSQL').value;
			thisstoreSQL++;
		}
		if (urlParamArray[q][0] == "TTPROD" && thisTTPROD == 0) {
			urlParamArray[q][1] = document.getElementById('TTPROD').value;
			thisTTPROD++;
		}
		if (urlParamArray[q][0] == "VIPPROD" && thisVIPPROD == 0) {
			urlParamArray[q][1] = document.getElementById('VIPPROD').value;
			thisVIPPROD++;
		}
		if (urlParamArray[q][0] == "PBCPROD" && thisPBCPROD == 0) {
			urlParamArray[q][1] = document.getElementById('PBCPROD').value;
			thisPBCPROD++;
		}
		if (urlParamArray[q][0] == "PBCCBK" && thisPBCCBK == 0) {
			urlParamArray[q][1] = document.getElementById('PBCCBK').value;
			thisPBCCBK++;
		}
		if (urlParamArray[q][0] == "CLIENT" && thisCLIENT == 0) {
			urlParamArray[q][1] = coreClient;
			thisCLIENT++;
		}
		if (urlParamArray[q][0] == "ITER" && thisITER == 0) {
			urlParamArray[q][1] = iteration;
			thisITER++;
		}
	}
	if (thisstoreID == 0) {
		urlParamArray[urlParamArray.length] = ["storeID", document.getElementById('storeID').value];
	}
	if (thisstoreTYPE == 0) {
		urlParamArray[urlParamArray.length] = ["storeTYPE", document.getElementById('storeTYPE').value];
	}
	if (thisstoreSQL == 0) {
		urlParamArray[urlParamArray.length] = ["storeSQL", document.getElementById('storeSQL').value];
	}
	if (thisTTPROD == 0) {
		urlParamArray[urlParamArray.length] = ["TTPROD", document.getElementById('TTPROD').value];
	}
	if (thisVIPPROD == 0) {
		urlParamArray[urlParamArray.length] = ["VIPPROD", document.getElementById('VIPPROD').value];
	}
	if (thisPBCPROD == 0) {
		urlParamArray[urlParamArray.length] = ["PBCPROD", document.getElementById('PBCPROD').value];
	}
	if (thisPBCCBK == 0) {
		urlParamArray[urlParamArray.length] = ["PBCCBK", document.getElementById('PBCCBK').value];
	}
	if (thisCLIENT == 0) {
		urlParamArray[urlParamArray.length] = ["CLIENT", coreClient];
	}
	if (thisITER == 0) {
		urlParamArray[urlParamArray.length] = ["ITER", iteration];
	}
	var param = {};
	if (urlParamArray.length) {
		for (l=0;l<urlParamArray.length;l++) {
			if (urlParamArray[l][0] !== undefined) {
				param[urlParamArray[l][0]] = urlParamArray[l][1];
			}
		}
	}
	if(gLog==1){console.log("p3Connect - Params: ",param);}
	$.post(controlURL + scriptVersion + "/panel3Connect.php", param, function(data){
		var postBack = JSON.parse(data);
		if(gLog==1){console.log("p3Connect - Response: ",postBack);}
		urlParamArray.length = 0;
		prodWriteArray.length = 0;
		if (postBack.prodWriteArray.count != 0) {
			for (x=0; x<postBack.prodWriteArray.count; x++) {
				prodWriteArray[x]=[postBack.prodWriteArray.val[x].id, postBack.prodWriteArray.val[x].p_id, postBack.prodWriteArray.val[x].name, postBack.prodWriteArray.val[x].desc, postBack.prodWriteArray.val[x].b_img, postBack.prodWriteArray.val[x].s_img, postBack.prodWriteArray.val[x].high_p, postBack.prodWriteArray.val[x].check, postBack.prodWriteArray.val[x].cat_id, postBack.prodWriteArray.val[x].on, postBack.prodWriteArray.val[x].stock, postBack.prodWriteArray.val[x].loc, postBack.prodWriteArray.val[x].pbc_cbk];
			}
		}
		if(gLog==1){
			if (postBack.error_count != 0) {
				for (e=0; e<postBack.error_count; e++) {
					console.log("p3Connect - Error: ",postBack.errors[e].error_code,postBack.errors[e].error_level,postBack.errors[e].error_scope,postBack.errors[e].error_desc);
				}
			}
		}
		p3P3B = postBack.P3B;
		productsAreLoaded = 1;
		genericCloseMe();
		if (allOnOne == 0) {
			panel2Hit(postBack.time_elapsed, postBack.local_elapsed, postBack.spins_elapsed, postBack.iri_elapsed, postBack.wfm_elapsed, postBack.niel_elapsed, postBack.pbc_elapsed, postBack.tt_elapsed);
		}
		if(gLog==1){console.log("p3Connect - storeType=" + postBack.storeType + " [0=Local; 1=IRI; 2=SPINS; 3=Local (no products); 4=PBC; 5=WFM; 6=Nielsen; 7=TurnTree]");}
		if (postBack.storeType == 4) {
			if(gLog==1){console.log("p3Connect - pbcCBKNum=" + postBack.pbcCBKNum + " prodTestCount=" + postBack.prodTestCount);}
		}
		if (p3TemplateSet.panel3BaseDiv) {
			if(gLog==1){console.log("p3Connect - No p3TemplateFetch");}
			if (p3P3B != "") {
				panel3Load(p3P3B);
			}
			else {
				panel3Load();
			}
		}
		else {
			p3TemplateFetch();
		}
	});
}
function p3TemplateFetch() {
	p3TemplateList['TBN'] = t_browser_name;
	p3TemplateList['TBV'] = t_browser_version;
	p3TemplateList['TON'] = t_os_name;
	p3TemplateList['TOV'] = t_os_version;
	p3TemplateList['TEN'] = t_engine_name;
	p3TemplateList['TEV'] = t_engine_version;
	p3TemplateList["panel3BaseDiv"] = 1;
	p3TemplateList["panel3DirectionsStartDiv"] = 1;
	p3TemplateList["panel3DirectionsStepDiv"] = 1;
	p3TemplateList["panel3DirectionsStopDiv"] = 1;
	p3TemplateList["panel3DirectionsWaitDiv"] = 1;
	p3TemplateList["panel3EmailFieldDiv"] = 1;
	p3TemplateList["panel3EmailStartDiv"] = 1;
	p3TemplateList["panel3EmailStepDiv"] = 1;
	p3TemplateList["panel3EmailStopDiv"] = 1;
	p3TemplateList["panel3PrintStartDiv"] = 1;
	p3TemplateList["panel3PrintStepDiv"] = 1;
	p3TemplateList["panel3PrintStopDiv"] = 1;
	p3TemplateList["panel3ProductsStartDiv"] = 1;
	p3TemplateList["panel3ProductsFamDiv"] = 1;
	p3TemplateList["panel3ProductsCatDiv"] = 1;
	p3TemplateList["panel3ProductsLabelDiv"] = 1;
	p3TemplateList["panel3ProductsProdDiv"] = 1;
	p3TemplateList["panel3ProductsStopDiv"] = 1;
	p3TemplateList["panel3ProductsNoneDiv"] = 1;
	p3TemplateList["panel3ProdCartStartDiv"] = 1;
	p3TemplateList["panel3ProdCartFamDiv"] = 1;
	p3TemplateList["panel3ProdCartCatDiv"] = 1;
	p3TemplateList["panel3ProdCartLabelDiv"] = 1;
	p3TemplateList["panel3ProdCartProdDiv"] = 1;
	p3TemplateList["panel3ProdCartStopDiv"] = 1;
	p3TemplateList["panel3ProdCartNoneDiv"] = 1;
	p3TemplateList["panel3LabelDiv"] = 1;
	p3TemplateList["panel3FamilyDiv"] = 1;
	p3TemplateList["panel3CategoryDiv"] = 1;
	p3TemplateList["panel3ProductDiv"] = 1;
	p3TemplateList["panel3ProductCartHead"] = 1;
	p3TemplateList["panel3ProductCartDiv"] = 1;
	p3TemplateList["panel3ProductCartFoot"] = 1;
	p3TemplateList["templateRoot"] = templateRoot;
	p3TemplateList["coreClient"] = coreClient;
	p3TemplateList["CB"] = noCache;
	if(gLog==1){console.log("p3TemplateFetch - Start",p3TemplateList);}
	$.post(controlURL + scriptVersion + "/panel3Templates.php", p3TemplateList, function(data){
		p3TemplateSet = data;
		if(gLog==1){console.log("p3TemplateFetch - Response: ",p3TemplateSet);}
		if(gLog==1){
			if (p3TemplateSet.error_count != 0) {
				for (e=0; e<p3TemplateSet.error_count; e++) {
					console.log("p3TemplateFetch - Error: ",p3TemplateSet.errors[e].error_code,p3TemplateSet.errors[e].error_level,p3TemplateSet.errors[e].error_scope,p3TemplateSet.errors[e].error_desc);
				}
			}
		}
		if(gLog==1){console.log("p3Connect - p3TemplateFetch");}
		if (p3P3B != "") {
			panel3Load(p3P3B);
		}
		else {
			panel3Load();
		}
	});
}
function p4Connect(hoverButt) {
	loaderToggle(1);
	var sendProd = document.getElementById("PROD").value;
	if (document.getElementById("PROD").value.length == document.getElementById("FULLPROD").value.length) {sendProd = "";}
	var thisCLIENT = 0;
	var thisITER = 0;
	var thisPROD = 0;
	for (q=0; q<urlParamArray.length; q++) {
		if (urlParamArray[q][0] == "CLIENT" && thisCLIENT == 0) {
			urlParamArray[q][1] = coreClient;
			thisCLIENT++;
		}
		if (urlParamArray[q][0] == "ITER" && thisITER == 0) {
			urlParamArray[q][1] = iteration;
			thisITER++;
		}
		if (urlParamArray[q][0] == "PROD" && thisPROD == 0) {
			urlParamArray[q][1] = sendProd;
			thisPROD++;
		}
	}
	if (thisCLIENT == 0) {
		urlParamArray[urlParamArray.length] = ["CLIENT", coreClient];
	}
	if (thisITER == 0) {
		urlParamArray[urlParamArray.length] = ["ITER", iteration];
	}
	if (thisPROD == 0) {
		urlParamArray[urlParamArray.length] = ["PROD", sendProd];
	}
	urlParamArray[urlParamArray.length] = ["productPreset", productPreset];
	urlParamArray[urlParamArray.length] = ["CB", noCache];
	urlParamArray[urlParamArray.length] = ["TLL", tlVal];
	urlParamArray[urlParamArray.length] = ["GLOG", gLog];
	var param = {};
	if (urlParamArray.length) {
		for (l=0;l<urlParamArray.length;l++) {
			if (urlParamArray[l][0] !== undefined) {
				param[urlParamArray[l][0]] = urlParamArray[l][1];
			}
		}
	}
	if(gLog==1){console.log("p4Connect - Params: ",param);}
	$.post(controlURL + scriptVersion + "/panel4Connect.php", param, function(data){
		var postBack = JSON.parse(data);
		if(gLog==1){console.log("p4Connect - Response: ",postBack);}
		urlParamArray.length = 0;
		if (postBack.countryArray.count != 0) {
			countryArray.length = 0;
			for (x=0; x<postBack.countryArray.count; x++) {
				countryArray[x]=[postBack.countryArray.val[x].id, postBack.countryArray.val[x].name, postBack.countryArray.val[x].al2, postBack.countryArray.val[x].al3, postBack.countryArray.val[x].unm49, postBack.countryArray.val[x].type];
			}
		}
		if (postBack.ccreqFamArray.count != 0) {
			ccreqFamArray.length = 0;
			for (x=0; x<postBack.ccreqFamArray.count; x++) {
				ccreqFamArray[x]=[postBack.ccreqFamArray.val[x].id, postBack.ccreqFamArray.val[x].name, postBack.ccreqFamArray.val[x].b_img, postBack.ccreqFamArray.val[x].s_img, postBack.ccreqFamArray.val[x].code, postBack.ccreqFamArray.val[x].on, postBack.ccreqFamArray.val[x].num_cats];
			}
		}
		if (postBack.ccreqCatArray.count != 0) {
			ccreqCatArray.length = 0;
			for (x=0; x<postBack.ccreqCatArray.count; x++) {
				ccreqCatArray[x]=[postBack.ccreqCatArray.val[x].id, postBack.ccreqCatArray.val[x].name, postBack.ccreqCatArray.val[x].fam_id, postBack.ccreqCatArray.val[x].b_img, postBack.ccreqCatArray.val[x].s_img, postBack.ccreqCatArray.val[x].code, postBack.ccreqCatArray.val[x].on, postBack.ccreqCatArray.val[x].num_cats];
			}
		}
		if (postBack.ccreqProdArray.count != 0) {
			ccreqProdArray.length = 0;
			for (x=0; x<postBack.ccreqProdArray.count; x++) {
				ccreqProdArray[x]=[postBack.ccreqProdArray.val[x].id, postBack.ccreqProdArray.val[x].p_id, postBack.ccreqProdArray.val[x].name, postBack.ccreqProdArray.val[x].desc, postBack.ccreqProdArray.val[x].b_img, postBack.ccreqProdArray.val[x].s_img, postBack.ccreqProdArray.val[x].high_p, postBack.ccreqProdArray.val[x].check, postBack.ccreqProdArray.val[x].cat_id, postBack.ccreqProdArray.val[x].on, postBack.ccreqProdArray.val[x].match, postBack.ccreqProdArray.val[x].lab_set, postBack.ccreqProdArray.val[x].spins, postBack.ccreqProdArray.val[x].iri, postBack.ccreqProdArray.val[x].wfm, postBack.ccreqProdArray.val[x].niel, postBack.ccreqProdArray.val[x].cat_name, postBack.ccreqProdArray.val[x].fam_id, postBack.ccreqProdArray.val[x].tt, postBack.ccreqProdArray.val[x].labels, postBack.ccreqProdArray.val[x].m_over, postBack.ccreqProdArray.val[x].p_size, postBack.ccreqProdArray.val[x].fam_name];
			}
		}
		if(gLog==1){
			if (postBack.error_count != 0) {
				for (e=0; e<postBack.error_count; e++) {
					console.log("p4Connect - Error: ",postBack.errors[e].error_code,postBack.errors[e].error_level,postBack.errors[e].error_scope,postBack.errors[e].error_desc);
				}
			}
		}
		panel4Hit(p4TemplateSet.time_elapsed);
		if (p4TemplateSet.panel4BaseDiv) {
			if(gLog==1){console.log("p4Connect - No p4TemplateFetch");}
			panel4Load();
		}
		else {
			p4TemplateFetch();
		}
	});
}
function p4TemplateFetch() {
	p4TemplateList['TBN'] = t_browser_name;
	p4TemplateList['TBV'] = t_browser_version;
	p4TemplateList['TON'] = t_os_name;
	p4TemplateList['TOV'] = t_os_version;
	p4TemplateList['TEN'] = t_engine_name;
	p4TemplateList['TEV'] = t_engine_version;
	if (disableForms == 1) {
		p4TemplateList["panel4AltDiv"] = 1;
		p4TemplateList["panel4BaseDiv"] = 0;
	}
	else {
		p4TemplateList["panel4AltDiv"] = 0;
		p4TemplateList["panel4BaseDiv"] = 1;
	}
	p4TemplateList["panel4LabelDiv"] = 1;
	p4TemplateList["panel4FamilyDiv"] = 1;
	p4TemplateList["panel4CategoryDiv"] = 1;
	p4TemplateList["panel4ProductDiv"] = 1;
	p4TemplateList["panel4ChainSelect"] = 1;
	p4TemplateList["panel4ChainList"] = 1;
	p4TemplateList["panel4ProductCartHead"] = 1;
	p4TemplateList["panel4ProductCartDiv"] = 1;
	p4TemplateList["panel4ProductCartFoot"] = 1;
	p4TemplateList["templateRoot"] = templateRoot;
	p4TemplateList["coreClient"] = coreClient;
	p4TemplateList["CB"] = noCache;
	if(gLog==1){console.log("p4TemplateFetch - Start",p4TemplateList);}
	$.post(controlURL + scriptVersion + "/panel4Templates.php", p4TemplateList, function(data){
		p4TemplateSet = data;
		if(gLog==1){console.log("p4TemplateFetch - Response: ",p4TemplateSet);}
		if(gLog==1){
			if (p4TemplateSet.error_count != 0) {
				for (e=0; e<p4TemplateSet.error_count; e++) {
					console.log("p4TemplateFetch - Error: ",p4TemplateSet.errors[e].error_code,p4TemplateSet.errors[e].error_level,p4TemplateSet.errors[e].error_scope,p4TemplateSet.errors[e].error_desc);
				}
			}
		}
		panel4Load();
	});
}
function p5Connect(hoverButt) {
	loaderToggle(1);
	var thisCLIENT = 0;
	var thisITER = 0;
	for (q=0; q<urlParamArray.length; q++) {
		if (urlParamArray[q][0] == "CLIENT" && thisCLIENT == 0) {
			urlParamArray[q][1] = coreClient;
			thisCLIENT++;
		}
		if (urlParamArray[q][0] == "ITER" && thisITER == 0) {
			urlParamArray[q][1] = iteration;
			thisITER++;
		}
	}
	if (thisCLIENT == 0) {
		urlParamArray[urlParamArray.length] = ["CLIENT", coreClient];
	}
	if (thisITER == 0) {
		urlParamArray[urlParamArray.length] = ["ITER", iteration];
	}
	urlParamArray[urlParamArray.length] = ["productPreset", productPreset];
	urlParamArray[urlParamArray.length] = ["CB", noCache];
	urlParamArray[urlParamArray.length] = ["TLL", tlVal];
	urlParamArray[urlParamArray.length] = ["GLOG", gLog];
	var param = {};
	if (urlParamArray.length) {
		for (l=0;l<urlParamArray.length;l++) {
			if (urlParamArray[l][0] !== undefined) {
				param[urlParamArray[l][0]] = urlParamArray[l][1];
			}
		}
	}
	if(gLog==1){console.log("p5Connect - Params: ",param);}
	$.post(controlURL + scriptVersion + "/panel5Connect.php", param, function(data){
		var postBack = JSON.parse(data);
		if(gLog==1){console.log("p5Connect - Response: ",postBack);}
		urlParamArray.length = 0;
		if (postBack.countryArray.count != 0) {
			countryArray.length = 0;
			for (x=0; x<postBack.countryArray.count; x++) {
				countryArray[x]=[postBack.countryArray.val[x].id, postBack.countryArray.val[x].name, postBack.countryArray.val[x].al2, postBack.countryArray.val[x].al3, postBack.countryArray.val[x].unm49, postBack.countryArray.val[x].type];
			}
		}
		if (postBack.rtreqFamArray.count != 0) {
			rtreqFamArray.length = 0;
			for (x=0; x<postBack.rtreqFamArray.count; x++) {
				rtreqFamArray[x]=[postBack.rtreqFamArray.val[x].id, postBack.rtreqFamArray.val[x].name, postBack.rtreqFamArray.val[x].b_img, postBack.rtreqFamArray.val[x].s_img, postBack.rtreqFamArray.val[x].code, postBack.rtreqFamArray.val[x].on, postBack.rtreqFamArray.val[x].num_cats];
				window["panel5RTRFamilyNameVar"+postBack.rtreqFamArray.val[x].id] = 0;
			}
		}
		if (postBack.rtreqCatArray.count != 0) {
			rtreqCatArray.length = 0;
			for (x=0; x<postBack.rtreqCatArray.count; x++) {
				rtreqCatArray[x]=[postBack.rtreqCatArray.val[x].id, postBack.rtreqCatArray.val[x].name, postBack.rtreqCatArray.val[x].fam_id, postBack.rtreqCatArray.val[x].b_img, postBack.rtreqCatArray.val[x].s_img, postBack.rtreqCatArray.val[x].code, postBack.rtreqCatArray.val[x].on, postBack.rtreqCatArray.val[x].num_cats];
				window["panel5RTRCategoryNameVar"+postBack.rtreqCatArray.val[x].id] = 0;
			}
		}
		if (postBack.rtreqProdArray.count != 0) {
			rtreqProdArray.length = 0;
			for (x=0; x<postBack.rtreqProdArray.count; x++) {
				rtreqProdArray[x]=[postBack.rtreqProdArray.val[x].id, postBack.rtreqProdArray.val[x].p_id, postBack.rtreqProdArray.val[x].name, postBack.rtreqProdArray.val[x].desc, postBack.rtreqProdArray.val[x].b_img, postBack.rtreqProdArray.val[x].s_img, postBack.rtreqProdArray.val[x].high_p, postBack.rtreqProdArray.val[x].check, postBack.rtreqProdArray.val[x].cat_id, postBack.rtreqProdArray.val[x].on, postBack.rtreqProdArray.val[x].match, postBack.rtreqProdArray.val[x].lab_set, postBack.rtreqProdArray.val[x].spins, postBack.rtreqProdArray.val[x].iri, postBack.rtreqProdArray.val[x].wfm, postBack.rtreqProdArray.val[x].niel, postBack.rtreqProdArray.val[x].cat_name, postBack.rtreqProdArray.val[x].fam_id, postBack.rtreqProdArray.val[x].tt, postBack.rtreqProdArray.val[x].labels, postBack.rtreqProdArray.val[x].m_over, postBack.rtreqProdArray.val[x].p_size, postBack.rtreqProdArray.val[x].fam_name];
				window["panel5RTRProductNameVar"+postBack.rtreqProdArray.val[x].id] = 0;
			}
		}
		if(gLog==1){
			if (postBack.error_count != 0) {
				for (e=0; e<postBack.error_count; e++) {
					console.log("p5Connect - Error: ",postBack.errors[e].error_code,postBack.errors[e].error_level,postBack.errors[e].error_scope,postBack.errors[e].error_desc);
				}
			}
		}
		p5ct = p5TemplateSet.time_elapsed;
		if (p5TemplateSet.panel5BaseDiv) {
			if(gLog==1){console.log("p5Connect - No p5TemplateFetch");}
			panel5Load();
		}
		else {
			p5TemplateFetch();
		}
	});
}
function p5TemplateFetch() {
	p5TemplateList['TBN'] = t_browser_name;
	p5TemplateList['TBV'] = t_browser_version;
	p5TemplateList['TON'] = t_os_name;
	p5TemplateList['TOV'] = t_os_version;
	p5TemplateList['TEN'] = t_engine_name;
	p5TemplateList['TEV'] = t_engine_version;
	if (disableForms == 1) {
		p5TemplateList["panel5AltDiv"] = 1;
		p5TemplateList["panel5BaseDiv"] = 0;
	}
	else {
		p5TemplateList["panel5AltDiv"] = 0;
		p5TemplateList["panel5BaseDiv"] = 1;
	}
	p5TemplateList["panel5RTRFamilyDiv"] = 1;
	p5TemplateList["panel5RTRCategoryDiv"] = 1;
	p5TemplateList["panel5RTRProductDiv"] = 1;
	p5TemplateList["panel5RTRCatProductDiv"] = 1;
	p5TemplateList["panel5LabelDiv"] = 1;
	p5TemplateList["panel5FamilyDiv"] = 1;
	p5TemplateList["panel5CategoryDiv"] = 1;
	p5TemplateList["panel5ProductDiv"] = 1;
	p5TemplateList["panel5ProductCartDiv"] = 1;
	p5TemplateList["panel5ProductCartHead"] = 1;
	p5TemplateList["panel5ProductCartDiv"] = 1;
	p5TemplateList["panel5ProductCartFoot"] = 1;
	p5TemplateList["templateRoot"] = templateRoot;
	p5TemplateList["coreClient"] = coreClient;
	p5TemplateList["CB"] = noCache;
	if(gLog==1){console.log("p5TemplateFetch - Start",p5TemplateList);}
	$.post(controlURL + scriptVersion + "/panel5Templates.php", p5TemplateList, function(data){
		p5TemplateSet = data;
		if(gLog==1){console.log("p5TemplateFetch - Response: ",p5TemplateSet);}
		if(gLog==1){
			if (p5TemplateSet.error_count != 0) {
				for (e=0; e<p5TemplateSet.error_count; e++) {
					console.log("p5TemplateFetch - Error: ",p5TemplateSet.errors[e].error_code,p5TemplateSet.errors[e].error_level,p5TemplateSet.errors[e].error_scope,p5TemplateSet.errors[e].error_desc);
				}
			}
		}
		panel5Load();
	});
}
function postImgLoad(theType,theLoad) {
	if(gLog==1){console.log("postImgLoad - START");}
	if (theLoad == 1) {
		var loopArr = [];
		if (theType == 'prod') {for(u=0;u<prodDisplayArray.length;u++){if(prodDisplayArray[u][4] != "" || prodDisplayArray[u][5] != ""){loopArr.push(prodDisplayArray[u][0]);}}}
		if (theType == 'cat') {for(u=0;u<catArray.length;u++){if(catArray[u][3] != "" || catArray[u][4] != ""){loopArr.push(catArray[u][0]);}}}
		if (theType == 'lab') {for(u=0;u<labelArray.length;u++){if(labelArray[u][6] != "" || labelArray[u][7] != ""){loopArr.push(labelArray[u][0]);}}}
		for (b=0; b<loopArr.length; b++) {
			var param = {};
			param['CLIENT'] = coreClient;
			param['ID'] = loopArr[b];
			param['GLOG'] = gLog;
			param['CIB'] = clientImgBase;
			param['TYPE'] = theType;
			$.get(controlURL + scriptVersion + "/postProduct.php", param, function(data) {
				var postBack = JSON.parse(data);
				if(gLog==1){console.log("postImgLoad - Response: ",postBack);}
				if (postBack.type == 'prod') {
					if (document.getElementById('panel1ProductBigImgDivBack'+postBack.id) && postBack.bigImg != "") {
						if ($('#panel1ProductBigImgDivBack'+postBack.id).hasClass('post_load_on')){}
						else {
							$('#panel1ProductBigImgDivBack'+postBack.id).addClass('post_load_on');
							$('#panel1ProductBigImgDivBack'+postBack.id).css("background-image", "url('" + clientImgBase + postBack.bigImg + "')");
						}
					}
					if (document.getElementById('panel1ProductSmImgDivBack'+postBack.id) && postBack.smImg != "") {
						if ($('#panel1ProductSmImgDivBack'+postBack.id).hasClass('post_load_on')){}
						else {
							$('#panel1ProductSmImgDivBack'+postBack.id).addClass('post_load_on');
							$('#panel1ProductSmImgDivBack'+postBack.id).css("background-image", "url('" + clientImgBase + postBack.smImg + "')");
						}
					}
				}
				if (postBack.type == 'cat') {
					if (document.getElementById('panel1CategoryBigImgDivBack'+postBack.id) && postBack.bigImg != "") {
						if ($('#panel1CategoryBigImgDivBack'+postBack.id).hasClass('post_load_on')){}
						else {
							$('#panel1CategoryBigImgDivBack'+postBack.id).addClass('post_load_on');
							$('#panel1CategoryBigImgDivBack'+postBack.id).css("background-image", "url('" + clientImgBase + postBack.bigImg + "')");
						}
					}
					if (document.getElementById('panel1CategorySmImgDivBack'+postBack.id) && postBack.smImg != "") {
						if ($('#panel1CategorySmImgDivBack'+postBack.id).hasClass('post_load_on')){}
						else {
							$('#panel1CategorySmImgDivBack'+postBack.id).addClass('post_load_on');
							$('#panel1CategorySmImgDivBack'+postBack.id).css("background-image", "url('" + clientImgBase + postBack.smImg + "')");
						}
					}
				}
				if (postBack.type == 'lab') {
					if (document.getElementById('panel1LabCatParentBigImgDivBack'+postBack.id) && postBack.bigImg != "") {
						if ($('#panel1LabCatParentBigImgDivBack'+postBack.id).hasClass('post_load_on')){}
						else {
							$('#panel1LabCatParentBigImgDivBack'+postBack.id).addClass('post_load_on');
							$('#panel1LabCatParentBigImgDivBack'+postBack.id).css("background-image", "url('" + clientImgBase + postBack.bigImg + "')");
						}
					}
					if (document.getElementById('panel1LabCatParentSmImgDivBack'+postBack.id) && postBack.smImg != "") {
						if ($('#panel1LabCatParentSmImgDivBack'+postBack.id).hasClass('post_load_on')){}
						else {
							$('#panel1LabCatParentSmImgDivBack'+postBack.id).addClass('post_load_on');
							$('#panel1LabCatParentSmImgDivBack'+postBack.id).css("background-image", "url('" + clientImgBase + postBack.smImg + "')");
						}
					}
					if (document.getElementById('panel1LabCatChildBigImgDivBack'+postBack.id) && postBack.bigImg != "") {
						if ($('#panel1LabCatChildBigImgDivBack'+postBack.id).hasClass('post_load_on')){}
						else {
							$('#panel1LabCatChildBigImgDivBack'+postBack.id).addClass('post_load_on');
							$('#panel1LabCatChildBigImgDivBack'+postBack.id).css("background-image", "url('" + clientImgBase + postBack.bigImg + "')");
						}
					}
					if (document.getElementById('panel1LabCatChildSmImgDivBack'+postBack.id) && postBack.smImg != "") {
						if ($('#panel1LabCatChildSmImgDivBack'+postBack.id).hasClass('post_load_on')){}
						else {
							$('#panel1LabCatChildSmImgDivBack'+postBack.id).addClass('post_load_on');
							$('#panel1LabCatChildSmImgDivBack'+postBack.id).css("background-image", "url('" + clientImgBase + postBack.smImg + "')");
						}
					}
					if (document.getElementById('panel1LabCatSubBigImgDivBack'+postBack.id) && postBack.bigImg != "") {
						if ($('#panel1LabCatSubBigImgDivBack'+postBack.id).hasClass('post_load_on')){}
						else {
							$('#panel1LabCatSubBigImgDivBack'+postBack.id).addClass('post_load_on');
							$('#panel1LabCatSubBigImgDivBack'+postBack.id).css("background-image", "url('" + clientImgBase + postBack.bigImg + "')");
						}
					}
					if (document.getElementById('panel1LabCatSubSmImgDivBack'+postBack.id) && postBack.smImg != "") {
						if ($('#panel1LabCatSubSmImgDivBack'+postBack.id).hasClass('post_load_on')){}
						else {
							$('#panel1LabCatSubSmImgDivBack'+postBack.id).addClass('post_load_on');
							$('#panel1LabCatSubSmImgDivBack'+postBack.id).css("background-image", "url('" + clientImgBase + postBack.smImg + "')");
						}
					}
				}
			});
		}
	}
	if (theType == 'prod') {plPostProd = 2;}
	if (theType == 'cat') {plPostCat = 2;}
	if (theType == 'lab') {plPostLab = 2;}
}
function numeratorConnect() {
	var param = {};
	var mtParamArray = [];
	mtParamArray[mtParamArray.length] = ["CLIENT", coreClient];
	mtParamArray[mtParamArray.length] = ["PROD", prodCartArray.toString(",")];
	mtParamArray[mtParamArray.length] = ["GLOG", gLog];
	mtParamArray[mtParamArray.length] = ["DEFCTRY", 1];
	mtParamArray[mtParamArray.length] = ["MKTON", MKTON];
	mtParamArray[mtParamArray.length] = ["NCID", NCID];
	mtParamArray[mtParamArray.length] = ["APO", APO];
	mtParamArray[mtParamArray.length] = ["LA", document.getElementById('LA').value];
	mtParamArray[mtParamArray.length] = ["LO", document.getElementById('LO').value];
	mtParamArray[mtParamArray.length] = ["UTMC", utm_campaign];
	for (l=0;l<mtParamArray.length;l++) {
		param[mtParamArray[l][0]] = mtParamArray[l][1];
	}
	if(gLog==1){console.log("numeratorConnect - Params: ",param);}
	$.post(controlURL + scriptVersion + "/markettrack.php", param, function(data){
		var postBack = JSON.parse(data);
		if(gLog==1){console.log("numeratorConnect - Response: ",postBack);}
		if (postBack.onretClientArray.count != 0) {
			onretClientArray.length = 0;
			for (x=0; x<postBack.onretClientArray.count; x++) {
				onretClientArray[x]=[postBack.onretClientArray.val[x].id, postBack.onretClientArray.val[x].ret_id, postBack.onretClientArray.val[x].text, postBack.onretClientArray.val[x].web, postBack.onretClientArray.val[x].mobile, postBack.onretClientArray.val[x].inc, postBack.onretClientArray.val[x].name, postBack.onretClientArray.val[x].image, postBack.onretClientArray.val[x].type, postBack.onretClientArray.val[x].sort, postBack.onretClientArray.val[x].no_prod,0,""];
			}
		}
		if (postBack.onretZipArray.count != 0) {
			onretZipArray.length = 0;
			for (x=0; x<postBack.onretZipArray.count; x++) {
				onretZipArray[x]=[postBack.onretZipArray.val[x].id, postBack.onretZipArray.val[x].ret_id, postBack.onretZipArray.val[x].zip];
			}
		}
		if (postBack.onretProdArray.count != 0) {
			onretProdArray.length = 0;
			var onretSrcL = 0;
			var onretSrcMT = 0;
			var onretSrcSM = 0;
			for (x=0; x<postBack.onretProdArray.count; x++) {
				onretProdArray[x]=[postBack.onretProdArray.val[x].id, postBack.onretProdArray.val[x].ret_id, postBack.onretProdArray.val[x].prod_id, postBack.onretProdArray.val[x].web, postBack.onretProdArray.val[x].mobile, postBack.onretProdArray.val[x].connotate, postBack.onretProdArray.val[x].price, postBack.onretProdArray.val[x].available, postBack.onretProdArray.val[x].dedup, postBack.onretProdArray.val[x].source];
				if (postBack.onretProdArray.val[x].source == 1) {
					onretSrcL++;
				}
				else if (postBack.onretProdArray.val[x].source == 2) {
					onretSrcMT++;
				}
				else if (postBack.onretProdArray.val[x].source == 4) {
					onretSrcSM++;
				}
			}
		}
		if(gLog==1){console.log("numeratorConnect - Result Sources (local/MT/Sem3): ",onretSrcL,onretSrcMT,onretSrcSM);}
		if (postBack.onretClientArray.count != 0 || postBack.onretZipArray.count != 0 || postBack.onretProdArray.count != 0) {
			if(gLog==1){console.log("numeratorConnect - Online Retailers (client/zip/prod): ",postBack.onretClientArray.count,postBack.onretZipArray.count,postBack.onretProdArray.count);}
		}
		var orFoundArr = [];
		for (c=0; c<prodDisplayArray.length; c++) {
			for (p=0; p<onretProdArray.length; p++) {
				if (onretProdArray[p][2] == prodDisplayArray[c][0]) {
					orFoundArr.push(onretProdArray[p][1]);
				}
			}
		}
		var ocFoundArr = orFoundArr.filter( onlyUnique );
		if(gLog==1){console.log("numeratorConnect - ocFoundArr: ",ocFoundArr);}
		if (ocFoundArr.length != 0) {
			if (document.getElementById('panel1ECommButton')) {
				document.getElementById('panel1ECommButton').style.display = "block";
			}
			if (document.getElementById('panel1ECommButtonNone')) {
				document.getElementById('panel1ECommButtonNone').style.display = "none";
			}
			if (document.getElementById('panel1ECommButtonLoad')) {
				document.getElementById('panel1ECommButtonLoad').style.display = "none";
			}
			if (document.getElementById('panel2ECommButton')) {
				document.getElementById('panel2ECommButton').style.display = "block";
			}
			if (document.getElementById('panel2ECommButtonNone')) {
				document.getElementById('panel2ECommButtonNone').style.display = "none";
			}
			if (document.getElementById('panel2ECommButtonLoad')) {
				document.getElementById('panel2ECommButtonLoad').style.display = "none";
			}
			if (document.getElementById('cpsECommButton')) {
				document.getElementById('cpsECommButton').style.display = "block";
			}
			if (document.getElementById('cpsECommButtonNone')) {
				document.getElementById('cpsECommButtonNone').style.display = "none";
			}
			if (document.getElementById('cpsECommButtonLoad')) {
				document.getElementById('cpsECommButtonLoad').style.display = "none";
			}
		}
		else {
			if (document.getElementById('panel1ECommButton')) {
				document.getElementById('panel1ECommButton').style.display = "none";
			}
			if (document.getElementById('panel1ECommButtonNone')) {
				document.getElementById('panel1ECommButtonNone').style.display = "block";
			}
			if (document.getElementById('panel1ECommButtonLoad')) {
				document.getElementById('panel1ECommButtonLoad').style.display = "none";
			}
			if (document.getElementById('panel2ECommButton')) {
				document.getElementById('panel2ECommButton').style.display = "none";
			}
			if (document.getElementById('panel2ECommButtonNone')) {
				document.getElementById('panel2ECommButtonNone').style.display = "block";
			}
			if (document.getElementById('panel2ECommButtonLoad')) {
				document.getElementById('panel2ECommButtonLoad').style.display = "none";
			}
			if (document.getElementById('cpsECommButton')) {
				document.getElementById('cpsECommButton').style.display = "none";
			}
			if (document.getElementById('cpsECommButtonNone')) {
				document.getElementById('cpsECommButtonNone').style.display = "block";
			}
			if (document.getElementById('cpsECommButtonLoad')) {
				document.getElementById('cpsECommButtonLoad').style.display = "none";
			}
		}
	});
}
function catModalClose(whatPanel) {
	if(gLog==1){console.log("catModalClose - " + whatPanel,pNum);}
	var pNum = whatPanel.substring(5,6);
	document.getElementById('catModalBack').style.display = "none";
	document.getElementById('catModalFront').style.display = "none";
	var pNum = whatPanel.substring(5,6);
	document.getElementById(whatPanel).style.display = "block";
}
function premiseModalClose(whatPanel) {
	if(gLog==1){console.log("premiseModalClose - " + whatPanel,pNum);}
	var pNum = whatPanel.substring(5,6);
	document.getElementById('premiseModalBack').style.display = "none";
	document.getElementById('premiseModalFront').style.display = "none";
	var pNum = whatPanel.substring(5,6);
	document.getElementById(whatPanel).style.display = "block";
}
function compilePremiseFilter(whatPanel) {
	var baseHTML = autotextIt(p0TemplateSet.premiseBaseDiv,"premiseBase");
}
function switchLocator(theURL) {
	parent.postMessage("LCTN:"+theURL,refurl);
}
function GTMit(daType,daAction,daThang,daInt) {
	if(gLog==1){window.console.log("GTMit START - ",daThang,daInt);}
	var compIt = coreClient + "_" + version + "_" + document.getElementById("SESSID").value + "_" + daThang;
	try {
		var postObject = JSON.stringify({
			eventCategory:"DESTINI_"+daType,
			eventAction:daAction,
			eventLabel:compIt,
			gtmType:gtm,
			utm_campaign:utm_campaign,
			utm_medium:utm_medium,
			utm_source:utm_source,
			interaction:daInt
		});
		parent.postMessage(postObject, "*");
		if(gLog==1){window.console.log("GTMit postObject - ",postObject);}
	}
	catch(e) {
		if(gLog==1){window.console && window.console.log(e);}
	}
}
function couponModalClose(whatPanel) {
	if(gLog==1){console.log("couponModalClose - " + whatPanel,pNum);}
	var pNum = whatPanel.substring(5,6);
	document.getElementById('couponModalBack').style.display = "none";
	document.getElementById('couponModalFront').style.display = "none";
	var pNum = whatPanel.substring(5,6);
	document.getElementById(whatPanel).style.display = "block";
}
function couponModal(whatX,whatID) {
	if(gLog==1){console.log("couponModal START - " + whatX,whatID);}
	for (coup in storeDisplayArray[whatX][33].coupons) {
		if (storeDisplayArray[whatX][33].coupons[coup].id == whatID) {
			couponHTML = autotextIt(p0TemplateSet.couponModalDiv,"couponModal");
			var closeButtonTagStart = couponHTML.indexOf("<!--CLOSEBUTTON");
			if (closeButtonTagStart != -1) {
				var closeButtonTagEnd = couponHTML.indexOf(">",closeButtonTagStart);
				var closeButtonTagStrip = couponHTML.substring(closeButtonTagStart,(closeButtonTagEnd+1));
				var closeButtonHTMLStart = couponHTML.substr(0,closeButtonTagStart);
				var closeButtonHTMLEnd = couponHTML.substr((closeButtonTagEnd+1));
				var closeButtonRender = "";
				var closeButtonValueStart = closeButtonTagStrip.indexOf(" VALUE=");
				if (closeButtonValueStart != -1) {
					var closeButtonValueEnd = closeButtonTagStrip.indexOf("]",closeButtonValueStart);
					var closeButtonValueVar = closeButtonTagStrip.substring((closeButtonValueStart+8),(closeButtonValueEnd));
				}
				else {
					var closeButtonValueVar = "CLOSE";
				}
				var closeButtonItalicStart = closeButtonTagStrip.indexOf(" FNTAW=");
				if (closeButtonItalicStart != -1) {
					var closeButtonItalicEnd = closeButtonTagStrip.indexOf("]",closeButtonItalicStart);
					var closeButtonItalicVar = "<i class='fa " + closeButtonTagStrip.substring((closeButtonItalicStart+8),(closeButtonItalicEnd)) + "'><\/i>";
				}
				else {
					var closeButtonItalicVar = "";
				}
				closeButtonRender += "<div id='couponModalCloseButton' class='coupon_modal_close_button coupon_modal_close_button_off'";
				if (hoverState==1) {
					closeButtonRender += " onmouseover='genericButtonOver(\"coupon_modal_close_button\",\"coupon_modal_close_button\");' onfocus='genericButtonOver(\"coupon_modal_close_button\",\"coupon_modal_close_button\");' onmouseout='genericButtonOut(\"coupon_modal_close_button\",\"coupon_modal_close_button\");' onblur='genericButtonOut(\"coupon_modal_close_button\",\"coupon_modal_close_button\");'";
				}
				closeButtonRender += " onclick='couponModalClose(\"" + whatPanelUp + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){couponModalClose(\"" + whatPanelUp + "\");}' tabindex='0' title=\"Close\">" + closeButtonItalicVar + closeButtonValueVar + "<\/div>";
				couponHTML = closeButtonHTMLStart + closeButtonRender + closeButtonHTMLEnd;
			}
			var coupStoreTagStart = couponHTML.indexOf("<!--STORENAME");
			if (coupStoreTagStart != -1) {
				var coupStoreTagEnd = couponHTML.indexOf(">",coupStoreTagStart);
				var coupStoreHTMLStart = couponHTML.substr(0,coupStoreTagStart);
				var coupStoreHTMLEnd = couponHTML.substr((coupStoreTagEnd+1));
				var coupStoreStrip = couponHTML.substring(coupStoreHTMLStart,(coupStoreHTMLEnd+1));
				couponHTML = coupStoreHTMLStart + "<span class='coupon_modal_store_name'>" + storeDisplayArray[whatX][0] + "<\/span>" + coupStoreHTMLEnd;
			}
			var coupTitleTagStart = couponHTML.indexOf("<!--TITLE");
			if (coupTitleTagStart != -1) {
				var coupTitleTagEnd = couponHTML.indexOf(">",coupTitleTagStart);
				var coupTitleHTMLStart = couponHTML.substr(0,coupTitleTagStart);
				var coupTitleHTMLEnd = couponHTML.substr((coupTitleTagEnd+1));
				var coupTitleStrip = couponHTML.substring(coupTitleHTMLStart,(coupTitleHTMLEnd+1));
				couponHTML = coupTitleHTMLStart + "<span class='coupon_modal_title'>" + storeDisplayArray[whatX][33].coupons[coup].title + "<\/span>" + coupTitleHTMLEnd;
			}
			var coupDescTagStart = couponHTML.indexOf("<!--DESC");
			if (coupDescTagStart != -1) {
				var coupDescTagEnd = couponHTML.indexOf(">",coupDescTagStart);
				var coupDescHTMLStart = couponHTML.substr(0,coupDescTagStart);
				var coupDescHTMLEnd = couponHTML.substr((coupDescTagEnd+1));
				var coupDescStrip = couponHTML.substring(coupDescHTMLStart,(coupDescHTMLEnd+1));
				couponHTML = coupDescHTMLStart + "<span class='coupon_modal_desc'>" + storeDisplayArray[whatX][33].coupons[coup].description + "<\/span>" + coupDescHTMLEnd;
			}
			var coupLogoTagStart = couponHTML.indexOf("<!--LOGO");
			if (coupLogoTagStart != -1 && storeDisplayArray[whatX][33].coupons[coup].retailerReloLogo != null) {
				var coupLogoTagEnd = couponHTML.indexOf(">",coupLogoTagStart);
				var coupLogoHTMLStart = couponHTML.substr(0,coupLogoTagStart);
				var coupLogoHTMLEnd = couponHTML.substr((coupLogoTagEnd+1));
				var coupLogoStrip = couponHTML.substring(coupLogoHTMLStart,(coupLogoHTMLEnd+1));
				couponHTML = coupLogoHTMLStart + "<img title=\"" + storeDisplayArray[whatX][0] + "\" alt=\"" + storeDisplayArray[whatX][0] + "\" class='coupon_modal_logo' src='" + storeDisplayArray[whatX][33].coupons[coup].retailerReloLogo + "'>" + coupLogoHTMLEnd;
			}
			var coupImageTagStart = couponHTML.indexOf("<!--IMAGE");
			if (coupImageTagStart != -1) {
				var coupImageTagEnd = couponHTML.indexOf(">",coupImageTagStart);
				var coupImageHTMLStart = couponHTML.substr(0,coupImageTagStart);
				var coupImageHTMLEnd = couponHTML.substr((coupImageTagEnd+1));
				var coupImageStrip = couponHTML.substring(coupImageHTMLStart,(coupImageHTMLEnd+1));
				if (hoverState==1) {
					if (storeDisplayArray[whatX][33].coupons[coup].campaignImageUrl == null) {
						couponHTML = coupImageHTMLStart + '<!--NULLIMAGE-->' + coupImageHTMLEnd;
					}
					else if (storeDisplayArray[whatX][33].store.mobileWrapReloLogo == null) {
						couponHTML = coupImageHTMLStart + "<div class='coupon_modal_image_wrap' style='background-image:url(\"" + clientReloBase + "5e5d68fc24ea4generic-coupon-background.png\")'><img title=\"" + storeDisplayArray[whatX][33].coupons[coup].title + "\" alt=\"" + storeDisplayArray[whatX][33].coupons[coup].title + "\" class='coupon_modal_image' src='" + storeDisplayArray[whatX][33].coupons[coup].campaignImageUrl + "'><\/div>" + coupImageHTMLEnd;
					}
					else {
						couponHTML = coupImageHTMLStart + "<div class='coupon_modal_image_wrap' style='background-image:url(\"" + storeDisplayArray[whatX][33].store.mobileWrapReloLogo + "\")'><img title=\"" + storeDisplayArray[whatX][33].coupons[coup].title + "\" alt=\"" + storeDisplayArray[whatX][33].coupons[coup].title + "\" class='coupon_modal_image' src='" + storeDisplayArray[whatX][33].coupons[coup].campaignImageUrl + "'><\/div>" + coupImageHTMLEnd;
					}
				}
				else {
					if (storeDisplayArray[whatX][33].coupons[coup].campaignImageUrl == null) {
						couponHTML = coupImageHTMLStart + '<!--NULLIMAGE-->' + coupImageHTMLEnd;
					}
					else {
						couponHTML = coupImageHTMLStart + "<img title=\"" + storeDisplayArray[whatX][33].coupons[coup].title + "\" alt=\"" + storeDisplayArray[whatX][33].coupons[coup].title + "\" class='coupon_modal_image_mobile' src='" + storeDisplayArray[whatX][33].coupons[coup].campaignImageUrl + "'>" + coupImageHTMLEnd;
					}
				}
			}
			var buyButtonTagStart = couponHTML.indexOf("<!--BUYBUTTON");
			if (buyButtonTagStart != -1) {
				var buyButtonTagEnd = couponHTML.indexOf(">",buyButtonTagStart);
				var buyButtonTagStrip = couponHTML.substring(buyButtonTagStart,(buyButtonTagEnd+1));
				var buyButtonHTMLStart = couponHTML.substr(0,buyButtonTagStart);
				var buyButtonHTMLEnd = couponHTML.substr((buyButtonTagEnd+1));
				var buyButtonRender = "";
				var buyButtonValueStart = buyButtonTagStrip.indexOf(" VALUE=");
				if (buyButtonValueStart != -1) {
					var buyButtonValueEnd = buyButtonTagStrip.indexOf("]",buyButtonValueStart);
					var buyButtonValueVar = buyButtonTagStrip.substring((buyButtonValueStart+8),(buyButtonValueEnd));
				}
				else {
					var buyButtonValueVar = "CLOSE";
				}
				var buyButtonItalicStart = buyButtonTagStrip.indexOf(" FNTAW=");
				if (buyButtonItalicStart != -1) {
					var buyButtonItalicEnd = buyButtonTagStrip.indexOf("]",buyButtonItalicStart);
					var buyButtonItalicVar = "<i class='fa " + buyButtonTagStrip.substring((buyButtonItalicStart+8),(buyButtonItalicEnd)) + "'><\/i>";
				}
				else {
					var buyButtonItalicVar = "";
				}
				buyButtonRender += "<div id='couponModalCloseButton' class='coupon_modal_buy_button coupon_modal_buy_button_off'";
				if (hoverState==1) {
					buyButtonRender += " onmouseover='genericButtonOver(\"coupon_modal_buy_button\",\"coupon_modal_buy_button\");' onfocus='genericButtonOver(\"coupon_modal_buy_button\",\"coupon_modal_buy_button\");' onmouseout='genericButtonOut(\"coupon_modal_buy_button\",\"coupon_modal_buy_button\");' onblur='genericButtonOut(\"coupon_modal_buy_button\",\"coupon_modal_buy_button\");'";
				}
				buyButtonRender += " onclick='couponBuy("+whatX+",\"" + storeDisplayArray[whatX][33].coupons[coup].id + "\",\"" + storeDisplayArray[whatX][33].coupons[coup].actionUrl + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){couponBuy("+whatX+",\"" + storeDisplayArray[whatX][33].coupons[coup].id + "\",\"" + storeDisplayArray[whatX][33].coupons[coup].actionUrl + "\");}' tabindex='0' title=\"Close\">" + buyButtonItalicVar + buyButtonValueVar + "<\/div>";
				couponHTML = buyButtonHTMLStart + buyButtonRender + buyButtonHTMLEnd;
			}
			var coupStartDateTagStart = couponHTML.indexOf("<!--STARTDATE");
			if (coupStartDateTagStart != -1) {
				var coupStartDateTagEnd = couponHTML.indexOf(">",coupStartDateTagStart);
				var coupStartDateHTMLStart = couponHTML.substr(0,coupStartDateTagStart);
				var coupStartDateHTMLEnd = couponHTML.substr((coupStartDateTagEnd+1));
				var coupStartDateStrip = couponHTML.substring(coupStartDateHTMLStart,(coupStartDateHTMLEnd+1));
				couponHTML = coupStartDateHTMLStart + "<span class='coupon_modal_start'>" + storeDisplayArray[whatX][33].coupons[coup].createDate + "<\/span>" + coupStartDateHTMLEnd;
			}
			var coupEndDateTagStart = couponHTML.indexOf("<!--ENDDATE");
			if (coupEndDateTagStart != -1) {
				var coupEndDateTagEnd = couponHTML.indexOf(">",coupEndDateTagStart);
				var coupEndDateHTMLStart = couponHTML.substr(0,coupEndDateTagStart);
				var coupEndDateHTMLEnd = couponHTML.substr((coupEndDateTagEnd+1));
				var coupEndDateStrip = couponHTML.substring(coupEndDateHTMLStart,(coupEndDateHTMLEnd+1));
				couponHTML = coupEndDateHTMLStart + "<span class='coupon_modal_end'>" + storeDisplayArray[whatX][33].coupons[coup].expireDate + "<\/span>" + coupEndDateHTMLEnd;
			}
			document.getElementById("couponModalFront").innerHTML = couponHTML;
			$("#couponModalBack").fadeIn(100);
			$("#couponModalFront").fadeIn(100);
		}
	}
	couponTrack(whatX,whatID,31);
}
function couponBuy(whatX,whatID,whatLink) {
	if(gLog==1){console.log("couponBuy START - " + whatLink);}
	window.open(whatLink, "_blank");
	couponTrack(whatX,whatID,32);
}
function couponTrack(whatIDX,whatID,whatCODE) {
	if(gLog==1){console.log("couponTrack START - " ,whatIDX,whatID,whatCODE);}
	setTimeout(function(){
		var sendObj = setTrackObj();
		sendObj['TRK'] = whatCODE;
		sendObj['PAN'] = whatPanelUp;
		sendObj['COUP'] = {};
		var whatGTMArr = [];
		if (whatID == "xxx" && storeDisplayArray[whatIDX][33].coupons) {
			for (coup in storeDisplayArray[whatIDX][33].coupons) {
				sendObj['COUP'][coup] = storeDisplayArray[whatIDX][33].coupons[coup].id;
				whatGTMArr.push(storeDisplayArray[whatIDX][33].coupons[coup].id);
			}
		}
		else if (storeDisplayArray[whatIDX][33].coupons) {
			sendObj['COUP'][0] = whatID;
			whatGTMArr[0] = whatID;
		}
		if (gtm != 0) {
			var whatGTMIDs = whatGTMArr.toString(",");
			if (whatCODE == 30) {
				GTMit("DESTINI_CPN_VIEW", "response", whatGTMIDs,false);
			}
			else if (whatCODE == 31) {
				GTMit("DESTINI_CPN_MDL", "response", whatGTMIDs,false);
			}
			else if (whatCODE == 32) {
				GTMit("DESTINI_CPN_CLK", "response", whatGTMIDs,false);
			}
		}
		sendTrackObj(sendObj);
	},10);
}
function copyModalClose() {
	if(gLog==1){console.log("copyModalClose - " + whatPanelUp,pNum);}
	var pNum = whatPanelUp.substring(5,6);
	document.getElementById('copyModalBack').style.display = "none";
	document.getElementById('copyModalFront').style.display = "none";
	var pNum = whatPanelUp.substring(5,6);
	document.getElementById(whatPanelUp).style.display = "block";
}
function copyModal() {
	if(gLog==1){console.log("copyModal START");}
	copyHTML = autotextIt(p0TemplateSet.copyModalDiv,"copyModal");
	var closeButtonTagStart = copyHTML.indexOf("<!--CLOSEBUTTON");
	if (closeButtonTagStart != -1) {
		var closeButtonTagEnd = copyHTML.indexOf(">",closeButtonTagStart);
		var closeButtonTagStrip = copyHTML.substring(closeButtonTagStart,(closeButtonTagEnd+1));
		var closeButtonHTMLStart = copyHTML.substr(0,closeButtonTagStart);
		var closeButtonHTMLEnd = copyHTML.substr((closeButtonTagEnd+1));
		var closeButtonRender = "";
		var closeButtonValueStart = closeButtonTagStrip.indexOf(" VALUE=");
		if (closeButtonValueStart != -1) {
			var closeButtonValueEnd = closeButtonTagStrip.indexOf("]",closeButtonValueStart);
			var closeButtonValueVar = closeButtonTagStrip.substring((closeButtonValueStart+8),(closeButtonValueEnd));
		}
		else {
			var closeButtonValueVar = "CLOSE";
		}
		var closeButtonItalicStart = closeButtonTagStrip.indexOf(" FNTAW=");
		if (closeButtonItalicStart != -1) {
			var closeButtonItalicEnd = closeButtonTagStrip.indexOf("]",closeButtonItalicStart);
			var closeButtonItalicVar = "<i class='fa " + closeButtonTagStrip.substring((closeButtonItalicStart+8),(closeButtonItalicEnd)) + "'><\/i>";
		}
		else {
			var closeButtonItalicVar = "";
		}
		closeButtonRender += "<div id='copyModalCloseButton' class='copy_modal_close_button copy_modal_close_button_off'";
		if (hoverState==1) {
			closeButtonRender += " onmouseover='genericButtonOver(\"copy_modal_close_button\",\"copy_modal_close_button\");' onfocus='genericButtonOver(\"copy_modal_close_button\",\"copy_modal_close_button\");' onmouseout='genericButtonOut(\"copy_modal_close_button\",\"copy_modal_close_button\");' onblur='genericButtonOut(\"copy_modal_close_button\",\"copy_modal_close_button\");'";
		}
		closeButtonRender += " onclick='copyModalClose(\"" + whatPanelUp + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){copyModalClose();}' tabindex='0' title=\"Close\">" + closeButtonItalicVar + closeButtonValueVar + "<\/div>";
		copyHTML = closeButtonHTMLStart + closeButtonRender + closeButtonHTMLEnd;
	}
	var copyButtonTagStart = copyHTML.indexOf("<!--COPYBUTTON");
	if (copyButtonTagStart != -1) {
		var copyButtonTagEnd = copyHTML.indexOf(">",copyButtonTagStart);
		var copyButtonTagStrip = copyHTML.substring(copyButtonTagStart,(copyButtonTagEnd+1));
		var copyButtonHTMLStart = copyHTML.substr(0,copyButtonTagStart);
		var copyButtonHTMLEnd = copyHTML.substr((copyButtonTagEnd+1));
		var copyButtonRender = "";
		var copyButtonValueStart = copyButtonTagStrip.indexOf(" VALUE=");
		if (copyButtonValueStart != -1) {
			var copyButtonValueEnd = copyButtonTagStrip.indexOf("]",copyButtonValueStart);
			var copyButtonValueVar = copyButtonTagStrip.substring((copyButtonValueStart+8),(copyButtonValueEnd));
		}
		else {
			var copyButtonValueVar = "CLOSE";
		}
		var copyButtonItalicStart = copyButtonTagStrip.indexOf(" FNTAW=");
		if (copyButtonItalicStart != -1) {
			var copyButtonItalicEnd = copyButtonTagStrip.indexOf("]",copyButtonItalicStart);
			var copyButtonItalicVar = "<i class='fa " + copyButtonTagStrip.substring((copyButtonItalicStart+8),(copyButtonItalicEnd)) + "'><\/i>";
		}
		else {
			var copyButtonItalicVar = "";
		}
		copyButtonRender += "<div id='copyModalCloseButton' class='copy_modal_copy_button copy_modal_copy_button_off'";
		if (hoverState==1) {
			copyButtonRender += " onmouseover='genericButtonOver(\"copy_modal_copy_button\",\"copy_modal_copy_button\");' onfocus='genericButtonOver(\"copy_modal_copy_button\",\"copy_modal_copy_button\");' onmouseout='genericButtonOut(\"copy_modal_copy_button\",\"copy_modal_copy_button\");' onblur='genericButtonOut(\"copy_modal_copy_button\",\"copy_modal_copy_button\");'";
		}
		copyButtonRender += " tabindex='0' title=\"Copy\">" + copyButtonItalicVar + copyButtonValueVar + "<\/div>";
		copyHTML = copyButtonHTMLStart + copyButtonRender + copyButtonHTMLEnd;
	}
	var copyTextTagStart = copyHTML.indexOf("<!--COPYTEXT");
	if (copyTextTagStart != -1) {
		var copyTextTagEnd = copyHTML.indexOf(">",copyTextTagStart);
		var copyTextHTMLStart = copyHTML.substr(0,copyTextTagStart);
		var copyTextHTMLEnd = copyHTML.substr((copyTextTagEnd+1));
		var copyTextStrip = copyHTML.substring(copyTextHTMLStart,(copyTextHTMLEnd+1));
		copyHTML = copyTextHTMLStart + "<span id='copyModalText' class='copy_modal_text'><\/span>" + copyTextHTMLEnd;
	}
	var copyTextareaTagStart = copyHTML.indexOf("<!--TEXTAREA");
	if (copyTextareaTagStart != -1) {
		var copyTextareaTagEnd = copyHTML.indexOf(">",copyTextareaTagStart);
		var copyTextareaHTMLStart = copyHTML.substr(0,copyTextareaTagStart);
		var copyTextareaHTMLEnd = copyHTML.substr((copyTextareaTagEnd+1));
		var copyTextareaStrip = copyHTML.substring(copyTextareaHTMLStart,(copyTextareaHTMLEnd+1));
		copyHTML = copyTextareaHTMLStart + "<div id='copyModalShowarea'><\/div>" + copyTextareaHTMLEnd;
	}
	document.getElementById("copyModalFront").innerHTML = "<form name='copyForm' id='copyForm' class='copy_form' onsubmit='return false;' accept-charset='GB18030' aria-hidden='true'>" + copyHTML + "</form>";
	if (copyButtonTagStart != -1 && copyTextareaTagStart != -1) {
		var copyObjButton = document.querySelector('.copy_modal_copy_button');
		copyObjButton.addEventListener('click', function(event) {
			document.getElementById('copyModalTextarea').focus();
			document.getElementById('copyModalTextarea').select();
			document.execCommand('copy');
			copyModalClose();
		});
	}
}
var copyBaseText = "";
var copyWhatElm = "";
function copyIt(str,whatElm,baseText,altText,whatTitle) {
	if(gLog==1){console.log("copyIt - START",str);}
	if (canCopy == 1 && document.getElementById('copyModalTextarea')) {
		canCopy = 0;
		document.getElementById(whatElm).innerHTML = altText;
		document.getElementById('copyModalShowarea').innerHTML = str;
		var writeStr = str;
		var brVal =  1;
		while (brVal == 1) {
			var brValTagStart = writeStr.indexOf("<br>");
			if (brValTagStart != -1) {
				var brValTagEnd = writeStr.indexOf(">",brValTagStart+1);
				var brValHTMLStart = writeStr.substr(0,brValTagStart);
				var brValHTMLEnd = writeStr.substr((brValTagEnd+1));
				writeStr = brValHTMLStart + "\r\n" + brValHTMLEnd;
			}
			else {
				brVal = 0;
			}
		}
		var anVal =  1;
		while (anVal == 1) {
			var anValTagStart = writeStr.indexOf("<a");
			if (anValTagStart != -1) {
				var anValTagEnd = writeStr.indexOf(">",anValTagStart+1);
				var anValHTMLStart = writeStr.substr(0,anValTagStart);
				var anValHTMLEnd = writeStr.substr((anValTagEnd+1));
				writeStr = anValHTMLStart + anValHTMLEnd;
			}
			var anxValTagStart = writeStr.indexOf("</a");
			if (anxValTagStart != -1) {
				var anxValTagEnd = writeStr.indexOf(">",anxValTagStart+1);
				var anxValHTMLStart = writeStr.substr(0,anxValTagStart);
				var anxValHTMLEnd = writeStr.substr((anxValTagEnd+1));
				writeStr = anxValHTMLStart + anxValHTMLEnd;
			}
			else {
				anVal = 0;
			}
		}
		document.getElementById('copyModalTextarea').value = writeStr;
		if (whatTitle && document.getElementById('copyModalText')) {
			document.getElementById('copyModalText').innerHTML = whatTitle;
		}
		$("#copyModalBack").fadeIn(100);
		$("#copyModalFront").fadeIn(100);
		copyWhatElm = whatElm;
		setTimeout(function() {
			document.getElementById(copyWhatElm).innerHTML = baseText;
			canCopy = 1;
		}, 2000);
	}
}
function storeWeb(sInd) {
	if (document.getElementById('PROD').value.indexOf(",")) {
		var testProdArr = document.getElementById('PROD').value.split(",");
	}
	else {
		var testProdArr = new Array(document.getElementById('PROD').value);
	}
	var fullProdArr = document.getElementById('FULLPROD').value.split(",");
	var prodSetVal = "SOME";
	if (testProdArr.length == fullProdArr.length) {
		prodSetVal =  "ALL";
	}
	var compProdArr = [];
	for (j=0; j<testProdArr.length; j++) {
		for (w=0; w<prodDisplayArray.length; w++) {
			if (prodDisplayArray[w][1] == testProdArr[j]) {
				compProdArr.push(prodDisplayArray[w][0]);
				break;
			}
		}
	}
	var compProdVal = compProdArr.toString(",");
	if (compProdVal == "") {
		if (resp_prod == "" || resp_prod.length == prodSelString.length) {
			prodSetVal =  "ALL";
			compProdVal = prodSelString;
		}
		else {
			prodSetVal =  "SOME";
			compProdVal = resp_prod;
		}
	}
	if (gtm != 0) {
		GTMit("STOREWEB", "click", storeDisplayArray[sInd][0] + "|" + storeDisplayArray[sInd][1] + "|" + storeDisplayArray[sInd][3] + "|" + storeDisplayArray[sInd][4] + "|" + storeDisplayArray[sInd][5] + "|" + storeDisplayArray[sInd][6] + "|" + storeDisplayArray[sInd][7] + "|" + storeDisplayArray[sInd][27] + "|" + storeDisplayArray[sInd][8] + "|" + storeDisplayArray[sInd][22],false);
	}
	setTimeout(function(){
		var sendObj = setTrackObj();
		sendObj['TRK'] = 36;
		sendObj['RQF'] = "storeWebsite";
		sendObj['LOC'] = {};
		sendObj['LOC']['CMP'] = document.getElementById('addressCompile').value.replace(/"/g, '');
		sendObj['LOC']['LAT'] = parseFloat(document.getElementById('LA').value).toFixed(5);
		sendObj['LOC']['LNG'] = parseFloat(document.getElementById('LO').value).toFixed(5);
		sendObj['LOC']['CTY'] = document.getElementById('revCodeCity').value.replace(/"/g, '');
		sendObj['LOC']['STA'] = document.getElementById('revCodeState').value;
		sendObj['LOC']['ZIP'] = document.getElementById('revCodeZip').value;
		sendObj['LOC']['CNT'] = document.getElementById('revCodeCountry').value;
		sendObj['LOC']['USC'] = document.getElementById('revCodeUS').value;
		sendObj['PLT'] = compProdVal;
		sendObj['PST'] = prodSetVal;
		sendObj['STR'] = {};
		sendObj['STR'][0] = {};
		sendObj['STR'][0]['ORD'] = 1;
		sendObj['STR'][0]['FED'] = storeDisplayArray[sInd][16];
		sendObj['STR'][0]['LAT'] = storeDisplayArray[sInd][6];
		sendObj['STR'][0]['LNG'] = storeDisplayArray[sInd][7];
		sendObj['STR'][0]['NAM'] = storeDisplayArray[sInd][0];
		sendObj['STR'][0]['ADD'] = storeDisplayArray[sInd][1];
		sendObj['STR'][0]['ADT'] = storeDisplayArray[sInd][2];
		sendObj['STR'][0]['CTY'] = storeDisplayArray[sInd][3];
		sendObj['STR'][0]['STA'] = storeDisplayArray[sInd][4];
		sendObj['STR'][0]['ZIP'] = storeDisplayArray[sInd][5];
		sendObj['STR'][0]['CNT'] = storeDisplayArray[sInd][27];
		sendObj['STR'][0]['PRD'] = storeDisplayArray[sInd][9];
		sendObj['STR'][0]['WEB'] = storeDisplayArray[sInd][22];
		sendObj['STC'] = 1;
		sendTrackObj(sendObj);
	},300);
	window.open(storeDisplayArray[sInd][22]);
}
scriptLoad++;

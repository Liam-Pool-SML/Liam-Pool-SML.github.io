var optWhatLang = "US-EN";
var optWhatCountry = "US";
var optIsRevealed = 0;
function optClose() {
	if(gLog==1){console.log("optClose");}
	document.getElementById('optModalBack').style.display = "none";
	document.getElementById('optModalFront').style.display = "none";
}
function optReveal() {
	if(gLog==1){console.log("optReveal");}
	$(".optoutControl_select").toggle();
	if (optIsRevealed == 0) {
		optIsRevealed = 1;
	}
	else {
		optIsRevealed = 0;
	}
	if (document.getElementById('optoutBottom_'+optWhatLang) && optIsRevealed == 1) {
		if(gLog==1){console.log("scrollIntoView");}
		document.getElementById('optoutBottom_'+optWhatLang).scrollIntoView(false);
	}
}
function optShow() {
	if(gLog==1){console.log("optShow - START");}
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
	if (bvOpt >= 5) {
		for (l=0; l<langCodeArr.length; l++) {
			if (langCodeArr[l][2] == 1) {
				optWhatLang = langCodeArr[l][0];
				break;
			}
		}
		for (q=0; q<revCntryMatch.length; q++) {
			if (revCntryMatch[q][0] == autoCountry) {
				optWhatCountry = revCntryMatch[q][1];
				break;
			}
		}
	}
	if(gLog==1){console.log("optWhatLang = ", optWhatLang);}
	if(gLog==1){console.log("optWhatCountry = ", optWhatCountry);}
	var optList = {};
	optList["CB"] = noCache;
	optList["CTRY"] = optWhatCountry;
	if(gLog==1){console.log("optoutConnect - optList ", optList);}
	if(gLog==1){console.log("optoutConnect - " + bvLoc + "optoutConnect.php");}
	$.post(bvLoc + "optoutConnect.php", optList, function(data){
		bvObj = JSON.parse(data);
		if(gLog==1){console.log("optoutConnect - Response: ",bvObj);}
		if(gLog==1){
			if (bvObj.error_count != 0) {
				for (e=0; e<bvObj.error_count; e++) {
					console.log("optoutConnect - Error: ",bvObj.errors[e].error_code,bvObj.errors[e].error_level,bvObj.errors[e].error_scope,bvObj.errors[e].error_desc);
				}
			}
		}
		var thisWidth = document.getElementById('panel0').offsetWidth;
		var baseHTML = bvObj.optoutDiv;
		baseHTML = baseHTML.replace("REFURL","https://destini.co/privacy-policy?LANG="+optWhatLang+"&CTRY="+optWhatCountry);
		var checkBoxTagStart = baseHTML.indexOf("<!--CHECKBOX");
		if (checkBoxTagStart != -1) {
			var checkBoxTagEnd = baseHTML.indexOf(">",checkBoxTagStart);
			var checkBoxTagStrip = baseHTML.substring(checkBoxTagStart,(checkBoxTagEnd+1));
			var checkBoxHTMLStart = baseHTML.substr(0,checkBoxTagStart);
			var checkBoxHTMLEnd = baseHTML.substr((checkBoxTagEnd+1));
			var checkBoxRender = "";
			checkBoxRender = "<div id='privacy_checkbox_" + optWhatLang+ "' class='privacy-checkbox-class'";
 			if (thisWidth > bvWidth) {
				checkBoxRender += " onmouseover='$(\"#privacy_checkbox_" + optWhatLang + "\").addClass(\"privacy-checkbox-hover\");' onmouseout='$(\"#privacy_checkbox_" + optWhatLang + "\").removeClass(\"privacy-checkbox-hover\");'";
			}
			checkBoxRender += " onclick='if($(\"#privacy_checkbox_" + optWhatLang + "\").hasClass(\"privacy-checkbox-active\")){$(\"#privacy_checkbox_" + optWhatLang + "\").removeClass(\"privacy-checkbox-active\");}else{$(\"#privacy_checkbox_" + optWhatLang + "\").addClass(\"privacy-checkbox-active\");}optReveal();'><\/div>";
			baseHTML = checkBoxHTMLStart + checkBoxRender + checkBoxHTMLEnd;
		}
		document.getElementById('optModalFront').innerHTML = baseHTML;
		$(".optoutLang_"+optWhatLang).show();
		if (dutvOpt == 1) {
			$(".optoutControl_confirm").show();
			if(gLog==1){console.log("dutvOpt: SET");}
		}
		else {
			if(gLog==1){console.log("dutvOpt: NOT SET");}
			$(".optoutControl_reveal").show();
		}
		document.getElementById('optModalBack').style.display = "block";
		document.getElementById('optModalFront').style.display = "block";
	});
}
function sendOptTrack() {
	if(gLog==1){console.log("sendOptTrack: START");}
	$(".optoutControl_select").hide();
	$(".optoutControl_reveal").hide();
	$(".optoutControl_confirm").show();
	if (document.getElementById('optoutBottom_'+optWhatLang)) {
		if(gLog==1){console.log("scrollIntoView");}
		document.getElementById('optoutBottom_'+optWhatLang).scrollIntoView(false);
	}
	tempObj = {};
	tempObj['CB'] = noCache;
	tempObj['CLG'] = gLog;
	tempObj['TRK'] = 25;
	tempObj['PNL'] = whatPanelUp.toUpperCase();
	tempObj['ITR'] = iteration;
	tempObj['VER'] = version;
	tempObj['CLI'] = coreClient;
	tempObj['DEV'] = deviceType;
	tempObj['REF'] = referer;
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
	var now = new Date();
	var realMonth = parseInt(now.getUTCMonth()) + 1;
	tempObj['DAT'] = now.getUTCFullYear() + "-" + String("00" + realMonth).slice(-2) + "-" + String("00" + now.getUTCDate()).slice(-2) + " " + String("00" + now.getUTCHours()).slice(-2) + ":" + String("00" + now.getUTCMinutes()).slice(-2) + ":" + String("00" + now.getUTCSeconds()).slice(-2);
	if(gLog==1){console.log("sendOptTrack: " , tempObj);}
	$.post(trackEnd, {sendJSON: tempObj}, function(data){
		if(gLog==1){console.log("trackapi: RESPONSE");}
		document.cookie = "DUTVOPT=1; expires=Fri, 31 Dec 2030 23:59:59 GMT; path=/;";
		dutvOpt = 1;
		setTimeout(function(){optClose()}, 4000);
	});
}
function sendDestiniTrack() {
	if(gLog==1){console.log("sendDestiniTrack: START");}
	tempObj = {};
	tempObj['CB'] = noCache;
	tempObj['CLG'] = gLog;
	tempObj['TRK'] = 26;
	tempObj['PNL'] = whatPanelUp.toUpperCase();
	tempObj['ITR'] = iteration;
	tempObj['VER'] = version;
	tempObj['CLI'] = coreClient;
	tempObj['DEV'] = deviceType;
	tempObj['REF'] = referer;
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
	var now = new Date();
	var realMonth = parseInt(now.getUTCMonth()) + 1;
	tempObj['DAT'] = now.getUTCFullYear() + "-" + String("00" + realMonth).slice(-2) + "-" + String("00" + now.getUTCDate()).slice(-2) + " " + String("00" + now.getUTCHours()).slice(-2) + ":" + String("00" + now.getUTCMinutes()).slice(-2) + ":" + String("00" + now.getUTCSeconds()).slice(-2);
	if(gLog==1){console.log("sendOptTrack: " , tempObj);}
	$.post(trackEnd, {sendJSON: tempObj}, function(data){
		if(gLog==1){console.log("trackapi: RESPONSE");}
		//window.open("https://destini.co/?utm_source="+bvClient, "_blank");
	});
}

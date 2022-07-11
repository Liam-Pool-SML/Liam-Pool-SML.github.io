function panel4Load() {
	p4LocateIt = 0;
	if(gLog==1){console.log("panel4Load - Start");}
	if (prodCartArray.length == 0) {
		if(gLog==1){console.log("panel4Load - prodCartArray FORCE");}
		for (tp=0; tp<prodDisplayArray.length; tp++) {
			prodCartArray.push(prodDisplayArray[tp][0]);
		}
	}
	var prodOn = 0;
	for (q=0; q<prodDisplayArray.length; q++) {
		if (prodDisplayArray[q][9] == 1) {
			prodOn++;
		}
	}
	if(gLog==1){console.log("panel4Load - Start prodCartArray.length / prodDisplayArray[9] = ",prodCartArray.length,prodOn);}
	isItAutoMM = 1;
	storeDisplayArray.length = 0;
	distanceNum = eval(document.getElementById('distance').value);
	scopeNum = eval(document.getElementById('scope').value);
	sortNum = eval(document.getElementById('sort').value);
	resultsNum = eval(document.getElementById('results').value);
	prodString = document.getElementById('PROD').value;
	var hasProd = 0;
	var newIncr = 0;
	if (disableForms == 1) {
		var baseHTML = autotextIt(p4TemplateSet.panel4AltDiv,"panel4");
	}
	else {
		var baseHTML = autotextIt(p4TemplateSet.panel4BaseDiv,"panel4");
	}
	if (baseHTML.length != -1) {
		if (cPanelOp == 1) {
			var controlPanelButtonTagStart = baseHTML.indexOf("<!--CONTROLPANELBUTTON");
			if (controlPanelButtonTagStart != -1) {
				var controlPanelButtonTagEnd = baseHTML.indexOf(">",controlPanelButtonTagStart);
				var controlPanelButtonTagStrip = baseHTML.substring(controlPanelButtonTagStart,(controlPanelButtonTagEnd+1));
				var controlPanelButtonHTMLStart = baseHTML.substr(0,controlPanelButtonTagStart);
				var controlPanelButtonHTMLEnd = baseHTML.substr((controlPanelButtonTagEnd+1));
				var controlPanelButtonRender = "";
				var controlPanelButtonValueStart = controlPanelButtonTagStrip.indexOf(" VALUE=");
				if (controlPanelButtonValueStart != -1) {
					var controlPanelButtonValueEnd = controlPanelButtonTagStrip.indexOf("]",controlPanelButtonValueStart);
					var controlPanelButtonValueVar = controlPanelButtonTagStrip.substring((controlPanelButtonValueStart+8),(controlPanelButtonValueEnd));
				}
				else {
					var controlPanelButtonValueVar = "REFINE SEARCH";
				}
				var controlPanelButtonItalicStart = controlPanelButtonTagStrip.indexOf(" FNTAW=");
				if (controlPanelButtonItalicStart != -1) {
					var controlPanelButtonItalicEnd = controlPanelButtonTagStrip.indexOf("]",controlPanelButtonItalicStart);
					var controlPanelButtonItalicVar = "<i class='fa " + controlPanelButtonTagStrip.substring((controlPanelButtonItalicStart+8),(controlPanelButtonItalicEnd)) + "'><\/i>";
				}
				else {
					var controlPanelButtonItalicVar = "";
				}
				controlPanelButtonRender += "<div id='controlPanelButtonP4' class='control_panel_button_P4 control_panel_button_P4_off'";
				if (hoverState==1) {
					controlPanelButtonRender += " onmouseover='controlPanelButtonOver(\"P4\");' onfocus='controlPanelButtonOver(\"P4\");' onmouseout='controlPanelButtonOut(\"P4\");' onblur='controlPanelButtonOut(\"P4\");'";
				}
				controlPanelButtonRender += " onclick='controlPanelOpen(whatPanelUp);' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){controlPanelOpen(whatPanelUp);}' tabindex='0' title=\"" + controlPanelButtonValueVar + "\">" + controlPanelButtonItalicVar + controlPanelButtonValueVar + "<\/div>";
				baseHTML = controlPanelButtonHTMLStart + controlPanelButtonRender + controlPanelButtonHTMLEnd;
			}
			var controlPanelSmallTagStart = baseHTML.indexOf("<!--CONTROLPANELSMALL");
			if (controlPanelSmallTagStart != -1) {
				var controlPanelSmallTagEnd = baseHTML.indexOf(">",controlPanelSmallTagStart);
				var controlPanelSmallTagStrip = baseHTML.substring(controlPanelSmallTagStart,(controlPanelSmallTagEnd+1));
				var controlPanelSmallHTMLStart = baseHTML.substr(0,controlPanelSmallTagStart);
				var controlPanelSmallHTMLEnd = baseHTML.substr((controlPanelSmallTagEnd+1));
				var controlPanelSmallOpenStart = controlPanelSmallTagStrip.indexOf(" OPEN");
				cpsP4 = 1;
				if (controlPanelSmallOpenStart != -1) {
					cpsP4 = 2;
				}
				baseHTML = controlPanelSmallHTMLStart + controlPanelSmallHTMLEnd;
			}
			var controlPanelTagStart = baseHTML.indexOf("<!--CONTROLPANEL");
			if (controlPanelTagStart != -1) {
				var controlPanelTagEnd = baseHTML.indexOf(">",controlPanelTagStart);
				var controlPanelTagStrip = baseHTML.substring(controlPanelTagStart,(controlPanelTagEnd+1));
				var controlPanelHTMLStart = baseHTML.substr(0,controlPanelTagStart);
				var controlPanelHTMLEnd = baseHTML.substr((controlPanelTagEnd+1));
				var controlPanelHideStart = controlPanelTagStrip.indexOf(" HIDE");
				if (controlPanelHideStart != -1) {
					cpPH4 = 1;
				}
				var controlPanelMobileHideStart = controlPanelTagStrip.indexOf(" MOBILEHIDE");
				if (controlPanelMobileHideStart != -1) {
					cpPH4m = 1;
				}
				var controlPanelOpenStart = controlPanelTagStrip.indexOf(" OPEN");
				cpP4 = 1;
				if (controlPanelOpenStart != -1) {
					cpP4 = 2;
				}
				var controlPanelOpenStart = controlPanelTagStrip.indexOf(" LOCK");
				if (controlPanelOpenStart != -1) {
					cpP4Lock = 1;
				}
				baseHTML = controlPanelHTMLStart + controlPanelHTMLEnd;
			}
		}
		var eCommButTagStart = baseHTML.indexOf("<!--ECOMMBUTTON");
		if (eCommButTagStart != -1 && onretOn == 2) {
			var eCommButTagEnd = baseHTML.indexOf(">",eCommButTagStart);
			var eCommButTagStrip = baseHTML.substring(eCommButTagStart,(eCommButTagEnd+1));
			var eCommButHTMLStart = baseHTML.substr(0,eCommButTagStart);
			var eCommButHTMLEnd = baseHTML.substr((eCommButTagEnd+1));
			var eCommButRender = "";
			var thisCurrCount = 0;
			var foundCount = 0;
			for (x=0; x<onretClientArray.length;x++) {
				if (onretClientArray[x][10] == 1) {
					foundCount++;
					break;
				}
				else {
					for (y=0; y<onretProdArray.length; y++) {
						if (onretProdArray[y][1] == onretClientArray[x][1] && (ecOutStock >= 1 || onretProdArray[y][7] != 2)) {
							foundCount++;
							break;
						}
					}
				}
				if (foundCount != 0) {
					break;
				}
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
			thisCurrCount = ocFoundArr.length;
			var eCommButDisplay = "";
			var eCommButDisplayAlt = " style='display:none'";
			if (thisCurrCount == 0 && foundCount == 0) {
				eCommButDisplay = " style='display:none'";
				eCommButDisplayAlt = "";
			}
			var eCommCountSingularStart = eCommButTagStrip.indexOf(" SINGULAR=");
			if (eCommCountSingularStart != -1) {
				var eCommCountSingularEnd = eCommButTagStrip.indexOf("]",eCommCountSingularStart);
				panel4ECommCountSingularVar = " " + eCommButTagStrip.substring((eCommCountSingularStart+11),(eCommCountSingularEnd));
			}
			var eCommCountPluralStart = eCommButTagStrip.indexOf(" PLURAL=");
			if (eCommCountPluralStart != -1) {
				var eCommCountPluralEnd = eCommButTagStrip.indexOf("]",eCommCountPluralStart);
				panel4ECommCountPluralVar = " " + eCommButTagStrip.substring((eCommCountPluralStart+9),(eCommCountPluralEnd));
			}
			var eCommCountAltVar = "MORE PRODUCTS ONLINE"
			var eCommCountAltStart = eCommButTagStrip.indexOf(" ALT=");
			if (eCommCountAltStart != -1) {
				var eCommCountAltEnd = eCommButTagStrip.indexOf("]",eCommCountAltStart);
				eCommCountAltVar = " " + eCommButTagStrip.substring((eCommCountAltStart+6),(eCommCountAltEnd));
			}
			if (thisCurrCount == 1) {
				var thisSCT = panel4ECommCountSingularVar;
			}
			else {
				var thisSCT = panel4ECommCountPluralVar;
			}
			eCommButRender = "<div id='panel4ECommButton' class='panel_4_ecomm_button panel_4_ecomm_button panel_4_ecomm_button_off'";
			if (hoverState==1) {
				eCommButRender += " onmouseover='genericButtonOver(\"panel_4_ecomm_button\",\"panel_4_ecomm_button\");' onfocus='genericButtonOver(\"panel_4_ecomm_button\",\"panel_4_ecomm_button\");' onmouseout='genericButtonOut(\"panel_4_ecomm_button\",\"panel_4_ecomm_button\");' onblur='genericButtonOut(\"panel_4_ecomm_button\",\"panel_4_ecomm_button\");'";
			}
			eCommButRender += " onclick='showOnRet();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){showOnRet();}'" + eCommButDisplay + "><span id='panel4ECommButNum' tabindex='0' title=\"" + thisSCT + "\">" + thisCurrCount + "<\/span><span id='panel4ECommButText'>" +  thisSCT + "<\/span><\/div>";
			var altDsipVal = 1;
			if (document.getElementById('FULLPROD').value.length == document.getElementById('PROD').value.length) {
				altDsipVal = 0;
			}
			if (cPanelOp == 1 && altDsipVal == 1) {
				eCommButRender += "<div id='panel4ECommButtonAlt' class='panel_4_ecomm_button panel_4_ecomm_button panel_4_ecomm_button_off'";
				if (hoverState==1) {
				eCommButRender += " onmouseover='genericButtonOver(\"panel_4_ecomm_button\",\"panel_4_ecomm_button\");' onfocus='genericButtonOver(\"panel_4_ecomm_button\",\"panel_4_ecomm_button\");' onmouseout='genericButtonOut(\"panel_4_ecomm_button\",\"panel_4_ecomm_button\");' onblur='genericButtonOut(\"panel_4_ecomm_button\",\"panel_4_ecomm_button\");'";
				}
				eCommButRender += " onclick='controlPanelAllCart(1);' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){controlPanelAllCart(1);}'" + eCommButDisplayAlt + " tabindex='0' title=\"Online Retailers\"><span id='panel4ECommAltText'>" + eCommCountAltVar + "<\/span><\/div>";
			}
			else if (altDsipVal == 1) {
				eCommButRender += "<span id='panel4ECommButtonAlt'></span>";
			}
			baseHTML = eCommButHTMLStart + eCommButRender + eCommButHTMLEnd;
		}
		var jqvalON = 1;
		var jqval =  Math.floor((Math.random() * 1000000) + 1);
		while (jqvalON == 1) {
			var jqValTagStart = baseHTML.indexOf("|--JQVAL");
			if (jqValTagStart != -1) {
				var jqValTagEnd = baseHTML.indexOf("|",jqValTagStart+1);
				var jqValHTMLStart = baseHTML.substr(0,jqValTagStart);
				var jqValHTMLEnd = baseHTML.substr((jqValTagEnd+1));
				baseHTML = jqValHTMLStart + jqval + jqValHTMLEnd;
			}
			else {
				jqvalON = 0;
			}
		}
		var sliderON = 1;
		while (sliderON == 1) {
			var sliderTagStart = baseHTML.indexOf("<!--SLIDER");
			if (sliderTagStart != -1) {
				var sliderTagEnd = baseHTML.indexOf(">",sliderTagStart+1);
				var sliderTagStrip = baseHTML.substring(sliderTagStart,(sliderTagEnd+1));
				var sliderHTMLStart = baseHTML.substr(0,sliderTagStart);
				var sliderHTMLEnd = baseHTML.substr((sliderTagEnd+1));
				var sl = panel4SliderArray.length;
				var sliderValueStart = sliderTagStrip.indexOf(" VALUE=");
				if (sliderValueStart != -1) {
					var sliderValueEnd = sliderTagStrip.indexOf("]",sliderValueStart);
					var sliderValueVal = sliderTagStrip.substring((sliderValueStart+8),(sliderValueEnd));
				}
				else {
					var sliderValueVal = "GENERIC SLIDER";
				}
				var sliderFamIDStart = sliderTagStrip.indexOf(" FAMID=");
				if (sliderFamIDStart != -1) {
					var sliderFamIDEnd = sliderTagStrip.indexOf("]",sliderFamIDStart);
					var sliderFamID = sliderTagStrip.substring((sliderFamIDStart+8),(sliderFamIDEnd));
					for (slf=0; slf<famArray.length; slf++) {
						if (famArray[slf][0] == sliderFamID) {
							sliderValueVal = famArray[slf][1];
							break;
						}
					}
				}
				var sliderCatIDStart = sliderTagStrip.indexOf(" CATID=");
				if (sliderCatIDStart != -1) {
					var sliderCatIDEnd = sliderTagStrip.indexOf("]",sliderCatIDStart);
					var sliderCatID = sliderTagStrip.substring((sliderCatIDStart+8),(sliderCatIDEnd));
					for (slc=0; slc<catArray.length; slc++) {
						if (catArray[slc][0] == sliderCatID) {
							sliderValueVal = catArray[slc][1];
							break;
						}
					}
				}
				var sliderDivStart = sliderTagStrip.indexOf(" DIV=");
				if (sliderDivStart != -1) {
					var sliderDivEnd = sliderTagStrip.indexOf("]",sliderDivStart);
					var sliderDivVal = sliderTagStrip.substring((sliderDivStart+6),(sliderDivEnd));
				}
				else {
					var sliderDivVal = "declare_da_div_dude";
				}
				var sliderOnItalicStart = sliderTagStrip.indexOf(" FNTAWON=");
				if (sliderOnItalicStart != -1) {
					var sliderOnItalicEnd = sliderTagStrip.indexOf("]",sliderOnItalicStart);
					var sliderOnItalicVar = sliderTagStrip.substring((sliderOnItalicStart+10),(sliderOnItalicEnd));
				}
				else {
					var sliderOnItalicVar = "";
				}
				var sliderOffItalicStart = sliderTagStrip.indexOf(" FNTAWOFF=");
				if (sliderOffItalicStart != -1) {
					var sliderOffItalicEnd = sliderTagStrip.indexOf("]",sliderOffItalicStart);
					var sliderOffItalicVar = sliderTagStrip.substring((sliderOffItalicStart+11),(sliderOffItalicEnd));
				}
				else {
					var sliderOffItalicVar = "";
				}
				panel4SliderArray[sl] = [sliderDivVal, sliderOnItalicVar, sliderOffItalicVar, 0];
				baseHTML = sliderHTMLStart + "<div id='panel4SliderWrap_" + sl + "' class='panel_4_slider_wrap'><div id='panel4SliderContainer_" + sl + "' class='panel_4_slider_container' onclick='panel4SliderControl(" + sl + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4SliderControl(" + sl + ");}' tabindex='0' title=\"" + sliderValueVal + "\"><i class='panel_4_slider_i panel_4_slider_i_" + sl + " " + sliderOffItalicVar + "'><\/i><div id='panel4SliderTitle_" + sl + "' class='panel_4_slider_title'>" + sliderValueVal + "<\/div><\/div><\/div>" + sliderHTMLEnd;
			}
			else {
				sliderON = 0;
			}
		}
		var addFieldTagStart = baseHTML.indexOf("<!--ADDFIELD");
		if (addFieldTagStart != -1) {
			var addFieldTagEnd = baseHTML.indexOf(">",addFieldTagStart);
			var addFieldTagStrip = baseHTML.substring(addFieldTagStart,(addFieldTagEnd+1));
			var addFieldHTMLStart = baseHTML.substr(0,addFieldTagStart);
			var addFieldHTMLEnd = baseHTML.substr((addFieldTagEnd+1));
			var addFieldClearStart = addFieldTagStrip.indexOf(" CLEAR");
			if (addFieldClearStart != -1) {
				var addFieldClearRender = "clearAddfield(4);";
			}
			else {
				var addFieldClearRender = "";
			}
			var addFieldRender = "";
			var addFieldValueStart = addFieldTagStrip.indexOf(" VALUE=");
			var addFieldValueEnd = addFieldTagStrip.indexOf("]");
			if (addFieldValueStart != -1) {
				var addFieldValueVal = addFieldTagStrip.substring((addFieldValueStart+8),(addFieldValueEnd));
				p4AddFieldValueVar = addFieldValueVal;
				var addFieldValueRender = " placeholder='"+addFieldValueVal+"'";
				var addFieldFocusRender = " onfocus='" + addFieldClearRender + "'";
				var addFieldBlurRender = "";
			}
			else {
				p4AddFieldValueVar = "";
				var addFieldValueRender = "";
				var addFieldFocusRender = " onfocus='" + addFieldClearRender + "'";
				var addFieldBlurRender = "";
			}
			var addFieldBlankStart = addFieldTagStrip.indexOf(" BLANK");
			if (addFieldBlankStart != -1) {
				var addFieldBlankRender = " enforce_blank";
			}
			else {
				var addFieldBlankRender = "";
			}
			var addFieldReqStart = addFieldTagStrip.indexOf(" REQUIRED");
			if (addFieldReqStart != -1) {
				var addFieldReqRender = " class='panel_4_address_field panel_4_address_field_base panel_4_required" + addFieldBlankRender + "'";
			}
			else {
				var addFieldReqRender = " class='panel_4_address_field panel_4_address_field_base" + addFieldBlankRender + "'";
			}
			var addFieldSubStart = addFieldTagStrip.indexOf(" SUBMIT");
			if (addFieldSubStart != -1) {
				var addFieldSubRender = " onkeyup='panel4FieldKeypress(event,\"panel4AddressField\",1);'";
			}
			else {
				var addFieldSubRender = "";
			}
			addFieldRender = "<input type='text' name='panel4AddressField' id='panel4AddressField'" + addFieldValueRender + addFieldFocusRender + addFieldBlurRender + addFieldReqRender + addFieldSubRender + " title=\"" + p4AddFieldValueVar + "' aria-label='Enter a city, state, or postal code to find stores near you\">";
			baseHTML = addFieldHTMLStart + addFieldRender + addFieldHTMLEnd;
		}
		var cityFieldTagStart = baseHTML.indexOf("<!--CITYFIELD");
		if (cityFieldTagStart != -1) {
			var cityFieldTagEnd = baseHTML.indexOf(">",cityFieldTagStart);
			var cityFieldTagStrip = baseHTML.substring(cityFieldTagStart,(cityFieldTagEnd+1));
			var cityFieldHTMLStart = baseHTML.substr(0,cityFieldTagStart);
			var cityFieldHTMLEnd = baseHTML.substr((cityFieldTagEnd+1));
			var cityFieldRender = "";
			var cityFieldValueStart = cityFieldTagStrip.indexOf(" VALUE=");
			if (cityFieldValueStart != -1) {
				var cityFieldValueEnd = cityFieldTagStrip.indexOf("]");
				var cityFieldValueVal = cityFieldTagStrip.substring((cityFieldValueStart+8),(cityFieldValueEnd));
				cityFieldValueVar = cityFieldValueVal;
				var cityFieldValueRender = " value='"+cityFieldValueVal+"'";
				var cityFieldFocusRender = " onfocus='fieldBlurFocus(\"panel4CityField\",\""+cityFieldValueVal+"\",1);'";
				var cityFieldBlurRender = " onblur='fieldBlurFocus(\"panel4CityField\",\""+cityFieldValueVal+"\",0);'";
			}
			else {
				cityFieldValueVar = "";
				var cityFieldValueRender = "";
				var cityFieldFocusRender = "";
				var cityFieldBlurRender = "";
			}
			var cityFieldReqStart = cityFieldTagStrip.indexOf(" REQUIRED");
			if (cityFieldReqStart != -1) {
				var cityFieldReqRender = " class='panel_4_city_field panel_4_city_field_base panel_4_required'";
			}
			else {
				var cityFieldReqRender = " class='panel_4_city_field panel_4_city_field_base'";
			}
			var cityFieldSubStart = cityFieldTagStrip.indexOf(" SUBMIT");
			if (cityFieldSubStart != -1) {
				var cityFieldSubRender = " onkeyup='panel4FieldKeypress(event,\"panel4CityField\",1);'";
			}
			else {
				var cityFieldSubRender = " onkeyup='panel4FieldKeypress(event,\"panel4CityField\",0);'";
			}
			cityFieldRender = "<input type='text' name='panel4CityField' id='panel4CityField'" + cityFieldValueRender + cityFieldFocusRender + cityFieldBlurRender + cityFieldReqRender + cityFieldSubRender + " title=\"City\">";
			baseHTML = cityFieldHTMLStart + cityFieldRender + cityFieldHTMLEnd;
		}
		var stateFieldTagStart = baseHTML.indexOf("<!--STATEFIELD");
		if (stateFieldTagStart != -1) {
			var stateFieldTagEnd = baseHTML.indexOf(">",stateFieldTagStart);
			var stateFieldTagStrip = baseHTML.substring(stateFieldTagStart,(stateFieldTagEnd+1));
			var stateFieldHTMLStart = baseHTML.substr(0,stateFieldTagStart);
			var stateFieldHTMLEnd = baseHTML.substr((stateFieldTagEnd+1));
			var stateFieldRender = "";
			var stateFieldValueStart = stateFieldTagStrip.indexOf(" VALUE=");
			if (stateFieldValueStart != -1 && stateBase == "") {
				var stateFieldValueEnd = stateFieldTagStrip.indexOf("]");
				var stateFieldValueVal = stateFieldTagStrip.substring((stateFieldValueStart+8),(stateFieldValueEnd));
				var stateFieldValueRender = "<option value='" + stateFieldValueVal + "' selected='selected'>" + stateFieldValueVal + "<\/option>";
			}
			else if (stateBase != "") {
				var stateFieldValueVal = stateBase
				var stateFieldValueRender = "<option value='" + stateFieldValueVal + "' selected='selected'>" + stateFieldValueVal + "<\/option>";
			}
			else {
				var stateFieldValueRender = "";
			}
			stateFieldRender = "<input type='hidden' name='panel4StateField' id='panel4StateField' value='" + stateFieldValueVal + "'><select name='panel4StateSelect' id='panel4StateSelect' class='panel_4_state_field panel_4_state_field_base' onchange='setSelect(\"panel4StateSelect\",\"panel4StateField\");' title=\"State\">" + stateFieldValueRender;
			for (s=0; s<stateArray.length; s++) {
				if (stateArray[s] != stateFieldValueVal) {
					stateFieldRender += "<option value='" + stateArray[s] + "'>" + stateArray[s] + "<\/option>";
				}
			}
			stateFieldRender += "<\/select>";
			baseHTML = stateFieldHTMLStart + stateFieldRender + stateFieldHTMLEnd;
		}
		var zipFieldTagStart = baseHTML.indexOf("<!--ZIPFIELD");
		if (zipFieldTagStart != -1) {
			var zipFieldTagEnd = baseHTML.indexOf(">",zipFieldTagStart);
			var zipFieldTagStrip = baseHTML.substring(zipFieldTagStart,(zipFieldTagEnd+1));
			var zipFieldHTMLStart = baseHTML.substr(0,zipFieldTagStart);
			var zipFieldHTMLEnd = baseHTML.substr((zipFieldTagEnd+1));
			var zipFieldRender = "";
			var zipFieldValueStart = zipFieldTagStrip.indexOf(" VERIFY");
			if (zipFieldValueStart != -1) {
				zipFieldValueVar = 1;
			}
			else {
				zipFieldValueVar = 0;
			}
			var zipFieldReqStart = zipFieldTagStrip.indexOf(" REQUIRED");
			if (zipFieldReqStart != -1) {
				var zipFieldReqRender = " class='panel_4_zip_field panel_4_zip_field_base panel_4_required'";
			}
			else {
				var zipFieldReqRender = " class='panel_4_zip_field panel_4_zip_field_base'";
			}
			var zipFieldSubStart = zipFieldTagStrip.indexOf(" SUBMIT");
			if (zipFieldSubStart != -1) {
				var zipFieldSubRender = " onkeyup='panel4FieldKeypress(event,\"panel4ZipField\",1);'";
			}
			else {
				var zipFieldSubRender = " onkeyup='panel4FieldKeypress(event,\"panel4ZipField\",0);'";
			}
			zipFieldRender = "<input type='text' name='panel4ZipField' id='panel4ZipField'" + zipFieldReqRender + zipFieldSubRender + " title=\"Zip\">";
			baseHTML = zipFieldHTMLStart + zipFieldRender + zipFieldHTMLEnd;
		}
		var productSelectTagStart = baseHTML.indexOf("<!--PRODUCTSELECT");
		if (productSelectTagStart != -1) {
			var productSelectTagEnd = baseHTML.indexOf(">",productSelectTagStart);
			var productSelectTagStrip = baseHTML.substring(productSelectTagStart,(productSelectTagEnd+1));
			var productSelectHTMLStart = baseHTML.substr(0,productSelectTagStart);
			var productSelectHTMLEnd = baseHTML.substr((productSelectTagEnd+1));
			var productSelectRender = "";
			var productSelectValueStart = productSelectTagStrip.indexOf(" ALL=");
			if (productSelectValueStart != -1) {
				var productSelectValueEnd = productSelectTagStrip.indexOf("]",productSelectValueStart);
				var productSelectValueVal = productSelectTagStrip.substring((productSelectValueStart+6),(productSelectValueEnd));
			}
			else {
				var productSelectValueVal = "Any/All Products";
			}
			var productSelectFamilyStart = productSelectTagStrip.indexOf(" FAMILY");
			if (productSelectFamilyStart != -1) {
				var productSelectFamilyVal = 1;
			}
			else {
				var productSelectFamilyVal = 0;
			}
			productSelectRender += "<select name='panel4ProductSelect' id='panel4ProductSelect' class='panel_4_product_select' onchange='setProductSelect(\"panel4ProductSelect\");'><option value='ALL'";
			if (document.getElementById('PROD').value == document.getElementById('FULLPROD').value || document.getElementById('PROD').value == "") {
				productSelectRender += " selected='selected'";
			}
			productSelectRender += ">" + productSelectValueVal + "<\/option>";
			if (productSelectFamilyVal == 1) {
				for (fm=0; fm<famArray.length; fm++) {
					productSelectRender += '<optgroup label="' + famArray[fm][1] + '"><\/optgroup>';
					for (ct=0; ct<catArray.length; ct++) {
						if (famArray[fm][0] == catArray[ct][2]) {
							productSelectRender += '<optgroup label="&nbsp;&nbsp;' + catArray[ct][1] + '">';
							for (pr=0; pr<prodDisplayArray.length; pr++) {
								if (prodDisplayArray[pr][8] == catArray[ct][0]) {
									productSelectRender += '<option value="&nbsp;&nbsp;' + prodDisplayArray[pr][1] + '"';
									if (document.getElementById('PROD').value == prodDisplayArray[pr][1]) {
										productSelectRender += ' selected="selected"';
									}
									productSelectRender += '>' + prodDisplayArray[pr][2] + '<\/option>';
								}
							}
							productSelectRender += '<\/optgroup>';
						}
					}
				}
			}
			else {
				for (ct=0; ct<catArray.length; ct++) {
					productSelectRender += '<optgroup label="' + catArray[ct][1] + '">';
					for (pr=0; pr<prodDisplayArray.length; pr++) {
						if (prodDisplayArray[pr][8] == catArray[ct][0]) {
							productSelectRender += '<option value="' + prodDisplayArray[pr][1] + '"';
							if (document.getElementById('PROD').value == prodDisplayArray[pr][1]) {
								productSelectRender += ' selected="selected"';
							}
							productSelectRender += '>' + prodDisplayArray[pr][2] + '<\/option>';
						}
					}
					productSelectRender += '<\/optgroup>';
				}
			}
			productSelectRender += "<\/select>";
			baseHTML = productSelectHTMLStart + productSelectRender + productSelectHTMLEnd;
		}
		var scopeFieldTagStart = baseHTML.indexOf("<!--SCOPEFIELD");
		if (scopeFieldTagStart != -1) {
			var scopeFieldTagEnd = baseHTML.indexOf(">",scopeFieldTagStart);
			var scopeFieldTagStrip = baseHTML.substring(scopeFieldTagStart,(scopeFieldTagEnd+1));
			var scopeFieldHTMLStart = baseHTML.substr(0,scopeFieldTagStart);
			var scopeFieldHTMLEnd = baseHTML.substr((scopeFieldTagEnd+1));
			var scopeFieldRender = "";
			var scopeFieldValueStart = scopeFieldTagStrip.indexOf(" VALUE=");
			var scopeFieldValueEnd = scopeFieldTagStrip.indexOf("]");
			if (scopeFieldValueStart != -1) {
				var scopeFieldValueVal = scopeFieldTagStrip.substring((scopeFieldValueStart+8),(scopeFieldValueEnd));
			}
			else {
				var scopeFieldValueVal = 0;
			}
			scopeFieldRender = "<input type='hidden' name='panel4ScopeField' id='panel4ScopeField' value='" + scopeFieldValueVal + "'><select name='panel4ScopeSelect' id='panel4ScopeSelect' class='panel_4_scope_field panel_4_scope_field_base' onchange='setSelect(\"panel4ScopeSelect\",\"panel4ScopeField\");' title=\"Scope\"><option value='0'";
			if (scopeFieldValueVal == 0) {
				scopeFieldRender += " selected='selected'";
			}
			scopeFieldRender += ">Any<\/option><option value='1'";
			if (scopeFieldValueVal == 1) {
				scopeFieldRender += " selected='selected'";
			}
			scopeFieldRender += ">All<\/option><\/select>";
			baseHTML = scopeFieldHTMLStart + scopeFieldRender + scopeFieldHTMLEnd;
		}
		var distanceFieldTagStart = baseHTML.indexOf("<!--DISTANCEFIELD");
		if (distanceFieldTagStart != -1) {
			var distanceFieldTagEnd = baseHTML.indexOf(">",distanceFieldTagStart);
			var distanceFieldTagStrip = baseHTML.substring(distanceFieldTagStart,(distanceFieldTagEnd+1));
			var distanceFieldHTMLStart = baseHTML.substr(0,distanceFieldTagStart);
			var distanceFieldHTMLEnd = baseHTML.substr((distanceFieldTagEnd+1));
			var distanceFieldRender = "";
			if (distanceChangedVal == 1) {
				var distanceFieldValueVal = document.getElementById('distance').value;
			}
			else {
				var distanceFieldValueStart = distanceFieldTagStrip.indexOf(" VALUE=");
				if (distanceFieldValueStart != -1) {
					var distanceFieldValueEnd = distanceFieldTagStrip.indexOf("]",distanceFieldValueStart);
					var distanceFieldValueVal = distanceFieldTagStrip.substring((distanceFieldValueStart+8),(distanceFieldValueEnd));
				}
				else {
					var distanceFieldValueVal = 20;
				}
			}
			var distanceDivValueStart = distanceFieldTagStrip.indexOf(" DIVRENDER");
			if (distanceDivValueStart != -1) {
				var distanceDivValueVal = 1;
			}
			else {
				var distanceDivValueVal = 0;
			}
			var distanceKMValueStart = distanceFieldTagStrip.indexOf(" KM");
			if (distanceKMValueStart != -1 || forceKM == 1) {
				panel4DistanceFlag = 1;
				var distanceText = "km";
			}
			else {
				var distanceText = "miles";
			}
			var distanceTextValueStart = distanceFieldTagStrip.indexOf(" TEXT");
			if (distanceTextValueStart != -1) {
				var distanceTextValueEnd = distanceFieldTagStrip.indexOf("]",distanceTextValueStart);
				var distanceText = distanceFieldTagStrip.substring((distanceTextValueStart+7),(distanceTextValueEnd));
			}
			var distanceFieldOptionsStart = distanceFieldTagStrip.indexOf(" OPTIONS=");
			if (distanceFieldOptionsStart != -1) {
				var distanceFieldOptionsEnd = distanceFieldTagStrip.indexOf("]",distanceFieldOptionsStart);
				var distanceFieldOptionsVar = distanceFieldTagStrip.substring((distanceFieldOptionsStart+10),(distanceFieldOptionsEnd));
				var distanceFieldOptionsArray = distanceFieldOptionsVar.split(",");
			}
			else {
				var distanceFieldOptionsArray = new Array(5,10,20,50,75,100);
			}
			var distanceFieldItalicStart = distanceFieldTagStrip.indexOf(" FNTAW=");
			if (distanceFieldItalicStart != -1) {
				var distanceFieldItalicEnd = distanceFieldTagStrip.indexOf("]",distanceFieldItalicStart);
				var distanceFieldItalicVar = "<i class='fa " + distanceFieldTagStrip.substring((distanceFieldItalicStart+8),(distanceFieldItalicEnd)) + "'><\/i>";
			}
			else {
				var distanceFieldItalicVar = "";
			}
			distanceFieldRender = "<input type='hidden' name='panel4DistanceField' id='panel4DistanceField' value='" + distanceFieldValueVal + "' title=\"Distance\">";
			if (distanceDivValueVal == 0) {
				distanceFieldRender += "<select name='panel4DistanceSelect' id='panel4DistanceSelect' class='panel_4_distance_field panel_4_distance_field_base' onchange='setSelect(\"panel4DistanceSelect\",\"panel4DistanceField\");panel4DistanceUpdate();'>";
				for (w=0; w<distanceFieldOptionsArray.length; w++) {
					distanceFieldRender += "<option value='" + distanceFieldOptionsArray[w] + "'";
					if (distanceFieldValueVal == distanceFieldOptionsArray[w]) {
						distanceFieldRender += " selected='selected'";
					}
					distanceFieldRender += ">" + distanceFieldOptionsArray[w] + " " + distanceText + "<\/option>";
				}
				distanceFieldRender += "<\/select>";
			}
			else {
				distanceFieldRender += "<div id='panel4DistanceDivShell' class='panel_4_distance_div_shell'><div class='panel_4_distance_div_filter_arrow'><div class='panel_4_distance_div_filter panel_4_distance_div_filter_base panel_4_distance_div_filter_base_off'";
				if (hoverState==1) {
					distanceFieldRender += " onmouseover='genericButtonOver(\"panel_4_distance_div_filter\",\"panel_4_distance_div_filter_base\");' onfocus='genericButtonOver(\"panel_4_distance_div_filter\",\"panel_4_distance_div_filter_base\");' onmouseout='genericButtonOut(\"panel_4_distance_div_filter\",\"panel_4_distance_div_filter_base\");' onblur='genericButtonOut(\"panel_4_distance_div_filter\",\"panel_4_distance_div_filter_base\");'";
				}
				distanceFieldRender += " onclick='$(\".panel_4_distance_div_filter_slider\").toggle();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){$(\".panel_4_distance_div_filter_slider\").toggle();}' tabindex='0' title=\"" + distanceText + "\"><div class='panel_4_distance_div_filter_text'><span id='panel4DistanceDivNum'>" + distanceFieldValueVal + "<\/span> <span class='distancefield_miles_span'>" + distanceText + "<\/span> " + distanceFieldItalicVar + "<\/div><\/div><\/div><div class='panel_4_distance_div_filter_slider panel_close_me' style='display:none;'><div class='panel_4_distance_div_filter_liner'>";
				for (w=0; w<distanceFieldOptionsArray.length; w++) {
					distanceFieldRender += "<div class='panel_4_distance_div_filter_item_" + distanceFieldOptionsArray[w] + " panel_4_distance_div_filter_item panel_4_distance_div_filter_item_off'";
					if (hoverState==1) {
						distanceFieldRender += " onmouseover='genericButtonOver(\"panel_4_distance_div_filter_item_" + distanceFieldOptionsArray[w] + "\",\"panel_4_distance_div_filter_item\");' onfocus='genericButtonOver(\"panel_4_distance_div_filter_item_" + distanceFieldOptionsArray[w] + "\",\"panel_4_distance_div_filter_item\");' onmouseout='genericButtonOut(\"panel_4_distance_div_filter_item_" + distanceFieldOptionsArray[w] + "\",\"panel_4_distance_div_filter_item\");' onblur='genericButtonOut(\"panel_4_distance_div_filter_item_" + distanceFieldOptionsArray[w] + "\",\"panel_4_distance_div_filter_item\");'";
					}
					distanceFieldRender += " onclick='panel4DistanceUpdate(" + distanceFieldOptionsArray[w] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4DistanceUpdate(" + distanceFieldOptionsArray[w] + ");}' tabindex='0' title=\"" + distanceFieldOptionsArray[w] + " " + distanceText + "\">" + distanceFieldOptionsArray[w] + " " + distanceText + "<\/div>";
				}
				distanceFieldRender += "<\/div><\/div><\/div>";
			}
			baseHTML = distanceFieldHTMLStart + distanceFieldRender + distanceFieldHTMLEnd;
		}
		var resultsFieldTagStart = baseHTML.indexOf("<!--RESULTSFIELD");
		if (resultsFieldTagStart != -1) {
			var resultsFieldTagEnd = baseHTML.indexOf(">",resultsFieldTagStart);
			var resultsFieldTagStrip = baseHTML.substring(resultsFieldTagStart,(resultsFieldTagEnd+1));
			var resultsFieldHTMLStart = baseHTML.substr(0,resultsFieldTagStart);
			var resultsFieldHTMLEnd = baseHTML.substr((resultsFieldTagEnd+1));
			var resultsFieldRender = "";
			var resultsFieldValueStart = resultsFieldTagStrip.indexOf(" VALUE=");
			var resultsFieldValueEnd = resultsFieldTagStrip.indexOf("]");
			if (resultsFieldValueStart != -1) {
				var resultsFieldValueVal = resultsFieldTagStrip.substring((resultsFieldValueStart+8),(resultsFieldValueEnd));
			}
			else {
				var resultsFieldValueVal = 50;
			}
			resultsFieldRender = "<input type='hidden' name='panel4ResultsField' id='panel4ResultsField' value='" + resultsFieldValueVal + "'><select name='panel4ResultsSelect' id='panel4ResultsSelect' class='panel_4_results_field panel_4_results_field_base' onchange='setSelect(\"panel4ResultsSelect\",\"panel4ResultsField\");' title=\"Results\"><option value='10'";
			if (resultsFieldValueVal == 10) {
				resultsFieldRender += " selected='selected'";
			}
			resultsFieldRender += ">10 results<\/option><option value='25'";
			if (resultsFieldValueVal == 25) {
				resultsFieldRender += " selected='selected'";
			}
			resultsFieldRender += ">25 results<\/option><option value='50'";
			if (resultsFieldValueVal == 50) {
				resultsFieldRender += " selected='selected'";
			}
			resultsFieldRender += ">50 results<\/option><option value='100'";
			if (resultsFieldValueVal == 100) {
				resultsFieldRender += " selected='selected'";
			}
			resultsFieldRender += ">100 results<\/option><\/select>";
			baseHTML = resultsFieldHTMLStart + resultsFieldRender + resultsFieldHTMLEnd;
		}
		var sortFieldTagStart = baseHTML.indexOf("<!--SORTFIELD");
		if (sortFieldTagStart != -1) {
			var sortFieldTagEnd = baseHTML.indexOf(">",sortFieldTagStart);
			var sortFieldTagStrip = baseHTML.substring(sortFieldTagStart,(sortFieldTagEnd+1));
			var sortFieldHTMLStart = baseHTML.substr(0,sortFieldTagStart);
			var sortFieldHTMLEnd = baseHTML.substr((sortFieldTagEnd+1));
			var sortFieldRender = "";
			var sortFieldValueStart = sortFieldTagStrip.indexOf(" VALUE=");
			var sortFieldValueEnd = sortFieldTagStrip.indexOf("]");
			if (sortFieldValueStart != -1) {
				var sortFieldValueVal = sortFieldTagStrip.substring((sortFieldValueStart+8),(sortFieldValueEnd));
			}
			else {
				var sortFieldValueVal = 0;
			}
			sortFieldRender = "<input type='hidden' name='panel4SortField' id='panel4SortField' value='" + sortFieldValueVal + "'><select name='panel4SortSelect' id='panel4SortSelect' class='panel_4_sort_field panel_4_sort_field_base' onchange='setSelect(\"panel4SortSelect\",\"panel4SortField\");' title=\"Sort\"><option value='0'";
			if (sortFieldValueVal == 0) {
				sortFieldRender += " selected='selected'";
			}
			sortFieldRender += ">By Distance<\/option><option value='1'";
			if (sortFieldValueVal == 1) {
				sortFieldRender += " selected='selected'";
			}
			sortFieldRender += ">By Store Name<\/option><\/select>";
			baseHTML = sortFieldHTMLStart + sortFieldRender + sortFieldHTMLEnd;
		}
			var labelMenuTagStart = baseHTML.indexOf("<!--LABELMENU");
			if (labelMenuTagStart != -1) {
				var labelMenuTagEnd = baseHTML.indexOf(">",labelMenuTagStart);
				var labelMenuTagStrip = baseHTML.substring(labelMenuTagStart,(labelMenuTagEnd+1));
				var labelMenuHTMLStart = baseHTML.substr(0,labelMenuTagStart);
				var labelMenuHTMLEnd = baseHTML.substr((labelMenuTagEnd+1));
				var labelMenuRender = "";
				panel2HasLabelMenu = 1;
				var labelMenuValueStart = labelMenuTagStrip.indexOf(" VALUE=");
				if (labelMenuValueStart != -1) {
					var labelMenuValueEnd = labelMenuTagStrip.indexOf("]",labelMenuValueStart);
					var labelMenuValueVal = labelMenuTagStrip.substring((labelMenuValueStart+8),(labelMenuValueEnd));
				}
				else {
					var labelMenuValueVal = "ALL PRODUCTS";
				}
				var labelMenuItalicStart = labelMenuTagStrip.indexOf(" FNTAW=");
				if (labelMenuItalicStart != -1) {
					var labelMenuItalicEnd = labelMenuTagStrip.indexOf("]",labelMenuItalicStart);
					var labelMenuItalicVar = "<i class='fa " + labelMenuTagStrip.substring((labelMenuItalicStart+8),(labelMenuItalicEnd)) + "'><\/i>";
				}
				else {
					var labelMenuItalicVar = "";
				}
				labelMenuRender += "<input type='hidden' name='panel2LabelMenuHolder' id='panel2LabelMenuHolder' value='0' title=\"Label Value\"><div id='panel2LabelMenuShell' class='panel_2_label_menu_div_shell'>";
				labelMenuRender += "<div class='panel_2_label_menu_div_filter_arrow'><div class='panel_2_label_menu_div_filter panel_2_label_menu_div_filter_base panel_2_label_menu_div_filter_base_off'";
				if (hoverState==1) {
					labelMenuRender += " onmouseover='genericButtonOver(\"panel_2_label_menu_div_filter\",\"panel_2_label_menu_div_filter_base\");' onfocus='genericButtonOver(\"panel_2_label_menu_div_filter\",\"panel_2_label_menu_div_filter_base\");' onmouseout='genericButtonOut(\"panel_2_label_menu_div_filter\",\"panel_2_label_menu_div_filter_base\");' onblur='genericButtonOut(\"panel_2_label_menu_div_filter\",\"panel_2_label_menu_div_filter_base\");'";
				}
				labelMenuRender += " onclick='$(\".panel_2_label_menu_div_filter_slider\").toggle();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){$(\".panel_2_label_menu_div_filter_slider\").toggle();}' tabindex='0' title=\"" + labelMenuValueVal + "\"><div class='panel_2_label_menu_div_filter_text'><span id='panel2LabelMenuDisplay'>" + labelMenuValueVal + "<\/span> " + labelMenuItalicVar + "<\/div><\/div><\/div><div class='panel_2_label_menu_div_filter_slider panel_close_me' style='display:none;'><div class='panel_2_label_menu_div_filter_liner' id='panel2LabelMenuContent'>";
				for (c=0; c<labelArray.length; c++) {
					if (labelArray[c][9] == 0) {
						labelMenuRender += "<div class='panel_2_label_menu_div_filter_item_" + labelArray[c][0] + " panel_2_label_menu_div_filter_item panel_2_label_menu_div_filter_item_off'";
						if (hoverState==1) {
							labelMenuRender += " onmouseover='genericButtonOver(\"panel_2_label_menu_div_filter_item_" + labelArray[c][0] + "\",\"panel_2_label_menu_div_filter_item\");' onfocus='genericButtonOver(\"panel_2_label_menu_div_filter_item_" + labelArray[c][0] + "\",\"panel_2_label_menu_div_filter_item\");' onmouseout='genericButtonOut(\"panel_2_label_menu_div_filter_item_" + labelArray[c][0] + "\",\"panel_2_label_menu_div_filter_item\");' onblur='genericButtonOut(\"panel_2_label_menu_div_filter_item_" + labelArray[c][0] + "\",\"panel_2_label_menu_div_filter_item\");'";
						}
						labelMenuRender += " onclick='controlPanelLabelMenuSelect(" + labelArray[c][0] + ",\"Label\");controlPanelOpen(whatPanelUp,\"LABEL\"," + labelArray[c][0] + ");$(\".panel_close_me\").hide();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){controlPanelLabelMenuSelect(" + labelArray[c][0] + ",\"Label\");controlPanelOpen(whatPanelUp,\"LABEL\"," + labelArray[c][0] + ");$(\".panel_close_me\").hide();}' tabindex='0' title=\"" + labelArray[c][1] + "\">" + labelArray[c][1] + "<\/div>";
					}
				}
				labelMenuRender += "<\/div><\/div><\/div>";
				baseHTML = labelMenuHTMLStart + labelMenuRender + labelMenuHTMLEnd;
			}
		var catMenuTagStart = baseHTML.indexOf("<!--CATMENU");
		if (catMenuTagStart != -1) {
			var catMenuTagEnd = baseHTML.indexOf(">",catMenuTagStart);
			var catMenuTagStrip = baseHTML.substring(catMenuTagStart,(catMenuTagEnd+1));
			var catMenuHTMLStart = baseHTML.substr(0,catMenuTagStart);
			var catMenuHTMLEnd = baseHTML.substr((catMenuTagEnd+1));
			var catMenuRender = "";
			panel4HasCatMenu = 1;
			var catMenuValueStart = catMenuTagStrip.indexOf(" VALUE=");
			if (catMenuValueStart != -1) {
				var catMenuValueEnd = catMenuTagStrip.indexOf("]",catMenuValueStart);
				var catMenuValueVal = catMenuTagStrip.substring((catMenuValueStart+8),(catMenuValueEnd));
			}
			else {
				var catMenuValueVal = "SELECT A CATEGORY";
			}
			panel4CatMenuText = catMenuValueVal;
			panel4ThereIsACat = 0;
			var findAProdComma = document.getElementById('PROD').value.indexOf(",");
			if (findAProdComma != -1) {
				theProdSplit = document.getElementById('PROD').value.split(",");
				theProdCheck = theProdSplit[0];
			}
			else {
				theProdCheck = document.getElementById('PROD').value;
			}
			for (pc=0; pc<prodDisplayArray.length; pc++) {
				if (prodDisplayArray[pc][1] == theProdCheck) {
					panel4ThereIsACat = prodDisplayArray[pc][8];
					for (cc=0; cc<catArray.length; cc++) {
						if (catArray[cc][0] == panel4ThereIsACat) {
							catMenuValueVal = catArray[cc][1];
							break;
						}
					}
					break;
				}
			}
			var catMenuItalicStart = catMenuTagStrip.indexOf(" FNTAW=");
			if (catMenuItalicStart != -1) {
				var catMenuItalicEnd = catMenuTagStrip.indexOf("]",catMenuItalicStart);
				var catMenuItalicVar = "<i class='fa " + catMenuTagStrip.substring((catMenuItalicStart+8),(catMenuItalicEnd)) + "'><\/i>";
			}
			else {
				var catMenuItalicVar = "";
			}
			var catDivValueStart = catMenuTagStrip.indexOf(" DIVRENDER");
			if (catDivValueStart != -1) {
				var catDivValueVal = 1;
			}
			else {
				var catDivValueVal = 0;
			}
			catMenuRender = "<input type='hidden' name='panel4CatMenuHolder' id='panel4CatMenuHolder' value='" + panel4ThereIsACat + "' title=\"Category Value\"><div id='panel4CatMenuShell' class='panel_4_cat_menu_div_shell'";
			if (panel4HasFamMenu == 1) {
				catMenuRender += " style='display:none;'";
			}
			catMenuRender += ">";
			if (catDivValueVal == 0) {
				catMenuRender += "<select name='panel4CatSelect' id='panel4CatSelect' class='panel_4_cat_field panel_4_cat_field_base' onchange='panel4SetCatSelect();'><option value='0'";
				if (panel4ThereIsACat == 0) {
					catMenuRender += " selected='selected'";
				}
				catMenuRender += ">" + panel4CatMenuText + "<\/option>";
				if (panel4HasFamMenu == 0) {
					for (c=0; c<catArray.length; c++) {
						catMenuRender += "<option value='" + catArray[c][0] + "'";
						if (catMenuValueVal == catArray[c][1]) {
							catMenuRender += " selected='selected'";
						}
						catMenuRender += ">" + catArray[c][1] + "<\/option>";
					}
				}
				catMenuRender += "<\/select>";
			}
			else {
				catMenuRender += "<div class='panel_4_cat_menu_div_filter_arrow'><div class='panel_4_cat_menu_div_filter panel_4_cat_menu_div_filter_base panel_4_cat_menu_div_filter_base_off'";
				if (hoverState==1) {
					catMenuRender += " onmouseover='genericButtonOver(\"panel_4_cat_menu_div_filter\",\"panel_4_cat_menu_div_filter_base\");' onfocus='genericButtonOver(\"panel_4_cat_menu_div_filter\",\"panel_4_cat_menu_div_filter_base\");' onmouseout='genericButtonOut(\"panel_4_cat_menu_div_filter\",\"panel_4_cat_menu_div_filter_base\");' onblur='genericButtonOut(\"panel_4_cat_menu_div_filter\",\"panel_4_cat_menu_div_filter_base\");'";
				}
				catMenuRender += " onclick='$(\".panel_4_cat_menu_div_filter_slider\").toggle();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){$(\".panel_4_cat_menu_div_filter_slider\").toggle();}' tabindex='0' title=\"" + catMenuValueVal + "\"><div class='panel_4_cat_menu_div_filter_text'><span id='panel4CatMenuDisplay'>" + catMenuValueVal + "<\/span> " + catMenuItalicVar + "<\/div><\/div><\/div><div class='panel_4_cat_menu_div_filter_slider panel_close_me' style='display:none;'><div class='panel_4_cat_menu_div_filter_liner' id='panel4CatMenuContent'>";
				if (panel4HasFamMenu == 0) {
					for (c=0; c<catArray.length; c++) {
						catMenuRender += "<div class='panel_4_cat_menu_div_filter_item_" + catArray[c][0] + " panel_4_cat_menu_div_filter_item panel_4_cat_menu_div_filter_item_off'";
						if (hoverState==1) {
							catMenuRender += " onmouseover='genericButtonOver(\"panel_4_cat_menu_div_filter_item_" + catArray[c][0] + "\",\"panel_4_cat_menu_div_filter_item\");' onfocus='genericButtonOver(\"panel_4_cat_menu_div_filter_item_" + catArray[c][0] + "\",\"panel_4_cat_menu_div_filter_item\");' onmouseout='genericButtonOut(\"panel_4_cat_menu_div_filter_item_" + catArray[c][0] + "\",\"panel_4_cat_menu_div_filter_item\");' onblur='genericButtonOut(\"panel_4_cat_menu_div_filter_item_" + catArray[c][0] + "\",\"panel_4_cat_menu_div_filter_item\");'";
						}
						catMenuRender += " onclick='panel4CatMenuSelect(" + catArray[c][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4CatMenuSelect(" + catArray[c][0] + ");}' tabindex='0' title=\"" + catArray[c][1] + "\">" + catArray[c][1] + "<\/div>";
					}
				}
				catMenuRender += "<\/div><\/div>";
			}
			catMenuRender += "<\/div>";
			baseHTML = catMenuHTMLStart + catMenuRender + catMenuHTMLEnd;
		}
		var prodMenuTagStart = baseHTML.indexOf("<!--PRODMENU");
		if (prodMenuTagStart != -1) {
			var prodMenuTagEnd = baseHTML.indexOf(">",prodMenuTagStart);
			var prodMenuTagStrip = baseHTML.substring(prodMenuTagStart,(prodMenuTagEnd+1));
			var prodMenuHTMLStart = baseHTML.substr(0,prodMenuTagStart);
			var prodMenuHTMLEnd = baseHTML.substr((prodMenuTagEnd+1));
			var prodMenuRender = "";
			panel4HasProdMenu = 1;
			var prodMenuValueStart = prodMenuTagStrip.indexOf(" VALUE=");
			if (prodMenuValueStart != -1) {
				var prodMenuValueEnd = prodMenuTagStrip.indexOf("]",prodMenuValueStart);
				var prodMenuValueVal = prodMenuTagStrip.substring((prodMenuValueStart+8),(prodMenuValueEnd));
			}
			else {
				var prodMenuValueVal = "SELECT A PRODUCT";
			}
			panel4ProdMenuText = prodMenuValueVal;
			panel4ThereIsAProd = "";
			if (panel4ThereIsACat != 0) {
				prodMenuArray = [];
				for (p=0; p<prodDisplayArray.length; p++) {
					if (prodDisplayArray[p][8] == panel4ThereIsACat) {
						prodMenuArray.push(prodDisplayArray[p][1]);
					}
				}
				panel4ProdAllList = prodMenuArray.toString();
			}
			for (pc=0; pc<prodDisplayArray.length; pc++) {
				if (prodDisplayArray[pc][1] == document.getElementById('PROD').value) {
					panel4ThereIsAProd = prodDisplayArray[pc][1];
					prodMenuValueVal = prodDisplayArray[pc][2];
					break;
				}
			}
			if (panel4ProdAllList == document.getElementById('PROD').value) {
				panel4ThereIsAProd = 999999;
			}
			var prodMenuItalicStart = prodMenuTagStrip.indexOf(" FNTAW=");
			if (prodMenuItalicStart != -1) {
				var prodMenuItalicEnd = prodMenuTagStrip.indexOf("]",prodMenuItalicStart);
				var prodMenuItalicVar = "<i class='fa " + prodMenuTagStrip.substring((prodMenuItalicStart+8),(prodMenuItalicEnd)) + "'><\/i>";
			}
			else {
				var prodMenuItalicVar = "";
			}
			var prodMenuAllStart = prodMenuTagStrip.indexOf(" ALL=");
			if (prodMenuAllStart != -1) {
				var prodMenuAllEnd = prodMenuTagStrip.indexOf("]",prodMenuAllStart);
				var panel4ProdMenuAllVar = prodMenuTagStrip.substring((prodMenuAllStart+6),(prodMenuAllEnd));
			}
			var prodDivValueStart = prodMenuTagStrip.indexOf(" DIVRENDER");
			if (prodDivValueStart != -1) {
				var prodDivValueVal = 1;
			}
			else {
				var prodDivValueVal = 0;
			}
			var prodGoValueStart = prodMenuTagStrip.indexOf(" AUTOGO");
			if (prodGoValueStart != -1) {
				panel4ProdGoValueVal = 1;
			}
			prodMenuRender = "<input type='hidden' name='panel4ProdMenuHolder' id='panel4ProdMenuHolder' value='" + panel4ThereIsAProd + "' title=\"Product Value\"><div id='panel4ProdMenuShell' class='panel_4_prod_menu_div_shell'";
			if (panel4HasCatMenu == 1 && panel4ThereIsAProd == "") {
				prodMenuRender += " style='display:none;'";
			}
			prodMenuRender += ">";
			if (prodDivValueVal == 0) {
				prodMenuRender += "<select name='panel4ProdSelect' id='panel4ProdSelect' class='panel_4_prod_field panel_4_prod_field_base' onchange='panel4SetProdSelect(" + panel4ProdGoValueVal + ");'><option value='0'";
				if (panel4ThereIsAProd == 0) {
					prodMenuRender += " selected='selected'";
				}
				prodMenuRender += ">" + panel4ProdMenuText + "<\/option>";
				if (panel4HasCatMenu == 0) {
					for (p=0; p<prodDisplayArray.length; p++) {
						prodMenuRender += "<option value='" + prodDisplayArray[p][0] + "'";
						if (prodMenuValueVal == prodDisplayArray[p][2]) {
							prodMenuRender += " selected='selected'";
						}
						prodMenuRender += ">" + prodDisplayArray[p][2] + "<\/option>";
					}
				}
				else if (panel4ThereIsACat != 0) {
					if (panel4ProdMenuAllVar != "") {
						prodMenuRender += "<option value='999999'";
						if (panel4ThereIsAProd == 999999) {
							prodMenuRender += " selected='selected'";
						}
						prodMenuRender += ">" + panel4ProdMenuAllVar + "<\/option>";
					}
					for (p=0; p<prodDisplayArray.length; p++) {
						if (prodDisplayArray[p][8] == panel4ThereIsACat) {
							prodMenuRender += "<option value='" + prodDisplayArray[p][0] + "'";
							if (prodMenuValueVal == prodDisplayArray[p][2]) {
								prodMenuRender += " selected='selected'";
							}
							prodMenuRender += ">" + prodDisplayArray[p][2] + "<\/option>";
						}
					}
				}
				prodMenuRender += "<\/select>";
			}
			else {
				prodMenuRender += "<div class='panel_4_prod_menu_div_filter_arrow'><div class='panel_4_prod_menu_div_filter panel_4_prod_menu_div_filter_base panel_4_prod_menu_div_filter_base_off'";
				if (hoverState==1) {
					prodMenuRender += " onmouseover='genericButtonOver(\"panel_4_prod_menu_div_filter\",\"panel_4_prod_menu_div_filter_base\");' onfocus='genericButtonOver(\"panel_4_prod_menu_div_filter\",\"panel_4_prod_menu_div_filter_base\");' onmouseout='genericButtonOut(\"panel_4_prod_menu_div_filter\",\"panel_4_prod_menu_div_filter_base\");' onblur='genericButtonOut(\"panel_4_prod_menu_div_filter\",\"panel_4_prod_menu_div_filter_base\");'";
				}
				prodMenuRender += " onclick='$(\".panel_4_prod_menu_div_filter_slider\").toggle();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){$(\".panel_4_prod_menu_div_filter_slider\").toggle();}' tabindex='0' title=\"" + panel4ProdMenuAllVar + "\"><div class='panel_4_prod_menu_div_filter_text'><span id='panel4ProdMenuDisplay'>";
				if (panel4ThereIsAProd == 999999) {
					prodMenuRender += panel4ProdMenuAllVar;
				}
				else {
					prodMenuRender += prodMenuValueVal
				}
				prodMenuRender += "<\/span> " + prodMenuItalicVar + "<\/div><\/div><\/div><div class='panel_4_prod_menu_div_filter_slider panel_close_me' style='display:none;'><div class='panel_4_prod_menu_div_filter_liner' id='panel4ProdMenuContent'>";
				if (panel4HasCatMenu == 0) {
					for (p=0; p<prodDisplayArray.length; p++) {
						prodMenuRender += "<div class='panel_4_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + " panel_4_prod_menu_div_filter_item panel_4_prod_menu_div_filter_item_off'";
						if (hoverState==1) {
							prodMenuRender += " onmouseover='genericButtonOver(\"panel_4_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_4_prod_menu_div_filter_item\");' onfocus='genericButtonOver(\"panel_4_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_4_prod_menu_div_filter_item\");' onmouseout='genericButtonOut(\"panel_4_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_4_prod_menu_div_filter_item\");' onblur='genericButtonOut(\"panel_4_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_4_prod_menu_div_filter_item\");'";
						}
						prodMenuRender += " onclick='panel4ProdMenuSelect(" + prodDisplayArray[p][0] + "," + panel4ProdGoValueVal + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4ProdMenuSelect(" + prodDisplayArray[p][0] + "," + panel4ProdGoValueVal + ");}' tabindex='0' title=\"" + prodDisplayArray[p][2] + "\">" + prodDisplayArray[p][2] + "<\/div>";
					}
				}
				else if (panel4ThereIsACat != 0) {
					if (panel4ProdMenuAllVar != "") {
						prodMenuRender += "<div class='panel_4_prod_menu_div_filter_item_999999 panel_4_prod_menu_div_filter_item panel_4_prod_menu_div_filter_item_off'";
						if (hoverState==1) {
							prodMenuRender += " onmouseover='genericButtonOver(\"panel_4_prod_menu_div_filter_item_999999\",\"panel_4_prod_menu_div_filter_item\");' onfocus='genericButtonOver(\"panel_4_prod_menu_div_filter_item_999999\",\"panel_4_prod_menu_div_filter_item\");' onmouseout='genericButtonOut(\"panel_4_prod_menu_div_filter_item_999999\",\"panel_4_prod_menu_div_filter_item\");' onblur='genericButtonOut(\"panel_4_prod_menu_div_filter_item_999999\",\"panel_4_prod_menu_div_filter_item\");'";
						}
						prodMenuRender += " onclick='panel4ProdMenuSelect(999999," + panel4ProdGoValueVal + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4ProdMenuSelect(999999," + panel4ProdGoValueVal + ");}' tabindex='0' title=\"" + panel4ProdMenuAllVar + "\">" + panel4ProdMenuAllVar + "<\/div>";
					}
					for (p=0; p<prodDisplayArray.length; p++) {
						if (prodDisplayArray[p][8] == panel4ThereIsACat) {
							prodMenuRender += "<div class='panel_4_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + " panel_4_prod_menu_div_filter_item panel_4_prod_menu_div_filter_item_off'";
							if (hoverState==1) {
								prodMenuRender += " onmouseover='genericButtonOver(\"panel_4_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_4_prod_menu_div_filter_item\");' onfocus='genericButtonOver(\"panel_4_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_4_prod_menu_div_filter_item\");' onmouseout='genericButtonOut(\"panel_4_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_4_prod_menu_div_filter_item\");' onblur='genericButtonOut(\"panel_4_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_4_prod_menu_div_filter_item\");'";
							}
							prodMenuRender += " onclick='panel4ProdMenuSelect(" + prodDisplayArray[p][0] + "," + panel4ProdGoValueVal + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4ProdMenuSelect(" + prodDisplayArray[p][0] + "," + panel4ProdGoValueVal + ");}' tabindex='0' title=\"" + prodDisplayArray[p][2] + "\">" + prodDisplayArray[p][2] + "<\/div>";
						}
					}
				}
				prodMenuRender += "<\/div><\/div>";
			}
			prodMenuRender += "<\/div>";
			baseHTML = prodMenuHTMLStart + prodMenuRender + prodMenuHTMLEnd;
		}
		var prodSubButtonTagStart = baseHTML.indexOf("<!--PRODSUBBUTTON");
		if (prodSubButtonTagStart != -1) {
			var prodSubButtonTagEnd = baseHTML.indexOf(">",prodSubButtonTagStart);
			var prodSubButtonTagStrip = baseHTML.substring(prodSubButtonTagStart,(prodSubButtonTagEnd+1));
			var prodSubButtonHTMLStart = baseHTML.substr(0,prodSubButtonTagStart);
			var prodSubButtonHTMLEnd = baseHTML.substr((prodSubButtonTagEnd+1));
			var prodSubButtonRender = "";
			var prodSubButtonValueStart = prodSubButtonTagStrip.indexOf(" VALUE=");
			if (prodSubButtonValueStart != -1) {
				var prodSubButtonValueEnd = prodSubButtonTagStrip.indexOf("]",prodSubButtonValueStart);
				var prodSubButtonValueVar = prodSubButtonTagStrip.substring((prodSubButtonValueStart+8),(prodSubButtonValueEnd));
			}
			else {
				var prodSubButtonValueVar = "SUBMIT";
			}
			var prodSubButtonItalicStart = prodSubButtonTagStrip.indexOf(" FNTAW=");
			if (prodSubButtonItalicStart != -1) {
				var prodSubButtonItalicEnd = prodSubButtonTagStrip.indexOf("]",prodSubButtonItalicStart);
				var prodSubButtonItalicVar = "<i class='fa " + prodSubButtonTagStrip.substring((prodSubButtonItalicStart+8),(prodSubButtonItalicEnd)) + "'><\/i>";
			}
			else {
				var prodSubButtonItalicVar = "";
			}
			prodSubButtonRender += "<div id='panel4ProdSubmitButton' class='panel_4_prod_submit_button panel_4_prod_submit_button_off'";
			if (hoverState==1) {
				prodSubButtonRender += " onmouseover='panel4ButtonHover(\"panel4ProdSubmitButton\",\"panel_4_prod_submit_button\",1);' onfocus='panel4ButtonHover(\"panel4ProdSubmitButton\",\"panel_4_prod_submit_button\",1);' onmouseout='panel4ButtonHover(\"panel4ProdSubmitButton\",\"panel_4_prod_submit_button\",0);' onblur='panel4ButtonHover(\"panel4ProdSubmitButton\",\"panel_4_prod_submit_button\",0);'";
			}
			prodSubButtonRender += " onclick='panel4SubmitForm();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4SubmitForm();}'";
			if (panel4ThereIsAProd == "") {
				prodSubButtonRender += " style='display:none;'";
			}
			prodSubButtonRender += " tabindex='0' title=\"" + prodSubButtonValueVar + "\">" + prodSubButtonItalicVar + prodSubButtonValueVar + "<\/div>";
			baseHTML = prodSubButtonHTMLStart + prodSubButtonRender + prodSubButtonHTMLEnd;
		}
		var storeButtonTagStart = baseHTML.indexOf("<!--STOREBUTTON");
		if (storeButtonTagStart != -1) {
			var storeButtonTagEnd = baseHTML.indexOf(">",storeButtonTagStart);
			var storeButtonTagStrip = baseHTML.substring(storeButtonTagStart,(storeButtonTagEnd+1));
			var storeButtonHTMLStart = baseHTML.substr(0,storeButtonTagStart);
			var storeButtonHTMLEnd = baseHTML.substr((storeButtonTagEnd+1));
			var storeButtonRender = "";
			var storeButtonValueStart = storeButtonTagStrip.indexOf(" VALUE=");
			if (storeButtonValueStart != -1) {
				var storeButtonValueEnd = storeButtonTagStrip.indexOf("]",storeButtonValueStart);
				var storeButtonValueVar = storeButtonTagStrip.substring((storeButtonValueStart+8),(storeButtonValueEnd));
			}
			else {
				var storeButtonValueVar = "CONTACT US";
			}
			var storeButtonItalicStart = storeButtonTagStrip.indexOf(" FNTAW=");
			if (storeButtonItalicStart != -1) {
				var storeButtonItalicEnd = storeButtonTagStrip.indexOf("]",storeButtonItalicStart);
				var storeButtonItalicVar = "<i class='fa " + storeButtonTagStrip.substring((storeButtonItalicStart+8),(storeButtonItalicEnd)) + "'><\/i>";
			}
			else {
				var storeButtonItalicVar = "";
			}
			storeButtonRender += "<div id='panel4StoreButton' class='panel_4_store_button panel_4_store_button_off'";
			if (hoverState==1) {
				storeButtonRender += " onmouseover='panel4ButtonHover(\"panel4StoreButton\",\"panel_4_store_button\",1);' onfocus='panel4ButtonHover(\"panel4StoreButton\",\"panel_4_store_button\",1);' onmouseout='panel4ButtonHover(\"panel4StoreButton\",\"panel_4_store_button\",0);' onblur='panel4ButtonHover(\"panel4StoreButton\",\"panel_4_store_button\",0);'";
			}
			storeButtonRender += " onclick='panel4Store();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4Store();}' tabindex='0' title=\"" + storeButtonValueVar + "\">" + storeButtonItalicVar + storeButtonValueVar + "<\/div>";
			baseHTML = storeButtonHTMLStart + storeButtonRender + storeButtonHTMLEnd;
		}
		var rtreqButtonTagStart = baseHTML.indexOf("<!--RTREQBUTTON");
		if (rtreqButtonTagStart != -1) {
			var rtreqButtonTagEnd = baseHTML.indexOf(">",rtreqButtonTagStart);
			var rtreqButtonTagStrip = baseHTML.substring(rtreqButtonTagStart,(rtreqButtonTagEnd+1));
			var rtreqButtonHTMLStart = baseHTML.substr(0,rtreqButtonTagStart);
			var rtreqButtonHTMLEnd = baseHTML.substr((rtreqButtonTagEnd+1));
			var rtreqButtonRender = "";
			var rtreqButtonValueStart = rtreqButtonTagStrip.indexOf(" VALUE=");
			if (rtreqButtonValueStart != -1) {
				var rtreqButtonValueEnd = rtreqButtonTagStrip.indexOf("]",rtreqButtonValueStart);
				var rtreqButtonValueVar = rtreqButtonTagStrip.substring((rtreqButtonValueStart+8),(rtreqButtonValueEnd));
			}
			else {
				var rtreqButtonValueVar = "ADD STORE";
			}
			var rtreqButtonItalicStart = rtreqButtonTagStrip.indexOf(" FNTAW=");
			if (rtreqButtonItalicStart != -1) {
				var rtreqButtonItalicEnd = rtreqButtonTagStrip.indexOf("]",rtreqButtonItalicStart);
				var rtreqButtonItalicVar = "<i class='fa " + rtreqButtonTagStrip.substring((rtreqButtonItalicStart+8),(rtreqButtonItalicEnd)) + "'><\/i>";
			}
			else {
				var rtreqButtonItalicVar = "";
			}
			rtreqButtonRender += "<div id='panel4RTReqButton' class='panel_4_rtreq_button panel_4_rtreq_button_off'";
			if (hoverState==1) {
				rtreqButtonRender += " onmouseover='panel4ButtonHover(\"panel4RTReqButton\",\"panel_4_rtreq_button\",1);' onfocus='panel4ButtonHover(\"panel4RTReqButton\",\"panel_4_rtreq_button\",1);' onmouseout='panel4ButtonHover(\"panel4RTReqButton\",\"panel_4_rtreq_button\",0);' onblur='panel4ButtonHover(\"panel4RTReqButton\",\"panel_4_rtreq_button\",0);'";
			}
			rtreqButtonRender += " onclick='panel4RTReq();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4RTReq();}' tabindex='0' title=\"" + rtreqButtonValueVar + "\">" + rtreqButtonItalicVar + rtreqButtonValueVar + "<\/div>";
			baseHTML = rtreqButtonHTMLStart + rtreqButtonRender + rtreqButtonHTMLEnd;
		}
		var resultsCompileTagStart = baseHTML.indexOf("<!--RESULTSCOMPILE");
		if (resultsCompileTagStart != -1) {
			var resultsCompileTagEnd = baseHTML.indexOf(">",resultsCompileTagStart);
			var resultsCompileHTMLStart = baseHTML.substr(0,resultsCompileTagStart);
			var resultsCompileHTMLEnd = baseHTML.substr((resultsCompileTagEnd+1));
			baseHTML = resultsCompileHTMLStart + "<span id='panel4ResultsCompile'>" + document.getElementById('addressCompile').value + "<\/span>" + resultsCompileHTMLEnd;
		}
		var resultsStreetTagStart = baseHTML.indexOf("<!--RESULTSSTREET");
		if (resultsStreetTagStart != -1) {
			var resultsStreetTagEnd = baseHTML.indexOf(">",resultsStreetTagStart);
			var resultsStreetHTMLStart = baseHTML.substr(0,resultsStreetTagStart);
			var resultsStreetHTMLEnd = baseHTML.substr((resultsStreetTagEnd+1));
			baseHTML = resultsStreetHTMLStart + "<span id='panel4ResultsStreet'>" + document.getElementById('revCodeStreet').value + "<\/span>" + resultsStreetHTMLEnd;
		}
		var resultsCityTagStart = baseHTML.indexOf("<!--RESULTSCITY");
		if (resultsCityTagStart != -1) {
			var resultsCityTagEnd = baseHTML.indexOf(">",resultsCityTagStart);
			var resultsCityHTMLStart = baseHTML.substr(0,resultsCityTagStart);
			var resultsCityHTMLEnd = baseHTML.substr((resultsCityTagEnd+1));
			baseHTML = resultsCityHTMLStart + "<span id='panel4ResultsCity'>" + document.getElementById('revCodeCity').value + "<\/span>" + resultsCityHTMLEnd;
		}
		var resultsStateTagStart = baseHTML.indexOf("<!--RESULTSSTATE");
		if (resultsStateTagStart != -1) {
			var resultsStateTagEnd = baseHTML.indexOf(">",resultsStateTagStart);
			var resultsStateHTMLStart = baseHTML.substr(0,resultsStateTagStart);
			var resultsStateHTMLEnd = baseHTML.substr((resultsStateTagEnd+1));
			baseHTML = resultsStateHTMLStart + "<span id='panel4ResultsState'>" + document.getElementById('revCodeState').value + "<\/span>" + resultsStateHTMLEnd;
		}
		var resultsZipTagStart = baseHTML.indexOf("<!--RESULTSZIP");
		if (resultsZipTagStart != -1) {
			var resultsZipTagEnd = baseHTML.indexOf(">",resultsZipTagStart);
			var resultsZipHTMLStart = baseHTML.substr(0,resultsZipTagStart);
			var resultsZipHTMLEnd = baseHTML.substr((resultsZipTagEnd+1));
			baseHTML = resultsZipHTMLStart + "<span id='panel4ResultsZip'>" + document.getElementById('revCodeZip').value + "<\/span>" + resultsZipHTMLEnd;
		}
		var resultsCountryTagStart = baseHTML.indexOf("<!--RESULTSCOUNTRY");
		if (resultsCountryTagStart != -1) {
			var resultsCountryTagEnd = baseHTML.indexOf(">",resultsCountryTagStart);
			var resultsCountryHTMLStart = baseHTML.substr(0,resultsCountryTagStart);
			var resultsCountryHTMLEnd = baseHTML.substr((resultsCountryTagEnd+1));
			baseHTML = resultsCountryHTMLStart + "<span id='panel2ResultsCountry'>" + document.getElementById('revCodeCountry').value + "<\/span>" + resultsCountryHTMLEnd;
		}
		var resultsProdlistTagStart = baseHTML.indexOf("<!--RESULTSPRODLIST");
		if (resultsProdlistTagStart != -1) {
			var resultsProdlistTagEnd = baseHTML.indexOf(">",resultsProdlistTagStart);
			var resultsProdlistTagStrip = baseHTML.substring(resultsProdlistTagStart,(resultsProdlistTagEnd+1));
			var resultsProdlistHTMLStart = baseHTML.substr(0,resultsProdlistTagStart);
			var resultsProdlistHTMLEnd = baseHTML.substr((resultsProdlistTagEnd+1));
			var resultsProdlistDefaultStart = resultsProdlistTagStrip.indexOf(" DEFAULT=");
			if (resultsProdlistDefaultStart != -1) {
				var resultsProdlistDefaultEnd = resultsProdlistTagStrip.indexOf("]",resultsProdlistDefaultStart);
				var resultsProdlistDefaultVal = resultsProdlistTagStrip.substring((resultsProdlistDefaultStart+10),(resultsProdlistDefaultEnd));
			}
			else {
				var resultsProdlistDefaultVal = "No Products Selected";
			}
			var resultsProdlistSpacerStart = resultsProdlistTagStrip.indexOf(" SPACER=");
			if (resultsProdlistSpacerStart != -1) {
				var resultsProdlistSpacerEnd = resultsProdlistTagStrip.indexOf("]",resultsProdlistSpacerStart);
				var resultsProdlistSpacerVal = resultsProdlistTagStrip.substring((resultsProdlistSpacerStart+9),(resultsProdlistSpacerEnd));
			}
			else {
				var resultsProdlistSpacerVal = ", ";
			}
			var resultsProdlistArr = document.getElementById('PROD').value.split(",");
			var resultsProdlistFull = document.getElementById('FULLPROD').value.split(",");
			var resultsProdlistWrite = "";
			if (resultsProdlistArr.length != resultsProdlistFull.length) {
				for (rpl=0; rpl<resultsProdlistArr.length; rpl++) {
					for (bpl=0; bpl<prodDisplayArray.length; bpl++) {
						if (resultsProdlistArr[rpl] == prodDisplayArray[bpl][1]) {
							if (rpl != 0) {
								resultsProdlistWrite += resultsProdlistSpacerVal;
							}
							resultsProdlistWrite += "<span class='panel_4_results_prodlist_prod'>" + prodDisplayArray[bpl][2] + "<\/span>";
							break;
						}
					}
				}
			}
			else {
				resultsProdlistWrite = "<span class='panel_4_results_prodlist_prod'>" + resultsProdlistDefaultVal + "<\/span>";
			}
			baseHTML = resultsProdlistHTMLStart + "<span id='panel4ResultsProdlist'>" + resultsProdlistWrite + "<\/span>" + resultsProdlistHTMLEnd;
		}
		var resultsCatlistTagStart = baseHTML.indexOf("<!--RESULTSCATLIST");
		if (resultsCatlistTagStart != -1) {
			var resultsCatlistTagEnd = baseHTML.indexOf(">",resultsCatlistTagStart);
			var resultsCatlistTagStrip = baseHTML.substring(resultsCatlistTagStart,(resultsCatlistTagEnd+1));
			var resultsCatlistHTMLStart = baseHTML.substr(0,resultsCatlistTagStart);
			var resultsCatlistHTMLEnd = baseHTML.substr((resultsCatlistTagEnd+1));
			var resultsCatlistDefaultStart = resultsCatlistTagStrip.indexOf(" DEFAULT=");
			if (resultsCatlistDefaultStart != -1) {
				var resultsCatlistDefaultEnd = resultsCatlistTagStrip.indexOf("]",resultsCatlistDefaultStart);
				var resultsCatlistDefaultVal = resultsCatlistTagStrip.substring((resultsCatlistDefaultStart+10),(resultsCatlistDefaultEnd));
			}
			else {
				var resultsCatlistDefaultVal = "No Products Selected";
			}
			var resultsCatlistSpacerStart = resultsCatlistTagStrip.indexOf(" SPACER=");
			if (resultsCatlistSpacerStart != -1) {
				var resultsCatlistSpacerEnd = resultsCatlistTagStrip.indexOf("]",resultsCatlistSpacerStart);
				var resultsCatlistSpacerVal = resultsCatlistTagStrip.substring((resultsCatlistSpacerStart+9),(resultsCatlistSpacerEnd));
			}
			else {
				var resultsCatlistSpacerVal = ", ";
			}
			var resultsCatlistWrite = "";
			if (document.getElementById('GROUP').value != "") {
				var resultsCatlistArr = document.getElementById('GROUP').value.split(",");
				for (rcl=0; rcl<resultsCatlistArr.length; rcl++) {
					for (bcl=0; bcl<catArray.length; bcl++) {
						if (resultsCatlistArr[rcl] == catArray[bcl][5]) {
							if (rcl != 0) {
								resultsCatlistWrite += resultsCatlistSpacerVal;
							}
							resultsCatlistWrite += "<span class='panel_4_results_catlist_prod'>" + catArray[bcl][1] + "<\/span>";
							break;
						}
					}
				}
			}
			else {
				resultsCatlistWrite = "<span class='panel_4_results_catlist_prod'>" + resultsCatlistDefaultVal + "<\/span>";
			}
			baseHTML = resultsCatlistHTMLStart + "<span id='panel4ResultsCatlist'>" + resultsCatlistWrite + "<\/span>" + resultsCatlistHTMLEnd;
		}
		var prodShopCartTagStart = baseHTML.indexOf("<!--PRODSHOPCART");
		if (prodShopCartTagStart != -1) {
			var prodShopCartTagEnd = baseHTML.indexOf(">",prodShopCartTagStart);
			var prodShopCartTagStrip = baseHTML.substring(prodShopCartTagStart,(prodShopCartTagEnd+1));
			var prodShopCartHTMLStart = baseHTML.substr(0,prodShopCartTagStart);
			var prodShopCartHTMLEnd = baseHTML.substr((prodShopCartTagEnd+1));
			baseHTML = prodShopCartHTMLStart + "<div id='panel4ProdShopCartShell' class='panel_4_prod_shop_cart_shell'><\/div>" + prodShopCartHTMLEnd;
		}
		var prodListSearchOn4 = 1;
		var prodListFailsafe4 = 0;
		while (prodListSearchOn4 == 1) {
			prodListFailsafe4++;
			var prodListTagStart = baseHTML.indexOf("<!--PRODLIST");
			if (prodListTagStart != -1) {
				var prodListTagEnd = baseHTML.indexOf(">",prodListTagStart);
				var prodListTagStrip = baseHTML.substring(prodListTagStart,(prodListTagEnd+1));
				var baseProdListHTMLStart = baseHTML.substr(0,prodListTagStart);
				var baseProdListHTMLEnd = baseHTML.substr((prodListTagEnd+1));
				var prodListTagFilterStart = prodListTagStrip.indexOf(" FILTER");
				if (prodListTagFilterStart != -1) {
					panel4ProductFilter = 1;
				}
				var prodListTagSubsetStart = prodListTagStrip.indexOf(" SUBSET");
				if (prodListTagSubsetStart != -1) {
					panel4ProductSubset = 1;
				}
				var prodListTagExcludeStart = prodListTagStrip.indexOf(" EXCLUDE");
				if (prodListTagExcludeStart != -1) {
					panel4ProductExclude = 1;
				}
				var prodListTagHideprodStart = prodListTagStrip.indexOf(" HIDEPROD");
				if (prodListTagHideprodStart != -1) {
					panel4ProductHideprod = 1;
				}
				var prodListTagExcludeStart = prodListTagStrip.indexOf(" OPEN");
				var panel4PListSliderOpen = 0;
				if (prodListTagExcludeStart != -1) {
					panel4PListSliderOpen = 1;
				}
				var prodListTagSortStart = prodListTagStrip.indexOf(" SORT=");
				if (prodListTagSortStart != -1) {
					var prodListTagSortEnd = prodListTagStrip.indexOf("]",prodListTagSortStart);
					var panel4ProductSortTemp = prodListTagStrip.substring((prodListTagSortStart+7),(prodListTagSortEnd));
					if (panel4ProductSortTemp == "prodlist_sort") {
						panel4ProductSort = prodListStyle;
					}
					else {
						panel4ProductSort = panel4ProductSortTemp;
					}
				}
				var prodListTagOrderStart = prodListTagStrip.indexOf(" ORDER=");
				if (prodListTagOrderStart != -1) {
					var prodListTagOrderEnd = prodListTagStrip.indexOf("]",prodListTagOrderStart);
					panel4ProductOrder = prodListTagStrip.substring((prodListTagOrderStart+8),(prodListTagOrderEnd));
				}
				var prodListTagCatIDStart = prodListTagStrip.indexOf(" CATID=");
				if (prodListTagCatIDStart != -1) {
					var prodListTagCatIDEnd = prodListTagStrip.indexOf("]",prodListTagCatIDStart);
					var panel4ProductCatID = prodListTagStrip.substring((prodListTagCatIDStart+8),(prodListTagCatIDEnd));
				}
				else {
					var panel4ProductCatID = 0;
				}
				var prodListTagOffStart = prodListTagStrip.indexOf(" OFF");
				if (prodListTagOffStart != -1) {
					panel4AllOffIsOn = 1;
				}
			}
			else {
				if(gLog==1){console.log("panel4Load - No PRODLIST");}
				prodListSearchOn4 = 0;
			}
			if (prodListFailsafe4 == 30) {
				if(gLog==1){console.log("panel4Load - prodListFailsafe4 == 30");}
				prodListSearchOn4 = 0;
			}
			if (prodDisplayArray.length && prodListSearchOn4 != 0) {
				if(gLog==1){console.log("panel4Load - prodDisplayArray.length && prodListSearchOn4 != 0");}
				prodFilterArray.length = 0;
				var pfCount = 0;
				var prodListHTML = "";
				var prodFilterSplit = document.getElementById('PROD').value.split(",");
				if (document.getElementById('PROD').value != document.getElementById('FULLPROD').value) {
					for (y=0;y<prodDisplayArray.length;y++) {
						if (panel4ProductSubset == 1) {
							var includeProd = 0;
						}
						else {
							var includeProd = 1;
						}
						var selectedProd = 0;
						for (z=0;z<prodFilterSplit.length;z++) {
							if (prodFilterSplit[z] == prodDisplayArray[y][1]) {
								includeProd = 1;
								break;
							}
						}
						if (includeProd == 1) {
							prodFilterArray[pfCount] = prodDisplayArray[y];
							pfCount++;
						}
					}
				}
				else {
					if(gLog==1){console.log("panel4Load - PRODLIST prodFilterArray[y][9] = 0");}
					for (y=0;y<prodDisplayArray.length;y++) {
						prodFilterArray[y] = prodDisplayArray[y];
						prodFilterArray[y][9] = 0;
					}
				}
				if (panel4ProductOrder == "x") {
				}
				else {
					var prodOrderArray = panel4ProductOrder.split(",");
					var tempFilterArray = [];
					var tempFilterIncr = 0;
					for (o=0;o<prodOrderArray.length;o++) {
						for (p=0;p<prodFilterArray.length;p++) {
							if (prodOrderArray[o] == prodFilterArray[p][0]) {
								tempFilterArray[tempFilterIncr] = prodFilterArray[p];
								tempFilterIncr++;
								break;
							}
						}
					}
					prodFilterArray.length = 0;
					for (t=0;t<tempFilterArray.length;t++) {
						prodFilterArray[t] = tempFilterArray[t];
					}
				}
				if (prodFilterArray.length && panel4AllOffIsOn == 1) {
					var foundAnOff = 0;
					for (u=0; u<prodFilterArray.length; u++) {
						if (prodFilterArray[u][9] == "0") {
							foundAnOff = 1;
							break;
						}
					}
					if (foundAnOff==0) {
						if(gLog==1){console.log("panel2Load - PRODLIST foundAnOff==0 prodFilterArray[u][9] = 0");}
						for (u=0; u<prodFilterArray.length; u++) {
							prodFilterArray[u][9] = "0";
						}
					}
				}
				if (panel4ProductSort == "CATEGORY") {
					if (panel4ProductCatID != 0) {
						for (w=0; w<catArray.length; w++) {
							if (catArray[w][0] == panel4ProductCatID) {
								var categoryHTMLTest = autotextIt(p4TemplateSet.panel4CategoryDiv,"panel4Category");
								var catBadgeTagStart = categoryHTMLTest.indexOf("<!--BADGE");
								if (catBadgeTagStart != -1) {
									var catBadgeTagEnd = categoryHTMLTest.indexOf(">",catBadgeTagStart);
									var catBadgeTagStrip = categoryHTMLTest.substring(catBadgeTagStart,(catBadgeTagEnd+1));
									var baseCatBadgeHTMLStart = categoryHTMLTest.substr(0,catBadgeTagStart);
									var baseCatBadgeHTMLEnd = categoryHTMLTest.substr((catBadgeTagEnd+1));
									categoryHTMLTest = baseCatBadgeHTMLStart + "<span id='panel4ProdlistCatBadge" + catArray[w][0] + "' class='panel_4_prodlist_cat_badge' style='display:none;'>0<\/span>" + baseCatBadgeHTMLEnd;
								}
								var catNameTagStart = categoryHTMLTest.indexOf("<!--CATNAME");
								if (catNameTagStart != -1) {
									var catNameTagEnd = categoryHTMLTest.indexOf(">",catNameTagStart);
									var catNameTagStrip = categoryHTMLTest.substring(catNameTagStart,(catNameTagEnd+1));
									var baseCatNameHTMLStart = categoryHTMLTest.substr(0,catNameTagStart);
									var baseCatNameHTMLEnd = categoryHTMLTest.substr((catNameTagEnd+1));
									var catNameTagNumTest = catNameTagStrip.indexOf(" PRODNUM");
									if (catNameTagNumTest != -1) {
										var daProdNum = 0;
										for (r=0;r<prodFilterArray.length;r++) {
											if (prodFilterArray[r][8] == catArray[w][0]) {
												daProdNum++;
											}
										}
										var daProdNumWrite = "<span class='da_prod_num'>" + daProdNum + "<\/span>";
									}
									else {
										var daProdNumWrite = "";
									}
									var replaceImgTest = catNameTagStrip.indexOf(" REPLACE");
									if (replaceImgTest != -1) {
										var replaceImgMouseOver = "panel4CatImgReplace(1," + catArray[w][0] + ");";
										var replaceImgMouseOut = "panel4CatImgReplace(2," + catArray[w][0] + ");";
										var replaceImgMouseClass = " img_replace_active";
										var replaceImgCall = "panel4CatImgClick(" + catArray[w][0] + ");";
									}
									else {
										var replaceImgMouseOver = "";
										var replaceImgMouseOut = "";
										var replaceImgMouseClass = "";
										var replaceImgCall = "";
									}
									var catNameTagLinkTest = catNameTagStrip.indexOf(" LINK");
									var catNameTagLink = "";
									var baseCatStyle = "";
									if (catNameTagLinkTest != -1) {
										catNameTagLink += " style='cursor:pointer;' onclick='panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\");" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\");" + replaceImgCall + "}'";
										if (hoverState==1) {
											catNameTagLink += " onmouseover='panel4CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel4CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel4CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel4CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
										}
										var thisCatIsOn = 1;
										for (q=0; q<prodFilterArray.length; q++) {
											if (prodFilterArray[q][8] == catArray[w][0] && prodFilterArray[q][9] == "0") {
												thisCatIsOn = 0;
												break;
											}
										}
										if (thisCatIsOn == 1) {
											var baseCatStyle = " panel_4_category_name_on";
											catArray[w][6] = 1;
											window["panel1CategoryNameVar" + catArray[w][0]] = 1;
										}
										else {
											var baseCatStyle = " panel_4_category_name_off";
										}
									}
									categoryHTMLTest = baseCatNameHTMLStart + "<div id='panel4CategoryName" + catArray[w][0] + "' class='panel_4_category_name_" + catArray[w][0] + replaceImgMouseClass + " panel_4_category_name " + baseCatStyle + "'" + catNameTagLink + " tabindex='0' title=\"" + catArray[w][1] + "\">" + catArray[w][1] + daProdNumWrite + "<\/div>" + baseCatNameHTMLEnd;
								}
								var catBigImgTagStart = categoryHTMLTest.indexOf("<!--CATBIGIMG");
								if (catBigImgTagStart != -1) {
									var catBigImgTagEnd = categoryHTMLTest.indexOf(">",catBigImgTagStart);
									var catBigImgTagStrip = categoryHTMLTest.substring(catBigImgTagStart,(catBigImgTagEnd+1));
									var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBigImgTagStart);
									var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBigImgTagEnd+1));
									var catBigImgTagRender = "";
									var replaceImgTest = catBigImgTagStrip.indexOf(" REPLACE");
									if (replaceImgTest != -1) {
										catBigImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel4CategoryBigImgDivShell" + catArray[w][0] + "' class='panel_4_category_big_img_div_shell panel_4_category_big_img_div_shell_" + catArray[w][0] + "' onclick='panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\");panel4CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\");panel4CatImgClick(" + catArray[w][0] + ");}'";
										if (hoverState==1) {
											catBigImgTagRender += " onmouseover='panel4CatMouseOver(" + w + ");panel4CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel4CatMouseOver(" + w + ");panel4CatImgReplace(1," + catArray[w][0] + ");'";
										}
										catBigImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel4CategoryBigImgDivBack" + catArray[w][0] + "' class='panel_4_category_big_img_div_back panel_4_category_big_img_div_back_off panel_4_category_big_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][3] + "\");'><\/div><div id='panel4CategoryBigImgDivOver" + catArray[w][0] + "' class='panel_4_category_big_img_div_over panel_4_category_big_img_div_over_" + catArray[w][0] + "'";
										if (hoverState==1) {
											catBigImgTagRender += " onmouseout='panel4CatMouseOut(" + w + ");panel4CatImgReplace(2," + catArray[w][0] + ");' onblur='panel4CatMouseOut(" + w + ");panel4CatImgReplace(2," + catArray[w][0] + ");'";
										}
										catBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
										categoryHTMLTest = baseCatBigImgHTMLStart + catBigImgTagRender + baseCatBigImgHTMLEnd;
									}
									else {
										categoryHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel4CategoryBigImg" + catArray[w][0] + "' class='panel_4_category_big_img' src='" + clientImgBase + catArray[w][3] + "'>" + baseCatBigImgHTMLEnd;
									}
								}
								var catSmImgTagStart = categoryHTMLTest.indexOf("<!--CATSMIMG");
								if (catSmImgTagStart != -1) {
									var catSmImgTagEnd = categoryHTMLTest.indexOf(">",catSmImgTagStart);
									var catSmImgTagStrip = categoryHTMLTest.substring(catSmImgTagStart,(catSmImgTagEnd+1));
									var baseCatSmImgHTMLStart = categoryHTMLTest.substr(0,catSmImgTagStart);
									var baseCatSmImgHTMLEnd = categoryHTMLTest.substr((catSmImgTagEnd+1));
									var catSmImgTagRender = "";
									var replaceImgTest = catSmImgTagStrip.indexOf(" REPLACE");
									if (replaceImgTest != -1) {
										catSmImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel4CategorySmImgDivShell" + catArray[w][0] + "' class='panel_4_category_sm_img_div_shell panel_4_category_sm_img_div_shell_" + catArray[w][0] + "' onclick='panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\");panel4CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\");panel4CatImgClick(" + catArray[w][0] + ");}'";
										if (hoverState==1) {
											catSmImgTagRender += " onmouseover='panel4CatMouseOver(" + w + ");panel4CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel4CatMouseOver(" + w + ");panel4CatImgReplace(1," + catArray[w][0] + ");'";
										}
										catSmImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel4CategorySmImgDivBack" + catArray[w][0] + "' class='panel_4_category_sm_img_div_back panel_4_category_sm_img_div_back_off panel_4_category_sm_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][4] + "\");'><\/div><div id='panel4CategorySmImgDivOver" + catArray[w][0] + "' class='panel_4_category_sm_img_div_over panel_4_category_sm_img_div_over_" + catArray[w][0] + "'";
										if (hoverState==1) {
											catSmImgTagRender += " onmouseout='panel4CatMouseOut(" + w + ");panel4CatImgReplace(2," + catArray[w][0] + ");' onblur='panel4CatMouseOut(" + w + ");panel4CatImgReplace(2," + catArray[w][0] + ");'";
										}
										catSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
										categoryHTMLTest = baseCatSmImgHTMLStart + catSmImgTagRender + baseCatSmImgHTMLEnd;
									}
									else {
										categoryHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel4CategorySmImg" + catArray[w][0] + "' class='panel_4_category_sm_img' src='" + clientImgBase + catArray[w][4] + "'>" + baseCatSmImgHTMLEnd;
									}
								}
								var catAllTagStart = categoryHTMLTest.indexOf("<!--CATALL");
								if (catAllTagStart != -1) {
									var catAllTagEnd = categoryHTMLTest.indexOf(">",catAllTagStart);
									var catAllTagStrip = categoryHTMLTest.substring(catAllTagStart,(catAllTagEnd+1));
									var baseCatAllHTMLStart = categoryHTMLTest.substr(0,catAllTagStart);
									var baseCatAllHTMLEnd = categoryHTMLTest.substr((catAllTagEnd+1));
									var catAllValueStart = catAllTagStrip.indexOf(" VALUE=");
									if (catAllValueStart != -1) {
										var catAllValueEnd = catAllTagStrip.indexOf("]", catAllValueStart);
										var catAllValueVal = catAllTagStrip.substring((catAllValueStart+8),(catAllValueEnd));
									}
									else {
										var catAllValueVal = "ALL";
									}
									var replaceImgTest = catAllTagStrip.indexOf(" REPLACE");
									if (replaceImgTest != -1) {
										var replaceImgMouseOver = "panel4CatImgReplace(1," + catArray[w][0] + ");";
										var replaceImgMouseOut = "panel4CatImgReplace(2," + catArray[w][0] + ");";
										var replaceImgMouseClass = " img_replace_active";
										var replaceImgCall = "panel4CatImgClick(" + catArray[w][0] + ");";
									}
									else {
										var replaceImgMouseOver = "";
										var replaceImgMouseOut = "";
										var replaceImgMouseClass = "";
										var replaceImgCall = "";
									}
									var catAllTagLinkTest = catAllTagStrip.indexOf(" LINK");
									var catAllTagLink = "";
									if (catAllTagLinkTest != -1) {
										catAllTagLink += " style='cursor:pointer;' onclick='panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\");" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\");" + replaceImgCall + "}'";
										if (hoverState==1) {
											catAllTagLink += " onmouseover='panel4CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel4CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel4CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel4CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
										}
									}
									categoryHTMLTest = baseCatAllHTMLStart + "<div id='panel4CategoryName" + catArray[w][0] + "All' class='panel_4_category_name_all_" + catArray[w][0] + replaceImgMouseClass + " panel_4_category_name_all" + replaceImgMouseClass + " panel_4_category_name_all_off'" + catAllTagLink + " tabindex='0' title=\"" + catAllValueVal + "\">" + catAllValueVal + "<\/div>" + baseCatAllHTMLEnd;
								}
								prodListHTML += "<span class='panel_4_prodlist_catshell panel_4_prodlist_catshell_" + catArray[w][0] + " panel_4_prodlist_catshell_off'>" + categoryHTMLTest + "<\/span>";
								for (x=0; x<prodFilterArray.length; x++) {
									if (prodFilterArray[x][8] == catArray[w][0]) {
										var productHTMLTest = autotextIt(p4TemplateSet.panel4ProductDiv,"panel4Product");
										var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
										if (prodDiscTagStart != -1) {
											var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
											var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
											var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
											var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
											var prodDiscWrite = "";
											var discVal = prodFilterArray[x][6];
											if (discVal != 1) {
												prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel4Product_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
											}
											productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
										}
										var prodNameTagStart = productHTMLTest.indexOf("<!--PRODNAME");
										if (prodNameTagStart != -1) {
											var prodNameTagEnd = productHTMLTest.indexOf(">",prodNameTagStart);
											var prodNameTagStrip = productHTMLTest.substring(prodNameTagStart,(prodNameTagEnd+1));
											var baseProdNameHTMLStart = productHTMLTest.substr(0,prodNameTagStart);
											var baseProdNameHTMLEnd = productHTMLTest.substr((prodNameTagEnd+1));
											var prodNameTagLink = " style='cursor:pointer;' onclick='panel4ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");}'";
											if (hoverState==1) {
												prodNameTagLink += " onmouseover='panel4ProdMouseOver(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");' onfocus='panel4ProdMouseOver(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");' onmouseout='panel4ProdMouseOut(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");' onblur='panel4ProdMouseOut(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");'";
											}
											if (prodFilterArray[x][9] == "1") {
												var baseProductStyle = " panel_4_product_name_on";
											}
											else {
												var baseProductStyle = " panel_4_product_name_off";
											}
											var descTest = prodNameTagStrip.indexOf(" DESC");
											if (descTest != -1) {
												var descVal = "<span class='panel_4_product_name_desc'>" + prodFilterArray[x][3] + "<\/span>";
											}
											else {
												var descVal = "";
											}
											var prodNameItalicStart = prodNameTagStrip.indexOf(" FNTAW=");
											if (prodNameItalicStart != -1) {
												var prodNameItalicEnd = prodNameTagStrip.indexOf("]",prodNameItalicStart);
												var prodNameItalicVar = "<i class='fa " + prodNameTagStrip.substring((prodNameItalicStart+8),(prodNameItalicEnd)) + "'><\/i>";
											}
											else {
												var prodNameItalicVar = "";
											}
											productHTMLTest = baseProdNameHTMLStart + "<div id='panel4ProductName" + prodFilterArray[x][0] + "' class='panel_4_product_name" + baseProductStyle + "'" + prodNameTagLink + " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">" + prodNameItalicVar + "<span class='panel_4_product_name_name'>" + prodFilterArray[x][2] + "<\/span>" + descVal + "<\/div>" + baseProdNameHTMLEnd;
										}
										var prodDescTagStart = productHTMLTest.indexOf("<!--PRODDESC");
										if (prodDescTagStart != -1) {
											var prodDescTagEnd = productHTMLTest.indexOf(">",prodDescTagStart);
											var prodDescTagStrip = productHTMLTest.substring(prodDescTagStart,(prodDescTagEnd+1));
											var baseProdDescHTMLStart = productHTMLTest.substr(0,prodDescTagStart);
											var baseProdDescHTMLEnd = productHTMLTest.substr((prodDescTagEnd+1));
											productHTMLTest = baseProdDescHTMLStart + "<div id='panel4ProductDesc" + prodFilterArray[x][0] + "' class='panel_4_product_desc'>" + prodFilterArray[x][3] + "<\/div>" + baseProdDescHTMLEnd;
										}
										var prodCatTagStart = productHTMLTest.indexOf("<!--PRODCAT");
										if (prodCatTagStart != -1) {
											var prodCatTagEnd = productHTMLTest.indexOf(">",prodCatTagStart);
											var prodCatTagStrip = productHTMLTest.substring(prodCatTagStart,(prodCatTagEnd+1));
											var baseProdCatHTMLStart = productHTMLTest.substr(0,prodCatTagStart);
											var baseProdCatHTMLEnd = productHTMLTest.substr((prodCatTagEnd+1));
											productHTMLTest = baseProdCatHTMLStart + "<div id='panel4ProductCat" + prodFilterArray[x][0] + "' class='panel_4_product_cat'>" + prodFilterArray[x][16] + "<\/div>" + baseProdCatHTMLEnd;
										}
										var prodBigImgTagStart = productHTMLTest.indexOf("<!--PRODBIGIMG");
										if (prodBigImgTagStart != -1) {
											var prodBigImgTagEnd = productHTMLTest.indexOf(">",prodBigImgTagStart);
											var prodBigImgTagStrip = productHTMLTest.substring(prodBigImgTagStart,(prodBigImgTagEnd+1));
											var baseProdBigImgHTMLStart = productHTMLTest.substr(0,prodBigImgTagStart);
											var baseProdBigImgHTMLEnd = productHTMLTest.substr((prodBigImgTagEnd+1));
											var prodBigImgTagLinkStart = "<a href='' onclick='panel4ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");return false;}'";
											if (hoverState==1) {
												prodBigImgTagLinkStart += " onmouseover='panel4ProdMouseOver(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");' onfocus='panel4ProdMouseOver(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");' onmouseout='panel4ProdMouseOut(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");' onblur='panel4ProdMouseOut(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");'";
											}
											prodBigImgTagLinkStart += " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">";
											var prodBigImgTagLinkEnd = "<\/a>";
											productHTMLTest = baseProdBigImgHTMLStart + prodBigImgTagLinkStart + "<img title=\"" + prodFilterArray[x][2] + "\" alt=\"" + prodFilterArray[x][2] + "\" id='panel4ProductBigImg" + prodFilterArray[x][0] + "' class='panel_4_product_big_img' src='" + clientImgBase + prodFilterArray[x][4] + "'>" + prodBigImgTagLinkEnd + baseProdBigImgHTMLEnd;
										}
										var prodSmImgTagStart = productHTMLTest.indexOf("<!--PRODSMIMG");
										if (prodSmImgTagStart != -1) {
											var prodSmImgTagEnd = productHTMLTest.indexOf(">",prodSmImgTagStart);
											var prodSmImgTagStrip = productHTMLTest.substring(prodSmImgTagStart,(prodSmImgTagEnd+1));
											var baseProdSmImgHTMLStart = productHTMLTest.substr(0,prodSmImgTagStart);
											var baseProdSmImgHTMLEnd = productHTMLTest.substr((prodSmImgTagEnd+1));
											var prodSmImgTagLinkStart = "<a href='' onclick='panel4ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");return false;}'";
											if (hoverState==1) {
												prodSmImgTagLinkStart += " onmouseover='panel4ProdMouseOver(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");' onfocus='panel4ProdMouseOver(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");' onmouseout='panel4ProdMouseOut(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");' onblur='panel4ProdMouseOut(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");'";
											}
											prodSmImgTagLinkStart += " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">";
											var prodSmImgTagLinkEnd = "<\/a>";
											productHTMLTest = baseProdSmImgHTMLStart + prodSmImgTagLinkStart + "<img title=\"" + prodFilterArray[x][2] + "\" alt=\"" + prodFilterArray[x][2] + "\" id='panel4ProductSmImg" + prodFilterArray[x][0] + "' class='panel_4_product_sm_img' src='" + clientImgBase + prodFilterArray[x][5] + "'>" + prodSmImgTagLinkEnd + baseProdSmImgHTMLEnd;
										}
										prodListHTML += "<span class='panel_4_prodlist_prodshell panel_4_prodlist_prodshell_" + prodFilterArray[x][0] + " panel_4_prodlist_prodshell_off'>" + productHTMLTest + "<\/span>";
									}
								}
								break;
							}
						}
					}
					else {
						for (w=0; w<catArray.length; w++) {
							var catFoundProd = 0;
							for (x=0; x<prodFilterArray.length; x++) {
								if (prodFilterArray[x][8] == catArray[w][0]) {
									if (catFoundProd == 0) {
										catFoundProd++;
										var categoryHTMLTest = autotextIt(p4TemplateSet.panel4CategoryDiv,"panel4Category");
										var catBadgeTagStart = categoryHTMLTest.indexOf("<!--BADGE");
										if (catBadgeTagStart != -1) {
											var catBadgeTagEnd = categoryHTMLTest.indexOf(">",catBadgeTagStart);
											var catBadgeTagStrip = categoryHTMLTest.substring(catBadgeTagStart,(catBadgeTagEnd+1));
											var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBadgeTagStart);
											var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBadgeTagEnd+1));
											categoryHTMLTest = baseCatBigImgHTMLStart + "<span id='panel4ProdlistCatBadge" + catArray[w][0] + "' class='panel_4_prodlist_cat_badge' style='display:none;'>0<\/span>" + baseCatBigImgHTMLEnd;
										}
										var catNameTagStart = categoryHTMLTest.indexOf("<!--CATNAME");
										if (catNameTagStart != -1) {
											var catNameTagEnd = categoryHTMLTest.indexOf(">",catNameTagStart);
											var catNameTagStrip = categoryHTMLTest.substring(catNameTagStart,(catNameTagEnd+1));
											var baseCatNameHTMLStart = categoryHTMLTest.substr(0,catNameTagStart);
											var baseCatNameHTMLEnd = categoryHTMLTest.substr((catNameTagEnd+1));
											var catNameTagNumTest = catNameTagStrip.indexOf(" PRODNUM");
											if (catNameTagNumTest != -1) {
												var daProdNum = 0;
												for (r=0;r<prodFilterArray.length;r++) {
													if (prodFilterArray[r][8] == catArray[w][0]) {
														daProdNum++;
													}
												}
												var daProdNumWrite = "<span class='da_prod_num'>" + daProdNum + "<\/span>";
											}
											else {
												var daProdNumWrite = "";
											}
											var replaceImgTest = catNameTagStrip.indexOf(" REPLACE");
											if (replaceImgTest != -1) {
												var replaceImgMouseOver = "panel4CatImgReplace(1," + catArray[w][0] + ");";
												var replaceImgMouseOut = "panel4CatImgReplace(2," + catArray[w][0] + ");";
												var replaceImgMouseClass = " img_replace_active";
												var replaceImgCall = "panel4CatImgClick(" + catArray[w][0] + ");";
											}
											else {
												var replaceImgMouseOver = "";
												var replaceImgMouseOut = "";
												var replaceImgMouseClass = "";
												var replaceImgCall = "";
											}
											var catNameTagLinkTest = catNameTagStrip.indexOf(" LINK");
											var catNameTagLink = "";
											var baseCatStyle = "";
											if (catNameTagLinkTest != -1) {
												catNameTagLink += " style='cursor:pointer;' onclick='panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\");" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\");" + replaceImgCall + "}'";
												if (hoverState==1) {
													catNameTagLink += " onmouseover='panel4CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel4CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel4CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel4CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
												}
												var thisCatIsOn = 1;
												for (q=0; q<prodFilterArray.length; q++) {
													if (prodFilterArray[q][8] == catArray[w][0] && prodFilterArray[q][9] == "0") {
														thisCatIsOn = 0;
														break;
													}
												}
												if (thisCatIsOn == 1) {
													var baseCatStyle = " panel_4_category_name_on";
													catArray[w][6] = 1;
													window["panel1CategoryNameVar" + catArray[w][0]] = 1;
												}
												else {
													var baseCatStyle = " panel_4_category_name_off";
												}
											}
											categoryHTMLTest = baseCatNameHTMLStart + "<div id='panel4CategoryName" + catArray[w][0] + "' class='panel_4_category_name_" + catArray[w][0] + replaceImgMouseClass + " panel_4_category_name'" + catNameTagLink + " tabindex='0' title=\"" + catArray[w][1] + "\">" + catArray[w][1] + daProdNumWrite + "<\/div>" + baseCatNameHTMLEnd;
										}
										var catBigImgTagStart = categoryHTMLTest.indexOf("<!--CATBIGIMG");
										if (catBigImgTagStart != -1) {
											var catBigImgTagEnd = categoryHTMLTest.indexOf(">",catBigImgTagStart);
											var catBigImgTagStrip = categoryHTMLTest.substring(catBigImgTagStart,(catBigImgTagEnd+1));
											var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBigImgTagStart);
											var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBigImgTagEnd+1));
											var catBigImgTagRender = "";
											var replaceImgTest = catBigImgTagStrip.indexOf(" REPLACE");
											if (replaceImgTest != -1) {
												catBigImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel4CategoryBigImgDivShell" + catArray[w][0] + "' class='panel_4_category_big_img_div_shell panel_4_category_big_img_div_shell_" + catArray[w][0] + "' onclick='panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\");panel4CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\");panel4CatImgClick(" + catArray[w][0] + ");}'";
												if (hoverState==1) {
													catBigImgTagRender += " onmouseover='panel4CatMouseOver(" + w + ");panel4CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel4CatMouseOver(" + w + ");panel4CatImgReplace(1," + catArray[w][0] + ");'";
												}
												catBigImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel4CategoryBigImgDivBack" + catArray[w][0] + "' class='panel_4_category_big_img_div_back panel_4_category_big_img_div_back_off panel_4_category_big_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][3] + "\");'><\/div><div id='panel4CategoryBigImgDivOver" + catArray[w][0] + "' class='panel_4_category_big_img_div_over panel_4_category_big_img_div_over_" + catArray[w][0] + "'";
												if (hoverState==1) {
													catBigImgTagRender += " onmouseout='panel4CatMouseOut(" + w + ");panel4CatImgReplace(2," + catArray[w][0] + ");' onblur='panel4CatMouseOut(" + w + ");panel4CatImgReplace(2," + catArray[w][0] + ");'";
												}
												catBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
												categoryHTMLTest = baseCatBigImgHTMLStart + catBigImgTagRender + baseCatBigImgHTMLEnd;
											}
											else {
												categoryHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel4CategoryBigImg" + catArray[w][0] + "' class='panel_4_category_big_img' src='" + clientImgBase + catArray[w][3] + "'>" + baseCatBigImgHTMLEnd;
											}
										}
										var catSmImgTagStart = categoryHTMLTest.indexOf("<!--CATSMIMG");
										if (catSmImgTagStart != -1) {
											var catSmImgTagEnd = categoryHTMLTest.indexOf(">",catSmImgTagStart);
											var catSmImgTagStrip = categoryHTMLTest.substring(catSmImgTagStart,(catSmImgTagEnd+1));
											var baseCatSmImgHTMLStart = categoryHTMLTest.substr(0,catSmImgTagStart);
											var baseCatSmImgHTMLEnd = categoryHTMLTest.substr((catSmImgTagEnd+1));
											var catSmImgTagRender = "";
											var replaceImgTest = catSmImgTagStrip.indexOf(" REPLACE");
											if (replaceImgTest != -1) {
												catSmImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel4CategorySmImgDivShell" + catArray[w][0] + "' class='panel_4_category_sm_img_div_shell panel_4_category_sm_img_div_shell_" + catArray[w][0] + "' onclick='panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\");panel4CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\");panel4CatImgClick(" + catArray[w][0] + ");}'";
												if (hoverState==1) {
													catSmImgTagRender += " onmouseover='panel4CatMouseOver(" + w + ");panel4CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel4CatMouseOver(" + w + ");panel4CatImgReplace(1," + catArray[w][0] + ");'";
												}
												catSmImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel4CategorySmImgDivBack" + catArray[w][0] + "' class='panel_4_category_sm_img_div_back panel_4_category_sm_img_div_back_off panel_4_category_sm_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][4] + "\");'><\/div><div id='panel4CategorySmImgDivOver" + catArray[w][0] + "' class='panel_4_category_sm_img_div_over panel_4_category_sm_img_div_over_" + catArray[w][0] + "'";
												if (hoverState==1) {
													catSmImgTagRender += " onmouseout='panel4CatMouseOut(" + w + ");panel4CatImgReplace(2," + catArray[w][0] + ");' onblur='panel4CatMouseOut(" + w + ");panel4CatImgReplace(2," + catArray[w][0] + ");'";
												}
												catSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
												categoryHTMLTest = baseCatSmImgHTMLStart + catSmImgTagRender + baseCatSmImgHTMLEnd;
											}
											else {
												categoryHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel4CategorySmImg" + catArray[w][0] + "' class='panel_4_category_sm_img' src='" + clientImgBase + catArray[w][4] + "'>" + baseCatSmImgHTMLEnd;
											}
										}
										var catAllTagStart = categoryHTMLTest.indexOf("<!--CATALL");
										if (catAllTagStart != -1) {
											var catAllTagEnd = categoryHTMLTest.indexOf(">",catAllTagStart);
											var catAllTagStrip = categoryHTMLTest.substring(catAllTagStart,(catAllTagEnd+1));
											var baseCatAllHTMLStart = categoryHTMLTest.substr(0,catAllTagStart);
											var baseCatAllHTMLEnd = categoryHTMLTest.substr((catAllTagEnd+1));
											var catAllValueStart = catAllTagStrip.indexOf(" VALUE=");
											if (catAllValueStart != -1) {
												var catAllValueEnd = catAllTagStrip.indexOf("]", catAllValueStart);
												var catAllValueVal = catAllTagStrip.substring((catAllValueStart+8),(catAllValueEnd));
											}
											else {
												var catAllValueVal = "ALL";
											}
											var replaceImgTest = catAllTagStrip.indexOf(" REPLACE");
											if (replaceImgTest != -1) {
												var replaceImgMouseOver = "panel4CatImgReplace(1," + catArray[w][0] + ");";
												var replaceImgMouseOut = "panel4CatImgReplace(2," + catArray[w][0] + ");";
												var replaceImgMouseClass = " img_replace_active";
												var replaceImgCall = "panel4CatImgClick(" + catArray[w][0] + ");";
											}
											else {
												var replaceImgMouseOver = "";
												var replaceImgMouseOut = "";
												var replaceImgMouseClass = "";
												var replaceImgCall = "";
											}
											var catAllTagLinkTest = catAllTagStrip.indexOf(" LINK");
											var catAllTagLink = "";
											if (catAllTagLinkTest != -1) {
												catAllTagLink += " style='cursor:pointer;' onclick='panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\");" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\");" + replaceImgCall + "}'";
												if (hoverState==1) {
													catAllTagLink += " onmouseover='panel4CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel4CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel4CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel4CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
												}
											}
											categoryHTMLTest = baseCatAllHTMLStart + "<div id='panel4CategoryName" + catArray[w][0] + "All' class='panel_4_category_name_all_" + catArray[w][0] + replaceImgMouseClass + " panel_4_category_name_all" + replaceImgMouseClass + " panel_4_category_name_all_off'" + catAllTagLink + " tabindex='0' title=\"" + catAllValueVal + "\">" + catAllValueVal + "<\/div>" + baseCatAllHTMLEnd;
										}
										prodListHTML += "<span class='panel_4_prodlist_catshell panel_4_prodlist_catshell_" + catArray[w][0] + " panel_4_prodlist_catshell_off'>" + categoryHTMLTest + "<\/span>";
									}
									if (panel4ProductHideprod == 1 && prodFilterArray[x][0] == 0) {
										var writeDisProdRow = 0;
									}
									else {
										var writeDisProdRow = 1;
									}
									if (writeDisProdRow == 1) {
										var productHTMLTest = autotextIt(p4TemplateSet.panel4ProductDiv,"panel4Product");
										var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
										if (prodDiscTagStart != -1) {
											var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
											var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
											var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
											var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
											var prodDiscWrite = "";
											var discVal = prodFilterArray[x][6];
											if (discVal != 1) {
												prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel4Product_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
											}
											productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
										}
										var prodNameTagStart = productHTMLTest.indexOf("<!--PRODNAME");
										if (prodNameTagStart != -1) {
											var prodNameTagEnd = productHTMLTest.indexOf(">",prodNameTagStart);
											var prodNameTagStrip = productHTMLTest.substring(prodNameTagStart,(prodNameTagEnd+1));
											var baseProdNameHTMLStart = productHTMLTest.substr(0,prodNameTagStart);
											var baseProdNameHTMLEnd = productHTMLTest.substr((prodNameTagEnd+1));
											var prodNameTagLink = " style='cursor:pointer;' onclick='panel4ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");}'";
											if (hoverState==1) {
												prodNameTagLink += " onmouseover='panel4ProdMouseOver(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");' onfocus='panel4ProdMouseOver(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");' onmouseout='panel4ProdMouseOut(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");' onblur='panel4ProdMouseOut(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");'";
											}
											if (prodFilterArray[x][9] == "1") {
												var baseProductStyle = " panel_4_product_name_on";
											}
											else {
												var baseProductStyle = " panel_4_product_name_off";
											}
											var descTest = prodNameTagStrip.indexOf(" DESC");
											if (descTest != -1) {
												var descVal = "<span class='panel_4_product_name_desc'>" + prodFilterArray[x][3] + "<\/span>";
											}
											else {
												var descVal = "";
											}
											var prodNameItalicStart = prodNameTagStrip.indexOf(" FNTAW=");
											if (prodNameItalicStart != -1) {
												var prodNameItalicEnd = prodNameTagStrip.indexOf("]",prodNameItalicStart);
												var prodNameItalicVar = "<i class='fa " + prodNameTagStrip.substring((prodNameItalicStart+8),(prodNameItalicEnd)) + "'><\/i>";
											}
											else {
												var prodNameItalicVar = "";
											}
											productHTMLTest = baseProdNameHTMLStart + "<div id='panel4ProductName" + prodFilterArray[x][0] + "' class='panel_4_product_name" + baseProductStyle + "'" + prodNameTagLink + " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">" + prodNameItalicVar + "<span class='panel_4_product_name_name'>" + prodFilterArray[x][2] + "<\/span>" + descVal + "<\/div>" + baseProdNameHTMLEnd;
										}
										var prodDescTagStart = productHTMLTest.indexOf("<!--PRODDESC");
										if (prodDescTagStart != -1) {
											var prodDescTagEnd = productHTMLTest.indexOf(">",prodDescTagStart);
											var prodDescTagStrip = productHTMLTest.substring(prodDescTagStart,(prodDescTagEnd+1));
											var baseProdDescHTMLStart = productHTMLTest.substr(0,prodDescTagStart);
											var baseProdDescHTMLEnd = productHTMLTest.substr((prodDescTagEnd+1));
											productHTMLTest = baseProdDescHTMLStart + "<div id='panel4ProductDesc" + prodFilterArray[x][0] + "' class='panel_4_product_desc'>" + prodFilterArray[x][3] + "<\/div>" + baseProdDescHTMLEnd;
										}
										var prodCatTagStart = productHTMLTest.indexOf("<!--PRODCAT");
										if (prodCatTagStart != -1) {
											var prodCatTagEnd = productHTMLTest.indexOf(">",prodCatTagStart);
											var prodCatTagStrip = productHTMLTest.substring(prodCatTagStart,(prodCatTagEnd+1));
											var baseProdCatHTMLStart = productHTMLTest.substr(0,prodCatTagStart);
											var baseProdCatHTMLEnd = productHTMLTest.substr((prodCatTagEnd+1));
											productHTMLTest = baseProdCatHTMLStart + "<div id='panel4ProductCat" + prodFilterArray[x][0] + "' class='panel_4_product_cat'>" + prodFilterArray[x][16] + "<\/div>" + baseProdCatHTMLEnd;
										}
										var prodBigImgTagStart = productHTMLTest.indexOf("<!--PRODBIGIMG");
										if (prodBigImgTagStart != -1) {
											var prodBigImgTagEnd = productHTMLTest.indexOf(">",prodBigImgTagStart);
											var prodBigImgTagStrip = productHTMLTest.substring(prodBigImgTagStart,(prodBigImgTagEnd+1));
											var baseProdBigImgHTMLStart = productHTMLTest.substr(0,prodBigImgTagStart);
											var baseProdBigImgHTMLEnd = productHTMLTest.substr((prodBigImgTagEnd+1));
											var prodBigImgTagLinkStart = "<a href='' onclick='panel4ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");return false;}'";
											if (hoverState==1) {
												prodBigImgTagLinkStart += " onmouseover='panel4ProdMouseOver(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");' onfocus='panel4ProdMouseOver(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");' onmouseout='panel4ProdMouseOut(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");' onblur='panel4ProdMouseOut(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");'";
											}
											prodBigImgTagLinkStart += " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">";
											var prodBigImgTagLinkEnd = "<\/a>";
											productHTMLTest = baseProdBigImgHTMLStart + prodBigImgTagLinkStart + "<img title=\"" + prodFilterArray[x][2] + "\" alt=\"" + prodFilterArray[x][2] + "\" id='panel4ProductBigImg" + prodFilterArray[x][0] + "' class='panel_4_product_big_img' src='" + clientImgBase + prodFilterArray[x][4] + "'>" + prodBigImgTagLinkEnd + baseProdBigImgHTMLEnd;
										}
										var prodSmImgTagStart = productHTMLTest.indexOf("<!--PRODSMIMG");
										if (prodSmImgTagStart != -1) {
											var prodSmImgTagEnd = productHTMLTest.indexOf(">",prodSmImgTagStart);
											var prodSmImgTagStrip = productHTMLTest.substring(prodSmImgTagStart,(prodSmImgTagEnd+1));
											var baseProdSmImgHTMLStart = productHTMLTest.substr(0,prodSmImgTagStart);
											var baseProdSmImgHTMLEnd = productHTMLTest.substr((prodSmImgTagEnd+1));
											var prodSmImgTagLinkStart = "<a href='' onclick='panel4ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");return false;}'";
											if (hoverState==1) {
												prodSmImgTagLinkStart = " onmouseover='panel4ProdMouseOver(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");' onfocus='panel4ProdMouseOver(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");' onmouseout='panel4ProdMouseOut(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");' onblur='panel4ProdMouseOut(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");'";
											}
											prodSmImgTagLinkStart = " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">";
											var prodSmImgTagLinkEnd = "<\/a>";
											productHTMLTest = baseProdSmImgHTMLStart + prodSmImgTagLinkStart + "<img title=\"" + prodFilterArray[x][2] + "\" alt=\"" + prodFilterArray[x][2] + "\" id='panel4ProductSmImg" + prodFilterArray[x][0] + "' class='panel_4_product_sm_img' src='" + clientImgBase + prodFilterArray[x][5] + "'>" + prodSmImgTagLinkEnd + baseProdSmImgHTMLEnd;
										}
										prodListHTML += "<span class='panel_4_prodlist_prodshell panel_4_prodlist_prodshell_" + prodFilterArray[x][0] + " panel_4_prodlist_prodshell_off'>" + productHTMLTest + "<\/span>";
									}
								}
							}
						}
					}
				}
				else if (panel4ProductSort == "PRODUCT") {
					for (x=0; x<prodFilterArray.length; x++) {
						if (panel4ProductHideprod == 1 && prodFilterArray[x][0] == 0) {
							var writeDisProdRow = 0;
						}
						else {
							var writeDisProdRow = 1;
						}
						if (writeDisProdRow == 1) {
							var productHTMLTest = autotextIt(p4TemplateSet.panel4ProductDiv,"panel4Product");
							var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
							if (prodDiscTagStart != -1) {
								var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
								var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
								var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
								var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
								var prodDiscWrite = "";
								var discVal = prodFilterArray[x][6];
								if (discVal != 1) {
									prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel4Product_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
								}
								productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
							}
							var prodNameTagStart = productHTMLTest.indexOf("<!--PRODNAME");
							if (prodNameTagStart != -1) {
								var prodNameTagEnd = productHTMLTest.indexOf(">",prodNameTagStart);
								var prodNameTagStrip = productHTMLTest.substring(prodNameTagStart,(prodNameTagEnd+1));
								var baseProdNameHTMLStart = productHTMLTest.substr(0,prodNameTagStart);
								var baseProdNameHTMLEnd = productHTMLTest.substr((prodNameTagEnd+1));
								var prodNameTagLink = " style='cursor:pointer;' onclick='panel4ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");}'";
								if (hoverState==1) {
									prodNameTagLink += " onmouseover='panel4ProdMouseOver(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");' onfocus='panel4ProdMouseOver(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");' onmouseout='panel4ProdMouseOut(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");' onblur='panel4ProdMouseOut(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");'";
								}
								if (prodFilterArray[x][9] == "1") {
									var baseProductStyle = " panel_4_product_name_on";
								}
								else {
									var baseProductStyle = " panel_4_product_name_off";
								}
								var descTest = prodNameTagStrip.indexOf(" DESC");
								if (descTest != -1) {
									var descVal = "<span class='panel_4_product_name_desc'>" + prodFilterArray[x][3] + "<\/span>";
								}
								else {
									var descVal = "";
								}
								var prodNameItalicStart = prodNameTagStrip.indexOf(" FNTAW=");
								if (prodNameItalicStart != -1) {
									var prodNameItalicEnd = prodNameTagStrip.indexOf("]",prodNameItalicStart);
									var prodNameItalicVar = "<i class='fa " + prodNameTagStrip.substring((prodNameItalicStart+8),(prodNameItalicEnd)) + "'><\/i>";
								}
								else {
									var prodNameItalicVar = "";
								}
								productHTMLTest = baseProdNameHTMLStart + "<div id='panel4ProductName" + prodFilterArray[x][0] + "' class='panel_4_product_name" + baseProductStyle + "'" + prodNameTagLink + " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">" + prodNameItalicVar + "<span class='panel_4_product_name_name'>" + prodFilterArray[x][2] + "<\/span>" + descVal + "<\/div>" + baseProdNameHTMLEnd;
							}
							var prodDescTagStart = productHTMLTest.indexOf("<!--PRODDESC");
							if (prodDescTagStart != -1) {
								var prodDescTagEnd = productHTMLTest.indexOf(">",prodDescTagStart);
								var prodDescTagStrip = productHTMLTest.substring(prodDescTagStart,(prodDescTagEnd+1));
								var baseProdDescHTMLStart = productHTMLTest.substr(0,prodDescTagStart);
								var baseProdDescHTMLEnd = productHTMLTest.substr((prodDescTagEnd+1));
								productHTMLTest = baseProdDescHTMLStart + "<div id='panel4ProductDesc" + prodFilterArray[x][0] + "' class='panel_4_product_desc'>" + prodFilterArray[x][3] + "<\/div>" + baseProdDescHTMLEnd;
							}
							var prodCatTagStart = productHTMLTest.indexOf("<!--PRODCAT");
							if (prodCatTagStart != -1) {
								var prodCatTagEnd = productHTMLTest.indexOf(">",prodCatTagStart);
								var prodCatTagStrip = productHTMLTest.substring(prodCatTagStart,(prodCatTagEnd+1));
								var baseProdCatHTMLStart = productHTMLTest.substr(0,prodCatTagStart);
								var baseProdCatHTMLEnd = productHTMLTest.substr((prodCatTagEnd+1));
								productHTMLTest = baseProdCatHTMLStart + "<div id='panel4ProductCat" + prodFilterArray[x][0] + "' class='panel_4_product_cat'>" + prodFilterArray[x][16] + "<\/div>" + baseProdCatHTMLEnd;
							}
							var prodBigImgTagStart = productHTMLTest.indexOf("<!--PRODBIGIMG");
							if (prodBigImgTagStart != -1) {
								var prodBigImgTagEnd = productHTMLTest.indexOf(">",prodBigImgTagStart);
								var prodBigImgTagStrip = productHTMLTest.substring(prodBigImgTagStart,(prodBigImgTagEnd+1));
								var baseProdBigImgHTMLStart = productHTMLTest.substr(0,prodBigImgTagStart);
								var baseProdBigImgHTMLEnd = productHTMLTest.substr((prodBigImgTagEnd+1));
								var prodBigImgTagLinkStart = "<a href='' onclick='panel4ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");return false;}'";
								if (hoverState==1) {
									prodBigImgTagLinkStart += " onmouseover='panel4ProdMouseOver(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");' onfocus='panel4ProdMouseOver(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");' onmouseout='panel4ProdMouseOut(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");' onblur='panel4ProdMouseOut(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");'";
								}
								prodBigImgTagLinkStart += " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">";
								var prodBigImgTagLinkEnd = "<\/a>";
								productHTMLTest = baseProdBigImgHTMLStart + prodBigImgTagLinkStart + "<img title=\"" + prodFilterArray[x][2] + "\" alt=\"" + prodFilterArray[x][2] + "\" id='panel4ProductBigImg" + prodFilterArray[x][0] + "' class='panel_4_product_big_img' src='" + clientImgBase + prodFilterArray[x][4] + "'>" + prodBigImgTagLinkEnd + baseProdBigImgHTMLEnd;
							}
							var prodSmImgTagStart = productHTMLTest.indexOf("<!--PRODSMIMG");
							if (prodSmImgTagStart != -1) {
								var prodSmImgTagEnd = productHTMLTest.indexOf(">",prodSmImgTagStart);
								var prodSmImgTagStrip = productHTMLTest.substring(prodSmImgTagStart,(prodSmImgTagEnd+1));
								var baseProdSmImgHTMLStart = productHTMLTest.substr(0,prodSmImgTagStart);
								var baseProdSmImgHTMLEnd = productHTMLTest.substr((prodSmImgTagEnd+1));
								var prodSmImgTagLinkStart = "<a href='' onclick='panel4ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");return false;}'";
								if (hoverState==1) {
									prodSmImgTagLinkStart += " onmouseover='panel4ProdMouseOver(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");' onfocus='panel4ProdMouseOver(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");' onmouseout='panel4ProdMouseOut(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");' onblur='panel4ProdMouseOut(\"panel4ProductName" + prodFilterArray[x][0] + "\", \"panel_4_product_name\", "+x+");'";
								}
								prodSmImgTagLinkStart += " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">";
								var prodSmImgTagLinkEnd = "<\/a>";
								productHTMLTest = baseProdSmImgHTMLStart + prodSmImgTagLinkStart + "<img title=\"" + prodFilterArray[x][2] + "\" alt=\"" + prodFilterArray[x][2] + "\" id='panel4ProductSmImg" + prodFilterArray[x][0] + "' class='panel_4_product_sm_img' src='" + clientImgBase + prodFilterArray[x][5] + "'>" + prodSmImgTagLinkEnd + baseProdSmImgHTMLEnd;
							}
							prodListHTML += "<span class='panel_4_prodlist_prodshell panel_4_prodlist_prodshell_" + prodFilterArray[x][0] + " panel_4_prodlist_prodshell_off'>" + productHTMLTest + "<\/span>";
						}
					}
				}
				else if (panel4ProductSort == "LABEL") {
					for (l=0; l<labelArray.length; l++) {
						var labelHTMLTest = autotextIt(p4TemplateSet.panel4LabelDiv,"panel4Label");
						var labelNameTagStart = labelHTMLTest.indexOf("<!--LABELNAME");
						if (labelNameTagStart != -1) {
							var labelNameTagEnd = labelHTMLTest.indexOf(">",labelNameTagStart);
							var labelNameTagStrip = labelHTMLTest.substring(labelNameTagStart,(labelNameTagEnd+1));
							var baseLabelNameHTMLStart = labelHTMLTest.substr(0,labelNameTagStart);
							var baseLabelNameHTMLEnd = labelHTMLTest.substr((labelNameTagEnd+1));
							var labelNameTagNumTest = labelNameTagStrip.indexOf(" PRODNUM");
							if (labelNameTagNumTest != -1) {
								var daProdNum = 0;
								for (n=0;n<prodLabelArray.length;n++) {
									if (prodLabelArray[n][2] == labelArray[l][0]) {
										daProdNum++;
									}
								}
								var daProdNumWrite = "<span class='da_prod_num'>" + daProdNum + "<\/span>";
							}
							else {
								var daProdNumWrite = "";
							}
							var labelNameTagLinkTest = labelNameTagStrip.indexOf(" LINK");
							var labelNameTagLink = "";
							var baseLabelStyle = "";
							if (labelNameTagLinkTest != -1) {
								labelNameTagLink += " style='cursor:pointer;' onclick='panel4SelectLabel(" + l + ", \"panel4LabelName" + labelArray[l][0] + "\", \"panel_4_label_name\",1);' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4SelectLabel(" + l + ", \"panel4LabelName" + labelArray[l][0] + "\", \"panel_4_label_name\",1);}'";
								if (hoverState==1) {
									labelNameTagLink += " onmouseover='panel4LabelMouseOver(" + l + ");' onfocus='panel4LabelMouseOver(" + l + ");' onmouseout='panel4LabelMouseOut(" + l + ");' onblur='panel4LabelMouseOut(" + l + ");'";
								}
								var thisLabelIsOn = 1;
								for (q=0; q<prodFilterArray.length; q++) {
									for (pl=0; pl<prodLabelArray.length; pl++) {
										if (prodFilterArray[q][0] == prodLabelArray[pl][1] && prodLabelArray[pl][2] == labelArray[l][0] && prodFilterArray[q][9] == "0") {
											thisLabelIsOn = 0;
											break;
										}
									}
									if (thisLabelIsOn == 0) {
										break
									}
								}
								if (thisLabelIsOn == 1) {
									var baseLabelStyle = " panel_4_label_name_on";
									labelArray[l][3] = 1;
								}
								else {
									var baseLabelStyle = " panel_4_label_name_off";
								}
							}
							labelHTMLTest = baseLabelNameHTMLStart + "<div id='panel4LabelName" + labelArray[l][0] + "' class='panel_4_label_name_" + labelArray[l][0] + " panel_4_label_name " + baseLabelStyle + "'" + labelNameTagLink + " tabindex='0' title=\"" + labelArray[l][1] + "\">" + labelArray[l][1] + daProdNumWrite + "<\/div>" + baseLabelNameHTMLEnd;
						}
						prodListHTML += "<span class='panel_4_prodlist_labelshell panel_4_prodlist_labelshell_" + labelArray[l][0] + " panel_4_prodlist_labelshell_off'>" + labelHTMLTest + "<\/span>";
					}
				}
				else if (panel4ProductSort == "CATLIST") {
					if (panel4ProductCatID != 0) {
						for (w=0; w<catArray.length; w++) {
							if (catArray[w][0] == panel4ProductCatID) {
								var categoryHTMLTest = autotextIt(p4TemplateSet.panel4CategoryDiv,"panel4Category");
								var catBadgeTagStart = categoryHTMLTest.indexOf("<!--BADGE");
								if (catBadgeTagStart != -1) {
									var catBadgeTagEnd = categoryHTMLTest.indexOf(">",catBadgeTagStart);
									var catBadgeTagStrip = categoryHTMLTest.substring(catBadgeTagStart,(catBadgeTagEnd+1));
									var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBadgeTagStart);
									var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBadgeTagEnd+1));
									categoryHTMLTest = baseCatBigImgHTMLStart + "<span id='panel4ProdlistCatBadge" + catArray[w][0] + "' class='panel_4_prodlist_cat_badge' style='display:none;'>0<\/span>" + baseCatBigImgHTMLEnd;
								}
								var catNameTagStart = categoryHTMLTest.indexOf("<!--CATNAME");
								if (catNameTagStart != -1) {
									var catNameTagEnd = categoryHTMLTest.indexOf(">",catNameTagStart);
									var catNameTagStrip = categoryHTMLTest.substring(catNameTagStart,(catNameTagEnd+1));
									var baseCatNameHTMLStart = categoryHTMLTest.substr(0,catNameTagStart);
									var baseCatNameHTMLEnd = categoryHTMLTest.substr((catNameTagEnd+1));
									var catNameTagNumTest = catNameTagStrip.indexOf(" PRODNUM");
									if (catNameTagNumTest != -1) {
										var daProdNum = 0;
										for (r=0;r<prodFilterArray.length;r++) {
											if (prodFilterArray[r][8] == catArray[w][0]) {
												daProdNum++;
											}
										}
										var daProdNumWrite = "<span class='da_prod_num'>" + daProdNum + "<\/span>";
									}
									else {
										var daProdNumWrite = "";
									}
									var replaceImgTest = catNameTagStrip.indexOf(" REPLACE");
									if (replaceImgTest != -1) {
										var replaceImgMouseOver = "panel4CatImgReplace(1," + catArray[w][0] + ");";
										var replaceImgMouseOut = "panel4CatImgReplace(2," + catArray[w][0] + ");";
										var replaceImgMouseClass = " img_replace_active";
										var replaceImgCall = "panel4CatImgClick(" + catArray[w][0] + ");";
									}
									else {
										var replaceImgMouseOver = "";
										var replaceImgMouseOut = "";
										var replaceImgMouseClass = "";
										var replaceImgCall = "";
									}
									var catNameTagLinkTest = catNameTagStrip.indexOf(" LINK");
									var catNameTagLink = "";
									var baseCatStyle = "";
									if (catNameTagLinkTest != -1) {
										catNameTagLink += " style='cursor:pointer;' onclick='panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\",1);" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\",1);" + replaceImgCall + "}'";
										if (hoverState==1) {
											catNameTagLink += " onmouseover='panel4CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel4CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel4CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel4CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
										}
										var thisCatIsOn = 1;
										for (q=0; q<prodFilterArray.length; q++) {
											if (prodFilterArray[q][8] == catArray[w][0] && prodFilterArray[q][9] == "0") {
												thisCatIsOn = 0;
												break;
											}
										}
										if (thisCatIsOn == 1) {
											var baseCatStyle = " panel_4_category_name_on";
											catArray[w][6] = 1;
											window["panel1CategoryNameVar" + catArray[w][0]] = 1;
										}
										else {
											var baseCatStyle = " panel_4_category_name_off";
										}
									}
									categoryHTMLTest = baseCatNameHTMLStart + "<div id='panel4CategoryName" + catArray[w][0] + "' class='panel_4_category_name_" + catArray[w][0] + replaceImgMouseClass + " panel_4_category_name " + baseCatStyle + "'" + catNameTagLink + " tabindex='0' title=\"" + catArray[w][1] + "\">" + catArray[w][1] + daProdNumWrite + "<\/div>" + baseCatNameHTMLEnd;
								}
								var catBigImgTagStart = categoryHTMLTest.indexOf("<!--CATBIGIMG");
								if (catBigImgTagStart != -1) {
									var catBigImgTagEnd = categoryHTMLTest.indexOf(">",catBigImgTagStart);
									var catBigImgTagStrip = categoryHTMLTest.substring(catBigImgTagStart,(catBigImgTagEnd+1));
									var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBigImgTagStart);
									var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBigImgTagEnd+1));
									var catBigImgTagRender = "";
									var replaceImgTest = catBigImgTagStrip.indexOf(" REPLACE");
									if (replaceImgTest != -1) {
										catBigImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel4CategoryBigImgDivShell" + catArray[w][0] + "' class='panel_4_category_big_img_div_shell panel_4_category_big_img_div_shell_" + catArray[w][0] + "' onclick='panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\",1);panel4CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\",1);panel4CatImgClick(" + catArray[w][0] + ");}'";
										if (hoverState==1) {
											catBigImgTagRender += " onmouseover='panel4CatMouseOver(" + w + ");panel4CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel4CatMouseOver(" + w + ");panel4CatImgReplace(1," + catArray[w][0] + ");'";
										}
										catBigImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel4CategoryBigImgDivBack" + catArray[w][0] + "' class='panel_4_category_big_img_div_back panel_4_category_big_img_div_back_off panel_4_category_big_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][3] + "\");'><\/div><div id='panel4CategoryBigImgDivOver" + catArray[w][0] + "' class='panel_4_category_big_img_div_over panel_4_category_big_img_div_over_" + catArray[w][0] + "'";
										if (hoverState==1) {
											catBigImgTagRender += " onmouseout='panel4CatMouseOut(" + w + ");panel4CatImgReplace(2," + catArray[w][0] + ");' onblur='panel4CatMouseOut(" + w + ");panel4CatImgReplace(2," + catArray[w][0] + ");'";
										}
										catBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
										categoryHTMLTest = baseCatBigImgHTMLStart + catBigImgTagRender + baseCatBigImgHTMLEnd;
									}
									else {
										categoryHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel4CategoryBigImg" + catArray[w][0] + "' class='panel_4_category_big_img' src='" + clientImgBase + catArray[w][3] + "'>" + baseCatBigImgHTMLEnd;
									}
								}
								var catSmImgTagStart = categoryHTMLTest.indexOf("<!--CATSMIMG");
								if (catSmImgTagStart != -1) {
									var catSmImgTagEnd = categoryHTMLTest.indexOf(">",catSmImgTagStart);
									var catSmImgTagStrip = categoryHTMLTest.substring(catSmImgTagStart,(catSmImgTagEnd+1));
									var baseCatSmImgHTMLStart = categoryHTMLTest.substr(0,catSmImgTagStart);
									var baseCatSmImgHTMLEnd = categoryHTMLTest.substr((catSmImgTagEnd+1));
									var catSmImgTagRender = "";
									var replaceImgTest = catSmImgTagStrip.indexOf(" REPLACE");
									if (replaceImgTest != -1) {
										catSmImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel4CategorySmImgDivShell" + catArray[w][0] + "' class='panel_4_category_sm_img_div_shell panel_4_category_sm_img_div_shell_" + catArray[w][0] + "' onclick='panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\",1);panel4CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\",1);panel4CatImgClick(" + catArray[w][0] + ");}'";
										if (hoverState==1) {
											catSmImgTagRender += " onmouseover='panel4CatMouseOver(" + w + ");panel4CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel4CatMouseOver(" + w + ");panel4CatImgReplace(1," + catArray[w][0] + ");'";
										}
										catSmImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel4CategorySmImgDivBack" + catArray[w][0] + "' class='panel_4_category_sm_img_div_back panel_4_category_sm_img_div_back_off panel_4_category_sm_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][4] + "\");'><\/div><div id='panel4CategorySmImgDivOver" + catArray[w][0] + "' class='panel_4_category_sm_img_div_over panel_4_category_sm_img_div_over_" + catArray[w][0] + "'";
										if (hoverState==1) {
											catSmImgTagRender += " onmouseout='panel4CatMouseOut(" + w + ");panel4CatImgReplace(2," + catArray[w][0] + ");' onblur='panel4CatMouseOut(" + w + ");panel4CatImgReplace(2," + catArray[w][0] + ");'";
										}
										catSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
										categoryHTMLTest = baseCatSmImgHTMLStart + catSmImgTagRender + baseCatSmImgHTMLEnd;
									}
									else {
										categoryHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel4CategorySmImg" + catArray[w][0] + "' class='panel_4_category_sm_img' src='" + clientImgBase + catArray[w][4] + "'>" + baseCatSmImgHTMLEnd;
									}
								}
								prodListHTML += "<span class='panel_4_prodlist_catshell panel_4_prodlist_catshell_" + catArray[w][0] + " panel_4_prodlist_catshell_off'>" + categoryHTMLTest + "<\/span>";
								break;
							}
						}
					}
					else {
						for (w=0; w<catArray.length; w++) {
							var categoryHTMLTest = autotextIt(p4TemplateSet.panel4CategoryDiv,"panel4Category");
							var catBadgeTagStart = categoryHTMLTest.indexOf("<!--BADGE");
							if (catBadgeTagStart != -1) {
								var catBadgeTagEnd = categoryHTMLTest.indexOf(">",catBadgeTagStart);
								var catBadgeTagStrip = categoryHTMLTest.substring(catBadgeTagStart,(catBadgeTagEnd+1));
								var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBadgeTagStart);
								var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBadgeTagEnd+1));
								categoryHTMLTest = baseCatBigImgHTMLStart + "<span id='panel4ProdlistCatBadge" + catArray[w][0] + "' class='panel_4_prodlist_cat_badge' style='display:none;'>0<\/span>" + baseCatBigImgHTMLEnd;
							}
							var catNameTagStart = categoryHTMLTest.indexOf("<!--CATNAME");
							if (catNameTagStart != -1) {
								var catNameTagEnd = categoryHTMLTest.indexOf(">",catNameTagStart);
								var catNameTagStrip = categoryHTMLTest.substring(catNameTagStart,(catNameTagEnd+1));
								var baseCatNameHTMLStart = categoryHTMLTest.substr(0,catNameTagStart);
								var baseCatNameHTMLEnd = categoryHTMLTest.substr((catNameTagEnd+1));
								var catNameTagNumTest = catNameTagStrip.indexOf(" PRODNUM");
								if (catNameTagNumTest != -1) {
									var daProdNum = 0;
									for (r=0;r<prodFilterArray.length;r++) {
										if (prodFilterArray[r][8] == catArray[w][0]) {
											daProdNum++;
										}
									}
									var daProdNumWrite = "<span class='da_prod_num'>" + daProdNum + "<\/span>";
								}
								else {
									var daProdNumWrite = "";
								}
								var replaceImgTest = catNameTagStrip.indexOf(" REPLACE");
								if (replaceImgTest != -1) {
									var replaceImgMouseOver = "panel4CatImgReplace(1," + catArray[w][0] + ");";
									var replaceImgMouseOut = "panel4CatImgReplace(2," + catArray[w][0] + ");";
									var replaceImgMouseClass = " img_replace_active";
									var replaceImgCall = "panel4CatImgClick(" + catArray[w][0] + ");";
								}
								else {
									var replaceImgMouseOver = "";
									var replaceImgMouseOut = "";
									var replaceImgMouseClass = "";
									var replaceImgCall = "";
								}
								var catNameTagLinkTest = catNameTagStrip.indexOf(" LINK");
								var catNameTagLink = "";
								var baseCatStyle = "";
								if (catNameTagLinkTest != -1) {
									catNameTagLink += " style='cursor:pointer;' onclick='panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\",1);" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\",1);" + replaceImgCall + "}'";
									if (hoverState==1) {
										catNameTagLink += " onmouseover='panel4CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel4CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel4CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel4CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
									}
									var thisCatIsOn = 1;
									for (q=0; q<prodFilterArray.length; q++) {
										if (prodFilterArray[q][8] == catArray[w][0] && prodFilterArray[q][9] == "0") {
											thisCatIsOn = 0;
											break;
										}
									}
									if (thisCatIsOn == 1) {
										var baseCatStyle = " panel_4_category_name_on";
										catArray[w][6] = 1;
										window["panel1CategoryNameVar" + catArray[w][0]] = 1;
									}
									else {
										var baseCatStyle = " panel_4_category_name_off";
									}
								}
								categoryHTMLTest = baseCatNameHTMLStart + "<div id='panel4CategoryName" + catArray[w][0] + "' class='panel_4_category_name_" + catArray[w][0] + replaceImgMouseClass + " panel_4_category_name " + baseCatStyle + "'" + catNameTagLink + " tabindex='0' title=\"" + catArray[w][1] + "\">" + catArray[w][1] + daProdNumWrite + "<\/div>" + baseCatNameHTMLEnd;
							}
							var catBigImgTagStart = categoryHTMLTest.indexOf("<!--CATBIGIMG");
							if (catBigImgTagStart != -1) {
								var catBigImgTagEnd = categoryHTMLTest.indexOf(">",catBigImgTagStart);
								var catBigImgTagStrip = categoryHTMLTest.substring(catBigImgTagStart,(catBigImgTagEnd+1));
								var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBigImgTagStart);
								var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBigImgTagEnd+1));
								var catBigImgTagRender = "";
								var replaceImgTest = catBigImgTagStrip.indexOf(" REPLACE");
								if (replaceImgTest != -1) {
									catBigImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel4CategoryBigImgDivShell" + catArray[w][0] + "' class='panel_4_category_big_img_div_shell panel_4_category_big_img_div_shell_" + catArray[w][0] + "' onclick='panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\",1);panel4CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\",1);panel4CatImgClick(" + catArray[w][0] + ");}'";
									if (hoverState==1) {
										catBigImgTagRender += " onmouseover='panel4CatMouseOver(" + w + ");panel4CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel4CatMouseOver(" + w + ");panel4CatImgReplace(1," + catArray[w][0] + ");'";
									}
									catBigImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel4CategoryBigImgDivBack" + catArray[w][0] + "' class='panel_4_category_big_img_div_back panel_4_category_big_img_div_back_off panel_4_category_big_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][3] + "\");'><\/div><div id='panel4CategoryBigImgDivOver" + catArray[w][0] + "' class='panel_4_category_big_img_div_over panel_4_category_big_img_div_over_" + catArray[w][0] + "'";
									if (hoverState==1) {
										catBigImgTagRender += " onmouseout='panel4CatMouseOut(" + w + ");panel4CatImgReplace(2," + catArray[w][0] + ");' onblur='panel4CatMouseOut(" + w + ");panel4CatImgReplace(2," + catArray[w][0] + ");'";
									}
									catBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
									categoryHTMLTest = baseCatBigImgHTMLStart + catBigImgTagRender + baseCatBigImgHTMLEnd;
								}
								else {
									categoryHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel4CategoryBigImg" + catArray[w][0] + "' class='panel_4_category_big_img' src='" + clientImgBase + catArray[w][3] + "'>" + baseCatBigImgHTMLEnd;
								}
							}
							var catSmImgTagStart = categoryHTMLTest.indexOf("<!--CATSMIMG");
							if (catSmImgTagStart != -1) {
								var catSmImgTagEnd = categoryHTMLTest.indexOf(">",catSmImgTagStart);
								var catSmImgTagStrip = categoryHTMLTest.substring(catSmImgTagStart,(catSmImgTagEnd+1));
								var baseCatSmImgHTMLStart = categoryHTMLTest.substr(0,catSmImgTagStart);
								var baseCatSmImgHTMLEnd = categoryHTMLTest.substr((catSmImgTagEnd+1));
								var catSmImgTagRender = "";
								var replaceImgTest = catSmImgTagStrip.indexOf(" REPLACE");
								if (replaceImgTest != -1) {
									catSmImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel4CategorySmImgDivShell" + catArray[w][0] + "' class='panel_4_category_sm_img_div_shell panel_4_category_sm_img_div_shell_" + catArray[w][0] + "' onclick='panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\",1);panel4CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\",1);panel4CatImgClick(" + catArray[w][0] + ");}'";
									if (hoverState==1) {
										catSmImgTagRender += " onmouseover='panel4CatMouseOver(" + w + ");panel4CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel4CatMouseOver(" + w + ");panel4CatImgReplace(1," + catArray[w][0] + ");'";
									}
									catSmImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel4CategorySmImgDivBack" + catArray[w][0] + "' class='panel_4_category_sm_img_div_back panel_4_category_sm_img_div_back_off panel_4_category_sm_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][3] + "\");'><\/div><div id='panel4CategorySmImgDivOver" + catArray[w][0] + "' class='panel_4_category_sm_img_div_over panel_4_category_sm_img_div_over_" + catArray[w][0] + "'";
									if (hoverState==1) {
										catSmImgTagRender += " onmouseout='panel4CatMouseOut(" + w + ");panel4CatImgReplace(2," + catArray[w][0] + ");' onblur='panel4CatMouseOut(" + w + ");panel4CatImgReplace(2," + catArray[w][0] + ");'";
									}
									catSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
									categoryHTMLTest = baseCatSmImgHTMLStart + catSmImgTagRender + baseCatSmImgHTMLEnd;
								}
								else {
									categoryHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel4CategorySmImg" + catArray[w][0] + "' class='panel_4_category_sm_img' src='" + clientImgBase + catArray[w][3] + "'>" + baseCatSmImgHTMLEnd;
								}
							}
							prodListHTML += "<span class='panel_4_prodlist_catshell panel_4_prodlist_catshell_" + catArray[w][0] + " panel_4_prodlist_catshell_off'>" + categoryHTMLTest + "<\/span>";
						}
					}
				}
				else if (panel4ProductSort == "FAMLIST") {
					for (f=0; f<famArray.length; f++) {
						var familyHTMLTest = autotextIt(p4TemplateSet.panel4FamilyDiv,"panel4Family");
						var famNameTagStart = familyHTMLTest.indexOf("<!--FAMNAME");
						if (famNameTagStart != -1) {
							var famNameTagEnd = familyHTMLTest.indexOf(">",famNameTagStart);
							var famNameTagStrip = familyHTMLTest.substring(famNameTagStart,(famNameTagEnd+1));
							var baseFamNameHTMLStart = familyHTMLTest.substr(0,famNameTagStart);
							var baseFamNameHTMLEnd = familyHTMLTest.substr((famNameTagEnd+1));
							var famNameTagNumTest = famNameTagStrip.indexOf(" PRODNUM");
							if (famNameTagNumTest != -1) {
								var daFamNum = 0;
								for (c=0; c<catArray.length; c++) {
									if (catArray[c][2] == famArray[f][0]) {
										for (r=0;r<prodFilterArray.length;r++) {
											if (prodFilterArray[r][8] == catArray[c][0]) {
												daFamNum++;
											}
										}
									}
								}
								var daFamNumWrite = "<span class='da_cat_num'>" + daFamNum + "<\/span>";
							}
							else {
								var daFamNumWrite = "";
							}
							var replaceImgTest = famNameTagStrip.indexOf(" REPLACE");
							if (famNameTagStrip != -1) {
								var replaceImgMouseOver = "panel4FamImgReplace(1," + famArray[f][0] + ");";
								var replaceImgMouseOut = "panel4FamImgReplace(2," + famArray[f][0] + ");";
								var replaceImgMouseClass = " img_replace_active";
								var replaceImgCall = "panel4FamImgClick(" + famArray[f][0] + ");";
							}
							else {
								var replaceImgMouseOver = "";
								var replaceImgMouseOut = "";
								var replaceImgMouseClass = "";
								var replaceImgCall = "";
							}
							var famNameTagLinkTest = famNameTagStrip.indexOf(" LINK");
							var famNameTagLink = "";
							var baseFamStyle = "";
							if (famNameTagLinkTest != -1) {
								famNameTagLink += " style='cursor:pointer;' onclick='panel4FamCatProdOpen(" + f + ");" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4FamCatProdOpen(" + f + ");" + replaceImgCall + "}'";
								if (hoverState==1) {
									famNameTagLink += " onmouseover='panel4FamMouseOver(" + f + ");" + replaceImgMouseOver + "' onfocus='panel4FamMouseOver(" + f + ");" + replaceImgMouseOver + "' onmouseout='panel4FamMouseOut(" + f + ");" + replaceImgMouseOut + "' onblur='panel4FamMouseOut(" + f + ");" + replaceImgMouseOut + "'";
								}
							}
							familyHTMLTest = baseFamNameHTMLStart + "<div id='panel4FamilyName" + famArray[f][0] + "' class='panel_4_family_name_" + famArray[f][0] + replaceImgMouseClass + " panel_4_family_name panel_4_family_name_off'" + famNameTagLink + " tabindex='0' title=\"" + famArray[f][1] + "\">" + famArray[f][1] + daFamNumWrite + "<\/div>" + baseFamNameHTMLEnd;
						}
						var famBigImgTagStart = familyHTMLTest.indexOf("<!--FAMBIGIMG");
						if (famBigImgTagStart != -1) {
							var famBigImgTagEnd = familyHTMLTest.indexOf(">",famBigImgTagStart);
							var famBigImgTagStrip = familyHTMLTest.substring(famBigImgTagStart,(famBigImgTagEnd+1));
							var baseFamBigImgHTMLStart = familyHTMLTest.substr(0,famBigImgTagStart);
							var baseFamBigImgHTMLEnd = familyHTMLTest.substr((famBigImgTagEnd+1));
							var famBigImgTagRender = "";
							var replaceImgTest = famBigImgTagStrip.indexOf(" REPLACE");
							if (replaceImgTest != -1) {
								famBigImgTagRender += "<div title=\"" + famArray[f][1] + "\" id='panel4FamilyBigImgDivShell" + famArray[f][0] + "' class='panel_4_family_big_img_div_shell panel_4_family_big_img_div_shell_" + famArray[f][0] + "' onclick='panel4FamCatProdOpen(" + f + ");panel4FamImgClick(" + famArray[f][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4FamCatProdOpen(" + f + ");panel4FamImgClick(" + famArray[f][0] + ");}'";
								if (hoverState==1) {
									famBigImgTagRender += " onmouseover='panel4FamMouseOver(" + f + ");panel4FamImgReplace(1," + famArray[f][0] + ");' onfocus='panel4FamMouseOver(" + f + ");panel4FamImgReplace(1," + famArray[f][0] + ");'";
								}
								famBigImgTagRender += " tabindex='0' title=\"" + famArray[f][1] + "\"><div id='panel4FamilyBigImgDivBack" + famArray[f][0] + "' class='panel_4_family_big_img_div_back panel_4_family_big_img_div_back_off panel_4_family_big_img_div_back_" + famArray[f][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + famArray[f][2] + "\");'><\/div><div id='panel4FamilyBigImgDivOver" + famArray[f][0] + "' class='panel_4_family_big_img_div_over panel_4_family_big_img_div_over_" + famArray[f][0] + "'";
								if (hoverState==1) {
									famBigImgTagRender += " onmouseout='panel4FamMouseOut(" + f + ");panel4FamImgReplace(2," + famArray[f][0] + ");' onblur='panel4FamMouseOut(" + f + ");panel4FamImgReplace(2," + famArray[f][0] + ");'";
								}
								famBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
								familyHTMLTest = baseFamBigImgHTMLStart + famBigImgTagRender + baseFamBigImgHTMLEnd;
							}
							else {
								familyHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + famArray[f][1] + "\" alt=\"" + famArray[f][1] + "\" id='panel4FamilyBigImg" + famArray[f][0] + "' class='panel_4_family_big_img' src='" + clientImgBase + famArray[f][2] + "'>" + baseFamBigImgHTMLEnd;
							}
						}
						var famSmImgTagStart = familyHTMLTest.indexOf("<!--FAMSMIMG");
						if (famSmImgTagStart != -1) {
							var famSmImgTagEnd = familyHTMLTest.indexOf(">",famSmImgTagStart);
							var famSmImgTagStrip = familyHTMLTest.substring(famSmImgTagStart,(famSmImgTagEnd+1));
							var baseFamSmImgHTMLStart = familyHTMLTest.substr(0,famSmImgTagStart);
							var baseFamSmImgHTMLEnd = familyHTMLTest.substr((famSmImgTagEnd+1));
							var famSmImgTagRender = "";
							var replaceImgTest = famSmImgTagStrip.indexOf(" REPLACE");
							if (replaceImgTest != -1) {
								famSmImgTagRender += "<div title=\"" + famArray[f][1] + "\" id='panel4FamilySmImgDivShell" + famArray[f][0] + "' class='panel_4_family_sm_img_div_shell panel_4_family_sm_img_div_shell_" + famArray[f][0] + "' onclick='panel4FamCatProdOpen(" + f + ");panel4FamImgClick(" + famArray[f][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4FamCatProdOpen(" + f + ");panel4FamImgClick(" + famArray[f][0] + ");}'";
								if (hoverState==1) {
									famSmImgTagRender += " onmouseover='panel4FamMouseOver(" + f + ");panel4FamImgReplace(1," + famArray[f][0] + ");' onfocus='panel4FamMouseOver(" + f + ");panel4FamImgReplace(1," + famArray[f][0] + ");'";
								}
								famSmImgTagRender += " tabindex='0' title=\"" + famArray[f][1] + "\"><div id='panel4FamilySmImgDivBack" + famArray[f][0] + "' class='panel_4_family_sm_img_div_back panel_4_family_sm_img_div_back_off panel_4_family_sm_img_div_back_" + famArray[f][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + famArray[f][3] + "\");'><\/div><div id='panel4FamilySmImgDivOver" + famArray[f][0] + "' class='panel_4_family_sm_img_div_over panel_4_family_sm_img_div_over_" + famArray[f][0] + "'";
								if (hoverState==1) {
									famSmImgTagRender += " onmouseout='panel4FamMouseOut(" + f + ");panel4FamImgReplace(2," + famArray[f][0] + ");' onblur='panel4FamMouseOut(" + f + ");panel4FamImgReplace(2," + famArray[f][0] + ");'";
								}
								famSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
								familyHTMLTest = baseFamSmImgHTMLStart + famSmImgTagRender + baseFamSmImgHTMLEnd;
							}
							else {
								familyHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + famArray[f][1] + "\" alt=\"" + famArray[f][1] + "\" id='panel4FamilySmImg" + famArray[f][0] + "' class='panel_4_family_sm_img' src='" + clientImgBase + famArray[f][3] + "'>" + baseFamSmImgHTMLEnd;
							}
						}
						var categoryHTMLTest = "";
						var categoryHTMLLeaf = "";
						for (w=0; w<catArray.length; w++) {
							if (catArray[w][2] == famArray[f][0]) {
								categoryHTMLTest = autotextIt(p4TemplateSet.panel4CategoryDiv,"panel4Category");
								var catBadgeTagStart = categoryHTMLTest.indexOf("<!--BADGE");
								if (catBadgeTagStart != -1) {
									var catBadgeTagEnd = categoryHTMLTest.indexOf(">",catBadgeTagStart);
									var catBadgeTagStrip = categoryHTMLTest.substring(catBadgeTagStart,(catBadgeTagEnd+1));
									var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBadgeTagStart);
									var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBadgeTagEnd+1));
									categoryHTMLTest = baseCatBigImgHTMLStart + "<span id='panel4ProdlistCatBadge" + catArray[w][0] + "' class='panel_4_prodlist_cat_badge' style='display:none;'>0<\/span>" + baseCatBigImgHTMLEnd;
								}
								var catNameTagStart = categoryHTMLTest.indexOf("<!--CATNAME");
								if (catNameTagStart != -1) {
									var catNameTagEnd = categoryHTMLTest.indexOf(">",catNameTagStart);
									var catNameTagStrip = categoryHTMLTest.substring(catNameTagStart,(catNameTagEnd+1));
									var baseCatNameHTMLStart = categoryHTMLTest.substr(0,catNameTagStart);
									var baseCatNameHTMLEnd = categoryHTMLTest.substr((catNameTagEnd+1));
									var catNameTagNumTest = catNameTagStrip.indexOf(" PRODNUM");
									if (catNameTagNumTest != -1) {
										var daProdNum = 0;
										for (r=0;r<prodFilterArray.length;r++) {
											if (prodFilterArray[r][8] == catArray[w][0]) {
												daProdNum++;
											}
										}
										var daProdNumWrite = "<span class='da_prod_num'>" + daProdNum + "<\/span>";
									}
									else {
										var daProdNumWrite = "";
									}
									var replaceImgTest = catNameTagStrip.indexOf(" REPLACE");
									if (replaceImgTest != -1) {
										var replaceImgMouseOver = "panel4CatImgReplace(1," + catArray[w][0] + ");";
										var replaceImgMouseOut = "panel4CatImgReplace(2," + catArray[w][0] + ");";
										var replaceImgMouseClass = " img_replace_active";
										var replaceImgCall = "panel4CatImgClick(" + catArray[w][0] + ");";
									}
									else {
										var replaceImgMouseOver = "";
										var replaceImgMouseOut = "";
										var replaceImgMouseClass = "";
										var replaceImgCall = "";
									}
									var catNameTagLinkTest = catNameTagStrip.indexOf(" LINK");
									var catNameTagLink = "";
									var baseCatStyle = "";
									if (catNameTagLinkTest != -1) {
										catNameTagLink += " style='cursor:pointer;' onclick='panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\",1);" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\",1);" + replaceImgCall + "}'";
										if (hoverState==1) {
											catNameTagLink += " onmouseover='panel4CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel4CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel4CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel4CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
										}
										var thisCatIsOn = 1;
										for (q=0; q<prodFilterArray.length; q++) {
											if (prodFilterArray[q][8] == catArray[w][0] && prodFilterArray[q][9] == "0") {
												thisCatIsOn = 0;
												break;
											}
										}
										if (thisCatIsOn == 1) {
											var baseCatStyle = " panel_4_category_name_on";
											catArray[w][6] = 1;
											window["panel1CategoryNameVar" + catArray[w][0]] = 1;
										}
										else {
											var baseCatStyle = " panel_4_category_name_off";
										}
									}
									categoryHTMLTest = baseCatNameHTMLStart + "<div id='panel4CategoryName" + catArray[w][0] + "' class='panel_4_category_name_" + catArray[w][0] + replaceImgMouseClass + " panel_4_category_name " + baseCatStyle + "'" + catNameTagLink + " tabindex='0' title=\"" + catArray[w][1] + "\">" + catArray[w][1] + daProdNumWrite + "<\/div>" + baseCatNameHTMLEnd;
								}
								var catBigImgTagStart = categoryHTMLTest.indexOf("<!--CATBIGIMG");
								if (catBigImgTagStart != -1) {
									var catBigImgTagEnd = categoryHTMLTest.indexOf(">",catBigImgTagStart);
									var catBigImgTagStrip = categoryHTMLTest.substring(catBigImgTagStart,(catBigImgTagEnd+1));
									var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBigImgTagStart);
									var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBigImgTagEnd+1));
									var catBigImgTagRender = "";
									var replaceImgTest = catBigImgTagStrip.indexOf(" REPLACE");
									if (replaceImgTest != -1) {
										catBigImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel4CategoryBigImgDivShell" + catArray[w][0] + "' class='panel_4_category_big_img_div_shell panel_4_category_big_img_div_shell_" + catArray[w][0] + "' onclick='panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\",1);panel4CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\",1);panel4CatImgClick(" + catArray[w][0] + ");}'";
										if (hoverState==1) {
											catBigImgTagRender += " onmouseover='panel4CatMouseOver(" + w + ");panel4CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel4CatMouseOver(" + w + ");panel4CatImgReplace(1," + catArray[w][0] + ");'";
										}
										catBigImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel4CategoryBigImgDivBack" + catArray[w][0] + "' class='panel_4_category_big_img_div_back panel_4_category_big_img_div_back_off panel_4_category_big_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][3] + "\");'><\/div><div id='panel4CategoryBigImgDivOver" + catArray[w][0] + "' class='panel_4_category_big_img_div_over panel_4_category_big_img_div_over_" + catArray[w][0] + "'";
										if (hoverState==1) {
											catBigImgTagRender += " onmouseout='panel4CatMouseOut(" + w + ");panel4CatImgReplace(2," + catArray[w][0] + ");' onblur='panel4CatMouseOut(" + w + ");panel4CatImgReplace(2," + catArray[w][0] + ");'";
										}
										catBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
										categoryHTMLTest = baseCatBigImgHTMLStart + catBigImgTagRender + baseCatBigImgHTMLEnd;
									}
									else {
										categoryHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel4CategoryBigImg" + catArray[w][0] + "' class='panel_4_category_big_img' src='" + clientImgBase + catArray[w][3] + "'>" + baseCatBigImgHTMLEnd;
									}
								}
								var catSmImgTagStart = categoryHTMLTest.indexOf("<!--CATSMIMG");
								if (catSmImgTagStart != -1) {
									var catSmImgTagEnd = categoryHTMLTest.indexOf(">",catSmImgTagStart);
									var catSmImgTagStrip = categoryHTMLTest.substring(catSmImgTagStart,(catSmImgTagEnd+1));
									var baseCatSmImgHTMLStart = categoryHTMLTest.substr(0,catSmImgTagStart);
									var baseCatSmImgHTMLEnd = categoryHTMLTest.substr((catSmImgTagEnd+1));
									var catSmImgTagRender = "";
									var replaceImgTest = catSmImgTagStrip.indexOf(" REPLACE");
									if (replaceImgTest != -1) {
										catSmImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel4CategorySmImgDivShell" + catArray[w][0] + "' class='panel_4_category_sm_img_div_shell panel_4_category_sm_img_div_shell_" + catArray[w][0] + "' onclick='panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\",1);panel4CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4SelectCat(" + w + ", \"panel4CategoryName" + catArray[w][0] + "\", \"panel_4_category_name\",1);panel4CatImgClick(" + catArray[w][0] + ");}'";
										if (hoverState==1) {
											catSmImgTagRender += " onmouseover='panel4CatMouseOver(" + w + ");panel4CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel4CatMouseOver(" + w + ");panel4CatImgReplace(1," + catArray[w][0] + ");'";
										}
										catSmImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel4CategorySmImgDivBack" + catArray[w][0] + "' class='panel_4_category_sm_img_div_back panel_4_category_sm_img_div_back_off panel_4_category_sm_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][4] + "\");'><\/div><div id='panel4CategorySmImgDivOver" + catArray[w][0] + "' class='panel_4_category_sm_img_div_over panel_4_category_sm_img_div_over_" + catArray[w][0] + "'";
										if (hoverState==1) {
											catSmImgTagRender += " onmouseout='panel4CatMouseOut(" + w + ");panel4CatImgReplace(2," + catArray[w][0] + ");' onblur='panel4CatMouseOut(" + w + ");panel4CatImgReplace(2," + catArray[w][0] + ");'";
										}
										catSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
										categoryHTMLTest = baseCatSmImgHTMLStart + catSmImgTagRender + baseCatSmImgHTMLEnd;
									}
									else {
										categoryHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel4CategorySmImg" + catArray[w][0] + "' class='panel_4_category_sm_img' src='" + clientImgBase + catArray[w][4] + "'>" + baseCatSmImgHTMLEnd;
									}
								}
								categoryHTMLLeaf += categoryHTMLTest;
							}
						}
						prodListHTML += familyHTMLTest + "<span class='panel_4_prodlist_famshell panel_4_prodlist_famshell_" + famArray[f][0] + " panel_4_prodlist_famshell_off'><div class='panel_4_family_category_shell panel_4_family_category_shell_" + famArray[f][0] + "' style='display:none;'>" + categoryHTMLLeaf + "<\/div><\/span>";
					}
				}
				else if (panel4ProductSort == "FAMPROD") {
					for (f=0; f<famArray.length; f++) {
						var familyHTMLTest = autotextIt(p4TemplateSet.panel4FamilyDiv,"panel4Family");
						var famNameTagStart = familyHTMLTest.indexOf("<!--FAMNAME");
						if (famNameTagStart != -1) {
							var famNameTagEnd = familyHTMLTest.indexOf(">",famNameTagStart);
							var famNameTagStrip = familyHTMLTest.substring(famNameTagStart,(famNameTagEnd+1));
							var baseFamNameHTMLStart = familyHTMLTest.substr(0,famNameTagStart);
							var baseFamNameHTMLEnd = familyHTMLTest.substr((famNameTagEnd+1));
							var famNameTagNumTest = famNameTagStrip.indexOf(" PRODNUM");
							if (famNameTagNumTest != -1) {
								var daFamNum = 0;
								for (c=0; c<catArray.length; c++) {
									if (catArray[c][2] == famArray[f][0]) {
										for (r=0;r<prodFilterArray.length;r++) {
											if (prodFilterArray[r][8] == catArray[c][0]) {
												daFamNum++;
											}
										}
									}
								}
								var daFamNumWrite = "<span class='da_cat_num'>" + daFamNum + "<\/span>";
							}
							else {
								var daFamNumWrite = "";
							}
							var replaceImgTest = famNameTagStrip.indexOf(" REPLACE");
							if (famNameTagStrip != -1) {
								var replaceImgMouseOver = "panel4FamImgReplace(1," + famArray[f][0] + ");";
								var replaceImgMouseOut = "panel4FamImgReplace(2," + famArray[f][0] + ");";
								var replaceImgMouseClass = " img_replace_active";
								var replaceImgCall = "panel4FamImgClick(" + famArray[f][0] + ");";
							}
							else {
								var replaceImgMouseOver = "";
								var replaceImgMouseOut = "";
								var replaceImgMouseClass = "";
								var replaceImgCall = "";
							}
							var famNameTagLinkTest = famNameTagStrip.indexOf(" LINK");
							var famNameTagLink = "";
							var baseFamStyle = "";
							if (famNameTagLinkTest != -1) {
								famNameTagLink += " style='cursor:pointer;' onclick='panel4SelectFam(" + f + ", \"panel4FamilyName" + famArray[f][0] + "\", \"panel_4_family_name\",1);" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4SelectFam(" + f + ", \"panel4FamilyName" + famArray[f][0] + "\", \"panel_4_family_name\",1);" + replaceImgCall + "}'";
								if (hoverState==1) {
									famNameTagLink += " onmouseover='panel4FamMouseOver(" + f + ");" + replaceImgMouseOver + "' onfocus='panel4FamMouseOver(" + f + ");" + replaceImgMouseOver + "' onmouseout='panel4FamMouseOut(" + f + ");" + replaceImgMouseOut + "' onblur='panel4FamMouseOut(" + f + ");" + replaceImgMouseOut + "'";
								}
							}
							familyHTMLTest = baseFamNameHTMLStart + "<div id='panel4FamilyName" + famArray[f][0] + "' class='panel_4_family_name_" + famArray[f][0] + replaceImgMouseClass + " panel_4_family_name panel_4_family_name_off'" + famNameTagLink + " tabindex='0' title=\"" + famArray[f][1] + "\">" + famArray[f][1] + daFamNumWrite + "<\/div>" + baseFamNameHTMLEnd;
						}
						var famBigImgTagStart = familyHTMLTest.indexOf("<!--FAMBIGIMG");
						if (famBigImgTagStart != -1) {
							var famBigImgTagEnd = familyHTMLTest.indexOf(">",famBigImgTagStart);
							var famBigImgTagStrip = familyHTMLTest.substring(famBigImgTagStart,(famBigImgTagEnd+1));
							var baseFamBigImgHTMLStart = familyHTMLTest.substr(0,famBigImgTagStart);
							var baseFamBigImgHTMLEnd = familyHTMLTest.substr((famBigImgTagEnd+1));
							var famBigImgTagRender = "";
							var replaceImgTest = famBigImgTagStrip.indexOf(" REPLACE");
							if (replaceImgTest != -1) {
								famBigImgTagRender += "<div title=\"" + famArray[f][1] + "\" id='panel4FamilyBigImgDivShell" + famArray[f][0] + "' class='panel_4_family_big_img_div_shell panel_4_family_big_img_div_shell_" + famArray[f][0] + "' onclick='panel4SelectFam(" + f + ", \"panel4FamilyName" + famArray[f][0] + "\", \"panel_4_family_name\",1);panel4FamImgClick(" + famArray[f][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4SelectFam(" + f + ", \"panel4FamilyName" + famArray[f][0] + "\", \"panel_4_family_name\",1);panel4FamImgClick(" + famArray[f][0] + ");}'";
								if (hoverState==1) {
									famBigImgTagRender += " onmouseover='panel4FamMouseOver(" + f + ");panel4FamImgReplace(1," + famArray[f][0] + ");' onfocus='panel4FamMouseOver(" + f + ");panel4FamImgReplace(1," + famArray[f][0] + ");'";
								}
								famBigImgTagRender += " tabindex='0' title=\"" + famArray[f][1] + "\"><div id='panel4FamilyBigImgDivBack" + famArray[f][0] + "' class='panel_4_family_big_img_div_back panel_4_family_big_img_div_back_off panel_4_family_big_img_div_back_" + famArray[f][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + famArray[f][2] + "\");'><\/div><div id='panel4FamilyBigImgDivOver" + famArray[f][0] + "' class='panel_4_family_big_img_div_over panel_4_family_big_img_div_over_" + famArray[f][0] + "'";
								if (hoverState==1) {
									famBigImgTagRender += " onmouseout='panel4FamMouseOut(" + f + ");panel4FamImgReplace(2," + famArray[f][0] + ");' onblur='panel4FamMouseOut(" + f + ");panel4FamImgReplace(2," + famArray[f][0] + ");'";
								}
								famBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
								familyHTMLTest = baseFamBigImgHTMLStart + famBigImgTagRender + baseFamBigImgHTMLEnd;
							}
							else {
								familyHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + famArray[f][1] + "\" alt=\"" + famArray[f][1] + "\" id='panel4FamilyBigImg" + famArray[f][0] + "' class='panel_4_family_big_img' src='" + clientImgBase + famArray[f][2] + "'>" + baseFamBigImgHTMLEnd;
							}
						}
						var famSmImgTagStart = familyHTMLTest.indexOf("<!--FAMSMIMG");
						if (famSmImgTagStart != -1) {
							var famSmImgTagEnd = familyHTMLTest.indexOf(">",famSmImgTagStart);
							var famSmImgTagStrip = familyHTMLTest.substring(famSmImgTagStart,(famSmImgTagEnd+1));
							var baseFamSmImgHTMLStart = familyHTMLTest.substr(0,famSmImgTagStart);
							var baseFamSmImgHTMLEnd = familyHTMLTest.substr((famSmImgTagEnd+1));
							var famSmImgTagRender = "";
							var replaceImgTest = famSmImgTagStrip.indexOf(" REPLACE");
							if (replaceImgTest != -1) {
								famSmImgTagRender += "<div title=\"" + famArray[f][1] + "\" id='panel4FamilySmImgDivShell" + famArray[f][0] + "' class='panel_4_family_sm_img_div_shell panel_4_family_sm_img_div_shell_" + famArray[f][0] + "' onclick='panel4SelectFam(" + f + ", \"panel4FamilyName" + famArray[f][0] + "\", \"panel_4_family_name\",1);panel4FamImgClick(" + famArray[f][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4SelectFam(" + f + ", \"panel4FamilyName" + famArray[f][0] + "\", \"panel_4_family_name\",1);panel4FamImgClick(" + famArray[f][0] + ");}'";
								if (hoverState==1) {
									famSmImgTagRender += " onmouseover='panel4FamMouseOver(" + f + ");panel4FamImgReplace(1," + famArray[f][0] + ");' onfocus='panel4FamMouseOver(" + f + ");panel4FamImgReplace(1," + famArray[f][0] + ");'";
								}
								famSmImgTagRender += " tabindex='0' title=\"" + famArray[f][1] + "\"><div id='panel4FamilySmImgDivBack" + famArray[f][0] + "' class='panel_4_family_sm_img_div_back panel_4_family_sm_img_div_back_off panel_4_family_sm_img_div_back_" + famArray[f][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + famArray[f][3] + "\");'><\/div><div id='panel4FamilySmImgDivOver" + famArray[f][0] + "' class='panel_4_family_sm_img_div_over panel_4_family_sm_img_div_over_" + famArray[f][0] + "'";
								if (hoverState==1) {
									famSmImgTagRender += " onmouseout='panel4FamMouseOut(" + f + ");panel4FamImgReplace(2," + famArray[f][0] + ");' onblur='panel4FamMouseOut(" + f + ");panel4FamImgReplace(2," + famArray[f][0] + ");'";
								}
								famSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
								familyHTMLTest = baseFamSmImgHTMLStart + famSmImgTagRender + baseFamSmImgHTMLEnd;
							}
							else {
								familyHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + famArray[f][1] + "\" alt=\"" + famArray[f][1] + "\" id='panel4FamilySmImg" + famArray[f][0] + "' class='panel_4_family_sm_img' src='" + clientImgBase + famArray[f][3] + "'>" + baseFamSmImgHTMLEnd;
							}
						}
						prodListHTML += "<span class='panel_4_prodlist_famshell panel_4_prodlist_famshell_" + famArray[f][0] + " panel_4_prodlist_famshell_off'>" + familyHTMLTest + "<\/span>";
					}
				}
				else if (panel4ProductSort == "FAMCATPROD") {
					for (f=0; f<famArray.length; f++) {
						var familyHTMLTest = autotextIt(p4TemplateSet.panel4FamilyDiv,"panel4Family");
						var famNameTagStart = familyHTMLTest.indexOf("<!--FAMNAME");
						if (famNameTagStart != -1) {
							var famNameTagEnd = familyHTMLTest.indexOf(">",famNameTagStart);
							var famNameTagStrip = familyHTMLTest.substring(famNameTagStart,(famNameTagEnd+1));
							var baseFamNameHTMLStart = familyHTMLTest.substr(0,famNameTagStart);
							var baseFamNameHTMLEnd = familyHTMLTest.substr((famNameTagEnd+1));
							var famNameTagNumTest = famNameTagStrip.indexOf(" PRODNUM");
							if (famNameTagNumTest != -1) {
								var daFamNum = 0;
								for (c=0; c<catArray.length; c++) {
									if (catArray[c][2] == famArray[f][0]) {
										for (r=0;r<prodFilterArray.length;r++) {
											if (prodFilterArray[r][8] == catArray[c][0]) {
												daFamNum++;
											}
										}
									}
								}
								var daFamNumWrite = "<span class='da_cat_num'>" + daFamNum + "<\/span>";
							}
							else {
								var daFamNumWrite = "";
							}
							var replaceImgTest = famNameTagStrip.indexOf(" REPLACE");
							if (famNameTagStrip != -1) {
								var replaceImgMouseOver = "panel4FamImgReplace(1," + famArray[f][0] + ");";
								var replaceImgMouseOut = "panel4FamImgReplace(2," + famArray[f][0] + ");";
								var replaceImgMouseClass = " img_replace_active";
								var replaceImgCall = "panel4FamImgClick(" + famArray[f][0] + ");";
							}
							else {
								var replaceImgMouseOver = "";
								var replaceImgMouseOut = "";
								var replaceImgMouseClass = "";
								var replaceImgCall = "";
							}
							var famNameTagLinkTest = famNameTagStrip.indexOf(" LINK");
							var famNameTagLink = "";
							var baseFamStyle = "";
							if (famNameTagLinkTest != -1) {
								famNameTagLink += " style='cursor:pointer;' onclick='panel4FamCatProdOpen(" + f + ");" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4FamCatProdOpen(" + f + ");" + replaceImgCall + "}'";
								if (hoverState==1) {
									famNameTagLink += " onmouseover='panel4FamMouseOver(" + f + ");" + replaceImgMouseOver + "' onfocus='panel4FamMouseOver(" + f + ");" + replaceImgMouseOver + "' onmouseout='panel4FamMouseOut(" + f + ");" + replaceImgMouseOut + "' onblur='panel4FamMouseOut(" + f + ");" + replaceImgMouseOut + "'";
								}
							}
							familyHTMLTest = baseFamNameHTMLStart + "<div id='panel4FamilyName" + famArray[f][0] + "' class='panel_4_family_name_" + famArray[f][0] + replaceImgMouseClass + " panel_4_family_name panel_4_family_name_off'" + famNameTagLink + " tabindex='0' title=\"" + famArray[f][1] + "\">" + famArray[f][1] + daFamNumWrite + "<\/div>" + baseFamNameHTMLEnd;
						}
						var famBigImgTagStart = familyHTMLTest.indexOf("<!--FAMBIGIMG");
						if (famBigImgTagStart != -1) {
							var famBigImgTagEnd = familyHTMLTest.indexOf(">",famBigImgTagStart);
							var famBigImgTagStrip = familyHTMLTest.substring(famBigImgTagStart,(famBigImgTagEnd+1));
							var baseFamBigImgHTMLStart = familyHTMLTest.substr(0,famBigImgTagStart);
							var baseFamBigImgHTMLEnd = familyHTMLTest.substr((famBigImgTagEnd+1));
							var famBigImgTagRender = "";
							var replaceImgTest = famBigImgTagStrip.indexOf(" REPLACE");
							if (replaceImgTest != -1) {
								famBigImgTagRender += "<div title=\"" + famArray[f][1] + "\" id='panel4FamilyBigImgDivShell" + famArray[f][0] + "' class='panel_4_family_big_img_div_shell panel_4_family_big_img_div_shell_" + famArray[f][0] + "' onclick='panel4FamCatProdOpen(" + f + ");panel4FamImgClick(" + famArray[f][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4FamCatProdOpen(" + f + ");panel4FamImgClick(" + famArray[f][0] + ");}'";
								if (hoverState==1) {
									famBigImgTagRender += " onmouseover='panel4FamMouseOver(" + f + ");panel4FamImgReplace(1," + famArray[f][0] + ");' onfocus='panel4FamMouseOver(" + f + ");panel4FamImgReplace(1," + famArray[f][0] + ");'";
								}
								famBigImgTagRender += " tabindex='0' title=\"" + famArray[f][1] + "\"><div id='panel4FamilyBigImgDivBack" + famArray[f][0] + "' class='panel_4_family_big_img_div_back panel_4_family_big_img_div_back_off panel_4_family_big_img_div_back_" + famArray[f][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + famArray[f][2] + "\");'><\/div><div id='panel4FamilyBigImgDivOver" + famArray[f][0] + "' class='panel_4_family_big_img_div_over panel_4_family_big_img_div_over_" + famArray[f][0] + "'";
								if (hoverState==1) {
									famBigImgTagRender += " onmouseout='panel4FamMouseOut(" + f + ");panel4FamImgReplace(2," + famArray[f][0] + ");' onblur='panel4FamMouseOut(" + f + ");panel4FamImgReplace(2," + famArray[f][0] + ");'";
								}
								famBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
								familyHTMLTest = baseFamBigImgHTMLStart + famBigImgTagRender + baseFamBigImgHTMLEnd;
							}
							else {
								familyHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + famArray[f][1] + "\" alt=\"" + famArray[f][1] + "\" id='panel4FamilyBigImg" + famArray[f][0] + "' class='panel_4_family_big_img' src='" + clientImgBase + famArray[f][2] + "'>" + baseFamBigImgHTMLEnd;
							}
						}
						var famSmImgTagStart = familyHTMLTest.indexOf("<!--FAMSMIMG");
						if (famSmImgTagStart != -1) {
							var famSmImgTagEnd = familyHTMLTest.indexOf(">",famSmImgTagStart);
							var famSmImgTagStrip = familyHTMLTest.substring(famSmImgTagStart,(famSmImgTagEnd+1));
							var baseFamSmImgHTMLStart = familyHTMLTest.substr(0,famSmImgTagStart);
							var baseFamSmImgHTMLEnd = familyHTMLTest.substr((famSmImgTagEnd+1));
							var famSmImgTagRender = "";
							var replaceImgTest = famSmImgTagStrip.indexOf(" REPLACE");
							if (replaceImgTest != -1) {
								famSmImgTagRender += "<div title=\"" + famArray[f][1] + "\" id='panel4FamilySmImgDivShell" + famArray[f][0] + "' class='panel_4_family_sm_img_div_shell panel_4_family_sm_img_div_shell_" + famArray[f][0] + "' onclick='panel4FamCatProdOpen(" + f + ");panel4FamImgClick(" + famArray[f][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4FamCatProdOpen(" + f + ");panel4FamImgClick(" + famArray[f][0] + ");}'";
								if (hoverState==1) {
									famSmImgTagRender += " onmouseover='panel4FamMouseOver(" + f + ");panel4FamImgReplace(1," + famArray[f][0] + ");' onfocus='panel4FamMouseOver(" + f + ");panel4FamImgReplace(1," + famArray[f][0] + ");'";
								}
								famSmImgTagRender += " tabindex='0' title=\"" + famArray[f][1] + "\"><div id='panel4FamilySmImgDivBack" + famArray[f][0] + "' class='panel_4_family_sm_img_div_back panel_4_family_sm_img_div_back_off panel_4_family_sm_img_div_back_" + famArray[f][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + famArray[f][3] + "\");'><\/div><div id='panel4FamilySmImgDivOver" + famArray[f][0] + "' class='panel_4_family_sm_img_div_over panel_4_family_sm_img_div_over_" + famArray[f][0] + "'";
								if (hoverState==1) {
									famSmImgTagRender += " onmouseout='panel4FamMouseOut(" + f + ");panel4FamImgReplace(2," + famArray[f][0] + ");' onblur='panel4FamMouseOut(" + f + ");panel4FamImgReplace(2," + famArray[f][0] + ");'";
								}
								famSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
								familyHTMLTest = baseFamSmImgHTMLStart + famSmImgTagRender + baseFamSmImgHTMLEnd;
							}
							else {
								familyHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + famArray[f][1] + "\" alt=\"" + famArray[f][1] + "\" id='panel4FamilySmImg" + famArray[f][0] + "' class='panel_4_family_sm_img' src='" + clientImgBase + famArray[f][3] + "'>" + baseFamSmImgHTMLEnd;
							}
						}
						var categoryHTMLTest = "";
						var categoryHTMLLeaf = "";
						for (w=0; w<catArray.length; w++) {
							if (catArray[w][2] == famArray[f][0]) {
								categoryHTMLTest = autotextIt(p4TemplateSet.panel4CategoryDiv,"panel4Category");
								var catBadgeTagStart = categoryHTMLTest.indexOf("<!--BADGE");
								if (catBadgeTagStart != -1) {
									var catBadgeTagEnd = categoryHTMLTest.indexOf(">",catBadgeTagStart);
									var catBadgeTagStrip = categoryHTMLTest.substring(catBadgeTagStart,(catBadgeTagEnd+1));
									var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBadgeTagStart);
									var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBadgeTagEnd+1));
									categoryHTMLTest = baseCatBigImgHTMLStart + "<span id='panel4ProdlistCatBadge" + catArray[w][0] + "' class='panel_4_prodlist_cat_badge' style='display:none;'>0<\/span>" + baseCatBigImgHTMLEnd;
								}
								var catNameTagStart = categoryHTMLTest.indexOf("<!--CATNAME");
								if (catNameTagStart != -1) {
									var catNameTagEnd = categoryHTMLTest.indexOf(">",catNameTagStart);
									var catNameTagStrip = categoryHTMLTest.substring(catNameTagStart,(catNameTagEnd+1));
									var baseCatNameHTMLStart = categoryHTMLTest.substr(0,catNameTagStart);
									var baseCatNameHTMLEnd = categoryHTMLTest.substr((catNameTagEnd+1));
									var catNameTagNumTest = catNameTagStrip.indexOf(" PRODNUM");
									if (catNameTagNumTest != -1) {
										var daProdNum = 0;
										for (r=0;r<prodFilterArray.length;r++) {
											if (prodFilterArray[r][8] == catArray[w][0]) {
												daProdNum++;
											}
										}
										var daProdNumWrite = "<span class='da_prod_num'>" + daProdNum + "<\/span>";
									}
									else {
										var daProdNumWrite = "";
									}
									var replaceImgTest = catNameTagStrip.indexOf(" REPLACE");
									if (replaceImgTest != -1) {
										var replaceImgMouseOver = "panel4CatImgReplace(1," + catArray[w][0] + ");";
										var replaceImgMouseOut = "panel4CatImgReplace(2," + catArray[w][0] + ");";
										var replaceImgMouseClass = " img_replace_active";
										var replaceImgCall = "panel4CatImgClick(" + catArray[w][0] + ");";
									}
									else {
										var replaceImgMouseOver = "";
										var replaceImgMouseOut = "";
										var replaceImgMouseClass = "";
										var replaceImgCall = "";
									}
									var catNameTagLinkTest = catNameTagStrip.indexOf(" LINK");
									var catNameTagLink = "";
									var baseCatStyle = "";
									if (catNameTagLinkTest != -1) {
										catNameTagLink += " style='cursor:pointer;' onclick='panel4CatProdOpen(" + w + ");" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4CatProdOpen(" + w + ");" + replaceImgCall + "}'";
										if (hoverState==1) {
											catNameTagLink += " onmouseover='panel4CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel4CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel4CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel4CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
										}
										var thisCatIsOn = 1;
										for (q=0; q<prodFilterArray.length; q++) {
											if (prodFilterArray[q][8] == catArray[w][0] && prodFilterArray[q][9] == "0") {
												thisCatIsOn = 0;
												break;
											}
										}
										if (thisCatIsOn == 1) {
											var baseCatStyle = " panel_4_category_name_on";
											catArray[w][6] = 1;
											window["panel1CategoryNameVar" + catArray[w][0]] = 1;
										}
										else {
											var baseCatStyle = " panel_4_category_name_off";
										}
									}
									categoryHTMLTest = baseCatNameHTMLStart + "<div id='panel4CategoryName" + catArray[w][0] + "' class='panel_4_category_name_" + catArray[w][0] + replaceImgMouseClass + " panel_4_category_name " + baseCatStyle + "'" + catNameTagLink + " tabindex='0' title=\"" + catArray[w][1] + "\">" + catArray[w][1] + daProdNumWrite + "<\/div>" + baseCatNameHTMLEnd;
								}
								var catBigImgTagStart = categoryHTMLTest.indexOf("<!--CATBIGIMG");
								if (catBigImgTagStart != -1) {
									var catBigImgTagEnd = categoryHTMLTest.indexOf(">",catBigImgTagStart);
									var catBigImgTagStrip = categoryHTMLTest.substring(catBigImgTagStart,(catBigImgTagEnd+1));
									var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBigImgTagStart);
									var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBigImgTagEnd+1));
									var catBigImgTagRender = "";
									var replaceImgTest = catBigImgTagStrip.indexOf(" REPLACE");
									if (replaceImgTest != -1) {
										catBigImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel4CategoryBigImgDivShell" + catArray[w][0] + "' class='panel_4_category_big_img_div_shell panel_4_category_big_img_div_shell_" + catArray[w][0] + "' onclick='panel4CatProdOpen(" + w + ");panel4CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4CatProdOpen(" + w + ");panel4CatImgClick(" + catArray[w][0] + ");}'";
										if (hoverState==1) {
											catBigImgTagRender += " onmouseover='panel4CatMouseOver(" + w + ");panel4CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel4CatMouseOver(" + w + ");panel4CatImgReplace(1," + catArray[w][0] + ");'";
										}
										catBigImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel4CategoryBigImgDivBack" + catArray[w][0] + "' class='panel_4_category_big_img_div_back panel_4_category_big_img_div_back_off panel_4_category_big_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][3] + "\");'><\/div><div id='panel4CategoryBigImgDivOver" + catArray[w][0] + "' class='panel_4_category_big_img_div_over panel_4_category_big_img_div_over_" + catArray[w][0] + "'";
										if (hoverState==1) {
											catBigImgTagRender += " onmouseout='panel4CatMouseOut(" + w + ");panel4CatImgReplace(2," + catArray[w][0] + ");' onblur='panel4CatMouseOut(" + w + ");panel4CatImgReplace(2," + catArray[w][0] + ");'";
										}
										catBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
										categoryHTMLTest = baseCatBigImgHTMLStart + catBigImgTagRender + baseCatBigImgHTMLEnd;
									}
									else {
										categoryHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel4CategoryBigImg" + catArray[w][0] + "' class='panel_4_category_big_img' src='" + clientImgBase + catArray[w][3] + "'>" + baseCatBigImgHTMLEnd;
									}
								}
								var catSmImgTagStart = categoryHTMLTest.indexOf("<!--CATSMIMG");
								if (catSmImgTagStart != -1) {
									var catSmImgTagEnd = categoryHTMLTest.indexOf(">",catSmImgTagStart);
									var catSmImgTagStrip = categoryHTMLTest.substring(catSmImgTagStart,(catSmImgTagEnd+1));
									var baseCatSmImgHTMLStart = categoryHTMLTest.substr(0,catSmImgTagStart);
									var baseCatSmImgHTMLEnd = categoryHTMLTest.substr((catSmImgTagEnd+1));
									var catSmImgTagRender = "";
									var replaceImgTest = catSmImgTagStrip.indexOf(" REPLACE");
									if (replaceImgTest != -1) {
										catSmImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel4CategorySmImgDivShell" + catArray[w][0] + "' class='panel_4_category_sm_img_div_shell panel_4_category_sm_img_div_shell_" + catArray[w][0] + "' onclick='panel4CatProdOpen(" + w + ");panel4CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4CatProdOpen(" + w + ");panel4CatImgClick(" + catArray[w][0] + ");}'";
										if (hoverState==1) {
											catSmImgTagRender += " onmouseover='panel4CatMouseOver(" + w + ");panel4CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel4CatMouseOver(" + w + ");panel4CatImgReplace(1," + catArray[w][0] + ");'";
										}
										catSmImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel4CategorySmImgDivBack" + catArray[w][0] + "' class='panel_4_category_sm_img_div_back panel_4_category_sm_img_div_back_off panel_4_category_sm_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][4] + "\");'><\/div><div id='panel4CategorySmImgDivOver" + catArray[w][0] + "' class='panel_4_category_sm_img_div_over panel_4_category_sm_img_div_over_" + catArray[w][0] + "'";
										if (hoverState==1) {
											catSmImgTagRender += " onmouseout='panel4CatMouseOut(" + w + ");panel4CatImgReplace(2," + catArray[w][0] + ");' onblur='panel4CatMouseOut(" + w + ");panel4CatImgReplace(2," + catArray[w][0] + ");'";
										}
										catSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
										categoryHTMLTest = baseCatSmImgHTMLStart + catSmImgTagRender + baseCatSmImgHTMLEnd;
									}
									else {
										categoryHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel4CategorySmImg" + catArray[w][0] + "' class='panel_4_category_sm_img' src='" + clientImgBase + catArray[w][4] + "'>" + baseCatSmImgHTMLEnd;
									}
								}
								var productHTMLTest = "";
								var productHTMLLeaf = "";
								for (pr=0; pr<prodFilterArray.length; pr++) {
									if (catArray[w][0] == prodFilterArray[pr][8]) {
										var productHTMLTest = autotextIt(p4TemplateSet.panel4ProductDiv,"panel4Product");
										var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
										if (prodDiscTagStart != -1) {
											var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
											var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
											var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
											var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
											var prodDiscWrite = "";
											var discVal = prodFilterArray[x][6];
											if (discVal != 1) {
												prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel4Product_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
											}
											productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
										}
										var prodNameTagStart = productHTMLTest.indexOf("<!--PRODNAME");
										if (prodNameTagStart != -1) {
											var prodNameTagEnd = productHTMLTest.indexOf(">",prodNameTagStart);
											var prodNameTagStrip = productHTMLTest.substring(prodNameTagStart,(prodNameTagEnd+1));
											var baseProdNameHTMLStart = productHTMLTest.substr(0,prodNameTagStart);
											var baseProdNameHTMLEnd = productHTMLTest.substr((prodNameTagEnd+1));
											var prodNameTagLink = " style='cursor:pointer;' onclick='panel4ProdSelect(" + prodFilterArray[pr][0] + ", \"" + prodFilterArray[pr][1] + "\", \"panel4ProductName" + prodFilterArray[pr][0] + "\", \"panel_4_product_name\", "+pr+");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4ProdSelect(" + prodFilterArray[pr][0] + ", \"" + prodFilterArray[pr][1] + "\", \"panel4ProductName" + prodFilterArray[pr][0] + "\", \"panel_4_product_name\", "+pr+");}'";
											if (hoverState==1) {
												prodNameTagLink += " onmouseover='panel4ProdMouseOver(\"panel4ProductName" + prodFilterArray[pr][0] + "\", \"panel_4_product_name\", "+pr+");' onfocus='panel4ProdMouseOver(\"panel4ProductName" + prodFilterArray[pr][0] + "\", \"panel_4_product_name\", "+pr+");' onmouseout='panel4ProdMouseOut(\"panel4ProductName" + prodFilterArray[pr][0] + "\", \"panel_4_product_name\", "+pr+");' onblur='panel4ProdMouseOut(\"panel4ProductName" + prodFilterArray[pr][0] + "\", \"panel_4_product_name\", "+pr+");'";
											}
											if (prodFilterArray[pr][9] == "1") {
												var baseProductStyle = " panel_4_product_name_on";
											}
											else {
												var baseProductStyle = " panel_4_product_name_off";
											}
											var descTest = prodNameTagStrip.indexOf(" DESC");
											if (descTest != -1) {
												var descVal = "<span class='panel_4_product_name_desc'>" + prodFilterArray[pr][3] + "<\/span>";
											}
											else {
												var descVal = "";
											}
											var prodNameItalicStart = prodNameTagStrip.indexOf(" FNTAW=");
											if (prodNameItalicStart != -1) {
												var prodNameItalicEnd = prodNameTagStrip.indexOf("]",prodNameItalicStart);
												var prodNameItalicVar = "<i class='fa " + prodNameTagStrip.substring((prodNameItalicStart+8),(prodNameItalicEnd)) + "'><\/i>";
											}
											else {
												var prodNameItalicVar = "";
											}
											productHTMLTest = baseProdNameHTMLStart + "<div id='panel4ProductName" + prodFilterArray[pr][0] + "' class='panel_4_product_name" + baseProductStyle + "'" + prodNameTagLink + " tabindex='0' title=\"" + prodFilterArray[pr][2] + "\">" + prodNameItalicVar + "<span class='panel_4_product_name_name'>" + prodFilterArray[pr][2] + "<\/span>" + descVal + "<\/div>" + baseProdNameHTMLEnd;
										}
										var prodDescTagStart = productHTMLTest.indexOf("<!--PRODDESC");
										if (prodDescTagStart != -1) {
											var prodDescTagEnd = productHTMLTest.indexOf(">",prodDescTagStart);
											var prodDescTagStrip = productHTMLTest.substring(prodDescTagStart,(prodDescTagEnd+1));
											var baseProdDescHTMLStart = productHTMLTest.substr(0,prodDescTagStart);
											var baseProdDescHTMLEnd = productHTMLTest.substr((prodDescTagEnd+1));
											productHTMLTest = baseProdDescHTMLStart + "<div id='panel4ProductDesc" + prodFilterArray[pr][0] + "' class='panel_4_product_desc'>" + prodFilterArray[pr][3] + "<\/div>" + baseProdDescHTMLEnd;
										}
										var prodCatTagStart = productHTMLTest.indexOf("<!--PRODCAT");
										if (prodCatTagStart != -1) {
											var prodCatTagEnd = productHTMLTest.indexOf(">",prodCatTagStart);
											var prodCatTagStrip = productHTMLTest.substring(prodCatTagStart,(prodCatTagEnd+1));
											var baseProdCatHTMLStart = productHTMLTest.substr(0,prodCatTagStart);
											var baseProdCatHTMLEnd = productHTMLTest.substr((prodCatTagEnd+1));
											productHTMLTest = baseProdCatHTMLStart + "<div id='panel4ProductCat" + prodFilterArray[pr][0] + "' class='panel_4_product_cat'>" + prodFilterArray[pr][16] + "<\/div>" + baseProdCatHTMLEnd;
										}
										var prodBigImgTagStart = productHTMLTest.indexOf("<!--PRODBIGIMG");
										if (prodBigImgTagStart != -1) {
											var prodBigImgTagEnd = productHTMLTest.indexOf(">",prodBigImgTagStart);
											var prodBigImgTagStrip = productHTMLTest.substring(prodBigImgTagStart,(prodBigImgTagEnd+1));
											var baseProdBigImgHTMLStart = productHTMLTest.substr(0,prodBigImgTagStart);
											var baseProdBigImgHTMLEnd = productHTMLTest.substr((prodBigImgTagEnd+1));
											var prodBigImgTagLinkStart = "<a href='' onclick='panel4ProdSelect(" + prodFilterArray[pr][0] + ", \"" + prodFilterArray[pr][1] + "\", \"panel4ProductName" + prodFilterArray[pr][0] + "\", \"panel_4_product_name\", "+pr+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4ProdSelect(" + prodFilterArray[pr][0] + ", \"" + prodFilterArray[pr][1] + "\", \"panel4ProductName" + prodFilterArray[pr][0] + "\", \"panel_4_product_name\", "+pr+");return false;}'";
											if (hoverState==1) {
												prodBigImgTagLinkStart += " onmouseover='panel4ProdMouseOver(\"panel4ProductName" + prodFilterArray[pr][0] + "\", \"panel_4_product_name\", "+pr+");' onfocus='panel4ProdMouseOver(\"panel4ProductName" + prodFilterArray[pr][0] + "\", \"panel_4_product_name\", "+pr+");' onmouseout='panel4ProdMouseOut(\"panel4ProductName" + prodFilterArray[pr][0] + "\", \"panel_4_product_name\", "+pr+");' onblur='panel4ProdMouseOut(\"panel4ProductName" + prodFilterArray[pr][0] + "\", \"panel_4_product_name\", "+pr+");'";
											}
											prodBigImgTagLinkStart += " tabindex='0' title=\"" + prodFilterArray[pr][2] + "\">";
											var prodBigImgTagLinkEnd = "<\/a>";
											productHTMLTest = baseProdBigImgHTMLStart + prodBigImgTagLinkStart + "<img title=\"" + prodFilterArray[pr][2] + "\" alt=\"" + prodFilterArray[pr][2] + "\" id='panel4ProductBigImg" + prodFilterArray[pr][0] + "' class='panel_4_product_big_img' src='" + clientImgBase + prodFilterArray[pr][4] + "'>" + prodBigImgTagLinkEnd + baseProdBigImgHTMLEnd;
										}
										var prodSmImgTagStart = productHTMLTest.indexOf("<!--PRODSMIMG");
										if (prodSmImgTagStart != -1) {
											var prodSmImgTagEnd = productHTMLTest.indexOf(">",prodSmImgTagStart);
											var prodSmImgTagStrip = productHTMLTest.substring(prodSmImgTagStart,(prodSmImgTagEnd+1));
											var baseProdSmImgHTMLStart = productHTMLTest.substr(0,prodSmImgTagStart);
											var baseProdSmImgHTMLEnd = productHTMLTest.substr((prodSmImgTagEnd+1));
											var prodSmImgTagLinkStart = "<a href='' onclick='panel4ProdSelect(" + prodFilterArray[pr][0] + ", \"" + prodFilterArray[pr][1] + "\", \"panel4ProductName" + prodFilterArray[pr][0] + "\", \"panel_4_product_name\", "+pr+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4ProdSelect(" + prodFilterArray[pr][0] + ", \"" + prodFilterArray[pr][1] + "\", \"panel4ProductName" + prodFilterArray[pr][0] + "\", \"panel_4_product_name\", "+pr+");return false;}'";
											if (hoverState==1) {
												prodSmImgTagLinkStart += " onmouseover='panel4ProdMouseOver(\"panel4ProductName" + prodFilterArray[pr][0] + "\", \"panel_4_product_name\", "+pr+");' onfocus='panel4ProdMouseOver(\"panel4ProductName" + prodFilterArray[pr][0] + "\", \"panel_4_product_name\", "+pr+");' onmouseout='panel4ProdMouseOut(\"panel4ProductName" + prodFilterArray[pr][0] + "\", \"panel_4_product_name\", "+pr+");' onblur='panel4ProdMouseOut(\"panel4ProductName" + prodFilterArray[pr][0] + "\", \"panel_4_product_name\", "+pr+");'";
											}
											prodSmImgTagLinkStart += " tabindex='0' title=\"" + prodFilterArray[pr][2] + "\">";
											var prodSmImgTagLinkEnd = "<\/a>";
											productHTMLTest = baseProdSmImgHTMLStart + prodSmImgTagLinkStart + "<img title=\"" + prodFilterArray[pr][2] + "\" alt=\"" + prodFilterArray[pr][2] + "\" id='panel4ProductSmImg" + prodFilterArray[pr][0] + "' class='panel_4_product_sm_img' src='" + clientImgBase + prodFilterArray[pr][5] + "'>" + prodSmImgTagLinkEnd + baseProdSmImgHTMLEnd;
										}
										productHTMLLeaf += productHTMLTest;
									}
								}
								categoryHTMLLeaf += categoryHTMLTest + "<div class='panel_4_family_category_product_shell panel_4_family_category_product_shell_" + catArray[w][0] + "' style='display:none;'>" + productHTMLLeaf + "<\/div>";
							}
						}
						if (panel4PListSliderOpen = 1) {
							prodListHTML += "<span class='panel_4_prodlist_famshell panel_4_prodlist_famshell_" + famArray[f][0] + " panel_4_prodlist_famshell_off'><div class='panel_4_family_category_shell panel_4_family_category_shell_" + famArray[f][0] + "'>" + categoryHTMLLeaf + "<\/div><\/span>";
						}
						else {
							prodListHTML += familyHTMLTest + "<span class='panel_4_prodlist_famshell panel_4_prodlist_famshell_" + famArray[f][0] + " panel_4_prodlist_famshell_off'><div class='panel_4_family_category_shell panel_4_family_category_shell_" + famArray[f][0] + "' style='display:none;'><\/span>" + categoryHTMLLeaf + "<\/div>";
						}
					}
				}
				baseHTML = baseProdListHTMLStart + prodListHTML + baseProdListHTMLEnd;
				panel4ProdListOn = 1;
			}
			/*
			else {
				if (document.getElementById('PROD').value == "") {
					document.getElementById('PROD').value = prodSelString;
					for (y=0;y<prodArray.length;y++) {
						prodDisplayArray[y] = prodArray[y];
						prodDisplayArray[y][9] = 1;
						window['panel1ProductNameVar'+prodDisplayArray[y][0]] = 1;
					}
				}
				else {
					var mantArray = document.getElementById('PROD').value.split(",");
					for (y=0;y<prodArray.length;y++) {
						prodDisplayArray[y] = prodArray[y];
						window['panel1ProductNameVar'+prodDisplayArray[y][0]] = 0;
						for (j=0;j<mantArray.length;j++) {
							if (mantArray[j] == prodDisplayArray[y][1]) {
								prodDisplayArray[y][9] = 1;
								window['panel1ProductNameVar'+prodDisplayArray[y][0]] = 1;
								break;
							}
						}
					}
				}
			}
			*/
		}
		var catListNumTagStart = baseHTML.indexOf("<!--CATLISTNUM");
		if (catListNumTagStart != -1) {
			var catListNumTagEnd = baseHTML.indexOf(">",catListNumTagStart);
			var catListNumHTMLStart = baseHTML.substr(0,catListNumTagStart);
			var catListNumHTMLEnd = baseHTML.substr((catListNumTagEnd+1));
			panel4CatListCount = 0;
			for (j=0;j<catArray.length;j++) {
				if (catArray[j][6] == 1) {
					panel4CatListCount++;
				}
			}
			if (panel4CatListCount == 0) {
				panel4CatListCount = catArray.length;
			}
			baseHTML = catListNumHTMLStart + "<span id='panel4CatListNum'>" + panel4CatListCount + "<\/span>" + catListNumHTMLEnd;
		}
		var catListProdNumTagStart = baseHTML.indexOf("<!--CATLISTPRODNUM");
		if (catListProdNumTagStart != -1) {
			var catListProdNumTagEnd = baseHTML.indexOf(">",catListProdNumTagStart);
			var catListProdNumHTMLStart = baseHTML.substr(0,catListProdNumTagStart);
			var catListProdNumHTMLEnd = baseHTML.substr((catListProdNumTagEnd+1));
			panel4CatListProdCount = 0;
			for (p=0;p<prodDisplayArray.length;p++) {
				if (prodDisplayArray[p][9] == 1) {
					panel4CatListProdCount++;
				}
			}
			baseHTML = catListProdNumHTMLStart + "<span id='panel4CatListProdNum'>" + panel4CatListProdCount + "<\/span>" + catListProdNumHTMLEnd;
		}
		var prodCountNumTagStart = baseHTML.indexOf("<!--PRODCOUNT");
		if (prodCountNumTagStart != -1) {
			var prodCountNumTagEnd = baseHTML.indexOf(">",prodCountNumTagStart);
			var prodCountNumTagStrip = baseHTML.substring(prodCountNumTagStart,(prodCountNumTagEnd+1));
			var prodCountNumHTMLStart = baseHTML.substr(0,prodCountNumTagStart);
			var prodCountNumHTMLEnd = baseHTML.substr((prodCountNumTagEnd+1));
			var panel4ProdCount = 0;
			var prodCountNumValueStart = prodCountNumTagStrip.indexOf(" VALUE=");
			if (prodCountNumValueStart != -1) {
				var prodCountNumValueEnd = prodCountNumTagStrip.indexOf("]",prodCountNumValueStart);
				prodCountNumValueVar = prodCountNumTagStrip.substring((prodCountNumValueStart+8),(prodCountNumValueEnd));
			}
			else {
				prodCountNumValueVar = "";
			}
			baseHTML = prodCountNumHTMLStart + "<span id='panel4ProdCountNumHolder'><span id='panel4ProdCountNum'>" + prodCartArray.length + "<\/span>" +  prodCountNumValueVar + "<\/span>" + prodCountNumHTMLEnd;
		}
		var countProdNumTagStart = baseHTML.indexOf("<!--COUNTPROD");
		if (countProdNumTagStart != -1) {
			var countProdNumTagEnd = baseHTML.indexOf(">",countProdNumTagStart);
			var countProdNumTagStrip = baseHTML.substring(countProdNumTagStart,(countProdNumTagEnd+1));
			var countProdNumHTMLStart = baseHTML.substr(0,countProdNumTagStart);
			var countProdNumHTMLEnd = baseHTML.substr((countProdNumTagEnd+1));
			var panel4CountProd = 0;
			var countProdNumValueStart = countProdNumTagStrip.indexOf(" VALUE=");
			if (countProdNumValueStart != -1) {
				var countProdNumValueEnd = countProdNumTagStrip.indexOf("]",countProdNumValueStart);
				countProdNumValueVar = countProdNumTagStrip.substring((countProdNumValueStart+8),(countProdNumValueEnd));
			}
			else {
				countProdNumValueVar = "";
			}
			baseHTML = countProdNumHTMLStart + "<span id='panel4CountProdNumHolder'><span id='panel4CountProdNum'>" + prodCartArray.length + "<\/span>" +  countProdNumValueVar + "<\/span>" + countProdNumHTMLEnd;
		}
		var selectedProductsTagStart = baseHTML.indexOf("<!--SELPRODTEXT");
		if (selectedProductsTagStart != -1) {
			var selectedProductsTagEnd = baseHTML.indexOf(">",selectedProductsTagStart);
			var selectedProductsTagStrip = baseHTML.substring(selectedProductsTagStart,(selectedProductsTagEnd+1));
			var selectedProductsHTMLStart = baseHTML.substr(0,selectedProductsTagStart);
			var selectedProductsHTMLEnd = baseHTML.substr((selectedProductsTagEnd+1));
			var selProdSingularStart = selectedProductsTagStrip.indexOf(" SINGULAR=");
			if (selProdSingularStart != -1) {
				var selProdSingularEnd = selectedProductsTagStrip.indexOf("]",selProdSingularStart);
				p4selProdSingularVar = " " + selectedProductsTagStrip.substring((selProdSingularStart+11),(selProdSingularEnd));
			}
			var selProdPluralStart = selectedProductsTagStrip.indexOf(" PLURAL=");
			if (selProdPluralStart != -1) {
				var selProdPluralEnd = selectedProductsTagStrip.indexOf("]",selProdPluralStart);
				p4selProdPluralVar = " " + selectedProductsTagStrip.substring((selProdPluralStart+9),(selProdPluralEnd));
			}
			if (prodCartArray.length == 1) {
				var thisSPT = p4selProdSingularVar;
			}
			else {
				var thisSPT = p4selProdPluralVar;
			}
			baseHTML = selectedProductsHTMLStart + "<div id='panel4SelProdText' class='panel_4_selected_products_text'>" + thisSPT + "<\/div>" + selectedProductsHTMLEnd;
		}
		var prodlistButtonTagStart = baseHTML.indexOf("<!--PRODBUTTON");
		if (prodlistButtonTagStart != -1) {
			var prodlistButtonTagEnd = baseHTML.indexOf(">",prodlistButtonTagStart);
			var prodlistButtonTagStrip = baseHTML.substring(prodlistButtonTagStart,(prodlistButtonTagEnd+1));
			var prodlistButtonHTMLStart = baseHTML.substr(0,prodlistButtonTagStart);
			var prodlistButtonHTMLEnd = baseHTML.substr((prodlistButtonTagEnd+1));
			var prodlistButtonRender = "";
			var prodlistButtonValueStart = prodlistButtonTagStrip.indexOf(" VALUE=");
			if (prodlistButtonValueStart != -1) {
				var prodlistButtonValueEnd = prodlistButtonTagStrip.indexOf("]",prodlistButtonValueStart);
				var prodlistButtonValueVar = prodlistButtonTagStrip.substring((prodlistButtonValueStart+8),(prodlistButtonValueEnd));
			}
			else {
				var prodlistButtonValueVar = "SUBMIT";
			}
			var prodlistButtonItalicStart = prodlistButtonTagStrip.indexOf(" FNTAW=");
			if (prodlistButtonItalicStart != -1) {
				var prodlistButtonItalicEnd = prodlistButtonTagStrip.indexOf("]",prodlistButtonItalicStart);
				var prodlistButtonItalicVar = "<i class='fa " + prodlistButtonTagStrip.substring((prodlistButtonItalicStart+8),(prodlistButtonItalicEnd)) + "'><\/i>";
			}
			else {
				var prodlistButtonItalicVar = "";
			}
			prodlistButtonRender += "<div id='panel4ProdlistButton' class='panel_4_prodlist_button panel_4_prodlist_button_off'";
			if (hoverState==1) {
				prodlistButtonRender += " onmouseover='panel4ButtonHover(\"panel4ProdlistButton\",\"panel_4_prodlist_button\",1);' onfocus='panel4ButtonHover(\"panel4ProdlistButton\",\"panel_4_prodlist_button\",1);' onmouseout='panel4ButtonHover(\"panel4ProdlistButton\",\"panel_4_prodlist_button\",0);' onblur='panel4ButtonHover(\"panel4ProdlistButton\",\"panel_4_prodlist_button\",0);'";
			}
			prodlistButtonRender += " onclick='panel4SubmitForm();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4SubmitForm();}' tabindex='0' title=\"" + prodlistButtonValueVar + "\">" + prodlistButtonItalicVar + prodlistButtonValueVar + "<\/div>";
			baseHTML = prodlistButtonHTMLStart + prodlistButtonRender + prodlistButtonHTMLEnd;
		}
		var prodlistResetTagStart = baseHTML.indexOf("<!--PRODRESET");
		if (prodlistResetTagStart != -1) {
			var prodlistResetTagEnd = baseHTML.indexOf(">",prodlistResetTagStart);
			var prodlistResetTagStrip = baseHTML.substring(prodlistResetTagStart,(prodlistResetTagEnd+1));
			var prodlistResetHTMLStart = baseHTML.substr(0,prodlistResetTagStart);
			var prodlistResetHTMLEnd = baseHTML.substr((prodlistResetTagEnd+1));
			var prodlistResetRender = "";
			var prodlistResetValueStart = prodlistResetTagStrip.indexOf(" VALUE=");
			if (prodlistResetValueStart != -1) {
				var prodlistResetValueEnd = prodlistResetTagStrip.indexOf("]",prodlistResetValueStart);
				var prodlistResetValueVar = prodlistResetTagStrip.substring((prodlistResetValueStart+8),(prodlistResetValueEnd));
			}
			else {
				var prodlistResetValueVar = "RESET";
			}
			var prodlistResetItalicStart = prodlistResetTagStrip.indexOf(" FNTAW=");
			if (prodlistResetItalicStart != -1) {
				var prodlistResetItalicEnd = prodlistResetTagStrip.indexOf("]",prodlistResetItalicStart);
				var prodlistResetItalicVar = "<i class='fa " + prodlistResetTagStrip.substring((prodlistResetItalicStart+8),(prodlistResetItalicEnd)) + "'><\/i>";
			}
			else {
				var prodlistResetItalicVar = "";
			}
			prodlistResetRender += "<div id='panel4ProdlistReset' class='panel_4_prodlist_reset panel_4_prodlist_reset_off'";
			if (hoverState==1) {
				prodlistResetRender += " onmouseover='panel4ButtonHover(\"panel4ProdlistReset\",\"panel_4_prodlist_reset\",1);' onfocus='panel4ButtonHover(\"panel4ProdlistReset\",\"panel_4_prodlist_reset\",1);' onmouseout='panel4ButtonHover(\"panel4ProdlistReset\",\"panel_4_prodlist_reset\",0);' onblur='panel4ButtonHover(\"panel4ProdlistReset\",\"panel_4_prodlist_reset\",0);'";
			}
			prodlistResetRender += " onclick='panel4ResetProducts();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4ResetProducts();}' tabindex='0' title=\"" + prodlistResetValueVar + "\">" + prodlistResetItalicVar + prodlistResetValueVar + "<\/div>";
			baseHTML = prodlistResetHTMLStart + prodlistResetRender + prodlistResetHTMLEnd;
		}
		var prodlistCatResetTagStart = baseHTML.indexOf("<!--CATRESET");
		if (prodlistCatResetTagStart != -1) {
			var prodlistCatResetTagEnd = baseHTML.indexOf(">",prodlistCatResetTagStart);
			var prodlistCatResetTagStrip = baseHTML.substring(prodlistCatResetTagStart,(prodlistCatResetTagEnd+1));
			var prodlistCatResetHTMLStart = baseHTML.substr(0,prodlistCatResetTagStart);
			var prodlistCatResetHTMLEnd = baseHTML.substr((prodlistCatResetTagEnd+1));
			var prodlistCatResetRender = "";
			var prodlistCatResetValueStart = prodlistCatResetTagStrip.indexOf(" VALUE=");
			if (prodlistCatResetValueStart != -1) {
				var prodlistCatResetValueEnd = prodlistCatResetTagStrip.indexOf("]",prodlistCatResetValueStart);
				var prodlistCatResetValueVar = prodlistCatResetTagStrip.substring((prodlistCatResetValueStart+8),(prodlistCatResetValueEnd));
			}
			else {
				var prodlistCatResetValueVar = "RESET";
			}
			var prodlistCatResetItalicStart = prodlistCatResetTagStrip.indexOf(" FNTAW=");
			if (prodlistCatResetItalicStart != -1) {
				var prodlistCatResetItalicEnd = prodlistCatResetTagStrip.indexOf("]",prodlistCatResetItalicStart);
				var prodlistCatResetItalicVar = "<i class='fa " + prodlistCatResetTagStrip.substring((prodlistCatResetItalicStart+8),(prodlistCatResetItalicEnd)) + "'><\/i>";
			}
			else {
				var prodlistCatResetItalicVar = "";
			}
			var prodlistCatResetTagNumTest = prodlistCatResetTagStrip.indexOf(" PRODNUM");
			if (prodlistCatResetTagNumTest != -1) {
				var daProdNumWrite = "<span class='da_prod_num'>" + prodDisplayArray.length + "<\/span>";
			}
			else {
				var daProdNumWrite = "";
			}
			var selectCount = 0;
			var catResOnVar = "off";
			for (sc=0; sc<prodDisplayArray.length; sc++) {
				if (prodDisplayArray[sc][9] == 1) {
					selectCount++;
				}
			}
			if (selectCount == 0 || selectCount == prodDisplayArray.length) {
				catResOnVar = "on";
			}
			prodlistCatResetRender += "<div id='panel4ProdlistCatReset' class='panel_4_prodlist_catreset panel_4_prodlist_catreset_" + catResOnVar + "'";
			if (hoverState==1) {
				prodlistCatResetRender += " onmouseover='panel4ButtonHover(\"panel4ProdlistCatReset\",\"panel_4_prodlist_catreset\",1);' onfocus='panel4ButtonHover(\"panel4ProdlistCatReset\",\"panel_4_prodlist_catreset\",1);' onmouseout='panel4ButtonHover(\"panel4ProdlistCatReset\",\"panel_4_prodlist_catreset\",0);' onblur='panel4ButtonHover(\"panel4ProdlistCatReset\",\"panel_4_prodlist_catreset\",0);'";
			}
			prodlistCatResetRender += " onclick='panel4ResetCategories();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4ResetCategories();}' tabindex='0' title=\"" + prodlistCatResetValueVar + "\">" + prodlistCatResetItalicVar + prodlistCatResetValueVar + daProdNumWrite + "<\/div>";
			baseHTML = prodlistCatResetHTMLStart + prodlistCatResetRender + prodlistCatResetHTMLEnd;
		}
		var submitButtonTagStart = baseHTML.indexOf("<!--SUBBUTTON");
		if (submitButtonTagStart != -1) {
			var submitButtonTagEnd = baseHTML.indexOf(">",submitButtonTagStart);
			var submitButtonTagStrip = baseHTML.substring(submitButtonTagStart,(submitButtonTagEnd+1));
			var submitButtonHTMLStart = baseHTML.substr(0,submitButtonTagStart);
			var submitButtonHTMLEnd = baseHTML.substr((submitButtonTagEnd+1));
			var submitButtonRender = "";
			var submitButtonValueStart = submitButtonTagStrip.indexOf(" VALUE=");
			if (submitButtonValueStart != -1) {
				var submitButtonValueEnd = submitButtonTagStrip.indexOf("]",submitButtonValueStart);
				var submitButtonValueVar = submitButtonTagStrip.substring((submitButtonValueStart+8),(submitButtonValueEnd));
			}
			else {
				var submitButtonValueVar = "SUBMIT";
			}
			var submitButtonItalicStart = submitButtonTagStrip.indexOf(" FNTAW=");
			if (submitButtonItalicStart != -1) {
				var submitButtonItalicEnd = submitButtonTagStrip.indexOf("]",submitButtonItalicStart);
				var submitButtonItalicVar = "<i class='fa " + submitButtonTagStrip.substring((submitButtonItalicStart+8),(submitButtonItalicEnd)) + "'><\/i>";
			}
			else {
				var submitButtonItalicVar = "";
			}
			submitButtonRender += "<div id='panel4SubmitButton' class='panel_4_submit_button panel_4_submit_button_off'";
			if (hoverState==1) {
				submitButtonRender += " onmouseover='panel4ButtonHover(\"panel4SubmitButton\",\"panel_4_submit_button\",1);' onfocus='panel4ButtonHover(\"panel4SubmitButton\",\"panel_4_submit_button\",1);' onmouseout='panel4ButtonHover(\"panel4SubmitButton\",\"panel_4_submit_button\",0);' onblur='panel4ButtonHover(\"panel4SubmitButton\",\"panel_4_submit_button\",0);'";
			}
			submitButtonRender += " onclick='panel4SubmitForm();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4SubmitForm();}' tabindex='0' title=\"" + submitButtonValueVar + "\">" + submitButtonItalicVar + submitButtonValueVar + "<\/div>";
			baseHTML = submitButtonHTMLStart + submitButtonRender + submitButtonHTMLEnd;
		}
		var geoLocButtonTagStart = baseHTML.indexOf("<!--GEOBUTTON");
		if (geoLocButtonTagStart != -1) {
			var geoLocButtonTagEnd = baseHTML.indexOf(">",geoLocButtonTagStart);
			var geoLocButtonTagStrip = baseHTML.substring(geoLocButtonTagStart,(geoLocButtonTagEnd+1));
			var geoLocButtonHTMLStart = baseHTML.substr(0,geoLocButtonTagStart);
			var geoLocButtonHTMLEnd = baseHTML.substr((geoLocButtonTagEnd+1));
			var geoLocButtonRender = "";
			var geoLocButtonValueStart = geoLocButtonTagStrip.indexOf(" VALUE=");
			if (geoLocButtonValueStart != -1) {
				var geoLocButtonValueEnd = geoLocButtonTagStrip.indexOf("]",geoLocButtonValueStart);
				var geoLocButtonValueVar = geoLocButtonTagStrip.substring((geoLocButtonValueStart+8),(geoLocButtonValueEnd));
			}
			else {
				var geoLocButtonValueVar = "SUBMIT";
			}
			var geoLocButtonSubmitStart = geoLocButtonTagStrip.indexOf(" SUBMIT");
			if (geoLocButtonSubmitStart != -1) {
				p4GeoLocButtonSubmitVar = 1;
			}
			var geoLocButtonItalicStart = geoLocButtonTagStrip.indexOf(" FNTAW=");
			if (geoLocButtonItalicStart != -1) {
				var geoLocButtonItalicEnd = geoLocButtonTagStrip.indexOf("]",geoLocButtonItalicStart);
				var geoLocButtonItalicVar = "<i class='fa " + geoLocButtonTagStrip.substring((geoLocButtonItalicStart+8),(geoLocButtonItalicEnd)) + "'><\/i>";
			}
			else {
				var geoLocButtonItalicVar = "";
			}
			geoLocButtonRender += "<div id='panel4GeoLocButton' class='panel_4_geo_loc_button panel_4_geo_loc_button_off'";
			if (hoverState==1) {
				geoLocButtonRender += " onmouseover='panel4ButtonHover(\"panel4GeoLocButton\",\"panel_4_geo_loc_button\",1);' onfocus='panel4ButtonHover(\"panel4GeoLocButton\",\"panel_4_geo_loc_button\",1);' onmouseout='panel4ButtonHover(\"panel4GeoLocButton\",\"panel_4_geo_loc_button\",0);' onblur='panel4ButtonHover(\"panel4GeoLocButton\",\"panel_4_geo_loc_button\",0);'";
			}
			geoLocButtonRender += " onclick='geoNearbyCheck(\"panel4AddressField\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){geoNearbyCheck(\"panel4AddressField\");}' tabindex='0' title=\"" + geoLocButtonValueVar + "\">" + geoLocButtonItalicVar + geoLocButtonValueVar + "<\/div>";
			baseHTML = geoLocButtonHTMLStart + geoLocButtonRender + geoLocButtonHTMLEnd;
		}
		var backButtonTagStart = baseHTML.indexOf("<!--BACKBUTTON");
		if (backButtonTagStart != -1) {
			var backButtonTagEnd = baseHTML.indexOf(">",backButtonTagStart);
			var backButtonTagStrip = baseHTML.substring(backButtonTagStart,(backButtonTagEnd+1));
			var backButtonHTMLStart = baseHTML.substr(0,backButtonTagStart);
			var backButtonHTMLEnd = baseHTML.substr((backButtonTagEnd+1));
			var backButtonRender = "";
			var backButtonValueStart = backButtonTagStrip.indexOf(" VALUE=");
			if (backButtonValueStart != -1) {
				var backButtonValueEnd = backButtonTagStrip.indexOf("]",backButtonValueStart);
				var backButtonValueVar = backButtonTagStrip.substring((backButtonValueStart+8),(backButtonValueEnd));
			}
			else {
				var backButtonValueVar = "NEXT";
			}
			var backButtonPanelStart = backButtonTagStrip.indexOf(" PANEL=");
			if (backButtonPanelStart != -1) {
				var backButtonPanelEnd = backButtonTagStrip.indexOf("]",backButtonPanelStart);
				var backButtonPanelVar = backButtonTagStrip.substring((backButtonPanelStart+8),(backButtonPanelEnd));
			}
			else {
				var backButtonPanelVar = "panel1";
			}
			var backButtonItalicStart = backButtonTagStrip.indexOf(" FNTAW=");
			if (backButtonItalicStart != -1) {
				var backButtonItalicEnd = backButtonTagStrip.indexOf("]",backButtonItalicStart);
				var backButtonItalicVar = "<i class='fa " + backButtonTagStrip.substring((backButtonItalicStart+8),(backButtonItalicEnd)) + "'><\/i>";
			}
			else {
				var backButtonItalicVar = "";
			}
			backButtonRender += "<div id='panel4BackButton' class='panel_4_back_button panel_4_back_button_off'";
			if (hoverState==1) {
				backButtonRender += " onmouseover='panel4ButtonHover(\"panel4BackButton\",\"panel_4_back_button\",1);' onfocus='panel4ButtonHover(\"panel4BackButton\",\"panel_4_back_button\",1);' onmouseout='panel4ButtonHover(\"panel4BackButton\",\"panel_4_back_button\",0);' onblur='panel4ButtonHover(\"panel4BackButton\",\"panel_4_back_button\",0);'";
			}
			if (PEC != 0 && PECPROD != "") {
				backButtonRender += " style='display:none;'";
			}
			backButtonRender += " onclick='panel4Back(\""+backButtonPanelVar+"\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4Back(\""+backButtonPanelVar+"\");}' tabindex='0' title=\"" + backButtonValueVar + "\">" + backButtonItalicVar + backButtonValueVar + "<\/div>";
			baseHTML = backButtonHTMLStart + backButtonRender + backButtonHTMLEnd;
		}
		var buttonBackTagStart = baseHTML.indexOf("<!--BUTTONBACK");
		if (buttonBackTagStart != -1) {
			var buttonBackTagEnd = baseHTML.indexOf(">",buttonBackTagStart);
			var buttonBackTagStrip = baseHTML.substring(buttonBackTagStart,(buttonBackTagEnd+1));
			var buttonBackHTMLStart = baseHTML.substr(0,buttonBackTagStart);
			var buttonBackHTMLEnd = baseHTML.substr((buttonBackTagEnd+1));
			var buttonBackRender = "";
			var buttonBackValueStart = buttonBackTagStrip.indexOf(" VALUE=");
			if (buttonBackValueStart != -1) {
				var buttonBackValueEnd = buttonBackTagStrip.indexOf("]",buttonBackValueStart);
				var buttonBackValueVar = buttonBackTagStrip.substring((buttonBackValueStart+8),(buttonBackValueEnd));
			}
			else {
				var buttonBackValueVar = "NEXT";
			}
			var buttonBackPanelStart = buttonBackTagStrip.indexOf(" PANEL=");
			if (buttonBackPanelStart != -1) {
				var buttonBackPanelEnd = buttonBackTagStrip.indexOf("]",buttonBackPanelStart);
				var buttonBackPanelVar = buttonBackTagStrip.substring((buttonBackPanelStart+8),(buttonBackPanelEnd));
			}
			else {
				var buttonBackPanelVar = "panel1";
			}
			var buttonBackItalicStart = buttonBackTagStrip.indexOf(" FNTAW=");
			if (buttonBackItalicStart != -1) {
				var buttonBackItalicEnd = buttonBackTagStrip.indexOf("]",buttonBackItalicStart);
				var buttonBackItalicVar = "<i class='fa " + buttonBackTagStrip.substring((buttonBackItalicStart+8),(buttonBackItalicEnd)) + "'><\/i>";
			}
			else {
				var buttonBackItalicVar = "";
			}
			buttonBackRender += "<div id='panel4ButtonBack' class='panel_4_button_back panel_4_button_back_off'";
			if (hoverState==1) {
				buttonBackRender += " onmouseover='panel4ButtonHover(\"panel4ButtonBack\",\"panel_4_button_back\",1);' onfocus='panel4ButtonHover(\"panel4ButtonBack\",\"panel_4_button_back\",1);' onmouseout='panel4ButtonHover(\"panel4ButtonBack\",\"panel_4_button_back\",0);' onblur='panel4ButtonHover(\"panel4ButtonBack\",\"panel_4_button_back\",0);'";
			}
			buttonBackRender += " onclick='panel4Back(\""+buttonBackPanelVar+"\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4Back(\""+buttonBackPanelVar+"\");}' tabindex='0' title=\"" + buttonBackValueVar + "\">" + buttonBackItalicVar + buttonBackValueVar + "<\/div>";
			baseHTML = buttonBackHTMLStart + buttonBackRender + buttonBackHTMLEnd;
		}
		var crfFormOptionsTagStart = baseHTML.indexOf("<!--FORMOPTIONS");
		if (crfFormOptionsTagStart != -1) {
			var crfFormOptionsTagEnd = baseHTML.indexOf(">",crfFormOptionsTagStart);
			var crfFormOptionsTagStrip = baseHTML.substring(crfFormOptionsTagStart,(crfFormOptionsTagEnd+1));
			var crfFormOptionsHTMLStart = baseHTML.substr(0,crfFormOptionsTagStart);
			var crfFormOptionsHTMLEnd = baseHTML.substr((crfFormOptionsTagEnd+1));
			var crfFormOptionsRender = "";
			var crfFormOptionsReqStart = crfFormOptionsTagStrip.indexOf(" PRODREQ");
			if (crfFormOptionsReqStart != -1) {
				panel4CRFProdReq = 1;
			}
			var crfFormOptionsFamStart = crfFormOptionsTagStrip.indexOf(" FAMILY");
			if (crfFormOptionsFamStart != -1) {
				panel4CRFFamilySet = 1;
			}
			baseHTML = crfFormOptionsHTMLStart + crfFormOptionsHTMLEnd;
		}
		var crfHeaderTagStart = baseHTML.indexOf("<!--CRFHEADER");
		if (crfHeaderTagStart != -1) {
			var crfHeaderTagEnd = baseHTML.indexOf(">",crfHeaderTagStart);
			var crfHeaderTagStrip = baseHTML.substring(crfHeaderTagStart,(crfHeaderTagEnd+1));
			var crfHeaderHTMLStart = baseHTML.substr(0,crfHeaderTagStart);
			var crfHeaderHTMLEnd = baseHTML.substr((crfHeaderTagEnd+1));
			var crfHeaderRender = "<div id='panel4CRFHeader' class='panel_4_crf_header'>" + crf_header + "<\/div>";
			baseHTML = crfHeaderHTMLStart + crfHeaderRender + crfHeaderHTMLEnd;
		}
		var crfTextTagStart = baseHTML.indexOf("<!--CRFTEXT");
		if (crfTextTagStart != -1) {
			var crfTextTagEnd = baseHTML.indexOf(">",crfTextTagStart);
			var crfTextTagStrip = baseHTML.substring(crfTextTagStart,(crfTextTagEnd+1));
			var crfTextHTMLStart = baseHTML.substr(0,crfTextTagStart);
			var crfTextHTMLEnd = baseHTML.substr((crfTextTagEnd+1));
			var crfTextRender = "<div id='panel4CRFText' class='panel_4_crf_text'>" + crf_text + "<\/div>";
			baseHTML = crfTextHTMLStart + crfTextRender + crfTextHTMLEnd;
		}
		var crfImageTagStart = baseHTML.indexOf("<!--CRFIMAGE");
		if (crfImageTagStart != -1) {
			var crfImageTagEnd = baseHTML.indexOf(">",crfImageTagStart);
			var crfImageTagStrip = baseHTML.substring(crfImageTagStart,(crfImageTagEnd+1));
			var crfImageHTMLStart = baseHTML.substr(0,crfImageTagStart);
			var crfImageHTMLEnd = baseHTML.substr((crfImageTagEnd+1));
			var crfImageRender = "<img title=\"" + crf_text + "\" alt=\"" + crf_text + "\" id='panel4CRFImage' class='panel_4_crf_image' src='" + crf_image + "'>";
			baseHTML = crfImageHTMLStart + crfImageRender + crfImageHTMLEnd;
		}
		var crfNameTagStart = baseHTML.indexOf("<!--CRFNAME");
		if (crfNameTagStart != -1) {
			var crfNameTagEnd = baseHTML.indexOf(">",crfNameTagStart);
			var crfNameTagStrip = baseHTML.substring(crfNameTagStart,(crfNameTagEnd+1));
			var crfNameHTMLStart = baseHTML.substr(0,crfNameTagStart);
			var crfNameHTMLEnd = baseHTML.substr((crfNameTagEnd+1));
			var crfNameRender = "";
			var crfNameReqStart = crfNameTagStrip.indexOf(" REQUIRED");
			if (crfNameReqStart != -1 || crf_name_req == 1) {
				var crfNameReqRender = " class='panel_4_crf_name panel_4_crf_name_base panel_4_required'";
			}
			else {
				var crfNameReqRender = " class='panel_4_crf_name panel_4_crf_name_base'";
			}
			var crfNameValueStart = crfNameTagStrip.indexOf(" VALUE=");
			if (crfNameValueStart != -1) {
				var crfNameValueEnd = crfNameTagStrip.indexOf("]",crfNameValueStart);
				var crfNameValueTemp = crfNameTagStrip.substring((crfNameValueStart+8),(crfNameValueEnd));
				if (crfNameValueTemp != "") {
					var crfNameValueVar = " placeholder='" + crfNameValueTemp + "'";
				}
				else {
					var crfNameValueVar = "";
				}
			}
			else {
				var crfNameValueVar = " placeholder='Name'";
			}
			crfNameRender = "<input type='text' name='panel4CRFName'" + crfNameValueVar + " id='panel4CRFName'" + crfNameReqRender + " onkeyup='panel4FieldKeypress(event,\"panel4CRFName\",0);' title=\"Name\">";
			baseHTML = crfNameHTMLStart + crfNameRender + crfNameHTMLEnd;
		}
		else {
			baseHTML += "<input type='hidden' name='panel4CRFName' id='panel4CRFName' value='' title=\"Name\">";
		}
		var crfEmailTagStart = baseHTML.indexOf("<!--CRFEMAIL");
		if (crfEmailTagStart != -1) {
			var crfEmailTagEnd = baseHTML.indexOf(">",crfEmailTagStart);
			var crfEmailTagStrip = baseHTML.substring(crfEmailTagStart,(crfEmailTagEnd+1));
			var crfEmailHTMLStart = baseHTML.substr(0,crfEmailTagStart);
			var crfEmailHTMLEnd = baseHTML.substr((crfEmailTagEnd+1));
			var crfEmailRender = "";
			var crfEmailReqStart = crfEmailTagStrip.indexOf(" REQUIRED");
			if (crfEmailReqStart != -1 || crf_email_req == 1) {
				var crfEmailReqRender = " class='panel_4_crf_email panel_4_crf_email_base panel_4_required'";
			}
			else {
				var crfEmailReqRender = " class='panel_4_crf_email panel_4_crf_email_base'";
			}
			var crfEmailValueStart = crfEmailTagStrip.indexOf(" VALUE=");
			if (crfEmailValueStart != -1) {
				var crfEmailValueEnd = crfEmailTagStrip.indexOf("]",crfEmailValueStart);
				var crfEmailValueTemp = crfEmailTagStrip.substring((crfEmailValueStart+8),(crfEmailValueEnd));
				if (crfEmailValueTemp != "") {
					var crfEmailValueVar = " placeholder='" + crfEmailValueTemp + "'";
				}
				else {
					var crfEmailValueVar = "";
				}
			}
			else {
				var crfEmailValueVar = " placeholder='Email'";
			}
			crfEmailRender = "<input type='email' name='panel4CRFEmail'" + crfEmailValueVar + " id='panel4CRFEmail'" + crfEmailReqRender + " onkeyup='panel4FieldKeypress(event,\"panel4CRFEmail\",0);' onblur='checkCRFEmail();' title=\"Email\">";
			baseHTML = crfEmailHTMLStart + crfEmailRender + crfEmailHTMLEnd;
		}
		else {
			baseHTML += "<input type='hidden' name='panel4CRFEmail' id='panel4CRFEmail' value='' title=\"Email\">";
		}
		var crfPhoneTagStart = baseHTML.indexOf("<!--CRFPHONE");
		if (crfPhoneTagStart != -1) {
			var crfPhoneTagEnd = baseHTML.indexOf(">",crfPhoneTagStart);
			var crfPhoneTagStrip = baseHTML.substring(crfPhoneTagStart,(crfPhoneTagEnd+1));
			var crfPhoneHTMLStart = baseHTML.substr(0,crfPhoneTagStart);
			var crfPhoneHTMLEnd = baseHTML.substr((crfPhoneTagEnd+1));
			var crfPhoneRender = "";
			var crfPhoneReqStart = crfPhoneTagStrip.indexOf(" REQUIRED");
			if (crfPhoneReqStart != -1 || crf_phone_req == 1) {
				var crfPhoneReqRender = " class='panel_4_crf_phone panel_4_crf_phone_base panel_4_required'";
			}
			else {
				var crfPhoneReqRender = " class='panel_4_crf_phone panel_4_crf_phone_base'";
			}
			var crfPhoneValueStart = crfPhoneTagStrip.indexOf(" VALUE=");
			if (crfPhoneValueStart != -1) {
				var crfPhoneValueEnd = crfPhoneTagStrip.indexOf("]",crfPhoneValueStart);
				var crfPhoneValueTemp = crfPhoneTagStrip.substring((crfPhoneValueStart+8),(crfPhoneValueEnd));
				if (crfPhoneValueTemp != "") {
					var crfPhoneValueVar = " placeholder='" + crfPhoneValueTemp + "'";
				}
				else {
					var crfPhoneValueVar = "";
				}
			}
			else {
				var crfPhoneValueVar = " placeholder='Phone'";
			}
			crfPhoneRender = "<input type='text' name='panel4CRFPhone'" + crfPhoneValueVar + " id='panel4CRFPhone'" + crfPhoneReqRender + " onkeyup='panel4FieldKeypress(event,\"panel4CRFPhone\",0);' title=\"Phone\">";
			baseHTML = crfPhoneHTMLStart + crfPhoneRender + crfPhoneHTMLEnd;
		}
		else {
			baseHTML += "<input type='hidden' name='panel4CRFPhone' id='panel4CRFPhone' value='' title=\"Phone\">";
		}
		var crfStoresTagStart = baseHTML.indexOf("<!--CRFSTORES");
		if (crfStoresTagStart != -1) {
			var crfStoresTagEnd = baseHTML.indexOf(">",crfStoresTagStart);
			var crfStoresTagStrip = baseHTML.substring(crfStoresTagStart,(crfStoresTagEnd+1));
			var crfStoresHTMLStart = baseHTML.substr(0,crfStoresTagStart);
			var crfStoresHTMLEnd = baseHTML.substr((crfStoresTagEnd+1));
			var crfStoresRender = "";
			var crfStoresReqStart = crfStoresTagStrip.indexOf(" REQUIRED");
			if (crfStoresReqStart != -1) {
				var crfStoresReqRender = " class='panel_4_crf_stores panel_4_crf_stores_base panel_4_required'";
			}
			else {
				var crfStoresReqRender = " class='panel_4_crf_stores panel_4_crf_stores_base'";
			}
			var crfStoresValueStart = crfStoresTagStrip.indexOf(" VALUE=");
			if (crfStoresValueStart != -1) {
				var crfStoresValueEnd = crfStoresTagStrip.indexOf("]",crfStoresValueStart);
				var crfStoresValueTemp = crfStoresTagStrip.substring((crfStoresValueStart+8),(crfStoresValueEnd));
				if (crfStoresValueTemp != "") {
					var crfStoresValueVar = " placeholder='" + crfStoresValueTemp + "'";
				}
				else {
					var crfStoresValueVar = "";
				}
			}
			else {
				var crfStoresValueVar = " placeholder='Stores where you shop'";
			}
			crfStoresRender = "<input type='text' name='panel4CRFStores'" + crfStoresValueVar + " id='panel4CRFStores'" + crfStoresReqRender + " onkeyup='panel4FieldKeypress(event,\"panel4CRFStores\",0);' title=\"Stores\">";
			baseHTML = crfStoresHTMLStart + crfStoresRender + crfStoresHTMLEnd;
		}
		else {
			baseHTML += "<input type='hidden' name='panel4CRFStores' id='panel4CRFStores' value='' title=\"Stores\">";
		}
		var crfStoreAreaTagStart = baseHTML.indexOf("<!--CRFSTOREAREA");
		if (crfStoreAreaTagStart != -1) {
			var crfStoreAreaTagEnd = baseHTML.indexOf(">",crfStoreAreaTagStart);
			var crfStoreAreaTagStrip = baseHTML.substring(crfStoreAreaTagStart,(crfStoreAreaTagEnd+1));
			var crfStoreAreaHTMLStart = baseHTML.substr(0,crfStoreAreaTagStart);
			var crfStoreAreaHTMLEnd = baseHTML.substr((crfStoreAreaTagEnd+1));
			var crfStoreAreaRender = "";
			var crfStoreAreaReqStart = crfStoreAreaTagStrip.indexOf(" REQUIRED");
			if (crfStoreAreaReqStart != -1) {
				var crfStoreAreaReqRender = " class='panel_4_crf_storearea panel_4_crf_storearea_base panel_4_required'";
			}
			else {
				var crfStoreAreaReqRender = " class='panel_4_crf_storearea panel_4_crf_storearea_base'";
			}
			var crfStoreAreaStart = crfStoreAreaTagStrip.indexOf(" VALUE=");
			if (crfStoreAreaStart != -1) {
				var crfStoreAreaEnd = crfStoreAreaTagStrip.indexOf("]",crfStoreAreaStart);
				var crfStoreAreaTemp = crfStoreAreaTagStrip.substring((crfStoreAreaStart+8),(crfStoreAreaEnd));
				if (crfStoreAreaTemp != "") {
					var crfStoreAreaVar = " placeholder='" + crfStoreAreaTemp + "'";
				}
				else {
					var crfStoreAreaVar = "";
				}
			}
			else {
				var crfStoreAreaVar = "";
			}
			crfStoreAreaRender = "<textarea name='panel4CRFStoreArea' id='panel4CRFStoreArea'" + crfStoreAreaReqRender + crfStoreAreaVar + "><\/textarea>";
			baseHTML = crfStoreAreaHTMLStart + crfStoreAreaRender + crfStoreAreaHTMLEnd;
		}
		else {
			baseHTML += "<input type='hidden' name='panel4CRFStoreArea' id='panel4CRFStoreArea' value='' title=\"Stores\">";
		}
		var crfChainTagStart = baseHTML.indexOf("<!--CRFCHAINFIELD");
		if (crfChainTagStart != -1) {
			var crfChainTagEnd = baseHTML.indexOf(">",crfChainTagStart);
			var crfChainTagStrip = baseHTML.substring(crfChainTagStart,(crfChainTagEnd+1));
			var crfChainHTMLStart = baseHTML.substr(0,crfChainTagStart);
			var crfChainHTMLEnd = baseHTML.substr((crfChainTagEnd+1));
			var crfChainValueStart = crfChainTagStrip.indexOf(" VALUE=");
			if (crfChainValueStart != -1) {
				var crfChainValueEnd = crfChainTagStrip.indexOf("]",crfChainValueStart);
				var crfChainValueTemp = crfChainTagStrip.substring((crfChainValueStart+8),(crfChainValueEnd));
				if (crfChainValueTemp != "") {
					var crfChainValueVar = " placeholder='" + crfChainValueTemp + "'";
				}
				else {
					var crfChainValueVar = "";
				}
			}
			else {
				var crfChainValueVar = " placeholder='Search for Stores'";
			}
			var crfChainRender = "<input type='text' name='panel4CRFChain'" + crfChainValueVar + "' id='panel4CRFChain' class='panel_4_crf_chain panel_4_crf_chain_base' onkeyup='panel4WriteChainList();' title=\"Store Chain\">";
			panel4CRFChainSelect = 1;
			baseHTML = crfChainHTMLStart + crfChainRender + crfChainHTMLEnd;
		}
		else {
			baseHTML += "<input type='hidden' name='panel4CRFChain' id='panel4CRFChain' value='' title=\"Store Chain\">";
		}
		var crfChainListTagStart = baseHTML.indexOf("<!--CRFCHAINLIST");
		if (crfChainListTagStart != -1) {
			var crfChainListTagEnd = baseHTML.indexOf(">",crfChainListTagStart);
			var crfChainListTagStrip = baseHTML.substring(crfChainListTagStart,(crfChainListTagEnd+1));
			var crfChainListHTMLStart = baseHTML.substr(0,crfChainListTagStart);
			var crfChainListHTMLEnd = baseHTML.substr((crfChainListTagEnd+1));
			var crfChainListRender = "<div id='panel4CRFChainList' class='panel_4_crf_chainlist'><\/div>";
			panel4CRFChainSelect = 1;
			baseHTML = crfChainListHTMLStart + crfChainListRender + crfChainListHTMLEnd;
		}
		var crfChainCartTagStart = baseHTML.indexOf("<!--CRFCHAINSELECT");
		if (crfChainCartTagStart != -1) {
			var crfChainCartTagEnd = baseHTML.indexOf(">",crfChainCartTagStart);
			var crfChainCartTagStrip = baseHTML.substring(crfChainCartTagStart,(crfChainCartTagEnd+1));
			var crfChainCartHTMLStart = baseHTML.substr(0,crfChainCartTagStart);
			var crfChainCartHTMLEnd = baseHTML.substr((crfChainCartTagEnd+1));
			var crfChainCartRender = "<div id='panel4CRFChainSelectList' class='panel_4_crf_chainselect'><\/div>";
			panel4CRFChainSelect = 1;
			baseHTML = crfChainCartHTMLStart + crfChainCartRender + crfChainCartHTMLEnd;
		}
		var crfCommentsTagStart = baseHTML.indexOf("<!--CRFCOMMENTS");
		if (crfCommentsTagStart != -1) {
			var crfCommentsTagEnd = baseHTML.indexOf(">",crfCommentsTagStart);
			var crfCommentsTagStrip = baseHTML.substring(crfCommentsTagStart,(crfCommentsTagEnd+1));
			var crfCommentsHTMLStart = baseHTML.substr(0,crfCommentsTagStart);
			var crfCommentsHTMLEnd = baseHTML.substr((crfCommentsTagEnd+1));
			var crfCommentsRender = "";
			var crfCommentsReqStart = crfCommentsTagStrip.indexOf(" REQUIRED");
			if (crfCommentsReqStart != -1) {
				var crfCommentsReqRender = " class='panel_4_crf_comments panel_4_crf_comments_base panel_4_required'";
			}
			else {
				var crfCommentsReqRender = " class='panel_4_crf_comments panel_4_crf_comments_base'";
			}
			var crfCommentsValueStart = crfCommentsTagStrip.indexOf(" VALUE=");
			if (crfCommentsValueStart != -1) {
				var crfCommentsValueEnd = crfCommentsTagStrip.indexOf("]",crfCommentsValueStart);
				var crfCommentsValueTemp = crfCommentsTagStrip.substring((crfCommentsValueStart+8),(crfCommentsValueEnd));
				if (crfCommentsValueTemp != "") {
					var crfCommentsValueVar = " placeholder='" + crfCommentsValueTemp + "'";
				}
				else {
					var crfCommentsValueVar = "";
				}
			}
			else {
				var crfCommentsValueVar = " placeholder='Comments'";
			}
			crfCommentsRender = "<input type='text' name='panel4CRFComments'" + crfCommentsValueVar + " id='panel4CRFComments'" + crfCommentsReqRender + " onkeyup='panel4FieldKeypress(event,\"panel4CRFComments\",0);' title=\"Comments\">";
			baseHTML = crfCommentsHTMLStart + crfCommentsRender + crfCommentsHTMLEnd;
		}
		else {
			baseHTML += "<input type='hidden' name='panel4CRFComments' id='panel4CRFComments' value='' title=\"Comments\">";
		}
		var crfCommentAreaTagStart = baseHTML.indexOf("<!--CRFCOMMENTAREA");
		if (crfCommentAreaTagStart != -1) {
			var crfCommentAreaTagEnd = baseHTML.indexOf(">",crfCommentAreaTagStart);
			var crfCommentAreaTagStrip = baseHTML.substring(crfCommentAreaTagStart,(crfCommentAreaTagEnd+1));
			var crfCommentAreaHTMLStart = baseHTML.substr(0,crfCommentAreaTagStart);
			var crfCommentAreaHTMLEnd = baseHTML.substr((crfCommentAreaTagEnd+1));
			var crfCommentAreaRender = "";
			var crfCommentAreaReqStart = crfCommentAreaTagStrip.indexOf(" REQUIRED");
			if (crfCommentAreaReqStart != -1) {
				var crfCommentAreaReqRender = " class='panel_4_crf_commentarea panel_4_crf_commentarea_base panel_4_required'";
			}
			else {
				var crfCommentAreaReqRender = " class='panel_4_crf_commentarea panel_4_crf_commentarea_base'";
			}
			var crfCommentAreaStart = crfCommentAreaTagStrip.indexOf(" VALUE=");
			if (crfCommentAreaStart != -1) {
				var crfCommentAreaEnd = crfCommentAreaTagStrip.indexOf("]",crfCommentAreaStart);
				var crfCommentAreaTemp = crfCommentAreaTagStrip.substring((crfCommentAreaStart+8),(crfCommentAreaEnd));
				if (crfCommentAreaTemp != "") {
					var crfCommentAreaVar = " placeholder='" + crfCommentAreaTemp + "'";
				}
				else {
					var crfCommentAreaVar = "";
				}
			}
			else {
				var crfCommentAreaVar = "";
			}
			crfCommentAreaRender = "<textarea name='panel4CRFCommentArea' id='panel4CRFCommentArea'" + crfCommentAreaReqRender + crfCommentAreaVar + "><\/textarea>";
			baseHTML = crfCommentAreaHTMLStart + crfCommentAreaRender + crfCommentAreaHTMLEnd;
		}
		else {
			baseHTML += "<input type='hidden' name='panel4CRFCommentArea' id='panel4CRFCommentArea' value='' title=\"Comments\">";
		}
		var crfCityTagStart = baseHTML.indexOf("<!--CRFCITY");
		if (crfCityTagStart != -1) {
			var crfCityTagEnd = baseHTML.indexOf(">",crfCityTagStart);
			var crfCityTagStrip = baseHTML.substring(crfCityTagStart,(crfCityTagEnd+1));
			var crfCityHTMLStart = baseHTML.substr(0,crfCityTagStart);
			var crfCityHTMLEnd = baseHTML.substr((crfCityTagEnd+1));
			var crfCityRender = "";
			var crfCityReqStart = crfCityTagStrip.indexOf(" REQUIRED");
			if (crfCityReqStart != -1 || crf_city_req == 1) {
				var crfCityReqRender = " class='panel_4_crf_city panel_4_crf_city_base panel_4_required'";
				p4LocateIt = 1;
			}
			else {
				var crfCityReqRender = " class='panel_4_crf_city panel_4_crf_city_base'";
			}
			var crfCityValueStart = crfCityTagStrip.indexOf(" VALUE=");
			if (crfCityValueStart != -1) {
				var crfCityValueEnd = crfCityTagStrip.indexOf("]",crfCityValueStart);
				var crfCityValueTemp = crfCityTagStrip.substring((crfCityValueStart+8),(crfCityValueEnd));
				if (crfCityValueTemp != "") {
					var crfCityValueVar = " placeholder='" + crfCityValueTemp + "'";
				}
				else {
					var crfCityValueVar = "";
				}
			}
			else {
				var crfCityValueVar = " placeholder='City'";
			}
			var crfCityMatchStart = crfCityTagStrip.indexOf(" MATCH");
			if (crfCityMatchStart != -1) {
				crfCityValueVar = " value='" + document.getElementById('revCodeCity').value + "'";
			}
			crfCityRender = "<input type='text' name='panel4CRFCity' id='panel4CRFCity'" + crfCityValueVar + crfCityReqRender + " onkeyup='panel4FieldKeypress(event,\"panel4CRFCity\",0);' title=\"City\">";
			baseHTML = crfCityHTMLStart + crfCityRender + crfCityHTMLEnd;
		}
		else {
			baseHTML += "<input type='hidden' name='panel4CRFCity' id='panel4CRFCity' value='' title=\"City\">";
		}
		var crfStateTagStart = baseHTML.indexOf("<!--CRFSTATE");
		if (crfStateTagStart != -1) {
			var crfStateTagEnd = baseHTML.indexOf(">",crfStateTagStart);
			var crfStateTagStrip = baseHTML.substring(crfStateTagStart,(crfStateTagEnd+1));
			var crfStateHTMLStart = baseHTML.substr(0,crfStateTagStart);
			var crfStateHTMLEnd = baseHTML.substr((crfStateTagEnd+1));
			var crfStateRender = "";
			var crfStateReqStart = crfStateTagStrip.indexOf(" REQUIRED");
			if (crfStateReqStart != -1 || crf_state_req == 1) {
				var crfStateReqRender = " class='panel_4_crf_state panel_4_crf_state_base panel_4_required'";
				p4LocateIt = 1;
			}
			else {
				var crfStateReqRender = " class='panel_4_crf_state panel_4_crf_state_base'";
			}
			var crfStateValueStart = crfStateTagStrip.indexOf(" VALUE=");
			if (crfStateValueStart != -1) {
				var crfStateValueEnd = crfStateTagStrip.indexOf("]",crfStateValueStart);
				var crfStateValueTemp = crfStateTagStrip.substring((crfStateValueStart+8),(crfStateValueEnd));
				if (crfStateValueTemp != "") {
					var crfStateValueVar = " placeholder='" + crfStateValueTemp + "'";
				}
				else {
					var crfStateValueVar = "";
				}
			}
			else {
				var crfStateValueVar = " placeholder='State'";
			}
			var crfStateMatchStart = crfStateTagStrip.indexOf(" MATCH");
			if (crfStateMatchStart != -1) {
				crfStateValueVar = " value='" + document.getElementById('revCodeState').value + "'";
			}
			crfStateRender = "<input type='text' name='panel4CRFState' id='panel4CRFState'" + crfStateValueVar + crfStateReqRender + " onkeyup='panel4FieldKeypress(event,\"panel4CRFState\",0);' title=\"State\">";
			baseHTML = crfStateHTMLStart + crfStateRender + crfStateHTMLEnd;
		}
		else {
			baseHTML += "<input type='hidden' name='panel4CRFState' id='panel4CRFState' value='' title=\"State\">";
		}
		var crfZipTagStart = baseHTML.indexOf("<!--CRFZIP");
		if (crfZipTagStart != -1) {
			var crfZipTagEnd = baseHTML.indexOf(">",crfZipTagStart);
			var crfZipTagStrip = baseHTML.substring(crfZipTagStart,(crfZipTagEnd+1));
			var crfZipHTMLStart = baseHTML.substr(0,crfZipTagStart);
			var crfZipHTMLEnd = baseHTML.substr((crfZipTagEnd+1));
			var crfZipRender = "";
			var crfZipReqStart = crfZipTagStrip.indexOf(" REQUIRED");
			if (crfZipReqStart != -1 || crf_zip_req == 1) {
				var crfZipReqRender = " class='panel_4_crf_zip panel_4_crf_zip_base panel_4_required'";
				p4LocateIt = 1;
			}
			else {
				var crfZipReqRender = " class='panel_4_crf_zip panel_4_crf_zip_base'";
			}
			var crfZipValueStart = crfZipTagStrip.indexOf(" VALUE=");
			if (crfZipValueStart != -1) {
				var crfZipValueEnd = crfZipTagStrip.indexOf("]",crfZipValueStart);
				var crfZipValueTemp = crfZipTagStrip.substring((crfZipValueStart+8),(crfZipValueEnd));
				if (crfZipValueTemp != "") {
					var crfZipValueVar = " placeholder='" + crfZipValueTemp + "'";
				}
				else {
					var crfZipValueVar = "";
				}
			}
			else {
				var crfZipValueVar = " placeholder='Zip'";
			}
			var crfZipMatchStart = crfZipTagStrip.indexOf(" MATCH");
			if (crfZipMatchStart != -1) {
				crfZipValueVar = " value='" + document.getElementById('revCodeZip').value + "'";
			}
			crfZipRender = "<input type='text' name='panel4CRFZip' id='panel4CRFZip'" + crfZipValueVar + crfZipReqRender + " onkeyup='panel4FieldKeypress(event,\"panel4CRFZip\",0);' title=\"Postal Code\">";
			baseHTML = crfZipHTMLStart + crfZipRender + crfZipHTMLEnd;
		}
		else {
			baseHTML += "<input type='hidden' name='panel4CRFZip' id='panel4CRFZip' value='' title=\"Postal Code\">";
		}
		var crfCountryTagStart = baseHTML.indexOf("<!--CRFCOUNTRY");
		if (crfCountryTagStart != -1) {
			var crfCountryTagEnd = baseHTML.indexOf(">",crfCountryTagStart);
			var crfCountryTagStrip = baseHTML.substring(crfCountryTagStart,(crfCountryTagEnd+1));
			var crfCountryHTMLStart = baseHTML.substr(0,crfCountryTagStart);
			var crfCountryHTMLEnd = baseHTML.substr((crfCountryTagEnd+1));
			var crfCountryRender = "";
			var crfCountryValueStart = crfCountryTagStrip.indexOf(" VALUE=");
			if (crfCountryValueStart != -1) {
				var crfCountryValueEnd = crfCountryTagStrip.indexOf("]",crfCountryValueStart);
				var crfCountryValueVal = crfCountryTagStrip.substring((crfCountryValueStart+8),(crfCountryValueEnd));
			}
			else {
				var crfCountryValueVal = "SELECT COUNTRY";
			}
			var crfCountryReqStart = crfCountryTagStrip.indexOf(" REQUIRED");
			if (crfCountryReqStart != -1 || crf_country_req == 1) {
				var crfCountryReqRender = " class='panel_4_crf_country panel_4_crf_country_base panel_4_required'";
			}
			else {
				var crfCountryReqRender = " class='panel_4_crf_country panel_4_crf_country_base'";
			}
			var crfCountryItalicStart = crfCountryTagStrip.indexOf(" FNTAW=");
			if (crfCountryItalicStart != -1) {
				var crfCountryItalicEnd = crfCountryTagStrip.indexOf("]",crfCountryItalicStart);
				crfCountryItalicVar = "<i class='fa " + crfCountryTagStrip.substring((crfCountryItalicStart+8),(crfCountryItalicEnd)) + "'><\/i>";
			}
			else {
				crfCountryItalicVar = "";
			}
			var crfCountryDefault = "";
			var crfCountryMatchStart = crfCountryTagStrip.indexOf(" MATCH");
			if (crfCountryMatchStart != -1) {
				for (q=0; q<countryArray.length; q++) {
					if (countryArray[q][2] == document.getElementById('revCodeCountry').value || countryArray[q][3] == document.getElementById('revCodeCountry').value) {
						crfCountryValueVal = countryArray[q][1];
						crfCountryDefault = countryArray[q][2];
					}
				}
			}
			crfCountryRender += "<div id='panel4CountryDivShell' class='panel_4_country_div_shell'><div class='panel_4_country_div_filter_arrow'><div class='panel_4_country_div_filter panel_4_country_div_filter_base panel_4_country_div_filter_base_off'";
			if (hoverState==1) {
				crfCountryRender += " onmouseover='genericButtonOver(\"panel_4_country_div_filter\",\"panel_4_country_div_filter_base\");' onfocus='genericButtonOver(\"panel_4_country_div_filter\",\"panel_4_country_div_filter_base\");' onmouseout='genericButtonOut(\"panel_4_country_div_filter\",\"panel_4_country_div_filter_base\");' onblur='genericButtonOut(\"panel_4_country_div_filter\",\"panel_4_country_div_filter_base\");'";
			}
			crfCountryRender += " onclick='$(\".panel_4_country_div_filter_slider\").toggle();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){$(\".panel_4_country_div_filter_slider\").toggle();}' tabindex='0' title=\"" + crfCountryValueVal + "\"><div class='panel_4_country_div_filter_text'><span id='panel4CountryDivText'>" + crfCountryValueVal + "<\/span>" + crfCountryItalicVar + "<\/div><\/div><\/div><div class='panel_4_country_div_filter_slider panel_close_me' style='display:none;'><div class='panel_4_country_div_filter_liner'>";
			var countryUp = 0;
			if(gLog==1){console.log("CRFCOUNTRY - countryArray.length: " , countryArray.length);}
			for (w=0; w<countryArray.length; w++) {
				if (countryArray[w][5] == 2) {
					countryUp = 1;
					crfCountryRender += "<div class='panel_4_country_div_filter_item_" + countryArray[w][0] + " panel_4_country_div_filter_item panel_4_country_div_filter_item_off'";
					if (hoverState==1) {
						crfCountryRender += " onmouseover='genericButtonOver(\"panel_4_country_div_filter_item_" + countryArray[w][0] + "\",\"panel_4_country_div_filter_item\");' onfocus='genericButtonOver(\"panel_4_country_div_filter_item_" + countryArray[w][0] + "\",\"panel_4_country_div_filter_item\");' onmouseout='genericButtonOut(\"panel_4_country_div_filter_item_" + countryArray[w][0] + "\",\"panel_4_country_div_filter_item\");' onblur='genericButtonOut(\"panel_4_country_div_filter_item_" + countryArray[w][0] + "\",\"panel_4_country_div_filter_item\");'";
					}
					crfCountryRender += " onclick='panel4CountrySelect(" + w + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4CountrySelect(" + w + ");}' tabindex='0' title=\"" + countryArray[w][1] + "\">" + countryArray[w][1] + "<\/div>";
				}
			}
			if (countryUp == 1) {
				crfCountryRender += "<div class='panel_4_country_div_filter_item_0 panel_4_country_div_filter_item panel_4_country_div_filter_item_line'>------------------<\/div>";
			}
			for (w=0; w<countryArray.length; w++) {
				if (countryArray[w][5] == 1) {
					countryUp = 1;
					crfCountryRender += "<div class='panel_4_country_div_filter_item_" + countryArray[w][0] + " panel_4_country_div_filter_item panel_4_country_div_filter_item_off'";
					if (hoverState==1) {
						crfCountryRender += " onmouseover='genericButtonOver(\"panel_4_country_div_filter_item_" + countryArray[w][0] + "\",\"panel_4_country_div_filter_item\");' onfocus='genericButtonOver(\"panel_4_country_div_filter_item_" + countryArray[w][0] + "\",\"panel_4_country_div_filter_item\");' onmouseout='genericButtonOut(\"panel_4_country_div_filter_item_" + countryArray[w][0] + "\",\"panel_4_country_div_filter_item\");' onblur='genericButtonOut(\"panel_4_country_div_filter_item_" + countryArray[w][0] + "\",\"panel_4_country_div_filter_item\");'";
					}
					crfCountryRender += " onclick='panel4CountrySelect(" + w + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4CountrySelect(" + w + ");}' tabindex='0' title=\"" + countryArray[w][1] + "\">" + countryArray[w][1] + "<\/div>";
				}
			}
			crfCountryRender += "<\/div><\/div><\/div>";
			crfCountryRender += "<input type='hidden' name='panel4CRFCountry' id='panel4CRFCountry'" + crfCountryReqRender + " value='" + crfCountryDefault + "' title=\"Country\">";
			baseHTML = crfCountryHTMLStart + crfCountryRender + crfCountryHTMLEnd;
		}
		else {
			baseHTML += "<input type='hidden' name='panel4CRFCountry' id='panel4CRFCountry' value='' title=\"Country\">";
		}
		var crfReqCheckTagStart = baseHTML.indexOf("<!--CRFREQCHECK");
		if (crfReqCheckTagStart != -1) {
			var crfReqCheckTagEnd = baseHTML.indexOf(">",crfReqCheckTagStart);
			var crfReqCheckTagStrip = baseHTML.substring(crfReqCheckTagStart,(crfReqCheckTagEnd+1));
			var crfReqCheckHTMLStart = baseHTML.substr(0,crfReqCheckTagStart);
			var crfReqCheckHTMLEnd = baseHTML.substr((crfReqCheckTagEnd+1));
			var crfReqCheckRender = "";
			var crfReqCheckValueStart = crfReqCheckTagStrip.indexOf(" VALUE=");
			var crfReqCheckValueEnd = crfReqCheckTagStrip.indexOf("]");
			if (crfReqCheckValueStart != -1) {
				crfReqCheckValueVar = crfReqCheckTagStrip.substring((crfReqCheckValueStart+8),(crfReqCheckValueEnd));
			}
			else {
				crfReqCheckValueVar = "ACCEPT";
			}
			crfReqCheckRender = "<div id='panel4CRFReqCheck' class='panel_4_crf_reqcheck panel_4_crf_reqcheck_off' onclick='panel4ReqCheck();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4ReqCheck();}' tabindex='0' title=\"" + crfReqCheckValueVar + "\">" + crfReqCheckValueVar + "<\/div>";
			baseHTML = crfReqCheckHTMLStart + crfReqCheckRender + crfReqCheckHTMLEnd;
		}
		var prodListTagStart = baseHTML.indexOf("<!--CRFPRODLIST");
		if (prodListTagStart != -1) {
			var prodListTagEnd = baseHTML.indexOf(">",prodListTagStart);
			var prodListTagStrip = baseHTML.substring(prodListTagStart,(prodListTagEnd+1));
			if(gLog==1){console.log("CRFPRODLIST: prodListTagStrip" , prodListTagStrip);}
			var baseProdListHTMLStart = baseHTML.substr(0,prodListTagStart);
			var baseProdListHTMLEnd = baseHTML.substr((prodListTagEnd+1));
			var prodListTagSortStart = prodListTagStrip.indexOf(" SORT=");
			if (prodListTagSortStart != -1) {
				var prodListTagSortEnd = prodListTagStrip.indexOf("]",prodListTagSortStart);
				panel4CRFProductSort = prodListTagStrip.substring((prodListTagSortStart+7),(prodListTagSortEnd));
			}
			var crfIncDesc = 0;
			var prodListTagDescStart = prodListTagStrip.indexOf(" DESC");
			if (prodListTagDescStart != -1) {
				var prodListTagSortEnd = prodListTagStrip.indexOf("]",prodListTagSortStart);
				var crfIncDesc = 1;
			}
			if (prodDisplayArray.length) {
				ccreqProdArray.length = 0;
				for (y=0;y<prodDisplayArray.length;y++) {
					ccreqProdArray[y] = prodDisplayArray[y];
				}
				var pfCount = 0;
				var prodListHTML = "";
				var compCrud = document.getElementById("PROD").value.split(",");
				var fullCrud = document.getElementById("FULLPROD").value.split(",");
				if(gLog==1){console.log("CRFPRODLIST: ccreqProdArray" , ccreqProdArray);}
				if (panel4CRFProductSort == "FAMILY") {
					for (f=0; f<famArray.length; f++) {
						var famFoundCat = 0;
						for (w=0; w<catArray.length; w++) {
							if (famArray[f][0] == catArray[w][2]) {
								if (famFoundCat == 0) {
									famFoundCat++;
									prodListHTML += "<div id='panel4CRFFamilyName" + famArray[f][0] + "' class='panel_4_crf_family_name'>" + famArray[f][1] + "<\/div>";
								}
								var catFoundProd = 0;
								for (x=0; x<ccreqProdArray.length; x++) {
									if (ccreqProdArray[x][8] == catArray[w][0]) {
										if (catFoundProd == 0) {
											catFoundProd++;
											prodListHTML += "<div id='panel4CRFCategoryName" + catArray[w][0] + "' class='panel_4_crf_category_name'>" + catArray[w][1] + "<\/div>";
										}
										var prodNameTagLink = " style='cursor:pointer;' onclick='panel4CRFProdSelect(" + ccreqProdArray[x][0] + ", \"" + ccreqProdArray[x][1] + "\", \"panel4CRFProductName" + ccreqProdArray[x][0] + "\", \"panel_4_crf_product_name\", "+x+");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4CRFProdSelect(" + ccreqProdArray[x][0] + ", \"" + ccreqProdArray[x][1] + "\", \"panel4CRFProductName" + ccreqProdArray[x][0] + "\", \"panel_4_crf_product_name\", "+x+");}'";
										if (hoverState==1) {
											prodNameTagLink += " onmouseover='panel4CRFProdMouseOver(\"panel4CRFProductName" + ccreqProdArray[x][0] + "\", \"panel_4_crf_product_name\", "+x+");' onfocus='panel4CRFProdMouseOver(\"panel4CRFProductName" + ccreqProdArray[x][0] + "\", \"panel_4_crf_product_name\", "+x+");' onmouseout='panel4CRFProdMouseOut(\"panel4CRFProductName" + ccreqProdArray[x][0] + "\", \"panel_4_crf_product_name\", "+x+");' onblur='panel4CRFProdMouseOut(\"panel4CRFProductName" + ccreqProdArray[x][0] + "\", \"panel_4_crf_product_name\", "+x+");'";
										}
										if (compCrud.length == fullCrud.length) {
											var thisProdShit = "0";
											ccreqProdArray[x][9] = 0;
										}
										else {
											var thisProdShit = ccreqProdArray[x][9];
										}
										if (thisProdShit == "1") {
											var baseProductStyle = " panel_4_crf_product_name_on";
										}
										else {
											var baseProductStyle = " panel_4_crf_product_name_off";
										}
										if (crfIncDesc == 1) {
											var thisDescVal = " <span class='panel_4_crf_product_desc'>" + ccreqProdArray[x][3] + "<\/span>";
										}
										else {
											var thisDescVal = "";
										}
										prodListHTML += "<div id='panel4CRFProductName" + ccreqProdArray[x][0] + "' class='panel_4_crf_product_name " + baseProductStyle + "'" + prodNameTagLink + " tabindex='0' title=\"" + ccreqProdArray[x][2] + "\">" + ccreqProdArray[x][2] + thisDescVal + "<\/div>";
									}
								}
							}
						}
					}
				}
				else if (panel4CRFProductSort == "CATEGORY") {
					for (w=0; w<catArray.length; w++) {
						var catFoundProd = 0;
						for (x=0; x<ccreqProdArray.length; x++) {
							if (ccreqProdArray[x][8] == catArray[w][0]) {
								if (catFoundProd == 0) {
									catFoundProd++;
									prodListHTML += "<div id='panel4CRFCategoryName" + catArray[w][0] + "' class='panel_4_crf_category_name'>" + catArray[w][1] + "<\/div>";
								}
								var prodNameTagLink = " style='cursor:pointer;' onclick='panel4CRFProdSelect(" + ccreqProdArray[x][0] + ", \"" + ccreqProdArray[x][1] + "\", \"panel4CRFProductName" + ccreqProdArray[x][0] + "\", \"panel_4_crf_product_name\", "+x+");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4CRFProdSelect(" + ccreqProdArray[x][0] + ", \"" + ccreqProdArray[x][1] + "\", \"panel4CRFProductName" + ccreqProdArray[x][0] + "\", \"panel_4_crf_product_name\", "+x+");}'";
								if (hoverState==1) {
									prodNameTagLink += " onmouseover='panel4CRFProdMouseOver(\"panel4CRFProductName" + ccreqProdArray[x][0] + "\", \"panel_4_crf_product_name\", "+x+");' onfocus='panel4CRFProdMouseOver(\"panel4CRFProductName" + ccreqProdArray[x][0] + "\", \"panel_4_crf_product_name\", "+x+");' onmouseout='panel4CRFProdMouseOut(\"panel4CRFProductName" + ccreqProdArray[x][0] + "\", \"panel_4_crf_product_name\", "+x+");' onblur='panel4CRFProdMouseOut(\"panel4CRFProductName" + ccreqProdArray[x][0] + "\", \"panel_4_crf_product_name\", "+x+");'";
								}
								if (compCrud.length == fullCrud.length) {
									var thisProdShit = "0";
									ccreqProdArray[x][9] = 0;
								}
								else {
									var thisProdShit = ccreqProdArray[x][9];
								}
								if (thisProdShit == "1") {
									var baseProductStyle = " panel_4_crf_product_name_on";
								}
								else {
									var baseProductStyle = " panel_4_crf_product_name_off";
								}
								if (crfIncDesc == 1) {
									var thisDescVal = " <span class='panel_4_crf_product_desc'>" + ccreqProdArray[x][3] + "<\/span>";
								}
								else {
									var thisDescVal = "";
								}
								prodListHTML += "<div id='panel4CRFProductName" + ccreqProdArray[x][0] + "' class='panel_4_crf_product_name " + baseProductStyle + "'" + prodNameTagLink + " tabindex='0' title=\"" + ccreqProdArray[x][2] + "\">" + ccreqProdArray[x][2] + thisDescVal + "<\/div>";
							}
						}
					}
				}
				else if (panel4CRFProductSort == "CATLIST") {
					if (panel4CRFProdReq == 1) {
						var theCatShit = " panel_4_crf_category_name_off";
					}
					else {
						var theCatShit = " panel_4_crf_category_name_on";
					}
					for (w=0; w<catArray.length; w++) {
						prodListHTML += "<div id='panel4CRFCategoryName" + catArray[w][0] + "' class='grub panel_4_crf_category_name" + theCatShit + "' onclick='panel4CRFCatSelect(" + catArray[w][0] + ","+w+");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4CRFCatSelect(" + catArray[w][0] + ","+w+");}'";
						if (hoverState==1) {
							prodListHTML += " onmouseover='panel4CRFCatMouseOver(\"panel4CRFCategoryName" + catArray[w][0] + "\", \"panel_4_crf_category_name\", "+w+");' onfocus='panel4CRFCatMouseOver(\"panel4CRFCategoryName" + catArray[w][0] + "\", \"panel_4_crf_category_name\", "+w+");' onmouseout='panel4CRFCatMouseOut(\"panel4CRFCategoryName" + catArray[w][0] + "\", \"panel_4_crf_category_name\", "+w+");' onblur='panel4CRFCatMouseOut(\"panel4CRFCategoryName" + catArray[w][0] + "\", \"panel_4_crf_category_name\", "+w+");'";
						}
						prodListHTML += " tabindex='0' title=\"" + catArray[w][1] + "\">" + catArray[w][1] + "<\/div>";
					}
				}
				else if (panel4CRFProductSort == "PRODUCT") {
					for (x=0; x<ccreqProdArray.length; x++) {
						var prodNameTagLink = " style='cursor:pointer;' onclick='panel4CRFProdSelect(" + ccreqProdArray[x][0] + ", \"" + ccreqProdArray[x][1] + "\", \"panel4CRFProductName" + ccreqProdArray[x][0] + "\", \"panel_4_crf_product_name\", "+x+");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4CRFProdSelect(" + ccreqProdArray[x][0] + ", \"" + ccreqProdArray[x][1] + "\", \"panel4CRFProductName" + ccreqProdArray[x][0] + "\", \"panel_4_crf_product_name\", "+x+");}'";
						if (hoverState==1) {
							prodNameTagLink += " onmouseover='panel4CRFProdMouseOver(\"panel4CRFProductName" + ccreqProdArray[x][0] + "\", \"panel_4_crf_product_name\", "+x+");' onfocus='panel4CRFProdMouseOver(\"panel4CRFProductName" + ccreqProdArray[x][0] + "\", \"panel_4_crf_product_name\", "+x+");' onmouseout='panel4CRFProdMouseOut(\"panel4CRFProductName" + ccreqProdArray[x][0] + "\", \"panel_4_crf_product_name\", "+x+");' onblur='panel4CRFProdMouseOut(\"panel4CRFProductName" + ccreqProdArray[x][0] + "\", \"panel_4_crf_product_name\", "+x+");'";
						}
						if (compCrud.length == fullCrud.length) {
							var thisProdShit = "0";
							ccreqProdArray[x][9] = 0;
						}
						else {
							var thisProdShit = ccreqProdArray[x][9];
						}
						if (thisProdShit == 1) {
							var baseProductStyle = " panel_4_crf_product_name_on";
						}
						else {
							var baseProductStyle = " panel_4_crf_product_name_off";
						}
						if (crfIncDesc == 1) {
							var thisDescVal = " <span class='panel_4_crf_product_desc'>" + ccreqProdArray[x][3] + "<\/span>";
						}
						else {
							var thisDescVal = "";
						}
						prodListHTML += "<div id='panel4CRFProductName" + ccreqProdArray[x][0] + "' class='panel_4_crf_product_name" + baseProductStyle + "'" + prodNameTagLink + " tabindex='0' title=\"" + ccreqProdArray[x][2] + "\">" + ccreqProdArray[x][2] + thisDescVal + "<\/div>";
					}
				}
				baseHTML = baseProdListHTMLStart + prodListHTML + "<input type='hidden' name='panel4CRFProdValues' id='panel4CRFProdValues' value='' title=\"Products\">" + baseProdListHTMLEnd;
			}
		}
		else {
			baseHTML += "<input type='hidden' name='panel4CRFProdValues' id='panel4CRFProdValues' value='' title=\"Products\">";
		}
		var crfSubmitTagStart = baseHTML.indexOf("<!--CRFSUBMIT");
		if (crfSubmitTagStart != -1) {
			var crfSubmitTagEnd = baseHTML.indexOf(">",crfSubmitTagStart);
			var crfSubmitTagStrip = baseHTML.substring(crfSubmitTagStart,(crfSubmitTagEnd+1));
			var crfSubmitHTMLStart = baseHTML.substr(0,crfSubmitTagStart);
			var crfSubmitHTMLEnd = baseHTML.substr((crfSubmitTagEnd+1));
			var crfSubmitRender = "";
			var crfSubmitValueStart = crfSubmitTagStrip.indexOf(" VALUE=");
			var crfSubmitValueEnd = crfSubmitTagStrip.indexOf("]");
			if (crfSubmitValueStart != -1) {
				crfSubmitValueVar = crfSubmitTagStrip.substring((crfSubmitValueStart+8),(crfSubmitValueEnd));
			}
			else {
				crfSubmitValueVar = "NEXT";
			}
			crfSubmitRender += "<div id='panel4CRFSubmit' class='panel_4_crf_submit panel_4_crf_submit_off'";
			if (hoverState==1) {
				crfSubmitRender += " onmouseover='panel4ButtonHover(\"panel4CRFSubmit\",\"panel_4_crf_submit\",1);' onfocus='panel4ButtonHover(\"panel4CRFSubmit\",\"panel_4_crf_submit\",1);' onmouseout='panel4ButtonHover(\"panel4CRFSubmit\",\"panel_4_crf_submit\",0);' onblur='panel4ButtonHover(\"panel4CRFSubmit\",\"panel_4_crf_submit\",0);'";
			}
			crfSubmitRender += " onclick='panel4CRFSubmit();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4CRFSubmit();}' tabindex='0' title=\"" + crfSubmitValueVar + "\">" + crfSubmitValueVar + "<\/div>";
			baseHTML = crfSubmitHTMLStart + crfSubmitRender + crfSubmitHTMLEnd;
		}
		var multiMapSearchOn = 1;
		while (multiMapSearchOn == 1) {
			var multiMapTagStart = baseHTML.indexOf("<!--MULTIMAP");
			if (multiMapTagStart != -1) {
				var multiMapTagEnd = baseHTML.indexOf(">",multiMapTagStart);
				var multiMapTagStrip = baseHTML.substring(multiMapTagStart,(multiMapTagEnd+1));
				var baseMultiMapHTMLStart = baseHTML.substr(0,multiMapTagStart);
				var baseMultiMapHTMLEnd = baseHTML.substr((multiMapTagEnd+1));
				baseHTML = baseMultiMapHTMLStart + "<div id='panel4MultiMap' class='panel_4_multi_map'><\/div>" + baseMultiMapHTMLEnd;
			}
			else {
				multiMapSearchOn = 0;
			}
		}
		var pecHasEComm = 0;
		if (PEC == 1) {
			var disPECP = PECPROD.split(",");
			var idPECP = [];
			for (g=0; g<disPECP.length; g++) {
				for (v=0; v<prodDisplayArray.length; v++) {
					if (prodDisplayArray[v][1] == disPECP[g]) {
						idPECP.push(prodDisplayArray[v][0]);
						break;
					}
				}
			}
			for (j=0; j<idPECP.length; j++) {
				for (p=0; p<onretProdArray.length; p++) {
					if (onretProdArray[p][2] == idPECP[j] && onretProdArray[p][10] == 1 && (ecOutStock >= 1 || onretProdArray[p][7] != 2)) {
						pecHasEComm++;
						break;
					}
				}
			}
			for (q=0;q<onretClientArray.length; q++) {
				if (onretClientArray[q][10] == 1) {
					pecHasEComm++;
					break;
				}
			}
		}
		if (PEC == 0 || (PEC == 1 && pecHasEComm == 0)) {
			document.getElementById('panel4templates').innerHTML = baseHTML;
		}
		if (document.getElementById('panel4MultiMap')) {
			setTimeout(function(){
				panel4DrawMultiMap();
			}, 300);
		}
		if (document.getElementById('panel4CCFormShell')) {
			setTimeout(function(){
				panel4WriteCCForm();
			}, 300);
		}
		if (panel4CRFChainSelect == 1) {
			setTimeout(function(){
				panel4WriteChainList();
			}, 300);
		}
		if (document.getElementById('panel4ProdShopCartShell')) {
			panel4WriteProdCart();
		}
		if (cpP4 != 0 && cpWritten == 0) {
			cpWrite();
		}
		if (cpsP4 != 0 && cpsWritten == 0) {
			cpSmallWrite();
		}
		if (cPanelOp == 1) {
			if (document.getElementById("PROD").value.length == document.getElementById("FULLPROD").value.length || document.getElementById("PROD").value.length == "") {
				if(gLog==1){console.log("panel4Load - controlPanelClearCart");}
				controlPanelClearCart();
			}
		}
		if (ecommPos != 0) {
			if (ecommView == 1 && document.getElementById("PROD").value.indexOf(",") == -1) {
				panel2WriteECommList();
			}
			else {
				showOnRet();
			}
		}
		else if (onretOn == 2) {
			showOnlineRetailers();
		}
		if (document.getElementById('panel4AddressField')) {
			if (document.getElementById('street').value != "") {
				if($('#panel4AddressField').hasClass('enforce_blank')){}else{
					document.getElementById('panel4AddressField').value = document.getElementById('street').value;
				}
			}
			else if (document.getElementById('revCodeZip').value != "") {
				if($('#panel4AddressField').hasClass('enforce_blank')){}
				else{
					document.getElementById('panel4AddressField').value = document.getElementById('revCodeZip').value;
				}
			}
		}
		if (document.getElementById('panel4CityField')) {
			if (document.getElementById('city').value != "") {
				document.getElementById('panel4CityField').value = document.getElementById('city').value;
			}
		}
		if (document.getElementById('panel4StateField')) {
			if (document.getElementById('state').value != "") {
				document.getElementById('panel4StateField').value = document.getElementById('state').value;
			}
		}
		if (document.getElementById('panel4ZipField')) {
			if (document.getElementById('zip').value != "") {
				document.getElementById('panel4ZipField').value = document.getElementById('zip').value;
			}
		}
		if (stateExclude != "") {
			var stExArr = stateExclude.split(",");
			var hideState = 0;
			for (u=0;u<stExArr.length;u++) {
				if (document.getElementById('revCodeState').value.toUpperCase() == stExArr[u].toUpperCase()) {
					hideState = 1;
					break;
				}
			}
			if (hideState == 1) {
				$('.state_exclude_off').hide();
				$('.state_exclude_on').show();
			}
			else {
				$('.state_exclude_off').show();
				$('.state_exclude_on').hide();
			}
		}
		panelSwitch(whatPanelUp,"panel4",transNext);
		if (document.getElementById('panel4CRFProdValues')) {
			var newProdArray = [];
			for (x=0;x<ccreqProdArray.length;x++) {
				if (ccreqProdArray[x][9] == 1) {
					newProdArray.push(ccreqProdArray[x][1]);
				}
			}
			document.getElementById('panel4CRFProdValues').value = newProdArray.toString();
		}
		if (document.getElementById('panel4ScopeSelect')) {
			for (scopeIncr=0; scopeIncr<document.getElementById('panel4ScopeSelect').length; scopeIncr++) {
				if (document.getElementById('panel4ScopeSelect').options[scopeIncr].value == document.getElementById('scope').value) {
					document.getElementById('panel4ScopeSelect').options[scopeIncr].selected = true;
					document.getElementById('panel4ScopeField').value = document.getElementById('scope').value;
					break;
				}
			}
		}
		if (document.getElementById('panel4DistanceSelect')) {
			for (distanceIncr=0; distanceIncr<document.getElementById('panel4DistanceSelect').length; distanceIncr++) {
				if (document.getElementById('panel4DistanceSelect').options[distanceIncr].value == document.getElementById('distance').value) {
					document.getElementById('panel4DistanceSelect').options[distanceIncr].selected = true;
					document.getElementById('panel4DistanceField').value = document.getElementById('distance').value;
					break;
				}
			}
		}
		if (document.getElementById('panel4ResultsSelect')) {
			for (resultsIncr=0; resultsIncr<document.getElementById('panel4ResultsSelect').length; resultsIncr++) {
				if (document.getElementById('panel4ResultsSelect').options[resultsIncr].value == document.getElementById('results').value) {
					document.getElementById('panel4ResultsSelect').options[resultsIncr].selected = true;
					document.getElementById('panel4ResultsField').value = document.getElementById('results').value;
					break;
				}
			}
		}
		if (document.getElementById('panel4SortSelect')) {
			for (sortIncr=0; sortIncr<document.getElementById('panel4SortSelect').length; sortIncr++) {
				if (document.getElementById('panel4SortSelect').options[sortIncr].value == document.getElementById('sort').value) {
					document.getElementById('panel4SortSelect').options[sortIncr].selected = true;
					document.getElementById('panel4SortField').value = document.getElementById('sort').value;
					break;
				}
			}
		}
		setTimeout(function() {
			if(document.getElementById('panel2templates')){document.getElementById('panel2templates').innerHTML='';}
			if(document.getElementById('panel2')){document.getElementById('panel2').style.display='none';}
			if(document.getElementById('panel3templates')){document.getElementById('panel3templates').innerHTML='';}
			if(document.getElementById('panel3')){document.getElementById('panel3').style.display='none';}
			if(document.getElementById('panel5templates')){document.getElementById('panel5templates').innerHTML='';}
			if(document.getElementById('panel5')){document.getElementById('panel5').style.display='none';}
		},350);
	}
	$(".panel_close_me").hide();
	whatPanelUp = "panel4";
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
	if (trackVal == 1 && allOnOne == 0) {
		setTimeout(function(){
			var locTrackArr = new Array(2,3);
			$.post(controlURL + "tracktest.php", {
				CB: noCache,
				TLL: tlVal,
				A1: trackVal,
				UP1: "PANEL4",
				UC1: "HIT",
				UCS1: "",
				US1: "SUCCESS",
				USRC1: version,
				CLIENT: coreClient,
				ITER: iteration,
				DEVICE: deviceType,
				REF: referer,
				SESSID: daSESSID,
				LOCATION: '{"compiled_location":"' + document.getElementById('addressCompile').value.replace(/"/g, '') + '","latitude":"' + parseFloat(document.getElementById('LA').value).toFixed(5) + '","longitude":"' + parseFloat(document.getElementById('LO').value).toFixed(5) + '","city":"' + document.getElementById('revCodeCity').value.replace(/"/g, '') + '","state":"' + document.getElementById('revCodeState').value + '","zip":"' + document.getElementById('revCodeZip').value + '","country":"' + document.getElementById('revCodeCountry').value + '","us_code":"' + document.getElementById('revCodeUS').value + '"}',
				PLIST: compProdVal,
				PSET: prodSetVal,
				TRACK: locTrackArr.toString(","),
				DUTV: dutv
				}, function(data){
					if(gLog==1){console.log("panel4Load - tracktest: " , JSON.parse(data));}
				}
			);
		},1000);
	}
	else if (trackVal == 2 && allOnOne == 0) {
		setTimeout(function(){
			var sendObj = setTrackObj();
			sendObj['TRK'] = "2,3";
			sendObj['RQF'] = "panel4Load";
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
			sendTrackObj(sendObj);
		},300);
	}
	if (pmReady == 0) {
		pmReady = 1;
		if (enableResize == 2) {
			parent.postMessage("LOAD:1",refurl);
		}
	}
	prodOn = 0;
	for (q=0; q<prodDisplayArray.length; q++) {
		if (prodDisplayArray[q][9] == 1) {
			prodOn++;
		}
	}
	if(gLog==1){console.log("panel4Load - Start prodCartArray.length / prodDisplayArray[9] = ",prodCartArray.length,prodOn);}
}
function panel4FamImgReplace(whatState,whatID) {
	if (whatState == 1) {
		if (document.getElementById('panel4FamilyBigImgDivBack'+whatID) && $(".panel_4_family_big_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_4_family_big_img_div_over_"+whatID).show();
			$(".panel_4_family_big_img_div_back_"+whatID).removeClass('panel_4_family_big_img_div_back_off');
			$(".panel_4_family_big_img_div_back_"+whatID).addClass('panel_4_family_big_img_div_back_on');
		}
		if (document.getElementById('panel4FamilySmImgDivBack'+whatID) && $(".panel_4_family_sm_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_4_family_sm_img_div_over_"+whatID).show();
			$(".panel_4_family_sm_img_div_back_"+whatID).removeClass('panel_4_family_sm_img_div_back_off');
			$(".panel_4_family_sm_img_div_back_"+whatID).addClass('panel_4_family_sm_img_div_back_on');
		}
	}
	else {
		if (document.getElementById('panel4FamilyBigImgDivBack'+whatID) && $(".panel_4_family_big_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_4_family_big_img_div_over_"+whatID).hide();
			$(".panel_4_family_big_img_div_back_"+whatID).addClass('panel_4_family_big_img_div_back_off');
			$(".panel_4_family_big_img_div_back_"+whatID).removeClass('panel_4_family_big_img_div_back_on');
		}
		if (document.getElementById('panel4FamilySmImgDivBack'+whatID) && $(".panel_4_family_sm_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_4_family_sm_img_div_over_"+whatID).hide();
			$(".panel_4_family_sm_img_div_back_"+whatID).addClass('panel_4_family_sm_img_div_back_off');
			$(".panel_4_family_sm_img_div_back_"+whatID).removeClass('panel_4_family_sm_img_div_back_on');
		}
	}
}
function panel4CatImgReplace(whatState,whatID) {
	if (whatState == 1) {
		if (document.getElementById('panel4CategoryBigImgDivBack'+whatID) && $(".panel_4_category_big_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_4_category_big_img_div_over_"+whatID).show();
			$(".panel_4_category_big_img_div_back_"+whatID).removeClass('panel_4_category_big_img_div_back_off');
			$(".panel_4_category_big_img_div_back_"+whatID).addClass('panel_4_category_big_img_div_back_on');
		}
		if (document.getElementById('panel4CategorySmImgDivBack'+whatID) && $(".panel_4_category_sm_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_4_category_sm_img_div_over_"+whatID).show();
			$(".panel_4_category_sm_img_div_back_"+whatID).removeClass('panel_4_category_sm_img_div_back_off');
			$(".panel_4_category_sm_img_div_back_"+whatID).addClass('panel_4_category_sm_img_div_back_on');
		}
	}
	else {
		if (document.getElementById('panel4CategoryBigImgDivBack'+whatID) && $(".panel_4_category_big_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_4_category_big_img_div_over_"+whatID).hide();
			$(".panel_4_category_big_img_div_back_"+whatID).addClass('panel_4_category_big_img_div_back_off');
			$(".panel_4_category_big_img_div_back_"+whatID).removeClass('panel_4_category_big_img_div_back_on');
		}
		if (document.getElementById('panel4CategorySmImgDivBack'+whatID) && $(".panel_4_category_sm_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_4_category_sm_img_div_over_"+whatID).hide();
			$(".panel_4_category_sm_img_div_back_"+whatID).addClass('panel_4_category_sm_img_div_back_off');
			$(".panel_4_category_sm_img_div_back_"+whatID).removeClass('panel_4_category_sm_img_div_back_on');
		}
	}
}
function panel4FamImgClick(whatID) {
	$(".panel_4_family_big_img_div_over").hide();
	$(".panel_4_family_big_img_div_back").addClass('panel_4_family_big_img_div_back_off');
	$(".panel_4_family_big_img_div_back").removeClass('panel_4_family_big_img_div_back_on');
	$(".panel_4_family_big_img_div_back").addClass('img_replace_active');
	$(".panel_4_family_big_img_div_back").removeClass('img_replace_static');
	$(".panel_4_family_sm_img_div_over").hide();
	$(".panel_4_family_sm_img_div_back").addClass('panel_4_family_sm_img_div_back_off');
	$(".panel_4_family_sm_img_div_back").removeClass('panel_4_family_sm_img_div_back_on');
	$(".panel_4_family_sm_img_div_back").addClass('img_replace_active');
	$(".panel_4_family_sm_img_div_back").removeClass('img_replace_static');
	if (whatID != p4clickyFamImg) {
		$(".panel_4_family_big_img_div_over_"+whatID).show();
		$(".panel_4_family_big_img_div_back_"+whatID).removeClass('panel_4_family_big_img_div_back_off');
		$(".panel_4_family_big_img_div_back_"+whatID).addClass('panel_4_family_big_img_div_back_on');
		$(".panel_4_family_big_img_div_back_"+whatID).addClass('img_replace_static');
		$(".panel_4_family_big_img_div_back_"+whatID).removeClass('img_replace_active');
		$(".panel_4_family_sm_img_div_over_"+whatID).show();
		$(".panel_4_family_sm_img_div_back_"+whatID).removeClass('panel_4_family_sm_img_div_back_off');
		$(".panel_4_family_sm_img_div_back_"+whatID).addClass('panel_4_family_sm_img_div_back_on');
		$(".panel_4_family_sm_img_div_back_"+whatID).addClass('img_replace_static');
		$(".panel_4_family_sm_img_div_back_"+whatID).removeClass('img_replace_active');
		p4clickyFamImg = whatID;
	}
	else {
		p4clickyFamImg = 0;
	}
}
function panel4CatImgClick(whatID) {
	$(".panel_4_category_big_img_div_over").hide();
	$(".panel_4_category_big_img_div_back").addClass('panel_4_category_big_img_div_back_off');
	$(".panel_4_category_big_img_div_back").removeClass('panel_4_category_big_img_div_back_on');
	$(".panel_4_category_big_img_div_back").addClass('img_replace_active');
	$(".panel_4_category_big_img_div_back").removeClass('img_replace_static');
	$(".panel_4_category_sm_img_div_over").hide();
	$(".panel_4_category_sm_img_div_back").addClass('panel_4_category_sm_img_div_back_off');
	$(".panel_4_category_sm_img_div_back").removeClass('panel_4_category_sm_img_div_back_on');
	$(".panel_4_category_sm_img_div_back").addClass('img_replace_active');
	$(".panel_4_category_sm_img_div_back").removeClass('img_replace_static');
	if (whatID != p4clickyCatImg) {
		$(".panel_4_category_big_img_div_over_"+whatID).show();
		$(".panel_4_category_big_img_div_back_"+whatID).removeClass('panel_4_category_big_img_div_back_off');
		$(".panel_4_category_big_img_div_back_"+whatID).addClass('panel_4_category_big_img_div_back_on');
		$(".panel_4_category_big_img_div_back_"+whatID).addClass('img_replace_static');
		$(".panel_4_category_big_img_div_back_"+whatID).removeClass('img_replace_active');
		$(".panel_4_category_sm_img_div_over_"+whatID).show();
		$(".panel_4_category_sm_img_div_back_"+whatID).removeClass('panel_4_category_sm_img_div_back_off');
		$(".panel_4_category_sm_img_div_back_"+whatID).addClass('panel_4_category_sm_img_div_back_on');
		$(".panel_4_category_sm_img_div_back_"+whatID).addClass('img_replace_static');
		$(".panel_4_category_sm_img_div_back_"+whatID).removeClass('img_replace_active');
		p4clickyCatImg = whatID;
	}
	else {
		p4clickyCatImg = 0;
	}
}
function panel4WriteChainList() {
	sortCol(chainArray,1);
	if (document.getElementById('panel4CRFChainList')) {
		panel4CRFChainArray.length = 0;
		if (document.getElementById('panel4CRFChain')) {
			if (document.getElementById('panel4CRFChain').value != "") {
				var z = 0;
				var rawSearchVal = document.getElementById('panel4CRFChain').value;
				var lowSearchVal = rawSearchVal.toLowerCase();
				var lowSearchBaseArray = lowSearchVal.split(" ");
				var lowSearchArray = [];
				lowSearchArray[0] = [lowSearchVal,0];
				for (x=0;x<chainArray.length;x++) {
					var includeChain = 0;
					var incDaChain = 1;
					var lowNameVal = chainArray[x][1].toLowerCase();
					for (v=0;v<lowSearchArray.length;v++) {
						if (lowNameVal.indexOf(lowSearchArray[v][0]) != -1) {
							includeChain = 1;
							break;
						}
					}
					if (includeChain == 1) {
						for (y=0;y<panel4CRFChainSelArray.length;y++) {
							if (panel4CRFChainSelArray[y][0] == chainArray[x][0]) {
								incDaChain = 0;
								break;
							}
						}
						if (incDaChain == 1) {
							panel4CRFChainArray[z] = chainArray[x];
							z++;
						}
					}
				}
			}
			else {
				var z = 0;
				for (x=0;x<chainArray.length;x++) {
					var incDaChain = 1;
					for (y=0;y<panel4CRFChainSelArray.length;y++) {
						if (panel4CRFChainSelArray[y][0] == chainArray[x][0]) {
							incDaChain = 0;
							break;
						}
					}
					if (incDaChain == 1) {
						panel4CRFChainArray[z] = chainArray[x];
						z++;
					}
				}
			}
		}
		else {
			var z = 0;
			for (x=0;x<chainArray.length;x++) {
				var incDaChain = 1;
				for (y=0;y<panel4CRFChainSelArray.length;y++) {
					if (panel4CRFChainSelArray[y][0] == chainArray[x][0]) {
						incDaChain = 0;
						break;
					}
				}
				if (incDaChain == 1) {
					panel4CRFChainArray[z] = chainArray[x];
					z++;
				}
			}
		}
		var baseHTML = "";
		for (x=1; x<panel4CRFChainArray.length; x++) {
			var chainHTMLTest = autotextIt(p4TemplateSet.panel4ChainList,"panel4ChainList");
			var chainNameTagStart = chainHTMLTest.indexOf("<!--CHAINNAME");
			if (chainNameTagStart != -1) {
				var chainNameTagEnd = chainHTMLTest.indexOf(">",chainNameTagStart);
				var chainNameTagStrip = chainHTMLTest.substring(chainNameTagStart,(chainNameTagEnd+1));
				var baseChainNameHTMLStart = chainHTMLTest.substr(0,chainNameTagStart);
				var baseChainNameHTMLEnd = chainHTMLTest.substr((chainNameTagEnd+1));
				var chainNameTagRender = "";
				chainNameTagRender += "<div id='panel4ChainName" + panel4CRFChainArray[x][0] + "' class='panel_4_chain_name panel_4_chain_name_off' style='cursor:pointer;' onclick='panel4ChainAdd(" + panel4CRFChainArray[x][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4ChainAdd(" + panel4CRFChainArray[x][0] + ");}'";
				if (hoverState==1) {
					chainNameTagRender += " onmouseover='panel4ChainMouseOver(" + panel4CRFChainArray[x][0] + ");' onfocus='panel4ChainMouseOver(" + panel4CRFChainArray[x][0] + ");' onmouseout='panel4ChainMouseOut(" + panel4CRFChainArray[x][0] + ");' onblur='panel4ChainMouseOut(" + panel4CRFChainArray[x][0] + ");'";
				}
				chainNameTagRender += " tabindex='0' title=\"" + panel4CRFChainArray[x][1] + "\">" + panel4CRFChainArray[x][1] + "<\/div>";
				chainHTMLTest = baseChainNameHTMLStart + chainNameTagRender + baseChainNameHTMLEnd;
			}
			var chainAddButtonTagStart = chainHTMLTest.indexOf("<!--CHAINADDBUTTON");
			if (chainAddButtonTagStart != -1) {
				var chainAddButtonTagEnd = chainHTMLTest.indexOf(">",chainAddButtonTagStart);
				var chainAddButtonTagStrip = chainHTMLTest.substring(chainAddButtonTagStart,(chainAddButtonTagEnd+1));
				var chainAddButtonHTMLStart = chainHTMLTest.substr(0,chainAddButtonTagStart);
				var chainAddButtonHTMLEnd = chainHTMLTest.substr((chainAddButtonTagEnd+1));
				var chainAddButtonRender = "";
				var chainAddButtonValueStart = chainAddButtonTagStrip.indexOf(" VALUE=");
				if (chainAddButtonValueStart != -1) {
					var chainAddButtonValueEnd = chainAddButtonTagStrip.indexOf("]",chainAddButtonValueStart);
					var chainAddButtonValueVar = chainAddButtonTagStrip.substring((chainAddButtonValueStart+8),(chainAddButtonValueEnd));
				}
				else {
					var chainAddButtonValueVar = "ADD";
				}
				var chainAddButtonItalicStart = chainAddButtonTagStrip.indexOf(" FNTAW=");
				if (chainAddButtonItalicStart != -1) {
					var chainAddButtonItalicEnd = chainAddButtonTagStrip.indexOf("]",chainAddButtonItalicStart);
					var chainAddButtonItalicVar = "<i class='fa " + chainAddButtonTagStrip.substring((chainAddButtonItalicStart+8),(chainAddButtonItalicEnd)) + "'><\/i>";
				}
				else {
					var chainAddButtonItalicVar = "";
				}
				chainAddButtonRender += "<div id='panel4ChainAdd' class='panel_4_chain_add panel_4_chain_add_off'";
				if (hoverState==1) {
					chainAddButtonRender += " onmouseover='panel4ButtonHover(\"panel4ChainAdd\",\"panel_4_chain_add\",1);' onfocus='panel4ButtonHover(\"panel4ChainAdd\",\"panel_4_chain_add\",1);' onmouseout='panel4ButtonHover(\"panel4ChainAdd\",\"panel_4_chain_add\",0);' onblur='panel4ButtonHover(\"panel4ChainAdd\",\"panel_4_chain_add\",0);'";
				}
				chainAddButtonRender += " onclick='panel4ChainAdd(" + panel4CRFChainArray[x][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4ChainAdd(" + panel4CRFChainArray[x][0] + ");}' tabindex='0' title=\"" + chainAddButtonValueVar + "\">" + chainAddButtonItalicVar + chainAddButtonValueVar + "<\/div>";
				chainHTMLTest = chainAddButtonHTMLStart + chainAddButtonRender + chainAddButtonHTMLEnd;
			}
			baseHTML += chainHTMLTest;
		}
		document.getElementById('panel4CRFChainList').innerHTML = baseHTML;
	}
}
function panel4WriteChainSelList() {
	if (document.getElementById('panel4CRFChainSelectList') && panel4CRFChainSelArray.length) {
		var baseHTML = "";
		for (x=0; x<panel4CRFChainSelArray.length; x++) {
			var chainHTMLTest = autotextIt(p4TemplateSet.panel4ChainSelect,"panel4ChainSelect");
			var chainSelNameTagStart = chainHTMLTest.indexOf("<!--CHAINNAME");
			if (chainSelNameTagStart != -1) {
				var chainSelNameTagEnd = chainHTMLTest.indexOf(">",chainSelNameTagStart);
				var chainSelNameTagStrip = chainHTMLTest.substring(chainSelNameTagStart,(chainSelNameTagEnd+1));
				var baseChainSelNameHTMLStart = chainHTMLTest.substr(0,chainSelNameTagStart);
				var baseChainSelNameHTMLEnd = chainHTMLTest.substr((chainSelNameTagEnd+1));
				var chainSelNameTagRender = "";
				chainSelNameTagRender += "<div id='panel4ChainSelName" + panel4CRFChainSelArray[x][0] + "' class='panel_4_chain_sel_name panel_4_chain_sel_name_off' style='cursor:pointer;' onclick='panel4ChainRemove(" + panel4CRFChainSelArray[x][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4ChainRemove(" + panel4CRFChainSelArray[x][0] + ");}'";
				if (hoverState==1) {
					chainSelNameTagRender += " onmouseover='panel4ChainSelMouseOver(" + panel4CRFChainSelArray[x][0] + ");' onfocus='panel4ChainSelMouseOver(" + panel4CRFChainSelArray[x][0] + ");' onmouseout='panel4ChainSelMouseOut(" + panel4CRFChainSelArray[x][0] + ");' onblur='panel4ChainSelMouseOut(" + panel4CRFChainSelArray[x][0] + ");'";
				}
				chainSelNameTagRender += " tabindex='0' title=\"" + panel4CRFChainSelArray[x][1] + "\">" + panel4CRFChainSelArray[x][1] + "<\/div>";
				chainHTMLTest = baseChainSelNameHTMLStart + chainSelNameTagRender + baseChainSelNameHTMLEnd;
			}
			var chainRemoveButtonTagStart = chainHTMLTest.indexOf("<!--CHAINREMOVEBUTTON");
			if (chainRemoveButtonTagStart != -1) {
				var chainRemoveButtonTagEnd = chainHTMLTest.indexOf(">",chainRemoveButtonTagStart);
				var chainRemoveButtonTagStrip = chainHTMLTest.substring(chainRemoveButtonTagStart,(chainRemoveButtonTagEnd+1));
				var chainRemoveButtonHTMLStart = chainHTMLTest.substr(0,chainRemoveButtonTagStart);
				var chainRemoveButtonHTMLEnd = chainHTMLTest.substr((chainRemoveButtonTagEnd+1));
				var chainRemoveButtonRender = "";
				var chainRemoveButtonValueStart = chainRemoveButtonTagStrip.indexOf(" VALUE=");
				if (chainRemoveButtonValueStart != -1) {
					var chainRemoveButtonValueEnd = chainRemoveButtonTagStrip.indexOf("]",chainRemoveButtonValueStart);
					var chainRemoveButtonValueVar = chainRemoveButtonTagStrip.substring((chainRemoveButtonValueStart+8),(chainRemoveButtonValueEnd));
				}
				else {
					var chainRemoveButtonValueVar = "REMOVE";
				}
				var chainRemoveButtonItalicStart = chainRemoveButtonTagStrip.indexOf(" FNTAW=");
				if (chainRemoveButtonItalicStart != -1) {
					var chainRemoveButtonItalicEnd = chainRemoveButtonTagStrip.indexOf("]",chainRemoveButtonItalicStart);
					var chainRemoveButtonItalicVar = "<i class='fa " + chainRemoveButtonTagStrip.substring((chainRemoveButtonItalicStart+8),(chainRemoveButtonItalicEnd)) + "'><\/i>";
				}
				else {
					var chainRemoveButtonItalicVar = "";
				}
				chainRemoveButtonRender += "<div id='panel4ChainRemove' class='panel_4_chain_remove panel_4_chain_remove_off'";
				if (hoverState==1) {
					chainRemoveButtonRender += " onmouseover='panel4ButtonHover(\"panel4ChainRemove\",\"panel_4_chain_remove\",1);' onfocus='panel4ButtonHover(\"panel4ChainRemove\",\"panel_4_chain_remove\",1);' onmouseout='panel4ButtonHover(\"panel4ChainRemove\",\"panel_4_chain_remove\",0);' onblur='panel4ButtonHover(\"panel4ChainRemove\",\"panel_4_chain_remove\",0);'";
				}
				chainRemoveButtonRender += " onclick='panel4ChainRemove(" + panel4CRFChainSelArray[x][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4ChainRemove(" + panel4CRFChainSelArray[x][0] + ");}' tabindex='0' title=\"" + chainRemoveButtonValueVar + "\">" + chainRemoveButtonItalicVar + chainRemoveButtonValueVar + "<\/div>";
				chainHTMLTest = chainRemoveButtonHTMLStart + chainRemoveButtonRender + chainRemoveButtonHTMLEnd;
			}
			baseHTML += chainHTMLTest;
		}
		document.getElementById('panel4CRFChainSelectList').innerHTML = baseHTML;
		panel4WriteChainList();
	}
	else {
		document.getElementById('panel4CRFChainSelectList').innerHTML = "";
		panel4WriteChainList();
	}
}
function panel4ChainMouseOver(chainID) {
	$('#panel4ChainName'+chainID).removeClass('panel_4_chain_name_off');
	$('#panel4ChainName'+chainID).addClass('panel_4_chain_name_hover');
}
function panel4ChainMouseOut(chainID) {
	$('#panel4ChainName'+chainID).removeClass('panel_4_chain_name_hover');
	$('#panel4ChainName'+chainID).addClass('panel_4_chain_name_off');
}
function panel4ChainSelMouseOver(chainID) {
	$('#panel4ChainSelName'+chainID).removeClass('panel_4_chain_sel_name_off');
	$('#panel4ChainSelName'+chainID).addClass('panel_4_chain_sel_name_hover');
}
function panel4ChainSelMouseOut(chainID) {
	$('#panel4ChainSelName'+chainID).removeClass('panel_4_chain_sel_name_hover');
	$('#panel4ChainSelName'+chainID).addClass('panel_4_chain_sel_name_off');
}
function panel4ChainAdd(chainID) {
	var addNewChain = 1;
	if (panel4CRFChainSelArray.length) {
		for (x=0;x<panel4CRFChainSelArray.length;x++) {
			if (panel4CRFChainSelArray[x][0] == chainID) {
				addNewChain = 0;
				break;
			}
		}
	}
	if (addNewChain == 1) {
		for (x=0;x<chainArray.length;x++) {
			if (chainArray[x][0] == chainID) {
				panel4CRFChainSelArray[panel4CRFChainSelArray.length] = chainArray[x];
				break;
			}
		}
		sortCol(panel4CRFChainSelArray,1);
		panel4WriteChainSelList();
	}
}
function panel4ChainRemove(chainID) {
	if (panel4CRFChainSelArray.length == 1) {
		panel4CRFChainSelArray.length = 0;
	}
	else {
		for (x=0;x<panel4CRFChainSelArray.length;x++) {
			if (panel4CRFChainSelArray[x][0] == chainID) {
				panel4CRFChainSelArray.splice(x,1);
				break;
			}
		}
		sortCol(panel4CRFChainSelArray,1);
	}
	panel4WriteChainSelList();
}
function panel4ResetProducts(allon) {
	if(gLog==1){console.log("panel4ResetProducts - Start");}
	$('.panel_4_prodlist_reset').removeClass('panel_4_prodlist_reset_off');
	$('.panel_4_prodlist_reset').removeClass('panel_4_prodlist_reset_hover');
	$('.panel_4_prodlist_reset').addClass('panel_4_prodlist_reset_on');
	document.getElementById('PROD').value = prodSelString;
	if (allon) {
		var izDemOn = 1;
		for (y=0;y<prodFilterArray.length;y++) {
			if (prodFilterArray[y][9] == 0) {
				izDemOn = 0;
			}
		}
		prodCartArray.length = 0;
		if (panel4ResetFirstClick == 0) {
			panel4ResetFirstClick = 1;
			izDemOn = 0;
		}
		if (izDemOn == 1) {
			for (z=0;z<prodFilterArray.length;z++) {
				prodFilterArray[z][9] = 0;
			}
			$('.panel_4_product_name').removeClass('panel_4_product_name_hover');
			$('.panel_4_product_name').removeClass('panel_4_product_name_on');
			$('.panel_4_product_name').addClass('panel_4_product_name_off');
		}
		else {
			for (z=0;z<prodFilterArray.length;z++) {
				prodFilterArray[z][9] = 1;
				prodCartArray[z] = prodFilterArray[z][0];
			}
			$('.panel_4_product_name').removeClass('panel_4_product_name_hover');
			$('.panel_4_product_name').removeClass('panel_4_product_name_off');
			$('.panel_4_product_name').addClass('panel_4_product_name_on');
		}
		panel4WriteProdCart();
		panel3WriteProdCart();
	}
	else {
		if (panel4AllOffIsOn == 1) {
			for (y=0;y<prodDisplayArray.length;y++) {
				prodFilterArray[y] = prodDisplayArray[y];
				prodFilterArray[y][9] = 0;
			}
			for (y=0;y<catArray.length;y++) {
				catArray[y][6] = 0;
			}
			$('.panel_4_product_name').removeClass('panel_4_product_name_hover');
			$('.panel_4_product_name').removeClass('panel_4_product_name_on');
			$('.panel_4_product_name').addClass('panel_4_product_name_off');
			$('.panel_4_category_name').removeClass('panel_4_category_name_hover');
			$('.panel_4_category_name').removeClass('panel_4_category_name_on');
			$('.panel_4_category_name').addClass('panel_4_category_name_off');
		}
		else {
			for (y=0;y<prodDisplayArray.length;y++) {
				prodFilterArray[y] = prodDisplayArray[y];
				prodFilterArray[y][9] = 1;
			}
			for (y=0;y<catArray.length;y++) {
				catArray[y][6] = 1;
			}
			$('.panel_4_product_name').removeClass('panel_4_product_name_hover');
			$('.panel_4_product_name').removeClass('panel_4_product_name_off');
			$('.panel_4_product_name').addClass('panel_4_product_name_on');
			$('.panel_4_category_name').removeClass('panel_4_category_name_hover');
			$('.panel_4_category_name').removeClass('panel_4_category_name_off');
			$('.panel_4_category_name').addClass('panel_4_category_name_on');
		}
	}
	if (document.getElementById('panel4ProductName'+prodFilterArray[x][0])) {
		document.getElementById('panel4ProductName'+prodFilterArray[x][0]).style.display = "block";
	}
	if (document.getElementById('panel4ProductBigImg'+prodFilterArray[x][0])) {
		document.getElementById('panel4ProductBigImg'+prodFilterArray[x][0]).style.display = "block";
	}
	if (document.getElementById('panel4ProductSmImg'+prodFilterArray[x][0])) {
		document.getElementById('panel4ProductSmImg'+prodFilterArray[x][0]).style.display = "block";
	}
	for (w=0;w<prodFilterArray.length;w++) {
		$('.panel_4_prodlist_prodshell_'+prodFilterArray[w][0]).removeClass('panel_4_prodlist_prodshell_on');
		$('.panel_4_prodlist_prodshell_'+prodFilterArray[w][0]).addClass('panel_4_prodlist_prodshell_off');
		var j = document.getElementsByClassName('panel_4_prodlist_prodshell_'+prodFilterArray[w][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
	for (x=0;x<famArray.length;x++) {
		famArray[x][5] = 0;
		$('.panel_4_prodlist_famshell_'+famArray[x][0]).removeClass('panel_4_prodlist_famshell_on');
		$('.panel_4_prodlist_famshell_'+famArray[x][0]).addClass('panel_4_prodlist_famshell_off');
		var j = document.getElementsByClassName('panel_4_prodlist_famshell_'+famArray[x][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
	for (y=0;y<catArray.length;y++) {
		catArray[y][6] = 0;
		$('#panel4CategoryName'+catArray[y][0]).removeClass('panel_4_category_name_hover');
		$('#panel4CategoryName'+catArray[y][0]).removeClass('panel_4_category_name_on');
		$('#panel4CategoryName'+catArray[y][0]).addClass('panel_4_category_name_off');
		$('#panel4CategoryName'+catArray[y][0]+'All').removeClass('panel_4_category_name_all_hover');
		$('#panel4CategoryName'+catArray[y][0]+'All').removeClass('panel_4_category_name_all_on');
		$('#panel4CategoryName'+catArray[y][0]+'All').addClass('panel_4_category_name_all_off');
		$('.panel_4_prodlist_catshell_'+catArray[y][0]).removeClass('panel_4_prodlist_catshell_on');
		$('.panel_4_prodlist_catshell_'+catArray[y][0]).addClass('panel_4_prodlist_catshell_off');
		var j = document.getElementsByClassName('panel_4_prodlist_catshell_'+catArray[y][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
	for (z=0;z<labelArray.length;z++) {
		labelArray[z][3] = 0;
		$('.panel_4_prodlist_labelshell_'+labelArray[z][0]).removeClass('panel_4_prodlist_labelshell_on');
		$('.panel_4_prodlist_labelshell_'+labelArray[z][0]).addClass('panel_4_prodlist_labelshell_off');
		var j = document.getElementsByClassName('panel_4_prodlist_labelshell_'+labelArray[z][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
}
function panel4ResetCategories() {
	$('.panel_4_prodlist_catreset').removeClass('panel_4_prodlist_catreset_off');
	$('.panel_4_prodlist_catreset').removeClass('panel_4_prodlist_catreset_hover');
	$('.panel_4_prodlist_catreset').addClass('panel_4_prodlist_catreset_on');
	$('.panel_4_family_name').removeClass('panel_4_family_name_hover');
	$('.panel_4_family_name').removeClass('panel_4_family_name_on');
	$('.panel_4_family_name').addClass('panel_4_family_name_off');
	$('.panel_4_category_name').removeClass('panel_4_category_name_hover');
	$('.panel_4_category_name').removeClass('panel_4_category_name_on');
	$('.panel_4_category_name').addClass('panel_4_category_name_off');
	$('.panel_4_label_name').removeClass('panel_4_label_name_hover');
	$('.panel_4_label_name').removeClass('panel_4_label_name_on');
	$('.panel_4_label_name').addClass('panel_4_label_name_off');
	$('.panel_4_product_name').show();
	for (w=0;w<prodFilterArray.length;w++) {
		$('.panel_4_prodlist_prodshell_'+prodFilterArray[w][0]).removeClass('panel_4_prodlist_prodshell_on');
		$('.panel_4_prodlist_prodshell_'+prodFilterArray[w][0]).addClass('panel_4_prodlist_prodshell_off');
		var j = document.getElementsByClassName('panel_4_prodlist_prodshell_'+prodFilterArray[w][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
	for (x=0;x<famArray.length;x++) {
		famArray[x][5] = 0;
		$('.panel_4_prodlist_famshell_'+famArray[x][0]).removeClass('panel_4_prodlist_famshell_on');
		$('.panel_4_prodlist_famshell_'+famArray[x][0]).addClass('panel_4_prodlist_famshell_off');
		var j = document.getElementsByClassName('panel_4_prodlist_famshell_'+famArray[x][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
	for (y=0;y<catArray.length;y++) {
		catArray[y][6] = 0;
		$('#panel4CategoryName'+catArray[y][0]).removeClass('panel_4_category_name_hover');
		$('#panel4CategoryName'+catArray[y][0]).removeClass('panel_4_category_name_on');
		$('#panel4CategoryName'+catArray[y][0]).addClass('panel_4_category_name_off');
		$('#panel4CategoryName'+catArray[y][0]+'All').removeClass('panel_4_category_name_all_hover');
		$('#panel4CategoryName'+catArray[y][0]+'All').removeClass('panel_4_category_name_all_on');
		$('#panel4CategoryName'+catArray[y][0]+'All').addClass('panel_4_category_name_all_off');
		$('.panel_4_prodlist_catshell_'+catArray[y][0]).removeClass('panel_4_prodlist_catshell_on');
		$('.panel_4_prodlist_catshell_'+catArray[y][0]).addClass('panel_4_prodlist_catshell_off');
		var j = document.getElementsByClassName('panel_4_prodlist_catshell_'+catArray[y][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
	for (z=0;z<labelArray.length;z++) {
		labelArray[z][3] = 0;
		$('.panel_4_prodlist_labelshell_'+labelArray[z][0]).removeClass('panel_4_prodlist_labelshell_on');
		$('.panel_4_prodlist_labelshell_'+labelArray[z][0]).addClass('panel_4_prodlist_labelshell_off');
		var j = document.getElementsByClassName('panel_4_prodlist_labelshell_'+labelArray[z][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
}
function panel4CRFProdMouseOver (prodID, prodString, prodVar) {
	if (document.getElementById(prodID)) {
		if (ccreqProdArray[prodVar][9] == 0) {
			$('#'+prodID).removeClass(prodString+'_off');
			$('#'+prodID).addClass(prodString+'_hover');
		}
		else {
			$('#'+prodID).removeClass(prodString+'_on');
			$('#'+prodID).addClass(prodString+'_hover');
		}
	}
}
function panel4CRFProdMouseOut (prodID, prodString, prodVar) {
	if (document.getElementById(prodID)) {
		if (ccreqProdArray[prodVar][9] == 0) {
			$('#'+prodID).removeClass(prodString+'_hover');
			$('#'+prodID).addClass(prodString+'_off');
		}
		else {
			$('#'+prodID).removeClass(prodString+'_hover');
			$('#'+prodID).addClass(prodString+'_on');
		}
	}
}
function panel4CRFCatMouseOver (catID, catString, catVar) {
	if (document.getElementById(catID)) {
		if (ccreqCatArray[catVar][9] == 0) {
			$('#'+catID).removeClass(catString+'_off');
			$('#'+catID).addClass(catString+'_hover');
		}
		else {
			$('#'+catID).removeClass(catString+'_on');
			$('#'+catID).addClass(catString+'_hover');
		}
	}
}
function panel4CRFCatMouseOut (catID, catString, catVar) {
	if (document.getElementById(catID)) {
		if (ccreqCatArray[catVar][9] == 0) {
			$('#'+catID).removeClass(catString+'_hover');
			$('#'+catID).addClass(catString+'_off');
		}
		else {
			$('#'+catID).removeClass(catString+'_hover');
			$('#'+catID).addClass(catString+'_on');
		}
	}
}
function panel4CRFProdSelect(prodSQLID, prodSKU, prodID, prodString, prodVar) {
	if (document.getElementById(prodID)) {
		if (ccreqProdArray[prodVar][9] == 0) {
			$('#'+prodID).removeClass(prodString+'_hover');
			$('#'+prodID).removeClass(prodString+'_off');
			$('#'+prodID).addClass(prodString+'_on');
			ccreqProdArray[prodVar][9] = "1";
		}
		else {
			$('#'+prodID).removeClass(prodString+'_hover');
			$('#'+prodID).removeClass(prodString+'_on');
			$('#'+prodID).addClass(prodString+'_off');
			ccreqProdArray[prodVar][9] = "0";
		}
		var newProdArray = [];
		for (x=0;x<ccreqProdArray.length;x++) {
			if (ccreqProdArray[x][9] == 1) {
				newProdArray.push(ccreqProdArray[x][1]);
			}
		}
		document.getElementById('panel4CRFProdValues').value = newProdArray.toString();
	}
}
function panel4CRFCatSelect(catID,arrayID) {
		if (catArray[arrayID][6] == 0) {
			$('#panel4CRFCategoryName'+catID).removeClass('panel_4_crf_category_name_hover');
			$('#panel4CRFCategoryName'+catID).removeClass('panel_4_crf_category_name_off');
			$('#panel4CRFCategoryName'+catID).addClass('panel_4_crf_category_name_on');
			catArray[arrayID][6] = "1";
			for (y=0;y<ccreqProdArray.length;y++) {
				if (ccreqProdArray[y][8] == catID) {
					ccreqProdArray[y][9] = "1";
				}
			}
		}
		else {
			$('#panel4CRFCategoryName'+catID).removeClass('panel_4_crf_category_name_hover');
			$('#panel4CRFCategoryName'+catID).removeClass('panel_4_crf_category_name_on');
			$('#panel4CRFCategoryName'+catID).addClass('panel_4_crf_category_name_off');
			catArray[arrayID][6] = "0";
			for (y=0;y<ccreqProdArray.length;y++) {
				if (ccreqProdArray[y][8] == catID) {
					ccreqProdArray[y][9] = "0";
				}
			}
		}
		var newProdArray = [];
		for (x=0;x<ccreqProdArray.length;x++) {
			if (ccreqProdArray[x][9] == 1) {
				newProdArray.push(ccreqProdArray[x][1]);
			}
		}
		document.getElementById('panel4CRFProdValues').value = newProdArray.toString();
}
function panel4FamCatProdOpen(famVar) {
	if (whatPLF4 != -1) {
		$(".panel_4_family_category_shell_"+famArray[whatPLF4][0]).slideUp(200);
	}
	if (famVar == whatPLF4) {
		whatPLF4 = -1;
	}
	else {
		$(".panel_4_family_category_shell_"+famArray[famVar][0]).slideDown(200);
		whatPLF4 = famVar;
	}
	$(".panel_4_family_category_product_shell").slideUp(200);
	whatPLFC4 = -1;
}
function panel4CatProdOpen(catVar) {
	if (whatPLFC4 != -1) {
		$(".panel_4_family_category_product_shell_"+catArray[whatPLFC4][0]).slideUp(200);
	}
	if (catVar == whatPLFC4) {
		whatPLFC4 = -1;
	}
	else {
		$(".panel_4_family_category_product_shell_"+catArray[catVar][0]).slideDown(200);
		whatPLFC4 = catVar;
	}
}
function panel4FamMouseOver (famVar) {
	if (document.getElementById('panel4FamilyName'+famArray[famVar][0])) {
		if (famArray[famVar][5] == 0) {
			$('#panel4FamilyName'+famArray[famVar][0]).removeClass('panel_4_family_name_off');
			$('#panel4FamilyName'+famArray[famVar][0]).addClass('panel_4_family_name_hover');
			$('#panel4FamilyName'+famArray[famVar][0]+'All').removeClass('panel_4_family_name_all_off');
			$('#panel4FamilyName'+famArray[famVar][0]+'All').addClass('panel_4_family_name_all_hover');
		}
		else {
			$('#panel4FamilyName'+famArray[famVar][0]).removeClass('panel_4_family_name_on');
			$('#panel4FamilyName'+famArray[famVar][0]).addClass('panel_4_family_name_hover');
			$('#panel4FamilyName'+famArray[famVar][0]+'All').removeClass('panel_4_family_name_all_on');
			$('#panel4FamilyName'+famArray[famVar][0]+'All').addClass('panel_4_family_name_all_hover');
		}
	}
}
function panel4FamMouseOut (famVar) {
	if (document.getElementById('panel4FamilyName'+famArray[famVar][0])) {
		if (famArray[famVar][5] == 0) {
			$('#panel4FamilyName'+famArray[famVar][0]).removeClass('panel_4_family_name_hover');
			$('#panel4FamilyName'+famArray[famVar][0]).addClass('panel_4_family_name_off');
			$('#panel4FamilyName'+famArray[famVar][0]+'All').removeClass('panel_4_family_name_all_hover');
			$('#panel4FamilyName'+famArray[famVar][0]+'All').addClass('panel_4_family_name_all_off');
		}
		else {
			$('#panel4FamilyName'+famArray[famVar][0]).removeClass('panel_4_family_name_hover');
			$('#panel4FamilyName'+famArray[famVar][0]).addClass('panel_4_family_name_on');
			$('#panel4FamilyName'+famArray[famVar][0]+'All').removeClass('panel_4_family_name_all_hover');
			$('#panel4FamilyName'+famArray[famVar][0]+'All').addClass('panel_4_family_name_all_on');
		}
	}
}
function panel4CatMouseOver (catVar) {
	if (document.getElementById('panel4CategoryName'+catArray[catVar][0])) {
		if (catArray[catVar][6] == 0) {
			$('#panel4CategoryName'+catArray[catVar][0]).removeClass('panel_4_category_name_off');
			$('#panel4CategoryName'+catArray[catVar][0]).addClass('panel_4_category_name_hover');
			$('#panel4CategoryName'+catArray[catVar][0]+'All').removeClass('panel_4_category_name_all_off');
			$('#panel4CategoryName'+catArray[catVar][0]+'All').addClass('panel_4_category_name_all_hover');
		}
		else {
			$('#panel4CategoryName'+catArray[catVar][0]).removeClass('panel_4_category_name_on');
			$('#panel4CategoryName'+catArray[catVar][0]).addClass('panel_4_category_name_hover');
			$('#panel4CategoryName'+catArray[catVar][0]+'All').removeClass('panel_4_category_name_all_on');
			$('#panel4CategoryName'+catArray[catVar][0]+'All').addClass('panel_4_category_name_all_hover');
		}
	}
}
function panel4CatMouseOut (catVar) {
	if (document.getElementById('panel4CategoryName'+catArray[catVar][0])) {
		if (catArray[catVar][6] == 0) {
			$('#panel4CategoryName'+catArray[catVar][0]).removeClass('panel_4_category_name_hover');
			$('#panel4CategoryName'+catArray[catVar][0]).addClass('panel_4_category_name_off');
			$('#panel4CategoryName'+catArray[catVar][0]+'All').removeClass('panel_4_category_name_all_hover');
			$('#panel4CategoryName'+catArray[catVar][0]+'All').addClass('panel_4_category_name_all_off');
		}
		else {
			$('#panel4CategoryName'+catArray[catVar][0]).removeClass('panel_4_category_name_hover');
			$('#panel4CategoryName'+catArray[catVar][0]).addClass('panel_4_category_name_on');
			$('#panel4CategoryName'+catArray[catVar][0]+'All').removeClass('panel_4_category_name_all_hover');
			$('#panel4CategoryName'+catArray[catVar][0]+'All').addClass('panel_4_category_name_all_on');
		}
	}
}
function panel4LabelMouseOver (labelVar) {
	if (document.getElementById('panel4LabelName'+labelArray[labelVar][0])) {
		if (labelArray[labelVar][3] == 0) {
			$('#panel4LabelName'+labelArray[labelVar][0]).removeClass('panel_4_label_name_off');
			$('#panel4LabelName'+labelArray[labelVar][0]).addClass('panel_4_label_name_hover');
			$('#panel4LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_4_label_name_all_off');
			$('#panel4LabelName'+labelArray[labelVar][0]+'All').addClass('panel_4_label_name_all_hover');
		}
		else {
			$('#panel4LabelName'+labelArray[labelVar][0]).removeClass('panel_4_label_name_on');
			$('#panel4LabelName'+labelArray[labelVar][0]).addClass('panel_4_label_name_hover');
			$('#panel4LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_4_label_name_all_on');
			$('#panel4LabelName'+labelArray[labelVar][0]+'All').addClass('panel_4_label_name_all_hover');
		}
	}
}
function panel4LabelMouseOut (labelVar) {
	if (document.getElementById('panel4LabelName'+labelArray[labelVar][0])) {
		if (labelArray[labelVar][3] == 0) {
			$('#panel4LabelName'+labelArray[labelVar][0]).removeClass('panel_4_label_name_hover');
			$('#panel4LabelName'+labelArray[labelVar][0]).addClass('panel_4_label_name_off');
			$('#panel4LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_4_label_name_all_hover');
			$('#panel4LabelName'+labelArray[labelVar][0]+'All').addClass('panel_4_label_name_all_off');
		}
		else {
			$('#panel4LabelName'+labelArray[labelVar][0]).removeClass('panel_4_label_name_hover');
			$('#panel4LabelName'+labelArray[labelVar][0]).addClass('panel_4_label_name_on');
			$('#panel4LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_4_label_name_all_hover');
			$('#panel4LabelName'+labelArray[labelVar][0]+'All').addClass('panel_4_label_name_all_on');
		}
	}
}
function panel4SelectLabel(labelVar,labelID,labelString,showHide) {
	if(gLog==1){console.log("panel4SelectLabel START");}
	$('.panel_4_prodlist_catreset').removeClass('panel_4_prodlist_catreset_on');
	$('.panel_4_prodlist_catreset').removeClass('panel_4_prodlist_catreset_hover');
	$('.panel_4_prodlist_catreset').addClass('panel_4_prodlist_catreset_off');
	whatStoreUp = 0;
	if (document.getElementById(labelID)) {
		if(gLog==1){console.log("panel4SelectLabel labelID");}
		if (labelArray[labelVar][3] == 0) {
			$('#panel4LabelName'+labelArray[labelVar][0]).removeClass('panel_4_label_name_hover');
			$('#panel4LabelName'+labelArray[labelVar][0]).removeClass('panel_4_label_name_off');
			$('#panel4LabelName'+labelArray[labelVar][0]).addClass('panel_4_label_name_on');
			$('#panel4LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_4_label_name_all_hover');
			$('#panel4LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_4_label_name_all_off');
			$('#panel4LabelName'+labelArray[labelVar][0]+'All').addClass('panel_4_label_name_all_on');
			$('.panel_4_prodlist_labelshell_'+labelArray[labelVar][0]).removeClass('panel_4_prodlist_labelshell_off');
			$('.panel_4_prodlist_labelshell_'+labelArray[labelVar][0]).addClass('panel_4_prodlist_labelshell_on');
			labelArray[labelVar][3] = "1";
		}
		else {
			$('#panel4LabelName'+labelArray[labelVar][0]).removeClass('panel_4_label_name_hover');
			$('#panel4LabelName'+labelArray[labelVar][0]).removeClass('panel_4_label_name_on');
			$('#panel4LabelName'+labelArray[labelVar][0]).addClass('panel_4_label_name_off');
			$('#panel4LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_4_label_name_all_hover');
			$('#panel4LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_4_label_name_all_on');
			$('#panel4LabelName'+labelArray[labelVar][0]+'All').addClass('panel_4_label_name_all_off');
			$('.panel_4_prodlist_labelshell_'+labelArray[labelVar][0]).removeClass('panel_4_prodlist_labelshell_on');
			$('.panel_4_prodlist_labelshell_'+labelArray[labelVar][0]).addClass('panel_4_prodlist_labelshell_off');
			labelArray[labelVar][3] = "0";
		}
		if (panel4ProductExclude == 1) {
			for (j=0;j<labelArray.length;j++) {
				if (j != labelVar) {
					$('#panel4LabelName'+labelArray[j][0]).removeClass('panel_4_label_name_hover');
					$('#panel4LabelName'+labelArray[j][0]).removeClass('panel_4_label_name_on');
					$('#panel4LabelName'+labelArray[j][0]).addClass('panel_4_label_name_off');
					$('#panel4LabelName'+labelArray[j][0]+'All').removeClass('panel_4_label_name_all_hover');
					$('#panel4LabelName'+labelArray[j][0]+'All').removeClass('panel_4_label_name_all_on');
					$('#panel4LabelName'+labelArray[j][0]+'All').addClass('panel_4_label_name_all_off');
					$('.panel_4_prodlist_labelshell_'+labelArray[labelVar][0]).removeClass('panel_4_prodlist_labelshell_off');
					$('.panel_4_prodlist_labelshell_'+labelArray[labelVar][0]).addClass('panel_4_prodlist_labelshell_on');
					labelArray[j][3] = "0";
				}
			}
		}
		if (showHide) {
			var showAllProd = 1;
			panel4LabelListCount = 0;
			for (x=0;x<labelArray.length;x++) {
				if (labelArray[x][3] == 1) {
					showAllProd = 0;
					panel4LabelListCount++;
				}
			}
			if (showAllProd == 1) {
				panel4LabelListCount = labelArray.length;
			}
			var subLabelArr = [];
			for (l=0; l<prodLabelArray.length; l++) {
				if (prodLabelArray[l][2] == labelArray[labelVar][0]) {
					subLabelArr.push(prodLabelArray[l][1]);
				}
			}
			if(gLog==1){console.log("panel4SelectLabel showHide ", subLabelArr.toString());}
			for (x=0;x<prodFilterArray.length;x++) {
				if (document.getElementById('panel4ProductName'+prodFilterArray[x][0])) {
					var j = document.getElementsByClassName('panel_4_prodlist_prodshell_'+prodFilterArray[x][0]);
					for (k=0; k<j.length; k++) {
						j[k].style.display = "none";
					}
				}
				for (y=0;y<subLabelArr.length;y++) {
					if (prodFilterArray[x][0] == subLabelArr[y]) {
						if (document.getElementById('panel4ProductName'+prodFilterArray[x][0])) {
							var j = document.getElementsByClassName('panel_4_prodlist_prodshell_'+prodFilterArray[x][0]);
							for (k=0; k<j.length; k++) {
								j[k].style.display = "block";
							}
						}
						break;
					}
				}
			}
			if (document.getElementById('panel4LabelListNum')) {
				document.getElementById('panel4LabelListNum').innerHTML = panel4LabelListCount;
			}
			if (document.getElementById('panel4LabelListProdNum')) {
				document.getElementById('panel4LabelListProdNum').innerHTML = panel4LabelListProdCount
			}
		}
	}
}
function panel4SelectFam(famVar,famID,famString,showHide) {
	if(gLog==1){console.log("panel4SelectFam - Start");}
	p4PLFamSort = famArray[famVar][0];
	$('.panel_4_prodlist_famreset').removeClass('panel_4_prodlist_famreset_on');
	$('.panel_4_prodlist_famreset').removeClass('panel_4_prodlist_famreset_hover');
	$('.panel_4_prodlist_famreset').addClass('panel_4_prodlist_famreset_off');
	whatStoreUp = 0;
	var whatFamSet = 0;
	if (document.getElementById(famID)) {
		for (y=0; y<famArray.length; y++) {
			if (famVar == y && famArray[famVar][5] == 0) {
				$('#panel4FamilyName'+famArray[famVar][0]).removeClass('panel_4_family_name_hover');
				$('#panel4FamilyName'+famArray[famVar][0]).removeClass('panel_4_family_name_off');
				$('#panel4FamilyName'+famArray[famVar][0]).addClass('panel_4_family_name_on');
				$('#panel4FamilyName'+famArray[famVar][0]+'All').removeClass('panel_4_family_name_all_hover');
				$('#panel4FamilyName'+famArray[famVar][0]+'All').removeClass('panel_4_family_name_all_off');
				$('#panel4FamilyName'+famArray[famVar][0]+'All').addClass('panel_4_family_name_all_on');
				$('.panel_4_prodlist_famshell_'+famArray[famVar][0]).removeClass('panel_4_prodlist_famshell_off');
				$('.panel_4_prodlist_famshell_'+famArray[famVar][0]).addClass('panel_4_prodlist_famshell_on');
				famArray[famVar][5] = "1";
				window["panel1FamilyNameVar"+famArray[famVar][0]] = 1;
				whatFamSet = 1;
			}
			else {
				$('#panel4FamilyName'+famArray[y][0]).removeClass('panel_4_family_name_hover');
				$('#panel4FamilyName'+famArray[y][0]).removeClass('panel_4_family_name_on');
				$('#panel4FamilyName'+famArray[y][0]).addClass('panel_4_family_name_off');
				$('#panel4FamilyName'+famArray[y][0]+'All').removeClass('panel_4_family_name_all_hover');
				$('#panel4FamilyName'+famArray[y][0]+'All').removeClass('panel_4_family_name_all_on');
				$('#panel4FamilyName'+famArray[y][0]+'All').addClass('panel_4_family_name_all_off');
				$('.panel_4_prodlist_famshell_'+famArray[famVar][0]).removeClass('panel_4_prodlist_famshell_on');
				$('.panel_4_prodlist_famshell_'+famArray[famVar][0]).addClass('panel_4_prodlist_famshell_off');
				famArray[y][5] = "0";
				window["panel1FamilyNameVar"+famArray[y][0]] = 0;
			}
		}
		if (showHide) {
			for (x=0;x<prodFilterArray.length;x++) {
				if (document.getElementById('panel4ProductName'+prodFilterArray[x][0])) {
					if (whatFamSet == 1) {
						var showThisOne = 1;
						for (q=0; q<prodCartArray.length; q++) {
							if (prodCartArray[q] == prodFilterArray[x][0]) {
								showThisOne = 0;
								break;
							}
						}
						if (prodFilterArray[x][17] == famArray[famVar][0] && showThisOne == 1) {
							if (document.getElementById('panel4ProductName'+prodFilterArray[x][0])) {document.getElementById('panel4ProductName'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel4ProductDesc'+prodFilterArray[x][0])) {document.getElementById('panel4ProductDesc'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel4ProductCat'+prodFilterArray[x][0])) {document.getElementById('panel4ProductCat'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel4ProductBigImg'+prodFilterArray[x][0])) {document.getElementById('panel4ProductBigImg'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel4ProductSmImg'+prodFilterArray[x][0])) {document.getElementById('panel4ProductSmImg'+prodFilterArray[x][0]).style.display = "block";}
							var j = document.getElementsByClassName('panel_4_prodlist_prodshell_'+prodFilterArray[x][0]);
							for (k=0; k<j.length; k++) {
								j[k].style.display = "block";
							}
						}
						else {
							if (document.getElementById('panel4ProductName'+prodFilterArray[x][0])) {document.getElementById('panel4ProductName'+prodFilterArray[x][0]).style.display = "none";}
							if (document.getElementById('panel4ProductDesc'+prodFilterArray[x][0])) {document.getElementById('panel4ProductDesc'+prodFilterArray[x][0]).style.display = "none";}
							if (document.getElementById('panel4ProductCat'+prodFilterArray[x][0])) {document.getElementById('panel4ProductCat'+prodFilterArray[x][0]).style.display = "none";}
							if (document.getElementById('panel4ProductBigImg'+prodFilterArray[x][0])) {document.getElementById('panel4ProductBigImg'+prodFilterArray[x][0]).style.display = "none";}
							if (document.getElementById('panel4ProductSmImg'+prodFilterArray[x][0])) {document.getElementById('panel4ProductSmImg'+prodFilterArray[x][0]).style.display = "none";}
							var j = document.getElementsByClassName('panel_4_prodlist_prodshell_'+prodFilterArray[x][0]);
							for (k=0; k<j.length; k++) {
								j[k].style.display = "none";
							}
						}
					}
					else {
						var showThisOne = 1;
						for (q=0; q<prodCartArray.length; q++) {
							if (prodCartArray[q] == prodFilterArray[x][0]) {
								showThisOne = 0;
								break;
							}
						}
						if (showThisOne == 1) {
							if (document.getElementById('panel4ProductName'+prodFilterArray[x][0])) {document.getElementById('panel4ProductName'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel4ProductDesc'+prodFilterArray[x][0])) {document.getElementById('panel4ProductDesc'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel4ProductCat'+prodFilterArray[x][0])) {document.getElementById('panel4ProductCat'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel4ProductBigImg'+prodFilterArray[x][0])) {document.getElementById('panel4ProductBigImg'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel4ProductSmImg'+prodFilterArray[x][0])) {document.getElementById('panel4ProductSmImg'+prodFilterArray[x][0]).style.display = "block";}
							var j = document.getElementsByClassName('panel_4_prodlist_prodshell_'+prodFilterArray[x][0]);
							for (k=0; k<j.length; k++) {
								j[k].style.display = "block";
							}
						}
					}
				}
			}
			for (c=0; c<catArray.length; c++) {
				if (whatFamSet == 1) {
					if (window["panel1FamilyNameVar"+catArray[c][2]] == 1) {
						if (document.getElementById('panel4CategoryName'+catArray[c][0])) {document.getElementById('panel4CategoryName'+catArray[c][0]).style.display = "block";}
						if (document.getElementById('panel4CategoryName'+catArray[c][0]+'All')) {document.getElementById('panel4CategoryName'+catArray[c][0]+'All').style.display = "block";}
						if (document.getElementById('panel4CategoryBigImg'+catArray[c][0])) {document.getElementById('panel4CategoryBigImg'+catArray[c][0]).style.display = "block";}
						if (document.getElementById('panel4CategorySmImg'+catArray[c][0])) {document.getElementById('panel4CategorySmImg'+catArray[c][0]).style.display = "block";}
						var j = document.getElementsByClassName('panel_4_prodlist_catshell_'+catArray[c][0]);
						for (k=0; k<j.length; k++) {
							j[k].style.display = "block";
						}
					}
					else {
						if (document.getElementById('panel4CategoryName'+catArray[c][0])) {document.getElementById('panel4CategoryName'+catArray[c][0]).style.display = "none";}
						if (document.getElementById('panel4CategoryName'+catArray[c][0]+'All')) {document.getElementById('panel4CategoryName'+catArray[c][0]+'All').style.display = "none";}
						if (document.getElementById('panel4CategoryBigImg'+catArray[c][0])) {document.getElementById('panel4CategoryBigImg'+catArray[c][0]).style.display = "none";}
						if (document.getElementById('panel4CategorySmImg'+catArray[c][0])) {document.getElementById('panel4CategorySmImg'+catArray[c][0]).style.display = "none";}
						var j = document.getElementsByClassName('panel_4_prodlist_catshell_'+catArray[c][0]);
						for (k=0; k<j.length; k++) {
							j[k].style.display = "none";
						}
					}
				}
				else {
					if (document.getElementById('panel4CategoryName'+catArray[c][0])) {document.getElementById('panel4CategoryName'+catArray[c][0]).style.display = "block";}
					if (document.getElementById('panel4CategoryName'+catArray[c][0]+'All')) {document.getElementById('panel4CategoryName'+catArray[c][0]+'All').style.display = "block";}
					if (document.getElementById('panel4CategoryBigImg'+catArray[c][0])) {document.getElementById('panel4CategoryBigImg'+catArray[c][0]).style.display = "block";}
					if (document.getElementById('panel4CategorySmImg'+catArray[c][0])) {document.getElementById('panel4CategorySmImg'+catArray[c][0]).style.display = "block";}
					var j = document.getElementsByClassName('panel_4_prodlist_catshell_'+catArray[c][0]);
					for (k=0; k<j.length; k++) {
						j[k].style.display = "block";
					}
				}
			}
		}
		if (document.getElementById('panel4ProdShopCartShell')) {
			panel4WriteProdCart();
		}
	}
}
function panel4SelectCat(catVar,catID,catString,showHide) {
	if(gLog==1){console.log("panel4SelectCat - Start");}
	$('.panel_4_prodlist_catreset').removeClass('panel_4_prodlist_catreset_on');
	$('.panel_4_prodlist_catreset').removeClass('panel_4_prodlist_catreset_hover');
	$('.panel_4_prodlist_catreset').addClass('panel_4_prodlist_catreset_off');
	whatStoreUp = 0;
	if (document.getElementById(catID)) {
		if (catArray[catVar][6] == 0) {
			$('#panel4CategoryName'+catArray[catVar][0]).removeClass('panel_4_category_name_hover');
			$('#panel4CategoryName'+catArray[catVar][0]).removeClass('panel_4_category_name_off');
			$('#panel4CategoryName'+catArray[catVar][0]).addClass('panel_4_category_name_on');
			$('#panel4CategoryName'+catArray[catVar][0]+'All').removeClass('panel_4_category_name_all_hover');
			$('#panel4CategoryName'+catArray[catVar][0]+'All').removeClass('panel_4_category_name_all_off');
			$('#panel4CategoryName'+catArray[catVar][0]+'All').addClass('panel_4_category_name_all_on');
			$('.panel_4_prodlist_catshell_'+catArray[catVar][0]).removeClass('panel_4_prodlist_catshell_off');
			$('.panel_4_prodlist_catshell_'+catArray[catVar][0]).addClass('panel_4_prodlist_catshell_on');
			catArray[catVar][6] = "1";
			window["panel1CategoryNameVar"+catArray[catVar][0]] = 1;
			for (q=0;q<prodFilterArray.length;q++) {
				if (!showHide) {
					if (prodFilterArray[q][8] == catArray[catVar][0]) {
						$('#panel4ProductName'+prodFilterArray[q][0]).removeClass('panel_4_product_name_hover');
						$('#panel4ProductName'+prodFilterArray[q][0]).removeClass('panel_4_product_name_off');
						$('#panel4ProductName'+prodFilterArray[q][0]).addClass('panel_4_product_name_on');
						$('.panel_4_prodlist_prodshell_'+prodFilterArray[q][0]).removeClass('panel_4_prodlist_prodshell_off');
						$('.panel_4_prodlist_prodshell_'+prodFilterArray[q][0]).addClass('panel_4_prodlist_prodshell_on');
						prodFilterArray[q][9] = 1;
					}
				}
			}
		}
		else {
			$('#panel4CategoryName'+catArray[catVar][0]).removeClass('panel_4_category_name_hover');
			$('#panel4CategoryName'+catArray[catVar][0]).removeClass('panel_4_category_name_on');
			$('#panel4CategoryName'+catArray[catVar][0]).addClass('panel_4_category_name_off');
			$('#panel4CategoryName'+catArray[catVar][0]+'All').removeClass('panel_4_category_name_all_hover');
			$('#panel4CategoryName'+catArray[catVar][0]+'All').removeClass('panel_4_category_name_all_on');
			$('#panel4CategoryName'+catArray[catVar][0]+'All').addClass('panel_4_category_name_all_off');
			$('.panel_4_prodlist_catshell_'+catArray[catVar][0]).removeClass('panel_4_prodlist_catshell_on');
			$('.panel_4_prodlist_catshell_'+catArray[catVar][0]).addClass('panel_4_prodlist_catshell_off');
			catArray[catVar][6] = "0";
			window["panel1CategoryNameVar"+catArray[catVar][0]] = 0;
			for (q=0;q<prodFilterArray.length;q++) {
				if (!showHide) {
					if (prodFilterArray[q][8] == catArray[catVar][0]) {
						$('#panel4ProductName'+prodFilterArray[q][0]).removeClass('panel_4_product_name_hover');
						$('#panel4ProductName'+prodFilterArray[q][0]).removeClass('panel_4_product_name_on');
						$('#panel4ProductName'+prodFilterArray[q][0]).addClass('panel_4_product_name_off');
						$('.panel_4_prodlist_prodshell_'+prodFilterArray[q][0]).removeClass('panel_4_prodlist_prodshell_on');
						$('.panel_4_prodlist_prodshell_'+prodFilterArray[q][0]).addClass('panel_4_prodlist_prodshell_off');
						prodFilterArray[q][9] = 0;
					}
				}
			}
		}
		if (document.getElementById('PROD').value != document.getElementById('FULLPROD').value) {
			var newProdArray = [];
			prodCartArray.length = 0;
			for (x=0;x<prodFilterArray.length;x++) {
				if (prodFilterArray[x][9] == 1) {
					newProdArray.push(prodFilterArray[x][1]);
					prodCartArray.push(prodFilterArray[x][0]);
				}
			}
			document.getElementById('PROD').value = newProdArray.toString();
		}
		if (panel4ProductFilter == 1) {
			if(gLog==1){console.log("Select Category P2");}
			panel4Load("panel4");
		}
		if (panel4ProductExclude == 1) {
			for (j=0;j<catArray.length;j++) {
				if (j != catVar) {
					$('#panel4CategoryName'+catArray[j][0]).removeClass('panel_4_category_name_hover');
					$('#panel4CategoryName'+catArray[j][0]).removeClass('panel_4_category_name_on');
					$('#panel4CategoryName'+catArray[j][0]).addClass('panel_4_category_name_off');
					$('#panel4CategoryName'+catArray[j][0]+'All').removeClass('panel_4_category_name_all_hover');
					$('#panel4CategoryName'+catArray[j][0]+'All').removeClass('panel_4_category_name_all_on');
					$('#panel4CategoryName'+catArray[j][0]+'All').addClass('panel_4_category_name_all_off');
					$('.panel_4_prodlist_catshell_'+catArray[catVar][0]).removeClass('panel_4_prodlist_catshell_on');
					$('.panel_4_prodlist_catshell_'+catArray[catVar][0]).addClass('panel_4_prodlist_catshell_off');
					catArray[j][6] = "0";
					window["panel1CategoryNameVar"+catArray[j][0]] = 0;
				}
			}
		}
		if (showHide) {
			var showAllProd = 1;
			panel4CatListCount = 0;
			for (x=0;x<catArray.length;x++) {
				if (catArray[x][6] == 1) {
					showAllProd = 0;
					panel4CatListCount++;
				}
			}
			if (showAllProd == 1) {
				panel4CatListCount = catArray.length;
			}
			for (x=0;x<prodFilterArray.length;x++) {
				for (y=0;y<catArray.length;y++) {
					if (prodFilterArray[x][8] == catArray[y][0]) {
						if ((catArray[y][6] == "1" || showAllProd == 1) && document.getElementById('panel4ProductName'+prodFilterArray[x][0])) {
							if (prodFilterArray[x][9] == 1 && panel4ProductHideprod == 1) {
								var j = document.getElementsByClassName('panel_4_prodlist_prodshell_'+prodFilterArray[x][0]);
								for (k=0; k<j.length; k++) {
									j[k].style.display = "none";
								}
							}
							else{
								var j = document.getElementsByClassName('panel_4_prodlist_prodshell_'+prodFilterArray[x][0]);
								for (k=0; k<j.length; k++) {
									j[k].style.display = "block";
								}
							}
						}
						else if (document.getElementById('panel4ProductName'+prodFilterArray[x][0])) {
							var j = document.getElementsByClassName('panel_4_prodlist_prodshell_'+prodFilterArray[x][0]);
							for (k=0; k<j.length; k++) {
								j[k].style.display = "none";
							}
						}
						break;
					}
				}
			}
			if (document.getElementById('panel4CatListNum')) {
				document.getElementById('panel4CatListNum').innerHTML = panel4CatListCount;
			}
			if (document.getElementById('panel4CatListProdNum')) {
				document.getElementById('panel4CatListProdNum').innerHTML = panel4CatListProdCount
			}
		}
		if (document.getElementById('panel4ProdShopCartShell')) {
			panel4WriteProdCart();
		}
	}
}
function panel4ProdMouseOver (prodID, prodStr, prodVar) {
	if (document.getElementById(prodID)) {
		if (prodFilterArray[prodVar][9] == 0) {
			$('#'+prodID).removeClass(prodStr+'_off');
			$('#'+prodID).addClass(prodStr+'_hover');
		}
		else {
			$('#'+prodID).removeClass(prodStr+'_on');
			$('#'+prodID).addClass(prodStr+'_hover');
		}
	}
}
function panel4ProdMouseOut (prodID, prodStr, prodVar) {
	var allOne = 1;
	for (x=0;x<prodFilterArray.length;x++) {
		if (prodFilterArray[x][9] == 0) {
			allOne = 0;
			break;
		}
	}
	if (document.getElementById(prodID)) {
		if (prodFilterArray[prodVar][9] == 0 || allOne == 1) {
			$('#'+prodID).removeClass(prodStr+'_hover');
			$('#'+prodID).addClass(prodStr+'_off');
		}
		else {
			$('#'+prodID).removeClass(prodStr+'_hover');
			$('#'+prodID).addClass(prodStr+'_on');
		}
	}
}
function panel4ProdSelect(prodSQLID, prodSKU, prodID, prodStr, prodVar) {
	if(gLog==1){console.log("panel4ProdSelect - Start");}
	whatStoreUp = 0;
	var laliLali = 0;
	for (lali=0;lali<prodFilterArray.length;lali++) {
		if (prodFilterArray[lali][9] == 1) {
			laliLali++;
		}
	}
	if (laliLali == prodFilterArray.length && prodCartArray.length != prodFilterArray.length) {
		for (stm=0;stm<prodFilterArray.length;stm++) {
			prodFilterArray[stm][9] = 0;
		}
	}
	if (document.getElementById(prodID)) {
		if (prodFilterArray[prodVar][9] == 0) {
			$('#'+prodID).removeClass(prodStr+'_hover');
			$('#'+prodID).removeClass(prodStr+'_off');
			$('#'+prodID).addClass(prodStr+'_on');
			$('.panel_4_prodlist_prodshell_'+prodFilterArray[prodVar][0]).removeClass('panel_4_prodlist_prodshell_off');
			$('.panel_4_prodlist_prodshell_'+prodFilterArray[prodVar][0]).addClass('panel_4_prodlist_prodshell_on');
			prodFilterArray[prodVar][9] = "1";
		}
		else {
			$('#'+prodID).removeClass(prodStr+'_hover');
			$('#'+prodID).removeClass(prodStr+'_on');
			$('#'+prodID).addClass(prodStr+'_off');
			$('.panel_4_prodlist_prodshell_'+prodFilterArray[prodVar][0]).removeClass('panel_4_prodlist_prodshell_on');
			$('.panel_4_prodlist_prodshell_'+prodFilterArray[prodVar][0]).addClass('panel_4_prodlist_prodshell_off');
			prodFilterArray[prodVar][9] = "0";
		}
		var newProdArray = [];
		prodCartArray.length = 0;
		for (x=0;x<prodFilterArray.length;x++) {
			if (prodFilterArray[x][9] == 1) {
				newProdArray.push(prodFilterArray[x][1]);
				prodCartArray.push(prodFilterArray[x][0]);
			}
		}
		document.getElementById('PROD').value = newProdArray.toString();
		if (panel4ProductFilter == 1) {
			if(gLog==1){console.log("Product Select P2");}
			panel4Load("panel4");
		}
	}
	if (document.getElementById('panel4ProdShopCartShell')) {
		if (panel4ProductHideprod == 1) {
			document.getElementById(prodID).style.display = "none";
			var j = document.getElementsByClassName('panel_4_prodlist_prodshell_'+prodFilterArray[prodVar][0]);
			for (k=0; k<j.length; k++) {
				j[k].style.display = "none";
			}
		}
		panel4WriteProdCart();
	}
}
function panel4WriteProdCart() {
	if (document.getElementById('panel4ProdShopCartShell')) {
		var writeHTML = "";
		var cartCatBadgeArr = [];
		var prodCartHeadHTML = autotextIt(p4TemplateSet.panel4ProductCartHead,"panel4ProductCartHead");
		if (prodCartHeadHTML != "") {
			var clearButtonTagStart = prodCartHeadHTML.indexOf("<!--CLEARBUTTON");
			if (clearButtonTagStart != -1) {
				var clearButtonTagEnd = prodCartHeadHTML.indexOf(">",clearButtonTagStart);
				var clearButtonTagStrip = prodCartHeadHTML.substring(clearButtonTagStart,(clearButtonTagEnd+1));
				var clearButtonHTMLStart = prodCartHeadHTML.substr(0,clearButtonTagStart);
				var clearButtonHTMLEnd = prodCartHeadHTML.substr((clearButtonTagEnd+1));
				var clearButtonRender = "";
				var clearButtonValueStart = clearButtonTagStrip.indexOf(" VALUE=");
				if (clearButtonValueStart != -1) {
					var clearButtonValueEnd = clearButtonTagStrip.indexOf("]",clearButtonValueStart);
					var clearButtonValueVar = clearButtonTagStrip.substring((clearButtonValueStart+8),(clearButtonValueEnd));
				}
				else {
					var clearButtonValueVar = "CLEAR";
				}
				var clearButtonItalicStart = clearButtonTagStrip.indexOf(" FNTAW=");
				if (clearButtonItalicStart != -1) {
					var clearButtonItalicEnd = clearButtonTagStrip.indexOf("]",clearButtonItalicStart);
					var clearButtonItalicVar = "<i class='fa " + clearButtonTagStrip.substring((clearButtonItalicStart+8),(clearButtonItalicEnd)) + "'><\/i>";
				}
				else {
					var clearButtonItalicVar = "";
				}
				if (prodCartArray.length) {
					clearButtonRender += "<div id='panel4ProdCartClearButton' class='panel_4_prod_cart_clear_button panel_4_prod_cart_clear_button_off'";
					if (hoverState==1) {
						clearButtonRender += " onmouseover='panel4ButtonHover(\"panel4ProdCartClearButton\", \"panel_4_prod_cart_clear_button\", 1);' onfocus='panel4ButtonHover(\"panel4ProdCartClearButton\", \"panel_4_prod_cart_clear_button\", 1);' onmouseout='panel4ButtonHover(\"panel4ProdCartClearButton\", \"panel_4_prod_cart_clear_button\", 0);' onblur='panel4ButtonHover(\"panel4ProdCartClearButton\", \"panel_4_prod_cart_clear_button\", 0);'";
					}
					clearButtonRender += " onclick='panel4ProdCartRemove();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4ProdCartRemove();}' tabindex='0' title=\"" + clearButtonValueVar + "\">" + clearButtonItalicVar + clearButtonValueVar + "<\/div>";
					prodCartHeadHTML = clearButtonHTMLStart + clearButtonRender + clearButtonHTMLEnd;
				}
				else {
					prodCartHeadHTML = clearButtonHTMLStart + clearButtonHTMLEnd;
				}
			}
			var emptyTextTagStart = prodCartHeadHTML.indexOf("<!--EMPTYTEXT");
			if (emptyTextTagStart != -1) {
				var emptyTextTagEnd = prodCartHeadHTML.indexOf(">",emptyTextTagStart);
				var emptyTextTagStrip = prodCartHeadHTML.substring(emptyTextTagStart,(emptyTextTagEnd+1));
				var emptyTextHTMLStart = prodCartHeadHTML.substr(0,emptyTextTagStart);
				var emptyTextHTMLEnd = prodCartHeadHTML.substr((emptyTextTagEnd+1));
				var emptyTextRender = "";
				var emptyTextValueStart = emptyTextTagStrip.indexOf(" VALUE=");
				if (emptyTextValueStart != -1) {
					var emptyTextValueEnd = emptyTextTagStrip.indexOf("]",emptyTextValueStart);
					emptyTextValueVar = emptyTextTagStrip.substring((emptyTextValueStart+8),(emptyTextValueEnd));
				}
				else {
					emptyTextValueVar = "Your Shopping Cart is Empty.";
				}
				if (prodCartArray.length) {
					prodCartHeadHTML = emptyTextHTMLStart + emptyTextHTMLEnd;
				}
				else {
					prodCartHeadHTML = emptyTextHTMLStart + "<div id='panel4ProdCartEmptyText' class='panel_4_prod_cart_empty_text_shell'><div class='panel_4_prod_cart_empty_text_inner'>" + emptyTextValueVar + "<\/div><\/div>" + emptyTextHTMLEnd;
				}
			}
			writeHTML += prodCartHeadHTML;
		}
		for (y=0; y<prodCartArray.length; y++) {
			var prodCartHTML = autotextIt(p4TemplateSet.panel4ProductCartDiv,"panel4ProductCart");
			for (x=0;x<prodDisplayArray.length;x++) {
				if (prodDisplayArray[x][0] == prodCartArray[y]) {
					if (cartCatBadgeArr.length) {
						var isInArr = 0;
						for (t=0; t<cartCatBadgeArr.length; t++) {
							if (cartCatBadgeArr[t][0] == prodDisplayArray[x][8]) {
								var thisArrVal = parseInt(cartCatBadgeArr[t][1]);
								cartCatBadgeArr[t][1] = thisArrVal+1;
								isInArr = 1;
								break;
							}
						}
						if (isInArr == 0) {
							cartCatBadgeArr[cartCatBadgeArr.length] = [prodDisplayArray[x][8],1];
						}
					}
					else {
						cartCatBadgeArr[0] = [prodDisplayArray[x][8],1];
					}
					var prodDiscTagStart = prodCartHTML.indexOf("<!--HIGHPROD");
						if (prodDiscTagStart != -1) {
						var prodDiscTagEnd = prodCartHTML.indexOf(">",prodDiscTagStart);
						var prodDiscTagStrip = prodCartHTML.substring(prodDiscTagStart,(prodDiscTagEnd+1));
						var prodDiscHTMLStart = prodCartHTML.substr(0,prodDiscTagStart);
						var prodDiscHTMLEnd = prodCartHTML.substr((prodDiscTagEnd+1));
						var prodDiscWrite = "";
						var discVal = prodDisplayArray[x][6];
						if (discVal != 1) {
							prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel4ProductCart_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
						}
						prodCartHTML = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
					}
					var prodCartNameTagStart = prodCartHTML.indexOf("<!--PRODNAME");
					if (prodCartNameTagStart != -1) {
						var prodCartNameTagEnd = prodCartHTML.indexOf(">",prodCartNameTagStart);
						var prodCartNameTagStrip = prodCartHTML.substring(prodCartNameTagStart,(prodCartNameTagEnd+1));
						var baseProdCartNameHTMLStart = prodCartHTML.substr(0,prodCartNameTagStart);
						var baseProdCartNameHTMLEnd = prodCartHTML.substr((prodCartNameTagEnd+1));
						var descTest = prodCartNameTagStrip.indexOf(" DESC");
						if (descTest != -1) {
							var descVal = "<span class='panel_4_prod_cart_name_desc'>" + prodDisplayArray[x][3] + "<\/span>";
						}
						else {
							var descVal = "";
						}
						var prodNameItalicStart = prodCartNameTagStrip.indexOf(" FNTAW=");
						if (prodNameItalicStart != -1) {
							var prodNameItalicEnd = prodCartNameTagStrip.indexOf("]",prodNameItalicStart);
							var prodNameItalicVar = "<i class='fa " + prodCartNameTagStrip.substring((prodNameItalicStart+8),(prodNameItalicEnd)) + "'><\/i>";
						}
						else {
							var prodNameItalicVar = "";
						}
						prodCartHTML = baseProdCartNameHTMLStart + "<div id='panel4ProdCartName" + prodDisplayArray[x][0] + "' class='panel_4_prod_cart_name'>" + prodNameItalicVar + "<span class='panel_4_prod_cart_name_name'>" + prodDisplayArray[x][2] + "<\/span>" + descVal + "<\/div>" + baseProdCartNameHTMLEnd;
					}
					var prodDescTagStart = prodCartHTML.indexOf("<!--PRODDESC");
					if (prodDescTagStart != -1) {
						var prodDescTagEnd = prodCartHTML.indexOf(">",prodDescTagStart);
						var prodDescTagStrip = prodCartHTML.substring(prodDescTagStart,(prodDescTagEnd+1));
						var baseProdDescHTMLStart = prodCartHTML.substr(0,prodDescTagStart);
						var baseProdDescHTMLEnd = prodCartHTML.substr((prodDescTagEnd+1));
						prodCartHTML = baseProdDescHTMLStart + "<div id='panel4ProdCartDesc" + prodDisplayArray[x][0] + "' class='panel_4_prod_cart_desc'>" + prodDisplayArray[x][3] + "<\/div>" + baseProdDescHTMLEnd;
					}
					var prodCatTagStart = prodCartHTML.indexOf("<!--PRODCAT");
					if (prodCatTagStart != -1) {
						var prodCatTagEnd = prodCartHTML.indexOf(">",prodCatTagStart);
						var prodCatTagStrip = prodCartHTML.substring(prodCatTagStart,(prodCatTagEnd+1));
						var baseProdCatHTMLStart = prodCartHTML.substr(0,prodCatTagStart);
						var baseProdCatHTMLEnd = prodCartHTML.substr((prodCatTagEnd+1));
						prodCartHTML = baseProdCatHTMLStart + "<div id='panel4ProdCartCat" + prodDisplayArray[x][0] + "' class='panel_4_prod_cart_cat'>" + prodDisplayArray[x][16] + "<\/div>" + baseProdCatHTMLEnd;
					}
					var prodCartBigImgTagStart = prodCartHTML.indexOf("<!--PRODBIGIMG");
					if (prodCartBigImgTagStart != -1) {
						var prodCartBigImgTagEnd = prodCartHTML.indexOf(">",prodCartBigImgTagStart);
						var prodCartBigImgTagStrip = prodCartHTML.substring(prodCartBigImgTagStart,(prodCartBigImgTagEnd+1));
						var baseProdCartBigImgHTMLStart = prodCartHTML.substr(0,prodCartBigImgTagStart);
						var baseProdCartBigImgHTMLEnd = prodCartHTML.substr((prodCartBigImgTagEnd+1));
						prodCartHTML = baseProdCartBigImgHTMLStart + "<img title=\"" + prodDisplayArray[x][2] + "\" alt=\"" + prodDisplayArray[x][2] + "\" id='panel4ProdCartBigImg" + prodDisplayArray[x][0] + "' class='panel_4_prod_cart_bigimg' src='" + clientImgBase + prodDisplayArray[x][4] + "'>" + baseProdCartBigImgHTMLEnd;
					}
					var prodCartSmImgTagStart = prodCartHTML.indexOf("<!--PRODSMIMG");
					if (prodCartSmImgTagStart != -1) {
						var prodCartSmImgTagEnd = prodCartHTML.indexOf(">",prodCartSmImgTagStart);
						var prodCartSmImgTagStrip = prodCartHTML.substring(prodCartSmImgTagStart,(prodCartSmImgTagEnd+1));
						var baseProdCartSmImgHTMLStart = prodCartHTML.substr(0,prodCartSmImgTagStart);
						var baseProdCartSmImgHTMLEnd = prodCartHTML.substr((prodCartSmImgTagEnd+1));
						prodCartHTML = baseProdCartSmImgHTMLStart + "<img title=\"" + prodDisplayArray[x][2] + "\" alt=\"" + prodDisplayArray[x][2] + "\" id='panel4ProdCartSmImg" + prodDisplayArray[x][0] + "' class='panel_4_prod_cart_smimg' src='" + clientImgBase + prodDisplayArray[x][5] + "'>" + baseProdCartSmImgHTMLEnd;
					}
					var removeButtonTagStart = prodCartHTML.indexOf("<!--REMOVEBUTTON");
					if (removeButtonTagStart != -1) {
						var removeButtonTagEnd = prodCartHTML.indexOf(">",removeButtonTagStart);
						var removeButtonTagStrip = prodCartHTML.substring(removeButtonTagStart,(removeButtonTagEnd+1));
						var removeButtonHTMLStart = prodCartHTML.substr(0,removeButtonTagStart);
						var removeButtonHTMLEnd = prodCartHTML.substr((removeButtonTagEnd+1));
						var removeButtonRender = "";
						var removeButtonValueStart = removeButtonTagStrip.indexOf(" VALUE=");
						var removeButtonValueEnd = removeButtonTagStrip.indexOf("]",removeButtonValueStart);
						if (removeButtonValueStart != -1) {
							removeButtonValueVar = removeButtonTagStrip.substring((removeButtonValueStart+8),(removeButtonValueEnd));
						}
						else {
							removeButtonValueVar = "REMOVE";
						}
						var removeButtonItalicStart = removeButtonTagStrip.indexOf(" FNTAW=");
						var removeButtonItalicEnd = removeButtonTagStrip.indexOf("]",removeButtonItalicStart);
						if (removeButtonItalicStart != -1) {
							removeButtonItalicVar = "<i class='fa " + removeButtonTagStrip.substring((removeButtonItalicStart+8),(removeButtonItalicEnd)) + "'><\/i>";
						}
						else {
							removeButtonItalicVar = "";
						}
						removeButtonRender += "<div id='panel4ProdCartRemoveButton" + prodCartArray[y] + "' class='panel_4_prod_cart_remove_button panel_4_prod_cart_remove_button_off'";
						if (hoverState==1) {
							removeButtonRender += " onmouseover='panel4ButtonHover(\"panel4ProdCartRemoveButton" + prodCartArray[y] + "\",\"panel_4_prod_cart_remove_button\",1);' onfocus='panel4ButtonHover(\"panel4ProdCartRemoveButton" + prodCartArray[y] + "\",\"panel_4_prod_cart_remove_button\",1);' onmouseout='panel4ButtonHover(\"panel4ProdCartRemoveButton" + prodCartArray[y] + "\",\"panel_4_prod_cart_remove_button\",0);' onblur='panel4ButtonHover(\"panel4ProdCartRemoveButton" + prodCartArray[y] + "\",\"panel_4_prod_cart_remove_button\",0);'";
						}
						removeButtonRender += " onclick='panel4ProdCartRemove(" + prodCartArray[y] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4ProdCartRemove(" + prodCartArray[y] + ");}' tabindex='0' title=\"" + removeButtonValueVar + "\">" + removeButtonItalicVar + removeButtonValueVar + "<\/div>";
						prodCartHTML = removeButtonHTMLStart + removeButtonRender + removeButtonHTMLEnd;
					}
				}
			}
			writeHTML += prodCartHTML;
		}
		var prodCartFootHTML = autotextIt(p4TemplateSet.panel4ProductCartFoot,"panel4ProductCartFoot");
		if (prodCartFootHTML != "") {
			var clearButtonTagStart = prodCartFootHTML.indexOf("<!--CLEARBUTTON");
			if (clearButtonTagStart != -1) {
				var clearButtonTagEnd = prodCartFootHTML.indexOf(">",clearButtonTagStart);
				var clearButtonTagStrip = prodCartFootHTML.substring(clearButtonTagStart,(clearButtonTagEnd+1));
				var clearButtonHTMLStart = prodCartFootHTML.substr(0,clearButtonTagStart);
				var clearButtonHTMLEnd = prodCartFootHTML.substr((clearButtonTagEnd+1));
				var clearButtonRender = "";
				var clearButtonValueStart = clearButtonTagStrip.indexOf(" VALUE=");
				if (clearButtonValueStart != -1) {
					var clearButtonValueEnd = clearButtonTagStrip.indexOf("]",clearButtonValueStart);
					var clearButtonValueVar = clearButtonTagStrip.substring((clearButtonValueStart+8),(clearButtonValueEnd));
				}
				else {
					var clearButtonValueVar = "CLEAR";
				}
				var clearButtonItalicStart = clearButtonTagStrip.indexOf(" FNTAW=");
				if (clearButtonItalicStart != -1) {
					var clearButtonItalicEnd = clearButtonTagStrip.indexOf("]",clearButtonItalicStart);
					var clearButtonItalicVar = "<i class='fa " + clearButtonTagStrip.substring((clearButtonItalicStart+8),(clearButtonItalicEnd)) + "'><\/i>";
				}
				else {
					var clearButtonItalicVar = "";
				}
				if (prodCartArray.length) {
					clearButtonRender += "<div id='panel4ProdCartClearButton' class='panel_4_prod_cart_clear_button panel_4_prod_cart_clear_button_off'";
					if (hoverState==1) {
						clearButtonRender += " onmouseover='panel4ButtonHover(\"panel4ProdCartClearButton\", \"panel_4_prod_cart_clear_button\", 1);' onfocus='panel4ButtonHover(\"panel4ProdCartClearButton\", \"panel_4_prod_cart_clear_button\", 1);' onmouseout='panel4ButtonHover(\"panel4ProdCartClearButton\", \"panel_4_prod_cart_clear_button\", 0);' onblur='panel4ButtonHover(\"panel4ProdCartClearButton\", \"panel_4_prod_cart_clear_button\", 0);'";
					}
					clearButtonRender += " onclick='panel4ProdCartRemove();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4ProdCartRemove();}' tabindex='0' title=\"" + clearButtonValueVar + "\">" + clearButtonItalicVar + clearButtonValueVar + "<\/div>";
					prodCartFootHTML = clearButtonHTMLStart + clearButtonRender + clearButtonHTMLEnd;
				}
				else {
					prodCartFootHTML = clearButtonHTMLStart + clearButtonHTMLEnd;
				}
			}
			writeHTML += prodCartFootHTML;
		}
		document.getElementById('panel4ProdShopCartShell').innerHTML = writeHTML;
		if (document.getElementById('panel4ProdCountNum')) {
			if (prodCartArray.length == 0 || prodCartArray.length == prodDisplayArray.length) {
				document.getElementById('panel4ProdCountNum').innerHTML =  "All";
			}
			else {
				document.getElementById('panel4ProdCountNum').innerHTML = prodCartArray.length;
			}
		}
		if (document.getElementById('panel4CountProdNum')) {
			if (prodCartArray.length == 0 || prodCartArray.length == prodDisplayArray.length) {
				document.getElementById('panel4CountProdNum').innerHTML =  "All";
			}
			else {
				document.getElementById('panel4CountProdNum').innerHTML = prodCartArray.length;
			}
		}
		if (document.getElementById("panel4SelProdText")) {
			if (prodCartArray.length == 1) {
				document.getElementById("panel4SelProdText").innerHTML = p4selProdSingularVar;
			}
			else {
				document.getElementById("panel4SelProdText").innerHTML = p4selProdPluralVar;
			}
		}
		$('.panel_4_prodlist_cat_badge').hide();
		if (cartCatBadgeArr.length) {
			for (j=0; j<cartCatBadgeArr.length; j++) {
				if (document.getElementById('panel4ProdlistCatBadge'+cartCatBadgeArr[j][0])) {
					document.getElementById('panel4ProdlistCatBadge'+cartCatBadgeArr[j][0]).innerHTML = cartCatBadgeArr[j][1];
					$('#panel4ProdlistCatBadge'+cartCatBadgeArr[j][0]).show();
				}
			}
		}
	}
}
function panel4ProdCartRemove(whatID) {
	if(gLog==1){console.log("panel4ProdCartRemove - Start");}
	var newProdArray = [];
	if (whatID) {
		if(gLog==1){console.log("panel4ProdCartRemove - whatID");}
		for (x=0;x<prodDisplayArray.length;x++) {
			var killIt = 0;
			if (prodDisplayArray[x][0] == whatID) {
				killIt = 1;
			}
			if (killIt == 1) {
				if(gLog==1){console.log("panel4ProdCartRemove - killIt",prodDisplayArray[x][2]);}
				prodDisplayArray[x][9] = 0;
				var FIRE = 0;
				for (thisOne=0;thisOne<catArray.length;thisOne++) {
					if (catArray[thisOne][6] == 1) {
						FIRE++;
					}
				}
				if (FIRE == catArray.length || FIRE == 0) {
					if (document.getElementById('panel4ProductBigImgDivBack'+prodDisplayArray[x][0])) {
						$(".panel_4_product_big_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
						$(".panel_4_product_big_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_4_product_big_img_div_back_off');
						$(".panel_4_product_big_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_4_product_big_img_div_back_on');
					}
					if (document.getElementById('panel4ProductSmImgDivBack'+prodDisplayArray[x][0])) {
						$(".panel_4_product_sm_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
						$(".panel_4_product_sm_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_4_product_sm_img_div_back_off');
						$(".panel_4_product_sm_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_4_product_sm_img_div_back_on');
					}
				}
				else if (FIRE == 1) {
					for (goesOut=0;goesOut<catArray.length;goesOut++) {
						if (catArray[goesOut][0] == prodDisplayArray[x][8] && catArray[goesOut][6] == 1) {
							if (document.getElementById('panel4ProductBigImgDivBack'+prodDisplayArray[x][0])) {
								$(".panel_4_product_big_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
								$(".panel_4_product_big_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_4_product_big_img_div_back_off');
								$(".panel_4_product_big_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_4_product_big_img_div_back_on');
							}
							if (document.getElementById('panel4ProductSmImgDivBack'+prodDisplayArray[x][0])) {
								$(".panel_4_product_sm_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
								$(".panel_4_product_sm_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_4_product_sm_img_div_back_off');
								$(".panel_4_product_sm_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_4_product_sm_img_div_back_on');
							}
							break;
						}
					}
				}
				$('#panel4CartButton'+prodDisplayArray[x][0]).removeClass('panel_4_cart_button_hover');
				$('#panel4CartButton'+prodDisplayArray[x][0]).removeClass('panel_4_cart_button_on');
				$('#panel4CartButton'+prodDisplayArray[x][0]).addClass('panel_4_cart_button_off');
				$('.panel_4_multiFilter_l3_prodname_'+prodDisplayArray[x][0]).removeClass('panel_4_multiFilter_l3_prodname_hover');
				$('.panel_4_multiFilter_l3_prodname_'+prodDisplayArray[x][0]).removeClass('panel_4_multiFilter_l3_prodname_on');
				$('.panel_4_multiFilter_l3_prodname_'+prodDisplayArray[x][0]).addClass('panel_4_multiFilter_l3_prodname_off');
				$('.panel_4_multiFilter_l3_prodname_ion_'+prodDisplayArray[x][0]).hide();
				$('.panel_4_multiFilter_l3_prodname_ioff_'+prodDisplayArray[x][0]).show();
				$("#panel4ProductName" + prodDisplayArray[x][0]).removeClass("panel_4_product_name_hover");
				$("#panel4ProductName" + prodDisplayArray[x][0]).removeClass("panel_4_product_name_on");
				$("#panel4ProductName" + prodDisplayArray[x][0]).addClass("panel_4_product_name_off");
				if (document.getElementById('panel4ProductName'+prodDisplayArray[x][0])) {
					document.getElementById('panel4ProductName'+prodDisplayArray[x][0]).style.display = "block";
				}
				if (document.getElementById('panel4ProductBigImg'+prodDisplayArray[x][0])) {
					document.getElementById('panel4ProductBigImg'+prodDisplayArray[x][0]).style.display = "block";
				}
				if (document.getElementById('panel4ProductSmImg'+prodDisplayArray[x][0])) {
					document.getElementById('panel4ProductSmImg'+prodDisplayArray[x][0]).style.display = "block";
				}
				$('.panel_4_prodlist_prodshell_'+prodDisplayArray[x][0]).removeClass('panel_4_prodlist_prodshell_on');
				$('.panel_4_prodlist_prodshell_'+prodDisplayArray[x][0]).addClass('panel_4_prodlist_prodshell_off');
				if(gLog==1){console.log("panel4ProdCartRemove(" + whatID + ") ",prodDisplayArray[x][17],p4PLFamSort);}
				if (prodDisplayArray[x][17] == p4PLFamSort) {
					var j = document.getElementsByClassName('panel_4_prodlist_prodshell_'+prodDisplayArray[x][0]);
					for (k=0; k<j.length; k++) {
						j[k].style.display = "block";
					}
				}
				break;
			}
		}
		prodCartArray.length = 0;
		for (x=0;x<prodDisplayArray.length;x++) {
			if (prodDisplayArray[x][9] == 1) {
				newProdArray.push(prodDisplayArray[x][1]);
				prodCartArray.push(prodDisplayArray[x][0]);
			}
		}
	}
	else {
		for (x=0;x<prodDisplayArray.length;x++) {
			if (document.getElementById('panel4CategoryBigImgDivBack'+prodDisplayArray[x][0])) {
				$(".panel_4_category_big_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
				$(".panel_4_category_big_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_4_category_big_img_div_back_on');
				$(".panel_4_category_big_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_4_category_big_img_div_back_off');
			}
			if (document.getElementById('panel4CategorySmImgDivBack'+prodDisplayArray[x][0])) {
				$(".panel_4_category_sm_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
				$(".panel_4_category_sm_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_4_category_sm_img_div_back_on');
				$(".panel_4_category_sm_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_4_category_sm_img_div_back_off');
			}
			if (document.getElementById('panel4ProductBigImgDivBack'+prodDisplayArray[x][0])) {
				$(".panel_4_product_big_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
				$(".panel_4_product_big_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_4_product_big_img_div_back_off');
				$(".panel_4_product_big_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_4_product_big_img_div_back_on');
			}
			if (document.getElementById('panel4ProductSmImgDivBack'+prodDisplayArray[x][0])) {
				$(".panel_4_product_sm_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
				$(".panel_4_product_sm_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_4_product_sm_img_div_back_off');
				$(".panel_4_product_sm_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_4_product_sm_img_div_back_on');
			}
			$('#panel4CartButton'+prodDisplayArray[x][0]).removeClass('panel_4_cart_button_hover');
			$('#panel4CartButton'+prodDisplayArray[x][0]).removeClass('panel_4_cart_button_on');
			$('#panel4CartButton'+prodDisplayArray[x][0]).addClass('panel_4_cart_button_off');
			$('.panel_4_multiFilter_l3_prodname_'+prodDisplayArray[x][0]).removeClass('panel_4_multiFilter_l3_prodname_hover');
			$('.panel_4_multiFilter_l3_prodname_'+prodDisplayArray[x][0]).removeClass('panel_4_multiFilter_l3_prodname_on');
			$('.panel_4_multiFilter_l3_prodname_'+prodDisplayArray[x][0]).addClass('panel_4_multiFilter_l3_prodname_off');
			$('.panel_4_multiFilter_l3_prodname_ion_'+prodDisplayArray[x][0]).hide();
			$('.panel_4_multiFilter_l3_prodname_ioff_'+prodDisplayArray[x][0]).show();
			$("#panel4ProductName" + prodDisplayArray[x][0]).removeClass("panel_4_product_name_hover");
			$("#panel4ProductName" + prodDisplayArray[x][0]).removeClass("panel_4_product_name_on");
			$("#panel4ProductName" + prodDisplayArray[x][0]).addClass("panel_4_product_name_off");
			$('.panel_4_prodlist_prodshell_'+prodDisplayArray[x][0]).removeClass('panel_4_prodlist_prodshell_on');
			$('.panel_4_prodlist_prodshell_'+prodDisplayArray[x][0]).addClass('panel_4_prodlist_prodshell_off');
			if(gLog==1){console.log("panel4ProdCartRemove(" + whatID + ") ",prodDisplayArray[x][17],p4PLFamSort);}
			if (document.getElementById('panel4ProductName'+prodDisplayArray[x][0])) {
				document.getElementById('panel4ProductName'+prodDisplayArray[x][0]).style.display = "block";
			}
			if (document.getElementById('panel4ProductBigImg'+prodDisplayArray[x][0])) {
				document.getElementById('panel4ProductBigImg'+prodDisplayArray[x][0]).style.display = "block";
			}
			if (document.getElementById('panel4ProductSmImg'+prodDisplayArray[x][0])) {
				document.getElementById('panel4ProductSmImg'+prodDisplayArray[x][0]).style.display = "block";
			}
			if (prodDisplayArray[x][17] == p4PLFamSort) {
				var j = document.getElementsByClassName('panel_4_prodlist_prodshell_'+prodDisplayArray[x][0]);
				for (k=0; k<j.length; k++) {
					j[k].style.display = "block";
				}
			}
			prodDisplayArray[x][9] = 0;
			window[('panel1ProductNameVar'+prodDisplayArray[x][0])] = 0;
		}
		prodCartArray.length = 0;
	}
	document.getElementById('PROD').value = newProdArray.toString();
	if (panel4ProductFilter == 1) {
		if(gLog==1){console.log("Prod Cart Remove P2");}
		panel4Load("panel4");
	}
	panel4WriteProdCart();
}
function panel4Store() {
	storePanelSRC = 4;
	FB.login(function(response) {}, {scope: 'email'});
}
function panel4RTReq() {
	p5Connect();
}
function panel4SliderControl(slid) {
	for (x=0; x<panel4SliderArray.length; x++) {
		if (x == slid) {
			if (panel4SliderArray[x][3] == 0) {
				$("." + panel4SliderArray[x][0]).slideDown(250);
				$(".panel_4_slider_i_" + x).removeClass(panel4SliderArray[x][2]);
				$(".panel_4_slider_i_" + x).addClass(panel4SliderArray[x][1]);
				panel4SliderArray[x][3] = 1;
			}
			else {
				$("." + panel4SliderArray[x][0]).slideUp(250);
				$(".panel_4_slider_i_" + x).removeClass(panel4SliderArray[x][1]);
				$(".panel_4_slider_i_" + x).addClass(panel4SliderArray[x][2]);
				panel4SliderArray[x][3] = 0;
			}
		}
		else {
			$("." + panel4SliderArray[x][0]).slideUp(100);
			$(".panel_4_slider_i_" + x).removeClass(panel4SliderArray[x][1]);
			$(".panel_4_slider_i_" + x).addClass(panel4SliderArray[x][2]);
			panel4SliderArray[x][3] = 0;
		}
	}
}
function panel4SlideItUp() {
	for (x=0; x<panel4SliderArray.length; x++) {
		$("." + panel4SliderArray[x][0]).slideUp(100);
		$(".panel_4_slider_i_" + x).removeClass(panel4SliderArray[x][1]);
		$(".panel_4_slider_i_" + x).addClass(panel4SliderArray[x][2]);
		panel4SliderArray[x][3] = 0;
	}
}
function panel4Back(panelVal) {
	whatPanelUp = panelVal;
	panelSwitch("panel4",panelVal,transNext);
	if (document.getElementById(panelVal+'AddressField')) {
		if (document.getElementById('street').value != "") {
			document.getElementById(panelVal+'AddressField').value = document.getElementById('street').value;
		}
	}
	if (document.getElementById(panelVal+'CityField')) {
		if (document.getElementById('city').value != "") {
			document.getElementById(panelVal+'CityField').value = document.getElementById('city').value;
		}
	}
	if (document.getElementById(panelVal+'StateField')) {
		if (document.getElementById('state').value != "") {
			document.getElementById(panelVal+'StateField').value = document.getElementById('state').value;
		}
	}
	if (document.getElementById(panelVal+'ZipField')) {
		if (document.getElementById('zip').value != "") {
			document.getElementById(panelVal+'ZipField').value = document.getElementById('zip').value;
		}
	}
	if (panelVal == "panel1" && document.getElementById('panel2')) {
		document.getElementById('panel2').style.display= 'none';
	}
}
function panel4ReqCheck() {
	if (panel4ReqCheckVar == 0) {
		panel4ReqCheckVar = 1;
		$('#panel4CRFReqCheck').removeClass('panel_4_crf_reqcheck_off');
		$('#panel4CRFReqCheck').removeClass('panel_4_crf_reqcheck_hover');
		$('#panel4CRFReqCheck').addClass('panel_4_crf_reqcheck_on');
	}
	else {
		panel4ReqCheckVar = 0;
		$('#panel4CRFReqCheck').removeClass('panel_4_crf_reqcheck_on');
		$('#panel4CRFReqCheck').removeClass('panel_4_crf_reqcheck_hover');
		$('#panel4CRFReqCheck').addClass('panel_4_crf_reqcheck_off');
	}
}
function panel4CRFSubmit() {
	if(gLog==1){console.log("panel4CRFSubmit() - START");}
	if (holdCRFSubmit == 0) {
		if (p4LocateIt == 1) {
			p4CodeComment();
		}
		else {
			p4CRFProcess();
		}
	}
}
function p4CRFProcess() {
	if (document.getElementById('panel4CRFReqCheck')) {
		var canSubmit = panel4ReqCheckVar;
	}
	else {
		var canSubmit = 1;
	}
	if (document.getElementById('panel4CRFName')) {
		if ($("#panel4CRFName").hasClass("panel_4_required") && document.getElementById('panel4CRFName').value == "") {
			$("#panel4CRFName").removeClass("panel_4_crf_name_base");
			$("#panel4CRFName").addClass("panel_4_required_error");
			var hasPanel4CRFName = "";
			canSubmit = 0;
		}
		else {
			$("#panel4CRFName").addClass("panel_4_crf_name_base");
			$("#panel4CRFName").removeClass("panel_4_required_error");
			var hasPanel4CRFName = document.getElementById('panel4CRFName').value.replace(/&/gi, "and").replace(/\?/gi, ".").replace(/#/gi, "");
		}
	}
	else {
		var hasPanel4CRFName = "";
	}
	if (document.getElementById('panel4CRFEmail')) {
		if ($("#panel4CRFEmail").hasClass("panel_4_required")) {
			if (document.getElementById('panel4CRFEmail').value == "") {
				$("#panel4CRFEmail").removeClass("panel_4_crf_email_base");
				$("#panel4CRFEmail").addClass("panel_4_required_error");
				var hasPanel4CRFEmail = "";
				canSubmit = 0;
			}
			else {
				var emailResult = checkIsEmail('panel4CRFEmail');
				if (emailResult == false) {
					errorText("You appear to have entered an invalid email address. Please try again.",6);
					$("#panel4CRFEmail").removeClass("panel_4_crf_email_base");
					$("#panel4CRFEmail").addClass("panel_4_required_error");
					var hasPanel4CRFEmail = "";
					canSubmit = 0;
				}
				else {
					$("#panel4CRFEmail").addClass("panel_4_crf_email_base");
					$("#panel4CRFEmail").removeClass("panel_4_required_error");
					var hasPanel4CRFEmail = document.getElementById('panel4CRFEmail').value.replace(/&/gi, "and").replace(/\?/gi, ".").replace(/#/gi, "");
				}
			}
		}
		else {
			if (document.getElementById('panel4CRFEmail').value != "") {
				var emailResult = checkIsEmail('panel4CRFEmail');
				if (emailResult == false) {
					errorText("You appear to have entered an invalid email address. Please try again.",6);
					$("#panel4CRFEmail").removeClass("panel_4_crf_email_base");
					$("#panel4CRFEmail").addClass("panel_4_required_error");
					var hasPanel4CRFEmail = "";
					canSubmit = 0;
				}
				else {
					$("#panel4CRFEmail").addClass("panel_4_crf_email_base");
					$("#panel4CRFEmail").removeClass("panel_4_required_error");
					var hasPanel4CRFEmail = document.getElementById('panel4CRFEmail').value.replace(/&/gi, "and").replace(/\?/gi, ".").replace(/#/gi, "");
				}
			}
			else {
				$("#panel4CRFEmail").addClass("panel_4_crf_email_base");
				$("#panel4CRFEmail").removeClass("panel_4_required_error");
				var hasPanel4CRFEmail = "";
			}
		}
	}
	else {
		var hasPanel4CRFEmail = "";
	}
	if (document.getElementById('panel4CRFPhone')) {
		if ($("#panel4CRFPhone").hasClass("panel_4_required") && document.getElementById('panel4CRFPhone').value == "") {
			$("#panel4CRFPhone").removeClass("panel_4_crf_phone_base");
			$("#panel4CRFPhone").addClass("panel_4_required_error");
			var hasPanel4CRFPhone = "";
			canSubmit = 0;
		}
		else {
			$("#panel4CRFPhone").addClass("panel_4_crf_phone_base");
			$("#panel4CRFPhone").removeClass("panel_4_required_error");
			var hasPanel4CRFPhone = document.getElementById('panel4CRFPhone').value.replace(/&/gi, "and").replace(/\?/gi, ".").replace(/#/gi, "");
		}
	}
	else {
		var hasPanel4CRFPhone = "";
	}
	if (document.getElementById('panel4CRFStores')) {
		if(gLog==1){console.log("p4CRFProcess() - panel4CRFStores");}
		if ($("#panel4CRFStores").hasClass("panel_4_required") && document.getElementById('panel4CRFStores').value == "") {
			$("#panel4CRFStores").removeClass("panel_4_crf_stores_base");
			$("#panel4CRFStores").addClass("panel_4_required_error");
			var hasPanel4CRFStores = "";
			canSubmit = 0;
		}
		else {
			$("#panel4CRFStores").addClass("panel_4_crf_stores_base");
			$("#panel4CRFStores").removeClass("panel_4_required_error");
			var hasPanel4CRFStores = document.getElementById('panel4CRFStores').value.replace(/&/gi, "and").replace(/\?/gi, ".").replace(/#/gi, "");
		}
	}
	else {
		var hasPanel4CRFStores = "";
	}
	if (document.getElementById('panel4CRFStoreArea')) {
		if(gLog==1){console.log("p4CRFProcess() - panel4CRFStoreArea");}
		if ($("#panel4CRFStoreArea").hasClass("panel_4_required") && document.getElementById('panel4CRFStoreArea').value == "") {
			$("#panel4CRFStoreArea").removeClass("panel_4_crf_storearea_base");
			$("#panel4CRFStoreArea").addClass("panel_4_required_error");
			var hasPanel4CRFStoreArea = "";
			canSubmit = 0;
		}
		else {
			$("#panel4CRFStoreArea").addClass("panel_4_crf_storearea_base");
			$("#panel4CRFStoreArea").removeClass("panel_4_required_error");
			document.getElementById('panel4CRFStoreArea').value = escape(document.getElementById('panel4CRFStoreArea').value);
			for (i=0; i<document.getElementById('panel4CRFStoreArea').value.length; i++){
				if (document.getElementById('panel4CRFStoreArea').value.indexOf("%0D%0A") > -1) {
					document.getElementById('panel4CRFStoreArea').value = document.getElementById('panel4CRFStoreArea').value.replace("%0D%0A"," ");
				}
				else if (document.getElementById('panel4CRFStoreArea').value.indexOf("%0A") > -1) {
					document.getElementById('panel4CRFStoreArea').value = document.getElementById('panel4CRFStoreArea').value.replace("%0A"," ");
				}
				else if (document.getElementById('panel4CRFStoreArea').value.indexOf("%0D") > -1) {
					document.getElementById('panel4CRFStoreArea').value = document.getElementById('panel4CRFStoreArea').value.replace("%0D"," ");
				}
			}
			document.getElementById('panel4CRFStoreArea').value = unescape(document.getElementById('panel4CRFStoreArea').value);
			var hasPanel4CRFStoreArea = document.getElementById('panel4CRFStoreArea').value.replace(/&/gi, "and").replace(/\?/gi, ".").replace(/#/gi, "");
		}
	}
	else {
		var hasPanel4CRFStoreArea = "";
	}
	if (panel4CRFChainSelect == 1) {
		var crfChainConcatArray = [];
		for (w=0;w<panel4CRFChainSelArray.length;w++) {
			crfChainConcatArray[w] = panel4CRFChainSelArray[w][1];
		}
		var crfChainConcatBit = crfChainConcatArray.toString();
		var hasPanel4CRFStores = crfChainConcatBit.replace(/&/gi, "and").replace(/\?/gi, ".").replace(/#/gi, "");
		var hasPanel4CRFStoreArea = crfChainConcatBit.replace(/&/gi, "and").replace(/\?/gi, ".").replace(/#/gi, "");
	}
	if (document.getElementById('panel4CRFComments')) {
		if(gLog==1){console.log("p4CRFProcess() - panel4CRFComments");}
		if ($("#panel4CRFComments").hasClass("panel_4_required") && document.getElementById('panel4CRFComments').value == "") {
			$("#panel4CRFComments").removeClass("panel_4_crf_comments_base");
			$("#panel4CRFComments").addClass("panel_4_required_error");
			var hasPanel4CRFComments = "";
			canSubmit = 0;
		}
		else {
			$("#panel4CRFComments").addClass("panel_4_crf_comments_base");
			$("#panel4CRFComments").removeClass("panel_4_required_error");
			var hasPanel4CRFComments = document.getElementById('panel4CRFComments').value.replace(/&/gi, "and").replace(/\?/gi, ".").replace(/#/gi, "");
		}
	}
	else {
		var hasPanel4CRFComments = "";
	}
	if (document.getElementById('panel4CRFCommentArea')) {
		if(gLog==1){console.log("p4CRFProcess() - panel4CRFCommentArea");}
		if ($("#panel4CRFCommentArea").hasClass("panel_4_required") && document.getElementById('panel4CRFCommentArea').value == "") {
			$("#panel4CRFCommentArea").removeClass("panel_4_crf_commentarea_base");
			$("#panel4CRFCommentArea").addClass("panel_4_required_error");
			var hasPanel4CRFCommentArea = "";
			canSubmit = 0;
		}
		else {
			$("#panel4CRFCommentArea").addClass("panel_4_crf_commentarea_base");
			$("#panel4CRFCommentArea").removeClass("panel_4_required_error");
			document.getElementById('panel4CRFCommentArea').value = escape(document.getElementById('panel4CRFCommentArea').value);
			for (i=0; i<document.getElementById('panel4CRFCommentArea').value.length; i++){
				if (document.getElementById('panel4CRFCommentArea').value.indexOf("%0D%0A") > -1) {
					document.getElementById('panel4CRFCommentArea').value = document.getElementById('panel4CRFCommentArea').value.replace("%0D%0A"," ");
				}
				else if (document.getElementById('panel4CRFCommentArea').value.indexOf("%0A") > -1) {
					document.getElementById('panel4CRFCommentArea').value = document.getElementById('panel4CRFCommentArea').value.replace("%0A"," ");
				}
				else if (document.getElementById('panel4CRFCommentArea').value.indexOf("%0D") > -1) {
					document.getElementById('panel4CRFCommentArea').value = document.getElementById('panel4CRFCommentArea').value.replace("%0D"," ");
				}
			}
			document.getElementById('panel4CRFCommentArea').value = unescape(document.getElementById('panel4CRFCommentArea').value);
			var hasPanel4CRFCommentArea = document.getElementById('panel4CRFCommentArea').value.replace(/&/gi, "and").replace(/\?/gi, ".").replace(/#/gi, "");
		}
	}
	else {
		var hasPanel4CRFCommentArea = "";
	}
	if (document.getElementById('panel4CRFCity')) {
		if ($("#panel4CRFCity").hasClass("panel_4_required") && document.getElementById('panel4CRFCity').value == "") {
			$("#panel4CRFCity").removeClass("panel_4_crf_city_base");
			$("#panel4CRFCity").addClass("panel_4_required_error");
			var hasPanel4CRFCity = "";
			canSubmit = 0;
		}
		else {
			$("#panel4CRFCity").addClass("panel_4_crf_city_base");
			$("#panel4CRFCity").removeClass("panel_4_required_error");
			var hasPanel4CRFCity = document.getElementById('panel4CRFCity').value.replace(/&/gi, "and").replace(/\?/gi, ".").replace(/#/gi, "");
		}
	}
	else {
		var hasPanel4CRFCity = "";
	}
	if (document.getElementById('panel4CRFState')) {
		if ($("#panel4CRFState").hasClass("panel_4_required") && document.getElementById('panel4CRFState').value == "") {
			$("#panel4CRFState").removeClass("panel_4_crf_state_base");
			$("#panel4CRFState").addClass("panel_4_required_error");
			var hasPanel4CRFState = "";
			canSubmit = 0;
		}
		else {
			$("#panel4CRFState").addClass("panel_4_crf_state_base");
			$("#panel4CRFState").removeClass("panel_4_required_error");
			var hasPanel4CRFState = document.getElementById('panel4CRFState').value.replace(/&/gi, "and").replace(/\?/gi, ".").replace(/#/gi, "");
		}
	}
	else {
		var hasPanel4CRFState = "";
	}
	if (document.getElementById('panel4CRFZip')) {
		if ($("#panel4CRFZip").hasClass("panel_4_required") && document.getElementById('panel4CRFZip').value == "") {
			$("#panel4CRFZip").removeClass("panel_4_crf_zip_base");
			$("#panel4CRFZip").addClass("panel_4_required_error");
			var hasPanel4CRFZip = "";
			canSubmit = 0;
		}
		else {
			$("#panel4CRFZip").addClass("panel_4_crf_zip_base");
			$("#panel4CRFZip").removeClass("panel_4_required_error");
			var hasPanel4CRFZip = document.getElementById('panel4CRFZip').value.replace(/&/gi, "and").replace(/\?/gi, ".").replace(/#/gi, "");
		}
	}
	else {
		var hasPanel4CRFZip = "";
	}
	if (document.getElementById('panel4CRFCountry')) {
		if ($("#panel4CRFCountry").hasClass("panel_4_required") && document.getElementById('panel4CRFCountry').value == "") {
			$("#panel4CRFCountry").removeClass("panel_4_crf_country_base");
			$("#panel4CRFCountry").addClass("panel_4_required_error");
			var hasPanel4CRFCountry = "";
			canSubmit = 0;
		}
		else {
			$("#panel4CRFCountry").addClass("panel_4_crf_country_base");
			$("#panel4CRFCountry").removeClass("panel_4_required_error");
			var hasPanel4CRFCountry = "&country=" + document.getElementById('panel4CRFCountry').value.replace(/&/gi, "and").replace(/\?/gi, ".").replace(/#/gi, "");
		}
	}
	else {
		var hasPanel4CRFCountry = "";
	}
	if (panel4CRFProdReq == 1) {
		if (document.getElementById('panel4CRFProdValues').value == "") {
			errorText("You must select products.",3);
		}
		else {
			if (document.getElementById('panel4CRFProdValues')) {
				var hasPanel4CRFProd = document.getElementById('panel4CRFProdValues').value.replace(/&/gi, "and").replace(/\?/gi, ".").replace(/#/gi, "");
			}
			else {
				var hasPanel4CRFProd = "";
			}
		}
	}
	else {
		if (document.getElementById('panel4CRFProdValues')) {
			var hasPanel4CRFProd = document.getElementById('panel4CRFProdValues').value.replace(/&/gi, "and").replace(/\?/gi, ".").replace(/#/gi, "");
		}
		else {
			var hasPanel4CRFProd = "";
		}
	}
	if (canSubmit == 1) {
		holdCRFSubmit = 1;
		hasPanel4CRFCat="";
		loaderToggle(1);
		if (panel4CRFFamilySet == 1) {
			hasPanel4CRFFam = "&family=1";
		}
		else {
			hasPanel4CRFFam = "";
		}
		if (trackVal == 1 && allOnOne == 0) {
			setTimeout(function(){
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
				$.post(controlURL + "tracktest.php", {
					CB: noCache,
					TLL: tlVal,
					A1: trackVal,
					UP1: "PANEL4",
					UC1: "REQUEST",
					UCS1: "CONSUMER",
					US1: "SUCCESS",
					USRC1: version,
					CLIENT: coreClient,
					ITER: iteration,
					DEVICE: deviceType,
					REF: referer,
					SESSID: daSESSID,
					LOCATION: '{"compiled_location":"' + document.getElementById('addressCompile').value.replace(/"/g, '') + '","latitude":"' + parseFloat(document.getElementById('LA').value).toFixed(5) + '","longitude":"' + parseFloat(document.getElementById('LO').value).toFixed(5) + '","city":"' + document.getElementById('revCodeCity').value.replace(/"/g, '') + '","state":"' + document.getElementById('revCodeState').value + '","zip":"' + document.getElementById('revCodeZip').value + '","country":"' + document.getElementById('revCodeCountry').value + '","us_code":"' + document.getElementById('revCodeUS').value + '"}',
					USER: '{"name":"' + hasPanel4CRFName.replace(/"/g, '') + '","email":"' + hasPanel4CRFEmail.replace(/"/g, '') + '","phone":"' + hasPanel4CRFPhone.replace(/"/g, '') + '","city":"' + hasPanel4CRFCity.replace(/"/g, '') + '","state":"' + hasPanel4CRFState.replace(/"/g, '') + '","zip":"' + hasPanel4CRFZip.replace(/"/g, '') + '"}',
					PLIST: compProdVal,
					PSET: prodSetVal,
					TRACK: "11",
					DUTV: dutv
					}, function(data){
						if(gLog==1){console.log("panel4CRFSubmit - tracktest: " , JSON.parse(data));}
					}
				);
			},1000);
		}
		else if (trackVal == 2 && allOnOne == 0) {
			setTimeout(function(){
				var sendObj = setTrackObj();
				sendObj['TRK'] = 11;
				sendObj['RQF'] = "panel4CRFSubmit";
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
				sendObj['USR'] = {};
				sendObj['USR']['NAM'] = hasPanel4CRFName;
				sendObj['USR']['EML'] = hasPanel4CRFEmail;
				sendObj['USR']['PHO'] = hasPanel4CRFPhone;
				sendObj['USR']['CTY'] = hasPanel4CRFCity;
				sendObj['USR']['STA'] = hasPanel4CRFState;
				sendObj['USR']['ZIP'] = hasPanel4CRFZip;
				sendTrackObj(sendObj);
			},300);
		}
		$(".panel_spit").css('display', 'none')
		var p4SendComments = "";
		var p4SendStores = "";
		if (hasPanel4CRFStores != "") {
			p4SendStores = hasPanel4CRFStores;
		}
		else if (hasPanel4CRFStoreArea != "") {
			p4SendStores = hasPanel4CRFStoreArea;
		}
		if (hasPanel4CRFComments != "") {
			p4SendComments = hasPanel4CRFComments;
		}
		else if (hasPanel4CRFCommentArea != "") {
			p4SendComments = hasPanel4CRFCommentArea;
		}

		frameVar = document.getElementById("iFrameForms");
		if(gLog==1){console.log("panel4CRFSubmit - iFrameForms: " + controlURL + "panel4Send.php?sorry_dest=" + emailTo + "&CLIENT=" + coreClient + "&name=" + hasPanel4CRFName + "&email=" + hasPanel4CRFEmail + "&phone=" + hasPanel4CRFPhone + "&prod=" + hasPanel4CRFProd + "&group=" + hasPanel4CRFCat + "&stores=" + p4SendStores + "&comments=" + p4SendComments + "&city=" + hasPanel4CRFCity + "&state=" + hasPanel4CRFState + "&zip=" + hasPanel4CRFZip + hasPanel4CRFCountry + hasPanel4CRFFam + "&SESSID=" + daSESSID);}
		frameVar.contentWindow.location.replace(controlURL + "panel4Send.php?sorry_dest=" + emailTo + "&CLIENT=" + coreClient + "&name=" + hasPanel4CRFName + "&email=" + hasPanel4CRFEmail + "&phone=" + hasPanel4CRFPhone + "&prod=" + hasPanel4CRFProd + "&group=" + hasPanel4CRFCat + "&stores=" + p4SendStores + "&comments=" + p4SendComments + "&city=" + hasPanel4CRFCity + "&state=" + hasPanel4CRFState + "&zip=" + hasPanel4CRFZip + hasPanel4CRFCountry + hasPanel4CRFFam + "&SESSID=" + daSESSID);
	}
	else {
		errorText("Please fill out required fields.",8);
	}
}
function panel4CRFResponse() {
	holdCRFSubmit = 0;
	if (document.getElementById('panel4CRFName')) {
		document.getElementById('panel4CRFName').value = "";
	}
	if (document.getElementById('panel4CRFEmail')) {
		document.getElementById('panel4CRFEmail').value = "";
	}
	if (document.getElementById('panel4CRFPhone')) {
		document.getElementById('panel4CRFPhone').value = "";
	}
	if (document.getElementById('panel4CRFStores')) {
		document.getElementById('panel4CRFStores').value = "";
	}
	if (document.getElementById('panel4CRFStoreArea')) {
		document.getElementById('panel4CRFStoreArea').value = "";
	}
	if (document.getElementById('panel4CRFComments')) {
		document.getElementById('panel4CRFComments').value = "";
	}
	if (document.getElementById('panel4CRFCommentArea')) {
		document.getElementById('panel4CRFCommentArea').value = "";
	}
	if (document.getElementById('panel4CRFCity')) {
		document.getElementById('panel4CRFCity').value = "";
	}
	if (document.getElementById('panel4CRFState')) {
		document.getElementById('panel4CRFState').value = "";
	}
	if (document.getElementById('panel4CRFZip')) {
		document.getElementById('panel4CRFZip').value = "";
	}
	errorText(p4AlertText,0);
	loaderToggle(0);
}
function panel4FieldKeypress(e,addField,result) {
	var key;
	if(window.event) {key = window.event.keyCode;}
	else {key = e.which;}
	if(key == 13){
		if (result == 1) {
			panel4SubmitForm();
		}
		return false;
	}
}
function panel4SubmitForm() {
	loaderToggle(1);
	whatStoreUp = 0;
	p4codeTries = 0;
	var canSubmit = 1;
	if (document.getElementById('panel4AddressField')) {
		if ($("#panel4AddressField").hasClass("panel_4_required") && (document.getElementById('panel4AddressField').value == "" || document.getElementById('panel4AddressField').value == p4AddFieldValueVar)) {
			$("#panel4AddressField").removeClass("panel_4_address_field_base");
			$("#panel4AddressField").addClass("panel_4_required_error");
			document.getElementById('street').value = "";
			canSubmit = 0;
		}
		else {
			$("#panel4AddressField").addClass("panel_4_address_field_base");
			$("#panel4AddressField").removeClass("panel_4_required_error");
			stripField('street','panel4AddressField');
		}
	}
	else {
		document.getElementById('street').value = "";
	}
	if (document.getElementById('panel4CityField')) {
		if ($("#panel4CityField").hasClass("panel_4_required") && (document.getElementById('panel4CityField').value == "" || document.getElementById('panel4CityField').value == cityFieldValueVar)) {
			$("#panel4CityField").removeClass("panel_4_city_field_base");
			$("#panel4CityField").addClass("panel_4_required_error");
			document.getElementById('city').value = "";
			canSubmit = 0;
		}
		else {
			$("#panel4CityField").addClass("panel_4_city_field_base");
			$("#panel4CityField").removeClass("panel_4_required_error");
			stripField('city','panel4CityField');
		}
	}
	else {
		document.getElementById('city').value = "";
	}
	if (document.getElementById('panel4StateField')) {
		if ($("#panel4StateSelect").hasClass("panel_4_required") && document.getElementById('panel4StateField').value == "") {
			$("#panel4StateSelect").removeClass("panel_4_state_field_base");
			$("#panel4StateSelect").addClass("panel_4_required_error");
			document.getElementById('state').value = "";
			canSubmit = 0;
		}
		else {
			$("#panel4StateSelect").addClass("panel_4_state_field_base");
			$("#panel4StateSelect").removeClass("panel_4_required_error");
			stripField('state','panel4StateField');
		}
	}
	else {
		document.getElementById('state').value = "";
	}
	if (document.getElementById('panel4ZipField')) {
		if ($("#panel4ZipField").hasClass("panel_4_required")) {
			if (document.getElementById('panel4ZipField').value == "") {
				$("#panel4ZipField").removeClass("panel_4_zip_field_base");
				$("#panel4ZipField").addClass("panel_4_required_error");
				document.getElementById('zip').value = "";
				canSubmit = 0;
			}
			else {
				if (zipFieldValueVar == 1) {
					var zipFieldTestVal = document.getElementById('panel4ZipField').value;
					if (isNaN(zipFieldTestVal) || zipFieldTestVal.length != 5) {
						$("#panel4ZipField").removeClass("panel_4_zip_field_base");
						$("#panel4ZipField").addClass("panel_4_required_error");
						document.getElementById('zip').value = "";
						canSubmit = 0;
					}
					else {
						$("#panel4ZipField").addClass("panel_4_zip_field_base");
						$("#panel4ZipField").removeClass("panel_4_required_error");
						stripField('zip','panel4ZipField');
					}
				}
				else {
					$("#panel4ZipField").addClass("panel_4_zip_field_base");
					$("#panel4ZipField").removeClass("panel_4_required_error");
					stripField('zip','panel4ZipField');
				}
			}
		}
	}
	else {
		document.getElementById('zip').value = "";
	}
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
	prodSelectedArray.length = 0;
	for (p=0;p<prodDisplayArray.length;p++) {
		if (prodDisplayArray[p][9] == "1") {
			prodSelectedArray.push(prodDisplayArray[p][1]);
		}
	}
	groupSelectedArray.length = 0;
	for (g=0;g<catArray.length;g++) {
		if (catArray[g][6] == "1") {
			groupSelectedArray.push(catArray[g][5]);
		}
	}
	document.getElementById('GROUP').value = groupSelectedArray.toString();
	if (document.getElementById('GROUP').value == "") {
		document.getElementById('GROUP').value = defaultIRI;
	}
	if (canSubmit == 1) {
		if (enableResize == 2) {
			parent.postMessage("SRCH:"+document.getElementById('panel4AddressField').value,refurl);
		}
		setTimeout(function(){
			panel4CodeAddress();
		},750);
	}
	else {
		errorText('Please enter a valid location.',2);
	}
}
function panel4DistanceUpdate(setVal) {
	distanceChangedVal = 1;
	if (setVal) {
		document.getElementById('panel4DistanceField').value = setVal;
		document.getElementById('distance').value = setVal;
		document.getElementById('panel4DistanceDivNum').innerHTML = setVal;
		$(".panel_close_me").hide();
		document.getElementById('panel4DistanceDivNum').innerHTML = setVal;
	}
	else {
		document.getElementById('distance').value = document.getElementById('panel4DistanceField').value;
	}
}
function panel4CatMenuSelect(setVal) {
	catMenuChangedVal = 1
	document.getElementById('panel4CatMenuHolder').value = setVal;
	for (c=0; c<catArray.length; c++) {
		if (catArray[c][0] == setVal) {
			document.getElementById('panel4CatMenuDisplay').innerHTML = catArray[c][1];
			break;
		}
	}
	$(".panel_close_me").hide();
	if (document.getElementById('panel4ProdMenuHolder')) {
		document.getElementById('panel4ProdMenuDisplay').innerHTML = panel4ProdMenuText;
		document.getElementById('panel4ProdMenuShell').style.display = "block";
		document.getElementById('panel4ProdMenuContent').innerHTML = "";
		var thisWriteVal = "";
		if (panel4ProdMenuAllVar != "") {
			thisWriteVal += "<div class='panel_4_prod_menu_div_filter_item_999999 panel_4_prod_menu_div_filter_item panel_4_prod_menu_div_filter_item_off'";
			if (hoverState==1) {
				thisWriteVal += " onmouseover='genericButtonOver(\"panel_4_prod_menu_div_filter_item_999999\",\"panel_4_prod_menu_div_filter_item\");' onfocus='genericButtonOver(\"panel_4_prod_menu_div_filter_item_999999\",\"panel_4_prod_menu_div_filter_item\");' onmouseout='genericButtonOut(\"panel_4_prod_menu_div_filter_item_999999\",\"panel_4_prod_menu_div_filter_item\");' onblur='genericButtonOut(\"panel_4_prod_menu_div_filter_item_999999\",\"panel_4_prod_menu_div_filter_item\");'";
			}
			thisWriteVal += " onclick='panel4ProdMenuSelect(999999," + panel4ProdGoValueVal + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4ProdMenuSelect(999999," + panel4ProdGoValueVal + ");}' tabindex='0' title=\"" + panel4ProdMenuAllVar + "\">" + panel4ProdMenuAllVar + "<\/div>";
		}
		for (p=0; p<prodDisplayArray.length; p++) {
			if (prodDisplayArray[p][8] == setVal) {
				thisWriteVal += "<div class='panel_4_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + " panel_4_prod_menu_div_filter_item panel_4_prod_menu_div_filter_item_off'";
				if (hoverState==1) {
					thisWriteVal += " onmouseover='genericButtonOver(\"panel_4_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_4_prod_menu_div_filter_item\");' onfocus='genericButtonOver(\"panel_4_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_4_prod_menu_div_filter_item\");' onmouseout='genericButtonOut(\"panel_4_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_4_prod_menu_div_filter_item\");' onblur='genericButtonOut(\"panel_4_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_4_prod_menu_div_filter_item\");'";
				}
				thisWriteVal += " onclick='panel4ProdMenuSelect(" + prodDisplayArray[p][0] + "," + panel4ProdGoValueVal + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel4ProdMenuSelect(" + prodDisplayArray[p][0] + "," + panel4ProdGoValueVal + ");}' tabindex='0' title=\"" + prodDisplayArray[p][2] + "\">" + prodDisplayArray[p][2] + "<\/div>";
			}
		}
		document.getElementById('panel4ProdMenuContent').innerHTML = thisWriteVal;
	}
}
function panel4SetCatSelect() {
	selIndex = document.getElementById('panel4CatSelect').selectedIndex;
	setVal = document.getElementById('panel4CatSelect').options[selIndex].value;
	document.getElementById('panel4CatMenuHolder').value = setVal;
	if (document.getElementById('panel4ProdSelect') && setVal != 0) {
		document.getElementById('panel4ProdMenuShell').style.display = "block";
		document.panel4Form.panel4ProdSelect.options.length = 0;
		document.panel4Form.panel4ProdSelect.options[0] = new Option(panel4ProdMenuText, 0);
		var optionIndex = 1;
		if (panel4ProdMenuAllVar != "") {
			document.panel4Form.panel4ProdSelect.options[optionIndex] = new Option(panel4ProdMenuAllVar, 999999);
			optionIndex++;
		}
		for (p=0; p<prodDisplayArray.length; p++) {
			if (prodDisplayArray[p][8] == setVal) {
				document.panel4Form.panel4ProdSelect.options[optionIndex] = new Option(prodDisplayArray[p][2], prodDisplayArray[p][0]);
				optionIndex++;
			}
		}
	}
	else if (document.getElementById('panel4ProdSelect') && setVal == 0) {
		document.getElementById('panel4ProdMenuShell').style.display = "none";
		document.panel4Form.panel4ProdSelect.options.length = 0;
	}
	if (document.getElementById('panel4ProdSubmitButton')) {
		document.getElementById('panel4ProdSubmitButton').style.display = "none";
	}
}
function panel4ProdMenuSelect(setVal, goVal) {
	if(gLog==1){console.log("panel4ProdMenuSelect - Start");}
	prodMenuChangedVal = 1;
	document.getElementById('panel4ProdMenuHolder').value = setVal;
	var foundAddress = 0;
	if (document.getElementById('street').value != "" && document.getElementById('street').value != p4AddFieldValueVar) {
		foundAddress = 1;
	}
	if (document.getElementById('city').value != "") {
		foundAddress = 1;
	}
	if (document.getElementById('state').value != "") {
		foundAddress = 1;
	}
	if (document.getElementById('zip').value != "") {
		foundAddress = 1;
	}
	if (setVal == 999999) {
		var thisProdArr = [];
		document.getElementById('panel4ProdMenuDisplay').innerHTML = panel4ProdMenuAllVar;
		for (p=0; p<prodDisplayArray.length; p++) {
			if (prodDisplayArray[p][8] == document.getElementById('panel4CatMenuHolder').value) {
				prodDisplayArray[p][9] = 1;
				window[('panel4ProductNameVar'+prodDisplayArray[p][0])] = 1;
				thisProdArr.push(prodDisplayArray[p][1]);
			}
			else {
				prodDisplayArray[p][9] = 0;
				window[('panel4ProductNameVar'+prodDisplayArray[p][0])] = 0;
			}
		}
		document.getElementById('PROD').value = thisProdArr.toString();
	}
	else {
		for (p=0; p<prodDisplayArray.length; p++) {
			if (prodDisplayArray[p][0] == setVal) {
				document.getElementById('panel4ProdMenuDisplay').innerHTML = prodDisplayArray[p][2];
				document.getElementById('PROD').value = prodDisplayArray[p][1];
				prodDisplayArray[p][9] = 1;
				window[('panel4ProductNameVar'+prodDisplayArray[p][0])] = 1;
			}
			else {
				prodDisplayArray[p][9] = 0;
				window[('panel4ProductNameVar'+prodDisplayArray[p][0])] = 0;
			}
		}
	}
	$(".panel_close_me").hide();
	if (goVal == 1) {
		if (foundAddress == 1) {
			panel4SubmitForm();
		}
	}
	else {
		if (document.getElementById('panel4ProdSubmitButton')) {
			if (setVal != 0) {
				document.getElementById('panel4ProdSubmitButton').style.display = "block";
			}
			else {
				document.getElementById('panel4ProdSubmitButton').style.display = "none";
			}
		}
	}
}
function panel4SetProdSelect(goVal) {
	if(gLog==1){console.log("panel4SetProdSelect - Start");}
	selIndex = document.getElementById('panel4ProdSelect').selectedIndex;
	setVal = document.getElementById('panel4ProdSelect').options[selIndex].value;
	document.getElementById('panel4ProdMenuHolder').value = setVal;
	var foundAddress = 0;
	if (document.getElementById('street').value != "" && document.getElementById('street').value != p4AddFieldValueVar) {
		foundAddress = 1;
	}
	if (document.getElementById('city').value != "") {
		foundAddress = 1;
	}
	if (document.getElementById('state').value != "") {
		foundAddress = 1;
	}
	if (document.getElementById('zip').value != "") {
		foundAddress = 1;
	}
	if (setVal == 999999) {
		var thisProdArr = [];
		for (p=0; p<prodDisplayArray.length; p++) {
			if (prodDisplayArray[p][8] == document.getElementById('panel4CatMenuHolder').value) {
				prodDisplayArray[p][9] = 1;
				window[('panel4ProductNameVar'+prodDisplayArray[p][0])] = 1;
				thisProdArr.push(prodDisplayArray[p][1]);
			}
			else {
				prodDisplayArray[p][9] = 0;
				window[('panel4ProductNameVar'+prodDisplayArray[p][0])] = 0;
			}
		}
		document.getElementById('PROD').value = thisProdArr.toString();
	}
	else {
		for (p=0; p<prodDisplayArray.length; p++) {
			if (prodDisplayArray[p][0] == setVal) {
				document.getElementById('PROD').value = prodDisplayArray[p][1];
				prodDisplayArray[p][9] = 1;
				window[('panel4ProductNameVar'+prodDisplayArray[p][0])] = 1;
			}
			else {
				prodDisplayArray[p][9] = 0;
				window[('panel4ProductNameVar'+prodDisplayArray[p][0])] = 0;
			}
		}
	}
	if (goVal == 1) {
		if (foundAddress == 1) {
			panel4SubmitForm();
		}
	}
	else {
		if (document.getElementById('panel4ProdSubmitButton')) {
			if (setVal != 0) {
				document.getElementById('panel4ProdSubmitButton').style.display = "block";
			}
			else {
				document.getElementById('panel4ProdSubmitButton').style.display = "none";
			}
		}
	}
}
function panel4ButtonHover(buttonID,buttonClass,hoverVar) {
	if (hoverVar == 0) {
		if ($('#'+buttonID).hasClass(buttonClass+'_hover')) {
			$('#'+buttonID).removeClass(buttonClass+'_hover');
			$('#'+buttonID).addClass(buttonClass+'_off');
		}
	}
	else {
		if ($('#'+buttonID).hasClass(buttonClass+'_off')) {
			$('#'+buttonID).removeClass(buttonClass+'_off');
			$('#'+buttonID).addClass(buttonClass+'_hover');
		}
	}
}
function panel4panel2Connect() {
	p2Connect();
}
function checkCRFEmail() {
	if (document.getElementById('panel4CRFEmail').value != "") {
		var emailResult = checkIsEmail('panel4CRFEmail');
		if (emailResult == false) {
			errorText("You appear to have entered an invalid email address. Please try again.",6);
			$("#panel4CRFEmail").removeClass("panel_4_crf_email_base");
			$("#panel4CRFEmail").addClass("panel_4_required_error");
			document.getElementById('panel4CRFEmail').value = "";
		}
	}
}
function panel4Hit(p4ct) {
	if (trackVal == 1 && allOnOne == 0) {
		$.post(controlURL + "tracktest.php", {
			CB: noCache,
			TLL: tlVal,
			A1: trackVal,
			UP1: "PANEL1",
			UC1: "HIT",
			UCS1: "",
			US1: "SUCCESS",
			USRC1: version,
			CLIENT: coreClient,
			ITER: iteration,
			DEVICE: deviceType,
			REF: referer,
			SESSID: daSESSID,
			PCT: p4ct,
			TRACK: "1",
			DUTV: dutv
			}, function(data){
				if(gLog==1){console.log("panel4Hit - tracktest: " , JSON.parse(data));}
			}
		);
	}
	else if (trackVal == 2 && allOnOne == 0) {
		setTimeout(function(){
			var sendObj = setTrackObj();
			sendObj['TRK'] = 1;
			sendObj['RQF'] = "panel4Hit";
			sendObj['PCT'] = p4ct;
			sendTrackObj(sendObj);
		},300);
	}
}
function panel4CountrySelect(idx) {
	document.getElementById("panel4CRFCountry").value = countryArray[idx][2];
	document.getElementById("panel4CountryDivText").innerHTML = countryArray[idx][1];
	$(".panel_4_country_div_filter_slider").hide();
}
scriptLoad++;
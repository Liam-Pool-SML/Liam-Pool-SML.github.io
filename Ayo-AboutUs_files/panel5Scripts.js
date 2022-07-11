function panel5Load() {
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
		var baseHTML = autotextIt(p5TemplateSet.panel5AltDiv,"panel5");
	}
	else {
		var baseHTML = autotextIt(p5TemplateSet.panel5BaseDiv,"panel5");
	}
	if (baseHTML.length != -1) {
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
				controlPanelButtonRender += "<div id='controlPanelButtonP5' class='control_panel_button_P5 control_panel_button_P5_off'";
				if (hoverState==1) {
					controlPanelButtonRender += " onmouseover='controlPanelButtonOver(\"P5\");' onfocus='controlPanelButtonOver(\"P5\");' onmouseout='controlPanelButtonOut(\"P5\");' onblur='controlPanelButtonOut(\"P5\");'";
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
				cpsP5 = 1;
				if (controlPanelSmallOpenStart != -1) {
					cpsP5 = 2;
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
					cpPH5 = 1;
				}
				var controlPanelMobileHideStart = controlPanelTagStrip.indexOf(" MOBILEHIDE");
				if (controlPanelMobileHideStart != -1) {
					cpPH5m = 1;
				}
				var controlPanelOpenStart = controlPanelTagStrip.indexOf(" OPEN");
				cpP5 = 1;
				if (controlPanelOpenStart != -1) {
					cpP5 = 2;
				}
				var controlPanelOpenStart = controlPanelTagStrip.indexOf(" LOCK");
				if (controlPanelOpenStart != -1) {
					cpP5Lock = 1;
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
				for (x=0; x<onretClientArray.length;x++) {
					if (onretClientArray[x][8] == 1) {
						thisCurrCount++;
					}
					else if (onretClientArray[x][8] == 2) {
						for (y=0; y<onretZipArray.length; y++) {
							if (onretZipArray[y][2] == document.getElementById('revCodeZip').value && onretZipArray[y][1] == onretClientArray[x][1]) {
								thisCurrCount++;
								break;
							}
						}
					}
				}
				if(gLog==1){console.log("eCommButTagStart - thisCurrCount: " , thisCurrCount);}
			var eCommButDisplay = "";
			var eCommButDisplayAlt = " style='display:none'";
			if (thisCurrCount == 0) {
				eCommButDisplay = " style='display:none'";
				eCommButDisplayAlt = "";
			}
			var eCommCountSingularStart = eCommButTagStrip.indexOf(" SINGULAR=");
			if (eCommCountSingularStart != -1) {
				var eCommCountSingularEnd = eCommButTagStrip.indexOf("]",eCommCountSingularStart);
				panel5ECommCountSingularVar = " " + eCommButTagStrip.substring((eCommCountSingularStart+11),(eCommCountSingularEnd));
			}
			var eCommCountPluralStart = eCommButTagStrip.indexOf(" PLURAL=");
			if (eCommCountPluralStart != -1) {
				var eCommCountPluralEnd = eCommButTagStrip.indexOf("]",eCommCountPluralStart);
				panel5ECommCountPluralVar = " " + eCommButTagStrip.substring((eCommCountPluralStart+9),(eCommCountPluralEnd));
			}
			var eCommCountAltVar = "MORE PRODUCTS ONLINE"
			var eCommCountAltStart = eCommButTagStrip.indexOf(" ALT=");
			if (eCommCountAltStart != -1) {
				var eCommCountAltEnd = eCommButTagStrip.indexOf("]",eCommCountAltStart);
				eCommCountAltVar = " " + eCommButTagStrip.substring((eCommCountAltStart+6),(eCommCountAltEnd));
			}
			if (thisCurrCount == 1) {
				var thisSCT = panel5ECommCountSingularVar;
			}
			else {
				var thisSCT = panel5ECommCountPluralVar;
			}
			eCommButRender = "<div id='panel5ECommButton' class='panel_5_ecomm_button panel_5_ecomm_button panel_5_ecomm_button_off'";
			if (hoverState==1) {
				eCommButRender += " onmouseover='genericButtonOver(\"panel_5_ecomm_button\",\"panel_5_ecomm_button\");' onfocus='genericButtonOver(\"panel_5_ecomm_button\",\"panel_5_ecomm_button\");' onmouseout='genericButtonOut(\"panel_5_ecomm_button\",\"panel_5_ecomm_button\");' onblur='genericButtonOut(\"panel_5_ecomm_button\",\"panel_5_ecomm_button\");'";
			}
			eCommButRender += " onclick='showOnRet();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){showOnRet();}'" + eCommButDisplay + " tabindex='0' title=\"" + thisSCT + "\"><span id='panel5ECommButNum'>" + thisCurrCount + "<\/span><span id='panel5ECommButText'>" +  thisSCT + "<\/span><\/div>";
			baseHTML = eCommButHTMLStart + eCommButRender + eCommButHTMLEnd;
		}
		var sliderON = 1;
		while (sliderON == 1) {
			var sliderTagStart = baseHTML.indexOf("<!--SLIDER");
			if (sliderTagStart != -1) {
				var sliderTagEnd = baseHTML.indexOf(">",sliderTagStart+1);
				var sliderTagStrip = baseHTML.substring(sliderTagStart,(sliderTagEnd+1));
				var sliderHTMLStart = baseHTML.substr(0,sliderTagStart);
				var sliderHTMLEnd = baseHTML.substr((sliderTagEnd+1));
				var sl = panel5SliderArray.length;
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
					sliderDivVal = sliderTagStrip.substring((sliderDivStart+6),(sliderDivEnd));
				}
				else {
					sliderDivVal = "declare_da_div_dude";
				}
				var sliderOnItalicStart = sliderTagStrip.indexOf(" FNTAWON=");
				if (sliderOnItalicStart != -1) {
					var sliderOnItalicEnd = sliderTagStrip.indexOf("]",sliderOnItalicStart);
					sliderOnItalicVar = sliderTagStrip.substring((sliderOnItalicStart+10),(sliderOnItalicEnd));
				}
				else {
					sliderOnItalicVar = "";
				}
				var sliderOffItalicStart = sliderTagStrip.indexOf(" FNTAWOFF=");
				if (sliderOffItalicStart != -1) {
					var sliderOffItalicEnd = sliderTagStrip.indexOf("]",sliderOffItalicStart);
					sliderOffItalicVar = sliderTagStrip.substring((sliderOffItalicStart+11),(sliderOffItalicEnd));
				}
				else {
					sliderOffItalicVar = "";
				}
				panel5SliderArray[sl] = [sliderDivVal, sliderOnItalicVar, sliderOffItalicVar, 0];
				baseHTML = sliderHTMLStart + "<div id='panel5SliderWrap_" + sl + "' class='panel_5_slider_wrap'><div id='panel5SliderContainer_" + sl + "' class='panel_5_slider_container' onclick='panel5SliderControl(" + sl + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5SliderControl(" + sl + ");}' tabindex='0' title=\"" + sliderValueVal + "\"><i class='panel_5_slider_i panel_5_slider_i_" + sl + " " + sliderOffItalicVar + "'><\/i><div id='panel5SliderTitle_" + sl + "' class='panel_5_slider_title'>" + sliderValueVal + "<\/div><\/div><\/div>" + sliderHTMLEnd;
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
				var addFieldClearRender = "clearAddfield(5);";
			}
			else {
				var addFieldClearRender = "";
			}
			var addFieldRender = "";
			var addFieldValueStart = addFieldTagStrip.indexOf(" VALUE=");
			if (addFieldValueStart != -1) {
				var addFieldValueEnd = addFieldTagStrip.indexOf("]");
				var addFieldValueVal = addFieldTagStrip.substring((addFieldValueStart+8),(addFieldValueEnd));
				p5AddFieldValueVar = addFieldValueVal;
				var addFieldValueRender = " placeholder='"+addFieldValueVal+"'";
				var addFieldFocusRender = " onfocus='" + addFieldClearRender + "'";
				var addFieldBlurRender = "";
			}
			else {
				p5AddFieldValueVar = "";
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
				var addFieldReqRender = " class='panel_5_address_field panel_5_address_field_base panel_5_required" + addFieldBlankRender + "'";
			}
			else {
				var addFieldReqRender = " class='panel_5_address_field panel_5_address_field_base" + addFieldBlankRender + "'";
			}
			var addFieldSubStart = addFieldTagStrip.indexOf(" SUBMIT");
			if (addFieldSubStart != -1) {
				var addFieldSubRender = " onkeyup='panel5FieldKeypress(event,\"panel5AddressField\",1);'";
			}
			else {
				var addFieldSubRender = "";
			}
			addFieldRender = "<input type='text' name='panel5AddressField' id='panel5AddressField'" + addFieldValueRender + addFieldFocusRender + addFieldBlurRender + addFieldReqRender + addFieldSubRender + " title=\"" + addFieldValueVal + "' aria-label='Enter a city, state, or postal code to find stores near you\">";
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
				var cityFieldFocusRender = " onfocus='fieldBlurFocus(\"panel5CityField\",\""+cityFieldValueVal+"\",1);'";
				var cityFieldBlurRender = " onblur='fieldBlurFocus(\"panel5CityField\",\""+cityFieldValueVal+"\",0);'";
			}
			else {
				cityFieldValueVar = "";
				var cityFieldValueRender = "";
				var cityFieldFocusRender = "";
				var cityFieldBlurRender = "";
			}
			var cityFieldReqStart = cityFieldTagStrip.indexOf(" REQUIRED");
			if (cityFieldReqStart != -1) {
				var cityFieldReqRender = " class='panel_5_city_field panel_5_city_field_base panel_5_required'";
			}
			else {
				var cityFieldReqRender = " class='panel_5_city_field panel_5_city_field_base'";
			}
			var cityFieldSubStart = cityFieldTagStrip.indexOf(" SUBMIT");
			if (cityFieldSubStart != -1) {
				var cityFieldSubRender = " onkeyup='panel5FieldKeypress(event,\"panel5CityField\",1);'";
			}
			else {
				var cityFieldSubRender = " onkeyup='panel5FieldKeypress(event,\"panel5CityField\",0);'";
			}
			cityFieldRender = "<input type='text' name='panel5CityField' id='panel5CityField'" + cityFieldValueRender + cityFieldFocusRender + cityFieldBlurRender + cityFieldReqRender + cityFieldSubRender + " title=\"City\">";
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
				var stateFieldValueVal = stateBase;
				var stateFieldValueRender = "<option value='" + stateFieldValueVal + "' selected='selected'>" + stateFieldValueVal + "<\/option>";
			}
			else {
				var stateFieldValueRender = "";
			}
			stateFieldRender = "<input type='hidden' name='panel5StateField' id='panel5StateField' value='" + stateFieldValueVal + "'><select name='panel5StateSelect' id='panel5StateSelect' class='panel_5_state_field panel_5_state_field_base' onchange='setSelect(\"panel5StateSelect\",\"panel5StateField\");' title=\"State\">" + stateFieldValueRender;
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
				var zipFieldReqRender = " class='panel_5_zip_field panel_5_zip_field_base panel_5_required'";
			}
			else {
				var zipFieldReqRender = " class='panel_5_zip_field panel_5_zip_field_base'";
			}
			var zipFieldSubStart = zipFieldTagStrip.indexOf(" SUBMIT");
			if (zipFieldSubStart != -1) {
				var zipFieldSubRender = " onkeyup='panel5FieldKeypress(event,\"panel5ZipField\",1);'";
			}
			else {
				var zipFieldSubRender = " onkeyup='panel5FieldKeypress(event,\"panel5ZipField\",0);'";
			}
			zipFieldRender = "<input type='text' name='panel5ZipField' id='panel5ZipField'" + zipFieldReqRender + zipFieldSubRender + " title=\"Postal Code\">";
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
			productSelectRender += "<select name='panel5ProductSelect' id='panel5ProductSelect' class='panel_5_product_select' onchange='setProductSelect(\"panel5ProductSelect\");'><option value='ALL'";
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
			if (scopeFieldValueStart != -1) {
				var scopeFieldValueEnd = scopeFieldTagStrip.indexOf("]");
				var scopeFieldValueVal = scopeFieldTagStrip.substring((scopeFieldValueStart+8),(scopeFieldValueEnd));
			}
			else {
				var scopeFieldValueVal = 0;
			}
			scopeFieldRender = "<input type='hidden' name='panel5ScopeField' id='panel5ScopeField' value='" + scopeFieldValueVal + "'><select name='panel5ScopeSelect' id='panel5ScopeSelect' class='panel_5_scope_field panel_5_scope_field_base' onchange='setSelect(\"panel5ScopeSelect\",\"panel5ScopeField\");' title=\"Scope\"><option value='0'";
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
				panel2DistanceFlag = 1;
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
				distanceFieldItalicVar = "<i class='fa " + distanceFieldTagStrip.substring((distanceFieldItalicStart+8),(distanceFieldItalicEnd)) + "'><\/i>";
			}
			else {
				distanceFieldItalicVar = "";
			}
			distanceFieldRender = "<input type='hidden' name='panel5DistanceField' id='panel5DistanceField' value='" + distanceFieldValueVal + "' title=\"Distance\">";
			if (distanceDivValueVal == 0) {
				distanceFieldRender += "<select name='panel5DistanceSelect' id='panel5DistanceSelect' class='panel_5_distance_field panel_5_distance_field_base' onchange='setSelect(\"panel5DistanceSelect\",\"panel5DistanceField\");panel5DistanceUpdate();'>";
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
				distanceFieldRender += "<div id='panel5DistanceDivShell' class='panel_5_distance_div_shell'><div class='panel_5_distance_div_filter_arrow'><div class='panel_5_distance_div_filter panel_5_distance_div_filter_base panel_5_distance_div_filter_base_off'";
				if (hoverState==1) {
					distanceFieldRender += " onmouseover='genericButtonOver(\"panel_5_distance_div_filter\",\"panel_5_distance_div_filter_base\");' onfocus='genericButtonOver(\"panel_5_distance_div_filter\",\"panel_5_distance_div_filter_base\");' onmouseout='genericButtonOut(\"panel_5_distance_div_filter\",\"panel_5_distance_div_filter_base\");' onblur='genericButtonOut(\"panel_5_distance_div_filter\",\"panel_5_distance_div_filter_base\");'";
				}
				distanceFieldRender += " onclick='$(\".panel_5_distance_div_filter_slider\").toggle();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){$(\".panel_5_distance_div_filter_slider\").toggle();}' tabindex='0' title=\"" + distanceText + "\"><div class='panel_5_distance_div_filter_text'><span id='panel5DistanceDivNum'>" + distanceFieldValueVal + "<\/span> <span class='distancefield_miles_span'>" + distanceText + "<\/span> " + distanceFieldItalicVar + "<\/div><\/div><\/div><div class='panel_5_distance_div_filter_slider panel_close_me' style='display:none;'><div class='panel_5_distance_div_filter_liner'>";
				for (w=0; w<distanceFieldOptionsArray.length; w++) {
					distanceFieldRender += "<div class='panel_5_distance_div_filter_item_" + distanceFieldOptionsArray[w] + " panel_5_distance_div_filter_item panel_5_distance_div_filter_item_off'";
					if (hoverState==1) {
						distanceFieldRender += " onmouseover='genericButtonOver(\"panel_5_distance_div_filter_item_" + distanceFieldOptionsArray[w] + "\",\"panel_5_distance_div_filter_item\");' onfocus='genericButtonOver(\"panel_5_distance_div_filter_item_" + distanceFieldOptionsArray[w] + "\",\"panel_5_distance_div_filter_item\");' onmouseout='genericButtonOut(\"panel_5_distance_div_filter_item_" + distanceFieldOptionsArray[w] + "\",\"panel_5_distance_div_filter_item\");' onblur='genericButtonOut(\"panel_5_distance_div_filter_item_" + distanceFieldOptionsArray[w] + "\",\"panel_5_distance_div_filter_item\");'";
					}
					distanceFieldRender += " onclick='panel5DistanceUpdate(" + distanceFieldOptionsArray[w] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5DistanceUpdate(" + distanceFieldOptionsArray[w] + ");}' tabindex='0' title=\"" + distanceFieldOptionsArray[w] + " " + distanceText + "\">" + distanceFieldOptionsArray[w] + " " + distanceText + "<\/div>";
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
			if (resultsFieldValueStart != -1) {
				var resultsFieldValueEnd = resultsFieldTagStrip.indexOf("]");
				var resultsFieldValueVal = resultsFieldTagStrip.substring((resultsFieldValueStart+8),(resultsFieldValueEnd));
			}
			else {
				var resultsFieldValueVal = 50;
			}
			resultsFieldRender = "<input type='hidden' name='panel5ResultsField' id='panel5ResultsField' value='" + resultsFieldValueVal + "'><select name='panel5ResultsSelect' id='panel5ResultsSelect' class='panel_5_results_field panel_5_results_field_base' onchange='setSelect(\"panel5ResultsSelect\",\"panel5ResultsField\");' title=\"Results\"><option value='10'";
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
			sortFieldRender = "<input type='hidden' name='panel5SortField' id='panel5SortField' value='" + sortFieldValueVal + "' title=\"Sort Order\"><select name='panel5SortSelect' id='panel5SortSelect' class='panel_5_sort_field panel_5_sort_field_base' onchange='setSelect(\"panel5SortSelect\",\"panel5SortField\");'><option value='0'";
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
				labelMenuRender += "<input type='hidden' name='panel2LabelMenuHolder' id='panel2LabelMenuHolder' value='0' title=\"Label Holder\"><div id='panel2LabelMenuShell' class='panel_2_label_menu_div_shell'>";
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
			panel5HasCatMenu = 1;
			var catMenuValueStart = catMenuTagStrip.indexOf(" VALUE=");
			if (catMenuValueStart != -1) {
				var catMenuValueEnd = catMenuTagStrip.indexOf("]",catMenuValueStart);
				var catMenuValueVal = catMenuTagStrip.substring((catMenuValueStart+8),(catMenuValueEnd));
			}
			else {
				var catMenuValueVal = "SELECT A CATEGORY";
			}
			panel5CatMenuText = catMenuValueVal;
			panel5ThereIsACat = 0;
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
					panel5ThereIsACat = prodDisplayArray[pc][8];
					for (cc=0; cc<catArray.length; cc++) {
						if (catArray[cc][0] == panel5ThereIsACat) {
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
			catMenuRender = "<input type='hidden' name='panel5CatMenuHolder' id='panel5CatMenuHolder' value='" + panel5ThereIsACat + "' title=\"Category Holder\"><div id='panel5CatMenuShell' class='panel_5_cat_menu_div_shell'";
			if (panel5HasFamMenu == 1) {
				catMenuRender += " style='display:none;'";
			}
			catMenuRender += ">";
			if (catDivValueVal == 0) {
				catMenuRender += "<select name='panel5CatSelect' id='panel5CatSelect' class='panel_5_cat_field panel_5_cat_field_base' onchange='panel5SetCatSelect();'><option value='0'";
				if (panel5ThereIsACat == 0) {
					catMenuRender += " selected='selected'";
				}
				catMenuRender += ">" + panel5CatMenuText + "<\/option>";
				if (panel5HasFamMenu == 0) {
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
				catMenuRender += "<div class='panel_5_cat_menu_div_filter_arrow'><div class='panel_5_cat_menu_div_filter panel_5_cat_menu_div_filter_base panel_5_cat_menu_div_filter_base_off'";
				if (hoverState==1) {
					catMenuRender += " onmouseover='genericButtonOver(\"panel_5_cat_menu_div_filter\",\"panel_5_cat_menu_div_filter_base\");' onfocus='genericButtonOver(\"panel_5_cat_menu_div_filter\",\"panel_5_cat_menu_div_filter_base\");' onmouseout='genericButtonOut(\"panel_5_cat_menu_div_filter\",\"panel_5_cat_menu_div_filter_base\");' onblur='genericButtonOut(\"panel_5_cat_menu_div_filter\",\"panel_5_cat_menu_div_filter_base\");'";
				}
				catMenuRender += " onclick='$(\".panel_5_cat_menu_div_filter_slider\").toggle();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){$(\".panel_5_cat_menu_div_filter_slider\").toggle();}' tabindex='0' title=\"" + catMenuValueVal + "\"><div class='panel_5_cat_menu_div_filter_text'><span id='panel5CatMenuDisplay'>" + catMenuValueVal + "<\/span> " + catMenuItalicVar + "<\/div><\/div><\/div><div class='panel_5_cat_menu_div_filter_slider panel_close_me' style='display:none;'><div class='panel_5_cat_menu_div_filter_liner' id='panel5CatMenuContent'>";
				if (panel5HasFamMenu == 0) {
					for (c=0; c<catArray.length; c++) {
						catMenuRender += "<div class='panel_5_cat_menu_div_filter_item_" + catArray[c][0] + " panel_5_cat_menu_div_filter_item panel_5_cat_menu_div_filter_item_off'";
						if (hoverState==1) {
							catMenuRender += " onmouseover='genericButtonOver(\"panel_5_cat_menu_div_filter_item_" + catArray[c][0] + "\",\"panel_5_cat_menu_div_filter_item\");' onfocus='genericButtonOver(\"panel_5_cat_menu_div_filter_item_" + catArray[c][0] + "\",\"panel_5_cat_menu_div_filter_item\");' onmouseout='genericButtonOut(\"panel_5_cat_menu_div_filter_item_" + catArray[c][0] + "\",\"panel_5_cat_menu_div_filter_item\");' onblur='genericButtonOut(\"panel_5_cat_menu_div_filter_item_" + catArray[c][0] + "\",\"panel_5_cat_menu_div_filter_item\");'";
						}
						catMenuRender += " onclick='panel5CatMenuSelect(" + catArray[c][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5CatMenuSelect(" + catArray[c][0] + ");}' tabindex='0' title=\"" + catArray[c][1] + "\">" + catArray[c][1] + "<\/div>";
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
			panel5HasProdMenu = 1;
			var prodMenuValueStart = prodMenuTagStrip.indexOf(" VALUE=");
			if (prodMenuValueStart != -1) {
				var prodMenuValueEnd = prodMenuTagStrip.indexOf("]",prodMenuValueStart);
				var prodMenuValueVal = prodMenuTagStrip.substring((prodMenuValueStart+8),(prodMenuValueEnd));
			}
			else {
				var prodMenuValueVal = "SELECT A PRODUCT";
			}
			panel5ProdMenuText = prodMenuValueVal;
			panel5ThereIsAProd = "";
			if (panel5ThereIsACat != 0) {
				prodMenuArray = [];
				for (p=0; p<prodDisplayArray.length; p++) {
					if (prodDisplayArray[p][8] == panel5ThereIsACat) {
						prodMenuArray.push(prodDisplayArray[p][1]);
					}
				}
				panel5ProdAllList = prodMenuArray.toString();
			}
			for (pc=0; pc<prodDisplayArray.length; pc++) {
				if (prodDisplayArray[pc][1] == document.getElementById('PROD').value) {
					panel5ThereIsAProd = prodDisplayArray[pc][1];
					prodMenuValueVal = prodDisplayArray[pc][2];
					break;
				}
			}
			if (panel5ProdAllList == document.getElementById('PROD').value) {
				panel5ThereIsAProd = 999999;
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
				panel5ProdMenuAllVar = prodMenuTagStrip.substring((prodMenuAllStart+6),(prodMenuAllEnd));
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
				panel5ProdGoValueVal = 1;
			}
			prodMenuRender = "<input type='hidden' name='panel5ProdMenuHolder' id='panel5ProdMenuHolder' value='" + panel5ThereIsAProd + "' title=\"Product Holder\"><div id='panel5ProdMenuShell' class='panel_5_prod_menu_div_shell'";
			if (panel5HasCatMenu == 1 && panel5ThereIsAProd == "") {
				prodMenuRender += " style='display:none;'";
			}
			prodMenuRender += ">";
			if (prodDivValueVal == 0) {
				prodMenuRender += "<select name='panel5ProdSelect' id='panel5ProdSelect' class='panel_5_prod_field panel_5_prod_field_base' onchange='panel5SetProdSelect(" + panel5ProdGoValueVal + ");'><option value='0'";
				if (panel5ThereIsAProd == 0) {
					prodMenuRender += " selected='selected'";
				}
				prodMenuRender += ">" + panel5ProdMenuText + "<\/option>";
				if (panel5HasCatMenu == 0) {
					for (p=0; p<prodDisplayArray.length; p++) {
						prodMenuRender += "<option value='" + prodDisplayArray[p][0] + "'";
						if (prodMenuValueVal == prodDisplayArray[p][2]) {
							prodMenuRender += " selected='selected'";
						}
						prodMenuRender += ">" + prodDisplayArray[p][2] + "<\/option>";
					}
				}
				else if (panel5ThereIsACat != 0) {
					if (panel5ProdMenuAllVar != "") {
						prodMenuRender += "<option value='999999'";
						if (panel5ThereIsAProd == 999999) {
							prodMenuRender += " selected='selected'";
						}
						prodMenuRender += ">" + panel5ProdMenuAllVar + "<\/option>";
					}
					for (p=0; p<prodDisplayArray.length; p++) {
						if (prodDisplayArray[p][8] == panel5ThereIsACat) {
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
				prodMenuRender += "<div class='panel_5_prod_menu_div_filter_arrow'><div class='panel_5_prod_menu_div_filter panel_5_prod_menu_div_filter_base panel_5_prod_menu_div_filter_base_off'";
				if (hoverState==1) {
					prodMenuRender += " onmouseover='genericButtonOver(\"panel_5_prod_menu_div_filter\",\"panel_5_prod_menu_div_filter_base\");' onfocus='genericButtonOver(\"panel_5_prod_menu_div_filter\",\"panel_5_prod_menu_div_filter_base\");' onmouseout='genericButtonOut(\"panel_5_prod_menu_div_filter\",\"panel_5_prod_menu_div_filter_base\");' onblur='genericButtonOut(\"panel_5_prod_menu_div_filter\",\"panel_5_prod_menu_div_filter_base\");'";
				}
				prodMenuRender += " onclick='$(\".panel_5_prod_menu_div_filter_slider\").toggle();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){$(\".panel_5_prod_menu_div_filter_slider\").toggle();}' tabindex='0' title=\"" + panel5ProdMenuAllVar + "\"><div class='panel_5_prod_menu_div_filter_text'><span id='panel5ProdMenuDisplay'>";
				if (panel5ThereIsAProd == 999999) {
					prodMenuRender += panel5ProdMenuAllVar;
				}
				else {
					prodMenuRender += prodMenuValueVal
				}
				prodMenuRender += "<\/span> " + prodMenuItalicVar + "<\/div><\/div><\/div><div class='panel_5_prod_menu_div_filter_slider panel_close_me' style='display:none;'><div class='panel_5_prod_menu_div_filter_liner' id='panel5ProdMenuContent'>";
				if (panel5HasCatMenu == 0) {
					for (p=0; p<prodDisplayArray.length; p++) {
						prodMenuRender += "<div class='panel_5_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + " panel_5_prod_menu_div_filter_item panel_5_prod_menu_div_filter_item_off'";
						if (hoverState==1) {
							prodMenuRender += " onmouseover='genericButtonOver(\"panel_5_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_5_prod_menu_div_filter_item\");' onfocus='genericButtonOver(\"panel_5_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_5_prod_menu_div_filter_item\");' onmouseout='genericButtonOut(\"panel_5_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_5_prod_menu_div_filter_item\");' onblur='genericButtonOut(\"panel_5_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_5_prod_menu_div_filter_item\");'";
						}
						prodMenuRender += " onclick='panel5ProdMenuSelect(" + prodDisplayArray[p][0] + "," + panel5ProdGoValueVal + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5ProdMenuSelect(" + prodDisplayArray[p][0] + "," + panel5ProdGoValueVal + ");}' tabindex='0' title=\"" + prodDisplayArray[p][2] + "\">" + prodDisplayArray[p][2] + "<\/div>";
					}
				}
				else if (panel5ThereIsACat != 0) {
					if (panel5ProdMenuAllVar != "") {
						prodMenuRender += "<div class='panel_5_prod_menu_div_filter_item_999999 panel_5_prod_menu_div_filter_item panel_5_prod_menu_div_filter_item_off'";
						if (hoverState==1) {
							prodMenuRender += " onmouseover='genericButtonOver(\"panel_5_prod_menu_div_filter_item_999999\",\"panel_5_prod_menu_div_filter_item\");' onfocus='genericButtonOver(\"panel_5_prod_menu_div_filter_item_999999\",\"panel_5_prod_menu_div_filter_item\");' onmouseout='genericButtonOut(\"panel_5_prod_menu_div_filter_item_999999\",\"panel_5_prod_menu_div_filter_item\");' onblur='genericButtonOut(\"panel_5_prod_menu_div_filter_item_999999\",\"panel_5_prod_menu_div_filter_item\");'";
						}
						prodMenuRender += " onclick='panel5ProdMenuSelect(999999," + panel5ProdGoValueVal + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5ProdMenuSelect(999999," + panel5ProdGoValueVal + ");}' tabindex='0' title=\"" + panel5ProdMenuAllVar + "\">" + panel5ProdMenuAllVar + "<\/div>";
					}
					for (p=0; p<prodDisplayArray.length; p++) {
						if (prodDisplayArray[p][8] == panel5ThereIsACat) {
							prodMenuRender += "<div class='panel_5_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + " panel_5_prod_menu_div_filter_item panel_5_prod_menu_div_filter_item_off'";
							if (hoverState==1) {
								prodMenuRender += " onmouseover='genericButtonOver(\"panel_5_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_5_prod_menu_div_filter_item\");' onfocus='genericButtonOver(\"panel_5_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_5_prod_menu_div_filter_item\");' onmouseout='genericButtonOut(\"panel_5_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_5_prod_menu_div_filter_item\");' onblur='genericButtonOut(\"panel_5_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_5_prod_menu_div_filter_item\");'";
							}
							prodMenuRender += " onclick='panel5ProdMenuSelect(" + prodDisplayArray[p][0] + "," + panel5ProdGoValueVal + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5ProdMenuSelect(" + prodDisplayArray[p][0] + "," + panel5ProdGoValueVal + ");}' tabindex='0' title=\"" + prodDisplayArray[p][2] + "\">" + prodDisplayArray[p][2] + "<\/div>";
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
			prodSubButtonRender += "<div id='panel5ProdSubmitButton' class='panel_5_prod_submit_button panel_5_prod_submit_button_off'";
			if (hoverState==1) {
				prodSubButtonRender += " onmouseover='panel5ButtonHover(\"panel5ProdSubmitButton\",\"panel_5_prod_submit_button\",1);' onfocus='panel5ButtonHover(\"panel5ProdSubmitButton\",\"panel_5_prod_submit_button\",1);' onmouseout='panel5ButtonHover(\"panel5ProdSubmitButton\",\"panel_5_prod_submit_button\",0);' onblur='panel5ButtonHover(\"panel5ProdSubmitButton\",\"panel_5_prod_submit_button\",0);'";
			}
			prodSubButtonRender += " onclick='panel5SubmitForm();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5SubmitForm();}'";
			if (panel5ThereIsAProd == "") {
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
			storeButtonRender += "<div id='panel5StoreButton' class='panel_5_store_button panel_5_store_button_off'";
			if (hoverState==1) {
				storeButtonRender += " onmouseover='panel5ButtonHover(\"panel5StoreButton\",\"panel_5_store_button\",1);' onfocus='panel5ButtonHover(\"panel5StoreButton\",\"panel_5_store_button\",1);' onmouseout='panel5ButtonHover(\"panel5StoreButton\",\"panel_5_store_button\",0);' onblur='panel5ButtonHover(\"panel5StoreButton\",\"panel_5_store_button\",0);'";
			}
			storeButtonRender += " onclick='panel5Store();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5Store();}' tabindex='0' title=\"" + storeButtonValueVar + "\">" + storeButtonItalicVar + storeButtonValueVar + "<\/div>";
			baseHTML = storeButtonHTMLStart + storeButtonRender + storeButtonHTMLEnd;
		}
		var resultsCompileTagStart = baseHTML.indexOf("<!--RESULTSCOMPILE");
		if (resultsCompileTagStart != -1) {
			var resultsCompileTagEnd = baseHTML.indexOf(">",resultsCompileTagStart);
			var resultsCompileHTMLStart = baseHTML.substr(0,resultsCompileTagStart);
			var resultsCompileHTMLEnd = baseHTML.substr((resultsCompileTagEnd+1));
			baseHTML = resultsCompileHTMLStart + "<span id='panel5ResultsCompile'>" + document.getElementById('addressCompile').value + "<\/span>" + resultsCompileHTMLEnd;
		}
		var resultsStreetTagStart = baseHTML.indexOf("<!--RESULTSSTREET");
		if (resultsStreetTagStart != -1) {
			var resultsStreetTagEnd = baseHTML.indexOf(">",resultsStreetTagStart);
			var resultsStreetHTMLStart = baseHTML.substr(0,resultsStreetTagStart);
			var resultsStreetHTMLEnd = baseHTML.substr((resultsStreetTagEnd+1));
			baseHTML = resultsStreetHTMLStart + "<span id='panel5ResultsStreet'>" + document.getElementById('revCodeStreet').value + "<\/span>" + resultsStreetHTMLEnd;
		}
		var resultsCityTagStart = baseHTML.indexOf("<!--RESULTSCITY");
		if (resultsCityTagStart != -1) {
			var resultsCityTagEnd = baseHTML.indexOf(">",resultsCityTagStart);
			var resultsCityHTMLStart = baseHTML.substr(0,resultsCityTagStart);
			var resultsCityHTMLEnd = baseHTML.substr((resultsCityTagEnd+1));
			baseHTML = resultsCityHTMLStart + "<span id='panel5ResultsCity'>" + document.getElementById('revCodeCity').value + "<\/span>" + resultsCityHTMLEnd;
		}
		var resultsStateTagStart = baseHTML.indexOf("<!--RESULTSSTATE");
		if (resultsStateTagStart != -1) {
			var resultsStateTagEnd = baseHTML.indexOf(">",resultsStateTagStart);
			var resultsStateHTMLStart = baseHTML.substr(0,resultsStateTagStart);
			var resultsStateHTMLEnd = baseHTML.substr((resultsStateTagEnd+1));
			baseHTML = resultsStateHTMLStart + "<span id='panel5ResultsState'>" + document.getElementById('revCodeState').value + "<\/span>" + resultsStateHTMLEnd;
		}
		var resultsZipTagStart = baseHTML.indexOf("<!--RESULTSZIP");
		if (resultsZipTagStart != -1) {
			var resultsZipTagEnd = baseHTML.indexOf(">",resultsZipTagStart);
			var resultsZipHTMLStart = baseHTML.substr(0,resultsZipTagStart);
			var resultsZipHTMLEnd = baseHTML.substr((resultsZipTagEnd+1));
			baseHTML = resultsZipHTMLStart + "<span id='panel5ResultsZip'>" + document.getElementById('revCodeZip').value + "<\/span>" + resultsZipHTMLEnd;
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
							resultsProdlistWrite += "<span class='panel_5_results_prodlist_prod'>" + prodDisplayArray[bpl][2] + "<\/span>";
							break;
						}
					}
				}
			}
			else {
				resultsProdlistWrite = "<span class='panel_5_results_prodlist_prod'>" + resultsProdlistDefaultVal + "<\/span>";
			}
			baseHTML = resultsProdlistHTMLStart + "<span id='panel5ResultsProdlist'>" + resultsProdlistWrite + "<\/span>" + resultsProdlistHTMLEnd;
		}
		var prodShopCartTagStart = baseHTML.indexOf("<!--PRODSHOPCART");
		if (prodShopCartTagStart != -1) {
			var prodShopCartTagEnd = baseHTML.indexOf(">",prodShopCartTagStart);
			var prodShopCartTagStrip = baseHTML.substring(prodShopCartTagStart,(prodShopCartTagEnd+1));
			var prodShopCartHTMLStart = baseHTML.substr(0,prodShopCartTagStart);
			var prodShopCartHTMLEnd = baseHTML.substr((prodShopCartTagEnd+1));
			baseHTML = prodShopCartHTMLStart + "<div id='panel5ProdShopCartShell' class='panel_5_prod_shop_cart_shell'><\/div>" + prodShopCartHTMLEnd;
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
							resultsCatlistWrite += "<span class='panel_5_results_catlist_prod'>" + catArray[bcl][1] + "<\/span>";
							break;
						}
					}
				}
			}
			else {
				resultsCatlistWrite = "<span class='panel_5_results_catlist_prod'>" + resultsCatlistDefaultVal + "<\/span>";
			}
			baseHTML = resultsCatlistHTMLStart + "<span id='panel5ResultsCatlist'>" + resultsCatlistWrite + "<\/span>" + resultsCatlistHTMLEnd;
		}
		var prodListSearchOn5 = 1;
		var prodListFailsafe5 = 0;
		while (prodListSearchOn5 == 1) {
			prodListFailsafe5++;
			var prodListTagStart = baseHTML.indexOf("<!--PRODLIST");
			if (prodListTagStart != -1) {
				var prodListTagEnd = baseHTML.indexOf(">",prodListTagStart);
				var prodListTagStrip = baseHTML.substring(prodListTagStart,(prodListTagEnd+1));
				var baseProdListHTMLStart = baseHTML.substr(0,prodListTagStart);
				var baseProdListHTMLEnd = baseHTML.substr((prodListTagEnd+1));
				var prodListTagFilterStart = prodListTagStrip.indexOf(" FILTER");
				if (prodListTagFilterStart != -1) {
					panel5ProductFilter = 1;
				}
				var prodListTagSubsetStart = prodListTagStrip.indexOf(" SUBSET");
				if (prodListTagSubsetStart != -1) {
					panel5ProductSubset = 1;
				}
				var prodListTagExcludeStart = prodListTagStrip.indexOf(" EXCLUDE");
				if (prodListTagExcludeStart != -1) {
					panel5ProductExclude = 1;
				}
				var prodListTagHideprodStart = prodListTagStrip.indexOf(" HIDEPROD");
				if (prodListTagHideprodStart != -1) {
					panel5ProductHideprod = 1;
				}
				var prodListTagExcludeStart = prodListTagStrip.indexOf(" OPEN");
				var panel5PListSliderOpen = 0;
				if (prodListTagExcludeStart != -1) {
					panel5PListSliderOpen = 1;
				}
				var prodListTagSortStart = prodListTagStrip.indexOf(" SORT=");
				if (prodListTagSortStart != -1) {
					var prodListTagSortEnd = prodListTagStrip.indexOf("]",prodListTagSortStart);
					var panel5ProductSortTemp = prodListTagStrip.substring((prodListTagSortStart+7),(prodListTagSortEnd));
					if (panel5ProductSortTemp == "prodlist_sort") {
						panel5ProductSort = prodListStyle;
					}
					else {
						panel5ProductSort = panel5ProductSortTemp;
					}
				}
				var prodListTagOrderStart = prodListTagStrip.indexOf(" ORDER=");
				if (prodListTagOrderStart != -1) {
					var prodListTagOrderEnd = prodListTagStrip.indexOf("]",prodListTagOrderStart);
					panel5ProductOrder = prodListTagStrip.substring((prodListTagOrderStart+8),(prodListTagOrderEnd));
				}
				var prodListTagCatIDStart = prodListTagStrip.indexOf(" CATID=");
				if (prodListTagCatIDStart != -1) {
					var prodListTagCatIDEnd = prodListTagStrip.indexOf("]",prodListTagCatIDStart);
					var panel5ProductCatID = prodListTagStrip.substring((prodListTagCatIDStart+8),(prodListTagCatIDEnd));
				}
				else {
					var panel5ProductCatID = 0;
				}
				var prodListTagOffStart = prodListTagStrip.indexOf(" OFF");
				if (prodListTagOffStart != -1) {
					panel5AllOffIsOn = 1;
				}
			}
			else {
				prodListSearchOn5 = 0;
			}
			if (prodListFailsafe5 == 30) {
				prodListSearchOn5 = 0;
			}
			if (prodDisplayArray.length && prodListSearchOn5 != 0) {
				prodFilterArray.length = 0;
				var pfCount = 0;
				var prodListHTML = "";
				var prodFilterSplit = document.getElementById('PROD').value.split(",");
				if (document.getElementById('PROD').value != document.getElementById('FULLPROD').value) {
					for (y=0;y<prodDisplayArray.length;y++) {
						if (panel5ProductSubset == 1) {
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
					for (y=0;y<prodDisplayArray.length;y++) {
						prodFilterArray[y] = prodDisplayArray[y];
						prodFilterArray[y][9] = 0;
					}
				}
				if (panel5ProductOrder == "x") {
				}
				else {
					var prodOrderArray = panel5ProductOrder.split(",");
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
				if (prodFilterArray.length && panel5AllOffIsOn == 1) {
					var foundAnOff = 0;
					for (u=0; u<prodFilterArray.length; u++) {
						if (prodFilterArray[u][9] == "0") {
							foundAnOff = 1;
							break;
						}
					}
					if (foundAnOff==0) {
						for (u=0; u<prodFilterArray.length; u++) {
							prodFilterArray[u][9] = "0";
						}
					}
				}
				if (panel5ProductSort == "CATEGORY") {
					if (panel5ProductCatID != 0) {
						for (w=0; w<catArray.length; w++) {
							if (catArray[w][0] == panel5ProductCatID) {
								var categoryHTMLTest = autotextIt(p5TemplateSet.panel5CategoryDiv,"panel5Category");
								var catBadgeTagStart = categoryHTMLTest.indexOf("<!--BADGE");
								if (catBadgeTagStart != -1) {
									var catBadgeTagEnd = categoryHTMLTest.indexOf(">",catBadgeTagStart);
									var catBadgeTagStrip = categoryHTMLTest.substring(catBadgeTagStart,(catBadgeTagEnd+1));
									var baseCatBadgeHTMLStart = categoryHTMLTest.substr(0,catBadgeTagStart);
									var baseCatBadgeHTMLEnd = categoryHTMLTest.substr((catBadgeTagEnd+1));
									categoryHTMLTest = baseCatBadgeHTMLStart + "<span id='panel5ProdlistCatBadge" + catArray[w][0] + "' class='panel_5_prodlist_cat_badge' style='display:none;'>0<\/span>" + baseCatBadgeHTMLEnd;
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
										var replaceImgMouseOver = "panel5CatImgReplace(1," + catArray[w][0] + ");";
										var replaceImgMouseOut = "panel5CatImgReplace(2," + catArray[w][0] + ");";
										var replaceImgMouseClass = " img_replace_active";
										var replaceImgCall = "panel5CatImgClick(" + catArray[w][0] + ");";
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
										catNameTagLink += " style='cursor:pointer;' onclick='panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\");" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\");" + replaceImgCall + "}'";
										if (hoverState==1) {
											catNameTagLink += " onmouseover='panel5CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel5CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel5CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel5CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
										}
										var thisCatIsOn = 1;
										for (q=0; q<prodFilterArray.length; q++) {
											if (prodFilterArray[q][8] == catArray[w][0] && prodFilterArray[q][9] == "0") {
												thisCatIsOn = 0;
												break;
											}
										}
										if (thisCatIsOn == 1) {
											var baseCatStyle = " panel_5_category_name_on";
											catArray[w][6] = 1;
											window["panel1CategoryNameVar" + catArray[w][0]] = 1;
										}
										else {
											var baseCatStyle = " panel_5_category_name_off";
										}
									}
									categoryHTMLTest = baseCatNameHTMLStart + "<div id='panel5CategoryName" + catArray[w][0] + "' class='panel_5_category_name_" + catArray[w][0] + replaceImgMouseClass + " panel_5_category_name " + baseCatStyle + "'" + catNameTagLink + " tabindex='0' title=\"" + catArray[w][1] + "\">" + catArray[w][1] + daProdNumWrite + "<\/div>" + baseCatNameHTMLEnd;
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
										catBigImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel5CategoryBigImgDivShell" + catArray[w][0] + "' class='panel_5_category_big_img_div_shell panel_5_category_big_img_div_shell_" + catArray[w][0] + "' onclick='panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\");panel5CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\");panel5CatImgClick(" + catArray[w][0] + ");}'";
										if (hoverState==1) {
											catBigImgTagRender += " onmouseover='panel5CatMouseOver(" + w + ");panel5CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel5CatMouseOver(" + w + ");panel5CatImgReplace(1," + catArray[w][0] + ");'";
										}
										catBigImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel5CategoryBigImgDivBack" + catArray[w][0] + "' class='panel_5_category_big_img_div_back panel_5_category_big_img_div_back_off panel_5_category_big_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][3] + "\");'><\/div><div id='panel5CategoryBigImgDivOver" + catArray[w][0] + "' class='panel_5_category_big_img_div_over panel_5_category_big_img_div_over_" + catArray[w][0] + "'";
										if (hoverState==1) {
											catBigImgTagRender += " onmouseout='panel5CatMouseOut(" + w + ");panel5CatImgReplace(2," + catArray[w][0] + ");' onblur='panel5CatMouseOut(" + w + ");panel5CatImgReplace(2," + catArray[w][0] + ");'";
										}
										catBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
										categoryHTMLTest = baseCatBigImgHTMLStart + catBigImgTagRender + baseCatBigImgHTMLEnd;
									}
									else {
										categoryHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel5CategoryBigImg" + catArray[w][0] + "' class='panel_5_category_big_img' src='" + clientImgBase + catArray[w][3] + "'>" + baseCatBigImgHTMLEnd;
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
										catSmImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel5CategorySmImgDivShell" + catArray[w][0] + "' class='panel_5_category_sm_img_div_shell panel_5_category_sm_img_div_shell_" + catArray[w][0] + "' onclick='panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\");panel5CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\");panel5CatImgClick(" + catArray[w][0] + ");}'";
										if (hoverState==1) {
											catSmImgTagRender += " onmouseover='panel5CatMouseOver(" + w + ");panel5CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel5CatMouseOver(" + w + ");panel5CatImgReplace(1," + catArray[w][0] + ");'";
										}
										catSmImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel5CategorySmImgDivBack" + catArray[w][0] + "' class='panel_5_category_sm_img_div_back panel_5_category_sm_img_div_back_off panel_5_category_sm_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][4] + "\");'><\/div><div id='panel5CategorySmImgDivOver" + catArray[w][0] + "' class='panel_5_category_sm_img_div_over panel_5_category_sm_img_div_over_" + catArray[w][0] + "'";
										if (hoverState==1) {
											catSmImgTagRender += " onmouseout='panel5CatMouseOut(" + w + ");panel5CatImgReplace(2," + catArray[w][0] + ");' onblur='panel5CatMouseOut(" + w + ");panel5CatImgReplace(2," + catArray[w][0] + ");'";
										}
										catSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
										categoryHTMLTest = baseCatSmImgHTMLStart + catSmImgTagRender + baseCatSmImgHTMLEnd;
									}
									else {
										categoryHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel5CategorySmImg" + catArray[w][0] + "' class='panel_5_category_sm_img' src='" + clientImgBase + catArray[w][4] + "'>" + baseCatSmImgHTMLEnd;
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
										var replaceImgMouseOver = "panel5CatImgReplace(1," + catArray[w][0] + ");";
										var replaceImgMouseOut = "panel5CatImgReplace(2," + catArray[w][0] + ");";
										var replaceImgMouseClass = " img_replace_active";
										var replaceImgCall = "panel5CatImgClick(" + catArray[w][0] + ");";
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
										catAllTagLink += " style='cursor:pointer;' onclick='panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\");" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\");" + replaceImgCall + "}'";
										if (hoverState==1) {
											catAllTagLink += " onmouseover='panel5CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel5CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel5CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel5CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
										}
									}
									categoryHTMLTest = baseCatAllHTMLStart + "<div id='panel5CategoryName" + catArray[w][0] + "All' class='panel_5_category_name_all_" + catArray[w][0] + replaceImgMouseClass + " panel_5_category_name_all" + replaceImgMouseClass + " panel_5_category_name_all_off'" + catAllTagLink + " tabindex='0' title=\"" + catAllValueVal + "\">" + catAllValueVal + "<\/div>" + baseCatAllHTMLEnd;
								}
								prodListHTML += "<span class='panel_5_prodlist_catshell panel_5_prodlist_catshell_" + catArray[w][0] + " panel_5_prodlist_catshell_off'>" + categoryHTMLTest + "<\/span>";
								for (x=0; x<prodFilterArray.length; x++) {
									if (prodFilterArray[x][8] == catArray[w][0]) {
										var productHTMLTest = autotextIt(p5TemplateSet.panel5ProductDiv,"panel5Product");
										var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
										if (prodDiscTagStart != -1) {
											var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
											var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
											var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
											var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
											var prodDiscWrite = "";
											var discVal = prodFilterArray[x][6];
											if (discVal != 1) {
												prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel5Product_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
											}
											productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
										}
										var prodNameTagStart = productHTMLTest.indexOf("<!--PRODNAME");
										if (prodNameTagStart != -1) {
											var prodNameTagEnd = productHTMLTest.indexOf(">",prodNameTagStart);
											var prodNameTagStrip = productHTMLTest.substring(prodNameTagStart,(prodNameTagEnd+1));
											var baseProdNameHTMLStart = productHTMLTest.substr(0,prodNameTagStart);
											var baseProdNameHTMLEnd = productHTMLTest.substr((prodNameTagEnd+1));
											var prodNameTagLink = " style='cursor:pointer;' onclick='panel5ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");}'";
											if (hoverState==1) {
												prodNameTagLink += " onmouseover='panel5ProdMouseOver(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");' onfocus='panel5ProdMouseOver(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");' onmouseout='panel5ProdMouseOut(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");' onblur='panel5ProdMouseOut(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");'";
											}
											if (prodFilterArray[x][9] == "1") {
												var baseProductStyle = " panel_5_product_name_on";
											}
											else {
												var baseProductStyle = " panel_5_product_name_off";
											}
											var descTest = prodNameTagStrip.indexOf(" DESC");
											if (descTest != -1) {
												var descVal = "<span class='panel_5_product_name_desc'>" + prodFilterArray[x][3] + "<\/span>";
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
											productHTMLTest = baseProdNameHTMLStart + "<div id='panel5ProductName" + prodFilterArray[x][0] + "' class='panel_5_product_name" + baseProductStyle + "'" + prodNameTagLink + " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">" + prodNameItalicVar + "<span class='panel_5_product_name_name'>" + prodFilterArray[x][2] + "<\/span>" + descVal + "<\/div>" + baseProdNameHTMLEnd;
										}
										var prodDescTagStart = productHTMLTest.indexOf("<!--PRODDESC");
										if (prodDescTagStart != -1) {
											var prodDescTagEnd = productHTMLTest.indexOf(">",prodDescTagStart);
											var prodDescTagStrip = productHTMLTest.substring(prodDescTagStart,(prodDescTagEnd+1));
											var baseProdDescHTMLStart = productHTMLTest.substr(0,prodDescTagStart);
											var baseProdDescHTMLEnd = productHTMLTest.substr((prodDescTagEnd+1));
											productHTMLTest = baseProdDescHTMLStart + "<div id='panel5ProductDesc" + prodFilterArray[x][0] + "' class='panel_5_product_desc'>" + prodFilterArray[x][3] + "<\/div>" + baseProdDescHTMLEnd;
										}
										var prodCatTagStart = productHTMLTest.indexOf("<!--PRODCAT");
										if (prodCatTagStart != -1) {
											var prodCatTagEnd = productHTMLTest.indexOf(">",prodCatTagStart);
											var prodCatTagStrip = productHTMLTest.substring(prodCatTagStart,(prodCatTagEnd+1));
											var baseProdCatHTMLStart = productHTMLTest.substr(0,prodCatTagStart);
											var baseProdCatHTMLEnd = productHTMLTest.substr((prodCatTagEnd+1));
											productHTMLTest = baseProdCatHTMLStart + "<div id='panel5ProductCat" + prodFilterArray[x][0] + "' class='panel_5_product_cat'>" + prodFilterArray[x][16] + "<\/div>" + baseProdCatHTMLEnd;
										}
										var prodBigImgTagStart = productHTMLTest.indexOf("<!--PRODBIGIMG");
										if (prodBigImgTagStart != -1) {
											var prodBigImgTagEnd = productHTMLTest.indexOf(">",prodBigImgTagStart);
											var prodBigImgTagStrip = productHTMLTest.substring(prodBigImgTagStart,(prodBigImgTagEnd+1));
											var baseProdBigImgHTMLStart = productHTMLTest.substr(0,prodBigImgTagStart);
											var baseProdBigImgHTMLEnd = productHTMLTest.substr((prodBigImgTagEnd+1));
											var prodBigImgTagLinkStart = "<a href='' onclick='panel5ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");return false;}'";
											if (hoverState==1) {
												prodBigImgTagLinkStart += " onmouseover='panel5ProdMouseOver(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");' onfocus='panel5ProdMouseOver(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");' onmouseout='panel5ProdMouseOut(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");' onblur='panel5ProdMouseOut(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");'";
											}
											prodBigImgTagLinkStart += " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">";
											var prodBigImgTagLinkEnd = "<\/a>";
											productHTMLTest = baseProdBigImgHTMLStart + prodBigImgTagLinkStart + "<img title=\"" + prodFilterArray[x][2] + "\" alt=\"" + prodFilterArray[x][2] + "\" id='panel5ProductBigImg" + prodFilterArray[x][0] + "' class='panel_5_product_big_img' src='" + clientImgBase + prodFilterArray[x][4] + "'>" + prodBigImgTagLinkEnd + baseProdBigImgHTMLEnd;
										}
										var prodSmImgTagStart = productHTMLTest.indexOf("<!--PRODSMIMG");
										if (prodSmImgTagStart != -1) {
											var prodSmImgTagEnd = productHTMLTest.indexOf(">",prodSmImgTagStart);
											var prodSmImgTagStrip = productHTMLTest.substring(prodSmImgTagStart,(prodSmImgTagEnd+1));
											var baseProdSmImgHTMLStart = productHTMLTest.substr(0,prodSmImgTagStart);
											var baseProdSmImgHTMLEnd = productHTMLTest.substr((prodSmImgTagEnd+1));
											var prodSmImgTagLinkStart = "<a href='' onclick='panel5ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");return false;}'";
											if (hoverState==1) {
												prodSmImgTagLinkStart += " onmouseover='panel5ProdMouseOver(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");' onfocus='panel5ProdMouseOver(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");' onmouseout='panel5ProdMouseOut(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");' onblur='panel5ProdMouseOut(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");'";
											}
											prodSmImgTagLinkStart += " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">";
											var prodSmImgTagLinkEnd = "<\/a>";
											productHTMLTest = baseProdSmImgHTMLStart + prodSmImgTagLinkStart + "<img title=\"" + prodFilterArray[x][2] + "\" alt=\"" + prodFilterArray[x][2] + "\" id='panel5ProductSmImg" + prodFilterArray[x][0] + "' class='panel_5_product_sm_img' src='" + clientImgBase + prodFilterArray[x][5] + "'>" + prodSmImgTagLinkEnd + baseProdSmImgHTMLEnd;
										}
										prodListHTML += "<span class='panel_5_prodlist_prodshell panel_5_prodlist_prodshell_" + prodFilterArray[x][0] + " panel_5_prodlist_prodshell_off'>" + productHTMLTest + "<\/span>";
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
										var categoryHTMLTest = autotextIt(p5TemplateSet.panel5CategoryDiv,"panel5Category");
										var catBadgeTagStart = categoryHTMLTest.indexOf("<!--BADGE");
										if (catBadgeTagStart != -1) {
											var catBadgeTagEnd = categoryHTMLTest.indexOf(">",catBadgeTagStart);
											var catBadgeTagStrip = categoryHTMLTest.substring(catBadgeTagStart,(catBadgeTagEnd+1));
											var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBadgeTagStart);
											var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBadgeTagEnd+1));
											categoryHTMLTest = baseCatBigImgHTMLStart + "<span id='panel5ProdlistCatBadge" + catArray[w][0] + "' class='panel_5_prodlist_cat_badge' style='display:none;'>0<\/span>" + baseCatBigImgHTMLEnd;
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
												var replaceImgMouseOver = "panel5CatImgReplace(1," + catArray[w][0] + ");";
												var replaceImgMouseOut = "panel5CatImgReplace(2," + catArray[w][0] + ");";
												var replaceImgMouseClass = " img_replace_active";
												var replaceImgCall = "panel5CatImgClick(" + catArray[w][0] + ");";
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
												catNameTagLink += " style='cursor:pointer;' onclick='panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\");" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\");" + replaceImgCall + "}'";
												if (hoverState==1) {
													catNameTagLink += " onmouseover='panel5CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel5CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel5CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel5CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
												}
												var thisCatIsOn = 1;
												for (q=0; q<prodFilterArray.length; q++) {
													if (prodFilterArray[q][8] == catArray[w][0] && prodFilterArray[q][9] == "0") {
														thisCatIsOn = 0;
														break;
													}
												}
												if (thisCatIsOn == 1) {
													var baseCatStyle = " panel_5_category_name_on";
													catArray[w][6] = 1;
													window["panel1CategoryNameVar" + catArray[w][0]] = 1;
												}
												else {
													var baseCatStyle = " panel_5_category_name_off";
												}
											}
											categoryHTMLTest = baseCatNameHTMLStart + "<div id='panel5CategoryName" + catArray[w][0] + "' class='panel_5_category_name_" + catArray[w][0] + replaceImgMouseClass + " panel_5_category_name'" + catNameTagLink + " tabindex='0' title=\"" + catArray[w][1] + "\">" + catArray[w][1] + daProdNumWrite + "<\/div>" + baseCatNameHTMLEnd;
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
												catBigImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel5CategoryBigImgDivShell" + catArray[w][0] + "' class='panel_5_category_big_img_div_shell panel_5_category_big_img_div_shell_" + catArray[w][0] + "' onclick='panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\");panel5CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\");panel5CatImgClick(" + catArray[w][0] + ");}'";
												if (hoverState==1) {
													catBigImgTagRender += " onmouseover='panel5CatMouseOver(" + w + ");panel5CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel5CatMouseOver(" + w + ");panel5CatImgReplace(1," + catArray[w][0] + ");'";
												}
												catBigImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel5CategoryBigImgDivBack" + catArray[w][0] + "' class='panel_5_category_big_img_div_back panel_5_category_big_img_div_back_off panel_5_category_big_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][3] + "\");'><\/div><div id='panel5CategoryBigImgDivOver" + catArray[w][0] + "' class='panel_5_category_big_img_div_over panel_5_category_big_img_div_over_" + catArray[w][0] + "'";
												if (hoverState==1) {
													catBigImgTagRender += " onmouseout='panel5CatMouseOut(" + w + ");panel5CatImgReplace(2," + catArray[w][0] + ");' onblur='panel5CatMouseOut(" + w + ");panel5CatImgReplace(2," + catArray[w][0] + ");'";
												}
												catBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
												categoryHTMLTest = baseCatBigImgHTMLStart + catBigImgTagRender + baseCatBigImgHTMLEnd;
											}
											else {
												categoryHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel5CategoryBigImg" + catArray[w][0] + "' class='panel_5_category_big_img' src='" + clientImgBase + catArray[w][3] + "'>" + baseCatBigImgHTMLEnd;
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
												catSmImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel5CategorySmImgDivShell" + catArray[w][0] + "' class='panel_5_category_sm_img_div_shell panel_5_category_sm_img_div_shell_" + catArray[w][0] + "' onclick='panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\");panel5CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\");panel5CatImgClick(" + catArray[w][0] + ");}'";
												if (hoverState==1) {
													catSmImgTagRender += " onmouseover='panel5CatMouseOver(" + w + ");panel5CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel5CatMouseOver(" + w + ");panel5CatImgReplace(1," + catArray[w][0] + ");'";
												}
												catSmImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel5CategorySmImgDivBack" + catArray[w][0] + "' class='panel_5_category_sm_img_div_back panel_5_category_sm_img_div_back_off panel_5_category_sm_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][4] + "\");'><\/div><div id='panel5CategorySmImgDivOver" + catArray[w][0] + "' class='panel_5_category_sm_img_div_over panel_5_category_sm_img_div_over_" + catArray[w][0] + "'";
												if (hoverState==1) {
													catSmImgTagRender += " onmouseout='panel5CatMouseOut(" + w + ");panel5CatImgReplace(2," + catArray[w][0] + ");' onblur='panel5CatMouseOut(" + w + ");panel5CatImgReplace(2," + catArray[w][0] + ");'";
												}
												catSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
												categoryHTMLTest = baseCatSmImgHTMLStart + catSmImgTagRender + baseCatSmImgHTMLEnd;
											}
											else {
												categoryHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel5CategorySmImg" + catArray[w][0] + "' class='panel_5_category_sm_img' src='" + clientImgBase + catArray[w][4] + "'>" + baseCatSmImgHTMLEnd;
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
												var replaceImgMouseOver = "panel5CatImgReplace(1," + catArray[w][0] + ");";
												var replaceImgMouseOut = "panel5CatImgReplace(2," + catArray[w][0] + ");";
												var replaceImgMouseClass = " img_replace_active";
												var replaceImgCall = "panel5CatImgClick(" + catArray[w][0] + ");";
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
												catAllTagLink += " style='cursor:pointer;' onclick='panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\");" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\");" + replaceImgCall + "}'";
												if (hoverState==1) {
													catAllTagLink += " onmouseover='panel5CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel5CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel5CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel5CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
												}
											}
											categoryHTMLTest = baseCatAllHTMLStart + "<div id='panel5CategoryName" + catArray[w][0] + "All' class='panel_5_category_name_all_" + catArray[w][0] + replaceImgMouseClass + " panel_5_category_name_all" + replaceImgMouseClass + " panel_5_category_name_all_off'" + catAllTagLink + " tabindex='0' title=\"" + catAllValueVal + "\">" + catAllValueVal + "<\/div>" + baseCatAllHTMLEnd;
										}
										prodListHTML += "<span class='panel_5_prodlist_catshell panel_5_prodlist_catshell_" + catArray[w][0] + " panel_5_prodlist_catshell_off'>" + categoryHTMLTest + "<\/span>";
									}
									if (panel5ProductHideprod == 1 && prodFilterArray[x][0] == 0) {
										var writeDisProdRow = 0;
									}
									else {
										var writeDisProdRow = 1;
									}
									if (writeDisProdRow == 1) {
										var productHTMLTest = autotextIt(p5TemplateSet.panel5ProductDiv,"panel5Product");
										var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
										if (prodDiscTagStart != -1) {
											var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
											var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
											var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
											var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
											var prodDiscWrite = "";
											var discVal = prodFilterArray[x][6];
											if (discVal != 1) {
												prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel5Product_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
											}
											productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
										}
										var prodNameTagStart = productHTMLTest.indexOf("<!--PRODNAME");
										if (prodNameTagStart != -1) {
											var prodNameTagEnd = productHTMLTest.indexOf(">",prodNameTagStart);
											var prodNameTagStrip = productHTMLTest.substring(prodNameTagStart,(prodNameTagEnd+1));
											var baseProdNameHTMLStart = productHTMLTest.substr(0,prodNameTagStart);
											var baseProdNameHTMLEnd = productHTMLTest.substr((prodNameTagEnd+1));
											var prodNameTagLink = " style='cursor:pointer;' onclick='panel5ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");}'";
											if (hoverState==1) {
												prodNameTagLink += " onmouseover='panel5ProdMouseOver(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");' onfocus='panel5ProdMouseOver(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");' onmouseout='panel5ProdMouseOut(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");' onblur='panel5ProdMouseOut(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");'";
											}
											if (prodFilterArray[x][9] == "1") {
												var baseProductStyle = " panel_5_product_name_on";
											}
											else {
												var baseProductStyle = " panel_5_product_name_off";
											}
											var descTest = prodNameTagStrip.indexOf(" DESC");
											if (descTest != -1) {
												var descVal = "<span class='panel_5_product_name_desc'>" + prodFilterArray[x][3] + "<\/span>";
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
											productHTMLTest = baseProdNameHTMLStart + "<div id='panel5ProductName" + prodFilterArray[x][0] + "' class='panel_5_product_name" + baseProductStyle + "'" + prodNameTagLink + " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">" + prodNameItalicVar + "<span class='panel_5_product_name_name'>" + prodFilterArray[x][2] + "<\/span>" + descVal + "<\/div>" + baseProdNameHTMLEnd;
										}
										var prodDescTagStart = productHTMLTest.indexOf("<!--PRODDESC");
										if (prodDescTagStart != -1) {
											var prodDescTagEnd = productHTMLTest.indexOf(">",prodDescTagStart);
											var prodDescTagStrip = productHTMLTest.substring(prodDescTagStart,(prodDescTagEnd+1));
											var baseProdDescHTMLStart = productHTMLTest.substr(0,prodDescTagStart);
											var baseProdDescHTMLEnd = productHTMLTest.substr((prodDescTagEnd+1));
											productHTMLTest = baseProdDescHTMLStart + "<div id='panel5ProductDesc" + prodFilterArray[x][0] + "' class='panel_5_product_desc'>" + prodFilterArray[x][3] + "<\/div>" + baseProdDescHTMLEnd;
										}
										var prodCatTagStart = productHTMLTest.indexOf("<!--PRODCAT");
										if (prodCatTagStart != -1) {
											var prodCatTagEnd = productHTMLTest.indexOf(">",prodCatTagStart);
											var prodCatTagStrip = productHTMLTest.substring(prodCatTagStart,(prodCatTagEnd+1));
											var baseProdCatHTMLStart = productHTMLTest.substr(0,prodCatTagStart);
											var baseProdCatHTMLEnd = productHTMLTest.substr((prodCatTagEnd+1));
											productHTMLTest = baseProdCatHTMLStart + "<div id='panel5ProductCat" + prodFilterArray[x][0] + "' class='panel_5_product_cat'>" + prodFilterArray[x][16] + "<\/div>" + baseProdCatHTMLEnd;
										}
										var prodBigImgTagStart = productHTMLTest.indexOf("<!--PRODBIGIMG");
										if (prodBigImgTagStart != -1) {
											var prodBigImgTagEnd = productHTMLTest.indexOf(">",prodBigImgTagStart);
											var prodBigImgTagStrip = productHTMLTest.substring(prodBigImgTagStart,(prodBigImgTagEnd+1));
											var baseProdBigImgHTMLStart = productHTMLTest.substr(0,prodBigImgTagStart);
											var baseProdBigImgHTMLEnd = productHTMLTest.substr((prodBigImgTagEnd+1));
											var prodBigImgTagLinkStart = "<a href='' onclick='panel5ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");return false;}'";
											if (hoverState==1) {
												prodBigImgTagLinkStart += " onmouseover='panel5ProdMouseOver(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");' onfocus='panel5ProdMouseOver(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");' onmouseout='panel5ProdMouseOut(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");' onblur='panel5ProdMouseOut(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");'";
											}
											prodBigImgTagLinkStart += " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">";
											var prodBigImgTagLinkEnd = "<\/a>";
											productHTMLTest = baseProdBigImgHTMLStart + prodBigImgTagLinkStart + "<img title=\"" + prodFilterArray[x][2] + "\" alt=\"" + prodFilterArray[x][2] + "\" id='panel5ProductBigImg" + prodFilterArray[x][0] + "' class='panel_5_product_big_img' src='" + clientImgBase + prodFilterArray[x][4] + "'>" + prodBigImgTagLinkEnd + baseProdBigImgHTMLEnd;
										}
										var prodSmImgTagStart = productHTMLTest.indexOf("<!--PRODSMIMG");
										if (prodSmImgTagStart != -1) {
											var prodSmImgTagEnd = productHTMLTest.indexOf(">",prodSmImgTagStart);
											var prodSmImgTagStrip = productHTMLTest.substring(prodSmImgTagStart,(prodSmImgTagEnd+1));
											var baseProdSmImgHTMLStart = productHTMLTest.substr(0,prodSmImgTagStart);
											var baseProdSmImgHTMLEnd = productHTMLTest.substr((prodSmImgTagEnd+1));
											var prodSmImgTagLinkStart = "<a href='' onclick='panel5ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");return false;}'";
											if (hoverState==1) {
												prodSmImgTagLinkStart += " onmouseover='panel5ProdMouseOver(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");' onfocus='panel5ProdMouseOver(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");' onmouseout='panel5ProdMouseOut(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");' onblur='panel5ProdMouseOut(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");'";
											}
											prodSmImgTagLinkStart += " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">";
											var prodSmImgTagLinkEnd = "<\/a>";
											productHTMLTest = baseProdSmImgHTMLStart + prodSmImgTagLinkStart + "<img title=\"" + prodFilterArray[x][2] + "\" alt=\"" + prodFilterArray[x][2] + "\" id='panel5ProductSmImg" + prodFilterArray[x][0] + "' class='panel_5_product_sm_img' src='" + clientImgBase + prodFilterArray[x][5] + "'>" + prodSmImgTagLinkEnd + baseProdSmImgHTMLEnd;
										}
										prodListHTML += "<span class='panel_5_prodlist_prodshell panel_5_prodlist_prodshell_" + prodFilterArray[x][0] + " panel_5_prodlist_prodshell_off'>" + productHTMLTest + "<\/span>";
									}
								}
							}
						}
					}
				}
				else if (panel5ProductSort == "PRODUCT") {
					for (x=0; x<prodFilterArray.length; x++) {
						if (panel5ProductHideprod == 1 && prodFilterArray[x][0] == 0) {
							var writeDisProdRow = 0;
						}
						else {
							var writeDisProdRow = 1;
						}
						if (writeDisProdRow == 1) {
							var productHTMLTest = autotextIt(p5TemplateSet.panel5ProductDiv,"panel5Product");
							var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
							if (prodDiscTagStart != -1) {
								var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
								var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
								var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
								var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
								var prodDiscWrite = "";
								var discVal = prodFilterArray[x][6];
								if (discVal != 1) {
									prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel5Product_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
								}
								productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
							}
							var prodNameTagStart = productHTMLTest.indexOf("<!--PRODNAME");
							if (prodNameTagStart != -1) {
								var prodNameTagEnd = productHTMLTest.indexOf(">",prodNameTagStart);
								var prodNameTagStrip = productHTMLTest.substring(prodNameTagStart,(prodNameTagEnd+1));
								var baseProdNameHTMLStart = productHTMLTest.substr(0,prodNameTagStart);
								var baseProdNameHTMLEnd = productHTMLTest.substr((prodNameTagEnd+1));
								var prodNameTagLink = " style='cursor:pointer;' onclick='panel5ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");}'";
								if (hoverState==1) {
									prodNameTagLink += " onmouseover='panel5ProdMouseOver(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");' onfocus='panel5ProdMouseOver(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");' onmouseout='panel5ProdMouseOut(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");' onblur='panel5ProdMouseOut(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");'";
								}
								if (prodFilterArray[x][9] == "1") {
									var baseProductStyle = " panel_5_product_name_on";
								}
								else {
									var baseProductStyle = " panel_5_product_name_off";
								}
								var descTest = prodNameTagStrip.indexOf(" DESC");
								if (descTest != -1) {
									var descVal = "<span class='panel_5_product_name_desc'>" + prodFilterArray[x][3] + "<\/span>";
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
								productHTMLTest = baseProdNameHTMLStart + "<div id='panel5ProductName" + prodFilterArray[x][0] + "' class='panel_5_product_name" + baseProductStyle + "'" + prodNameTagLink + " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">" + prodNameItalicVar + "<span class='panel_5_product_name_name'>" + prodFilterArray[x][2] + "<\/span>" + descVal + "<\/div>" + baseProdNameHTMLEnd;
							}
							var prodDescTagStart = productHTMLTest.indexOf("<!--PRODDESC");
							if (prodDescTagStart != -1) {
								var prodDescTagEnd = productHTMLTest.indexOf(">",prodDescTagStart);
								var prodDescTagStrip = productHTMLTest.substring(prodDescTagStart,(prodDescTagEnd+1));
								var baseProdDescHTMLStart = productHTMLTest.substr(0,prodDescTagStart);
								var baseProdDescHTMLEnd = productHTMLTest.substr((prodDescTagEnd+1));
								productHTMLTest = baseProdDescHTMLStart + "<div id='panel5ProductDesc" + prodFilterArray[x][0] + "' class='panel_5_product_desc'>" + prodFilterArray[x][3] + "<\/div>" + baseProdDescHTMLEnd;
							}
							var prodCatTagStart = productHTMLTest.indexOf("<!--PRODCAT");
							if (prodCatTagStart != -1) {
								var prodCatTagEnd = productHTMLTest.indexOf(">",prodCatTagStart);
								var prodCatTagStrip = productHTMLTest.substring(prodCatTagStart,(prodCatTagEnd+1));
								var baseProdCatHTMLStart = productHTMLTest.substr(0,prodCatTagStart);
								var baseProdCatHTMLEnd = productHTMLTest.substr((prodCatTagEnd+1));
								productHTMLTest = baseProdCatHTMLStart + "<div id='panel5ProductCat" + prodFilterArray[x][0] + "' class='panel_5_product_cat'>" + prodFilterArray[x][16] + "<\/div>" + baseProdCatHTMLEnd;
							}
							var prodBigImgTagStart = productHTMLTest.indexOf("<!--PRODBIGIMG");
							if (prodBigImgTagStart != -1) {
								var prodBigImgTagEnd = productHTMLTest.indexOf(">",prodBigImgTagStart);
								var prodBigImgTagStrip = productHTMLTest.substring(prodBigImgTagStart,(prodBigImgTagEnd+1));
								var baseProdBigImgHTMLStart = productHTMLTest.substr(0,prodBigImgTagStart);
								var baseProdBigImgHTMLEnd = productHTMLTest.substr((prodBigImgTagEnd+1));
								var prodBigImgTagLinkStart = "<a href='' onclick='panel5ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");return false;}'";
								if (hoverState==1) {
									prodBigImgTagLinkStart += " onmouseover='panel5ProdMouseOver(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");' onfocus='panel5ProdMouseOver(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");' onmouseout='panel5ProdMouseOut(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");' onblur='panel5ProdMouseOut(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");'";
								}
								prodBigImgTagLinkStart += " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">";
								var prodBigImgTagLinkEnd = "<\/a>";
								productHTMLTest = baseProdBigImgHTMLStart + prodBigImgTagLinkStart + "<img title=\"" + prodFilterArray[x][2] + "\" alt=\"" + prodFilterArray[x][2] + "\" id='panel5ProductBigImg" + prodFilterArray[x][0] + "' class='panel_5_product_big_img' src='" + clientImgBase + prodFilterArray[x][4] + "'>" + prodBigImgTagLinkEnd + baseProdBigImgHTMLEnd;
							}
							var prodSmImgTagStart = productHTMLTest.indexOf("<!--PRODSMIMG");
							if (prodSmImgTagStart != -1) {
								var prodSmImgTagEnd = productHTMLTest.indexOf(">",prodSmImgTagStart);
								var prodSmImgTagStrip = productHTMLTest.substring(prodSmImgTagStart,(prodSmImgTagEnd+1));
								var baseProdSmImgHTMLStart = productHTMLTest.substr(0,prodSmImgTagStart);
								var baseProdSmImgHTMLEnd = productHTMLTest.substr((prodSmImgTagEnd+1));
								var prodSmImgTagLinkStart = "<a href='' onclick='panel5ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");return false;}'";
								if (hoverState==1) {
									prodSmImgTagLinkStart += " onmouseover='panel5ProdMouseOver(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");' onfocus='panel5ProdMouseOver(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");' onmouseout='panel5ProdMouseOut(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");' onblur='panel5ProdMouseOut(\"panel5ProductName" + prodFilterArray[x][0] + "\", \"panel_5_product_name\", "+x+");'";
								}
								prodSmImgTagLinkStart += " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">";
								var prodSmImgTagLinkEnd = "<\/a>";
								productHTMLTest = baseProdSmImgHTMLStart + prodSmImgTagLinkStart + "<img title=\"" + prodFilterArray[x][2] + "\" alt=\"" + prodFilterArray[x][2] + "\" id='panel5ProductSmImg" + prodFilterArray[x][0] + "' class='panel_5_product_sm_img' src='" + clientImgBase + prodFilterArray[x][5] + "'>" + prodSmImgTagLinkEnd + baseProdSmImgHTMLEnd;
							}
							prodListHTML += "<span class='panel_5_prodlist_prodshell panel_5_prodlist_prodshell_" + prodFilterArray[x][0] + " panel_5_prodlist_prodshell_off'>" + productHTMLTest + "<\/span>";
						}
					}
				}
				else if (panel5ProductSort == "LABEL") {
					for (l=0; l<labelArray.length; l++) {
						var labelHTMLTest = autotextIt(p5TemplateSet.panel5LabelDiv,"panel5Label");
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
								labelNameTagLink += " style='cursor:pointer;' onclick='panel5SelectLabel(" + l + ", \"panel5LabelName" + labelArray[l][0] + "\", \"panel_5_label_name\",1);' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5SelectLabel(" + l + ", \"panel5LabelName" + labelArray[l][0] + "\", \"panel_5_label_name\",1);}'";
								if (hoverState==1) {
									labelNameTagLink += " onmouseover='panel5LabelMouseOver(" + l + ");' onfocus='panel5LabelMouseOver(" + l + ");' onmouseout='panel5LabelMouseOut(" + l + ");' onblur='panel5LabelMouseOut(" + l + ");'";
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
									var baseLabelStyle = " panel_5_label_name_on";
									labelArray[l][3] = 1;
								}
								else {
									var baseLabelStyle = " panel_5_label_name_off";
								}
							}
							labelHTMLTest = baseLabelNameHTMLStart + "<div id='panel5LabelName" + labelArray[l][0] + "' class='panel_5_label_name_" + labelArray[l][0] + " panel_5_label_name " + baseLabelStyle + "'" + labelNameTagLink + " tabindex='0' title=\"" + labelArray[l][1] + "\">" + labelArray[l][1] + daProdNumWrite + "<\/div>" + baseLabelNameHTMLEnd;
						}
						prodListHTML += "<span class='panel_5_prodlist_labelshell panel_5_prodlist_labelshell_" + labelArray[l][0] + " panel_5_prodlist_labelshell_off'>" + labelHTMLTest + "<\/span>";
					}
				}
				else if (panel5ProductSort == "CATLIST") {
					if (panel5ProductCatID != 0) {
						for (w=0; w<catArray.length; w++) {
							if (catArray[w][0] == panel5ProductCatID) {
								var categoryHTMLTest = autotextIt(p5TemplateSet.panel5CategoryDiv,"panel5Category");
								var catBadgeTagStart = categoryHTMLTest.indexOf("<!--BADGE");
								if (catBadgeTagStart != -1) {
									var catBadgeTagEnd = categoryHTMLTest.indexOf(">",catBadgeTagStart);
									var catBadgeTagStrip = categoryHTMLTest.substring(catBadgeTagStart,(catBadgeTagEnd+1));
									var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBadgeTagStart);
									var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBadgeTagEnd+1));
									categoryHTMLTest = baseCatBigImgHTMLStart + "<span id='panel5ProdlistCatBadge" + catArray[w][0] + "' class='panel_5_prodlist_cat_badge' style='display:none;'>0<\/span>" + baseCatBigImgHTMLEnd;
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
										var replaceImgMouseOver = "panel5CatImgReplace(1," + catArray[w][0] + ");";
										var replaceImgMouseOut = "panel5CatImgReplace(2," + catArray[w][0] + ");";
										var replaceImgMouseClass = " img_replace_active";
										var replaceImgCall = "panel5CatImgClick(" + catArray[w][0] + ");";
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
										catNameTagLink += " style='cursor:pointer;' onclick='panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\",1);" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\",1);" + replaceImgCall + "}'";
										if (hoverState==1) {
											catNameTagLink += " onmouseover='panel5CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel5CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel5CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel5CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
										}
										var thisCatIsOn = 1;
										for (q=0; q<prodFilterArray.length; q++) {
											if (prodFilterArray[q][8] == catArray[w][0] && prodFilterArray[q][9] == "0") {
												thisCatIsOn = 0;
												break;
											}
										}
										if (thisCatIsOn == 1) {
											var baseCatStyle = " panel_5_category_name_on";
											catArray[w][6] = 1;
											window["panel1CategoryNameVar" + catArray[w][0]] = 1;
										}
										else {
											var baseCatStyle = " panel_5_category_name_off";
										}
									}
									categoryHTMLTest = baseCatNameHTMLStart + "<div id='panel5CategoryName" + catArray[w][0] + "' class='panel_5_category_name_" + catArray[w][0] + replaceImgMouseClass + " panel_5_category_name " + baseCatStyle + "'" + catNameTagLink + " tabindex='0' title=\"" + catArray[w][1] + "\">" + catArray[w][1] + daProdNumWrite + "<\/div>" + baseCatNameHTMLEnd;
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
										catBigImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel5CategoryBigImgDivShell" + catArray[w][0] + "' class='panel_5_category_big_img_div_shell panel_5_category_big_img_div_shell_" + catArray[w][0] + "' onclick='panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\",1);panel5CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\",1);panel5CatImgClick(" + catArray[w][0] + ");}'";
										if (hoverState==1) {
											catBigImgTagRender += " onmouseover='panel5CatMouseOver(" + w + ");panel5CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel5CatMouseOver(" + w + ");panel5CatImgReplace(1," + catArray[w][0] + ");'";
										}
										catBigImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel5CategoryBigImgDivBack" + catArray[w][0] + "' class='panel_5_category_big_img_div_back panel_5_category_big_img_div_back_off panel_5_category_big_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][3] + "\");'><\/div><div id='panel5CategoryBigImgDivOver" + catArray[w][0] + "' class='panel_5_category_big_img_div_over panel_5_category_big_img_div_over_" + catArray[w][0] + "'";
										if (hoverState==1) {
											catBigImgTagRender += " onmouseout='panel5CatMouseOut(" + w + ");panel5CatImgReplace(2," + catArray[w][0] + ");' onblur='panel5CatMouseOut(" + w + ");panel5CatImgReplace(2," + catArray[w][0] + ");'";
										}
										catBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
										categoryHTMLTest = baseCatBigImgHTMLStart + catBigImgTagRender + baseCatBigImgHTMLEnd;
									}
									else {
										categoryHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel5CategoryBigImg" + catArray[w][0] + "' class='panel_5_category_big_img' src='" + clientImgBase + catArray[w][3] + "'>" + baseCatBigImgHTMLEnd;
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
										catSmImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel5CategorySmImgDivShell" + catArray[w][0] + "' class='panel_5_category_sm_img_div_shell panel_5_category_sm_img_div_shell_" + catArray[w][0] + "' onclick='panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\",1);panel5CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\",1);panel5CatImgClick(" + catArray[w][0] + ");}'";
										if (hoverState==1) {
											catSmImgTagRender += " onmouseover='panel5CatMouseOver(" + w + ");panel5CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel5CatMouseOver(" + w + ");panel5CatImgReplace(1," + catArray[w][0] + ");'";
										}
										catSmImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel5CategorySmImgDivBack" + catArray[w][0] + "' class='panel_5_category_sm_img_div_back panel_5_category_sm_img_div_back_off panel_5_category_sm_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][4] + "\");'><\/div><div id='panel5CategorySmImgDivOver" + catArray[w][0] + "' class='panel_5_category_sm_img_div_over panel_5_category_sm_img_div_over_" + catArray[w][0] + "'";
										if (hoverState==1) {
											catSmImgTagRender += " onmouseout='panel5CatMouseOut(" + w + ");panel5CatImgReplace(2," + catArray[w][0] + ");' onblur='panel5CatMouseOut(" + w + ");panel5CatImgReplace(2," + catArray[w][0] + ");'";
										}
										catSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
										categoryHTMLTest = baseCatSmImgHTMLStart + catSmImgTagRender + baseCatSmImgHTMLEnd;
									}
									else {
										categoryHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel5CategorySmImg" + catArray[w][0] + "' class='panel_5_category_sm_img' src='" + clientImgBase + catArray[w][4] + "'>" + baseCatSmImgHTMLEnd;
									}
								}
								prodListHTML += "<span class='panel_5_prodlist_catshell panel_5_prodlist_catshell_" + catArray[w][0] + " panel_5_prodlist_catshell_off'>" + categoryHTMLTest + "<\/span>";
								break;
							}
						}
					}
					else {
						for (w=0; w<catArray.length; w++) {
							var categoryHTMLTest = autotextIt(p5TemplateSet.panel5CategoryDiv,"panel5Category");
							var catBadgeTagStart = categoryHTMLTest.indexOf("<!--BADGE");
							if (catBadgeTagStart != -1) {
								var catBadgeTagEnd = categoryHTMLTest.indexOf(">",catBadgeTagStart);
								var catBadgeTagStrip = categoryHTMLTest.substring(catBadgeTagStart,(catBadgeTagEnd+1));
								var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBadgeTagStart);
								var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBadgeTagEnd+1));
								categoryHTMLTest = baseCatBigImgHTMLStart + "<span id='panel5ProdlistCatBadge" + catArray[w][0] + "' class='panel_5_prodlist_cat_badge' style='display:none;'>0<\/span>" + baseCatBigImgHTMLEnd;
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
									var replaceImgMouseOver = "panel5CatImgReplace(1," + catArray[w][0] + ");";
									var replaceImgMouseOut = "panel5CatImgReplace(2," + catArray[w][0] + ");";
									var replaceImgMouseClass = " img_replace_active";
									var replaceImgCall = "panel5CatImgClick(" + catArray[w][0] + ");";
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
									catNameTagLink += " style='cursor:pointer;' onclick='panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\",1);" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\",1);" + replaceImgCall + "}'";
									if (hoverState==1) {
										catNameTagLink += " onmouseover='panel5CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel5CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel5CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel5CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
									}
									var thisCatIsOn = 1;
									for (q=0; q<prodFilterArray.length; q++) {
										if (prodFilterArray[q][8] == catArray[w][0] && prodFilterArray[q][9] == "0") {
											thisCatIsOn = 0;
											break;
										}
									}
									if (thisCatIsOn == 1) {
										var baseCatStyle = " panel_5_category_name_on";
										catArray[w][6] = 1;
										window["panel1CategoryNameVar" + catArray[w][0]] = 1;
									}
									else {
										var baseCatStyle = " panel_5_category_name_off";
									}
								}
								categoryHTMLTest = baseCatNameHTMLStart + "<div id='panel5CategoryName" + catArray[w][0] + "' class='panel_5_category_name_" + catArray[w][0] + replaceImgMouseClass + " panel_5_category_name " + baseCatStyle + "'" + catNameTagLink + " tabindex='0' title=\"" + catArray[w][1] + "\">" + catArray[w][1] + daProdNumWrite + "<\/div>" + baseCatNameHTMLEnd;
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
									catBigImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel5CategoryBigImgDivShell" + catArray[w][0] + "' class='panel_5_category_big_img_div_shell panel_5_category_big_img_div_shell_" + catArray[w][0] + "' onclick='panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\",1);panel5CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\",1);panel5CatImgClick(" + catArray[w][0] + ");}'";
									if (hoverState==1) {
										catBigImgTagRender += " onmouseover='panel5CatMouseOver(" + w + ");panel5CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel5CatMouseOver(" + w + ");panel5CatImgReplace(1," + catArray[w][0] + ");'";
									}
									catBigImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel5CategoryBigImgDivBack" + catArray[w][0] + "' class='panel_5_category_big_img_div_back panel_5_category_big_img_div_back_off panel_5_category_big_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][3] + "\");'><\/div><div id='panel5CategoryBigImgDivOver" + catArray[w][0] + "' class='panel_5_category_big_img_div_over panel_5_category_big_img_div_over_" + catArray[w][0] + "'";
									if (hoverState==1) {
										catBigImgTagRender += " onmouseout='panel5CatMouseOut(" + w + ");panel5CatImgReplace(2," + catArray[w][0] + ");' onblur='panel5CatMouseOut(" + w + ");panel5CatImgReplace(2," + catArray[w][0] + ");'";
									}
									catBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
									categoryHTMLTest = baseCatBigImgHTMLStart + catBigImgTagRender + baseCatBigImgHTMLEnd;
								}
								else {
									categoryHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel5CategoryBigImg" + catArray[w][0] + "' class='panel_5_category_big_img' src='" + clientImgBase + catArray[w][3] + "'>" + baseCatBigImgHTMLEnd;
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
									catSmImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel5CategorySmImgDivShell" + catArray[w][0] + "' class='panel_5_category_sm_img_div_shell panel_5_category_sm_img_div_shell_" + catArray[w][0] + "' onclick='panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\",1);panel5CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\",1);panel5CatImgClick(" + catArray[w][0] + ");}'";
									if (hoverState==1) {
										catSmImgTagRender += " onmouseover='panel5CatMouseOver(" + w + ");panel5CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel5CatMouseOver(" + w + ");panel5CatImgReplace(1," + catArray[w][0] + ");'";
									}
									catSmImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel5CategorySmImgDivBack" + catArray[w][0] + "' class='panel_5_category_sm_img_div_back panel_5_category_sm_img_div_back_off panel_5_category_sm_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][3] + "\");'><\/div><div id='panel5CategorySmImgDivOver" + catArray[w][0] + "' class='panel_5_category_sm_img_div_over panel_5_category_sm_img_div_over_" + catArray[w][0] + "'";
									if (hoverState==1) {
										catSmImgTagRender += " onmouseout='panel5CatMouseOut(" + w + ");panel5CatImgReplace(2," + catArray[w][0] + ");' onblur='panel5CatMouseOut(" + w + ");panel5CatImgReplace(2," + catArray[w][0] + ");'";
									}
									catSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
									categoryHTMLTest = baseCatSmImgHTMLStart + catSmImgTagRender + baseCatSmImgHTMLEnd;
								}
								else {
									categoryHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel5CategorySmImg" + catArray[w][0] + "' class='panel_5_category_sm_img' src='" + clientImgBase + catArray[w][3] + "'>" + baseCatSmImgHTMLEnd;
								}
							}
							prodListHTML += "<span class='panel_5_prodlist_catshell panel_5_prodlist_catshell_" + catArray[w][0] + " panel_5_prodlist_catshell_off'>" + categoryHTMLTest + "<\/span>";
						}
					}
				}
				else if (panel5ProductSort == "FAMLIST") {
					for (f=0; f<famArray.length; f++) {
						var familyHTMLTest = autotextIt(p5TemplateSet.panel5FamilyDiv,"panel5Family");
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
								var replaceImgMouseOver = "panel5FamImgReplace(1," + famArray[f][0] + ");";
								var replaceImgMouseOut = "panel5FamImgReplace(2," + famArray[f][0] + ");";
								var replaceImgMouseClass = " img_replace_active";
								var replaceImgCall = "panel5FamImgClick(" + famArray[f][0] + ");";
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
								famNameTagLink += " style='cursor:pointer;' onclick='panel5FamCatProdOpen(" + f + ");" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5FamCatProdOpen(" + f + ");" + replaceImgCall + "}'";
								if (hoverState==1) {
									famNameTagLink += " onmouseover='panel5FamMouseOver(" + f + ");" + replaceImgMouseOver + "' onfocus='panel5FamMouseOver(" + f + ");" + replaceImgMouseOver + "' onmouseout='panel5FamMouseOut(" + f + ");" + replaceImgMouseOut + "' onblur='panel5FamMouseOut(" + f + ");" + replaceImgMouseOut + "'";
								}
							}
							familyHTMLTest = baseFamNameHTMLStart + "<div id='panel5FamilyName" + famArray[f][0] + "' class='panel_5_family_name_" + famArray[f][0] + replaceImgMouseClass + " panel_5_family_name panel_5_family_name_off'" + famNameTagLink + " tabindex='0' title=\"" + famArray[f][1] + "\">" + famArray[f][1] + daFamNumWrite + "<\/div>" + baseFamNameHTMLEnd;
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
								famBigImgTagRender += "<div title=\"" + famArray[f][1] + "\" id='panel5FamilyBigImgDivShell" + famArray[f][0] + "' class='panel_5_family_big_img_div_shell panel_5_family_big_img_div_shell_" + famArray[f][0] + "' onclick='panel5FamCatProdOpen(" + f + ");panel5FamImgClick(" + famArray[f][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5FamCatProdOpen(" + f + ");panel5FamImgClick(" + famArray[f][0] + ");}'";
								if (hoverState==1) {
									famBigImgTagRender += " onmouseover='panel5FamMouseOver(" + f + ");panel5FamImgReplace(1," + famArray[f][0] + ");' onfocus='panel5FamMouseOver(" + f + ");panel5FamImgReplace(1," + famArray[f][0] + ");'";
								}
								famBigImgTagRender += " tabindex='0' title=\"" + famArray[f][1] + "\"><div id='panel5FamilyBigImgDivBack" + famArray[f][0] + "' class='panel_5_family_big_img_div_back panel_5_family_big_img_div_back_off panel_5_family_big_img_div_back_" + famArray[f][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + famArray[f][2] + "\");'><\/div><div id='panel5FamilyBigImgDivOver" + famArray[f][0] + "' class='panel_5_family_big_img_div_over panel_5_family_big_img_div_over_" + famArray[f][0] + "'";
								if (hoverState==1) {
									famBigImgTagRender += " onmouseout='panel5FamMouseOut(" + f + ");panel5FamImgReplace(2," + famArray[f][0] + ");' onblur='panel5FamMouseOut(" + f + ");panel5FamImgReplace(2," + famArray[f][0] + ");'";
								}
								famBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
								familyHTMLTest = baseFamBigImgHTMLStart + famBigImgTagRender + baseFamBigImgHTMLEnd;
							}
							else {
								familyHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + famArray[f][1] + "\" alt=\"" + famArray[f][1] + "\" id='panel5FamilyBigImg" + famArray[f][0] + "' class='panel_5_family_big_img' src='" + clientImgBase + famArray[f][2] + "'>" + baseFamBigImgHTMLEnd;
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
								famSmImgTagRender += "<div title=\"" + famArray[f][1] + "\" id='panel5FamilySmImgDivShell" + famArray[f][0] + "' class='panel_5_family_sm_img_div_shell panel_5_family_sm_img_div_shell_" + famArray[f][0] + "' onclick='panel5FamCatProdOpen(" + f + ");panel5FamImgClick(" + famArray[f][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5FamCatProdOpen(" + f + ");panel5FamImgClick(" + famArray[f][0] + ");}'";
								if (hoverState==1) {
									famSmImgTagRender += " onmouseover='panel5FamMouseOver(" + f + ");panel5FamImgReplace(1," + famArray[f][0] + ");' onfocus='panel5FamMouseOver(" + f + ");panel5FamImgReplace(1," + famArray[f][0] + ");'";
								}
								famSmImgTagRender += " tabindex='0' title=\"" + famArray[f][1] + "\"><div id='panel5FamilySmImgDivBack" + famArray[f][0] + "' class='panel_5_family_sm_img_div_back panel_5_family_sm_img_div_back_off panel_5_family_sm_img_div_back_" + famArray[f][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + famArray[f][3] + "\");'><\/div><div id='panel5FamilySmImgDivOver" + famArray[f][0] + "' class='panel_5_family_sm_img_div_over panel_5_family_sm_img_div_over_" + famArray[f][0] + "'";
								if (hoverState==1) {
									famSmImgTagRender += " onmouseout='panel5FamMouseOut(" + f + ");panel5FamImgReplace(2," + famArray[f][0] + ");' onblur='panel5FamMouseOut(" + f + ");panel5FamImgReplace(2," + famArray[f][0] + ");'";
								}
								famSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
								familyHTMLTest = baseFamSmImgHTMLStart + famSmImgTagRender + baseFamSmImgHTMLEnd;
							}
							else {
								familyHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + famArray[f][1] + "\" alt=\"" + famArray[f][1] + "\" id='panel5FamilySmImg" + famArray[f][0] + "' class='panel_5_family_sm_img' src='" + clientImgBase + famArray[f][3] + "'>" + baseFamSmImgHTMLEnd;
							}
						}
						var categoryHTMLTest = "";
						var categoryHTMLLeaf = "";
						for (w=0; w<catArray.length; w++) {
							if (catArray[w][2] == famArray[f][0]) {
								categoryHTMLTest = autotextIt(p5TemplateSet.panel5CategoryDiv,"panel5Category");
								var catBadgeTagStart = categoryHTMLTest.indexOf("<!--BADGE");
								if (catBadgeTagStart != -1) {
									var catBadgeTagEnd = categoryHTMLTest.indexOf(">",catBadgeTagStart);
									var catBadgeTagStrip = categoryHTMLTest.substring(catBadgeTagStart,(catBadgeTagEnd+1));
									var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBadgeTagStart);
									var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBadgeTagEnd+1));
									categoryHTMLTest = baseCatBigImgHTMLStart + "<span id='panel5ProdlistCatBadge" + catArray[w][0] + "' class='panel_5_prodlist_cat_badge' style='display:none;'>0<\/span>" + baseCatBigImgHTMLEnd;
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
										var replaceImgMouseOver = "panel5CatImgReplace(1," + catArray[w][0] + ");";
										var replaceImgMouseOut = "panel5CatImgReplace(2," + catArray[w][0] + ");";
										var replaceImgMouseClass = " img_replace_active";
										var replaceImgCall = "panel5CatImgClick(" + catArray[w][0] + ");";
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
										catNameTagLink += " style='cursor:pointer;' onclick='panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\",1);" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\",1);" + replaceImgCall + "}'";
										if (hoverState==1) {
											catNameTagLink += " onmouseover='panel5CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel5CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel5CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel5CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
										}
										var thisCatIsOn = 1;
										for (q=0; q<prodFilterArray.length; q++) {
											if (prodFilterArray[q][8] == catArray[w][0] && prodFilterArray[q][9] == "0") {
												thisCatIsOn = 0;
												break;
											}
										}
										if (thisCatIsOn == 1) {
											var baseCatStyle = " panel_5_category_name_on";
											catArray[w][6] = 1;
											window["panel1CategoryNameVar" + catArray[w][0]] = 1;
										}
										else {
											var baseCatStyle = " panel_5_category_name_off";
										}
									}
									categoryHTMLTest = baseCatNameHTMLStart + "<div id='panel5CategoryName" + catArray[w][0] + "' class='panel_5_category_name_" + catArray[w][0] + replaceImgMouseClass + " panel_5_category_name " + baseCatStyle + "'" + catNameTagLink + " tabindex='0' title=\"" + catArray[w][1] + "\">" + catArray[w][1] + daProdNumWrite + "<\/div>" + baseCatNameHTMLEnd;
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
										catBigImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel5CategoryBigImgDivShell" + catArray[w][0] + "' class='panel_5_category_big_img_div_shell panel_5_category_big_img_div_shell_" + catArray[w][0] + "' onclick='panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\",1);panel5CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\",1);panel5CatImgClick(" + catArray[w][0] + ");}'";
										if (hoverState==1) {
											catBigImgTagRender += " onmouseover='panel5CatMouseOver(" + w + ");panel5CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel5CatMouseOver(" + w + ");panel5CatImgReplace(1," + catArray[w][0] + ");'";
										}
										catBigImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel5CategoryBigImgDivBack" + catArray[w][0] + "' class='panel_5_category_big_img_div_back panel_5_category_big_img_div_back_off panel_5_category_big_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][3] + "\");'><\/div><div id='panel5CategoryBigImgDivOver" + catArray[w][0] + "' class='panel_5_category_big_img_div_over panel_5_category_big_img_div_over_" + catArray[w][0] + "'";
										if (hoverState==1) {
											catBigImgTagRender += " onmouseout='panel5CatMouseOut(" + w + ");panel5CatImgReplace(2," + catArray[w][0] + ");' onblur='panel5CatMouseOut(" + w + ");panel5CatImgReplace(2," + catArray[w][0] + ");'";
										}
										catBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
										categoryHTMLTest = baseCatBigImgHTMLStart + catBigImgTagRender + baseCatBigImgHTMLEnd;
									}
									else {
										categoryHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel5CategoryBigImg" + catArray[w][0] + "' class='panel_5_category_big_img' src='" + clientImgBase + catArray[w][3] + "'>" + baseCatBigImgHTMLEnd;
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
										catSmImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel5CategorySmImgDivShell" + catArray[w][0] + "' class='panel_5_category_sm_img_div_shell panel_5_category_sm_img_div_shell_" + catArray[w][0] + "' onclick='panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\",1);panel5CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5SelectCat(" + w + ", \"panel5CategoryName" + catArray[w][0] + "\", \"panel_5_category_name\",1);panel5CatImgClick(" + catArray[w][0] + ");}'";
										if (hoverState==1) {
											catSmImgTagRender += " onmouseover='panel5CatMouseOver(" + w + ");panel5CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel5CatMouseOver(" + w + ");panel5CatImgReplace(1," + catArray[w][0] + ");'";
										}
										catSmImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel5CategorySmImgDivBack" + catArray[w][0] + "' class='panel_5_category_sm_img_div_back panel_5_category_sm_img_div_back_off panel_5_category_sm_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][4] + "\");'><\/div><div id='panel5CategorySmImgDivOver" + catArray[w][0] + "' class='panel_5_category_sm_img_div_over panel_5_category_sm_img_div_over_" + catArray[w][0] + "'";
										if (hoverState==1) {
											catSmImgTagRender += " onmouseout='panel5CatMouseOut(" + w + ");panel5CatImgReplace(2," + catArray[w][0] + ");' onblur='panel5CatMouseOut(" + w + ");panel5CatImgReplace(2," + catArray[w][0] + ");'";
										}
										catSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
										categoryHTMLTest = baseCatSmImgHTMLStart + catSmImgTagRender + baseCatSmImgHTMLEnd;
									}
									else {
										categoryHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel5CategorySmImg" + catArray[w][0] + "' class='panel_5_category_sm_img' src='" + clientImgBase + catArray[w][4] + "'>" + baseCatSmImgHTMLEnd;
									}
								}
								categoryHTMLLeaf += categoryHTMLTest;
							}
						}
						prodListHTML += familyHTMLTest + "<span class='panel_5_prodlist_famshell panel_5_prodlist_famshell_" + famArray[f][0] + " panel_5_prodlist_famshell_off'><div class='panel_5_family_category_shell panel_5_family_category_shell_" + famArray[f][0] + "' style='display:none;'>" + categoryHTMLLeaf + "<\/div><\/span>";
					}
				}
				else if (panel5ProductSort == "FAMPROD") {
					for (f=0; f<famArray.length; f++) {
						var familyHTMLTest = autotextIt(p5TemplateSet.panel5FamilyDiv,"panel5Family");
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
								var replaceImgMouseOver = "panel5FamImgReplace(1," + famArray[f][0] + ");";
								var replaceImgMouseOut = "panel5FamImgReplace(2," + famArray[f][0] + ");";
								var replaceImgMouseClass = " img_replace_active";
								var replaceImgCall = "panel5FamImgClick(" + famArray[f][0] + ");";
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
								famNameTagLink += " style='cursor:pointer;' onclick='panel5SelectFam(" + f + ", \"panel5FamilyName" + famArray[f][0] + "\", \"panel_5_family_name\",1);" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5SelectFam(" + f + ", \"panel5FamilyName" + famArray[f][0] + "\", \"panel_5_family_name\",1);" + replaceImgCall + "}'";
								if (hoverState==1) {
									famNameTagLink += " onmouseover='panel5FamMouseOver(" + f + ");" + replaceImgMouseOver + "' onfocus='panel5FamMouseOver(" + f + ");" + replaceImgMouseOver + "' onmouseout='panel5FamMouseOut(" + f + ");" + replaceImgMouseOut + "' onblur='panel5FamMouseOut(" + f + ");" + replaceImgMouseOut + "'";
								}
							}
							familyHTMLTest = baseFamNameHTMLStart + "<div id='panel5FamilyName" + famArray[f][0] + "' class='panel_5_family_name_" + famArray[f][0] + replaceImgMouseClass + " panel_5_family_name panel_5_family_name_off'" + famNameTagLink + " tabindex='0' title=\"" + famArray[f][1] + "\">" + famArray[f][1] + daFamNumWrite + "<\/div>" + baseFamNameHTMLEnd;
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
								famBigImgTagRender += "<div title=\"" + famArray[f][1] + "\" id='panel5FamilyBigImgDivShell" + famArray[f][0] + "' class='panel_5_family_big_img_div_shell panel_5_family_big_img_div_shell_" + famArray[f][0] + "' onclick='panel5SelectFam(" + f + ", \"panel5FamilyName" + famArray[f][0] + "\", \"panel_5_family_name\",1);panel5FamImgClick(" + famArray[f][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5SelectFam(" + f + ", \"panel5FamilyName" + famArray[f][0] + "\", \"panel_5_family_name\",1);panel5FamImgClick(" + famArray[f][0] + ");}'";
								if (hoverState==1) {
									famBigImgTagRender += " onmouseover='panel5FamMouseOver(" + f + ");panel5FamImgReplace(1," + famArray[f][0] + ");' onfocus='panel5FamMouseOver(" + f + ");panel5FamImgReplace(1," + famArray[f][0] + ");'";
								}
								famBigImgTagRender += " tabindex='0' title=\"" + famArray[f][1] + "\"><div id='panel5FamilyBigImgDivBack" + famArray[f][0] + "' class='panel_5_family_big_img_div_back panel_5_family_big_img_div_back_off panel_5_family_big_img_div_back_" + famArray[f][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + famArray[f][2] + "\");'><\/div><div id='panel5FamilyBigImgDivOver" + famArray[f][0] + "' class='panel_5_family_big_img_div_over panel_5_family_big_img_div_over_" + famArray[f][0] + "'";
								if (hoverState==1) {
									famBigImgTagRender += " onmouseout='panel5FamMouseOut(" + f + ");panel5FamImgReplace(2," + famArray[f][0] + ");' onblur='panel5FamMouseOut(" + f + ");panel5FamImgReplace(2," + famArray[f][0] + ");'";
								}
								famBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
								familyHTMLTest = baseFamBigImgHTMLStart + famBigImgTagRender + baseFamBigImgHTMLEnd;
							}
							else {
								familyHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + famArray[f][1] + "\" alt=\"" + famArray[f][1] + "\" id='panel5FamilyBigImg" + famArray[f][0] + "' class='panel_5_family_big_img' src='" + clientImgBase + famArray[f][2] + "'>" + baseFamBigImgHTMLEnd;
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
								famSmImgTagRender += "<div title=\"" + famArray[f][1] + "\" id='panel5FamilySmImgDivShell" + famArray[f][0] + "' class='panel_5_family_sm_img_div_shell panel_5_family_sm_img_div_shell_" + famArray[f][0] + "' onclick='panel5SelectFam(" + f + ", \"panel5FamilyName" + famArray[f][0] + "\", \"panel_5_family_name\",1);panel5FamImgClick(" + famArray[f][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5SelectFam(" + f + ", \"panel5FamilyName" + famArray[f][0] + "\", \"panel_5_family_name\",1);panel5FamImgClick(" + famArray[f][0] + ");}'";
								if (hoverState==1) {
									famSmImgTagRender += " onmouseover='panel5FamMouseOver(" + f + ");panel5FamImgReplace(1," + famArray[f][0] + ");' onfocus='panel5FamMouseOver(" + f + ");panel5FamImgReplace(1," + famArray[f][0] + ");'";
								}
								famSmImgTagRender += " tabindex='0' title=\"" + famArray[f][1] + "\"><div id='panel5FamilySmImgDivBack" + famArray[f][0] + "' class='panel_5_family_sm_img_div_back panel_5_family_sm_img_div_back_off panel_5_family_sm_img_div_back_" + famArray[f][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + famArray[f][3] + "\");'><\/div><div id='panel5FamilySmImgDivOver" + famArray[f][0] + "' class='panel_5_family_sm_img_div_over panel_5_family_sm_img_div_over_" + famArray[f][0] + "'";
								if (hoverState==1) {
									famSmImgTagRender += " onmouseout='panel5FamMouseOut(" + f + ");panel5FamImgReplace(2," + famArray[f][0] + ");' onblur='panel5FamMouseOut(" + f + ");panel5FamImgReplace(2," + famArray[f][0] + ");'";
								}
								famSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
								familyHTMLTest = baseFamSmImgHTMLStart + famSmImgTagRender + baseFamSmImgHTMLEnd;
							}
							else {
								familyHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + famArray[f][1] + "\" alt=\"" + famArray[f][1] + "\" id='panel5FamilySmImg" + famArray[f][0] + "' class='panel_5_family_sm_img' src='" + clientImgBase + famArray[f][3] + "'>" + baseFamSmImgHTMLEnd;
							}
						}
						prodListHTML += "<span class='panel_5_prodlist_famshell panel_5_prodlist_famshell_" + famArray[f][0] + " panel_5_prodlist_famshell_off'>" + familyHTMLTest + "<\/span>";
					}
				}
				else if (panel5ProductSort == "FAMCATPROD") {
					for (f=0; f<famArray.length; f++) {
						var familyHTMLTest = autotextIt(p5TemplateSet.panel5FamilyDiv,"panel5Family");
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
								var replaceImgMouseOver = "panel5FamImgReplace(1," + famArray[f][0] + ");";
								var replaceImgMouseOut = "panel5FamImgReplace(2," + famArray[f][0] + ");";
								var replaceImgMouseClass = " img_replace_active";
								var replaceImgCall = "panel5FamImgClick(" + famArray[f][0] + ");";
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
								famNameTagLink += " style='cursor:pointer;' onclick='panel5FamCatProdOpen(" + f + ");" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5FamCatProdOpen(" + f + ");" + replaceImgCall + "}'";
								if (hoverState==1) {
									famNameTagLink += " onmouseover='panel5FamMouseOver(" + f + ");" + replaceImgMouseOver + "' onfocus='panel5FamMouseOver(" + f + ");" + replaceImgMouseOver + "' onmouseout='panel5FamMouseOut(" + f + ");" + replaceImgMouseOut + "' onblur='panel5FamMouseOut(" + f + ");" + replaceImgMouseOut + "'";
								}
							}
							familyHTMLTest = baseFamNameHTMLStart + "<div id='panel5FamilyName" + famArray[f][0] + "' class='panel_5_family_name_" + famArray[f][0] + replaceImgMouseClass + " panel_5_family_name panel_5_family_name_off'" + famNameTagLink + " tabindex='0' title=\"" + famArray[f][1] + "\">" + famArray[f][1] + daFamNumWrite + "<\/div>" + baseFamNameHTMLEnd;
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
								famBigImgTagRender += "<div title=\"" + famArray[f][1] + "\" id='panel5FamilyBigImgDivShell" + famArray[f][0] + "' class='panel_5_family_big_img_div_shell panel_5_family_big_img_div_shell_" + famArray[f][0] + "' onclick='panel5FamCatProdOpen(" + f + ");panel5FamImgClick(" + famArray[f][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5FamCatProdOpen(" + f + ");panel5FamImgClick(" + famArray[f][0] + ");}'";
								if (hoverState==1) {
									famBigImgTagRender += " onmouseover='panel5FamMouseOver(" + f + ");panel5FamImgReplace(1," + famArray[f][0] + ");' onfocus='panel5FamMouseOver(" + f + ");panel5FamImgReplace(1," + famArray[f][0] + ");'";
								}
								famBigImgTagRender += " tabindex='0' title=\"" + famArray[f][1] + "\"><div id='panel5FamilyBigImgDivBack" + famArray[f][0] + "' class='panel_5_family_big_img_div_back panel_5_family_big_img_div_back_off panel_5_family_big_img_div_back_" + famArray[f][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + famArray[f][2] + "\");'><\/div><div id='panel5FamilyBigImgDivOver" + famArray[f][0] + "' class='panel_5_family_big_img_div_over panel_5_family_big_img_div_over_" + famArray[f][0] + "'";
								if (hoverState==1) {
									famBigImgTagRender += " onmouseout='panel5FamMouseOut(" + f + ");panel5FamImgReplace(2," + famArray[f][0] + ");' onblur='panel5FamMouseOut(" + f + ");panel5FamImgReplace(2," + famArray[f][0] + ");'";
								}
								famBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
								familyHTMLTest = baseFamBigImgHTMLStart + famBigImgTagRender + baseFamBigImgHTMLEnd;
							}
							else {
								familyHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + famArray[f][1] + "\" alt=\"" + famArray[f][1] + "\" id='panel5FamilyBigImg" + famArray[f][0] + "' class='panel_5_family_big_img' src='" + clientImgBase + famArray[f][2] + "'>" + baseFamBigImgHTMLEnd;
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
								famSmImgTagRender += "<div title=\"" + famArray[f][1] + "\" id='panel5FamilySmImgDivShell" + famArray[f][0] + "' class='panel_5_family_sm_img_div_shell panel_5_family_sm_img_div_shell_" + famArray[f][0] + "' onclick='panel5FamCatProdOpen(" + f + ");panel5FamImgClick(" + famArray[f][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5FamCatProdOpen(" + f + ");panel5FamImgClick(" + famArray[f][0] + ");}'";
								if (hoverState==1) {
									famSmImgTagRender += " onmouseover='panel5FamMouseOver(" + f + ");panel5FamImgReplace(1," + famArray[f][0] + ");' onfocus='panel5FamMouseOver(" + f + ");panel5FamImgReplace(1," + famArray[f][0] + ");'";
								}
								famSmImgTagRender += " tabindex='0' title=\"" + famArray[f][1] + "\"><div id='panel5FamilySmImgDivBack" + famArray[f][0] + "' class='panel_5_family_sm_img_div_back panel_5_family_sm_img_div_back_off panel_5_family_sm_img_div_back_" + famArray[f][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + famArray[f][3] + "\");'><\/div><div id='panel5FamilySmImgDivOver" + famArray[f][0] + "' class='panel_5_family_sm_img_div_over panel_5_family_sm_img_div_over_" + famArray[f][0] + "'";
								if (hoverState==1) {
									famSmImgTagRender += " onmouseout='panel5FamMouseOut(" + f + ");panel5FamImgReplace(2," + famArray[f][0] + ");' onblur='panel5FamMouseOut(" + f + ");panel5FamImgReplace(2," + famArray[f][0] + ");'";
								}
								famSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
								familyHTMLTest = baseFamSmImgHTMLStart + famSmImgTagRender + baseFamSmImgHTMLEnd;
							}
							else {
								familyHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + famArray[f][1] + "\" alt=\"" + famArray[f][1] + "\" id='panel5FamilySmImg" + famArray[f][0] + "' class='panel_5_family_sm_img' src='" + clientImgBase + famArray[f][3] + "'>" + baseFamSmImgHTMLEnd;
							}
						}
						var categoryHTMLTest = "";
						var categoryHTMLLeaf = "";
						for (w=0; w<catArray.length; w++) {
							if (catArray[w][2] == famArray[f][0]) {
								categoryHTMLTest = autotextIt(p5TemplateSet.panel5CategoryDiv,"panel5Category");
								var catBadgeTagStart = categoryHTMLTest.indexOf("<!--BADGE");
								if (catBadgeTagStart != -1) {
									var catBadgeTagEnd = categoryHTMLTest.indexOf(">",catBadgeTagStart);
									var catBadgeTagStrip = categoryHTMLTest.substring(catBadgeTagStart,(catBadgeTagEnd+1));
									var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBadgeTagStart);
									var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBadgeTagEnd+1));
									categoryHTMLTest = baseCatBigImgHTMLStart + "<span id='panel5ProdlistCatBadge" + catArray[w][0] + "' class='panel_5_prodlist_cat_badge' style='display:none;'>0<\/span>" + baseCatBigImgHTMLEnd;
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
										var replaceImgMouseOver = "panel5CatImgReplace(1," + catArray[w][0] + ");";
										var replaceImgMouseOut = "panel5CatImgReplace(2," + catArray[w][0] + ");";
										var replaceImgMouseClass = " img_replace_active";
										var replaceImgCall = "panel5CatImgClick(" + catArray[w][0] + ");";
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
										catNameTagLink += " style='cursor:pointer;' onclick='panel5CatProdOpen(" + w + ");" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5CatProdOpen(" + w + ");" + replaceImgCall + "}'";
										if (hoverState==1) {
											catNameTagLink += " onmouseover='panel5CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel5CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel5CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel5CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
										}
										var thisCatIsOn = 1;
										for (q=0; q<prodFilterArray.length; q++) {
											if (prodFilterArray[q][8] == catArray[w][0] && prodFilterArray[q][9] == "0") {
												thisCatIsOn = 0;
												break;
											}
										}
										if (thisCatIsOn == 1) {
											var baseCatStyle = " panel_5_category_name_on";
											catArray[w][6] = 1;
											window["panel1CategoryNameVar" + catArray[w][0]] = 1;
										}
										else {
											var baseCatStyle = " panel_5_category_name_off";
										}
									}
									categoryHTMLTest = baseCatNameHTMLStart + "<div id='panel5CategoryName" + catArray[w][0] + "' class='panel_5_category_name_" + catArray[w][0] + replaceImgMouseClass + " panel_5_category_name " + baseCatStyle + "'" + catNameTagLink + " tabindex='0' title=\"" + catArray[w][1] + "\">" + catArray[w][1] + daProdNumWrite + "<\/div>" + baseCatNameHTMLEnd;
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
										catBigImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel5CategoryBigImgDivShell" + catArray[w][0] + "' class='panel_5_category_big_img_div_shell panel_5_category_big_img_div_shell_" + catArray[w][0] + "' onclick='panel5CatProdOpen(" + w + ");panel5CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5CatProdOpen(" + w + ");panel5CatImgClick(" + catArray[w][0] + ");}'";
										if (hoverState==1) {
											catBigImgTagRender += " onmouseover='panel5CatMouseOver(" + w + ");panel5CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel5CatMouseOver(" + w + ");panel5CatImgReplace(1," + catArray[w][0] + ");'";
										}
										catBigImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel5CategoryBigImgDivBack" + catArray[w][0] + "' class='panel_5_category_big_img_div_back panel_5_category_big_img_div_back_off panel_5_category_big_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][3] + "\");'><\/div><div id='panel5CategoryBigImgDivOver" + catArray[w][0] + "' class='panel_5_category_big_img_div_over panel_5_category_big_img_div_over_" + catArray[w][0] + "'";
										if (hoverState==1) {
											catBigImgTagRender += " onmouseout='panel5CatMouseOut(" + w + ");panel5CatImgReplace(2," + catArray[w][0] + ");' onblur='panel5CatMouseOut(" + w + ");panel5CatImgReplace(2," + catArray[w][0] + ");'";
										}
										catBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
										categoryHTMLTest = baseCatBigImgHTMLStart + catBigImgTagRender + baseCatBigImgHTMLEnd;
									}
									else {
										categoryHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel5CategoryBigImg" + catArray[w][0] + "' class='panel_5_category_big_img' src='" + clientImgBase + catArray[w][3] + "'>" + baseCatBigImgHTMLEnd;
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
										catSmImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel5CategorySmImgDivShell" + catArray[w][0] + "' class='panel_5_category_sm_img_div_shell panel_5_category_sm_img_div_shell_" + catArray[w][0] + "' onclick='panel5CatProdOpen(" + w + ");panel5CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5CatProdOpen(" + w + ");panel5CatImgClick(" + catArray[w][0] + ");}'";
										if (hoverState==1) {
											catSmImgTagRender += " onmouseover='panel5CatMouseOver(" + w + ");panel5CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel5CatMouseOver(" + w + ");panel5CatImgReplace(1," + catArray[w][0] + ");'";
										}
										catSmImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel5CategorySmImgDivBack" + catArray[w][0] + "' class='panel_5_category_sm_img_div_back panel_5_category_sm_img_div_back_off panel_5_category_sm_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][4] + "\");'><\/div><div id='panel5CategorySmImgDivOver" + catArray[w][0] + "' class='panel_5_category_sm_img_div_over panel_5_category_sm_img_div_over_" + catArray[w][0] + "'";
										if (hoverState==1) {
											catSmImgTagRender += " onmouseout='panel5CatMouseOut(" + w + ");panel5CatImgReplace(2," + catArray[w][0] + ");' onblur='panel5CatMouseOut(" + w + ");panel5CatImgReplace(2," + catArray[w][0] + ");'";
										}
										catSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
										categoryHTMLTest = baseCatSmImgHTMLStart + catSmImgTagRender + baseCatSmImgHTMLEnd;
									}
									else {
										categoryHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel5CategorySmImg" + catArray[w][0] + "' class='panel_5_category_sm_img' src='" + clientImgBase + catArray[w][4] + "'>" + baseCatSmImgHTMLEnd;
									}
								}
								var productHTMLTest = "";
								var productHTMLLeaf = "";
								for (pr=0; pr<prodFilterArray.length; pr++) {
									if (catArray[w][0] == prodFilterArray[pr][8]) {
										var productHTMLTest = autotextIt(p5TemplateSet.panel5ProductDiv,"panel5Product");
										var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
										if (prodDiscTagStart != -1) {
											var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
											var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
											var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
											var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
											var prodDiscWrite = "";
											var discVal = prodFilterArray[x][6];
											if (discVal != 1) {
												prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel5Product_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
											}
											productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
										}
										var prodNameTagStart = productHTMLTest.indexOf("<!--PRODNAME");
										if (prodNameTagStart != -1) {
											var prodNameTagEnd = productHTMLTest.indexOf(">",prodNameTagStart);
											var prodNameTagStrip = productHTMLTest.substring(prodNameTagStart,(prodNameTagEnd+1));
											var baseProdNameHTMLStart = productHTMLTest.substr(0,prodNameTagStart);
											var baseProdNameHTMLEnd = productHTMLTest.substr((prodNameTagEnd+1));
											var prodNameTagLink = " style='cursor:pointer;' onclick='panel5ProdSelect(" + prodFilterArray[pr][0] + ", \"" + prodFilterArray[pr][1] + "\", \"panel5ProductName" + prodFilterArray[pr][0] + "\", \"panel_5_product_name\", "+pr+");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5ProdSelect(" + prodFilterArray[pr][0] + ", \"" + prodFilterArray[pr][1] + "\", \"panel5ProductName" + prodFilterArray[pr][0] + "\", \"panel_5_product_name\", "+pr+");}'";
											if (hoverState==1) {
												prodNameTagLink += " onmouseover='panel5ProdMouseOver(\"panel5ProductName" + prodFilterArray[pr][0] + "\", \"panel_5_product_name\", "+pr+");' onfocus='panel5ProdMouseOver(\"panel5ProductName" + prodFilterArray[pr][0] + "\", \"panel_5_product_name\", "+pr+");' onmouseout='panel5ProdMouseOut(\"panel5ProductName" + prodFilterArray[pr][0] + "\", \"panel_5_product_name\", "+pr+");' onblur='panel5ProdMouseOut(\"panel5ProductName" + prodFilterArray[pr][0] + "\", \"panel_5_product_name\", "+pr+");'";
											}
											if (prodFilterArray[pr][9] == "1") {
												var baseProductStyle = " panel_5_product_name_on";
											}
											else {
												var baseProductStyle = " panel_5_product_name_off";
											}
											var descTest = prodNameTagStrip.indexOf(" DESC");
											if (descTest != -1) {
												var descVal = "<span class='panel_5_product_name_desc'>" + prodFilterArray[pr][3] + "<\/span>";
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
											productHTMLTest = baseProdNameHTMLStart + "<div id='panel5ProductName" + prodFilterArray[pr][0] + "' class='panel_5_product_name" + baseProductStyle + "'" + prodNameTagLink + " tabindex='0' title=\"" + prodFilterArray[pr][2] + "\">" + prodNameItalicVar + "<span class='panel_5_product_name_name'>" + prodFilterArray[pr][2] + "<\/span>" + descVal + "<\/div>" + baseProdNameHTMLEnd;
										}
										var prodDescTagStart = productHTMLTest.indexOf("<!--PRODDESC");
										if (prodDescTagStart != -1) {
											var prodDescTagEnd = productHTMLTest.indexOf(">",prodDescTagStart);
											var prodDescTagStrip = productHTMLTest.substring(prodDescTagStart,(prodDescTagEnd+1));
											var baseProdDescHTMLStart = productHTMLTest.substr(0,prodDescTagStart);
											var baseProdDescHTMLEnd = productHTMLTest.substr((prodDescTagEnd+1));
											productHTMLTest = baseProdDescHTMLStart + "<div id='panel5ProductDesc" + prodFilterArray[pr][0] + "' class='panel_5_product_desc'>" + prodFilterArray[pr][3] + "<\/div>" + baseProdDescHTMLEnd;
										}
										var prodCatTagStart = productHTMLTest.indexOf("<!--PRODCAT");
										if (prodCatTagStart != -1) {
											var prodCatTagEnd = productHTMLTest.indexOf(">",prodCatTagStart);
											var prodCatTagStrip = productHTMLTest.substring(prodCatTagStart,(prodCatTagEnd+1));
											var baseProdCatHTMLStart = productHTMLTest.substr(0,prodCatTagStart);
											var baseProdCatHTMLEnd = productHTMLTest.substr((prodCatTagEnd+1));
											productHTMLTest = baseProdCatHTMLStart + "<div id='panel5ProductCat" + prodFilterArray[pr][0] + "' class='panel_5_product_cat'>" + prodFilterArray[pr][16] + "<\/div>" + baseProdCatHTMLEnd;
										}
										var prodBigImgTagStart = productHTMLTest.indexOf("<!--PRODBIGIMG");
										if (prodBigImgTagStart != -1) {
											var prodBigImgTagEnd = productHTMLTest.indexOf(">",prodBigImgTagStart);
											var prodBigImgTagStrip = productHTMLTest.substring(prodBigImgTagStart,(prodBigImgTagEnd+1));
											var baseProdBigImgHTMLStart = productHTMLTest.substr(0,prodBigImgTagStart);
											var baseProdBigImgHTMLEnd = productHTMLTest.substr((prodBigImgTagEnd+1));
											var prodBigImgTagLinkStart = "<a href='' onclick='panel5ProdSelect(" + prodFilterArray[pr][0] + ", \"" + prodFilterArray[pr][1] + "\", \"panel5ProductName" + prodFilterArray[pr][0] + "\", \"panel_5_product_name\", "+pr+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5ProdSelect(" + prodFilterArray[pr][0] + ", \"" + prodFilterArray[pr][1] + "\", \"panel5ProductName" + prodFilterArray[pr][0] + "\", \"panel_5_product_name\", "+pr+");return false;}'";
											if (hoverState==1) {
												prodBigImgTagLinkStart += " onmouseover='panel5ProdMouseOver(\"panel5ProductName" + prodFilterArray[pr][0] + "\", \"panel_5_product_name\", "+pr+");' onfocus='panel5ProdMouseOver(\"panel5ProductName" + prodFilterArray[pr][0] + "\", \"panel_5_product_name\", "+pr+");' onmouseout='panel5ProdMouseOut(\"panel5ProductName" + prodFilterArray[pr][0] + "\", \"panel_5_product_name\", "+pr+");' onblur='panel5ProdMouseOut(\"panel5ProductName" + prodFilterArray[pr][0] + "\", \"panel_5_product_name\", "+pr+");'";
											}
											prodBigImgTagLinkStart += " tabindex='0' title=\"" + prodFilterArray[pr][2] + "\">";
											var prodBigImgTagLinkEnd = "<\/a>";
											productHTMLTest = baseProdBigImgHTMLStart + prodBigImgTagLinkStart + "<img title=\"" + prodFilterArray[pr][2] + "\" alt=\"" + prodFilterArray[pr][2] + "\" id='panel5ProductBigImg" + prodFilterArray[pr][0] + "' class='panel_5_product_big_img' src='" + clientImgBase + prodFilterArray[pr][4] + "'>" + prodBigImgTagLinkEnd + baseProdBigImgHTMLEnd;
										}
										var prodSmImgTagStart = productHTMLTest.indexOf("<!--PRODSMIMG");
										if (prodSmImgTagStart != -1) {
											var prodSmImgTagEnd = productHTMLTest.indexOf(">",prodSmImgTagStart);
											var prodSmImgTagStrip = productHTMLTest.substring(prodSmImgTagStart,(prodSmImgTagEnd+1));
											var baseProdSmImgHTMLStart = productHTMLTest.substr(0,prodSmImgTagStart);
											var baseProdSmImgHTMLEnd = productHTMLTest.substr((prodSmImgTagEnd+1));
											var prodSmImgTagLinkStart = "<a href='' onclick='panel5ProdSelect(" + prodFilterArray[pr][0] + ", \"" + prodFilterArray[pr][1] + "\", \"panel5ProductName" + prodFilterArray[pr][0] + "\", \"panel_5_product_name\", "+pr+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5ProdSelect(" + prodFilterArray[pr][0] + ", \"" + prodFilterArray[pr][1] + "\", \"panel5ProductName" + prodFilterArray[pr][0] + "\", \"panel_5_product_name\", "+pr+");return false;}'";
											if (hoverState==1) {
												prodSmImgTagLinkStart += " onmouseover='panel5ProdMouseOver(\"panel5ProductName" + prodFilterArray[pr][0] + "\", \"panel_5_product_name\", "+pr+");' onfocus='panel5ProdMouseOver(\"panel5ProductName" + prodFilterArray[pr][0] + "\", \"panel_5_product_name\", "+pr+");' onmouseout='panel5ProdMouseOut(\"panel5ProductName" + prodFilterArray[pr][0] + "\", \"panel_5_product_name\", "+pr+");' onblur='panel5ProdMouseOut(\"panel5ProductName" + prodFilterArray[pr][0] + "\", \"panel_5_product_name\", "+pr+");'";
											}
											prodSmImgTagLinkStart += " tabindex='0' title=\"" + prodFilterArray[pr][2] + "\">";
											var prodSmImgTagLinkEnd = "<\/a>";
											productHTMLTest = baseProdSmImgHTMLStart + prodSmImgTagLinkStart + "<img title=\"" + prodFilterArray[pr][2] + "\" alt=\"" + prodFilterArray[pr][2] + "\" id='panel5ProductSmImg" + prodFilterArray[pr][0] + "' class='panel_5_product_sm_img' src='" + clientImgBase + prodFilterArray[pr][5] + "'>" + prodSmImgTagLinkEnd + baseProdSmImgHTMLEnd;
										}
										productHTMLLeaf += productHTMLTest;
									}
								}
								categoryHTMLLeaf += categoryHTMLTest + "<div class='panel_5_family_category_product_shell panel_5_family_category_product_shell_" + catArray[w][0] + "' style='display:none;'>" + productHTMLLeaf + "<\/div>";
							}
						}
						if (panel5PListSliderOpen = 1) {
							prodListHTML += "<span class='panel_5_prodlist_famshell panel_5_prodlist_famshell_" + famArray[f][0] + " panel_5_prodlist_famshell_off'><div class='panel_5_family_category_shell panel_5_family_category_shell_" + famArray[f][0] + "'>" + categoryHTMLLeaf + "<\/div><\/span>";
						}
						else {
							prodListHTML += familyHTMLTest + "<span class='panel_5_prodlist_famshell panel_5_prodlist_famshell_" + famArray[f][0] + " panel_5_prodlist_famshell_off'><div class='panel_5_family_category_shell panel_5_family_category_shell_" + famArray[f][0] + "' style='display:none;'><\/span>" + categoryHTMLLeaf + "<\/div>";
						}
					}
				}
				baseHTML = baseProdListHTMLStart + prodListHTML + baseProdListHTMLEnd;
				panel5ProdListOn = 1;
			}
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
		}
		var catListNumTagStart = baseHTML.indexOf("<!--CATLISTNUM");
		if (catListNumTagStart != -1) {
			var catListNumTagEnd = baseHTML.indexOf(">",catListNumTagStart);
			var catListNumHTMLStart = baseHTML.substr(0,catListNumTagStart);
			var catListNumHTMLEnd = baseHTML.substr((catListNumTagEnd+1));
			panel5CatListCount = 0;
			for (j=0;j<catArray.length;j++) {
				if (catArray[j][6] == 1) {
					panel5CatListCount++;
				}
			}
			if (panel5CatListCount == 0) {
				panel5CatListCount = catArray.length;
			}
			baseHTML = catListNumHTMLStart + "<span id='panel5CatListNum'>" + panel5CatListCount + "<\/span>" + catListNumHTMLEnd;
		}
		var catListProdNumTagStart = baseHTML.indexOf("<!--CATLISTPRODNUM");
		if (catListProdNumTagStart != -1) {
			var catListProdNumTagEnd = baseHTML.indexOf(">",catListProdNumTagStart);
			var catListProdNumHTMLStart = baseHTML.substr(0,catListProdNumTagStart);
			var catListProdNumHTMLEnd = baseHTML.substr((catListProdNumTagEnd+1));
			panel5CatListProdCount = 0;
			for (p=0;p<prodDisplayArray.length;p++) {
				if (prodDisplayArray[p][9] == 1) {
					panel5CatListProdCount++;
				}
			}
			baseHTML = catListProdNumHTMLStart + "<span id='panel5CatListProdNum'>" + panel5CatListProdCount + "<\/span>" + catListProdNumHTMLEnd;
		}
		var prodCountNumTagStart = baseHTML.indexOf("<!--PRODCOUNT");
		if (prodCountNumTagStart != -1) {
			var prodCountNumTagEnd = baseHTML.indexOf(">",prodCountNumTagStart);
			var prodCountNumTagStrip = baseHTML.substring(prodCountNumTagStart,(prodCountNumTagEnd+1));
			var prodCountNumHTMLStart = baseHTML.substr(0,prodCountNumTagStart);
			var prodCountNumHTMLEnd = baseHTML.substr((prodCountNumTagEnd+1));
			var panel5ProdCount = 0;
			var prodCountNumValueStart = prodCountNumTagStrip.indexOf(" VALUE=");
			if (prodCountNumValueStart != -1) {
				var prodCountNumValueEnd = prodCountNumTagStrip.indexOf("]",prodCountNumValueStart);
				var prodCountNumValueVar = prodCountNumTagStrip.substring((prodCountNumValueStart+8),(prodCountNumValueEnd));
			}
			else {
				var prodCountNumValueVar = "";
			}
			baseHTML = prodCountNumHTMLStart + "<span id='panel5ProdCountNumHolder'><span id='panel5ProdCountNum'>" + prodCartArray.length + "<\/span>" +  prodCountNumValueVar + "<\/span>" + prodCountNumHTMLEnd;
		}
		var countProdNumTagStart = baseHTML.indexOf("<!--COUNTPROD");
		if (countProdNumTagStart != -1) {
			var countProdNumTagEnd = baseHTML.indexOf(">",countProdNumTagStart);
			var countProdNumTagStrip = baseHTML.substring(countProdNumTagStart,(countProdNumTagEnd+1));
			var countProdNumHTMLStart = baseHTML.substr(0,countProdNumTagStart);
			var countProdNumHTMLEnd = baseHTML.substr((countProdNumTagEnd+1));
			var panel5CountProd = 0;
			var countProdNumValueStart = countProdNumTagStrip.indexOf(" VALUE=");
			if (countProdNumValueStart != -1) {
				var countProdNumValueEnd = countProdNumTagStrip.indexOf("]",countProdNumValueStart);
				var countProdNumValueVar = countProdNumTagStrip.substring((countProdNumValueStart+8),(countProdNumValueEnd));
			}
			else {
				var countProdNumValueVar = "";
			}
			baseHTML = countProdNumHTMLStart + "<span id='panel5CountProdNumHolder'><span id='panel5CountProdNum'>" + prodCartArray.length + "<\/span>" +  countProdNumValueVar + "<\/span>" + countProdNumHTMLEnd;
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
				p5selProdSingularVar = " " + selectedProductsTagStrip.substring((selProdSingularStart+11),(selProdSingularEnd));
			}
			var selProdPluralStart = selectedProductsTagStrip.indexOf(" PLURAL=");
			if (selProdPluralStart != -1) {
				var selProdPluralEnd = selectedProductsTagStrip.indexOf("]",selProdPluralStart);
				p5selProdPluralVar = " " + selectedProductsTagStrip.substring((selProdPluralStart+9),(selProdPluralEnd));
			}
			if (prodCartArray.length == 1) {
				var thisSPT = p5selProdSingularVar;
			}
			else {
				var thisSPT = p5selProdPluralVar;
			}
			baseHTML = selectedProductsHTMLStart + "<div id='panel5SelProdText' class='panel_5_selected_products_text'>" + thisSPT + "<\/div>" + selectedProductsHTMLEnd;
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
			prodlistButtonRender += "<div id='panel5ProdlistButton' class='panel_5_prodlist_button panel_5_prodlist_button_off'";
			if (hoverState==1) {
				prodlistButtonRender += " onmouseover='panel5ButtonHover(\"panel5ProdlistButton\",\"panel_5_prodlist_button\",1);' onfocus='panel5ButtonHover(\"panel5ProdlistButton\",\"panel_5_prodlist_button\",1);' onmouseout='panel5ButtonHover(\"panel5ProdlistButton\",\"panel_5_prodlist_button\",0);' onblur='panel5ButtonHover(\"panel5ProdlistButton\",\"panel_5_prodlist_button\",0);'";
			}
			prodlistButtonRender += " onclick='panel5SubmitForm();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5SubmitForm();}' tabindex='0' title=\"" + prodlistButtonValueVar + "\">" + prodlistButtonItalicVar + prodlistButtonValueVar + "<\/div>";
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
			prodlistResetRender += "<div id='panel5ProdlistReset' class='panel_5_prodlist_reset panel_5_prodlist_reset_off'";
			if (hoverState==1) {
				prodlistResetRender += " onmouseover='panel5ButtonHover(\"panel5ProdlistReset\",\"panel_5_prodlist_reset\",1);' onfocus='panel5ButtonHover(\"panel5ProdlistReset\",\"panel_5_prodlist_reset\",1);' onmouseout='panel5ButtonHover(\"panel5ProdlistReset\",\"panel_5_prodlist_reset\",0);' onblur='panel5ButtonHover(\"panel5ProdlistReset\",\"panel_5_prodlist_reset\",0);'";
			}
			prodlistResetRender += " onclick='panel5ResetProducts();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5ResetProducts();}' tabindex='0' title=\"" + prodlistResetValueVar + "\">" + prodlistResetItalicVar + prodlistResetValueVar + "<\/div>";
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
				prodlistCatResetValueVar = prodlistCatResetTagStrip.substring((prodlistCatResetValueStart+8),(prodlistCatResetValueEnd));
			}
			else {
				prodlistCatResetValueVar = "RESET";
			}
			var prodlistCatResetItalicStart = prodlistCatResetTagStrip.indexOf(" FNTAW=");
			var prodlistCatResetItalicEnd = prodlistCatResetTagStrip.indexOf("]",prodlistCatResetItalicStart);
			if (prodlistCatResetItalicStart != -1) {
				prodlistCatResetItalicVar = "<i class='fa " + prodlistCatResetTagStrip.substring((prodlistCatResetItalicStart+8),(prodlistCatResetItalicEnd)) + "'><\/i>";
			}
			else {
				prodlistCatResetItalicVar = "";
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
			prodlistCatResetRender += "<div id='panel5ProdlistCatReset' class='panel_5_prodlist_catreset panel_5_prodlist_catreset_" + catResOnVar + "'";
			if (hoverState==1) {
				prodlistCatResetRender += " onmouseover='panel5ButtonHover(\"panel5ProdlistCatReset\",\"panel_5_prodlist_catreset\",1);' onfocus='panel5ButtonHover(\"panel5ProdlistCatReset\",\"panel_5_prodlist_catreset\",1);' onmouseout='panel5ButtonHover(\"panel5ProdlistCatReset\",\"panel_5_prodlist_catreset\",0);' onblur='panel5ButtonHover(\"panel5ProdlistCatReset\",\"panel_5_prodlist_catreset\",0);'";
			}
			prodlistCatResetRender += " onclick='panel5ResetCategories();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5ResetCategories();}' tabindex='0' title=\"" + prodlistCatResetValueVar + "\">" + prodlistCatResetItalicVar + prodlistCatResetValueVar + daProdNumWrite + "<\/div>";
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
			submitButtonRender += "<div id='panel5SubmitButton' class='panel_5_submit_button panel_5_submit_button_off'";
			if (hoverState==1) {
				submitButtonRender += " onmouseover='panel5ButtonHover(\"panel5SubmitButton\",\"panel_5_submit_button\",1);' onfocus='panel5ButtonHover(\"panel5SubmitButton\",\"panel_5_submit_button\",1);' onmouseout='panel5ButtonHover(\"panel5SubmitButton\",\"panel_5_submit_button\",0);' onblur='panel5ButtonHover(\"panel5SubmitButton\",\"panel_5_submit_button\",0);'";
			}
			submitButtonRender += " onclick='panel5SubmitForm();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5SubmitForm();}' tabindex='0' title=\"" + submitButtonValueVar + "\">" + submitButtonItalicVar + submitButtonValueVar + "<\/div>";
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
				p5GeoLocButtonSubmitVar = 1;
			}
			var geoLocButtonItalicStart = geoLocButtonTagStrip.indexOf(" FNTAW=");
			if (geoLocButtonItalicStart != -1) {
				var geoLocButtonItalicEnd = geoLocButtonTagStrip.indexOf("]",geoLocButtonItalicStart);
				var geoLocButtonItalicVar = "<i class='fa " + geoLocButtonTagStrip.substring((geoLocButtonItalicStart+8),(geoLocButtonItalicEnd)) + "'><\/i>";
			}
			else {
				var geoLocButtonItalicVar = "";
			}
			geoLocButtonRender += "<div id='panel5GeoLocButton' class='panel_5_geo_loc_button panel_5_geo_loc_button_off'";
			if (hoverState==1) {
				geoLocButtonRender += " onmouseover='panel5ButtonHover(\"panel5GeoLocButton\",\"panel_5_geo_loc_button\",1);' onfocus='panel5ButtonHover(\"panel5GeoLocButton\",\"panel_5_geo_loc_button\",1);' onmouseout='panel5ButtonHover(\"panel5GeoLocButton\",\"panel_5_geo_loc_button\",0);' onblur='panel5ButtonHover(\"panel5GeoLocButton\",\"panel_5_geo_loc_button\",0);'";
			}
			geoLocButtonRender += " onclick='geoNearbyCheck(\"panel5AddressField\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){geoNearbyCheck(\"panel5AddressField\");}' tabindex='0' title=\"" + geoLocButtonValueVar + "\">" + geoLocButtonItalicVar + geoLocButtonValueVar + "<\/div>";
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
				var backButtonPanelVar = "panel2";
			}
			var backButtonItalicStart = backButtonTagStrip.indexOf(" FNTAW=");
			if (backButtonItalicStart != -1) {
				var backButtonItalicEnd = backButtonTagStrip.indexOf("]",backButtonItalicStart);
				var backButtonItalicVar = "<i class='fa " + backButtonTagStrip.substring((backButtonItalicStart+8),(backButtonItalicEnd)) + "'><\/i>";
			}
			else {
				var backButtonItalicVar = "";
			}
			backButtonRender += "<div id='panel5BackButton' class='panel_5_back_button panel_5_back_button_off'";
			if (hoverState==1) {
				backButtonRender += " onmouseover='panel5ButtonHover(\"panel5BackButton\",\"panel_5_back_button\",1);' onfocus='panel5ButtonHover(\"panel5BackButton\",\"panel_5_back_button\",1);' onmouseout='panel5ButtonHover(\"panel5BackButton\",\"panel_5_back_button\",0);' onblur='panel5ButtonHover(\"panel5BackButton\",\"panel_5_back_button\",0);'";
			}
			backButtonRender += " onclick='panel5Back(\""+backButtonPanelVar+"\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5Back(\""+backButtonPanelVar+"\");}' tabindex='0' title=\"" + backButtonValueVar + "\">" + backButtonItalicVar + backButtonValueVar + "<\/div>";
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
				var buttonBackPanelVar = "panel2";
			}
			var buttonBackItalicStart = buttonBackTagStrip.indexOf(" FNTAW=");
			if (buttonBackItalicStart != -1) {
				var buttonBackItalicEnd = buttonBackTagStrip.indexOf("]",buttonBackItalicStart);
				var buttonBackItalicVar = "<i class='fa " + buttonBackTagStrip.substring((buttonBackItalicStart+8),(buttonBackItalicEnd)) + "'><\/i>";
			}
			else {
				var buttonBackItalicVar = "";
			}
			buttonBackRender += "<div id='panel5ButtonBack' class='panel_5_button_back panel_5_button_back_off'";
			if (hoverState==1) {
				buttonBackRender += " onmouseover='panel5ButtonHover(\"panel5ButtonBack\",\"panel_5_button_back\",1);' onfocus='panel5ButtonHover(\"panel5ButtonBack\",\"panel_5_button_back\",1);' onmouseout='panel5ButtonHover(\"panel5ButtonBack\",\"panel_5_button_back\",0);' onblur='panel5ButtonHover(\"panel5ButtonBack\",\"panel_5_button_back\",0);'";
			}
			buttonBackRender += " onclick='panel5Back(\""+buttonBackPanelVar+"\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5Back(\""+buttonBackPanelVar+"\");}' tabindex='0' title=\"" + buttonBackValueVar + "\">" + buttonBackItalicVar + buttonBackValueVar + "<\/div>";
			baseHTML = buttonBackHTMLStart + buttonBackRender + buttonBackHTMLEnd;
		}
		var ccreqButtonTagStart = baseHTML.indexOf("<!--CCREQBUTTON");
		if (ccreqButtonTagStart != -1) {
			var ccreqButtonTagEnd = baseHTML.indexOf(">",ccreqButtonTagStart);
			var ccreqButtonTagStrip = baseHTML.substring(ccreqButtonTagStart,(ccreqButtonTagEnd+1));
			var ccreqButtonHTMLStart = baseHTML.substr(0,ccreqButtonTagStart);
			var ccreqButtonHTMLEnd = baseHTML.substr((ccreqButtonTagEnd+1));
			var ccreqButtonRender = "";
			var ccreqButtonValueStart = ccreqButtonTagStrip.indexOf(" VALUE=");
			if (ccreqButtonValueStart != -1) {
				var ccreqButtonValueEnd = ccreqButtonTagStrip.indexOf("]",ccreqButtonValueStart);
				var ccreqButtonValueVar = ccreqButtonTagStrip.substring((ccreqButtonValueStart+8),(ccreqButtonValueEnd));
			}
			else {
				var ccreqButtonValueVar = "CONTACT US";
			}
			var ccreqButtonItalicStart = ccreqButtonTagStrip.indexOf(" FNTAW=");
			if (ccreqButtonItalicStart != -1) {
				var ccreqButtonItalicEnd = ccreqButtonTagStrip.indexOf("]",ccreqButtonItalicStart);
				var ccreqButtonItalicVar = "<i class='fa " + ccreqButtonTagStrip.substring((ccreqButtonItalicStart+8),(ccreqButtonItalicEnd)) + "'><\/i>";
			}
			else {
				var ccreqButtonItalicVar = "";
			}
			ccreqButtonRender += "<div id='panel5CCReqButton' class='panel_5_ccreq_button panel_5_ccreq_button_off'";
			if (hoverState==1) {
				ccreqButtonRender += " onmouseover='panel5ButtonHover(\"panel5CCReqButton\",\"panel_5_ccreq_button\",1);' onfocus='panel5ButtonHover(\"panel5CCReqButton\",\"panel_5_ccreq_button\",1);' onmouseout='panel5ButtonHover(\"panel5CCReqButton\",\"panel_5_ccreq_button\",0);' onblur='panel5ButtonHover(\"panel5CCReqButton\",\"panel_5_ccreq_button\",0);'";
			}
			ccreqButtonRender += " onclick='panel5CCReq();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5CCReq();}' tabindex='0' title=\"" + ccreqButtonValueVar + "\">" + ccreqButtonItalicVar + ccreqButtonValueVar + "<\/div>";
			baseHTML = ccreqButtonHTMLStart + ccreqButtonRender + ccreqButtonHTMLEnd;
		}
		var famSearchOn = 1;
		while (famSearchOn == 1) {
			var famTagStart = baseHTML.indexOf("<!--FAMILY");
			if (famTagStart != -1) {
				var famTagEnd = baseHTML.indexOf(">",famTagStart);
				var famTagStrip = baseHTML.substring(famTagStart,(famTagEnd+1));
				var baseHTMLStart = baseHTML.substr(0,famTagStart);
				var baseHTMLEnd = baseHTML.substr((famTagEnd+1));
				var familyID = 0;
				var familyHTML = "";
				var familyIDStart = famTagStrip.indexOf(" ID=");
				if (familyIDStart != -1) {
					var familyIDEnd = famTagStrip.indexOf("]",familyIDStart);
					familyID = famTagStrip.substring((familyIDStart+5),familyIDEnd);
				}
				if (familyID != 0) {
					var whatFamIndex = -1;
					for (x=0; x<famArray.length; x++) {
						if (famArray[x][0] == familyID) {
							whatFamIndex = x;
							break;
						}
					}
					if (whatFamIndex != -1) {
						var familyHTMLTest = autotextIt(p5TemplateSet.panel5RTRFamilyDiv,"panel5RTRFamily");
						var famNameTagStart = familyHTMLTest.indexOf("<!--FAMNAME");
						if (famNameTagStart != -1) {
							var famNameTagEnd = familyHTMLTest.indexOf(">",famNameTagStart);
							var famNameTagStrip = familyHTMLTest.substring(famNameTagStart,(famNameTagEnd+1));
							var baseFamNameHTMLStart = familyHTMLTest.substr(0,famNameTagStart);
							var baseFamNameHTMLEnd = familyHTMLTest.substr((famNameTagEnd+1));
							var famNameTagLinkTest = famNameTagStrip.indexOf(" LINK");
							var famNameTagLink = "";
							if (famNameTagLinkTest != -1) {
								famNameTagLink += " style='cursor:pointer;' onclick='panel5RTRFamSelectProducts(" + famArray[whatFamIndex][0] + ", \"panel5RTRFamilyName" + famArray[whatFamIndex][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[whatFamIndex][0] + ", \"panel5RTRFamilyNameVar" + famArray[whatFamIndex][0] + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRFamSelectProducts(" + famArray[whatFamIndex][0] + ", \"panel5RTRFamilyName" + famArray[whatFamIndex][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[whatFamIndex][0] + ", \"panel5RTRFamilyNameVar" + famArray[whatFamIndex][0] + "\");}'";
								if (hoverState==1) {
									famNameTagLink += " onmouseover='panel5RTRFamMouseOver(\"panel5RTRFamilyName" + famArray[whatFamIndex][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[whatFamIndex][0] + ");' onfocus='panel5RTRFamMouseOver(\"panel5RTRFamilyName" + famArray[whatFamIndex][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[whatFamIndex][0] + ");' onmouseout='panel5RTRFamMouseOut(\"panel5RTRFamilyName" + famArray[whatFamIndex][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[whatFamIndex][0] + ");' onblur='panel5RTRFamMouseOut(\"panel5RTRFamilyName" + famArray[whatFamIndex][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[whatFamIndex][0] + ");'";
								}
							}
							familyHTMLTest = baseFamNameHTMLStart + "<div id='panel5RTRFamilyName" + famArray[whatFamIndex][0] + "' class='panel_5_rtr_family_name panel_5_rtr_family_name_off'" + famNameTagLink + " tabindex='0' title=\"" + famArray[whatFamIndex][1] + "\">" + famArray[whatFamIndex][1] + "<\/div>" + baseFamNameHTMLEnd;
						}
						var famBigImgTagStart = familyHTMLTest.indexOf("<!--FAMBIGIMG");
						if (famBigImgTagStart != -1) {
							var famBigImgTagEnd = familyHTMLTest.indexOf(">",famBigImgTagStart);
							var famBigImgTagStrip = familyHTMLTest.substring(famBigImgTagStart,(famBigImgTagEnd+1));
							var baseFamBigImgHTMLStart = familyHTMLTest.substr(0,famBigImgTagStart);
							var baseFamBigImgHTMLEnd = familyHTMLTest.substr((famBigImgTagEnd+1));
							var famBigImgTagLinkTest = famNameTagStrip.indexOf(" LINK");
							var famBigImgTagLinkStart = "";
							var famBigImgTagLinkEnd = "";
							if (famBigImgTagLinkTest != -1) {
								famBigImgTagLinkStart += "<a href='' onclick='panel5RTRFamSelectProducts(" + famArray[whatFamIndex][0] + ", \"panel5RTRFamilyName" + famArray[whatFamIndex][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[whatFamIndex][0] + ", \"panel5RTRFamilyNameVar" + famArray[whatFamIndex][0] + "\"); return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRFamSelectProducts(" + famArray[whatFamIndex][0] + ", \"panel5RTRFamilyName" + famArray[whatFamIndex][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[whatFamIndex][0] + ", \"panel5RTRFamilyNameVar" + famArray[whatFamIndex][0] + "\"); return false;}'";
								if (hoverState==1) {
									famBigImgTagLinkStart += " onmouseover='panel5RTRFamMouseOver(\"panel5RTRFamilyName" + famArray[whatFamIndex][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[whatFamIndex][0] + ");' onfocus='panel5RTRFamMouseOver(\"panel5RTRFamilyName" + famArray[whatFamIndex][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[whatFamIndex][0] + ");' onmouseout='panel5RTRFamMouseOut(\"panel5RTRFamilyName" + famArray[whatFamIndex][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[whatFamIndex][0] + ");' onblur='panel5RTRFamMouseOut(\"panel5RTRFamilyName" + famArray[whatFamIndex][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[whatFamIndex][0] + ");'";
								}
								famBigImgTagLinkStart += " tabindex='0' title=\"" + famArray[whatFamIndex][1] + "\">";
								famBigImgTagLinkEnd = "<\/a>";
							}
							familyHTMLTest = baseFamBigImgHTMLStart + famBigImgTagLinkStart + "<img title=\"" + famArray[whatFamIndex][1] + "\" alt=\"" + famArray[whatFamIndex][1] + "\" id='panel5RTRFamilyBigImg" + famArray[whatFamIndex][0] + "' class='panel_5_rtr_family_big_img' src='" + clientImgBase + famArray[whatFamIndex][2] + "'>" + famBigImgTagLinkEnd + baseFamBigImgHTMLEnd;
						}
						var famSmImgTagStart = familyHTMLTest.indexOf("<!--FAMSMIMG");
						if (famSmImgTagStart != -1) {
							var famSmImgTagEnd = familyHTMLTest.indexOf(">",famSmImgTagStart);
							var famSmImgTagStrip = familyHTMLTest.substring(famSmImgTagStart,(famSmImgTagEnd+1));
							var baseFamSmImgHTMLStart = familyHTMLTest.substr(0,famSmImgTagStart);
							var baseFamSmImgHTMLEnd = familyHTMLTest.substr((famSmImgTagEnd+1));
							var famSmImgTagLinkTest = famNameTagStrip.indexOf(" LINK");
							var famSmImgTagLinkStart = "";
							var famSmImgTagLinkEnd = "";
							if (famSmImgTagLinkTest != -1) {
								famSmImgTagLinkStart += "<a href='' onclick='panel5RTRFamSelectProducts(" + famArray[whatFamIndex][0] + ", \"panel5RTRFamilyName" + famArray[whatFamIndex][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[whatFamIndex][0] + ", \"panel5RTRFamilyNameVar" + famArray[whatFamIndex][0] + "\"); return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRFamSelectProducts(" + famArray[whatFamIndex][0] + ", \"panel5RTRFamilyName" + famArray[whatFamIndex][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[whatFamIndex][0] + ", \"panel5RTRFamilyNameVar" + famArray[whatFamIndex][0] + "\"); return false;}'";
								if (hoverState==1) {
									famSmImgTagLinkStart += " onmouseover='panel5RTRFamMouseOver(\"panel5RTRFamilyName" + famArray[whatFamIndex][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[whatFamIndex][0] + ");' onfocus='panel5RTRFamMouseOver(\"panel5RTRFamilyName" + famArray[whatFamIndex][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[whatFamIndex][0] + ");' onmouseout='panel5RTRFamMouseOut(\"panel5RTRFamilyName" + famArray[whatFamIndex][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[whatFamIndex][0] + ");' onblur='panel5RTRFamMouseOut(\"panel5RTRFamilyName" + famArray[whatFamIndex][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[whatFamIndex][0] + ");'";
								}
								famSmImgTagLinkStart += " tabindex='0' title=\"" + famArray[whatFamIndex][1] + "\">";
								famSmImgTagLinkEnd = "<\/a>";
							}
							familyHTMLTest = baseFamSmImgHTMLStart + famSmImgTagLinkStart + "<img title=\"" + famArray[whatFamIndex][1] + "\" alt=\"" + famArray[whatFamIndex][1] + "\" id='panel5RTRFamilySmImg" + famArray[whatFamIndex][0] + "' class='panel_5_rtr_family_sm_img' src='" + clientImgBase + famArray[whatFamIndex][3] + "'>" + famSmImgTagLinkEnd + baseFamSmImgHTMLEnd;
						}
						familyHTML += familyHTMLTest;
					}
					else {
						if(gLog==1){console.log("ERROR: P5 Unknown Family ID="+familyID);}
						p1ErrorArray.push("ERROR: P5 Unknown Family ID="+familyID);
					}
				}
				else {
					for (x=0; x<famArray.length; x++) {
						var familyHTMLTest = autotextIt(p5TemplateSet.panel5RTRFamilyDiv,"panel5RTRFamily");
						var famNameTagStart = familyHTMLTest.indexOf("<!--FAMNAME");
						if (famNameTagStart != -1) {
							var famNameTagEnd = familyHTMLTest.indexOf(">",famNameTagStart);
							var famNameTagStrip = familyHTMLTest.substring(famNameTagStart,(famNameTagEnd+1));
							var baseFamNameHTMLStart = familyHTMLTest.substr(0,famNameTagStart);
							var baseFamNameHTMLEnd = familyHTMLTest.substr((famNameTagEnd+1));
							var famNameTagLinkTest = famNameTagStrip.indexOf(" LINK");
							var famNameTagLink = "";
							if (famNameTagLinkTest != -1) {
								famNameTagLink += " style='cursor:pointer;' onclick='panel5RTRFamSelectProducts(" + famArray[x][0] + ", \"panel5RTRFamilyName" + famArray[x][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[x][0] + ", \"panel5RTRFamilyNameVar" + famArray[x][0] + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRFamSelectProducts(" + famArray[x][0] + ", \"panel5RTRFamilyName" + famArray[x][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[x][0] + ", \"panel5RTRFamilyNameVar" + famArray[x][0] + "\");}'";
								if (hoverState==1) {
									famNameTagLink += " onmouseover='panel5RTRFamMouseOver(\"panel5RTRFamilyName" + famArray[x][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[x][0] + ");' onfocus='panel5RTRFamMouseOver(\"panel5RTRFamilyName" + famArray[x][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[x][0] + ");' onmouseout='panel5RTRFamMouseOut(\"panel5RTRFamilyName" + famArray[x][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[x][0] + ");' onblur='panel5RTRFamMouseOut(\"panel5RTRFamilyName" + famArray[x][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[x][0] + ");'";
								}
							}
							familyHTMLTest = baseFamNameHTMLStart + "<div id='panel5RTRFamilyName" + famArray[x][0] + "' class='panel_5_rtr_family_name panel_5_rtr_family_name_off'" + famNameTagLink + " tabindex='0' title=\"" + famArray[x][1] + "\">" + famArray[x][1] + "<\/div>" + baseFamNameHTMLEnd;
						}
						var famBigImgTagStart = familyHTMLTest.indexOf("<!--FAMBIGIMG");
						if (famBigImgTagStart != -1) {
							var famBigImgTagEnd = familyHTMLTest.indexOf(">",famBigImgTagStart);
							var famBigImgTagStrip = familyHTMLTest.substring(famBigImgTagStart,(famBigImgTagEnd+1));
							var baseFamBigImgHTMLStart = familyHTMLTest.substr(0,famBigImgTagStart);
							var baseFamBigImgHTMLEnd = familyHTMLTest.substr((famBigImgTagEnd+1));
							var famBigImgTagLinkTest = famNameTagStrip.indexOf(" LINK");
							var famBigImgTagLinkStart = "";
							var famBigImgTagLinkEnd = "";
							if (famBigImgTagLinkTest != -1) {
								famBigImgTagLinkStart += "<a href='' onclick='panel5RTRFamSelectProducts(" + famArray[x][0] + ", \"panel5RTRFamilyName" + famArray[x][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[x][0] + ", \"panel5RTRFamilyNameVar" + famArray[x][0] + "\");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRFamSelectProducts(" + famArray[x][0] + ", \"panel5RTRFamilyName" + famArray[x][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[x][0] + ", \"panel5RTRFamilyNameVar" + famArray[x][0] + "\");return false;}'";
								if (hoverState==1) {
									famBigImgTagLinkStart += " onmouseover='panel5RTRFamMouseOver(\"panel5RTRFamilyName" + famArray[x][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[x][0] + ");' onfocus='panel5RTRFamMouseOver(\"panel5RTRFamilyName" + famArray[x][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[x][0] + ");' onmouseout='panel5RTRFamMouseOut(\"panel5RTRFamilyName" + famArray[x][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[x][0] + ");' onblur='panel5RTRFamMouseOut(\"panel5RTRFamilyName" + famArray[x][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[x][0] + ");'";
								}
								famBigImgTagLinkStart += " tabindex='0' title=\"" + famArray[x][1] + "\">";
								famBigImgTagLinkEnd = "<\/a>";
							}
							familyHTMLTest = baseFamBigImgHTMLStart + famBigImgTagLinkStart + "<img title=\"" + famArray[x][1] + "\" alt=\"" + famArray[x][1] + "\" id='panel5RTRFamilyBigImg" + famArray[x][0] + "' class='panel_5_rtr_family_big_img' src='" + clientImgBase + famArray[x][2] + "'>" + famBigImgTagLinkEnd + baseFamBigImgHTMLEnd;
						}
						var famSmImgTagStart = familyHTMLTest.indexOf("<!--FAMSMIMG");
						if (famSmImgTagStart != -1) {
							var famSmImgTagEnd = familyHTMLTest.indexOf(">",famSmImgTagStart);
							var famSmImgTagStrip = familyHTMLTest.substring(famSmImgTagStart,(famSmImgTagEnd+1));
							var baseFamSmImgHTMLStart = familyHTMLTest.substr(0,famSmImgTagStart);
							var baseFamSmImgHTMLEnd = familyHTMLTest.substr((famSmImgTagEnd+1));
							var famSmImgTagLinkTest = famNameTagStrip.indexOf(" LINK");
							var famSmImgTagLinkStart = "";
							var famSmImgTagLinkEnd = "";
							if (famSmImgTagLinkTest != -1) {
								famSmImgTagLinkStart += "<a href='' onclick='panel5RTRFamSelectProducts(" + famArray[x][0] + ", \"panel5RTRFamilyName" + famArray[x][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[x][0] + ", \"panel5RTRFamilyNameVar" + famArray[x][0] + "\");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRFamSelectProducts(" + famArray[x][0] + ", \"panel5RTRFamilyName" + famArray[x][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[x][0] + ", \"panel5RTRFamilyNameVar" + famArray[x][0] + "\");return false;}'";
								if (hoverState==1) {
									famSmImgTagLinkStart += " onmouseover='panel5RTRFamMouseOver(\"panel5RTRFamilyName" + famArray[x][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[x][0] + ");' onfocus='panel5RTRFamMouseOver(\"panel5RTRFamilyName" + famArray[x][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[x][0] + ");' onmouseout='panel5RTRFamMouseOut(\"panel5RTRFamilyName" + famArray[x][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[x][0] + ");' onblur='panel5RTRFamMouseOut(\"panel5RTRFamilyName" + famArray[x][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[x][0] + ");'";
								}
								famSmImgTagLinkStart += " tabindex='0' title=\"" + famArray[x][1] + "\">";
								famSmImgTagLinkEnd = "<\/a>";
							}
							familyHTMLTest = baseFamSmImgHTMLStart + famSmImgTagLinkStart + "<img title=\"" + famArray[x][1] + "\" alt=\"" + famArray[x][1] + "\" id='panel5RTRFamilySmImg" + famArray[x][0] + "' class='panel_5_rtr_family_sm_img' src='" + clientImgBase + famArray[x][3] + "'>" + famSmImgTagLinkEnd + baseFamSmImgHTMLEnd;
						}
						familyHTML += familyHTMLTest;
					}
				}
				baseHTML = baseHTMLStart + familyHTML + baseHTMLEnd;
			}
			else {
				famSearchOn = 0;
			}
		}
		var catSearchOn = 1;
		while (catSearchOn == 1) {
			var catTagStart = baseHTML.indexOf("<!--CATEGORY");
			if (catTagStart != -1) {
				var catTagEnd = baseHTML.indexOf(">",catTagStart);
				var catTagStrip = baseHTML.substring(catTagStart,(catTagEnd+1));
				var baseHTMLStart = baseHTML.substr(0,catTagStart);
				var baseHTMLEnd = baseHTML.substr((catTagEnd+1));
				var categoryID = 0;
				var categoryHTML = "";
				var categoryIDStart = catTagStrip.indexOf(" ID=");
				if (categoryIDStart != -1) {
					var categoryIDEnd = catTagStrip.indexOf("]");
					categoryID = catTagStrip.substring((categoryIDStart+5),(categoryIDEnd));
				}
				if (categoryID != 0) {
					var categoryHTMLTest = autotextIt(p5TemplateSet.panel5RTRCategoryDiv,"panel5RTRCategory");
					var whatCatIndex = -1;
					for (x=0; x<rtreqCatArray.length; x++) {
						if (rtreqCatArray[x][0] == categoryID) {
							whatCatIndex = x;
							break;
						}
					}
					if (whatCatIndex != -1) {
						var catNameTagStart = categoryHTMLTest.indexOf("<!--CATNAME");
						if (catNameTagStart != -1) {
							var catNameTagEnd = categoryHTMLTest.indexOf(">",catNameTagStart);
							var catNameTagStrip = categoryHTMLTest.substring(catNameTagStart,(catNameTagEnd+1));
							var baseCatNameHTMLStart = categoryHTMLTest.substr(0,catNameTagStart);
							var baseCatNameHTMLEnd = categoryHTMLTest.substr((catNameTagEnd+1));
							var replaceImgTest = catNameTagStrip.indexOf(" REPLACE");
							if (replaceImgTest != -1) {
								var replaceImgMouseOver = "panel5RTRCatImgReplace(1," + rtreqCatArray[whatCatIndex][0] + ");";
								var replaceImgMouseOut = "panel5RTRCatImgReplace(0," + rtreqCatArray[whatCatIndex][0] + ");";
								var replaceImgMouseClass = " img_replace_active";
							}
							else {
								var replaceImgMouseOver = "";
								var replaceImgMouseOut = "";
								var replaceImgMouseClass = "";
							}
							var catNameTagLinkTest = catNameTagStrip.indexOf(" LINK");
							var catNameTagLink = "";
							if (catNameTagLinkTest != -1) {
								catNameTagLink += " style='cursor:pointer;' onclick='panel5RTRCatSelectProducts(" + rtreqCatArray[whatCatIndex][0] + ", \"panel5RTRCategoryName" + rtreqCatArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[whatCatIndex][0] + ", \"panel5RTRCategoryNameVar" + rtreqCatArray[whatCatIndex][0] + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRCatSelectProducts(" + rtreqCatArray[whatCatIndex][0] + ", \"panel5RTRCategoryName" + rtreqCatArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[whatCatIndex][0] + ", \"panel5RTRCategoryNameVar" + rtreqCatArray[whatCatIndex][0] + "\");}'";
								if (hoverState==1) {
									catNameTagLink += " onmouseover='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + rtreqCatArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[whatCatIndex][0] + ");" + replaceImgMouseOver + "' onfocus='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + rtreqCatArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[whatCatIndex][0] + ");" + replaceImgMouseOver + "' onmouseout='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + rtreqCatArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[whatCatIndex][0] + ");" + replaceImgMouseOut + "' onblur='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + rtreqCatArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[whatCatIndex][0] + ");" + replaceImgMouseOut + "'";
								}
							}
							categoryHTMLTest = baseCatNameHTMLStart + "<div id='panel5RTRCategoryName" + rtreqCatArray[whatCatIndex][0] + "' class='panel_5_rtr_category_name_" + rtreqCatArray[whatCatIndex][0] + " panel_5_rtr_category_name" + replaceImgMouseClass + " panel_5_rtr_category_name_off'" + catNameTagLink + " tabindex='0' title=\"" + rtreqCatArray[whatCatIndex][1] + "\">" + rtreqCatArray[whatCatIndex][1] + "<\/div>" + baseCatNameHTMLEnd;
						}
						var catBigImgTagStart = categoryHTMLTest.indexOf("<!--CATBIGIMG");
						if (catBigImgTagStart != -1) {
							var catBigImgTagEnd = categoryHTMLTest.indexOf(">",catBigImgTagStart);
							var catBigImgTagStrip = categoryHTMLTest.substring(catBigImgTagStart,(catBigImgTagEnd+1));
							var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBigImgTagStart);
							var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBigImgTagEnd+1));
							var replaceImgTest = catBigImgTagStrip.indexOf(" REPLACE");
							if (replaceImgTest != -1) {
								var replaceImgMouseOver = "panel5RTRCatImgReplace(1," + rtreqCatArray[whatCatIndex][0] + ");";
								var replaceImgMouseOut = "panel5RTRCatImgReplace(0," + rtreqCatArray[whatCatIndex][0] + ");";
								var replaceImgMouseClass = " img_replace_active";
							}
							else {
								var replaceImgMouseOver = "";
								var replaceImgMouseOut = "";
								var replaceImgMouseClass = "";
							}
							var catBigImgTagLinkTest = catBigImgTagStrip.indexOf(" LINK");
							var catBigImgTagLinkStart = "";
							var catBigImgTagLinkEnd = "";
							if (catBigImgTagLinkTest != -1) {
								catBigImgTagLinkStart += "<a href='' onclick='panel5RTRCatSelectProducts(" + rtreqCatArray[whatCatIndex][0] + ", \"panel5RTRCategoryName" + rtreqCatArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[whatCatIndex][0] + ", \"panel5RTRCategoryNameVar" + rtreqCatArray[whatCatIndex][0] + "\"); return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRCatSelectProducts(" + rtreqCatArray[whatCatIndex][0] + ", \"panel5RTRCategoryName" + rtreqCatArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[whatCatIndex][0] + ", \"panel5RTRCategoryNameVar" + rtreqCatArray[whatCatIndex][0] + "\"); return false;}'";
								if (hoverState==1) {
									catBigImgTagLinkStart += " onmouseover='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + rtreqCatArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[whatCatIndex][0] + ");" + replaceImgMouseOver + "' onfocus='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + rtreqCatArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[whatCatIndex][0] + ");" + replaceImgMouseOver + "' onmouseout='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + rtreqCatArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[whatCatIndex][0] + ");" + replaceImgMouseOut + "' onblur='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + rtreqCatArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[whatCatIndex][0] + ");" + replaceImgMouseOut + "'";
								}
								catBigImgTagLinkStart += " tabindex='0' title=\"" + rtreqCatArray[whatCatIndex][1] + "\">";
								catBigImgTagLinkEnd = "<\/a>";
							}
							categoryHTMLTest = baseCatBigImgHTMLStart + catBigImgTagLinkStart + "<img title=\"" + rtreqCatArray[whatCatIndex][1] + "\" alt=\"" + rtreqCatArray[whatCatIndex][1] + "\" id='panel5RTRCategoryBigImg" + rtreqCatArray[whatCatIndex][0] + "' class='panel_5_rtr_category_big_img" + replaceImgMouseClass + "' src='" + clientImgBase + rtreqCatArray[whatCatIndex][3] + "'>" + catBigImgTagLinkEnd + baseCatBigImgHTMLEnd;
						}
						var catSmImgTagStart = categoryHTMLTest.indexOf("<!--CATSMIMG");
						if (catSmImgTagStart != -1) {
							var catSmImgTagEnd = categoryHTMLTest.indexOf(">",catSmImgTagStart);
							var catSmImgTagStrip = categoryHTMLTest.substring(catSmImgTagStart,(catSmImgTagEnd+1));
							var baseCatSmImgHTMLStart = categoryHTMLTest.substr(0,catSmImgTagStart);
							var baseCatSmImgHTMLEnd = categoryHTMLTest.substr((catSmImgTagEnd+1));
							var replaceImgTest = catSmImgTagStrip.indexOf(" REPLACE");
							if (replaceImgTest != -1) {
								var replaceImgMouseOver = "panel5RTRCatImgReplace(1," + rtreqCatArray[whatCatIndex][0] + ");";
								var replaceImgMouseOut = "panel5RTRCatImgReplace(0," + rtreqCatArray[whatCatIndex][0] + ");";
								var replaceImgMouseClass = " img_replace_active";
							}
							else {
								var replaceImgMouseOver = "";
								var replaceImgMouseOut = "";
								var replaceImgMouseClass = "";
							}
							var catSmImgTagLinkTest = catSmImgTagStrip.indexOf(" LINK");
							var catSmImgTagLinkStart = "";
							var catSmImgTagLinkEnd = "";
							if (catSmImgTagLinkTest != -1) {
								catSmImgTagLinkStart += "<a href='' onclick='panel5RTRCatSelectProducts(" + rtreqCatArray[whatCatIndex][0] + ", \"panel5RTRCategoryName" + rtreqCatArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[whatCatIndex][0] + ", \"panel5RTRCategoryNameVar" + rtreqCatArray[whatCatIndex][0] + "\"); return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRCatSelectProducts(" + rtreqCatArray[whatCatIndex][0] + ", \"panel5RTRCategoryName" + rtreqCatArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[whatCatIndex][0] + ", \"panel5RTRCategoryNameVar" + rtreqCatArray[whatCatIndex][0] + "\"); return false;}'";
								if (hoverState==1) {
									catSmImgTagLinkStart += " onmouseover='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + rtreqCatArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[whatCatIndex][0] + ");" + replaceImgMouseOver + "' onfocus='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + rtreqCatArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[whatCatIndex][0] + ");" + replaceImgMouseOver + "' onmouseout='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + rtreqCatArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[whatCatIndex][0] + ");" + replaceImgMouseOut + "' onblur='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + rtreqCatArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[whatCatIndex][0] + ");" + replaceImgMouseOut + "'";
								}
								catSmImgTagLinkStart += " tabindex='0' title=\"" + rtreqCatArray[whatCatIndex][1] + "\">";
								catSmImgTagLinkEnd = "<\/a>";
							}
							categoryHTMLTest = baseCatSmImgHTMLStart + catSmImgTagLinkStart + "<img title=\"" + rtreqCatArray[whatCatIndex][1] + "\" alt=\"" + rtreqCatArray[whatCatIndex][1] + "\" id='panel5RTRCategorySmImg" + rtreqCatArray[whatCatIndex][0] + "' class='panel_5_rtr_category_sm_img" + replaceImgMouseClass + "' src='" + clientImgBase + rtreqCatArray[whatCatIndex][4] + "'>" + catSmImgTagLinkEnd + baseCatSmImgHTMLEnd;
						}
						categoryHTML += categoryHTMLTest;
					}
					else {
						if(gLog==1){console.log("ERROR: P5 Unknown Category ID="+categoryID);}
						p1ErrorArray.push("ERROR: P5 Unknown Category ID="+categoryID);
					}
				}
				else {
					for (x=0; x<rtreqCatArray.length; x++) {
						var categoryHTMLTest = autotextIt(p5TemplateSet.panel5RTRCategoryDiv,"panel5RTRCategory");
						var catNameTagStart = categoryHTMLTest.indexOf("<!--CATNAME");
						if (catNameTagStart != -1) {
							var catNameTagEnd = categoryHTMLTest.indexOf(">",catNameTagStart);
							var catNameTagStrip = categoryHTMLTest.substring(catNameTagStart,(catNameTagEnd+1));
							var baseCatNameHTMLStart = categoryHTMLTest.substr(0,catNameTagStart);
							var baseCatNameHTMLEnd = categoryHTMLTest.substr((catNameTagEnd+1));
							var replaceImgTest = catNameTagStrip.indexOf(" REPLACE");
							if (replaceImgTest != -1) {
								var replaceImgMouseOver = "panel5RTRCatImgReplace(1," + rtreqCatArray[whatCatIndex][0] + ");";
								var replaceImgMouseOut = "panel5RTRCatImgReplace(0," + rtreqCatArray[whatCatIndex][0] + ");";
								var replaceImgMouseClass = " img_replace_active";
							}
							else {
								var replaceImgMouseOver = "";
								var replaceImgMouseOut = "";
								var replaceImgMouseClass = "";
							}
							var catNameTagLinkTest = catNameTagStrip.indexOf(" LINK");
							var catNameTagLink = "";
							if (catNameTagLinkTest != -1) {
								catNameTagLink += " style='cursor:pointer;' onclick='panel5RTRCatSelectProducts(" + rtreqCatArray[x][0] + ", \"panel5RTRCategoryName" + rtreqCatArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[x][0] + ", \"panel5RTRCategoryNameVar" + rtreqCatArray[x][0] + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRCatSelectProducts(" + rtreqCatArray[x][0] + ", \"panel5RTRCategoryName" + rtreqCatArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[x][0] + ", \"panel5RTRCategoryNameVar" + rtreqCatArray[x][0] + "\");}'";
								if (hoverState==1) {
									catNameTagLink += " onmouseover='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + rtreqCatArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[x][0] + ");" + replaceImgMouseOver + "' onfocus='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + rtreqCatArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[x][0] + ");" + replaceImgMouseOver + "' onmouseout='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + rtreqCatArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[x][0] + ");" + replaceImgMouseOut + "' onblur='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + rtreqCatArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[x][0] + ");" + replaceImgMouseOut + "'";
								}
							}
							categoryHTMLTest = baseCatNameHTMLStart + "<div id='panel5RTRCategoryName" + rtreqCatArray[x][0] + "' class='panel_5_rtr_category_name_" + rtreqCatArray[whatCatIndex][0] + " panel_5_rtr_category_name" + replaceImgMouseClass + " panel_5_rtr_category_name_off'" + catNameTagLink + " tabindex='0' title=\"" + rtreqCatArray[x][1] + "\">" + rtreqCatArray[x][1] + "<\/div>" + baseCatNameHTMLEnd;
						}
						var catBigImgTagStart = categoryHTMLTest.indexOf("<!--CATBIGIMG");
						if (catBigImgTagStart != -1) {
							var catBigImgTagEnd = categoryHTMLTest.indexOf(">",catBigImgTagStart);
							var catBigImgTagStrip = categoryHTMLTest.substring(catBigImgTagStart,(catBigImgTagEnd+1));
							var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBigImgTagStart);
							var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBigImgTagEnd+1));
							var replaceImgTest = catBigImgTagStrip.indexOf(" REPLACE");
							if (replaceImgTest != -1) {
								var replaceImgMouseOver = "panel5RTRCatImgReplace(1," + rtreqCatArray[whatCatIndex][0] + ");";
								var replaceImgMouseOut = "panel5RTRCatImgReplace(0," + rtreqCatArray[whatCatIndex][0] + ");";
								var replaceImgMouseClass = " img_replace_active";
							}
							else {
								var replaceImgMouseOver = "";
								var replaceImgMouseOut = "";
								var replaceImgMouseClass = "";
							}
							var catBigImgTagLinkTest = catBigImgTagStrip.indexOf(" LINK");
							var catBigImgTagLinkStart = "";
							var catBigImgTagLinkEnd = "";
							if (catBigImgTagLinkTest != -1) {
								catBigImgTagLinkStart += "<a href='' onclick='panel5RTRCatSelectProducts(" + rtreqCatArray[x][0] + ", \"panel5RTRCategoryName" + rtreqCatArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[x][0] + ", \"panel5RTRCategoryNameVar" + rtreqCatArray[x][0] + "\");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRCatSelectProducts(" + rtreqCatArray[x][0] + ", \"panel5RTRCategoryName" + rtreqCatArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[x][0] + ", \"panel5RTRCategoryNameVar" + rtreqCatArray[x][0] + "\");return false;}'";
								if (hoverState==1) {
									catBigImgTagLinkStart += " onmouseover='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + rtreqCatArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[x][0] + ");" + replaceImgMouseOver + "' onfocus='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + rtreqCatArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[x][0] + ");" + replaceImgMouseOver + "' onmouseout='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + rtreqCatArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[x][0] + ");" + replaceImgMouseOut + "' onblur='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + rtreqCatArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[x][0] + ");" + replaceImgMouseOut + "'";
								}
								catBigImgTagLinkStart += " tabindex='0' title=\"" + rtreqCatArray[x][1] + "\">";
								catBigImgTagLinkEnd = "<\/a>";
							}
							categoryHTMLTest = baseCatBigImgHTMLStart + catBigImgTagLinkStart + "<img title=\"" + rtreqCatArray[x][1] + "\" alt=\"" + rtreqCatArray[x][1] + "\" id='panel5RTRCategoryBigImg" + rtreqCatArray[x][0] + "' class='panel_5_rtr_category_big_img" + replaceImgMouseClass + "' src='" + clientImgBase + rtreqCatArray[x][3] + "'>" + catBigImgTagLinkEnd + baseCatBigImgHTMLEnd;
						}
						var catSmImgTagStart = categoryHTMLTest.indexOf("<!--CATSMIMG");
						if (catSmImgTagStart != -1) {
							var catSmImgTagEnd = categoryHTMLTest.indexOf(">",catSmImgTagStart);
							var catSmImgTagStrip = categoryHTMLTest.substring(catSmImgTagStart,(catSmImgTagEnd+1));
							var baseCatSmImgHTMLStart = categoryHTMLTest.substr(0,catSmImgTagStart);
							var baseCatSmImgHTMLEnd = categoryHTMLTest.substr((catSmImgTagEnd+1));
							var replaceImgTest = catSmImgTagStrip.indexOf(" REPLACE");
							if (replaceImgTest != -1) {
								var replaceImgMouseOver = "panel5RTRCatImgReplace(1," + rtreqCatArray[whatCatIndex][0] + ");";
								var replaceImgMouseOut = "panel5RTRCatImgReplace(0," + rtreqCatArray[whatCatIndex][0] + ");";
								var replaceImgMouseClass = " img_replace_active";
							}
							else {
								var replaceImgMouseOver = "";
								var replaceImgMouseOut = "";
								var replaceImgMouseClass = "";
							}
							var catSmImgTagLinkTest = catSmImgTagStrip.indexOf(" LINK");
							var catSmImgTagLinkStart = "";
							var catSmImgTagLinkEnd = "";
							if (catSmImgTagLinkTest != -1) {
								catSmImgTagLinkStart += "<a href='' onclick='panel5RTRCatSelectProducts(" + rtreqCatArray[x][0] + ", \"panel5RTRCategoryName" + rtreqCatArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[x][0] + ", \"panel5RTRCategoryNameVar" + rtreqCatArray[x][0] + "\");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRCatSelectProducts(" + rtreqCatArray[x][0] + ", \"panel5RTRCategoryName" + rtreqCatArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[x][0] + ", \"panel5RTRCategoryNameVar" + rtreqCatArray[x][0] + "\");return false;}'";
								if (hoverState==1) {
									catSmImgTagLinkStart += " onmouseover='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + rtreqCatArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[x][0] + ");" + replaceImgMouseOver + "' onfocus='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + rtreqCatArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[x][0] + ");" + replaceImgMouseOver + "' onmouseout='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + rtreqCatArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[x][0] + ");" + replaceImgMouseOut + "' onblur='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + rtreqCatArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + rtreqCatArray[x][0] + ");" + replaceImgMouseOut + "'";
								}
								catSmImgTagLinkStart += " tabindex='0' title=\"" + rtreqCatArray[x][1] + "\">";
								catSmImgTagLinkEnd = "<\/a>";
							}
							categoryHTMLTest = baseCatSmImgHTMLStart + catSmImgTagLinkStart + "<img title=\"" + rtreqCatArray[x][1] + "\" alt=\"" + rtreqCatArray[x][1] + "\" id='panel5RTRCategorySmImg" + rtreqCatArray[x][0] + "' class='panel_5_rtr_category_sm_img" + replaceImgMouseClass + "' src='" + clientImgBase + rtreqCatArray[x][4] + "'>" + catSmImgTagLinkEnd + baseCatSmImgHTMLEnd;
						}
						categoryHTML += categoryHTMLTest;
					}
				}
				baseHTML = baseHTMLStart + categoryHTML + baseHTMLEnd;
			}
			else {
				catSearchOn = 0;
			}
		}
		var prodSearchOn = 1;
		while (prodSearchOn == 1) {
			var prodTagStart = baseHTML.indexOf("<!--PRODUCT");
			if (prodTagStart != -1) {
				var prodTagEnd = baseHTML.indexOf(">",prodTagStart);
				var prodTagStrip = baseHTML.substring(prodTagStart,(prodTagEnd+1));
				var baseHTMLStart = baseHTML.substr(0,prodTagStart);
				var baseHTMLEnd = baseHTML.substr((prodTagEnd+1));
				var productHTML = "";
				var productID = -1;
				var productCatID = -1;
				var productIDStart = prodTagStrip.indexOf(" ID=");
				var productCatIDStart = prodTagStrip.indexOf(" CATID=");
				if (productIDStart != -1) {
					var productIDEnd = prodTagStrip.indexOf("]",productIDStart);
					productID = prodTagStrip.substring((productIDStart+5),(productIDEnd));
				}
				else if (productCatIDStart != -1) {
					var productCatIDEnd = prodTagStrip.indexOf("]",productCatIDStart);
					productCatID = prodTagStrip.substring((productCatIDStart+8),(productCatIDEnd));
				}
				if (productID != -1) {
					for (y=0; y<rtreqProdArray.length; y++) {
						if (rtreqProdArray[y][0] == productID) {
							var productHTMLTest = autotextIt(p5TemplateSet.panel5RTRProductDiv,"panel5RTRProduct");
							var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
							if (prodDiscTagStart != -1) {
								var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
								var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
								var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
								var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
								var prodDiscWrite = "";
								var discVal = rtreqProdArray[y][6];
								if (discVal != 1) {
									prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel5RTRProduct_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
								}
								productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
							}
							var prodNameTagStart = productHTMLTest.indexOf("<!--PRODNAME");
							if (prodNameTagStart != -1) {
								var prodNameTagEnd = productHTMLTest.indexOf(">",prodNameTagStart);
								var prodNameTagStrip = productHTMLTest.substring(prodNameTagStart,(prodNameTagEnd+1));
								var baseProdNameHTMLStart = productHTMLTest.substr(0,prodNameTagStart);
								var baseProdNameHTMLEnd = productHTMLTest.substr((prodNameTagEnd+1));
								var replaceImgTest = prodNameTagStrip.indexOf(" REPLACE");
								if (replaceImgTest != -1) {
									var replaceImgMouseOver = "panel5RTRProdImgReplace(1," + rtreqProdArray[y][0] + ");";
									var replaceImgMouseOut = "panel5RTRProdImgReplace(0," + rtreqProdArray[y][0] + ");";
									var replaceImgMouseClass = " img_replace_active";
								}
								else {
									var replaceImgMouseOver = "";
									var replaceImgMouseOut = "";
									var replaceImgMouseClass = "";
								}
								var prodNameTagLinkTest = prodNameTagStrip.indexOf(" LINK");
								var prodNameTagLink = "";
								if (prodNameTagLinkTest != -1) {
									prodNameTagLink += " style='cursor:pointer;' onclick='panel5RTRProdSelect(" + rtreqProdArray[y][0] + ", \"" + rtreqProdArray[y][1] + "\", \"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ", \"panel5RTRProductNameVar" + rtreqProdArray[y][0] + "\", 1);' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRProdSelect(" + rtreqProdArray[y][0] + ", \"" + rtreqProdArray[y][1] + "\", \"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ", \"panel5RTRProductNameVar" + rtreqProdArray[y][0] + "\", 1);}'";
									if (hoverState==1) {
										prodNameTagLink += " onmouseover='panel5RTRProdMouseOver(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOver + "' onfocus='panel5RTRProdMouseOver(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOver + "' onmouseout='panel5RTRProdMouseOut(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOut + "' onblur='panel5RTRProdMouseOut(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOut + "'";
									}
								}
								var descTest = prodNameTagStrip.indexOf(" DESC");
								if (descTest != -1) {
									var descVal = "<span class='panel_5_rtr_product_name_desc'>" + rtreqProdArray[y][3] + "<\/span>";
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
								if(FPC==1) {
									var isProductChecked = 1;
									window["panel5RTRProductNameVar"+rtreqProdArray[y][0]] = 1;
									var baseProductStyle = " panel_5_rtr_product_name_on";
								}
								else {
									if (rtreqProdArray[y][7] == "1") {
										var isProductChecked = 1;
										window["panel5RTRProductNameVar"+rtreqProdArray[y][0]] = 1;
										var baseProductStyle = " panel_5_rtr_product_name_on";
									}
									else {
										var isProductChecked = 0;
										var baseProductStyle = " panel_5_rtr_product_name_off";
									}
								}
								productHTMLTest = baseProdNameHTMLStart + "<div id='panel5RTRProductName" + rtreqProdArray[y][0] + "' class='panel_5_rtr_product_name" + replaceImgMouseClass + baseProductStyle + "'" + prodNameTagLink + " tabindex='0' title=\"" + rtreqProdArray[y][2] + "\">" + prodNameItalicVar + "<span class='panel_5_rtr_product_name_name'>" + rtreqProdArray[y][2] + "<\/span>" + descVal + "<\/div>" + baseProdNameHTMLEnd;
							}
							var prodBigImgTagStart = productHTMLTest.indexOf("<!--PRODBIGIMG");
							if (prodBigImgTagStart != -1) {
								var prodBigImgTagEnd = productHTMLTest.indexOf(">",prodBigImgTagStart);
								var prodBigImgTagStrip = productHTMLTest.substring(prodBigImgTagStart,(prodBigImgTagEnd+1));
								var baseProdBigImgHTMLStart = productHTMLTest.substr(0,prodBigImgTagStart);
								var baseProdBigImgHTMLEnd = productHTMLTest.substr((prodBigImgTagEnd+1));
								var replaceImgTest = prodBigImgTagStrip.indexOf(" REPLACE");
								if (replaceImgTest != -1) {
									var replaceImgMouseOver = "panel5RTRProdImgReplace(1," + rtreqProdArray[y][0] + ");";
									var replaceImgMouseOut = "panel5RTRProdImgReplace(0," + rtreqProdArray[y][0] + ");";
									var replaceImgMouseClass = " img_replace_active";
								}
								else {
									var replaceImgMouseOver = "";
									var replaceImgMouseOut = "";
									var replaceImgMouseClass = "";
								}
								var prodBigImgTagLinkTest = prodBigImgTagStrip.indexOf(" LINK");
								var prodBigImgTagLinkStart = "";
								var prodBigImgTagLinkEnd = "";
								if (prodBigImgTagLinkTest != -1) {
									prodBigImgTagLinkStart += "<a href='' onclick='panel5RTRProdSelect(" + rtreqProdArray[y][0] + ", \"" + rtreqProdArray[y][1] + "\", \"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ", \"panel5RTRProductNameVar" + rtreqProdArray[y][0] + "\", 1);return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRProdSelect(" + rtreqProdArray[y][0] + ", \"" + rtreqProdArray[y][1] + "\", \"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ", \"panel5RTRProductNameVar" + rtreqProdArray[y][0] + "\", 1);return false;}'";
									if (hoverState==1) {
										prodBigImgTagLinkStart += " onmouseover='panel5RTRProdMouseOver(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOver + "' onfocus='panel5RTRProdMouseOver(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOver + "' onmouseout='panel5RTRProdMouseOut(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOut + "' onblur='panel5RTRProdMouseOut(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOut + "'";
									}
									prodBigImgTagLinkStart += " tabindex='0' title=\"" + rtreqProdArray[y][2] + "\">";
									prodBigImgTagLinkEnd = "<\/a>";
								}
								productHTMLTest = baseProdBigImgHTMLStart + prodBigImgTagLinkStart + "<img title=\"" + rtreqProdArray[y][2] + "\" alt=\"" + rtreqProdArray[y][2] + "\" id='panel5RTRProductBigImg" + rtreqProdArray[y][0] + "' class='panel_5_rtr_product_big_img" + replaceImgMouseClass + "' src='" + clientImgBase + rtreqProdArray[y][4] + "'>" + prodBigImgTagLinkEnd + baseProdBigImgHTMLEnd;
							}
							var prodSmImgTagStart = productHTMLTest.indexOf("<!--PRODSMIMG");
							if (prodSmImgTagStart != -1) {
								var prodSmImgTagEnd = productHTMLTest.indexOf(">",prodSmImgTagStart);
								var prodSmImgTagStrip = productHTMLTest.substring(prodSmImgTagStart,(prodSmImgTagEnd+1));
								var baseProdSmImgHTMLStart = productHTMLTest.substr(0,prodSmImgTagStart);
								var baseProdSmImgHTMLEnd = productHTMLTest.substr((prodSmImgTagEnd+1));
								var replaceImgTest = prodSmImgTagStrip.indexOf(" REPLACE");
								if (replaceImgTest != -1) {
									var replaceImgMouseOver = "panel5RTRProdImgReplace(1," + rtreqProdArray[y][0] + ");";
									var replaceImgMouseOut = "panel5RTRProdImgReplace(0," + rtreqProdArray[y][0] + ");";
									var replaceImgMouseClass = " img_replace_active";
								}
								else {
									var replaceImgMouseOver = "";
									var replaceImgMouseOut = "";
									var replaceImgMouseClass = "";
								}
								var prodSmImgTagLinkTest = prodSmImgTagStrip.indexOf(" LINK");
								var prodSmImgTagLinkStart = "";
								var prodSmImgTagLinkEnd = "";
								if (prodSmImgTagLinkTest != -1) {
									prodSmImgTagLinkStart += "<a href='' onclick='panel5RTRProdSelect(" + rtreqProdArray[y][0] + ", \"" + rtreqProdArray[y][1] + "\", \"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ", \"panel5RTRProductNameVar" + rtreqProdArray[y][0] + "\", 1);return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRProdSelect(" + rtreqProdArray[y][0] + ", \"" + rtreqProdArray[y][1] + "\", \"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ", \"panel5RTRProductNameVar" + rtreqProdArray[y][0] + "\", 1);return false;}'";
									if (hoverState==1) {
										prodSmImgTagLinkStart += " onmouseover='panel5RTRProdMouseOver(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOver + "' onfocus='panel5RTRProdMouseOver(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOver + "' onmouseout='panel5RTRProdMouseOut(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOut + "' onblur='panel5RTRProdMouseOut(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOut + "'";
									}
									prodSmImgTagLinkStart += " tabindex='0' title=\"" + rtreqProdArray[y][2] + "\">";
									prodSmImgTagLinkEnd = "<\/a>";
								}
								productHTMLTest = baseProdSmImgHTMLStart + prodSmImgTagLinkStart + "<img title=\"" + rtreqProdArray[y][2] + "\" alt=\"" + rtreqProdArray[y][2] + "\" id='panel5RTRProductSmImg" + rtreqProdArray[y][0] + "' class='panel_5_rtr_product_sm_img" + replaceImgMouseClass + "' src='" + clientImgBase + rtreqProdArray[y][5] + "'>" + prodSmImgTagLinkEnd + baseProdSmImgHTMLEnd;
							}
							productHTML += productHTMLTest;
							break;
						}
					}
					baseHTML = baseHTMLStart + productHTML + baseHTMLEnd;
				}
				else if (productCatID != 0) {
					var whatCatProdIndex = -1;
					for (x=0; x<rtreqCatArray.length; x++) {
						if (rtreqCatArray[x][0] == productCatID) {
							whatCatProdIndex = rtreqCatArray[x][0];
							break;
						}
					}
					if (whatCatProdIndex != -1) {
						for (y=0; y<rtreqProdArray.length; y++) {
							if (rtreqProdArray[y][8] == whatCatProdIndex) {
								var productHTMLTest = autotextIt(p5TemplateSet.panel5RTRProductDiv,"panel5RTRProduct");
								var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
								if (prodDiscTagStart != -1) {
									var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
									var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
									var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
									var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
									var prodDiscWrite = "";
									var discVal = rtreqProdArray[y][6];
									if (discVal != 1) {
										prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel5RTRProduct_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
									}
									productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
								}
								var prodNameTagStart = productHTMLTest.indexOf("<!--PRODNAME");
								if (prodNameTagStart != -1) {
									var prodNameTagEnd = productHTMLTest.indexOf(">",prodNameTagStart);
									var prodNameTagStrip = productHTMLTest.substring(prodNameTagStart,(prodNameTagEnd+1));
									var baseProdNameHTMLStart = productHTMLTest.substr(0,prodNameTagStart);
									var baseProdNameHTMLEnd = productHTMLTest.substr((prodNameTagEnd+1));
									var replaceImgTest = prodNameTagStrip.indexOf(" REPLACE");
									if (replaceImgTest != -1) {
										var replaceImgMouseOver = "panel5RTRProdImgReplace(1," + rtreqProdArray[y][0] + ");";
										var replaceImgMouseOut = "panel5RTRProdImgReplace(0," + rtreqProdArray[y][0] + ");";
										var replaceImgMouseClass = " img_replace_active";
									}
									else {
										var replaceImgMouseOver = "";
										var replaceImgMouseOut = "";
										var replaceImgMouseClass = "";
									}
									var descTest = prodNameTagStrip.indexOf(" DESC");
									if (descTest != -1) {
										var descVal = "<span class='panel_5_rtr_product_name_desc'>" + rtreqProdArray[y][3] + "<\/span>";
									}
									else {
										var descVal = "";
									}
									var prodNameTagLinkTest = prodNameTagStrip.indexOf(" LINK");
									var prodNameTagLink = "";
									if (prodNameTagLinkTest != -1) {
										prodNameTagLink += " style='cursor:pointer;' onclick='panel5RTRProdSelect(" + rtreqProdArray[y][0] + ", \"" + rtreqProdArray[y][1] + "\", \"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ", \"panel5RTRProductNameVar" + rtreqProdArray[y][0] + "\", 1);' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRProdSelect(" + rtreqProdArray[y][0] + ", \"" + rtreqProdArray[y][1] + "\", \"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ", \"panel5RTRProductNameVar" + rtreqProdArray[y][0] + "\", 1);}'";
										if (hoverState==1) {
											prodNameTagLink += " onmouseover='panel5RTRProdMouseOver(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOver + "' onfocus='panel5RTRProdMouseOver(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOver + "' onmouseout='panel5RTRProdMouseOut(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOver + "' onblur='panel5RTRProdMouseOut(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOver + "'";
										}
									}
									var prodNameItalicStart = prodNameTagStrip.indexOf(" FNTAW=");
									if (prodNameItalicStart != -1) {
										var prodNameItalicEnd = prodNameTagStrip.indexOf("]",prodNameItalicStart);
										var prodNameItalicVar = "<i class='fa " + prodNameTagStrip.substring((prodNameItalicStart+8),(prodNameItalicEnd)) + "'><\/i>";
									}
									else {
										var prodNameItalicVar = "";
									}
									if(FPC==1) {
										var isProductChecked = 1;
										window["panel5RTRProductNameVar"+rtreqProdArray[y][0]] = 1;
										var baseProductStyle = " panel_5_rtr_product_name_on";
									}
									else {
										if (rtreqProdArray[y][7] == "1") {
											var isProductChecked = 1;
											window["panel5RTRProductNameVar"+rtreqProdArray[y][0]] = 1;
											var baseProductStyle = " panel_5_rtr_product_name_on";
										}
										else {
											var isProductChecked = 0;
											var baseProductStyle = " panel_5_rtr_product_name_off";
										}
									}
									productHTMLTest = baseProdNameHTMLStart + "<div id='panel5RTRProductName" + rtreqProdArray[y][0] + "' class='panel_5_rtr_product_name" + replaceImgMouseClass + baseProductStyle + "'" + prodNameTagLink + " tabindex='0' title=\"" + rtreqProdArray[y][2] + "\">" + prodNameItalicVar + "<span class='panel_5_rtr_product_name_name'>" + rtreqProdArray[y][2] + "<\/span>" + descVal + "<\/div>" + baseProdNameHTMLEnd;
								}
								var prodBigImgTagStart = productHTMLTest.indexOf("<!--PRODBIGIMG");
								if (prodBigImgTagStart != -1) {
									var prodBigImgTagEnd = productHTMLTest.indexOf(">",prodBigImgTagStart);
									var prodBigImgTagStrip = productHTMLTest.substring(prodBigImgTagStart,(prodBigImgTagEnd+1));
									var baseProdBigImgHTMLStart = productHTMLTest.substr(0,prodBigImgTagStart);
									var baseProdBigImgHTMLEnd = productHTMLTest.substr((prodBigImgTagEnd+1));
									var replaceImgTest = prodBigImgTagStrip.indexOf(" REPLACE");
									if (replaceImgTest != -1) {
										var replaceImgMouseOver = "panel5RTRProdImgReplace(1," + rtreqProdArray[y][0] + ");";
										var replaceImgMouseOut = "panel5RTRProdImgReplace(0," + rtreqProdArray[y][0] + ");";
										var replaceImgMouseClass = " img_replace_active";
									}
									else {
										var replaceImgMouseOver = "";
										var replaceImgMouseOut = "";
										var replaceImgMouseClass = "";
									}
									var prodBigImgTagLinkTest = prodBigImgTagStrip.indexOf(" LINK");
									var prodBigImgTagLinkStart = "";
									var prodBigImgTagLinkEnd = "";
									if (prodBigImgTagLinkTest != -1) {
										prodBigImgTagLinkStart += "<a href='' onclick='panel5RTRProdSelect(" + rtreqProdArray[y][0] + ", \"" + rtreqProdArray[y][1] + "\", \"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ", \"panel5RTRProductNameVar" + rtreqProdArray[y][0] + "\", 1);return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRProdSelect(" + rtreqProdArray[y][0] + ", \"" + rtreqProdArray[y][1] + "\", \"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ", \"panel5RTRProductNameVar" + rtreqProdArray[y][0] + "\", 1);return false;}'";
										if (hoverState==1) {
											prodBigImgTagLinkStart += " onmouseover='panel5RTRProdMouseOver(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOver + "' onfocus='panel5RTRProdMouseOver(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOver + "' onmouseout='panel5RTRProdMouseOut(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOut + "' onblur='panel5RTRProdMouseOut(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOut + "'";
										}
										prodBigImgTagLinkStart += " tabindex='0' title=\"" + rtreqProdArray[y][2] + "\">";
										prodBigImgTagLinkEnd = "<\/a>";
									}
									productHTMLTest = baseProdBigImgHTMLStart + prodBigImgTagLinkStart + "<img title=\"" + rtreqProdArray[y][2] + "\" alt=\"" + rtreqProdArray[y][2] + "\" id='panel5RTRProductBigImg" + rtreqProdArray[y][0] + "' class='panel_5_rtr_product_big_img" + replaceImgMouseClass + "' src='" + clientImgBase + rtreqProdArray[y][4] + "'>" + prodBigImgTagLinkEnd + baseProdBigImgHTMLEnd;
								}
								var prodSmImgTagStart = productHTMLTest.indexOf("<!--PRODSMIMG");
								if (prodSmImgTagStart != -1) {
									var prodSmImgTagEnd = productHTMLTest.indexOf(">",prodSmImgTagStart);
									var prodSmImgTagStrip = productHTMLTest.substring(prodSmImgTagStart,(prodSmImgTagEnd+1));
									var baseProdSmImgHTMLStart = productHTMLTest.substr(0,prodSmImgTagStart);
									var baseProdSmImgHTMLEnd = productHTMLTest.substr((prodSmImgTagEnd+1));
									var replaceImgTest = prodSmImgTagStrip.indexOf(" REPLACE");
									if (replaceImgTest != -1) {
										var replaceImgMouseOver = "panel5RTRProdImgReplace(1," + rtreqProdArray[y][0] + ");";
										var replaceImgMouseOut = "panel5RTRProdImgReplace(0," + rtreqProdArray[y][0] + ");";
										var replaceImgMouseClass = " img_replace_active";
									}
									else {
										var replaceImgMouseOver = "";
										var replaceImgMouseOut = "";
										var replaceImgMouseClass = "";
									}
									var prodSmImgTagLinkTest = prodSmImgTagStrip.indexOf(" LINK");
									var prodSmImgTagLinkStart = "";
									var prodSmImgTagLinkEnd = "";
									if (prodSmImgTagLinkTest != -1) {
										prodSmImgTagLinkStart += "<a href='' onclick='panel5RTRProdSelect(" + rtreqProdArray[y][0] + ", \"" + rtreqProdArray[y][1] + "\", \"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ", \"panel5RTRProductNameVar" + rtreqProdArray[y][0] + "\", 1);return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRProdSelect(" + rtreqProdArray[y][0] + ", \"" + rtreqProdArray[y][1] + "\", \"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ", \"panel5RTRProductNameVar" + rtreqProdArray[y][0] + "\", 1);return false;}'";
										if (hoverState==1) {
											prodSmImgTagLinkStart += " onmouseover='panel5RTRProdMouseOver(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOver + "' onfocus='panel5RTRProdMouseOver(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOver + "' onmouseout='panel5RTRProdMouseOut(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOut + "' onblur='panel5RTRProdMouseOut(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOut + "'";
										}
										prodSmImgTagLinkStart += " tabindex='0' title=\"" + rtreqProdArray[y][2] + "\">";
										prodSmImgTagLinkEnd = "<\/a>";
									}
									productHTMLTest = baseProdSmImgHTMLStart + prodSmImgTagLinkStart + "<img title=\"" + rtreqProdArray[y][2] + "\" alt=\"" + rtreqProdArray[y][2] + "\" id='panel5RTRProductSmImg" + rtreqProdArray[y][0] + "' class='panel_5_rtr_product_sm_img" + replaceImgMouseClass + "' src='" + clientImgBase + rtreqProdArray[y][5] + "'>" + prodSmImgTagLinkEnd + baseProdSmImgHTMLEnd;
								}
								productHTML += productHTMLTest;
							}
						}
						baseHTML = baseHTMLStart + productHTML + baseHTMLEnd;
					}
					else {
						if(gLog==1){console.log("ERROR: P5 Unknown whatCatProdIndex="+whatCatProdIndex);}
						p1ErrorArray.push("ERROR: P5 Unknown whatCatProdIndex="+whatCatProdIndex);
					}
				}
				else {
					for (y=0; y<rtreqProdArray.length; y++) {
						var productHTMLTest = autotextIt(p5TemplateSet.panel5RTRProductDiv,"panel5RTRProduct");
						var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
						if (prodDiscTagStart != -1) {
							var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
							var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
							var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
							var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
							var prodDiscWrite = "";
							var discVal = rtreqProdArray[y][6];
							if (discVal != 1) {
								prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel5RTRProduct_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
							}
							productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
						}
						var prodNameTagStart = productHTMLTest.indexOf("<!--PRODNAME");
						if (prodNameTagStart != -1) {
							var prodNameTagEnd = productHTMLTest.indexOf(">",prodNameTagStart);
							var prodNameTagStrip = productHTMLTest.substring(prodNameTagStart,(prodNameTagEnd+1));
							var baseProdNameHTMLStart = productHTMLTest.substr(0,prodNameTagStart);
							var baseProdNameHTMLEnd = productHTMLTest.substr((prodNameTagEnd+1));
							var replaceImgTest = prodNameTagStrip.indexOf(" REPLACE");
							if (replaceImgTest != -1) {
								var replaceImgMouseOver = "panel5RTRProdImgReplace(1," + rtreqProdArray[y][0] + ");";
								var replaceImgMouseOut = "panel5RTRProdImgReplace(0," + rtreqProdArray[y][0] + ");";
								var replaceImgMouseClass = " img_replace_active";
							}
							else {
								var replaceImgMouseOver = "";
								var replaceImgMouseOut = "";
								var replaceImgMouseClass = "";
							}
							var descTest = prodNameTagStrip.indexOf(" DESC");
							if (descTest != -1) {
								var descVal = "<span class='panel_5_rtr_product_name_desc'>" + rtreqProdArray[y][3] + "<\/span>";
							}
							else {
								var descVal = "";
							}
							var prodNameTagLinkTest = prodNameTagStrip.indexOf(" LINK");
							var prodNameTagLink = "";
							if (prodNameTagLinkTest != -1) {
								prodNameTagLink += " style='cursor:pointer;' onclick='panel5RTRProdSelect(" + rtreqProdArray[y][0] + ", \"" + rtreqProdArray[y][1] + "\", \"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ", \"panel5RTRProductNameVar" + rtreqProdArray[y][0] + "\", 1);' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRProdSelect(" + rtreqProdArray[y][0] + ", \"" + rtreqProdArray[y][1] + "\", \"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ", \"panel5RTRProductNameVar" + rtreqProdArray[y][0] + "\", 1);}'";
								if (hoverState==1) {
									prodNameTagLink += " onmouseover='panel5RTRProdMouseOver(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOver + "' onfocus='panel5RTRProdMouseOver(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOver + "' onmouseout='panel5RTRProdMouseOut(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOut + "' onblur='panel5RTRProdMouseOut(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOut + "'";
								}
								prodNameTagLink += "";
							}
							var prodNameItalicStart = prodNameTagStrip.indexOf(" FNTAW=");
							if (prodNameItalicStart != -1) {
								var prodNameItalicEnd = prodNameTagStrip.indexOf("]",prodNameItalicStart);
								var prodNameItalicVar = "<i class='fa " + prodNameTagStrip.substring((prodNameItalicStart+8),(prodNameItalicEnd)) + "'><\/i>";
							}
							else {
								var prodNameItalicVar = "";
							}
							if(FPC==1) {
								var isProductChecked = 1;
								window["panel5RTRProductNameVar"+rtreqProdArray[y][0]] = 1;
								var baseProductStyle = " panel_5_rtr_product_name_on";
							}
							else {
								if (rtreqProdArray[y][7] == "1") {
									var isProductChecked = 1;
									window["panel5RTRProductNameVar"+rtreqProdArray[y][0]] = 1;
									var baseProductStyle = " panel_5_rtr_product_name_on";
								}
								else {
									var isProductChecked = 0;
									var baseProductStyle = " panel_5_rtr_product_name_off";
								}
							}
							productHTMLTest = baseProdNameHTMLStart + "<div id='panel5RTRProductName" + rtreqProdArray[y][0] + "' class='panel_5_rtr_product_name" + replaceImgMouseClass + baseProductStyle + "'" + prodNameTagLink + " tabindex='0' title=\"" + rtreqProdArray[y][2] + "\">" + prodNameItalicVar + "<span class='panel_5_rtr_product_name_name'>" + rtreqProdArray[y][2] + "<\/span>" + descVal + "<\/div>" + baseProdNameHTMLEnd;
						}
						var prodBigImgTagStart = productHTMLTest.indexOf("<!--PRODBIGIMG");
						if (prodBigImgTagStart != -1) {
							var prodBigImgTagEnd = productHTMLTest.indexOf(">",prodBigImgTagStart);
							var prodBigImgTagStrip = productHTMLTest.substring(prodBigImgTagStart,(prodBigImgTagEnd+1));
							var baseProdBigImgHTMLStart = productHTMLTest.substr(0,prodBigImgTagStart);
							var baseProdBigImgHTMLEnd = productHTMLTest.substr((prodBigImgTagEnd+1));
							var replaceImgTest = prodBigImgTagStrip.indexOf(" REPLACE");
							if (replaceImgTest != -1) {
								var replaceImgMouseOver = "panel5RTRProdImgReplace(1," + rtreqProdArray[y][0] + ");";
								var replaceImgMouseOut = "panel5RTRProdImgReplace(0," + rtreqProdArray[y][0] + ");";
								var replaceImgMouseClass = " img_replace_active";
							}
							else {
								var replaceImgMouseOver = "";
								var replaceImgMouseOut = "";
								var replaceImgMouseClass = "";
							}
							var prodBigImgTagLinkTest = prodBigImgTagStrip.indexOf(" LINK");
							var prodBigImgTagLinkStart = "";
							var prodBigImgTagLinkEnd = "";
							if (prodBigImgTagLinkTest != -1) {
								prodBigImgTagLinkStart += "<a href='' onclick='panel5RTRProdSelect(" + rtreqProdArray[y][0] + ", \"" + rtreqProdArray[y][1] + "\", \"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ", \"panel5RTRProductNameVar" + rtreqProdArray[y][0] + "\", 1);return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRProdSelect(" + rtreqProdArray[y][0] + ", \"" + rtreqProdArray[y][1] + "\", \"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ", \"panel5RTRProductNameVar" + rtreqProdArray[y][0] + "\", 1);return false;}'";
								if (hoverState==1) {
									prodBigImgTagLinkStart += " onmouseover='panel5RTRProdMouseOver(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOver + "' onfocus='panel5RTRProdMouseOver(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOver + "' onmouseout='panel5RTRProdMouseOut(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOut + "' onblur='panel5RTRProdMouseOut(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOut + "'";
								}
								prodBigImgTagLinkStart += " tabindex='0' title=\"" + rtreqProdArray[y][2] + "\">";
								prodBigImgTagLinkEnd = "<\/a>";
							}
							productHTMLTest = baseProdBigImgHTMLStart + prodBigImgTagLinkStart + "<img title=\"" + rtreqProdArray[y][2] + "\" alt=\"" + rtreqProdArray[y][2] + "\" id='panel5RTRProductBigImg" + rtreqProdArray[y][0] + "' class='panel_5_rtr_product_big_img" + replaceImgMouseClass + "' src='" + clientImgBase + rtreqProdArray[y][4] + "'>" + prodBigImgTagLinkEnd + baseProdBigImgHTMLEnd;
						}
						var prodSmImgTagStart = productHTMLTest.indexOf("<!--PRODSMIMG");
						if (prodSmImgTagStart != -1) {
							var prodSmImgTagEnd = productHTMLTest.indexOf(">",prodSmImgTagStart);
							var prodSmImgTagStrip = productHTMLTest.substring(prodSmImgTagStart,(prodSmImgTagEnd+1));
							var baseProdSmImgHTMLStart = productHTMLTest.substr(0,prodSmImgTagStart);
							var baseProdSmImgHTMLEnd = productHTMLTest.substr((prodSmImgTagEnd+1));
							var replaceImgTest = prodSmImgTagStrip.indexOf(" REPLACE");
							if (replaceImgTest != -1) {
								var replaceImgMouseOver = "panel5RTRProdImgReplace(1," + rtreqProdArray[y][0] + ");";
								var replaceImgMouseOut = "panel5RTRProdImgReplace(0," + rtreqProdArray[y][0] + ");";
								var replaceImgMouseClass = " img_replace_active";
							}
							else {
								var replaceImgMouseOver = "";
								var replaceImgMouseOut = "";
								var replaceImgMouseClass = "";
							}
							var prodSmImgTagLinkTest = prodSmImgTagStrip.indexOf(" LINK");
							var prodSmImgTagLinkStart = "";
							var prodSmImgTagLinkEnd = "";
							if (prodSmImgTagLinkTest != -1) {
								prodSmImgTagLinkStart += "<a href='' onclick='panel5RTRProdSelect(" + rtreqProdArray[y][0] + ", \"" + rtreqProdArray[y][1] + "\", \"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ", \"panel5RTRProductNameVar" + rtreqProdArray[y][0] + "\", 1);return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRProdSelect(" + rtreqProdArray[y][0] + ", \"" + rtreqProdArray[y][1] + "\", \"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ", \"panel5RTRProductNameVar" + rtreqProdArray[y][0] + "\", 1);return false;}'";
								if (hoverState==1) {
									prodSmImgTagLinkStart += " onmouseover='panel5RTRProdMouseOver(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOver + "' onfocus='panel5RTRProdMouseOver(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOver + "' onmouseout='panel5RTRProdMouseOut(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOut + "' onblur='panel5RTRProdMouseOut(\"panel5RTRProductName" + rtreqProdArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + rtreqProdArray[y][0] + ");" + replaceImgMouseOut + "'";
								}
								prodSmImgTagLinkStart += " tabindex='0' title=\"" + rtreqProdArray[y][2] + "\">";
								prodSmImgTagLinkEnd = "<\/a>";
							}
							productHTMLTest = baseProdSmImgHTMLStart + prodSmImgTagLinkStart + "<img title=\"" + rtreqProdArray[y][2] + "\" alt=\"" + rtreqProdArray[y][2] + "\" id='panel5RTRProductSmImg" + rtreqProdArray[y][0] + "' class='panel_5_rtr_product_sm_img" + replaceImgMouseClass + "' src='" + clientImgBase + rtreqProdArray[y][5] + "'>" + prodSmImgTagLinkEnd + baseProdSmImgHTMLEnd;
						}
						productHTML += productHTMLTest;
					}
					baseHTML = baseHTMLStart + productHTML + baseHTMLEnd;
				}
			}
			else {
				prodSearchOn = 0;
			}
		}
		var panel5CatSearchOn = 1;
		while (panel5CatSearchOn == 1) {
			var catTagStart = baseHTML.indexOf("<!--RTRCATEGORY");
			if (catTagStart != -1) {
				var catTagEnd = baseHTML.indexOf(">",catTagStart);
				var catTagStrip = baseHTML.substring(catTagStart,(catTagEnd+1));
				var baseHTMLStart = baseHTML.substr(0,catTagStart);
				var baseHTMLEnd = baseHTML.substr((catTagEnd+1));
				var categoryID = 0;
				var categoryHTML = "";
				var categoryIDStart = catTagStrip.indexOf(" ID=");
				if (categoryIDStart != -1) {
					var categoryIDEnd = catTagStrip.indexOf("]", categoryIDStart);
					categoryID = catTagStrip.substring((categoryIDStart+5),(categoryIDEnd));
				}
				var categoryCartStart = catTagStrip.indexOf(" CART");
				if (categoryCartStart != -1) {
					var categoryCartVar = 2;
				}
				else {
					var categoryCartVar = 1;
				}
				var isRTRFamily = 0;
				var categoryFamilyStart = catTagStrip.indexOf(" FAMILY");
				if (categoryFamilyStart != -1) {
					isRTRFamily = 1;
					if(gLog==1){console.log("RTRCATEGORY - FAMILY:", famArray);}
				}
				var categoryNoSelectStart = catTagStrip.indexOf(" NOSELECT");
				if (categoryNoSelectStart != -1) {
					categoryNoSelect = 1;
				}
				var catActivateLink = "";
				var catActivateClass = "";
				var categoryActivateStart = catTagStrip.indexOf(" ACTIVATE=");
				if (categoryActivateStart != -1) {
					var categoryActivateEnd = catTagStrip.indexOf("]", categoryActivateStart);
					catActivateClass = catTagStrip.substring((categoryActivateStart+11),(categoryActivateEnd));
					catActivateLinkStart = "catActivate(\"" + catActivateClass + "\",";
					catActivateLinkEnd = ");";
					window["catActiveTrack"+categoryID] = 1;
				}
				var categoryPostload = catTagStrip.indexOf(" POSTLOAD");
				if (categoryPostload != -1) {
					panel5RTRPostLoad = 1;
				}
				if (categoryID != 0) {
					var categoryHTMLTest = autotextIt(p5TemplateSet.panel5RTRCategoryDiv,"panel5RTRCategory");
					var whatCatIndex = -1;
					for (x=0; x<catArray.length; x++) {
						if (catArray[x][0] == categoryID) {
							whatCatIndex = x;
							break;
						}
					}
					if (whatCatIndex != -1) {
						var catIterOn = 1;
						while (catIterOn == 1) {
							var catIterStart = categoryHTMLTest.indexOf("<!--CATITER");
							if (catIterStart != -1) {
								var catIterEnd = categoryHTMLTest.indexOf(">",catIterStart);
								var baseCatIterHTMLStart = categoryHTMLTest.substr(0,catIterStart);
								var baseCatIterHTMLEnd = categoryHTMLTest.substr((catIterEnd+1));
								categoryHTMLTest = baseCatIterHTMLStart + catArray[whatCatIndex][0] + baseCatIterHTMLEnd;
							}
							else {
								catIterOn = 0;
							}
						}
						var catBiterOn = 1;
						while (catBiterOn == 1) {
							var catBiterStart = categoryHTMLTest.indexOf("|!--CATITER");
							if (catBiterStart != -1) {
								var catBiterEnd = categoryHTMLTest.indexOf("|",catBiterStart+1);
								var baseCatIterHTMLStart = categoryHTMLTest.substr(0,catBiterStart);
								var baseCatIterHTMLEnd = categoryHTMLTest.substr((catBiterEnd+1));
								categoryHTMLTest = baseCatIterHTMLStart + catArray[whatCatIndex][0] + baseCatIterHTMLEnd;
							}
							else {
								catBiterOn = 0;
							}
						}
						var famNameTagStart = categoryHTMLTest.indexOf("<!--FAMNAME");
						if (famNameTagStart != -1) {
							var famNameTagEnd = categoryHTMLTest.indexOf(">",famNameTagStart);
							var famNameTagStrip = categoryHTMLTest.substring(famNameTagStart,(famNameTagEnd+1));
							var baseFamNameHTMLStart = categoryHTMLTest.substr(0,famNameTagStart);
							var baseFamNameHTMLEnd = categoryHTMLTest.substr((famNameTagEnd+1));
							var famNameValueVal = "FAMILY NAME ERROR";
							for (fn=0; fn<famArray.length; fn++) {
								if (famArray[fn][0] == catArray[whatCatIndex][2]) {
									famNameValueVal = famArray[fn][1];
									break;
								}
							}
							categoryHTMLTest = baseFamNameHTMLStart + "<div id='panel5RTRCategoryFamilyName" + catArray[whatCatIndex][0] + "' class='panel_5_rtr_category_family_name_" + catArray[whatCatIndex][0] + " panel_5_rtr_category_family_name" + replaceImgMouseClass + "'>" + famNameValueVal + "<\/div>" + baseFamNameHTMLEnd;
						}
						var catBadgeTagStart = categoryHTMLTest.indexOf("<!--BADGE");
						if (catBadgeTagStart != -1) {
							var catBadgeTagEnd = categoryHTMLTest.indexOf(">",catBadgeTagStart);
							var catBadgeTagStrip = categoryHTMLTest.substring(catBadgeTagStart,(catBadgeTagEnd+1));
							var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBadgeTagStart);
							var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBadgeTagEnd+1));
							var catBadgeSingle = "";
							var catBadgeSingleStart = catBadgeTagStrip.indexOf(" SINGLE=");
							if (catBadgeSingleStart != -1) {
								var catBadgeSingleEnd = catBadgeTagStrip.indexOf("]", catBadgeSingleStart);
								catBadgeSingle = " " + catBadgeTagStrip.substring((catBadgeSingleStart+9),(catBadgeSingleEnd));
							}
							var catBadgeMultiple = "";
							var catBadgeMultipleStart = catBadgeTagStrip.indexOf(" MULTIPLE=");
							if (catBadgeMultipleStart != -1) {
								var catBadgeMultipleEnd = catBadgeTagStrip.indexOf("]", catBadgeMultipleStart);
								catBadgeMultiple = " " + catBadgeTagStrip.substring((catBadgeMultipleStart+11),(catBadgeMultipleEnd));
							}
							var cbc = 0;
							for (p=0; p<prodDisplayArray.length; p++) {
								if (prodDisplayArray[p][8] == catArray[whatCatIndex][0]) {
									cbc++;
								}
							}
							if (cbc == 1) {
								var catBadgeWrite = cbc + catBadgeSingle;
							}
							else {
								var catBadgeWrite = cbc + catBadgeMultiple;
							}
							categoryHTMLTest = baseCatBigImgHTMLStart + "<span id='panel5RTRCatBadge" + catArray[whatCatIndex][0] + "' class='counter_badge panel_5_rtr_cat_badge'>" + catBadgeWrite + "<\/span>" + baseCatBigImgHTMLEnd;
						}
						var catNameTagStart = categoryHTMLTest.indexOf("<!--CATNAME");
						if (catNameTagStart != -1) {
							var catNameTagEnd = categoryHTMLTest.indexOf(">",catNameTagStart);
							var catNameTagStrip = categoryHTMLTest.substring(catNameTagStart,(catNameTagEnd+1));
							var baseCatNameHTMLStart = categoryHTMLTest.substr(0,catNameTagStart);
							var baseCatNameHTMLEnd = categoryHTMLTest.substr((catNameTagEnd+1));
							var catNameValueStart = catNameTagStrip.indexOf(" VALUE=");
							if (catNameValueStart != -1) {
								var catNameValueEnd = catNameTagStrip.indexOf("]", catNameValueStart);
								var catNameValueVal = catNameTagStrip.substring((catNameValueStart+8),(catNameValueEnd));
							}
							else {
								var catNameValueVal = catArray[whatCatIndex][1];
							}
							var replaceImgTest = catNameTagStrip.indexOf(" REPLACE");
							if (replaceImgTest != -1) {
								var replaceImgMouseOver = "panel5RTRCatImgReplace(1," + catArray[whatCatIndex][0] + ");";
								var replaceImgMouseOut = "panel5RTRCatImgReplace(2," + catArray[whatCatIndex][0] + ");";
								var replaceImgMouseClass = " img_replace_active";
							}
							else {
								var replaceImgMouseOver = "";
								var replaceImgMouseOut = "";
								var replaceImgMouseClass = "";
							}
							var catNameTagLinkTest = catNameTagStrip.indexOf(" LINK");
							var catNameTagLink = "";
							if (catNameTagLinkTest != -1) {
								if (categoryNoSelect == 0) {
									var catNameOnClickVar = " onclick='panel5RTRCatSelectProducts(" + catArray[whatCatIndex][0] + ", \"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ", \"panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + "\")' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRCatSelectProducts(" + catArray[whatCatIndex][0] + ", \"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ", \"panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + "\")}'";
								}
								else {
									var catNameOnClickVar = " onclick='" + catActivateLinkStart + catArray[whatCatIndex][0] + catActivateLinkEnd + "return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + catActivateLinkStart + catArray[whatCatIndex][0] + catActivateLinkEnd + "return false;}'";
								}
								catNameTagLink += " style='cursor:pointer;'" + catNameOnClickVar;
								if (hoverState==1) {
									catNameTagLink += " onmouseover='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ");" + replaceImgMouseOver + "' onfocus='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ");" + replaceImgMouseOver + "' onmouseout='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ");" + replaceImgMouseOut + "' onblur='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ");" + replaceImgMouseOut + "'";
								}
							}
							categoryHTMLTest = baseCatNameHTMLStart + "<a name='panel5RTRCategoryAnchor" + catArray[whatCatIndex][0] + "' id='panel5RTRCategoryAnchor" + catArray[whatCatIndex][0] + "'><\/a><div id='panel5RTRCategoryName" + catArray[whatCatIndex][0] + "' class='panel_5_rtr_category_name_" + catArray[whatCatIndex][0] + " panel_5_rtr_category_name" + replaceImgMouseClass + " panel_5_rtr_category_name_off'" + catNameTagLink + " tabindex='0' title=\"" + catNameValueVal + "\">" + catNameValueVal + "<\/div>" + baseCatNameHTMLEnd;
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
							var categoryNoImgStart = catAllTagStrip.indexOf(" NOIMG");
							if (categoryNoImgStart != -1) {
								p1CatAllToImg = 0;
							}
							var replaceImgTest = catAllTagStrip.indexOf(" REPLACE");
							if (replaceImgTest != -1) {
								var replaceImgMouseOver = "panel5RTRCatImgReplace(1," + catArray[whatCatIndex][0] + ");";
								var replaceImgMouseOut = "panel5RTRCatImgReplace(2," + catArray[whatCatIndex][0] + ");";
								var replaceImgMouseClass = " img_replace_active";
							}
							else {
								var replaceImgMouseOver = "";
								var replaceImgMouseOut = "";
								var replaceImgMouseClass = "";
							}
							var catAllTagLinkTest = catAllTagStrip.indexOf(" LINK");
							var catAllTagLink = "";
							if (catAllTagLinkTest != -1) {
								catAllTagLink += " style='cursor:pointer;' onclick='panel5RTRCatSelectProducts(" + catArray[whatCatIndex][0] + ", \"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name_all\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ", \"panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + "\"," + categoryCartVar + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRCatSelectProducts(" + catArray[whatCatIndex][0] + ", \"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name_all\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ", \"panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + "\"," + categoryCartVar + ");}'";
								if (hoverState==1) {
									catAllTagLink += " onmouseover='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ");" + replaceImgMouseOver + "' onfocus='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ");" + replaceImgMouseOver + "' onmouseout='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ");" + replaceImgMouseOut + "' onblur='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ");" + replaceImgMouseOut + "'";
								}
							}
							categoryHTMLTest = baseCatAllHTMLStart + "<div id='panel5RTRCategoryName" + catArray[whatCatIndex][0] + "All' class='panel_5_rtr_category_name_all_" + catArray[whatCatIndex][0] + " panel_5_rtr_category_name_all" + replaceImgMouseClass + " panel_5_rtr_category_name_all_off'" + catAllTagLink + " tabindex='0' title=\"" + catAllValueVal + "\">" + catAllValueVal + "<\/div>" + baseCatAllHTMLEnd;
						}
						var catBigImgTagStart = categoryHTMLTest.indexOf("<!--CATBIGIMG");
						if (catBigImgTagStart != -1) {
							var catBigImgTagEnd = categoryHTMLTest.indexOf(">",catBigImgTagStart);
							var catBigImgTagStrip = categoryHTMLTest.substring(catBigImgTagStart,(catBigImgTagEnd+1));
							var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBigImgTagStart);
							var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBigImgTagEnd+1));
							var replaceBigImgMouseOver = "";
							var replaceBigImgMouseOut = "";
							var replaceBigImgMouseClass = "";
							var replaceBigImgRender = "";
							var replaceBigImgPreset = catArray[whatCatIndex][3];
							var replaceBigImgHidden = " style='display:none;'";
							var replaceBigImgBackClass = "off";
							var replaceBigImgTest = catBigImgTagStrip.indexOf(" REPLACE");
							if (replaceBigImgTest != -1) {
								replaceBigImgMouseOver = "panel5RTRCatImgReplace(1," + catArray[whatCatIndex][0] + ");";
								replaceBigImgMouseOut = "panel5RTRCatImgReplace(2," + catArray[whatCatIndex][0] + ");";
								replaceBigImgMouseClass = " img_replace_active";
							}
							if (categoryNoSelect == 0) {
								var catBigImgOnClickVar = " onclick='panel5RTRCatSelectProducts(" + catArray[whatCatIndex][0] + ", \"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ", \"panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + "\"," + categoryCartVar + ");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRCatSelectProducts(" + catArray[whatCatIndex][0] + ", \"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ", \"panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + "\"," + categoryCartVar + ");return false;}'";
							}
							else {
								var catBigImgOnClickVar = " onclick='" + catActivateLinkStart + catArray[whatCatIndex][0] + catActivateLinkEnd + "return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + catActivateLinkStart + catArray[whatCatIndex][0] + catActivateLinkEnd + "return false;}'";
							}
							var postImgBig = " style='background-image:url(\"" + clientImgBase + catArray[whatCatIndex][3] + "\");'";
							if (panel5RTRPostLoad == 1) {
								postImgBig = "";
							};
							var catBigImgTagLinkTest = catBigImgTagStrip.indexOf(" LINK");
							var catBigImgTagLinkStart = "";
							var catBigImgTagLinkEnd = "";
							if (catBigImgTagLinkTest != -1) {
								catBigImgTagLinkStart += "<a href=''" + catBigImgOnClickVar;
								if (hoverState==1) {
									catBigImgTagLinkStart += " onmouseover='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ");" + replaceBigImgMouseOver + "' onfocus='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ");" + replaceBigImgMouseOver + "' onmouseout='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ");" + replaceBigImgMouseOut + "' onblur='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ");" + replaceBigImgMouseOut + "'";
								}
								catBigImgTagLinkStart += " tabindex='0' title=\"" + catArray[whatCatIndex][1] + "\">";
								catBigImgTagLinkEnd = "<\/a>";
							}
							var catBigImgTagDivTest = catBigImgTagStrip.indexOf(" DIV");
							if (catBigImgTagDivTest != -1) {
								p1CHWon = 1;
								replaceBigImgRender += "<div title=\"" + catArray[whatCatIndex][1] + "\" id='panel5RTRCategoryBigImgDivShell" + catArray[whatCatIndex][0] + "' class='panel_5_rtr_category_big_img_div_shell panel_5_rtr_category_big_img_div_shell_" + catArray[whatCatIndex][0] + "'" + catBigImgOnClickVar;
								if (hoverState==1) {
									replaceBigImgRender += " onmouseover='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ");" + replaceBigImgMouseOver + "' onfocus='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ");" + replaceBigImgMouseOver + "'";
								}
								replaceBigImgRender += " tabindex='0' title=\"" + catArray[whatCatIndex][1] + "\"><div id='panel5RTRCategoryBigImgDivBack" + catArray[whatCatIndex][0] + "' class='panel_5_rtr_category_big_img_div_back panel_5_rtr_category_big_img_div_back_" + replaceBigImgBackClass + " panel_5_rtr_category_big_img_div_back_" + catArray[whatCatIndex][0] + replaceBigImgMouseClass +"' " + postImgBig + "><\/div><div id='panel5RTRCategoryBigImgDivOver" + catArray[whatCatIndex][0] + "' class='panel_5_rtr_category_big_img_div_over panel_5_rtr_category_big_img_div_over_" + catArray[whatCatIndex][0] +"'" + replaceBigImgHidden;
								if (hoverState==1) {
									replaceBigImgRender += " onmouseout='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ");" + replaceBigImgMouseOut + "' onblur='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ");" + replaceBigImgMouseOut + "'";
								}
								replaceBigImgRender += ">&nbsp;<\/div><\/div>";
								categoryHTMLTest = baseCatBigImgHTMLStart + replaceBigImgRender + baseCatBigImgHTMLEnd;
							}
							else {
								categoryHTMLTest = baseCatBigImgHTMLStart + catBigImgTagLinkStart + "<img title=\"" + catArray[whatCatIndex][1] + "\" alt=\"" + catArray[whatCatIndex][1] + "\" id='panel5RTRCategoryBigImg" + catArray[whatCatIndex][0] + "' class='panel_5_rtr_category_big_img panel_5_rtr_category_big_img_" +catArray[whatCatIndex][0] + replaceBigImgMouseClass + "' src='" + clientImgBase + catArray[whatCatIndex][3] + "'>" + catBigImgTagLinkEnd + baseCatBigImgHTMLEnd;
							}
						}
						var catSmImgTagStart = categoryHTMLTest.indexOf("<!--CATSMIMG");
						if (catSmImgTagStart != -1) {
							var catSmImgTagEnd = categoryHTMLTest.indexOf(">",catSmImgTagStart);
							var catSmImgTagStrip = categoryHTMLTest.substring(catSmImgTagStart,(catSmImgTagEnd+1));
							var baseCatSmImgHTMLStart = categoryHTMLTest.substr(0,catSmImgTagStart);
							var baseCatSmImgHTMLEnd = categoryHTMLTest.substr((catSmImgTagEnd+1));
							var replaceSmImgMouseOver = "";
							var replaceSmImgMouseOut = "";
							var replaceSmImgMouseClass = "";
							var replaceSmImgRender = "";
							var replaceSmImgPreset = catArray[whatCatIndex][4];
							var replaceSmImgHidden = " style='display:none;'";
							var replaceSmImgBackClass = "off";
							var replaceSmImgTest = catSmImgTagStrip.indexOf(" REPLACE");
							if (replaceSmImgTest != -1) {
								replaceSmImgMouseOver = "panel5RTRCatImgReplace(1," + catArray[whatCatIndex][0] + ");";
								replaceSmImgMouseOut = "panel5RTRCatImgReplace(2," + catArray[whatCatIndex][0] + ");";
								replaceSmImgMouseClass = " img_replace_active";
							}
							if (categoryNoSelect == 0) {
								var catSmImgOnClickVar = " onclick='panel5RTRCatSelectProducts(" + catArray[whatCatIndex][0] + ", \"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ", \"panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + "\"," + categoryCartVar + ");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRCatSelectProducts(" + catArray[whatCatIndex][0] + ", \"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ", \"panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + "\"," + categoryCartVar + ");return false;}'";
							}
							else {
								var catSmImgOnClickVar = " onclick='" + catActivateLinkStart + catArray[whatCatIndex][0] + catActivateLinkEnd + "return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + catActivateLinkStart + catArray[whatCatIndex][0] + catActivateLinkEnd + "return false;}'";
							}
							var postImgBig = " style='background-image:url(\"" + clientImgBase + catArray[whatCatIndex][4] + "\");'";
							if (panel5RTRPostLoad == 1) {
								postImgBig = "";
							};
							var catSmImgTagLinkTest = catSmImgTagStrip.indexOf(" LINK");
							var catSmImgTagLinkStart = "";
							var catSmImgTagLinkEnd = "";
							if (catSmImgTagLinkTest != -1) {
								catSmImgTagLinkStart += "<a href=''" + catSmImgOnClickVar;
								if (hoverState==1) {
									catSmImgTagLinkStart += " onmouseover='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ");" + replaceSmImgMouseOver + "' onfocus='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ");" + replaceSmImgMouseOver + "' onmouseout='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ");" + replaceSmImgMouseOut + "' onblur='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ");" + replaceSmImgMouseOut + "'";
								}
								catSmImgTagLinkStart += " tabindex='0' title=\"" + catArray[whatCatIndex][1] + "\">";
								catSmImgTagLinkEnd = "<\/a>";
							}
							var catSmImgTagDivTest = catSmImgTagStrip.indexOf(" DIV");
							if (catSmImgTagDivTest != -1) {
								p1CHWon = 1;
								replaceSmImgRender += "<div title=\"" + catArray[whatCatIndex][1] + "\" id='panel5RTRCategorySmImgDivShell" + catArray[whatCatIndex][0] + "' class='panel_5_rtr_category_sm_img_div_shell panel_5_rtr_category_sm_img_div_shell_" + catArray[whatCatIndex][0] + "'" + catSmImgOnClickVar;
								if (hoverState==1) {
									replaceSmImgRender += " onmouseover='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ");" + replaceSmImgMouseOver + "' onfocus='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ");" + replaceSmImgMouseOver + "'";
								}
								replaceSmImgRender += " tabindex='0' title=\"" + catArray[whatCatIndex][1] + "\"><div id='panel5RTRCategorySmImgDivBack" + catArray[whatCatIndex][0] + "' class='panel_5_rtr_category_sm_img_div_back panel_5_rtr_category_sm_img_div_back_" + replaceSmImgBackClass + " panel_5_rtr_category_sm_img_div_back_" + catArray[whatCatIndex][0] + replaceSmImgMouseClass +"'" + postImgBig + "><\/div><div id='panel5RTRCategorySmImgDivOver" + catArray[whatCatIndex][0] + "' class='panel_5_rtr_category_sm_img_div_over panel_5_rtr_category_sm_img_div_over_" + catArray[whatCatIndex][0] +"'" + replaceSmImgHidden;
								if (hoverState==1) {
									replaceSmImgRender += " onmouseout='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ");" + replaceSmImgMouseOut + "' onblur='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[whatCatIndex][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[whatCatIndex][0] + ");" + replaceSmImgMouseOut + "'";
								}
								replaceSmImgRender += ">&nbsp;<\/div><\/div>";
								categoryHTMLTest = baseCatSmImgHTMLStart + replaceSmImgRender + baseCatSmImgHTMLEnd;
							}
							else {
								categoryHTMLTest = baseCatSmImgHTMLStart + catSmImgTagLinkStart + "<img title=\"" + catArray[whatCatIndex][1] + "\" alt=\"" + catArray[whatCatIndex][1] + "\" id='panel5RTRCategorySmImg" + catArray[whatCatIndex][0] + "' class='panel_5_rtr_category_sm_img panel_5_rtr_category_sm_img_" +catArray[whatCatIndex][0] + replaceSmImgMouseClass + "' src='" + clientImgBase + catArray[whatCatIndex][4] + "'>" + catSmImgTagLinkEnd + baseCatSmImgHTMLEnd;
							}
						}
						var catProductsTagStart = categoryHTMLTest.indexOf("<!--CATPRODUCTS");
						if (catProductsTagStart != -1) {
							var catProductsTagEnd = categoryHTMLTest.indexOf(">",catProductsTagStart);
							var catProductsTagStrip = categoryHTMLTest.substring(catProductsTagStart,(catProductsTagEnd+1));
							var baseCatProductsHTMLStart = categoryHTMLTest.substr(0,catProductsTagStart);
							var baseCatProductsHTMLEnd = categoryHTMLTest.substr((catProductsTagEnd+1));
							var catProdWrite = "<div id='panel5RTRCategoryProductsShell" + catArray[whatCatIndex][0] + "' class='panel_5_rtr_category_products_shell panel_5_rtr_category_products_shell_" + catArray[whatCatIndex][0] + "'>";
							for (y=0; y<prodDisplayArray.length; y++) {
								if (prodDisplayArray[y][8] == whatCatProdIndex) {
									if (window["catActiveTrack"+prodDisplayArray[y][8]] == 1) {
										var productHTMLTest = autotextIt(p5TemplateSet.panel5RTRCatProductDiv,"panel5RTRCatProduct");
									}
									else {
										var productHTMLTest = autotextIt(p5TemplateSet.panel5RTRProductDiv,"panel5RTRProduct");
									}
									var prodCloseThings = "";
									var prodCloseTagStart = productHTMLTest.indexOf("<!--PRODCLOSE");
									if (prodCloseTagStart != -1) {
										var prodCloseTagEnd = productHTMLTest.indexOf(">",prodCloseTagStart);
										var baseProdCloseHTMLStart = productHTMLTest.substr(0,prodCloseTagStart);
										var baseProdCloseHTMLEnd = productHTMLTest.substr((prodCloseTagEnd+1));
										prodCloseThings = "genericCloseMe();";
										productHTMLTest = baseProdCloseHTMLStart + baseProdCloseHTMLEnd;
									}
									var prodIterTagStart = productHTMLTest.indexOf("|!--PRODITER");
									if (prodIterTagStart != -1) {
										var prodIterTagEnd = productHTMLTest.indexOf("|",prodIterTagStart+1);
										var prodIterTagStrip = productHTMLTest.substring(prodIterTagStart,(prodIterTagEnd+1));
										var baseProdIterHTMLStart = productHTMLTest.substr(0,prodIterTagStart);
										var baseProdIterHTMLEnd = productHTMLTest.substr((prodIterTagEnd+1));
										productHTMLTest = baseProdIterHTMLStart + prodDisplayArray[y][0] + baseProdIterHTMLEnd;
									}
									var famNameTagStart = productHTMLTest.indexOf("<!--FAMNAME");
									if (famNameTagStart != -1) {
										var famNameTagEnd = productHTMLTest.indexOf(">",famNameTagStart);
										var famNameTagStrip = productHTMLTest.substring(famNameTagStart,(famNameTagEnd+1));
										var baseFamNameHTMLStart = productHTMLTest.substr(0,famNameTagStart);
										var baseFamNameHTMLEnd = productHTMLTest.substr((famNameTagEnd+1));
										var famNameValueVal = "FAMILY NAME ERROR";
										var famProdCatNum = -1;
										for (cn=0; cn<catArray.length; cn++) {
											if (catArray[cn][0] == prodDisplayArray[y][8]) {
												famProdCatNum = cn;
												break;
											}
										}
										if (famProdCatNum != -1) {
											for (fn=0; fn<famArray.length; fn++) {
												if (famArray[fn][0] == catArray[famProdCatNum][2]) {
													famNameValueVal = famArray[fn][1];
													break;
												}
											}
										}
										productHTMLTest = baseFamNameHTMLStart + "<div id='panel5RTRProductFamilyName" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_family_name_" + prodDisplayArray[y][0] + " panel_5_rtr_product_family_name'>" + famNameValueVal + "<\/div>" + baseFamNameHTMLEnd;
									}
									var catNameTagStart = productHTMLTest.indexOf("<!--CATNAME");
									if (catNameTagStart != -1) {
										var catNameTagEnd = productHTMLTest.indexOf(">",catNameTagStart);
										var catNameTagStrip = productHTMLTest.substring(catNameTagStart,(catNameTagEnd+1));
										var baseCatNameHTMLStart = productHTMLTest.substr(0,catNameTagStart);
										var baseCatNameHTMLEnd = productHTMLTest.substr((catNameTagEnd+1));
										var catNameValueVal = "CATEGORY NAME ERROR";
										for (cn=0; cn<catArray.length; cn++) {
											if (catArray[cn][0] == prodDisplayArray[y][8]) {
												catNameValueVal = catArray[cn][1];
												break;
											}
										}
										productHTMLTest = baseCatNameHTMLStart + "<div id='panel5RTRProductCategoryName" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_category_name" + prodDisplayArray[y][0] + " panel_5_rtr_product_category_name'>" + catNameValueVal + "<\/div>" + baseCatNameHTMLEnd;
									}
									var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
									if (prodDiscTagStart != -1) {
										var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
										var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
										var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
										var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
										var prodDiscWrite = "";
										var discVal = prodDisplayArray[y][6];
										if (discVal != 1) {
											prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel5RTRProduct_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
										}
										productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
									}
									var prodNameTagStart = productHTMLTest.indexOf("<!--PRODNAME");
									if (prodNameTagStart != -1) {
										var prodNameTagEnd = productHTMLTest.indexOf(">",prodNameTagStart);
										var prodNameTagStrip = productHTMLTest.substring(prodNameTagStart,(prodNameTagEnd+1));
										var baseProdNameHTMLStart = productHTMLTest.substr(0,prodNameTagStart);
										var baseProdNameHTMLEnd = productHTMLTest.substr((prodNameTagEnd+1));
										var replaceImgTest = prodNameTagStrip.indexOf(" REPLACE");
										if (replaceImgTest != -1) {
											var replaceImgMouseOver = "panel5RTRProdImgReplace(1," + prodDisplayArray[y][0] + ");";
											var replaceImgMouseOut = "panel5RTRProdImgReplace(2," + prodDisplayArray[y][0] + ");";
											var replaceImgMouseClass = " img_replace_active";
										}
										else {
											var replaceImgMouseOver = "";
											var replaceImgMouseOut = "";
											var replaceImgMouseClass = "";
										}
										var descTest = prodNameTagStrip.indexOf(" DESC");
										if (descTest != -1) {
											var descVal = "<span class='panel_5_rtr_product_name_desc'>" + prodDisplayArray[y][3] + "<\/span>";
										}
										else {
											var descVal = "";
										}
										var prodPopupTestStart = prodNameTagStrip.indexOf(" POPUP=");
										var prodPopupMO = "";
										var prodPopupDIV = "";
										if (prodPopupTestStart != -1) {
											var prodPopupTestEnd = prodNameTagStrip.indexOf("]",prodPopupTestStart);
											var prodPopupTimeout = prodNameTagStrip.substring((prodPopupTestStart+8),(prodPopupTestEnd));
											prodPopupMO = "panel5RTRProdPopup(\"" + prodDisplayArray[y][0] + "\"," + prodPopupTimeout + ");";
											prodPopupDIV = "<div id='panel5RTRProductPopup" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_popup' style='display:none;'><\/div>";
										}
										var prodNameTagLinkTest = prodNameTagStrip.indexOf(" LINK");
										var prodNameTagLink = "";
										if (prodNameTagLinkTest != -1) {
											prodNameTagLink += " style='cursor:pointer;' onclick='" + prodCloseThings + "panel5RTRProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + ", \"panel5RTRProductNameVar" + prodDisplayArray[y][0] + "\", 1);' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + prodCloseThings + "panel5RTRProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + ", \"panel5RTRProductNameVar" + prodDisplayArray[y][0] + "\", 1);}'";
											if (hoverState==1) {
												prodNameTagLink += " onmouseover='panel5RTRProdMouseOver(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceImgMouseOver + prodPopupMO + "' onfocus='panel5RTRProdMouseOver(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceImgMouseOver + prodPopupMO + "' onmouseout='panel5RTRProdMouseOut(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceImgMouseOut + "' onblur='panel5RTRProdMouseOut(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceImgMouseOut + "'";
											}
										}
										var prodNameItalicStart = prodNameTagStrip.indexOf(" FNTAW=");
										if (prodNameItalicStart != -1) {
											var prodNameItalicEnd = prodNameTagStrip.indexOf("]",prodNameItalicStart);
											var prodNameItalicVar = "<i class='fa " + prodNameTagStrip.substring((prodNameItalicStart+8),(prodNameItalicEnd)) + "'><\/i>";
										}
										else {
											var prodNameItalicVar = "";
										}
										var prodNameSizeStart = prodNameTagStrip.indexOf(" SIZE");
										if (prodNameSizeStart != -1) {
											var prodNameDispVal = prodDisplayArray[y][21];
										}
										else {
											var prodNameDispVal = prodDisplayArray[y][2];
										}
										if(FPC==1) {
											var isProductChecked = 1;
											window["panel5RTRProductNameVar"+prodDisplayArray[y][0]] = 1;
											var baseProductStyle = " panel_5_rtr_product_name_on";
										}
										else {
											if (prodDisplayArray[y][7] == "1") {
												var isProductChecked = 1;
												window["panel5RTRProductNameVar"+prodDisplayArray[y][0]] = 1;
												var baseProductStyle = " panel_5_rtr_product_name_on";
											}
											else {
												var isProductChecked = 0;
												var baseProductStyle = " panel_5_rtr_product_name_off";
											}
										}
										productHTMLTest = baseProdNameHTMLStart + "<a name='panel5RTRProductAnchor" + prodDisplayArray[y][0] + "' id='panel5RTRProductAnchor" + prodDisplayArray[y][0] + "'><\/a><div id='panel5RTRProductName" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_name" + replaceImgMouseClass + baseProductStyle + "'" + prodNameTagLink + " tabindex='0' title=\"" + prodNameDispVal + "\">" + prodNameItalicVar + "<span class='panel_5_rtr_product_name_name'>" + prodNameDispVal + "<\/span>" + descVal + "<\/div>" + prodPopupDIV + baseProdNameHTMLEnd;
									}
									var prodDescTagStart = productHTMLTest.indexOf("<!--PRODDESC");
									if (prodDescTagStart != -1) {
										var prodDescTagEnd = productHTMLTest.indexOf(">",prodDescTagStart);
										var prodDescTagStrip = productHTMLTest.substring(prodDescTagStart,(prodDescTagEnd+1));
										var baseProdDescHTMLStart = productHTMLTest.substr(0,prodDescTagStart);
										var baseProdDescHTMLEnd = productHTMLTest.substr((prodDescTagEnd+1));
										productHTMLTest = baseProdDescHTMLStart + "<div id='panel5RTRProductDesc" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_desc'>" + prodDisplayArray[y][3] + "<\/div>" + baseProdDescHTMLEnd;
									}
									var prodCatTagStart = productHTMLTest.indexOf("<!--PRODCAT");
									if (prodCatTagStart != -1) {
										var prodCatTagEnd = productHTMLTest.indexOf(">",prodCatTagStart);
										var prodCatTagStrip = productHTMLTest.substring(prodCatTagStart,(prodCatTagEnd+1));
										var baseProdCatHTMLStart = productHTMLTest.substr(0,prodCatTagStart);
										var baseProdCatHTMLEnd = productHTMLTest.substr((prodCatTagEnd+1));
										productHTMLTest = baseProdCatHTMLStart + "<div id='panel5RTRProductCat" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_cat'>" + prodDisplayArray[y][16] + "<\/div>" + baseProdCatHTMLEnd;
									}
									var prodBigImgTagStart = productHTMLTest.indexOf("<!--PRODBIGIMG");
									if (prodBigImgTagStart != -1) {
										var prodBigImgTagEnd = productHTMLTest.indexOf(">",prodBigImgTagStart);
										var prodBigImgTagStrip = productHTMLTest.substring(prodBigImgTagStart,(prodBigImgTagEnd+1));
										var baseProdBigImgHTMLStart = productHTMLTest.substr(0,prodBigImgTagStart);
										var baseProdBigImgHTMLEnd = productHTMLTest.substr((prodBigImgTagEnd+1));
										var replaceBigImgMouseOver = "";
										var replaceBigImgMouseOut = "";
										var replaceBigImgMouseClass = "";
										var replaceBigImgRender = "";
										var replaceBigImgPreset = prodDisplayArray[y][4];
										var replaceBigImgHidden = " style='display:none;'";
										var replaceBigImgBackClass = "off";
										var replaceBigImgTest = prodBigImgTagStrip.indexOf(" REPLACE");
										if (replaceBigImgTest != -1) {
											replaceBigImgMouseOver = "panel5RTRProdImgReplace(1," + prodDisplayArray[y][0] + ");";
											replaceBigImgMouseOut = "panel5RTRProdImgReplace(2," + prodDisplayArray[y][0] + ");";
											replaceBigImgMouseClass = " img_replace_active";
											var replaceBigImgLength = prodDisplayArray[y][4].length;
											if(FPC==1) {
												var replaceBigImgPresetStart = prodDisplayArray[y][4].substr(0,(replaceBigImgLength-4));
												var replaceBigImgPresetEnd = prodDisplayArray[y][4].substr((replaceBigImgLength-4),replaceBigImgLength);
												replaceBigImgPreset = replaceBigImgPresetStart + "_2" + replaceBigImgPresetEnd;
												replaceBigImgHidden = "";
												replaceBigImgBackClass = "on";
											}
											else {
												if (prodDisplayArray[y][7] == "1") {
													var replaceBigImgPresetStart = prodDisplayArray[y][4].substr(0,(replaceBigImgLength-4));
													var replaceBigImgPresetEnd = prodDisplayArray[y][4].substr((replaceBigImgLength-4),replaceBigImgLength);
													replaceBigImgPreset = replaceBigImgPresetStart + "_2" + replaceBigImgPresetEnd;
													replaceBigImgHidden = "";
													replaceBigImgBackClass = "on";
												}
											}
										}
										var prodBigImgTagLinkTest = prodBigImgTagStrip.indexOf(" LINK");
										var prodBigImgTagLinkStart = "";
										var prodBigImgTagLinkEnd = "";
										if (prodBigImgTagLinkTest != -1) {
											prodBigImgTagLinkStart += "<a href='' onclick='" + prodCloseThings + "panel5RTRProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + ", \"panel5RTRProductNameVar" + prodDisplayArray[y][0] + "\", 1);return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + prodCloseThings + "panel5RTRProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + ", \"panel5RTRProductNameVar" + prodDisplayArray[y][0] + "\", 1);return false;}'";
											if (hoverState==1) {
												prodBigImgTagLinkStart += " onmouseover='panel5RTRProdMouseOver(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceBigImgMouseOver + "' onfocus='panel5RTRProdMouseOver(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceBigImgMouseOver + "' onmouseout='panel5RTRProdMouseOut(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceBigImgMouseOut + "' onblur='panel5RTRProdMouseOut(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceBigImgMouseOut + "'";
											}
											prodBigImgTagLinkStart += " tabindex='0' title=\"" + prodDisplayArray[y][2] + "\">";
											prodBigImgTagLinkEnd = "<\/a>";
										}
										var prodBigImgTagDivTest = prodBigImgTagStrip.indexOf(" DIV");
										if (prodBigImgTagDivTest != -1) {
											p1PHWon = 1;
											replaceBigImgRender += "<div title=\"" + prodDisplayArray[y][2] + "\" id='panel5RTRProductBigImgDivShell" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_big_img_div_shell panel_5_rtr_product_big_img_div_shell_" + prodDisplayArray[y][0] + "' onclick='" + prodCloseThings + "panel5RTRProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + ", \"panel5RTRProductNameVar" + prodDisplayArray[y][0] + "\", 1);' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + prodCloseThings + "panel5RTRProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + ", \"panel5RTRProductNameVar" + prodDisplayArray[y][0] + "\", 1);}'";
											if (hoverState==1) {
												replaceBigImgRender += " onmouseover='panel5RTRProdMouseOver(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceBigImgMouseOver + "' onfocus='panel5RTRProdMouseOver(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceBigImgMouseOver + "'";
											}
											replaceBigImgRender += " tabindex='0' title=\"" + prodDisplayArray[y][2] + "\"><div id='panel5RTRProductBigImgDivBack" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_big_img_div_back panel_5_rtr_product_big_img_div_back_" + replaceBigImgBackClass + " panel_5_rtr_product_big_img_div_back_" + prodDisplayArray[y][0] + replaceBigImgMouseClass +"' style='background-image:url(\"" + clientImgBase + prodDisplayArray[y][4] + "\");'><\/div><div id='panel5RTRProductBigImgDivOver" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_big_img_div_over panel_5_rtr_product_big_img_div_over_" + prodDisplayArray[y][0] +"'" + replaceBigImgHidden;
											if (hoverState==1) {
												replaceBigImgRender += " onmouseout='panel5RTRProdMouseOut(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceBigImgMouseOut + "' onblur='panel5RTRProdMouseOut(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceBigImgMouseOut + "'";
											}
											replaceBigImgRender += ">&nbsp;<\/div><\/div>";
											productHTMLTest = baseProdBigImgHTMLStart + replaceBigImgRender + baseProdBigImgHTMLEnd;
										}
										else {
											productHTMLTest = baseProdBigImgHTMLStart + prodBigImgTagLinkStart + "<img title=\"" + prodDisplayArray[y][2] + "\" alt=\"" + prodDisplayArray[y][2] + "\" id='panel5RTRProductBigImg" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_big_img" + replaceBigImgMouseClass + "' src='" + clientImgBase + replaceBigImgPreset + "'>" + prodBigImgTagLinkEnd + baseProdBigImgHTMLEnd;
										}
									}
									var prodSmImgTagStart = productHTMLTest.indexOf("<!--PRODSMIMG");
									if (prodSmImgTagStart != -1) {
										var prodSmImgTagEnd = productHTMLTest.indexOf(">",prodSmImgTagStart);
										var prodSmImgTagStrip = productHTMLTest.substring(prodSmImgTagStart,(prodSmImgTagEnd+1));
										var baseProdSmImgHTMLStart = productHTMLTest.substr(0,prodSmImgTagStart);
										var baseProdSmImgHTMLEnd = productHTMLTest.substr((prodSmImgTagEnd+1));
										var replaceSmImgMouseOver = "";
										var replaceSmImgMouseOut = "";
										var replaceSmImgMouseClass = "";
										var replaceSmImgRender = "";
										var replaceSmImgPreset = prodDisplayArray[y][5];
										var replaceSmImgHidden = " style='display:none;'";
										var replaceSmImgBackClass = "off";
										var replaceSmImgTest = prodSmImgTagStrip.indexOf(" REPLACE");
										if (replaceSmImgTest != -1) {
											replaceSmImgMouseOver = "panel5RTRProdImgReplace(1," + prodDisplayArray[y][0] + ");";
											replaceSmImgMouseOut = "panel5RTRProdImgReplace(2," + prodDisplayArray[y][0] + ");";
											replaceSmImgMouseClass = " img_replace_active";
											var replaceSmImgLength = prodDisplayArray[y][5].length;
											if(FPC==1) {
												var replaceSmImgPresetStart = prodDisplayArray[y][5].substr(0,(replaceSmImgLength-4));
												var replaceSmImgPresetEnd = prodDisplayArray[y][5].substr((replaceSmImgLength-4),replaceSmImgLength);
												replaceSmImgPreset = replaceSmImgPresetStart + "_2" + replaceSmImgPresetEnd;
												replaceSmImgHidden = "";
												replaceSmImgBackClass = "on";
											}
											else {
												if (prodDisplayArray[y][7] == "1") {
													var replaceSmImgPresetStart = prodDisplayArray[y][5].substr(0,(replaceSmImgLength-4));
													var replaceSmImgPresetEnd = prodDisplayArray[y][5].substr((replaceSmImgLength-4),replaceSmImgLength);
													replaceSmImgPreset = replaceSmImgPresetStart + "_2" + replaceSmImgPresetEnd;
													replaceSmImgHidden = "";
													replaceSmImgBackClass = "on";
												}
											}
										}
										var prodSmImgTagLinkTest = prodSmImgTagStrip.indexOf(" LINK");
										var prodSmImgTagLinkStart = "";
										var prodSmImgTagLinkEnd = "";
										if (prodSmImgTagLinkTest != -1) {
											prodSmImgTagLinkStart += "<a href='' onclick='" + prodCloseThings + "panel5RTRProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + ", \"panel5RTRProductNameVar" + prodDisplayArray[y][0] + "\", 1);return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + prodCloseThings + "panel5RTRProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + ", \"panel5RTRProductNameVar" + prodDisplayArray[y][0] + "\", 1);return false;}'";
											if (hoverState==1) {
												prodSmImgTagLinkStart += " onmouseover='panel5RTRProdMouseOver(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceSmImgMouseOver + "' onfocus='panel5RTRProdMouseOver(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceSmImgMouseOver + "' onmouseout='panel5RTRProdMouseOut(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceSmImgMouseOut + "' onblur='panel5RTRProdMouseOut(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceSmImgMouseOut + "'";
											}
											prodSmImgTagLinkStart += " tabindex='0' title=\"" + prodDisplayArray[y][2] + "\">";
											prodSmImgTagLinkEnd = "<\/a>";
										}
										var prodSmImgTagDivTest = prodSmImgTagStrip.indexOf(" DIV");
										if (prodSmImgTagDivTest != -1) {
											p1PHWon = 1;
											replaceSmImgRender += "<div title=\"" + prodDisplayArray[y][2] + "\" id='panel5RTRProductSmImgDivShell" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_sm_img_div_shell panel_5_rtr_product_sm_img_div_shell_" + prodDisplayArray[y][0] + "' onclick='" + prodCloseThings + "panel5RTRProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + ", \"panel5RTRProductNameVar" + prodDisplayArray[y][0] + "\", 1);' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + prodCloseThings + "panel5RTRProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + ", \"panel5RTRProductNameVar" + prodDisplayArray[y][0] + "\", 1);}'";
											if (hoverState==1) {
												replaceSmImgRender += " onmouseover='panel5RTRProdMouseOver(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceSmImgMouseOver + "' onfocus='panel5RTRProdMouseOver(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceSmImgMouseOver + "'";
											}
											replaceSmImgRender += " tabindex='0' title=\"" + prodDisplayArray[y][2] + "\"><div id='panel5RTRProductSmImgDivBack" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_sm_img_div_back panel_5_rtr_product_sm_img_div_back_" + replaceSmImgBackClass + " panel_5_rtr_product_sm_img_div_back_" + prodDisplayArray[y][0] + replaceSmImgMouseClass +"' style='background-image:url(\"" + clientImgBase + prodDisplayArray[y][5] + "\");'><\/div><div id='panel5RTRProductSmImgDivOver" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_sm_img_div_over panel_5_rtr_product_sm_img_div_over_" + prodDisplayArray[y][0] +"'" + replaceSmImgHidden;
											if (hoverState==1) {
												replaceSmImgRender += " onmouseout='panel5RTRProdMouseOut(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceSmImgMouseOut + "' onblur='panel5RTRProdMouseOut(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceSmImgMouseOut + "'";
											}
											replaceSmImgRender += ">&nbsp;<\/div><\/div>";
											productHTMLTest = baseProdSmImgHTMLStart + replaceSmImgRender + baseProdSmImgHTMLEnd;
										}
										else {
											productHTMLTest = baseProdSmImgHTMLStart + prodSmImgTagLinkStart + "<img title=\"" + prodDisplayArray[y][2] + "\" alt=\"" + prodDisplayArray[y][2] + "\" id='panel5RTRProductSmImg" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_sm_img" + replaceSmImgMouseClass + "' src='" + clientImgBase + replaceSmImgPreset + "'>" + prodSmImgTagLinkEnd + baseProdSmImgHTMLEnd;
										}
									}
									catProdWrite += productHTMLTest;
								}
							}
							catProdWrite += "<\/div>";
							categoryHTMLTest = baseCatProductsHTMLStart + catProdWrite + baseCatProductsHTMLEnd;
						}
						categoryHTML += categoryHTMLTest;
					}
					else {
						if(gLog==1){console.log("ERROR: Unknown Category ID="+categoryID);}
						p1ErrorArray.push("ERROR: Unknown Category ID="+categoryID);
					}
				}
				else {
					if (isRTRFamily == 1) {
						for (v=0; v<famArray.length; v++) {
							var familyHTMLTest = autotextIt(p5TemplateSet.panel5RTRFamilyDiv,"panel5RTRFamily");
							var famNameTagStart = familyHTMLTest.indexOf("<!--FAMNAME");
							if (famNameTagStart != -1) {
								var famNameTagEnd = familyHTMLTest.indexOf(">",famNameTagStart);
								var famNameTagStrip = familyHTMLTest.substring(famNameTagStart,(famNameTagEnd+1));
								var baseFamNameHTMLStart = familyHTMLTest.substr(0,famNameTagStart);
								var baseFamNameHTMLEnd = familyHTMLTest.substr((famNameTagEnd+1));
								var famNameTagLinkTest = famNameTagStrip.indexOf(" LINK");
								var famNameTagLink = "";
								if (famNameTagLinkTest != -1) {
									famNameTagLink += " style='cursor:pointer;' onclick='panel5RTRFamSelectProducts(" + famArray[v][0] + ", \"panel5RTRFamilyName" + famArray[v][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[v][0] + ", \"panel5RTRFamilyNameVar" + famArray[v][0] + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRFamSelectProducts(" + famArray[v][0] + ", \"panel5RTRFamilyName" + famArray[v][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[v][0] + ", \"panel5RTRFamilyNameVar" + famArray[v][0] + "\");}'";
									if (hoverState==1) {
										famNameTagLink += " onmouseover='panel5RTRFamMouseOver(\"panel5RTRFamilyName" + famArray[v][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[v][0] + ");' onfocus='panel5RTRFamMouseOver(\"panel5RTRFamilyName" + famArray[v][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[v][0] + ");' onmouseout='panel5RTRFamMouseOut(\"panel5RTRFamilyName" + famArray[v][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[v][0] + ");' onblur='panel5RTRFamMouseOut(\"panel5RTRFamilyName" + famArray[v][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[v][0] + ");'";
									}
								}
								familyHTMLTest = baseFamNameHTMLStart + "<div id='panel5RTRFamilyName" + famArray[v][0] + "' class='panel_5_rtr_family_name panel_5_rtr_family_name_off'" + famNameTagLink + " tabindex='0' title=\"" + famArray[v][1] + "\">" + famArray[v][1] + "<\/div>" + baseFamNameHTMLEnd;
							}
							var famBigImgTagStart = familyHTMLTest.indexOf("<!--FAMBIGIMG");
							if (famBigImgTagStart != -1) {
								var famBigImgTagEnd = familyHTMLTest.indexOf(">",famBigImgTagStart);
								var famBigImgTagStrip = familyHTMLTest.substring(famBigImgTagStart,(famBigImgTagEnd+1));
								var baseFamBigImgHTMLStart = familyHTMLTest.substr(0,famBigImgTagStart);
								var baseFamBigImgHTMLEnd = familyHTMLTest.substr((famBigImgTagEnd+1));
								var famBigImgTagLinkTest = famNameTagStrip.indexOf(" LINK");
								var famBigImgTagLinkStart = "";
								var famBigImgTagLinkEnd = "";
								if (famBigImgTagLinkTest != -1) {
									famBigImgTagLinkStart += "<a href='' onclick='panel5RTRFamSelectProducts(" + famArray[v][0] + ", \"panel5RTRFamilyName" + famArray[v][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[v][0] + ", \"panel5RTRFamilyNameVar" + famArray[v][0] + "\");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRFamSelectProducts(" + famArray[v][0] + ", \"panel5RTRFamilyName" + famArray[v][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[v][0] + ", \"panel5RTRFamilyNameVar" + famArray[v][0] + "\");return false;}'";
									if (hoverState==1) {
										famBigImgTagLinkStart += " onmouseover='panel5RTRFamMouseOver(\"panel5RTRFamilyName" + famArray[v][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[v][0] + ");' onfocus='panel5RTRFamMouseOver(\"panel5RTRFamilyName" + famArray[v][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[v][0] + ");' onmouseout='panel5RTRFamMouseOut(\"panel5RTRFamilyName" + famArray[v][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[v][0] + ");' onblur='panel5RTRFamMouseOut(\"panel5RTRFamilyName" + famArray[v][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[v][0] + ");'";
									}
									famBigImgTagLinkStart += " tabindex='0' title=\"" + famArray[v][1] + "\">";
									famBigImgTagLinkEnd = "<\/a>";
								}
								familyHTMLTest = baseFamBigImgHTMLStart + famBigImgTagLinkStart + "<img title=\"" + famArray[v][1] + "\" alt=\"" + famArray[v][1] + "\" id='panel5RTRFamilyBigImg" + famArray[v][0] + "' class='panel_5_rtr_family_big_img' src='" + clientImgBase + famArray[v][2] + "'>" + famBigImgTagLinkEnd + baseFamBigImgHTMLEnd;
							}
							var famSmImgTagStart = familyHTMLTest.indexOf("<!--FAMSMIMG");
							if (famSmImgTagStart != -1) {
								var famSmImgTagEnd = familyHTMLTest.indexOf(">",famSmImgTagStart);
								var famSmImgTagStrip = familyHTMLTest.substring(famSmImgTagStart,(famSmImgTagEnd+1));
								var baseFamSmImgHTMLStart = familyHTMLTest.substr(0,famSmImgTagStart);
								var baseFamSmImgHTMLEnd = familyHTMLTest.substr((famSmImgTagEnd+1));
								var famSmImgTagLinkTest = famNameTagStrip.indexOf(" LINK");
								var famSmImgTagLinkStart = "";
								var famSmImgTagLinkEnd = "";
								if (famSmImgTagLinkTest != -1) {
									famSmImgTagLinkStart += "<a href='' onclick='panel5RTRFamSelectProducts(" + famArray[v][0] + ", \"panel5RTRFamilyName" + famArray[v][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[v][0] + ", \"panel5RTRFamilyNameVar" + famArray[v][0] + "\");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRFamSelectProducts(" + famArray[v][0] + ", \"panel5RTRFamilyName" + famArray[v][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[v][0] + ", \"panel5RTRFamilyNameVar" + famArray[v][0] + "\");return false;}'";
									if (hoverState==1) {
										famSmImgTagLinkStart += " onmouseover='panel5RTRFamMouseOver(\"panel5RTRFamilyName" + famArray[v][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[v][0] + ");' onfocus='panel5RTRFamMouseOver(\"panel5RTRFamilyName" + famArray[v][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[v][0] + ");' onmouseout='panel5RTRFamMouseOut(\"panel5RTRFamilyName" + famArray[v][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[v][0] + ");' onblur='panel5RTRFamMouseOut(\"panel5RTRFamilyName" + famArray[v][0] + "\", \"panel_5_rtr_family_name\", panel5RTRFamilyNameVar" + famArray[v][0] + ");'";
									}
									famSmImgTagLinkStart += " tabindex='0' title=\"" + famArray[v][1] + "\">";
									famSmImgTagLinkEnd = "<\/a>";
								}
								familyHTMLTest = baseFamSmImgHTMLStart + famSmImgTagLinkStart + "<img title=\"" + famArray[v][1] + "\" alt=\"" + famArray[v][1] + "\" id='panel5RTRFamilySmImg" + famArray[v][0] + "' class='panel_5_rtr_family_sm_img' src='" + clientImgBase + famArray[v][3] + "'>" + famSmImgTagLinkEnd + baseFamSmImgHTMLEnd;
							}
							categoryHTML += familyHTMLTest;
							for (x=0; x<catArray.length;x++) {
								if (catArray[x][2] == famArray[v][0]) {
									var categoryHTMLTest = autotextIt(p5TemplateSet.panel5RTRCategoryDiv,"panel5RTRCategory");
									var catIterOn = 1;
									while (catIterOn == 1) {
										var catIterStart = categoryHTMLTest.indexOf("<!--CATITER");
										if (catIterStart != -1) {
											var catIterEnd = categoryHTMLTest.indexOf(">",catIterStart);
											var baseCatIterHTMLStart = categoryHTMLTest.substr(0,catIterStart);
											var baseCatIterHTMLEnd = categoryHTMLTest.substr((catIterEnd+1));
											categoryHTMLTest = baseCatIterHTMLStart + catArray[x][0] + baseCatIterHTMLEnd;
										}
										else {
											catIterOn = 0;
										}
									}
									var catBiterOn = 1;
									while (catBiterOn == 1) {
										var catBiterStart = categoryHTMLTest.indexOf("|!--CATITER");
										if (catBiterStart != -1) {
											var catBiterEnd = categoryHTMLTest.indexOf("|",catBiterStart+1);
											var baseCatIterHTMLStart = categoryHTMLTest.substr(0,catBiterStart);
											var baseCatIterHTMLEnd = categoryHTMLTest.substr((catBiterEnd+1));
											categoryHTMLTest = baseCatIterHTMLStart + catArray[x][0] + baseCatIterHTMLEnd;
										}
										else {
											catBiterOn = 0;
										}
									}
									var famNameTagStart = categoryHTMLTest.indexOf("<!--FAMNAME");
									if (famNameTagStart != -1) {
										var famNameTagEnd = categoryHTMLTest.indexOf(">",famNameTagStart);
										var famNameTagStrip = categoryHTMLTest.substring(famNameTagStart,(famNameTagEnd+1));
										var baseFamNameHTMLStart = categoryHTMLTest.substr(0,famNameTagStart);
										var baseFamNameHTMLEnd = categoryHTMLTest.substr((famNameTagEnd+1));
										var famNameValueVal = "FAMILY NAME ERROR";
										for (fn=0; fn<famArray.length; fn++) {
											if (famArray[fn][0] == catArray[x][2]) {
												famNameValueVal = famArray[fn][1];
												break;
											}
										}
										categoryHTMLTest = baseFamNameHTMLStart + "<div id='panel5RTRCategoryFamilyName" + catArray[x][0] + "' class='panel_5_rtr_category_family_name_" + catArray[whatCatIndex][0] + " panel_5_rtr_category_family_name" + replaceImgMouseClass + "'>" + famNameValueVal + "<\/div>" + baseFamNameHTMLEnd;
									}
									var catBadgeTagStart = categoryHTMLTest.indexOf("<!--BADGE");
									if (catBadgeTagStart != -1) {
										var catBadgeTagEnd = categoryHTMLTest.indexOf(">",catBadgeTagStart);
										var catBadgeTagStrip = categoryHTMLTest.substring(catBadgeTagStart,(catBadgeTagEnd+1));
										var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBadgeTagStart);
										var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBadgeTagEnd+1));
										var catBadgeSingle = "";
										var catBadgeSingleStart = catBadgeTagStrip.indexOf(" SINGLE=");
										if (catBadgeSingleStart != -1) {
											var catBadgeSingleEnd = catBadgeTagStrip.indexOf("]", catBadgeSingleStart);
											catBadgeSingle = " " + catBadgeTagStrip.substring((catBadgeSingleStart+9),(catBadgeSingleEnd));
										}
										var catBadgeMultiple = "";
										var catBadgeMultipleStart = catBadgeTagStrip.indexOf(" MULTIPLE=");
										if (catBadgeMultipleStart != -1) {
											var catBadgeMultipleEnd = catBadgeTagStrip.indexOf("]", catBadgeMultipleStart);
											catBadgeMultiple = " " + catBadgeTagStrip.substring((catBadgeMultipleStart+11),(catBadgeMultipleEnd));
										}
										var cbc = 0;
										for (p=0; p<prodDisplayArray.length; p++) {
											if (prodDisplayArray[p][8] == catArray[x][0]) {
												cbc++;
											}
										}
										if (cbc == 1) {
											var catBadgeWrite = cbc + catBadgeSingle;
										}
										else {
											var catBadgeWrite = cbc + catBadgeMultiple;
										}
										categoryHTMLTest = baseCatBigImgHTMLStart + "<span id='panel5RTRCatBadge" + catArray[x][0] + "' class='counter_badge panel_5_rtr_cat_badge'>" + catBadgeWrite + "<\/span>" + baseCatBigImgHTMLEnd;
									}
									var catNameTagStart = categoryHTMLTest.indexOf("<!--CATNAME");
									if (catNameTagStart != -1) {
										var catNameTagEnd = categoryHTMLTest.indexOf(">",catNameTagStart);
										var catNameTagStrip = categoryHTMLTest.substring(catNameTagStart,(catNameTagEnd+1));
										var baseCatNameHTMLStart = categoryHTMLTest.substr(0,catNameTagStart);
										var baseCatNameHTMLEnd = categoryHTMLTest.substr((catNameTagEnd+1));
										var catNameValueStart = catNameTagStrip.indexOf(" VALUE=");
										if (catNameValueStart != -1) {
											var catNameValueEnd = catNameTagStrip.indexOf("]", catNameValueStart);
											var catNameValueVal = catNameTagStrip.substring((catNameValueStart+8),(catNameValueEnd));
										}
										else {
											var catNameValueVal = catArray[x][1];
										}
										var replaceImgTest = catNameTagStrip.indexOf(" REPLACE");
										if (replaceImgTest != -1) {
											var replaceImgMouseOver = "panel5RTRCatImgReplace(1," + catArray[x][0] + ");";
											var replaceImgMouseOut = "panel5RTRCatImgReplace(2," + catArray[x][0] + ");";
											var replaceImgMouseClass = " img_replace_active";
										}
										else {
											var replaceImgMouseOver = "";
											var replaceImgMouseOut = "";
											var replaceImgMouseClass = "";
										}
										var catNameTagLinkTest = catNameTagStrip.indexOf(" LINK");
										var catNameTagLink = "";
										if (catNameTagLinkTest != -1) {
											if (categoryNoSelect == 0) {
												var catNameOnClickVar = " onclick='panel5RTRCatSelectProducts(" + catArray[x][0] + ", \"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ", \"panel5RTRCategoryNameVar" + catArray[x][0] + "\"," + categoryCartVar + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRCatSelectProducts(" + catArray[x][0] + ", \"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ", \"panel5RTRCategoryNameVar" + catArray[x][0] + "\"," + categoryCartVar + ");}'";
											}
											else {
												var catNameOnClickVar = " onclick='" + catActivateLinkStart + catArray[x][0] + catActivateLinkEnd + "return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + catActivateLinkStart + catArray[x][0] + catActivateLinkEnd + "return false;}'";
											}
											catNameTagLink += " style='cursor:pointer;'" + catNameOnClickVar;
											if (hoverState==1) {
												catNameTagLink += " onmouseover='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceImgMouseOver + "' onfocus='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceImgMouseOver + "' onmouseout='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceImgMouseOut + "' onblur='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceImgMouseOut + "'";
											}
										}
										categoryHTMLTest = baseCatNameHTMLStart + "<a name='panel5RTRCategoryAnchor" + catArray[x][0] + "' id='panel5RTRCategoryAnchor" + catArray[x][0] + "'><\/a><div id='panel5RTRCategoryName" + catArray[x][0] + "' class='panel_5_rtr_category_name_" + catArray[x][0] + " panel_5_rtr_category_name" + replaceImgMouseClass + " panel_5_rtr_category_name_off'" + catNameTagLink + " tabindex='0' title=\"" + catNameValueVal + "\">" + catNameValueVal + "<\/div>" + baseCatNameHTMLEnd;
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
										var categoryNoImgStart = catAllTagStrip.indexOf(" NOIMG");
										if (categoryNoImgStart != -1) {
											p1CatAllToImg = 0;
										}
										var replaceImgTest = catAllTagStrip.indexOf(" REPLACE");
										if (replaceImgTest != -1) {
											var replaceImgMouseOver = "panel5RTRCatImgReplace(1," + catArray[x][0] + ");";
											var replaceImgMouseOut = "panel5RTRCatImgReplace(2," + catArray[x][0] + ");";
											var replaceImgMouseClass = " img_replace_active";
										}
										else {
											var replaceImgMouseOver = "";
											var replaceImgMouseOut = "";
											var replaceImgMouseClass = "";
										}
										var catAllTagLinkTest = catAllTagStrip.indexOf(" LINK");
										var catAllTagLink = "";
										if (catAllTagLinkTest != -1) {
											catAllTagLink += " style='cursor:pointer;' onclick='panel5RTRCatSelectProducts(" + catArray[x][0] + ", \"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name_all\", panel5RTRCategoryNameVar" + catArray[x][0] + ", \"panel5RTRCategoryNameVar" + catArray[x][0] + "\"," + categoryCartVar + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRCatSelectProducts(" + catArray[x][0] + ", \"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name_all\", panel5RTRCategoryNameVar" + catArray[x][0] + ", \"panel5RTRCategoryNameVar" + catArray[x][0] + "\"," + categoryCartVar + ");}'";
											if (hoverState==1) {
												catAllTagLink += " onmouseover='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceImgMouseOver + "' onfocus='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceImgMouseOver + "' onmouseout='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceImgMouseOut + "' onblur='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceImgMouseOut + "'";
											}
										}
										categoryHTMLTest = baseCatAllHTMLStart + "<div id='panel5RTRCategoryName" + catArray[x][0] + "All' class='panel_5_rtr_category_name_all_" + catArray[x][0] + " panel_5_rtr_category_name_all" + replaceImgMouseClass + " panel_5_rtr_category_name_all_off'" + catAllTagLink + " tabindex='0' title=\"" + catAllValueVal + "\">" + catAllValueVal + "<\/div>" + baseCatAllHTMLEnd;
									}
									var catBigImgTagStart = categoryHTMLTest.indexOf("<!--CATBIGIMG");
									if (catBigImgTagStart != -1) {
										var catBigImgTagEnd = categoryHTMLTest.indexOf(">",catBigImgTagStart);
										var catBigImgTagStrip = categoryHTMLTest.substring(catBigImgTagStart,(catBigImgTagEnd+1));
										var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBigImgTagStart);
										var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBigImgTagEnd+1));
										var replaceBigImgMouseOver = "";
										var replaceBigImgMouseOut = "";
										var replaceBigImgMouseClass = "";
										var replaceBigImgRender = "";
										var replaceBigImgPreset = catArray[x][3];
										var replaceBigImgHidden = " style='display:none;'";
										var replaceBigImgBackClass = "off";
										var replaceBigImgTest = catBigImgTagStrip.indexOf(" REPLACE");
										if (replaceBigImgTest != -1) {
											replaceBigImgMouseOver = "panel5RTRCatImgReplace(1," + catArray[x][0] + ");";
											replaceBigImgMouseOut = "panel5RTRCatImgReplace(2," + catArray[x][0] + ");";
											replaceBigImgMouseClass = " img_replace_active";
										}
										if (categoryNoSelect == 0) {
											var catBigImgOnClickVar = " onclick='panel5RTRCatSelectProducts(" + catArray[x][0] + ", \"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ", \"panel5RTRCategoryNameVar" + catArray[x][0] + "\"," + categoryCartVar + ");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRCatSelectProducts(" + catArray[x][0] + ", \"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ", \"panel5RTRCategoryNameVar" + catArray[x][0] + "\"," + categoryCartVar + ");return false;}'";
										}
										else {
											var catBigImgOnClickVar = " onclick='" + catActivateLinkStart + catArray[x][0] + catActivateLinkEnd + "return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + catActivateLinkStart + catArray[x][0] + catActivateLinkEnd + "return false;}'";
										}
										var postImgBig = " style='background-image:url(\"" + clientImgBase + catArray[x][3] + "\");'";
										if (panel5RTRPostLoad == 1) {
											postImgBig = "";
										};
										var catBigImgTagLinkTest = catBigImgTagStrip.indexOf(" LINK");
										var catBigImgTagLinkStart = "";
										var catBigImgTagLinkEnd = "";
										if (catBigImgTagLinkTest != -1) {
											catBigImgTagLinkStart += "<a href=''" + catBigImgOnClickVar;
											if (hoverState==1) {
												catBigImgTagLinkStart += " onmouseover='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceBigImgMouseOver + "' onfocus='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceBigImgMouseOver + "' onmouseout='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceBigImgMouseOut + "' onblur='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceBigImgMouseOut + "'";
											}
											catBigImgTagLinkStart += " tabindex='0' title=\"" + catArray[x][1] + "\">";
											catBigImgTagLinkEnd = "<\/a>";
										}
										var catBigImgTagDivTest = catBigImgTagStrip.indexOf(" DIV");
										if (catBigImgTagDivTest != -1) {
											p1CHWon = 1;
											replaceBigImgRender += "<div title=\"" + catArray[x][1] + "\" id='panel5RTRCategoryBigImgDivShell" + catArray[x][0] + "' class='panel_5_rtr_category_big_img_div_shell panel_5_rtr_category_big_img_div_shell_" + catArray[x][0] + "'" + catBigImgOnClickVar;
											if (hoverState==1) {
												replaceBigImgRender += " onmouseover='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceBigImgMouseOver + "' onfocus='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceBigImgMouseOver + "'";
											}
											replaceBigImgRender += " tabindex='0' title=\"" + catArray[x][1] + "\"><div id='panel5RTRCategoryBigImgDivBack" + catArray[x][0] + "' class='panel_5_rtr_category_big_img_div_back panel_5_rtr_category_big_img_div_back_" + replaceBigImgBackClass + " panel_5_rtr_category_big_img_div_back_" + catArray[x][0] + replaceBigImgMouseClass +"'" + postImgBig + "><\/div><div id='panel5RTRCategoryBigImgDivOver" + catArray[x][0] + "' class='panel_5_rtr_category_big_img_div_over panel_5_rtr_category_big_img_div_over_" + catArray[x][0] +"'" + replaceBigImgHidden;
											if (hoverState==1) {
												replaceBigImgRender += " onmouseout='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceBigImgMouseOut + "' onblur='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceBigImgMouseOut + "'";
											}
											replaceBigImgRender += ">&nbsp;<\/div><\/div>";
											categoryHTMLTest = baseCatBigImgHTMLStart + replaceBigImgRender + baseCatBigImgHTMLEnd;
										}
										else {
											categoryHTMLTest = baseCatBigImgHTMLStart + catBigImgTagLinkStart + "<img title=\"" + catArray[x][1] + "\" alt=\"" + catArray[x][1] + "\" id='panel5RTRCategoryBigImg" + catArray[x][0] + "' class='panel_5_rtr_category_big_img panel_5_rtr_category_big_img_" +catArray[x][0] + replaceBigImgMouseClass + "' src='" + clientImgBase + catArray[x][3] + "'>" + catBigImgTagLinkEnd + baseCatBigImgHTMLEnd;
										}
									}
									var catSmImgTagStart = categoryHTMLTest.indexOf("<!--CATSMIMG");
									if (catSmImgTagStart != -1) {
										var catSmImgTagEnd = categoryHTMLTest.indexOf(">",catSmImgTagStart);
										var catSmImgTagStrip = categoryHTMLTest.substring(catSmImgTagStart,(catSmImgTagEnd+1));
										var baseCatSmImgHTMLStart = categoryHTMLTest.substr(0,catSmImgTagStart);
										var baseCatSmImgHTMLEnd = categoryHTMLTest.substr((catSmImgTagEnd+1));
										var replaceSmImgMouseOver = "";
										var replaceSmImgMouseOut = "";
										var replaceSmImgMouseClass = "";
										var replaceSmImgRender = "";
										var replaceSmImgPreset = catArray[x][4];
										var replaceSmImgHidden = " style='display:none;'";
										var replaceSmImgBackClass = "off";
										var replaceSmImgTest = catSmImgTagStrip.indexOf(" REPLACE");
										if (replaceSmImgTest != -1) {
											replaceSmImgMouseOver = "panel5RTRCatImgReplace(1," + catArray[x][0] + ");";
											replaceSmImgMouseOut = "panel5RTRCatImgReplace(2," + catArray[x][0] + ");";
											replaceSmImgMouseClass = " img_replace_active";
										}
										if (categoryNoSelect == 0) {
											var catSmImgOnClickVar = " onclick='panel5RTRCatSelectProducts(" + catArray[x][0] + ", \"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ", \"panel5RTRCategoryNameVar" + catArray[x][0] + "\"," + categoryCartVar + ");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRCatSelectProducts(" + catArray[x][0] + ", \"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ", \"panel5RTRCategoryNameVar" + catArray[x][0] + "\"," + categoryCartVar + ");return false;}'";
										}
										else {
											var catSmImgOnClickVar = " onclick='" + catActivateLinkStart + catArray[x][0] + catActivateLinkEnd + "return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + catActivateLinkStart + catArray[x][0] + catActivateLinkEnd + "return false;}'";
										}
										var postImgBig = " style='background-image:url(\"" + clientImgBase + catArray[x][4] + "\");'";
										if (panel5RTRPostLoad == 1) {
											postImgBig = "";
										};
										var catSmImgTagLinkTest = catSmImgTagStrip.indexOf(" LINK");
										var catSmImgTagLinkStart = "";
										var catSmImgTagLinkEnd = "";
										if (catSmImgTagLinkTest != -1) {
											catSmImgTagLinkStart += "<a href=''" + catSmImgOnClickVar;
											if (hoverState==1) {
												catSmImgTagLinkStart += " onmouseover='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceSmImgMouseOver + "' onfocus='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceSmImgMouseOver + "' onmouseout='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceSmImgMouseOut + "' onblur='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceSmImgMouseOut + "'";
											}
											catSmImgTagLinkStart += " tabindex='0' title=\"" + catArray[x][1] + "\">";
											catSmImgTagLinkEnd = "<\/a>";
										}
										var catSmImgTagDivTest = catSmImgTagStrip.indexOf(" DIV");
										if (catSmImgTagDivTest != -1) {
											p1CHWon = 1;
											replaceSmImgRender += "<div title=\"" + catArray[x][1] + "\" id='panel5RTRCategorySmImgDivShell" + catArray[x][0] + "' class='panel_5_rtr_category_sm_img_div_shell panel_5_rtr_category_sm_img_div_shell_" + catArray[x][0] + "'" + catSmImgOnClickVar;
											if (hoverState==1) {
												replaceSmImgRender += " onmouseover='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceSmImgMouseOver + "' onfocus='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceSmImgMouseOver + "'";
											}
											replaceSmImgRender += " tabindex='0' title=\"" + catArray[x][1] + "\"><div id='panel5RTRCategorySmImgDivBack" + catArray[x][0] + "' class='panel_5_rtr_category_sm_img_div_back panel_5_rtr_category_sm_img_div_back_" + replaceSmImgBackClass + " panel_5_rtr_category_sm_img_div_back_" + catArray[x][0] + replaceSmImgMouseClass +"'" + postImgBig + "><\/div><div id='panel5RTRCategorySmImgDivOver" + catArray[x][0] + "' class='panel_5_rtr_category_sm_img_div_over panel_5_rtr_category_sm_img_div_over_" + catArray[x][0] +"'" + replaceSmImgHidden;
											if (hoverState==1) {
												replaceSmImgRender += " onmouseout='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceSmImgMouseOut + "' onblur='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceSmImgMouseOut + "'";
											}
											replaceSmImgRender += ">&nbsp;<\/div><\/div>";
											categoryHTMLTest = baseCatSmImgHTMLStart + replaceSmImgRender + baseCatSmImgHTMLEnd;
										}
										else {
											categoryHTMLTest = baseCatSmImgHTMLStart + catSmImgTagLinkStart + "<img title=\"" + catArray[x][1] + "\" alt=\"" + catArray[x][1] + "\" id='panel5RTRCategorySmImg" + catArray[x][0] + "' class='panel_5_rtr_category_sm_img panel_5_rtr_category_sm_img_" +catArray[x][0] + replaceSmImgMouseClass + "' src='" + clientImgBase + catArray[x][4] + "'>" + catSmImgTagLinkEnd + baseCatSmImgHTMLEnd;
										}
									}
									var catProductsTagStart = categoryHTMLTest.indexOf("<!--CATPRODUCTS");
									if (catProductsTagStart != -1) {
										var catProductsTagEnd = categoryHTMLTest.indexOf(">",catProductsTagStart);
										var catProductsTagStrip = categoryHTMLTest.substring(catProductsTagStart,(catProductsTagEnd+1));
										var baseCatProductsHTMLStart = categoryHTMLTest.substr(0,catProductsTagStart);
										var baseCatProductsHTMLEnd = categoryHTMLTest.substr((catProductsTagEnd+1));
										var simpleCAClass = "";
										var simpleCADisplay = "";
										if (catActivateClass != "") {
											simpleCAClass = catActivateClass + " " + catActivateClass + "_" + catArray[x][0] + " panel_close_me ";
											simpleCADisplay = " style='display:none;'";
										}
										var catProdWrite = "<div id='panel5RTRCategoryProductsShell" + catArray[x][0] + "' class='" + simpleCAClass + "panel_5_rtr_category_products_shell panel_5_rtr_category_products_shell_" + catArray[x][0] + "'" + simpleCADisplay + ">";
										for (y=0; y<prodDisplayArray.length; y++) {
											if (prodDisplayArray[y][8] == catArray[x][0]) {
												if (window["catActiveTrack"+prodDisplayArray[y][8]] == 1) {
													var productHTMLTest = autotextIt(p5TemplateSet.panel5RTRCatProductDiv,"panel5RTRCatProduct");
												}
												else {
													var productHTMLTest = autotextIt(p5TemplateSet.panel5RTRProductDiv,"panel5RTRProduct");
												}
												var prodCloseThings = "";
												var prodCloseTagStart = productHTMLTest.indexOf("<!--PRODCLOSE");
												if (prodCloseTagStart != -1) {
													var prodCloseTagEnd = productHTMLTest.indexOf(">",prodCloseTagStart);
													var baseProdCloseHTMLStart = productHTMLTest.substr(0,prodCloseTagStart);
													var baseProdCloseHTMLEnd = productHTMLTest.substr((prodCloseTagEnd+1));
													prodCloseThings = "genericCloseMe();";
													productHTMLTest = baseProdCloseHTMLStart + baseProdCloseHTMLEnd;
												}
												var prodIterTagStart = productHTMLTest.indexOf("|!--PRODITER");
												if (prodIterTagStart != -1) {
													var prodIterTagEnd = productHTMLTest.indexOf("|",prodIterTagStart+1);
													var prodIterTagStrip = productHTMLTest.substring(prodIterTagStart,(prodIterTagEnd+1));
													var baseProdIterHTMLStart = productHTMLTest.substr(0,prodIterTagStart);
													var baseProdIterHTMLEnd = productHTMLTest.substr((prodIterTagEnd+1));
													productHTMLTest = baseProdIterHTMLStart + prodDisplayArray[y][0] + baseProdIterHTMLEnd;
												}
												var famNameTagStart = productHTMLTest.indexOf("<!--FAMNAME");
												if (famNameTagStart != -1) {
													var famNameTagEnd = productHTMLTest.indexOf(">",famNameTagStart);
													var famNameTagStrip = productHTMLTest.substring(famNameTagStart,(famNameTagEnd+1));
													var baseFamNameHTMLStart = productHTMLTest.substr(0,famNameTagStart);
													var baseFamNameHTMLEnd = productHTMLTest.substr((famNameTagEnd+1));
													var famNameValueVal = "FAMILY NAME ERROR";
													var famProdCatNum = -1;
													for (cn=0; cn<catArray.length; cn++) {
														if (catArray[cn][0] == prodDisplayArray[y][8]) {
															famProdCatNum = cn;
															break;
														}
													}
													if (famProdCatNum != -1) {
														for (fn=0; fn<famArray.length; fn++) {
															if (famArray[fn][0] == catArray[famProdCatNum][2]) {
																famNameValueVal = famArray[fn][1];
																break;
															}
														}
													}
													productHTMLTest = baseFamNameHTMLStart + "<div id='panel5RTRProductFamilyName" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_family_name_" + prodDisplayArray[y][0] + " panel_5_rtr_product_family_name'>" + famNameValueVal + "<\/div>" + baseFamNameHTMLEnd;
												}
												var catNameTagStart = productHTMLTest.indexOf("<!--CATNAME");
												if (catNameTagStart != -1) {
													var catNameTagEnd = productHTMLTest.indexOf(">",catNameTagStart);
													var catNameTagStrip = productHTMLTest.substring(catNameTagStart,(catNameTagEnd+1));
													var baseCatNameHTMLStart = productHTMLTest.substr(0,catNameTagStart);
													var baseCatNameHTMLEnd = productHTMLTest.substr((catNameTagEnd+1));
													var catNameValueVal = "CATEGORY NAME ERROR";
													for (cn=0; cn<catArray.length; cn++) {
														if (catArray[cn][0] == prodDisplayArray[y][8]) {
															catNameValueVal = catArray[cn][1];
															break;
														}
													}
													productHTMLTest = baseCatNameHTMLStart + "<div id='panel5RTRProductCategoryName" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_category_name" + prodDisplayArray[y][0] + " panel_5_rtr_product_category_name'>" + catNameValueVal + "<\/div>" + baseCatNameHTMLEnd;
												}
												var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
												if (prodDiscTagStart != -1) {
													var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
													var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
													var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
													var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
													var prodDiscWrite = "";
													var discVal = prodDisplayArray[y][6];
													if (discVal != 1) {
														prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel5RTRProduct_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
													}
													productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
												}
												var prodNameTagStart = productHTMLTest.indexOf("<!--PRODNAME");
												if (prodNameTagStart != -1) {
													var prodNameTagEnd = productHTMLTest.indexOf(">",prodNameTagStart);
													var prodNameTagStrip = productHTMLTest.substring(prodNameTagStart,(prodNameTagEnd+1));
													var baseProdNameHTMLStart = productHTMLTest.substr(0,prodNameTagStart);
													var baseProdNameHTMLEnd = productHTMLTest.substr((prodNameTagEnd+1));
													var replaceImgTest = prodNameTagStrip.indexOf(" REPLACE");
													if (replaceImgTest != -1) {
														var replaceImgMouseOver = "panel5RTRProdImgReplace(1," + prodDisplayArray[y][0] + ");";
														var replaceImgMouseOut = "panel5RTRProdImgReplace(2," + prodDisplayArray[y][0] + ");";
														var replaceImgMouseClass = " img_replace_active";
													}
													else {
														var replaceImgMouseOver = "";
														var replaceImgMouseOut = "";
														var replaceImgMouseClass = "";
													}
													var descTest = prodNameTagStrip.indexOf(" DESC");
													if (descTest != -1) {
														var descVal = "<span class='panel_5_rtr_product_name_desc'>" + prodDisplayArray[y][3] + "<\/span>";
													}
													else {
														var descVal = "";
													}
													var prodPopupTestStart = prodNameTagStrip.indexOf(" POPUP=");
													var prodPopupMO = "";
													var prodPopupDIV = "";
													if (prodPopupTestStart != -1) {
														var prodPopupTestEnd = prodNameTagStrip.indexOf("]",prodPopupTestStart);
														var prodPopupTimeout = prodNameTagStrip.substring((prodPopupTestStart+8),(prodPopupTestEnd));
														prodPopupMO = "panel5RTRProdPopup(\"" + prodDisplayArray[y][0] + "\"," + prodPopupTimeout + ");";
														prodPopupDIV = "<div id='panel5RTRProductPopup" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_popup' style='display:none;'><\/div>";
													}
													var prodNameTagLinkTest = prodNameTagStrip.indexOf(" LINK");
													var prodNameTagLink = "";
													if (prodNameTagLinkTest != -1) {
														prodNameTagLink += " style='cursor:pointer;' onclick='" + prodCloseThings + "panel5RTRProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + ", \"panel5RTRProductNameVar" + prodDisplayArray[y][0] + "\", 1);' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + prodCloseThings + "panel5RTRProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + ", \"panel5RTRProductNameVar" + prodDisplayArray[y][0] + "\", 1);}'";
														if (hoverState==1) {
															prodNameTagLink += " onmouseover='panel5RTRProdMouseOver(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceImgMouseOver + prodPopupMO + "' onfocus='panel5RTRProdMouseOver(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceImgMouseOver + prodPopupMO + "' onmouseout='panel5RTRProdMouseOut(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceImgMouseOut + "' onblur='panel5RTRProdMouseOut(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceImgMouseOut + "'";
														}
													}
													var prodNameItalicStart = prodNameTagStrip.indexOf(" FNTAW=");
													if (prodNameItalicStart != -1) {
														var prodNameItalicEnd = prodNameTagStrip.indexOf("]",prodNameItalicStart);
														var prodNameItalicVar = "<i class='fa " + prodNameTagStrip.substring((prodNameItalicStart+8),(prodNameItalicEnd)) + "'><\/i>";
													}
													else {
														var prodNameItalicVar = "";
													}
													var prodNameSizeStart = prodNameTagStrip.indexOf(" SIZE");
													if (prodNameSizeStart != -1) {
														var prodNameDispVal = prodDisplayArray[y][21];
													}
													else {
														var prodNameDispVal = prodDisplayArray[y][2];
													}
													if(FPC==1) {
														var isProductChecked = 1;
														window["panel5RTRProductNameVar"+prodDisplayArray[y][0]] = 1;
														var baseProductStyle = " panel_5_rtr_product_name_on";
													}
													else {
														if (prodDisplayArray[y][7] == "1") {
															var isProductChecked = 1;
															window["panel5RTRProductNameVar"+prodDisplayArray[y][0]] = 1;
															var baseProductStyle = " panel_5_rtr_product_name_on";
														}
														else {
															var isProductChecked = 0;
															var baseProductStyle = " panel_5_rtr_product_name_off";
														}
													}
													productHTMLTest = baseProdNameHTMLStart + "<a name='panel5RTRProductAnchor" + prodDisplayArray[y][0] + "' id='panel5RTRProductAnchor" + prodDisplayArray[y][0] + "'><\/a><div id='panel5RTRProductName" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_name" + replaceImgMouseClass + baseProductStyle + "'" + prodNameTagLink + " tabindex='0' title=\"" + prodNameDispVal + "\">" + prodNameItalicVar + "<span class='panel_5_rtr_product_name_name'>" + prodNameDispVal + "<\/span>" + descVal + "<\/div>" + prodPopupDIV + baseProdNameHTMLEnd;
												}
												var prodDescTagStart = productHTMLTest.indexOf("<!--PRODDESC");
												if (prodDescTagStart != -1) {
													var prodDescTagEnd = productHTMLTest.indexOf(">",prodDescTagStart);
													var prodDescTagStrip = productHTMLTest.substring(prodDescTagStart,(prodDescTagEnd+1));
													var baseProdDescHTMLStart = productHTMLTest.substr(0,prodDescTagStart);
													var baseProdDescHTMLEnd = productHTMLTest.substr((prodDescTagEnd+1));
													productHTMLTest = baseProdDescHTMLStart + "<div id='panel5RTRProductDesc" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_desc'>" + prodDisplayArray[y][3] + "<\/div>" + baseProdDescHTMLEnd;
												}
												var prodCatTagStart = productHTMLTest.indexOf("<!--PRODCAT");
												if (prodCatTagStart != -1) {
													var prodCatTagEnd = productHTMLTest.indexOf(">",prodCatTagStart);
													var prodCatTagStrip = productHTMLTest.substring(prodCatTagStart,(prodCatTagEnd+1));
													var baseProdCatHTMLStart = productHTMLTest.substr(0,prodCatTagStart);
													var baseProdCatHTMLEnd = productHTMLTest.substr((prodCatTagEnd+1));
													productHTMLTest = baseProdCatHTMLStart + "<div id='panel5RTRProductCat" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_cat'>" + prodDisplayArray[y][16] + "<\/div>" + baseProdCatHTMLEnd;
												}
												var prodBigImgTagStart = productHTMLTest.indexOf("<!--PRODBIGIMG");
												if (prodBigImgTagStart != -1) {
													var prodBigImgTagEnd = productHTMLTest.indexOf(">",prodBigImgTagStart);
													var prodBigImgTagStrip = productHTMLTest.substring(prodBigImgTagStart,(prodBigImgTagEnd+1));
													var baseProdBigImgHTMLStart = productHTMLTest.substr(0,prodBigImgTagStart);
													var baseProdBigImgHTMLEnd = productHTMLTest.substr((prodBigImgTagEnd+1));
													var replaceBigImgMouseOver = "";
													var replaceBigImgMouseOut = "";
													var replaceBigImgMouseClass = "";
													var replaceBigImgRender = "";
													var replaceBigImgPreset = prodDisplayArray[y][4];
													var replaceBigImgHidden = " style='display:none;'";
													var replaceBigImgBackClass = "off";
													var replaceBigImgTest = prodBigImgTagStrip.indexOf(" REPLACE");
													if (replaceBigImgTest != -1) {
														replaceBigImgMouseOver = "panel5RTRProdImgReplace(1," + prodDisplayArray[y][0] + ");";
														replaceBigImgMouseOut = "panel5RTRProdImgReplace(2," + prodDisplayArray[y][0] + ");";
														replaceBigImgMouseClass = " img_replace_active";
														var replaceBigImgLength = prodDisplayArray[y][4].length;
														if(FPC==1) {
															var replaceBigImgPresetStart = prodDisplayArray[y][4].substr(0,(replaceBigImgLength-4));
															var replaceBigImgPresetEnd = prodDisplayArray[y][4].substr((replaceBigImgLength-4),replaceBigImgLength);
															replaceBigImgPreset = replaceBigImgPresetStart + "_2" + replaceBigImgPresetEnd;
															replaceBigImgHidden = "";
															replaceBigImgBackClass = "on";
														}
														else {
															if (prodDisplayArray[y][7] == "1") {
																var replaceBigImgPresetStart = prodDisplayArray[y][4].substr(0,(replaceBigImgLength-4));
																var replaceBigImgPresetEnd = prodDisplayArray[y][4].substr((replaceBigImgLength-4),replaceBigImgLength);
																replaceBigImgPreset = replaceBigImgPresetStart + "_2" + replaceBigImgPresetEnd;
																replaceBigImgHidden = "";
																replaceBigImgBackClass = "on";
															}
														}
													}
													var prodBigImgTagLinkTest = prodBigImgTagStrip.indexOf(" LINK");
													var prodBigImgTagLinkStart = "";
													var prodBigImgTagLinkEnd = "";
													if (prodBigImgTagLinkTest != -1) {
														prodBigImgTagLinkStart += "<a href='' onclick='" + prodCloseThings + "panel5RTRProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + ", \"panel5RTRProductNameVar" + prodDisplayArray[y][0] + "\", 1);return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + prodCloseThings + "panel5RTRProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + ", \"panel5RTRProductNameVar" + prodDisplayArray[y][0] + "\", 1);return false;}'";
														if (hoverState==1) {
															prodBigImgTagLinkStart += " onmouseover='panel5RTRProdMouseOver(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceBigImgMouseOver + "' onfocus='panel5RTRProdMouseOver(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceBigImgMouseOver + "' onmouseout='panel5RTRProdMouseOut(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceBigImgMouseOut + "' onblur='panel5RTRProdMouseOut(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceBigImgMouseOut + "'";
														}
														prodBigImgTagLinkStart += " tabindex='0' title=\"" + prodDisplayArray[y][2] + "\">";
														prodBigImgTagLinkEnd = "<\/a>";
													}
													var prodBigImgTagDivTest = prodBigImgTagStrip.indexOf(" DIV");
													if (prodBigImgTagDivTest != -1) {
														p1PHWon = 1;
														replaceBigImgRender += "<div title=\"" + prodDisplayArray[y][2] + "\" id='panel5RTRProductBigImgDivShell" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_big_img_div_shell panel_5_rtr_product_big_img_div_shell_" + prodDisplayArray[y][0] + "' onclick='" + prodCloseThings + "panel5RTRProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + ", \"panel5RTRProductNameVar" + prodDisplayArray[y][0] + "\", 1);' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + prodCloseThings + "panel5RTRProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + ", \"panel5RTRProductNameVar" + prodDisplayArray[y][0] + "\", 1);}'";
														if (hoverState==1) {
															replaceBigImgRender += " onmouseover='panel5RTRProdMouseOver(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceBigImgMouseOver + "' onfocus='panel5RTRProdMouseOver(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceBigImgMouseOver + "'";
														}
														replaceBigImgRender += " tabindex='0' title=\"" + prodDisplayArray[y][2] + "\"><div id='panel5RTRProductBigImgDivBack" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_big_img_div_back panel_5_rtr_product_big_img_div_back_" + replaceBigImgBackClass + " panel_5_rtr_product_big_img_div_back_" + prodDisplayArray[y][0] + replaceBigImgMouseClass +"' style='background-image:url(\"" + clientImgBase + prodDisplayArray[y][4] + "\");'><\/div><div id='panel5RTRProductBigImgDivOver" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_big_img_div_over panel_5_rtr_product_big_img_div_over_" + prodDisplayArray[y][0] +"'" + replaceBigImgHidden;
														if (hoverState==1) {
															replaceBigImgRender += " onmouseout='panel5RTRProdMouseOut(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceBigImgMouseOut + "' onblur='panel5RTRProdMouseOut(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceBigImgMouseOut + "'";
														}
														replaceBigImgRender += ">&nbsp;<\/div><\/div>";
														productHTMLTest = baseProdBigImgHTMLStart + replaceBigImgRender + baseProdBigImgHTMLEnd;
													}
													else {
														productHTMLTest = baseProdBigImgHTMLStart + prodBigImgTagLinkStart + "<img title=\"" + prodDisplayArray[y][2] + "\" alt=\"" + prodDisplayArray[y][2] + "\" id='panel5RTRProductBigImg" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_big_img" + replaceBigImgMouseClass + "' src='" + clientImgBase + replaceBigImgPreset + "'>" + prodBigImgTagLinkEnd + baseProdBigImgHTMLEnd;
													}
												}
												var prodSmImgTagStart = productHTMLTest.indexOf("<!--PRODSMIMG");
												if (prodSmImgTagStart != -1) {
													var prodSmImgTagEnd = productHTMLTest.indexOf(">",prodSmImgTagStart);
													var prodSmImgTagStrip = productHTMLTest.substring(prodSmImgTagStart,(prodSmImgTagEnd+1));
													var baseProdSmImgHTMLStart = productHTMLTest.substr(0,prodSmImgTagStart);
													var baseProdSmImgHTMLEnd = productHTMLTest.substr((prodSmImgTagEnd+1));
													var replaceSmImgMouseOver = "";
													var replaceSmImgMouseOut = "";
													var replaceSmImgMouseClass = "";
													var replaceSmImgRender = "";
													var replaceSmImgPreset = prodDisplayArray[y][5];
													var replaceSmImgHidden = " style='display:none;'";
													var replaceSmImgBackClass = "off";
													var replaceSmImgTest = prodSmImgTagStrip.indexOf(" REPLACE");
													if (replaceSmImgTest != -1) {
														replaceSmImgMouseOver = "panel5RTRProdImgReplace(1," + prodDisplayArray[y][0] + ");";
														replaceSmImgMouseOut = "panel5RTRProdImgReplace(2," + prodDisplayArray[y][0] + ");";
														replaceSmImgMouseClass = " img_replace_active";
														var replaceSmImgLength = prodDisplayArray[y][5].length;
														if(FPC==1) {
															var replaceSmImgPresetStart = prodDisplayArray[y][5].substr(0,(replaceSmImgLength-4));
															var replaceSmImgPresetEnd = prodDisplayArray[y][5].substr((replaceSmImgLength-4),replaceSmImgLength);
															replaceSmImgPreset = replaceSmImgPresetStart + "_2" + replaceSmImgPresetEnd;
															replaceSmImgHidden = "";
															replaceSmImgBackClass = "on";
														}
														else {
															if (prodDisplayArray[y][7] == "1") {
																var replaceSmImgPresetStart = prodDisplayArray[y][5].substr(0,(replaceSmImgLength-4));
																var replaceSmImgPresetEnd = prodDisplayArray[y][5].substr((replaceSmImgLength-4),replaceSmImgLength);
																replaceSmImgPreset = replaceSmImgPresetStart + "_2" + replaceSmImgPresetEnd;
																replaceSmImgHidden = "";
																replaceSmImgBackClass = "on";
															}
														}
													}
													var prodSmImgTagLinkTest = prodSmImgTagStrip.indexOf(" LINK");
													var prodSmImgTagLinkStart = "";
													var prodSmImgTagLinkEnd = "";
													if (prodSmImgTagLinkTest != -1) {
														prodSmImgTagLinkStart += "<a href='' onclick='" + prodCloseThings + "panel5RTRProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + ", \"panel5RTRProductNameVar" + prodDisplayArray[y][0] + "\", 1);return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + prodCloseThings + "panel5RTRProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + ", \"panel5RTRProductNameVar" + prodDisplayArray[y][0] + "\", 1);return false;}'";
														if (hoverState==1) {
															prodSmImgTagLinkStart += " onmouseover='panel5RTRProdMouseOver(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceSmImgMouseOver + "' onfocus='panel5RTRProdMouseOver(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceSmImgMouseOver + "' onmouseout='panel5RTRProdMouseOut(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceSmImgMouseOut + "' onblur='panel5RTRProdMouseOut(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceSmImgMouseOut + "'";
														}
														prodSmImgTagLinkStart += " tabindex='0' title=\"" + prodDisplayArray[y][2] + "\">";
														prodSmImgTagLinkEnd = "<\/a>";
													}
													var prodSmImgTagDivTest = prodSmImgTagStrip.indexOf(" DIV");
													if (prodSmImgTagDivTest != -1) {
														p1PHWon = 1;
														replaceSmImgRender += "<div title=\"" + prodDisplayArray[y][2] + "\" id='panel5RTRProductSmImgDivShell" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_sm_img_div_shell panel_5_rtr_product_sm_img_div_shell_" + prodDisplayArray[y][0] + "' onclick='" + prodCloseThings + "panel5RTRProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + ", \"panel5RTRProductNameVar" + prodDisplayArray[y][0] + "\", 1);' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + prodCloseThings + "panel5RTRProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + ", \"panel5RTRProductNameVar" + prodDisplayArray[y][0] + "\", 1);}'";
														if (hoverState==1) {
															replaceSmImgRender += " onmouseover='panel5RTRProdMouseOver(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceSmImgMouseOver + "' onfocus='panel5RTRProdMouseOver(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceSmImgMouseOver + "'";
														}
														replaceSmImgRender += " tabindex='0' title=\"" + prodDisplayArray[y][2] + "\"><div id='panel5RTRProductSmImgDivBack" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_sm_img_div_back panel_5_rtr_product_sm_img_div_back_" + replaceSmImgBackClass + " panel_5_rtr_product_sm_img_div_back_" + prodDisplayArray[y][0] + replaceSmImgMouseClass +"' style='background-image:url(\"" + clientImgBase + prodDisplayArray[y][5] + "\");'><\/div><div id='panel5RTRProductSmImgDivOver" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_sm_img_div_over panel_5_rtr_product_sm_img_div_over_" + prodDisplayArray[y][0] +"'" + replaceSmImgHidden;
														if (hoverState==1) {
															replaceSmImgRender += " onmouseout='panel5RTRProdMouseOut(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceSmImgMouseOut + "' onblur='panel5RTRProdMouseOut(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceSmImgMouseOut + "'";
														}
														replaceSmImgRender += ">&nbsp;<\/div><\/div>";
														productHTMLTest = baseProdSmImgHTMLStart + replaceSmImgRender + baseProdSmImgHTMLEnd;
													}
													else {
														productHTMLTest = baseProdSmImgHTMLStart + prodSmImgTagLinkStart + "<img title=\"" + prodDisplayArray[y][2] + "\" alt=\"" + prodDisplayArray[y][2] + "\" id='panel5RTRProductSmImg" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_sm_img" + replaceSmImgMouseClass + "' src='" + clientImgBase + replaceSmImgPreset + "'>" + prodSmImgTagLinkEnd + baseProdSmImgHTMLEnd;
													}
												}
												catProdWrite += productHTMLTest;
											}
										}
										catProdWrite += "<\/div>";
										categoryHTMLTest = baseCatProductsHTMLStart + catProdWrite + baseCatProductsHTMLEnd;
									}
									categoryHTML += categoryHTMLTest;
								}
							}
						}
					}
					else {
						for (x=0; x<catArray.length;x++) {
							var categoryHTMLTest = autotextIt(p5TemplateSet.panel5RTRCategoryDiv,"panel5RTRCategory");
							var catIterOn = 1;
							while (catIterOn == 1) {
								var catIterStart = categoryHTMLTest.indexOf("<!--CATITER");
								if (catIterStart != -1) {
									var catIterEnd = categoryHTMLTest.indexOf(">",catIterStart);
									var baseCatIterHTMLStart = categoryHTMLTest.substr(0,catIterStart);
									var baseCatIterHTMLEnd = categoryHTMLTest.substr((catIterEnd+1));
									categoryHTMLTest = baseCatIterHTMLStart + catArray[x][0] + baseCatIterHTMLEnd;
								}
								else {
									catIterOn = 0;
								}
							}
							var catBiterOn = 1;
							while (catBiterOn == 1) {
								var catBiterStart = categoryHTMLTest.indexOf("|!--CATITER");
								if (catBiterStart != -1) {
									var catBiterEnd = categoryHTMLTest.indexOf("|",catBiterStart+1);
									var baseCatIterHTMLStart = categoryHTMLTest.substr(0,catBiterStart);
									var baseCatIterHTMLEnd = categoryHTMLTest.substr((catBiterEnd+1));
									categoryHTMLTest = baseCatIterHTMLStart + catArray[x][0] + baseCatIterHTMLEnd;
								}
								else {
									catBiterOn = 0;
								}
							}
							var famNameTagStart = categoryHTMLTest.indexOf("<!--FAMNAME");
							if (famNameTagStart != -1) {
								var famNameTagEnd = categoryHTMLTest.indexOf(">",famNameTagStart);
								var famNameTagStrip = categoryHTMLTest.substring(famNameTagStart,(famNameTagEnd+1));
								var baseFamNameHTMLStart = categoryHTMLTest.substr(0,famNameTagStart);
								var baseFamNameHTMLEnd = categoryHTMLTest.substr((famNameTagEnd+1));
								var famNameValueVal = "FAMILY NAME ERROR";
								for (fn=0; fn<famArray.length; fn++) {
									if (famArray[fn][0] == catArray[x][2]) {
										famNameValueVal = famArray[fn][1];
										break;
									}
								}
								categoryHTMLTest = baseFamNameHTMLStart + "<div id='panel5RTRCategoryFamilyName" + catArray[x][0] + "' class='panel_5_rtr_category_family_name_" + catArray[whatCatIndex][0] + " panel_5_rtr_category_family_name" + replaceImgMouseClass + "'>" + famNameValueVal + "<\/div>" + baseFamNameHTMLEnd;
							}
							var catBadgeTagStart = categoryHTMLTest.indexOf("<!--BADGE");
							if (catBadgeTagStart != -1) {
								var catBadgeTagEnd = categoryHTMLTest.indexOf(">",catBadgeTagStart);
								var catBadgeTagStrip = categoryHTMLTest.substring(catBadgeTagStart,(catBadgeTagEnd+1));
								var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBadgeTagStart);
								var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBadgeTagEnd+1));
								var catBadgeSingle = "";
								var catBadgeSingleStart = catBadgeTagStrip.indexOf(" SINGLE=");
								if (catBadgeSingleStart != -1) {
									var catBadgeSingleEnd = catBadgeTagStrip.indexOf("]", catBadgeSingleStart);
									catBadgeSingle = " " + catBadgeTagStrip.substring((catBadgeSingleStart+9),(catBadgeSingleEnd));
								}
								var catBadgeMultiple = "";
								var catBadgeMultipleStart = catBadgeTagStrip.indexOf(" MULTIPLE=");
								if (catBadgeMultipleStart != -1) {
									var catBadgeMultipleEnd = catBadgeTagStrip.indexOf("]", catBadgeMultipleStart);
									catBadgeMultiple = " " + catBadgeTagStrip.substring((catBadgeMultipleStart+11),(catBadgeMultipleEnd));
								}
								var cbc = 0;
								for (p=0; p<prodDisplayArray.length; p++) {
									if (prodDisplayArray[p][8] == catArray[x][0]) {
										cbc++;
									}
								}
								if (cbc == 1) {
									var catBadgeWrite = cbc + catBadgeSingle;
								}
								else {
									var catBadgeWrite = cbc + catBadgeMultiple;
								}
								categoryHTMLTest = baseCatBigImgHTMLStart + "<span id='panel5RTRCatBadge" + catArray[x][0] + "' class='counter_badge panel_5_rtr_cat_badge'>" + catBadgeWrite + "<\/span>" + baseCatBigImgHTMLEnd;
							}
							var catNameTagStart = categoryHTMLTest.indexOf("<!--CATNAME");
							if (catNameTagStart != -1) {
								var catNameTagEnd = categoryHTMLTest.indexOf(">",catNameTagStart);
								var catNameTagStrip = categoryHTMLTest.substring(catNameTagStart,(catNameTagEnd+1));
								var baseCatNameHTMLStart = categoryHTMLTest.substr(0,catNameTagStart);
								var baseCatNameHTMLEnd = categoryHTMLTest.substr((catNameTagEnd+1));
								var catNameValueStart = catNameTagStrip.indexOf(" VALUE=");
								if (catNameValueStart != -1) {
									var catNameValueEnd = catNameTagStrip.indexOf("]", catNameValueStart);
									var catNameValueVal = catNameTagStrip.substring((catNameValueStart+8),(catNameValueEnd));
								}
								else {
									var catNameValueVal = catArray[x][1];
								}
								var replaceImgTest = catNameTagStrip.indexOf(" REPLACE");
								if (replaceImgTest != -1) {
									var replaceImgMouseOver = "panel5RTRCatImgReplace(1," + catArray[x][0] + ");";
									var replaceImgMouseOut = "panel5RTRCatImgReplace(2," + catArray[x][0] + ");";
									var replaceImgMouseClass = " img_replace_active";
								}
								else {
									var replaceImgMouseOver = "";
									var replaceImgMouseOut = "";
									var replaceImgMouseClass = "";
								}
								var catNameTagLinkTest = catNameTagStrip.indexOf(" LINK");
								var catNameTagLink = "";
								if (catNameTagLinkTest != -1) {
									if (categoryNoSelect == 0) {
										var catNameOnClickVar = " onclick='panel5RTRCatSelectProducts(" + catArray[x][0] + ", \"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ", \"panel5RTRCategoryNameVar" + catArray[x][0] + "\"," + categoryCartVar + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRCatSelectProducts(" + catArray[x][0] + ", \"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ", \"panel5RTRCategoryNameVar" + catArray[x][0] + "\"," + categoryCartVar + ");}'";
									}
									else {
										var catNameOnClickVar = " onclick='" + catActivateLinkStart + catArray[x][0] + catActivateLinkEnd + "return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + catActivateLinkStart + catArray[x][0] + catActivateLinkEnd + "return false;}'";
									}
									catNameTagLink += " style='cursor:pointer;'" + catNameOnClickVar;
									if (hoverState==1) {
										catNameTagLink += " onmouseover='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceImgMouseOver + "' onfocus='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceImgMouseOver + "' onmouseout='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceImgMouseOut + "' onblur='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceImgMouseOut + "'";
									}
								}
								categoryHTMLTest = baseCatNameHTMLStart + "<a name='panel5RTRCategoryAnchor" + catArray[x][0] + "' id='panel5RTRCategoryAnchor" + catArray[x][0] + "'><\/a><div id='panel5RTRCategoryName" + catArray[x][0] + "' class='panel_5_rtr_category_name_" + catArray[x][0] + " panel_5_rtr_category_name" + replaceImgMouseClass + " panel_5_rtr_category_name_off'" + catNameTagLink + " tabindex='0' title=\"" + catNameValueVal + "\">" + catNameValueVal + "<\/div>" + baseCatNameHTMLEnd;
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
								var categoryNoImgStart = catAllTagStrip.indexOf(" NOIMG");
								if (categoryNoImgStart != -1) {
									p1CatAllToImg = 0;
								}
								var replaceImgTest = catAllTagStrip.indexOf(" REPLACE");
								if (replaceImgTest != -1) {
									var replaceImgMouseOver = "panel5RTRCatImgReplace(1," + catArray[x][0] + ");";
									var replaceImgMouseOut = "panel5RTRCatImgReplace(2," + catArray[x][0] + ");";
									var replaceImgMouseClass = " img_replace_active";
								}
								else {
									var replaceImgMouseOver = "";
									var replaceImgMouseOut = "";
									var replaceImgMouseClass = "";
								}
								var catAllTagLinkTest = catAllTagStrip.indexOf(" LINK");
								var catAllTagLink = "";
								if (catAllTagLinkTest != -1) {
									catAllTagLink += " style='cursor:pointer;' onclick='panel5RTRCatSelectProducts(" + catArray[x][0] + ", \"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name_all\", panel5RTRCategoryNameVar" + catArray[x][0] + ", \"panel5RTRCategoryNameVar" + catArray[x][0] + "\"," + categoryCartVar + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRCatSelectProducts(" + catArray[x][0] + ", \"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name_all\", panel5RTRCategoryNameVar" + catArray[x][0] + ", \"panel5RTRCategoryNameVar" + catArray[x][0] + "\"," + categoryCartVar + ");}'";
									if (hoverState==1) {
										catAllTagLink += " onmouseover='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceImgMouseOver + "' onfocus='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceImgMouseOver + "' onmouseout='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceImgMouseOut + "' onblur='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceImgMouseOut + "'";
									}
								}
								categoryHTMLTest = baseCatAllHTMLStart + "<div id='panel5RTRCategoryName" + catArray[x][0] + "All' class='panel_5_rtr_category_name_all_" + catArray[x][0] + " panel_5_rtr_category_name_all" + replaceImgMouseClass + " panel_5_rtr_category_name_all_off'" + catAllTagLink + " tabindex='0' title=\"" + catAllValueVal + "\">" + catAllValueVal + "<\/div>" + baseCatAllHTMLEnd;
							}
							var catBigImgTagStart = categoryHTMLTest.indexOf("<!--CATBIGIMG");
							if (catBigImgTagStart != -1) {
								var catBigImgTagEnd = categoryHTMLTest.indexOf(">",catBigImgTagStart);
								var catBigImgTagStrip = categoryHTMLTest.substring(catBigImgTagStart,(catBigImgTagEnd+1));
								var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBigImgTagStart);
								var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBigImgTagEnd+1));
								var replaceBigImgMouseOver = "";
								var replaceBigImgMouseOut = "";
								var replaceBigImgMouseClass = "";
								var replaceBigImgRender = "";
								var replaceBigImgPreset = catArray[x][3];
								var replaceBigImgHidden = " style='display:none;'";
								var replaceBigImgBackClass = "off";
								var replaceBigImgTest = catBigImgTagStrip.indexOf(" REPLACE");
								if (replaceBigImgTest != -1) {
									replaceBigImgMouseOver = "panel5RTRCatImgReplace(1," + catArray[x][0] + ");";
									replaceBigImgMouseOut = "panel5RTRCatImgReplace(2," + catArray[x][0] + ");";
									replaceBigImgMouseClass = " img_replace_active";
								}
								if (categoryNoSelect == 0) {
									var catBigImgOnClickVar = " onclick='panel5RTRCatSelectProducts(" + catArray[x][0] + ", \"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ", \"panel5RTRCategoryNameVar" + catArray[x][0] + "\"," + categoryCartVar + ");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRCatSelectProducts(" + catArray[x][0] + ", \"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ", \"panel5RTRCategoryNameVar" + catArray[x][0] + "\"," + categoryCartVar + ");return false;}'";
								}
								else {
									var catBigImgOnClickVar = " onclick='" + catActivateLinkStart + catArray[x][0] + catActivateLinkEnd + "return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + catActivateLinkStart + catArray[x][0] + catActivateLinkEnd + "return false;}'";
								}
								var postImgBig = " style='background-image:url(\"" + clientImgBase + catArray[x][3] + "\");'";
								if (panel5RTRPostLoad == 1) {
									postImgBig = "";
								};
								var catBigImgTagLinkTest = catBigImgTagStrip.indexOf(" LINK");
								var catBigImgTagLinkStart = "";
								var catBigImgTagLinkEnd = "";
								if (catBigImgTagLinkTest != -1) {
									catBigImgTagLinkStart += "<a href=''" + catBigImgOnClickVar;
									if (hoverState==1) {
										catBigImgTagLinkStart += " onmouseover='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceBigImgMouseOver + "' onfocus='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceBigImgMouseOver + "' onmouseout='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceBigImgMouseOut + "' onblur='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceBigImgMouseOut + "'";
									}
									catBigImgTagLinkStart += " tabindex='0' title=\"" + catArray[x][1] + "\">";
									catBigImgTagLinkEnd = "<\/a>";
								}
								var catBigImgTagDivTest = catBigImgTagStrip.indexOf(" DIV");
								if (catBigImgTagDivTest != -1) {
									p1CHWon = 1;
									replaceBigImgRender += "<div title=\"" + catArray[x][1] + "\" id='panel5RTRCategoryBigImgDivShell" + catArray[x][0] + "' class='panel_5_rtr_category_big_img_div_shell panel_5_rtr_category_big_img_div_shell_" + catArray[x][0] + "'" + catBigImgOnClickVar;
									if (hoverState==1) {
										replaceBigImgRender += " onmouseover='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceBigImgMouseOver + "' onfocus='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceBigImgMouseOver + "'";
									}
									replaceBigImgRender += " tabindex='0' title=\"" + catArray[x][1] + "\"><div id='panel5RTRCategoryBigImgDivBack" + catArray[x][0] + "' class='panel_5_rtr_category_big_img_div_back panel_5_rtr_category_big_img_div_back_" + replaceBigImgBackClass + " panel_5_rtr_category_big_img_div_back_" + catArray[x][0] + replaceBigImgMouseClass +"'" + postImgBig + "><\/div><div id='panel5RTRCategoryBigImgDivOver" + catArray[x][0] + "' class='panel_5_rtr_category_big_img_div_over panel_5_rtr_category_big_img_div_over_" + catArray[x][0] +"'" + replaceBigImgHidden;
									if (hoverState==1) {
										replaceBigImgRender += " onmouseout='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceBigImgMouseOut + "' onblur='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceBigImgMouseOut + "'";
									}
									replaceBigImgRender += ">&nbsp;<\/div><\/div>";
									categoryHTMLTest = baseCatBigImgHTMLStart + replaceBigImgRender + baseCatBigImgHTMLEnd;
								}
								else {
									categoryHTMLTest = baseCatBigImgHTMLStart + catBigImgTagLinkStart + "<img title=\"" + catArray[x][1] + "\" alt=\"" + catArray[x][1] + "\" id='panel5RTRCategoryBigImg" + catArray[x][0] + "' class='panel_5_rtr_category_big_img panel_5_rtr_category_big_img_" +catArray[x][0] + replaceBigImgMouseClass + "' src='" + clientImgBase + catArray[x][3] + "'>" + catBigImgTagLinkEnd + baseCatBigImgHTMLEnd;
								}
							}
							var catSmImgTagStart = categoryHTMLTest.indexOf("<!--CATSMIMG");
							if (catSmImgTagStart != -1) {
								var catSmImgTagEnd = categoryHTMLTest.indexOf(">",catSmImgTagStart);
								var catSmImgTagStrip = categoryHTMLTest.substring(catSmImgTagStart,(catSmImgTagEnd+1));
								var baseCatSmImgHTMLStart = categoryHTMLTest.substr(0,catSmImgTagStart);
								var baseCatSmImgHTMLEnd = categoryHTMLTest.substr((catSmImgTagEnd+1));
								var replaceSmImgMouseOver = "";
								var replaceSmImgMouseOut = "";
								var replaceSmImgMouseClass = "";
								var replaceSmImgRender = "";
								var replaceSmImgPreset = catArray[x][4];
								var replaceSmImgHidden = " style='display:none;'";
								var replaceSmImgBackClass = "off";
								var replaceSmImgTest = catSmImgTagStrip.indexOf(" REPLACE");
								if (replaceSmImgTest != -1) {
									replaceSmImgMouseOver = "panel5RTRCatImgReplace(1," + catArray[x][0] + ");";
									replaceSmImgMouseOut = "panel5RTRCatImgReplace(2," + catArray[x][0] + ");";
									replaceSmImgMouseClass = " img_replace_active";
								}
								if (categoryNoSelect == 0) {
									var catSmImgOnClickVar = " onclick='panel5RTRCatSelectProducts(" + catArray[x][0] + ", \"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ", \"panel5RTRCategoryNameVar" + catArray[x][0] + "\"," + categoryCartVar + ");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRCatSelectProducts(" + catArray[x][0] + ", \"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ", \"panel5RTRCategoryNameVar" + catArray[x][0] + "\"," + categoryCartVar + ");return false;}'";
								}
								else {
									var catSmImgOnClickVar = " onclick='" + catActivateLinkStart + catArray[x][0] + catActivateLinkEnd + "return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + catActivateLinkStart + catArray[x][0] + catActivateLinkEnd + "return false;}'";
								}
								var postImgBig = " style='background-image:url(\"" + clientImgBase + catArray[x][4] + "\");'";
								if (panel5RTRPostLoad == 1) {
									postImgBig = "";
								};
								var catSmImgTagLinkTest = catSmImgTagStrip.indexOf(" LINK");
								var catSmImgTagLinkStart = "";
								var catSmImgTagLinkEnd = "";
								if (catSmImgTagLinkTest != -1) {
									catSmImgTagLinkStart += "<a href=''" + catSmImgOnClickVar;
									if (hoverState==1) {
										catSmImgTagLinkStart += " onmouseover='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceSmImgMouseOver + "' onfocus='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceSmImgMouseOver + "' onmouseout='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceSmImgMouseOut + "' onblur='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceSmImgMouseOut + "'";
									}
									catSmImgTagLinkStart += " tabindex='0' title=\"" + catArray[x][1] + "\">";
									catSmImgTagLinkEnd = "<\/a>";
								}
								var catSmImgTagDivTest = catSmImgTagStrip.indexOf(" DIV");
								if (catSmImgTagDivTest != -1) {
									p1CHWon = 1;
									replaceSmImgRender += "<div title=\"" + catArray[x][1] + "\" id='panel5RTRCategorySmImgDivShell" + catArray[x][0] + "' class='panel_5_rtr_category_sm_img_div_shell panel_5_rtr_category_sm_img_div_shell_" + catArray[x][0] + "'" + catSmImgOnClickVar;
									if (hoverState==1) {
										replaceSmImgRender += " onmouseover='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceSmImgMouseOver + "' onfocus='panel5RTRCatMouseOver(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceSmImgMouseOver + "'";
									}
									replaceSmImgRender += " tabindex='0' title=\"" + catArray[x][1] + "\"><div id='panel5RTRCategorySmImgDivBack" + catArray[x][0] + "' class='panel_5_rtr_category_sm_img_div_back panel_5_rtr_category_sm_img_div_back_" + replaceSmImgBackClass + " panel_5_rtr_category_sm_img_div_back_" + catArray[x][0] + replaceSmImgMouseClass +"'" + postImgBig + "><\/div><div id='panel5RTRCategorySmImgDivOver" + catArray[x][0] + "' class='panel_5_rtr_category_sm_img_div_over panel_5_rtr_category_sm_img_div_over_" + catArray[x][0] +"'" + replaceSmImgHidden;
									if (hoverState==1) {
										replaceSmImgRender += " onmouseout='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceSmImgMouseOut + "' onblur='panel5RTRCatMouseOut(\"panel5RTRCategoryName" + catArray[x][0] + "\", \"panel_5_rtr_category_name\", panel5RTRCategoryNameVar" + catArray[x][0] + ");" + replaceSmImgMouseOut + "'";
									}
									replaceSmImgRender += ">&nbsp;<\/div><\/div>";
									categoryHTMLTest = baseCatSmImgHTMLStart + replaceSmImgRender + baseCatSmImgHTMLEnd;
								}
								else {
									categoryHTMLTest = baseCatSmImgHTMLStart + catSmImgTagLinkStart + "<img title=\"" + catArray[x][1] + "\" alt=\"" + catArray[x][1] + "\" id='panel5RTRCategorySmImg" + catArray[x][0] + "' class='panel_5_rtr_category_sm_img panel_5_rtr_category_sm_img_" +catArray[x][0] + replaceSmImgMouseClass + "' src='" + clientImgBase + catArray[x][4] + "'>" + catSmImgTagLinkEnd + baseCatSmImgHTMLEnd;
								}
							}
							var catProductsTagStart = categoryHTMLTest.indexOf("<!--CATPRODUCTS");
							if (catProductsTagStart != -1) {
								var catProductsTagEnd = categoryHTMLTest.indexOf(">",catProductsTagStart);
								var catProductsTagStrip = categoryHTMLTest.substring(catProductsTagStart,(catProductsTagEnd+1));
								var baseCatProductsHTMLStart = categoryHTMLTest.substr(0,catProductsTagStart);
								var baseCatProductsHTMLEnd = categoryHTMLTest.substr((catProductsTagEnd+1));
								var simpleCAClass = "";
								var simpleCADisplay = "";
								if (catActivateClass != "") {
									simpleCAClass = catActivateClass + " " + catActivateClass + "_" + catArray[x][0] + " panel_close_me ";
									simpleCADisplay = " style='display:none;'";
								}
								var catProdWrite = "<div id='panel5RTRCategoryProductsShell" + catArray[x][0] + "' class='" + simpleCAClass + "panel_5_rtr_category_products_shell panel_5_rtr_category_products_shell_" + catArray[x][0] + "'" + simpleCADisplay + ">";
								for (y=0; y<prodDisplayArray.length; y++) {
									if (prodDisplayArray[y][8] == catArray[x][0]) {
										if (window["catActiveTrack"+prodDisplayArray[y][8]] == 1) {
											var productHTMLTest = autotextIt(p5TemplateSet.panel5RTRProductDiv,"panel5RTRProduct");
										}
										else {
											var productHTMLTest = autotextIt(p5TemplateSet.panel5RTRProductDiv,"panel5RTRProduct");
										}
										var prodCloseThings = "";
										var prodCloseTagStart = productHTMLTest.indexOf("<!--PRODCLOSE");
										if (prodCloseTagStart != -1) {
											var prodCloseTagEnd = productHTMLTest.indexOf(">",prodCloseTagStart);
											var baseProdCloseHTMLStart = productHTMLTest.substr(0,prodCloseTagStart);
											var baseProdCloseHTMLEnd = productHTMLTest.substr((prodCloseTagEnd+1));
											prodCloseThings = "genericCloseMe();";
											productHTMLTest = baseProdCloseHTMLStart + baseProdCloseHTMLEnd;
										}
										var prodIterTagStart = productHTMLTest.indexOf("|!--PRODITER");
										if (prodIterTagStart != -1) {
											var prodIterTagEnd = productHTMLTest.indexOf("|",prodIterTagStart+1);
											var prodIterTagStrip = productHTMLTest.substring(prodIterTagStart,(prodIterTagEnd+1));
											var baseProdIterHTMLStart = productHTMLTest.substr(0,prodIterTagStart);
											var baseProdIterHTMLEnd = productHTMLTest.substr((prodIterTagEnd+1));
											productHTMLTest = baseProdIterHTMLStart + prodDisplayArray[y][0] + baseProdIterHTMLEnd;
										}
										var famNameTagStart = productHTMLTest.indexOf("<!--FAMNAME");
										if (famNameTagStart != -1) {
											var famNameTagEnd = productHTMLTest.indexOf(">",famNameTagStart);
											var famNameTagStrip = productHTMLTest.substring(famNameTagStart,(famNameTagEnd+1));
											var baseFamNameHTMLStart = productHTMLTest.substr(0,famNameTagStart);
											var baseFamNameHTMLEnd = productHTMLTest.substr((famNameTagEnd+1));
											var famNameValueVal = "FAMILY NAME ERROR";
											var famProdCatNum = -1;
											for (cn=0; cn<catArray.length; cn++) {
												if (catArray[cn][0] == prodDisplayArray[y][8]) {
													famProdCatNum = cn;
													break;
												}
											}
											if (famProdCatNum != -1) {
												for (fn=0; fn<famArray.length; fn++) {
													if (famArray[fn][0] == catArray[famProdCatNum][2]) {
														famNameValueVal = famArray[fn][1];
														break;
													}
												}
											}
											productHTMLTest = baseFamNameHTMLStart + "<div id='panel5RTRProductFamilyName" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_family_name_" + prodDisplayArray[y][0] + " panel_5_rtr_product_family_name'>" + famNameValueVal + "<\/div>" + baseFamNameHTMLEnd;
										}
										var catNameTagStart = productHTMLTest.indexOf("<!--CATNAME");
										if (catNameTagStart != -1) {
											var catNameTagEnd = productHTMLTest.indexOf(">",catNameTagStart);
											var catNameTagStrip = productHTMLTest.substring(catNameTagStart,(catNameTagEnd+1));
											var baseCatNameHTMLStart = productHTMLTest.substr(0,catNameTagStart);
											var baseCatNameHTMLEnd = productHTMLTest.substr((catNameTagEnd+1));
											var catNameValueVal = "CATEGORY NAME ERROR";
											for (cn=0; cn<catArray.length; cn++) {
												if (catArray[cn][0] == prodDisplayArray[y][8]) {
													catNameValueVal = catArray[cn][1];
													break;
												}
											}
											productHTMLTest = baseCatNameHTMLStart + "<div id='panel5RTRProductCategoryName" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_category_name" + prodDisplayArray[y][0] + " panel_5_rtr_product_category_name'>" + catNameValueVal + "<\/div>" + baseCatNameHTMLEnd;
										}
										var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
										if (prodDiscTagStart != -1) {
											var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
											var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
											var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
											var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
											var prodDiscWrite = "";
											var discVal = prodDisplayArray[y][6];
											if (discVal != 1) {
												prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel5RTRProduct_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
											}
											productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
										}
										var prodNameTagStart = productHTMLTest.indexOf("<!--PRODNAME");
										if (prodNameTagStart != -1) {
											var prodNameTagEnd = productHTMLTest.indexOf(">",prodNameTagStart);
											var prodNameTagStrip = productHTMLTest.substring(prodNameTagStart,(prodNameTagEnd+1));
											var baseProdNameHTMLStart = productHTMLTest.substr(0,prodNameTagStart);
											var baseProdNameHTMLEnd = productHTMLTest.substr((prodNameTagEnd+1));
											var replaceImgTest = prodNameTagStrip.indexOf(" REPLACE");
											if (replaceImgTest != -1) {
												var replaceImgMouseOver = "panel5RTRProdImgReplace(1," + prodDisplayArray[y][0] + ");";
												var replaceImgMouseOut = "panel5RTRProdImgReplace(2," + prodDisplayArray[y][0] + ");";
												var replaceImgMouseClass = " img_replace_active";
											}
											else {
												var replaceImgMouseOver = "";
												var replaceImgMouseOut = "";
												var replaceImgMouseClass = "";
											}
											var descTest = prodNameTagStrip.indexOf(" DESC");
											if (descTest != -1) {
												var descVal = "<span class='panel_5_rtr_product_name_desc'>" + prodDisplayArray[y][3] + "<\/span>";
											}
											else {
												var descVal = "";
											}
											var prodPopupTestStart = prodNameTagStrip.indexOf(" POPUP=");
											var prodPopupMO = "";
											var prodPopupDIV = "";
											if (prodPopupTestStart != -1) {
												var prodPopupTestEnd = prodNameTagStrip.indexOf("]",prodPopupTestStart);
												var prodPopupTimeout = prodNameTagStrip.substring((prodPopupTestStart+8),(prodPopupTestEnd));
												prodPopupMO = "panel5RTRProdPopup(\"" + prodDisplayArray[y][0] + "\"," + prodPopupTimeout + ");";
												prodPopupDIV = "<div id='panel5RTRProductPopup" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_popup' style='display:none;'><\/div>";
											}
											var prodNameTagLinkTest = prodNameTagStrip.indexOf(" LINK");
											var prodNameTagLink = "";
											if (prodNameTagLinkTest != -1) {
												prodNameTagLink += " style='cursor:pointer;' onclick='" + prodCloseThings + "panel5RTRProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + ", \"panel5RTRProductNameVar" + prodDisplayArray[y][0] + "\", 1);' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + prodCloseThings + "panel5RTRProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + ", \"panel5RTRProductNameVar" + prodDisplayArray[y][0] + "\", 1);}'";
												if (hoverState==1) {
													prodNameTagLink += " onmouseover='panel5RTRProdMouseOver(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceImgMouseOver + prodPopupMO + "' onfocus='panel5RTRProdMouseOver(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceImgMouseOver + prodPopupMO + "' onmouseout='panel5RTRProdMouseOut(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceImgMouseOut + "' onblur='panel5RTRProdMouseOut(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceImgMouseOut + "'";
												}
											}
											var prodNameItalicStart = prodNameTagStrip.indexOf(" FNTAW=");
											if (prodNameItalicStart != -1) {
												var prodNameItalicEnd = prodNameTagStrip.indexOf("]",prodNameItalicStart);
												var prodNameItalicVar = "<i class='fa " + prodNameTagStrip.substring((prodNameItalicStart+8),(prodNameItalicEnd)) + "'><\/i>";
											}
											else {
												var prodNameItalicVar = "";
											}
											var prodNameSizeStart = prodNameTagStrip.indexOf(" SIZE");
											if (prodNameSizeStart != -1) {
												var prodNameDispVal = prodDisplayArray[y][21];
											}
											else {
												var prodNameDispVal = prodDisplayArray[y][2];
											}
											if(FPC==1) {
												var isProductChecked = 1;
												window["panel5RTRProductNameVar"+prodDisplayArray[y][0]] = 1;
												var baseProductStyle = " panel_5_rtr_product_name_on";
											}
											else {
												if (prodDisplayArray[y][7] == "1") {
													var isProductChecked = 1;
													window["panel5RTRProductNameVar"+prodDisplayArray[y][0]] = 1;
													var baseProductStyle = " panel_5_rtr_product_name_on";
												}
												else {
													var isProductChecked = 0;
													var baseProductStyle = " panel_5_rtr_product_name_off";
												}
											}
											productHTMLTest = baseProdNameHTMLStart + "<a name='panel5RTRProductAnchor" + prodDisplayArray[y][0] + "' id='panel5RTRProductAnchor" + prodDisplayArray[y][0] + "'><\/a><div id='panel5RTRProductName" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_name" + replaceImgMouseClass + baseProductStyle + "'" + prodNameTagLink + " tabindex='0' title=\"" + prodNameDispVal + "\">" + prodNameItalicVar + "<span class='panel_5_rtr_product_name_name'>" + prodNameDispVal + "<\/span>" + descVal + "<\/div>" + prodPopupDIV + baseProdNameHTMLEnd;
										}
										var prodDescTagStart = productHTMLTest.indexOf("<!--PRODDESC");
										if (prodDescTagStart != -1) {
											var prodDescTagEnd = productHTMLTest.indexOf(">",prodDescTagStart);
											var prodDescTagStrip = productHTMLTest.substring(prodDescTagStart,(prodDescTagEnd+1));
											var baseProdDescHTMLStart = productHTMLTest.substr(0,prodDescTagStart);
											var baseProdDescHTMLEnd = productHTMLTest.substr((prodDescTagEnd+1));
											productHTMLTest = baseProdDescHTMLStart + "<div id='panel5RTRProductDesc" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_desc'>" + prodDisplayArray[y][3] + "<\/div>" + baseProdDescHTMLEnd;
										}
										var prodCatTagStart = productHTMLTest.indexOf("<!--PRODCAT");
										if (prodCatTagStart != -1) {
											var prodCatTagEnd = productHTMLTest.indexOf(">",prodCatTagStart);
											var prodCatTagStrip = productHTMLTest.substring(prodCatTagStart,(prodCatTagEnd+1));
											var baseProdCatHTMLStart = productHTMLTest.substr(0,prodCatTagStart);
											var baseProdCatHTMLEnd = productHTMLTest.substr((prodCatTagEnd+1));
											productHTMLTest = baseProdCatHTMLStart + "<div id='panel5RTRProductCat" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_cat'>" + prodDisplayArray[y][16] + "<\/div>" + baseProdCatHTMLEnd;
										}
										var prodBigImgTagStart = productHTMLTest.indexOf("<!--PRODBIGIMG");
										if (prodBigImgTagStart != -1) {
											var prodBigImgTagEnd = productHTMLTest.indexOf(">",prodBigImgTagStart);
											var prodBigImgTagStrip = productHTMLTest.substring(prodBigImgTagStart,(prodBigImgTagEnd+1));
											var baseProdBigImgHTMLStart = productHTMLTest.substr(0,prodBigImgTagStart);
											var baseProdBigImgHTMLEnd = productHTMLTest.substr((prodBigImgTagEnd+1));
											var replaceBigImgMouseOver = "";
											var replaceBigImgMouseOut = "";
											var replaceBigImgMouseClass = "";
											var replaceBigImgRender = "";
											var replaceBigImgPreset = prodDisplayArray[y][4];
											var replaceBigImgHidden = " style='display:none;'";
											var replaceBigImgBackClass = "off";
											var replaceBigImgTest = prodBigImgTagStrip.indexOf(" REPLACE");
											if (replaceBigImgTest != -1) {
												replaceBigImgMouseOver = "panel5RTRProdImgReplace(1," + prodDisplayArray[y][0] + ");";
												replaceBigImgMouseOut = "panel5RTRProdImgReplace(2," + prodDisplayArray[y][0] + ");";
												replaceBigImgMouseClass = " img_replace_active";
												var replaceBigImgLength = prodDisplayArray[y][4].length;
												if(FPC==1) {
													var replaceBigImgPresetStart = prodDisplayArray[y][4].substr(0,(replaceBigImgLength-4));
													var replaceBigImgPresetEnd = prodDisplayArray[y][4].substr((replaceBigImgLength-4),replaceBigImgLength);
													replaceBigImgPreset = replaceBigImgPresetStart + "_2" + replaceBigImgPresetEnd;
													replaceBigImgHidden = "";
													replaceBigImgBackClass = "on";
												}
												else {
													if (prodDisplayArray[y][7] == "1") {
														var replaceBigImgPresetStart = prodDisplayArray[y][4].substr(0,(replaceBigImgLength-4));
														var replaceBigImgPresetEnd = prodDisplayArray[y][4].substr((replaceBigImgLength-4),replaceBigImgLength);
														replaceBigImgPreset = replaceBigImgPresetStart + "_2" + replaceBigImgPresetEnd;
														replaceBigImgHidden = "";
														replaceBigImgBackClass = "on";
													}
												}
											}
											var prodBigImgTagLinkTest = prodBigImgTagStrip.indexOf(" LINK");
											var prodBigImgTagLinkStart = "";
											var prodBigImgTagLinkEnd = "";
											if (prodBigImgTagLinkTest != -1) {
												prodBigImgTagLinkStart += "<a href='' onclick='" + prodCloseThings + "panel5RTRProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + ", \"panel5RTRProductNameVar" + prodDisplayArray[y][0] + "\", 1);return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + prodCloseThings + "panel5RTRProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + ", \"panel5RTRProductNameVar" + prodDisplayArray[y][0] + "\", 1);return false;}'";
												if (hoverState==1) {
													prodBigImgTagLinkStart += " onmouseover='panel5RTRProdMouseOver(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceBigImgMouseOver + "' onfocus='panel5RTRProdMouseOver(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceBigImgMouseOver + "' onmouseout='panel5RTRProdMouseOut(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceBigImgMouseOut + "' onblur='panel5RTRProdMouseOut(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceBigImgMouseOut + "'";
												}
												prodBigImgTagLinkStart += " tabindex='0' title=\"" + prodDisplayArray[y][2] + "\">";
												prodBigImgTagLinkEnd = "<\/a>";
											}
											var prodBigImgTagDivTest = prodBigImgTagStrip.indexOf(" DIV");
											if (prodBigImgTagDivTest != -1) {
												p1PHWon = 1;
												replaceBigImgRender += "<div title=\"" + prodDisplayArray[y][2] + "\" id='panel5RTRProductBigImgDivShell" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_big_img_div_shell panel_5_rtr_product_big_img_div_shell_" + prodDisplayArray[y][0] + "' onclick='" + prodCloseThings + "panel5RTRProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + ", \"panel5RTRProductNameVar" + prodDisplayArray[y][0] + "\", 1);' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + prodCloseThings + "panel5RTRProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + ", \"panel5RTRProductNameVar" + prodDisplayArray[y][0] + "\", 1);}'";
												if (hoverState==1) {
													replaceBigImgRender += " onmouseover='panel5RTRProdMouseOver(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceBigImgMouseOver + "' onfocus='panel5RTRProdMouseOver(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceBigImgMouseOver + "'";
												}
												replaceBigImgRender += " tabindex='0' title=\"" + prodDisplayArray[y][2] + "\"><div id='panel5RTRProductBigImgDivBack" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_big_img_div_back panel_5_rtr_product_big_img_div_back_" + replaceBigImgBackClass + " panel_5_rtr_product_big_img_div_back_" + prodDisplayArray[y][0] + replaceBigImgMouseClass +"' style='background-image:url(\"" + clientImgBase + prodDisplayArray[y][4] + "\");'><\/div><div id='panel5RTRProductBigImgDivOver" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_big_img_div_over panel_5_rtr_product_big_img_div_over_" + prodDisplayArray[y][0] +"'" + replaceBigImgHidden;
												if (hoverState==1) {
													replaceBigImgRender += " onmouseout='panel5RTRProdMouseOut(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceBigImgMouseOut + "' onblur='panel5RTRProdMouseOut(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceBigImgMouseOut + "'";
												}
												replaceBigImgRender += ">&nbsp;<\/div><\/div>";
												productHTMLTest = baseProdBigImgHTMLStart + replaceBigImgRender + baseProdBigImgHTMLEnd;
											}
											else {
												productHTMLTest = baseProdBigImgHTMLStart + prodBigImgTagLinkStart + "<img title=\"" + prodDisplayArray[y][2] + "\" alt=\"" + prodDisplayArray[y][2] + "\" id='panel5RTRProductBigImg" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_big_img" + replaceBigImgMouseClass + "' src='" + clientImgBase + replaceBigImgPreset + "'>" + prodBigImgTagLinkEnd + baseProdBigImgHTMLEnd;
											}
										}
										var prodSmImgTagStart = productHTMLTest.indexOf("<!--PRODSMIMG");
										if (prodSmImgTagStart != -1) {
											var prodSmImgTagEnd = productHTMLTest.indexOf(">",prodSmImgTagStart);
											var prodSmImgTagStrip = productHTMLTest.substring(prodSmImgTagStart,(prodSmImgTagEnd+1));
											var baseProdSmImgHTMLStart = productHTMLTest.substr(0,prodSmImgTagStart);
											var baseProdSmImgHTMLEnd = productHTMLTest.substr((prodSmImgTagEnd+1));
											var replaceSmImgMouseOver = "";
											var replaceSmImgMouseOut = "";
											var replaceSmImgMouseClass = "";
											var replaceSmImgRender = "";
											var replaceSmImgPreset = prodDisplayArray[y][5];
											var replaceSmImgHidden = " style='display:none;'";
											var replaceSmImgBackClass = "off";
											var replaceSmImgTest = prodSmImgTagStrip.indexOf(" REPLACE");
											if (replaceSmImgTest != -1) {
												replaceSmImgMouseOver = "panel5RTRProdImgReplace(1," + prodDisplayArray[y][0] + ");";
												replaceSmImgMouseOut = "panel5RTRProdImgReplace(2," + prodDisplayArray[y][0] + ");";
												replaceSmImgMouseClass = " img_replace_active";
												var replaceSmImgLength = prodDisplayArray[y][5].length;
												if(FPC==1) {
													var replaceSmImgPresetStart = prodDisplayArray[y][5].substr(0,(replaceSmImgLength-4));
													var replaceSmImgPresetEnd = prodDisplayArray[y][5].substr((replaceSmImgLength-4),replaceSmImgLength);
													replaceSmImgPreset = replaceSmImgPresetStart + "_2" + replaceSmImgPresetEnd;
													replaceSmImgHidden = "";
													replaceSmImgBackClass = "on";
												}
												else {
													if (prodDisplayArray[y][7] == "1") {
														var replaceSmImgPresetStart = prodDisplayArray[y][5].substr(0,(replaceSmImgLength-4));
														var replaceSmImgPresetEnd = prodDisplayArray[y][5].substr((replaceSmImgLength-4),replaceSmImgLength);
														replaceSmImgPreset = replaceSmImgPresetStart + "_2" + replaceSmImgPresetEnd;
														replaceSmImgHidden = "";
														replaceSmImgBackClass = "on";
													}
												}
											}
											var prodSmImgTagLinkTest = prodSmImgTagStrip.indexOf(" LINK");
											var prodSmImgTagLinkStart = "";
											var prodSmImgTagLinkEnd = "";
											if (prodSmImgTagLinkTest != -1) {
												prodSmImgTagLinkStart += "<a href='' onclick='" + prodCloseThings + "panel5RTRProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + ", \"panel5RTRProductNameVar" + prodDisplayArray[y][0] + "\", 1);return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + prodCloseThings + "panel5RTRProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + ", \"panel5RTRProductNameVar" + prodDisplayArray[y][0] + "\", 1);return false;}'";
												if (hoverState==1) {
													prodSmImgTagLinkStart += " onmouseover='panel5RTRProdMouseOver(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceSmImgMouseOver + "' onfocus='panel5RTRProdMouseOver(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceSmImgMouseOver + "' onmouseout='panel5RTRProdMouseOut(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceSmImgMouseOut + "' onblur='panel5RTRProdMouseOut(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceSmImgMouseOut + "'";
												}
												prodSmImgTagLinkStart += " tabindex='0' title=\"" + prodDisplayArray[y][2] + "\">";
												prodSmImgTagLinkEnd = "<\/a>";
											}
											var prodSmImgTagDivTest = prodSmImgTagStrip.indexOf(" DIV");
											if (prodSmImgTagDivTest != -1) {
												p1PHWon = 1;
												replaceSmImgRender += "<div title=\"" + prodDisplayArray[y][2] + "\" id='panel5RTRProductSmImgDivShell" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_sm_img_div_shell panel_5_rtr_product_sm_img_div_shell_" + prodDisplayArray[y][0] + "' onclick='" + prodCloseThings + "panel5RTRProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + ", \"panel5RTRProductNameVar" + prodDisplayArray[y][0] + "\", 1);' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + prodCloseThings + "panel5RTRProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + ", \"panel5RTRProductNameVar" + prodDisplayArray[y][0] + "\", 1);}'";
												if (hoverState==1) {
													replaceSmImgRender += " onmouseover='panel5RTRProdMouseOver(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceSmImgMouseOver + "' onfocus='panel5RTRProdMouseOver(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceSmImgMouseOver + "'";
												}
												replaceSmImgRender += " tabindex='0' title=\"" + prodDisplayArray[y][2] + "\"><div id='panel5RTRProductSmImgDivBack" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_sm_img_div_back panel_5_rtr_product_sm_img_div_back_" + replaceSmImgBackClass + " panel_5_rtr_product_sm_img_div_back_" + prodDisplayArray[y][0] + replaceSmImgMouseClass +"' style='background-image:url(\"" + clientImgBase + prodDisplayArray[y][5] + "\");'><\/div><div id='panel5RTRProductSmImgDivOver" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_sm_img_div_over panel_5_rtr_product_sm_img_div_over_" + prodDisplayArray[y][0] +"'" + replaceSmImgHidden;
												if (hoverState==1) {
													replaceSmImgRender += " onmouseout='panel5RTRProdMouseOut(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceSmImgMouseOut + "' onblur='panel5RTRProdMouseOut(\"panel5RTRProductName" + prodDisplayArray[y][0] + "\", \"panel_5_rtr_product_name\", panel5RTRProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceSmImgMouseOut + "'";
												}
												replaceSmImgRender += ">&nbsp;<\/div><\/div>";
												productHTMLTest = baseProdSmImgHTMLStart + replaceSmImgRender + baseProdSmImgHTMLEnd;
											}
											else {
												productHTMLTest = baseProdSmImgHTMLStart + prodSmImgTagLinkStart + "<img title=\"" + prodDisplayArray[y][2] + "\" alt=\"" + prodDisplayArray[y][2] + "\" id='panel5RTRProductSmImg" + prodDisplayArray[y][0] + "' class='panel_5_rtr_product_sm_img" + replaceSmImgMouseClass + "' src='" + clientImgBase + replaceSmImgPreset + "'>" + prodSmImgTagLinkEnd + baseProdSmImgHTMLEnd;
											}
										}
										catProdWrite += productHTMLTest;
									}
								}
								catProdWrite += "<\/div>";
								categoryHTMLTest = baseCatProductsHTMLStart + catProdWrite + baseCatProductsHTMLEnd;
							}
							categoryHTML += categoryHTMLTest;
						}
					}
				}
				baseHTML = baseHTMLStart + categoryHTML + baseHTMLEnd;
			}
			else {
				panel5CatSearchOn = 0;
			}
		}
		var rtrFormOptionsTagStart = baseHTML.indexOf("<!--FORMOPTIONS");
		if (rtrFormOptionsTagStart != -1) {
			var rtrFormOptionsTagEnd = baseHTML.indexOf(">",rtrFormOptionsTagStart);
			var rtrFormOptionsTagStrip = baseHTML.substring(rtrFormOptionsTagStart,(rtrFormOptionsTagEnd+1));
			var rtrFormOptionsHTMLStart = baseHTML.substr(0,rtrFormOptionsTagStart);
			var rtrFormOptionsHTMLEnd = baseHTML.substr((rtrFormOptionsTagEnd+1));
			var rtrFormOptionsRender = "";
			var rtrFormOptionsReqStart = rtrFormOptionsTagStrip.indexOf(" PRODREQ");
			if (rtrFormOptionsReqStart != -1) {
				panel5RTRProdReq = 1;
			}
			baseHTML = rtrFormOptionsHTMLStart + rtrFormOptionsHTMLEnd;
		}
		var rtrFNameTagStart = baseHTML.indexOf("<!--RTRFNAME");
		if (rtrFNameTagStart != -1) {
			var rtrFNameTagEnd = baseHTML.indexOf(">",rtrFNameTagStart);
			var rtrFNameTagStrip = baseHTML.substring(rtrFNameTagStart,(rtrFNameTagEnd+1));
			var rtrFNameHTMLStart = baseHTML.substr(0,rtrFNameTagStart);
			var rtrFNameHTMLEnd = baseHTML.substr((rtrFNameTagEnd+1));
			var rtrFNameRender = "";
			var rtrFNameValueStart = rtrFNameTagStrip.indexOf(" VALUE=");
			if (rtrFNameValueStart != -1) {
				var rtrFNameValueEnd = rtrFNameTagStrip.indexOf("]", rtrFNameValueStart);
				var rtrFNameValueVal = rtrFNameTagStrip.substring((rtrFNameValueStart+8),(rtrFNameValueEnd));
				rtrFNameValueHolder = rtrFNameValueVal;
				var rtrFNameValueRender = " placeholder='"+rtrFNameValueVal+"' onfocus='fieldBlurFocus(\"panel5RTRFName\",\""+rtrFNameValueVal+"\",1); onblur='fieldBlurFocus(\"panel5RTRFName\",\""+rtrFNameValueVal+"\",0);'";
			}
			else {
				var rtrFNameValueRender = "";
			}
			var rtrFNameReqStart = rtrFNameTagStrip.indexOf(" REQUIRED");
			if (rtrFNameReqStart != -1) {
				var rtrFNameReqRender = " class='panel_5_rtr_fname panel_5_rtr_fname_base panel_5_required'";
			}
			else {
				var rtrFNameReqRender = " class='panel_5_rtr_fname panel_5_rtr_fname_base'";
			}
			rtrFNameRender = "<input type='text' name='panel5RTRFName' id='panel5RTRFName'" + rtrFNameReqRender + " onkeyup='panel5FieldKeypress(event,\"panel5RTRFName\",0);'" + rtrFNameValueRender + " title=\"First Name\">";
			baseHTML = rtrFNameHTMLStart + rtrFNameRender + rtrFNameHTMLEnd;
		}
		else {
			baseHTML += "<input type='hidden' name='panel5RTRFName' id='panel5RTRFName' value='' title=\"First Name\">";
		}
		var rtrLNameTagStart = baseHTML.indexOf("<!--RTRLNAME");
		if (rtrLNameTagStart != -1) {
			var rtrLNameTagEnd = baseHTML.indexOf(">",rtrLNameTagStart);
			var rtrLNameTagStrip = baseHTML.substring(rtrLNameTagStart,(rtrLNameTagEnd+1));
			var rtrLNameHTMLStart = baseHTML.substr(0,rtrLNameTagStart);
			var rtrLNameHTMLEnd = baseHTML.substr((rtrLNameTagEnd+1));
			var rtrLNameRender = "";
			var rtrLNameValueStart = rtrLNameTagStrip.indexOf(" VALUE=");
			if (rtrLNameValueStart != -1) {
				var rtrLNameValueEnd = rtrLNameTagStrip.indexOf("]", rtrLNameValueStart);
				var rtrLNameValueVal = rtrLNameTagStrip.substring((rtrLNameValueStart+8),(rtrLNameValueEnd));
				rtrLNameValueHolder = rtrLNameValueVal;
				var rtrLNameValueRender = " placeholder='"+rtrLNameValueVal+"' onfocus='fieldBlurFocus(\"panel5RTRLName\",\""+rtrLNameValueVal+"\",1); onblur='fieldBlurFocus(\"panel5RTRLName\",\""+rtrLNameValueVal+"\",0);'";
			}
			else {
				var rtrLNameValueRender = "";
			}
			var rtrLNameReqStart = rtrLNameTagStrip.indexOf(" REQUIRED");
			if (rtrLNameReqStart != -1) {
				var rtrLNameReqRender = " class='panel_5_rtr_lname panel_5_rtr_lname_base panel_5_required'";
			}
			else {
				var rtrLNameReqRender = " class='panel_5_rtr_lname panel_5_rtr_lname_base'";
			}
			rtrLNameRender = "<input type='text' name='panel5RTRLName' id='panel5RTRLName'" + rtrLNameReqRender + " onkeyup='panel5FieldKeypress(event,\"panel5RTRLName\",0);'" + rtrLNameValueRender + " title=\"Last Name\">";
			baseHTML = rtrLNameHTMLStart + rtrLNameRender + rtrLNameHTMLEnd;
		}
		else {
			baseHTML += "<input type='hidden' name='panel5RTRLName' id='panel5RTRLName' value='' title=\"Last Name\">";
		}
		var rtrPositionTagStart = baseHTML.indexOf("<!--RTRPOSITION");
		if (rtrPositionTagStart != -1) {
			var rtrPositionTagEnd = baseHTML.indexOf(">",rtrPositionTagStart);
			var rtrPositionTagStrip = baseHTML.substring(rtrPositionTagStart,(rtrPositionTagEnd+1));
			var rtrPositionHTMLStart = baseHTML.substr(0,rtrPositionTagStart);
			var rtrPositionHTMLEnd = baseHTML.substr((rtrPositionTagEnd+1));
			var rtrPositionRender = "";
			var rtrPositionValueStart = rtrPositionTagStrip.indexOf(" VALUE=");
			if (rtrPositionValueStart != -1) {
				var rtrPositionValueEnd = rtrPositionTagStrip.indexOf("]", rtrPositionValueStart);
				var rtrPositionValueVal = rtrPositionTagStrip.substring((rtrPositionValueStart+8),(rtrPositionValueEnd));
				rtrPositionValueHolder = rtrPositionValueVal;
				var rtrPositionValueRender = " placeholder='"+rtrPositionValueVal+"' onfocus='fieldBlurFocus(\"panel5RTRPosition\",\""+rtrPositionValueVal+"\",1); onblur='fieldBlurFocus(\"panel5RTRPosition\",\""+rtrPositionValueVal+"\",0);'";
			}
			else {
				var rtrPositionValueRender = "";
			}
			var rtrPositionReqStart = rtrPositionTagStrip.indexOf(" REQUIRED");
			if (rtrPositionReqStart != -1) {
				var rtrPositionReqRender = " class='panel_5_rtr_position panel_5_rtr_position_base panel_5_required'";
			}
			else {
				var rtrPositionReqRender = " class='panel_5_rtr_position panel_5_rtr_position_base'";
			}
			rtrPositionRender = "<input type='text' name='panel5RTRPosition' id='panel5RTRPosition'" + rtrPositionReqRender + " onkeyup='panel5FieldKeypress(event,\"panel5RTRPosition\",0);'" + rtrPositionValueRender + " title=\"Position\">";
			baseHTML = rtrPositionHTMLStart + rtrPositionRender + rtrPositionHTMLEnd;
		}
		else {
			baseHTML += "<input type='hidden' name='panel5RTRPosition' id='panel5RTRPosition' value='' title=\"Position\">";
		}
		var rtrEmailTagStart = baseHTML.indexOf("<!--RTREMAIL");
		if (rtrEmailTagStart != -1) {
			var rtrEmailTagEnd = baseHTML.indexOf(">",rtrEmailTagStart);
			var rtrEmailTagStrip = baseHTML.substring(rtrEmailTagStart,(rtrEmailTagEnd+1));
			var rtrEmailHTMLStart = baseHTML.substr(0,rtrEmailTagStart);
			var rtrEmailHTMLEnd = baseHTML.substr((rtrEmailTagEnd+1));
			var rtrEmailRender = "";
			var rtrEmailValueStart = rtrEmailTagStrip.indexOf(" VALUE=");
			if (rtrEmailValueStart != -1) {
				var rtrEmailValueEnd = rtrEmailTagStrip.indexOf("]", rtrEmailValueStart);
				var rtrEmailValueVal = rtrEmailTagStrip.substring((rtrEmailValueStart+8),(rtrEmailValueEnd));
				rtrEmailValueHolder = rtrEmailValueVal;
				var rtrEmailValueRender = " placeholder='"+rtrEmailValueVal+"' onfocus='fieldBlurFocus(\"panel5RTREmail\",\""+rtrEmailValueVal+"\",1); onblur='fieldBlurFocus(\"panel5RTREmail\",\""+rtrEmailValueVal+"\",0);'";
			}
			else {
				var rtrEmailValueRender = "";
			}
			var rtrEmailReqStart = rtrEmailTagStrip.indexOf(" REQUIRED");
			if (rtrEmailReqStart != -1) {
				var rtrEmailReqRender = " class='panel_5_rtr_email panel_5_rtr_email_base panel_5_required'";
			}
			else {
				var rtrEmailReqRender = " class='panel_5_rtr_email panel_5_rtr_email_base'";
			}
			rtrEmailRender = "<input type='email' name='panel5RTREmail' id='panel5RTREmail'" + rtrEmailReqRender + " onkeyup='panel5FieldKeypress(event,\"panel5RTREmail\",0);'" + rtrEmailValueRender + " title=\"Email\">";
			baseHTML = rtrEmailHTMLStart + rtrEmailRender + rtrEmailHTMLEnd;
		}
		else {
			baseHTML += "<input type='hidden' name='panel5RTREmail' id='panel5RTREmail' value='' title=\"Email\">";
		}
		var rtrPhoneTagStart = baseHTML.indexOf("<!--RTRPHONE");
		if (rtrPhoneTagStart != -1) {
			var rtrPhoneTagEnd = baseHTML.indexOf(">",rtrPhoneTagStart);
			var rtrPhoneTagStrip = baseHTML.substring(rtrPhoneTagStart,(rtrPhoneTagEnd+1));
			var rtrPhoneHTMLStart = baseHTML.substr(0,rtrPhoneTagStart);
			var rtrPhoneHTMLEnd = baseHTML.substr((rtrPhoneTagEnd+1));
			var rtrPhoneRender = "";
			var rtrPhoneValueStart = rtrPhoneTagStrip.indexOf(" VALUE=");
			if (rtrPhoneValueStart != -1) {
				var rtrPhoneValueEnd = rtrPhoneTagStrip.indexOf("]", rtrPhoneValueStart);
				var rtrPhoneValueVal = rtrPhoneTagStrip.substring((rtrPhoneValueStart+8),(rtrPhoneValueEnd));
				rtrPhoneValueHolder = rtrPhoneValueVal;
				var rtrPhoneValueRender = " placeholder='"+rtrPhoneValueVal+"' onfocus='fieldBlurFocus(\"panel5RTRPhone\",\""+rtrPhoneValueVal+"\",1); onblur='fieldBlurFocus(\"panel5RTRPhone\",\""+rtrPhoneValueVal+"\",0);'";
			}
			else {
				var rtrPhoneValueRender = "";
			}
			var rtrPhoneReqStart = rtrPhoneTagStrip.indexOf(" REQUIRED");
			if (rtrPhoneReqStart != -1) {
				var rtrPhoneReqRender = " class='panel_5_rtr_phone panel_5_rtr_phone_base panel_5_required'";
			}
			else {
				var rtrPhoneReqRender = " class='panel_5_rtr_phone panel_5_rtr_phone_base'";
			}
			rtrPhoneRender = "<input type='text' name='panel5RTRPhone' id='panel5RTRPhone'" + rtrPhoneReqRender + " onkeyup='panel5FieldKeypress(event,\"panel5RTRPhone\",0);'" + rtrPhoneValueRender + " title=\"Phone\">";
			baseHTML = rtrPhoneHTMLStart + rtrPhoneRender + rtrPhoneHTMLEnd;
		}
		else {
			baseHTML += "<input type='hidden' name='panel5RTRPhone' id='panel5RTRPhone' value='' title=\"Phone\">";
		}
		var rtrSNameTagStart = baseHTML.indexOf("<!--RTRSNAME");
		if (rtrSNameTagStart != -1) {
			var rtrSNameTagEnd = baseHTML.indexOf(">",rtrSNameTagStart);
			var rtrSNameTagStrip = baseHTML.substring(rtrSNameTagStart,(rtrSNameTagEnd+1));
			var rtrSNameHTMLStart = baseHTML.substr(0,rtrSNameTagStart);
			var rtrSNameHTMLEnd = baseHTML.substr((rtrSNameTagEnd+1));
			var rtrSNameRender = "";
			var rtrSNameValueStart = rtrSNameTagStrip.indexOf(" VALUE=");
			if (rtrSNameValueStart != -1) {
				var rtrSNameValueEnd = rtrSNameTagStrip.indexOf("]", rtrSNameValueStart);
				var rtrSNameValueVal = rtrSNameTagStrip.substring((rtrSNameValueStart+8),(rtrSNameValueEnd));
				rtrSNameValueHolder = rtrSNameValueVal;
				var rtrSNameValueRender = " placeholder='"+rtrSNameValueVal+"' onfocus='fieldBlurFocus(\"panel5RTRSName\",\""+rtrSNameValueVal+"\",1); onblur='fieldBlurFocus(\"panel5RTRSName\",\""+rtrSNameValueVal+"\",0);'";
			}
			else {
				var rtrSNameValueRender = "";
			}
			var rtrSNameReqStart = rtrSNameTagStrip.indexOf(" REQUIRED");
			if (rtrSNameReqStart != -1) {
				var rtrSNameReqRender = " class='panel_5_rtr_sname panel_5_rtr_sname_base panel_5_required'";
			}
			else {
				var rtrSNameReqRender = " class='panel_5_rtr_sname panel_5_rtr_sname_base'";
			}
			rtrSNameRender = "<input type='text' name='panel5RTRSName' id='panel5RTRSName'" + rtrSNameReqRender + " onkeyup='panel5FieldKeypress(event,\"panel5RTRSName\",0);'" + rtrSNameValueRender + " title=\"Store Name\">";
			baseHTML = rtrSNameHTMLStart + rtrSNameRender + rtrSNameHTMLEnd;
		}
		else {
			baseHTML += "<input type='hidden' name='panel5RTRSName' id='panel5RTRSName' value='' title=\"Store Name\">";
		}
		var rtrSAddOneTagStart = baseHTML.indexOf("<!--RTRSADDONE");
		if (rtrSAddOneTagStart != -1) {
			var rtrSAddOneTagEnd = baseHTML.indexOf(">",rtrSAddOneTagStart);
			var rtrSAddOneTagStrip = baseHTML.substring(rtrSAddOneTagStart,(rtrSAddOneTagEnd+1));
			var rtrSAddOneHTMLStart = baseHTML.substr(0,rtrSAddOneTagStart);
			var rtrSAddOneHTMLEnd = baseHTML.substr((rtrSAddOneTagEnd+1));
			var rtrSAddOneRender = "";
			var rtrSAddOneValueStart = rtrSAddOneTagStrip.indexOf(" VALUE=");
			if (rtrSAddOneValueStart != -1) {
				var rtrSAddOneValueEnd = rtrSAddOneTagStrip.indexOf("]", rtrSAddOneValueStart);
				var rtrSAddOneValueVal = rtrSAddOneTagStrip.substring((rtrSAddOneValueStart+8),(rtrSAddOneValueEnd));
				rtrSAddOneValueHolder = rtrSAddOneValueVal;
				var rtrSAddOneValueRender = " placeholder='"+rtrSAddOneValueVal+"' onfocus='fieldBlurFocus(\"panel5RTRSAddOne\",\""+rtrSAddOneValueVal+"\",1); onblur='fieldBlurFocus(\"panel5RTRSAddOne\",\""+rtrSAddOneValueVal+"\",0);'";
			}
			else {
				var rtrSAddOneValueRender = "";
			}
			var rtrSAddOneReqStart = rtrSAddOneTagStrip.indexOf(" REQUIRED");
			if (rtrSAddOneReqStart != -1) {
				var rtrSAddOneReqRender = " class='panel_5_rtr_saddone panel_5_rtr_saddone_base panel_5_required'";
			}
			else {
				var rtrSAddOneReqRender = " class='panel_5_rtr_saddone panel_5_rtr_saddone_base'";
			}
			rtrSAddOneRender = "<input type='text' name='panel5RTRSAddOne' id='panel5RTRSAddOne'" + rtrSAddOneReqRender + " onkeyup='panel5FieldKeypress(event,\"panel5RTRSAddOne\",0);'" + rtrSAddOneValueRender + " title=\"Store Address\">";
			baseHTML = rtrSAddOneHTMLStart + rtrSAddOneRender + rtrSAddOneHTMLEnd;
		}
		else {
			baseHTML += "<input type='hidden' name='panel5RTRSAddOne' id='panel5RTRSAddOne' value='' title=\"Store Address\">";
		}
		var rtrSCityTagStart = baseHTML.indexOf("<!--RTRSCITY");
		if (rtrSCityTagStart != -1) {
			var rtrSCityTagEnd = baseHTML.indexOf(">",rtrSCityTagStart);
			var rtrSCityTagStrip = baseHTML.substring(rtrSCityTagStart,(rtrSCityTagEnd+1));
			var rtrSCityHTMLStart = baseHTML.substr(0,rtrSCityTagStart);
			var rtrSCityHTMLEnd = baseHTML.substr((rtrSCityTagEnd+1));
			var rtrSCityRender = "";
			var rtrSCityValueStart = rtrSCityTagStrip.indexOf(" VALUE=");
			if (rtrSCityValueStart != -1) {
				var rtrSCityValueEnd = rtrSCityTagStrip.indexOf("]", rtrSCityValueStart);
				var rtrSCityValueVal = rtrSCityTagStrip.substring((rtrSCityValueStart+8),(rtrSCityValueEnd));
				rtrSCityValueHolder = rtrSCityValueVal;
				var rtrSCityValueRender = " placeholder='"+rtrSCityValueVal+"' onfocus='fieldBlurFocus(\"panel5RTRSCity\",\""+rtrSCityValueVal+"\",1); onblur='fieldBlurFocus(\"panel5RTRSCity\",\""+rtrSCityValueVal+"\",0);'";
			}
			else {
				var rtrSCityValueRender = "";
			}
			var rtrSCityReqStart = rtrSCityTagStrip.indexOf(" REQUIRED");
			if (rtrSCityReqStart != -1) {
				var rtrSCityReqRender = " class='panel_5_rtr_scity panel_5_rtr_scity_base panel_5_required'";
			}
			else {
				var rtrSCityReqRender = " class='panel_5_rtr_scity panel_5_rtr_scity_base'";
			}
			rtrSCityRender = "<input type='text' name='panel5RTRSCity' id='panel5RTRSCity'" + rtrSCityReqRender + " onkeyup='panel5FieldKeypress(event,\"panel5RTRSCity\",0);'" + rtrSCityValueRender + " title=\"Store City\">";
			baseHTML = rtrSCityHTMLStart + rtrSCityRender + rtrSCityHTMLEnd;
		}
		else {
			baseHTML += "<input type='hidden' name='panel5RTRSCity' id='panel5RTRSCity' value='' title=\"Store City\">";
		}
		var rtrSStateTagStart = baseHTML.indexOf("<!--RTRSSTATE");
		if (rtrSStateTagStart != -1) {
			var rtrSStateTagEnd = baseHTML.indexOf(">",rtrSStateTagStart);
			var rtrSStateTagStrip = baseHTML.substring(rtrSStateTagStart,(rtrSStateTagEnd+1));
			var rtrSStateHTMLStart = baseHTML.substr(0,rtrSStateTagStart);
			var rtrSStateHTMLEnd = baseHTML.substr((rtrSStateTagEnd+1));
			var rtrSStateRender = "";
			var rtrSStateValueStart = rtrSStateTagStrip.indexOf(" VALUE=");
			if (rtrSStateValueStart != -1) {
				var rtrSStateValueEnd = rtrSStateTagStrip.indexOf("]", rtrSStateValueStart);
				var rtrSStateValueVal = rtrSStateTagStrip.substring((rtrSStateValueStart+8),(rtrSStateValueEnd));
				rtrSStateValueHolder = rtrSStateValueVal;
				var rtrSStateValueRender = " placeholder='"+rtrSStateValueVal+"' onfocus='fieldBlurFocus(\"panel5RTRSState\",\""+rtrSStateValueVal+"\",1); onblur='fieldBlurFocus(\"panel5RTRSState\",\""+rtrSStateValueVal+"\",0);'";
			}
			else {
				var rtrSStateValueRender = "";
			}
			var rtrSStateReqStart = rtrSStateTagStrip.indexOf(" REQUIRED");
			if (rtrSStateReqStart != -1) {
				var rtrSStateReqRender = " class='panel_5_rtr_sstate panel_5_rtr_sstate_base panel_5_required'";
			}
			else {
				var rtrSStateReqRender = " class='panel_5_rtr_sstate panel_5_rtr_sstate_base'";
			}
			rtrSStateRender = "<input type='text' name='panel5RTRSState' id='panel5RTRSState'" + rtrSStateReqRender + " onkeyup='panel5FieldKeypress(event,\"panel5RTRSState\",0);'" + rtrSStateValueRender + " title=\"Store State\">";
			baseHTML = rtrSStateHTMLStart + rtrSStateRender + rtrSStateHTMLEnd;
		}
		else {
			baseHTML += "<input type='hidden' name='panel5RTRSState' id='panel5RTRSState' value='' title=\"Store State\">";
		}
		var rtrSZipTagStart = baseHTML.indexOf("<!--RTRSZIP");
		if (rtrSZipTagStart != -1) {
			var rtrSZipTagEnd = baseHTML.indexOf(">",rtrSZipTagStart);
			var rtrSZipTagStrip = baseHTML.substring(rtrSZipTagStart,(rtrSZipTagEnd+1));
			var rtrSZipHTMLStart = baseHTML.substr(0,rtrSZipTagStart);
			var rtrSZipHTMLEnd = baseHTML.substr((rtrSZipTagEnd+1));
			var rtrSZipRender = "";
			var rtrSZipValueStart = rtrSZipTagStrip.indexOf(" VALUE=");
			if (rtrSZipValueStart != -1) {
				var rtrSZipValueEnd = rtrSZipTagStrip.indexOf("]", rtrSZipValueStart);
				var rtrSZipValueVal = rtrSZipTagStrip.substring((rtrSZipValueStart+8),(rtrSZipValueEnd));
				rtrSZipValueHolder = rtrSZipValueVal;
				var rtrSZipValueRender = " placeholder='"+rtrSZipValueVal+"' onfocus='fieldBlurFocus(\"panel5RTRSZip\",\""+rtrSZipValueVal+"\",1); onblur='fieldBlurFocus(\"panel5RTRSZip\",\""+rtrSZipValueVal+"\",0);'";
			}
			else {
				var rtrSZipValueRender = "";
			}
			var rtrSZipReqStart = rtrSZipTagStrip.indexOf(" REQUIRED");
			if (rtrSZipReqStart != -1) {
				var rtrSZipReqRender = " class='panel_5_rtr_szip panel_5_rtr_szip_base panel_5_required'";
			}
			else {
				var rtrSZipReqRender = " class='panel_5_rtr_szip panel_5_rtr_szip_base'";
			}
			rtrSZipRender = "<input type='text' name='panel5RTRSZip' id='panel5RTRSZip'" + rtrSZipReqRender + " onkeyup='panel5FieldKeypress(event,\"panel5RTRSZip\",0);'" + rtrSZipValueRender + " title=\"Store Postal Code\">";
			baseHTML = rtrSZipHTMLStart + rtrSZipRender + rtrSZipHTMLEnd;
		}
		else {
			baseHTML += "<input type='hidden' name='panel5RTRSZip' id='panel5RTRSZip' value='' title=\"Store Postal Code\">";
		}
		var rtrCountryTagStart = baseHTML.indexOf("<!--RTRSCOUNTRY");
		if (rtrCountryTagStart != -1) {
			var rtrCountryTagEnd = baseHTML.indexOf(">",rtrCountryTagStart);
			var rtrCountryTagStrip = baseHTML.substring(rtrCountryTagStart,(rtrCountryTagEnd+1));
			var rtrCountryHTMLStart = baseHTML.substr(0,rtrCountryTagStart);
			var rtrCountryHTMLEnd = baseHTML.substr((rtrCountryTagEnd+1));
			var rtrCountryRender = "";
			var rtrCountryValueStart = rtrCountryTagStrip.indexOf(" VALUE=");
			if (rtrCountryValueStart != -1) {
				var rtrCountryValueEnd = rtrCountryTagStrip.indexOf("]",rtrCountryValueStart);
				var rtrCountryValueVal = rtrCountryTagStrip.substring((rtrCountryValueStart+8),(rtrCountryValueEnd));
			}
			else {
				var rtrCountryValueVal = "SELECT COUNTRY";
			}
			var rtrCountryReqStart = rtrCountryTagStrip.indexOf(" REQUIRED");
			if (rtrCountryReqStart != -1) {
				var rtrCountryReqRender = " class='panel_5_rtr_country panel_5_rtr_country_base panel_5_required'";
			}
			else {
				var rtrCountryReqRender = " class='panel_5_rtr_country panel_5_rtr_country_base'";
			}
			var rtrCountryItalicStart = rtrCountryTagStrip.indexOf(" FNTAW=");
			if (rtrCountryItalicStart != -1) {
				var rtrCountryItalicEnd = rtrCountryTagStrip.indexOf("]",rtrCountryItalicStart);
				rtrCountryItalicVar = "<i class='fa " + rtrCountryTagStrip.substring((rtrCountryItalicStart+8),(rtrCountryItalicEnd)) + "'><\/i>";
			}
			else {
				rtrCountryItalicVar = "";
			}
			rtrCountryRender += "<div id='panel5CountryDivShell' class='panel_5_country_div_shell'><div class='panel_5_country_div_filter_arrow'><div class='panel_5_country_div_filter panel_5_country_div_filter_base panel_5_country_div_filter_base_off'";
			if (hoverState==1) {
				rtrCountryRender += " onmouseover='genericButtonOver(\"panel_5_country_div_filter\",\"panel_5_country_div_filter_base\");' onfocus='genericButtonOver(\"panel_5_country_div_filter\",\"panel_5_country_div_filter_base\");' onmouseout='genericButtonOut(\"panel_5_country_div_filter\",\"panel_5_country_div_filter_base\");' onblur='genericButtonOut(\"panel_5_country_div_filter\",\"panel_5_country_div_filter_base\");'";
			}
			rtrCountryRender += " onclick='$(\".panel_5_country_div_filter_slider\").toggle();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){$(\".panel_5_country_div_filter_slider\").toggle();}' tabindex='0' title=\"" + rtrCountryValueVal + "\"><div class='panel_5_country_div_filter_text'><span id='panel5CountryDivText'>" + rtrCountryValueVal + "<\/span>" + rtrCountryItalicVar + "<\/div><\/div><\/div><div class='panel_5_country_div_filter_slider panel_close_me' style='display:none;'><div class='panel_5_country_div_filter_liner'>";
			var countryUp = 0;
			if(gLog==1){console.log("RTRSCOUNTRY - countryArray.length: " , countryArray.length);}
			for (w=0; w<countryArray.length; w++) {
				if (countryArray[w][5] == 2) {
					countryUp = 1;
					rtrCountryRender += "<div class='panel_5_country_div_filter_item_" + countryArray[w][0] + " panel_5_country_div_filter_item panel_5_country_div_filter_item_off'";
					if (hoverState==1) {
						rtrCountryRender += " onmouseover='genericButtonOver(\"panel_5_country_div_filter_item_" + countryArray[w][0] + "\",\"panel_5_country_div_filter_item\");' onfocus='genericButtonOver(\"panel_5_country_div_filter_item_" + countryArray[w][0] + "\",\"panel_5_country_div_filter_item\");' onmouseout='genericButtonOut(\"panel_5_country_div_filter_item_" + countryArray[w][0] + "\",\"panel_5_country_div_filter_item\");' onblur='genericButtonOut(\"panel_5_country_div_filter_item_" + countryArray[w][0] + "\",\"panel_5_country_div_filter_item\");'";
					}
					rtrCountryRender += " onclick='panel5CountrySelect(" + w + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5CountrySelect(" + w + ");}' tabindex='0' title=\"" + countryArray[w][1] + "\">" + countryArray[w][1] + "<\/div>";
				}
			}
			if (countryUp == 1) {
				rtrCountryRender += "<div class='panel_5_country_div_filter_item_0 panel_5_country_div_filter_item panel_5_country_div_filter_item_line'>------------------<\/div>";
			}
			for (w=0; w<countryArray.length; w++) {
				if (countryArray[w][5] == 1) {
					countryUp = 1;
					rtrCountryRender += "<div class='panel_5_country_div_filter_item_" + countryArray[w][0] + " panel_5_country_div_filter_item panel_5_country_div_filter_item_off'";
					if (hoverState==1) {
						rtrCountryRender += " onmouseover='genericButtonOver(\"panel_5_country_div_filter_item_" + countryArray[w][0] + "\",\"panel_5_country_div_filter_item\");' onfocus='genericButtonOver(\"panel_5_country_div_filter_item_" + countryArray[w][0] + "\",\"panel_5_country_div_filter_item\");' onmouseout='genericButtonOut(\"panel_5_country_div_filter_item_" + countryArray[w][0] + "\",\"panel_5_country_div_filter_item\");' onblur='genericButtonOut(\"panel_5_country_div_filter_item_" + countryArray[w][0] + "\",\"panel_5_country_div_filter_item\");'";
					}
					rtrCountryRender += " onclick='panel5CountrySelect(" + w + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5CountrySelect(" + w + ");}' tabindex='0' title=\"" + countryArray[w][1] + "\">" + countryArray[w][1] + "<\/div>";
				}
			}
			rtrCountryRender += "<\/div><\/div><\/div>";
			rtrCountryRender += "<input type='hidden' name='panel5RTRSCountry' id='panel5RTRSCountry'" + rtrCountryReqRender + " value='' title=\"Store Country\">";
			baseHTML = rtrCountryHTMLStart + rtrCountryRender + rtrCountryHTMLEnd;
		}
		else {
			baseHTML += "<input type='hidden' name='panel5RTRSCountry' id='panel5RTRSCountry' value='' title=\"Store Country\">";
		}
		var rtrSPhoneTagStart = baseHTML.indexOf("<!--RTRSPHONE");
		if (rtrSPhoneTagStart != -1) {
			var rtrSPhoneTagEnd = baseHTML.indexOf(">",rtrSPhoneTagStart);
			var rtrSPhoneTagStrip = baseHTML.substring(rtrSPhoneTagStart,(rtrSPhoneTagEnd+1));
			var rtrSPhoneHTMLStart = baseHTML.substr(0,rtrSPhoneTagStart);
			var rtrSPhoneHTMLEnd = baseHTML.substr((rtrSPhoneTagEnd+1));
			var rtrSPhoneRender = "";
			var rtrSPhoneValueStart = rtrSPhoneTagStrip.indexOf(" VALUE=");
			if (rtrSPhoneValueStart != -1) {
				var rtrSPhoneValueEnd = rtrSPhoneTagStrip.indexOf("]", rtrSPhoneValueStart);
				var rtrSPhoneValueVal = rtrSPhoneTagStrip.substring((rtrSPhoneValueStart+8),(rtrSPhoneValueEnd));
				rtrSPhoneValueHolder = rtrSPhoneValueVal;
				var rtrSPhoneValueRender = " placeholder='"+rtrSPhoneValueVal+"' onfocus='fieldBlurFocus(\"panel5RTRSPhone\",\""+rtrSPhoneValueVal+"\",1); onblur='fieldBlurFocus(\"panel5RTRSPhone\",\""+rtrSPhoneValueVal+"\",0);'";
			}
			else {
				var rtrSPhoneValueRender = "";
			}
			var rtrSPhoneReqStart = rtrSPhoneTagStrip.indexOf(" REQUIRED");
			if (rtrSPhoneReqStart != -1) {
				var rtrSPhoneReqRender = " class='panel_5_rtr_sphone panel_5_rtr_sphone_base panel_5_required'";
			}
			else {
				var rtrSPhoneReqRender = " class='panel_5_rtr_sphone panel_5_rtr_sphone_base'";
			}
			rtrSPhoneRender = "<input type='text' name='panel5RTRSPhone' id='panel5RTRSPhone'" + rtrSPhoneReqRender + " onkeyup='panel5FieldKeypress(event,\"panel5RTRSPhone\",0);'" + rtrSPhoneValueRender + " title=\"Store Phone\">";
			baseHTML = rtrSPhoneHTMLStart + rtrSPhoneRender + rtrSPhoneHTMLEnd;
		}
		else {
			baseHTML += "<input type='hidden' name='panel5RTRSPhone' id='panel5RTRSPhone' value='' title=\"Store Phone\">";
		}
		var rtrSubmitTagStart = baseHTML.indexOf("<!--RTRSUBMIT");
		if (rtrSubmitTagStart != -1) {
			var rtrSubmitTagEnd = baseHTML.indexOf(">",rtrSubmitTagStart);
			var rtrSubmitTagStrip = baseHTML.substring(rtrSubmitTagStart,(rtrSubmitTagEnd+1));
			var rtrSubmitHTMLStart = baseHTML.substr(0,rtrSubmitTagStart);
			var rtrSubmitHTMLEnd = baseHTML.substr((rtrSubmitTagEnd+1));
			var rtrSubmitRender = "";
			var rtrSubmitValueStart = rtrSubmitTagStrip.indexOf(" VALUE=");
			var rtrSubmitValueEnd = rtrSubmitTagStrip.indexOf("]",rtrSubmitValueStart);
			if (rtrSubmitValueStart != -1) {
				rtrSubmitValueVar = rtrSubmitTagStrip.substring((rtrSubmitValueStart+8),(rtrSubmitValueEnd));
			}
			else {
				rtrSubmitValueVar = "NEXT";
			}
			var rtrSubmitItalicStart = rtrSubmitTagStrip.indexOf(" FNTAW=");
			var rtrSubmitItalicEnd = rtrSubmitTagStrip.indexOf("]",rtrSubmitItalicStart);
			if (rtrSubmitItalicStart != -1) {
				rtrSubmitItalicVar = "<i class='fa " + rtrSubmitTagStrip.substring((rtrSubmitItalicStart+8),(rtrSubmitItalicEnd)) + "'><\/i>";
			}
			else {
				rtrSubmitItalicVar = "";
			}
			rtrSubmitRender += "<div id='panel5RTRSubmit' class='panel_5_rtr_submit panel_5_rtr_submit_off'";
			if (hoverState==1) {
				rtrSubmitRender += " onmouseover='panel5ButtonHover(\"panel5RTRSubmit\",\"panel_5_rtr_submit\",1);' onfocus='panel5ButtonHover(\"panel5RTRSubmit\",\"panel_5_rtr_submit\",1);' onmouseout='panel5ButtonHover(\"panel5RTRSubmit\",\"panel_5_rtr_submit\",0);' onblur='panel5ButtonHover(\"panel5RTRSubmit\",\"panel_5_rtr_submit\",0);'";
			}
			rtrSubmitRender += " onclick='panel5RTRSubmit();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5RTRSubmit();}' tabindex='0' title=\"" + rtrSubmitValueVar + "\">" + rtrSubmitItalicVar + rtrSubmitValueVar + "<\/div>";
			baseHTML = rtrSubmitHTMLStart + rtrSubmitRender + rtrSubmitHTMLEnd;
		}
		var rtrRepUIDTagStart = baseHTML.indexOf("<!--RTRREPUID");
		if (rtrRepUIDTagStart != -1) {
			var rtrRepUIDTagEnd = baseHTML.indexOf(">",rtrRepUIDTagStart);
			var rtrRepUIDTagStrip = baseHTML.substring(rtrRepUIDTagStart,(rtrRepUIDTagEnd+1));
			var rtrRepUIDHTMLStart = baseHTML.substr(0,rtrRepUIDTagStart);
			var rtrRepUIDHTMLEnd = baseHTML.substr((rtrRepUIDTagEnd+1));
			var rtrRepUIDRender = "";
			rtrRepUIDRender = "<input type='text' name='panel5RTRRepUID' id='panel5RTRRepUID' class='panel_5_rtr_repuid panel_5_rtr_repuid_base' onkeyup='panel5FieldKeypress(event,\"panel5RTRRepUID\",0);' title=\"User ID\">";
			baseHTML = rtrRepUIDHTMLStart + rtrRepUIDRender + rtrRepUIDHTMLEnd;
		}
		var rtrRepPWDTagStart = baseHTML.indexOf("<!--RTRREPPWD");
		if (rtrRepPWDTagStart != -1) {
			var rtrRepPWDTagEnd = baseHTML.indexOf(">",rtrRepPWDTagStart);
			var rtrRepPWDTagStrip = baseHTML.substring(rtrRepPWDTagStart,(rtrRepPWDTagEnd+1));
			var rtrRepPWDHTMLStart = baseHTML.substr(0,rtrRepPWDTagStart);
			var rtrRepPWDHTMLEnd = baseHTML.substr((rtrRepPWDTagEnd+1));
			var rtrRepPWDRender = "";
			rtrRepPWDRender = "<input type='password' name='panel5RTRRepPWD' id='panel5RTRRepPWD' class='panel_5_rtr_reppwd panel_5_rtr_reppwd_base' onkeyup='panel5FieldKeypress(event,\"panel5RTRRepPWD\",0);' title=\"User Password\">";
			baseHTML = rtrRepPWDHTMLStart + rtrRepPWDRender + rtrRepPWDHTMLEnd;
		}
		var multiMapSearchOn = 1;
		while (multiMapSearchOn == 1) {
			var multiMapTagStart = baseHTML.indexOf("<!--MULTIMAP");
			if (multiMapTagStart != -1) {
				var multiMapTagEnd = baseHTML.indexOf(">",multiMapTagStart);
				var multiMapTagStrip = baseHTML.substring(multiMapTagStart,(multiMapTagEnd+1));
				var baseMultiMapHTMLStart = baseHTML.substr(0,multiMapTagStart);
				var baseMultiMapHTMLEnd = baseHTML.substr((multiMapTagEnd+1));
				baseHTML = baseMultiMapHTMLStart + "<div id='panel5MultiMap' class='panel_5_multi_map'><\/div>" + baseMultiMapHTMLEnd;
			}
			else {
				multiMapSearchOn = 0;
			}
		}
		document.getElementById('panel5templates').innerHTML = baseHTML;
		if (document.getElementById('panel5MultiMap')) {
			setTimeout(function(){
				panel5DrawMultiMap();
			}, 300);
		}
		if (document.getElementById('panel5CCFormShell')) {
			setTimeout(function(){
				panel5WriteCCForm();
			}, 300);
		}
		if (document.getElementById('panel5ProdShopCartShell')) {
			panel5WriteProdCart();
		}
		if (cPanelOp == 1) {
			if (document.getElementById("PROD").value.length == document.getElementById("FULLPROD").value.length || document.getElementById("PROD").value.length == "") {
				controlPanelClearCart();
			}
		}
		if (cpP5 != 0 && cpWritten == 0) {
			cpWrite();
		}
		if (cpsP5 != 0 && cpsWritten == 0) {
			cpSmallWrite();
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
		if (document.getElementById('panel5AddressField')) {
			if (document.getElementById('street').value != "") {
				if($('#panel5AddressField').hasClass('enforce_blank')){}else{
					document.getElementById('panel5AddressField').value = document.getElementById('street').value;
				}
			}
		}
		if (document.getElementById('panel5CityField')) {
			if (document.getElementById('city').value != "") {
				document.getElementById('panel5CityField').value = document.getElementById('city').value;
			}
		}
		if (document.getElementById('panel5StateField')) {
			if (document.getElementById('state').value != "") {
				document.getElementById('panel5StateField').value = document.getElementById('state').value;
			}
		}
		if (document.getElementById('panel5ZipField')) {
			if (document.getElementById('zip').value != "") {
				document.getElementById('panel5ZipField').value = document.getElementById('zip').value;
			}
		}
		panelSwitch(whatPanelUp,"panel5",transNext);
		if (document.getElementById('panel5ScopeField')) {
			for (scopeIncr=0; scopeIncr<document.getElementById('panel5ScopeSelect').length; scopeIncr++) {
				if (document.getElementById('panel5ScopeSelect').options[scopeIncr].value == document.getElementById('scope').value) {
					document.getElementById('panel5ScopeSelect').options[scopeIncr].selected = true;
					document.getElementById('panel5ScopeField').value = document.getElementById('scope').value;
					break;
				}
			}
		}
		if (document.getElementById('panel5DistanceSelect')) {
			for (distanceIncr=0; distanceIncr<document.getElementById('panel5DistanceSelect').length; distanceIncr++) {
				if (document.getElementById('panel5DistanceSelect').options[distanceIncr].value == document.getElementById('distance').value) {
					document.getElementById('panel5DistanceSelect').options[distanceIncr].selected = true;
					document.getElementById('panel5DistanceField').value = document.getElementById('distance').value;
					break;
				}
			}
		}
		if (document.getElementById('panel5ResultsSelect')) {
			for (resultsIncr=0; resultsIncr<document.getElementById('panel5ResultsSelect').length; resultsIncr++) {
				if (document.getElementById('panel5ResultsSelect').options[resultsIncr].value == document.getElementById('results').value) {
					document.getElementById('panel5ResultsSelect').options[resultsIncr].selected = true;
					document.getElementById('panel5ResultsField').value = document.getElementById('results').value;
					break;
				}
			}
		}
		if (document.getElementById('panel5SortSelect')) {
			for (sortIncr=0; sortIncr<document.getElementById('panel5SortSelect').length; sortIncr++) {
				if (document.getElementById('panel5SortSelect').options[sortIncr].value == document.getElementById('sort').value) {
					document.getElementById('panel5SortSelect').options[sortIncr].selected = true;
					document.getElementById('panel5SortField').value = document.getElementById('sort').value;
					break;
				}
			}
		}
	}
	if (panel1Written==0) {
		setTimeout(function(){
			p1LoadType = 1;
			p1Connect();
		},2000);
	}
	whatPanelUp = "panel5";
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
			$.post(controlURL + "tracktest.php", {
				CB: noCache,
				TLL: tlVal,
				A1: trackVal,
				UP1: "PANEL5",
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
				TRACK: "1",
				PCT: p5ct,
				DUTV: dutv
				}, function(data){
					if(gLog==1){console.log("panel5Load - tracktest: " , JSON.parse(data));}
				}
			);
		},1000);
	}
	else if (trackVal == 2 && allOnOne == 0) {
		setTimeout(function(){
			var sendObj = setTrackObj();
			sendObj['TRK'] = 1;
			sendObj['RQF'] = "panel5Load";
			sendObj['LOC'] = {};
			sendObj['LOC']['CMP'] = document.getElementById('addressCompile').value.replace(/"/g, '');
			sendObj['LOC']['LAT'] = parseFloat(document.getElementById('LA').value).toFixed(5);
			sendObj['LOC']['LNG'] = parseFloat(document.getElementById('LO').value).toFixed(5);
			sendObj['LOC']['CTY'] = document.getElementById('revCodeCity').value.replace(/"/g, '');
			sendObj['LOC']['STA'] = document.getElementById('revCodeState').value;
			sendObj['LOC']['ZIP'] = document.getElementById('revCodeZip').value;
			sendObj['LOC']['CNT'] = document.getElementById('revCodeCountry').value;
			sendObj['LOC']['USC'] = document.getElementById('revCodeUS').value;
			sendObj['PCT'] = p5ct;
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
}
function panel5FamImgReplace(whatState,whatID) {
	if (whatState == 1) {
		if (document.getElementById('panel5FamilyBigImgDivBack'+whatID) && $(".panel_5_family_big_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_5_family_big_img_div_over_"+whatID).show();
			$(".panel_5_family_big_img_div_back_"+whatID).removeClass('panel_5_family_big_img_div_back_off');
			$(".panel_5_family_big_img_div_back_"+whatID).addClass('panel_5_family_big_img_div_back_on');
		}
		if (document.getElementById('panel5FamilySmImgDivBack'+whatID) && $(".panel_5_family_sm_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_5_family_sm_img_div_over_"+whatID).show();
			$(".panel_5_family_sm_img_div_back_"+whatID).removeClass('panel_5_family_sm_img_div_back_off');
			$(".panel_5_family_sm_img_div_back_"+whatID).addClass('panel_5_family_sm_img_div_back_on');
		}
	}
	else {
		if (document.getElementById('panel5FamilyBigImgDivBack'+whatID) && $(".panel_5_family_big_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_5_family_big_img_div_over_"+whatID).hide();
			$(".panel_5_family_big_img_div_back_"+whatID).addClass('panel_5_family_big_img_div_back_off');
			$(".panel_5_family_big_img_div_back_"+whatID).removeClass('panel_5_family_big_img_div_back_on');
		}
		if (document.getElementById('panel5FamilySmImgDivBack'+whatID) && $(".panel_5_family_sm_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_5_family_sm_img_div_over_"+whatID).hide();
			$(".panel_5_family_sm_img_div_back_"+whatID).addClass('panel_5_family_sm_img_div_back_off');
			$(".panel_5_family_sm_img_div_back_"+whatID).removeClass('panel_5_family_sm_img_div_back_on');
		}
	}
}
function panel5CatImgReplace(whatState,whatID) {
	if (whatState == 1) {
		if (document.getElementById('panel5CategoryBigImgDivBack'+whatID) && $(".panel_5_category_big_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_5_category_big_img_div_over_"+whatID).show();
			$(".panel_5_category_big_img_div_back_"+whatID).removeClass('panel_5_category_big_img_div_back_off');
			$(".panel_5_category_big_img_div_back_"+whatID).addClass('panel_5_category_big_img_div_back_on');
		}
		if (document.getElementById('panel5CategorySmImgDivBack'+whatID) && $(".panel_5_category_sm_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_5_category_sm_img_div_over_"+whatID).show();
			$(".panel_5_category_sm_img_div_back_"+whatID).removeClass('panel_5_category_sm_img_div_back_off');
			$(".panel_5_category_sm_img_div_back_"+whatID).addClass('panel_5_category_sm_img_div_back_on');
		}
	}
	else {
		if (document.getElementById('panel5CategoryBigImgDivBack'+whatID) && $(".panel_5_category_big_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_5_category_big_img_div_over_"+whatID).hide();
			$(".panel_5_category_big_img_div_back_"+whatID).addClass('panel_5_category_big_img_div_back_off');
			$(".panel_5_category_big_img_div_back_"+whatID).removeClass('panel_5_category_big_img_div_back_on');
		}
		if (document.getElementById('panel5CategorySmImgDivBack'+whatID) && $(".panel_5_category_sm_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_5_category_sm_img_div_over_"+whatID).hide();
			$(".panel_5_category_sm_img_div_back_"+whatID).addClass('panel_5_category_sm_img_div_back_off');
			$(".panel_5_category_sm_img_div_back_"+whatID).removeClass('panel_5_category_sm_img_div_back_on');
		}
	}
}
var p5clickyFamImg = 0;
function panel5FamImgClick(whatID) {
	$(".panel_5_family_big_img_div_over").hide();
	$(".panel_5_family_big_img_div_back").addClass('panel_5_family_big_img_div_back_off');
	$(".panel_5_family_big_img_div_back").removeClass('panel_5_family_big_img_div_back_on');
	$(".panel_5_family_big_img_div_back").addClass('img_replace_active');
	$(".panel_5_family_big_img_div_back").removeClass('img_replace_static');
	$(".panel_5_family_sm_img_div_over").hide();
	$(".panel_5_family_sm_img_div_back").addClass('panel_5_family_sm_img_div_back_off');
	$(".panel_5_family_sm_img_div_back").removeClass('panel_5_family_sm_img_div_back_on');
	$(".panel_5_family_sm_img_div_back").addClass('img_replace_active');
	$(".panel_5_family_sm_img_div_back").removeClass('img_replace_static');
	if (whatID != p5clickyFamImg) {
		$(".panel_5_family_big_img_div_over_"+whatID).show();
		$(".panel_5_family_big_img_div_back_"+whatID).removeClass('panel_5_family_big_img_div_back_off');
		$(".panel_5_family_big_img_div_back_"+whatID).addClass('panel_5_family_big_img_div_back_on');
		$(".panel_5_family_big_img_div_back_"+whatID).addClass('img_replace_static');
		$(".panel_5_family_big_img_div_back_"+whatID).removeClass('img_replace_active');
		$(".panel_5_family_sm_img_div_over_"+whatID).show();
		$(".panel_5_family_sm_img_div_back_"+whatID).removeClass('panel_5_family_sm_img_div_back_off');
		$(".panel_5_family_sm_img_div_back_"+whatID).addClass('panel_5_family_sm_img_div_back_on');
		$(".panel_5_family_sm_img_div_back_"+whatID).addClass('img_replace_static');
		$(".panel_5_family_sm_img_div_back_"+whatID).removeClass('img_replace_active');
		p5clickyFamImg = whatID;
	}
	else {
		p5clickyFamImg = 0;
	}
}
var p5clickyCatImg = 0;
function panel5CatImgClick(whatID) {
	$(".panel_5_category_big_img_div_over").hide();
	$(".panel_5_category_big_img_div_back").addClass('panel_5_category_big_img_div_back_off');
	$(".panel_5_category_big_img_div_back").removeClass('panel_5_category_big_img_div_back_on');
	$(".panel_5_category_big_img_div_back").addClass('img_replace_active');
	$(".panel_5_category_big_img_div_back").removeClass('img_replace_static');
	$(".panel_5_category_sm_img_div_over").hide();
	$(".panel_5_category_sm_img_div_back").addClass('panel_5_category_sm_img_div_back_off');
	$(".panel_5_category_sm_img_div_back").removeClass('panel_5_category_sm_img_div_back_on');
	$(".panel_5_category_sm_img_div_back").addClass('img_replace_active');
	$(".panel_5_category_sm_img_div_back").removeClass('img_replace_static');
	if (whatID != p5clickyCatImg) {
		$(".panel_5_category_big_img_div_over_"+whatID).show();
		$(".panel_5_category_big_img_div_back_"+whatID).removeClass('panel_5_category_big_img_div_back_off');
		$(".panel_5_category_big_img_div_back_"+whatID).addClass('panel_5_category_big_img_div_back_on');
		$(".panel_5_category_big_img_div_back_"+whatID).addClass('img_replace_static');
		$(".panel_5_category_big_img_div_back_"+whatID).removeClass('img_replace_active');
		$(".panel_5_category_sm_img_div_over_"+whatID).show();
		$(".panel_5_category_sm_img_div_back_"+whatID).removeClass('panel_5_category_sm_img_div_back_off');
		$(".panel_5_category_sm_img_div_back_"+whatID).addClass('panel_5_category_sm_img_div_back_on');
		$(".panel_5_category_sm_img_div_back_"+whatID).addClass('img_replace_static');
		$(".panel_5_category_sm_img_div_back_"+whatID).removeClass('img_replace_active');
		p5clickyCatImg = whatID;
	}
	else {
		p5clickyCatImg = 0;
	}
}
function panel5SelectFam(famVar,famID,famString,showHide) {
	p5PLFamSort = famArray[famVar][0];
	$('.panel_5_prodlist_famreset').removeClass('panel_5_prodlist_famreset_on');
	$('.panel_5_prodlist_famreset').removeClass('panel_5_prodlist_famreset_hover');
	$('.panel_5_prodlist_famreset').addClass('panel_5_prodlist_famreset_off');
	whatStoreUp = 0;
	var whatFamSet = 0;
	if (document.getElementById(famID)) {
		for (y=0; y<famArray.length; y++) {
			if (famVar == y && famArray[famVar][5] == 0) {
				$('#panel5FamilyName'+famArray[famVar][0]).removeClass('panel_5_family_name_hover');
				$('#panel5FamilyName'+famArray[famVar][0]).removeClass('panel_5_family_name_off');
				$('#panel5FamilyName'+famArray[famVar][0]).addClass('panel_5_family_name_on');
				$('#panel5FamilyName'+famArray[famVar][0]+'All').removeClass('panel_5_family_name_all_hover');
				$('#panel5FamilyName'+famArray[famVar][0]+'All').removeClass('panel_5_family_name_all_off');
				$('#panel5FamilyName'+famArray[famVar][0]+'All').addClass('panel_5_family_name_all_on');
				$('.panel_5_prodlist_famshell_'+famArray[famVar][0]).removeClass('panel_5_prodlist_famshell_off');
				$('.panel_5_prodlist_famshell_'+famArray[famVar][0]).addClass('panel_5_prodlist_famshell_on');
				famArray[famVar][5] = "1";
				window["panel1FamilyNameVar"+famArray[famVar][0]] = 1;
				whatFamSet = 1;
			}
			else {
				$('#panel5FamilyName'+famArray[y][0]).removeClass('panel_5_family_name_hover');
				$('#panel5FamilyName'+famArray[y][0]).removeClass('panel_5_family_name_on');
				$('#panel5FamilyName'+famArray[y][0]).addClass('panel_5_family_name_off');
				$('#panel5FamilyName'+famArray[y][0]+'All').removeClass('panel_5_family_name_all_hover');
				$('#panel5FamilyName'+famArray[y][0]+'All').removeClass('panel_5_family_name_all_on');
				$('#panel5FamilyName'+famArray[y][0]+'All').addClass('panel_5_family_name_all_off');
				$('.panel_5_prodlist_famshell_'+famArray[famVar][0]).removeClass('panel_5_prodlist_famshell_on');
				$('.panel_5_prodlist_famshell_'+famArray[famVar][0]).addClass('panel_5_prodlist_famshell_off');
				famArray[y][5] = "0";
				window["panel1FamilyNameVar"+famArray[y][0]] = 0;
			}
		}
		if (showHide) {
			for (x=0;x<prodFilterArray.length;x++) {
				if (document.getElementById('panel5ProductName'+prodFilterArray[x][0])) {
					if (whatFamSet == 1) {
						var showThisOne = 1;
						for (q=0; q<prodCartArray.length; q++) {
							if (prodCartArray[q] == prodFilterArray[x][0]) {
								showThisOne = 0;
								break;
							}
						}
						if (prodFilterArray[x][17] == famArray[famVar][0] && showThisOne == 1) {
							if (document.getElementById('panel5ProductName'+prodFilterArray[x][0])) {document.getElementById('panel5ProductName'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel5ProductDesc'+prodFilterArray[x][0])) {document.getElementById('panel5ProductDesc'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel5ProductCat'+prodFilterArray[x][0])) {document.getElementById('panel5ProductCat'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel5ProductBigImg'+prodFilterArray[x][0])) {document.getElementById('panel5ProductBigImg'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel5ProductSmImg'+prodFilterArray[x][0])) {document.getElementById('panel5ProductSmImg'+prodFilterArray[x][0]).style.display = "block";}
							var j = document.getElementsByClassName('panel_5_prodlist_prodshell_'+prodFilterArray[x][0]);
							for (k=0; k<j.length; k++) {
								j[k].style.display = "block";
							}
						}
						else {
							if (document.getElementById('panel5ProductName'+prodFilterArray[x][0])) {document.getElementById('panel5ProductName'+prodFilterArray[x][0]).style.display = "none";}
							if (document.getElementById('panel5ProductDesc'+prodFilterArray[x][0])) {document.getElementById('panel5ProductDesc'+prodFilterArray[x][0]).style.display = "none";}
							if (document.getElementById('panel5ProductCat'+prodFilterArray[x][0])) {document.getElementById('panel5ProductCat'+prodFilterArray[x][0]).style.display = "none";}
							if (document.getElementById('panel5ProductBigImg'+prodFilterArray[x][0])) {document.getElementById('panel5ProductBigImg'+prodFilterArray[x][0]).style.display = "none";}
							if (document.getElementById('panel5ProductSmImg'+prodFilterArray[x][0])) {document.getElementById('panel5ProductSmImg'+prodFilterArray[x][0]).style.display = "none";}
							var j = document.getElementsByClassName('panel_5_prodlist_prodshell_'+prodFilterArray[x][0]);
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
							if (document.getElementById('panel5ProductName'+prodFilterArray[x][0])) {document.getElementById('panel5ProductName'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel5ProductDesc'+prodFilterArray[x][0])) {document.getElementById('panel5ProductDesc'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel5ProductCat'+prodFilterArray[x][0])) {document.getElementById('panel5ProductCat'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel5ProductBigImg'+prodFilterArray[x][0])) {document.getElementById('panel5ProductBigImg'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel5ProductSmImg'+prodFilterArray[x][0])) {document.getElementById('panel5ProductSmImg'+prodFilterArray[x][0]).style.display = "block";}
							var j = document.getElementsByClassName('panel_5_prodlist_prodshell_'+prodFilterArray[x][0]);
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
						if (document.getElementById('panel5CategoryName'+catArray[c][0])) {document.getElementById('panel5CategoryName'+catArray[c][0]).style.display = "block";}
						if (document.getElementById('panel5CategoryName'+catArray[c][0]+'All')) {document.getElementById('panel5CategoryName'+catArray[c][0]+'All').style.display = "block";}
						if (document.getElementById('panel5CategoryBigImg'+catArray[c][0])) {document.getElementById('panel5CategoryBigImg'+catArray[c][0]).style.display = "block";}
						if (document.getElementById('panel5CategorySmImg'+catArray[c][0])) {document.getElementById('panel5CategorySmImg'+catArray[c][0]).style.display = "block";}
						var j = document.getElementsByClassName('panel_5_prodlist_catshell_'+catArray[c][0]);
						for (k=0; k<j.length; k++) {
							j[k].style.display = "block";
						}
					}
					else {
						if (document.getElementById('panel5CategoryName'+catArray[c][0])) {document.getElementById('panel5CategoryName'+catArray[c][0]).style.display = "none";}
						if (document.getElementById('panel5CategoryName'+catArray[c][0]+'All')) {document.getElementById('panel5CategoryName'+catArray[c][0]+'All').style.display = "none";}
						if (document.getElementById('panel5CategoryBigImg'+catArray[c][0])) {document.getElementById('panel5CategoryBigImg'+catArray[c][0]).style.display = "none";}
						if (document.getElementById('panel5CategorySmImg'+catArray[c][0])) {document.getElementById('panel5CategorySmImg'+catArray[c][0]).style.display = "none";}
						var j = document.getElementsByClassName('panel_5_prodlist_catshell_'+catArray[c][0]);
						for (k=0; k<j.length; k++) {
							j[k].style.display = "none";
						}
					}
				}
				else {
					if (document.getElementById('panel5CategoryName'+catArray[c][0])) {document.getElementById('panel5CategoryName'+catArray[c][0]).style.display = "block";}
					if (document.getElementById('panel5CategoryName'+catArray[c][0]+'All')) {document.getElementById('panel5CategoryName'+catArray[c][0]+'All').style.display = "block";}
					if (document.getElementById('panel5CategoryBigImg'+catArray[c][0])) {document.getElementById('panel5CategoryBigImg'+catArray[c][0]).style.display = "block";}
					if (document.getElementById('panel5CategorySmImg'+catArray[c][0])) {document.getElementById('panel5CategorySmImg'+catArray[c][0]).style.display = "block";}
					var j = document.getElementsByClassName('panel_5_prodlist_catshell_'+catArray[c][0]);
					for (k=0; k<j.length; k++) {
						j[k].style.display = "block";
					}
				}
			}
		}
		if (document.getElementById('panel5ProdShopCartShell')) {
			panel5WriteProdCart();
		}
	}
}
function panel5SelectCat(catVar,catID,catString,showHide) {
	$('.panel_5_prodlist_catreset').removeClass('panel_5_prodlist_catreset_on');
	$('.panel_5_prodlist_catreset').removeClass('panel_5_prodlist_catreset_hover');
	$('.panel_5_prodlist_catreset').addClass('panel_5_prodlist_catreset_off');
	whatStoreUp = 0;
	if (document.getElementById(catID)) {
		if (catArray[catVar][6] == 0) {
			$('#panel5CategoryName'+catArray[catVar][0]).removeClass('panel_5_category_name_hover');
			$('#panel5CategoryName'+catArray[catVar][0]).removeClass('panel_5_category_name_off');
			$('#panel5CategoryName'+catArray[catVar][0]).addClass('panel_5_category_name_on');
			$('#panel5CategoryName'+catArray[catVar][0]+'All').removeClass('panel_5_category_name_all_hover');
			$('#panel5CategoryName'+catArray[catVar][0]+'All').removeClass('panel_5_category_name_all_off');
			$('#panel5CategoryName'+catArray[catVar][0]+'All').addClass('panel_5_category_name_all_on');
			$('.panel_5_prodlist_catshell_'+catArray[catVar][0]).removeClass('panel_5_prodlist_catshell_off');
			$('.panel_5_prodlist_catshell_'+catArray[catVar][0]).addClass('panel_5_prodlist_catshell_on');
			catArray[catVar][6] = "1";
			window["panel1CategoryNameVar"+catArray[catVar][0]] = 1;
			for (q=0;q<prodFilterArray.length;q++) {
				if (!showHide) {
					if (prodFilterArray[q][8] == catArray[catVar][0]) {
						$('#panel5ProductName'+prodFilterArray[q][0]).removeClass('panel_5_product_name_hover');
						$('#panel5ProductName'+prodFilterArray[q][0]).removeClass('panel_5_product_name_off');
						$('#panel5ProductName'+prodFilterArray[q][0]).addClass('panel_5_product_name_on');
						$('.panel_5_prodlist_prodshell_'+prodFilterArray[q][0]).removeClass('panel_5_prodlist_prodshell_off');
						$('.panel_5_prodlist_prodshell_'+prodFilterArray[q][0]).addClass('panel_5_prodlist_prodshell_on');
						prodFilterArray[q][9] = 1;
					}
				}
			}
		}
		else {
			$('#panel5CategoryName'+catArray[catVar][0]).removeClass('panel_5_category_name_hover');
			$('#panel5CategoryName'+catArray[catVar][0]).removeClass('panel_5_category_name_on');
			$('#panel5CategoryName'+catArray[catVar][0]).addClass('panel_5_category_name_off');
			$('#panel5CategoryName'+catArray[catVar][0]+'All').removeClass('panel_5_category_name_all_hover');
			$('#panel5CategoryName'+catArray[catVar][0]+'All').removeClass('panel_5_category_name_all_on');
			$('#panel5CategoryName'+catArray[catVar][0]+'All').addClass('panel_5_category_name_all_off');
			$('.panel_5_prodlist_catshell_'+catArray[catVar][0]).removeClass('panel_5_prodlist_catshell_on');
			$('.panel_5_prodlist_catshell_'+catArray[catVar][0]).addClass('panel_5_prodlist_catshell_off');
			catArray[catVar][6] = "0";
			window["panel1CategoryNameVar"+catArray[catVar][0]] = 0;
			for (q=0;q<prodFilterArray.length;q++) {
				if (!showHide) {
					if (prodFilterArray[q][8] == catArray[catVar][0]) {
						$('#panel5ProductName'+prodFilterArray[q][0]).removeClass('panel_5_product_name_hover');
						$('#panel5ProductName'+prodFilterArray[q][0]).removeClass('panel_5_product_name_on');
						$('#panel5ProductName'+prodFilterArray[q][0]).addClass('panel_5_product_name_off');
						$('.panel_5_prodlist_prodshell_'+prodFilterArray[q][0]).removeClass('panel_5_prodlist_prodshell_on');
						$('.panel_5_prodlist_prodshell_'+prodFilterArray[q][0]).addClass('panel_5_prodlist_prodshell_off');
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
		if (panel5ProductFilter == 1) {
			if(gLog==1){console.log("Select Category P2");}
			panel5Load("panel5");
		}
		if (panel5ProductExclude == 1) {
			for (j=0;j<catArray.length;j++) {
				if (j != catVar) {
					$('#panel5CategoryName'+catArray[j][0]).removeClass('panel_5_category_name_hover');
					$('#panel5CategoryName'+catArray[j][0]).removeClass('panel_5_category_name_on');
					$('#panel5CategoryName'+catArray[j][0]).addClass('panel_5_category_name_off');
					$('#panel5CategoryName'+catArray[j][0]+'All').removeClass('panel_5_category_name_all_hover');
					$('#panel5CategoryName'+catArray[j][0]+'All').removeClass('panel_5_category_name_all_on');
					$('#panel5CategoryName'+catArray[j][0]+'All').addClass('panel_5_category_name_all_off');
					$('.panel_5_prodlist_catshell_'+catArray[catVar][0]).removeClass('panel_5_prodlist_catshell_on');
					$('.panel_5_prodlist_catshell_'+catArray[catVar][0]).addClass('panel_5_prodlist_catshell_off');
					catArray[j][6] = "0";
					window["panel1CategoryNameVar"+catArray[j][0]] = 0;
				}
			}
		}
		if (showHide) {
			var showAllProd = 1;
			panel5CatListCount = 0;
			for (x=0;x<catArray.length;x++) {
				if (catArray[x][6] == 1) {
					showAllProd = 0;
					panel5CatListCount++;
				}
			}
			if (showAllProd == 1) {
				panel5CatListCount = catArray.length;
			}
			for (x=0;x<prodFilterArray.length;x++) {
				for (y=0;y<catArray.length;y++) {
					if (prodFilterArray[x][8] == catArray[y][0]) {
						if ((catArray[y][6] == "1" || showAllProd == 1) && document.getElementById('panel5ProductName'+prodFilterArray[x][0])) {
							if (prodFilterArray[x][9] == 1 && panel5ProductHideprod == 1) {
								var j = document.getElementsByClassName('panel_5_prodlist_prodshell_'+prodFilterArray[x][0]);
								for (k=0; k<j.length; k++) {
									j[k].style.display = "none";
								}
							}
							else{
								var j = document.getElementsByClassName('panel_5_prodlist_prodshell_'+prodFilterArray[x][0]);
								for (k=0; k<j.length; k++) {
									j[k].style.display = "block";
								}
							}
						}
						else if (document.getElementById('panel5ProductName'+prodFilterArray[x][0])) {
							var j = document.getElementsByClassName('panel_5_prodlist_prodshell_'+prodFilterArray[x][0]);
							for (k=0; k<j.length; k++) {
								j[k].style.display = "none";
							}
						}
						break;
					}
				}
			}
			if (document.getElementById('panel5CatListNum')) {
				document.getElementById('panel5CatListNum').innerHTML = panel5CatListCount;
			}
			if (document.getElementById('panel5CatListProdNum')) {
				document.getElementById('panel5CatListProdNum').innerHTML = panel5CatListProdCount
			}
		}
		if (document.getElementById('panel5ProdShopCartShell')) {
			panel5WriteProdCart();
		}
	}
}
function panel5SliderControl(slid) {
	for (x=0; x<panel5SliderArray.length; x++) {
		if (x == slid) {
			if (panel5SliderArray[x][3] == 0) {
				$("." + panel5SliderArray[x][0]).slideDown(250);
				$(".panel_5_slider_i_" + x).removeClass(panel5SliderArray[x][2]);
				$(".panel_5_slider_i_" + x).addClass(panel5SliderArray[x][1]);
				panel5SliderArray[x][3] = 1;
			}
			else {
				$("." + panel5SliderArray[x][0]).slideUp(250);
				$(".panel_5_slider_i_" + x).removeClass(panel5SliderArray[x][1]);
				$(".panel_5_slider_i_" + x).addClass(panel5SliderArray[x][2]);
				panel5SliderArray[x][3] = 0;
			}
		}
		else {
			$("." + panel5SliderArray[x][0]).slideUp(100);
			$(".panel_5_slider_i_" + x).removeClass(panel5SliderArray[x][1]);
			$(".panel_5_slider_i_" + x).addClass(panel5SliderArray[x][2]);
			panel5SliderArray[x][3] = 0;
		}
	}
}
function panel5SlideItUp() {
	for (x=0; x<panel5SliderArray.length; x++) {
		$("." + panel5SliderArray[x][0]).slideUp(100);
		$(".panel_5_slider_i_" + x).removeClass(panel5SliderArray[x][1]);
		$(".panel_5_slider_i_" + x).addClass(panel5SliderArray[x][2]);
		panel5SliderArray[x][3] = 0;
	}
}
function panel5ResetProducts(allon) {
	$('.panel_5_prodlist_reset').removeClass('panel_5_prodlist_reset_off');
	$('.panel_5_prodlist_reset').removeClass('panel_5_prodlist_reset_hover');
	$('.panel_5_prodlist_reset').addClass('panel_5_prodlist_reset_on');
	document.getElementById('PROD').value = prodSelString;
	if (allon) {
		var izDemOn = 1;
		for (y=0;y<prodFilterArray.length;y++) {
			if (prodFilterArray[y][9] == 0) {
				izDemOn = 0;
			}
		}
		prodCartArray.length = 0;
		if (panel5ResetFirstClick == 0) {
			panel5ResetFirstClick = 1;
			izDemOn = 0;
		}
		if (izDemOn == 1) {
			for (z=0;z<prodFilterArray.length;z++) {
				prodFilterArray[z][9] = 0;
			}
			$('.panel_5_product_name').removeClass('panel_5_product_name_hover');
			$('.panel_5_product_name').removeClass('panel_5_product_name_on');
			$('.panel_5_product_name').addClass('panel_5_product_name_off');
		}
		else {
			for (z=0;z<prodFilterArray.length;z++) {
				prodFilterArray[z][9] = 1;
				prodCartArray[z] = prodFilterArray[z][0];
			}
			$('.panel_5_product_name').removeClass('panel_5_product_name_hover');
			$('.panel_5_product_name').removeClass('panel_5_product_name_off');
			$('.panel_5_product_name').addClass('panel_5_product_name_on');
		}
		panel5WriteProdCart();
		panel3WriteProdCart();
	}
	else {
		if (panel5AllOffIsOn == 1) {
			for (y=0;y<prodDisplayArray.length;y++) {
				prodFilterArray[y] = prodDisplayArray[y];
				prodFilterArray[y][9] = 0;
			}
			for (y=0;y<catArray.length;y++) {
				catArray[y][6] = 0;
			}
			$('.panel_5_product_name').removeClass('panel_5_product_name_hover');
			$('.panel_5_product_name').removeClass('panel_5_product_name_on');
			$('.panel_5_product_name').addClass('panel_5_product_name_off');
			$('.panel_5_category_name').removeClass('panel_5_category_name_hover');
			$('.panel_5_category_name').removeClass('panel_5_category_name_on');
			$('.panel_5_category_name').addClass('panel_5_category_name_off');
		}
		else {
			for (y=0;y<prodDisplayArray.length;y++) {
				prodFilterArray[y] = prodDisplayArray[y];
				prodFilterArray[y][9] = 1;
			}
			for (y=0;y<catArray.length;y++) {
				catArray[y][6] = 1;
			}
			$('.panel_5_product_name').removeClass('panel_5_product_name_hover');
			$('.panel_5_product_name').removeClass('panel_5_product_name_off');
			$('.panel_5_product_name').addClass('panel_5_product_name_on');
			$('.panel_5_category_name').removeClass('panel_5_category_name_hover');
			$('.panel_5_category_name').removeClass('panel_5_category_name_off');
			$('.panel_5_category_name').addClass('panel_5_category_name_on');
		}
	}
	if (document.getElementById('panel5ProductName'+prodFilterArray[x][0])) {
		document.getElementById('panel5ProductName'+prodFilterArray[x][0]).style.display = "block";
	}
	if (document.getElementById('panel5ProductBigImg'+prodFilterArray[x][0])) {
		document.getElementById('panel5ProductBigImg'+prodFilterArray[x][0]).style.display = "block";
	}
	if (document.getElementById('panel5ProductSmImg'+prodFilterArray[x][0])) {
		document.getElementById('panel5ProductSmImg'+prodFilterArray[x][0]).style.display = "block";
	}
	for (w=0;w<prodFilterArray.length;w++) {
		$('.panel_5_prodlist_prodshell_'+prodFilterArray[w][0]).removeClass('panel_5_prodlist_prodshell_on');
		$('.panel_5_prodlist_prodshell_'+prodFilterArray[w][0]).addClass('panel_5_prodlist_prodshell_off');
		var j = document.getElementsByClassName('panel_5_prodlist_prodshell_'+prodFilterArray[w][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
	for (x=0;x<famArray.length;x++) {
		famArray[x][5] = 0;
		$('.panel_5_prodlist_famshell_'+famArray[x][0]).removeClass('panel_5_prodlist_famshell_on');
		$('.panel_5_prodlist_famshell_'+famArray[x][0]).addClass('panel_5_prodlist_famshell_off');
		var j = document.getElementsByClassName('panel_5_prodlist_famshell_'+famArray[x][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
	for (y=0;y<catArray.length;y++) {
		catArray[y][6] = 0;
		$('#panel5CategoryName'+catArray[y][0]).removeClass('panel_5_category_name_hover');
		$('#panel5CategoryName'+catArray[y][0]).removeClass('panel_5_category_name_on');
		$('#panel5CategoryName'+catArray[y][0]).addClass('panel_5_category_name_off');
		$('#panel5CategoryName'+catArray[y][0]+'All').removeClass('panel_5_category_name_all_hover');
		$('#panel5CategoryName'+catArray[y][0]+'All').removeClass('panel_5_category_name_all_on');
		$('#panel5CategoryName'+catArray[y][0]+'All').addClass('panel_5_category_name_all_off');
		$('.panel_5_prodlist_catshell_'+catArray[y][0]).removeClass('panel_5_prodlist_catshell_on');
		$('.panel_5_prodlist_catshell_'+catArray[y][0]).addClass('panel_5_prodlist_catshell_off');
		var j = document.getElementsByClassName('panel_5_prodlist_catshell_'+catArray[y][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
	for (z=0;z<labelArray.length;z++) {
		labelArray[z][3] = 0;
		$('.panel_5_prodlist_labelshell_'+labelArray[z][0]).removeClass('panel_5_prodlist_labelshell_on');
		$('.panel_5_prodlist_labelshell_'+labelArray[z][0]).addClass('panel_5_prodlist_labelshell_off');
		var j = document.getElementsByClassName('panel_5_prodlist_labelshell_'+labelArray[z][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
}
function panel5Back(panelVal) {
	panelSwitch("panel5",panelVal,transNext);
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
}
function panel5CCReq() {
	p4Connect();
}
function panel5Store() {
	storePanelSRC = 5;
	FB.login(function(response) {}, {scope: 'email'});
}
var holdRTRSubmit = 0;
function panel5RTRSubmit() {
	if (holdRTRSubmit == 0) {
		holdRTRSubmit = 1;
		var canSubmit = 1;
		if (document.getElementById('panel5RTRFName')) {
			if ($("#panel5RTRFName").hasClass("panel_5_required") && (document.getElementById('panel5RTRFName').value == "" || document.getElementById('panel5RTRFName').value == rtrFNameValueHolder)) {
				$("#panel5RTRFName").removeClass("panel_5_rtr_fname_base");
				$("#panel5RTRFName").addClass("panel_5_required_error");
				canSubmit = 0;
			}
			else {
				$("#panel5RTRFName").addClass("panel_5_rtr_fname_base");
				$("#panel5RTRFName").removeClass("panel_5_required_error");
			}
		}
		if (document.getElementById('panel5RTRLName')) {
			if ($("#panel5RTRLName").hasClass("panel_5_required") && (document.getElementById('panel5RTRLName').value == "" || document.getElementById('panel5RTRLName').value == rtrLNameValueHolder)) {
				$("#panel5RTRLName").removeClass("panel_5_rtr_lname_base");
				$("#panel5RTRLName").addClass("panel_5_required_error");
				canSubmit = 0;
			}
			else {
				$("#panel5RTRLName").addClass("panel_5_rtr_lname_base");
				$("#panel5RTRLName").removeClass("panel_5_required_error");
			}
		}
		if (document.getElementById('panel5RTRPosition')) {
			if ($("#panel5RTRPosition").hasClass("panel_5_required") && (document.getElementById('panel5RTRPosition').value == "" || document.getElementById('panel5RTRPosition').value == rtrPositionValueHolder)) {
				$("#panel5RTRPosition").removeClass("panel_5_rtr_position_base");
				$("#panel5RTRPosition").addClass("panel_5_required_error");
				canSubmit = 0;
			}
			else {
				$("#panel5RTRPosition").addClass("panel_5_rtr_position_base");
				$("#panel5RTRPosition").removeClass("panel_5_required_error");
			}
		}
		if (document.getElementById('panel5RTRPhone')) {
			if ($("#panel5RTRPhone").hasClass("panel_5_required") && (document.getElementById('panel5RTRPhone').value == "" || document.getElementById('panel5RTRPhone').value == rtrPhoneValueHolder)) {
				$("#panel5RTRPhone").removeClass("panel_5_rtr_phone_base");
				$("#panel5RTRPhone").addClass("panel_5_required_error");
				canSubmit = 0;
			}
			else {
				$("#panel5RTRPhone").addClass("panel_5_rtr_phone_base");
				$("#panel5RTRPhone").removeClass("panel_5_required_error");
			}
		}
		if (document.getElementById('panel5RTREmail')) {
			if ($("#panel5RTREmail").hasClass("panel_5_required") && (document.getElementById('panel5RTREmail').value == "" || document.getElementById('panel5RTREmail').value == rtrEmailValueHolder)) {
				if(gLog==1){console.log("panel5RTRSubmit - panel5RTREmail FAIL");}
				$("#panel5RTREmail").removeClass("panel_5_rtr_email_base");
				$("#panel5RTREmail").addClass("panel_5_required_error");
				canSubmit = 0;
			}
			else {
				var emailResult = checkIsEmail('panel5RTREmail');
				if (emailResult == false) {
					if(gLog==1){console.log("panel5RTRSubmit - panel5RTREmail false");}
					$("#panel5RTREmail").removeClass("panel_5_rtr_email_base");
					$("#panel5RTREmail").addClass("panel_5_required_error");
					canSubmit = 0;
				}
				else {
					if(gLog==1){console.log("panel5RTRSubmit - panel5RTREmail true");}
					$("#panel5RTREmail").addClass("panel_5_rtr_email_base");
					$("#panel5RTREmail").removeClass("panel_5_required_error");
				}
			}
		}
		if (document.getElementById('panel5RTRSName')) {
			if ($("#panel5RTRSName").hasClass("panel_5_required") && (document.getElementById('panel5RTRSName').value == "" || document.getElementById('panel5RTRSName').value == rtrSNameValueHolder)) {
				$("#panel5RTRSName").removeClass("panel_5_rtr_sname_base");
				$("#panel5RTRSName").addClass("panel_5_required_error");
				canSubmit = 0;
			}
			else {
				$("#panel5RTRSName").addClass("panel_5_rtr_sname_base");
				$("#panel5RTRSName").removeClass("panel_5_required_error");
			}
		}
		if (document.getElementById('panel5RTRSAddOne')) {
			if ($("#panel5RTRSAddOne").hasClass("panel_5_required") && (document.getElementById('panel5RTRSAddOne').value == "" || document.getElementById('panel5RTRSAddOne').value == rtrSAddOneValueHolder)) {
				$("#panel5RTRSAddOne").removeClass("panel_5_rtr_saddone_base");
				$("#panel5RTRSAddOne").addClass("panel_5_required_error");
				canSubmit = 0;
			}
			else {
				$("#panel5RTRSAddOne").addClass("panel_5_rtr_saddone_base");
				$("#panel5RTRSAddOne").removeClass("panel_5_required_error");
			}
		}
		if (document.getElementById('panel5RTRSCity')) {
			if ($("#panel5RTRSCity").hasClass("panel_5_required") && (document.getElementById('panel5RTRSCity').value == "" || document.getElementById('panel5RTRSCity').value == rtrSCityValueHolder)) {
				$("#panel5RTRSCity").removeClass("panel_5_rtr_scity_base");
				$("#panel5RTRSCity").addClass("panel_5_required_error");
				canSubmit = 0;
			}
			else {
				$("#panel5RTRSCity").addClass("panel_5_rtr_scity_base");
				$("#panel5RTRSCity").removeClass("panel_5_required_error");
			}
		}
		if (document.getElementById('panel5RTRSState')) {
			if ($("#panel5RTRSState").hasClass("panel_5_required") && (document.getElementById('panel5RTRSState').value == "" || document.getElementById('panel5RTRSState').value == rtrSStateValueHolder)) {
				$("#panel5RTRSState").removeClass("panel_5_rtr_sstate_base");
				$("#panel5RTRSState").addClass("panel_5_required_error");
				canSubmit = 0;
			}
			else {
				$("#panel5RTRSState").addClass("panel_5_rtr_sstate_base");
				$("#panel5RTRSState").removeClass("panel_5_required_error");
			}
		}
		if (document.getElementById('panel5RTRSZip')) {
			if ($("#panel5RTRSZip").hasClass("panel_5_required") && (document.getElementById('panel5RTRSZip').value == "" || document.getElementById('panel5RTRSZip').value == rtrSZipValueHolder)) {
				$("#panel5RTRSZip").removeClass("panel_5_rtr_szip_base");
				$("#panel5RTRSZip").addClass("panel_5_required_error");
				canSubmit = 0;
			}
			else {
				$("#panel5RTRSZip").addClass("panel_5_rtr_szip_base");
				$("#panel5RTRSZip").removeClass("panel_5_required_error");
			}
		}
		if (document.getElementById('panel5RTRSCountry')) {
			if ($("#panel5RTRSCountry").hasClass("panel_5_required") && (document.getElementById('panel5RTRSCountry').value == "")) {
				$("#panel5RTRSCountry").removeClass("panel_5_rtr_country_base");
				$("#panel5RTRSCountry").addClass("panel_5_required_error");
				canSubmit = 0;
			}
			else {
				$("#panel5RTRSCountry").addClass("panel_5_rtr_country_base");
				$("#panel5RTRSCountry").removeClass("panel_5_required_error");
			}
		}
		if (document.getElementById('panel5RTRSPhone')) {
			if ($("#panel5RTRSPhone").hasClass("panel_5_required") && (document.getElementById('panel5RTRSPhone').value == "" || document.getElementById('panel5RTRSPhone').value == rtrSPhoneValueHolder)) {
				$("#panel5RTRSPhone").removeClass("panel_5_rtr_sphone_base");
				$("#panel5RTRSPhone").addClass("panel_5_required_error");
				canSubmit = 0;
			}
			else {
				$("#panel5RTRSPhone").addClass("panel_5_rtr_sphone_base");
				$("#panel5RTRSPhone").removeClass("panel_5_required_error");
			}
		}
		prodSelectedArray.length = 0;
		for (p=0;p<rtreqProdArray.length;p++) {
			if (rtreqProdArray[p][9] == "1") {
				prodSelectedArray.push(rtreqProdArray[p][1]);
			}
		}
		document.getElementById('RTRPROD').value = prodSelectedArray.toString();
		if (panel5RTRProdReq == 1 && document.getElementById('RTRPROD').value == "") {
			canSubmit = 0;
			errorText("You must select at least one product.",3);
		}
		else if (panel5RTRProdReq == 0 && document.getElementById('RTRPROD').value == "") {
			document.getElementById('RTRPROD').value = prodSelString;
		}
		groupSelectedArray.length = 0;
		for (g=0;g<rtreqCatArray.length;g++) {
			if (rtreqCatArray[g][6] == "1") {
				groupSelectedArray.push(rtreqCatArray[g][5]);
			}
		}
		if(gLog==1){console.log("panel5RTRSubmit - RTRPROD ",RTRPROD);}
		document.getElementById('RTRGROUP').value = groupSelectedArray.toString();
		if (canSubmit == 1) {
			if (document.getElementById('panel5RTRFName').value == rtrFNameValueHolder){document.getElementById('panel5RTRFName').value = "";}
			if (document.getElementById('panel5RTRLName').value == rtrLNameValueHolder){document.getElementById('panel5RTRLName').value = "";}
			if (document.getElementById('panel5RTRPosition').value == rtrPositionValueHolder){document.getElementById('panel5RTRPosition').value = "";}
			if (document.getElementById('panel5RTRPhone').value == rtrPhoneValueHolder){document.getElementById('panel5RTRPhone').value = "";}
			if (document.getElementById('panel5RTREmail').value == rtrEmailValueHolder){document.getElementById('panel5RTREmail').value = "";}
			if (document.getElementById('panel5RTRSName').value == rtrSNameValueHolder){document.getElementById('panel5RTRSName').value = "";}
			if (document.getElementById('panel5RTRSAddOne').value == rtrSAddOneValueHolder){document.getElementById('panel5RTRSAddOne').value = "";}
			if (document.getElementById('panel5RTRSCity').value == rtrSCityValueHolder){document.getElementById('panel5RTRSCity').value = "";}
			if (document.getElementById('panel5RTRSState').value == rtrSStateValueHolder){document.getElementById('panel5RTRSState').value = "";}
			if (document.getElementById('panel5RTRSZip').value == rtrSZipValueHolder){document.getElementById('panel5RTRSZip').value = "";}
			if (document.getElementById('panel5RTRSPhone').value == rtrSPhoneValueHolder){document.getElementById('panel5RTRSPhone').value = "";}
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
					$.post(controlURL + "tracktest.php", {
						CB: noCache,
						TLL: tlVal,
						A1: trackVal,
						UP1: "PANEL5",
						UC1: "",
						UCS1: "",
						US1: "SUCCESS",
						USRC1: version,
						CLIENT: coreClient,
						ITER: iteration,
						DEVICE: deviceType,
						REF: referer,
						SESSID: daSESSID,
						LOCATION: '{"compiled_location":"' + document.getElementById('addressCompile').value.replace(/"/g, '') + '","latitude":"' + parseFloat(document.getElementById('LA').value).toFixed(5) + '","longitude":"' + parseFloat(document.getElementById('LO').value).toFixed(5) + '","city":"' + document.getElementById('revCodeCity').value.replace(/"/g, '') + '","state":"' + document.getElementById('revCodeState').value + '","zip":"' + document.getElementById('revCodeZip').value + '","country":"' + document.getElementById('revCodeCountry').value + '","us_code":"' + document.getElementById('revCodeUS').value + '"}',
						USER: '{"name":"' + document.getElementById('panel5RTRFName').value.replace(/"/g, '') + ' ' + document.getElementById('panel5RTRLName').value.replace(/"/g, '') + '","email":"' + document.getElementById('panel5RTREmail').value.replace(/"/g, '') + '","phone":"' + document.getElementById('panel5RTRPhone').value.replace(/"/g, '') + '","position":"' + document.getElementById('panel5RTRPosition').value.replace(/"/g, '') + '"}',
						PLIST: compProdVal,
						PSET: prodSetVal,
						STORE: '1;;1;;0;;0;;' + document.getElementById('panel5RTRSName').value.replace(/"/g, '') + ';;' + document.getElementById('panel5RTRSAddOne').value.replace(/"/g, '') + ';;;;' + document.getElementById('panel5RTRSCity').value + ';;' + document.getElementById('panel5RTRSState').value + ';;' + document.getElementById('panel5RTRSZip').value + ';;;;0',
						STORECOUNT: 1,
						TRACK: "12",
						DUTV: dutv
						}, function(data){
							if(gLog==1){console.log("panel5RTRSubmit - tracktest: " , JSON.parse(data));}
						}
					);
				},1000);
			}
			else if (trackVal == 2 && allOnOne == 0) {
				setTimeout(function(){
					var sendObj = setTrackObj();
					sendObj['TRK'] = 12;
					sendObj['RQF'] = "panel5RTRSubmit";
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
					sendObj['STR'][0]['FED'] = 1;
					sendObj['STR'][0]['LAT'] = 0;
					sendObj['STR'][0]['LNG'] = 0;
					sendObj['STR'][0]['NAM'] = document.getElementById('panel5RTRSName').value;
					sendObj['STR'][0]['ADD'] = document.getElementById('panel5RTRSAddOne').value;
					sendObj['STR'][0]['ADT'] = "";
					sendObj['STR'][0]['CTY'] = document.getElementById('panel5RTRSCity').value;
					sendObj['STR'][0]['STA'] = document.getElementById('panel5RTRSState').value;
					sendObj['STR'][0]['ZIP'] = document.getElementById('panel5RTRSZip').value;
					sendObj['STR'][0]['CNT'] = document.getElementById('panel5RTRSCountry').value;
					sendObj['STR'][0]['PRD'] = 0;
					sendObj['STC'] = 1;
					sendObj['USR'] = {};
					sendObj['USR']['NAM'] = document.getElementById('panel5RTRFName').value + ' ' + document.getElementById('panel5RTRLName').value;
					sendObj['USR']['EML'] = document.getElementById('panel5RTREmail').value;
					sendObj['USR']['PHO'] = document.getElementById('panel5RTRPhone').value;
					sendObj['USR']['POS'] = document.getElementById('panel5RTRPosition').value;
					sendTrackObj(sendObj);
				},300);
			}
			panel5CodeRTRAddress();
		}
		else {
			holdRTRSubmit = 0;
			errorText("Please fill out all required fields.",8);
		}
	}
}
function panel5CountrySelect(idx) {
	document.getElementById("panel5RTRSCountry").value = countryArray[idx][2];
	document.getElementById("panel5CountryDivText").innerHTML = countryArray[idx][1];
	$(".panel_5_country_div_filter_slider").hide();
}
function panel5ResetCategories() {
	$('.panel_5_prodlist_catreset').removeClass('panel_5_prodlist_catreset_off');
	$('.panel_5_prodlist_catreset').removeClass('panel_5_prodlist_catreset_hover');
	$('.panel_5_prodlist_catreset').addClass('panel_5_prodlist_catreset_on');
	$('.panel_5_family_name').removeClass('panel_5_family_name_hover');
	$('.panel_5_family_name').removeClass('panel_5_family_name_on');
	$('.panel_5_family_name').addClass('panel_5_family_name_off');
	$('.panel_5_category_name').removeClass('panel_5_category_name_hover');
	$('.panel_5_category_name').removeClass('panel_5_category_name_on');
	$('.panel_5_category_name').addClass('panel_5_category_name_off');
	$('.panel_5_label_name').removeClass('panel_5_label_name_hover');
	$('.panel_5_label_name').removeClass('panel_5_label_name_on');
	$('.panel_5_label_name').addClass('panel_5_label_name_off');
	$('.panel_5_product_name').show();
	for (w=0;w<prodFilterArray.length;w++) {
		$('.panel_5_prodlist_prodshell_'+prodFilterArray[w][0]).removeClass('panel_5_prodlist_prodshell_on');
		$('.panel_5_prodlist_prodshell_'+prodFilterArray[w][0]).addClass('panel_5_prodlist_prodshell_off');
		var j = document.getElementsByClassName('panel_5_prodlist_prodshell_'+prodFilterArray[w][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
	for (x=0;x<famArray.length;x++) {
		famArray[x][5] = 0;
		$('.panel_5_prodlist_famshell_'+famArray[x][0]).removeClass('panel_5_prodlist_famshell_on');
		$('.panel_5_prodlist_famshell_'+famArray[x][0]).addClass('panel_5_prodlist_famshell_off');
		var j = document.getElementsByClassName('panel_5_prodlist_famshell_'+famArray[x][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
	for (y=0;y<catArray.length;y++) {
		catArray[y][6] = 0;
		$('#panel5CategoryName'+catArray[y][0]).removeClass('panel_5_category_name_hover');
		$('#panel5CategoryName'+catArray[y][0]).removeClass('panel_5_category_name_on');
		$('#panel5CategoryName'+catArray[y][0]).addClass('panel_5_category_name_off');
		$('#panel5CategoryName'+catArray[y][0]+'All').removeClass('panel_5_category_name_all_hover');
		$('#panel5CategoryName'+catArray[y][0]+'All').removeClass('panel_5_category_name_all_on');
		$('#panel5CategoryName'+catArray[y][0]+'All').addClass('panel_5_category_name_all_off');
		$('.panel_5_prodlist_catshell_'+catArray[y][0]).removeClass('panel_5_prodlist_catshell_on');
		$('.panel_5_prodlist_catshell_'+catArray[y][0]).addClass('panel_5_prodlist_catshell_off');
		var j = document.getElementsByClassName('panel_5_prodlist_catshell_'+catArray[y][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
	for (z=0;z<labelArray.length;z++) {
		labelArray[z][3] = 0;
		$('.panel_5_prodlist_labelshell_'+labelArray[z][0]).removeClass('panel_5_prodlist_labelshell_on');
		$('.panel_5_prodlist_labelshell_'+labelArray[z][0]).addClass('panel_5_prodlist_labelshell_off');
		var j = document.getElementsByClassName('panel_5_prodlist_labelshell_'+labelArray[z][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
}
function panel5SubmitRTRDetail() {
	var FNAME = "";
	var LNAME = "";
	var POSITION = "";
	var PHONE = "";
	var EMAIL = "";
	var SNAME = "";
	var SADDONE = "";
	var SPHONE = "";
	var UID = "";
	var PWD = "";
	if (document.getElementById('panel5RTRFName')) {
		FNAME = document.getElementById('panel5RTRFName').value;
	}
	if (document.getElementById('panel5RTRLName')) {
		LNAME = document.getElementById('panel5RTRLName').value;
	}
	if (document.getElementById('panel5RTRPosition')) {
		POSITION = document.getElementById('panel5RTRPosition').value;
	}
	if (document.getElementById('panel5RTRPhone')) {
		PHONE = document.getElementById('panel5RTRPhone').value;
	}
	if (document.getElementById('panel5RTREmail')) {
		EMAIL = document.getElementById('panel5RTREmail').value;
	}
	if (document.getElementById('panel5RTRSName')) {
		SNAME = document.getElementById('panel5RTRSName').value;
	}
	if (document.getElementById('panel5RTRSAddOne')) {
		SADDONE = document.getElementById('panel5RTRSAddOne').value;
	}
	if (document.getElementById('panel5RTRSPhone')) {
		SPHONE = document.getElementById('panel5RTRSPhone').value;
	}
	if (document.getElementById('panel5RTRRepUID')) {
		UID = document.getElementById('panel5RTRRepUID').value;
	}
	if (document.getElementById('panel5RTRRepPWD')) {
		PWD = document.getElementById('panel5RTRRepPWD').value;
	}
	var thisSendLoc = controlURL + "panel5Send.php?SOURCE=panel5&CLIENT=" + coreClient + "&FNAME=" + escape(FNAME) + "&LNAME=" + escape(LNAME) + "&POSITION=" + escape(POSITION) + "&PHONE=" + escape(PHONE) + "&EMAIL=" + escape(EMAIL) + "&SNAME=" + escape(SNAME) + "&SADDONE=" + escape(SADDONE) + "&SCITY=" + escape(document.getElementById('RTRCITY').value) + "&SSTATE=" + escape(document.getElementById('RTRSTATE').value) + "&SZIP=" + escape(document.getElementById('RTRZIP').value) + "&SPHONE=" + escape(SPHONE) + "&LA=" + document.getElementById('RTRLA').value + "&LO=" + document.getElementById('RTRLO').value + "&PROD=" + document.getElementById('RTRPROD').value + "&GROUP=" + document.getElementById('RTRGROUP').value + "&FROM=" + emailTo + "&UID=" + escape(UID) + "&PWD=" + escape(PWD) + "&SESSID=" + daSESSID;
	if(gLog==1){console.log("panel5SubmitRTRDetail: thisSendLoc - ",thisSendLoc);}
	frameVar = document.getElementById("iFrameForms");
	frameVar.contentWindow.location.replace(thisSendLoc);
}
function panel5ProdMouseOver (prodID, prodString, prodVar) {
	if (document.getElementById(prodID)) {
		if (prodFilterArray[prodVar][9] == 0) {
			$('#'+prodID).removeClass(prodString+'_off');
			$('#'+prodID).addClass(prodString+'_hover');
		}
		else {
			$('#'+prodID).removeClass(prodString+'_on');
			$('#'+prodID).addClass(prodString+'_hover');
		}
	}
}
function panel5ProdMouseOut (prodID, prodString, prodVar) {
	if (document.getElementById(prodID)) {
		if (prodFilterArray[prodVar][9] == 0) {
			$('#'+prodID).removeClass(prodString+'_hover');
			$('#'+prodID).addClass(prodString+'_off');
		}
		else {
			$('#'+prodID).removeClass(prodString+'_hover');
			$('#'+prodID).addClass(prodString+'_on');
		}
	}
}
function panel5ProdSelect(prodSQLID, prodSKU, prodID, prodStr, prodVar) {
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
			$('.panel_5_prodlist_prodshell_'+prodFilterArray[prodVar][0]).removeClass('panel_5_prodlist_prodshell_off');
			$('.panel_5_prodlist_prodshell_'+prodFilterArray[prodVar][0]).addClass('panel_5_prodlist_prodshell_on');
			prodFilterArray[prodVar][9] = "1";
		}
		else {
			$('#'+prodID).removeClass(prodStr+'_hover');
			$('#'+prodID).removeClass(prodStr+'_on');
			$('#'+prodID).addClass(prodStr+'_off');
			$('.panel_5_prodlist_prodshell_'+prodFilterArray[prodVar][0]).removeClass('panel_5_prodlist_prodshell_on');
			$('.panel_5_prodlist_prodshell_'+prodFilterArray[prodVar][0]).addClass('panel_5_prodlist_prodshell_off');
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
		if (panel5ProductFilter == 1) {
			if(gLog==1){console.log("Product Select P2");}
			panel5Load("panel5");
		}
	}
	if (document.getElementById('panel5ProdShopCartShell')) {
		if (panel5ProductHideprod == 1) {
			document.getElementById(prodID).style.display = "none";
			var j = document.getElementsByClassName('panel_5_prodlist_prodshell_'+prodFilterArray[prodVar][0]);
			for (k=0; k<j.length; k++) {
				j[k].style.display = "none";
			}
		}
		panel5WriteProdCart();
	}
}
function panel5WriteProdCart() {
	if (document.getElementById('panel5ProdShopCartShell')) {
		var writeHTML = "";
		var cartCatBadgeArr = [];
		var prodCartHeadHTML = autotextIt(p5TemplateSet.panel5ProductCartHead,"panel5ProductCartHead");
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
					clearButtonRender += "<div id='panel5ProdCartClearButton' class='panel_5_prod_cart_clear_button panel_5_prod_cart_clear_button_off'";
					if (hoverState==1) {
						clearButtonRender += " onmouseover='panel5ButtonHover(\"panel5ProdCartClearButton\", \"panel_5_prod_cart_clear_button\", 1);' onfocus='panel5ButtonHover(\"panel5ProdCartClearButton\", \"panel_5_prod_cart_clear_button\", 1);' onmouseout='panel5ButtonHover(\"panel5ProdCartClearButton\", \"panel_5_prod_cart_clear_button\", 0);' onblur='panel5ButtonHover(\"panel5ProdCartClearButton\", \"panel_5_prod_cart_clear_button\", 0);'";
					}
					clearButtonRender += " onclick='panel5ProdCartRemove();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5ProdCartRemove();}' tabindex='0' title=\"" + clearButtonValueVar + "\">" + clearButtonItalicVar + clearButtonValueVar + "<\/div>";
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
					prodCartHeadHTML = emptyTextHTMLStart + "<div id='panel5ProdCartEmptyText' class='panel_5_prod_cart_empty_text_shell'><div class='panel_5_prod_cart_empty_text_inner'>" + emptyTextValueVar + "<\/div><\/div>" + emptyTextHTMLEnd;
				}
			}
			writeHTML += prodCartHeadHTML;
		}
		for (y=0; y<prodCartArray.length; y++) {
			var prodCartHTML = autotextIt(p5TemplateSet.panel5ProductCartDiv,"panel5ProductCart");
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
							prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel5ProductCart_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
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
							var descVal = "<span class='panel_5_prod_cart_name_desc'>" + prodDisplayArray[x][3] + "<\/span>";
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
						prodCartHTML = baseProdCartNameHTMLStart + "<div id='panel5ProdCartName" + prodDisplayArray[x][0] + "' class='panel_5_prod_cart_name'>" + prodNameItalicVar + "<span class='panel_5_prod_cart_name_name'>" + prodDisplayArray[x][2] + "<\/span>" + descVal + "<\/div>" + baseProdCartNameHTMLEnd;
					}
					var prodDescTagStart = prodCartHTML.indexOf("<!--PRODDESC");
					if (prodDescTagStart != -1) {
						var prodDescTagEnd = prodCartHTML.indexOf(">",prodDescTagStart);
						var prodDescTagStrip = prodCartHTML.substring(prodDescTagStart,(prodDescTagEnd+1));
						var baseProdDescHTMLStart = prodCartHTML.substr(0,prodDescTagStart);
						var baseProdDescHTMLEnd = prodCartHTML.substr((prodDescTagEnd+1));
						prodCartHTML = baseProdDescHTMLStart + "<div id='panel5ProdCartDesc" + prodDisplayArray[x][0] + "' class='panel_5_prod_cart_desc'>" + prodDisplayArray[x][3] + "<\/div>" + baseProdDescHTMLEnd;
					}
					var prodCatTagStart = prodCartHTML.indexOf("<!--PRODCAT");
					if (prodCatTagStart != -1) {
						var prodCatTagEnd = prodCartHTML.indexOf(">",prodCatTagStart);
						var prodCatTagStrip = prodCartHTML.substring(prodCatTagStart,(prodCatTagEnd+1));
						var baseProdCatHTMLStart = prodCartHTML.substr(0,prodCatTagStart);
						var baseProdCatHTMLEnd = prodCartHTML.substr((prodCatTagEnd+1));
						prodCartHTML = baseProdCatHTMLStart + "<div id='panel5ProdCartCat" + prodDisplayArray[x][0] + "' class='panel_5_prod_cart_cat'>" + prodDisplayArray[x][16] + "<\/div>" + baseProdCatHTMLEnd;
					}
					var prodCartBigImgTagStart = prodCartHTML.indexOf("<!--PRODBIGIMG");
					if (prodCartBigImgTagStart != -1) {
						var prodCartBigImgTagEnd = prodCartHTML.indexOf(">",prodCartBigImgTagStart);
						var prodCartBigImgTagStrip = prodCartHTML.substring(prodCartBigImgTagStart,(prodCartBigImgTagEnd+1));
						var baseProdCartBigImgHTMLStart = prodCartHTML.substr(0,prodCartBigImgTagStart);
						var baseProdCartBigImgHTMLEnd = prodCartHTML.substr((prodCartBigImgTagEnd+1));
						prodCartHTML = baseProdCartBigImgHTMLStart + "<img title=\"" + prodDisplayArray[x][2] + "\" alt=\"" + prodDisplayArray[x][2] + "\" id='panel5ProdCartBigImg" + prodDisplayArray[x][0] + "' class='panel_5_prod_cart_bigimg' src='" + clientImgBase + prodDisplayArray[x][4] + "'>" + baseProdCartBigImgHTMLEnd;
					}
					var prodCartSmImgTagStart = prodCartHTML.indexOf("<!--PRODSMIMG");
					if (prodCartSmImgTagStart != -1) {
						var prodCartSmImgTagEnd = prodCartHTML.indexOf(">",prodCartSmImgTagStart);
						var prodCartSmImgTagStrip = prodCartHTML.substring(prodCartSmImgTagStart,(prodCartSmImgTagEnd+1));
						var baseProdCartSmImgHTMLStart = prodCartHTML.substr(0,prodCartSmImgTagStart);
						var baseProdCartSmImgHTMLEnd = prodCartHTML.substr((prodCartSmImgTagEnd+1));
						prodCartHTML = baseProdCartSmImgHTMLStart + "<img title=\"" + prodDisplayArray[x][2] + "\" alt=\"" + prodDisplayArray[x][2] + "\" id='panel5ProdCartSmImg" + prodDisplayArray[x][0] + "' class='panel_5_prod_cart_smimg' src='" + clientImgBase + prodDisplayArray[x][5] + "'>" + baseProdCartSmImgHTMLEnd;
					}
					var removeButtonTagStart = prodCartHTML.indexOf("<!--REMOVEBUTTON");
					if (removeButtonTagStart != -1) {
						var removeButtonTagEnd = prodCartHTML.indexOf(">",removeButtonTagStart);
						var removeButtonTagStrip = prodCartHTML.substring(removeButtonTagStart,(removeButtonTagEnd+1));
						var removeButtonHTMLStart = prodCartHTML.substr(0,removeButtonTagStart);
						var removeButtonHTMLEnd = prodCartHTML.substr((removeButtonTagEnd+1));
						var removeButtonRender = "";
						var removeButtonValueStart = removeButtonTagStrip.indexOf(" VALUE=");
						if (removeButtonValueStart != -1) {
							var removeButtonValueEnd = removeButtonTagStrip.indexOf("]",removeButtonValueStart);
							var removeButtonValueVar = removeButtonTagStrip.substring((removeButtonValueStart+8),(removeButtonValueEnd));
						}
						else {
							var removeButtonValueVar = "REMOVE";
						}
						var removeButtonItalicStart = removeButtonTagStrip.indexOf(" FNTAW=");
						if (removeButtonItalicStart != -1) {
							var removeButtonItalicEnd = removeButtonTagStrip.indexOf("]",removeButtonItalicStart);
							var removeButtonItalicVar = "<i class='fa " + removeButtonTagStrip.substring((removeButtonItalicStart+8),(removeButtonItalicEnd)) + "'><\/i>";
						}
						else {
							var removeButtonItalicVar = "";
						}
						removeButtonRender += "<div id='panel5ProdCartRemoveButton" + prodCartArray[y] + "' class='panel_5_prod_cart_remove_button panel_5_prod_cart_remove_button_off'";
						if (hoverState==1) {
							removeButtonRender += " onmouseover='panel5ButtonHover(\"panel5ProdCartRemoveButton" + prodCartArray[y] + "\",\"panel_5_prod_cart_remove_button\",1);' onfocus='panel5ButtonHover(\"panel5ProdCartRemoveButton" + prodCartArray[y] + "\",\"panel_5_prod_cart_remove_button\",1);' onmouseout='panel5ButtonHover(\"panel5ProdCartRemoveButton" + prodCartArray[y] + "\",\"panel_5_prod_cart_remove_button\",0);' onblur='panel5ButtonHover(\"panel5ProdCartRemoveButton" + prodCartArray[y] + "\",\"panel_5_prod_cart_remove_button\",0);'";
						}
						removeButtonRender += " onclick='panel5ProdCartRemove(" + prodCartArray[y] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5ProdCartRemove(" + prodCartArray[y] + ");}' tabindex='0' title=\"" + removeButtonValueVar + "\">" + removeButtonItalicVar + removeButtonValueVar + "<\/div>";
						prodCartHTML = removeButtonHTMLStart + removeButtonRender + removeButtonHTMLEnd;
					}
				}
			}
			writeHTML += prodCartHTML;
		}
		var prodCartFootHTML = autotextIt(p5TemplateSet.panel5ProductCartFoot,"panel5ProductCartFoot");
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
					clearButtonRender += "<div id='panel5ProdCartClearButton' class='panel_5_prod_cart_clear_button panel_5_prod_cart_clear_button_off'";
					if (hoverState==1) {
						clearButtonRender += " onmouseover='panel5ButtonHover(\"panel5ProdCartClearButton\", \"panel_5_prod_cart_clear_button\", 1);' onfocus='panel5ButtonHover(\"panel5ProdCartClearButton\", \"panel_5_prod_cart_clear_button\", 1);' onmouseout='panel5ButtonHover(\"panel5ProdCartClearButton\", \"panel_5_prod_cart_clear_button\", 0);' onblur='panel5ButtonHover(\"panel5ProdCartClearButton\", \"panel_5_prod_cart_clear_button\", 0);'";
					}
					clearButtonRender += " onclick='panel5ProdCartRemove();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5ProdCartRemove();}' tabindex='0' title=\"" + clearButtonValueVar + "\">" + clearButtonItalicVar + clearButtonValueVar + "<\/div>";
					prodCartFootHTML = clearButtonHTMLStart + clearButtonRender + clearButtonHTMLEnd;
				}
				else {
					prodCartFootHTML = clearButtonHTMLStart + clearButtonHTMLEnd;
				}
			}
			writeHTML += prodCartFootHTML;
		}
		document.getElementById('panel5ProdShopCartShell').innerHTML = writeHTML;
		if (document.getElementById('panel5ProdCountNum')) {
			if (prodCartArray.length == 0 || prodCartArray.length == prodDisplayArray.length) {
				document.getElementById('panel5ProdCountNum').innerHTML =  "All";
			}
			else {
				document.getElementById('panel5ProdCountNum').innerHTML = prodCartArray.length;
			}
		}
		if (document.getElementById('panel5CountProdNum')) {
			if (prodCartArray.length == 0 || prodCartArray.length == prodDisplayArray.length) {
				document.getElementById('panel5CountProdNum').innerHTML =  "All";
			}
			else {
				document.getElementById('panel5CountProdNum').innerHTML = prodCartArray.length;
			}
		}
		if (document.getElementById("panel5SelProdText")) {
			if (prodCartArray.length == 1) {
				document.getElementById("panel5SelProdText").innerHTML = p5selProdSingularVar;
			}
			else {
				document.getElementById("panel5SelProdText").innerHTML = p5selProdPluralVar;
			}
		}
		$('.panel_5_prodlist_cat_badge').hide();
		if (cartCatBadgeArr.length) {
			for (j=0; j<cartCatBadgeArr.length; j++) {
				if (document.getElementById('panel5ProdlistCatBadge'+cartCatBadgeArr[j][0])) {
					document.getElementById('panel5ProdlistCatBadge'+cartCatBadgeArr[j][0]).innerHTML = cartCatBadgeArr[j][1];
					$('#panel5ProdlistCatBadge'+cartCatBadgeArr[j][0]).show();
				}
			}
		}
	}
}
function panel5ProdCartRemove(whatID) {
	var newProdArray = [];
	if (whatID) {
		for (x=0;x<prodDisplayArray.length;x++) {
			var killIt = 0;
			if (prodDisplayArray[x][0] == whatID) {
				killIt = 1;
			}
			if (killIt == 1) {
				prodDisplayArray[x][9] = 0;
				var FIRE = 0;
				for (thisOne=0;thisOne<catArray.length;thisOne++) {
					if (catArray[thisOne][6] == 1) {
						FIRE++;
					}
				}
				if (FIRE == catArray.length || FIRE == 0) {
					if (document.getElementById('panel5ProductBigImgDivBack'+prodDisplayArray[x][0])) {
						$(".panel_5_product_big_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
						$(".panel_5_product_big_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_5_product_big_img_div_back_off');
						$(".panel_5_product_big_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_5_product_big_img_div_back_on');
					}
					if (document.getElementById('panel5ProductSmImgDivBack'+prodDisplayArray[x][0])) {
						$(".panel_5_product_sm_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
						$(".panel_5_product_sm_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_5_product_sm_img_div_back_off');
						$(".panel_5_product_sm_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_5_product_sm_img_div_back_on');
					}
				}
				else if (FIRE == 1) {
					for (goesOut=0;goesOut<catArray.length;goesOut++) {
						if (catArray[goesOut][0] == prodDisplayArray[x][8] && catArray[goesOut][6] == 1) {
							if (document.getElementById('panel5ProductBigImgDivBack'+prodDisplayArray[x][0])) {
								$(".panel_5_product_big_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
								$(".panel_5_product_big_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_5_product_big_img_div_back_off');
								$(".panel_5_product_big_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_5_product_big_img_div_back_on');
							}
							if (document.getElementById('panel5ProductSmImgDivBack'+prodDisplayArray[x][0])) {
								$(".panel_5_product_sm_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
								$(".panel_5_product_sm_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_5_product_sm_img_div_back_off');
								$(".panel_5_product_sm_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_5_product_sm_img_div_back_on');
							}
							break;
						}
					}
				}
				$('#panel5CartButton'+prodDisplayArray[x][0]).removeClass('panel_5_cart_button_hover');
				$('#panel5CartButton'+prodDisplayArray[x][0]).removeClass('panel_5_cart_button_on');
				$('#panel5CartButton'+prodDisplayArray[x][0]).addClass('panel_5_cart_button_off');
				$('.panel_5_multiFilter_l3_prodname_'+prodDisplayArray[x][0]).removeClass('panel_5_multiFilter_l3_prodname_hover');
				$('.panel_5_multiFilter_l3_prodname_'+prodDisplayArray[x][0]).removeClass('panel_5_multiFilter_l3_prodname_on');
				$('.panel_5_multiFilter_l3_prodname_'+prodDisplayArray[x][0]).addClass('panel_5_multiFilter_l3_prodname_off');
				$('.panel_5_multiFilter_l3_prodname_ion_'+prodDisplayArray[x][0]).hide();
				$('.panel_5_multiFilter_l3_prodname_ioff_'+prodDisplayArray[x][0]).show();
				$("#panel5ProductName" + prodDisplayArray[x][0]).removeClass("panel_5_product_name_hover");
				$("#panel5ProductName" + prodDisplayArray[x][0]).removeClass("panel_5_product_name_on");
				$("#panel5ProductName" + prodDisplayArray[x][0]).addClass("panel_5_product_name_off");
				if (document.getElementById('panel5ProductName'+prodDisplayArray[x][0])) {
					document.getElementById('panel5ProductName'+prodDisplayArray[x][0]).style.display = "block";
				}
				if (document.getElementById('panel5ProductBigImg'+prodDisplayArray[x][0])) {
					document.getElementById('panel5ProductBigImg'+prodDisplayArray[x][0]).style.display = "block";
				}
				if (document.getElementById('panel5ProductSmImg'+prodDisplayArray[x][0])) {
					document.getElementById('panel5ProductSmImg'+prodDisplayArray[x][0]).style.display = "block";
				}
				$('.panel_5_prodlist_prodshell_'+prodDisplayArray[x][0]).removeClass('panel_5_prodlist_prodshell_on');
				$('.panel_5_prodlist_prodshell_'+prodDisplayArray[x][0]).addClass('panel_5_prodlist_prodshell_off');
				if(gLog==1){console.log("panel5ProdCartRemove(" + whatID + ") ",prodDisplayArray[x][17],p5PLFamSort);}
				if (prodDisplayArray[x][17] == p5PLFamSort) {
					var j = document.getElementsByClassName('panel_5_prodlist_prodshell_'+prodDisplayArray[x][0]);
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
			if (document.getElementById('panel5CategoryBigImgDivBack'+prodDisplayArray[x][0])) {
				$(".panel_5_category_big_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
				$(".panel_5_category_big_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_5_category_big_img_div_back_on');
				$(".panel_5_category_big_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_5_category_big_img_div_back_off');
			}
			if (document.getElementById('panel5CategorySmImgDivBack'+prodDisplayArray[x][0])) {
				$(".panel_5_category_sm_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
				$(".panel_5_category_sm_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_5_category_sm_img_div_back_on');
				$(".panel_5_category_sm_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_5_category_sm_img_div_back_off');
			}
			if (document.getElementById('panel5ProductBigImgDivBack'+prodDisplayArray[x][0])) {
				$(".panel_5_product_big_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
				$(".panel_5_product_big_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_5_product_big_img_div_back_off');
				$(".panel_5_product_big_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_5_product_big_img_div_back_on');
			}
			if (document.getElementById('panel5ProductSmImgDivBack'+prodDisplayArray[x][0])) {
				$(".panel_5_product_sm_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
				$(".panel_5_product_sm_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_5_product_sm_img_div_back_off');
				$(".panel_5_product_sm_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_5_product_sm_img_div_back_on');
			}
			$('#panel5CartButton'+prodDisplayArray[x][0]).removeClass('panel_5_cart_button_hover');
			$('#panel5CartButton'+prodDisplayArray[x][0]).removeClass('panel_5_cart_button_on');
			$('#panel5CartButton'+prodDisplayArray[x][0]).addClass('panel_5_cart_button_off');
			$('.panel_5_multiFilter_l3_prodname_'+prodDisplayArray[x][0]).removeClass('panel_5_multiFilter_l3_prodname_hover');
			$('.panel_5_multiFilter_l3_prodname_'+prodDisplayArray[x][0]).removeClass('panel_5_multiFilter_l3_prodname_on');
			$('.panel_5_multiFilter_l3_prodname_'+prodDisplayArray[x][0]).addClass('panel_5_multiFilter_l3_prodname_off');
			$('.panel_5_multiFilter_l3_prodname_ion_'+prodDisplayArray[x][0]).hide();
			$('.panel_5_multiFilter_l3_prodname_ioff_'+prodDisplayArray[x][0]).show();
			$("#panel5ProductName" + prodDisplayArray[x][0]).removeClass("panel_5_product_name_hover");
			$("#panel5ProductName" + prodDisplayArray[x][0]).removeClass("panel_5_product_name_on");
			$("#panel5ProductName" + prodDisplayArray[x][0]).addClass("panel_5_product_name_off");
			$('.panel_5_prodlist_prodshell_'+prodDisplayArray[x][0]).removeClass('panel_5_prodlist_prodshell_on');
			$('.panel_5_prodlist_prodshell_'+prodDisplayArray[x][0]).addClass('panel_5_prodlist_prodshell_off');
			if(gLog==1){console.log("panel5ProdCartRemove(" + whatID + ") ",prodDisplayArray[x][17],p5PLFamSort);}
			if (document.getElementById('panel5ProductName'+prodDisplayArray[x][0])) {
				document.getElementById('panel5ProductName'+prodDisplayArray[x][0]).style.display = "block";
			}
			if (document.getElementById('panel5ProductBigImg'+prodDisplayArray[x][0])) {
				document.getElementById('panel5ProductBigImg'+prodDisplayArray[x][0]).style.display = "block";
			}
			if (document.getElementById('panel5ProductSmImg'+prodDisplayArray[x][0])) {
				document.getElementById('panel5ProductSmImg'+prodDisplayArray[x][0]).style.display = "block";
			}
			if (prodDisplayArray[x][17] == p5PLFamSort) {
				var j = document.getElementsByClassName('panel_5_prodlist_prodshell_'+prodDisplayArray[x][0]);
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
	if (panel5ProductFilter == 1) {
		if(gLog==1){console.log("Prod Cart Remove P2");}
		panel5Load("panel5");
	}
	panel5WriteProdCart();
}
function panel5RTRResponse() {
	holdRTRSubmit = 0;
	if (document.getElementById('panel5RTRFName')) {
		document.getElementById('panel5RTRFName').value = "";
	}
	if (document.getElementById('panel5RTRLName')) {
		document.getElementById('panel5RTRLName').value = "";
	}
	if (document.getElementById('panel5RTRPosition')) {
		document.getElementById('panel5RTRPosition').value = "";
	}
	if (document.getElementById('panel5RTRPhone')) {
		document.getElementById('panel5RTRPhone').value = "";
	}
	if (document.getElementById('panel5RTREmail')) {
		document.getElementById('panel5RTREmail').value = "";
	}
	if (document.getElementById('panel5RTRSName')) {
		document.getElementById('panel5RTRSName').value = "";
	}
	if (document.getElementById('panel5RTRSAddOne')) {
		document.getElementById('panel5RTRSAddOne').value = "";
	}
	if (document.getElementById('panel5RTRSPhone')) {
		document.getElementById('panel5RTRSPhone').value = "";
	}
	if (document.getElementById('panel5RTRRepUID')) {
		document.getElementById('panel5RTRRepUID').value = "";
	}
	if (document.getElementById('panel5RTRRepPWD')) {
		document.getElementById('panel5RTRRepPWD').value = "";
	}
	errorText(p5AlertText,0);
	if (autoShell != 0) {
		window.location.reload();
	}
	else {
		panel5Back("panel1");
	}
}
function panel5FieldKeypress(e,addField,result) {
	var key;
	if(window.event) {key = window.event.keyCode;}
	else {key = e.which;}
	if(key == 13){
		if (result == 1) {
			panel5SubmitForm();
		}
		return false;
	}
}
function panel5SubmitForm() {
	loaderToggle(1);
	whatStoreUp = 0;
	p5codeTries = 0;
	var canSubmit = 1;
	if (document.getElementById('panel5AddressField')) {
		if ($("#panel5AddressField").hasClass("panel_5_required") && (document.getElementById('panel5AddressField').value == "" || document.getElementById('panel5AddressField').value == p5AddFieldValueVar)) {
			$("#panel5AddressField").removeClass("panel_5_address_field_base");
			$("#panel5AddressField").addClass("panel_5_required_error");
			document.getElementById('street').value = "";
			canSubmit = 0;
		}
		else {
			$("#panel5AddressField").addClass("panel_5_address_field_base");
			$("#panel5AddressField").removeClass("panel_5_required_error");
			stripField('street','panel5AddressField');
		}
	}
	else {
		document.getElementById('street').value = "";
	}
	if (document.getElementById('panel5CityField')) {
		if ($("#panel5CityField").hasClass("panel_5_required") && (document.getElementById('panel5CityField').value == "" || document.getElementById('panel5CityField').value == cityFieldValueVar)) {
			$("#panel5CityField").removeClass("panel_5_city_field_base");
			$("#panel5CityField").addClass("panel_5_required_error");
			document.getElementById('city').value = "";
			canSubmit = 0;
		}
		else {
			$("#panel5CityField").addClass("panel_5_city_field_base");
			$("#panel5CityField").removeClass("panel_5_required_error");
			stripField('city','panel5CityField');
		}
	}
	else {
		document.getElementById('city').value = "";
	}
	if (document.getElementById('panel5StateField')) {
		if ($("#panel5StateSelect").hasClass("panel_5_required") && document.getElementById('panel5StateField').value == "") {
			$("#panel5StateSelect").removeClass("panel_5_state_field_base");
			$("#panel5StateSelect").addClass("panel_5_required_error");
			document.getElementById('state').value = "";
			canSubmit = 0;
		}
		else {
			$("#panel5StateSelect").addClass("panel_5_state_field_base");
			$("#panel5StateSelect").removeClass("panel_5_required_error");
			stripField('state','panel5StateField');
		}
	}
	else {
		document.getElementById('state').value = "";
	}
	if (document.getElementById('panel5ZipField')) {
		if ($("#panel5ZipField").hasClass("panel_5_required")) {
			if (document.getElementById('panel5ZipField').value == "") {
				$("#panel5ZipField").removeClass("panel_5_zip_field_base");
				$("#panel5ZipField").addClass("panel_5_required_error");
				document.getElementById('zip').value = "";
				canSubmit = 0;
			}
			else {
				if (zipFieldValueVar == 1) {
					var zipFieldTestVal = document.getElementById('panel5ZipField').value;
					if (isNaN(zipFieldTestVal) || zipFieldTestVal.length != 5) {
						$("#panel5ZipField").removeClass("panel_5_zip_field_base");
						$("#panel5ZipField").addClass("panel_5_required_error");
						document.getElementById('zip').value = "";
						canSubmit = 0;
					}
					else {
						$("#panel5ZipField").addClass("panel_5_zip_field_base");
						$("#panel5ZipField").removeClass("panel_5_required_error");
						stripField('zip','panel5ZipField');
					}
				}
				else {
					$("#panel5ZipField").addClass("panel_5_zip_field_base");
					$("#panel5ZipField").removeClass("panel_5_required_error");
					stripField('zip','panel5ZipField');
				}
			}
		}
	}
	else {
		document.getElementById('zip').value = "";
	}
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
	prodSelectedArray.length = 0;
	for (p=0;p<prodDisplayArray.length;p++) {
		if (prodDisplayArray[p][9] == "1") {
			prodSelectedArray.push(prodDisplayArray[p][1]);
		}
	}
	document.getElementById('PROD').value = prodSelectedArray.toString();
	if (document.getElementById('PROD').value == "") {
		document.getElementById('PROD').value = prodSelString;
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
			parent.postMessage("SRCH:"+document.getElementById('panel5AddressField').value,refurl);
		}
		setTimeout(function(){
			panel5CodeAddress();
		},750);
	}
	else {
		errorText('Please enter a valid location.',2);
	}
}
function panel5FamCatProdOpen(famVar) {
	if (whatPLF5 != -1) {
		$(".panel_5_family_category_shell_"+famArray[whatPLF5][0]).slideUp(200);
	}
	if (famVar == whatPLF5) {
		whatPLF5 = -1;
	}
	else {
		$(".panel_5_family_category_shell_"+famArray[famVar][0]).slideDown(200);
		whatPLF5 = famVar;
	}
	$(".panel_5_family_category_product_shell").slideUp(200);
	whatPLFC5 = -1;
}
function panel5CatProdOpen(catVar) {
	if (whatPLFC5 != -1) {
		$(".panel_5_family_category_product_shell_"+catArray[whatPLFC5][0]).slideUp(200);
	}
	if (catVar == whatPLFC5) {
		whatPLFC5 = -1;
	}
	else {
		$(".panel_5_family_category_product_shell_"+catArray[catVar][0]).slideDown(200);
		whatPLFC5 = catVar;
	}
}
function panel5FamMouseOver (famVar) {
	if (document.getElementById('panel5FamilyName'+famArray[famVar][0])) {
		if (famArray[famVar][5] == 0) {
			$('#panel5FamilyName'+famArray[famVar][0]).removeClass('panel_5_family_name_off');
			$('#panel5FamilyName'+famArray[famVar][0]).addClass('panel_5_family_name_hover');
			$('#panel5FamilyName'+famArray[famVar][0]+'All').removeClass('panel_5_family_name_all_off');
			$('#panel5FamilyName'+famArray[famVar][0]+'All').addClass('panel_5_family_name_all_hover');
		}
		else {
			$('#panel5FamilyName'+famArray[famVar][0]).removeClass('panel_5_family_name_on');
			$('#panel5FamilyName'+famArray[famVar][0]).addClass('panel_5_family_name_hover');
			$('#panel5FamilyName'+famArray[famVar][0]+'All').removeClass('panel_5_family_name_all_on');
			$('#panel5FamilyName'+famArray[famVar][0]+'All').addClass('panel_5_family_name_all_hover');
		}
	}
}
function panel5FamMouseOut (famVar) {
	if (document.getElementById('panel5FamilyName'+famArray[famVar][0])) {
		if (famArray[famVar][5] == 0) {
			$('#panel5FamilyName'+famArray[famVar][0]).removeClass('panel_5_family_name_hover');
			$('#panel5FamilyName'+famArray[famVar][0]).addClass('panel_5_family_name_off');
			$('#panel5FamilyName'+famArray[famVar][0]+'All').removeClass('panel_5_family_name_all_hover');
			$('#panel5FamilyName'+famArray[famVar][0]+'All').addClass('panel_5_family_name_all_off');
		}
		else {
			$('#panel5FamilyName'+famArray[famVar][0]).removeClass('panel_5_family_name_hover');
			$('#panel5FamilyName'+famArray[famVar][0]).addClass('panel_5_family_name_on');
			$('#panel5FamilyName'+famArray[famVar][0]+'All').removeClass('panel_5_family_name_all_hover');
			$('#panel5FamilyName'+famArray[famVar][0]+'All').addClass('panel_5_family_name_all_on');
		}
	}
}
function panel5CatMouseOver (catVar) {
	if (document.getElementById('panel5CategoryName'+catArray[catVar][0])) {
		if (catArray[catVar][6] == 0) {
			$('#panel5CategoryName'+catArray[catVar][0]).removeClass('panel_5_category_name_off');
			$('#panel5CategoryName'+catArray[catVar][0]).addClass('panel_5_category_name_hover');
			$('#panel5CategoryName'+catArray[catVar][0]+'All').removeClass('panel_5_category_name_all_off');
			$('#panel5CategoryName'+catArray[catVar][0]+'All').addClass('panel_5_category_name_all_hover');
		}
		else {
			$('#panel5CategoryName'+catArray[catVar][0]).removeClass('panel_5_category_name_on');
			$('#panel5CategoryName'+catArray[catVar][0]).addClass('panel_5_category_name_hover');
			$('#panel5CategoryName'+catArray[catVar][0]+'All').removeClass('panel_5_category_name_all_on');
			$('#panel5CategoryName'+catArray[catVar][0]+'All').addClass('panel_5_category_name_all_hover');
		}
	}
}
function panel5CatMouseOut (catVar) {
	if (document.getElementById('panel5CategoryName'+catArray[catVar][0])) {
		if (catArray[catVar][6] == 0) {
			$('#panel5CategoryName'+catArray[catVar][0]).removeClass('panel_5_category_name_hover');
			$('#panel5CategoryName'+catArray[catVar][0]).addClass('panel_5_category_name_off');
			$('#panel5CategoryName'+catArray[catVar][0]+'All').removeClass('panel_5_category_name_all_hover');
			$('#panel5CategoryName'+catArray[catVar][0]+'All').addClass('panel_5_category_name_all_off');
		}
		else {
			$('#panel5CategoryName'+catArray[catVar][0]).removeClass('panel_5_category_name_hover');
			$('#panel5CategoryName'+catArray[catVar][0]).addClass('panel_5_category_name_on');
			$('#panel5CategoryName'+catArray[catVar][0]+'All').removeClass('panel_5_category_name_all_hover');
			$('#panel5CategoryName'+catArray[catVar][0]+'All').addClass('panel_5_category_name_all_on');
		}
	}
}
function panel5LabelMouseOver (labelVar) {
	if (document.getElementById('panel5LabelName'+labelArray[labelVar][0])) {
		if (labelArray[labelVar][3] == 0) {
			$('#panel5LabelName'+labelArray[labelVar][0]).removeClass('panel_5_label_name_off');
			$('#panel5LabelName'+labelArray[labelVar][0]).addClass('panel_5_label_name_hover');
			$('#panel5LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_5_label_name_all_off');
			$('#panel5LabelName'+labelArray[labelVar][0]+'All').addClass('panel_5_label_name_all_hover');
		}
		else {
			$('#panel5LabelName'+labelArray[labelVar][0]).removeClass('panel_5_label_name_on');
			$('#panel5LabelName'+labelArray[labelVar][0]).addClass('panel_5_label_name_hover');
			$('#panel5LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_5_label_name_all_on');
			$('#panel5LabelName'+labelArray[labelVar][0]+'All').addClass('panel_5_label_name_all_hover');
		}
	}
}
function panel5LabelMouseOut (labelVar) {
	if (document.getElementById('panel5LabelName'+labelArray[labelVar][0])) {
		if (labelArray[labelVar][3] == 0) {
			$('#panel5LabelName'+labelArray[labelVar][0]).removeClass('panel_5_label_name_hover');
			$('#panel5LabelName'+labelArray[labelVar][0]).addClass('panel_5_label_name_off');
			$('#panel5LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_5_label_name_all_hover');
			$('#panel5LabelName'+labelArray[labelVar][0]+'All').addClass('panel_5_label_name_all_off');
		}
		else {
			$('#panel5LabelName'+labelArray[labelVar][0]).removeClass('panel_5_label_name_hover');
			$('#panel5LabelName'+labelArray[labelVar][0]).addClass('panel_5_label_name_on');
			$('#panel5LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_5_label_name_all_hover');
			$('#panel5LabelName'+labelArray[labelVar][0]+'All').addClass('panel_5_label_name_all_on');
		}
	}
}
function panel5SelectLabel(labelVar,labelID,labelString,showHide) {
	if(gLog==1){console.log("panel5SelectLabel START");}
	$('.panel_5_prodlist_catreset').removeClass('panel_5_prodlist_catreset_on');
	$('.panel_5_prodlist_catreset').removeClass('panel_5_prodlist_catreset_hover');
	$('.panel_5_prodlist_catreset').addClass('panel_5_prodlist_catreset_off');
	whatStoreUp = 0;
	if (document.getElementById(labelID)) {
		if(gLog==1){console.log("panel5SelectLabel labelID");}
		if (labelArray[labelVar][3] == 0) {
			$('#panel5LabelName'+labelArray[labelVar][0]).removeClass('panel_5_label_name_hover');
			$('#panel5LabelName'+labelArray[labelVar][0]).removeClass('panel_5_label_name_off');
			$('#panel5LabelName'+labelArray[labelVar][0]).addClass('panel_5_label_name_on');
			$('#panel5LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_5_label_name_all_hover');
			$('#panel5LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_5_label_name_all_off');
			$('#panel5LabelName'+labelArray[labelVar][0]+'All').addClass('panel_5_label_name_all_on');
			$('.panel_5_prodlist_labelshell_'+labelArray[labelVar][0]).removeClass('panel_5_prodlist_labelshell_off');
			$('.panel_5_prodlist_labelshell_'+labelArray[labelVar][0]).addClass('panel_5_prodlist_labelshell_on');
			labelArray[labelVar][3] = "1";
		}
		else {
			$('#panel5LabelName'+labelArray[labelVar][0]).removeClass('panel_5_label_name_hover');
			$('#panel5LabelName'+labelArray[labelVar][0]).removeClass('panel_5_label_name_on');
			$('#panel5LabelName'+labelArray[labelVar][0]).addClass('panel_5_label_name_off');
			$('#panel5LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_5_label_name_all_hover');
			$('#panel5LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_5_label_name_all_on');
			$('#panel5LabelName'+labelArray[labelVar][0]+'All').addClass('panel_5_label_name_all_off');
			$('.panel_5_prodlist_labelshell_'+labelArray[labelVar][0]).removeClass('panel_5_prodlist_labelshell_on');
			$('.panel_5_prodlist_labelshell_'+labelArray[labelVar][0]).addClass('panel_5_prodlist_labelshell_off');
			labelArray[labelVar][3] = "0";
		}
		if (panel5ProductExclude == 1) {
			for (j=0;j<labelArray.length;j++) {
				if (j != labelVar) {
					$('#panel5LabelName'+labelArray[j][0]).removeClass('panel_5_label_name_hover');
					$('#panel5LabelName'+labelArray[j][0]).removeClass('panel_5_label_name_on');
					$('#panel5LabelName'+labelArray[j][0]).addClass('panel_5_label_name_off');
					$('#panel5LabelName'+labelArray[j][0]+'All').removeClass('panel_5_label_name_all_hover');
					$('#panel5LabelName'+labelArray[j][0]+'All').removeClass('panel_5_label_name_all_on');
					$('#panel5LabelName'+labelArray[j][0]+'All').addClass('panel_5_label_name_all_off');
					$('.panel_5_prodlist_labelshell_'+labelArray[labelVar][0]).removeClass('panel_5_prodlist_labelshell_off');
					$('.panel_5_prodlist_labelshell_'+labelArray[labelVar][0]).addClass('panel_5_prodlist_labelshell_on');
					labelArray[j][3] = "0";
				}
			}
		}
		if (showHide) {
			var showAllProd = 1;
			panel5LabelListCount = 0;
			for (x=0;x<labelArray.length;x++) {
				if (labelArray[x][3] == 1) {
					showAllProd = 0;
					panel5LabelListCount++;
				}
			}
			if (showAllProd == 1) {
				panel5LabelListCount = labelArray.length;
			}
			var subLabelArr = [];
			for (l=0; l<prodLabelArray.length; l++) {
				if (prodLabelArray[l][2] == labelArray[labelVar][0]) {
					subLabelArr.push(prodLabelArray[l][1]);
				}
			}
			if(gLog==1){console.log("panel5SelectLabel showHide ", subLabelArr.toString());}
			for (x=0;x<prodFilterArray.length;x++) {
				if (document.getElementById('panel5ProductName'+prodFilterArray[x][0])) {
					var j = document.getElementsByClassName('panel_5_prodlist_prodshell_'+prodFilterArray[x][0]);
					for (k=0; k<j.length; k++) {
						j[k].style.display = "none";
					}
				}
				for (y=0;y<subLabelArr.length;y++) {
					if (prodFilterArray[x][0] == subLabelArr[y]) {
						if (document.getElementById('panel5ProductName'+prodFilterArray[x][0])) {
							var j = document.getElementsByClassName('panel_5_prodlist_prodshell_'+prodFilterArray[x][0]);
							for (k=0; k<j.length; k++) {
								j[k].style.display = "block";
							}
						}
						break;
					}
				}
			}
			if (document.getElementById('panel5LabelListNum')) {
				document.getElementById('panel5LabelListNum').innerHTML = panel5LabelListCount;
			}
			if (document.getElementById('panel5LabelListProdNum')) {
				document.getElementById('panel5LabelListProdNum').innerHTML = panel5LabelListProdCount
			}
		}
	}
}
function panel5RTRFamMouseOver (famID, famString, famVar) {
	if (document.getElementById(famID)) {
		if (famVar == 0) {
			$('#'+famID).removeClass(famString+'_off');
			$('#'+famID).addClass(famString+'_hover');
		}
		else {
			$('#'+famID).removeClass(famString+'_on');
			$('#'+famID).addClass(famString+'_hover');
		}
	}
}
function panel5RTRFamMouseOut (famID, famString, famVar) {
	if (document.getElementById(famID)) {
		if (famVar == 0) {
			$('#'+famID).removeClass(famString+'_hover');
			$('#'+famID).addClass(famString+'_off');
		}
		else {
			$('#'+famID).removeClass(famString+'_hover');
			$('#'+famID).addClass(famString+'_on');
		}
	}
}
function panel5RTRFamSelectProducts(famSQLID, famID, famString, famVar, famVarSet) {
	if (document.getElementById(famID)) {
		if (famVar == 0) {
			$('#'+famID).removeClass(famString+'_hover');
			$('#'+famID).removeClass(famString+'_off');
			$('#'+famID).addClass(famString+'_on');
			for (z=0; z<rtreqCatArray.length; z++) {
				if (rtreqCatArray[z][2] == famSQLID) {
					window[('panel5RTRCategoryNameVar'+rtreqCatArray[z][0])] = 0;
					panel5RTRCatSelectProducts(rtreqCatArray[z][0], ('panel5RTRCategoryName'+rtreqCatArray[z][0]), 'panel_5_category_name', 0, ('panel5RTRCategoryNameVar'+rtreqCatArray[z][0]));
				}
			}
			window[famVarSet] = 1;
		}
		else {
			$('#'+famID).removeClass(famString+'_hover');
			$('#'+famID).removeClass(famString+'_on');
			$('#'+famID).addClass(famString+'_off');
			for (z=0; z<rtreqCatArray.length; z++) {
				if (rtreqCatArray[z][2] == famSQLID) {
					window[('panel5RTRCategoryNameVar'+rtreqCatArray[z][0])] = 1;
					panel5RTRCatSelectProducts(rtreqCatArray[z][0], ('panel5RTRCategoryName'+rtreqCatArray[z][0]), 'panel_5_category_name', 1, ('panel5RTRCategoryNameVar'+rtreqCatArray[z][0]));
				}
			}
			window[famVarSet] = 0;
		}
	}
}
function panel5RTRCatMouseOver (catID, catString, catVar) {
	if (document.getElementById(catID)) {
		if (catVar == 0) {
			$('#'+catID).removeClass(catString+'_off');
			$('#'+catID).addClass(catString+'_hover');
		}
		else {
			$('#'+catID).removeClass(catString+'_on');
			$('#'+catID).addClass(catString+'_hover');
		}
	}
}
function panel5RTRCatMouseOut (catID, catString, catVar) {
	if (document.getElementById(catID)) {
		if (catVar == 0) {
			$('#'+catID).removeClass(catString+'_hover');
			$('#'+catID).addClass(catString+'_off');
		}
		else {
			$('#'+catID).removeClass(catString+'_hover');
			$('#'+catID).addClass(catString+'_on');
		}
	}
}
function panel5RTRCatImgReplace(whatState,whatID,clickVar) {
	if (clickVar) {
		if (document.getElementById('panel5RTRCategoryBigImg'+whatID) && window['panel5RTRCategoryNameVar'+whatID] == 1) {
			var baseImg = document.getElementById('panel5RTRCategoryBigImg'+whatID).src;
			var baseLength = baseImg.length;
			var baseStart = baseImg.substr(0,(baseLength-6));
			var baseEnd = baseImg.substr((baseLength-4),baseLength);
			document.getElementById('panel5RTRCategoryBigImg'+whatID).src = baseStart + baseEnd;
		}
		if (document.getElementById('panel5RTRCategorySmImg'+whatID) && window['panel5RTRCategoryNameVar'+whatID] == 1) {
			var baseImg = document.getElementById('panel5RTRCategorySmImg'+whatID).src;
			var baseLength = baseImg.length;
			var baseStart = baseImg.substr(0,(baseLength-6));
			var baseEnd = baseImg.substr((baseLength-4),baseLength);
			document.getElementById('panel5RTRCategorySmImg'+whatID).src = baseStart + baseEnd;
		}
	}
	else {
		if (whatState == 1) {
			if (document.getElementById('panel5RTRCategoryBigImg'+whatID) && window['panel5RTRCategoryNameVar'+whatID] == 0) {
				var baseImg = document.getElementById('panel5RTRCategoryBigImg'+whatID).src;
				var baseLength = baseImg.length;
				var baseStart = baseImg.substr(0,(baseLength-4));
				var baseEnd = baseImg.substr((baseLength-4),baseLength);
				document.getElementById('panel5RTRCategoryBigImg'+whatID).src = baseStart + "_2" + baseEnd;
			}
			if (document.getElementById('panel5RTRCategorySmImg'+whatID) && window['panel5RTRCategoryNameVar'+whatID] == 0) {
				var baseImg = document.getElementById('panel5RTRCategorySmImg'+whatID).src;
				var baseLength = baseImg.length;
				var baseStart = baseImg.substr(0,(baseLength-4));
				var baseEnd = baseImg.substr((baseLength-4),baseLength);
				document.getElementById('panel5RTRCategorySmImg'+whatID).src = baseStart + "_2" + baseEnd;
			}
		}
		else {
			if (document.getElementById('panel5RTRCategoryBigImg'+whatID) && window['panel5RTRCategoryNameVar'+whatID] == 0) {
				var baseImg = document.getElementById('panel5RTRCategoryBigImg'+whatID).src;
				if (baseImg.indexOf('_2.png') != -1) {
					var baseLength = baseImg.length;
					var baseStart = baseImg.substr(0,(baseLength-6));
					var baseEnd = baseImg.substr((baseLength-4),baseLength);
					document.getElementById('panel5RTRCategoryBigImg'+whatID).src = baseStart + baseEnd;
				}
			}
			if (document.getElementById('panel5RTRCategorySmImg'+whatID) && window['panel5RTRCategoryNameVar'+whatID] == 0) {
				var baseImg = document.getElementById('panel5RTRCategorySmImg'+whatID).src;
				if (baseImg.indexOf('_2.png') != -1) {
					var baseLength = baseImg.length;
					var baseStart = baseImg.substr(0,(baseLength-6));
					var baseEnd = baseImg.substr((baseLength-4),baseLength);
					document.getElementById('panel5RTRCategorySmImg'+whatID).src = baseStart + baseEnd;
				}
			}
		}
	}
}
function panel5RTRProdImgReplace(whatState,whatID,clickVar) {
	if (clickVar) {
		if (document.getElementById('panel5RTRProductBigImg'+whatID) && window['panel5RTRProductNameVar'+whatID] == 0) {
			var baseImg = document.getElementById('panel5RTRProductBigImg'+whatID).src;
			var baseLength = baseImg.length;
			var baseStart = baseImg.substr(0,(baseLength-6));
			var baseEnd = baseImg.substr((baseLength-4),baseLength);
			document.getElementById('panel5RTRProductBigImg'+whatID).src = baseStart + baseEnd;
		}
		if (document.getElementById('panel5RTRProductSmImg'+whatID) && window['panel5RTRProductNameVar'+whatID] == 0) {
			var baseImg = document.getElementById('panel5RTRProductSmImg'+whatID).src;
			var baseLength = baseImg.length;
			var baseStart = baseImg.substr(0,(baseLength-6));
			var baseEnd = baseImg.substr((baseLength-4),baseLength);
			document.getElementById('panel5RTRProductSmImg'+whatID).src = baseStart + baseEnd;
		}
	}
	else {
		if (whatState == 1) {
			if (document.getElementById('panel5RTRProductBigImg'+whatID) && window['panel5RTRProductNameVar'+whatID] == 0) {
				var baseImg = document.getElementById('panel5RTRProductBigImg'+whatID).src;
				var baseLength = baseImg.length;
				var baseStart = baseImg.substr(0,(baseLength-4));
				var baseEnd = baseImg.substr((baseLength-4),baseLength);
				document.getElementById('panel5RTRProductBigImg'+whatID).src = baseStart + "_2" + baseEnd;
			}
			if (document.getElementById('panel5RTRProductSmImg'+whatID) && window['panel5RTRProductNameVar'+whatID] == 0) {
				var baseImg = document.getElementById('panel5RTRProductSmImg'+whatID).src;
				var baseLength = baseImg.length;
				var baseStart = baseImg.substr(0,(baseLength-4));
				var baseEnd = baseImg.substr((baseLength-4),baseLength);
				document.getElementById('panel5RTRProductSmImg'+whatID).src = baseStart + "_2" + baseEnd;
			}
		}
		else {
			if (document.getElementById('panel5RTRProductBigImg'+whatID) && window['panel5RTRProductNameVar'+whatID] == 0) {
				var baseImg = document.getElementById('panel5RTRProductBigImg'+whatID).src;
				if (baseImg.indexOf('_2.png') != -1) {
					var baseLength = baseImg.length;
					var baseStart = baseImg.substr(0,(baseLength-6));
					var baseEnd = baseImg.substr((baseLength-4),baseLength);
					document.getElementById('panel5RTRProductBigImg'+whatID).src = baseStart + baseEnd;
				}
			}
			if (document.getElementById('panel5RTRProductSmImg'+whatID) && window['panel5RTRProductNameVar'+whatID] == 0) {
				var baseImg = document.getElementById('panel5RTRProductSmImg'+whatID).src;
				if (baseImg.indexOf('_2.png') != -1) {
					var baseLength = baseImg.length;
					var baseStart = baseImg.substr(0,(baseLength-6));
					var baseEnd = baseImg.substr((baseLength-4),baseLength);
					document.getElementById('panel5RTRProductSmImg'+whatID).src = baseStart + baseEnd;
				}
			}
		}
	}
}
function panel5RTRCatSelectProducts(catSQLID, catID, catString, catVar, catVarSet) {
	if (document.getElementById(catID)) {
		if (catVar == 0) {
			$('#'+catID).removeClass(catString+'_hover');
			$('#'+catID).removeClass(catString+'_off');
			$('#'+catID).addClass(catString+'_on');
			for (y=0;y<rtreqCatArray.length;y++) {
				if (catSQLID == rtreqCatArray[y][0]) {
					rtreqCatArray[y][6] = "1";
					break;
				}
			}
			for (x=0; x<rtreqProdArray.length; x++) {
				if (rtreqProdArray[x][8] == catSQLID) {
					window[('panel5RTRProductNameVar'+rtreqProdArray[x][0])] = 1;
					rtreqProdArray[x][9] = "1";
					$('#panel5RTRProductName'+rtreqProdArray[x][0]).removeClass('panel_5_rtr_product_name_hover');
					$('#panel5RTRProductName'+rtreqProdArray[x][0]).removeClass('panel_5_rtr_product_name_off');
					$('#panel5RTRProductName'+rtreqProdArray[x][0]).addClass('panel_5_rtr_product_name_on');
				}
			}
			window[catVarSet] = 1;
		}
		else {
			$('#'+catID).removeClass(catString+'_hover');
			$('#'+catID).removeClass(catString+'_on');
			$('#'+catID).addClass(catString+'_off');
			if (document.getElementById('panel5RTRCategoryBigImg'+catSQLID) && $('#panel5RTRCategoryBigImg'+catSQLID).hasClass('img_replace_active')) {
				panel5RTRCatImgReplace(1,catSQLID,1);
			}
			if (document.getElementById('panel5RTRCategorySmImg'+catSQLID) && $('#panel5RTRCategorySmImg'+catSQLID).hasClass('img_replace_active')) {
				panel5RTRCatImgReplace(1,catSQLID,1);
			}
			for (y=0;y<rtreqCatArray.length;y++) {
				if (catSQLID == rtreqCatArray[y][0]) {
					rtreqCatArray[y][6] = "0";
					break;
				}
			}
			for (x=0; x<rtreqProdArray.length; x++) {
				if (rtreqProdArray[x][8] == catSQLID) {
					window[('panel5RTRProductNameVar'+rtreqProdArray[x][0])] = 0;
					rtreqProdArray[x][9] = "0";
					$('#panel5RTRProductName'+rtreqProdArray[x][0]).removeClass('panel_5_rtr_product_name_hover');
					$('#panel5RTRProductName'+rtreqProdArray[x][0]).removeClass('panel_5_rtr_product_name_on');
					$('#panel5RTRProductName'+rtreqProdArray[x][0]).addClass('panel_5_rtr_product_name_off');
				}
			}
			window[catVarSet] = 0;
		}
	}
}
function panel5RTRProdMouseOver (prodID, prodString, prodVar) {
	if (document.getElementById(prodID)) {
		if (prodVar == 0) {
			$('#'+prodID).removeClass(prodString+'_off');
			$('#'+prodID).addClass(prodString+'_hover');
		}
		else {
			$('#'+prodID).removeClass(prodString+'_on');
			$('#'+prodID).addClass(prodString+'_hover');
		}
	}
}
function panel5RTRProdMouseOut (prodID, prodString, prodVar) {
	if (document.getElementById(prodID)) {
		if (prodVar == 0) {
			$('#'+prodID).removeClass(prodString+'_hover');
			$('#'+prodID).addClass(prodString+'_off');
		}
		else {
			$('#'+prodID).removeClass(prodString+'_hover');
			$('#'+prodID).addClass(prodString+'_on');
		}
	}
}
function panel5RTRProdSelect(prodSQLID, prodSKU, prodID, prodString, prodVar, prodVarSet, clickSource) {
	if (document.getElementById(prodID)) {
		if (prodVar == 0) {
			$('#'+prodID).removeClass(prodString+'_hover');
			$('#'+prodID).removeClass(prodString+'_off');
			$('#'+prodID).addClass(prodString+'_on');
			for (x=0;x<rtreqProdArray.length;x++) {
				if (prodSQLID == rtreqProdArray[x][0]) {
					rtreqProdArray[x][9] = "1";
					break;
				}
			}
			window[prodVarSet] = 1;
		}
		else {
			$('#'+prodID).removeClass(prodString+'_hover');
			$('#'+prodID).removeClass(prodString+'_on');
			$('#'+prodID).addClass(prodString+'_off');
			if (document.getElementById('panel5RTRProductBigImg'+prodSQLID) && $('#panel5RTRProductBigImg'+prodSQLID).hasClass('img_replace_active')) {
				panel5RTRProdImgReplace(1,prodSQLID,1);
			}
			if (document.getElementById('panel5RTRProductSmImg'+prodSQLID) && $('#panel5RTRProductSmImg'+prodSQLID).hasClass('img_replace_active')) {
				panel5RTRProdImgReplace(1,prodSQLID,1);
			}
			for (x=0;x<rtreqProdArray.length;x++) {
				if (prodSQLID == rtreqProdArray[x][0]) {
					rtreqProdArray[x][9] = "0";
					break;
				}
			}
			window[prodVarSet] = 0;
		}
		if(gLog==1){console.log("panel5RTRProdSelect: rtreqProdArray[x][9] - ", rtreqProdArray[x][9]);}
		if (clickSource == 1) {
			var completeGroup = 1;
			for (x=0; x<rtreqProdArray.length; x++) {
				if (prodSQLID == rtreqProdArray[x][0]) {
					var catToCheck = rtreqProdArray[x][8];
					break;
				}
			}
			if (document.getElementById('panel5RTRCategoryName'+catToCheck)) {
				for (y=0; y<rtreqProdArray.length; y++) {
					if (catToCheck == rtreqProdArray[y][8] && rtreqProdArray[y][9] == 0) {
						completeGroup = 0;
						break;
					}
				}
				if (completeGroup == 1) {
					$('#panel5RTRCategoryName'+catToCheck).removeClass('panel_5_category_name_hover');
					$('#panel5RTRCategoryName'+catToCheck).removeClass('panel_5_category_name_off');
					$('#panel5RTRCategoryName'+catToCheck).addClass('panel_5_category_name_on');
					for (z=0;z<rtreqCatArray.length;z++) {
						if (catToCheck == rtreqCatArray[z][0]) {
							rtreqCatArray[z][6] = "1";
							break;
						}
					}
					window['panel5RTRCategoryNameVar'+catToCheck] = 1;
				}
				else {
					$('#panel5RTRCategoryName'+catToCheck).removeClass('panel_5_category_name_hover');
					$('#panel5RTRCategoryName'+catToCheck).removeClass('panel_5_category_name_on');
					$('#panel5RTRCategoryName'+catToCheck).addClass('panel_5_category_name_off');
					for (z=0;z<rtreqCatArray.length;z++) {
						if (catToCheck == rtreqCatArray[z][0]) {
							rtreqCatArray[z][6] = "0";
							break;
						}
					}
					window['panel5RTRCategoryNameVar'+catToCheck] = 0;
				}
			}
		}
	}
}
function panel5DistanceUpdate(setVal) {
	distanceChangedVal = 1;
	if (setVal) {
		document.getElementById('panel5DistanceField').value = setVal;
		document.getElementById('distance').value = setVal;
		document.getElementById('panel5DistanceDivNum').innerHTML = setVal;
		$(".panel_close_me").hide();
		document.getElementById('panel5DistanceDivNum').innerHTML = setVal;
	}
	else {
		document.getElementById('distance').value = document.getElementById('panel5DistanceField').value;
	}
}
function panel5CatMenuSelect(setVal) {
	catMenuChangedVal = 1
	document.getElementById('panel5CatMenuHolder').value = setVal;
	for (c=0; c<catArray.length; c++) {
		if (catArray[c][0] == setVal) {
			document.getElementById('panel5CatMenuDisplay').innerHTML = catArray[c][1];
			break;
		}
	}
	$(".panel_close_me").hide();
	if (document.getElementById('panel5ProdMenuHolder')) {
		document.getElementById('panel5ProdMenuDisplay').innerHTML = panel5ProdMenuText;
		document.getElementById('panel5ProdMenuShell').style.display = "block";
		document.getElementById('panel5ProdMenuContent').innerHTML = "";
		var thisWriteVal = "";
		if (panel5ProdMenuAllVar != "") {
			thisWriteVal += "<div class='panel_5_prod_menu_div_filter_item_999999 panel_5_prod_menu_div_filter_item panel_5_prod_menu_div_filter_item_off'";
			if (hoverState==1) {
				thisWriteVal += " onmouseover='genericButtonOver(\"panel_5_prod_menu_div_filter_item_999999\",\"panel_5_prod_menu_div_filter_item\");' onfocus='genericButtonOver(\"panel_5_prod_menu_div_filter_item_999999\",\"panel_5_prod_menu_div_filter_item\");' onmouseout='genericButtonOut(\"panel_5_prod_menu_div_filter_item_999999\",\"panel_5_prod_menu_div_filter_item\");' onblur='genericButtonOut(\"panel_5_prod_menu_div_filter_item_999999\",\"panel_5_prod_menu_div_filter_item\");'";
			}
			thisWriteVal += " onclick='panel5ProdMenuSelect(999999," + panel5ProdGoValueVal + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5ProdMenuSelect(999999," + panel5ProdGoValueVal + ");}' tabindex='0' title=\"" + panel5ProdMenuAllVar + "\">" + panel5ProdMenuAllVar + "<\/div>";
		}
		for (p=0; p<prodDisplayArray.length; p++) {
			if (prodDisplayArray[p][8] == setVal) {
				thisWriteVal += "<div class='panel_5_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + " panel_5_prod_menu_div_filter_item panel_5_prod_menu_div_filter_item_off'";
				if (hoverState==1) {
					thisWriteVal += " onmouseover='genericButtonOver(\"panel_5_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_5_prod_menu_div_filter_item\");' onfocus='genericButtonOver(\"panel_5_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_5_prod_menu_div_filter_item\");' onmouseout='genericButtonOut(\"panel_5_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_5_prod_menu_div_filter_item\");' onblur='genericButtonOut(\"panel_5_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_5_prod_menu_div_filter_item\");'";
				}
				thisWriteVal += " onclick='panel5ProdMenuSelect(" + prodDisplayArray[p][0] + "," + panel5ProdGoValueVal + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel5ProdMenuSelect(" + prodDisplayArray[p][0] + "," + panel5ProdGoValueVal + ");}' tabindex='0' title=\"" + prodDisplayArray[p][2] + "\">" + prodDisplayArray[p][2] + "<\/div>";
			}
		}
		document.getElementById('panel5ProdMenuContent').innerHTML = thisWriteVal;
	}
}
function panel5SetCatSelect() {
	selIndex = document.getElementById('panel5CatSelect').selectedIndex;
	setVal = document.getElementById('panel5CatSelect').options[selIndex].value;
	document.getElementById('panel5CatMenuHolder').value = setVal;
	if (document.getElementById('panel5ProdSelect') && setVal != 0) {
		document.getElementById('panel5ProdMenuShell').style.display = "block";
		document.panel5Form.panel5ProdSelect.options.length = 0;
		document.panel5Form.panel5ProdSelect.options[0] = new Option(panel5ProdMenuText, 0);
		var optionIndex = 1;
		if (panel5ProdMenuAllVar != "") {
			document.panel5Form.panel5ProdSelect.options[optionIndex] = new Option(panel5ProdMenuAllVar, 999999);
			optionIndex++;
		}
		for (p=0; p<prodDisplayArray.length; p++) {
			if (prodDisplayArray[p][8] == setVal) {
				document.panel5Form.panel5ProdSelect.options[optionIndex] = new Option(prodDisplayArray[p][2], prodDisplayArray[p][0]);
				optionIndex++;
			}
		}
	}
	else if (document.getElementById('panel5ProdSelect') && setVal == 0) {
		document.getElementById('panel5ProdMenuShell').style.display = "none";
		document.panel5Form.panel5ProdSelect.options.length = 0;
	}
	if (document.getElementById('panel5ProdSubmitButton')) {
		document.getElementById('panel5ProdSubmitButton').style.display = "none";
	}
}
function panel5ProdMenuSelect(setVal, goVal) {
	prodMenuChangedVal = 1;
	document.getElementById('panel5ProdMenuHolder').value = setVal;
	var foundAddress = 0;
	if (document.getElementById('street').value != "" && document.getElementById('street').value != p5AddFieldValueVar) {
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
		document.getElementById('panel5ProdMenuDisplay').innerHTML = panel5ProdMenuAllVar;
		for (p=0; p<prodDisplayArray.length; p++) {
			if (prodDisplayArray[p][8] == document.getElementById('panel5CatMenuHolder').value) {
				prodDisplayArray[p][9] = 1;
				window[('panel5ProductNameVar'+prodDisplayArray[p][0])] = 1;
				thisProdArr.push(prodDisplayArray[p][1]);
			}
			else {
				prodDisplayArray[p][9] = 0;
				window[('panel5ProductNameVar'+prodDisplayArray[p][0])] = 0;
			}
		}
		document.getElementById('PROD').value = thisProdArr.toString();
	}
	else {
		for (p=0; p<prodDisplayArray.length; p++) {
			if (prodDisplayArray[p][0] == setVal) {
				document.getElementById('panel5ProdMenuDisplay').innerHTML = prodDisplayArray[p][2];
				document.getElementById('PROD').value = prodDisplayArray[p][1];
				prodDisplayArray[p][9] = 1;
				window[('panel5ProductNameVar'+prodDisplayArray[p][0])] = 1;
			}
			else {
				prodDisplayArray[p][9] = 0;
				window[('panel5ProductNameVar'+prodDisplayArray[p][0])] = 0;
			}
		}
	}
	$(".panel_close_me").hide();
	if (goVal == 1) {
		if (foundAddress == 1) {
			panel5SubmitForm();
		}
	}
	else {
		if (document.getElementById('panel5ProdSubmitButton')) {
			if (setVal != 0) {
				document.getElementById('panel5ProdSubmitButton').style.display = "block";
			}
			else {
				document.getElementById('panel5ProdSubmitButton').style.display = "none";
			}
		}
	}
}
function panel5SetProdSelect(goVal) {
	selIndex = document.getElementById('panel5ProdSelect').selectedIndex;
	setVal = document.getElementById('panel5ProdSelect').options[selIndex].value;
	document.getElementById('panel5ProdMenuHolder').value = setVal;
	var foundAddress = 0;
	if (document.getElementById('street').value != "" && document.getElementById('street').value != p5AddFieldValueVar) {
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
			if (prodDisplayArray[p][8] == document.getElementById('panel5CatMenuHolder').value) {
				prodDisplayArray[p][9] = 1;
				window[('panel5ProductNameVar'+prodDisplayArray[p][0])] = 1;
				thisProdArr.push(prodDisplayArray[p][1]);
			}
			else {
				prodDisplayArray[p][9] = 0;
				window[('panel5ProductNameVar'+prodDisplayArray[p][0])] = 0;
			}
		}
		document.getElementById('PROD').value = thisProdArr.toString();
	}
	else {
		for (p=0; p<prodDisplayArray.length; p++) {
			if (prodDisplayArray[p][0] == setVal) {
				document.getElementById('PROD').value = prodDisplayArray[p][1];
				prodDisplayArray[p][9] = 1;
				window[('panel5ProductNameVar'+prodDisplayArray[p][0])] = 1;
			}
			else {
				prodDisplayArray[p][9] = 0;
				window[('panel5ProductNameVar'+prodDisplayArray[p][0])] = 0;
			}
		}
	}
	if (goVal == 1) {
		if (foundAddress == 1) {
			panel5SubmitForm();
		}
	}
	else {
		if (document.getElementById('panel5ProdSubmitButton')) {
			if (setVal != 0) {
				document.getElementById('panel5ProdSubmitButton').style.display = "block";
			}
			else {
				document.getElementById('panel5ProdSubmitButton').style.display = "none";
			}
		}
	}
}
function panel5ButtonHover(buttonID,buttonClass,hoverVar) {
	if (hoverVar == 0) {
		$('#'+buttonID).removeClass(buttonClass+'_hover');
		$('#'+buttonID).addClass(buttonClass+'_off');
	}
	else {
		$('#'+buttonID).removeClass(buttonClass+'_off');
		$('#'+buttonID).addClass(buttonClass+'_hover');
	}
}
function panel5panel2Connect() {
	p2Connect();
}
scriptLoad++;
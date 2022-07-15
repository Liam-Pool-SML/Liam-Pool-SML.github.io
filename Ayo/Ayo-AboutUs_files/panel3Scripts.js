function panel3Load(P3B) {
	isItAutoMM = 1;
	if (storeDisplayArray.length) {
		var thisDealOBJ = dealOBJ;
		panel2CloseDealShell();
		if(gLog==1){console.log("dealOBJ - " , thisDealOBJ);}
		var baseHTML = autotextIt(p3TemplateSet.panel3BaseDiv,"panel3Base");
		if (baseHTML.length != -1) {
			panel3storeNow = parseInt(document.getElementById('storeID').value);
			if (gtm != 0) {
				GTMit("STORELOC", "click", storeDisplayArray[panel3storeNow][0] + "|" + storeDisplayArray[panel3storeNow][1] + "|" + storeDisplayArray[panel3storeNow][3] + "|" + storeDisplayArray[panel3storeNow][4] + "|" + storeDisplayArray[panel3storeNow][5] + "|" + storeDisplayArray[panel3storeNow][6] + "|" + storeDisplayArray[panel3storeNow][7] + "|" + storeDisplayArray[panel3storeNow][27] + "|" + storeDisplayArray[panel3storeNow][8],false);
			}
			var p3GottaForce = 0;
			if (panel3ForceProd == 1 || panel3ForceDir == 1 || panel3ForceEmail == 1) {
				p3GottaForce = 1;
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
			var copyDirButtonTagStart = baseHTML.indexOf("<!--COPYBUTTON");
			if (copyDirButtonTagStart != -1) {
				var copyDirButtonTagEnd = baseHTML.indexOf(">",copyDirButtonTagStart);
				var copyDirButtonTagStrip = baseHTML.substring(copyDirButtonTagStart,(copyDirButtonTagEnd+1));
				var copyDirButtonHTMLStart = baseHTML.substr(0,copyDirButtonTagStart);
				var copyDirButtonHTMLEnd = baseHTML.substr((copyDirButtonTagEnd+1));
				var copyDirButtonRender = "";
				var copyDirButtonValueStart = copyDirButtonTagStrip.indexOf(" VALUE=");
				if (copyDirButtonValueStart != -1) {
					var copyDirButtonValueEnd = copyDirButtonTagStrip.indexOf("]",copyDirButtonValueStart);
					var copyDirButtonValueVar = copyDirButtonTagStrip.substring((copyDirButtonValueStart+8),(copyDirButtonValueEnd));
				}
				else {
					var copyDirButtonValueVar = "COPY";
				}
				var copyButtonClickedStart = copyDirButtonTagStrip.indexOf(" CLICK=");
				if (copyButtonClickedStart != -1) {
					var copyButtonClickedEnd = copyDirButtonTagStrip.indexOf("]",copyButtonClickedStart);
					var copyButtonClickedVar = copyDirButtonTagStrip.substring((copyButtonClickedStart+8),(copyButtonClickedEnd));
				}
				else {
					var copyButtonClickedVar = "copied";
				}
				var copyDirButtonItalicStart = copyDirButtonTagStrip.indexOf(" FNTAW=");
				if (copyDirButtonItalicStart != -1) {
					var copyDirButtonItalicEnd = copyDirButtonTagStrip.indexOf("]",copyDirButtonItalicStart);
					var copyDirButtonItalicVar = "<i class='fa " + copyDirButtonTagStrip.substring((copyDirButtonItalicStart+8),(copyDirButtonItalicEnd)) + "'><\/i>";
				}
				else {
					var copyDirButtonItalicVar = "";
				}
				copyDirButtonRender += "<div id='panel3CopyDirButton" + storeDisplayArray[panel3storeNow][13] + "' class='panel_3_copydir_button panel_3_copydir_button_off'";
				if (hoverState==1) {
					copyDirButtonRender += " onmouseover='panel3ButtonHover(\"panel3CopyDirButton" + storeDisplayArray[panel3storeNow][13] + "\",\"panel_3_copydir_button\",1);' onfocus='panel3ButtonHover(\"panel3CopyDirButton" + storeDisplayArray[panel3storeNow][13] + "\",\"panel_3_copydir_button\",1);' onmouseout='panel3ButtonHover(\"panel3CopyDirButton" + storeDisplayArray[panel3storeNow][13] + "\",\"panel_3_copydir_button\",0);' onblur='panel3ButtonHover(\"panel3CopyDirButton" + storeDisplayArray[panel3storeNow][13] + "\",\"panel_3_copydir_button\",0);'";
				}
				copyDirButtonRender += " onclick='panel3CopyDirectAddress(\"" + storeDisplayArray[panel3storeNow][13] + "\",\"panel3CopyDirButtonText" + storeDisplayArray[panel3storeNow][13] + "\",\"" + copyDirButtonValueVar + "\",\"" + copyButtonClickedVar + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3CopyDirectAddress(\"" + storeDisplayArray[panel3storeNow][13] + "\",\"panel3CopyDirButtonText" + storeDisplayArray[panel3storeNow][13] + "\",\"" + copyDirButtonValueVar + "\",\"" + copyButtonClickedVar + "\");}' tabindex='0' title=\"" + copyDirButtonValueVar + "\">" + copyDirButtonItalicVar + "<span id='panel3CopyDirButtonText" + storeDisplayArray[panel3storeNow][13] + "'>" + copyDirButtonValueVar + "<\/span><\/div>";
				baseHTML = copyDirButtonHTMLStart + copyDirButtonRender + copyDirButtonHTMLEnd;
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
					controlPanelButtonRender += "<div id='controlPanelButtonP3' class='control_panel_button_P3 control_panel_button_P3_off'";
					if (hoverState==1) {
						controlPanelButtonRender += " onmouseover='controlPanelButtonOver(\"P3\");' onfocus='controlPanelButtonOver(\"P3\");' onmouseout='controlPanelButtonOut(\"P3\");' onblur='controlPanelButtonOut(\"P3\");'";
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
					cpsP3 = 1;
					if (controlPanelSmallOpenStart != -1) {
						cpsP3 = 2;
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
						cpPH3 = 1;
					}
					var controlPanelMobileHideStart = controlPanelTagStrip.indexOf(" MOBILEHIDE");
					if (controlPanelMobileHideStart != -1) {
						cpPH3m = 1;
					}
					var controlPanelOpenStart = controlPanelTagStrip.indexOf(" OPEN");
					cpP3 = 1;
					if (controlPanelOpenStart != -1) {
						cpP3 = 2;
					}
					var controlPanelOpenStart = controlPanelTagStrip.indexOf(" LOCK");
					if (controlPanelOpenStart != -1) {
						cpP3Lock = 1;
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
					panel3ECommCountSingularVar = " " + eCommButTagStrip.substring((eCommCountSingularStart+11),(eCommCountSingularEnd));
				}
				var eCommCountPluralStart = eCommButTagStrip.indexOf(" PLURAL=");
				if (eCommCountPluralStart != -1) {
					var eCommCountPluralEnd = eCommButTagStrip.indexOf("]",eCommCountPluralStart);
					panel3ECommCountPluralVar = " " + eCommButTagStrip.substring((eCommCountPluralStart+9),(eCommCountPluralEnd));
				}
				var eCommCountAltVar = "MORE PRODUCTS ONLINE"
				var eCommCountAltStart = eCommButTagStrip.indexOf(" ALT=");
				if (eCommCountAltStart != -1) {
					var eCommCountAltEnd = eCommButTagStrip.indexOf("]",eCommCountAltStart);
					eCommCountAltVar = " " + eCommButTagStrip.substring((eCommCountAltStart+6),(eCommCountAltEnd));
				}
				if (thisCurrCount == 1) {
					var thisSCT = panel3ECommCountSingularVar;
				}
				else {
					var thisSCT = panel3ECommCountPluralVar;
				}
				eCommButRender = "<div id='panel3ECommButton' class='panel_3_ecomm_button panel_3_ecomm_button panel_3_ecomm_button_off'";
				if (hoverState==1) {
					eCommButRender += " onmouseover='genericButtonOver(\"panel_3_ecomm_button\",\"panel_3_ecomm_button\");' onfocus='genericButtonOver(\"panel_3_ecomm_button\",\"panel_3_ecomm_button\");' onmouseout='genericButtonOut(\"panel_3_ecomm_button\",\"panel_3_ecomm_button\");' onblur='genericButtonOut(\"panel_3_ecomm_button\",\"panel_3_ecomm_button\");'";
				}
				eCommButRender += " onclick='showOnRet();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){showOnRet();}'" + eCommButDisplay + " tabindex='0' title=\"View Retailers\"><span id='panel3ECommButNum'>" + thisCurrCount + "<\/span><span id='panel3ECommButText'>" +  thisSCT + "<\/span><\/div>";
			if (cPanelOp == 1) {
				eCommButRender += "<div id='panel3ECommButtonAlt' class='panel_3_ecomm_button panel_3_ecomm_button panel_3_ecomm_button_off'";
				if (hoverState==1) {
				eCommButRender += " onmouseover='genericButtonOver(\"panel_3_ecomm_button\",\"panel_3_ecomm_button\");' onfocus='genericButtonOver(\"panel_3_ecomm_button\",\"panel_3_ecomm_button\");' onmouseout='genericButtonOut(\"panel_3_ecomm_button\",\"panel_3_ecomm_button\");' onblur='genericButtonOut(\"panel_3_ecomm_button\",\"panel_3_ecomm_button\");'";
				}
				eCommButRender += " onclick='controlPanelAllCart(1);' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){controlPanelAllCart(1);}'" + eCommButDisplayAlt + " tabindex='0' title=\"" + eCommCountAltVar + "\"><span id='panel3ECommAltText'>" + eCommCountAltVar + "<\/span><\/div>";
			}
			else {
				eCommButRender += "<span id='panel3ECommButtonAlt'></span>";
			}
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
					var sl = panel3SliderArray.length;
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
					panel3SliderArray[sl] = [sliderDivVal, sliderOnItalicVar, sliderOffItalicVar, 0];
					baseHTML = sliderHTMLStart + "<div id='panel3SliderWrap_" + sl + "' class='panel_3_slider_wrap'><div id='panel3SliderContainer_" + sl + "' class='panel_3_slider_container' onclick='panel3SliderControl(" + sl + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3SliderControl(" + sl + ");}' tabindex='0' title=\"" + sliderValueVal + "\"><i class='panel_3_slider_i panel_3_slider_i_" + sl + " " + sliderOffItalicVar + "'><\/i><div id='panel3SliderTitle_" + sl + "' class='panel_3_slider_title'>" + sliderValueVal + "<\/div><\/div><\/div>" + sliderHTMLEnd;
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
					var addFieldClearRender = "clearAddfield(3);";
				}
				else {
					var addFieldClearRender = "";
				}
				var addFieldRender = "";
				var addFieldValueStart = addFieldTagStrip.indexOf(" VALUE=");
				if (addFieldValueStart != -1) {
					var addFieldValueEnd = addFieldTagStrip.indexOf("]");
					var addFieldValueVal = addFieldTagStrip.substring((addFieldValueStart+8),(addFieldValueEnd));
					p3AddFieldValueVar = addFieldValueVal;
					var addFieldValueRender = " placeholder='"+addFieldValueVal+"'";
					var addFieldFocusRender = " onfocus='" + addFieldClearRender + "'";
					var addFieldBlurRender = "";
				}
				else {
					p3AddFieldValueVar = "";
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
					var addFieldReqRender = " class='panel_3_address_field panel_3_address_field_base panel_3_required" + addFieldBlankRender + "'";
				}
				else {
					var addFieldReqRender = " class='panel_3_address_field panel_3_address_field_base" + addFieldBlankRender + "'";
				}
				var addFieldSubStart = addFieldTagStrip.indexOf(" SUBMIT");
				if (addFieldSubStart != -1) {
					var addFieldSubRender = " onkeyup='panel3FieldKeypress(event,\"panel3AddressField\",1);'";
				}
				else {
					var addFieldSubRender = "";
				}
				addFieldRender = "<input type='text' name='panel3AddressField' id='panel3AddressField'" + addFieldValueRender + addFieldFocusRender + addFieldBlurRender + addFieldReqRender + addFieldSubRender + " title=\"" + addFieldValueVal + "' aria-label='Enter a city, state, or postal code to find stores near you\">";
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
					var cityFieldFocusRender = " onfocus='fieldBlurFocus(\"panel3CityField\",\""+cityFieldValueVal+"\",1);'";
					var cityFieldBlurRender = " onblur='fieldBlurFocus(\"panel3CityField\",\""+cityFieldValueVal+"\",0);'";
				}
				else {
					cityFieldValueVar = "";
					var cityFieldValueRender = "";
					var cityFieldFocusRender = "";
					var cityFieldBlurRender = "";
				}
				var cityFieldReqStart = cityFieldTagStrip.indexOf(" REQUIRED");
				if (cityFieldReqStart != -1) {
					var cityFieldReqRender = " class='panel_3_city_field panel_3_city_field_base panel_3_required'";
				}
				else {
					var cityFieldReqRender = " class='panel_3_city_field panel_3_city_field_base'";
				}
				var cityFieldSubStart = cityFieldTagStrip.indexOf(" SUBMIT");
				if (cityFieldSubStart != -1) {
					var cityFieldSubRender = " onkeyup='panel3FieldKeypress(event,\"panel3CityField\",1);'";
				}
				else {
					var cityFieldSubRender = " onkeyup='panel3FieldKeypress(event,\"panel3CityField\",0);'";
				}
				cityFieldRender = "<input type='text' name='panel3CityField' id='panel3CityField'" + cityFieldValueRender + cityFieldFocusRender + cityFieldBlurRender + cityFieldReqRender + cityFieldSubRender + " title=\"City\">";
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
				var stateFieldValueEnd = stateFieldTagStrip.indexOf("]");
				if (stateFieldValueStart != -1 && stateBase == "") {
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
				stateFieldRender = "<input type='hidden' name='panel3StateField' id='panel3StateField' value='" + stateFieldValueVal + "'><select name='panel3StateSelect' id='panel3StateSelect' class='panel_3_state_field panel_3_state_field_base' onchange='setSelect(\"panel3StateSelect\",\"panel3StateField\");' title=\"State\">" + stateFieldValueRender;
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
					var zipFieldReqRender = " class='panel_3_zip_field panel_3_zip_field_base panel_3_required'";
				}
				else {
					var zipFieldReqRender = " class='panel_3_zip_field panel_3_zip_field_base'";
				}
				var zipFieldSubStart = zipFieldTagStrip.indexOf(" SUBMIT");
				if (zipFieldSubStart != -1) {
					var zipFieldSubRender = " onkeyup='panel3FieldKeypress(event,\"panel3ZipField\",1);'";
				}
				else {
					var zipFieldSubRender = " onkeyup='panel3FieldKeypress(event,\"panel3ZipField\",0);'";
				}
				zipFieldRender = "<input type='text' name='panel3ZipField' id='panel3ZipField'" + zipFieldReqRender + zipFieldSubRender + " title=\"Postal Code\">";
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
				productSelectRender += "<select name='panel3ProductSelect' id='panel3ProductSelect' class='panel_3_product_select' onchange='setProductSelect(\"panel3ProductSelect\");'><option value='ALL'";
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
				scopeFieldRender = "<input type='hidden' name='panel3ScopeField' id='panel3ScopeField' value='" + scopeFieldValueVal + "'><select name='panel3ScopeSelect' id='panel3ScopeSelect' class='panel_3_scope_field panel_3_scope_field_base' onchange='setSelect(\"panel3ScopeSelect\",\"panel3ScopeField\");panel3ScopeUpdate();' title=\"Scope\"><option value='0'";
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
					panel3DistanceFlag = 1;
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
				distanceFieldRender = "<input type='hidden' name='panel3DistanceField' id='panel3DistanceField' value='" + distanceFieldValueVal + "' title=\"Distance\">";
				if (distanceDivValueVal == 0) {
					distanceFieldRender += "<select name='panel3DistanceSelect' id='panel3DistanceSelect' class='panel_3_distance_field panel_3_distance_field_base' onchange='setSelect(\"panel3DistanceSelect\",\"panel3DistanceField\");panel3DistanceUpdate();'>";
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
					distanceFieldRender += "<div id='panel3DistanceDivShell' class='panel_3_distance_div_shell'><div class='panel_3_distance_div_filter_arrow'><div class='panel_3_distance_div_filter panel_3_distance_div_filter_base panel_3_distance_div_filter_base_off'";
					if (hoverState==1) {
						distanceFieldRender += " onmouseover='genericButtonOver(\"panel_3_distance_div_filter\",\"panel_3_distance_div_filter_base\");' onfocus='genericButtonOver(\"panel_3_distance_div_filter\",\"panel_3_distance_div_filter_base\");' onmouseout='genericButtonOut(\"panel_3_distance_div_filter\",\"panel_3_distance_div_filter_base\");' onblur='genericButtonOut(\"panel_3_distance_div_filter\",\"panel_3_distance_div_filter_base\");'";
					}
					distanceFieldRender += " onclick='$(\".panel_3_distance_div_filter_slider\").toggle();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){$(\".panel_3_distance_div_filter_slider\").toggle();}' tabindex='0' title=\"" + distanceFieldValueVal + "\"><div class='panel_3_distance_div_filter_text'><span id='panel3DistanceDivNum'>" + distanceFieldValueVal + "<\/span> <span class='distancefield_miles_span'>" + distanceText + "<\/span> " + distanceFieldItalicVar + "<\/div><\/div><\/div><div class='panel_3_distance_div_filter_slider panel_close_me' style='display:none;'><div class='panel_3_distance_div_filter_liner'>";
					for (w=0; w<distanceFieldOptionsArray.length; w++) {
						distanceFieldRender += "<div class='panel_3_distance_div_filter_item_" + distanceFieldOptionsArray[w] + " panel_3_distance_div_filter_item panel_3_distance_div_filter_item_off'";
						if (hoverState==1) {
							distanceFieldRender += " onmouseover='genericButtonOver(\"panel_3_distance_div_filter_item_" + distanceFieldOptionsArray[w] + "\",\"panel_3_distance_div_filter_item\");' onfocus='genericButtonOver(\"panel_3_distance_div_filter_item_" + distanceFieldOptionsArray[w] + "\",\"panel_3_distance_div_filter_item\");' onmouseout='genericButtonOut(\"panel_3_distance_div_filter_item_" + distanceFieldOptionsArray[w] + "\",\"panel_3_distance_div_filter_item\");' onblur='genericButtonOut(\"panel_3_distance_div_filter_item_" + distanceFieldOptionsArray[w] + "\",\"panel_3_distance_div_filter_item\");'";
						}
						distanceFieldRender += " onclick='panel3DistanceUpdate(" + distanceFieldOptionsArray[w] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3DistanceUpdate(" + distanceFieldOptionsArray[w] + ");}' tabindex='0' title=\"" + distanceFieldOptionsArray[w] + " " + distanceText + "\">" + distanceFieldOptionsArray[w] + " " + distanceText + "<\/div>";
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
				resultsFieldRender = "<input type='hidden' name='panel3ResultsField' id='panel3ResultsField' value='" + resultsFieldValueVal + "' title=\"Results\"><select name='panel3ResultsSelect' id='panel3ResultsSelect' class='panel_3_results_field panel_3_results_field_base' onchange='setSelect(\"panel3ResultsSelect\",\"panel3ResultsField\");panel3ResultsUpdate();'><option value='10'";
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
				if (sortFieldValueStart != -1) {
					var sortFieldValueEnd = sortFieldTagStrip.indexOf("]");
					var sortFieldValueVal = sortFieldTagStrip.substring((sortFieldValueStart+8),(sortFieldValueEnd));
				}
				else {
					var sortFieldValueVal = 0;
				}
				sortFieldRender = "<input type='hidden' name='panel3SortField' id='panel3SortField' value='" + sortFieldValueVal + "' title=\"Sort\"><select name='panel3SortSelect' id='panel3SortSelect' class='panel_3_sort_field panel_3_sort_field_base' onchange='setSelect(\"panel3SortSelect\",\"panel3SortField\");panel3SortUpdate();'><option value='0'";
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
				labelMenuRender += "<input type='hidden' name='panel2LabelMenuHolder' id='panel2LabelMenuHolder' value='0' title=\"Selected Label\"><div id='panel2LabelMenuShell' class='panel_2_label_menu_div_shell'>";
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
				panel3HasCatMenu = 1;
				var catMenuValueStart = catMenuTagStrip.indexOf(" VALUE=");
				if (catMenuValueStart != -1) {
					var catMenuValueEnd = catMenuTagStrip.indexOf("]",catMenuValueStart);
					var catMenuValueVal = catMenuTagStrip.substring((catMenuValueStart+8),(catMenuValueEnd));
				}
				else {
					var catMenuValueVal = "SELECT A CATEGORY";
				}
				panel3CatMenuText = catMenuValueVal;
				panel3ThereIsACat = 0;
				var findAProdComma = document.getElementById('PROD').value.indexOf(",");
				if (findAProdComma != -1) {
					var theProdSplit = document.getElementById('PROD').value.split(",");
					var theProdCheck = theProdSplit[0];
				}
				else {
					var theProdCheck = document.getElementById('PROD').value;
				}
				for (pc=0; pc<prodDisplayArray.length; pc++) {
					if (prodDisplayArray[pc][1] == theProdCheck) {
						panel3ThereIsACat = prodDisplayArray[pc][8];
						for (cc=0; cc<catArray.length; cc++) {
							if (catArray[cc][0] == panel3ThereIsACat) {
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
				catMenuRender = "<input type='hidden' name='panel3CatMenuHolder' id='panel3CatMenuHolder' value='" + panel3ThereIsACat + "' title=\"Selected Category\"><div id='panel3CatMenuShell' class='panel_3_cat_menu_div_shell'";
				if (panel3HasFamMenu == 1) {
					catMenuRender += " style='display:none;'";
				}
				catMenuRender += ">";
				if (catDivValueVal == 0) {
					catMenuRender += "<select name='panel3CatSelect' id='panel3CatSelect' class='panel_3_cat_field panel_3_cat_field_base' onchange='panel3SetCatSelect();'><option value='0'";
					if (panel3ThereIsACat == 0) {
						catMenuRender += " selected='selected'";
					}
					catMenuRender += ">" + panel3CatMenuText + "<\/option>";
					if (panel3HasFamMenu == 0) {
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
					catMenuRender += "<div class='panel_3_cat_menu_div_filter_arrow'><div class='panel_3_cat_menu_div_filter panel_3_cat_menu_div_filter_base panel_3_cat_menu_div_filter_base_off'";
					if (hoverState==1) {
						catMenuRender += " onmouseover='genericButtonOver(\"panel_3_cat_menu_div_filter\",\"panel_3_cat_menu_div_filter_base\");' onfocus='genericButtonOver(\"panel_3_cat_menu_div_filter\",\"panel_3_cat_menu_div_filter_base\");' onmouseout='genericButtonOut(\"panel_3_cat_menu_div_filter\",\"panel_3_cat_menu_div_filter_base\");' onblur='genericButtonOut(\"panel_3_cat_menu_div_filter\",\"panel_3_cat_menu_div_filter_base\");'";
					}
					catMenuRender += " onclick='$(\".panel_3_cat_menu_div_filter_slider\").toggle();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){$(\".panel_3_cat_menu_div_filter_slider\").toggle();}' tabindex='0' title=\"" + catMenuValueVal + "\"><div class='panel_3_cat_menu_div_filter_text'><span id='panel3CatMenuDisplay'>" + catMenuValueVal + "<\/span> " + catMenuItalicVar + "<\/div><\/div><\/div><div class='panel_3_cat_menu_div_filter_slider panel_close_me' style='display:none;'><div class='panel_3_cat_menu_div_filter_liner' id='panel3CatMenuContent'>";
					if (panel3HasFamMenu == 0) {
						for (c=0; c<catArray.length; c++) {
							catMenuRender += "<div class='panel_3_cat_menu_div_filter_item_" + catArray[c][0] + " panel_3_cat_menu_div_filter_item panel_3_cat_menu_div_filter_item_off'";
							if (hoverState==1) {
								catMenuRender += " onmouseover='genericButtonOver(\"panel_3_cat_menu_div_filter_item_" + catArray[c][0] + "\",\"panel_3_cat_menu_div_filter_item\");' onfocus='genericButtonOver(\"panel_3_cat_menu_div_filter_item_" + catArray[c][0] + "\",\"panel_3_cat_menu_div_filter_item\");' onmouseout='genericButtonOut(\"panel_3_cat_menu_div_filter_item_" + catArray[c][0] + "\",\"panel_3_cat_menu_div_filter_item\");' onblur='genericButtonOut(\"panel_3_cat_menu_div_filter_item_" + catArray[c][0] + "\",\"panel_3_cat_menu_div_filter_item\");'";
							}
							catMenuRender += " onclick='panel3CatMenuSelect(" + catArray[c][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3CatMenuSelect(" + catArray[c][0] + ");}' tabindex='0' title=\"" + catArray[c][1] + "\">" + catArray[c][1] + "<\/div>";
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
				panel3HasProdMenu = 1;
				var prodMenuValueStart = prodMenuTagStrip.indexOf(" VALUE=");
				if (prodMenuValueStart != -1) {
					var prodMenuValueEnd = prodMenuTagStrip.indexOf("]",prodMenuValueStart);
					var prodMenuValueVal = prodMenuTagStrip.substring((prodMenuValueStart+8),(prodMenuValueEnd));
				}
				else {
					var prodMenuValueVal = "SELECT A PRODUCT";
				}
				panel3ProdMenuText = prodMenuValueVal;
				panel3ThereIsAProd = "";
				if (panel3ThereIsACat != 0) {
					prodMenuArray = [];
					for (p=0; p<prodDisplayArray.length; p++) {
						if (prodDisplayArray[p][8] == panel3ThereIsACat) {
							prodMenuArray.push(prodDisplayArray[p][1]);
						}
					}
					panel3ProdAllList = prodMenuArray.toString();
				}
				for (pc=0; pc<prodDisplayArray.length; pc++) {
					if (prodDisplayArray[pc][1] == document.getElementById('PROD').value) {
						panel3ThereIsAProd = prodDisplayArray[pc][1];
						prodMenuValueVal = prodDisplayArray[pc][2];
						break;
					}
				}
				if (panel3ProdAllList == document.getElementById('PROD').value) {
					panel3ThereIsAProd = 999999;
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
					panel3ProdMenuAllVar = prodMenuTagStrip.substring((prodMenuAllStart+6),(prodMenuAllEnd));
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
					panel3ProdGoValueVal = 1;
				}
				prodMenuRender = "<input type='hidden' name='panel3ProdMenuHolder' id='panel3ProdMenuHolder' value='" + panel3ThereIsAProd + "' title=\"Selected Product\"><div id='panel3ProdMenuShell' class='panel_3_prod_menu_div_shell'";
				if (panel3HasCatMenu == 1 && panel3ThereIsAProd == "") {
					prodMenuRender += " style='display:none;'";
				}
				prodMenuRender += ">";
				if (prodDivValueVal == 0) {
					prodMenuRender += "<select name='panel3ProdSelect' id='panel3ProdSelect' class='panel_3_prod_field panel_3_prod_field_base' onchange='panel3SetProdSelect(" + panel3ProdGoValueVal + ");'><option value='0'";
					if (panel3ThereIsAProd == 0) {
						prodMenuRender += " selected='selected'";
					}
					prodMenuRender += ">" + panel3ProdMenuText + "<\/option>";
					if (panel3HasCatMenu == 0) {
						for (p=0; p<prodDisplayArray.length; p++) {
							prodMenuRender += "<option value='" + prodDisplayArray[p][0] + "'";
							if (prodMenuValueVal == prodDisplayArray[p][2]) {
								prodMenuRender += " selected='selected'";
							}
							prodMenuRender += ">" + prodDisplayArray[p][2] + "<\/option>";
						}
					}
					else if (panel3ThereIsACat != 0) {
						if (panel3ProdMenuAllVar != "") {
							prodMenuRender += "<option value='999999'";
							if (panel3ThereIsAProd == 999999) {
								prodMenuRender += " selected='selected'";
							}
							prodMenuRender += ">" + panel3ProdMenuAllVar + "<\/option>";
						}
						for (p=0; p<prodDisplayArray.length; p++) {
							if (prodDisplayArray[p][8] == panel3ThereIsACat) {
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
					prodMenuRender += "<div class='panel_3_prod_menu_div_filter_arrow'><div class='panel_3_prod_menu_div_filter panel_3_prod_menu_div_filter_base panel_3_prod_menu_div_filter_base_off'";
					if (hoverState==1) {
						prodMenuRender += " onmouseover='genericButtonOver(\"panel_3_prod_menu_div_filter\",\"panel_3_prod_menu_div_filter_base\");' onfocus='genericButtonOver(\"panel_3_prod_menu_div_filter\",\"panel_3_prod_menu_div_filter_base\");' onmouseout='genericButtonOut(\"panel_3_prod_menu_div_filter\",\"panel_3_prod_menu_div_filter_base\");' onblur='genericButtonOut(\"panel_3_prod_menu_div_filter\",\"panel_3_prod_menu_div_filter_base\");'";
					}
					prodMenuRender += " onclick='$(\".panel_3_prod_menu_div_filter_slider\").toggle();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){$(\".panel_3_prod_menu_div_filter_slider\").toggle();}'><div class='panel_3_prod_menu_div_filter_text'><span id='panel3ProdMenuDisplay' tabindex='0' title=\"" + panel3ProdMenuAllVar + "\">";
					if (panel3ThereIsAProd == 999999) {
						prodMenuRender += panel3ProdMenuAllVar;
					}
					else {
						prodMenuRender += prodMenuValueVal
					}
					prodMenuRender += "<\/span> " + prodMenuItalicVar + "<\/div><\/div><\/div><div class='panel_3_prod_menu_div_filter_slider panel_close_me' style='display:none;'><div class='panel_3_prod_menu_div_filter_liner' id='panel3ProdMenuContent'>";
					if (panel3HasCatMenu == 0) {
						for (p=0; p<prodDisplayArray.length; p++) {
							prodMenuRender += "<div class='panel_3_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + " panel_3_prod_menu_div_filter_item panel_3_prod_menu_div_filter_item_off'";
							if (hoverState==1) {
								prodMenuRender += " onmouseover='genericButtonOver(\"panel_3_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_3_prod_menu_div_filter_item\");' onfocus='genericButtonOver(\"panel_3_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_3_prod_menu_div_filter_item\");' onmouseout='genericButtonOut(\"panel_3_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_3_prod_menu_div_filter_item\");' onblur='genericButtonOut(\"panel_3_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_3_prod_menu_div_filter_item\");'";
							}
							prodMenuRender += " onclick='panel3ProdMenuSelect(" + prodDisplayArray[p][0] + "," + panel3ProdGoValueVal + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3ProdMenuSelect(" + prodDisplayArray[p][0] + "," + panel3ProdGoValueVal + ");}' tabindex='0' title=\"" + prodDisplayArray[p][2] + "\">" + prodDisplayArray[p][2] + "<\/div>";
						}
					}
					else if (panel3ThereIsACat != 0) {
						if (panel3ProdMenuAllVar != "") {
							prodMenuRender += "<div class='panel_3_prod_menu_div_filter_item_999999 panel_3_prod_menu_div_filter_item panel_3_prod_menu_div_filter_item_off'";
							if (hoverState==1) {
								prodMenuRender += " onmouseover='genericButtonOver(\"panel_3_prod_menu_div_filter_item_999999\",\"panel_3_prod_menu_div_filter_item\");' onfocus='genericButtonOver(\"panel_3_prod_menu_div_filter_item_999999\",\"panel_3_prod_menu_div_filter_item\");' onmouseout='genericButtonOut(\"panel_3_prod_menu_div_filter_item_999999\",\"panel_3_prod_menu_div_filter_item\");' onblur='genericButtonOut(\"panel_3_prod_menu_div_filter_item_999999\",\"panel_3_prod_menu_div_filter_item\");'";
							}
							prodMenuRender += " onclick='panel3ProdMenuSelect(999999," + panel3ProdGoValueVal + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3ProdMenuSelect(999999," + panel3ProdGoValueVal + ");}' tabindex='0' title=\"" + panel3ProdMenuAllVar + "\">" + panel3ProdMenuAllVar + "<\/div>";
						}
						for (p=0; p<prodDisplayArray.length; p++) {
							if (prodDisplayArray[p][8] == panel3ThereIsACat) {
								prodMenuRender += "<div class='panel_3_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + " panel_3_prod_menu_div_filter_item panel_3_prod_menu_div_filter_item_off'";
								if (hoverState==1) {
									prodMenuRender += " onmouseover='genericButtonOver(\"panel_3_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_3_prod_menu_div_filter_item\");' onfocus='genericButtonOver(\"panel_3_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_3_prod_menu_div_filter_item\");' onmouseout='genericButtonOut(\"panel_3_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_3_prod_menu_div_filter_item\");' onblur='genericButtonOut(\"panel_3_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_3_prod_menu_div_filter_item\");'";
								}
								prodMenuRender += " onclick='panel3ProdMenuSelect(" + prodDisplayArray[p][0] + "," + panel3ProdGoValueVal + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3ProdMenuSelect(" + prodDisplayArray[p][0] + "," + panel3ProdGoValueVal + ");}' tabindex='0' title=\"" + prodDisplayArray[p][2] + "\">" + prodDisplayArray[p][2] + "<\/div>";
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
				prodSubButtonRender += "<div id='panel3ProdSubmitButton' class='panel_3_prod_submit_button panel_3_prod_submit_button_off'";
				if (hoverState==1) {
					prodSubButtonRender += " onmouseover='panel3ButtonHover(\"panel3ProdSubmitButton\",\"panel_3_prod_submit_button\",1);' onfocus='panel3ButtonHover(\"panel3ProdSubmitButton\",\"panel_3_prod_submit_button\",1);' onmouseout='panel3ButtonHover(\"panel3ProdSubmitButton\",\"panel_3_prod_submit_button\",0);' onblur='panel3ButtonHover(\"panel3ProdSubmitButton\",\"panel_3_prod_submit_button\",0);'";
				}
				prodSubButtonRender += " onclick='panel3SubmitForm();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3SubmitForm();}'";
				if (panel3ThereIsAProd == "") {
					prodSubButtonRender += " style='display:none;'";
				}
				prodSubButtonRender += " tabindex='0' title=\"" + prodSubButtonValueVar + "\">" + prodSubButtonItalicVar + prodSubButtonValueVar + "<\/div>";
				baseHTML = prodSubButtonHTMLStart + prodSubButtonRender + prodSubButtonHTMLEnd;
			}
			var ccreqButtonTagStart = baseHTML.indexOf("<!--CCREQBUTTON");
			if (ccreqButtonTagStart != -1 && disableForms == 0) {
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
				ccreqButtonRender += "<div id='panel3CCReqButton' class='panel_3_ccreq_button panel_3_ccreq_button_off'";
				if (hoverState==1) {
					ccreqButtonRender += " onmouseover='panel3ButtonHover(\"panel3CCReqButton\",\"panel_3_ccreq_button\",1);' onfocus='panel3ButtonHover(\"panel3CCReqButton\",\"panel_3_ccreq_button\",1);' onmouseout='panel3ButtonHover(\"panel3CCReqButton\",\"panel_3_ccreq_button\",0);' onblur='panel3ButtonHover(\"panel3CCReqButton\",\"panel_3_ccreq_button\",0);'";
				}
				ccreqButtonRender += " onclick='panel3CCReq();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3CCReq();}' tabindex='0' title=\"" + ccreqButtonValueVar + "\">" + ccreqButtonItalicVar + ccreqButtonValueVar + "<\/div>";
				baseHTML = ccreqButtonHTMLStart + ccreqButtonRender + ccreqButtonHTMLEnd;
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
				storeButtonRender += "<div id='panel3StoreButton' class='panel_3_store_button panel_3_store_button_off'";
				if (hoverState==1) {
					storeButtonRender += " onmouseover='panel3ButtonHover(\"panel3StoreButton\",\"panel_3_store_button\",1);' onfocus='panel3ButtonHover(\"panel3StoreButton\",\"panel_3_store_button\",1);' onmouseout='panel3ButtonHover(\"panel3StoreButton\",\"panel_3_store_button\",0);' onblur='panel3ButtonHover(\"panel3StoreButton\",\"panel_3_store_button\",0);'";
				}
				storeButtonRender += " onclick='panel3Store();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3Store();}' tabindex='0' title=\"" + storeButtonValueVar + "\">" + storeButtonItalicVar + storeButtonValueVar + "<\/div>";
				baseHTML = storeButtonHTMLStart + storeButtonRender + storeButtonHTMLEnd;
			}
			var rtreqButtonTagStart = baseHTML.indexOf("<!--RTREQBUTTON");
			if (rtreqButtonTagStart != -1 && disableForms == 0) {
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
				rtreqButtonRender += "<div id='panel3RTReqButton' class='panel_3_rtreq_button panel_3_rtreq_button_off'";
				if (hoverState==1) {
					rtreqButtonRender += " onmouseover='panel3ButtonHover(\"panel3RTReqButton\",\"panel_3_rtreq_button\",1);' onfocus='panel3ButtonHover(\"panel3RTReqButton\",\"panel_3_rtreq_button\",1);' onmouseout='panel3ButtonHover(\"panel3RTReqButton\",\"panel_3_rtreq_button\",0);' onblur='panel3ButtonHover(\"panel3RTReqButton\",\"panel_3_rtreq_button\",0);'";
				}
				rtreqButtonRender += " onclick='panel3RTReq();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3RTReq();}' tabindex='0' title=\"" + rtreqButtonValueVar + "\">" + rtreqButtonItalicVar + rtreqButtonValueVar + "<\/div>";
				baseHTML = rtreqButtonHTMLStart + rtreqButtonRender + rtreqButtonHTMLEnd;
			}
			var prodShopCartTagStart = baseHTML.indexOf("<!--PRODSHOPCART");
			if (prodShopCartTagStart != -1) {
				var prodShopCartTagEnd = baseHTML.indexOf(">",prodShopCartTagStart);
				var prodShopCartTagStrip = baseHTML.substring(prodShopCartTagStart,(prodShopCartTagEnd+1));
				var prodShopCartHTMLStart = baseHTML.substr(0,prodShopCartTagStart);
				var prodShopCartHTMLEnd = baseHTML.substr((prodShopCartTagEnd+1));
				baseHTML = prodShopCartHTMLStart + "<div id='panel3ProdShopCartShell' class='panel_3_prod_shop_cart_shell'><\/div>" + prodShopCartHTMLEnd;
			}
			var prodListSearchOn = 1;
			var prodListFailsafe = 0;
			while (prodListSearchOn == 1) {
				prodListFailsafe++;
				var prodListTagStart = baseHTML.indexOf("<!--PRODLIST");
				if (prodListTagStart != -1) {
					var prodListTagEnd = baseHTML.indexOf(">",prodListTagStart);
					var prodListTagStrip = baseHTML.substring(prodListTagStart,(prodListTagEnd+1));
					var baseProdListHTMLStart = baseHTML.substr(0,prodListTagStart);
					var baseProdListHTMLEnd = baseHTML.substr((prodListTagEnd+1));
					var prodListTagFilterStart = prodListTagStrip.indexOf(" FILTER");
					if (prodListTagFilterStart != -1) {
						panel3ProductFilter = 1;
					}
					var prodListTagSubsetStart = prodListTagStrip.indexOf(" SUBSET");
					if (prodListTagSubsetStart != -1) {
						panel3ProductSubset = 1;
					}
					var prodListTagExcludeStart = prodListTagStrip.indexOf(" EXCLUDE");
					if (prodListTagExcludeStart != -1) {
						panel3ProductExclude = 1;
					}
					var prodListTagHideprodStart = prodListTagStrip.indexOf(" HIDEPROD");
					if (prodListTagHideprodStart != -1) {
						panel3ProductHideprod = 1;
					}
					var prodListTagExcludeStart = prodListTagStrip.indexOf(" OPEN");
					var panel3PListSliderOpen = 0;
					if (prodListTagExcludeStart != -1) {
						panel3PListSliderOpen = 1;
					}
					var prodListTagSortStart = prodListTagStrip.indexOf(" SORT=");
					if (prodListTagSortStart != -1) {
						var prodListTagSortEnd = prodListTagStrip.indexOf("]",prodListTagSortStart);
						var panel3ProductSortTemp = prodListTagStrip.substring((prodListTagSortStart+7),(prodListTagSortEnd));
						if (panel3ProductSortTemp == "prodlist_sort") {
							panel3ProductSort = prodListStyle;
						}
						else {
							panel3ProductSort = panel3ProductSortTemp;
						}
					}
					var prodListTagOrderStart = prodListTagStrip.indexOf(" ORDER=");
					if (prodListTagOrderStart != -1) {
						var prodListTagOrderEnd = prodListTagStrip.indexOf("]",prodListTagOrderStart);
						panel3ProductOrder = prodListTagStrip.substring((prodListTagOrderStart+8),(prodListTagOrderEnd));
					}
					var prodListTagCatIDStart = prodListTagStrip.indexOf(" CATID=");
					if (prodListTagCatIDStart != -1) {
						var prodListTagCatIDEnd = prodListTagStrip.indexOf("]",prodListTagCatIDStart);
						var panel3ProductCatID = prodListTagStrip.substring((prodListTagCatIDStart+8),(prodListTagCatIDEnd));
					}
					else {
						var panel3ProductCatID = 0;
					}
					var prodListTagOffStart = prodListTagStrip.indexOf(" OFF");
					if (prodListTagOffStart != -1) {
						panel3AllOffIsOn = 1;
					}
				}
				else {
					prodListSearchOn = 0;
				}
				if (prodListFailsafe == 30) {
					prodListSearchOn = 0;
				}
				if (prodDisplayArray.length && prodListSearchOn != 0) {
					prodFilterArray.length = 0;
					var pfCount = 0;
					var prodListHTML = "";
					var prodFilterSplit = document.getElementById('PROD').value.split(",");
					if (document.getElementById('PROD').value != document.getElementById('FULLPROD').value) {
						for (y=0;y<prodDisplayArray.length;y++) {
							if (panel3ProductSubset == 1) {
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
					if (panel3ProductOrder == "x") {
						//sortCol(prodFilterArray,2);
					}
					else {
						var prodOrderArray = panel3ProductOrder.split(",");
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
					if (prodFilterArray.length && panel3AllOffIsOn == 1) {
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
					if (panel3ProductSort == "CATEGORY") {
						if (panel3ProductCatID != 0) {
							for (w=0; w<catArray.length; w++) {
								if (catArray[w][0] == panel3ProductCatID) {
									var categoryHTMLTest = autotextIt(p3TemplateSet.panel3CategoryDiv,"panel3Category");
									var catBadgeTagStart = categoryHTMLTest.indexOf("<!--BADGE");
									if (catBadgeTagStart != -1) {
										var catBadgeTagEnd = categoryHTMLTest.indexOf(">",catBadgeTagStart);
										var catBadgeTagStrip = categoryHTMLTest.substring(catBadgeTagStart,(catBadgeTagEnd+1));
										var baseCatBadgeHTMLStart = categoryHTMLTest.substr(0,catBadgeTagStart);
										var baseCatBadgeHTMLEnd = categoryHTMLTest.substr((catBadgeTagEnd+1));
										categoryHTMLTest = baseCatBadgeHTMLStart + "<span id='panel3ProdlistCatBadge" + catArray[w][0] + "' class='panel_3_prodlist_cat_badge' style='display:none;'>0<\/span>" + baseCatBadgeHTMLEnd;
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
											var replaceImgMouseOver = "panel3CatImgReplace(1," + catArray[w][0] + ");";
											var replaceImgMouseOut = "panel3CatImgReplace(2," + catArray[w][0] + ");";
											var replaceImgMouseClass = " img_replace_active";
											var replaceImgCall = "panel3CatImgClick(" + catArray[w][0] + ");";
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
											catNameTagLink += " style='cursor:pointer;' onclick='panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\");" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\");" + replaceImgCall + "}'";
											if (hoverState==1) {
												catNameTagLink += " onmouseover='panel3CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel3CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel3CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel3CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
											}
											var thisCatIsOn = 1;
											for (q=0; q<prodFilterArray.length; q++) {
												if (prodFilterArray[q][8] == catArray[w][0] && prodFilterArray[q][9] == "0") {
													thisCatIsOn = 0;
													break;
												}
											}
											if (thisCatIsOn == 1) {
												var baseCatStyle = " panel_3_category_name_on";
												catArray[w][6] = 1;
												window["panel1CategoryNameVar" + catArray[w][0]] = 1;
											}
											else {
												var baseCatStyle = " panel_3_category_name_off";
											}
										}
										categoryHTMLTest = baseCatNameHTMLStart + "<div id='panel3CategoryName" + catArray[w][0] + "' class='panel_3_category_name_" + catArray[w][0] + replaceImgMouseClass + " panel_3_category_name " + baseCatStyle + "'" + catNameTagLink + " tabindex='0' title=\"" + catArray[w][1] + "\">" + catArray[w][1] + daProdNumWrite + "<\/div>" + baseCatNameHTMLEnd;
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
											catBigImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel3CategoryBigImgDivShell" + catArray[w][0] + "' class='panel_3_category_big_img_div_shell panel_3_category_big_img_div_shell_" + catArray[w][0] + "' onclick='panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\");panel3CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\");panel3CatImgClick(" + catArray[w][0] + ");}'";
											if (hoverState==1) {
												catBigImgTagRender += " onmouseover='panel3CatMouseOver(" + w + ");panel3CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel3CatMouseOver(" + w + ");panel3CatImgReplace(1," + catArray[w][0] + ");'";
											}
											catBigImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel3CategoryBigImgDivBack" + catArray[w][0] + "' class='panel_3_category_big_img_div_back panel_3_category_big_img_div_back_off panel_3_category_big_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][3] + "\");'><\/div><div id='panel3CategoryBigImgDivOver" + catArray[w][0] + "' class='panel_3_category_big_img_div_over panel_3_category_big_img_div_over_" + catArray[w][0] + "'";
											if (hoverState==1) {
												catBigImgTagRender += " onmouseout='panel3CatMouseOut(" + w + ");panel3CatImgReplace(2," + catArray[w][0] + ");' onblur='panel3CatMouseOut(" + w + ");panel3CatImgReplace(2," + catArray[w][0] + ");'";
											}
											catBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
											categoryHTMLTest = baseCatBigImgHTMLStart + catBigImgTagRender + baseCatBigImgHTMLEnd;
										}
										else {
											categoryHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel3CategoryBigImg" + catArray[w][0] + "' class='panel_3_category_big_img' src='" + clientImgBase + catArray[w][3] + "'>" + baseCatBigImgHTMLEnd;
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
											catSmImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel3CategorySmImgDivShell" + catArray[w][0] + "' class='panel_3_category_sm_img_div_shell panel_3_category_sm_img_div_shell_" + catArray[w][0] + "' onclick='panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\");panel3CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\");panel3CatImgClick(" + catArray[w][0] + ");}'";
											if (hoverState==1) {
												catSmImgTagRender += " onmouseover='panel3CatMouseOver(" + w + ");panel3CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel3CatMouseOver(" + w + ");panel3CatImgReplace(1," + catArray[w][0] + ");'";
											}
											catSmImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel3CategorySmImgDivBack" + catArray[w][0] + "' class='panel_3_category_sm_img_div_back panel_3_category_sm_img_div_back_off panel_3_category_sm_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][4] + "\");'><\/div><div id='panel3CategorySmImgDivOver" + catArray[w][0] + "' class='panel_3_category_sm_img_div_over panel_3_category_sm_img_div_over_" + catArray[w][0] + "'";
											if (hoverState==1) {
												catSmImgTagRender += " onmouseout='panel3CatMouseOut(" + w + ");panel3CatImgReplace(2," + catArray[w][0] + ");' onblur='panel3CatMouseOut(" + w + ");panel3CatImgReplace(2," + catArray[w][0] + ");'";
											}
											catSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
											categoryHTMLTest = baseCatSmImgHTMLStart + catSmImgTagRender + baseCatSmImgHTMLEnd;
										}
										else {
											categoryHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel3CategorySmImg" + catArray[w][0] + "' class='panel_3_category_sm_img' src='" + clientImgBase + catArray[w][4] + "'>" + baseCatSmImgHTMLEnd;
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
											var replaceImgMouseOver = "panel3CatImgReplace(1," + catArray[w][0] + ");";
											var replaceImgMouseOut = "panel3CatImgReplace(2," + catArray[w][0] + ");";
											var replaceImgMouseClass = " img_replace_active";
											var replaceImgCall = "panel3CatImgClick(" + catArray[w][0] + ");";
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
											catAllTagLink += " style='cursor:pointer;' onclick='panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\");" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\");" + replaceImgCall + "}'";
											if (hoverState==1) {
												catAllTagLink += " onmouseover='panel3CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel3CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel3CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel3CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
											}
										}
										categoryHTMLTest = baseCatAllHTMLStart + "<div id='panel3CategoryName" + catArray[w][0] + "All' class='panel_3_category_name_all_" + catArray[w][0] + replaceImgMouseClass + " panel_3_category_name_all" + replaceImgMouseClass + " panel_3_category_name_all_off'" + catAllTagLink + " tabindex='0' title=\"" + catAllValueVal + "\">" + catAllValueVal + "<\/div>" + baseCatAllHTMLEnd;
									}
									prodListHTML += "<span class='panel_3_prodlist_catshell panel_3_prodlist_catshell_" + catArray[w][0] + " panel_3_prodlist_catshell_off'>" + categoryHTMLTest + "<\/span>";
									for (x=0; x<prodFilterArray.length; x++) {
										if (prodFilterArray[x][8] == catArray[w][0]) {
											var productHTMLTest = autotextIt(p3TemplateSet.panel3ProductDiv,"panel3Product");
											var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
											if (prodDiscTagStart != -1) {
												var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
												var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
												var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
												var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
												var prodDiscWrite = "";
												var discVal = prodFilterArray[x][6];
												if (discVal != 1) {
													prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel3Product_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
												}
												productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
											}
											var prodNameTagStart = productHTMLTest.indexOf("<!--PRODNAME");
											if (prodNameTagStart != -1) {
												var prodNameTagEnd = productHTMLTest.indexOf(">",prodNameTagStart);
												var prodNameTagStrip = productHTMLTest.substring(prodNameTagStart,(prodNameTagEnd+1));
												var baseProdNameHTMLStart = productHTMLTest.substr(0,prodNameTagStart);
												var baseProdNameHTMLEnd = productHTMLTest.substr((prodNameTagEnd+1));
												var prodNameTagLink = " style='cursor:pointer;' onclick='panel3ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");}'";
												if (hoverState==1) {
													prodNameTagLink += " onmouseover='panel3ProdMouseOver(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");' onfocus='panel3ProdMouseOver(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");' onmouseout='panel3ProdMouseOut(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");' onblur='panel3ProdMouseOut(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");'";
												}
												if (prodFilterArray[x][9] == "1") {
													var baseProductStyle = " panel_3_product_name_on";
												}
												else {
													var baseProductStyle = " panel_3_product_name_off";
												}
												var descTest = prodNameTagStrip.indexOf(" DESC");
												if (descTest != -1) {
													var descVal = "<span class='panel_3_product_name_desc'>" + prodFilterArray[x][3] + "<\/span>";
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
												productHTMLTest = baseProdNameHTMLStart + "<div id='panel3ProductName" + prodFilterArray[x][0] + "' class='panel_3_product_name" + baseProductStyle + "'" + prodNameTagLink + " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">" + prodNameItalicVar + "<span class='panel_3_product_name_name'>" + prodFilterArray[x][2] + "<\/span>" + descVal + "<\/div>" + baseProdNameHTMLEnd;
											}
											var prodDescTagStart = productHTMLTest.indexOf("<!--PRODDESC");
											if (prodDescTagStart != -1) {
												var prodDescTagEnd = productHTMLTest.indexOf(">",prodDescTagStart);
												var prodDescTagStrip = productHTMLTest.substring(prodDescTagStart,(prodDescTagEnd+1));
												var baseProdDescHTMLStart = productHTMLTest.substr(0,prodDescTagStart);
												var baseProdDescHTMLEnd = productHTMLTest.substr((prodDescTagEnd+1));
												productHTMLTest = baseProdDescHTMLStart + "<div id='panel3ProductDesc" + prodFilterArray[x][0] + "' class='panel_3_product_desc'>" + prodFilterArray[x][3] + "<\/div>" + baseProdDescHTMLEnd;
											}
											var prodCatTagStart = productHTMLTest.indexOf("<!--PRODCAT");
											if (prodCatTagStart != -1) {
												var prodCatTagEnd = productHTMLTest.indexOf(">",prodCatTagStart);
												var prodCatTagStrip = productHTMLTest.substring(prodCatTagStart,(prodCatTagEnd+1));
												var baseProdCatHTMLStart = productHTMLTest.substr(0,prodCatTagStart);
												var baseProdCatHTMLEnd = productHTMLTest.substr((prodCatTagEnd+1));
												productHTMLTest = baseProdCatHTMLStart + "<div id='panel3ProductCat" + prodFilterArray[x][0] + "' class='panel_3_product_cat'>" + prodFilterArray[x][16] + "<\/div>" + baseProdCatHTMLEnd;
											}
											var prodBigImgTagStart = productHTMLTest.indexOf("<!--PRODBIGIMG");
											if (prodBigImgTagStart != -1) {
												var prodBigImgTagEnd = productHTMLTest.indexOf(">",prodBigImgTagStart);
												var prodBigImgTagStrip = productHTMLTest.substring(prodBigImgTagStart,(prodBigImgTagEnd+1));
												var baseProdBigImgHTMLStart = productHTMLTest.substr(0,prodBigImgTagStart);
												var baseProdBigImgHTMLEnd = productHTMLTest.substr((prodBigImgTagEnd+1));
												var prodBigImgTagLinkStart = "<a href='' onclick='panel3ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");return false;}'";
												if (hoverState==1) {
													prodBigImgTagLinkStart += " onmouseover='panel3ProdMouseOver(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");' onfocus='panel3ProdMouseOver(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");' onmouseout='panel3ProdMouseOut(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");' onblur='panel3ProdMouseOut(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");'";
												}
												prodBigImgTagLinkStart += " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">";
												prodBigImgTagLinkEnd = "<\/a>";
												productHTMLTest = baseProdBigImgHTMLStart + prodBigImgTagLinkStart + "<img title=\"" + prodFilterArray[x][2] + "\" alt=\"" + prodFilterArray[x][2] + "\" id='panel3ProductBigImg" + prodFilterArray[x][0] + "' class='panel_3_product_big_img' src='" + clientImgBase + prodFilterArray[x][4] + "'>" + prodBigImgTagLinkEnd + baseProdBigImgHTMLEnd;
											}
											var prodSmImgTagStart = productHTMLTest.indexOf("<!--PRODSMIMG");
											if (prodSmImgTagStart != -1) {
												var prodSmImgTagEnd = productHTMLTest.indexOf(">",prodSmImgTagStart);
												var prodSmImgTagStrip = productHTMLTest.substring(prodSmImgTagStart,(prodSmImgTagEnd+1));
												var baseProdSmImgHTMLStart = productHTMLTest.substr(0,prodSmImgTagStart);
												var baseProdSmImgHTMLEnd = productHTMLTest.substr((prodSmImgTagEnd+1));
												var prodSmImgTagLinkStart = "<a href='' onclick='panel3ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");return false;}'";
												if (hoverState==1) {
													prodSmImgTagLinkStart += " onmouseover='panel3ProdMouseOver(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");' onfocus='panel3ProdMouseOver(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");' onmouseout='panel3ProdMouseOut(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");' onblur='panel3ProdMouseOut(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");'";
												}
												prodSmImgTagLinkStart += " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">";
												prodSmImgTagLinkEnd = "<\/a>";
												productHTMLTest = baseProdSmImgHTMLStart + prodSmImgTagLinkStart + "<img title=\"" + prodFilterArray[x][2] + "\" alt=\"" + prodFilterArray[x][2] + "\" id='panel3ProductSmImg" + prodFilterArray[x][0] + "' class='panel_3_product_sm_img' src='" + clientImgBase + prodFilterArray[x][5] + "'>" + prodSmImgTagLinkEnd + baseProdSmImgHTMLEnd;
											}
											prodListHTML += "<span class='panel_3_prodlist_prodshell panel_3_prodlist_prodshell_" + prodFilterArray[x][0] + " panel_3_prodlist_prodshell_off'>" + productHTMLTest + "<\/span>";
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
											var categoryHTMLTest = autotextIt(p3TemplateSet.panel3CategoryDiv,"panel3Category");
											var catBadgeTagStart = categoryHTMLTest.indexOf("<!--BADGE");
											if (catBadgeTagStart != -1) {
												var catBadgeTagEnd = categoryHTMLTest.indexOf(">",catBadgeTagStart);
												var catBadgeTagStrip = categoryHTMLTest.substring(catBadgeTagStart,(catBadgeTagEnd+1));
												var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBadgeTagStart);
												var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBadgeTagEnd+1));
												categoryHTMLTest = baseCatBigImgHTMLStart + "<span id='panel3ProdlistCatBadge" + catArray[w][0] + "' class='panel_3_prodlist_cat_badge' style='display:none;'>0<\/span>" + baseCatBigImgHTMLEnd;
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
													var replaceImgMouseOver = "panel3CatImgReplace(1," + catArray[w][0] + ");";
													var replaceImgMouseOut = "panel3CatImgReplace(2," + catArray[w][0] + ");";
													var replaceImgMouseClass = " img_replace_active";
													var replaceImgCall = "panel3CatImgClick(" + catArray[w][0] + ");";
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
													catNameTagLink += " style='cursor:pointer;' onclick='panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\");" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\");" + replaceImgCall + "}'";
													if (hoverState==1) {
														catNameTagLink += " onmouseover='panel3CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel3CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel3CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel3CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
													}
													var thisCatIsOn = 1;
													for (q=0; q<prodFilterArray.length; q++) {
														if (prodFilterArray[q][8] == catArray[w][0] && prodFilterArray[q][9] == "0") {
															thisCatIsOn = 0;
															break;
														}
													}
													if (thisCatIsOn == 1) {
														var baseCatStyle = " panel_3_category_name_on";
														catArray[w][6] = 1;
														window["panel1CategoryNameVar" + catArray[w][0]] = 1;
													}
													else {
														var baseCatStyle = " panel_3_category_name_off";
													}
												}
												categoryHTMLTest = baseCatNameHTMLStart + "<div id='panel3CategoryName" + catArray[w][0] + "' class='panel_3_category_name_" + catArray[w][0] + replaceImgMouseClass + " panel_3_category_name' tabindex='0' title=\"" + catArray[w][1] + "\">" + catArray[w][1] + daProdNumWrite + "<\/div>" + baseCatNameHTMLEnd;
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
													catBigImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel3CategoryBigImgDivShell" + catArray[w][0] + "' class='panel_3_category_big_img_div_shell panel_3_category_big_img_div_shell_" + catArray[w][0] + "' onclick='panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\");panel3CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\");panel3CatImgClick(" + catArray[w][0] + ");}'";
													if (hoverState==1) {
														catBigImgTagRender += " onmouseover='panel3CatMouseOver(" + w + ");panel3CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel3CatMouseOver(" + w + ");panel3CatImgReplace(1," + catArray[w][0] + ");'";
													}
													catBigImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel3CategoryBigImgDivBack" + catArray[w][0] + "' class='panel_3_category_big_img_div_back panel_3_category_big_img_div_back_off panel_3_category_big_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][3] + "\");'><\/div><div id='panel3CategoryBigImgDivOver" + catArray[w][0] + "' class='panel_3_category_big_img_div_over panel_3_category_big_img_div_over_" + catArray[w][0] + "'";
													if (hoverState==1) {
														catBigImgTagRender += " onmouseout='panel3CatMouseOut(" + w + ");panel3CatImgReplace(2," + catArray[w][0] + ");' onblur='panel3CatMouseOut(" + w + ");panel3CatImgReplace(2," + catArray[w][0] + ");'";
													}
													catBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
													categoryHTMLTest = baseCatBigImgHTMLStart + catBigImgTagRender + baseCatBigImgHTMLEnd;
												}
												else {
													categoryHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel3CategoryBigImg" + catArray[w][0] + "' class='panel_3_category_big_img' src='" + clientImgBase + catArray[w][3] + "'>" + baseCatBigImgHTMLEnd;
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
													catSmImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel3CategorySmImgDivShell" + catArray[w][0] + "' class='panel_3_category_sm_img_div_shell panel_3_category_sm_img_div_shell_" + catArray[w][0] + "' onclick='panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\");panel3CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\");panel3CatImgClick(" + catArray[w][0] + ");}'";
													if (hoverState==1) {
														catSmImgTagRender += " onmouseover='panel3CatMouseOver(" + w + ");panel3CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel3CatMouseOver(" + w + ");panel3CatImgReplace(1," + catArray[w][0] + ");'";
													}
													catSmImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel3CategorySmImgDivBack" + catArray[w][0] + "' class='panel_3_category_sm_img_div_back panel_3_category_sm_img_div_back_off panel_3_category_sm_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][4] + "\");'><\/div><div id='panel3CategorySmImgDivOver" + catArray[w][0] + "' class='panel_3_category_sm_img_div_over panel_3_category_sm_img_div_over_" + catArray[w][0] + "'";
													if (hoverState==1) {
														catSmImgTagRender += " onmouseout='panel3CatMouseOut(" + w + ");panel3CatImgReplace(2," + catArray[w][0] + ");' onblur='panel3CatMouseOut(" + w + ");panel3CatImgReplace(2," + catArray[w][0] + ");'";
													}
													catSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
													categoryHTMLTest = baseCatSmImgHTMLStart + catSmImgTagRender + baseCatSmImgHTMLEnd;
												}
												else {
													categoryHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel3CategorySmImg" + catArray[w][0] + "' class='panel_3_category_sm_img' src='" + clientImgBase + catArray[w][4] + "'>" + baseCatSmImgHTMLEnd;
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
													var replaceImgMouseOver = "panel3CatImgReplace(1," + catArray[w][0] + ");";
													var replaceImgMouseOut = "panel3CatImgReplace(2," + catArray[w][0] + ");";
													var replaceImgMouseClass = " img_replace_active";
													var replaceImgCall = "panel3CatImgClick(" + catArray[w][0] + ");";
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
													catAllTagLink += " style='cursor:pointer;' onclick='panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\");" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\");" + replaceImgCall + "}'";
													if (hoverState==1) {
														catAllTagLink += " onmouseover='panel3CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel3CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel3CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel3CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
													}
												}
												categoryHTMLTest = baseCatAllHTMLStart + "<div id='panel3CategoryName" + catArray[w][0] + "All' class='panel_3_category_name_all_" + catArray[w][0] + replaceImgMouseClass + " panel_3_category_name_all" + replaceImgMouseClass + " panel_3_category_name_all_off'" + catAllTagLink + " tabindex='0' title=\"" + catAllValueVal + "\">" + catAllValueVal + "<\/div>" + baseCatAllHTMLEnd;
											}
											prodListHTML += "<span class='panel_3_prodlist_catshell panel_3_prodlist_catshell_" + catArray[w][0] + " panel_3_prodlist_catshell_off'>" + categoryHTMLTest + "<\/span>";
										}
										if (panel3ProductHideprod == 1 && prodFilterArray[x][0] == 0) {
											var writeDisProdRow = 0;
										}
										else {
											var writeDisProdRow = 1;
										}
										if (writeDisProdRow == 1) {
											var productHTMLTest = autotextIt(p3TemplateSet.panel3ProductDiv,"panel3Product");
											var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
											if (prodDiscTagStart != -1) {
												var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
												var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
												var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
												var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
												var prodDiscWrite = "";
												var discVal = prodFilterArray[x][6];
												if (discVal != 1) {
													prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel3Product_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
												}
												productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
											}
											var prodNameTagStart = productHTMLTest.indexOf("<!--PRODNAME");
											if (prodNameTagStart != -1) {
												var prodNameTagEnd = productHTMLTest.indexOf(">",prodNameTagStart);
												var prodNameTagStrip = productHTMLTest.substring(prodNameTagStart,(prodNameTagEnd+1));
												var baseProdNameHTMLStart = productHTMLTest.substr(0,prodNameTagStart);
												var baseProdNameHTMLEnd = productHTMLTest.substr((prodNameTagEnd+1));
												var prodNameTagLink = " style='cursor:pointer;' onclick='panel3ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");}'";
												if (hoverState==1) {
													prodNameTagLink += " onmouseover='panel3ProdMouseOver(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");' onfocus='panel3ProdMouseOver(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");' onmouseout='panel3ProdMouseOut(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");' onblur='panel3ProdMouseOut(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");'";
												}
												if (prodFilterArray[x][9] == "1") {
													var baseProductStyle = " panel_3_product_name_on";
												}
												else {
													var baseProductStyle = " panel_3_product_name_off";
												}
												var descTest = prodNameTagStrip.indexOf(" DESC");
												if (descTest != -1) {
													var descVal = "<span class='panel_3_product_name_desc'>" + prodFilterArray[x][3] + "<\/span>";
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
												productHTMLTest = baseProdNameHTMLStart + "<div id='panel3ProductName" + prodFilterArray[x][0] + "' class='panel_3_product_name" + baseProductStyle + "'" + prodNameTagLink + " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">" + prodNameItalicVar + "<span class='panel_3_product_name_name'>" + prodFilterArray[x][2] + "<\/span>" + descVal + "<\/div>" + baseProdNameHTMLEnd;
											}
											var prodDescTagStart = productHTMLTest.indexOf("<!--PRODDESC");
											if (prodDescTagStart != -1) {
												var prodDescTagEnd = productHTMLTest.indexOf(">",prodDescTagStart);
												var prodDescTagStrip = productHTMLTest.substring(prodDescTagStart,(prodDescTagEnd+1));
												var baseProdDescHTMLStart = productHTMLTest.substr(0,prodDescTagStart);
												var baseProdDescHTMLEnd = productHTMLTest.substr((prodDescTagEnd+1));
												productHTMLTest = baseProdDescHTMLStart + "<div id='panel3ProductDesc" + prodFilterArray[x][0] + "' class='panel_3_product_desc'>" + prodFilterArray[x][3] + "<\/div>" + baseProdDescHTMLEnd;
											}
											var prodCatTagStart = productHTMLTest.indexOf("<!--PRODCAT");
											if (prodCatTagStart != -1) {
												var prodCatTagEnd = productHTMLTest.indexOf(">",prodCatTagStart);
												var prodCatTagStrip = productHTMLTest.substring(prodCatTagStart,(prodCatTagEnd+1));
												var baseProdCatHTMLStart = productHTMLTest.substr(0,prodCatTagStart);
												var baseProdCatHTMLEnd = productHTMLTest.substr((prodCatTagEnd+1));
												productHTMLTest = baseProdCatHTMLStart + "<div id='panel3ProductCat" + prodFilterArray[x][0] + "' class='panel_3_product_cat'>" + prodFilterArray[x][16] + "<\/div>" + baseProdCatHTMLEnd;
											}
											var prodBigImgTagStart = productHTMLTest.indexOf("<!--PRODBIGIMG");
											if (prodBigImgTagStart != -1) {
												var prodBigImgTagEnd = productHTMLTest.indexOf(">",prodBigImgTagStart);
												var prodBigImgTagStrip = productHTMLTest.substring(prodBigImgTagStart,(prodBigImgTagEnd+1));
												var baseProdBigImgHTMLStart = productHTMLTest.substr(0,prodBigImgTagStart);
												var baseProdBigImgHTMLEnd = productHTMLTest.substr((prodBigImgTagEnd+1));
												var prodBigImgTagLinkStart = "<a href='' onclick='panel3ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");return false;}'";
												if (hoverState==1) {
													prodBigImgTagLinkStart += " onmouseover='panel3ProdMouseOver(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");' onfocus='panel3ProdMouseOver(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");' onmouseout='panel3ProdMouseOut(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");' onblur='panel3ProdMouseOut(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");'";
												}
												prodBigImgTagLinkStart += " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">";
												prodBigImgTagLinkEnd = "<\/a>";
												productHTMLTest = baseProdBigImgHTMLStart + prodBigImgTagLinkStart + "<img title=\"" + prodFilterArray[x][2] + "\" alt=\"" + prodFilterArray[x][2] + "\" id='panel3ProductBigImg" + prodFilterArray[x][0] + "' class='panel_3_product_big_img' src='" + clientImgBase + prodFilterArray[x][4] + "'>" + prodBigImgTagLinkEnd + baseProdBigImgHTMLEnd;
											}
											var prodSmImgTagStart = productHTMLTest.indexOf("<!--PRODSMIMG");
											if (prodSmImgTagStart != -1) {
												var prodSmImgTagEnd = productHTMLTest.indexOf(">",prodSmImgTagStart);
												var prodSmImgTagStrip = productHTMLTest.substring(prodSmImgTagStart,(prodSmImgTagEnd+1));
												var baseProdSmImgHTMLStart = productHTMLTest.substr(0,prodSmImgTagStart);
												var baseProdSmImgHTMLEnd = productHTMLTest.substr((prodSmImgTagEnd+1));
												var prodSmImgTagLinkStart = "<a href='' onclick='panel3ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");return false;}'";
												if (hoverState==1) {
													prodSmImgTagLinkStart += " onmouseover='panel3ProdMouseOver(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");' onfocus='panel3ProdMouseOver(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");' onmouseout='panel3ProdMouseOut(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");' onblur='panel3ProdMouseOut(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");'";
												}
												prodSmImgTagLinkStart += " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">";
												prodSmImgTagLinkEnd = "<\/a>";
												productHTMLTest = baseProdSmImgHTMLStart + prodSmImgTagLinkStart + "<img title=\"" + prodFilterArray[x][2] + "\" alt=\"" + prodFilterArray[x][2] + "\" id='panel3ProductSmImg" + prodFilterArray[x][0] + "' class='panel_3_product_sm_img' src='" + clientImgBase + prodFilterArray[x][5] + "'>" + prodSmImgTagLinkEnd + baseProdSmImgHTMLEnd;
											}
											prodListHTML += "<span class='panel_3_prodlist_prodshell panel_3_prodlist_prodshell_" + prodFilterArray[x][0] + " panel_3_prodlist_prodshell_off'>" + productHTMLTest + "<\/span>";
										}
									}
								}
							}
						}
					}
					else if (panel3ProductSort == "PRODUCT") {
						for (x=0; x<prodFilterArray.length; x++) {
							if (panel3ProductHideprod == 1 && prodFilterArray[x][0] == 0) {
								var writeDisProdRow = 0;
							}
							else {
								var writeDisProdRow = 1;
							}
							if (writeDisProdRow == 1) {
								var productHTMLTest = autotextIt(p3TemplateSet.panel3ProductDiv,"panel3Product");
								var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
								if (prodDiscTagStart != -1) {
									var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
									var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
									var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
									var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
									var prodDiscWrite = "";
									var discVal = prodFilterArray[x][6];
									if (discVal != 1) {
										prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel3Product_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
									}
									productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
								}
								var prodNameTagStart = productHTMLTest.indexOf("<!--PRODNAME");
								if (prodNameTagStart != -1) {
									var prodNameTagEnd = productHTMLTest.indexOf(">",prodNameTagStart);
									var prodNameTagStrip = productHTMLTest.substring(prodNameTagStart,(prodNameTagEnd+1));
									var baseProdNameHTMLStart = productHTMLTest.substr(0,prodNameTagStart);
									var baseProdNameHTMLEnd = productHTMLTest.substr((prodNameTagEnd+1));
									var prodNameTagLink = " style='cursor:pointer;' onclick='panel3ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");}'";
									if (hoverState==1) {
										prodNameTagLink += " onmouseover='panel3ProdMouseOver(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");' onfocus='panel3ProdMouseOver(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");' onmouseout='panel3ProdMouseOut(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");' onblur='panel3ProdMouseOut(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");'";
									}
									if (prodFilterArray[x][9] == "1") {
										var baseProductStyle = " panel_3_product_name_on";
									}
									else {
										var baseProductStyle = " panel_3_product_name_off";
									}
									var descTest = prodNameTagStrip.indexOf(" DESC");
									if (descTest != -1) {
										var descVal = "<span class='panel_3_product_name_desc'>" + prodFilterArray[x][3] + "<\/span>";
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
									productHTMLTest = baseProdNameHTMLStart + "<div id='panel3ProductName" + prodFilterArray[x][0] + "' class='panel_3_product_name" + baseProductStyle + "'" + prodNameTagLink + " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">" + prodNameItalicVar + "<span class='panel_3_product_name_name'>" + prodFilterArray[x][2] + "<\/span>" + descVal + "<\/div>" + baseProdNameHTMLEnd;
								}
								var prodDescTagStart = productHTMLTest.indexOf("<!--PRODDESC");
								if (prodDescTagStart != -1) {
									var prodDescTagEnd = productHTMLTest.indexOf(">",prodDescTagStart);
									var prodDescTagStrip = productHTMLTest.substring(prodDescTagStart,(prodDescTagEnd+1));
									var baseProdDescHTMLStart = productHTMLTest.substr(0,prodDescTagStart);
									var baseProdDescHTMLEnd = productHTMLTest.substr((prodDescTagEnd+1));
									productHTMLTest = baseProdDescHTMLStart + "<div id='panel3ProductDesc" + prodFilterArray[x][0] + "' class='panel_3_product_desc'>" + prodFilterArray[x][3] + "<\/div>" + baseProdDescHTMLEnd;
								}
								var prodCatTagStart = productHTMLTest.indexOf("<!--PRODCAT");
								if (prodCatTagStart != -1) {
									var prodCatTagEnd = productHTMLTest.indexOf(">",prodCatTagStart);
									var prodCatTagStrip = productHTMLTest.substring(prodCatTagStart,(prodCatTagEnd+1));
									var baseProdCatHTMLStart = productHTMLTest.substr(0,prodCatTagStart);
									var baseProdCatHTMLEnd = productHTMLTest.substr((prodCatTagEnd+1));
									productHTMLTest = baseProdCatHTMLStart + "<div id='panel3ProductCat" + prodFilterArray[x][0] + "' class='panel_3_product_cat'>" + prodFilterArray[x][16] + "<\/div>" + baseProdCatHTMLEnd;
								}
								var prodBigImgTagStart = productHTMLTest.indexOf("<!--PRODBIGIMG");
								if (prodBigImgTagStart != -1) {
									var prodBigImgTagEnd = productHTMLTest.indexOf(">",prodBigImgTagStart);
									var prodBigImgTagStrip = productHTMLTest.substring(prodBigImgTagStart,(prodBigImgTagEnd+1));
									var baseProdBigImgHTMLStart = productHTMLTest.substr(0,prodBigImgTagStart);
									var baseProdBigImgHTMLEnd = productHTMLTest.substr((prodBigImgTagEnd+1));
									var prodBigImgTagLinkStart = "<a href='' onclick='panel3ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");return false;}'";
									if (hoverState==1) {
										prodBigImgTagLinkStart += " onmouseover='panel3ProdMouseOver(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");' onfocus='panel3ProdMouseOver(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");' onmouseout='panel3ProdMouseOut(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");' onblur='panel3ProdMouseOut(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");'";
									}
									prodBigImgTagLinkStart += " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">";
									prodBigImgTagLinkEnd = "<\/a>";
									productHTMLTest = baseProdBigImgHTMLStart + prodBigImgTagLinkStart + "<img title=\"" + prodFilterArray[x][2] + "\" alt=\"" + prodFilterArray[x][2] + "\" id='panel3ProductBigImg" + prodFilterArray[x][0] + "' class='panel_3_product_big_img' src='" + clientImgBase + prodFilterArray[x][4] + "'>" + prodBigImgTagLinkEnd + baseProdBigImgHTMLEnd;
								}
								var prodSmImgTagStart = productHTMLTest.indexOf("<!--PRODSMIMG");
								if (prodSmImgTagStart != -1) {
									var prodSmImgTagEnd = productHTMLTest.indexOf(">",prodSmImgTagStart);
									var prodSmImgTagStrip = productHTMLTest.substring(prodSmImgTagStart,(prodSmImgTagEnd+1));
									var baseProdSmImgHTMLStart = productHTMLTest.substr(0,prodSmImgTagStart);
									var baseProdSmImgHTMLEnd = productHTMLTest.substr((prodSmImgTagEnd+1));
									var prodSmImgTagLinkStart = "<a href='' onclick='panel3ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");return false;}'";
									if (hoverState==1) {
										prodSmImgTagLinkStart += " onmouseover='panel3ProdMouseOver(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");' onfocus='panel3ProdMouseOver(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");' onmouseout='panel3ProdMouseOut(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");' onblur='panel3ProdMouseOut(\"panel3ProductName" + prodFilterArray[x][0] + "\", \"panel_3_product_name\", "+x+");'";
									}
									prodSmImgTagLinkStart += " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">";
									prodSmImgTagLinkEnd = "<\/a>";
									productHTMLTest = baseProdSmImgHTMLStart + prodSmImgTagLinkStart + "<img title=\"" + prodFilterArray[x][2] + "\" alt=\"" + prodFilterArray[x][2] + "\" id='panel3ProductSmImg" + prodFilterArray[x][0] + "' class='panel_3_product_sm_img' src='" + clientImgBase + prodFilterArray[x][5] + "'>" + prodSmImgTagLinkEnd + baseProdSmImgHTMLEnd;
								}
								prodListHTML += "<span class='panel_3_prodlist_prodshell panel_3_prodlist_prodshell_" + prodFilterArray[x][0] + " panel_3_prodlist_prodshell_off'>" + productHTMLTest + "<\/span>";
							}
						}
					}
					else if (panel3ProductSort == "LABEL") {
						for (l=0; l<labelArray.length; l++) {
							var labelHTMLTest = autotextIt(p3TemplateSet.panel3LabelDiv,"panel3Label");
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
									labelNameTagLink += " style='cursor:pointer;' onclick='panel3SelectLabel(" + l + ", \"panel3LabelName" + labelArray[l][0] + "\", \"panel_3_label_name\",1);' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3SelectLabel(" + l + ", \"panel3LabelName" + labelArray[l][0] + "\", \"panel_3_label_name\",1);}'";
									if (hoverState==1) {
										labelNameTagLink += " onmouseover='panel3LabelMouseOver(" + l + ");' onfocus='panel3LabelMouseOver(" + l + ");' onmouseout='panel3LabelMouseOut(" + l + ");' onblur='panel3LabelMouseOut(" + l + ");'";
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
										var baseLabelStyle = " panel_3_label_name_on";
										labelArray[l][3] = 1;
									}
									else {
										var baseLabelStyle = " panel_3_label_name_off";
									}
								}
								labelHTMLTest = baseLabelNameHTMLStart + "<div id='panel3LabelName" + labelArray[l][0] + "' class='panel_3_label_name_" + labelArray[l][0] + " panel_3_label_name " + baseLabelStyle + "'" + labelNameTagLink + " tabindex='0' title=\"" + labelArray[l][1] + "\">" + labelArray[l][1] + daProdNumWrite + "<\/div>" + baseLabelNameHTMLEnd;
							}
							prodListHTML += "<span class='panel_3_prodlist_labelshell panel_3_prodlist_labelshell_" + labelArray[l][0] + " panel_3_prodlist_labelshell_off'>" + labelHTMLTest + "<\/span>";
						}
					}
					else if (panel3ProductSort == "CATLIST") {
						if (panel3ProductCatID != 0) {
							for (w=0; w<catArray.length; w++) {
								if (catArray[w][0] == panel3ProductCatID) {
									var categoryHTMLTest = autotextIt(p3TemplateSet.panel3CategoryDiv,"panel3Category");
									var catBadgeTagStart = categoryHTMLTest.indexOf("<!--BADGE");
									if (catBadgeTagStart != -1) {
										var catBadgeTagEnd = categoryHTMLTest.indexOf(">",catBadgeTagStart);
										var catBadgeTagStrip = categoryHTMLTest.substring(catBadgeTagStart,(catBadgeTagEnd+1));
										var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBadgeTagStart);
										var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBadgeTagEnd+1));
										categoryHTMLTest = baseCatBigImgHTMLStart + "<span id='panel3ProdlistCatBadge" + catArray[w][0] + "' class='panel_3_prodlist_cat_badge' style='display:none;'>0<\/span>" + baseCatBigImgHTMLEnd;
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
											var replaceImgMouseOver = "panel3CatImgReplace(1," + catArray[w][0] + ");";
											var replaceImgMouseOut = "panel3CatImgReplace(2," + catArray[w][0] + ");";
											var replaceImgMouseClass = " img_replace_active";
											var replaceImgCall = "panel3CatImgClick(" + catArray[w][0] + ");";
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
											catNameTagLink += " style='cursor:pointer;' onclick='panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\",1);" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\",1);" + replaceImgCall + "}'";
											if (hoverState==1) {
												catNameTagLink += " onmouseover='panel3CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel3CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel3CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel3CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
											}
											var thisCatIsOn = 1;
											for (q=0; q<prodFilterArray.length; q++) {
												if (prodFilterArray[q][8] == catArray[w][0] && prodFilterArray[q][9] == "0") {
													thisCatIsOn = 0;
													break;
												}
											}
											if (thisCatIsOn == 1) {
												var baseCatStyle = " panel_3_category_name_on";
												catArray[w][6] = 1;
												window["panel1CategoryNameVar" + catArray[w][0]] = 1;
											}
											else {
												var baseCatStyle = " panel_3_category_name_off";
											}
										}
										categoryHTMLTest = baseCatNameHTMLStart + "<div id='panel3CategoryName" + catArray[w][0] + "' class='panel_3_category_name_" + catArray[w][0] + replaceImgMouseClass + " panel_3_category_name " + baseCatStyle + "'" + catNameTagLink + " tabindex='0' title=\"" + catArray[w][1] + "\">" + catArray[w][1] + daProdNumWrite + "<\/div>" + baseCatNameHTMLEnd;
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
											catBigImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel3CategoryBigImgDivShell" + catArray[w][0] + "' class='panel_3_category_big_img_div_shell panel_3_category_big_img_div_shell_" + catArray[w][0] + "' onclick='panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\",1);panel3CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\",1);panel3CatImgClick(" + catArray[w][0] + ");}'";
											if (hoverState==1) {
												catBigImgTagRender += " onmouseover='panel3CatMouseOver(" + w + ");panel3CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel3CatMouseOver(" + w + ");panel3CatImgReplace(1," + catArray[w][0] + ");'";
											}
											catBigImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel3CategoryBigImgDivBack" + catArray[w][0] + "' class='panel_3_category_big_img_div_back panel_3_category_big_img_div_back_off panel_3_category_big_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][3] + "\");'><\/div><div id='panel3CategoryBigImgDivOver" + catArray[w][0] + "' class='panel_3_category_big_img_div_over panel_3_category_big_img_div_over_" + catArray[w][0] + "'";
											if (hoverState==1) {
												catBigImgTagRender += " onmouseout='panel3CatMouseOut(" + w + ");panel3CatImgReplace(2," + catArray[w][0] + ");' onblur='panel3CatMouseOut(" + w + ");panel3CatImgReplace(2," + catArray[w][0] + ");'";
											}
											catBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
											categoryHTMLTest = baseCatBigImgHTMLStart + catBigImgTagRender + baseCatBigImgHTMLEnd;
										}
										else {
											categoryHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel3CategoryBigImg" + catArray[w][0] + "' class='panel_3_category_big_img' src='" + clientImgBase + catArray[w][3] + "'>" + baseCatBigImgHTMLEnd;
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
											catSmImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel3CategorySmImgDivShell" + catArray[w][0] + "' class='panel_3_category_sm_img_div_shell panel_3_category_sm_img_div_shell_" + catArray[w][0] + "' onclick='panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\",1);panel3CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\",1);panel3CatImgClick(" + catArray[w][0] + ");}'";
											if (hoverState==1) {
												catSmImgTagRender += " onmouseover='panel3CatMouseOver(" + w + ");panel3CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel3CatMouseOver(" + w + ");panel3CatImgReplace(1," + catArray[w][0] + ");'";
											}
											catSmImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel3CategorySmImgDivBack" + catArray[w][0] + "' class='panel_3_category_sm_img_div_back panel_3_category_sm_img_div_back_off panel_3_category_sm_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][4] + "\");'><\/div><div id='panel3CategorySmImgDivOver" + catArray[w][0] + "' class='panel_3_category_sm_img_div_over panel_3_category_sm_img_div_over_" + catArray[w][0] + "'";
											if (hoverState==1) {
												catSmImgTagRender += " onmouseout='panel3CatMouseOut(" + w + ");panel3CatImgReplace(2," + catArray[w][0] + ");' onblur='panel3CatMouseOut(" + w + ");panel3CatImgReplace(2," + catArray[w][0] + ");'";
											}
											catSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
											categoryHTMLTest = baseCatSmImgHTMLStart + catSmImgTagRender + baseCatSmImgHTMLEnd;
										}
										else {
											categoryHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel3CategorySmImg" + catArray[w][0] + "' class='panel_3_category_sm_img' src='" + clientImgBase + catArray[w][4] + "'>" + baseCatSmImgHTMLEnd;
										}
									}
									prodListHTML += "<span class='panel_3_prodlist_catshell panel_3_prodlist_catshell_" + catArray[w][0] + " panel_3_prodlist_catshell_off'>" + categoryHTMLTest + "<\/span>";
									break;
								}
							}
						}
						else {
							for (w=0; w<catArray.length; w++) {
								var categoryHTMLTest = autotextIt(p3TemplateSet.panel3CategoryDiv,"panel3Category");
								var catBadgeTagStart = categoryHTMLTest.indexOf("<!--BADGE");
								if (catBadgeTagStart != -1) {
									var catBadgeTagEnd = categoryHTMLTest.indexOf(">",catBadgeTagStart);
									var catBadgeTagStrip = categoryHTMLTest.substring(catBadgeTagStart,(catBadgeTagEnd+1));
									var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBadgeTagStart);
									var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBadgeTagEnd+1));
									categoryHTMLTest = baseCatBigImgHTMLStart + "<span id='panel3ProdlistCatBadge" + catArray[w][0] + "' class='panel_3_prodlist_cat_badge' style='display:none;'>0<\/span>" + baseCatBigImgHTMLEnd;
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
										var replaceImgMouseOver = "panel3CatImgReplace(1," + catArray[w][0] + ");";
										var replaceImgMouseOut = "panel3CatImgReplace(2," + catArray[w][0] + ");";
										var replaceImgMouseClass = " img_replace_active";
										var replaceImgCall = "panel3CatImgClick(" + catArray[w][0] + ");";
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
										catNameTagLink += " style='cursor:pointer;' onclick='panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\",1);" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\",1);" + replaceImgCall + "}'";
										if (hoverState==1) {
											catNameTagLink += " onmouseover='panel3CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel3CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel3CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel3CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
										}
										var thisCatIsOn = 1;
										for (q=0; q<prodFilterArray.length; q++) {
											if (prodFilterArray[q][8] == catArray[w][0] && prodFilterArray[q][9] == "0") {
												thisCatIsOn = 0;
												break;
											}
										}
										if (thisCatIsOn == 1) {
											var baseCatStyle = " panel_3_category_name_on";
											catArray[w][6] = 1;
											window["panel1CategoryNameVar" + catArray[w][0]] = 1;
										}
										else {
											var baseCatStyle = " panel_3_category_name_off";
										}
									}
									categoryHTMLTest = baseCatNameHTMLStart + "<div id='panel3CategoryName" + catArray[w][0] + "' class='panel_3_category_name_" + catArray[w][0] + replaceImgMouseClass + " panel_3_category_name " + baseCatStyle + "'" + catNameTagLink + " tabindex='0' title=\"" + catArray[w][1] + "\">" + catArray[w][1] + daProdNumWrite + "<\/div>" + baseCatNameHTMLEnd;
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
										catBigImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel3CategoryBigImgDivShell" + catArray[w][0] + "' class='panel_3_category_big_img_div_shell panel_3_category_big_img_div_shell_" + catArray[w][0] + "' onclick='panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\",1);panel3CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\",1);panel3CatImgClick(" + catArray[w][0] + ");}'";
										if (hoverState==1) {
											catBigImgTagRender += " onmouseover='panel3CatMouseOver(" + w + ");panel3CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel3CatMouseOver(" + w + ");panel3CatImgReplace(1," + catArray[w][0] + ");'";
										}
										catBigImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel3CategoryBigImgDivBack" + catArray[w][0] + "' class='panel_3_category_big_img_div_back panel_3_category_big_img_div_back_off panel_3_category_big_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][3] + "\");'><\/div><div id='panel3CategoryBigImgDivOver" + catArray[w][0] + "' class='panel_3_category_big_img_div_over panel_3_category_big_img_div_over_" + catArray[w][0] + "'"
										if (hoverState==1) {
											catBigImgTagRender += " onmouseout='panel3CatMouseOut(" + w + ");panel3CatImgReplace(2," + catArray[w][0] + ");' onblur='panel3CatMouseOut(" + w + ");panel3CatImgReplace(2," + catArray[w][0] + ");'";
										}
										catBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
										categoryHTMLTest = baseCatBigImgHTMLStart + catBigImgTagRender + baseCatBigImgHTMLEnd;
									}
									else {
										categoryHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel3CategoryBigImg" + catArray[w][0] + "' class='panel_3_category_big_img' src='" + clientImgBase + catArray[w][3] + "'>" + baseCatBigImgHTMLEnd;
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
										catSmImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel3CategorySmImgDivShell" + catArray[w][0] + "' class='panel_3_category_sm_img_div_shell panel_3_category_sm_img_div_shell_" + catArray[w][0] + "' onclick='panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\",1);panel3CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\",1);panel3CatImgClick(" + catArray[w][0] + ");}'";
										if (hoverState==1) {
											catSmImgTagRender += " onmouseover='panel3CatMouseOver(" + w + ");panel3CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel3CatMouseOver(" + w + ");panel3CatImgReplace(1," + catArray[w][0] + ");'";
										}
										catSmImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel3CategorySmImgDivBack" + catArray[w][0] + "' class='panel_3_category_sm_img_div_back panel_3_category_sm_img_div_back_off panel_3_category_sm_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][3] + "\");'><\/div><div id='panel3CategorySmImgDivOver" + catArray[w][0] + "' class='panel_3_category_sm_img_div_over panel_3_category_sm_img_div_over_" + catArray[w][0] + "'";
										if (hoverState==1) {
											catSmImgTagRender += " onmouseout='panel3CatMouseOut(" + w + ");panel3CatImgReplace(2," + catArray[w][0] + ");' onblur='panel3CatMouseOut(" + w + ");panel3CatImgReplace(2," + catArray[w][0] + ");'";
										}
										catSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
										categoryHTMLTest = baseCatSmImgHTMLStart + catSmImgTagRender + baseCatSmImgHTMLEnd;
									}
									else {
										categoryHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel3CategorySmImg" + catArray[w][0] + "' class='panel_3_category_sm_img' src='" + clientImgBase + catArray[w][3] + "'>" + baseCatSmImgHTMLEnd;
									}
								}
								prodListHTML += "<span class='panel_3_prodlist_catshell panel_3_prodlist_catshell_" + catArray[w][0] + " panel_3_prodlist_catshell_off'>" + categoryHTMLTest + "<\/span>";
							}
						}
					}
					else if (panel3ProductSort == "FAMLIST") {
						for (f=0; f<famArray.length; f++) {
							var familyHTMLTest = autotextIt(p3TemplateSet.panel3FamilyDiv,"panel3Family");
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
									var replaceImgMouseOver = "panel3FamImgReplace(1," + famArray[f][0] + ");";
									var replaceImgMouseOut = "panel3FamImgReplace(2," + famArray[f][0] + ");";
									var replaceImgMouseClass = " img_replace_active";
									var replaceImgCall = "panel3FamImgClick(" + famArray[f][0] + ");";
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
									famNameTagLink += " style='cursor:pointer;' onclick='panel3FamCatProdOpen(" + f + ");" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3FamCatProdOpen(" + f + ");" + replaceImgCall + "}'";
									if (hoverState==1) {
										famNameTagLink += " onmouseover='panel3FamMouseOver(" + f + ");" + replaceImgMouseOver + "' onfocus='panel3FamMouseOver(" + f + ");" + replaceImgMouseOver + "' onmouseout='panel3FamMouseOut(" + f + ");" + replaceImgMouseOut + "' onblur='panel3FamMouseOut(" + f + ");" + replaceImgMouseOut + "'";
									}
								}
								familyHTMLTest = baseFamNameHTMLStart + "<div id='panel3FamilyName" + famArray[f][0] + "' class='panel_3_family_name_" + famArray[f][0] + replaceImgMouseClass + " panel_3_family_name panel_3_family_name_off'" + famNameTagLink + " tabindex='0' title=\"" + famArray[f][1] + "\">" + famArray[f][1] + daFamNumWrite + "<\/div>" + baseFamNameHTMLEnd;
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
									famBigImgTagRender += "<div title=\"" + famArray[f][1] + "\" id='panel3FamilyBigImgDivShell" + famArray[f][0] + "' class='panel_3_family_big_img_div_shell panel_3_family_big_img_div_shell_" + famArray[f][0] + "' onclick='panel3FamCatProdOpen(" + f + ");panel3FamImgClick(" + famArray[f][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3FamCatProdOpen(" + f + ");panel3FamImgClick(" + famArray[f][0] + ");}'";
									if (hoverState==1) {
										famBigImgTagRender += " onmouseover='panel3FamMouseOver(" + f + ");panel3FamImgReplace(1," + famArray[f][0] + ");' onfocus='panel3FamMouseOver(" + f + ");panel3FamImgReplace(1," + famArray[f][0] + ");'";
									}
									famBigImgTagRender += " tabindex='0' title=\"" + famArray[f][1] + "\"><div id='panel3FamilyBigImgDivBack" + famArray[f][0] + "' class='panel_3_family_big_img_div_back panel_3_family_big_img_div_back_off panel_3_family_big_img_div_back_" + famArray[f][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + famArray[f][2] + "\");'><\/div><div id='panel3FamilyBigImgDivOver" + famArray[f][0] + "' class='panel_3_family_big_img_div_over panel_3_family_big_img_div_over_" + famArray[f][0] + "'";
									if (hoverState==1) {
										famBigImgTagRender += " onmouseout='panel3FamMouseOut(" + f + ");panel3FamImgReplace(2," + famArray[f][0] + ");' onblur='panel3FamMouseOut(" + f + ");panel3FamImgReplace(2," + famArray[f][0] + ");'";
									}
									famBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
									familyHTMLTest = baseFamBigImgHTMLStart + famBigImgTagRender + baseFamBigImgHTMLEnd;
								}
								else {
									familyHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + famArray[f][1] + "\" alt=\"" + famArray[f][1] + "\" id='panel3FamilyBigImg" + famArray[f][0] + "' class='panel_3_family_big_img' src='" + clientImgBase + famArray[f][2] + "'>" + baseFamBigImgHTMLEnd;
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
									famSmImgTagRender += "<div title=\"" + famArray[f][1] + "\" id='panel3FamilySmImgDivShell" + famArray[f][0] + "' class='panel_3_family_sm_img_div_shell panel_3_family_sm_img_div_shell_" + famArray[f][0] + "' onclick='panel3FamCatProdOpen(" + f + ");panel3FamImgClick(" + famArray[f][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3FamCatProdOpen(" + f + ");panel3FamImgClick(" + famArray[f][0] + ");}'";
									if (hoverState==1) {
										famSmImgTagRender += " onmouseover='panel3FamMouseOver(" + f + ");panel3FamImgReplace(1," + famArray[f][0] + ");' onfocus='panel3FamMouseOver(" + f + ");panel3FamImgReplace(1," + famArray[f][0] + ");'";
									}
									famSmImgTagRender += " tabindex='0' title=\"" + famArray[f][1] + "\"><div id='panel3FamilySmImgDivBack" + famArray[f][0] + "' class='panel_3_family_sm_img_div_back panel_3_family_sm_img_div_back_off panel_3_family_sm_img_div_back_" + famArray[f][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + famArray[f][3] + "\");'><\/div><div id='panel3FamilySmImgDivOver" + famArray[f][0] + "' class='panel_3_family_sm_img_div_over panel_3_family_sm_img_div_over_" + famArray[f][0] + "'";
									if (hoverState==1) {
										famSmImgTagRender += " onmouseout='panel3FamMouseOut(" + f + ");panel3FamImgReplace(2," + famArray[f][0] + ");' onblur='panel3FamMouseOut(" + f + ");panel3FamImgReplace(2," + famArray[f][0] + ");'";
									}
									famSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
									familyHTMLTest = baseFamSmImgHTMLStart + famSmImgTagRender + baseFamSmImgHTMLEnd;
								}
								else {
									familyHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + famArray[f][1] + "\" alt=\"" + famArray[f][1] + "\" id='panel3FamilySmImg" + famArray[f][0] + "' class='panel_3_family_sm_img' src='" + clientImgBase + famArray[f][3] + "'>" + baseFamSmImgHTMLEnd;
								}
							}
							var categoryHTMLTest = "";
							var categoryHTMLLeaf = "";
							for (w=0; w<catArray.length; w++) {
								if (catArray[w][2] == famArray[f][0]) {
									categoryHTMLTest = autotextIt(p3TemplateSet.panel3CategoryDiv,"panel3Category");
									var catBadgeTagStart = categoryHTMLTest.indexOf("<!--BADGE");
									if (catBadgeTagStart != -1) {
										var catBadgeTagEnd = categoryHTMLTest.indexOf(">",catBadgeTagStart);
										var catBadgeTagStrip = categoryHTMLTest.substring(catBadgeTagStart,(catBadgeTagEnd+1));
										var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBadgeTagStart);
										var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBadgeTagEnd+1));
										categoryHTMLTest = baseCatBigImgHTMLStart + "<span id='panel3ProdlistCatBadge" + catArray[w][0] + "' class='panel_3_prodlist_cat_badge' style='display:none;'>0<\/span>" + baseCatBigImgHTMLEnd;
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
											var replaceImgMouseOver = "panel3CatImgReplace(1," + catArray[w][0] + ");";
											var replaceImgMouseOut = "panel3CatImgReplace(2," + catArray[w][0] + ");";
											var replaceImgMouseClass = " img_replace_active";
											var replaceImgCall = "panel3CatImgClick(" + catArray[w][0] + ");";
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
											catNameTagLink += " style='cursor:pointer;' onclick='panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\",1);" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\",1);" + replaceImgCall + "}'";
											if (hoverState==1) {
												catNameTagLink += " onmouseover='panel3CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel3CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel3CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel3CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
											}
											var thisCatIsOn = 1;
											for (q=0; q<prodFilterArray.length; q++) {
												if (prodFilterArray[q][8] == catArray[w][0] && prodFilterArray[q][9] == "0") {
													thisCatIsOn = 0;
													break;
												}
											}
											if (thisCatIsOn == 1) {
												var baseCatStyle = " panel_3_category_name_on";
												catArray[w][6] = 1;
												window["panel1CategoryNameVar" + catArray[w][0]] = 1;
											}
											else {
												var baseCatStyle = " panel_3_category_name_off";
											}
										}
										categoryHTMLTest = baseCatNameHTMLStart + "<div id='panel3CategoryName" + catArray[w][0] + "' class='panel_3_category_name_" + catArray[w][0] + replaceImgMouseClass + " panel_3_category_name " + baseCatStyle + "'" + catNameTagLink + " tabindex='0' title=\"" + catArray[w][1] + "\">" + catArray[w][1] + daProdNumWrite + "<\/div>" + baseCatNameHTMLEnd;
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
											catBigImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel3CategoryBigImgDivShell" + catArray[w][0] + "' class='panel_3_category_big_img_div_shell panel_3_category_big_img_div_shell_" + catArray[w][0] + "' onclick='panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\",1);panel3CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\",1);panel3CatImgClick(" + catArray[w][0] + ");}'";
											if (hoverState==1) {
												catBigImgTagRender += " onmouseover='panel3CatMouseOver(" + w + ");panel3CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel3CatMouseOver(" + w + ");panel3CatImgReplace(1," + catArray[w][0] + ");'";
											}
											catBigImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel3CategoryBigImgDivBack" + catArray[w][0] + "' class='panel_3_category_big_img_div_back panel_3_category_big_img_div_back_off panel_3_category_big_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][3] + "\");'><\/div><div id='panel3CategoryBigImgDivOver" + catArray[w][0] + "' class='panel_3_category_big_img_div_over panel_3_category_big_img_div_over_" + catArray[w][0] + "'";
											if (hoverState==1) {
												catBigImgTagRender += " onmouseout='panel3CatMouseOut(" + w + ");panel3CatImgReplace(2," + catArray[w][0] + ");' onblur='panel3CatMouseOut(" + w + ");panel3CatImgReplace(2," + catArray[w][0] + ");'";
											}
											catBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
											categoryHTMLTest = baseCatBigImgHTMLStart + catBigImgTagRender + baseCatBigImgHTMLEnd;
										}
										else {
											categoryHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel3CategoryBigImg" + catArray[w][0] + "' class='panel_3_category_big_img' src='" + clientImgBase + catArray[w][3] + "'>" + baseCatBigImgHTMLEnd;
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
											catSmImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel3CategorySmImgDivShell" + catArray[w][0] + "' class='panel_3_category_sm_img_div_shell panel_3_category_sm_img_div_shell_" + catArray[w][0] + "' onclick='panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\",1);panel3CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3SelectCat(" + w + ", \"panel3CategoryName" + catArray[w][0] + "\", \"panel_3_category_name\",1);panel3CatImgClick(" + catArray[w][0] + ");}'";
											if (hoverState==1) {
												catSmImgTagRender += " onmouseover='panel3CatMouseOver(" + w + ");panel3CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel3CatMouseOver(" + w + ");panel3CatImgReplace(1," + catArray[w][0] + ");'";
											}
											catSmImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel3CategorySmImgDivBack" + catArray[w][0] + "' class='panel_3_category_sm_img_div_back panel_3_category_sm_img_div_back_off panel_3_category_sm_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][4] + "\");'><\/div><div id='panel3CategorySmImgDivOver" + catArray[w][0] + "' class='panel_3_category_sm_img_div_over panel_3_category_sm_img_div_over_" + catArray[w][0] + "'";
											if (hoverState==1) {
												catSmImgTagRender += " onmouseout='panel3CatMouseOut(" + w + ");panel3CatImgReplace(2," + catArray[w][0] + ");' onblur='panel3CatMouseOut(" + w + ");panel3CatImgReplace(2," + catArray[w][0] + ");'";
											}
											catSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
											categoryHTMLTest = baseCatSmImgHTMLStart + catSmImgTagRender + baseCatSmImgHTMLEnd;
										}
										else {
											categoryHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel3CategorySmImg" + catArray[w][0] + "' class='panel_3_category_sm_img' src='" + clientImgBase + catArray[w][4] + "'>" + baseCatSmImgHTMLEnd;
										}
									}
									categoryHTMLLeaf += categoryHTMLTest;
								}
							}
							prodListHTML += familyHTMLTest + "<span class='panel_3_prodlist_famshell panel_3_prodlist_famshell_" + famArray[f][0] + " panel_3_prodlist_famshell_off'><div class='panel_3_family_category_shell panel_3_family_category_shell_" + famArray[f][0] + "' style='display:none;'>" + categoryHTMLLeaf + "<\/div><\/span>";
						}
					}
					else if (panel3ProductSort == "FAMPROD") {
						for (f=0; f<famArray.length; f++) {
							var familyHTMLTest = autotextIt(p3TemplateSet.panel3FamilyDiv,"panel3Family");
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
									var replaceImgMouseOver = "panel3FamImgReplace(1," + famArray[f][0] + ");";
									var replaceImgMouseOut = "panel3FamImgReplace(2," + famArray[f][0] + ");";
									var replaceImgMouseClass = " img_replace_active";
									var replaceImgCall = "panel3FamImgClick(" + famArray[f][0] + ");";
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
									famNameTagLink += " style='cursor:pointer;' onclick='panel3SelectFam(" + f + ", \"panel3FamilyName" + famArray[f][0] + "\", \"panel_3_family_name\",1);" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3SelectFam(" + f + ", \"panel3FamilyName" + famArray[f][0] + "\", \"panel_3_family_name\",1);" + replaceImgCall + "}'";
									if (hoverState==1) {
										famNameTagLink += " onmouseover='panel3FamMouseOver(" + f + ");" + replaceImgMouseOver + "' onfocus='panel3FamMouseOver(" + f + ");" + replaceImgMouseOver + "' onmouseout='panel3FamMouseOut(" + f + ");" + replaceImgMouseOut + "' onblur='panel3FamMouseOut(" + f + ");" + replaceImgMouseOut + "'";
									}
								}
								familyHTMLTest = baseFamNameHTMLStart + "<div id='panel3FamilyName" + famArray[f][0] + "' class='panel_3_family_name_" + famArray[f][0] + replaceImgMouseClass + " panel_3_family_name panel_3_family_name_off'" + famNameTagLink + " tabindex='0' title=\"" + famArray[f][1] + "\">" + famArray[f][1] + daFamNumWrite + "<\/div>" + baseFamNameHTMLEnd;
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
									famBigImgTagRender += "<div title=\"" + famArray[f][1] + "\" id='panel3FamilyBigImgDivShell" + famArray[f][0] + "' class='panel_3_family_big_img_div_shell panel_3_family_big_img_div_shell_" + famArray[f][0] + "' onclick='panel3SelectFam(" + f + ", \"panel3FamilyName" + famArray[f][0] + "\", \"panel_3_family_name\",1);panel3FamImgClick(" + famArray[f][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3SelectFam(" + f + ", \"panel3FamilyName" + famArray[f][0] + "\", \"panel_3_family_name\",1);panel3FamImgClick(" + famArray[f][0] + ");}'";
									if (hoverState==1) {
										famBigImgTagRender += " onmouseover='panel3FamMouseOver(" + f + ");panel3FamImgReplace(1," + famArray[f][0] + ");' onfocus='panel3FamMouseOver(" + f + ");panel3FamImgReplace(1," + famArray[f][0] + ");'";
									}
									famBigImgTagRender += " tabindex='0' title=\"" + famArray[f][1] + "\"><div id='panel3FamilyBigImgDivBack" + famArray[f][0] + "' class='panel_3_family_big_img_div_back panel_3_family_big_img_div_back_off panel_3_family_big_img_div_back_" + famArray[f][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + famArray[f][2] + "\");'><\/div><div id='panel3FamilyBigImgDivOver" + famArray[f][0] + "' class='panel_3_family_big_img_div_over panel_3_family_big_img_div_over_" + famArray[f][0] + "'";
									if (hoverState==1) {
										famBigImgTagRender += " onmouseout='panel3FamMouseOut(" + f + ");panel3FamImgReplace(2," + famArray[f][0] + ");' onblur='panel3FamMouseOut(" + f + ");panel3FamImgReplace(2," + famArray[f][0] + ");'";
									}
									famBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
									familyHTMLTest = baseFamBigImgHTMLStart + famBigImgTagRender + baseFamBigImgHTMLEnd;
								}
								else {
									familyHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + famArray[f][1] + "\" alt=\"" + famArray[f][1] + "\" id='panel3FamilyBigImg" + famArray[f][0] + "' class='panel_3_family_big_img' src='" + clientImgBase + famArray[f][2] + "'>" + baseFamBigImgHTMLEnd;
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
									famSmImgTagRender += "<div title=\"" + famArray[f][1] + "\" id='panel3FamilySmImgDivShell" + famArray[f][0] + "' class='panel_3_family_sm_img_div_shell panel_3_family_sm_img_div_shell_" + famArray[f][0] + "' onclick='panel3SelectFam(" + f + ", \"panel3FamilyName" + famArray[f][0] + "\", \"panel_3_family_name\",1);panel3FamImgClick(" + famArray[f][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3SelectFam(" + f + ", \"panel3FamilyName" + famArray[f][0] + "\", \"panel_3_family_name\",1);panel3FamImgClick(" + famArray[f][0] + ");}'";
									if (hoverState==1) {
										famSmImgTagRender += " onmouseover='panel3FamMouseOver(" + f + ");panel3FamImgReplace(1," + famArray[f][0] + ");' onfocus='panel3FamMouseOver(" + f + ");panel3FamImgReplace(1," + famArray[f][0] + ");'";
									}
									famSmImgTagRender += " tabindex='0' title=\"" + famArray[f][1] + "\"><div id='panel3FamilySmImgDivBack" + famArray[f][0] + "' class='panel_3_family_sm_img_div_back panel_3_family_sm_img_div_back_off panel_3_family_sm_img_div_back_" + famArray[f][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + famArray[f][3] + "\");'><\/div><div id='panel3FamilySmImgDivOver" + famArray[f][0] + "' class='panel_3_family_sm_img_div_over panel_3_family_sm_img_div_over_" + famArray[f][0] + "'";
									if (hoverState==1)	{
										famSmImgTagRender += " onmouseout='panel3FamMouseOut(" + f + ");panel3FamImgReplace(2," + famArray[f][0] + ");' onblur='panel3FamMouseOut(" + f + ");panel3FamImgReplace(2," + famArray[f][0] + ");'";
									}
									famSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
									familyHTMLTest = baseFamSmImgHTMLStart + famSmImgTagRender + baseFamSmImgHTMLEnd;
								}
								else {
									familyHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + famArray[f][1] + "\" alt=\"" + famArray[f][1] + "\" id='panel3FamilySmImg" + famArray[f][0] + "' class='panel_3_family_sm_img' src='" + clientImgBase + famArray[f][3] + "'>" + baseFamSmImgHTMLEnd;
								}
							}
							prodListHTML += "<span class='panel_3_prodlist_famshell panel_3_prodlist_famshell_" + famArray[f][0] + " panel_2_prodlist_famshell_off'>" + familyHTMLTest + "<\/span>";
						}
					}
					else if (panel3ProductSort == "FAMCATPROD") {
						for (f=0; f<famArray.length; f++) {
							var familyHTMLTest = autotextIt(p3TemplateSet.panel3FamilyDiv,"panel3Family");
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
									var replaceImgMouseOver = "panel3FamImgReplace(1," + famArray[f][0] + ");";
									var replaceImgMouseOut = "panel3FamImgReplace(2," + famArray[f][0] + ");";
									var replaceImgMouseClass = " img_replace_active";
									var replaceImgCall = "panel3FamImgClick(" + famArray[f][0] + ");";
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
									famNameTagLink += " style='cursor:pointer;' onclick='panel3FamCatProdOpen(" + f + ");" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3FamCatProdOpen(" + f + ");" + replaceImgCall + "}'";
									if (hoverState==1) {
										famNameTagLink += " onmouseover='panel3FamMouseOver(" + f + ");" + replaceImgMouseOver + "' onfocus='panel3FamMouseOver(" + f + ");" + replaceImgMouseOver + "' onmouseout='panel3FamMouseOut(" + f + ");" + replaceImgMouseOut + "' onblur='panel3FamMouseOut(" + f + ");" + replaceImgMouseOut + "'";
									}
								}
								familyHTMLTest = baseFamNameHTMLStart + "<div id='panel3FamilyName" + famArray[f][0] + "' class='panel_3_family_name_" + famArray[f][0] + replaceImgMouseClass + " panel_3_family_name panel_3_family_name_off'" + famNameTagLink + " tabindex='0' title=\"" + famArray[f][1] + "\">" + famArray[f][1] + daFamNumWrite + "<\/div>" + baseFamNameHTMLEnd;
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
									famBigImgTagRender += "<div title=\"" + famArray[f][1] + "\" id='panel3FamilyBigImgDivShell" + famArray[f][0] + "' class='panel_3_family_big_img_div_shell panel_3_family_big_img_div_shell_" + famArray[f][0] + "' onclick='panel3FamCatProdOpen(" + f + ");panel3FamImgClick(" + famArray[f][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3FamCatProdOpen(" + f + ");panel3FamImgClick(" + famArray[f][0] + ");}'";
									if (hoverState==1) {
										famBigImgTagRender += " onmouseover='panel3FamMouseOver(" + f + ");panel3FamImgReplace(1," + famArray[f][0] + ");' onfocus='panel3FamMouseOver(" + f + ");panel3FamImgReplace(1," + famArray[f][0] + ");'";
									}
									famBigImgTagRender += " tabindex='0' title=\"" + famArray[f][1] + "\"><div id='panel3FamilyBigImgDivBack" + famArray[f][0] + "' class='panel_3_family_big_img_div_back panel_3_family_big_img_div_back_off panel_3_family_big_img_div_back_" + famArray[f][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + famArray[f][2] + "\");'><\/div><div id='panel3FamilyBigImgDivOver" + famArray[f][0] + "' class='panel_3_family_big_img_div_over panel_3_family_big_img_div_over_" + famArray[f][0] + "'";
									if (hoverState==1) {
										famBigImgTagRender += " onmouseout='panel3FamMouseOut(" + f + ");panel3FamImgReplace(2," + famArray[f][0] + ");' onblur='panel3FamMouseOut(" + f + ");panel3FamImgReplace(2," + famArray[f][0] + ");'";
									}
									famBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
									familyHTMLTest = baseFamBigImgHTMLStart + famBigImgTagRender + baseFamBigImgHTMLEnd;
								}
								else {
									familyHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + famArray[f][1] + "\" alt=\"" + famArray[f][1] + "\" id='panel3FamilyBigImg" + famArray[f][0] + "' class='panel_3_family_big_img' src='" + clientImgBase + famArray[f][2] + "'>" + baseFamBigImgHTMLEnd;
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
									famSmImgTagRender += "<div title=\"" + famArray[f][1] + "\" id='panel3FamilySmImgDivShell" + famArray[f][0] + "' class='panel_3_family_sm_img_div_shell panel_3_family_sm_img_div_shell_" + famArray[f][0] + "' onclick='panel3FamCatProdOpen(" + f + ");panel3FamImgClick(" + famArray[f][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3FamCatProdOpen(" + f + ");panel3FamImgClick(" + famArray[f][0] + ");}'";
									if (hoverState==1) {
										famSmImgTagRender += " onmouseover='panel3FamMouseOver(" + f + ");panel3FamImgReplace(1," + famArray[f][0] + ");' onfocus='panel3FamMouseOver(" + f + ");panel3FamImgReplace(1," + famArray[f][0] + ");'";
									}
									famSmImgTagRender += " tabindex='0' title=\"" + famArray[f][1] + "\"><div id='panel3FamilySmImgDivBack" + famArray[f][0] + "' class='panel_3_family_sm_img_div_back panel_3_family_sm_img_div_back_off panel_3_family_sm_img_div_back_" + famArray[f][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + famArray[f][3] + "\");'><\/div><div id='panel3FamilySmImgDivOver" + famArray[f][0] + "' class='panel_3_family_sm_img_div_over panel_3_family_sm_img_div_over_" + famArray[f][0] + "'";
									if (hoverState==1) {
										famSmImgTagRender += " onmouseout='panel3FamMouseOut(" + f + ");panel3FamImgReplace(2," + famArray[f][0] + ");' onblur='panel3FamMouseOut(" + f + ");panel3FamImgReplace(2," + famArray[f][0] + ");'";
									}
									famSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
									familyHTMLTest = baseFamSmImgHTMLStart + famSmImgTagRender + baseFamSmImgHTMLEnd;
								}
								else {
									familyHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + famArray[f][1] + "\" alt=\"" + famArray[f][1] + "\" id='panel3FamilySmImg" + famArray[f][0] + "' class='panel_3_family_sm_img' src='" + clientImgBase + famArray[f][3] + "'>" + baseFamSmImgHTMLEnd;
								}
							}
							var categoryHTMLTest = "";
							var categoryHTMLLeaf = "";
							for (w=0; w<catArray.length; w++) {
								if (catArray[w][2] == famArray[f][0]) {
									categoryHTMLTest = autotextIt(p3TemplateSet.panel3CategoryDiv,"panel3Category");
									var catBadgeTagStart = categoryHTMLTest.indexOf("<!--BADGE");
									if (catBadgeTagStart != -1) {
										var catBadgeTagEnd = categoryHTMLTest.indexOf(">",catBadgeTagStart);
										var catBadgeTagStrip = categoryHTMLTest.substring(catBadgeTagStart,(catBadgeTagEnd+1));
										var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBadgeTagStart);
										var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBadgeTagEnd+1));
										categoryHTMLTest = baseCatBigImgHTMLStart + "<span id='panel3ProdlistCatBadge" + catArray[w][0] + "' class='panel_3_prodlist_cat_badge' style='display:none;'>0<\/span>" + baseCatBigImgHTMLEnd;
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
											var replaceImgMouseOver = "panel3CatImgReplace(1," + catArray[w][0] + ");";
											var replaceImgMouseOut = "panel3CatImgReplace(2," + catArray[w][0] + ");";
											var replaceImgMouseClass = " img_replace_active";
											var replaceImgCall = "panel3CatImgClick(" + catArray[w][0] + ");";
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
											catNameTagLink += " style='cursor:pointer;' onclick='panel3CatProdOpen(" + w + ");" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3CatProdOpen(" + w + ");" + replaceImgCall + "}'";
											if (hoverState==1) {
												catNameTagLink += " onmouseover='panel3CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel3CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel3CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel3CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
											}
											var thisCatIsOn = 1;
											for (q=0; q<prodFilterArray.length; q++) {
												if (prodFilterArray[q][8] == catArray[w][0] && prodFilterArray[q][9] == "0") {
													thisCatIsOn = 0;
													break;
												}
											}
											if (thisCatIsOn == 1) {
												var baseCatStyle = " panel_3_category_name_on";
												catArray[w][6] = 1;
												window["panel1CategoryNameVar" + catArray[w][0]] = 1;
											}
											else {
												var baseCatStyle = " panel_3_category_name_off";
											}
										}
										categoryHTMLTest = baseCatNameHTMLStart + "<div id='panel3CategoryName" + catArray[w][0] + "' class='panel_3_category_name_" + catArray[w][0] + replaceImgMouseClass + " panel_3_category_name " + baseCatStyle + "'" + catNameTagLink + " tabindex='0' title=\"" + catArray[w][1] + "\">" + catArray[w][1] + daProdNumWrite + "<\/div>" + baseCatNameHTMLEnd;
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
											catBigImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel3CategoryBigImgDivShell" + catArray[w][0] + "' class='panel_3_category_big_img_div_shell panel_3_category_big_img_div_shell_" + catArray[w][0] + "' onclick='panel3CatProdOpen(" + w + ");panel3CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3CatProdOpen(" + w + ");panel3CatImgClick(" + catArray[w][0] + ");}'";
											if (hoverState==1) {
												catBigImgTagRender += " onmouseover='panel3CatMouseOver(" + w + ");panel3CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel3CatMouseOver(" + w + ");panel3CatImgReplace(1," + catArray[w][0] + ");'";
											}
											catBigImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel3CategoryBigImgDivBack" + catArray[w][0] + "' class='panel_3_category_big_img_div_back panel_3_category_big_img_div_back_off panel_3_category_big_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][3] + "\");'><\/div><div id='panel3CategoryBigImgDivOver" + catArray[w][0] + "' class='panel_3_category_big_img_div_over panel_3_category_big_img_div_over_" + catArray[w][0] + "'";
											if (hoverState==1) {
												catBigImgTagRender += " onmouseout='panel3CatMouseOut(" + w + ");panel3CatImgReplace(2," + catArray[w][0] + ");' onblur='panel3CatMouseOut(" + w + ");panel3CatImgReplace(2," + catArray[w][0] + ");'";
											}
											catBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
											categoryHTMLTest = baseCatBigImgHTMLStart + catBigImgTagRender + baseCatBigImgHTMLEnd;
										}
										else {
											categoryHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel3CategoryBigImg" + catArray[w][0] + "' class='panel_3_category_big_img' src='" + clientImgBase + catArray[w][3] + "'>" + baseCatBigImgHTMLEnd;
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
											catSmImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel3CategorySmImgDivShell" + catArray[w][0] + "' class='panel_3_category_sm_img_div_shell panel_3_category_sm_img_div_shell_" + catArray[w][0] + "' onclick='panel3CatProdOpen(" + w + ");panel3CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3CatProdOpen(" + w + ");panel3CatImgClick(" + catArray[w][0] + ");}'";
											if (hoverState==1) {
												catSmImgTagRender += " onmouseover='panel3CatMouseOver(" + w + ");panel3CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel3CatMouseOver(" + w + ");panel3CatImgReplace(1," + catArray[w][0] + ");'";
											}
											catSmImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel3CategorySmImgDivBack" + catArray[w][0] + "' class='panel_3_category_sm_img_div_back panel_3_category_sm_img_div_back_off panel_3_category_sm_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][4] + "\");'><\/div><div id='panel3CategorySmImgDivOver" + catArray[w][0] + "' class='panel_3_category_sm_img_div_over panel_3_category_sm_img_div_over_" + catArray[w][0] + "'";
											if (hoverState==1) {
												catSmImgTagRender += " onmouseout='panel3CatMouseOut(" + w + ");panel3CatImgReplace(2," + catArray[w][0] + ");' onblur='panel3CatMouseOut(" + w + ");panel3CatImgReplace(2," + catArray[w][0] + ");'";
											}
											catSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
											categoryHTMLTest = baseCatSmImgHTMLStart + catSmImgTagRender + baseCatSmImgHTMLEnd;
										}
										else {
											categoryHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel3CategorySmImg" + catArray[w][0] + "' class='panel_3_category_sm_img' src='" + clientImgBase + catArray[w][4] + "'>" + baseCatSmImgHTMLEnd;
										}
									}
									var productHTMLTest = "";
									var productHTMLLeaf = "";
									for (pr=0; pr<prodFilterArray.length; pr++) {
										if (catArray[w][0] == prodFilterArray[pr][8]) {
											var productHTMLTest = autotextIt(p3TemplateSet.panel3ProductDiv,"panel3Product");
											var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
											if (prodDiscTagStart != -1) {
												var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
												var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
												var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
												var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
												var prodDiscWrite = "";
												var discVal = prodFilterArray[pr][6];
												if (discVal != 1) {
													prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel3Product_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
												}
												productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
											}
											var prodNameTagStart = productHTMLTest.indexOf("<!--PRODNAME");
											if (prodNameTagStart != -1) {
												var prodNameTagEnd = productHTMLTest.indexOf(">",prodNameTagStart);
												var prodNameTagStrip = productHTMLTest.substring(prodNameTagStart,(prodNameTagEnd+1));
												var baseProdNameHTMLStart = productHTMLTest.substr(0,prodNameTagStart);
												var baseProdNameHTMLEnd = productHTMLTest.substr((prodNameTagEnd+1));
												var prodNameTagLink = " style='cursor:pointer;' onclick='panel3ProdSelect(" + prodFilterArray[pr][0] + ", \"" + prodFilterArray[pr][1] + "\", \"panel3ProductName" + prodFilterArray[pr][0] + "\", \"panel_3_product_name\", "+pr+");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3ProdSelect(" + prodFilterArray[pr][0] + ", \"" + prodFilterArray[pr][1] + "\", \"panel3ProductName" + prodFilterArray[pr][0] + "\", \"panel_3_product_name\", "+pr+");}'";
												if (hoverState==1) {
													prodNameTagLink += " onmouseover='panel3ProdMouseOver(\"panel3ProductName" + prodFilterArray[pr][0] + "\", \"panel_3_product_name\", "+pr+");' onfocus='panel3ProdMouseOver(\"panel3ProductName" + prodFilterArray[pr][0] + "\", \"panel_3_product_name\", "+pr+");' onmouseout='panel3ProdMouseOut(\"panel3ProductName" + prodFilterArray[pr][0] + "\", \"panel_3_product_name\", "+pr+");' onblur='panel3ProdMouseOut(\"panel3ProductName" + prodFilterArray[pr][0] + "\", \"panel_3_product_name\", "+pr+");'";
												}
												if (prodFilterArray[pr][9] == "1") {
													var baseProductStyle = " panel_3_product_name_on";
												}
												else {
													var baseProductStyle = " panel_3_product_name_off";
												}
												var descTest = prodNameTagStrip.indexOf(" DESC");
												if (descTest != -1) {
													var descVal = "<span class='panel_3_product_name_desc'>" + prodFilterArray[pr][3] + "<\/span>";
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
												productHTMLTest = baseProdNameHTMLStart + "<div id='panel3ProductName" + prodFilterArray[pr][0] + "' class='panel_3_product_name" + baseProductStyle + "'" + prodNameTagLink + " tabindex='0' title=\"" + prodFilterArray[pr][2] + "\">" + prodNameItalicVar + "<span class='panel_3_product_name_name'>" + prodFilterArray[pr][2] + "<\/span>" + descVal + "<\/div>" + baseProdNameHTMLEnd;
											}
											var prodDescTagStart = productHTMLTest.indexOf("<!--PRODDESC");
											if (prodDescTagStart != -1) {
												var prodDescTagEnd = productHTMLTest.indexOf(">",prodDescTagStart);
												var prodDescTagStrip = productHTMLTest.substring(prodDescTagStart,(prodDescTagEnd+1));
												var baseProdDescHTMLStart = productHTMLTest.substr(0,prodDescTagStart);
												var baseProdDescHTMLEnd = productHTMLTest.substr((prodDescTagEnd+1));
												productHTMLTest = baseProdDescHTMLStart + "<div id='panel3ProductDesc" + prodFilterArray[pr][0] + "' class='panel_3_product_desc'>" + prodFilterArray[pr][3] + "<\/div>" + baseProdDescHTMLEnd;
											}
											var prodCatTagStart = productHTMLTest.indexOf("<!--PRODCAT");
											if (prodCatTagStart != -1) {
												var prodCatTagEnd = productHTMLTest.indexOf(">",prodCatTagStart);
												var prodCatTagStrip = productHTMLTest.substring(prodCatTagStart,(prodCatTagEnd+1));
												var baseProdCatHTMLStart = productHTMLTest.substr(0,prodCatTagStart);
												var baseProdCatHTMLEnd = productHTMLTest.substr((prodCatTagEnd+1));
												productHTMLTest = baseProdCatHTMLStart + "<div id='panel3ProductCat" + prodFilterArray[pr][0] + "' class='panel_3_product_cat'>" + prodFilterArray[pr][16] + "<\/div>" + baseProdCatHTMLEnd;
											}
											var prodBigImgTagStart = productHTMLTest.indexOf("<!--PRODBIGIMG");
											if (prodBigImgTagStart != -1) {
												var prodBigImgTagEnd = productHTMLTest.indexOf(">",prodBigImgTagStart);
												var prodBigImgTagStrip = productHTMLTest.substring(prodBigImgTagStart,(prodBigImgTagEnd+1));
												var baseProdBigImgHTMLStart = productHTMLTest.substr(0,prodBigImgTagStart);
												var baseProdBigImgHTMLEnd = productHTMLTest.substr((prodBigImgTagEnd+1));
												var prodBigImgTagLinkStart = "<a href='' onclick='panel3ProdSelect(" + prodFilterArray[pr][0] + ", \"" + prodFilterArray[pr][1] + "\", \"panel3ProductName" + prodFilterArray[pr][0] + "\", \"panel_3_product_name\", "+pr+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3ProdSelect(" + prodFilterArray[pr][0] + ", \"" + prodFilterArray[pr][1] + "\", \"panel3ProductName" + prodFilterArray[pr][0] + "\", \"panel_3_product_name\", "+pr+");return false;}'";
												if (hoverState==1) {
													prodBigImgTagLinkStart += " onmouseover='panel3ProdMouseOver(\"panel3ProductName" + prodFilterArray[pr][0] + "\", \"panel_3_product_name\", "+pr+");' onfocus='panel3ProdMouseOver(\"panel3ProductName" + prodFilterArray[pr][0] + "\", \"panel_3_product_name\", "+pr+");' onmouseout='panel3ProdMouseOut(\"panel3ProductName" + prodFilterArray[pr][0] + "\", \"panel_3_product_name\", "+pr+");' onblur='panel3ProdMouseOut(\"panel3ProductName" + prodFilterArray[pr][0] + "\", \"panel_3_product_name\", "+pr+");'";
												}
												prodBigImgTagLinkStart += " tabindex='0' title=\"" + prodFilterArray[pr][2] + "\">";
												var prodBigImgTagLinkEnd = "<\/a>";
												productHTMLTest = baseProdBigImgHTMLStart + prodBigImgTagLinkStart + "<img title=\"" + prodFilterArray[pr][2] + "\" alt=\"" + prodFilterArray[pr][2] + "\" id='panel3ProductBigImg" + prodFilterArray[pr][0] + "' class='panel_3_product_big_img' src='" + clientImgBase + prodFilterArray[pr][4] + "'>" + prodBigImgTagLinkEnd + baseProdBigImgHTMLEnd;
											}
											var prodSmImgTagStart = productHTMLTest.indexOf("<!--PRODSMIMG");
											if (prodSmImgTagStart != -1) {
												var prodSmImgTagEnd = productHTMLTest.indexOf(">",prodSmImgTagStart);
												var prodSmImgTagStrip = productHTMLTest.substring(prodSmImgTagStart,(prodSmImgTagEnd+1));
												var baseProdSmImgHTMLStart = productHTMLTest.substr(0,prodSmImgTagStart);
												var baseProdSmImgHTMLEnd = productHTMLTest.substr((prodSmImgTagEnd+1));
												var prodSmImgTagLinkStart = "<a href='' onclick='panel3ProdSelect(" + prodFilterArray[pr][0] + ", \"" + prodFilterArray[pr][1] + "\", \"panel3ProductName" + prodFilterArray[pr][0] + "\", \"panel_3_product_name\", "+pr+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3ProdSelect(" + prodFilterArray[pr][0] + ", \"" + prodFilterArray[pr][1] + "\", \"panel3ProductName" + prodFilterArray[pr][0] + "\", \"panel_3_product_name\", "+pr+");return false;}'";
												if (hoverState==1) {
													prodSmImgTagLinkStart += " onmouseover='panel3ProdMouseOver(\"panel3ProductName" + prodFilterArray[pr][0] + "\", \"panel_3_product_name\", "+pr+");' onfocus='panel3ProdMouseOver(\"panel3ProductName" + prodFilterArray[pr][0] + "\", \"panel_3_product_name\", "+pr+");' onmouseout='panel3ProdMouseOut(\"panel3ProductName" + prodFilterArray[pr][0] + "\", \"panel_3_product_name\", "+pr+");' onblur='panel3ProdMouseOut(\"panel3ProductName" + prodFilterArray[pr][0] + "\", \"panel_3_product_name\", "+pr+");'";
												}
												prodSmImgTagLinkStart += " tabindex='0' title=\"" + prodFilterArray[pr][2] + "\">";
												var prodSmImgTagLinkEnd = "<\/a>";
												productHTMLTest = baseProdSmImgHTMLStart + prodSmImgTagLinkStart + "<img title=\"" + prodFilterArray[pr][2] + "\" alt=\"" + prodFilterArray[pr][2] + "\" id='panel3ProductSmImg" + prodFilterArray[pr][0] + "' class='panel_3_product_sm_img' src='" + clientImgBase + prodFilterArray[pr][5] + "'>" + prodSmImgTagLinkEnd + baseProdSmImgHTMLEnd;
											}
											productHTMLLeaf += productHTMLTest;
										}
									}
									categoryHTMLLeaf += categoryHTMLTest + "<div class='panel_3_family_category_product_shell panel_3_family_category_product_shell_" + catArray[w][0] + "' style='display:none;'>" + productHTMLLeaf + "<\/div>";
								}
							}
							if (panel3PListSliderOpen = 1) {
								prodListHTML += "<span class='panel_3_prodlist_famshell panel_3_prodlist_famshell_" + famArray[f][0] + " panel_3_prodlist_famshell_off'><div class='panel_3_family_category_shell panel_3_family_category_shell_" + famArray[f][0] + "'>" + categoryHTMLLeaf + "<\/div><\/span>";
							}
							else {
								prodListHTML += familyHTMLTest + "<span class='panel_3_prodlist_famshell panel_3_prodlist_famshell_" + famArray[f][0] + " panel_3_prodlist_famshell_off'><div class='panel_3_family_category_shell panel_3_family_category_shell_" + famArray[f][0] + "' style='display:none;'><\/span>" + categoryHTMLLeaf + "<\/div>";
							}
						}
					}
					baseHTML = baseProdListHTMLStart + prodListHTML + baseProdListHTMLEnd;
					panel3ProdListOn = 1;
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
				panel3CatListCount = 0;
				for (j=0;j<catArray.length;j++) {
					if (catArray[j][6] == 1) {
						panel3CatListCount++;
					}
				}
				if (panel3CatListCount == 0) {
					panel3CatListCount = catArray.length;
				}
				baseHTML = catListNumHTMLStart + "<span id='panel3CatListNum'>" + panel3CatListCount + "<\/span>" + catListNumHTMLEnd;
			}
			var catListProdNumTagStart = baseHTML.indexOf("<!--CATLISTPRODNUM");
			if (catListProdNumTagStart != -1) {
				var catListProdNumTagEnd = baseHTML.indexOf(">",catListProdNumTagStart);
				var catListProdNumHTMLStart = baseHTML.substr(0,catListProdNumTagStart);
				var catListProdNumHTMLEnd = baseHTML.substr((catListProdNumTagEnd+1));
				panel3CatListProdCount = 0;
				for (p=0;p<prodDisplayArray.length;p++) {
					if (prodDisplayArray[p][9] == 1) {
						panel3CatListProdCount++;
					}
				}
				baseHTML = catListProdNumHTMLStart + "<span id='panel3CatListProdNum'>" + panel3CatListProdCount + "<\/span>" + catListProdNumHTMLEnd;
			}
			var prodCountNumTagStart = baseHTML.indexOf("<!--PRODCOUNT");
			if (prodCountNumTagStart != -1) {
				var prodCountNumTagEnd = baseHTML.indexOf(">",prodCountNumTagStart);
				var prodCountNumTagStrip = baseHTML.substring(prodCountNumTagStart,(prodCountNumTagEnd+1));
				var prodCountNumHTMLStart = baseHTML.substr(0,prodCountNumTagStart);
				var prodCountNumHTMLEnd = baseHTML.substr((prodCountNumTagEnd+1));
				var panel3ProdCount = 0;
				var prodCountNumValueStart = prodCountNumTagStrip.indexOf(" VALUE=");
				if (prodCountNumValueStart != -1) {
					var prodCountNumValueEnd = prodCountNumTagStrip.indexOf("]",prodCountNumValueStart);
					prodCountNumValueVar = prodCountNumTagStrip.substring((prodCountNumValueStart+8),(prodCountNumValueEnd));
				}
				else {
					prodCountNumValueVar = "";
				}
				baseHTML = prodCountNumHTMLStart + "<span id='panel3ProdCountNumHolder'><span id='panel3ProdCountNum'>" + prodCartArray.length + "<\/span>" +  prodCountNumValueVar + "<\/span>" + prodCountNumHTMLEnd;
			}
			var countProdNumTagStart = baseHTML.indexOf("<!--COUNTPROD");
			if (countProdNumTagStart != -1) {
				var countProdNumTagEnd = baseHTML.indexOf(">",countProdNumTagStart);
				var countProdNumTagStrip = baseHTML.substring(countProdNumTagStart,(countProdNumTagEnd+1));
				var countProdNumHTMLStart = baseHTML.substr(0,countProdNumTagStart);
				var countProdNumHTMLEnd = baseHTML.substr((countProdNumTagEnd+1));
				var panel3CountProd = 0;
				var countProdNumValueStart = countProdNumTagStrip.indexOf(" VALUE=");
				if (countProdNumValueStart != -1) {
					var countProdNumValueEnd = countProdNumTagStrip.indexOf("]",countProdNumValueStart);
					countProdNumValueVar = countProdNumTagStrip.substring((countProdNumValueStart+8),(countProdNumValueEnd));
				}
				else {
					countProdNumValueVar = "";
				}
				baseHTML = countProdNumHTMLStart + "<span id='panel3CountProdNumHolder'><span id='panel3CountProdNum'>" + prodCartArray.length + "<\/span>" +  countProdNumValueVar + "<\/span>" + countProdNumHTMLEnd;
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
					p3selProdSingularVar = " " + selectedProductsTagStrip.substring((selProdSingularStart+11),(selProdSingularEnd));
				}
				var selProdPluralStart = selectedProductsTagStrip.indexOf(" PLURAL=");
				if (selProdPluralStart != -1) {
					var selProdPluralEnd = selectedProductsTagStrip.indexOf("]",selProdPluralStart);
					p3selProdPluralVar = " " + selectedProductsTagStrip.substring((selProdPluralStart+9),(selProdPluralEnd));
				}
				if (prodCartArray.length == 1) {
					var thisSPT = p3selProdSingularVar;
				}
				else {
					var thisSPT = p3selProdPluralVar;
				}
				baseHTML = selectedProductsHTMLStart + "<div id='panel3SelProdText' class='panel_3_selected_products_text'>" + thisSPT + "<\/div>" + selectedProductsHTMLEnd;
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
				prodlistButtonRender += "<div id='panel3ProdlistButton' class='panel_3_prodlist_button panel_3_prodlist_button_off'";
				if (hoverState==1) {
					prodlistButtonRender += " onmouseover='panel3ButtonHover(\"panel3ProdlistButton\",\"panel_3_prodlist_button\",1);' onfocus='panel3ButtonHover(\"panel3ProdlistButton\",\"panel_3_prodlist_button\",1);' onmouseout='panel3ButtonHover(\"panel3ProdlistButton\",\"panel_3_prodlist_button\",0);' onblur='panel3ButtonHover(\"panel3ProdlistButton\",\"panel_3_prodlist_button\",0);'";
				}
				prodlistButtonRender += " onclick='panel3SubmitForm();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3SubmitForm();}' tabindex='0' title=\"" + prodlistButtonValueVar + "\">" + prodlistButtonItalicVar + prodlistButtonValueVar + "<\/div>";
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
				prodlistResetRender += "<div id='panel3ProdlistReset' class='panel_3_prodlist_reset panel_3_prodlist_reset_off'";
				if (hoverState==1) {
					prodlistResetRender += " onmouseover='panel3ButtonHover(\"panel3ProdlistReset\",\"panel_3_prodlist_reset\",1);' onfocus='panel3ButtonHover(\"panel3ProdlistReset\",\"panel_3_prodlist_reset\",1);' onmouseout='panel3ButtonHover(\"panel3ProdlistReset\",\"panel_3_prodlist_reset\",0);' onblur='panel3ButtonHover(\"panel3ProdlistReset\",\"panel_3_prodlist_reset\",0);'";
				}
				prodlistResetRender += " onclick='panel3ResetProducts();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3ResetProducts();}' tabindex='0' title=\"" + prodlistResetValueVar + "\">" + prodlistResetItalicVar + prodlistResetValueVar + "<\/div>";
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
				prodlistCatResetRender += "<div id='panel3ProdlistCatReset' class='panel_3_prodlist_catreset panel_3_prodlist_catreset_" + catResOnVar + "'";
				if (hoverState==1) {
					prodlistCatResetRender += " onmouseover='panel3ButtonHover(\"panel3ProdlistCatReset\",\"panel_3_prodlist_catreset\",1);' onfocus='panel3ButtonHover(\"panel3ProdlistCatReset\",\"panel_3_prodlist_catreset\",1);' onmouseout='panel3ButtonHover(\"panel3ProdlistCatReset\",\"panel_3_prodlist_catreset\",0);' onblur='panel3ButtonHover(\"panel3ProdlistCatReset\",\"panel_3_prodlist_catreset\",0);'";
				}
				prodlistCatResetRender += " onclick='panel3ResetCategories();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3ResetCategories();}' tabindex='0' title=\"" + prodlistCatResetValueVar + "\">" + prodlistCatResetItalicVar + prodlistCatResetValueVar + daProdNumWrite + "<\/div>";
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
				submitButtonRender += "<div id='panel3SubmitButton' class='panel_3_submit_button panel_3_submit_button_off'";
				if (hoverState==1) {
					submitButtonRender += " onmouseover='panel3ButtonHover(\"panel3SubmitButton\",\"panel_3_submit_button\",1);' onfocus='panel3ButtonHover(\"panel3SubmitButton\",\"panel_3_submit_button\",1);' onmouseout='panel3ButtonHover(\"panel3SubmitButton\",\"panel_3_submit_button\",0);' onblur='panel3ButtonHover(\"panel3SubmitButton\",\"panel_3_submit_button\",0);'";
				}
				submitButtonRender += " onclick='panel3SubmitForm();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3SubmitForm();}' tabindex='0' title=\"" + submitButtonValueVar + "\">" + submitButtonItalicVar + submitButtonValueVar + "<\/div>";
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
					geoLocButtonValueVar = geoLocButtonTagStrip.substring((geoLocButtonValueStart+8),(geoLocButtonValueEnd));
				}
				else {
					geoLocButtonValueVar = "SUBMIT";
				}
				var geoLocButtonSubmitStart = geoLocButtonTagStrip.indexOf(" SUBMIT");
				if (geoLocButtonSubmitStart != -1) {
					p3GeoLocButtonSubmitVar = 1;
				}
				var geoLocButtonItalicStart = geoLocButtonTagStrip.indexOf(" FNTAW=");
				if (geoLocButtonItalicStart != -1) {
					var geoLocButtonItalicEnd = geoLocButtonTagStrip.indexOf("]",geoLocButtonItalicStart);
					var geoLocButtonItalicVar = "<i class='fa " + geoLocButtonTagStrip.substring((geoLocButtonItalicStart+8),(geoLocButtonItalicEnd)) + "'><\/i>";
				}
				else {
					var geoLocButtonItalicVar = "";
				}
				geoLocButtonRender += "<div id='panel3GeoLocButton' class='panel_3_geo_loc_button panel_3_geo_loc_button_off'";
				if (hoverState==1) {
					geoLocButtonRender += " onmouseover='panel3ButtonHover(\"panel3GeoLocButton\",\"panel_3_geo_loc_button\",1);' onfocus='panel3ButtonHover(\"panel3GeoLocButton\",\"panel_3_geo_loc_button\",1);' onmouseout='panel3ButtonHover(\"panel3GeoLocButton\",\"panel_3_geo_loc_button\",0);' onblur='panel3ButtonHover(\"panel3GeoLocButton\",\"panel_3_geo_loc_button\",0);'";
				}
				geoLocButtonRender += " onclick='geoNearbyCheck(\"panel3AddressField\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){geoNearbyCheck(\"panel3AddressField\");}' tabindex='0' title=\"" + geoLocButtonValueVar + "\">" + geoLocButtonItalicVar + geoLocButtonValueVar + "<\/div>";
				baseHTML = geoLocButtonHTMLStart + geoLocButtonRender + geoLocButtonHTMLEnd;
			}
			var newLocFieldTagStart = baseHTML.indexOf("<!--NEWLOCFIELD");
			if (newLocFieldTagStart != -1) {
				var newLocFieldTagEnd = baseHTML.indexOf(">",newLocFieldTagStart);
				var newLocFieldTagStrip = baseHTML.substring(newLocFieldTagStart,(newLocFieldTagEnd+1));
				var newLocFieldHTMLStart = baseHTML.substr(0,newLocFieldTagStart);
				var newLocFieldHTMLEnd = baseHTML.substr((newLocFieldTagEnd+1));
				var newLocFieldRender = "";
				var newLocFieldValueStart = newLocFieldTagStrip.indexOf(" VALUE=");
				if (newLocFieldValueStart != -1) {
					var newLocFieldValueEnd = newLocFieldTagStrip.indexOf("]");
					var newLocFieldValueVal = newLocFieldTagStrip.substring((newLocFieldValueStart+8),(newLocFieldValueEnd));
					var newLocFieldValueVar = newLocFieldValueVal;
					var newLocFieldValueRender = " placeholder='"+newLocFieldValueVal+"'";
					//p3DirBaseText = newLocFieldValueVal;
				}
				else {
					var newLocFieldValueRender = " placeholder='" + document.getElementById('localChangeAdd').value + "'";
				}
				var newLocFieldSubStart = newLocFieldTagStrip.indexOf(" SUBMIT");
				if (newLocFieldSubStart != -1) {
					var newLocFieldSubRender = " onkeyup='panel3NewLocKeypress(event,\"panel3NewLocField\",1);'";
				}
				else {
					var newLocFieldSubRender = " onkeyup='panel3NewLocKeypress(event,\"panel3NewLocField\",0);'";
				}
				newLocFieldRender = "<input type='text' name='panel3NewLocField' id='panel3NewLocField' class='panel_3_new_loc_field panel_3_new_loc_field_base'" + newLocFieldValueRender + newLocFieldSubRender + " title=\"Enter Location\">";
				baseHTML = newLocFieldHTMLStart + newLocFieldRender + newLocFieldHTMLEnd;
			}
			var mobileLocFieldTagStart = baseHTML.indexOf("<!--MOBILELOCFIELD");
			if (mobileLocFieldTagStart != -1) {
				var mobileLocFieldTagEnd = baseHTML.indexOf(">",mobileLocFieldTagStart);
				var mobileLocFieldTagStrip = baseHTML.substring(mobileLocFieldTagStart,(mobileLocFieldTagEnd+1));
				var mobileLocFieldHTMLStart = baseHTML.substr(0,mobileLocFieldTagStart);
				var mobileLocFieldHTMLEnd = baseHTML.substr((mobileLocFieldTagEnd+1));
				var mobileLocFieldRender = "";
				var mobileLocFieldValueStart = mobileLocFieldTagStrip.indexOf(" VALUE=");
				if (mobileLocFieldValueStart != -1) {
					var mobileLocFieldValueEnd = mobileLocFieldTagStrip.indexOf("]");
					var mobileLocFieldValueVal = mobileLocFieldTagStrip.substring((mobileLocFieldValueStart+8),(mobileLocFieldValueEnd));
					var mobileLocFieldValueVar = mobileLocFieldValueVal;
					var mobileLocFieldValueRender = " placeholder='"+mobileLocFieldValueVal+"'";
					//p3DirBaseText = mobileLocFieldValueVal;
				}
				else {
					var mobileLocFieldValueRender = " placeholder='" + document.getElementById('localChangeAdd').value + "'";
				}
				var mobileLocFieldSubStart = mobileLocFieldTagStrip.indexOf(" SUBMIT");
				if (mobileLocFieldSubStart != -1) {
					var mobileLocFieldSubRender = " onkeyup='panel3MobileLocKeypress(event,\"panel3MobileLocField\",1);'";
				}
				else {
					var mobileLocFieldSubRender = " onkeyup='panel3MobileLocKeypress(event,\"panel3MobileLocField\",0);'";
				}
				mobileLocFieldRender = "<input type='text' name='panel3MobileLocField' id='panel3MobileLocField' class='panel_3_mobile_loc_field panel_3_mobile_loc_field_base'" + mobileLocFieldValueRender + mobileLocFieldSubRender + " title=\"Enter Location\">";
				baseHTML = mobileLocFieldHTMLStart + mobileLocFieldRender + mobileLocFieldHTMLEnd;
			}
			var newLocButtonTagStart = baseHTML.indexOf("<!--NEWLOCBUTTON");
			if (newLocButtonTagStart != -1) {
				var newLocButtonTagEnd = baseHTML.indexOf(">",newLocButtonTagStart);
				var newLocButtonTagStrip = baseHTML.substring(newLocButtonTagStart,(newLocButtonTagEnd+1));
				var newLocButtonHTMLStart = baseHTML.substr(0,newLocButtonTagStart);
				var newLocButtonHTMLEnd = baseHTML.substr((newLocButtonTagEnd+1));
				var newLocButtonRender = "";
				var newLocButtonValueStart = newLocButtonTagStrip.indexOf(" VALUE=");
				if (newLocButtonValueStart != -1) {
					var newLocButtonValueEnd = newLocButtonTagStrip.indexOf("]",newLocButtonValueStart);
					var newLocButtonValueVar = newLocButtonTagStrip.substring((newLocButtonValueStart+8),(newLocButtonValueEnd));
				}
				else {
					var newLocButtonValueVar = "GO";
				}
				var newLocButtonItalicStart = newLocButtonTagStrip.indexOf(" FNTAW=");
				if (newLocButtonItalicStart != -1) {
					var newLocButtonItalicEnd = newLocButtonTagStrip.indexOf("]",newLocButtonItalicStart);
					var newLocButtonItalicVar = "<i class='fa " + newLocButtonTagStrip.substring((newLocButtonItalicStart+8),(newLocButtonItalicEnd)) + "'><\/i>";
				}
				else {
					var newLocButtonItalicVar = "";
				}
				newLocButtonRender += "<div id='panel3NewLocButton' class='panel_3_new_loc_button panel_3_new_loc_button_off'";
				if (hoverState==1) {
					newLocButtonRender += " onmouseover='panel3ButtonHover(\"panel3NewLocButton\",\"panel_3_new_loc_button\",1);' onfocus='panel3ButtonHover(\"panel3NewLocButton\",\"panel_3_new_loc_button\",1);' onmouseout='panel3ButtonHover(\"panel3NewLocButton\",\"panel_3_new_loc_button\",0);' onblur='panel3ButtonHover(\"panel3NewLocButton\",\"panel_3_new_loc_button\",0);'";
				}
				newLocButtonRender += " onclick='panel3CodeDirectAddressCheck();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3CodeDirectAddressCheck();}' tabindex='0' title=\"" + newLocButtonValueVar + "\">" + newLocButtonItalicVar + newLocButtonValueVar + "<\/div>";
				baseHTML = newLocButtonHTMLStart + newLocButtonRender + newLocButtonHTMLEnd;
			}
			var emailFieldTagStart = baseHTML.indexOf("<!--EMAILFIELD");
			if (emailFieldTagStart != -1) {
				var emailFieldTagEnd = baseHTML.indexOf(">",emailFieldTagStart);
				var emailFieldTagStrip = baseHTML.substring(emailFieldTagStart,(emailFieldTagEnd+1));
				var emailFieldHTMLStart = baseHTML.substr(0,emailFieldTagStart);
				var emailFieldHTMLEnd = baseHTML.substr((emailFieldTagEnd+1));
				var emailFieldRender = "";
				var emailFieldNoClose = 0;
				var emailFieldNoCStart = emailFieldTagStrip.indexOf(" NOCLOSE");
				if (emailFieldNoCStart != -1) {
					var emailFieldNoClose = 1;
				}
				var emailFieldValueStart = emailFieldTagStrip.indexOf(" VALUE=");
				if (emailFieldValueStart != -1) {
					var emailFieldValueEnd = emailFieldTagStrip.indexOf("]");
					var emailFieldValueVal = emailFieldTagStrip.substring((emailFieldValueStart+8),(emailFieldValueEnd));
					var emailFieldValueVar = emailFieldValueVal;
					var emailFieldValueRender = " value='"+emailFieldValueVal+"'";
					var emailFieldFocusRender = " onfocus='fieldBlurFocus(\"panel3EmailField\",\""+emailFieldValueVal+"\",1";if(emailFieldNoClose==1){emailFieldFocusRender+=",1";}emailFieldFocusRender+=");'";
					var emailFieldBlurRender = " onblur='fieldBlurFocus(\"panel3EmailField\",\""+emailFieldValueVal+"\",0";if(emailFieldNoClose==1){emailFieldFocusRender+=",1";}emailFieldFocusRender+=");'";
				}
				else {
					var emailFieldValueVar = "";
					var emailFieldValueRender = "";
					var emailFieldFocusRender = "";
					var emailFieldBlurRender = "";
				}
				var emailFieldSubStart = emailFieldTagStrip.indexOf(" SUBMIT");
				if (emailFieldSubStart != -1) {
					var emailFieldSubRender = " onkeyup='panel3EmailKeypress(event,\"panel3EmailField\",1);'";
				}
				else {
					var emailFieldSubRender = " onkeyup='panel3EmailKeypress(event,\"panel3EmailField\",0);'";
				}
				emailFieldRender += "<input type='email' name='panel3EmailField' id='panel3EmailField' class='panel_3_email_field panel_3_email_field_base'" + emailFieldValueRender + emailFieldFocusRender + emailFieldBlurRender + emailFieldSubRender + " title=\"Email Address\">";
				baseHTML = emailFieldHTMLStart + emailFieldRender + emailFieldHTMLEnd;
			}
			var emailButtonTagStart = baseHTML.indexOf("<!--EMAILBUTTON");
			if (emailButtonTagStart != -1) {
				var emailButtonTagEnd = baseHTML.indexOf(">",emailButtonTagStart);
				var emailButtonTagStrip = baseHTML.substring(emailButtonTagStart,(emailButtonTagEnd+1));
				var emailButtonHTMLStart = baseHTML.substr(0,emailButtonTagStart);
				var emailButtonHTMLEnd = baseHTML.substr((emailButtonTagEnd+1));
				var emailButtonRender = "";
				var emailButtonValueStart = emailButtonTagStrip.indexOf(" VALUE=");
				if (emailButtonValueStart != -1) {
					var emailButtonValueEnd = emailButtonTagStrip.indexOf("]",emailButtonValueStart);
					var emailButtonValueVar = emailButtonTagStrip.substring((emailButtonValueStart+8),(emailButtonValueEnd));
				}
				else {
					var emailButtonValueVar = "SEND";
				}
				var emailButtonItalicStart = emailButtonTagStrip.indexOf(" FNTAW=");
				if (emailButtonItalicStart != -1) {
					var emailButtonItalicEnd = emailButtonTagStrip.indexOf("]",emailButtonItalicStart);
					var emailButtonItalicVar = "<i class='fa " + emailButtonTagStrip.substring((emailButtonItalicStart+8),(emailButtonItalicEnd)) + "'><\/i>";
				}
				else {
					var emailButtonItalicVar = "";
				}
				emailButtonRender += "<div id='panel3EmailButton' class='panel_3_email_button panel_3_email_button_off'";
				if (hoverState==1) {
					emailButtonRender += " onmouseover='panel3ButtonHover(\"panel3EmailButton\",\"panel_3_email_button\",1);' onfocus='panel3ButtonHover(\"panel3EmailButton\",\"panel_3_email_button\",1);' onmouseout='panel3ButtonHover(\"panel3EmailButton\",\"panel_3_email_button\",0);' onblur='panel3ButtonHover(\"panel3EmailButton\",\"panel_3_email_button\",0);'";
				}
				emailButtonRender += " onclick='panel3Email();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3Email();}' tabindex='0' title=\"" + emailButtonValueVar + "\">" + emailButtonItalicVar + emailButtonValueVar + "<\/div>";
				baseHTML = emailButtonHTMLStart + emailButtonRender + emailButtonHTMLEnd;
			}
			var printButtonTagStart = baseHTML.indexOf("<!--PRINTBUTTON");
			if (printButtonTagStart != -1) {
				var printButtonTagEnd = baseHTML.indexOf(">",printButtonTagStart);
				var printButtonTagStrip = baseHTML.substring(printButtonTagStart,(printButtonTagEnd+1));
				var printButtonHTMLStart = baseHTML.substr(0,printButtonTagStart);
				var printButtonHTMLEnd = baseHTML.substr((printButtonTagEnd+1));
				var printButtonRender = "";
				var printButtonValueStart = printButtonTagStrip.indexOf(" VALUE=");
				if (printButtonValueStart != -1) {
					var printButtonValueEnd = printButtonTagStrip.indexOf("]",printButtonValueStart);
					var printButtonValueVar = printButtonTagStrip.substring((printButtonValueStart+8),(printButtonValueEnd));
				}
				else {
					var printButtonValueVar = "SEND";
				}
				var printButtonItalicStart = printButtonTagStrip.indexOf(" FNTAW=");
				if (printButtonItalicStart != -1) {
					var printButtonItalicEnd = printButtonTagStrip.indexOf("]",printButtonItalicStart);
					var printButtonItalicVar = "<i class='fa " + printButtonTagStrip.substring((printButtonItalicStart+8),(printButtonItalicEnd)) + "'><\/i>";
				}
				else {
					var printButtonItalicVar = "";
				}
				printButtonRender += "<div id='panel3PrintButton' class='panel_3_print_button panel_3_print_button_off'";
				if (hoverState==1) {
					printButtonRender += " onmouseover='panel3ButtonHover(\"panel3PrintButton\",\"panel_3_print_button\",1);' onfocus='panel3ButtonHover(\"panel3PrintButton\",\"panel_3_print_button\",1);' onmouseout='panel3ButtonHover(\"panel3PrintButton\",\"panel_3_print_button\",0);' onblur='panel3ButtonHover(\"panel3PrintButton\",\"panel_3_print_button\",0);'";
				}
				printButtonRender += " onclick='panel3Print();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3Print();}' tabindex='0' title=\"" + printButtonValueVar + "\">" + printButtonItalicVar + printButtonValueVar + "<\/div>";
				baseHTML = printButtonHTMLStart + printButtonRender + printButtonHTMLEnd;
			}
			var googleButtonTagStart = baseHTML.indexOf("<!--GOOGLEBUTTON");
			if (googleButtonTagStart != -1) {
				var googleButtonTagEnd = baseHTML.indexOf(">",googleButtonTagStart);
				var googleButtonTagStrip = baseHTML.substring(googleButtonTagStart,(googleButtonTagEnd+1));
				var googleButtonHTMLStart = baseHTML.substr(0,googleButtonTagStart);
				var googleButtonHTMLEnd = baseHTML.substr((googleButtonTagEnd+1));
				var googleButtonRender = "";
				var googleButtonValueStart = googleButtonTagStrip.indexOf(" VALUE=");
				if (googleButtonValueStart != -1) {
					var googleButtonValueEnd = googleButtonTagStrip.indexOf("]",googleButtonValueStart);
					var googleButtonValueVar = googleButtonTagStrip.substring((googleButtonValueStart+8),(googleButtonValueEnd));
				}
				else {
					var googleButtonValueVar = "SEND";
				}
				var googleButtonItalicStart = googleButtonTagStrip.indexOf(" FNTAW=");
				if (googleButtonItalicStart != -1) {
					var googleButtonItalicEnd = googleButtonTagStrip.indexOf("]",googleButtonItalicStart);
					var googleButtonItalicVar = "<i class='fa " + googleButtonTagStrip.substring((googleButtonItalicStart+8),(googleButtonItalicEnd)) + "'><\/i>";
				}
				else {
					var googleButtonItalicVar = "";
				}
				googleButtonRender += "<div id='panel3GoogleButton' class='panel_3_google_button panel_3_google_button_off'";
				if (hoverState==1) {
					googleButtonRender += " onmouseover='panel3ButtonHover(\"panel3GoogleButton\",\"panel_3_google_button\",1);' onfocus='panel3ButtonHover(\"panel3GoogleButton\",\"panel_3_google_button\",1);' onmouseout='panel3ButtonHover(\"panel3GoogleButton\",\"panel_3_google_button\",0);' onblur='panel3ButtonHover(\"panel3GoogleButton\",\"panel_3_google_button\",0);'";
				}
				googleButtonRender += " onclick='panel3GoogleLink("+panel3storeNow+");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3GoogleLink("+panel3storeNow+");}' tabindex='0' title=\"" + googleButtonValueVar + "\">" + googleButtonItalicVar + googleButtonValueVar + "<\/div>";
				baseHTML = googleButtonHTMLStart + googleButtonRender + googleButtonHTMLEnd;
			}
			if (stateNames == 1) {
				var gottaState = 0;
				for (tsa=0;tsa<tblStateArray.length;tsa++) {
					if (tblStateArray[tsa][0] == storeDisplayArray[panel3storeNow][4]) {
						var stateOut = tblStateArray[tsa][1];
						gottaState = 1;
						break;
					}
				}
				if (gottaState == 0) {
					var stateOut = storeDisplayArray[panel3storeNow][4];
				}
			}
			else {
				var stateOut = storeDisplayArray[panel3storeNow][4];
			}
			if(gLog==1){console.log("panel3Scripts.php Store ID=" + storeDisplayArray[panel3storeNow][13]);}
			var locChainNameTagStart = baseHTML.indexOf("<!--LOCCHAINNAME");
			if (locChainNameTagStart != -1) {
				if (storeDisplayArray[panel3storeNow][17] != "") {
					var locChainNameVal = storeDisplayArray[panel3storeNow][17];
				}
				else {
					var locChainNameVal = storeDisplayArray[panel3storeNow][0];
				}
				var locChainNameTagEnd = baseHTML.indexOf(">",locChainNameTagStart);
				var locChainNameTagStrip = baseHTML.substring(locChainNameTagStart,(locChainNameTagEnd+1));
				var baseLocChainNameHTMLStart = baseHTML.substr(0,locChainNameTagStart);
				var baseLocChainNameHTMLEnd = baseHTML.substr((locChainNameTagEnd+1));
				baseHTML = baseLocChainNameHTMLStart + "<div id='panel3LocChainName" + storeDisplayArray[panel3storeNow][13] + "' class='panel_3_loc_chain_name'>" + locChainNameVal + "<\/div>" + baseLocChainNameHTMLEnd;
			}
			var locChainBigImgTagStart = baseHTML.indexOf("<!--LOCCHAINBIGIMG");
			if (locChainBigImgTagStart != -1) {
				var locChainBigImgTagEnd = baseHTML.indexOf(">",locChainBigImgTagStart);
				var locChainBigImgTagStrip = baseHTML.substring(locChainBigImgTagStart,(locChainBigImgTagEnd+1));
				var baseLocChainBigImgHTMLStart = baseHTML.substr(0,locChainBigImgTagStart);
				var baseLocChainBigImgHTMLEnd = baseHTML.substr((locChainBigImgTagEnd+1));
				if (storeDisplayArray[panel3storeNow][18] != "") {
					baseHTML = baseLocChainBigImgHTMLStart + "<img title=\"" + storeDisplayArray[panel3storeNow][0] + "\" alt=\"" + storeDisplayArray[panel3storeNow][0] + "\" id='panel3LocChainBigImg" + storeDisplayArray[panel3storeNow][13] + "' class='panel_3_loc_chain_big_img' src='//" + endpointCDN + "/cms/images/" + storeDisplayArray[panel3storeNow][18] + "'>" + baseLocChainBigImgHTMLEnd;
				}
			}
			var locChainSmImgTagStart = baseHTML.indexOf("<!--LOCCHAINSMIMG");
			if (locChainSmImgTagStart != -1) {
				var locChainSmImgTagEnd = baseHTML.indexOf(">",locChainSmImgTagStart);
				var locChainSmImgTagStrip = baseHTML.substring(locChainSmImgTagStart,(locChainSmImgTagEnd+1));
				var baseLocChainSmImgHTMLStart = baseHTML.substr(0,locChainSmImgTagStart);
				var baseLocChainSmImgHTMLEnd = baseHTML.substr((locChainSmImgTagEnd+1));
				if (storeDisplayArray[panel3storeNow][19] != "") {
					baseHTML = baseLocChainSmImgHTMLStart + "<img title=\"" + storeDisplayArray[panel3storeNow][0] + "\" alt=\"" + storeDisplayArray[panel3storeNow][0] + "\" id='panel3LocChainSmImg" + storeDisplayArray[panel3storeNow][13] + "' class='panel_3_loc_chain_sm_img' src='//" + endpointCDN + "/cms/images/" + storeDisplayArray[panel3storeNow][19] + "'>" + baseLocChainSmImgHTMLEnd;
				}
			}
			var localChainLinkTagStart = baseHTML.indexOf("<!--LOCALCHAINLINK");
			if (localChainLinkTagStart != -1) {
				var localChainLinkTagEnd = baseHTML.indexOf(">",localChainLinkTagStart);
				var localChainLinkTagStrip = baseHTML.substring(localChainLinkTagStart,(localChainLinkTagEnd+1));
				var baseLocalChainLinkHTMLStart = baseHTML.substr(0,localChainLinkTagStart);
				var baseLocalChainLinkHTMLEnd = baseHTML.substr((localChainLinkTagEnd+1));
				var baseLocalChainLinkVal = "";
				if (storeDisplayArray[panel3storeNow][24]!="") {
					var localChainLinkValueStart = localChainLinkTagStrip.indexOf(" VALUE=");
					if (localChainLinkValueStart != -1) {
						var localChainLinkValueEnd = localChainLinkTagStrip.indexOf("]");
						var baseLocalChainLinkText = localChainLinkTagStrip.substring((localChainLinkValueStart+8),(localChainLinkValueEnd));
					}
					else {
						var baseLocalChainLinkText = storeDisplayArray[panel3storeNow][24];
					}
					baseLocalChainLinkVal = "<a href='" + storeDisplayArray[panel3storeNow][24] + "' class='panel_3_local_chain_link' target='_blank'>" + baseLocalChainLinkText + "<\/a>";
				}
				baseHTML = baseLocalChainLinkHTMLStart + baseLocalChainLinkVal + baseLocalChainLinkHTMLEnd;
			}
			var locDetailNameTagStart = baseHTML.indexOf("<!--LOCNAME");
			if (locDetailNameTagStart != -1) {
				var locDetailNameTagEnd = baseHTML.indexOf(">",locDetailNameTagStart);
				var locDetailNameTagStrip = baseHTML.substring(locDetailNameTagStart,(locDetailNameTagEnd+1));
				var baseLocDetailNameHTMLStart = baseHTML.substr(0,locDetailNameTagStart);
				var baseLocDetailNameHTMLEnd = baseHTML.substr((locDetailNameTagEnd+1));
				baseHTML = baseLocDetailNameHTMLStart + "<div id='panel3LocName" + storeDisplayArray[panel3storeNow][13] + "' class='panel_3_loc_name'>" + storeDisplayArray[panel3storeNow][0] + "<\/div>" + baseLocDetailNameHTMLEnd;
			}
			var locDetailTwoNameTagStart = baseHTML.indexOf("<!--LOCTWONAME");
			if (locDetailTwoNameTagStart != -1) {
				var locDetailTwoNameTagEnd = baseHTML.indexOf(">",locDetailTwoNameTagStart);
				var locDetailTwoNameTagStrip = baseHTML.substring(locDetailTwoNameTagStart,(locDetailTwoNameTagEnd+1));
				var baseLocDetailTwoNameHTMLStart = baseHTML.substr(0,locDetailTwoNameTagStart);
				var baseLocDetailTwoNameHTMLEnd = baseHTML.substr((locDetailTwoNameTagEnd+1));
				baseHTML = baseLocDetailTwoNameHTMLStart + "<div id='panel3LocNameTwo" + storeDisplayArray[panel3storeNow][13] + "' class='panel_3_loc_name_two'>" + storeDisplayArray[panel3storeNow][0] + "<\/div>" + baseLocDetailTwoNameHTMLEnd;
			}
			var locDetailThreeNameTagStart = baseHTML.indexOf("<!--LOCTHREENAME");
			if (locDetailThreeNameTagStart != -1) {
				var locDetailThreeNameTagEnd = baseHTML.indexOf(">",locDetailThreeNameTagStart);
				var locDetailThreeNameTagStrip = baseHTML.substring(locDetailThreeNameTagStart,(locDetailThreeNameTagEnd+1));
				var baseLocDetailThreeNameHTMLStart = baseHTML.substr(0,locDetailThreeNameTagStart);
				var baseLocDetailThreeNameHTMLEnd = baseHTML.substr((locDetailThreeNameTagEnd+1));
				baseHTML = baseLocDetailThreeNameHTMLStart + "<div id='panel3LocNameThree" + storeDisplayArray[panel3storeNow][13] + "' class='panel_3_loc_name_three'>" + storeDisplayArray[panel3storeNow][0] + "<\/div>" + baseLocDetailThreeNameHTMLEnd;
			}
			var locDetailAddressTagStart = baseHTML.indexOf("<!--LOCADDRESS");
			if (locDetailAddressTagStart != -1) {
				var locDetailAddressTagEnd = baseHTML.indexOf(">",locDetailAddressTagStart);
				var locDetailAddressTagStrip = baseHTML.substring(locDetailAddressTagStart,(locDetailAddressTagEnd+1));
				var baseLocDetailAddressHTMLStart = baseHTML.substr(0,locDetailAddressTagStart);
				var baseLocDetailAddressHTMLEnd = baseHTML.substr((locDetailAddressTagEnd+1));
				baseHTML = baseLocDetailAddressHTMLStart + "<div id='panel3LocAddress" + storeDisplayArray[panel3storeNow][13] + "' class='panel_3_loc_address'>" + storeDisplayArray[panel3storeNow][1] + ", " + storeDisplayArray[panel3storeNow][3] + ", " + stateOut + " " + storeDisplayArray[panel3storeNow][5] + "<\/div>" + baseLocDetailAddressHTMLEnd;
			}
			var locDetailStreetTagStart = baseHTML.indexOf("<!--LOCSTREET");
			if (locDetailStreetTagStart != -1) {
				var locDetailStreetTagEnd = baseHTML.indexOf(">",locDetailStreetTagStart);
				var locDetailStreetTagStrip = baseHTML.substring(locDetailStreetTagStart,(locDetailStreetTagEnd+1));
				var baseLocDetailStreetHTMLStart = baseHTML.substr(0,locDetailStreetTagStart);
				var baseLocDetailStreetHTMLEnd = baseHTML.substr((locDetailStreetTagEnd+1));
				if (storeDisplayArray[panel3storeNow][1] != "") {
					baseHTML = baseLocDetailStreetHTMLStart + "<div id='panel3LocStreet" + storeDisplayArray[panel3storeNow][13] + "' class='panel_3_loc_street'>" + storeDisplayArray[panel3storeNow][1] + "<\/div>" + baseLocDetailStreetHTMLEnd;
				}
				else {
					baseHTML = baseLocDetailStreetHTMLStart + baseLocDetailStreetHTMLEnd;
				}
			}
			var locDetailTwoStreetTagStart = baseHTML.indexOf("<!--LOCTWOSTREET");
			if (locDetailTwoStreetTagStart != -1) {
				var locDetailTwoStreetTagEnd = baseHTML.indexOf(">",locDetailTwoStreetTagStart);
				var locDetailTwoStreetTagStrip = baseHTML.substring(locDetailTwoStreetTagStart,(locDetailTwoStreetTagEnd+1));
				var baseLocDetailTwoStreetHTMLStart = baseHTML.substr(0,locDetailTwoStreetTagStart);
				var baseLocDetailTwoStreetHTMLEnd = baseHTML.substr((locDetailTwoStreetTagEnd+1));
				if (storeDisplayArray[panel3storeNow][2] != "") {
					baseHTML = baseLocDetailTwoStreetHTMLStart + "<div id='panel3LocTwoStreet" + storeDisplayArray[panel3storeNow][13] + "' class='panel_3_loc_two_street'>" + storeDisplayArray[panel3storeNow][2] + "<\/div>" + baseLocDetailTwoStreetHTMLEnd;
				}
				else {
					baseHTML = baseLocDetailTwoStreetHTMLStart + baseLocDetailTwoStreetHTMLEnd;
				}
			}
			var locDetailCityTagStart = baseHTML.indexOf("<!--LOCCITY");
			if (locDetailCityTagStart != -1) {
				var locDetailCityTagEnd = baseHTML.indexOf(">",locDetailCityTagStart);
				var locDetailCityTagStrip = baseHTML.substring(locDetailCityTagStart,(locDetailCityTagEnd+1));
				var baseLocDetailCityHTMLStart = baseHTML.substr(0,locDetailCityTagStart);
				var baseLocDetailCityHTMLEnd = baseHTML.substr((locDetailCityTagEnd+1));
				if (storeDisplayArray[panel3storeNow][3] != "") {
					baseHTML = baseLocDetailCityHTMLStart + "<div id='panel3LocCity" + storeDisplayArray[panel3storeNow][13] + "' class='panel_3_loc_city'>" + storeDisplayArray[panel3storeNow][3] + "<\/div>" + baseLocDetailCityHTMLEnd;
				}
				else {
					baseHTML = baseLocDetailCityHTMLStart + baseLocDetailCityHTMLEnd;
				}
			}
			var locDetailStateTagStart = baseHTML.indexOf("<!--LOCSTATE");
			if (locDetailStateTagStart != -1) {
				var locDetailStateTagEnd = baseHTML.indexOf(">",locDetailStateTagStart);
				var locDetailStateTagStrip = baseHTML.substring(locDetailStateTagStart,(locDetailStateTagEnd+1));
				var baseLocDetailStateHTMLStart = baseHTML.substr(0,locDetailStateTagStart);
				var baseLocDetailStateHTMLEnd = baseHTML.substr((locDetailStateTagEnd+1));
				if (stateOut != "") {
					baseHTML = baseLocDetailStateHTMLStart + "<div id='panel3LocState" + storeDisplayArray[panel3storeNow][13] + "' class='panel_3_loc_state'>" + stateOut + "<\/div>" + baseLocDetailStateHTMLEnd;
				}
				else {
					baseHTML = baseLocDetailStateHTMLStart + baseLocDetailStateHTMLEnd;
				}
			}
			var locDetailZipTagStart = baseHTML.indexOf("<!--LOCZIP");
			if (locDetailZipTagStart != -1) {
				var locDetailZipTagEnd = baseHTML.indexOf(">",locDetailZipTagStart);
				var locDetailZipTagStrip = baseHTML.substring(locDetailZipTagStart,(locDetailZipTagEnd+1));
				var baseLocDetailZipHTMLStart = baseHTML.substr(0,locDetailZipTagStart);
				var baseLocDetailZipHTMLEnd = baseHTML.substr((locDetailZipTagEnd+1));
				if (storeDisplayArray[panel3storeNow][5] != "") {
					baseHTML = baseLocDetailZipHTMLStart + "<div id='panel3LocZip" + storeDisplayArray[panel3storeNow][13] + "' class='panel_3_loc_zip'>" + storeDisplayArray[panel3storeNow][5] + "<\/div>" + baseLocDetailZipHTMLEnd;
				}
				else {
					baseHTML = baseLocDetailZipHTMLStart + baseLocDetailZipHTMLEnd;
				}
			}
			var locDetailCountryTagStart = baseHTML.indexOf("<!--LOCCOUNTRY");
			if (locDetailCountryTagStart != -1) {
				var locDetailCountryTagEnd = baseHTML.indexOf(">",locDetailCountryTagStart);
				var locDetailCountryTagStrip = baseHTML.substring(locDetailCountryTagStart,(locDetailCountryTagEnd+1));
				var baseLocDetailCountryHTMLStart = baseHTML.substr(0,locDetailCountryTagStart);
				var baseLocDetailCountryHTMLEnd = baseHTML.substr((locDetailCountryTagEnd+1));
				if (storeDisplayArray[panel3storeNow][27] != "") {
					baseHTML = baseLocDetailCountryHTMLStart + "<div id='panel3LocCountry" + storeDisplayArray[panel3storeNow][13] + "' class='panel_3_loc_country'>" + storeDisplayArray[panel3storeNow][27] + "<\/div>" + baseLocDetailCountryHTMLEnd;
				}
				else {
					baseHTML = baseLocDetailCountryHTMLStart + baseLocDetailCountryHTMLEnd;
				}
			}
			var locDetailCSZTagStart = baseHTML.indexOf("<!--LOCCSZ");
			if (locDetailCSZTagStart != -1) {
				var locDetailCSZTagEnd = baseHTML.indexOf(">",locDetailCSZTagStart);
				var locDetailCSZTagStrip = baseHTML.substring(locDetailCSZTagStart,(locDetailCSZTagEnd+1));
				var baseLocDetailCSZHTMLStart = baseHTML.substr(0,locDetailCSZTagStart);
				var baseLocDetailCSZHTMLEnd = baseHTML.substr((locDetailCSZTagEnd+1));
				baseHTML = baseLocDetailCSZHTMLStart + "<div id='panel3LocCSZ" + storeDisplayArray[panel3storeNow][13] + "' class='panel_3_loc_csz'>" + storeDisplayArray[panel3storeNow][3] + ", " + stateOut + " " + storeDisplayArray[panel3storeNow][5] + "<\/div>" + baseLocDetailCSZHTMLEnd;
			}
			var locDetailWebTagStart = baseHTML.indexOf("<!--LOCWEB");
			if (locDetailWebTagStart != -1&& storeDisplayArray[panel3storeNow][22] !="") {
				var locDetailWebTagEnd = baseHTML.indexOf(">",locDetailWebTagStart);
				var locDetailWebTagStrip = baseHTML.substring(locDetailWebTagStart,(locDetailWebTagEnd+1));
				var baseLocDetailWebHTMLStart = baseHTML.substr(0,locDetailWebTagStart);
				var baseLocDetailWebHTMLEnd = baseHTML.substr((locDetailWebTagEnd+1));
				var baseLocDetailWebValueStart = locDetailWebTagStrip.indexOf(" VALUE=");
				var baseLocDetailWebValueEnd = locDetailWebTagStrip.indexOf("]");
				if (baseLocDetailWebValueStart != -1) {
					baseLocDetailWebValueVar = locDetailWebTagStrip.substring((baseLocDetailWebValueStart+8),(baseLocDetailWebValueEnd));
				}
				else {
					baseLocDetailWebValueVar = storeDisplayArray[panel3storeNow][22];
				}
				baseHTML = baseLocDetailWebHTMLStart + "<div id='panel6LocWeb" + storeDisplayArray[panel3storeNow][13] + "' class='panel_6_loc_web' onclick='storeWeb("+panel3storeNow+");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){storeWeb("+panel3storeNow+");}' tabindex='0' title=\"Visit Web Site\">" + baseLocDetailWebValueVar + "<\/div>" + baseLocDetailWebHTMLEnd;
			}
			var locListHoursTagStart = baseHTML.indexOf("<!--LOCHOURS");
			if (locListHoursTagStart != -1 && storeDisplayArray[panel3storeNow][23] != "") {
				var locListHoursTagEnd = baseHTML.indexOf(">",locListHoursTagStart);
				var locListHoursTagStrip = baseHTML.substring(locListHoursTagStart,(locListHoursTagEnd+1));
				var baseLocListHoursHTMLStart = baseHTML.substr(0,locListHoursTagStart);
				var baseLocListHoursHTMLEnd = baseHTML.substr((locListHoursTagEnd+1));
				var baseLocListHoursTypeVar = 3;
				var baseLocListHoursTypeStart = locListHoursTagStrip.indexOf(" DTYPE=");
				if (baseLocListHoursTypeStart != -1) {
					var baseLocListHoursTypeEnd = locListHoursTagStrip.indexOf("]",baseLocListHoursTypeStart);
					var baseLocListHoursTypeCheck = locListHoursTagStrip.substring((baseLocListHoursTypeStart+8),(baseLocListHoursTypeEnd));
					if (baseLocListHoursTypeCheck == "SHORT") {baseLocListHoursTypeVar = 1;}
					if (baseLocListHoursTypeCheck == "MED") {baseLocListHoursTypeVar = 2;}
					if (baseLocListHoursTypeCheck == "LONG") {baseLocListHoursTypeVar = 3;}
				}
				var baseLocListHoursValueVar = "LIST";
				var baseLocListHoursValueStart = locListHoursTagStrip.indexOf(" STYLE=");
				if (baseLocListHoursValueStart != -1) {
					var baseLocListHoursValueEnd = locListHoursTagStrip.indexOf("]",baseLocListHoursValueStart);
					baseLocListHoursValueVar = locListHoursTagStrip.substring((baseLocListHoursValueStart+8),(baseLocListHoursValueEnd));
				}
				var hoursBaseArray = storeDisplayArray[panel3storeNow][23].split("|");
				var hoursDayArray = [];
				for (h=0; h<hoursBaseArray.length; h++) {
					var hoursDayRaw = hoursBaseArray[h].substring(0,1);
					var hoursDayVal = "";
					for (hdr=0; hdr<daDayArray.length; hdr++) {
						if (hoursDayRaw.toUpperCase() == daDayArray[hdr][0]) {
							hoursDayVal = daDayArray[hdr][baseLocListHoursTypeVar];
							break;
						}
					}
					var hoursStartRaw = parseInt(hoursBaseArray[h].substring(1,5));
					var hoursStartVal = "";
					if (hoursStartRaw == 1200) {
						hoursStartVal = "Noon";
					}
					else if (hoursStartRaw == 0) {
						hoursStartVal = "Midnight";
					}
					else {
						var ampm = " am";
						if (hoursStartRaw > 1200) {
							hoursStartRaw -= 1200;
							ampm = " pm";
						}
						if (hoursStartRaw < 100) {
							hoursStartVal = "12:" + hoursStartRaw + ampm;
						}
						else {
							hoursStartText = hoursStartRaw + ampm;
							hoursStartMath = Math.floor(hoursStartRaw/100);
							hoursStartVal = hoursStartMath + ":" + hoursStartText.substr(-5);
						}
					}
					var hoursEndRaw = parseInt(hoursBaseArray[h].substring(5,9));
					var hoursEndVal = "";
					if (hoursEndRaw == 1200) {
						hoursEndVal = "Noon";
					}
					else if (hoursEndRaw == 0) {
						hoursEndVal = "Midnight";
					}
					else {
						var ampm = " am";
						if (hoursEndRaw > 1200) {
							hoursEndRaw -= 1200;
							ampm = " pm";
						}
						if (hoursEndRaw < 100) {
							hoursEndVal = "12:" + hoursEndRaw + ampm;
						}
						else {
							hoursEndText = hoursEndRaw + ampm;
							hoursEndMath = Math.floor(hoursEndRaw/100);
							hoursEndVal = hoursEndMath + ":" + hoursEndText.substr(-5);
						}
					}
					hoursDayArray[h] = [hoursDayVal, hoursStartVal, hoursEndVal];
				}
				var hoursWriteText = "";
				if (baseLocListHoursValueVar == "LIST") {
					var dayHolder = "";
					for (wth=0; wth<hoursDayArray.length; wth++) {
						if (dayHolder != hoursDayArray[wth][0]) {
							dayHolder = hoursDayArray[wth][0];
							var dayHolderDay = hoursDayArray[wth][0] + ":";
							if (wth != 0) {
								dayHolderDay = "<br>" + dayHolderDay;
							}
						}
						else {
							var dayHolderDay = ",";
						}
						hoursWriteText += dayHolderDay + " " + hoursDayArray[wth][1] + " - " + hoursDayArray[wth][2];
					}
				}
				baseHTML = baseLocListHoursHTMLStart + "<div class='panel_3_loc_hours_shell'>" + hoursWriteText + "<\/div>" + baseLocListHoursHTMLEnd;
			}
			var locDetailPhoneTagStart = baseHTML.indexOf("<!--LOCPHONE");
			if (locDetailPhoneTagStart != -1 && storeDisplayArray[panel3storeNow][15]!="") {
				var locDetailPhoneTagEnd = baseHTML.indexOf(">",locDetailPhoneTagStart);
				var locDetailPhoneTagStrip = baseHTML.substring(locDetailPhoneTagStart,(locDetailPhoneTagEnd+1));
				var locDetailPhoneHTMLStart = baseHTML.substr(0,locDetailPhoneTagStart);
				var locDetailPhoneHTMLEnd = baseHTML.substr((locDetailPhoneTagEnd+1));
				var locDetailPhoneRender = "";
				var locDetailPhoneValueStart = locDetailPhoneTagStrip.indexOf(" FORMAT=");
				var locDetailPhoneValueEnd = locDetailPhoneTagStrip.indexOf("]");
				if (locDetailPhoneValueStart != -1) {
					var locDetailPhoneValueVarTest = locDetailPhoneTagStrip.substring((locDetailPhoneValueStart+9),(locDetailPhoneValueEnd));
					var phoneSplit=storeDisplayArray[panel3storeNow][15].split("");
					for (p=0;p<phoneSplit.length;p++) {
						var thisHash = locDetailPhoneValueVarTest.indexOf("#");
						if (thisHash != -1) {
							locDetailPhoneValueVarTest = locDetailPhoneValueVarTest.substring(0,(thisHash))+phoneSplit[p]+locDetailPhoneValueVarTest.substring((thisHash+1));
						}
					}
					var locDetailPhoneValueVar = locDetailPhoneValueVarTest;
				}
				else {
					var locDetailPhoneValueVar = storeDisplayArray[panel3storeNow][15];
				}
				var locDetailPhoneRawStart = locDetailPhoneTagStrip.indexOf(" RAW");
				if (locDetailPhoneRawStart != -1) {
					var locDetailPhoneValueVar = storeDisplayArray[panel3storeNow][26];
				}
				locDetailPhoneRender += "<div id='panel3LocPhone" + storeDisplayArray[panel3storeNow][13] + "' class='panel_3_loc_phone'>";
				if (version=='WAP' || winWidth <= globalRespWidth) {
					locDetailPhoneRender += "<a href='tel:"+locDetailPhoneValueVar+"'>";
				}
				locDetailPhoneRender += locDetailPhoneValueVar;
				if (version=='WAP' || winWidth <= globalRespWidth) {
					locDetailPhoneRender += "</a>";
				}
				locDetailPhoneRender += "<\/div>";
				baseHTML = locDetailPhoneHTMLStart + locDetailPhoneRender + locDetailPhoneHTMLEnd;
			}
			var locDetailDistanceTagStart = baseHTML.indexOf("<!--LOCDISTANCE");
			if (locDetailDistanceTagStart != -1) {
				var locDetailDistanceTagEnd = baseHTML.indexOf(">",locDetailDistanceTagStart);
				var locDetailDistanceTagStrip = baseHTML.substring(locDetailDistanceTagStart,(locDetailDistanceTagEnd+1));
				var baseLocDetailDistanceHTMLStart = baseHTML.substr(0,locDetailDistanceTagStart);
				var baseLocDetailDistanceHTMLEnd = baseHTML.substr((locDetailDistanceTagEnd+1));
				var locDetailDistanceKMTest = locDetailDistanceTagStrip.indexOf(" KM");
				if (locDetailDistanceKMTest != -1 || forceKM == 1) {
					var baseMiles = parseFloat(storeDisplayArray[panel3storeNow][8]);
					var finalMiles = Math.round((baseMiles*1.60934)*100)/100;
					var finalFormat = "km";
				}
				else {
					var finalMiles = storeDisplayArray[panel3storeNow][8];
					var finalFormat = "mi";
				}
				var locDetailDistanceBlankTest = locDetailDistanceTagStrip.indexOf(" BLANK");
				if (locDetailDistanceBlankTest != -1) {
					var finalFormat = "";
				}
				baseHTML = baseLocDetailDistanceHTMLStart + "<div id='panel3LocDistance" + storeDisplayArray[panel3storeNow][13] + "' class='panel_3_loc_distance'>" + finalMiles + " " + finalFormat + "<\/div>" + baseLocDetailDistanceHTMLEnd;
			}
			var locDetailCountStart = baseHTML.indexOf("<!--LOCCOUNT");
			if (locDetailCountStart != -1) {
				var locDetailCountEnd = baseHTML.indexOf(">",locDetailCountStart);
				var locDetailCountStrip = baseHTML.substring(locDetailCountStart,(locDetailCountEnd+1));
				var locDetailCountHTMLStart = baseHTML.substr(0,locDetailCountStart);
				var locDetailCountHTMLEnd = baseHTML.substr((locDetailCountEnd+1));
				baseHTML = locDetailCountHTMLStart + prodWriteArray.length + locDetailCountHTMLEnd;
			}
			var locDetailCatNameTagStart = baseHTML.indexOf("<!--LOCCATNAME");
			if (locDetailCatNameTagStart != -1) {
				var locDetailCatNameTagEnd = baseHTML.indexOf(">",locDetailCatNameTagStart);
				var locDetailCatNameTagStrip = baseHTML.substring(locDetailCatNameTagStart,(locDetailCatNameTagEnd+1));
				var baseLocDetailCatNameHTMLStart = baseHTML.substr(0,locDetailCatNameTagStart);
				var baseLocDetailCatNameHTMLEnd = baseHTML.substr((locDetailCatNameTagEnd+1));
				var locListCatText = "";
				if (storeDisplayArray[panel3storeNow][14].indexOf(",") != -1) {
					var daCatNum = storeDisplayArray[panel3storeNow][14].substring(0,storeDisplayArray[panel3storeNow][14].indexOf(","));
				}
				else {
					var daCatNum = storeDisplayArray[panel3storeNow][14];
				}
				for (sc=0;sc<storeCatArray.length;sc++) {
					if (storeCatArray[sc][0] == daCatNum) {
						locDetailCatNameFound = storeCatArray[sc][1];
					}
				}
				baseHTML = baseLocDetailCatNameHTMLStart + "<div id='panel3LocCatName" + storeDisplayArray[panel3storeNow][13] + "' class='panel_3_loc_catname'>" + locDetailCatNameFound + "<\/div>" + baseLocDetailCatNameHTMLEnd;
			}
			var locDetailCatSmImgTagStart = baseHTML.indexOf("<!--LOCCATSMIMG");
			if (locDetailCatSmImgTagStart != -1) {
				var locDetailCatSmImgTagEnd = baseHTML.indexOf(">",locDetailCatSmImgTagStart);
				var locDetailCatSmImgTagStrip = baseHTML.substring(locDetailCatSmImgTagStart,(locDetailCatSmImgTagEnd+1));
				var baseLocDetailCatSmImgHTMLStart = baseHTML.substr(0,locDetailCatSmImgTagStart);
				var baseLocDetailCatSmImgHTMLEnd = baseHTML.substr((locDetailCatSmImgTagEnd+1));
				var locListCatText = "";
				if (storeDisplayArray[panel3storeNow][14].indexOf(",") != -1) {
					var daCatNum = storeDisplayArray[panel3storeNow][14].substring(0,storeDisplayArray[panel3storeNow][14].indexOf(","));
				}
				else {
					var daCatNum = storeDisplayArray[panel3storeNow][14];
				}
				for (sc=0;sc<storeCatArray.length;sc++) {
					if (storeCatArray[sc][0] == daCatNum) {
						locDetailCatSmImgFound = storeCatArray[sc][4];
					}
				}
				baseHTML = baseLocDetailCatSmImgHTMLStart + "<img title=\"" + storeDisplayArray[panel3storeNow][0] + "\" alt=\"" + storeDisplayArray[panel3storeNow][0] + "\" id='panel3LocCatSmImg" + storeDisplayArray[panel3storeNow][13] + "' class='panel_3_loc_catsmimg' src='" + coreURL + "images/" + locDetailCatSmImgFound + "'>" + baseLocDetailCatSmImgHTMLEnd;
			}
			var locDetailCatBigImgTagStart = baseHTML.indexOf("<!--LOCCATBIGIMG");
			if (locDetailCatBigImgTagStart != -1) {
				var locDetailCatBigImgTagEnd = baseHTML.indexOf(">",locDetailCatBigImgTagStart);
				var locDetailCatBigImgTagStrip = baseHTML.substring(locDetailCatBigImgTagStart,(locDetailCatBigImgTagEnd+1));
				var baseLocDetailCatBigImgHTMLStart = baseHTML.substr(0,locDetailCatBigImgTagStart);
				var baseLocDetailCatBigImgHTMLEnd = baseHTML.substr((locDetailCatBigImgTagEnd+1));
				var locListCatText = "";
				if (storeDisplayArray[panel3storeNow][14].indexOf(",") != -1) {
					var daCatNum = storeDisplayArray[panel3storeNow][14].substring(0,storeDisplayArray[panel3storeNow][14].indexOf(","));
				}
				else {
					var daCatNum = storeDisplayArray[panel3storeNow][14];
				}
				for (sc=0;sc<storeCatArray.length;sc++) {
					if (storeCatArray[sc][0] == daCatNum) {
						locDetailCatBigImgFound = storeCatArray[sc][3];
					}
				}
				baseHTML = baseLocDetailCatBigImgHTMLStart + "<img title=\"" + storeDisplayArray[panel3storeNow][0] + "\" alt=\"" + storeDisplayArray[panel3storeNow][0] + "\" id='panel3LocCatBigImg" + storeDisplayArray[panel3storeNow][13] + "' class='panel_3_loc_catbigimg' src='" + coreURL + "images/" + locDetailCatBigImgFound + "'>" + baseLocDetailCatBigImgHTMLEnd;
			}
			var locDetailPinTagStart = baseHTML.indexOf("<!--LOCPIN");
			if (locDetailPinTagStart != -1) {
				var locDetailPinTagEnd = baseHTML.indexOf(">",locDetailPinTagStart);
				var locDetailPinTagStrip = baseHTML.substring(locDetailPinTagStart,(locDetailPinTagEnd+1));
				var baseLocListPinHTMLStart = baseHTML.substr(0,locDetailPinTagStart);
				var baseLocListPinHTMLEnd = baseHTML.substr((locDetailPinTagEnd+1));
				if (pinIncr == 0) {
					var pinchoice = panel0Alphabet[panel3storeNow];
				}
				else {
					var pinchoice = parseInt(panel3storeNow);
				}
				if (panel2PMapPinType == 1 && foundPromo != -1) {
					var iconLetter = pinSource + "pins/" + promoArray[foundPromo][10] + "_" + pinchoice + "." + pinSuffix;
				}
				else if (panel2MapPinType == 1) {
					var daPinNum = storeDisplayArray[panel3storeNow][14];
					for (mp=0;mp<storeCatArray.length;mp++) {
						if (storeCatArray[mp][0] == daPinNum) {
							var iconLetter = pinSource + "pins/" + storeCatArray[mp][5] + "_" + pinchoice + "." + pinSuffix;
							break;
						}
					}
				}
				else {
					var iconLetter = pinSource + "pins/" + panel2PinChoice + "_" + pinchoice + "." + pinSuffix;
				}
				baseHTML = baseLocListPinHTMLStart + "<img title=\"" + iconLetter + "\" alt=\"" + iconLetter + "\" id='panel3LocPin" + storeDisplayArray[panel3storeNow][13] + "' class='panel_3_loc_pin' src='" + iconLetter + "'>" + baseLocListPinHTMLEnd;
			}
			var locListLetterTagStart = baseHTML.indexOf("<!--LOCLETTER");
			if (locListLetterTagStart != -1) {
				var locListLetterTagEnd = baseHTML.indexOf(">",locListLetterTagStart);
				var locListLetterTagStrip = baseHTML.substring(locListLetterTagStart,(locListLetterTagEnd+1));
				var baseLocListLetterHTMLStart = baseHTML.substr(0,locListLetterTagStart);
				var baseLocListLetterHTMLEnd = baseHTML.substr((locListLetterTagEnd+1));
				if (pinIncr == 0) {
					var pinchoice = panel0Alphabet[panel3storeNow];
				}
				else {
					var pinchoice = parseInt(panel3storeNow) + 1;
				}
				baseHTML = baseLocListLetterHTMLStart + "<div id='panel3LocLetter" + storeDisplayArray[panel3storeNow][13] + "' class='panel_3_loc_letter'>" + pinchoice + "<\/div>" + baseLocListLetterHTMLEnd;
			}
			var locDetailCatPinTagStart = baseHTML.indexOf("<!--LOCCATPIN");
			if (locDetailCatPinTagStart != -1) {
				var locDetailCatPinTagEnd = baseHTML.indexOf(">",locDetailCatPinTagStart);
				var locDetailCatPinTagStrip = baseHTML.substring(locDetailCatPinTagStart,(locDetailCatPinTagEnd+1));
				var baseLocDetailCatPinHTMLStart = baseHTML.substr(0,locDetailCatPinTagStart);
				var baseLocDetailCatPinHTMLEnd = baseHTML.substr((locDetailCatPinTagEnd+1));
				if (storeDisplayArray[panel3storeNow][14].indexOf(",") != -1) {
					var daCatNum = storeDisplayArray[panel3storeNow][14].substring(0,storeDisplayArray[panel3storeNow][14].indexOf(","));
				}
				else {
					var daCatNum = storeDisplayArray[panel3storeNow][14];
				}
				for (sc=0;sc<storeCatArray.length;sc++) {
					if (storeCatArray[sc][0] == daCatNum) {
						var locDetailCatPinFound = storeCatArray[sc][6];
					}
				}
				if (pinIncr == 0) {
					var pinchoice = panel0Alphabet[panel3storeNow];
				}
				else {
					var pinchoice = panel3storeNow + 1;
				}
				baseHTML = baseLocDetailCatPinHTMLStart + "<img alt=\"Pin\" id='panel3LocCatPin" + storeDisplayArray[panel3storeNow][13] + "' class='panel_3_loc_catpin' src='" + pinSource + "pins/" + locDetailCatPinFound + "_" + pinchoice + "." + pinSuffix + baseLocDetailCatPinHTMLEnd;
			}
			var prevTenButtonTagStart = baseHTML.indexOf("<!--PREVBUTTON");
			if (prevTenButtonTagStart != -1) {
				var prevTenButtonTagEnd = baseHTML.indexOf(">",prevTenButtonTagStart);
				var prevTenButtonTagStrip = baseHTML.substring(prevTenButtonTagStart,(prevTenButtonTagEnd+1));
				var prevTenButtonHTMLStart = baseHTML.substr(0,prevTenButtonTagStart);
				var prevTenButtonHTMLEnd = baseHTML.substr((prevTenButtonTagEnd+1));
				var prevTenButtonRender = "";
				var prevTenButtonValueStart = prevTenButtonTagStrip.indexOf(" VALUE=");
				if (prevTenButtonValueStart != -1) {
					var prevTenButtonValueEnd = prevTenButtonTagStrip.indexOf("]",prevTenButtonValueStart);
					var prevTenButtonValueVar = prevTenButtonTagStrip.substring((prevTenButtonValueStart+8),(prevTenButtonValueEnd));
				}
				else {
					var prevTenButtonValueVar = "PREVIOUS";
				}
				var prevTenButtonItalicStart = prevTenButtonTagStrip.indexOf(" FNTAW=");
				if (prevTenButtonItalicStart != -1) {
					var prevTenButtonItalicEnd = prevTenButtonTagStrip.indexOf("]",prevTenButtonItalicStart);
					var prevTenButtonItalicVar = "<i class='fa " + prevTenButtonTagStrip.substring((prevTenButtonItalicStart+8),(prevTenButtonItalicEnd)) + "'><\/i>";
				}
				else {
					var prevTenButtonItalicVar = "";
				}
				prevTenButtonRender += "<div id='panel3PrevButton' class='panel_3_prev_button panel_3_prev_button_off'";
				if (hoverState==1) {
					prevTenButtonRender += " onmouseover='panel3ButtonHover(\"panel3PrevButton\",\"panel_3_prev_button\",1);' onfocus='panel3ButtonHover(\"panel3PrevButton\",\"panel_3_prev_button\",1);' onmouseout='panel3ButtonHover(\"panel3PrevButton\",\"panel_3_prev_button\",0);' onblur='panel3ButtonHover(\"panel3PrevButton\",\"panel_3_prev_button\",0);'";
				}
				prevTenButtonRender += " onclick='panel3Prev();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3Prev();}' tabindex='0' title=\"" + prevTenButtonValueVar + "\">" + prevTenButtonItalicVar + prevTenButtonValueVar + "<\/div>";
				baseHTML = prevTenButtonHTMLStart + prevTenButtonRender + prevTenButtonHTMLEnd;
			}
			var nextTenButtonTagStart = baseHTML.indexOf("<!--NEXTBUTTON");
			if (nextTenButtonTagStart != -1) {
				var nextTenButtonTagEnd = baseHTML.indexOf(">",nextTenButtonTagStart);
				var nextTenButtonTagStrip = baseHTML.substring(nextTenButtonTagStart,(nextTenButtonTagEnd+1));
				var nextTenButtonHTMLStart = baseHTML.substr(0,nextTenButtonTagStart);
				var nextTenButtonHTMLEnd = baseHTML.substr((nextTenButtonTagEnd+1));
				var nextTenButtonRender = "";
				var nextTenButtonValueStart = nextTenButtonTagStrip.indexOf(" VALUE=");
				if (nextTenButtonValueStart != -1) {
					var nextTenButtonValueEnd = nextTenButtonTagStrip.indexOf("]",nextTenButtonValueStart);
					var nextTenButtonValueVar = nextTenButtonTagStrip.substring((nextTenButtonValueStart+8),(nextTenButtonValueEnd));
				}
				else {
					var nextTenButtonValueVar = "NEXT";
				}
				var nextTenButtonItalicStart = nextTenButtonTagStrip.indexOf(" FNTAW=");
				if (nextTenButtonItalicStart != -1) {
					var nextTenButtonItalicEnd = nextTenButtonTagStrip.indexOf("]",nextTenButtonItalicStart);
					var nextTenButtonItalicVar = "<i class='fa " + nextTenButtonTagStrip.substring((nextTenButtonItalicStart+8),(nextTenButtonItalicEnd)) + "'><\/i>";
				}
				else {
					var nextTenButtonItalicVar = "";
				}
				nextTenButtonRender += "<div id='panel3NextButton' class='panel_3_next_button panel_3_next_button_off'";
				if (hoverState==1) {
					nextTenButtonRender += " onmouseover='panel3ButtonHover(\"panel3NextButton\",\"panel_3_next_button\",1);' onfocus='panel3ButtonHover(\"panel3NextButton\",\"panel_3_next_button\",1);' onmouseout='panel3ButtonHover(\"panel3NextButton\",\"panel_3_next_button\",0);' onblur='panel3ButtonHover(\"panel3NextButton\",\"panel_3_next_button\",0);'";
				}
				nextTenButtonRender += " onclick='panel3Next();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3Next();}' tabindex='0' title=\"" + nextTenButtonValueVar + "\">" + nextTenButtonItalicVar + nextTenButtonValueVar + "<\/div>";
				baseHTML = nextTenButtonHTMLStart + nextTenButtonRender + nextTenButtonHTMLEnd;
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
					var backButtonValueVar = "BACK";
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
				backButtonRender += "<div id='panel3BackButton' class='panel_3_back_button panel_3_back_button_off'";
				if (hoverState==1) {
					backButtonRender += " onmouseover='panel3ButtonHover(\"panel3BackButton\",\"panel_3_back_button\",1);' onfocus='panel3ButtonHover(\"panel3BackButton\",\"panel_3_back_button\",1);' onmouseout='panel3ButtonHover(\"panel3BackButton\",\"panel_3_back_button\",0);' onblur='panel3ButtonHover(\"panel3BackButton\",\"panel_3_back_button\",0);'";
				}
				backButtonRender += " onclick='panel3Back(\""+backButtonPanelVar+"\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3Back(\""+backButtonPanelVar+"\");}' tabindex='0' title=\"" + backButtonValueVar + "\">" + backButtonItalicVar + backButtonValueVar + "<\/div>";
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
					var buttonBackValueVar = "BACK";
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
				buttonBackRender += "<div id='panel3ButtonBack' class='panel_3_button_back panel_3_button_back_off'";
				if (hoverState==1) {
					buttonBackRender += " onmouseover='panel3ButtonHover(\"panel3ButtonBack\",\"panel_3_button_back\",1);' onfocus='panel3ButtonHover(\"panel3ButtonBack\",\"panel_3_button_back\",1);' onmouseout='panel3ButtonHover(\"panel3ButtonBack\",\"panel_3_button_back\",0);' onblur='panel3ButtonHover(\"panel3ButtonBack\",\"panel_3_button_back\",0);'";
				}
				buttonBackRender += " onclick='panel3Back(\""+buttonBackPanelVar+"\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3Back(\""+buttonBackPanelVar+"\");}' tabindex='0' title=\"" + buttonBackValueVar + "\">" + buttonBackItalicVar + buttonBackValueVar + "<\/div>";
				baseHTML = buttonBackHTMLStart + buttonBackRender + buttonBackHTMLEnd;
			}
			var currentResultTagStart = baseHTML.indexOf("<!--CURRENTRESULT");
			if (currentResultTagStart != -1) {
				var currentResultNum = eval(document.getElementById('storeID').value);
				var currentResultTagEnd = baseHTML.indexOf(">",currentResultTagStart);
				var currentResultTagStrip = baseHTML.substring(currentResultTagStart,(currentResultTagEnd+1));
				var baseCurrentResultHTMLStart = baseHTML.substr(0,currentResultTagStart);
				var baseCurrentResultHTMLEnd = baseHTML.substr((currentResultTagEnd+1));
				baseHTML = baseCurrentResultHTMLStart + (currentResultNum+1) + baseCurrentResultHTMLEnd;
			}
			var resultsTotalTagStart = baseHTML.indexOf("<!--RESULTSTOTAL");
			if (resultsTotalTagStart != -1) {
				var resultsTotalTagEnd = baseHTML.indexOf(">",resultsTotalTagStart);
				var resultsTotalHTMLStart = baseHTML.substr(0,resultsTotalTagStart);
				var resultsTotalHTMLEnd = baseHTML.substr((resultsTotalTagEnd+1));
				baseHTML = resultsTotalHTMLStart + "<span id='panel3ResultsTotal'>" + storeDisplayArray.length + "<\/span>" + resultsTotalHTMLEnd;
			}
			var totalResultsTagStart = baseHTML.indexOf("<!--TOTALRESULTS");
			if (totalResultsTagStart != -1) {
				var totalResultsTagEnd = baseHTML.indexOf(">",totalResultsTagStart);
				var totalResultsTagStrip = baseHTML.substring(totalResultsTagStart,(totalResultsTagEnd+1));
				var baseTotalResultsHTMLStart = baseHTML.substr(0,totalResultsTagStart);
				var baseTotalResultsHTMLEnd = baseHTML.substr((totalResultsTagEnd+1));
				baseHTML = baseTotalResultsHTMLStart + "<span id='panel3ResultsTotal'>" + storeDisplayArray.length + "<\/span>" + baseTotalResultsHTMLEnd;
			}
			var resultsCompileTagStart = baseHTML.indexOf("<!--RESULTSCOMPILE");
			if (resultsCompileTagStart != -1) {
				var resultsCompileTagEnd = baseHTML.indexOf(">",resultsCompileTagStart);
				var resultsCompileHTMLStart = baseHTML.substr(0,resultsCompileTagStart);
				var resultsCompileHTMLEnd = baseHTML.substr((resultsCompileTagEnd+1));
				baseHTML = resultsCompileHTMLStart + "<span id='panel3ResultsCompile'>" + document.getElementById('addressCompile').value + "<\/span>" + resultsCompileHTMLEnd;
			}
			var resultsStreetTagStart = baseHTML.indexOf("<!--RESULTSSTREET");
			if (resultsStreetTagStart != -1) {
				var resultsStreetTagEnd = baseHTML.indexOf(">",resultsStreetTagStart);
				var resultsStreetHTMLStart = baseHTML.substr(0,resultsStreetTagStart);
				var resultsStreetHTMLEnd = baseHTML.substr((resultsStreetTagEnd+1));
				baseHTML = resultsStreetHTMLStart + "<span id='panel3ResultsStreet'>" + document.getElementById('revCodeStreet').value + "<\/span>" + resultsStreetHTMLEnd;
			}
			var resultsCityTagStart = baseHTML.indexOf("<!--RESULTSCITY");
			if (resultsCityTagStart != -1) {
				var resultsCityTagEnd = baseHTML.indexOf(">",resultsCityTagStart);
				var resultsCityHTMLStart = baseHTML.substr(0,resultsCityTagStart);
				var resultsCityHTMLEnd = baseHTML.substr((resultsCityTagEnd+1));
				baseHTML = resultsCityHTMLStart + "<span id='panel3ResultsCity'>" + document.getElementById('revCodeCity').value + "<\/span>" + resultsCityHTMLEnd;
			}
			var resultsStateTagStart = baseHTML.indexOf("<!--RESULTSSTATE");
			if (resultsStateTagStart != -1) {
				var resultsStateTagEnd = baseHTML.indexOf(">",resultsStateTagStart);
				var resultsStateHTMLStart = baseHTML.substr(0,resultsStateTagStart);
				var resultsStateHTMLEnd = baseHTML.substr((resultsStateTagEnd+1));
				baseHTML = resultsStateHTMLStart + "<span id='panel3ResultsState'>" + document.getElementById('revCodeState').value + "<\/span>" + resultsStateHTMLEnd;
			}
			var resultsZipTagStart = baseHTML.indexOf("<!--RESULTSZIP");
			if (resultsZipTagStart != -1) {
				var resultsZipTagEnd = baseHTML.indexOf(">",resultsZipTagStart);
				var resultsZipHTMLStart = baseHTML.substr(0,resultsZipTagStart);
				var resultsZipHTMLEnd = baseHTML.substr((resultsZipTagEnd+1));
				baseHTML = resultsZipHTMLStart + "<span id='panel3ResultsZip'>" + document.getElementById('revCodeZip').value + "<\/span>" + resultsZipHTMLEnd;
			}
			var resultsCountryTagStart = baseHTML.indexOf("<!--RESULTSCOUNTRY");
			if (resultsCountryTagStart != -1) {
				var resultsCountryTagEnd = baseHTML.indexOf(">",resultsCountryTagStart);
				var resultsCountryHTMLStart = baseHTML.substr(0,resultsCountryTagStart);
				var resultsCountryHTMLEnd = baseHTML.substr((resultsCountryTagEnd+1));
				baseHTML = resultsCountryHTMLStart + "<span id='panel2ResultsCountry'>" + document.getElementById('revCodeCountry').value + "<\/span>" + resultsCountryHTMLEnd;
			}
			var resultsGRawTagStart = baseHTML.indexOf("<!--RESULTSGRAW");
			if (resultsGRawTagStart != -1) {
				var resultsGRawTagEnd = baseHTML.indexOf(">",resultsGRawTagStart);
				var resultsGRawHTMLStart = baseHTML.substr(0,resultsGRawTagStart);
				var resultsGRawHTMLEnd = baseHTML.substr((resultsGRawTagEnd+1));
				baseHTML = resultsGRawHTMLStart + "<span id='panel2ResultsGRaw'>" + document.getElementById('GRAW').value + "<\/span>" + resultsGRawHTMLEnd;
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
								resultsProdlistWrite += "<span class='panel_3_results_prodlist_prod'>" + prodDisplayArray[bpl][2] + "<\/span>";
								break;
							}
						}
					}
				}
				else {
					resultsProdlistWrite = "<span class='panel_3_results_prodlist_prod'>" + resultsProdlistDefaultVal + "<\/span>";
				}
				baseHTML = resultsProdlistHTMLStart + "<span id='panel3ResultsProdlist'>" + resultsProdlistWrite + "<\/span>" + resultsProdlistHTMLEnd;
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
								resultsCatlistWrite += "<span class='panel_3_results_catlist_prod'>" + catArray[bcl][1] + "<\/span>";
								break;
							}
						}
					}
				}
				else {
					resultsCatlistWrite = "<span class='panel_3_results_catlist_prod'>" + resultsCatlistDefaultVal + "<\/span>";
				}
				baseHTML = resultsCatlistHTMLStart + "<span id='panel3ResultsCatlist'>" + resultsCatlistWrite + "<\/span>" + resultsCatlistHTMLEnd;
			}
			var dealTagStart = baseHTML.indexOf("<!--DEALS");
			if (dealTagStart != -1) {
				var dealTagEnd = baseHTML.indexOf(">",dealTagStart);
				var dealTagStrip = baseHTML.substring(dealTagStart,(dealTagEnd+1));
				var baseDealHTMLStart = baseHTML.substr(0,dealTagStart);
				var baseDealHTMLEnd = baseHTML.substr((dealTagEnd+1));
				if (thisDealOBJ.dealcount != 0) {
					var dealItalicStart = dealTagStrip.indexOf(" CLOSE=");
					if (dealItalicStart != -1) {
						var dealItalicEnd = dealTagStrip.indexOf("]",dealItalicStart);
						var dealCloseVal = "<div class='panel_3_deal_shell_close' style='cursor:pointer;' onclick='panel3CloseDealShell();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3CloseDealShell();}' tabindex='0' title=\"Open Deals\"><i class='fa " + dealTagStrip.substring((dealItalicStart+8),(dealItalicEnd)) + "'><\/i><\/div>";
					}
					else {
						var dealCloseVal = "";
					}
					var dealCloseTextStart = dealTagStrip.indexOf(" CLOSETEXT=");
					if (dealCloseTextStart != -1) {
						var dealCloseTextEnd = dealTagStrip.indexOf("]",dealCloseTextStart);
						var dealCloseTextVal = "<div class='panel_3_deal_shell_close_text' style='cursor:pointer;' onclick='panel3CloseDealShell();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3CloseDealShell();}' tabindex='0' title=\"Close\"><div class='panel_3_deal_shell_close_text_liner'>" + dealTagStrip.substring((dealCloseTextStart+12),(dealCloseTextEnd)) + "<\/div><\/div>";
					}
					else {
						var dealCloseTextVal = "";
					}
					var dealPrevStart = dealTagStrip.indexOf(" PREV=");
					if (dealPrevStart != -1) {
						var dealPrevEnd = dealTagStrip.indexOf("]",dealPrevStart);
						var dealPrevVal = dealTagStrip.substring((dealPrevStart+7),(dealPrevEnd));
					}
					else {
						var dealPrevVal = "";
					}
					var dealNextStart = dealTagStrip.indexOf(" NEXT=");
					if (dealNextStart != -1) {
						var dealNextEnd = dealTagStrip.indexOf("]",dealNextStart);
						var dealNextVal = dealTagStrip.substring((dealNextStart+7),(dealNextEnd));
					}
					else {
						var dealNextVal = "";
					}
					var foundDeals = 0;
					var baseDealZip = storeDisplayArray[panel3storeNow][5];
					var baseDealState = storeDisplayArray[panel3storeNow][4];
					var baseDealCountry = storeDisplayArray[panel3storeNow][27];
					for (d=0; d<thisDealOBJ.dealcount; d++) {
						for (dz=0; dz<thisDealOBJ.deal[d].zipcount; dz++) {
							if (thisDealOBJ.deal[d].zip[dz].code == baseDealZip) {
								foundDeals++;
								break;
							}
						}
					}
					var dealExFntawStart = dealTagStrip.indexOf(" EXITFNTAW=");
					if (dealExFntawStart != -1) {
						var dealExFntawEnd = dealTagStrip.indexOf("]",dealExFntawStart);
						var dealExFntawVal = dealTagStrip.substring((dealExFntawStart+12),(dealExFntawEnd));
					}
					else {
						var dealExFntawVal = "";
					}
					var dealExTxtStart = dealTagStrip.indexOf(" EXITTEXT=");
					if (dealExTxtStart != -1) {
						var dealExTxtEnd = dealTagStrip.indexOf("]",dealExTxtStart);
						var dealExTxtVal = dealTagStrip.substring((dealExTxtStart+11),(dealExTxtEnd));
					}
					else {
						var dealExTxtVal = "";
					}
					if (foundDeals != 0) {
						var dealShellHTML = autotextIt(p0TemplateSet.panel3DealHoverDiv,"panel3DealHover");
						if (dealShellHTML.length != -1) {
							var dealCountSearchOn = 1;
							while (dealCountSearchOn == 1) {
								var dealCountTagStart = dealShellHTML.indexOf("<!--DEALCOUNT");
								if (dealCountTagStart != -1) {
									var dealCountTagEnd = dealShellHTML.indexOf(">",dealCountTagStart);
									var dealCountTagStrip = dealShellHTML.substring(dealCountTagStart,(dealCountTagEnd+1));
									var dealCountHTMLStart = dealShellHTML.substr(0,dealCountTagStart);
									var dealCountHTMLEnd = dealShellHTML.substr((dealCountTagEnd+1));
									var dealHasText = 0;
									var dealSingularStart = dealCountTagStrip.indexOf(" SINGULAR=");
									if (dealSingularStart != -1) {
										var dealSingularEnd = dealCountTagStrip.indexOf("]",dealSingularStart);
										var dealSingularVar = " " + dealCountTagStrip.substring((dealSingularStart+11),(dealSingularEnd));
										if (dealSingularVar == " deal_banner_text_singular") {
											dealSingularVar = " " + dLiteDealBannerTS;
										}
										dealHasText = 1;
									}
									else {
										var dealSingularVar = "";
									}
									var dealPluralStart = dealCountTagStrip.indexOf(" PLURAL=");
									if (dealPluralStart != -1) {
										var dealPluralEnd = dealCountTagStrip.indexOf("]",dealPluralStart);
										var dealPluralVar = " " + dealCountTagStrip.substring((dealPluralStart+9),(dealPluralEnd));
										if (dealPluralVar == " deal_banner_text_plural") {
											dealPluralVar = " " + dLiteDealBannerTP;
										}
										dealHasText = 1;
									}
									else {
										var dealPluralVar = "";
									}
									var dealsText = "";
									if (dealHasText == 1) {
										if (foundDeals == 1) {dealsText = dealSingularVar;}
										else {dealsText = dealPluralVar;}
									}
									dealShellHTML = dealCountHTMLStart + "<span class='panel_3_deal_shell_count'><span class='panel_3_deal_shell_count_num'>" + foundDeals + "<\/span>" + dealsText + "<\/span>" + dealCountHTMLEnd;
								}
								else {
									dealCountSearchOn = 0;
								}
							}
							var dealBannerTagStart = dealShellHTML.indexOf("<!--DEALBANNER");
							if (dealBannerTagStart != -1) {
								var dealBannerTagEnd = dealShellHTML.indexOf(">",dealBannerTagStart);
								var dealBannerTagStrip = dealShellHTML.substring(dealBannerTagStart,(dealBannerTagEnd+1));
								var dealBannerHTMLStart = dealShellHTML.substr(0,dealBannerTagStart);
								var dealBannerHTMLEnd = dealShellHTML.substr((dealBannerTagEnd+1));
								if (dLiteDealBanner != "") {
									dealShellHTML = dealBannerHTMLStart + "<img alt=\"Browse Deals\" class='panel_3_deal_shell_banner' src='" + clientImgBase + dLiteDealBanner + "'>" + dealBannerHTMLEnd;
								}
								else {
									dealShellHTML = dealBannerHTMLStart + dealBannerHTMLEnd;
								}
							}
							var dealTextBeginOn = 1;
							while (dealTextBeginOn == 1) {
								var dealBannerTBTagStart = dealShellHTML.indexOf("<!--DEALTEXTBEGIN");
								if (dealBannerTBTagStart != -1) {
									var dealBannerTBTagEnd = dealShellHTML.indexOf(">",dealBannerTBTagStart);
									var dealBannerTBTagStrip = dealShellHTML.substring(dealBannerTBTagStart,(dealBannerTBTagEnd+1));
									var dealBannerTBHTMLStart = dealShellHTML.substr(0,dealBannerTBTagStart);
									var dealBannerTBHTMLEnd = dealShellHTML.substr((dealBannerTBTagEnd+1));
									if (dLiteDealBannerTB != "") {
										dealShellHTML = dealBannerTBHTMLStart + dLiteDealBannerTB + dealBannerTBHTMLEnd;
									}
									else {
										dealShellHTML = dealBannerTBHTMLStart + dealBannerTBHTMLEnd;
									}
								}
								else {
									dealTextBeginOn = 0;
								}
							}
							var dealTextEndOn = 1;
							while (dealTextEndOn == 1) {
								var dealBannerTETagStart = dealShellHTML.indexOf("<!--DEALTEXTEND");
								if (dealBannerTETagStart != -1) {
									var dealBannerTETagEnd = dealShellHTML.indexOf(">",dealBannerTETagStart);
									var dealBannerTETagStrip = dealShellHTML.substring(dealBannerTETagStart,(dealBannerTETagEnd+1));
									var dealBannerTEHTMLStart = dealShellHTML.substr(0,dealBannerTETagStart);
									var dealBannerTEHTMLEnd = dealShellHTML.substr((dealBannerTETagEnd+1));
									if (dLiteDealBannerTE != "") {
										dealShellHTML = dealBannerTEHTMLStart + dLiteDealBannerTE + dealBannerTEHTMLEnd;
									}
									else {
										dealShellHTML = dealBannerTEHTMLStart + dealBannerTEHTMLEnd;
									}
								}
								else {
									dealTextEndOn = 0;
								}
							}
						}
						baseHTML = baseDealHTMLStart + "<div id='panel3DealShell' class='panel_3_deal_shell'><div class='panel_3_deal_shell_liner'><div id='panel3DealShellContent' class='panel_3_deal_shell_content' onclick='showDeals(\"" + baseDealZip + "\", \"" + baseDealState + "\", \"" + baseDealCountry + "\", \"" + dealPrevVal + "\", \"" + dealNextVal + "\", \"" + dealExFntawVal + "\", \"" + dealExTxtVal + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){showDeals(\"" + baseDealZip + "\", \"" + baseDealState + "\", \"" + baseDealCountry + "\", \"" + dealPrevVal + "\", \"" + dealNextVal + "\", \"" + dealExFntawVal + "\", \"" + dealExTxtVal + "\");}' tabindex='0' title=\"Show Deals\">" + dealShellHTML + "<\/div>" + dealCloseVal + dealCloseTextVal + "<\/div><\/div>" + baseDealHTMLEnd;
					}
					else {
						baseHTML = baseDealHTMLStart + baseDealHTMLEnd;
						if(gLog==1){console.log("Deals -- None Compiled");}
					}
				}
				else {
					baseHTML = baseDealHTMLStart + baseDealHTMLEnd;
					if(gLog==1){console.log("Deals -- None Found");}
				}
			}
			if (winWidth > globalRespWidth) {
				var directionsMapSearchOn = 1;
				var directionsMapTagStart = baseHTML.indexOf("<!--DIRECTIONSMAP");
				if (directionsMapTagStart != -1) {
					var directionsMapTagEnd = baseHTML.indexOf(">",directionsMapTagStart);
					var directionsMapTagStrip = baseHTML.substring(directionsMapTagStart,(directionsMapTagEnd+1));
					var baseDirectionsMapHTMLStart = baseHTML.substr(0,directionsMapTagStart);
					var baseDirectionsMapHTMLEnd = baseHTML.substr((directionsMapTagEnd+1));
					baseHTML = baseDirectionsMapHTMLStart + "<div id='panel3DirectionsMap' class='panel_3_directions_map'><\/div>" + baseDirectionsMapHTMLEnd;
				}
				else {
					baseHTML += "<div id='panel3DirectionsMap' style='display:none'><\/div>";
				}
			}
			var directionsTextSearchOn = 1;
			var directionsTextTagStart = baseHTML.indexOf("<!--DIRECTIONSTEXT");
			if (directionsTextTagStart != -1) {
				var directionsTextTagEnd = baseHTML.indexOf(">",directionsTextTagStart);
				var directionsTextTagStrip = baseHTML.substring(directionsTextTagStart,(directionsTextTagEnd+1));
				var baseDirectionsTextHTMLStart = baseHTML.substr(0,directionsTextTagStart);
				var baseDirectionsTextHTMLEnd = baseHTML.substr((directionsTextTagEnd+1));
				var directionsTextOffStart = directionsTextTagStrip.indexOf(" OFF");
				if (p3GottaForce == 1) {
					if (panel3ForceDir == 1) {
						var directionsTextOffVar = "";
					}
					else {
						var directionsTextOffVar = " style='display:none;'";
					}
				}
				else {
					if (directionsTextOffStart != -1) {
						var directionsTextOffVar = " style='display:none;'";
					}
					else {
						var directionsTextOffVar = "";
					}
				}
				baseHTML = baseDirectionsTextHTMLStart + "<div id='panel3DirectionsText' class='panel_3_directions_text'" + directionsTextOffVar + "><\/div>" + baseDirectionsTextHTMLEnd;
			}
			var directionsTabTagStart = baseHTML.indexOf("<!--DIRECTIONSTAB");
			if (directionsTabTagStart != -1) {
				var directionsTabTagEnd = baseHTML.indexOf(">",directionsTabTagStart);
				var directionsTabTagStrip = baseHTML.substring(directionsTabTagStart,(directionsTabTagEnd+1));
				var directionsTabHTMLStart = baseHTML.substr(0,directionsTabTagStart);
				var directionsTabHTMLEnd = baseHTML.substr((directionsTabTagEnd+1));
				var directionsTabRender = "";
				var directionsTabOffStart = directionsTabTagStrip.indexOf(" OFF");
				if (p3GottaForce == 1) {
					if (panel3ForceDir == 1) {
						var directionsTabOffVar = " panel_3_directions_tab_on";
					}
					else {
						var directionsTabOffVar = " panel_3_directions_tab_off";
					}
				}
				else {
					if (directionsTabOffStart != -1) {
						var directionsTabOffVar = " panel_3_directions_tab_off";
					}
					else {
						var directionsTabOffVar = " panel_3_directions_tab_on";
					}
				}
				var directionsTabValueStart = directionsTabTagStrip.indexOf(" VALUE=");
				if (directionsTabValueStart != -1) {
					var directionsTabValueEnd = directionsTabTagStrip.indexOf("]",directionsTabValueStart);
					var directionsTabValueVar = directionsTabTagStrip.substring((directionsTabValueStart+8),(directionsTabValueEnd));
				}
				else {
					var directionsTabValueVar = "DIRECTIONS";
				}
				var directionsTabItalicStart = directionsTabTagStrip.indexOf(" FNTAW=");
				if (directionsTabItalicStart != -1) {
					var directionsTabItalicEnd = directionsTabTagStrip.indexOf("]",directionsTabItalicStart);
					var directionsTabItalicVar = "<i class='fa " + directionsTabTagStrip.substring((directionsTabItalicStart+8),(directionsTabItalicEnd)) + "'><\/i>";
				}
				else {
					var directionsTabItalicVar = "";
				}
				directionsTabRender += "<div id='panel3DirectionsTab' class='panel_3_directions_tab" + directionsTabOffVar + "'";
				if (hoverState==1) {
					directionsTabRender += " onmouseover='panel3ButtonHover(\"panel3DirectionsTab\",\"panel_3_directions_tab\",1);' onfocus='panel3ButtonHover(\"panel3DirectionsTab\",\"panel_3_directions_tab\",1);' onmouseout='panel3ButtonHover(\"panel3DirectionsTab\",\"panel_3_directions_tab\",0);' onblur='panel3ButtonHover(\"panel3DirectionsTab\",\"panel_3_directions_tab\",0);'";
				}
				directionsTabRender += " onclick='panel3Tab(\"panel3DirectionsTab\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3Tab(\"panel3DirectionsTab\");}' tabindex='0' title=\"" + directionsTabValueVar + "\">" + directionsTabItalicVar + directionsTabValueVar + "<\/div>";
				baseHTML = directionsTabHTMLStart + directionsTabRender + directionsTabHTMLEnd;
			}
			var productsTextSearchOn = 1;
			var productsTextTagStart = baseHTML.indexOf("<!--PRODUCTSTEXT");
			if (productsTextTagStart != -1) {
				var productsTextTagEnd = baseHTML.indexOf(">",productsTextTagStart);
				var productsTextTagStrip = baseHTML.substring(productsTextTagStart,(productsTextTagEnd+1));
				var baseProductsTextHTMLStart = baseHTML.substr(0,productsTextTagStart);
				var baseProductsTextHTMLEnd = baseHTML.substr((productsTextTagEnd+1));
				var productsTextFilterStart = productsTextTagStrip.indexOf(" BASEPROD");
				if (productsTextFilterStart != -1) {
					panel3ProdGet = 1;
				}
				var productsLabelSwitchStart = productsTextTagStrip.indexOf(" LABEL");
				if (productsLabelSwitchStart != -1) {
					panel3LabelSwitch = 1;
				}
				var productsLabelSwitchStart = productsTextTagStrip.indexOf(" CATLABEL");
				if (productsLabelSwitchStart != -1) {
					panel3LabelSwitch = 1;
					labelWithCat = 1;
				}
				var productsTextOffStart = productsTextTagStrip.indexOf(" OFF");
				if (p3GottaForce == 1) {
					if (panel3ForceProd == 1) {
						var productsTextOffVar = "";
					}
					else {
						var productsTextOffVar = " style='display:none;'";
					}
				}
				else {
					if (productsTextOffStart != -1) {
						var productsTextOffVar = " style='display:none;'";
					}
					else {
						var productsTextOffVar = "";
					}
				}
				var productsTextListStart = productsTextTagStrip.indexOf(" LIST=");
				if (productsTextListStart != -1) {
					var productsTextListEnd = productsTextTagStrip.indexOf("]",productsTextListStart);
					var productsTabListType = productsTextTagStrip.substring((productsTextListStart+7),(productsTextListEnd));
					if (productsTabListType == "INCLUDE") {
						panel3ShoppingList = 1;
					}
					else if (productsTabListType == "EXCLUDE") {
						panel3ShoppingList = 2;
					}
					else {
						panel3ShoppingList = 0;
					}
				}
				else {
					panel3ShoppingList = 0;
				}
				var productsTextSortStart = productsTextTagStrip.indexOf(" SORT=");
				if (productsTextSortStart != -1) {
					var productsTextSortEnd = productsTextTagStrip.indexOf("]",productsTextSortStart);
					var productsTabSortType = productsTextTagStrip.substring((productsTextSortStart+7),(productsTextSortEnd));
					panel3ProdListSort = productsTabSortType;
				}
				else {
					panel3ProdListSort = "NONE";
				}
				baseHTML = baseProductsTextHTMLStart + "<div id='panel3ProductsText' class='panel_3_products_text'" + productsTextOffVar + "><\/div>" + baseProductsTextHTMLEnd;
			}
			var productsTabTagStart = baseHTML.indexOf("<!--PRODUCTSTAB");
			if (productsTabTagStart != -1) {
				var productsTabTagEnd = baseHTML.indexOf(">",productsTabTagStart);
				var productsTabTagStrip = baseHTML.substring(productsTabTagStart,(productsTabTagEnd+1));
				var productsTabHTMLStart = baseHTML.substr(0,productsTabTagStart);
				var productsTabHTMLEnd = baseHTML.substr((productsTabTagEnd+1));
				var productsTabRender = "";
				var productsTabOffStart = productsTabTagStrip.indexOf(" OFF");
				if (p3GottaForce == 1) {
					if (panel3ForceProd == 1) {
						var productsTabOffVar = " panel_3_products_tab_on";
					}
					else {
						var productsTabOffVar = " panel_3_products_tab_off";
					}
				}
				else {
					if (productsTabOffStart != -1) {
						var productsTabOffVar = " panel_3_products_tab_off";
					}
					else {
						var productsTabOffVar = " panel_3_products_tab_on";
					}
				}
				var productsTabValueStart = productsTabTagStrip.indexOf(" VALUE=");
				if (productsTabValueStart != -1) {
					var productsTabValueEnd = productsTabTagStrip.indexOf("]",productsTabValueStart);
					var productsTabValueVar = productsTabTagStrip.substring((productsTabValueStart+8),(productsTabValueEnd));
				}
				else {
					var productsTabValueVar = "PRODUCTS";
				}
				var productsTabItalicStart = productsTabTagStrip.indexOf(" FNTAW=");
				if (productsTabItalicStart != -1) {
					var productsTabItalicEnd = productsTabTagStrip.indexOf("]",productsTabItalicStart);
					var productsTabItalicVar = "<i class='fa " + productsTabTagStrip.substring((productsTabItalicStart+8),(productsTabItalicEnd)) + "'><\/i>";
				}
				else {
					var productsTabItalicVar = "";
				}
				productsTabRender += "<div id='panel3ProductsTab' class='panel_3_products_tab" + productsTabOffVar + "'";
				if (hoverState==1) {
					productsTabRender += " onmouseover='panel3ButtonHover(\"panel3ProductsTab\",\"panel_3_products_tab\",1);' onfocus='panel3ButtonHover(\"panel3ProductsTab\",\"panel_3_products_tab\",1);' onmouseout='panel3ButtonHover(\"panel3ProductsTab\",\"panel_3_products_tab\",0);' onblur='panel3ButtonHover(\"panel3ProductsTab\",\"panel_3_products_tab\",0);'";
				}
				productsTabRender += " onclick='panel3Tab(\"panel3ProductsTab\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3Tab(\"panel3ProductsTab\");}' tabindex='0' title=\"" + productsTabValueVar + "\">" + productsTabItalicVar + productsTabValueVar + "<\/div>";
				baseHTML = productsTabHTMLStart + productsTabRender + productsTabHTMLEnd;
			}
			var emailTextSearchOn = 1;
			var emailTextTagStart = baseHTML.indexOf("<!--EMAILTEXT");
			if (emailTextTagStart != -1) {
				var emailTextTagEnd = baseHTML.indexOf(">",emailTextTagStart);
				var emailTextTagStrip = baseHTML.substring(emailTextTagStart,(emailTextTagEnd+1));
				var baseEmailTextHTMLStart = baseHTML.substr(0,emailTextTagStart);
				var baseEmailTextHTMLEnd = baseHTML.substr((emailTextTagEnd+1));
				var emailTextOffStart = emailTextTagStrip.indexOf(" OFF");
				if (p3GottaForce == 1) {
					if (panel3ForceEmail == 1) {
						var emailTextOffVar = "";
					}
					else {
						var emailTextOffVar = " style='display:none;'";
					}
				}
				else {
					if (emailTextOffStart != -1) {
						var emailTextOffVar = " style='display:none;'";
					}
					else {
						var emailTextOffVar = "";
					}
				}
				baseHTML = baseEmailTextHTMLStart + "<div id='panel3EmailText' class='panel_3_email_text'" + emailTextOffVar + "><\/div>" + baseEmailTextHTMLEnd;
			}
			var emailTabTagStart = baseHTML.indexOf("<!--EMAILTAB");
			if (emailTabTagStart != -1) {
				var emailTabTagEnd = baseHTML.indexOf(">",emailTabTagStart);
				var emailTabTagStrip = baseHTML.substring(emailTabTagStart,(emailTabTagEnd+1));
				var emailTabHTMLStart = baseHTML.substr(0,emailTabTagStart);
				var emailTabHTMLEnd = baseHTML.substr((emailTabTagEnd+1));
				var emailTabRender = "";
				var emailTabOffStart = emailTabTagStrip.indexOf(" OFF");
				if (p3GottaForce == 1) {
					if (panel3ForceEmail == 1) {
						var emailTabOffVar = " panel_3_email_tab_on";
					}
					else {
						var emailTabOffVar = " panel_3_email_tab_off";
					}
				}
				else {
					if (emailTabOffStart != -1) {
						var emailTabOffVar = " panel_3_email_tab_off";
					}
					else {
						var emailTabOffVar = " panel_3_email_tab_on";
					}
				}
				var emailTabValueStart = emailTabTagStrip.indexOf(" VALUE=");
				if (emailTabValueStart != -1) {
					var emailTabValueEnd = emailTabTagStrip.indexOf("]",emailTabValueStart);
					var emailTabValueVar = emailTabTagStrip.substring((emailTabValueStart+8),(emailTabValueEnd));
				}
				else {
					var emailTabValueVar = "EMAIL";
				}
				var emailTabItalicStart = emailTabTagStrip.indexOf(" FNTAW=");
				if (emailTabItalicStart != -1) {
					var emailTabItalicEnd = emailTabTagStrip.indexOf("]",emailTabItalicStart);
					var emailTabItalicVar = "<i class='fa " + emailTabTagStrip.substring((emailTabItalicStart+8),(emailTabItalicEnd)) + "'><\/i>";
				}
				else {
					var emailTabItalicVar = "";
				}
				emailTabRender += "<div id='panel3EmailTab' class='panel_3_email_tab" + emailTabOffVar + "'";
				if (hoverState==1) {
					emailTabRender += " onmouseover='panel3ButtonHover(\"panel3EmailTab\",\"panel_3_email_tab\",1);' onfocus='panel3ButtonHover(\"panel3EmailTab\",\"panel_3_email_tab\",1);' onmouseout='panel3ButtonHover(\"panel3EmailTab\",\"panel_3_email_tab\",0);' onblur='panel3ButtonHover(\"panel3EmailTab\",\"panel_3_email_tab\",0);'";
				}
				emailTabRender += " onclick='panel3Tab(\"panel3EmailTab\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3Tab(\"panel3EmailTab\");}' tabindex='0' title=\"" + emailTabValueVar + "\">" + emailTabItalicVar + emailTabValueVar + "<\/div>";
				baseHTML = emailTabHTMLStart + emailTabRender + emailTabHTMLEnd;
			}
			var onretTagStart = baseHTML.indexOf("<!--ONLINERETAILERRESULTS");
			if (onretTagStart != -1 && onretOn == 1) {
				var onretTagEnd = baseHTML.indexOf(">",onretTagStart);
				var onretTagStrip = baseHTML.substring(onretTagStart,(onretTagEnd+1));
				var onretHTMLStart = baseHTML.substr(0,onretTagStart);
				var onretHTMLEnd = baseHTML.substr((onretTagEnd+1));
				var onretCombineStart = onretTagStrip.indexOf(" COMBINE");
				if (onretCombineStart != -1) {
					panel3OnRetCombine = 1;
				}
				var panel3OnRetStyleStart = onretTagStrip.indexOf(" TYPE=");
				if (panel3OnRetStyleStart != -1) {
					var panel3OnRetStyleEnd = onretTagStrip.indexOf("]",panel3OnRetStyleStart);
					panel3OnRetStyle = onretTagStrip.substring((panel3OnRetStyleStart+8),(panel3OnRetStyleEnd));
				}
				if (panel3OnRetState == 0) {
					var retShow = " style='display:none;'";
				}
				else {
					var retShow = "";
				}
				baseHTML = onretHTMLStart + "<div id='panel3OnRetResultsShell' class='panel_2_onret_results_shell'" + retShow + "><\/div>" + onretHTMLEnd;
			}
			var onretselTagStart = baseHTML.indexOf("<!--ONLINERETAILERSELECT");
			if (onretselTagStart != -1 && onretOn == 1) {
				var onretselTagEnd = baseHTML.indexOf(">",onretselTagStart);
				var onretselTagStrip = baseHTML.substring(onretselTagStart,(onretselTagEnd+1));
				var onretselHTMLStart = baseHTML.substr(0,onretselTagStart);
				var onretselHTMLEnd = baseHTML.substr((onretselTagEnd+1));
				baseHTML = onretselHTMLStart + "<div id='panel3OnRetSelectShell' class='panel_2_onret_select_shell'><\/div>" + onretselHTMLEnd;
			}
			if (isIE) {
				baseHTML = baseHTML.replace(/\/\*/g,"");
			}
			document.getElementById('panel3templates').innerHTML = baseHTML;
			if (onretOn == 1) {
				if (document.getElementById('panel3OnRetResultsShell') && document.getElementById('panel3OnRetSelectShell')) {
					panel3WriteOnlineRetailer();
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
			if (document.getElementById('panel3DirectionsMap')) {
				if (pinIncr == 0) {
					var pinchoice = panel0Alphabet[panel3storeNow];
				}
				else {
					var pinchoice = parseInt(panel3storeNow) + 1;
				}
				var iconLetter = pinSource + "pins/" + panel2PinChoice + "_" + pinchoice + "." + pinSuffix;
				if (panel2PMapPinType == 1 && foundPromo != -1) {
					iconLetter = pinSource + "pins/" + promoArray[foundPromo][10] + "_" + pinchoice + "." + pinSuffix;
				}
				else if (panel2MapPinType == 1) {
					var daCatNum = storeDisplayArray[panel3storeNow][14];
					for (sc=0;sc<storeCatArray.length;sc++) {
						if (storeCatArray[sc][0] == daCatNum) {
							iconLetter = pinSource + "pins/" + storeCatArray[sc][5] + "_" + pinchoice + "." + pinSuffix;
							break;
						}
					}
				}
				setTimeout(function(){
					if (directionsStep==0) {
						if (p3DirHasMap == 0 && winWidth <= globalRespWidth) {
							panel3CalcRouteNoMap();
						}
						else {
							panel3CalcRoute(iconLetter);
						}
					}
					else {
						if (hidePanels == 1) {
							panel3DrawMultiMap();
						}
						panel3WriteDirectionsText();
					}
				}, 150);
			}
			if (cPanelOp == 1) {
				if (document.getElementById("PROD").value.length == document.getElementById("FULLPROD").value.length || document.getElementById("PROD").value.length == "") {
					controlPanelClearCart();
				}
			}
			if (cpP3 != 0 && cpWritten == 0) {
				cpWrite();
			}
			if (cpsP3 != 0 && cpsWritten == 0) {
				cpSmallWrite();
			}
			if (P3B) {
				setTimeout(function(){
					panel3Tab(P3B);
				}, 150);
			}
			if (document.getElementById('panel3ProductsText')) {
				setTimeout(function(){
					panel3WriteProducts();
				}, 150);
			}
			if (document.getElementById('panel3EmailText')) {
				setTimeout(function(){
					panel3WriteEmail();
				}, 150);
			}
			if (document.getElementById('panel3ProdShopCartShell')) {
				setTimeout(function(){
					panel3WriteProdCart();
					panel2WriteProdCart();
				}, 150);
			}
			if (document.getElementById('panel3AddressField')) {
				if (document.getElementById('revCodeCompile').value != "") {
					if($('#panel3AddressField').hasClass('enforce_blank')){}else{
						document.getElementById('panel3AddressField').value = document.getElementById('revCodeCompile').value;
					}
				}
			}
			if (document.getElementById('panel3CityField')) {
				if (document.getElementById('city').value != "") {
					document.getElementById('panel3CityField').value = document.getElementById('city').value;
				}
			}
			if (document.getElementById('panel3StateField')) {
				if (document.getElementById('state').value != "") {
					document.getElementById('panel3StateField').value = document.getElementById('state').value;
				}
			}
			if (document.getElementById('panel3ZipField')) {
				if (document.getElementById('zip').value != "") {
					document.getElementById('panel3ZipField').value = document.getElementById('zip').value;
				}
			}
			panelSwitch("panel2","panel3",transNext);
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
			var storeProdSub = [];
			for (p=0; p<prodWriteArray.length; p++) {
				storeProdSub.push(prodWriteArray[p][0]);
			}
			if (trackVal == 1 && allOnOne == 0) {
				setTimeout(function(){
					var locTrackArr = new Array(3,6);
					var storeTrackJSON = '1;;' + storeDisplayArray[panel3storeNow][16] + ';;' + storeDisplayArray[panel3storeNow][6] + ';;' + storeDisplayArray[panel3storeNow][7] + ';;' + storeDisplayArray[panel3storeNow][0].replace(/"/g, '') + ';;' + storeDisplayArray[panel3storeNow][1].replace(/"/g, '') + ';;' + storeDisplayArray[panel3storeNow][2].replace(/"/g, '') + ';;' + storeDisplayArray[panel3storeNow][3] + ';;' + storeDisplayArray[panel3storeNow][4] + ';;' + storeDisplayArray[panel3storeNow][5] + ';;' + storeDisplayArray[panel3storeNow][27] + ';;' + storeProdSub.toString(',');
					$.post(controlURL + "tracktest.php", {
						CB: noCache,
						TLL: tlVal,
						A1: trackVal,
						UP1: "PANEL3",
						UC1: "STORE",
						UCS1: "DETAIL",
						US1: "SUCCESS",
						USRC1: version,
						CLIENT: coreClient,
						ITER: iteration,
						DEVICE: deviceType,
						REF: referer,
						SESSID: daSESSID,
						LOCATION: '{"compiled_location":"' + document.getElementById('addressCompile').value.replace(/"/g, '') + '","latitude":"' + parseFloat(document.getElementById('LA').value).toFixed(5) + '","longitude":"' + parseFloat(document.getElementById('LO').value).toFixed(5) + '","city":"' + document.getElementById('revCodeCity').value.replace(/"/g, '') + '","state":"' + document.getElementById('revCodeState').value + '","zip":"' + document.getElementById('revCodeZip').value + '","country":"' + document.getElementById('revCodeCountry').value + '","us_code":"' + document.getElementById('revCodeUS').value + '"}',
						STORE: storeTrackJSON,
						STORECOUNT: 1,
						PLIST: compProdVal,
						PSET: prodSetVal,
						TRACK: locTrackArr.toString(","),
						DUTV: dutv
						}, function(data){
							if(gLog==1){console.log("panel3Load - tracktest: " , JSON.parse(data));}
						}
					);
				},1000);
			}
			else if (trackVal == 2 && allOnOne == 0) {
				setTimeout(function(){
					var sendObj = setTrackObj();
					sendObj['TRK'] = "3,6";
					sendObj['RQF'] = "panel3Load";
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
					sendObj['STR'][0]['FED'] = storeDisplayArray[panel3storeNow][16];
					sendObj['STR'][0]['LAT'] = storeDisplayArray[panel3storeNow][6];
					sendObj['STR'][0]['LNG'] = storeDisplayArray[panel3storeNow][7];
					sendObj['STR'][0]['NAM'] = storeDisplayArray[panel3storeNow][0];
					sendObj['STR'][0]['ADD'] = storeDisplayArray[panel3storeNow][1];
					sendObj['STR'][0]['ADT'] = storeDisplayArray[panel3storeNow][2];
					sendObj['STR'][0]['CTY'] = storeDisplayArray[panel3storeNow][3];
					sendObj['STR'][0]['STA'] = storeDisplayArray[panel3storeNow][4];
					sendObj['STR'][0]['ZIP'] = storeDisplayArray[panel3storeNow][5];
					sendObj['STR'][0]['CNT'] = storeDisplayArray[panel3storeNow][27];
					sendObj['STR'][0]['PRD'] = storeProdSub.toString(',');
					sendObj['STC'] = 1;
					sendTrackObj(sendObj);
				},300);
			}
		}
	}
	else {
		p4Connect();
	}
	$(".panel_close_me").hide();
	whatPanelUp = "panel3";
	if (pmReady == 0) {
		pmReady = 1;
		if (enableResize == 2) {
			parent.postMessage("LOAD:1",refurl);
		}
	}
}
function panel3FamImgReplace(whatState,whatID) {
	if (whatState == 1) {
		if (document.getElementById('panel3FamilyBigImgDivBack'+whatID) && $(".panel_3_family_big_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_3_family_big_img_div_over_"+whatID).show();
			$(".panel_3_family_big_img_div_back_"+whatID).removeClass('panel_3_family_big_img_div_back_off');
			$(".panel_3_family_big_img_div_back_"+whatID).addClass('panel_3_family_big_img_div_back_on');
		}
		if (document.getElementById('panel3FamilySmImgDivBack'+whatID) && $(".panel_3_family_sm_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_3_family_sm_img_div_over_"+whatID).show();
			$(".panel_3_family_sm_img_div_back_"+whatID).removeClass('panel_3_family_sm_img_div_back_off');
			$(".panel_3_family_sm_img_div_back_"+whatID).addClass('panel_3_family_sm_img_div_back_on');
		}
	}
	else {
		if (document.getElementById('panel3FamilyBigImgDivBack'+whatID) && $(".panel_3_family_big_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_3_family_big_img_div_over_"+whatID).hide();
			$(".panel_3_family_big_img_div_back_"+whatID).addClass('panel_3_family_big_img_div_back_off');
			$(".panel_3_family_big_img_div_back_"+whatID).removeClass('panel_3_family_big_img_div_back_on');
		}
		if (document.getElementById('panel3FamilySmImgDivBack'+whatID) && $(".panel_3_family_sm_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_3_family_sm_img_div_over_"+whatID).hide();
			$(".panel_3_family_sm_img_div_back_"+whatID).addClass('panel_3_family_sm_img_div_back_off');
			$(".panel_3_family_sm_img_div_back_"+whatID).removeClass('panel_3_family_sm_img_div_back_on');
		}
	}
}
function panel3CatImgReplace(whatState,whatID) {
	if (whatState == 1) {
		if (document.getElementById('panel3CategoryBigImgDivBack'+whatID) && $(".panel_3_category_big_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_3_category_big_img_div_over_"+whatID).show();
			$(".panel_3_category_big_img_div_back_"+whatID).removeClass('panel_3_category_big_img_div_back_off');
			$(".panel_3_category_big_img_div_back_"+whatID).addClass('panel_3_category_big_img_div_back_on');
		}
		if (document.getElementById('panel3CategorySmImgDivBack'+whatID) && $(".panel_3_category_sm_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_3_category_sm_img_div_over_"+whatID).show();
			$(".panel_3_category_sm_img_div_back_"+whatID).removeClass('panel_3_category_sm_img_div_back_off');
			$(".panel_3_category_sm_img_div_back_"+whatID).addClass('panel_3_category_sm_img_div_back_on');
		}
	}
	else {
		if (document.getElementById('panel3CategoryBigImgDivBack'+whatID) && $(".panel_3_category_big_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_3_category_big_img_div_over_"+whatID).hide();
			$(".panel_3_category_big_img_div_back_"+whatID).addClass('panel_3_category_big_img_div_back_off');
			$(".panel_3_category_big_img_div_back_"+whatID).removeClass('panel_3_category_big_img_div_back_on');
		}
		if (document.getElementById('panel3CategorySmImgDivBack'+whatID) && $(".panel_3_category_sm_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_3_category_sm_img_div_over_"+whatID).hide();
			$(".panel_3_category_sm_img_div_back_"+whatID).addClass('panel_3_category_sm_img_div_back_off');
			$(".panel_3_category_sm_img_div_back_"+whatID).removeClass('panel_3_category_sm_img_div_back_on');
		}
	}
}
var p3clickyFamImg = 0;
function panel3FamImgClick(whatID) {
	$(".panel_3_family_big_img_div_over").hide();
	$(".panel_3_family_big_img_div_back").addClass('panel_3_family_big_img_div_back_off');
	$(".panel_3_family_big_img_div_back").removeClass('panel_3_family_big_img_div_back_on');
	$(".panel_3_family_big_img_div_back").addClass('img_replace_active');
	$(".panel_3_family_big_img_div_back").removeClass('img_replace_static');
	$(".panel_3_family_sm_img_div_over").hide();
	$(".panel_3_family_sm_img_div_back").addClass('panel_3_family_sm_img_div_back_off');
	$(".panel_3_family_sm_img_div_back").removeClass('panel_3_family_sm_img_div_back_on');
	$(".panel_3_family_sm_img_div_back").addClass('img_replace_active');
	$(".panel_3_family_sm_img_div_back").removeClass('img_replace_static');
	if (whatID != p3clickyFamImg) {
		$(".panel_3_family_big_img_div_over_"+whatID).show();
		$(".panel_3_family_big_img_div_back_"+whatID).removeClass('panel_3_family_big_img_div_back_off');
		$(".panel_3_family_big_img_div_back_"+whatID).addClass('panel_3_family_big_img_div_back_on');
		$(".panel_3_family_big_img_div_back_"+whatID).addClass('img_replace_static');
		$(".panel_3_family_big_img_div_back_"+whatID).removeClass('img_replace_active');
		$(".panel_3_family_sm_img_div_over_"+whatID).show();
		$(".panel_3_family_sm_img_div_back_"+whatID).removeClass('panel_3_family_sm_img_div_back_off');
		$(".panel_3_family_sm_img_div_back_"+whatID).addClass('panel_3_family_sm_img_div_back_on');
		$(".panel_3_family_sm_img_div_back_"+whatID).addClass('img_replace_static');
		$(".panel_3_family_sm_img_div_back_"+whatID).removeClass('img_replace_active');
		p3clickyFamImg = whatID;
	}
	else {
		p3clickyFamImg = 0;
	}
}
var p3clickyCatImg = 0;
function panel3CatImgClick(whatID) {
	$(".panel_3_category_big_img_div_over").hide();
	$(".panel_3_category_big_img_div_back").addClass('panel_3_category_big_img_div_back_off');
	$(".panel_3_category_big_img_div_back").removeClass('panel_3_category_big_img_div_back_on');
	$(".panel_3_category_big_img_div_back").addClass('img_replace_active');
	$(".panel_3_category_big_img_div_back").removeClass('img_replace_static');
	$(".panel_3_category_sm_img_div_over").hide();
	$(".panel_3_category_sm_img_div_back").addClass('panel_3_category_sm_img_div_back_off');
	$(".panel_3_category_sm_img_div_back").removeClass('panel_3_category_sm_img_div_back_on');
	$(".panel_3_category_sm_img_div_back").addClass('img_replace_active');
	$(".panel_3_category_sm_img_div_back").removeClass('img_replace_static');
	if (whatID != p3clickyCatImg) {
		$(".panel_3_category_big_img_div_over_"+whatID).show();
		$(".panel_3_category_big_img_div_back_"+whatID).removeClass('panel_3_category_big_img_div_back_off');
		$(".panel_3_category_big_img_div_back_"+whatID).addClass('panel_3_category_big_img_div_back_on');
		$(".panel_3_category_big_img_div_back_"+whatID).addClass('img_replace_static');
		$(".panel_3_category_big_img_div_back_"+whatID).removeClass('img_replace_active');
		$(".panel_3_category_sm_img_div_over_"+whatID).show();
		$(".panel_3_category_sm_img_div_back_"+whatID).removeClass('panel_3_category_sm_img_div_back_off');
		$(".panel_3_category_sm_img_div_back_"+whatID).addClass('panel_3_category_sm_img_div_back_on');
		$(".panel_3_category_sm_img_div_back_"+whatID).addClass('img_replace_static');
		$(".panel_3_category_sm_img_div_back_"+whatID).removeClass('img_replace_active');
		p3clickyCatImg = whatID;
	}
	else {
		p3clickyCatImg = 0;
	}
}
function panel3ResetProducts(allon) {
	$('.panel_3_prodlist_reset').removeClass('panel_3_prodlist_reset_off');
	$('.panel_3_prodlist_reset').removeClass('panel_3_prodlist_reset_hover');
	$('.panel_3_prodlist_reset').addClass('panel_3_prodlist_reset_on');
	document.getElementById('PROD').value = prodSelString;
	if (allon) {
		var izDemOn = 1;
		for (y=0;y<prodFilterArray.length;y++) {
			if (prodFilterArray[y][9] == 0) {
				izDemOn = 0;
			}
		}
		prodCartArray.length = 0;
		if (panel3ResetFirstClick == 0) {
			panel3ResetFirstClick = 1;
			izDemOn = 0;
		}
		if (izDemOn == 1) {
			for (z=0;z<prodFilterArray.length;z++) {
				prodFilterArray[z][9] = 0;
			}
			$('.panel_3_product_name').removeClass('panel_3_product_name_hover');
			$('.panel_3_product_name').removeClass('panel_3_product_name_on');
			$('.panel_3_product_name').addClass('panel_3_product_name_off');
		}
		else {
			for (z=0;z<prodFilterArray.length;z++) {
				prodFilterArray[z][9] = 1;
				prodCartArray[z] = prodFilterArray[z][0];
			}
			$('.panel_3_product_name').removeClass('panel_3_product_name_hover');
			$('.panel_3_product_name').removeClass('panel_3_product_name_off');
			$('.panel_3_product_name').addClass('panel_3_product_name_on');
		}
		panel3WriteProdCart();
		panel3WriteProdCart();
	}
	else {
		if (panel3AllOffIsOn == 1) {
			for (y=0;y<prodDisplayArray.length;y++) {
				prodFilterArray[y] = prodDisplayArray[y];
				prodFilterArray[y][9] = 0;
			}
			for (y=0;y<catArray.length;y++) {
				catArray[y][6] = 0;
			}
			$('.panel_3_product_name').removeClass('panel_3_product_name_hover');
			$('.panel_3_product_name').removeClass('panel_3_product_name_on');
			$('.panel_3_product_name').addClass('panel_3_product_name_off');
			$('.panel_3_category_name').removeClass('panel_3_category_name_hover');
			$('.panel_3_category_name').removeClass('panel_3_category_name_on');
			$('.panel_3_category_name').addClass('panel_3_category_name_off');
		}
		else {
			for (y=0;y<prodDisplayArray.length;y++) {
				prodFilterArray[y] = prodDisplayArray[y];
				prodFilterArray[y][9] = 1;
			}
			for (y=0;y<catArray.length;y++) {
				catArray[y][6] = 1;
			}
			$('.panel_3_product_name').removeClass('panel_3_product_name_hover');
			$('.panel_3_product_name').removeClass('panel_3_product_name_off');
			$('.panel_3_product_name').addClass('panel_3_product_name_on');
			$('.panel_3_category_name').removeClass('panel_3_category_name_hover');
			$('.panel_3_category_name').removeClass('panel_3_category_name_off');
			$('.panel_3_category_name').addClass('panel_3_category_name_on');
		}
	}
	if (document.getElementById('panel3ProductName'+prodFilterArray[x][0])) {
		document.getElementById('panel3ProductName'+prodFilterArray[x][0]).style.display = "block";
	}
	if (document.getElementById('panel3ProductBigImg'+prodFilterArray[x][0])) {
		document.getElementById('panel3ProductBigImg'+prodFilterArray[x][0]).style.display = "block";
	}
	if (document.getElementById('panel3ProductSmImg'+prodFilterArray[x][0])) {
		document.getElementById('panel3ProductSmImg'+prodFilterArray[x][0]).style.display = "block";
	}
	for (w=0;w<prodFilterArray.length;w++) {
		$('.panel_3_prodlist_prodshell_'+prodFilterArray[w][0]).removeClass('panel_3_prodlist_prodshell_on');
		$('.panel_3_prodlist_prodshell_'+prodFilterArray[w][0]).addClass('panel_3_prodlist_prodshell_off');
		var j = document.getElementsByClassName('panel_3_prodlist_prodshell_'+prodFilterArray[w][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
	for (x=0;x<famArray.length;x++) {
		famArray[x][5] = 0;
		$('.panel_3_prodlist_famshell_'+famArray[x][0]).removeClass('panel_3_prodlist_famshell_on');
		$('.panel_3_prodlist_famshell_'+famArray[x][0]).addClass('panel_3_prodlist_famshell_off');
		var j = document.getElementsByClassName('panel_3_prodlist_famshell_'+famArray[x][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
	for (y=0;y<catArray.length;y++) {
		catArray[y][6] = 0;
		$('#panel3CategoryName'+catArray[y][0]).removeClass('panel_3_category_name_hover');
		$('#panel3CategoryName'+catArray[y][0]).removeClass('panel_3_category_name_on');
		$('#panel3CategoryName'+catArray[y][0]).addClass('panel_3_category_name_off');
		$('#panel3CategoryName'+catArray[y][0]+'All').removeClass('panel_3_category_name_all_hover');
		$('#panel3CategoryName'+catArray[y][0]+'All').removeClass('panel_3_category_name_all_on');
		$('#panel3CategoryName'+catArray[y][0]+'All').addClass('panel_3_category_name_all_off');
		$('.panel_3_prodlist_catshell_'+catArray[y][0]).removeClass('panel_3_prodlist_catshell_on');
		$('.panel_3_prodlist_catshell_'+catArray[y][0]).addClass('panel_3_prodlist_catshell_off');
		var j = document.getElementsByClassName('panel_3_prodlist_catshell_'+catArray[y][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
	for (z=0;z<labelArray.length;z++) {
		labelArray[z][3] = 0;
		$('.panel_3_prodlist_labelshell_'+labelArray[z][0]).removeClass('panel_3_prodlist_labelshell_on');
		$('.panel_3_prodlist_labelshell_'+labelArray[z][0]).addClass('panel_3_prodlist_labelshell_off');
		var j = document.getElementsByClassName('panel_3_prodlist_labelshell_'+labelArray[z][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
}
function panel3panel2Connect() {
	p2Connect();
}
function panel3panel3Connect(hoverButt) {
	if(gLog==1){console.log("panel3panel3Connect - START");}
	if (hoverButt) {
		p3Connect(hoverButt);
	}
	else {
		p3Connect();
	}
}
function panel3panel4Connect() {
	p4Connect();
}
function panel3CCReq() {
	p4Connect();
}
function panel3Store() {
	storePanelSRC = 3;
	FB.login(function(response) {}, {scope: 'email'});
}
function panel3RTReq() {
	p5Connect();
}
function panel3Back(panelVal) {
	if (locServe == 1) {
		p3DirSequence.length = 0;
	}
	whatPanelUp = panelVal;
	panelSwitch("panel3",panelVal,transNext);
	if (document.getElementById("revDirCompile")) {
		document.getElementById('revDirCompile').value = "";
	}
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
function panel3Tab(clickTab) {
	if (clickTab == "panel3ProductsTab") {
		$('#panel3ProductsTab').removeClass('panel_3_products_tab_hover');
		$('#panel3ProductsTab').removeClass('panel_3_products_tab_off');
		$('#panel3ProductsTab').addClass('panel_3_products_tab_on');
		$('#panel3DirectionsTab').removeClass('panel_3_directions_tab_on');
		$('#panel3DirectionsTab').removeClass('panel_3_directions_tab_hover');
		$('#panel3DirectionsTab').addClass('panel_3_directions_tab_off');
		$('#panel3DirectionsText').fadeOut(90);
		$('#panel3EmailTab').removeClass('panel_3_email_tab_on');
		$('#panel3EmailTab').removeClass('panel_3_email_tab_hover');
		$('#panel3EmailTab').addClass('panel_3_email_tab_off');
		$('#panel3EmailText').fadeOut(90);
		setTimeout(function(){
			$('#panel3ProductsText').fadeIn(100);
		},100);
	}
	else if (clickTab == "panel3DirectionsTab") {
		$('#panel3ProductsTab').removeClass('panel_3_products_tab_on');
		$('#panel3ProductsTab').removeClass('panel_3_products_tab_hover');
		$('#panel3ProductsTab').addClass('panel_3_products_tab_off');
		$('#panel3DirectionsTab').removeClass('panel_3_directions_tab_hover');
		$('#panel3DirectionsTab').removeClass('panel_3_directions_tab_off');
		$('#panel3DirectionsTab').addClass('panel_3_directions_tab_on');
		$('#panel3ProductsText').fadeOut(90);
		$('#panel3EmailTab').removeClass('panel_3_email_tab_on');
		$('#panel3EmailTab').removeClass('panel_3_email_tab_hover');
		$('#panel3EmailTab').addClass('panel_3_email_tab_off');
		$('#panel3EmailText').fadeOut(90);
		setTimeout(function(){
			$('#panel3DirectionsText').fadeIn(100);
		},100);
	}
	else if (clickTab == "panel3EmailTab") {
		$('#panel3ProductsTab').removeClass('panel_3_products_tab_on');
		$('#panel3ProductsTab').removeClass('panel_3_products_tab_hover');
		$('#panel3ProductsTab').addClass('panel_3_products_tab_off');
		$('#panel3ProductsText').fadeOut(90);
		$('#panel3DirectionsTab').removeClass('panel_3_directions_tab_hover');
		$('#panel3DirectionsTab').removeClass('panel_3_directions_tab_on');
		$('#panel3DirectionsTab').addClass('panel_3_directions_tab_onf');
		$('#panel3DirectionsText').fadeOut(90);
		$('#panel3EmailTab').removeClass('panel_3_email_tab_of');
		$('#panel3EmailTab').removeClass('panel_3_email_tab_hover');
		$('#panel3EmailTab').addClass('panel_3_email_tab_on');
		setTimeout(function(){
			$('#panel3EmailText').fadeIn(100);
		},100);
	}
}
function panel3CloseDealShell() {
	$(".panel_3_deal_shell").slideUp(150);
}
function panel3WriteEmail() {
	var baseHTML = autotextIt(p3TemplateSet.panel3EmailFieldDiv,"panel3EmailField");
	var emailFieldTagStart = baseHTML.indexOf("<!--EMAILFIELD");
	if (emailFieldTagStart != -1) {
		var emailFieldTagEnd = baseHTML.indexOf(">",emailFieldTagStart);
		var emailFieldTagStrip = baseHTML.substring(emailFieldTagStart,(emailFieldTagEnd+1));
		var emailFieldHTMLStart = baseHTML.substr(0,emailFieldTagStart);
		var emailFieldHTMLEnd = baseHTML.substr((emailFieldTagEnd+1));
		var emailFieldRender = "";
		var emailFieldNoCStart = emailFieldTagStrip.indexOf(" NOCLOSE");
		if (emailFieldNoCStart != -1) {
			var emailFieldNoClose = 1;
		}
		var emailFieldValueStart = emailFieldTagStrip.indexOf(" VALUE=");
		if (emailFieldValueStart != -1) {
			var emailFieldValueEnd = emailFieldTagStrip.indexOf("]");
			var emailFieldValueVal = emailFieldTagStrip.substring((emailFieldValueStart+8),(emailFieldValueEnd));
			var emailFieldValueVar = emailFieldValueVal;
			var emailFieldValueRender = " value='"+emailFieldValueVal+"'";
			var emailFieldFocusRender = " onfocus='fieldBlurFocus(\"panel3EmailField\",\""+emailFieldValueVal+"\",1";if(emailFieldNoClose==1){emailFieldFocusRender+=",1";}emailFieldFocusRender+=");'";
			var emailFieldBlurRender = " onblur='fieldBlurFocus(\"panel3EmailField\",\""+emailFieldValueVal+"\",0";if(emailFieldNoClose==1){emailFieldFocusRender+=",1";}emailFieldFocusRender+=");'";
		}
		else {
			var emailFieldValueVar = "";
			var emailFieldValueRender = "";
			var emailFieldFocusRender = "";
			var emailFieldBlurRender = "";
		}
		var emailFieldSubStart = emailFieldTagStrip.indexOf(" SUBMIT");
		if (emailFieldSubStart != -1) {
			var emailFieldSubRender = " onkeyup='panel3EmailKeypress(event,\"panel3EmailField\",1);'";
		}
		else {
			var emailFieldSubRender = " onkeyup='panel3EmailKeypress(event,\"panel3EmailField\",0);'";
		}
		emailFieldRender = "<input type='email' name='panel3EmailField' id='panel3EmailField' class='panel_3_email_field panel_3_email_field_base'" + emailFieldValueRender + emailFieldFocusRender + emailFieldBlurRender + emailFieldSubRender + " title=\"Email Address\">";
		baseHTML = emailFieldHTMLStart + emailFieldRender + emailFieldHTMLEnd;
	}
	var emailButtonTagStart = baseHTML.indexOf("<!--EMAILBUTTON");
	if (emailButtonTagStart != -1) {
		var emailButtonTagEnd = baseHTML.indexOf(">",emailButtonTagStart);
		var emailButtonTagStrip = baseHTML.substring(emailButtonTagStart,(emailButtonTagEnd+1));
		var emailButtonHTMLStart = baseHTML.substr(0,emailButtonTagStart);
		var emailButtonHTMLEnd = baseHTML.substr((emailButtonTagEnd+1));
		var emailButtonRender = "";
		var emailButtonValueStart = emailButtonTagStrip.indexOf(" VALUE=");
		if (emailButtonValueStart != -1) {
			var emailButtonValueEnd = emailButtonTagStrip.indexOf("]",emailButtonValueStart);
			var emailButtonValueVar = emailButtonTagStrip.substring((emailButtonValueStart+8),(emailButtonValueEnd));
		}
		else {
			var emailButtonValueVar = "SEND";
		}
		var emailButtonItalicStart = emailButtonTagStrip.indexOf(" FNTAW=");
		if (emailButtonItalicStart != -1) {
			var emailButtonItalicEnd = emailButtonTagStrip.indexOf("]",emailButtonItalicStart);
			var emailButtonItalicVar = "<i class='fa " + emailButtonTagStrip.substring((emailButtonItalicStart+8),(emailButtonItalicEnd)) + "'><\/i>";
		}
		else {
			var emailButtonItalicVar = "";
		}
		emailButtonRender += "<div id='panel3EmailButton' class='panel_3_email_button panel_3_email_button_off'";
		if (hoverState==1) {
			emailButtonRender += " onmouseover='panel3ButtonHover(\"panel3EmailButton\",\"panel_3_email_button\",1);' onfocus='panel3ButtonHover(\"panel3EmailButton\",\"panel_3_email_button\",1);' onmouseout='panel3ButtonHover(\"panel3EmailButton\",\"panel_3_email_button\",0);' onblur='panel3ButtonHover(\"panel3EmailButton\",\"panel_3_email_button\",0);'";
		}
		emailButtonRender += " onclick='panel3Email();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3Email();}' tabindex='0' title=\"" + emailButtonValueVar + "\">" + emailButtonItalicVar + emailButtonValueVar + "<\/div>";
		baseHTML = emailButtonHTMLStart + emailButtonRender + emailButtonHTMLEnd;
	}
 	document.getElementById('panel3EmailText').innerHTML = baseHTML;
}
function panel3WriteProducts() {
	if(gLog==1){console.log("panel3WriteProducts - START");}
	if (prodCartArray.length == 0) {
		if(gLog==1){console.log("panel3WriteProducts - prodCartArray.length == 0");}
		var testDaProd = document.getElementById('PROD').value;
		if (testDaProd.indexOf(",") != -1) {
			testDaProdArr = testDaProd.split(",");
		}
		else {
			testDaProdArr = new Array(document.getElementById('PROD').value);
		}
		for (tpa=0; tpa<testDaProdArr.length; tpa++) {
			for (tp=0; tp<prodDisplayArray.length; tp++) {
				if (prodDisplayArray[tp][1] == testDaProdArr[tpa]) {
					prodCartArray.push(prodDisplayArray[tp][0]);
					break;
				}
			}
		}
		if(gLog==1){console.log("panel3WriteProducts - prodCartArray: " + prodCartArray.toString(","));}
	}
	if (document.getElementById('panel3ProductsText') && prodWriteArray.length) {
		var prodWriteStripArray = [];
		var prodWriteListArray = [];
		if(gLog==1){console.log("panel3WriteProducts - panel3ShoppingList = " + panel3ShoppingList + " / prodWriteArray = " + prodWriteArray.length + " / prodCartArray = " + prodCartArray.length);}
		if(gLog==1){console.log("panel3WriteProducts - prodWriteArray/prodCartArray",prodWriteArray,prodCartArray);}
		lx = 0;
		sx = 0;
		for (x=0; x<prodWriteArray.length; x++) {
			var incLIt = 0;
			var incSIt = 0;
			if (panel3ShoppingList == 0) {
				incLIt = 0;
				incSIt = 1;
			}
			else {
				if (prodCartArray.length == 0) {
					incLIt = 1;
				}
				else {
					for (y=0;y<prodCartArray.length;y++) {
						if (prodCartArray[y] == prodWriteArray[x][0]) {
							incLIt = 1;
							break;
						}
					}
				}
				if (panel3ShoppingList == 1) {
					incSIt = 1;
				}
				else if (panel3ShoppingList == 2) {
					if (incLIt == 1) {
						incSIt = 0;
					}
					else {
						incSIt = 1;
					}
				}
			}
			if(gLog==1){console.log("panel3WriteProducts - incLIt/incSIt : " , incLIt , incSIt);}
			if (incLIt == 1) {
				prodWriteListArray[lx] = prodWriteArray[x];
				lx++;
			}
			if (incSIt == 1) {
				prodWriteStripArray[sx] = prodWriteArray[x];
				sx++;
			}
		}
		if(gLog==1){console.log("panel3WriteProducts - prodWriteListArray = " + prodWriteListArray.length);}
		if(gLog==1){console.log("panel3WriteProducts - prodWriteStripArray = " + prodWriteStripArray.length);}
		if (panel3ProdListSort == "ASC") {
			sortCol(prodWriteListArray, 2);
			sortCol(prodWriteStripArray, 2);
		}
		else if (panel3ProdListSort == "DESC") {
			sortCol(prodWriteListArray, 2, 1);
			sortCol(prodWriteStripArray, 2, 1);
		}
		var writeHTML = "";
		var llCouponHTML = "";
		if (storeDisplayArray[panel3storeNow][33] != "" && cpAPI != 0) {
			if (storeDisplayArray[panel3storeNow][33].coupons) {
				var coupIDIncr = 0;
				llCouponHTML = autotextIt(p0TemplateSet.couponLocDetailHeadDiv,"couponLocDetailHead");
				var coupStoreNameTagStart = llCouponHTML.indexOf("<!--STORENAME");
				if (coupStoreNameTagStart != -1) {
					var coupStoreNameTagEnd = llCouponHTML.indexOf(">",coupStoreNameTagStart);
					var coupStoreNameHTMLStart = llCouponHTML.substr(0,coupStoreNameTagStart);
					var coupStoreNameHTMLEnd = llCouponHTML.substr((coupStoreNameTagEnd+1));
					var coupStoreNameStrip = llCouponHTML.substring(coupStoreNameHTMLStart,(coupStoreNameHTMLEnd+1));
					llCouponHTML = coupStoreNameHTMLStart + "<span class='p2_ll_coupon_title'>" + storeDisplayArray[panel3storeNow][0] + "<\/span>" + coupStoreNameHTMLEnd;
				}
				for (coup in storeDisplayArray[panel3storeNow][33].coupons) {
					var llCouponHTMLTest = autotextIt(p0TemplateSet.couponLocDetailDiv,"couponLocDetail");
					var coupTitleTagStart = llCouponHTMLTest.indexOf("<!--TITLE");
					if (coupTitleTagStart != -1) {
						var coupTitleTagEnd = llCouponHTMLTest.indexOf(">",coupTitleTagStart);
						var coupTitleHTMLStart = llCouponHTMLTest.substr(0,coupTitleTagStart);
						var coupTitleHTMLEnd = llCouponHTMLTest.substr((coupTitleTagEnd+1));
						var coupTitleStrip = llCouponHTMLTest.substring(coupTitleHTMLStart,(coupTitleHTMLEnd+1));
						llCouponHTMLTest = coupTitleHTMLStart + "<span class='p2_ll_coupon_title'>" + storeDisplayArray[panel3storeNow][33].coupons[coup].title + "<\/span>" + coupTitleHTMLEnd;
					}
					var coupDescTagStart = llCouponHTMLTest.indexOf("<!--DESC");
					if (coupDescTagStart != -1) {
						var coupDescTagEnd = llCouponHTMLTest.indexOf(">",coupDescTagStart);
						var coupDescHTMLStart = llCouponHTMLTest.substr(0,coupDescTagStart);
						var coupDescHTMLEnd = llCouponHTMLTest.substr((coupDescTagEnd+1));
						var coupDescStrip = llCouponHTMLTest.substring(coupDescHTMLStart,(coupDescHTMLEnd+1));
						llCouponHTMLTest = coupDescHTMLStart + "<span class='p2_ll_coupon_description'>" + storeDisplayArray[panel3storeNow][33].coupons[coup].description + "<\/span>" + coupDescHTMLEnd;
					}
					var coupImageTagStart = llCouponHTMLTest.indexOf("<!--IMAGE");
					if (coupImageTagStart != -1 && storeDisplayArray[panel3storeNow][33].coupons[coup].campaignImageUrl != null) {
						var coupImageTagEnd = llCouponHTMLTest.indexOf(">",coupImageTagStart);
						var coupImageHTMLStart = llCouponHTMLTest.substr(0,coupImageTagStart);
						var coupImageHTMLEnd = llCouponHTMLTest.substr((coupImageTagEnd+1));
						var coupImageStrip = llCouponHTMLTest.substring(coupImageHTMLStart,(coupImageHTMLEnd+1));
						llCouponHTMLTest = coupImageHTMLStart + "<img title=\"" + storeDisplayArray[panel3storeNow][0] + "\" alt=\"" + storeDisplayArray[panel3storeNow][0] + "\" class='p2_ll_coupon_img' src='" + storeDisplayArray[panel3storeNow][33].coupons[coup].campaignImageUrl + "'>" + coupImageHTMLEnd;
					}
					llCouponHTML += "<div id='getCouponList"+coupIDIncr+"' class='get_coupon_detail get_coupon_detail_"+coupIDIncr+" get_coupon_detail_"+coupIDIncr+"_off' onclick='couponModal(" + panel3storeNow + ",\"" + storeDisplayArray[panel3storeNow][33].coupons[coup].id + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){couponModal(" + panel3storeNow + ",\"" + storeDisplayArray[panel3storeNow][33].coupons[coup].id + "\");}'";
					if (hoverState==1) {
						llCouponHTML += " onmouseover='genericButtonOver(\"get_coupon_detail_" + coupIDIncr + "\",\"get_coupon_detail_" + coupIDIncr + "\");' onfocus='genericButtonOver(\"get_coupon_detail_" + coupIDIncr + "\",\"get_coupon_detail_" + coupIDIncr + "\");' onmouseout='genericButtonOut(\"get_coupon_detail_" + coupIDIncr + "\",\"get_coupon_detail_" + coupIDIncr + "\");' onblur='genericButtonOut(\"get_coupon_detail_" + coupIDIncr + "\",\"get_coupon_detail_" + coupIDIncr + "\");'";
					}
					llCouponHTML += " tabindex='0' title=\"" + storeDisplayArray[panel3storeNow][33].coupons[coup].title + "\">" + llCouponHTMLTest + "<\/div>";
					coupIDIncr++;
				}
				llCouponHTML += autotextIt(p0TemplateSet.couponLocDetailFootDiv,"couponLocDetailFoot");
				couponTrack(panel3storeNow,"xxx",30);
			}
		}
		writeHTML += llCouponHTML;
		if (prodWriteListArray.length) {
			var baseStartHTML = autotextIt(p3TemplateSet.panel3ProdCartStartDiv,"panel3ProdCartStart");
			var countStart = baseStartHTML.indexOf("<!--COUNT");
			if (countStart != -1 && prodWriteListArray.length != 0) {
				var countEnd = baseStartHTML.indexOf(">",countStart);
				var countStrip = baseStartHTML.substring(countStart,(countEnd+1));
				var countHTMLStart = baseStartHTML.substr(0,countStart);
				var countHTMLEnd = baseStartHTML.substr((countEnd+1));
				var countValueStart = countStrip.indexOf(" VALUE=");
				if (countValueStart != -1) {
					var countValueEnd = countStrip.indexOf("]",countValueStart);
					var countValueVar = countStrip.substring((countValueStart+8),(countValueEnd));
				}
				else {
					var countValueVar = "";
				}
				baseStartHTML = countHTMLStart + prodWriteListArray.length + countValueVar + countHTMLEnd;
			}
			var chainDetailStart = baseStartHTML.indexOf("<!--CHAINDETAIL");
			if (chainDetailStart != -1) {
				var chainDetailEnd = baseStartHTML.indexOf(">",chainDetailStart);
				var chainDetailStrip = baseStartHTML.substring(chainDetailStart,(chainDetailEnd+1));
				var chainDetailHTMLStart = baseStartHTML.substr(0,chainDetailStart);
				var chainDetailHTMLEnd = baseStartHTML.substr((chainDetailEnd+1));
				var chainDetailValueStart = chainDetailStrip.indexOf(" DEFAULT=");
				if (chainDetailValueStart != -1) {
					var chainDetailValueEnd = chainDetailStrip.indexOf("]",chainDetailValueStart);
					var chainDetailValueVar = chainDetailStrip.substring((chainDetailValueStart+10),(chainDetailValueEnd));
				}
				else {
					var chainDetailValueVar = "";
				}
				var thisIncr = -1;
				for (q=0; q<chainDetailArray.length; q++) {
					if (storeDisplayArray[panel3storeNow][12] == chainDetailArray[q][1]) {
						chainDetailValueVar = chainDetailArray[q][2];
						thisIncr = q;
						break;
					}
				}
				if (thisIncr != -1) {
					if (storeDisplayArray[panel3storeNow][16] == 0 || storeDisplayArray[panel3storeNow][16] == 3 || storeDisplayArray[panel3storeNow][16] == 5) {
						chainDetailValueVar += chainDetailArray[thisIncr][3];
					}
					if (storeDisplayArray[panel3storeNow][16] == 1 || storeDisplayArray[panel3storeNow][16] == 8) {
						chainDetailValueVar += chainDetailArray[thisIncr][5];
					}
					if (storeDisplayArray[panel3storeNow][16] == 2) {
						chainDetailValueVar += chainDetailArray[thisIncr][4];
					}
				}
				baseStartHTML = chainDetailHTMLStart + chainDetailValueVar + chainDetailHTMLEnd;
			}
			writeHTML += baseStartHTML;
			if (panel3LabelSwitch == 0) {
				if(gLog==1){console.log("panel3WriteProducts - prodWriteListArray.length && prodWriteListArray.length != prodWriteArray.length -- panel3LabelSwitch == 0");}
				for (famIncr=0;famIncr<famArray.length;famIncr++) {
					var familyHTMLTest = autotextIt(p3TemplateSet.panel3ProdCartFamDiv,"panel3ProdCartFam");
					var famNameTagStart = familyHTMLTest.indexOf("<!--FAMNAME");
					if (famNameTagStart != -1) {
						var famNameTagEnd = familyHTMLTest.indexOf(">",famNameTagStart);
						var baseFamNameHTMLStart = familyHTMLTest.substr(0,famNameTagStart);
						var baseFamNameHTMLEnd = familyHTMLTest.substr((famNameTagEnd+1));
						familyHTMLTest = baseFamNameHTMLStart + "<span class='panel_3_product_list_famname_name'>" + famArray[famIncr][1] + "<\/span>" + baseFamNameHTMLEnd;
					}
					var famBigImgTagStart = familyHTMLTest.indexOf("<!--FAMBIGIMG");
					if (famBigImgTagStart != -1) {
						var famBigImgTagEnd = familyHTMLTest.indexOf(">",famBigImgTagStart);
						var baseFamBigImgHTMLStart = familyHTMLTest.substr(0,famBigImgTagStart);
						var baseFamBigImgHTMLEnd = familyHTMLTest.substr((famBigImgTagEnd+1));
						familyHTMLTest = baseFamBigImgHTMLStart + "<img title=\"" + famArray[famIncr][1] + "\" alt=\"" + famArray[famIncr][1] + "\" class='panel_3_product_list_famname_bigimg' src='" + clientImgBase + famArray[famIncr][2] + "'>" + baseFamBigImgHTMLEnd;
					}
					var famSmImgTagStart = familyHTMLTest.indexOf("<!--FAMSMIMG");
					if (famSmImgTagStart != -1) {
						var famSmImgTagEnd = familyHTMLTest.indexOf(">",famSmImgTagStart);
						var baseFamSmImgHTMLStart = familyHTMLTest.substr(0,famSmImgTagStart);
						var baseFamSmImgHTMLEnd = familyHTMLTest.substr((famSmImgTagEnd+1));
						familyHTMLTest = baseFamSmImgHTMLStart + "<img title=\"" + famArray[famIncr][1] + "\" alt=\"" + famArray[famIncr][1] + "\" class='panel_3_product_list_famname_smimg' src='" + clientImgBase + famArray[famIncr][3] + "'>" + baseFamSmImgHTMLEnd;
					}
					for (catIncr=0;catIncr<catArray.length;catIncr++) {
						var foundACat = 0;
						if (catArray[catIncr][2] == famArray[famIncr][0]) {
							for (prodIncr=0;prodIncr<prodWriteListArray.length;prodIncr++) {
								if (prodWriteListArray[prodIncr][8] == catArray[catIncr][0]) {
									foundACat = 1;
									break;
								}
							}
						}
						if (foundACat == 1) {
							writeHTML += familyHTMLTest;
							break;
						}
					}
					for (catIncr=0;catIncr<catArray.length;catIncr++) {
						if (catArray[catIncr][2] == famArray[famIncr][0]) {
							var categoryHTMLTest = autotextIt(p3TemplateSet.panel3ProdCartCatDiv,"panel3ProdCartCat");
							var catNameTagStart = categoryHTMLTest.indexOf("<!--CATNAME");
							if (catNameTagStart != -1) {
								var catNameTagEnd = categoryHTMLTest.indexOf(">",catNameTagStart);
								var baseCatNameHTMLStart = categoryHTMLTest.substr(0,catNameTagStart);
								var baseCatNameHTMLEnd = categoryHTMLTest.substr((catNameTagEnd+1));
								categoryHTMLTest = baseCatNameHTMLStart + "<span class='panel_3_product_list_catname_name'>" + catArray[catIncr][1] + "<\/span>" + baseCatNameHTMLEnd;
							}
							var catBigImgTagStart = categoryHTMLTest.indexOf("<!--CATBIGIMG");
							if (catBigImgTagStart != -1) {
								var catBigImgTagEnd = categoryHTMLTest.indexOf(">",catBigImgTagStart);
								var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBigImgTagStart);
								var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBigImgTagEnd+1));
								categoryHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + catArray[catIncr][3] + "\" alt=\"" + catArray[catIncr][3] + "\" class='panel_3_product_list_catname_bigimg' src='" + clientImgBase + catArray[catIncr][3] + "'>" + baseCatBigImgHTMLEnd;
							}
							var catSmImgTagStart = categoryHTMLTest.indexOf("<!--CATSMIMG");
							if (catSmImgTagStart != -1) {
								var catSmImgTagEnd = categoryHTMLTest.indexOf(">",catSmImgTagStart);
								var baseCatSmImgHTMLStart = categoryHTMLTest.substr(0,catSmImgTagStart);
								var baseCatSmImgHTMLEnd = categoryHTMLTest.substr((catSmImgTagEnd+1));
								categoryHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + catArray[catIncr][3] + "\" alt=\"" + catArray[catIncr][3] + "\" class='panel_3_product_list_catname_smimg' src='" + clientImgBase + catArray[catIncr][4] + "'>" + baseCatSmImgHTMLEnd;
							}
							for (prodIncr=0;prodIncr<prodWriteListArray.length;prodIncr++) {
								if (prodWriteListArray[prodIncr][8] == catArray[catIncr][0]) {
									if(gLog==1){console.log("panel3WriteProducts - catIncr="+catIncr);}
									writeHTML += categoryHTMLTest;
									break;
								}
							}
							for (prodIncr=0;prodIncr<prodWriteListArray.length;prodIncr++) {
								if (prodWriteListArray[prodIncr][8] == catArray[catIncr][0]) {
									var productHTMLTest = autotextIt(p3TemplateSet.panel3ProdCartProdDiv,"panel3ProdCartProd");
									var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
									if (prodDiscTagStart != -1) {
										var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
										var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
										var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
										var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
										var prodDiscWrite = "";
										var discVal = prodWriteListArray[prodIncr][6];
										if (discVal != 1) {
											prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel3ProdCartProd_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
										}
										productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
									}
									var prodNameTagStart = productHTMLTest.indexOf("<!--PRODNAME");
									if (prodNameTagStart != -1) {
										var prodNameTagEnd = productHTMLTest.indexOf(">",prodNameTagStart);
										var prodNameTagStrip = productHTMLTest.substring(prodNameTagStart,(prodNameTagEnd+1));
										var baseProdNameHTMLStart = productHTMLTest.substr(0,prodNameTagStart);
										var baseProdNameHTMLEnd = productHTMLTest.substr((prodNameTagEnd+1));
										var descTest = prodNameTagStrip.indexOf(" DESC");
										if (descTest != -1) {
											var descVal = "<span class='panel_3_product_list_name_desc'>" + prodWriteListArray[prodIncr][3] + "<\/span>";
										}
										else {
											var descVal = "";
										}
										productHTMLTest = baseProdNameHTMLStart + "<span class='panel_3_product_list_name_name'>" + prodWriteListArray[prodIncr][2] + "<\/span>" + descVal + baseProdNameHTMLEnd;
									}
									var CBKTagStart = productHTMLTest.indexOf("<!--PRODCBK");
									if (CBKTagStart != -1) {
										var CBKTagEnd = productHTMLTest.indexOf(">",CBKTagStart);
										var CBKTagStrip = productHTMLTest.substring(CBKTagStart,(CBKTagEnd+1));
										var baseCBKHTMLStart = productHTMLTest.substr(0,CBKTagStart);
										var baseCBKHTMLEnd = productHTMLTest.substr((CBKTagEnd+1));
										var cansTestStart = CBKTagStrip.indexOf(" CANS=");
										if (cansTestStart != -1) {
											var cansTestEnd = CBKTagStrip.indexOf("]",cansTestStart);
											var cansVal = "<span class='panel_3_product_list_cans'><i class='fa " + CBKTagStrip.substring((cansTestStart+7),(cansTestEnd)) + "'><\/i> cans<\/span>";
										}
										else {
											var cansVal = "<span class='panel_3_product_list_cans'>cans<\/span>";
										}
										var bottlesTestStart = CBKTagStrip.indexOf(" BOTTLES=");
										if (bottlesTestStart != -1) {
											var bottlesTestEnd = CBKTagStrip.indexOf("]",bottlesTestStart);
											var bottlesVal = "<span class='panel_3_product_list_bottles'><i class='fa " + CBKTagStrip.substring((bottlesTestStart+10),(bottlesTestEnd)) + "'><\/i> bottles<\/span>";
										}
										else {
											var bottlesVal = "<span class='panel_3_product_list_bottles'>bottles<\/span>";
										}
										var kegsTestStart = CBKTagStrip.indexOf(" KEGS=");
										if (kegsTestStart != -1) {
											var kegsTestEnd = CBKTagStrip.indexOf("]",kegsTestStart);
											var kegsVal = "<span class='panel_3_product_list_kegs'><i class='fa " + CBKTagStrip.substring((kegsTestStart+7),(kegsTestEnd)) + "'><\/i> kegs<\/span>";
										}
										else {
											var kegsVal = "<span class='panel_3_product_list_kegs'>kegs<\/span>";
										}
										if(gLog==1){console.log("PRODCBK - " + prodWriteListArray[prodIncr][12]);}
										var cbkSplit = prodWriteListArray[prodIncr][12].split(",");
										var cbkWrite = "";
										if (cbkSplit[0] == 1) {cbkWrite += cansVal;}
										if (cbkSplit[1] == 1) {cbkWrite += bottlesVal;}
										if (cbkSplit[2] == 1) {cbkWrite += kegsVal;}
										productHTMLTest = baseCBKHTMLStart + "<span class='panel_3_product_list_cbk_shell'>" + cbkWrite + "<\/span>" + baseCBKHTMLEnd;
									}
									var prodBigImgTagStart = productHTMLTest.indexOf("<!--PRODBIGIMG");
									if (prodBigImgTagStart != -1) {
										var prodBigImgTagEnd = productHTMLTest.indexOf(">",prodBigImgTagStart);
										var baseProdBigImgHTMLStart = productHTMLTest.substr(0,prodBigImgTagStart);
										var baseProdBigImgHTMLEnd = productHTMLTest.substr((prodBigImgTagEnd+1));
										productHTMLTest = baseProdBigImgHTMLStart + "<img title=\"" + prodWriteListArray[prodIncr][2] + "\" alt=\"" + prodWriteListArray[prodIncr][2] + "\" class='panel_3_product_list_name_bigimg' src='" + clientImgBase + prodWriteListArray[prodIncr][4] + "'>" + baseProdBigImgHTMLEnd;
									}
									var prodSmImgTagStart = productHTMLTest.indexOf("<!--PRODSMIMG");
									if (prodSmImgTagStart != -1) {
										var prodSmImgTagEnd = productHTMLTest.indexOf(">",prodSmImgTagStart);
										var baseProdSmImgHTMLStart = productHTMLTest.substr(0,prodSmImgTagStart);
										var baseProdSmImgHTMLEnd = productHTMLTest.substr((prodSmImgTagEnd+1));
										productHTMLTest = baseProdSmImgHTMLStart + "<img title=\"" + prodWriteListArray[prodIncr][2] + "\" alt=\"" + prodWriteListArray[prodIncr][2] + "\" class='panel_3_product_list_name_smimg' src='" + clientImgBase + prodWriteListArray[prodIncr][5] + "'>" + baseProdSmImgHTMLEnd;
									}
									var stockCodeTagStart = productHTMLTest.indexOf("<!--STOCKCODE");
									if (stockCodeTagStart != -1) {
										var stockCodeTagEnd = productHTMLTest.indexOf(">",stockCodeTagStart);
										var stockCodeTagStrip = productHTMLTest.substring(stockCodeTagStart,(stockCodeTagEnd+1));
										var baseStockCodeHTMLStart = productHTMLTest.substr(0,stockCodeTagStart);
										var baseStockCodeHTMLEnd = productHTMLTest.substr((stockCodeTagEnd+1));
										var stockCodeIDStart = stockCodeTagStrip.indexOf(" ID=");
										if (stockCodeIDStart != -1) {
											var stockCodeIDEnd = stockCodeTagStrip.indexOf("]");
											var stockCodeIDList = stockCodeTagStrip.substring((stockCodeIDStart+5),(stockCodeIDEnd));
										}
										else {
											var stockCodeIDList = panel3StockCodeList;
										}
										var stockCodeIDArray = stockCodeIDList.split(",");
										var stockCodeIDWrite = "";
										for (k=0;k<stockCodeIDArray.length;k++) {
											if (stockCodeIDArray[k] == prodWriteListArray[prodIncr][10]) {
												for (f=0;f<stockArray.length;f++) {
													if (stockArray[f][0] == prodWriteListArray[prodIncr][10]) {
														if (prodWriteListArray[prodIncr][10] == "2") {
															stockCodeIDWrite = "<a href='#' class='panel_3_stock_code_2' onclick='panel3panel4Connect();return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3panel4Connect();return false;}' tabindex='0' title=\"" + stockArray[f][1] + "\">" + stockArray[f][1] + "<\/a>";
														}
														else {
															stockCodeIDWrite = stockArray[f][1];
														}
														break;
													}
												}
											}
										}
										productHTMLTest = baseStockCodeHTMLStart + stockCodeIDWrite + baseStockCodeHTMLEnd;
									}
									var stockLocNameTagStart = productHTMLTest.indexOf("<!--STOCKLOCNAME");
									if (stockLocNameTagStart != -1) {
										var stockLocNameTagEnd = productHTMLTest.indexOf(">",stockLocNameTagStart);
										var stockLocNameTagStrip = productHTMLTest.substring(stockLocNameTagStart,(stockLocNameTagEnd+1));
										var baseStockLocNameHTMLStart = productHTMLTest.substr(0,stockLocNameTagStart);
										var baseStockLocNameHTMLEnd = productHTMLTest.substr((stockLocNameTagEnd+1));
										var stockLocNameWrite = "";
										for (k=0;k<stocklocArray.length;k++) {
											if (stocklocArray[k][0] == prodWriteListArray[prodIncr][11]) {
												stockLocNameWrite = "<span class='panel_3_stockloc_name'>" + stocklocArray[k][1] + "<\/span>";
											}
										}
										productHTMLTest = baseStockLocNameHTMLStart + stockLocNameWrite + baseStockLocNameHTMLEnd;
									}
									writeHTML += productHTMLTest;
								}
							}
						}
					}
				}
			}
			else {
				if (labelWithCat == 1) {
					if(gLog==1){console.log("panel3WriteProducts - prodWriteListArray.length && prodWriteListArray.length != prodWriteArray.length -- panel3LabelSwitch != 0 labelWithCat");}
					for (labelIncr=0;labelIncr<labelArray.length;labelIncr++) {
						if (labelArray[labelIncr][9] == 0) {
							var prodInLabArr = [];
							var daLabelName = labelArray[labelIncr][1];
							for (pli=0; pli<prodLabelArray.length; pli++) {
								for (pwl=0; pwl<prodWriteListArray.length; pwl++) {
									if (prodWriteListArray[pwl][0] == prodLabelArray[pli][1] && prodLabelArray[pli][2] == labelArray[labelIncr][0]) {
										prodInLabArr.push(prodWriteListArray[pwl]);
									}
								}
							}
							if (prodInLabArr.length) {
								if(gLog==1){console.log(daLabelName + " - ",prodInLabArr);}
								var labelHTMLTest = autotextIt(p3TemplateSet.panel3ProdCartLabelDiv,"panel3ProdCartLabel");
								var labelNameTagStart = labelHTMLTest.indexOf("<!--LABELNAME");
								if (labelNameTagStart != -1) {
									var labelNameTagEnd = labelHTMLTest.indexOf(">",labelNameTagStart);
									var baseLabelNameHTMLStart = labelHTMLTest.substr(0,labelNameTagStart);
									var baseLabelNameHTMLEnd = labelHTMLTest.substr((labelNameTagEnd+1));
									labelHTMLTest = baseLabelNameHTMLStart + daLabelName + baseLabelNameHTMLEnd;
								}
								writeHTML += labelHTMLTest;
								for (catIncr=0;catIncr<catArray.length;catIncr++) {
									var writeCatLabelProd = 0;
									for (prodIncr=0;prodIncr<prodInLabArr.length;prodIncr++) {
										if (prodInLabArr[prodIncr][8] == catArray[catIncr][0]) {
											if(gLog==1){console.log("panel3WriteProducts - catIncr="+catIncr);}
											var categoryHTMLTest = autotextIt(p3TemplateSet.panel3ProdCartCatDiv,"panel3ProdCartCat");
											var catNameTagStart = categoryHTMLTest.indexOf("<!--CATNAME");
											if (catNameTagStart != -1) {
												var catNameTagEnd = categoryHTMLTest.indexOf(">",catNameTagStart);
												var baseCatNameHTMLStart = categoryHTMLTest.substr(0,catNameTagStart);
												var baseCatNameHTMLEnd = categoryHTMLTest.substr((catNameTagEnd+1));
												categoryHTMLTest = baseCatNameHTMLStart + "<span class='panel_3_product_list_catname_name'>" + catArray[catIncr][1] + "<\/span>" + baseCatNameHTMLEnd;
											}
											var catBigImgTagStart = categoryHTMLTest.indexOf("<!--CATBIGIMG");
											if (catBigImgTagStart != -1) {
												var catBigImgTagEnd = categoryHTMLTest.indexOf(">",catBigImgTagStart);
												var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBigImgTagStart);
												var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBigImgTagEnd+1));
												categoryHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + catArray[catIncr][3] + "\" alt=\"" + catArray[catIncr][3] + "\" class='panel_3_product_list_catname_bigimg' src='" + clientImgBase + catArray[catIncr][3] + "'>" + baseCatBigImgHTMLEnd;
											}
											var catSmImgTagStart = categoryHTMLTest.indexOf("<!--CATSMIMG");
											if (catSmImgTagStart != -1) {
												var catSmImgTagEnd = categoryHTMLTest.indexOf(">",catSmImgTagStart);
												var baseCatSmImgHTMLStart = categoryHTMLTest.substr(0,catSmImgTagStart);
												var baseCatSmImgHTMLEnd = categoryHTMLTest.substr((catSmImgTagEnd+1));
												categoryHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + catArray[catIncr][3] + "\" alt=\"" + catArray[catIncr][3] + "\" class='panel_3_product_list_catname_smimg' src='" + clientImgBase + catArray[catIncr][4] + "'>" + baseCatSmImgHTMLEnd;
											}
											writeHTML += categoryHTMLTest;
											writeCatLabelProd = 1;
											break;
										}
									}
									if (writeCatLabelProd == 1) {
										for (prodIncr=0;prodIncr<prodInLabArr.length;prodIncr++) {
											if (prodInLabArr[prodIncr][8] == catArray[catIncr][0]) {
												var productHTMLTest = autotextIt(p3TemplateSet.panel3ProdCartProdDiv,"panel3ProdCartProd");
												var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
												if (prodDiscTagStart != -1) {
													var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
													var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
													var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
													var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
													var prodDiscWrite = "";
													var discVal = prodInLabArr[prodIncr][6];
													if (discVal != 1) {
														prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel3ProdCartProd_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
													}
													productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
												}
												var prodNameTagStart = productHTMLTest.indexOf("<!--PRODNAME");
												if (prodNameTagStart != -1) {
													var prodNameTagEnd = productHTMLTest.indexOf(">",prodNameTagStart);
													var prodNameTagStrip = productHTMLTest.substring(prodNameTagStart,(prodNameTagEnd+1));
													var baseProdNameHTMLStart = productHTMLTest.substr(0,prodNameTagStart);
													var baseProdNameHTMLEnd = productHTMLTest.substr((prodNameTagEnd+1));
													var descTest = prodNameTagStrip.indexOf(" DESC");
													if (descTest != -1) {
														var descVal = "<span class='panel_3_product_list_name_desc'>" + prodInLabArr[prodIncr][3] + "<\/span>";
													}
													else {
														var descVal = "";
													}
													productHTMLTest = baseProdNameHTMLStart + "<span class='panel_3_product_list_name_name'>" + prodInLabArr[prodIncr][2] + "<\/span>" + descVal + baseProdNameHTMLEnd;
												}
												var CBKTagStart = productHTMLTest.indexOf("<!--PRODCBK");
												if (CBKTagStart != -1) {
													var CBKTagEnd = productHTMLTest.indexOf(">",CBKTagStart);
													var CBKTagStrip = productHTMLTest.substring(CBKTagStart,(CBKTagEnd+1));
													var baseCBKHTMLStart = productHTMLTest.substr(0,CBKTagStart);
													var baseCBKHTMLEnd = productHTMLTest.substr((CBKTagEnd+1));
													var cansTestStart = CBKTagStrip.indexOf(" CANS=");
													if (cansTestStart != -1) {
														var cansTestEnd = CBKTagStrip.indexOf("]",cansTestStart);
														var cansVal = "<span class='panel_3_product_list_cans'><i class='fa " + CBKTagStrip.substring((cansTestStart+7),(cansTestEnd)) + "'><\/i> cans<\/span>";
													}
													else {
														var cansVal = "<span class='panel_3_product_list_cans'>cans<\/span>";
													}
													var bottlesTestStart = CBKTagStrip.indexOf(" BOTTLES=");
													if (bottlesTestStart != -1) {
														var bottlesTestEnd = CBKTagStrip.indexOf("]",bottlesTestStart);
														var bottlesVal = "<span class='panel_3_product_list_bottles'><i class='fa " + CBKTagStrip.substring((bottlesTestStart+10),(bottlesTestEnd)) + "'><\/i> bottles<\/span>";
													}
													else {
														var bottlesVal = "<span class='panel_3_product_list_bottles'>bottles<\/span>";
													}
													var kegsTestStart = CBKTagStrip.indexOf(" KEGS=");
													if (kegsTestStart != -1) {
														var kegsTestEnd = CBKTagStrip.indexOf("]",kegsTestStart);
														var kegsVal = "<span class='panel_3_product_list_kegs'><i class='fa " + CBKTagStrip.substring((kegsTestStart+7),(kegsTestEnd)) + "'><\/i> kegs<\/span>";
													}
													else {
														var kegsVal = "<span class='panel_3_product_list_kegs'>kegs<\/span>";
													}
													if(gLog==1){console.log("PRODCBK - " + prodInLabArr[prodIncr][12]);}
													var cbkSplit = prodInLabArr[prodIncr][12].split(",");
													var cbkWrite = "";
													if (cbkSplit[0] == 1) {cbkWrite += cansVal;}
													if (cbkSplit[1] == 1) {cbkWrite += bottlesVal;}
													if (cbkSplit[2] == 1) {cbkWrite += kegsVal;}
													productHTMLTest = baseCBKHTMLStart + "<span class='panel_3_product_list_cbk_shell'>" + cbkWrite + "<\/span>" + baseCBKHTMLEnd;
												}
												var prodBigImgTagStart = productHTMLTest.indexOf("<!--PRODBIGIMG");
												if (prodBigImgTagStart != -1) {
													var prodBigImgTagEnd = productHTMLTest.indexOf(">",prodBigImgTagStart);
													var baseProdBigImgHTMLStart = productHTMLTest.substr(0,prodBigImgTagStart);
													var baseProdBigImgHTMLEnd = productHTMLTest.substr((prodBigImgTagEnd+1));
													productHTMLTest = baseProdBigImgHTMLStart + "<img title=\"" + prodInLabArr[prodIncr][2] + "\" alt=\"" + prodInLabArr[prodIncr][2] + "\" class='panel_3_product_list_name_bigimg' src='" + clientImgBase + prodInLabArr[prodIncr][4] + "'>" + baseProdBigImgHTMLEnd;
												}
												var prodSmImgTagStart = productHTMLTest.indexOf("<!--PRODSMIMG");
												if (prodSmImgTagStart != -1) {
													var prodSmImgTagEnd = productHTMLTest.indexOf(">",prodSmImgTagStart);
													var baseProdSmImgHTMLStart = productHTMLTest.substr(0,prodSmImgTagStart);
													var baseProdSmImgHTMLEnd = productHTMLTest.substr((prodSmImgTagEnd+1));
													productHTMLTest = baseProdSmImgHTMLStart + "<img title=\"" + prodInLabArr[prodIncr][2] + "\" alt=\"" + prodInLabArr[prodIncr][2] + "\" class='panel_3_product_list_name_smimg' src='" + clientImgBase + prodInLabArr[prodIncr][5] + "'>" + baseProdSmImgHTMLEnd;
												}
												var stockCodeTagStart = productHTMLTest.indexOf("<!--STOCKCODE");
												if (stockCodeTagStart != -1) {
													var stockCodeTagEnd = productHTMLTest.indexOf(">",stockCodeTagStart);
													var stockCodeTagStrip = productHTMLTest.substring(stockCodeTagStart,(stockCodeTagEnd+1));
													var baseStockCodeHTMLStart = productHTMLTest.substr(0,stockCodeTagStart);
													var baseStockCodeHTMLEnd = productHTMLTest.substr((stockCodeTagEnd+1));
													var stockCodeIDStart = stockCodeTagStrip.indexOf(" ID=");
													if (stockCodeIDStart != -1) {
														var stockCodeIDEnd = stockCodeTagStrip.indexOf("]");
														var stockCodeIDList = stockCodeTagStrip.substring((stockCodeIDStart+5),(stockCodeIDEnd));
													}
													else {
														var stockCodeIDList = panel3StockCodeList;
													}
													var stockCodeIDArray = stockCodeIDList.split(",");
													var stockCodeIDWrite = "";
													for (k=0;k<stockCodeIDArray.length;k++) {
														if (stockCodeIDArray[k] == prodInLabArr[prodIncr][10]) {
															for (f=0;f<stockArray.length;f++) {
																if (stockArray[f][0] == prodInLabArr[prodIncr][10]) {
																	if (prodInLabArr[prodIncr][10] == "2") {
																		stockCodeIDWrite = "<a href='#' class='panel_3_stock_code_2' onclick='panel3panel4Connect();return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3panel4Connect();return false;}' tabindex='0' title=\"" + stockArray[f][1] + "\">" + stockArray[f][1] + "<\/a>";
																	}
																	else {
																		stockCodeIDWrite = stockArray[f][1];
																	}
																	break;
																}
															}
														}
													}
													productHTMLTest = baseStockCodeHTMLStart + stockCodeIDWrite + baseStockCodeHTMLEnd;
												}
												var stockLocNameTagStart = productHTMLTest.indexOf("<!--STOCKLOCNAME");
												if (stockLocNameTagStart != -1) {
													var stockLocNameTagEnd = productHTMLTest.indexOf(">",stockLocNameTagStart);
													var stockLocNameTagStrip = productHTMLTest.substring(stockLocNameTagStart,(stockLocNameTagEnd+1));
													var baseStockLocNameHTMLStart = productHTMLTest.substr(0,stockLocNameTagStart);
													var baseStockLocNameHTMLEnd = productHTMLTest.substr((stockLocNameTagEnd+1));
													var stockLocNameWrite = "";
													for (k=0;k<stocklocArray.length;k++) {
														if (stocklocArray[k][0] == prodInLabArr[prodIncr][11]) {
															stockLocNameWrite = "<span class='panel_3_stockloc_name'>" + stocklocArray[k][1] + "<\/span>";
														}
													}
													productHTMLTest = baseStockLocNameHTMLStart + stockLocNameWrite + baseStockLocNameHTMLEnd;
												}
												writeHTML += productHTMLTest;
											}
										}
									}
								}
							}
						}
					}
				}
				else {
					if(gLog==1){console.log("panel3WriteProducts - prodWriteListArray.length && prodWriteListArray.length != prodWriteArray.length -- panel3LabelSwitch != 0");}
					for (labelIncr=0;labelIncr<labelArray.length;labelIncr++) {
						var showDisLabel = 0;
						var labelBreak = 0;
						var daLabelName = labelArray[labelIncr][1];
						for (pli=0; pli<prodLabelArray.length; pli++) {
							for (pwl=0; pwl<prodWriteListArray.length; pwl++) {
								if (prodWriteListArray[pwl][0] == prodLabelArray[pli][1] && prodLabelArray[pli][2] == labelArray[labelIncr][0]) {
									labelBreak = 1;
									showDisLabel = 1;
									break;
								}
							}
							if (labelBreak == 1) {
								break;
							}
						}
						if (showDisLabel == 1) {
							var labelHTMLTest = autotextIt(p3TemplateSet.panel3ProdCartLabelDiv,"panel3ProdCartLabel");
							var labelNameTagStart = labelHTMLTest.indexOf("<!--LABELNAME");
							if (labelNameTagStart != -1) {
								var labelNameTagEnd = labelHTMLTest.indexOf(">",labelNameTagStart);
								var baseLabelNameHTMLStart = labelHTMLTest.substr(0,labelNameTagStart);
								var baseLabelNameHTMLEnd = labelHTMLTest.substr((labelNameTagEnd+1));
								labelHTMLTest = baseLabelNameHTMLStart + daLabelName + baseLabelNameHTMLEnd;
							}
							writeHTML += labelHTMLTest;
							for (pli=0; pli<prodLabelArray.length; pli++) {
								for (prodIncr=0;prodIncr<prodWriteListArray.length;prodIncr++) {
									if (prodWriteListArray[prodIncr][0] == prodLabelArray[pli][1] && prodLabelArray[pli][2] == labelArray[labelIncr][0]) {
										var productHTMLTest = autotextIt(p3TemplateSet.panel3ProdCartProdDiv,"panel3ProdCartProd");
										var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
										if (prodDiscTagStart != -1) {
											var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
											var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
											var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
											var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
											var prodDiscWrite = "";
											var discVal = prodWriteListArray[prodIncr][6];
											if (discVal != 1) {
												prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel3ProdCartProd_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
											}
											productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
										}
										var prodNameTagStart = productHTMLTest.indexOf("<!--PRODNAME");
										if (prodNameTagStart != -1) {
											var prodNameTagEnd = productHTMLTest.indexOf(">",prodNameTagStart);
											var prodNameTagStrip = productHTMLTest.substring(prodNameTagStart,(prodNameTagEnd+1));
											var baseProdNameHTMLStart = productHTMLTest.substr(0,prodNameTagStart);
											var baseProdNameHTMLEnd = productHTMLTest.substr((prodNameTagEnd+1));
											var descTest = prodNameTagStrip.indexOf(" DESC");
											if (descTest != -1) {
												var descVal = "<span class='panel_3_product_list_name_desc'>" + prodWriteListArray[prodIncr][3] + "<\/span>";
											}
											else {
												var descVal = "";
											}
											productHTMLTest = baseProdNameHTMLStart + "<span class='panel_3_product_list_name_name'>" + prodWriteListArray[prodIncr][2] + "<\/span>" + descVal + baseProdNameHTMLEnd;
										}
										var CBKTagStart = productHTMLTest.indexOf("<!--PRODCBK");
										if (CBKTagStart != -1) {
											var CBKTagEnd = productHTMLTest.indexOf(">",CBKTagStart);
											var CBKTagStrip = productHTMLTest.substring(CBKTagStart,(CBKTagEnd+1));
											var baseCBKHTMLStart = productHTMLTest.substr(0,CBKTagStart);
											var baseCBKHTMLEnd = productHTMLTest.substr((CBKTagEnd+1));
											var cansTestStart = CBKTagStrip.indexOf(" CANS=");
											if (cansTestStart != -1) {
												var cansTestEnd = CBKTagStrip.indexOf("]",cansTestStart);
												var cansVal = "<span class='panel_3_product_list_cans'><i class='fa " + CBKTagStrip.substring((cansTestStart+7),(cansTestEnd)) + "'><\/i> cans<\/span>";
											}
											else {
												var cansVal = "<span class='panel_3_product_list_cans'>cans<\/span>";
											}
											var bottlesTestStart = CBKTagStrip.indexOf(" BOTTLES=");
											if (bottlesTestStart != -1) {
												var bottlesTestEnd = CBKTagStrip.indexOf("]",bottlesTestStart);
												var bottlesVal = "<span class='panel_3_product_list_bottles'><i class='fa " + CBKTagStrip.substring((bottlesTestStart+10),(bottlesTestEnd)) + "'><\/i> bottles<\/span>";
											}
											else {
												var bottlesVal = "<span class='panel_3_product_list_bottles'>bottles<\/span>";
											}
											var kegsTestStart = CBKTagStrip.indexOf(" KEGS=");
											if (kegsTestStart != -1) {
												var kegsTestEnd = CBKTagStrip.indexOf("]",kegsTestStart);
												var kegsVal = "<span class='panel_3_product_list_kegs'><i class='fa " + CBKTagStrip.substring((kegsTestStart+7),(kegsTestEnd)) + "'><\/i> kegs<\/span>";
											}
											else {
												var kegsVal = "<span class='panel_3_product_list_kegs'>kegs<\/span>";
											}
											if(gLog==1){console.log("PRODCBK - " + prodWriteListArray[prodIncr][12]);}
											var cbkSplit = prodWriteListArray[prodIncr][12].split(",");
											var cbkWrite = "";
											if (cbkSplit[0] == 1) {cbkWrite += cansVal;}
											if (cbkSplit[1] == 1) {cbkWrite += bottlesVal;}
											if (cbkSplit[2] == 1) {cbkWrite += kegsVal;}
											productHTMLTest = baseCBKHTMLStart + "<span class='panel_3_product_list_cbk_shell'>" + cbkWrite + "<\/span>" + baseCBKHTMLEnd;
										}
										var prodBigImgTagStart = productHTMLTest.indexOf("<!--PRODBIGIMG");
										if (prodBigImgTagStart != -1) {
											var prodBigImgTagEnd = productHTMLTest.indexOf(">",prodBigImgTagStart);
											var baseProdBigImgHTMLStart = productHTMLTest.substr(0,prodBigImgTagStart);
											var baseProdBigImgHTMLEnd = productHTMLTest.substr((prodBigImgTagEnd+1));
											productHTMLTest = baseProdBigImgHTMLStart + "<img title=\"" + prodWriteListArray[prodIncr][2] + "\" alt=\"" + prodWriteListArray[prodIncr][2] + "\" class='panel_3_product_list_name_bigimg' src='" + clientImgBase + prodWriteListArray[prodIncr][4] + "'>" + baseProdBigImgHTMLEnd;
										}
										var prodSmImgTagStart = productHTMLTest.indexOf("<!--PRODSMIMG");
										if (prodSmImgTagStart != -1) {
											var prodSmImgTagEnd = productHTMLTest.indexOf(">",prodSmImgTagStart);
											var baseProdSmImgHTMLStart = productHTMLTest.substr(0,prodSmImgTagStart);
											var baseProdSmImgHTMLEnd = productHTMLTest.substr((prodSmImgTagEnd+1));
											productHTMLTest = baseProdSmImgHTMLStart + "<img title=\"" + prodWriteListArray[prodIncr][2] + "\" alt=\"" + prodWriteListArray[prodIncr][2] + "\" class='panel_3_product_list_name_smimg' src='" + clientImgBase + prodWriteListArray[prodIncr][5] + "'>" + baseProdSmImgHTMLEnd;
										}
										var stockCodeTagStart = productHTMLTest.indexOf("<!--STOCKCODE");
										if (stockCodeTagStart != -1) {
											var stockCodeTagEnd = productHTMLTest.indexOf(">",stockCodeTagStart);
											var stockCodeTagStrip = productHTMLTest.substring(stockCodeTagStart,(stockCodeTagEnd+1));
											var baseStockCodeHTMLStart = productHTMLTest.substr(0,stockCodeTagStart);
											var baseStockCodeHTMLEnd = productHTMLTest.substr((stockCodeTagEnd+1));
											var stockCodeIDStart = stockCodeTagStrip.indexOf(" ID=");
											if (stockCodeIDStart != -1) {
												var stockCodeIDEnd = stockCodeTagStrip.indexOf("]");
												var stockCodeIDList = stockCodeTagStrip.substring((stockCodeIDStart+5),(stockCodeIDEnd));
											}
											else {
												var stockCodeIDList = panel3StockCodeList;
											}
											var stockCodeIDArray = stockCodeIDList.split(",");
											var stockCodeIDWrite = "";
											for (k=0;k<stockCodeIDArray.length;k++) {
												if (stockCodeIDArray[k] == prodWriteListArray[prodIncr][10]) {
													for (f=0;f<stockArray.length;f++) {
														if (stockArray[f][0] == prodWriteListArray[prodIncr][10]) {
															if (prodWriteListArray[prodIncr][10] == "2") {
																stockCodeIDWrite = "<a href='#' class='panel_3_stock_code_2' onclick='panel3panel4Connect();return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3panel4Connect();return false;}' tabindex='0' title=\"" + stockArray[f][1] + "\">" + stockArray[f][1] + "<\/a>";
															}
															else {
																stockCodeIDWrite = stockArray[f][1];
															}
															break;
														}
													}
												}
											}
											productHTMLTest = baseStockCodeHTMLStart + stockCodeIDWrite + baseStockCodeHTMLEnd;
										}
										var stockLocNameTagStart = productHTMLTest.indexOf("<!--STOCKLOCNAME");
										if (stockLocNameTagStart != -1) {
											var stockLocNameTagEnd = productHTMLTest.indexOf(">",stockLocNameTagStart);
											var stockLocNameTagStrip = productHTMLTest.substring(stockLocNameTagStart,(stockLocNameTagEnd+1));
											var baseStockLocNameHTMLStart = productHTMLTest.substr(0,stockLocNameTagStart);
											var baseStockLocNameHTMLEnd = productHTMLTest.substr((stockLocNameTagEnd+1));
											var stockLocNameWrite = "";
											for (k=0;k<stocklocArray.length;k++) {
												if (stocklocArray[k][0] == prodWriteListArray[prodIncr][11]) {
													stockLocNameWrite = "<span class='panel_3_stockloc_name'>" + stocklocArray[k][1] + "<\/span>";
												}
											}
											productHTMLTest = baseStockLocNameHTMLStart + stockLocNameWrite + baseStockLocNameHTMLEnd;
										}
										writeHTML += productHTMLTest;
										break;
									}
								}
							}
						}
					}
				}
			}
			var baseStopHTML = autotextIt(p3TemplateSet.panel3ProdCartStopDiv,"panel3ProdCartStop");
			if (baseStopHTML.length != -1) {
				writeHTML += baseStopHTML;
			}
		}
		if (prodWriteStripArray.length) {
			if(gLog==1){console.log("panel3WriteProducts - prodWriteStripArray.length");}
			var baseStartTwoHTML = autotextIt(p3TemplateSet.panel3ProductsStartDiv,"panel3ProductsStart");
			var countStart = baseStartTwoHTML.indexOf("<!--COUNT");
			if (countStart != -1 && prodWriteStripArray.length != 0) {
				var countEnd = baseStartTwoHTML.indexOf(">",countStart);
				var countStrip = baseStartTwoHTML.substring(countStart,(countEnd+1));
				var countHTMLStart = baseStartTwoHTML.substr(0,countStart);
				var countHTMLEnd = baseStartTwoHTML.substr((countEnd+1));
				var countValueStart = countStrip.indexOf(" VALUE=");
				if (countValueStart != -1) {
					var countValueEnd = countStrip.indexOf("]",countValueStart);
					var countValueVar = countStrip.substring((countValueStart+8),(countValueEnd));
				}
				else {
					var countValueVar = "";
				}
				baseStartTwoHTML = countHTMLStart + prodWriteStripArray.length + countValueVar + countHTMLEnd;
			}
			var chainDetailStart = baseStartTwoHTML.indexOf("<!--CHAINDETAIL");
			if (chainDetailStart != -1) {
				var chainDetailEnd = baseStartTwoHTML.indexOf(">",chainDetailStart);
				var chainDetailStrip = baseStartTwoHTML.substring(chainDetailStart,(chainDetailEnd+1));
				var chainDetailHTMLStart = baseStartTwoHTML.substr(0,chainDetailStart);
				var chainDetailHTMLEnd = baseStartTwoHTML.substr((chainDetailEnd+1));
				var chainDetailValueStart = chainDetailStrip.indexOf(" DEFAULT=");
				if (chainDetailValueStart != -1) {
					var chainDetailValueEnd = chainDetailStrip.indexOf("]",chainDetailValueStart);
					var chainDetailValueVar = chainDetailStrip.substring((chainDetailValueStart+10),(chainDetailValueEnd));
				}
				else {
					var chainDetailValueVar = "";
				}
				var thisIncr = -1;
				for (q=0; q<chainDetailArray.length; q++) {
					if (storeDisplayArray[panel3storeNow][12] == chainDetailArray[q][1]) {
						chainDetailValueVar = chainDetailArray[q][2];
						thisIncr = q;
						break;
					}
				}
				if (thisIncr != -1) {
					if (storeDisplayArray[panel3storeNow][16] == 0 || storeDisplayArray[panel3storeNow][16] == 3 || storeDisplayArray[panel3storeNow][16] == 5) {
						chainDetailValueVar += chainDetailArray[thisIncr][3];
					}
					if (storeDisplayArray[panel3storeNow][16] == 1 || storeDisplayArray[panel3storeNow][16] == 8) {
						chainDetailValueVar += chainDetailArray[thisIncr][5];
					}
					if (storeDisplayArray[panel3storeNow][16] == 2) {
						chainDetailValueVar += chainDetailArray[thisIncr][4];
					}
				}
				baseStartTwoHTML = chainDetailHTMLStart + chainDetailValueVar + chainDetailHTMLEnd;
			}
			writeHTML += baseStartTwoHTML;
			if (panel3LabelSwitch == 0) {
				if(gLog==1){console.log("panel3WriteProducts - prodWriteStripArray.length -- panel3LabelSwitch == 0");}
				for (famIncr=0;famIncr<famArray.length;famIncr++) {
					var familyHTMLTest = autotextIt(p3TemplateSet.panel3ProductsFamDiv,"panel3ProductsFam");
					var famNameTagStart = familyHTMLTest.indexOf("<!--FAMNAME");
					if (famNameTagStart != -1) {
						var famNameTagEnd = familyHTMLTest.indexOf(">",famNameTagStart);
						var baseFamNameHTMLStart = familyHTMLTest.substr(0,famNameTagStart);
						var baseFamNameHTMLEnd = familyHTMLTest.substr((famNameTagEnd+1));
						familyHTMLTest = baseFamNameHTMLStart + "<span class='panel_3_product_list_famname_name'>" + famArray[famIncr][1] + "<\/span>" + baseFamNameHTMLEnd;
					}
					var famBigImgTagStart = familyHTMLTest.indexOf("<!--FAMBIGIMG");
					if (famBigImgTagStart != -1) {
						var famBigImgTagEnd = familyHTMLTest.indexOf(">",famBigImgTagStart);
						var baseFamBigImgHTMLStart = familyHTMLTest.substr(0,famBigImgTagStart);
						var baseFamBigImgHTMLEnd = familyHTMLTest.substr((famBigImgTagEnd+1));
						familyHTMLTest = baseFamBigImgHTMLStart + "<img title=\"" + famArray[famIncr][1] + "\" alt=\"" + famArray[famIncr][1] + "\" class='panel_3_product_list_famname_bigimg' src='" + clientImgBase + famArray[famIncr][2] + "'>" + baseFamBigImgHTMLEnd;
					}
					var famSmImgTagStart = familyHTMLTest.indexOf("<!--FAMSMIMG");
					if (famSmImgTagStart != -1) {
						var famSmImgTagEnd = familyHTMLTest.indexOf(">",famSmImgTagStart);
						var baseFamSmImgHTMLStart = familyHTMLTest.substr(0,famSmImgTagStart);
						var baseFamSmImgHTMLEnd = familyHTMLTest.substr((famSmImgTagEnd+1));
						familyHTMLTest = baseFamSmImgHTMLStart + "<img title=\"" + famArray[famIncr][1] + "\" alt=\"" + famArray[famIncr][1] + "\" class='panel_3_product_list_famname_smimg' src='" + clientImgBase + famArray[famIncr][3] + "'>" + baseFamSmImgHTMLEnd;
					}
					for (catIncr=0;catIncr<catArray.length;catIncr++) {
						var foundACat = 0;
						if (catArray[catIncr][2] == famArray[famIncr][0]) {
							for (prodIncr=0;prodIncr<prodWriteStripArray.length;prodIncr++) {
								if (prodWriteStripArray[prodIncr][8] == catArray[catIncr][0]) {
									foundACat = 1;
									break;
								}
							}
						}
						if (foundACat == 1) {
							writeHTML += familyHTMLTest;
							break;
						}
					}
					for (catIncr=0;catIncr<catArray.length;catIncr++) {
						if (catArray[catIncr][2] == famArray[famIncr][0]) {
							var categoryHTMLTest = autotextIt(p3TemplateSet.panel3ProductsCatDiv,"panel3ProductsCat");
							var catNameTagStart = categoryHTMLTest.indexOf("<!--CATNAME");
							if (catNameTagStart != -1) {
								var catNameTagEnd = categoryHTMLTest.indexOf(">",catNameTagStart);
								var baseCatNameHTMLStart = categoryHTMLTest.substr(0,catNameTagStart);
								var baseCatNameHTMLEnd = categoryHTMLTest.substr((catNameTagEnd+1));
								categoryHTMLTest = baseCatNameHTMLStart + "<span class='panel_3_product_list_catname_name'>" + catArray[catIncr][1] + "<\/span>" + baseCatNameHTMLEnd;
							}
							var catBigImgTagStart = categoryHTMLTest.indexOf("<!--CATBIGIMG");
							if (catBigImgTagStart != -1) {
								var catBigImgTagEnd = categoryHTMLTest.indexOf(">",catBigImgTagStart);
								var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBigImgTagStart);
								var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBigImgTagEnd+1));
								categoryHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + catArray[catIncr][1] + "\" alt=\"" + catArray[catIncr][1] + "\" class='panel_3_product_list_catname_bigimg' src='" + clientImgBase + catArray[catIncr][3] + "'>" + baseCatBigImgHTMLEnd;
							}
							var catSmImgTagStart = categoryHTMLTest.indexOf("<!--CATSMIMG");
							if (catSmImgTagStart != -1) {
								var catSmImgTagEnd = categoryHTMLTest.indexOf(">",catSmImgTagStart);
								var baseCatSmImgHTMLStart = categoryHTMLTest.substr(0,catSmImgTagStart);
								var baseCatSmImgHTMLEnd = categoryHTMLTest.substr((catSmImgTagEnd+1));
								categoryHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + catArray[catIncr][1] + "\" alt=\"" + catArray[catIncr][1] + "\" class='panel_3_product_list_catname_smimg' src='" + clientImgBase + catArray[catIncr][4] + "'>" + baseCatSmImgHTMLEnd;
							}
							for (prodIncr=0;prodIncr<prodWriteStripArray.length;prodIncr++) {
								if (prodWriteStripArray[prodIncr][8] == catArray[catIncr][0]) {
									writeHTML += categoryHTMLTest;
									break;
								}
							}
							for (prodIncr=0;prodIncr<prodWriteStripArray.length;prodIncr++) {
								if (prodWriteStripArray[prodIncr][8] == catArray[catIncr][0]) {
									var productHTMLTest = autotextIt(p3TemplateSet.panel3ProductsProdDiv,"panel3ProductsProd");
									var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
									if (prodDiscTagStart != -1) {
										var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
										var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
										var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
										var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
										var prodDiscWrite = "";
										var discVal = prodWriteStripArray[prodIncr][6];
										if (discVal != 1) {
											prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel3ProductsProd_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
										}
										productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
									}
									var prodNameTagStart = productHTMLTest.indexOf("<!--PRODNAME");
									if (prodNameTagStart != -1) {
										var prodNameTagEnd = productHTMLTest.indexOf(">",prodNameTagStart);
										var prodNameTagStrip = productHTMLTest.substring(prodNameTagStart,(prodNameTagEnd+1));
										var baseProdNameHTMLStart = productHTMLTest.substr(0,prodNameTagStart);
										var baseProdNameHTMLEnd = productHTMLTest.substr((prodNameTagEnd+1));
										var descTest = prodNameTagStrip.indexOf(" DESC");
										if (descTest != -1) {
											var descVal = "<span class='panel_3_product_list_name_desc'>" + prodWriteStripArray[prodIncr][3] + "<\/span>";
										}
										else {
											var descVal = "";
										}
										productHTMLTest = baseProdNameHTMLStart + "<span class='panel_3_product_list_name_name panel_3_product_strip_name_name'>" + prodWriteStripArray[prodIncr][2] + "<\/span>" + descVal + baseProdNameHTMLEnd;
									}
									var CBKTagStart = productHTMLTest.indexOf("<!--PRODCBK");
									if (CBKTagStart != -1) {
										var CBKTagEnd = productHTMLTest.indexOf(">",CBKTagStart);
										var CBKTagStrip = productHTMLTest.substring(CBKTagStart,(CBKTagEnd+1));
										var baseCBKHTMLStart = productHTMLTest.substr(0,CBKTagStart);
										var baseCBKHTMLEnd = productHTMLTest.substr((CBKTagEnd+1));
										var cansTestStart = CBKTagStrip.indexOf(" CANS=");
										if (cansTestStart != -1) {
											var cansTestEnd = CBKTagStrip.indexOf("]",cansTestStart);
											var cansVal = "<span class='panel_3_product_list_cans'><i class='fa " + CBKTagStrip.substring((cansTestStart+7),(cansTestEnd)) + "'><\/i> cans<\/span>";
										}
										else {
											var cansVal = "<span class='panel_3_product_list_cans'>cans<\/span>";
										}
										var bottlesTestStart = CBKTagStrip.indexOf(" BOTTLES=");
										if (bottlesTestStart != -1) {
											var bottlesTestEnd = CBKTagStrip.indexOf("]",bottlesTestStart);
											var bottlesVal = "<span class='panel_3_product_list_bottles'><i class='fa " + CBKTagStrip.substring((bottlesTestStart+10),(bottlesTestEnd)) + "'><\/i> bottles<\/span>";
										}
										else {
											var bottlesVal = "<span class='panel_3_product_list_bottles'>bottles<\/span>";
										}
										var kegsTestStart = CBKTagStrip.indexOf(" KEGS=");
										if (kegsTestStart != -1) {
											var kegsTestEnd = CBKTagStrip.indexOf("]",kegsTestStart);
											var kegsVal = "<span class='panel_3_product_list_kegs'><i class='fa " + CBKTagStrip.substring((kegsTestStart+7),(kegsTestEnd)) + "'><\/i> kegs<\/span>";
										}
										else {
											var kegsVal = "<span class='panel_3_product_list_kegs'>kegs<\/span>";
										}
										if(gLog==1){console.log("PRODCBK - " + prodWriteStripArray[prodIncr][12]);}
										var cbkSplit = prodWriteStripArray[prodIncr][12].split(",");
										var cbkWrite = "";
										if (cbkSplit[0] == 1) {cbkWrite += cansVal;}
										if (cbkSplit[1] == 1) {cbkWrite += bottlesVal;}
										if (cbkSplit[2] == 1) {cbkWrite += kegsVal;}
										productHTMLTest = baseCBKHTMLStart + "<span class='panel_3_product_list_cbk_shell'>" + cbkWrite + "<\/span>" + baseCBKHTMLEnd;
									}
									var prodBigImgTagStart = productHTMLTest.indexOf("<!--PRODBIGIMG");
									if (prodBigImgTagStart != -1) {
										var prodBigImgTagEnd = productHTMLTest.indexOf(">",prodBigImgTagStart);
										var baseProdBigImgHTMLStart = productHTMLTest.substr(0,prodBigImgTagStart);
										var baseProdBigImgHTMLEnd = productHTMLTest.substr((prodBigImgTagEnd+1));
										productHTMLTest = baseProdBigImgHTMLStart + "<img title=\"" + prodWriteStripArray[prodIncr][2] + "\" alt=\"" + prodWriteStripArray[prodIncr][2] + "\" class='panel_3_product_list_name_bigimg' src='" + clientImgBase + prodWriteStripArray[prodIncr][4] + "'>" + baseProdBigImgHTMLEnd;
									}
									var prodSmImgTagStart = productHTMLTest.indexOf("<!--PRODSMIMG");
									if (prodSmImgTagStart != -1) {
										var prodSmImgTagEnd = productHTMLTest.indexOf(">",prodSmImgTagStart);
										var baseProdSmImgHTMLStart = productHTMLTest.substr(0,prodSmImgTagStart);
										var baseProdSmImgHTMLEnd = productHTMLTest.substr((prodSmImgTagEnd+1));
										productHTMLTest = baseProdSmImgHTMLStart + "<img title=\"" + prodWriteStripArray[prodIncr][2] + "\" alt=\"" + prodWriteStripArray[prodIncr][2] + "\" class='panel_3_product_list_name_smimg' src='" + clientImgBase + prodWriteStripArray[prodIncr][5] + "'>" + baseProdSmImgHTMLEnd;
									}
									var stockCodeTagStart = productHTMLTest.indexOf("<!--STOCKCODE");
									if (stockCodeTagStart != -1) {
										var stockCodeTagEnd = productHTMLTest.indexOf(">",stockCodeTagStart);
										var stockCodeTagStrip = productHTMLTest.substring(stockCodeTagStart,(stockCodeTagEnd+1));
										var baseStockCodeHTMLStart = productHTMLTest.substr(0,stockCodeTagStart);
										var baseStockCodeHTMLEnd = productHTMLTest.substr((stockCodeTagEnd+1));
										var stockCodeIDStart = stockCodeTagStrip.indexOf(" ID=");
										if (stockCodeIDStart != -1) {
											var stockCodeIDEnd = stockCodeTagStrip.indexOf("]");
											var stockCodeIDList = stockCodeTagStrip.substring((stockCodeIDStart+5),(stockCodeIDEnd));
										}
										else {
											var stockCodeIDList = panel3StockCodeList;
										}
										var stockCodeIDArray = stockCodeIDList.split(",");
										var stockCodeIDWrite = "";
										for (k=0;k<stockCodeIDArray.length;k++) {
											if (stockCodeIDArray[k] == prodWriteStripArray[prodIncr][10]) {
												for (f=0;f<stockArray.length;f++) {
													if (stockArray[f][0] == prodWriteStripArray[prodIncr][10]) {
														if (prodWriteStripArray[prodIncr][10] == "2") {
															stockCodeIDWrite = "<a href='#' class='panel_3_stock_code_2' onclick='panel3panel4Connect();return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3panel4Connect();return false;}' tabindex='0' title=\"" + stockArray[f][1] + "\">" + stockArray[f][1] + "<\/a>";
														}
														else {
															stockCodeIDWrite = stockArray[f][1];
														}
														break;
													}
												}
											}
										}
										productHTMLTest = baseStockCodeHTMLStart + stockCodeIDWrite + baseStockCodeHTMLEnd;
									}
									var stockLocNameTagStart = productHTMLTest.indexOf("<!--STOCKLOCNAME");
									if (stockLocNameTagStart != -1) {
										var stockLocNameTagEnd = productHTMLTest.indexOf(">",stockLocNameTagStart);
										var stockLocNameTagStrip = productHTMLTest.substring(stockLocNameTagStart,(stockLocNameTagEnd+1));
										var baseStockLocNameHTMLStart = productHTMLTest.substr(0,stockLocNameTagStart);
										var baseStockLocNameHTMLEnd = productHTMLTest.substr((stockLocNameTagEnd+1));
										var stockLocNameWrite = "";
										for (k=0;k<stocklocArray.length;k++) {
											if (stocklocArray[k][0] == prodWriteStripArray[prodIncr][11]) {
												stockLocNameWrite = "<span class='panel_3_stockloc_name'>" + stocklocArray[k][1] + "<\/span>";
											}
										}
										productHTMLTest = baseStockLocNameHTMLStart + stockLocNameWrite + baseStockLocNameHTMLEnd;
									}
									writeHTML += productHTMLTest;
								}
							}
						}
					}
				}
			}
			else {
				if (labelWithCat == 1) {
					if(gLog==1){console.log("panel3WriteProducts - prodWriteStripArray.length && prodWriteStripArray.length != prodWriteArray.length -- panel3LabelSwitch != 0 labelWithCat");}
					for (labelIncr=0;labelIncr<labelArray.length;labelIncr++) {
						if (labelArray[labelIncr][9] == 0) {
							var prodInLabArr = [];
							var daLabelName = labelArray[labelIncr][1];
							for (pli=0; pli<prodLabelArray.length; pli++) {
								for (pwl=0; pwl<prodWriteStripArray.length; pwl++) {
									if (prodWriteStripArray[pwl][0] == prodLabelArray[pli][1] && prodLabelArray[pli][2] == labelArray[labelIncr][0]) {
										prodInLabArr.push(prodWriteStripArray[pwl]);
									}
								}
							}
							if (prodInLabArr.length) {
								if(gLog==1){console.log(daLabelName + " - ",prodInLabArr);}
								var labelHTMLTest = autotextIt(p3TemplateSet.panel3ProdCartLabelDiv,"panel3ProdCartLabel");
								var labelNameTagStart = labelHTMLTest.indexOf("<!--LABELNAME");
								if (labelNameTagStart != -1) {
									var labelNameTagEnd = labelHTMLTest.indexOf(">",labelNameTagStart);
									var baseLabelNameHTMLStart = labelHTMLTest.substr(0,labelNameTagStart);
									var baseLabelNameHTMLEnd = labelHTMLTest.substr((labelNameTagEnd+1));
									labelHTMLTest = baseLabelNameHTMLStart + daLabelName + baseLabelNameHTMLEnd;
								}
								writeHTML += labelHTMLTest;
								for (catIncr=0;catIncr<catArray.length;catIncr++) {
									var writeCatLabelProd = 0;
									for (prodIncr=0;prodIncr<prodInLabArr.length;prodIncr++) {
										if (prodInLabArr[prodIncr][8] == catArray[catIncr][0]) {
											if(gLog==1){console.log("panel3WriteProducts - catIncr="+catIncr);}
											var categoryHTMLTest = autotextIt(p3TemplateSet.panel3ProdCartCatDiv,"panel3ProdCartCat");
											var catNameTagStart = categoryHTMLTest.indexOf("<!--CATNAME");
											if (catNameTagStart != -1) {
												var catNameTagEnd = categoryHTMLTest.indexOf(">",catNameTagStart);
												var baseCatNameHTMLStart = categoryHTMLTest.substr(0,catNameTagStart);
												var baseCatNameHTMLEnd = categoryHTMLTest.substr((catNameTagEnd+1));
												categoryHTMLTest = baseCatNameHTMLStart + "<span class='panel_3_product_list_catname_name'>" + catArray[catIncr][1] + "<\/span>" + baseCatNameHTMLEnd;
											}
											var catBigImgTagStart = categoryHTMLTest.indexOf("<!--CATBIGIMG");
											if (catBigImgTagStart != -1) {
												var catBigImgTagEnd = categoryHTMLTest.indexOf(">",catBigImgTagStart);
												var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBigImgTagStart);
												var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBigImgTagEnd+1));
												categoryHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + catArray[catIncr][3] + "\" alt=\"" + catArray[catIncr][3] + "\" class='panel_3_product_list_catname_bigimg' src='" + clientImgBase + catArray[catIncr][3] + "'>" + baseCatBigImgHTMLEnd;
											}
											var catSmImgTagStart = categoryHTMLTest.indexOf("<!--CATSMIMG");
											if (catSmImgTagStart != -1) {
												var catSmImgTagEnd = categoryHTMLTest.indexOf(">",catSmImgTagStart);
												var baseCatSmImgHTMLStart = categoryHTMLTest.substr(0,catSmImgTagStart);
												var baseCatSmImgHTMLEnd = categoryHTMLTest.substr((catSmImgTagEnd+1));
												categoryHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + catArray[catIncr][3] + "\" alt=\"" + catArray[catIncr][3] + "\" class='panel_3_product_list_catname_smimg' src='" + clientImgBase + catArray[catIncr][4] + "'>" + baseCatSmImgHTMLEnd;
											}
											writeHTML += categoryHTMLTest;
											writeCatLabelProd = 1;
											break;
										}
									}
									if (writeCatLabelProd == 1) {
										for (prodIncr=0;prodIncr<prodInLabArr.length;prodIncr++) {
											if (prodInLabArr[prodIncr][8] == catArray[catIncr][0]) {
												var productHTMLTest = autotextIt(p3TemplateSet.panel3ProdCartProdDiv,"panel3ProdCartProd");
												var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
												if (prodDiscTagStart != -1) {
													var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
													var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
													var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
													var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
													var prodDiscWrite = "";
													var discVal = prodInLabArr[prodIncr][6];
													if (discVal != 1) {
														prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel3ProdCartProd_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
													}
													productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
												}
												var prodNameTagStart = productHTMLTest.indexOf("<!--PRODNAME");
												if (prodNameTagStart != -1) {
													var prodNameTagEnd = productHTMLTest.indexOf(">",prodNameTagStart);
													var prodNameTagStrip = productHTMLTest.substring(prodNameTagStart,(prodNameTagEnd+1));
													var baseProdNameHTMLStart = productHTMLTest.substr(0,prodNameTagStart);
													var baseProdNameHTMLEnd = productHTMLTest.substr((prodNameTagEnd+1));
													var descTest = prodNameTagStrip.indexOf(" DESC");
													if (descTest != -1) {
														var descVal = "<span class='panel_3_product_list_name_desc'>" + prodInLabArr[prodIncr][3] + "<\/span>";
													}
													else {
														var descVal = "";
													}
													productHTMLTest = baseProdNameHTMLStart + "<span class='panel_3_product_list_name_name'>" + prodInLabArr[prodIncr][2] + "<\/span>" + descVal + baseProdNameHTMLEnd;
												}
												var CBKTagStart = productHTMLTest.indexOf("<!--PRODCBK");
												if (CBKTagStart != -1) {
													var CBKTagEnd = productHTMLTest.indexOf(">",CBKTagStart);
													var CBKTagStrip = productHTMLTest.substring(CBKTagStart,(CBKTagEnd+1));
													var baseCBKHTMLStart = productHTMLTest.substr(0,CBKTagStart);
													var baseCBKHTMLEnd = productHTMLTest.substr((CBKTagEnd+1));
													var cansTestStart = CBKTagStrip.indexOf(" CANS=");
													if (cansTestStart != -1) {
														var cansTestEnd = CBKTagStrip.indexOf("]",cansTestStart);
														var cansVal = "<span class='panel_3_product_list_cans'><i class='fa " + CBKTagStrip.substring((cansTestStart+7),(cansTestEnd)) + "'><\/i> cans<\/span>";
													}
													else {
														var cansVal = "<span class='panel_3_product_list_cans'>cans<\/span>";
													}
													var bottlesTestStart = CBKTagStrip.indexOf(" BOTTLES=");
													if (bottlesTestStart != -1) {
														var bottlesTestEnd = CBKTagStrip.indexOf("]",bottlesTestStart);
														var bottlesVal = "<span class='panel_3_product_list_bottles'><i class='fa " + CBKTagStrip.substring((bottlesTestStart+10),(bottlesTestEnd)) + "'><\/i> bottles<\/span>";
													}
													else {
														var bottlesVal = "<span class='panel_3_product_list_bottles'>bottles<\/span>";
													}
													var kegsTestStart = CBKTagStrip.indexOf(" KEGS=");
													if (kegsTestStart != -1) {
														var kegsTestEnd = CBKTagStrip.indexOf("]",kegsTestStart);
														var kegsVal = "<span class='panel_3_product_list_kegs'><i class='fa " + CBKTagStrip.substring((kegsTestStart+7),(kegsTestEnd)) + "'><\/i> kegs<\/span>";
													}
													else {
														var kegsVal = "<span class='panel_3_product_list_kegs'>kegs<\/span>";
													}
													if(gLog==1){console.log("PRODCBK - " + prodInLabArr[prodIncr][12]);}
													var cbkSplit = prodInLabArr[prodIncr][12].split(",");
													var cbkWrite = "";
													if (cbkSplit[0] == 1) {cbkWrite += cansVal;}
													if (cbkSplit[1] == 1) {cbkWrite += bottlesVal;}
													if (cbkSplit[2] == 1) {cbkWrite += kegsVal;}
													productHTMLTest = baseCBKHTMLStart + "<span class='panel_3_product_list_cbk_shell'>" + cbkWrite + "<\/span>" + baseCBKHTMLEnd;
												}
												var prodBigImgTagStart = productHTMLTest.indexOf("<!--PRODBIGIMG");
												if (prodBigImgTagStart != -1) {
													var prodBigImgTagEnd = productHTMLTest.indexOf(">",prodBigImgTagStart);
													var baseProdBigImgHTMLStart = productHTMLTest.substr(0,prodBigImgTagStart);
													var baseProdBigImgHTMLEnd = productHTMLTest.substr((prodBigImgTagEnd+1));
													productHTMLTest = baseProdBigImgHTMLStart + "<img title=\"" + prodInLabArr[prodIncr][2] + "\" alt=\"" + prodInLabArr[prodIncr][2] + "\" class='panel_3_product_list_name_bigimg' src='" + clientImgBase + prodInLabArr[prodIncr][4] + "'>" + baseProdBigImgHTMLEnd;
												}
												var prodSmImgTagStart = productHTMLTest.indexOf("<!--PRODSMIMG");
												if (prodSmImgTagStart != -1) {
													var prodSmImgTagEnd = productHTMLTest.indexOf(">",prodSmImgTagStart);
													var baseProdSmImgHTMLStart = productHTMLTest.substr(0,prodSmImgTagStart);
													var baseProdSmImgHTMLEnd = productHTMLTest.substr((prodSmImgTagEnd+1));
													productHTMLTest = baseProdSmImgHTMLStart + "<img title=\"" + prodInLabArr[prodIncr][2] + "\" alt=\"" + prodInLabArr[prodIncr][2] + "\" class='panel_3_product_list_name_smimg' src='" + clientImgBase + prodInLabArr[prodIncr][5] + "'>" + baseProdSmImgHTMLEnd;
												}
												var stockCodeTagStart = productHTMLTest.indexOf("<!--STOCKCODE");
												if (stockCodeTagStart != -1) {
													var stockCodeTagEnd = productHTMLTest.indexOf(">",stockCodeTagStart);
													var stockCodeTagStrip = productHTMLTest.substring(stockCodeTagStart,(stockCodeTagEnd+1));
													var baseStockCodeHTMLStart = productHTMLTest.substr(0,stockCodeTagStart);
													var baseStockCodeHTMLEnd = productHTMLTest.substr((stockCodeTagEnd+1));
													var stockCodeIDStart = stockCodeTagStrip.indexOf(" ID=");
													if (stockCodeIDStart != -1) {
														var stockCodeIDEnd = stockCodeTagStrip.indexOf("]");
														var stockCodeIDList = stockCodeTagStrip.substring((stockCodeIDStart+5),(stockCodeIDEnd));
													}
													else {
														var stockCodeIDList = panel3StockCodeList;
													}
													var stockCodeIDArray = stockCodeIDList.split(",");
													var stockCodeIDWrite = "";
													for (k=0;k<stockCodeIDArray.length;k++) {
														if (stockCodeIDArray[k] == prodInLabArr[prodIncr][10]) {
															for (f=0;f<stockArray.length;f++) {
																if (stockArray[f][0] == prodInLabArr[prodIncr][10]) {
																	if (prodInLabArr[prodIncr][10] == "2") {
																		stockCodeIDWrite = "<a href='#' class='panel_3_stock_code_2' onclick='panel3panel4Connect();return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3panel4Connect();return false;}' tabindex='0' title=\"" + stockArray[f][1] + "\">" + stockArray[f][1] + "<\/a>";
																	}
																	else {
																		stockCodeIDWrite = stockArray[f][1];
																	}
																	break;
																}
															}
														}
													}
													productHTMLTest = baseStockCodeHTMLStart + stockCodeIDWrite + baseStockCodeHTMLEnd;
												}
												var stockLocNameTagStart = productHTMLTest.indexOf("<!--STOCKLOCNAME");
												if (stockLocNameTagStart != -1) {
													var stockLocNameTagEnd = productHTMLTest.indexOf(">",stockLocNameTagStart);
													var stockLocNameTagStrip = productHTMLTest.substring(stockLocNameTagStart,(stockLocNameTagEnd+1));
													var baseStockLocNameHTMLStart = productHTMLTest.substr(0,stockLocNameTagStart);
													var baseStockLocNameHTMLEnd = productHTMLTest.substr((stockLocNameTagEnd+1));
													var stockLocNameWrite = "";
													for (k=0;k<stocklocArray.length;k++) {
														if (stocklocArray[k][0] == prodInLabArr[prodIncr][11]) {
															stockLocNameWrite = "<span class='panel_3_stockloc_name'>" + stocklocArray[k][1] + "<\/span>";
														}
													}
													productHTMLTest = baseStockLocNameHTMLStart + stockLocNameWrite + baseStockLocNameHTMLEnd;
												}
												writeHTML += productHTMLTest;
											}
										}
									}
								}
							}
						}
					}
				}
				else {
					if(gLog==1){console.log("panel3WriteProducts - prodWriteStripArray.length && prodWriteStripArray.length != prodWriteArray.length -- panel3LabelSwitch != 0");}
					for (labelIncr=0;labelIncr<labelArray.length;labelIncr++) {
						var showDisLabel = 0;
						var labelBreak = 0;
						var daLabelName = labelArray[labelIncr][1];
						for (pli=0; pli<prodLabelArray.length; pli++) {
							for (pwl=0; pwl<prodWriteStripArray.length; pwl++) {
								if (prodWriteStripArray[pwl][0] == prodLabelArray[pli][1] && prodLabelArray[pli][2] == labelArray[labelIncr][0]) {
									labelBreak = 1;
									showDisLabel = 1;
									break;
								}
							}
							if (labelBreak == 1) {
								break;
							}
						}
						if (showDisLabel == 1) {
							var labelHTMLTest = autotextIt(p3TemplateSet.panel3ProdCartLabelDiv,"panel3ProdCartLabel");
							var labelNameTagStart = labelHTMLTest.indexOf("<!--LABELNAME");
							if (labelNameTagStart != -1) {
								var labelNameTagEnd = labelHTMLTest.indexOf(">",labelNameTagStart);
								var baseLabelNameHTMLStart = labelHTMLTest.substr(0,labelNameTagStart);
								var baseLabelNameHTMLEnd = labelHTMLTest.substr((labelNameTagEnd+1));
								labelHTMLTest = baseLabelNameHTMLStart + daLabelName + baseLabelNameHTMLEnd;
							}
							writeHTML += labelHTMLTest;
							for (pli=0; pli<prodLabelArray.length; pli++) {
								for (prodIncr=0;prodIncr<prodWriteStripArray.length;prodIncr++) {
									if (prodWriteStripArray[prodIncr][0] == prodLabelArray[pli][1] && prodLabelArray[pli][2] == labelArray[labelIncr][0]) {
										var productHTMLTest = autotextIt(p3TemplateSet.panel3ProdCartProdDiv,"panel3ProdCartProd");
										var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
										if (prodDiscTagStart != -1) {
											var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
											var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
											var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
											var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
											var prodDiscWrite = "";
											var discVal = prodWriteStripArray[prodIncr][6];
											if (discVal != 1) {
												prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel3ProdCartProd_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
											}
											productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
										}
										var prodNameTagStart = productHTMLTest.indexOf("<!--PRODNAME");
										if (prodNameTagStart != -1) {
											var prodNameTagEnd = productHTMLTest.indexOf(">",prodNameTagStart);
											var prodNameTagStrip = productHTMLTest.substring(prodNameTagStart,(prodNameTagEnd+1));
											var baseProdNameHTMLStart = productHTMLTest.substr(0,prodNameTagStart);
											var baseProdNameHTMLEnd = productHTMLTest.substr((prodNameTagEnd+1));
											var descTest = prodNameTagStrip.indexOf(" DESC");
											if (descTest != -1) {
												var descVal = "<span class='panel_3_product_list_name_desc'>" + prodWriteStripArray[prodIncr][3] + "<\/span>";
											}
											else {
												var descVal = "";
											}
											productHTMLTest = baseProdNameHTMLStart + "<span class='panel_3_product_list_name_name'>" + prodWriteStripArray[prodIncr][2] + "<\/span>" + descVal + baseProdNameHTMLEnd;
										}
										var CBKTagStart = productHTMLTest.indexOf("<!--PRODCBK");
										if (CBKTagStart != -1) {
											var CBKTagEnd = productHTMLTest.indexOf(">",CBKTagStart);
											var CBKTagStrip = productHTMLTest.substring(CBKTagStart,(CBKTagEnd+1));
											var baseCBKHTMLStart = productHTMLTest.substr(0,CBKTagStart);
											var baseCBKHTMLEnd = productHTMLTest.substr((CBKTagEnd+1));
											var cansTestStart = CBKTagStrip.indexOf(" CANS=");
											if (cansTestStart != -1) {
												var cansTestEnd = CBKTagStrip.indexOf("]",cansTestStart);
												var cansVal = "<span class='panel_3_product_list_cans'><i class='fa " + CBKTagStrip.substring((cansTestStart+7),(cansTestEnd)) + "'><\/i> cans<\/span>";
											}
											else {
												var cansVal = "<span class='panel_3_product_list_cans'>cans<\/span>";
											}
											var bottlesTestStart = CBKTagStrip.indexOf(" BOTTLES=");
											if (bottlesTestStart != -1) {
												var bottlesTestEnd = CBKTagStrip.indexOf("]",bottlesTestStart);
												var bottlesVal = "<span class='panel_3_product_list_bottles'><i class='fa " + CBKTagStrip.substring((bottlesTestStart+10),(bottlesTestEnd)) + "'><\/i> bottles<\/span>";
											}
											else {
												var bottlesVal = "<span class='panel_3_product_list_bottles'>bottles<\/span>";
											}
											var kegsTestStart = CBKTagStrip.indexOf(" KEGS=");
											if (kegsTestStart != -1) {
												var kegsTestEnd = CBKTagStrip.indexOf("]",kegsTestStart);
												var kegsVal = "<span class='panel_3_product_list_kegs'><i class='fa " + CBKTagStrip.substring((kegsTestStart+7),(kegsTestEnd)) + "'><\/i> kegs<\/span>";
											}
											else {
												var kegsVal = "<span class='panel_3_product_list_kegs'>kegs<\/span>";
											}
											if(gLog==1){console.log("PRODCBK - " + prodWriteStripArray[prodIncr][12]);}
											var cbkSplit = prodWriteStripArray[prodIncr][12].split(",");
											var cbkWrite = "";
											if (cbkSplit[0] == 1) {cbkWrite += cansVal;}
											if (cbkSplit[1] == 1) {cbkWrite += bottlesVal;}
											if (cbkSplit[2] == 1) {cbkWrite += kegsVal;}
											productHTMLTest = baseCBKHTMLStart + "<span class='panel_3_product_list_cbk_shell'>" + cbkWrite + "<\/span>" + baseCBKHTMLEnd;
										}
										var prodBigImgTagStart = productHTMLTest.indexOf("<!--PRODBIGIMG");
										if (prodBigImgTagStart != -1) {
											var prodBigImgTagEnd = productHTMLTest.indexOf(">",prodBigImgTagStart);
											var baseProdBigImgHTMLStart = productHTMLTest.substr(0,prodBigImgTagStart);
											var baseProdBigImgHTMLEnd = productHTMLTest.substr((prodBigImgTagEnd+1));
											productHTMLTest = baseProdBigImgHTMLStart + "<img title=\"" + prodWriteStripArray[prodIncr][2] + "\" alt=\"" + prodWriteStripArray[prodIncr][2] + "\" class='panel_3_product_list_name_bigimg' src='" + clientImgBase + prodWriteStripArray[prodIncr][4] + "'>" + baseProdBigImgHTMLEnd;
										}
										var prodSmImgTagStart = productHTMLTest.indexOf("<!--PRODSMIMG");
										if (prodSmImgTagStart != -1) {
											var prodSmImgTagEnd = productHTMLTest.indexOf(">",prodSmImgTagStart);
											var baseProdSmImgHTMLStart = productHTMLTest.substr(0,prodSmImgTagStart);
											var baseProdSmImgHTMLEnd = productHTMLTest.substr((prodSmImgTagEnd+1));
											productHTMLTest = baseProdSmImgHTMLStart + "<img title=\"" + prodWriteStripArray[prodIncr][2] + "\" alt=\"" + prodWriteStripArray[prodIncr][2] + "\" class='panel_3_product_list_name_smimg' src='" + clientImgBase + prodWriteStripArray[prodIncr][5] + "'>" + baseProdSmImgHTMLEnd;
										}
										var stockCodeTagStart = productHTMLTest.indexOf("<!--STOCKCODE");
										if (stockCodeTagStart != -1) {
											var stockCodeTagEnd = productHTMLTest.indexOf(">",stockCodeTagStart);
											var stockCodeTagStrip = productHTMLTest.substring(stockCodeTagStart,(stockCodeTagEnd+1));
											var baseStockCodeHTMLStart = productHTMLTest.substr(0,stockCodeTagStart);
											var baseStockCodeHTMLEnd = productHTMLTest.substr((stockCodeTagEnd+1));
											var stockCodeIDStart = stockCodeTagStrip.indexOf(" ID=");
											if (stockCodeIDStart != -1) {
												var stockCodeIDEnd = stockCodeTagStrip.indexOf("]");
												var stockCodeIDList = stockCodeTagStrip.substring((stockCodeIDStart+5),(stockCodeIDEnd));
											}
											else {
												var stockCodeIDList = panel3StockCodeList;
											}
											var stockCodeIDArray = stockCodeIDList.split(",");
											var stockCodeIDWrite = "";
											for (k=0;k<stockCodeIDArray.length;k++) {
												if (stockCodeIDArray[k] == prodWriteStripArray[prodIncr][10]) {
													for (f=0;f<stockArray.length;f++) {
														if (stockArray[f][0] == prodWriteStripArray[prodIncr][10]) {
															if (prodWriteStripArray[prodIncr][10] == "2") {
																stockCodeIDWrite = "<a href='#' class='panel_3_stock_code_2' onclick='panel3panel4Connect();return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3panel4Connect();return false;}' tabindex='0' title=\"" + stockArray[f][1] + "\">" + stockArray[f][1] + "<\/a>";
															}
															else {
																stockCodeIDWrite = stockArray[f][1];
															}
															break;
														}
													}
												}
											}
											productHTMLTest = baseStockCodeHTMLStart + stockCodeIDWrite + baseStockCodeHTMLEnd;
										}
										var stockLocNameTagStart = productHTMLTest.indexOf("<!--STOCKLOCNAME");
										if (stockLocNameTagStart != -1) {
											var stockLocNameTagEnd = productHTMLTest.indexOf(">",stockLocNameTagStart);
											var stockLocNameTagStrip = productHTMLTest.substring(stockLocNameTagStart,(stockLocNameTagEnd+1));
											var baseStockLocNameHTMLStart = productHTMLTest.substr(0,stockLocNameTagStart);
											var baseStockLocNameHTMLEnd = productHTMLTest.substr((stockLocNameTagEnd+1));
											var stockLocNameWrite = "";
											for (k=0;k<stocklocArray.length;k++) {
												if (stocklocArray[k][0] == prodWriteStripArray[prodIncr][11]) {
													stockLocNameWrite = "<span class='panel_3_stockloc_name'>" + stocklocArray[k][1] + "<\/span>";
												}
											}
											productHTMLTest = baseStockLocNameHTMLStart + stockLocNameWrite + baseStockLocNameHTMLEnd;
										}
										writeHTML += productHTMLTest;
										break;
									}
								}
							}
						}
					}
				}
			}
			var baseStopHTML = autotextIt(p3TemplateSet.panel3ProductsStopDiv,"panel3ProductsStop");
			if (baseStopHTML.length != -1) {
				writeHTML += baseStopHTML;
			}
		}
		if (isIE) {
			writeHTML = writeHTML.replace(/\/\*/g,"");
		}
		if (prodWriteStripArray.length == 0 && prodWriteListArray.length == 0) {
			document.getElementById('panel3ProductsText').innerHTML = autotextIt(p3TemplateSet.panel3ProductsNoneDiv,"panel3ProductsNone");
		}
		else {
			document.getElementById('panel3ProductsText').innerHTML = writeHTML;
		}
	}
	else {
		document.getElementById('panel3ProductsText').innerHTML = autotextIt(p3TemplateSet.panel3ProductsNoneDiv,"panel3ProductsNone");
	}
}
function panel3SliderControl(slid) {
	for (x=0; x<panel3SliderArray.length; x++) {
		if (x == slid) {
			if (panel3SliderArray[x][3] == 0) {
				$("." + panel3SliderArray[x][0]).slideDown(250);
				$(".panel_3_slider_i_" + x).removeClass(panel3SliderArray[x][2]);
				$(".panel_3_slider_i_" + x).addClass(panel3SliderArray[x][1]);
				panel3SliderArray[x][3] = 1;
			}
			else {
				$("." + panel3SliderArray[x][0]).slideUp(250);
				$(".panel_3_slider_i_" + x).removeClass(panel3SliderArray[x][1]);
				$(".panel_3_slider_i_" + x).addClass(panel3SliderArray[x][2]);
				panel3SliderArray[x][3] = 0;
			}
		}
		else {
			$("." + panel3SliderArray[x][0]).slideUp(100);
			$(".panel_3_slider_i_" + x).removeClass(panel3SliderArray[x][1]);
			$(".panel_3_slider_i_" + x).addClass(panel3SliderArray[x][2]);
			panel3SliderArray[x][3] = 0;
		}
	}
}
function panel3SlideItUp() {
	for (x=0; x<panel3SliderArray.length; x++) {
		$("." + panel3SliderArray[x][0]).slideUp(100);
		$(".panel_3_slider_i_" + x).removeClass(panel3SliderArray[x][1]);
		$(".panel_3_slider_i_" + x).addClass(panel3SliderArray[x][2]);
		panel3SliderArray[x][3] = 0;
	}
}
function panel3WriteDirectionsText(result) {
	if (document.getElementById('panel3DirectionsText')) {
		if (locServe == 0) {
			if (result) {
				var myRoute = result.routes[0].legs[0];
				for (var i = 0; i < myRoute.steps.length; i++) {
					var localTempDist = parseInt(myRoute.steps[i].distance.value);
					var localTempDur = parseInt(myRoute.steps[i].duration.value);
					panel3LocalDistanceNum += localTempDist;
					panel3LocalDurationNum += localTempDur;
				}
				var localBaseMiles = panel3LocalDistanceNum / 1609.344;
				var localFloorMiles = localBaseMiles.toFixed(2);
				var localBaseMinutes = Math.floor(panel3LocalDurationNum/60);
			}
			if (gtm != 0) {
				GTMit("STOREDIR", "click", "LOC|" + storeDisplayArray[panel3storeNow][0] + "|" + storeDisplayArray[panel3storeNow][1] + "|" + storeDisplayArray[panel3storeNow][3] + "|" + storeDisplayArray[panel3storeNow][4] + "|" + storeDisplayArray[panel3storeNow][5] + "|" + storeDisplayArray[panel3storeNow][6] + "|" + storeDisplayArray[panel3storeNow][7] + "|" + storeDisplayArray[panel3storeNow][27] + "|" + localFloorMiles,false);
			}
			var directTextStartHTML = autotextIt(p3TemplateSet.panel3DirectionsStartDiv,"panel3DirectionsStart");
			var printButtonTagStart = directTextStartHTML.indexOf("<!--PRINTBUTTON");
			if (printButtonTagStart != -1) {
				var printButtonTagEnd = directTextStartHTML.indexOf(">",printButtonTagStart);
				var printButtonTagStrip = directTextStartHTML.substring(printButtonTagStart,(printButtonTagEnd+1));
				var printButtonHTMLStart = directTextStartHTML.substr(0,printButtonTagStart);
				var printButtonHTMLEnd = directTextStartHTML.substr((printButtonTagEnd+1));
				var printButtonRender = "";
				var printButtonValueStart = printButtonTagStrip.indexOf(" VALUE=");
				if (printButtonValueStart != -1) {
					var printButtonValueEnd = printButtonTagStrip.indexOf("]",printButtonValueStart);
					var printButtonValueVar = printButtonTagStrip.substring((printButtonValueStart+8),(printButtonValueEnd));
				}
				else {
					var printButtonValueVar = "SEND";
				}
				var printButtonItalicStart = printButtonTagStrip.indexOf(" FNTAW=");
				if (printButtonItalicStart != -1) {
					var printButtonItalicEnd = printButtonTagStrip.indexOf("]",printButtonItalicStart);
					var printButtonItalicVar = "<i class='fa " + printButtonTagStrip.substring((printButtonItalicStart+8),(printButtonItalicEnd)) + "'><\/i>";
				}
				else {
					var printButtonItalicVar = "";
				}
				printButtonRender += "<div id='panel3PrintButton' class='panel_3_direct_print_button panel_3_direct_print_button_off'";
				if (hoverState==1) {
					printButtonRender += " onmouseover='panel3ButtonHover(\"panel3PrintButton\",\"panel_3_direct_print_button\",1);' onfocus='panel3ButtonHover(\"panel3PrintButton\",\"panel_3_direct_print_button\",1);' onmouseout='panel3ButtonHover(\"panel3PrintButton\",\"panel_3_direct_print_button\",0);' onblur='panel3ButtonHover(\"panel3PrintButton\",\"panel_3_direct_print_button\",0);'";
				}
				printButtonRender += " onclick='panel3Print();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3Print();}' tabindex='0' title=\"" + printButtonValueVar + "\">" + printButtonItalicVar + printButtonValueVar + "<\/div>";
				directTextStartHTML = printButtonHTMLStart + printButtonRender + printButtonHTMLEnd;
			}
			var directTextStartAddressTagStart = directTextStartHTML.indexOf("<!--LOCADDRESS");
			if (directTextStartAddressTagStart != -1 && result) {
				var directTextStartAddressTagEnd = directTextStartHTML.indexOf(">",directTextStartAddressTagStart);
				var directTextStartAddressTagStrip = directTextStartHTML.substring(directTextStartAddressTagStart,(directTextStartAddressTagEnd+1));
				var baseDirectTextStartAddressHTMLStart = directTextStartHTML.substr(0,directTextStartAddressTagStart);
				var baseDirectTextStartAddressHTMLEnd = directTextStartHTML.substr((directTextStartAddressTagEnd+1));
				directTextStartHTML = baseDirectTextStartAddressHTMLStart + "<div id='panel3DirectionsStartAddress' class='panel_3_directions_start_address'>" + document.getElementById('localStartAdd').value + "<\/div>" + baseDirectTextStartAddressHTMLEnd;
			}
			var directTextStartDistanceTagStart = directTextStartHTML.indexOf("<!--LOCDISTANCE");
			if (directTextStartDistanceTagStart != -1 && result) {
				var directTextStartDistanceTagEnd = directTextStartHTML.indexOf(">",directTextStartDistanceTagStart);
				var directTextStartDistanceTagStrip = directTextStartHTML.substring(directTextStartDistanceTagStart,(directTextStartDistanceTagEnd+1));
				var baseDirectTextStartDistanceHTMLStart = directTextStartHTML.substr(0,directTextStartDistanceTagStart);
				var baseDirectTextStartDistanceHTMLEnd = directTextStartHTML.substr((directTextStartDistanceTagEnd+1));
				var directTextStartDistanceKMTest = directTextStartDistanceTagStrip.indexOf(" KM");
				if (directTextStartDistanceKMTest != -1 || forceKM == 1) {
					var baseMiles = parseFloat(localFloorMiles);
					var finalMiles = Math.round((baseMiles*1.60934)*100)/100;
					var finalFormat = "km";
				}
				else {
					var finalMiles = localFloorMiles;
					var finalFormat = "mi";
				}
				var directTextStartDistanceBlankTest = directTextStartDistanceTagStrip.indexOf(" BLANK");
				if (directTextStartDistanceBlankTest != -1) {
					var finalFormat = "";
				}
				directTextStartHTML = baseDirectTextStartDistanceHTMLStart + "<div id='panel3DirectionsStartDistance' class='panel_3_directions_start_distance'>approx " + finalMiles + " " + finalFormat + "<\/div>" + baseDirectTextStartDistanceHTMLEnd;
			}
			var newLocFieldTagStart = directTextStartHTML.indexOf("<!--NEWLOCFIELD");
			if (newLocFieldTagStart != -1) {
				var newLocFieldTagEnd = directTextStartHTML.indexOf(">",newLocFieldTagStart);
				var newLocFieldTagStrip = directTextStartHTML.substring(newLocFieldTagStart,(newLocFieldTagEnd+1));
				var newLocFieldHTMLStart = directTextStartHTML.substr(0,newLocFieldTagStart);
				var newLocFieldHTMLEnd = directTextStartHTML.substr((newLocFieldTagEnd+1));
				var newLocFieldRender = "";
				var newLocFieldValueStart = newLocFieldTagStrip.indexOf(" VALUE=");
				if (newLocFieldValueStart != -1) {
					var newLocFieldValueEnd = newLocFieldTagStrip.indexOf("]");
					var newLocFieldValueVal = newLocFieldTagStrip.substring((newLocFieldValueStart+8),(newLocFieldValueEnd));
					var newLocFieldValueVar = newLocFieldValueVal;
					var newLocFieldValueRender = " placeholder='"+newLocFieldValueVal+"'";
					//p3DirBaseText = newLocFieldValueVal;
				}
				else {
					var newLocFieldValueRender = " placeholder='" + document.getElementById('localChangeAdd').value + "'";
				}
				var newLocFieldSubStart = newLocFieldTagStrip.indexOf(" SUBMIT");
				if (newLocFieldSubStart != -1) {
					var newLocFieldSubRender = " onkeyup='panel3NewLocKeypress(event,\"panel3NewLocField\",1);'";
				}
				else {
					var newLocFieldSubRender = " onkeyup='panel3NewLocKeypress(event,\"panel3NewLocField\",0);'";
				}
				newLocFieldRender = "<input type='text' name='panel3NewLocField' id='panel3NewLocField' class='panel_3_new_loc_field panel_3_new_loc_field_base'" + newLocFieldValueRender + newLocFieldSubRender + " title=\"Enter Location\">";
				directTextStartHTML = newLocFieldHTMLStart + newLocFieldRender + newLocFieldHTMLEnd;
			}
			var mobileLocFieldTagStart = directTextStartHTML.indexOf("<!--MOBILELOCFIELD");
			if (mobileLocFieldTagStart != -1) {
				var mobileLocFieldTagEnd = directTextStartHTML.indexOf(">",mobileLocFieldTagStart);
				var mobileLocFieldTagStrip = directTextStartHTML.substring(mobileLocFieldTagStart,(mobileLocFieldTagEnd+1));
				var mobileLocFieldHTMLStart = directTextStartHTML.substr(0,mobileLocFieldTagStart);
				var mobileLocFieldHTMLEnd = directTextStartHTML.substr((mobileLocFieldTagEnd+1));
				var mobileLocFieldRender = "";
				var mobileLocFieldValueStart = mobileLocFieldTagStrip.indexOf(" VALUE=");
				if (mobileLocFieldValueStart != -1) {
					var mobileLocFieldValueEnd = mobileLocFieldTagStrip.indexOf("]");
					var mobileLocFieldValueVal = mobileLocFieldTagStrip.substring((mobileLocFieldValueStart+8),(mobileLocFieldValueEnd));
					var mobileLocFieldValueVar = mobileLocFieldValueVal;
					var mobileLocFieldValueRender = " placeholder='"+mobileLocFieldValueVal+"'";
					//p3DirBaseText = mobileLocFieldValueVal;
				}
				else {
					var mobileLocFieldValueRender = " placeholder='" + document.getElementById('localChangeAdd').value + "'";
				}
				var mobileLocFieldSubStart = mobileLocFieldTagStrip.indexOf(" SUBMIT");
				if (mobileLocFieldSubStart != -1) {
					var mobileLocFieldSubRender = " onkeyup='panel3MobileLocKeypress(event,\"panel3MobileLocField\",1);'";
				}
				else {
					var mobileLocFieldSubRender = " onkeyup='panel3MobileLocKeypress(event,\"panel3MobileLocField\",0);'";
				}
				mobileLocFieldRender = "<input type='text' name='panel3MobileLocField' id='panel3MobileLocField' class='panel_3_mobile_loc_field panel_3_mobile_loc_field_base'" + mobileLocFieldValueRender + mobileLocFieldSubRender + " title=\"Enter Location\">";
				directTextStartHTML = mobileLocFieldHTMLStart + mobileLocFieldRender + mobileLocFieldHTMLEnd;
			}
			var newLocButtonTagStart = directTextStartHTML.indexOf("<!--NEWLOCBUTTON");
			if (newLocButtonTagStart != -1) {
				var newLocButtonTagEnd = directTextStartHTML.indexOf(">",newLocButtonTagStart);
				var newLocButtonTagStrip = directTextStartHTML.substring(newLocButtonTagStart,(newLocButtonTagEnd+1));
				var newLocButtonHTMLStart = directTextStartHTML.substr(0,newLocButtonTagStart);
				var newLocButtonHTMLEnd = directTextStartHTML.substr((newLocButtonTagEnd+1));
				var newLocButtonRender = "";
				var newLocButtonValueStart = newLocButtonTagStrip.indexOf(" VALUE=");
				if (newLocButtonValueStart != -1) {
					var newLocButtonValueEnd = newLocButtonTagStrip.indexOf("]",newLocButtonValueStart);
					var newLocButtonValueVar = newLocButtonTagStrip.substring((newLocButtonValueStart+8),(newLocButtonValueEnd));
				}
				else {
					var newLocButtonValueVar = "GO";
				}
				var newLocButtonItalicStart = newLocButtonTagStrip.indexOf(" FNTAW=");
				if (newLocButtonItalicStart != -1) {
					var newLocButtonItalicEnd = newLocButtonTagStrip.indexOf("]",newLocButtonItalicStart);
					var newLocButtonItalicVar = "<i class='fa " + newLocButtonTagStrip.substring((newLocButtonItalicStart+8),(newLocButtonItalicEnd)) + "'><\/i>";
				}
				else {
					var newLocButtonItalicVar = "";
				}
				newLocButtonRender += "<div id='panel3NewLocButton' class='panel_3_new_loc_button panel_3_new_loc_button_off'";
				if (hoverState==1) {
					newLocButtonRender += " onmouseover='panel3ButtonHover(\"panel3NewLocButton\",\"panel_3_new_loc_button\",1);' onfocus='panel3ButtonHover(\"panel3NewLocButton\",\"panel_3_new_loc_button\",1);' onmouseout='panel3ButtonHover(\"panel3NewLocButton\",\"panel_3_new_loc_button\",0);' onblur='panel3ButtonHover(\"panel3NewLocButton\",\"panel_3_new_loc_button\",0);'";
				}
				newLocButtonRender += " onclick='panel3CodeDirectAddressCheck();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3CodeDirectAddressCheck();}' tabindex='0' title=\"" + newLocButtonValueVar + "\">" + newLocButtonItalicVar + newLocButtonValueVar + "<\/div>";
				directTextStartHTML = newLocButtonHTMLStart + newLocButtonRender + newLocButtonHTMLEnd;
			}
			var stepIncr = 1;
			var directTextStepHTML = "";
			if (result) {
				for (var i = 0; i < myRoute.steps.length; i++) {
					var directTextStepHTMLTest = autotextIt(p3TemplateSet.panel3DirectionsStepDiv,"panel3DirectionsStep");
					var directTextStepNumberTagStart = directTextStepHTMLTest.indexOf("<!--STEPNUM");
					if (directTextStepNumberTagStart != -1) {
						var directTextStepNumberTagEnd = directTextStepHTMLTest.indexOf(">",directTextStepNumberTagStart);
						var directTextStepNumberTagStrip = directTextStepHTMLTest.substring(directTextStepNumberTagStart,(directTextStepNumberTagEnd+1));
						var baseDirectTextStepNumberHTMLStart = directTextStepHTMLTest.substr(0,directTextStepNumberTagStart);
						var baseDirectTextStepNumberHTMLEnd = directTextStepHTMLTest.substr((directTextStepNumberTagEnd+1));
						directTextStepHTMLTest = baseDirectTextStepNumberHTMLStart + "<div id='panel3DirectionsStepNumber" + stepIncr + "' class='panel_3_directions_step_number'>" + stepIncr + "<\/div>" + baseDirectTextStepNumberHTMLEnd;
					}
					var directTextStepTextTagStart = directTextStepHTMLTest.indexOf("<!--STEPTEXT");
					if (directTextStepTextTagStart != -1) {
						var directTextStepTextTagEnd = directTextStepHTMLTest.indexOf(">",directTextStepTextTagStart);
						var directTextStepTextTagStrip = directTextStepHTMLTest.substring(directTextStepTextTagStart,(directTextStepTextTagEnd+1));
						var baseDirectTextStepTextHTMLStart = directTextStepHTMLTest.substr(0,directTextStepTextTagStart);
						var baseDirectTextStepTextHTMLEnd = directTextStepHTMLTest.substr((directTextStepTextTagEnd+1));
						directTextStepHTMLTest = baseDirectTextStepTextHTMLStart + "<div id='panel3DirectionsStepText" + stepIncr + "' class='panel_3_directions_step_text'>" + myRoute.steps[i].instructions + "<\/div>" + baseDirectTextStepTextHTMLEnd;
					}
					var directTextStepDistanceTagStart = directTextStepHTMLTest.indexOf("<!--STEPDISTANCE");
					if (directTextStepDistanceTagStart != -1) {
						var directTextStepDistanceTagEnd = directTextStepHTMLTest.indexOf(">",directTextStepDistanceTagStart);
						var directTextStepDistanceTagStrip = directTextStepHTMLTest.substring(directTextStepDistanceTagStart,(directTextStepDistanceTagEnd+1));
						var baseDirectTextStepDistanceHTMLStart = directTextStepHTMLTest.substr(0,directTextStepDistanceTagStart);
						var baseDirectTextStepDistanceHTMLEnd = directTextStepHTMLTest.substr((directTextStepDistanceTagEnd+1));
						directTextStepHTMLTest = baseDirectTextStepDistanceHTMLStart + "<div id='panel3DirectionsStepDistance" + stepIncr + "' class='panel_3_directions_step_distance'>" + myRoute.steps[i].distance.text + "<\/div>" + baseDirectTextStepDistanceHTMLEnd;
					}
					stepIncr++;
					directTextStepHTML += directTextStepHTMLTest;
				}
			}
			var directTextStopHTML = autotextIt(p3TemplateSet.panel3DirectionsStopDiv,"panel3DirectionsStop");
			var directTextStopAddressTagStart = directTextStopHTML.indexOf("<!--LOCADDRESS");
			if (directTextStopAddressTagStart != -1 && result) {
				var directTextStopAddressTagEnd = directTextStopHTML.indexOf(">",directTextStopAddressTagStart);
				var directTextStopAddressTagStrip = directTextStopHTML.substring(directTextStopAddressTagStart,(directTextStopAddressTagEnd+1));
				var baseDirectTextStopAddressHTMLStart = directTextStopHTML.substr(0,directTextStopAddressTagStart);
				var baseDirectTextStopAddressHTMLEnd = directTextStopHTML.substr((directTextStopAddressTagEnd+1));
				directTextStopHTML = baseDirectTextStopAddressHTMLStart + "<div id='panel3DirectionsStopAddress' class='panel_3_directions_stop_address'>" + document.getElementById('localEndAdd').value + "<\/div>" + baseDirectTextStopAddressHTMLEnd;
			}
			var directTextStopDistanceTagStart = directTextStopHTML.indexOf("<!--LOCDISTANCE");
			if (directTextStopDistanceTagStart != -1 && result) {
				var directTextStopDistanceTagEnd = directTextStopHTML.indexOf(">",directTextStopDistanceTagStart);
				var directTextStopDistanceTagStrip = directTextStopHTML.substring(directTextStopDistanceTagStart,(directTextStopDistanceTagEnd+1));
				var baseDirectTextStopDistanceHTMLStart = directTextStopHTML.substr(0,directTextStopDistanceTagStart);
				var baseDirectTextStopDistanceHTMLEnd = directTextStopHTML.substr((directTextStopDistanceTagEnd+1));
				var directTextStopDistanceKMTest = directTextStopDistanceTagStrip.indexOf(" KM");
				if (directTextStopDistanceKMTest != -1 || forceKM == 1) {
					var baseMiles = parseFloat(localFloorMiles);
					var finalMiles = Math.round((baseMiles*1.60934)*100)/100;
					var finalFormat = "km";
				}
				else {
					var finalMiles = localFloorMiles;
					var finalFormat = "mi";
				}
				var directTextStopDistanceBlankTest = directTextStopDistanceTagStrip.indexOf(" BLANK");
				if (directTextStopDistanceBlankTest != -1) {
					var finalFormat = "";
				}
				directTextStopHTML = baseDirectTextStopDistanceHTMLStart + "<div id='panel3DirectionsStopDistance' class='panel_3_directions_stop_distance'>approx " + finalMiles + " " + finalFormat + "<\/div>" + baseDirectTextStopDistanceHTMLEnd;
			}
			if (isIE) {
				directTextStartHTML = directTextStartHTML.replace(/\/\*/g,"");
				directTextStepHTML = directTextStepHTML.replace(/\/\*/g,"");
				directTextStopHTML = directTextStopHTML.replace(/\/\*/g,"");
			}
			document.getElementById('panel3DirectionsText').innerHTML = directTextStartHTML + directTextStepHTML + directTextStopHTML;
		}
		else if (locServe == 1) {
			if (result && p3DirSequence.length) {
				panel3LocalDistanceNum = 0;
				panel3LocalDurationNum = 0;
				for (var i = 0; i < p3DirSequence.length; i++) {
					var localTempDist = parseFloat(p3DirSequence[i][2]);
					var localTempDur = parseFloat(p3DirSequence[i][3]);
					panel3LocalDistanceNum += localTempDist;
					panel3LocalDurationNum += localTempDur;
				}
				var localFloorMiles = panel3LocalDistanceNum.toFixed(2);
				var localBaseMinutes = Math.floor(panel3LocalDurationNum/60);
			}
			if (gtm != 0) {
				GTMit("STOREDIR", "click", "LOC|" + storeDisplayArray[panel3storeNow][0] + "|" + storeDisplayArray[panel3storeNow][1] + "|" + storeDisplayArray[panel3storeNow][3] + "|" + storeDisplayArray[panel3storeNow][4] + "|" + storeDisplayArray[panel3storeNow][5] + "|" + storeDisplayArray[panel3storeNow][6] + "|" + storeDisplayArray[panel3storeNow][7] + "|" + storeDisplayArray[panel3storeNow][27] + "|" + localFloorMiles,false);
			}
			var directTextStartHTML = autotextIt(p3TemplateSet.panel3DirectionsStartDiv,"panel3DirectionsStart");
			var printButtonTagStart = directTextStartHTML.indexOf("<!--PRINTBUTTON");
			if (printButtonTagStart != -1) {
				var printButtonTagEnd = directTextStartHTML.indexOf(">",printButtonTagStart);
				var printButtonTagStrip = directTextStartHTML.substring(printButtonTagStart,(printButtonTagEnd+1));
				var printButtonHTMLStart = directTextStartHTML.substr(0,printButtonTagStart);
				var printButtonHTMLEnd = directTextStartHTML.substr((printButtonTagEnd+1));
				var printButtonRender = "";
				var printButtonValueStart = printButtonTagStrip.indexOf(" VALUE=");
				if (printButtonValueStart != -1) {
					var printButtonValueEnd = printButtonTagStrip.indexOf("]",printButtonValueStart);
					var printButtonValueVar = printButtonTagStrip.substring((printButtonValueStart+8),(printButtonValueEnd));
				}
				else {
					var printButtonValueVar = "SEND";
				}
				var printButtonItalicStart = printButtonTagStrip.indexOf(" FNTAW=");
				if (printButtonItalicStart != -1) {
					var printButtonItalicEnd = printButtonTagStrip.indexOf("]",printButtonItalicStart);
					var printButtonItalicVar = "<i class='fa " + printButtonTagStrip.substring((printButtonItalicStart+8),(printButtonItalicEnd)) + "'><\/i>";
				}
				else {
					var printButtonItalicVar = "";
				}
				printButtonRender += "<div id='panel3PrintButton' class='panel_3_direct_print_button panel_3_direct_print_button_off'";
				if (hoverState==1) {
					printButtonRender += " onmouseover='panel3ButtonHover(\"panel3PrintButton\",\"panel_3_direct_print_button\",1);' onfocus='panel3ButtonHover(\"panel3PrintButton\",\"panel_3_direct_print_button\",1);' onmouseout='panel3ButtonHover(\"panel3PrintButton\",\"panel_3_direct_print_button\",0);' onblur='panel3ButtonHover(\"panel3PrintButton\",\"panel_3_direct_print_button\",0);'";
				}
				printButtonRender += " onclick='panel3Print();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3Print();}' tabindex='0' title=\"" + printButtonValueVar + "\">" + printButtonItalicVar + printButtonValueVar + "<\/div>";
				directTextStartHTML = printButtonHTMLStart + printButtonRender + printButtonHTMLEnd;
			}
			var directTextStartAddressTagStart = directTextStartHTML.indexOf("<!--LOCADDRESS");
			if (directTextStartAddressTagStart != -1 && result) {
				var directTextStartAddressTagEnd = directTextStartHTML.indexOf(">",directTextStartAddressTagStart);
				var directTextStartAddressTagStrip = directTextStartHTML.substring(directTextStartAddressTagStart,(directTextStartAddressTagEnd+1));
				var baseDirectTextStartAddressHTMLStart = directTextStartHTML.substr(0,directTextStartAddressTagStart);
				var baseDirectTextStartAddressHTMLEnd = directTextStartHTML.substr((directTextStartAddressTagEnd+1));
				if (document.getElementById('revDirStreet').value != "") {
					var sourceAddy = document.getElementById('revDirStreet').value + ", " + document.getElementById('revDirCity').value + ", " + document.getElementById('revDirState').value + " " + document.getElementById('revDirZip').value;
				}
				else {
					var sourceAddy = document.getElementById('revCodeStreet').value + ", " + document.getElementById('revCodeCity').value + ", " + document.getElementById('revCodeState').value + " " + document.getElementById('revCodeZip').value;
				}
				directTextStartHTML = baseDirectTextStartAddressHTMLStart + "<div id='panel3DirectionsStartAddress' class='panel_3_directions_start_address'>" + sourceAddy + "<\/div>" + baseDirectTextStartAddressHTMLEnd;
			}
			var directTextStartDistanceTagStart = directTextStartHTML.indexOf("<!--LOCDISTANCE");
			if (directTextStartDistanceTagStart != -1 && result) {
				var directTextStartDistanceTagEnd = directTextStartHTML.indexOf(">",directTextStartDistanceTagStart);
				var directTextStartDistanceTagStrip = directTextStartHTML.substring(directTextStartDistanceTagStart,(directTextStartDistanceTagEnd+1));
				var baseDirectTextStartDistanceHTMLStart = directTextStartHTML.substr(0,directTextStartDistanceTagStart);
				var baseDirectTextStartDistanceHTMLEnd = directTextStartHTML.substr((directTextStartDistanceTagEnd+1));
				var directTextStartDistanceKMTest = directTextStartDistanceTagStrip.indexOf(" KM");
				if (directTextStartDistanceKMTest != -1 || forceKM == 1) {
					var baseMiles = parseFloat(localFloorMiles);
					var finalMiles = Math.round((baseMiles*1.60934)*100)/100;
					var finalFormat = "km";
				}
				else {
					var finalMiles = localFloorMiles;
					var finalFormat = "mi";
				}
				var directTextStartDistanceBlankTest = directTextStartDistanceTagStrip.indexOf(" BLANK");
				if (directTextStartDistanceBlankTest != -1) {
					var finalFormat = "";
				}
				directTextStartHTML = baseDirectTextStartDistanceHTMLStart + "<div id='panel3DirectionsStartDistance' class='panel_3_directions_start_distance'>approx " + finalMiles + " " + finalFormat + "<\/div>" + baseDirectTextStartDistanceHTMLEnd;
			}
			var newLocFieldTagStart = directTextStartHTML.indexOf("<!--NEWLOCFIELD");
			if (newLocFieldTagStart != -1) {
				var newLocFieldTagEnd = directTextStartHTML.indexOf(">",newLocFieldTagStart);
				var newLocFieldTagStrip = directTextStartHTML.substring(newLocFieldTagStart,(newLocFieldTagEnd+1));
				var newLocFieldHTMLStart = directTextStartHTML.substr(0,newLocFieldTagStart);
				var newLocFieldHTMLEnd = directTextStartHTML.substr((newLocFieldTagEnd+1));
				var newLocFieldRender = "";
				var newLocFieldValueStart = newLocFieldTagStrip.indexOf(" VALUE=");
				if (newLocFieldValueStart != -1) {
					var newLocFieldValueEnd = newLocFieldTagStrip.indexOf("]");
					var newLocFieldValueVal = newLocFieldTagStrip.substring((newLocFieldValueStart+8),(newLocFieldValueEnd));
					var newLocFieldValueVar = newLocFieldValueVal;
					var newLocFieldValueRender = " placeholder='"+newLocFieldValueVal+"'";
					//p3DirBaseText = newLocFieldValueVal;
				}
				else {
					var newLocFieldValueRender = " placeholder='" + document.getElementById('localChangeAdd').value + "'";
				}
				var newLocFieldSubStart = newLocFieldTagStrip.indexOf(" SUBMIT");
				if (newLocFieldSubStart != -1) {
					var newLocFieldSubRender = " onkeyup='panel3NewLocKeypress(event,\"panel3NewLocField\",1);'";
				}
				else {
					var newLocFieldSubRender = " onkeyup='panel3NewLocKeypress(event,\"panel3NewLocField\",0);'";
				}
				newLocFieldRender = "<input type='text' name='panel3NewLocField' id='panel3NewLocField' class='panel_3_new_loc_field panel_3_new_loc_field_base'" + newLocFieldValueRender + newLocFieldSubRender + " title=\"Enter Location\">";
				directTextStartHTML = newLocFieldHTMLStart + newLocFieldRender + newLocFieldHTMLEnd;
			}
			var mobileLocFieldTagStart = directTextStartHTML.indexOf("<!--MOBILELOCFIELD");
			if (mobileLocFieldTagStart != -1) {
				var mobileLocFieldTagEnd = directTextStartHTML.indexOf(">",mobileLocFieldTagStart);
				var mobileLocFieldTagStrip = directTextStartHTML.substring(mobileLocFieldTagStart,(mobileLocFieldTagEnd+1));
				var mobileLocFieldHTMLStart = directTextStartHTML.substr(0,mobileLocFieldTagStart);
				var mobileLocFieldHTMLEnd = directTextStartHTML.substr((mobileLocFieldTagEnd+1));
				var mobileLocFieldRender = "";
				var mobileLocFieldValueStart = mobileLocFieldTagStrip.indexOf(" VALUE=");
				if (mobileLocFieldValueStart != -1) {
					var mobileLocFieldValueEnd = mobileLocFieldTagStrip.indexOf("]");
					var mobileLocFieldValueVal = mobileLocFieldTagStrip.substring((mobileLocFieldValueStart+8),(mobileLocFieldValueEnd));
					var mobileLocFieldValueVar = mobileLocFieldValueVal;
					var mobileLocFieldValueRender = " placeholder='"+mobileLocFieldValueVal+"'";
					//p3DirBaseText = mobileLocFieldValueVal;
				}
				else {
					var mobileLocFieldValueRender = " placeholder='" + document.getElementById('localChangeAdd').value + "'";
				}
				var mobileLocFieldSubStart = mobileLocFieldTagStrip.indexOf(" SUBMIT");
				if (mobileLocFieldSubStart != -1) {
					var mobileLocFieldSubRender = " onkeyup='panel3MobileLocKeypress(event,\"panel3MobileLocField\",1);'";
				}
				else {
					var mobileLocFieldSubRender = " onkeyup='panel3MobileLocKeypress(event,\"panel3MobileLocField\",0);'";
				}
				mobileLocFieldRender = "<input type='text' name='panel3MobileLocField' id='panel3MobileLocField' class='panel_3_mobile_loc_field panel_3_mobile_loc_field_base'" + mobileLocFieldValueRender + mobileLocFieldSubRender + " title=\"Enter Location\">";
				directTextStartHTML = mobileLocFieldHTMLStart + mobileLocFieldRender + mobileLocFieldHTMLEnd;
			}
			var newLocButtonTagStart = directTextStartHTML.indexOf("<!--NEWLOCBUTTON");
			if (newLocButtonTagStart != -1) {
				var newLocButtonTagEnd = directTextStartHTML.indexOf(">",newLocButtonTagStart);
				var newLocButtonTagStrip = directTextStartHTML.substring(newLocButtonTagStart,(newLocButtonTagEnd+1));
				var newLocButtonHTMLStart = directTextStartHTML.substr(0,newLocButtonTagStart);
				var newLocButtonHTMLEnd = directTextStartHTML.substr((newLocButtonTagEnd+1));
				var newLocButtonRender = "";
				var newLocButtonValueStart = newLocButtonTagStrip.indexOf(" VALUE=");
				if (newLocButtonValueStart != -1) {
					var newLocButtonValueEnd = newLocButtonTagStrip.indexOf("]",newLocButtonValueStart);
					var newLocButtonValueVar = newLocButtonTagStrip.substring((newLocButtonValueStart+8),(newLocButtonValueEnd));
				}
				else {
					var newLocButtonValueVar = "GO";
				}
				var newLocButtonItalicStart = newLocButtonTagStrip.indexOf(" FNTAW=");
				if (newLocButtonItalicStart != -1) {
					var newLocButtonItalicEnd = newLocButtonTagStrip.indexOf("]",newLocButtonItalicStart);
					var newLocButtonItalicVar = "<i class='fa " + newLocButtonTagStrip.substring((newLocButtonItalicStart+8),(newLocButtonItalicEnd)) + "'><\/i>";
				}
				else {
					var newLocButtonItalicVar = "";
				}
				newLocButtonRender += "<div id='panel3NewLocButton' class='panel_3_new_loc_button panel_3_new_loc_button_off'";
				if (hoverState==1) {
					newLocButtonRender += " onmouseover='panel3ButtonHover(\"panel3NewLocButton\",\"panel_3_new_loc_button\",1);' onfocus='panel3ButtonHover(\"panel3NewLocButton\",\"panel_3_new_loc_button\",1);' onmouseout='panel3ButtonHover(\"panel3NewLocButton\",\"panel_3_new_loc_button\",0);' onblur='panel3ButtonHover(\"panel3NewLocButton\",\"panel_3_new_loc_button\",0);'";
				}
				newLocButtonRender += " onclick='panel3CodeDirectAddressCheck();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3CodeDirectAddressCheck();}' tabindex='0' title=\"" + newLocButtonValueVar + "\">" + newLocButtonItalicVar + newLocButtonValueVar + "<\/div>";
				directTextStartHTML = newLocButtonHTMLStart + newLocButtonRender + newLocButtonHTMLEnd;
			}
			var directTextStepHTML = "";
			if (result) {
				for (var i = 0; i < p3DirSequence.length; i++) {
					var directTextStepHTMLTest = autotextIt(p3TemplateSet.panel3DirectionsStepDiv,"panel3DirectionsStep");
					var directTextStepNumberTagStart = directTextStepHTMLTest.indexOf("<!--STEPNUM");
					if (directTextStepNumberTagStart != -1) {
						var directTextStepNumberTagEnd = directTextStepHTMLTest.indexOf(">",directTextStepNumberTagStart);
						var directTextStepNumberTagStrip = directTextStepHTMLTest.substring(directTextStepNumberTagStart,(directTextStepNumberTagEnd+1));
						var baseDirectTextStepNumberHTMLStart = directTextStepHTMLTest.substr(0,directTextStepNumberTagStart);
						var baseDirectTextStepNumberHTMLEnd = directTextStepHTMLTest.substr((directTextStepNumberTagEnd+1));
						directTextStepHTMLTest = baseDirectTextStepNumberHTMLStart + "<div id='panel3DirectionsStepNumber" + p3DirSequence[i][0] + "' class='panel_3_directions_step_number'>" + p3DirSequence[i][0] + "<\/div>" + baseDirectTextStepNumberHTMLEnd;
					}
					var directTextStepTextTagStart = directTextStepHTMLTest.indexOf("<!--STEPTEXT");
					if (directTextStepTextTagStart != -1) {
						var directTextStepTextTagEnd = directTextStepHTMLTest.indexOf(">",directTextStepTextTagStart);
						var directTextStepTextTagStrip = directTextStepHTMLTest.substring(directTextStepTextTagStart,(directTextStepTextTagEnd+1));
						var baseDirectTextStepTextHTMLStart = directTextStepHTMLTest.substr(0,directTextStepTextTagStart);
						var baseDirectTextStepTextHTMLEnd = directTextStepHTMLTest.substr((directTextStepTextTagEnd+1));
						directTextStepHTMLTest = baseDirectTextStepTextHTMLStart + "<div id='panel3DirectionsStepText" + p3DirSequence[i][0] + "' class='panel_3_directions_step_text'>" + p3DirSequence[i][1] + "<\/div>" + baseDirectTextStepTextHTMLEnd;
					}
					var directTextStepDistanceTagStart = directTextStepHTMLTest.indexOf("<!--STEPDISTANCE");
					if (directTextStepDistanceTagStart != -1) {
						var directTextStepDistanceTagEnd = directTextStepHTMLTest.indexOf(">",directTextStepDistanceTagStart);
						var directTextStepDistanceTagStrip = directTextStepHTMLTest.substring(directTextStepDistanceTagStart,(directTextStepDistanceTagEnd+1));
						var baseDirectTextStepDistanceHTMLStart = directTextStepHTMLTest.substr(0,directTextStepDistanceTagStart);
						var baseDirectTextStepDistanceHTMLEnd = directTextStepHTMLTest.substr((directTextStepDistanceTagEnd+1));
						directTextStepHTMLTest = baseDirectTextStepDistanceHTMLStart + "<div id='panel3DirectionsStepDistance" + p3DirSequence[i][0] + "' class='panel_3_directions_step_distance'>" + p3DirSequence[i][2] + "<\/div>" + baseDirectTextStepDistanceHTMLEnd;
					}
					directTextStepHTML += directTextStepHTMLTest;
				}
			}
			var directTextStopHTML = autotextIt(p3TemplateSet.panel3DirectionsStopDiv,"panel3DirectionsStop");
			var directTextStopAddressTagStart = directTextStopHTML.indexOf("<!--LOCADDRESS");
			if (directTextStopAddressTagStart != -1 && result) {
				var directTextStopAddressTagEnd = directTextStopHTML.indexOf(">",directTextStopAddressTagStart);
				var directTextStopAddressTagStrip = directTextStopHTML.substring(directTextStopAddressTagStart,(directTextStopAddressTagEnd+1));
				var baseDirectTextStopAddressHTMLStart = directTextStopHTML.substr(0,directTextStopAddressTagStart);
				var baseDirectTextStopAddressHTMLEnd = directTextStopHTML.substr((directTextStopAddressTagEnd+1));
				var destAddy = storeDisplayArray[destIncr][1] + ", " + storeDisplayArray[destIncr][3] + ", " + storeDisplayArray[destIncr][4] + " " + storeDisplayArray[destIncr][5];
				directTextStopHTML = baseDirectTextStopAddressHTMLStart + "<div id='panel3DirectionsStopAddress' class='panel_3_directions_stop_address'>" + destAddy + "<\/div>" + baseDirectTextStopAddressHTMLEnd;
			}
			var directTextStopDistanceTagStart = directTextStopHTML.indexOf("<!--LOCDISTANCE");
			if (directTextStopDistanceTagStart != -1 && result) {
				var directTextStopDistanceTagEnd = directTextStopHTML.indexOf(">",directTextStopDistanceTagStart);
				var directTextStopDistanceTagStrip = directTextStopHTML.substring(directTextStopDistanceTagStart,(directTextStopDistanceTagEnd+1));
				var baseDirectTextStopDistanceHTMLStart = directTextStopHTML.substr(0,directTextStopDistanceTagStart);
				var baseDirectTextStopDistanceHTMLEnd = directTextStopHTML.substr((directTextStopDistanceTagEnd+1));
				var directTextStopDistanceKMTest = directTextStopDistanceTagStrip.indexOf(" KM");
				if (directTextStopDistanceKMTest != -1 || forceKM == 1) {
					var baseMiles = parseFloat(localFloorMiles);
					var finalMiles = Math.round((baseMiles*1.60934)*100)/100;
					var finalFormat = "km";
				}
				else {
					var finalMiles = localFloorMiles;
					var finalFormat = "mi";
				}
				var directTextStopDistanceBlankTest = directTextStopDistanceTagStrip.indexOf(" BLANK");
				if (directTextStopDistanceBlankTest != -1) {
					var finalFormat = "";
				}
				directTextStopHTML = baseDirectTextStopDistanceHTMLStart + "<div id='panel3DirectionsStopDistance' class='panel_3_directions_stop_distance'>approx " + finalMiles + " " + finalFormat + "<\/div>" + baseDirectTextStopDistanceHTMLEnd;
			}
			if (isIE) {
				directTextStartHTML = directTextStartHTML.replace(/\/\*/g,"");
				directTextStepHTML = directTextStepHTML.replace(/\/\*/g,"");
				directTextStopHTML = directTextStopHTML.replace(/\/\*/g,"");
			}
			document.getElementById('panel3DirectionsText').innerHTML = directTextStartHTML + directTextStepHTML + directTextStopHTML;
			loaderToggle(0);
		}
	}
	if (getTheDirFirst == 1) {
		getTheDirFirst = 2;
		panel3CompileEmail();
	}
}
function panel3FieldKeypress(e,addField,result) {
	var key;
	if(window.event) {key = window.event.keyCode;}
	else {key = e.which;}
	if(key == 13){
		if (result == 1) {
			panel3SubmitForm();
		}
		return false;
	}
}
function panel3ResetCategories() {
	$('.panel_3_prodlist_catreset').removeClass('panel_3_prodlist_catreset_off');
	$('.panel_3_prodlist_catreset').removeClass('panel_3_prodlist_catreset_hover');
	$('.panel_3_prodlist_catreset').addClass('panel_3_prodlist_catreset_on');
	$('.panel_3_family_name').removeClass('panel_3_family_name_hover');
	$('.panel_3_family_name').removeClass('panel_3_family_name_on');
	$('.panel_3_family_name').addClass('panel_3_family_name_off');
	$('.panel_3_category_name').removeClass('panel_3_category_name_hover');
	$('.panel_3_category_name').removeClass('panel_3_category_name_on');
	$('.panel_3_category_name').addClass('panel_3_category_name_off');
	$('.panel_3_label_name').removeClass('panel_3_label_name_hover');
	$('.panel_3_label_name').removeClass('panel_3_label_name_on');
	$('.panel_3_label_name').addClass('panel_3_label_name_off');
	$('.panel_3_product_name').show();
	for (w=0;w<prodFilterArray.length;w++) {
		$('.panel_3_prodlist_prodshell_'+prodFilterArray[w][0]).removeClass('panel_3_prodlist_prodshell_on');
		$('.panel_3_prodlist_prodshell_'+prodFilterArray[w][0]).addClass('panel_3_prodlist_prodshell_off');
		var j = document.getElementsByClassName('panel_3_prodlist_prodshell_'+prodFilterArray[w][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
	for (x=0;x<famArray.length;x++) {
		famArray[x][5] = 0;
		$('.panel_3_prodlist_famshell_'+famArray[x][0]).removeClass('panel_3_prodlist_famshell_on');
		$('.panel_3_prodlist_famshell_'+famArray[x][0]).addClass('panel_3_prodlist_famshell_off');
		var j = document.getElementsByClassName('panel_3_prodlist_famshell_'+famArray[x][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
	for (y=0;y<catArray.length;y++) {
		catArray[y][6] = 0;
		$('#panel3CategoryName'+catArray[y][0]).removeClass('panel_3_category_name_hover');
		$('#panel3CategoryName'+catArray[y][0]).removeClass('panel_3_category_name_on');
		$('#panel3CategoryName'+catArray[y][0]).addClass('panel_3_category_name_off');
		$('#panel3CategoryName'+catArray[y][0]+'All').removeClass('panel_3_category_name_all_hover');
		$('#panel3CategoryName'+catArray[y][0]+'All').removeClass('panel_3_category_name_all_on');
		$('#panel3CategoryName'+catArray[y][0]+'All').addClass('panel_3_category_name_all_off');
		$('.panel_3_prodlist_catshell_'+catArray[y][0]).removeClass('panel_3_prodlist_catshell_on');
		$('.panel_3_prodlist_catshell_'+catArray[y][0]).addClass('panel_3_prodlist_catshell_off');
		var j = document.getElementsByClassName('panel_3_prodlist_catshell_'+catArray[y][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
	for (z=0;z<labelArray.length;z++) {
		labelArray[z][3] = 0;
		$('.panel_3_prodlist_labelshell_'+labelArray[z][0]).removeClass('panel_3_prodlist_labelshell_on');
		$('.panel_3_prodlist_labelshell_'+labelArray[z][0]).addClass('panel_3_prodlist_labelshell_off');
		var j = document.getElementsByClassName('panel_3_prodlist_labelshell_'+labelArray[z][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
}
function panel3FamCatProdOpen(famVar) {
	if (whatPLF3 != -1) {
		$(".panel_3_family_category_shell_"+famArray[whatPLF3][0]).slideUp(200);
	}
	if (famVar == whatPLF3) {
		whatPLF3 = -1;
	}
	else {
		$(".panel_3_family_category_shell_"+famArray[famVar][0]).slideDown(200);
		whatPLF3 = famVar;
	}
	$(".panel_3_family_category_product_shell").slideUp(200);
	whatPLFC3 = -1;
}
function panel3CatProdOpen(catVar) {
	if (whatPLFC3 != -1) {
		$(".panel_3_family_category_product_shell_"+catArray[whatPLFC3][0]).slideUp(200);
	}
	if (catVar == whatPLFC3) {
		whatPLFC3 = -1;
	}
	else {
		$(".panel_3_family_category_product_shell_"+catArray[catVar][0]).slideDown(200);
		whatPLFC3 = catVar;
	}
}
function panel3FamMouseOver (famVar) {
	if (document.getElementById('panel3FamilyName'+famArray[famVar][0])) {
		if (famArray[famVar][5] == 0) {
			$('#panel3FamilyName'+famArray[famVar][0]).removeClass('panel_3_family_name_off');
			$('#panel3FamilyName'+famArray[famVar][0]).addClass('panel_3_family_name_hover');
			$('#panel3FamilyName'+famArray[famVar][0]+'All').removeClass('panel_3_family_name_all_off');
			$('#panel3FamilyName'+famArray[famVar][0]+'All').addClass('panel_3_family_name_all_hover');
		}
		else {
			$('#panel3FamilyName'+famArray[famVar][0]).removeClass('panel_3_family_name_on');
			$('#panel3FamilyName'+famArray[famVar][0]).addClass('panel_3_family_name_hover');
			$('#panel3FamilyName'+famArray[famVar][0]+'All').removeClass('panel_3_family_name_all_on');
			$('#panel3FamilyName'+famArray[famVar][0]+'All').addClass('panel_3_family_name_all_hover');
		}
	}
}
function panel3FamMouseOut (famVar) {
	if (document.getElementById('panel3FamilyName'+famArray[famVar][0])) {
		if (famArray[famVar][5] == 0) {
			$('#panel3FamilyName'+famArray[famVar][0]).removeClass('panel_3_family_name_hover');
			$('#panel3FamilyName'+famArray[famVar][0]).addClass('panel_3_family_name_off');
			$('#panel3FamilyName'+famArray[famVar][0]+'All').removeClass('panel_3_family_name_all_hover');
			$('#panel3FamilyName'+famArray[famVar][0]+'All').addClass('panel_3_family_name_all_off');
		}
		else {
			$('#panel3FamilyName'+famArray[famVar][0]).removeClass('panel_3_family_name_hover');
			$('#panel3FamilyName'+famArray[famVar][0]).addClass('panel_3_family_name_on');
			$('#panel3FamilyName'+famArray[famVar][0]+'All').removeClass('panel_3_family_name_all_hover');
			$('#panel3FamilyName'+famArray[famVar][0]+'All').addClass('panel_3_family_name_all_on');
		}
	}
}
function panel3CatMouseOver (catVar) {
	if (document.getElementById('panel3CategoryName'+catArray[catVar][0])) {
		if (catArray[catVar][6] == 0) {
			$('#panel3CategoryName'+catArray[catVar][0]).removeClass('panel_3_category_name_off');
			$('#panel3CategoryName'+catArray[catVar][0]).addClass('panel_3_category_name_hover');
			$('#panel3CategoryName'+catArray[catVar][0]+'All').removeClass('panel_3_category_name_all_off');
			$('#panel3CategoryName'+catArray[catVar][0]+'All').addClass('panel_3_category_name_all_hover');
		}
		else {
			$('#panel3CategoryName'+catArray[catVar][0]).removeClass('panel_3_category_name_on');
			$('#panel3CategoryName'+catArray[catVar][0]).addClass('panel_3_category_name_hover');
			$('#panel3CategoryName'+catArray[catVar][0]+'All').removeClass('panel_3_category_name_all_on');
			$('#panel3CategoryName'+catArray[catVar][0]+'All').addClass('panel_3_category_name_all_hover');
		}
	}
}
function panel3CatMouseOut (catVar) {
	if (document.getElementById('panel3CategoryName'+catArray[catVar][0])) {
		if (catArray[catVar][6] == 0) {
			$('#panel3CategoryName'+catArray[catVar][0]).removeClass('panel_3_category_name_hover');
			$('#panel3CategoryName'+catArray[catVar][0]).addClass('panel_3_category_name_off');
			$('#panel3CategoryName'+catArray[catVar][0]+'All').removeClass('panel_3_category_name_all_hover');
			$('#panel3CategoryName'+catArray[catVar][0]+'All').addClass('panel_3_category_name_all_off');
		}
		else {
			$('#panel3CategoryName'+catArray[catVar][0]).removeClass('panel_3_category_name_hover');
			$('#panel3CategoryName'+catArray[catVar][0]).addClass('panel_3_category_name_on');
			$('#panel3CategoryName'+catArray[catVar][0]+'All').removeClass('panel_3_category_name_all_hover');
			$('#panel3CategoryName'+catArray[catVar][0]+'All').addClass('panel_3_category_name_all_on');
		}
	}
}
function panel3LabelMouseOver (labelVar) {
	if (document.getElementById('panel3LabelName'+labelArray[labelVar][0])) {
		if (labelArray[labelVar][3] == 0) {
			$('#panel3LabelName'+labelArray[labelVar][0]).removeClass('panel_3_label_name_off');
			$('#panel3LabelName'+labelArray[labelVar][0]).addClass('panel_3_label_name_hover');
			$('#panel3LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_3_label_name_all_off');
			$('#panel3LabelName'+labelArray[labelVar][0]+'All').addClass('panel_3_label_name_all_hover');
		}
		else {
			$('#panel3LabelName'+labelArray[labelVar][0]).removeClass('panel_3_label_name_on');
			$('#panel3LabelName'+labelArray[labelVar][0]).addClass('panel_3_label_name_hover');
			$('#panel3LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_3_label_name_all_on');
			$('#panel3LabelName'+labelArray[labelVar][0]+'All').addClass('panel_3_label_name_all_hover');
		}
	}
}
function panel3LabelMouseOut (labelVar) {
	if (document.getElementById('panel3LabelName'+labelArray[labelVar][0])) {
		if (labelArray[labelVar][3] == 0) {
			$('#panel3LabelName'+labelArray[labelVar][0]).removeClass('panel_3_label_name_hover');
			$('#panel3LabelName'+labelArray[labelVar][0]).addClass('panel_3_label_name_off');
			$('#panel3LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_3_label_name_all_hover');
			$('#panel3LabelName'+labelArray[labelVar][0]+'All').addClass('panel_3_label_name_all_off');
		}
		else {
			$('#panel3LabelName'+labelArray[labelVar][0]).removeClass('panel_3_label_name_hover');
			$('#panel3LabelName'+labelArray[labelVar][0]).addClass('panel_3_label_name_on');
			$('#panel3LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_3_label_name_all_hover');
			$('#panel3LabelName'+labelArray[labelVar][0]+'All').addClass('panel_3_label_name_all_on');
		}
	}
}
function panel3SelectLabel(labelVar,labelID,labelString,showHide) {
	if(gLog==1){console.log("panel3SelectLabel START");}
	$('.panel_3_prodlist_catreset').removeClass('panel_3_prodlist_catreset_on');
	$('.panel_3_prodlist_catreset').removeClass('panel_3_prodlist_catreset_hover');
	$('.panel_3_prodlist_catreset').addClass('panel_3_prodlist_catreset_off');
	whatStoreUp = 0;
	if (document.getElementById(labelID)) {
		if(gLog==1){console.log("panel3SelectLabel labelID");}
		if (labelArray[labelVar][3] == 0) {
			$('#panel3LabelName'+labelArray[labelVar][0]).removeClass('panel_3_label_name_hover');
			$('#panel3LabelName'+labelArray[labelVar][0]).removeClass('panel_3_label_name_off');
			$('#panel3LabelName'+labelArray[labelVar][0]).addClass('panel_3_label_name_on');
			$('#panel3LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_3_label_name_all_hover');
			$('#panel3LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_3_label_name_all_off');
			$('#panel3LabelName'+labelArray[labelVar][0]+'All').addClass('panel_3_label_name_all_on');
			$('.panel_3_prodlist_labelshell_'+labelArray[labelVar][0]).removeClass('panel_3_prodlist_labelshell_off');
			$('.panel_3_prodlist_labelshell_'+labelArray[labelVar][0]).addClass('panel_3_prodlist_labelshell_on');
			labelArray[labelVar][3] = "1";
		}
		else {
			$('#panel3LabelName'+labelArray[labelVar][0]).removeClass('panel_3_label_name_hover');
			$('#panel3LabelName'+labelArray[labelVar][0]).removeClass('panel_3_label_name_on');
			$('#panel3LabelName'+labelArray[labelVar][0]).addClass('panel_3_label_name_off');
			$('#panel3LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_3_label_name_all_hover');
			$('#panel3LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_3_label_name_all_on');
			$('#panel3LabelName'+labelArray[labelVar][0]+'All').addClass('panel_3_label_name_all_off');
			$('.panel_3_prodlist_labelshell_'+labelArray[labelVar][0]).removeClass('panel_3_prodlist_labelshell_on');
			$('.panel_3_prodlist_labelshell_'+labelArray[labelVar][0]).addClass('panel_3_prodlist_labelshell_off');
			labelArray[labelVar][3] = "0";
		}
		if (panel3ProductExclude == 1) {
			for (j=0;j<labelArray.length;j++) {
				if (j != labelVar) {
					$('#panel3LabelName'+labelArray[j][0]).removeClass('panel_3_label_name_hover');
					$('#panel3LabelName'+labelArray[j][0]).removeClass('panel_3_label_name_on');
					$('#panel3LabelName'+labelArray[j][0]).addClass('panel_3_label_name_off');
					$('#panel3LabelName'+labelArray[j][0]+'All').removeClass('panel_3_label_name_all_hover');
					$('#panel3LabelName'+labelArray[j][0]+'All').removeClass('panel_3_label_name_all_on');
					$('#panel3LabelName'+labelArray[j][0]+'All').addClass('panel_3_label_name_all_off');
					$('.panel_3_prodlist_labelshell_'+labelArray[labelVar][0]).removeClass('panel_3_prodlist_labelshell_off');
					$('.panel_3_prodlist_labelshell_'+labelArray[labelVar][0]).addClass('panel_3_prodlist_labelshell_on');
					labelArray[j][3] = "0";
				}
			}
		}
		if (showHide) {
			var showAllProd = 1;
			panel3LabelListCount = 0;
			for (x=0;x<labelArray.length;x++) {
				if (labelArray[x][3] == 1) {
					showAllProd = 0;
					panel3LabelListCount++;
				}
			}
			if (showAllProd == 1) {
				panel3LabelListCount = labelArray.length;
			}
			var subLabelArr = [];
			for (l=0; l<prodLabelArray.length; l++) {
				if (prodLabelArray[l][2] == labelArray[labelVar][0]) {
					subLabelArr.push(prodLabelArray[l][1]);
				}
			}
			if(gLog==1){console.log("panel3SelectLabel showHide ", subLabelArr.toString());}
			for (x=0;x<prodFilterArray.length;x++) {
				if (document.getElementById('panel3ProductName'+prodFilterArray[x][0])) {
					var j = document.getElementsByClassName('panel_3_prodlist_prodshell_'+prodFilterArray[x][0]);
					for (k=0; k<j.length; k++) {
						j[k].style.display = "none";
					}
				}
				for (y=0;y<subLabelArr.length;y++) {
					if (prodFilterArray[x][0] == subLabelArr[y]) {
						if (document.getElementById('panel3ProductName'+prodFilterArray[x][0])) {
							var j = document.getElementsByClassName('panel_3_prodlist_prodshell_'+prodFilterArray[x][0]);
							for (k=0; k<j.length; k++) {
								j[k].style.display = "block";
							}
						}
						break;
					}
				}
			}
			if (document.getElementById('panel3LabelListNum')) {
				document.getElementById('panel3LabelListNum').innerHTML = panel3LabelListCount;
			}
			if (document.getElementById('panel3LabelListProdNum')) {
				document.getElementById('panel3LabelListProdNum').innerHTML = panel3LabelListProdCount
			}
		}
	}
}
function panel3SelectFam(famVar,famID,famString,showHide) {
	p3PLFamSort = famArray[famVar][0];
	$('.panel_3_prodlist_famreset').removeClass('panel_3_prodlist_famreset_on');
	$('.panel_3_prodlist_famreset').removeClass('panel_3_prodlist_famreset_hover');
	$('.panel_3_prodlist_famreset').addClass('panel_3_prodlist_famreset_off');
	whatStoreUp = 0;
	var whatFamSet = 0;
	if (document.getElementById(famID)) {
		for (y=0; y<famArray.length; y++) {
			if (famVar == y && famArray[famVar][5] == 0) {
				$('#panel3FamilyName'+famArray[famVar][0]).removeClass('panel_3_family_name_hover');
				$('#panel3FamilyName'+famArray[famVar][0]).removeClass('panel_3_family_name_off');
				$('#panel3FamilyName'+famArray[famVar][0]).addClass('panel_3_family_name_on');
				$('#panel3FamilyName'+famArray[famVar][0]+'All').removeClass('panel_3_family_name_all_hover');
				$('#panel3FamilyName'+famArray[famVar][0]+'All').removeClass('panel_3_family_name_all_off');
				$('#panel3FamilyName'+famArray[famVar][0]+'All').addClass('panel_3_family_name_all_on');
				$('.panel_3_prodlist_famshell_'+famArray[famVar][0]).removeClass('panel_3_prodlist_famshell_off');
				$('.panel_3_prodlist_famshell_'+famArray[famVar][0]).addClass('panel_3_prodlist_famshell_on');
				famArray[famVar][5] = "1";
				window["panel1FamilyNameVar"+famArray[famVar][0]] = 1;
				whatFamSet = 1;
			}
			else {
				$('#panel3FamilyName'+famArray[y][0]).removeClass('panel_3_family_name_hover');
				$('#panel3FamilyName'+famArray[y][0]).removeClass('panel_3_family_name_on');
				$('#panel3FamilyName'+famArray[y][0]).addClass('panel_3_family_name_off');
				$('#panel3FamilyName'+famArray[y][0]+'All').removeClass('panel_3_family_name_all_hover');
				$('#panel3FamilyName'+famArray[y][0]+'All').removeClass('panel_3_family_name_all_on');
				$('#panel3FamilyName'+famArray[y][0]+'All').addClass('panel_3_family_name_all_off');
				$('.panel_3_prodlist_famshell_'+famArray[famVar][0]).removeClass('panel_3_prodlist_famshell_on');
				$('.panel_3_prodlist_famshell_'+famArray[famVar][0]).addClass('panel_3_prodlist_famshell_off');
				famArray[y][5] = "0";
				window["panel1FamilyNameVar"+famArray[y][0]] = 0;
			}
		}
		if (showHide) {
			for (x=0;x<prodFilterArray.length;x++) {
				if (document.getElementById('panel3ProductName'+prodFilterArray[x][0])) {
					if (whatFamSet == 1) {
						var showThisOne = 1;
						for (q=0; q<prodCartArray.length; q++) {
							if (prodCartArray[q] == prodFilterArray[x][0]) {
								showThisOne = 0;
								break;
							}
						}
						if (prodFilterArray[x][17] == famArray[famVar][0] && showThisOne == 1) {
							if (document.getElementById('panel3ProductName'+prodFilterArray[x][0])) {document.getElementById('panel3ProductName'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel3ProductDesc'+prodFilterArray[x][0])) {document.getElementById('panel3ProductDesc'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel3ProductCat'+prodFilterArray[x][0])) {document.getElementById('panel3ProductCat'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel3ProductBigImg'+prodFilterArray[x][0])) {document.getElementById('panel3ProductBigImg'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel3ProductSmImg'+prodFilterArray[x][0])) {document.getElementById('panel3ProductSmImg'+prodFilterArray[x][0]).style.display = "block";}
							var j = document.getElementsByClassName('panel_3_prodlist_prodshell_'+prodFilterArray[x][0]);
							for (k=0; k<j.length; k++) {
								j[k].style.display = "block";
							}
						}
						else {
							if (document.getElementById('panel3ProductName'+prodFilterArray[x][0])) {document.getElementById('panel3ProductName'+prodFilterArray[x][0]).style.display = "none";}
							if (document.getElementById('panel3ProductDesc'+prodFilterArray[x][0])) {document.getElementById('panel3ProductDesc'+prodFilterArray[x][0]).style.display = "none";}
							if (document.getElementById('panel3ProductCat'+prodFilterArray[x][0])) {document.getElementById('panel3ProductCat'+prodFilterArray[x][0]).style.display = "none";}
							if (document.getElementById('panel3ProductBigImg'+prodFilterArray[x][0])) {document.getElementById('panel3ProductBigImg'+prodFilterArray[x][0]).style.display = "none";}
							if (document.getElementById('panel3ProductSmImg'+prodFilterArray[x][0])) {document.getElementById('panel3ProductSmImg'+prodFilterArray[x][0]).style.display = "none";}
							var j = document.getElementsByClassName('panel_3_prodlist_prodshell_'+prodFilterArray[x][0]);
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
							if (document.getElementById('panel3ProductName'+prodFilterArray[x][0])) {document.getElementById('panel3ProductName'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel3ProductDesc'+prodFilterArray[x][0])) {document.getElementById('panel3ProductDesc'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel3ProductCat'+prodFilterArray[x][0])) {document.getElementById('panel3ProductCat'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel3ProductBigImg'+prodFilterArray[x][0])) {document.getElementById('panel3ProductBigImg'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel3ProductSmImg'+prodFilterArray[x][0])) {document.getElementById('panel3ProductSmImg'+prodFilterArray[x][0]).style.display = "block";}
							var j = document.getElementsByClassName('panel_3_prodlist_prodshell_'+prodFilterArray[x][0]);
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
						if (document.getElementById('panel3CategoryName'+catArray[c][0])) {document.getElementById('panel3CategoryName'+catArray[c][0]).style.display = "block";}
						if (document.getElementById('panel3CategoryName'+catArray[c][0]+'All')) {document.getElementById('panel3CategoryName'+catArray[c][0]+'All').style.display = "block";}
						if (document.getElementById('panel3CategoryBigImg'+catArray[c][0])) {document.getElementById('panel3CategoryBigImg'+catArray[c][0]).style.display = "block";}
						if (document.getElementById('panel3CategorySmImg'+catArray[c][0])) {document.getElementById('panel3CategorySmImg'+catArray[c][0]).style.display = "block";}
						var j = document.getElementsByClassName('panel_3_prodlist_catshell_'+catArray[c][0]);
						for (k=0; k<j.length; k++) {
							j[k].style.display = "block";
						}
					}
					else {
						if (document.getElementById('panel3CategoryName'+catArray[c][0])) {document.getElementById('panel3CategoryName'+catArray[c][0]).style.display = "none";}
						if (document.getElementById('panel3CategoryName'+catArray[c][0]+'All')) {document.getElementById('panel3CategoryName'+catArray[c][0]+'All').style.display = "none";}
						if (document.getElementById('panel3CategoryBigImg'+catArray[c][0])) {document.getElementById('panel3CategoryBigImg'+catArray[c][0]).style.display = "none";}
						if (document.getElementById('panel3CategorySmImg'+catArray[c][0])) {document.getElementById('panel3CategorySmImg'+catArray[c][0]).style.display = "none";}
						var j = document.getElementsByClassName('panel_3_prodlist_catshell_'+catArray[c][0]);
						for (k=0; k<j.length; k++) {
							j[k].style.display = "none";
						}
					}
				}
				else {
					if (document.getElementById('panel3CategoryName'+catArray[c][0])) {document.getElementById('panel3CategoryName'+catArray[c][0]).style.display = "block";}
					if (document.getElementById('panel3CategoryName'+catArray[c][0]+'All')) {document.getElementById('panel3CategoryName'+catArray[c][0]+'All').style.display = "block";}
					if (document.getElementById('panel3CategoryBigImg'+catArray[c][0])) {document.getElementById('panel3CategoryBigImg'+catArray[c][0]).style.display = "block";}
					if (document.getElementById('panel3CategorySmImg'+catArray[c][0])) {document.getElementById('panel3CategorySmImg'+catArray[c][0]).style.display = "block";}
					var j = document.getElementsByClassName('panel_3_prodlist_catshell_'+catArray[c][0]);
					for (k=0; k<j.length; k++) {
						j[k].style.display = "block";
					}
				}
			}
		}
		if (document.getElementById('panel3ProdShopCartShell')) {
			panel3WriteProdCart();
			panel2WriteProdCart();
		}
	}
}
function panel3SelectCat(catVar,catID,catString,showHide) {
	$('.panel_3_prodlist_catreset').removeClass('panel_3_prodlist_catreset_on');
	$('.panel_3_prodlist_catreset').removeClass('panel_3_prodlist_catreset_hover');
	$('.panel_3_prodlist_catreset').addClass('panel_3_prodlist_catreset_off');
	whatStoreUp = 0;
	if (document.getElementById(catID)) {
		if (catArray[catVar][6] == 0) {
			$('#panel3CategoryName'+catArray[catVar][0]).removeClass('panel_3_category_name_hover');
			$('#panel3CategoryName'+catArray[catVar][0]).removeClass('panel_3_category_name_off');
			$('#panel3CategoryName'+catArray[catVar][0]).addClass('panel_3_category_name_on');
			$('#panel3CategoryName'+catArray[catVar][0]+'All').removeClass('panel_3_category_name_all_hover');
			$('#panel3CategoryName'+catArray[catVar][0]+'All').removeClass('panel_3_category_name_all_off');
			$('#panel3CategoryName'+catArray[catVar][0]+'All').addClass('panel_3_category_name_all_on');
			$('.panel_3_prodlist_catshell_'+catArray[catVar][0]).removeClass('panel_3_prodlist_catshell_off');
			$('.panel_3_prodlist_catshell_'+catArray[catVar][0]).addClass('panel_3_prodlist_catshell_on');
			catArray[catVar][6] = "1";
			window["panel1CategoryNameVar"+catArray[catVar][0]] = 1;
			for (q=0;q<prodFilterArray.length;q++) {
				if (!showHide) {
					if (prodFilterArray[q][8] == catArray[catVar][0]) {
						$('#panel3ProductName'+prodFilterArray[q][0]).removeClass('panel_3_product_name_hover');
						$('#panel3ProductName'+prodFilterArray[q][0]).removeClass('panel_3_product_name_off');
						$('#panel3ProductName'+prodFilterArray[q][0]).addClass('panel_3_product_name_on');
						$('.panel_3_prodlist_prodshell_'+prodFilterArray[q][0]).removeClass('panel_3_prodlist_prodshell_off');
						$('.panel_3_prodlist_prodshell_'+prodFilterArray[q][0]).addClass('panel_3_prodlist_prodshell_on');
						prodFilterArray[q][9] = 1;
					}
				}
			}
		}
		else {
			$('#panel3CategoryName'+catArray[catVar][0]).removeClass('panel_3_category_name_hover');
			$('#panel3CategoryName'+catArray[catVar][0]).removeClass('panel_3_category_name_on');
			$('#panel3CategoryName'+catArray[catVar][0]).addClass('panel_3_category_name_off');
			$('#panel3CategoryName'+catArray[catVar][0]+'All').removeClass('panel_3_category_name_all_hover');
			$('#panel3CategoryName'+catArray[catVar][0]+'All').removeClass('panel_3_category_name_all_on');
			$('#panel3CategoryName'+catArray[catVar][0]+'All').addClass('panel_3_category_name_all_off');
			$('.panel_3_prodlist_catshell_'+catArray[catVar][0]).removeClass('panel_3_prodlist_catshell_on');
			$('.panel_3_prodlist_catshell_'+catArray[catVar][0]).addClass('panel_3_prodlist_catshell_off');
			catArray[catVar][6] = "0";
			window["panel1CategoryNameVar"+catArray[catVar][0]] = 0;
			for (q=0;q<prodFilterArray.length;q++) {
				if (!showHide) {
					if (prodFilterArray[q][8] == catArray[catVar][0]) {
						$('#panel3ProductName'+prodFilterArray[q][0]).removeClass('panel_3_product_name_hover');
						$('#panel3ProductName'+prodFilterArray[q][0]).removeClass('panel_3_product_name_on');
						$('#panel3ProductName'+prodFilterArray[q][0]).addClass('panel_3_product_name_off');
						$('.panel_3_prodlist_prodshell_'+prodFilterArray[q][0]).removeClass('panel_3_prodlist_prodshell_on');
						$('.panel_3_prodlist_prodshell_'+prodFilterArray[q][0]).addClass('panel_3_prodlist_prodshell_off');
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
		if (panel3ProductFilter == 1) {
			if(gLog==1){console.log("Select Category P3");}
			panel3Load("panel3");
		}
		if (panel3ProductExclude == 1) {
			for (j=0;j<catArray.length;j++) {
				if (j != catVar) {
					$('#panel3CategoryName'+catArray[j][0]).removeClass('panel_3_category_name_hover');
					$('#panel3CategoryName'+catArray[j][0]).removeClass('panel_3_category_name_on');
					$('#panel3CategoryName'+catArray[j][0]).addClass('panel_3_category_name_off');
					$('#panel3CategoryName'+catArray[j][0]+'All').removeClass('panel_3_category_name_all_hover');
					$('#panel3CategoryName'+catArray[j][0]+'All').removeClass('panel_3_category_name_all_on');
					$('#panel3CategoryName'+catArray[j][0]+'All').addClass('panel_3_category_name_all_off');
					$('.panel_3_prodlist_catshell_'+catArray[catVar][0]).removeClass('panel_3_prodlist_catshell_on');
					$('.panel_3_prodlist_catshell_'+catArray[catVar][0]).addClass('panel_3_prodlist_catshell_off');
					catArray[j][6] = "0";
					window["panel1CategoryNameVar"+catArray[j][0]] = 0;
				}
			}
		}
		if (showHide) {
			var showAllProd = 1;
			panel3CatListCount = 0;
			for (x=0;x<catArray.length;x++) {
				if (catArray[x][6] == 1) {
					showAllProd = 0;
					panel3CatListCount++;
				}
			}
			if (showAllProd == 1) {
				panel3CatListCount = catArray.length;
			}
			for (x=0;x<prodFilterArray.length;x++) {
				for (y=0;y<catArray.length;y++) {
					if (prodFilterArray[x][8] == catArray[y][0]) {
						if ((catArray[y][6] == "1" || showAllProd == 1) && document.getElementById('panel3ProductName'+prodFilterArray[x][0])) {
							if (prodFilterArray[x][9] == 1 && panel3ProductHideprod == 1) {
								var j = document.getElementsByClassName('panel_3_prodlist_prodshell_'+prodFilterArray[x][0]);
								for (k=0; k<j.length; k++) {
									j[k].style.display = "none";
								}
							}
							else{
								var j = document.getElementsByClassName('panel_3_prodlist_prodshell_'+prodFilterArray[x][0]);
								for (k=0; k<j.length; k++) {
									j[k].style.display = "block";
								}
							}
						}
						else if (document.getElementById('panel3ProductName'+prodFilterArray[x][0])) {
							var j = document.getElementsByClassName('panel_3_prodlist_prodshell_'+prodFilterArray[x][0]);
							for (k=0; k<j.length; k++) {
								j[k].style.display = "none";
							}
						}
						break;
					}
				}
			}
			if (document.getElementById('panel3CatListNum')) {
				document.getElementById('panel3CatListNum').innerHTML = panel3CatListCount;
			}
			if (document.getElementById('panel3CatListProdNum')) {
				document.getElementById('panel3CatListProdNum').innerHTML = panel3CatListProdCount
			}
		}
		if (document.getElementById('panel3ProdShopCartShell')) {
			panel3WriteProdCart();
			panel2WriteProdCart();
		}
	}
}
function panel3ProdMouseOver (prodID, prodStr, prodVar) {
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
function panel3ProdMouseOut (prodID, prodStr, prodVar) {
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
function panel3ProdSelect(prodSQLID, prodSKU, prodID, prodStr, prodVar) {
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
			$('.panel_3_prodlist_prodshell_'+prodFilterArray[prodVar][0]).removeClass('panel_3_prodlist_prodshell_off');
			$('.panel_3_prodlist_prodshell_'+prodFilterArray[prodVar][0]).addClass('panel_3_prodlist_prodshell_on');
			prodFilterArray[prodVar][9] = "1";
		}
		else {
			$('#'+prodID).removeClass(prodStr+'_hover');
			$('#'+prodID).removeClass(prodStr+'_on');
			$('#'+prodID).addClass(prodStr+'_off');
			$('.panel_3_prodlist_prodshell_'+prodFilterArray[prodVar][0]).removeClass('panel_3_prodlist_prodshell_on');
			$('.panel_3_prodlist_prodshell_'+prodFilterArray[prodVar][0]).addClass('panel_3_prodlist_prodshell_off');
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
		if (panel3ProductFilter == 1) {
			if(gLog==1){console.log("Product Select P2");}
			panel3Load("panel3");
		}
	}
	if (document.getElementById('panel3ProdShopCartShell')) {
		if (panel3ProductHideprod == 1) {
			document.getElementById(prodID).style.display = "none";
			var j = document.getElementsByClassName('panel_3_prodlist_prodshell_'+prodFilterArray[prodVar][0]);
			for (k=0; k<j.length; k++) {
				j[k].style.display = "none";
			}
		}
		panel3WriteProdCart();
		panel2WriteProdCart();
	}
}
function panel3WriteProdCart() {
	if (document.getElementById('panel3ProdShopCartShell')) {
		var writeHTML = "";
		var cartCatBadgeArr = [];
		var prodCartHeadHTML = autotextIt(p3TemplateSet.panel3ProductCartHead,"panel3ProductCartHead");
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
					clearButtonRender += "<div id='panel3ProdCartClearButton' class='panel_3_prod_cart_clear_button panel_3_prod_cart_clear_button_off'";
					if (hoverState==1) {
						clearButtonRender += " onmouseover='panel3ButtonHover(\"panel3ProdCartClearButton\", \"panel_3_prod_cart_clear_button\", 1);' onfocus='panel3ButtonHover(\"panel3ProdCartClearButton\", \"panel_3_prod_cart_clear_button\", 1);' onmouseout='panel3ButtonHover(\"panel3ProdCartClearButton\", \"panel_3_prod_cart_clear_button\", 0);' onblur='panel3ButtonHover(\"panel3ProdCartClearButton\", \"panel_3_prod_cart_clear_button\", 0);'";
					}
					clearButtonRender += " onclick='panel3ProdCartRemove();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3ProdCartRemove();}' tabindex='0' title=\"" + clearButtonValueVar + "\">" + clearButtonItalicVar + clearButtonValueVar + "<\/div>";
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
					var emptyTextValueVar = emptyTextTagStrip.substring((emptyTextValueStart+8),(emptyTextValueEnd));
				}
				else {
					var emptyTextValueVar = "Your Shopping Cart is Empty.";
				}
				if (prodCartArray.length) {
					prodCartHeadHTML = emptyTextHTMLStart + emptyTextHTMLEnd;
				}
				else {
					prodCartHeadHTML = emptyTextHTMLStart + "<div id='panel3ProdCartEmptyText' class='panel_3_prod_cart_empty_text_shell'><div class='panel_3_prod_cart_empty_text_inner'>" + emptyTextValueVar + "<\/div><\/div>" + emptyTextHTMLEnd;
				}
			}
			writeHTML += prodCartHeadHTML;
		}
		for (y=0; y<prodCartArray.length; y++) {
			var prodCartHTML = autotextIt(p3TemplateSet.panel3ProductCartDiv,"panel3ProductCart");
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
							prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel3ProductCart_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
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
							var descVal = "<span class='panel_3_prod_cart_name_desc'>" + prodDisplayArray[x][3] + "<\/span>";
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
						prodCartHTML = baseProdCartNameHTMLStart + "<div id='panel3ProdCartName" + prodDisplayArray[x][0] + "' class='panel_3_prod_cart_name'>" + prodNameItalicVar + "<span class='panel_3_prod_cart_name_name'>" + prodDisplayArray[x][2] + "<\/span>" + descVal + "<\/div>" + baseProdCartNameHTMLEnd;
					}
					var prodDescTagStart = prodCartHTML.indexOf("<!--PRODDESC");
					if (prodDescTagStart != -1) {
						var prodDescTagEnd = prodCartHTML.indexOf(">",prodDescTagStart);
						var prodDescTagStrip = prodCartHTML.substring(prodDescTagStart,(prodDescTagEnd+1));
						var baseProdDescHTMLStart = prodCartHTML.substr(0,prodDescTagStart);
						var baseProdDescHTMLEnd = prodCartHTML.substr((prodDescTagEnd+1));
						prodCartHTML = baseProdDescHTMLStart + "<div id='panel3ProdCartDesc" + prodDisplayArray[x][0] + "' class='panel_3_prod_cart_desc'>" + prodDisplayArray[x][3] + "<\/div>" + baseProdDescHTMLEnd;
					}
					var prodCatTagStart = prodCartHTML.indexOf("<!--PRODCAT");
					if (prodCatTagStart != -1) {
						var prodCatTagEnd = prodCartHTML.indexOf(">",prodCatTagStart);
						var prodCatTagStrip = prodCartHTML.substring(prodCatTagStart,(prodCatTagEnd+1));
						var baseProdCatHTMLStart = prodCartHTML.substr(0,prodCatTagStart);
						var baseProdCatHTMLEnd = prodCartHTML.substr((prodCatTagEnd+1));
						prodCartHTML = baseProdCatHTMLStart + "<div id='panel3ProdCartCat" + prodDisplayArray[x][0] + "' class='panel_3_prod_cart_cat'>" + prodDisplayArray[x][16] + "<\/div>" + baseProdCatHTMLEnd;
					}
					var prodCartBigImgTagStart = prodCartHTML.indexOf("<!--PRODBIGIMG");
					if (prodCartBigImgTagStart != -1) {
						var prodCartBigImgTagEnd = prodCartHTML.indexOf(">",prodCartBigImgTagStart);
						var prodCartBigImgTagStrip = prodCartHTML.substring(prodCartBigImgTagStart,(prodCartBigImgTagEnd+1));
						var baseProdCartBigImgHTMLStart = prodCartHTML.substr(0,prodCartBigImgTagStart);
						var baseProdCartBigImgHTMLEnd = prodCartHTML.substr((prodCartBigImgTagEnd+1));
						prodCartHTML = baseProdCartBigImgHTMLStart + "<img title=\"" + prodDisplayArray[x][2] + "\" alt=\"" + prodDisplayArray[x][2] + "\" id='panel3ProdCartBigImg" + prodDisplayArray[x][0] + "' class='panel_3_prod_cart_bigimg' src='" + clientImgBase + prodDisplayArray[x][4] + "'>" + baseProdCartBigImgHTMLEnd;
					}
					var prodCartSmImgTagStart = prodCartHTML.indexOf("<!--PRODSMIMG");
					if (prodCartSmImgTagStart != -1) {
						var prodCartSmImgTagEnd = prodCartHTML.indexOf(">",prodCartSmImgTagStart);
						var prodCartSmImgTagStrip = prodCartHTML.substring(prodCartSmImgTagStart,(prodCartSmImgTagEnd+1));
						var baseProdCartSmImgHTMLStart = prodCartHTML.substr(0,prodCartSmImgTagStart);
						var baseProdCartSmImgHTMLEnd = prodCartHTML.substr((prodCartSmImgTagEnd+1));
						prodCartHTML = baseProdCartSmImgHTMLStart + "<img title=\"" + prodDisplayArray[x][2] + "\" alt=\"" + prodDisplayArray[x][2] + "\" id='panel3ProdCartSmImg" + prodDisplayArray[x][0] + "' class='panel_3_prod_cart_smimg' src='" + clientImgBase + prodDisplayArray[x][5] + "'>" + baseProdCartSmImgHTMLEnd;
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
						removeButtonRender += "<div id='panel3ProdCartRemoveButton" + prodCartArray[y] + "' class='panel_3_prod_cart_remove_button panel_3_prod_cart_remove_button_off'";
						if (hoverState==1) {
							removeButtonRender += " onmouseover='panel3ButtonHover(\"panel3ProdCartRemoveButton" + prodCartArray[y] + "\",\"panel_3_prod_cart_remove_button\",1);' onfocus='panel3ButtonHover(\"panel3ProdCartRemoveButton" + prodCartArray[y] + "\",\"panel_3_prod_cart_remove_button\",1);' onmouseout='panel3ButtonHover(\"panel3ProdCartRemoveButton" + prodCartArray[y] + "\",\"panel_3_prod_cart_remove_button\",0);' onblur='panel3ButtonHover(\"panel3ProdCartRemoveButton" + prodCartArray[y] + "\",\"panel_3_prod_cart_remove_button\",0);'";
						}
						removeButtonRender += " onclick='panel3ProdCartRemove(" + prodCartArray[y] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3ProdCartRemove(" + prodCartArray[y] + ");}' tabindex='0' title=\"" + removeButtonValueVar + "\">" + removeButtonItalicVar + removeButtonValueVar + "<\/div>";
						prodCartHTML = removeButtonHTMLStart + removeButtonRender + removeButtonHTMLEnd;
					}
				}
			}
			writeHTML += prodCartHTML;
		}
		var prodCartFootHTML = autotextIt(p3TemplateSet.panel3ProductCartFoot,"panel3ProductCartFoot");
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
					clearButtonRender += "<div id='panel3ProdCartClearButton' class='panel_3_prod_cart_clear_button panel_3_prod_cart_clear_button_off'";
					if (hoverState==1) {
						clearButtonRender += " onmouseover='panel3ButtonHover(\"panel3ProdCartClearButton\", \"panel_3_prod_cart_clear_button\", 1);' onfocus='panel3ButtonHover(\"panel3ProdCartClearButton\", \"panel_3_prod_cart_clear_button\", 1);' onmouseout='panel3ButtonHover(\"panel3ProdCartClearButton\", \"panel_3_prod_cart_clear_button\", 0);' onblur='panel3ButtonHover(\"panel3ProdCartClearButton\", \"panel_3_prod_cart_clear_button\", 0);'";
					}
					clearButtonRender += " onclick='panel3ProdCartRemove();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3ProdCartRemove();}' tabindex='0' title=\"" + clearButtonValueVar + "\">" + clearButtonItalicVar + clearButtonValueVar + "<\/div>";
					prodCartFootHTML = clearButtonHTMLStart + clearButtonRender + clearButtonHTMLEnd;
				}
				else {
					prodCartFootHTML = clearButtonHTMLStart + clearButtonHTMLEnd;
				}
			}
			writeHTML += prodCartFootHTML;
		}
		document.getElementById('panel3ProdShopCartShell').innerHTML = writeHTML;
		if (document.getElementById('panel3ProdCountNum')) {
			if (prodCartArray.length == 0 || prodCartArray.length == prodDisplayArray.length) {
				document.getElementById('panel3ProdCountNum').innerHTML =  "All";
			}
			else {
				document.getElementById('panel3ProdCountNum').innerHTML = prodCartArray.length;
			}
		}
		if (document.getElementById('panel3CountProdNum')) {
			if (prodCartArray.length == 0 || prodCartArray.length == prodDisplayArray.length) {
				document.getElementById('panel3CountProdNum').innerHTML =  "All";
			}
			else {
				document.getElementById('panel3CountProdNum').innerHTML = prodCartArray.length;
			}
		}
		if (document.getElementById("panel3SelProdText")) {
			if (prodCartArray.length == 1) {
				document.getElementById("panel3SelProdText").innerHTML = p3selProdSingularVar;
			}
			else {
				document.getElementById("panel3SelProdText").innerHTML = p3selProdPluralVar;
			}
		}
		$('.panel_3_prodlist_cat_badge').hide();
		if (cartCatBadgeArr.length) {
			for (j=0; j<cartCatBadgeArr.length; j++) {
				if (document.getElementById('panel3ProdlistCatBadge'+cartCatBadgeArr[j][0])) {
					document.getElementById('panel3ProdlistCatBadge'+cartCatBadgeArr[j][0]).innerHTML = cartCatBadgeArr[j][1];
					$('#panel3ProdlistCatBadge'+cartCatBadgeArr[j][0]).show();
				}
			}
		}
	}
}
function panel3ProdCartRemove(whatID) {
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
					if (document.getElementById('panel2ProductBigImgDivBack'+prodDisplayArray[x][0])) {
						$(".panel_3_product_big_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
						$(".panel_3_product_big_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_3_product_big_img_div_back_off');
						$(".panel_3_product_big_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_3_product_big_img_div_back_on');
					}
					if (document.getElementById('panel2ProductSmImgDivBack'+prodDisplayArray[x][0])) {
						$(".panel_3_product_sm_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
						$(".panel_3_product_sm_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_3_product_sm_img_div_back_off');
						$(".panel_3_product_sm_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_3_product_sm_img_div_back_on');
					}
				}
				else if (FIRE == 1) {
					for (goesOut=0;goesOut<catArray.length;goesOut++) {
						if (catArray[goesOut][0] == prodDisplayArray[x][8] && catArray[goesOut][6] == 1) {
							if (document.getElementById('panel2ProductBigImgDivBack'+prodDisplayArray[x][0])) {
								$(".panel_3_product_big_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
								$(".panel_3_product_big_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_3_product_big_img_div_back_off');
								$(".panel_3_product_big_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_3_product_big_img_div_back_on');
							}
							if (document.getElementById('panel2ProductSmImgDivBack'+prodDisplayArray[x][0])) {
								$(".panel_3_product_sm_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
								$(".panel_3_product_sm_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_3_product_sm_img_div_back_off');
								$(".panel_3_product_sm_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_3_product_sm_img_div_back_on');
							}
							break;
						}
					}
				}
				$('#panel3CartButton'+prodDisplayArray[x][0]).removeClass('panel_3_cart_button_hover');
				$('#panel3CartButton'+prodDisplayArray[x][0]).removeClass('panel_3_cart_button_on');
				$('#panel3CartButton'+prodDisplayArray[x][0]).addClass('panel_3_cart_button_off');
				$('.panel_3_multiFilter_l3_prodname_'+prodDisplayArray[x][0]).removeClass('panel_3_multiFilter_l3_prodname_hover');
				$('.panel_3_multiFilter_l3_prodname_'+prodDisplayArray[x][0]).removeClass('panel_3_multiFilter_l3_prodname_on');
				$('.panel_3_multiFilter_l3_prodname_'+prodDisplayArray[x][0]).addClass('panel_3_multiFilter_l3_prodname_off');
				$('.panel_3_multiFilter_l3_prodname_ion_'+prodDisplayArray[x][0]).hide();
				$('.panel_3_multiFilter_l3_prodname_ioff_'+prodDisplayArray[x][0]).show();
				$('#panel3ProductName'+prodDisplayArray[x][0]).removeClass('panel_3_product_name_hover');
				$('#panel3ProductName'+prodDisplayArray[x][0]).removeClass('panel_3_product_name_on');
				$('#panel3ProductName'+prodDisplayArray[x][0]).addClass('panel_3_product_name_off');
				if (document.getElementById('panel3ProductName'+prodDisplayArray[x][0])) {
					document.getElementById('panel3ProductName'+prodDisplayArray[x][0]).style.display = "block";
				}
				if (document.getElementById('panel3ProductBigImg'+prodDisplayArray[x][0])) {
					document.getElementById('panel3ProductBigImg'+prodDisplayArray[x][0]).style.display = "block";
				}
				if (document.getElementById('panel3ProductSmImg'+prodDisplayArray[x][0])) {
					document.getElementById('panel3ProductSmImg'+prodDisplayArray[x][0]).style.display = "block";
				}
				$('.panel_3_prodlist_prodshell_'+prodDisplayArray[x][0]).removeClass('panel_3_prodlist_prodshell_on');
				$('.panel_3_prodlist_prodshell_'+prodDisplayArray[x][0]).addClass('panel_3_prodlist_prodshell_off');
				if(gLog==1){console.log("panel3ProdCartRemove(" + whatID + ") ",prodDisplayArray[x][17],p3PLFamSort);}
				if (prodDisplayArray[x][17] == p3PLFamSort) {
					var j = document.getElementsByClassName('panel_3_prodlist_prodshell_'+prodDisplayArray[x][0]);
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
			if (document.getElementById('panel3CategoryBigImgDivBack'+prodDisplayArray[x][0])) {
				$(".panel_3_category_big_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
				$(".panel_3_category_big_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_3_category_big_img_div_back_on');
				$(".panel_3_category_big_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_3_category_big_img_div_back_off');
			}
			if (document.getElementById('panel3CategorySmImgDivBack'+prodDisplayArray[x][0])) {
				$(".panel_3_category_sm_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
				$(".panel_3_category_sm_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_3_category_sm_img_div_back_on');
				$(".panel_3_category_sm_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_3_category_sm_img_div_back_off');
			}
			if (document.getElementById('panel3ProductBigImgDivBack'+prodDisplayArray[x][0])) {
				$(".panel_3_product_big_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
				$(".panel_3_product_big_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_3_product_big_img_div_back_off');
				$(".panel_3_product_big_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_3_product_big_img_div_back_on');
			}
			if (document.getElementById('panel3ProductSmImgDivBack'+prodDisplayArray[x][0])) {
				$(".panel_3_product_sm_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
				$(".panel_3_product_sm_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_3_product_sm_img_div_back_off');
				$(".panel_3_product_sm_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_3_product_sm_img_div_back_on');
			}
			$('#panel3CartButton'+prodDisplayArray[x][0]).removeClass('panel_3_cart_button_hover');
			$('#panel3CartButton'+prodDisplayArray[x][0]).removeClass('panel_3_cart_button_on');
			$('#panel3CartButton'+prodDisplayArray[x][0]).addClass('panel_3_cart_button_off');
			$('.panel_3_multiFilter_l3_prodname_'+prodDisplayArray[x][0]).removeClass('panel_3_multiFilter_l3_prodname_hover');
			$('.panel_3_multiFilter_l3_prodname_'+prodDisplayArray[x][0]).removeClass('panel_3_multiFilter_l3_prodname_on');
			$('.panel_3_multiFilter_l3_prodname_'+prodDisplayArray[x][0]).addClass('panel_3_multiFilter_l3_prodname_off');
			$('.panel_3_multiFilter_l3_prodname_ion_'+prodDisplayArray[x][0]).hide();
			$('.panel_3_multiFilter_l3_prodname_ioff_'+prodDisplayArray[x][0]).show();
			$("#panel3ProductName" + prodDisplayArray[x][0]).removeClass("panel_3_product_name_hover");
			$("#panel3ProductName" + prodDisplayArray[x][0]).removeClass("panel_3_product_name_on");
			$("#panel3ProductName" + prodDisplayArray[x][0]).addClass("panel_3_product_name_off");
			$('.panel_3_prodlist_prodshell_'+prodDisplayArray[x][0]).removeClass('panel_3_prodlist_prodshell_on');
			$('.panel_3_prodlist_prodshell_'+prodDisplayArray[x][0]).addClass('panel_3_prodlist_prodshell_off');
			if(gLog==1){console.log("panel3ProdCartRemove(" + whatID + ") ",prodDisplayArray[x][17],p3PLFamSort);}
			if (document.getElementById('panel3ProductName'+prodDisplayArray[x][0])) {
				document.getElementById('panel3ProductName'+prodDisplayArray[x][0]).style.display = "block";
			}
			if (document.getElementById('panel3ProductBigImg'+prodDisplayArray[x][0])) {
				document.getElementById('panel3ProductBigImg'+prodDisplayArray[x][0]).style.display = "block";
			}
			if (document.getElementById('panel3ProductSmImg'+prodDisplayArray[x][0])) {
				document.getElementById('panel3ProductSmImg'+prodDisplayArray[x][0]).style.display = "block";
			}
			if (prodDisplayArray[x][17] == p3PLFamSort) {
				var j = document.getElementsByClassName('panel_3_prodlist_prodshell_'+prodDisplayArray[x][0]);
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
	if (panel3ProductFilter == 1) {
		if(gLog==1){console.log("Prod Cart Remove P2");}
		panel3Load("panel3");
	}
	panel3WriteProdCart();
	panel2WriteProdCart();
}
function panel3SubmitForm() {
	loaderToggle(1);
	whatStoreUp = 0;
	p3codeTries = 0;
	var canSubmit = 1;
	if (document.getElementById('panel3AddressField')) {
		if ($("#panel3AddressField").hasClass("panel_3_required") && (document.getElementById('panel3AddressField').value == "" || document.getElementById('panel3AddressField').value == p3AddFieldValueVar)) {
			$("#panel3AddressField").removeClass("panel_3_address_field_base");
			$("#panel3AddressField").addClass("panel_3_required_error");
			document.getElementById('street').value = "";
			canSubmit = 0;
		}
		else {
			$("#panel3AddressField").addClass("panel_3_address_field_base");
			$("#panel3AddressField").removeClass("panel_3_required_error");
			stripField('street','panel3AddressField');
		}
	}
	else {
		document.getElementById('street').value = "";
	}
	if (document.getElementById('panel3CityField')) {
		if ($("#panel3CityField").hasClass("panel_3_required") && (document.getElementById('panel3CityField').value == "" || document.getElementById('panel3CityField').value == cityFieldValueVar)) {
			$("#panel3CityField").removeClass("panel_3_city_field_base");
			$("#panel3CityField").addClass("panel_3_required_error");
			document.getElementById('city').value = "";
			canSubmit = 0;
		}
		else {
			$("#panel3CityField").addClass("panel_3_city_field_base");
			$("#panel3CityField").removeClass("panel_3_required_error");
			stripField('city','panel3CityField');
		}
	}
	else {
		document.getElementById('city').value = "";
	}
	if (document.getElementById('panel3StateField')) {
		if ($("#panel3StateSelect").hasClass("panel_3_required") && document.getElementById('panel3StateField').value == "") {
			$("#panel3StateSelect").removeClass("panel_3_state_field_base");
			$("#panel3StateSelect").addClass("panel_3_required_error");
			document.getElementById('state').value = "";
			canSubmit = 0;
		}
		else {
			$("#panel3StateSelect").addClass("panel_3_state_field_base");
			$("#panel3StateSelect").removeClass("panel_3_required_error");
			stripField('state','panel3StateField');
		}
	}
	else {
		document.getElementById('state').value = "";
	}
	if (document.getElementById('panel3ZipField')) {
		if ($("#panel3ZipField").hasClass("panel_3_required")) {
			if (document.getElementById('panel3ZipField').value == "") {
				$("#panel3ZipField").removeClass("panel_3_zip_field_base");
				$("#panel3ZipField").addClass("panel_3_required_error");
				document.getElementById('zip').value = "";
				canSubmit = 0;
			}
			else {
				if (zipFieldValueVar == 1) {
					var zipFieldTestVal = document.getElementById('panel3ZipField').value;
					if (isNaN(zipFieldTestVal) || zipFieldTestVal.length != 5) {
						$("#panel3ZipField").removeClass("panel_3_zip_field_base");
						$("#panel3ZipField").addClass("panel_3_required_error");
						document.getElementById('zip').value = "";
						canSubmit = 0;
					}
					else {
						$("#panel3ZipField").addClass("panel_3_zip_field_base");
						$("#panel3ZipField").removeClass("panel_3_required_error");
						stripField('zip','panel3ZipField');
					}
				}
				else {
					$("#panel3ZipField").addClass("panel_3_zip_field_base");
					$("#panel3ZipField").removeClass("panel_3_required_error");
					stripField('zip','panel3ZipField');
				}
			}
		}
	}
	else {
		document.getElementById('zip').value = "";
	}
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
			parent.postMessage("SRCH:"+document.getElementById('panel3AddressField').value,refurl);
		}
		setTimeout(function(){
			panel3CodeAddress();
		},750);
	}
	else {
		errorText('Please enter a valid location.',2);
	}
}
function panel3NewLocKeypress(e,addField,result) {
	var key;
	if(window.event) {key = window.event.keyCode;}
	else {key = e.which;}
	if(key == 13){
		if (result == 1) {
			panel3CodeDirectAddressCheck();
		}
		return false;
	}
}
function panel3MobileLocKeypress(e,addField,result) {
	var key;
	if(window.event) {key = window.event.keyCode;}
	else {key = e.which;}
	if(key == 13){
		if (result == 1) {
			panel3CodeDirectAddressCheck();
		}
		return false;
	}
}
function panel3CodeDirectAddressCheck() {
	if (document.getElementById('panel3NewLocField')) {
		if (p3DirBaseText == document.getElementById('panel3NewLocField').value) {
			panel3CodeDirectAddress(1);
		}
		else {
			panel3CodeDirectAddress();
		}
	}
	else if (document.getElementById('panel3MobileLocField')) {
		if (p3DirBaseText == document.getElementById('panel3MobileLocField').value) {
			panel3CodeDirectAddress(1);
		}
		else {
			panel3CodeDirectAddress();
		}
	}
	else {
		panel3CodeDirectAddress(1);
	}
}
function panel3EmailKeypress(e,addField,result) {
	var key;
	if(window.event) {key = window.event.keyCode;}
	else {key = e.which;}
	if(key == 13){
		panel3Email();
		return false;
	}
}
var getTheDirFirst = 0;
function panel3Email() {
	if(document.getElementById('panel3EmailField')) {
		var emailResult = checkIsEmail('panel3EmailField');
		if (emailResult == false) {
			errorText("You appear to have entered an invalid email address. Please try again.",6);
		}
		else {
			if (gtm != 0) {
				var emailInd = parseInt(document.getElementById('storeID').value);
				GTMit("EMAILSTR", "click", storeDisplayArray[emailInd][0] + "|" + storeDisplayArray[emailInd][1] + "|" + storeDisplayArray[emailInd][3] + "|" + storeDisplayArray[emailInd][4] + "|" + storeDisplayArray[emailInd][5] + "|" + storeDisplayArray[emailInd][6] + "|" + storeDisplayArray[emailInd][7] + "|" + storeDisplayArray[emailInd][27] + "|" + storeDisplayArray[emailInd][8],false);
			}
			if (locServe == 0) {
				if (document.getElementById('printSLA').value == "" && getTheDirFirst == 0) {
					getTheDirFirst = 1;
					panel3CodeDirectAddress(1);
				}
				else {
					panel3CompileEmail();
				}
			}
			else if (locServe == 1) {
				if (!p3DirSequence.length && getTheDirFirst == 0) {
					getTheDirFirst = 1;
					panel3CodeDirectAddress(1);
				}
				else {
					panel3CompileEmail();
				}
			}
		}
	}
}
function panel3CompileEmail() {
	if (locServe == 0) {
		if (document.getElementById('printSLA').value != "") {
			var startLat = document.getElementById('printSLA').value;
			var startLon = document.getElementById('printSLO').value;
			var endLat = document.getElementById('printELA').value;
			var endLon = document.getElementById('printELO').value;
			var localStart = new google.maps.LatLng(startLat, startLon);
			var localEnd = new google.maps.LatLng(endLat, endLon);
			var request = {
				origin: localStart,
				destination: localEnd,
				travelMode: google.maps.TravelMode.DRIVING
			};
			panel3EmailDirectionsService = new google.maps.DirectionsService();
			panel3EmailDirectionsService.route(request, function(result, status) {
				if (status == google.maps.DirectionsStatus.OK) {
					var myRoute = result.routes[0].legs[0];
					var localBaseMiles = panel3LocalDistanceNum / 1609.344;
					var localFloorMiles = localBaseMiles.toFixed(2);
					var localBaseMinutes = Math.floor(panel3LocalDurationNum/60);
					var whatIndex = document.getElementById('storeID').value;
					var directEmailStartHTML = autotextIt(p3TemplateSet.panel3EmailStartDiv,"panel3EmailStart");
					var directEmailLocClientTagStart = directEmailStartHTML.indexOf("<!--CLIENT");
					if (directEmailLocClientTagStart != -1) {
						var directEmailLocClientTagEnd = directEmailStartHTML.indexOf(">",directEmailLocClientTagStart);
						var baseDirectEmailLocClientHTMLStart = directEmailStartHTML.substr(0,directEmailLocClientTagStart);
						var baseDirectEmailLocClientHTMLEnd = directEmailStartHTML.substr((directEmailLocClientTagEnd+1));
						directEmailStartHTML = baseDirectEmailLocClientHTMLStart + coreClient + baseDirectEmailLocClientHTMLEnd;
					}
					var directEmailLocNameTagStart = directEmailStartHTML.indexOf("<!--LOCNAME");
					if (directEmailLocNameTagStart != -1) {
						var directEmailLocNameTagEnd = directEmailStartHTML.indexOf(">",directEmailLocNameTagStart);
						var baseDirectEmailLocNameHTMLStart = directEmailStartHTML.substr(0,directEmailLocNameTagStart);
						var baseDirectEmailLocNameHTMLEnd = directEmailStartHTML.substr((directEmailLocNameTagEnd+1));
						directEmailStartHTML = baseDirectEmailLocNameHTMLStart + storeDisplayArray[whatIndex][0] + baseDirectEmailLocNameHTMLEnd;
					}
					var directEmailStartAddressTagStart = directEmailStartHTML.indexOf("<!--LOCADDRESS");
					if (directEmailStartAddressTagStart != -1) {
						var directEmailStartAddressTagEnd = directEmailStartHTML.indexOf(">",directEmailStartAddressTagStart);
						var baseDirectEmailStartAddressHTMLStart = directEmailStartHTML.substr(0,directEmailStartAddressTagStart);
						var baseDirectEmailStartAddressHTMLEnd = directEmailStartHTML.substr((directEmailStartAddressTagEnd+1));
						directEmailStartHTML = baseDirectEmailStartAddressHTMLStart + document.getElementById('localStartAdd').value + baseDirectEmailStartAddressHTMLEnd;
					}
					var directEmailLocStreetTagStart = directEmailStartHTML.indexOf("<!--LOCSTREET");
					if (directEmailLocStreetTagStart != -1) {
						var directEmailLocStreetTagEnd = directEmailStartHTML.indexOf(">",directEmailLocStreetTagStart);
						var baseDirectEmailLocStreetHTMLStart = directEmailStartHTML.substr(0,directEmailLocStreetTagStart);
						var baseDirectEmailLocStreetHTMLEnd = directEmailStartHTML.substr((directEmailLocStreetTagEnd+1));
						directEmailStartHTML = baseDirectEmailLocStreetHTMLStart + storeDisplayArray[whatIndex][1] + baseDirectEmailLocStreetHTMLEnd;
					}
					var directEmailLocTwoStreetTagStart = directEmailStartHTML.indexOf("<!--LOCTWOSTREET");
					if (directEmailLocTwoStreetTagStart != -1) {
						var directEmailLocTwoStreetTagEnd = directEmailStartHTML.indexOf(">",directEmailLocTwoStreetTagStart);
						var baseDirectEmailLocTwoStreetHTMLStart = directEmailStartHTML.substr(0,directEmailLocTwoStreetTagStart);
						var baseDirectEmailLocTwoStreetHTMLEnd = directEmailStartHTML.substr((directEmailLocTwoStreetTagEnd+1));
						directEmailStartHTML = baseDirectEmailLocTwoStreetHTMLStart + storeDisplayArray[whatIndex][2] + baseDirectEmailLocTwoStreetHTMLEnd;
					}
					var directEmailLocCityTagStart = directEmailStartHTML.indexOf("<!--LOCCITY");
					if (directEmailLocCityTagStart != -1) {
						var directEmailLocCityTagEnd = directEmailStartHTML.indexOf(">",directEmailLocCityTagStart);
						var baseDirectEmailLocCityHTMLStart = directEmailStartHTML.substr(0,directEmailLocCityTagStart);
						var baseDirectEmailLocCityHTMLEnd = directEmailStartHTML.substr((directEmailLocCityTagEnd+1));
						directEmailStartHTML = baseDirectEmailLocCityHTMLStart + storeDisplayArray[whatIndex][3] + baseDirectEmailLocCityHTMLEnd;
					}
					var directEmailLocStateTagStart = directEmailStartHTML.indexOf("<!--LOCSTATE");
					if (directEmailLocStateTagStart != -1) {
						var directEmailLocStateTagEnd = directEmailStartHTML.indexOf(">",directEmailLocStateTagStart);
						var baseDirectEmailLocStateHTMLStart = directEmailStartHTML.substr(0,directEmailLocStateTagStart);
						var baseDirectEmailLocStateHTMLEnd = directEmailStartHTML.substr((directEmailLocStateTagEnd+1));
						if (stateNames == 1) {
							var gottaState = 0;
							for (tsa=0;tsa<tblStateArray.length;tsa++) {
								if (tblStateArray[tsa][0] == storeDisplayArray[whatIndex][4]) {
									var stateOut = tblStateArray[tsa][1];
									gottaState = 1;
									break;
								}
							}
							if (gottaState == 0) {
								var stateOut = storeDisplayArray[whatIndex][4];
							}
						}
						else {
							var stateOut = storeDisplayArray[whatIndex][4];
						}
						directEmailStartHTML = baseDirectEmailLocStateHTMLStart + stateOut + baseDirectEmailLocStateHTMLEnd;
					}
					var directEmailLocZipTagStart = directEmailStartHTML.indexOf("<!--LOCZIP");
					if (directEmailLocZipTagStart != -1) {
						var directEmailLocZipTagEnd = directEmailStartHTML.indexOf(">",directEmailLocZipTagStart);
						var baseDirectEmailLocZipHTMLStart = directEmailStartHTML.substr(0,directEmailLocZipTagStart);
						var baseDirectEmailLocZipHTMLEnd = directEmailStartHTML.substr((directEmailLocZipTagEnd+1));
						directEmailStartHTML = baseDirectEmailLocZipHTMLStart + storeDisplayArray[whatIndex][5] + baseDirectEmailLocZipHTMLEnd;
					}
					var directEmailLocCountryTagStart = directEmailStartHTML.indexOf("<!--LOCCOUNTRY");
					if (directEmailLocCountryTagStart != -1) {
						var directEmailLocCountryTagEnd = directEmailStartHTML.indexOf(">",directEmailLocCountryTagStart);
						var baseDirectEmailLocCountryHTMLStart = directEmailStartHTML.substr(0,directEmailLocCountryTagStart);
						var baseDirectEmailLocCountryHTMLEnd = directEmailStartHTML.substr((directEmailLocCountryTagEnd+1));
						directEmailStartHTML = baseDirectEmailLocCountryHTMLStart + storeDisplayArray[whatIndex][27] + baseDirectEmailLocCountryHTMLEnd;
					}
					var directEmailPhoneTagStart = directEmailStartHTML.indexOf("<!--LOCPHONE");
					if (directEmailPhoneTagStart != -1 && storeDisplayArray[whatIndex][15]!="") {
						var directEmailPhoneTagEnd = directEmailStartHTML.indexOf(">",directEmailPhoneTagStart);
						var directEmailPhoneTagStrip = directEmailStartHTML.substring(directEmailPhoneTagStart,(directEmailPhoneTagEnd+1));
						var directEmailPhoneHTMLStart = directEmailStartHTML.substr(0,directEmailPhoneTagStart);
						var directEmailPhoneHTMLEnd = directEmailStartHTML.substr((directEmailPhoneTagEnd+1));
						var directEmailPhoneValueStart = directEmailPhoneTagStrip.indexOf(" FORMAT=");
						var directEmailPhoneValueEnd = directEmailPhoneTagStrip.indexOf("]");
						if (directEmailPhoneValueStart != -1) {
							var directEmailPhoneValueVarTest = directEmailPhoneTagStrip.substring((directEmailPhoneValueStart+9),(directEmailPhoneValueEnd));
							var phoneSplit=storeDisplayArray[whatIndex][15].split("");
							for (p=0;p<phoneSplit.length;p++) {
								var thisHash = directEmailPhoneValueVarTest.indexOf("#");
								if (thisHash != -1) {
									directEmailPhoneValueVarTest = directEmailPhoneValueVarTest.substring(0,(thisHash))+phoneSplit[p]+directEmailPhoneValueVarTest.substring((thisHash+1));
								}
							}
							var directEmailPhoneValueVar = directEmailPhoneValueVarTest;
						}
						else {
							var directEmailPhoneValueVar = storeDisplayArray[whatIndex][15];
						}
						var directEmailPhoneRawStart = directEmailPhoneTagStrip.indexOf(" RAW");
						if (directEmailPhoneRawStart != -1) {
							var directEmailPhoneValueVar = storeDisplayArray[whatIndex][26];
						}
						directEmailStartHTML = directEmailPhoneHTMLStart + directEmailPhoneValueVar + directEmailPhoneHTMLEnd;
					}
					var directEmailStartDistanceTagStart = directEmailStartHTML.indexOf("<!--LOCDISTANCE");
					if (directEmailStartDistanceTagStart != -1) {
						var directEmailStartDistanceTagEnd = directEmailStartHTML.indexOf(">",directEmailStartDistanceTagStart);
						var directEmailStartDistanceTagStrip = directEmailStartHTML.substring(directEmailStartDistanceTagStart,(directEmailStartDistanceTagEnd+1));
						var baseDirectEmailStartDistanceHTMLStart = directEmailStartHTML.substr(0,directEmailStartDistanceTagStart);
						var baseDirectEmailStartDistanceHTMLEnd = directEmailStartHTML.substr((directEmailStartDistanceTagEnd+1));
						var directEmailStartDistanceKMTest = directEmailStartDistanceTagStrip.indexOf(" KM");
						if (directEmailStartDistanceKMTest != -1 || forceKM == 1) {
							var baseMiles = parseFloat(localFloorMiles);
							var finalMiles = Math.round((baseMiles*1.60934)*100)/100;
							var finalFormat = "km";
						}
						else {
							var finalMiles = localFloorMiles;
							var finalFormat = "mi";
						}
						var directEmailStartDistanceBlankTest = directEmailStartDistanceTagStrip.indexOf(" BLANK");
						if (directEmailStartDistanceBlankTest != -1) {
							var finalFormat = "";
						}
						directEmailStartHTML = baseDirectEmailStartDistanceHTMLStart + finalMiles + " " + finalFormat + baseDirectEmailStartDistanceHTMLEnd;
					}
					var stepIncr = 1;
					var directEmailStepHTML = "";
					for (var i = 0; i < myRoute.steps.length; i++) {
						var directEmailStepHTMLTest = autotextIt(p3TemplateSet.panel3EmailStepDiv,"panel3EmailStep");
						var directEmailStepNumberTagStart = directEmailStepHTMLTest.indexOf("<!--STEPNUM");
						if (directEmailStepNumberTagStart != -1) {
							var directEmailStepNumberTagEnd = directEmailStepHTMLTest.indexOf(">",directEmailStepNumberTagStart);
							var baseDirectEmailStepNumberHTMLStart = directEmailStepHTMLTest.substr(0,directEmailStepNumberTagStart);
							var baseDirectEmailStepNumberHTMLEnd = directEmailStepHTMLTest.substr((directEmailStepNumberTagEnd+1));
							directEmailStepHTMLTest = baseDirectEmailStepNumberHTMLStart + stepIncr + baseDirectEmailStepNumberHTMLEnd;
						}
						var directEmailStepEmailTagStart = directEmailStepHTMLTest.indexOf("<!--STEPTEXT");
						if (directEmailStepEmailTagStart != -1) {
							var directEmailStepEmailTagEnd = directEmailStepHTMLTest.indexOf(">",directEmailStepEmailTagStart);
							var baseDirectEmailStepEmailHTMLStart = directEmailStepHTMLTest.substr(0,directEmailStepEmailTagStart);
							var baseDirectEmailStepEmailHTMLEnd = directEmailStepHTMLTest.substr((directEmailStepEmailTagEnd+1));
							directEmailStepHTMLTest = baseDirectEmailStepEmailHTMLStart + myRoute.steps[i].instructions + baseDirectEmailStepEmailHTMLEnd;
						}
						var directEmailStepDistanceTagStart = directEmailStepHTMLTest.indexOf("<!--STEPDISTANCE");
						if (directEmailStepDistanceTagStart != -1) {
							var directEmailStepDistanceTagEnd = directEmailStepHTMLTest.indexOf(">",directEmailStepDistanceTagStart);
							var baseDirectEmailStepDistanceHTMLStart = directEmailStepHTMLTest.substr(0,directEmailStepDistanceTagStart);
							var baseDirectEmailStepDistanceHTMLEnd = directEmailStepHTMLTest.substr((directEmailStepDistanceTagEnd+1));
							directEmailStepHTMLTest = baseDirectEmailStepDistanceHTMLStart + myRoute.steps[i].distance.text + baseDirectEmailStepDistanceHTMLEnd;
						}
						stepIncr++;
						directEmailStepHTML += directEmailStepHTMLTest;
					}
					var directEmailStopHTML = autotextIt(p3TemplateSet.panel3EmailStopDiv,"panel3EmailStop");
					var directEmailStopAddressTagStart = directEmailStopHTML.indexOf("<!--LOCADDRESS");
					if (directEmailStopAddressTagStart != -1) {
						var directEmailStopAddressTagEnd = directEmailStopHTML.indexOf(">",directEmailStopAddressTagStart);
						var baseDirectEmailStopAddressHTMLStart = directEmailStopHTML.substr(0,directEmailStopAddressTagStart);
						var baseDirectEmailStopAddressHTMLEnd = directEmailStopHTML.substr((directEmailStopAddressTagEnd+1));
						directEmailStopHTML = baseDirectEmailStopAddressHTMLStart + document.getElementById('localEndAdd').value + baseDirectEmailStopAddressHTMLEnd;
					}
					var directEmailStopDistanceTagStart = directEmailStopHTML.indexOf("<!--LOCDISTANCE");
					if (directEmailStopDistanceTagStart != -1) {
						var directEmailStopDistanceTagEnd = directEmailStopHTML.indexOf(">",directEmailStopDistanceTagStart);
						var directEmailStopDistanceTagStrip = directEmailStopHTML.substring(directEmailStopDistanceTagStart,(directEmailStopDistanceTagEnd+1));
						var baseDirectEmailStopDistanceHTMLStart = directEmailStopHTML.substr(0,directEmailStopDistanceTagStart);
						var baseDirectEmailStopDistanceHTMLEnd = directEmailStopHTML.substr((directEmailStopDistanceTagEnd+1));
						var directEmailStopDistanceKMTest = directEmailStopDistanceTagStrip.indexOf(" KM");
						if (directEmailStopDistanceKMTest != -1 || forceKM == 1) {
							var baseMiles = parseFloat(localFloorMiles);
							var finalMiles = Math.round((baseMiles*1.60934)*100)/100;
							var finalFormat = "km";
						}
						else {
							var finalMiles = localFloorMiles;
							var finalFormat = "mi";
						}
						var directEmailStopDistanceBlankTest = directEmailStopDistanceTagStrip.indexOf(" BLANK");
						if (directEmailStopDistanceBlankTest != -1) {
							var finalFormat = "";
						}
						directEmailStopHTML = baseDirectEmailStopDistanceHTMLStart + finalMiles + " " + finalFormat + baseDirectEmailStopDistanceHTMLEnd;
					}
					if (isIE) {
						directEmailStartHTML = directEmailStartHTML.replace(/\/\*/g,"");
						directEmailStepHTML = directEmailStepHTML.replace(/\/\*/g,"");
						directEmailStopHTML = directEmailStopHTML.replace(/\/\*/g,"");
					}
					document.getElementById('panel3EmailDiv').innerHTML = directEmailStartHTML + directEmailStepHTML + directEmailStopHTML;
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
					var storeProdSub = [];
					for (p=0; p<prodWriteArray.length; p++) {
						storeProdSub.push(prodWriteArray[p][0]);
					}
					if (trackVal == 1 && allOnOne == 0) {
						setTimeout(function(){
							var storeTrackJSON = '1;;' + storeDisplayArray[whatIndex][16] + ';;' + storeDisplayArray[whatIndex][6] + ';;' + storeDisplayArray[whatIndex][7] + ';;' + storeDisplayArray[whatIndex][0].replace(/"/g, '') + ';;' + storeDisplayArray[whatIndex][1].replace(/"/g, '') + ';;' + storeDisplayArray[whatIndex][2].replace(/"/g, '') + ';;' + storeDisplayArray[whatIndex][3] + ';;' + storeDisplayArray[whatIndex][4] + ';;' + storeDisplayArray[whatIndex][5] + ';;' + storeDisplayArray[whatIndex][27] + ';;' + storeProdSub.toString(',');
							$.post(controlURL + "tracktest.php", {
								CB: noCache,
								TLL: tlVal,
								A1: trackVal,
								UP1: "PANEL3",
								UC1: "EMAIL",
								UCS1: "DETAIL",
								US1: "SUCCESS",
								USRC1: version,
								CLIENT: coreClient,
								ITER: iteration,
								DEVICE: deviceType,
								REF: referer,
								SESSID: daSESSID,
								LOCATION: '{"compiled_location":"' + document.getElementById('addressCompile').value.replace(/"/g, '') + '","latitude":"' + parseFloat(document.getElementById('LA').value).toFixed(5) + '","longitude":"' + parseFloat(document.getElementById('LO').value).toFixed(5) + '","city":"' + document.getElementById('revCodeCity').value.replace(/"/g, '') + '","state":"' + document.getElementById('revCodeState').value + '","zip":"' + document.getElementById('revCodeZip').value + '","country":"' + document.getElementById('revCodeCountry').value + '","us_code":"' + document.getElementById('revCodeUS').value + '"}',
								STORE: storeTrackJSON,
								STORECOUNT: 1,
								PLIST: compProdVal,
								PSET: prodSetVal,
								TRACK: "10",
								DUTV: dutv
								}, function(data){
									if(gLog==1){console.log("panel3CompileEmail - tracktest: " , JSON.parse(data));}
								}
							);
						},1000);
					}
					else if (trackVal == 2 && allOnOne == 0) {
						setTimeout(function(){
							var sendObj = setTrackObj();
							sendObj['TRK'] = 10;
							sendObj['RQF'] = "panel3CompileEmail";
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
							sendObj['STR'][0]['FED'] = storeDisplayArray[whatIndex][16];
							sendObj['STR'][0]['LAT'] = storeDisplayArray[whatIndex][6];
							sendObj['STR'][0]['LNG'] = storeDisplayArray[whatIndex][7];
							sendObj['STR'][0]['NAM'] = storeDisplayArray[whatIndex][0];
							sendObj['STR'][0]['ADD'] = storeDisplayArray[whatIndex][1];
							sendObj['STR'][0]['ADT'] = storeDisplayArray[whatIndex][2];
							sendObj['STR'][0]['CTY'] = storeDisplayArray[whatIndex][3];
							sendObj['STR'][0]['STA'] = storeDisplayArray[whatIndex][4];
							sendObj['STR'][0]['ZIP'] = storeDisplayArray[whatIndex][5];
							sendObj['STR'][0]['CNT'] = storeDisplayArray[whatIndex][27];
							sendObj['STR'][0]['PRD'] = storeProdSub.toString(',');
							sendObj['STC'] = 1;
							sendTrackObj(sendObj);
						},300);
					}
				}
			});
			frameVar = document.getElementById("iFrameForms");
			frameVar.contentWindow.location.replace(controlURL + "panel3Send.php?PANEL=3&CLIENT=" + coreClient + "&ITER=" + iteration + "&EMAIL=" + document.getElementById('panel3EmailField').value + "&SESSID=" + daSESSID);
		}
		else {
			errorText("Please choose a directions origin.",7);
		}
	}
	else if (locServe == 1) {
		if (p3DirSequence.length) {
			panel3LocalDistanceNum = 0;
			panel3LocalDurationNum = 0;
			for (var i = 0; i < p3DirSequence.length; i++) {
				var localTempDist = parseFloat(p3DirSequence[i][2]);
				var localTempDur = parseFloat(p3DirSequence[i][3]);
				panel3LocalDistanceNum += localTempDist;
				panel3LocalDurationNum += localTempDur;
			}
			var localFloorMiles = panel3LocalDistanceNum.toFixed(2);
			var localBaseMinutes = Math.floor(panel3LocalDurationNum/60);
			var whatIndex = document.getElementById('storeID').value;
			var directEmailStartHTML = autotextIt(p3TemplateSet.panel3EmailStartDiv,"panel3EmailStart");
			var directEmailLocClientTagStart = directEmailStartHTML.indexOf("<!--CLIENT");
			if (directEmailLocClientTagStart != -1) {
				var directEmailLocClientTagEnd = directEmailStartHTML.indexOf(">",directEmailLocClientTagStart);
				var baseDirectEmailLocClientHTMLStart = directEmailStartHTML.substr(0,directEmailLocClientTagStart);
				var baseDirectEmailLocClientHTMLEnd = directEmailStartHTML.substr((directEmailLocClientTagEnd+1));
				directEmailStartHTML = baseDirectEmailLocClientHTMLStart + coreClient + baseDirectEmailLocClientHTMLEnd;
			}
			var directEmailLocNameTagStart = directEmailStartHTML.indexOf("<!--LOCNAME");
			if (directEmailLocNameTagStart != -1) {
				var directEmailLocNameTagEnd = directEmailStartHTML.indexOf(">",directEmailLocNameTagStart);
				var baseDirectEmailLocNameHTMLStart = directEmailStartHTML.substr(0,directEmailLocNameTagStart);
				var baseDirectEmailLocNameHTMLEnd = directEmailStartHTML.substr((directEmailLocNameTagEnd+1));
				directEmailStartHTML = baseDirectEmailLocNameHTMLStart + storeDisplayArray[whatIndex][0] + baseDirectEmailLocNameHTMLEnd;
			}
			var directEmailStartAddressTagStart = directEmailStartHTML.indexOf("<!--LOCADDRESS");
			if (directEmailStartAddressTagStart != -1) {
				var directEmailStartAddressTagEnd = directEmailStartHTML.indexOf(">",directEmailStartAddressTagStart);
				var baseDirectEmailStartAddressHTMLStart = directEmailStartHTML.substr(0,directEmailStartAddressTagStart);
				var baseDirectEmailStartAddressHTMLEnd = directEmailStartHTML.substr((directEmailStartAddressTagEnd+1));
				directEmailStartHTML = baseDirectEmailStartAddressHTMLStart + document.getElementById('localStartAdd').value + baseDirectEmailStartAddressHTMLEnd;
			}
			var directEmailLocStreetTagStart = directEmailStartHTML.indexOf("<!--LOCSTREET");
			if (directEmailLocStreetTagStart != -1) {
				var directEmailLocStreetTagEnd = directEmailStartHTML.indexOf(">",directEmailLocStreetTagStart);
				var baseDirectEmailLocStreetHTMLStart = directEmailStartHTML.substr(0,directEmailLocStreetTagStart);
				var baseDirectEmailLocStreetHTMLEnd = directEmailStartHTML.substr((directEmailLocStreetTagEnd+1));
				directEmailStartHTML = baseDirectEmailLocStreetHTMLStart + storeDisplayArray[whatIndex][1] + baseDirectEmailLocStreetHTMLEnd;
			}
			var directEmailLocTwoStreetTagStart = directEmailStartHTML.indexOf("<!--LOCTWOSTREET");
			if (directEmailLocTwoStreetTagStart != -1) {
				var directEmailLocTwoStreetTagEnd = directEmailStartHTML.indexOf(">",directEmailLocTwoStreetTagStart);
				var baseDirectEmailLocTwoStreetHTMLStart = directEmailStartHTML.substr(0,directEmailLocTwoStreetTagStart);
				var baseDirectEmailLocTwoStreetHTMLEnd = directEmailStartHTML.substr((directEmailLocTwoStreetTagEnd+1));
				directEmailStartHTML = baseDirectEmailLocTwoStreetHTMLStart + storeDisplayArray[whatIndex][2] + baseDirectEmailLocTwoStreetHTMLEnd;
			}
			var directEmailLocCityTagStart = directEmailStartHTML.indexOf("<!--LOCCITY");
			if (directEmailLocCityTagStart != -1) {
				var directEmailLocCityTagEnd = directEmailStartHTML.indexOf(">",directEmailLocCityTagStart);
				var baseDirectEmailLocCityHTMLStart = directEmailStartHTML.substr(0,directEmailLocCityTagStart);
				var baseDirectEmailLocCityHTMLEnd = directEmailStartHTML.substr((directEmailLocCityTagEnd+1));
				directEmailStartHTML = baseDirectEmailLocCityHTMLStart + storeDisplayArray[whatIndex][3] + baseDirectEmailLocCityHTMLEnd;
			}
			var directEmailLocStateTagStart = directEmailStartHTML.indexOf("<!--LOCSTATE");
			if (directEmailLocStateTagStart != -1) {
				var directEmailLocStateTagEnd = directEmailStartHTML.indexOf(">",directEmailLocStateTagStart);
				var baseDirectEmailLocStateHTMLStart = directEmailStartHTML.substr(0,directEmailLocStateTagStart);
				var baseDirectEmailLocStateHTMLEnd = directEmailStartHTML.substr((directEmailLocStateTagEnd+1));
				if (stateNames == 1) {
					var gottaState = 0;
					for (tsa=0;tsa<tblStateArray.length;tsa++) {
						if (tblStateArray[tsa][0] == storeDisplayArray[whatIndex][4]) {
							var stateOut = tblStateArray[tsa][1];
							gottaState = 1;
							break;
						}
					}
					if (gottaState == 0) {
						var stateOut = storeDisplayArray[whatIndex][4];
					}
				}
				else {
					var stateOut = storeDisplayArray[whatIndex][4];
				}
				directEmailStartHTML = baseDirectEmailLocStateHTMLStart + stateOut + baseDirectEmailLocStateHTMLEnd;
			}
			var directEmailLocZipTagStart = directEmailStartHTML.indexOf("<!--LOCZIP");
			if (directEmailLocZipTagStart != -1) {
				var directEmailLocZipTagEnd = directEmailStartHTML.indexOf(">",directEmailLocZipTagStart);
				var baseDirectEmailLocZipHTMLStart = directEmailStartHTML.substr(0,directEmailLocZipTagStart);
				var baseDirectEmailLocZipHTMLEnd = directEmailStartHTML.substr((directEmailLocZipTagEnd+1));
				directEmailStartHTML = baseDirectEmailLocZipHTMLStart + storeDisplayArray[whatIndex][5] + baseDirectEmailLocZipHTMLEnd;
			}
			var directEmailLocCountryTagStart = directEmailStartHTML.indexOf("<!--LOCCOUNTRY");
			if (directEmailLocCountryTagStart != -1) {
				var directEmailLocCountryTagEnd = directEmailStartHTML.indexOf(">",directEmailLocCountryTagStart);
				var baseDirectEmailLocCountryHTMLStart = directEmailStartHTML.substr(0,directEmailLocCountryTagStart);
				var baseDirectEmailLocCountryHTMLEnd = directEmailStartHTML.substr((directEmailLocCountryTagEnd+1));
				directEmailStartHTML = baseDirectEmailLocCountryHTMLStart + storeDisplayArray[whatIndex][27] + baseDirectEmailLocCountryHTMLEnd;
			}
			var directEmailPhoneTagStart = directEmailStartHTML.indexOf("<!--LOCPHONE");
			if (directEmailPhoneTagStart != -1 && storeDisplayArray[whatIndex][15]!="") {
				var directEmailPhoneTagEnd = directEmailStartHTML.indexOf(">",directEmailPhoneTagStart);
				var directEmailPhoneTagStrip = directEmailStartHTML.substring(directEmailPhoneTagStart,(directEmailPhoneTagEnd+1));
				var directEmailPhoneHTMLStart = directEmailStartHTML.substr(0,directEmailPhoneTagStart);
				var directEmailPhoneHTMLEnd = directEmailStartHTML.substr((directEmailPhoneTagEnd+1));
				var directEmailPhoneValueStart = directEmailPhoneTagStrip.indexOf(" FORMAT=");
				if (directEmailPhoneValueStart != -1) {
					var directEmailPhoneValueEnd = directEmailPhoneTagStrip.indexOf("]");
					var directEmailPhoneValueVarTest = directEmailPhoneTagStrip.substring((directEmailPhoneValueStart+9),(directEmailPhoneValueEnd));
					var phoneSplit=storeDisplayArray[whatIndex][15].split("");
					for (p=0;p<phoneSplit.length;p++) {
						var thisHash = directEmailPhoneValueVarTest.indexOf("#");
						if (thisHash != -1) {
							directEmailPhoneValueVarTest = directEmailPhoneValueVarTest.substring(0,(thisHash))+phoneSplit[p]+directEmailPhoneValueVarTest.substring((thisHash+1));
						}
					}
					var directEmailPhoneValueVar = directEmailPhoneValueVarTest;
				}
				else {
					var directEmailPhoneValueVar = storeDisplayArray[whatIndex][15];
				}
				var directEmailPhoneRawStart = directEmailPhoneTagStrip.indexOf(" RAW");
				if (directEmailPhoneRawStart != -1) {
					var directEmailPhoneValueVar = storeDisplayArray[whatIndex][26];
				}
				directEmailStartHTML = directEmailPhoneHTMLStart + directEmailPhoneValueVar + directEmailPhoneHTMLEnd;
			}
			var directEmailStartDistanceTagStart = directEmailStartHTML.indexOf("<!--LOCDISTANCE");
			if (directEmailStartDistanceTagStart != -1) {
				var directEmailStartDistanceTagEnd = directEmailStartHTML.indexOf(">",directEmailStartDistanceTagStart);
				var directEmailStartDistanceTagStrip = directEmailStartHTML.substring(directEmailStartDistanceTagStart,(directEmailStartDistanceTagEnd+1));
				var baseDirectEmailStartDistanceHTMLStart = directEmailStartHTML.substr(0,directEmailStartDistanceTagStart);
				var baseDirectEmailStartDistanceHTMLEnd = directEmailStartHTML.substr((directEmailStartDistanceTagEnd+1));
				var directEmailStartDistanceKMTest = directEmailStartDistanceTagStrip.indexOf(" KM");
				if (directEmailStartDistanceKMTest != -1 || forceKM == 1) {
					var baseMiles = parseFloat(localFloorMiles);
					var finalMiles = Math.round((baseMiles*1.60934)*100)/100;
					var finalFormat = "km";
				}
				else {
					var finalMiles = localFloorMiles;
					var finalFormat = "mi";
				}
				var directEmailStartDistanceBlankTest = directEmailStartDistanceTagStrip.indexOf(" BLANK");
				if (directEmailStartDistanceBlankTest != -1) {
					var finalFormat = "";
				}
				directEmailStartHTML = baseDirectEmailStartDistanceHTMLStart + finalMiles + " " + finalFormat + baseDirectEmailStartDistanceHTMLEnd;
			}
			var directEmailStepHTML = "";
			for (var i = 0; i < p3DirSequence.length; i++) {
				var directEmailStepHTMLTest = autotextIt(p3TemplateSet.panel3EmailStepDiv,"panel3EmailStep");
				var directEmailStepNumberTagStart = directEmailStepHTMLTest.indexOf("<!--STEPNUM");
				if (directEmailStepNumberTagStart != -1) {
					var directEmailStepNumberTagEnd = directEmailStepHTMLTest.indexOf(">",directEmailStepNumberTagStart);
					var baseDirectEmailStepNumberHTMLStart = directEmailStepHTMLTest.substr(0,directEmailStepNumberTagStart);
					var baseDirectEmailStepNumberHTMLEnd = directEmailStepHTMLTest.substr((directEmailStepNumberTagEnd+1));
					directEmailStepHTMLTest = baseDirectEmailStepNumberHTMLStart + p3DirSequence[i][0] + baseDirectEmailStepNumberHTMLEnd;
				}
				var directEmailStepEmailTagStart = directEmailStepHTMLTest.indexOf("<!--STEPTEXT");
				if (directEmailStepEmailTagStart != -1) {
					var directEmailStepEmailTagEnd = directEmailStepHTMLTest.indexOf(">",directEmailStepEmailTagStart);
					var baseDirectEmailStepEmailHTMLStart = directEmailStepHTMLTest.substr(0,directEmailStepEmailTagStart);
					var baseDirectEmailStepEmailHTMLEnd = directEmailStepHTMLTest.substr((directEmailStepEmailTagEnd+1));
					directEmailStepHTMLTest = baseDirectEmailStepEmailHTMLStart + p3DirSequence[i][1] + baseDirectEmailStepEmailHTMLEnd;
				}
				var directEmailStepDistanceTagStart = directEmailStepHTMLTest.indexOf("<!--STEPDISTANCE");
				if (directEmailStepDistanceTagStart != -1) {
					var directEmailStepDistanceTagEnd = directEmailStepHTMLTest.indexOf(">",directEmailStepDistanceTagStart);
					var baseDirectEmailStepDistanceHTMLStart = directEmailStepHTMLTest.substr(0,directEmailStepDistanceTagStart);
					var baseDirectEmailStepDistanceHTMLEnd = directEmailStepHTMLTest.substr((directEmailStepDistanceTagEnd+1));
					directEmailStepHTMLTest = baseDirectEmailStepDistanceHTMLStart + p3DirSequence[i][2] + baseDirectEmailStepDistanceHTMLEnd;
				}
				directEmailStepHTML += directEmailStepHTMLTest;
			}
			var directEmailStopHTML = autotextIt(p3TemplateSet.panel3EmailStopDiv,"panel3EmailStop");
			var directEmailStopAddressTagStart = directEmailStopHTML.indexOf("<!--LOCADDRESS");
			if (directEmailStopAddressTagStart != -1) {
				var directEmailStopAddressTagEnd = directEmailStopHTML.indexOf(">",directEmailStopAddressTagStart);
				var baseDirectEmailStopAddressHTMLStart = directEmailStopHTML.substr(0,directEmailStopAddressTagStart);
				var baseDirectEmailStopAddressHTMLEnd = directEmailStopHTML.substr((directEmailStopAddressTagEnd+1));
				directEmailStopHTML = baseDirectEmailStopAddressHTMLStart + document.getElementById('localEndAdd').value + baseDirectEmailStopAddressHTMLEnd;
			}
			var directEmailStopDistanceTagStart = directEmailStopHTML.indexOf("<!--LOCDISTANCE");
			if (directEmailStopDistanceTagStart != -1) {
				var directEmailStopDistanceTagEnd = directEmailStopHTML.indexOf(">",directEmailStopDistanceTagStart);
				var directEmailStopDistanceTagStrip = directEmailStopHTML.substring(directEmailStopDistanceTagStart,(directEmailStopDistanceTagEnd+1));
				var baseDirectEmailStopDistanceHTMLStart = directEmailStopHTML.substr(0,directEmailStopDistanceTagStart);
				var baseDirectEmailStopDistanceHTMLEnd = directEmailStopHTML.substr((directEmailStopDistanceTagEnd+1));
				var directEmailStopDistanceKMTest = directEmailStopDistanceTagStrip.indexOf(" KM");
				if (directEmailStopDistanceKMTest != -1 || forceKM == 1) {
					var baseMiles = parseFloat(localFloorMiles);
					var finalMiles = Math.round((baseMiles*1.60934)*100)/100;
					var finalFormat = "km";
				}
				else {
					var finalMiles = localFloorMiles;
					var finalFormat = "mi";
				}
				var directEmailStopDistanceBlankTest = directEmailStopDistanceTagStrip.indexOf(" BLANK");
				if (directEmailStopDistanceBlankTest != -1) {
					var finalFormat = "";
				}
				directEmailStopHTML = baseDirectEmailStopDistanceHTMLStart + finalMiles + " " + finalFormat + baseDirectEmailStopDistanceHTMLEnd;
			}
			if (isIE) {
				directEmailStartHTML = directEmailStartHTML.replace(/\/\*/g,"");
				directEmailStepHTML = directEmailStepHTML.replace(/\/\*/g,"");
				directEmailStopHTML = directEmailStopHTML.replace(/\/\*/g,"");
			}
			document.getElementById('panel3EmailDiv').innerHTML = directEmailStartHTML + directEmailStepHTML + directEmailStopHTML;
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
			var storeProdSub = [];
			for (p=0; p<prodWriteArray.length; p++) {
				storeProdSub.push(prodWriteArray[p][0]);
			}
			if (trackVal == 1 && allOnOne == 0) {
				setTimeout(function(){
					var storeTrackJSON = '1;;' + storeDisplayArray[whatIndex][16] + ';;' + storeDisplayArray[whatIndex][6] + ';;' + storeDisplayArray[whatIndex][7] + ';;' + storeDisplayArray[whatIndex][0].replace(/"/g, '') + ';;' + storeDisplayArray[whatIndex][1].replace(/"/g, '') + ';;' + storeDisplayArray[whatIndex][2].replace(/"/g, '') + ';;' + storeDisplayArray[whatIndex][3] + ';;' + storeDisplayArray[whatIndex][4] + ';;' + storeDisplayArray[whatIndex][5] + ';;' + storeDisplayArray[whatIndex][27] + ';;' + storeProdSub.toString(',');
					$.post(controlURL + "tracktest.php", {
						CB: noCache,
						TLL: tlVal,
						A1: trackVal,
						UP1: "PANEL3",
						UC1: "EMAIL",
						UCS1: "DETAIL",
						US1: "SUCCESS",
						USRC1: version,
						CLIENT: coreClient,
						ITER: iteration,
						DEVICE: deviceType,
						REF: referer,
						SESSID: daSESSID,
						LOCATION: '{"compiled_location":"' + document.getElementById('addressCompile').value.replace(/"/g, '') + '","latitude":"' + parseFloat(document.getElementById('LA').value).toFixed(5) + '","longitude":"' + parseFloat(document.getElementById('LO').value).toFixed(5) + '","city":"' + document.getElementById('revCodeCity').value.replace(/"/g, '') + '","state":"' + document.getElementById('revCodeState').value + '","zip":"' + document.getElementById('revCodeZip').value + '","country":"' + document.getElementById('revCodeCountry').value + '","us_code":"' + document.getElementById('revCodeUS').value + '"}',
						STORE: storeTrackJSON,
						STORECOUNT: 1,
						PLIST: compProdVal,
						PSET: prodSetVal,
						TRACK: "10",
						DUTV: dutv
						}, function(data){
							if(gLog==1){console.log("panel3CompileEmail - tracktest: " , JSON.parse(data));}
						}
					);
				},1000);
			}
			else if (trackVal == 2 && allOnOne == 0) {
				setTimeout(function(){
					var sendObj = setTrackObj();
					sendObj['TRK'] = 10;
					sendObj['RQF'] = "panel3CompileEmail";
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
					sendObj['STR'][0]['FED'] = storeDisplayArray[whatIndex][16];
					sendObj['STR'][0]['LAT'] = storeDisplayArray[whatIndex][6];
					sendObj['STR'][0]['LNG'] = storeDisplayArray[whatIndex][7];
					sendObj['STR'][0]['NAM'] = storeDisplayArray[whatIndex][0];
					sendObj['STR'][0]['ADD'] = storeDisplayArray[whatIndex][1];
					sendObj['STR'][0]['ADT'] = storeDisplayArray[whatIndex][2];
					sendObj['STR'][0]['CTY'] = storeDisplayArray[whatIndex][3];
					sendObj['STR'][0]['STA'] = storeDisplayArray[whatIndex][4];
					sendObj['STR'][0]['ZIP'] = storeDisplayArray[whatIndex][5];
					sendObj['STR'][0]['CNT'] = storeDisplayArray[whatIndex][27];
					sendObj['STR'][0]['PRD'] = storeProdSub.toString(',');
					sendObj['STC'] = 1;
					sendTrackObj(sendObj);
				},300);
			}
			frameVar = document.getElementById("iFrameForms");
			frameVar.contentWindow.location.replace(controlURL + "panel3Send.php?PANEL=3&CLIENT=" + coreClient + "&ITER=" + iteration + "&EMAIL=" + document.getElementById('panel3EmailField').value + "&SESSID=" + daSESSID);
		}
		else {
			errorText("Please choose a directions origin.",7);
		}
	}
}
function panel3ConfirmEmail() {
	errorText('Your directions have been sent!',0);
	setTimeout(function(){
		errorClose();
		genericCloseMe();
	},2000);
}
function panel3Print() {
	if (gtm != 0) {
		var printInd = parseInt(document.getElementById('storeID').value);
		GTMit("PRINTSTR", "click", storeDisplayArray[printInd][0] + "|" + storeDisplayArray[printInd][1] + "|" + storeDisplayArray[printInd][3] + "|" + storeDisplayArray[printInd][4] + "|" + storeDisplayArray[printInd][5] + "|" + storeDisplayArray[printInd][6] + "|" + storeDisplayArray[printInd][7] + "|" + storeDisplayArray[printInd][27] + "|" + storeDisplayArray[printInd][8],false);
	}
	if (locServe == 0) {
		if (document.getElementById('printSLA').value != "") {
			var startLat = document.getElementById('printSLA').value;
			var startLon = document.getElementById('printSLO').value;
			var endLat = document.getElementById('printELA').value;
			var endLon = document.getElementById('printELO').value;
			var localStart = new google.maps.LatLng(startLat, startLon);
			var localEnd = new google.maps.LatLng(endLat, endLon);
			var request = {
				origin: localStart,
				destination: localEnd,
				travelMode: google.maps.TravelMode.DRIVING
			};
			panel3PrintDirectionsService = new google.maps.DirectionsService();
			panel3PrintDirectionsService.route(request, function(result, status) {
				if (status == google.maps.DirectionsStatus.OK) {
					var myRoute = result.routes[0].legs[0];
					var localBaseMiles = panel3LocalDistanceNum / 1609.344;
					var localFloorMiles = localBaseMiles.toFixed(2);
					var localBaseMinutes = Math.floor(panel3LocalDurationNum/60);
					var whatIndex = document.getElementById('storeID').value;
					var directPrintStartHTML = autotextIt(p3TemplateSet.panel3PrintStartDiv,"panel3PrintStart");
					var directPrintLocClientTagStart = directPrintStartHTML.indexOf("<!--CLIENT");
					if (directPrintLocClientTagStart != -1) {
						var directPrintLocClientTagEnd = directPrintStartHTML.indexOf(">",directPrintLocClientTagStart);
						var baseDirectPrintLocClientHTMLStart = directPrintStartHTML.substr(0,directPrintLocClientTagStart);
						var baseDirectPrintLocClientHTMLEnd = directPrintStartHTML.substr((directPrintLocClientTagEnd+1));
						directPrintStartHTML = baseDirectPrintLocClientHTMLStart + coreClient + baseDirectPrintLocClientHTMLEnd;
					}
					var directPrintLocNameTagStart = directPrintStartHTML.indexOf("<!--LOCNAME");
					if (directPrintLocNameTagStart != -1) {
						var directPrintLocNameTagEnd = directPrintStartHTML.indexOf(">",directPrintLocNameTagStart);
						var baseDirectPrintLocNameHTMLStart = directPrintStartHTML.substr(0,directPrintLocNameTagStart);
						var baseDirectPrintLocNameHTMLEnd = directPrintStartHTML.substr((directPrintLocNameTagEnd+1));
						directPrintStartHTML = baseDirectPrintLocNameHTMLStart + storeDisplayArray[whatIndex][0] + baseDirectPrintLocNameHTMLEnd;
					}
					var directPrintStartAddressTagStart = directPrintStartHTML.indexOf("<!--LOCADDRESS");
					if (directPrintStartAddressTagStart != -1) {
						var directPrintStartAddressTagEnd = directPrintStartHTML.indexOf(">",directPrintStartAddressTagStart);
						var baseDirectPrintStartAddressHTMLStart = directPrintStartHTML.substr(0,directPrintStartAddressTagStart);
						var baseDirectPrintStartAddressHTMLEnd = directPrintStartHTML.substr((directPrintStartAddressTagEnd+1));
						directPrintStartHTML = baseDirectPrintStartAddressHTMLStart + document.getElementById('localStartAdd').value + baseDirectPrintStartAddressHTMLEnd;
					}
					var directPrintLocStreetTagStart = directPrintStartHTML.indexOf("<!--LOCSTREET");
					if (directPrintLocStreetTagStart != -1) {
						var directPrintLocStreetTagEnd = directPrintStartHTML.indexOf(">",directPrintLocStreetTagStart);
						var baseDirectPrintLocStreetHTMLStart = directPrintStartHTML.substr(0,directPrintLocStreetTagStart);
						var baseDirectPrintLocStreetHTMLEnd = directPrintStartHTML.substr((directPrintLocStreetTagEnd+1));
						directPrintStartHTML = baseDirectPrintLocStreetHTMLStart + storeDisplayArray[whatIndex][1] + baseDirectPrintLocStreetHTMLEnd;
					}
					var directPrintLocTwoStreetTagStart = directPrintStartHTML.indexOf("<!--LOCTWOSTREET");
					if (directPrintLocTwoStreetTagStart != -1) {
						var directPrintLocTwoStreetTagEnd = directPrintStartHTML.indexOf(">",directPrintLocTwoStreetTagStart);
						var baseDirectPrintLocTwoStreetHTMLStart = directPrintStartHTML.substr(0,directPrintLocTwoStreetTagStart);
						var baseDirectPrintLocTwoStreetHTMLEnd = directPrintStartHTML.substr((directPrintLocTwoStreetTagEnd+1));
						directPrintStartHTML = baseDirectPrintLocTwoStreetHTMLStart + storeDisplayArray[whatIndex][2] + baseDirectPrintLocTwoStreetHTMLEnd;
					}
					var directPrintLocCityTagStart = directPrintStartHTML.indexOf("<!--LOCCITY");
					if (directPrintLocCityTagStart != -1) {
						var directPrintLocCityTagEnd = directPrintStartHTML.indexOf(">",directPrintLocCityTagStart);
						var baseDirectPrintLocCityHTMLStart = directPrintStartHTML.substr(0,directPrintLocCityTagStart);
						var baseDirectPrintLocCityHTMLEnd = directPrintStartHTML.substr((directPrintLocCityTagEnd+1));
						directPrintStartHTML = baseDirectPrintLocCityHTMLStart + storeDisplayArray[whatIndex][3] + baseDirectPrintLocCityHTMLEnd;
					}
					var directPrintLocStateTagStart = directPrintStartHTML.indexOf("<!--LOCSTATE");
					if (directPrintLocStateTagStart != -1) {
						var directPrintLocStateTagEnd = directPrintStartHTML.indexOf(">",directPrintLocStateTagStart);
						var baseDirectPrintLocStateHTMLStart = directPrintStartHTML.substr(0,directPrintLocStateTagStart);
						var baseDirectPrintLocStateHTMLEnd = directPrintStartHTML.substr((directPrintLocStateTagEnd+1));
						if (stateNames == 1) {
							var gottaState = 0;
							for (tsa=0;tsa<tblStateArray.length;tsa++) {
								if (tblStateArray[tsa][0] == storeDisplayArray[whatIndex][4]) {
									var stateOut = tblStateArray[tsa][1];
									gottaState = 1;
									break;
								}
							}
							if (gottaState == 0) {
								var stateOut = storeDisplayArray[whatIndex][4];
							}
						}
						else {
							var stateOut = storeDisplayArray[whatIndex][4];
						}
						directPrintStartHTML = baseDirectPrintLocStateHTMLStart + stateOut + baseDirectPrintLocStateHTMLEnd;
					}
					var directPrintLocZipTagStart = directPrintStartHTML.indexOf("<!--LOCZIP");
					if (directPrintLocZipTagStart != -1) {
						var directPrintLocZipTagEnd = directPrintStartHTML.indexOf(">",directPrintLocZipTagStart);
						var baseDirectPrintLocZipHTMLStart = directPrintStartHTML.substr(0,directPrintLocZipTagStart);
						var baseDirectPrintLocZipHTMLEnd = directPrintStartHTML.substr((directPrintLocZipTagEnd+1));
						directPrintStartHTML = baseDirectPrintLocZipHTMLStart + storeDisplayArray[whatIndex][5] + baseDirectPrintLocZipHTMLEnd;
					}
					var directPrintLocCountryTagStart = directPrintStartHTML.indexOf("<!--LOCCOUNTRY");
					if (directPrintLocCountryTagStart != -1) {
						var directPrintLocCountryTagEnd = directPrintStartHTML.indexOf(">",directPrintLocCountryTagStart);
						var baseDirectPrintLocCountryHTMLStart = directPrintStartHTML.substr(0,directPrintLocCountryTagStart);
						var baseDirectPrintLocCountryHTMLEnd = directPrintStartHTML.substr((directPrintLocCountryTagEnd+1));
						directPrintStartHTML = baseDirectPrintLocCountryHTMLStart + storeDisplayArray[whatIndex][27] + baseDirectPrintLocCountryHTMLEnd;
					}
					var directPrintPhoneTagStart = directPrintStartHTML.indexOf("<!--LOCPHONE");
					if (directPrintPhoneTagStart != -1 && storeDisplayArray[whatIndex][15]!="") {
						var directPrintPhoneTagEnd = directPrintStartHTML.indexOf(">",directPrintPhoneTagStart);
						var directPrintPhoneTagStrip = directPrintStartHTML.substring(directPrintPhoneTagStart,(directPrintPhoneTagEnd+1));
						var directPrintPhoneHTMLStart = directPrintStartHTML.substr(0,directPrintPhoneTagStart);
						var directPrintPhoneHTMLEnd = directPrintStartHTML.substr((directPrintPhoneTagEnd+1));
						var directPrintPhoneValueStart = directPrintPhoneTagStrip.indexOf(" FORMAT=");
						if (directPrintPhoneValueStart != -1) {
							var directPrintPhoneValueEnd = directPrintPhoneTagStrip.indexOf("]");
							var directPrintPhoneValueVarTest = directPrintPhoneTagStrip.substring((directPrintPhoneValueStart+9),(directPrintPhoneValueEnd));
							var phoneSplit=storeDisplayArray[whatIndex][15].split("");
							for (p=0;p<phoneSplit.length;p++) {
								var thisHash = directPrintPhoneValueVarTest.indexOf("#");
								if (thisHash != -1) {
									directPrintPhoneValueVarTest = directPrintPhoneValueVarTest.substring(0,(thisHash))+phoneSplit[p]+directPrintPhoneValueVarTest.substring((thisHash+1));
								}
							}
							var directPrintPhoneValueVar = directPrintPhoneValueVarTest;
						}
						else {
							var directPrintPhoneValueVar = storeDisplayArray[whatIndex][15];
						}
						var directPrintPhoneRawStart = directPrintPhoneTagStrip.indexOf(" RAW");
						if (directPrintPhoneRawStart != -1) {
							var directPrintPhoneValueVar = storeDisplayArray[whatIndex][26];
						}
						directPrintStartHTML = directPrintPhoneHTMLStart + directPrintPhoneValueVar + directPrintPhoneHTMLEnd;
					}
					var directPrintStartDistanceTagStart = directPrintStartHTML.indexOf("<!--LOCDISTANCE");
					if (directPrintStartDistanceTagStart != -1) {
						var directPrintStartDistanceTagEnd = directPrintStartHTML.indexOf(">",directPrintStartDistanceTagStart);
						var directPrintStartDistanceTagStrip = directPrintStartHTML.substring(directPrintStartDistanceTagStart,(directPrintStartDistanceTagEnd+1));
						var baseDirectPrintStartDistanceHTMLStart = directPrintStartHTML.substr(0,directPrintStartDistanceTagStart);
						var baseDirectPrintStartDistanceHTMLEnd = directPrintStartHTML.substr((directPrintStartDistanceTagEnd+1));
						var directPrintStartDistanceKMTest = directPrintStartHTML.indexOf(" KM");
						if (directPrintStartDistanceKMTest != -1 || forceKM == 1) {
							var baseMiles = parseFloat(localFloorMiles);
							var finalMiles = Math.round((baseMiles*1.60934)*100)/100;
							var finalFormat = "km";
						}
						else {
							var finalMiles = localFloorMiles;
							var finalFormat = "mi";
						}
						var directPrintStartDistanceBlankTest = directPrintStartHTML.indexOf(" BLANK");
						if (directPrintStartDistanceBlankTest != -1) {
							var finalFormat = "";
						}
						directPrintStartHTML = baseDirectPrintStartDistanceHTMLStart + finalMiles + " " + finalFormat + baseDirectPrintStartDistanceHTMLEnd;
					}
					var stepIncr = 1;
					var directPrintStepHTML = "";
					for (var i = 0; i < myRoute.steps.length; i++) {
						var directPrintStepHTMLTest = autotextIt(p3TemplateSet.panel3PrintStepDiv,"panel3PrintStep");
						var directPrintStepNumberTagStart = directPrintStepHTMLTest.indexOf("<!--STEPNUM");
						if (directPrintStepNumberTagStart != -1) {
							var directPrintStepNumberTagEnd = directPrintStepHTMLTest.indexOf(">",directPrintStepNumberTagStart);
							var baseDirectPrintStepNumberHTMLStart = directPrintStepHTMLTest.substr(0,directPrintStepNumberTagStart);
							var baseDirectPrintStepNumberHTMLEnd = directPrintStepHTMLTest.substr((directPrintStepNumberTagEnd+1));
							directPrintStepHTMLTest = baseDirectPrintStepNumberHTMLStart + stepIncr + baseDirectPrintStepNumberHTMLEnd;
						}
						var directPrintStepPrintTagStart = directPrintStepHTMLTest.indexOf("<!--STEPTEXT");
						if (directPrintStepPrintTagStart != -1) {
							var directPrintStepPrintTagEnd = directPrintStepHTMLTest.indexOf(">",directPrintStepPrintTagStart);
							var baseDirectPrintStepPrintHTMLStart = directPrintStepHTMLTest.substr(0,directPrintStepPrintTagStart);
							var baseDirectPrintStepPrintHTMLEnd = directPrintStepHTMLTest.substr((directPrintStepPrintTagEnd+1));
							directPrintStepHTMLTest = baseDirectPrintStepPrintHTMLStart + myRoute.steps[i].instructions + baseDirectPrintStepPrintHTMLEnd;
						}
						var directPrintStepDistanceTagStart = directPrintStepHTMLTest.indexOf("<!--STEPDISTANCE");
						if (directPrintStepDistanceTagStart != -1) {
							var directPrintStepDistanceTagEnd = directPrintStepHTMLTest.indexOf(">",directPrintStepDistanceTagStart);
							var baseDirectPrintStepDistanceHTMLStart = directPrintStepHTMLTest.substr(0,directPrintStepDistanceTagStart);
							var baseDirectPrintStepDistanceHTMLEnd = directPrintStepHTMLTest.substr((directPrintStepDistanceTagEnd+1));
							directPrintStepHTMLTest = baseDirectPrintStepDistanceHTMLStart + myRoute.steps[i].distance.text + baseDirectPrintStepDistanceHTMLEnd;
						}
						stepIncr++;
						directPrintStepHTML += directPrintStepHTMLTest;
					}
					var directPrintStopHTML = autotextIt(p3TemplateSet.panel3PrintStopDiv,"panel3PrintStop");
					var directPrintStopAddressTagStart = directPrintStopHTML.indexOf("<!--LOCADDRESS");
					if (directPrintStopAddressTagStart != -1) {
						var directPrintStopAddressTagEnd = directPrintStopHTML.indexOf(">",directPrintStopAddressTagStart);
						var baseDirectPrintStopAddressHTMLStart = directPrintStopHTML.substr(0,directPrintStopAddressTagStart);
						var baseDirectPrintStopAddressHTMLEnd = directPrintStopHTML.substr((directPrintStopAddressTagEnd+1));
						directPrintStopHTML = baseDirectPrintStopAddressHTMLStart + document.getElementById('localEndAdd').value + baseDirectPrintStopAddressHTMLEnd;
					}
					var directPrintStopDistanceTagStart = directPrintStopHTML.indexOf("<!--LOCDISTANCE");
					if (directPrintStopDistanceTagStart != -1) {
						var directPrintStopDistanceTagEnd = directPrintStopHTML.indexOf(">",directPrintStopDistanceTagStart);
						var directPrintStopDistanceTagStrip = directPrintStopHTML.substring(directPrintStopDistanceTagStart,(directPrintStopDistanceTagEnd+1));
						var baseDirectPrintStopDistanceHTMLStart = directPrintStopHTML.substr(0,directPrintStopDistanceTagStart);
						var baseDirectPrintStopDistanceHTMLEnd = directPrintStopHTML.substr((directPrintStopDistanceTagEnd+1));
						var directPrintStopDistanceKMTest = directPrintStopHTML.indexOf(" KM");
						if (directPrintStopDistanceKMTest != -1 || forceKM == 1) {
							var baseMiles = parseFloat(localFloorMiles);
							var finalMiles = Math.round((baseMiles*1.60934)*100)/100;
							var finalFormat = "km";
						}
						else {
							var finalMiles = localFloorMiles;
							var finalFormat = "mi";
						}
						var directPrintStopDistanceBlankTest = directPrintStopHTML.indexOf(" BLANK");
						if (directPrintStopDistanceBlankTest != -1) {
							var finalFormat = "";
						}
						directPrintStopHTML = baseDirectPrintStopDistanceHTMLStart + finalMiles + " " + finalFormat + baseDirectPrintStopDistanceHTMLEnd;
					}
					if (isIE) {
						directPrintStartHTML = directPrintStartHTML.replace(/\/\*/g,"");
						directPrintStepHTML = directPrintStepHTML.replace(/\/\*/g,"");
						directPrintStopHTML = directPrintStopHTML.replace(/\/\*/g,"");
					}
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
					var storeProdSub = [];
					for (p=0; p<prodWriteArray.length; p++) {
						storeProdSub.push(prodWriteArray[p][0]);
					}
					if (trackVal == 1 && allOnOne == 0) {
						setTimeout(function(){
							var storeTrackJSON = '1;;' + storeDisplayArray[whatIndex][16] + ';;' + storeDisplayArray[whatIndex][6] + ';;' + storeDisplayArray[whatIndex][7] + ';;' + storeDisplayArray[whatIndex][0].replace(/"/g, '') + ';;' + storeDisplayArray[whatIndex][1].replace(/"/g, '') + ';;' + storeDisplayArray[whatIndex][2].replace(/"/g, '') + ';;' + storeDisplayArray[whatIndex][3] + ';;' + storeDisplayArray[whatIndex][4] + ';;' + storeDisplayArray[whatIndex][5] + ';;' + storeDisplayArray[whatIndex][27] + ';;' + storeProdSub.toString(',');
							$.post(controlURL + "tracktest.php", {
								CB: noCache,
								TLL: tlVal,
								A1: trackVal,
								UP1: "PANEL3",
								UC1: "PRINT",
								UCS1: "DETAIL",
								US1: "SUCCESS",
								USRC1: version,
								CLIENT: coreClient,
								ITER: iteration,
								DEVICE: deviceType,
								REF: referer,
								SESSID: daSESSID,
								LOCATION: '{"compiled_location":"' + document.getElementById('addressCompile').value.replace(/"/g, '') + '","latitude":"' + parseFloat(document.getElementById('LA').value).toFixed(5) + '","longitude":"' + parseFloat(document.getElementById('LO').value).toFixed(5) + '","city":"' + document.getElementById('revCodeCity').value.replace(/"/g, '') + '","state":"' + document.getElementById('revCodeState').value + '","zip":"' + document.getElementById('revCodeZip').value + '","country":"' + document.getElementById('revCodeCountry').value + '","us_code":"' + document.getElementById('revCodeUS').value + '"}',
								STORE: storeTrackJSON,
								STORECOUNT: "1",
								PLIST: compProdVal,
								PSET: prodSetVal,
								TRACK: "8",
								DUTV: dutv
								}, function(data){
									if(gLog==1){console.log("panel3Print - tracktest: " , JSON.parse(data));}
								}
							);
						},1000);
					}
					else if (trackVal == 2 && allOnOne == 0) {
						setTimeout(function(){
							var sendObj = setTrackObj();
							sendObj['TRK'] = 8;
							sendObj['RQF'] = "panel3Print";
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
							sendObj['STR'][0]['FED'] = storeDisplayArray[whatIndex][16];
							sendObj['STR'][0]['LAT'] = storeDisplayArray[whatIndex][6];
							sendObj['STR'][0]['LNG'] = storeDisplayArray[whatIndex][7];
							sendObj['STR'][0]['NAM'] = storeDisplayArray[whatIndex][0];
							sendObj['STR'][0]['ADD'] = storeDisplayArray[whatIndex][1];
							sendObj['STR'][0]['ADT'] = storeDisplayArray[whatIndex][2];
							sendObj['STR'][0]['CTY'] = storeDisplayArray[whatIndex][3];
							sendObj['STR'][0]['STA'] = storeDisplayArray[whatIndex][4];
							sendObj['STR'][0]['ZIP'] = storeDisplayArray[whatIndex][5];
							sendObj['STR'][0]['CNT'] = storeDisplayArray[whatIndex][27];
							sendObj['STR'][0]['PRD'] = storeProdSub.toString(',');
							sendObj['STC'] = 1;
							sendTrackObj(sendObj);
						},300);
					}
					document.getElementById('panel3PrintDiv').innerHTML = directPrintStartHTML + directPrintStepHTML + directPrintStopHTML;
					frameVar = document.getElementById("iFrameForms");
					frameVar.contentWindow.location.replace(controlURL + "panel3Print.php");
				}
			});
		}
		else {
			errorText("Please choose a directions origin.",7);
		}
	}
	else if (locServe == 1) {
		if (p3DirSequence.length) {
			panel3LocalDistanceNum = 0;
			panel3LocalDurationNum = 0;
			for (var i = 0; i < p3DirSequence.length; i++) {
				var localTempDist = parseFloat(p3DirSequence[i][2]);
				var localTempDur = parseFloat(p3DirSequence[i][3]);
				panel3LocalDistanceNum += localTempDist;
				panel3LocalDurationNum += localTempDur;
			}
			var localFloorMiles = panel3LocalDistanceNum.toFixed(2);
			var localBaseMinutes = Math.floor(panel3LocalDurationNum/60);
			var whatIndex = document.getElementById('storeID').value;
			var directPrintStartHTML = autotextIt(p3TemplateSet.panel3PrintStartDiv,"panel3PrintStart");
			var directPrintLocClientTagStart = directPrintStartHTML.indexOf("<!--CLIENT");
			if (directPrintLocClientTagStart != -1) {
				var directPrintLocClientTagEnd = directPrintStartHTML.indexOf(">",directPrintLocClientTagStart);
				var baseDirectPrintLocClientHTMLStart = directPrintStartHTML.substr(0,directPrintLocClientTagStart);
				var baseDirectPrintLocClientHTMLEnd = directPrintStartHTML.substr((directPrintLocClientTagEnd+1));
				directPrintStartHTML = baseDirectPrintLocClientHTMLStart + coreClient + baseDirectPrintLocClientHTMLEnd;
			}
			var directPrintLocNameTagStart = directPrintStartHTML.indexOf("<!--LOCNAME");
			if (directPrintLocNameTagStart != -1) {
				var directPrintLocNameTagEnd = directPrintStartHTML.indexOf(">",directPrintLocNameTagStart);
				var baseDirectPrintLocNameHTMLStart = directPrintStartHTML.substr(0,directPrintLocNameTagStart);
				var baseDirectPrintLocNameHTMLEnd = directPrintStartHTML.substr((directPrintLocNameTagEnd+1));
				directPrintStartHTML = baseDirectPrintLocNameHTMLStart + storeDisplayArray[whatIndex][0] + baseDirectPrintLocNameHTMLEnd;
			}
			var directPrintStartAddressTagStart = directPrintStartHTML.indexOf("<!--LOCADDRESS");
			if (directPrintStartAddressTagStart != -1) {
				var directPrintStartAddressTagEnd = directPrintStartHTML.indexOf(">",directPrintStartAddressTagStart);
				var baseDirectPrintStartAddressHTMLStart = directPrintStartHTML.substr(0,directPrintStartAddressTagStart);
				var baseDirectPrintStartAddressHTMLEnd = directPrintStartHTML.substr((directPrintStartAddressTagEnd+1));
				directPrintStartHTML = baseDirectPrintStartAddressHTMLStart + document.getElementById('localStartAdd').value + baseDirectPrintStartAddressHTMLEnd;
			}
			var directPrintLocStreetTagStart = directPrintStartHTML.indexOf("<!--LOCSTREET");
			if (directPrintLocStreetTagStart != -1) {
				var directPrintLocStreetTagEnd = directPrintStartHTML.indexOf(">",directPrintLocStreetTagStart);
				var baseDirectPrintLocStreetHTMLStart = directPrintStartHTML.substr(0,directPrintLocStreetTagStart);
				var baseDirectPrintLocStreetHTMLEnd = directPrintStartHTML.substr((directPrintLocStreetTagEnd+1));
				directPrintStartHTML = baseDirectPrintLocStreetHTMLStart + storeDisplayArray[whatIndex][1] + baseDirectPrintLocStreetHTMLEnd;
			}
			var directPrintLocTwoStreetTagStart = directPrintStartHTML.indexOf("<!--LOCTWOSTREET");
			if (directPrintLocTwoStreetTagStart != -1) {
				var directPrintLocTwoStreetTagEnd = directPrintStartHTML.indexOf(">",directPrintLocTwoStreetTagStart);
				var baseDirectPrintLocTwoStreetHTMLStart = directPrintStartHTML.substr(0,directPrintLocTwoStreetTagStart);
				var baseDirectPrintLocTwoStreetHTMLEnd = directPrintStartHTML.substr((directPrintLocTwoStreetTagEnd+1));
				directPrintStartHTML = baseDirectPrintLocTwoStreetHTMLStart + storeDisplayArray[whatIndex][2] + baseDirectPrintLocTwoStreetHTMLEnd;
			}
			var directPrintLocCityTagStart = directPrintStartHTML.indexOf("<!--LOCCITY");
			if (directPrintLocCityTagStart != -1) {
				var directPrintLocCityTagEnd = directPrintStartHTML.indexOf(">",directPrintLocCityTagStart);
				var baseDirectPrintLocCityHTMLStart = directPrintStartHTML.substr(0,directPrintLocCityTagStart);
				var baseDirectPrintLocCityHTMLEnd = directPrintStartHTML.substr((directPrintLocCityTagEnd+1));
				directPrintStartHTML = baseDirectPrintLocCityHTMLStart + storeDisplayArray[whatIndex][3] + baseDirectPrintLocCityHTMLEnd;
			}
			var directPrintLocStateTagStart = directPrintStartHTML.indexOf("<!--LOCSTATE");
			if (directPrintLocStateTagStart != -1) {
				var directPrintLocStateTagEnd = directPrintStartHTML.indexOf(">",directPrintLocStateTagStart);
				var baseDirectPrintLocStateHTMLStart = directPrintStartHTML.substr(0,directPrintLocStateTagStart);
				var baseDirectPrintLocStateHTMLEnd = directPrintStartHTML.substr((directPrintLocStateTagEnd+1));
				if (stateNames == 1) {
					var gottaState = 0;
					for (tsa=0;tsa<tblStateArray.length;tsa++) {
						if (tblStateArray[tsa][0] == storeDisplayArray[whatIndex][4]) {
							var stateOut = tblStateArray[tsa][1];
							gottaState = 1;
							break;
						}
					}
					if (gottaState == 0) {
						var stateOut = storeDisplayArray[whatIndex][4];
					}
				}
				else {
					var stateOut = storeDisplayArray[whatIndex][4];
				}
				directPrintStartHTML = baseDirectPrintLocStateHTMLStart + stateOut + baseDirectPrintLocStateHTMLEnd;
			}
			var directPrintLocZipTagStart = directPrintStartHTML.indexOf("<!--LOCZIP");
			if (directPrintLocZipTagStart != -1) {
				var directPrintLocZipTagEnd = directPrintStartHTML.indexOf(">",directPrintLocZipTagStart);
				var baseDirectPrintLocZipHTMLStart = directPrintStartHTML.substr(0,directPrintLocZipTagStart);
				var baseDirectPrintLocZipHTMLEnd = directPrintStartHTML.substr((directPrintLocZipTagEnd+1));
				directPrintStartHTML = baseDirectPrintLocZipHTMLStart + storeDisplayArray[whatIndex][5] + baseDirectPrintLocZipHTMLEnd;
			}
			var directPrintLocCountryTagStart = directPrintStartHTML.indexOf("<!--LOCCOUNTRY");
			if (directPrintLocCountryTagStart != -1) {
				var directPrintLocCountryTagEnd = directPrintStartHTML.indexOf(">",directPrintLocCountryTagStart);
				var baseDirectPrintLocCountryHTMLStart = directPrintStartHTML.substr(0,directPrintLocCountryTagStart);
				var baseDirectPrintLocCountryHTMLEnd = directPrintStartHTML.substr((directPrintLocCountryTagEnd+1));
				directPrintStartHTML = baseDirectPrintLocCountryHTMLStart + storeDisplayArray[whatIndex][27] + baseDirectPrintLocCountryHTMLEnd;
			}
			var directPrintPhoneTagStart = directPrintStartHTML.indexOf("<!--LOCPHONE");
			if (directPrintPhoneTagStart != -1 && storeDisplayArray[whatIndex][15]!="") {
				var directPrintPhoneTagEnd = directPrintStartHTML.indexOf(">",directPrintPhoneTagStart);
				var directPrintPhoneTagStrip = directPrintStartHTML.substring(directPrintPhoneTagStart,(directPrintPhoneTagEnd+1));
				var directPrintPhoneHTMLStart = directPrintStartHTML.substr(0,directPrintPhoneTagStart);
				var directPrintPhoneHTMLEnd = directPrintStartHTML.substr((directPrintPhoneTagEnd+1));
				var directPrintPhoneValueStart = directPrintPhoneTagStrip.indexOf(" FORMAT=");
				var directPrintPhoneValueEnd = directPrintPhoneTagStrip.indexOf("]");
				if (directPrintPhoneValueStart != -1) {
					var directPrintPhoneValueVarTest = directPrintPhoneTagStrip.substring((directPrintPhoneValueStart+9),(directPrintPhoneValueEnd));
					var phoneSplit=storeDisplayArray[whatIndex][15].split("");
					for (p=0;p<phoneSplit.length;p++) {
						var thisHash = directPrintPhoneValueVarTest.indexOf("#");
						if (thisHash != -1) {
							directPrintPhoneValueVarTest = directPrintPhoneValueVarTest.substring(0,(thisHash))+phoneSplit[p]+directPrintPhoneValueVarTest.substring((thisHash+1));
						}
					}
					var directPrintPhoneValueVar = directPrintPhoneValueVarTest;
				}
				else {
					var directPrintPhoneValueVar = storeDisplayArray[whatIndex][15];
				}
				var directPrintPhoneRawStart = directPrintPhoneTagStrip.indexOf(" RAW");
				if (directPrintPhoneRawStart != -1) {
					var directPrintPhoneValueVar = storeDisplayArray[whatIndex][26];
				}
				directPrintStartHTML = directPrintPhoneHTMLStart + directPrintPhoneValueVar + directPrintPhoneHTMLEnd;
			}
			var directPrintStartDistanceTagStart = directPrintStartHTML.indexOf("<!--LOCDISTANCE");
			if (directPrintStartDistanceTagStart != -1) {
				var directPrintStartDistanceTagEnd = directPrintStartHTML.indexOf(">",directPrintStartDistanceTagStart);
				var directPrintStartDistanceTagStrip = directPrintStartHTML.substring(directPrintStartDistanceTagStart,(directPrintStartDistanceTagEnd+1));
				var baseDirectPrintStartDistanceHTMLStart = directPrintStartHTML.substr(0,directPrintStartDistanceTagStart);
				var baseDirectPrintStartDistanceHTMLEnd = directPrintStartHTML.substr((directPrintStartDistanceTagEnd+1));
				var directPrintStartDistanceKMTest = directPrintStartHTML.indexOf(" KM");
				if (directPrintStartDistanceKMTest != -1 || forceKM == 1) {
					var baseMiles = parseFloat(localFloorMiles);
					var finalMiles = Math.round((baseMiles*1.60934)*100)/100;
					var finalFormat = "km";
				}
				else {
					var finalMiles = localFloorMiles;
					var finalFormat = "mi";
				}
				var directPrintStartDistanceBlankTest = directPrintStartHTML.indexOf(" BLANK");
				if (directPrintStartDistanceBlankTest != -1) {
					var finalFormat = "";
				}
				directPrintStartHTML = baseDirectPrintStartDistanceHTMLStart + finalMiles + " " + finalFormat + baseDirectPrintStartDistanceHTMLEnd;
			}
			var directPrintStepHTML = "";
			for (var i = 0; i < p3DirSequence.length; i++) {
				var directPrintStepHTMLTest = autotextIt(p3TemplateSet.panel3PrintStepDiv,"panel3PrintStep");
				var directPrintStepNumberTagStart = directPrintStepHTMLTest.indexOf("<!--STEPNUM");
				if (directPrintStepNumberTagStart != -1) {
					var directPrintStepNumberTagEnd = directPrintStepHTMLTest.indexOf(">",directPrintStepNumberTagStart);
					var baseDirectPrintStepNumberHTMLStart = directPrintStepHTMLTest.substr(0,directPrintStepNumberTagStart);
					var baseDirectPrintStepNumberHTMLEnd = directPrintStepHTMLTest.substr((directPrintStepNumberTagEnd+1));
					directPrintStepHTMLTest = baseDirectPrintStepNumberHTMLStart + p3DirSequence[i][0] + baseDirectPrintStepNumberHTMLEnd;
				}
				var directPrintStepPrintTagStart = directPrintStepHTMLTest.indexOf("<!--STEPTEXT");
				if (directPrintStepPrintTagStart != -1) {
					var directPrintStepPrintTagEnd = directPrintStepHTMLTest.indexOf(">",directPrintStepPrintTagStart);
					var baseDirectPrintStepPrintHTMLStart = directPrintStepHTMLTest.substr(0,directPrintStepPrintTagStart);
					var baseDirectPrintStepPrintHTMLEnd = directPrintStepHTMLTest.substr((directPrintStepPrintTagEnd+1));
					directPrintStepHTMLTest = baseDirectPrintStepPrintHTMLStart + p3DirSequence[i][1] + baseDirectPrintStepPrintHTMLEnd;
				}
				var directPrintStepDistanceTagStart = directPrintStepHTMLTest.indexOf("<!--STEPDISTANCE");
				if (directPrintStepDistanceTagStart != -1) {
					var directPrintStepDistanceTagEnd = directPrintStepHTMLTest.indexOf(">",directPrintStepDistanceTagStart);
					var baseDirectPrintStepDistanceHTMLStart = directPrintStepHTMLTest.substr(0,directPrintStepDistanceTagStart);
					var baseDirectPrintStepDistanceHTMLEnd = directPrintStepHTMLTest.substr((directPrintStepDistanceTagEnd+1));
					directPrintStepHTMLTest = baseDirectPrintStepDistanceHTMLStart + p3DirSequence[i][2] + baseDirectPrintStepDistanceHTMLEnd;
				}
				directPrintStepHTML += directPrintStepHTMLTest;
			}
			var directPrintStopHTML = autotextIt(p3TemplateSet.panel3PrintStopDiv,"panel3PrintStop");
			var directPrintStopAddressTagStart = directPrintStopHTML.indexOf("<!--LOCADDRESS");
			if (directPrintStopAddressTagStart != -1) {
				var directPrintStopAddressTagEnd = directPrintStopHTML.indexOf(">",directPrintStopAddressTagStart);
				var baseDirectPrintStopAddressHTMLStart = directPrintStopHTML.substr(0,directPrintStopAddressTagStart);
				var baseDirectPrintStopAddressHTMLEnd = directPrintStopHTML.substr((directPrintStopAddressTagEnd+1));
				directPrintStopHTML = baseDirectPrintStopAddressHTMLStart + document.getElementById('localEndAdd').value + baseDirectPrintStopAddressHTMLEnd;
			}
			var directPrintStopDistanceTagStart = directPrintStopHTML.indexOf("<!--LOCDISTANCE");
			if (directPrintStopDistanceTagStart != -1) {
				var directPrintStopDistanceTagEnd = directPrintStopHTML.indexOf(">",directPrintStopDistanceTagStart);
				var directPrintStopDistanceTagStrip = directPrintStopHTML.substring(directPrintStopDistanceTagStart,(directPrintStopDistanceTagEnd+1));
				var baseDirectPrintStopDistanceHTMLStart = directPrintStopHTML.substr(0,directPrintStopDistanceTagStart);
				var baseDirectPrintStopDistanceHTMLEnd = directPrintStopHTML.substr((directPrintStopDistanceTagEnd+1));
				var directPrintStopDistanceKMTest = directPrintStopHTML.indexOf(" KM");
				if (directPrintStopDistanceKMTest != -1 || forceKM == 1) {
					var baseMiles = parseFloat(localFloorMiles);
					var finalMiles = Math.round((baseMiles*1.60934)*100)/100;
					var finalFormat = "km";
				}
				else {
					var finalMiles = localFloorMiles;
					var finalFormat = "mi";
				}
				var directPrintStopDistanceBlankTest = directPrintStopHTML.indexOf(" BLANK");
				if (directPrintStopDistanceBlankTest != -1) {
					var finalFormat = "";
				}
				directPrintStopHTML = baseDirectPrintStopDistanceHTMLStart + finalMiles + " " + finalFormat + baseDirectPrintStopDistanceHTMLEnd;
			}
			if (isIE) {
				directPrintStartHTML = directPrintStartHTML.replace(/\/\*/g,"");
				directPrintStepHTML = directPrintStepHTML.replace(/\/\*/g,"");
				directPrintStopHTML = directPrintStopHTML.replace(/\/\*/g,"");
			}
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
			var storeProdSub = [];
			for (p=0; p<prodWriteArray.length; p++) {
				storeProdSub.push(prodWriteArray[p][0]);
			}
			if (trackVal == 1 && allOnOne == 0) {
				setTimeout(function(){
					var storeTrackJSON = '1;;' + storeDisplayArray[whatIndex][16] + ';;' + storeDisplayArray[whatIndex][6] + ';;' + storeDisplayArray[whatIndex][7] + ';;' + storeDisplayArray[whatIndex][0].replace(/"/g, '') + ';;' + storeDisplayArray[whatIndex][1].replace(/"/g, '') + ';;' + storeDisplayArray[whatIndex][2].replace(/"/g, '') + ';;' + storeDisplayArray[whatIndex][3] + ';;' + storeDisplayArray[whatIndex][4] + ';;' + storeDisplayArray[whatIndex][5] + ';;' + storeDisplayArray[whatIndex][27] + ';;' + storeProdSub.toString(',');
					$.post(controlURL + "tracktest.php", {
						CB: noCache,
						TLL: tlVal,
						A1: trackVal,
						UP1: "PANEL3",
						UC1: "PRINT",
						UCS1: "DETAIL",
						US1: "SUCCESS",
						USRC1: version,
						CLIENT: coreClient,
						ITER: iteration,
						DEVICE: deviceType,
						REF: referer,
						SESSID: daSESSID,
						LOCATION: '{"compiled_location":"' + document.getElementById('addressCompile').value.replace(/"/g, '') + '","latitude":"' + parseFloat(document.getElementById('LA').value).toFixed(5) + '","longitude":"' + parseFloat(document.getElementById('LO').value).toFixed(5) + '","city":"' + document.getElementById('revCodeCity').value.replace(/"/g, '') + '","state":"' + document.getElementById('revCodeState').value + '","zip":"' + document.getElementById('revCodeZip').value + '","country":"' + document.getElementById('revCodeCountry').value + '","us_code":"' + document.getElementById('revCodeUS').value + '"}',
						STORE: storeTrackJSON,
						STORECOUNT: "1",
						PLIST: compProdVal,
						PSET: prodSetVal,
						TRACK: "8",
						DUTV: dutv
						}, function(data){
							if(gLog==1){console.log("panel3Print - tracktest: " , JSON.parse(data));}
						}
					);
				},1000);
			}
			else if (trackVal == 2 && allOnOne == 0) {
				setTimeout(function(){
					var sendObj = setTrackObj();
					sendObj['TRK'] = 8;
					sendObj['RQF'] = "panel3Print";
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
					sendObj['STR'][0]['FED'] = storeDisplayArray[whatIndex][16];
					sendObj['STR'][0]['LAT'] = storeDisplayArray[whatIndex][6];
					sendObj['STR'][0]['LNG'] = storeDisplayArray[whatIndex][7];
					sendObj['STR'][0]['NAM'] = storeDisplayArray[whatIndex][0];
					sendObj['STR'][0]['ADD'] = storeDisplayArray[whatIndex][1];
					sendObj['STR'][0]['ADT'] = storeDisplayArray[whatIndex][2];
					sendObj['STR'][0]['CTY'] = storeDisplayArray[whatIndex][3];
					sendObj['STR'][0]['STA'] = storeDisplayArray[whatIndex][4];
					sendObj['STR'][0]['ZIP'] = storeDisplayArray[whatIndex][5];
					sendObj['STR'][0]['CNT'] = storeDisplayArray[whatIndex][27];
					sendObj['STR'][0]['PRD'] = storeProdSub.toString(',');
					sendObj['STC'] = 1;
					sendTrackObj(sendObj);
				},300);
			}
			document.getElementById('panel3PrintDiv').innerHTML = directPrintStartHTML + directPrintStepHTML + directPrintStopHTML;
			frameVar = document.getElementById("iFrameForms");
			frameVar.contentWindow.location.replace(controlURL + "panel3Print.php");
		}
		else {
			errorText("Please choose a directions origin.",7);
		}
	}
}
function panel3PrintWin() {
	window.frames["iFrameForms"].focus();
	window.frames["iFrameForms"].print();
}
function panel3GoogleLink(sID) {
	var startLat = document.getElementById('printSLA').value;
	var startLon = document.getElementById('printSLO').value;
	var endLat = document.getElementById('printELA').value;
	var endLon = document.getElementById('printELO').value;
	if (gtm != 0) {
		GTMit("STOREDIR", "click", "EXT|" + storeDisplayArray[sID][0] + "|" + storeDisplayArray[sID][1] + "|" + storeDisplayArray[sID][3] + "|" + storeDisplayArray[sID][4] + "|" + storeDisplayArray[sID][5] + "|" + storeDisplayArray[sID][6] + "|" + storeDisplayArray[sID][7] + "|" + storeDisplayArray[sID][27] + "|0",false);
	}
	window.open("http://maps.google.com/maps?saddr=" + startLat + "," + startLon + "&daddr=" + endLat + "," + endLon);
}
function panel3ButtonHover(buttonID,buttonClass,hoverVar) {
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
function panel3Prev() {
	if (locServe == 1) {
		p3DirSequence.length = 0;
	}
	if (document.getElementById("revDirCompile")) {
		document.getElementById('revDirCompile').value = "";
	}
	var currPage = eval(document.getElementById('storeID').value);
	if (currPage != 0) {
		$('#panel3PrevButton').removeClass('panel_3_prev_button_hover');
		$('#panel3PrevButton').addClass('panel_3_prev_button_on');
		setTimeout(function() {
			$('#panel3PrevButton').removeClass('panel_3_prev_button_on');
			$('#panel3PrevButton').addClass('panel_3_prev_button_hover');
		},175);
		currPage--;
		if (document.getElementById('panel2MultiMap')) {
			if (hidePanels == 1) {
			}
			else {
				if (locServe == 0) {
					google.maps.event.trigger(panel2MarkersArray[currPage], "click");
				}
				else if (locServe == 1) {
					p2ShowInfowindow(currPage);
				}
			}
		}
		document.getElementById('storeID').value = currPage;
		document.getElementById('storeTYPE').value = storeDisplayArray[currPage][16];
		document.getElementById('storeSQL').value = storeDisplayArray[currPage][13];
		document.getElementById('printSLA').value = document.getElementById('LA').value;
		document.getElementById('printSLO').value = document.getElementById('LO').value;
		document.getElementById('printELA').value = storeDisplayArray[currPage][6];
		document.getElementById('printELO').value = storeDisplayArray[currPage][7];
		document.getElementById('TTPROD').value = storeDisplayArray[currPage][9];
		document.getElementById('VIPPROD').value = storeDisplayArray[currPage][9];
		document.getElementById('PBCPROD').value = storeDisplayArray[currPage][9];
		document.getElementById('PBCCBK').value = storeDisplayArray[currPage][29];
		panel3panel3Connect();
	}
}
function panel3DistanceUpdate(setVal) {
	distanceChangedVal = 1;
	if (setVal) {
		document.getElementById('panel3DistanceField').value = setVal;
		document.getElementById('distance').value = setVal;
		document.getElementById('panel3DistanceDivNum').innerHTML = setVal;
		$(".panel_close_me").hide();
		document.getElementById('panel3DistanceDivNum').innerHTML = setVal;
	}
	else {
		document.getElementById('distance').value = document.getElementById('panel3DistanceField').value;
	}
}
function panel3CatMenuSelect(setVal) {
	catMenuChangedVal = 1
	document.getElementById('panel3CatMenuHolder').value = setVal;
	for (c=0; c<catArray.length; c++) {
		if (catArray[c][0] == setVal) {
			document.getElementById('panel3CatMenuDisplay').innerHTML = catArray[c][1];
			break;
		}
	}
	$(".panel_close_me").hide();
	if (document.getElementById('panel3ProdMenuHolder')) {
		document.getElementById('panel3ProdMenuDisplay').innerHTML = panel3ProdMenuText;
		document.getElementById('panel3ProdMenuShell').style.display = "block";
		document.getElementById('panel3ProdMenuContent').innerHTML = "";
		var thisWriteVal = "";
		if (panel3ProdMenuAllVar != "") {
			thisWriteVal += "<div class='panel_3_prod_menu_div_filter_item_999999 panel_3_prod_menu_div_filter_item panel_3_prod_menu_div_filter_item_off'";
			if (hoverState==1) {
				thisWriteVal += " onmouseover='genericButtonOver(\"panel_3_prod_menu_div_filter_item_999999\",\"panel_3_prod_menu_div_filter_item\");' onfocus='genericButtonOver(\"panel_3_prod_menu_div_filter_item_999999\",\"panel_3_prod_menu_div_filter_item\");' onmouseout='genericButtonOut(\"panel_3_prod_menu_div_filter_item_999999\",\"panel_3_prod_menu_div_filter_item\");' onblur='genericButtonOut(\"panel_3_prod_menu_div_filter_item_999999\",\"panel_3_prod_menu_div_filter_item\");'";
			}
			thisWriteVal += " onclick='panel3ProdMenuSelect(999999," + panel3ProdGoValueVal + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3ProdMenuSelect(999999," + panel3ProdGoValueVal + ");}' tabindex='0' title=\"" + panel3ProdMenuAllVar + "\">" + panel3ProdMenuAllVar + "<\/div>";
		}
		for (p=0; p<prodDisplayArray.length; p++) {
			if (prodDisplayArray[p][8] == setVal) {
				thisWriteVal += "<div class='panel_3_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + " panel_3_prod_menu_div_filter_item panel_3_prod_menu_div_filter_item_off'";
				if (hoverState==1) {
					thisWriteVal += " onmouseover='genericButtonOver(\"panel_3_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_3_prod_menu_div_filter_item\");' onfocus='genericButtonOver(\"panel_3_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_3_prod_menu_div_filter_item\");' onmouseout='genericButtonOut(\"panel_3_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_3_prod_menu_div_filter_item\");' onblur='genericButtonOut(\"panel_3_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_3_prod_menu_div_filter_item\");'";
				}
				thisWriteVal += " onclick='panel3ProdMenuSelect(" + prodDisplayArray[p][0] + "," + panel3ProdGoValueVal + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3ProdMenuSelect(" + prodDisplayArray[p][0] + "," + panel3ProdGoValueVal + ");}' tabindex='0' title=\"" + prodDisplayArray[p][2] + "\">" + prodDisplayArray[p][2] + "<\/div>";
			}
		}
		document.getElementById('panel3ProdMenuContent').innerHTML = thisWriteVal;
	}
}
function panel3SetCatSelect() {
	selIndex = document.getElementById('panel3CatSelect').selectedIndex;
	setVal = document.getElementById('panel3CatSelect').options[selIndex].value;
	document.getElementById('panel3CatMenuHolder').value = setVal;
	if (document.getElementById('panel3ProdSelect') && setVal != 0) {
		document.getElementById('panel3ProdMenuShell').style.display = "block";
		document.panel3Form.panel3ProdSelect.options.length = 0;
		document.panel3Form.panel3ProdSelect.options[0] = new Option(panel3ProdMenuText, 0);
		var optionIndex = 1;
		if (panel3ProdMenuAllVar != "") {
			document.panel3Form.panel3ProdSelect.options[optionIndex] = new Option(panel3ProdMenuAllVar, 999999);
			optionIndex++;
		}
		for (p=0; p<prodDisplayArray.length; p++) {
			if (prodDisplayArray[p][8] == setVal) {
				document.panel3Form.panel3ProdSelect.options[optionIndex] = new Option(prodDisplayArray[p][2], prodDisplayArray[p][0]);
				optionIndex++;
			}
		}
	}
	else if (document.getElementById('panel3ProdSelect') && setVal == 0) {
		document.getElementById('panel3ProdMenuShell').style.display = "none";
		document.panel3Form.panel3ProdSelect.options.length = 0;
	}
	if (document.getElementById('panel3ProdSubmitButton')) {
		document.getElementById('panel3ProdSubmitButton').style.display = "none";
	}
}
function panel3ProdMenuSelect(setVal, goVal) {
	prodMenuChangedVal = 1;
	document.getElementById('panel3ProdMenuHolder').value = setVal;
	var foundAddress = 0;
	if (document.getElementById('street').value != "" && document.getElementById('street').value != p3AddFieldValueVar) {
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
		document.getElementById('panel3ProdMenuDisplay').innerHTML = panel3ProdMenuAllVar;
		for (p=0; p<prodDisplayArray.length; p++) {
			if (prodDisplayArray[p][8] == document.getElementById('panel3CatMenuHolder').value) {
				prodDisplayArray[p][9] = 1;
				window[('panel3ProductNameVar'+prodDisplayArray[p][0])] = 1;
				thisProdArr.push(prodDisplayArray[p][1]);
			}
			else {
				prodDisplayArray[p][9] = 0;
				window[('panel3ProductNameVar'+prodDisplayArray[p][0])] = 0;
			}
		}
		document.getElementById('PROD').value = thisProdArr.toString();
	}
	else {
		for (p=0; p<prodDisplayArray.length; p++) {
			if (prodDisplayArray[p][0] == setVal) {
				document.getElementById('panel3ProdMenuDisplay').innerHTML = prodDisplayArray[p][2];
				document.getElementById('PROD').value = prodDisplayArray[p][1];
				prodDisplayArray[p][9] = 1;
				window[('panel3ProductNameVar'+prodDisplayArray[p][0])] = 1;
			}
			else {
				prodDisplayArray[p][9] = 0;
				window[('panel3ProductNameVar'+prodDisplayArray[p][0])] = 0;
			}
		}
	}
	$(".panel_close_me").hide();
	if (goVal == 1) {
		if (foundAddress == 1) {
			panel3SubmitForm();
		}
	}
	else {
		if (document.getElementById('panel3ProdSubmitButton')) {
			if (setVal != 0) {
				document.getElementById('panel3ProdSubmitButton').style.display = "block";
			}
			else {
				document.getElementById('panel3ProdSubmitButton').style.display = "none";
			}
		}
	}
}
function panel3SetProdSelect(goVal) {
	selIndex = document.getElementById('panel3ProdSelect').selectedIndex;
	setVal = document.getElementById('panel3ProdSelect').options[selIndex].value;
	document.getElementById('panel3ProdMenuHolder').value = setVal;
	var foundAddress = 0;
	if (document.getElementById('street').value != "" && document.getElementById('street').value != p3AddFieldValueVar) {
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
			if (prodDisplayArray[p][8] == document.getElementById('panel3CatMenuHolder').value) {
				prodDisplayArray[p][9] = 1;
				window[('panel3ProductNameVar'+prodDisplayArray[p][0])] = 1;
				thisProdArr.push(prodDisplayArray[p][1]);
			}
			else {
				prodDisplayArray[p][9] = 0;
				window[('panel3ProductNameVar'+prodDisplayArray[p][0])] = 0;
			}
		}
		document.getElementById('PROD').value = thisProdArr.toString();
	}
	else {
		for (p=0; p<prodDisplayArray.length; p++) {
			if (prodDisplayArray[p][0] == setVal) {
				document.getElementById('PROD').value = prodDisplayArray[p][1];
				prodDisplayArray[p][9] = 1;
				window[('panel3ProductNameVar'+prodDisplayArray[p][0])] = 1;
			}
			else {
				prodDisplayArray[p][9] = 0;
				window[('panel3ProductNameVar'+prodDisplayArray[p][0])] = 0;
			}
		}
	}
	if (goVal == 1) {
		if (foundAddress == 1) {
			panel3SubmitForm();
		}
	}
	else {
		if (document.getElementById('panel3ProdSubmitButton')) {
			if (setVal != 0) {
				document.getElementById('panel3ProdSubmitButton').style.display = "block";
			}
			else {
				document.getElementById('panel3ProdSubmitButton').style.display = "none";
			}
		}
	}
}
function panel3Next() {
	if (locServe == 1) {
		p3DirSequence.length = 0;
	}
	if (document.getElementById("revDirCompile")) {
		document.getElementById('revDirCompile').value = "";
	}
	var currPage = eval(document.getElementById('storeID').value);
	if (currPage < (maxStoreNum - 1)) {
		$('#panel3NextButton').removeClass('panel_3_next_button_hover');
		$('#panel3NextButton').addClass('panel_3_next_button_on');
		setTimeout(function() {
			$('#panel3NextButton').removeClass('panel_3_next_button_on');
			$('#panel3NextButton').addClass('panel_3_prev_button_hover');
		},175);
		currPage++;
		if (document.getElementById('panel2MultiMap')) {
			if (hidePanels == 1) {
			}
			else {
				if (locServe == 0) {
					google.maps.event.trigger(panel2MarkersArray[currPage], "click");
				}
				else if (locServe == 1) {
					p2ShowInfowindow(currPage);
				}
			}
		}
		document.getElementById('storeID').value = currPage;
		document.getElementById('storeTYPE').value = storeDisplayArray[currPage][16];
		document.getElementById('storeSQL').value = storeDisplayArray[currPage][13];
		document.getElementById('printSLA').value = document.getElementById('LA').value;
		document.getElementById('printSLO').value = document.getElementById('LO').value;
		document.getElementById('printELA').value = storeDisplayArray[currPage][6];
		document.getElementById('printELO').value = storeDisplayArray[currPage][7];
		document.getElementById('TTPROD').value = storeDisplayArray[currPage][9];
		document.getElementById('VIPPROD').value = storeDisplayArray[currPage][9];
		document.getElementById('PBCPROD').value = storeDisplayArray[currPage][9];
		document.getElementById('PBCCBK').value = storeDisplayArray[currPage][29];
		panel3panel3Connect();
	}
}
function panel3Hit(p3ct,p3local,p3spins,p3iri,p3wfm,p3niel,p3pbc,p3tt) {
	if (trackVal == 1 && allOnOne == 0) {
		$.post(controlURL + "tracktest.php", {
			CB: noCache,
			TLL: tlVal,
			A1: trackVal,
			UP1: "PANEL2",
			UC1: "HIT",
			UCS1: "",
			US1: "SUCCESS",
			USRC1: version,
			CLIENT: coreClient,
			ITER: iteration,
			DEVICE: deviceType,
			REF: referer,
			SESSID: daSESSID,
			PCT: p3ct,
			PCLOCAL: p3local,
			PCSPINS: p3spins,
			PCIRI: p3iri,
			PCWFM: p3wfm,
			PCNIEL: p3niel,
			PCPBC: p3pbc,
			PCTT: p3tt,
			TRACK: "1",
			DUTV: dutv
			}, function(data){
				if(gLog==1){console.log("panel3Hit - tracktest: " , JSON.parse(data));}
			}
		);
	}
	else if (trackVal == 2 && allOnOne == 0) {
		setTimeout(function(){
			var sendObj = setTrackObj();
			sendObj['TRK'] = 1;
			sendObj['RQF'] = "panel3Hit";
			sendObj['PCT'] = p3ct;
			sendObj['PCL'] = p3local;
			sendObj['PCS'] = p3spins;
			sendObj['PCI'] = p3iri;
			sendObj['PCW'] = p3wfm;
			sendObj['PCN'] = p3niel;
			sendObj['PCP'] = p3pbc;
			sendTrackObj(sendObj);
		},300);
	}
}
function panel3CopyDirectAddress(storeID,whatElm,baseText,altText) {
	var writeVal = "";
	var gotTitle = "";
	for (x=0; x<storeDisplayArray.length; x++) {
		if (storeDisplayArray[x][13] == storeID) {
			if (storeDisplayArray[x][15] != "") {
				var phoneFormat = storeDisplayArray[x][15].substring(0,3)+"."+storeDisplayArray[x][15].substring(3,6)+"."+storeDisplayArray[x][15].substring(6,10) + "<br>";
			}
			else {
				var phoneFormat = "";
			}
			writeVal += "<br>" + storeDisplayArray[x][0] + "<br>" + storeDisplayArray[x][1] + "<br>" + storeDisplayArray[x][3] + ", " + storeDisplayArray[x][4] + " " + storeDisplayArray[x][5] + "<br>" + phoneFormat + "<br>";
			gotTitle = storeDisplayArray[x][0];
			var thisProdArray = storeDisplayArray[x][9].split(",");
			for (s=0; s<thisProdArray.length; s++) {
				for (p=0; p<prodDisplayArray.length; p++) {
					if (prodDisplayArray[p][0] == thisProdArray[s]) {
						writeVal += " - " + prodDisplayArray[p][2] + "<br>";
						break;
					}
				}
			}
			break;
		}
	}
	copyIt(writeVal,whatElm,baseText,altText,gotTitle);
}
scriptLoad++;
function panel2Load(sourcePanel,allProd) {
	if(gLog==1){console.log("panel2Load - Start");}
	if(gLog==1){console.log("panel2Load - prodCartArray.length = ",prodCartArray.length);}
	isItAutoMM = 1;
	panel2ListIncr = 0;
	panel2PinIncr = 0;
	panel3storeNow = 0;
	if (p2LoadPSwitch == 1 && prodURLCartLoad == 0 && prodCartArray.length == 0) {
		var testDaProd = document.getElementById('PROD').value;
		if(gLog==1){console.log("panel2Load - testDaProd: " + testDaProd);}
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
		if(gLog==1){console.log("panel2Load - prodCartArray: " + prodCartArray.toString(","));}
	}
	prodURLCartLoad++;
	panel2OnRetState = onretStyle;
	//var thisDealOBJ = JSON.parse(dealOBJ);
	var thisDealOBJ = dealOBJ;
	if(gLog==1){console.log("dealOBJ - " , thisDealOBJ);}
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
	if(gLog==1){console.log("panel2Load scFilterArray: " ,scFilterArray);}
	if(gLog==1){console.log("panel2Load prodDisplayArray PRE: " ,document.getElementById('PROD').value,prodDisplayArray);}
	var tempProdSplit = document.getElementById('PROD').value.split(",");
	for (p=0;p<prodDisplayArray.length;p++) {
		var prodCheckEnforceSet = 0;
		for (s=0;s<tempProdSplit.length;s++) {
			if (tempProdSplit[s] == prodDisplayArray[p][1]) {
				prodDisplayArray[p][9] = 1;
				window["panel1ProductNameVar" + prodDisplayArray[p][0]] = 1;
				prodCheckEnforceSet = 1;
				break;
			}
		}
		if (prodCheckEnforceSet == 0) {
			prodDisplayArray[p][9] = 0;
			window["panel1ProductNameVar" + prodDisplayArray[p][0]] = 0;
		}
	}
	if(gLog==1){console.log("panel2Load prodDisplayArray POST: " ,prodDisplayArray);}
	if (allProductCall==1) {
		if (allProd == 1) {
			prodString = prodSelString;
		}
		else {
			prodString = document.getElementById('PROD').value;
		}
	}
	else {
		prodString = document.getElementById('PROD').value;
	}
	prodCheckAgainArr = prodString.split(",");
	var newIncr = 0;
	if(storeArray.length) {
		if (sortNum == 1) {
			sortCol(storeArray,0);
		}
		else {
			sortCol(storeArray,10);
		}
		if(gLog==1){console.log("panel2Load storeArray.length = " + storeArray.length);}
		if(gLog==1){console.log("panel2Load maxStoreNum = " + maxStoreNum);}
		for (s=0;s<storeArray.length;s++) {
			if (eval(storeArray[s][8]) <= distanceNum) {
				if(gLog==1){console.log("panel2Load (" + eval(storeArray[s][8]) + " <= " + distanceNum + ") && (id == "+storeArray[s][13]+")");}
				if (document.getElementById('SCFILTER').value != "") {
					var foundAFilteredStore = 0;
					var storeCatArrBase = storeArray[s][14].split(",");
					if(gLog==1){console.log("panel2Load SCFILTER - " + document.getElementById('SCFILTER').value + " / " , storeCatArrBase);}
					for (sc=0;sc<scFilterArray.length;sc++) {
						var breakIt = 0;
						for (sb=0;sb<storeCatArrBase.length;sb++) {
							if (scFilterArray[sc] == storeCatArrBase[sb]) {
								if (onretPar == 1) {
									var isUPCFilter = 0;
								}
								else {
									var isUPCFilter = 1;
								}
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
												if(gLog==1){console.log("panel2Load upcFilterArr Backfill - ", upcFilterArr[0]);}
												break;
											}
										}
									}
									isUPCFilter = 1;
								}
								if (isUPCFilter == 1 || (onretPar == 1 && storeArray[s][16] == 1) || pariCol == 1) {
									if (onretPar == 1 && storeArray[s][16] == 1) {if(gLog==1){console.log("panel2Load IRI Bypass");}}
									if(gLog==1){console.log("panel2Load SCFILTER INCLUDE - " + storeArray[s][8] + " / " + distanceNum);}
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
					if (onretPar == 1) {
						var isUPCFilter = 0;
					}
					else {
						var isUPCFilter = 1;
					}
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
									if(gLog==1){console.log("panel2Load upcFilterArr Backfill - ", upcFilterArr[0]);}
									break;
								}
							}
						}
						isUPCFilter = 1;
					}
					if (isUPCFilter == 1 || (onretPar == 1 && storeArray[s][16] == 1) || pariCol == 1) {
						if (onretPar == 1 && storeArray[s][16] == 1) {if(gLog==1){console.log("panel2Load IRI Bypass");}}
						if(gLog==1){console.log("panel2Load distanceNum INCLUDE - " + storeArray[s][8] + " / " + distanceNum);}
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
	if (gtm != 0) {
		if (storeDisplayArray.length) {
			if (storeDisplayArray.length > maxStoreNum) {
				var dispRes = maxStoreNum;
			}
			else {
				var dispRes = storeDisplayArray.length;
			}
			var nearDist = storeDisplayArray[0][8];
			var farDist = storeDisplayArray[dispRes-1][8];
			if (haltTrack == 0) {
				GTMit("STORELST", "response", document.getElementById('LA').value + "|" + document.getElementById('LO').value + "|" + dispRes + "|" + nearDist + "|" + farDist,false);
			}
			else {
				haltTrack = 0;
			}
		}
		else {
			if (haltTrack == 0) {
				GTMit("STORELST", "response", document.getElementById('LA').value + "|" + document.getElementById('LO').value + "|0|0|0",false);
			}
			else {
				haltTrack = 0;
			}
		}
	}
	var ecParity = 0;
	if (onretPar == 1) {
		if(gLog==1){console.log("panel2Load onretPar check");}
		for (x=0; x<onretClientArray.length;x++) {
			if (onretClientArray[x][8] == 1) {
				if(gLog==1){console.log("onretPar - onretClientArray[x][8] == 1 " ,onretClientArray[x][1]);}
				for (tp=0; tp<prodDisplayArray.length; tp++) {
					if (prodDisplayArray[tp][9] == 1) {
						if(gLog==1){console.log("onretPar - prodDisplayArray[tp][9] == 1" ,prodDisplayArray[tp][1]);}
						for (orp=0; orp<onretProdArray.length; orp++) {
							if (onretProdArray[orp][2] == prodDisplayArray[tp][0]) {
								if(gLog==1){console.log("onretPar - onretProdArray[orp][2] == prodDisplayArray[tp][0]" ,prodDisplayArray[tp][1]);}
								if (pariCol == 1) {
									ecParity = 1;
									break;
								}
								else {
									if (upcFilterArr.length) {
										if (upcFilterArr[0][0] == prodDisplayArray[tp][0]) {
											ecParity = 1;
											if(gLog==1){console.log("panel2Load ecParity - " ,prodDisplayArray[tp][0]);}
											break;
										}
									}
									else {
										if (onretPar == 1) {
											if(gLog==1){console.log("panel2Load upcFilterArr Backfill - ", upcFilterArr[0]);}
											upcFilterArr[0] = prodDisplayArray[tp];
										}
										ecParity = 1;
										break;
									}
								}
							}
						}
					}
					if (ecParity == 1) {
						break;
					}
				}
			}
			else if (onretClientArray[x][8] == 2) {
				for (y=0; y<onretZipArray.length; y++) {
					if (onretZipArray[y][2] == document.getElementById('revCodeZip').value && onretZipArray[y][1] == onretClientArray[x][1]) {
						for (tp=0; tp<prodDisplayArray.length; tp++) {
							if (prodDisplayArray[tp][9] == 1) {
								for (orp=0; orp<onretProdArray.length; orp++) {
									if (onretProdArray[orp][2] == prodDisplayArray[tp][0]) {
										if (pariCol == 1) {
											ecParity = 1;
											break;
										}
										else {
											if (upcFilterArr.length) {
												if (upcFilterArr[0][0] == prodDisplayArray[tp][0]) {
													ecParity = 1;
													if(gLog==1){console.log("panel2Load ecParity - " ,prodDisplayArray[tp][0]);}
													break;
												}
											}
											else {
												if (onretPar == 1) {
													if(gLog==1){console.log("panel2Load upcFilterArr Backfill - ", upcFilterArr[0]);}
													upcFilterArr[0] = prodDisplayArray[tp];
												}
												ecParity = 1;
												break;
											}
										}
									}
								}
							}
							if (ecParity == 1) {
								break;
							}
						}
					}
					if (ecParity == 1) {
						break;
					}
				}
			}
			if (ecParity == 1) {
				break;
			}
		}
	}
	if (onretPar != 0) {
		if (ecPos != 0 && bmPos != 0) {
			if(gLog==1){console.log("panel2Load checking EC/BM Status");}
			if (ecParity == 1 && storeDisplayArray.length == 0 && bmBypass == 0) {
				if(gLog==1){console.log("panel2Load EC = 1 / BM = 0");}
				ecPos = 1;
				bmPos = 0;
				tabSelect = 0;
				ecNoRes = 0;
				bmNoRes = 1;
				ecbmNoRes = 0;
			}
			else if (ecParity == 0 && storeDisplayArray.length) {
				if(gLog==1){console.log("panel2Load EC = 0 / BM = 1");}
				ecPos = 0;
				bmPos = 1;
				tabSelect = 0;
				ecNoRes = 1;
				bmNoRes = 0;
				ecbmNoRes = 0;
			}
			else if (ecParity == 0 && storeDisplayArray.length == 0 && bmBypass == 0) {
				if(gLog==1){console.log("panel2Load EC = 0 / BM = 0");}
				ecPos = 0;
				bmPos = 0;
				tabSelect = 0;
				ecNoRes = 0;
				bmNoRes = 0;
				ecbmNoRes = 1;
			}
			else if (ecParity == 1 && storeDisplayArray.length  && bmBypass == 0) {
				if(gLog==1){console.log("panel2Load EC = 1 / BM = 1");}
				ecPos = ecPosOrig;
				bmPos = bmPosOrig;
				tabSelect = tabSelectOrig;
				bmoRes = 0;
				ecNoRes = 0;
				ecbmNoRes = 0;
				if (tabSelect == 1 && winWidth <= globalRespWidth) {tabSelect=2;}
			}
		}
		else {
			ecPos = ecPosOrig;
			bmPos = bmPosOrig;
			tabSelect = tabSelectOrig;
			bmNoRes = 0;
			ecNoRes = 0;
			ecbmNoRes = 0;
			if (tabSelect == 1 && winWidth <= globalRespWidth) {tabSelect=2;}
		}
	}
	else {
		ecPos = ecPosOrig;
		bmPos = bmPosOrig;
		tabSelect = tabSelectOrig;
		bmNoRes = 0;
		ecNoRes = 0;
		ecbmNoRes = 0;
		if (tabSelect == 1 && winWidth <= globalRespWidth) {tabSelect=2;}
	}
	if ((storeDisplayArray.length || storeProdHoldArray.length || ecParity == 1) || onretPar == 1) {
		if(gLog==1){console.log("panel2Load storeDisplayArray / maxStoreNum - " ,storeDisplayArray.length,maxStoreNum);}
		if (storeDisplayArray.length > maxStoreNum) {
			storeDisplayArray.length = maxStoreNum;
			if(gLog==1){console.log("panel2Load storeDisplayArray modified - " ,storeDisplayArray.length,maxStoreNum);}
		}
		var baseHTML = autotextIt(p2TemplateSet.panel2BaseDiv,"panel2");
		var copyButtonTagStart = baseHTML.indexOf("<!--COPYBUTTON");
		if (copyButtonTagStart != -1) {
			var copyButtonTagEnd = baseHTML.indexOf(">",copyButtonTagStart);
			var copyButtonTagStrip = baseHTML.substring(copyButtonTagStart,(copyButtonTagEnd+1));
			var copyButtonHTMLStart = baseHTML.substr(0,copyButtonTagStart);
			var copyButtonHTMLEnd = baseHTML.substr((copyButtonTagEnd+1));
			var copyButtonRender = "";
			var copyButtonValueStart = copyButtonTagStrip.indexOf(" VALUE=");
			if (copyButtonValueStart != -1) {
				var copyButtonValueEnd = copyButtonTagStrip.indexOf("]",copyButtonValueStart);
				var copyButtonValueVar = copyButtonTagStrip.substring((copyButtonValueStart+8),(copyButtonValueEnd));
			}
			else {
				var copyButtonValueVar = "COPY";
			}
			var copyButtonClickedStart = copyButtonTagStrip.indexOf(" CLICK=");
			if (copyButtonClickedStart != -1) {
				var copyButtonClickedEnd = copyButtonTagStrip.indexOf("]",copyButtonClickedStart);
				var copyButtonClickedVar = copyButtonTagStrip.substring((copyButtonClickedStart+8),(copyButtonClickedEnd));
			}
			else {
				var copyButtonClickedVar = "copied";
			}
			var copyButtonItalicStart = copyButtonTagStrip.indexOf(" FNTAW=");
			if (copyButtonItalicStart != -1) {
				var copyButtonItalicEnd = copyButtonTagStrip.indexOf("]",copyButtonItalicStart);
				var copyButtonItalicVar = "<i class='fa " + copyButtonTagStrip.substring((copyButtonItalicStart+8),(copyButtonItalicEnd)) + "'><\/i>";
			}
			else {
				var copyButtonItalicVar = "";
			}
			copyButtonRender += "<div id='panel2CopyButton' class='panel_2_copy_button panel_2_copy_button_off'";
			if (hoverState==1) {
				copyButtonRender += " onmouseover='panel2ButtonHover(\"panel2CopyButton\",\"panel_2_copy_button\",1);' onfocus='panel2ButtonHover(\"panel2CopyButton\",\"panel_2_copy_button\",1);' onmouseout='panel2ButtonHover(\"panel2CopyButton\",\"panel_2_copy_button\",0);' onblur='panel2ButtonHover(\"panel2CopyButton\",\"panel_2_copy_button\",0);'";
			}
			copyButtonRender += " onclick='panel2CopyStoreListText(\"panel2CopyButtonText\",\"" + copyButtonValueVar + "\",\"" + copyButtonClickedVar + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2CopyStoreListText(\"panel2CopyButtonText\",\"" + copyButtonValueVar + "\",\"" + copyButtonClickedVar + "\");}'>" + copyButtonItalicVar + "<span id='panel2CopyButtonText'>" + copyButtonValueVar + "<\/span><\/div>";
			baseHTML = copyButtonHTMLStart + copyButtonRender + copyButtonHTMLEnd;
		}
		if (baseHTML.length != -1) {
			var widgetTabsTagStart = baseHTML.indexOf("<!--WIDGETTABS");
			if (widgetTabsTagStart != -1) {
				var widgetTabsTagEnd = baseHTML.indexOf(">",widgetTabsTagStart);
				var widgetTabsTagStrip = baseHTML.substring(widgetTabsTagStart,(widgetTabsTagEnd+1));
				var widgetTabsHTMLStart = baseHTML.substr(0,widgetTabsTagStart);
				var widgetTabsHTMLEnd = baseHTML.substr((widgetTabsTagEnd+1));
				var widgetTabsHTML = "";
				if (tabSelect == 0) {
					widgetTabsHTML = autotextIt(p2TemplateSet.panel2WidgetTabNoneDiv,"panel2WidgetTabNone");
					var tabOneTagStart = widgetTabsHTML.indexOf("<!--TABONE");
					if (tabOneTagStart != -1) {
						var tabOneTagEnd = widgetTabsHTML.indexOf(">",tabOneTagStart);
						var tabOneTagStrip = widgetTabsHTML.substring(tabOneTagStart,(tabOneTagEnd+1));
						var tabOneHTMLStart = widgetTabsHTML.substr(0,tabOneTagStart);
						var tabOneHTMLEnd = widgetTabsHTML.substr((tabOneTagEnd+1));
						var tabOneHTML = "";
						if (ecPos == 1) {
							tabOneHTML = "<span class='widget_tab_none_text'>" + ecTabTitle + "<\/span>";
						}
						else {
							tabOneHTML = "<span class='widget_tab_none_text'>" + bmTabTitle + "<\/span>";
						}
						widgetTabsHTML = tabOneHTMLStart + tabOneHTML + tabOneHTMLEnd;
					}
					var storeCountTagStart = widgetTabsHTML.indexOf("<!--STORECOUNT");
					if (storeCountTagStart != -1) {
						var storeCountTagEnd = widgetTabsHTML.indexOf(">",storeCountTagStart);
						var storeCountTagStrip = widgetTabsHTML.substring(storeCountTagStart,(storeCountTagEnd+1));
						var storeCountHTMLStart = widgetTabsHTML.substr(0,storeCountTagStart);
						var storeCountHTMLEnd = widgetTabsHTML.substr((storeCountTagEnd+1));
						var storeCountSingularStart = storeCountTagStrip.indexOf(" SINGULAR=");
						if (storeCountSingularStart != -1) {
							var storeCountSingularEnd = storeCountTagStrip.indexOf("]",storeCountSingularStart);
							storeCountWidgetSingularVar = " " + storeCountTagStrip.substring((storeCountSingularStart+11),(storeCountSingularEnd));
						}
						var storeCountPluralStart = storeCountTagStrip.indexOf(" PLURAL=");
						if (storeCountPluralStart != -1) {
							var storeCountPluralEnd = storeCountTagStrip.indexOf("]",storeCountPluralStart);
							storeCountWidgetPluralVar = " " + storeCountTagStrip.substring((storeCountPluralStart+9),(storeCountPluralEnd));
						}
						var storeCountHTML = "<span id='storeCountWidgetShell' class='widget_tab_store_count_shell' style='display:none;'><span id='storeCountWidgetCount' class='widget_tab_store_count'><\/span><span id='storeCountWidgetText' class='widget_tab_store_count_text'><\/span><\/span>";
						widgetTabsHTML = storeCountHTMLStart + storeCountHTML + storeCountHTMLEnd;
					}
					var etailerCountTagStart = widgetTabsHTML.indexOf("<!--ETAILERCOUNT");
					if (etailerCountTagStart != -1) {
						var etailerCountTagEnd = widgetTabsHTML.indexOf(">",etailerCountTagStart);
						var etailerCountTagStrip = widgetTabsHTML.substring(etailerCountTagStart,(etailerCountTagEnd+1));
						var etailerCountHTMLStart = widgetTabsHTML.substr(0,etailerCountTagStart);
						var etailerCountHTMLEnd = widgetTabsHTML.substr((etailerCountTagEnd+1));
						var etailerCountSingularStart = etailerCountTagStrip.indexOf(" SINGULAR=");
						if (etailerCountSingularStart != -1) {
							var etailerCountSingularEnd = etailerCountTagStrip.indexOf("]",etailerCountSingularStart);
							etailerCountWidgetSingularVar = " " + etailerCountTagStrip.substring((etailerCountSingularStart+11),(etailerCountSingularEnd));
						}
						var etailerCountPluralStart = etailerCountTagStrip.indexOf(" PLURAL=");
						if (etailerCountPluralStart != -1) {
							var etailerCountPluralEnd = etailerCountTagStrip.indexOf("]",etailerCountPluralStart);
							etailerCountWidgetPluralVar = " " + etailerCountTagStrip.substring((etailerCountPluralStart+9),(etailerCountPluralEnd));
						}
						var etailerCountHTML = "<span id='etailerCountWidgetShell' class='widget_tab_etailer_count_shell' style='display:none;'><span id='etailerCountWidgetCount' class='widget_tab_etailer_count'><\/span><span id='etailerCountWidgetText' class='widget_tab_etailer_count_text'><\/span><\/span>";
						widgetTabsHTML = etailerCountHTMLStart + etailerCountHTML + etailerCountHTMLEnd;
					}
					var productCountTagStart = widgetTabsHTML.indexOf("<!--PRODUCTCOUNT");
					if (productCountTagStart != -1) {
						var productCountTagEnd = widgetTabsHTML.indexOf(">",productCountTagStart);
						var productCountTagStrip = widgetTabsHTML.substring(productCountTagStart,(productCountTagEnd+1));
						var productCountHTMLStart = widgetTabsHTML.substr(0,productCountTagStart);
						var productCountHTMLEnd = widgetTabsHTML.substr((productCountTagEnd+1));
						var productCountSingularStart = productCountTagStrip.indexOf(" SINGULAR=");
						if (productCountSingularStart != -1) {
							var productCountSingularEnd = productCountTagStrip.indexOf("]",productCountSingularStart);
							productCountWidgetSingularVar = " " + productCountTagStrip.substring((productCountSingularStart+11),(productCountSingularEnd));
						}
						var productCountPluralStart = productCountTagStrip.indexOf(" PLURAL=");
						if (productCountPluralStart != -1) {
							var productCountPluralEnd = productCountTagStrip.indexOf("]",productCountPluralStart);
							productCountWidgetPluralVar = " " + productCountTagStrip.substring((productCountPluralStart+9),(productCountPluralEnd));
						}
						var productCountHTML = "<span id='productCountWidgetShell' class='widget_tab_product_count_shell' style='display:none;'><span id='productCountWidgetCount' class='widget_tab_product_count'><\/span><span id='productCountWidgetText' class='widget_tab_product_count_text'><\/span><\/span>";
						widgetTabsHTML = productCountHTMLStart + productCountHTML + productCountHTMLEnd;
					}
					var resultsCountTagStart = widgetTabsHTML.indexOf("<!--RESULTCOUNT");
					if (resultsCountTagStart != -1) {
						var resultsCountTagEnd = widgetTabsHTML.indexOf(">",resultsCountTagStart);
						var resultsCountTagStrip = widgetTabsHTML.substring(resultsCountTagStart,(resultsCountTagEnd+1));
						var resultsCountHTMLStart = widgetTabsHTML.substr(0,resultsCountTagStart);
						var resultsCountHTMLEnd = widgetTabsHTML.substr((resultsCountTagEnd+1));
						var resultsCountSingularStart = resultsCountTagStrip.indexOf(" SINGULAR=");
						if (resultsCountSingularStart != -1) {
							var resultsCountSingularEnd = resultsCountTagStrip.indexOf("]",resultsCountSingularStart);
							resultsCountWidgetSingularVar = " " + resultsCountTagStrip.substring((resultsCountSingularStart+11),(resultsCountSingularEnd));
						}
						var resultsCountPluralStart = resultsCountTagStrip.indexOf(" PLURAL=");
						if (resultsCountPluralStart != -1) {
							var resultsCountPluralEnd = resultsCountTagStrip.indexOf("]",resultsCountPluralStart);
							resultsCountWidgetPluralVar = " " + resultsCountTagStrip.substring((resultsCountPluralStart+9),(resultsCountPluralEnd));
						}
						var resultsCountHTML = "<span id='resultsCountWidgetShell' class='widget_tab_results_count_shell' style='display:none;'><span id='resultsCountWidgetCount' class='widget_tab_results_count'><\/span><span id='resultsCountWidgetText' class='widget_tab_results_count_text'><\/span><\/span>";
						widgetTabsHTML = resultsCountHTMLStart + resultsCountHTML + resultsCountHTMLEnd;
					}
				}
				else if (tabSelect == 1) {
					widgetTabsHTML = autotextIt(p2TemplateSet.panel2WidgetTabStaticDiv,"panel2WidgetTabStatic");
					var tabOneTagStart = widgetTabsHTML.indexOf("<!--TABONE");
					if (tabOneTagStart != -1) {
						var tabOneTagEnd = widgetTabsHTML.indexOf(">",tabOneTagStart);
						var tabOneTagStrip = widgetTabsHTML.substring(tabOneTagStart,(tabOneTagEnd+1));
						var tabOneHTMLStart = widgetTabsHTML.substr(0,tabOneTagStart);
						var tabOneHTMLEnd = widgetTabsHTML.substr((tabOneTagEnd+1));
						var tabOneHTML = "";
						if (ecPos == 1) {
							tabOneHTML = "<span class='widget_tab_static_text'>" + ecTabTitle + "<\/span>";
						}
						else {
							tabOneHTML = "<span class='widget_tab_static_text'>" + bmTabTitle + "<\/span>";
						}
						widgetTabsHTML = tabOneHTMLStart + tabOneHTML + tabOneHTMLEnd;
					}
					var tabTwoTagStart = widgetTabsHTML.indexOf("<!--TABTWO");
					if (tabTwoTagStart != -1) {
						var tabTwoTagEnd = widgetTabsHTML.indexOf(">",tabTwoTagStart);
						var tabTwoTagStrip = widgetTabsHTML.substring(tabTwoTagStart,(tabTwoTagEnd+1));
						var tabTwoHTMLStart = widgetTabsHTML.substr(0,tabTwoTagStart);
						var tabTwoHTMLEnd = widgetTabsHTML.substr((tabTwoTagEnd+1));
						var tabTwoHTML = "";
						if (ecPos == 2) {
							tabTwoHTML = "<span class='widget_tab_static_text'>" + ecTabTitle + "<\/span>";
						}
						else {
							tabTwoHTML = "<span class='widget_tab_static_text'>" + bmTabTitle + "<\/span>";
						}
						widgetTabsHTML = tabTwoHTMLStart + tabTwoHTML + tabTwoHTMLEnd;
					}
				}
				else if (tabSelect == 2) {
					widgetTabsHTML = autotextIt(p2TemplateSet.panel2WidgetTabActiveDiv,"panel2WidgetTabActive");
					var tabOneTagStart = widgetTabsHTML.indexOf("<!--TABONE");
					if (tabOneTagStart != -1) {
						var tabOneTagEnd = widgetTabsHTML.indexOf(">",tabOneTagStart);
						var tabOneTagStrip = widgetTabsHTML.substring(tabOneTagStart,(tabOneTagEnd+1));
						var tabOneHTMLStart = widgetTabsHTML.substr(0,tabOneTagStart);
						var tabOneHTMLEnd = widgetTabsHTML.substr((tabOneTagEnd+1));
						var tabOneHTML = "";
						if (ecPos == 1) {
							var tabOneValueVar = "<span class='widget_tab_static_text'>" + ecTabTitle + "<\/span>";
							var tabOneValueBase = ecTabTitle;
							var tabOneType = "EC";
						}
						else {
							var tabOneValueVar = "<span class='widget_tab_static_text'>" + bmTabTitle + "<\/span>";
							var tabOneValueBase = bmTabTitle;
							var tabOneType = "BM";
						}
						var tabOneItalicStart = tabOneTagStrip.indexOf(" FNTAW=");
						if (tabOneItalicStart != -1) {
							var tabOneItalicEnd = tabOneTagStrip.indexOf("]",tabOneItalicStart);
							var tabOneItalicVar = "<i class='fa " + tabOneTagStrip.substring((tabOneItalicStart+8),(tabOneItalicEnd)) + "'><\/i>";
						}
						else {
							var tabOneItalicVar = "";
						}
						if (widgetUp == "One") {
							var tabOneWidStyle = " widget_tab_active_button_on";
						}
						else {
							var tabOneWidStyle = " widget_tab_active_button_off";
						}
						tabOneHTML = "<div id='widgetTabActiveButtonOne' class='widget_tab_active_button" + tabOneWidStyle + "'";
						if (hoverState==1) {
							tabOneHTML += " onmouseover='widgetTabButtonOver(\"One\");' onfocus='widgetTabButtonOver(\"One\");' onmouseout='widgetTabButtonOut(\"One\");' onblur='widgetTabButtonOut(\"One\");'";
						}
						tabOneHTML += " onclick='widgetTabButtonClick(\"" + tabOneType + "\",\"One\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){widgetTabButtonClick(\"" + tabOneType + "\",\"One\");}' tabindex='0' title=\"" + tabOneValueBase + "\">" + tabOneItalicVar + tabOneValueVar + "<\/div>";
						widgetTabsHTML = tabOneHTMLStart + tabOneHTML + tabOneHTMLEnd;
					}
					var tabTwoTagStart = widgetTabsHTML.indexOf("<!--TABTWO");
					if (tabTwoTagStart != -1) {
						var tabTwoTagEnd = widgetTabsHTML.indexOf(">",tabTwoTagStart);
						var tabTwoTagStrip = widgetTabsHTML.substring(tabTwoTagStart,(tabTwoTagEnd+1));
						var tabTwoHTMLStart = widgetTabsHTML.substr(0,tabTwoTagStart);
						var tabTwoHTMLEnd = widgetTabsHTML.substr((tabTwoTagEnd+1));
						var tabTwoHTML = "";
						if (ecPos == 2) {
							var tabTwoValueVar = "<span class='widget_tab_static_text'>" + ecTabTitle + "<\/span>";
							var tabTwoValueBase = ecTabTitle;
							var tabTwoType = "EC";
						}
						else {
							var tabTwoValueVar = "<span class='widget_tab_static_text'>" + bmTabTitle + "<\/span>";
							var tabTwoValueBase = bmTabTitle;
							var tabTwoType = "BM";
						}
						var tabTwoItalicStart = tabTwoTagStrip.indexOf(" FNTAW=");
						if (tabTwoItalicStart != -1) {
							var tabTwoItalicEnd = tabTwoTagStrip.indexOf("]",tabTwoItalicStart);
							var tabTwoItalicVar = "<i class='fa " + tabTwoTagStrip.substring((tabTwoItalicStart+8),(tabTwoItalicEnd)) + "'><\/i>";
						}
						else {
							var tabTwoItalicVar = "";
						}
						if (widgetUp == "Two") {
							var tabTwoWidStyle = " widget_tab_active_button_on";
						}
						else {
							var tabTwoWidStyle = " widget_tab_active_button_off";
						}
						tabTwoHTML = "<div id='widgetTabActiveButtonTwo' class='widget_tab_active_button" + tabTwoWidStyle + "'";
						if (hoverState==1) {
							tabTwoHTML += " onmouseover='widgetTabButtonOver(\"Two\");' onfocus='widgetTabButtonOver(\"Two\");' onmouseout='widgetTabButtonOut(\"Two\");' onblur='widgetTabButtonOut(\"Two\");'";
						}
						tabTwoHTML += " onclick='widgetTabButtonClick(\"" + tabTwoType + "\",\"Two\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){widgetTabButtonClick(\"" + tabTwoType + "\",\"Two\");}' tabindex='0' title=\"" + tabTwoValueBase + "\">" + tabTwoItalicVar + tabTwoValueVar + "<\/div>";
						widgetTabsHTML = tabTwoHTMLStart + tabTwoHTML + tabTwoHTMLEnd;
					}
				}
				baseHTML = widgetTabsHTMLStart + widgetTabsHTML + widgetTabsHTMLEnd;
			}
			var widgetAreaTagStart = baseHTML.indexOf("<!--WIDGETAREA");
			if (widgetAreaTagStart != -1) {
				var widgetAreaTagEnd = baseHTML.indexOf(">",widgetAreaTagStart);
				var widgetAreaTagStrip = baseHTML.substring(widgetAreaTagStart,(widgetAreaTagEnd+1));
				var widgetAreaHTMLStart = baseHTML.substr(0,widgetAreaTagStart);
				var widgetAreaHTMLEnd = baseHTML.substr((widgetAreaTagEnd+1));
				var widgetAreaHTML = "";
				var widgetLeft = "";
				var widgetRight = "";
				if (widgetUp == "One") {
					var leftVis = 1;
					var rightVis = 2;
				}
				else {
					var leftVis = 2;
					var rightVis = 1;
				}
				if (tabSelect == 0) {
					if (ecbmNoRes == 1) {
						widgetAreaHTML = widgetAreaNone(2,1);
					}
					else if (ecPos != 0) {
						widgetAreaHTML = widgetAreaEC(2,1);
					}
					else if (bmPos != 0) {
						widgetAreaHTML = widgetAreaBM(2,1);
					}
				}
				else if (tabSelect == 1) {
					if (ecPos == 1) {
						widgetLeft = widgetAreaEC(1,1);
						widgetRight = widgetAreaBM(1,1);
					}
					else if (bmPos == 1) {
						widgetLeft = widgetAreaBM(1,1);
						widgetRight = widgetAreaEC(1,1);
					}
					widgetAreaHTML = widgetLeft + widgetRight;
				}
				else if (tabSelect == 2) {
					if (ecPos == 1) {
						widgetLeft = widgetAreaEC(2,leftVis);
						widgetRight = widgetAreaBM(2,rightVis);
					}
					else if (bmPos == 1) {
						widgetLeft = widgetAreaBM(2,leftVis);
						widgetRight = widgetAreaEC(2,rightVis);
					}
					widgetAreaHTML = widgetLeft + widgetRight;
				}
				baseHTML = widgetAreaHTMLStart + widgetAreaHTML + widgetAreaHTMLEnd;
			}
			if (showPSA == 1) {
				if(gLog==1){console.log("panel2Load showPSA == 1");}
				var psaHTML = autotextIt(p2TemplateSet.panel2ProdSelectAreaDiv,"panel2ProdSelectArea");
				var prodfilterSelectTagStart = psaHTML.indexOf("<!--PRODFILTERSELECT");
				if (prodfilterSelectTagStart != -1) {
					var prodfilterSelectTagEnd = psaHTML.indexOf(">",prodfilterSelectTagStart);
					var prodfilterSelectTagStrip = psaHTML.substring(prodfilterSelectTagStart,(prodfilterSelectTagEnd+1));
					var prodfilterSelectHTMLStart = psaHTML.substr(0,prodfilterSelectTagStart);
					var prodfilterSelectHTMLEnd = psaHTML.substr((prodfilterSelectTagEnd+1));
					var prodfilterSelectPreRender = "";
					var prodfilterSelectRender = "";
					var prodfilterSelectItalicStart = prodfilterSelectTagStrip.indexOf(" FNTAW=");
					if (prodfilterSelectItalicStart != -1) {
						var prodfilterSelectItalicEnd = prodfilterSelectTagStrip.indexOf("]",prodfilterSelectItalicStart);
						prodfilterSelectItalicVar = "<i class='fa " + prodfilterSelectTagStrip.substring((prodfilterSelectItalicStart+8),(prodfilterSelectItalicEnd)) + "'><\/i>";
					}
					else {
						prodfilterSelectItalicVar = "";
					}
					var prodfilterSelectValueStart = prodfilterSelectTagStrip.indexOf(" VALUE=");
					if (prodfilterSelectValueStart != -1) {
						var prodfilterSelectValueEnd = prodfilterSelectTagStrip.indexOf("]",prodfilterSelectValueStart);
						var prodfilterSelectValueVar = prodfilterSelectTagStrip.substring((prodfilterSelectValueStart+8),(prodfilterSelectValueEnd));
					}
					else {
						var prodfilterSelectValueVar = "REFINE SEARCH";
					}
					var prodfilterSelectFreeze = 1;
					var prodfilterSelectFreezeStart = prodfilterSelectTagStrip.indexOf(" FREEZE");
					if (prodfilterSelectFreezeStart != -1) {
						var prodfilterSelectFreeze = 2;
					}
					prodfilterSelectRender += "<div class='panel_2_prodfilterselect_div_filter_slider panel_close_me' style='display:none;'><div class='panel_2_prodfilterselect_div_filter_liner'>";
					var pfNumRes = 0;
					if (pariCol == 1) {
						for (g=0; g<catArray.length; g++) {
							var showTFC = 0;
							if (asscList != "") {
								var asscListArr = asscList.split(",");
								var foundCP = 0;
								for (l=0; l<prodDisplayArray.length; l++) {
									for (n=0; n<asscListArr.length; n++) {
										if (prodDisplayArray[l][1] == asscListArr[n] && prodDisplayArray[l][8] == catArray[g][0]) {
											showTFC = 1;
											foundCP = 1;
											break;
										}
									}
									if (foundCP == 1) {
										break;
									}
								}
							}
							else {
								showTFC = 1;
							}
							if (showTFC == 1) {
								if (upcFilterArr.length) {
									if (catArray[g][0] == upcFilterArr[0][8] && prodfilterSelectFreeze == 1) {
										prodfilterSelectValueVar = catArray[g][1];
									}
								}
								prodfilterSelectRender += "<div class='panel_2_prodfilterselect_div_filter_item_" + catArray[g][0] + " panel_2_prodfilterselect_div_filter_item panel_2_prodfilterselect_div_filter_item_off'";
								if (hoverState==1) {
									prodfilterSelectRender += " onmouseover='genericButtonOver(\"panel_2_prodfilterselect_div_filter_item_" + catArray[g][0] + "\",\"panel_2_prodfilterselect_div_filter_item\");' onfocus='genericButtonOver(\"panel_2_prodfilterselect_div_filter_item_" + catArray[g][0] + "\",\"panel_2_prodfilterselect_div_filter_item\");' onmouseout='genericButtonOut(\"panel_2_prodfilterselect_div_filter_item_" + catArray[g][0] + "\",\"panel_2_prodfilterselect_div_filter_item\");' onblur='genericButtonOut(\"panel_2_prodfilterselect_div_filter_item_" + catArray[g][0] + "\",\"panel_2_prodfilterselect_div_filter_item\");'";
								}
								prodfilterSelectRender += " onclick='p2FilterByCat(" + catArray[g][0] + "," + prodfilterSelectFreeze + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){p2FilterByCat(" + catArray[g][0] + "," + prodfilterSelectFreeze + ");}' tabindex='0' title=\"" + catArray[g][1] + "\">" + catArray[g][1] + "<\/div>";
								pfNumRes++;
							}
						}
					}
					else {
						for (l=0; l<prodDisplayArray.length; l++) {
							var showTFP = 0;
							if (asscList != "") {
								var asscListArr = asscList.split(",");
								for (n=0; n<asscListArr.length; n++) {
									if (prodDisplayArray[l][1] == asscListArr[n]) {
										showTFP = 1;
										break;
									}
								}
							}
							else {
								showTFP = 1;
							}
							if (showTFP == 1) {
								if (upcFilterArr.length) {
									if (prodDisplayArray[l][0] == upcFilterArr[0][0] && prodfilterSelectFreeze == 1) {
										prodfilterSelectValueVar = prodDisplayArray[l][2];
									}
								}
								prodfilterSelectRender += "<div class='panel_2_prodfilterselect_div_filter_item_" + prodDisplayArray[l][0] + " panel_2_prodfilterselect_div_filter_item panel_2_prodfilterselect_div_filter_item_off'";
								if (hoverState==1) {
									prodfilterSelectRender += " onmouseover='genericButtonOver(\"panel_2_prodfilterselect_div_filter_item_" + prodDisplayArray[l][0] + "\",\"panel_2_prodfilterselect_div_filter_item\");' onfocus='genericButtonOver(\"panel_2_prodfilterselect_div_filter_item_" + prodDisplayArray[l][0] + "\",\"panel_2_prodfilterselect_div_filter_item\");' onmouseout='genericButtonOut(\"panel_2_prodfilterselect_div_filter_item_" + prodDisplayArray[l][0] + "\",\"panel_2_prodfilterselect_div_filter_item\");' onblur='genericButtonOut(\"panel_2_prodfilterselect_div_filter_item_" + prodDisplayArray[l][0] + "\",\"panel_2_prodfilterselect_div_filter_item\");'";
								}
								prodfilterSelectRender += " onclick='p2FilterByUPC(" + prodDisplayArray[l][0] + "," + prodfilterSelectFreeze + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){p2FilterByUPC(" + prodDisplayArray[l][0] + "," + prodfilterSelectFreeze + ");}' tabindex='0' title=\"" + prodDisplayArray[l][2] + "\">" + prodDisplayArray[l][2] + "<\/div>";
								pfNumRes++;
							}
						}
					}
					prodfilterSelectRender += "<\/div><\/div><\/div>";
					prodfilterSelectPreRender += "<div id='panel2LangSelectDivShell' class='panel_2_prodfilterselect_div_shell'><div class='panel_2_prodfilterselect_div_filter_arrow'><div class='panel_2_prodfilterselect_div_filter panel_2_prodfilterselect_div_filter_base panel_2_prodfilterselect_div_filter_base_off'";
					if (hoverState==1) {
						prodfilterSelectPreRender += " onmouseover='genericButtonOver(\"panel_2_prodfilterselect_div_filter\",\"panel_2_prodfilterselect_div_filter_base\");' onfocus='genericButtonOver(\"panel_2_prodfilterselect_div_filter\",\"panel_2_prodfilterselect_div_filter_base\");' onmouseout='genericButtonOut(\"panel_2_prodfilterselect_div_filter\",\"panel_2_prodfilterselect_div_filter_base\");' onblur='genericButtonOut(\"panel_2_prodfilterselect_div_filter\",\"panel_2_prodfilterselect_div_filter_base\");'";
					}
					prodfilterSelectPreRender += " onclick='$(\".panel_2_prodfilterselect_div_filter_slider\").toggle();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){$(\".panel_2_prodfilterselect_div_filter_slider\").toggle();}' tabindex='0' title=\"" + prodfilterSelectValueVar + "\"><div class='panel_2_prodfilterselect_div_filter_text'><span id='panel2ProdFilterSelectName'>" + prodfilterSelectValueVar + "<\/span> " + prodfilterSelectItalicVar + "<\/div><\/div><\/div>";
					if (pfNumRes <= 1 ) {
						psaHTML = prodfilterSelectHTMLStart + prodfilterSelectHTMLEnd;
					}
					else {
						psaHTML = prodfilterSelectHTMLStart + prodfilterSelectPreRender + prodfilterSelectRender + prodfilterSelectHTMLEnd;
					}
				}
				if (upcFilterArr.length && onretPar == 1) {
					if(gLog==1){console.log("showPSA == 1 && upcFilterArr.length == " + upcFilterArr.length + " && onretPar == 1",upcFilterArr);}
					var upcFilterNameTagStart = psaHTML.indexOf("<!--PRODFILTERNAME");
					if (upcFilterNameTagStart != -1) {
						var upcFilterNameTagEnd = psaHTML.indexOf(">",upcFilterNameTagStart);
						var upcFilterNameTagStrip = psaHTML.substring(upcFilterNameTagStart,(upcFilterNameTagEnd+1));
						var upcFilterNameHTMLStart = psaHTML.substr(0,upcFilterNameTagStart);
						var upcFilterNameHTMLEnd = psaHTML.substr((upcFilterNameTagEnd+1));
						var upcFilterNameVal = "";
						if (pariCol == 1) {
							for (n=0; n<catArray.length; n++) {
								if (catArray[n][0] == upcFilterArr[0][8]) {
									upcFilterNameVal = catArray[n][1];
								}
							}
						}
						else {
							upcFilterNameVal = upcFilterArr[0][2];
						}
						psaHTML = upcFilterNameHTMLStart + "<div id='panel2UPCFilterName' class='panel_2_upc_filter_name'>" + upcFilterNameVal + "<\/div>" + upcFilterNameHTMLEnd;
					}
					var prodTitleTagStart = psaHTML.indexOf("<!--PRODFILTERTITLE");
					if (prodTitleTagStart != -1) {
						var prodTitleTagEnd = psaHTML.indexOf(">",prodTitleTagStart);
						var prodTitleTagStrip = psaHTML.substring(prodTitleTagStart,(prodTitleTagEnd+1));
						var baseProdTitleHTMLStart = psaHTML.substr(0,prodTitleTagStart);
						var baseProdTitleHTMLEnd = psaHTML.substr((prodTitleTagEnd+1));
						psaHTML = baseProdTitleHTMLStart + "<div id='panel2UPCFilterTitle' class='panel_2_upc_filter_title'>" +asscWTitle + "<\/div>" + baseProdTitleHTMLEnd;
					}
					var prodDescTagStart = psaHTML.indexOf("<!--PRODFILTERDESC");
					if (prodDescTagStart != -1 && (pariCol == 0 || APO != "")) {
						var prodDescTagEnd = psaHTML.indexOf(">",prodDescTagStart);
						var prodDescTagStrip = psaHTML.substring(prodDescTagStart,(prodDescTagEnd+1));
						var baseProdDescHTMLStart = psaHTML.substr(0,prodDescTagStart);
						var baseProdDescHTMLEnd = psaHTML.substr((prodDescTagEnd+1));
						psaHTML = baseProdDescHTMLStart + "<div id='panel2UPCFilterDesc' class='panel_2_upc_filter_desc'>" + upcFilterArr[0][3] + "<\/div>" + baseProdDescHTMLEnd;
					}
					var upcFilterUPCTagStart = psaHTML.indexOf("<!--PRODFILTERUPC");
					if (upcFilterUPCTagStart != -1 && (pariCol == 0 || APO != "")) {
						var upcFilterUPCTagEnd = psaHTML.indexOf(">",upcFilterUPCTagStart);
						var upcFilterUPCTagStrip = psaHTML.substring(upcFilterUPCTagStart,(upcFilterUPCTagEnd+1));
						var upcFilterUPCHTMLStart = psaHTML.substr(0,upcFilterUPCTagStart);
						var upcFilterUPCHTMLEnd = psaHTML.substr((upcFilterUPCTagEnd+1));
						psaHTML = upcFilterUPCHTMLStart + "<div id='panel2UPCFilterUPC' class='panel_2_upc_filter_upc'>" + upcFilterArr[0][1] + "<\/div>" + upcFilterUPCHTMLEnd;
					}
					var upcFilterBigImgTagStart = psaHTML.indexOf("<!--PRODFILTERBIGIMG");
					if (upcFilterBigImgTagStart != -1) {
						var upcFilterBigImgTagEnd = psaHTML.indexOf(">",upcFilterBigImgTagStart);
						var upcFilterBigImgTagStrip = psaHTML.substring(upcFilterBigImgTagStart,(upcFilterBigImgTagEnd+1));
						var upcFilterBigImgHTMLStart = psaHTML.substr(0,upcFilterBigImgTagStart);
						var upcFilterBigImgHTMLEnd = psaHTML.substr((upcFilterBigImgTagEnd+1));
						var upcFilterBigImgVal = "";
						var upcFilterNameVal = "";
						if (pariCol == 1) {
							for (n=0; n<catArray.length; n++) {
								if (catArray[n][0] == upcFilterArr[0][8]) {
									upcFilterBigImgVal = catArray[n][3];
									upcFilterNameVal = catArray[n][1];
								}
							}
						}
						else {
							upcFilterBigImgVal = upcFilterArr[0][4];
							upcFilterNameVal = upcFilterArr[0][2];
						}
						if (upcFilterBigImgVal != "") {
							psaHTML = upcFilterBigImgHTMLStart + "<img title=\"" + upcFilterNameVal + "\" alt=\"" + upcFilterNameVal + "\" id='panel2UPCFilterBigImg' class='panel_2_upc_filter_bigimg' src='" + clientImgBase + upcFilterBigImgVal + "'>" + upcFilterBigImgHTMLEnd;
						}
					}
					var upcFilterSmImgTagStart = psaHTML.indexOf("<!--PRODFILTERSMIMG");
					if (upcFilterSmImgTagStart != -1) {
						var upcFilterSmImgTagEnd = psaHTML.indexOf(">",upcFilterSmImgTagStart);
						var upcFilterSmImgTagStrip = psaHTML.substring(upcFilterSmImgTagStart,(upcFilterSmImgTagEnd+1));
						var upcFilterSmImgHTMLStart = psaHTML.substr(0,upcFilterSmImgTagStart);
						var upcFilterSmImgHTMLEnd = psaHTML.substr((upcFilterSmImgTagEnd+1));
						var upcFilterSmImgVal = "";
						var upcFilterNameVal = "";
						if (pariCol == 1) {
							for (n=0; n<catArray.length; n++) {
								if (catArray[n][0] == upcFilterArr[0][8]) {
									upcFilterSmImgVal = catArray[n][4];
									upcFilterNameVal = catArray[n][1];
								}
							}
						}
						else {
							upcFilterSmImgVal = upcFilterArr[0][5];
							upcFilterNameVal = upcFilterArr[0][2];
						}
						if (upcFilterSmImgVal != "") {
							psaHTML = upcFilterSmImgHTMLStart + "<img title=\"" + upcFilterNameVal + "\" alt=\"" + upcFilterNameVal + "\" id='panel2UPCFilterSmImg' class='panel_2_upc_filter_smimg' src='" + clientImgBase + upcFilterSmImgVal + "'>" + upcFilterSmImgHTMLEnd;
						}
					}
				}
				baseHTML = psaHTML + baseHTML;
			}
			if (showPSA == 2) {
				if(gLog==1){console.log("panel2Load showPSA == 2");}
				var psiHTML = autotextIt(p2TemplateSet.panel2ProdInfoAreaDiv,"panel2ProdInfoArea");
				if (upcFilterArr.length && onretPar == 1) {
					if(gLog==1){console.log("showPSA == 2 && upcFilterArr.length == " + upcFilterArr.length + " && onretPar == 1");}
					var upcFilterNameTagStart = psiHTML.indexOf("<!--PRODFILTERNAME");
					if (upcFilterNameTagStart != -1) {
						var upcFilterNameTagEnd = psiHTML.indexOf(">",upcFilterNameTagStart);
						var upcFilterNameTagStrip = psiHTML.substring(upcFilterNameTagStart,(upcFilterNameTagEnd+1));
						var upcFilterNameHTMLStart = psiHTML.substr(0,upcFilterNameTagStart);
						var upcFilterNameHTMLEnd = psiHTML.substr((upcFilterNameTagEnd+1));
						var upcFilterNameVal = "";
						if (pariCol == 1) {
							for (n=0; n<catArray.length; n++) {
								if (catArray[n][0] == upcFilterArr[0][8]) {
									upcFilterNameVal = catArray[n][1];
								}
							}
						}
						else {
							upcFilterNameVal = upcFilterArr[0][2];
						}
						psiHTML = upcFilterNameHTMLStart + "<div id='panel2UPCFilterName' class='panel_2_upc_filter_name'>" + upcFilterNameVal + "<\/div>" + upcFilterNameHTMLEnd;
					}
					var prodTitleTagStart = psiHTML.indexOf("<!--PRODFILTERTITLE");
					if (prodTitleTagStart != -1) {
						var prodTitleTagEnd = psiHTML.indexOf(">",prodTitleTagStart);
						var prodTitleTagStrip = psiHTML.substring(prodTitleTagStart,(prodTitleTagEnd+1));
						var baseProdTitleHTMLStart = psiHTML.substr(0,prodTitleTagStart);
						var baseProdTitleHTMLEnd = psiHTML.substr((prodTitleTagEnd+1));
						psaHTML = baseProdTitleHTMLStart + "<div id='panel2UPCFilterTitle' class='panel_2_upc_filter_title'>" +asscWTitle + "<\/div>" + baseProdTitleHTMLEnd;
					}
					var upcFilterBigImgTagStart = psiHTML.indexOf("<!--PRODFILTERBIGIMG");
					if (upcFilterBigImgTagStart != -1) {
						var upcFilterBigImgTagEnd = psiHTML.indexOf(">",upcFilterBigImgTagStart);
						var upcFilterBigImgTagStrip = psiHTML.substring(upcFilterBigImgTagStart,(upcFilterBigImgTagEnd+1));
						var upcFilterBigImgHTMLStart = psiHTML.substr(0,upcFilterBigImgTagStart);
						var upcFilterBigImgHTMLEnd = psiHTML.substr((upcFilterBigImgTagEnd+1));
						var upcFilterBigImgVal = "";
						var upcFilterNameVal = "";
						if (pariCol == 1 && APO == "") {
							for (n=0; n<catArray.length; n++) {
								if (catArray[n][0] == upcFilterArr[0][8]) {
									upcFilterBigImgVal = catArray[n][3];
									upcFilterNameVal = catArray[n][1];
								}
							}
						}
						else {
							upcFilterBigImgVal = upcFilterArr[0][4];
							upcFilterNameVal = upcFilterArr[0][2];
						}
						if (upcFilterBigImgVal != "") {
							psiHTML = upcFilterBigImgHTMLStart + "<img title=\"" + upcFilterNameVal + "\" alt=\"" + upcFilterNameVal + "\" id='panel2UPCFilterBigImg' class='panel_2_upc_filter_bigimg' src='" + clientImgBase + upcFilterBigImgVal + "'>" + upcFilterBigImgHTMLEnd;
						}
					}
					var upcFilterSmImgTagStart = psiHTML.indexOf("<!--PRODFILTERSMIMG");
					if (upcFilterSmImgTagStart != -1) {
						var upcFilterSmImgTagEnd = psiHTML.indexOf(">",upcFilterSmImgTagStart);
						var upcFilterSmImgTagStrip = psiHTML.substring(upcFilterSmImgTagStart,(upcFilterSmImgTagEnd+1));
						var upcFilterSmImgHTMLStart = psiHTML.substr(0,upcFilterSmImgTagStart);
						var upcFilterSmImgHTMLEnd = psiHTML.substr((upcFilterSmImgTagEnd+1));
						var upcFilterSmImgVal = "";
						var upcFilterNameVal = "";
						if (pariCol == 1 && APO == "") {
							for (n=0; n<catArray.length; n++) {
								if (catArray[n][0] == upcFilterArr[0][8]) {
									upcFilterSmImgVal = catArray[n][4];
									upcFilterNameVal = catArray[n][1];
								}
							}
						}
						else {
							upcFilterSmImgVal = upcFilterArr[0][5];
							upcFilterNameVal = upcFilterArr[0][2];
						}
						if (upcFilterSmImgVal != "") {
							psiHTML = upcFilterSmImgHTMLStart + "<img title=\"" + upcFilterNameVal + "\" alt=\"" + upcFilterNameVal + "\" id='panel2UPCFilterSmImg' class='panel_2_upc_filter_smimg' src='" + clientImgBase + upcFilterSmImgVal + "'>" + upcFilterSmImgHTMLEnd;
						}
					}
				}
				baseHTML = psiHTML + baseHTML;
			}
			var prodfilterSelectTagStart = baseHTML.indexOf("<!--PRODFILTERSELECT");
			if (prodfilterSelectTagStart != -1) {
				var prodfilterSelectTagEnd = baseHTML.indexOf(">",prodfilterSelectTagStart);
				var prodfilterSelectTagStrip = baseHTML.substring(prodfilterSelectTagStart,(prodfilterSelectTagEnd+1));
				var prodfilterSelectHTMLStart = baseHTML.substr(0,prodfilterSelectTagStart);
				var prodfilterSelectHTMLEnd = baseHTML.substr((prodfilterSelectTagEnd+1));
				var prodfilterSelectPreRender = "";
				var prodfilterSelectRender = "";
				var prodfilterSelectItalicStart = prodfilterSelectTagStrip.indexOf(" FNTAW=");
				if (prodfilterSelectItalicStart != -1) {
					var prodfilterSelectItalicEnd = prodfilterSelectTagStrip.indexOf("]",prodfilterSelectItalicStart);
					prodfilterSelectItalicVar = "<i class='fa " + prodfilterSelectTagStrip.substring((prodfilterSelectItalicStart+8),(prodfilterSelectItalicEnd)) + "'><\/i>";
				}
				else {
					prodfilterSelectItalicVar = "";
				}
				var prodfilterSelectValueStart = prodfilterSelectTagStrip.indexOf(" VALUE=");
				if (prodfilterSelectValueStart != -1) {
					var prodfilterSelectValueEnd = prodfilterSelectTagStrip.indexOf("]",prodfilterSelectValueStart);
					var prodfilterSelectValueVar = prodfilterSelectTagStrip.substring((prodfilterSelectValueStart+8),(prodfilterSelectValueEnd));
				}
				else {
					var prodfilterSelectValueVar = "REFINE SEARCH";
				}
				var prodfilterSelectFreeze = 1;
				var prodfilterSelectFreezeStart = prodfilterSelectTagStrip.indexOf(" FREEZE");
				if (prodfilterSelectFreezeStart != -1) {
					var prodfilterSelectFreeze = 2;
				}
				prodfilterSelectRender += "<div class='panel_2_prodfilterselect_div_filter_slider panel_close_me' style='display:none;'><div class='panel_2_prodfilterselect_div_filter_liner'>";
				var pfNumRes = 0;
				if (pariCol == 1) {
					for (g=0; g<catArray.length; g++) {
						var showTFC = 0;
						if (asscList != "") {
							var asscListArr = asscList.split(",");
							var foundCP = 0;
							for (l=0; l<prodDisplayArray.length; l++) {
								for (n=0; n<asscListArr.length; n++) {
									if (prodDisplayArray[l][1] == asscListArr[n] && prodDisplayArray[l][8] == catArray[g][0]) {
										showTFC = 1;
										foundCP = 1;
										break;
									}
								}
								if (foundCP == 1) {
									break;
								}
							}
						}
						else {
							showTFC = 1;
						}
						if (showTFC == 1) {
							if (upcFilterArr.length) {
								if (catArray[g][0] == upcFilterArr[0][8] && prodfilterSelectFreeze == 1) {
									prodfilterSelectValueVar = catArray[g][1];
								}
							}
							prodfilterSelectRender += "<div class='panel_2_prodfilterselect_div_filter_item_" + catArray[g][0] + " panel_2_prodfilterselect_div_filter_item panel_2_prodfilterselect_div_filter_item_off'";
							if (hoverState==1) {
								prodfilterSelectRender += " onmouseover='genericButtonOver(\"panel_2_prodfilterselect_div_filter_item_" + catArray[g][0] + "\",\"panel_2_prodfilterselect_div_filter_item\");' onfocus='genericButtonOver(\"panel_2_prodfilterselect_div_filter_item_" + catArray[g][0] + "\",\"panel_2_prodfilterselect_div_filter_item\");' onmouseout='genericButtonOut(\"panel_2_prodfilterselect_div_filter_item_" + catArray[g][0] + "\",\"panel_2_prodfilterselect_div_filter_item\");' onblur='genericButtonOut(\"panel_2_prodfilterselect_div_filter_item_" + catArray[g][0] + "\",\"panel_2_prodfilterselect_div_filter_item\");'";
							}
							prodfilterSelectRender += " onclick='p2FilterByCat(" + catArray[g][0] + "," + prodfilterSelectFreeze + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){p2FilterByCat(" + catArray[g][0] + "," + prodfilterSelectFreeze + ");}' tabindex='0' title=\"" + catArray[g][1] + "\">" + catArray[g][1] + "<\/div>";
							pfNumRes++;
						}
					}
				}
				else {
					for (l=0; l<prodDisplayArray.length; l++) {
						var showTFP = 0;
						if (asscList != "") {
							var asscListArr = asscList.split(",");
							for (n=0; n<asscListArr.length; n++) {
								if (prodDisplayArray[l][1] == asscListArr[n]) {
									showTFP = 1;
									break;
								}
							}
						}
						else {
							showTFP = 1;
						}
						if (showTFP == 1) {
							if (upcFilterArr.length) {
								if (prodDisplayArray[l][0] == upcFilterArr[0][0] && prodfilterSelectFreeze == 1) {
									prodfilterSelectValueVar = prodDisplayArray[l][2];
								}
							}
							prodfilterSelectRender += "<div class='panel_2_prodfilterselect_div_filter_item_" + prodDisplayArray[l][0] + " panel_2_prodfilterselect_div_filter_item panel_2_prodfilterselect_div_filter_item_off'";
							if (hoverState==1) {
								prodfilterSelectRender += " onmouseover='genericButtonOver(\"panel_2_prodfilterselect_div_filter_item_" + prodDisplayArray[l][0] + "\",\"panel_2_prodfilterselect_div_filter_item\");' onfocus='genericButtonOver(\"panel_2_prodfilterselect_div_filter_item_" + prodDisplayArray[l][0] + "\",\"panel_2_prodfilterselect_div_filter_item\");' onmouseout='genericButtonOut(\"panel_2_prodfilterselect_div_filter_item_" + prodDisplayArray[l][0] + "\",\"panel_2_prodfilterselect_div_filter_item\");' onblur='genericButtonOut(\"panel_2_prodfilterselect_div_filter_item_" + prodDisplayArray[l][0] + "\",\"panel_2_prodfilterselect_div_filter_item\");'";
							}
							prodfilterSelectRender += " onclick='p2FilterByUPC(" + prodDisplayArray[l][0] + "," + prodfilterSelectFreeze + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){p2FilterByUPC(" + prodDisplayArray[l][0] + "," + prodfilterSelectFreeze + ");}' tabindex='0' title=\"" + prodDisplayArray[l][2] + "\">" + prodDisplayArray[l][2] + "<\/div>";
							pfNumRes++;
						}
					}
				}
				prodfilterSelectRender += "<\/div><\/div><\/div>";
				prodfilterSelectPreRender += "<div id='panel2LangSelectDivShell' class='panel_2_prodfilterselect_div_shell'><div class='panel_2_prodfilterselect_div_filter_arrow'><div class='panel_2_prodfilterselect_div_filter panel_2_prodfilterselect_div_filter_base panel_2_prodfilterselect_div_filter_base_off'";
				if (hoverState==1) {
					prodfilterSelectPreRender += " onmouseover='genericButtonOver(\"panel_2_prodfilterselect_div_filter\",\"panel_2_prodfilterselect_div_filter_base\");' onfocus='genericButtonOver(\"panel_2_prodfilterselect_div_filter\",\"panel_2_prodfilterselect_div_filter_base\");' onmouseout='genericButtonOut(\"panel_2_prodfilterselect_div_filter\",\"panel_2_prodfilterselect_div_filter_base\");' onblur='genericButtonOut(\"panel_2_prodfilterselect_div_filter\",\"panel_2_prodfilterselect_div_filter_base\");'";
				}
				prodfilterSelectPreRender += " onclick='$(\".panel_2_prodfilterselect_div_filter_slider\").toggle();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){$(\".panel_2_prodfilterselect_div_filter_slider\").toggle();}' tabindex='0' title=\"" + prodfilterSelectValueVar + "\"><div class='panel_2_prodfilterselect_div_filter_text'><span id='panel2ProdFilterSelectName'>" + prodfilterSelectValueVar + "<\/span> " + prodfilterSelectItalicVar + "<\/div><\/div><\/div>";
				if (pfNumRes <= 1 ) {
					baseHTML = prodfilterSelectHTMLStart + prodfilterSelectHTMLEnd;
				}
				else {
					baseHTML = prodfilterSelectHTMLStart + prodfilterSelectPreRender + prodfilterSelectRender + prodfilterSelectHTMLEnd;
				}
			}
			if (upcFilterArr.length && onretPar == 1) {
				if(gLog==1){console.log("panel2Load upcFilterArr.length && onretPar == 1");}
				var upcFilterNameTagStart = baseHTML.indexOf("<!--PRODFILTERNAME");
				if (upcFilterNameTagStart != -1) {
					var upcFilterNameTagEnd = baseHTML.indexOf(">",upcFilterNameTagStart);
					var upcFilterNameTagStrip = baseHTML.substring(upcFilterNameTagStart,(upcFilterNameTagEnd+1));
					var upcFilterNameHTMLStart = baseHTML.substr(0,upcFilterNameTagStart);
					var upcFilterNameHTMLEnd = baseHTML.substr((upcFilterNameTagEnd+1));
					var upcFilterNameVal = "";
					if (pariCol == 1) {
						for (n=0; n<catArray.length; n++) {
							if (catArray[n][0] == upcFilterArr[0][8]) {
								upcFilterNameVal = catArray[n][1];
							}
						}
					}
					else {
						upcFilterNameVal = upcFilterArr[0][2];
					}
					baseHTML = upcFilterNameHTMLStart + "<div id='panel2UPCFilterName' class='panel_2_upc_filter_name'>" + upcFilterNameVal + "<\/div>" + upcFilterNameHTMLEnd;
				}
				var prodTitleTagStart = baseHTML.indexOf("<!--PRODFILTERTITLE");
				if (prodTitleTagStart != -1) {
					var prodTitleTagEnd = baseHTML.indexOf(">",prodTitleTagStart);
					var prodTitleTagStrip = baseHTML.substring(prodTitleTagStart,(prodTitleTagEnd+1));
					var baseProdTitleHTMLStart = baseHTML.substr(0,prodTitleTagStart);
					var baseProdTitleHTMLEnd = baseHTML.substr((prodTitleTagEnd+1));
					baseHTML = baseProdTitleHTMLStart + "<div id='panel2UPCFilterTitle' class='panel_2_upc_filter_title'>" +asscWTitle + "<\/div>" + baseProdTitleHTMLEnd;
				}
				var prodDescTagStart = baseHTML.indexOf("<!--PRODFILTERDESC");
				if (prodDescTagStart != -1 && (pariCol == 0 || APO != "")) {
					var prodDescTagEnd = baseHTML.indexOf(">",prodDescTagStart);
					var prodDescTagStrip = baseHTML.substring(prodDescTagStart,(prodDescTagEnd+1));
					var baseProdDescHTMLStart = baseHTML.substr(0,prodDescTagStart);
					var baseProdDescHTMLEnd = baseHTML.substr((prodDescTagEnd+1));
					baseHTML = baseProdDescHTMLStart + "<div id='panel2UPCFilterDesc' class='panel_2_upc_filter_desc'>" + upcFilterArr[0][3] + "<\/div>" + baseProdDescHTMLEnd;
				}
				var upcFilterUPCTagStart = baseHTML.indexOf("<!--PRODFILTERUPC");
				if (upcFilterUPCTagStart != -1 && (pariCol == 0 || APO != "")) {
					var upcFilterUPCTagEnd = baseHTML.indexOf(">",upcFilterUPCTagStart);
					var upcFilterUPCTagStrip = baseHTML.substring(upcFilterUPCTagStart,(upcFilterUPCTagEnd+1));
					var upcFilterUPCHTMLStart = baseHTML.substr(0,upcFilterUPCTagStart);
					var upcFilterUPCHTMLEnd = baseHTML.substr((upcFilterUPCTagEnd+1));
					baseHTML = upcFilterUPCHTMLStart + "<div id='panel2UPCFilterUPC' class='panel_2_upc_filter_upc'>" + upcFilterArr[0][1] + "<\/div>" + upcFilterUPCHTMLEnd;
				}
				var upcFilterBigImgTagStart = baseHTML.indexOf("<!--PRODFILTERBIGIMG");
				if (upcFilterBigImgTagStart != -1) {
					var upcFilterBigImgTagEnd = baseHTML.indexOf(">",upcFilterBigImgTagStart);
					var upcFilterBigImgTagStrip = baseHTML.substring(upcFilterBigImgTagStart,(upcFilterBigImgTagEnd+1));
					var upcFilterBigImgHTMLStart = baseHTML.substr(0,upcFilterBigImgTagStart);
					var upcFilterBigImgHTMLEnd = baseHTML.substr((upcFilterBigImgTagEnd+1));
					var upcFilterBigImgVal = "";
					var upcFilterNameVal = "";
					if (pariCol == 1 && APO == "") {
						for (n=0; n<catArray.length; n++) {
							if (catArray[n][0] == upcFilterArr[0][8]) {
								upcFilterBigImgVal = catArray[n][3];
								upcFilterNameVal = catArray[n][1];
							}
						}
					}
					else {
						upcFilterBigImgVal = upcFilterArr[0][4];
						upcFilterNameVal = upcFilterArr[0][2];
					}
					if (upcFilterBigImgVal != "") {
						baseHTML = upcFilterBigImgHTMLStart + "<img title=\"" + upcFilterNameVal + "\" alt=\"" + upcFilterNameVal + "\" id='panel2UPCFilterBigImg' class='panel_2_upc_filter_bigimg' src='" + clientImgBase + upcFilterBigImgVal + "'>" + upcFilterBigImgHTMLEnd;
					}
				}
				var upcFilterSmImgTagStart = baseHTML.indexOf("<!--PRODFILTERSMIMG");
				if (upcFilterSmImgTagStart != -1) {
					var upcFilterSmImgTagEnd = baseHTML.indexOf(">",upcFilterSmImgTagStart);
					var upcFilterSmImgTagStrip = baseHTML.substring(upcFilterSmImgTagStart,(upcFilterSmImgTagEnd+1));
					var upcFilterSmImgHTMLStart = baseHTML.substr(0,upcFilterSmImgTagStart);
					var upcFilterSmImgHTMLEnd = baseHTML.substr((upcFilterSmImgTagEnd+1));
					var upcFilterSmImgVal = "";
					var upcFilterNameVal = "";
					if (pariCol == 1 && APO == "") {
						for (n=0; n<catArray.length; n++) {
							if (catArray[n][0] == upcFilterArr[0][8]) {
								upcFilterSmImgVal = catArray[n][4];
								upcFilterNameVal = catArray[n][1];
							}
						}
					}
					else {
						upcFilterSmImgVal = upcFilterArr[0][5];
						upcFilterNameVal = upcFilterArr[0][2];
					}
					if (upcFilterSmImgVal != "") {
						baseHTML = upcFilterSmImgHTMLStart + "<img title=\"" + upcFilterNameVal + "\" alt=\"" + upcFilterNameVal + "\" id='panel2UPCFilterSmImg' class='panel_2_upc_filter_smimg' src='" + clientImgBase + upcFilterSmImgVal + "'>" + upcFilterSmImgHTMLEnd;
					}
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
					controlPanelButtonRender += "<div id='controlPanelButtonP2' class='control_panel_button_P2 control_panel_button_P2_off'";
					if (hoverState==1) {
						controlPanelButtonRender += " onmouseover='controlPanelButtonOver(\"P2\");' onfocus='controlPanelButtonOver(\"P2\");' onmouseout='controlPanelButtonOut(\"P2\");' onblur='controlPanelButtonOut(\"P2\");'";
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
					cpsP2 = 1;
					if (controlPanelSmallOpenStart != -1) {
						cpsP2 = 2;
					}
					baseHTML = controlPanelSmallHTMLStart + controlPanelSmallHTMLEnd;
				}
				var controlPanelTagStart = baseHTML.indexOf("<!--CONTROLPANEL");
				if (controlPanelTagStart != -1 && atlantis == 0) {
					var controlPanelTagEnd = baseHTML.indexOf(">",controlPanelTagStart);
					var controlPanelTagStrip = baseHTML.substring(controlPanelTagStart,(controlPanelTagEnd+1));
					var controlPanelHTMLStart = baseHTML.substr(0,controlPanelTagStart);
					var controlPanelHTMLEnd = baseHTML.substr((controlPanelTagEnd+1));
					var controlPanelHideStart = controlPanelTagStrip.indexOf(" HIDE");
					if (controlPanelHideStart != -1) {
						cpPH2 = 1;
					}
					var controlPanelMobileHideStart = controlPanelTagStrip.indexOf(" MOBILEHIDE");
					if (controlPanelMobileHideStart != -1) {
						cpPH2m = 1;
					}
					var controlPanelOpenStart = controlPanelTagStrip.indexOf(" OPEN");
					cpP2 = 1;
					if (controlPanelOpenStart != -1) {
						cpP2 = 2;
					}
					var controlPanelOpenStart = controlPanelTagStrip.indexOf(" LOCK");
					if (controlPanelOpenStart != -1) {
						cpP2Lock = 1;
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
				var orFoundArr = [];
				for (c=0; c<prodDisplayArray.length; c++) {
					for (p=0; p<onretProdArray.length; p++) {
						if (onretProdArray[p][2] == prodDisplayArray[c][0]) {
							orFoundArr.push(onretProdArray[p][1]);
						}
					}
				}
				var ocFoundArr = orFoundArr.filter( onlyUnique );
				var eCommButDisplay = "";
				var eCommButDisplayNone = " style='display:none'";
				var eCommButDisplayLoad = " style='display:none'";
				var eCommButDisplayAlt = " style='display:none'";
				if (ocFoundArr.length == 0) {
					if (numPost == 1) {
						eCommButDisplay = " style='display:none'";
						eCommButDisplayNone = " style='display:none'";
						eCommButDisplayLoad = "";
					}
					else {
						eCommButDisplay = " style='display:none'";
						eCommButDisplayAlt = "";
					}
				}
				var eCommCountSingularStart = eCommButTagStrip.indexOf(" SINGULAR=");
				if (eCommCountSingularStart != -1) {
					var eCommCountSingularEnd = eCommButTagStrip.indexOf("]",eCommCountSingularStart);
					panel2ECommCountSingularVar = " " + eCommButTagStrip.substring((eCommCountSingularStart+11),(eCommCountSingularEnd));
				}
				var eCommCountPluralStart = eCommButTagStrip.indexOf(" PLURAL=");
				if (eCommCountPluralStart != -1) {
					var eCommCountPluralEnd = eCommButTagStrip.indexOf("]",eCommCountPluralStart);
					panel2ECommCountPluralVar = " " + eCommButTagStrip.substring((eCommCountPluralStart+9),(eCommCountPluralEnd));
				}
				var eCommCountAltVar = "";
				var eCommCountAltStart = eCommButTagStrip.indexOf(" ALT=");
				if (eCommCountAltStart != -1) {
					var eCommCountAltEnd = eCommButTagStrip.indexOf("]",eCommCountAltStart);
					eCommCountAltVar = eCommButTagStrip.substring((eCommCountAltStart+6),(eCommCountAltEnd));
				}
				var eCommCountNoneVar = "NO PRODUCTS FOUND"
				var eCommCountNoneStart = eCommButTagStrip.indexOf(" NONE=");
				if (eCommCountNoneStart != -1) {
					var eCommCountNoneEnd = eCommButTagStrip.indexOf("]",eCommCountNoneStart);
					eCommCountNoneVar = " " + eCommButTagStrip.substring((eCommCountNoneStart+7),(eCommCountNoneEnd));
				}
				var eCommCountLoadVar = "LOADING..."
				var eCommCountLoadStart = eCommButTagStrip.indexOf(" LOAD=");
				if (eCommCountLoadStart != -1) {
					var eCommCountLoadEnd = eCommButTagStrip.indexOf("]",eCommCountLoadStart);
					eCommCountLoadVar = " " + eCommButTagStrip.substring((eCommCountLoadStart+7),(eCommCountLoadEnd));
				}
				if (ocFoundArr.length == 1) {
					var thisSCT = panel2ECommCountSingularVar;
				}
				else {
					var thisSCT = panel2ECommCountPluralVar;
				}
				eCommButRender = "<div id='panel2ECommButton' class='panel_2_ecomm_button panel_2_ecomm_button_off'";
				if (hoverState==1) {
					eCommButRender += " onmouseover='genericButtonOver(\"panel_2_ecomm_button\",\"panel_2_ecomm_button\");' onfocus='genericButtonOver(\"panel_2_ecomm_button\",\"panel_2_ecomm_button\");' onmouseout='genericButtonOut(\"panel_2_ecomm_button\",\"panel_2_ecomm_button\");' onblur='genericButtonOut(\"panel_2_ecomm_button\",\"panel_2_ecomm_button\");'";
				}
				eCommButRender += " onclick='showOnRet();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){showOnRet();}'" + eCommButDisplay + " tabindex='0' title=\"Online Retailers\"><span id='panel2ECommButNum'>" + ocFoundArr.length + "<\/span><span id='panel2ECommButText'>" +  thisSCT + "<\/span><\/div><div id='panel2ECommButtonNone' class='panel_2_ecomm_button_none'" + eCommButDisplayNone + "><span id='panel2ECommButNoneText'>" +  eCommCountNoneVar + "<\/span><\/div><div id='panel2ECommButtonLoad' class='panel_2_ecomm_button_none'" + eCommButDisplayLoad + "><span id='panel2ECommButLoadText'>" +  eCommCountLoadVar + "<\/span><\/div>";
				if (numPost == 0) {
					var altDsipVal = 1;
					if (document.getElementById('FULLPROD').value.length == document.getElementById('PROD').value.length) {
						altDsipVal = 0;
					}
					if (cPanelOp == 1 && altDsipVal == 1) {
						eCommButRender += "<div id='panel2ECommButtonAlt' class='panel_2_ecomm_button panel_2_ecomm_button panel_2_ecomm_button_off'";
						if (hoverState==1) {
							eCommButRender += " onmouseover='genericButtonOver(\"panel_2_ecomm_button\",\"panel_2_ecomm_button\");' onfocus='genericButtonOver(\"panel_2_ecomm_button\",\"panel_2_ecomm_button\");' onmouseout='genericButtonOut(\"panel_2_ecomm_button\",\"panel_2_ecomm_button\");' onblur='genericButtonOut(\"panel_2_ecomm_button\",\"panel_2_ecomm_button\");'";
						}
						eCommButRender += " onclick='controlPanelAllCart(1);' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){controlPanelAllCart(1);}'" + eCommButDisplayAlt + " tabindex='0' title=\"" + eCommCountAltVar + "\"><span id='panel2ECommAltText'>" + eCommCountAltVar + "<\/span><\/div>";
					}
					else if (altDsipVal == 1) {
						eCommButRender += "<span id='panel2ECommButtonAlt'></span>";
					}
				}
				baseHTML = eCommButHTMLStart + eCommButRender + eCommButHTMLEnd;
			}
			if (dealCommon == 1) {
				p2foundDeals = 0;
				if (storeDisplayArray.length || storeProdHoldArray.length) {
					if (storeDisplayArray[0]) {
						p2baseDealZip = storeDisplayArray[0][5];
					}
					else {
						p2baseDealZip = document.getElementById("revCodeZip").value;
					}
				}
				else {
					p2baseDealZip = document.getElementById("revCodeZip").value;
				}
				if (document.getElementById("revCodeCountry").value == "CA" || document.getElementById("revCodeCountry").value == "CAN") {
					p2baseDealZip = p2baseDealZip.substring(0,3);
					if(gLog==1){console.log("p2baseDealZip: ",p2baseDealZip);}
					for (d=0; d<thisDealOBJ.dealcount; d++) {
						for (dz=0; dz<thisDealOBJ.deal[d].zipcount; dz++) {
							if(gLog==1){console.log("Deal Check: ",p2baseDealZip,thisDealOBJ.deal[d].zip[dz].code.substring(0,3));}
							if (thisDealOBJ.deal[d].zip[dz].code.substring(0,3) == p2baseDealZip) {
								p2foundDeals++;
								break;
							}
						}
					}
				}
				else {
					if(gLog==1){console.log("p2baseDealZip: ",p2baseDealZip);}
					for (d=0; d<thisDealOBJ.dealcount; d++) {
						for (dz=0; dz<thisDealOBJ.deal[d].zipcount; dz++) {
							if (thisDealOBJ.deal[d].zip[dz].code == p2baseDealZip) {
								p2foundDeals++;
								break;
							}
						}
					}
				}
				p2dealPrevVal = "fa-angle-left";
				p2dealNextVal = "fa-angle-right";
				p2dealExFntawVal = "fa-times";
				p2dealExTxtVal = "";
				if (p2foundDeals != 0) {
					if(gLog==1){console.log("p2dealDisable = " + p2dealDisable);}
					if(gLog==1){console.log("Deals -- " + p2foundDeals + " Found");}
					var dealShellHTML = autotextIt(p0TemplateSet.panel2DealHoverDiv,"panel2DealHover");
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
									if (p2foundDeals == 1) {dealsText = dealSingularVar;}
									else {dealsText = dealPluralVar;}
								}
								dealShellHTML = dealCountHTMLStart + "<span class='panel_2_deal_shell_count'><span class='panel_2_deal_shell_count_num'>" + p2foundDeals + "<\/span>" + dealsText + "<\/span>" + dealCountHTMLEnd;
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
								dealShellHTML = dealBannerHTMLStart + "<img alt=\"Browse Deals\" class='panel_2_deal_shell_banner' src='" + clientImgBase + dLiteDealBanner + "'>" + dealBannerHTMLEnd;
							}
							else {
								dealShellHTML = dealBannerHTMLStart + dealBannerHTMLEnd;
							}
						}
						var linkBeginTagStart = dealShellHTML.indexOf("<!--LINKBEGIN");
						if (linkBeginTagStart != -1) {
							var linkBeginTagEnd = dealShellHTML.indexOf(">",linkBeginTagStart);
							var linkBeginHTMLStart = dealShellHTML.substr(0,linkBeginTagStart);
							var linkBeginHTMLEnd = dealShellHTML.substr((linkBeginTagEnd+1));
							dealShellHTML = linkBeginHTMLStart + "<span onclick='showDeals(\"" + p2baseDealZip + "\", \"" + document.getElementById("revCodeState").value + "\", \"" + document.getElementById("revCodeCountry").value + "\", \"" + p2dealPrevVal + "\", \"" + p2dealNextVal + "\", \"" + p2dealExFntawVal + "\", \"" + p2dealExTxtVal + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){showDeals(\"" + p2baseDealZip + "\", \"" + document.getElementById("revCodeState").value + "\", \"" + document.getElementById("revCodeCountry").value + "\", \"" + p2dealPrevVal + "\", \"" + p2dealNextVal + "\", \"" + p2dealExFntawVal + "\", \"" + p2dealExTxtVal + "\");}' tabindex='0' title=\"Visit Web Site\">" + linkBeginHTMLEnd;
						}
						var linkEndTagStart = dealShellHTML.indexOf("<!--LINKEND");
						if (linkEndTagStart != -1) {
							var linkEndTagEnd = dealShellHTML.indexOf(">",linkEndTagStart);
							var linkEndHTMLStart = dealShellHTML.substr(0,linkEndTagStart);
							var linkEndHTMLEnd = dealShellHTML.substr((linkEndTagEnd+1));
							dealShellHTML = linkEndHTMLStart + "<\/span>" + linkEndHTMLEnd;
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
					baseHTML = "<div id='panel2DealShell' class='panel_2_deal_shell' onclick='panel2CloseDealShell();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2CloseDealShell();}' tabindex='0' title=\"Close\"><div class='panel_2_deal_shell_liner'><div id='panel2DealShellContent' class='panel_2_deal_shell_content'>" + dealShellHTML + "<\/div><\/div><\/div>" + baseHTML;
				}
				else {
					if(gLog==1){console.log("Deals -- None Compiled");}
				}
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
					var sl = panel2SliderArray.length;
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
					panel2SliderArray[sl] = [sliderDivVal, sliderOnItalicVar, sliderOffItalicVar, 0];
					baseHTML = sliderHTMLStart + "<div id='panel2SliderWrap_" + sl + "' class='panel_2_slider_wrap'><div id='panel2SliderContainer_" + sl + "' class='panel_2_slider_container' onclick='panel2SliderControl(" + sl + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2SliderControl(" + sl + ");}' tabindex='0' title=\"" + sliderValueVal + "\"><i class='panel_2_slider_i panel_2_slider_i_" + sl + " " + sliderOffItalicVar + "'><\/i><div id='panel2SliderTitle_" + sl + "' class='panel_2_slider_title'>" + sliderValueVal + "<\/div><\/div><\/div>" + sliderHTMLEnd;
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
					var addFieldClearRender = "clearAddfield(2);";
				}
				else {
					var addFieldClearRender = "";
				}
				var addFieldRender = "";
				var addFieldValueStart = addFieldTagStrip.indexOf(" VALUE=");
				if (addFieldValueStart != -1) {
					var addFieldValueEnd = addFieldTagStrip.indexOf("]");
					var addFieldValueVal = addFieldTagStrip.substring((addFieldValueStart+8),(addFieldValueEnd));
					p2AddFieldValueVar = addFieldValueVal;
					var addFieldValueRender = " placeholder='"+addFieldValueVal+"'";
					var addFieldFocusRender = " onfocus='" + addFieldClearRender + "'";
					var addFieldBlurRender = "";
				}
				else {
					var p2AddFieldValueVar = "";
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
					var addFieldReqRender = " class='panel_2_address_field panel_2_address_field_base panel_2_required" + addFieldBlankRender + "'";
				}
				else {
					var addFieldReqRender = " class='panel_2_address_field panel_2_address_field_base" + addFieldBlankRender + "'";
				}
				var addFieldSubStart = addFieldTagStrip.indexOf(" SUBMIT");
				if (addFieldSubStart != -1) {
					var addFieldSubRender = " onkeyup='panel2FieldKeypress(event,\"panel2AddressField\",1);'";
				}
				else {
					var addFieldSubRender = "";
				}
				addFieldRender = "<input type='text' name='panel2AddressField' id='panel2AddressField'" + addFieldValueRender + addFieldFocusRender + addFieldBlurRender + addFieldReqRender + addFieldSubRender + " title=\"" + addFieldValueVal + "' aria-label='Enter a city, state, or postal code to find stores near you\">";
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
					var cityFieldFocusRender = " onfocus='fieldBlurFocus(\"panel2CityField\",\""+cityFieldValueVal+"\",1);'";
					var cityFieldBlurRender = " onblur='fieldBlurFocus(\"panel2CityField\",\""+cityFieldValueVal+"\",0);'";
				}
				else {
					cityFieldValueVar = "";
					var cityFieldValueRender = "";
					var cityFieldFocusRender = "";
					var cityFieldBlurRender = "";
				}
				var cityFieldReqStart = cityFieldTagStrip.indexOf(" REQUIRED");
				if (cityFieldReqStart != -1) {
					var cityFieldReqRender = " class='panel_2_city_field panel_2_city_field_base panel_2_required'";
				}
				else {
					var cityFieldReqRender = " class='panel_2_city_field panel_2_city_field_base'";
				}
				var cityFieldSubStart = cityFieldTagStrip.indexOf(" SUBMIT");
				if (cityFieldSubStart != -1) {
					var cityFieldSubRender = " onkeyup='panel2FieldKeypress(event,\"panel2CityField\",1);'";
				}
				else {
					var cityFieldSubRender = " onkeyup='panel2FieldKeypress(event,\"panel2CityField\",0);'";
				}
				cityFieldRender = "<input type='text' name='panel2CityField' id='panel2CityField'" + cityFieldValueRender + cityFieldFocusRender + cityFieldBlurRender + cityFieldReqRender + cityFieldSubRender + " title=\"City\">";
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
				stateFieldRender = "<input type='hidden' name='panel2StateField' id='panel2StateField' value='" + stateFieldValueVal + "'>";
				stateFieldRender += "<select name='panel2StateSelect' id='panel2StateSelect' class='panel_2_state_field panel_2_state_field_base' onchange='setSelect(\"panel2StateSelect\",\"panel2StateField\");' title=\"State\">" + stateFieldValueRender;
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
					var zipFieldReqRender = " class='panel_2_zip_field panel_2_zip_field_base panel_2_required'";
				}
				else {
					var zipFieldReqRender = " class='panel_2_zip_field panel_2_zip_field_base'";
				}
				var zipFieldSubStart = zipFieldTagStrip.indexOf(" SUBMIT");
				if (zipFieldSubStart != -1) {
					var zipFieldSubRender = " onkeyup='panel2FieldKeypress(event,\"panel2ZipField\",1);'";
				}
				else {
					var zipFieldSubRender = " onkeyup='panel2FieldKeypress(event,\"panel2ZipField\",0);'";
				}
				zipFieldRender = "<input type='text' name='panel2ZipField' id='panel2ZipField'" + zipFieldReqRender + zipFieldSubRender + " title=\"Postal Code\">";
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
				productSelectRender += "<select name='panel2ProductSelect' id='panel2ProductSelect' class='panel_2_product_select' onchange='setProductSelect(\"panel2ProductSelect\");'><option value='ALL'";
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
				scopeFieldRender = "<input type='hidden' name='panel2ScopeField' id='panel2ScopeField' value='" + scopeFieldValueVal + "' title=\"Scope\"><select name='panel2ScopeSelect' id='panel2ScopeSelect' class='panel_2_scope_field panel_2_scope_field_base' onchange='setSelect(\"panel2ScopeSelect\",\"panel2ScopeField\");panel2ScopeUpdate();'><option value='0'";
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
				distanceFieldRender = "<input type='hidden' name='panel2DistanceField' id='panel2DistanceField' value='" + distanceFieldValueVal + "' title=\"Distance\">";
				if (distanceDivValueVal == 0) {
					distanceFieldRender += "<select name='panel2DistanceSelect' id='panel2DistanceSelect' class='panel_2_distance_field panel_2_distance_field_base' onchange='setSelect(\"panel2DistanceSelect\",\"panel2DistanceField\");panel2DistanceUpdate();'>";
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
					distanceFieldRender += "<div id='panel2DistanceDivShell' class='panel_2_distance_div_shell'><div class='panel_2_distance_div_filter_arrow'><div class='panel_2_distance_div_filter panel_2_distance_div_filter_base panel_2_distance_div_filter_base_off'";
					if (hoverState==1) {
						distanceFieldRender += " onmouseover='genericButtonOver(\"panel_2_distance_div_filter\",\"panel_2_distance_div_filter_base\");' onfocus='genericButtonOver(\"panel_2_distance_div_filter\",\"panel_2_distance_div_filter_base\");' onmouseout='genericButtonOut(\"panel_2_distance_div_filter\",\"panel_2_distance_div_filter_base\");' onblur='genericButtonOut(\"panel_2_distance_div_filter\",\"panel_2_distance_div_filter_base\");'";
					}
					distanceFieldRender += " onclick='$(\".panel_2_distance_div_filter_slider\").toggle();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){$(\".panel_2_distance_div_filter_slider\").toggle();}' tabindex='0' title=\"" + distanceFieldValueVal + "\"><div class='panel_2_distance_div_filter_text'><span id='panel2DistanceDivNum'>" + distanceFieldValueVal + "<\/span> <span class='distancefield_miles_span'>" + distanceText + "<\/span> " + distanceFieldItalicVar + "<\/div><\/div><\/div><div class='panel_2_distance_div_filter_slider panel_close_me' style='display:none;'><div class='panel_2_distance_div_filter_liner'>";
					for (w=0; w<distanceFieldOptionsArray.length; w++) {
						distanceFieldRender += "<div class='panel_2_distance_div_filter_item_" + distanceFieldOptionsArray[w] + " panel_2_distance_div_filter_item panel_2_distance_div_filter_item_off'";
						if (hoverState==1) {
							distanceFieldRender += " onmouseover='genericButtonOver(\"panel_2_distance_div_filter_item_" + distanceFieldOptionsArray[w] + "\",\"panel_2_distance_div_filter_item\");' onfocus='genericButtonOver(\"panel_2_distance_div_filter_item_" + distanceFieldOptionsArray[w] + "\",\"panel_2_distance_div_filter_item\");' onmouseout='genericButtonOut(\"panel_2_distance_div_filter_item_" + distanceFieldOptionsArray[w] + "\",\"panel_2_distance_div_filter_item\");' onblur='genericButtonOut(\"panel_2_distance_div_filter_item_" + distanceFieldOptionsArray[w] + "\",\"panel_2_distance_div_filter_item\");'";
						}
						distanceFieldRender += " onclick='panel2DistanceUpdate(" + distanceFieldOptionsArray[w] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2DistanceUpdate(" + distanceFieldOptionsArray[w] + ");}' tabindex='0' title=\"" + distanceFieldOptionsArray[w] + " " + distanceText + "\">" + distanceFieldOptionsArray[w] + " " + distanceText + "<\/div>";
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
				resultsFieldRender += "<input type='hidden' name='panel2ResultsField' id='panel2ResultsField' value='" + resultsFieldValueVal + "' title=\"Results\"><select name='panel2ResultsSelect' id='panel2ResultsSelect' class='panel_2_results_field panel_2_results_field_base' onchange='setSelect(\"panel2ResultsSelect\",\"panel2ResultsField\");panel2ResultsUpdate();'><option value='10'";
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
					var sortFieldValueText = sortFieldOptionsArray[sortFieldValueVal][1];
				}
				else {
					var sortFieldValueVal = 0;
					var sortFieldValueText = sortFieldOptionsArray[0][1];
				}
				var sortDivValueStart = sortFieldTagStrip.indexOf(" DIVRENDER");
				if (sortDivValueStart != -1) {
					var sortDivValueVal = 1;
				}
				else {
					var sortDivValueVal = 0;
				}
				var sortFieldItalicStart = sortFieldTagStrip.indexOf(" FNTAW=");
				if (sortFieldItalicStart != -1) {
					var sortFieldItalicEnd = sortFieldTagStrip.indexOf("]",sortFieldItalicStart);
					sortFieldItalicVar = "<i class='fa " + sortFieldTagStrip.substring((sortFieldItalicStart+8),(sortFieldItalicEnd)) + "'><\/i>";
				}
				else {
					sortFieldItalicVar = "";
				}
				sortFieldRender = "<input type='hidden' name='panel2SortField' id='panel2SortField' value='" + sortDivValueVal + "' title=\"Sort Order\">";
				if (sortDivValueVal == 0) {
					sortFieldRender += "<select name='panel2SortSelect' id='panel2SortSelect' class='panel_2_sort_field panel_2_sort_field_base' onchange='panel2SetSortSelect(\"panel2SortSelect\",\"panel2SortField\");'><option value='0'";
					if (document.getElementById('sort').value == 0) {
						sortFieldRender += " selected='selected'";
					}
					sortFieldRender += ">Distance<\/option><option value='1'";
					if (document.getElementById('sort').value == 1) {
						sortFieldRender += " selected='selected'";
					}
					sortFieldRender += ">Store Name<\/option><\/select>";
				}
				else {
					sortFieldRender += "<div id='panel2SortDivShell' class='panel_2_sort_div_shell'><div class='panel_2_sort_div_filter_arrow'><div class='panel_2_sort_div_filter panel_2_sort_div_filter_base panel_2_sort_div_filter_base_off'";
					if (hoverState==1) {
						sortFieldRender += " onmouseover='genericButtonOver(\"panel_2_sort_div_filter\",\"panel_2_sort_div_filter_base\");' onfocus='genericButtonOver(\"panel_2_sort_div_filter\",\"panel_2_sort_div_filter_base\");' onmouseout='genericButtonOut(\"panel_2_sort_div_filter\",\"panel_2_sort_div_filter_base\");' onblur='genericButtonOut(\"panel_2_sort_div_filter\",\"panel_2_sort_div_filter_base\");'";
					}
					sortFieldRender += " onclick='$(\".panel_2_sort_div_filter_slider\").toggle();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){$(\".panel_2_sort_div_filter_slider\").toggle();}' tabindex='0' title=\"Sort\"><div class='panel_2_sort_div_filter_text'><span id='panel2SortDivNum'>" + sortFieldOptionsArray[document.getElementById('sort').value][1] + "<\/span> " + sortFieldItalicVar + "<\/div><\/div><\/div><div class='panel_2_sort_div_filter_slider panel_close_me' style='display:none;'><div class='panel_2_sort_div_filter_liner'>";
					for (w=0; w<sortFieldOptionsArray.length; w++) {
						sortFieldRender += "<div class='panel_2_sort_div_filter_item_" + sortFieldOptionsArray[w][0] + " panel_2_sort_div_filter_item panel_2_sort_div_filter_item_off'";
						if (hoverState==1) {
							sortFieldRender += " onmouseover='genericButtonOver(\"panel_2_sort_div_filter_item_" + sortFieldOptionsArray[w][0] + "\",\"panel_2_sort_div_filter_item\");' onfocus='genericButtonOver(\"panel_2_sort_div_filter_item_" + sortFieldOptionsArray[w][0] + "\",\"panel_2_sort_div_filter_item\");' onmouseout='genericButtonOut(\"panel_2_sort_div_filter_item_" + sortFieldOptionsArray[w][0] + "\",\"panel_2_sort_div_filter_item\");' onblur='genericButtonOut(\"panel_2_sort_div_filter_item_" + sortFieldOptionsArray[w][0] + "\",\"panel_2_sort_div_filter_item\");'";
					}
					sortFieldRender += " onclick='panel2SortDivUpdate(" + sortFieldOptionsArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2SortDivUpdate(" + sortFieldOptionsArray[w][0] + ");}' tabindex='0' title=\"" + sortFieldOptionsArray[w][1] + "\">" + sortFieldOptionsArray[w][1] + "<\/div>";
					}
					sortFieldRender += "<\/div><\/div><\/div>";
				}
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
				panel2HasCatMenu = 1;
				var catMenuValueStart = catMenuTagStrip.indexOf(" VALUE=");
				if (catMenuValueStart != -1) {
					var catMenuValueEnd = catMenuTagStrip.indexOf("]",catMenuValueStart);
					var catMenuValueVal = catMenuTagStrip.substring((catMenuValueStart+8),(catMenuValueEnd));
				}
				else {
					var catMenuValueVal = "SELECT A CATEGORY";
				}
				panel2CatMenuText = catMenuValueVal;
				panel2ThereIsACat = 0;
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
						panel2ThereIsACat = prodDisplayArray[pc][8];
						for (cc=0; cc<catArray.length; cc++) {
							if (catArray[cc][0] == panel2ThereIsACat) {
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
				catMenuRender += "<input type='hidden' name='panel2CatMenuHolder' id='panel2CatMenuHolder' value='" + panel2ThereIsACat + "' title=\"Selected Category\"><div id='panel2CatMenuShell' class='panel_2_cat_menu_div_shell'";
				if (panel2HasFamMenu == 1) {
					catMenuRender += " style='display:none;'";
				}
				catMenuRender += ">";
				if (catDivValueVal == 0) {
					catMenuRender += "<select name='panel2CatSelect' id='panel2CatSelect' class='panel_2_cat_field panel_2_cat_field_base' onchange='panel2SetCatSelect();'><option value='0'";
					if (panel2ThereIsACat == 0) {
						catMenuRender += " selected='selected'";
					}
					catMenuRender += ">" + panel2CatMenuText + "<\/option>";
					if (panel2HasFamMenu == 0) {
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
					catMenuRender += "<div class='panel_2_cat_menu_div_filter_arrow'><div class='panel_2_cat_menu_div_filter panel_2_cat_menu_div_filter_base panel_2_cat_menu_div_filter_base_off'";
					if (hoverState==1) {
						catMenuRender += " onmouseover='genericButtonOver(\"panel_2_cat_menu_div_filter\",\"panel_2_cat_menu_div_filter_base\");' onfocus='genericButtonOver(\"panel_2_cat_menu_div_filter\",\"panel_2_cat_menu_div_filter_base\");' onmouseout='genericButtonOut(\"panel_2_cat_menu_div_filter\",\"panel_2_cat_menu_div_filter_base\");' onblur='genericButtonOut(\"panel_2_cat_menu_div_filter\",\"panel_2_cat_menu_div_filter_base\");'";
					}
					catMenuRender += " onclick='$(\".panel_2_cat_menu_div_filter_slider\").toggle();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){$(\".panel_2_cat_menu_div_filter_slider\").toggle();}' tabindex='0' title=\"" + catMenuValueVal + "\"><div class='panel_2_cat_menu_div_filter_text'><span id='panel2CatMenuDisplay'>" + catMenuValueVal + "<\/span> " + catMenuItalicVar + "<\/div><\/div><\/div><div class='panel_2_cat_menu_div_filter_slider panel_close_me' style='display:none;'><div class='panel_2_cat_menu_div_filter_liner' id='panel2CatMenuContent'>";
					if (panel2HasFamMenu == 0) {
						for (c=0; c<catArray.length; c++) {
							catMenuRender += "<div class='panel_2_cat_menu_div_filter_item_" + catArray[c][0] + " panel_2_cat_menu_div_filter_item panel_2_cat_menu_div_filter_item_off'";
							if (hoverState==1) {
								catMenuRender += " onmouseover='genericButtonOver(\"panel_2_cat_menu_div_filter_item_" + catArray[c][0] + "\",\"panel_2_cat_menu_div_filter_item\");' onfocus='genericButtonOver(\"panel_2_cat_menu_div_filter_item_" + catArray[c][0] + "\",\"panel_2_cat_menu_div_filter_item\");' onmouseout='genericButtonOut(\"panel_2_cat_menu_div_filter_item_" + catArray[c][0] + "\",\"panel_2_cat_menu_div_filter_item\");' onblur='genericButtonOut(\"panel_2_cat_menu_div_filter_item_" + catArray[c][0] + "\",\"panel_2_cat_menu_div_filter_item\");'";
							}
							catMenuRender += " onclick='panel2CatMenuSelect(" + catArray[c][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2CatMenuSelect(" + catArray[c][0] + ");}' tabindex='0' title=\"" + catArray[c][1] + "\">" + catArray[c][1] + "<\/div>";
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
				panel2HasProdMenu = 1;
				var prodMenuValueStart = prodMenuTagStrip.indexOf(" VALUE=");
				if (prodMenuValueStart != -1) {
					var prodMenuValueEnd = prodMenuTagStrip.indexOf("]",prodMenuValueStart);
					var prodMenuValueVal = prodMenuTagStrip.substring((prodMenuValueStart+8),(prodMenuValueEnd));
				}
				else {
					var prodMenuValueVal = "SELECT A PRODUCT";
				}
				panel2ProdMenuText = prodMenuValueVal;
				panel2ThereIsAProd = "";
				if (panel2ThereIsACat != 0) {
					prodMenuArray = [];
					for (p=0; p<prodDisplayArray.length; p++) {
						if (prodDisplayArray[p][8] == panel2ThereIsACat) {
							prodMenuArray.push(prodDisplayArray[p][1]);
						}
					}
					panel2ProdAllList = prodMenuArray.toString();
				}
				for (pc=0; pc<prodDisplayArray.length; pc++) {
					if (prodDisplayArray[pc][1] == document.getElementById('PROD').value) {
						panel2ThereIsAProd = prodDisplayArray[pc][1];
						prodMenuValueVal = prodDisplayArray[pc][2];
						break;
					}
				}
				if (panel2ProdAllList == document.getElementById('PROD').value) {
					panel2ThereIsAProd = 999999;
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
					panel2ProdMenuAllVar = prodMenuTagStrip.substring((prodMenuAllStart+6),(prodMenuAllEnd));
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
					panel2ProdGoValueVal = 1;
				}
				prodMenuRender += "<input type='hidden' name='panel2ProdMenuHolder' id='panel2ProdMenuHolder' value='" + panel2ThereIsAProd + "' title=\"Selected Product\"><div id='panel2ProdMenuShell' class='panel_2_prod_menu_div_shell'";
				if (panel2HasCatMenu == 1 && panel2ThereIsAProd == "") {
					prodMenuRender += " style='display:none;'";
				}
				prodMenuRender += ">";
				if (prodDivValueVal == 0) {
					prodMenuRender += "<select name='panel2ProdSelect' id='panel2ProdSelect' class='panel_2_prod_field panel_2_prod_field_base' onchange='panel2SetProdSelect(" + panel2ProdGoValueVal + ");'>";
					prodMenuRender += "<option value='0'";
					if (panel2ThereIsAProd == 0) {
						prodMenuRender += " selected='selected'";
					}
					prodMenuRender += ">" + panel2ProdMenuText + "<\/option>";
					if (panel2HasCatMenu == 0) {
						for (p=0; p<prodDisplayArray.length; p++) {
							prodMenuRender += "<option value='" + prodDisplayArray[p][0] + "'";
							if (prodMenuValueVal == prodDisplayArray[p][2]) {
								prodMenuRender += " selected='selected'";
							}
							prodMenuRender += ">" + prodDisplayArray[p][2] + "<\/option>";
						}
					}
					else if (panel2ThereIsACat != 0) {
						if (panel2ProdMenuAllVar != "") {
							prodMenuRender += "<option value='999999'";
							if (panel2ThereIsAProd == 999999) {
								prodMenuRender += " selected='selected'";
							}
							prodMenuRender += ">" + panel2ProdMenuAllVar + "<\/option>";
						}
						for (p=0; p<prodDisplayArray.length; p++) {
							if (prodDisplayArray[p][8] == panel2ThereIsACat) {
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
					prodMenuRender += "<div class='panel_2_prod_menu_div_filter_arrow'><div class='panel_2_prod_menu_div_filter panel_2_prod_menu_div_filter_base panel_2_prod_menu_div_filter_base_off'";
					if (hoverState==1) {
						prodMenuRender += " onmouseover='genericButtonOver(\"panel_2_prod_menu_div_filter\",\"panel_2_prod_menu_div_filter_base\");' onfocus='genericButtonOver(\"panel_2_prod_menu_div_filter\",\"panel_2_prod_menu_div_filter_base\");' onmouseout='genericButtonOut(\"panel_2_prod_menu_div_filter\",\"panel_2_prod_menu_div_filter_base\");' onblur='genericButtonOut(\"panel_2_prod_menu_div_filter\",\"panel_2_prod_menu_div_filter_base\");'";
					}
					prodMenuRender += " onclick='$(\".panel_2_prod_menu_div_filter_slider\").toggle();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){$(\".panel_2_prod_menu_div_filter_slider\").toggle();}' tabindex='0' title=\"" + panel2ProdMenuAllVar + "\"><div class='panel_2_prod_menu_div_filter_text'><span id='panel2ProdMenuDisplay'>";
					if (panel2ThereIsAProd == 999999) {
						prodMenuRender += panel2ProdMenuAllVar;
					}
					else {
						prodMenuRender += prodMenuValueVal
					}
					prodMenuRender += "<\/span> " + prodMenuItalicVar + "<\/div><\/div><\/div><div class='panel_2_prod_menu_div_filter_slider panel_close_me' style='display:none;'><div class='panel_2_prod_menu_div_filter_liner' id='panel2ProdMenuContent'>";
					if (panel2HasCatMenu == 0) {
						for (p=0; p<prodDisplayArray.length; p++) {
							prodMenuRender += "<div class='panel_2_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + " panel_2_prod_menu_div_filter_item panel_2_prod_menu_div_filter_item_off'";
							if (hoverState==1) {
								prodMenuRender += " onmouseover='genericButtonOver(\"panel_2_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_2_prod_menu_div_filter_item\");' onfocus='genericButtonOver(\"panel_2_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_2_prod_menu_div_filter_item\");' onmouseout='genericButtonOut(\"panel_2_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_2_prod_menu_div_filter_item\");' onblur='genericButtonOut(\"panel_2_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_2_prod_menu_div_filter_item\");'";
							}
							prodMenuRender += " onclick='panel2ProdMenuSelect(" + prodDisplayArray[p][0] + "," + panel2ProdGoValueVal + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2ProdMenuSelect(" + prodDisplayArray[p][0] + "," + panel2ProdGoValueVal + ");}' tabindex='0' title=\"" + prodDisplayArray[p][2] + "\">" + prodDisplayArray[p][2] + "<\/div>";
						}
					}
					else if (panel2ThereIsACat != 0) {
						if (panel2ProdMenuAllVar != "") {
							prodMenuRender += "<div class='panel_2_prod_menu_div_filter_item_999999 panel_2_prod_menu_div_filter_item panel_2_prod_menu_div_filter_item_off'";
							if (hoverState==1) {
								prodMenuRender += " onmouseover='genericButtonOver(\"panel_2_prod_menu_div_filter_item_999999\",\"panel_2_prod_menu_div_filter_item\");' onfocus='genericButtonOver(\"panel_2_prod_menu_div_filter_item_999999\",\"panel_2_prod_menu_div_filter_item\");' onmouseout='genericButtonOut(\"panel_2_prod_menu_div_filter_item_999999\",\"panel_2_prod_menu_div_filter_item\");' onblur='genericButtonOut(\"panel_2_prod_menu_div_filter_item_999999\",\"panel_2_prod_menu_div_filter_item\");'";
							}
							prodMenuRender += " onclick='panel2ProdMenuSelect(999999," + panel2ProdGoValueVal + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2ProdMenuSelect(999999," + panel2ProdGoValueVal + ");}' tabindex='0' title=\"" + panel2ProdMenuAllVar + "\">" + panel2ProdMenuAllVar + "<\/div>";
						}
						for (p=0; p<prodDisplayArray.length; p++) {
							if (prodDisplayArray[p][8] == panel2ThereIsACat) {
								prodMenuRender += "<div class='panel_2_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + " panel_2_prod_menu_div_filter_item panel_2_prod_menu_div_filter_item_off'";
								if (hoverState==1) {
									prodMenuRender += " onmouseover='genericButtonOver(\"panel_2_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_2_prod_menu_div_filter_item\");' onfocus='genericButtonOver(\"panel_2_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_2_prod_menu_div_filter_item\");' onmouseout='genericButtonOut(\"panel_2_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_2_prod_menu_div_filter_item\");' onblur='genericButtonOut(\"panel_2_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_2_prod_menu_div_filter_item\");'";
								}
								prodMenuRender += " onclick='panel2ProdMenuSelect(" + prodDisplayArray[p][0] + "," + panel2ProdGoValueVal + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2ProdMenuSelect(" + prodDisplayArray[p][0] + "," + panel2ProdGoValueVal + ");}' tabindex='0' title=\"" + prodDisplayArray[p][2] + "\">" + prodDisplayArray[p][2] + "<\/div>";
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
				prodSubButtonRender += "<div id='panel2ProdSubmitButton' class='panel_2_prod_submit_button panel_2_prod_submit_button_off'";
				if (hoverState==1) {
					prodSubButtonRender += " onmouseover='panel2ButtonHover(\"panel2ProdSubmitButton\",\"panel_2_prod_submit_button\",1);' onfocus='panel2ButtonHover(\"panel2ProdSubmitButton\",\"panel_2_prod_submit_button\",1);' onmouseout='panel2ButtonHover(\"panel2ProdSubmitButton\",\"panel_2_prod_submit_button\",0);' onblur='panel2ButtonHover(\"panel2ProdSubmitButton\",\"panel_2_prod_submit_button\",0);'";
				}
				prodSubButtonRender += " onclick='panel2SubmitForm();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2SubmitForm();}'";
				if (panel2ThereIsAProd == "") {
					prodSubButtonRender += " style='display:none;'";
				}
				prodSubButtonRender += " tabindex='0' title=\"" + prodSubButtonValueVar + "\">" + prodSubButtonItalicVar + prodSubButtonValueVar + "<\/div>";
				baseHTML = prodSubButtonHTMLStart + prodSubButtonRender + prodSubButtonHTMLEnd;
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
				submitButtonRender += "<div id='panel2SubmitButton' class='panel_2_submit_button panel_2_submit_button_off'";
				if (hoverState==1) {
					submitButtonRender += " onmouseover='panel2ButtonHover(\"panel2SubmitButton\",\"panel_2_submit_button\",1);' onfocus='panel2ButtonHover(\"panel2SubmitButton\",\"panel_2_submit_button\",1);' onmouseout='panel2ButtonHover(\"panel2SubmitButton\",\"panel_2_submit_button\",0);' onblur='panel2ButtonHover(\"panel2SubmitButton\",\"panel_2_submit_button\",0);'";
				}
				submitButtonRender += " onclick='panel2SubmitForm();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2SubmitForm();}' tabindex='0' title=\"" + submitButtonValueVar + "\">" + submitButtonItalicVar + submitButtonValueVar + "<\/div>";
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
					p2GeoLocButtonSubmitVar = 1;
				}
				var geoLocButtonItalicStart = geoLocButtonTagStrip.indexOf(" FNTAW=");
				if (geoLocButtonItalicStart != -1) {
					var geoLocButtonItalicEnd = geoLocButtonTagStrip.indexOf("]",geoLocButtonItalicStart);
					var geoLocButtonItalicVar = "<i class='fa " + geoLocButtonTagStrip.substring((geoLocButtonItalicStart+8),(geoLocButtonItalicEnd)) + "'><\/i>";
				}
				else {
					var geoLocButtonItalicVar = "";
				}
				geoLocButtonRender += "<div id='panel2GeoLocButton' class='panel_2_geo_loc_button panel_2_geo_loc_button_off'";
				if (hoverState==1) {
					geoLocButtonRender += " onmouseover='panel2ButtonHover(\"panel2GeoLocButton\",\"panel_2_geo_loc_button\",1);' onfocus='panel2ButtonHover(\"panel2GeoLocButton\",\"panel_2_geo_loc_button\",1);' onmouseout='panel2ButtonHover(\"panel2GeoLocButton\",\"panel_2_geo_loc_button\",0);' onblur='panel2ButtonHover(\"panel2GeoLocButton\",\"panel_2_geo_loc_button\",0);'";
				}
				geoLocButtonRender += " onclick='geoNearbyCheck(\"panel2AddressField\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){geoNearbyCheck(\"panel2AddressField\");}' tabindex='0' title=\"" + geoLocButtonValueVar + "\">" + geoLocButtonItalicVar + geoLocButtonValueVar + "<\/div>";
				baseHTML = geoLocButtonHTMLStart + geoLocButtonRender + geoLocButtonHTMLEnd;
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
				var prevTenButtonNoHideStart = prevTenButtonTagStrip.indexOf(" NOHIDE");
				if (prevTenButtonNoHideStart != -1) {
					var prevTenButtonNoHideVar = 1;
				}
				else {
					var prevTenButtonNoHideVar = 0;
				}
				var prevTenButtonItalicStart = prevTenButtonTagStrip.indexOf(" FNTAW=");
				if (prevTenButtonItalicStart != -1) {
					var prevTenButtonItalicEnd = prevTenButtonTagStrip.indexOf("]",prevTenButtonItalicStart);
					var prevTenButtonItalicVar = "<i class='fa " + prevTenButtonTagStrip.substring((prevTenButtonItalicStart+8),(prevTenButtonItalicEnd)) + "'><\/i>";
				}
				else {
					var prevTenButtonItalicVar = "";
				}
				if (prevTenButtonNoHideVar == 0) {
					var prevTenShow = " style='display:none;'";
					var prevTenHideClass = "_off";
				}
				else {
					var prevTenShow = "";
					var prevTenHideClass = "_inactive";
				}
				prevTenButtonRender += "<div" + prevTenShow + " id='panel2PrevButton' class='panel_2_prev_button panel_2_prev_button" + prevTenHideClass + "'";
				if (hoverState==1) {
					prevTenButtonRender += " onmouseover='panel2ButtonHover(\"panel2PrevButton\",\"panel_2_prev_button\",1);' onfocus='panel2ButtonHover(\"panel2PrevButton\",\"panel_2_prev_button\",1);' onmouseout='panel2ButtonHover(\"panel2PrevButton\",\"panel_2_prev_button\",0);' onblur='panel2ButtonHover(\"panel2PrevButton\",\"panel_2_prev_button\",0);'";
				}
				prevTenButtonRender += " onclick='panel2PrevTen(" + prevTenButtonNoHideVar + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2PrevTen(" + prevTenButtonNoHideVar + ");}' tabindex='0' title=\"" + prevTenButtonValueVar + "\">" + prevTenButtonItalicVar + prevTenButtonValueVar + "<\/div>";
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
				var nextTenButtonNoHideStart = nextTenButtonTagStrip.indexOf(" NOHIDE");
				if (nextTenButtonNoHideStart != -1) {
					var nextTenButtonNoHideVar = 1;
				}
				else {
					var nextTenButtonNoHideVar = 0;
				}
				var nextTenButtonItalicStart = nextTenButtonTagStrip.indexOf(" FNTAW=");
				if (nextTenButtonItalicStart != -1) {
					var nextTenButtonItalicEnd = nextTenButtonTagStrip.indexOf("]",nextTenButtonItalicStart);
					var nextTenButtonItalicVar = "<i class='fa " + nextTenButtonTagStrip.substring((nextTenButtonItalicStart+8),(nextTenButtonItalicEnd)) + "'><\/i>";
				}
				else {
					var nextTenButtonItalicVar = "";
				}
				var nextNum = new Number(document.getElementById('results').value);
				if (nextTenButtonNoHideVar == 0) {
					if (storeDisplayArray.length <= nextNum) {
						var nextTenShow = " style='display:none;'";
					}
					else {
						var nextTenShow = "";
					}
					var nextTenHideClass = "_off";
				}
				else {
					if (storeDisplayArray.length <= nextNum) {
						var nextTenHideClass = "_inactive";
					}
					else {
						var nextTenHideClass = "_off";
					}
					var nextTenShow = "";
				}
				nextTenButtonRender += "<div id='panel2NextButton'" + nextTenShow + " class='panel_2_next_button panel_2_next_button" + nextTenHideClass + "'";
				if (hoverState==1) {
					nextTenButtonRender += " onmouseover='panel2ButtonHover(\"panel2NextButton\",\"panel_2_next_button\",1);' onfocus='panel2ButtonHover(\"panel2NextButton\",\"panel_2_next_button\",1);' onmouseout='panel2ButtonHover(\"panel2NextButton\",\"panel_2_next_button\",0);' onblur='panel2ButtonHover(\"panel2NextButton\",\"panel_2_next_button\",0);'";
				}
				nextTenButtonRender += " onclick='panel2NextTen(" + nextTenButtonNoHideVar + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2NextTen(" + nextTenButtonNoHideVar + ");}' tabindex='0' title=\"" + nextTenButtonValueVar + "\">" + nextTenButtonItalicVar + nextTenButtonValueVar + "<\/div>";
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
				backButtonRender += "<div id='panel2BackButton' class='panel_2_back_button panel_2_back_button_off'";
				if (hoverState==1) {
					backButtonRender += " onmouseover='panel2ButtonHover(\"panel2BackButton\",\"panel_2_back_button\",1);' onfocus='panel2ButtonHover(\"panel2BackButton\",\"panel_2_back_button\",1);' onmouseout='panel2ButtonHover(\"panel2BackButton\",\"panel_2_back_button\",0);' onblur='panel2ButtonHover(\"panel2BackButton\",\"panel_2_back_button\",0);'";
				}
				if (PEC != 0 && PECPROD != "") {
					backButtonRender += " style='display:none;'";
				}
				backButtonRender += " onclick='panel2Back(\""+backButtonPanelVar+"\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2Back(\""+backButtonPanelVar+"\");}' tabindex='0' title=\"" + backButtonValueVar + "\">" + backButtonItalicVar + backButtonValueVar + "<\/div>";
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
					var buttonBackPanelVar = "panel1";
				}
				var buttonBackItalicStart = buttonBackTagStrip.indexOf(" FNTAW=");
				var buttonBackItalicEnd = buttonBackTagStrip.indexOf("]",buttonBackItalicStart);
				if (buttonBackItalicStart != -1) {
					var buttonBackItalicVar = "<i class='fa " + buttonBackTagStrip.substring((buttonBackItalicStart+8),(buttonBackItalicEnd)) + "'><\/i>";
				}
				else {
					var buttonBackItalicVar = "";
				}
				buttonBackRender += "<div id='panel2ButtonBack' class='panel_2_button_back panel_2_button_back_off'";
				if (hoverState==1) {
					buttonBackRender += " onmouseover='panel2ButtonHover(\"panel2ButtonBack\",\"panel_2_button_back\",1);' onfocus='panel2ButtonHover(\"panel2ButtonBack\",\"panel_2_button_back\",1);' onmouseout='panel2ButtonHover(\"panel2ButtonBack\",\"panel_2_button_back\",0);' onblur='panel2ButtonHover(\"panel2ButtonBack\",\"panel_2_button_back\",0);'";
				}
				if (PEC != 0 && PECPROD != "") {
					backButtonRender += " style='display:none;'";
				}
				buttonBackRender += " onclick='panel2Back(\""+buttonBackPanelVar+"\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2Back(\""+buttonBackPanelVar+"\");}' tabindex='0' title=\"" + buttonBackValueVar + "\">" + buttonBackItalicVar + buttonBackValueVar + "<\/div>";
				baseHTML = buttonBackHTMLStart + buttonBackRender + buttonBackHTMLEnd;
			}
			var emailFieldTagStart = baseHTML.indexOf("<!--EMAILFIELD");
			if (emailFieldTagStart != -1) {
				var emailFieldTagEnd = baseHTML.indexOf(">",emailFieldTagStart);
				var emailFieldTagStrip = baseHTML.substring(emailFieldTagStart,(emailFieldTagEnd+1));
				var emailFieldHTMLStart = baseHTML.substr(0,emailFieldTagStart);
				var emailFieldHTMLEnd = baseHTML.substr((emailFieldTagEnd+1));
				var emailFieldRender = "";
				var emailFieldValueStart = emailFieldTagStrip.indexOf(" VALUE=");
				var emailFieldValueEnd = emailFieldTagStrip.indexOf("]");
				if (emailFieldValueStart != -1) {
					var emailFieldValueVal = emailFieldTagStrip.substring((emailFieldValueStart+8),(emailFieldValueEnd));
					var emailFieldValueVar = emailFieldValueVal;
					var emailFieldValueRender = " value='"+emailFieldValueVal+"'";
					var emailFieldFocusRender = " onfocus='fieldBlurFocus(\"panel2EmailField\",\""+emailFieldValueVal+"\",1);'";
					var emailFieldBlurRender = " onblur='fieldBlurFocus(\"panel2EmailField\",\""+emailFieldValueVal+"\",0);'";
				}
				else {
					var emailFieldValueVar = "";
					var emailFieldValueRender = "";
					var emailFieldFocusRender = "";
					var emailFieldBlurRender = "";
				}
				var emailFieldSubStart = emailFieldTagStrip.indexOf(" SUBMIT");
				if (emailFieldSubStart != -1) {
					var emailFieldSubRender = " onkeyup='panel2EmailKeypress(event,\"panel2EmailField\",1);'";
				}
				else {
					var emailFieldSubRender = " onkeyup='panel2EmailKeypress(event,\"panel2EmailField\",0);'";
				}
				emailFieldRender = "<input type='email' name='panel2EmailField' id='panel2EmailField' class='panel_2_email_field panel_2_email_field_base'" + emailFieldValueRender + emailFieldFocusRender + emailFieldBlurRender + emailFieldSubRender + " title=\"Email\">";
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
				emailButtonRender += "<div id='panel2EmailButton' class='panel_2_email_button panel_2_email_button_off'";
				if (hoverState==1) {
					emailButtonRender += " onmouseover='panel2ButtonHover(\"panel2EmailButton\",\"panel_2_email_button\",1);' onfocus='panel2ButtonHover(\"panel2EmailButton\",\"panel_2_email_button\",1);' onmouseout='panel2ButtonHover(\"panel2EmailButton\",\"panel_2_email_button\",0);' onblur='panel2ButtonHover(\"panel2EmailButton\",\"panel_2_email_button\",0);'";
				}
				emailButtonRender += " onclick='panel2Email();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2Email();}' tabindex='0' title=\"" + emailButtonValueVar + "\">" + emailButtonItalicVar + emailButtonValueVar + "<\/div>";
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
				printButtonRender += "<div id='panel2PrintButton' class='panel_2_print_button panel_2_print_button_off'";
				if (hoverState==1) {
					printButtonRender += " onmouseover='panel2ButtonHover(\"panel2PrintButton\",\"panel_2_print_button\",1);' onfocus='panel2ButtonHover(\"panel2PrintButton\",\"panel_2_print_button\",1);' onmouseout='panel2ButtonHover(\"panel2PrintButton\",\"panel_2_print_button\",0);' onblur='panel2ButtonHover(\"panel2PrintButton\",\"panel_2_print_button\",0);'";
				}
				printButtonRender += " onclick='panel2Print();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2Print();}' tabindex='0' title=\"" + printButtonValueVar + "\">" + printButtonItalicVar + printButtonValueVar + "<\/div>";
				baseHTML = printButtonHTMLStart + printButtonRender + printButtonHTMLEnd;
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
				ccreqButtonRender += "<div id='panel2CCReqButton' class='panel_2_ccreq_button panel_2_ccreq_button_off'";
				if (hoverState==1) {
					ccreqButtonRender += " onmouseover='panel2ButtonHover(\"panel2CCReqButton\",\"panel_2_ccreq_button\",1);' onfocus='panel2ButtonHover(\"panel2CCReqButton\",\"panel_2_ccreq_button\",1);' onmouseout='panel2ButtonHover(\"panel2CCReqButton\",\"panel_2_ccreq_button\",0);' onblur='panel2ButtonHover(\"panel2CCReqButton\",\"panel_2_ccreq_button\",0);'";
				}
				ccreqButtonRender += " onclick='panel2CCReq();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2CCReq();}' tabindex='0' title=\"" + ccreqButtonValueVar + "\">" + ccreqButtonItalicVar + ccreqButtonValueVar + "<\/div>";
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
				storeButtonRender += "<div id='panel2StoreButton' class='panel_2_store_button panel_2_store_button_off'";
				if (hoverState==1) {
					storeButtonRender += " onmouseover='panel2ButtonHover(\"panel2StoreButton\",\"panel_2_store_button\",1);' onfocus='panel2ButtonHover(\"panel2StoreButton\",\"panel_2_store_button\",1);' onmouseout='panel2ButtonHover(\"panel2StoreButton\",\"panel_2_store_button\",0);' onblur='panel2ButtonHover(\"panel2StoreButton\",\"panel_2_store_button\",0);'";
				}
				storeButtonRender += " onclick='panel2Store();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2Store();}' tabindex='0' title=\"" + storeButtonValueVar + "\">" + storeButtonItalicVar + storeButtonValueVar + "<\/div>";
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
				rtreqButtonRender += "<div id='panel2RTReqButton' class='panel_2_rtreq_button panel_2_rtreq_button_off'";
				if (hoverState==1) {
					rtreqButtonRender += " onmouseover='panel2ButtonHover(\"panel2RTReqButton\",\"panel_2_rtreq_button\",1);' onfocus='panel2ButtonHover(\"panel2RTReqButton\",\"panel_2_rtreq_button\",1);' onmouseout='panel2ButtonHover(\"panel2RTReqButton\",\"panel_2_rtreq_button\",0);' onblur='panel2ButtonHover(\"panel2RTReqButton\",\"panel_2_rtreq_button\",0);'";
				}
				rtreqButtonRender += " onclick='panel2RTReq();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2RTReq();}' tabindex='0' title=\"" + rtreqButtonValueVar + "\">" + rtreqButtonItalicVar + rtreqButtonValueVar + "<\/div>";
				baseHTML = rtreqButtonHTMLStart + rtreqButtonRender + rtreqButtonHTMLEnd;
			}
			var prodwidgButtonTagStart = baseHTML.indexOf("<!--PRODWIDGBUTTON");
			if (prodwidgButtonTagStart != -1) {
				var prodwidgButtonTagEnd = baseHTML.indexOf(">",prodwidgButtonTagStart);
				var prodwidgButtonTagStrip = baseHTML.substring(prodwidgButtonTagStart,(prodwidgButtonTagEnd+1));
				var prodwidgButtonHTMLStart = baseHTML.substr(0,prodwidgButtonTagStart);
				var prodwidgButtonHTMLEnd = baseHTML.substr((prodwidgButtonTagEnd+1));
				var prodwidgButtonRender = "";
				var prodwidgButtonValueStart = prodwidgButtonTagStrip.indexOf(" VALUE=");
				if (prodwidgButtonValueStart != -1) {
					var prodwidgButtonValueEnd = prodwidgButtonTagStrip.indexOf("]",prodwidgButtonValueStart);
					var prodwidgButtonValueVar = prodwidgButtonTagStrip.substring((prodwidgButtonValueStart+8),(prodwidgButtonValueEnd));
				}
				else {
					var prodwidgButtonValueVar = "PRODUCTS";
				}
				var prodwidgButtonItalicStart = prodwidgButtonTagStrip.indexOf(" FNTAW=");
				if (prodwidgButtonItalicStart != -1) {
					var prodwidgButtonItalicEnd = prodwidgButtonTagStrip.indexOf("]",prodwidgButtonItalicStart);
					var prodwidgButtonItalicVar = "<i class='fa " + prodwidgButtonTagStrip.substring((prodwidgButtonItalicStart+8),(prodwidgButtonItalicEnd)) + "'><\/i>";
				}
				else {
					var prodwidgButtonItalicVar = "";
				}
				prodwidgButtonRender += "<div id='panel2ProdWidgButton' class='panel_2_prodwidg_button panel_2_prodwidg_button_off'";
				if (hoverState==1) {
					prodwidgButtonRender += " onmouseover='panel2ButtonHover(\"panel2ProdWidgButton\",\"panel_2_prodwidg_button\",1);' onfocus='panel2ButtonHover(\"panel2ProdWidgButton\",\"panel_2_prodwidg_button\",1);' onmouseout='panel2ButtonHover(\"panel2ProdWidgButton\",\"panel_2_prodwidg_button\",0);' onblur='panel2ButtonHover(\"panel2ProdWidgButton\",\"panel_2_prodwidg_button\",0);'";
				}
				prodwidgButtonRender += " onclick='panel2ProdWidg();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2ProdWidg();}' tabindex='0' title=\"" + prodwidgButtonValueVar + "\">" + prodwidgButtonItalicVar + prodwidgButtonValueVar + "<\/div>";
				baseHTML = prodwidgButtonHTMLStart + prodwidgButtonRender + prodwidgButtonHTMLEnd;
			}
			var resultsStartTagStart = baseHTML.indexOf("<!--RESULTSSTART");
			if (resultsStartTagStart != -1) {
				var resultsStartTagEnd = baseHTML.indexOf(">",resultsStartTagStart);
				var resultsStartTagStrip = baseHTML.substring(resultsStartTagStart,(resultsStartTagEnd+1));
				var resultsStartHTMLStart = baseHTML.substr(0,resultsStartTagStart);
				var resultsStartHTMLEnd = baseHTML.substr((resultsStartTagEnd+1));
				var resultsStartPage = resultsStartTagStrip.indexOf(" PAGE");
				if (resultsStartPage != -1) {
					panel2ResultsStartPage = 1;
				}
				baseHTML = resultsStartHTMLStart + "<span id='panel2ResultsStart'><\/span>" + resultsStartHTMLEnd;
			}
			var resultsEndTagStart = baseHTML.indexOf("<!--RESULTSEND");
			if (resultsEndTagStart != -1) {
				var resultsEndTagEnd = baseHTML.indexOf(">",resultsEndTagStart);
				var resultsEndHTMLStart = baseHTML.substr(0,resultsEndTagStart);
				var resultsEndHTMLEnd = baseHTML.substr((resultsEndTagEnd+1));
				baseHTML = resultsEndHTMLStart + "<span id='panel2ResultsEnd'><\/span>" + resultsEndHTMLEnd;
			}
			var resultsTotalTagStart = baseHTML.indexOf("<!--RESULTSTOTAL");
			if (resultsTotalTagStart != -1) {
				var resultsTotalTagEnd = baseHTML.indexOf(">",resultsTotalTagStart);
				var resultsTotalTagStrip = baseHTML.substring(resultsTotalTagStart,(resultsTotalTagEnd+1));
				var resultsTotalHTMLStart = baseHTML.substr(0,resultsTotalTagStart);
				var resultsTotalHTMLEnd = baseHTML.substr((resultsTotalTagEnd+1));
				var resultsTotalPage = resultsTotalTagStrip.indexOf(" PAGE");
				if (resultsTotalPage != -1) {
					panel2ResultsTotalPage = 1;
				}
				var panel2ResultsPECPage = 0;
				var resultsPECPage = resultsTotalTagStrip.indexOf(" PEC");
				if (resultsPECPage != -1) {
					panel2ResultsPECPage = 1;
				}
				var resultsTotalValStart = resultsTotalTagStrip.indexOf(" VALUE=");
				if (resultsTotalValStart != -1) {
					var resultsTotalValEnd = resultsTotalTagStrip.indexOf("]",resultsTotalValStart);
					var resultsTotalVal = "<span id='panel2ResultsTotalText'>" + resultsTotalTagStrip.substring((resultsTotalValStart+8),(resultsTotalValEnd)) + "<\/span>";
				}
				else {
					var resultsTotalVal = "";
				}
				if (panel2ResultsPECPage == 0 || (panel2ResultsPECPage == 1 && PEC == 1)) {
					baseHTML = resultsTotalHTMLStart + "<span id='panel2ResultsTotal'><\/span>" + resultsTotalVal + resultsTotalHTMLEnd;
				}
			}
			var totalResultsTagStart = baseHTML.indexOf("<!--TOTALRESULTS");
			if (totalResultsTagStart != -1) {
				var totalResultsTagEnd = baseHTML.indexOf(">",totalResultsTagStart);
				var totalResultsTagStrip = baseHTML.substring(totalResultsTagStart,(totalResultsTagEnd+1));
				var totalResultsHTMLStart = baseHTML.substr(0,totalResultsTagStart);
				var totalResultsHTMLEnd = baseHTML.substr((totalResultsTagEnd+1));
				var totalResultsPage = totalResultsTagStrip.indexOf(" PAGE");
				if (totalResultsPage != -1) {
					panel2TotalResultsPage = 1;
				}
				baseHTML = totalResultsHTMLStart + "<span id='panel2TotalResults'><\/span>" + totalResultsHTMLEnd;
			}
			var resultsCompileTagStart = baseHTML.indexOf("<!--RESULTSCOMPILE");
			if (resultsCompileTagStart != -1) {
				var resultsCompileTagEnd = baseHTML.indexOf(">",resultsCompileTagStart);
				var resultsCompileHTMLStart = baseHTML.substr(0,resultsCompileTagStart);
				var resultsCompileHTMLEnd = baseHTML.substr((resultsCompileTagEnd+1));
				var resultsCompileVal = document.getElementById('revCodeCompile').value;
				if (resultsCompileVal == "") {
					resultsCompileVal = document.getElementById('addressCompile').value;
				}
				baseHTML = resultsCompileHTMLStart + "<span id='panel2ResultsCompile'>" + resultsCompileVal + "<\/span>" + resultsCompileHTMLEnd;
			}
			var resultsStreetTagStart = baseHTML.indexOf("<!--RESULTSSTREET");
			if (resultsStreetTagStart != -1) {
				var resultsStreetTagEnd = baseHTML.indexOf(">",resultsStreetTagStart);
				var resultsStreetHTMLStart = baseHTML.substr(0,resultsStreetTagStart);
				var resultsStreetHTMLEnd = baseHTML.substr((resultsStreetTagEnd+1));
				baseHTML = resultsStreetHTMLStart + "<span id='panel2ResultsStreet'>" + document.getElementById('revCodeStreet').value + "<\/span>" + resultsStreetHTMLEnd;
			}
			var resultsCityTagStart = baseHTML.indexOf("<!--RESULTSCITY");
			if (resultsCityTagStart != -1) {
				var resultsCityTagEnd = baseHTML.indexOf(">",resultsCityTagStart);
				var resultsCityHTMLStart = baseHTML.substr(0,resultsCityTagStart);
				var resultsCityHTMLEnd = baseHTML.substr((resultsCityTagEnd+1));
				baseHTML = resultsCityHTMLStart + "<span id='panel2ResultsCity'>" + document.getElementById('revCodeCity').value + "<\/span>" + resultsCityHTMLEnd;
			}
			var resultsStateTagStart = baseHTML.indexOf("<!--RESULTSSTATE");
			if (resultsStateTagStart != -1) {
				var resultsStateTagEnd = baseHTML.indexOf(">",resultsStateTagStart);
				var resultsStateHTMLStart = baseHTML.substr(0,resultsStateTagStart);
				var resultsStateHTMLEnd = baseHTML.substr((resultsStateTagEnd+1));
				baseHTML = resultsStateHTMLStart + "<span id='panel2ResultsState'>" + document.getElementById('revCodeState').value + "<\/span>" + resultsStateHTMLEnd;
			}
			var resultsZipTagStart = baseHTML.indexOf("<!--RESULTSZIP");
			if (resultsZipTagStart != -1) {
				var resultsZipTagEnd = baseHTML.indexOf(">",resultsZipTagStart);
				var resultsZipHTMLStart = baseHTML.substr(0,resultsZipTagStart);
				var resultsZipHTMLEnd = baseHTML.substr((resultsZipTagEnd+1));
				baseHTML = resultsZipHTMLStart + "<span id='panel2ResultsZip'>" + document.getElementById('revCodeZip').value + "<\/span>" + resultsZipHTMLEnd;
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
				var resultsProdlistIncImageStart = resultsProdlistTagStrip.indexOf(" IMAGE");
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
								if (resultsProdlistIncImageStart != -1) {
									var resultsProdlistIncImage = "<img title=\"" + prodDisplayArray[bpl][2] + "\" alt=\"" + prodDisplayArray[bpl][2] + "\" class='panel_2_results_prodlist_img' src='" + clientImgBase + prodDisplayArray[bpl][4] + "'>";
								}
								else {
									var resultsProdlistIncImage = "";
								}
								resultsProdlistWrite += resultsProdlistIncImage + "<span class='panel_2_results_prodlist_prod'>" + prodDisplayArray[bpl][2] + "<\/span>";
								break;
							}
						}
					}
				}
				else {
					resultsProdlistWrite = "<span class='panel_2_results_prodlist_prod'>" + resultsProdlistDefaultVal + "<\/span>";
				}
				baseHTML = resultsProdlistHTMLStart + "<span id='panel2ResultsProdlist'>" + resultsProdlistWrite + "<\/span>" + resultsProdlistHTMLEnd;
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
				var resultsCatlistIncImageStart = resultsCatlistTagStrip.indexOf(" IMAGE");
				var resultsCatlistWrite = "";
				if (document.getElementById('GROUP').value != "") {
					var resultsCatlistArr = document.getElementById('GROUP').value.split(",");
					for (rcl=0; rcl<resultsCatlistArr.length; rcl++) {
						for (bcl=0; bcl<catArray.length; bcl++) {
							if (resultsCatlistArr[rcl] == catArray[bcl][5]) {
								if (rcl != 0) {
									resultsCatlistWrite += resultsCatlistSpacerVal;
								}
								if (resultsCatlistIncImageStart != -1) {
									var resultsCatlistIncImage = "<img title=\"" + catArray[bcl][1] + "\" alt=\"" + catArray[bcl][1] + "\" class='panel_2_results_catlist_img' src='" + clientImgBase + catArray[bcl][3] + "'>";
								}
								else {
									var resultsCatlistIncImage = "";
								}
								resultsCatlistWrite += resultsCatlistIncImage + "<span class='panel_2_results_catlist_prod'>" + catArray[bcl][1] + "<\/span>";
								break;
							}
						}
					}
				}
				else {
					resultsCatlistWrite = "<span class='panel_2_results_catlist_prod'>" + resultsCatlistDefaultVal + "<\/span>";
				}
				baseHTML = resultsCatlistHTMLStart + "<span id='panel2ResultsCatlist'>" + resultsCatlistWrite + "<\/span>" + resultsCatlistHTMLEnd;
			}
			var storeFamSearchOn = 1;
			while (storeFamSearchOn == 1) {
				var famTagStart = baseHTML.indexOf("<!--STOREFAMILY");
				if (famTagStart != -1) {
					var famTagEnd = baseHTML.indexOf(">",famTagStart);
					var famTagStrip = baseHTML.substring(famTagStart,(famTagEnd+1));
					var baseHTMLStart = baseHTML.substr(0,famTagStart);
					var baseHTMLEnd = baseHTML.substr((famTagEnd+1));
					var storeFamilyID = 0;
					var storeFamilyHTML = "";
					var storeFamilyIDStart = famTagStrip.indexOf(" ID=");
					if (storeFamilyIDStart != -1) {
						var storeFamilyIDEnd = famTagStrip.indexOf("]",storeFamilyIDStart);
						storeFamilyID = famTagStrip.substring((storeFamilyIDStart+5),(storeFamilyIDEnd));
					}
					if (storeFamilyID != 0) {
						var storeFamilyHTMLTest = autotextIt(p2TemplateSet.panel2StoreFamilyDiv,"panel2StoreFamily");
						var whatFamIndex = -1;
						for (x=0; x<storeFamArray.length; x++) {
							if (storeFamArray[x][0] == storeFamilyID) {
								whatFamIndex = x;
								break;
							}
						}
						if (whatFamIndex != -1) {
							var famNameTagStart = storeFamilyHTMLTest.indexOf("<!--FAMNAME");
							if (famNameTagStart != -1) {
								var famNameTagEnd = storeFamilyHTMLTest.indexOf(">",famNameTagStart);
								var famNameTagStrip = storeFamilyHTMLTest.substring(famNameTagStart,(famNameTagEnd+1));
								var baseFamNameHTMLStart = storeFamilyHTMLTest.substr(0,famNameTagStart);
								var baseFamNameHTMLEnd = storeFamilyHTMLTest.substr((famNameTagEnd+1));
								var famNameTagLinkTest = famNameTagStrip.indexOf(" LINK");
								var famNameTagLink = "";
								if (famNameTagLinkTest != -1) {
									famNameTagLink += " style='cursor:pointer;' onclick='panel2StoreFamSelectCat(" + storeFamArray[whatFamIndex][0] + ", \"panel2StoreFamilyName" + storeFamArray[whatFamIndex][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[whatFamIndex][0] + ", \"panel1StoreFamilyNameVar" + storeFamArray[whatFamIndex][0] + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2StoreFamSelectCat(" + storeFamArray[whatFamIndex][0] + ", \"panel2StoreFamilyName" + storeFamArray[whatFamIndex][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[whatFamIndex][0] + ", \"panel1StoreFamilyNameVar" + storeFamArray[whatFamIndex][0] + "\");}'";
									if (hoverState==1) {
										famNameTagLink += " onmouseover='panel2StoreFamMouseOver(\"panel2StoreFamilyName" + storeFamArray[whatFamIndex][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[whatFamIndex][0] + ");' onfocus='panel2StoreFamMouseOver(\"panel2StoreFamilyName" + storeFamArray[whatFamIndex][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[whatFamIndex][0] + ");' onmouseout='panel2StoreFamMouseOut(\"panel2StoreFamilyName" + storeFamArray[whatFamIndex][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[whatFamIndex][0] + ");' onblur='panel2StoreFamMouseOut(\"panel2StoreFamilyName" + storeFamArray[whatFamIndex][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[whatFamIndex][0] + ");'";
									}
								}
								if (storeFamArray[x][4] == 1) {
									var isFamOn = " panel_2_store_family_name_on";
								}
								else {
									var isFamOn = " panel_2_store_family_name_off";
								}
								storeFamilyHTMLTest = baseFamNameHTMLStart + "<div id='panel2StoreFamilyName" + storeFamArray[whatFamIndex][0] + "' class='panel_2_store_family_name" + isFamOn + "'" + famNameTagLink + " tabindex='0' title=\"" + storeFamArray[whatFamIndex][1] + "\">" + storeFamArray[whatFamIndex][1] + "<\/div>" + baseFamNameHTMLEnd;
							}
							var famBigImgTagStart = storeFamilyHTMLTest.indexOf("<!--FAMBIGIMG");
							if (famBigImgTagStart != -1) {
								var famBigImgTagEnd = storeFamilyHTMLTest.indexOf(">",famBigImgTagStart);
								var famBigImgTagStrip = storeFamilyHTMLTest.substring(famBigImgTagStart,(famBigImgTagEnd+1));
								var baseFamBigImgHTMLStart = storeFamilyHTMLTest.substr(0,famBigImgTagStart);
								var baseFamBigImgHTMLEnd = storeFamilyHTMLTest.substr((famBigImgTagEnd+1));
								var famBigImgTagLinkTest = famNameTagStrip.indexOf(" LINK");
								var famBigImgTagLinkStart = "";
								var famBigImgTagLinkEnd = "";
								if (famBigImgTagLinkTest != -1) {
									famBigImgTagLinkStart += "<a href='' onclick='panel2StoreFamSelectCat(" + storeFamArray[whatFamIndex][0] + ", \"panel2StoreFamilyName" + storeFamArray[whatFamIndex][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[whatFamIndex][0] + ", \"panel1StoreFamilyNameVar" + storeFamArray[whatFamIndex][0] + "\"); return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2StoreFamSelectCat(" + storeFamArray[whatFamIndex][0] + ", \"panel2StoreFamilyName" + storeFamArray[whatFamIndex][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[whatFamIndex][0] + ", \"panel1StoreFamilyNameVar" + storeFamArray[whatFamIndex][0] + "\"); return false;}'";
									if (hoverState==1) {
										famBigImgTagLinkStart += " onmouseover='panel2StoreFamMouseOver(\"panel2StoreFamilyName" + storeFamArray[whatFamIndex][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[whatFamIndex][0] + ");' onfocus='panel2StoreFamMouseOver(\"panel2StoreFamilyName" + storeFamArray[whatFamIndex][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[whatFamIndex][0] + ");' onmouseout='panel2StoreFamMouseOut(\"panel2StoreFamilyName" + storeFamArray[whatFamIndex][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[whatFamIndex][0] + ");' onblur='panel2StoreFamMouseOut(\"panel2StoreFamilyName" + storeFamArray[whatFamIndex][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[whatFamIndex][0] + ");'";
									}
									famBigImgTagLinkStart += " tabindex='0' title=\"" + storeFamArray[whatFamIndex][1] + "\">";
									famBigImgTagLinkEnd = "<\/a>";
								}
								storeFamilyHTMLTest = baseFamBigImgHTMLStart + famBigImgTagLinkStart + "<img title=\"" + storeFamArray[whatFamIndex][1] + "\" alt=\"" + storeFamArray[whatFamIndex][1] + "\" id='panel2StoreFamilyBigImg" + storeFamArray[whatFamIndex][0] + "' class='panel_2_store_family_big_img' src='" + clientImgBase + storeFamArray[whatFamIndex][2] + "'>" + famBigImgTagLinkEnd + baseFamBigImgHTMLEnd;
							}
							var famSmImgTagStart = storeFamilyHTMLTest.indexOf("<!--FAMSMIMG");
							if (famSmImgTagStart != -1) {
								var famSmImgTagEnd = storeFamilyHTMLTest.indexOf(">",famSmImgTagStart);
								var famSmImgTagStrip = storeFamilyHTMLTest.substring(famSmImgTagStart,(famSmImgTagEnd+1));
								var baseFamSmImgHTMLStart = storeFamilyHTMLTest.substr(0,famSmImgTagStart);
								var baseFamSmImgHTMLEnd = storeFamilyHTMLTest.substr((famSmImgTagEnd+1));
								var famSmImgTagLinkTest = famNameTagStrip.indexOf(" LINK");
								var famSmImgTagLinkStart = "";
								var famSmImgTagLinkEnd = "";
								if (famSmImgTagLinkTest != -1) {
									famSmImgTagLinkStart += "<a href='' onclick='panel2StoreFamSelectCat(" + storeFamArray[whatFamIndex][0] + ", \"panel2StoreFamilyName" + storeFamArray[whatFamIndex][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[whatFamIndex][0] + ", \"panel1StoreFamilyNameVar" + storeFamArray[whatFamIndex][0] + "\"); return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2StoreFamSelectCat(" + storeFamArray[whatFamIndex][0] + ", \"panel2StoreFamilyName" + storeFamArray[whatFamIndex][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[whatFamIndex][0] + ", \"panel1StoreFamilyNameVar" + storeFamArray[whatFamIndex][0] + "\"); return false;}'";
									if (hoverState==1) {
										famSmImgTagLinkStart += " onmouseover='panel2StoreFamMouseOver(\"panel2StoreFamilyName" + storeFamArray[whatFamIndex][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[whatFamIndex][0] + ");' onfocus='panel2StoreFamMouseOver(\"panel2StoreFamilyName" + storeFamArray[whatFamIndex][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[whatFamIndex][0] + ");' onmouseout='panel2StoreFamMouseOut(\"panel2StoreFamilyName" + storeFamArray[whatFamIndex][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[whatFamIndex][0] + ");' onblur='panel2StoreFamMouseOut(\"panel2StoreFamilyName" + storeFamArray[whatFamIndex][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[whatFamIndex][0] + ");'";
									}
									famSmImgTagLinkStart += " tabindex='0' title=\"" + storeFamArray[whatFamIndex][1] + "\">";
									famSmImgTagLinkEnd = "<\/a>";
								}
								storeFamilyHTMLTest = baseFamSmImgHTMLStart + famSmImgTagLinkStart + "<img title=\"" + storeFamArray[whatFamIndex][1] + "\" alt=\"" + storeFamArray[whatFamIndex][1] + "\" id='panel2StoreFamilySmImg" + storeFamArray[whatFamIndex][0] + "' class='panel_2_store_family_sm_img' src='" + clientImgBase + storeFamArray[whatFamIndex][3] + "'>" + famSmImgTagLinkEnd + baseFamSmImgHTMLEnd;
							}
							storeFamilyHTML += storeFamilyHTMLTest;
						}
					}
					else {
						for (x=0; x<storeFamArray.length; x++) {
							var storeFamilyHTMLTest = autotextIt(p2TemplateSet.panel2StoreFamilyDiv,"panel2StoreFamily");
							var famNameTagStart = storeFamilyHTMLTest.indexOf("<!--FAMNAME");
							if (famNameTagStart != -1) {
								var famNameTagEnd = storeFamilyHTMLTest.indexOf(">",famNameTagStart);
								var famNameTagStrip = storeFamilyHTMLTest.substring(famNameTagStart,(famNameTagEnd+1));
								var baseFamNameHTMLStart = storeFamilyHTMLTest.substr(0,famNameTagStart);
								var baseFamNameHTMLEnd = storeFamilyHTMLTest.substr((famNameTagEnd+1));
								var famNameTagLinkTest = famNameTagStrip.indexOf(" LINK");
								var famNameTagLink = "";
								if (famNameTagLinkTest != -1) {
									famNameTagLink += " style='cursor:pointer;' onclick='panel2StoreFamSelectCat(" + storeFamArray[x][0] + ", \"panel2StoreFamilyName" + storeFamArray[x][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[x][0] + ", \"panel1StoreFamilyNameVar" + storeFamArray[x][0] + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2StoreFamSelectCat(" + storeFamArray[x][0] + ", \"panel2StoreFamilyName" + storeFamArray[x][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[x][0] + ", \"panel1StoreFamilyNameVar" + storeFamArray[x][0] + "\");}'";
									if (hoverState==1) {
										famNameTagLink += " onmouseover='panel2StoreFamMouseOver(\"panel2StoreFamilyName" + storeFamArray[x][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[x][0] + ");' onfocus='panel2StoreFamMouseOver(\"panel2StoreFamilyName" + storeFamArray[x][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[x][0] + ");' onmouseout='panel2StoreFamMouseOut(\"panel2StoreFamilyName" + storeFamArray[x][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[x][0] + ");' onblur='panel2StoreFamMouseOut(\"panel2StoreFamilyName" + storeFamArray[x][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[x][0] + ");'";
									}
								}
								if (storeFamArray[x][4] == 1) {
									var isFamOn = " panel_2_store_family_name_on";
								}
								else {
									var isFamOn = " panel_2_store_family_name_off";
								}
								storeFamilyHTMLTest = baseFamNameHTMLStart + "<div id='panel2StoreFamilyName" + storeFamArray[x][0] + "' class='panel_2_store_family_name" + isFamOn + "'" + famNameTagLink + " tabindex='0' title=\"" + storeFamArray[x][1] + "\">" + storeFamArray[x][1] + "<\/div>" + baseFamNameHTMLEnd;
							}
							var famBigImgTagStart = storeFamilyHTMLTest.indexOf("<!--FAMBIGIMG");
							if (famBigImgTagStart != -1) {
								var famBigImgTagEnd = storeFamilyHTMLTest.indexOf(">",famBigImgTagStart);
								var famBigImgTagStrip = storeFamilyHTMLTest.substring(famBigImgTagStart,(famBigImgTagEnd+1));
								var baseFamBigImgHTMLStart = storeFamilyHTMLTest.substr(0,famBigImgTagStart);
								var baseFamBigImgHTMLEnd = storeFamilyHTMLTest.substr((famBigImgTagEnd+1));
								var famBigImgTagLinkTest = famNameTagStrip.indexOf(" LINK");
								var famBigImgTagLinkStart = "";
								var famBigImgTagLinkEnd = "";
								if (famBigImgTagLinkTest != -1) {
									famBigImgTagLinkStart += "<a href='' onclick='panel2StoreFamSelectCat(" + storeFamArray[x][0] + ", \"panel2StoreFamilyName" + storeFamArray[x][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[x][0] + ", \"panel1StoreFamilyNameVar" + storeFamArray[x][0] + "\");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2StoreFamSelectCat(" + storeFamArray[x][0] + ", \"panel2StoreFamilyName" + storeFamArray[x][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[x][0] + ", \"panel1StoreFamilyNameVar" + storeFamArray[x][0] + "\");return false;}'";
									if (hoverState==1) {
										famBigImgTagLinkStart += " onmouseover='panel2StoreFamMouseOver(\"panel2StoreFamilyName" + storeFamArray[x][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[x][0] + ");' onfocus='panel2StoreFamMouseOver(\"panel2StoreFamilyName" + storeFamArray[x][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[x][0] + ");' onmouseout='panel2StoreFamMouseOut(\"panel2StoreFamilyName" + storeFamArray[x][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[x][0] + ");' onblur='panel2StoreFamMouseOut(\"panel2StoreFamilyName" + storeFamArray[x][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[x][0] + ");'";
									}
									famBigImgTagLinkStart += " tabindex='0' title=\"" + storeFamArray[x][1] + "\">";
									famBigImgTagLinkEnd = "<\/a>";
								}
								storeFamilyHTMLTest = baseFamBigImgHTMLStart + famBigImgTagLinkStart + "<img title=\"" + storeFamArray[x][1] + "\" alt=\"" + storeFamArray[x][1] + "\" id='panel2StoreFamilyBigImg" + storeFamArray[x][0] + "' class='panel_2_store_family_big_img' src='" + clientImgBase + storeFamArray[x][2] + ">" + famBigImgTagLinkEnd + baseFamBigImgHTMLEnd;
							}
							var famSmImgTagStart = storeFamilyHTMLTest.indexOf("<!--FAMSMIMG");
							if (famSmImgTagStart != -1) {
								var famSmImgTagEnd = storeFamilyHTMLTest.indexOf(">",famSmImgTagStart);
								var famSmImgTagStrip = storeFamilyHTMLTest.substring(famSmImgTagStart,(famSmImgTagEnd+1));
								var baseFamSmImgHTMLStart = storeFamilyHTMLTest.substr(0,famSmImgTagStart);
								var baseFamSmImgHTMLEnd = storeFamilyHTMLTest.substr((famSmImgTagEnd+1));
								var famSmImgTagLinkTest = famNameTagStrip.indexOf(" LINK");
								var famSmImgTagLinkStart = "";
								var famSmImgTagLinkEnd = "";
								if (famSmImgTagLinkTest != -1) {
									famSmImgTagLinkStart += "<a href='' onclick='panel2StoreFamSelectCat(" + storeFamArray[x][0] + ", \"panel2StoreFamilyName" + storeFamArray[x][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[x][0] + ", \"panel1StoreFamilyNameVar" + storeFamArray[x][0] + "\");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2StoreFamSelectCat(" + storeFamArray[x][0] + ", \"panel2StoreFamilyName" + storeFamArray[x][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[x][0] + ", \"panel1StoreFamilyNameVar" + storeFamArray[x][0] + "\");return false;}'";
									if (hoverState==1) {
										famSmImgTagLinkStart += " onmouseover='panel2StoreFamMouseOver(\"panel2StoreFamilyName" + storeFamArray[x][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[x][0] + ");' onfocus='panel2StoreFamMouseOver(\"panel2StoreFamilyName" + storeFamArray[x][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[x][0] + ");' onmouseout='panel2StoreFamMouseOut(\"panel2StoreFamilyName" + storeFamArray[x][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[x][0] + ");' onblur='panel2StoreFamMouseOut(\"panel2StoreFamilyName" + storeFamArray[x][0] + "\", \"panel_2_store_family_name\", panel1StoreFamilyNameVar" + storeFamArray[x][0] + ");'";
									}
									famSmImgTagLinkStart += " tabindex='0' title=\"" + storeFamArray[x][1] + "\">";
									famSmImgTagLinkEnd = "<\/a>";
								}
								storeFamilyHTMLTest = baseFamSmImgHTMLStart + famSmImgTagLinkStart + "<img title=\"" + storeFamArray[x][1] + "\" alt=\"" + storeFamArray[x][1] + "\" id='panel2StoreFamilySmImg" + storeFamArray[x][0] + "' class='panel_2_store_family_sm_img' src='" + clientImgBase + storeFamArray[x][3] + "'>" + famSmImgTagLinkEnd + baseFamSmImgHTMLEnd;
							}
							storeFamilyHTML += storeFamilyHTMLTest;
						}
					}
					baseHTML = baseHTMLStart + storeFamilyHTML + baseHTMLEnd;
				}
				else {
					storeFamSearchOn = 0;
				}
			}
			var isACatOn = 0;
			for (j=0;j<storeCatArray.length;j++) {
				if (storeCatArray[j][8] == 1) {
					isACatOn = 1;
					break;
				}
			}
			if (isACatOn == 0) {
				if(gLog==1){console.log("Store Cateogry Enforce On");}
				for (j=0;j<storeCatArray.length;j++) {
					storeCatArray[j][8] = 1;
					window['panel1StoreCategoryNameVar'+storeCatArray[j][0]] = 1;
				}
			}
			var catSearchOn = 1;
			while (catSearchOn == 1) {
				var catTagStart = baseHTML.indexOf("<!--STORECATEGORY");
				if (catTagStart != -1 && storeCatArray.length > 1) {
					var catTagEnd = baseHTML.indexOf(">",catTagStart);
					var catTagStrip = baseHTML.substring(catTagStart,(catTagEnd+1));
					var baseHTMLStart = baseHTML.substr(0,catTagStart);
					var baseHTMLEnd = baseHTML.substr((catTagEnd+1));
					var categoryID = 0;
					var categoryHTML = "";
					var categoryIDStart = catTagStrip.indexOf(" ID=");
					if (categoryIDStart != -1) {
						var categoryIDEnd = catTagStrip.indexOf("]",categoryIDStart);
						categoryID = catTagStrip.substring((categoryIDStart+5),(categoryIDEnd));
						if(gLog==1){console.log("STORECATEGORY ID Found: ", categoryID);}
					}
					if (categoryID != 0) {
						var categoryHTMLTest = autotextIt(p2TemplateSet.panel2StoreCategoryDiv,"panel2StoreCategory");
						var whatCatIndex = -1;
						for (x=0; x<storeCatArray.length; x++) {
							if (storeCatArray[x][0] == categoryID) {
								whatCatIndex = x;
								break;
							}
						}
						if (whatCatIndex != -1) {
							if(gLog==1){console.log("STORECATEGORY whatCatIndex Found: ", whatCatIndex);}
							var catNameTagStart = categoryHTMLTest.indexOf("<!--CATNAME");
							if (catNameTagStart != -1) {
								var catNameTagEnd = categoryHTMLTest.indexOf(">",catNameTagStart);
								var catNameTagStrip = categoryHTMLTest.substring(catNameTagStart,(catNameTagEnd+1));
								var baseCatNameHTMLStart = categoryHTMLTest.substr(0,catNameTagStart);
								var baseCatNameHTMLEnd = categoryHTMLTest.substr((catNameTagEnd+1));
								var catNameTagLinkTest = catNameTagStrip.indexOf(" LINK");
								var catNameTagLink = "";
								if (catNameTagLinkTest != -1) {
									catNameTagLink += " style='cursor:pointer;' onclick='panel2StoreSelectCat(" + storeCatArray[whatCatIndex][0] + ", \"panel2StoreCategoryName" + storeCatArray[whatCatIndex][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[whatCatIndex][0] + ", \"panel1StoreCategoryNameVar" + storeCatArray[whatCatIndex][0] + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2StoreSelectCat(" + storeCatArray[whatCatIndex][0] + ", \"panel2StoreCategoryName" + storeCatArray[whatCatIndex][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[whatCatIndex][0] + ", \"panel1StoreCategoryNameVar" + storeCatArray[whatCatIndex][0] + "\");}'";
									if (hoverState==1) {
										catNameTagLink += " onmouseover='panel2StoreCatMouseOver(\"panel2StoreCategoryName" + storeCatArray[whatCatIndex][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[whatCatIndex][0] + ");' onfocus='panel2StoreCatMouseOver(\"panel2StoreCategoryName" + storeCatArray[whatCatIndex][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[whatCatIndex][0] + ");' onmouseout='panel2StoreCatMouseOut(\"panel2StoreCategoryName" + storeCatArray[whatCatIndex][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[whatCatIndex][0] + ");' onblur='panel2StoreCatMouseOut(\"panel2StoreCategoryName" + storeCatArray[whatCatIndex][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[whatCatIndex][0] + ");'";
									}
								}
								if (storeCatArray[whatCatIndex][8] == 1) {
									var isCatOn = " panel_2_store_category_name_on";
								}
								else {
									var isCatOn = " panel_2_store_category_name_off";
								}
								categoryHTMLTest = baseCatNameHTMLStart + "<div id='panel2StoreCategoryName" + storeCatArray[whatCatIndex][0] + "' class='panel_2_store_category_name_" + storeCatArray[whatCatIndex][0] + " panel_2_store_category_name" + isCatOn + "'" + catNameTagLink + " tabindex='0' title=\"" + storeCatArray[whatCatIndex][1] + "\">" + storeCatArray[whatCatIndex][1] + "<\/div>" + baseCatNameHTMLEnd;
								if(gLog==1){console.log("STORECATEGORY CATNAME Found: ", storeCatArray[whatCatIndex][1]);}
							}
							var catBigImgTagStart = categoryHTMLTest.indexOf("<!--CATBIGIMG");
							if (catBigImgTagStart != -1) {
								var catBigImgTagEnd = categoryHTMLTest.indexOf(">",catBigImgTagStart);
								var catBigImgTagStrip = categoryHTMLTest.substring(catBigImgTagStart,(catBigImgTagEnd+1));
								var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBigImgTagStart);
								var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBigImgTagEnd+1));
								var catBigImgReplaceTest = catBigImgTagStrip.indexOf(" REPLACE");
								if (catBigImgReplaceTest != -1) {
									var catBigImgReplace = 1;
								}
								else {
									var catBigImgReplace = 0;
								}
								var catBigImgTagLinkTest = catBigImgTagStrip.indexOf(" LINK");
								var catBigImgTagLinkStart = "";
								var catBigImgTagLinkEnd = "";
								if (catBigImgTagLinkTest != -1) {
									catBigImgTagLinkStart += "<a href='' onclick='panel2StoreSelectCat(" + storeCatArray[whatCatIndex][0] + ", \"panel2StoreCategoryName" + storeCatArray[whatCatIndex][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[whatCatIndex][0] + ", \"panel1StoreCategoryNameVar" + storeCatArray[whatCatIndex][0] + "\"); return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2StoreSelectCat(" + storeCatArray[whatCatIndex][0] + ", \"panel2StoreCategoryName" + storeCatArray[whatCatIndex][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[whatCatIndex][0] + ", \"panel1StoreCategoryNameVar" + storeCatArray[whatCatIndex][0] + "\"); return false;}'";
									if (hoverState==1) {
										catBigImgTagLinkStart += " onmouseover='panel2StoreCatMouseOver(\"panel2StoreCategoryName" + storeCatArray[whatCatIndex][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[whatCatIndex][0] + "," + catBigImgReplace + ");' onfocus='panel2StoreCatMouseOver(\"panel2StoreCategoryName" + storeCatArray[whatCatIndex][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[whatCatIndex][0] + "," + catBigImgReplace + ");' onmouseout='panel2StoreCatMouseOut(\"panel2StoreCategoryName" + storeCatArray[whatCatIndex][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[whatCatIndex][0] + "," + catBigImgReplace + ");' onblur='panel2StoreCatMouseOut(\"panel2StoreCategoryName" + storeCatArray[whatCatIndex][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[whatCatIndex][0] + "," + catBigImgReplace + ");'";
									}
									catBigImgTagLinkStart += " tabindex='0' title=\"" + storeCatArray[whatCatIndex][1] + "\">";
									catBigImgTagLinkEnd = "<\/a>";
								}
								categoryHTMLTest = baseCatBigImgHTMLStart + catBigImgTagLinkStart + "<img title=\"" + storeCatArray[whatCatIndex][1] + "\" alt=\"" + storeCatArray[whatCatIndex][1] + "\" id='panel2StoreCategoryBigImg" + storeCatArray[whatCatIndex][0] + "' class='panel_2_store_category_big_img' src='" + clientImgBase + storeCatArray[whatCatIndex][3] + "'>" + catBigImgTagLinkEnd + baseCatBigImgHTMLEnd;
								if(gLog==1){console.log("STORECATEGORY CATBIGIMG Found: ", storeCatArray[whatCatIndex][3]);}
							}
							var catSmImgTagStart = categoryHTMLTest.indexOf("<!--CATSMIMG");
							if (catSmImgTagStart != -1) {
								var catSmImgTagEnd = categoryHTMLTest.indexOf(">",catSmImgTagStart);
								var catSmImgTagStrip = categoryHTMLTest.substring(catSmImgTagStart,(catSmImgTagEnd+1));
								var baseCatSmImgHTMLStart = categoryHTMLTest.substr(0,catSmImgTagStart);
								var baseCatSmImgHTMLEnd = categoryHTMLTest.substr((catSmImgTagEnd+1));
								var catSmImgReplaceTest = catSmImgTagStrip.indexOf(" REPLACE");
								if (catSmImgReplaceTest != -1) {
									var catSmImgReplace = 1;
								}
								else {
									var catSmImgReplace = 0;
								}
								var catSmImgTagLinkTest = catSmImgTagStrip.indexOf(" LINK");
								var catSmImgTagLinkStart = "";
								var catSmImgTagLinkEnd = "";
								if (catSmImgTagLinkTest != -1) {
									catSmImgTagLinkStart += "<a href='' onclick='panel2StoreSelectCat(" + storeCatArray[whatCatIndex][0] + ", \"panel2StoreCategoryName" + storeCatArray[whatCatIndex][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[whatCatIndex][0] + ", \"panel1StoreCategoryNameVar" + storeCatArray[whatCatIndex][0] + "\"); return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2StoreSelectCat(" + storeCatArray[whatCatIndex][0] + ", \"panel2StoreCategoryName" + storeCatArray[whatCatIndex][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[whatCatIndex][0] + ", \"panel1StoreCategoryNameVar" + storeCatArray[whatCatIndex][0] + "\"); return false;}'";
									if (hoverState==1) {
										catSmImgTagLinkStart += " onmouseover='panel2StoreCatMouseOver(\"panel2StoreCategoryName" + storeCatArray[whatCatIndex][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[whatCatIndex][0] + "," + catSmImgReplace + ");' onfocus='panel2StoreCatMouseOver(\"panel2StoreCategoryName" + storeCatArray[whatCatIndex][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[whatCatIndex][0] + "," + catSmImgReplace + ");' onmouseout='panel2StoreCatMouseOut(\"panel2StoreCategoryName" + storeCatArray[whatCatIndex][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[whatCatIndex][0] + "," + catSmImgReplace + ");' onblur='panel2StoreCatMouseOut(\"panel2StoreCategoryName" + storeCatArray[whatCatIndex][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[whatCatIndex][0] + "," + catSmImgReplace + ");'";
									}
									catSmImgTagLinkStart += " tabindex='0' title=\"" + storeCatArray[whatCatIndex][1] + "\">";
									catSmImgTagLinkEnd = "<\/a>";
								}
								categoryHTMLTest = baseCatSmImgHTMLStart + catSmImgTagLinkStart + "<img title=\"" + storeCatArray[whatCatIndex][1] + "\" alt=\"" + storeCatArray[whatCatIndex][1] + "\" id='panel2StoreCategorySmImg" + storeCatArray[whatCatIndex][0] + "' class='panel_2_store_category_sm_img' src='" + clientImgBase + storeCatArray[whatCatIndex][4] + "'>" + catSmImgTagLinkEnd + baseCatSmImgHTMLEnd;
								if(gLog==1){console.log("STORECATEGORY CATSMIMG Found: ", storeCatArray[whatCatIndex][4]);}
							}
							categoryHTML += categoryHTMLTest;
						}
					}
					else {
						if(gLog==1){console.log("STORECATEGORY no whatCatIndex Found");}
						for (x=0; x<storeCatArray.length; x++) {
							var categoryHTMLTest = autotextIt(p2TemplateSet.panel2StoreCategoryDiv,"panel2StoreCategory");
							var catNameTagStart = categoryHTMLTest.indexOf("<!--CATNAME");
							if (catNameTagStart != -1) {
								var catNameTagEnd = categoryHTMLTest.indexOf(">",catNameTagStart);
								var catNameTagStrip = categoryHTMLTest.substring(catNameTagStart,(catNameTagEnd+1));
								var baseCatNameHTMLStart = categoryHTMLTest.substr(0,catNameTagStart);
								var baseCatNameHTMLEnd = categoryHTMLTest.substr((catNameTagEnd+1));
								var catNameTagLinkTest = catNameTagStrip.indexOf(" LINK");
								var catNameTagLink = "";
								if (catNameTagLinkTest != -1) {
									catNameTagLink += " style='cursor:pointer;' onclick='panel2StoreSelectCat(" + storeCatArray[x][0] + ", \"panel2StoreCategoryName" + storeCatArray[x][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[x][0] + ", \"panel1StoreCategoryNameVar" + storeCatArray[x][0] + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2StoreSelectCat(" + storeCatArray[x][0] + ", \"panel2StoreCategoryName" + storeCatArray[x][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[x][0] + ", \"panel1StoreCategoryNameVar" + storeCatArray[x][0] + "\");}'";
									if (hoverState==1) {
										catNameTagLink += " onmouseover='panel2StoreCatMouseOver(\"panel2StoreCategoryName" + storeCatArray[x][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[x][0] + ");' onfocus='panel2StoreCatMouseOver(\"panel2StoreCategoryName" + storeCatArray[x][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[x][0] + ");' onmouseout='panel2StoreCatMouseOut(\"panel2StoreCategoryName" + storeCatArray[x][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[x][0] + ");' onblur='panel2StoreCatMouseOut(\"panel2StoreCategoryName" + storeCatArray[x][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[x][0] + ");'";
									}
								}
								if (storeCatArray[x][8] == 1) {
									var isCatOn = " panel_2_store_category_name_on";
								}
								else {
									var isCatOn = " panel_2_store_category_name_off";
								}
								categoryHTMLTest = baseCatNameHTMLStart + "<div id='panel2StoreCategoryName" + storeCatArray[x][0] + "' class='panel_2_store_category_name_" + storeCatArray[x][0] + " panel_2_store_category_name" + isCatOn + "'" + catNameTagLink + " tabindex='0' title=\"" + storeCatArray[x][1] + "\">" + storeCatArray[x][1] + "<\/div>" + baseCatNameHTMLEnd;
								if(gLog==1){console.log("STORECATEGORY CATNAME Found: ", storeCatArray[x][1]);}
							}
							var catBigImgTagStart = categoryHTMLTest.indexOf("<!--CATBIGIMG");
							if (catBigImgTagStart != -1) {
								var catBigImgTagEnd = categoryHTMLTest.indexOf(">",catBigImgTagStart);
								var catBigImgTagStrip = categoryHTMLTest.substring(catBigImgTagStart,(catBigImgTagEnd+1));
								var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBigImgTagStart);
								var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBigImgTagEnd+1));
								var catBigImgReplaceTest = catBigImgTagStrip.indexOf(" REPLACE");
								if (catBigImgReplaceTest != -1) {
									var catBigImgReplace = 1;
								}
								else {
									var catBigImgReplace = 0;
								}
								var catBigImgTagLinkTest = catBigImgTagStrip.indexOf(" LINK");
								var catBigImgTagLinkStart = "";
								var catBigImgTagLinkEnd = "";
								if (catBigImgTagLinkTest != -1) {
									catBigImgTagLinkStart += "<a href='' onclick='panel2StoreSelectCat(" + storeCatArray[x][0] + ", \"panel2StoreCategoryName" + storeCatArray[x][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[x][0] + ", \"panel1StoreCategoryNameVar" + storeCatArray[x][0] + "\");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2StoreSelectCat(" + storeCatArray[x][0] + ", \"panel2StoreCategoryName" + storeCatArray[x][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[x][0] + ", \"panel1StoreCategoryNameVar" + storeCatArray[x][0] + "\");return false;}'";
									if (hoverState==1) {
										catBigImgTagLinkStart += " onmouseover='panel2StoreCatMouseOver(\"panel2StoreCategoryName" + storeCatArray[x][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[x][0] + "," + catBigImgReplace + ");' onfocus='panel2StoreCatMouseOver(\"panel2StoreCategoryName" + storeCatArray[x][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[x][0] + "," + catBigImgReplace + ");' onmouseout='panel2StoreCatMouseOut(\"panel2StoreCategoryName" + storeCatArray[x][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[x][0] + "," + catBigImgReplace + ");' onblur='panel2StoreCatMouseOut(\"panel2StoreCategoryName" + storeCatArray[x][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[x][0] + "," + catBigImgReplace + ");'";
									}
									catBigImgTagLinkStart += " tabindex='0' title=\"" + storeCatArray[x][1] + "\">";
									catBigImgTagLinkEnd = "<\/a>";
								}
								categoryHTMLTest = baseCatBigImgHTMLStart + catBigImgTagLinkStart + "<img title=\"" + storeCatArray[x][1] + "\" alt=\"" + storeCatArray[x][1] + "\" id='panel2StoreCategoryBigImg" + storeCatArray[x][0] + "' class='panel_2_store_category_big_img' src='" + clientImgBase + storeCatArray[x][3] + "'>" + catBigImgTagLinkEnd + baseCatBigImgHTMLEnd;
								if(gLog==1){console.log("STORECATEGORY CATNAME Found: ", storeCatArray[x][3]);}
							}
							var catSmImgTagStart = categoryHTMLTest.indexOf("<!--CATSMIMG");
							if (catSmImgTagStart != -1) {
								var catSmImgTagEnd = categoryHTMLTest.indexOf(">",catSmImgTagStart);
								var catSmImgTagStrip = categoryHTMLTest.substring(catSmImgTagStart,(catSmImgTagEnd+1));
								var baseCatSmImgHTMLStart = categoryHTMLTest.substr(0,catSmImgTagStart);
								var baseCatSmImgHTMLEnd = categoryHTMLTest.substr((catSmImgTagEnd+1));
								var catSmImgReplaceTest = catSmImgTagStrip.indexOf(" REPLACE");
								if (catSmImgReplaceTest != -1) {
									var catSmImgReplace = 1;
								}
								else {
									var catSmImgReplace = 0;
								}
								var catSmImgTagLinkTest = catSmImgTagStrip.indexOf(" LINK");
								var catSmImgTagLinkStart = "";
								var catSmImgTagLinkEnd = "";
								if (catSmImgTagLinkTest != -1) {
									catSmImgTagLinkStart += "<a href='' onclick='panel2StoreSelectCat(" + storeCatArray[x][0] + ", \"panel2StoreCategoryName" + storeCatArray[x][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[x][0] + ", \"panel1StoreCategoryNameVar" + storeCatArray[x][0] + "\");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2StoreSelectCat(" + storeCatArray[x][0] + ", \"panel2StoreCategoryName" + storeCatArray[x][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[x][0] + ", \"panel1StoreCategoryNameVar" + storeCatArray[x][0] + "\");return false;}'";
									if (hoverState==1) {
										catSmImgTagLinkStart += " onmouseover='panel2StoreCatMouseOver(\"panel2StoreCategoryName" + storeCatArray[x][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[x][0] + "," + catSmImgReplace + ");' onfocus='panel2StoreCatMouseOver(\"panel2StoreCategoryName" + storeCatArray[x][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[x][0] + "," + catSmImgReplace + ");' onmouseout='panel2StoreCatMouseOut(\"panel2StoreCategoryName" + storeCatArray[x][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[x][0] + "," + catSmImgReplace + ");' onblur='panel2StoreCatMouseOut(\"panel2StoreCategoryName" + storeCatArray[x][0] + "\", \"panel_2_store_category_name\", panel1StoreCategoryNameVar" + storeCatArray[x][0] + "," + catSmImgReplace + ");'";
									}
									catSmImgTagLinkStart += " tabindex='0' title=\"" + storeCatArray[x][1] + "\">";
									catSmImgTagLinkEnd = "<\/a>";
								}
								categoryHTMLTest = baseCatSmImgHTMLStart + catSmImgTagLinkStart + "<img title=\"" + storeCatArray[x][1] + "\" alt=\"" + storeCatArray[x][1] + "\" id='panel2StoreCategorySmImg" + storeCatArray[x][0] + "' class='panel_2_store_category_sm_img' src='" + clientImgBase + storeCatArray[x][4] + "'>" + catSmImgTagLinkEnd + baseCatSmImgHTMLEnd;
								if(gLog==1){console.log("STORECATEGORY CATNAME Found: ", storeCatArray[x][4]);}
							}
							categoryHTML += categoryHTMLTest;
						}
					}
					baseHTML = baseHTMLStart + categoryHTML + baseHTMLEnd;
				}
				else {
					catSearchOn = 0;
					panel2storecategoryholder = 1;
				}
			}
			var multiMapTagStart = baseHTML.indexOf("<!--MULTIMAP");
			if (multiMapTagStart != -1) {
				var multiMapTagEnd = baseHTML.indexOf(">",multiMapTagStart);
				var multiMapTagStrip = baseHTML.substring(multiMapTagStart,(multiMapTagEnd+1));
				var baseMultiMapHTMLStart = baseHTML.substr(0,multiMapTagStart);
				var baseMultiMapHTMLEnd = baseHTML.substr((multiMapTagEnd+1));
				var multiMapTagStoreCatPins = multiMapTagStrip.indexOf(" SCATPINS");
				if (multiMapTagStoreCatPins != -1) {
					panel2MapPinType = 1;
					panel2SCatPins = 1;
				}
				var multiMapTagPromoPins = multiMapTagStrip.indexOf(" PROMOPINS");
				if (multiMapTagPromoPins != -1) {
					panel2PMapPinType = 1;
				}
				if((winWidth > globalRespWidth || onretPar == 1 || mobMap == 1) && globShowMap == 1) {
					baseHTML = baseMultiMapHTMLStart + "<div id='panel2MultiMap' class='panel_2_multi_map'><\/div>" + baseMultiMapHTMLEnd;
				}
			}
			var premiseButtonTagStart = baseHTML.indexOf("<!--PREMISEBUTTON");
			if (premiseButtonTagStart != -1 && disableForms == 0) {
				var premiseButtonTagEnd = baseHTML.indexOf(">",premiseButtonTagStart);
				var premiseButtonTagStrip = baseHTML.substring(premiseButtonTagStart,(premiseButtonTagEnd+1));
				var premiseButtonHTMLStart = baseHTML.substr(0,premiseButtonTagStart);
				var premiseButtonHTMLEnd = baseHTML.substr((premiseButtonTagEnd+1));
				var premiseButtonRender = "";
				var premiseButtonValueStart = premiseButtonTagStrip.indexOf(" VALUE=");
				if (premiseButtonValueStart != -1) {
					var premiseButtonValueEnd = premiseButtonTagStrip.indexOf("]",premiseButtonValueStart);
					var premiseButtonValueVar = premiseButtonTagStrip.substring((premiseButtonValueStart+8),(premiseButtonValueEnd));
				}
				else {
					var premiseButtonValueVar = "FILTER BY";
				}
				var premiseButtonItalicStart = premiseButtonTagStrip.indexOf(" FNTAW=");
				if (premiseButtonItalicStart != -1) {
					var premiseButtonItalicEnd = premiseButtonTagStrip.indexOf("]",premiseButtonItalicStart);
					var premiseButtonItalicVar = "<i class='fa " + premiseButtonTagStrip.substring((premiseButtonItalicStart+8),(premiseButtonItalicEnd)) + "'><\/i>";
				}
				else {
					var premiseButtonItalicVar = "";
				}
				premiseButtonRender += "<div id='panel2RTReqButton' class='panel_2_premise_button panel_2_premise_button_off'";
				if (hoverState==1) {
					premiseButtonRender += " onmouseover='panel2ButtonHover(\"panel2RTReqButton\",\"panel_2_premise_button\",1);' onfocus='panel2ButtonHover(\"panel2RTReqButton\",\"panel_2_premise_button\",1);' onmouseout='panel2ButtonHover(\"panel2RTReqButton\",\"panel_2_premise_button\",0);' onblur='panel2ButtonHover(\"panel2RTReqButton\",\"panel_2_premise_button\",0);'";
				}
				premiseButtonRender += " onclick='compilePremiseFilter(panel2);' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){compilePremiseFilter(panel2);}' tabindex='0' title=\"" + premiseButtonValueVar + "\">" + premiseButtonItalicVar + premiseButtonValueVar + "<\/div>";
				baseHTML = premiseButtonHTMLStart + premiseButtonRender + premiseButtonHTMLEnd;
			}
			var locListTagStart = baseHTML.indexOf("<!--LOCLIST");
			if (locListTagStart != -1) {
				var locListTagEnd = baseHTML.indexOf(">",locListTagStart);
				var locListTagStrip = baseHTML.substring(locListTagStart,(locListTagEnd+1));
				var baseLocListHTMLStart = baseHTML.substr(0,locListTagStart);
				var baseLocListHTMLEnd = baseHTML.substr((locListTagEnd+1));
				var locListTagStoreCatPins = locListTagStrip.indexOf(" SCATPINS");
				if (locListTagStoreCatPins != -1) {
					panel2ListPinType = 1;
					panel2SCatPins = 1;
				}
				var locListTagPromoPins = locListTagStrip.indexOf(" PROMOPINS");
				if (locListTagPromoPins != -1) {
					panel2PListPinType = 1;
				}
				var locListTagNoLinkStart = locListTagStrip.indexOf(" NOLINK");
				if (locListTagNoLinkStart != -1) {
					panel2Go3 = 0;
				}
				var locListTagSplitStart = locListTagStrip.indexOf(" SPLIT");
				if (locListTagSplitStart != -1) {
					panel2SplitLocList = 1;
				}
				var locListTagDetailStart = locListTagStrip.indexOf(" DETAIL");
				if (locListTagDetailStart != -1) {
					panel2DetailLocList = 1;
				}
				var locListTagDTransStart = locListTagStrip.indexOf(" DTRANS=");
				if (locListTagDTransStart != -1) {
					var locListTagDTransEnd = locListTagStrip.indexOf("]",locListTagDTransStart);
					panel2DetailLocTrans = locListTagStrip.substring((locListTagDTransStart+9),(locListTagDTransEnd));
				}
				baseHTML = baseLocListHTMLStart + "<div id='panel2LocListShell' class='panel_2_loc_list_shell'><\/div><div id='prodLoaderDivBack' class='prod_loader_div_front' style='display:none;'><\/div><div id='prodLoaderDivFront' class='prod_loader_div_back' style='display:none;'><\/div>" + baseLocListHTMLEnd;
			}
			var locPrelistTagStart = baseHTML.indexOf("<!--LOCPRELIST");
			if (locPrelistTagStart != -1 && bmBypass == 1) {
				var locPrelistTagEnd = baseHTML.indexOf(">",locPrelistTagStart);
				var locPrelistTagStrip = baseHTML.substring(locPrelistTagStart,(locPrelistTagEnd+1));
				var baseLocPrelistHTMLStart = baseHTML.substr(0,locPrelistTagStart);
				var baseLocPrelistHTMLEnd = baseHTML.substr((locPrelistTagEnd+1));
				var lplTest = autotextIt(p2TemplateSet.panel2LocPrelistDiv,"panel2LocPrelist");
				baseHTML = baseLocPrelistHTMLStart + "<div id='panel2LocPrelistShell' class='panel_2_loc_prelist_shell'>" + lplTest + "<\/div>" + baseLocPrelistHTMLEnd;
			}
			var ecommListTagStart = baseHTML.indexOf("<!--ECOMMLIST");
			if (ecommListTagStart != -1) {
				var ecommListTagEnd = baseHTML.indexOf(">",ecommListTagStart);
				var ecommListTagStrip = baseHTML.substring(ecommListTagStart,(ecommListTagEnd+1));
				var ecommListHTMLStart = baseHTML.substr(0,ecommListTagStart);
				var ecommListHTMLEnd = baseHTML.substr((ecommListTagEnd+1));
				baseHTML = ecommListHTMLStart + "<div id='panel2ECommListShell' class='panel_2_ecomm_list_shell'><\/div>" + ecommListHTMLEnd;
			}
			if (dealCommon == 0) {
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
							var dealCloseVal = "<div class='panel_2_deal_shell_close' style='cursor:pointer;' onclick='panel2CloseDealShell();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2CloseDealShell();}' tabindex='0' title=\"Deals\"><i class='fa " + dealTagStrip.substring((dealItalicStart+8),(dealItalicEnd)) + "'><\/i><\/div>";
						}
						else {
							var dealCloseVal = "";
						}
						var dealCloseTextStart = dealTagStrip.indexOf(" CLOSETEXT=");
						if (dealCloseTextStart != -1) {
							var dealCloseTextEnd = dealTagStrip.indexOf("]",dealCloseTextStart);
							var dealCloseTextVal = "<div class='panel_2_deal_shell_close_text' style='cursor:pointer;' onclick='panel2CloseDealShell();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2CloseDealShell();}' tabindex='0' title=\"Close\"><div class='panel_2_deal_shell_close_text_liner'>" + dealTagStrip.substring((dealCloseTextStart+12),(dealCloseTextEnd)) + "<\/div><\/div>";
						}
						else {
							var dealCloseTextVal = "";
						}
						var dealPrevStart = dealTagStrip.indexOf(" PREV=");
						if (dealPrevStart != -1) {
							var dealPrevEnd = dealTagStrip.indexOf("]",dealPrevStart);
							p2dealPrevVal = dealTagStrip.substring((dealPrevStart+7),(dealPrevEnd));
						}
						else {
							p2dealPrevVal = "";
						}
						var dealNextStart = dealTagStrip.indexOf(" NEXT=");
						if (dealNextStart != -1) {
							var dealNextEnd = dealTagStrip.indexOf("]",dealNextStart);
							p2dealNextVal = dealTagStrip.substring((dealNextStart+7),(dealNextEnd));
						}
						else {
							p2dealNextVal = "";
						}
						p2foundDeals = 0;
						p2baseDealZip = storeDisplayArray[0][5];
						if (document.getElementById("revCodeCountry").value == "CA" || document.getElementById("revCodeCountry").value == "CAN") {
							p2baseDealZip = p2baseDealZip.substring(0,3);
							if(gLog==1){console.log("p2baseDealZip: ",p2baseDealZip);}
							for (d=0; d<thisDealOBJ.dealcount; d++) {
								for (dz=0; dz<thisDealOBJ.deal[d].zipcount; dz++) {
									if(gLog==1){console.log("Deal Check: ",p2baseDealZip,thisDealOBJ.deal[d].zip[dz].code.substring(0,3));}
									if (thisDealOBJ.deal[d].zip[dz].code.substring(0,3) == p2baseDealZip) {
										p2foundDeals++;
										break;
									}
								}
							}
						}
						else {
							if(gLog==1){console.log("p2baseDealZip: ",p2baseDealZip);}
							for (d=0; d<thisDealOBJ.dealcount; d++) {
								for (dz=0; dz<thisDealOBJ.deal[d].zipcount; dz++) {
									if (thisDealOBJ.deal[d].zip[dz].code == p2baseDealZip) {
										p2foundDeals++;
										break;
									}
								}
							}
						}
						var dealExFntawStart = dealTagStrip.indexOf(" EXITFNTAW=");
						if (dealExFntawStart != -1) {
							var dealExFntawEnd = dealTagStrip.indexOf("]",dealExFntawStart);
							p2dealExFntawVal = dealTagStrip.substring((dealExFntawStart+12),(dealExFntawEnd));
						}
						else {
							p2dealExFntawVal = "";
						}
						var dealExTxtStart = dealTagStrip.indexOf(" EXITTEXT=");
						if (dealExTxtStart != -1) {
							var dealExTxtEnd = dealTagStrip.indexOf("]",dealExTxtStart);
							p2dealExTxtVal = dealTagStrip.substring((dealExTxtStart+11),(dealExTxtEnd));
						}
						else {
							p2dealExTxtVal = "";
						}
						if (p2foundDeals != 0) {
							var dealShellHTML = autotextIt(p2TemplateSet.panel2DealHoverDiv,"panel2DealHover");
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
											if (p2foundDeals == 1) {dealsText = dealSingularVar;}
											else {dealsText = dealPluralVar;}
										}
										dealShellHTML = dealCountHTMLStart + "<span class='panel_2_deal_shell_count'><span class='panel_2_deal_shell_count_num'>" + p2foundDeals + "<\/span>" + dealsText + "<\/span>" + dealCountHTMLEnd;
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
										dealShellHTML = dealBannerHTMLStart + "<img alt=\"Browse Deals\" class='panel_2_deal_shell_banner' src='" + clientImgBase + dLiteDealBanner + "'>" + dealBannerHTMLEnd;
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
							baseHTML = baseDealHTMLStart + "<div id='panel2DealShell' class='panel_2_deal_shell'><div class='panel_2_deal_shell_liner'><div id='panel2DealShellContent' class='panel_2_deal_shell_content' onclick='showDeals(\"" + p2baseDealZip + "\", \"" + document.getElementById("revCodeState").value + "\", \"" + document.getElementById("revCodeCountry").value + "\", \"" + p2dealPrevVal + "\", \"" + p2dealNextVal + "\", \"" + p2dealExFntawVal + "\", \"" + p2dealExTxtVal + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){showDeals(\"" + p2baseDealZip + "\", \"" + document.getElementById("revCodeState").value + "\", \"" + document.getElementById("revCodeCountry").value + "\", \"" + p2dealPrevVal + "\", \"" + p2dealNextVal + "\", \"" + p2dealExFntawVal + "\", \"" + p2dealExTxtVal + "\");}' tabindex='0' title=\"Show Deals\">" + dealShellHTML + "<\/div>" + dealCloseVal + dealCloseTextVal + "<\/div><\/div>" + baseDealHTMLEnd;
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
			}
			var prodShopCartTagStart = baseHTML.indexOf("<!--PRODSHOPCART");
			if (prodShopCartTagStart != -1) {
				var prodShopCartTagEnd = baseHTML.indexOf(">",prodShopCartTagStart);
				var prodShopCartTagStrip = baseHTML.substring(prodShopCartTagStart,(prodShopCartTagEnd+1));
				var prodShopCartHTMLStart = baseHTML.substr(0,prodShopCartTagStart);
				var prodShopCartHTMLEnd = baseHTML.substr((prodShopCartTagEnd+1));
				baseHTML = prodShopCartHTMLStart + "<div id='panel2ProdShopCartShell' class='panel_2_prod_shop_cart_shell'><\/div>" + prodShopCartHTMLEnd;
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
						panel2ProductFilter = 1;
					}
					var prodListTagReSubStart = prodListTagStrip.indexOf(" RESUB");
					if (prodListTagReSubStart != -1) {
						panel2ProductFilterSub = 1;
					}
					var prodListTagSubsetStart = prodListTagStrip.indexOf(" SUBSET");
					if (prodListTagSubsetStart != -1) {
						panel2ProductSubset = 1;
					}
					var prodListTagExcludeStart = prodListTagStrip.indexOf(" EXCLUDE");
					if (prodListTagExcludeStart != -1) {
						panel2ProductExclude = 1;
					}
					var prodListTagHideprodStart = prodListTagStrip.indexOf(" HIDEPROD");
					if (prodListTagHideprodStart != -1) {
						panel2ProductHideprod = 1;
					}
					var prodListTagExcludeStart = prodListTagStrip.indexOf(" OPEN");
					var panel2PListSliderOpen = 0;
					if (prodListTagExcludeStart != -1) {
						panel2PListSliderOpen = 1;
					}
					var prodListTagSortStart = prodListTagStrip.indexOf(" SORT=");
					if (prodListTagSortStart != -1) {
						var prodListTagSortEnd = prodListTagStrip.indexOf("]",prodListTagSortStart);
						var panel2ProductSortTemp = prodListTagStrip.substring((prodListTagSortStart+7),(prodListTagSortEnd));
						if (panel2ProductSortTemp == "prodlist_sort") {
							panel2ProductSort = prodListStyle;
						}
						else {
							panel2ProductSort = panel2ProductSortTemp;
						}
					}
					var prodListTagOrderStart = prodListTagStrip.indexOf(" ORDER=");
					if (prodListTagOrderStart != -1) {
						var prodListTagOrderEnd = prodListTagStrip.indexOf("]",prodListTagOrderStart);
						panel2ProductOrder = prodListTagStrip.substring((prodListTagOrderStart+8),(prodListTagOrderEnd));
					}
					var prodListTagCatIDStart = prodListTagStrip.indexOf(" CATID=");
					if (prodListTagCatIDStart != -1) {
						var prodListTagCatIDEnd = prodListTagStrip.indexOf("]",prodListTagCatIDStart);
						var panel2ProductCatID = prodListTagStrip.substring((prodListTagCatIDStart+8),(prodListTagCatIDEnd));
					}
					else {
						var panel2ProductCatID = 0;
					}
					var prodListTagOffStart = prodListTagStrip.indexOf(" OFF");
					if (prodListTagOffStart != -1) {
						panel2AllOffIsOn = 1;
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
							if (panel2ProductSubset == 1) {
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
					if (panel2ProductOrder == "x") {
						//sortCol(prodFilterArray,2);
					}
					else {
						var prodOrderArray = panel2ProductOrder.split(",");
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
					if (prodFilterArray.length && panel2AllOffIsOn == 1) {
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
					if(gLog==1){console.log("PRODLIST - prodDisplayArray: ", prodDisplayArray);}
					if (panel2ProductSort == "CATEGORY") {
						if (panel2ProductCatID != 0) {
							for (w=0; w<catArray.length; w++) {
								if (catArray[w][0] == panel2ProductCatID) {
									var categoryHTMLTest = autotextIt(p2TemplateSet.panel2CategoryDiv,"panel2Category");
									var catBadgeTagStart = categoryHTMLTest.indexOf("<!--BADGE");
									if (catBadgeTagStart != -1) {
										var catBadgeTagEnd = categoryHTMLTest.indexOf(">",catBadgeTagStart);
										var catBadgeTagStrip = categoryHTMLTest.substring(catBadgeTagStart,(catBadgeTagEnd+1));
										var baseCatBadgeHTMLStart = categoryHTMLTest.substr(0,catBadgeTagStart);
										var baseCatBadgeHTMLEnd = categoryHTMLTest.substr((catBadgeTagEnd+1));
										categoryHTMLTest = baseCatBadgeHTMLStart + "<span id='panel2ProdlistCatBadge" + catArray[w][0] + "' class='panel_2_prodlist_cat_badge' style='display:none;'>0<\/span>" + baseCatBadgeHTMLEnd;
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
											var replaceImgMouseOver = "panel2CatImgReplace(1," + catArray[w][0] + ");";
											var replaceImgMouseOut = "panel2CatImgReplace(2," + catArray[w][0] + ");";
											var replaceImgMouseClass = " img_replace_active";
											var replaceImgCall = "panel2CatImgClick(" + catArray[w][0] + ");";
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
											catNameTagLink += " style='cursor:pointer;' onclick='panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\");" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\");" + replaceImgCall + "}'";
											if (hoverState==1) {
												catNameTagLink += " onmouseover='panel2CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel2CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel2CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel2CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
											}
											var thisCatIsOn = 1;
											for (q=0; q<prodFilterArray.length; q++) {
												if (prodFilterArray[q][8] == catArray[w][0] && prodFilterArray[q][9] == "0") {
													thisCatIsOn = 0;
													break;
												}
											}
											if (thisCatIsOn == 1) {
												var baseCatStyle = " panel_2_category_name_on";
												catArray[w][6] = 1;
												window["panel1CategoryNameVar" + catArray[w][0]] = 1;
											}
											else {
												var baseCatStyle = " panel_2_category_name_off";
											}
										}
										categoryHTMLTest = baseCatNameHTMLStart + "<div id='panel2CategoryName" + catArray[w][0] + "' class='panel_2_category_name_" + catArray[w][0] + replaceImgMouseClass + " panel_2_category_name " + baseCatStyle + "'" + catNameTagLink + " tabindex='0' title=\"" + catArray[w][1] + "\">" + catArray[w][1] + daProdNumWrite + "<\/div>" + baseCatNameHTMLEnd;
									}
									var catBigImgTagStart = categoryHTMLTest.indexOf("<!--CATBIGIMG");
									if (catBigImgTagStart != -1) {
										var catBigImgTagEnd = categoryHTMLTest.indexOf(">",catBigImgTagStart);
										var catBigImgTagStrip = categoryHTMLTest.substring(catBigImgTagStart,(catBigImgTagEnd+1));
										var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBigImgTagStart);
										var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBigImgTagEnd+1));
										var baseCatBigImgRender = "";
										var replaceImgTest = catBigImgTagStrip.indexOf(" REPLACE");
										if (replaceImgTest != -1) {
											baseCatBigImgRender += "<div title=\"" + catArray[w][1] + "\" id='panel2CategoryBigImgDivShell" + catArray[w][0] + "' class='panel_2_category_big_img_div_shell panel_2_category_big_img_div_shell_" + catArray[w][0] + "' onclick='panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\");panel2CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\");panel2CatImgClick(" + catArray[w][0] + ");}'";
											if (hoverState==1) {
												baseCatBigImgRender += " onmouseover='panel2CatMouseOver(" + w + ");panel2CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel2CatMouseOver(" + w + ");panel2CatImgReplace(1," + catArray[w][0] + ");'";
											}
											baseCatBigImgRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel2CategoryBigImgDivBack" + catArray[w][0] + "' class='panel_2_category_big_img_div_back panel_2_category_big_img_div_back_off panel_2_category_big_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][3] + "\");'><\/div><div id='panel2CategoryBigImgDivOver" + catArray[w][0] + "' class='panel_2_category_big_img_div_over panel_2_category_big_img_div_over_" + catArray[w][0] + "'";
											if (hoverState==1) {
												baseCatBigImgRender += " onmouseout='panel2CatMouseOut(" + w + ");panel2CatImgReplace(2," + catArray[w][0] + ");' onblur='panel2CatMouseOut(" + w + ");panel2CatImgReplace(2," + catArray[w][0] + ");'";
											}
											baseCatBigImgRender += " style='display:none;'>&nbsp;<\/div><\/div>";
											categoryHTMLTest = baseCatBigImgHTMLStart + baseCatBigImgRender + baseCatBigImgHTMLEnd;
										}
										else {
											categoryHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel2CategoryBigImg" + catArray[w][0] + "' class='panel_2_category_big_img' src='" + clientImgBase + catArray[w][3] + "'>" + baseCatBigImgHTMLEnd;
										}
									}
									var catSmImgTagStart = categoryHTMLTest.indexOf("<!--CATSMIMG");
									if (catSmImgTagStart != -1) {
										var catSmImgTagEnd = categoryHTMLTest.indexOf(">",catSmImgTagStart);
										var catSmImgTagStrip = categoryHTMLTest.substring(catSmImgTagStart,(catSmImgTagEnd+1));
										var baseCatSmImgHTMLStart = categoryHTMLTest.substr(0,catSmImgTagStart);
										var baseCatSmImgHTMLEnd = categoryHTMLTest.substr((catSmImgTagEnd+1));
										var baseCatSmImgRender = "";
										var replaceImgTest = catSmImgTagStrip.indexOf(" REPLACE");
										if (replaceImgTest != -1) {
											baseCatSmImgRender += "<div title=\"" + catArray[w][1] + "\" id='panel2CategorySmImgDivShell" + catArray[w][0] + "' class='panel_2_category_sm_img_div_shell panel_2_category_sm_img_div_shell_" + catArray[w][0] + "' onclick='panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\");panel2CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\");panel2CatImgClick(" + catArray[w][0] + ");}'";
											if (hoverState==1) {
												baseCatSmImgRender += " onmouseover='panel2CatMouseOver(" + w + ");panel2CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel2CatMouseOver(" + w + ");panel2CatImgReplace(1," + catArray[w][0] + ");'";
											}
											baseCatSmImgRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel2CategorySmImgDivBack" + catArray[w][0] + "' class='panel_2_category_sm_img_div_back panel_2_category_sm_img_div_back_off panel_2_category_sm_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][4] + "\");'><\/div><div id='panel2CategorySmImgDivOver" + catArray[w][0] + "' class='panel_2_category_sm_img_div_over panel_2_category_sm_img_div_over_" + catArray[w][0] + "'";
											if (hoverState==1) {
												baseCatSmImgRender += " onmouseout='panel2CatMouseOut(" + w + ");panel2CatImgReplace(2," + catArray[w][0] + ");' onblur='panel2CatMouseOut(" + w + ");panel2CatImgReplace(2," + catArray[w][0] + ");'";
											}
											baseCatSmImgRender += " style='display:none;'>&nbsp;<\/div><\/div>";
											categoryHTMLTest = baseCatSmImgHTMLStart + baseCatSmImgRender + baseCatSmImgHTMLEnd;
										}
										else {
											categoryHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel2CategorySmImg" + catArray[w][0] + "' class='panel_2_category_sm_img' src='" + clientImgBase + catArray[w][4] + "'>" + baseCatSmImgHTMLEnd;
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
											var replaceImgMouseOver = "panel2CatImgReplace(1," + catArray[w][0] + ");";
											var replaceImgMouseOut = "panel2CatImgReplace(2," + catArray[w][0] + ");";
											var replaceImgMouseClass = " img_replace_active";
											var replaceImgCall = "panel2CatImgClick(" + catArray[w][0] + ");";
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
											catAllTagLink += " style='cursor:pointer;' onclick='panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\");" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\");" + replaceImgCall + "}'";
											if (hoverState==1) {
												catAllTagLink += " onmouseover='panel2CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel2CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel2CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel2CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
											}
										}
										categoryHTMLTest = baseCatAllHTMLStart + "<div id='panel2CategoryName" + catArray[w][0] + "All' class='panel_2_category_name_all_" + catArray[w][0] + replaceImgMouseClass + " panel_2_category_name_all" + replaceImgMouseClass + " panel_2_category_name_all_off'" + catAllTagLink + " tabindex='0' title=\"" + catAllValueVal + "\">" + catAllValueVal + "<\/div>" + baseCatAllHTMLEnd;
									}
									prodListHTML += "<span class='panel_2_prodlist_catshell panel_2_prodlist_catshell_" + catArray[w][0] + " panel_2_prodlist_catshell_off'>" + categoryHTMLTest + "<\/span>";
									for (x=0; x<prodFilterArray.length; x++) {
										if (prodFilterArray[x][8] == catArray[w][0]) {
											var productHTMLTest = autotextIt(p2TemplateSet.panel2ProductDiv,"panel2Product");
											var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
											if (prodDiscTagStart != -1) {
												var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
												var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
												var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
												var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
												var prodDiscWrite = "";
												var discVal = prodFilterArray[x][6];
												if (discVal != 1) {
													prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel2Product_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
												}
												productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
											}
											var prodNameTagStart = productHTMLTest.indexOf("<!--PRODNAME");
											if (prodNameTagStart != -1) {
												var prodNameTagEnd = productHTMLTest.indexOf(">",prodNameTagStart);
												var prodNameTagStrip = productHTMLTest.substring(prodNameTagStart,(prodNameTagEnd+1));
												var baseProdNameHTMLStart = productHTMLTest.substr(0,prodNameTagStart);
												var baseProdNameHTMLEnd = productHTMLTest.substr((prodNameTagEnd+1));
												var prodNameTagLink = " style='cursor:pointer;' onclick='panel2ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");}'";
												if (hoverState==1) {
													prodNameTagLink += " onmouseover='panel2ProdMouseOver(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");' onfocus='panel2ProdMouseOver(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");' onmouseout='panel2ProdMouseOut(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");' onblur='panel2ProdMouseOut(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");'";
												}
												if (prodFilterArray[x][9] == "1") {
													var baseProductStyle = " panel_2_product_name_on";
												}
												else {
													var baseProductStyle = " panel_2_product_name_off";
												}
												var descTest = prodNameTagStrip.indexOf(" DESC");
												if (descTest != -1) {
													var descVal = "<span class='panel_2_product_name_desc'>" + prodFilterArray[x][3] + "<\/span>";
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
												productHTMLTest = baseProdNameHTMLStart + "<div id='panel2ProductName" + prodFilterArray[x][0] + "' class='panel_2_product_name" + baseProductStyle + "'" + prodNameTagLink + " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">" + prodNameItalicVar + "<span class='panel_2_product_name_name'>" + prodFilterArray[x][2] + "<\/span>" + descVal + "<\/div>" + baseProdNameHTMLEnd;
											}
											var prodDescTagStart = productHTMLTest.indexOf("<!--PRODDESC");
											if (prodDescTagStart != -1) {
												var prodDescTagEnd = productHTMLTest.indexOf(">",prodDescTagStart);
												var prodDescTagStrip = productHTMLTest.substring(prodDescTagStart,(prodDescTagEnd+1));
												var baseProdDescHTMLStart = productHTMLTest.substr(0,prodDescTagStart);
												var baseProdDescHTMLEnd = productHTMLTest.substr((prodDescTagEnd+1));
												productHTMLTest = baseProdDescHTMLStart + "<div id='panel2ProductDesc" + prodFilterArray[x][0] + "' class='panel_2_product_desc'>" + prodFilterArray[x][3] + "<\/div>" + baseProdDescHTMLEnd;
											}
											var prodCatTagStart = productHTMLTest.indexOf("<!--PRODCAT");
											if (prodCatTagStart != -1) {
												var prodCatTagEnd = productHTMLTest.indexOf(">",prodCatTagStart);
												var prodCatTagStrip = productHTMLTest.substring(prodCatTagStart,(prodCatTagEnd+1));
												var baseProdCatHTMLStart = productHTMLTest.substr(0,prodCatTagStart);
												var baseProdCatHTMLEnd = productHTMLTest.substr((prodCatTagEnd+1));
												productHTMLTest = baseProdCatHTMLStart + "<div id='panel2ProductCat" + prodFilterArray[x][0] + "' class='panel_2_product_cat'>" + prodFilterArray[x][16] + "<\/div>" + baseProdCatHTMLEnd;
											}
											var prodBigImgTagStart = productHTMLTest.indexOf("<!--PRODBIGIMG");
											if (prodBigImgTagStart != -1) {
												var prodBigImgTagEnd = productHTMLTest.indexOf(">",prodBigImgTagStart);
												var prodBigImgTagStrip = productHTMLTest.substring(prodBigImgTagStart,(prodBigImgTagEnd+1));
												var baseProdBigImgHTMLStart = productHTMLTest.substr(0,prodBigImgTagStart);
												var baseProdBigImgHTMLEnd = productHTMLTest.substr((prodBigImgTagEnd+1));
												var prodBigImgTagLinkStart = "<a href='' onclick='panel2ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");return false;}'";
												if (hoverState==1) {
													prodBigImgTagLinkStart += " onmouseover='panel2ProdMouseOver(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");' onfocus='panel2ProdMouseOver(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");' onmouseout='panel2ProdMouseOut(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");' onblur='panel2ProdMouseOut(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");'";
												}
												prodBigImgTagLinkStart += " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">";
												var prodBigImgTagLinkEnd = "<\/a>";
												productHTMLTest = baseProdBigImgHTMLStart + prodBigImgTagLinkStart + "<img title=\"" + prodFilterArray[x][2] + "\" alt=\"" + prodFilterArray[x][2] + "\" id='panel2ProductBigImg" + prodFilterArray[x][0] + "' class='panel_2_product_big_img' src='" + clientImgBase + prodFilterArray[x][4] + "'>" + prodBigImgTagLinkEnd + baseProdBigImgHTMLEnd;
											}
											var prodSmImgTagStart = productHTMLTest.indexOf("<!--PRODSMIMG");
											if (prodSmImgTagStart != -1) {
												var prodSmImgTagEnd = productHTMLTest.indexOf(">",prodSmImgTagStart);
												var prodSmImgTagStrip = productHTMLTest.substring(prodSmImgTagStart,(prodSmImgTagEnd+1));
												var baseProdSmImgHTMLStart = productHTMLTest.substr(0,prodSmImgTagStart);
												var baseProdSmImgHTMLEnd = productHTMLTest.substr((prodSmImgTagEnd+1));
												var prodSmImgTagLinkStart = "<a href='' onclick='panel2ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");return false;}'";
												if (hoverState==1) {
													prodSmImgTagLinkStart += " onmouseover='panel2ProdMouseOver(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");' onfocus='panel2ProdMouseOver(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");' onmouseout='panel2ProdMouseOut(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");' onblur='panel2ProdMouseOut(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");'";
												}
												prodSmImgTagLinkStart += " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">";
												var prodSmImgTagLinkEnd = "<\/a>";
												productHTMLTest = baseProdSmImgHTMLStart + prodSmImgTagLinkStart + "<img title=\"" + prodFilterArray[x][2] + "\" alt=\"" + prodFilterArray[x][2] + "\" id='panel2ProductSmImg" + prodFilterArray[x][0] + "' class='panel_2_product_sm_img' src='" + clientImgBase + prodFilterArray[x][5] + "'>" + prodSmImgTagLinkEnd + baseProdSmImgHTMLEnd;
											}
											prodListHTML += "<span class='panel_2_prodlist_prodshell panel_2_prodlist_prodshell_" + prodFilterArray[x][0] + " panel_2_prodlist_prodshell_off'>" + productHTMLTest + "<\/span>";
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
											var categoryHTMLTest = autotextIt(p2TemplateSet.panel2CategoryDiv,"panel2Category");
											var catBadgeTagStart = categoryHTMLTest.indexOf("<!--BADGE");
											if (catBadgeTagStart != -1) {
												var catBadgeTagEnd = categoryHTMLTest.indexOf(">",catBadgeTagStart);
												var catBadgeTagStrip = categoryHTMLTest.substring(catBadgeTagStart,(catBadgeTagEnd+1));
												var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBadgeTagStart);
												var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBadgeTagEnd+1));
												categoryHTMLTest = baseCatBigImgHTMLStart + "<span id='panel2ProdlistCatBadge" + catArray[w][0] + "' class='panel_2_prodlist_cat_badge' style='display:none;'>0<\/span>" + baseCatBigImgHTMLEnd;
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
													var replaceImgMouseOver = "panel2CatImgReplace(1," + catArray[w][0] + ");";
													var replaceImgMouseOut = "panel2CatImgReplace(2," + catArray[w][0] + ");";
													var replaceImgMouseClass = " img_replace_active";
													var replaceImgCall = "panel2CatImgClick(" + catArray[w][0] + ");";
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
													catNameTagLink += " style='cursor:pointer;' onclick='panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\");" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\");" + replaceImgCall + "}'";
													if (hoverState==1) {
														catNameTagLink += " onmouseover='panel2CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel2CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel2CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel2CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
													}
													var thisCatIsOn = 1;
													for (q=0; q<prodFilterArray.length; q++) {
														if (prodFilterArray[q][8] == catArray[w][0] && prodFilterArray[q][9] == "0") {
															thisCatIsOn = 0;
															break;
														}
													}
													if (thisCatIsOn == 1) {
														var baseCatStyle = " panel_2_category_name_on";
														catArray[w][6] = 1;
														window["panel1CategoryNameVar" + catArray[w][0]] = 1;
													}
													else {
														var baseCatStyle = " panel_2_category_name_off";
													}
												}
												categoryHTMLTest = baseCatNameHTMLStart + "<div id='panel2CategoryName" + catArray[w][0] + "' class='panel_2_category_name_" + catArray[w][0] + replaceImgMouseClass + " panel_2_category_name'" + catNameTagLink + " tabindex='0' title=\"" + catArray[w][1] + "\">" + catArray[w][1] + daProdNumWrite + "<\/div>" + baseCatNameHTMLEnd;
											}
											var catBigImgTagStart = categoryHTMLTest.indexOf("<!--CATBIGIMG");
											if (catBigImgTagStart != -1) {
												var catBigImgTagEnd = categoryHTMLTest.indexOf(">",catBigImgTagStart);
												var catBigImgTagStrip = categoryHTMLTest.substring(catBigImgTagStart,(catBigImgTagEnd+1));
												var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBigImgTagStart);
												var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBigImgTagEnd+1));
												var baseCatBigImgRender = "";
												var replaceImgTest = catBigImgTagStrip.indexOf(" REPLACE");
												if (replaceImgTest != -1) {
													baseCatBigImgRender += "<div title=\"" + catArray[w][1] + "\" id='panel2CategoryBigImgDivShell" + catArray[w][0] + "' class='panel_2_category_big_img_div_shell panel_2_category_big_img_div_shell_" + catArray[w][0] + "' onclick='panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\");panel2CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\");panel2CatImgClick(" + catArray[w][0] + ");}'";
													if (hoverState==1) {
														baseCatBigImgRender += " onmouseover='panel2CatMouseOver(" + w + ");panel2CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel2CatMouseOver(" + w + ");panel2CatImgReplace(1," + catArray[w][0] + ");'";
													}
													baseCatBigImgRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel2CategoryBigImgDivBack" + catArray[w][0] + "' class='panel_2_category_big_img_div_back panel_2_category_big_img_div_back_off panel_2_category_big_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][3] + "\");'><\/div><div id='panel2CategoryBigImgDivOver" + catArray[w][0] + "' class='panel_2_category_big_img_div_over panel_2_category_big_img_div_over_" + catArray[w][0] + "'";
													if (hoverState==1) {
														baseCatBigImgRender += " onmouseout='panel2CatMouseOut(" + w + ");panel2CatImgReplace(2," + catArray[w][0] + ");' onblur='panel2CatMouseOut(" + w + ");panel2CatImgReplace(2," + catArray[w][0] + ");'";
													}
													baseCatBigImgRender += " style='display:none;'>&nbsp;<\/div><\/div>";
													categoryHTMLTest = baseCatBigImgHTMLStart + baseCatBigImgRender + baseCatBigImgHTMLEnd;
												}
												else {
													categoryHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel2CategoryBigImg" + catArray[w][0] + "' class='panel_2_category_big_img' src='" + clientImgBase + catArray[w][3] + "'>" + baseCatBigImgHTMLEnd;
												}
											}
											var catSmImgTagStart = categoryHTMLTest.indexOf("<!--CATSMIMG");
											if (catSmImgTagStart != -1) {
												var catSmImgTagEnd = categoryHTMLTest.indexOf(">",catSmImgTagStart);
												var catSmImgTagStrip = categoryHTMLTest.substring(catSmImgTagStart,(catSmImgTagEnd+1));
												var baseCatSmImgHTMLStart = categoryHTMLTest.substr(0,catSmImgTagStart);
												var baseCatSmImgHTMLEnd = categoryHTMLTest.substr((catSmImgTagEnd+1));
												var baseCatSmImgRender = "";
												var replaceImgTest = catSmImgTagStrip.indexOf(" REPLACE");
												if (replaceImgTest != -1) {
													baseCatSmImgRender += "<div title=\"" + catArray[w][1] + "\" id='panel2CategorySmImgDivShell" + catArray[w][0] + "' class='panel_2_category_sm_img_div_shell panel_2_category_sm_img_div_shell_" + catArray[w][0] + "' onclick='panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\");panel2CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\");panel2CatImgClick(" + catArray[w][0] + ");}'";
													if (hoverState==1) {
														baseCatSmImgRender += " onmouseover='panel2CatMouseOver(" + w + ");panel2CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel2CatMouseOver(" + w + ");panel2CatImgReplace(1," + catArray[w][0] + ");'";
													}
													baseCatSmImgRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel2CategorySmImgDivBack" + catArray[w][0] + "' class='panel_2_category_sm_img_div_back panel_2_category_sm_img_div_back_off panel_2_category_sm_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][4] + "\");'><\/div><div id='panel2CategorySmImgDivOver" + catArray[w][0] + "' class='panel_2_category_sm_img_div_over panel_2_category_sm_img_div_over_" + catArray[w][0] + "'";
													if (hoverState==1) {
														baseCatSmImgRender += " onmouseout='panel2CatMouseOut(" + w + ");panel2CatImgReplace(2," + catArray[w][0] + ");' onblur='panel2CatMouseOut(" + w + ");panel2CatImgReplace(2," + catArray[w][0] + ");'";
													}
													baseCatSmImgRender += " style='display:none;'>&nbsp;<\/div><\/div>";
													categoryHTMLTest = baseCatSmImgHTMLStart + baseCatSmImgRender + baseCatSmImgHTMLEnd;
												}
												else {
													categoryHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel2CategorySmImg" + catArray[w][0] + "' class='panel_2_category_sm_img' src='" + clientImgBase + catArray[w][4] + "'>" + baseCatSmImgHTMLEnd;
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
													var replaceImgMouseOver = "panel2CatImgReplace(1," + catArray[w][0] + ");";
													var replaceImgMouseOut = "panel2CatImgReplace(2," + catArray[w][0] + ");";
													var replaceImgMouseClass = " img_replace_active";
													var replaceImgCall = "panel2CatImgClick(" + catArray[w][0] + ");";
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
													catAllTagLink += " style='cursor:pointer;' onclick='panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\");" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\");" + replaceImgCall + "}'";
													if (hoverState==1) {
														catAllTagLink += " onmouseover='panel2CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel2CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel2CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel2CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
													}
												}
												categoryHTMLTest = baseCatAllHTMLStart + "<div id='panel2CategoryName" + catArray[w][0] + "All' class='panel_2_category_name_all_" + catArray[w][0] + replaceImgMouseClass + " panel_2_category_name_all" + replaceImgMouseClass + " panel_2_category_name_all_off'" + catAllTagLink + " tabindex='0' title=\"" + catAllValueVal + "\">" + catAllValueVal + "<\/div>" + baseCatAllHTMLEnd;
											}
											prodListHTML += "<span class='panel_2_prodlist_catshell panel_2_prodlist_catshell_" + catArray[w][0] + " panel_2_prodlist_catshell_off'>" + categoryHTMLTest + "<\/span>";
										}
										if (panel2ProductHideprod == 1 && prodFilterArray[x][0] == 0) {
											var writeDisProdRow = 0;
										}
										else {
											var writeDisProdRow = 1;
										}
										if (writeDisProdRow == 1) {
											var productHTMLTest = autotextIt(p2TemplateSet.panel2ProductDiv,"panel2Product");
											var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
											if (prodDiscTagStart != -1) {
												var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
												var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
												var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
												var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
												var prodDiscWrite = "";
												var discVal = prodFilterArray[x][6];
												if (discVal != 1) {
													prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel2Product_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
												}
												productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
											}
											var prodNameTagStart = productHTMLTest.indexOf("<!--PRODNAME");
											if (prodNameTagStart != -1) {
												var prodNameTagEnd = productHTMLTest.indexOf(">",prodNameTagStart);
												var prodNameTagStrip = productHTMLTest.substring(prodNameTagStart,(prodNameTagEnd+1));
												var baseProdNameHTMLStart = productHTMLTest.substr(0,prodNameTagStart);
												var baseProdNameHTMLEnd = productHTMLTest.substr((prodNameTagEnd+1));
												var prodNameTagLink = " style='cursor:pointer;' onclick='panel2ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");}'";
												if (hoverState==1) {
													prodNameTagLink += " onmouseover='panel2ProdMouseOver(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");' onfocus='panel2ProdMouseOver(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");' onmouseout='panel2ProdMouseOut(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");' onblur='panel2ProdMouseOut(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");'";
												}
												if (prodFilterArray[x][9] == "1") {
													var baseProductStyle = " panel_2_product_name_on";
												}
												else {
													var baseProductStyle = " panel_2_product_name_off";
												}
												var descTest = prodNameTagStrip.indexOf(" DESC");
												if (descTest != -1) {
													var descVal = "<span class='panel_2_product_name_desc'>" + prodFilterArray[x][3] + "<\/span>";
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
												productHTMLTest = baseProdNameHTMLStart + "<div id='panel2ProductName" + prodFilterArray[x][0] + "' class='panel_2_product_name" + baseProductStyle + "'" + prodNameTagLink + " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">" + prodNameItalicVar + "<span class='panel_2_product_name_name'>" + prodFilterArray[x][2] + "<\/span>" + descVal + "<\/div>" + baseProdNameHTMLEnd;
											}
											var prodDescTagStart = productHTMLTest.indexOf("<!--PRODDESC");
											if (prodDescTagStart != -1) {
												var prodDescTagEnd = productHTMLTest.indexOf(">",prodDescTagStart);
												var prodDescTagStrip = productHTMLTest.substring(prodDescTagStart,(prodDescTagEnd+1));
												var baseProdDescHTMLStart = productHTMLTest.substr(0,prodDescTagStart);
												var baseProdDescHTMLEnd = productHTMLTest.substr((prodDescTagEnd+1));
												productHTMLTest = baseProdDescHTMLStart + "<div id='panel2ProductDesc" + prodFilterArray[x][0] + "' class='panel_2_product_desc'>" + prodFilterArray[x][3] + "<\/div>" + baseProdDescHTMLEnd;
											}
											var prodCatTagStart = productHTMLTest.indexOf("<!--PRODCAT");
											if (prodCatTagStart != -1) {
												var prodCatTagEnd = productHTMLTest.indexOf(">",prodCatTagStart);
												var prodCatTagStrip = productHTMLTest.substring(prodCatTagStart,(prodCatTagEnd+1));
												var baseProdCatHTMLStart = productHTMLTest.substr(0,prodCatTagStart);
												var baseProdCatHTMLEnd = productHTMLTest.substr((prodCatTagEnd+1));
												productHTMLTest = baseProdCatHTMLStart + "<div id='panel2ProductCat" + prodFilterArray[x][0] + "' class='panel_2_product_cat'>" + prodFilterArray[x][16] + "<\/div>" + baseProdCatHTMLEnd;
											}
											var prodBigImgTagStart = productHTMLTest.indexOf("<!--PRODBIGIMG");
											if (prodBigImgTagStart != -1) {
												var prodBigImgTagEnd = productHTMLTest.indexOf(">",prodBigImgTagStart);
												var prodBigImgTagStrip = productHTMLTest.substring(prodBigImgTagStart,(prodBigImgTagEnd+1));
												var baseProdBigImgHTMLStart = productHTMLTest.substr(0,prodBigImgTagStart);
												var baseProdBigImgHTMLEnd = productHTMLTest.substr((prodBigImgTagEnd+1));
												var prodBigImgTagLinkStart = "<a href='' onclick='panel2ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");return false;}'";
												if (hoverState==1) {
													prodBigImgTagLinkStart += " onmouseover='panel2ProdMouseOver(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");' onfocus='panel2ProdMouseOver(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");' onmouseout='panel2ProdMouseOut(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");' onblur='panel2ProdMouseOut(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");'";
												}
												prodBigImgTagLinkStart += " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">";
												var prodBigImgTagLinkEnd = "<\/a>";
												productHTMLTest = baseProdBigImgHTMLStart + prodBigImgTagLinkStart + "<img title=\"" + prodFilterArray[x][2] + "\" alt=\"" + prodFilterArray[x][2] + "\" id='panel2ProductBigImg" + prodFilterArray[x][0] + "' class='panel_2_product_big_img' src='" + clientImgBase + prodFilterArray[x][4] + "'>" + prodBigImgTagLinkEnd + baseProdBigImgHTMLEnd;
											}
											var prodSmImgTagStart = productHTMLTest.indexOf("<!--PRODSMIMG");
											if (prodSmImgTagStart != -1) {
												var prodSmImgTagEnd = productHTMLTest.indexOf(">",prodSmImgTagStart);
												var prodSmImgTagStrip = productHTMLTest.substring(prodSmImgTagStart,(prodSmImgTagEnd+1));
												var baseProdSmImgHTMLStart = productHTMLTest.substr(0,prodSmImgTagStart);
												var baseProdSmImgHTMLEnd = productHTMLTest.substr((prodSmImgTagEnd+1));
												var prodSmImgTagLinkStart = "<a href='' onclick='panel2ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");return false;}'";
												if (hoverState==1) {
													prodSmImgTagLinkStart = " onmouseover='panel2ProdMouseOver(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");' onfocus='panel2ProdMouseOver(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");' onmouseout='panel2ProdMouseOut(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");' onblur='panel2ProdMouseOut(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");'";
												}
												prodSmImgTagLinkStart = " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">";
												var prodSmImgTagLinkEnd = "<\/a>";
												productHTMLTest = baseProdSmImgHTMLStart + prodSmImgTagLinkStart + "<img title=\"" + prodFilterArray[x][2] + "\" alt=\"" + prodFilterArray[x][2] + "\" id='panel2ProductSmImg" + prodFilterArray[x][0] + "' class='panel_2_product_sm_img' src='" + clientImgBase + prodFilterArray[x][5] + "'>" + prodSmImgTagLinkEnd + baseProdSmImgHTMLEnd;
											}
											prodListHTML += "<span class='panel_2_prodlist_prodshell panel_2_prodlist_prodshell_" + prodFilterArray[x][0] + " panel_2_prodlist_prodshell_off'>" + productHTMLTest + "<\/span>";
										}
									}
								}
							}
						}
					}
					else if (panel2ProductSort == "PRODUCT") {
						for (x=0; x<prodFilterArray.length; x++) {
							if (panel2ProductHideprod == 1 && prodFilterArray[x][0] == 0) {
								var writeDisProdRow = 0;
							}
							else {
								var writeDisProdRow = 1;
							}
							if (writeDisProdRow == 1) {
								var productHTMLTest = autotextIt(p2TemplateSet.panel2ProductDiv,"panel2Product");
								var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
								if (prodDiscTagStart != -1) {
									var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
									var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
									var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
									var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
									var prodDiscWrite = "";
									var discVal = prodFilterArray[x][6];
									if (discVal != 1) {
										prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel2Product_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
									}
									productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
								}
								var prodNameTagStart = productHTMLTest.indexOf("<!--PRODNAME");
								if (prodNameTagStart != -1) {
									var prodNameTagEnd = productHTMLTest.indexOf(">",prodNameTagStart);
									var prodNameTagStrip = productHTMLTest.substring(prodNameTagStart,(prodNameTagEnd+1));
									var baseProdNameHTMLStart = productHTMLTest.substr(0,prodNameTagStart);
									var baseProdNameHTMLEnd = productHTMLTest.substr((prodNameTagEnd+1));
									var prodNameTagLink = " style='cursor:pointer;' onclick='panel2ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");}'";
									if (hoverState==1) {
										prodNameTagLink += " onmouseover='panel2ProdMouseOver(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");' onfocus='panel2ProdMouseOver(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");' onmouseout='panel2ProdMouseOut(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");' onblur='panel2ProdMouseOut(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");'";
									}
									if (prodFilterArray[x][9] == "1") {
										var baseProductStyle = " panel_2_product_name_on";
									}
									else {
										var baseProductStyle = " panel_2_product_name_off";
									}
									var descTest = prodNameTagStrip.indexOf(" DESC");
									if (descTest != -1) {
										var descVal = "<span class='panel_2_product_name_desc'>" + prodFilterArray[x][3] + "<\/span>";
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
									productHTMLTest = baseProdNameHTMLStart + "<div id='panel2ProductName" + prodFilterArray[x][0] + "' class='panel_2_product_name" + baseProductStyle + "'" + prodNameTagLink + " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">" + prodNameItalicVar + "<span class='panel_2_product_name_name'>" + prodFilterArray[x][2] + "<\/span>" + descVal + "<\/div>" + baseProdNameHTMLEnd;
								}
								var prodDescTagStart = productHTMLTest.indexOf("<!--PRODDESC");
								if (prodDescTagStart != -1) {
									var prodDescTagEnd = productHTMLTest.indexOf(">",prodDescTagStart);
									var prodDescTagStrip = productHTMLTest.substring(prodDescTagStart,(prodDescTagEnd+1));
									var baseProdDescHTMLStart = productHTMLTest.substr(0,prodDescTagStart);
									var baseProdDescHTMLEnd = productHTMLTest.substr((prodDescTagEnd+1));
									productHTMLTest = baseProdDescHTMLStart + "<div id='panel2ProductDesc" + prodFilterArray[x][0] + "' class='panel_2_product_desc'>" + prodFilterArray[x][3] + "<\/div>" + baseProdDescHTMLEnd;
								}
								var prodCatTagStart = productHTMLTest.indexOf("<!--PRODCAT");
								if (prodCatTagStart != -1) {
									var prodCatTagEnd = productHTMLTest.indexOf(">",prodCatTagStart);
									var prodCatTagStrip = productHTMLTest.substring(prodCatTagStart,(prodCatTagEnd+1));
									var baseProdCatHTMLStart = productHTMLTest.substr(0,prodCatTagStart);
									var baseProdCatHTMLEnd = productHTMLTest.substr((prodCatTagEnd+1));
									productHTMLTest = baseProdCatHTMLStart + "<div id='panel2ProductCat" + prodFilterArray[x][0] + "' class='panel_2_product_cat'>" + prodFilterArray[x][16] + "<\/div>" + baseProdCatHTMLEnd;
								}
								var prodBigImgTagStart = productHTMLTest.indexOf("<!--PRODBIGIMG");
								if (prodBigImgTagStart != -1) {
									var prodBigImgTagEnd = productHTMLTest.indexOf(">",prodBigImgTagStart);
									var prodBigImgTagStrip = productHTMLTest.substring(prodBigImgTagStart,(prodBigImgTagEnd+1));
									var baseProdBigImgHTMLStart = productHTMLTest.substr(0,prodBigImgTagStart);
									var baseProdBigImgHTMLEnd = productHTMLTest.substr((prodBigImgTagEnd+1));
									var prodBigImgTagLinkStart = "<a href='' onclick='panel2ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");return false;}'";
									if (hoverState==1) {
										prodBigImgTagLinkStart += " onmouseover='panel2ProdMouseOver(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");' onfocus='panel2ProdMouseOver(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");' onmouseout='panel2ProdMouseOut(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");' onblur='panel2ProdMouseOut(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");'";
									}
									prodBigImgTagLinkStart += " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">";
									var prodBigImgTagLinkEnd = "<\/a>";
									productHTMLTest = baseProdBigImgHTMLStart + prodBigImgTagLinkStart + "<img title=\"" + prodFilterArray[x][2] + "\" alt=\"" + prodFilterArray[x][2] + "\" id='panel2ProductBigImg" + prodFilterArray[x][0] + "' class='panel_2_product_big_img' src='" + clientImgBase + prodFilterArray[x][4] + "'>" + prodBigImgTagLinkEnd + baseProdBigImgHTMLEnd;
								}
								var prodSmImgTagStart = productHTMLTest.indexOf("<!--PRODSMIMG");
								if (prodSmImgTagStart != -1) {
									var prodSmImgTagEnd = productHTMLTest.indexOf(">",prodSmImgTagStart);
									var prodSmImgTagStrip = productHTMLTest.substring(prodSmImgTagStart,(prodSmImgTagEnd+1));
									var baseProdSmImgHTMLStart = productHTMLTest.substr(0,prodSmImgTagStart);
									var baseProdSmImgHTMLEnd = productHTMLTest.substr((prodSmImgTagEnd+1));
									var prodSmImgTagLinkStart = "<a href='' onclick='panel2ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2ProdSelect(" + prodFilterArray[x][0] + ", \"" + prodFilterArray[x][1] + "\", \"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");return false;}'";
									if (hoverState==1) {
										prodSmImgTagLinkStart += " onmouseover='panel2ProdMouseOver(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");' onfocus='panel2ProdMouseOver(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");' onmouseout='panel2ProdMouseOut(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");' onblur='panel2ProdMouseOut(\"panel2ProductName" + prodFilterArray[x][0] + "\", \"panel_2_product_name\", "+x+");'";
									}
									prodSmImgTagLinkStart += " tabindex='0' title=\"" + prodFilterArray[x][2] + "\">";
									var prodSmImgTagLinkEnd = "<\/a>";
									productHTMLTest = baseProdSmImgHTMLStart + prodSmImgTagLinkStart + "<img title=\"" + prodFilterArray[x][2] + "\" alt=\"" + prodFilterArray[x][2] + "\" id='panel2ProductSmImg" + prodFilterArray[x][0] + "' class='panel_2_product_sm_img' src='" + clientImgBase + prodFilterArray[x][5] + "'>" + prodSmImgTagLinkEnd + baseProdSmImgHTMLEnd;
								}
								prodListHTML += "<span class='panel_2_prodlist_prodshell panel_2_prodlist_prodshell_" + prodFilterArray[x][0] + " panel_2_prodlist_prodshell_off'>" + productHTMLTest + "<\/span>";
							}
						}
					}
					else if (panel2ProductSort == "LABEL") {
						for (l=0; l<labelArray.length; l++) {
							var labelHTMLTest = autotextIt(p2TemplateSet.panel2LabelDiv,"panel2Label");
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
									labelNameTagLink += " style='cursor:pointer;' onclick='panel2SelectLabel(" + l + ", \"panel2LabelName" + labelArray[l][0] + "\", \"panel_2_label_name\",1);' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2SelectLabel(" + l + ", \"panel2LabelName" + labelArray[l][0] + "\", \"panel_2_label_name\",1);}'";
									if (hoverState==1) {
										labelNameTagLink += " onmouseover='panel2LabelMouseOver(" + l + ");' onfocus='panel2LabelMouseOver(" + l + ");' onmouseout='panel2LabelMouseOut(" + l + ");' onblur='panel2LabelMouseOut(" + l + ");'";
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
										var baseLabelStyle = " panel_2_label_name_on";
										labelArray[l][3] = 1;
									}
									else {
										var baseLabelStyle = " panel_2_label_name_off";
									}
								}
								labelHTMLTest = baseLabelNameHTMLStart + "<div id='panel2LabelName" + labelArray[l][0] + "' class='panel_2_label_name_" + labelArray[l][0] + " panel_2_label_name " + baseLabelStyle + "'" + labelNameTagLink + " tabindex='0' title=\"" + labelArray[l][1] + "\">" + labelArray[l][1] + daProdNumWrite + "<\/div>" + baseLabelNameHTMLEnd;
							}
							prodListHTML += "<span class='panel_2_prodlist_labelshell panel_2_prodlist_labelshell_" + labelArray[l][0] + " panel_2_prodlist_labelshell_off'>" + labelHTMLTest + "<\/span>";
						}
					}
					else if (panel2ProductSort == "CATLIST") {
						if (panel2ProductCatID != 0) {
							for (w=0; w<catArray.length; w++) {
								if (catArray[w][0] == panel2ProductCatID) {
									var categoryHTMLTest = autotextIt(p2TemplateSet.panel2CategoryDiv,"panel2Category");
									var catBadgeTagStart = categoryHTMLTest.indexOf("<!--BADGE");
									if (catBadgeTagStart != -1) {
										var catBadgeTagEnd = categoryHTMLTest.indexOf(">",catBadgeTagStart);
										var catBadgeTagStrip = categoryHTMLTest.substring(catBadgeTagStart,(catBadgeTagEnd+1));
										var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBadgeTagStart);
										var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBadgeTagEnd+1));
										categoryHTMLTest = baseCatBigImgHTMLStart + "<span id='panel2ProdlistCatBadge" + catArray[w][0] + "' class='panel_2_prodlist_cat_badge' style='display:none;'>0<\/span>" + baseCatBigImgHTMLEnd;
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
											var replaceImgMouseOver = "panel2CatImgReplace(1," + catArray[w][0] + ");";
											var replaceImgMouseOut = "panel2CatImgReplace(2," + catArray[w][0] + ");";
											var replaceImgMouseClass = " img_replace_active";
											var replaceImgCall = "panel2CatImgClick(" + catArray[w][0] + ");";
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
											catNameTagLink += " style='cursor:pointer;' onclick='panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\",1);" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\",1);" + replaceImgCall + "}'";
											if (hoverState==1) {
												catNameTagLink += " onmouseover='panel2CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel2CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel2CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel2CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
											}
											var thisCatIsOn = 1;
											for (q=0; q<prodFilterArray.length; q++) {
												if (prodFilterArray[q][8] == catArray[w][0] && prodFilterArray[q][9] == "0") {
													thisCatIsOn = 0;
													break;
												}
											}
											if (thisCatIsOn == 1) {
												var baseCatStyle = " panel_2_category_name_on";
												catArray[w][6] = 1;
												window["panel1CategoryNameVar" + catArray[w][0]] = 1;
											}
											else {
												var baseCatStyle = " panel_2_category_name_off";
											}
										}
										categoryHTMLTest = baseCatNameHTMLStart + "<div id='panel2CategoryName" + catArray[w][0] + "' class='panel_2_category_name_" + catArray[w][0] + replaceImgMouseClass + " panel_2_category_name " + baseCatStyle + "'" + catNameTagLink + " tabindex='0' title=\"" + catArray[w][1] + "\">" + catArray[w][1] + daProdNumWrite + "<\/div>" + baseCatNameHTMLEnd;
									}
									var catBigImgTagStart = categoryHTMLTest.indexOf("<!--CATBIGIMG");
									if (catBigImgTagStart != -1) {
										var catBigImgTagEnd = categoryHTMLTest.indexOf(">",catBigImgTagStart);
										var catBigImgTagStrip = categoryHTMLTest.substring(catBigImgTagStart,(catBigImgTagEnd+1));
										var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBigImgTagStart);
										var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBigImgTagEnd+1));
										var catBigImgRender = "";
										var replaceImgTest = catBigImgTagStrip.indexOf(" REPLACE");
										if (replaceImgTest != -1) {
											catBigImgRender += "<div title=\"" + catArray[w][1] + "\" id='panel2CategoryBigImgDivShell" + catArray[w][0] + "' class='panel_2_category_big_img_div_shell panel_2_category_big_img_div_shell_" + catArray[w][0] + "' onclick='panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\",1);panel2CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\",1);panel2CatImgClick(" + catArray[w][0] + ");}'";
											if (hoverState==1) {
												catBigImgRender += " onmouseover='panel2CatMouseOver(" + w + ");panel2CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel2CatMouseOver(" + w + ");panel2CatImgReplace(1," + catArray[w][0] + ");'";
											}
											catBigImgRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel2CategoryBigImgDivBack" + catArray[w][0] + "' class='panel_2_category_big_img_div_back panel_2_category_big_img_div_back_off panel_2_category_big_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][3] + "\");'><\/div><div id='panel2CategoryBigImgDivOver" + catArray[w][0] + "' class='panel_2_category_big_img_div_over panel_2_category_big_img_div_over_" + catArray[w][0] + "'";
											if (hoverState==1) {
												catBigImgRender += " onmouseout='panel2CatMouseOut(" + w + ");panel2CatImgReplace(2," + catArray[w][0] + ");' onblur='panel2CatMouseOut(" + w + ");panel2CatImgReplace(2," + catArray[w][0] + ");'";
											}
											catBigImgRender += " style='display:none;'>&nbsp;<\/div><\/div>";
											categoryHTMLTest = baseCatBigImgHTMLStart + catBigImgRender + baseCatBigImgHTMLEnd;
										}
										else {
											categoryHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel2CategoryBigImg" + catArray[w][0] + "' class='panel_2_category_big_img' src='" + clientImgBase + catArray[w][3] + "'>" + baseCatBigImgHTMLEnd;
										}
									}
									var catSmImgTagStart = categoryHTMLTest.indexOf("<!--CATSMIMG");
									if (catSmImgTagStart != -1) {
										var catSmImgTagEnd = categoryHTMLTest.indexOf(">",catSmImgTagStart);
										var catSmImgTagStrip = categoryHTMLTest.substring(catSmImgTagStart,(catSmImgTagEnd+1));
										var baseCatSmImgHTMLStart = categoryHTMLTest.substr(0,catSmImgTagStart);
										var baseCatSmImgHTMLEnd = categoryHTMLTest.substr((catSmImgTagEnd+1));
										var catSmImgRender = "";
										var replaceImgTest = catSmImgTagStrip.indexOf(" REPLACE");
										if (replaceImgTest != -1) {
											catSmImgRender += "<div title=\"" + catArray[w][1] + "\" id='panel2CategorySmImgDivShell" + catArray[w][0] + "' class='panel_2_category_sm_img_div_shell panel_2_category_sm_img_div_shell_" + catArray[w][0] + "' onclick='panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\",1);panel2CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\",1);panel2CatImgClick(" + catArray[w][0] + ");}'";
											if (hoverState==1) {
												catSmImgRender += " onmouseover='panel2CatMouseOver(" + w + ");panel2CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel2CatMouseOver(" + w + ");panel2CatImgReplace(1," + catArray[w][0] + ");'";
											}
											catSmImgRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel2CategorySmImgDivBack" + catArray[w][0] + "' class='panel_2_category_sm_img_div_back panel_2_category_sm_img_div_back_off panel_2_category_sm_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][4] + "\");'><\/div><div id='panel2CategorySmImgDivOver" + catArray[w][0] + "' class='panel_2_category_sm_img_div_over panel_2_category_sm_img_div_over_" + catArray[w][0] + "'";
											if (hoverState==1) {
												catSmImgRender += " onmouseout='panel2CatMouseOut(" + w + ");panel2CatImgReplace(2," + catArray[w][0] + ");' onblur='panel2CatMouseOut(" + w + ");panel2CatImgReplace(2," + catArray[w][0] + ");'";
											}
											catSmImgRender += " style='display:none;'>&nbsp;<\/div><\/div>";
											categoryHTMLTest = baseCatSmImgHTMLStart + catSmImgRender + baseCatSmImgHTMLEnd;
										}
										else {
											categoryHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel2CategorySmImg" + catArray[w][0] + "' class='panel_2_category_sm_img' src='" + clientImgBase + catArray[w][4] + "'>" + baseCatSmImgHTMLEnd;
										}
									}
									prodListHTML += "<span class='panel_2_prodlist_catshell panel_2_prodlist_catshell_" + catArray[w][0] + " panel_2_prodlist_catshell_off'>" + categoryHTMLTest + "<\/span>";
									break;
								}
							}
						}
						else {
							for (w=0; w<catArray.length; w++) {
								var categoryHTMLTest = autotextIt(p2TemplateSet.panel2CategoryDiv,"panel2Category");
								var catBadgeTagStart = categoryHTMLTest.indexOf("<!--BADGE");
								if (catBadgeTagStart != -1) {
									var catBadgeTagEnd = categoryHTMLTest.indexOf(">",catBadgeTagStart);
									var catBadgeTagStrip = categoryHTMLTest.substring(catBadgeTagStart,(catBadgeTagEnd+1));
									var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBadgeTagStart);
									var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBadgeTagEnd+1));
									categoryHTMLTest = baseCatBigImgHTMLStart + "<span id='panel2ProdlistCatBadge" + catArray[w][0] + "' class='panel_2_prodlist_cat_badge' style='display:none;'>0<\/span>" + baseCatBigImgHTMLEnd;
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
										var replaceImgMouseOver = "panel2CatImgReplace(1," + catArray[w][0] + ");";
										var replaceImgMouseOut = "panel2CatImgReplace(2," + catArray[w][0] + ");";
										var replaceImgMouseClass = " img_replace_active";
										var replaceImgCall = "panel2CatImgClick(" + catArray[w][0] + ");";
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
										catNameTagLink += " style='cursor:pointer;' onclick='panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\",1);" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\",1);" + replaceImgCall + "}'";
										if (hoverState==1) {
											catNameTagLink += " onmouseover='panel2CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel2CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel2CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel2CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
										}
										var thisCatIsOn = 1;
										for (q=0; q<prodFilterArray.length; q++) {
											if (prodFilterArray[q][8] == catArray[w][0] && prodFilterArray[q][9] == "0") {
												thisCatIsOn = 0;
												break;
											}
										}
										if (thisCatIsOn == 1) {
											var baseCatStyle = " panel_2_category_name_on";
											catArray[w][6] = 1;
											window["panel1CategoryNameVar" + catArray[w][0]] = 1;
										}
										else {
											var baseCatStyle = " panel_2_category_name_off";
										}
									}
									categoryHTMLTest = baseCatNameHTMLStart + "<div id='panel2CategoryName" + catArray[w][0] + "' class='panel_2_category_name_" + catArray[w][0] + replaceImgMouseClass + " panel_2_category_name " + baseCatStyle + "'" + catNameTagLink + " tabindex='0' title=\"" + catArray[w][1] + "\">" + catArray[w][1] + daProdNumWrite + "<\/div>" + baseCatNameHTMLEnd;
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
										catBigImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel2CategoryBigImgDivShell" + catArray[w][0] + "' class='panel_2_category_big_img_div_shell panel_2_category_big_img_div_shell_" + catArray[w][0] + "' onclick='panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\",1);panel2CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\",1);panel2CatImgClick(" + catArray[w][0] + ");}'";
										if (hoverState==1) {
											catBigImgTagRender += " onmouseover='panel2CatMouseOver(" + w + ");panel2CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel2CatMouseOver(" + w + ");panel2CatImgReplace(1," + catArray[w][0] + ");'";
										}
										catBigImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel2CategoryBigImgDivBack" + catArray[w][0] + "' class='panel_2_category_big_img_div_back panel_2_category_big_img_div_back_off panel_2_category_big_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][3] + "\");'><\/div><div id='panel2CategoryBigImgDivOver" + catArray[w][0] + "' class='panel_2_category_big_img_div_over panel_2_category_big_img_div_over_" + catArray[w][0] + "'";
										if (hoverState==1) {
											catBigImgTagRender += " onmouseout='panel2CatMouseOut(" + w + ");panel2CatImgReplace(2," + catArray[w][0] + ");' onblur='panel2CatMouseOut(" + w + ");panel2CatImgReplace(2," + catArray[w][0] + ");'";
										}
										catBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
										categoryHTMLTest = baseCatBigImgHTMLStart + catBigImgTagRender + baseCatBigImgHTMLEnd;
									}
									else {
										categoryHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel2CategoryBigImg" + catArray[w][0] + "' class='panel_2_category_big_img' src='" + clientImgBase + catArray[w][3] + "'>" + baseCatBigImgHTMLEnd;
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
										catSmImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel2CategorySmImgDivShell" + catArray[w][0] + "' class='panel_2_category_sm_img_div_shell panel_2_category_sm_img_div_shell_" + catArray[w][0] + "' onclick='panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\",1);panel2CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\",1);panel2CatImgClick(" + catArray[w][0] + ");}'";
										if (hoverState==1) {
											catSmImgTagRender += " onmouseover='panel2CatMouseOver(" + w + ");panel2CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel2CatMouseOver(" + w + ");panel2CatImgReplace(1," + catArray[w][0] + ");'";
										}
										catSmImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel2CategorySmImgDivBack" + catArray[w][0] + "' class='panel_2_category_sm_img_div_back panel_2_category_sm_img_div_back_off panel_2_category_sm_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][3] + "\");'><\/div><div id='panel2CategorySmImgDivOver" + catArray[w][0] + "' class='panel_2_category_sm_img_div_over panel_2_category_sm_img_div_over_" + catArray[w][0] + "'";
										if (hoverState==1) {
											catSmImgTagRender += " onmouseout='panel2CatMouseOut(" + w + ");panel2CatImgReplace(2," + catArray[w][0] + ");' onblur='panel2CatMouseOut(" + w + ");panel2CatImgReplace(2," + catArray[w][0] + ");'";
										}
										catSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
										categoryHTMLTest = baseCatSmImgHTMLStart + catSmImgTagRender + baseCatSmImgHTMLEnd;
									}
									else {
										categoryHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel2CategorySmImg" + catArray[w][0] + "' class='panel_2_category_sm_img' src='" + clientImgBase + catArray[w][3] + "'>" + baseCatSmImgHTMLEnd;
									}
								}
								prodListHTML += "<span class='panel_2_prodlist_catshell panel_2_prodlist_catshell_" + catArray[w][0] + " panel_2_prodlist_catshell_off'>" + categoryHTMLTest + "<\/span>";
							}
						}
					}
					else if (panel2ProductSort == "FAMLIST") {
						for (f=0; f<famArray.length; f++) {
							var familyHTMLTest = autotextIt(p2TemplateSet.panel2FamilyDiv,"panel2Family");
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
									var replaceImgMouseOver = "panel2FamImgReplace(1," + famArray[f][0] + ");";
									var replaceImgMouseOut = "panel2FamImgReplace(2," + famArray[f][0] + ");";
									var replaceImgMouseClass = " img_replace_active";
									var replaceImgCall = "panel2FamImgClick(" + famArray[f][0] + ");";
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
									famNameTagLink += " style='cursor:pointer;' onclick='panel2FamCatProdOpen(" + f + ");" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2FamCatProdOpen(" + f + ");" + replaceImgCall + "}'";
									if (hoverState==1) {
										famNameTagLink += " onmouseover='panel2FamMouseOver(" + f + ");" + replaceImgMouseOver + "' onfocus='panel2FamMouseOver(" + f + ");" + replaceImgMouseOver + "' onmouseout='panel2FamMouseOut(" + f + ");" + replaceImgMouseOut + "' onblur='panel2FamMouseOut(" + f + ");" + replaceImgMouseOut + "'";
									}
								}
								familyHTMLTest = baseFamNameHTMLStart + "<div id='panel2FamilyName" + famArray[f][0] + "' class='panel_2_family_name_" + famArray[f][0] + replaceImgMouseClass + " panel_2_family_name panel_2_family_name_off'" + famNameTagLink + " tabindex='0' title=\"" + famArray[f][1] + "\">" + famArray[f][1] + daFamNumWrite + "<\/div>" + baseFamNameHTMLEnd;
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
									famBigImgTagRender += "<div title=\"" + famArray[f][1] + "\" id='panel2FamilyBigImgDivShell" + famArray[f][0] + "' class='panel_2_family_big_img_div_shell panel_2_family_big_img_div_shell_" + famArray[f][0] + "' onclick='panel2FamCatProdOpen(" + f + ");panel2FamImgClick(" + famArray[f][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2FamCatProdOpen(" + f + ");panel2FamImgClick(" + famArray[f][0] + ");}'";
									if (hoverState==1) {
										famBigImgTagRender += " onmouseover='panel2FamMouseOver(" + f + ");panel2FamImgReplace(1," + famArray[f][0] + ");' onfocus='panel2FamMouseOver(" + f + ");panel2FamImgReplace(1," + famArray[f][0] + ");'";
									}
									famBigImgTagRender += " tabindex='0' title=\"" + famArray[f][1] + "\"><div id='panel2FamilyBigImgDivBack" + famArray[f][0] + "' class='panel_2_family_big_img_div_back panel_2_family_big_img_div_back_off panel_2_family_big_img_div_back_" + famArray[f][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + famArray[f][2] + "\");'><\/div><div id='panel2FamilyBigImgDivOver" + famArray[f][0] + "' class='panel_2_family_big_img_div_over panel_2_family_big_img_div_over_" + famArray[f][0] + "'";
									if (hoverState==1) {
										famBigImgTagRender += " onmouseout='panel2FamMouseOut(" + f + ");panel2FamImgReplace(2," + famArray[f][0] + ");' onblur='panel2FamMouseOut(" + f + ");panel2FamImgReplace(2," + famArray[f][0] + ");'";
									}
									famBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
									familyHTMLTest = baseFamBigImgHTMLStart + famBigImgTagRender + baseFamBigImgHTMLEnd;
								}
								else {
									familyHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + famArray[f][1] + "\" alt=\"" + famArray[f][1] + "\" id='panel2FamilyBigImg" + famArray[f][0] + "' class='panel_2_family_big_img' src='" + clientImgBase + famArray[f][2] + "'>" + baseFamBigImgHTMLEnd;
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
									famSmImgTagRender += "<div title=\"" + famArray[f][1] + "\" id='panel2FamilySmImgDivShell" + famArray[f][0] + "' class='panel_2_family_sm_img_div_shell panel_2_family_sm_img_div_shell_" + famArray[f][0] + "' onclick='panel2FamCatProdOpen(" + f + ");panel2FamImgClick(" + famArray[f][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2FamCatProdOpen(" + f + ");panel2FamImgClick(" + famArray[f][0] + ");}'";
									if (hoverState==1) {
										famSmImgTagRender += " onmouseover='panel2FamMouseOver(" + f + ");panel2FamImgReplace(1," + famArray[f][0] + ");' onfocus='panel2FamMouseOver(" + f + ");panel2FamImgReplace(1," + famArray[f][0] + ");'";
									}
									famSmImgTagRender += " tabindex='0' title=\"" + famArray[f][1] + "\"><div id='panel2FamilySmImgDivBack" + famArray[f][0] + "' class='panel_2_family_sm_img_div_back panel_2_family_sm_img_div_back_off panel_2_family_sm_img_div_back_" + famArray[f][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + famArray[f][3] + "\");'><\/div><div id='panel2FamilySmImgDivOver" + famArray[f][0] + "' class='panel_2_family_sm_img_div_over panel_2_family_sm_img_div_over_" + famArray[f][0] + "'";
									if (hoverState==1) {
										famSmImgTagRender += " onmouseout='panel2FamMouseOut(" + f + ");panel2FamImgReplace(2," + famArray[f][0] + ");' onblur='panel2FamMouseOut(" + f + ");panel2FamImgReplace(2," + famArray[f][0] + ");'";
									}
									famSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
									familyHTMLTest = baseFamSmImgHTMLStart + famSmImgTagRender + baseFamSmImgHTMLEnd;
								}
								else {
									familyHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + famArray[f][1] + "\" alt=\"" + famArray[f][1] + "\" id='panel2FamilySmImg" + famArray[f][0] + "' class='panel_2_family_sm_img' src='" + clientImgBase + famArray[f][3] + "'>" + baseFamSmImgHTMLEnd;
								}
							}
							var categoryHTMLTest = "";
							var categoryHTMLLeaf = "";
							for (w=0; w<catArray.length; w++) {
								if (catArray[w][2] == famArray[f][0]) {
									categoryHTMLTest = autotextIt(p2TemplateSet.panel2CategoryDiv,"panel2Category");
									var catBadgeTagStart = categoryHTMLTest.indexOf("<!--BADGE");
									if (catBadgeTagStart != -1) {
										var catBadgeTagEnd = categoryHTMLTest.indexOf(">",catBadgeTagStart);
										var catBadgeTagStrip = categoryHTMLTest.substring(catBadgeTagStart,(catBadgeTagEnd+1));
										var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBadgeTagStart);
										var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBadgeTagEnd+1));
										categoryHTMLTest = baseCatBigImgHTMLStart + "<span id='panel2ProdlistCatBadge" + catArray[w][0] + "' class='panel_2_prodlist_cat_badge' style='display:none;'>0<\/span>" + baseCatBigImgHTMLEnd;
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
											var replaceImgMouseOver = "panel2CatImgReplace(1," + catArray[w][0] + ");";
											var replaceImgMouseOut = "panel2CatImgReplace(2," + catArray[w][0] + ");";
											var replaceImgMouseClass = " img_replace_active";
											var replaceImgCall = "panel2CatImgClick(" + catArray[w][0] + ");";
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
											catNameTagLink += " style='cursor:pointer;' onclick='panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\",1);" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\",1);" + replaceImgCall + "}'";
											if (hoverState==1) {
												catNameTagLink += " onmouseover='panel2CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel2CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel2CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel2CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
											}
											var thisCatIsOn = 1;
											for (q=0; q<prodFilterArray.length; q++) {
												if (prodFilterArray[q][8] == catArray[w][0] && prodFilterArray[q][9] == "0") {
													thisCatIsOn = 0;
													break;
												}
											}
											if (thisCatIsOn == 1) {
												var baseCatStyle = " panel_2_category_name_on";
												catArray[w][6] = 1;
												window["panel1CategoryNameVar" + catArray[w][0]] = 1;
											}
											else {
												var baseCatStyle = " panel_2_category_name_off";
											}
										}
										categoryHTMLTest = baseCatNameHTMLStart + "<div id='panel2CategoryName" + catArray[w][0] + "' class='panel_2_category_name_" + catArray[w][0] + replaceImgMouseClass + " panel_2_category_name " + baseCatStyle + "'" + catNameTagLink + " tabindex='0' title=\"" + catArray[w][1] + "\">" + catArray[w][1] + daProdNumWrite + "<\/div>" + baseCatNameHTMLEnd;
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
											catBigImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel2CategoryBigImgDivShell" + catArray[w][0] + "' class='panel_2_category_big_img_div_shell panel_2_category_big_img_div_shell_" + catArray[w][0] + "' onclick='panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\",1);panel2CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\",1);panel2CatImgClick(" + catArray[w][0] + ");}'";
											if (hoverState==1) {
												catBigImgTagRender += " onmouseover='panel2CatMouseOver(" + w + ");panel2CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel2CatMouseOver(" + w + ");panel2CatImgReplace(1," + catArray[w][0] + ");'";
											}
											catBigImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel2CategoryBigImgDivBack" + catArray[w][0] + "' class='panel_2_category_big_img_div_back panel_2_category_big_img_div_back_off panel_2_category_big_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][3] + "\");'><\/div><div id='panel2CategoryBigImgDivOver" + catArray[w][0] + "' class='panel_2_category_big_img_div_over panel_2_category_big_img_div_over_" + catArray[w][0] + "'";
											if (hoverState==1) {
												catBigImgTagRender += " onmouseout='panel2CatMouseOut(" + w + ");panel2CatImgReplace(2," + catArray[w][0] + ");' onblur='panel2CatMouseOut(" + w + ");panel2CatImgReplace(2," + catArray[w][0] + ");'";
											}
											catBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
											categoryHTMLTest = baseCatBigImgHTMLStart + catBigImgTagRender + baseCatBigImgHTMLEnd;
										}
										else {
											categoryHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel2CategoryBigImg" + catArray[w][0] + "' class='panel_2_category_big_img' src='" + clientImgBase + catArray[w][3] + "'>" + baseCatBigImgHTMLEnd;
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
											catSmImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel2CategorySmImgDivShell" + catArray[w][0] + "' class='panel_2_category_sm_img_div_shell panel_2_category_sm_img_div_shell_" + catArray[w][0] + "' onclick='panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\",1);panel2CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2SelectCat(" + w + ", \"panel2CategoryName" + catArray[w][0] + "\", \"panel_2_category_name\",1);panel2CatImgClick(" + catArray[w][0] + ");}'";
											if (hoverState==1) {
												catSmImgTagRender += " onmouseover='panel2CatMouseOver(" + w + ");panel2CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel2CatMouseOver(" + w + ");panel2CatImgReplace(1," + catArray[w][0] + ");'";
											}
											catSmImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel2CategorySmImgDivBack" + catArray[w][0] + "' class='panel_2_category_sm_img_div_back panel_2_category_sm_img_div_back_off panel_2_category_sm_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][4] + "\");'><\/div><div id='panel2CategorySmImgDivOver" + catArray[w][0] + "' class='panel_2_category_sm_img_div_over panel_2_category_sm_img_div_over_" + catArray[w][0] + "'";
											if (hoverState==1) {
												catSmImgTagRender += " onmouseout='panel2CatMouseOut(" + w + ");panel2CatImgReplace(2," + catArray[w][0] + ");' onblur='panel2CatMouseOut(" + w + ");panel2CatImgReplace(2," + catArray[w][0] + ");'";
											}
											catSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
											categoryHTMLTest = baseCatSmImgHTMLStart + catSmImgTagRender + baseCatSmImgHTMLEnd;
										}
										else {
											categoryHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel2CategorySmImg" + catArray[w][0] + "' class='panel_2_category_sm_img' src='" + clientImgBase + catArray[w][4] + "'>" + baseCatSmImgHTMLEnd;
										}
									}
									categoryHTMLLeaf += categoryHTMLTest;
								}
							}
							prodListHTML += familyHTMLTest + "<span class='panel_2_prodlist_famshell panel_2_prodlist_famshell_" + famArray[f][0] + " panel_2_prodlist_famshell_off'><div class='panel_2_family_category_shell panel_2_family_category_shell_" + famArray[f][0] + "' style='display:none;'>" + categoryHTMLLeaf + "<\/div><\/span>";
						}
					}
					else if (panel2ProductSort == "FAMPROD") {
						for (f=0; f<famArray.length; f++) {
							var familyHTMLTest = autotextIt(p2TemplateSet.panel2FamilyDiv,"panel2Family");
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
									var replaceImgMouseOver = "panel2FamImgReplace(1," + famArray[f][0] + ");";
									var replaceImgMouseOut = "panel2FamImgReplace(2," + famArray[f][0] + ");";
									var replaceImgMouseClass = " img_replace_active";
									var replaceImgCall = "panel2FamImgClick(" + famArray[f][0] + ");";
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
									famNameTagLink += " style='cursor:pointer;' onclick='panel2SelectFam(" + f + ", \"panel2FamilyName" + famArray[f][0] + "\", \"panel_2_family_name\",1);" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2SelectFam(" + f + ", \"panel2FamilyName" + famArray[f][0] + "\", \"panel_2_family_name\",1);" + replaceImgCall + "}'";
									if (hoverState==1) {
										famNameTagLink += " onmouseover='panel2FamMouseOver(" + f + ");" + replaceImgMouseOver + "' onfocus='panel2FamMouseOver(" + f + ");" + replaceImgMouseOver + "' onmouseout='panel2FamMouseOut(" + f + ");" + replaceImgMouseOut + "' onblur='panel2FamMouseOut(" + f + ");" + replaceImgMouseOut + "'";
									}
								}
								familyHTMLTest = baseFamNameHTMLStart + "<div id='panel2FamilyName" + famArray[f][0] + "' class='panel_2_family_name_" + famArray[f][0] + replaceImgMouseClass + " panel_2_family_name panel_2_family_name_off'" + famNameTagLink + " tabindex='0' title=\"" + famArray[f][1] + "\">" + famArray[f][1] + daFamNumWrite + "<\/div>" + baseFamNameHTMLEnd;
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
									famBigImgTagRender += "<div title=\"" + famArray[f][1] + "\" id='panel2FamilyBigImgDivShell" + famArray[f][0] + "' class='panel_2_family_big_img_div_shell panel_2_family_big_img_div_shell_" + famArray[f][0] + "' onclick='panel2SelectFam(" + f + ", \"panel2FamilyName" + famArray[f][0] + "\", \"panel_2_family_name\",1);panel2FamImgClick(" + famArray[f][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2SelectFam(" + f + ", \"panel2FamilyName" + famArray[f][0] + "\", \"panel_2_family_name\",1);panel2FamImgClick(" + famArray[f][0] + ");}'";
									if (hoverState==1) {
										famBigImgTagRender += " onmouseover='panel2FamMouseOver(" + f + ");panel2FamImgReplace(1," + famArray[f][0] + ");' onfocus='panel2FamMouseOver(" + f + ");panel2FamImgReplace(1," + famArray[f][0] + ");'";
									}
									famBigImgTagRender += " tabindex='0' title=\"" + famArray[f][1] + "\"><div id='panel2FamilyBigImgDivBack" + famArray[f][0] + "' class='panel_2_family_big_img_div_back panel_2_family_big_img_div_back_off panel_2_family_big_img_div_back_" + famArray[f][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + famArray[f][2] + "\");'><\/div><div id='panel2FamilyBigImgDivOver" + famArray[f][0] + "' class='panel_2_family_big_img_div_over panel_2_family_big_img_div_over_" + famArray[f][0] + "'";
									if (hoverState==1) {
										famBigImgTagRender += " onmouseout='panel2FamMouseOut(" + f + ");panel2FamImgReplace(2," + famArray[f][0] + ");' onblur='panel2FamMouseOut(" + f + ");panel2FamImgReplace(2," + famArray[f][0] + ");'";
									}
									famBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
									familyHTMLTest = baseFamBigImgHTMLStart + famBigImgTagRender + baseFamBigImgHTMLEnd;
								}
								else {
									familyHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + famArray[f][1] + "\" alt=\"" + famArray[f][1] + "\" id='panel2FamilyBigImg" + famArray[f][0] + "' class='panel_2_family_big_img' src='" + clientImgBase + famArray[f][2] + "'>" + baseFamBigImgHTMLEnd;
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
									famSmImgTagRender += "<div title=\"" + famArray[f][1] + "\" id='panel2FamilySmImgDivShell" + famArray[f][0] + "' class='panel_2_family_sm_img_div_shell panel_2_family_sm_img_div_shell_" + famArray[f][0] + "' onclick='panel2SelectFam(" + f + ", \"panel2FamilyName" + famArray[f][0] + "\", \"panel_2_family_name\",1);panel2FamImgClick(" + famArray[f][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2SelectFam(" + f + ", \"panel2FamilyName" + famArray[f][0] + "\", \"panel_2_family_name\",1);panel2FamImgClick(" + famArray[f][0] + ");}'";
									if (hoverState==1) {
										famSmImgTagRender += " onmouseover='panel2FamMouseOver(" + f + ");panel2FamImgReplace(1," + famArray[f][0] + ");' onfocus='panel2FamMouseOver(" + f + ");panel2FamImgReplace(1," + famArray[f][0] + ");'";
									}
									famSmImgTagRender += " tabindex='0' title=\"" + famArray[f][1] + "\"><div id='panel2FamilySmImgDivBack" + famArray[f][0] + "' class='panel_2_family_sm_img_div_back panel_2_family_sm_img_div_back_off panel_2_family_sm_img_div_back_" + famArray[f][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + famArray[f][3] + "\");'><\/div><div id='panel2FamilySmImgDivOver" + famArray[f][0] + "' class='panel_2_family_sm_img_div_over panel_2_family_sm_img_div_over_" + famArray[f][0] + "'";
									if (hoverState==1) {
										famSmImgTagRender += " onmouseout='panel2FamMouseOut(" + f + ");panel2FamImgReplace(2," + famArray[f][0] + ");' onblur='panel2FamMouseOut(" + f + ");panel2FamImgReplace(2," + famArray[f][0] + ");'";
									}
									famSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
									familyHTMLTest = baseFamSmImgHTMLStart + famSmImgTagRender + baseFamSmImgHTMLEnd;
								}
								else {
									familyHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + famArray[f][1] + "\" alt=\"" + famArray[f][1] + "\" id='panel2FamilySmImg" + famArray[f][0] + "' class='panel_2_family_sm_img' src='" + clientImgBase + famArray[f][3] + "'>" + baseFamSmImgHTMLEnd;
								}
							}
							prodListHTML += "<span class='panel_2_prodlist_famshell panel_2_prodlist_famshell_" + famArray[f][0] + " panel_2_prodlist_famshell_off'>" + familyHTMLTest + "<\/span>";
						}
					}
					else if (panel2ProductSort == "FAMCATPROD") {
						for (f=0; f<famArray.length; f++) {
							var familyHTMLTest = autotextIt(p2TemplateSet.panel2FamilyDiv,"panel2Family");
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
									var replaceImgMouseOver = "panel2FamImgReplace(1," + famArray[f][0] + ");";
									var replaceImgMouseOut = "panel2FamImgReplace(2," + famArray[f][0] + ");";
									var replaceImgMouseClass = " img_replace_active";
									var replaceImgCall = "panel2FamImgClick(" + famArray[f][0] + ");";
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
									famNameTagLink += " style='cursor:pointer;' onclick='panel2FamCatProdOpen(" + f + ");" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2FamCatProdOpen(" + f + ");" + replaceImgCall + "}'";
									if (hoverState==1) {
										famNameTagLink += " onmouseover='panel2FamMouseOver(" + f + ");" + replaceImgMouseOver + "' onfocus='panel2FamMouseOver(" + f + ");" + replaceImgMouseOver + "' onmouseout='panel2FamMouseOut(" + f + ");" + replaceImgMouseOut + "' onblur='panel2FamMouseOut(" + f + ");" + replaceImgMouseOut + "'";
									}
								}
								familyHTMLTest = baseFamNameHTMLStart + "<div id='panel2FamilyName" + famArray[f][0] + "' class='panel_2_family_name_" + famArray[f][0] + replaceImgMouseClass + " panel_2_family_name panel_2_family_name_off'" + famNameTagLink + " tabindex='0' title=\"" + famArray[f][1] + "\">" + famArray[f][1] + daFamNumWrite + "<\/div>" + baseFamNameHTMLEnd;
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
									famBigImgTagRender += "<div title=\"" + famArray[f][1] + "\" id='panel2FamilyBigImgDivShell" + famArray[f][0] + "' class='panel_2_family_big_img_div_shell panel_2_family_big_img_div_shell_" + famArray[f][0] + "' onclick='panel2FamCatProdOpen(" + f + ");panel2FamImgClick(" + famArray[f][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2FamCatProdOpen(" + f + ");panel2FamImgClick(" + famArray[f][0] + ");}'";
									if (hoverState==1) {
										famBigImgTagRender += " onmouseover='panel2FamMouseOver(" + f + ");panel2FamImgReplace(1," + famArray[f][0] + ");' onfocus='panel2FamMouseOver(" + f + ");panel2FamImgReplace(1," + famArray[f][0] + ");'";
									}
									famBigImgTagRender += " tabindex='0' title=\"" + famArray[f][1] + "\"><div id='panel2FamilyBigImgDivBack" + famArray[f][0] + "' class='panel_2_family_big_img_div_back panel_2_family_big_img_div_back_off panel_2_family_big_img_div_back_" + famArray[f][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + famArray[f][2] + "\");'><\/div><div id='panel2FamilyBigImgDivOver" + famArray[f][0] + "' class='panel_2_family_big_img_div_over panel_2_family_big_img_div_over_" + famArray[f][0] + "'";
									if (hoverState==1) {
										famBigImgTagRender += " onmouseout='panel2FamMouseOut(" + f + ");panel2FamImgReplace(2," + famArray[f][0] + ");' onblur='panel2FamMouseOut(" + f + ");panel2FamImgReplace(2," + famArray[f][0] + ");'";
									}
									famBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
									familyHTMLTest = baseFamBigImgHTMLStart + famBigImgTagRender + baseFamBigImgHTMLEnd;
								}
								else {
									familyHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + famArray[f][1] + "\" alt=\"" + famArray[f][1] + "\" id='panel2FamilyBigImg" + famArray[f][0] + "' class='panel_2_family_big_img' src='" + clientImgBase + famArray[f][2] + "'>" + baseFamBigImgHTMLEnd;
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
									famSmImgTagRender += "<div title=\"" + famArray[f][1] + "\" id='panel2FamilySmImgDivShell" + famArray[f][0] + "' class='panel_2_family_sm_img_div_shell panel_2_family_sm_img_div_shell_" + famArray[f][0] + "' onclick='panel2FamCatProdOpen(" + f + ");panel2FamImgClick(" + famArray[f][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2FamCatProdOpen(" + f + ");panel2FamImgClick(" + famArray[f][0] + ");}'";
									if (hoverState==1) {
										famSmImgTagRender += " onmouseover='panel2FamMouseOver(" + f + ");panel2FamImgReplace(1," + famArray[f][0] + ");' onfocus='panel2FamMouseOver(" + f + ");panel2FamImgReplace(1," + famArray[f][0] + ");'";
									}
									famSmImgTagRender += " tabindex='0' title=\"" + famArray[f][1] + "\"><div id='panel2FamilySmImgDivBack" + famArray[f][0] + "' class='panel_2_family_sm_img_div_back panel_2_family_sm_img_div_back_off panel_2_family_sm_img_div_back_" + famArray[f][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + famArray[f][3] + "\");'><\/div><div id='panel2FamilySmImgDivOver" + famArray[f][0] + "' class='panel_2_family_sm_img_div_over panel_2_family_sm_img_div_over_" + famArray[f][0] + "'";
									if (hoverState==1) {
										famSmImgTagRender += " onmouseout='panel2FamMouseOut(" + f + ");panel2FamImgReplace(2," + famArray[f][0] + ");' onblur='panel2FamMouseOut(" + f + ");panel2FamImgReplace(2," + famArray[f][0] + ");'";
									}
									famSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
									familyHTMLTest = baseFamSmImgHTMLStart + famSmImgTagRender + baseFamSmImgHTMLEnd;
								}
								else {
									familyHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + famArray[f][1] + "\" alt=\"" + famArray[f][1] + "\" id='panel2FamilySmImg" + famArray[f][0] + "' class='panel_2_family_sm_img' src='" + clientImgBase + famArray[f][3] + "'>" + baseFamSmImgHTMLEnd;
								}
							}
							var categoryHTMLTest = "";
							var categoryHTMLLeaf = "";
							for (w=0; w<catArray.length; w++) {
								if (catArray[w][2] == famArray[f][0]) {
									categoryHTMLTest = autotextIt(p2TemplateSet.panel2CategoryDiv,"panel2Category");
									var catBadgeTagStart = categoryHTMLTest.indexOf("<!--BADGE");
									if (catBadgeTagStart != -1) {
										var catBadgeTagEnd = categoryHTMLTest.indexOf(">",catBadgeTagStart);
										var catBadgeTagStrip = categoryHTMLTest.substring(catBadgeTagStart,(catBadgeTagEnd+1));
										var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBadgeTagStart);
										var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBadgeTagEnd+1));
										categoryHTMLTest = baseCatBigImgHTMLStart + "<span id='panel2ProdlistCatBadge" + catArray[w][0] + "' class='panel_2_prodlist_cat_badge' style='display:none;'>0<\/span>" + baseCatBigImgHTMLEnd;
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
											var replaceImgMouseOver = "panel2CatImgReplace(1," + catArray[w][0] + ");";
											var replaceImgMouseOut = "panel2CatImgReplace(2," + catArray[w][0] + ");";
											var replaceImgMouseClass = " img_replace_active";
											var replaceImgCall = "panel2CatImgClick(" + catArray[w][0] + ");";
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
											catNameTagLink += " style='cursor:pointer;' onclick='panel2CatProdOpen(" + w + ");" + replaceImgCall + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2CatProdOpen(" + w + ");" + replaceImgCall + "}'";
											if (hoverState==1) {
												catNameTagLink += " onmouseover='panel2CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onfocus='panel2CatMouseOver(" + w + ");" + replaceImgMouseOver + "' onmouseout='panel2CatMouseOut(" + w + ");" + replaceImgMouseOut + "' onblur='panel2CatMouseOut(" + w + ");" + replaceImgMouseOut + "'";
											}
											var thisCatIsOn = 1;
											for (q=0; q<prodFilterArray.length; q++) {
												if (prodFilterArray[q][8] == catArray[w][0] && prodFilterArray[q][9] == "0") {
													thisCatIsOn = 0;
													break;
												}
											}
											if (thisCatIsOn == 1) {
												var baseCatStyle = " panel_2_category_name_on";
												catArray[w][6] = 1;
												window["panel1CategoryNameVar" + catArray[w][0]] = 1;
											}
											else {
												var baseCatStyle = " panel_2_category_name_off";
											}
										}
										categoryHTMLTest = baseCatNameHTMLStart + "<div id='panel2CategoryName" + catArray[w][0] + "' class='panel_2_category_name_" + catArray[w][0] + replaceImgMouseClass + " panel_2_category_name " + baseCatStyle + "'" + catNameTagLink + " tabindex='0' title=\"" + catArray[w][1] + "\">" + catArray[w][1] + daProdNumWrite + "<\/div>" + baseCatNameHTMLEnd;
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
											catBigImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel2CategoryBigImgDivShell" + catArray[w][0] + "' class='panel_2_category_big_img_div_shell panel_2_category_big_img_div_shell_" + catArray[w][0] + "' onclick='panel2CatProdOpen(" + w + ");panel2CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2CatProdOpen(" + w + ");panel2CatImgClick(" + catArray[w][0] + ");}'";
											if (hoverState==1) {
												catBigImgTagRender += " onmouseover='panel2CatMouseOver(" + w + ");panel2CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel2CatMouseOver(" + w + ");panel2CatImgReplace(1," + catArray[w][0] + ");'";
											}
											catBigImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel2CategoryBigImgDivBack" + catArray[w][0] + "' class='panel_2_category_big_img_div_back panel_2_category_big_img_div_back_off panel_2_category_big_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][3] + "\");'><\/div><div id='panel2CategoryBigImgDivOver" + catArray[w][0] + "' class='panel_2_category_big_img_div_over panel_2_category_big_img_div_over_" + catArray[w][0] + "'";
											if (hoverState==1) {
												catBigImgTagRender += " onmouseout='panel2CatMouseOut(" + w + ");panel2CatImgReplace(2," + catArray[w][0] + ");' onblur='panel2CatMouseOut(" + w + ");panel2CatImgReplace(2," + catArray[w][0] + ");'";
											}
											catBigImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
											categoryHTMLTest = baseCatBigImgHTMLStart + catBigImgTagRender + baseCatBigImgHTMLEnd;
										}
										else {
											categoryHTMLTest = baseCatBigImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel2CategoryBigImg" + catArray[w][0] + "' class='panel_2_category_big_img' src='" + clientImgBase + catArray[w][3] + "'>" + baseCatBigImgHTMLEnd;
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
											catSmImgTagRender += "<div title=\"" + catArray[w][1] + "\" id='panel2CategorySmImgDivShell" + catArray[w][0] + "' class='panel_2_category_sm_img_div_shell panel_2_category_sm_img_div_shell_" + catArray[w][0] + "' onclick='panel2CatProdOpen(" + w + ");panel2CatImgClick(" + catArray[w][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2CatProdOpen(" + w + ");panel2CatImgClick(" + catArray[w][0] + ");}'";
											if (hoverState==1) {
												catSmImgTagRender += " onmouseover='panel2CatMouseOver(" + w + ");panel2CatImgReplace(1," + catArray[w][0] + ");' onfocus='panel2CatMouseOver(" + w + ");panel2CatImgReplace(1," + catArray[w][0] + ");'";
											}
											catSmImgTagRender += " tabindex='0' title=\"" + catArray[w][1] + "\"><div id='panel2CategorySmImgDivBack" + catArray[w][0] + "' class='panel_2_category_sm_img_div_back panel_2_category_sm_img_div_back_off panel_2_category_sm_img_div_back_" + catArray[w][0] + " img_replace_active' style='background-image:url(\"" + clientImgBase + catArray[w][4] + "\");'><\/div><div id='panel2CategorySmImgDivOver" + catArray[w][0] + "' class='panel_2_category_sm_img_div_over panel_2_category_sm_img_div_over_" + catArray[w][0] + "'";
											if (hoverState==1) {
												catSmImgTagRender += " onmouseout='panel2CatMouseOut(" + w + ");panel2CatImgReplace(2," + catArray[w][0] + ");' onblur='panel2CatMouseOut(" + w + ");panel2CatImgReplace(2," + catArray[w][0] + ");'";
											}
											catSmImgTagRender += " style='display:none;'>&nbsp;<\/div><\/div>";
											categoryHTMLTest = baseCatSmImgHTMLStart + catSmImgTagRender + baseCatSmImgHTMLEnd;
										}
										else {
											categoryHTMLTest = baseCatSmImgHTMLStart + "<img title=\"" + catArray[w][1] + "\" alt=\"" + catArray[w][1] + "\" id='panel2CategorySmImg" + catArray[w][0] + "' class='panel_2_category_sm_img' src='" + clientImgBase + catArray[w][4] + "'>" + baseCatSmImgHTMLEnd;
										}
									}
									var productHTMLTest = "";
									var productHTMLLeaf = "";
									for (pr=0; pr<prodFilterArray.length; pr++) {
										if (catArray[w][0] == prodFilterArray[pr][8]) {
											var productHTMLTest = autotextIt(p2TemplateSet.panel2ProductDiv,"panel2Product");
											var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
											if (prodDiscTagStart != -1) {
												var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
												var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
												var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
												var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
												var prodDiscWrite = "";
												var discVal = prodFilterArray[x][6];
												if (discVal != 1) {
													prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel2Product_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
												}
												productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
											}
											var prodNameTagStart = productHTMLTest.indexOf("<!--PRODNAME");
											if (prodNameTagStart != -1) {
												var prodNameTagEnd = productHTMLTest.indexOf(">",prodNameTagStart);
												var prodNameTagStrip = productHTMLTest.substring(prodNameTagStart,(prodNameTagEnd+1));
												var baseProdNameHTMLStart = productHTMLTest.substr(0,prodNameTagStart);
												var baseProdNameHTMLEnd = productHTMLTest.substr((prodNameTagEnd+1));
												var prodNameTagLink = " style='cursor:pointer;' onclick='panel2ProdSelect(" + prodFilterArray[pr][0] + ", \"" + prodFilterArray[pr][1] + "\", \"panel2ProductName" + prodFilterArray[pr][0] + "\", \"panel_2_product_name\", "+pr+");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2ProdSelect(" + prodFilterArray[pr][0] + ", \"" + prodFilterArray[pr][1] + "\", \"panel2ProductName" + prodFilterArray[pr][0] + "\", \"panel_2_product_name\", "+pr+");}'";
												if (hoverState==1) {
													prodNameTagLink += " onmouseover='panel2ProdMouseOver(\"panel2ProductName" + prodFilterArray[pr][0] + "\", \"panel_2_product_name\", "+pr+");' onfocus='panel2ProdMouseOver(\"panel2ProductName" + prodFilterArray[pr][0] + "\", \"panel_2_product_name\", "+pr+");' onmouseout='panel2ProdMouseOut(\"panel2ProductName" + prodFilterArray[pr][0] + "\", \"panel_2_product_name\", "+pr+");' onblur='panel2ProdMouseOut(\"panel2ProductName" + prodFilterArray[pr][0] + "\", \"panel_2_product_name\", "+pr+");'";
												}
												if (prodFilterArray[pr][9] == "1") {
													var baseProductStyle = " panel_2_product_name_on";
												}
												else {
													var baseProductStyle = " panel_2_product_name_off";
												}
												var descTest = prodNameTagStrip.indexOf(" DESC");
												if (descTest != -1) {
													var descVal = "<span class='panel_2_product_name_desc'>" + prodFilterArray[pr][3] + "<\/span>";
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
												productHTMLTest = baseProdNameHTMLStart + "<div id='panel2ProductName" + prodFilterArray[pr][0] + "' class='panel_2_product_name" + baseProductStyle + "'" + prodNameTagLink + " tabindex='0' title=\"" + prodFilterArray[pr][2] + "\">" + prodNameItalicVar + "<span class='panel_2_product_name_name'>" + prodFilterArray[pr][2] + "<\/span>" + descVal + "<\/div>" + baseProdNameHTMLEnd;
											}
											var prodDescTagStart = productHTMLTest.indexOf("<!--PRODDESC");
											if (prodDescTagStart != -1) {
												var prodDescTagEnd = productHTMLTest.indexOf(">",prodDescTagStart);
												var prodDescTagStrip = productHTMLTest.substring(prodDescTagStart,(prodDescTagEnd+1));
												var baseProdDescHTMLStart = productHTMLTest.substr(0,prodDescTagStart);
												var baseProdDescHTMLEnd = productHTMLTest.substr((prodDescTagEnd+1));
												productHTMLTest = baseProdDescHTMLStart + "<div id='panel2ProductDesc" + prodFilterArray[pr][0] + "' class='panel_2_product_desc'>" + prodFilterArray[pr][3] + "<\/div>" + baseProdDescHTMLEnd;
											}
											var prodCatTagStart = productHTMLTest.indexOf("<!--PRODCAT");
											if (prodCatTagStart != -1) {
												var prodCatTagEnd = productHTMLTest.indexOf(">",prodCatTagStart);
												var prodCatTagStrip = productHTMLTest.substring(prodCatTagStart,(prodCatTagEnd+1));
												var baseProdCatHTMLStart = productHTMLTest.substr(0,prodCatTagStart);
												var baseProdCatHTMLEnd = productHTMLTest.substr((prodCatTagEnd+1));
												productHTMLTest = baseProdCatHTMLStart + "<div id='panel2ProductCat" + prodFilterArray[pr][0] + "' class='panel_2_product_cat'>" + prodFilterArray[pr][16] + "<\/div>" + baseProdCatHTMLEnd;
											}
											var prodBigImgTagStart = productHTMLTest.indexOf("<!--PRODBIGIMG");
											if (prodBigImgTagStart != -1) {
												var prodBigImgTagEnd = productHTMLTest.indexOf(">",prodBigImgTagStart);
												var prodBigImgTagStrip = productHTMLTest.substring(prodBigImgTagStart,(prodBigImgTagEnd+1));
												var baseProdBigImgHTMLStart = productHTMLTest.substr(0,prodBigImgTagStart);
												var baseProdBigImgHTMLEnd = productHTMLTest.substr((prodBigImgTagEnd+1));
												var prodBigImgTagLinkStart = "<a href='' onclick='panel2ProdSelect(" + prodFilterArray[pr][0] + ", \"" + prodFilterArray[pr][1] + "\", \"panel2ProductName" + prodFilterArray[pr][0] + "\", \"panel_2_product_name\", "+pr+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2ProdSelect(" + prodFilterArray[pr][0] + ", \"" + prodFilterArray[pr][1] + "\", \"panel2ProductName" + prodFilterArray[pr][0] + "\", \"panel_2_product_name\", "+pr+");return false;}'";
												if (hoverState==1) {
													prodBigImgTagLinkStart += " onmouseover='panel2ProdMouseOver(\"panel2ProductName" + prodFilterArray[pr][0] + "\", \"panel_2_product_name\", "+pr+");' onfocus='panel2ProdMouseOver(\"panel2ProductName" + prodFilterArray[pr][0] + "\", \"panel_2_product_name\", "+pr+");' onmouseout='panel2ProdMouseOut(\"panel2ProductName" + prodFilterArray[pr][0] + "\", \"panel_2_product_name\", "+pr+");' onblur='panel2ProdMouseOut(\"panel2ProductName" + prodFilterArray[pr][0] + "\", \"panel_2_product_name\", "+pr+");'";
												}
												prodBigImgTagLinkStart += " tabindex='0' title=\"" + prodFilterArray[pr][2] + "\">";
												var prodBigImgTagLinkEnd = "<\/a>";
												productHTMLTest = baseProdBigImgHTMLStart + prodBigImgTagLinkStart + "<img title=\"" + prodFilterArray[pr][2] + "\" alt=\"" + prodFilterArray[pr][2] + "\" id='panel2ProductBigImg" + prodFilterArray[pr][0] + "' class='panel_2_product_big_img' src='" + clientImgBase + prodFilterArray[pr][4] + "'>" + prodBigImgTagLinkEnd + baseProdBigImgHTMLEnd;
											}
											var prodSmImgTagStart = productHTMLTest.indexOf("<!--PRODSMIMG");
											if (prodSmImgTagStart != -1) {
												var prodSmImgTagEnd = productHTMLTest.indexOf(">",prodSmImgTagStart);
												var prodSmImgTagStrip = productHTMLTest.substring(prodSmImgTagStart,(prodSmImgTagEnd+1));
												var baseProdSmImgHTMLStart = productHTMLTest.substr(0,prodSmImgTagStart);
												var baseProdSmImgHTMLEnd = productHTMLTest.substr((prodSmImgTagEnd+1));
												var prodSmImgTagLinkStart = "<a href='' onclick='panel2ProdSelect(" + prodFilterArray[pr][0] + ", \"" + prodFilterArray[pr][1] + "\", \"panel2ProductName" + prodFilterArray[pr][0] + "\", \"panel_2_product_name\", "+pr+");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2ProdSelect(" + prodFilterArray[pr][0] + ", \"" + prodFilterArray[pr][1] + "\", \"panel2ProductName" + prodFilterArray[pr][0] + "\", \"panel_2_product_name\", "+pr+");return false;}'";
												if (hoverState==1) {
													prodSmImgTagLinkStart += " onmouseover='panel2ProdMouseOver(\"panel2ProductName" + prodFilterArray[pr][0] + "\", \"panel_2_product_name\", "+pr+");' onfocus='panel2ProdMouseOver(\"panel2ProductName" + prodFilterArray[pr][0] + "\", \"panel_2_product_name\", "+pr+");' onmouseout='panel2ProdMouseOut(\"panel2ProductName" + prodFilterArray[pr][0] + "\", \"panel_2_product_name\", "+pr+");' onblur='panel2ProdMouseOut(\"panel2ProductName" + prodFilterArray[pr][0] + "\", \"panel_2_product_name\", "+pr+");'";
												}
												prodSmImgTagLinkStart += " tabindex='0' title=\"" + prodFilterArray[pr][2] + "\">";
												var prodSmImgTagLinkEnd = "<\/a>";
												productHTMLTest = baseProdSmImgHTMLStart + prodSmImgTagLinkStart + "<img title=\"" + prodFilterArray[pr][2] + "\" alt=\"" + prodFilterArray[pr][2] + "\" id='panel2ProductSmImg" + prodFilterArray[pr][0] + "' class='panel_2_product_sm_img' src='" + clientImgBase + prodFilterArray[pr][5] + "'>" + prodSmImgTagLinkEnd + baseProdSmImgHTMLEnd;
											}
											productHTMLLeaf += productHTMLTest;
										}
									}
									categoryHTMLLeaf += categoryHTMLTest + "<div class='panel_2_family_category_product_shell panel_2_family_category_product_shell_" + catArray[w][0] + "' style='display:none;'>" + productHTMLLeaf + "<\/div>";
								}
							}
							if (panel2PListSliderOpen = 1) {
								prodListHTML += "<span class='panel_2_prodlist_famshell panel_2_prodlist_famshell_" + famArray[f][0] + " panel_2_prodlist_famshell_off'><div class='panel_2_family_category_shell panel_2_family_category_shell_" + famArray[f][0] + "'>" + categoryHTMLLeaf + "<\/div><\/span>";
							}
							else {
								prodListHTML += familyHTMLTest + "<span class='panel_2_prodlist_famshell panel_2_prodlist_famshell_" + famArray[f][0] + " panel_2_prodlist_famshell_off'><div class='panel_2_family_category_shell panel_2_family_category_shell_" + famArray[f][0] + "' style='display:none;'><\/span>" + categoryHTMLLeaf + "<\/div>";
							}
						}
					}
					baseHTML = baseProdListHTMLStart + prodListHTML + baseProdListHTMLEnd;
					panel2ProdListOn = 1;
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
				panel2CatListCount = 0;
				for (j=0;j<catArray.length;j++) {
					if (catArray[j][6] == 1) {
						panel2CatListCount++;
					}
				}
				if (panel2CatListCount == 0) {
					panel2CatListCount = catArray.length;
				}
				baseHTML = catListNumHTMLStart + "<span id='panel2CatListNum'>" + panel2CatListCount + "<\/span>" + catListNumHTMLEnd;
			}
			var catListProdNumTagStart = baseHTML.indexOf("<!--CATLISTPRODNUM");
			if (catListProdNumTagStart != -1) {
				var catListProdNumTagEnd = baseHTML.indexOf(">",catListProdNumTagStart);
				var catListProdNumHTMLStart = baseHTML.substr(0,catListProdNumTagStart);
				var catListProdNumHTMLEnd = baseHTML.substr((catListProdNumTagEnd+1));
				panel2CatListProdCount = 0;
				for (p=0;p<prodDisplayArray.length;p++) {
					if (prodDisplayArray[p][9] == 1) {
						panel2CatListProdCount++;
					}
				}
				baseHTML = catListProdNumHTMLStart + "<span id='panel2CatListProdNum'>" + panel2CatListProdCount + "<\/span>" + catListProdNumHTMLEnd;
			}
			var prodCountNumTagStart = baseHTML.indexOf("<!--PRODCOUNT");
			if (prodCountNumTagStart != -1) {
				var prodCountNumTagEnd = baseHTML.indexOf(">",prodCountNumTagStart);
				var prodCountNumTagStrip = baseHTML.substring(prodCountNumTagStart,(prodCountNumTagEnd+1));
				var prodCountNumHTMLStart = baseHTML.substr(0,prodCountNumTagStart);
				var prodCountNumHTMLEnd = baseHTML.substr((prodCountNumTagEnd+1));
				var panel2ProdCount = 0;
				var prodCountNumValueStart = prodCountNumTagStrip.indexOf(" VALUE=");
				if (prodCountNumValueStart != -1) {
					var prodCountNumValueEnd = prodCountNumTagStrip.indexOf("]",prodCountNumValueStart);
					var prodCountNumValueVar = prodCountNumTagStrip.substring((prodCountNumValueStart+8),(prodCountNumValueEnd));
				}
				else {
					var prodCountNumValueVar = "";
				}
				baseHTML = prodCountNumHTMLStart + "<span id='panel2ProdCountNumHolder'><span id='panel2ProdCountNum'>" + prodCartArray.length + "<\/span>" +  prodCountNumValueVar + "<\/span>" + prodCountNumHTMLEnd;
			}
			var countProdNumTagStart = baseHTML.indexOf("<!--COUNTPROD");
			if (countProdNumTagStart != -1) {
				var countProdNumTagEnd = baseHTML.indexOf(">",countProdNumTagStart);
				var countProdNumTagStrip = baseHTML.substring(countProdNumTagStart,(countProdNumTagEnd+1));
				var countProdNumHTMLStart = baseHTML.substr(0,countProdNumTagStart);
				var countProdNumHTMLEnd = baseHTML.substr((countProdNumTagEnd+1));
				var panel2CountProd = 0;
				var countProdNumValueStart = countProdNumTagStrip.indexOf(" VALUE=");
				if (countProdNumValueStart != -1) {
					var countProdNumValueEnd = countProdNumTagStrip.indexOf("]",countProdNumValueStart);
					var countProdNumValueVar = countProdNumTagStrip.substring((countProdNumValueStart+8),(countProdNumValueEnd));
				}
				else {
					var countProdNumValueVar = "";
				}
				baseHTML = countProdNumHTMLStart + "<span id='panel2CountProdNumHolder'><span id='panel2CountProdNum'>" + prodCartArray.length + "<\/span>" +  countProdNumValueVar + "<\/span>" + countProdNumHTMLEnd;
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
					p2selProdSingularVar = " " + selectedProductsTagStrip.substring((selProdSingularStart+11),(selProdSingularEnd));
				}
				var selProdPluralStart = selectedProductsTagStrip.indexOf(" PLURAL=");
				if (selProdPluralStart != -1) {
					var selProdPluralEnd = selectedProductsTagStrip.indexOf("]",selProdPluralStart);
					p2selProdPluralVar = " " + selectedProductsTagStrip.substring((selProdPluralStart+9),(selProdPluralEnd));
				}
				if (prodCartArray.length == 1) {
					var thisSPT = p2selProdSingularVar;
				}
				else {
					var thisSPT = p2selProdPluralVar;
				}
				baseHTML = selectedProductsHTMLStart + "<div id='panel2SelProdText' class='panel_2_selected_products_text'>" + thisSPT + "<\/div>" + selectedProductsHTMLEnd;
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
				prodlistButtonRender += "<div id='panel2ProdlistButton' class='panel_2_prodlist_button panel_2_prodlist_button_off'";
				if (hoverState==1) {
					prodlistButtonRender += " onmouseover='panel2ButtonHover(\"panel2ProdlistButton\",\"panel_2_prodlist_button\",1);' onfocus='panel2ButtonHover(\"panel2ProdlistButton\",\"panel_2_prodlist_button\",1);' onmouseout='panel2ButtonHover(\"panel2ProdlistButton\",\"panel_2_prodlist_button\",0);' onblur='panel2ButtonHover(\"panel2ProdlistButton\",\"panel_2_prodlist_button\",0);'";
				}
				prodlistButtonRender += " onclick='panel2SubmitForm();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2SubmitForm();}' tabindex='0' title=\"" + prodlistButtonValueVar + "\">" + prodlistButtonItalicVar + prodlistButtonValueVar + "<\/div>";
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
				var prodlistAllOnValueStart = prodlistResetTagStrip.indexOf(" ALLON");
				if (prodlistAllOnValueStart != -1) {
					var prodlistAllOnValueVar = "on";
				}
				else {
					var prodlistAllOnValueVar = "";
				}
				var prodlistResetItalicStart = prodlistResetTagStrip.indexOf(" FNTAW=");
				if (prodlistResetItalicStart != -1) {
					var prodlistResetItalicEnd = prodlistResetTagStrip.indexOf("]",prodlistResetItalicStart);
					var prodlistResetItalicVar = "<i class='fa " + prodlistResetTagStrip.substring((prodlistResetItalicStart+8),(prodlistResetItalicEnd)) + "'><\/i>";
				}
				else {
					var prodlistResetItalicVar = "";
				}
				prodlistResetRender += "<div id='panel2ProdlistReset' class='panel_2_prodlist_reset panel_2_prodlist_reset_off'";
				if (hoverState==1) {
					prodlistResetRender += " onmouseover='panel2ButtonHover(\"panel2ProdlistReset\",\"panel_2_prodlist_reset\",1);' onfocus='panel2ButtonHover(\"panel2ProdlistReset\",\"panel_2_prodlist_reset\",1);' onmouseout='panel2ButtonHover(\"panel2ProdlistReset\",\"panel_2_prodlist_reset\",0);' onblur='panel2ButtonHover(\"panel2ProdlistReset\",\"panel_2_prodlist_reset\",0);'";
				}
				prodlistResetRender += " onclick='panel2ResetProducts(\""+prodlistAllOnValueVar+"\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2ResetProducts(\""+prodlistAllOnValueVar+"\");}' tabindex='0' title=\"" + prodlistResetValueVar + "\">" + prodlistResetItalicVar + prodlistResetValueVar + "<\/div>";
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
				prodlistCatResetRender += "<div id='panel2ProdlistCatReset' class='panel_2_prodlist_catreset panel_2_prodlist_catreset_" + catResOnVar + "'";
				if (hoverState==1) {
					prodlistCatResetRender += " onmouseover='panel2ButtonHover(\"panel2ProdlistCatReset\",\"panel_2_prodlist_catreset\",1);' onfocus='panel2ButtonHover(\"panel2ProdlistCatReset\",\"panel_2_prodlist_catreset\",1);' onmouseout='panel2ButtonHover(\"panel2ProdlistCatReset\",\"panel_2_prodlist_catreset\",0);' onblur='panel2ButtonHover(\"panel2ProdlistCatReset\",\"panel_2_prodlist_catreset\",0);'";
				}
				prodlistCatResetRender += " onclick='panel2ResetCategories();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2ResetCategories();}' tabindex='0' title=\"" + prodlistCatResetValueVar + "\">" + prodlistCatResetItalicVar + prodlistCatResetValueVar + daProdNumWrite + "<\/div>";
				baseHTML = prodlistCatResetHTMLStart + prodlistCatResetRender + prodlistCatResetHTMLEnd;
			}
			var onretTagStart = baseHTML.indexOf("<!--ONLINERETAILERRESULTS");
			if (onretTagStart != -1 && onretOn == 1) {
				var onretTagEnd = baseHTML.indexOf(">",onretTagStart);
				var onretTagStrip = baseHTML.substring(onretTagStart,(onretTagEnd+1));
				var onretHTMLStart = baseHTML.substr(0,onretTagStart);
				var onretHTMLEnd = baseHTML.substr((onretTagEnd+1));
				var onretCombineStart = onretTagStrip.indexOf(" COMBINE");
				if (onretCombineStart != -1) {
					panel2OnRetCombine = 1;
				}
				var panel2OnRetStyleStart = onretTagStrip.indexOf(" TYPE=");
				if (panel2OnRetStyleStart != -1) {
					var panel2OnRetStyleEnd = onretTagStrip.indexOf("]",panel2OnRetStyleStart);
					panel2OnRetStyle = onretTagStrip.substring((panel2OnRetStyleStart+8),(panel2OnRetStyleEnd));
				}
				if (panel2OnRetState == 0) {
					var retShow = " style='display:none;'";
				}
				else {
					var retShow = "";
				}
				baseHTML = onretHTMLStart + "<div id='panel2OnRetResultsShell' class='panel_2_onret_results_shell'" + retShow + "><\/div>" + onretHTMLEnd;
			}
			var onretselTagStart = baseHTML.indexOf("<!--ONLINERETAILERSELECT");
			if (onretselTagStart != -1 && onretOn == 1) {
				var onretselTagEnd = baseHTML.indexOf(">",onretselTagStart);
				var onretselTagStrip = baseHTML.substring(onretselTagStart,(onretselTagEnd+1));
				var onretselHTMLStart = baseHTML.substr(0,onretselTagStart);
				var onretselHTMLEnd = baseHTML.substr((onretselTagEnd+1));
				baseHTML = onretselHTMLStart + "<div id='panel2OnRetSelectShell' class='panel_2_onret_select_shell'><\/div>" + onretselHTMLEnd;
			}
			if(gLog==1){console.log("panel2Load - Write baseHTML");}
			document.getElementById('panel2templates').innerHTML = baseHTML;
			if (storeDisplayArray.length || storeProdHoldArray.length) {
				if(gLog==1){console.log("panel2Load - storeDisplayArray.length || storeProdHoldArray.length");}
			}
			else {
				if(gLog==1){console.log("panel2Load - NO STORE RESULTS");}
				$(".p2_store_parity").hide();
				if (document.getElementById('panel2ResultsTotal')) {
					document.getElementById('panel2ResultsTotal').innerHTML = "0";
				}
			}
			if (ecParity == 1) {
				if(gLog==1){console.log("panel2Load - ecParity == 1");}
			}
			else {
				if(gLog==1){console.log("panel2Load - NO ECOMM RESULTS");}
				$(".p2_ecomm_parity").hide();
				if (onretPar != 0 && document.getElementById('panel2ECommListShell')) {
					document.getElementById('panel2ECommListShell').innerHTML = autotextIt(p2TemplateSet.panel2WidgetAreaNoneDiv,"panel2WidgetAreaNone");
				}
			}
			if (document.getElementById('panel2LocListShell')) {
				if (storeDisplayArray.length || storeProdHoldArray.length) {
					panel2WriteLocList();
				}
				else {
					if (p2SearchMade == 1) {
						document.getElementById('panel2LocListShell').innerHTML = autotextIt(p2TemplateSet.panel2WidgetAreaNoneDiv,"panel2WidgetAreaNone");
					}
				}
			}
			if (document.getElementById('panel2ECommListShell') && ecParity == 1 && ecStyle == 1) {
				panel2WriteECommList();
			}
			else if (document.getElementById('panel2ECommListShell') && ecParity == 1 && ecStyle == 2) {
				showOnRet();
			}
			if (onretOn == 1 && ecParity == 0 && (storeDisplayArray.length || storeProdHoldArray.length)) {
				if (document.getElementById('panel2OnRetResultsShell') && document.getElementById('panel2OnRetSelectShell')) {
					panel2WriteOnlineRetailer();
				}
			}
			if ((onretOn == 2 || ecommPos != 0) && ecParity == 0 && (storeDisplayArray.length || storeProdHoldArray.length)) {
				if (onRetShow == 1 || ecommPos != 0) {
					if (ecommView == 1 && document.getElementById("PROD").value.indexOf(",") == -1) {
						panel2WriteECommList();
					}
					else {
						showOnRet();
					}
				}
				else {
					showOnlineRetailers();
				}
			}
			if (document.getElementById('panel2ProdShopCartShell')) {
				panel2WriteProdCart();
				panel3WriteProdCart();
			}
			if (document.getElementById('panel2MultiMap') && (storeDisplayArray.length || storeProdHoldArray.length)) {
				panel2CompileMultiMap();
			}
			else if (document.getElementById('panel2MultiMap') && ecParity != 0) {
				if (atlantis == 1) {
					drawMap();
				}
				else {
					panel2DrawMultiMap();
				}
			}
			if (cpP2 != 0 && cpWritten == 0 && atlantis == 0) {
				cpWrite();
			}
			if (cpsP2 != 0) {
				if (cpsWritten == 0) {
					cpSmallWrite();
				}
				else {
					cpsCheckDeals();
				}
			}
			if (param_CP2 == 1 && atlantis == 0) {
				controlPanelOpen("panel2");
			}
			if (cPanelOp == 1 && atlantis == 0) {
				if (document.getElementById("PROD").value.length == document.getElementById("FULLPROD").value.length || document.getElementById("PROD").value.length == "") {
					controlPanelClearCart();
				}
			}
			if (sourcePanel == "panel2") {
				loaderToggle(0);
				if (document.getElementById('panel2AddressField')) {
					if (document.getElementById('revCodeCompile').value != "") {
						if ($('#panel2AddressField').hasClass('enforce_blank')){}
						else{
							document.getElementById('panel2AddressField').value = document.getElementById('revCodeCompile').value;
						}
					}
					else if (document.getElementById('revCodeZip').value != "") {
						if ($('#panel2AddressField').hasClass('enforce_blank')){}
						else{
							document.getElementById('panel2AddressField').value = document.getElementById('revCodeZip').value;
						}
					}
				}
				if (document.getElementById('panel2CityField')) {
					if (document.getElementById('city').value != "") {
						document.getElementById('panel2CityField').value = document.getElementById('city').value;
					}
				}
				if (document.getElementById('panel2StateField')) {
					if (document.getElementById('state').value != "") {
						document.getElementById('panel2StateField').value = document.getElementById('state').value;
					}
				}
				if (document.getElementById('panel2ZipField')) {
					if (document.getElementById('zip').value != "") {
						document.getElementById('panel2ZipField').value = document.getElementById('zip').value;
					}
				}
			}
			else {
				panelSwitch(sourcePanel,"panel2",transNext,1);
				if (document.getElementById('panel2CityField') && FPC != 0) {
					document.getElementById('FPC').value = FPC;
					document.getElementById('PROD').value = prodSelString;
				}
				if (document.getElementById('panel2AddressField')) {
					if (document.getElementById('revCodeCompile').value != "") {
						document.getElementById('panel2AddressField').value = document.getElementById('revCodeCompile').value;
					}
					else if (document.getElementById('revCodeZip').value != "") {
						document.getElementById('panel2AddressField').value = document.getElementById('revCodeZip').value;
					}
				}
				if (document.getElementById('panel2CityField')) {
					if (cityBase != "") {
						document.getElementById('city').value = cityBase;
					}
					if (document.getElementById('city').value != "") {
						document.getElementById('panel2CityField').value = document.getElementById('city').value;
					}
				}
				if (document.getElementById('panel2StateField')) {
					if (stateBase != "") {
						document.getElementById('state').value = stateBase;
					}
					if (document.getElementById('state').value != "") {
						document.getElementById('panel2StateField').value = document.getElementById('state').value;
					}
				}
				if (document.getElementById('panel2ZipField')) {
					if (zipBase != "") {
						document.getElementById('zip').value = zipBase;
					}
					if (document.getElementById('zip').value != "") {
						document.getElementById('panel2ZipField').value = document.getElementById('zip').value;
					}
				}
			}
		}
		if (document.getElementById('panel2ScopeField')) {
			for (scopeIncr=0; scopeIncr<document.getElementById('panel2ScopeSelect').length; scopeIncr++) {
				if (document.getElementById('panel2ScopeSelect').options[scopeIncr].value == document.getElementById('scope').value) {
					document.getElementById('panel2ScopeSelect').options[scopeIncr].selected = true;
					document.getElementById('panel2ScopeField').value = document.getElementById('scope').value;
					break;
				}
			}
		}
		if (document.getElementById('panel2DistanceField')) {
			if (document.getElementById('panel2DistanceSelect')) {
				for (distanceIncr=0; distanceIncr<document.getElementById('panel2DistanceSelect').length; distanceIncr++) {
					if (document.getElementById('panel2DistanceSelect').options[distanceIncr].value == document.getElementById('distance').value) {
						document.getElementById('panel2DistanceSelect').options[distanceIncr].selected = true;
						document.getElementById('panel2DistanceField').value = document.getElementById('distance').value;
						break;
					}
				}
			}
			else {
				document.getElementById('panel2DistanceField').value = document.getElementById('distance').value;
			}
		}
		if (document.getElementById('panel2ResultsField')) {
			for (resultsIncr=0; resultsIncr<document.getElementById('panel2ResultsSelect').length; resultsIncr++) {
				if (document.getElementById('panel2ResultsSelect').options[resultsIncr].value == document.getElementById('results').value) {
					document.getElementById('panel2ResultsSelect').options[resultsIncr].selected = true;
					document.getElementById('panel2ResultsField').value = document.getElementById('results').value;
					break;
				}
			}
		}
		if (document.getElementById('panel2SortField')) {
			if (document.getElementById('panel2SortSelect')) {
				for (sortIncr=0; sortIncr<document.getElementById('panel2SortSelect').length; sortIncr++) {
					if (document.getElementById('panel2SortSelect').options[sortIncr].value == document.getElementById('sort').value) {
						document.getElementById('panel2SortSelect').options[sortIncr].selected = true;
						document.getElementById('panel2SortField').value = document.getElementById('sort').value;
						break;
					}
				}
			}
			else {
				document.getElementById('panel2SortField').value = document.getElementById('sort').value;
			}
		}
		if (allProductCall==1 || choiceWindow==1) {
			if (allProd == 1 || choiceWindow == 1) {
				panel2AlertAllProducts();
			}
		}
		if (bmBypass == 2) {
			p2OnDemand();
		}
		if (enableResize == 2) {
			parent.postMessage("RSLT:1",refurl);
		}
	}
	else {
		if (enableResize == 2) {
			parent.postMessage("RSLT:0",refurl);
		}
		if (atlantis == 0) {
			p4Connect();
		}
	}
	if(gLog==1){console.log("panel2Load() - panel1Written", panel1Written);}
	if (panel1Written==0 && atlantis == 0) {
		p1ReLoad = 1;
		setTimeout(function(){
			p1LoadType = 1;
			p1TemplateFetch();
		},2000);
	}
	$('.faux_table').hover(function() {
		if ($('.filter_1').hasClass('filter_on')) {
		$('.storeCategorySlider').show();$('.pop_filter').hide();$('.pop_restaurants').hide();$('.pop_restaurants').hide();genericButtonClick('filter_1','filter');if($('.restaurants_1').hasClass('restaurants_on')){genericButtonClick('restaurants_1','restaurants');}else{$('.storeCategorySlider').hide();}
		}
	} );
	setTimeout(function(){
		$('.panel_2_store_category_holder').hide();
	},100);
	$(".panel_close_me").hide();
	whatPanelUp = "panel2";
	if (pmReady == 0) {
		pmReady = 1;
		if (enableResize == 2) {
			parent.postMessage("LOAD:1",refurl);
		}
	}
	setTimeout(function(){
		if (mktCalled == 0 && numPost == 1) {
			numeratorConnect();
		}
	},50);
}
function panel2FamImgReplace(whatState,whatID) {
	if (whatState == 1) {
		if (document.getElementById('panel2FamilyBigImgDivBack'+whatID) && $(".panel_2_family_big_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_2_family_big_img_div_over_"+whatID).show();
			$(".panel_2_family_big_img_div_back_"+whatID).removeClass('panel_2_family_big_img_div_back_off');
			$(".panel_2_family_big_img_div_back_"+whatID).addClass('panel_2_family_big_img_div_back_on');
		}
		if (document.getElementById('panel2FamilySmImgDivBack'+whatID) && $(".panel_2_family_sm_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_2_family_sm_img_div_over_"+whatID).show();
			$(".panel_2_family_sm_img_div_back_"+whatID).removeClass('panel_2_family_sm_img_div_back_off');
			$(".panel_2_family_sm_img_div_back_"+whatID).addClass('panel_2_family_sm_img_div_back_on');
		}
	}
	else {
		if (document.getElementById('panel2FamilyBigImgDivBack'+whatID) && $(".panel_2_family_big_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_2_family_big_img_div_over_"+whatID).hide();
			$(".panel_2_family_big_img_div_back_"+whatID).addClass('panel_2_family_big_img_div_back_off');
			$(".panel_2_family_big_img_div_back_"+whatID).removeClass('panel_2_family_big_img_div_back_on');
		}
		if (document.getElementById('panel2FamilySmImgDivBack'+whatID) && $(".panel_2_family_sm_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_2_family_sm_img_div_over_"+whatID).hide();
			$(".panel_2_family_sm_img_div_back_"+whatID).addClass('panel_2_family_sm_img_div_back_off');
			$(".panel_2_family_sm_img_div_back_"+whatID).removeClass('panel_2_family_sm_img_div_back_on');
		}
	}
}
function panel2CatImgReplace(whatState,whatID) {
	if (whatState == 1) {
		if (document.getElementById('panel2CategoryBigImgDivBack'+whatID) && $(".panel_2_category_big_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_2_category_big_img_div_over_"+whatID).show();
			$(".panel_2_category_big_img_div_back_"+whatID).removeClass('panel_2_category_big_img_div_back_off');
			$(".panel_2_category_big_img_div_back_"+whatID).addClass('panel_2_category_big_img_div_back_on');
		}
		if (document.getElementById('panel2CategorySmImgDivBack'+whatID) && $(".panel_2_category_sm_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_2_category_sm_img_div_over_"+whatID).show();
			$(".panel_2_category_sm_img_div_back_"+whatID).removeClass('panel_2_category_sm_img_div_back_off');
			$(".panel_2_category_sm_img_div_back_"+whatID).addClass('panel_2_category_sm_img_div_back_on');
		}
	}
	else {
		if (document.getElementById('panel2CategoryBigImgDivBack'+whatID) && $(".panel_2_category_big_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_2_category_big_img_div_over_"+whatID).hide();
			$(".panel_2_category_big_img_div_back_"+whatID).addClass('panel_2_category_big_img_div_back_off');
			$(".panel_2_category_big_img_div_back_"+whatID).removeClass('panel_2_category_big_img_div_back_on');
		}
		if (document.getElementById('panel2CategorySmImgDivBack'+whatID) && $(".panel_2_category_sm_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".panel_2_category_sm_img_div_over_"+whatID).hide();
			$(".panel_2_category_sm_img_div_back_"+whatID).addClass('panel_2_category_sm_img_div_back_off');
			$(".panel_2_category_sm_img_div_back_"+whatID).removeClass('panel_2_category_sm_img_div_back_on');
		}
	}
}
function panel2FamImgClick(whatID) {
	$(".panel_2_family_big_img_div_over").hide();
	$(".panel_2_family_big_img_div_back").addClass('panel_2_family_big_img_div_back_off');
	$(".panel_2_family_big_img_div_back").removeClass('panel_2_family_big_img_div_back_on');
	$(".panel_2_family_big_img_div_back").addClass('img_replace_active');
	$(".panel_2_family_big_img_div_back").removeClass('img_replace_static');
	$(".panel_2_family_sm_img_div_over").hide();
	$(".panel_2_family_sm_img_div_back").addClass('panel_2_family_sm_img_div_back_off');
	$(".panel_2_family_sm_img_div_back").removeClass('panel_2_family_sm_img_div_back_on');
	$(".panel_2_family_sm_img_div_back").addClass('img_replace_active');
	$(".panel_2_family_sm_img_div_back").removeClass('img_replace_static');
	if (whatID != p2clickyFamImg) {
		$(".panel_2_family_big_img_div_over_"+whatID).show();
		$(".panel_2_family_big_img_div_back_"+whatID).removeClass('panel_2_family_big_img_div_back_off');
		$(".panel_2_family_big_img_div_back_"+whatID).addClass('panel_2_family_big_img_div_back_on');
		$(".panel_2_family_big_img_div_back_"+whatID).addClass('img_replace_static');
		$(".panel_2_family_big_img_div_back_"+whatID).removeClass('img_replace_active');
		$(".panel_2_family_sm_img_div_over_"+whatID).show();
		$(".panel_2_family_sm_img_div_back_"+whatID).removeClass('panel_2_family_sm_img_div_back_off');
		$(".panel_2_family_sm_img_div_back_"+whatID).addClass('panel_2_family_sm_img_div_back_on');
		$(".panel_2_family_sm_img_div_back_"+whatID).addClass('img_replace_static');
		$(".panel_2_family_sm_img_div_back_"+whatID).removeClass('img_replace_active');
		p2clickyFamImg = whatID;
	}
	else {
		p2clickyFamImg = 0;
	}
}
function panel2CatImgClick(whatID) {
	$(".panel_2_category_big_img_div_over").hide();
	$(".panel_2_category_big_img_div_back").addClass('panel_2_category_big_img_div_back_off');
	$(".panel_2_category_big_img_div_back").removeClass('panel_2_category_big_img_div_back_on');
	$(".panel_2_category_big_img_div_back").addClass('img_replace_active');
	$(".panel_2_category_big_img_div_back").removeClass('img_replace_static');
	$(".panel_2_category_sm_img_div_over").hide();
	$(".panel_2_category_sm_img_div_back").addClass('panel_2_category_sm_img_div_back_off');
	$(".panel_2_category_sm_img_div_back").removeClass('panel_2_category_sm_img_div_back_on');
	$(".panel_2_category_sm_img_div_back").addClass('img_replace_active');
	$(".panel_2_category_sm_img_div_back").removeClass('img_replace_static');
	if (whatID != p2clickyCatImg) {
		$(".panel_2_category_big_img_div_over_"+whatID).show();
		$(".panel_2_category_big_img_div_back_"+whatID).removeClass('panel_2_category_big_img_div_back_off');
		$(".panel_2_category_big_img_div_back_"+whatID).addClass('panel_2_category_big_img_div_back_on');
		$(".panel_2_category_big_img_div_back_"+whatID).addClass('img_replace_static');
		$(".panel_2_category_big_img_div_back_"+whatID).removeClass('img_replace_active');
		$(".panel_2_category_sm_img_div_over_"+whatID).show();
		$(".panel_2_category_sm_img_div_back_"+whatID).removeClass('panel_2_category_sm_img_div_back_off');
		$(".panel_2_category_sm_img_div_back_"+whatID).addClass('panel_2_category_sm_img_div_back_on');
		$(".panel_2_category_sm_img_div_back_"+whatID).addClass('img_replace_static');
		$(".panel_2_category_sm_img_div_back_"+whatID).removeClass('img_replace_active');
		p2clickyCatImg = whatID;
	}
	else {
		p2clickyCatImg = 0;
	}
}
function panel2Back(panelVal) {
	whatPanelUp = panelVal;
	panelSwitch("panel2",panelVal,transNext);
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
function panel2ProdWidg() {
}
function panel2ResetProducts(allon) {
	$('.panel_2_prodlist_reset').removeClass('panel_2_prodlist_reset_off');
	$('.panel_2_prodlist_reset').removeClass('panel_2_prodlist_reset_hover');
	$('.panel_2_prodlist_reset').addClass('panel_2_prodlist_reset_on');
	document.getElementById('PROD').value = prodSelString;
	if (allon) {
		var izDemOn = 1;
		for (y=0;y<prodFilterArray.length;y++) {
			if (prodFilterArray[y][9] == 0) {
				izDemOn = 0;
			}
		}
		prodCartArray.length = 0;
		if (panel2ResetFirstClick == 0) {
			panel2ResetFirstClick = 1;
			izDemOn = 0;
		}
		if (izDemOn == 1) {
			for (z=0;z<prodFilterArray.length;z++) {
				prodFilterArray[z][9] = 0;
			}
			$('.panel_2_product_name').removeClass('panel_2_product_name_hover');
			$('.panel_2_product_name').removeClass('panel_2_product_name_on');
			$('.panel_2_product_name').addClass('panel_2_product_name_off');
		}
		else {
			for (z=0;z<prodFilterArray.length;z++) {
				prodFilterArray[z][9] = 1;
				prodCartArray[z] = prodFilterArray[z][0];
			}
			$('.panel_2_product_name').removeClass('panel_2_product_name_hover');
			$('.panel_2_product_name').removeClass('panel_2_product_name_off');
			$('.panel_2_product_name').addClass('panel_2_product_name_on');
		}
		panel2WriteProdCart();
		panel3WriteProdCart();
	}
	else {
		if (panel2AllOffIsOn == 1) {
			for (y=0;y<prodDisplayArray.length;y++) {
				prodFilterArray[y] = prodDisplayArray[y];
				prodFilterArray[y][9] = 0;
			}
			for (y=0;y<catArray.length;y++) {
				catArray[y][6] = 0;
			}
			$('.panel_2_product_name').removeClass('panel_2_product_name_hover');
			$('.panel_2_product_name').removeClass('panel_2_product_name_on');
			$('.panel_2_product_name').addClass('panel_2_product_name_off');
			$('.panel_2_category_name').removeClass('panel_2_category_name_hover');
			$('.panel_2_category_name').removeClass('panel_2_category_name_on');
			$('.panel_2_category_name').addClass('panel_2_category_name_off');
		}
		else {
			for (y=0;y<prodDisplayArray.length;y++) {
				prodFilterArray[y] = prodDisplayArray[y];
				prodFilterArray[y][9] = 1;
			}
			for (y=0;y<catArray.length;y++) {
				catArray[y][6] = 1;
			}
			$('.panel_2_product_name').removeClass('panel_2_product_name_hover');
			$('.panel_2_product_name').removeClass('panel_2_product_name_off');
			$('.panel_2_product_name').addClass('panel_2_product_name_on');
			$('.panel_2_category_name').removeClass('panel_2_category_name_hover');
			$('.panel_2_category_name').removeClass('panel_2_category_name_off');
			$('.panel_2_category_name').addClass('panel_2_category_name_on');
		}
	}
	if (document.getElementById('panel2ProductName'+prodFilterArray[x][0])) {
		document.getElementById('panel2ProductName'+prodFilterArray[x][0]).style.display = "block";
	}
	if (document.getElementById('panel2ProductBigImg'+prodFilterArray[x][0])) {
		document.getElementById('panel2ProductBigImg'+prodFilterArray[x][0]).style.display = "block";
	}
	if (document.getElementById('panel2ProductSmImg'+prodFilterArray[x][0])) {
		document.getElementById('panel2ProductSmImg'+prodFilterArray[x][0]).style.display = "block";
	}
	for (w=0;w<prodFilterArray.length;w++) {
		$('.panel_2_prodlist_prodshell_'+prodFilterArray[w][0]).removeClass('panel_2_prodlist_prodshell_on');
		$('.panel_2_prodlist_prodshell_'+prodFilterArray[w][0]).addClass('panel_2_prodlist_prodshell_off');
		var j = document.getElementsByClassName('panel_2_prodlist_prodshell_'+prodFilterArray[w][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
	for (x=0;x<famArray.length;x++) {
		famArray[x][5] = 0;
		$('.panel_2_prodlist_famshell_'+famArray[x][0]).removeClass('panel_2_prodlist_famshell_on');
		$('.panel_2_prodlist_famshell_'+famArray[x][0]).addClass('panel_2_prodlist_famshell_off');
		var j = document.getElementsByClassName('panel_2_prodlist_famshell_'+famArray[x][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
	for (y=0;y<catArray.length;y++) {
		catArray[y][6] = 0;
		$('#panel2CategoryName'+catArray[y][0]).removeClass('panel_2_category_name_hover');
		$('#panel2CategoryName'+catArray[y][0]).removeClass('panel_2_category_name_on');
		$('#panel2CategoryName'+catArray[y][0]).addClass('panel_2_category_name_off');
		$('#panel2CategoryName'+catArray[y][0]+'All').removeClass('panel_2_category_name_all_hover');
		$('#panel2CategoryName'+catArray[y][0]+'All').removeClass('panel_2_category_name_all_on');
		$('#panel2CategoryName'+catArray[y][0]+'All').addClass('panel_2_category_name_all_off');
		$('.panel_2_prodlist_catshell_'+catArray[y][0]).removeClass('panel_2_prodlist_catshell_on');
		$('.panel_2_prodlist_catshell_'+catArray[y][0]).addClass('panel_2_prodlist_catshell_off');
		var j = document.getElementsByClassName('panel_2_prodlist_catshell_'+catArray[y][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
	for (z=0;z<labelArray.length;z++) {
		labelArray[z][3] = 0;
		$('.panel_2_prodlist_labelshell_'+labelArray[z][0]).removeClass('panel_2_prodlist_labelshell_on');
		$('.panel_2_prodlist_labelshell_'+labelArray[z][0]).addClass('panel_2_prodlist_labelshell_off');
		var j = document.getElementsByClassName('panel_2_prodlist_labelshell_'+labelArray[z][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
}
function panel2CloseDealShell() {
	$(".panel_2_deal_shell").slideUp(150);
}
function panel2OpenDealShell() {
	var thisDealOBJ = dealOBJ;
	if (thisDealOBJ.dealcount != 0) {
		$(".panel_2_deal_shell").show();
	}
}
function panel2SliderControl(slid) {
	for (x=0; x<panel2SliderArray.length; x++) {
		if (x == slid) {
			if (panel2SliderArray[x][3] == 0) {
				$("." + panel2SliderArray[x][0]).slideDown(250);
				$(".panel_2_slider_i_" + x).removeClass(panel2SliderArray[x][2]);
				$(".panel_2_slider_i_" + x).addClass(panel2SliderArray[x][1]);
				panel2SliderArray[x][3] = 1;
			}
			else {
				$("." + panel2SliderArray[x][0]).slideUp(250);
				$(".panel_2_slider_i_" + x).removeClass(panel2SliderArray[x][1]);
				$(".panel_2_slider_i_" + x).addClass(panel2SliderArray[x][2]);
				panel2SliderArray[x][3] = 0;
			}
		}
		else {
			$("." + panel2SliderArray[x][0]).slideUp(100);
			$(".panel_2_slider_i_" + x).removeClass(panel2SliderArray[x][1]);
			$(".panel_2_slider_i_" + x).addClass(panel2SliderArray[x][2]);
			panel2SliderArray[x][3] = 0;
		}
	}
}
function panel2SlideItUp() {
	for (x=0; x<panel2SliderArray.length; x++) {
		$("." + panel2SliderArray[x][0]).slideUp(100);
		$(".panel_2_slider_i_" + x).removeClass(panel2SliderArray[x][1]);
		$(".panel_2_slider_i_" + x).addClass(panel2SliderArray[x][2]);
		panel2SliderArray[x][3] = 0;
	}
}
function panel2ResetCategories() {
	$('.panel_2_prodlist_catreset').removeClass('panel_2_prodlist_catreset_off');
	$('.panel_2_prodlist_catreset').removeClass('panel_2_prodlist_catreset_hover');
	$('.panel_2_prodlist_catreset').addClass('panel_2_prodlist_catreset_on');
	$('.panel_2_family_name').removeClass('panel_2_family_name_hover');
	$('.panel_2_family_name').removeClass('panel_2_family_name_on');
	$('.panel_2_family_name').addClass('panel_2_family_name_off');
	$('.panel_2_category_name').removeClass('panel_2_category_name_hover');
	$('.panel_2_category_name').removeClass('panel_2_category_name_on');
	$('.panel_2_category_name').addClass('panel_2_category_name_off');
	$('.panel_2_label_name').removeClass('panel_2_label_name_hover');
	$('.panel_2_label_name').removeClass('panel_2_label_name_on');
	$('.panel_2_label_name').addClass('panel_2_label_name_off');
	$('.panel_2_product_name').show();
	for (w=0;w<prodFilterArray.length;w++) {
		$('.panel_2_prodlist_prodshell_'+prodFilterArray[w][0]).removeClass('panel_2_prodlist_prodshell_on');
		$('.panel_2_prodlist_prodshell_'+prodFilterArray[w][0]).addClass('panel_2_prodlist_prodshell_off');
		var j = document.getElementsByClassName('panel_2_prodlist_prodshell_'+prodFilterArray[w][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
	for (x=0;x<famArray.length;x++) {
		famArray[x][5] = 0;
		$('.panel_2_prodlist_famshell_'+famArray[x][0]).removeClass('panel_2_prodlist_famshell_on');
		$('.panel_2_prodlist_famshell_'+famArray[x][0]).addClass('panel_2_prodlist_famshell_off');
		var j = document.getElementsByClassName('panel_2_prodlist_famshell_'+famArray[x][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
	for (y=0;y<catArray.length;y++) {
		catArray[y][6] = 0;
		$('#panel2CategoryName'+catArray[y][0]).removeClass('panel_2_category_name_hover');
		$('#panel2CategoryName'+catArray[y][0]).removeClass('panel_2_category_name_on');
		$('#panel2CategoryName'+catArray[y][0]).addClass('panel_2_category_name_off');
		$('#panel2CategoryName'+catArray[y][0]+'All').removeClass('panel_2_category_name_all_hover');
		$('#panel2CategoryName'+catArray[y][0]+'All').removeClass('panel_2_category_name_all_on');
		$('#panel2CategoryName'+catArray[y][0]+'All').addClass('panel_2_category_name_all_off');
		$('.panel_2_prodlist_catshell_'+catArray[y][0]).removeClass('panel_2_prodlist_catshell_on');
		$('.panel_2_prodlist_catshell_'+catArray[y][0]).addClass('panel_2_prodlist_catshell_off');
		var j = document.getElementsByClassName('panel_2_prodlist_catshell_'+catArray[y][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
	for (z=0;z<labelArray.length;z++) {
		labelArray[z][3] = 0;
		$('.panel_2_prodlist_labelshell_'+labelArray[z][0]).removeClass('panel_2_prodlist_labelshell_on');
		$('.panel_2_prodlist_labelshell_'+labelArray[z][0]).addClass('panel_2_prodlist_labelshell_off');
		var j = document.getElementsByClassName('panel_2_prodlist_labelshell_'+labelArray[z][0]);
		for (k=0; k<j.length; k++) {
			j[k].style.display = "block";
		}
	}
}
function panel2EmailKeypress(e,addField,result) {
	var key;
	if(window.event) {key = window.event.keyCode;}
	else {key = e.which;}
	if(key == 13){
		panel2Email();
		return false;
	}
}
var getTheDirFirst = 0;
function panel2Email() {
	if(document.getElementById('panel2EmailField')) {
		var emailResult = checkIsEmail('panel2EmailField');
		if (emailResult == false) {
			errorText("You appear to have entered an invalid email address. Please try again.",6);
		}
		else {
			if (gtm != 0) {
				if (storeDisplayArray.length > maxStoreNum) {
					var dispRes = maxStoreNum;
				}
				else {
					var dispRes = storeDisplayArray.length;
				}
				var nearDist = storeDisplayArray[0][8];
				var farDist = storeDisplayArray[dispRes-1][8];
				GTMit("EMAILLST", "click", document.getElementById('LA').value + "|" + document.getElementById('LO').value + "|" + dispRes + "|" + nearDist + "|" + farDist,false);
			}
			panel2CompileEmail();
		}
	}
}
function panel2ConfirmEmail() {
	if(gLog==1){console.log("panel2ConfirmEmail - Start");}
	errorText('Your email has been sent.',0);
	setTimeout(function(){
		errorClose();
	},2000);
}
function panel2CompileEmail() {
	if(gLog==1){console.log("panel2CompileEmail - Start");}
	var directEmailStartHTML = autotextIt(p2TemplateSet.panel2EmailStartDiv,"panel2EmailStart");
	var directEmailLocClientTagStart = directEmailStartHTML.indexOf("<!--CLIENT");
	if (directEmailLocClientTagStart != -1) {
		var directEmailLocClientTagEnd = directEmailStartHTML.indexOf(">",directEmailLocClientTagStart);
		var baseDirectEmailLocClientHTMLStart = directEmailStartHTML.substr(0,directEmailLocClientTagStart);
		var baseDirectEmailLocClientHTMLEnd = directEmailStartHTML.substr((directEmailLocClientTagEnd+1));
		directEmailStartHTML = baseDirectEmailLocClientHTMLStart + coreClient + baseDirectEmailLocClientHTMLEnd;
	}
	if ((whatStoreUp+resultsNum) > storeDisplayArray.length) {
		var whatStoreEnd = storeDisplayArray.length;
	}
	else {
		var whatStoreEnd = whatStoreUp+resultsNum;
	}
	if(gLog==1){console.log("panel2CompileEmail - Email Stores "+whatStoreUp+"-"+whatStoreEnd);}
	var directEmailStepHTML = "";
	var storeTrackIncr = 0;
	var storeTrackJSON = "";
	var apiSTR = {};
	apiSTR['SCT'] = 0;
	apiSTR['STR'] = {};
	for (x=whatStoreUp; x<whatStoreEnd; x++) {
		if (stateNames == 1) {
			var gottaState = 0;
			for (tsa=0;tsa<tblStateArray.length;tsa++) {
				if (tblStateArray[tsa][0] == storeDisplayArray[x][4]) {
					var stateOut = tblStateArray[tsa][1];
					gottaState = 1;
					break;
				}
			}
			if (gottaState == 0) {
				var stateOut = storeDisplayArray[x][4];
			}
		}
		else {
			var stateOut = storeDisplayArray[x][4];
		}
		var directEmailStepHTMLTest = autotextIt(p2TemplateSet.panel2EmailStepDiv,"panel2EmailStep");
		var directEmailLocNameTagStart = directEmailStepHTMLTest.indexOf("<!--LOCNAME");
		if (directEmailLocNameTagStart != -1) {
			var directEmailLocNameTagEnd = directEmailStepHTMLTest.indexOf(">",directEmailLocNameTagStart);
			var baseDirectEmailLocNameHTMLStart = directEmailStepHTMLTest.substr(0,directEmailLocNameTagStart);
			var baseDirectEmailLocNameHTMLEnd = directEmailStepHTMLTest.substr((directEmailLocNameTagEnd+1));
			directEmailStepHTMLTest = baseDirectEmailLocNameHTMLStart + storeDisplayArray[x][0] + baseDirectEmailLocNameHTMLEnd;
		}
		var directEmailLocStreetTagStart = directEmailStepHTMLTest.indexOf("<!--LOCSTREET");
		if (directEmailLocStreetTagStart != -1) {
			var directEmailLocStreetTagEnd = directEmailStepHTMLTest.indexOf(">",directEmailLocStreetTagStart);
			var baseDirectEmailLocStreetHTMLStart = directEmailStepHTMLTest.substr(0,directEmailLocStreetTagStart);
			var baseDirectEmailLocStreetHTMLEnd = directEmailStepHTMLTest.substr((directEmailLocStreetTagEnd+1));
			directEmailStepHTMLTest = baseDirectEmailLocStreetHTMLStart + storeDisplayArray[x][1] + baseDirectEmailLocStreetHTMLEnd;
		}
		var directEmailLocCityTagStart = directEmailStepHTMLTest.indexOf("<!--LOCCITY");
		if (directEmailLocCityTagStart != -1) {
			var directEmailLocCityTagEnd = directEmailStepHTMLTest.indexOf(">",directEmailLocCityTagStart);
			var baseDirectEmailLocCityHTMLStart = directEmailStepHTMLTest.substr(0,directEmailLocCityTagStart);
			var baseDirectEmailLocCityHTMLEnd = directEmailStepHTMLTest.substr((directEmailLocCityTagEnd+1));
			directEmailStepHTMLTest = baseDirectEmailLocCityHTMLStart + storeDisplayArray[x][3] + baseDirectEmailLocCityHTMLEnd;
		}
		var directEmailLocStateTagStart = directEmailStepHTMLTest.indexOf("<!--LOCSTATE");
		if (directEmailLocStateTagStart != -1) {
			var directEmailLocStateTagEnd = directEmailStepHTMLTest.indexOf(">",directEmailLocStateTagStart);
			var baseDirectEmailLocStateHTMLStart = directEmailStepHTMLTest.substr(0,directEmailLocStateTagStart);
			var baseDirectEmailLocStateHTMLEnd = directEmailStepHTMLTest.substr((directEmailLocStateTagEnd+1));
			directEmailStepHTMLTest = baseDirectEmailLocStateHTMLStart + stateOut + baseDirectEmailLocStateHTMLEnd;
		}
		var directEmailLocZipTagStart = directEmailStepHTMLTest.indexOf("<!--LOCZIP");
		if (directEmailLocZipTagStart != -1) {
			var directEmailLocZipTagEnd = directEmailStepHTMLTest.indexOf(">",directEmailLocZipTagStart);
			var baseDirectEmailLocZipHTMLStart = directEmailStepHTMLTest.substr(0,directEmailLocZipTagStart);
			var baseDirectEmailLocZipHTMLEnd = directEmailStepHTMLTest.substr((directEmailLocZipTagEnd+1));
			directEmailStepHTMLTest = baseDirectEmailLocZipHTMLStart + storeDisplayArray[x][5] + baseDirectEmailLocZipHTMLEnd;
		}
		var directEmailLocCountryTagStart = directEmailStepHTMLTest.indexOf("<!--LOCCOUNTRY");
		if (directEmailLocCountryTagStart != -1) {
			var directEmailLocCountryTagEnd = directEmailStepHTMLTest.indexOf(">",directEmailLocCountryTagStart);
			var baseDirectEmailLocCountryHTMLStart = directEmailStepHTMLTest.substr(0,directEmailLocCountryTagStart);
			var baseDirectEmailLocCountryHTMLEnd = directEmailStepHTMLTest.substr((directEmailLocCountryTagEnd+1));
			directEmailStepHTMLTest = baseDirectEmailLocCountryHTMLStart + storeDisplayArray[x][27] + baseDirectEmailLocCountryHTMLEnd;
		}
		var directEmailPhoneTagStart = directEmailStepHTMLTest.indexOf("<!--LOCPHONE");
		if (directEmailPhoneTagStart != -1 && storeDisplayArray[x][15]!="") {
			var directEmailPhoneTagEnd = directEmailStepHTMLTest.indexOf(">",directEmailPhoneTagStart);
			var directEmailPhoneTagStrip = directEmailStepHTMLTest.substring(directEmailPhoneTagStart,(directEmailPhoneTagEnd+1));
			var directEmailPhoneHTMLStart = directEmailStepHTMLTest.substr(0,directEmailPhoneTagStart);
			var directEmailPhoneHTMLEnd = directEmailStepHTMLTest.substr((directEmailPhoneTagEnd+1));
			var directEmailPhoneRender = "";
			var directEmailPhoneValueStart = directEmailPhoneTagStrip.indexOf(" FORMAT=");
			var directEmailPhoneValueEnd = directEmailPhoneTagStrip.indexOf("]");
			if (directEmailPhoneValueStart != -1) {
				var directEmailPhoneValueVarTest = directEmailPhoneTagStrip.substring((directEmailPhoneValueStart+9),(directEmailPhoneValueEnd));
				var phoneSplit=storeDisplayArray[x][15].split("");
				for (p=0;p<phoneSplit.length;p++) {
					var thisHash = directEmailPhoneValueVarTest.indexOf("#");
					if (thisHash != -1) {
						directEmailPhoneValueVarTest = directEmailPhoneValueVarTest.substring(0,(thisHash))+phoneSplit[p]+directEmailPhoneValueVarTest.substring((thisHash+1));
					}
				}
				var directEmailPhoneValueVar = directEmailPhoneValueVarTest;
			}
			else {
				var directEmailPhoneValueVar = storeDisplayArray[x][15];
			}
			var directEmailPhoneRawStart = directEmailPhoneTagStrip.indexOf(" RAW");
			if (directEmailPhoneRawStart != -1) {
				var directEmailPhoneValueVar = storeDisplayArray[x][26];
			}
			directEmailStepHTMLTest = directEmailPhoneHTMLStart + directEmailPhoneValueVar + directEmailPhoneHTMLEnd;
		}
		var directEmailStartDistanceTagStart = directEmailStepHTMLTest.indexOf("<!--LOCDISTANCE");
		if (directEmailStartDistanceTagStart != -1) {
			var directEmailStartDistanceTagEnd = directEmailStepHTMLTest.indexOf(">",directEmailStartDistanceTagStart);
			var directEmailStartDistanceTagStrip = directEmailStepHTMLTest.substring(directEmailStartDistanceTagStart,(directEmailStartDistanceTagEnd+1));
			var baseDirectEmailStartDistanceHTMLStart = directEmailStepHTMLTest.substr(0,directEmailStartDistanceTagStart);
			var baseDirectEmailStartDistanceHTMLEnd = directEmailStepHTMLTest.substr((directEmailStartDistanceTagEnd+1));
			var directEmailStartDistanceKMTest = directEmailStepHTMLTest.indexOf(" KM");
			if (directEmailStartDistanceKMTest != -1 || forceKM == 1) {
				var baseMiles = parseFloat(storeDisplayArray[x][8]);
				var finalMiles = Math.round((baseMiles*1.60934)*100)/100;
				var finalFormat = "km";
			}
			else {
				var finalMiles = storeDisplayArray[x][8];
				var finalFormat = "miles";
			}
			var directEmailStartDistanceBlankTest = directEmailStepHTMLTest.indexOf(" BLANK");
			if (directEmailStartDistanceBlankTest != -1) {
				var finalFormat = "";
			}
			directEmailStepHTMLTest = baseDirectEmailStartDistanceHTMLStart + finalMiles + " " + finalFormat + baseDirectEmailStartDistanceHTMLEnd;
		}
		directEmailStepHTML += directEmailStepHTMLTest;
		apiSTR['STR'][storeTrackIncr] = {};
		apiSTR['STR'][storeTrackIncr]['ORD'] = storeTrackIncr+1;
		apiSTR['STR'][storeTrackIncr]['FED'] = storeDisplayArray[x][16];
		apiSTR['STR'][storeTrackIncr]['LAT'] = storeDisplayArray[x][6];
		apiSTR['STR'][storeTrackIncr]['LNG'] = storeDisplayArray[x][7];
		apiSTR['STR'][storeTrackIncr]['NAM'] = storeDisplayArray[x][0];
		apiSTR['STR'][storeTrackIncr]['ADD'] = storeDisplayArray[x][1];
		apiSTR['STR'][storeTrackIncr]['ADT'] = storeDisplayArray[x][2];
		apiSTR['STR'][storeTrackIncr]['CTY'] = storeDisplayArray[x][3];
		apiSTR['STR'][storeTrackIncr]['STA'] = storeDisplayArray[x][4];
		apiSTR['STR'][storeTrackIncr]['ZIP'] = storeDisplayArray[x][5];
		apiSTR['STR'][storeTrackIncr]['CNT'] = storeDisplayArray[x][27];
		apiSTR['STR'][storeTrackIncr]['PRD'] = storeDisplayArray[x][9];
		storeTrackIncr++;
		if (storeTrackJSON != ""){storeTrackJSON += ",";}
		storeTrackJSON += storeTrackIncr + ';;' + storeDisplayArray[x][16] + ';;' + storeDisplayArray[x][6] + ';;' + storeDisplayArray[x][7] + ';;' + storeDisplayArray[x][0].replace(/"/g, '') + ';;' + storeDisplayArray[x][1].replace(/"/g, '') + ';;' + storeDisplayArray[x][2].replace(/"/g, '') + ';;' + storeDisplayArray[x][3] + ';;' + storeDisplayArray[x][4] + ';;' + storeDisplayArray[x][5] + ';;' + storeDisplayArray[x][27] + ';;' + storeDisplayArray[x][9];
	}
	apiSTR['STC'] = storeTrackIncr;
	var directEmailStopHTML = autotextIt(p2TemplateSet.panel2EmailStopDiv,"panel2EmailStop");
	if (isIE) {
		directEmailStartHTML = directEmailStartHTML.replace(/\/\*/g,"");
		directEmailStepHTML = directEmailStepHTML.replace(/\/\*/g,"");
		directEmailStopHTML = directEmailStopHTML.replace(/\/\*/g,"");
	}
	if(gLog==1){console.log("panel2CompileEmail - panel2Send");}
	document.getElementById('panel2EmailDiv').innerHTML = directEmailStartHTML + directEmailStepHTML + directEmailStopHTML;
	frameVar = document.getElementById("iFrameForms");
	frameVar.contentWindow.location.replace(controlURL + "panel2Send.php");
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
				UP1: "PANEL2",
				UC1: "EMAIL",
				UCS1: "LIST",
				US1: "SUCCESS",
				USRC1: version,
				CLIENT: coreClient,
				ITER: iteration,
				DEVICE: deviceType,
				REF: referer,
				SESSID: daSESSID,
				LOCATION: '{"compiled_location":"' + document.getElementById('addressCompile').value.replace(/"/g, '') + '","latitude":"' + parseFloat(document.getElementById('LA').value).toFixed(5) + '","longitude":"' + parseFloat(document.getElementById('LO').value).toFixed(5) + '","city":"' + document.getElementById('revCodeCity').value.replace(/"/g, '') + '","state":"' + document.getElementById('revCodeState').value + '","zip":"' + document.getElementById('revCodeZip').value + '","country":"' + document.getElementById('revCodeCountry').value + '","us_code":"' + document.getElementById('revCodeUS').value + '"}',
				STORE: storeTrackJSON,
				STORECOUNT: storeTrackIncr,
				PLIST: compProdVal,
				PSET: prodSetVal,
				TRACK: "9",
				DUTV: dutv
				}, function(data){
					if(gLog==1){console.log("panel2CompileEmail - tracktest: " , JSON.parse(data));}
				}
			);
		},1000);
	}
	else if (trackVal == 2 && allOnOne == 0) {
		setTimeout(function(){
			var sendObj = setTrackObj();
			sendObj['TRK'] = 9;
			sendObj['RQF'] = "panel2CompileEmail";
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
			sendObj['STC'] = apiSTR.STC;
			for (dlcT=0; dlcT<apiSTR.STC; dlcT++) {
				sendObj['STR'][dlcT] = {};
				sendObj['STR'][dlcT]['ORD'] = apiSTR.STR[dlcT].ORD;
				sendObj['STR'][dlcT]['FED'] = apiSTR.STR[dlcT].FED;
				sendObj['STR'][dlcT]['LAT'] = apiSTR.STR[dlcT].LAT;
				sendObj['STR'][dlcT]['LNG'] = apiSTR.STR[dlcT].LNG;
				sendObj['STR'][dlcT]['NAM'] = apiSTR.STR[dlcT].NAM;
				sendObj['STR'][dlcT]['ADD'] = apiSTR.STR[dlcT].ADD;
				sendObj['STR'][dlcT]['ADT'] = apiSTR.STR[dlcT].ADT;
				sendObj['STR'][dlcT]['CTY'] = apiSTR.STR[dlcT].CTY;
				sendObj['STR'][dlcT]['STA'] = apiSTR.STR[dlcT].STA;
				sendObj['STR'][dlcT]['ZIP'] = apiSTR.STR[dlcT].ZIP;
				sendObj['STR'][dlcT]['CNT'] = apiSTR.STR[dlcT].CNT;
				sendObj['STR'][dlcT]['PRD'] = apiSTR.STR[dlcT].PRD;
			}
			sendTrackObj(sendObj);
		},300);
	}
}
function panel2CompileMultiMap() {
	if(gLog==1){console.log("panel2CompileMultiMap");}
	mapzoomArr.length=0;
	if (locServe == 0) {
		panel2Geocoder = new google.maps.Geocoder();
		panel2InfoBubble = new InfoBubble({
			minWidth: infoMinWidth,
			minHeight: infoMinHeight,
			shadowStyle: infoShadowStyle,
			padding: infoPadding,
			backgroundColor: infoBackgroundColor,
			borderRadius: infoBorderRadius,
			borderWidth: infoBorderWidth,
			borderColor: infoBorderColor,
			disableAutoPan: infoDisableAutoPan,
			hideCloseButton: infoHideCloseButton,
			arrowStyle: infoArrowStyle
		});
		panel2DeleteOverlays();
	}
	panel2MarkerPrep = [];
	panel2MarkersArray = [];
	var whatPinNow = 0;
	if ((whatStoreUp+resultsNum) > storeDisplayArray.length) {
		var whatStoreEnd = storeDisplayArray.length;
	}
	else {
		var whatStoreEnd = whatStoreUp+resultsNum;
	}
	for (x=0; x<storeDisplayArray.length; x++) {
		if (x>=whatStoreUp && x<whatStoreEnd) {
			panel2PinIncr++;
		}
		if (stateNames == 1) {
			var gottaState = 0;
			for (tsa=0;tsa<tblStateArray.length;tsa++) {
				if (tblStateArray[tsa][0] == storeDisplayArray[x][4]) {
					var stateOut = tblStateArray[tsa][1];
					gottaState = 1;
					break;
				}
			}
			if (gottaState == 0) {
				var stateOut = storeDisplayArray[x][4];
			}
		}
		else {
			var stateOut = storeDisplayArray[x][4];
		}
		var multiMapHTMLTest = autotextIt(p2TemplateSet.panel2InfoWindowDiv,"panel2InfoWindow");
		var storeTitle = storeDisplayArray[x][0];
		var storeLat = storeDisplayArray[x][6];
		var storeLon = storeDisplayArray[x][7];
		var storeChain = storeDisplayArray[x][12];
		var storeProdCountArray = storeDisplayArray[x][9].split(",");
		var multiMapCountTempNum = storeProdCountArray.length;
		var multiMapCartCountTempNum = storeDisplayArray[x][30];
		var foundPromo = -1;
		if (panel2PMapPinType == 1 && foundPromo != -1) {
			if (pinIncr == 0) {
				var iconLetter = pinSource + "pins/" + promoArray[foundPromo][10] + "_" + panel0Alphabet[whatPinNow] + "." + pinSuffix;
				var iconLetter3 = pinSource + "pins/" + promoArray[foundPromo][10] + "_" + panel0Alphabet[x] + "." + pinSuffix;
			}
			else {
				var iconLetter = pinSource + "pins/" + promoArray[foundPromo][10] + "_" + panel2PinIncr + "." + pinSuffix;
				var iconLetter3 = pinSource + "pins/" + promoArray[foundPromo][10] + "_" + (x) + "." + pinSuffix;
			}
		}
		else if (panel2MapPinType == 1) {
			var daPinNum = storeDisplayArray[x][14];
			for (mp=0;mp<storeCatArray.length;mp++) {
				if (storeCatArray[mp][0] == daPinNum) {
					if (pinIncr == 0) {
						var iconLetter = pinSource + "pins/" + storeCatArray[mp][5] + "_" + panel0Alphabet[whatPinNow] + "." + pinSuffix;
						var iconLetter3 = pinSource + "pins/" + storeCatArray[mp][5] + "_" + panel0Alphabet[x] + "." + pinSuffix;
					}
					else {
						var iconLetter = pinSource + "pins/" + storeCatArray[mp][5] + "_" + panel2PinIncr + "." + pinSuffix;
						var iconLetter3 = pinSource + "pins/" + storeCatArray[mp][5] + "_" + (x) + "." + pinSuffix;
					}
					break;
				}
			}
		}
		else {
			if (pinIncr == 0) {
				var iconLetter = pinSource + "pins/" + panel2PinChoice + "_" + panel0Alphabet[whatPinNow] + "." + pinSuffix;
				var iconLetter3 = pinSource + "pins/" + panel2PinChoice + "_" + panel0Alphabet[x] + "." + pinSuffix;
			}
			else {
				var iconLetter = pinSource + "pins/" + panel2PinChoice + "_" + panel2PinIncr + "." + pinSuffix;
				var iconLetter3 = pinSource + "pins/" + panel2PinChoice + "_" + (x) + "." + pinSuffix;
			}
		}
		var couponTagStart = multiMapHTMLTest.indexOf("<!--COUPONS");
		if (couponTagStart != -1 && storeDisplayArray[x][33] != "" && cpAPI != 0) {
			var couponTagEnd = multiMapHTMLTest.indexOf(">",couponTagStart);
			var couponTagStrip = multiMapHTMLTest.substring(couponTagStart,(couponTagEnd+1));
			var couponHTMLStart = multiMapHTMLTest.substr(0,couponTagStart);
			var couponHTMLEnd = multiMapHTMLTest.substr((couponTagEnd+1));
			var iwCouponHTML = "";
			if (storeDisplayArray[x][33].coupons) {
				var coupIDIncr = 0;
				iwCouponHTML = autotextIt(p0TemplateSet.couponInfoWindowHeadDiv,"couponInfoWindowHead");
				var coupStoreNameTagStart = iwCouponHTML.indexOf("<!--STORENAME");
				if (coupStoreNameTagStart != -1) {
					var coupStoreNameTagEnd = iwCouponHTML.indexOf(">",coupStoreNameTagStart);
					var coupStoreNameHTMLStart = iwCouponHTML.substr(0,coupStoreNameTagStart);
					var coupStoreNameHTMLEnd = iwCouponHTML.substr((coupStoreNameTagEnd+1));
					var coupStoreNameStrip = iwCouponHTML.substring(coupStoreNameHTMLStart,(coupStoreNameHTMLEnd+1));
					iwCouponHTML = coupStoreNameHTMLStart + "<span class='p2_ll_coupon_title'>" + storeDisplayArray[x][0] + "<\/span>" + coupStoreNameHTMLEnd;
				}
				for (coup in storeDisplayArray[x][33].coupons) {
					var iwCouponHTMLTest = autotextIt(p0TemplateSet.couponInfoWindowDiv,"couponInfoWindow");
					var coupTitleTagStart = iwCouponHTMLTest.indexOf("<!--TITLE");
					if (coupTitleTagStart != -1) {
						var coupTitleTagEnd = iwCouponHTMLTest.indexOf(">",coupTitleTagStart);
						var coupTitleHTMLStart = iwCouponHTMLTest.substr(0,coupTitleTagStart);
						var coupTitleHTMLEnd = iwCouponHTMLTest.substr((coupTitleTagEnd+1));
						var coupTitleStrip = iwCouponHTMLTest.substring(coupTitleHTMLStart,(coupTitleHTMLEnd+1));
						iwCouponHTMLTest = coupTitleHTMLStart + "<span class='p2_ll_coupon_title'>" + storeDisplayArray[x][33].coupons[coup].title + "<\/span>" + coupTitleHTMLEnd;
					}
					var coupDescTagStart = iwCouponHTMLTest.indexOf("<!--DESC");
					if (coupDescTagStart != -1) {
						var coupDescTagEnd = iwCouponHTMLTest.indexOf(">",coupDescTagStart);
						var coupDescHTMLStart = iwCouponHTMLTest.substr(0,coupDescTagStart);
						var coupDescHTMLEnd = iwCouponHTMLTest.substr((coupDescTagEnd+1));
						var coupDescStrip = iwCouponHTMLTest.substring(coupDescHTMLStart,(coupDescHTMLEnd+1));
						iwCouponHTMLTest = coupDescHTMLStart + "<span class='p2_ll_coupon_description'>" + storeDisplayArray[x][33].coupons[coup].description + "<\/span>" + coupDescHTMLEnd;
					}
					var coupImageTagStart = iwCouponHTMLTest.indexOf("<!--IMAGE");
					if (coupImageTagStart != -1 && storeDisplayArray[x][33].coupons[coup].campaignImageUrl != null) {
						var coupImageTagEnd = iwCouponHTMLTest.indexOf(">",coupImageTagStart);
						var coupImageHTMLStart = iwCouponHTMLTest.substr(0,coupImageTagStart);
						var coupImageHTMLEnd = iwCouponHTMLTest.substr((coupImageTagEnd+1));
						var coupImageStrip = iwCouponHTMLTest.substring(coupImageHTMLStart,(coupImageHTMLEnd+1));
						iwCouponHTMLTest = coupImageHTMLStart + "<img title=\"" + storeDisplayArray[x][0] + "\" alt=\"" + storeDisplayArray[x][0] + "\" class='p2_ll_coupon_img' src='" + storeDisplayArray[x][33].coupons[coup].campaignImageUrl + "'>" + coupImageHTMLEnd;
					}
					if (couponBypass == 1) {
						var iwCouponLink = "couponBuy("+x+",\"" + storeDisplayArray[x][33].coupons[coup].id + "\",\"" + storeDisplayArray[x][33].coupons[coup].actionUrl + "\");"
					}
					else {
						var iwCouponLink = "couponModal(" + x + ",\"" + storeDisplayArray[x][33].coupons[coup].id + "\");";
					}
					iwCouponHTML += "<div id='getCouponIW"+coupIDIncr+"' class='get_coupon_iw get_coupon_iw_"+coupIDIncr+" get_coupon_iw_"+coupIDIncr+"_off' onclick='" + iwCouponLink + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + iwCouponLink + "}'";
					if (hoverState==1) {
						iwCouponHTML += " onmouseover='genericButtonOver(\"get_coupon_iw_" + coupIDIncr + "\",\"get_coupon_iw_" + coupIDIncr + "\");' onfocus='genericButtonOver(\"get_coupon_iw_" + coupIDIncr + "\",\"get_coupon_iw_" + coupIDIncr + "\");' onmouseout='genericButtonOut(\"get_coupon_iw_" + coupIDIncr + "\",\"get_coupon_iw_" + coupIDIncr + "\");' onblur='genericButtonOut(\"get_coupon_iw_" + coupIDIncr + "\",\"get_coupon_iw_" + coupIDIncr + "\");'";
					}
					iwCouponHTML += " tabindex='0' title=\"" + storeDisplayArray[x][33].coupons[coup].title + "\">" + iwCouponHTMLTest + "<\/div>";
					coupIDIncr++;
				}
				iwCouponHTML += autotextIt(p0TemplateSet.couponInfoWindowFootDiv,"couponInfoWindowFoot");
			}
			multiMapHTMLTest = couponHTMLStart + iwCouponHTML + couponHTMLEnd;
		}
		var googleButtonTagStart = multiMapHTMLTest.indexOf("<!--GOOGLEBUTTON");
		if (googleButtonTagStart != -1) {
			var googleButtonTagEnd = multiMapHTMLTest.indexOf(">",googleButtonTagStart);
			var googleButtonTagStrip = multiMapHTMLTest.substring(googleButtonTagStart,(googleButtonTagEnd+1));
			var googleButtonHTMLStart = multiMapHTMLTest.substr(0,googleButtonTagStart);
			var googleButtonHTMLEnd = multiMapHTMLTest.substr((googleButtonTagEnd+1));
			var googleButtonRender = "";
			var googleButtonValueStart = googleButtonTagStrip.indexOf(" VALUE=");
			var googleButtonValueEnd = googleButtonTagStrip.indexOf("]",googleButtonValueStart);
			if (googleButtonValueStart != -1) {
				googleButtonValueVar = googleButtonTagStrip.substring((googleButtonValueStart+8),(googleButtonValueEnd));
			}
			else {
				googleButtonValueVar = "SEND";
			}
			var googleButtonItalicStart = googleButtonTagStrip.indexOf(" FNTAW=");
			var googleButtonItalicEnd = googleButtonTagStrip.indexOf("]",googleButtonItalicStart);
			if (googleButtonItalicStart != -1) {
				googleButtonItalicVar = "<i class='fa " + googleButtonTagStrip.substring((googleButtonItalicStart+8),(googleButtonItalicEnd)) + "'><\/i>";
			}
			else {
				googleButtonItalicVar = "";
			}
			googleButtonRender += "<div id='panel2GoogleButtonInfo' class='panel_2_google_button_info panel_2_google_button_info_off'";
			if (hoverState==1) {
				googleButtonRender += " onmouseover='panel2ButtonHover(\"panel2GoogleButtonInfo\",\"panel_2_google_button_info\",1);' onfocus='panel2ButtonHover(\"panel2GoogleButtonInfo\",\"panel_2_google_button_info\",1);' onmouseout='panel2ButtonHover(\"panel2GoogleButtonInfo\",\"panel_2_google_button_info\",0);' onblur='panel2ButtonHover(\"panel2GoogleButtonInfo\",\"panel_2_google_button_info\",0);'";
			}
			googleButtonRender += " onclick='panel2GoogleLink(\"" + storeDisplayArray[x][6] + "\",\"" + storeDisplayArray[x][7] + "\","+x+");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2GoogleLink(\"" + storeDisplayArray[x][6] + "\",\"" + storeDisplayArray[x][7] + "\","+x+");}' tabindex='0' title=\"" + googleButtonValueVar + "\">" + googleButtonItalicVar + googleButtonValueVar + "<\/div>";
			multiMapHTMLTest = googleButtonHTMLStart + googleButtonRender + googleButtonHTMLEnd;
		}
		var multiMapChainNameTagStart = multiMapHTMLTest.indexOf("<!--LOCCHAINNAME");
		if (multiMapChainNameTagStart != -1) {
			if (storeDisplayArray[x][17] != "") {
				var multiMapChainNameVal = storeDisplayArray[x][0];
			}
			else {
				var multiMapChainNameVal = storeDisplayArray[x][0];
			}
			var multiMapChainNameTagEnd = multiMapHTMLTest.indexOf(">",multiMapChainNameTagStart);
			var multiMapChainNameTagStrip = multiMapHTMLTest.substring(multiMapChainNameTagStart,(multiMapChainNameTagEnd+1));
			var baseMultiMapChainNameHTMLStart = multiMapHTMLTest.substr(0,multiMapChainNameTagStart);
			var baseMultiMapChainNameHTMLEnd = multiMapHTMLTest.substr((multiMapChainNameTagEnd+1));
			var multiMapChainNameTagLinkTest = multiMapChainNameTagStrip.indexOf(" LINK");
			var multiMapChainNameTagLink = "";
			if (multiMapChainNameTagLinkTest != -1) {
				multiMapChainNameTagLink += " style='cursor:pointer;' onclick='panel2GetLocation(" + x + "," + storeDisplayArray[x][6] + "," + storeDisplayArray[x][7] + "," + storeDisplayArray[x][16] + ",\"" + storeDisplayArray[x][13] + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2GetLocation(" + x + "," + storeDisplayArray[x][6] + "," + storeDisplayArray[x][7] + "," + storeDisplayArray[x][16] + ",\"" + storeDisplayArray[x][13] + "\");}'";
				if (hoverState==1) {
					multiMapChainNameTagLink += " onmouseover='panel2InfoWindowNameMouseOver(\"panel2InfoWindowChainName" + storeDisplayArray[x][13] + "\", \"panel_2_info_window_chain_name\",0);' onfocus='panel2InfoWindowNameMouseOver(\"panel2InfoWindowChainName" + storeDisplayArray[x][13] + "\", \"panel_2_info_window_chain_name\",0);' onmouseout='panel2InfoWindowNameMouseOut(\"panel2InfoWindowChainName" + storeDisplayArray[x][13] + "\", \"panel_2_info_window_chain_name\",0);' onblur='panel2InfoWindowNameMouseOut(\"panel2InfoWindowChainName" + storeDisplayArray[x][13] + "\", \"panel_2_info_window_chain_name\",0);'";
				}
			}
			multiMapHTMLTest = baseMultiMapChainNameHTMLStart + "<div id='panel2InfoWindowChainName" + storeDisplayArray[x][13] + "' class='panel_2_info_window_chain_name panel_2_info_window_chain_name_off'" + multiMapChainNameTagLink + " tabindex='0' title=\"" + multiMapChainNameVal + "\">" + multiMapChainNameVal + "<\/div>" + baseMultiMapChainNameHTMLEnd;
		}
		var multiMapChainBigImgTagStart = multiMapHTMLTest.indexOf("<!--LOCCHAINBIGIMG");
		if (multiMapChainBigImgTagStart != -1) {
			var multiMapChainBigImgTagEnd = multiMapHTMLTest.indexOf(">",multiMapChainBigImgTagStart);
			var multiMapChainBigImgTagStrip = multiMapHTMLTest.substring(multiMapChainBigImgTagStart,(multiMapChainBigImgTagEnd+1));
			var baseMultiMapChainBigImgHTMLStart = multiMapHTMLTest.substr(0,multiMapChainBigImgTagStart);
			var baseMultiMapChainBigImgHTMLEnd = multiMapHTMLTest.substr((multiMapChainBigImgTagEnd+1));
			if (storeDisplayArray[x][18] != "") {
				multiMapHTMLTest = baseMultiMapChainBigImgHTMLStart + "<img title=\"" + storeDisplayArray[x][0] + "\" alt=\"" + storeDisplayArray[x][0] + "\" id='panel2InfoWindowChainBigImg" + storeDisplayArray[x][13] + "' class='panel_2_info_window_chain_big_img' src='//" + endpointCDN + "/cms/images/" + storeDisplayArray[x][18] + "'>" + baseMultiMapChainBigImgHTMLEnd;
			}
		}
		var multiMapChainSmImgTagStart = multiMapHTMLTest.indexOf("<!--LOCCHAINSMIMG");
		if (multiMapChainSmImgTagStart != -1) {
			var multiMapChainSmImgTagEnd = multiMapHTMLTest.indexOf(">",multiMapChainSmImgTagStart);
			var multiMapChainSmImgTagStrip = multiMapHTMLTest.substring(multiMapChainSmImgTagStart,(multiMapChainSmImgTagEnd+1));
			var baseMultiMapChainSmImgHTMLStart = multiMapHTMLTest.substr(0,multiMapChainSmImgTagStart);
			var baseMultiMapChainSmImgHTMLEnd = multiMapHTMLTest.substr((multiMapChainSmImgTagEnd+1));
			if (storeDisplayArray[x][19] != "") {
				multiMapHTMLTest = baseMultiMapChainSmImgHTMLStart + "<img title=\"" + storeDisplayArray[x][0] + "\" alt=\"" + storeDisplayArray[x][0] + "\" id='panel2InfoWindowChainSmImg" + storeDisplayArray[x][13] + "' class='panel_2_info_window_chain_sm_img' src='//" + endpointCDN + "/cms/images/" + storeDisplayArray[x][19] + "'>" + baseMultiMapChainSmImgHTMLEnd;
			}
		}
		var multiMapNameTagStart = multiMapHTMLTest.indexOf("<!--LOCNAME");
		if (multiMapNameTagStart != -1) {
			var multiMapNameTagEnd = multiMapHTMLTest.indexOf(">",multiMapNameTagStart);
			var multiMapNameTagStrip = multiMapHTMLTest.substring(multiMapNameTagStart,(multiMapNameTagEnd+1));
			var baseMultiMapNameHTMLStart = multiMapHTMLTest.substr(0,multiMapNameTagStart);
			var baseMultiMapNameHTMLEnd = multiMapHTMLTest.substr((multiMapNameTagEnd+1));
			var multiMapNameTagLinkTest = multiMapNameTagStrip.indexOf(" LINK");
			var multiMapNameTagLink = "";
			if (multiMapNameTagLinkTest != -1) {
				multiMapNameTagLink += " style='cursor:pointer;' onclick='panel2GetLocation(" + x + "," + storeDisplayArray[x][6] + "," + storeDisplayArray[x][7] + "," + storeDisplayArray[x][16] + ",\"" + storeDisplayArray[x][13] + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2GetLocation(" + x + "," + storeDisplayArray[x][6] + "," + storeDisplayArray[x][7] + "," + storeDisplayArray[x][16] + ",\"" + storeDisplayArray[x][13] + "\");}'";
				if (hoverState==1) {
					multiMapNameTagLink += " onmouseover='panel2InfoWindowNameMouseOver(\"panel2InfoWindowName" + storeDisplayArray[x][13] + "\", \"panel_2_info_window_name\",0);' onfocus='panel2InfoWindowNameMouseOver(\"panel2InfoWindowName" + storeDisplayArray[x][13] + "\", \"panel_2_info_window_name\",0);' onmouseout='panel2InfoWindowNameMouseOut(\"panel2InfoWindowName" + storeDisplayArray[x][13] + "\", \"panel_2_info_window_name\",0);' onblur='panel2InfoWindowNameMouseOut(\"panel2InfoWindowName" + storeDisplayArray[x][13] + "\", \"panel_2_info_window_name\",0);'";
				}
			}
			multiMapHTMLTest = baseMultiMapNameHTMLStart + "<div id='panel2InfoWindowName" + storeDisplayArray[x][13] + "' class='panel_2_info_window_name panel_2_info_window_name_off'" + multiMapNameTagLink + " tabindex='0' title=\"" + storeDisplayArray[x][0] + "\">" + storeDisplayArray[x][0] + "<\/div>" + baseMultiMapNameHTMLEnd;
		}
		var multiMapAddressTagStart = multiMapHTMLTest.indexOf("<!--LOCADDRESS");
		if (multiMapAddressTagStart != -1) {
			var multiMapAddressTagEnd = multiMapHTMLTest.indexOf(">",multiMapAddressTagStart);
			var multiMapAddressTagStrip = multiMapHTMLTest.substring(multiMapAddressTagStart,(multiMapAddressTagEnd+1));
			var baseMultiMapAddressHTMLStart = multiMapHTMLTest.substr(0,multiMapAddressTagStart);
			var baseMultiMapAddressHTMLEnd = multiMapHTMLTest.substr((multiMapAddressTagEnd+1));
			multiMapHTMLTest = baseMultiMapAddressHTMLStart + "<div id='panel2InfoWindowAddress" + storeDisplayArray[x][13] + "' class='panel_2_info_window_address'>" + storeDisplayArray[x][1] + ", " + storeDisplayArray[x][3] + ", " + storeDisplayArray[x][4] + " " + storeDisplayArray[x][5] + "<\/div>" + baseMultiMapAddressHTMLEnd;
		}
		var multiMapStreetTagStart = multiMapHTMLTest.indexOf("<!--LOCSTREET");
		if (multiMapStreetTagStart != -1) {
			var multiMapStreetTagEnd = multiMapHTMLTest.indexOf(">",multiMapStreetTagStart);
			var multiMapStreetTagStrip = multiMapHTMLTest.substring(multiMapStreetTagStart,(multiMapStreetTagEnd+1));
			var baseMultiMapStreetHTMLStart = multiMapHTMLTest.substr(0,multiMapStreetTagStart);
			var baseMultiMapStreetHTMLEnd = multiMapHTMLTest.substr((multiMapStreetTagEnd+1));
			if (storeDisplayArray[x][1] != "") {
				multiMapHTMLTest = baseMultiMapStreetHTMLStart + "<div id='panel2InfoWindowStreet" + storeDisplayArray[x][13] + "' class='panel_2_info_window_street'>" + storeDisplayArray[x][1] + "<\/div>" + baseMultiMapStreetHTMLEnd;
			}
			else {
				multiMapHTMLTest = baseMultiMapStreetHTMLStart + baseMultiMapStreetHTMLEnd;
			}
		}
		var multiMapCityTagStart = multiMapHTMLTest.indexOf("<!--LOCCITY");
		if (multiMapCityTagStart != -1) {
			var multiMapCityTagEnd = multiMapHTMLTest.indexOf(">",multiMapCityTagStart);
			var multiMapCityTagStrip = multiMapHTMLTest.substring(multiMapCityTagStart,(multiMapCityTagEnd+1));
			var baseMultiMapCityHTMLStart = multiMapHTMLTest.substr(0,multiMapCityTagStart);
			var baseMultiMapCityHTMLEnd = multiMapHTMLTest.substr((multiMapCityTagEnd+1));
			if (storeDisplayArray[x][3] != "") {
				multiMapHTMLTest = baseMultiMapCityHTMLStart + "<div id='panel2InfoWindowCity" + storeDisplayArray[x][13] + "' class='panel_2_info_window_city'>" + storeDisplayArray[x][3] + "<\/div>" + baseMultiMapCityHTMLEnd;
			}
			else {
				multiMapHTMLTest = baseMultiMapCityHTMLStart + baseMultiMapCityHTMLEnd;
			}
		}
		var multiMapStateTagStart = multiMapHTMLTest.indexOf("<!--LOCSTATE");
		if (multiMapStateTagStart != -1) {
			var multiMapStateTagEnd = multiMapHTMLTest.indexOf(">",multiMapStateTagStart);
			var multiMapStateTagStrip = multiMapHTMLTest.substring(multiMapStateTagStart,(multiMapStateTagEnd+1));
			var baseMultiMapStateHTMLStart = multiMapHTMLTest.substr(0,multiMapStateTagStart);
			var baseMultiMapStateHTMLEnd = multiMapHTMLTest.substr((multiMapStateTagEnd+1));
			if (stateOut != "") {
				multiMapHTMLTest = baseMultiMapStateHTMLStart + "<div id='panel2InfoWindowState" + storeDisplayArray[x][13] + "' class='panel_2_info_window_state'>" + stateOut + "<\/div>" + baseMultiMapStateHTMLEnd;
			}
			else {
				multiMapHTMLTest = baseMultiMapStateHTMLStart + baseMultiMapStateHTMLEnd;
			}
		}
		var multiMapZipTagStart = multiMapHTMLTest.indexOf("<!--LOCZIP");
		if (multiMapZipTagStart != -1) {
			var multiMapZipTagEnd = multiMapHTMLTest.indexOf(">",multiMapZipTagStart);
			var multiMapZipTagStrip = multiMapHTMLTest.substring(multiMapZipTagStart,(multiMapZipTagEnd+1));
			var baseMultiMapZipHTMLStart = multiMapHTMLTest.substr(0,multiMapZipTagStart);
			var baseMultiMapZipHTMLEnd = multiMapHTMLTest.substr((multiMapZipTagEnd+1));
			if (storeDisplayArray[x][5] != "") {
				multiMapHTMLTest = baseMultiMapZipHTMLStart + "<div id='panel2InfoWindowZip" + storeDisplayArray[x][13] + "' class='panel_2_info_window_zip'>" + storeDisplayArray[x][5] + "<\/div>" + baseMultiMapZipHTMLEnd;
			}
			else {
				multiMapHTMLTest = baseMultiMapZipHTMLStart + baseMultiMapZipHTMLEnd;
			}
		}
		var multiMapCountryTagStart = multiMapHTMLTest.indexOf("<!--LOCCOUNTRY");
		if (multiMapCountryTagStart != -1) {
			var multiMapCountryTagEnd = multiMapHTMLTest.indexOf(">",multiMapCountryTagStart);
			var multiMapCountryTagStrip = multiMapHTMLTest.substring(multiMapCountryTagStart,(multiMapCountryTagEnd+1));
			var baseMultiMapCountryHTMLStart = multiMapHTMLTest.substr(0,multiMapCountryTagStart);
			var baseMultiMapCountryHTMLEnd = multiMapHTMLTest.substr((multiMapCountryTagEnd+1));
			if (storeDisplayArray[x][27] != "") {
				multiMapHTMLTest = baseMultiMapCountryHTMLStart + "<div id='panel2InfoWindowCountry" + storeDisplayArray[x][13] + "' class='panel_2_info_window_country'>" + storeDisplayArray[x][27] + "<\/div>" + baseMultiMapCountryHTMLEnd;
			}
			else {
				multiMapHTMLTest = baseMultiMapCountryHTMLStart + baseMultiMapCountryHTMLEnd;
			}
		}
		var multiMapCSZTagStart = multiMapHTMLTest.indexOf("<!--LOCCSZ");
		if (multiMapCSZTagStart != -1) {
			var multiMapCSZTagEnd = multiMapHTMLTest.indexOf(">",multiMapCSZTagStart);
			var multiMapCSZTagStrip = multiMapHTMLTest.substring(multiMapCSZTagStart,(multiMapCSZTagEnd+1));
			var baseMultiMapCSZHTMLStart = multiMapHTMLTest.substr(0,multiMapCSZTagStart);
			var baseMultiMapCSZHTMLEnd = multiMapHTMLTest.substr((multiMapCSZTagEnd+1));
			multiMapHTMLTest = baseMultiMapCSZHTMLStart + "<div id='panel2InfoWindowCSZ" + storeDisplayArray[x][13] + "' class='panel_2_info_window_csz'>" + storeDisplayArray[x][3] + ", " + stateOut + " " + storeDisplayArray[x][5] + "<\/div>" + baseMultiMapCSZHTMLEnd;
		}
		var multiMapWebTagStart = multiMapHTMLTest.indexOf("<!--LOCWEB");
		if (multiMapWebTagStart != -1 && storeDisplayArray[x][22] != "") {
			var multiMapWebTagEnd = multiMapHTMLTest.indexOf(">",multiMapWebTagStart);
			var multiMapWebTagStrip = multiMapHTMLTest.substring(multiMapWebTagStart,(multiMapWebTagEnd+1));
			var baseMultiMapWebHTMLStart = multiMapHTMLTest.substr(0,multiMapWebTagStart);
			var baseMultiMapWebHTMLEnd = multiMapHTMLTest.substr((multiMapWebTagEnd+1));
			var baseMultiMapWebValueStart = multiMapWebTagStrip.indexOf(" VALUE=");
			var baseMultiMapWebValueEnd = multiMapWebTagStrip.indexOf("]");
			if (baseMultiMapWebValueStart != -1) {
				baseMultiMapWebValueVar = multiMapWebTagStrip.substring((baseMultiMapWebValueStart+8),(baseMultiMapWebValueEnd));
			}
			else {
				baseMultiMapWebValueVar = storeDisplayArray[x][22];
			}
			multiMapHTMLTest = baseMultiMapWebHTMLStart + "<div id='panel2LocWeb" + storeDisplayArray[x][13] + "' class='panel_2_info_window_web' onclick='storeWeb("+x+");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){storeWeb("+x+");}' tabindex='0' title=\"" + baseMultiMapWebValueVar + "\">" + baseMultiMapWebValueVar + "<\/div>" + baseMultiMapWebHTMLEnd;
		}
		var multiMapPhoneTagStart = multiMapHTMLTest.indexOf("<!--LOCPHONE");
		if (multiMapPhoneTagStart != -1 && storeDisplayArray[x][15]!="") {
			var multiMapPhoneTagEnd = multiMapHTMLTest.indexOf(">",multiMapPhoneTagStart);
			var multiMapPhoneTagStrip = multiMapHTMLTest.substring(multiMapPhoneTagStart,(multiMapPhoneTagEnd+1));
			var multiMapPhoneHTMLStart = multiMapHTMLTest.substr(0,multiMapPhoneTagStart);
			var multiMapPhoneHTMLEnd = multiMapHTMLTest.substr((multiMapPhoneTagEnd+1));
			var multiMapPhoneRender = "";
			var multiMapPhoneValueStart = multiMapPhoneTagStrip.indexOf(" FORMAT=");
			var multiMapPhoneValueEnd = multiMapPhoneTagStrip.indexOf("]");
			if (multiMapPhoneValueStart != -1) {
				var multiMapPhoneValueVarTest = multiMapPhoneTagStrip.substring((multiMapPhoneValueStart+9),(multiMapPhoneValueEnd));
				var phoneSplit=storeDisplayArray[x][15].split("");
				for (p=0;p<phoneSplit.length;p++) {
					var thisHash = multiMapPhoneValueVarTest.indexOf("#");
					if (thisHash != -1) {
						multiMapPhoneValueVarTest = multiMapPhoneValueVarTest.substring(0,(thisHash))+phoneSplit[p]+multiMapPhoneValueVarTest.substring((thisHash+1));
					}
				}
				var multiMapPhoneValueVar = multiMapPhoneValueVarTest;
			}
			else {
				var multiMapPhoneValueVar = storeDisplayArray[x][15];
			}
			var multiMapPhoneRawStart = multiMapPhoneTagStrip.indexOf(" RAW");
			if (multiMapPhoneRawStart != -1) {
				var multiMapPhoneValueVar = storeDisplayArray[x][26];
			}
			multiMapPhoneRender += "<div id='panel2InfoWindowPhone" + storeDisplayArray[x][13] + "' class='panel_2_info_window_phone'>";
			if (version=='WAP' || winWidth <= globalRespWidth) {
				multiMapPhoneRender += "<a href='tel:"+multiMapPhoneValueVar+"'>";
			}
			multiMapPhoneRender += multiMapPhoneValueVar;
			if (version=='WAP' || winWidth <= globalRespWidth) {
				multiMapPhoneRender += "<\/a>";
			}
			multiMapPhoneRender += "<\/div>";
			multiMapHTMLTest = multiMapPhoneHTMLStart + multiMapPhoneRender + multiMapPhoneHTMLEnd;
		}
		var multiMapDistanceTagStart = multiMapHTMLTest.indexOf("<!--LOCDISTANCE");
		if (multiMapDistanceTagStart != -1) {
			var multiMapDistanceTagEnd = multiMapHTMLTest.indexOf(">",multiMapDistanceTagStart);
			var multiMapDistanceTagStrip = multiMapHTMLTest.substring(multiMapDistanceTagStart,(multiMapDistanceTagEnd+1));
			var baseMultiMapDistanceHTMLStart = multiMapHTMLTest.substr(0,multiMapDistanceTagStart);
			var baseMultiMapDistanceHTMLEnd = multiMapHTMLTest.substr((multiMapDistanceTagEnd+1));
			var multiMapDistanceKMTest = multiMapDistanceTagStrip.indexOf(" KM");
			if (multiMapDistanceKMTest != -1 || forceKM == 1) {
				var baseMiles = parseFloat(storeDisplayArray[x][8]);
				var finalMiles = Math.round((baseMiles*1.60934)*100)/100;
				var finalFormat = "km";
			}
			else {
				var finalMiles = storeDisplayArray[x][8];
				var finalFormat = "miles";
			}
			if (autoShell==1) {
				multiMapHTMLTest = baseMultiMapDistanceHTMLStart + "<div id='panel2InfoWindowDistance" + storeDisplayArray[x][13] + "' class='panel_2_info_window_distance'>" + finalMiles + "<div class='miles miles_temp_hide'>" + finalFormat + "<\/div><\/div>" + baseMultiMapDistanceHTMLEnd;
			}
			else {
				multiMapHTMLTest = baseMultiMapDistanceHTMLStart + "<div id='panel2InfoWindowDistance" + storeDisplayArray[x][13] + "' class='panel_2_info_window_distance'>" + finalMiles + "<div class='miles miles_temp_hide'>" + finalFormat + "<\/div><\/div>" + baseMultiMapDistanceHTMLEnd;
			}
		}
		var multiMapCountStart = multiMapHTMLTest.indexOf("<!--LOCCOUNT");
		if (multiMapCountStart != -1) {
			var multiMapCountEnd = multiMapHTMLTest.indexOf(">",multiMapCountStart);
			var multiMapCountStrip = multiMapHTMLTest.substring(multiMapCountStart,(multiMapCountEnd+1));
			var multiMapCountHTMLStart = multiMapHTMLTest.substr(0,multiMapCountStart);
			var multiMapCountHTMLEnd = multiMapHTMLTest.substr((multiMapCountEnd+1));
			var multiMapCountExcludeStart = multiMapCountStrip.indexOf(" EXCLUDE");
			if (multiMapCountExcludeStart != -1) {
				multiMapCountNum = multiMapCountTempNum - multiMapCartCountTempNum;
			}
			else {
				multiMapCountNum = multiMapCountTempNum;
			}
			multiMapHTMLTest = multiMapCountHTMLStart + multiMapCountNum + multiMapCountHTMLEnd;
		}
		var multiMapCartCountStart = multiMapHTMLTest.indexOf("<!--LOCCARTCOUNT");
		if (multiMapCartCountStart != -1) {
			var multiMapCartCountEnd = multiMapHTMLTest.indexOf(">",multiMapCartCountStart);
			var multiMapCartCountStrip = multiMapHTMLTest.substring(multiMapCartCountStart,(multiMapCartCountEnd+1));
			var multiMapCartCountHTMLStart = multiMapHTMLTest.substr(0,multiMapCartCountStart);
			var multiMapCartCountHTMLEnd = multiMapHTMLTest.substr((multiMapCartCountEnd+1));
			var multiMapCartCountValueStart = multiMapCartCountStrip.indexOf(" VALUE=");
			if (multiMapCartCountValueStart != -1) {
				var multiMapCartCountValueEnd = multiMapCartCountStrip.indexOf("]",multiMapCartCountValueStart);
				var multiMapCartCountValueVar = multiMapCartCountStrip.substring((multiMapCartCountValueStart+8),(multiMapCartCountValueEnd));
			}
			else {
				var multiMapCartCountValueVar = "";
			}
			if (multiMapCartCountTempNum != 0) {
				multiMapHTMLTest = multiMapCartCountHTMLStart + "<span class='panel_2_info_window_count_shell'><span class='panel_2_info_window_count'>" + multiMapCartCountTempNum + "<\/span>" + multiMapCartCountValueVar + "<\/span>" + multiMapCartCountHTMLEnd;
			}
			else {
				multiMapHTMLTest = multiMapCartCountHTMLStart + "<span class='panel_2_info_window_count_shell'><span class='panel_2_info_window_count'><\/span>" + multiMapCartCountValueVar + "<\/span>" + multiMapCartCountHTMLEnd;
			}
		}
		var avProdButtonTagStart = multiMapHTMLTest.indexOf("<!--BUTTONAVPROD");
		if (avProdButtonTagStart != -1) {
			var avProdButtonTagEnd = multiMapHTMLTest.indexOf(">",avProdButtonTagStart);
			var avProdButtonTagStrip = multiMapHTMLTest.substring(avProdButtonTagStart,(avProdButtonTagEnd+1));
			var avProdButtonHTMLStart = multiMapHTMLTest.substr(0,avProdButtonTagStart);
			var avProdButtonHTMLEnd = multiMapHTMLTest.substr((avProdButtonTagEnd+1));
			var avProdButtonRender = "";
			var avProdButtonValueStart = avProdButtonTagStrip.indexOf(" VALUE=");
			if (avProdButtonValueStart != -1) {
				var avProdButtonValueEnd = avProdButtonTagStrip.indexOf("]",avProdButtonValueStart);
				var avProdButtonValueVar = avProdButtonTagStrip.substring((avProdButtonValueStart+8),(avProdButtonValueEnd));
			}
			else {
				var avProdButtonValueVar = "SUBMIT";
			}
			var avProdButtonItalicStart = avProdButtonTagStrip.indexOf(" FNTAW=");
			if (avProdButtonItalicStart != -1) {
				var avProdButtonItalicEnd = avProdButtonTagStrip.indexOf("]",avProdButtonItalicStart);
				var avProdButtonItalicVar = "<i class='fa " + avProdButtonTagStrip.substring((avProdButtonItalicStart+8),(avProdButtonItalicEnd)) + "'><\/i>";
			}
			else {
				var avProdButtonItalicVar = "";
			}
			avProdButtonRender += "<div id='panel2AvProdButton' class='panel_2_avprod_button panel_2_avprod_button_off'";
			if (hoverState==1) {
				avProdButtonRender += " onmouseover='panel2ButtonHover(\"panel2AvProdButton\",\"panel_2_avprod_button\",1);' onfocus='panel2ButtonHover(\"panel2AvProdButton\",\"panel_2_avprod_button\",1);' onmouseout='panel2ButtonHover(\"panel2AvProdButton\",\"panel_2_avprod_button\",0);' onblur='panel2ButtonHover(\"panel2AvProdButton\",\"panel_2_avprod_button\",0);'";
			}
			avProdButtonRender += " onclick='panel2AvProd(" + x + "," + storeDisplayArray[x][6] + "," + storeDisplayArray[x][7] + "," + storeDisplayArray[x][16] + ",\"" + storeDisplayArray[x][13] + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2AvProd(" + x + "," + storeDisplayArray[x][6] + "," + storeDisplayArray[x][7] + "," + storeDisplayArray[x][16] + ",\"" + storeDisplayArray[x][13] + "\");}' tabindex='0' title=\"" + avProdButtonValueVar + "\">" + avProdButtonItalicVar + avProdButtonValueVar + "<\/div>";
			multiMapHTMLTest = avProdButtonHTMLStart + avProdButtonRender + avProdButtonHTMLEnd;
		}
		var getDirectButtonTagStart = multiMapHTMLTest.indexOf("<!--BUTTONGETDIRECT");
		if (getDirectButtonTagStart != -1) {
			var getDirectButtonTagEnd = multiMapHTMLTest.indexOf(">",getDirectButtonTagStart);
			var getDirectButtonTagStrip = multiMapHTMLTest.substring(getDirectButtonTagStart,(getDirectButtonTagEnd+1));
			var getDirectButtonHTMLStart = multiMapHTMLTest.substr(0,getDirectButtonTagStart);
			var getDirectButtonHTMLEnd = multiMapHTMLTest.substr((getDirectButtonTagEnd+1));
			var getDirectButtonRender = "";
			var getDirectButtonValueStart = getDirectButtonTagStrip.indexOf(" VALUE=");
			if (getDirectButtonValueStart != -1) {
				var getDirectButtonValueEnd = getDirectButtonTagStrip.indexOf("]",getDirectButtonValueStart);
				var getDirectButtonValueVar = getDirectButtonTagStrip.substring((getDirectButtonValueStart+8),(getDirectButtonValueEnd));
			}
			else {
				var getDirectButtonValueVar = "SUBMIT";
			}
			var getDirectButtonItalicStart = getDirectButtonTagStrip.indexOf(" FNTAW=");
			if (getDirectButtonItalicStart != -1) {
				var getDirectButtonItalicEnd = getDirectButtonTagStrip.indexOf("]",getDirectButtonItalicStart);
				var getDirectButtonItalicVar = "<i class='fa " + getDirectButtonTagStrip.substring((getDirectButtonItalicStart+8),(getDirectButtonItalicEnd)) + "'><\/i>";
			}
			else {
				var getDirectButtonItalicVar = "";
			}
			getDirectButtonRender += "<div id='panel2GetDirectButton' class='panel_2_getdirect_button panel_2_getdirect_button_off'";
			if (hoverState==1) {
				getDirectButtonRender += " onmouseover='panel2ButtonHover(\"panel2GetDirectButton\",\"panel_2_getdirect_button\",1);' onfocus='panel2ButtonHover(\"panel2GetDirectButton\",\"panel_2_getdirect_button\",1);' onmouseout='panel2ButtonHover(\"panel2GetDirectButton\",\"panel_2_getdirect_button\",0);' onblur='panel2ButtonHover(\"panel2GetDirectButton\",\"panel_2_getdirect_button\",0);'";
			}
			getDirectButtonRender += " onclick='panel2GetDirect(" + x + "," + storeDisplayArray[x][6] + "," + storeDisplayArray[x][7] + "," + storeDisplayArray[x][16] + ",\"" + storeDisplayArray[x][13] + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2GetDirect(" + x + "," + storeDisplayArray[x][6] + "," + storeDisplayArray[x][7] + "," + storeDisplayArray[x][16] + ",\"" + storeDisplayArray[x][13] + "\");}' tabindex='0' title=\"" + getDirectButtonValueVar + "\">" + getDirectButtonItalicVar + getDirectButtonValueVar + "<\/div>";
			multiMapHTMLTest = getDirectButtonHTMLStart + getDirectButtonRender + getDirectButtonHTMLEnd;
		}
		var goEmailButtonTagStart = multiMapHTMLTest.indexOf("<!--BUTTONGOEMAIL");
		if (goEmailButtonTagStart != -1) {
			var goEmailButtonTagEnd = multiMapHTMLTest.indexOf(">",goEmailButtonTagStart);
			var goEmailButtonTagStrip = multiMapHTMLTest.substring(goEmailButtonTagStart,(goEmailButtonTagEnd+1));
			var goEmailButtonHTMLStart = multiMapHTMLTest.substr(0,goEmailButtonTagStart);
			var goEmailButtonHTMLEnd = multiMapHTMLTest.substr((goEmailButtonTagEnd+1));
			var goEmailButtonRender = "";
			var goEmailButtonValueStart = goEmailButtonTagStrip.indexOf(" VALUE=");
			var goEmailButtonValueEnd = goEmailButtonTagStrip.indexOf("]",goEmailButtonValueStart);
			if (goEmailButtonValueStart != -1) {
				goEmailButtonValueVar = goEmailButtonTagStrip.substring((goEmailButtonValueStart+8),(goEmailButtonValueEnd));
			}
			else {
				goEmailButtonValueVar = "SUBMIT";
			}
			var goEmailButtonItalicStart = goEmailButtonTagStrip.indexOf(" FNTAW=");
			var goEmailButtonItalicEnd = goEmailButtonTagStrip.indexOf("]",goEmailButtonItalicStart);
			if (goEmailButtonItalicStart != -1) {
				goEmailButtonItalicVar = "<i class='fa " + goEmailButtonTagStrip.substring((goEmailButtonItalicStart+8),(goEmailButtonItalicEnd)) + "'><\/i>";
			}
			else {
				goEmailButtonItalicVar = "";
			}
			goEmailButtonRender += "<div id='panel2GoEmailButton' class='panel_2_goemail_button panel_2_goemail_button_off'";
			if (hoverState==1) {
				goEmailButtonRender += " onmouseover='panel2ButtonHover(\"panel2GoEmailButton\",\"panel_2_goemail_button\",1);' onfocus='panel2ButtonHover(\"panel2GoEmailButton\",\"panel_2_goemail_button\",1);' onmouseout='panel2ButtonHover(\"panel2GoEmailButton\",\"panel_2_goemail_button\",0);' onblur='panel2ButtonHover(\"panel2GoEmailButton\",\"panel_2_goemail_button\",0);'";
			}
			goEmailButtonRender += "> onclick='panel2GoEmail(" + x + "," + storeDisplayArray[x][6] + "," + storeDisplayArray[x][7] + "," + storeDisplayArray[x][16] + ",\"" + storeDisplayArray[x][13] + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2GoEmail(" + x + "," + storeDisplayArray[x][6] + "," + storeDisplayArray[x][7] + "," + storeDisplayArray[x][16] + ",\"" + storeDisplayArray[x][13] + "\");}' tabindex='0' title=\"" + goEmailButtonValueVar + "\">" + goEmailButtonItalicVar + goEmailButtonValueVar + "<\/div>";
			multiMapHTMLTest = goEmailButtonHTMLStart + goEmailButtonRender + goEmailButtonHTMLEnd;
		}
		var infoString = multiMapHTMLTest;
		if (x>=whatStoreUp && x<whatStoreEnd) {
			panel2MarkerPrep[whatPinNow]=[storeLat,storeLon,storeTitle,iconLetter,infoString];
			whatPinNow++;
		}
		panel3MarkerPrep[x]=[storeLat,storeLon,storeTitle,iconLetter3,infoString,"","",iconLetter];
		if (defZoom == 0) {
			if(gLog==1){console.log("panel2CompileMultiMap (zoom candidate) - [" + (4561920 * parseFloat(storeDisplayArray[x][8])) + "px] [" + parseFloat(storeDisplayArray[x][8]) + "mi]");}
			mapzoomArr.push(4561920 * parseFloat(storeDisplayArray[x][8]));
		}
	}
	if (defZoom == 0) {
		if (mapzoomLoc == 0) {
			mapzoomCurLoc = Math.max.apply(Math, mapzoomArr);
			if(gLog==1){console.log("panel2CompileMultiMap (zoom location) - ABSOLUTE [" + mapzoomCurLoc + "px] [" + (Math.round((mapzoomCurLoc / 4561920)*100)/100) + "mi]");}
		}
		else if (mapzoomLoc == 1) {
			var thisZoomSum = 0;
			for (zq=0; zq<mapzoomArr.length; zq++) {
				thisZoomSum += mapzoomArr[zq];
			}
			mapzoomCurLoc = thisZoomSum/mapzoomArr.length;
			if(gLog==1){console.log("panel2CompileMultiMap (zoom location) - MEAN [" + mapzoomCurLoc + "px] [" + (Math.round((mapzoomCurLoc / 4561920)*100)/100) + "mi]");}
		}
		else if (mapzoomLoc == 2) {
			sortCol(mapzoomArr,0);
			var thisIndex = Math.floor(mapzoomArr.length/2);
			mapzoomCurLoc = mapzoomArr[thisIndex];
			if(gLog==1){console.log("panel2CompileMultiMap (zoom location) - MEDIAN [" + mapzoomCurLoc + "px] [" + (Math.round((mapzoomCurLoc / 4561920)*100)/100) + "mi]");}
		}
	}
	if (atlantis == 1) {
		drawMap();
	}
	else {
		panel2DrawMultiMap();
	}
}
function panel2WriteLocList() {
	if(gLog==1){console.log("panel2WriteLocList START - " + storeDisplayArray.length,couponObj);}
	if (storeDisplayArray.length) {
		if (dealCommon == 1) {
			if (p2foundDeals != 0) {
				var baseHTML = autotextIt(p0TemplateSet.dealListDiv,"dealList");
				var dealNumTagStart = baseHTML.indexOf("<!--DEALNUM");
				if (dealNumTagStart != -1) {
					var dealNumTagEnd = baseHTML.indexOf(">",dealNumTagStart);
					var dealNumHTMLStart = baseHTML.substr(0,dealNumTagStart);
					var dealNumHTMLEnd = baseHTML.substr((dealNumTagEnd+1));
					var dealNumStrip = baseHTML.substring(dealNumHTMLStart,(dealNumHTMLEnd+1));
					var dealButtonSingularStart = dealNumStrip.indexOf(" SINGULAR=");
					if (dealButtonSingularStart != -1) {
						var dealButtonSingularEnd = dealNumStrip.indexOf("]",dealButtonSingularStart);
						dealNumSingularVar = " " + dealNumStrip.substring((dealButtonSingularStart+11),(dealButtonSingularEnd));
					}
					var dealButtonPluralStart = dealNumStrip.indexOf(" PLURAL=");
					if (dealButtonPluralStart != -1) {
						var dealButtonPluralEnd = dealNumStrip.indexOf("]",dealButtonPluralStart);
						dealNumPluralVar = " " + dealNumStrip.substring((dealButtonPluralStart+9),(dealButtonPluralEnd));
					}
					if (p2foundDeals == 1) {
						var dealNumTypeWrite = dealNumSingularVar;
					}
					else {
						var dealNumTypeWrite = dealNumPluralVar;
					}
					baseHTML = dealNumHTMLStart + p2foundDeals + dealNumTypeWrite + dealNumHTMLEnd;
				}
				var locListHTML = "<div id='panel2LocListRow0' class='panel_2_loc_list_row_deal' onclick='showDeals(\"" + p2baseDealZip + "\", \"" + document.getElementById("revCodeState").value + "\", \"" + document.getElementById("revCodeCountry").value + "\", \"" + p2dealPrevVal + "\", \"" + p2dealNextVal + "\", \"" + p2dealExFntawVal + "\", \"" + p2dealExTxtVal + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){showDeals(\"" + p2baseDealZip + "\", \"" + document.getElementById("revCodeState").value + "\", \"" + document.getElementById("revCodeCountry").value + "\", \"" + p2dealPrevVal + "\", \"" + p2dealNextVal + "\", \"" + p2dealExFntawVal + "\", \"" + p2dealExTxtVal + "\");}' tabindex='0' title=\"Show Deals\"><div id='panel2LocList0' class='panel_2_loc_list_deal'>" + baseHTML + "<\/div><\/div>";
			}
			else {
				var locListHTML = "";
			}
		}
		else {
			var locListHTML = "";
		}
		var whatPinMatch = 0;
		var hasADamnSCat = 0;
		var whatTheSCatIs = "";
		for (hdsc=0; hdsc<storeDisplayArray.length; hdsc++) {
			if (storeDisplayArray[hdsc][14] != whatTheSCatIs) {
				whatTheSCatIs = storeDisplayArray[hdsc][14]
				hasADamnSCat++;
			}
		}
		if ((whatStoreUp+resultsNum) > storeDisplayArray.length) {
			var whatStoreEnd = storeDisplayArray.length;
		}
		else {
			var whatStoreEnd = whatStoreUp+resultsNum;
		}
		if (document.getElementById('panel2ResultsStart')) {
			if (panel2ResultsStartPage == 1) {
				document.getElementById('panel2ResultsStart').innerHTML = (Math.floor((whatStoreUp + 1)/resultsNum)+1);
			}
			else {
				document.getElementById('panel2ResultsStart').innerHTML = (whatStoreUp + 1);
			}
		}
		if (document.getElementById('panel2ResultsEnd')) {
			document.getElementById('panel2ResultsEnd').innerHTML = (whatStoreEnd);
		}
		if (document.getElementById('panel2ResultsTotal')) {
			if (panel2ResultsTotalPage == 1) {
				document.getElementById('panel2ResultsTotal').innerHTML = (Math.ceil(storeDisplayArray.length/resultsNum));
			}
			else {
				document.getElementById('panel2ResultsTotal').innerHTML = (storeDisplayArray.length);
			}
		}
		if (document.getElementById('panel2TotalResults')) {
			if (panel2TotalResultsPage == 1) {
				document.getElementById('panel2TotalResults').innerHTML = (Math.ceil(storeDisplayArray.length/resultsNum));
			}
			else {
				document.getElementById('panel2TotalResults').innerHTML = (storeDisplayArray.length);
			}
		}
		var locListRowAlt = "panel_2_loc_list_row_even";
		var storeTrackJSON = "";
		var storeTrackIncr = 0;
		var apiSTR = {};
		apiSTR['SCT'] = 0;
		apiSTR['STR'] = {};
		var whatDispFeed = [];
		for (x=whatStoreUp; x<whatStoreEnd; x++) {
			panel2ListIncr++;
			if (locListRowAlt == "panel_2_loc_list_row_even") {
				locListRowAlt = "panel_2_loc_list_row_odd";
			}
			else {
				locListRowAlt = "panel_2_loc_list_row_even";
			}
			if (stateNames == 1) {
				var gottaState = 0;
				for (tsa=0;tsa<tblStateArray.length;tsa++) {
					if (tblStateArray[tsa][0] == storeDisplayArray[x][4]) {
						var stateOut = tblStateArray[tsa][1];
						gottaState = 1;
						break;
					}
				}
				if (gottaState == 0) {
					var stateOut = storeDisplayArray[x][4];
				}
			}
			else {
				var stateOut = storeDisplayArray[x][4];
			}
			var locListHTMLTest = autotextIt(p2TemplateSet.panel2LocListDiv,"panel2LocList");
			var storeProdCountArray = storeDisplayArray[x][9].split(",");
			var locCountTempNum = storeProdCountArray.length;
			var locCartCountTempNum = storeDisplayArray[x][30];
			var foundPromo = -1;
			var storeChain = storeDisplayArray[x][12];
			if (panel2PMapPinType == 1 && foundPromo != -1) {
				if (pinIncr == 0) {
					var iconLetter = pinSource + "pins/" + promoArray[foundPromo][11] + "_" + panel0Alphabet[whatPinMatch] + "." + pinSuffix;
				}
				else {
					var iconLetter = pinSource + "pins/" + promoArray[foundPromo][11] + "_" + panel2ListIncr + "." + pinSuffix;
				}
			}
			else if (panel2MapPinType == 1) {
				var daPinNum = storeDisplayArray[x][14];
				for (mp=0;mp<storeCatArray.length;mp++) {
					if (storeCatArray[mp][0] == daPinNum) {
						if (pinIncr == 0) {
							var iconLetter = pinSource + "pins/" + storeCatArray[mp][6] + "_" + panel0Alphabet[whatPinMatch] + "." + pinSuffix;
							var locLetter = panel0Alphabet[whatPinMatch];
						}
						else {
							var iconLetter = pinSource + "pins/" + storeCatArray[mp][6] + "_" + panel2ListIncr + "." + pinSuffix;
							var locLetter = panel2ListIncr;
						}
						break;
					}
				}
			}
			else {
				if (pinIncr == 0) {
					var iconLetter = pinSource + "pins/" + panel2ListChoice + "_" + panel0Alphabet[whatPinMatch] + "." + pinSuffix;
					var locLetter = panel0Alphabet[whatPinMatch];
				}
				else {
					var iconLetter = pinSource + "pins/" + panel2ListChoice + "_" + panel2ListIncr + "." + pinSuffix;
					var locLetter = panel2ListIncr;
				}
			}
			var locChainNameTagStart = locListHTMLTest.indexOf("<!--LOCCHAINNAME");
			if (locChainNameTagStart != -1) {
				if (storeDisplayArray[x][17] != "") {
					var locChainNameVal = storeDisplayArray[x][0];
				}
				else {
					var locChainNameVal = storeDisplayArray[x][0];
				}
				var locChainNameTagEnd = locListHTMLTest.indexOf(">",locChainNameTagStart);
				var locChainNameTagStrip = locListHTMLTest.substring(locChainNameTagStart,(locChainNameTagEnd+1));
				var baseLocChainNameHTMLStart = locListHTMLTest.substr(0,locChainNameTagStart);
				var baseLocChainNameHTMLEnd = locListHTMLTest.substr((locChainNameTagEnd+1));
				var locChainNameTagLinkTest = locChainNameTagStrip.indexOf(" LINK");
				var locChainNameTagLink = "";
				if (locChainNameTagLinkTest != -1) {
					locChainNameTagLink += " style='cursor:pointer;' onclick='panel2GetLocation(" + x + "," + storeDisplayArray[x][6] + "," + storeDisplayArray[x][7] + "," + storeDisplayArray[x][16] + ",\"" + storeDisplayArray[x][13] + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2GetLocation(" + x + "," + storeDisplayArray[x][6] + "," + storeDisplayArray[x][7] + "," + storeDisplayArray[x][16] + ",\"" + storeDisplayArray[x][13] + "\");}'";
					if (hoverState==1) {
						locChainNameTagLink += " onmouseover='panel2LocNameMouseOver(\"panel2LocChainName" + storeDisplayArray[x][13] + "\", \"panel_2_loc_chain_name\",0);' onfocus='panel2LocNameMouseOver(\"panel2LocChainName" + storeDisplayArray[x][13] + "\", \"panel_2_loc_chain_name\",0);' onmouseout='panel2LocNameMouseOut(\"panel2LocChainName" + storeDisplayArray[x][13] + "\", \"panel_2_loc_chain_name\",0);' onblur='panel2LocNameMouseOut(\"panel2LocChainName" + storeDisplayArray[x][13] + "\", \"panel_2_loc_chain_name\",0);'";
					}
				}
				locListHTMLTest = baseLocChainNameHTMLStart + "<div id='panel2LocChainName" + storeDisplayArray[x][13] + "' class='panel_2_loc_chain_name panel_2_loc_chain_name_off'" + locChainNameTagLink + " tabindex='0' title=\"" + locChainNameVal + "\">" + locChainNameVal + "<\/div>" + baseLocChainNameHTMLEnd;
			}
			var locChainBigImgTagStart = locListHTMLTest.indexOf("<!--LOCCHAINBIGIMG");
			if (locChainBigImgTagStart != -1) {
				var locChainBigImgTagEnd = locListHTMLTest.indexOf(">",locChainBigImgTagStart);
				var locChainBigImgTagStrip = locListHTMLTest.substring(locChainBigImgTagStart,(locChainBigImgTagEnd+1));
				var baseLocChainBigImgHTMLStart = locListHTMLTest.substr(0,locChainBigImgTagStart);
				var baseLocChainBigImgHTMLEnd = locListHTMLTest.substr((locChainBigImgTagEnd+1));
				if (storeDisplayArray[x][18] != "") {
					locListHTMLTest = baseLocChainBigImgHTMLStart + "<img title=\"" + storeDisplayArray[x][0] + "\" alt=\"" + storeDisplayArray[x][0] + "\" id='panel2LocChainBigImg" + storeDisplayArray[x][13] + "' class='panel_2_loc_chain_big_img' src='//" + endpointCDN + "/cms/images/" + storeDisplayArray[x][18] + "'>" + baseLocChainBigImgHTMLEnd;
				}
			}
			var locChainSmImgTagStart = locListHTMLTest.indexOf("<!--LOCCHAINSMIMG");
			if (locChainSmImgTagStart != -1) {
				var locChainSmImgTagEnd = locListHTMLTest.indexOf(">",locChainSmImgTagStart);
				var locChainSmImgTagStrip = locListHTMLTest.substring(locChainSmImgTagStart,(locChainSmImgTagEnd+1));
				var baseLocChainSmImgHTMLStart = locListHTMLTest.substr(0,locChainSmImgTagStart);
				var baseLocChainSmImgHTMLEnd = locListHTMLTest.substr((locChainSmImgTagEnd+1));
				if (storeDisplayArray[x][19] != "") {
					locListHTMLTest = baseLocChainSmImgHTMLStart + "<img title=\"" + storeDisplayArray[x][0] + "\" alt=\"" + storeDisplayArray[x][0] + "\" id='panel2LocChainSmImg" + storeDisplayArray[x][13] + "' class='panel_2_loc_chain_sm_img' src='//" + endpointCDN + "/cms/images/" + storeDisplayArray[x][19] + "'>" + baseLocChainSmImgHTMLEnd;
				}
			}
			var CBKTagStart = locListHTMLTest.indexOf("<!--PRODCBK");
			if (CBKTagStart != -1) {
				var CBKTagEnd = locListHTMLTest.indexOf(">",CBKTagStart);
				var CBKTagStrip = locListHTMLTest.substring(CBKTagStart,(CBKTagEnd+1));
				var baseCBKHTMLStart = locListHTMLTest.substr(0,CBKTagStart);
				var baseCBKHTMLEnd = locListHTMLTest.substr((CBKTagEnd+1));
				var cansTestStart = CBKTagStrip.indexOf(" CANS=");
				if (cansTestStart != -1) {
					var cansTestEnd = CBKTagStrip.indexOf("]",cansTestStart);
					var cansVal = "<span class='panel_2_product_list_cans'><i class='fa " + CBKTagStrip.substring((cansTestStart+7),(cansTestEnd)) + "'><\/i> cans<\/span>";
				}
				else {
					var cansVal = "<span class='panel_2_product_list_cans'>cans<\/span>";
				}
				var bottlesTestStart = CBKTagStrip.indexOf(" BOTTLES=");
				if (bottlesTestStart != -1) {
					var bottlesTestEnd = CBKTagStrip.indexOf("]",bottlesTestStart);
					var bottlesVal = "<span class='panel_2_product_list_bottles'><i class='fa " + CBKTagStrip.substring((bottlesTestStart+10),(bottlesTestEnd)) + "'><\/i> bottles<\/span>";
				}
				else {
					var bottlesVal = "<span class='panel_2_product_list_bottles'>bottles<\/span>";
				}
				var kegsTestStart = CBKTagStrip.indexOf(" KEGS=");
				if (kegsTestStart != -1) {
					var kegsTestEnd = CBKTagStrip.indexOf("]",kegsTestStart);
					var kegsVal = "<span class='panel_2_product_list_kegs'><i class='fa " + CBKTagStrip.substring((kegsTestStart+7),(kegsTestEnd)) + "'><\/i> kegs<\/span>";
				}
				else {
					var kegsVal = "<span class='panel_2_product_list_kegs'>kegs<\/span>";
				}
				if(gLog==1){console.log("LocList PRODCBK - " + storeDisplayArray[x][29]);}
				var cbkSplit = storeDisplayArray[x][29].split("|");
				var canCheck = 0;
				var bottleCheck = 0;
				var kegCheck = 0;
				for (q=0; q<cbkSplit.length; q++) {
					var cbkSubSplit = cbkSplit[q].split(",");
					if (cbkSubSplit[0] == 1) {canCheck++;}
					if (cbkSubSplit[1] == 1) {bottleCheck++;}
					if (cbkSubSplit[2] == 1) {kegCheck++;}
				}
				var cbkWrite = "";
				if (canCheck != 0) {cbkWrite += cansVal;}
				if (bottleCheck != 0) {cbkWrite += bottlesVal;}
				if (kegCheck != 0) {cbkWrite += kegsVal;}
				locListHTMLTest = baseCBKHTMLStart + "<span class='panel_2_product_list_cbk_shell'>" + cbkWrite + "<\/span>" + baseCBKHTMLEnd;
			}
			var locListPremiseTagStart = locListHTMLTest.indexOf("<!--LOCPREMISE");
			if (locListPremiseTagStart != -1 && storeDisplayArray[x][31] != "") {
				var locListPremiseTagEnd = locListHTMLTest.indexOf(">",locListPremiseTagStart);
				var locListPremiseTagStrip = locListHTMLTest.substring(locListPremiseTagStart,(locListPremiseTagEnd+1));
				var baseLocListPremiseHTMLStart = locListHTMLTest.substr(0,locListPremiseTagStart);
				var baseLocListPremiseHTMLEnd = locListHTMLTest.substr((locListPremiseTagEnd+1));
				var premWrite = "";
				if (storeDisplayArray[x][31].toString().indexOf(",") != -1) {
					var whatPrem = storeDisplayArray[x][31].split(",");
				}
				else {
					var whatPrem = [];
					whatPrem[0] = storeDisplayArray[x][31];
				}
				for (d=0; d<premiseArray.length; d++) {
					for (c=0; c<whatPrem.length; c++) {
						if (whatPrem[c] == premiseArray[d][0]) {
							premWrite += "<span class='panel_2_loc_premise_item'>" + premiseArray[d][1] + "<\/span>";
							break;
						}
					}
				}
				locListHTMLTest = baseLocListPremiseHTMLStart + "<div id='panel2LocPremise" + storeDisplayArray[x][13] + "' class='panel_2_loc_premise'>" + premWrite + "<\/div>" + baseLocListPremiseHTMLEnd;
			}
			var copyDirButtonTagStart = locListHTMLTest.indexOf("<!--COPYBUTTON");
			if (copyDirButtonTagStart != -1) {
				var copyDirButtonTagEnd = locListHTMLTest.indexOf(">",copyDirButtonTagStart);
				var copyDirButtonTagStrip = locListHTMLTest.substring(copyDirButtonTagStart,(copyDirButtonTagEnd+1));
				var copyDirButtonHTMLStart = locListHTMLTest.substr(0,copyDirButtonTagStart);
				var copyDirButtonHTMLEnd = locListHTMLTest.substr((copyDirButtonTagEnd+1));
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
				copyDirButtonRender += "<div id='panel2CopyDirButton" + storeDisplayArray[x][13] + "' class='panel_2_copydir_button panel_2_copydir_button_off'";
				if (hoverState==1) {
					copyDirButtonRender += " onmouseover='panel2ButtonHover(\"panel2CopyDirButton" + storeDisplayArray[x][13] + "\",\"panel_2_copydir_button\",1);' onfocus='panel2ButtonHover(\"panel2CopyDirButton" + storeDisplayArray[x][13] + "\",\"panel_2_copydir_button\",1);' onmouseout='panel2ButtonHover(\"panel2CopyDirButton" + storeDisplayArray[x][13] + "\",\"panel_2_copydir_button\",0);' onblur='panel2ButtonHover(\"panel2CopyDirButton" + storeDisplayArray[x][13] + "\",\"panel_2_copydir_button\",0);'";
				}
				copyDirButtonRender += " onclick='panel1CopyDirectAddress(\"" + storeDisplayArray[x][13] + "\",\"panel2CopyDirButtonText" + storeDisplayArray[x][13] + "\",\"" + copyDirButtonValueVar + "\",\"" + copyButtonClickedVar + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel1CopyDirectAddress(\"" + storeDisplayArray[x][13] + "\",\"panel2CopyDirButtonText" + storeDisplayArray[x][13] + "\",\"" + copyDirButtonValueVar + "\",\"" + copyButtonClickedVar + "\");}' tabindex='0' title=\"" + copyDirButtonValueVar + "\">" + copyDirButtonItalicVar + "<span id='panel2CopyDirButtonText" + storeDisplayArray[x][13] + "'>" + copyDirButtonValueVar + "<\/span><\/div>";
				locListHTMLTest = copyDirButtonHTMLStart + copyDirButtonRender + copyDirButtonHTMLEnd;
			}
			var locListNameTagStart = locListHTMLTest.indexOf("<!--LOCNAME");
			if (locListNameTagStart != -1) {
				var locListNameTagEnd = locListHTMLTest.indexOf(">",locListNameTagStart);
				var locListNameTagStrip = locListHTMLTest.substring(locListNameTagStart,(locListNameTagEnd+1));
				var baseLocListNameHTMLStart = locListHTMLTest.substr(0,locListNameTagStart);
				var baseLocListNameHTMLEnd = locListHTMLTest.substr((locListNameTagEnd+1));
				var locListNameTagLinkTest = locListNameTagStrip.indexOf(" LINK");
				var locListNameTagLink = "";
				if (locListNameTagLinkTest != -1) {
					locListNameTagLink += " style='cursor:pointer;' onclick='panel2GetLocation(" + x + "," + storeDisplayArray[x][6] + "," + storeDisplayArray[x][7] + "," + storeDisplayArray[x][16] + ",\"" + storeDisplayArray[x][13] + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2GetLocation(" + x + "," + storeDisplayArray[x][6] + "," + storeDisplayArray[x][7] + "," + storeDisplayArray[x][16] + ",\"" + storeDisplayArray[x][13] + "\");}'";
					if (hoverState==1) {
						locListNameTagLink += " onmouseover='panel2LocNameMouseOver(\"panel2LocName" + storeDisplayArray[x][13] + "\", \"panel_2_loc_name\",0);' onfocus='panel2LocNameMouseOver(\"panel2LocName" + storeDisplayArray[x][13] + "\", \"panel_2_loc_name\",0);' onmouseout='panel2LocNameMouseOut(\"panel2LocName" + storeDisplayArray[x][13] + "\", \"panel_2_loc_name\",0);' onblur='panel2LocNameMouseOut(\"panel2LocName" + storeDisplayArray[x][13] + "\", \"panel_2_loc_name\",0);'";
					}
				}
				var whatFeed = storeDisplayArray[x][16];
				locListHTMLTest = baseLocListNameHTMLStart + "<div id='panel2LocName" + storeDisplayArray[x][13] + "' class='source_" + sourceFeedArr[whatFeed] + " panel_2_loc_name panel_2_loc_name_off'" + locListNameTagLink + " tabindex='0' title=\"" + storeDisplayArray[x][0] + "\">" + storeDisplayArray[x][0] + "<\/div>" + baseLocListNameHTMLEnd;
			}
			var locListAddressTagStart = locListHTMLTest.indexOf("<!--LOCADDRESS");
			if (locListAddressTagStart != -1) {
				var locListAddressTagEnd = locListHTMLTest.indexOf(">",locListAddressTagStart);
				var locListAddressTagStrip = locListHTMLTest.substring(locListAddressTagStart,(locListAddressTagEnd+1));
				var baseLocListAddressHTMLStart = locListHTMLTest.substr(0,locListAddressTagStart);
				var baseLocListAddressHTMLEnd = locListHTMLTest.substr((locListAddressTagEnd+1));
				locListHTMLTest = baseLocListAddressHTMLStart + "<div id='panel2LocAddress" + storeDisplayArray[x][13] + "' class='panel_2_loc_address'>" + storeDisplayArray[x][1] + ", " + storeDisplayArray[x][3] + ", " + storeDisplayArray[x][4] + " " + storeDisplayArray[x][5] + "<\/div>" + baseLocListAddressHTMLEnd;
			}
			var locListStreetTagStart = locListHTMLTest.indexOf("<!--LOCSTREET");
			if (locListStreetTagStart != -1) {
				var locListStreetTagEnd = locListHTMLTest.indexOf(">",locListStreetTagStart);
				var locListStreetTagStrip = locListHTMLTest.substring(locListStreetTagStart,(locListStreetTagEnd+1));
				var baseLocListStreetHTMLStart = locListHTMLTest.substr(0,locListStreetTagStart);
				var baseLocListStreetHTMLEnd = locListHTMLTest.substr((locListStreetTagEnd+1));
				if (storeDisplayArray[x][1] != "") {
					locListHTMLTest = baseLocListStreetHTMLStart + "<div id='panel2LocStreet" + storeDisplayArray[x][13] + "' class='panel_2_loc_street'>" + storeDisplayArray[x][1] + "<\/div>" + baseLocListStreetHTMLEnd;
				}
				else {
					locListHTMLTest = baseLocListStreetHTMLStart + baseLocListStreetHTMLEnd;
				}
			}
			var locListTwoStreetTagStart = locListHTMLTest.indexOf("<!--LOCTWOSTREET");
			if (locListTwoStreetTagStart != -1) {
				var locListTwoStreetTagEnd = locListHTMLTest.indexOf(">",locListTwoStreetTagStart);
				var locListTwoStreetTagStrip = locListHTMLTest.substring(locListTwoStreetTagStart,(locListTwoStreetTagEnd+1));
				var baseLocListTwoStreetHTMLStart = locListHTMLTest.substr(0,locListTwoStreetTagStart);
				var baseLocListTwoStreetHTMLEnd = locListHTMLTest.substr((locListTwoStreetTagEnd+1));
				if (storeDisplayArray[x][2] != "") {
					locListHTMLTest = baseLocListTwoStreetHTMLStart + "<div id='panel2LocTwoStreet" + storeDisplayArray[x][13] + "' class='panel_2_loc_twostreet'>" + storeDisplayArray[x][2] + "<\/div>" + baseLocListTwoStreetHTMLEnd;
				}
				else {
					locListHTMLTest = baseLocListTwoStreetHTMLStart + baseLocListTwoStreetHTMLEnd;
				}
			}
			var locListCityTagStart = locListHTMLTest.indexOf("<!--LOCCITY");
			if (locListCityTagStart != -1) {
				var locListCityTagEnd = locListHTMLTest.indexOf(">",locListCityTagStart);
				var locListCityTagStrip = locListHTMLTest.substring(locListCityTagStart,(locListCityTagEnd+1));
				var baseLocListCityHTMLStart = locListHTMLTest.substr(0,locListCityTagStart);
				var baseLocListCityHTMLEnd = locListHTMLTest.substr((locListCityTagEnd+1));
				if (storeDisplayArray[x][3] != "") {
					locListHTMLTest = baseLocListCityHTMLStart + "<div id='panel2LocCity" + storeDisplayArray[x][13] + "' class='panel_2_loc_city'>" + storeDisplayArray[x][3] + "<\/div>" + baseLocListCityHTMLEnd;
				}
				else {
					locListHTMLTest = baseLocListCityHTMLStart + baseLocListCityHTMLEnd;
				}
			}
			var locListStateTagStart = locListHTMLTest.indexOf("<!--LOCSTATE");
			if (locListStateTagStart != -1) {
				var locListStateTagEnd = locListHTMLTest.indexOf(">",locListStateTagStart);
				var locListStateTagStrip = locListHTMLTest.substring(locListStateTagStart,(locListStateTagEnd+1));
				var baseLocListStateHTMLStart = locListHTMLTest.substr(0,locListStateTagStart);
				var baseLocListStateHTMLEnd = locListHTMLTest.substr((locListStateTagEnd+1));
				if (stateOut != "") {
					locListHTMLTest = baseLocListStateHTMLStart + "<div id='panel2LocState" + storeDisplayArray[x][13] + "' class='panel_2_loc_state'>" + stateOut + "<\/div>" + baseLocListStateHTMLEnd;
				}
				else {
					locListHTMLTest = baseLocListStateHTMLStart + baseLocListStateHTMLEnd;
				}
			}
			var locListZipTagStart = locListHTMLTest.indexOf("<!--LOCZIP");
			if (locListZipTagStart != -1) {
				var locListZipTagEnd = locListHTMLTest.indexOf(">",locListZipTagStart);
				var locListZipTagStrip = locListHTMLTest.substring(locListZipTagStart,(locListZipTagEnd+1));
				var baseLocListZipHTMLStart = locListHTMLTest.substr(0,locListZipTagStart);
				var baseLocListZipHTMLEnd = locListHTMLTest.substr((locListZipTagEnd+1));
				if (storeDisplayArray[x][5] != "") {
					locListHTMLTest = baseLocListZipHTMLStart + "<div id='panel2LocZip" + storeDisplayArray[x][13] + "' class='panel_2_loc_zip'>" + storeDisplayArray[x][5] + "<\/div>" + baseLocListZipHTMLEnd;
				}
				else {
					locListHTMLTest = baseLocListZipHTMLStart + baseLocListZipHTMLEnd;
				}
			}
			var locListCountryTagStart = locListHTMLTest.indexOf("<!--LOCCOUNTRY");
			if (locListCountryTagStart != -1) {
				var locListCountryTagEnd = locListHTMLTest.indexOf(">",locListCountryTagStart);
				var locListCountryTagStrip = locListHTMLTest.substring(locListCountryTagStart,(locListCountryTagEnd+1));
				var baseLocListCountryHTMLStart = locListHTMLTest.substr(0,locListCountryTagStart);
				var baseLocListCountryHTMLEnd = locListHTMLTest.substr((locListCountryTagEnd+1));
				if (storeDisplayArray[x][27] != "") {
					locListHTMLTest = baseLocListCountryHTMLStart + "<div id='panel2LocCountry" + storeDisplayArray[x][13] + "' class='panel_2_loc_country'>" + storeDisplayArray[x][27] + "<\/div>" + baseLocListCountryHTMLEnd;
				}
				else {
					locListHTMLTest = baseLocListCountryHTMLStart + baseLocListCountryHTMLEnd;
				}
			}
			var locListCSZTagStart = locListHTMLTest.indexOf("<!--LOCCSZ");
			if (locListCSZTagStart != -1) {
				var locListCSZTagEnd = locListHTMLTest.indexOf(">",locListCSZTagStart);
				var locListCSZTagStrip = locListHTMLTest.substring(locListCSZTagStart,(locListCSZTagEnd+1));
				var baseLocListCSZHTMLStart = locListHTMLTest.substr(0,locListCSZTagStart);
				var baseLocListCSZHTMLEnd = locListHTMLTest.substr((locListCSZTagEnd+1));
				locListHTMLTest = baseLocListCSZHTMLStart + "<div id='panel2LocCSZ" + storeDisplayArray[x][13] + "' class='panel_2_loc_csz'>" + storeDisplayArray[x][3] + ", " + stateOut + " " + storeDisplayArray[x][5] + "<\/div>" + baseLocListCSZHTMLEnd;
			}
			var locListWebTagStart = locListHTMLTest.indexOf("<!--LOCWEB");
			if (locListWebTagStart != -1 && storeDisplayArray[x][22] !="") {
				var locListWebTagEnd = locListHTMLTest.indexOf(">",locListWebTagStart);
				var locListWebTagStrip = locListHTMLTest.substring(locListWebTagStart,(locListWebTagEnd+1));
				var baseLocListWebHTMLStart = locListHTMLTest.substr(0,locListWebTagStart);
				var baseLocListWebHTMLEnd = locListHTMLTest.substr((locListWebTagEnd+1));
				var baseLocListWebValueStart = locListWebTagStrip.indexOf(" VALUE=");
				var baseLocListWebValueEnd = locListWebTagStrip.indexOf("]");
				if (baseLocListWebValueStart != -1) {
					baseLocListWebValueVar = locListWebTagStrip.substring((baseLocListWebValueStart+8),(baseLocListWebValueEnd));
				}
				else {
					baseLocListWebValueVar = storeDisplayArray[x][22];
				}
				locListHTMLTest = baseLocListWebHTMLStart + "<div id='panel2LocWeb" + storeDisplayArray[x][13] + "' class='panel_2_loc_web' onclick='storeWeb("+x+");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){storeWeb("+x+");}' tabindex='0' title=\"Visit Web Site\">" + baseLocListWebValueVar + "<\/div>" + baseLocListWebHTMLEnd;
			}
			var locListHoursTagStart = locListHTMLTest.indexOf("<!--LOCHOURS");
			if (locListHoursTagStart != -1 && storeDisplayArray[x][23] != "") {
				var locListHoursTagEnd = locListHTMLTest.indexOf(">",locListHoursTagStart);
				var locListHoursTagStrip = locListHTMLTest.substring(locListHoursTagStart,(locListHoursTagEnd+1));
				var baseLocListHoursHTMLStart = locListHTMLTest.substr(0,locListHoursTagStart);
				var baseLocListHoursHTMLEnd = locListHTMLTest.substr((locListHoursTagEnd+1));
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
				var hoursBaseArray = storeDisplayArray[x][23].split("|");
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
				locListHTMLTest = baseLocListHoursHTMLStart + "<div class='panel_2_loc_hours_shell'>" + hoursWriteText + "<\/div>" + baseLocListHoursHTMLEnd;
			}
			var locListPhoneTagStart = locListHTMLTest.indexOf("<!--LOCPHONE");
			if (locListPhoneTagStart != -1 && storeDisplayArray[x][15]!="") {
				var locListPhoneTagEnd = locListHTMLTest.indexOf(">",locListPhoneTagStart);
				var locListPhoneTagStrip = locListHTMLTest.substring(locListPhoneTagStart,(locListPhoneTagEnd+1));
				var locListPhoneHTMLStart = locListHTMLTest.substr(0,locListPhoneTagStart);
				var locListPhoneHTMLEnd = locListHTMLTest.substr((locListPhoneTagEnd+1));
				var locListPhoneRender = "";
				var locListPhoneValueStart = locListPhoneTagStrip.indexOf(" FORMAT=");
				var locListPhoneValueEnd = locListPhoneTagStrip.indexOf("]");
				if (locListPhoneValueStart != -1) {
					var locListPhoneValueVarTest = locListPhoneTagStrip.substring((locListPhoneValueStart+9),(locListPhoneValueEnd));
					var phoneSplit=storeDisplayArray[x][15].split("");
					for (p=0;p<phoneSplit.length;p++) {
						var thisHash = locListPhoneValueVarTest.indexOf("#");
						if (thisHash != -1) {
							locListPhoneValueVarTest = locListPhoneValueVarTest.substring(0,(thisHash))+phoneSplit[p]+locListPhoneValueVarTest.substring((thisHash+1));
						}
					}
					var locListPhoneValueVar = locListPhoneValueVarTest;
				}
				else {
					var locListPhoneValueVar = storeDisplayArray[x][15];
				}
				var locListPhoneRawStart = locListPhoneTagStrip.indexOf(" RAW");
				if (locListPhoneRawStart != -1) {
					var locListPhoneValueVar = storeDisplayArray[x][26];
				}
				locListPhoneRender += "<div id='panel2LocPhone" + storeDisplayArray[x][13] + "' class='panel_2_loc_phone'>";
				if (version=='WAP' || winWidth <= globalRespWidth) {
					locListPhoneRender += "<a href='tel:"+locListPhoneValueVar+"'>";
				}
				locListPhoneRender += locListPhoneValueVar;
				if (version=='WAP' || winWidth <= globalRespWidth) {
					locListPhoneRender += "<\/a>";
				}
				locListPhoneRender += "<\/div>";
				locListHTMLTest = locListPhoneHTMLStart + locListPhoneRender + locListPhoneHTMLEnd;
			}
			var locListDistanceTagStart = locListHTMLTest.indexOf("<!--LOCDISTANCE");
			if (locListDistanceTagStart != -1) {
				var locListDistanceTagEnd = locListHTMLTest.indexOf(">",locListDistanceTagStart);
				var locListDistanceTagStrip = locListHTMLTest.substring(locListDistanceTagStart,(locListDistanceTagEnd+1));
				var baseLocListDistanceHTMLStart = locListHTMLTest.substr(0,locListDistanceTagStart);
				var baseLocListDistanceHTMLEnd = locListHTMLTest.substr((locListDistanceTagEnd+1));
				var baseLocListDistanceKMTest = locListDistanceTagStrip.indexOf(" KM");
				if (baseLocListDistanceKMTest != -1 || forceKM == 1) {
					var baseMiles = parseFloat(storeDisplayArray[x][8]);
					var finalMiles = Math.round((baseMiles*1.60934)*100)/100;
					var finalFormat = "km";
				}
				else {
					var finalMiles = storeDisplayArray[x][8];
					var finalFormat = "mi";
				}
				var baseLocListDistanceBlankTest = locListDistanceTagStrip.indexOf(" BLANK");
				if (baseLocListDistanceBlankTest != -1) {
					var finalFormat = "";
				}
				locListHTMLTest = baseLocListDistanceHTMLStart + "<div id='panel2LocDistance" + storeDisplayArray[x][13] + "' class='panel_2_loc_distance'>" + finalMiles + " " + finalFormat + "<\/div>" + baseLocListDistanceHTMLEnd;
			}
			var locCountStart = locListHTMLTest.indexOf("<!--LOCCOUNT");
			if (locCountStart != -1) {
				var locCountEnd = locListHTMLTest.indexOf(">",locCountStart);
				var locCountStrip = locListHTMLTest.substring(locCountStart,(locCountEnd+1));
				var locCountHTMLStart = locListHTMLTest.substr(0,locCountStart);
				var locCountHTMLEnd = locListHTMLTest.substr((locCountEnd+1));
				var locCountExcludeStart = locCountStrip.indexOf(" EXCLUDE");
				if (locCountExcludeStart != -1) {
					var locCountNum = locCountTempNum - locCartCountTempNum;
				}
				else {
					var locCountNum = locCountTempNum;
				}
				if (locCartCountTempNum != 0) {
					locListHTMLTest = locCountHTMLStart + locCountNum + locCountHTMLEnd;
				}
				else {
					locListHTMLTest = locCountHTMLStart + locCountHTMLEnd;
				}
			}
			var locCartCountStart = locListHTMLTest.indexOf("<!--LOCCARTCOUNT");
			if (locCartCountStart != -1) {
				var locCartCountEnd = locListHTMLTest.indexOf(">",locCartCountStart);
				var locCartCountStrip = locListHTMLTest.substring(locCartCountStart,(locCartCountEnd+1));
				var locCartCountHTMLStart = locListHTMLTest.substr(0,locCartCountStart);
				var locCartCountHTMLEnd = locListHTMLTest.substr((locCartCountEnd+1));
				var locCartCountValueStart = locCartCountStrip.indexOf(" VALUE=");
				if (locCartCountValueStart != -1) {
					var locCartCountValueEnd = locCartCountStrip.indexOf("]",locCartCountValueStart);
					locCartCountValueVar = locCartCountStrip.substring((locCartCountValueStart+8),(locCartCountValueEnd));
				}
				else {
					locCartCountValueVar = "";
				}
				if (locCartCountTempNum != 0) {
					locListHTMLTest = locCartCountHTMLStart + "<span class='panel_2_loc_count_shell'><span class='panel_2_loc_count'>" + locCartCountTempNum + "<\/span>" + locCartCountValueVar + "<\/span>" + locCartCountHTMLEnd;
				}
				else {
					locListHTMLTest = locCartCountHTMLStart + locCartCountHTMLEnd;
				}
			}
			var locExpCountStart = locListHTMLTest.indexOf("<!--LOCEXPANDCOUNT");
			if (locExpCountStart != -1 && showBMPC == 1) {
				var locExpCountEnd = locListHTMLTest.indexOf(">",locExpCountStart);
				var locExpCountStrip = locListHTMLTest.substring(locExpCountStart,(locExpCountEnd+1));
				var locExpCountHTMLStart = locListHTMLTest.substr(0,locExpCountStart);
				var locExpCountHTMLEnd = locListHTMLTest.substr((locExpCountEnd+1));
				var locExpCountShowStart = locExpCountStrip.indexOf(" SHOW=");
				if (locExpCountShowStart != -1) {
					var locExpCountShowEnd = locExpCountStrip.indexOf("]",locExpCountShowStart);
					var locExpCountShowVar = locExpCountStrip.substring((locExpCountShowStart+7),(locExpCountShowEnd));
				}
				else {
					var locExpCountShowVar = "SHOW";
				}
				var locExpCountHideStart = locExpCountStrip.indexOf(" HIDE=");
				if (locExpCountHideStart != -1) {
					var locExpCountHideEnd = locExpCountStrip.indexOf("]",locExpCountHideStart);
					var locExpCountHideVar = locExpCountStrip.substring((locExpCountHideStart+7),(locExpCountHideEnd));
				}
				else {
					var locExpCountHideVar = "HIDE";
				}
				var locExpCountSingularStart = locExpCountStrip.indexOf(" SINGULAR=");
				if (locExpCountSingularStart != -1) {
					var locExpCountSingularEnd = locExpCountStrip.indexOf("]",locExpCountSingularStart);
					var locExpCountSingularVar = " " + locExpCountStrip.substring((locExpCountSingularStart+11),(locExpCountSingularEnd));
				}
				else {
					var locExpCountSingularVar = "PRODUCT";
				}
				var locExpCountPluralStart = locExpCountStrip.indexOf(" PLURAL=");
				if (locExpCountPluralStart != -1) {
					var locExpCountPluralEnd = locExpCountStrip.indexOf("]",locExpCountPluralStart);
					var locExpCountPluralVar = " " + locExpCountStrip.substring((locExpCountPluralStart+9),(locExpCountPluralEnd));
				}
				else {
					var locExpCountSingularVar = "PRODUCTS";
				}
				var locExpCountItalicStart = locExpCountStrip.indexOf(" FNTAW=");
				if (locExpCountItalicStart != -1) {
					var locExpCountItalicEnd = locExpCountStrip.indexOf("]",locExpCountItalicStart);
					locExpCountItalicVar = "<i class='fa " + locExpCountStrip.substring((locExpCountItalicStart+8),(locExpCountItalicEnd)) + "'><\/i>";
				}
				else {
					locExpCountItalicVar = "";
				}
				if (locCartCountTempNum == 1) {
					var locExpCountDispText = locExpCountSingularVar;
				}
				else {
					var locExpCountDispText = locExpCountPluralVar;
				}
				var locExpCountLink = "";
				var locExpControlText = "";
				if (locCartCountTempNum != 0) {
					if (showBMPL == 1) {
						locExpCountLink = " onclick='toggleLEC(" + storeDisplayArray[x][13] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){toggleLEC(" + storeDisplayArray[x][13] + ");}' style='cursor:pointer;'";
						locExpControlText = "<span id='panel2LocExpShow" + storeDisplayArray[x][13] + "' class='panel_2_loc_exp_show'>" + locExpCountShowVar + "<\/span><span id='panel2LocExpHide" + storeDisplayArray[x][13] + "' class='panel_2_loc_exp_hide' style='display:none;'>" + locExpCountHideVar + "<\/span> ";
					}
					locListHTMLTest = locExpCountHTMLStart + "<div id='panel2LocExpShell" + storeDisplayArray[x][13] + "' class='panel_2_loc_exp_shell'" + locExpCountLink + " tabindex='0' title=\"Show Details\">" + locExpCountItalicVar + locExpControlText + "<span class='panel_2_loc_exp_num'>" + locCartCountTempNum + "<\/span> <span class='panel_2_loc_exp_text'>" + locExpCountDispText + "<\/span><\/div>" + locExpCountHTMLEnd;
				}
				else {
					locListHTMLTest = locExpCountHTMLStart + locExpCountHTMLEnd;
				}
			}
			var locExpProdStart = locListHTMLTest.indexOf("<!--LOCEXPANDPROD");
			if (locExpProdStart != -1 && showBMPL == 1) {
				var locExpProdEnd = locListHTMLTest.indexOf(">",locExpProdStart);
				var locExpProdStrip = locListHTMLTest.substring(locExpProdStart,(locExpProdEnd+1));
				var locExpProdHTMLStart = locListHTMLTest.substr(0,locExpProdStart);
				var locExpProdHTMLEnd = locListHTMLTest.substr((locExpProdEnd+1));
				var locExpCountProd = "<div id='panel2LocExpProd" + storeDisplayArray[x][13] + "' class='panel_2_loc_exp_shell' style='display:none;'>";
				var locExpCountArr = storeDisplayArray[x][9].split(",");
				for (v=0; v<locExpCountArr.length; v++) {
					for (j=0; j<prodDisplayArray.length; j++) {
						if (locExpCountArr[v] == prodDisplayArray[j][0]) {
							locExpCountProd += "<div class='panel_2_loc_exp_prod_item'>" + prodDisplayArray[j][2] + "<\/div>";
						}
					}
				}
				locExpCountProd += "<\/div>";
				locListHTMLTest = locExpProdHTMLStart + locExpCountProd + locExpProdHTMLEnd;
			}
			var locListPinTagStart = locListHTMLTest.indexOf("<!--LOCPIN");
			if (locListPinTagStart != -1) {
				var locListPinTagEnd = locListHTMLTest.indexOf(">",locListPinTagStart);
				var locListPinTagStrip = locListHTMLTest.substring(locListPinTagStart,(locListPinTagEnd+1));
				var baseLocListPinHTMLStart = locListHTMLTest.substr(0,locListPinTagStart);
				var baseLocListPinHTMLEnd = locListHTMLTest.substr((locListPinTagEnd+1));
				locListHTMLTest = baseLocListPinHTMLStart + "<img title=\"" + iconLetter + "\" alt=\"" + iconLetter + "\" id='panel2LocPin" + storeDisplayArray[x][13] + "' class='panel_2_location_pin' src='" + iconLetter + "'>" + baseLocListPinHTMLEnd;
			}
			var locListLetterTagStart = locListHTMLTest.indexOf("<!--LOCLETTER");
			if (locListLetterTagStart != -1) {
				var locListLetterTagEnd = locListHTMLTest.indexOf(">",locListLetterTagStart);
				var locListLetterTagStrip = locListHTMLTest.substring(locListLetterTagStart,(locListLetterTagEnd+1));
				var baseLocListLetterHTMLStart = locListHTMLTest.substr(0,locListLetterTagStart);
				var baseLocListLetterHTMLEnd = locListHTMLTest.substr((locListLetterTagEnd+1));
				locListHTMLTest = baseLocListLetterHTMLStart + "<div id='panel2LocLetter" + storeDisplayArray[x][13] + "' class='panel_2_location_letter'>" + locLetter + "<\/div>" + baseLocListLetterHTMLEnd;
			}
			var locListCatTextTagStart = locListHTMLTest.indexOf("<!--LOCCATTEXT");
			if (locListCatTextTagStart != -1 && storeDisplayArray[x][14] != 0 && hasADamnSCat > 1) {
				var locListCatTextTagEnd = locListHTMLTest.indexOf(">",locListCatTextTagStart);
				var locListCatTextTagStrip = locListHTMLTest.substring(locListCatTextTagStart,(locListCatTextTagEnd+1));
				var baseLocListCatTextHTMLStart = locListHTMLTest.substr(0,locListCatTextTagStart);
				var baseLocListCatTextHTMLEnd = locListHTMLTest.substr((locListCatTextTagEnd+1));
				if (storeDisplayArray[x][14].indexOf(",") != -1) {
					var daCatNum = storeDisplayArray[x][14].split(",");
				}
				else {
					var daCatNum = new Array(storeDisplayArray[x][14]);
				}
				var locListCatTextAllTest = locListCatTextTagStrip.indexOf(" ALL");
				var locListCatTextWriteString = "";
				if (locListCatTextAllTest != -1) {
					for (ss=0;ss<daCatNum.length;ss++) {
						for (sc=0;sc<storeCatArray.length;sc++) {
							if (storeCatArray[sc][0] == daCatNum[ss]) {
								locListCatTextWriteString += "<div id='panel2LocCatText" + storeCatArray[sc][0] + storeDisplayArray[x][13] + "' class='panel_2_loc_cattext'>" + storeCatArray[sc][1] + "<\/div>";
								break;
							}
						}
					}
				}
				else {
					for (sc=0;sc<storeCatArray.length;sc++) {
						if (storeCatArray[sc][0] == daCatNum[0]) {
							locListCatTextWriteString = "<div id='panel2LocCatText" + storeCatArray[sc][0] + storeDisplayArray[x][13] + "' class='panel_2_loc_cattext'>" + storeCatArray[sc][1] + "<\/div>";
							break;
						}
					}
				}
				locListHTMLTest = baseLocListCatTextHTMLStart + locListCatTextWriteString + baseLocListCatTextHTMLEnd;
			}
			var locListCatBigImgTagStart = locListHTMLTest.indexOf("<!--LOCCATBIGIMG");
			if (locListCatBigImgTagStart != -1 && storeDisplayArray[x][14] != 0 && hasADamnSCat > 1) {
				var locListCatBigImgTagEnd = locListHTMLTest.indexOf(">",locListCatBigImgTagStart);
				var locListCatBigImgTagStrip = locListHTMLTest.substring(locListCatBigImgTagStart,(locListCatBigImgTagEnd+1));
				var baseLocListCatBigImgHTMLStart = locListHTMLTest.substr(0,locListCatBigImgTagStart);
				var baseLocListCatBigImgHTMLEnd = locListHTMLTest.substr((locListCatBigImgTagEnd+1));
				if (storeDisplayArray[x][14].indexOf(",") != -1) {
					var daCatNum = storeDisplayArray[x][14].split(",");
				}
				else {
					var daCatNum = new Array(storeDisplayArray[x][14]);
				}
				var locListCatBigImgAllTest = locListCatBigImgTagStrip.indexOf(" ALL");
				var locListCatBigImgWriteString = "";
				if (locListCatBigImgAllTest != -1) {
					for (ss=0;ss<daCatNum.length;ss++) {
						for (sc=0;sc<storeCatArray.length;sc++) {
							if (storeCatArray[sc][0] == daCatNum[ss]) {
								locListCatBigImgWriteString += "<img title=\"" + storeCatArray[sc][1] + "\" alt=\"" + storeCatArray[sc][1] + "\" id='panel2LocCatBigImg" + storeCatArray[sc][0] + storeDisplayArray[x][13] + "' class='panel_2_loc_catbigimg' src='" + coreURL + "images/" + storeCatArray[sc][3] + "'>";
								break;
							}
						}
					}
				}
				else {
					for (sc=0;sc<storeCatArray.length;sc++) {
						if (storeCatArray[sc][0] == daCatNum[0]) {
							locListCatBigImgWriteString = "<img title=\"" + storeCatArray[sc][1] + "\" alt=\"" + storeCatArray[sc][1] + "\" id='panel2LocCatBigImg" + storeCatArray[sc][0] + storeDisplayArray[x][13] + "' class='panel_2_loc_catbigimg' src='" + coreURL + "images/" + storeCatArray[sc][3] + "'>";
							break;
						}
					}
				}
				locListHTMLTest = baseLocListCatBigImgHTMLStart + locListCatBigImgWriteString + baseLocListCatBigImgHTMLEnd;
			}
			var locListCatSmImgTagStart = locListHTMLTest.indexOf("<!--LOCCATSMIMG");
			if (locListCatSmImgTagStart != -1 && storeDisplayArray[x][14] != 0 && hasADamnSCat > 1) {
				var locListCatSmImgTagEnd = locListHTMLTest.indexOf(">",locListCatSmImgTagStart);
				var locListCatSmImgTagStrip = locListHTMLTest.substring(locListCatSmImgTagStart,(locListCatSmImgTagEnd+1));
				var baseLocListCatSmImgHTMLStart = locListHTMLTest.substr(0,locListCatSmImgTagStart);
				var baseLocListCatSmImgHTMLEnd = locListHTMLTest.substr((locListCatSmImgTagEnd+1));
				if (storeDisplayArray[x][14].indexOf(",") != -1) {
					var daCatNum = storeDisplayArray[x][14].split(",");
				}
				else {
					var daCatNum = new Array(storeDisplayArray[x][14]);
				}
				var locListCatSmImgAllTest = locListCatSmImgTagStrip.indexOf(" ALL");
				var locListCatSmImgWriteString = "";
				if (locListCatSmImgAllTest != -1) {
					for (ss=0;ss<daCatNum.length;ss++) {
						for (sc=0;sc<storeCatArray.length;sc++) {
							if (storeCatArray[sc][0] == daCatNum[ss]) {
								locListCatSmImgWriteString += "<img title=\"" + storeCatArray[sc][1] + "\" alt=\"" + storeCatArray[sc][1] + "\" id='panel2LocCatSmImg" + storeCatArray[sc][0] + storeDisplayArray[x][13] + "' class='panel_2_loc_catsmimg' src='" + coreURL + "images/" + storeCatArray[sc][3] + "'>";
								break;
							}
						}
					}
				}
				else {
					for (sc=0;sc<storeCatArray.length;sc++) {
						if (storeCatArray[sc][0] == daCatNum[0]) {
							locListCatSmImgWriteString = "<img title=\"" + storeCatArray[sc][1] + "\" alt=\"" + storeCatArray[sc][1] + "\" id='panel2LocCatSmImg" + storeCatArray[sc][0] + storeDisplayArray[x][13] + "' class='panel_2_loc_catsmimg' src='" + coreURL + "images/" + storeCatArray[sc][4] + "'>";
							break;
						}
					}
				}
				locListHTMLTest = baseLocListCatSmImgHTMLStart + locListCatSmImgWriteString + baseLocListCatSmImgHTMLEnd;
			}
			var locListSourceTagStart = locListHTMLTest.indexOf("<!--LOCSOURCE");
			if (locListSourceTagStart != -1) {
				var locListSourceTagEnd = locListHTMLTest.indexOf(">",locListSourceTagStart);
				var locListSourceTagStrip = locListHTMLTest.substring(locListSourceTagStart,(locListSourceTagEnd+1));
				var baseLocListSourceHTMLStart = locListHTMLTest.substr(0,locListSourceTagStart);
				var baseLocListSourceHTMLEnd = locListHTMLTest.substr((locListSourceTagEnd+1));
				if (storeDisplayArray[x][16] == 0) {
					var theDataSource = "Local";
				}
				else if (storeDisplayArray[x][16] == 1) {
					var theDataSource = "IRI";
				}
				else if (storeDisplayArray[x][16] == 2) {
					var theDataSource = "SPINS";
				}
				else if (storeDisplayArray[x][16] == 3) {
					var theDataSource = "LocalNull";
				}
				else if (storeDisplayArray[x][16] == 8) {
					var theDataSource = "IRILocal";
				}
				else {
					var theDataSource = "Unknown";
				}
				locListHTMLTest = baseLocListSourceHTMLStart + "<div id='panel2LocSource" + storeDisplayArray[x][13] + "' class='panel_2_loc_source'>" + theDataSource + "<\/div>" + baseLocListSourceHTMLEnd;
			}
			var googleButtonTagStart = locListHTMLTest.indexOf("<!--GOOGLEBUTTON");
			if (googleButtonTagStart != -1) {
				var googleButtonTagEnd = locListHTMLTest.indexOf(">",googleButtonTagStart);
				var googleButtonTagStrip = locListHTMLTest.substring(googleButtonTagStart,(googleButtonTagEnd+1));
				var googleButtonHTMLStart = locListHTMLTest.substr(0,googleButtonTagStart);
				var googleButtonHTMLEnd = locListHTMLTest.substr((googleButtonTagEnd+1));
				var googleButtonRender = "";
				var googleButtonValueStart = googleButtonTagStrip.indexOf(" VALUE=");
				var googleButtonValueEnd = googleButtonTagStrip.indexOf("]",googleButtonValueStart);
				if (googleButtonValueStart != -1) {
					googleButtonValueVar = googleButtonTagStrip.substring((googleButtonValueStart+8),(googleButtonValueEnd));
				}
				else {
					googleButtonValueVar = "SEND";
				}
				var googleButtonItalicStart = googleButtonTagStrip.indexOf(" FNTAW=");
				var googleButtonItalicEnd = googleButtonTagStrip.indexOf("]",googleButtonItalicStart);
				if (googleButtonItalicStart != -1) {
					googleButtonItalicVar = "<i class='fa " + googleButtonTagStrip.substring((googleButtonItalicStart+8),(googleButtonItalicEnd)) + "'><\/i>";
				}
				else {
					googleButtonItalicVar = "";
				}
				googleButtonRender += "<div id='panel2GoogleButton' class='panel_2_google_button panel_2_google_button_off'";
				if (hoverState==1) {
					googleButtonRender += " onmouseover='panel2ButtonHover(\"panel2GoogleButton\",\"panel_2_google_button\",1);' onfocus='panel2ButtonHover(\"panel2GoogleButton\",\"panel_2_google_button\",1);' onmouseout='panel2ButtonHover(\"panel2GoogleButton\",\"panel_2_google_button\",0);' onblur='panel2ButtonHover(\"panel2GoogleButton\",\"panel_2_google_button\",0);'";
				}
				googleButtonRender += " onclick='panel2GoogleLink(\"" + storeDisplayArray[x][6] + "\",\"" + storeDisplayArray[x][7] + "\","+x+");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2GoogleLink(\"" + storeDisplayArray[x][6] + "\",\"" + storeDisplayArray[x][7] + "\","+x+");}' tabindex='0' title=\"" + googleButtonValueVar + "\">" + googleButtonItalicVar + googleButtonValueVar + "<\/div>";
				locListHTMLTest = googleButtonHTMLStart + googleButtonRender + googleButtonHTMLEnd;
			}
			var locListSplitWrite = "";
			if (panel2SplitLocList == 1) {
				var locListSplitTemp = autotextIt(p2TemplateSet.panel2LocListSplitDiv,"panel2LocListSplit");
				var prodButtonTagStart = locListSplitTemp.indexOf("<!--PRODBUTTON");
				if (prodButtonTagStart != -1) {
					var prodButtonTagEnd = locListSplitTemp.indexOf(">",prodButtonTagStart);
					var prodButtonTagStrip = locListSplitTemp.substring(prodButtonTagStart,(prodButtonTagEnd+1));
					var prodButtonHTMLStart = locListSplitTemp.substr(0,prodButtonTagStart);
					var prodButtonHTMLEnd = locListSplitTemp.substr((prodButtonTagEnd+1));
					var prodButtonRender = "";
					var prodButtonValueStart = prodButtonTagStrip.indexOf(" VALUE=");
					var prodButtonValueEnd = prodButtonTagStrip.indexOf("]",prodButtonValueStart);
					if (prodButtonValueStart != -1) {
						prodButtonValueVar = prodButtonTagStrip.substring((prodButtonValueStart+8),(prodButtonValueEnd));
					}
					else {
						prodButtonValueVar = "PRODUCTS";
					}
					var prodButtonItalicStart = prodButtonTagStrip.indexOf(" FNTAW=");
					var prodButtonItalicEnd = prodButtonTagStrip.indexOf("]",prodButtonItalicStart);
					if (prodButtonItalicStart != -1) {
						prodButtonItalicVar = "<i class='fa " + prodButtonTagStrip.substring((prodButtonItalicStart+8),(prodButtonItalicEnd)) + "'><\/i>";
					}
					else {
						prodButtonItalicVar = "";
					}
					prodButtonRender += "<div id='panel2ProdSplitButton' class='panel_2_prod_button panel_2_prod_button_off'";
					if (hoverState==1) {
						prodButtonRender += " onmouseover='panel2ButtonHover(\"panel2ProdSplitButton\",\"panel_2_prod_button\",1);' onfocus='panel2ButtonHover(\"panel2ProdSplitButton\",\"panel_2_prod_button\",1);' onmouseout='panel2ButtonHover(\"panel2ProdSplitButton\",\"panel_2_prod_button\",0);' onblur='panel2ButtonHover(\"panel2ProdSplitButton\",\"panel_2_prod_button\",0);'";
					}
					prodButtonRender += " onclick='panel3ForceProd=1;panel3ForceDir=0;panel3ForceEmail=0;panel2GetLocation(" + x + "," + storeDisplayArray[x][6] + "," + storeDisplayArray[x][7] + "," + storeDisplayArray[x][16] + ",\"" + storeDisplayArray[x][13] + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3ForceProd=1;panel3ForceDir=0;panel3ForceEmail=0;panel2GetLocation(" + x + "," + storeDisplayArray[x][6] + "," + storeDisplayArray[x][7] + "," + storeDisplayArray[x][16] + ",\"" + storeDisplayArray[x][13] + "\");}' tabindex='0' title=\"" + prodButtonValueVar + "\">" + prodButtonItalicVar + prodButtonValueVar + "<\/div>";
					locListSplitTemp = prodButtonHTMLStart + prodButtonRender + prodButtonHTMLEnd;
				}
				var dirButtonTagStart = locListSplitTemp.indexOf("<!--DIRBUTTON");
				if (dirButtonTagStart != -1) {
					var dirButtonTagEnd = locListSplitTemp.indexOf(">",dirButtonTagStart);
					var dirButtonTagStrip = locListSplitTemp.substring(dirButtonTagStart,(dirButtonTagEnd+1));
					var dirButtonHTMLStart = locListSplitTemp.substr(0,dirButtonTagStart);
					var dirButtonHTMLEnd = locListSplitTemp.substr((dirButtonTagEnd+1));
					var dirButtonRender = "";
					var dirButtonValueStart = dirButtonTagStrip.indexOf(" VALUE=");
					var dirButtonValueEnd = dirButtonTagStrip.indexOf("]",dirButtonValueStart);
					if (dirButtonValueStart != -1) {
						dirButtonValueVar = dirButtonTagStrip.substring((dirButtonValueStart+8),(dirButtonValueEnd));
					}
					else {
						dirButtonValueVar = "DIRECTIONS";
					}
					var dirButtonItalicStart = dirButtonTagStrip.indexOf(" FNTAW=");
					var dirButtonItalicEnd = dirButtonTagStrip.indexOf("]",dirButtonItalicStart);
					if (dirButtonItalicStart != -1) {
						dirButtonItalicVar = "<i class='fa " + dirButtonTagStrip.substring((dirButtonItalicStart+8),(dirButtonItalicEnd)) + "'><\/i>";
					}
					else {
						dirButtonItalicVar = "";
					}
					dirButtonRender += "<div id='panel2DirSplitButton' class='panel_2_dir_button panel_2_dir_button_off'";
					if (hoverState==1) {
						dirButtonRender += " onmouseover='panel2ButtonHover(\"panel2DirSplitButton\",\"panel_2_dir_button\",1);' onfocus='panel2ButtonHover(\"panel2DirSplitButton\",\"panel_2_dir_button\",1);' onmouseout='panel2ButtonHover(\"panel2DirSplitButton\",\"panel_2_dir_button\",0);' onblur='panel2ButtonHover(\"panel2DirSplitButton\",\"panel_2_dir_button\",0);'";
					}
					dirButtonRender += " onclick='panel3ForceProd=0;panel3ForceDir=1;panel3ForceEmail=0;panel2GetLocation(" + x + "," + storeDisplayArray[x][6] + "," + storeDisplayArray[x][7] + "," + storeDisplayArray[x][16] + ",\"" + storeDisplayArray[x][13] + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3ForceProd=0;panel3ForceDir=1;panel3ForceEmail=0;panel2GetLocation(" + x + "," + storeDisplayArray[x][6] + "," + storeDisplayArray[x][7] + "," + storeDisplayArray[x][16] + ",\"" + storeDisplayArray[x][13] + "\");}' tabindex='0' title=\"" + dirButtonValueVar + "\">" + dirButtonItalicVar + dirButtonValueVar + "<\/div>";
					locListSplitTemp = dirButtonHTMLStart + dirButtonRender + dirButtonHTMLEnd;
				}
				var emailButtonTagStart = locListSplitTemp.indexOf("<!--EMAILBUTTON");
				if (emailButtonTagStart != -1) {
					var emailButtonTagEnd = locListSplitTemp.indexOf(">",emailButtonTagStart);
					var emailButtonTagStrip = locListSplitTemp.substring(emailButtonTagStart,(emailButtonTagEnd+1));
					var emailButtonHTMLStart = locListSplitTemp.substr(0,emailButtonTagStart);
					var emailButtonHTMLEnd = locListSplitTemp.substr((emailButtonTagEnd+1));
					var emailButtonRender = "";
					var emailButtonValueStart = emailButtonTagStrip.indexOf(" VALUE=");
					var emailButtonValueEnd = emailButtonTagStrip.indexOf("]",emailButtonValueStart);
					if (emailButtonValueStart != -1) {
						emailButtonValueVar = emailButtonTagStrip.substring((emailButtonValueStart+8),(emailButtonValueEnd));
					}
					else {
						emailButtonValueVar = "EMAIL";
					}
					var emailButtonItalicStart = emailButtonTagStrip.indexOf(" FNTAW=");
					var emailButtonItalicEnd = emailButtonTagStrip.indexOf("]",emailButtonItalicStart);
					if (emailButtonItalicStart != -1) {
						emailButtonItalicVar = "<i class='fa " + emailButtonTagStrip.substring((emailButtonItalicStart+8),(emailButtonItalicEnd)) + "'><\/i>";
					}
					else {
						emailButtonItalicVar = "";
					}
					emailButtonRender += "<div id='panel2EmailSplitButton' class='panel_2_email_button panel_2_email_button_off'";
					if (hoverState==1) {
						emailButtonRender += " onmouseover='panel2ButtonHover(\"panel2EmailSplitButton\",\"panel_2_email_button\",1);' onfocus='panel2ButtonHover(\"panel2EmailSplitButton\",\"panel_2_email_button\",1);' onmouseout='panel2ButtonHover(\"panel2EmailSplitButton\",\"panel_2_email_button\",0);' onblur='panel2ButtonHover(\"panel2EmailSplitButton\",\"panel_2_email_button\",0);'";
					}
					emailButtonRender += " onclick='panel3ForceProd=0;panel3ForceDir=0;panel3ForceEmail=1;panel2GetLocation(" + x + "," + storeDisplayArray[x][6] + "," + storeDisplayArray[x][7] + "," + storeDisplayArray[x][16] + ",\"" + storeDisplayArray[x][13] + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3ForceProd=0;panel3ForceDir=0;panel3ForceEmail=1;panel2GetLocation(" + x + "," + storeDisplayArray[x][6] + "," + storeDisplayArray[x][7] + "," + storeDisplayArray[x][16] + ",\"" + storeDisplayArray[x][13] + "\");}' tabindex='0' title=\"" + emailButtonValueVar + "\">" + emailButtonItalicVar + emailButtonValueVar + "<\/div>";
					locListSplitTemp = emailButtonHTMLStart + emailButtonRender + emailButtonHTMLEnd;
				}
				var detailButtonTagStart = locListSplitTemp.indexOf("<!--DETAILBUTTON");
				if (detailButtonTagStart != -1) {
					var detailButtonTagEnd = locListSplitTemp.indexOf(">",detailButtonTagStart);
					var detailButtonTagStrip = locListSplitTemp.substring(detailButtonTagStart,(detailButtonTagEnd+1));
					var detailButtonHTMLStart = locListSplitTemp.substr(0,detailButtonTagStart);
					var detailButtonHTMLEnd = locListSplitTemp.substr((detailButtonTagEnd+1));
					var detailButtonRender = "";
					var detailButtonValueStart = detailButtonTagStrip.indexOf(" VALUE=");
					var detailButtonValueEnd = detailButtonTagStrip.indexOf("]",detailButtonValueStart);
					if (detailButtonValueStart != -1) {
						detailButtonValueVar = detailButtonTagStrip.substring((detailButtonValueStart+8),(detailButtonValueEnd));
					}
					else {
						detailButtonValueVar = "DETAIL";
					}
					var detailButtonItalicStart = detailButtonTagStrip.indexOf(" FNTAW=");
					var detailButtonItalicEnd = detailButtonTagStrip.indexOf("]",detailButtonItalicStart);
					if (detailButtonItalicStart != -1) {
						detailButtonItalicVar = "<i class='fa " + detailButtonTagStrip.substring((detailButtonItalicStart+8),(detailButtonItalicEnd)) + "'><\/i>";
					}
					else {
						detailButtonItalicVar = "";
					}
					detailButtonRender += "<div id='panel2DetailSplitButton' class='panel_2_detail_button panel_2_detail_button_off'";
					if (hoverState==1) {
						detailButtonRender += " onmouseover='panel2ButtonHover(\"panel2DetailSplitButton\",\"panel_2_detail_button\",1);' onfocus='panel2ButtonHover(\"panel2DetailSplitButton\",\"panel_2_detail_button\",1);' onmouseout='panel2ButtonHover(\"panel2DetailSplitButton\",\"panel_2_detail_button\",0);' onblur='panel2ButtonHover(\"panel2DetailSplitButton\",\"panel_2_detail_button\",0);'";
					}
					detailButtonRender += " onclick='panel3ForceProd=0;panel3ForceDir=0;panel3ForceDetail=0;panel2DetailSlider(" + storeDisplayArray[x][13] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3ForceProd=0;panel3ForceDir=0;panel3ForceDetail=0;panel2DetailSlider(" + storeDisplayArray[x][13] + ");}' tabindex='0' title=\"" + detailButtonValueVar + "\">" + detailButtonItalicVar + detailButtonValueVar + "<\/div>";
					locListSplitTemp = detailButtonHTMLStart + detailButtonRender + detailButtonHTMLEnd;
				}
				locListSplitWrite = "<div id='panel2SplitRow" + storeDisplayArray[x][13] + "' class='panel_2_split_row'>" + locListSplitTemp + "<\/div>";
			}
			var locListDetailWrite = "";
			if (panel2DetailLocList == 1) {
				var locDetailHTMLTest = autotextIt(p2TemplateSet.panel2LocListDetailDiv,"panel2LocListDetail");
				var detailChainNameTagStart = locDetailHTMLTest.indexOf("<!--LOCCHAINNAME");
				if (detailChainNameTagStart != -1) {
					if (storeDisplayArray[x][17] != "") {
						var detailChainNameVal = storeDisplayArray[x][0];
					}
					else {
						var detailChainNameVal = storeDisplayArray[x][0];
					}
					var detailChainNameTagEnd = locDetailHTMLTest.indexOf(">",detailChainNameTagStart);
					var detailChainNameTagStrip = locDetailHTMLTest.substring(detailChainNameTagStart,(detailChainNameTagEnd+1));
					var baseDetailChainNameHTMLStart = locDetailHTMLTest.substr(0,detailChainNameTagStart);
					var baseDetailChainNameHTMLEnd = locDetailHTMLTest.substr((detailChainNameTagEnd+1));
					locDetailHTMLTest = baseDetailChainNameHTMLStart + detailChainNameVal + baseDetailChainNameHTMLEnd;
				}
				var detailChainBigImgTagStart = locDetailHTMLTest.indexOf("<!--LOCCHAINBIGIMG");
				if (detailChainBigImgTagStart != -1) {
					var detailChainBigImgTagEnd = locDetailHTMLTest.indexOf(">",detailChainBigImgTagStart);
					var detailChainBigImgTagStrip = locDetailHTMLTest.substring(detailChainBigImgTagStart,(detailChainBigImgTagEnd+1));
					var baseDetailChainBigImgHTMLStart = locDetailHTMLTest.substr(0,detailChainBigImgTagStart);
					var baseDetailChainBigImgHTMLEnd = locDetailHTMLTest.substr((detailChainBigImgTagEnd+1));
					if (storeDisplayArray[x][18] != "") {
						locDetailHTMLTest = baseDetailChainBigImgHTMLStart + "<img title=\"" + storeDisplayArray[x][0] + "\" alt=\"" + storeDisplayArray[x][0] + "\" id='panel2DetailChainBigImg" + storeDisplayArray[x][13] + "' class='panel_2_detail_chain_big_img' src='//" + endpointCDN + "/cms/images/" + storeDisplayArray[x][18] + "'>" + baseDetailChainBigImgHTMLEnd;
					}
				}
				var detailChainSmImgTagStart = locDetailHTMLTest.indexOf("<!--LOCCHAINSMIMG");
				if (detailChainSmImgTagStart != -1) {
					var detailChainSmImgTagEnd = locDetailHTMLTest.indexOf(">",detailChainSmImgTagStart);
					var detailChainSmImgTagStrip = locDetailHTMLTest.substring(detailChainSmImgTagStart,(detailChainSmImgTagEnd+1));
					var baseDetailChainSmImgHTMLStart = locDetailHTMLTest.substr(0,detailChainSmImgTagStart);
					var baseDetailChainSmImgHTMLEnd = locDetailHTMLTest.substr((detailChainSmImgTagEnd+1));
					if (storeDisplayArray[x][19] != "") {
						locDetailHTMLTest = baseDetailChainSmImgHTMLStart + "<img title=\"" + storeDisplayArray[x][0] + "\" alt=\"" + storeDisplayArray[x][0] + "\" id='panel2DetailChainSmImg" + storeDisplayArray[x][13] + "' class='panel_2_detail_chain_sm_img' src='//" + endpointCDN + "/cms/images/" + storeDisplayArray[x][19] + "' alt=\"" + storeDisplayArray[x][0] + "\">" + baseDetailChainSmImgHTMLEnd;
					}
				}
				var locDetailNameTagStart = locDetailHTMLTest.indexOf("<!--LOCNAME");
				if (locDetailNameTagStart != -1) {
					var locDetailNameTagEnd = locDetailHTMLTest.indexOf(">",locDetailNameTagStart);
					var locDetailNameTagStrip = locDetailHTMLTest.substring(locDetailNameTagStart,(locDetailNameTagEnd+1));
					var baseLocDetailNameHTMLStart = locDetailHTMLTest.substr(0,locDetailNameTagStart);
					var baseLocDetailNameHTMLEnd = locDetailHTMLTest.substr((locDetailNameTagEnd+1));
					locDetailHTMLTest = baseLocDetailNameHTMLStart + storeDisplayArray[x][0] + baseLocDetailNameHTMLEnd;
				}
				var locDetailAddressTagStart = locDetailHTMLTest.indexOf("<!--LOCADDRESS");
				if (locDetailAddressTagStart != -1) {
					var locDetailAddressTagEnd = locDetailHTMLTest.indexOf(">",locDetailAddressTagStart);
					var locDetailAddressTagStrip = locDetailHTMLTest.substring(locDetailAddressTagStart,(locDetailAddressTagEnd+1));
					var baseLocDetailAddressHTMLStart = locDetailHTMLTest.substr(0,locDetailAddressTagStart);
					var baseLocDetailAddressHTMLEnd = locDetailHTMLTest.substr((locDetailAddressTagEnd+1));
					locDetailHTMLTest = baseLocDetailAddressHTMLStart + storeDisplayArray[x][1] + ", " + storeDisplayArray[x][3] + ", " + storeDisplayArray[x][4] + " " + storeDisplayArray[x][5] + baseLocDetailAddressHTMLEnd;
				}
				var locDetailStreetTagStart = locDetailHTMLTest.indexOf("<!--LOCSTREET");
				if (locDetailStreetTagStart != -1) {
					var locDetailStreetTagEnd = locDetailHTMLTest.indexOf(">",locDetailStreetTagStart);
					var locDetailStreetTagStrip = locDetailHTMLTest.substring(locDetailStreetTagStart,(locDetailStreetTagEnd+1));
					var baseLocDetailStreetHTMLStart = locDetailHTMLTest.substr(0,locDetailStreetTagStart);
					var baseLocDetailStreetHTMLEnd = locDetailHTMLTest.substr((locDetailStreetTagEnd+1));
					if (storeDisplayArray[x][1] != "") {
						locDetailHTMLTest = baseLocDetailStreetHTMLStart + storeDisplayArray[x][1] + baseLocDetailStreetHTMLEnd;
					}
					else {
						locDetailHTMLTest = baseLocDetailStreetHTMLStart + baseLocDetailStreetHTMLEnd;
					}
				}
				var locDetailTwoStreetTagStart = locDetailHTMLTest.indexOf("<!--LOCTWOSTREET");
				if (locDetailTwoStreetTagStart != -1) {
					var locDetailTwoStreetTagEnd = locDetailHTMLTest.indexOf(">",locDetailTwoStreetTagStart);
					var locDetailTwoStreetTagStrip = locDetailHTMLTest.substring(locDetailTwoStreetTagStart,(locDetailTwoStreetTagEnd+1));
					var baseLocDetailTwoStreetHTMLStart = locDetailHTMLTest.substr(0,locDetailTwoStreetTagStart);
					var baseLocDetailTwoStreetHTMLEnd = locDetailHTMLTest.substr((locDetailTwoStreetTagEnd+1));
					if (storeDisplayArray[x][2] != "") {
						locDetailHTMLTest = baseLocDetailTwoStreetHTMLStart + storeDisplayArray[x][2] + baseLocDetailTwoStreetHTMLEnd;
					}
					else {
						locDetailHTMLTest = baseLocDetailTwoStreetHTMLStart + baseLocDetailTwoStreetHTMLEnd;
					}
				}
				var locDetailCityTagStart = locDetailHTMLTest.indexOf("<!--LOCCITY");
				if (locDetailCityTagStart != -1) {
					var locDetailCityTagEnd = locDetailHTMLTest.indexOf(">",locDetailCityTagStart);
					var locDetailCityTagStrip = locDetailHTMLTest.substring(locDetailCityTagStart,(locDetailCityTagEnd+1));
					var baseLocDetailCityHTMLStart = locDetailHTMLTest.substr(0,locDetailCityTagStart);
					var baseLocDetailCityHTMLEnd = locDetailHTMLTest.substr((locDetailCityTagEnd+1));
					if (storeDisplayArray[x][3] != "") {
						locDetailHTMLTest = baseLocDetailCityHTMLStart + storeDisplayArray[x][3] + baseLocDetailCityHTMLEnd;
					}
					else {
						locDetailHTMLTest = baseLocDetailCityHTMLStart + baseLocDetailCityHTMLEnd;
					}
				}
				var locDetailStateTagStart = locDetailHTMLTest.indexOf("<!--LOCSTATE");
				if (locDetailStateTagStart != -1) {
					var locDetailStateTagEnd = locDetailHTMLTest.indexOf(">",locDetailStateTagStart);
					var locDetailStateTagStrip = locDetailHTMLTest.substring(locDetailStateTagStart,(locDetailStateTagEnd+1));
					var baseLocDetailStateHTMLStart = locDetailHTMLTest.substr(0,locDetailStateTagStart);
					var baseLocDetailStateHTMLEnd = locDetailHTMLTest.substr((locDetailStateTagEnd+1));
					if (stateOut != "") {
						locDetailHTMLTest = baseLocDetailStateHTMLStart + stateOut + baseLocDetailStateHTMLEnd;
					}
					else {
						locDetailHTMLTest = baseLocDetailStateHTMLStart + baseLocDetailStateHTMLEnd;
					}
				}
				var locDetailZipTagStart = locDetailHTMLTest.indexOf("<!--LOCZIP");
				if (locDetailZipTagStart != -1) {
					var locDetailZipTagEnd = locDetailHTMLTest.indexOf(">",locDetailZipTagStart);
					var locDetailZipTagStrip = locDetailHTMLTest.substring(locDetailZipTagStart,(locDetailZipTagEnd+1));
					var baseLocDetailZipHTMLStart = locDetailHTMLTest.substr(0,locDetailZipTagStart);
					var baseLocDetailZipHTMLEnd = locDetailHTMLTest.substr((locDetailZipTagEnd+1));
					if (storeDisplayArray[x][5] != "") {
						locDetailHTMLTest = baseLocDetailZipHTMLStart + storeDisplayArray[x][5] + baseLocDetailZipHTMLEnd;
					}
					else {
						locDetailHTMLTest = baseLocDetailZipHTMLStart + baseLocDetailZipHTMLEnd;
					}
				}
				var locDetailCountryTagStart = locDetailHTMLTest.indexOf("<!--LOCCOUNTRY");
				if (locDetailCountryTagStart != -1) {
					var locDetailCountryTagEnd = locDetailHTMLTest.indexOf(">",locDetailCountryTagStart);
					var locDetailCountryTagStrip = locDetailHTMLTest.substring(locDetailCountryTagStart,(locDetailCountryTagEnd+1));
					var baseLocDetailCountryHTMLStart = locDetailHTMLTest.substr(0,locDetailCountryTagStart);
					var baseLocDetailCountryHTMLEnd = locDetailHTMLTest.substr((locDetailCountryTagEnd+1));
					if (storeDisplayArray[x][27] != "") {
						locDetailHTMLTest = baseLocDetailCountryHTMLStart + storeDisplayArray[x][27] + baseLocDetailCountryHTMLEnd;
					}
					else {
						locDetailHTMLTest = baseLocDetailCountryHTMLStart + baseLocDetailCountryHTMLEnd;
					}
				}
				var locDetailCSZTagStart = locDetailHTMLTest.indexOf("<!--LOCCSZ");
				if (locDetailCSZTagStart != -1) {
					var locDetailCSZTagEnd = locDetailHTMLTest.indexOf(">",locDetailCSZTagStart);
					var locDetailCSZTagStrip = locDetailHTMLTest.substring(locDetailCSZTagStart,(locDetailCSZTagEnd+1));
					var baseLocDetailCSZHTMLStart = locDetailHTMLTest.substr(0,locDetailCSZTagStart);
					var baseLocDetailCSZHTMLEnd = locDetailHTMLTest.substr((locDetailCSZTagEnd+1));
					locDetailHTMLTest = baseLocDetailCSZHTMLStart + storeDisplayArray[x][3] + ", " + stateOut + " " + storeDisplayArray[x][5] + baseLocDetailCSZHTMLEnd;
				}
				var locDetailWebTagStart = locDetailHTMLTest.indexOf("<!--LOCWEB");
				if (locDetailWebTagStart != -1 && storeDisplayArray[x][22] !="") {
					var locDetailWebTagEnd = locDetailHTMLTest.indexOf(">",locDetailWebTagStart);
					var locDetailWebTagStrip = locDetailHTMLTest.substring(locDetailWebTagStart,(locDetailWebTagEnd+1));
					var baseLocDetailWebHTMLStart = locDetailHTMLTest.substr(0,locDetailWebTagStart);
					var baseLocDetailWebHTMLEnd = locDetailHTMLTest.substr((locDetailWebTagEnd+1));
					var baseLocDetailWebValueStart = locDetailWebTagStrip.indexOf(" VALUE=");
					var baseLocDetailWebValueEnd = locDetailWebTagStrip.indexOf("]");
					if (baseLocDetailWebValueStart != -1) {
						baseLocDetailWebValueVar = locDetailWebTagStrip.substring((baseLocDetailWebValueStart+8),(baseLocDetailWebValueEnd));
					}
					else {
						baseLocDetailWebValueVar = storeDisplayArray[x][22];
					}
					locDetailHTMLTest = baseLocDetailWebHTMLStart + "<span onclick='storeWeb("+x+");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){storeWeb("+x+");}' tabindex='0' title=\"Visit Web Site\">" + baseLocDetailWebValueVar + "<\/span>" + baseLocDetailWebHTMLEnd;
				}
				var locDetailHoursTagStart = locDetailHTMLTest.indexOf("<!--LOCHOURS");
				if (locDetailHoursTagStart != -1 && storeDisplayArray[x][23] != "") {
					var locDetailHoursTagEnd = locDetailHTMLTest.indexOf(">",locDetailHoursTagStart);
					var locDetailHoursTagStrip = locDetailHTMLTest.substring(locDetailHoursTagStart,(locDetailHoursTagEnd+1));
					var baseLocDetailHoursHTMLStart = locDetailHTMLTest.substr(0,locDetailHoursTagStart);
					var baseLocDetailHoursHTMLEnd = locDetailHTMLTest.substr((locDetailHoursTagEnd+1));
					var baseLocDetailHoursTypeVar = 3;
					var baseLocDetailHoursTypeStart = locDetailHoursTagStrip.indexOf(" DTYPE=");
					if (baseLocDetailHoursTypeStart != -1) {
						var baseLocDetailHoursTypeEnd = locDetailHoursTagStrip.indexOf("]",baseLocDetailHoursTypeStart);
						var baseLocDetailHoursTypeCheck = locDetailHoursTagStrip.substring((baseLocDetailHoursTypeStart+8),(baseLocDetailHoursTypeEnd));
						if (baseLocDetailHoursTypeCheck == "SHORT") {baseLocDetailHoursTypeVar = 1;}
						if (baseLocDetailHoursTypeCheck == "MED") {baseLocDetailHoursTypeVar = 2;}
						if (baseLocDetailHoursTypeCheck == "LONG") {baseLocDetailHoursTypeVar = 3;}
					}
					var baseLocDetailHoursValueVar = "LIST";
					var baseLocDetailHoursValueStart = locDetailHoursTagStrip.indexOf(" STYLE=");
					if (baseLocDetailHoursValueStart != -1) {
						var baseLocDetailHoursValueEnd = locDetailHoursTagStrip.indexOf("]",baseLocDetailHoursValueStart);
						baseLocDetailHoursValueVar = locDetailHoursTagStrip.substring((baseLocDetailHoursValueStart+8),(baseLocDetailHoursValueEnd));
					}
					var hoursBaseArray = storeDisplayArray[x][23].split("|");
					var hoursDayArray = [];
					for (h=0; h<hoursBaseArray.length; h++) {
						var hoursDayRaw = hoursBaseArray[h].substring(0,1);
						var hoursDayVal = "";
						for (hdr=0; hdr<daDayArray.length; hdr++) {
							if (hoursDayRaw.toUpperCase() == daDayArray[hdr][0]) {
								hoursDayVal = daDayArray[hdr][baseLocDetailHoursTypeVar];
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
					if (baseLocDetailHoursValueVar == "LIST") {
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
					locDetailHTMLTest = baseLocDetailHoursHTMLStart + hoursWriteText + baseLocDetailHoursHTMLEnd;
				}
				var locDetailPhoneTagStart = locDetailHTMLTest.indexOf("<!--LOCPHONE");
				if (locDetailPhoneTagStart != -1 && storeDisplayArray[x][15]!="") {
					var locDetailPhoneTagEnd = locDetailHTMLTest.indexOf(">",locDetailPhoneTagStart);
					var locDetailPhoneTagStrip = locDetailHTMLTest.substring(locDetailPhoneTagStart,(locDetailPhoneTagEnd+1));
					var locDetailPhoneHTMLStart = locDetailHTMLTest.substr(0,locDetailPhoneTagStart);
					var locDetailPhoneHTMLEnd = locDetailHTMLTest.substr((locDetailPhoneTagEnd+1));
					var locDetailPhoneRender = "";
					var locDetailPhoneValueStart = locDetailPhoneTagStrip.indexOf(" FORMAT=");
					var locDetailPhoneValueEnd = locDetailPhoneTagStrip.indexOf("]");
					if (locDetailPhoneValueStart != -1) {
						var locDetailPhoneValueVarTest = locDetailPhoneTagStrip.substring((locDetailPhoneValueStart+9),(locDetailPhoneValueEnd));
						var phoneSplit=storeDisplayArray[x][15].split("");
						for (p=0;p<phoneSplit.length;p++) {
							var thisHash = locDetailPhoneValueVarTest.indexOf("#");
							if (thisHash != -1) {
								locDetailPhoneValueVarTest = locDetailPhoneValueVarTest.substring(0,(thisHash))+phoneSplit[p]+locDetailPhoneValueVarTest.substring((thisHash+1));
							}
						}
						var locDetailPhoneValueVar = locDetailPhoneValueVarTest;
					}
					else {
						var locDetailPhoneValueVar = storeDisplayArray[x][15];
					}
					var locDetailPhoneRawStart = locDetailPhoneTagStrip.indexOf(" RAW");
					if (locDetailPhoneRawStart != -1) {
						var locDetailPhoneValueVar = storeDisplayArray[x][26];
					}
					if (version=='WAP' || winWidth <= globalRespWidth) {
						locDetailHTMLTest = locDetailPhoneHTMLStart + "<a href='tel:"+locDetailPhoneValueVar+"'>" + locDetailPhoneValueVar + "<\/a>" + locDetailPhoneHTMLEnd;
					}
					else {
						locDetailHTMLTest = locDetailPhoneHTMLStart + locDetailPhoneValueVar + locDetailPhoneHTMLEnd;
					}
				}
				var locDetailDistanceTagStart = locDetailHTMLTest.indexOf("<!--LOCDISTANCE");
				if (locDetailDistanceTagStart != -1) {
					var locDetailDistanceTagEnd = locDetailHTMLTest.indexOf(">",locDetailDistanceTagStart);
					var locDetailDistanceTagStrip = locDetailHTMLTest.substring(locDetailDistanceTagStart,(locDetailDistanceTagEnd+1));
					var baseLocDetailDistanceHTMLStart = locDetailHTMLTest.substr(0,locDetailDistanceTagStart);
					var baseLocDetailDistanceHTMLEnd = locDetailHTMLTest.substr((locDetailDistanceTagEnd+1));
					var baseLocDetailDistanceKMTest = locDetailDistanceTagStrip.indexOf(" KM");
					if (baseLocDetailDistanceKMTest != -1 || forceKM == 1) {
						var baseMiles = parseFloat(storeDisplayArray[x][8]);
						var finalMiles = Math.round((baseMiles*1.60934)*100)/100;
						var finalFormat = "km";
					}
					else {
						var finalMiles = storeDisplayArray[x][8];
						var finalFormat = "mi";
					}
					var baseLocDetailDistanceBlankTest = locDetailDistanceTagStrip.indexOf(" BLANK");
					if (baseLocDetailDistanceBlankTest != -1) {
						var finalFormat = "";
					}
					locDetailHTMLTest = baseLocDetailDistanceHTMLStart + finalMiles + " " + finalFormat + baseLocDetailDistanceHTMLEnd;
				}
				var closeButtonTagStart = locDetailHTMLTest.indexOf("<!--CLOSEBUTTON");
				if (closeButtonTagStart != -1) {
					var closeButtonTagEnd = locDetailHTMLTest.indexOf(">",closeButtonTagStart);
					var closeButtonTagStrip = locDetailHTMLTest.substring(closeButtonTagStart,(closeButtonTagEnd+1));
					var closeButtonHTMLStart = locDetailHTMLTest.substr(0,closeButtonTagStart);
					var closeButtonHTMLEnd = locDetailHTMLTest.substr((closeButtonTagEnd+1));
					var closeButtonRender = "";
					var closeButtonValueStart = closeButtonTagStrip.indexOf(" VALUE=");
					var closeButtonValueEnd = closeButtonTagStrip.indexOf("]",closeButtonValueStart);
					if (closeButtonValueStart != -1) {
						closeButtonValueVar = closeButtonTagStrip.substring((closeButtonValueStart+8),(closeButtonValueEnd));
					}
					else {
						closeButtonValueVar = "CLOSE";
					}
					var closeButtonItalicStart = closeButtonTagStrip.indexOf(" FNTAW=");
					var closeButtonItalicEnd = closeButtonTagStrip.indexOf("]",closeButtonItalicStart);
					if (closeButtonItalicStart != -1) {
						closeButtonItalicVar = "<i class='fa " + closeButtonTagStrip.substring((closeButtonItalicStart+8),(closeButtonItalicEnd)) + "'><\/i>";
					}
					else {
						closeButtonItalicVar = "";
					}
					closeButtonRender += "<div id='panel2DetailSplitButton' class='panel_2_detail_button panel_2_detail_button_off'";
					if (hoverState==1) {
						closeButtonRender += " onmouseover='panel2ButtonHover(\"panel2DetailSplitButton\",\"panel_2_detail_button\",1);' onfocus='panel2ButtonHover(\"panel2DetailSplitButton\",\"panel_2_detail_button\",1);' onmouseout='panel2ButtonHover(\"panel2DetailSplitButton\",\"panel_2_detail_button\",0);' onblur='panel2ButtonHover(\"panel2DetailSplitButton\",\"panel_2_detail_button\",0);'";
					}
					closeButtonRender += " onclick='panel3ForceProd=0;panel3ForceDir=0;panel3ForceDetail=0;panel2DetailSlider(" + storeDisplayArray[x][13] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel3ForceProd=0;panel3ForceDir=0;panel3ForceDetail=0;panel2DetailSlider(" + storeDisplayArray[x][13] + ");}' tabindex='0' title=\"Close\">" + closeButtonItalicVar + closeButtonValueVar + "<\/div>";
					locDetailHTMLTest = closeButtonHTMLStart + closeButtonRender + closeButtonHTMLEnd;
				}
				locListDetailWrite = "<div id='panel2DetailRow" + storeDisplayArray[x][13] + "' class='panel_2_detail_row panel_2_detail_row_" + storeDisplayArray[x][13] + " panel_close_me' style='display:none;'>" + locDetailHTMLTest + "<\/div>";
			}
			if (panel2Go3 == 1) {
				var clickGoThree = " onclick='panel2GetLocation(" + x + "," + storeDisplayArray[x][6] + "," + storeDisplayArray[x][7] + "," + storeDisplayArray[x][16] + ",\"" + storeDisplayArray[x][13] + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2GetLocation(" + x + "," + storeDisplayArray[x][6] + "," + storeDisplayArray[x][7] + "," + storeDisplayArray[x][16] + ",\"" + storeDisplayArray[x][13] + "\");}' tabindex='0' title=\"" + storeDisplayArray[x][0] + "\"";
			}
			else {
				var clickGoThree = "";
			}
			var llCouponHTML = "";
			if (storeDisplayArray[x][33] != "" && cpAPI != 0) {
				if (storeDisplayArray[x][33].coupons) {
					var coupIDIncr = 0;
					llCouponHTML = autotextIt(p0TemplateSet.couponLocListHeadDiv,"couponLocListHead");
					var coupStoreNameTagStart = llCouponHTML.indexOf("<!--STORENAME");
					if (coupStoreNameTagStart != -1) {
						var coupStoreNameTagEnd = llCouponHTML.indexOf(">",coupStoreNameTagStart);
						var coupStoreNameHTMLStart = llCouponHTML.substr(0,coupStoreNameTagStart);
						var coupStoreNameHTMLEnd = llCouponHTML.substr((coupStoreNameTagEnd+1));
						var coupStoreNameStrip = llCouponHTML.substring(coupStoreNameHTMLStart,(coupStoreNameHTMLEnd+1));
						llCouponHTML = coupStoreNameHTMLStart + "<span class='p2_ll_coupon_title'>" + storeDisplayArray[x][0] + "<\/span>" + coupStoreNameHTMLEnd;
					}
					for (coup in storeDisplayArray[x][33].coupons) {
						var liwCouponHTMLTest = autotextIt(p0TemplateSet.couponLocListDiv,"couponLocList");
						var coupTitleTagStart = liwCouponHTMLTest.indexOf("<!--TITLE");
						if (coupTitleTagStart != -1) {
							var coupTitleTagEnd = liwCouponHTMLTest.indexOf(">",coupTitleTagStart);
							var coupTitleHTMLStart = liwCouponHTMLTest.substr(0,coupTitleTagStart);
							var coupTitleHTMLEnd = liwCouponHTMLTest.substr((coupTitleTagEnd+1));
							var coupTitleStrip = liwCouponHTMLTest.substring(coupTitleHTMLStart,(coupTitleHTMLEnd+1));
							liwCouponHTMLTest = coupTitleHTMLStart + "<span class='p2_ll_coupon_title'>" + storeDisplayArray[x][33].coupons[coup].title + "<\/span>" + coupTitleHTMLEnd;
						}
						var coupDescTagStart = liwCouponHTMLTest.indexOf("<!--DESC");
						if (coupDescTagStart != -1) {
							var coupDescTagEnd = liwCouponHTMLTest.indexOf(">",coupDescTagStart);
							var coupDescHTMLStart = liwCouponHTMLTest.substr(0,coupDescTagStart);
							var coupDescHTMLEnd = liwCouponHTMLTest.substr((coupDescTagEnd+1));
							var coupDescStrip = liwCouponHTMLTest.substring(coupDescHTMLStart,(coupDescHTMLEnd+1));
							liwCouponHTMLTest = coupDescHTMLStart + "<span class='p2_ll_coupon_description'>" + storeDisplayArray[x][33].coupons[coup].description + "<\/span>" + coupDescHTMLEnd;
						}
						var coupImageTagStart = liwCouponHTMLTest.indexOf("<!--IMAGE");
						if (coupImageTagStart != -1 && storeDisplayArray[x][33].coupons[coup].campaignImageUrl != null) {
							var coupImageTagEnd = liwCouponHTMLTest.indexOf(">",coupImageTagStart);
							var coupImageHTMLStart = liwCouponHTMLTest.substr(0,coupImageTagStart);
							var coupImageHTMLEnd = liwCouponHTMLTest.substr((coupImageTagEnd+1));
							var coupImageStrip = liwCouponHTMLTest.substring(coupImageHTMLStart,(coupImageHTMLEnd+1));
							liwCouponHTMLTest = coupImageHTMLStart + "<img title=\"" + storeDisplayArray[x][0] + "\" alt=\"" + storeDisplayArray[x][0] + "\" class='p2_ll_coupon_img' src='" + storeDisplayArray[x][33].coupons[coup].campaignImageUrl + "'>" + coupImageHTMLEnd;
						}
						if (couponBypass == 1) {
							var llCouponLink = "couponBuy("+x+",\"" + storeDisplayArray[x][33].coupons[coup].id + "\",\"" + storeDisplayArray[x][33].coupons[coup].actionUrl + "\");"
						}
						else {
							var llCouponLink = "couponModal(" + x + ",\"" + storeDisplayArray[x][33].coupons[coup].id + "\");";
						}
						llCouponHTML += "<div id='getCouponList"+coupIDIncr+"' class='get_coupon_list get_coupon_list_"+coupIDIncr+" get_coupon_list_"+coupIDIncr+"_off' onclick='" + llCouponLink + "' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + llCouponLink + "}'";
						if (hoverState==1) {
							llCouponHTML += " onmouseover='genericButtonOver(\"get_coupon_list_" + coupIDIncr + "\",\"get_coupon_list_" + coupIDIncr + "\");' onfocus='genericButtonOver(\"get_coupon_list_" + coupIDIncr + "\",\"get_coupon_list_" + coupIDIncr + "\");' onmouseout='genericButtonOut(\"get_coupon_list_" + coupIDIncr + "\",\"get_coupon_list_" + coupIDIncr + "\");' onblur='genericButtonOut(\"get_coupon_list_" + coupIDIncr + "\",\"get_coupon_list_" + coupIDIncr + "\");'";
						}
						llCouponHTML += " tabindex='0' title=\"" + storeDisplayArray[x][33].coupons[coup].title + "\">" + liwCouponHTMLTest + "<\/div>";
						coupIDIncr++;
					}
					llCouponHTML += autotextIt(p0TemplateSet.couponLocListFootDiv,"couponLocListFoot");
					couponTrack(x,"xxx",30);
				}
			}
			locListHTML += "<div id='panel2LocListRow" + storeDisplayArray[x][13] + "' class='panel_2_loc_list_row " + locListRowAlt + "'><div id='panel2LocList" + storeDisplayArray[x][13] + "' class='panel_2_loc_list panel_2_loc_list_off'";
			if (hoverState==1) {
				locListHTML += " onmouseover='panel2ListMouseOver(\"panel2LocList" + storeDisplayArray[x][13] + "\",\"panel_2_loc_list\",0," + whatPinMatch + ");' onfocus='panel2ListMouseOver(\"panel2LocList" + storeDisplayArray[x][13] + "\",\"panel_2_loc_list\",0," + whatPinMatch + ");' onmouseout='panel2ListMouseOut(\"panel2LocList" + storeDisplayArray[x][13] + "\",\"panel_2_loc_list\",0);' onblur='panel2ListMouseOut(\"panel2LocList" + storeDisplayArray[x][13] + "\",\"panel_2_loc_list\",0);'";
			}
			if (cpAPI != 0) {
				locListHTML += "><span class='panel_2_loc_list_click_shell' " + clickGoThree + ">" + locListHTMLTest + "<\/span>" + llCouponHTML + "<\/div>" + locListSplitWrite + locListDetailWrite + "<\/div>";
			}
			else {
				locListHTML += clickGoThree +">" + locListHTMLTest + "<\/div>" + locListSplitWrite + locListDetailWrite + "<\/div>";
			}
			whatPinMatch++;
			apiSTR['STR'][storeTrackIncr] = {};
			apiSTR['STR'][storeTrackIncr]['ORD'] = storeTrackIncr+1;
			apiSTR['STR'][storeTrackIncr]['FED'] = storeDisplayArray[x][16];
			apiSTR['STR'][storeTrackIncr]['LAT'] = storeDisplayArray[x][6];
			apiSTR['STR'][storeTrackIncr]['LNG'] = storeDisplayArray[x][7];
			apiSTR['STR'][storeTrackIncr]['NAM'] = storeDisplayArray[x][0];
			apiSTR['STR'][storeTrackIncr]['ADD'] = storeDisplayArray[x][1];
			apiSTR['STR'][storeTrackIncr]['ADT'] = storeDisplayArray[x][2];
			apiSTR['STR'][storeTrackIncr]['CTY'] = storeDisplayArray[x][3];
			apiSTR['STR'][storeTrackIncr]['STA'] = storeDisplayArray[x][4];
			apiSTR['STR'][storeTrackIncr]['ZIP'] = storeDisplayArray[x][5];
			apiSTR['STR'][storeTrackIncr]['CNT'] = storeDisplayArray[x][27];
			apiSTR['STR'][storeTrackIncr]['PRD'] = storeDisplayArray[x][9];
			storeTrackIncr++;
			if (storeTrackJSON != ""){storeTrackJSON += "||";}
			storeTrackJSON += storeTrackIncr + ';;' + storeDisplayArray[x][16] + ';;' + storeDisplayArray[x][6] + ';;' + storeDisplayArray[x][7] + ';;' + storeDisplayArray[x][0].replace(/"/g, '') + ';;' + storeDisplayArray[x][1].replace(/"/g, '') + ';;' + storeDisplayArray[x][2].replace(/"/g, '') + ';;' + storeDisplayArray[x][3] + ';;' + storeDisplayArray[x][4] + ';;' + storeDisplayArray[x][5] + ';;' + storeDisplayArray[x][27] + ';;' + storeDisplayArray[x][9];
			whatDispFeed.push(storeDisplayArray[x][16]);
		}
		apiSTR['STC'] = storeTrackIncr;
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
		document.getElementById('panel2LocListShell').innerHTML = locListHTML;
		if (onretPar == 1 && bmPos == 1 && document.getElementById("storeCountWidgetShell")) {
			if (storeTrackIncr == 1) {
				document.getElementById("storeCountWidgetText").innerHTML = storeCountWidgetSingularVar;
			}
			else {
				document.getElementById("storeCountWidgetText").innerHTML = storeCountWidgetPluralVar;
			}
			document.getElementById("storeCountWidgetCount").innerHTML = storeTrackIncr;
			$("#storeCountWidgetShell").show();
		}
		if (storeDisplayArray.length || storeProdHoldArray.length) {
			$(".panel_2_preload_hide").hide();
		}
		if (trackVal == 1 && allOnOne == 0) {
			setTimeout(function(){
				var locTrackArr = new Array(2,3,5);
				if (mapWriteTrack == 1) {
					locTrackArr.push(4);
					mapWriteTrack = 0;
				}
				$.post(controlURL + "tracktest.php", {
					CB: noCache,
					TLL: tlVal,
					A1: trackVal,
					UP1: "PANEL2",
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
					STORE: storeTrackJSON,
					STORECOUNT: storeTrackIncr,
					PLIST: compProdVal,
					PSET: prodSetVal,
					TRACK: locTrackArr.toString(","),
					DUTV: dutv
					}, function(data){
						if(gLog==1){console.log("panel2WriteLocList - tracktest: " , JSON.parse(data));}
					}
				);
			},1000);
		}
		else if (trackVal == 2 && allOnOne == 0) {
			setTimeout(function(){
				var sendObj = setTrackObj();
				var locTrackArr = new Array(2,3,5);
				if (mapWriteTrack == 1) {
					locTrackArr.push(4);
					mapWriteTrack = 0;
				}
				sendObj['TRK'] = locTrackArr.toString(",");
				sendObj['RQF'] = "panel2WriteLocList";
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
				sendObj['STC'] = apiSTR.STC;
				for (dlcT=0; dlcT<apiSTR.STC; dlcT++) {
					sendObj['STR'][dlcT] = {};
					sendObj['STR'][dlcT]['ORD'] = apiSTR.STR[dlcT].ORD;
					sendObj['STR'][dlcT]['FED'] = apiSTR.STR[dlcT].FED;
					sendObj['STR'][dlcT]['LAT'] = apiSTR.STR[dlcT].LAT;
					sendObj['STR'][dlcT]['LNG'] = apiSTR.STR[dlcT].LNG;
					sendObj['STR'][dlcT]['NAM'] = apiSTR.STR[dlcT].NAM;
					sendObj['STR'][dlcT]['ADD'] = apiSTR.STR[dlcT].ADD;
					sendObj['STR'][dlcT]['ADT'] = apiSTR.STR[dlcT].ADT;
					sendObj['STR'][dlcT]['CTY'] = apiSTR.STR[dlcT].CTY;
					sendObj['STR'][dlcT]['STA'] = apiSTR.STR[dlcT].STA;
					sendObj['STR'][dlcT]['ZIP'] = apiSTR.STR[dlcT].ZIP;
					sendObj['STR'][dlcT]['CNT'] = apiSTR.STR[dlcT].CNT;
					sendObj['STR'][dlcT]['PRD'] = apiSTR.STR[dlcT].PRD;
				}
				sendTrackObj(sendObj);
			},300);
		}
	}
	else {
		if (p2SearchMade == 1) {
			document.getElementById('panel2LocListShell').innerHTML = autotextIt(p2TemplateSet.panel2LocNoResDiv,"panel2LocNoRes");
		}
	}
}
function panel2DetailSlider(slID) {
	if (panel2DetailLocCount == slID) {
		if (panel2DetailLocTrans == "SLIDE") {
			$(".panel_2_detail_row_" + slID).slideUp(100);
		}
		else {
			$(".panel_2_detail_row_" + slID).fadeOut(100);
		}
		panel2DetailLocCount = -1;
	}
	else {
		if (panel2DetailLocCount != -1) {
			if (panel2DetailLocTrans == "SLIDE") {
				$(".panel_2_detail_row_" + panel2DetailLocCount).slideUp(100);
				var ptsdTO = 20;
			}
			else {
				$(".panel_2_detail_row_" + panel2DetailLocCount).fadeOut(100);
				var ptsdTO = 120;
			}
		}
		else {
		}
		panel2DetailLocCount = slID;
		setTimeout(function(){
			if (panel2DetailLocTrans == "SLIDE") {
				$(".panel_2_detail_row_" + slID).slideDown(100);
			}
			else {
				$(".panel_2_detail_row_" + slID).fadeIn(100);
			}
		},ptsdTO);
	}
}
function panel2DetailClose(slID) {
	$(".panel_2_detail_row_" + slID).hide();
}
function panel2WriteProdCart() {
	if(gLog==1){console.log("panel2WriteProdCart - START",prodCartArray.length,prodFilterArray);}
	if (document.getElementById('panel2ProdShopCartShell')) {
		var writeHTML = "";
		var cartCatBadgeArr = [];
		var prodCartHeadHTML = autotextIt(p2TemplateSet.panel2ProductCartHead,"panel2ProductCartHead");
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
					clearButtonRender += "<div id='panel2ProdCartClearButton' class='panel_2_prod_cart_clear_button panel_2_prod_cart_clear_button_off'";
					if (hoverState==1) {
						clearButtonRender += " onmouseover='panel2ButtonHover(\"panel2ProdCartClearButton\", \"panel_2_prod_cart_clear_button\", 1);' onfocus='panel2ButtonHover(\"panel2ProdCartClearButton\", \"panel_2_prod_cart_clear_button\", 1);' onmouseout='panel2ButtonHover(\"panel2ProdCartClearButton\", \"panel_2_prod_cart_clear_button\", 0);' onblur='panel2ButtonHover(\"panel2ProdCartClearButton\", \"panel_2_prod_cart_clear_button\", 0);'";
					}
					clearButtonRender += " onclick='panel2ProdCartRemove();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2ProdCartRemove();}' tabindex='0' title=\"" + clearButtonValueVar + "\">" + clearButtonItalicVar + clearButtonValueVar + "<\/div>";
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
					prodCartHeadHTML = emptyTextHTMLStart + "<div id='panel2ProdCartEmptyText' class='panel_2_prod_cart_empty_text_shell'><div class='panel_2_prod_cart_empty_text_inner'>" + emptyTextValueVar + "<\/div><\/div>" + emptyTextHTMLEnd;
				}
			}
			writeHTML += prodCartHeadHTML;
		}
		for (y=0; y<prodCartArray.length; y++) {
			var prodCartHTML = autotextIt(p2TemplateSet.panel2ProductCartDiv,"panel2ProductCart");
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
							prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " panel2ProductCart_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
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
							var descVal = "<span class='panel_2_prod_cart_name_desc'>" + prodDisplayArray[x][3] + "<\/span>";
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
						prodCartHTML = baseProdCartNameHTMLStart + "<div id='panel2ProdCartName" + prodDisplayArray[x][0] + "' class='panel_2_prod_cart_name'>" + prodNameItalicVar + "<span class='panel_2_prod_cart_name_name'>" + prodDisplayArray[x][2] + "<\/span>" + descVal + "<\/div>" + baseProdCartNameHTMLEnd;
					}
					var prodDescTagStart = prodCartHTML.indexOf("<!--PRODDESC");
					if (prodDescTagStart != -1) {
						var prodDescTagEnd = prodCartHTML.indexOf(">",prodDescTagStart);
						var prodDescTagStrip = prodCartHTML.substring(prodDescTagStart,(prodDescTagEnd+1));
						var baseProdDescHTMLStart = prodCartHTML.substr(0,prodDescTagStart);
						var baseProdDescHTMLEnd = prodCartHTML.substr((prodDescTagEnd+1));
						prodCartHTML = baseProdDescHTMLStart + "<div id='panel2ProdCartDesc" + prodDisplayArray[x][0] + "' class='panel_2_prod_cart_desc'>" + prodDisplayArray[x][3] + "<\/div>" + baseProdDescHTMLEnd;
					}
					var prodCatTagStart = prodCartHTML.indexOf("<!--PRODCAT");
					if (prodCatTagStart != -1) {
						var prodCatTagEnd = prodCartHTML.indexOf(">",prodCatTagStart);
						var prodCatTagStrip = prodCartHTML.substring(prodCatTagStart,(prodCatTagEnd+1));
						var baseProdCatHTMLStart = prodCartHTML.substr(0,prodCatTagStart);
						var baseProdCatHTMLEnd = prodCartHTML.substr((prodCatTagEnd+1));
						prodCartHTML = baseProdCatHTMLStart + "<div id='panel2ProdCartCat" + prodDisplayArray[x][0] + "' class='panel_2_prod_cart_cat'>" + prodDisplayArray[x][16] + "<\/div>" + baseProdCatHTMLEnd;
					}
					var prodCartBigImgTagStart = prodCartHTML.indexOf("<!--PRODBIGIMG");
					if (prodCartBigImgTagStart != -1) {
						var prodCartBigImgTagEnd = prodCartHTML.indexOf(">",prodCartBigImgTagStart);
						var prodCartBigImgTagStrip = prodCartHTML.substring(prodCartBigImgTagStart,(prodCartBigImgTagEnd+1));
						var baseProdCartBigImgHTMLStart = prodCartHTML.substr(0,prodCartBigImgTagStart);
						var baseProdCartBigImgHTMLEnd = prodCartHTML.substr((prodCartBigImgTagEnd+1));
						prodCartHTML = baseProdCartBigImgHTMLStart + "<img title=\"" + prodDisplayArray[x][2] + "\" alt=\"" + prodDisplayArray[x][2] + "\" id='panel2ProdCartBigImg" + prodDisplayArray[x][0] + "' class='panel_2_prod_cart_bigimg' src='" + clientImgBase + prodDisplayArray[x][4] + "'>" + baseProdCartBigImgHTMLEnd;
					}
					var prodCartSmImgTagStart = prodCartHTML.indexOf("<!--PRODSMIMG");
					if (prodCartSmImgTagStart != -1) {
						var prodCartSmImgTagEnd = prodCartHTML.indexOf(">",prodCartSmImgTagStart);
						var prodCartSmImgTagStrip = prodCartHTML.substring(prodCartSmImgTagStart,(prodCartSmImgTagEnd+1));
						var baseProdCartSmImgHTMLStart = prodCartHTML.substr(0,prodCartSmImgTagStart);
						var baseProdCartSmImgHTMLEnd = prodCartHTML.substr((prodCartSmImgTagEnd+1));
						prodCartHTML = baseProdCartSmImgHTMLStart + "<img title=\"" + prodDisplayArray[x][2] + "\" alt=\"" + prodDisplayArray[x][2] + "\" id='panel2ProdCartSmImg" + prodDisplayArray[x][0] + "' class='panel_2_prod_cart_smimg' src='" + clientImgBase + prodDisplayArray[x][5] + "'>" + baseProdCartSmImgHTMLEnd;
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
						removeButtonRender += "<div id='panel2ProdCartRemoveButton" + prodCartArray[y] + "' class='panel_2_prod_cart_remove_button panel_2_prod_cart_remove_button_off'";
						if (hoverState==1) {
							removeButtonRender += " onmouseover='panel2ButtonHover(\"panel2ProdCartRemoveButton" + prodCartArray[y] + "\",\"panel_2_prod_cart_remove_button\",1);' onfocus='panel2ButtonHover(\"panel2ProdCartRemoveButton" + prodCartArray[y] + "\",\"panel_2_prod_cart_remove_button\",1);' onmouseout='panel2ButtonHover(\"panel2ProdCartRemoveButton" + prodCartArray[y] + "\",\"panel_2_prod_cart_remove_button\",0);' onblur='panel2ButtonHover(\"panel2ProdCartRemoveButton" + prodCartArray[y] + "\",\"panel_2_prod_cart_remove_button\",0);'";
						}
						removeButtonRender += " onclick='panel2ProdCartRemove(" + prodCartArray[y] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2ProdCartRemove(" + prodCartArray[y] + ");}' tabindex='0' title=\"Remove From Cart\">" + removeButtonItalicVar + removeButtonValueVar + "<\/div>";
						prodCartHTML = removeButtonHTMLStart + removeButtonRender + removeButtonHTMLEnd;
					}
				}
			}
			writeHTML += prodCartHTML;
		}
		var prodCartFootHTML = autotextIt(p2TemplateSet.panel2ProductCartFoot,"panel2ProductCartFoot");
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
					clearButtonRender += "<div id='panel2ProdCartClearButton' class='panel_2_prod_cart_clear_button panel_2_prod_cart_clear_button_off'";
					if (hoverState==1) {
						clearButtonRender += " onmouseover='panel2ButtonHover(\"panel2ProdCartClearButton\", \"panel_2_prod_cart_clear_button\", 1);' onfocus='panel2ButtonHover(\"panel2ProdCartClearButton\", \"panel_2_prod_cart_clear_button\", 1);' onmouseout='panel2ButtonHover(\"panel2ProdCartClearButton\", \"panel_2_prod_cart_clear_button\", 0);' onblur='panel2ButtonHover(\"panel2ProdCartClearButton\", \"panel_2_prod_cart_clear_button\", 0);'";
					}
					clearButtonRender += " onclick='panel2ProdCartRemove();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2ProdCartRemove();}' tabindex='0' title=\"Remove From Cart\">" + clearButtonItalicVar + clearButtonValueVar + "<\/div>";
					prodCartFootHTML = clearButtonHTMLStart + clearButtonRender + clearButtonHTMLEnd;
				}
				else {
					prodCartFootHTML = clearButtonHTMLStart + clearButtonHTMLEnd;
				}
			}
			writeHTML += prodCartFootHTML;
		}
		document.getElementById('panel2ProdShopCartShell').innerHTML = writeHTML;
		if (document.getElementById('panel2ProdCountNum')) {
			if (prodCartArray.length == 0 || prodCartArray.length == prodDisplayArray.length) {
				document.getElementById('panel2ProdCountNum').innerHTML =  "All";
			}
			else {
				document.getElementById('panel2ProdCountNum').innerHTML = prodCartArray.length;
			}
		}
		if (document.getElementById('panel2CountProdNum')) {
			if (prodCartArray.length == 0 || prodCartArray.length == prodDisplayArray.length) {
				document.getElementById('panel2CountProdNum').innerHTML =  "All";
			}
			else {
				document.getElementById('panel2CountProdNum').innerHTML = prodCartArray.length;
			}
		}
		if (document.getElementById("panel2SelProdText")) {
			if (prodCartArray.length == 1) {
				document.getElementById("panel2SelProdText").innerHTML = p2selProdSingularVar;
			}
			else {
				document.getElementById("panel2SelProdText").innerHTML = p2selProdPluralVar;
			}
		}
		$('.panel_2_prodlist_cat_badge').hide();
		if (cartCatBadgeArr.length) {
			for (j=0; j<cartCatBadgeArr.length; j++) {
				if (document.getElementById('panel2ProdlistCatBadge'+cartCatBadgeArr[j][0])) {
					document.getElementById('panel2ProdlistCatBadge'+cartCatBadgeArr[j][0]).innerHTML = cartCatBadgeArr[j][1];
					$('#panel2ProdlistCatBadge'+cartCatBadgeArr[j][0]).show();
				}
			}
		}
	}
}
function panel2ProdCartRemove(whatID) {
		if(gLog==1){console.log("panel2ProdCartRemove",whatID);}
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
						$(".panel_2_product_big_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
						$(".panel_2_product_big_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_2_product_big_img_div_back_off');
						$(".panel_2_product_big_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_2_product_big_img_div_back_on');
					}
					if (document.getElementById('panel2ProductSmImgDivBack'+prodDisplayArray[x][0])) {
						$(".panel_2_product_sm_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
						$(".panel_2_product_sm_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_2_product_sm_img_div_back_off');
						$(".panel_2_product_sm_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_2_product_sm_img_div_back_on');
					}
				}
				else if (FIRE == 1) {
					for (goesOut=0;goesOut<catArray.length;goesOut++) {
						if (catArray[goesOut][0] == prodDisplayArray[x][8] && catArray[goesOut][6] == 1) {
							if (document.getElementById('panel2ProductBigImgDivBack'+prodDisplayArray[x][0])) {
								$(".panel_2_product_big_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
								$(".panel_2_product_big_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_2_product_big_img_div_back_off');
								$(".panel_2_product_big_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_2_product_big_img_div_back_on');
							}
							if (document.getElementById('panel2ProductSmImgDivBack'+prodDisplayArray[x][0])) {
								$(".panel_2_product_sm_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
								$(".panel_2_product_sm_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_2_product_sm_img_div_back_off');
								$(".panel_2_product_sm_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_2_product_sm_img_div_back_on');
							}
							break;
						}
					}
				}
				$('#panel2CartButton'+prodDisplayArray[x][0]).removeClass('panel_2_cart_button_hover');
				$('#panel2CartButton'+prodDisplayArray[x][0]).removeClass('panel_2_cart_button_on');
				$('#panel2CartButton'+prodDisplayArray[x][0]).addClass('panel_2_cart_button_off');
				$('.panel_2_multiFilter_l3_prodname_'+prodDisplayArray[x][0]).removeClass('panel_2_multiFilter_l3_prodname_hover');
				$('.panel_2_multiFilter_l3_prodname_'+prodDisplayArray[x][0]).removeClass('panel_2_multiFilter_l3_prodname_on');
				$('.panel_2_multiFilter_l3_prodname_'+prodDisplayArray[x][0]).addClass('panel_2_multiFilter_l3_prodname_off');
				$('.panel_2_multiFilter_l3_prodname_ion_'+prodDisplayArray[x][0]).hide();
				$('.panel_2_multiFilter_l3_prodname_ioff_'+prodDisplayArray[x][0]).show();
				$("#panel2ProductName" + prodDisplayArray[x][0]).removeClass("panel_2_product_name_hover");
				$("#panel2ProductName" + prodDisplayArray[x][0]).removeClass("panel_2_product_name_on");
				$("#panel2ProductName" + prodDisplayArray[x][0]).addClass("panel_2_product_name_off");
				if (document.getElementById('panel2ProductName'+prodDisplayArray[x][0])) {
					document.getElementById('panel2ProductName'+prodDisplayArray[x][0]).style.display = "block";
				}
				if (document.getElementById('panel2ProductBigImg'+prodDisplayArray[x][0])) {
					document.getElementById('panel2ProductBigImg'+prodDisplayArray[x][0]).style.display = "block";
				}
				if (document.getElementById('panel2ProductSmImg'+prodDisplayArray[x][0])) {
					document.getElementById('panel2ProductSmImg'+prodDisplayArray[x][0]).style.display = "block";
				}
				$('.panel_2_prodlist_prodshell_'+prodDisplayArray[x][0]).removeClass('panel_2_prodlist_prodshell_on');
				$('.panel_2_prodlist_prodshell_'+prodDisplayArray[x][0]).addClass('panel_2_prodlist_prodshell_off');
				if(gLog==1){console.log("panel2ProdCartRemove(" + whatID + ") ",prodDisplayArray[x][17],p2PLFamSort);}
				if (prodDisplayArray[x][17] == p2PLFamSort) {
					var j = document.getElementsByClassName('panel_2_prodlist_prodshell_'+prodDisplayArray[x][0]);
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
			if (document.getElementById('panel2CategoryBigImgDivBack'+prodDisplayArray[x][0])) {
				$(".panel_2_category_big_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
				$(".panel_2_category_big_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_2_category_big_img_div_back_on');
				$(".panel_2_category_big_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_2_category_big_img_div_back_off');
			}
			if (document.getElementById('panel2CategorySmImgDivBack'+prodDisplayArray[x][0])) {
				$(".panel_2_category_sm_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
				$(".panel_2_category_sm_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_2_category_sm_img_div_back_on');
				$(".panel_2_category_sm_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_2_category_sm_img_div_back_off');
			}
			if (document.getElementById('panel2ProductBigImgDivBack'+prodDisplayArray[x][0])) {
				$(".panel_2_product_big_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
				$(".panel_2_product_big_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_2_product_big_img_div_back_off');
				$(".panel_2_product_big_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_2_product_big_img_div_back_on');
			}
			if (document.getElementById('panel2ProductSmImgDivBack'+prodDisplayArray[x][0])) {
				$(".panel_2_product_sm_img_div_over_"+prodDisplayArray[x][0]).fadeOut(50);
				$(".panel_2_product_sm_img_div_back_"+prodDisplayArray[x][0]).addClass('panel_2_product_sm_img_div_back_off');
				$(".panel_2_product_sm_img_div_back_"+prodDisplayArray[x][0]).removeClass('panel_2_product_sm_img_div_back_on');
			}
			$('#panel2CartButton'+prodDisplayArray[x][0]).removeClass('panel_2_cart_button_hover');
			$('#panel2CartButton'+prodDisplayArray[x][0]).removeClass('panel_2_cart_button_on');
			$('#panel2CartButton'+prodDisplayArray[x][0]).addClass('panel_2_cart_button_off');
			$('.panel_2_multiFilter_l3_prodname_'+prodDisplayArray[x][0]).removeClass('panel_2_multiFilter_l3_prodname_hover');
			$('.panel_2_multiFilter_l3_prodname_'+prodDisplayArray[x][0]).removeClass('panel_2_multiFilter_l3_prodname_on');
			$('.panel_2_multiFilter_l3_prodname_'+prodDisplayArray[x][0]).addClass('panel_2_multiFilter_l3_prodname_off');
			$('.panel_2_multiFilter_l3_prodname_ion_'+prodDisplayArray[x][0]).hide();
			$('.panel_2_multiFilter_l3_prodname_ioff_'+prodDisplayArray[x][0]).show();
			$("#panel2ProductName" + prodDisplayArray[x][0]).removeClass("panel_2_product_name_hover");
			$("#panel2ProductName" + prodDisplayArray[x][0]).removeClass("panel_2_product_name_on");
			$("#panel2ProductName" + prodDisplayArray[x][0]).addClass("panel_2_product_name_off");
			$('.panel_2_prodlist_prodshell_'+prodDisplayArray[x][0]).removeClass('panel_2_prodlist_prodshell_on');
			$('.panel_2_prodlist_prodshell_'+prodDisplayArray[x][0]).addClass('panel_2_prodlist_prodshell_off');
			if(gLog==1){console.log("panel2ProdCartRemove(" + whatID + ") ",prodDisplayArray[x][17],p2PLFamSort);}
			if (document.getElementById('panel2ProductName'+prodDisplayArray[x][0])) {
				document.getElementById('panel2ProductName'+prodDisplayArray[x][0]).style.display = "block";
			}
			if (document.getElementById('panel2ProductBigImg'+prodDisplayArray[x][0])) {
				document.getElementById('panel2ProductBigImg'+prodDisplayArray[x][0]).style.display = "block";
			}
			if (document.getElementById('panel2ProductSmImg'+prodDisplayArray[x][0])) {
				document.getElementById('panel2ProductSmImg'+prodDisplayArray[x][0]).style.display = "block";
			}
			if (prodDisplayArray[x][17] == p2PLFamSort) {
				var j = document.getElementsByClassName('panel_2_prodlist_prodshell_'+prodDisplayArray[x][0]);
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
	if (panel2ProductFilter == 1) {
		if(gLog==1){console.log("Prod Cart Remove P2");}
		panel2Load("panel2");
	}
	panel2WriteProdCart();
	panel3WriteProdCart();
}
function panel2FamCatProdOpen(famVar) {
	if (whatPLF2 != -1) {
		$(".panel_2_family_category_shell_"+famArray[whatPLF2][0]).slideUp(200);
	}
	if (famVar == whatPLF2) {
		whatPLF2 = -1;
	}
	else {
		$(".panel_2_family_category_shell_"+famArray[famVar][0]).slideDown(200);
		whatPLF2 = famVar;
	}
	$(".panel_2_family_category_product_shell").slideUp(200);
	whatPLFC2 = -1;
}
function panel2CatProdOpen(catVar) {
	if (whatPLFC2 != -1) {
		$(".panel_2_family_category_product_shell_"+catArray[whatPLFC2][0]).slideUp(200);
	}
	if (catVar == whatPLFC2) {
		whatPLFC2 = -1;
	}
	else {
		$(".panel_2_family_category_product_shell_"+catArray[catVar][0]).slideDown(200);
		whatPLFC2 = catVar;
	}
}
function panel2FamMouseOver (famVar) {
	if (document.getElementById('panel2FamilyName'+famArray[famVar][0])) {
		if (famArray[famVar][5] == 0) {
			$('#panel2FamilyName'+famArray[famVar][0]).removeClass('panel_2_family_name_off');
			$('#panel2FamilyName'+famArray[famVar][0]).addClass('panel_2_family_name_hover');
			$('#panel2FamilyName'+famArray[famVar][0]+'All').removeClass('panel_2_family_name_all_off');
			$('#panel2FamilyName'+famArray[famVar][0]+'All').addClass('panel_2_family_name_all_hover');
		}
		else {
			$('#panel2FamilyName'+famArray[famVar][0]).removeClass('panel_2_family_name_on');
			$('#panel2FamilyName'+famArray[famVar][0]).addClass('panel_2_family_name_hover');
			$('#panel2FamilyName'+famArray[famVar][0]+'All').removeClass('panel_2_family_name_all_on');
			$('#panel2FamilyName'+famArray[famVar][0]+'All').addClass('panel_2_family_name_all_hover');
		}
	}
}
function panel2FamMouseOut (famVar) {
	if (document.getElementById('panel2FamilyName'+famArray[famVar][0])) {
		if (famArray[famVar][5] == 0) {
			$('#panel2FamilyName'+famArray[famVar][0]).removeClass('panel_2_family_name_hover');
			$('#panel2FamilyName'+famArray[famVar][0]).addClass('panel_2_family_name_off');
			$('#panel2FamilyName'+famArray[famVar][0]+'All').removeClass('panel_2_family_name_all_hover');
			$('#panel2FamilyName'+famArray[famVar][0]+'All').addClass('panel_2_family_name_all_off');
		}
		else {
			$('#panel2FamilyName'+famArray[famVar][0]).removeClass('panel_2_family_name_hover');
			$('#panel2FamilyName'+famArray[famVar][0]).addClass('panel_2_family_name_on');
			$('#panel2FamilyName'+famArray[famVar][0]+'All').removeClass('panel_2_family_name_all_hover');
			$('#panel2FamilyName'+famArray[famVar][0]+'All').addClass('panel_2_family_name_all_on');
		}
	}
}
function panel2CatMouseOver (catVar) {
	if (document.getElementById('panel2CategoryName'+catArray[catVar][0])) {
		$('#panel2CategoryName'+catArray[catVar][0]).removeClass('panel_2_category_name_off');
		$('#panel2CategoryName'+catArray[catVar][0]).removeClass('panel_2_category_name_on');
		$('#panel2CategoryName'+catArray[catVar][0]).addClass('panel_2_category_name_hover');
		$('#panel2CategoryName'+catArray[catVar][0]+'All').removeClass('panel_2_category_name_all_off');
		$('#panel2CategoryName'+catArray[catVar][0]+'All').removeClass('panel_2_category_name_all_on');
		$('#panel2CategoryName'+catArray[catVar][0]+'All').addClass('panel_2_category_name_all_hover');
	}
}
function panel2CatMouseOut (catVar) {
	if (document.getElementById('panel2CategoryName'+catArray[catVar][0])) {
		$('#panel2CategoryName'+catArray[catVar][0]).removeClass('panel_2_category_name_hover');
		$('#panel2CategoryName'+catArray[catVar][0]+'All').removeClass('panel_2_category_name_all_hover');
		var allCatOn = 1;
		for (q=0; q<catArray.length; q++) {
			if (catArray[q][6] == 0) {
				allCatOn = 0;
				break;
			}
		}
		if (catArray[catVar][6] == 0 || allCatOn == 1) {
			$('#panel2CategoryName'+catArray[catVar][0]).addClass('panel_2_category_name_off');
			$('#panel2CategoryName'+catArray[catVar][0]+'All').addClass('panel_2_category_name_all_off');
		}
		else {
			$('#panel2CategoryName'+catArray[catVar][0]).addClass('panel_2_category_name_on');
			$('#panel2CategoryName'+catArray[catVar][0]+'All').addClass('panel_2_category_name_all_on');
		}
	}
}
function panel2LabelMouseOver (labelVar) {
	if (document.getElementById('panel2LabelName'+labelArray[labelVar][0])) {
		if (labelArray[labelVar][3] == 0) {
			$('#panel2LabelName'+labelArray[labelVar][0]).removeClass('panel_2_label_name_off');
			$('#panel2LabelName'+labelArray[labelVar][0]).addClass('panel_2_label_name_hover');
			$('#panel2LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_2_label_name_all_off');
			$('#panel2LabelName'+labelArray[labelVar][0]+'All').addClass('panel_2_label_name_all_hover');
		}
		else {
			$('#panel2LabelName'+labelArray[labelVar][0]).removeClass('panel_2_label_name_on');
			$('#panel2LabelName'+labelArray[labelVar][0]).addClass('panel_2_label_name_hover');
			$('#panel2LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_2_label_name_all_on');
			$('#panel2LabelName'+labelArray[labelVar][0]+'All').addClass('panel_2_label_name_all_hover');
		}
	}
}
function panel2LabelMouseOut (labelVar) {
	if (document.getElementById('panel2LabelName'+labelArray[labelVar][0])) {
		if (labelArray[labelVar][3] == 0) {
			$('#panel2LabelName'+labelArray[labelVar][0]).removeClass('panel_2_label_name_hover');
			$('#panel2LabelName'+labelArray[labelVar][0]).addClass('panel_2_label_name_off');
			$('#panel2LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_2_label_name_all_hover');
			$('#panel2LabelName'+labelArray[labelVar][0]+'All').addClass('panel_2_label_name_all_off');
		}
		else {
			$('#panel2LabelName'+labelArray[labelVar][0]).removeClass('panel_2_label_name_hover');
			$('#panel2LabelName'+labelArray[labelVar][0]).addClass('panel_2_label_name_on');
			$('#panel2LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_2_label_name_all_hover');
			$('#panel2LabelName'+labelArray[labelVar][0]+'All').addClass('panel_2_label_name_all_on');
		}
	}
}
function panel2SelectFam(famVar,famID,famString,showHide) {
	p2PLFamSort = famArray[famVar][0];
	$('.panel_2_prodlist_famreset').removeClass('panel_2_prodlist_famreset_on');
	$('.panel_2_prodlist_famreset').removeClass('panel_2_prodlist_famreset_hover');
	$('.panel_2_prodlist_famreset').addClass('panel_2_prodlist_famreset_off');
	whatStoreUp = 0;
	var whatFamSet = 0;
	if (document.getElementById(famID)) {
		for (y=0; y<famArray.length; y++) {
			if (famVar == y && famArray[famVar][5] == 0) {
				$('#panel2FamilyName'+famArray[famVar][0]).removeClass('panel_2_family_name_hover');
				$('#panel2FamilyName'+famArray[famVar][0]).removeClass('panel_2_family_name_off');
				$('#panel2FamilyName'+famArray[famVar][0]).addClass('panel_2_family_name_on');
				$('#panel2FamilyName'+famArray[famVar][0]+'All').removeClass('panel_2_family_name_all_hover');
				$('#panel2FamilyName'+famArray[famVar][0]+'All').removeClass('panel_2_family_name_all_off');
				$('#panel2FamilyName'+famArray[famVar][0]+'All').addClass('panel_2_family_name_all_on');
				$('.panel_2_prodlist_famshell_'+famArray[famVar][0]).removeClass('panel_2_prodlist_famshell_off');
				$('.panel_2_prodlist_famshell_'+famArray[famVar][0]).addClass('panel_2_prodlist_famshell_on');
				famArray[famVar][5] = "1";
				window["panel1FamilyNameVar"+famArray[famVar][0]] = 1;
				whatFamSet = 1;
			}
			else {
				$('#panel2FamilyName'+famArray[y][0]).removeClass('panel_2_family_name_hover');
				$('#panel2FamilyName'+famArray[y][0]).removeClass('panel_2_family_name_on');
				$('#panel2FamilyName'+famArray[y][0]).addClass('panel_2_family_name_off');
				$('#panel2FamilyName'+famArray[y][0]+'All').removeClass('panel_2_family_name_all_hover');
				$('#panel2FamilyName'+famArray[y][0]+'All').removeClass('panel_2_family_name_all_on');
				$('#panel2FamilyName'+famArray[y][0]+'All').addClass('panel_2_family_name_all_off');
				$('.panel_2_prodlist_famshell_'+famArray[famVar][0]).removeClass('panel_2_prodlist_famshell_on');
				$('.panel_2_prodlist_famshell_'+famArray[famVar][0]).addClass('panel_2_prodlist_famshell_off');
				famArray[y][5] = "0";
				window["panel1FamilyNameVar"+famArray[y][0]] = 0;
			}
		}
		if (showHide) {
			for (x=0;x<prodFilterArray.length;x++) {
				if (document.getElementById('panel2ProductName'+prodFilterArray[x][0])) {
					if (whatFamSet == 1) {
						var showThisOne = 1;
						for (q=0; q<prodCartArray.length; q++) {
							if (prodCartArray[q] == prodFilterArray[x][0]) {
								showThisOne = 0;
								break;
							}
						}
						if (prodFilterArray[x][17] == famArray[famVar][0] && showThisOne == 1) {
							if (document.getElementById('panel2ProductName'+prodFilterArray[x][0])) {document.getElementById('panel2ProductName'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel2ProductDesc'+prodFilterArray[x][0])) {document.getElementById('panel2ProductDesc'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel2ProductCat'+prodFilterArray[x][0])) {document.getElementById('panel2ProductCat'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel2ProductBigImg'+prodFilterArray[x][0])) {document.getElementById('panel2ProductBigImg'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel2ProductSmImg'+prodFilterArray[x][0])) {document.getElementById('panel2ProductSmImg'+prodFilterArray[x][0]).style.display = "block";}
							var j = document.getElementsByClassName('panel_2_prodlist_prodshell_'+prodFilterArray[x][0]);
							for (k=0; k<j.length; k++) {
								j[k].style.display = "block";
							}
						}
						else {
							if (document.getElementById('panel2ProductName'+prodFilterArray[x][0])) {document.getElementById('panel2ProductName'+prodFilterArray[x][0]).style.display = "none";}
							if (document.getElementById('panel2ProductDesc'+prodFilterArray[x][0])) {document.getElementById('panel2ProductDesc'+prodFilterArray[x][0]).style.display = "none";}
							if (document.getElementById('panel2ProductCat'+prodFilterArray[x][0])) {document.getElementById('panel2ProductCat'+prodFilterArray[x][0]).style.display = "none";}
							if (document.getElementById('panel2ProductBigImg'+prodFilterArray[x][0])) {document.getElementById('panel2ProductBigImg'+prodFilterArray[x][0]).style.display = "none";}
							if (document.getElementById('panel2ProductSmImg'+prodFilterArray[x][0])) {document.getElementById('panel2ProductSmImg'+prodFilterArray[x][0]).style.display = "none";}
							var j = document.getElementsByClassName('panel_2_prodlist_prodshell_'+prodFilterArray[x][0]);
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
							if (document.getElementById('panel2ProductName'+prodFilterArray[x][0])) {document.getElementById('panel2ProductName'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel2ProductDesc'+prodFilterArray[x][0])) {document.getElementById('panel2ProductDesc'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel2ProductCat'+prodFilterArray[x][0])) {document.getElementById('panel2ProductCat'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel2ProductBigImg'+prodFilterArray[x][0])) {document.getElementById('panel2ProductBigImg'+prodFilterArray[x][0]).style.display = "block";}
							if (document.getElementById('panel2ProductSmImg'+prodFilterArray[x][0])) {document.getElementById('panel2ProductSmImg'+prodFilterArray[x][0]).style.display = "block";}
							var j = document.getElementsByClassName('panel_2_prodlist_prodshell_'+prodFilterArray[x][0]);
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
						if (document.getElementById('panel2CategoryName'+catArray[c][0])) {document.getElementById('panel2CategoryName'+catArray[c][0]).style.display = "block";}
						if (document.getElementById('panel2CategoryName'+catArray[c][0]+'All')) {document.getElementById('panel2CategoryName'+catArray[c][0]+'All').style.display = "block";}
						if (document.getElementById('panel2CategoryBigImg'+catArray[c][0])) {document.getElementById('panel2CategoryBigImg'+catArray[c][0]).style.display = "block";}
						if (document.getElementById('panel2CategorySmImg'+catArray[c][0])) {document.getElementById('panel2CategorySmImg'+catArray[c][0]).style.display = "block";}
						var j = document.getElementsByClassName('panel_2_prodlist_catshell_'+catArray[c][0]);
						for (k=0; k<j.length; k++) {
							j[k].style.display = "block";
						}
					}
					else {
						if (document.getElementById('panel2CategoryName'+catArray[c][0])) {document.getElementById('panel2CategoryName'+catArray[c][0]).style.display = "none";}
						if (document.getElementById('panel2CategoryName'+catArray[c][0]+'All')) {document.getElementById('panel2CategoryName'+catArray[c][0]+'All').style.display = "none";}
						if (document.getElementById('panel2CategoryBigImg'+catArray[c][0])) {document.getElementById('panel2CategoryBigImg'+catArray[c][0]).style.display = "none";}
						if (document.getElementById('panel2CategorySmImg'+catArray[c][0])) {document.getElementById('panel2CategorySmImg'+catArray[c][0]).style.display = "none";}
						var j = document.getElementsByClassName('panel_2_prodlist_catshell_'+catArray[c][0]);
						for (k=0; k<j.length; k++) {
							j[k].style.display = "none";
						}
					}
				}
				else {
					if (document.getElementById('panel2CategoryName'+catArray[c][0])) {document.getElementById('panel2CategoryName'+catArray[c][0]).style.display = "block";}
					if (document.getElementById('panel2CategoryName'+catArray[c][0]+'All')) {document.getElementById('panel2CategoryName'+catArray[c][0]+'All').style.display = "block";}
					if (document.getElementById('panel2CategoryBigImg'+catArray[c][0])) {document.getElementById('panel2CategoryBigImg'+catArray[c][0]).style.display = "block";}
					if (document.getElementById('panel2CategorySmImg'+catArray[c][0])) {document.getElementById('panel2CategorySmImg'+catArray[c][0]).style.display = "block";}
					var j = document.getElementsByClassName('panel_2_prodlist_catshell_'+catArray[c][0]);
					for (k=0; k<j.length; k++) {
						j[k].style.display = "block";
					}
				}
			}
		}
		if (document.getElementById('panel2ProdShopCartShell')) {
			panel2WriteProdCart();
			panel3WriteProdCart();
		}
	}
}
function panel2SelectCat(catVar,catID,catString,showHide) {
	$('.panel_2_prodlist_catreset').removeClass('panel_2_prodlist_catreset_on');
	$('.panel_2_prodlist_catreset').removeClass('panel_2_prodlist_catreset_hover');
	$('.panel_2_prodlist_catreset').addClass('panel_2_prodlist_catreset_off');
	whatStoreUp = 0;
	var allCatOn = 1;
	for (q=0; q<catArray.length; q++) {
		if (catArray[q][6] == 0) {
			allCatOn = 0;
			break;
		}
	}
	if (allCatOn == 1) {
		for (q=0; q<catArray.length; q++) {
			catArray[q][6] = 0;
		}
	}
	if(gLog==1){console.log("panel2SelectCat - prodFilterArray.length = ", prodFilterArray.length);}
	if (document.getElementById(catID)) {
		if (catArray[catVar][6] == 0) {
			if(gLog==1){console.log("panel2SelectCat - catArray[" + catVar + "][6] == 0");}
			$('#panel2CategoryName'+catArray[catVar][0]).removeClass('panel_2_category_name_hover');
			$('#panel2CategoryName'+catArray[catVar][0]).removeClass('panel_2_category_name_off');
			$('#panel2CategoryName'+catArray[catVar][0]).addClass('panel_2_category_name_on');
			$('#panel2CategoryName'+catArray[catVar][0]+'All').removeClass('panel_2_category_name_all_hover');
			$('#panel2CategoryName'+catArray[catVar][0]+'All').removeClass('panel_2_category_name_all_off');
			$('#panel2CategoryName'+catArray[catVar][0]+'All').addClass('panel_2_category_name_all_on');
			$('.panel_2_prodlist_catshell_'+catArray[catVar][0]).removeClass('panel_2_prodlist_catshell_off');
			$('.panel_2_prodlist_catshell_'+catArray[catVar][0]).addClass('panel_2_prodlist_catshell_on');
			catArray[catVar][6] = 1;
			window["panel1CategoryNameVar"+catArray[catVar][0]] = 1;
			for (q=0;q<prodFilterArray.length;q++) {
				if (!showHide) {
					if (prodFilterArray[q][8] == catArray[catVar][0]) {
						$('#panel2ProductName'+prodFilterArray[q][0]).removeClass('panel_2_product_name_hover');
						$('#panel2ProductName'+prodFilterArray[q][0]).removeClass('panel_2_product_name_off');
						$('#panel2ProductName'+prodFilterArray[q][0]).addClass('panel_2_product_name_on');
						$('.panel_2_prodlist_prodshell_'+prodFilterArray[q][0]).removeClass('panel_2_prodlist_prodshell_off');
						$('.panel_2_prodlist_prodshell_'+prodFilterArray[q][0]).addClass('panel_2_prodlist_prodshell_on');
						prodFilterArray[q][9] = 1;
						if(gLog==1){console.log("panel2SelectCat - prodFilterArray[" + q + "][9] = 1");}
					}
				}
			}
		}
		else {
			if(gLog==1){console.log("panel2SelectCat - catArray[" + catVar + "][6] == 1");}
			$('#panel2CategoryName'+catArray[catVar][0]).removeClass('panel_2_category_name_hover');
			$('#panel2CategoryName'+catArray[catVar][0]).removeClass('panel_2_category_name_on');
			$('#panel2CategoryName'+catArray[catVar][0]).addClass('panel_2_category_name_off');
			$('#panel2CategoryName'+catArray[catVar][0]+'All').removeClass('panel_2_category_name_all_hover');
			$('#panel2CategoryName'+catArray[catVar][0]+'All').removeClass('panel_2_category_name_all_on');
			$('#panel2CategoryName'+catArray[catVar][0]+'All').addClass('panel_2_category_name_all_off');
			$('.panel_2_prodlist_catshell_'+catArray[catVar][0]).removeClass('panel_2_prodlist_catshell_on');
			$('.panel_2_prodlist_catshell_'+catArray[catVar][0]).addClass('panel_2_prodlist_catshell_off');
			catArray[catVar][6] = 0;
			window["panel1CategoryNameVar"+catArray[catVar][0]] = 0;
			for (q=0;q<prodFilterArray.length;q++) {
				if (!showHide) {
					if (prodFilterArray[q][8] == catArray[catVar][0]) {
						$('#panel2ProductName'+prodFilterArray[q][0]).removeClass('panel_2_product_name_hover');
						$('#panel2ProductName'+prodFilterArray[q][0]).removeClass('panel_2_product_name_on');
						$('#panel2ProductName'+prodFilterArray[q][0]).addClass('panel_2_product_name_off');
						$('.panel_2_prodlist_prodshell_'+prodFilterArray[q][0]).removeClass('panel_2_prodlist_prodshell_on');
						$('.panel_2_prodlist_prodshell_'+prodFilterArray[q][0]).addClass('panel_2_prodlist_prodshell_off');
						prodFilterArray[q][9] = 0;
						if(gLog==1){console.log("panel2SelectCat - prodFilterArray[" + q + "][9] = 0");}
					}
				}
			}
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
			if(gLog==1){console.log("panel2SelectCat - PROD", document.getElementById('PROD').value);}
		if (panel2ProductFilter == 1) {
			if(gLog==1){console.log("panel2SelectCat - panel2ProductFilter == 1");}
			panel2Load("panel2");
		}
		else if (panel2ProductFilterSub == 1) {
			if(gLog==1){console.log("panel2SelectCat - panel2ProductFilterSub == 1");}
			p2Connect();
		}
		if (panel2ProductExclude == 1) {
			if(gLog==1){console.log("panel2SelectCat - panel2ProductExclude == 1");}
			for (j=0;j<catArray.length;j++) {
				if (j != catVar) {
					$('#panel2CategoryName'+catArray[j][0]).removeClass('panel_2_category_name_hover');
					$('#panel2CategoryName'+catArray[j][0]).removeClass('panel_2_category_name_on');
					$('#panel2CategoryName'+catArray[j][0]).addClass('panel_2_category_name_off');
					$('#panel2CategoryName'+catArray[j][0]+'All').removeClass('panel_2_category_name_all_hover');
					$('#panel2CategoryName'+catArray[j][0]+'All').removeClass('panel_2_category_name_all_on');
					$('#panel2CategoryName'+catArray[j][0]+'All').addClass('panel_2_category_name_all_off');
					$('.panel_2_prodlist_catshell_'+catArray[catVar][0]).removeClass('panel_2_prodlist_catshell_on');
					$('.panel_2_prodlist_catshell_'+catArray[catVar][0]).addClass('panel_2_prodlist_catshell_off');
					catArray[j][6] = 0;
					window["panel1CategoryNameVar"+catArray[j][0]] = 0;
				}
			}
		}
		if (showHide) {
			if(gLog==1){console.log("panel2SelectCat - showHide");}
			var showAllProd = 1;
			panel2CatListCount = 0;
			for (x=0;x<catArray.length;x++) {
				if (catArray[x][6] == 1) {
					showAllProd = 0;
					panel2CatListCount++;
				}
			}
			if (showAllProd == 1) {
				panel2CatListCount = catArray.length;
			}
			for (x=0;x<prodFilterArray.length;x++) {
				for (y=0;y<catArray.length;y++) {
					if (prodFilterArray[x][8] == catArray[y][0]) {
						if ((catArray[y][6] == "1" || showAllProd == 1) && document.getElementById('panel2ProductName'+prodFilterArray[x][0])) {
							if (prodFilterArray[x][9] == 1 && panel2ProductHideprod == 1) {
								var j = document.getElementsByClassName('panel_2_prodlist_prodshell_'+prodFilterArray[x][0]);
								for (k=0; k<j.length; k++) {
									j[k].style.display = "none";
								}
							}
							else{
								var j = document.getElementsByClassName('panel_2_prodlist_prodshell_'+prodFilterArray[x][0]);
								for (k=0; k<j.length; k++) {
									j[k].style.display = "block";
								}
							}
						}
						else if (document.getElementById('panel2ProductName'+prodFilterArray[x][0])) {
							var j = document.getElementsByClassName('panel_2_prodlist_prodshell_'+prodFilterArray[x][0]);
							for (k=0; k<j.length; k++) {
								j[k].style.display = "none";
							}
						}
						break;
					}
				}
			}
			if (document.getElementById('panel2CatListNum')) {
				document.getElementById('panel2CatListNum').innerHTML = panel2CatListCount;
			}
			if (document.getElementById('panel2CatListProdNum')) {
				document.getElementById('panel2CatListProdNum').innerHTML = panel2CatListProdCount
			}
		}
		if (document.getElementById('panel2ProdShopCartShell')) {
			if(gLog==1){console.log("panel2SelectCat - panel2ProdShopCartShell");}
			panel2WriteProdCart();
			panel3WriteProdCart();
		}
	}
}
function panel2SelectLabel(labelVar,labelID,labelString,showHide) {
	if(gLog==1){console.log("panel2SelectLabel START");}
	$('.panel_2_prodlist_catreset').removeClass('panel_2_prodlist_catreset_on');
	$('.panel_2_prodlist_catreset').removeClass('panel_2_prodlist_catreset_hover');
	$('.panel_2_prodlist_catreset').addClass('panel_2_prodlist_catreset_off');
	whatStoreUp = 0;
	if (document.getElementById(labelID)) {
		if(gLog==1){console.log("panel2SelectLabel labelID");}
		if (labelArray[labelVar][3] == 0) {
			$('#panel2LabelName'+labelArray[labelVar][0]).removeClass('panel_2_label_name_hover');
			$('#panel2LabelName'+labelArray[labelVar][0]).removeClass('panel_2_label_name_off');
			$('#panel2LabelName'+labelArray[labelVar][0]).addClass('panel_2_label_name_on');
			$('#panel2LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_2_label_name_all_hover');
			$('#panel2LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_2_label_name_all_off');
			$('#panel2LabelName'+labelArray[labelVar][0]+'All').addClass('panel_2_label_name_all_on');
			$('.panel_2_prodlist_labelshell_'+labelArray[labelVar][0]).removeClass('panel_2_prodlist_labelshell_off');
			$('.panel_2_prodlist_labelshell_'+labelArray[labelVar][0]).addClass('panel_2_prodlist_labelshell_on');
			labelArray[labelVar][3] = "1";
		}
		else {
			$('#panel2LabelName'+labelArray[labelVar][0]).removeClass('panel_2_label_name_hover');
			$('#panel2LabelName'+labelArray[labelVar][0]).removeClass('panel_2_label_name_on');
			$('#panel2LabelName'+labelArray[labelVar][0]).addClass('panel_2_label_name_off');
			$('#panel2LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_2_label_name_all_hover');
			$('#panel2LabelName'+labelArray[labelVar][0]+'All').removeClass('panel_2_label_name_all_on');
			$('#panel2LabelName'+labelArray[labelVar][0]+'All').addClass('panel_2_label_name_all_off');
			$('.panel_2_prodlist_labelshell_'+labelArray[labelVar][0]).removeClass('panel_2_prodlist_labelshell_on');
			$('.panel_2_prodlist_labelshell_'+labelArray[labelVar][0]).addClass('panel_2_prodlist_labelshell_off');
			labelArray[labelVar][3] = "0";
		}
		if (panel2ProductExclude == 1) {
			for (j=0;j<labelArray.length;j++) {
				if (j != labelVar) {
					$('#panel2LabelName'+labelArray[j][0]).removeClass('panel_2_label_name_hover');
					$('#panel2LabelName'+labelArray[j][0]).removeClass('panel_2_label_name_on');
					$('#panel2LabelName'+labelArray[j][0]).addClass('panel_2_label_name_off');
					$('#panel2LabelName'+labelArray[j][0]+'All').removeClass('panel_2_label_name_all_hover');
					$('#panel2LabelName'+labelArray[j][0]+'All').removeClass('panel_2_label_name_all_on');
					$('#panel2LabelName'+labelArray[j][0]+'All').addClass('panel_2_label_name_all_off');
					$('.panel_2_prodlist_labelshell_'+labelArray[labelVar][0]).removeClass('panel_2_prodlist_labelshell_off');
					$('.panel_2_prodlist_labelshell_'+labelArray[labelVar][0]).addClass('panel_2_prodlist_labelshell_on');
					labelArray[j][3] = "0";
				}
			}
		}
		if (showHide) {
			var showAllProd = 1;
			panel2LabelListCount = 0;
			for (x=0;x<labelArray.length;x++) {
				if (labelArray[x][3] == 1) {
					showAllProd = 0;
					panel2LabelListCount++;
				}
			}
			if (showAllProd == 1) {
				panel2LabelListCount = labelArray.length;
			}
			var subLabelArr = [];
			for (l=0; l<prodLabelArray.length; l++) {
				if (prodLabelArray[l][2] == labelArray[labelVar][0]) {
					subLabelArr.push(prodLabelArray[l][1]);
				}
			}
			if(gLog==1){console.log("panel2SelectLabel showHide ", subLabelArr.toString());}
			for (x=0;x<prodFilterArray.length;x++) {
				if (document.getElementById('panel2ProductName'+prodFilterArray[x][0])) {
					var j = document.getElementsByClassName('panel_2_prodlist_prodshell_'+prodFilterArray[x][0]);
					for (k=0; k<j.length; k++) {
						j[k].style.display = "none";
					}
				}
				for (y=0;y<subLabelArr.length;y++) {
					if (prodFilterArray[x][0] == subLabelArr[y]) {
						if (document.getElementById('panel2ProductName'+prodFilterArray[x][0])) {
							var j = document.getElementsByClassName('panel_2_prodlist_prodshell_'+prodFilterArray[x][0]);
							for (k=0; k<j.length; k++) {
								j[k].style.display = "block";
							}
						}
						break;
					}
				}
			}
			if (document.getElementById('panel2LabelListNum')) {
				document.getElementById('panel2LabelListNum').innerHTML = panel2LabelListCount;
			}
			if (document.getElementById('panel2LabelListProdNum')) {
				document.getElementById('panel2LabelListProdNum').innerHTML = panel2LabelListProdCount
			}
		}
	}
}
function panel2ProdMouseOver (prodID, prodStr, prodVar) {
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
function panel2ProdMouseOut (prodID, prodStr, prodVar) {
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
function panel2ProdSelect(prodSQLID, prodSKU, prodID, prodStr, prodVar) {
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
			$('.panel_2_prodlist_prodshell_'+prodFilterArray[prodVar][0]).removeClass('panel_2_prodlist_prodshell_off');
			$('.panel_2_prodlist_prodshell_'+prodFilterArray[prodVar][0]).addClass('panel_2_prodlist_prodshell_on');
			prodFilterArray[prodVar][9] = "1";
		}
		else {
			$('#'+prodID).removeClass(prodStr+'_hover');
			$('#'+prodID).removeClass(prodStr+'_on');
			$('#'+prodID).addClass(prodStr+'_off');
			$('.panel_2_prodlist_prodshell_'+prodFilterArray[prodVar][0]).removeClass('panel_2_prodlist_prodshell_on');
			$('.panel_2_prodlist_prodshell_'+prodFilterArray[prodVar][0]).addClass('panel_2_prodlist_prodshell_off');
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
		if (panel2ProductFilter == 1) {
			if(gLog==1){console.log("Product Select P2");}
			panel2Load("panel2");
		}
	}
	if (document.getElementById('panel2ProdShopCartShell')) {
		if (panel2ProductHideprod == 1) {
			document.getElementById(prodID).style.display = "none";
			var j = document.getElementsByClassName('panel_2_prodlist_prodshell_'+prodFilterArray[prodVar][0]);
			for (k=0; k<j.length; k++) {
				j[k].style.display = "none";
			}
		}
		panel2WriteProdCart();
		panel3WriteProdCart();
	}
}
function panel2FindKeypress(e,addField,result) {
	var key;
	if(window.event) {key = window.event.keyCode;}
	else {key = e.which;}
	if(key == 13){
		if (result == 1) {
			panel2FindSubmit();
		}
		return false;
	}
}
function panel2FieldKeypress(e,addField,result) {
	var key;
	if(window.event) {key = window.event.keyCode;}
	else {key = e.which;}
	if(key == 13){
		if (result == 1) {
			panel2SubmitForm();
		}
		return false;
	}
}
function panel2SubmitForm() {
	if (bmBypass == 0) {
		loaderToggle(1);
	}
	else {
		prodLoaderToggle(1);
		$(".panel_2_preload_hide").hide();
	}
	ecPos = ecPosOrig;
	bmPos = bmPosOrig;
	tabSelect = tabSelectOrig;
	bmNoRes = 0;
	ecNoRes = 0;
	whatStoreUp = 0;
	panel2PinIncr = 0;
	panel2ListIncr = 0;
	p2codeTries = 0;
	var canSubmit = 1;
	panel2SlideItUp();
	if (document.getElementById('SCFILTER').value == "" && panel2SCatPins==1) {
		if(gLog==1){console.log("panel2Scripts.php - Populate SCFILTER");}
		//document.getElementById('SCFILTER').value = storeCatArray.toString();
	}
	if (document.getElementById('panel2AddressField')) {
		if (document.getElementById('panel2AddressField').value == "" || document.getElementById('panel2AddressField').value == p2AddFieldValueVar) {
			$("#panel2AddressField").removeClass("panel_2_address_field_base");
			$("#panel2AddressField").addClass("panel_2_required_error");
			document.getElementById('street').value = "";
			canSubmit = 0;
		}
		else {
			$("#panel2AddressField").addClass("panel_2_address_field_base");
			$("#panel2AddressField").removeClass("panel_2_required_error");
			stripField('street','panel2AddressField');
		}
	}
	else {
		document.getElementById('street').value = "";
	}
	if (document.getElementById('panel2CityField')) {
		if ($("#panel2CityField").hasClass("panel_2_required") && (document.getElementById('panel2CityField').value == "" || document.getElementById('panel2CityField').value == cityFieldValueVar)) {
			$("#panel2CityField").removeClass("panel_2_city_field_base");
			$("#panel2CityField").addClass("panel_2_required_error");
			document.getElementById('city').value = "";
			canSubmit = 0;
		}
		else {
			$("#panel2CityField").addClass("panel_2_city_field_base");
			$("#panel2CityField").removeClass("panel_2_required_error");
			stripField('city','panel2CityField');
		}
	}
	else {
		document.getElementById('city').value = "";
	}
	if (document.getElementById('panel2StateField')) {
		if ($("#panel2StateSelect").hasClass("panel_2_required") && document.getElementById('panel2StateField').value == "") {
			$("#panel2StateSelect").removeClass("panel_2_state_field_base");
			$("#panel2StateSelect").addClass("panel_2_required_error");
			document.getElementById('state').value = "";
			canSubmit = 0;
		}
		else {
			$("#panel2StateSelect").addClass("panel_2_state_field_base");
			$("#panel2StateSelect").removeClass("panel_2_required_error");
			stripField('state','panel2StateField');
		}
	}
	else {
		document.getElementById('state').value = "";
	}
	if (document.getElementById('panel2ZipField')) {
		if ($("#panel2ZipField").hasClass("panel_2_required")) {
			if (document.getElementById('panel2ZipField').value == "") {
				$("#panel2ZipField").removeClass("panel_2_zip_field_base");
				$("#panel2ZipField").addClass("panel_2_required_error");
				document.getElementById('zip').value = "";
				canSubmit = 0;
			}
			else {
				if (zipFieldValueVar == 1) {
					var zipFieldTestVal = document.getElementById('panel2ZipField').value;
					if (isNaN(zipFieldTestVal) || zipFieldTestVal.length != 5) {
						$("#panel2ZipField").removeClass("panel_2_zip_field_base");
						$("#panel2ZipField").addClass("panel_2_required_error");
						document.getElementById('zip').value = "";
						canSubmit = 0;
					}
					else {
						$("#panel2ZipField").addClass("panel_2_zip_field_base");
						$("#panel2ZipField").removeClass("panel_2_required_error");
						stripField('zip','panel2ZipField');
					}
				}
				else {
					$("#panel2ZipField").addClass("panel_2_zip_field_base");
					$("#panel2ZipField").removeClass("panel_2_required_error");
					stripField('zip','panel2ZipField');
				}
			}
		}
	}
	else {
		document.getElementById('zip').value = "";
	}
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
	prodSelectedArray.length = 0;
	if (panel2ProdListOn == 1) {
		for (f=0;f<prodFilterArray.length;f++) {
			for (p=0;p<prodDisplayArray.length;p++) {
				if (prodFilterArray[f][1] == prodDisplayArray[p][1]) {
					prodDisplayArray[p][9] = prodFilterArray[f][9];
					break;
				}
			}
		}
	}
	for (p=0;p<prodDisplayArray.length;p++) {
		if (document.getElementById('PROD').value.indexOf(prodDisplayArray[p][1]) != -1) {
			prodDisplayArray[p][9] = "1";
		}
	}
	for (p=0;p<prodDisplayArray.length;p++) {
		if (prodDisplayArray[p][9] == "1") {
			prodSelectedArray.push(prodDisplayArray[p][1]);
		}
	}
	document.getElementById('PROD').value = prodSelectedArray.toString();
	if (document.getElementById('PROD').value == "") {
		document.getElementById('PROD').value = prodSelString;
	}
	if(gLog==1){console.log("panel2SubmitForm - canSubmit = " + canSubmit);}
	if (canSubmit == 1) {
		if (enableResize == 2) {
			parent.postMessage("SRCH:"+document.getElementById('panel2AddressField').value,refurl);
		}
		setTimeout(function(){
			panel2CodeAddress();
		},750);
	}
	else {
		errorText('Please enter a valid location.',2);
	}
}
function panel2Print() {
	var directPrintStartHTML = autotextIt(p2TemplateSet.panel2PrintStartDiv,"panel2PrintStart");
	var directPrintLocClientTagStart = directPrintStartHTML.indexOf("<!--CLIENT");
	if (directPrintLocClientTagStart != -1) {
		var directPrintLocClientTagEnd = directPrintStartHTML.indexOf(">",directPrintLocClientTagStart);
		var baseDirectPrintLocClientHTMLStart = directPrintStartHTML.substr(0,directPrintLocClientTagStart);
		var baseDirectPrintLocClientHTMLEnd = directPrintStartHTML.substr((directPrintLocClientTagEnd+1));
		directPrintStartHTML = baseDirectPrintLocClientHTMLStart + coreClient + baseDirectPrintLocClientHTMLEnd;
	}
	if ((whatStoreUp+resultsNum) > storeDisplayArray.length) {
		var whatStoreEnd = storeDisplayArray.length;
	}
	else {
		var whatStoreEnd = whatStoreUp+resultsNum;
	}
	var directPrintStepHTML = "";
	var storeTrackIncr = 0;
	var storeTrackJSON = "";
	var apiSTR = {};
	apiSTR['SCT'] = 0;
	apiSTR['STR'] = {};
	if (gtm != 0) {
		var disPag = whatStoreEnd - whatStoreUp;
		GTMit("PRINTLIST", "click", document.getElementById('LA').value + "|" + document.getElementById('LO').value + "|" + storeDisplayArray[whatStoreUp][8] + "|" + storeDisplayArray[whatStoreEnd][8] + "|" + disPag,false);
	}
	for (x=whatStoreUp; x<whatStoreEnd; x++) {
		var storeProdCountArray = storeDisplayArray[x][9].split(",");
		if (stateNames == 1) {
			var gottaState = 0;
			for (tsa=0;tsa<tblStateArray.length;tsa++) {
				if (tblStateArray[tsa][0] == storeDisplayArray[x][4]) {
					var stateOut = tblStateArray[tsa][1];
					gottaState = 1;
					break;
				}
			}
			if (gottaState == 0) {
				var stateOut = storeDisplayArray[x][4];
			}
		}
		else {
			var stateOut = storeDisplayArray[x][4];
		}
		var directPrintStepHTMLTest = autotextIt(p2TemplateSet.panel2PrintStepDiv,"panel2PrintStep");
		var directPrintLocNameTagStart = directPrintStepHTMLTest.indexOf("<!--LOCNAME");
		if (directPrintLocNameTagStart != -1) {
			var directPrintLocNameTagEnd = directPrintStepHTMLTest.indexOf(">",directPrintLocNameTagStart);
			var baseDirectPrintLocNameHTMLStart = directPrintStepHTMLTest.substr(0,directPrintLocNameTagStart);
			var baseDirectPrintLocNameHTMLEnd = directPrintStepHTMLTest.substr((directPrintLocNameTagEnd+1));
			directPrintStepHTMLTest = baseDirectPrintLocNameHTMLStart + storeDisplayArray[x][0] + baseDirectPrintLocNameHTMLEnd;
		}
		var directPrintLocStreetTagStart = directPrintStepHTMLTest.indexOf("<!--LOCSTREET");
		if (directPrintLocStreetTagStart != -1) {
			var directPrintLocStreetTagEnd = directPrintStepHTMLTest.indexOf(">",directPrintLocStreetTagStart);
			var baseDirectPrintLocStreetHTMLStart = directPrintStepHTMLTest.substr(0,directPrintLocStreetTagStart);
			var baseDirectPrintLocStreetHTMLEnd = directPrintStepHTMLTest.substr((directPrintLocStreetTagEnd+1));
			directPrintStepHTMLTest = baseDirectPrintLocStreetHTMLStart + storeDisplayArray[x][1] + baseDirectPrintLocStreetHTMLEnd;
		}
		var directPrintLocCityTagStart = directPrintStepHTMLTest.indexOf("<!--LOCCITY");
		if (directPrintLocCityTagStart != -1) {
			var directPrintLocCityTagEnd = directPrintStepHTMLTest.indexOf(">",directPrintLocCityTagStart);
			var baseDirectPrintLocCityHTMLStart = directPrintStepHTMLTest.substr(0,directPrintLocCityTagStart);
			var baseDirectPrintLocCityHTMLEnd = directPrintStepHTMLTest.substr((directPrintLocCityTagEnd+1));
			directPrintStepHTMLTest = baseDirectPrintLocCityHTMLStart + storeDisplayArray[x][3] + baseDirectPrintLocCityHTMLEnd;
		}
		var directPrintLocStateTagStart = directPrintStepHTMLTest.indexOf("<!--LOCSTATE");
		if (directPrintLocStateTagStart != -1) {
			var directPrintLocStateTagEnd = directPrintStepHTMLTest.indexOf(">",directPrintLocStateTagStart);
			var baseDirectPrintLocStateHTMLStart = directPrintStepHTMLTest.substr(0,directPrintLocStateTagStart);
			var baseDirectPrintLocStateHTMLEnd = directPrintStepHTMLTest.substr((directPrintLocStateTagEnd+1));
			directPrintStepHTMLTest = baseDirectPrintLocStateHTMLStart + stateOut + baseDirectPrintLocStateHTMLEnd;
		}
		var directPrintLocZipTagStart = directPrintStepHTMLTest.indexOf("<!--LOCZIP");
		if (directPrintLocZipTagStart != -1) {
			var directPrintLocZipTagEnd = directPrintStepHTMLTest.indexOf(">",directPrintLocZipTagStart);
			var baseDirectPrintLocZipHTMLStart = directPrintStepHTMLTest.substr(0,directPrintLocZipTagStart);
			var baseDirectPrintLocZipHTMLEnd = directPrintStepHTMLTest.substr((directPrintLocZipTagEnd+1));
			directPrintStepHTMLTest = baseDirectPrintLocZipHTMLStart + storeDisplayArray[x][5] + baseDirectPrintLocZipHTMLEnd;
		}
		var directPrintLocCountryTagStart = directPrintStepHTMLTest.indexOf("<!--LOCCOUNTRY");
		if (directPrintLocCountryTagStart != -1) {
			var directPrintLocCountryTagEnd = directPrintStepHTMLTest.indexOf(">",directPrintLocCountryTagStart);
			var baseDirectPrintLocCountryHTMLStart = directPrintStepHTMLTest.substr(0,directPrintLocCountryTagStart);
			var baseDirectPrintLocCountryHTMLEnd = directPrintStepHTMLTest.substr((directPrintLocCountryTagEnd+1));
			directPrintStepHTMLTest = baseDirectPrintLocCountryHTMLStart + storeDisplayArray[x][27] + baseDirectPrintLocCountryHTMLEnd;
		}
		var directPrintPhoneTagStart = directPrintStepHTMLTest.indexOf("<!--LOCPHONE");
		if (directPrintPhoneTagStart != -1 && storeDisplayArray[x][15]!="") {
			var directPrintPhoneTagEnd = directPrintStepHTMLTest.indexOf(">",directPrintPhoneTagStart);
			var directPrintPhoneTagStrip = directPrintStepHTMLTest.substring(directPrintPhoneTagStart,(directPrintPhoneTagEnd+1));
			var directPrintPhoneHTMLStart = directPrintStepHTMLTest.substr(0,directPrintPhoneTagStart);
			var directPrintPhoneHTMLEnd = directPrintStepHTMLTest.substr((directPrintPhoneTagEnd+1));
			var directPrintPhoneRender = "";
			var directPrintPhoneValueStart = directPrintPhoneTagStrip.indexOf(" FORMAT=");
			var directPrintPhoneValueEnd = directPrintPhoneTagStrip.indexOf("]");
			if (directPrintPhoneValueStart != -1) {
				var directPrintPhoneValueVarTest = directPrintPhoneTagStrip.substring((directPrintPhoneValueStart+9),(directPrintPhoneValueEnd));
				var phoneSplit=storeDisplayArray[x][15].split("");
				for (p=0;p<phoneSplit.length;p++) {
					var thisHash = directPrintPhoneValueVarTest.indexOf("#");
					if (thisHash != -1) {
						directPrintPhoneValueVarTest = directPrintPhoneValueVarTest.substring(0,(thisHash))+phoneSplit[p]+directPrintPhoneValueVarTest.substring((thisHash+1));
					}
				}
				var directPrintPhoneValueVar = directPrintPhoneValueVarTest;
			}
			else {
				var directPrintPhoneValueVar = storeDisplayArray[x][15];
			}
			var directPrintPhoneRawStart = directPrintPhoneTagStrip.indexOf(" RAW");
			if (directPrintPhoneRawStart != -1) {
				var directPrintPhoneValueVar = storeDisplayArray[x][26];
			}
			directPrintStepHTMLTest = directPrintPhoneHTMLStart + directPrintPhoneValueVar + directPrintPhoneHTMLEnd;
		}
		var directPrintStartDistanceTagStart = directPrintStepHTMLTest.indexOf("<!--LOCDISTANCE");
		if (directPrintStartDistanceTagStart != -1) {
			var directPrintStartDistanceTagEnd = directPrintStepHTMLTest.indexOf(">",directPrintStartDistanceTagStart);
			var directPrintStartDistanceTagStrip = directPrintStepHTMLTest.substring(directPrintStartDistanceTagStart,(directPrintStartDistanceTagEnd+1));
			var baseDirectPrintStartDistanceHTMLStart = directPrintStepHTMLTest.substr(0,directPrintStartDistanceTagStart);
			var baseDirectPrintStartDistanceHTMLEnd = directPrintStepHTMLTest.substr((directPrintStartDistanceTagEnd+1));
			var directPrintStartDistanceKMTest = directPrintStepHTMLTest.indexOf(" KM");
			if (directPrintStartDistanceKMTest != -1 || forceKM == 1) {
				var baseMiles = parseFloat(storeDisplayArray[x][8]);
				var finalMiles = Math.round((baseMiles*1.60934)*100)/100;
				var finalFormat = "km";
			}
			else {
				var finalMiles = storeDisplayArray[x][8];
				var finalFormat = "miles";
			}
			var directPrintStartDistanceBlankTest = directPrintStepHTMLTest.indexOf(" BLANK");
			if (directPrintStartDistanceBlankTest != -1) {
				var finalFormat = "";
			}
			directPrintStepHTMLTest = baseDirectPrintStartDistanceHTMLStart + finalMiles + " " + finalFormat + baseDirectPrintStartDistanceHTMLEnd;
		}
		directPrintStepHTML += directPrintStepHTMLTest;
		apiSTR['STR'][storeTrackIncr] = {};
		apiSTR['STR'][storeTrackIncr]['ORD'] = storeTrackIncr+1;
		apiSTR['STR'][storeTrackIncr]['FED'] = storeDisplayArray[x][16];
		apiSTR['STR'][storeTrackIncr]['LAT'] = storeDisplayArray[x][6];
		apiSTR['STR'][storeTrackIncr]['LNG'] = storeDisplayArray[x][7];
		apiSTR['STR'][storeTrackIncr]['NAM'] = storeDisplayArray[x][0];
		apiSTR['STR'][storeTrackIncr]['ADD'] = storeDisplayArray[x][1];
		apiSTR['STR'][storeTrackIncr]['ADT'] = storeDisplayArray[x][2];
		apiSTR['STR'][storeTrackIncr]['CTY'] = storeDisplayArray[x][3];
		apiSTR['STR'][storeTrackIncr]['STA'] = storeDisplayArray[x][4];
		apiSTR['STR'][storeTrackIncr]['ZIP'] = storeDisplayArray[x][5];
		apiSTR['STR'][storeTrackIncr]['CNT'] = storeDisplayArray[x][27];
		apiSTR['STR'][storeTrackIncr]['PRD'] = storeDisplayArray[x][9];
		storeTrackIncr++;
		if (storeTrackJSON != ""){storeTrackJSON += ",";}
		storeTrackJSON += storeTrackIncr + ';;' + storeDisplayArray[x][16] + ';;' + storeDisplayArray[x][6] + ';;' + storeDisplayArray[x][7] + ';;' + storeDisplayArray[x][0].replace(/"/g, '') + ';;' + storeDisplayArray[x][1].replace(/"/g, '') + ';;' + storeDisplayArray[x][2].replace(/"/g, '') + ';;' + storeDisplayArray[x][3] + ';;' + storeDisplayArray[x][4] + ';;' + storeDisplayArray[x][5] + ';;' + storeDisplayArray[x][27] + ';;' + storeDisplayArray[x][9];
	}
	apiSTR['STC'] = storeTrackIncr;
	var directPrintStopHTML = autotextIt(p2TemplateSet.panel2PrintStopDiv,"panel2PrintStop");
	if (isIE) {
		directPrintStartHTML = directPrintStartHTML.replace(/\/\*/g,"");
		directPrintStepHTML = directPrintStepHTML.replace(/\/\*/g,"");
		directPrintStopHTML = directPrintStopHTML.replace(/\/\*/g,"");
	}
	document.getElementById('panel2PrintDiv').innerHTML = directPrintStartHTML + directPrintStepHTML + directPrintStopHTML;
	frameVar = document.getElementById("iFrameForms");
	frameVar.contentWindow.location.replace(controlURL + "panel2Print.php");
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
			var locTrackArr = new Array(3,7);
			$.post(controlURL + "tracktest.php", {
				CB: noCache,
				TLL: tlVal,
				A1: trackVal,
				UP1: "PANEL2",
				UC1: "PRINT",
				UCS1: "LIST",
				US1: "SUCCESS",
				USRC1: version,
				CLIENT: coreClient,
				ITER: iteration,
				DEVICE: deviceType,
				REF: referer,
				SESSID: daSESSID,
				LOCATION: '{"compiled_location":"' + document.getElementById('addressCompile').value.replace(/"/g, '') + '","latitude":"' + parseFloat(document.getElementById('LA').value).toFixed(5) + '","longitude":"' + parseFloat(document.getElementById('LO').value).toFixed(5) + '","city":"' + document.getElementById('revCodeCity').value.replace(/"/g, '') + '","state":"' + document.getElementById('revCodeState').value + '","zip":"' + document.getElementById('revCodeZip').value + '","country":"' + document.getElementById('revCodeCountry').value + '","us_code":"' + document.getElementById('revCodeUS').value + '"}',
				STORE: storeTrackJSON,
				STORECOUNT: storeTrackIncr,
				PLIST: compProdVal,
				PSET: prodSetVal,
				TRACK: locTrackArr.toString(","),
				DUTV: dutv
				}, function(data){
					if(gLog==1){console.log("panel2Print - tracktest: " , JSON.parse(data));}
				}
			);
		},1000);
	}
	else if (trackVal == 2 && allOnOne == 0) {
		setTimeout(function(){
			var sendObj = setTrackObj();
			sendObj['TRK'] = "3,7";
			sendObj['RQF'] = "panel2Print";
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
			sendObj['STC'] = apiSTR.STC;
			for (dlcT=0; dlcT<apiSTR.STC; dlcT++) {
				sendObj['STR'][dlcT] = {};
				sendObj['STR'][dlcT]['ORD'] = apiSTR.STR[dlcT].ORD;
				sendObj['STR'][dlcT]['FED'] = apiSTR.STR[dlcT].FED;
				sendObj['STR'][dlcT]['LAT'] = apiSTR.STR[dlcT].LAT;
				sendObj['STR'][dlcT]['LNG'] = apiSTR.STR[dlcT].LNG;
				sendObj['STR'][dlcT]['NAM'] = apiSTR.STR[dlcT].NAM;
				sendObj['STR'][dlcT]['ADD'] = apiSTR.STR[dlcT].ADD;
				sendObj['STR'][dlcT]['ADT'] = apiSTR.STR[dlcT].ADT;
				sendObj['STR'][dlcT]['CTY'] = apiSTR.STR[dlcT].CTY;
				sendObj['STR'][dlcT]['STA'] = apiSTR.STR[dlcT].STA;
				sendObj['STR'][dlcT]['ZIP'] = apiSTR.STR[dlcT].ZIP;
				sendObj['STR'][dlcT]['CNT'] = apiSTR.STR[dlcT].CNT;
				sendObj['STR'][dlcT]['PRD'] = apiSTR.STR[dlcT].PRD;
			}
			sendTrackObj(sendObj);
		},300);
	}
}
function panel2PrintWin() {
	window.frames["iFrameForms"].focus();
	window.frames["iFrameForms"].print();
}
function panel2ButtonHover(buttonID,buttonClass,hoverVar) {
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
function panel2PrevTen(noHide) {
	if ($('#panel2PrevButton').hasClass('panel_2_prev_button_hover')) {
		$('#panel2PrevButton').removeClass('panel_2_prev_button_hover');
		$('#panel2PrevButton').addClass('panel_2_prev_button_on');
		if (noHide == 1) {
		}
		else {
			setTimeout(function() {
				$('#panel2PrevButton').removeClass('panel_2_prev_button_on');
				$('#panel2PrevButton').addClass('panel_2_prev_button_hover');
			},175);
		}
	}
	if (whatStoreUp > 0) {
		if (gtm != 0) {
			var checkPag = whatStoreUp - resultsNum;
			var whatTotNum = storeDisplayArray.length;
			if (storeDisplayArray.length > maxStoreNum) {
				var whatTotNum = maxStoreNum;
			}
			GTMit("STOREPAG", "click", "NEXT|" + checkPag + "|" + whatStoreUp + "|" + whatTotNum,false);
		}
		whatStoreUp -= resultsNum;
		panel2PinIncr = whatStoreUp;
		panel2ListIncr = whatStoreUp;
		if (document.getElementById('panel2MultiMap')) {
			panel2CompileMultiMap();
		}
		if (document.getElementById('panel2LocListShell')) {
			panel2WriteLocList();
			panel2PrevNextTenShow(noHide);
		}
		if (onretOn == 1) {
			if (document.getElementById('panel2OnRetResultsShell') && document.getElementById('panel2OnRetSelectShell')) {
				panel2WriteOnlineRetailer();
			}
		}
		if (onretOn == 2) {
			showOnlineRetailers();
		}
	}
	if(gLog==1){console.log("panel2PrevTen - " + whatStoreUp + " of " + storeDisplayArray.length);}
}
function panel2NextTen(noHide) {
	if ($('#panel2NextButton').hasClass('panel_2_next_button_hover')) {
		$('#panel2NextButton').removeClass('panel_2_next_button_hover');
		$('#panel2NextButton').addClass('panel_2_next_button_on');
		if (noHide == 1) {
		}
		else {
			setTimeout(function() {
				$('#panel2NextButton').removeClass('panel_2_next_button_on');
				$('#panel2NextButton').addClass('panel_2_prev_button_hover');
			},175);
		}
	}
	if ((whatStoreUp+resultsNum) < storeDisplayArray.length) {
		if (gtm != 0) {
			var checkPag = whatStoreUp + resultsNum;
			var whatTotNum = storeDisplayArray.length;
			if (storeDisplayArray.length > maxStoreNum) {
				var whatTotNum = maxStoreNum;
			}
			GTMit("STOREPAG", "click", "PREV|" + whatStoreUp + "|" + checkPag + "|" + whatTotNum,false);
		}
		whatStoreUp += resultsNum;
		if (document.getElementById('panel2MultiMap')) {
			panel2CompileMultiMap();
		}
		if (document.getElementById('panel2LocListShell')) {
			panel2WriteLocList();
			panel2PrevNextTenShow(noHide);
		}
		if (onretOn == 1) {
			if (document.getElementById('panel2OnRetResultsShell') && document.getElementById('panel2OnRetSelectShell')) {
				panel2WriteOnlineRetailer();
			}
		}
		if (onretOn == 2) {
			showOnlineRetailers();
		}
	}
	if(gLog==1){console.log("panel2NextTen - " + whatStoreUp + " of " + storeDisplayArray.length);}
}
function panel2PrevNextTenShow(noHide) {
	if (whatStoreUp > 0 && document.getElementById('panel2PrevButton')) {
		if (noHide == 1) {
			$('#panel2PrevButton').removeClass('panel_2_prev_button_inactive');
			$('#panel2PrevButton').removeClass('panel_2_prev_button_on');
			$('#panel2PrevButton').removeClass('panel_2_prev_button_hover');
			$('#panel2PrevButton').addClass('panel_2_prev_button_off');
		}
		else {
			document.getElementById('panel2PrevButton').style.display = "block";
		}
	}
	else {
		if (noHide == 1) {
			$('#panel2PrevButton').removeClass('panel_2_prev_button_off');
			$('#panel2PrevButton').removeClass('panel_2_prev_button_on');
			$('#panel2PrevButton').removeClass('panel_2_prev_button_hover');
			$('#panel2PrevButton').addClass('panel_2_prev_button_inactive');
		}
		else {
			document.getElementById('panel2PrevButton').style.display = "none";
		}
	}
	if ((whatStoreUp+resultsNum+1) > storeDisplayArray.length && document.getElementById('panel2NextButton')) {
		if (noHide == 1) {
			$('#panel2NextButton').removeClass('panel_2_next_button_off');
			$('#panel2NextButton').removeClass('panel_2_next_button_on');
			$('#panel2NextButton').removeClass('panel_2_next_button_hover');
			$('#panel2NextButton').addClass('panel_2_next_button_inactive');
		}
		else {
			document.getElementById('panel2NextButton').style.display = "none";
		}
	}
	else {
		if (noHide == 1) {
			$('#panel2NextButton').removeClass('panel_2_next_button_inactive');
			$('#panel2NextButton').removeClass('panel_2_next_button_on');
			$('#panel2NextButton').removeClass('panel_2_next_button_hover');
			$('#panel2NextButton').addClass('panel_2_next_button_off');
		}
		else {
			document.getElementById('panel2NextButton').style.display = "block";
		}
	}
}
function panel2ListMouseOver (listID, listString, listVar, mapVar) {
	if (document.getElementById(listID)) {
		if (listVar == 0) {
			$('#'+listID).removeClass(listString+'_off');
			$('#'+listID).addClass(listString+'_hover');
		}
		else {
			$('#'+listID).removeClass(listString+'_on');
			$('#'+listID).addClass(listString+'_hover');
		}
		if (document.getElementById('panel2MultiMap')) {
			if (locServe == 0) {
				google.maps.event.trigger(panel2MarkersArray[mapVar], "click");
			}
			else if (locServe == 1) {
				if (atlantis == 1) {
					drawInfoWindow(mapVar);
				}
				else {
					p2ShowInfowindow(mapVar);
				}
			}
		}
	}
}
function panel2ListMouseOut (listID, listString, listVar) {
	if (document.getElementById(listID)) {
		if (listVar == 0) {
			$('#'+listID).removeClass(listString+'_hover');
			$('#'+listID).addClass(listString+'_off');
		}
		else {
			$('#'+listID).removeClass(listString+'_hover');
			$('#'+listID).addClass(listString+'_on');
		}
	}
}
function panel2LocNameMouseOver (listID, listString, listVar) {
	if (document.getElementById(listID)) {
		if (listVar == 0) {
			$('#'+listID).removeClass(listString+'_off');
			$('#'+listID).addClass(listString+'_hover');
		}
		else {
			$('#'+listID).removeClass(listString+'_on');
			$('#'+listID).addClass(listString+'_hover');
		}
	}
}
function panel2LocNameMouseOut (listID, listString, listVar) {
	if (document.getElementById(listID)) {
		if (listVar == 0) {
			$('#'+listID).removeClass(listString+'_hover');
			$('#'+listID).addClass(listString+'_off');
		}
		else {
			$('#'+listID).removeClass(listString+'_hover');
			$('#'+listID).addClass(listString+'_on');
		}
	}
}
function panel2LocPromoMouseOver (promoID, promoString, promoVar) {
	if (document.getElementById(promoID)) {
		if (promoVar == 0) {
			$('#'+promoID).removeClass(promoString+'_off');
			$('#'+promoID).addClass(promoString+'_hover');
		}
		else {
			$('#'+promoID).removeClass(promoString+'_on');
			$('#'+promoID).addClass(promoString+'_hover');
		}
	}
}
function panel2LocPromoMouseOut (promoID, promoString, promoVar) {
	if (document.getElementById(promoID)) {
		if (promoVar == 0) {
			$('#'+promoID).removeClass(promoString+'_hover');
			$('#'+promoID).addClass(promoString+'_off');
		}
		else {
			$('#'+promoID).removeClass(promoString+'_hover');
			$('#'+promoID).addClass(promoString+'_on');
		}
	}
}
function panel2InfoWindowPromoMouseOver (promoID, promoString, promoVar) {
	if (document.getElementById(promoID)) {
		if (promoVar == 0) {
			$('#'+promoID).removeClass(promoString+'_off');
			$('#'+promoID).addClass(promoString+'_hover');
		}
		else {
			$('#'+promoID).removeClass(promoString+'_on');
			$('#'+promoID).addClass(promoString+'_hover');
		}
	}
}
function panel2InfoWindoPromoMouseOut (promoID, promoString, promoVar) {
	if (document.getElementById(promoID)) {
		if (promoVar == 0) {
			$('#'+promoID).removeClass(promoString+'_hover');
			$('#'+promoID).addClass(promoString+'_off');
		}
		else {
			$('#'+promoID).removeClass(promoString+'_hover');
			$('#'+promoID).addClass(promoString+'_on');
		}
	}
}
function panel2InfoWindowNameMouseOver (listID, listString, listVar) {
	if (document.getElementById(listID)) {
		if (listVar == 0) {
			$('#'+listID).removeClass(listString+'_off');
			$('#'+listID).addClass(listString+'_hover');
		}
		else {
			$('#'+listID).removeClass(listString+'_on');
			$('#'+listID).addClass(listString+'_hover');
		}
	}
}
function panel2InfoWindowNameMouseOut (listID, listString, listVar) {
	if (document.getElementById(listID)) {
		if (listVar == 0) {
			$('#'+listID).removeClass(listString+'_hover');
			$('#'+listID).addClass(listString+'_off');
		}
		else {
			$('#'+listID).removeClass(listString+'_hover');
			$('#'+listID).addClass(listString+'_on');
		}
	}
}
function panel2StoreFamMouseOver (storeFamID, storeFamString, storeFamVar) {
	if (document.getElementById(storeFamID)) {
		if (storeFamVar == 0) {
			$('#'+storeFamID).removeClass(storeFamString+'_off');
			$('#'+storeFamID).addClass(storeFamString+'_hover');
		}
		else {
			$('#'+storeFamID).removeClass(storeFamString+'_on');
			$('#'+storeFamID).addClass(storeFamString+'_hover');
		}
	}
}
function panel2StoreFamMouseOut (storeFamID, storeFamString, storeFamVar) {
	if (document.getElementById(storeFamID)) {
		if (storeFamVar == 0) {
			$('#'+storeFamID).removeClass(storeFamString+'_hover');
			$('#'+storeFamID).addClass(storeFamString+'_off');
		}
		else {
			$('#'+storeFamID).removeClass(storeFamString+'_hover');
			$('#'+storeFamID).addClass(storeFamString+'_on');
		}
	}
}
function panel2StoreFamSelectCat(storeFamSQLID, storeFamID, storeFamString, storeFamVar, storeFamVarSet) {
	whatStoreUp = 0;
	if (document.getElementById(storeFamID)) {
		if (storeFamVar == 0) {
			$('#'+storeFamID).removeClass(storeFamString+'_hover');
			$('#'+storeFamID).removeClass(storeFamString+'_off');
			$('#'+storeFamID).addClass(storeFamString+'_on');
			for (x=0; x<storeCatArray.length; x++) {
				if (storeCatArray[x][2] == storeFamSQLID) {
					window[('panel1StoreCategoryNameVar'+storeCatArray[x][0])] = 0;
					panel2StoreSelectCat(storeCatArray[x][0], ('panel2StoreCategoryName'+storeCatArray[x][0]), 'panel_2_store_category_name', 0, ('panel1StoreCategoryNameVar'+storeCatArray[x][0]));
				}
			}
			window[storeFamVarSet] = 1;
			for (y=0;y<storeFamArray.length;y++) {
				if (storeFamArray[y][0] == storeFamSQLID) {
					storeFamArray[y][4] = 1;
					break;
				}
			}
		}
		else {
			$('#'+storeFamID).removeClass(storeFamString+'_hover');
			$('#'+storeFamID).removeClass(storeFamString+'_on');
			$('#'+storeFamID).addClass(storeFamString+'_off');
			for (x=0; x<storeCatArray.length; x++) {
				if (storeCatArray[x][2] == storeFamSQLID) {
					window[('panel1StoreCategoryNameVar'+storeCatArray[x][0])] = 1;
					panel2StoreSelectCat(storeCatArray[x][0], ('panel2StoreCategoryName'+storeCatArray[x][0]), 'panel_2_store_category_name', 1, ('panel1StoreCategoryNameVar'+storeCatArray[x][0]));
				}
			}
			window[storeFamVarSet] = 0;
			for (y=0;y<storeFamArray.length;y++) {
				if (storeFamArray[y][0] == storeFamSQLID) {
					storeFamArray[y][4] = 0;
					break;
				}
			}
		}
	}
}
function panel2StoreCatMouseOver (storeCatID, storeCatString, storeCatVar, imgToggle) {
	if (document.getElementById(storeCatID)) {
		if (storeCatVar == 0) {
			$('#'+storeCatID).removeClass(storeCatString+'_off');
			$('#'+storeCatID).addClass(storeCatString+'_hover');
		}
		else {
			$('#'+storeCatID).removeClass(storeCatString+'_on');
			$('#'+storeCatID).addClass(storeCatString+'_hover');
		}
	}
}
function panel2StoreCatMouseOut (storeCatID, storeCatString, storeCatVar, imgToggle) {
	if (document.getElementById(storeCatID)) {
		if (storeCatVar == 0) {
			$('#'+storeCatID).removeClass(storeCatString+'_hover');
			$('#'+storeCatID).addClass(storeCatString+'_off');
		}
		else {
			$('#'+storeCatID).removeClass(storeCatString+'_hover');
			$('#'+storeCatID).addClass(storeCatString+'_on');
		}
	}
}
function panel2StoreSelectCat(storeCatSQLID, storeCatID, storeCatString, storeCatVar, storeCatVarSet) {
	whatStoreUp = 0;
	panel2PinIncr = 0;
	panel2ListIncr = 0;
	if (document.getElementById(storeCatID)) {
		if (storeCatVar == 0) {
			$('#'+storeCatID).removeClass(storeCatString+'_hover');
			$('#'+storeCatID).removeClass(storeCatString+'_off');
			$('#'+storeCatID).addClass(storeCatString+'_on');
			window[storeCatVarSet] = 1;
			for (x=0;x<storeCatArray.length;x++) {
				if (storeCatArray[x][0] == storeCatSQLID) {
					storeCatArray[x][8] = 1;
					break;
				}
			}
		}
		else {
			$('#'+storeCatID).removeClass(storeCatString+'_hover');
			$('#'+storeCatID).removeClass(storeCatString+'_on');
			$('#'+storeCatID).addClass(storeCatString+'_off');
			window[storeCatVarSet] = 0;
			for (x=0;x<storeCatArray.length;x++) {
				if (storeCatArray[x][0] == storeCatSQLID) {
					storeCatArray[x][8] = 0;
					break;
				}
			}
		}
		storeCatSelectedArray.length = 0;
		for (sc=0;sc<storeCatArray.length;sc++) {
			if (storeCatArray[sc][8] == "1") {
				storeCatSelectedArray.push(storeCatArray[sc][0]);
			}
		}
		document.getElementById('SCFILTER').value = storeCatSelectedArray.toString();
		if(gLog==1){console.log("Store Select Category P2");}
		panel2Load("panel2");
	}
}
function panel2ScopeUpdate() {
	document.getElementById('scope').value = document.getElementById('panel2ScopeField').value;
	setTimeout(function(){
		if(gLog==1){console.log("Scope Update P2");}
		panel2Load("panel2");
	},100);
}
function panel2DistanceUpdate(setVal) {
	distanceChangedVal = 1;
	if (setVal) {
		document.getElementById('panel2DistanceDivNum').innerHTML = setVal;
		document.getElementById('panel2DistanceField').value = setVal;
		document.getElementById('distance').value = setVal;
		$(".panel_close_me").hide();
	}
	else {
		document.getElementById('distance').value = document.getElementById('panel2DistanceField').value;
	}
	setTimeout(function(){
		panel2PinIncr = 0;
		panel2ListIncr = 0;
		panel2ResultsStartPage = 0;
		panel2ResultsTotalPage = 0;
		panel2TotalResultsPage = 0;
		if(gLog==1){console.log("Distance Update P2");}
		panel2Load("panel2");
	},100);
}
function panel2SortDivUpdate(setVal) {
	sortChangedVal = 1
	document.getElementById('panel2SortField').value = setVal;
	document.getElementById('sort').value = setVal;
	document.getElementById('panel2SortDivNum').innerHTML = sortFieldOptionsArray[setVal][1];
	$(".panel_close_me").hide();
	if(gLog==1){console.log("panel2SortDivUpdate - " + document.getElementById('sort').value);}
	setTimeout(function(){
		panel2Load("panel2");
	},100);
}
function panel2SetSortSelect(fromSelect,toHidden) {
	selIndex = document.getElementById(fromSelect).selectedIndex;
	document.getElementById(toHidden).value = document.getElementById(fromSelect).options[selIndex].value;
	document.getElementById('sort').value = document.getElementById(fromSelect).options[selIndex].value;
	setTimeout(function(){
		if(gLog==1){console.log("Sort Update P2");}
		panel2Load("panel2");
	},100);
}
function panel2CatMenuSelect(setVal) {
	catMenuChangedVal = 1
	document.getElementById('panel2CatMenuHolder').value = setVal;
	for (c=0; c<catArray.length; c++) {
		if (catArray[c][0] == setVal) {
			document.getElementById('panel2CatMenuDisplay').innerHTML = catArray[c][1];
			break;
		}
	}
	$(".panel_close_me").hide();
	if (document.getElementById('panel2ProdMenuHolder')) {
		document.getElementById('panel2ProdMenuDisplay').innerHTML = panel2ProdMenuText;
		document.getElementById('panel2ProdMenuShell').style.display = "block";
		document.getElementById('panel2ProdMenuContent').innerHTML = "";
		var thisWriteVal = "";
		if (panel2ProdMenuAllVar != "") {
			thisWriteVal += "<div class='panel_2_prod_menu_div_filter_item_999999 panel_2_prod_menu_div_filter_item panel_2_prod_menu_div_filter_item_off'";
			if (hoverState==1) {
				thisWriteVal += " onmouseover='genericButtonOver(\"panel_2_prod_menu_div_filter_item_999999\",\"panel_2_prod_menu_div_filter_item\");' onfocus='genericButtonOver(\"panel_2_prod_menu_div_filter_item_999999\",\"panel_2_prod_menu_div_filter_item\");' onmouseout='genericButtonOut(\"panel_2_prod_menu_div_filter_item_999999\",\"panel_2_prod_menu_div_filter_item\");' onblur='genericButtonOut(\"panel_2_prod_menu_div_filter_item_999999\",\"panel_2_prod_menu_div_filter_item\");'";
			}
			thisWriteVal += " onclick='panel2ProdMenuSelect(999999," + panel2ProdGoValueVal + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2ProdMenuSelect(999999," + panel2ProdGoValueVal + ");}' tabindex='0' title=\"" + panel2ProdMenuAllVar + "\">" + panel2ProdMenuAllVar + "<\/div>";
		}
		for (p=0; p<prodDisplayArray.length; p++) {
			if (prodDisplayArray[p][8] == setVal) {
				thisWriteVal += "<div class='panel_2_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + " panel_2_prod_menu_div_filter_item panel_2_prod_menu_div_filter_item_off'";
				if (hoverState==1) {
					thisWriteVal += " onmouseover='genericButtonOver(\"panel_2_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_2_prod_menu_div_filter_item\");' onfocus='genericButtonOver(\"panel_2_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_2_prod_menu_div_filter_item\");' onmouseout='genericButtonOut(\"panel_2_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_2_prod_menu_div_filter_item\");' onblur='genericButtonOut(\"panel_2_prod_menu_div_filter_item_" + prodDisplayArray[p][0] + "\",\"panel_2_prod_menu_div_filter_item\");'";
				}
				thisWriteVal += " onclick='panel2ProdMenuSelect(" + prodDisplayArray[p][0] + "," + panel2ProdGoValueVal + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2ProdMenuSelect(" + prodDisplayArray[p][0] + "," + panel2ProdGoValueVal + ");}' tabindex='0' title=\"" + prodDisplayArray[p][2] + "\">" + prodDisplayArray[p][2] + "<\/div>";
			}
		}
		document.getElementById('panel2ProdMenuContent').innerHTML = thisWriteVal;
	}
}
function panel2SetCatSelect() {
	selIndex = document.getElementById('panel2CatSelect').selectedIndex;
	setVal = document.getElementById('panel2CatSelect').options[selIndex].value;
	document.getElementById('panel2CatMenuHolder').value = setVal;
	if (document.getElementById('panel2ProdSelect') && setVal != 0) {
		document.getElementById('panel2ProdMenuShell').style.display = "block";
		document.panel2Form.panel2ProdSelect.options.length = 0;
		document.panel2Form.panel2ProdSelect.options[0] = new Option(panel2ProdMenuText, 0);
		var optionIndex = 1;
		if (panel2ProdMenuAllVar != "") {
			document.panel2Form.panel2ProdSelect.options[optionIndex] = new Option(panel2ProdMenuAllVar, 999999);
			optionIndex++;
		}
		for (p=0; p<prodDisplayArray.length; p++) {
			if (prodDisplayArray[p][8] == setVal) {
				document.panel2Form.panel2ProdSelect.options[optionIndex] = new Option(prodDisplayArray[p][2], prodDisplayArray[p][0]);
				optionIndex++;
			}
		}
	}
	else if (document.getElementById('panel2ProdSelect') && setVal == 0) {
		document.getElementById('panel2ProdMenuShell').style.display = "none";
		document.panel2Form.panel2ProdSelect.options.length = 0;
	}
	if (document.getElementById('panel2ProdSubmitButton')) {
		document.getElementById('panel2ProdSubmitButton').style.display = "none";
	}
}
function panel2ProdMenuSelect(setVal, goVal) {
	prodMenuChangedVal = 1;
	document.getElementById('panel2ProdMenuHolder').value = setVal;
	var foundAddress = 0;
	if (document.getElementById('street').value != "" && document.getElementById('street').value != p2AddFieldValueVar) {
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
		document.getElementById('panel2ProdMenuDisplay').innerHTML = panel2ProdMenuAllVar;
		for (p=0; p<prodDisplayArray.length; p++) {
			if (prodDisplayArray[p][8] == document.getElementById('panel2CatMenuHolder').value) {
				prodDisplayArray[p][9] = 1;
				window[('panel2ProductNameVar'+prodDisplayArray[p][0])] = 1;
				thisProdArr.push(prodDisplayArray[p][1]);
			}
			else {
				prodDisplayArray[p][9] = 0;
				window[('panel2ProductNameVar'+prodDisplayArray[p][0])] = 0;
			}
		}
		document.getElementById('PROD').value = thisProdArr.toString();
	}
	else {
		for (p=0; p<prodDisplayArray.length; p++) {
			if (prodDisplayArray[p][0] == setVal) {
				document.getElementById('panel2ProdMenuDisplay').innerHTML = prodDisplayArray[p][2];
				document.getElementById('PROD').value = prodDisplayArray[p][1];
				prodDisplayArray[p][9] = 1;
				window[('panel2ProductNameVar'+prodDisplayArray[p][0])] = 1;
			}
			else {
				prodDisplayArray[p][9] = 0;
				window[('panel2ProductNameVar'+prodDisplayArray[p][0])] = 0;
			}
		}
	}
	$(".panel_close_me").hide();
	if (goVal == 1) {
		if (foundAddress == 1) {
			panel2SubmitForm();
		}
	}
	else {
		if (document.getElementById('panel2ProdSubmitButton')) {
			if (setVal != 0) {
				document.getElementById('panel2ProdSubmitButton').style.display = "block";
			}
			else {
				document.getElementById('panel2ProdSubmitButton').style.display = "none";
			}
		}
	}
}
function panel2SetProdSelect(goVal) {
	selIndex = document.getElementById('panel2ProdSelect').selectedIndex;
	setVal = document.getElementById('panel2ProdSelect').options[selIndex].value;
	document.getElementById('panel2ProdMenuHolder').value = setVal;
	prodCartArray.length = 0;
	var foundAddress = 0;
	if (document.getElementById('street').value != "" && document.getElementById('street').value != p2AddFieldValueVar) {
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
			if (prodDisplayArray[p][8] == document.getElementById('panel2CatMenuHolder').value) {
				prodDisplayArray[p][9] = 1;
				window[('panel2ProductNameVar'+prodDisplayArray[p][0])] = 1;
				thisProdArr.push(prodDisplayArray[p][1]);
				prodCartArray.push(prodDisplayArray[p][0]);
			}
			else {
				prodDisplayArray[p][9] = 0;
				window[('panel2ProductNameVar'+prodDisplayArray[p][0])] = 0;
			}
		}
		document.getElementById('PROD').value = thisProdArr.toString();
	}
	else {
		for (p=0; p<prodDisplayArray.length; p++) {
			if (prodDisplayArray[p][0] == setVal) {
				document.getElementById('PROD').value = prodDisplayArray[p][1];
				prodDisplayArray[p][9] = 1;
				window[('panel2ProductNameVar'+prodDisplayArray[p][0])] = 1;
				prodCartArray.push(prodDisplayArray[p][0]);
			}
			else {
				prodDisplayArray[p][9] = 0;
				window[('panel2ProductNameVar'+prodDisplayArray[p][0])] = 0;
			}
		}
	}
	if (goVal == 1) {
		if (foundAddress == 1) {
			panel2SubmitForm();
		}
	}
	else {
		if (document.getElementById('panel2ProdSubmitButton')) {
			if (setVal != 0) {
				document.getElementById('panel2ProdSubmitButton').style.display = "block";
			}
			else {
				document.getElementById('panel2ProdSubmitButton').style.display = "none";
			}
		}
	}
}
function panel2ResultsUpdate() {
	document.getElementById('results').value = document.getElementById('panel2ResultsField').value;
	setTimeout(function(){
		if(gLog==1){console.log("Results Update P2");}
		panel2Load("panel2");
	},100);
}
function panel2SortUpdate() {
	document.getElementById('sort').value = document.getElementById('panel2SortField').value;
	setTimeout(function(){
		if(gLog==1){console.log("Sort Update P2");}
		panel2Load("panel2");
	},100);
}
function panel2GetLocation(locID,locLA,locLO,locTYPE,locSQL) {
	if(gLog==1){console.log("panel2GetLocation - START");}
	document.getElementById('storeID').value = locID;
	document.getElementById('storeSQL').value = locSQL;
	document.getElementById('storeTYPE').value = locTYPE;
	document.getElementById('printSLA').value = document.getElementById('LA').value;
	document.getElementById('printSLO').value = document.getElementById('LO').value;
	document.getElementById('printELA').value = locLA;
	document.getElementById('printELO').value = locLO;
	if (locTYPE == 7) {
		document.getElementById('TTPROD').value = storeDisplayArray[locID][9];
	}
	if (locTYPE == 4) {
		document.getElementById('PBCPROD').value = storeDisplayArray[locID][9];
		document.getElementById('PBCCBK').value = storeDisplayArray[locID][29];
	}
	if (locTYPE == 9) {
		document.getElementById('VIPPROD').value = storeDisplayArray[locID][9];
		document.getElementById('PBCCBK').value = storeDisplayArray[locID][29];
	}
	panel2panel3Connect();
}
function panel2AvProd(locID,locLA,locLO,locTYPE,locSQL) {
	if(gLog==1){console.log("panel2AvProd - START");}
	document.getElementById('storeID').value = locID;
	document.getElementById('storeSQL').value = locSQL;
	document.getElementById('storeTYPE').value = locTYPE;
	document.getElementById('printSLA').value = document.getElementById('LA').value;
	document.getElementById('printSLO').value = document.getElementById('LO').value;
	document.getElementById('printELA').value = locLA;
	document.getElementById('printELO').value = locLO;
	if (locTYPE == 7) {
		document.getElementById('TTPROD').value = storeDisplayArray[locID][9];
	}
	if (locTYPE == 4) {
		document.getElementById('PBCPROD').value = storeDisplayArray[locID][9];
		document.getElementById('PBCCBK').value = storeDisplayArray[locID][29];
	}
	if (locTYPE == 9) {
		document.getElementById('VIPPROD').value = storeDisplayArray[locID][9];
		document.getElementById('PBCCBK').value = storeDisplayArray[locID][29];
	}
	panel2panel3Connect("panel3ProductsTab");
}
function panel2GetDirect(locID,locLA,locLO,locTYPE,locSQL) {
	if(gLog==1){console.log("panel2GetDirect - START");}
	document.getElementById('storeID').value = locID;
	document.getElementById('storeSQL').value = locSQL;
	document.getElementById('storeTYPE').value = locTYPE;
	document.getElementById('printSLA').value = document.getElementById('LA').value;
	document.getElementById('printSLO').value = document.getElementById('LO').value;
	document.getElementById('printELA').value = locLA;
	document.getElementById('printELO').value = locLO;
	if (locTYPE == 7) {
		document.getElementById('TTPROD').value = storeDisplayArray[locID][9];
	}
	if (locTYPE == 4) {
		document.getElementById('PBCPROD').value = storeDisplayArray[locID][9];
		document.getElementById('PBCCBK').value = storeDisplayArray[locID][29];
	}
	if (locTYPE == 9) {
		document.getElementById('VIPPROD').value = storeDisplayArray[locID][9];
		document.getElementById('PBCCBK').value = storeDisplayArray[locID][29];
	}
	panel2panel3Connect("panel3DirectionsTab");
}
function panel2GoEmail(locID,locLA,locLO,locTYPE,locSQL) {
	if(gLog==1){console.log("panel2GoEmail - START");}
	document.getElementById('storeID').value = locID;
	document.getElementById('storeSQL').value = locSQL;
	document.getElementById('storeTYPE').value = locTYPE;
	document.getElementById('printSLA').value = document.getElementById('LA').value;
	document.getElementById('printSLO').value = document.getElementById('LO').value;
	document.getElementById('printELA').value = locLA;
	document.getElementById('printELO').value = locLO;
	if (locTYPE == 7) {
		document.getElementById('TTPROD').value = storeDisplayArray[locID][9];
	}
	if (locTYPE == 4) {
		document.getElementById('PBCPROD').value = storeDisplayArray[locID][9];
		document.getElementById('PBCCBK').value = storeDisplayArray[locID][29];
	}
	if (locTYPE == 9) {
		document.getElementById('VIPPROD').value = storeDisplayArray[locID][9];
		document.getElementById('PBCCBK').value = storeDisplayArray[locID][29];
	}
	panel2panel3Connect("panel3EmailTab");
}
function panel2panel2Connect() {
	p2Connect();
}
function panel2panel3Connect(hoverButt) {
	if(gLog==1){console.log("panel2panel3Connect - START");}
	if (hoverButt) {
		p3Connect(hoverButt);
	}
	else {
		p3Connect();
	}
}
function panel2CCReq() {
	p4Connect();
}
function panel2Store() {
	storePanelSRC = 2;
	baseService = "panel8";
	if (fbEmail == "") {
		FB.login(function(response) {}, {scope: 'email'});
	}
	else {
		panel8LoginResponse();
	}
}
function panel2RTReq() {
	p5Connect();
}
function panel2AlertAllProducts() {
	if(gLog==1){console.log("panel2AlertAllProducts - START");}
	if (choiceWindow == 1) {clickToOff = 0;}
	choiceWindow = 0;
	var baseHTML = autotextIt(p2TemplateSet.panel2AllProductsDiv,"panel2AllProducts");
	var introTextTagStart = baseHTML.indexOf("<!--INTROTEXT");
	if (introTextTagStart != -1) {
		var introTextTagEnd = baseHTML.indexOf(">",introTextTagStart);
		var baseIntroTextHTMLStart = baseHTML.substr(0,introTextTagStart);
		var baseIntroTextHTMLEnd = baseHTML.substr((introTextTagEnd+1));
		baseHTML = baseIntroTextHTMLStart + choiceWindowText + baseIntroTextHTMLEnd;
	}
	var productSelectTagStart = baseHTML.indexOf("<!--PRODUCTSELECT");
	if (productSelectTagStart != -1) {
		var productSelectTagEnd = baseHTML.indexOf(">",productSelectTagStart);
		var productSelectTagStrip = baseHTML.substring(productSelectTagStart,(productSelectTagEnd+1));
		var productSelectHTMLStart = baseHTML.substr(0,productSelectTagStart);
		var productSelectHTMLEnd = baseHTML.substr((productSelectTagEnd+1));
		var productSelectRender = "";
		var productSelectValueStart = productSelectTagStrip.indexOf(" ALL=");
		var productSelectValueEnd = productSelectTagStrip.indexOf("]");
		if (productSelectValueStart != -1) {
			var productSelectValueVal = productSelectTagStrip.substring((productSelectValueStart+6),(productSelectValueEnd));
		}
		else {
			var productSelectValueVal = "Any/All Products";
		}
		productSelectRender += "<select name='panel2SubProductSelect' id='panel2SubProductSelect' class='panel_2_sub_product_select' onchange='setProductSelect(\"panel2SubProductSelect\");'><option value='ALL'";
		if (document.getElementById('PROD').value == document.getElementById('FULLPROD').value || document.getElementById('PROD').value == "") {
			productSelectRender += " selected='selected'";
		}
		productSelectRender += ">" + productSelectValueVal + "<\/option>";
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
		productSelectRender += "<\/select>";
		baseHTML = productSelectHTMLStart + productSelectRender + productSelectHTMLEnd;
	}
	var findFieldTagStart = baseHTML.indexOf("<!--FINDFIELD");
	if (findFieldTagStart != -1) {
		var findFieldTagEnd = baseHTML.indexOf(">",findFieldTagStart);
		var findFieldTagStrip = baseHTML.substring(findFieldTagStart,(findFieldTagEnd+1));
		var findFieldHTMLStart = baseHTML.substr(0,findFieldTagStart);
		var findFieldHTMLEnd = baseHTML.substr((findFieldTagEnd+1));
		var findFieldRender = "";
		var findFieldValueStart = findFieldTagStrip.indexOf(" VALUE=");
		if (findFieldValueStart != -1) {
			var findFieldValueEnd = findFieldTagStrip.indexOf("]");
			var findFieldValueVal = findFieldTagStrip.substring((findFieldValueStart+8),(findFieldValueEnd));
			var findFieldValueVar = findFieldValueVal;
			var findFieldValueRender = " value='"+findFieldValueVal+"'";
			var findFieldFocusRender = " onfocus='fieldBlurFocus(\"panel2FindField\",\""+findFieldValueVal+"\",1);'";
			var findFieldBlurRender = " onblur='fieldBlurFocus(\"panel2FindField\",\""+findFieldValueVal+"\",0);'";
		}
		else {
			var findFieldValueVar = "";
			var findFieldValueRender = "";
			var findFieldFocusRender = "";
			var findFieldBlurRender = "";
		}
		var findFieldSubStart = findFieldTagStrip.indexOf(" SUBMIT");
		if (findFieldSubStart != -1) {
			var findFieldSubRender = " onkeyup='panel2FieldKeypress(event,\"panel2FindField\",1);'";
		}
		else {
			var findFieldSubRender = " onkeyup='panel2FieldKeypress(event,\"panel2FindField\",0);'";
		}
		findFieldRender = "<input type='text' name='panel2FindField' id='panel2FindField' class='panel_2_find_field panel_2_find_field_base'" + findFieldValueRender + findFieldFocusRender + findFieldBlurRender + findFieldSubRender + " title=\"Enter Location\">";
		baseHTML = findFieldHTMLStart + findFieldRender + findFieldHTMLEnd;
	}
	var findButtonTagStart = baseHTML.indexOf("<!--FINDBUTTON");
	if (findButtonTagStart != -1) {
		var findButtonTagEnd = baseHTML.indexOf(">",findButtonTagStart);
		var findButtonTagStrip = baseHTML.substring(findButtonTagStart,(findButtonTagEnd+1));
		var findButtonHTMLStart = baseHTML.substr(0,findButtonTagStart);
		var findButtonHTMLEnd = baseHTML.substr((findButtonTagEnd+1));
		var findButtonRender = "";
		var findButtonValueStart = findButtonTagStrip.indexOf(" VALUE=");
		if (findButtonValueStart != -1) {
			var findButtonValueEnd = findButtonTagStrip.indexOf("]",findButtonValueStart);
			var findButtonValueVar = findButtonTagStrip.substring((findButtonValueStart+8),(findButtonValueEnd));
		}
		else {
			var findButtonValueVar = "VIEW RESULTS";
		}
		var findButtonItalicStart = findButtonTagStrip.indexOf(" FNTAW=");
		if (findButtonItalicStart != -1) {
			var findButtonItalicEnd = findButtonTagStrip.indexOf("]",findButtonItalicStart);
			var findButtonItalicVar = "<i class='fa " + findButtonTagStrip.substring((findButtonItalicStart+8),(findButtonItalicEnd)) + "'><\/i>";
		}
		else {
			var findButtonItalicVar = "";
		}
		findButtonRender += "<div id='panel2FindButton' class='panel_2_find_button panel_2_find_button_off'";
		if (hoverState==1) {
			findButtonRender += " onmouseover='panel2ButtonHover(\"panel2FindButton\",\"panel_2_find_button\",1);' onfocus='panel2ButtonHover(\"panel2FindButton\",\"panel_2_find_button\",1);' onmouseout='panel2ButtonHover(\"panel2FindButton\",\"panel_2_find_button\",0);' onblur='panel2ButtonHover(\"panel2FindButton\",\"panel_2_find_button\",0);'";
		}
		findButtonRender += " onclick='panel2FindSubmit();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){panel2FindSubmit();}' tabindex='0' title=\"" + findButtonValueVar + "\">" + findButtonItalicVar + findButtonValueVar + "<\/div>";
		baseHTML = findButtonHTMLStart + findButtonRender + findButtonHTMLEnd;
	}
	var findImgTagStart = baseHTML.indexOf("<!--FINDIMG");
	if (findImgTagStart != -1) {
		var findImgTagEnd = baseHTML.indexOf(">",findImgTagStart);
		var findImgTagStrip = baseHTML.substring(findImgTagStart,(findImgTagEnd+1));
		var findImgHTMLStart = baseHTML.substr(0,findImgTagStart);
		var findImgHTMLEnd = baseHTML.substr((findImgTagEnd+1));
		baseHTML = findImgHTMLStart + "<img title=\"" + coreClient + "\" alt=\"" + coreClient + "\" id='panel2FindImg' class='panel_2_find_img' src='" + DLiteImg + "''>" + findImgHTMLEnd;
	}
	var resultsButtonTagStart = baseHTML.indexOf("<!--RESULTSBUTTON");
	if (resultsButtonTagStart != -1) {
		var resultsButtonTagEnd = baseHTML.indexOf(">",resultsButtonTagStart);
		var resultsButtonTagStrip = baseHTML.substring(resultsButtonTagStart,(resultsButtonTagEnd+1));
		var resultsButtonHTMLStart = baseHTML.substr(0,resultsButtonTagStart);
		var resultsButtonHTMLEnd = baseHTML.substr((resultsButtonTagEnd+1));
		var resultsButtonRender = "";
		var resultsButtonValueStart = resultsButtonTagStrip.indexOf(" VALUE=");
		if (resultsButtonValueStart != -1) {
			var resultsButtonValueEnd = resultsButtonTagStrip.indexOf("]",resultsButtonValueStart);
			var resultsButtonValueVar = resultsButtonTagStrip.substring((resultsButtonValueStart+8),(resultsButtonValueEnd));
		}
		else {
			var resultsButtonValueVar = "VIEW RESULTS";
		}
		var resultsButtonItalicStart = resultsButtonTagStrip.indexOf(" FNTAW=");
		if (resultsButtonItalicStart != -1) {
			var resultsButtonItalicEnd = resultsButtonTagStrip.indexOf("]",resultsButtonItalicStart);
			var resultsButtonItalicVar = "<i class='fa " + resultsButtonTagStrip.substring((resultsButtonItalicStart+8),(resultsButtonItalicEnd)) + "'><\/i>";
		}
		else {
			var resultsButtonItalicVar = "";
		}
		resultsButtonRender += "<div id='panel2ResultsButton' class='panel_2_results_button panel_2_results_button_off'";
		if (hoverState==1) {
			resultsButtonRender += " onmouseover='panel2ButtonHover(\"panel2ResultsButton\",\"panel_2_results_button\",1);' onfocus='panel2ButtonHover(\"panel2ResultsButton\",\"panel_2_results_button\",1);' onmouseout='panel2ButtonHover(\"panel2ResultsButton\",\"panel_2_results_button\",0);' onblur='panel2ButtonHover(\"panel2ResultsButton\",\"panel_2_results_button\",0);'";
		}
		resultsButtonRender += " onclick='clickToOff=1;errorClose();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){clickToOff=1;errorClose();}' tabindex='0' title=\"" + resultsButtonValueVar + "\">" + resultsButtonItalicVar + resultsButtonValueVar + "<\/div>";
		baseHTML = resultsButtonHTMLStart + resultsButtonRender + resultsButtonHTMLEnd;
	}
	var errorButtonTagStart = baseHTML.indexOf("<!--ERRORBUTTON");
	if (errorButtonTagStart != -1) {
		var errorButtonTagEnd = baseHTML.indexOf(">",errorButtonTagStart);
		var errorButtonTagStrip = baseHTML.substring(errorButtonTagStart,(errorButtonTagEnd+1));
		var errorButtonHTMLStart = baseHTML.substr(0,errorButtonTagStart);
		var errorButtonHTMLEnd = baseHTML.substr((errorButtonTagEnd+1));
		var errorButtonRender = "";
		var errorButtonValueStart = errorButtonTagStrip.indexOf(" VALUE=");
		if (errorButtonValueStart != -1) {
			var errorButtonValueEnd = errorButtonTagStrip.indexOf("]",errorButtonValueStart);
			var errorButtonValueVar = errorButtonTagStrip.substring((errorButtonValueStart+8),(errorButtonValueEnd));
		}
		else {
			var errorButtonValueVar = "CONTACT US";
		}
		var errorButtonItalicStart = errorButtonTagStrip.indexOf(" FNTAW=");
		if (errorButtonItalicStart != -1) {
			var errorButtonItalicEnd = errorButtonTagStrip.indexOf("]",errorButtonItalicStart);
			var errorButtonItalicVar = "<i class='fa " + errorButtonTagStrip.substring((errorButtonItalicStart+8),(errorButtonItalicEnd)) + "'><\/i>";
		}
		else {
			var errorButtonItalicVar = "";
		}
		errorButtonRender += "<div id='panel2ErrorButton' class='panel_2_error_button panel_2_error_button_off'";
		if (hoverState==1) {
			errorButtonRender += " onmouseover='panel2ButtonHover(\"panel2ErrorButton\",\"panel_2_error_button\",1);' onfocus='panel2ButtonHover(\"panel2ErrorButton\",\"panel_2_error_button\",1);' onmouseout='panel2ButtonHover(\"panel2ErrorButton\",\"panel_2_error_button\",0);' onblur='panel2ButtonHover(\"panel2ErrorButton\",\"panel_2_error_button\",0);'";
		}
		errorButtonRender += " onclick='clickToOff=1;errorClose();panel2CCReq();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){clickToOff=1;errorClose();panel2CCReq();}' tabindex='0' title=\"Close\">" + errorButtonItalicVar + errorButtonValueVar + "<\/div>";
		baseHTML = errorButtonHTMLStart + errorButtonRender + errorButtonHTMLEnd;
	}
	document.getElementById('errorDivFront').innerHTML = baseHTML;
	document.getElementById('errorDivFront').style.display = "none";
	document.getElementById('errorDivFront').style.left = "0px";
	document.getElementById('errorDivFront').style.top = "0px";
	$("#errorDivBack").fadeIn(100);
	$("#errorDivFront").fadeIn(100);
}
function panel2FindSubmit() {
	if (document.getElementById('panel2AddressField') && document.getElementById('panel2FindField')) {
		clickToOff = 1;
		document.getElementById('panel2AddressField').value = document.getElementById('panel2FindField').value;
		panel2SubmitForm();
	}
	else {
		if(gLog==1){console.log("Missing Panel 2 Address Field");}
	}
}
function panel2GoogleLink(endLat, endLon, sID) {
	var startLat = document.getElementById('LA').value;
	var startLon = document.getElementById('LO').value;
	if (gtm != 0) {
		GTMit("STOREDIR", "click", "EXT|" + storeDisplayArray[sID][0] + "|" + storeDisplayArray[sID][1] + "|" + storeDisplayArray[sID][3] + "|" + storeDisplayArray[sID][4] + "|" + storeDisplayArray[sID][5] + "|" + storeDisplayArray[sID][6] + "|" + storeDisplayArray[sID][7] + "|" + storeDisplayArray[sID][27] + "|0",false);
	}
	window.open("http://maps.google.com/maps?saddr=" + startLat + "," + startLon + "&daddr=" + endLat + "," + endLon);
}
function panel2Hit(p2ct,p2local,p2spins,p2iri,p2wfm,p2niel,p2pbc,p2tt) {
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
			PCT: p2ct,
			PCLOCAL: p2local,
			PCSPINS: p2spins,
			PCIRI: p2iri,
			PCWFM: p2wfm,
			PCNIEL: p2niel,
			PCPBC: p2pbc,
			PCTT: p2tt,
			TRACK: "1",
			DUTV: dutv
			}, function(data){
				if(gLog==1){console.log("panel2Hit - tracktest: " , JSON.parse(data));}
			}
		);
	}
	else if (trackVal == 2 && allOnOne == 0) {
		setTimeout(function(){
			var sendObj = setTrackObj();
			sendObj['TRK'] = 1;
			sendObj['RQF'] = "panel2Hit";
			sendObj['PCT'] = p2ct;
			sendObj['PCL'] = p2local;
			sendObj['PCS'] = p2spins;
			sendObj['PCI'] = p2iri;
			sendObj['PCW'] = p2wfm;
			sendObj['PCN'] = p2niel;
			sendObj['PCP'] = p2pbc;
			sendTrackObj(sendObj);
		},300);
	}
	if (gtm != 0) {
		GTMit("LOAD", "response", "panel2",true);
	}
}
function p2FilterByUPC(theID,freezeIt) {
	genericCloseMe();
	var newIncr = 0;
	storeProdHoldArray.length = 0;
	storeDisplayArray.length = 0;
	var upcFilterArrTest = [];
	for (q=0; q<prodDisplayArray.length; q++) {
		if (prodDisplayArray[q][0] == theID) {
			upcFilterArrTest[0] = prodDisplayArray[q];
			break;
		}
	}
	if(storeArray.length) {
		if(gLog==1){console.log("p2FilterByUPC storeArray.length = " + storeArray.length);}
		if(gLog==1){console.log("p2FilterByUPC maxStoreNum = " + maxStoreNum);}
		for (s=0;s<storeArray.length;s++) {
			if (eval(storeArray[s][8]) <= distanceNum) {
				if(gLog==1){console.log("p2FilterByUPC (" + eval(storeArray[s][8]) + " <= " + distanceNum + ") && (id == "+storeArray[s][13]+")");}
				if (document.getElementById('SCFILTER').value != "") {
					var foundAFilteredStore = 0;
					var storeCatArrBase = storeArray[s][14].split(",");
					if(gLog==1){console.log("p2FilterByUPC SCFILTER - " + document.getElementById('SCFILTER').value + " / " , storeCatArrBase);}
					for (sc=0;sc<scFilterArray.length;sc++) {
						var breakIt = 0;
						for (sb=0;sb<storeCatArrBase.length;sb++) {
							if (scFilterArray[sc] == storeCatArrBase[sb]) {
								var isUPCFilter = 0;
								if (upcFilterArrTest.length) {
									var prodFilTestArr = storeArray[s][9].split(",");
									for (pft=0; pft<prodFilTestArr.length; pft++) {
										if (prodFilTestArr[pft] == upcFilterArrTest[0][0]) {
											isUPCFilter = 1;
											break;
										}
									}
								}
								else {
									isUPCFilter = 1;
								}
								if (isUPCFilter == 1 || (onretPar == 1 && storeArray[s][16] == 1)) {
									if (onretPar == 1 && storeArray[s][16] == 1) {if(gLog==1){console.log("panel2Load IRI Bypass");}}
									if(gLog==1){console.log("p2FilterByUPC SCFILTER INCLUDE - " + storeArray[s][8] + " / " + distanceNum);}
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
					if (upcFilterArrTest.length) {
						var prodFilTestArr = storeArray[s][9].split(",");
						for (pft=0; pft<prodFilTestArr.length; pft++) {
							if (prodFilTestArr[pft] == upcFilterArrTest[0][0]) {
								isUPCFilter = 1;
								break;
							}
						}
					}
					else {
						isUPCFilter = 1;
					}
					if (isUPCFilter == 1 || (onretPar == 1 && storeArray[s][16] == 1)) {
						if (onretPar == 1 && storeArray[s][16] == 1) {if(gLog==1){console.log("panel2Load IRI Bypass");}}
						if(gLog==1){console.log("p2FilterByUPC distanceNum INCLUDE - " + storeArray[s][8] + " / " + distanceNum);}
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
	var ecParity = 0;
	if (onretPar == 1) {
		if(gLog==1){console.log("p2FilterByUPC onretPar check");}
		for (x=0; x<onretClientArray.length;x++) {
			if (onretClientArray[x][8] == 1) {
				if(gLog==1){console.log("p2FilterByUPC onretClientArray[x][8] == 1 - " ,onretClientArray[x][1]);}
				for (tp=0; tp<prodDisplayArray.length; tp++) {
						if(gLog==1){console.log("p2FilterByUPC prodDisplayArray[tp][9] == 1 - " ,prodDisplayArray[tp][0]);}
						for (orp=0; orp<onretProdArray.length; orp++) {
							if (onretProdArray[orp][2] == prodDisplayArray[tp][0]) {
								if(gLog==1){console.log("p2FilterByUPC onretProdArray[orp][2] - " ,onretProdArray[orp][2]);}
								if (pariCol == 1) {
									ecParity = 1;
									break;
								}
								else {
									if (upcFilterArrTest.length) {
										if (upcFilterArrTest[0][0] == prodDisplayArray[tp][0]) {
											ecParity = 1;
											if(gLog==1){console.log("p2FilterByUPC ecParity - " ,prodDisplayArray[tp][0]);}
											break;
										}
									}
									else {
										ecParity = 1;
										break;
									}
								}
							}
						}
				}
			}
			else if (onretClientArray[x][8] == 2) {
				for (y=0; y<onretZipArray.length; y++) {
					if (onretZipArray[y][2] == document.getElementById('revCodeZip').value && onretZipArray[y][1] == onretClientArray[x][1]) {
						for (tp=0; tp<prodDisplayArray.length; tp++) {
								for (orp=0; orp<onretProdArray.length; orp++) {
									if (onretProdArray[orp][2] == prodDisplayArray[tp][0]) {
										if (pariCol == 1) {
											ecParity = 1;
											break;
										}
										else {
											if (upcFilterArrTest.length) {
												if (upcFilterArrTest[0][0] == prodDisplayArray[tp][0]) {
													ecParity = 1;
													if(gLog==1){console.log("p2FilterByUPC ecParity - " ,prodDisplayArray[tp][0]);}
													break;
												}
											}
											else {
												ecParity = 1;
												break;
											}
										}
									}
								}
						}
					}
					if (ecParity == 1) {
						break;
					}
				}
			}
			if (ecParity == 1) {
				break;
			}
		}
	}
	upcFilterArr[0] = upcFilterArrTest[0];
	if (document.getElementById('panel2ProdFilterSelectName') && freezeIt == 1) {
		document.getElementById('panel2ProdFilterSelectName').innerHTML = prodDisplayArray[theX][2];
	}
	if (document.getElementById('panel2UPCFilterName')) {
		document.getElementById('panel2UPCFilterName').innerHTML = upcFilterArr[0][2];
	}
	if (document.getElementById('panel2UPCFilterDesc')) {
		document.getElementById('panel2UPCFilterDesc').innerHTML = upcFilterArr[0][3];
	}
	if (document.getElementById('panel2UPCFilterUPC')) {
		document.getElementById('panel2UPCFilterUPC').innerHTML = upcFilterArr[0][1];
	}
	if (document.getElementById('panel2UPCFilterBigImg')) {
		document.getElementById('panel2UPCFilterBigImg').src = clientImgBase + upcFilterArr[0][4];
	}
	if (document.getElementById('panel2UPCFilterSmImg')) {
		document.getElementById('panel2UPCFilterSmImg').src = clientImgBase + upcFilterArr[0][5];
	}
	if (storeDisplayArray.length || storeProdHoldArray.length) {
		if(gLog==1){console.log("p2FilterByUPC - panel2WriteLocList()");}
		if (document.getElementById('panel2MultiMap')) {
			panel2CompileMultiMap();
		}
		if (document.getElementById('panel2LocListShell')) {
			panel2WriteLocList();
		}
		$(".p2_store_parity").show();
	}
	else {
		if(gLog==1){console.log("p2FilterByUPC - NO STORE RESULTS");}
		if (document.getElementById('panel2MultiMap')) {
			document.getElementById('panel2MultiMap').innerHTML = "";
		}
		if (document.getElementById('panel2LocListShell')) {
			if (p2SearchMade == 1) {
				document.getElementById('panel2LocListShell').innerHTML = autotextIt(p2TemplateSet.panel2LocNoResDiv,"panel2LocNoRes");
			}
		}
		if (document.getElementById('panel2ResultsTotal')) {
			document.getElementById('panel2ResultsTotal').innerHTML = "0";
		}
		$(".p2_store_parity").hide();
	}
	if (ecParity == 1) {
		if(gLog==1){console.log("p2FilterByUPC - ecParity == 1");}
		if (document.getElementById('panel2ECommListShell') && ecStyle == 1) {
			panel2WriteECommList();
		}
		else if (document.getElementById('panel2ECommListShell') && ecStyle == 2) {
			showOnRet();
		}
		$(".p2_ecomm_parity").show();
	}
	else {
		if(gLog==1){console.log("p2FilterByUPC - NO ECOMM RESULTS");}
		if (document.getElementById('panel2ECommListShell')) {
			document.getElementById('panel2ECommListShell').innerHTML = "";
		}
		$(".p2_ecomm_parity").hide();
	}
}
function p2FilterByCat(theID,freezeIt) {
	genericCloseMe();
	var newIncr = 0;
	storeProdHoldArray.length = 0;
	storeDisplayArray.length = 0;
	var upcFilterArrTest = [];
	for (q=0; q<prodDisplayArray.length; q++) {
		if (prodDisplayArray[q][8] == theID) {
			upcFilterArrTest.push(prodDisplayArray[q]);
		}
	}
	if(storeArray.length) {
		if(gLog==1){console.log("p2FilterByUPC storeArray.length = " + storeArray.length);}
		if(gLog==1){console.log("p2FilterByUPC maxStoreNum = " + maxStoreNum);}
		for (s=0;s<storeArray.length;s++) {
			if (eval(storeArray[s][8]) <= distanceNum) {
				if(gLog==1){console.log("p2FilterByUPC (" + eval(storeArray[s][8]) + " <= " + distanceNum + ") && (id == "+storeArray[s][13]+")");}
				if (document.getElementById('SCFILTER').value != "") {
					var foundAFilteredStore = 0;
					var storeCatArrBase = storeArray[s][14].split(",");
					if(gLog==1){console.log("p2FilterByUPC SCFILTER - " + document.getElementById('SCFILTER').value + " / " , storeCatArrBase);}
					for (sc=0;sc<scFilterArray.length;sc++) {
						var breakIt = 0;
						for (sb=0;sb<storeCatArrBase.length;sb++) {
							if (scFilterArray[sc] == storeCatArrBase[sb]) {
								var isUPCFilter = 0;
								if (upcFilterArrTest.length) {
									var prodFilTestArr = storeArray[s][9].split(",");
									for (pft=0; pft<prodFilTestArr.length; pft++) {
										for (ufat=0; ufat<upcFilterArrTest.length; ufat++) {
											if (prodFilTestArr[pft] == upcFilterArrTest[ufat][0]) {
												isUPCFilter = 1;
												break;
											}
										}
										if (isUPCFilter == 1) {
											break;
										}
									}
								}
								else {
									isUPCFilter = 1;
								}
								if (isUPCFilter == 1) {
									if(gLog==1){console.log("p2FilterByUPC SCFILTER INCLUDE - " + storeArray[s][8] + " / " + distanceNum);}
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
					if (upcFilterArrTest.length) {
						var prodFilTestArr = storeArray[s][9].split(",");
						for (pft=0; pft<prodFilTestArr.length; pft++) {
							for (ufat=0; ufat<upcFilterArrTest.length; ufat++) {
								if (prodFilTestArr[pft] == upcFilterArrTest[0][0]) {
									isUPCFilter = 1;
									break;
								}
							}
							if (isUPCFilter == 1) {
								break;
							}
						}
					}
					else {
						isUPCFilter = 1;
					}
					if (isUPCFilter == 1) {
						if(gLog==1){console.log("p2FilterByUPC distanceNum INCLUDE - " + storeArray[s][8] + " / " + distanceNum);}
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
	var ecParity = 0;
	if (onretPar == 1) {
		if(gLog==1){console.log("p2FilterByUPC onretPar check");}
		for (x=0; x<onretClientArray.length;x++) {
			if (onretClientArray[x][8] == 1) {
				if(gLog==1){console.log("p2FilterByUPC onretClientArray[x][8] == 1 - " ,onretClientArray[x][1]);}
				for (tp=0; tp<prodDisplayArray.length; tp++) {
					if(gLog==1){console.log("p2FilterByUPC prodDisplayArray[tp][9] == 1 - " ,prodDisplayArray[tp][0]);}
					for (orp=0; orp<onretProdArray.length; orp++) {
						if (onretProdArray[orp][2] == prodDisplayArray[tp][0]) {
							if(gLog==1){console.log("p2FilterByUPC onretProdArray[orp][2] - " ,onretProdArray[orp][2]);}
							if (pariCol == 1) {
								ecParity = 1;
								break;
							}
							else {
								if (upcFilterArrTest.length) {
									for (ufat=0; ufat<upcFilterArrTest.length; ufat++) {
										if (upcFilterArrTest[ufat][0] == prodDisplayArray[tp][0]) {
											ecParity = 1;
											if(gLog==1){console.log("p2FilterByUPC ecParity - " ,prodDisplayArray[tp][0]);}
											break;
										}
									}
									if (ecParity == 1) {
										break;
									}
								}
								else {
									ecParity = 1;
									break;
								}
							}
						}
					}
				}
			}
			else if (onretClientArray[x][8] == 2) {
				for (y=0; y<onretZipArray.length; y++) {
					if (onretZipArray[y][2] == document.getElementById('revCodeZip').value && onretZipArray[y][1] == onretClientArray[x][1]) {
						for (tp=0; tp<prodDisplayArray.length; tp++) {
							for (orp=0; orp<onretProdArray.length; orp++) {
								if (onretProdArray[orp][2] == prodDisplayArray[tp][0]) {
									if (pariCol == 1) {
										ecParity = 1;
										break;
									}
									else {
										if (upcFilterArrTest.length) {
											for (ufat=0; ufat<upcFilterArrTest.length; ufat++) {
												if (upcFilterArrTest[0][0] == prodDisplayArray[tp][0]) {
													ecParity = 1;
													if(gLog==1){console.log("p2FilterByUPC ecParity - " ,prodDisplayArray[tp][0]);}
													break;
												}
											}
											if (ecParity == 1) {
												break;
											}
										}
										else {
											ecParity = 1;
											break;
										}
									}
								}
							}
						}
					}
					if (ecParity == 1) {
						break;
					}
				}
			}
			if (ecParity == 1) {
				break;
			}
		}
	}
	upcFilterArr[0] = upcFilterArrTest[0];
	for (q=0; q<catArray.length;q++) {
		if (upcFilterArr[0][8] == catArray[q][0]) {
			if (document.getElementById('panel2ProdFilterSelectName') && freezeIt == 1) {
				document.getElementById('panel2ProdFilterSelectName').innerHTML = catArray[q][1];
			}
			if (document.getElementById('panel2UPCFilterName')) {
				document.getElementById('panel2UPCFilterName').innerHTML = catArray[q][1];
			}
			if (document.getElementById('panel2UPCFilterBigImg')) {
				document.getElementById('panel2UPCFilterBigImg').src = clientImgBase + catArray[q][3];
			}
			if (document.getElementById('panel2UPCFilterSmImg')) {
				document.getElementById('panel2UPCFilterSmImg').src = clientImgBase + catArray[q][4];
			}
			break;
		}
	}
	if (storeDisplayArray.length || storeProdHoldArray.length) {
		if(gLog==1){console.log("p2FilterByUPC - panel2WriteLocList()");}
		if (document.getElementById('panel2MultiMap')) {
			panel2CompileMultiMap();
		}
		if (document.getElementById('panel2LocListShell')) {
			panel2WriteLocList();
		}
		$(".p2_store_parity").show();
	}
	else {
		if(gLog==1){console.log("p2FilterByUPC - NO STORE RESULTS");}
		if (document.getElementById('panel2MultiMap')) {
			document.getElementById('panel2MultiMap').innerHTML = "";
		}
		if (document.getElementById('panel2LocListShell')) {
			if (p2SearchMade == 1) {
				document.getElementById('panel2LocListShell').innerHTML = autotextIt(p2TemplateSet.panel2LocNoResDiv,"panel2LocNoRes");
			}
		}
		if (document.getElementById('panel2ResultsTotal')) {
			document.getElementById('panel2ResultsTotal').innerHTML = "0";
		}
		$(".p2_store_parity").hide();
	}
	if (ecParity == 1) {
		if(gLog==1){console.log("p2FilterByUPC - ecParity == 1");}
		if (document.getElementById('panel2ECommListShell')) {
			panel2WriteECommList();
		}
		else if (document.getElementById('panel2ECommListShell') && ecStyle == 2) {
			showOnRet();
		}
		$(".p2_ecomm_parity").show();
	}
	else {
		if(gLog==1){console.log("p2FilterByUPC - NO ECOMM RESULTS");}
		if (document.getElementById('panel2ECommListShell')) {
			document.getElementById('panel2ECommListShell').innerHTML = "";
		}
		$(".p2_ecomm_parity").hide();
	}
}
var thisLECID = 0;
function toggleLEC(sID) {
	if (document.getElementById("panel2LocExpProd"+sID)) {
		if (sID == thisLECID) {
			$("#panel2LocExpHide"+sID).hide();
			$("#panel2LocExpShow"+sID).show();
			$("#panel2LocExpProd"+sID).slideUp(150);
			thisLECID = 0;
		}
		else {
			if (thisLECID != 0) {
				$("#panel2LocExpHide"+thisLECID).hide();
				$("#panel2LocExpShow"+thisLECID).show();
				$("#panel2LocExpProd"+thisLECID).slideUp(150);
			}
			$("#panel2LocExpShow"+sID).hide();
			$("#panel2LocExpHide"+sID).show();
			$("#panel2LocExpProd"+sID).slideDown(150);
			thisLECID = sID;
		}
	}
}
function widgetTabButtonOver(theID) {
	if ($("#widgetTabActiveButton"+theID).hasClass("widget_tab_active_button_on")) {
		$("#widgetTabActiveButton"+theID).removeClass("widget_tab_active_button_on");
		$("#widgetTabActiveButton"+theID).addClass("widget_tab_active_button_hover_on");
	}
	else if ($("#widgetTabActiveButton"+theID).hasClass("widget_tab_active_button_off")) {
		$("#widgetTabActiveButton"+theID).removeClass("widget_tab_active_button_off");
		$("#widgetTabActiveButton"+theID).addClass("widget_tab_active_button_hover_off");
	}
}
function widgetTabButtonOut(theID) {
	if ($("#widgetTabActiveButton"+theID).hasClass("widget_tab_active_button_hover_on")) {
		$("#widgetTabActiveButton"+theID).removeClass("widget_tab_active_button_hover_on");
		$("#widgetTabActiveButton"+theID).addClass("widget_tab_active_button_on");
	}
	else if ($("#widgetTabActiveButton"+theID).hasClass("widget_tab_active_button_hover_off")) {
		$("#widgetTabActiveButton"+theID).removeClass("widget_tab_active_button_hover_off");
		$("#widgetTabActiveButton"+theID).addClass("widget_tab_active_button_off");
	}
}
function widgetTabButtonClick(theType, theID) {
	widgetUp = theID;
	var otherID = "One";
	if (theID == "One") {
		otherID = "Two";
	}
	if ($("#widgetTabActiveButton"+theID).hasClass("widget_tab_active_button_off") || $("#widgetTabActiveButton"+theID).hasClass("widget_tab_active_button_hover_off")) {
		$("#widgetTabActiveButton"+theID).removeClass("widget_tab_active_button_off");
		$("#widgetTabActiveButton"+theID).removeClass("widget_tab_active_button_hover_off");
		$("#widgetTabActiveButton"+theID).removeClass("widget_tab_active_button_hover_on");
		$("#widgetTabActiveButton"+theID).addClass("widget_tab_active_button_on");
		$("#widgetTabActiveButton"+otherID).removeClass("widget_tab_active_button_on");
		$("#widgetTabActiveButton"+otherID).removeClass("widget_tab_active_button_hover_off");
		$("#widgetTabActiveButton"+otherID).removeClass("widget_tab_active_button_hover_on");
		$("#widgetTabActiveButton"+otherID).addClass("widget_tab_active_button_off");
	}
	if (theType == "EC") {
		$("#widgetAreaBMShell").hide();
		$("#widgetAreaECShell").show();
	}
	else if (theType == "BM") {
		$("#widgetAreaECShell").hide();
		$("#widgetAreaBMShell").show();
		if (atlantis == 1) {
			drawMap();
		}
		else {
			panel2DrawMultiMap();
		}
	}
}
function widgetAreaEC(theSize, theVis) {
	if (theSize == 1) {
		var ecHTML = autotextIt(p2TemplateSet.panel2WidgetAreaECSideDiv,"panel2WidgetAreaECSide");
	}
	else {
		var ecHTML = autotextIt(p2TemplateSet.panel2WidgetAreaECDiv,"panel2WidgetAreaEC");
	}
	ecVis = "";
	if (theVis == 2) {
		ecVis = " style='display:none;'";
	}
	var ecNoBM = "";
	if (bmNoRes == 1) {
		ecNoBM = autotextIt(p2TemplateSet.panel2WidgetNoBMDiv,"panel2WidgetNoBM");
		var noBMTagStart = ecHTML.indexOf("<!--NOBM");
		if (noBMTagStart != -1) {
			var noBMTagEnd = ecHTML.indexOf(">",noBMTagStart);
			var noBMTagStrip = ecHTML.substring(noBMTagStart,(noBMTagEnd+1));
			var noBMHTMLStart = ecHTML.substr(0,noBMTagStart);
			var noBMHTMLEnd = ecHTML.substr((noBMTagEnd+1));
			ecHTML = noBMHTMLStart + ecNoBM + noBMHTMLEnd;
		}
	}
	ecHTML = "<span id='widgetAreaECShell'" + ecVis + ">" + ecHTML + "<\/span>";
	return ecHTML;
}
function widgetAreaBM(theSize, theVis) {
	if (theSize == 1) {
		var bmHTML = autotextIt(p2TemplateSet.panel2WidgetAreaBMSideDiv,"panel2WidgetAreaBMSide");
	}
	else {
		var bmHTML = autotextIt(p2TemplateSet.panel2WidgetAreaBMDiv,"panel2WidgetAreaBM");
	}
	bmVis = "";
	if (theVis == 2) {
		bmVis = " style='display:none;'";
	}
	var bmNoEC = "";
	if (ecNoRes == 1) {
		bmNoEC = autotextIt(p2TemplateSet.panel2WidgetNoECDiv,"panel2WidgetNoEC");
		var noECTagStart = bmHTML.indexOf("<!--NOEC");
		if (noECTagStart != -1) {
			var noECTagEnd = bmHTML.indexOf(">",noECTagStart);
			var noECTagStrip = bmHTML.substring(noECTagStart,(noECTagEnd+1));
			var noECHTMLStart = bmHTML.substr(0,noECTagStart);
			var noECHTMLEnd = bmHTML.substr((noECTagEnd+1));
			bmHTML = noECHTMLStart + bmNoEC + noECHTMLEnd;
		}
	}
	bmHTML = "<span id='widgetAreaBMShell'" + bmVis + ">" + bmHTML + "<\/span>";
	return bmHTML;
}
function widgetAreaNone(theSize, theVis) {
	if (foundProducts != 0) {
		var noneHTML = autotextIt(p2TemplateSet.panel2WidgetAreaNoneDiv,"panel2WidgetAreaNone");
	}
	else {
		var noneHTML = autotextIt(p2TemplateSet.panel2WidgetAreaNoProdDiv,"panel2WidgetAreaNoProd");
	}
	noneHTML = "<span id='widgetAreaNoneShell'>" + noneHTML + "<\/span>";
	return noneHTML;
}
function panel2CopyStoreListText(whatElm,baseText,altText) {
	var writeVal = "";
	var gotTitle = "Store Results for " + document.getElementById('revCodeZip').value;
	if ((whatStoreUp+resultsNum) > storeDisplayArray.length) {
		var whatStoreEnd = storeDisplayArray.length;
	}
	else {
		var whatStoreEnd = whatStoreUp+resultsNum;
	}
	for (x=whatStoreUp; x<whatStoreEnd; x++) {
		if (storeDisplayArray[x][15] != "") {
			var phoneFormat = storeDisplayArray[x][15].substring(0,3)+"."+storeDisplayArray[x][15].substring(3,6)+"."+storeDisplayArray[x][15].substring(6,10) + "<br>";
		}
		else {
			var phoneFormat = "";
		}
		writeVal += "<br>" + storeDisplayArray[x][0] + "<br>" + storeDisplayArray[x][1] + "<br>" + storeDisplayArray[x][3] + ", " + storeDisplayArray[x][4] + " " + storeDisplayArray[x][5] + "<br>" + phoneFormat;
	}
	copyIt(writeVal,whatElm,baseText,altText,gotTitle);
}
scriptLoad++;
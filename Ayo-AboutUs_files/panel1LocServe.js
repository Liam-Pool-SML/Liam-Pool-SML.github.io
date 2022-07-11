function panel1GetLatLngDetail(lat,lng,statusVar) {
	require(["esri/config", "esri/tasks/locator", "esri/geometry/Point", "esri/geometry/webMercatorUtils", "dojo/number", "dojo/parser", "esri/tasks/AddressCandidate", "dojo/_base/array", "dojo/domReady!"],
	function(esriConfig, Locator, Point, webMercatorUtils, number, parser, AddressCandidate, array) {
		parser.parse();
		esriConfig.defaults.io.timeout = 6000;
		p1rlocator = new Locator("//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer");
		var thisPoint = new Point(parseFloat(lng),parseFloat(lat));
		if(gLog==1){var pointstr = dojo.toJson(thisPoint);console.log("thisPoint: " + lng + "/" + lat + "(" + pointstr + ")");}
		if (esriCA == 0) {
			if(gLog==1){console.log("panel1GetLatLngDetail - Midpoint Interval Start");}
			esriCA = 1;
			esriLoadIt = 0;
			esriTimeCurr = 0;
			EIO = 1;
			esriIntTrack = 1;
			esriIntervalOn();
		}
		var p1rlocationToAddress = p1rlocator.locationToAddress(thisPoint, 10000);
		p1rlocationToAddress.then(function(evt){
			if(gLog==1){console.log("panel1GetLatLngDetail - evt.address ", evt.address);}
			if (esriIntTrack == 1) {
				esriIntTrack = 0;
				esriLoadIt = 1;
				if (evt.address) {
					if(gLog==1){console.log(evt.address);}
					p1GetDaStreet = evt.address.Address;
					p1GetDaCity = evt.address.City;
					p1GetDaState = evt.address.Region;
					p1GetDaCountry = evt.address.CountryCode;
					if (evt.address.CountryCode == "CAN") {
						p1GetDaZip = evt.address.Postal + " " + evt.address.PostalExt;
					}
					else {
						p1GetDaZip = evt.address.Postal;
					}
					document.getElementById('revCodeUS').value = 0;
					if (p1GetDaState != "null" && p1GetDaState != null) {
						var p1StateTemp = p1GetDaState.toLowerCase();
						for	(st=0; st<tblStateArray.length; st++) {
							if (tblStateArray[st][1].toLowerCase() == p1StateTemp) {
								p1GetDaState = tblStateArray[st][0];
								document.getElementById('revCodeUS').value = tblStateArray[st][2];
								break;
							}
						}
					}
					document.getElementById('revCodeStreet').value = p1GetDaStreet;
					document.getElementById('revCodeCity').value = p1GetDaCity;
					document.getElementById('revCodeState').value = p1GetDaState;
					document.getElementById('revCodeZip').value = p1GetDaZip;
					document.getElementById('revCodeCountry').value = p1GetDaCountry;
					var revCC = "";
					if (document.getElementById('revCodeStreet').value != "" && document.getElementById('revCodeStreet').value != "undefined") {
						revCC += document.getElementById('revCodeStreet').value + ", ";
					}
					if (document.getElementById('revCodeCity').value != "" && document.getElementById('revCodeCity').value != "undefined") {
						revCC += document.getElementById('revCodeCity').value + ", ";
					}
					if (document.getElementById('revCodeState').value != "" && document.getElementById('revCodeState').value != "undefined") {
						revCC += document.getElementById('revCodeState').value + " ";
					}
					if (document.getElementById('revCodeZip').value != "" && document.getElementById('revCodeZip').value != "undefined") {
						revCC += document.getElementById('revCodeZip').value + " ";
					}
					if (document.getElementById('revCodeCountry').value != "" && document.getElementById('revCodeCountry').value != "undefined") {
						revCC += document.getElementById('revCodeCountry').value;
					}
					document.getElementById('revCodeCompile').value = revCC;
					var addressDisplay = "";
					if (p1GetDaStreet != "null" && p1GetDaStreet != null) {
						addressDisplay += p1GetDaStreet;
					}
					if (p1GetDaCity != "null" && p1GetDaCity != null) {
						addressDisplay += " " + p1GetDaCity;
					}
					if (p1GetDaState != "null" && p1GetDaState != null) {
						addressDisplay += " " + p1GetDaState;
					}
					if (p1GetDaZip != "null" && p1GetDaZip != null) {
						addressDisplay += " " + p1GetDaZip;
					}
					if (document.getElementById('panel1CityField')) {
						document.getElementById('panel1CityField').value = p1GetDaCity;
						document.getElementById('city').value = p1GetDaCity;
					}
					if (document.getElementById('panel1StateField')) {
						document.getElementById('panel1StateField').value = p1GetDaState;
						document.getElementById('state').value = p1GetDaState;
					}
					if (document.getElementById('panel1ZipField')) {
						document.getElementById('panel1ZipField').value = p1GetDaZip;
						document.getElementById('zip').value = p1GetDaZip;
					}
					if (document.getElementById('panel1AddressField')) {
						document.getElementById('street').value = document.getElementById('panel1AddressField').value;
					}
					document.getElementById('addressCompile').value = addressDisplay;
					document.getElementById('GRAW').value = addressDisplay;
					if(gLog==1){console.log("panel1LocServe.php - Reverse Geocoded Compilation: " + addressDisplay);}
					if (statusVar) {
	  					if (apMMShowVal == 0) {
							if(gLog==1){console.log("panel1GetLatLngDetail - statusVar apMMShowVal == 0");}
							document.getElementById('panel1AddressField').value = addressDisplay;
						}
						else {
							if(gLog==1){console.log("panel1GetLatLngDetail - statusVar apMMShowVal != 0");}
							document.getElementById('panel1AddressField').value = document.getElementById('revCodeZip').value;
							apMMShowVal = 0;
						}
						if (statusVar == 1) {
							if(gLog==1){console.log("panel1GetLatLngDetail - panel1panel2Connect()");}
							panel1panel2Connect();
	 					}
	    			}
	    			else {
	  					if (apMMShowVal == 0) {
							if(gLog==1){console.log("panel1GetLatLngDetail - apMMShowVal == 0");}
							document.getElementById('panel1AddressField').value = addressDisplay;
						}
	    				panel1panel2Connect();
	    			}
	    		}
	      		else {
					if(gLog==1){console.log("panel1GetLatLngDetail - evt.address FAIL");}
					p4Connect();
				}
			}
		},
		function(err){
			p4Connect();
		});
	});
}
function panel1CodeAddress() {
	rteStoreObj.val.length = 0;
	p2dealDisable = 0;
	if(gLog==1){console.log("panel1CodeAddress() p2dealDisable = " + p2dealDisable);}
	p1codeTries++;
	var addressCompile = "";
	if (document.getElementById('street').value != "" && document.getElementById('street').value != p1AddFieldValueVar) {
		addressCompile += document.getElementById('street').value;
	}
	if (document.getElementById('city').value != "") {
		addressCompile += " " + document.getElementById('city').value;
	}
	if (document.getElementById('state').value != "") {
		addressCompile += " " + document.getElementById('state').value;
	}
	if (document.getElementById('zip').value != "") {
		addressCompile += " " + document.getElementById('zip').value;
	}
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
	document.getElementById('addressCompile').value = addressCompile;
	document.getElementById('GRAW').value = addressCompile;
	if(gLog==1){console.log("panel1CodeAddress - Initial Address Compilation: " + addressCompile);}
	require(["esri/config", "esri/tasks/locator", "esri/SpatialReference", "esri/geometry/Point", "esri/geometry/Extent", "esri/geometry/webMercatorUtils", "dojo/_base/array", "dojo/number", "dojo/parser", "dojo/json", "dijit/registry", "dojo/domReady!"], function(esriConfig, Locator, SpatialReference, Point, Extent, webMercatorUtils, arrayUtils, number, parser, JSON, registry) {
		parser.parse();
		esriConfig.defaults.io.timeout = 6000;
		p1locator = new Locator("//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer");
		var address = {
			"SingleLine": addressCompile
		};
		var options = {
			address: address,
			outFields: ["*"]
		};
		p1addressToLocations = p1locator.addressToLocations(options);
		p1addressToLocations.then(function(evt){
			if(gLog==1){console.log(evt);}
			p1LLPairArray.length = 0;
			if (evt[0]) {
				var result = evt[0];
				if(gLog==1){console.log("panel1CodeAddress - evt[0]: " , result);}
				var x = result.location.x.toFixed(5); //lng
				var y = result.location.y.toFixed(5); //lat
				p1GetDaStreet = result.attributes.StAddr;
				p1GetDaCity = result.attributes.City;
				p1GetDaState = result.attributes.Region;
				p1GetDaCountry = result.attributes.Country;
				if (result.attributes.Country == "CAN") {
					p1GetDaZip = result.attributes.Postal + " " + result.attributes.PostalExt;
				}
				else {
					p1GetDaZip = result.attributes.Postal;
				}
				p1LLPairArray[0] = [y,x];
			}
			if (p1LLPairArray.length) {
				document.getElementById("LA").value = p1LLPairArray[0][0];
				document.getElementById("LO").value = p1LLPairArray[0][1];
				if (p1GetDaCountry == "USA" && p1GetDaZip == "") {
					panel1GetLatLngDetail(p1LLPairArray[0][0],p1LLPairArray[0][1],1);
				}
				else {
					document.getElementById('revCodeUS').value = 0;
					if (p1GetDaState != "null" && p1GetDaState != null) {
						var p1StateTemp = p1GetDaState.toLowerCase();
						for	(st=0; st<tblStateArray.length; st++) {
							if (tblStateArray[st][1].toLowerCase() == p1StateTemp) {
								p1GetDaState = tblStateArray[st][0];
								document.getElementById('revCodeUS').value = tblStateArray[st][2];
								break;
							}
						}
					}
					document.getElementById('revCodeStreet').value = p1GetDaStreet;
					document.getElementById('revCodeCity').value = p1GetDaCity;
					document.getElementById('revCodeState').value = p1GetDaState;
					document.getElementById('revCodeZip').value = p1GetDaZip;
					document.getElementById('revCodeCountry').value = p1GetDaCountry;
					var revCC = "";
					if (document.getElementById('revCodeStreet').value != "" && document.getElementById('revCodeStreet').value != "undefined") {
						revCC += document.getElementById('revCodeStreet').value + ", ";
					}
					if (document.getElementById('revCodeCity').value != "" && document.getElementById('revCodeCity').value != "undefined") {
						revCC += document.getElementById('revCodeCity').value + ", ";
					}
					if (document.getElementById('revCodeState').value != "" && document.getElementById('revCodeState').value != "undefined") {
						revCC += document.getElementById('revCodeState').value + " ";
					}
					if (document.getElementById('revCodeZip').value != "" && document.getElementById('revCodeZip').value != "undefined") {
						revCC += document.getElementById('revCodeZip').value + " ";
					}
					if (document.getElementById('revCodeCountry').value != "" && document.getElementById('revCodeCountry').value != "undefined") {
						revCC += document.getElementById('revCodeCountry').value;
					}
					document.getElementById('revCodeCompile').value = revCC;
					var addressDisplay = "";
					if (p1GetDaStreet != "null" && p1GetDaStreet != null) {
						addressDisplay += p1GetDaStreet;
					}
					if (p1GetDaCity != "null" && p1GetDaCity != null) {
						addressDisplay += " " + p1GetDaCity;
					}
					if (p1GetDaState != "null" && p1GetDaState != null) {
						addressDisplay += " " + p1GetDaState;
					}
					if (p1GetDaZip != "null" && p1GetDaZip != null) {
						addressDisplay += " " + p1GetDaZip;
					}
					if (document.getElementById('panel1CityField')) {
						document.getElementById('panel1CityField').value = p1GetDaCity;
						document.getElementById('city').value = p1GetDaCity;
					}
					if (document.getElementById('panel1StateField')) {
						document.getElementById('panel1StateField').value = p1GetDaState;
						document.getElementById('state').value = p1GetDaState;
					}
					if (document.getElementById('panel1ZipField')) {
						document.getElementById('panel1ZipField').value = p1GetDaZip;
						document.getElementById('zip').value = p1GetDaZip;
					}
					if (document.getElementById('panel1AddressField')) {
						document.getElementById('street').value = document.getElementById('panel1AddressField').value;
					}
					document.getElementById('addressCompile').value = addressDisplay;
					document.getElementById('GRAW').value = addressDisplay;
					if(gLog==1){console.log("panel1CodeAddress - Reverse Geocoded Compilation: " + addressDisplay);}
	    			panel1panel2Connect();
	    		}
			}
			else {
				errorText("Please enter a valid address",2);
			}
		},
		function(err){
			if(gLog==1){console.log(err.message);}
			if (p1codeTries < geoTries) {
				panel1CodeAddress();
			}
			else {
				if (autoShell == 0) {
					failOver(1);
				}
				else {
					errorText("We could not find that location. Please try again.",1);
				}
			}
		});
	});
}
function panel1DrawMultiMap() {
	mapWriteTrack = 1;
	p1MapDrawn = 0;
	panel1WhatInfo = -1;
	if(gLog==1){console.log("panel1DrawMultiMap");}
	if (defZoom == 0 && document.getElementById('panel1MultiMap')) {
		compiledZoom = 11;
		if (document.getElementById('panel0').offsetHeight > 950) {
			var whatzHeight = 950;
		}
		else {
			var whatzHeight = document.getElementById('panel0').offsetHeight;
		}
		var mapbbWidth = document.getElementById('panel0').offsetWidth - 350;
		var mapbbHeight = whatzHeight - 150;
		if (mapzoomBox == 0) {
			if (mapbbWidth <= mapbbHeight) {
				var thisMinBound = mapbbWidth;
			}
			else {
				var thisMinBound = mapbbHeight;
			}
			var mapzoomCurBox = Math.floor(thisMinBound/4);
			if(gLog==1){console.log("panel1MultiMap (Bounding Box) ABSOLUTE - [" + mapbbWidth + "w/" + mapbbHeight + "h] [" + mapzoomCurBox + "]");}
		}
		else {
			var mapzoomCurBox = Math.floor((mapbbWidth+mapbbHeight)/8);
			if(gLog==1){console.log("panel1MultiMap (Bounding Box) MEAN - [" + mapbbWidth + "w/" + mapbbHeight + "h] [" + mapzoomCurBox + "]");}
		}
		var checkScale = Math.ceil(mapzoomCurLoc/mapzoomCurBox);
		for (qt=0; qt<zoomArray.length; qt++) {
			if (checkScale > zoomArray[qt]) {
				compiledZoom = qt-1;
				break;
			}
		}
		if (compiledZoom < 5) {compiledZoom = 5;}
		else if (compiledZoom > 14) {compiledZoom = 14;}
		if(gLog==1){console.log("panel1MultiMap (set zoom level) - [zoom="+compiledZoom+"] [checkScale="+checkScale+"] [zoomArray="+zoomArray[compiledZoom+1]+"]");}
	}
	else {
		if(gLog==1){console.log("panel1MultiMap (set zoom level) - compiledZoom = defZoom");}
		compiledZoom = defZoom;
	}
	if (document.getElementById('panel1MultiMap')) {
		document.getElementById('panel1MultiMap').innerHTML="";
		require(["esri/config","esri/map", "esri/geometry/Point", "esri/symbols/PictureMarkerSymbol", "esri/symbols/Font", "esri/Color", "esri/symbols/TextSymbol", "esri/InfoTemplate", "esri/dijit/PopupTemplate", "esri/layers/FeatureLayer", "esri/graphic", "dojo/dom", "dojo/dom-construct", "dojo/dom-style", "dojo/domReady!"],
		function(esriConfig,Map, Point, PictureMarkerSymbol, Font, Color, TextSymbol, InfoTemplate, PopupTemplate, FeatureLayer, Graphic, dom, domConstruct, domStyle) {
			esriConfig.defaults.io.timeout = 60000;
			var customPopup = new esri.dijit.Popup({
				fillSymbol: false,
				highlight: false,
				lineSymbol: false,
				markerSymbol: false,
				anchor: "top"
			}, dojo.create("div"));
			if (infoWindowOn==1) {
				p1map = new Map("panel1MultiMap", {
					basemap: mapType,
					detectRetina: true,
					center: [document.getElementById('LO').value, document.getElementById('LA').value],
					autoResize: true,
					infoWindow: customPopup,
					zoom: compiledZoom
				});
				if(gLog==1){console.log("panel1DrawMultiMap p1map infoWindowOn");}
			}
			else {
				p1map = new Map("panel1MultiMap", {
					basemap: mapType,
					detectRetina: true,
					center: [document.getElementById('LO').value, document.getElementById('LA').value],
					autoResize: true,
					zoom: compiledZoom
				});
				if(gLog==1){console.log("panel1DrawMultiMap p1map !infoWindowOn");}
			}
			p1map.on("load", mapLoaded);
			function mapLoaded(){
				document.getElementById('panel1MultiMap').removeAttribute("style");
				setTimeout(function() {
					if(gLog==1){console.log("panel1DrawMultiMap mapLoaded() response");}
					if (p2Pan == 0) {
						p1map.disablePan();
						p1map.disableMapNavigation();
					}
					if (p2Zoom == 0) {
						p1map.disableDoubleClickZoom();
						p1map.disableScrollWheelZoom();
						p1map.disableShiftDoubleClickZoom();
						p1map.hideZoomSlider();
					}
					var spt = new Point(document.getElementById('LO').value, document.getElementById('LA').value);
					p1map.resize();
					if (autoShell == 1) {
						var font = new Font(
							Font.STYLE_NORMAL,
							Font.VARIANT_NORMAL,
							Font.WEIGHT_BOLD
						);
						font.setSize(mapFontSize);
						font.setFamily(mapFontFace);
						var txtHomeOut = new TextSymbol(
							txtHome,
							font,
							new Color(mapFontColor)
						);
						txtHomeOut.setOffset(0,-8);
						p1map.graphics.add(new Graphic(spt, txtHomeOut));
					}
					else {
						var spMarker = new PictureMarkerSymbol(pinSource + "pins/" + pinStart + "start." + pinSuffix, pinWidth, pinHeight);
						var spGraphic = new Graphic(spt,spMarker);
						p1map.graphics.add(spGraphic);
					}
					for (p1p=0; p1p<panel1MarkerPrep.length; p1p++) {
						var pt = new Point(panel1MarkerPrep[p1p][1],panel1MarkerPrep[p1p][0]);
						if (autoShell == 1) {
							var txtLocOut = new TextSymbol(
								txtLoc,
								font,
								new Color(mapFontColor)
							);
							txtLocOut.setOffset(0,-8);
							var graphic = new Graphic(pt,txtLocOut);
						}
						else {
							var pMarker = new PictureMarkerSymbol(panel1MarkerPrep[p1p][3], pinWidth, pinHeight);
							var graphic = new Graphic(pt,pMarker);
						}
						if (infoWindowOn==1) {
							var infoTemplate = new InfoTemplate(panel1MarkerPrep[p1p][2],panel1MarkerPrep[p1p][4]);
							infoTemplate.setTitle(panel1MarkerPrep[p1p][2]);
							infoTemplate.setContent(panel1MarkerPrep[p1p][4]);
							graphic.setInfoTemplate(infoTemplate);
						}
						panel1MarkerPrep[p1p][5] = pt;
						panel1MarkerPrep[p1p][6] = pt;
						p1map.graphics.add(graphic);
					}
					if (infoWindowOn==1) {
						var DW = infoMinWidth + 110;
						var DH = infoMinHeight + 125;
						p1map.infoWindow.resize(DW, DH);
						setTimeout(function(){
							p1MapDrawn = 1;
							p1ShowInfowindow(0);
						},500);
					}
					loaderToggle(0);
				},1000);
			}
		});
	}
}
function panel1DrawDefaultMap() {
	mapWriteTrack = 1;
	p1MapDrawn = 0;
	panel1WhatInfo = -1;
	if(gLog==1){console.log("panel1DrawDefaultMap");}
	var thisZoom = 3;
	if (document.getElementById('panel1MultiMap')) {
		document.getElementById('panel1MultiMap').innerHTML="";
		require(["esri/config","esri/map", "esri/geometry/Point", "esri/symbols/PictureMarkerSymbol", "esri/symbols/Font", "esri/Color", "esri/symbols/TextSymbol", "esri/InfoTemplate", "esri/dijit/PopupTemplate", "esri/layers/FeatureLayer", "esri/graphic", "dojo/dom", "dojo/dom-construct", "dojo/dom-style", "dojo/domReady!"],
		function(esriConfig,Map, Point, PictureMarkerSymbol, Font, Color, TextSymbol, InfoTemplate, PopupTemplate, FeatureLayer, Graphic, dom, domConstruct, domStyle) {
			esriConfig.defaults.io.timeout = 60000;
			var customPopup = new esri.dijit.Popup({
				fillSymbol: false,
				highlight: false,
				lineSymbol: false,
				markerSymbol: false,
				anchor: "top"
			}, dojo.create("div"));
			p1map = new Map("panel1MultiMap", {
				basemap: mapType,
				detectRetina: true,
				center: [panel1MapDefaultLng, panel1MapDefaultLat],
				autoResize: true,
				zoom: thisZoom
			});
			p1map.on("load", mapLoaded);
			function mapLoaded(){
				document.getElementById('panel1MultiMap').removeAttribute("style");
				setTimeout(function() {
					if(gLog==1){console.log("panel1DrawMultiMap mapLoaded() response");}
					p1map.disablePan();
					p1map.disableMapNavigation();
					loaderToggle(0);
				},100);
			}
		});
	}
}
function p1ShowInfowindow(id) {
	if (infoWindowOn == 1 && p1MapDrawn == 1) {
		require(["esri/config","esri/map", "esri/InfoTemplate", "dojo/promise/all", "dojo/domReady!"], function(esriConfig,Map, InfoTemplate, all) {
			if (id != panel1WhatInfo) {
				panel1WhatInfo = id;
				var DW = infoMinWidth + 10;
				var DH = infoMinHeight + 25;
				p1map.infoWindow.setContent(panel1MarkerPrep[id][4]);
				p1map.infoWindow.setTitle(panel1MarkerPrep[id][2]);
				p1map.infoWindow.resize(infoMinWidth, infoMinHeight);
				p1map.infoWindow.show(panel1MarkerPrep[id][5],p1map.infoWindow.ANCHOR_UPPERRIGHT);
				p1map.infoWindow.resize(DW, DH);
				p1map.centerAt(panel1MarkerPrep[id][5],panel1MarkerPrep[id][6]);
			}
		});
	}
}
function p2HideInfowindow(id) {
}
function panel1CodeDirectAddress(thisID) {
	loaderToggle(1);
	p1dSID = thisID;
	if (enableResize == 2) {
		parent.postMessage("SCRL:",refurl);
	}
	$('html,body').scrollTop(0);
	window.scrollTo(0,0);
	if (document.getElementById('panel1DirectionsField'+thisID)) {
		if (document.getElementById('panel1DirectionsField'+thisID).value != "") {
			if(gLog==1){console.log("panel1CodeDirectAddress - revDirCompile = panel1DirectionsField"+thisID);}
			document.getElementById("revDirCompile").value = document.getElementById('panel1DirectionsField'+thisID).value;
		}
		else {
			if(gLog==1){console.log("panel1CodeDirectAddress - revDirCompile = addressCompile");}
			document.getElementById("revDirCompile").value = document.getElementById("addressCompile").value;
		}
	}
	else {
		if(gLog==1){console.log("panel1CodeDirectAddress - revDirCompile = addressCompile");}
		document.getElementById("revDirCompile").value = document.getElementById("addressCompile").value;
	}
	document.getElementById('revDirStreet').value = "";
	document.getElementById('revDirCity').value = "";
	document.getElementById('revDirState').value = "";
	document.getElementById('revDirZip').value = "";
	document.getElementById('revDirCountry').value = "";
	document.getElementById("printSLA").value = "";
	document.getElementById("printSLO").value = "";
	var addressCompile = document.getElementById('revDirCompile').value;
	if (addressCompile != "") {
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
		document.getElementById('revDirCompile').value = addressCompile;
		document.getElementById('localChangeAdd').value = document.getElementById('revDirCompile').value;
		require(["esri/config", "esri/map", "esri/tasks/locator", "esri/SpatialReference", "esri/graphic", "esri/symbols/SimpleLineSymbol", "esri/symbols/SimpleMarkerSymbol", "esri/symbols/Font", "esri/symbols/TextSymbol", "esri/geometry/Point", "esri/geometry/Extent", "esri/geometry/webMercatorUtils", "dojo/_base/array", "esri/Color", "dojo/number", "dojo/parser", "dojo/dom", "dojo/json", "dijit/registry", "dijit/form/Button", "dijit/form/Textarea", "dijit/layout/BorderContainer", "dijit/layout/ContentPane", "dojo/domReady!"], function(esriConfig, Map, Locator, SpatialReference, Graphic, SimpleLineSymbol, SimpleMarkerSymbol, Font, TextSymbol, Point, Extent, webMercatorUtils, arrayUtils, Color, number, parser, dom, JSON, registry) {
			parser.parse();
			esriConfig.defaults.io.timeout = 6000;
			p1dlocator = new Locator("//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer");
			var address = {
				"SingleLine": addressCompile
			};
			var options = {
				address: address,
				outFields: ["*"]
			};
			p1daddressToLocations = p1dlocator.addressToLocations(options);
			p1daddressToLocations.then(function(evt){
				if(gLog==1){console.log(evt);}
				if (evt[0]) {
					var result = evt[0];
					var x = result.location.x.toFixed(5); //lng
					var y = result.location.y.toFixed(5); //lat
					document.getElementById('revDirStreet').value = result.attributes.StAddr;
					document.getElementById('revDirCity').value = result.attributes.City;
					document.getElementById('revDirState').value = result.attributes.Region;
					if (result.attributes.Country == "CAN") {
						document.getElementById('revDirZip').value = result.attributes.Postal + " " + result.attributes.PostalExt;
					}
					else {
						document.getElementById('revDirZip').value = result.attributes.Postal;
					}
					document.getElementById('revDirCountry').value = result.attributes.Country;
					document.getElementById("printSLA").value = result.location.y.toFixed(5);
					document.getElementById("printSLO").value = result.location.x.toFixed(5);
					panel1CalcRoute(p1dSID);
				}
				else {
					loaderToggle(0);
					errorText("Please enter a valid address",2);
				}
			},
			function(err){
				if(gLog==1){console.log(err.message);}
				loaderToggle(0);
				errorText("We could not find that location. Please try again.",1);
			});
		});
	}
	else {
		errorText("Please enter a valid address",2);
	}
}
function panel1CalcRoute(thisID) {
	if(gLog==1){console.log("panel1CalcRoute START");}
	for (q=0; q<storeArray.length; q++) {
		if (storeArray[q][13] == thisID) {
			document.getElementById('printELA').value = storeArray[q][6];
			document.getElementById('printELO').value = storeArray[q][7];
			document.getElementById('storeID').value = q;
			break;
		}
	}
	var startLat = document.getElementById('printSLA').value;
	var startLon = document.getElementById('printSLO').value;
	var endLat = document.getElementById('printELA').value;
	var endLon = document.getElementById('printELO').value;
	require(["esri/config", "esri/map", "esri/tasks/locator", "esri/SpatialReference", "esri/tasks/RouteTask", "esri/tasks/RouteParameters", "esri/tasks/FeatureSet", "esri/units", "esri/config", "esri/lang", "esri/symbols/PictureMarkerSymbol", "esri/symbols/Font", "esri/Color", "esri/symbols/TextSymbol", "esri/graphic", "esri/symbols/SimpleLineSymbol", "esri/urlUtils", "dojo/promise/all", "dojo/_base/array", "esri/Color", "dojo/dom", "dojo/dom-construct", "dojo/on", "dojo/number", "dgrid/Grid", "dojo/domReady!" ], function(esriConfig, Map, Locator, SpatialReference, RouteTask, RouteParameters, FeatureSet, esriUnits, esriConfig, esriLang, PictureMarkerSymbol, Font, Color, TextSymbol, Graphic, SimpleLineSymbol, urlUtils, all, arrayUtils, Color, dom, domConstruct, on, number, Grid) {
		esriConfig.defaults.io.timeout = 60000;
		urlUtils.addProxyRule({
			urlPrefix : "//route.arcgis.com",
			proxyUrl : "/PHP/proxy.php"
		});
		p1slocator = new Locator("//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer");
		p1slocator.on("error", errorHandler);
		p1routeTask = new RouteTask("//utility.arcgis.com/usrsvcs/servers/ab07c56de4b34444b5709bc5c45bfe8f/rest/services/World/Route/NAServer/Route_World");
		p1routeParams = new RouteParameters();
		p1routeParams.stops = new FeatureSet();
		p1routeParams.returnRoutes = false;
		p1routeParams.returnDirections = true;
		p1routeParams.directionsLengthUnits = esriUnits.MILES;
		p1routeParams.outSpatialReference = new SpatialReference({ wkid:102100 });
		p1routeTask.on("solve-complete", showRoute);
		function getDirections() {
			if(gLog==1){console.log("panel1CalcRoute (getDirections) START");}
			p1routeParams.stops.features = [];
			var sourceAddy = document.getElementById('revDirCompile').value;
			var optionsFrom = {
				address: { "SingleLine": sourceAddy },
				outFields: ["Loc_name"]
			}
			var fromAddress = p1slocator.addressToLocations(optionsFrom);
			if(gLog==1){console.log("panel1CalcRoute fromAddress: ",fromAddress);}
			var destIncr = document.getElementById('storeID').value;
			var destAddy = storeDisplayArray[destIncr][1] + ", " + storeDisplayArray[destIncr][3] + ", " + storeDisplayArray[destIncr][4] + " " + storeDisplayArray[destIncr][5];
			var optionsTo = {
				address: { "SingleLine": destAddy },
				outFields: ["Loc_name"]
			}
			var toAddress = p1slocator.addressToLocations(optionsTo);
			if(gLog==1){console.log("panel1CalcRoute toAddress: ",toAddress);}
			all({
				from: fromAddress,
				to: toAddress
			}).then(configureRoute);
		}
		function configureRoute(results) {
			if(gLog==1){console.log("panel1CalcRoute (configureRoute) START");}
			var fromStop = getCandidate(results.from);
			if ( fromStop === null ) {
				errorHandler("The origin address is invalid");
			}
			else {
				var font = new Font(
					Font.STYLE_NORMAL,
					Font.VARIANT_NORMAL,
					Font.WEIGHT_BOLD
				);
				font.setSize(mapFontSize);
				font.setFamily(mapFontFace);
				var txtFromOut = new TextSymbol(
					" ",
					font,
					new Color(mapFontColor)
				);
				var fromGraphic = new Graphic(fromStop.location, txtFromOut, { address:fromStop.address });
				p1routeParams.stops.features[0] = p1map.graphics.add(fromGraphic);
			};
			var toStop = getCandidate(results.to);
			if ( toStop === null ) {
				errorHandler("The destination address is invalid");
			}
			else {
				var font = new Font(
					Font.STYLE_NORMAL,
					Font.VARIANT_NORMAL,
					Font.WEIGHT_BOLD
				);
				font.setSize(mapFontSize);
				font.setFamily(mapFontFace);
				var txtToOut = new TextSymbol(
					" ",
					font,
					new Color(mapFontColor)
				);
				var toGraphic = new Graphic(toStop.location, txtToOut, { address:fromStop.address });
				p1routeParams.stops.features[1] = p1map.graphics.add(toGraphic);
			};
			if ( fromStop !== null && toStop !== null ) {
				p1routeTask.solve(p1routeParams);
			}
		}
		function getCandidate(candidates){
			if(gLog==1){console.log("panel1CalcRoute (getCandidate) START");}
			var stop = null, score = 0;
			arrayUtils.forEach(candidates, function(candidate){
				if ( candidate.score > score ) {
					stop = candidate;
					score = candidate.score;
				}
			});
			return stop;
		}
		function showRoute(e) {
			if(gLog==1){console.log("panel1CalcRoute (showRoute) START");}
			var data = [];
			var directions = e.result.routeResults[0].directions;
			p1directionFeatures = directions.features;
			var directionsInfo = e.result.routeResults[0].directions.features;
			var totalDistance = number.format(directions.totalLength);
			var totalLength = number.format(directions.totalTime);
			p1DirSequence.length = 0;
			var p1DR = 0;
			var p1GetEmDir = arrayUtils.forEach(directionsInfo, function(thisStop){
				var pLen = parseFloat(thisStop.attributes.length);
				var pTim = parseFloat(thisStop.attributes.time);
				p1DirSequence[p1DR] = [(p1DR+1), thisStop.attributes.text, pLen.toFixed(2), pTim.toFixed(2)];
				p1DR++;
			});
			all(p1GetEmDir).then(panel1WriteDirectionsText(p1DirSequence.length));
		}
		function errorHandler(err) {
			errorText("An error occured\n" + err,5);
		}
		setTimeout(function() {
			getDirections();
		},200);
	});
}
function panel1HandleNoGeolocation(errorFlag) {
	apGeoBackup();
}
function panel1GeoLocation() {
	if(navigator.geolocation) {
		browserSupportFlag = true;
		navigator.geolocation.getCurrentPosition(function(position) {
			var baseLat = position.coords.latitude;
			var baseLong =  position.coords.longitude;
			document.getElementById('LA').value = baseLat;
			document.getElementById('LO').value = baseLong;
			p2JS_LA = baseLat;
			p2JS_LO = baseLong;
			panel1GetLatLngDetail(p2JS_LA,p2JS_LO,1);
		},
		function() {
			panel1HandleNoGeolocation(browserSupportFlag);
		});
	}
	else {
		browserSupportFlag = false;
		panel1HandleNoGeolocation(browserSupportFlag);
	}
}
scriptLoad++;
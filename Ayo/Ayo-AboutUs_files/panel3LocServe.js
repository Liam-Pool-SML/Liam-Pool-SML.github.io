var p3grid;
function panel3DrawMultiMap() {
	if(gLog==1){console.log("panel3DrawMultiMap");}
	mapWriteTrack = 1;
	p3MapDrawn = 0;
	panel3WhatInfo = -1;
	if (document.getElementById('panel3DirectionsMap')) {
		document.getElementById('panel3DirectionsMap').innerHTML="";
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
			if(infoWindowOn==1) {
				panel3MultiMap = new Map("panel3DirectionsMap", {
					basemap: mapType,
					detectRetina: true,
					center: [document.getElementById('LO').value, document.getElementById('LA').value],
					autoResize: true,
					infoWindow: customPopup,
					zoom: 14
				});
			}
			else {
				panel3MultiMap = new Map("panel3DirectionsMap", {
					basemap: mapType,
					detectRetina: true,
					center: [document.getElementById('LO').value, document.getElementById('LA').value],
					autoResize: true,
					zoom: 14
				});
			}
			panel3MultiMap.on("load", mapLoaded);
			function mapLoaded(){
				document.getElementById('panel3DirectionsMap').removeAttribute("style");
				setTimeout(function() {
					if(gLog==1){console.log("panel3DrawMultiMap mapLoaded() response");}
					if (p2Pan == 0) {
						panel3MultiMap.disablePan();
						panel3MultiMap.disableMapNavigation();
					}
					if (p2Zoom == 0) {
						panel3MultiMap.disableDoubleClickZoom();
						panel3MultiMap.disableScrollWheelZoom();
						panel3MultiMap.disableShiftDoubleClickZoom();
						panel3MultiMap.hideZoomSlider();
					}
					var spt = new Point(document.getElementById('LO').value, document.getElementById('LA').value);
					panel3MultiMap.resize();
					var pt = new Point(panel3MarkerPrep[panel3storeNow][1],panel3MarkerPrep[panel3storeNow][0]);
					if (autoShell == 1) {
						var font = new Font(
							Font.STYLE_NORMAL,
							Font.VARIANT_NORMAL,
							Font.WEIGHT_BOLD
						);
						font.setSize(mapFontSize);
						font.setFamily(mapFontFace);
						var txtLocOut = new TextSymbol(
							txtLoc,
							font,
							new Color(mapFontColor)
						);
						txtLocOut.setOffset(0,-8);
						var graphic = new Graphic(pt,txtLocOut);
					}
					else {
						var pMarker = new PictureMarkerSymbol(panel3MarkerPrep[panel3storeNow][7], pinWidth, pinHeight);
						if(gLog==1){console.log("panel3DrawMultiMap - " + panel3storeNow + " / ", panel3MarkerPrep[panel3storeNow][7]);}
						var graphic = new Graphic(pt,pMarker);
					}
					panel3MarkerPrep[panel3storeNow][5] = pt;
					panel3MarkerPrep[panel3storeNow][6] = pt;
					panel3MultiMap.graphics.add(graphic);
					if(infoWindowOn==1) {
						var infoTemplate = new InfoTemplate(panel3MarkerPrep[panel3storeNow][2],panel3MarkerPrep[panel3storeNow][4]);
						infoTemplate.setTitle(panel3MarkerPrep[panel3storeNow][2]);
						infoTemplate.setContent(panel3MarkerPrep[panel3storeNow][4]);
						graphic.setInfoTemplate(infoTemplate);
						var DW = infoMinWidth + 110;
						var DH = infoMinHeight + 125;
						panel3MultiMap.infoWindow.resize(DW, DH);
						document.getElementById('panel3DirectionsMap').style.display = "block";
						setTimeout(function(){
							p3MapDrawn = 1;
							if (panel2Default==1) {
								p3ShowInfowindow(panel3storeNow);
							}
						},500);
					}

				},750);
			}
		});
	}
}
function p3ShowInfowindow(id) {
	if (infoWindowOn == 1 && p3MapDrawn == 1) {
		require(["esri/config","esri/map", "esri/InfoTemplate", "dojo/promise/all", "dojo/domReady!"], function(esriConfig,Map, InfoTemplate, all) {
			var DW = infoMinWidth + 10;
			var DH = infoMinHeight + 25;
			panel3MultiMap.infoWindow.setContent(panel3MarkerPrep[id][4]);
			panel3MultiMap.infoWindow.setTitle(panel3MarkerPrep[id][2]);
			panel3MultiMap.infoWindow.resize(infoMinWidth, infoMinHeight);
			panel3MultiMap.infoWindow.show(panel3MarkerPrep[id][5],p2map.infoWindow.ANCHOR_UPPERRIGHT);
			panel3MultiMap.infoWindow.resize(DW, DH);
			panel3MultiMap.centerAt(panel3MarkerPrep[id][5],panel3MarkerPrep[id][6]);
		});
	}
}
function panel3HandleNoGeolocation(errorFlag) {
	if (errorFlag == true) {
		panel3Load();
	}
	else {
		panel3Load();
	}
}
function panel3GeoLocation() {
	if(navigator.geolocation) {
		browserSupportFlag = true;
		navigator.geolocation.getCurrentPosition(function(position) {
			var baseLat = position.coords.latitude;
			var baseLong =  position.coords.longitude;
			document.getElementById('LA').value = baseLat;
			document.getElementById('LO').value = baseLong;
			p3JS_LA = baseLat;
			p3JS_LO = baseLong;
			panel3GetLatLngDetail(p3JS_LA,p3JS_LO,1);
		},
		function() {
			panel3HandleNoGeolocation(browserSupportFlag);
		});
	}
	else {
		browserSupportFlag = false;
		panel3HandleNoGeolocation(browserSupportFlag);
	}
}
function panel3GetLatLngDetail(lat,lng,statusVar) {
	require(["esri/config","esri/tasks/locator", "esri/geometry/Point", "esri/geometry/webMercatorUtils", "dojo/number", "dojo/parser", "esri/tasks/AddressCandidate", "dojo/_base/array", "dojo/domReady!"],
	function(esriConfig,Locator, Point, webMercatorUtils, number, parser, AddressCandidate, array) {
		parser.parse();
		p3rlocator = new Locator("//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer");
		var thisPoint = new Point(lng,lat);
		if (esriCA == 0) {
			if(gLog==1){console.log("panel3GetLatLngDetail - Midpoint Interval Start");}
			esriCA = 1;
			esriLoadIt = 0;
			esriTimeCurr = 0;
			EIO = 1;
			esriIntTrack = 1;
			esriIntervalOn();
		}
		var p3rlocationToAddress = p3rlocator.locationToAddress(thisPoint, 10000);
		p3rlocationToAddress.then(function(evt){
			if (esriIntTrack == 1) {
				esriIntTrack = 0;
				esriLoadIt = 1;
				if (evt.address) {
					if (statusVar == 1 || statusVar == 2) {
						if(gLog==1){console.log(evt.address);}
						p3GetDaStreet = evt.address.Address;
						p3GetDaCity = evt.address.City;
						p3GetDaState = evt.address.Region;
						p3GetDaCountry = evt.address.CountryCode;
						if (evt.address.CountryCode == "CAN") {
							p3GetDaZip = evt.address.Postal + " " + evt.address.PostalExt;
						}
						else {
							p3GetDaZip = evt.address.Postal;
						}
						document.getElementById('revCodeUS').value = 0;
						if (p3GetDaState != "null" && p3GetDaState != null) {
							var p3StateTemp = p3GetDaState.toLowerCase();
							for	(st=0; st<tblStateArray.length; st++) {
								if (tblStateArray[st][1].toLowerCase() == p3StateTemp) {
									p3GetDaState = tblStateArray[st][0];
									document.getElementById('revCodeUS').value = tblStateArray[st][2];
									break;
								}
							}
						}
						document.getElementById('revCodeStreet').value = p3GetDaStreet;
						document.getElementById('revCodeCity').value = p3GetDaCity;
						document.getElementById('revCodeState').value = p3GetDaState;
						document.getElementById('revCodeZip').value = p3GetDaZip;
						document.getElementById('revCodeCountry').value = p3GetDaCountry;
						document.getElementById('street').value = p3GetDaStreet;
						document.getElementById('city').value = p3GetDaCity;
						document.getElementById('state').value = p3GetDaState;
						document.getElementById('zip').value = p3GetDaZip;
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
						if (p3GetDaStreet != "null" && p3GetDaStreet != null) {
							addressDisplay += p3GetDaStreet;
						}
						if (p3GetDaCity != "null" && p3GetDaCity != null) {
							addressDisplay += " " + p3GetDaCity;
						}
						if (p3GetDaState != "null" && p3GetDaState != null) {
							addressDisplay += " " + p3GetDaState;
						}
						if (p3GetDaZip != "null" && p3GetDaZip != null) {
							addressDisplay += " " + p3GetDaZip;
						}
						if (document.getElementById('panel3CityField')) {
							document.getElementById('panel3CityField').value = p3GetDaCity;
							//document.getElementById('city').value = p3GetDaCity;
						}
						if (document.getElementById('panel3StateField')) {
							document.getElementById('panel3StateField').value = p3GetDaState;
							//document.getElementById('state').value = p3GetDaState;
						}
						if (document.getElementById('panel3ZipField')) {
							document.getElementById('panel3ZipField').value = p3GetDaZip;
							//document.getElementById('zip').value = p3GetDaZip;
						}
						if (document.getElementById('panel3AddressField')) {
	  						if (apMMShowVal == 0) {
								if(gLog==1){console.log("panel3LocServe.php - statusVar apMMShowVal == 0");}
								document.getElementById('panel3AddressField').value = addressDisplay;
							}
							else {
								if(gLog==1){console.log("panel3LocServe.php - statusVar apMMShowVal != 0");}
								document.getElementById('panel3AddressField').value = p3GetDaZip;
								apMMShowVal = 0;
							}
						}
					}
					if (statusVar == 2) {
						panel3panel2Connect();
					}
	     		}
	      		else {
					if(gLog==1){console.log("panel3GetLatLngDetail - evt.address FAIL");}
					frameVar = document.getElementById("iFrameForms");
					frameVar.contentWindow.location.replace(controlURL + "panel4Connect.php?PANEL=3&CLIENT=" + coreClient + "&ITER=" + iteration);
				}
			}
		},
		function(err){
			if(gLog==1){console.log("panel3GetLatLngDetail revgeocode FAIL");}
			frameVar = document.getElementById("iFrameForms");
			frameVar.contentWindow.location.replace(controlURL + "panel4Connect.php?PANEL=3&CLIENT=" + coreClient + "&ITER=" + iteration);
		});
	});
}
var p3addressToLocations;
var p3codeTries = 0;
function panel3CodeAddress() {
	rteStoreObj.val.length = 0;
	p2dealDisable = 0;
	if(gLog==1){console.log("panel3CodeAddress() p2dealDisable = " + p2dealDisable);}
	p3codeTries++;
	var addressCompile = "";
	if (document.getElementById('street').value != "" && document.getElementById('street').value != p3AddFieldValueVar) {
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
	if(gLog==1){console.log("panel3LocServe.php - Initial Address Compilation: " + addressCompile);}
	require(["esri/config", "esri/tasks/locator", "esri/SpatialReference", "esri/geometry/Point", "esri/geometry/Extent", "esri/geometry/webMercatorUtils", "dojo/_base/array", "dojo/number", "dojo/parser", "dojo/json", "dijit/registry", "dojo/domReady!"], function(esriConfig, Locator, SpatialReference, Point, Extent, webMercatorUtils, arrayUtils, number, parser, JSON, registry) {
		parser.parse();
		esriConfig.defaults.io.timeout = 6000;
		p3locator = new Locator("//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer");
		var address = {
			"SingleLine": addressCompile
		};
		var options = {
			address: address,
			outFields: ["*"]
		};
		p3addressToLocations = p3locator.addressToLocations(options);
		p3addressToLocations.then(function(evt){
			if(gLog==1){console.log(evt);}
			p3LLPairArray.length = 0;
			if (evt[0]) {
				var result = evt[0];
				var x = result.location.x.toFixed(5); //lng
				var y = result.location.y.toFixed(5); //lat
				p3GetDaStreet = result.attributes.StAddr;
				p3GetDaCity = result.attributes.City;
				p3GetDaState = result.attributes.Region;
				p3GetDaCountry = result.attributes.Country;
				if (result.attributes.Country == "CAN") {
					p3GetDaZip = result.attributes.Postal + " " + result.attributes.PostalExt;
				}
				else {
					p3GetDaZip = result.attributes.Postal;
				}
				p3LLPairArray[0] = [y,x];
			}
			if (p3LLPairArray.length) {
				document.getElementById("LA").value = p3LLPairArray[0][0];
				document.getElementById("LO").value = p3LLPairArray[0][1];
				if(gLog==1){console.log("Country(" + p3GetDaCountry + ") Zip (" + p3GetDaZip + ")");}
				if (p3GetDaCountry == "USA" && p3GetDaZip == "") {
					panel3GetLatLngDetail(p3LLPairArray[0][0],p3LLPairArray[0][1],2);
				}
				else {
					document.getElementById('revCodeUS').value = 0;
					if (p3GetDaState != "null" && p3GetDaState != null) {
						var p3StateTemp = p3GetDaState.toLowerCase();
						for	(st=0; st<tblStateArray.length; st++) {
							if (tblStateArray[st][1].toLowerCase() == p3StateTemp) {
								p3GetDaState = tblStateArray[st][0];
								document.getElementById('revCodeUS').value = tblStateArray[st][2];
								break;
							}
						}
					}
					document.getElementById('revCodeStreet').value = p3GetDaStreet;
					document.getElementById('revCodeCity').value = p3GetDaCity;
					document.getElementById('revCodeState').value = p3GetDaState;
					document.getElementById('revCodeZip').value = p3GetDaZip;
					document.getElementById('revCodeCountry').value = p3GetDaCountry;
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
					if (p3GetDaStreet != "null" && p3GetDaStreet != null) {
						addressDisplay += p3GetDaStreet;
					}
					if (p3GetDaCity != "null" && p3GetDaCity != null) {
						addressDisplay += " " + p3GetDaCity;
					}
					if (p3GetDaState != "null" && p3GetDaState != null) {
						addressDisplay += " " + p3GetDaState;
					}
					if (p3GetDaZip != "null" && p3GetDaZip != null) {
						addressDisplay += " " + p3GetDaZip;
					}
					if (document.getElementById('panel3CityField')) {
						document.getElementById('panel3CityField').value = p3GetDaCity;
						document.getElementById('city').value = p3GetDaCity;
					}
					if (document.getElementById('panel3StateField')) {
						document.getElementById('panel3StateField').value = p3GetDaState;
						document.getElementById('state').value = p3GetDaState;
					}
					if (document.getElementById('panel3ZipField')) {
						document.getElementById('panel3ZipField').value = p3GetDaZip;
						document.getElementById('zip').value = p3GetDaZip;
					}
					if (document.getElementById('panel3AddressField')) {
						document.getElementById('street').value = document.getElementById('panel3AddressField').value;
					}
					document.getElementById('addressCompile').value = addressDisplay;
					document.getElementById('GRAW').value = addressDisplay;
					if(gLog==1){console.log("panel3LocServe.php - Reverse Geocoded Compilation: " + addressDisplay);}
	    			panel3panel2Connect();
	    		}
			}
			else {
				errorText("Please enter a valid address",2);
				if (document.getElementById('panel3DirectionsText')) {
					document.getElementById('panel3DirectionsText').innerHTML = "";
				}
			}
		},
		function(err){
			if(gLog==1){console.log(err.message);}
			if (p3codeTries < geoTries) {
				panel3CodeAddress();
			}
			else {
				if (autoShell == 0) {
					failOver(3);
				}
				else {
					errorText("We could not find that location. Please try again.",1);
					if (document.getElementById('panel3DirectionsText')) {
						document.getElementById('panel3DirectionsText').innerHTML = "";
					}
				}
			}
		});
	});
}
function panelDirectDetail(lat,lng) {
	require(["esri/config","esri/tasks/locator", "esri/geometry/Point", "esri/geometry/webMercatorUtils", "dojo/number", "dojo/parser", "esri/tasks/AddressCandidate", "dojo/_base/array", "dojo/domReady!"],
	function(esriConfig,Locator, Point, webMercatorUtils, number, parser, AddressCandidate, array) {
		parser.parse();
		p3qlocator = new Locator("//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer");
		var thisPoint = new Point(lng,lat);
		if (esriCA == 0) {
			if(gLog==1){console.log("panel2GetLatLngDetail - Midpoint Interval Start");}
			esriCA = 1;
			esriLoadIt = 0;
			esriTimeCurr = 0;
			EIO = 1;
			esriIntTrack = 1;
			esriIntervalOn(3);
		}
		var p3qlocationToAddress = p3qlocator.locationToAddress(thisPoint, 10000);
		p3qlocationToAddress.then(function(evt){
			if (esriIntTrack == 1) {
				esriIntTrack = 0;
				esriLoadIt = 1;
				if (evt.address) {
					if(gLog==1){console.log(evt.address);}
					p3GetDirStreet = evt.address.Address;
					p3GetDirCity = evt.address.City;
					p3GetDirState = evt.address.Region;
					p3GetDirZip = evt.address.Postal;
					p3GetDirCountry = evt.address.CountryCode;
					if (evt.address.CountryCode == "CAN") {
						p3GetDaZip = evt.address.Postal + " " + evt.address.PostalExt;
					}
					else {
						p3GetDaZip = evt.address.Postal;
					}
					document.getElementById('revDirUS').value = 0;
					if (p3GetDirState != "null" && p3GetDirState != null) {
						var p3StateTemp = p3GetDirState.toLowerCase();
						for	(st=0; st<tblStateArray.length; st++) {
							if (tblStateArray[st][1].toLowerCase() == p3StateTemp) {
								p3GetDirState = tblStateArray[st][0];
								document.getElementById('revDirUS').value = tblStateArray[st][2];
								break;
							}
						}
					}
					document.getElementById('revDirStreet').value = p3GetDirStreet;
					document.getElementById('revDirCity').value = p3GetDirCity;
					document.getElementById('revDirState').value = p3GetDirState;
					document.getElementById('revDirZip').value = p3GetDirZip;
					document.getElementById('revDirCountry').value = p3GetDirCountry;
					if(gLog==1){console.log("panelDirectDetail - panel3CalcRoute");}
					if (p3DirHasMap == 0 && winWidth <= globalRespWidth) {
						panel3CalcRouteNoMap();
					}
					else {
						panel3CalcRoute();
					}
	     		}
	      		else {
					if(gLog==1){console.log("panelDirectDetail - evt.address FAIL");}
					errorText("We could not find that location. Please try again.",1);
					if (document.getElementById('panel3DirectionsText')) {
						document.getElementById('panel3DirectionsText').innerHTML = "";
					}
				}
			}
			else {
				if(gLog==1){console.log("panelDirectDetail - esriIntTrack != 1");}
			}
		},
		function(err){
			if(gLog==1){console.log("panelDirectDetail revgeocode FAIL");}
			errorText("We could not find that location. Please try again.",1);
			if (document.getElementById('panel3DirectionsText')) {
				document.getElementById('panel3DirectionsText').innerHTML = "";
			}
		});
	});
}
function panel3CodeDirectAddress(clearVal) {
	if (document.getElementById('panel3DirectionsText')) {
		//document.getElementById('panel3DirectionsText').innerHTML = p3TemplateSet.panel3DirectionsWaitDiv;
	}
	if (globalRespWidth != 0) {
		if (winWidth > globalRespWidth) {
			var whatP3Field = 'panel3NewLocField';
		}
		else {
			var whatP3Field = 'panel3MobileLocField';
		}
	}
	else {
		var whatP3Field = 'panel3NewLocField';
	}
	if (document.getElementById(whatP3Field)) {
		if (document.getElementById(whatP3Field).value != "") {
			/*if (clearVal) {
				document.getElementById("revDirCompile").value = document.getElementById("addressCompile").value;
				if(gLog==1){console.log("panel3CodeDirectAddress clearVal - " + whatP3Field);}
			}
			else {*/
				if(gLog==1){console.log("panel3CodeDirectAddress Entered revDirCompile - " + whatP3Field);}
				document.getElementById("revDirCompile").value = document.getElementById(whatP3Field).value;
			/*}*/
		}
		else {
			document.getElementById("revDirCompile").value = document.getElementById("addressCompile").value;
			if(gLog==1){console.log("panel3CodeDirectAddress Enforce AdressCompile - " + whatP3Field);}
		}
	}
	else {
		document.getElementById("revDirCompile").value = document.getElementById("addressCompile").value;
		if(gLog==1){console.log("panel3CodeDirectAddress Enforce Else AdressCompile - " + whatP3Field);}
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
		document.getElementById('localChangeAdd').value = addressCompile;
		if(gLog==1){console.log("panel3CodeDirectAddress Final Query - " + addressCompile);}
		require(["esri/config",
			"esri/map", "esri/tasks/locator",
			"esri/SpatialReference", "esri/graphic",
			"esri/symbols/SimpleLineSymbol", "esri/symbols/SimpleMarkerSymbol",
			"esri/symbols/Font", "esri/symbols/TextSymbol",
			"esri/geometry/Point", "esri/geometry/Extent",
			"esri/geometry/webMercatorUtils",
			"dojo/_base/array", "esri/Color",
			"dojo/number", "dojo/parser", "dojo/dom", "dojo/json", "dijit/registry",
			"dijit/form/Button", "dijit/form/Textarea",
			"dijit/layout/BorderContainer", "dijit/layout/ContentPane", "dojo/domReady!"
		], function(esriConfig,
			Map, Locator,
			SpatialReference, Graphic,
			SimpleLineSymbol, SimpleMarkerSymbol,
			Font, TextSymbol,
			Point, Extent,
			webMercatorUtils,
			arrayUtils, Color,
			number, parser, dom, JSON, registry
			) {
				parser.parse();
				p3dlocator = new Locator("//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer");
				p3dlocator.on("address-to-locations-complete", function(evt) {
					showResults(evt.addresses);
				});
				function showResults(results) {
					if (esriIntTrack == 1) {
						p3LLPairArray.length = 0;
						var llPair = 0;
						arrayUtils.forEach(results, function(result, index) {
							var x = result.location.x.toFixed(5);
							var y = result.location.y.toFixed(5);
							p3LLPairArray[llPair] = [y,x];
							llPair++
						});
						if (p3LLPairArray.length) {
							document.getElementById("printSLA").value = p3LLPairArray[0][0];
							document.getElementById("printSLO").value = p3LLPairArray[0][1];
							if(gLog==1){console.log("panel3CodeDirectAddress - panel3CodeDirectAddress Call: ", p3LLPairArray[0][0], p3LLPairArray[0][1]);}
							panelDirectDetail(p3LLPairArray[0][0],p3LLPairArray[0][1]);
						}
						else {
							loaderToggle(0);
							errorText("Please enter a valid address",2);
							if (document.getElementById('panel3DirectionsText')) {
								document.getElementById('panel3DirectionsText').innerHTML = "";
							}
						}
					}
					else {
						if(gLog==1){console.log("panel3CodeDirectAddress - esriIntTrack != 1");}
					}
				}
				var address = {
					SingleLine: addressCompile
				};
				var options = {
					address: address,
					outFields: ["*"]
				};
				esriCA = 1;
				esriLoadIt = 0;
				esriTimeCurr = 0;
				EIO = 1;
				esriIntTrack = 1;
				esriIntervalOn(3);
				p3dlocator.addressToLocations(options);
			}
		);
	}
	else {
		errorText("Please enter a valid address",2);
		if (document.getElementById('panel3DirectionsText')) {
			document.getElementById('panel3DirectionsText').innerHTML = "";
		}
	}
}
function panel3CodeLatLng(lat,lng,dest) {
}
function panel3CalcRoute(mapPin) {
	if (document.getElementById('panel3DirectionsMap')) {
		document.getElementById('panel3DirectionsMap').innerHTML = "";
	}
	var startLat = document.getElementById('printSLA').value;
	var startLon = document.getElementById('printSLO').value;
	var endLat = document.getElementById('printELA').value;
	var endLon = document.getElementById('printELO').value;
	if(gLog==1){console.log("panel3CalcRoute: SLA/SLO/ELA/ELO - ", startLat, startLon, endLat, endLon);}
	if (mapPin) {
		var iconLetter = mapPin;
	}
	else {
		var iconLetter = pinSource + "pins/" + panel2PinChoice + "_A." + pinSuffix;
	}
	require(["esri/config",
      "esri/map", "esri/tasks/locator", "esri/SpatialReference",
      "esri/tasks/RouteTask", "esri/tasks/RouteParameters",
      "esri/tasks/FeatureSet", "esri/units", "esri/config", "esri/lang",
      "esri/symbols/PictureMarkerSymbol", "esri/symbols/Font", "esri/Color", "esri/symbols/TextSymbol", "esri/graphic",
      "esri/symbols/SimpleLineSymbol",
      "esri/urlUtils",
      "dojo/promise/all", "dojo/_base/array", "esri/Color",
      "dojo/dom", "dojo/dom-construct", "dojo/on", "dojo/number",
      "dgrid/Grid", "dojo/domReady!"
    ], function(esriConfig,
      Map, Locator, SpatialReference,
      RouteTask, RouteParameters,
      FeatureSet, esriUnits, esriConfig, esriLang,
      PictureMarkerSymbol, Font, Color, TextSymbol, Graphic,
      SimpleLineSymbol,
      urlUtils,
      all, arrayUtils, Color,
      dom, domConstruct, on, number,
      Grid) {
		esriConfig.defaults.io.timeout = 60000;
		urlUtils.addProxyRule({
			urlPrefix : "//route.arcgis.com",
			proxyUrl : "/PHP/proxy.php"
		});
		p3map = new Map("panel3DirectionsMap", {
			basemap: mapType,
			detectRetina: true,
			center: [document.getElementById('printSLO').value, document.getElementById('printSLA').value],
			zoom: 12
		});
		p3slocator = new Locator("//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer");
		p3slocator.outSpatialReference = p3map.spatialReference;
		p3slocator.on("error", errorHandler);
		p3routeTask = new RouteTask("//utility.arcgis.com/usrsvcs/servers/ab07c56de4b34444b5709bc5c45bfe8f/rest/services/World/Route/NAServer/Route_World");
		p3routeParams = new RouteParameters();
		p3routeParams.stops = new FeatureSet();
		p3routeParams.returnRoutes = false;
		p3routeParams.returnDirections = true;
		p3routeParams.directionsLengthUnits = esriUnits.MILES;
		p3routeParams.outSpatialReference = new SpatialReference({ wkid:102100 });
		p3routeTask.on("solve-complete", showRoute);
		function getDirections() {
			p3routeParams.stops.features = [];
			if (document.getElementById('revDirCity').value != "") {
				var sourceAddy = document.getElementById('revDirStreet').value + ", " + document.getElementById('revDirCity').value + ", " + document.getElementById('revDirState').value + " " + document.getElementById('revDirZip').value;
			}
			else {
				var sourceAddy = document.getElementById('revCodeStreet').value + ", " + document.getElementById('revCodeCity').value + ", " + document.getElementById('revCodeState').value + " " + document.getElementById('revCodeZip').value;
			}
			if(gLog==1){console.log("panel3CalcRoute: sourceAddy - ", sourceAddy);}
			var optionsFrom = {
				address: { "SingleLine": sourceAddy },
				outFields: ["Loc_name"]
			}
			var fromAddress = p3slocator.addressToLocations(optionsFrom);
			var destIncr = document.getElementById('storeID').value;
			var destAddy = storeDisplayArray[destIncr][1] + ", " + storeDisplayArray[destIncr][3] + ", " + storeDisplayArray[destIncr][4] + " " + storeDisplayArray[destIncr][5];
			var optionsTo = {
				address: { "SingleLine": destAddy },
				outFields: ["Loc_name"]
			}
			var toAddress = p3slocator.addressToLocations(optionsTo);
			all({
				from: fromAddress,
				to: toAddress
			}).then(configureRoute);
		}
		function configureRoute(results) {
			var fromSymbol = new PictureMarkerSymbol(pinSource + "pins/" + pinStart + "start." + pinSuffix, pinWidth, pinHeight);
			var toSymbol = new PictureMarkerSymbol(iconLetter, pinWidth, pinHeight);
			/*
			var fromSymbol = new PictureMarkerSymbol({
				"angle":0,
				"xoffset":0,
				"yoffset":10,
				"type":"esriPMS",
				"url":pinSource + "pins/" + pinStart + "start." + pinSuffix,
				"contentType":"image/" + pinSuffix,
				"width":pinWidth,
				"height":pinHeight
			});
			var toSymbol = new PictureMarkerSymbol({
				"angle":0,
				"xoffset":0,
				"yoffset":12,
				"type":"esriPMS",
				"url":iconLetter,
				"contentType":"image/" + pinSuffix,
				"width":pinWidth,
				"height":pinHeight
			});
			*/
			var fromStop = getCandidate(results.from);
			if ( fromStop === null ) {
				errorHandler("The origin address is invalid");
			}
			else {
				if (autoShell == 1) {
					var font = new Font(
						Font.STYLE_NORMAL,
						Font.VARIANT_NORMAL,
						Font.WEIGHT_BOLD
					);
					font.setSize(mapFontSize);
					font.setFamily(mapFontFace);
					var txtFromOut = new TextSymbol(
						txtFrom,
						font,
						new Color(mapFontColor)
					);
					var fromGraphic = new Graphic(fromStop.location, txtFromOut, { address:fromStop.address });
				}
				else {
					var fromGraphic = new Graphic(fromStop.location, fromSymbol, { address:fromStop.address });
				}
				p3routeParams.stops.features[0] = p3map.graphics.add(fromGraphic);
			};
			var toStop = getCandidate(results.to);
			if ( toStop === null ) {
				errorHandler("The destination address is invalid");
			}
			else {
				if (autoShell == 1) {
					var font = new Font(
						Font.STYLE_NORMAL,
						Font.VARIANT_NORMAL,
						Font.WEIGHT_BOLD
					);
					font.setSize(mapFontSize);
					font.setFamily(mapFontFace);
					var txtToOut = new TextSymbol(
						txtTo,
						font,
						new Color(mapFontColor)
					);
					var toGraphic = new Graphic(toStop.location, txtToOut, { address:toStop.address });
				}
				else {
					var toGraphic = new Graphic(toStop.location, toSymbol, { address:toStop.address });
				}
				p3routeParams.stops.features[1] = p3map.graphics.add(toGraphic);
			};
			if ( fromStop !== null && toStop !== null ) {
				p3routeTask.solve(p3routeParams);
			}
		}
		function getCandidate(candidates){
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
			var data = [];
			if ( p3grid ) {
				p3grid.refresh();
			}
			var directions = e.result.routeResults[0].directions;
			p3directionFeatures = directions.features;
			var routeSymbol = new SimpleLineSymbol().setColor(new Color([0,0,255,0.5])).setWidth(4);
			p3map.setExtent(directions.mergedGeometry.getExtent(), true);
			var routeGraphic = new Graphic(directions.mergedGeometry, routeSymbol);
			p3map.graphics.add(routeGraphic);
			//routeGraphic.getShape().moveToBack();
			p3map.setExtent(directions.extent, true);
			var directionsInfo = e.result.routeResults[0].directions.features;
			var totalDistance = number.format(directions.totalLength);
			var totalLength = number.format(directions.totalTime);
			p3DirSequence.length = 0;
			p3DR = 0;
			var p3GetEmDir = arrayUtils.forEach(directionsInfo, function(thisStop){
				var pLen = parseFloat(thisStop.attributes.length);
				var pTim = parseFloat(thisStop.attributes.time);
				p3DirSequence[p3DR] = [(p3DR+1), thisStop.attributes.text, pLen.toFixed(2), pTim.toFixed(2)];
				p3DR++;
			});
			all(p3GetEmDir).then(panel3WriteDirectionsText(p3DirSequence.length));
			if(gLog==1){console.log("showRoute - ", p3DirSequence);}
		}
		function errorHandler(err) {
			errorText("An error occured\n" + err,5);
			if (document.getElementById('panel3DirectionsText')) {
				document.getElementById('panel3DirectionsText').innerHTML = "";
			}
		}
		function zoomToSegment(e) {
			var index = p3grid.row(e).id;
			var segment = p3directionFeatures[index];
			var segmentSymbol = new SimpleLineSymbol().setColor(new Color([255,0,0,0.5])).setWidth(8);
			p3map.setExtent(segment.geometry.getExtent(), true);
			if ( !p3segmentGraphic ) {
				p3segmentGraphic = p3map.graphics.add(new Graphic(segment.geometry, segmentSymbol));
			}
			else {
				p3segmentGraphic.setGeometry(segment.geometry);
			}
		}
		setTimeout(function() {
			getDirections();
		},200);
	});
	frameVar = document.getElementById("clientSite");
	frameVar.contentWindow.location.replace(baseURL + "/control/maptracker.php?CLIENT=" + coreClient + "&RAND=" + Math.random() + "&ITER=" + iteration);
	var storeProdSub = [];
	for (p=0; p<prodWriteArray.length; p++) {
		storeProdSub.push(prodWriteArray[p][0]);
	}
	if (trackVal == 1 && allOnOne == 0) {
		setTimeout(function(){
			var locTrackArr = new Array(4,13);
			if (document.getElementById('revDirStreet').value != "") {
				var compLoc = '{"compiled_location":"' + document.getElementById('revDirCompile').value.replace(/"/g, '') + '","latitude":"' + parseFloat(document.getElementById('printSLA').value).toFixed(5) + '","longitude":"' + parseFloat(document.getElementById('printSLO').value).toFixed(5) + '","city":"' + document.getElementById('revDirCity').value.replace(/"/g, '') + '","state":"' + document.getElementById('revDirState').value + '","zip":"' + document.getElementById('revDirZip').value + '","country":"' + document.getElementById('revDirCountry').value + '","us_code":"' + document.getElementById('revCodeUS').value + '"}';
			}
			else {
				var compLoc = '{"compiled_location":"' + document.getElementById('addressCompile').value.replace(/"/g, '') + '","latitude":"' + parseFloat(document.getElementById('LA').value).toFixed(5) + '","longitude":"' + parseFloat(document.getElementById('LO').value).toFixed(5) + '","city":"' + document.getElementById('revCodeCity').value.replace(/"/g, '') + '","state":"' + document.getElementById('revCodeState').value + '","zip":"' + document.getElementById('revCodeZip').value + '","country":"' + document.getElementById('revCodeCountry').value + '","us_code":"' + document.getElementById('revCodeUS').value + '"}';
			}
			var storeTrackJSON = '1;;' + storeDisplayArray[panel3storeNow][16] + ';;' + storeDisplayArray[panel3storeNow][6] + ';;' + storeDisplayArray[panel3storeNow][7] + ';;' + storeDisplayArray[panel3storeNow][0].replace(/"/g, '') + ';;' + storeDisplayArray[panel3storeNow][1].replace(/"/g, '') + ';;' + storeDisplayArray[panel3storeNow][2].replace(/"/g, '') + ';;' + storeDisplayArray[panel3storeNow][3] + ';;' + storeDisplayArray[panel3storeNow][4] + ';;' + storeDisplayArray[panel3storeNow][5] + ';;' + storeDisplayArray[panel3storeNow][27] + ';;' + storeProdSub.toString(',');
			$.post(controlURL + "tracktest.php", {
				CB: noCache,
				TLL: tlVal,
				A1: trackVal,
				UP1: "PANEL3",
				UC1: "MAP",
				UCS1: "DIRECTIONS",
				US1: "SUCCESS",
				USRC1: version,
				CLIENT: "" + coreClient + "",
				ITER: iteration,
				DEVICE: deviceType,
				REF: referer,
				SESSID: daSESSID,
				LOCATION: compLoc,
				STORE: storeTrackJSON,
				STORECOUNT: 1,
				TRACK: locTrackArr.toString(","),
				DUTV: dutv
				}, function(data){
					if(gLog==1){console.log("panel3CalcRoute - tracktest: " , JSON.parse(data));}
				}
			);
		},1000);
	}
	else if (trackVal == 2 && allOnOne == 0) {
		setTimeout(function(){
			var sendObj = setTrackObj();
			sendObj['TRK'] = "4,13";
			sendObj['RQF'] = "panel3CalcRoute";
			sendObj['LOC'] = {};
			if (document.getElementById('revDirStreet').value != "") {
				sendObj['LOC']['CMP'] = document.getElementById('revDirCompile').value.replace(/"/g, '');
				sendObj['LOC']['LAT'] = parseFloat(document.getElementById('printSLA').value).toFixed(5);
				sendObj['LOC']['LNG'] = parseFloat(document.getElementById('printSLO').value).toFixed(5);
				sendObj['LOC']['CTY'] = document.getElementById('revDirCity').value.replace(/"/g, '');
				sendObj['LOC']['STA'] = document.getElementById('revDirState').value;
				sendObj['LOC']['ZIP'] = document.getElementById('revDirZip').value;
				sendObj['LOC']['CNT'] = document.getElementById('revDirCountry').value;
				sendObj['LOC']['USC'] = document.getElementById('revDirUS').value;
			}
			else {
				sendObj['LOC']['CMP'] = document.getElementById('addressCompile').value.replace(/"/g, '');
				sendObj['LOC']['LAT'] = parseFloat(document.getElementById('LA').value).toFixed(5);
				sendObj['LOC']['LNG'] = parseFloat(document.getElementById('LO').value).toFixed(5);
				sendObj['LOC']['CTY'] = document.getElementById('revCodeCity').value.replace(/"/g, '');
				sendObj['LOC']['STA'] = document.getElementById('revCodeState').value;
				sendObj['LOC']['ZIP'] = document.getElementById('revCodeZip').value;
				sendObj['LOC']['CNT'] = document.getElementById('revCodeCountry').value;
				sendObj['LOC']['USC'] = document.getElementById('revCodeUS').value;
			}
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
function panel3CalcRouteNoMap(mapPin) {
	if(gLog==1){console.log("panel3CalcRoute");}
	if (document.getElementById('panel3DirectionsMap')) {
		document.getElementById('panel3DirectionsMap').innerHTML = "";
	}
	var startLat = document.getElementById('printSLA').value;
	var startLon = document.getElementById('printSLO').value;
	var endLat = document.getElementById('printELA').value;
	var endLon = document.getElementById('printELO').value;
	if (mapPin) {
		var iconLetter = mapPin;
	}
	else {
		var iconLetter = pinSource + "pins/" + panel2PinChoice + "_A." + pinSuffix;
	}
	require(["esri/config",
      "esri/map", "esri/tasks/locator", "esri/SpatialReference",
      "esri/tasks/RouteTask", "esri/tasks/RouteParameters",
      "esri/tasks/FeatureSet", "esri/units", "esri/config", "esri/lang",
      "esri/symbols/PictureMarkerSymbol", "esri/symbols/Font", "esri/Color", "esri/symbols/TextSymbol", "esri/graphic",
      "esri/symbols/SimpleLineSymbol",
      "esri/urlUtils",
      "dojo/promise/all", "dojo/_base/array", "esri/Color",
      "dojo/dom", "dojo/dom-construct", "dojo/on", "dojo/number",
      "dgrid/Grid", "dojo/domReady!"
    ], function(esriConfig,
      Map, Locator, SpatialReference,
      RouteTask, RouteParameters,
      FeatureSet, esriUnits, esriConfig, esriLang,
      PictureMarkerSymbol, Font, Color, TextSymbol, Graphic,
      SimpleLineSymbol,
      urlUtils,
      all, arrayUtils, Color,
      dom, domConstruct, on, number,
      Grid) {
		esriConfig.defaults.io.timeout = 60000;
		urlUtils.addProxyRule({
			urlPrefix : "//route.arcgis.com",
			proxyUrl : "/PHP/proxy.php"
		});
		p3map = new Map("panel3DirectionsMap", {
			basemap: mapType,
			detectRetina: true,
			center: [document.getElementById('printSLO').value, document.getElementById('printSLA').value],
			zoom: 12
		});
		p3slocator = new Locator("//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer");
		p3slocator.outSpatialReference = p3map.spatialReference;
		p3slocator.on("error", errorHandler);
		p3routeTask = new RouteTask("//utility.arcgis.com/usrsvcs/servers/ab07c56de4b34444b5709bc5c45bfe8f/rest/services/World/Route/NAServer/Route_World");
		p3routeParams = new RouteParameters();
		p3routeParams.stops = new FeatureSet();
		p3routeParams.returnRoutes = false;
		p3routeParams.returnDirections = true;
		p3routeParams.directionsLengthUnits = esriUnits.MILES;
		p3routeParams.outSpatialReference = new SpatialReference({ wkid:102100 });
		p3routeTask.on("solve-complete", showRoute);
		function getDirections() {
			p3routeParams.stops.features = [];
			if (document.getElementById('revDirStreet').value != "") {
				var sourceAddy = document.getElementById('revDirStreet').value + ", " + document.getElementById('revDirCity').value + ", " + document.getElementById('revDirState').value + " " + document.getElementById('revDirZip').value;
			}
			else {
				var sourceAddy = document.getElementById('revCodeStreet').value + ", " + document.getElementById('revCodeCity').value + ", " + document.getElementById('revCodeState').value + " " + document.getElementById('revCodeZip').value;
			}
			var optionsFrom = {
				address: { "SingleLine": sourceAddy },
				outFields: ["Loc_name"]
			}
			var fromAddress = p3slocator.addressToLocations(optionsFrom);
			var destIncr = document.getElementById('storeID').value;
			var destAddy = storeDisplayArray[destIncr][1] + ", " + storeDisplayArray[destIncr][3] + ", " + storeDisplayArray[destIncr][4] + " " + storeDisplayArray[destIncr][5];
			var optionsTo = {
				address: { "SingleLine": destAddy },
				outFields: ["Loc_name"]
			}
			var toAddress = p3slocator.addressToLocations(optionsTo);
			all({
				from: fromAddress,
				to: toAddress
			}).then(configureRoute);
		}
		function configureRoute(results) {
			var fromSymbol = new PictureMarkerSymbol(pinSource + "pins/" + pinStart + "start." + pinSuffix, pinWidth, pinHeight);
			var toSymbol = new PictureMarkerSymbol(iconLetter, pinWidth, pinHeight);
			/*
			var fromSymbol = new PictureMarkerSymbol({
				"angle":0,
				"xoffset":0,
				"yoffset":10,
				"type":"esriPMS",
				"url":pinSource + "pins/" + pinStart + "start." + pinSuffix,
				"contentType":"image/" + pinSuffix,
				"width":pinWidth,
				"height":pinHeight
			});
			var toSymbol = new PictureMarkerSymbol({
				"angle":0,
				"xoffset":0,
				"yoffset":12,
				"type":"esriPMS",
				"url":iconLetter,
				"contentType":"image/" + pinSuffix,
				"width":pinWidth,
				"height":pinHeight
			});
			*/
			var fromStop = getCandidate(results.from);
			if ( fromStop === null ) {
				errorHandler("The origin address is invalid");
			}
			else {
				if (autoShell == 1) {
					var font = new Font(
						Font.STYLE_NORMAL,
						Font.VARIANT_NORMAL,
						Font.WEIGHT_BOLD
					);
					font.setSize(mapFontSize);
					font.setFamily(mapFontFace);
					var txtFromOut = new TextSymbol(
						txtFrom,
						font,
						new Color(mapFontColor)
					);
					var fromGraphic = new Graphic(fromStop.location, txtFromOut, { address:fromStop.address });
				}
				else {
					var fromGraphic = new Graphic(fromStop.location, fromSymbol, { address:fromStop.address });
				}
				p3routeParams.stops.features[0] = p3map.graphics.add(fromGraphic);
			};
			var toStop = getCandidate(results.to);
			if ( toStop === null ) {
				errorHandler("The destination address is invalid");
			}
			else {
				if (autoShell == 1) {
					var font = new Font(
						Font.STYLE_NORMAL,
						Font.VARIANT_NORMAL,
						Font.WEIGHT_BOLD
					);
					font.setSize(mapFontSize);
					font.setFamily(mapFontFace);
					var txtToOut = new TextSymbol(
						txtTo,
						font,
						new Color(mapFontColor)
					);
					var toGraphic = new Graphic(toStop.location, txtToOut, { address:toStop.address });
				}
				else {
					var toGraphic = new Graphic(toStop.location, toSymbol, { address:toStop.address });
				}
				p3routeParams.stops.features[1] = p3map.graphics.add(toGraphic);
			};
			if ( fromStop !== null && toStop !== null ) {
				p3routeTask.solve(p3routeParams);
			}
		}
		function getCandidate(candidates){
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
			var data = [];
			if ( p3grid ) {
				p3grid.refresh();
			}
			var directions = e.result.routeResults[0].directions;
			p3directionFeatures = directions.features;
			var routeSymbol = new SimpleLineSymbol().setColor(new Color([0,0,255,0.5])).setWidth(4);
			p3map.setExtent(directions.mergedGeometry.getExtent(), true);
			var routeGraphic = new Graphic(directions.mergedGeometry, routeSymbol);
			p3map.graphics.add(routeGraphic);
			routeGraphic.getShape().moveToBack();
			p3map.setExtent(directions.extent, true);
			var directionsInfo = e.result.routeResults[0].directions.features;
			var totalDistance = number.format(directions.totalLength);
			var totalLength = number.format(directions.totalTime);
			p3DirSequence.length = 0;
			p3DR = 0;
			var p3GetEmDir = arrayUtils.forEach(directionsInfo, function(thisStop){
				var pLen = parseFloat(thisStop.attributes.length);
				var pTim = parseFloat(thisStop.attributes.time);
				p3DirSequence[p3DR] = [(p3DR+1), thisStop.attributes.text, pLen.toFixed(2), pTim.toFixed(2)];
				p3DR++;
			});
			all(p3GetEmDir).then(panel3WriteDirectionsText(p3DirSequence.length));
			if(gLog==1){console.log("showRoute - ", p3DirSequence);}
		}
		function errorHandler(err) {
			errorText("An error occured\n" + err,5);
			if (document.getElementById('panel3DirectionsText')) {
				document.getElementById('panel3DirectionsText').innerHTML = "";
			}
		}
		function zoomToSegment(e) {
			var index = p3grid.row(e).id;
			var segment = p3directionFeatures[index];
			var segmentSymbol = new SimpleLineSymbol().setColor(new Color([255,0,0,0.5])).setWidth(8);
			p3map.setExtent(segment.geometry.getExtent(), true);
			if ( !p3segmentGraphic ) {
				p3segmentGraphic = p3map.graphics.add(new Graphic(segment.geometry, segmentSymbol));
			}
			else {
				p3segmentGraphic.setGeometry(segment.geometry);
			}
		}
		setTimeout(function() {
			getDirections();
		},200);
	});
	frameVar = document.getElementById("clientSite");
	frameVar.contentWindow.location.replace(baseURL + "/control/maptracker.php?CLIENT=" + coreClient + "&RAND=" + Math.random() + "&ITER=" + iteration);
	var storeProdSub = [];
	for (p=0; p<prodWriteArray.length; p++) {
		storeProdSub.push(prodWriteArray[p][0]);
	}
	if (trackVal == 1 && allOnOne == 0) {
		setTimeout(function(){
			var locTrackArr = new Array(4,13);
			if (document.getElementById('revDirStreet').value != "") {
				var compLoc = '{"compiled_location":"' + document.getElementById('revDirCompile').value.replace(/"/g, '') + '","latitude":"' + parseFloat(document.getElementById('printSLA').value).toFixed(5) + '","longitude":"' + parseFloat(document.getElementById('printSLO').value).toFixed(5) + '","city":"' + document.getElementById('revDirCity').value.replace(/"/g, '') + '","state":"' + document.getElementById('revDirState').value + '","zip":"' + document.getElementById('revDirZip').value + '","country":"' + document.getElementById('revDirCountry').value + '","us_code":"' + document.getElementById('revCodeUS').value + '"}';
			}
			else {
				var compLoc = '{"compiled_location":"' + document.getElementById('addressCompile').value.replace(/"/g, '') + '","latitude":"' + parseFloat(document.getElementById('LA').value).toFixed(5) + '","longitude":"' + parseFloat(document.getElementById('LO').value).toFixed(5) + '","city":"' + document.getElementById('revCodeCity').value.replace(/"/g, '') + '","state":"' + document.getElementById('revCodeState').value + '","zip":"' + document.getElementById('revCodeZip').value + '","country":"' + document.getElementById('revCodeCountry').value + '","us_code":"' + document.getElementById('revCodeUS').value + '"}';
			}
			var storeTrackJSON = '1;;' + storeDisplayArray[panel3storeNow][16] + ';;' + storeDisplayArray[panel3storeNow][6] + ';;' + storeDisplayArray[panel3storeNow][7] + ';;' + storeDisplayArray[panel3storeNow][0].replace(/"/g, '') + ';;' + storeDisplayArray[panel3storeNow][1].replace(/"/g, '') + ';;' + storeDisplayArray[panel3storeNow][2].replace(/"/g, '') + ';;' + storeDisplayArray[panel3storeNow][3] + ';;' + storeDisplayArray[panel3storeNow][4] + ';;' + storeDisplayArray[panel3storeNow][5] + ';;' + storeDisplayArray[panel3storeNow][27] + ';;' + storeProdSub.toString(',');
			$.post(controlURL + "tracktest.php", {
				CB: noCache,
				TLL: tlVal,
				A1: trackVal,
				UP1: "PANEL3",
				UC1: "MAP",
				UCS1: "DIRECTIONS",
				US1: "SUCCESS",
				USRC1: version,
				CLIENT: "" + coreClient + "",
				ITER: iteration,
				DEVICE: deviceType,
				REF: referer,
				SESSID: daSESSID,
				LOCATION: compLoc,
				STORE: storeTrackJSON,
				STORECOUNT: 1,
				TRACK: locTrackArr.toString(","),
				DUTV: dutv
				}, function(data){
					if(gLog==1){console.log("panel3CalcRouteNoMap - tracktest: " , JSON.parse(data));}
				}
			);
		},1000);
	}
	else if (trackVal == 2 && allOnOne == 0) {
		setTimeout(function(){
			var sendObj = setTrackObj();
			sendObj['TRK'] = "4,13";
			sendObj['RQF'] = "panel3CalcRouteNoMap";
			sendObj['LOC'] = {};
			if (document.getElementById('revDirStreet').value != "") {
				sendObj['LOC']['CMP'] = document.getElementById('revDirCompile').value.replace(/"/g, '');
				sendObj['LOC']['LAT'] = parseFloat(document.getElementById('printSLA').value).toFixed(5);
				sendObj['LOC']['LNG'] = parseFloat(document.getElementById('printSLO').value).toFixed(5);
				sendObj['LOC']['CTY'] = document.getElementById('revDirCity').value.replace(/"/g, '');
				sendObj['LOC']['STA'] = document.getElementById('revDirState').value;
				sendObj['LOC']['ZIP'] = document.getElementById('revDirZip').value;
				sendObj['LOC']['CNT'] = document.getElementById('revDirCountry').value;
				sendObj['LOC']['USC'] = document.getElementById('revDirUS').value;
			}
			else {
				sendObj['LOC']['CMP'] = document.getElementById('addressCompile').value.replace(/"/g, '');
				sendObj['LOC']['LAT'] = parseFloat(document.getElementById('LA').value).toFixed(5);
				sendObj['LOC']['LNG'] = parseFloat(document.getElementById('LO').value).toFixed(5);
				sendObj['LOC']['CTY'] = document.getElementById('revCodeCity').value.replace(/"/g, '');
				sendObj['LOC']['STA'] = document.getElementById('revCodeState').value;
				sendObj['LOC']['ZIP'] = document.getElementById('revCodeZip').value;
				sendObj['LOC']['CNT'] = document.getElementById('revCodeCountry').value;
				sendObj['LOC']['USC'] = document.getElementById('revCodeUS').value;
			}
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
scriptLoad++;
function panel2DrawMultiMap() {
	if(gLog==1){console.log("panel2DrawMultiMap START");}
	if (defZoom == 0 && document.getElementById('panel2MultiMap')) {
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
			mapzoomCurBox = Math.floor(thisMinBound/4);
			if(gLog==1){console.log("panel2DrawMultiMap (Bounding Box) ABSOLUTE - [" + mapbbWidth + "w/" + mapbbHeight + "h] [" + mapzoomCurBox + "]");}
		}
		else {
			mapzoomCurBox = Math.floor((mapbbWidth+mapbbHeight)/8);
			if(gLog==1){console.log("panel2DrawMultiMap (Bounding Box) MEAN - [" + mapbbWidth + "w/" + mapbbHeight + "h] [" + mapzoomCurBox + "]");}
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
		if(gLog==1){console.log("panel2DrawMultiMap (set zoom level) - [zoom="+compiledZoom+"] [checkScale="+checkScale+"] [zoomArray="+zoomArray[compiledZoom+1]+"]");}
	}
	else {
		compiledZoom = defZoom;
	}
	mapWriteTrack = 1;
	p2MapDrawn = 0;
	panel2WhatInfo = -1;
	if (document.getElementById('panel2MultiMap')) {
		document.getElementById('panel2MultiMap').innerHTML="";
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
				p2map = new Map("panel2MultiMap", {
					basemap: mapType,
					detectRetina: true,
					center: [document.getElementById('LO').value, document.getElementById('LA').value],
					autoResize: true,
					infoWindow: customPopup,
					zoom: compiledZoom
				});
			}
			else {
				p2map = new Map("panel2MultiMap", {
					basemap: mapType,
					detectRetina: true,
					center: [document.getElementById('LO').value, document.getElementById('LA').value],
					autoResize: true,
					zoom: compiledZoom
				});
			}
			p2map.on("load", mapLoaded);
			function mapLoaded(){
				document.getElementById('panel2MultiMap').removeAttribute("style");
				if(gLog==1){console.log("panel2DrawMultiMap START");}
				setTimeout(function() {
					if(gLog==1){console.log("panel2DrawMultiMap mapLoaded() response");}
					if (p2Pan == 0) {
						p2map.disablePan();
						p2map.disableMapNavigation();
					}
					if (p2Zoom == 0) {
						p2map.disableDoubleClickZoom();
						p2map.disableScrollWheelZoom();
						p2map.disableShiftDoubleClickZoom();
						p2map.hideZoomSlider();
					}
					var spt = new Point(document.getElementById('LO').value, document.getElementById('LA').value);
					p2map.resize();
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
						p2map.graphics.add(new Graphic(spt, txtHomeOut));
					}
					else {
						var spMarker = new PictureMarkerSymbol(pinSource + "pins/" + pinStart + "start." + pinSuffix, pinWidth, pinHeight);
						var spGraphic = new Graphic(spt,spMarker);
						p2map.graphics.add(spGraphic);
					}
					for (p2p=0; p2p<panel2MarkerPrep.length; p2p++) {
						var pt = new Point(panel2MarkerPrep[p2p][1],panel2MarkerPrep[p2p][0]);
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
							var pMarker = new PictureMarkerSymbol(panel2MarkerPrep[p2p][3], pinWidth, pinHeight);
						if(gLog==1){console.log("panel2DrawMultiMap (pin compile) ",panel2MarkerPrep[p2p][3]);}
							var graphic = new Graphic(pt,pMarker);
						}
						if (infoWindowOn==1) {
							var infoTemplate = new InfoTemplate(panel2MarkerPrep[p2p][2],panel2MarkerPrep[p2p][4]);
							infoTemplate.setTitle(panel2MarkerPrep[p2p][2]);
							infoTemplate.setContent(panel2MarkerPrep[p2p][4]);
							graphic.setInfoTemplate(infoTemplate);
						}
						panel2MarkerPrep[p2p][5] = pt;
						panel2MarkerPrep[p2p][6] = pt;
						p2map.graphics.add(graphic);
					}
					if (infoWindowOn==1) {
						var DW = infoMinWidth + 110;
						var DH = infoMinHeight + 125;
						p2map.infoWindow.resize(DW, DH);
						setTimeout(function(){
							p2MapDrawn = 1;
							if (panel2Default==1) {
								p2ShowInfowindow(0);
							}
						},1000);
					}
					if(gLog==1){console.log("panel2DrawMultiMap (zoom defaults) - [defZoom="+defZoom+"] [compiledZoom="+compiledZoom+"]");}
				},1500);
			}
		});
		frameVar = document.getElementById("clientSite");
		frameVar.contentWindow.location.replace(baseURL + "/control/maptracker.php?CLIENT=" + coreClient + "&RAND=" + Math.random() + "&ITER=" + iteration);
	}
}
function p2ShowInfowindow(id) {
	if (infoWindowOn==1 && p2MapDrawn == 1) {
		require(["esri/config", "esri/map", "esri/geometry/Point", "esri/InfoTemplate", "dojo/promise/all", "dojo/dom", "dojo/dom-construct", "dojo/domReady!"], function(esriConfig, Map, Point, InfoTemplate, all, dom, domConstruct) {
			if (id != panel2WhatInfo && panel2MarkerPrep[id]) {
				/*
				var modTheCenter = 0;
				if ((parseInt(document.getElementById('panel2MultiMap').offsetWidth) + 10) > parseInt(document.getElementById('panel2templates').offsetWidth)) {
					var modTheCenter = 1;
				}
				if (document.getElementById("panel2LocListShell") && modTheCenter == 1) {
					var whatZoom = parseInt(p2map.getLevel())-1;
					var whatDirection = "minus";
					if (parseInt(document.getElementById('panel2LocListShell').offsetLeft) < 120) {
						whatDirection = "plus"
					}
					var theLocWidth = parseInt(document.getElementById('panel2LocListShell').offsetWidth);
					var theMapWidth = parseInt(document.getElementById('panel2MultiMap').offsetWidth);
					var newSPoint = p2map.toMap(esri.geometry.ScreenPoint(0,0));
					var minX = p2map.toMap(esri.geometry.ScreenPoint(0,0));
					var maxX = p2map.toMap(esri.geometry.ScreenPoint((theMapWidth-1),0));
					var pointResolution = (maxX.x - minX.x)/theMapWidth;
					var currentMapCenter = (theMapWidth - theLocWidth) / 2;
					var thisOffset = Math.ceil(((theMapWidth / 2) - currentMapCenter) * pointResolution);
					var ptca = new Point(panel2MarkerPrep[id][1],panel2MarkerPrep[id][0]);
					if (whatDirection == "plus") {
						var ptc = ptca.offset(thisOffset,0);
					}
					else {
						var ptc = ptca.offset(thisOffset,0);
					}
					if(gLog==1){console.log("p2ShowInfowindow (modTheCenter = "+modTheCenter+") with zoom level " + p2map.getLevel() + " ", thisOffset, panel2MarkerPrep[id][5], ptc);}
				}
				else {
					var ptc = panel2MarkerPrep[id][5];
				}
				*/
				panel2WhatInfo = id;
				var DW = infoMinWidth + 10;
				var DH = infoMinHeight + 25;
				p2map.infoWindow.setContent(panel2MarkerPrep[id][4]);
				p2map.infoWindow.setTitle(panel2MarkerPrep[id][2]);
				p2map.infoWindow.resize(infoMinWidth, infoMinHeight);
				p2map.infoWindow.show(panel2MarkerPrep[id][5],p2map.infoWindow.ANCHOR_UPPERRIGHT);
				p2map.infoWindow.resize(DW, DH);
				p2map.centerAt(panel2MarkerPrep[id][5]);
			}
		});
	}
}
function p2HideInfowindow(id) {
}
function panel2HandleNoGeolocation(errorFlag) {
	apGeoBackup();
}
function panel2GeoLocation() {
	if(navigator.geolocation) {
		browserSupportFlag = true;
		navigator.geolocation.getCurrentPosition(function(position) {
			var baseLat = position.coords.latitude;
			var baseLong =  position.coords.longitude;
			document.getElementById('LA').value = baseLat;
			document.getElementById('LO').value = baseLong;
			p2JS_LA = baseLat;
			p2JS_LO = baseLong;
			panel2GetLatLngDetail(p2JS_LA,p2JS_LO,1);
		},
		function() {
			panel2HandleNoGeolocation(browserSupportFlag);
		});
	}
	else {
		browserSupportFlag = false;
		panel2HandleNoGeolocation(browserSupportFlag);
	}
}
function panel2GetLatLngDetail(lat,lng,statusVar) {
	require(["esri/config","esri/tasks/locator", "esri/geometry/Point", "esri/geometry/webMercatorUtils", "dojo/number", "dojo/parser", "esri/tasks/AddressCandidate", "dojo/_base/array", "dojo/domReady!"],
	function(esriConfig,Locator, Point, webMercatorUtils, number, parser, AddressCandidate, array) {
		parser.parse();
		p2rlocator = new Locator("//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer");
		var thisPoint = new Point(lng,lat);
		if (esriCA == 0) {
			if(gLog==1){console.log("panel2GetLatLngDetail - Midpoint Interval Start");}
			esriCA = 1;
			esriLoadIt = 0;
			esriTimeCurr = 0;
			EIO = 1;
			esriIntTrack = 1;
			esriIntervalOn();
		}
		var p2rlocationToAddress = p2rlocator.locationToAddress(thisPoint, 10000);
		p2rlocationToAddress.then(function(evt){
			if (esriIntTrack == 1) {
				esriIntTrack = 0;
				esriLoadIt = 1;
				if (evt.address) {
					if (statusVar == 1 || statusVar == 2) {
						if(gLog==1){console.log(evt.address);}
						p2GetDaStreet = evt.address.Address;
						p2GetDaCity = evt.address.City;
						p2GetDaState = evt.address.Region;
						p2GetDaCountry = evt.address.CountryCode;
						if (evt.address.CountryCode == "CAN") {
							p2GetDaZip = evt.address.Postal + " " + evt.address.PostalExt;
						}
						else {
							p2GetDaZip = evt.address.Postal;
						}
						document.getElementById('revCodeUS').value = 0;
						if (p2GetDaState != "null" && p2GetDaState != null) {
							var p2StateTemp = p2GetDaState.toLowerCase();
							for	(st=0; st<tblStateArray.length; st++) {
								if (tblStateArray[st][1].toLowerCase() == p2StateTemp) {
									p2GetDaState = tblStateArray[st][0];
									document.getElementById('revCodeUS').value = tblStateArray[st][2];
									break;
								}
							}
						}
						document.getElementById('revCodeStreet').value = p2GetDaStreet;
						document.getElementById('revCodeCity').value = p2GetDaCity;
						document.getElementById('revCodeState').value = p2GetDaState;
						document.getElementById('revCodeZip').value = p2GetDaZip;
						document.getElementById('revCodeCountry').value = p2GetDaCountry;
						document.getElementById('street').value = p2GetDaStreet;
						document.getElementById('city').value = p2GetDaCity;
						document.getElementById('state').value = p2GetDaState;
						document.getElementById('zip').value = p2GetDaZip;
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
						if (p2GetDaStreet != "null" && p2GetDaStreet != null) {
							addressDisplay += p2GetDaStreet;
						}
						if (p2GetDaCity != "null" && p2GetDaCity != null) {
							addressDisplay += " " + p2GetDaCity;
						}
						if (p2GetDaState != "null" && p2GetDaState != null) {
							addressDisplay += " " + p2GetDaState;
						}
						if (p2GetDaZip != "null" && p2GetDaZip != null) {
							addressDisplay += " " + p2GetDaZip;
						}
						if (document.getElementById('panel2CityField')) {
							document.getElementById('panel2CityField').value = p2GetDaCity;
							//document.getElementById('city').value = p2GetDaCity;
						}
						if (document.getElementById('panel2StateField')) {
							document.getElementById('panel2StateField').value = p2GetDaState;
							//document.getElementById('state').value = p2GetDaState;
						}
						if (document.getElementById('panel2ZipField')) {
							document.getElementById('panel2ZipField').value = p2GetDaZip;
							//document.getElementById('zip').value = p2GetDaZip;
						}
						if (document.getElementById('panel2AddressField')) {
	  						if (apMMShowVal == 0) {
								if(gLog==1){console.log("panel2LocServe.php - statusVar apMMShowVal == 0");}
								document.getElementById('panel2AddressField').value = addressDisplay;
							}
							else {
								if(gLog==1){console.log("panel2LocServe.php - statusVar apMMShowVal != 0");}
								document.getElementById('panel2AddressField').value = p2GetDaZip;
								apMMShowVal = 0;
							}
						}
						document.getElementById('addressCompile').value = addressDisplay;
						document.getElementById('GRAW').value = addressDisplay;
					}
					if (statusVar == 2) {
						if(gLog==1){console.log("panel2LocServe.php - statusVar == 2 panel2panel2Connect()");}
						if (bmBypass != 0) {
							p2OnDemand();
						}
						else {
	    					panel2panel2Connect();
	    				}
					}
					else if (statusVar == 1) {
						loaderToggle(0);
					}
	     		}
	      		else {
					if(gLog==1){console.log("panel2GetLatLngDetail - evt.address FAIL");}
					frameVar = document.getElementById("iFrameForms");
					frameVar.contentWindow.location.replace(controlURL + "panel4Connect.php?PANEL=2&CLIENT=" + coreClient + "&ITER=" + iteration);
				}
			}
		},
		function(err){
			if(gLog==1){console.log("panel2GetLatLngDetail revgeocode FAIL");}
			frameVar = document.getElementById("iFrameForms");
			frameVar.contentWindow.location.replace(controlURL + "panel4Connect.php?PANEL=2&CLIENT=" + coreClient + "&ITER=" + iteration);
		});
	});
}
function panel2CodeAddress() {
	rteStoreObj.val.length = 0;
	p2dealDisable = 0;
	if(gLog==1){console.log("panel2CodeAddress() p2dealDisable = " + p2dealDisable);}
	p2codeTries++;
	var addressCompile = "";
	if (document.getElementById('street').value != "" && document.getElementById('street').value != p2AddFieldValueVar) {
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
	if(gLog==1){console.log("panel2LocServe.php - Initial Address Compilation: " + addressCompile);}
	require(["esri/config", "esri/tasks/locator", "esri/SpatialReference", "esri/geometry/Point", "esri/geometry/Extent", "esri/geometry/webMercatorUtils", "dojo/_base/array", "dojo/number", "dojo/parser", "dojo/json", "dijit/registry", "dojo/domReady!"], function(esriConfig, Locator, SpatialReference, Point, Extent, webMercatorUtils, arrayUtils, number, parser, JSON, registry) {
		parser.parse();
		esriConfig.defaults.io.timeout = 6000;
		p2locator = new Locator("//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer");
		var address = {
			"SingleLine": addressCompile
		};
		var options = {
			address: address,
			outFields: ["*"]
		};
		p2addressToLocations = p2locator.addressToLocations(options);
		p2addressToLocations.then(function(evt){
			if(gLog==1){console.log(evt);}
			p2LLPairArray.length = 0;
			if (evt[0]) {
				var result = evt[0];
				var x = result.location.x.toFixed(5); //lng
				var y = result.location.y.toFixed(5); //lat
				p2GetDaStreet = result.attributes.StAddr;
				p2GetDaCity = result.attributes.City;
				p2GetDaState = result.attributes.Region;
				p2GetDaCountry = result.attributes.Country;
				if (result.attributes.Country == "CAN") {
					p2GetDaZip = result.attributes.Postal + " " + result.attributes.PostalExt;
				}
				else {
					p2GetDaZip = result.attributes.Postal;
				}
				p2LLPairArray[0] = [y,x];
			}
			if(gLog==1){console.log("panel2LocServe.php - p2GetDaZip: " + p2GetDaZip);}
			if (p2LLPairArray.length) {
				document.getElementById("LA").value = p2LLPairArray[0][0];
				document.getElementById("LO").value = p2LLPairArray[0][1];
				if (p2GetDaCountry == "USA" && p2GetDaZip == "") {
					panel2GetLatLngDetail(p2LLPairArray[0][0],p2LLPairArray[0][1],2);
				}
				else {
					document.getElementById('revCodeUS').value = 0;
					if (p2GetDaState != "null" && p2GetDaState != null) {
						var p2StateTemp = p2GetDaState.toLowerCase();
						for	(st=0; st<tblStateArray.length; st++) {
							if (tblStateArray[st][1].toLowerCase() == p2StateTemp) {
								p2GetDaState = tblStateArray[st][0];
								document.getElementById('revCodeUS').value = tblStateArray[st][2];
								break;
							}
						}
					}
					document.getElementById('revCodeStreet').value = p2GetDaStreet;
					document.getElementById('revCodeCity').value = p2GetDaCity;
					document.getElementById('revCodeState').value = p2GetDaState;
					document.getElementById('revCodeZip').value = p2GetDaZip;
					document.getElementById('revCodeCountry').value = p2GetDaCountry;
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
					if (p2GetDaStreet != "null" && p2GetDaStreet != null) {
						addressDisplay += p2GetDaStreet;
					}
					if (p2GetDaCity != "null" && p2GetDaCity != null) {
						addressDisplay += " " + p2GetDaCity;
					}
					if (p2GetDaState != "null" && p2GetDaState != null) {
						addressDisplay += " " + p2GetDaState;
					}
					if (p2GetDaZip != "null" && p2GetDaZip != null) {
						addressDisplay += " " + p2GetDaZip;
					}
					if (document.getElementById('panel2CityField')) {
						document.getElementById('panel2CityField').value = p2GetDaCity;
						document.getElementById('city').value = p2GetDaCity;
					}
					if (document.getElementById('panel2StateField')) {
						document.getElementById('panel2StateField').value = p2GetDaState;
						document.getElementById('state').value = p2GetDaState;
					}
					if (document.getElementById('panel2ZipField')) {
						document.getElementById('panel2ZipField').value = p2GetDaZip;
						document.getElementById('zip').value = p2GetDaZip;
					}
					if (document.getElementById('panel2AddressField')) {
						document.getElementById('street').value = document.getElementById('panel2AddressField').value;
					}
					document.getElementById('addressCompile').value = addressDisplay;
					document.getElementById('GRAW').value = addressDisplay;
					if(gLog==1){console.log("panel2LocServe.php - Reverse Geocoded Compilation: " + addressDisplay);}
					if (bmBypass != 0) {
						p2OnDemand();
					}
					else {
	    				panel2panel2Connect();
	    			}
	    		}
			}
			else {
				errorText("Please enter a valid address",2);
			}
		},
		function(err){
			if(gLog==1){console.log(err.message);}
			if (p2codeTries < geoTries) {
				panel2CodeAddress();
			}
			else {
				if (autoShell == 0) {
					failOver(2);
				}
				else {
					errorText("We could not find that location. Please try again.",1);
				}
			}
		});
	});
}
scriptLoad++;
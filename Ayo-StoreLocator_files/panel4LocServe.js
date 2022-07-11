function panel4DrawMultiMap() {
	if (document.getElementById('panel4MultiMap')) {
		document.getElementById('panel4MultiMap').innerHTML="";
		require(["esri/config","esri/map", "esri/geometry/Point", "esri/symbols/PictureMarkerSymbol", "esri/symbols/Font", "esri/Color", "esri/symbols/TextSymbol", "esri/InfoTemplate", "esri/graphic", "dojo/dom-style", "dojo/domReady!"],
		function(esriConfig,Map, Point, PictureMarkerSymbol, Font, Color, TextSymbol, InfoTemplate, Graphic, domStyle) {
			esriConfig.defaults.io.timeout = 60000;
			p4map = new Map("panel4MultiMap", {
				basemap: mapType,
				detectRetina: true,
				center: [document.getElementById('LO').value, document.getElementById('LA').value],
				zoom: 5
			});
			p4map.on("load", mapLoaded);
			function mapLoaded(){
				var spt = new Point(document.getElementById('LO').value, document.getElementById('LA').value);
				if (autoShell == 1) {
					var font = new Font(
						Font.STYLE_NORMAL,
						Font.VARIANT_NORMAL,
						Font.WEIGHT_BOLD
					);
					font.setSize(mapFontSize);
					font.setFamily(mapFontFace);
					var txtNoneOut = new TextSymbol(
						txtNone,
						font,
						new Color(mapFontColor)
					);
					txtNoneOut.setOffset(0,-8);
					p4map.graphics.add(new Graphic(spt, txtNoneOut));
				}
				else {
					var spMarker = new PictureMarkerSymbol(pinSource + "pins/" + pinStart + "start." + pinSuffix, pinWidth, pinHeight);
					var spGraphic = new Graphic(spt,spMarker);
					p4map.graphics.add(spGraphic);
				}
			}
		});
		frameVar = document.getElementById("clientSite");
		frameVar.contentWindow.location.replace(baseURL + "/control/maptracker.php?CLIENT=" + coreClient + "&RAND=" + Math.random() + "&ITER=" + iteration);
	}
}
function panel4HandleNoGeolocation(errorFlag) {
	if (errorFlag == true) {
		panel4Load();
	}
	else {
		panel4Load();
	}
}
function panel4GeoLocation() {
	if(navigator.geolocation) {
		browserSupportFlag = true;
		navigator.geolocation.getCurrentPosition(function(position) {
			var baseLat = position.coords.latitude;
			var baseLong =  position.coords.longitude;
			document.getElementById('LA').value = baseLat;
			document.getElementById('LO').value = baseLong;
			p4JS_LA = baseLat;
			p4JS_LO = baseLong;
			panel4GetLatLngDetail(p4JS_LA,p4JS_LO,1);
		},
		function() {
			panel4HandleNoGeolocation(browserSupportFlag);
		});
	}
	else {
		browserSupportFlag = false;
		panel4HandleNoGeolocation(browserSupportFlag);
	}
}
function panel4GetLatLngDetail(lat,lng,statusVar) {
	require(["esri/config","esri/tasks/locator", "esri/geometry/Point", "esri/geometry/webMercatorUtils", "dojo/number", "dojo/parser", "esri/tasks/AddressCandidate", "dojo/_base/array", "dojo/domReady!"],
	function(esriConfig,Locator, Point, webMercatorUtils, number, parser, AddressCandidate, array) {
		parser.parse();
		p4rlocator = new Locator("//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer");
		var thisPoint = new Point(lng,lat);
		if (esriCA == 0) {
			if(gLog==1){console.log("panel4GetLatLngDetail - Midpoint Interval Start");}
			esriCA = 1;
			esriLoadIt = 0;
			esriTimeCurr = 0;
			EIO = 1;
			esriIntTrack = 1;
			esriIntervalOn(4);
		}
		var p4rlocationToAddress = p4rlocator.locationToAddress(thisPoint, 10000);
		p4rlocationToAddress.then(function(evt){
			if (esriIntTrack == 1) {
				esriIntTrack = 0;
				esriLoadIt = 1;
				if (evt.address) {
					if (statusVar == 1 || statusVar == 2) {
						if(gLog==1){console.log(evt.address);}
						p4GetDaStreet = evt.address.Address;
						p4GetDaCity = evt.address.City;
						p4GetDaState = evt.address.Region;
						p4GetDaCountry = evt.address.CountryCode;
						if (evt.address.CountryCode == "CAN") {
							p4GetDaZip = evt.address.Postal + " " + evt.address.PostalExt;
						}
						else {
							p4GetDaZip = evt.address.Postal;
						}
						document.getElementById('revCodeUS').value = 0;
						if (p4GetDaState != "null" && p4GetDaState != null) {
							var p4StateTemp = p4GetDaState.toLowerCase();
							for	(st=0; st<tblStateArray.length; st++) {
								if (tblStateArray[st][1].toLowerCase() == p4StateTemp) {
									p4GetDaState = tblStateArray[st][0];
									document.getElementById('revCodeUS').value = tblStateArray[st][2];
									break;
								}
							}
						}
						document.getElementById('revCodeStreet').value = p4GetDaStreet;
						document.getElementById('revCodeCity').value = p4GetDaCity;
						document.getElementById('revCodeState').value = p4GetDaState;
						document.getElementById('revCodeZip').value = p4GetDaZip;
						document.getElementById('revCodeCountry').value = p4GetDaCountry;
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
						if (p4GetDaStreet != "null" && p4GetDaStreet != null) {
							addressDisplay += p4GetDaStreet;
						}
						if (p4GetDaCity != "null" && p4GetDaCity != null) {
							addressDisplay += " " + p4GetDaCity;
						}
						if (p4GetDaState != "null" && p4GetDaState != null) {
							addressDisplay += " " + p4GetDaState;
						}
						if (p4GetDaZip != "null" && p4GetDaZip != null) {
							addressDisplay += " " + p4GetDaZip;
						}
						if (document.getElementById('panel4CityField')) {
							document.getElementById('panel4CityField').value = p4GetDaCity;
							//document.getElementById('city').value = p4GetDaCity;
						}
						if (document.getElementById('panel4StateField')) {
							document.getElementById('panel4StateField').value = p4GetDaState;
							//document.getElementById('state').value = p4GetDaState;
						}
						if (document.getElementById('panel4ZipField')) {
							document.getElementById('panel4ZipField').value = p4GetDaZip;
							//document.getElementById('zip').value = p4GetDaZip;
						}
						if (document.getElementById('panel4AddressField')) {
	  						if (apMMShowVal == 0) {
								if(gLog==1){console.log("panel4LocServe.php - statusVar apMMShowVal == 0");}
								document.getElementById('panel4AddressField').value = addressDisplay;
							}
							else {
								if(gLog==1){console.log("panel4LocServe.php - statusVar apMMShowVal != 0");}
								document.getElementById('panel4AddressField').value = p4GetDaZip;
								apMMShowVal = 0;
							}
						}
					}
					if (statusVar == 2) {
						panel4panel2Connect();
					}
					else if (statusVar == 1) {
						loaderToggle(0);
					}
	     		}
	      		else {
					if(gLog==1){console.log("panel4GetLatLngDetail - evt.address FAIL");}
					frameVar = document.getElementById("iFrameForms");
					frameVar.contentWindow.location.replace(controlURL + "panel4Connect.php?PANEL=4&CLIENT=" + coreClient + "&ITER=" + iteration);
				}
			}
		},
		function(err){
			if(gLog==1){console.log("panel4GetLatLngDetail revgeocode FAIL");}
			frameVar = document.getElementById("iFrameForms");
			frameVar.contentWindow.location.replace(controlURL + "panel4Connect.php?PANEL=4&CLIENT=" + coreClient + "&ITER=" + iteration);
		});
	});
}
var p4addressToLocations;
var p4codeTries = 0;
function panel4CodeAddress() {
	rteStoreObj.val.length = 0;
	p2dealDisable = 0;
	if(gLog==1){console.log("panel4CodeAddress() p2dealDisable = " + p2dealDisable);}
	p4codeTries++;
	var addressCompile = "";
	if (document.getElementById('street').value != "" && document.getElementById('street').value != p4AddFieldValueVar) {
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
	if(gLog==1){console.log("panel4LocServe.php - Initial Address Compilation: " + addressCompile);}
	require(["esri/config", "esri/tasks/locator", "esri/SpatialReference", "esri/geometry/Point", "esri/geometry/Extent", "esri/geometry/webMercatorUtils", "dojo/_base/array", "dojo/number", "dojo/parser", "dojo/json", "dijit/registry", "dojo/domReady!"], function(esriConfig, Locator, SpatialReference, Point, Extent, webMercatorUtils, arrayUtils, number, parser, JSON, registry) {
		parser.parse();
		esriConfig.defaults.io.timeout = 6000;
		p4locator = new Locator("//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer");
		var address = {
			"SingleLine": addressCompile
		};
		var options = {
			address: address,
			outFields: ["*"]
		};
		p4addressToLocations = p4locator.addressToLocations(options);
		p4addressToLocations.then(function(evt){
			if(gLog==1){console.log(evt);}
			p4LLPairArray.length = 0;
			if (evt[0]) {
				var result = evt[0];
				var x = result.location.x.toFixed(5); //lng
				var y = result.location.y.toFixed(5); //lat
				p4GetDaStreet = result.attributes.StAddr;
				p4GetDaCity = result.attributes.City;
				p4GetDaState = result.attributes.Region;
				p4GetDaCountry = result.attributes.Country;
				if (result.attributes.Country == "CAN") {
					p4GetDaZip = result.attributes.Postal + " " + result.attributes.PostalExt;
				}
				else {
					p4GetDaZip = result.attributes.Postal;
				}
				p4LLPairArray[0] = [y,x];
			}
			if (p4LLPairArray.length) {
				document.getElementById("LA").value = p4LLPairArray[0][0];
				document.getElementById("LO").value = p4LLPairArray[0][1];
				if (p4GetDaCountry == "USA" && p4GetDaZip == "") {
					panel4GetLatLngDetail(p4LLPairArray[0][0],p4LLPairArray[0][1],2);
				}
				else {
					document.getElementById('revCodeUS').value = 0;
					if (p4GetDaState != "null" && p4GetDaState != null) {
						var p4StateTemp = p4GetDaState.toLowerCase();
						for	(st=0; st<tblStateArray.length; st++) {
							if (tblStateArray[st][1].toLowerCase() == p4StateTemp) {
								p4GetDaState = tblStateArray[st][0];
								document.getElementById('revCodeUS').value = tblStateArray[st][2];
								break;
							}
						}
					}
					document.getElementById('revCodeStreet').value = p4GetDaStreet;
					document.getElementById('revCodeCity').value = p4GetDaCity;
					document.getElementById('revCodeState').value = p4GetDaState;
					document.getElementById('revCodeZip').value = p4GetDaZip;
					document.getElementById('revCodeCountry').value = p4GetDaCountry;
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
					if (p4GetDaStreet != "null" && p4GetDaStreet != null) {
						addressDisplay += p4GetDaStreet;
					}
					if (p4GetDaCity != "null" && p4GetDaCity != null) {
						addressDisplay += " " + p4GetDaCity;
					}
					if (p4GetDaState != "null" && p4GetDaState != null) {
						addressDisplay += " " + p4GetDaState;
					}
					if (p4GetDaZip != "null" && p4GetDaZip != null) {
						addressDisplay += " " + p4GetDaZip;
					}
					if (document.getElementById('panel4CityField')) {
						document.getElementById('panel4CityField').value = p4GetDaCity;
						document.getElementById('city').value = p4GetDaCity;
					}
					if (document.getElementById('panel4StateField')) {
						document.getElementById('panel4StateField').value = p4GetDaState;
						document.getElementById('state').value = p4GetDaState;
					}
					if (document.getElementById('panel4ZipField')) {
						document.getElementById('panel4ZipField').value = p4GetDaZip;
						document.getElementById('zip').value = p4GetDaZip;
					}
					if (document.getElementById('panel4AddressField')) {
						document.getElementById('street').value = document.getElementById('panel4AddressField').value;
					}
					document.getElementById('addressCompile').value = addressDisplay;
					document.getElementById('GRAW').value = addressDisplay;
					if(gLog==1){console.log("panel4LocServe.php - Reverse Geocoded Compilation: " + addressDisplay);}
	    			panel4panel2Connect();
	    		}
			}
			else {
				errorText("Please enter a valid address",2);
			}
		},
		function(err){
			if(gLog==1){console.log(err.message);}
			if (p4codeTries < geoTries) {
				panel4CodeAddress();
			}
			else {
				if (autoShell == 0) {
					failOver(4);
				}
				else {
					errorText("We could not find that location. Please try again.",1);
				}
			}
		});
	});
}
function p4CodeComment() {
	if(gLog==1){console.log("p4CodeComment() START");}
	var addressCompile = "";
	if (document.getElementById('panel4CRFCity').value != "") {
		addressCompile += document.getElementById('panel4CRFCity').value + ",";
	}
	if (document.getElementById('panel4CRFState').value != "") {
		addressCompile += " " + document.getElementById('panel4CRFState').value;
	}
	if (document.getElementById('panel4CRFZip').value != "") {
		addressCompile += " " + document.getElementById('panel4CRFZip').value;
	}
	if (document.getElementById('panel4CRFCountry').value != "") {
		addressCompile += ", " + document.getElementById('panel4CRFCountry').value;
	}
	if(gLog==1){console.log("p4CodeComment - Initial Address Compilation: " + addressCompile);}
	require(["esri/config", "esri/tasks/locator", "esri/SpatialReference", "esri/geometry/Point", "esri/geometry/Extent", "esri/geometry/webMercatorUtils", "dojo/_base/array", "dojo/number", "dojo/parser", "dojo/json", "dijit/registry", "dojo/domReady!"], function(esriConfig, Locator, SpatialReference, Point, Extent, webMercatorUtils, arrayUtils, number, parser, JSON, registry) {
		parser.parse();
		esriConfig.defaults.io.timeout = 6000;
		p4crflocator = new Locator("//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer");
		var address = {
			"SingleLine": addressCompile
		};
		var options = {
			address: address,
			outFields: ["*"]
		};
		p4addressToLocations = p4crflocator.addressToLocations(options);
		p4addressToLocations.then(function(evt){
			if(gLog==1){console.log(evt);}
			p4CRFPairArray.length = 0;
			if (evt[0]) {
				var result = evt[0];
				var x = result.location.x.toFixed(5); //lng
				var y = result.location.y.toFixed(5); //lat
				p4CRFGetDaStreet = result.attributes.StAddr;
				p4CRFGetDaCity = result.attributes.City;
				p4CRFGetDaState = result.attributes.Region;
				p4CRFGetDaCountry = result.attributes.Country;
				if (result.attributes.Country == "CAN") {
					p4CRFGetDaZip = result.attributes.Postal + " " + result.attributes.PostalExt;
				}
				else {
					p4CRFGetDaZip = result.attributes.Postal;
				}
				p4CRFPairArray[0] = [y,x];
			}
			if (p4CRFPairArray.length) {
				if (p4CRFGetDaCountry == "USA" && p4CRFGetDaZip == "") {
					if(gLog==1){console.log("p4CodeComment - p4CRFGetLatLngDetail " ,p4CRFPairArray[0][0],p4CRFPairArray[0][1]);}
					p4CRFGetLatLngDetail(p4CRFPairArray[0][0],p4CRFPairArray[0][1]);
				}
				else {
					document.getElementById('panel4CRFCity').value = p4CRFGetDaCity;
					document.getElementById('panel4CRFState').value = p4CRFGetDaState;
					document.getElementById('panel4CRFZip').value = p4CRFGetDaZip;
					if(gLog==1){console.log("p4CodeComment - Reverse Geocoded Compilation: " + p4CRFGetDaCity + ", " + p4CRFGetDaState + " " + p4CRFGetDaZip + ", " + p4CRFGetDaCountry);}
	    			p4CRFProcess();
	    		}
			}
			else {
				errorText("Please enter a valid address",2);
			}
		},
		function(err){
			if(gLog==1){console.log(err.message);}
			errorText("We could not find that location. Please try again.",1);
		});
	});
}
function p4CRFGetLatLngDetail(lat,lng) {
	if(gLog==1){console.log("p4CRFGetLatLngDetail() START");}
	require(["esri/config","esri/tasks/locator", "esri/geometry/Point", "esri/geometry/webMercatorUtils", "dojo/number", "dojo/parser", "esri/tasks/AddressCandidate", "dojo/_base/array", "dojo/domReady!"],
	function(esriConfig,Locator, Point, webMercatorUtils, number, parser, AddressCandidate, array) {
		parser.parse();
		p4crfrlocator = new Locator("//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer");
		var thisPoint = new Point(lng,lat);
		var p4rlocationToAddress = p4crfrlocator.locationToAddress(thisPoint, 10000);
		p4rlocationToAddress.then(function(evt){
			if (esriIntTrack == 1) {
				esriIntTrack = 0;
				esriLoadIt = 1;
				if (evt.address) {
					if (statusVar == 1 || statusVar == 2) {
						if(gLog==1){console.log(evt.address);}
						p4CRFGetDaStreet = evt.address.Address;
						p4CRFGetDaCity = evt.address.City;
						p4CRFGetDaState = evt.address.Region;
						p4CRFGetDaCountry = evt.address.CountryCode;
						if (evt.address.CountryCode == "CAN") {
							p4CRFGetDaZip = evt.address.Postal + " " + evt.address.PostalExt;
						}
						else {
							p4CRFGetDaZip = evt.address.Postal;
						}
						document.getElementById('panel4CRFCity').value = p4CRFGetDaCity;
						document.getElementById('panel4CRFState').value = p4CRFGetDaState;
						document.getElementById('panel4CRFZip').value = p4CRFGetDaZip;
						if(gLog==1){console.log("p4CRFGetLatLngDetail - Reverse Geocoded Compilation: " + p4CRFGetDaCity + ", " + p4CRFGetDaState + " " + p4CRFGetDaZip + ", " + p4CRFGetDaCountry);}
	    				p4CRFProcess();
					}
	     		}
	      		else {
					errorText("Please enter a valid address",2);
				}
			}
		},
		function(err){
			if(gLog==1){console.log(err.message);}
			errorText("We could not find that location. Please try again.",1);
		});
	});
}
scriptLoad++;
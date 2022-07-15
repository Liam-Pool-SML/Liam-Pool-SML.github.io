function panel5DrawMultiMap() {
	if (document.getElementById('panel5MultiMap')) {
		document.getElementById('panel5MultiMap').innerHTML="";
		require(["esri/config","esri/map", "esri/geometry/Point", "esri/symbols/PictureMarkerSymbol", "esri/symbols/Font", "esri/Color", "esri/symbols/TextSymbol", "esri/InfoTemplate", "esri/graphic", "dojo/dom-style", "dojo/domReady!"],
		function(esriConfig,Map, Point, PictureMarkerSymbol, Font, Color, TextSymbol, InfoTemplate, Graphic, domStyle) {
			esriConfig.defaults.io.timeout = 60000;
			p5map = new Map("panel5MultiMap", {
				basemap: mapType,
				detectRetina: true,
				center: [document.getElementById('LO').value, document.getElementById('LA').value],
				zoom: 11
			});
			p5map.on("load", mapLoaded);
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
					var txtStoreOut = new TextSymbol(
						txtStore,
						font,
						new Color(mapFontColor)
					);
					txtStoreOut.setOffset(0,-8);
					p5map.graphics.add(new Graphic(spt, txtStoreOut));
				}
				else {
					var spMarker = new PictureMarkerSymbol(pinSource + "pins/" + pinStart + "start." + pinSuffix, pinWidth, pinHeight);
					var spGraphic = new Graphic(spt,spMarker);
					p5map.graphics.add(spGraphic);
				}
			}
		});
		frameVar = document.getElementById("clientSite");
		frameVar.contentWindow.location.replace(baseURL + "/control/maptracker.php?CLIENT=" + coreClient + "&RAND=" + Math.random() + "&ITER=" + iteration);
	}
}
function panel5HandleNoGeolocation(errorFlag) {
	if (errorFlag == true) {
		panel5Load();
	}
	else {
		panel5Load();
	}
}
function panel5GeoLocation() {
	if(navigator.geolocation) {
		browserSupportFlag = true;
		navigator.geolocation.getCurrentPosition(function(position) {
			var baseLat = position.coords.latitude;
			var baseLong =  position.coords.longitude;
			document.getElementById('LA').value = baseLat;
			document.getElementById('LO').value = baseLong;
			p5JS_LA = baseLat;
			p5JS_LO = baseLong;
			panel5GetLatLngDetail(p5JS_LA,p5JS_LO,1);
		},
		function() {
			panel5HandleNoGeolocation(browserSupportFlag);
		});
	}
	else {
		browserSupportFlag = false;
		panel5HandleNoGeolocation(browserSupportFlag);
	}
}
function panel5GetLatLngDetail(lat,lng,statusVar) {
	require(["esri/config","esri/tasks/locator", "esri/geometry/Point", "esri/geometry/webMercatorUtils", "dojo/number", "dojo/parser", "esri/tasks/AddressCandidate", "dojo/_base/array", "dojo/domReady!"],
	function(esriConfig,Locator, Point, webMercatorUtils, number, parser, AddressCandidate, array) {
		parser.parse();
		p5rlocator = new Locator("//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer");
		var thisPoint = new Point(lng,lat);
		if (esriCA == 0) {
			if(gLog==1){console.log("panel5GetLatLngDetail - Midpoint Interval Start");}
			esriCA = 1;
			esriLoadIt = 0;
			esriTimeCurr = 0;
			EIO = 1;
			esriIntTrack = 1;
			esriIntervalOn(5);
		}
		var p5rlocationToAddress = p5rlocator.locationToAddress(thisPoint, 10000);
		p5rlocationToAddress.then(function(evt){
			if (esriIntTrack == 1) {
				esriIntTrack = 0;
				esriLoadIt = 1;
				if (evt.address) {
					if (statusVar == 1 || statusVar == 2) {
						if(gLog==1){console.log(evt.address);}
						p5GetDaStreet = evt.address.Address;
						p5GetDaCity = evt.address.City;
						p5GetDaState = evt.address.Region;
						p5GetDaCountry = evt.address.CountryCode;
						if (evt.address.CountryCode == "CAN") {
							p5GetDaZip = evt.address.Postal + " " + evt.address.PostalExt;
						}
						else {
							p5GetDaZip = evt.address.Postal;
						}
						document.getElementById('revCodeUS').value = 0;
						if (p5GetDaState != "null" && p5GetDaState != null) {
							var p5StateTemp = p5GetDaState.toLowerCase();
							for	(st=0; st<tblStateArray.length; st++) {
								if (tblStateArray[st][1].toLowerCase() == p5StateTemp) {
									p5GetDaState = tblStateArray[st][0];
									document.getElementById('revCodeUS').value = tblStateArray[st][2];
									break;
								}
							}
						}
						document.getElementById('revCodeStreet').value = p5GetDaStreet;
						document.getElementById('revCodeCity').value = p5GetDaCity;
						document.getElementById('revCodeState').value = p5GetDaState;
						document.getElementById('revCodeZip').value = p5GetDaZip;
						document.getElementById('revCodeCountry').value = p5GetDaCountry;
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
						if (p5GetDaStreet != "null" && p5GetDaStreet != null) {
							addressDisplay += p5GetDaStreet;
						}
						if (p5GetDaCity != "null" && p5GetDaCity != null) {
							addressDisplay += " " + p5GetDaCity;
						}
						if (p5GetDaState != "null" && p5GetDaState != null) {
							addressDisplay += " " + p5GetDaState;
						}
						if (p5GetDaZip != "null" && p5GetDaZip != null) {
							addressDisplay += " " + p5GetDaZip;
						}
						if (document.getElementById('panel5CityField')) {
							document.getElementById('panel5CityField').value = p5GetDaCity;
							//document.getElementById('city').value = p5GetDaCity;
						}
						if (document.getElementById('panel5StateField')) {
							document.getElementById('panel5StateField').value = p5GetDaState;
							//document.getElementById('state').value = p5GetDaState;
						}
						if (document.getElementById('panel5ZipField')) {
							document.getElementById('panel5ZipField').value = p5GetDaZip;
							//document.getElementById('zip').value = p5GetDaZip;
						}
						if (document.getElementById('panel5AddressField')) {
	  						if (apMMShowVal == 0) {
								if(gLog==1){console.log("panel5LocServe.php - statusVar apMMShowVal == 0");}
								document.getElementById('panel5AddressField').value = addressDisplay;
							}
							else {
								if(gLog==1){console.log("panel5LocServe.php - statusVar apMMShowVal != 0");}
								document.getElementById('panel5AddressField').value = p5GetDaZip;
								apMMShowVal = 0;
							}
						}
					}
					if (statusVar == 2) {
						panel5panel2Connect();
					}
					else if (statusVar == 1) {
						loaderToggle(0);
					}
	     		}
	      		else {
					if(gLog==1){console.log("panel5GetLatLngDetail - evt.address FAIL");}
					frameVar = document.getElementById("iFrameForms");
					frameVar.contentWindow.location.replace(controlURL + "panel4Connect.php?PANEL=5&CLIENT=" + coreClient + "&ITER=" + iteration);
				}
			}
		},
		function(err){
			if(gLog==1){console.log("panel5GetLatLngDetail revgeocode FAIL");}
			frameVar = document.getElementById("iFrameForms");
			frameVar.contentWindow.location.replace(controlURL + "panel4Connect.php?PANEL=5&CLIENT=" + coreClient + "&ITER=" + iteration);
		});
	});
}
function panel5CodeAddress() {
	rteStoreObj.val.length = 0;
	p2dealDisable = 0;
	if(gLog==1){console.log("panel5CodeAddress() p2dealDisable = " + p2dealDisable);}
	p5codeTries++;
	var addressCompile = "";
	if (document.getElementById('street').value != "" && document.getElementById('street').value != p5AddFieldValueVar) {
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
	if(gLog==1){console.log("panel5LocServe.php - Initial Address Compilation: " + addressCompile);}
	require(["esri/config", "esri/tasks/locator", "esri/SpatialReference", "esri/geometry/Point", "esri/geometry/Extent", "esri/geometry/webMercatorUtils", "dojo/_base/array", "dojo/number", "dojo/parser", "dojo/json", "dijit/registry", "dojo/domReady!"], function(esriConfig, Locator, SpatialReference, Point, Extent, webMercatorUtils, arrayUtils, number, parser, JSON, registry) {
		parser.parse();
		esriConfig.defaults.io.timeout = 6000;
		p5locator = new Locator("//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer");
		var address = {
			"SingleLine": addressCompile
		};
		var options = {
			address: address,
			outFields: ["*"]
		};
		p5addressToLocations = p5locator.addressToLocations(options);
		p5addressToLocations.then(function(evt){
			if(gLog==1){console.log(evt);}
			p5LLPairArray.length = 0;
			if (evt[0]) {
				var result = evt[0];
				var x = result.location.x.toFixed(5); //lng
				var y = result.location.y.toFixed(5); //lat
				p5GetDaStreet = result.attributes.StAddr;
				p5GetDaCity = result.attributes.City;
				p5GetDaState = result.attributes.Region;
				p5GetDaCountry = result.attributes.Country;
				if (result.attributes.Country == "CAN") {
					p5GetDaZip = result.attributes.Postal + " " + result.attributes.PostalExt;
				}
				else {
					p5GetDaZip = result.attributes.Postal;
				}
				p5LLPairArray[0] = [y,x];
			}
			if (p5LLPairArray.length) {
				document.getElementById("LA").value = p5LLPairArray[0][0];
				document.getElementById("LO").value = p5LLPairArray[0][1];
				if (p5GetDaCountry == "USA" && p5GetDaZip == "") {
					panel5GetLatLngDetail(p5LLPairArray[0][0],p5LLPairArray[0][1],2);
				}
				else {
					document.getElementById('revCodeUS').value = 0;
					if (p5GetDaState != "null" && p5GetDaState != null) {
						var p5StateTemp = p5GetDaState.toLowerCase();
						for	(st=0; st<tblStateArray.length; st++) {
							if (tblStateArray[st][1].toLowerCase() == p5StateTemp) {
								p5GetDaState = tblStateArray[st][0];
								document.getElementById('revCodeUS').value = tblStateArray[st][2];
								break;
							}
						}
					}
					document.getElementById('revCodeStreet').value = p5GetDaStreet;
					document.getElementById('revCodeCity').value = p5GetDaCity;
					document.getElementById('revCodeState').value = p5GetDaState;
					document.getElementById('revCodeZip').value = p5GetDaZip;
					document.getElementById('revCodeCountry').value = p5GetDaCountry;
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
					if (p5GetDaStreet != "null" && p5GetDaStreet != null) {
						addressDisplay += p5GetDaStreet;
					}
					if (p5GetDaCity != "null" && p5GetDaCity != null) {
						addressDisplay += " " + p5GetDaCity;
					}
					if (p5GetDaState != "null" && p5GetDaState != null) {
						addressDisplay += " " + p5GetDaState;
					}
					if (p5GetDaZip != "null" && p5GetDaZip != null) {
						addressDisplay += " " + p5GetDaZip;
					}
					if (document.getElementById('panel5CityField')) {
						document.getElementById('panel5CityField').value = p5GetDaCity;
						document.getElementById('city').value = p5GetDaCity;
					}
					if (document.getElementById('panel5StateField')) {
						document.getElementById('panel5StateField').value = p5GetDaState;
						document.getElementById('state').value = p5GetDaState;
					}
					if (document.getElementById('panel5ZipField')) {
						document.getElementById('panel5ZipField').value = p5GetDaZip;
						document.getElementById('zip').value = p5GetDaZip;
					}
					if (document.getElementById('panel5AddressField')) {
						document.getElementById('street').value = document.getElementById('panel5AddressField').value;
					}
					document.getElementById('addressCompile').value = addressDisplay;
					document.getElementById('GRAW').value = addressDisplay;
					if(gLog==1){console.log("panel5LocServe.php - Reverse Geocoded Compilation: " + addressDisplay);}
	    			panel5panel2Connect();
	    		}
			}
			else {
			}
		},
		function(err){
			if(gLog==1){console.log(err.message);}
			if (p5codeTries < geoTries) {
				panel5CodeAddress();
			}
			else {
				if (autoShell == 0) {
					failOver(5);
				}
				else {
					errorText("We could not find that location. Please try again.",1);
				}
			}
		});
	});
}
function panel5CodeRTRAddress() {
	var addressCompile = "";
	if (document.getElementById('panel5RTRSAddOne')) {
		if (document.getElementById('panel5RTRSAddOne') != "") {
			addressCompile += document.getElementById('panel5RTRSAddOne').value;
		}
	}
	if (document.getElementById('panel5RTRSCity')) {
		if (document.getElementById('panel5RTRSCity') != "") {
			addressCompile += ", " + document.getElementById('panel5RTRSCity').value;
		}
	}
	if (document.getElementById('panel5RTRSState')) {
		if (document.getElementById('panel5RTRSState') != "") {
			addressCompile += ", " + document.getElementById('panel5RTRSState').value;
		}
	}
	if (document.getElementById('panel5RTRSZip')) {
		if (document.getElementById('panel5RTRSZip') != "") {
			addressCompile += " " + document.getElementById('panel5RTRSZip').value;
		}
	}
	if (document.getElementById('panel5RTRSCountry')) {
		if (document.getElementById('panel5RTRSCountry') != "") {
			addressCompile += " ," + document.getElementById('panel5RTRSCountry').value;
		}
	}
	var addTest = addressCompile.replace(" ", "");
	if (isNaN(addTest)) {
	}
	else {
		addressCompile += ", USA";
	}
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
			p5locator = new Locator("//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer");
			p5locator.on("address-to-locations-complete", function(evt) {
				showResults(evt.addresses);
			});
			function showResults(results) {
				if (esriIntTrack == 1) {
					p5RTRLLPairArray.length = 0;
					var llPair = 0;
					arrayUtils.forEach(results, function(result, index) {
						var x = result.location.x.toFixed(5); //lng
						var y = result.location.y.toFixed(5); //lat
						p5RTRLLPairArray[llPair] = [y,x];
						llPair++
					});
					if (p5RTRLLPairArray.length) {
						document.getElementById("RTRLA").value = p5RTRLLPairArray[0][0];
						document.getElementById("RTRLO").value = p5RTRLLPairArray[0][1];
						panel5GetLatLngRTR(document.getElementById("RTRLA").value,document.getElementById("RTRLO").value,1);
					}
					else {
					}
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
			esriIntervalOn(5);
			p5locator.addressToLocations(options);
		}
	);
}
function panel5GrabRTRRes (indexSet,valueSet) {
	panel5RVGRTRArray[indexSet] = valueSet;
}
function panel5GetLatLngRTR(lat,lng,statusVar) {
	require(["esri/config","esri/tasks/locator", "esri/geometry/Point", "esri/geometry/webMercatorUtils", "dojo/number", "dojo/parser", "esri/tasks/AddressCandidate", "dojo/_base/array", "dojo/domReady!"],
	function(esriConfig,Locator, Point, webMercatorUtils, number, parser, AddressCandidate, array) {
		parser.parse();
		p5rlocator = new Locator("//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer");
		p5rlocator.on("location-to-address-complete", function(evt) {
			if (esriIntTrack == 1) {
				esriIntTrack = 0;
				esriLoadIt = 1;
				if (evt.address.address) {
					if (statusVar) {
						if(gLog==1){console.log(evt.address.address);}
						p5rtrGetDaStreet = evt.address.address.Address;
						p5rtrGetDaCity = evt.address.address.City;
						p5rtrGetDaState = evt.address.address.Region;
						p5rtrGetDaCountry = evt.address.address.CountryCode;
						if (evt.address.address.CountryCode == "CAN") {
							p5rtrGetDaZip = evt.address.address.Postal + " " + evt.address.address.PostalExt;
						}
						else {
							p5rtrGetDaZip = evt.address.address.Postal;
						}
						document.getElementById('RTRUS').value = 0;
						if (p5rtrGetDaState != "null" && p5rtrGetDaState != null) {
							var p5rtrStateTemp = p5rtrGetDaState.toLowerCase();
							for	(st=0; st<tblStateArray.length; st++) {
								if (tblStateArray[st][1].toLowerCase() == p5rtrStateTemp) {
									p5rtrGetDaState = tblStateArray[st][0];
									document.getElementById('RTRUS').value = tblStateArray[st][2];
									break;
								}
							}
						}
						document.getElementById('RTRCITY').value = p5rtrGetDaCity;
						document.getElementById('RTRSTATE').value = p5rtrGetDaState;
						document.getElementById('RTRZIP').value = p5rtrGetDaZip;
						document.getElementById('RTRCOUNTRY').value = p5rtrGetDaCountry;
						panel5SubmitRTRDetail();
					}
	     		}
	      		else {
					errorText("Geocoder failed",1);
				}
			}
		});
		var thisPoint = new Point(lng,lat);
		if (esriCA == 0) {
			if(gLog==1){console.log("panel1GetLatLngDetail - Midpoint Interval Start");}
			esriCA = 1;
			esriLoadIt = 0;
			esriTimeCurr = 0;
			EIO = 1;
			esriIntTrack = 1;
			esriIntervalOn(5);
		}
		p5rlocator.locationToAddress(thisPoint, 10000);
	});
}
scriptLoad++;
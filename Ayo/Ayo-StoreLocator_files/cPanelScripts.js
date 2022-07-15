var cpMMSuccess = function(location){
	var thebaseLat = location.location.latitude;
	var thebaseLong = location.location.longitude;
	if(gLog==1){console.log("onSuccess " + thebaseLat + " , " + thebaseLong);}
	cpMMDetail(thebaseLat,thebaseLong);
};
var cpMMError = function(error){
	var thebaseLat = "32.6768138";
	var thebaseLong = "-117.0383080";
	if(gLog==1){console.log("onError " + thebaseLat + " , " + thebaseLong);}
	cpMMDetail(thebaseLat,thebaseLong);
};
function cpMMNoReload(panelSet,hasZip) {
	mmnrPanel = panelSet;
	if (hasZip) {
		if(gLog==1){console.log("cpMMNoReload ENGAGE ZIP");}
		var addressCompile = hasZip;
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
		require(["esri/config", "esri/tasks/locator", "esri/SpatialReference", "esri/geometry/Point", "esri/geometry/Extent", "esri/geometry/webMercatorUtils", "dojo/_base/array", "dojo/number", "dojo/parser", "dojo/json", "dijit/registry", "dojo/domReady!"], function(esriConfig, Locator, SpatialReference, Point, Extent, webMercatorUtils, arrayUtils, number, parser, JSON, registry) {
			parser.parse();
			var mmlocator = new Locator("//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer");
			var address = {
				"SingleLine": addressCompile
			};
			var options = {
				address: address,
				outFields: ["*"]
			};
			var mmaddressToLocations = mmlocator.addressToLocations(options);
			mmaddressToLocations.then(function(evt){
				var thebaseLat = "32.6768138";
				var thebaseLong = "-117.0383080";
				if (evt[0]) {
					var result = evt[0];
					thebaseLong = result.location.x.toFixed(5);
					thebaseLat = result.location.y.toFixed(5);
				}
				cpMMDetail(thebaseLat,thebaseLong);
			},
			function(err){
				var thebaseLat = "32.6768138";
				var thebaseLong = "-117.0383080";
				cpMMDetail(thebaseLat,thebaseLong);
			});
		});
	}
	else {
    if(gLog==1){console.log("mmNoReload ENGAGE");}

    require([
        "Destini/Geo/Locators/AutoPositionDetector",
        "dojo/domReady!"
    ], function (AutoPositionDetector) {
        var detector = new AutoPositionDetector();

        detector.detect().then(function (position) {
            cpMMSuccess({
                location: position
            });
        }, function (error) {
            cpMMError(error);
        });
    });
	}
}
function cpMMDetail(lat,lng) {
	document.getElementById('LO').value = lng;
	document.getElementById('LA').value = lat;
	if(gLog==1){console.log("cpMMDetail (Esri) START " + lat + "/" + lng);}
	require(["esri/tasks/locator", "esri/geometry/Point", "esri/geometry/webMercatorUtils", "dojo/number", "dojo/parser", "esri/tasks/AddressCandidate", "dojo/_base/array", "dojo/domReady!"],
	function(Locator, Point, webMercatorUtils, number, parser, AddressCandidate, array) {
		parser.parse();
		mmnrLocator = new Locator("//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer");
		var thisPoint = new Point(parseFloat(lng),parseFloat(lat));
		var mmlocationToAddress = mmnrLocator.locationToAddress(thisPoint, 10000);
		mmlocationToAddress.then(function(evt){
			if (evt.address) {
				if(gLog==1){console.log(evt.address);}
				if(evt.address.Address){document.getElementById('revCodeStreet').value = evt.address.Address;}
				if(evt.address.City){document.getElementById('revCodeCity').value = evt.address.City;}
				if(evt.address.Region){document.getElementById('revCodeState').value = evt.address.Region;}
				if(evt.address.CountryCode){document.getElementById('revCodeCountry').value = evt.address.CountryCode;}
				if (evt.address.CountryCode == "CAN") {
					document.getElementById('revCodeZip').value = evt.address.Postal + " " + evt.address.PostalExt;
					document.getElementById('revCodeCompile').value = evt.address.Postal + " " + evt.address.PostalExt;
				}
				else {
					document.getElementById('revCodeZip').value = evt.address.Postal;
					document.getElementById('revCodeCompile').value = evt.address.Postal;
				}
				cpPFAdd = 1;
				cpsPFAdd = 1;
				if (enableResize == 2) {
					if(gLog==1){console.log("setZip - " + coreZip);}
					if(evt.address.Postal){parent.postMessage("SZIP:"+evt.address.Postal,refurl);}
				}
	      		if (mmnrPanel == "panel1") {
					if(gLog==1){console.log("cpMMDetail mmnrPanel: panel1");}
					p0PreConnect(1);
				}
	      		else if (mmnrPanel == "panel2") {
					if(gLog==1){console.log("cpMMDetail mmnrPanel: panel2");}
					haltTrack = 1;
					p0PreConnect(2);
				}
	      		else {
					if(gLog==1){console.log("cpMMDetail mmnrPanel: ELSE");}
					p0PreConnect(1);
				}
			}
    		else {
				if(gLog==1){console.log("cpMMDetail evt.address FAIL");}
				cpMMFail();
    		}
		},
		function(err){
			if(gLog==1){console.log("cpMMDetail total FAIL");}
			cpMMFail();
		});
	});
}
function cpMMFail() {
	p4Connect();
}
function cpClose(whatPanel,forceIt) {
	var pNum = whatPanel.substring(5,6);
	if(gLog==1){console.log("cpClose - " + whatPanel,pNum);}
	if (window["cpP"+pNum+"Lock"] == 0 || forceIt) {
		document.getElementById('cpDivBack').style.display = "none";
		document.getElementById('cpDivFront').style.display = "none";
		$("#cpDivFront").removeClass("cpanel_"+whatPanelUp);
		if (window["cpsP"+pNum]  != 0) {
			document.getElementById('cpsDiv').style.display = "block";
		}
		if (window["cpPH"+pNum] != 0 && winWidth > globalRespWidth) {
			document.getElementById(whatPanel).style.display = "block";
		}
		if (window["cpPH"+pNum+"m"] != 0 && winWidth <= globalRespWidth) {
			document.getElementById(whatPanel).style.display = "block";
		}
	}
}
function controlPanelOpen(whatPanel,optFilter,optVal) {
	var pNum = whatPanel.substring(5,6);
	if(gLog==1){console.log("controlPanelOpen - " + whatPanel,pNum);}
	if (window["cpP"+pNum] != 0 || atlantis == 1) {
		if (window["cpsP"+pNum] != 0) {
			document.getElementById('cpsDiv').style.display = "none";
		}
		$("#cpDivFront").addClass("cpanel_"+whatPanelUp);
		document.getElementById('cpDivBack').style.display = "block";
		document.getElementById('cpDivFront').style.display = "block";
		if(gLog==1){console.log("controlPanelOpen - cpP"+pNum+"Lock = " + window["cpP"+pNum+"Lock"]);}
		if (window["cpP"+pNum+"Lock"] == 1 && document.getElementById('cpCloseButton')) {
			document.getElementById('cpCloseButton').style.display = "none";
		}
		else if (window["cpP"+pNum+"Lock"] != 1 && document.getElementById('cpCloseButton')) {
			document.getElementById('cpCloseButton').style.display = "block";
		}
		if (window["cpPH"+pNum] != 0 && winWidth > globalRespWidth && atlantis == 0) {
			document.getElementById('panel1').style.display = "none";
			document.getElementById('panel2').style.display = "none";
			document.getElementById('panel3').style.display = "none";
			document.getElementById('panel4').style.display = "none";
			document.getElementById('panel5').style.display = "none";
		}
		if (window["cpPH"+pNum+"m"] != 0 && winWidth <= globalRespWidth && atlantis == 0) {
			document.getElementById('panel1').style.display = "none";
			document.getElementById('panel2').style.display = "none";
			document.getElementById('panel3').style.display = "none";
			document.getElementById('panel4').style.display = "none";
			document.getElementById('panel5').style.display = "none";
		}
	}
	else {
		if(gLog==1){console.log("controlPanelOpen - CONTROLPANEL Tag not found on " + whatPanel);}
	}
	loaderToggle(0);
}
function controlPanelButtonOver(whatPanel) {
	var pNum = whatPanel.substring(5,6);
	$("#controlPanelButtonP"+pNum).removeClass("control_panel_button_P"+pNum+"_off");
	$("#controlPanelButtonP"+pNum).addClass("control_panel_button_P"+pNum+"_hover");
}
function controlPanelButtonOut(whatPanel) {
	var pNum = whatPanel.substring(5,6);
	$("#controlPanelButtonP"+pNum).removeClass("control_panel_button_P"+pNum+"_hover");
	$("#controlPanelButtonP"+pNum).addClass("control_panel_button_P"+pNum+"_off");
}
function controlPanelFieldClear(fieldName) {
	if (document.getElementById(fieldName)) {
		document.getElementById(fieldName).value = "";
	}
}
function controlPanelKeypress(e,fieldName) {
	var key;
	if(window.event) {key = window.event.keyCode;}
	else {key = e.which;}
	if(key == 13){
		controlPanelSubmit(fieldName);
		return false;
	}
}
function controlPanelFilterKeypress(e) {
	var key;
	if(window.event) {key = window.event.keyCode;}
	else {key = e.which;}
	if(key){
		if (document.getElementById('cpProductListShell')) {
			controlPanelFilterIt();
		}
		else if (document.getElementById('cpCategoryListShell')) {
			controlPanelFilterCat();
		}
		else if (document.getElementById('cpGroupListShell')) {
			controlPanelFilterGroup();
		}
		return false;
	}
}
function controlPanelDistanceUpdate(selectVal,setVal) {
	distanceChangedVal = 1;
	if (setVal) {
		document.getElementById(selectVal+'DistanceDivNum').innerHTML = setVal;
		document.getElementById(selectVal+'DistanceField').value = setVal;
		document.getElementById('distance').value = setVal;
		$(".panel_close_me").hide();
	}
	else {
		document.getElementById('distance').value = document.getElementById(selectVal+'DistanceField').value;
	}
}
function controlPanelSubmit(whichField) {
	if(gLog==1){console.log("controlPanelSubmit - whichField = " + whichField);}
	loaderToggle(1);
	whatStoreUp = 0;
	var canSubmit = 1;
	cpCodeTries = 0;
	if (document.getElementById(whichField+"AddressField")) {
		if (document.getElementById(whichField+"AddressField").value == "") {
			$("#"+whichField+"AddressField").removeClass(whichField+"_address_field_base");
			$("#"+whichField+"AddressField").addClass(whichField+"_required_error");
			document.getElementById('street').value = "";
			canSubmit = 0;
		}
		else {
			$("#"+whichField+"AddressField").addClass(whichField+"_address_field_base");
			$("#"+whichField+"AddressField").removeClass(whichField+"_required_error");
			stripField('street',whichField+"AddressField");
		}
	}
	else {
		document.getElementById('street').value = "";
	}
	if (document.getElementById(whichField+'DistanceField')) {
		document.getElementById('distance').value = document.getElementById(whichField+'DistanceField').value;
	}
	if (prodCartArray.length == 0) {
		prodSelectedArray.length = 0;
		for (p=0;p<prodDisplayArray.length;p++) {
			prodSelectedArray.push(prodDisplayArray[p][1]);
			prodCartArray.push(prodDisplayArray[p][0]);
		}
		document.getElementById('PROD').value = prodSelectedArray.toString();
		if(gLog==1){console.log("controlPanelSubmit - prodCartArray.length == 0 " , document.getElementById('PROD').value);}
	}
	else {
		var tempProdArray = [];
		for (c=0;c<prodCartArray.length;c++) {
			for (p=0;p<prodDisplayArray.length;p++) {
				if (prodDisplayArray[p][0] == prodCartArray[c]) {
					tempProdArray.push(prodDisplayArray[p][1]);
				}
			}
		}
		document.getElementById('PROD').value = tempProdArray.toString();
		if(gLog==1){console.log("controlPanelSubmit - prodCartArray.length != 0 " , document.getElementById('PROD').value);}
	}
	groupSelectedArray.length = 0;
	for (g=0;g<catArray.length;g++) {
		if (catArray[g][6] == "1") {
			groupSelectedArray.push(catArray[g][5]);
		}
	}
	document.getElementById('GROUP').value = groupSelectedArray.toString();
	if (document.getElementById('SCFILTER').value=="" && panel1StoreCatOn == 1) {
		storeCatSelectedArray.length = 0;
		for (sc=0;sc<storeCatArray.length;sc++) {
			if (storeCatArray[sc][8] == 1) {
				storeCatSelectedArray.push(storeCatArray[sc][0]);
			}
		}
		document.getElementById('SCFILTER').value = storeCatSelectedArray.toString();
	}
	if(gLog==1){console.log("controlPanelSubmit - canSubmit = " + canSubmit);}
	if (canSubmit == 1) {
		if (enableResize == 2) {
			parent.postMessage("SRCH:"+document.getElementById(whichField+"AddressField").value,refurl);
		}
		controlPanelCodeAddress();
	}
	else {
		errorText("Please Enter a Valid Location",2);
	}
}
function controlPanelLabelMenuSelect(setVal,contentVal,numVal) {
	if (document.getElementById('cpLabelListShell')) {
		if(gLog==1){console.log("controlPanel"+contentVal+"MenuSelect - LABEL setVal,setLabel",setVal,numVal);}
		if (setVal == 0) {
			document.getElementById('cpLabelMenuDisplayText').innerHTML = "All Products";
			document.getElementById('cpLabelMenuDisplayNum').innerHTML = "(" + numVal + ")";
			document.getElementById('cpLabelMenuHolder').value = 0;
		}
		else {
			for (c=0; c<labelArray.length; c++) {
				if (labelArray[c][0] == setVal) {
					document.getElementById('cpLabelMenuDisplayText').innerHTML = labelArray[c][1];
					document.getElementById('cpLabelMenuDisplayNum').innerHTML = "(" + numVal + ")";
					document.getElementById('cpLabelMenuHolder').value = setVal;
					break;
				}
			}
		}
		$(".panel_close_me").hide();
		if(gLog==1){console.log("controlPanel"+contentVal+"MenuSelect - cpLabelMenuHolder = " + document.getElementById('cpLabelMenuHolder').value);}
		if (labelMenuLinkVar == 1) {
			controlPanelWriteLabels();
		}
		else {
			controlPanelFilterLabel();
		}
	}
	else if (document.getElementById('cpGroupListShell')) {
		if(gLog==1){console.log("controlPanel"+contentVal+"MenuSelect - LABEL GROUP setVal,setLabel",setVal,numVal);}
		if (setVal == 0) {
			document.getElementById('cpLabelMenuDisplayText').innerHTML = "All Products";
			document.getElementById('cpLabelMenuDisplayNum').innerHTML = "(" + numVal + ")";
			document.getElementById('cpLabelMenuHolder').value = 0;
		}
		else {
			for (c=0; c<labelArray.length; c++) {
				if (labelArray[c][0] == setVal) {
					document.getElementById('cpLabelMenuDisplayText').innerHTML = labelArray[c][1];
					document.getElementById('cpLabelMenuDisplayNum').innerHTML = "(" + numVal + ")";
					document.getElementById('cpLabelMenuHolder').value = setVal;
					break;
				}
			}
		}
		$(".panel_close_me").hide();
		if(gLog==1){console.log("controlPanel"+contentVal+"MenuSelect - cpLabelMenuHolder = " + document.getElementById('cpLabelMenuHolder').value);}
		controlPanelFilterGroup();
	}
}
function controlPanelFamMenuSelect(setVal,contentVal,setFam) {
	if(gLog==1){console.log("controlPanel"+contentVal+"MenuSelect - setVal,setFam",setVal,setFam);}
	if (setVal == 0) {
		document.getElementById('cpFamMenuDisplayText').innerHTML = "All Products";
		document.getElementById('cpFamMenuDisplayNum').innerHTML = "(" + catArray.length + ")";
		document.getElementById('cpFamMenuHolder').value = 0;
	}
	else {
		for (c=0; c<famArray.length; c++) {
			if (famArray[c][0] == setVal) {
				document.getElementById('cpFamMenuDisplayText').innerHTML = famArray[c][1];
				document.getElementById('cpFamMenuDisplayNum').innerHTML = "(" + famArray[c][6] + ")";
				document.getElementById('cpFamMenuHolder').value = setVal;
				break;
			}
		}
	}
	$(".panel_close_me").hide();
	if(gLog==1){console.log("controlPanel"+contentVal+"MenuSelect - cp"+contentVal+"MenuHolder = " + document.getElementById('cp'+contentVal+'MenuHolder').value);}
	controlPanelFilterCat();
}
function controlPanelCatMenuSelect(setVal,contentVal,setFam) {
	if(gLog==1){console.log("controlPanel"+contentVal+"MenuSelect - setVal,setFam",setVal,setFam);}
	if (contentVal == "Cat") {
		if (setVal == 0) {
			document.getElementById('cpCatMenuDisplayText').innerHTML = "All Products";
			document.getElementById('cpCatMenuDisplayNum').innerHTML = "(" + prodDisplayArray.length + ")";
			document.getElementById('cpCatMenuHolder').value = 0;
		}
		else {
			for (c=0; c<catArray.length; c++) {
				if (catArray[c][0] == setVal) {
					document.getElementById('cpCatMenuDisplayText').innerHTML = catArray[c][1];
					document.getElementById('cpCatMenuDisplayNum').innerHTML = "(" + catArray[c][7] + ")";
					document.getElementById('cpCatMenuHolder').value = setVal;
					break;
				}
			}
		}
	}
	else {
		if (setVal == 0) {
			if (document.getElementById('cpFamCatMenuDisplayText')) {
				document.getElementById('cpFamCatMenuDisplayText').innerHTML = "All Products";
				document.getElementById('cpFamCatMenuDisplayNum').innerHTML = "(" + prodDisplayArray.length + ")";
			}
			if (document.getElementById('cpFamCatMenuDisplayText_two')) {
				document.getElementById('cpFamCatMenuDisplayText_two').innerHTML = "All Products";
				document.getElementById('cpFamCatMenuDisplayNum_two').innerHTML = "(" + prodDisplayArray.length + ")";
			}
			document.getElementById('cpCatMenuHolder').value = 0;
			document.getElementById('cpFamCatMenuHolder').value = 0;
		}
		else {
			if (setFam) {
				var famListCount = 0;
				for (c=0; c<catArray.length; c++) {
					if (catArray[c][2] == setVal) {
						famListCount += catArray[c][7];
					}
				}
				for (q=0; q<famArray.length; q++) {
					if (famArray[q][0] == setVal) {
						if (document.getElementById('cpFamCatMenuDisplayText')) {
							document.getElementById('cpFamCatMenuDisplayText').innerHTML = famArray[q][1];
							document.getElementById('cpFamCatMenuDisplayNum').innerHTML = "(" + famListCount + ")";
						}
						if (document.getElementById('cpFamCatMenuDisplayText_two')) {
							document.getElementById('cpFamCatMenuDisplayText_two').innerHTML = famArray[q][1];
							document.getElementById('cpFamCatMenuDisplayNum_two').innerHTML = "(" + famListCount + ")";
						}
						break;
					}
				}
				document.getElementById('cpCatMenuHolder').value = 0;
				document.getElementById('cpFamCatMenuHolder').value = setVal;
			}
			else {
				for (c=0; c<catArray.length; c++) {
					if (catArray[c][0] == setVal) {
						if (document.getElementById('cpFamCatMenuDisplayText')) {
							document.getElementById('cpFamCatMenuDisplayText').innerHTML = catArray[c][1];
							document.getElementById('cpFamCatMenuDisplayNum').innerHTML = "(" + catArray[c][7] + ")";
						}
						if (document.getElementById('cpFamCatMenuDisplayText_two')) {
							document.getElementById('cpFamCatMenuDisplayText_two').innerHTML = catArray[c][1];
							document.getElementById('cpFamCatMenuDisplayNum_two').innerHTML = "(" + catArray[c][7] + ")";
						}
						document.getElementById('cpCatMenuHolder').value = setVal;
						document.getElementById('cpFamCatMenuHolder').value = 0;
						break;
					}
				}
			}
		}
	}
	$(".panel_close_me").hide();
	if(gLog==1){console.log("controlPanel"+contentVal+"MenuSelect - cp"+contentVal+"MenuHolder = " + document.getElementById('cp'+contentVal+'MenuHolder').value);}
	controlPanelFilterIt();
}
function controlPanelFilterLabel() {
	if(gLog==1){console.log("controlPanelFilterLabel - cpCatDispVal = " + cpCatDispVal);}
	if (document.getElementById('cpContentAreaShell')) {
		document.getElementById('cpContentAreaShell').style.display = "block";
	}
	if (document.getElementById('cpCartAreaShell')) {
		document.getElementById('cpCartAreaShell').style.display = "none";
	}
	if(gLog==1){console.log("controlPanelFilterLabel - Start");}
	$(".cp_category_item_shell").hide();
	if (document.getElementById('cpEmptyShell')) {
		document.getElementById('cpEmptyShell').style.display = "none";
	}
	cpFilterVal = "";
	cpFilterArray.length = 0;
    if (document.getElementById('cpFilterField').value == "") {
    	var rawFilterVal = "";
    }
    else {
   		var rawFilterVal = document.getElementById('cpFilterField').value;
   	}
	cpFilterVal = rawFilterVal.toLowerCase();
	cpFilterArray = cpFilterVal.split(" ");
	if(gLog==1){console.log("controlPanelFilterLabel - cpFilterVal = " + cpFilterVal);}
	var foundAProd = 0;
	for (x=0; x<catArray.length; x++) {
		if (rawFilterVal == "") {
			var includeCat = 1;
		}
		else {
			var includeCat = 0;
		}
		var baseTestVal = catArray[x][1].toLowerCase();
		for (v=0;v<cpFilterArray.length;v++) {
			if (baseTestVal.indexOf(cpFilterArray[v]) != -1) {
				includeCat = 1;
				break;
			}
		}
		if (document.getElementById('cpLabelMenuHolder')) {
			if (document.getElementById('cpLabelMenuHolder').value == 0) {
				var includeLabel = 1;
			}
			else {
				var thisCat = parseInt(document.getElementById('cpLabelMenuHolder').value);
				if ($("#cpCategoryItem"+catArray[x][0]).hasClass("cp_category_label_"+thisCat)) {
					if(gLog==1){console.log("controlPanelFilterLabel - includeLabel = 1 " + catArray[x][0]);}
					var includeLabel = 1;
				}
				else {
					if(gLog==1){console.log("controlPanelFilterLabel - includeLabel = 0 " + catArray[x][0]);}
					var includeLabel = 0;
				}
			}
		}
		else {
			var includeLabel = 1;
		}
		if (includeCat == 1 && includeLabel == 1) {
			document.getElementById("cpCategoryItem"+catArray[x][0]).style.display = cpCatDispVal;
			foundAProd++;
		}
	}
	if (foundAProd == 0 && document.getElementById('cpEmptyShell')) {
		document.getElementById('cpEmptyShell').style.display = "block";
	}
}
function controlPanelFilterCat() {
	if(gLog==1){console.log("controlPanelFilterCat - cpCatDispVal = " + cpCatDispVal);}
	if (document.getElementById('cpContentAreaShell')) {
		document.getElementById('cpContentAreaShell').style.display = "block";
	}
	if (document.getElementById('cpCartAreaShell')) {
		document.getElementById('cpCartAreaShell').style.display = "none";
	}
	if(gLog==1){console.log("controlPanelFilterCat - Start");}
	$(".cp_category_item_shell").hide();
	if (document.getElementById('cpEmptyShell')) {
		document.getElementById('cpEmptyShell').style.display = "none";
	}
	cpFilterVal = "";
	cpFilterArray.length = 0;
    if (document.getElementById('cpFilterField').value == "") {
    	var rawFilterVal = "";
    }
    else {
   		var rawFilterVal = document.getElementById('cpFilterField').value;
   	}
	cpFilterVal = rawFilterVal.toLowerCase();
	cpFilterArray = cpFilterVal.split(" ");
	if(gLog==1){console.log("controlPanelFilterCat - cpFilterVal = " + cpFilterVal);}
	var foundAProd = 0;
	for (x=0; x<catArray.length; x++) {
		if (rawFilterVal == "") {
			var includeCat = 1;
		}
		else {
			var includeCat = 0;
		}
		var baseTestVal = catArray[x][1].toLowerCase();
		for (v=0;v<cpFilterArray.length;v++) {
			if (baseTestVal.indexOf(cpFilterArray[v]) != -1) {
				includeCat = 1;
				break;
			}
		}
		if (document.getElementById('cpFamMenuHolder')) {
			if (document.getElementById('cpFamMenuHolder').value == 0) {
				var includeFamily = 1;
			}
			else {
				var thisCat = parseInt(document.getElementById('cpFamMenuHolder').value);
				if ($("#cpCategoryItem"+catArray[x][0]).hasClass("cp_category_item_"+thisCat)) {
					if(gLog==1){console.log("controlPanelFilterCat - includeFamily = 1 " + catArray[x][0]);}
					var includeFamily = 1;
				}
				else {
					if(gLog==1){console.log("controlPanelFilterCat - includeFamily = 0 " + catArray[x][0]);}
					var includeFamily = 0;
				}
			}
		}
		else {
			var includeFamily = 1;
		}
		if (includeCat == 1  && includeFamily == 1) {
			document.getElementById("cpCategoryItem"+catArray[x][0]).style.display = cpCatDispVal;
			foundAProd++;
		}
	}
	if (foundAProd == 0 && document.getElementById('cpEmptyShell')) {
		document.getElementById('cpEmptyShell').style.display = "block";
	}
}
function controlPanelFilterGroup() {
	if(gLog==1){console.log("controlPanelFilterGroup - cpGroupDispVal = " + cpGroupDispVal);}
	if (document.getElementById('cpContentAreaShell')) {
		document.getElementById('cpContentAreaShell').style.display = "block";
	}
	if (document.getElementById('cpCartAreaShell')) {
		document.getElementById('cpCartAreaShell').style.display = "none";
	}
	if(gLog==1){console.log("controlPanelFilterGroup - Start");}
	$(".cp_group_item_shell").hide();
	if (document.getElementById('cpEmptyShell')) {
		document.getElementById('cpEmptyShell').style.display = "none";
	}
	cpFilterVal = "";
	cpFilterArray.length = 0;
    if (document.getElementById('cpFilterField').value == "") {
    	var rawFilterVal = "";
    }
    else {
   		var rawFilterVal = document.getElementById('cpFilterField').value;
   	}
	cpFilterVal = rawFilterVal.toLowerCase();
	cpFilterArray = cpFilterVal.split(" ");
	if(gLog==1){console.log("controlPanelFilterGroup - cpFilterVal = " + cpFilterVal);}
	var foundAProd = 0;
	for (x=0; x<prodGroupArray.length; x++) {
		if (rawFilterVal == "") {
			var includeGroup = 1;
		}
		else {
			var includeGroup = 0;
		}
		var baseTestVal = prodGroupArray[x][1].toLowerCase();
		for (v=0;v<cpFilterArray.length;v++) {
			if (baseTestVal.indexOf(cpFilterArray[v]) != -1) {
				includeGroup = 1;
				break;
			}
		}
		if (document.getElementById('cpLabelMenuHolder')) {
			if (document.getElementById('cpLabelMenuHolder').value == 0) {
				var includeLabel = 1;
			}
			else {
				var thisGroup = parseInt(document.getElementById('cpLabelMenuHolder').value);
				if ($("#cpGroupItem"+prodGroupArray[x][0]).hasClass("cp_group_label_"+thisGroup)) {
					if(gLog==1){console.log("controlPanelFilterLabel - includeLabel = 1 " + prodGroupArray[x][0]);}
					var includeLabel = 1;
				}
				else {
					if(gLog==1){console.log("controlPanelFilterLabel - includeLabel = 0 " + prodGroupArray[x][0]);}
					var includeLabel = 0;
				}
			}
		}
		else {
			var includeLabel = 1;
		}
		if (includeGroup == 1 && includeLabel == 1) {
			document.getElementById("cpGroupItem"+prodGroupArray[x][0]).style.display = cpGroupDispVal;
			foundAProd++;
		}
	}
	if (foundAProd == 0 && document.getElementById('cpEmptyShell')) {
		document.getElementById('cpEmptyShell').style.display = "block";
	}
}
function controlPanelFilterIt() {
	if(gLog==1){console.log("controlPanelFilterIt - cpProdDispVal = " + cpProdDispVal);}
	if (document.getElementById('cpContentAreaShell')) {
		document.getElementById('cpContentAreaShell').style.display = "block";
	}
	if (document.getElementById('cpCartAreaShell')) {
		document.getElementById('cpCartAreaShell').style.display = "none";
	}
	if(gLog==1){console.log("controlPanelFilterIt - Start");}
	$(".cp_product_item_shell").hide();
	if (document.getElementById('cpEmptyShell')) {
		document.getElementById('cpEmptyShell').style.display = "none";
	}
	cpFilterVal = "";
	cpFilterArray.length = 0;
    if (document.getElementById('cpFilterField').value == "") {
    	var rawFilterVal = "";
    }
    else {
   		var rawFilterVal = document.getElementById('cpFilterField').value;
   	}
	cpFilterVal = rawFilterVal.toLowerCase();
	cpFilterArray = cpFilterVal.split(" ");
	if(gLog==1){console.log("controlPanelFilterIt - cpFilterVal = " + cpFilterVal);}
	var foundAProd = 0;
	for (x=0; x<prodDisplayArray.length; x++) {
		if (rawFilterVal == "") {
			var includeProduct = 1;
		}
		else {
			var includeProduct = 0;
		}
		var baseTestVal = prodDisplayArray[x][2].toLowerCase();
		//var baseTestVal = prodDisplayArray[x][2].toLowerCase() + " " + prodDisplayArray[x][3].toLowerCase() + " " + prodDisplayArray[x][16].toLowerCase();
		for (v=0;v<cpFilterArray.length;v++) {
			if (baseTestVal.indexOf(cpFilterArray[v]) != -1) {
				includeProduct = 1;
				break;
			}
		}
		if (document.getElementById('cpFamCatMenuHolder')) {
			if (document.getElementById('cpFamCatMenuHolder').value == 0) {
				if (document.getElementById('cpCatMenuHolder').value == 0) {
					var includeCategory = 1;
				}
				else {
					var thisCat = parseInt(document.getElementById('cpCatMenuHolder').value);
					if ($("#cpProductItemProd"+prodDisplayArray[x][0]).hasClass("cp_product_item_cat_"+thisCat)) {
						if(gLog==1){console.log("controlPanelFilterIt - includeCategory = 1 " + prodDisplayArray[x][0]);}
						var includeCategory = 1;
					}
					else {
						if(gLog==1){console.log("controlPanelFilterIt - includeCategory = 0 " + prodDisplayArray[x][0]);}
						var includeCategory = 0;
					}
				}
			}
			else {
				var thisFam = parseInt(document.getElementById('cpFamCatMenuHolder').value);
				if ($("#cpProductItemProd"+prodDisplayArray[x][0]).hasClass("cp_product_item_fam_"+thisFam)) {
					if(gLog==1){console.log("controlPanelFilterIt - includeFamily = 1 " + prodDisplayArray[x][0]);}
					var includeCategory = 1;
				}
				else {
					if(gLog==1){console.log("controlPanelFilterIt - includeFamily = 0 " + prodDisplayArray[x][0]);}
					var includeCategory = 0;
				}
			}
		}
		else if (document.getElementById('cpCatMenuHolder')) {
			if (document.getElementById('cpCatMenuHolder').value == 0) {
				var includeCategory = 1;
			}
			else {
				var thisCat = parseInt(document.getElementById('cpCatMenuHolder').value);
				if ($("#cpProductItemProd"+prodDisplayArray[x][0]).hasClass("cp_product_item_cat_"+thisCat)) {
					if(gLog==1){console.log("controlPanelFilterIt - includeCategory = 1 " + prodDisplayArray[x][0]);}
					var includeCategory = 1;
				}
				else {
					if(gLog==1){console.log("controlPanelFilterIt - includeCategory = 0 " + prodDisplayArray[x][0]);}
					var includeCategory = 0;
				}
			}
		}
		else {
			var includeCategory = 1;
		}
		if (includeProduct == 1  && includeCategory == 1) {
			if (document.getElementById("cpProductItemProd"+prodDisplayArray[x][0])) {
				document.getElementById("cpProductItemProd"+prodDisplayArray[x][0]).style.display = cpProdDispVal;
			}
			foundAProd++;
		}
	}
	if (foundAProd == 0 && document.getElementById('cpEmptyShell')) {
		document.getElementById('cpEmptyShell').style.display = "block";
	}
	if (document.getElementById("cssmenu_two") && winWidth <= globalRespWidth) {
		$("#menu-button_mobile").toggleClass('menu-opened');
		var mainmenu = $("#menu-button_mobile").next('ul');
		if (mainmenu.hasClass('open')) {
			mainmenu.hide().removeClass('open');
		}
		else {
			mainmenu.show().addClass('open');
			mainmenu.find('ul').show();
		}
		$("cssmenu_two").find('ul').hide().removeClass('open');
	}
}
function controlPanelToggleProdCart() {
	if (document.getElementById('cpContentAreaShell').style.display == "none") {
		document.getElementById('cpContentAreaShell').style.display = "block";
		document.getElementById('cpCartAreaShell').style.display = "none";
	}
	else {
		document.getElementById('cpContentAreaShell').style.display = "none";
		document.getElementById('cpCartAreaShell').style.display = "block";
	}
}
function controlPanelClearCart() {
	if(gLog==1){console.log("controlPanelClearCart - Start");}
	for (q=0; q<prodDisplayArray.length; q++) {
		$("#cpProductName"+prodDisplayArray[q][0]).removeClass("cp_product_name_hover");
		$("#cpProductName"+prodDisplayArray[q][0]).removeClass("cp_product_name_on");
		$("#cpProductName"+prodDisplayArray[q][0]).addClass("cp_product_name_off");
		if (document.getElementById('cpProductBigImgDivBack'+prodDisplayArray[q][0]) && $('#cpProductBigImgDivBack'+prodDisplayArray[q][0]).hasClass('img_replace_active')) {
			$(".cp_product_big_img_div_over_"+prodDisplayArray[q][0]).fadeOut(50);
			$(".cp_product_big_img_div_back_"+prodDisplayArray[q][0]).addClass('cp_product_big_img_div_back_off');
			$(".cp_product_big_img_div_back_"+prodDisplayArray[q][0]).removeClass('cp_product_big_img_div_back_on');
		}
		if (document.getElementById('cpProductSmImgDivBack'+prodDisplayArray[q][0]) && $('#cpProductSmImgDivBack'+prodDisplayArray[q][0]).hasClass('img_replace_active')) {
			$(".cp_product_sm_img_div_over_"+prodDisplayArray[q][0]).fadeOut(50);
			$(".cp_product_sm_img_div_back_"+prodDisplayArray[q][0]).addClass('cp_product_sm_img_div_back_off');
			$(".cp_product_sm_img_div_back_"+prodDisplayArray[q][0]).removeClass('cp_product_sm_img_div_back_on');
		}
		prodDisplayArray[q][9] = "0";
		 window["panel1ProductNameVar"+prodDisplayArray[q][0]] = 0;
	}
	prodCartArray.length = 0;
	controlPanelWriteCart();
}
function controlPanelAllCart(isSub) {
	if(gLog==1){console.log("controlPanelAllCart - Start");}
	prodCartArray.length = 0;
	for (q=0; q<prodDisplayArray.length; q++) {
		$("#cpProductName"+prodDisplayArray[q][0]).removeClass("cp_product_name_hover");
		$("#cpProductName"+prodDisplayArray[q][0]).removeClass("cp_product_name_off");
		$("#cpProductName"+prodDisplayArray[q][0]).addClass("cp_product_name_on");
		if (document.getElementById('cpProductBigImgDivBack'+prodDisplayArray[q][0]) && $('#cpProductBigImgDivBack'+prodDisplayArray[q][0]).hasClass('img_replace_active')) {
			$(".cp_product_big_img_div_over_"+prodDisplayArray[q][0]).fadeOut(50);
			$(".cp_product_big_img_div_back_"+prodDisplayArray[q][0]).addClass('cp_product_big_img_div_back_on');
			$(".cp_product_big_img_div_back_"+prodDisplayArray[q][0]).removeClass('cp_product_big_img_div_back_off');
		}
		if (document.getElementById('cpProductSmImgDivBack'+prodDisplayArray[q][0]) && $('#cpProductSmImgDivBack'+prodDisplayArray[q][0]).hasClass('img_replace_active')) {
			$(".cp_product_sm_img_div_over_"+prodDisplayArray[q][0]).fadeOut(50);
			$(".cp_product_sm_img_div_back_"+prodDisplayArray[q][0]).addClass('cp_product_sm_img_div_back_on');
			$(".cp_product_sm_img_div_back_"+prodDisplayArray[q][0]).removeClass('cp_product_sm_img_div_back_off');
		}
		prodDisplayArray[q][9] = 1;
		window["panel1ProductNameVar"+prodDisplayArray[q][0]] = 1;
		prodCartArray.push(prodDisplayArray[q][0]);
	}
	controlPanelWriteCart();
	if (isSub) {
		controlPanelSubmit("cp");
	}
}
function controlPanelRemoveItem(theID) {
	for (j=0; j<prodDisplayArray.length; j++) {
		if (prodDisplayArray[j][0] == theID) {
			cpProdSelect(prodDisplayArray[j][0], prodDisplayArray[j][1], "cpProductName"+prodDisplayArray[j][0], "cp_product_name", window["panel1ProductNameVar"+prodDisplayArray[j][0]], "panel1ProductNameVar"+prodDisplayArray[j][0], 1);
			break;
		}
	}
}
function controlPanelGetLatLngDetail(lat,lng,statusVar) {
	require(["esri/config", "esri/tasks/locator", "esri/geometry/Point", "esri/geometry/webMercatorUtils", "dojo/number", "dojo/parser", "esri/tasks/AddressCandidate", "dojo/_base/array", "dojo/domReady!"],
	function(esriConfig, Locator, Point, webMercatorUtils, number, parser, AddressCandidate, array) {
		parser.parse();
		esriConfig.defaults.io.timeout = 6000;
		cprlocator = new Locator("//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer");
		var thisPoint = new Point(parseFloat(lng),parseFloat(lat));
		if(gLog==1){var pointstr = dojo.toJson(thisPoint);console.log("thisPoint: " + lng + "/" + lat + "(" + pointstr + ")");}
		if (esriCA == 0) {
			if(gLog==1){console.log("controlPanelGetLatLngDetail - Midpoint Interval Start");}
			esriCA = 1;
			esriLoadIt = 0;
			esriTimeCurr = 0;
			EIO = 1;
			esriIntTrack = 1;
			esriIntervalOn();
		}
		var cprLocationToAddress = cprlocator.locationToAddress(thisPoint, 10000);
		cprLocationToAddress.then(function(evt){
			if (esriIntTrack == 1) {
				esriIntTrack = 0;
				esriLoadIt = 1;
				if (evt.address) {
					if(gLog==1){console.log(evt.address);}
					cpGetDaStreet = evt.address.Address;
					cpGetDaCity = evt.address.City;
					cpGetDaState = evt.address.Region;
					cpGetDaCountry = evt.address.CountryCode;
					if (evt.address.CountryCode == "CAN") {
						cpGetDaZip = evt.address.Postal + " " + evt.address.PostalExt;
					}
					else {
						cpGetDaZip = evt.address.Postal;
					}
					document.getElementById('revCodeUS').value = 0;
					if (cpGetDaState != "null" && cpGetDaState != null) {
						var cpStateTemp = cpGetDaState.toLowerCase();
						for	(st=0; st<tblStateArray.length; st++) {
							if (tblStateArray[st][1].toLowerCase() == cpStateTemp) {
								cpGetDaState = tblStateArray[st][0];
								document.getElementById('revCodeUS').value = tblStateArray[st][2];
								break;
							}
						}
					}
					document.getElementById('revCodeStreet').value = cpGetDaStreet;
					document.getElementById('revCodeCity').value = cpGetDaCity;
					document.getElementById('revCodeState').value = cpGetDaState;
					document.getElementById('revCodeZip').value = cpGetDaZip;
					document.getElementById('revCodeCountry').value = cpGetDaCountry;
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
					var addressShort = "";
					if (cpGetDaStreet != "null" && cpGetDaStreet != null) {
						addressDisplay += cpGetDaStreet;
					}
					if (cpGetDaCity != "null" && cpGetDaCity != null) {
						if (cpGetDaStreet != "null" && cpGetDaStreet != null) {
							addressDisplay += ",";
						}
						addressDisplay += " " + cpGetDaCity;
						addressShort += cpGetDaCity;
					}
					if (cpGetDaState != "null" && cpGetDaState != null) {
						if (cpGetDaCity != "null" && cpGetDaCity != null) {
							addressDisplay += ",";
							addressShort += ",";
						}
						addressDisplay += " " + cpGetDaState;
						addressShort += " " + cpGetDaState;
					}
					if (cpGetDaZip != "null" && cpGetDaZip != null) {
						addressDisplay += " " + cpGetDaZip;
						addressShort += " " + cpGetDaZip;
					}
					document.getElementById('addressCompile').value = addressDisplay;
					if (document.getElementById("cpAddressField")) {
						document.getElementById('cpAddressField').value = addressShort;
					}
					if (document.getElementById("cpsAddressField")) {
						document.getElementById('cpsAddressField').value = addressShort;
					}
					document.getElementById('GRAW').value = addressDisplay;
					if(gLog==1){console.log("controlPanelGetLatLngDetail.php - Reverse Geocoded Compilation: " + addressDisplay);}
					if (statusVar) {
						cpClose(whatPanelUp,1);
	    				p2Connect();
	    			}
	    		}
	      		else {
					if(gLog==1){console.log("controlPanelGetLatLngDetail - evt.address FAIL");}
					cpClose(whatPanelUp,1);
					p4Connect();
				}
			}
		},
		function(err){
			if(gLog==1){console.log("controlPanelGetLatLngDetail revgeocode FAIL");}
			cpClose(whatPanelUp,1);
			p4Connect();
		});
	});
}
function controlPanelCodeAddress() {
	rteStoreObj.val.length = 0;
	if(gLog==1){console.log("controlPanelCodeAddress() Start");}
	cpCodeTries++;
	var addressCompile = "";
	if (document.getElementById('street').value != "") {
		addressCompile += document.getElementById('street').value;
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
	if(gLog==1){console.log("panel1LocServe.php - Initial Address Compilation: " + addressCompile);}
	require(["esri/config", "esri/tasks/locator", "esri/SpatialReference", "esri/geometry/Point", "esri/geometry/Extent", "esri/geometry/webMercatorUtils", "dojo/_base/array", "dojo/number", "dojo/parser", "dojo/json", "dijit/registry", "dojo/domReady!"], function(esriConfig, Locator, SpatialReference, Point, Extent, webMercatorUtils, arrayUtils, number, parser, JSON, registry) {
		parser.parse();
		esriConfig.defaults.io.timeout = 6000;
		cpLocator = new Locator("//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer");
		var address = {
			"SingleLine": addressCompile
		};
		var options = {
			address: address,
			outFields: ["*"]
		};
		cpAddressToLocations = cpLocator.addressToLocations(options);
		cpAddressToLocations.then(function(evt){
			if(gLog==1){console.log(evt);}
			cpLLPairArray.length = 0;
			if (evt[0]) {
				var result = evt[0];
				var x = result.location.x.toFixed(5); //lng
				var y = result.location.y.toFixed(5); //lat
				cpGetDaStreet = result.attributes.StAddr;
				cpGetDaCity = result.attributes.City;
				cpGetDaState = result.attributes.Region;
				cpGetDaCountry = result.attributes.Country;
				if (result.attributes.Country == "CAN") {
					cpGetDaZip = result.attributes.Postal + " " + result.attributes.PostalExt;
				}
				else {
					cpGetDaZip = result.attributes.Postal;
				}
				cpLLPairArray[0] = [y,x];
			}
			if (cpLLPairArray.length) {
				document.getElementById("LA").value = cpLLPairArray[0][0];
				document.getElementById("LO").value = cpLLPairArray[0][1];
				if (cpGetDaCountry == "USA" && cpGetDaZip == "") {
					controlPanelGetLatLngDetail(cpLLPairArray[0][0],cpLLPairArray[0][1],1);
				}
				else {
					document.getElementById('revCodeUS').value = 0;
					if (cpGetDaState != "null" && cpGetDaState != null) {
						var cpStateTemp = cpGetDaState.toLowerCase();
						for	(st=0; st<tblStateArray.length; st++) {
							if (tblStateArray[st][1].toLowerCase() == cpStateTemp) {
								cpGetDaState = tblStateArray[st][0];
								document.getElementById('revCodeUS').value = tblStateArray[st][2];
								break;
							}
						}
					}
					document.getElementById('revCodeStreet').value = cpGetDaStreet;
					document.getElementById('revCodeCity').value = cpGetDaCity;
					document.getElementById('revCodeState').value = cpGetDaState;
					document.getElementById('revCodeZip').value = cpGetDaZip;
					document.getElementById('revCodeCountry').value = cpGetDaCountry;
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
					addressShort = "";
					if (cpGetDaStreet != "null" && cpGetDaStreet != null) {
						addressDisplay += cpGetDaStreet;
					}
					if (cpGetDaCity != "null" && cpGetDaCity != null) {
						if (cpGetDaStreet != "null" && cpGetDaStreet != null) {
							addressDisplay += ",";
						}
						addressDisplay += " " + cpGetDaCity;
						addressShort += cpGetDaCity;
					}
					if (cpGetDaState != "null" && cpGetDaState != null) {
						if (cpGetDaCity != "null" && cpGetDaCity != null) {
							addressDisplay += ",";
							addressShort += ",";
						}
						addressDisplay += " " + cpGetDaState;
						addressShort += " " + cpGetDaState;
					}
					if (cpGetDaZip != "null" && cpGetDaZip != null) {
						addressDisplay += " " + cpGetDaZip;
						addressShort += " " + cpGetDaZip;
					}
					document.getElementById('addressCompile').value = addressDisplay;
					if (document.getElementById("cpAddressField")) {
						document.getElementById('cpAddressField').value = addressShort;
					}
					if (document.getElementById("cpsAddressField")) {
						document.getElementById('cpsAddressField').value = addressShort;
					}
					document.getElementById('GRAW').value = addressDisplay;
					if(gLog==1){console.log("controlPanelCodeAddress - Reverse Geocoded Compilation: " + addressDisplay);}
					cpClose(whatPanelUp,1);
	    			p2Connect();
	    		}
			}
			else {
				errorText("Please enter a valid address",2);
			}
		},
		function(err){
			if(gLog==1){console.log(err.message);}
			if (cpCodeTries < geoTries) {
				controlPanelCodeAddress();
			}
			else {
				errorText("We could not find that location. Please try again.",3);
			}
		});
	});
}
function cpProdMouseOver (prodID, prodString, prodVar, indVal) {
	prodDisplayArray[indVal][20] = 1;
	if (document.getElementById(prodID)) {
		if (prodVar == 0) {
			$('#'+prodID).removeClass(prodString+'_on');
			$('#'+prodID).removeClass(prodString+'_off');
			$('#'+prodID).addClass(prodString+'_hover');
		}
		else {
			$('#'+prodID).removeClass(prodString+'_off');
			$('#'+prodID).removeClass(prodString+'_on');
			$('#'+prodID).addClass(prodString+'_hover');
		}
	}
}
function cpProdMouseOut (prodID, prodString, prodVar, indVal) {
	prodDisplayArray[indVal][20] = 0;
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
function cpCatMouseOver (catID, catString, catVar) {
	if (document.getElementById(catID)) {
		if ($('#'+catID).hasClass(catString+'_off')) {
			$('#'+catID).removeClass(catString+'_off');
			$('#'+catID).removeClass(catString+'_on');
			$('#'+catID).removeClass(catString+'_hover_on');
			$('#'+catID).addClass(catString+'_hover');
			$('#'+catID).addClass(catString+'_hover_off');
		}
		else if ($('#'+catID).hasClass(catString+'_on')) {
			$('#'+catID).removeClass(catString+'_off');
			$('#'+catID).removeClass(catString+'_on');
			$('#'+catID).removeClass(catString+'_hover_off');
			$('#'+catID).addClass(catString+'_hover');
			$('#'+catID).addClass(catString+'_hover_on');
		}
	}
}
function cpCatMouseOut (catID, catString, catVar) {
	if (document.getElementById(catID)) {
		if ($('#'+catID).hasClass(catString+'_hover_off')) {
			$('#'+catID).removeClass(catString+'_hover');
			$('#'+catID).removeClass(catString+'_on');
			$('#'+catID).removeClass(catString+'_hover_on');
			$('#'+catID).removeClass(catString+'_hover_off');
			$('#'+catID).addClass(catString+'_off');
		}
		else if ($('#'+catID).hasClass(catString+'_hover_on')) {
			$('#'+catID).removeClass(catString+'_hover');
			$('#'+catID).removeClass(catString+'_off');
			$('#'+catID).removeClass(catString+'_hover_on');
			$('#'+catID).removeClass(catString+'_hover_off');
			$('#'+catID).addClass(catString+'_on');
		}
	}
}
function cpGroupMouseOver (groupID, groupString, groupVar) {
	if (document.getElementById(groupID)) {
		if ($('#'+groupID).hasClass(groupString+'_off')) {
			$('#'+groupID).removeClass(groupString+'_off');
			$('#'+groupID).removeClass(groupString+'_on');
			$('#'+groupID).removeClass(groupString+'_hover_on');
			$('#'+groupID).addClass(groupString+'_hover');
			$('#'+groupID).addClass(groupString+'_hover_off');
		}
		else if ($('#'+groupID).hasClass(groupString+'_on')) {
			$('#'+groupID).removeClass(groupString+'_off');
			$('#'+groupID).removeClass(groupString+'_on');
			$('#'+groupID).removeClass(groupString+'_hover_off');
			$('#'+groupID).addClass(groupString+'_hover');
			$('#'+groupID).addClass(groupString+'_hover_on');
		}
	}
}
function cpGroupMouseOut (groupID, groupString, groupVar) {
	if (document.getElementById(groupID)) {
		if ($('#'+groupID).hasClass(groupString+'_hover_off')) {
			$('#'+groupID).removeClass(groupString+'_hover');
			$('#'+groupID).removeClass(groupString+'_on');
			$('#'+groupID).removeClass(groupString+'_hover_on');
			$('#'+groupID).removeClass(groupString+'_hover_off');
			$('#'+groupID).addClass(groupString+'_off');
		}
		else if ($('#'+groupID).hasClass(groupString+'_hover_on')) {
			$('#'+groupID).removeClass(groupString+'_hover');
			$('#'+groupID).removeClass(groupString+'_off');
			$('#'+groupID).removeClass(groupString+'_hover_on');
			$('#'+groupID).removeClass(groupString+'_hover_off');
			$('#'+groupID).addClass(groupString+'_on');
		}
	}
}
function cpLabelMouseOver (labelID, labelString, labelVar) {
	if (document.getElementById(labelID)) {
		if ($('#'+labelID).hasClass(labelString+'_off')) {
			$('#'+labelID).removeClass(labelString+'_off');
			$('#'+labelID).removeClass(labelString+'_on');
			$('#'+labelID).removeClass(labelString+'_hover_on');
			$('#'+labelID).addClass(labelString+'_hover');
			$('#'+labelID).addClass(labelString+'_hover_off');
		}
		else if ($('#'+labelID).hasClass(labelString+'_on')) {
			$('#'+labelID).removeClass(labelString+'_off');
			$('#'+labelID).removeClass(labelString+'_on');
			$('#'+labelID).removeClass(labelString+'_hover_off');
			$('#'+labelID).addClass(labelString+'_hover');
			$('#'+labelID).addClass(labelString+'_hover_on');
		}
	}
}
function cpLabelMouseOut (labelID, labelString, labelVar) {
	if (document.getElementById(labelID)) {
		if ($('#'+labelID).hasClass(labelString+'_hover_off')) {
			$('#'+labelID).removeClass(labelString+'_hover');
			$('#'+labelID).removeClass(labelString+'_on');
			$('#'+labelID).removeClass(labelString+'_hover_on');
			$('#'+labelID).removeClass(labelString+'_hover_off');
			$('#'+labelID).addClass(labelString+'_off');
		}
		else if ($('#'+labelID).hasClass(labelString+'_hover_on')) {
			$('#'+labelID).removeClass(labelString+'_hover');
			$('#'+labelID).removeClass(labelString+'_off');
			$('#'+labelID).removeClass(labelString+'_hover_on');
			$('#'+labelID).removeClass(labelString+'_hover_off');
			$('#'+labelID).addClass(labelString+'_on');
		}
	}
}
function cpProdImgReplace(whatState,whatID) {
	if (whatState == 1) {
		if (document.getElementById('cpProductBigImgDivBack'+whatID) && window['panel1ProductNameVar'+whatID] == 0) {
			$(".cp_product_big_img_div_over_"+whatID).fadeIn(150);
			$(".cp_product_big_img_div_back_"+whatID).removeClass('cp_product_big_img_div_back_off');
			$(".cp_product_big_img_div_back_"+whatID).addClass('cp_product_big_img_div_back_on');
		}
		if (document.getElementById('cpProductSmImgDivBack'+whatID) && window['panel1ProductNameVar'+whatID] == 0) {
			$(".cp_product_sm_img_div_over_"+whatID).fadeIn(150);
			$(".cp_product_sm_img_div_back_"+whatID).removeClass('cp_product_sm_img_div_back_off');
			$(".cp_product_sm_img_div_back_"+whatID).addClass('cp_product_sm_img_div_back_on');
		}
	}
	else {
		if (document.getElementById('cpProductBigImgDivBack'+whatID) && window['panel1ProductNameVar'+whatID] == 0) {
			$(".cp_product_big_img_div_over_"+whatID).fadeOut(150);
			$(".cp_product_big_img_div_back_"+whatID).addClass('cp_product_big_img_div_back_off');
			$(".cp_product_big_img_div_back_"+whatID).removeClass('cp_product_big_img_div_back_on');
		}
		if (document.getElementById('cpProductSmImgDivBack'+whatID) && window['panel1ProductNameVar'+whatID] == 0) {
			$(".cp_product_sm_img_div_over_"+whatID).fadeOut(150);
			$(".cp_product_sm_img_div_back_"+whatID).addClass('cp_product_sm_img_div_back_off');
			$(".cp_product_sm_img_div_back_"+whatID).removeClass('cp_product_sm_img_div_back_on');
		}
	}
}
function cpCatImgReplace(whatState,whatID) {
	if (whatState == 1) {
		if (document.getElementById('cpCategoryBigImgDivBack'+whatID) && window['panel1CategoryNameVar'+whatID] == 0) {
			$(".cp_category_big_img_div_over_"+whatID).fadeIn(150);
			$(".cp_category_big_img_div_back_"+whatID).removeClass('cp_category_big_img_div_back_off');
			$(".cp_category_big_img_div_back_"+whatID).addClass('cp_category_big_img_div_back_on');
		}
		if (document.getElementById('cpCategorySmImgDivBack'+whatID) && window['panel1CategoryNameVar'+whatID] == 0) {
			$(".cp_category_sm_img_div_over_"+whatID).fadeIn(150);
			$(".cp_category_sm_img_div_back_"+whatID).removeClass('cp_category_sm_img_div_back_off');
			$(".cp_category_sm_img_div_back_"+whatID).addClass('cp_category_sm_img_div_back_on');
		}
	}
	else {
		if (document.getElementById('cpCategoryBigImgDivBack'+whatID) && window['panel1CategoryNameVar'+whatID] == 0) {
			$(".cp_category_big_img_div_over_"+whatID).fadeOut(150);
			$(".cp_category_big_img_div_back_"+whatID).addClass('cp_category_big_img_div_back_off');
			$(".cp_category_big_img_div_back_"+whatID).removeClass('cp_category_big_img_div_back_on');
		}
		if (document.getElementById('cpCategorySmImgDivBack'+whatID) && window['panel1CategoryNameVar'+whatID] == 0) {
			$(".cp_category_sm_img_div_over_"+whatID).fadeOut(150);
			$(".cp_category_sm_img_div_back_"+whatID).addClass('cp_category_sm_img_div_back_off');
			$(".cp_category_sm_img_div_back_"+whatID).removeClass('cp_category_sm_img_div_back_on');
		}
	}
}
function cpGroupImgReplace(whatState,whatID) {
	if (whatState == 1) {
		if (document.getElementById('cpGroupBigImgDivBack'+whatID) && window['panel1GroupNameVar'+whatID] == 0) {
			$(".cp_group_big_img_div_over_"+whatID).fadeIn(150);
			$(".cp_group_big_img_div_back_"+whatID).removeClass('cp_group_big_img_div_back_off');
			$(".cp_group_big_img_div_back_"+whatID).addClass('cp_group_big_img_div_back_on');
		}
		if (document.getElementById('cpGroupSmImgDivBack'+whatID) && window['panel1GroupNameVar'+whatID] == 0) {
			$(".cp_group_sm_img_div_over_"+whatID).fadeIn(150);
			$(".cp_group_sm_img_div_back_"+whatID).removeClass('cp_group_sm_img_div_back_off');
			$(".cp_group_sm_img_div_back_"+whatID).addClass('cp_group_sm_img_div_back_on');
		}
	}
	else {
		if (document.getElementById('cpGroupBigImgDivBack'+whatID) && window['panel1GroupNameVar'+whatID] == 0) {
			$(".cp_group_big_img_div_over_"+whatID).fadeOut(150);
			$(".cp_group_big_img_div_back_"+whatID).addClass('cp_group_big_img_div_back_off');
			$(".cp_group_big_img_div_back_"+whatID).removeClass('cp_group_big_img_div_back_on');
		}
		if (document.getElementById('cpGroupSmImgDivBack'+whatID) && window['panel1GroupNameVar'+whatID] == 0) {
			$(".cp_group_sm_img_div_over_"+whatID).fadeOut(150);
			$(".cp_group_sm_img_div_back_"+whatID).addClass('cp_group_sm_img_div_back_off');
			$(".cp_group_sm_img_div_back_"+whatID).removeClass('cp_group_sm_img_div_back_on');
		}
	}
}
function cpLabelImgReplace(whatState,whatID) {
	var isSel = 0;
	for (q=0; q<labelArray.length; q++) {
		if (labelArray[q][0] == whatID && labelArray[q][3] == 1) {
			isSel = 1;
		}
	}
	if (whatState == 1) {
		if (document.getElementById('cpLabelBigImgDivBack'+whatID) && isSel == 0) {
			$(".cp_label_big_img_div_over_"+whatID).fadeIn(150);
			$(".cp_label_big_img_div_back_"+whatID).removeClass('cp_label_big_img_div_back_off');
			$(".cp_label_big_img_div_back_"+whatID).addClass('cp_label_big_img_div_back_on');
		}
		if (document.getElementById('cpLabelSmImgDivBack'+whatID) && isSel == 0) {
			$(".cp_label_sm_img_div_over_"+whatID).fadeIn(150);
			$(".cp_label_sm_img_div_back_"+whatID).removeClass('cp_label_sm_img_div_back_off');
			$(".cp_label_sm_img_div_back_"+whatID).addClass('cp_label_sm_img_div_back_on');
		}
	}
	else {
		if (document.getElementById('cpLabelBigImgDivBack'+whatID) && isSel == 0) {
			$(".cp_label_big_img_div_over_"+whatID).fadeOut(150);
			$(".cp_label_big_img_div_back_"+whatID).addClass('cp_label_big_img_div_back_off');
			$(".cp_label_big_img_div_back_"+whatID).removeClass('cp_label_big_img_div_back_on');
		}
		if (document.getElementById('cpLabelSmImgDivBack'+whatID) && isSel == 0) {
			$(".cp_label_sm_img_div_over_"+whatID).fadeOut(150);
			$(".cp_label_sm_img_div_back_"+whatID).addClass('cp_label_sm_img_div_back_off');
			$(".cp_label_sm_img_div_back_"+whatID).removeClass('cp_label_sm_img_div_back_on');
		}
	}
}
function cpProdHoverWait() {
	for (x=0; x<prodDisplayArray.length; x++) {
		if (document.getElementById('cpProductBigImgDivBack'+prodDisplayArray[x][0])) {
			if ($('#cpProductBigImgDivBack'+prodDisplayArray[x][0]).is(":hover") || $('#cpProductBigImgDivOver'+prodDisplayArray[x][0]).is(":hover") || $('#cpProductName'+prodDisplayArray[x][0]).is(":hover") || $('#cpProductBigImgDivBack'+prodDisplayArray[x][0]).is(":focus") || $('#cpProductBigImgDivOver'+prodDisplayArray[x][0]).is(":focus") || $('#cpProductName'+prodDisplayArray[x][0]).is(":focus")) {}
			else{
    			if ($('#cpProductBigImgDivBack'+prodDisplayArray[x][0]).hasClass('cp_product_big_img_div_back_on') && window['panel1ProductNameVar'+prodDisplayArray[x][0]] == 0) {
					if(gLog==1){console.log("cpProdHoverWait - Removed Hover: " + prodDisplayArray[x][0]);}
					$(".cp_product_big_img_div_over_"+prodDisplayArray[x][0]).fadeOut(150);
					$(".cp_product_big_img_div_back_"+prodDisplayArray[x][0]).addClass('cp_product_big_img_div_back_off');
					$(".cp_product_big_img_div_back_"+prodDisplayArray[x][0]).removeClass('cp_product_big_img_div_back_on');
    			}
    		}
 		}
		if (document.getElementById('cpProductSmImgDivBack'+prodDisplayArray[x][0])) {
 			if ($('#cpProductSmImgDivBack'+prodDisplayArray[x][0]).is(":hover") || $('#cpProductSmImgDivOver'+prodDisplayArray[x][0]).is(":hover") || $('#cpProductName'+prodDisplayArray[x][0]).is(":hover") || $('#cpProductSmImgDivBack'+prodDisplayArray[x][0]).is(":focus") || $('#cpProductSmImgDivOver'+prodDisplayArray[x][0]).is(":focus") || $('#cpProductName'+prodDisplayArray[x][0]).is(":focus")) {}
			else{
   				if ($('#cpProductSmImgDivBack'+prodDisplayArray[x][0]).hasClass('cp_product_sm_img_div_back_on') && window['panel1ProductNameVar'+prodDisplayArray[x][0]] == 0) {
					if(gLog==1){console.log("cpProdHoverWait - Removed Hover: " + prodDisplayArray[x][0]);}
					$(".cp_product_sm_img_div_over_"+prodDisplayArray[x][0]).fadeOut(150);
					$(".cp_product_sm_img_div_back_"+prodDisplayArray[x][0]).addClass('cp_product_sm_img_div_back_off');
					$(".cp_product_sm_img_div_back_"+prodDisplayArray[x][0]).removeClass('cp_product_sm_img_div_back_on');
    			}
    		}
		}
	}
}
function cpCatHoverWait() {
	for (x=0; x<catArray.length; x++) {
		var hoverIt = 1;
		if (window['catActiveTrack'+catArray[x][0]] == 1) {
			for (g=0; g<prodDisplayArray.length; g++) {
				if (prodDisplayArray[g][8] == catArray[x][0] && prodDisplayArray[g][9] == 1) {
					hoverIt = 0;
					break;
				}
			}
		}
		else if (catArray[x][6] == 1) {
			hoverIt = 0;
		}
		if (hoverIt == 1) {
			if (document.getElementById('cpCategoryBigImgDivBack'+catArray[x][0])) {
				if ($('#cpCategoryBigImgDivBack'+catArray[x][0]).is(":hover") || $('#cpCategoryBigImgDivOver'+catArray[x][0]).is(":hover") || $('#cpCategoryName'+catArray[x][0]).is(":hover") || $('#cpCategoryBigImgDivBack'+catArray[x][0]).is(":focus") || $('#cpCategoryBigImgDivOver'+catArray[x][0]).is(":focus") || $('#cpCategoryName'+catArray[x][0]).is(":focus")) {}
				else{
	    			if ($('#cpCategoryBigImgDivBack'+catArray[x][0]).hasClass('cp_category_big_img_div_back_on') && catArray[x][9] == 0) {
						if(gLog==1){console.log("cpCatHoverWait - Removed Hover: " + catArray[x][0]);}
						$(".cp_category_big_img_div_over_"+catArray[x][0]).fadeOut(150);
						$(".cp_category_big_img_div_back_"+catArray[x][0]).addClass('cp_category_big_img_div_back_off');
						$(".cp_category_big_img_div_back_"+catArray[x][0]).removeClass('cp_category_big_img_div_back_on');
	    			}
	    		}
	 		}
			if (document.getElementById('cpCategorySmImgDivBack'+catArray[x][0])) {
	 			if ($('#cpCategorySmImgDivBack'+catArray[x][0]).is(":hover") || $('#cpCategorySmImgDivOver'+catArray[x][0]).is(":hover") || $('#cpCategoryName'+catArray[x][0]).is(":hover") || $('#cpCategorySmImgDivBack'+catArray[x][0]).is(":focus") || $('#cpCategorySmImgDivOver'+catArray[x][0]).is(":focus") || $('#cpCategoryName'+catArray[x][0]).is(":focus")) {}
				else{
	   				if ($('#cpCategorySmImgDivBack'+catArray[x][0]).hasClass('cp_category_sm_img_div_back_on') && catArray[x][9] == 0) {
						if(gLog==1){console.log("cpCatHoverWait - Removed Hover: " + catArray[x][0]);}
						$(".cp_category_sm_img_div_over_"+catArray[x][0]).fadeOut(150);
						$(".cp_category_sm_img_div_back_"+catArray[x][0]).addClass('cp_category_sm_img_div_back_off');
						$(".cp_category_sm_img_div_back_"+catArray[x][0]).removeClass('cp_category_sm_img_div_back_on');
	    			}
	    		}
			}
		}
	}
}
function cpGroupHoverWait() {
	for (x=0; x<prodGroupArray.length; x++) {
		var hoverIt = 1;
		if (prodGroupArray[x][6] == 1) {
			hoverIt = 0;
		}
		if (hoverIt == 1) {
			if (document.getElementById('cpGroupBigImgDivBack'+prodGroupArray[x][0])) {
				if ($('#cpGroupBigImgDivBack'+prodGroupArray[x][0]).is(":hover") || $('#cpGroupBigImgDivOver'+prodGroupArray[x][0]).is(":hover") || $('#cpGroupName'+prodGroupArray[x][0]).is(":hover") || $('#cpGroupBigImgDivBack'+prodGroupArray[x][0]).is(":focus") || $('#cpGroupBigImgDivOver'+prodGroupArray[x][0]).is(":focus") || $('#cpGroupName'+prodGroupArray[x][0]).is(":focus")) {}
				else{
	    			if ($('#cpGroupBigImgDivBack'+prodGroupArray[x][0]).hasClass('cp_group_big_img_div_back_on') && prodGroupArray[x][9] == 0) {
						if(gLog==1){console.log("cpGroupHoverWait - Removed Hover: " + prodGroupArray[x][0]);}
						$(".cp_group_big_img_div_over_"+prodGroupArray[x][0]).fadeOut(150);
						$(".cp_group_big_img_div_back_"+prodGroupArray[x][0]).addClass('cp_group_big_img_div_back_off');
						$(".cp_group_big_img_div_back_"+prodGroupArray[x][0]).removeClass('cp_group_big_img_div_back_on');
						$(".cp_group_big_img_div_back_"+prodGroupArray[x][0]).removeClass('cp_group_big_img_div_back_hover_on');
						$(".cp_group_big_img_div_back_"+prodGroupArray[x][0]).removeClass('cp_group_big_img_div_back_hover_off');
	    			}
	    		}
	 		}
			if (document.getElementById('cpGroupSmImgDivBack'+prodGroupArray[x][0])) {
	 			if ($('#cpGroupSmImgDivBack'+prodGroupArray[x][0]).is(":hover") || $('#cpGroupSmImgDivOver'+prodGroupArray[x][0]).is(":hover") || $('#cpGroupName'+prodGroupArray[x][0]).is(":hover") || $('#cpGroupSmImgDivBack'+prodGroupArray[x][0]).is(":focus") || $('#cpGroupSmImgDivOver'+prodGroupArray[x][0]).is(":focus") || $('#cpGroupName'+prodGroupArray[x][0]).is(":focus")) {}
				else{
	   				if ($('#cpGroupSmImgDivBack'+prodGroupArray[x][0]).hasClass('cp_group_sm_img_div_back_on') && prodGroupArray[x][9] == 0) {
						if(gLog==1){console.log("cpGroupHoverWait - Removed Hover: " + prodGroupArray[x][0]);}
						$(".cp_group_sm_img_div_over_"+prodGroupArray[x][0]).fadeOut(150);
						$(".cp_group_sm_img_div_back_"+prodGroupArray[x][0]).addClass('cp_group_sm_img_div_back_off');
						$(".cp_group_sm_img_div_back_"+prodGroupArray[x][0]).removeClass('cp_group_sm_img_div_back_on');
						$(".cp_group_sm_img_div_back_"+prodGroupArray[x][0]).removeClass('cp_group_sm_img_div_back_hover_on');
						$(".cp_group_sm_img_div_back_"+prodGroupArray[x][0]).removeClass('cp_group_sm_img_div_back_hover_off');
	    			}
	    		}
			}
		}
	}
}
function cpLabelHoverWait() {
	for (x=0; x<labelArray.length; x++) {
		var hoverIt = 1;
		if (labelArray[x][3] == 1) {
			hoverIt = 0;
		}
		if (hoverIt == 1) {
			if (document.getElementById('cpLabelBigImgDivBack'+labelArray[x][0])) {
				if ($('#cpLabelBigImgDivBack'+labelArray[x][0]).is(":hover") || $('#cpLabelBigImgDivOver'+labelArray[x][0]).is(":hover") || $('#cpLabelName'+labelArray[x][0]).is(":hover") || $('#cpLabelBigImgDivBack'+labelArray[x][0]).is(":focus") || $('#cpLabelBigImgDivOver'+labelArray[x][0]).is(":focus") || $('#cpLabelName'+labelArray[x][0]).is(":focus")) {}
				else{
	    			if ($('#cpLabelBigImgDivBack'+labelArray[x][0]).hasClass('cp_label_big_img_div_back_on')) {
						if(gLog==1){console.log("cpLabelHoverWait - Removed Hover: " + labelArray[x][0]);}
						$(".cp_label_big_img_div_over_"+labelArray[x][0]).fadeOut(150);
						$(".cp_label_big_img_div_back_"+labelArray[x][0]).addClass('cp_label_big_img_div_back_off');
						$(".cp_label_big_img_div_back_"+labelArray[x][0]).removeClass('cp_label_big_img_div_back_on');
	    			}
	    		}
	 		}
			if (document.getElementById('cpLabelSmImgDivBack'+labelArray[x][0])) {
	 			if ($('#cpLabelSmImgDivBack'+labelArray[x][0]).is(":hover") || $('#cpLabelSmImgDivOver'+labelArray[x][0]).is(":hover") || $('#cpLabelName'+labelArray[x][0]).is(":hover") || $('#cpLabelSmImgDivBack'+labelArray[x][0]).is(":focus") || $('#cpLabelSmImgDivOver'+labelArray[x][0]).is(":focus") || $('#cpLabelName'+labelArray[x][0]).is(":focus")) {}
				else{
	   				if ($('#cpLabelSmImgDivBack'+labelArray[x][0]).hasClass('cp_label_sm_img_div_back_on')) {
						if(gLog==1){console.log("cpLabelHoverWait - Removed Hover: " + labelArray[x][0]);}
						$(".cp_label_sm_img_div_over_"+labelArray[x][0]).fadeOut(150);
						$(".cp_label_sm_img_div_back_"+labelArray[x][0]).addClass('cp_label_sm_img_div_back_off');
						$(".cp_label_sm_img_div_back_"+labelArray[x][0]).removeClass('cp_label_sm_img_div_back_on');
	    			}
	    		}
			}
		}
	}
}
function cpProdSelect(prodSQLID, prodSKU, prodID, prodString, prodVar, prodVarSet) {
	if(gLog==1){console.log("cpProdSelect - Start");}
	if (document.getElementById(prodID)) {
		if (prodVar == 0) {
			if(gLog==1){console.log("cpProdSelect - prodVar == 0");}
			$('#'+prodID).removeClass(prodString+'_hover');
			$('#'+prodID).removeClass(prodString+'_off');
			$('#'+prodID).addClass(prodString+'_on');
			if (document.getElementById('cpProductBigImgDivBack'+prodSQLID) && $('#cpProductBigImgDivBack'+prodSQLID).hasClass('img_replace_active')) {
				$(".cp_product_big_img_div_over_"+prodSQLID).fadeIn(50);
				$(".cp_product_big_img_div_back_"+prodSQLID).removeClass('cp_product_big_img_div_back_off');
				$(".cp_product_big_img_div_back_"+prodSQLID).addClass('cp_product_big_img_div_back_on');
			}
			if (document.getElementById('cpProductSmImgDivBack'+prodSQLID) && $('#cpProductSmImgDivBack'+prodSQLID).hasClass('img_replace_active')) {
				$(".cp_product_sm_img_div_over_"+prodSQLID).fadeIn(50);
				$(".cp_product_sm_img_div_back_"+prodSQLID).removeClass('cp_product_sm_img_div_back_off');
				$(".cp_product_sm_img_div_back_"+prodSQLID).addClass('cp_product_sm_img_div_back_on');
			}
			for (j=0;j<prodDisplayArray.length;j++) {
				if (prodSQLID == prodDisplayArray[j][0]) {
					prodDisplayArray[j][9] = "1";
					break;
				}
			}
			window[prodVarSet] = 1;
		}
		else {
			if(gLog==1){console.log("cpProdSelect - prodVar == 1");}
			$('#'+prodID).removeClass(prodString+'_hover');
			$('#'+prodID).removeClass(prodString+'_on');
			$('#'+prodID).addClass(prodString+'_off');
			if (document.getElementById('cpProductBigImgDivBack'+prodSQLID) && $('#cpProductBigImgDivBack'+prodSQLID).hasClass('img_replace_active')) {
				$(".cp_product_big_img_div_over_"+prodSQLID).fadeOut(50);
				$(".cp_product_big_img_div_back_"+prodSQLID).addClass('cp_product_big_img_div_back_off');
				$(".cp_product_big_img_div_back_"+prodSQLID).removeClass('cp_product_big_img_div_back_on');
			}
			if (document.getElementById('cpProductSmImgDivBack'+prodSQLID) && $('#cpProductSmImgDivBack'+prodSQLID).hasClass('img_replace_active')) {
				$(".cp_product_sm_img_div_over_"+prodSQLID).fadeOut(50);
				$(".cp_product_sm_img_div_back_"+prodSQLID).addClass('cp_product_sm_img_div_back_off');
				$(".cp_product_sm_img_div_back_"+prodSQLID).removeClass('cp_product_sm_img_div_back_on');
			}
			for (j=0;j<prodDisplayArray.length;j++) {
				if (prodSQLID == prodDisplayArray[j][0]) {
					prodDisplayArray[j][9] = "0";
					break;
				}
			}
			window[prodVarSet] = 0;
		}
		controlPanelWriteCart();
	}
}
function cpsCheckDeals() {
	if (document.getElementById('cpsDealsButton')) {
		var cpsFoundDeals = 0;
		if (storeDisplayArray.length) {
			cpsBaseDealZip = storeDisplayArray[0][5];
		}
		else if (document.getElementById('revCodeZip').value != "") {
			cpsBaseDealZip = document.getElementById('revCodeZip').value;
		}
		else {
			cpsBaseDealZip = "";
		}
		if(gLog==1){console.log("cpsCheckDeals -- " + dealOBJ.dealcount + " Base");}
		for (d=0; d<dealOBJ.dealcount; d++) {
			for (dz=0; dz<dealOBJ.deal[d].zipcount; dz++) {
				if (dealOBJ.deal[d].zip[dz].code == cpsBaseDealZip) {
					cpsFoundDeals++;
					break;
				}
			}
		}
		if(gLog==1){console.log("cpsCheckDeals -- " + cpsFoundDeals + " Found at: " + cpsBaseDealZip);}
		if (cpsFoundDeals != 0) {
			document.getElementById('cpsDealsButtonNum').innerHTML = cpsFoundDeals;
			if (cpsFoundDeals == 1) {
				var dealButtonTypeWrite = cpsDealCountSingularVar;
			}
			else {
				var dealButtonTypeWrite = cpsDealCountPluralVar;
			}
			document.getElementById('cpsDealsButton').style.display = "block";
			document.getElementById('cpsDealsButtonText').innerHTML = dealButtonTypeWrite;
		}
		else {
			document.getElementById('cpsDealsButton').style.display = "none";
		}
	}
}
function cpsCompileDeals(thisZipValue) {
	showDeals(thisZipValue, document.getElementById('revCodeState').value, document.getElementById('revCodeCountry').value, cpsDealPrevVal, cpsDealNextVal, cpsDealExFntawVal, cpsDealExTxtVal);
}
function cpSmallWrite() {
	if(gLog==1){console.log("cpSmallWrite - Start");}
	var baseHTML = autotextIt(p0TemplateSet.cpsDiv,"cps");
	if (baseHTML.length != -1) {
		var cpsFoundDeals = 0;
		if (storeDisplayArray.length) {
			cpsBaseDealZip = storeDisplayArray[0][5];
		}
		else if (document.getElementById('revCodeZip').value != "") {
			cpsBaseDealZip = document.getElementById('revCodeZip').value;
		}
		else {
			cpsBaseDealZip = "";
		}
		if(gLog==1){console.log("cpSmallWrite Deals -- " + dealOBJ.dealcount + " Base");}
		for (d=0; d<dealOBJ.dealcount; d++) {
			for (dz=0; dz<dealOBJ.deal[d].zipcount; dz++) {
				if (dealOBJ.deal[d].zip[dz].code == cpsBaseDealZip) {
					cpsFoundDeals++;
					break;
				}
			}
		}
		if(gLog==1){console.log("cpSmallWrite Deals -- " + cpsFoundDeals + " Found at: " + cpsBaseDealZip);}
		var dealButtonTagStart = baseHTML.indexOf("<!--DEALBUTTON");
		if (dealButtonTagStart != -1) {
			var dealButtonTagEnd = baseHTML.indexOf(">",dealButtonTagStart);
			var dealButtonTagStrip = baseHTML.substring(dealButtonTagStart,(dealButtonTagEnd+1));
			var dealButtonHTMLStart = baseHTML.substr(0,dealButtonTagStart);
			var dealButtonHTMLEnd = baseHTML.substr((dealButtonTagEnd+1));
			var dealButtonWrite = "";
			var dealButtonSingularStart = dealButtonTagStrip.indexOf(" SINGULAR=");
			if (dealButtonSingularStart != -1) {
				var dealButtonSingularEnd = dealButtonTagStrip.indexOf("]",dealButtonSingularStart);
				cpsDealCountSingularVar = " " + dealButtonTagStrip.substring((dealButtonSingularStart+11),(dealButtonSingularEnd));
			}
			var dealButtonPluralStart = dealButtonTagStrip.indexOf(" PLURAL=");
			if (dealButtonPluralStart != -1) {
				var dealButtonPluralEnd = dealButtonTagStrip.indexOf("]",dealButtonPluralStart);
				cpsDealCountPluralVar = " " + dealButtonTagStrip.substring((dealButtonPluralStart+9),(dealButtonPluralEnd));
			}
			var dealButtonPrevStart = dealButtonTagStrip.indexOf(" PREV=");
			if (dealButtonPrevStart != -1) {
				var dealButtonPrevEnd = dealButtonTagStrip.indexOf("]",dealButtonPrevStart);
				cpsDealPrevVal = dealButtonTagStrip.substring((dealButtonPrevStart+7),(dealButtonPrevEnd));
			}
			var dealButtonNextStart = dealButtonTagStrip.indexOf(" NEXT=");
			if (dealButtonNextStart != -1) {
				var dealButtonNextEnd = dealButtonTagStrip.indexOf("]",dealButtonNextStart);
				cpsDealNextVal = dealButtonTagStrip.substring((dealButtonNextStart+7),(dealButtonNextEnd));
			}
			var dealButtonExFntawStart = dealButtonTagStrip.indexOf(" EXITFNTAW=");
			if (dealButtonExFntawStart != -1) {
				var dealButtonExFntawEnd = dealButtonTagStrip.indexOf("]",dealButtonExFntawStart);
				cpsDealExFntawVal = dealButtonTagStrip.substring((dealButtonExFntawStart+12),(dealButtonExFntawEnd));
			}
			var dealButtonExTxtStart = dealButtonTagStrip.indexOf(" EXITTEXT=");
			if (dealButtonExTxtStart != -1) {
				var dealButtonExTxtEnd = dealButtonTagStrip.indexOf("]",dealButtonExTxtStart);
				cpsDealExTxtVal = dealButtonTagStrip.substring((dealButtonExTxtStart+11),(dealButtonExTxtEnd));
			}
			if (cpsFoundDeals == 1) {
				var dealButtonTypeWrite = cpsDealCountSingularVar;
			}
			else {
				var dealButtonTypeWrite = cpsDealCountPluralVar;
			}
			var dealButtonStyleWrite = " style='display:none;'";
			if (cpsFoundDeals != 0) {
				dealButtonStyleWrite = "";
			}
			dealButtonWrite = "<div id='cpsDealsButton' class='cps_deals_button cps_deals_button cps_deals_button_off'";
			if (hoverState==1) {
				dealButtonWrite += " onmouseover='genericButtonOver(\"cps_deals_button\",\"cps_deals_button\");' onfocus='genericButtonOver(\"cps_deals_button\",\"cps_deals_button\");' onmouseout='genericButtonOut(\"cps_deals_button\",\"cps_deals_button\");' onblur='genericButtonOut(\"cps_deals_button\",\"cps_deals_button\");'";
			}
			dealButtonWrite += " onclick='cpsCompileDeals(\"" + cpsBaseDealZip + "\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){cpsCompileDeals(\"" + cpsBaseDealZip + "\");}'" + dealButtonStyleWrite + " tabindex='0' title=\"" + dealButtonTypeWrite + "\"><span id='cpsDealsButtonNum'>" + cpsFoundDeals + "<\/span><span id='cpsDealsButtonText'>" + dealButtonTypeWrite + "<\/span><\/div>";
			baseHTML = dealButtonHTMLStart + dealButtonWrite + dealButtonHTMLEnd;
		}
		var addFieldTagStart = baseHTML.indexOf("<!--ADDFIELD");
		if (addFieldTagStart != -1) {
			var addFieldTagEnd = baseHTML.indexOf(">",addFieldTagStart);
			var addFieldTagStrip = baseHTML.substring(addFieldTagStart,(addFieldTagEnd+1));
			var addFieldHTMLStart = baseHTML.substr(0,addFieldTagStart);
			var addFieldHTMLEnd = baseHTML.substr((addFieldTagEnd+1));
			var addFieldValueStart = addFieldTagStrip.indexOf(" VALUE=");
			if (addFieldValueStart != -1) {
				var addFieldValueEnd = addFieldTagStrip.indexOf("]");
				var addFieldValueVal = addFieldTagStrip.substring((addFieldValueStart+8),(addFieldValueEnd));
				var addFieldValueRender = " placeholder='"+addFieldValueVal+"'";
			}
			else {
				var addFieldValueRender = "";
			}
			var addFieldClearStart = addFieldTagStrip.indexOf(" CLEAR");
			if (addFieldClearStart != -1) {
				var addFieldFocusRender = " onfocus='controlPanelFieldClear(\"cpsAddressField\");'";
			}
			else {
				var addFieldFocusRender = "";
			}
			var addFieldPreFill = "";
			if (cpsPFAdd == 1) {
				addFieldPreFill = " value=\"" + document.getElementById('revCodeCity').value + ", " + document.getElementById('revCodeState').value + " " + document.getElementById('revCodeZip').value + "\"";
				cpsPFAdd = 0;
			}
			else if (addressShort != "") {
				addFieldPreFill = " value=\"" + addressShort + "\"";
				cpsPFAdd = 0;
			}
			addFieldRender = "<input type='text' name='cpsAddressField' id='cpsAddressField' onkeyup='controlPanelKeypress(event,\"cps\");' class='cps_address_field'" + addFieldValueRender + addFieldFocusRender + addFieldPreFill + " title=\"" + addFieldValueRender + "\" aria-label='Enter a city, state, or postal code to find stores near you'>";
			baseHTML = addFieldHTMLStart + addFieldRender + addFieldHTMLEnd;
		}
		var distanceFieldTagStart = baseHTML.indexOf("<!--DISTANCEFIELD");
		if (distanceFieldTagStart != -1) {
			var distanceFieldTagEnd = baseHTML.indexOf(">",distanceFieldTagStart);
			var distanceFieldTagStrip = baseHTML.substring(distanceFieldTagStart,(distanceFieldTagEnd+1));
			var distanceFieldHTMLStart = baseHTML.substr(0,distanceFieldTagStart);
			var distanceFieldHTMLEnd = baseHTML.substr((distanceFieldTagEnd+1));
			var distanceFieldRender = "";
			var distanceFieldValueStart = distanceFieldTagStrip.indexOf(" VALUE=");
			if (distanceFieldValueStart != -1) {
				var distanceFieldValueEnd = distanceFieldTagStrip.indexOf("]",distanceFieldValueStart);
				var distanceFieldValueVal = distanceFieldTagStrip.substring((distanceFieldValueStart+8),(distanceFieldValueEnd));
			}
			else {
				var distanceFieldValueVal = 20;
			}
			var distanceKMValueStart = distanceFieldTagStrip.indexOf(" KM");
			if (distanceKMValueStart != -1 || forceKM == 1) {
				cpDistanceFlag = 1;
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
			distanceFieldRender = "<input type='hidden' name='cpsDistanceField' id='cpsDistanceField' value='" + distanceFieldValueVal + "' title=\"Distance\">";
			distanceFieldRender += "<div id='cpsDistanceDivShell' class='cps_distance_div_shell'><div class='cps_distance_div_filter_arrow'><div class='cps_distance_div_filter cps_distance_div_filter_base cps_distance_div_filter_base_off'";
			if (hoverState==1) {
				distanceFieldRender += " onmouseover='genericButtonOver(\"cps_distance_div_filter\",\"cps_distance_div_filter_base\");' onfocus='genericButtonOver(\"cps_distance_div_filter\",\"cps_distance_div_filter_base\");' onmouseout='genericButtonOut(\"cps_distance_div_filter\",\"cps_distance_div_filter_base\");' onblur='genericButtonOut(\"cps_distance_div_filter\",\"cps_distance_div_filter_base\");'";
			}
			distanceFieldRender += " onclick='$(\".cps_distance_div_filter_slider\").toggle();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){$(\".cps_distance_div_filter_slider\").toggle();}' tabindex='0' title=\"Select Distance\"><div class='cps_distance_div_filter_text'><span id='cpsDistanceDivNum'>" + distanceFieldValueVal + "<\/span> <span class='distancefield_miles_span'>" + distanceText + "<\/span> " + distanceFieldItalicVar + "<\/div><\/div><\/div><div class='cps_distance_div_filter_slider panel_close_me' style='display:none;'><div class='cps_distance_div_filter_liner'>";
			for (w=0; w<distanceFieldOptionsArray.length; w++) {
				distanceFieldRender += "<div class='cps_distance_div_filter_item_" + distanceFieldOptionsArray[w] + " cps_distance_div_filter_item cps_distance_div_filter_item_off'";
				if (hoverState==1) {
					distanceFieldRender += " onmouseover='genericButtonOver(\"cps_distance_div_filter_item_" + distanceFieldOptionsArray[w] + "\",\"cps_distance_div_filter_item\");' onfocus='genericButtonOver(\"cps_distance_div_filter_item_" + distanceFieldOptionsArray[w] + "\",\"cps_distance_div_filter_item\");' onmouseout='genericButtonOut(\"cps_distance_div_filter_item_" + distanceFieldOptionsArray[w] + "\",\"cps_distance_div_filter_item\");' onblur='genericButtonOut(\"cps_distance_div_filter_item_" + distanceFieldOptionsArray[w] + "\",\"cps_distance_div_filter_item\");'";
				}
				distanceFieldRender += " onclick='controlPanelDistanceUpdate(\"cps\"," + distanceFieldOptionsArray[w] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){controlPanelDistanceUpdate(\"cps\"," + distanceFieldOptionsArray[w] + ");}' tabindex='0' title=\"" + distanceFieldOptionsArray[w] + " " + distanceText + "\">" + distanceFieldOptionsArray[w] + " " + distanceText + "<\/div>";
			}
			distanceFieldRender += "<\/div><\/div><\/div>";
			baseHTML = distanceFieldHTMLStart + distanceFieldRender + distanceFieldHTMLEnd;
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
			submitButtonRender = "<div id='cpsSubmitButton' class='cps_submit_button cps_submit_button_off'";
			if (hoverState==1) {
				submitButtonRender += " onmouseover='genericButtonOver(\"cps_submit_button\",\"cps_submit_button\");' onfocus='genericButtonOver(\"cps_submit_button\",\"cps_submit_button\");' onmouseout='genericButtonOut(\"cps_submit_button\",\"cps_submit_button\");' onblur='genericButtonOut(\"cps_submit_button\",\"cps_submit_button\");'";
			}
			submitButtonRender += " onclick='controlPanelSubmit(\"cps\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){controlPanelSubmit(\"cps\");}' tabindex='0' title=\"" + submitButtonValueVar + "\">" + submitButtonItalicVar + submitButtonValueVar + "<\/div>";
			baseHTML = submitButtonHTMLStart + submitButtonRender + submitButtonHTMLEnd;
		}
		var filterButtonTagStart = baseHTML.indexOf("<!--FILTERBUTTON");
		if (filterButtonTagStart != -1) {
			var filterButtonTagEnd = baseHTML.indexOf(">",filterButtonTagStart);
			var filterButtonTagStrip = baseHTML.substring(filterButtonTagStart,(filterButtonTagEnd+1));
			var filterButtonHTMLStart = baseHTML.substr(0,filterButtonTagStart);
			var filterButtonHTMLEnd = baseHTML.substr((filterButtonTagEnd+1));
			var filterButtonRender = "";
			var filterButtonValueStart = filterButtonTagStrip.indexOf(" VALUE=");
			if (filterButtonValueStart != -1) {
				var filterButtonValueEnd = filterButtonTagStrip.indexOf("]",filterButtonValueStart);
				filterButtonValueVar = filterButtonTagStrip.substring((filterButtonValueStart+8),(filterButtonValueEnd));
			}
			else {
				filterButtonValueVar = "FILTER PRODUCTS";
			}
			var filterButtonItalicStart = filterButtonTagStrip.indexOf(" FNTAW=");
			if (filterButtonItalicStart != -1) {
				var filterButtonItalicEnd = filterButtonTagStrip.indexOf("]",filterButtonItalicStart);
				var filterButtonItalicVar = "<i class='fa " + filterButtonTagStrip.substring((filterButtonItalicStart+8),(filterButtonItalicEnd)) + "'><\/i>";
			}
			else {
				var filterButtonItalicVar = "";
			}
			filterButtonRender = "<div id='cpsFilterButton' class='cps_filter_button cps_filter_button cps_filter_button_off'";
			if (hoverState==1) {
				filterButtonRender += " onmouseover='genericButtonOver(\"cps_filter_button\",\"cps_filter_button\");' onfocus='genericButtonOver(\"cps_filter_button\",\"cps_filter_button\");' onmouseout='genericButtonOut(\"cps_filter_button\",\"cps_filter_button\");' onblur='genericButtonOut(\"cps_filter_button\",\"cps_filter_button\");'";
			}
			filterButtonRender += " onclick='controlPanelOpen(whatPanelUp);' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){controlPanelOpen(whatPanelUp);}' tabindex='0' title=\"" + filterButtonValueVar + "\">" + filterButtonItalicVar + filterButtonValueVar + "<\/div>";
			baseHTML = filterButtonHTMLStart + filterButtonRender + filterButtonHTMLEnd;
		}
		var prodCountNumTagStart = baseHTML.indexOf("<!--PRODCOUNT");
		if (prodCountNumTagStart != -1) {
			var prodCountNumTagEnd = baseHTML.indexOf(">",prodCountNumTagStart);
			var prodCountNumTagStrip = baseHTML.substring(prodCountNumTagStart,(prodCountNumTagEnd+1));
			var prodCountNumHTMLStart = baseHTML.substr(0,prodCountNumTagStart);
			var prodCountNumHTMLEnd = baseHTML.substr((prodCountNumTagEnd+1));
			var prodCountSingularStart = prodCountNumTagStrip.indexOf(" SINGULAR=");
			if (prodCountSingularStart != -1) {
				var prodCountSingularEnd = prodCountNumTagStrip.indexOf("]",prodCountSingularStart);
				cpsProdCountSingularVar = " " + prodCountNumTagStrip.substring((prodCountSingularStart+11),(prodCountSingularEnd));
			}
			var prodCountParenStart = prodCountNumTagStrip.indexOf(" PAREN");
			if (prodCountParenStart != -1) {
				cpOParen = "(";
				cpCParen = ")";
			}
			var prodCountPluralStart = prodCountNumTagStrip.indexOf(" PLURAL=");
			if (prodCountPluralStart != -1) {
				var prodCountPluralEnd = prodCountNumTagStrip.indexOf("]",prodCountPluralStart);
				cpsProdCountPluralVar = " " + prodCountNumTagStrip.substring((prodCountPluralStart+9),(prodCountPluralEnd));
			}
			if (prodCartArray.length == 0 || prodCartArray.length == prodDisplayArray.length) {
				var thisSPT = "All";
				var thisCount = prodDisplayArray.length;
			}
			else if (prodCartArray.length == 1) {
				var thisSPT = cpsProdCountSingularVar;
				var thisCount = prodCartArray.length;
			}
			else {
				var thisSPT = cpsProdCountPluralVar;
				var thisCount = prodCartArray.length;
			}
			baseHTML = prodCountNumHTMLStart + "<span id='cpsProdCountNumHolder'><span id='cpsProdCountText'>" +  thisSPT + "<\/span><span id='cpsProdCountNum'>" + cpOParen + thisCount + cpCParen + "<\/span><\/span>" + prodCountNumHTMLEnd;
		}
		var eCommButTagStart = baseHTML.indexOf("<!--ECOMMBUTTON");
		if (eCommButTagStart != -1 && onretOn != 0 && cpHideEComm == 0) {
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
			var orcAllIs = 0;
			for (g=0; g<onretClientArray.length; g++) {
				if (onretClientArray[g][10] == 1) {
					orcAllIs++;
					break;
				}
			}
			var ocFoundArr = orFoundArr.filter( onlyUnique );
			var eCommButDisplay = "";
			var eCommButDisplayNone = " style='display:none'";
			var eCommButDisplayLoad = " style='display:none'";
			if (numPost == 1) {
				var eCommButDisplay = " style='display:none'";
				var eCommButDisplayNone = " style='display:none'";
				var eCommButDisplayLoad = "";
			}
			else {
				if (ocFoundArr.length == 0 && orcAllIs == 0) {
					eCommButDisplay = " style='display:none'";
					eCommButDisplayNone = "";
					var eCommButDisplayLoad = " style='display:none'";
				}
			}
			var eCommCountSingularStart = eCommButTagStrip.indexOf(" SINGULAR=");
			if (eCommCountSingularStart != -1) {
				var eCommCountSingularEnd = eCommButTagStrip.indexOf("]",eCommCountSingularStart);
				cpsECommCountSingularVar = " " + eCommButTagStrip.substring((eCommCountSingularStart+11),(eCommCountSingularEnd));
			}
			var eCommCountPluralStart = eCommButTagStrip.indexOf(" PLURAL=");
			if (eCommCountPluralStart != -1) {
				var eCommCountPluralEnd = eCommButTagStrip.indexOf("]",eCommCountPluralStart);
				cpsECommCountPluralVar = " " + eCommButTagStrip.substring((eCommCountPluralStart+9),(eCommCountPluralEnd));
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
				var thisSCT = cpsECommCountSingularVar;
			}
			else {
				var thisSCT = cpsECommCountPluralVar;
			}
			eCommButRender = "<div id='cpsECommButton' class='cps_ecomm_button cps_ecomm_button_off'";
			if (hoverState==1) {
				eCommButRender += " onmouseover='genericButtonOver(\"cps_ecomm_button\",\"cps_ecomm_button\");' onfocus='genericButtonOver(\"cps_ecomm_button\",\"cps_ecomm_button\");' onmouseout='genericButtonOut(\"cps_ecomm_button\",\"cps_ecomm_button\");' onblur='genericButtonOut(\"cps_ecomm_button\",\"cps_ecomm_button\");'";
			}
			eCommButRender += " onclick='showOnRet();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){showOnRet();}'" + eCommButDisplay + " tabindex='0' title=\"" + ocFoundArr.length + " " + thisSCT + "\"><span id='cpsECommButNum'>" + ocFoundArr.length + "<\/span><span id='cpsECommButText'>" +  thisSCT + "<\/span><\/div><div id='cpsECommButtonNone' class='cps_ecomm_button_none'" + eCommButDisplayNone + "><span id='cpsECommButNoneText'>" +  eCommCountNoneVar + "<\/span><\/div><div id='cpsECommButtonLoad' class='cps_ecomm_button_none'" + eCommButDisplayLoad + "><span id='cpsECommButLoadText'>" +  eCommCountLoadVar + "<\/span><\/div>";
			baseHTML = eCommButHTMLStart + eCommButRender + eCommButHTMLEnd;
		}
	}
	document.getElementById('cpsDiv').innerHTML = baseHTML;
	cpsWritten = 1;
}
function cpWrite(thenShow) {
	if(gLog==1){console.log("cpWrite - Start");}
	var totalHTML = "";
	var startHTML = autotextIt(p0TemplateSet.cpStartDiv,"cpStart");
	var contentHTML = autotextIt(p0TemplateSet.cpContentDiv,"cpContent");
	var productHTML = autotextIt(p0TemplateSet.cpProductDiv,"cpProduct");
	var cartHTML = autotextIt(p0TemplateSet.cpCartDiv,"cpCart");
	var cartProductHTML = autotextIt(p0TemplateSet.cpCartProductDiv,"cpCartProduct");
	var eCommButTagStart = startHTML.indexOf("<!--ECOMMBUTTON");
	if (eCommButTagStart != -1 && onretOn == 2 && cpHideEComm == 0) {
		var eCommButTagEnd = startHTML.indexOf(">",eCommButTagStart);
		var eCommButTagStrip = startHTML.substring(eCommButTagStart,(eCommButTagEnd+1));
		var eCommButHTMLStart = startHTML.substr(0,eCommButTagStart);
		var eCommButHTMLEnd = startHTML.substr((eCommButTagEnd+1));
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
		if(gLog==1){console.log("eCommButTagStart - thisCurrCount: " , thisCurrCount, foundCount);}
		var eCommButDisplay = "";
		var eCommButDisplayAlt = " style='display:none'";
		if (thisCurrCount == 0 && foundCount == 0) {
			eCommButDisplay = " style='display:none'";
			eCommButDisplayAlt = "";
		}
		var cpECommCountSingularVar = "Product";
		var cpECommCountPluralVar = "Products";
		var eCommCountSingularStart = eCommButTagStrip.indexOf(" SINGULAR=");
		if (eCommCountSingularStart != -1) {
			var eCommCountSingularEnd = eCommButTagStrip.indexOf("]",eCommCountSingularStart);
			cpECommCountSingularVar = " " + eCommButTagStrip.substring((eCommCountSingularStart+11),(eCommCountSingularEnd));
		}
		var eCommCountPluralStart = eCommButTagStrip.indexOf(" PLURAL=");
		if (eCommCountPluralStart != -1) {
			var eCommCountPluralEnd = eCommButTagStrip.indexOf("]",eCommCountPluralStart);
			cpECommCountPluralVar = " " + eCommButTagStrip.substring((eCommCountPluralStart+9),(eCommCountPluralEnd));
		}
		var eCommCountAltVar = "MORE PRODUCTS ONLINE"
		var eCommCountAltStart = eCommButTagStrip.indexOf(" ALT=");
		if (eCommCountAltStart != -1) {
			var eCommCountAltEnd = eCommButTagStrip.indexOf("]",eCommCountAltStart);
			eCommCountAltVar = " " + eCommButTagStrip.substring((eCommCountAltStart+6),(eCommCountAltEnd));
		}
		if (thisCurrCount == 1) {
			var thisSCT = cpECommCountSingularVar;
		}
		else {
			var thisSCT = cpECommCountPluralVar;
		}
		eCommButRender = "<div id='cpECommButton' class='cp_ecomm_button cp_ecomm_button cp_ecomm_button_off'";
		if (hoverState==1) {
			eCommButRender += " onmouseover='genericButtonOver(\"cp_ecomm_button\",\"cp_ecomm_button\");' onfocus='genericButtonOver(\"cp_ecomm_button\",\"cp_ecomm_button\");' onmouseout='genericButtonOut(\"cp_ecomm_button\",\"cp_ecomm_button\");' onblur='genericButtonOut(\"cp_ecomm_button\",\"cp_ecomm_button\");'";
		}
		if(gLog==1){console.log("eCommButTagStart - thisCurrCount Again: " , thisCurrCount);}
		eCommButRender += " onclick='showOnRet();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){showOnRet();}'" + eCommButDisplay + " tabindex='0' title=\"" + thisCurrCount + " " + thisSCT + "\"><span id='cpECommButNum'>" + thisCurrCount + "<\/span><span id='cpECommButText'>" +  thisSCT + "<\/span><\/div>";
		if (foundCount != 0) {
			startHTML = eCommButHTMLStart + eCommButRender + eCommButHTMLEnd;
		}
		else {
			startHTML = eCommButHTMLStart + eCommButHTMLEnd;
		}
	}
	var endHTML = autotextIt(p0TemplateSet.cpEndDiv,"cpEnd");
	if (startHTML.length != -1) {
		var addFieldTagStart = startHTML.indexOf("<!--ADDFIELD");
		if (addFieldTagStart != -1) {
			var addFieldTagEnd = startHTML.indexOf(">",addFieldTagStart);
			var addFieldTagStrip = startHTML.substring(addFieldTagStart,(addFieldTagEnd+1));
			var addFieldHTMLStart = startHTML.substr(0,addFieldTagStart);
			var addFieldHTMLEnd = startHTML.substr((addFieldTagEnd+1));
			var addFieldValueStart = addFieldTagStrip.indexOf(" VALUE=");
			if (addFieldValueStart != -1) {
				var addFieldValueEnd = addFieldTagStrip.indexOf("]");
				var addFieldValueVal = addFieldTagStrip.substring((addFieldValueStart+8),(addFieldValueEnd));
				var addFieldValueRender = " placeholder='"+addFieldValueVal+"'";
			}
			else {
				var addFieldValueRender = "";
			}
			var addFieldClearStart = addFieldTagStrip.indexOf(" CLEAR");
			if (addFieldClearStart != -1) {
				var addFieldFocusRender = " onfocus='controlPanelFieldClear(\"cpAddressField\");'";
			}
			else {
				var addFieldFocusRender = "";
			}
			var addFieldPreFill = "";
			if (cpPFAdd == 1) {
				addFieldPreFill = " value=\"" + document.getElementById('revCodeCity').value + ", " + document.getElementById('revCodeState').value + " " + document.getElementById('revCodeZip').value + "\"";
				cpPFAdd = 0;
			}
			addFieldRender = "<input type='text' name='cpAddressField' id='cpAddressField' onkeyup='controlPanelKeypress(event,\"cp\");' class='cp_address_field'" + addFieldValueRender + addFieldFocusRender + addFieldPreFill + " title=\"" + addFieldValueRender + "\" aria-label='Enter a city, state, or postal code to find stores near you'>";
			startHTML = addFieldHTMLStart + addFieldRender + addFieldHTMLEnd;
		}
		var distanceFieldTagStart = startHTML.indexOf("<!--DISTANCEFIELD");
		if (distanceFieldTagStart != -1) {
			var distanceFieldTagEnd = startHTML.indexOf(">",distanceFieldTagStart);
			var distanceFieldTagStrip = startHTML.substring(distanceFieldTagStart,(distanceFieldTagEnd+1));
			var distanceFieldHTMLStart = startHTML.substr(0,distanceFieldTagStart);
			var distanceFieldHTMLEnd = startHTML.substr((distanceFieldTagEnd+1));
			var distanceFieldRender = "";
			var distanceFieldValueStart = distanceFieldTagStrip.indexOf(" VALUE=");
			if (distanceFieldValueStart != -1) {
				var distanceFieldValueEnd = distanceFieldTagStrip.indexOf("]",distanceFieldValueStart);
				var distanceFieldValueVal = distanceFieldTagStrip.substring((distanceFieldValueStart+8),(distanceFieldValueEnd));
			}
			else {
				var distanceFieldValueVal = 20;
			}
			var distanceKMValueStart = distanceFieldTagStrip.indexOf(" KM");
			if (distanceKMValueStart != -1 || forceKM == 1) {
				cpDistanceFlag = 1;
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
			distanceFieldRender = "<input type='hidden' name='cpDistanceField' id='cpDistanceField' value='" + distanceFieldValueVal + "' title=\"Distance'\">";
			distanceFieldRender += "<div id='cpDistanceDivShell' class='cp_distance_div_shell'><div class='cp_distance_div_filter_arrow'><div class='cp_distance_div_filter cp_distance_div_filter_base cp_distance_div_filter_base_off'";
			if (hoverState==1) {
				distanceFieldRender += " onmouseover='genericButtonOver(\"cp_distance_div_filter\",\"cp_distance_div_filter_base\");' onfocus='genericButtonOver(\"cp_distance_div_filter\",\"cp_distance_div_filter_base\");' onmouseout='genericButtonOut(\"cp_distance_div_filter\",\"cp_distance_div_filter_base\");' onblur='genericButtonOut(\"cp_distance_div_filter\",\"cp_distance_div_filter_base\");'";
			}
			distanceFieldRender += " onclick='$(\".cp_distance_div_filter_slider\").toggle();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){$(\".cp_distance_div_filter_slider\").toggle();}' tabindex='0' title=\"Select Distance\"><div class='cp_distance_div_filter_text'><span id='cpDistanceDivNum'>" + distanceFieldValueVal + "<\/span> <span class='distancefield_miles_span'>" + distanceText + "<\/span> " + distanceFieldItalicVar + "<\/div><\/div><\/div><div class='cp_distance_div_filter_slider panel_close_me' style='display:none;'><div class='cp_distance_div_filter_liner'>";
			for (w=0; w<distanceFieldOptionsArray.length; w++) {
				distanceFieldRender += "<div class='cp_distance_div_filter_item_" + distanceFieldOptionsArray[w] + " cp_distance_div_filter_item cp_distance_div_filter_item_off'";
				if (hoverState==1) {
					distanceFieldRender += " onmouseover='genericButtonOver(\"cp_distance_div_filter_item_" + distanceFieldOptionsArray[w] + "\",\"cp_distance_div_filter_item\");' onfocus='genericButtonOver(\"cp_distance_div_filter_item_" + distanceFieldOptionsArray[w] + "\",\"cp_distance_div_filter_item\");' onmouseout='genericButtonOut(\"cp_distance_div_filter_item_" + distanceFieldOptionsArray[w] + "\",\"cp_distance_div_filter_item\");' onblur='genericButtonOut(\"cp_distance_div_filter_item_" + distanceFieldOptionsArray[w] + "\",\"cp_distance_div_filter_item\");'";
				}
				distanceFieldRender += " onclick='controlPanelDistanceUpdate(\"cp\"," + distanceFieldOptionsArray[w] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){controlPanelDistanceUpdate(\"cp\"," + distanceFieldOptionsArray[w] + ");}' tabindex='0' title=\"" + distanceFieldOptionsArray[w] + " " + distanceText + "\">" + distanceFieldOptionsArray[w] + " " + distanceText + "<\/div>";
			}
			distanceFieldRender += "<\/div><\/div><\/div>";
			startHTML = distanceFieldHTMLStart + distanceFieldRender + distanceFieldHTMLEnd;
		}
		var submitButtonTagStart = startHTML.indexOf("<!--SUBBUTTON");
		if (submitButtonTagStart != -1) {
			var submitButtonTagEnd = startHTML.indexOf(">",submitButtonTagStart);
			var submitButtonTagStrip = startHTML.substring(submitButtonTagStart,(submitButtonTagEnd+1));
			var submitButtonHTMLStart = startHTML.substr(0,submitButtonTagStart);
			var submitButtonHTMLEnd = startHTML.substr((submitButtonTagEnd+1));
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
			submitButtonRender = "<div id='cpSubmitButton' class='cp_submit_button cp_submit_button_off'";
			if (hoverState==1) {
				submitButtonRender += " onmouseover='genericButtonOver(\"cp_submit_button\",\"cp_submit_button\");' onfocus='genericButtonOver(\"cp_submit_button\",\"cp_submit_button\");' onmouseout='genericButtonOut(\"cp_submit_button\",\"cp_submit_button\");' onblur='genericButtonOut(\"cp_submit_button\",\"cp_submit_button\");'";
			}
			submitButtonRender += " onclick='controlPanelSubmit(\"cp\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){controlPanelSubmit(\"cp\");}' tabindex='0' title=\"" + submitButtonValueVar + "\">" + submitButtonItalicVar + submitButtonValueVar + "<\/div>";
			startHTML = submitButtonHTMLStart + submitButtonRender + submitButtonHTMLEnd;
		}
		var closeButtonTagStart = startHTML.indexOf("<!--CLOSEBUTTON");
		if (closeButtonTagStart != -1) {
			var closeButtonTagEnd = startHTML.indexOf(">",closeButtonTagStart);
			var closeButtonTagStrip = startHTML.substring(closeButtonTagStart,(closeButtonTagEnd+1));
			var closeButtonHTMLStart = startHTML.substr(0,closeButtonTagStart);
			var closeButtonHTMLEnd = startHTML.substr((closeButtonTagEnd+1));
			var closeButtonRender = "";
			var closeButtonValueStart = closeButtonTagStrip.indexOf(" VALUE=");
			if (closeButtonValueStart != -1) {
				var closeButtonValueEnd = closeButtonTagStrip.indexOf("]",closeButtonValueStart);
				closeButtonValueVar = closeButtonTagStrip.substring((closeButtonValueStart+8),(closeButtonValueEnd));
			}
			else {
				closeButtonValueVar = "CLOSE";
			}
			var closeButtonItalicStart = closeButtonTagStrip.indexOf(" FNTAW=");
			if (closeButtonItalicStart != -1) {
				var closeButtonItalicEnd = closeButtonTagStrip.indexOf("]",closeButtonItalicStart);
				var closeButtonItalicVar = "<i class='fa " + closeButtonTagStrip.substring((closeButtonItalicStart+8),(closeButtonItalicEnd)) + "'><\/i>";
			}
			else {
				var closeButtonItalicVar = "";
			}
			closeButtonRender = "<div id='cpCloseButton' class='cp_close_button cp_close_button_off'";
			if (hoverState==1) {
				closeButtonRender += " onmouseover='genericButtonOver(\"cp_close_button\",\"cp_close_button\");' onfocus='genericButtonOver(\"cp_close_button\",\"cp_close_button\");' onmouseout='genericButtonOut(\"cp_close_button\",\"cp_close_button\");' onblur='genericButtonOut(\"cp_close_button\",\"cp_close_button\");'";
			}
			closeButtonRender += " onclick='cpClose(whatPanelUp,1);' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){cpClose(whatPanelUp,1);}' tabindex='0' title=\"Close\">" + closeButtonItalicVar + closeButtonValueVar + "<\/div>";
			startHTML = closeButtonHTMLStart + closeButtonRender + closeButtonHTMLEnd;
		}
		var catMenuTagStart = startHTML.indexOf("<!--CATMENU");
		if (catMenuTagStart != -1) {
			var catMenuTagEnd = startHTML.indexOf(">",catMenuTagStart);
			var catMenuTagStrip = startHTML.substring(catMenuTagStart,(catMenuTagEnd+1));
			var catMenuHTMLStart = startHTML.substr(0,catMenuTagStart);
			var catMenuHTMLEnd = startHTML.substr((catMenuTagEnd+1));
			var catMenuRender = "";
			var catMenuItalicStart = catMenuTagStrip.indexOf(" FNTAW=");
			if (catMenuItalicStart != -1) {
				var catMenuItalicEnd = catMenuTagStrip.indexOf("]",catMenuItalicStart);
				catMenuItalicVar = "<i class='fa " + catMenuTagStrip.substring((catMenuItalicStart+8),(catMenuItalicEnd)) + "'><\/i>";
			}
			else {
				catMenuItalicVar = "";
			}
			catMenuRender = "<input type='hidden' name='cpCatMenuHolder' id='cpCatMenuHolder' value='0' title=\"Chosen Category\"><div id='cpCatMenuShell' class='cp_cat_menu_div_shell'>";
			catMenuRender += "<div class='cp_cat_menu_div_filter_arrow'><div class='cp_cat_menu_div_filter cp_cat_menu_div_filter_base cp_cat_menu_div_filter_base_off'";
			if (hoverState==1) {
				catMenuRender += " onmouseover='genericButtonOver(\"cp_cat_menu_div_filter\",\"cp_cat_menu_div_filter_base\");' onfocus='genericButtonOver(\"cp_cat_menu_div_filter\",\"cp_cat_menu_div_filter_base\");' onmouseout='genericButtonOut(\"cp_cat_menu_div_filter\",\"cp_cat_menu_div_filter_base\");' onblur='genericButtonOut(\"cp_cat_menu_div_filter\",\"cp_cat_menu_div_filter_base\");'";
			}
			catMenuRender += " onclick='$(\".cp_cat_menu_div_filter_slider\").toggle();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){$(\".cp_cat_menu_div_filter_slider\").toggle();}' tabindex='0' title=\"All Products\"><div class='cp_cat_menu_div_filter_text'><span id='cpCatMenuDisplay'><span id='cpCatMenuDisplayText'>All Products<\/span><span id='cpCatMenuDisplayNum'>(" + prodDisplayArray.length + ")<\/span> " + catMenuItalicVar + "<\/span><\/div><\/div><\/div><div class='cp_cat_menu_div_filter_slider panel_close_me' style='display:none;'><div class='cp_cat_menu_div_filter_liner' id='cpCatMenuContent'>";
			catMenuRender += "<div class='cp_cat_menu_div_filter_item_0 cp_cat_menu_div_filter_item cp_cat_menu_div_filter_item_off'";
			if (hoverState==1){
				catMenuRender += " onmouseover='genericButtonOver(\"cp_cat_menu_div_filter_item_0\",\"cp_cat_menu_div_filter_item\");' onfocus='genericButtonOver(\"cp_cat_menu_div_filter_item_0\",\"cp_cat_menu_div_filter_item\");' onmouseout='genericButtonOut(\"cp_cat_menu_div_filter_item_0\",\"cp_cat_menu_div_filter_item\");' onblur='genericButtonOut(\"cp_cat_menu_div_filter_item_0\",\"cp_cat_menu_div_filter_item\");'";
			}
			catMenuRender += " onclick='controlPanelCatMenuSelect(0,\"Cat\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){controlPanelCatMenuSelect(0,\"Cat\");}' tabindex='0' title=\"All Products\"><span class='cp_cat_menu_div_filter_item_text'>All Products<\/span><span class='cp_cat_menu_div_filter_item_num'>(" + prodDisplayArray.length + ")<\/span><\/div>";
			if (catArray.length > 1) {
				for (c=0; c<catArray.length; c++) {
					catMenuRender += "<div class='cp_cat_menu_div_filter_item_" + catArray[c][0] + " cp_cat_menu_div_filter_item cp_cat_menu_div_filter_item_off'";
					if (hoverState==1){
						catMenuRender += " onmouseover='genericButtonOver(\"cp_cat_menu_div_filter_item_" + catArray[c][0] + "\",\"cp_cat_menu_div_filter_item\");' onfocus='genericButtonOver(\"cp_cat_menu_div_filter_item_" + catArray[c][0] + "\",\"cp_cat_menu_div_filter_item\");' onmouseout='genericButtonOut(\"cp_cat_menu_div_filter_item_" + catArray[c][0] + "\",\"cp_cat_menu_div_filter_item\");' onblur='genericButtonOut(\"cp_cat_menu_div_filter_item_" + catArray[c][0] + "\",\"cp_cat_menu_div_filter_item\");'";
					}
					catMenuRender += " onclick='controlPanelCatMenuSelect(" + catArray[c][0] + ",\"Cat\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){controlPanelCatMenuSelect(" + catArray[c][0] + ",\"Cat\");}' tabindex='0' title=\"" + catArray[c][1] + "\"><span class='cp_cat_menu_div_filter_item_text'>" + catArray[c][1] + "<\/span><span class='cp_cat_menu_div_filter_item_num'>(" + catArray[c][7] + ")<\/span><\/div>";
				}
			}
			catMenuRender += "<\/div><\/div>";
			catMenuRender += "<\/div>";
			startHTML = catMenuHTMLStart + catMenuRender + catMenuHTMLEnd;
		}
		var labelMenuTagStart = startHTML.indexOf("<!--LABELMENU");
		if (labelMenuTagStart != -1) {
			var labelMenuTagEnd = startHTML.indexOf(">",labelMenuTagStart);
			var labelMenuTagStrip = startHTML.substring(labelMenuTagStart,(labelMenuTagEnd+1));
			var labelMenuHTMLStart = startHTML.substr(0,labelMenuTagStart);
			var labelMenuHTMLEnd = startHTML.substr((labelMenuTagEnd+1));
			var labelMenuRender = "";
			var labelMenuItalicStart = labelMenuTagStrip.indexOf(" FNTAW=");
			if (labelMenuItalicStart != -1) {
				var labelMenuItalicEnd = labelMenuTagStrip.indexOf("]",labelMenuItalicStart);
				var labelMenuItalicVar = "<i class='fa " + labelMenuTagStrip.substring((labelMenuItalicStart+8),(labelMenuItalicEnd)) + "'><\/i>";
			}
			else {
				var labelMenuItalicVar = "";
			}
			var labelMenuLevelStart = labelMenuTagStrip.indexOf(" LEVEL=");
			if (labelMenuLevelStart != -1) {
				var labelMenuLevelEnd = labelMenuTagStrip.indexOf("]",labelMenuLevelStart);
				labelMenuLevelVar = parseInt(labelMenuTagStrip.substring((labelMenuLevelStart+8),(labelMenuLevelEnd)));
			}
			var labelMenuCodeStart = labelMenuTagStrip.indexOf(" CODE=");
			if (labelMenuCodeStart != -1) {
				var labelMenuCodeEnd = labelMenuTagStrip.indexOf("]",labelMenuCodeStart);
				labelMenuCodeVar = labelMenuTagStrip.substring((labelMenuCodeStart+7),(labelMenuCodeEnd));
			}
			var labelMenuModalStart = labelMenuTagStrip.indexOf(" MODAL");
			if (labelMenuModalStart != -1) {
				labelMenuLinkVar = 1;
			}
			if (cpModals == 1) {labelMenuLinkVar = 1;}else if (cpModals == 2) {labelMenuLinkVar = 0;}
			var labelMenuLength = 0;
			for (c=0; c<prodDisplayArray.length; c++) {
				if (labelMenuCodeVar == "") {labelMenuLength++;}
				else {
					for (u=0; u<prodLabelArray.length; u++) {
						var foundIncr = 0;
						if (prodLabelArray[u][1] == prodDisplayArray[c][0]) {
							for (s=0; s<labelArray.length; s++) {
								if (labelArray[s][0] == prodLabelArray[u][2] && labelArray[s][4].toLowerCase() == labelMenuCodeVar.toLowerCase()) {
									labelMenuLength++;
									foundIncr = 1;
									break;
								}
							}
						}
						if (foundIncr == 1) {break;}
					}
				}
			}
			if(gLog==1){console.log("LABELMENU level,code", labelMenuLevelVar,labelMenuCodeVar);}
			labelMenuRender = "<input type='hidden' name='cpLabelMenuHolder' id='cpLabelMenuHolder' value='0' title=\"Chosen Label\"><div id='cpLabelMenuShell' class='cp_label_menu_div_shell'>";
			labelMenuRender += "<div class='cp_label_menu_div_filter_arrow'><div class='cp_label_menu_div_filter cp_label_menu_div_filter_base cp_label_menu_div_filter_base_off'";
			if (hoverState==1) {
				labelMenuRender += " onmouseover='genericButtonOver(\"cp_label_menu_div_filter\",\"cp_label_menu_div_filter_base\");' onfocus='genericButtonOver(\"cp_label_menu_div_filter\",\"cp_label_menu_div_filter_base\");' onmouseout='genericButtonOut(\"cp_label_menu_div_filter\",\"cp_label_menu_div_filter_base\");' onblur='genericButtonOut(\"cp_label_menu_div_filter\",\"cp_label_menu_div_filter_base\");'";
			}
			labelMenuRender += " onclick='$(\".cp_label_menu_div_filter_slider\").toggle();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){$(\".cp_label_menu_div_filter_slider\").toggle();}' tabindex='0' title=\"All Products\"><div class='cp_label_menu_div_filter_text'><span id='cpLabelMenuDisplay'><span id='cpLabelMenuDisplayText'>All Products<\/span><span id='cpLabelMenuDisplayNum'>(" + labelMenuLength + ")<\/span> " + labelMenuItalicVar + "<\/span><\/div><\/div><\/div><div class='cp_label_menu_div_filter_slider panel_close_me' style='display:none;'><div class='cp_label_menu_div_filter_liner' id='cpLabelMenuContent'>";
			labelMenuRender += "<div class='cp_label_menu_div_filter_item_0 cp_label_menu_div_filter_item cp_label_menu_div_filter_item_off'";
			if (hoverState==1){
				labelMenuRender += " onmouseover='genericButtonOver(\"cp_label_menu_div_filter_item_0\",\"cp_label_menu_div_filter_item\");' onfocus='genericButtonOver(\"cp_label_menu_div_filter_item_0\",\"cp_label_menu_div_filter_item\");' onmouseout='genericButtonOut(\"cp_label_menu_div_filter_item_0\",\"cp_label_menu_div_filter_item\");' onblur='genericButtonOut(\"cp_label_menu_div_filter_item_0\",\"cp_label_menu_div_filter_item\");'";
			}
			labelMenuRender += " onclick='controlPanelLabelMenuSelect(0,\"Label\"," + labelMenuLength + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){controlPanelLabelMenuSelect(0,\"Label\"," + labelMenuLength + ");}' tabindex='0' title=\"All Products\"><span class='cp_label_menu_div_filter_item_text'>All Products<\/span><span id='cpLabelMenuDisplayNum'>(" + labelMenuLength + ")<\/span><\/div>";
			if (labelArray.length > 1) {
				for (c=0; c<labelArray.length; c++) {
					var levelGoodToGo = 0;
					var codeGoodToGo = 0;
					if (labelMenuLevelVar == -1) {levelGoodToGo = 1;}
					else if (labelMenuLevelVar == 0 && labelArray[c][9] == 0) {levelGoodToGo = 1;}
					else if (labelMenuLevelVar == 1) {
						for (w=0; w<labelArray.length; w++) {
							if (labelArray[w][9] == 0 && labelArray[c][9] == labelArray[w][0]) {
								levelGoodToGo = 1;
								break;
							}
						}
					}
					if (labelMenuCodeVar == "" || labelArray[c][4].toLowerCase() == labelMenuCodeVar.toLowerCase()) {codeGoodToGo = 1;}
					if (levelGoodToGo == 1 && codeGoodToGo == 1) {
						labelMenuRender += "<div class='cp_label_menu_div_filter_item_" + labelArray[c][0] + " cp_label_menu_div_filter_item cp_label_menu_div_filter_item_off'";
						if (hoverState==1){
							labelMenuRender += " onmouseover='genericButtonOver(\"cp_label_menu_div_filter_item_" + labelArray[c][0] + "\",\"cp_label_menu_div_filter_item\");' onfocus='genericButtonOver(\"cp_label_menu_div_filter_item_" + labelArray[c][0] + "\",\"cp_label_menu_div_filter_item\");' onmouseout='genericButtonOut(\"cp_label_menu_div_filter_item_" + labelArray[c][0] + "\",\"cp_label_menu_div_filter_item\");' onblur='genericButtonOut(\"cp_label_menu_div_filter_item_" + labelArray[c][0] + "\",\"cp_label_menu_div_filter_item\");'";
						}
						labelMenuRender += " onclick='controlPanelLabelMenuSelect(" + labelArray[c][0] + ",\"Label\"," + labelArray[c][11] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){controlPanelLabelMenuSelect(" + labelArray[c][0] + ",\"Label\"," + labelArray[c][11] + ");}' tabindex='0' title=\"" + labelArray[c][1] + "\"><span class='cp_label_menu_div_filter_item_text'>" + labelArray[c][1] + "<\/span><span class='cp_label_menu_div_filter_item_num'>(" + labelArray[c][11] + ")<\/span><\/div>";
					}
				}
			}
			labelMenuRender += "<\/div><\/div>";
			labelMenuRender += "<\/div>";
			startHTML = labelMenuHTMLStart + labelMenuRender + labelMenuHTMLEnd;
		}
		var famMenuTagStart = startHTML.indexOf("<!--FAMMENU");
		if (famMenuTagStart != -1) {
			var famMenuTagEnd = startHTML.indexOf(">",famMenuTagStart);
			var famMenuTagStrip = startHTML.substring(famMenuTagStart,(famMenuTagEnd+1));
			var famMenuHTMLStart = startHTML.substr(0,famMenuTagStart);
			var famMenuHTMLEnd = startHTML.substr((famMenuTagEnd+1));
			var famMenuRender = "";
			var famMenuItalicStart = famMenuTagStrip.indexOf(" FNTAW=");
			if (famMenuItalicStart != -1) {
				var famMenuItalicEnd = famMenuTagStrip.indexOf("]",famMenuItalicStart);
				famMenuItalicVar = "<i class='fa " + famMenuTagStrip.substring((famMenuItalicStart+8),(famMenuItalicEnd)) + "'><\/i>";
			}
			else {
				famMenuItalicVar = "";
			}
			famMenuRender = "<input type='hidden' name='cpFamMenuHolder' id='cpFamMenuHolder' value='0' title=\"Chosen Family\"><div id='cpFamMenuShell' class='cp_fam_menu_div_shell'>";
			famMenuRender += "<div class='cp_fam_menu_div_filter_arrow'><div class='cp_fam_menu_div_filter cp_fam_menu_div_filter_base cp_fam_menu_div_filter_base_off'";
			if (hoverState==1) {
				famMenuRender += " onmouseover='genericButtonOver(\"cp_fam_menu_div_filter\",\"cp_fam_menu_div_filter_base\");' onfocus='genericButtonOver(\"cp_fam_menu_div_filter\",\"cp_fam_menu_div_filter_base\");' onmouseout='genericButtonOut(\"cp_fam_menu_div_filter\",\"cp_fam_menu_div_filter_base\");' onblur='genericButtonOut(\"cp_fam_menu_div_filter\",\"cp_fam_menu_div_filter_base\");'";
			}
			famMenuRender += " onclick='$(\".cp_fam_menu_div_filter_slider\").toggle();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){$(\".cp_fam_menu_div_filter_slider\").toggle();}' tabindex='0' title=\"All Products\"><div class='cp_fam_menu_div_filter_text'><span id='cpFamMenuDisplay'><span id='cpFamMenuDisplayText'>All Products<\/span><span id='cpFamMenuDisplayNum'>(" + catArray.length + ")<\/span> " + famMenuItalicVar + "<\/span><\/div><\/div><\/div><div class='cp_fam_menu_div_filter_slider panel_close_me' style='display:none;'><div class='cp_fam_menu_div_filter_liner' id='cpFamMenuContent'>";
			famMenuRender += "<div class='cp_fam_menu_div_filter_item_0 cp_fam_menu_div_filter_item cp_fam_menu_div_filter_item_off'";
			if (hoverState==1){
				famMenuRender += " onmouseover='genericButtonOver(\"cp_fam_menu_div_filter_item_0\",\"cp_fam_menu_div_filter_item\");' onfocus='genericButtonOver(\"cp_fam_menu_div_filter_item_0\",\"cp_fam_menu_div_filter_item\");' onmouseout='genericButtonOut(\"cp_fam_menu_div_filter_item_0\",\"cp_fam_menu_div_filter_item\");' onblur='genericButtonOut(\"cp_fam_menu_div_filter_item_0\",\"cp_fam_menu_div_filter_item\");'";
			}
			famMenuRender += " onclick='controlPanelFamMenuSelect(0,\"Fam\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){controlPanelFamMenuSelect(0,\"Fam\");}' tabindex='0' title=\"All Products\"><span class='cp_fam_menu_div_filter_item_text'>All Products<\/span><span class='cp_fam_menu_div_filter_item_num'>(" + catArray.length + ")<\/span><\/div>";
			if (famArray.length > 1) {
				for (c=0; c<famArray.length; c++) {
					famMenuRender += "<div class='cp_fam_menu_div_filter_item_" + famArray[c][0] + " cp_fam_menu_div_filter_item cp_fam_menu_div_filter_item_off'";
					if (hoverState==1){
						famMenuRender += " onmouseover='genericButtonOver(\"cp_fam_menu_div_filter_item_" + famArray[c][0] + "\",\"cp_fam_menu_div_filter_item\");' onfocus='genericButtonOver(\"cp_fam_menu_div_filter_item_" + famArray[c][0] + "\",\"cp_fam_menu_div_filter_item\");' onmouseout='genericButtonOut(\"cp_fam_menu_div_filter_item_" + famArray[c][0] + "\",\"cp_fam_menu_div_filter_item\");' onblur='genericButtonOut(\"cp_fam_menu_div_filter_item_" + famArray[c][0] + "\",\"cp_fam_menu_div_filter_item\");'";
					}
					famMenuRender += " onclick='controlPanelFamMenuSelect(" + famArray[c][0] + ",\"Fam\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){controlPanelFamMenuSelect(" + famArray[c][0] + ",\"Fam\");}' tabindex='0' title=\"" + famArray[c][1] + "\"><span class='cp_fam_menu_div_filter_item_text'>" + famArray[c][1] + "<\/span><span class='cp_fam_menu_div_filter_item_num'>(" + famArray[c][6] + ")<\/span><\/div>";
				}
			}
			famMenuRender += "<\/div><\/div>";
			famMenuRender += "<\/div>";
			startHTML = famMenuHTMLStart + famMenuRender + famMenuHTMLEnd;
		}
		var famcatMenuTagStart = startHTML.indexOf("<!--FAMCATMENU");
		if (famcatMenuTagStart != -1) {
			var famcatMenuTagEnd = startHTML.indexOf(">",famcatMenuTagStart);
			var famcatMenuTagStrip = startHTML.substring(famcatMenuTagStart,(famcatMenuTagEnd+1));
			var famcatMenuHTMLStart = startHTML.substr(0,famcatMenuTagStart);
			var famcatMenuHTMLEnd = startHTML.substr((famcatMenuTagEnd+1));
			var famcatMenuRender = "<input type='hidden' name='cpCatMenuHolder' id='cpCatMenuHolder' value='0' title=\"Chosen Category\"><input type='hidden' name='cpFamCatMenuHolder' id='cpFamCatMenuHolder' value='0' title=\"Chosen Family\"><div id='cpFamCatMenuShell' class='cp_cat_menu_div_shell'>";
			famcatMenuRender += "<div id='cssmenu'";
			if(winWidth <= globalRespWidth) {
				famcatMenuRender += " style='display:none;'";
			}
			famcatMenuRender += "><ul><li class='active'><a href='#' onclick='controlPanelCatMenuSelect(0,\"FamCat\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){controlPanelCatMenuSelect(0,\"FamCat\");}' tabindex='0' title=\"All Products\"><span id='cpFamCatMenuDisplayText'>All Products<\/span><span id='cpFamCatMenuDisplayNum'>(" + prodDisplayArray.length + ")<\/span><\/a><ul>";
			if (famArray.length == 1) {
				if (catArray.length > 1) {
					for (c=0; c<catArray.length; c++) {
						famcatMenuRender += "<li><a href='#' onclick='controlPanelCatMenuSelect(" + catArray[c][0] + ",\"FamCat\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){controlPanelCatMenuSelect(" + catArray[c][0] + ",\"FamCat\");}' tabindex='0' title=\"" + catArray[c][1] + "\"><span class='cp_famcat_menu_div_filter_item_text'>" + catArray[c][1] + "<\/span><span class='cp_famcatcat_menu_div_filter_item_num'>(" + catArray[c][7] + ")<\/span><\/a><\/li>";
					}
				}
			}
			else {
				for (f=0; f<famArray.length; f++) {
					var famListCompile = "";
					var famListCount = 0;
					if (catArray.length > 1) {
						for (c=0; c<catArray.length; c++) {
							if (catArray[c][2] == famArray[f][0]) {
								famListCompile += "<li><a href='#' onclick='controlPanelCatMenuSelect(" + catArray[c][0] + ",\"FamCat\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){controlPanelCatMenuSelect(" + catArray[c][0] + ",\"FamCat\");}' tabindex='0' title=\"" + catArray[c][1] + "\"><span class='cp_famcat_menu_div_filter_item_text'>" + catArray[c][1] + "<\/span><span class='cp_famcatcat_menu_div_filter_item_num'>(" + catArray[c][7] + ")<\/span><\/a><\/li>";
								famListCount += catArray[c][7];
							}
						}
					}
					famcatMenuRender += "<li><a href='#' class='cp_famcat_menu_dropdown'><span class='cp_famcat_menu_div_filter_family_text'>" + famArray[f][1] + "<\/span><span class='cp_famcatcat_menu_div_filter_family_num'>(" + famListCount + ")<\/span><\/a><ul><li><a href='#' onclick='controlPanelCatMenuSelect(" + famArray[f][0] + ",\"FamCat\",1);' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){controlPanelCatMenuSelect(" + famArray[f][0] + ",\"FamCat\",1);}' tabindex='0' title=\"" + famListCompile + "\"><span class='cp_famcat_menu_div_filter_item_text'>All Products<\/span><span class='cp_famcatcat_menu_div_filter_item_num'>(" + famListCount + ")<\/span><\/a><\/li>" + famListCompile + "<\/ul><\/li>";

				}
			}
			famcatMenuRender += "<\/ul><\/li><\/ul><\/div>";
			famcatMenuRender += "<div id='cssmenu_two'";
			if(winWidth > globalRespWidth) {
				famcatMenuRender += " style='display:none;'";
			}
			famcatMenuRender += "><ul>";
			if (famArray.length == 1) {
				if (catArray.length > 1) {
					for (c=0; c<catArray.length; c++) {
						famcatMenuRender += "<li><a href='#' onclick='controlPanelCatMenuSelect(" + catArray[c][0] + ",\"FamCat\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){controlPanelCatMenuSelect(" + catArray[c][0] + ",\"FamCat\");}' tabindex='0' title=\"" + catArray[c][1] + "\"><span class='cp_famcat_menu_div_filter_item_text'>" + catArray[c][1] + "<\/span><span class='cp_famcatcat_menu_div_filter_item_num'>(" + catArray[c][7] + ")<\/span><\/a><\/li>";
					}
				}
			}
			else {
				for (f=0; f<famArray.length; f++) {
					var famListCompile = "";
					var famListCount = 0;
					if (catArray.length > 1) {
						for (c=0; c<catArray.length; c++) {
							if (catArray[c][2] == famArray[f][0]) {
								famListCompile += "<li><a href='#' onclick='controlPanelCatMenuSelect(" + catArray[c][0] + ",\"FamCat\");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){controlPanelCatMenuSelect(" + catArray[c][0] + ",\"FamCat\");}' tabindex='0' title=\"" + catArray[c][1] + "\"><span class='cp_famcat_menu_div_filter_item_text'>" + catArray[c][1] + "<\/span><span class='cp_famcatcat_menu_div_filter_item_num'>(" + catArray[c][7] + ")<\/span><\/a><\/li>";
								famListCount += catArray[c][7];
							}
						}
					}
					famcatMenuRender += "<li><a href='#' class='cp_famcat_menu_dropdown'><span class='cp_famcat_menu_div_filter_family_text'>" + famArray[f][1] + "<\/span><span class='cp_famcatcat_menu_div_filter_family_num'>(" + famListCount + ")<\/span><\/a><ul><li><a href='#' onclick='controlPanelCatMenuSelect(" + famArray[f][0] + ",\"FamCat\",1);' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){controlPanelCatMenuSelect(" + famArray[f][0] + ",\"FamCat\",1);}' tabindex='0' title=\"" + famListCompile + "\"><span class='cp_famcat_menu_div_filter_item_text'>All Products<\/span><span class='cp_famcatcat_menu_div_filter_item_num'>(" + famListCount + ")<\/span><\/a><\/li>" + famListCompile + "<\/ul><\/li>";

				}
			}
			famcatMenuRender += "<\/ul><\/div>";
			startHTML = famcatMenuHTMLStart + famcatMenuRender + famcatMenuHTMLEnd;
			if(gLog==1){console.log("FAMCATMENU - Compile ");}
		}
		var filterFieldTagStart = startHTML.indexOf("<!--FILTERFIELD");
		if (filterFieldTagStart != -1) {
			var filterFieldTagEnd = startHTML.indexOf(">",filterFieldTagStart);
			var filterFieldTagStrip = startHTML.substring(filterFieldTagStart,(filterFieldTagEnd+1));
			var filterFieldHTMLStart = startHTML.substr(0,filterFieldTagStart);
			var filterFieldHTMLEnd = startHTML.substr((filterFieldTagEnd+1));
			var filterFieldValueStart = filterFieldTagStrip.indexOf(" VALUE=");
			if (filterFieldValueStart != -1) {
				var filterFieldValueEnd = filterFieldTagStrip.indexOf("]");
				var filterFieldValueVal = " placeholder='" + filterFieldTagStrip.substring((filterFieldValueStart+8),(filterFieldValueEnd)) + "'";
			}
			else {
				var filterFieldValueVal = "";
			}
			filterFieldRender = "<input type='text' name='cpFilterField' id='cpFilterField'" + filterFieldValueVal + " class='cp_filter_field cp_filter_field_base' onkeyup='controlPanelFilterKeypress(event);' title=\"" + filterFieldValueVal + "\">";
			if (cPanelFilterOn == 1) {
				startHTML = filterFieldHTMLStart + filterFieldRender + filterFieldHTMLEnd;
			}
			else {
				startHTML = filterFieldHTMLStart + "<input type='hidden' name='cpFilterField' id='cpFilterField' value='' title=\"Hidden Filter\">" + filterFieldHTMLEnd;
			}
		}
		else {
			startHTML += "<input type='hidden' name='cpFilterField' id='cpFilterField' value='' title=\"Hidden Filter\">";
		}
		var prodcartButtonTagStart = startHTML.indexOf("<!--PRODCARTBUTTON");
		if (prodcartButtonTagStart != -1) {
			var prodcartButtonTagEnd = startHTML.indexOf(">",prodcartButtonTagStart);
			var prodcartButtonTagStrip = startHTML.substring(prodcartButtonTagStart,(prodcartButtonTagEnd+1));
			var prodcartButtonHTMLStart = startHTML.substr(0,prodcartButtonTagStart);
			var prodcartButtonHTMLEnd = startHTML.substr((prodcartButtonTagEnd+1));
			var prodcartButtonRender = "";
			var prodcartButtonValueStart = prodcartButtonTagStrip.indexOf(" VALUE=");
			if (prodcartButtonValueStart != -1) {
				var prodcartButtonValueEnd = prodcartButtonTagStrip.indexOf("]",prodcartButtonValueStart);
				prodcartButtonValueVar = prodcartButtonTagStrip.substring((prodcartButtonValueStart+8),(prodcartButtonValueEnd));
			}
			else {
				prodcartButtonValueVar = "";
			}
			var prodcartButtonItalicStart = prodcartButtonTagStrip.indexOf(" FNTAW=");
			if (prodcartButtonItalicStart != -1) {
				var prodcartButtonItalicEnd = prodcartButtonTagStrip.indexOf("]",prodcartButtonItalicStart);
				var prodcartButtonItalicVar = "<i class='fa " + prodcartButtonTagStrip.substring((prodcartButtonItalicStart+8),(prodcartButtonItalicEnd)) + "'><\/i>";
			}
			else {
				var prodcartButtonItalicVar = "";
			}
			prodcartButtonRender = "<div id='cpProdCartButton' class='cp_prodcart_button cp_prodcart_button_off'";
			if (hoverState==1) {
				prodcartButtonRender += " onmouseover='genericButtonOver(\"cp_prodcart_button\",\"cp_prodcart_button\");' onfocus='genericButtonOver(\"cp_prodcart_button\",\"cp_prodcart_button\");' onmouseout='genericButtonOut(\"cp_prodcart_button\",\"cp_prodcart_button\");' onblur='genericButtonOut(\"cp_prodcart_button\",\"cp_prodcart_button\");'";
			}
			if (prodCartArray.length == 0) {
				var thisSPN = "All";
			}
			else {
				var thisSPN = prodCartArray.length;
			}
			prodcartButtonRender += " onclick='controlPanelToggleProdCart();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){controlPanelToggleProdCart();}' tabindex='0' title=\"" + prodcartButtonValueVar + "\"><span id='cpProdCartCount'>" + thisSPN + "<\/span>" + prodcartButtonItalicVar + prodcartButtonValueVar + "<\/div>";
			startHTML = prodcartButtonHTMLStart + prodcartButtonRender + prodcartButtonHTMLEnd;
		}
	}
	totalHTML += startHTML;
	if (contentHTML.length != -1) {
		var allButtonTagStart = contentHTML.indexOf("<!--ALLBUTTON");
		if (allButtonTagStart != -1) {
			var allButtonTagEnd = contentHTML.indexOf(">",allButtonTagStart);
			var allButtonTagStrip = contentHTML.substring(allButtonTagStart,(allButtonTagEnd+1));
			var allButtonHTMLStart = contentHTML.substr(0,allButtonTagStart);
			var allButtonHTMLEnd = contentHTML.substr((allButtonTagEnd+1));
			var allButtonRender = "";
			var allButtonValueStart = allButtonTagStrip.indexOf(" VALUE=");
			if (allButtonValueStart != -1) {
				var allButtonValueEnd = allButtonTagStrip.indexOf("]",allButtonValueStart);
				allButtonValueVar = allButtonTagStrip.substring((allButtonValueStart+8),(allButtonValueEnd));
			}
			else {
				allButtonValueVar = "SELECT ALL";
			}
			var allButtonItalicStart = allButtonTagStrip.indexOf(" FNTAW=");
			if (allButtonItalicStart != -1) {
				var allButtonItalicEnd = allButtonTagStrip.indexOf("]",allButtonItalicStart);
				var allButtonItalicVar = "<i class='fa " + allButtonTagStrip.substring((allButtonItalicStart+8),(allButtonItalicEnd)) + "'><\/i>";
			}
			else {
				var allButtonItalicVar = "";
			}
			allButtonRender = "<div id='cpAllButton' class='cp_all_button cp_all_button_off'";
			if (hoverState==1) {
				allButtonRender += " onmouseover='genericButtonOver(\"cp_all_button\",\"cp_all_button\");' onfocus='genericButtonOver(\"cp_all_button\",\"cp_all_button\");' onmouseout='genericButtonOut(\"cp_all_button\",\"cp_all_button\");' onblur='genericButtonOut(\"cp_all_button\",\"cp_all_button\");'";
			}
			allButtonRender += " onclick='controlPanelAllCart();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){controlPanelAllCart();}' tabindex='0' title=\"" + allButtonValueVar + "\">" + allButtonItalicVar + allButtonValueVar + "<\/div>";
			contentHTML = allButtonHTMLStart + allButtonRender + allButtonHTMLEnd;
		}
		var productListTagStart = contentHTML.indexOf("<!--PRODUCTLIST");
		if (productListTagStart != -1) {
			var productListTagEnd = contentHTML.indexOf(">",productListTagStart);
			var productListTagStrip = contentHTML.substring(productListTagStart,(productListTagEnd+1));
			var productListHTMLStart = contentHTML.substr(0,productListTagStart);
			var productListHTMLEnd = contentHTML.substr((productListTagEnd+1));
			var productListDisplayStart = productListTagStrip.indexOf(" DISPLAY=");
			if (productListDisplayStart != -1) {
				var productListDisplayEnd = productListTagStrip.indexOf("]",productListDisplayStart);
				cpProdDispVal = productListTagStrip.substring((productListDisplayStart+10),(productListDisplayEnd));
			}
			contentHTML = productListHTMLStart + "<div id='cpProductListShell' class='cp_product_list_shell'><\/div>" + productListHTMLEnd;
		}
		var labelListTagStart = contentHTML.indexOf("<!--LABELLIST");
		if (labelListTagStart != -1) {
			var labelListTagEnd = contentHTML.indexOf(">",labelListTagStart);
			var labelListTagStrip = contentHTML.substring(labelListTagStart,(labelListTagEnd+1));
			var labelListHTMLStart = contentHTML.substr(0,labelListTagStart);
			var labelListHTMLEnd = contentHTML.substr((labelListTagEnd+1));
			var labelListDisplayStart = labelListTagStrip.indexOf(" DISPLAY=");
			if (labelListDisplayStart != -1) {
				var labelListDisplayEnd = labelListTagStrip.indexOf("]",labelListDisplayStart);
				cpLabelDispVal = labelListTagStrip.substring((labelListDisplayStart+10),(labelListDisplayEnd));
			}
			contentHTML = labelListHTMLStart + "<div id='cpLabelListShell' class='cp_label_list_shell'><\/div>" + labelListHTMLEnd;
		}
		var categoryListTagStart = contentHTML.indexOf("<!--CATEGORYLIST");
		if (categoryListTagStart != -1) {
			var categoryListTagEnd = contentHTML.indexOf(">",categoryListTagStart);
			var categoryListTagStrip = contentHTML.substring(categoryListTagStart,(categoryListTagEnd+1));
			var categoryListHTMLStart = contentHTML.substr(0,categoryListTagStart);
			var categoryListHTMLEnd = contentHTML.substr((categoryListTagEnd+1));
			var categoryListDisplayStart = categoryListTagStrip.indexOf(" DISPLAY=");
			if (categoryListDisplayStart != -1) {
				var categoryListDisplayEnd = categoryListTagStrip.indexOf("]",categoryListDisplayStart);
				cpCatDispVal = categoryListTagStrip.substring((categoryListDisplayStart+10),(categoryListDisplayEnd));
			}
			var categoryListModalStart = categoryListTagStrip.indexOf(" MODAL");
			if (categoryListModalStart != -1) {
				categoryModal = 1;
			}
			if (cpModals == 1) {categoryModal = 1;}else if (cpModals == 2) {categoryModal = 0;}
			contentHTML = categoryListHTMLStart + "<div id='cpCategoryListShell' class='cp_category_list_shell'><\/div>" + categoryListHTMLEnd;
		}
		var groupListTagStart = contentHTML.indexOf("<!--GROUPLIST");
		if (groupListTagStart != -1) {
			var groupListTagEnd = contentHTML.indexOf(">",groupListTagStart);
			var groupListTagStrip = contentHTML.substring(groupListTagStart,(groupListTagEnd+1));
			var groupListHTMLStart = contentHTML.substr(0,groupListTagStart);
			var groupListHTMLEnd = contentHTML.substr((groupListTagEnd+1));
			var groupListDisplayStart = groupListTagStrip.indexOf(" DISPLAY=");
			if (groupListDisplayStart != -1) {
				var groupListDisplayEnd = groupListTagStrip.indexOf("]",groupListDisplayStart);
				cpCatDispVal = groupListTagStrip.substring((groupListDisplayStart+10),(groupListDisplayEnd));
			}
			var groupListModalStart = groupListTagStrip.indexOf(" MODAL");
			if (groupListModalStart != -1) {
				groupModal = 1;
			}
			if (cpModals == 1) {groupModal = 1;}else if (cpModals == 2) {groupModal = 0;}
			contentHTML = groupListHTMLStart + "<div id='cpGroupListShell' class='cp_group_list_shell'><\/div>" + groupListHTMLEnd;
		}
	}
	totalHTML += "<div id='cpContentAreaShell' class='cp_content_area_shell'>" + contentHTML + "<\/div>";
	if (cartHTML.length != -1) {
		var prodCountNumTagStart = cartHTML.indexOf("<!--PRODCOUNT");
		if (prodCountNumTagStart != -1) {
			var prodCountNumTagEnd = cartHTML.indexOf(">",prodCountNumTagStart);
			var prodCountNumTagStrip = cartHTML.substring(prodCountNumTagStart,(prodCountNumTagEnd+1));
			var prodCountNumHTMLStart = cartHTML.substr(0,prodCountNumTagStart);
			var prodCountNumHTMLEnd = cartHTML.substr((prodCountNumTagEnd+1));
			var panel2ProdCount = 0;
			var prodCountSingularStart = prodCountNumTagStrip.indexOf(" SINGULAR=");
			if (prodCountSingularStart != -1) {
				var prodCountSingularEnd = prodCountNumTagStrip.indexOf("]",prodCountSingularStart);
				cpProdCountSingularVar = " " + prodCountNumTagStrip.substring((prodCountSingularStart+11),(prodCountSingularEnd));
			}
			var prodCountPluralStart = prodCountNumTagStrip.indexOf(" PLURAL=");
			if (prodCountPluralStart != -1) {
				var prodCountPluralEnd = prodCountNumTagStrip.indexOf("]",prodCountPluralStart);
				cpProdCountPluralVar = " " + prodCountNumTagStrip.substring((prodCountPluralStart+9),(prodCountPluralEnd));
			}
			if (prodCartArray.length == 1) {
				var thisSPT = cpProdCountSingularVar;
			}
			else {
				var thisSPT = cpProdCountPluralVar;
			}
			if (prodCartArray.length == 0) {
				var thisSPN = "All";
			}
			else {
				var thisSPN = prodCartArray.length;
			}
			cartHTML = prodCountNumHTMLStart + "<span id='cpProdCountNumHolder'><span id='cpProdCountNum'>" + thisSPN + "<\/span><span id='cpProdCountText'>" +  thisSPT + "<\/span><\/span>" + prodCountNumHTMLEnd;
		}
		var clearButtonTagStart = cartHTML.indexOf("<!--CLEARBUTTON");
		if (clearButtonTagStart != -1) {
			var clearButtonTagEnd = cartHTML.indexOf(">",clearButtonTagStart);
			var clearButtonTagStrip = cartHTML.substring(clearButtonTagStart,(clearButtonTagEnd+1));
			var clearButtonHTMLStart = cartHTML.substr(0,clearButtonTagStart);
			var clearButtonHTMLEnd = cartHTML.substr((clearButtonTagEnd+1));
			var clearButtonRender = "";
			var clearButtonValueStart = clearButtonTagStrip.indexOf(" VALUE=");
			if (clearButtonValueStart != -1) {
				var clearButtonValueEnd = clearButtonTagStrip.indexOf("]",clearButtonValueStart);
				clearButtonValueVar = clearButtonTagStrip.substring((clearButtonValueStart+8),(clearButtonValueEnd));
			}
			else {
				clearButtonValueVar = "CLEAR ALL";
			}
			var clearButtonItalicStart = clearButtonTagStrip.indexOf(" FNTAW=");
			if (clearButtonItalicStart != -1) {
				var clearButtonItalicEnd = clearButtonTagStrip.indexOf("]",clearButtonItalicStart);
				var clearButtonItalicVar = "<i class='fa " + clearButtonTagStrip.substring((clearButtonItalicStart+8),(clearButtonItalicEnd)) + "'><\/i>";
			}
			else {
				var clearButtonItalicVar = "";
			}
			clearButtonRender = "<div id='cpClearButton' class='cp_clear_button cp_clear_button_off'";
			if (hoverState==1) {
				clearButtonRender += " onmouseover='genericButtonOver(\"cp_clear_button\",\"cp_clear_button\");' onfocus='genericButtonOver(\"cp_clear_button\",\"cp_clear_button\");' onmouseout='genericButtonOut(\"cp_clear_button\",\"cp_clear_button\");' onblur='genericButtonOut(\"cp_clear_button\",\"cp_clear_button\");'";
			}
			clearButtonRender += " onclick='controlPanelClearCart();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){controlPanelClearCart();}' tabindex='0' title=\"" + clearButtonValueVar + "\">" + clearButtonItalicVar + clearButtonValueVar + "<\/div>";
			cartHTML = clearButtonHTMLStart + clearButtonRender + clearButtonHTMLEnd;
		}
		var shoppingCartTagStart = cartHTML.indexOf("<!--SHOPPINGCART");
		if (shoppingCartTagStart != -1) {
			var shoppingCartTagEnd = cartHTML.indexOf(">",shoppingCartTagStart);
			var shoppingCartTagStrip = cartHTML.substring(shoppingCartTagStart,(shoppingCartTagEnd+1));
			var shoppingCartHTMLStart = cartHTML.substr(0,shoppingCartTagStart);
			var shoppingCartHTMLEnd = cartHTML.substr((shoppingCartTagEnd+1));
			cartHTML = shoppingCartHTMLStart + "<div id='cpShoppingCartShell' class='cp_shopping_cart_shell'><\/div>" + shoppingCartHTMLEnd;
		}
	}
	totalHTML += "<div id='cpCartAreaShell' class='cp_cart_area_shell' style='display:none;'>" + cartHTML + "<\/div>";
	totalHTML += endHTML;
	document.getElementById('cpDivFront').innerHTML = totalHTML;
	cpWritten = 1;
	if (famcatMenuTagStart != -1) {
		$("#cssmenu").menumaker({
			title: "Select Products",
			format: "multitoggle",
			id: "_base"
		});
		$("#cssmenu_two").menumaker({
			title: "Select Products",
			format: "multitoggle",
			id: "_mobile"
		});
		if(gLog==1){console.log("FAMCATMENU - Call ");}
	}
	if (document.getElementById('cpProductListShell')) {
		controlPanelWriteProducts();
	}
	if (document.getElementById('cpLabelListShell')) {
		controlPanelWriteLabels();
	}
	if (document.getElementById('cpCategoryListShell')) {
		controlPanelWriteCategories();
	}
	if (document.getElementById('cpGroupListShell')) {
		controlPanelWriteGroups();
	}
	controlPanelWriteCart();
	if (thenShow) {
		controlPanelOpen("panel2");
		p2Connect();
	}
}
function controlPanelWriteCategories() {
	if (document.getElementById('cpCategoryListShell')) {
		var catThing = autotextIt(p0TemplateSet.cpEmptyDiv,"cpEmpty");
		var categoryHTML = "<span id='cpEmptyShell' style='display:none;'>" + catThing + "<\/span>";
		var catModalTest = p0TemplateSet.cpCategoryDiv.indexOf("<!--CATMODAL");
		if(gLog==1){console.log("controlPanelWriteCategories - catModalTest: " + catModalTest);}
		for (y=0; y<catArray.length; y++) {
			var categoryHTMLTest = autotextIt(p0TemplateSet.cpCategoryDiv,"cpCategory");
			var catDiscTagStart = categoryHTMLTest.indexOf("<!--HIGHPROD");
			if (catDiscTagStart != -1) {
				var catDiscTagEnd = categoryHTMLTest.indexOf(">",catDiscTagStart);
				var catDiscTagStrip = categoryHTMLTest.substring(catDiscTagStart,(catDiscTagEnd+1));
				var catDiscHTMLStart = categoryHTMLTest.substr(0,catDiscTagStart);
				var catDiscHTMLEnd = categoryHTMLTest.substr((catDiscTagEnd+1));
				var catDiscWrite = "";
				var discTestArr = [];
				for (cdc=0; cdc<prodDisplayArray.length; cdc++) {
					if (prodDisplayArray[cdc][8] == catArray[y][0] && prodDisplayArray[cdc][6] != 1) {
						discTestArr.push(prodDisplayArray[cdc][6]);
					}
				}
				if (discTestArr.length != 0) {
					var discFoundArr = discTestArr.filter( onlyUnique );
					if (discFoundArr.length == 1) {
						catDiscWrite = "<div class='global_" + hpArr[discFoundArr[0]][1] + " cpCategory_" + hpArr[discFoundArr[0]][1] + "'>" + hpArr[discFoundArr[0]][0] + "<\/div>";
					}
				}
				categoryHTMLTest = catDiscHTMLStart + catDiscWrite + catDiscHTMLEnd;
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
					var catNameValueVal = catArray[y][1];
				}
				var replaceImgTest = catNameTagStrip.indexOf(" REPLACE");
				if (replaceImgTest != -1) {
					if (categoryModal == 1) {
						var replaceImgMouseOver = "cpCatModalImgReplace(1," + catArray[y][0] + ");";
						var replaceImgMouseOut = "cpCatModalImgReplace(2," + catArray[y][0] + ");";
						var replaceImgMouseClass = " img_replace_active";
					}
					else {
						var replaceImgMouseOver = "cpCatImgReplace(1," + catArray[y][0] + ");";
						var replaceImgMouseOut = "cpCatImgReplace(2," + catArray[y][0] + ");";
						var replaceImgMouseClass = " img_replace_active";
					}
				}
				else {
					var replaceImgMouseOver = "";
					var replaceImgMouseOut = "";
					var replaceImgMouseClass = "";
				}
				if (catArray[y][6] == 1 || (catModalTest != -1 && catArray[y][9] == 1)) {
					var catNameSelVal = " cp_category_name_on";
				}
				else {
					var catNameSelVal = " cp_category_name_off";
				}
				var catNameTagLink = "";
				if (categoryNoSelect == 0) {
					if (categoryModal == 1) {
						var catNameOnClickVar = " onclick='cpCatModalWrite(" + y + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){cpCatModalWrite(" + y + ");}'";
					}
					else {
						var catNameOnClickVar = " onclick='cpCatSelectProducts(" + catArray[y][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){cpCatSelectProducts(" + catArray[y][0] + ");}'";
					}
				}
				else {
					var catNameOnClickVar = " onclick='" + catActivateLinkStart + catArray[y][0] + catActivateLinkEnd + "return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + catActivateLinkStart + catArray[y][0] + catActivateLinkEnd + "return false;}'";
				}
				catNameTagLink = " style='cursor:pointer;'" + catNameOnClickVar;
				if (hoverState==1) {
					catNameTagLink += " onmouseover='cpCatMouseOver(\"cpCategoryName" + catArray[y][0] + "\", \"cp_category_name\");" + replaceImgMouseOver + "' onfocus='cpCatMouseOver(\"cpCategoryName" + catArray[y][0] + "\", \"cp_category_name\");" + replaceImgMouseOver + "' onmouseout='cpCatMouseOut(\"cpCategoryName" + catArray[y][0] + "\", \"cp_category_name\");" + replaceImgMouseOut + "' onblur='cpCatMouseOut(\"cpCategoryName" + catArray[y][0] + "\", \"cp_category_name\");" + replaceImgMouseOut + "'";
				}
				categoryHTMLTest = baseCatNameHTMLStart + "<a name='cpCategoryAnchor" + catArray[y][0] + "' id='cpCategoryAnchor" + catArray[y][0] + "'><\/a><div id='cpCategoryName" + catArray[y][0] + "' class='cp_category_name_" + catArray[y][0] + " cp_category_name" + replaceImgMouseClass + catNameSelVal + "'" + catNameTagLink + " tabindex='0' title=\"" + catNameValueVal + "\">" + catNameValueVal + "<\/div>" + baseCatNameHTMLEnd;
			}
			var catBigImgTagStart = categoryHTMLTest.indexOf("<!--CATBIGIMG");
			if (catBigImgTagStart != -1) {
				var catBigImgTagEnd = categoryHTMLTest.indexOf(">",catBigImgTagStart);
				var catBigImgTagStrip = categoryHTMLTest.substring(catBigImgTagStart,(catBigImgTagEnd+1));
				var baseCatBigImgHTMLStart = categoryHTMLTest.substr(0,catBigImgTagStart);
				var baseCatBigImgHTMLEnd = categoryHTMLTest.substr((catBigImgTagEnd+1));
				var replaceBigImgRender = "";
				var replaceBigImgPreset = catArray[y][3];
				var replaceBigImgHidden = " style='display:none;'";
				var replaceBigImgBackClass = "off";
				var replaceBigImgTest = catBigImgTagStrip.indexOf(" REPLACE");
				if (replaceSmImgTest != -1) {
					if (categoryModal == 1) {
						var replaceBigImgMouseOver = "cpCatModalImgReplace(1," + catArray[y][0] + ");";
						var replaceBigImgMouseOut = "cpCatModalImgReplace(2," + catArray[y][0] + ");";
						var replaceBigImgMouseClass = " img_replace_active";
					}
					else {
						var replaceBigImgMouseOver = "cpCatImgReplace(1," + catArray[y][0] + ");";
						var replaceBigImgMouseOut = "cpCatImgReplace(2," + catArray[y][0] + ");";
						var replaceBigImgMouseClass = " img_replace_active";
					}
				}
				else {
					var replaceBigImgMouseOver = "";
					var replaceBigImgMouseClass = "";
					var replaceBigImgMouseClass = "";
				}
				if (categoryNoSelect == 0) {
					if (categoryModal == 1) {
						var catBigImgOnClickVar = " onclick='cpCatModalWrite(" + y + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){cpCatModalWrite(" + y + ");}'";
					}
					else {
						var catBigImgOnClickVar = " onclick='cpCatSelectProducts(" + catArray[y][0] + ");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){cpCatSelectProducts(" + catArray[y][0] + ");return false;}'";
					}
				}
				else {
					var catBigImgOnClickVar = " onclick='" + catActivateLinkStart + catArray[y][0] + catActivateLinkEnd + "return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + catActivateLinkStart + catArray[y][0] + catActivateLinkEnd + "return false;}'";
				}
				var postImgBig = " style='background-image:url(\"" + clientImgBase + catArray[y][3] + "\");'";
				if (catArray[y][6] != 0 || (catModalTest != -1 && catArray[y][9] == 1)) {
					replaceBigImgHidden = "";
					replaceBigImgBackClass = "on";
				}
				var catBigImgTagLinkStart = "";
				var catBigImgTagLinkEnd = "";
				catBigImgTagLinkStart += "<a href=''" + catBigImgOnClickVar;
				if (hoverState==1) {
					catBigImgTagLinkStart += " onmouseover='cpCatMouseOver(\"cpCategoryName" + catArray[y][0] + "\", \"cp_category_name\");" + replaceBigImgMouseOver + "' onfocus='cpCatMouseOver(\"cpCategoryName" + catArray[y][0] + "\", \"cp_category_name\");" + replaceBigImgMouseOver + "' onmouseout='cpCatMouseOut(\"cpCategoryName" + catArray[y][0] + "\", \"cp_category_name\");" + replaceBigImgMouseOut + "' onblur='cpCatMouseOut(\"cpCategoryName" + catArray[y][0] + "\", \"cp_category_name\");" + replaceBigImgMouseOut + "'";
				}
				catBigImgTagLinkStart += " tabindex='0' title=\"" + catArray[y][1] + "\">";
				catBigImgTagLinkEnd = "<\/a>";
				replaceBigImgRender += "<div title=\"" + catArray[y][1] + "\" id='cpCategoryBigImgDivShell" + catArray[y][0] + "' class='cp_category_big_img_div_shell cp_category_big_img_div_shell_" + catArray[y][0] + "'" + catBigImgOnClickVar;
				if (hoverState==1) {
					replaceBigImgRender += " onmouseover='cpCatMouseOver(\"cpCategoryName" + catArray[y][0] + "\", \"cp_category_name\");" + replaceBigImgMouseOver + "' onfocus='cpCatMouseOver(\"cpCategoryName" + catArray[y][0] + "\", \"cp_category_name\");" + replaceBigImgMouseOver + "'";
				}
				replaceBigImgRender += "><div id='cpCategoryBigImgDivBack" + catArray[y][0] + "' class='cp_category_big_img_div_back cp_category_big_img_div_back_" + replaceBigImgBackClass + " cp_category_big_img_div_back_" + catArray[y][0] + replaceBigImgMouseClass +"'" + postImgBig + "><\/div><div id='cpCategoryBigImgDivOver" + catArray[y][0] + "' class='cp_category_big_img_div_over cp_category_big_img_div_over_" + catArray[y][0] + "'" + replaceBigImgHidden;
				if (hoverState==1) {
					replaceBigImgRender += " onmouseout='cpCatMouseOut(\"cpCategoryName" + catArray[y][0] + "\", \"cp_category_name\");" + replaceBigImgMouseOut + "' onblur='cpCatMouseOut(\"cpCategoryName" + catArray[y][0] + "\", \"cp_category_name\");" + replaceBigImgMouseOut + "'";
				}
				replaceBigImgRender += ">&nbsp;<\/div><\/div>";
				categoryHTMLTest = baseCatBigImgHTMLStart + replaceBigImgRender + baseCatBigImgHTMLEnd;
			}
			var catSmImgTagStart = categoryHTMLTest.indexOf("<!--CATSMIMG");
			if (catSmImgTagStart != -1) {
				var catSmImgTagEnd = categoryHTMLTest.indexOf(">",catSmImgTagStart);
				var catSmImgTagStrip = categoryHTMLTest.substring(catSmImgTagStart,(catSmImgTagEnd+1));
				var baseCatSmImgHTMLStart = categoryHTMLTest.substr(0,catSmImgTagStart);
				var baseCatSmImgHTMLEnd = categoryHTMLTest.substr((catSmImgTagEnd+1));
				var catSmImgTagRender = "";
				var replaceSmImgPreset = catArray[y][4];
				var replaceSmImgHidden = " style='display:none;'";
				var replaceSmImgBackClass = "off";
				var replaceSmImgTest = catSmImgTagStrip.indexOf(" REPLACE");
				if (replaceSmImgTest != -1) {
					if (categoryModal == 1) {
						var replaceSmImgMouseOver = "cpCatModalImgReplace(1," + catArray[y][0] + ");";
						var replaceSmImgMouseOut = "cpCatModalImgReplace(2," + catArray[y][0] + ");";
						var replaceSmImgMouseClass = " img_replace_active";
					}
					else {
						var replaceSmImgMouseOver = "cpCatImgReplace(1," + catArray[y][0] + ");";
						var replaceSmImgMouseOut = "cpCatImgReplace(2," + catArray[y][0] + ");";
						var replaceSmImgMouseClass = " img_replace_active";
					}
				}
				else {
					var replaceSmImgMouseOver = "";
					var replaceSmImgMouseOut = "";
					var replaceSmImgMouseClass = "";
				}
				if (categoryNoSelect == 0) {
					if (categoryModal == 1) {
						var catSmImgOnClickVar = " onclick='cpCatModalWrite(" + y + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){cpCatModalWrite(" + y + ");}'";
					}
					else {
						var catSmImgOnClickVar = " onclick='cpCatSelectProducts(" + catArray[y][0] + ");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){cpCatSelectProducts(" + catArray[y][0] + ");return false;}'";
					}
				}
				else {
					var catSmImgOnClickVar = " onclick='" + catActivateLinkStart + catArray[y][0] + catActivateLinkEnd + "return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + catActivateLinkStart + catArray[y][0] + catActivateLinkEnd + "return false;}'";
				}
				var postImgBig = " style='background-image:url(\"" + clientImgBase + catArray[y][4] + "\");'";
				if (catArray[y][6] != 0 || (catModalTest != -1 && catArray[y][9] == 1)) {
					replaceSmImgHidden = "";
					replaceSmImgBackClass = "on";
				}
				var catSmImgTagLinkStart = "";
				var catSmImgTagLinkEnd = "";
				catSmImgTagLinkStart = "<a href=''" + catSmImgOnClickVar;
				if (hoverState==1) {
					catSmImgTagLinkStart += " onmouseover='cpCatMouseOver(\"cpCategoryName" + catArray[y][0] + "\", \"cp_category_name\");" + replaceSmImgMouseOver + "' onfocus='cpCatMouseOver(\"cpCategoryName" + catArray[y][0] + "\", \"cp_category_name\");" + replaceSmImgMouseOver + "' onmouseout='cpCatMouseOut(\"cpCategoryName" + catArray[y][0] + "\", \"cp_category_name\");" + replaceSmImgMouseOut + "' onblur='cpCatMouseOut(\"cpCategoryName" + catArray[y][0] + "\", \"cp_category_name\");" + replaceSmImgMouseOut + "'";
				}
				catSmImgTagLinkStart += " tabindex='0' title=\"" + catArray[y][1] + "\">";
				catSmImgTagLinkEnd = "<\/a>";
				catSmImgTagRender = "<div title=\"" + catArray[y][1] + "\" id='cpCategorySmImgDivShell" + catArray[y][0] + "' class='cp_category_sm_img_div_shell cp_category_sm_img_div_shell_" + catArray[y][0] + "'" + catSmImgOnClickVar;
				if (hoverState==1) {
					catSmImgTagRender += " onmouseover='cpCatMouseOver(\"cpCategoryName" + catArray[y][0] + "\", \"cp_category_name\");" + replaceSmImgMouseOver + "' onfocus='cpCatMouseOver(\"cpCategoryName" + catArray[y][0] + "\", \"cp_category_name\");" + replaceSmImgMouseOver + "'";
				}
				catSmImgTagRender += "><div id='cpCategorySmImgDivBack" + catArray[y][0] + "' class='cp_category_sm_img_div_back cp_category_sm_img_div_back_" + replaceSmImgBackClass + " cp_category_sm_img_div_back_" + catArray[y][0] + replaceSmImgMouseClass +"'" + postImgBig + "><\/div><div id='cpCategorySmImgDivOver" + catArray[y][0] + "' class='cp_category_sm_img_div_over cp_category_sm_img_div_over_" + catArray[y][0] +"'" + replaceSmImgHidden;
				if (hoverState==1) {
					catSmImgTagRender += " onmouseout='cpCatMouseOut(\"cpCategoryName" + catArray[y][0] + "\", \"cp_category_name\");" + replaceSmImgMouseOut + "' onblur='cpCatMouseOut(\"cpCategoryName" + catArray[y][0] + "\", \"cp_category_name\");" + replaceSmImgMouseOut + "'";
				}
				catSmImgTagRender += ">&nbsp;<\/div><\/div>";
				categoryHTMLTest = baseCatSmImgHTMLStart + catSmImgTagRender + baseCatSmImgHTMLEnd;
			}
			var catModalTagStart = categoryHTMLTest.indexOf("<!--CATMODAL");
			if (catModalTagStart != -1) {
				var catModalTagEnd = categoryHTMLTest.indexOf(">",catModalTagStart);
				var catModalTagStrip = categoryHTMLTest.substring(catModalTagStart,(catModalTagEnd+1));
				var catModalHTMLStart = categoryHTMLTest.substr(0,catModalTagStart);
				var catModalHTMLEnd = categoryHTMLTest.substr((catModalTagEnd+1));
				var catProdWrite = "<div id='cpCategoryModalShell" + catArray[y][0] + "' class='cp_category_modal_shell cp_category_modal_shell_" + catArray[y][0] + " panel_close_me' style='display:none;'><\/div><div style='display:none;'>";
				for (z=0; z<prodDisplayArray.length; z++) {
					if (prodDisplayArray[z][8] == catArray[y][0]) {
						catProdWrite += "<div id='cpProductName" + prodDisplayArray[z][0] + "' style='display:none;'>&nbsp;<\/div>";
					}
				}
				catProdWrite += "<\/div>";
				categoryHTMLTest = catModalHTMLStart + catProdWrite + catModalHTMLEnd;
			}
			else {
				var catProdWrite = "<div style='display:none;'>";
				for (z=0; z<prodDisplayArray.length; z++) {
					if (prodDisplayArray[z][8] == catArray[y][0]) {
						catProdWrite += "<div id='cpProductName" + prodDisplayArray[z][0] + "' style='display:none;'>&nbsp;<\/div>";
					}
				}
				catProdWrite += "<\/div>";
				categoryHTMLTest += catProdWrite;
			}
			var labelClasses = "";
			for (r=0; r<labelArray.length; r++) {
				var foundThisLabel = 0;
				for (t=0; t<prodLabelArray.length; t++) {
					for (b=0; b<prodDisplayArray.length; b++) {
						if (prodLabelArray[t][1] == prodDisplayArray[b][0] && prodLabelArray[t][2] == labelArray[r][0] && prodDisplayArray[b][8] == catArray[y][0]) {
							labelClasses += " cp_category_label_" + labelArray[r][0];
							foundThisLabel = 1;
							break;
						}
					}
					if (foundThisLabel == 1) {
						break;
					}
				}
			}
			categoryHTML += "<div id='cpCategoryItem" + catArray[y][0] + "' class='cp_category_item_shell cp_category_item_" + catArray[y][2] + labelClasses + "'>" + categoryHTMLTest + "<\/div>";
		}
		if(gLog==1){console.log("cpCategoryListShell - POPULATE");}
		document.getElementById('cpCategoryListShell').innerHTML = categoryHTML;
		cpCHW = setInterval(cpCatHoverWait, 1000);
	}
}
function controlPanelWriteGroups() {
	if (document.getElementById('cpGroupListShell')) {
		var groupThing = autotextIt(p0TemplateSet.cpEmptyDiv,"cpEmpty");
		var groupHTML = "<span id='cpEmptyShell' style='display:none;'>" + groupThing + "<\/span>";
		var groupModalTest = p0TemplateSet.cpGroupDiv.indexOf("<!--GROUPMODAL");
		if(gLog==1){console.log("controlPanelWriteGroups - groupModalTest: " + groupModalTest);}
		for (y=0; y<prodGroupArray.length; y++) {
			var groupHTMLTest = autotextIt(p0TemplateSet.cpGroupDiv,"cpGroup");
			var pgpArr = prodGroupArray[y][7].split(",");
			var groupDiscTagStart = groupHTMLTest.indexOf("<!--HIGHPROD");
			if (groupDiscTagStart != -1) {
				var groupDiscTagEnd = groupHTMLTest.indexOf(">",groupDiscTagStart);
				var groupDiscTagStrip = groupHTMLTest.substring(groupDiscTagStart,(groupDiscTagEnd+1));
				var groupDiscHTMLStart = groupHTMLTest.substr(0,groupDiscTagStart);
				var groupDiscHTMLEnd = groupHTMLTest.substr((groupDiscTagEnd+1));
				var groupDiscWrite = "";
				var discTestArr = [];
				var pgpArr = prodGroupArray[y][7].split(",");
				for (cdc=0; cdc<prodDisplayArray.length; cdc++) {
					for (pgp=0; pgp<pgpArr.length; pgp++) {
						if (prodDisplayArray[cdc][0] == pgpArr[pgp] && prodDisplayArray[cdc][6] != 1) {
							discTestArr.push(prodDisplayArray[cdc][6]);
							break;
						}
					}
				}
				if (discTestArr.length != 0) {
					var discFoundArr = discTestArr.filter( onlyUnique );
					if (discFoundArr.length == 1) {
						groupDiscWrite = "<div class='global_" + hpArr[discFoundArr[0]][1] + " cpGroup_" + hpArr[discFoundArr[0]][1] + "'>" + hpArr[discFoundArr[0]][0] + "<\/div>";
					}
				}
				groupHTMLTest = groupDiscHTMLStart + groupDiscWrite + groupDiscHTMLEnd;
			}
			var groupNameTagStart = groupHTMLTest.indexOf("<!--GROUPNAME");
			if (groupNameTagStart != -1) {
				var groupNameTagEnd = groupHTMLTest.indexOf(">",groupNameTagStart);
				var groupNameTagStrip = groupHTMLTest.substring(groupNameTagStart,(groupNameTagEnd+1));
				var baseGroupNameHTMLStart = groupHTMLTest.substr(0,groupNameTagStart);
				var baseGroupNameHTMLEnd = groupHTMLTest.substr((groupNameTagEnd+1));
				var groupNameValueStart = groupNameTagStrip.indexOf(" VALUE=");
				if (groupNameValueStart != -1) {
					var groupNameValueEnd = groupNameTagStrip.indexOf("]", groupNameValueStart);
					var groupNameValueVal = groupNameTagStrip.substring((groupNameValueStart+8),(groupNameValueEnd));
				}
				else {
					var groupNameValueVal = prodGroupArray[y][1];
				}
				var replaceImgTest = groupNameTagStrip.indexOf(" REPLACE");
				if (replaceImgTest != -1) {
					if (groupModal == 1) {
						var replaceImgMouseOver = "cpGroupModalImgReplace(1," + prodGroupArray[y][0] + ");";
						var replaceImgMouseOut = "cpGroupModalImgReplace(2," + prodGroupArray[y][0] + ");";
						var replaceImgMouseClass = " img_replace_active";
					}
					else {
						var replaceImgMouseOver = "cpGroupImgReplace(1," + prodGroupArray[y][0] + ");";
						var replaceImgMouseOut = "cpGroupImgReplace(2," + prodGroupArray[y][0] + ");";
						var replaceImgMouseClass = " img_replace_active";
					}
				}
				else {
					var replaceImgMouseOver = "";
					var replaceImgMouseOut = "";
					var replaceImgMouseClass = "";
				}
				if (prodGroupArray[y][6] == 1) {
					var groupNameSelVal = " cp_group_name_on";
				}
				else {
					var groupNameSelVal = " cp_group_name_off";
				}
				var groupNameTagLink = "";
				if (groupNoSelect == 0) {
					if (groupModal == 1) {
						var groupNameOnClickVar = " onclick='cpGroupModalWrite(" + y + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){cpGroupModalWrite(" + y + ");}'";
					}
					else {
						var groupNameOnClickVar = " onclick='cpGroupSelectProducts(" + prodGroupArray[y][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){cpGroupSelectProducts(" + prodGroupArray[y][0] + ");}'";
					}
				}
				else {
					var groupNameOnClickVar = " onclick='" + groupActivateLinkStart + prodGroupArray[y][0] + groupActivateLinkEnd + "return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + groupActivateLinkStart + prodGroupArray[y][0] + groupActivateLinkEnd + "return false;}'";
				}
				groupNameTagLink = " style='cursor:pointer;'" + groupNameOnClickVar;
				if (hoverState==1) {
					groupNameTagLink += " onmouseover='cpGroupMouseOver(\"cpGroupName" + prodGroupArray[y][0] + "\", \"cp_group_name\");" + replaceImgMouseOver + "' onfocus='cpGroupMouseOver(\"cpGroupName" + prodGroupArray[y][0] + "\", \"cp_group_name\");" + replaceImgMouseOver + "' onmouseout='cpGroupMouseOut(\"cpGroupName" + prodGroupArray[y][0] + "\", \"cp_group_name\");" + replaceImgMouseOut + "' onblur='cpGroupMouseOut(\"cpGroupName" + prodGroupArray[y][0] + "\", \"cp_group_name\");" + replaceImgMouseOut + "'";
				}
				groupHTMLTest = baseGroupNameHTMLStart + "<a name='cpGroupAnchor" + prodGroupArray[y][0] + "' id='cpGroupAnchor" + prodGroupArray[y][0] + "'><\/a><div id='cpGroupName" + prodGroupArray[y][0] + "' class='cp_group_name_" + prodGroupArray[y][0] + " cp_group_name" + replaceImgMouseClass + groupNameSelVal + "'" + groupNameTagLink + " tabindex='0' title=\"" + groupNameValueVal + "\">" + groupNameValueVal + "<\/div>" + baseGroupNameHTMLEnd;
			}
			var groupBigImgTagStart = groupHTMLTest.indexOf("<!--GROUPBIGIMG");
			if (groupBigImgTagStart != -1) {
				var groupBigImgTagEnd = groupHTMLTest.indexOf(">",groupBigImgTagStart);
				var groupBigImgTagStrip = groupHTMLTest.substring(groupBigImgTagStart,(groupBigImgTagEnd+1));
				var baseGroupBigImgHTMLStart = groupHTMLTest.substr(0,groupBigImgTagStart);
				var baseGroupBigImgHTMLEnd = groupHTMLTest.substr((groupBigImgTagEnd+1));
				var replaceBigImgRender = "";
				var replaceBigImgPreset = prodGroupArray[y][3];
				var replaceBigImgHidden = " style='display:none;'";
				var replaceBigImgBackClass = "off";
				var replaceBigImgTest = groupBigImgTagStrip.indexOf(" REPLACE");
				if (replaceSmImgTest != -1) {
					if (groupModal == 1) {
						var replaceBigImgMouseOver = "cpGroupModalImgReplace(1," + prodGroupArray[y][0] + ");";
						var replaceBigImgMouseOut = "cpGroupModalImgReplace(2," + prodGroupArray[y][0] + ");";
						var replaceBigImgMouseClass = " img_replace_active";
					}
					else {
						var replaceBigImgMouseOver = "cpGroupImgReplace(1," + prodGroupArray[y][0] + ");";
						var replaceBigImgMouseOut = "cpGroupImgReplace(2," + prodGroupArray[y][0] + ");";
						var replaceBigImgMouseClass = " img_replace_active";
					}
				}
				else {
					var replaceBigImgMouseOver = "";
					var replaceBigImgMouseClass = "";
					var replaceBigImgMouseClass = "";
				}
				if (groupNoSelect == 0) {
					if (groupModal == 1) {
						var groupBigImgOnClickVar = " onclick='cpGroupModalWrite(" + y + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){cpGroupModalWrite(" + y + ");}'";
					}
					else {
						var groupBigImgOnClickVar = " onclick='cpGroupSelectProducts(" + prodGroupArray[y][0] + ");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){cpGroupSelectProducts(" + prodGroupArray[y][0] + ");return false;}'";
					}
				}
				else {
					var groupBigImgOnClickVar = " onclick='" + groupActivateLinkStart + prodGroupArray[y][0] + groupActivateLinkEnd + "return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + groupActivateLinkStart + prodGroupArray[y][0] + groupActivateLinkEnd + "return false;}'";
				}
				var postImgBig = " style='background-image:url(\"" + clientImgBase + prodGroupArray[y][3] + "\");'";
				if (prodGroupArray[y][6] != 0) {
					replaceBigImgHidden = "";
					replaceBigImgBackClass = "on";
				}
				var groupBigImgTagLinkStart = "";
				var groupBigImgTagLinkEnd = "";
				groupBigImgTagLinkStart += "<a href=''" + groupBigImgOnClickVar;
				if (hoverState==1) {
					groupBigImgTagLinkStart += " onmouseover='cpGroupMouseOver(\"cpGroupName" + prodGroupArray[y][0] + "\", \"cp_group_name\");" + replaceBigImgMouseOver + "' onfocus='cpGroupMouseOver(\"cpGroupName" + prodGroupArray[y][0] + "\", \"cp_group_name\");" + replaceBigImgMouseOver + "' onmouseout='cpGroupMouseOut(\"cpGroupName" + prodGroupArray[y][0] + "\", \"cp_group_name\");" + replaceBigImgMouseOut + "' onblur='cpGroupMouseOut(\"cpGroupName" + prodGroupArray[y][0] + "\", \"cp_group_name\");" + replaceBigImgMouseOut + "'";
				}
				groupBigImgTagLinkStart += " tabindex='0' title=\"" + prodGroupArray[y][1] + "\">";
				groupBigImgTagLinkEnd = "<\/a>";
				replaceBigImgRender += "<div title=\"" + prodGroupArray[y][1] + "\" id='cpGroupBigImgDivShell" + prodGroupArray[y][0] + "' class='cp_group_big_img_div_shell cp_group_big_img_div_shell_" + prodGroupArray[y][0] + "'" + groupBigImgOnClickVar;
				if (hoverState==1) {
					replaceBigImgRender += " onmouseover='cpGroupMouseOver(\"cpGroupName" + prodGroupArray[y][0] + "\", \"cp_group_name\");" + replaceBigImgMouseOver + "' onfocus='cpGroupMouseOver(\"cpGroupName" + prodGroupArray[y][0] + "\", \"cp_group_name\");" + replaceBigImgMouseOver + "'";
				}
				replaceBigImgRender += "><div id='cpGroupBigImgDivBack" + prodGroupArray[y][0] + "' class='cp_group_big_img_div_back cp_group_big_img_div_back_" + replaceBigImgBackClass + " cp_group_big_img_div_back_" + prodGroupArray[y][0] + replaceBigImgMouseClass +"'" + postImgBig + "><\/div><div id='cpGroupBigImgDivOver" + prodGroupArray[y][0] + "' class='cp_group_big_img_div_over cp_group_big_img_div_over_" + prodGroupArray[y][0] + "'" + replaceBigImgHidden;
				if (hoverState==1) {
					replaceBigImgRender += " onmouseout='cpGroupMouseOut(\"cpGroupName" + prodGroupArray[y][0] + "\", \"cp_group_name\");" + replaceBigImgMouseOut + "' onblur='cpGroupMouseOut(\"cpGroupName" + prodGroupArray[y][0] + "\", \"cp_group_name\");" + replaceBigImgMouseOut + "'";
				}
				replaceBigImgRender += ">&nbsp;<\/div><\/div>";
				groupHTMLTest = baseGroupBigImgHTMLStart + replaceBigImgRender + baseGroupBigImgHTMLEnd;
			}
			var groupSmImgTagStart = groupHTMLTest.indexOf("<!--GROUPSMIMG");
			if (groupSmImgTagStart != -1) {
				var groupSmImgTagEnd = groupHTMLTest.indexOf(">",groupSmImgTagStart);
				var groupSmImgTagStrip = groupHTMLTest.substring(groupSmImgTagStart,(groupSmImgTagEnd+1));
				var baseGroupSmImgHTMLStart = groupHTMLTest.substr(0,groupSmImgTagStart);
				var baseGroupSmImgHTMLEnd = groupHTMLTest.substr((groupSmImgTagEnd+1));
				var groupSmImgTagRender = "";
				var replaceSmImgPreset = prodGroupArray[y][4];
				var replaceSmImgHidden = " style='display:none;'";
				var replaceSmImgBackClass = "off";
				var replaceSmImgTest = groupSmImgTagStrip.indexOf(" REPLACE");
				if (replaceSmImgTest != -1) {
					if (groupModal == 1) {
						var replaceSmImgMouseOver = "cpGroupModalImgReplace(1," + prodGroupArray[y][0] + ");";
						var replaceSmImgMouseOut = "cpGroupModalImgReplace(2," + prodGroupArray[y][0] + ");";
						var replaceSmImgMouseClass = " img_replace_active";
					}
					else {
						var replaceSmImgMouseOver = "cpGroupImgReplace(1," + prodGroupArray[y][0] + ");";
						var replaceSmImgMouseOut = "cpGroupImgReplace(2," + prodGroupArray[y][0] + ");";
						var replaceSmImgMouseClass = " img_replace_active";
					}
				}
				else {
					var replaceSmImgMouseOver = "";
					var replaceSmImgMouseOut = "";
					var replaceSmImgMouseClass = "";
				}
				if (groupNoSelect == 0) {
					if (groupModal == 1) {
						var groupSmImgOnClickVar = " onclick='cpGroupModalWrite(" + y + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){cpGroupModalWrite(" + y + ");}'";
					}
					else {
						var groupSmImgOnClickVar = " onclick='cpGroupSelectProducts(" + prodGroupArray[y][0] + ");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){cpGroupSelectProducts(" + prodGroupArray[y][0] + ");return false;}'";
					}
				}
				else {
					var groupSmImgOnClickVar = " onclick='" + groupActivateLinkStart + prodGroupArray[y][0] + groupActivateLinkEnd + "return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){" + groupActivateLinkStart + prodGroupArray[y][0] + groupActivateLinkEnd + "return false;}'";
				}
				var postImgBig = " style='background-image:url(\"" + clientImgBase + prodGroupArray[y][4] + "\");'";
				if (prodGroupArray[y][6] != 0) {
					replaceSmImgHidden = "";
					replaceSmImgBackClass = "on";
				}
				var groupSmImgTagLinkStart = "";
				var groupSmImgTagLinkEnd = "";
				groupSmImgTagLinkStart = "<a href=''" + groupSmImgOnClickVar;
				if (hoverState==1) {
					groupSmImgTagLinkStart += " onmouseover='cpGroupMouseOver(\"cpGroupName" + prodGroupArray[y][0] + "\", \"cp_group_name\");" + replaceSmImgMouseOver + "' onfocus='cpGroupMouseOver(\"cpGroupName" + prodGroupArray[y][0] + "\", \"cp_group_name\");" + replaceSmImgMouseOver + "' onmouseout='cpGroupMouseOut(\"cpGroupName" + prodGroupArray[y][0] + "\", \"cp_group_name\");" + replaceSmImgMouseOut + "' onblur='cpGroupMouseOut(\"cpGroupName" + prodGroupArray[y][0] + "\", \"cp_group_name\");" + replaceSmImgMouseOut + "'";
				}
				groupSmImgTagLinkStart += " tabindex='0' title=\"" + prodGroupArray[y][1] + "\">";
				groupSmImgTagLinkEnd = "<\/a>";
				groupSmImgTagRender = "<div title=\"" + prodGroupArray[y][1] + "\" id='cpGroupSmImgDivShell" + prodGroupArray[y][0] + "' class='cp_group_sm_img_div_shell cp_group_sm_img_div_shell_" + prodGroupArray[y][0] + "'" + groupSmImgOnClickVar;
				if (hoverState==1) {
					groupSmImgTagRender += " onmouseover='cpGroupMouseOver(\"cpGroupName" + prodGroupArray[y][0] + "\", \"cp_group_name\");" + replaceSmImgMouseOver + "' onfocus='cpGroupMouseOver(\"cpGroupName" + prodGroupArray[y][0] + "\", \"cp_group_name\");" + replaceSmImgMouseOver + "'";
				}
				groupSmImgTagRender += "><div id='cpGroupSmImgDivBack" + prodGroupArray[y][0] + "' class='cp_group_sm_img_div_back cp_group_sm_img_div_back_" + replaceSmImgBackClass + " cp_group_sm_img_div_back_" + prodGroupArray[y][0] + replaceSmImgMouseClass +"'" + postImgBig + "><\/div><div id='cpGroupSmImgDivOver" + prodGroupArray[y][0] + "' class='cp_group_sm_img_div_over cp_group_sm_img_div_over_" + prodGroupArray[y][0] +"'" + replaceSmImgHidden;
				if (hoverState==1) {
					groupSmImgTagRender += " onmouseout='cpGroupMouseOut(\"cpGroupName" + prodGroupArray[y][0] + "\", \"cp_group_name\");" + replaceSmImgMouseOut + "' onblur='cpGroupMouseOut(\"cpGroupName" + prodGroupArray[y][0] + "\", \"cp_group_name\");" + replaceSmImgMouseOut + "'";
				}
				groupSmImgTagRender += ">&nbsp;<\/div><\/div>";
				groupHTMLTest = baseGroupSmImgHTMLStart + groupSmImgTagRender + baseGroupSmImgHTMLEnd;
			}
			var groupModalTagStart = groupHTMLTest.indexOf("<!--GROUPMODAL");
			if (groupModalTagStart != -1) {
				var groupModalTagEnd = groupHTMLTest.indexOf(">",groupModalTagStart);
				var groupModalTagStrip = groupHTMLTest.substring(groupModalTagStart,(groupModalTagEnd+1));
				var groupModalHTMLStart = groupHTMLTest.substr(0,groupModalTagStart);
				var groupModalHTMLEnd = groupHTMLTest.substr((groupModalTagEnd+1));
				var groupProdWrite = "<div id='cpGroupModalShell" + prodGroupArray[y][0] + "' class='cp_group_modal_shell cp_group_modal_shell_" + prodGroupArray[y][0] + " panel_close_me' style='display:none;'><\/div><div style='display:none;'>";
				for (z=0; z<prodDisplayArray.length; z++) {
					for (pgp=0; pgp<pgpArr.length; pgp++) {
						if (prodDisplayArray[z][0] == pgpArr[pgp]) {
							groupProdWrite += "<div id='cpProductName" + prodDisplayArray[z][0] + "' style='display:none;'>&nbsp;<\/div>";
							break;
						}
					}
				}
				groupProdWrite += "<\/div>";
				groupHTMLTest = groupModalHTMLStart + groupProdWrite + groupModalHTMLEnd;
			}
			else {
				var groupProdWrite = "<div style='display:none;'>";
				for (z=0; z<prodDisplayArray.length; z++) {
					for (pgp=0; pgp<pgpArr.length; pgp++) {
						if (prodDisplayArray[z][0] == pgpArr[pgp]) {
							groupProdWrite += "<div id='cpProductName" + prodDisplayArray[z][0] + "' style='display:none;'>&nbsp;<\/div>";
							break;
						}
					}
				}
				groupProdWrite += "<\/div>";
				groupHTMLTest += groupProdWrite;
			}
			var labelClasses = "";
			var pglArr = prodGroupArray[y][9].split(",");
			for (r=0; r<labelArray.length; r++) {
				var foundThisLabel = 0;
				for (t=0; t<pglArr.length; t++) {
					for (b=0; b<prodDisplayArray.length; b++) {
						if (pglArr[t] == labelArray[r][0]) {
							labelClasses += " cp_group_label_" + labelArray[r][0];
							foundThisLabel = 1;
							break;
						}
					}
					if (foundThisLabel == 1) {
						break;
					}
				}
			}
			groupHTML += "<div id='cpGroupItem" + prodGroupArray[y][0] + "' class='cp_group_item_shell cp_group_item_" + prodGroupArray[y][0] + labelClasses + "'>" + groupHTMLTest + "<\/div>";
		}
		if(gLog==1){console.log("cpGroupListShell - POPULATE");}
		document.getElementById('cpGroupListShell').innerHTML = groupHTML;
		cpCHW = setInterval(cpGroupHoverWait, 1000);
	}
}
function cpCatSelectProducts(catSQLID) {
	if(gLog==1){console.log("cpCatSelectProducts - catSQLID: ", catSQLID);}
	if (document.getElementById('cpCategoryName'+catSQLID)) {
		if(gLog==1){console.log("cpCatSelectProducts - found cpCategoryName"+ catSQLID);}
		for (y=0; y<catArray.length; y++) {
			if (catArray[y][0] == catSQLID && catArray[y][6] == 0) {
				if(gLog==1){console.log("cpCatSelectProducts - catArray[y][6] == 0");}
				if (categoryNoSelect == 0) {
					$('#cpCategoryName'+catSQLID).removeClass('cp_category_name_hover');
					$('#cpCategoryName'+catSQLID).removeClass('cp_category_name_hover_off');
					$('#cpCategoryName'+catSQLID).removeClass('cp_category_name_hover_on');
					$('#cpCategoryName'+catSQLID).removeClass('cp_category_name_off');
					$('#cpCategoryName'+catSQLID).addClass('cp_category_name_on');
				}
				if (document.getElementById('cpCategoryBigImgDivBack'+catSQLID) && $('#cpCategoryBigImgDivBack'+catSQLID).hasClass('img_replace_active')) {
					$(".cp_category_big_img_div_over_"+catSQLID).fadeIn(50);
					$(".cp_category_big_img_div_back_"+catSQLID).removeClass('cp_category_big_img_div_back_off');
					$(".cp_category_big_img_div_back_"+catSQLID).addClass('cp_category_big_img_div_back_on');
				}
				if (document.getElementById('cpCategorySmImgDivBack'+catSQLID) && $('#cpCategorySmImgDivBack'+catSQLID).hasClass('img_replace_active')) {
					$(".cp_category_sm_img_div_over_"+catSQLID).fadeIn(50);
					$(".cp_category_sm_img_div_back_"+catSQLID).removeClass('cp_category_sm_img_div_back_off');
					$(".cp_category_sm_img_div_back_"+catSQLID).addClass('cp_category_sm_img_div_back_on');
				}
				for (n=0; n<prodDisplayArray.length; n++) {
					if (prodDisplayArray[n][8] == catSQLID) {
						window[('panel1ProductNameVar'+prodDisplayArray[n][0])] = 1;
						prodDisplayArray[n][9] = 1;
						if(gLog==1){console.log("cpCatSelectProducts - Product On:",prodDisplayArray[n][1]);}
					}
				}
				window["panel1CategoryNameVar"+catSQLID] = 1;
				catArray[y][6] = 1;
				catArray[y][9] = 1;
				break;
			}
			if (catArray[y][0] == catSQLID && catArray[y][6] == 1) {
				if(gLog==1){console.log("cpCatSelectProducts - catArray[y][6] == 1");}
				if (categoryNoSelect == 0) {
					$('#cpCategoryName'+catSQLID).removeClass('cp_category_name_hover');
					$('#cpCategoryName'+catSQLID).removeClass('cp_category_name_hover_off');
					$('#cpCategoryName'+catSQLID).removeClass('cp_category_name_hover_on');
					$('#cpCategoryName'+catSQLID).removeClass('cp_category_name_on');
					$('#cpCategoryName'+catSQLID).addClass('cp_category_name_off');
				}
				if (document.getElementById('cpCategoryBigImgDivBack'+catSQLID) && $('#cpCategoryBigImgDivBack'+catSQLID).hasClass('img_replace_active')) {
					$(".cp_category_big_img_div_over_"+catSQLID).fadeOut(50);
					$(".cp_category_big_img_div_back_"+catSQLID).addClass('cp_category_big_img_div_back_off');
					$(".cp_category_big_img_div_back_"+catSQLID).removeClass('cp_category_big_img_div_back_on');
				}
				if (document.getElementById('cpCategorySmImgDivBack'+catSQLID) && $('#cpCategorySmImgDivBack'+catSQLID).hasClass('img_replace_active')) {
					$(".cp_category_sm_img_div_over_"+catSQLID).fadeOut(50);
					$(".cp_category_sm_img_div_back_"+catSQLID).addClass('cp_category_sm_img_div_back_off');
					$(".cp_category_sm_img_div_back_"+catSQLID).removeClass('cp_category_sm_img_div_back_on');
				}
				for (n=0; n<prodDisplayArray.length; n++) {
					if (prodDisplayArray[n][8] == catSQLID) {
						window[('panel1ProductNameVar'+prodDisplayArray[n][0])] = 0;
						prodDisplayArray[n][9] = 0;
						if(gLog==1){console.log("cpCatSelectProducts - Product Off:",prodDisplayArray[n][1]);}
					}
				}
				window["panel1CategoryNameVar"+catSQLID] = 0;
				catArray[y][6] = 0;
				catArray[y][9] = 0;
				break;
			}
		}
		if (document.getElementById('cpShoppingCartShell')) {
			controlPanelWriteCart();
		}
		else {
			prodCartArray.length = 0;
			for (p=0;p<prodDisplayArray.length;p++) {
				if (prodDisplayArray[p][9] == 1) {
					prodCartArray.push(prodDisplayArray[p][0]);
				}
			}
		}
	}
}
function cpGroupSelectProducts(groupSQLID) {
	if(gLog==1){console.log("cpGroupSelectProducts - groupSQLID: ", groupSQLID);}
	if (document.getElementById('cpGroupName'+groupSQLID)) {
		if(gLog==1){console.log("cpGroupSelectProducts - found cpGroupName"+ groupSQLID);}
		for (y=0; y<prodGroupArray.length; y++) {
			if (prodGroupArray[y][0] == groupSQLID && prodGroupArray[y][6] == 0) {
				if(gLog==1){console.log("cpGroupSelectProducts - prodGroupArray[y][6] == 0");}
				if (groupNoSelect == 0) {
					$('#cpGroupName'+groupSQLID).removeClass('cp_group_name_hover');
					$('#cpGroupName'+groupSQLID).removeClass('cp_group_name_hover_off');
					$('#cpGroupName'+groupSQLID).removeClass('cp_group_name_hover_on');
					$('#cpGroupName'+groupSQLID).removeClass('cp_group_name_off');
					$('#cpGroupName'+groupSQLID).addClass('cp_group_name_on');
				}
				if (document.getElementById('cpGroupBigImgDivBack'+groupSQLID) && $('#cpGroupBigImgDivBack'+groupSQLID).hasClass('img_replace_active')) {
					$(".cp_group_big_img_div_over_"+groupSQLID).fadeIn(50);
					$(".cp_group_big_img_div_back_"+groupSQLID).removeClass('cp_group_big_img_div_back_off');
					$(".cp_group_big_img_div_back_"+groupSQLID).addClass('cp_group_big_img_div_back_on');
				}
				if (document.getElementById('cpGroupSmImgDivBack'+groupSQLID) && $('#cpGroupSmImgDivBack'+groupSQLID).hasClass('img_replace_active')) {
					$(".cp_group_sm_img_div_over_"+groupSQLID).fadeIn(50);
					$(".cp_group_sm_img_div_back_"+groupSQLID).removeClass('cp_group_sm_img_div_back_off');
					$(".cp_group_sm_img_div_back_"+groupSQLID).addClass('cp_group_sm_img_div_back_on');
				}
				for (n=0; n<prodDisplayArray.length; n++) {
					if (prodDisplayArray[n][8] == groupSQLID) {
						window[('panel1ProductNameVar'+prodDisplayArray[n][0])] = 1;
						prodDisplayArray[n][9] = 1;
						if(gLog==1){console.log("cpGroupSelectProducts - Product On:",prodDisplayArray[n][1]);}
					}
				}
				window["panel1GroupNameVar"+groupSQLID] = 1;
				prodGroupArray[y][6] = 1;
				break;
			}
			if (prodGroupArray[y][0] == groupSQLID && prodGroupArray[y][6] == 1) {
				if(gLog==1){console.log("cpGroupSelectProducts - prodGroupArray[y][6] == 1");}
				if (groupNoSelect == 0) {
					$('#cpGroupName'+groupSQLID).removeClass('cp_group_name_hover');
					$('#cpGroupName'+groupSQLID).removeClass('cp_group_name_hover_off');
					$('#cpGroupName'+groupSQLID).removeClass('cp_group_name_hover_on');
					$('#cpGroupName'+groupSQLID).removeClass('cp_group_name_on');
					$('#cpGroupName'+groupSQLID).addClass('cp_group_name_off');
				}
				if (document.getElementById('cpGroupBigImgDivBack'+groupSQLID) && $('#cpGroupBigImgDivBack'+groupSQLID).hasClass('img_replace_active')) {
					$(".cp_group_big_img_div_over_"+groupSQLID).fadeOut(50);
					$(".cp_group_big_img_div_back_"+groupSQLID).addClass('cp_group_big_img_div_back_off');
					$(".cp_group_big_img_div_back_"+groupSQLID).removeClass('cp_group_big_img_div_back_on');
				}
				if (document.getElementById('cpGroupSmImgDivBack'+groupSQLID) && $('#cpGroupSmImgDivBack'+groupSQLID).hasClass('img_replace_active')) {
					$(".cp_group_sm_img_div_over_"+groupSQLID).fadeOut(50);
					$(".cp_group_sm_img_div_back_"+groupSQLID).addClass('cp_group_sm_img_div_back_off');
					$(".cp_group_sm_img_div_back_"+groupSQLID).removeClass('cp_group_sm_img_div_back_on');
				}
				for (n=0; n<prodDisplayArray.length; n++) {
					if (prodDisplayArray[n][8] == groupSQLID) {
						window[('panel1ProductNameVar'+prodDisplayArray[n][0])] = 0;
						prodDisplayArray[n][9] = 0;
						if(gLog==1){console.log("cpGroupSelectProducts - Product Off:",prodDisplayArray[n][1]);}
					}
				}
				window["panel1GroupNameVar"+groupSQLID] = 0;
				prodGroupArray[y][6] = 0;
				break;
			}
		}
		if (document.getElementById('cpShoppingCartShell')) {
			controlPanelWriteCart();
		}
		else {
			prodCartArray.length = 0;
			for (p=0;p<prodDisplayArray.length;p++) {
				if (prodDisplayArray[p][9] == 1) {
					prodCartArray.push(prodDisplayArray[p][0]);
				}
			}
		}
	}
}
function controlPanelWriteProducts() {
	if (document.getElementById('cpProductListShell')) {
		var thisEmpty = autotextIt(p0TemplateSet.cpEmptyDiv,"cpEmpty");
		var productHTML = "<span id='cpEmptyShell' style='display:none;'>" + thisEmpty + "<\/span>";
		for (y=0; y<prodDisplayArray.length; y++) {
			var productHTMLTest = autotextIt(p0TemplateSet.cpProductDiv,"cpProduct");
			var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
			if (prodDiscTagStart != -1) {
				var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
				var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
				var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
				var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
				var prodDiscWrite = "";
				var discVal = prodDisplayArray[y][6];
				if (discVal != 1) {
					prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " cpProduct_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
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
					var replaceImgMouseOver = "cpProdImgReplace(1," + prodDisplayArray[y][0] + ");";
					var replaceImgMouseOut = "cpProdImgReplace(2," + prodDisplayArray[y][0] + ");";
					var replaceImgMouseClass = " img_replace_active";
				}
				else {
					var replaceImgMouseOver = "";
					var replaceImgMouseOut = "";
					var replaceImgMouseClass = "";
				}
				var descTest = prodNameTagStrip.indexOf(" DESC");
				if (descTest != -1) {
					var descVal = "<span class='cp_product_name_desc'>" + prodDisplayArray[y][3] + "<\/span>";
				}
				else {
					var descVal = "";
				}
				var prodNameTagHover = "";
				if (hoverState==1) {
					prodNameTagHover = " onmouseover='cpProdMouseOver(\"cpProductName" + prodDisplayArray[y][0] + "\", \"cp_product_name\", panel1ProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceImgMouseOver + "' onfocus='cpProdMouseOver(\"cpProductName" + prodDisplayArray[y][0] + "\", \"cp_product_name\", panel1ProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceImgMouseOver + "' onmouseout='cpProdMouseOut(\"cpProductName" + prodDisplayArray[y][0] + "\", \"cp_product_name\", panel1ProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceImgMouseOut + "' onblur='cpProdMouseOut(\"cpProductName" + prodDisplayArray[y][0] + "\", \"cp_product_name\", panel1ProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceImgMouseOut + "'";
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
				if (FPC==1) {
					var isProductChecked = 1;
					window["panel1ProductNameVar"+prodDisplayArray[y][0]] = 1;
					var baseProductStyle = " cp_product_name_on";
				}
				else {
					if (prodDisplayArray[y][9] == "1") {
						var isProductChecked = 1;
						window["panel1ProductNameVar"+prodDisplayArray[y][0]] = 1;
						var baseProductStyle = " cp_product_name_on";
					}
					else {
						var isProductChecked = 0;
						var baseProductStyle = " cp_product_name_off";
					}
				}
				productHTMLTest = baseProdNameHTMLStart + "<div id='cpProductName" + prodDisplayArray[y][0] + "' class='cp_product_name" + replaceImgMouseClass + baseProductStyle + "'" + prodNameTagHover + " style='cursor:pointer;' onclick='cpProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"cpProductName" + prodDisplayArray[y][0] + "\", \"cp_product_name\", panel1ProductNameVar" + prodDisplayArray[y][0] + ", \"panel1ProductNameVar" + prodDisplayArray[y][0] + "\", 1);' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){cpProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"cpProductName" + prodDisplayArray[y][0] + "\", \"cp_product_name\", panel1ProductNameVar" + prodDisplayArray[y][0] + ", \"panel1ProductNameVar" + prodDisplayArray[y][0] + "\", 1);}' tabindex='0' title=\"" + prodNameDispVal + "\">" + prodNameItalicVar + "<span class='cp_product_name_name'>" + prodNameDispVal + "<\/span>" + descVal + "<\/div>" + baseProdNameHTMLEnd;
			}
			var prodDescTagStart = productHTMLTest.indexOf("<!--PRODDESC");
			if (prodDescTagStart != -1) {
				var prodDescTagEnd = productHTMLTest.indexOf(">",prodDescTagStart);
				var prodDescTagStrip = productHTMLTest.substring(prodDescTagStart,(prodDescTagEnd+1));
				var baseProdDescHTMLStart = productHTMLTest.substr(0,prodDescTagStart);
				var baseProdDescHTMLEnd = productHTMLTest.substr((prodDescTagEnd+1));
				productHTMLTest = baseProdDescHTMLStart + "<div id='cpProductDesc" + prodDisplayArray[y][0] + "' class='cp_product_desc'>" + prodDisplayArray[y][3] + "<\/div>" + baseProdDescHTMLEnd;
			}
			var prodBigImgTagStart = productHTMLTest.indexOf("<!--PRODBIGIMG");
			if (prodBigImgTagStart != -1) {
				var prodBigImgTagEnd = productHTMLTest.indexOf(">",prodBigImgTagStart);
				var prodBigImgTagStrip = productHTMLTest.substring(prodBigImgTagStart,(prodBigImgTagEnd+1));
				var baseProdBigImgHTMLStart = productHTMLTest.substr(0,prodBigImgTagStart);
				var baseProdBigImgHTMLEnd = productHTMLTest.substr((prodBigImgTagEnd+1));
				var replaceBigImgRender = "";
				var replaceBigImgMouseOver = "";
				var replaceBigImgMouseOut = "";
				var replaceBigImgMouseClass = "";
				var replaceBigImgPreset = prodDisplayArray[y][4];
				var replaceBigImgHidden = " style='display:none;'";
				var replaceBigImgBackClass = "off";
				var replaceBigImgTest = prodBigImgTagStrip.indexOf(" REPLACE");
				if (replaceBigImgTest != -1) {
					replaceBigImgMouseOver = "cpProdImgReplace(1," + prodDisplayArray[y][0] + ");";
					replaceBigImgMouseOut = "cpProdImgReplace(2," + prodDisplayArray[y][0] + ");";
					replaceBigImgMouseClass = " img_replace_active";
					var replaceBigImgLength = prodDisplayArray[y][4].length;
					if (prodDisplayArray[y][9] == "1") {
						replaceBigImgHidden = "";
						replaceBigImgBackClass = "on";
					}
				}
				var postImgBig = " style='background-image:url(\"" + clientImgBase + prodDisplayArray[y][4] + "\");'";
				replaceBigImgRender += "<div title=\"" + prodDisplayArray[y][2] + "\" id='cpProductBigImgDivShell" + prodDisplayArray[y][0] + "' class='cp_product_big_img_div_shell cp_product_big_img_div_shell_" + prodDisplayArray[y][0] + "' onclick='cpProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"cpProductName" + prodDisplayArray[y][0] + "\", \"cp_product_name\", panel1ProductNameVar" + prodDisplayArray[y][0] + ", \"panel1ProductNameVar" + prodDisplayArray[y][0] + "\", 1);' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){cpProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"cpProductName" + prodDisplayArray[y][0] + "\", \"cp_product_name\", panel1ProductNameVar" + prodDisplayArray[y][0] + ", \"panel1ProductNameVar" + prodDisplayArray[y][0] + "\", 1);}'";
				if (hoverState==1) {
					replaceBigImgRender += " onmouseover='cpProdMouseOver(\"cpProductName" + prodDisplayArray[y][0] + "\", \"cp_product_name\", panel1ProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceBigImgMouseOver + "' onfocus='cpProdMouseOver(\"cpProductName" + prodDisplayArray[y][0] + "\", \"cp_product_name\", panel1ProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceBigImgMouseOver + "'";
				}
				replaceBigImgRender += " tabindex='0' title=\"" + prodDisplayArray[y][2] + "\"><div id='cpProductBigImgDivBack" + prodDisplayArray[y][0] + "' class='cp_product_big_img_div_back cp_product_big_img_div_back_" + replaceBigImgBackClass + " cp_product_big_img_div_back_" + prodDisplayArray[y][0] + replaceBigImgMouseClass +"'" + postImgBig + "><\/div><div id='cpProductBigImgDivOver" + prodDisplayArray[y][0] + "' class='cp_product_big_img_div_over cp_product_big_img_div_over_" + prodDisplayArray[y][0] +"'" + replaceBigImgHidden;
				if (hoverState==1) {
					replaceBigImgRender += " onmouseout='cpProdMouseOut(\"cpProductName" + prodDisplayArray[y][0] + "\", \"cp_product_name\", panel1ProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceBigImgMouseOut + "' onblur='cpProdMouseOut(\"cpProductName" + prodDisplayArray[y][0] + "\", \"cp_product_name\", panel1ProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceBigImgMouseOut + "'";
				}
				replaceBigImgRender += ">&nbsp;<\/div><\/div>";
				productHTMLTest = baseProdBigImgHTMLStart + replaceBigImgRender + baseProdBigImgHTMLEnd;
			}
			var prodSmImgTagStart = productHTMLTest.indexOf("<!--PRODSMIMG");
			if (prodSmImgTagStart != -1) {
				var prodSmImgTagEnd = productHTMLTest.indexOf(">",prodSmImgTagStart);
				var prodSmImgTagStrip = productHTMLTest.substring(prodSmImgTagStart,(prodSmImgTagEnd+1));
				var baseProdSmImgHTMLStart = productHTMLTest.substr(0,prodSmImgTagStart);
				var baseProdSmImgHTMLEnd = productHTMLTest.substr((prodSmImgTagEnd+1));
				var replaceSmImgRender = "";
				var replaceSmImgMouseOver = "";
				var replaceSmImgMouseOut = "";
				var replaceSmImgMouseClass = "";
				var replaceSmImgPreset = prodDisplayArray[y][5];
				var replaceSmImgHidden = " style='display:none;'";
				var replaceSmImgBackClass = "off";
				var replaceSmImgTest = prodSmImgTagStrip.indexOf(" REPLACE");
				if (replaceSmImgTest != -1) {
					replaceSmImgMouseOver = "cpProdImgReplace(1," + prodDisplayArray[y][0] + ");";
					replaceSmImgMouseOut = "cpProdImgReplace(2," + prodDisplayArray[y][0] + ");";
					replaceSmImgMouseClass = " img_replace_active";
					var replaceSmImgLength = prodDisplayArray[y][5].length;
					if (prodDisplayArray[y][9] == "1") {
						replaceSmImgHidden = "";
						replaceSmImgBackClass = "on";
					}
				}
				var postImgSm = " style='background-image:url(\"" + clientImgBase + prodDisplayArray[y][5] + "\");'";
				replaceSmImgRender += "<div title=\"" + prodDisplayArray[y][2] + "\" id='cpProductSmImgDivShell" + prodDisplayArray[y][0] + "' class='cp_product_sm_img_div_shell cp_product_sm_img_div_shell_" + prodDisplayArray[y][0] + "' onclick='cpProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"cpProductName" + prodDisplayArray[y][0] + "\", \"cp_product_name\", panel1ProductNameVar" + prodDisplayArray[y][0] + ", \"panel1ProductNameVar" + prodDisplayArray[y][0] + "\", 1);' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){cpProdSelect(" + prodDisplayArray[y][0] + ", \"" + prodDisplayArray[y][1] + "\", \"cpProductName" + prodDisplayArray[y][0] + "\", \"cp_product_name\", panel1ProductNameVar" + prodDisplayArray[y][0] + ", \"panel1ProductNameVar" + prodDisplayArray[y][0] + "\", 1);}'";
				if (hoverState==1) {
					replaceSmImgRender += " onmouseover='cpProdMouseOver(\"cpProductName" + prodDisplayArray[y][0] + "\", \"cp_product_name\", panel1ProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceSmImgMouseOver + "' onfocus='cpProdMouseOver(\"cpProductName" + prodDisplayArray[y][0] + "\", \"cp_product_name\", panel1ProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceSmImgMouseOver + "'";
				}
				replaceSmImgRender += " tabindex='0' title=\"" + prodDisplayArray[y][2] + "\"><div id='cpProductSmImgDivBack" + prodDisplayArray[y][0] + "' class='cp_product_sm_img_div_back cp_product_sm_img_div_back_" + replaceSmImgBackClass + " cp_product_sm_img_div_back_" + prodDisplayArray[y][0] + replaceSmImgMouseClass +"'" + postImgSm + "><\/div><div id='cpProductSmImgDivOver" + prodDisplayArray[y][0] + "' class='cp_product_sm_img_div_over cp_product_sm_img_div_over_" + prodDisplayArray[y][0] +"'" + replaceSmImgHidden;
				if (hoverState==1) {
					replaceSmImgRender += " onmouseout='cpProdMouseOut(\"cpProductName" + prodDisplayArray[y][0] + "\", \"cp_product_name\", panel1ProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceSmImgMouseOut + "' onblur='cpProdMouseOut(\"cpProductName" + prodDisplayArray[y][0] + "\", \"cp_product_name\", panel1ProductNameVar" + prodDisplayArray[y][0] + "," + y + ");" + replaceSmImgMouseOut + "'";
				}
				replaceSmImgRender += ">&nbsp;<\/div><\/div>";
				productHTMLTest = baseProdSmImgHTMLStart + replaceSmImgRender + baseProdSmImgHTMLEnd;
			}
			productHTML += "<div id='cpProductItemProd" + prodDisplayArray[y][0] + "' class='cp_product_item_shell cp_product_item_cat_" + prodDisplayArray[y][8] + " cp_product_item_fam_" + prodDisplayArray[y][17] + "'>" + productHTMLTest + "<\/div>";
		}
		document.getElementById('cpProductListShell').innerHTML = productHTML;
		cpPHW = setInterval(cpProdHoverWait, 1000);
	}
}
function controlPanelWriteLabels() {
	if (document.getElementById('cpLabelListShell')) {
		var labEmpty = autotextIt(p0TemplateSet.cpEmptyDiv,"cpEmpty");
		var labelHTML = "<span id='cpEmptyShell' style='display:none;'>" + labEmpty + "<\/span>";
		var labelModalTest = p0TemplateSet.cpLabelDiv.indexOf("<!--LABELMODAL");
		if(gLog==1){console.log("controlPanelWriteLabels - labelModalTest: " + labelModalTest);}
		for (y=0; y<labelArray.length; y++) {
			var writeCode = 0;
			if (labelMenuCodeVar == "" || labelArray[y][4].toLowerCase() == labelMenuCodeVar.toLowerCase()) {writeCode=1;}
			if (writeCode == 1 && (labelArray[y][9] == document.getElementById('cpLabelMenuHolder').value || document.getElementById('cpLabelMenuHolder').value == 0) && labelArray[y][9] != 0) {
				var labelHTMLTest = autotextIt(p0TemplateSet.cpLabelDiv,"cpLabel");
				var labelDiscTagStart = labelHTMLTest.indexOf("<!--HIGHPROD");
				if (labelDiscTagStart != -1) {
					var labelDiscTagEnd = labelHTMLTest.indexOf(">",labelDiscTagStart);
					var labelDiscTagStrip = labelHTMLTest.substring(labelDiscTagStart,(labelDiscTagEnd+1));
					var labelDiscHTMLStart = labelHTMLTest.substr(0,labelDiscTagStart);
					var labelDiscHTMLEnd = labelHTMLTest.substr((labelDiscTagEnd+1));
					var labelDiscWrite = "";
					var discTestArr = [];
					for (pla=0; pla<prodLabelArray.length; pla++) {
						for (cdc=0; cdc<prodDisplayArray.length; cdc++) {
							if (prodLabelArray[pla][1] == prodDisplayArray[cdc][0] && prodLabelArray[pla][2] == labelArray[y][0] && prodDisplayArray[cdc][6] != 1) {
								discTestArr.push(prodDisplayArray[cdc][6]);
								break;
							}
						}
					}
					if (discTestArr.length != 0) {
						var discFoundArr = discTestArr.filter( onlyUnique );
						if (discFoundArr.length == 1) {
							labelDiscWrite = "<div class='global_" + hpArr[discFoundArr[0]][1] + " cpLabel_" + hpArr[discFoundArr[0]][1] + "'>" + hpArr[discFoundArr[0]][0] + "<\/div>";
						}
					}
					labelHTMLTest = labelDiscHTMLStart + labelDiscWrite + labelDiscHTMLEnd;
				}
				var labelNameTagStart = labelHTMLTest.indexOf("<!--LABELNAME");
				if (labelNameTagStart != -1) {
					var labelNameTagEnd = labelHTMLTest.indexOf(">",labelNameTagStart);
					var labelNameTagStrip = labelHTMLTest.substring(labelNameTagStart,(labelNameTagEnd+1));
					var baseLabelNameHTMLStart = labelHTMLTest.substr(0,labelNameTagStart);
					var baseLabelNameHTMLEnd = labelHTMLTest.substr((labelNameTagEnd+1));
					var labelNameValueStart = labelNameTagStrip.indexOf(" VALUE=");
					if (labelNameValueStart != -1) {
						var labelNameValueEnd = labelNameTagStrip.indexOf("]", labelNameValueStart);
						var labelNameValueVal = labelNameTagStrip.substring((labelNameValueStart+8),(labelNameValueEnd));
					}
					else {
						var labelNameValueVal = labelArray[y][1];
					}
					var replaceImgTest = labelNameTagStrip.indexOf(" REPLACE");
					if (replaceImgTest != -1) {
						var replaceImgMouseOver = "cpLabelImgReplace(1," + labelArray[y][0] + ");";
						var replaceImgMouseOut = "cpLabelImgReplace(2," + labelArray[y][0] + ");";
						var replaceImgMouseClass = " img_replace_active";
					}
					else {
						var replaceImgMouseOver = "";
						var replaceImgMouseOut = "";
						var replaceImgMouseClass = "";
					}
					if (labelArray[y][3] == 1) {
						var labelNameSelVal = " cp_label_name_on";
					}
					else {
						var labelNameSelVal = " cp_label_name_off";
					}
					var labelNameTagLink = "";
					if (labelModalTest != -1) {
						var labelNameOnClickVar = " onclick='cpLabelModalWrite(" + labelArray[y][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){cpLabelModalWrite(" + labelArray[y][0] + ");}'";
					}
					else {
						var labelNameOnClickVar = " onclick='cpLabelSelectProducts(" + labelArray[y][0] + ");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){cpLabelSelectProducts(" + labelArray[y][0] + ");return false;}'";
					}
					labelNameTagLink = " style='cursor:pointer;'" + labelNameOnClickVar;
					if (hoverState==1) {
						labelNameTagLink += " onmouseover='cpLabelMouseOver(\"cpLabelName" + labelArray[y][0] + "\", \"cp_label_name\");" + replaceImgMouseOver + "' onfocus='cpLabelMouseOver(\"cpLabelName" + labelArray[y][0] + "\", \"cp_label_name\");" + replaceImgMouseOver + "' onmouseout='cpLabelMouseOut(\"cpLabelName" + labelArray[y][0] + "\", \"cp_label_name\");" + replaceImgMouseOut + "' onblur='cpLabelMouseOut(\"cpLabelName" + labelArray[y][0] + "\", \"cp_label_name\");" + replaceImgMouseOut + "'";
					}
					labelHTMLTest = baseLabelNameHTMLStart + "<a name='cpLabelAnchor" + labelArray[y][0] + "' id='cpLabelAnchor" + labelArray[y][0] + "'><\/a><div id='cpLabelName" + labelArray[y][0] + "' class='cp_label_name_" + labelArray[y][0] + " cp_label_name" + replaceImgMouseClass + labelNameSelVal + "'" + labelNameTagLink + " tabindex='0' title=\"" + labelNameValueVal + "\">" + labelNameValueVal + "<\/div>" + baseLabelNameHTMLEnd;
				}
				var labelBigImgTagStart = labelHTMLTest.indexOf("<!--LABELBIGIMG");
				if (labelBigImgTagStart != -1) {
					var labelBigImgTagEnd = labelHTMLTest.indexOf(">",labelBigImgTagStart);
					var labelBigImgTagStrip = labelHTMLTest.substring(labelBigImgTagStart,(labelBigImgTagEnd+1));
					var baseLabelBigImgHTMLStart = labelHTMLTest.substr(0,labelBigImgTagStart);
					var baseLabelBigImgHTMLEnd = labelHTMLTest.substr((labelBigImgTagEnd+1));
					var replaceBigImgRender = "";
					var replaceBigImgPreset = labelArray[y][6];
					var replaceBigImgHidden = " style='display:none;'";
					var replaceBigImgBackClass = "off";
					var replaceBigImgTest = labelBigImgTagStrip.indexOf(" REPLACE");
					if (replaceSmImgTest != -1) {
						var replaceBigImgMouseOver = "cpLabelImgReplace(1," + labelArray[y][0] + ");";
						var replaceBigImgMouseOut = "cpLabelImgReplace(2," + labelArray[y][0] + ");";
						var replaceBigImgMouseClass = " img_replace_active";
					}
					else {
						var replaceBigImgMouseOver = "";
						var replaceBigImgMouseClass = "";
						var replaceBigImgMouseClass = "";
					}
					if (labelModalTest != -1) {
						var labelBigImgOnClickVar = " onclick='cpLabelModalWrite(" + labelArray[y][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){cpLabelModalWrite(" + labelArray[y][0] + ");}'";
					}
					else {
						var labelBigImgOnClickVar = " onclick='cpLabelSelectProducts(" + labelArray[y][0] + ");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){cpLabelSelectProducts(" + labelArray[y][0] + ");return false;}'";
					}
					var postImgBig = " style='background-image:url(\"" + clientImgBase + labelArray[y][6] + "\");'";
					if (labelArray[y][3] == 1) {
						replaceBigImgHidden = "";
						replaceBigImgBackClass = "on";
					}
					var labelBigImgTagLinkStart = "";
					var labelBigImgTagLinkEnd = "";
					labelBigImgTagLinkStart += "<a href=''" + labelBigImgOnClickVar;
					if (hoverState==1) {
						labelBigImgTagLinkStart += " onmouseover='cpLabelMouseOver(\"cpLabelName" + labelArray[y][0] + "\", \"cp_label_name\");" + replaceBigImgMouseOver + "' onfocus='cpLabelMouseOver(\"cpLabelName" + labelArray[y][0] + "\", \"cp_label_name\");" + replaceBigImgMouseOver + "' onmouseout='cpLabelMouseOut(\"cpLabelName" + labelArray[y][0] + "\", \"cp_label_name\");" + replaceBigImgMouseOut + "' onblur='cpLabelMouseOut(\"cpLabelName" + labelArray[y][0] + "\", \"cp_label_name\");" + replaceBigImgMouseOut + "'";
					}
					labelBigImgTagLinkStart += " tabindex='0' title=\"" + labelArray[y][1] + "\">";
					labelBigImgTagLinkEnd = "<\/a>";
					replaceBigImgRender += "<div title=\"" + labelArray[y][1] + "\" id='cpLabelBigImgDivShell" + labelArray[y][0] + "' class='cp_label_big_img_div_shell cp_label_big_img_div_shell_" + labelArray[y][0] + "'" + labelBigImgOnClickVar;
					if (hoverState==1) {
						replaceBigImgRender += " onmouseover='cpLabelMouseOver(\"cpLabelName" + labelArray[y][0] + "\", \"cp_label_name\");" + replaceBigImgMouseOver + "' onfocus='cpLabelMouseOver(\"cpLabelName" + labelArray[y][0] + "\", \"cp_label_name\");" + replaceBigImgMouseOver + "'";
					}
					replaceBigImgRender += "><div id='cpLabelBigImgDivBack" + labelArray[y][0] + "' class='cp_label_big_img_div_back cp_label_big_img_div_back_" + replaceBigImgBackClass + " cp_label_big_img_div_back_" + labelArray[y][0] + replaceBigImgMouseClass +"'" + postImgBig + "><\/div><div id='cpLabelBigImgDivOver" + labelArray[y][0] + "' class='cp_label_big_img_div_over cp_label_big_img_div_over_" + labelArray[y][0] + "'" + replaceBigImgHidden;
					if (hoverState==1) {
						replaceBigImgRender += " onmouseout='cpLabelMouseOut(\"cpLabelName" + labelArray[y][0] + "\", \"cp_label_name\");" + replaceBigImgMouseOut + "' onblur='cpLabelMouseOut(\"cpLabelName" + labelArray[y][0] + "\", \"cp_label_name\");" + replaceBigImgMouseOut + "'";
					}
					replaceBigImgRender += ">&nbsp;<\/div><\/div>";
					labelHTMLTest = baseLabelBigImgHTMLStart + replaceBigImgRender + baseLabelBigImgHTMLEnd;
				}
				var labelSmImgTagStart = labelHTMLTest.indexOf("<!--LABELSMIMG");
				if (labelSmImgTagStart != -1) {
					var labelSmImgTagEnd = labelHTMLTest.indexOf(">",labelSmImgTagStart);
					var labelSmImgTagStrip = labelHTMLTest.substring(labelSmImgTagStart,(labelSmImgTagEnd+1));
					var baseLabelSmImgHTMLStart = labelHTMLTest.substr(0,labelSmImgTagStart);
					var baseLabelSmImgHTMLEnd = labelHTMLTest.substr((labelSmImgTagEnd+1));
					var labelSmImgTagRender = "";
					var replaceSmImgPreset = labelArray[y][7];
					var replaceSmImgHidden = " style='display:none;'";
					var replaceSmImgBackClass = "off";
					var replaceSmImgTest = labelSmImgTagStrip.indexOf(" REPLACE");
					if (replaceSmImgTest != -1) {
						var replaceSmImgMouseOver = "cpLabelImgReplace(1," + labelArray[y][0] + ");";
						var replaceSmImgMouseOut = "cpLabelImgReplace(2," + labelArray[y][0] + ");";
						var replaceSmImgMouseClass = " img_replace_active";
					}
					else {
						var replaceSmImgMouseOver = "";
						var replaceSmImgMouseOut = "";
						var replaceSmImgMouseClass = "";
					}
					if (labelModalTest != -1) {
						var labelSmImgOnClickVar = " onclick='cpLabelModalWrite(" + labelArray[y][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){cpLabelModalWrite(" + labelArray[y][0] + ");}'";
					}
					else {
						var labelSmImgOnClickVar = " onclick='cpLabelSelectProducts(" + labelArray[y][0] + ");return false;' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){cpLabelSelectProducts(" + labelArray[y][0] + ");return false;}'";
					}
					var postImgBig = " style='background-image:url(\"" + clientImgBase + labelArray[y][7] + "\");'";
					if (labelArray[y][3] == 1) {
						replaceSmImgHidden = "";
						replaceSmImgBackClass = "on";
					}
					var labelSmImgTagLinkStart = "";
					var labelSmImgTagLinkEnd = "";
					labelSmImgTagLinkStart = "<a href=''" + labelSmImgOnClickVar;
					if (hoverState==1) {
						labelSmImgTagLinkStart += " onmouseover='cpLabelMouseOver(\"cpLabelName" + labelArray[y][0] + "\", \"cp_label_name\");" + replaceSmImgMouseOver + "' onfocus='cpLabelMouseOver(\"cpLabelName" + labelArray[y][0] + "\", \"cp_label_name\");" + replaceSmImgMouseOver + "' onmouseout='cpLabelMouseOut(\"cpLabelName" + labelArray[y][0] + "\", \"cp_label_name\");" + replaceSmImgMouseOut + "' onblur='cpLabelMouseOut(\"cpLabelName" + labelArray[y][0] + "\", \"cp_label_name\");" + replaceSmImgMouseOut + "'";
					}
					labelSmImgTagLinkStart += " tabindex='0' title=\"" + labelArray[y][1] + "\">";
					labelSmImgTagLinkEnd = "<\/a>";
					labelSmImgTagRender = "<div title=\"" + labelArray[y][1] + "\" id='cpLabelSmImgDivShell" + labelArray[y][0] + "' class='cp_label_sm_img_div_shell cp_label_sm_img_div_shell_" + labelArray[y][0] + "'" + labelSmImgOnClickVar;
					if (hoverState==1) {
						labelSmImgTagRender += " onmouseover='cpLabelMouseOver(\"cpLabelName" + labelArray[y][0] + "\", \"cp_label_name\");" + replaceSmImgMouseOver + "' onfocus='cpLabelMouseOver(\"cpLabelName" + labelArray[y][0] + "\", \"cp_label_name\");" + replaceSmImgMouseOver + "'";
					}
					labelSmImgTagRender += "><div id='cpLabelSmImgDivBack" + labelArray[y][0] + "' class='cp_label_sm_img_div_back cp_label_sm_img_div_back_" + replaceSmImgBackClass + " cp_label_sm_img_div_back_" + labelArray[y][0] + replaceSmImgMouseClass +"'" + postImgBig + "><\/div><div id='cpLabelSmImgDivOver" + labelArray[y][0] + "' class='cp_label_sm_img_div_over cp_label_sm_img_div_over_" + labelArray[y][0] +"'" + replaceSmImgHidden;
					if (hoverState==1) {
						labelSmImgTagRender += " onmouseout='cpLabelMouseOut(\"cpLabelName" + labelArray[y][0] + "\", \"cp_label_name\");" + replaceSmImgMouseOut + "' onblur='cpLabelMouseOut(\"cpLabelName" + labelArray[y][0] + "\", \"cp_label_name\");" + replaceSmImgMouseOut + "'";
					}
					labelSmImgTagRender += ">&nbsp;<\/div><\/div>";
					labelHTMLTest = baseLabelSmImgHTMLStart + labelSmImgTagRender + baseLabelSmImgHTMLEnd;
				}
				var labelModalTagStart = labelHTMLTest.indexOf("<!--LABELMODAL");
				if (labelModalTagStart != -1) {
					var labelModalTagEnd = labelHTMLTest.indexOf(">",labelModalTagStart);
					var labelModalTagStrip = labelHTMLTest.substring(labelModalTagStart,(labelModalTagEnd+1));
					var labelModalHTMLStart = labelHTMLTest.substr(0,labelModalTagStart);
					var labelModalHTMLEnd = labelHTMLTest.substr((labelModalTagEnd+1));
					var labelProdWrite = "<div id='cpLabelModalShell" + labelArray[y][0] + "' class='cp_label_modal_shell cp_label_modal_shell_" + labelArray[y][0] + " panel_close_me' style='display:none;'><\/div><div style='display:none;'>";
					for (z=0; z<prodDisplayArray.length; z++) {
						if (prodDisplayArray[z][8] == labelArray[y][0]) {
							labelProdWrite += "<div id='cpProductName" + prodDisplayArray[z][0] + "' style='display:none;'>&nbsp;<\/div>";
						}
					}
					labelProdWrite += "<\/div>";
					labelHTMLTest = labelModalHTMLStart + labelProdWrite + labelModalHTMLEnd;
				}
				else {
					var labelProdWrite = "<div style='display:none;'>";
					for (z=0; z<prodDisplayArray.length; z++) {
						if (prodDisplayArray[z][8] == labelArray[y][0]) {
							labelProdWrite += "<div id='cpProductName" + prodDisplayArray[z][0] + "' style='display:none;'>&nbsp;<\/div>";
						}
					}
					labelProdWrite += "<\/div>";
					labelHTMLTest += labelProdWrite;
				}
				var labelClasses = "";
				for (r=0; r<labelArray.length; r++) {
					var foundThisLabel = 0;
					for (t=0; t<prodLabelArray.length; t++) {
						for (b=0; b<prodDisplayArray.length; b++) {
							if (prodLabelArray[t][1] == prodDisplayArray[b][0] && prodLabelArray[t][2] == labelArray[r][0] && prodDisplayArray[b][8] == labelArray[y][0]) {
								labelClasses += " cp_label_label_" + labelArray[r][0];
								foundThisLabel = 1;
								break;
							}
						}
						if (foundThisLabel == 1) {
							break;
						}
					}
				}
				labelHTML += "<div id='cpLabelItem" + labelArray[y][0] + "' class='cp_label_item_shell cp_label_item_" + labelArray[y][2] + labelClasses + "'>" + labelHTMLTest + "<\/div>";
			}
		}
		if(gLog==1){console.log("cpLabelListShell - POPULATE");}
		document.getElementById('cpLabelListShell').innerHTML = labelHTML;
		cpLHW = setInterval(cpLabelHoverWait, 1000);
	}
}
function controlPanelWriteCart() {
	if(gLog==1){console.log("controlPanelWriteCart - Start");}
	prodCartArray.length = 0;
	for (q=0; q<prodDisplayArray.length; q++) {
		if (prodDisplayArray[q][9] == 1) {
			prodCartArray.push(prodDisplayArray[q][0]);
		}
	}
	if(gLog==1){console.log("controlPanelWriteCart - " + prodCartArray.length + " Products");}
	if (document.getElementById('cpShoppingCartShell')) {
		var writeHTML = "";
		for (w=0; w<prodCartArray.length; w++) {
			var prodCartHTML = autotextIt(p0TemplateSet.cpCartProductDiv,"cpCartProduct");
			for (p=0; p<prodDisplayArray.length; p++) {
				if (prodDisplayArray[p][0] == prodCartArray[w]) {
					var prodDiscTagStart = prodCartHTML.indexOf("<!--HIGHPROD");
					if (prodDiscTagStart != -1) {
						var prodDiscTagEnd = prodCartHTML.indexOf(">",prodDiscTagStart);
						var prodDiscTagStrip = prodCartHTML.substring(prodDiscTagStart,(prodDiscTagEnd+1));
						var prodDiscHTMLStart = prodCartHTML.substr(0,prodDiscTagStart);
						var prodDiscHTMLEnd = prodCartHTML.substr((prodDiscTagEnd+1));
						var prodDiscWrite = "";
						var discVal = prodDisplayArray[p][6];
						if (discVal != 1) {
							prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " cpCartProduct_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
						}
						productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
					}
					var prodCartNameTagStart = prodCartHTML.indexOf("<!--PRODNAME");
					if (prodCartNameTagStart != -1) {
						var prodCartNameTagEnd = prodCartHTML.indexOf(">",prodCartNameTagStart);
						var prodCartNameTagStrip = prodCartHTML.substring(prodCartNameTagStart,(prodCartNameTagEnd+1));
						var baseProdCartNameHTMLStart = prodCartHTML.substr(0,prodCartNameTagStart);
						var baseProdCartNameHTMLEnd = prodCartHTML.substr((prodCartNameTagEnd+1));
						var descTest = prodCartNameTagStrip.indexOf(" DESC");
						if (descTest != -1) {
							var descVal = "<span class='global_discontinued cp_prod_cart_name_desc'>" + prodDisplayArray[p][3] + "<\/span>";
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
						prodCartHTML = baseProdCartNameHTMLStart + "<div id='cpProdCartName" + prodDisplayArray[p][0] + "' class='cp_prod_cart_name'>" + prodNameItalicVar + "<span class='cp_prod_cart_name_name'>" + prodDisplayArray[p][2] + "<\/span>" + descVal + "<\/div>" + baseProdCartNameHTMLEnd;
					}
					var prodDescTagStart = prodCartHTML.indexOf("<!--PRODDESC");
					if (prodDescTagStart != -1) {
						var prodDescTagEnd = prodCartHTML.indexOf(">",prodDescTagStart);
						var prodDescTagStrip = prodCartHTML.substring(prodDescTagStart,(prodDescTagEnd+1));
						var baseProdDescHTMLStart = prodCartHTML.substr(0,prodDescTagStart);
						var baseProdDescHTMLEnd = prodCartHTML.substr((prodDescTagEnd+1));
						prodCartHTML = baseProdDescHTMLStart + "<div id='cpProdCartDesc" + prodDisplayArray[p][0] + "' class='cp_prod_cart_desc'>" + prodDisplayArray[p][3] + "<\/div>" + baseProdDescHTMLEnd;
					}
					var prodCatTagStart = prodCartHTML.indexOf("<!--PRODCAT");
					if (prodCatTagStart != -1) {
						var prodCatTagEnd = prodCartHTML.indexOf(">",prodCatTagStart);
						var prodCatTagStrip = prodCartHTML.substring(prodCatTagStart,(prodCatTagEnd+1));
						var baseProdCatHTMLStart = prodCartHTML.substr(0,prodCatTagStart);
						var baseProdCatHTMLEnd = prodCartHTML.substr((prodCatTagEnd+1));
						prodCartHTML = baseProdCatHTMLStart + "<div id='cpProdCartCat" + prodDisplayArray[p][0] + "' class='cp_prod_cart_cat'>" + prodDisplayArray[p][16] + "<\/div>" + baseProdCatHTMLEnd;
					}
					var prodCartBigImgTagStart = prodCartHTML.indexOf("<!--PRODBIGIMG");
					if (prodCartBigImgTagStart != -1) {
						var prodCartBigImgTagEnd = prodCartHTML.indexOf(">",prodCartBigImgTagStart);
						var prodCartBigImgTagStrip = prodCartHTML.substring(prodCartBigImgTagStart,(prodCartBigImgTagEnd+1));
						var baseProdCartBigImgHTMLStart = prodCartHTML.substr(0,prodCartBigImgTagStart);
						var baseProdCartBigImgHTMLEnd = prodCartHTML.substr((prodCartBigImgTagEnd+1));
						prodCartHTML = baseProdCartBigImgHTMLStart + "<img title=\"" + prodDisplayArray[p][3] + "\" alt=\"" + prodDisplayArray[p][3] + "\" id='cpProdCartBigImg" + prodDisplayArray[p][0] + "' class='cp_prod_cart_bigimg' src='" + clientImgBase + prodDisplayArray[p][4] + "'>" + baseProdCartBigImgHTMLEnd;
					}
					var prodCartSmImgTagStart = prodCartHTML.indexOf("<!--PRODSMIMG");
					if (prodCartSmImgTagStart != -1) {
						var prodCartSmImgTagEnd = prodCartHTML.indexOf(">",prodCartSmImgTagStart);
						var prodCartSmImgTagStrip = prodCartHTML.substring(prodCartSmImgTagStart,(prodCartSmImgTagEnd+1));
						var baseProdCartSmImgHTMLStart = prodCartHTML.substr(0,prodCartSmImgTagStart);
						var baseProdCartSmImgHTMLEnd = prodCartHTML.substr((prodCartSmImgTagEnd+1));
						prodCartHTML = baseProdCartSmImgHTMLStart + "<img title=\"" + prodDisplayArray[p][3] + "\" alt=\"" + prodDisplayArray[p][3] + "\" id='cpProdCartSmImg" + prodDisplayArray[p][0] + "' class='cp_prod_cart_smimg' src='" + clientImgBase + prodDisplayArray[p][5] + "'>" + baseProdCartSmImgHTMLEnd;
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
						removeButtonRender += "<div id='cpProdCartRemoveButton" + prodCartArray[w] + "' class='cp_prod_cart_remove_button cp_prod_cart_remove_button_" + prodCartArray[w] + " cp_prod_cart_remove_button_off'";
						if (hoverState==1) {
							removeButtonRender += " onmouseover='genericButtonOver(\"cp_prod_cart_remove_button_" + prodCartArray[w] + "\",\"cp_prod_cart_remove_button\");' onfocus='genericButtonOver(\"cp_prod_cart_remove_button_" + prodCartArray[w] + "\",\"cp_prod_cart_remove_button\");' onmouseout='genericButtonOut(\"cp_prod_cart_remove_button_" + prodCartArray[w] + "\",\"cp_prod_cart_remove_button\");' onblur='genericButtonOut(\"cp_prod_cart_remove_button_" + prodCartArray[w] + "\",\"cp_prod_cart_remove_button\");'";
						}
						removeButtonRender += " onclick='controlPanelRemoveItem(" + prodCartArray[w] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){controlPanelRemoveItem(" + prodCartArray[w] + ");}' tabindex='0' title=\"" + removeButtonValueVar + "\">" + removeButtonItalicVar + removeButtonValueVar + "<\/div>";
						prodCartHTML = removeButtonHTMLStart + removeButtonRender + removeButtonHTMLEnd;
					}
				}
			}
			writeHTML += prodCartHTML;
		}
		var cpEmpt = autotextIt(p0TemplateSet.cpCartEmptyDiv,"cpCartEmpty");
		writeHTML += "<span id='cpCartEmptyShell' style='display:none;'>" + cpEmpt + "<\/span>";
		document.getElementById('cpShoppingCartShell').innerHTML = writeHTML;
		if (prodCartArray.length == 0 && document.getElementById('cpCartEmptyShell')) {
			document.getElementById('cpCartEmptyShell').style.display = "block";
		}
		if (document.getElementById('cpProdCartCount')) {
			if (prodCartArray.length == 0) {
				document.getElementById('cpProdCartCount').innerHTML = "All";
			}
			else {
				document.getElementById('cpProdCartCount').innerHTML = prodCartArray.length;
			}
		}
		if (document.getElementById('cpProdCountNum')) {
			if (prodCartArray.length == 0) {
				document.getElementById('cpProdCountNum').innerHTML = "All";
			}
			else {
				document.getElementById('cpProdCountNum').innerHTML = prodCartArray.length;
			}
			if (prodCartArray.length == 1) {
				if (document.getElementById('cpProdCountText')) {
					document.getElementById('cpProdCountText').innerHTML = cpProdCountSingularVar;
				}
			}
			else {
				if (document.getElementById('cpProdCountText')) {
					document.getElementById('cpProdCountText').innerHTML = cpProdCountPluralVar;
				}
			}
		}
		if (document.getElementById('cpsProdCountNum')) {
			if (prodCartArray.length == 0 || prodCartArray.length == prodDisplayArray.length) {
				document.getElementById('cpsProdCountNum').innerHTML = cpOParen + prodDisplayArray.length + cpCParen;
			}
			else {
				document.getElementById('cpsProdCountNum').innerHTML = cpOParen + prodCartArray.length + cpCParen;
			}
			if (prodCartArray.length == 0 || prodCartArray.length == prodDisplayArray.length) {
				if (document.getElementById('cpsProdCountText')) {
					document.getElementById('cpsProdCountText').innerHTML = "";
				}
			}
			else if (prodCartArray.length == 1) {
				if (document.getElementById('cpsProdCountText')) {
					document.getElementById('cpsProdCountText').innerHTML = cpsProdCountSingularVar;
				}
			}
			else {
				if (document.getElementById('cpsProdCountText')) {
					document.getElementById('cpsProdCountText').innerHTML = cpsProdCountPluralVar;
				}
			}
		}
	}
}
function cpCatModalClose(whatPanel) {
	if(gLog==1){console.log("cpCatModalClose - " + whatPanel,pNum);}
	var pNum = whatPanel.substring(5,6);
	document.getElementById('catModalBack').style.display = "none";
	document.getElementById('catModalFront').style.display = "none";
	var pNum = whatPanel.substring(5,6);
	document.getElementById(whatPanel).style.display = "block";
}
function cpGroupModalClose(whatPanel) {
	if(gLog==1){console.log("cpGroupModalClose - " + whatPanel,pNum);}
	var pNum = whatPanel.substring(5,6);
	document.getElementById('groupModalBack').style.display = "none";
	document.getElementById('groupModalFront').style.display = "none";
	var pNum = whatPanel.substring(5,6);
	document.getElementById(whatPanel).style.display = "block";
}
function cpCMPMouseOver(theID,theClass) {
	if ($("#"+theID).hasClass(theClass+"_off")) {
		$("#"+theID).removeClass(theClass+"_off");
		$("#"+theID).addClass(theClass+"_hover_off");
	}
	else if ($("#"+theID).hasClass(theClass+"_on")) {
		$("#"+theID).removeClass(theClass+"_on");
		$("#"+theID).addClass(theClass+"_hover_on");
	}
}
function cpCMPMouseOut(theID,theClass) {
	if ($("#"+theID).hasClass(theClass+"_hover_off")) {
		$("#"+theID).removeClass(theClass+"_hover_off");
		$("#"+theID).addClass(theClass+"_off");
	}
	else if ($("#"+theID).hasClass(theClass+"_hover_on")) {
		$("#"+theID).removeClass(theClass+"_hover_on");
		$("#"+theID).addClass(theClass+"_on");
	}
}
function cpGMPMouseOver(theID,theClass) {
	if ($("#"+theID).hasClass(theClass+"_off")) {
		$("#"+theID).removeClass(theClass+"_off");
		$("#"+theID).addClass(theClass+"_hover_off");
	}
	else if ($("#"+theID).hasClass(theClass+"_on")) {
		$("#"+theID).removeClass(theClass+"_on");
		$("#"+theID).addClass(theClass+"_hover_on");
	}
}
function cpGMPMouseOut(theID,theClass) {
	if ($("#"+theID).hasClass(theClass+"_hover_off")) {
		$("#"+theID).removeClass(theClass+"_hover_off");
		$("#"+theID).addClass(theClass+"_off");
	}
	else if ($("#"+theID).hasClass(theClass+"_hover_on")) {
		$("#"+theID).removeClass(theClass+"_hover_on");
		$("#"+theID).addClass(theClass+"_on");
	}
}
function cpCMPSelAll(catID) {
	if(gLog==1){console.log("cpCMPSelAll - START",catID);}
	var wholeCat = 0;
	var someCat = 0;
	for (q=0; q<prodDisplayArray.length; q++) {
		if (prodDisplayArray[q][8] == catID) {
			wholeCat++;
			if (prodDisplayArray[q][9] == 1) {
				someCat++;
			}
		}
	}
	if (someCat == 0 || someCat != wholeCat) {
		for (x=0; x<prodDisplayArray.length; x++) {
			if (prodDisplayArray[x][8] == catID) {
				prodDisplayArray[x][9] = 1;
				window["panel1ProductNameVar"+prodDisplayArray[x][0]] = 1;
				if (document.getElementById("cpCatModalProd" + prodDisplayArray[x][0])) {
					$("#cpCatModalProd" + prodDisplayArray[x][0]).removeClass('cp_cat_modal_prod_hover_off');
					$("#cpCatModalProd" + prodDisplayArray[x][0]).removeClass('cp_cat_modal_prod_hover_on');
					$("#cpCatModalProd" + prodDisplayArray[x][0]).removeClass('cp_cat_modal_prod_off');
					$("#cpCatModalProd" + prodDisplayArray[x][0]).addClass('cp_cat_modal_prod_on');
				}
				if (document.getElementById("cpCatModalMobProd" + prodDisplayArray[x][0])) {
					$("#cpCatModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_cat_modal_mob_prod_hover_off');
					$("#cpCatModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_cat_modal_mob_prod_hover_on');
					$("#cpCatModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_cat_modal_mob_prod_off');
					$("#cpCatModalMobProd" + prodDisplayArray[x][0]).addClass('cp_cat_modal_mob_prod_on');
				}
				if(gLog==1){console.log("cpCMPSelAll - prodDisplayArray["+x+"][9] = ",prodDisplayArray[x][9]);}
			}
		}
		if (document.getElementById("cpCatModalProdAll" + catID)) {
			$("#cpCatModalProdAll" + catID).removeClass('cp_cat_modal_prod_all_hover_off');
			$("#cpCatModalProdAll" + catID).removeClass('cp_cat_modal_prod_all_hover_on');
			$("#cpCatModalProdAll" + catID).removeClass('cp_cat_modal_prod_all_off');
			$("#cpCatModalProdAll" + catID).addClass('cp_cat_modal_prod_all_on');
		}
		if (document.getElementById("cpCatModalMobProdAll" + catID)) {
			$("#cpCatModalMobProdAll" + catID).removeClass('cp_cat_modal_mob_prod_all_hover_off');
			$("#cpCatModalMobProdAll" + catID).removeClass('cp_cat_modal_mob_prod_all_hover_on');
			$("#cpCatModalMobProdAll" + catID).removeClass('cp_cat_modal_mob_prod_all_off');
			$("#cpCatModalMobProdAll" + catID).addClass('cp_cat_modal_mob_prod_all_on');
		}
		if (document.getElementById('cpCategoryBigImgDivBack'+catID) && $('#cpCategoryBigImgDivBack'+catID).hasClass('img_replace_active')) {
			$(".cp_category_big_img_div_over_"+catID).fadeIn(50);
			$(".cp_category_big_img_div_back_"+catID).removeClass('cp_category_big_img_div_back_off');
			$(".cp_category_big_img_div_back_"+catID).addClass('cp_category_big_img_div_back_on');
		}
		if (document.getElementById('cpCategorySmImgDivBack'+catID) && $('#cpCategorySmImgDivBack'+catID).hasClass('img_replace_active')) {
			$(".cp_category_sm_img_div_over_"+catID).fadeIn(50);
			$(".cp_category_sm_img_div_back_"+catID).removeClass('cp_category_sm_img_div_back_off');
			$(".cp_category_sm_img_div_back_"+catID).addClass('cp_category_sm_img_div_back_on');
		}
		if(gLog==1){console.log("cpCMPSelAll - All Active");}
	}
	else {
		for (x=0; x<prodDisplayArray.length; x++) {
			if (prodDisplayArray[x][8] == catID) {
				prodDisplayArray[x][9] = 0;
				window["panel1ProductNameVar"+prodDisplayArray[x][0]] = 0;
				if (document.getElementById("cpCatModalProd" + prodDisplayArray[x][0])) {
					$("#cpCatModalProd" + prodDisplayArray[x][0]).removeClass('cp_cat_modal_prod_hover_off');
					$("#cpCatModalProd" + prodDisplayArray[x][0]).removeClass('cp_cat_modal_prod_hover_on');
					$("#cpCatModalProd" + prodDisplayArray[x][0]).addClass('cp_cat_modal_prod_off');
					$("#cpCatModalProd" + prodDisplayArray[x][0]).removeClass('cp_cat_modal_prod_on');
				}
				if (document.getElementById("cpCatModalMobProd" + prodDisplayArray[x][0])) {
					$("#cpCatModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_cat_modal_mob_prod_hover_off');
					$("#cpCatModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_cat_modal_mob_prod_hover_on');
					$("#cpCatModalMobProd" + prodDisplayArray[x][0]).addClass('cp_cat_modal_mob_prod_off');
					$("#cpCatModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_cat_modal_mob_prod_on');
				}
				if(gLog==1){console.log("cpCMPSelAll - prodDisplayArray["+x+"][9] = ",prodDisplayArray[x][9]);}
			}
		}
		if (document.getElementById("cpCatModalProdAll" + catID)) {
			$("#cpCatModalProdAll" + catID).removeClass('cp_cat_modal_prod_all_hover_off');
			$("#cpCatModalProdAll" + catID).removeClass('cp_cat_modal_prod_all_hover_on');
			$("#cpCatModalProdAll" + catID).addClass('cp_cat_modal_prod_all_off');
			$("#cpCatModalProdAll" + catID).removeClass('cp_cat_modal_prod_all_on');
		}
		if (document.getElementById("cpCatModalMobProdAll" + catID)) {
			$("#cpCatModalMobProdAll" + catID).removeClass('cp_cat_modal_mob_prod_all_hover_off');
			$("#cpCatModalMobProdAll" + catID).removeClass('cp_cat_modal_mob_prod_all_hover_on');
			$("#cpCatModalMobProdAll" + catID).addClass('cp_cat_modal_mob_prod_all_off');
			$("#cpCatModalMobProdAll" + catID).removeClass('cp_cat_modal_mob_prod_all_on');
		}
		if (document.getElementById('cpCategoryBigImgDivBack'+catID) && $('#cpCategoryBigImgDivBack'+catID).hasClass('img_replace_active')) {
			$(".cp_category_big_img_div_over_"+catID).fadeOut(50);
			$(".cp_category_big_img_div_back_"+catID).addClass('cp_category_big_img_div_back_off');
			$(".cp_category_big_img_div_back_"+catID).removeClass('cp_category_big_img_div_back_on');
		}
		if (document.getElementById('cpCategorySmImgDivBack'+catID) && $('#cpCategorySmImgDivBack'+catID).hasClass('img_replace_active')) {
			$(".cp_category_sm_img_div_over_"+catID).fadeOut(50);
			$(".cp_category_sm_img_div_back_"+catID).addClass('cp_category_sm_img_div_back_off');
			$(".cp_category_sm_img_div_back_"+catID).removeClass('cp_category_sm_img_div_back_on');
		}
		if(gLog==1){console.log("cpCMPSelAll - All Inactive");}
	}
	someCat = 0;
	for (q=0; q<prodDisplayArray.length; q++) {
		if (prodDisplayArray[q][8] == catID) {
			if (prodDisplayArray[q][9] == 1) {
				someCat++;
			}
		}
	}
	for (x=0; x<catArray.length; x++) {
		if (catArray[x][0] == catID) {
			if (someCat != 0) {
				catArray[x][9] = 1;
			}
			else {
				catArray[x][9] = 0;
			}
			if(gLog==1){console.log("cpCMPSelAll - catArray["+x+"][9]="+catArray[x][9]);}
			break;
		}
	}
	controlPanelWriteCart();
}
function cpGMPSelAll(groupID) {
	if(gLog==1){console.log("cpGMPSelAll - START",groupID);}
	var wholeGroup = 0;
	var someGroup = 0;
	var whatGroup = -1;
	var pgpArr = [];
	for (g=0; g<prodGroupArray.length; g++) {
		if (prodGroupArray[g][0] == groupID) {
			whatGroup = g;
			pgpArr = prodGroupArray[g][7].split(",");
			for (pgp=0; pgp<pgpArr.length; pgp++) {
				for (q=0; q<prodDisplayArray.length; q++) {
					if (prodDisplayArray[q][0] == pgpArr[pgp]) {
						wholeGroup++;
						if (prodDisplayArray[q][9] == 1) {
							someGroup++;
						}
						break;
					}
				}
			}
			break;
		}
	}
	if(gLog==1){console.log("cpGMPSelAll - some/whole",someGroup,wholeGroup);}
	if (someGroup == 0 || someGroup != wholeGroup) {
		for (x=0; x<prodDisplayArray.length; x++) {
			for (pgp=0; pgp<pgpArr.length; pgp++) {
				if (prodDisplayArray[x][0] == pgpArr[pgp]) {
					prodDisplayArray[x][9] = 1;
					window["panel1ProductNameVar"+prodDisplayArray[x][0]] = 1;
					if (document.getElementById("cpGroupModalProd" + prodDisplayArray[x][0])) {
						$("#cpGroupModalProd" + prodDisplayArray[x][0]).removeClass('cp_group_modal_prod_hover_off');
						$("#cpGroupModalProd" + prodDisplayArray[x][0]).removeClass('cp_group_modal_prod_hover_on');
						$("#cpGroupModalProd" + prodDisplayArray[x][0]).removeClass('cp_group_modal_prod_off');
						$("#cpGroupModalProd" + prodDisplayArray[x][0]).addClass('cp_group_modal_prod_on');
					}
					if (document.getElementById("cpGroupModalMobProd" + prodDisplayArray[x][0])) {
						$("#cpGroupModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_group_modal_mob_prod_hover_off');
						$("#cpGroupModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_group_modal_mob_prod_hover_on');
						$("#cpGroupModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_group_modal_mob_prod_off');
						$("#cpGroupModalMobProd" + prodDisplayArray[x][0]).addClass('cp_group_modal_mob_prod_on');
					}
					if(gLog==1){console.log("cpGMPSelAll - prodDisplayArray["+x+"][9] = ",prodDisplayArray[x][9]);}
					break;
				}
			}
		}
		if (document.getElementById("cpGroupModalProdAll" + groupID)) {
			$("#cpGroupModalProdAll" + groupID).removeClass('cp_group_modal_prod_all_hover_off');
			$("#cpGroupModalProdAll" + groupID).removeClass('cp_group_modal_prod_all_hover_on');
			$("#cpGroupModalProdAll" + groupID).removeClass('cp_group_modal_prod_all_off');
			$("#cpGroupModalProdAll" + groupID).addClass('cp_group_modal_prod_all_on');
		}
		if (document.getElementById("cpGroupModalMobProdAll" + groupID)) {
			$("#cpGroupModalMobProdAll" + groupID).removeClass('cp_group_modal_mob_prod_all_hover_off');
			$("#cpGroupModalMobProdAll" + groupID).removeClass('cp_group_modal_mob_prod_all_hover_on');
			$("#cpGroupModalMobProdAll" + groupID).removeClass('cp_group_modal_mob_prod_all_off');
			$("#cpGroupModalMobProdAll" + groupID).addClass('cp_group_modal_mob_prod_all_on');
		}
		if (document.getElementById('cpGroupBigImgDivBack'+groupID) && $('#cpGroupBigImgDivBack'+groupID).hasClass('img_replace_active')) {
			$(".cp_group_big_img_div_over_"+groupID).fadeIn(50);
			$(".cp_group_big_img_div_back_"+groupID).removeClass('cp_group_big_img_div_back_off');
			$(".cp_group_big_img_div_back_"+groupID).addClass('cp_group_big_img_div_back_on');
		}
		if (document.getElementById('cpGroupSmImgDivBack'+groupID) && $('#cpGroupSmImgDivBack'+groupID).hasClass('img_replace_active')) {
			$(".cp_group_sm_img_div_over_"+groupID).fadeIn(50);
			$(".cp_group_sm_img_div_back_"+groupID).removeClass('cp_group_sm_img_div_back_off');
			$(".cp_group_sm_img_div_back_"+groupID).addClass('cp_group_sm_img_div_back_on');
		}
		if(gLog==1){console.log("cpGMPSelAll - All Active");}
	}
	else {
		for (x=0; x<prodDisplayArray.length; x++) {
			for (pgp=0; pgp<pgpArr.length; pgp++) {
				if (prodDisplayArray[x][0] == pgpArr[pgp]) {
					prodDisplayArray[x][9] = 0;
					window["panel1ProductNameVar"+prodDisplayArray[x][0]] = 0;
					if (document.getElementById("cpGroupModalProd" + prodDisplayArray[x][0])) {
						$("#cpGroupModalProd" + prodDisplayArray[x][0]).removeClass('cp_group_modal_prod_hover_off');
						$("#cpGroupModalProd" + prodDisplayArray[x][0]).removeClass('cp_group_modal_prod_hover_on');
						$("#cpGroupModalProd" + prodDisplayArray[x][0]).addClass('cp_group_modal_prod_off');
						$("#cpGroupModalProd" + prodDisplayArray[x][0]).removeClass('cp_group_modal_prod_on');
					}
					if (document.getElementById("cpGroupModalMobProd" + prodDisplayArray[x][0])) {
						$("#cpGroupModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_group_modal_mob_prod_hover_off');
						$("#cpGroupModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_group_modal_mob_prod_hover_on');
						$("#cpGroupModalMobProd" + prodDisplayArray[x][0]).addClass('cp_group_modal_mob_prod_off');
						$("#cpGroupModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_group_modal_mob_prod_on');
					}
					if(gLog==1){console.log("cpGMPSelAll - prodDisplayArray["+x+"][9] = ",prodDisplayArray[x][9]);}
					break;
				}
			}
		}
		if (document.getElementById("cpGroupModalProdAll" + groupID)) {
			$("#cpGroupModalProdAll" + groupID).removeClass('cp_group_modal_prod_all_hover_off');
			$("#cpGroupModalProdAll" + groupID).removeClass('cp_group_modal_prod_all_hover_on');
			$("#cpGroupModalProdAll" + groupID).addClass('cp_group_modal_prod_all_off');
			$("#cpGroupModalProdAll" + groupID).removeClass('cp_group_modal_prod_all_on');
		}
		if (document.getElementById("cpGroupModalMobProdAll" + groupID)) {
			$("#cpGroupModalMobProdAll" + groupID).removeClass('cp_group_modal_mob_prod_all_hover_off');
			$("#cpGroupModalMobProdAll" + groupID).removeClass('cp_group_modal_mob_prod_all_hover_on');
			$("#cpGroupModalMobProdAll" + groupID).addClass('cp_group_modal_mob_prod_all_off');
			$("#cpGroupModalMobProdAll" + groupID).removeClass('cp_group_modal_mob_prod_all_on');
		}
		if (document.getElementById('cpGroupBigImgDivBack'+groupID) && $('#cpGroupBigImgDivBack'+groupID).hasClass('img_replace_active')) {
			$(".cp_group_big_img_div_over_"+groupID).fadeOut(50);
			$(".cp_group_big_img_div_back_"+groupID).addClass('cp_group_big_img_div_back_off');
			$(".cp_group_big_img_div_back_"+groupID).removeClass('cp_group_big_img_div_back_on');
		}
		if (document.getElementById('cpGroupSmImgDivBack'+groupID) && $('#cpGroupSmImgDivBack'+groupID).hasClass('img_replace_active')) {
			$(".cp_group_sm_img_div_over_"+groupID).fadeOut(50);
			$(".cp_group_sm_img_div_back_"+groupID).addClass('cp_group_sm_img_div_back_off');
			$(".cp_group_sm_img_div_back_"+groupID).removeClass('cp_group_sm_img_div_back_on');
		}
		if(gLog==1){console.log("cpGMPSelAll - All Inactive");}
	}
	someGroup = 0;
	for (pgp=0; pgp<pgpArr.length; pgp++) {
		for (q=0; q<prodDisplayArray.length; q++) {
			if (prodDisplayArray[q][0] == pgpArr[pgp]) {
				if (prodDisplayArray[q][9] == 1) {
					someGroup++;
				}
				break;
			}
		}
	}
	for (x=0; x<prodGroupArray.length; x++) {
		if (prodGroupArray[x][0] == groupID) {
			if (someGroup != 0) {
				prodGroupArray[x][6] = 1;
			}
			else {
				prodGroupArray[x][6] = 0;
			}
			if(gLog==1){console.log("cpGMPSelAll - prodGroupArray["+x+"][6]="+prodGroupArray[x][6]);}
			break;
		}
	}
	controlPanelWriteCart();
}
function cpCMPSelect(prodID,catID) {
	if(gLog==1){console.log("cpCMPSelect - START",prodID,catID);}
	for (x=0; x<prodDisplayArray.length; x++) {
		if (prodDisplayArray[x][0] == prodID) {
			if (prodDisplayArray[x][9] == 0) {
				prodDisplayArray[x][9] = 1;
				window["panel1ProductNameVar"+prodDisplayArray[x][0]] = 1;
				if (document.getElementById("cpCatModalProd" + prodDisplayArray[x][0])) {
					$("#cpCatModalProd" + prodDisplayArray[x][0]).removeClass('cp_cat_modal_prod_hover_off');
					$("#cpCatModalProd" + prodDisplayArray[x][0]).removeClass('cp_cat_modal_prod_hover_on');
					$("#cpCatModalProd" + prodDisplayArray[x][0]).removeClass('cp_cat_modal_prod_off');
					$("#cpCatModalProd" + prodDisplayArray[x][0]).addClass('cp_cat_modal_prod_on');
				}
				if (document.getElementById("cpCatModalMobProd" + prodDisplayArray[x][0])) {
					$("#cpCatModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_cat_modal_mob_prod_hover_off');
					$("#cpCatModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_cat_modal_mob_prod_hover_on');
					$("#cpCatModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_cat_modal_mob_prod_off');
					$("#cpCatModalMobProd" + prodDisplayArray[x][0]).addClass('cp_cat_modal_mob_prod_on');
				}
				if(gLog==1){console.log("cpCMPSelect - prodDisplayArray["+x+"][9] = ",prodDisplayArray[x][9]);}
			}
			else {
				prodDisplayArray[x][9] = 0;
				window["panel1ProductNameVar"+prodDisplayArray[x][0]] = 0;
				if (document.getElementById("cpCatModalProd" + prodDisplayArray[x][0])) {
					$("#cpCatModalProd" + prodDisplayArray[x][0]).removeClass('cp_cat_modal_prod_hover_off');
					$("#cpCatModalProd" + prodDisplayArray[x][0]).removeClass('cp_cat_modal_prod_hover_on');
					$("#cpCatModalProd" + prodDisplayArray[x][0]).addClass('cp_cat_modal_prod_off');
					$("#cpCatModalProd" + prodDisplayArray[x][0]).removeClass('cp_cat_modal_prod_on');
				}
				if (document.getElementById("cpCatModalMobProd" + prodDisplayArray[x][0])) {
					$("#cpCatModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_cat_modal_mob_prod_hover_off');
					$("#cpCatModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_cat_modal_mob_prod_hover_on');
					$("#cpCatModalMobProd" + prodDisplayArray[x][0]).addClass('cp_cat_modal_mob_prod_off');
					$("#cpCatModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_cat_modal_mob_prod_on');
				}
				if(gLog==1){console.log("cpCMPSelect - prodDisplayArray["+x+"][9] = ",prodDisplayArray[x][9]);}
			}
			break;
		}
	}
	var wholeCat = 0;
	var someCat = 0;
	for (q=0; q<prodDisplayArray.length; q++) {
		if (prodDisplayArray[q][8] == catID) {
			wholeCat++;
			if (prodDisplayArray[q][9] == 1) {
				someCat++;
			}
		}
	}
	if(gLog==1){console.log("cpCMPSelect - wholeCat,someCat",wholeCat,someCat);}
	for (x=0; x<catArray.length; x++) {
		if (catArray[x][0] == catID) {
			if (someCat != 0) {
				catArray[x][9] = 1;
			}
			else {
				catArray[x][9] = 0;
			}
			if(gLog==1){console.log("cpCMPSelect - catArray["+x+"][9]="+catArray[x][9]);}
		}
	}
	if (wholeCat == someCat) {
		if(gLog==1){console.log("cpCMPSelect - wholeCat==someCat");}
		if (document.getElementById("cpCatModalProdAll" + catID)) {
			$("#cpCatModalProdAll" + catID).removeClass('cp_cat_modal_prod_all_hover_off');
			$("#cpCatModalProdAll" + catID).removeClass('cp_cat_modal_prod_all_hover_on');
			$("#cpCatModalProdAll" + catID).removeClass('cp_cat_modal_prod_all_off');
			$("#cpCatModalProdAll" + catID).addClass('cp_cat_modal_prod_all_on');
		}
		if (document.getElementById("cpCatModalMobProdAll" + catID)) {
			$("#cpCatModalMobProdAll" + catID).removeClass('cp_cat_modal_mob_prod_all_hover_off');
			$("#cpCatModalMobProdAll" + catID).removeClass('cp_cat_modal_mob_prod_all_hover_on');
			$("#cpCatModalMobProdAll" + catID).removeClass('cp_cat_modal_mob_prod_all_off');
			$("#cpCatModalMobProdAll" + catID).addClass('cp_cat_modal_mob_prod_all_on');
		}
	}
	else {
		if(gLog==1){console.log("cpCMPSelect - wholeCat!=someCat");}
		if (document.getElementById("cpCatModalProdAll" + catID)) {
			$("#cpCatModalProdAll" + catID).removeClass('cp_cat_modal_prod_all_hover_off');
			$("#cpCatModalProdAll" + catID).removeClass('cp_cat_modal_prod_all_hover_on');
			$("#cpCatModalProdAll" + catID).addClass('cp_cat_modal_prod_all_off');
			$("#cpCatModalProdAll" + catID).removeClass('cp_cat_modal_prod_all_on');
		}
		if (document.getElementById("cpCatModalMobProdAll" + catID)) {
			$("#cpCatModalMobProdAll" + catID).removeClass('cp_cat_modal_mob_prod_all_hover_off');
			$("#cpCatModalMobProdAll" + catID).removeClass('cp_cat_modal_mob_prod_all_hover_on');
			$("#cpCatModalMobProdAll" + catID).addClass('cp_cat_modal_mob_prod_all_off');
			$("#cpCatModalMobProdAll" + catID).removeClass('cp_cat_modal_mob_prod_all_on');
		}
	}
	if (someCat != 0) {
		if(gLog==1){console.log("cpCMPSelect - someCat!=0");}
		if (document.getElementById('cpCategoryBigImgDivBack'+catID) && $('#cpCategoryBigImgDivBack'+catID).hasClass('img_replace_active')) {
			$(".cp_category_big_img_div_over_"+catID).fadeIn(50);
			$(".cp_category_big_img_div_back_"+catID).removeClass('cp_category_big_img_div_back_off');
			$(".cp_category_big_img_div_back_"+catID).addClass('cp_category_big_img_div_back_on');
		}
		if (document.getElementById('cpCategorySmImgDivBack'+catID) && $('#cpCategorySmImgDivBack'+catID).hasClass('img_replace_active')) {
			$(".cp_category_sm_img_div_over_"+catID).fadeIn(50);
			$(".cp_category_sm_img_div_back_"+catID).removeClass('cp_category_sm_img_div_back_off');
			$(".cp_category_sm_img_div_back_"+catID).addClass('cp_category_sm_img_div_back_on');
		}
	}
	else {
		if(gLog==1){console.log("cpCMPSelect - someCat==0");}
		if (document.getElementById('cpCategoryBigImgDivBack'+catID) && $('#cpCategoryBigImgDivBack'+catID).hasClass('img_replace_active')) {
			$(".cp_category_big_img_div_over_"+catID).fadeOut(50);
			$(".cp_category_big_img_div_back_"+catID).addClass('cp_category_big_img_div_back_off');
			$(".cp_category_big_img_div_back_"+catID).removeClass('cp_category_big_img_div_back_on');
		}
		if (document.getElementById('cpCategorySmImgDivBack'+catID) && $('#cpCategorySmImgDivBack'+catID).hasClass('img_replace_active')) {
			$(".cp_category_sm_img_div_over_"+catID).fadeOut(50);
			$(".cp_category_sm_img_div_back_"+catID).addClass('cp_category_sm_img_div_back_off');
			$(".cp_category_sm_img_div_back_"+catID).removeClass('cp_category_sm_img_div_back_on');
		}
	}
	controlPanelWriteCart();
}
function cpGMPSelect(prodID,groupID) {
	if(gLog==1){console.log("cpGMPSelect - START",prodID,groupID);}
	var whatGroup = -1;
	for (g=0; g<prodGroupArray.length; g++) {
		if (prodGroupArray[g][0] == groupID) {
			whatGroup = g;
			break;
		}
	}
	for (x=0; x<prodDisplayArray.length; x++) {
		if (prodDisplayArray[x][0] == prodID) {
			if (prodDisplayArray[x][9] == 0) {
				prodDisplayArray[x][9] = 1;
				window["panel1ProductNameVar"+prodDisplayArray[x][0]] = 1;
				if (document.getElementById("cpGroupModalProd" + prodDisplayArray[x][0])) {
					$("#cpGroupModalProd" + prodDisplayArray[x][0]).removeClass('cp_group_modal_prod_hover_off');
					$("#cpGroupModalProd" + prodDisplayArray[x][0]).removeClass('cp_group_modal_prod_hover_on');
					$("#cpGroupModalProd" + prodDisplayArray[x][0]).removeClass('cp_group_modal_prod_off');
					$("#cpGroupModalProd" + prodDisplayArray[x][0]).addClass('cp_group_modal_prod_on');
				}
				if (document.getElementById("cpGroupModalMobProd" + prodDisplayArray[x][0])) {
					$("#cpGroupModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_group_modal_mob_prod_hover_off');
					$("#cpGroupModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_group_modal_mob_prod_hover_on');
					$("#cpGroupModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_group_modal_mob_prod_off');
					$("#cpGroupModalMobProd" + prodDisplayArray[x][0]).addClass('cp_group_modal_mob_prod_on');
				}
				if(gLog==1){console.log("cpGMPSelect - prodDisplayArray["+x+"][9] = ",prodDisplayArray[x][9]);}
			}
			else {
				prodDisplayArray[x][9] = 0;
				window["panel1ProductNameVar"+prodDisplayArray[x][0]] = 0;
				if (document.getElementById("cpGroupModalProd" + prodDisplayArray[x][0])) {
					$("#cpGroupModalProd" + prodDisplayArray[x][0]).removeClass('cp_group_modal_prod_hover_off');
					$("#cpGroupModalProd" + prodDisplayArray[x][0]).removeClass('cp_group_modal_prod_hover_on');
					$("#cpGroupModalProd" + prodDisplayArray[x][0]).addClass('cp_group_modal_prod_off');
					$("#cpGroupModalProd" + prodDisplayArray[x][0]).removeClass('cp_group_modal_prod_on');
				}
				if (document.getElementById("cpGroupModalMobProd" + prodDisplayArray[x][0])) {
					$("#cpGroupModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_group_modal_mob_prod_hover_off');
					$("#cpGroupModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_group_modal_mob_prod_hover_on');
					$("#cpGroupModalMobProd" + prodDisplayArray[x][0]).addClass('cp_group_modal_mob_prod_off');
					$("#cpGroupModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_group_modal_mob_prod_on');
				}
				if(gLog==1){console.log("cpGMPSelect - prodDisplayArray["+x+"][9] = ",prodDisplayArray[x][9]);}
			}
			break;
		}
	}
	var wholeGroup = 0;
	var someGroup = 0;
	for (q=0; q<prodDisplayArray.length; q++) {
		if (prodDisplayArray[q][8] == prodGroupArray[whatGroup][0]) {
			wholeGroup++;
			if (prodDisplayArray[q][9] == 1) {
				someGroup++;
			}
		}
	}
	if(gLog==1){console.log("cpGMPSelect - wholeGroup,someGroup",wholeGroup,someGroup);}
	for (x=0; x<prodGroupArray.length; x++) {
		if (prodGroupArray[x][0] == groupID) {
			if (someGroup != 0) {
				prodGroupArray[x][6] = 1;
			}
			else {
				prodGroupArray[x][6] = 0;
			}
			if(gLog==1){console.log("cpGMPSelect - prodGroupArray["+x+"][9]="+prodGroupArray[x][9]);}
		}
	}
	if (wholeGroup == someGroup) {
		if(gLog==1){console.log("cpGMPSelect - wholeGroup==someGroup");}
		if (document.getElementById("cpGroupModalProdAll" + groupID)) {
			$("#cpGroupModalProdAll" + groupID).removeClass('cp_group_modal_prod_all_hover_off');
			$("#cpGroupModalProdAll" + groupID).removeClass('cp_group_modal_prod_all_hover_on');
			$("#cpGroupModalProdAll" + groupID).removeClass('cp_group_modal_prod_all_off');
			$("#cpGroupModalProdAll" + groupID).addClass('cp_group_modal_prod_all_on');
		}
		if (document.getElementById("cpGroupModalMobProdAll" + groupID)) {
			$("#cpGroupModalMobProdAll" + groupID).removeClass('cp_group_modal_mob_prod_all_hover_off');
			$("#cpGroupModalMobProdAll" + groupID).removeClass('cp_group_modal_mob_prod_all_hover_on');
			$("#cpGroupModalMobProdAll" + groupID).removeClass('cp_group_modal_mob_prod_all_off');
			$("#cpGroupModalMobProdAll" + groupID).addClass('cp_group_modal_mob_prod_all_on');
		}
	}
	else {
		if(gLog==1){console.log("cpGMPSelect - wholeGroup!=someGroup");}
		if (document.getElementById("cpGroupModalProdAll" + groupID)) {
			$("#cpGroupModalProdAll" + groupID).removeClass('cp_group_modal_prod_all_hover_off');
			$("#cpGroupModalProdAll" + groupID).removeClass('cp_group_modal_prod_all_hover_on');
			$("#cpGroupModalProdAll" + groupID).addClass('cp_group_modal_prod_all_off');
			$("#cpGroupModalProdAll" + groupID).removeClass('cp_group_modal_prod_all_on');
		}
		if (document.getElementById("cpGroupModalMobProdAll" + groupID)) {
			$("#cpGroupModalMobProdAll" + groupID).removeClass('cp_group_modal_mob_prod_all_hover_off');
			$("#cpGroupModalMobProdAll" + groupID).removeClass('cp_group_modal_mob_prod_all_hover_on');
			$("#cpGroupModalMobProdAll" + groupID).addClass('cp_group_modal_mob_prod_all_off');
			$("#cpGroupModalMobProdAll" + groupID).removeClass('cp_group_modal_mob_prod_all_on');
		}
	}
	if (someGroup != 0) {
		if(gLog==1){console.log("cpGMPSelect - someGroup!=0");}
		if (document.getElementById('cpGroupBigImgDivBack'+groupID) && $('#cpGroupBigImgDivBack'+groupID).hasClass('img_replace_active')) {
			$(".cp_group_big_img_div_over_"+groupID).fadeIn(50);
			$(".cp_group_big_img_div_back_"+groupID).removeClass('cp_group_big_img_div_back_off');
			$(".cp_group_big_img_div_back_"+groupID).addClass('cp_group_big_img_div_back_on');
		}
		if (document.getElementById('cpGroupSmImgDivBack'+groupID) && $('#cpGroupSmImgDivBack'+groupID).hasClass('img_replace_active')) {
			$(".cp_group_sm_img_div_over_"+groupID).fadeIn(50);
			$(".cp_group_sm_img_div_back_"+groupID).removeClass('cp_group_sm_img_div_back_off');
			$(".cp_group_sm_img_div_back_"+groupID).addClass('cp_group_sm_img_div_back_on');
		}
	}
	else {
		if(gLog==1){console.log("cpGMPSelect - someGroup==0");}
		if (document.getElementById('cpGroupBigImgDivBack'+groupID) && $('#cpGroupBigImgDivBack'+groupID).hasClass('img_replace_active')) {
			$(".cp_group_big_img_div_over_"+groupID).fadeOut(50);
			$(".cp_group_big_img_div_back_"+groupID).addClass('cp_group_big_img_div_back_off');
			$(".cp_group_big_img_div_back_"+groupID).removeClass('cp_group_big_img_div_back_on');
		}
		if (document.getElementById('cpGroupSmImgDivBack'+groupID) && $('#cpGroupSmImgDivBack'+groupID).hasClass('img_replace_active')) {
			$(".cp_group_sm_img_div_over_"+groupID).fadeOut(50);
			$(".cp_group_sm_img_div_back_"+groupID).addClass('cp_group_sm_img_div_back_off');
			$(".cp_group_sm_img_div_back_"+groupID).removeClass('cp_group_sm_img_div_back_on');
		}
	}
	controlPanelWriteCart();
}
function cpCatModalImgReplace(whatState,whatID) {
	var thisCatOnState = 0;
	for (x=0; x<catArray.length; x++) {
		if (catArray[x][0] == whatID) {
			thisCatOnState = catArray[x][9];
			break;
		}
	}
	if (whatState == 1) {
		if(gLog==1){console.log("cpCatModalImgReplace - whatState==1");}
		if (document.getElementById('cpCategoryBigImgDivBack'+whatID) && $(".cp_category_big_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".cp_category_big_img_div_over_"+whatID).show();
			$(".cp_category_big_img_div_back_"+whatID).removeClass('cp_category_big_img_div_back_off');
			$(".cp_category_big_img_div_back_"+whatID).addClass('cp_category_big_img_div_back_on');
		}
		if (document.getElementById('cpCategorySmImgDivBack'+whatID) && $(".cp_category_sm_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".cp_category_sm_img_div_over_"+whatID).show();
			$(".cp_category_sm_img_div_back_"+whatID).removeClass('cp_category_sm_img_div_back_off');
			$(".cp_category_sm_img_div_back_"+whatID).addClass('cp_category_sm_img_div_back_on');
		}
	}
	else {
		if(gLog==1){console.log("cpCatModalImgReplace - whatState==0");}
		if (document.getElementById('cpCategoryBigImgDivBack'+whatID) && $(".cp_category_big_img_div_back_"+whatID).hasClass("img_replace_active") && thisCatOnState == 0) {
			$(".cp_category_big_img_div_over_"+whatID).hide();
			$(".cp_category_big_img_div_back_"+whatID).addClass('cp_category_big_img_div_back_off');
			$(".cp_category_big_img_div_back_"+whatID).removeClass('cp_category_big_img_div_back_on');
		}
		if (document.getElementById('cpCategorySmImgDivBack'+whatID) && $(".cp_category_sm_img_div_back_"+whatID).hasClass("img_replace_active") && thisCatOnState == 0) {
			$(".cp_category_sm_img_div_over_"+whatID).hide();
			$(".cp_category_sm_img_div_back_"+whatID).addClass('cp_category_sm_img_div_back_off');
			$(".cp_category_sm_img_div_back_"+whatID).removeClass('cp_category_sm_img_div_back_on');
		}
	}
}
function cpGroupModalImgReplace(whatState,whatID) {
	var thisGroupOnState = 0;
	for (x=0; x<prodGroupArray.length; x++) {
		if (prodGroupArray[x][0] == whatID) {
			thisGroupOnState = prodGroupArray[x][6];
			break;
		}
	}
	if (whatState == 1) {
		if(gLog==1){console.log("cpGroupModalImgReplace - whatState==1");}
		if (document.getElementById('cpGroupBigImgDivBack'+whatID) && $(".cp_group_big_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".cp_group_big_img_div_over_"+whatID).show();
			$(".cp_group_big_img_div_back_"+whatID).removeClass('cp_group_big_img_div_back_off');
			$(".cp_group_big_img_div_back_"+whatID).addClass('cp_group_big_img_div_back_on');
		}
		if (document.getElementById('cpGroupSmImgDivBack'+whatID) && $(".cp_group_sm_img_div_back_"+whatID).hasClass("img_replace_active")) {
			$(".cp_group_sm_img_div_over_"+whatID).show();
			$(".cp_group_sm_img_div_back_"+whatID).removeClass('cp_group_sm_img_div_back_off');
			$(".cp_group_sm_img_div_back_"+whatID).addClass('cp_group_sm_img_div_back_on');
		}
	}
	else {
		if(gLog==1){console.log("cpGroupModalImgReplace - whatState==0");}
		if (document.getElementById('cpGroupBigImgDivBack'+whatID) && $(".cp_group_big_img_div_back_"+whatID).hasClass("img_replace_active") && thisGroupOnState == 0) {
			$(".cp_group_big_img_div_over_"+whatID).hide();
			$(".cp_group_big_img_div_back_"+whatID).addClass('cp_group_big_img_div_back_off');
			$(".cp_group_big_img_div_back_"+whatID).removeClass('cp_group_big_img_div_back_on');
		}
		if (document.getElementById('cpGroupSmImgDivBack'+whatID) && $(".cp_group_sm_img_div_back_"+whatID).hasClass("img_replace_active") && thisGroupOnState == 0) {
			$(".cp_group_sm_img_div_over_"+whatID).hide();
			$(".cp_group_sm_img_div_back_"+whatID).addClass('cp_group_sm_img_div_back_off');
			$(".cp_group_sm_img_div_back_"+whatID).removeClass('cp_group_sm_img_div_back_on');
		}
	}
}
function cpCatModalWrite(theX) {
	genericCloseMe();
	if(gLog==1){console.log("cpCatModalWrite - " + theX);}
	var catProdModalArr = [];
	var cpma = 0;
	for (x=0; x<prodDisplayArray.length; x++) {
		if (prodDisplayArray[x][8] == catArray[theX][0]) {
			catProdModalArr[cpma] = prodDisplayArray[x];
			cpma++;
		}
	}
	if(gLog==1){console.log("cpCatModalWrite - catProdModalArr ",catProdModalArr);}
		var startHTML = autotextIt(p0TemplateSet.cpCatModalStartDiv,"cpCatModalStart");
		var itemHTML = "";
		var itemRowHTML = autotextIt(p0TemplateSet.cpCatModalItemDiv,"cpCatModalItem");
		var endHTML = autotextIt(p0TemplateSet.cpCatModalEndDiv,"cpCatModalEnd");
		var baseID = "CatModal";
		var baseClass = "cat_modal";
		var isCatProdOn = 0;
		for (y=0; y<catProdModalArr.length; y++) {
			var productHTMLTest = itemRowHTML;
			var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
			if (prodDiscTagStart != -1) {
				var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
				var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
				var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
				var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
				var prodDiscWrite = "";
				var discVal = catProdModalArr[y][6];
				if (discVal != 1) {
					prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " cpCatModalItem_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
				}
				productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
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
					var descVal = "<span class='cp_" + baseClass + "_prod_desc'>" + catProdModalArr[y][3] + "<\/span>";
				}
				else {
					var descVal = "";
				}
				var prodNameTagLinkTest = prodNameTagStrip.indexOf(" LINK");
				var prodNameTagLink = "";
				if (prodNameTagLinkTest != -1) {
					prodNameTagLink = " style='cursor:pointer;' onclick='cpCMPSelect(" + catProdModalArr[y][0] + "," + catProdModalArr[y][8] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){cpCMPSelect(" + catProdModalArr[y][0] + "," + catProdModalArr[y][8] + ");}'";
					if (hoverState==1) {
						prodNameTagLink += " onmouseover='cpCMPMouseOver(\"cp" + baseID + "Prod" + catProdModalArr[y][0] + "\", \"cp_" + baseClass + "_prod\");' onfocus='cpCMPMouseOver(\"cp" + baseID + "Prod" + catProdModalArr[y][0] + "\", \"cp_" + baseClass + "_prod\");' onmouseout='cpCMPMouseOut(\"cp" + baseID + "Prod" + catProdModalArr[y][0] + "\", \"cp_" + baseClass + "_prod\");' onblur='cpCMPMouseOut(\"cp" + baseID + "Prod" + catProdModalArr[y][0] + "\", \"cp_" + baseClass + "_prod\");'";
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
					var prodNameSizeVar = catProdModalArr[y][21];
				}
				else {
					var prodNameSizeVar = catProdModalArr[y][2];
				}
				if (catProdModalArr[y][9] == "1") {
					isCatProdOn++;
					window["panel1ProductNameVar"+catProdModalArr[y][0]] = 1;
					var baseProductStyle = " cp_" + baseClass + "_prod_on";
				}
				else {
					var baseProductStyle = " cp_" + baseClass + "_prod_off";
				}
				productHTMLTest = baseProdNameHTMLStart + "<div id='cp" + baseID + "Prod" + catProdModalArr[y][0] + "' class='cp_" + baseClass + "_prod cp_" + baseClass + "_prod_" + catProdModalArr[y][0] + baseProductStyle + "'" + prodNameTagLink + " tabindex='0' title=\"" + prodNameSizeVar + "\">" + prodNameItalicVar + "<span class='cp_" + baseClass + "_prod_name'>" + prodNameSizeVar + "<\/span>" + descVal + "<\/div>" + baseProdNameHTMLEnd;
			}
			itemHTML += productHTMLTest;
		}
		var selAllTagStart = startHTML.indexOf("<!--SELECTALL");
		if (selAllTagStart != -1) {
			var selAllTagEnd = startHTML.indexOf(">",selAllTagStart);
			var selAllTagStrip = startHTML.substring(selAllTagStart,(selAllTagEnd+1));
			var selAllHTMLStart = startHTML.substr(0,selAllTagStart);
			var selAllHTMLEnd = startHTML.substr((selAllTagEnd+1));
			var selAllContent = "";
			var selAllValueStart = selAllTagStrip.indexOf(" VALUE=");
			if (selAllValueStart != -1) {
				var selAllValueEnd = selAllTagStrip.indexOf("]", selAllValueStart);
				var selAllValueVal = selAllTagStrip.substring((selAllValueStart+8),(selAllValueEnd));
			}
			else {
				var selAllValueVal = "SELECT ALL";
			}
			if (isCatProdOn == catProdModalArr.length) {
				var baseSelAllStyle = " cp_" + baseClass + "_prod_all_on";
			}
			else {
				var baseSelAllStyle = " cp_" + baseClass + "_prod_all_off";
			}
			selAllContent += "<div id='cp" + baseID + "ProdAll" + catArray[theX][0] + "' class='cp_" + baseClass + "_prod_all_" + catArray[theX][0] + " cp_" + baseClass + "_prod_all" + baseSelAllStyle + "'";
			if (hoverState==1) {
				selAllContent += " onmouseover='cpCMPMouseOver(\"cpCatModalProdAll" + catArray[theX][0] + "\", \"cp_" + baseClass + "_prod_all\");' onfocus='cpCMPMouseOver(\"cpCatModalProdAll" + catArray[theX][0] + "\", \"cp_" + baseClass + "_prod_all\");' onmouseout='cpCMPMouseOut(\"cpCatModalProdAll" + catArray[theX][0] + "\", \"cp_" + baseClass + "_prod_all\");' onblur='cpCMPMouseOut(\"cpCatModalProdAll" + catArray[theX][0] + "\", \"cp_" + baseClass + "_prod_all\");'";
			}
			selAllContent += " onclick='cpCMPSelAll(" + catArray[theX][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){cpCMPSelAll(" + catArray[theX][0] + ");}' tabindex='0' title=\"" + selAllValueVal + "\">" + selAllValueVal + "<\/div>";
			startHTML = selAllHTMLStart + selAllContent + selAllHTMLEnd;
		}
		var closeButtonTagStart = startHTML.indexOf("<!--CLOSEBUTTON");
		if (closeButtonTagStart != -1) {
			var closeButtonTagEnd = startHTML.indexOf(">",closeButtonTagStart);
			var closeButtonTagStrip = startHTML.substring(closeButtonTagStart,(closeButtonTagEnd+1));
			var closeButtonHTMLStart = startHTML.substr(0,closeButtonTagStart);
			var closeButtonHTMLEnd = startHTML.substr((closeButtonTagEnd+1));
			var closeButtonRender = "";
			var closeButtonItalicStart = closeButtonTagStrip.indexOf(" FNTAW=");
			if (closeButtonItalicStart != -1) {
				var closeButtonItalicEnd = closeButtonTagStrip.indexOf("]",closeButtonItalicStart);
				var closeButtonItalicVar = "<i class='fa " + closeButtonTagStrip.substring((closeButtonItalicStart+8),(closeButtonItalicEnd)) + "'><\/i>";
			}
			else {
				var closeButtonItalicVar = "";
			}
			closeButtonRender += "<div id='cp" + baseID + "CloseButton" + catArray[theX][0] + "' class='cp_" + baseClass + "_close_button cp_" + baseClass + "_close_button_off'";
			if (hoverState==1) {
				closeButtonRender += " onmouseover='cpButtonHover(\"cp" + baseID + "CloseButton" + catArray[theX][0] + "\",\"cp_" + baseClass + "_close_button\",1);' onfocus='cpButtonHover(\"cp" + baseID + "CloseButton" + catArray[theX][0] + "\",\"cp_" + baseClass + "_close_button\",1);' onmouseout='cpButtonHover(\"cp" + baseID + "CloseButton" + catArray[theX][0] + "\",\"cp_" + baseClass + "_close_button\",0);' onblur='cpButtonHover(\"cp" + baseID + "CloseButton" + catArray[theX][0] + "\",\"cp_" + baseClass + "_close_button\",0);'";
			}
			closeButtonRender += " onclick='genericCloseMe();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){genericCloseMe();}' tabindex='0' title=\"Close\">" + closeButtonItalicVar + "<\/div>";
			startHTML = closeButtonHTMLStart + closeButtonRender + closeButtonHTMLEnd;
		}
		var baseHTML = startHTML + itemHTML + endHTML;
		if(gLog==1){console.log("cpCatModalWrite - winWidth > globalRespWidth");}
		document.getElementById("cpCategoryModalShell"+catArray[theX][0]).innerHTML = baseHTML;
		document.getElementById("cpCategoryModalShell"+catArray[theX][0]).style.display = "block";
}
function cpGroupModalWrite(theX) {
	genericCloseMe();
	if(gLog==1){console.log("cpGroupModalWrite - " + theX);}
	var groupProdModalArr = [];
	var cpma = 0;
	var pgpArr = prodGroupArray[theX][7].split(",");
	for (x=0; x<prodDisplayArray.length; x++) {
		for (pgp=0; pgp<pgpArr.length; pgp++) {
			if (prodDisplayArray[x][0] == pgpArr[pgp]) {
				groupProdModalArr[cpma] = prodDisplayArray[x];
				cpma++;
				break;
			}
		}
	}
	if(gLog==1){console.log("cpGroupModalWrite - groupProdModalArr ",groupProdModalArr);}
		var startHTML = autotextIt(p0TemplateSet.cpGroupModalStartDiv,"cpGroupModalStart");
		var itemHTML = "";
		var itemRowHTML = autotextIt(p0TemplateSet.cpGroupModalItemDiv,"cpGroupModalItem");
		var endHTML = autotextIt(p0TemplateSet.cpGroupModalEndDiv,"cpGroupModalEnd");
		var baseID = "GroupModal";
		var baseClass = "group_modal";
		var isGroupProdOn = 0;
		for (y=0; y<groupProdModalArr.length; y++) {
			var productHTMLTest = itemRowHTML;
			var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
			if (prodDiscTagStart != -1) {
				var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
				var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
				var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
				var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
				var prodDiscWrite = "";
				var discVal = groupProdModalArr[y][6];
				if (discVal != 1) {
					prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " cpGroupModalItem_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
				}
				productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
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
					var descVal = "<span class='cp_" + baseClass + "_prod_desc'>" + groupProdModalArr[y][3] + "<\/span>";
				}
				else {
					var descVal = "";
				}
				var prodNameTagLinkTest = prodNameTagStrip.indexOf(" LINK");
				var prodNameTagLink = "";
				if (prodNameTagLinkTest != -1) {
					prodNameTagLink = " style='cursor:pointer;' onclick='cpGMPSelect(" + groupProdModalArr[y][0] + "," + groupProdModalArr[y][8] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){cpGMPSelect(" + groupProdModalArr[y][0] + "," + groupProdModalArr[y][8] + ");}'";
					if (hoverState==1) {
						prodNameTagLink += " onmouseover='cpGMPMouseOver(\"cp" + baseID + "Prod" + groupProdModalArr[y][0] + "\", \"cp_" + baseClass + "_prod\");' onfocus='cpGMPMouseOver(\"cp" + baseID + "Prod" + groupProdModalArr[y][0] + "\", \"cp_" + baseClass + "_prod\");' onmouseout='cpGMPMouseOut(\"cp" + baseID + "Prod" + groupProdModalArr[y][0] + "\", \"cp_" + baseClass + "_prod\");' onblur='cpGMPMouseOut(\"cp" + baseID + "Prod" + groupProdModalArr[y][0] + "\", \"cp_" + baseClass + "_prod\");'";
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
					var prodNameSizeVar = groupProdModalArr[y][21];
				}
				else {
					var prodNameSizeVar = groupProdModalArr[y][2];
				}
				if (groupProdModalArr[y][9] == "1") {
					isGroupProdOn++;
					window["panel1ProductNameVar"+groupProdModalArr[y][0]] = 1;
					var baseProductStyle = " cp_" + baseClass + "_prod_on";
				}
				else {
					var baseProductStyle = " cp_" + baseClass + "_prod_off";
				}
				productHTMLTest = baseProdNameHTMLStart + "<div id='cp" + baseID + "Prod" + groupProdModalArr[y][0] + "' class='cp_" + baseClass + "_prod cp_" + baseClass + "_prod_" + groupProdModalArr[y][0] + baseProductStyle + "'" + prodNameTagLink + " tabindex='0' title=\"" + prodNameSizeVar + "\">" + prodNameItalicVar + "<span class='cp_" + baseClass + "_prod_name'>" + prodNameSizeVar + "<\/span>" + descVal + "<\/div>" + baseProdNameHTMLEnd;
			}
			itemHTML += productHTMLTest;
		}
		var selAllTagStart = startHTML.indexOf("<!--SELECTALL");
		if (selAllTagStart != -1) {
			var selAllTagEnd = startHTML.indexOf(">",selAllTagStart);
			var selAllTagStrip = startHTML.substring(selAllTagStart,(selAllTagEnd+1));
			var selAllHTMLStart = startHTML.substr(0,selAllTagStart);
			var selAllHTMLEnd = startHTML.substr((selAllTagEnd+1));
			var selAllContent = "";
			var selAllValueStart = selAllTagStrip.indexOf(" VALUE=");
			if (selAllValueStart != -1) {
				var selAllValueEnd = selAllTagStrip.indexOf("]", selAllValueStart);
				var selAllValueVal = selAllTagStrip.substring((selAllValueStart+8),(selAllValueEnd));
			}
			else {
				var selAllValueVal = "SELECT ALL";
			}
			if (isGroupProdOn == groupProdModalArr.length) {
				var baseSelAllStyle = " cp_" + baseClass + "_prod_all_on";
			}
			else {
				var baseSelAllStyle = " cp_" + baseClass + "_prod_all_off";
			}
			selAllContent += "<div id='cp" + baseID + "ProdAll" + prodGroupArray[theX][0] + "' class='cp_" + baseClass + "_prod_all_" + prodGroupArray[theX][0] + " cp_" + baseClass + "_prod_all" + baseSelAllStyle + "'";
			if (hoverState==1) {
				selAllContent += " onmouseover='cpGMPMouseOver(\"cpGroupModalProdAll" + prodGroupArray[theX][0] + "\", \"cp_" + baseClass + "_prod_all\");' onfocus='cpGMPMouseOver(\"cpGroupModalProdAll" + prodGroupArray[theX][0] + "\", \"cp_" + baseClass + "_prod_all\");' onmouseout='cpGMPMouseOut(\"cpGroupModalProdAll" + prodGroupArray[theX][0] + "\", \"cp_" + baseClass + "_prod_all\");' onblur='cpGMPMouseOut(\"cpGroupModalProdAll" + prodGroupArray[theX][0] + "\", \"cp_" + baseClass + "_prod_all\");'";
			}
			selAllContent += " onclick='cpGMPSelAll(" + prodGroupArray[theX][0] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){cpGMPSelAll(" + prodGroupArray[theX][0] + ");}' tabindex='0' title=\"" + selAllValueVal + "\">" + selAllValueVal + "<\/div>";
			startHTML = selAllHTMLStart + selAllContent + selAllHTMLEnd;
		}
		var closeButtonTagStart = startHTML.indexOf("<!--CLOSEBUTTON");
		if (closeButtonTagStart != -1) {
			var closeButtonTagEnd = startHTML.indexOf(">",closeButtonTagStart);
			var closeButtonTagStrip = startHTML.substring(closeButtonTagStart,(closeButtonTagEnd+1));
			var closeButtonHTMLStart = startHTML.substr(0,closeButtonTagStart);
			var closeButtonHTMLEnd = startHTML.substr((closeButtonTagEnd+1));
			var closeButtonRender = "";
			var closeButtonItalicStart = closeButtonTagStrip.indexOf(" FNTAW=");
			if (closeButtonItalicStart != -1) {
				var closeButtonItalicEnd = closeButtonTagStrip.indexOf("]",closeButtonItalicStart);
				var closeButtonItalicVar = "<i class='fa " + closeButtonTagStrip.substring((closeButtonItalicStart+8),(closeButtonItalicEnd)) + "'><\/i>";
			}
			else {
				var closeButtonItalicVar = "";
			}
			closeButtonRender += "<div id='cp" + baseID + "CloseButton" + prodGroupArray[theX][0] + "' class='cp_" + baseClass + "_close_button cp_" + baseClass + "_close_button_off'";
			if (hoverState==1) {
				closeButtonRender += " onmouseover='cpButtonHover(\"cp" + baseID + "CloseButton" + prodGroupArray[theX][0] + "\",\"cp_" + baseClass + "_close_button\",1);' onfocus='cpButtonHover(\"cp" + baseID + "CloseButton" + prodGroupArray[theX][0] + "\",\"cp_" + baseClass + "_close_button\",1);' onmouseout='cpButtonHover(\"cp" + baseID + "CloseButton" + prodGroupArray[theX][0] + "\",\"cp_" + baseClass + "_close_button\",0);' onblur='cpButtonHover(\"cp" + baseID + "CloseButton" + prodGroupArray[theX][0] + "\",\"cp_" + baseClass + "_close_button\",0);'";
			}
			closeButtonRender += " onclick='genericCloseMe();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){genericCloseMe();}' tabindex='0' title=\"Close\">" + closeButtonItalicVar + "<\/div>";
			startHTML = closeButtonHTMLStart + closeButtonRender + closeButtonHTMLEnd;
		}
		var baseHTML = startHTML + itemHTML + endHTML;
		if(gLog==1){console.log("cpGroupModalWrite - winWidth > globalRespWidth");}
		document.getElementById("cpGroupModalShell"+prodGroupArray[theX][0]).innerHTML = baseHTML;
		document.getElementById("cpGroupModalShell"+prodGroupArray[theX][0]).style.display = "block";
}
function cpLabelModalWrite(labelID) {
	genericCloseMe();
	if(gLog==1){console.log("cpLabelModalWrite - " + labelID);}
	var labelProdModalArr = [];
	var cpma = 0;
	for (x=0; x<prodDisplayArray.length; x++) {
		for (q=0; q<prodLabelArray.length; q++) {
			if (prodDisplayArray[x][0] == prodLabelArray[q][1] && prodLabelArray[q][2] == labelID) {
				labelProdModalArr[cpma] = prodDisplayArray[x];
				cpma++;
				break;
			}
		}
	}
	if(gLog==1){console.log("cpLabelModalWrite - labelProdModalArr ",labelProdModalArr);}
		var startHTML = autotextIt(p0TemplateSet.cpLabelModalStartDiv,"cpLabelModalStart");
		var itemHTML = "";
		var itemRowHTML = autotextIt(p0TemplateSet.cpLabelModalItemDiv,"cpLabelModalItem");
		var endHTML = autotextIt(p0TemplateSet.cpLabelModalEndDiv,"cpLabelModalEnd");
		var baseID = "LabelModal";
		var baseClass = "label_modal";
		var isLabelProdOn = 0;
		for (y=0; y<labelProdModalArr.length; y++) {
			var productHTMLTest = itemRowHTML;
			var prodDiscTagStart = productHTMLTest.indexOf("<!--HIGHPROD");
			if (prodDiscTagStart != -1) {
				var prodDiscTagEnd = productHTMLTest.indexOf(">",prodDiscTagStart);
				var prodDiscTagStrip = productHTMLTest.substring(prodDiscTagStart,(prodDiscTagEnd+1));
				var prodDiscHTMLStart = productHTMLTest.substr(0,prodDiscTagStart);
				var prodDiscHTMLEnd = productHTMLTest.substr((prodDiscTagEnd+1));
				var prodDiscWrite = "";
				var discVal = labelProdModalArr[y][6];
				if (discVal != 1) {
					prodDiscWrite = "<div class='global_" + hpArr[discVal][1] + " cpLabelModalItem_" + hpArr[discVal][1] + "'>" + hpArr[discVal][0] + "<\/div>";
				}
				productHTMLTest = prodDiscHTMLStart + prodDiscWrite + prodDiscHTMLEnd;
			}
			var prodNameTagStart = productHTMLTest.indexOf("<!--PRODNAME");
			if (prodNameTagStart != -1) {
				var prodNameTagEnd = productHTMLTest.indexOf(">",prodNameTagStart);
				var prodNameTagStrip = productHTMLTest.substring(prodNameTagStart,(prodNameTagEnd+1));
				var prodNameHTMLStart = productHTMLTest.substr(0,prodNameTagStart);
				var prodNameHTMLEnd = productHTMLTest.substr((prodNameTagEnd+1));
				var descTest = prodNameTagStrip.indexOf(" DESC");
				if (descTest != -1) {
					var descVal = "<span class='cp_" + baseClass + "_prod_desc'>" + labelProdModalArr[y][3] + "<\/span>";
				}
				else {
					var descVal = "";
				}
				var prodNameTagLinkTest = prodNameTagStrip.indexOf(" LINK");
				var prodNameTagLink = "";
				if (prodNameTagLinkTest != -1) {
					prodNameTagLink = " style='cursor:pointer;' onclick='cpLMPSelect(" + labelProdModalArr[y][0] + "," + labelProdModalArr[y][8] + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){cpLMPSelect(" + labelProdModalArr[y][0] + "," + labelProdModalArr[y][8] + ");}'";
					if (hoverState==1) {
						prodNameTagLink += " onmouseover='cpLMPMouseOver(\"cp" + baseID + "Prod" + labelProdModalArr[y][0] + "\", \"cp_" + baseClass + "_prod\");' onfocus='cpLMPMouseOver(\"cp" + baseID + "Prod" + labelProdModalArr[y][0] + "\", \"cp_" + baseClass + "_prod\");' onmouseout='cpLMPMouseOut(\"cp" + baseID + "Prod" + labelProdModalArr[y][0] + "\", \"cp_" + baseClass + "_prod\");' onblur='cpLMPMouseOut(\"cp" + baseID + "Prod" + labelProdModalArr[y][0] + "\", \"cp_" + baseClass + "_prod\");'";
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
					var prodNameSizeVar = labelProdModalArr[y][21];
				}
				else {
					var prodNameSizeVar = labelProdModalArr[y][2];
				}
				if (labelProdModalArr[y][9] == "1") {
					isLabelProdOn++;
					window["panel1ProductNameVar"+labelProdModalArr[y][0]] = 1;
					var productStyle = " cp_" + baseClass + "_prod_on";
				}
				else {
					var productStyle = " cp_" + baseClass + "_prod_off";
				}
				productHTMLTest = prodNameHTMLStart + "<div id='cp" + baseID + "Prod" + labelProdModalArr[y][0] + "' class='cp_" + baseClass + "_prod cp_" + baseClass + "_prod_" + labelProdModalArr[y][0] + productStyle + "'" + prodNameTagLink + " tabindex='0' title=\"" + prodNameSizeVar + "\">" + prodNameItalicVar + "<span class='cp_" + baseClass + "_prod_name'>" + prodNameSizeVar + "<\/span>" + descVal + "<\/div>" + prodNameHTMLEnd;
			}
			itemHTML += productHTMLTest;
		}
		var selAllTagStart = startHTML.indexOf("<!--SELECTALL");
		if (selAllTagStart != -1) {
			var selAllTagEnd = startHTML.indexOf(">",selAllTagStart);
			var selAllTagStrip = startHTML.substring(selAllTagStart,(selAllTagEnd+1));
			var selAllHTMLStart = startHTML.substr(0,selAllTagStart);
			var selAllHTMLEnd = startHTML.substr((selAllTagEnd+1));
			var selAllContent = "";
			var selAllValueStart = selAllTagStrip.indexOf(" VALUE=");
			if (selAllValueStart != -1) {
				var selAllValueEnd = selAllTagStrip.indexOf("]", selAllValueStart);
				var selAllValueVal = selAllTagStrip.substring((selAllValueStart+8),(selAllValueEnd));
			}
			else {
				var selAllValueVal = "SELECT ALL";
			}
			if (isLabelProdOn == labelProdModalArr.length) {
				var baseSelAllStyle = " cp_" + baseClass + "_prod_all_on";
			}
			else {
				var baseSelAllStyle = " cp_" + baseClass + "_prod_all_off";
			}
			selAllContent += "<div id='cp" + baseID + "ProdAll" + labelID + "' class='cp_" + baseClass + "_prod_all_" + labelID + " cp_" + baseClass + "_prod_all" + baseSelAllStyle + "'";
			if (hoverState==1) {
				selAllContent += " onmouseover='cpLMPMouseOver(\"cpLabelModalProdAll" + labelID + "\", \"cp_" + baseClass + "_prod_all\");' onfocus='cpLMPMouseOver(\"cpLabelModalProdAll" + labelID + "\", \"cp_" + baseClass + "_prod_all\");' onmouseout='cpLMPMouseOut(\"cpLabelModalProdAll" + labelID + "\", \"cp_" + baseClass + "_prod_all\");' onblur='cpLMPMouseOut(\"cpLabelModalProdAll" + labelID + "\", \"cp_" + baseClass + "_prod_all\");'";
			}
			selAllContent += " onclick='cpLMPSelAll(" + labelID + ");' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){cpLMPSelAll(" + labelID + ");}' tabindex='0' title=\"" + selAllValueVal + "\">" + selAllValueVal + "<\/div>";
			startHTML = selAllHTMLStart + selAllContent + selAllHTMLEnd;
		}
		var closeButtonTagStart = startHTML.indexOf("<!--CLOSEBUTTON");
		if (closeButtonTagStart != -1) {
			var closeButtonTagEnd = startHTML.indexOf(">",closeButtonTagStart);
			var closeButtonTagStrip = startHTML.substring(closeButtonTagStart,(closeButtonTagEnd+1));
			var closeButtonHTMLStart = startHTML.substr(0,closeButtonTagStart);
			var closeButtonHTMLEnd = startHTML.substr((closeButtonTagEnd+1));
			var closeButtonRender = "";
			var closeButtonItalicStart = closeButtonTagStrip.indexOf(" FNTAW=");
			if (closeButtonItalicStart != -1) {
				var closeButtonItalicEnd = closeButtonTagStrip.indexOf("]",closeButtonItalicStart);
				var closeButtonItalicVar = "<i class='fa " + closeButtonTagStrip.substring((closeButtonItalicStart+8),(closeButtonItalicEnd)) + "'><\/i>";
			}
			else {
				var closeButtonItalicVar = "";
			}
			closeButtonRender += "<div id='cp" + baseID + "CloseButton" + labelID + "' class='cp_" + baseClass + "_close_button cp_" + baseClass + "_close_button_off'";
			if (hoverState==1) {
				closeButtonRender += " onmouseover='cpButtonHover(\"cp" + baseID + "CloseButton" + labelID + "\",\"cp_" + baseClass + "_close_button\",1);' onfocus='cpButtonHover(\"cp" + baseID + "CloseButton" + labelID + "\",\"cp_" + baseClass + "_close_button\",1);' onmouseout='cpButtonHover(\"cp" + baseID + "CloseButton" + labelID + "\",\"cp_" + baseClass + "_close_button\",0);' onblur='cpButtonHover(\"cp" + baseID + "CloseButton" + labelID + "\",\"cp_" + baseClass + "_close_button\",0);'";
			}
			closeButtonRender += " onclick='genericCloseMe();' onkeyup='if(window.event){kc=window.event.keyCode;}else{kc=e.which;}if(kc==13){genericCloseMe();}' tabindex='0' title=\"Close\">" + closeButtonItalicVar + "<\/div>";
			startHTML = closeButtonHTMLStart + closeButtonRender + closeButtonHTMLEnd;
		}
		var baseHTML = startHTML + itemHTML + endHTML;
		if(gLog==1){console.log("cpLabelModalWrite - winWidth > globalRespWidth");}
		document.getElementById("cpLabelModalShell"+labelID).innerHTML = baseHTML;
		document.getElementById("cpLabelModalShell"+labelID).style.display = "block";
}
function cpLMPSelAll(labelID) {
	if(gLog==1){console.log("cpLMPSelAll - START",labelID);}
	var wholeLabel = 0;
	var someLabel = 0;
	for (z=0; z<prodDisplayArray.length; z++) {
		for (q=0; q<prodLabelArray.length; q++) {
			if (prodDisplayArray[z][0] == prodLabelArray[q][1] && prodLabelArray[q][2] == labelID) {
				wholeLabel++;
				if (prodDisplayArray[z][9] == 1) {
					someLabel++;
				}
				break;
			}
		}
	}
	if (someLabel == 0 || someLabel != wholeLabel) {
		for (x=0; x<prodDisplayArray.length; x++) {
			for (q=0; q<prodLabelArray.length; q++) {
				if (prodDisplayArray[x][0] == prodLabelArray[q][1] && prodLabelArray[q][2] == labelID) {
					prodDisplayArray[x][9] = 1;
					window["panel1ProductNameVar"+prodDisplayArray[x][0]] = 1;
					if (document.getElementById("cpLabelModalProd" + prodDisplayArray[x][0])) {
						$("#cpLabelModalProd" + prodDisplayArray[x][0]).removeClass('cp_label_modal_prod_hover_off');
						$("#cpLabelModalProd" + prodDisplayArray[x][0]).removeClass('cp_label_modal_prod_hover_on');
						$("#cpLabelModalProd" + prodDisplayArray[x][0]).removeClass('cp_label_modal_prod_off');
						$("#cpLabelModalProd" + prodDisplayArray[x][0]).addClass('cp_label_modal_prod_on');
					}
					if (document.getElementById("cpLabelModalMobProd" + prodDisplayArray[x][0])) {
						$("#cpLabelModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_label_modal_mob_prod_hover_off');
						$("#cpLabelModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_label_modal_mob_prod_hover_on');
						$("#cpLabelModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_label_modal_mob_prod_off');
						$("#cpLabelModalMobProd" + prodDisplayArray[x][0]).addClass('cp_label_modal_mob_prod_on');
					}
					if(gLog==1){console.log("cpLMPSelAll - prodDisplayArray["+x+"][9] = ",prodDisplayArray[x][9]);}
					break;
				}
			}
		}
		if (document.getElementById("cpLabelModalProdAll" + labelID)) {
			$("#cpLabelModalProdAll" + labelID).removeClass('cp_label_modal_prod_all_hover_off');
			$("#cpLabelModalProdAll" + labelID).removeClass('cp_label_modal_prod_all_hover_on');
			$("#cpLabelModalProdAll" + labelID).removeClass('cp_label_modal_prod_all_off');
			$("#cpLabelModalProdAll" + labelID).addClass('cp_label_modal_prod_all_on');
		}
		if (document.getElementById("cpLabelModalMobProdAll" + labelID)) {
			$("#cpLabelModalMobProdAll" + labelID).removeClass('cp_label_modal_mob_prod_all_hover_off');
			$("#cpLabelModalMobProdAll" + labelID).removeClass('cp_label_modal_mob_prod_all_hover_on');
			$("#cpLabelModalMobProdAll" + labelID).removeClass('cp_label_modal_mob_prod_all_off');
			$("#cpLabelModalMobProdAll" + labelID).addClass('cp_label_modal_mob_prod_all_on');
		}
		if (document.getElementById('cpLabelBigImgDivBack'+labelID) && $('#cpLabelBigImgDivBack'+labelID).hasClass('img_replace_active')) {
			$(".cp_label_big_img_div_over_"+labelID).fadeIn(50);
			$(".cp_label_big_img_div_back_"+labelID).removeClass('cp_label_big_img_div_back_off');
			$(".cp_label_big_img_div_back_"+labelID).addClass('cp_label_big_img_div_back_on');
		}
		if (document.getElementById('cpLabelSmImgDivBack'+labelID) && $('#cpLabelSmImgDivBack'+labelID).hasClass('img_replace_active')) {
			$(".cp_label_sm_img_div_over_"+labelID).fadeIn(50);
			$(".cp_label_sm_img_div_back_"+labelID).removeClass('cp_label_sm_img_div_back_off');
			$(".cp_label_sm_img_div_back_"+labelID).addClass('cp_label_sm_img_div_back_on');
		}
		labelArray[labelID][3] = 1;
		if(gLog==1){console.log("cpLMPSelAll - All Active");}
	}
	else {
		for (x=0; x<prodDisplayArray.length; x++) {
			for (q=0; q<prodLabelArray.length; q++) {
				if (prodDisplayArray[x][0] == prodLabelArray[q][1] && prodLabelArray[q][2] == labelID) {
					prodDisplayArray[x][9] = 0;
					window["panel1ProductNameVar"+prodDisplayArray[x][0]] = 0;
					if (document.getElementById("cpLabelModalProd" + prodDisplayArray[x][0])) {
						$("#cpLabelModalProd" + prodDisplayArray[x][0]).removeClass('cp_label_modal_prod_hover_off');
						$("#cpLabelModalProd" + prodDisplayArray[x][0]).removeClass('cp_label_modal_prod_hover_on');
						$("#cpLabelModalProd" + prodDisplayArray[x][0]).addClass('cp_label_modal_prod_off');
						$("#cpLabelModalProd" + prodDisplayArray[x][0]).removeClass('cp_label_modal_prod_on');
					}
					if (document.getElementById("cpLabelModalMobProd" + prodDisplayArray[x][0])) {
						$("#cpLabelModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_label_modal_mob_prod_hover_off');
						$("#cpLabelModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_label_modal_mob_prod_hover_on');
						$("#cpLabelModalMobProd" + prodDisplayArray[x][0]).addClass('cp_label_modal_mob_prod_off');
						$("#cpLabelModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_label_modal_mob_prod_on');
					}
					if(gLog==1){console.log("cpLMPSelAll - prodDisplayArray["+x+"][9] = ",prodDisplayArray[x][9]);}
					break;
				}
			}
		}
		if (document.getElementById("cpLabelModalProdAll" + labelID)) {
			$("#cpLabelModalProdAll" + labelID).removeClass('cp_label_modal_prod_all_hover_off');
			$("#cpLabelModalProdAll" + labelID).removeClass('cp_label_modal_prod_all_hover_on');
			$("#cpLabelModalProdAll" + labelID).addClass('cp_label_modal_prod_all_off');
			$("#cpLabelModalProdAll" + labelID).removeClass('cp_label_modal_prod_all_on');
		}
		if (document.getElementById("cpLabelModalMobProdAll" + labelID)) {
			$("#cpLabelModalMobProdAll" + labelID).removeClass('cp_label_modal_mob_prod_all_hover_off');
			$("#cpLabelModalMobProdAll" + labelID).removeClass('cp_label_modal_mob_prod_all_hover_on');
			$("#cpLabelModalMobProdAll" + labelID).addClass('cp_label_modal_mob_prod_all_off');
			$("#cpLabelModalMobProdAll" + labelID).removeClass('cp_label_modal_mob_prod_all_on');
		}
		if (document.getElementById('cpLabelBigImgDivBack'+labelID) && $('#cpLabelBigImgDivBack'+labelID).hasClass('img_replace_active')) {
			$(".cp_label_big_img_div_over_"+labelID).fadeOut(50);
			$(".cp_label_big_img_div_back_"+labelID).addClass('cp_label_big_img_div_back_off');
			$(".cp_label_big_img_div_back_"+labelID).removeClass('cp_label_big_img_div_back_on');
		}
		if (document.getElementById('cpLabelSmImgDivBack'+labelID) && $('#cpLabelSmImgDivBack'+labelID).hasClass('img_replace_active')) {
			$(".cp_label_sm_img_div_over_"+labelID).fadeOut(50);
			$(".cp_label_sm_img_div_back_"+labelID).addClass('cp_label_sm_img_div_back_off');
			$(".cp_label_sm_img_div_back_"+labelID).removeClass('cp_label_sm_img_div_back_on');
		}
		labelArray[labelID][3] = 0;
		if(gLog==1){console.log("cpLMPSelAll - All Inactive");}
	}
	controlPanelWriteCart();
}
function cpLMPSelect(prodID,labelID) {
	if(gLog==1){console.log("cpLMPSelect - START",prodID,labelID);}
	for (x=0; x<prodDisplayArray.length; x++) {
		if (prodDisplayArray[x][0] == prodID) {
			if (prodDisplayArray[x][9] == 0) {
				prodDisplayArray[x][9] = 1;
				window["panel1ProductNameVar"+prodDisplayArray[x][0]] = 1;
				if (document.getElementById("cpLabelModalProd" + prodDisplayArray[x][0])) {
					$("#cpLabelModalProd" + prodDisplayArray[x][0]).removeClass('cp_label_modal_prod_hover_off');
					$("#cpLabelModalProd" + prodDisplayArray[x][0]).removeClass('cp_label_modal_prod_hover_on');
					$("#cpLabelModalProd" + prodDisplayArray[x][0]).removeClass('cp_label_modal_prod_off');
					$("#cpLabelModalProd" + prodDisplayArray[x][0]).addClass('cp_label_modal_prod_on');
				}
				if (document.getElementById("cpLabelModalMobProd" + prodDisplayArray[x][0])) {
					$("#cpLabelModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_label_modal_mob_prod_hover_off');
					$("#cpLabelModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_label_modal_mob_prod_hover_on');
					$("#cpLabelModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_label_modal_mob_prod_off');
					$("#cpLabelModalMobProd" + prodDisplayArray[x][0]).addClass('cp_label_modal_mob_prod_on');
				}
				if(gLog==1){console.log("cpLMPSelect - prodDisplayArray["+x+"][9] = ",prodDisplayArray[x][9]);}
			}
			else {
				prodDisplayArray[x][9] = 0;
				window["panel1ProductNameVar"+prodDisplayArray[x][0]] = 0;
				if (document.getElementById("cpLabelModalProd" + prodDisplayArray[x][0])) {
					$("#cpLabelModalProd" + prodDisplayArray[x][0]).removeClass('cp_label_modal_prod_hover_off');
					$("#cpLabelModalProd" + prodDisplayArray[x][0]).removeClass('cp_label_modal_prod_hover_on');
					$("#cpLabelModalProd" + prodDisplayArray[x][0]).addClass('cp_label_modal_prod_off');
					$("#cpLabelModalProd" + prodDisplayArray[x][0]).removeClass('cp_label_modal_prod_on');
				}
				if (document.getElementById("cpLabelModalMobProd" + prodDisplayArray[x][0])) {
					$("#cpLabelModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_label_modal_mob_prod_hover_off');
					$("#cpLabelModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_label_modal_mob_prod_hover_on');
					$("#cpLabelModalMobProd" + prodDisplayArray[x][0]).addClass('cp_label_modal_mob_prod_off');
					$("#cpLabelModalMobProd" + prodDisplayArray[x][0]).removeClass('cp_label_modal_mob_prod_on');
				}
				if(gLog==1){console.log("cpLMPSelect - prodDisplayArray["+x+"][9] = ",prodDisplayArray[x][9]);}
			}
			break;
		}
	}
	var wholeLabel = 0;
	var someLabel = 0;
	for (z=0; z<prodDisplayArray.length; z++) {
		for (q=0; q<prodLabelArray.length; q++) {
			if (prodDisplayArray[z][0] == prodLabelArray[q][1] && prodLabelArray[q][2] == labelArray[labelID][0]) {
				wholeLabel++;
				if (prodDisplayArray[z][9] == 1) {
					someLabel++;
				}
				break;
			}
		}
	}
	if(gLog==1){console.log("cpLMPSelect - wholeLabel,someLabel",wholeLabel,someLabel);}
	for (x=0; x<labelArray.length; x++) {
		if (labelArray[x][0] == labelID) {
			if (someLabel != 0) {
				labelArray[x][3] = 1;
			}
			else {
				labelArray[x][3] = 0;
			}
			if(gLog==1){console.log("cpLMPSelect - labelArray["+x+"][3]="+labelArray[x][3]);}
		}
	}
	if (wholeLabel == someLabel) {
		if(gLog==1){console.log("cpLMPSelect - wholeLabel==someLabel");}
		if (document.getElementById("cpLabelModalProdAll" + labelID)) {
			$("#cpLabelModalProdAll" + labelID).removeClass('cp_label_modal_prod_all_hover_off');
			$("#cpLabelModalProdAll" + labelID).removeClass('cp_label_modal_prod_all_hover_on');
			$("#cpLabelModalProdAll" + labelID).removeClass('cp_label_modal_prod_all_off');
			$("#cpLabelModalProdAll" + labelID).addClass('cp_label_modal_prod_all_on');
		}
		if (document.getElementById("cpLabelModalMobProdAll" + labelID)) {
			$("#cpLabelModalMobProdAll" + labelID).removeClass('cp_label_modal_mob_prod_all_hover_off');
			$("#cpLabelModalMobProdAll" + labelID).removeClass('cp_label_modal_mob_prod_all_hover_on');
			$("#cpLabelModalMobProdAll" + labelID).removeClass('cp_label_modal_mob_prod_all_off');
			$("#cpLabelModalMobProdAll" + labelID).addClass('cp_label_modal_mob_prod_all_on');
		}
	}
	else {
		if(gLog==1){console.log("cpLMPSelect - wholeLabel!=someLabel");}
		if (document.getElementById("cpLabelModalProdAll" + labelID)) {
			$("#cpLabelModalProdAll" + labelID).removeClass('cp_label_modal_prod_all_hover_off');
			$("#cpLabelModalProdAll" + labelID).removeClass('cp_label_modal_prod_all_hover_on');
			$("#cpLabelModalProdAll" + labelID).addClass('cp_label_modal_prod_all_off');
			$("#cpLabelModalProdAll" + labelID).removeClass('cp_label_modal_prod_all_on');
		}
		if (document.getElementById("cpLabelModalMobProdAll" + labelID)) {
			$("#cpLabelModalMobProdAll" + labelID).removeClass('cp_label_modal_mob_prod_all_hover_off');
			$("#cpLabelModalMobProdAll" + labelID).removeClass('cp_label_modal_mob_prod_all_hover_on');
			$("#cpLabelModalMobProdAll" + labelID).addClass('cp_label_modal_mob_prod_all_off');
			$("#cpLabelModalMobProdAll" + labelID).removeClass('cp_label_modal_mob_prod_all_on');
		}
	}
	if (someLabel != 0) {
		if(gLog==1){console.log("cpLMPSelect - someLabel!=0");}
		if (document.getElementById('cpLabelBigImgDivBack'+labelID) && $('#cpLabelBigImgDivBack'+labelID).hasClass('img_replace_active')) {
			$(".cp_label_big_img_div_over_"+labelID).fadeIn(50);
			$(".cp_label_big_img_div_back_"+labelID).removeClass('cp_label_big_img_div_back_off');
			$(".cp_label_big_img_div_back_"+labelID).addClass('cp_label_big_img_div_back_on');
		}
		if (document.getElementById('cpLabelSmImgDivBack'+labelID) && $('#cpLabelSmImgDivBack'+labelID).hasClass('img_replace_active')) {
			$(".cp_label_sm_img_div_over_"+labelID).fadeIn(50);
			$(".cp_label_sm_img_div_back_"+labelID).removeClass('cp_label_sm_img_div_back_off');
			$(".cp_label_sm_img_div_back_"+labelID).addClass('cp_label_sm_img_div_back_on');
		}
	}
	else {
		if(gLog==1){console.log("cpLMPSelect - someLabel==0");}
		if (document.getElementById('cpLabelBigImgDivBack'+labelID) && $('#cpLabelBigImgDivBack'+labelID).hasClass('img_replace_active')) {
			$(".cp_label_big_img_div_over_"+labelID).fadeOut(50);
			$(".cp_label_big_img_div_back_"+labelID).addClass('cp_label_big_img_div_back_off');
			$(".cp_label_big_img_div_back_"+labelID).removeClass('cp_label_big_img_div_back_on');
		}
		if (document.getElementById('cpLabelSmImgDivBack'+labelID) && $('#cpLabelSmImgDivBack'+labelID).hasClass('img_replace_active')) {
			$(".cp_label_sm_img_div_over_"+labelID).fadeOut(50);
			$(".cp_label_sm_img_div_back_"+labelID).addClass('cp_label_sm_img_div_back_off');
			$(".cp_label_sm_img_div_back_"+labelID).removeClass('cp_label_sm_img_div_back_on');
		}
	}
	controlPanelWriteCart();
}
function cpLabelModalClose(whatPanel) {
	if(gLog==1){console.log("cpLabelModalClose - " + whatPanel,pNum);}
	var pNum = whatPanel.substring(5,6);
	document.getElementById('labelModalBack').style.display = "none";
	document.getElementById('labelModalFront').style.display = "none";
	var pNum = whatPanel.substring(5,6);
	document.getElementById(whatPanel).style.display = "block";
}
function cpLMPMouseOver(theID,theClass) {
	if ($("#"+theID).hasClass(theClass+"_off")) {
		$("#"+theID).removeClass(theClass+"_off");
		$("#"+theID).addClass(theClass+"_hover_off");
	}
	else if ($("#"+theID).hasClass(theClass+"_on")) {
		$("#"+theID).removeClass(theClass+"_on");
		$("#"+theID).addClass(theClass+"_hover_on");
	}
}
function cpLMPMouseOut(theID,theClass) {
	if ($("#"+theID).hasClass(theClass+"_hover_off")) {
		$("#"+theID).removeClass(theClass+"_hover_off");
		$("#"+theID).addClass(theClass+"_off");
	}
	else if ($("#"+theID).hasClass(theClass+"_hover_on")) {
		$("#"+theID).removeClass(theClass+"_hover_on");
		$("#"+theID).addClass(theClass+"_on");
	}
}
function cpButtonHover() {
}
(function($) {
$.fn.menumaker = function(options) {
      var cssmenu = $(this), settings = $.extend({
        title: "Select Products",
        format: "dropdown",
        breakpoint: globalRespWidth,
        sticky: false
      }, options);

      return this.each(function() {
        cssmenu.find('li ul').parent().addClass('has-sub');
        if (settings.format != 'select') {
          cssmenu.prepend('<div id="menu-button' + settings.id + '"><span id="cpFamCatMenuDisplayText_two">All Products<\/span><span id="cpFamCatMenuDisplayNum_two">(' + prodDisplayArray.length + ')<\/span></div>');
          $(this).find("#menu-button" + settings.id).on('click', function(){
            $(this).toggleClass('menu-opened');
            var mainmenu = $(this).next('ul');
            if (mainmenu.hasClass('open')) {
              mainmenu.hide().removeClass('open');
            }
            else {
              mainmenu.show().addClass('open');
              if (settings.format === "dropdown") {
                mainmenu.find('ul').show();
              }
            }
          });
          multiTg = function() {
            cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
            cssmenu.find('.submenu-button').on('click', function() {
              $(this).toggleClass('submenu-opened');
              if ($(this).siblings('ul').hasClass('open')) {
                $(this).siblings('ul').removeClass('open').hide();
              }
              else {
                $(this).siblings('ul').addClass('open').show();
              }
            });
          };

          if (settings.format === 'multitoggle') multiTg();
          else cssmenu.addClass('dropdown');
        }

        else if (settings.format === 'select')
        {
          cssmenu.append('<select style="width: 100%"/>').addClass('select-list');
          var selectList = cssmenu.find('select');
          selectList.append('<option>' + settings.title + '</option>', {
                                                         "selected": "selected",
                                                         "value": ""});
          cssmenu.find('a').each(function() {
            var element = $(this), indentation = "";
            for (i = 1; i < element.parents('ul').length; i++)
            {
              indentation += '-';
            }
            selectList.append('<option value="' + $(this).attr('href') + '">' + indentation + element.text() + '</option');
          });
          selectList.on('change', function() {
            window.location = $(this).find("option:selected").val();
          });
        }

        if (settings.sticky === true) cssmenu.css('position', 'fixed');

        resizeFix = function() {
          if ($(window).width() > settings.breakpoint) {
            cssmenu.find('ul').show();
            cssmenu.removeClass('small-screen');
            if (settings.format === 'select') {
              cssmenu.find('select').hide();
            }
            else {
              cssmenu.find("#menu-button" + settings.id).removeClass("menu-opened");
            }
          }

          if ($(window).width() <= settings.breakpoint && !cssmenu.hasClass("small-screen")) {
            cssmenu.find('ul').hide().removeClass('open');
            cssmenu.addClass('small-screen');
            if (settings.format === 'select') {
              cssmenu.find('select').show();
            }
          }
        };
        resizeFix();
        return $(window).on('resize', resizeFix);

      });
  };
})(jQuery);

scriptLoad++;

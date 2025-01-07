/* global initializeMap, initializeDataTable */
/* 1. === Setting up Map === */
/* set up with zoom 5, may change, changed lat
and long from 34,0836417742618, -118.5298649280784 */
var bounds = new L.LatLngBounds(
    new L.LatLng(5.0733, 58.3787),
    new L.LatLng(37.6715, 102.8694));

var maxbounds = new L.LatLngBounds(
    new L.LatLng(-10.138541709445434, 10.24718978124926),
    new L.LatLng(53.929460176933446, 120.11828353124895)
)

var green_bounds = new L.LatLngBounds(
		new L.LatLng(4.62976,59.6373),
		new L.LatLng(37.35184,104.2217)
);

var temp_bounds = new L.LatLngBounds(
		new L.LatLng(4.0163,58.858),
		new L.LatLng(37.8393,105.001)
);


let map = L.map('map', {zoomControl: false, center: bounds.getCenter(),maxBounds: maxbounds,maxBoundsViscosity: 1.0, maxZoom:9, minZoom:4 }).setView([21.3724,77.6241], 3);
map.fitBounds(bounds);

const basemap = 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png';
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
var WhiteCanvas = L.tileLayer(basemap, {
  attribution,
});

var Esri_WorldImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, ' +
    'AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community', 
    opacity: 0.7
});

var Jawg_Dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd'
});

let baseLayers = {
    "Satellite": Esri_WorldImagery,
    "Grey Canvas": Jawg_Dark,
    "White Canvas": WhiteCanvas
};

var layerControl = L.control.layers(baseLayers, null, {position: 'bottomright',collapsed:false}).addTo(map);
map.addLayer(WhiteCanvas);
map.addControl(layerControl);


sidebarContentController("story-slide");


let dataT = [];

/* PM LAYERS */
var layerPM_1998 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/PM_1998.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "1998"
});

var layerPM_1999 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/PM_1999.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "1999"
});

var layerPM_2000 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/PM_2000.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2000"
});

var layerPM_2001 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/PM_2001.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2001"
});

var layerPM_2002 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/PM_2002.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2002"
});

var layerPM_2003 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/PM_2003.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2003"
});

var layerPM_2004 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/PM_2004.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2004"
});

var layerPM_2005 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/PM_2005.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2005"
});

var layerPM_2006 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/PM_2006.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2006"
});

var layerPM_2007 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/PM_2007.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2007"
});

var layerPM_2008 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/PM_2008.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2008"
});

var layerPM_2009 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/PM_2009.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2009"
});

var layerPM_2010 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/PM_2010.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2010"
});

var layerPM_2011 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/PM_2011.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2011"
});

var layerPM_2012 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/PM_2012.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2012"
});

var layerPM_2013 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/PM_2013.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2013"
});

var layerPM_2014 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/PM_2014.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2014"
});

var layerPM_2015 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/PM_2015.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2015"
});

var layerPM_2016 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/PM_2016.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2016"
});

var layerPM_2017 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/PM_2017.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2017"
});

var layerPM_2018 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/PM_2018.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2018"
});

var layerPM_2019 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/PM_2019.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2019"
});

var layerPM_2020 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/PM_2020.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2020"
});

var layerPM_2021 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/PM_2021.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2021"
});

/* SOURCE LAYERS */
var layerSOURCE_1998 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/SOURCE_1998.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "1998"
});

var layerSOURCE_1999 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/SOURCE_1999.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "1999"
});

var layerSOURCE_2000 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/SOURCE_2000.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2000"
});

var layerSOURCE_2001 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/SOURCE_2001.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2001"
});

var layerSOURCE_2002 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/SOURCE_2002.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2002"
});

var layerSOURCE_2003 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/SOURCE_2003.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2003"
});

var layerSOURCE_2004 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/SOURCE_2004.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2004"
});

var layerSOURCE_2005 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/SOURCE_2005.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2005"
});

var layerSOURCE_2006 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/SOURCE_2006.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2006"
});

var layerSOURCE_2007 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/SOURCE_2007.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2007"
});

var layerSOURCE_2008 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/SOURCE_2008.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2008"
});

var layerSOURCE_2009 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/SOURCE_2009.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2009"
});

var layerSOURCE_2010 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/SOURCE_2010.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2010"
});

var layerSOURCE_2011 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/SOURCE_2011.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2011"
});

var layerSOURCE_2012 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/SOURCE_2012.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2012"
});

var layerSOURCE_2013 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/SOURCE_2013.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2013"
});

var layerSOURCE_2014 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/SOURCE_2014.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2014"
});

var layerSOURCE_2015 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/SOURCE_2015.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2015"
});

var layerSOURCE_2016 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/SOURCE_2016.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2016"
});

var layerSOURCE_2017 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/SOURCE_2017.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2017"
});

var layerSOURCE_2018 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/SOURCE_2018.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2018"
});

var layerSOURCE_2019 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/SOURCE_2019.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2019"
});

var layerSOURCE_2020 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/SOURCE_2020.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2020"
});

var layerSOURCE_2021 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/SOURCE_2021.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2021"
});

/* OZONE LAYERS */
var layerOZONE_1990 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/OZONE_1990.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "1990"
});

var layerOZONE_1991 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/OZONE_1991.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "1991"
});

var layerOZONE_1992 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/OZONE_1992.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "1992"
});

var layerOZONE_1993 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/OZONE_1993.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "1993"
});

var layerOZONE_1994 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/OZONE_1994.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "1994"
});

var layerOZONE_1995 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/OZONE_1995.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "1995"
});

var layerOZONE_1996 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/OZONE_1996.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "1996"
});

var layerOZONE_1997 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/OZONE_1997.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "1997"
});

var layerOZONE_1998 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/OZONE_1998.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "1998"
});

var layerOZONE_1999 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/OZONE_1999.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "1999"
});

var layerOZONE_2000 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/OZONE_2000.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2000"
});

var layerOZONE_2001 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/OZONE_2001.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2001"
});

var layerOZONE_2002 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/OZONE_2002.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2002"
});

var layerOZONE_2003 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/OZONE_2003.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2003"
});

var layerOZONE_2004 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/OZONE_2004.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2004"
});

var layerOZONE_2005 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/OZONE_2005.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2005"
});

var layerOZONE_2006 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/OZONE_2006.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2006"
});

var layerOZONE_2007 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/OZONE_2007.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2007"
});

var layerOZONE_2008 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/OZONE_2008.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2008"
});

var layerOZONE_2009 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/OZONE_2009.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2009"
});

var layerOZONE_2010 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/OZONE_2010.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2010"
});

var layerOZONE_2011 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/OZONE_2011.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2011"
});

var layerOZONE_2012 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/OZONE_2012.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2012"
});

var layerOZONE_2013 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/OZONE_2013.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2013"
});

var layerOZONE_2014 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/OZONE_2014.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2014"
});

var layerOZONE_2015 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/OZONE_2015.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2015"
});

var layerOZONE_2016 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/OZONE_2016.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2016"
});

var layerOZONE_2017 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/OZONE_2017.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2017"
});

/* NO2 LAYERS */
var layerNO_2005 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/NO_2005.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2005"
});

var layerNO_2006 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/NO_2006.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2006"
});

var layerNO_2007 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/NO_2007.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2007"
});

var layerNO_2008 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/NO_2008.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2008"
});

var layerNO_2009 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/NO_2009.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2009"
});

var layerNO_2010 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/NO_2010.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2010"
});

var layerNO_2011 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/NO_2011.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2011"
});

var layerNO_2012 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/NO_2012.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2012"
});

var layerNO_2013 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/NO_2013.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2013"
});

var layerNO_2014 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/NO_2014.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2014"
});

var layerNO_2015 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/NO_2015.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2015"
});

var layerNO_2016 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/NO_2016.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2016"
});

var layerNO_2017 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/NO_2017.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2017"
});

var layerNO_2018 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/NO_2018.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2018"
});

var layerNO_2019 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/NO_2019.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2019"
});

var layerNO_2020 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/NO_2020.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2020"
});


/* LIGHT LAYERS */ 
var layerLIGHT_2012 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/IND_LIGHT_2012.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2012"
});

var layerLIGHT_2013 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/IND_LIGHT_2013.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2013"
});

var layerLIGHT_2014 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/IND_LIGHT_2014.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2014"
});

var layerLIGHT_2015 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/IND_LIGHT_2015.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2015"
});

var layerLIGHT_2016 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/IND_LIGHT_2016.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2016"
});

var layerLIGHT_2017 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/IND_LIGHT_2017.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2017"
});

var layerLIGHT_2018 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/IND_LIGHT_2018.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2018"
});

var layerLIGHT_2019 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/IND_LIGHT_2019.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2019"
});

var layerLIGHT_2020 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/IND_LIGHT_2020.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2020"
});

var layerLIGHT_2021 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/IND_LIGHT_2021.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2021"
});


var layerBLUE_2000 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/BLUESPACE.png", bounds, {
    opacity: 1.0,
    interactive: false,
    time: ""
});


var layerGREEN_2000 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/GREEN_2000.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2000"
});

var layerGREEN_2001 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/GREEN_2001.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2001"
});

var layerGREEN_2002 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/GREEN_2002.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2002"
});

var layerGREEN_2003 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/GREEN_2003.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2003"
});

var layerGREEN_2004 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/GREEN_2004.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2004"
});

var layerGREEN_2005 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/GREEN_2005.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2005"
});

var layerGREEN_2006 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/GREEN_2006.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2006"
});

var layerGREEN_2007 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/GREEN_2007.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2007"
});

var layerGREEN_2008 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/GREEN_2008.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2008"
});

var layerGREEN_2009 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/GREEN_2009.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2009"
});

var layerGREEN_2010 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/GREEN_2010.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2010"
});

var layerGREEN_2011 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/GREEN_2011.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2011"
});

var layerGREEN_2012 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/GREEN_2012.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2012"
});

var layerGREEN_2013 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/GREEN_2013.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2013"
});

var layerGREEN_2014 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/GREEN_2014.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2014"
});

var layerGREEN_2015 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/GREEN_2015.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2015"
});

var layerGREEN_2016 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/GREEN_2016.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2016"
});

var layerGREEN_2017 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/GREEN_2017.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2017"
});

var layerGREEN_2018 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/GREEN_2018.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2018"
});

var layerGREEN_2019 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/GREEN_2019.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2019"
});

var layerGREEN_2020 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/GREEN_2020.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2020"
});

var layerGREEN_2021 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/GREEN_2021.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2021"
});

var layerGREEN_2022 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/GREEN_2022.png", green_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2022"
});


var layerTEMP_2007 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/TEMP_2007.png", temp_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2007"
});

var layerTEMP_2008 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/TEMP_2008.png", temp_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2008"
});

var layerTEMP_2009 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/TEMP_2009.png", temp_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2009"
});

var layerTEMP_2010 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/TEMP_2010.png", temp_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2010"
});

var layerTEMP_2011 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/TEMP_2011.png", temp_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2011"
});

var layerTEMP_2012 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/TEMP_2012.png", temp_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2012"
});

var layerTEMP_2013 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/TEMP_2013.png", temp_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2013"
});

var layerTEMP_2014 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/TEMP_2014.png", temp_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2014"
});

var layerTEMP_2015 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/TEMP_2015.png", temp_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2015"
});

var layerTEMP_2016 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/TEMP_2016.png", temp_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2016"
});

var layerTEMP_2017 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/TEMP_2017.png", temp_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2017"
});

var layerTEMP_2018 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/TEMP_2018.png", temp_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2018"
});

var layerTEMP_2019 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/TEMP_2019.png", temp_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2019"
});

var layerTEMP_2020 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/TEMP_2020.png", temp_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2020"
});

var layerTEMP_2021 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/TEMP_2021.png", temp_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2021"
});

var layerTEMP_2022 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/TEMP_2022.png", temp_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2022"
});

var layerTEMP_2023 = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/PNGs/TEMP_2023.png", temp_bounds, {
    opacity: 1.0,
    interactive: false,
    time: "2023"
});


const legendvars = {
  PMTFV: "https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/Legends/pm_legend.jpg",
  SOURCE: "https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/Legends/source_legend.jpg",
  OZONE: "https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/Legends/o3_legend.jpg",
  NOTWO: "https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/Legends/notwo_legend.jpg",
  LIGHT: "https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/Legends/light_legend.jpg",
  GREEN: "https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/Legends/green_legend.jpg",
  BLUES: "https://raw.githubusercontent.com/aidanpcole/EXPOSOME_IRELAND_UK/main/blue_legend2.jpg",
  TEMP: "https://raw.githubusercontent.com/aidanpcole/png_repo_india/main/data/Legends/temp_legend.jpg",
};


/* make a layergroup for each type of pollution and then use checkies to decide which layergroup is shown */
PMTFVP = L.layerGroup([layerPM_1998,layerPM_1999,layerPM_2000,layerPM_2001,layerPM_2002,layerPM_2003,layerPM_2004,layerPM_2005,layerPM_2006,layerPM_2007,layerPM_2008,layerPM_2009,layerPM_2010,layerPM_2011,layerPM_2012,layerPM_2013,layerPM_2014,layerPM_2015,layerPM_2016,layerPM_2017,layerPM_2018,layerPM_2019,layerPM_2020,layerPM_2021]);
SOURCEP = L.layerGroup([layerSOURCE_1998,layerSOURCE_1999,layerSOURCE_2000,layerSOURCE_2001,layerSOURCE_2002,layerSOURCE_2003,layerSOURCE_2004,layerSOURCE_2005,layerSOURCE_2006,layerSOURCE_2007,layerSOURCE_2008,layerSOURCE_2009,layerSOURCE_2010,layerSOURCE_2011,layerSOURCE_2012,layerSOURCE_2013,layerSOURCE_2014,layerSOURCE_2015,layerSOURCE_2016,layerSOURCE_2017,layerSOURCE_2018,layerSOURCE_2019,layerSOURCE_2020,layerSOURCE_2021]);
OZONEP = L.layerGroup([layerOZONE_1990,layerOZONE_1991,layerOZONE_1992,layerOZONE_1993,layerOZONE_1994,layerOZONE_1995,layerOZONE_1996,layerOZONE_1997,layerOZONE_1998,layerOZONE_1999,layerOZONE_2000,layerOZONE_2001,layerOZONE_2002,layerOZONE_2003,layerOZONE_2004,layerOZONE_2005,layerOZONE_2006,layerOZONE_2007,layerOZONE_2008,layerOZONE_2009,layerOZONE_2010,layerOZONE_2011,layerOZONE_2012,layerOZONE_2013,layerOZONE_2014,layerOZONE_2015,layerOZONE_2016,layerOZONE_2017]);
NOTWOP = L.layerGroup([layerNO_2005,layerNO_2006,layerNO_2007,layerNO_2008,layerNO_2009,layerNO_2010,layerNO_2011,layerNO_2012,layerNO_2013,layerNO_2014,layerNO_2015,layerNO_2016,layerNO_2017,layerNO_2018,layerNO_2019,layerNO_2020]);
LIGHTP = L.layerGroup([layerLIGHT_2012,layerLIGHT_2013,layerLIGHT_2014,layerLIGHT_2015,layerLIGHT_2016,layerLIGHT_2017,layerLIGHT_2018,layerLIGHT_2019,layerLIGHT_2020,layerLIGHT_2021]); 
GREENP = L.layerGroup([layerGREEN_2000,layerGREEN_2001,layerGREEN_2002,layerGREEN_2003,layerGREEN_2004,layerGREEN_2005,layerGREEN_2006,layerGREEN_2007,layerGREEN_2008,layerGREEN_2009,layerGREEN_2010,layerGREEN_2011,layerGREEN_2012,layerGREEN_2013,layerGREEN_2014,layerGREEN_2015,layerGREEN_2016,layerGREEN_2017,layerGREEN_2018,layerGREEN_2019,layerGREEN_2020,layerGREEN_2021,layerGREEN_2022]);
TEMPP = L.layerGroup([layerTEMP_2007,layerTEMP_2008,layerTEMP_2009,layerTEMP_2010,layerTEMP_2011,layerTEMP_2012,layerTEMP_2013,layerTEMP_2014,layerTEMP_2015,layerTEMP_2016,layerTEMP_2017,layerTEMP_2018,layerTEMP_2019,layerTEMP_2020,layerTEMP_2021,layerTEMP_2022,layerTEMP_2023]);
//SOURCEP = L.layerGroup([layerSOURCE_BIOFUEL]);
BLUESP = L.layerGroup([layerBLUE_2000]);

const picsvars = {
  PMTFV: PMTFVP,
  SOURCE: SOURCEP,
  OZONE: OZONEP,
  NOTWO: NOTWOP,
  LIGHT: LIGHTP,
  GREEN: GREENP,
  BLUES: BLUESP,
  TEMP: TEMPP,
};

let picGroup = determinePics();
var sliderControl = L.control.sliderControl({position: "topright", layer: picGroup, timeAttribute: 'time', follow: 1, startTimeIdx: 0, timeStrLength: 4, alwaysShowDate: true});




function initializeTime() {
  console.log("INITIALIZETIME FN");
  	/* need to remove the initial pm 2.5 slider and update based on checks*/
	map.addControl(sliderControl);
	setInterval(function(){
            var current = $(this.sliderBoxContainer).slider("value");
            var max = sliderControl.options.maxValue + 1;
            var step = ++current % max;
            $(this.sliderBoxContainer).slider("value", step);
            sliderControl.slide(null, {value: step});
        }, 1500);
  console.log(sliderControl);
  sliderControl.startSlider();
}



function determinePics() {
	console.log("IN DETERMINEPICS");
	let pics = [];
	let names = [];
	if (checkies === undefined) {
		pics = PMTFVP;
	} else {
	checkies.forEach(c => {
		if (c.checked === true) {
			console.log(checkies);
			let n = c.id;
			names.push(n);
		}
	});
	names.forEach(name => {
		if (polygonLayers.includes(name)) {
			pics = picsvars[name];
		}
	});
} return pics;
}


let currentLayer = "White Canvas";
map.on('baselayerchange', function(e) {
	currentLayer = e.name;
})


// === Determine & Update Map From Check boxes == //
function determineTime() {
	  console.log("IN DETERMINE TIME");
	  map.removeControl(sliderControl);
	  $('#leaflet-slider').remove();
	  $(this.sliderBoxContainer).remove();
	  $('#slider-timestamp').remove();
	  $(this.timestampContainer).remove();
	  $(this.sliderContainer).remove();
	  $(this.container).remove();
	  $(this._container).remove();
	  $('img.leaflet-control').remove();
		map.removeControl(geocoder);
		map.removeControl(legend);
		before = map.hasLayer(velocityLayer);
		map.eachLayer(function(layer) {
    map.removeLayer(layer);
		});
		if (before == true) {
			map.addLayer(velocityLayer);
		} else {
			map.removeLayer(velocityLayer);
		}
	  picGroupoink = determinePics();
		if (currentLayer != "White Canvas" & picGroupoink != BLUESP & picGroupoink != PMTFVP & picGroupoink != NOTWOP & picGroupoink != OZONEP & picGroupoink != GREENP) {
			map.addLayer(baseLayers[currentLayer]);
		} else {
			map.addLayer(baseLayers["White Canvas"]);
		}
	if (picGroupoink == LIGHTP) {
		map.removeLayer(baseLayers["White Canvas"]);
		map.removeLayer(baseLayers["Satellite"]);
		map.addLayer(baseLayers["Grey Canvas"]);
	}
	legendOINK = determineLegend();
  var newsliderControl = L.control.sliderControl({position: "topright", layer: picGroupoink, timeAttribute: 'time', follow: 1, startTimeIdx: 0, timeStrLength: 4, alwaysShowDate: true});
  var newlegend = L.control({position:'bottomleft'});
  newlegend.onAdd = function(map) {
        var img = L.DomUtil.create('img');
				
        img.src = legendOINK;
        img.style.width = '143px';
        img.style.height = '80px';

        return img;
    };
  newlegend.addTo(map);  
  console.log(newlegend);
	map.addControl(newsliderControl);
	map.addControl(geocoder);
	setInterval(function(){
            var current = $(this.sliderBoxContainer).slider("value");
            var max = newsliderControl.options.maxValue + 1;
            var step = ++current % max;
            $(this.sliderBoxContainer).slider("value", step);
            newsliderControl.slide(null, {value: step});
        }, 1500);
  newsliderControl.startSlider();
  let checkedname = [];
	checkies.forEach(c => {
		if (c.checked === true) {
			console.log(checkies);
			let n = c.id;
			checkedname.push(n);
		}})
		console.log(checkedname);
  	document.querySelector('#PMTFV').onclick = (e) => {
  		if (checkedname == "PMTFV") {
  			e.preventDefault();
  		} else {
  		  map.removeControl(newsliderControl);	
  		}
  	}
  	document.querySelector('#SOURCE').onclick = (e) => {
  		if (checkedname == "SOURCE") {
  			e.preventDefault();
  		} else {
  		  map.removeControl(newsliderControl);	
  		}
  	}
  	document.querySelector('#OZONE').onclick = (e) => {
  		if (checkedname == "OZONE") {
  			e.preventDefault();
  		} else {
  			map.removeControl(newsliderControl);
  		}
  	}
  	document.querySelector('#NOTWO').onclick = (e) => {
  		if (checkedname == "NOTWO") {
  			e.preventDefault();
  		} else {
  		  map.removeControl(newsliderControl);  			
  		}
  	}
  	document.querySelector('#LIGHT').onclick = (e) => {
  		if (checkedname == "LIGHT") {
  			e.preventDefault();
  		} else {
  		  map.removeControl(newsliderControl);  			
  		}
  	}
  	document.querySelector('#GREEN').onclick = (e) => {
  		if (checkedname == "GREEN") {
  			e.preventDefault();
  		} else {
  		  map.removeControl(newsliderControl);  			
  		}
    }
  	document.querySelector('#BLUES').onclick = (e) => {
  		if (checkedname == "BLUES") {
  			e.preventDefault();
  		} else {
  		  map.removeControl(newsliderControl);  			
  		}
    }
  	document.querySelector('#TEMP').onclick = (e) => {
  		if (checkedname == "TEMP") {
  			e.preventDefault();
  		} else {
  		  map.removeControl(newsliderControl);  			
  		}
    }
}


initializeMap();
initializeTime();
var geocoder = L.Control.geocoder({position: 'topright', placeholder: 'Search for location...'})
geocoder.addTo(map);
L.control.zoom({
  position: 'bottomright'
}).addTo(map);


map.setView([21.3724,77.6241], 5);



let velocityLayer;
$.getJSON("https://raw.githubusercontent.com/aidanpcole/EXPOSOMEDASHBOARD/main/data/DataForMap/wind-global.json", function(data) {
  velocityLayer = L.velocityLayer({
    displayValues: false,
    displayOptions: {
      velocityType: "Global Wind",
      position: "bottomright",
      emptyString: "No wind data"
    },
    data: data,
    maxVelocity: 15
  });
  layerControl.addOverlay(velocityLayer, "Wind - Global");
});

/*var legendbounds = new L.LatLngBounds(
    new L.LatLng(11.850403911080494, 114.78228464710038),
    new L.LatLng(15.765228811080178, 117.34279637664724));
var pm25_scheme = new L.ImageOverlay("https://raw.githubusercontent.com/aidanpcole/EXPOSOMEDASHBOARD/main/data/DataForMap/pm25_scheme.png", legendbounds, {opacity: 1.0, interactive: false});
map.addLayer(pm25_scheme);
pm25_scheme.addTo(map);
var legenedControl = L.control.layers(pm25_scheme, null, {position: 'bottomright',collapsed:false}).addTo(map);
map.addControl(legendControl); */


/*var legend = L.control({position:'bottomright'});

legend.onAdd = function (map) {
var div = L.DomUtil.create('div', 'info legend');

    div.innerHTML +=
    '<img src="images/trash.png" alt="legend" width="33" height="80">';

return div;
};

legend.addTo(map);*/


function determineLegend() {
	console.log("IN DETERMINELEGEND");
	let legend = [];
	let names = [];
	if (checkies === undefined) {
		legend = PMLEGEND;
	} else {
		checkies.forEach(c => {
			if (c.checked === true) {
				console.log(checkies);
				let n = c.id;
				names.push(n);
			}
		});
		names.forEach(name => {
			if (polygonLayers.includes(name)) {
				legend = legendvars[name];
			}
		});
	} return legend;
}

var legend = L.control({position:'bottomleft'});

legend.onAdd = function(map) {
        var img = L.DomUtil.create('img', 'legendboy', this._container);
        let legendurl = determineLegend();
				
        img.src = legendurl;
        img.style.width = '143px';
        img.style.height = '80px';

        return img;
    };

legend.addTo(map);
console.log(legend);

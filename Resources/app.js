/*
Copyright [2011] [Addictive Software]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

Titanium.UI.setBackgroundColor('#fff');
Titanium.API.info("starting application");


if (! Titanium.App.Properties.hasProperty('url')) {
    Titanium.App.Properties.setString('url', 'http://books.addictivesoftware.net/api/');
}

var settings = {
    color1: '#420404',
    color2: '#220404'
    };


var tabGroup = Titanium.UI.createTabGroup();

//
//  TAB GROUP EVENTS
//
var messageWin = Titanium.UI.createWindow({
	height:30,
	width:250,
	bottom:70,
	borderRadius:10,
	touchEnabled:false
});
var messageView = Titanium.UI.createView({
	height:30,
	width:250,
	borderRadius:10,
	backgroundColor:settings.color1,
	opacity:0.7,
	touchEnabled:false
});

var messageLabel = Titanium.UI.createLabel({
	text:'',
	color:'#fff',
	width:250,
	height:'auto',
	font:{
		fontFamily:'Helvetica Neue',
		fontSize:13
	},
	textAlign:'center'
});

messageWin.add(messageView);
messageWin.add(messageLabel);

messageWin.text = function(message) {
	messageLabel.text = message;
	messageWin.open();
	setTimeout(function()
	{
		messageWin.close({opacity:0,duration:500});
	},1000);

};



var winAllAuthors = Titanium.UI.createWindow({
    url:'windows/allauthors.js',
    title:'All Books - Authors',
    barColor: settings.color1,
    color1: settings.color1,
    color2: settings.color2,
    message: messageWin
});
var tabAllAuthors = Titanium.UI.createTab({
    icon:'images/authors.png',
    title:'All Books',
    window:winAllAuthors
});

var winMyAuthors = Titanium.UI.createWindow({
    url:'windows/authors.js',
    title:'My Books - Authors',
    barColor: settings.color1,
    color1: settings.color1,
    color2: settings.color2,
    message: messageWin
});
var tabMyAuthors = Titanium.UI.createTab({
    icon:'images/authors.png',
    title:'My Books',
    window:winMyAuthors
});

var winAbout = Titanium.UI.createWindow({
    url: 'windows/about.js',
    title:'About',
    barColor: settings.color1,
    color1: settings.color1,
    color2: settings.color2
});
var tabAbout = Titanium.UI.createTab({
    icon:'images/about.png',
    title:'About',
    window:winAbout
});

var winScan = Titanium.UI.createWindow({
    url: 'windows/scan.js',
    barColor:settings.color1,
    title:'Scan a Book',
    color1: settings.color1,
    color2: settings.color2
});

var tabScan = Titanium.UI.createTab({
    icon:'images/scan.png',
    title:'Scan a Book',
    window:winScan
});


var winSettings = Titanium.UI.createWindow({
    url:'windows/settings.js',
    barColor:settings.color1,
    title:'Settings',
    color1: settings.color1,
    color2: settings.color2
});

var tabSettings = Titanium.UI.createTab({
    icon:'images/settings.png',
    title:'Settings',
    window:winSettings
});

tabGroup.addTab(tabAllAuthors);
tabGroup.addTab(tabMyAuthors);
tabGroup.addTab(tabScan);
tabGroup.addTab(tabAbout);
tabGroup.addTab(tabSettings);

tabGroup.open();

// tab group open event
tabGroup.addEventListener('open', function(e)
{
	//messageWin.text("opening...");

});

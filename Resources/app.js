Titanium.UI.setBackgroundColor('#fff');

Titanium.API.info("starting application");

//if (! Titanium.App.Properties.hasProperty('url')) {
    Titanium.App.Properties.setString('url', 'http://localhost:8080/books/api/');
//}

var settings = {
    color1: '#420404',
    color2: '#220404'
    };


var tabGroup = Titanium.UI.createTabGroup();

var win1 = Titanium.UI.createWindow({  
    url:'windows/authors.js',
    title:'Authors',
    barColor: settings.mainColor,
    color1: settings.color1,
    color2: settings.color2
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Authors',
    window:win1
});

var win2 = Titanium.UI.createWindow({  
    url: 'windows/about.js',
    title:'About',
    barColor: settings.color1,
    color1: settings.color1,
    color2: settings.color2
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_phone.png',
    title:'About',
    window:win2
});

var win3 = Titanium.UI.createWindow({  
    url: 'windows/scan.js',
    barColor:settings.color1,
    title:'Scan a Book',
    color1: settings.color1,
    color2: settings.color2
});

var tab3 = Titanium.UI.createTab({
    icon:'KS_nav_mashup.png',
    title:'Scan a Book',
    window:win3
});


var win4 = Titanium.UI.createWindow({
    url:'windows/settings.js',
    barColor:settings.color1,
    title:'Settings',
    color1: settings.color1,
    color2: settings.color2
});

var tab4 = Titanium.UI.createTab({
    icon:'KS_nav_mashup.png',
    title:'Settings',
    window:win4
});

tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);  
tabGroup.addTab(tab4);  

tabGroup.open();


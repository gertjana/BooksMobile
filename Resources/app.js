Titanium.UI.setBackgroundColor('#fff');

Titanium.API.info("starting application");

//if (! Titanium.App.Properties.hasProperty('url')) {
    Titanium.App.Properties.setString('url', 'http://localhost:8080/books/api/');
//}



var tabGroup = Titanium.UI.createTabGroup();

var win1 = Titanium.UI.createWindow({  
    url:'windows/authors.js',
    title:'Authors'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Authors',
    window:win1
});

var win2 = Titanium.UI.createWindow({  
    url: 'windows/about.js',
    title:'About'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_phone.png',
    title:'About',
    window:win2
});

var win3 = Titanium.UI.createWindow({  
    url: 'windows/scan.js',
    title:'Scan a Book'
});

var tab3 = Titanium.UI.createTab({
    icon:'KS_nav_mashup.png',
    title:'Scan a Book'
});


var win4 = Titanium.UI.createWindow({
    url:'windows/settings.js',
    title:'Settings'
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


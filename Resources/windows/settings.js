var win = Titanium.UI.currentWindow;

var url = Titanium.App.Properties.getString('url');

win.add(Ti.UI.createLabel({
    color:'#576996',
    font:{fontSize:16,fontWeight:'bold', fontFamily:'Arial'},
    left:10,
    top:10,
    height:30,
    width:'auto',
    text:'Webservice URL'
}));

var urlTextField = Titanium.UI.createTextField({
	color:'#336699',
	height:35,
	top:35,
	left:10,
	width:250,
	keyboardType:Titanium.UI.KEYBOARD_URL,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    value:url
});

urlTextField.addEventListener('return', function()
{
    Titanium.App.Properties.setString(url, urlTextField.value);
});

win.add(urlTextField);


var fbButton = Titanium.Facebook.createLoginButton({
	'style':'wide',
	'appid':'bla',
	'apikey':'9494e611f2a93b8d7bfcdfa8cefdaf9f',
	'sessionProxy':'http://api.appcelerator.net/p/fbconnect/',
    top:100,
    height:100
});
win.add(fbButton);


var win = Ti.UI.currentWindow;
win.backgroundImage = '../images/gradientBackground.png';


win.add(Ti.UI.createLabel({
    color:win.color1,
    font:{fontSize:14,fontWeight:'bold', fontFamily:'Arial'},
    left:5,
    top:5,
    height:60,
    width:'auto',
    textAlign:'left',
    text:'Scanning is available in the pro version'
}));

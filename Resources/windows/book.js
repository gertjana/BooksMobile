var win = Ti.UI.currentWindow;
var book = win.book;

var cover = Ti.UI.createImageView({
    image:book.imageurl,
    top:5,
    left:5,
    width:310,
    height:160
});

win.add(cover);

win.add(Ti.UI.createLabel({
    color:'#576996',
    font:{fontSize:16,fontWeight:'bold', fontFamily:'Arial'},
    left:5,
    top:240,
    height:30,
    width:'auto',
    textAlign:'center',
    text:book.title
}));

win.add(Ti.UI.createLabel({
    color:'#444',
    font:{fontSize:12, fontFamily:'Arial'},
    left:105,
    top:265,
    height:20,
    width:200,
    text:book.authors
}));

win.add(Ti.UI.createLabel({
    color:'#444',
    font:{fontSize:12, fontFamily:'Arial'},
    left:105,
    top:280,
    height:20,
    width:200,
    text:book.publisher
}));
        
win.add(Ti.UI.createLabel({
    color:'#444',
    font:{fontSize:12, fontFamily:'Arial'},
    left:105,
    top:295,
    height:20,
    width:200,
    text:book.publishedYear
}));
        
win.add(Ti.UI.createLabel({
    color:'#444',
    font:{fontSize:12, fontFamily:'Arial'},
    left:105,
    top:310,
    height:20,
    width:200,
    text:book.isbn
}));
 
win.add(Ti.UI.createLabel({
    color:'#888',
    font:{fontSize:12, fontFamily:'Arial'},
    left:25,
    top:265,
    height:20,
    width:200,
    text:'Author(s)'
}));


win.add(Ti.UI.createLabel({
    color:'#888',
    font:{fontSize:12, fontFamily:'Arial'},
    left:25,
    top:280,
    height:20,
    width:200,
    text:'Publisher'
}));
        
win.add(Ti.UI.createLabel({
    color:'#888',
    font:{fontSize:12, fontFamily:'Arial'},
    left:25,
    top:295,
    height:20,
    width:200,
    text:'Pub. Date'
}));
        
win.add(Ti.UI.createLabel({
    color:'#888',
    font:{fontSize:12, fontFamily:'Arial'},
    left:25,
    top:310,
    height:20,
    width:200,
    text:'ISBN'
}));
        
         
           

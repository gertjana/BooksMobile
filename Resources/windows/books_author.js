
var tableView;

//get data
var books = [];
var data = [];

var win = Ti.UI.currentWindow;
win.backgroundImage = '../images/gradientBackground.png';


var xhr = Titanium.Network.createHTTPClient();

xhr.onload = function()
{
	var books = JSON.parse(this.responseText).books;
    	data = [];
    	for (var i=0;i<books.length;i++) {

        	var book = books[i].book;
        

        	var row = Ti.UI.createTableViewRow();
        	row.height = 60;
        	row.className = 'datarow';
        	row.hasChild = true;

        	row.detailView = 'book.js';
        	row.book = book;
	
        	var photo = Ti.UI.createImageView({
            		image:book.imageurl,
            		top:5,
            		left:10,
            		width:50,
            		height:50
        	});
        	row.add(photo);

        	var bookName = Ti.UI.createLabel({
			color: win.color1,
			font:{fontSize:16,fontWeight:'bold', fontFamily:'Arial'},
            		left:70,
            		top:2,
            		height:30,
            		width:200,
            		text:book.title
        	});
        	row.add(bookName);

        	var bookPublished = Ti.UI.createLabel({
            		color: win.color2,
            		font:{fontSize:12, fontFamily:'Arial'},
            		left:70,
            		top:22,
            		height:20,
            		width:200,
            		text:book.publisher + ' ' + book.publishedYear
        	});
        	row.add(bookPublished);

        	var bookIsbn = Ti.UI.createLabel({
            		color: win.color2,
            		font:{fontSize:12, fontFamily:'Arial'},
            		left:70,
            		top:37,
            		height:20,
            		width:200,
            		text:book.isbn
        	});
        	row.add(bookIsbn);

        	data.push(row);
        
        	tableView.setData(data, {});
    	}
};

Ti.API.info(Ti.UI.currentWindow.books);
xhr.open('GET',Ti.UI.currentWindow.books);
xhr.send();


tableView = Titanium.UI.createTableView({
	data:data,
	filterAttribute:'filter',
	separatorColor:win.color1,
	backgroundColor:'transparent'
});

tableView.addEventListener('click', function(e)
{
	if (e.rowData.detailView)
	{
		var newwin = Titanium.UI.createWindow({
			url:e.rowData.detailView,
			barColor:win.color1,
			title:e.rowData.bookName,
			color1:win.color1,
			color2:win.color2
		});
        newwin.book = e.rowData.book;
		Titanium.UI.currentTab.open(newwin,{animated:true});
	}
});


Titanium.UI.currentWindow.add(tableView);

Titanium.UI.currentWindow.addEventListener('focus', function(e) {
    xhr.open('GET',Ti.UI.currentWindow.books);
    xhr.send();
});


var tableView;

//get data
var books = [];
var data = [];

var xhr = Titanium.Network.createHTTPClient();

xhr.onload = function()
{
	var books = JSON.parse(this.responseText).books;
    	data = [];
    	for (var i=0;i<books.length;i++) {

        	var book = books[i].book;
        

        	var row = Ti.UI.createTableViewRow();
        	row.selectedBackgroundColor = '#fff';
        	row.height = 60;
        	row.className = 'datarow';
        	row.hasChild = true;

        	row.detailView = 'book2.js';
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
			color: '#420404',
			font:{fontSize:16,fontWeight:'bold', fontFamily:'Arial'},
            		left:70,
            		top:2,
            		height:30,
            		width:200,
            		text:book.title
        	});
        	row.add(bookName);

        	var bookPublished = Ti.UI.createLabel({
            		color:'#888',
            		font:{fontSize:12, fontFamily:'Arial'},
            		left:70,
            		top:22,
            		height:20,
            		width:200,
            		text:book.publisher + ' ' + book.publishedYear
        	});
        	row.add(bookPublished);

        	var bookIsbn = Ti.UI.createLabel({
            		color:'#888',
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
	backgroundColor:'transparent'
});

tableView.addEventListener('click', function(e)
{
	if (e.rowData.detailView)
	{
		var win = Titanium.UI.createWindow({
			url:e.rowData.detailView,
			barColor:'111',
			title:e.rowData.bookName
		});
	win.backgroundImage = '../images/gradientBackground.png';
        win.book = e.rowData.book;
		Titanium.UI.currentTab.open(win,{animated:true});
	}
});


Titanium.UI.currentWindow.backgroundImage = '../images/gradientBackground.png';
Titanium.UI.currentWindow.add(tableView);

Titanium.UI.currentWindow.addEventListener('focus', function(e) {
    xhr.open('GET',Ti.UI.currentWindow.books);
    xhr.send();
});

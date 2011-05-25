function createRow(label, value) {
	var row = Ti.UI.createTableViewRow();
	
	var labelLabel = Ti.UI.createLabel({
		text: label,
		color: '#220404',
		textAlign:'left',
		top:2,
		left:4,
		width: 'auto',
		height:'auto',
		font:{fontWeight:'bold',fontSize:10}
	});
	row.add(labelLabel);

	var labelValue = Ti.UI.createLabel({
		text: value,
		color: '#420404',
		textAlign:'left',
		top:20,
		left:85,
		width: 'auto',
		height:'auto',
		font:{fontWeight:'bold',fontSize:14}
	});
	row.add(labelValue);	
	
	return row;
}

var win = Ti.UI.currentWindow;
var book = win.book;
win.backgroundImage = '../images/gradientBackground.png';

var data = [];


var cover = Ti.UI.createImageView({
    	image:book.imageurl,
	height:160
});

var row = Ti.UI.createTableViewRow();
row.height = 160;
row.add(cover);

data.push(row);

data.push(createRow("ISBN", book.isbn));
data.push(createRow("Authors", book.authors));
data.push(createRow("Published", book.publisher + " " + book.publishedYear));

var tableview = Titanium.UI.createTableView({
	data:data,
/*	style:Titanium.UI.iPhone.TableViewStyle.PLAIN,*/
	backgroundColor:'transparent',
	maxRowHeight:160,
	minRowHeight:50 //,
/*	separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.NONE*/
});

tableview.addEventListener('click',function(e)
{
	Ti.API.info("clicked on table view = "+e.source);
});

win.add(tableview);



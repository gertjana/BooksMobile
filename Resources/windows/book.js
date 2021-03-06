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

Ti.include("constants.js");

function createRow(name, value) {
	var row = Ti.UI.createTableViewRow();
	
	var labelName = Ti.UI.createLabel({
		text: name,
		color: settings.color1,
		textAlign:'left',
		top:2,
		left:4,
		width: 'auto',
		height:'auto',
		font:{fontWeight:'bold',fontSize:10}
	});
	row.add(labelName);

	var labelValue = Ti.UI.createLabel({
		text: value,
		color: settings.color2,
		textAlign:'left',
		top:5,
		left:65,
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

var xhr = Titanium.Network.createHTTPClient();

xhr.onload = function() {
    if (xhr.status == 200) {
        win.message.text("Added this book to your collection");
    } else if (xhr.status == 409) { //409 = Conflict
        win.message.text("Book is already part of your collection");
    } else {
        win.message.text(xhr.status + " failed to add this book to your collection");
    }
};

xhr.onerror = function() {
    win.message.text("Error occured while trying to add this book to your collection");
};

var cover = Ti.UI.createImageView({
   	image:book.imageurl,
    height:160
});

var row = Ti.UI.createTableViewRow();
row.height = 170;
row.add(cover);

data.push(row);

data.push(createRow("Title", book.title));
data.push(createRow("Author(s)", book.authors));
data.push(createRow("ISBN", book.isbn));
data.push(createRow("Published", book.publisher + " " + book.publishedYear));

var tableview = Titanium.UI.createTableView({
	data:data,
	backgroundColor:'transparent',
	separatorColor: settings.color1,
	maxRowHeight:170,
	minRowHeight:50
});

win.add(tableview);

var addButton = Titanium.UI.createButton({
	title:'Add'//,
	//style: Titanium.UI.iPhone.SystemButtonStyle.DONE
});

addButton.addEventListener('click', function()
{
    var key = Ti.App.Properties.getString("apikey");
    var addBookToCollectionURI =  Ti.App.Properties.getString('url') + key + "/user/books/add/" + book.id;

    Ti.API.info(addBookToCollectionURI);

    xhr.open('GET',addBookToCollectionURI);
    xhr.send();

});

if (! win.myCollection) {
    win.setRightNavButton(addButton);
}



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

var tableView;
var data = [];
var authors = [];

var win = Titanium.UI.currentWindow;
win.backgroundImage = '../images/gradientBackground.png';

var key = Ti.App.Properties.getString("apikey");
var authorsUri =  Ti.App.Properties.getString('url') + key + "/authors/";

var xhr = Titanium.Network.createHTTPClient();

xhr.onload = function()
{
    var authors = JSON.parse(this.responseText).authors;    
    Ti.API.info('found ' + authors.length + ' authors');
    
    var previousChar = '';
    var previousIndex = 0;
    var index = [];
    data = [];
    
    for (var i=0;i<authors.length;i++) {
        var author = authors[i].author;
        
        var name = author.firstname + " " + author.lastname;
 
        //var image = author.getAttribute('image');
        image = '../images/user.png';
        var row = Ti.UI.createTableViewRow();
        
        row.height = 60;
        row.className = 'datarow';
        row.hasChild = true;

        row.detailView = 'books_author.js';
        row.author = name;
        row.books = authorsUri + author.id + "/books/";
        
        var firstChar = author.lastname.substring(0,1);        
        if (firstChar != previousChar) {
            if (previousIndex != 0) {
                index.push({title: previousChar,index:previousIndex});
                row.header = firstChar;
            }
            previousChar = firstChar;
            previousIndex = i;
        }
        
    
	var photo = Ti.UI.createView({
	 	backgroundImage:image,
	 	top:5,
	 	left:10,
		width:50,
		height:50
	});
    row.add(photo);

    var authorName = Ti.UI.createLabel({
	font:{fontSize:16,fontWeight:'bold', fontFamily:'Arial'},
 	color: settings.color1,
	left:70,
        top:2,
        height:30,
        width:200,
        text:name
    });
    row.add(authorName);
/*
    var authorDate = Ti.UI.createLabel({
		color:'#444',
		font:{fontSize:12,fontFamily:'Arial'},
		left:70,
		top:22,
		height:20,
		width:200,
		text:author.getAttribute('birthDate')
	});
    row.add(authorDate);
*/
    var nrOfBooks = Ti.UI.createLabel({
		color: settings.color2,
		font:{fontSize:12,fontFamily:'Arial'},
		left:70,
		top:36,
		height:20,
		width:200,
		text:author.nrofbooks + ' Book(s)'
	});
    row.add(nrOfBooks);

    data.push(row);
    
    }
    tableView.index = index;
    tableView.setData(data, {});

};


Titanium.UI.currentWindow.addEventListener('focus', function (e) {
        var key = Ti.App.Properties.getString("apikey");
        var authorsUri =  Ti.App.Properties.getString('url') + key + "/authors/all";

        Ti.API.info(authorsUri);

        xhr.open('GET',authorsUri);
        xhr.send();
    
});

tableView = Titanium.UI.createTableView({
	data:data,
	filterAttribute:'filter',
	separatorColor: settings.color1,
	backgroundColor:'transparent'
});

// create table view event listener
tableView.addEventListener('click', function(e)
{
	if (e.rowData.detailView)
	{
		var newwin = Titanium.UI.createWindow({
			url:e.rowData.detailView,
			title:e.rowData.author,
			barColor: settings.color1,
            books:e.rowData.books,
            message:win.message,
            myCollection:false
		});
		Ti.API.info(e.rowData.detailView);
        newwin.author = e.rowData.author;
		Titanium.UI.currentTab.open(newwin,{animated:true});
	}
});
Titanium.UI.currentWindow.add(tableView);


var addButton = Titanium.UI.createButton({
        title:'Add Author'
});

var winAddAuthor = Titanium.UI.createWindow({
    url:'add_author.js',
    message:win.message,
    top:45
});

addButton.addEventListener('click', function() {
    if (addButton.title == 'close') {
        addButton.title = "Add Author";
        winAddAuthor.close();
    } else {
        addButton.title = "close";
        winAddAuthor.open();
    }
});

win.setRightNavButton(addButton);
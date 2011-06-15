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

var win = Titanium.UI.currentWindow;
win.backgroundImage = '../images/gradientBackground.png';
win.message.text("hello world");


win.add(Ti.UI.createLabel({
    color:settings.color2,
    font:{fontsize:12, fontFamily:'Arial'},
    left:10,
    top:40,
    height:50,
    width:'auto',
    text: 'Add an author by specify-ing their first and last name, please make sure the author doesnt already exist'
}));

win.add(Ti.UI.createLabel({
    color:settings.color1,
    font:{fontSize:16,fontWeight:'bold', fontFamily:'Arial'},
    left:10,
    top:110,
    height:30,
    width:'auto',
    text:'First name'
}));

var firstNameTextField = Titanium.UI.createTextField({
	color: settings.color2,
	height:35,
	top:135,
	left:10,
	width:250,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});


win.add(Ti.UI.createLabel({
    color:settings.color1,
    font:{fontSize:16,fontWeight:'bold', fontFamily:'Arial'},
    left:10,
    top:170,
    height:30,
    width:'auto',
    text:'Last name'
}));

var lastNameTextField = Titanium.UI.createTextField({
	color: settings.color2,
	height:35,
	top:195,
	left:10,
	width:250,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});


var saveButton = Titanium.UI.createButton({
	title:'Save',
	height:40,
	width:145,
	top:275,
	left:10,
	color:settings.color1,
	backgroundSelectedColor:settings.color1,
	selectedColor:settings.color2
});

var xhr = Titanium.Network.createHTTPClient();
xhr.onload = function() {
    if (xhr.status == 200) {
        win.message.info("added author to online database");
    } else {
        win.message.info(xhr.status);
    }
};

xhr.onerror = function(e) {
    win.message.error(e.error);
};

win.add(firstNameTextField);
win.add(lastNameTextField);
win.add(saveButton);



// add eventhandlers

saveButton.addEventListener('click', function() {
    win.message.text("saving author");
    xhr.open("PUT",ADD_AUTHOR_URI);
    xhr.send({
        "firstname":firstNameTextField.text,
        "lastname":lastNameTextField.text
    });
});
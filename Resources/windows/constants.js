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

var APIKEY = "";
var BASE_URI = "";
var ADD_AUTHOR_URI = "";
var USER_AUTHORS_URI = "";

function loadPropertiesAndUris() {
    APIKEY = Ti.App.Properties.getString("apikey");
    BASE_URI = Ti.App.Properties.getString("url");
    ADD_AUTHOR_URI =   BASE_URI + APIKEY + "/authors/add";
    USER_AUTHORS_URI = BASE_URI + APIKEY + "/user/authors/";
}

loadPropertiesAndUris();

function reloadPropertiesAndUris() {
    loadPropertiesAndUris();
}

var settings = {
    color1: '#420404',
    color2: '#220404'
};

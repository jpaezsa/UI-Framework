/*-*****************************************************************************
DirectEmployers Foundation
UI Framework (C)2011-12 DirectEmployers Foundation

This UI Framework uses the following libraries:
 - jQuery
 - swfObject
 - BootstrapJS
*****************************************************************************-*/
var loader="def.ui.jquery.dataTables.js";
var jsSrc = "http://def.nlx.org/framework/script/";
var tagOpen = "<script src='"+jsSrc;
var tagClose= "' type='text/javascript'></script>";
var fileList = [
    "code/jquery.dataTables.min.js"
];
for(var i=0;i<fileList.length;i++){
    document.write(tagOpen+fileList[i]+tagClose)
}
/*-*****************************************************************************
DirectEmployers Foundation
UI Framework (C)2011-12 DirectEmployers Foundation

This UI Framework uses the following libraries:
 - jQuery
 - swfObject
 - BootstrapJS
*****************************************************************************-*/
var loader="def.ui.js";
var jsSrc = "http://js.nlx.org/framework/js/";
var tagOpen = "<script src='"+jsSrc;
var tagClose= "' type='text/javascript'></script>";
var fileList = [
    "code/jquery-1.6.4.min.js",
    "code/jquery-ui.min.js",
    "code/jquery.dataTables.min.js",
    "code/jquery.mobile-1.0rc2.min.js",
    "code/swfobject.js",
    "code/bootstrap-alerts.js",
    "code/bootstrap-buttons.js",
    "code/bootstrap-dropdown.js",
    "code/bootstrap-modal.js",
    "code/bootstrap-popover.js",
    "code/bootstrap-scrollspy.js",
    "code/bootstrap-tabs.js",
    "code/bootstrap-twipsy.js",
    "code/foundation.js"
];
for(var i=0;i<fileList.length;i++){
    document.write(tagOpen+fileList[i]+tagClose)
}

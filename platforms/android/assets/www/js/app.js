/**
 * Created by hasta on 01/07/15.
 */
// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
function onLoad() {
    console.log("On Load");
    document.addEventListener("deviceready", onDeviceReady, false);
    document.addEventListener("createIframe", createIframe, false);
}

// Cordova is loaded and it is now safe to make calls Cordova methods
//
function onDeviceReady() {
    document.addEventListener("createIframe", createIframe, false);
}

// Handle the resume event
//
function onResume() {
}

//doesn't block the load event
function createIframe() {
    var i = document.createElement("iframe");
    i.src = "http://uat.talk.build/?mobile=1";
    i.scrolling = "auto";
    i.frameborder = "0";
    i.width = "100%";
    i.height = "100%";
    document.getElementById("frameContainer").appendChild(i);
};
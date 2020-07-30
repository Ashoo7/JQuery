// function GetAJAX
function getAJAX() {

    // Create a AJAX request
    var http = new XMLHttpRequest();

    // Prepare the AJAX Request
    http.open('GET','persons.xml',true);

    //Send the request
    http.send();

    // Process the Request if the response is ready
    http.onreadystatechange = function () {

        // If server is ready with the response
        if(http.readyState === 4 && http.status === 200){
            // Process the data
            processData(http);
        }
    };
}

// Process the data
function processData(xml) {
    var xmlData = xml.responseXML;
    var contactList = xmlData.querySelectorAll('contacts');
    var imageTagsString = '';
    var imageGalleryElement = document.querySelector('#image-gallery-div');
    for(var i=0; i<contactList.length; i++){
        var picture = contactList[i].childNodes[21].childNodes[1].textContent;
        imageTagsString += '<img src="' + picture + '"> \n ';
    }
    imageGalleryElement.innerHTML = imageTagsString;
}
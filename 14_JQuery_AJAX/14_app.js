//Load Images Button

$('#load-images-btn').click(function() {

    $.getJSON('https://gist.githubusercontent.com/thenaveensaggam/1c63ef581c7088d4c39e61b081910c20/raw/dfe912428569106e8ad5f2dda65998e7ac761cf1/03122018.json',function(response){
        var contactList = response.contacts;
        var imageSelector = '#image';
        var nameSelector = '_name';
        for(var i=0; i<contactList.length; i++){
            var imageSource = contactList[i].picture.large;
            var fullName = contactList[i].name.first + " " + contactList[i].name.last;
            $(imageSelector + (i + 1)).attr('src',imageSource);
            $(imageSelector + (i + 1) + nameSelector).text(fullName);
        }
    });
});
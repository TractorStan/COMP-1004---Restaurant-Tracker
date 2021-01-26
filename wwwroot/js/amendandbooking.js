$(document).ready(function () {
    $('#book').click(function () {
        $('#page-content-wrapper').load('Book.html');
    })
});

$(document).ready(function () {
    $('#amend').click(function () {
        $('#page-content-wrapper').load('Amend.html');
    })
});

//for some unknown reason, I believe that one .js file can only process two requests at a time.
//after I set up the function for Scan and Homepage, I tested them out, found they were working, and started to create the book and amend functions.
//When I executed them in the same .js file, they did not work. After an hour of trying, I had the idea to make a new .js file, which ended up working.
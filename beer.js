//firebasee 

var config = {
    apiKey: "AIzaSyA5BY1IGzgMdKpILZ4bid8QjvAlIYYh9Zw",
    authDomain: "beertinder-eed4b.firebaseapp.com",
    databaseURL: "https://beertinder-eed4b.firebaseio.com",
    projectId: "beertinder-eed4b",
    storageBucket: "",
    messagingSenderId: "720185815496"
};
firebase.initializeApp(config);


//==============================================================================================
$('#myModal').on('shown.bs.modal', function() {
    $('#myInput').focus()
});
//Variables that will be used to create the queryURL for the ajax call to BreweryDb
var proxy = "https://cors-anywhere.herokuapp.com/";
var baseSearchURL = "http://api.brewerydb.com/v2/search?q=";
var beerType = "&type=beer";
var apiKey = "&key=16619a67284d1bb6fed7e7415c0158f2";
//Library of all the beers
var beerObject = {
    1: {
        "name": "stella artois",
        "imageSource": "https://constructiveconsumption.files.wordpress.com/2013/11/stella-artois.jpg",
        "address": "516 Jersey Ave, Jersey City, NJ 07302"
    },
    2: {
        "name": "Brooklyn Lager",
        "imageSource": "http://www.craft-beer-reviews.com/wp-content/uploads/2015/06/brooklin-lager-600x510.jpg",
        "address": "700 1st St, Hoboken, NJ 07030"
    },
    3: {
        "name": "Fat Tire",
        "imageSource": "https://365beers.files.wordpress.com/2010/07/new-belgium-fat-tire.jpg?w=470",
        "address": "87 Jefferson St # A, Hoboken, NJ 07030"
    },
    4: {
        "name": "SweetWater Exodus Porter",
        "imageSource": "https://i.pinimg.com/736x/7f/11/5b/7f115b5eda41d8e500094ae386cb4e05.jpg",
        "address": "511 Palisade Ave, Jersey City, NJ 07307"
    },
    5: {
        "name": "Heineken",
        "imageSource": "https://images-na.ssl-images-amazon.com/images/I/61QyeDGljZL._SY445_.jpg",
        "address": "Adams St, Hoboken, NJ 07030"
    },
    6: {
        "name": "Amstel Light",
        "imageSource": "https://d1ynl4hb5mx7r8.cloudfront.net/wp-content/uploads/2017/03/01170551/amstel-xlight1.jpg",
        "address": "230 Brunswick St, Jersey City, NJ 07302"
    },
    7: {
        "name": "Lagunitas IPA",
        "imageSource": "https://i.pinimg.com/originals/75/a0/f8/75a0f85438f67c2293b6c688a58eece4.jpg",
        "address": "The Grove Path Plaza, 116 Newark Ave, Jersey City, NJ 07302"
    },
    8: {
        "name": "Newcastle Werewolf",
        "imageSource": "https://www.firstpourwine.com/wp-content/uploads/2012/09/DSC00456.jpg",
        "address": "335 Newark Ave, Jersey City, NJ 07302"
    },
    9: {
        "name": "Eliot Ness",
        "imageSource": "https://foodrulesguy.files.wordpress.com/2011/11/great-lakes-elliot-ness.jpg",
        "address": "335 Newark Ave, Jersey City, NJ 07302"
    },
    10: {
        "name": "Carlsberg Beer",
        "imageSource": "https://i0.wp.com/files.hungryforever.com/wp-content/uploads/2016/11/11115058/CArlsberg.jpg?w=800&quality=80&strip=all",
        "address": "163 Newark Ave, Jersey City, NJ 07302"
    },
    11: {
        "name": "Arrogant Bastard Ale",
        "imageSource": "https://www.dmagazine.com/wp-content/uploads/2016/06/Arrogant-Bastard-Ale.jpg",
        "address": "11 East 36th Street, New York, NY 10016"
    },
    12: {
        "name": "Ragin' Bull",
        "imageSource": "https://s3-ap-southeast-2.amazonaws.com/craftypint/crafty/beer/Bootleg-Brewery-Raging-Bull-d1b6-1.png",
        "address": "55 New Jersey 17, Rochelle Park, NJ 07662"
    },
    13: {
        "name": "Captain Sigs Deadliest Ale",
        "imageSource": "http://2.bp.blogspot.com/-GIHBOhGUT4g/TqsTl3pJmFI/AAAAAAAABlw/rSYSjTwvjt0/s1600/Rogue+Captain+Sig+Northwestern+Ale.JPG",
        "address": ""
    },
    14: {
        "name": "Drift Line",
        "imageSource": "http://1.bp.blogspot.com/-96XzC_XlD3Y/TqLmLq_2xWI/AAAAAAAAAUs/-sF8Cs2_K-M/s1600/147.JPG",
        "address": "1750 Bloomsbury Avenue Ocean Township, New Jersey 07712 US"
    },
    15: {
        "name": "Brooklyn Blast!",
        "imageSource": "http://www.thebarleyblog.com/wp-content/uploads/2013/12/brooklyn-blast.jpg",
        "address": "79 N 11th St, Brooklyn, NY 11249"
    },
    16: {
        "name": "Brooklyn Brown Ale",
        "imageSource": "https://365beers.files.wordpress.com/2010/08/brooklyn-brown-ale.jpg?w=470",
        "address": "79 N 11th St, Brooklyn, NY 11249"
    },
    17: {
        "name": "7 Suns Double IPA",
        "imageSource": "http://nrimg.ksmobile.net/cmnews/20170330/18/50132_5e5e4d23_149089899032_640_427.jpg",
        "address": "3156 Rte 9 S, Rio Grande, NJ 08242"
    },
    18: {
        "name": "Defender IPA",
        "imageSource": "http://4.bp.blogspot.com/-S2UpAUmqcZE/Vn3WPIshpcI/AAAAAAAAM3A/uPYiB0GwZQE/s1600/Brooklyn%2BDefender%2BIPA.jpg",
        "address": "79 N 11th St, Brooklyn, NY 11249"
    },
    19: {
        "name": "Blackhorn",
        "imageSource": "http://2.bp.blogspot.com/-P1SyxpBhLs8/UaP73SnQ_II/AAAAAAAAEZs/O-M-jX62HpM/s1600/Bolero+Snort+Blackhorn.JPG",
        "address": "725 New Jersey 15, Jefferson, NJ 07849"
    },
    20: {
        "name": "Shock Top Belgian White",
        "imageSource": "http://beersandears.net/wp-content/uploads/2011/07/IMG_1274.jpg",
        "address": "45-01 23rd Avenue, Queens, NY 11105"
    },
}

//document.getElementById('elementId').style.display = 'none';

var beerNameYay;
var addressYay = "";
var latitude;
var longitude;


//For loop creating all the carousel items for each beer (object) we have
for (var i = 1; i < 21; i++) {
    var out = $("<div id=aaaa class=carousel-item>")
        .append("<img class=d-block img-fluid src=" + beerObject[i].imageSource + ">")
        .append()
        .attr("name", beerObject[i].name)
        .attr("address", beerObject[i].address)

    var dv = $("<div class=carousel-caption d-none d-md-block" + ">")
        .append("<h3 class=beer-name>" + beerObject[i].name)
    //.append("<h3>" + beerObject[i].address)

    out.append(dv)
    $(".carousel-inner").append(out)
}
$(".jumbotron").hide();
$(".info-button").on("click", function() {

    beerNameYay = $(".carousel-item.active").attr("name");
    console.log(beerNameYay);
    $(".jumbotron").show();

    ajaxCallFunction();

});

$("#map").hide();


$("#btn-bottom-bitch").on("click", function() {

    $("#map").show();

    addressYay = $(".carousel-item.active").attr("address");

    console.log("address here " + addressYay);

    ////ADDRESS GOES HERE////
    var addressInput = "'" + addressYay + "'";
    //Replaces spaces in address input with plus's +++++
    addressInput = addressInput.replace(/\s+/g, '+');
    var queryURL2 = "https://maps.googleapis.com/maps/api/geocode/json?address=" + addressInput + "&key=AIzaSyDX_6n_Ha1C-wWBt10IeWqb2W7dwndFLKM";
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).done(function(response) {
        latitude = response.results[0].geometry.location.lat;
        longitude = response.results[0].geometry.location.lng;
        initMap();
    });


});

$("#carousel-next-arrow").on("click", function() {
    $("#map").hide();
    $(".jumbotron").hide();

});

//varible for firebase.database 
var database = firebase.database();

// Initializing our beer count at 0
var beerCounter = 0;
var beersLiked = [];
//beerDisplay creates the ordered list in the likes modal
var beerDisplay = $("#liked-beers").html("<ol id=liked-beer-display>");
//Function that grabs the name attribute of the beer that is currently displayed in the carousel and appends it to the ordered list as a list item
$(".btn.btn-primary.like-button").on("click", function() {


    //creates the jquery element for lsit item
    var likedModal = $("<li>")
    //grabs the name attribute of the liked beer
    beerLiked = $(".carousel-item.active").attr("name");
    console.log(beerLiked);
    //creates the span tag where the name will be appended to
    var likedBeerDisplay = $("<span>")
        .append(beerLiked)
    likedModal.append(likedBeerDisplay);
    //finally appends the list item to beerDisplay (the ordered list of liked beers)
    $("#liked-beer-display").append(likedModal);
    //adding the current beer liked to the beersLiked array
    beersLiked.push(beerLiked);
    // Add 1 to beerCounter everytime the user pushes like
    beerCounter++;

    // **** Store Click Data to Firebase in a JSON property called clickCount *****
    // **** Since we left .ref() blank, it will save to the root directory
    database.ref().set({
        NumberOfBeers: beerCounter,
        nameOfBeers: beersLiked

    });

});


function ajaxCallFunction() {
    //        var queryURL = "https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beers/?key=16619a67284d1bb6fed7e7415c0158f2";
    // var queryURL = "https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/search?q=" + beerNameYay + "&hasLabels=Y&type=beer&key=16619a67284d1bb6fed7e7415c0158f2";
    // var queryURL = "https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/search?q=stella+artois&hasLabels=Y&type=beer&key=16619a67284d1bb6fed7e7415c0158f2";
    var queryURL = proxy + baseSearchURL + beerNameYay + beerType + apiKey;
    $.getJSON(queryURL,
        function(response) {
            console.log(beerNameYay + "" + "WOOOOOO");
            var beerObjects = response.data[0];
            //console logging json for reference
            console.log(beerObjects);
            // Creating a div to hold the beer
            var beerDiv = $("<div class='beer'>");
            // Storing the name data
            var name = response.data[0].name;
            //checking console
            console.log("Beer Name: " + name);
            var imgUrl = response.data[0].labels.medium;
            //checking console
            console.log(imgUrl);
            // Creating an element to hold the image
            var image = $("<img>").attr("src", imgUrl);
            // Appending the image
            beerDiv.append(image);
            // Creating an element to have the beer name displayed
            var pOne = $("<p>").text("Beer Name: " + name);
            // Displaying the rating
            beerDiv.append(pOne);
            var abv = response.data[0].abv;
            //checking console
            console.log("Beer ABV: " + abv + "%");
            // Creating an element to have the ABV displayed
            var pTwo = $("<p>").text("ABV: " + abv + "%");
            beerDiv.append(pTwo);
            var style = response.data[0].style.name;
            //checking console
            console.log("Beer Style: " + style);
            // Creating an element to have the style displayed
            var pThree = $("<p>").text("Beer Style: " + style);
            // Displaying the rating
            beerDiv.append(pThree);
            $("#beers-view").html(beerDiv);
        });
}
// $("#btn-bottom-bitch").on("click", function(){
//    ajaxMaps();
// });

var map;


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: new google.maps.LatLng(latitude, longitude),
        styles: [
            { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ color: '#263c3f' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#6b9a76' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#38414e' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#212a37' }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#9ca5b3' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#746855' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#1f2835' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#f3d19c' }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ color: '#2f3948' }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#17263c' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#515c6d' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#17263c' }]
            }
        ]
    });
    var icons = {
        info: {
            icon: 'https://visualpharm.com/assets/768/Beer-595b40b65ba036ed117d3c38.svg'
        }
    };
var features = [{
        position: new google.maps.LatLng(latitude, longitude),
        type: 'info'
    }];
    var marker;
    var strr = " View on Google Maps";
    var url = addressYay + strr.link('https://www.google.com/maps?q=' + addressYay);
    var infowindow = new google.maps.InfoWindow({
        content: url
        //type: 'info'
    });
    features.forEach(function(feature) {
        marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map,
            draggable: false,
            animation: google.maps.Animation.DROP,
            title: "Beer is Here!"
        });
        marker.addListener('click', toggleBounce);
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
        //google.maps.event.addDomListener(window, 'load', initialize);
    });
    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
}
//=========Profile Section==================================================================


function toggleSignIn() {
    if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
    } else {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (email.length < 4) {
            alert('Please enter an email address.');
            return;
        }
        if (password.length < 4) {
            alert('Please enter a password.');
            return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
            document.getElementById('quickstart-sign-in').disabled = false;

            // [END_EXCLUDE]
        });
        // [END authwithemail]
    }
    document.getElementById('quickstart-sign-in').disabled = true;
}
/**
 * Handles the sign up button press.
 */
function handleSignUp() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
    }
    // Sign in with email and pass.
    // [START createwithemail]
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
    });
    // [END createwithemail]
}
/**
 * Sends an email verification to the user.
 */
function sendEmailVerification() {
    // [START sendemailverification]
    firebase.auth().currentUser.sendEmailVerification().then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Email Verification Sent!');
        // [END_EXCLUDE]
    });
    // [END sendemailverification]
}

function sendPasswordReset() {
    var email = document.getElementById('email').value;
    // [START sendpasswordemail]
    firebase.auth().sendPasswordResetEmail(email).then(function() {
        // Password Reset Email Sent!
        // [START_EXCLUDE]
        alert('Password Reset Email Sent!');
        // [END_EXCLUDE]
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/invalid-email') {
            alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
            alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
    });
    // [END sendpasswordemail];
}
/**
 * initApp handles setting up UI event listeners and registering Firebase auth listeners:
 *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
 *    out, and that is where we update the UI.
 */
function initApp() {
    // Listening for auth state changes.
    // [START authstatelistener]
    firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
        document.getElementById('quickstart-verify-email').disabled = true;
        // [END_EXCLUDE]
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            // [START_EXCLUDE]

            document.getElementById('quickstart-sign-in').textContent = 'Sign out';

            if (!emailVerified) {
                document.getElementById('quickstart-verify-email').disabled = false;
            }
            // [END_EXCLUDE]
        } else {
            // User is signed out.
            // [START_EXCLUDE]

            document.getElementById('quickstart-sign-in').textContent = 'Sign in';

            // [END_EXCLUDE]
        }
        // [START_EXCLUDE silent]
        document.getElementById('quickstart-sign-in').disabled = false;
        // [END_EXCLUDE]
    });
    // [END authstatelistener]
    document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
    document.getElementById('quickstart-sign-up').addEventListener('click', handleSignUp, false);
    document.getElementById('quickstart-verify-email').addEventListener('click', sendEmailVerification, false);
    document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);

    //Clears out the fields email/password when you click sign-in or sign-up
    $("#quickstart-sign-in").on("click", function() {
        $('#quickstart-sign-in').val('');
        $('#email').val('');
        $('#password').val('');

    })
    $("#quickstart-sign-up").on("click", function() {
        $('#email').val('');
        $('#password').val('');
        $("liked-beers").empty();
    })
}
window.onload = function() {
    initApp();
};
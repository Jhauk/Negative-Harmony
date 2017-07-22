var selectedScaleResult;


//Scale page button flags
var scaleFlag = "On";
var chordFlag = "Off";
var seventhsFlag = "Off";
var ninthsFlag = "Off";

//This powers the scale selector on the main page
function loadScale() {
    
    var scaleLetter;
    var optionNumber;
    
    var scaleType;
    var majMin;
    
 
    var scaleUrl
    
    
    //Gets the value from the checked scale letter
    function letterFunction() {
        scaleLetter = document.getElementById( optionNumber ).value;
    }
    
    
    
    //Gets the value from the checked scale type
    function typeFunction() {
        scaleType = document.getElementById( majMin ).value;
    }

    
    
    //Collates  scaleLetter and scaleType
    function selectedScaleFunc() {
        var selectedScale = scaleLetter + scaleType;
        selectedScaleResult = selectedScale
    }    
    
       
    
    //Finds which scale letter the user has selected, updates optionNumber and runs letterFunction
    function letterFinder() {
            for (var i = 1; i < 13; i += 1) {
                if ( document.getElementById( 'option' + i ).checked ) {
                    optionNumber = "option" + i;
                    letterFunction();
                    break
                    }
             }
    }
    
   
    
    //Finds which scale type is checked, updates majMin and runs typeFunction
    function typefinder() {
        if ( document.getElementById( 'major' ).checked ) {
            majMin = "major";
            typeFunction();
        } else {
            majMin = "minor";
            typeFunction();
        }
    }
    
    function getScaleUrl() {
        var pagesFolder = "";
        if (majMin === "major") {
            pagesFolder = "Major";
        } else {
            pagesFolder = "Minor";
        }
        scaleURL = ( "pages/" + pagesFolder + "/" + selectedScaleResult + ".html" );
    }
    
    
    
    //Calling all the functions
    letterFinder();
    typefinder();
    selectedScaleFunc();
    getScaleUrl();
    
    window.location = scaleURL ;  
    
    return false;
};



//This powers "Scales" button on the scale pages
function showScales( keyObject, negativeKeyObject ) {
    var counter = 0;
    
    //Exits the function if it's already "active"   
    if ( scaleFlag === "On" ) {
        return;
    }
    
    //Setting flags
    scaleFlag = "On";
    chordFlag = "Off";
    seventhsFlag = "Off";
    ninthsFlag = "Off";

    $("td").fadeOut(1).innerHTML;

    //Sets the Original Column
    for (var scaleDegree in keyObject) {
        document.getElementById("original" + counter).innerHTML = keyObject[scaleDegree];
        counter += 1;

    };
    
    var counter = 0

    
    //Sets the Negative Column
    for (var scaleDegree in negativeKeyObject) {
        document.getElementById("negative" + counter).innerHTML = negativeKeyObject[scaleDegree];
        counter += 1;
    };
    
    $("td").fadeIn().innerHTML;
};   



//This powers "Chords" button on the scale pages
function showChords( originalTriads, negativeTriads) {  
    var counter = 0;
    

    //Exits the function if it's already "active"   
    if ( chordFlag === "On" ) {
        return;
    }
    
    //Setting flags
    scaleFlag = "Off";
    chordFlag = "On";
    seventhsFlag = "Off";
    ninthsFlag = "Off";
    
    $("td").fadeOut(1).innerHTML;
    
    //Fills in the original column
    for (var scaleDegree in originalTriads) {
        document.getElementById("original" + counter).innerHTML = "<b>" + originalTriads[scaleDegree][0] + "</b><hr class='tableHr'>" + originalTriads[scaleDegree][1];
        counter += 1;
        console.log(counter);
    };    
    
    var counter = 0;
    
    //Fills in the original column
    for (var scaleDegree in negativeTriads) {
        document.getElementById("negative" + counter).innerHTML = "<b>" + negativeTriads[scaleDegree][0] + "</b><hr class='tableHr'>" + negativeTriads[scaleDegree][1];
        counter += 1;
        console.log(counter);
    };    
    
    $("td").fadeIn().innerHTML;
};



//This powers "Sevenths" button on the scale pages
function showSevenths( orignalSevenths, negativeSevenths ) {  
    var counter = 0;
    
    //Exits the function if it's already "active"   
    if ( seventhsFlag === "On" ) {
        return;
    }
    
    //Setting flags
    scaleFlag = "Off";
    chordFlag = "Off";
    seventhsFlag = "On";
    ninthsFlag = "Off";
    
    $("td").fadeOut(1).innerHTML;
    
    //Fills in the original column
    for (var scaleDegree in orignalSevenths) {
        document.getElementById("original" + counter).innerHTML = "<b>" + orignalSevenths[scaleDegree][0] + "</b><hr class='tableHr'>" + orignalSevenths[scaleDegree][1];
        counter += 1;
        console.log(counter);
    };    
    
    var counter = 0;
    
    //Fills in the original column
    for (var scaleDegree in negativeSevenths) {
        document.getElementById("negative" + counter).innerHTML = "<b>" + negativeSevenths[scaleDegree][0] + "</b><hr class='tableHr'>" + negativeSevenths[scaleDegree][1];
        counter += 1;
        console.log(counter);
    };    
    
    $("td").fadeIn().innerHTML;
}; 

    





    

    
    
        
        

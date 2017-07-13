var selectedScaleResult;


// All of the Key Information

//C major

var cMajor = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];
var cMajorTriads = ['Cmaj<br>C - E - G', 'Dmin<br>D - F - A', 'E - G - B', 'F - A - C', 'G - B - D', 'A - C - E', 'B - D - F', 'C - E - G'];
var cMajorSevenths = [];
var cMajorNinths = [];

var cMajorNegative = ['G', 'F', 'Eb', 'D', 'C', 'Bb', 'Ab', 'G'];
var cMajorNegativeTriads = ['Cmin<br>C - Eb - G', 'Bbmaj<br>Bb - D - F', 'Eb', 'D', 'C', 'Bb', 'Ab', 'G'];
var cMajorNegativeSevenths = [];
var cMajorNegativeNinths = [];



//C# major


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
        scaleURL = ( "pages/" + selectedScaleResult + ".html" );
    }
    
    
    
    //Calling all the functions
    letterFinder();
    typefinder();
    selectedScaleFunc();
    getScaleUrl();
    
    window.location = scaleURL ;  
    
    return false;
}



//This powers "Show Triads" button on the scale pages
function dynamicTable( keyArray, negativeKeyArray ) {
    
    
    //Exits the function if it's already "active"   
    if ( document.getElementById("original0").innerHTML === "Cmaj<br>C - E - G" ) {
        return;
    }
    
    $("td").fadeOut(1).innerHTML;
    
    //Fills in the original column
    for ( var i = 0; i < keyArray.length; i += 1) {
        document.getElementById("original" + i).innerHTML = keyArray[i];
    }
    
    //Fills in the negative column
    for ( var i = 0; i < negativeKeyArray.length; i += 1) {
            document.getElementById("negative" + i).innerHTML = negativeKeyArray[i];
        }
    
    $("td").fadeIn().innerHTML;
    }

    


//This powers "Show Scales" button on the scale pages
function refreshTable( keyArray, negativeKeyArray ) {
    
    
    //Exits the function if it's already "active"   
    if ( document.getElementById("original0").innerHTML === "C" ) {
        return;
    }
    
    $("td").fadeOut(1).innerHTML;

    //Resets Original column
    for ( var i = 0; i < keyArray.length; i += 1) {
       
        document.getElementById("original" + i).innerHTML = keyArray[i];
        

    }
    
    //Resets Negative column
    for ( var i = 0; i < negativeKeyArray.length; i += 1) {   
        document.getElementById("negative" + i).innerHTML = negativeKeyArray[i];
    }
    
    $("td").fadeIn().innerHTML;
}   


    

    

    
    
        
        

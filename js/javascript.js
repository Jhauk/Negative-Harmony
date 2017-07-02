function loadScale() {
    
    var scaleLetter;
    var optionNumber;
    
    var scaleType;
    var majMin;
    
    var selectedScaleResult;
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
        var selectedScale = scaleLetter + scaleType;3
        selectedScaleResult = selectedScale
    }    
    
    
    
    
    //Finds which scale letter is checked, updates optionNumber and runs letterFunction
    function letterFinder() {
        if ( document.getElementById( 'option1' ).checked ) {
            optionNumber = "option1";
            letterFunction();
        } else if ( document.getElementById( 'option2' ).checked ) {
            optionNumber = "option2";
            letterFunction();          
        } else if ( document.getElementById( 'option3' ).checked ) {
            optionNumber = "option3";
            letterFunction();          
        } else if ( document.getElementById( 'option4' ).checked ) {
            optionNumber = "option4";
            letterFunction(); 
           } else if ( document.getElementById( 'option5' ).checked ) {
            optionNumber = "option5";
            letterFunction();          
        } else if ( document.getElementById( 'option6' ).checked ) {
            optionNumber = "option6";
            letterFunction();          
        } else if ( document.getElementById( 'option7' ).checked ) {
            optionNumber = "option7";
            letterFunction();
        } else if ( document.getElementById( 'option8' ).checked ) {
            optionNumber = "option8";
            letterFunction();          
        } else if ( document.getElementById( 'option9' ).checked ) {
            optionNumber = "option9";
            letterFunction();          
        } else if ( document.getElementById( 'option10' ).checked ) {
            optionNumber = "option10";
            letterFunction(); 
        } else if ( document.getElementById( 'option11' ).checked ) {
            optionNumber = "option11";
            letterFunction();          
        } else if ( document.getElementById( 'option12' ).checked ) {
            optionNumber = "option12";
            letterFunction();          
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
    
    
    
    //Calling all the functions to make them worked
    letterFinder()
    typefinder()
    selectedScaleFunc();
    getScaleUrl()
    
    window.location = scaleURL ;  
    
    return false;
    }
    

    
    
    
    
        
        

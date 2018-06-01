var Bounce = function () {

    /**
     * Default settings for the module
     * @type {{selector: string, gravity: number, info: string, updateSpeed: number}}
     */
    var defaultSettings = {
        selector: '.bounce',
        gravity: 9.81,
        info: "geen",
        updateSpeed: 1 //In milliseconds
        
    };

    /**
     * The bouncing element
     * @type {HTMLElement}
     */
    var element;
    
    /**
     * The info option
     * @type {string}
     */
    var info;
    
    /**
     * The vertical speed
     * @type {number}
     */
    var speedY;

    /**
     * The timer that updates the model and the screen
     * @type {object}
     */
    var timer;

    /**
     * The x and y position of the element
     * @type {{x: number, y: number}}
     */
    var position = {
        x: 0,
        y: 0
    };

    /**
     * Updates the x and y position to the bouncing element
     */
    var updateElement = function() {
        element.style.marginLeft = position.x + 'px';
        element.style.marginTop = position.y + 'px';
        
        
    };

    /**
     * Moves changes the x and the y
     * @param {number} xChange
     * @param {number} yChange
     */
    var move = function(xChange, yChange) {

        position.x += xChange;
        position.y += yChange;
        
        // Round the number of the position
        var positie = Math.round(element.parentElement.clientHeight - position.y - element.clientHeight);
        //If the element reaches the bottom of the parent element reverse the speed
        if(element.parentElement.clientHeight <= position.y + element.clientHeight) {
            speedY = -speedY;
        }
        
        // if someone wants the info
        if(info !== "geen")
            {
                
            
        element.innerHTML = "Hoogte: " + positie +" <br> " +"Breedte: " + position.x;
        element.style.color = Kleurbekennen(positie , 650 );
            }
        
        updateElement();
    };
    
    //only when somebody wants info
    function Kleurbekennen(start, end) {
        
        //Calculate the percentage
        var a = start / end;
        var b = a * 100;
       
            //Red to green  
            if(info == "kleur")
            {   
                return 'hsl('+b+', 100%, 50%)'; 
                // Return a CSS HSL string
            }
        
            //Black to white  
            if(info == "zwart")
            {   
                return 'hsl(50, 0%, '+b+'%)'; 
                // Return a CSS HSL string
            }
  
        
  
    };

    /**
     * Update the variables to the new reality
     */
    var update = function() {
        move(0, speedY);
        speedY += defaultSettings.gravity * (defaultSettings.updateSpeed/1000);
        
    };

    var mergeObjects  = function(object1, object2) {
        for (var attrname in object1) {
            if(object2.hasOwnProperty(attrname)) {
                object1[attrname] = object2[attrname];
            }
        }
    };

    /**
     * Initializes the module
     * @param {string} [selector] Css selector that targets the element that needs to bounce
     * @param {object} [settings] Object that contain overrides for the default settings
     */
    var init = function(selector, settings) {
        mergeObjects(defaultSettings, settings || {});
        selector = selector || defaultSettings.selector;
        element = document.querySelector(selector);
        speedY = 0;
        info = defaultSettings.info;
        timer = setInterval(update, defaultSettings.updateSpeed);
    };

    //Return the functions that should be accessible from the outside. The rest is only accessible from within the object
    return {
        init: init
    };
};
var Bounce = function () {

    /**
     * Default settings for the module
     * @type {{selector: string, gravity: number, moveX: number, color: string}}
     */
    var defaultSettings = {
        selector: '.bounce',
        gravity: 9.81,
		moveX: 0,
		color: 'rgb(255, 255, 255)',
        updateSpeed: 1 //In milliseconds
    };

    /**
     * The bouncing element
     * @type {HTMLElement}
     */
    var element;

    /**
     * The vertical speed
     * @type {number}
     */
    var speedY;
	
	/**
	 * The horizontal speed
	 * @type {number}
	 */
	var speedX;
	
	/**
	 * The background color
	 * @type {string}
	 */
	var newColor;

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

        //If the element reaches the bottom of the parent element reverse the speed
        if(element.parentElement.clientHeight <= position.y + element.clientHeight) {
            speedY = -speedY;
        }
		
		//If the element reaches the side of the parent element reverse the speed
        if(element.parentElement.clientWidth <= position.x + element.clientWidth) {
            speedX = -speedX;
        }

        updateElement();
    };
	
	/**
	 * Changes the background color of the bounce element
	 * @param {string} newColor
	 * note: the only accepted input is in this format: 'rgb(#, #, #);"
	 */
	var changeColor = function(_newColor) {
		
		//check if the input is correct
		if(checkRgb(_newColor) == true){
			element.style.backgroundColor = _newColor;
		} else {
			console.log('De gekozen kleurwaarde voor element ' + element.className + ' is incorrect of niet bestaand');
		}
	}
	
	/**
	 * Checks if the color input is correct according to the css RGB color format
	 * @param {string} rgb
	 */
	function checkRgb (rgb) {
		
		var rxValidRgb = /([R][G][B][A]?[(]\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])(\s*,\s*((0\.[0-9]{1})|(1\.0)|(1)))?[)])/i
		
		if (rxValidRgb.test(rgb)) {
			return true
		}
	}

    /**
     * Update the variables to the new reality
     */
    var update = function() {
        move(speedX, speedY);
        speedY += defaultSettings.gravity * (defaultSettings.updateSpeed/1000);
		speedX += defaultSettings.moveX * (defaultSettings.updateSpeed/1000);
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
		speedX = 0;
		newColor = defaultSettings.color;
		changeColor(newColor);
        timer = setInterval(update, defaultSettings.updateSpeed);
    };

    //Return the functions that should be accessible from the outside. The rest is only accessible from within the object
    return {
        init: init
    };
};

//BUDGET CONTROLLER
var budgetController = (function() {
   
}) ();


// UI CONTROLLER
var uIController = (function() {

    //variable when we store class names 
    var domStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    //thanks to return propreties, function and object from this controller can be available in other controllers
    return {
        getInput: function() {

            return {
                type: document.querySelector(domStrings.inputType).value, // will be inc or exp
                description: document.querySelector(domStrings.inputDescription).value,
                value: document.querySelector(domStrings.inputValue).value
            }
        },

        getDomStrings: function() {

            return domStrings;
        }
    }
}) ();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, uICtrl) { //Model used to connect budgetController and UiController

    var setupEventListeners = function() {

        var DOM = uICtrl.getDomStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        
            document.addEventListener('keypress', function(e) {
        
                if(e.keyCode === 13 || e.which === 13){
                    ctrlAddItem();
                };
        
            });
    };

    //What's will happen when user press the button or click enter?
    var ctrlAddItem = function() {

        var input = uICtrl.getInput();

        // 1. Pobrać dane z pól po lewej od przycisku
        // 2. Przekazac dane do budgetController
        // 3. Przekazac dane do UiController
        // 4. Obliczyc budżet 
        // 5. Wyświetlić budżet
    };

    return {
        init: function() {
            console.log('App has started');
            setupEventListeners();
        }
    }

}) (budgetController, uIController);

controller.init();
// Constructor Function 
function Validator (options) {
    // Get element of form need to be validated
    var formElement = document.querySelector(options.form);
    var selectorRules = {};
    
    function validate(inputElement, rule, errorSelector) {
        var errorElement =  inputElement.parentElement.querySelector(errorSelector);
        var rulesSelect = selectorRules[rule.selector];

        for (var i=0; i < rulesSelect.length; i++) {
            var errorMessage = rulesSelect[i](inputElement.value)
            if (errorMessage) {
                break;
            }   
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
        
    }

    if (formElement) {
        options.rules.forEach(function (rule) {
            // Save rule for each input element
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)
            } else {
                selectorRules[rule.selector] = [rule.test]
            }
            ;

            var inputElement = document.querySelector(rule.selector);
            var errorSelector = options.errorSelector;
            
            if (inputElement) {
                // Hanle blur events
                inputElement.onblur = function () {
                    validate(inputElement, rule, errorSelector);
                };
                // Handle input events 
                inputElement.oninput = function () {
                    var errorElement =  inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        })
        console.log(selectorRules)
    } 
}

Validator.isRequired = function(selector) {
    return {
        selector: selector, 
        test: function(inputValue) {
            return inputValue.trim() ? undefined : "Vui lòng nhập trường này"
        }
    };
} 


Validator.isEmail = function(selector) {
    return {
        selector: selector, 
        
        test: function(value) {
           var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
           return regex.test(value) ? undefined : 'This field must be invalid email'
        }
    }
}

Validator.minLength = function(selector, minLength) {
    return {
        selector: selector, 
        
        test: function(value) {
           return value.length >= minLength ? undefined : `This field must be greater than or equal to ${minLength} character`
        }
    }
}

Validator.isConfirmed = function(selector, getConfirmValue, message) {
    return {
        selector: selector, 
        
        test: function(value) {
           return value === getConfirmValue() ? undefined : message || 'Field not matches'
        }
    }
}
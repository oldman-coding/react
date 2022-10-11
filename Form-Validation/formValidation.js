// Constructor Function 
function Validator (options) {
    // Get element of form need to be validated
    var formElement = document.querySelector(options.form);
    var selectorRules = {};

    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement
                
            }
            element = element.parentElement;
        }

    }
    
    
    function validate(inputElement, rule, errorSelector) {
        var errorElement =  getParent(inputElement, options.formGroupSelector).querySelector(errorSelector);
        var rulesSelect = selectorRules[rule.selector];

        for (var i=0; i < rulesSelect.length; i++) {
           
            var errorMessage = rulesSelect[i](inputElement.value)
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
            return false;
        } else {
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
            return true;
        }
        
        
    }

    if (formElement) {
        

        formElement.onsubmit = function (e) {
            e.preventDefault();
            var isFormValid = true;

            options.rules.forEach(function (rule) {
                var inputElement = document.querySelector(rule.selector);
                var errorSelector = options.errorSelector;
                var isValid = validate(inputElement, rule, errorSelector);

                if (!isValid) {
                    isFormValid = false
                }
                
            })
            
            
            if (isFormValid) {
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = document.querySelectorAll('input[name]:not([disabled])');
                    var formValues = Array.from(enableInputs).reduce(function (values, input) { 
                        switch (input.type) {
                            case 'radio': 
                                if (input.matches(':checked')) {
                                    values[input.name] = input.value;                
                                }
                                break;
                            case 'checkbox':
                                if (!input.matches(':checked')) return values;
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);
                                break; 
                            default: 
                                values[input.name] = input.value;                
                        }

                        
                        return values;
                    }, {})

                    options.onSubmit(formValues);
                }
                else {
                    formElement.submit()
                }
            }
           

        }

        options.rules.forEach(function (rule) {
            // Save rule for each input element

            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)
            } else {
                selectorRules[rule.selector] = [rule.test]
            }
            ;

            var inputElements = document.querySelectorAll(rule.selector);
            var errorSelector = options.errorSelector;

            Array.from(inputElements).forEach(function (inputElement) {
                if (inputElement) {
                    // Hanle blur events
                    inputElement.onblur = function () {
                        validate(inputElement, rule, errorSelector);
                    };
                    // Handle input events 
                    inputElement.oninput = function () {
                        var parentElement = getParent(inputElement, options.formGroupSelector);
                        var errorElement =  parentElement.querySelector(options.errorSelector);
                        errorElement.innerText = '';
                        parentElement.classList.remove('invalid');
                    }
                }
            })
            
            
        })
    } 
}

Validator.isRequired = function(selector) {
    return {
        selector: selector, 
        test: function(inputValue) {
            return inputValue ? undefined : "Vui lòng nhập trường này"
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
// Scoping
function scope() {
    var meal = 'lunch';
    
    function localScope(meal) {
        console.log('Local scope started with ' + meal);
        meal = 'dinner';
        console.log('Local scope ended with ' + meal);
    };
    
    function globalScope() {
        console.log('Global scope started with ' + meal);
        meal = 'dinner';
        console.log('Global scope ended with ' + meal);
    };
    
    console.log('At the beginning, meal was ' + meal);
    localScope(meal);
    console.log('After localScope(), meal is ' + meal);
    globalScope(meal);
    console.log('After globalScope(), meal is ' + meal);
};

// Typing/mutability
function types() {
    var number = 5;
    var string = '5';
    console.log(number);
    console.log(string);
    var six = 6;
    console.log(number + six);
    console.log(string + six);
};

// Triple equals
function comparison() {
    var five = 5;
    var fiveString = '5';

    console.log('Double equals says: ' + (five == fiveString));
    console.log('Triple equals says: ' + (five === fiveString));
};
comparison();

const courses = [
    'Javascript', 
    'Php', 
    'Java', 
] 

// courses.map(course => console.log(course)); 

Array.prototype.map2 = function(callback) {
    var output = [];
    for (var i = 0; i < this.length; i++) {
        callback(this[i], i);
        output.push(callback);
    }
    return output;
}


courses.map2((course, index) => console.log(course, index))

// My for each
const numbers = [65, 44, 12, 4];

function myFunction(item, index, arr) {
    // console.log(item, index, arr)
    arr[index] = item * 10;
}

Array.prototype.myForEach = function(callback) {
    // var i = 0;
    for (var index in this ) {
        if (this.hasOwnProperty(index)) 
        {
            callback(this[index], index, this);
            
        }
    }
}

numbers.myForEach(myFunction)
console.log(numbers)


//My filter 
var filterCourses = [
    {
        name: 'javascript', 
        coin: 800, 
        isFinish: true,    
    }, 
    {
        name: 'php', 
        coin: 900, 
        isFinish: true,     
    },
    {
        name: 'Java', 
        coin: 850, 
        isFinish: true,
    },
    {
        name: 'c#', 
        coin: 700, 
        isFinish: false,   
    },
];


Array.prototype.filter2 = function(callback) {
    var output = []
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)) {
                output.push(this[index]);
            }
        }
    }
    return output;

}

var arr = filterCourses.filter2(course => course.coin >800)
console.log(arr);

// My some Function


Array.prototype.some2 = function(callback) {
    var result = false;
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)) {
                return result = true;
            }

        }
        
    }
    return result;
}

Array.prototype.every2 = function (callback) {
    for (var index in this) { 
        if (this.hasOwnProperty(index)) {
            if (!callback(this[index], index, this)) {
                return false;
            }
        }
    }
    return true;
}

var resultSome = filterCourses.every2(course => course.isFinish)
console.log(resultSome);




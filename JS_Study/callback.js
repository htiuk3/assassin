


Array.prototype.myMap = function(callback) {
    var output = [], arrayLength = this.length;
    for (var i = 0; i < arrayLength; ++i) {
        var result = callback(this[i]);
        output.push(result);
    }
    return output;
}

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];

var htmls = courses.myMap(function(course) {
    return `<h2>${course}</h2>`;
});
console.log(htmls);
Function.prototype.method = function (name,func) {
    if(!this.prototype[name]) {
        this.prototype[name] = func;
        return this;
    }
}
    
Number.method('add', function(num2) {
    return this + num2;
});
Number.method('subtract', function(num2) {
    return this - num2;
});
 var num1 = 20;
 num1.add(10).add(10).add(10).subtract(5);


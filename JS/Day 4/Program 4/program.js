Function.prototype.method = function (name,func) {
    if(!this.prototype[name]) {
        this.prototype[name] = func;
        return this;
    }
}
    
Number.method('int', function() {
    return parseInt(this);
});

console.log((5.00).int());
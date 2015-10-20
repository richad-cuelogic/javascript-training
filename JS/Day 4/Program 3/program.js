Function.prototype.method = function (name,func) {
    if(!this.prototype[name]) {
        this.prototype[name] = func;
        return this;
    }
}
    
Number.method('float', function() {
    return this.toFixed(2);
});

console.log((5).float());
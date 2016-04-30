'use strict'
////// How to use Handlebars ternary helper?
    ////// https://www.bing.com/search?q=handlebarsjs+ternary&PC=U316&FORM=CHROMN
// limit an array to a maximum of elements (from the start)
// Thanks to http://stackoverflow.com/questions/10377700/limit-results-of-each-in-handlebars-js
export default function(ary, max, options) {
    if(!ary || ary.length == 0)
        return options.inverse(this);

    var result = [ ];
    for(var i = 0; i < max && i < ary.length; ++i)
        result.push(options.fn(ary[i]));
    return result.join('');
}

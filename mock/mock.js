var list = require('./list.json');
var listMore = require('./list-more.json');
var indexList = require('./indexList.json');
module.exports = function() {
    return {
        "list": list,
		"indexList":indexList,
		"more":listMore
    }
}

// restful

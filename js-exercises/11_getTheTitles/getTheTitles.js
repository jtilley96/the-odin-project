const getTheTitles = function(books) {
    result = [];
    function getTitle(book) {
        result.push(book.title);
    }
    books.forEach(getTitle);
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;

const getTheTitles = function(books) {
    const titles = [];
    for (i = 0; i < books.length; i++) {
        const count = titles.push(books[i].title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;

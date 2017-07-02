(function() {
    const model = [

        {
            quote: 'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.',
            author: 'Bernard M. Baruch'
        },
        {
            quote: 'Be yourself; everyone else is already taken.',
            author:'Oscar Wild'
        },
        {
            quote: 'Two things are infinite: the universe and human stupidity, and I\'m not sure about the universe.',
            author: 'Albert Einstein'
        },
         {
            quote: 'A room without books is like a body without a soul.',
            author: 'Marcus Tullius Cicero'
        },
        {
            quote: 'Be the change that you wish to see in the world.',
            author:'Mahatma Gandhi'
        },
        {
            quote: 'Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .',
            author: 'C.S.Lewis'
        },
         {
            quote: 'No one can make you feel inferior without your consent.',
            author: 'Eleanor Roosevelt'
        },
        {
            quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
            author:'Mahatma Gandhi'
        },
        {
            quote: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
            author: 'Ralph Waldo Emerson'
        },
         {
            quote: 'We accept the love we think we deserve.',
            author: 'Stephen Chbosky'
        },
        {
            quote: 'Twenty years from now you will be more disappointed by the things that you didn\'t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.',
            author:'H. Jackson Brown Jr.'
        },
        {
            quote: 'It is better to be hated for what you are than to be loved for what you are not.',
            author: 'André Gide'
        },
         {
            quote: 'Good friends, good books, and a sleepy conscience: this is the ideal life.',
            author: 'Mark Twain'
        },
        {
            quote: 'I have not failed. I\'ve just found 10,000 ways that won\'t work.',
            author:'Thomas A. Edison'
        },
        {
            quote: 'It is never too late to be what you might have been.',
            author: 'George Eliot'
        }
    ];


    const view = {
        init: function() {
            const quotes = document.querySelector('#quotes');
            const next = document.querySelector('#next');
            const tweet = document.querySelector('#tweet');
            view.render(0);
            const quote = quotes.querySelector('#quote');
            const author = quotes.querySelector('#author');
            tweet.addEventListener('click', function(){controller.tweet(tweet)});
            next.addEventListener('click', function(){controller.next()});          
        },

        render: function(i) {
            const data = controller.getQuote(i);
            quotes.innerHTML = `
                <q id="quote">${data.quote}</q>
                <p id="author">${data.author}</p>
            `;
        },
    }

    const controller = {
        init: function() {
            view.init();
    },
        getQuote: function (i) {
            return {
                quote: model[i].quote,
                author: model[i].author,
            }
        },
        next: function() {
            const random = Math.floor(Math.random() * model.length);
            const quotes = this.getQuote(random);
            view.render(random);
        },
        currentQuote: function () {
            return  {
                quote: quote.innerHTML,
                author: author.innerHTML
            }
        },
        tweet: function(el) {
            const clicked = controller.currentQuote();
            el.setAttribute('href', `https://twitter.com/share?text="${clicked.quote}" ${clicked.author}`);
        }
    }
    controller.init();
}());
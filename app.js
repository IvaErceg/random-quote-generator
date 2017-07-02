(function() {
    const model = [

        {
            quote: 'bla, bla',
            author: 'John Doe'
        },
        {
            quote: 'Smart stuff',
            author:'Jane Doe'
        },
        {
            quote: 'I said this thing!',
            author: 'unknown'
        }
    ];


    const view = {
        init: function() {
            const quotes = document.querySelector('#quotes');
            const next = document.querySelector('#next');
            const tweet = document.querySelector('#tweet');
            view.render(0);
            tweet.addEventListener('click', function(){controller.tweet(tweet)});
            next.addEventListener('click', function(){controller.next()});          
        },

        render: function(i) {
            const data = controller.getQuote(i);
            quotes.innerHTML = `
                <q>${data.quote}</q>
                <p id="author">${data.author}</p>
            `
        }
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
            random = Math.floor(Math.random() * model.length);
            const quotes = this.getQuote(random);
            view.render(random);
        },

        tweet: function(el) {
            //const clicked = this.getQuote();
            //el.setAttribute('href', `https://twitter.com/share?text=${clicked.quote} by ${clicked.author}`);
        }
    }
    controller.init();
}());
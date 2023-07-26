const quotes = [
    { text: "My mama always said life was like a box of chocolates. You never know what you're gonna get.", author: "Forrest Gump"},
    { text: "I'm, gonna make him an offer he can't refuse.", author: "The Godfather"},
    { text: "Toto, I've got a feeling we're not in Kansas anymore", author: "The Wizard of Oz"},
    { text: "May the Force be with you", author: "Star Wars"},
    { text: "Show me the money!", author: "Jerry Maguire"},
    // Add more quotes here
  ];
  
  function getQuote() {
    const quoteContainer = document.getElementById("quoteContainer");
    const quoteTextElement = document.getElementById("quoteText");
    const quoteAuthorElement = document.getElementById("quoteAuthor");
  
    // Generate a random index to select a quote from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
  
    // Update the HTML content with the random quote
    quoteTextElement.textContent = `"${randomQuote.text}"`;
    quoteAuthorElement.textContent = `— ${randomQuote.author}`;
  
    // Show the quote container
    quoteContainer.style.display = "block";
  }
  const quotes2 = [
    { text: "There is some good in this world, and it’s worth fighting for.", author: "The Two Towers" },
    { text: "Beware; for I am fearless, and therefore powerful.", author: "Frankenstein" },
    { text: "I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It’s when you know you’re licked before you begin but you begin anyway and you see it through no matter what. You rarely win, but sometimes you do.", author: "To Kill a Mockingbird" },
    { text: "This above all: To thine own self be true, And it must follow, as the night the day, Thou canst not then be false to any man.", author: "Hamlet" },
    { text: "‘Why did you do all this for me?’ he asked. ‘I don’t deserve it. I’ve never done anything for you.’ ‘You have been my friend,’ replied Charlotte. ‘That in itself is a tremendous thing.’", author: "Charlotte's Web" },

  ];
  
  function getQuote2() {
    const quoteContainer = document.getElementById("quoteContainer");
    const quoteTextElement = document.getElementById("quoteText");
    const quoteAuthorElement = document.getElementById("quoteAuthor");
  
    // Generate a random index to select a quote from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes2.length);
    const randomQuote = quotes2[randomIndex];
  
    // Update the HTML content with the random quote
    quoteTextElement.textContent = `"${randomQuote.text}"`;
    quoteAuthorElement.textContent = `— ${randomQuote.author}`;
  
    // Show the quote container
    quoteContainer.style.display = "block";
  }
  const quotes3 = [
    { text: "Change your thoughts, and you change your world.", author: "Norman Vincent Peale" },
    { text: "All our dreams can come true if we have the courage to pursue them.", author: "Walt Disney" },
    { text: "If opportunity doesn't knock, build a door", author: "Milton Berle" },
    { text: "Aim for the moon. If you miss, you may hit a star.", author: "W. Clement Stone" },
    { text: "Success is liking yourself, liking what you do, and liking how you do it.", author: "Maya Angelou" },
    // Add more quotes here
  ];
  
  function getQuote3() {
    const quoteContainer = document.getElementById("quoteContainer");
    const quoteTextElement = document.getElementById("quoteText");
    const quoteAuthorElement = document.getElementById("quoteAuthor");
  
    // Generate a random index to select a quote from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes3.length);
    const randomQuote = quotes3[randomIndex];
  
    // Update the HTML content with the random quote
    quoteTextElement.textContent = `"${randomQuote.text}"`;
    quoteAuthorElement.textContent = `— ${randomQuote.author}`;
  
    // Show the quote container
    quoteContainer.style.display = "block";
  }
# punch-interview
Node.js/Express.js based Interview test



## Instruction:
Use Node version 6.9.1 to run these commands.

`npm install`

`npm run serv`

Your app will be served at http://localhost:8888

Basically you have to write two solutions for this problem. One using callbacks and second using promises.

```
  // TODO: use callbacks/promises to fetch the titles of these web addresses. Parse them in HTML and return bACK HTML
  // TODO: Basically you will be fetching home page of each web address, extracting the title tag and display it along with
  // TODO: original address e.g
  // TODO: URL: http://localhost:8888/fetch/the/titles?address=google.com&address=http://amazon.com&address=http//www.youtube.com
  // TODO: Note: this is just example where only three addresses are given, it can be any number.
  // TODO: Input address: ['google.com', 'http://amazon.com', 'http://www.youtube.com']
  // TODO: Output html:

  /**
   * <ul>
   *  <li>url: google.com title: <h2>Google</h2></li>
   *  <li>url: http://amazon.com title: <h2>Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more</h2></li>
   *  <li>url: http://www.youtube.com title: <h2>YouTube</h2></li>
   * </ul>
   */
```

Open these two files to find where you will be writing most of your code. Although you are encouraged to change/add files, and improve
architecture of application. Its always good idea to build solutions around scalable/modular architecture.

./server/titles/callbacks/titles.service.js

./server/titles/promises/titles.service.js

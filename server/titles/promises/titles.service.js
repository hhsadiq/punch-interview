/*
 * Retrieve the titles from addresses using promises
 */
function retrieve(addresses) {
  console.log(addresses); // Horraaayy...you got the list of addresses from query parameters
  
  // TODO: use promises to fetch the titles of these web addresses. Parse them in html and ul/li and return bACK HTML
  // TODO: Basically you will be fetching home page of each web address, extract the title tag and display it along with
  // TODO: original address e.g
  // TODO: Input address : ['google.com', 'http://amazon.com', 'http://www.youtube.com']
  // TODO: Output html:

  /**
   * <ul>
   *  <li>url: google.com title: <h2>Google</h2></li>
   *  <li>url: http://amazon.com title: <h2>Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more</h2></li>
   *  <li>url: http://www.youtube.com title: <h2>YouTube</h2></li>
   * </ul>
   */
}

/* ***************************** Module Exports ******************************* */
exports.retrieve = retrieve;

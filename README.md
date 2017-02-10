# punch-interview
Node.js/Express.js based Interview test



## Instructions:
Use Node version 6.9.1 to run these commands.

`npm install`

`npm run serv`

Your app will be served at http://localhost:8888

Basically you have to write two solutions for this problem. One using callbacks and second using promises.

```
  Use callbacks/promises to fetch the titles of web addresses which are provided in query parameters. Parse them in HTML and return bACK HTML
  Basically you will be fetching home page of each web address, extracting the title tag and displaying it along with
  original address e.g
  URL: http://localhost:8888/fetch/the/titles?address=google.com&address=http://amazon.com&address=http://www.youtube.com
  (Note: this is just example where only three addresses are given, it can be any number)
  You will get input address in array from query params in following two files 
  ./server/titles/callbacks/titles.service.js  
  ./server/titles/promises/titles.service.js
  These services should return following HTML (example) to controllers. Your controllers will then send it back to browser for rendering:

   <ul>
    <li>google.com - <h2>Google</h2></li>
    <li>http://amazon.com - <h2>Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more</h2></li>
    <li>http://www.youtube.com - <h2>YouTube</h2></li>
   </ul>
   
   Please make sure to add error handling e.g.
   
   http://localhost:8888/fetch/the/titles?address=asdasdasd should return
   
   <ul>
    <li>asdasdasd - <h2>NO RESPONSE</h2>
   </ul>
    - 
```

Open these two files to find where you will be writing most of your code. 

./server/titles/callbacks/titles.service.js

./server/titles/promises/titles.service.js


### Important note

You are highly encouraged to change/add files, and improve
architecture of application. We really like modular/compact/self-describing code. Keep in mind the following three golden principles.

1. DRY(Do not repeat yourself)

2. KISS(Keep it Simple Stupid)

3. YAGNI(You "Ain't Gonna Need It)


If you have any question, or requirements are not clear contact me at hhsadiqAtGmail


### Solution

Upload your solution to your github account. And send its link back to us.

//this is the parse javascript file for S.pace website
//https://parse.com/tutorials/todo-app-with-javascript
//learn parse from code academy
var container = document.getElementById('container');
var textNode = document.createTextNode("Quote");

void start(){
     var submit = documents.getElementsById('submit');
     var quote = documents.getElementsById('quote');
     if(quote.value == 'temp'){
          var success = createElement('p');
          textNode.textContent = quote.value + ": quote as been added";
          success.appendChild(textNode);
          container.appendChild(success);
     }
     else{
          var failed = createElement('p');
          textNode.textContent = quote.value + ": quote was previously added";
          failed.appendChild(textNode);
          container.appendChild(failed);
     }
}

start();

function answerQuery(query) {
  query = query.toLowerCase();
  if (query.indexOf("rain") != -1 || query.indexOf("sun") != -1 || query.indexOf("weather") != -1)
    return "Who cares about the weather when life always rains on your parade?";
if (query.indexOf("tea") != -1 || query.indexOf("biscuits") != -1 || query.indexOf("drink") != -1)
    return "Why drink? Just dehydrate and die. Oh, alright, if you must know, I've heard that humans like the Pan Galactic Gargle Blaster.";
  return "What are you even saying, Arthur? Get your act together.";
}


function handleSayClick() {
  // We first get the 'message' that the user entered and 'conversation' element
  // which we are using for showing all the conversation history
  var message = document.getElementById('message').value.toLowerCase();
  var conversation = document.getElementById('conversation');
  
  // Get answer for the given query and show the query & answer
  var answer = answerQuery(message)
  conversation.innerHTML += "<p><strong>You:</strong> " + message + "</p>";
  conversation.innerHTML += "<p><strong>Marvin:</strong> " + answer + "</p>";
}


document.getElementById("sayit").onclick = handleSayClick;
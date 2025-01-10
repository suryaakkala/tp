async function sendMessage() {
    const userMessage = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');

    // Append user message
    const userDiv = document.createElement('div');
    userDiv.textContent = `You: ${userMessage}`;
    chatBox.appendChild(userDiv);

    // Send message to backend
    const response = await fetch('/chat/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
    });

    const data = await response.json();

    // Append bot response
    const botDiv = document.createElement('div');
    botDiv.textContent = `Bot: ${data.response}`;
    chatBox.appendChild(botDiv);

    // Speech synthesis
    responsiveVoice.speak(data.response, "Telugu Female");
}

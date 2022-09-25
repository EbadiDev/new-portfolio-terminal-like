// Universal output function
function output(command, outputFunction) {
  return (fullCommand) => outputFunction(command(fullCommand));
}

// Parse fullCommand and return object
// fields: command, attributes, flags
function parseFullCommand(fullCommand) {
  fullCommand = fullCommand.split(" ");
  const command = fullCommand.shift();
  const flags = fullCommand.filter((item) => item.length > 1 && item[0] === "-");
  const attributes = [];

  const regularExp = /"([^"]+)"|([^\s]+)/g;
  let input = fullCommand.filter((item) => !flags.includes(item)).join(" ");

  while ((temp = regularExp.exec(input)) !== null) {
    const val = temp[1] || temp[2]; // Get the correct capture group
    attributes.push(val);
  }

  return {
    command: command,
    flags: flags,
    attributes: attributes,
  };
}

// Prompt utils functions
function writePrompt() {
  const terminal = document.getElementById("terminal");
  const prompt = document.createElement("div");

  prompt.classList.add("prompt");
  prompt.innerHTML = `
    <div class="prompt-title"><span class="prompt-dir">~</span><span class="prompt-cursor">${promptSymbol}</span></div>
    <input id="prompt-input" type="text"/>
  `;

  terminal.appendChild(prompt);
}

function focusPrompt() {
  const prompt = document.getElementById("prompt-input");
  prompt.focus();
}

// Replace the existing prompt with text and create a new working prompt
function replacePrompt() {
  const promptInput = document.getElementById("prompt-input");
  const promptText = document.createElement("p");

  promptText.classList.add("prompt-text");
  promptText.textContent = promptInput.value;

  promptInput.replaceWith(promptText);

  writePrompt();
  focusPrompt();
}

// Function for formatting url
function formatUrl(url) {
  let finalUrl = url;

  if (!/^http|https:\/\//.test(finalUrl)) {
    finalUrl = "https://" + finalUrl;
  }

  return finalUrl;
}

// Functions for setting globalData
function setBackground(newBackground = background) {
  background = newBackground;
  lsWriteBackground();

  document.body.style.backgroundImage = `url(${newBackground})`;
}

function setGif(newGif = gif) {
  gif = newGif;
  lsWriteGif();

  const windowGif = document.getElementById("window-gif");
  windowGif.style.backgroundImage = `url(${newGif})`;
}

function setPromptSymbol(newSymbol = promptSymbol) {
  promptSymbol = newSymbol;
  lsWritePromptSymbol();

  const promptCursors = document.getElementsByClassName("prompt-cursor");
  [...promptCursors].forEach((cursor) => (cursor.textContent = newSymbol));
}

function setQuote(newQuote = quote) {
  quote = newQuote;
  lsWriteQuote();

  const windowQuote = document.getElementById("window-quote");
  windowQuote.innerHTML = `"<span id="quote-text">${quote}</span>"`;
}

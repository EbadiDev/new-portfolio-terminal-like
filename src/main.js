// Defined commands
const COMMANDS = {
  cl: {
    func: output(cl, outputText),
    help: helpText.CREATE_LINK.usage,
  },

  ol: {
    func: output(ol, outputText),
    help: helpText.OPEN_LINK.usage,
  },

  rl: {
    func: output(rl, outputText),
    help: helpText.REMOVE_LINK.usage,
  },

  rc: {
    func: output(rc, outputText),
    help: helpText.REMOVE_CATEGORY.usage,
  },

  bm: {
    func: output(bm, outputBookmarks),
    help: helpText.BOOKMARKS.usage,
  },

  cc: {
    func: output(cc, outputText),
    help: helpText.CLEAR.usage,
  },

  sq: {
    func: output(sq, outputText),
    help: helpText.SET_QUOTE.usage,
  },

  ec: {
    func: output(ec, outputText),
    help: helpText.EDIT_CATEGORY.usage,
  },

  el: {
    func: output(el, outputText),
    help: helpText.EDIT_LINK.usage,
    flags: ["-n", "-u"],
  },

  h: {
    func: output(h, outputText),
    help: helpText.HELP.usage,
    flags: ["-cl"],
  },
  whois: {
    func: output(start, outputText),
  },
};

// IIFE for setup
(() => {
  // Read saved values from localStorage
  //lsReadBackground() && (background = lsReadBackground());
  lsReadGif() && (gif = lsReadGif());
  //lsReadPromptSymbol() && (promptSymbol = lsReadPromptSymbol());
  //lsReadQuote() && (quote = lsReadQuote());
  lsReadBookmarks() && (bookmarks = lsReadBookmarks());

  // Set them if they exist
  setBackground();
  setGif();
  setPromptSymbol();
  setQuote();

  // Create initial prompt
  outputText(greetingsText);
  bookmarks.length && outputBookmarks(bookmarks);
  writePrompt();
  focusPrompt();

  document.addEventListener("keypress", handleKeyPresses);
})();

function handleKeyPresses(event) {
  switch (event.key) {
    case "Enter":
      const promptInput = document.getElementById("prompt-input");
      runCommand(promptInput.value);
      break;
  }
}

function runCommand(input) {
  fullCommand = parseFullCommand(input);
  const commandToExecute = COMMANDS[fullCommand.command];

  commandToExecute && commandToExecute.func(fullCommand);
  !commandToExecute && outputText(["no such command ＞﹏＜", 'try "h", "h -cl" or "whois"']);

  fullCommand.command !== "cc" && replacePrompt();

  focusPrompt();
}

// WINBox
const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    //modal: true,
    width: '400px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#6667AB')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    background: '#00aa00',
    width: '400px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#6667AB')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
});


// Typewriter.js
// https://github.com/ronv/Typewriter.js

// $.fn.typewriter = function() {
//   this.each(function() {
//     var c = $(this),
//       b = c.html(),
//       a = 0,
//       d = 0;
//     c.html("");
//     var e = function() {
//       if ("<" == b.substring(a, a + 1)) {
//         var f = new RegExp(/<span class="instant"/),
//           g = new RegExp(/<span class="clear"/);
//         if (b.substring(a, b.length).match(f)) a += b.substring(a, b.length).indexOf("</span>") + 7;
//         else if (b.substring(a, b.length).match(g)) d = a, a += b.substring(a, b.length).indexOf("</span>") + 7;
//         else
//           for (;
//             ">" != b.substring(a, a + 1);) a++
//       }
//       c.html(b.substring(d, a++) + (a & 1 ? "_" : ""));
//       a >= b.length || setTimeout(e, 70 + 100 *
//         Math.random())
//     };
//     e()
//   });
//   return this
// };
// $(".terminal").typewriter();


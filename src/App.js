import React, { useState } from "react";
// import "./reset.css";
import "./App.css";
import marked from 'marked'
import Prism from 'prismjs'


marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});


const App = () => {
  const [text, setText] = useState(defaultValue)
  const [preview, setPreview] = useState(defaultValue)

  const handleChange = ({ target: { value } }) => {
    setText(value)
    setPreview(value)
  }

  return (
    <div className="wrapper">
      <div className="left-bar">
        <div className="toolbar">
          <h3 className="title">Editor</h3>
        </div>
        <textarea id="editor" value={text} onChange={(e) => handleChange(e)} />
      </div>
      <div className="right-bar">
        <div className="toolbar">
          <h3 className="title">Preview</h3>
        </div>
        <div id="preview" dangerouslySetInnerHTML={{__html: marked(preview)}}>
        </div>
      </div>
    </div>
  );
};


const defaultValue = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`

export default App;

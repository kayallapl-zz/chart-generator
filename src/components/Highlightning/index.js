import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default class Highlightning extends Component {
    render() {
        const codeString =
            '{ "name":"PageA", "uv":400, "pv":"2400", "amt":"2400"},{ "name":"PageA", "uv":800, "pv":"2400", "amt":"2400"}';
        return (
            <SyntaxHighlighter language="javascript" style={dark}>
                {codeString}
            </SyntaxHighlighter>
        );
    }
}
import React, { Component } from "react";
import { Button, Drawer } from "../../ui";
import * as monaco from "monaco-editor";
import "./index.less";
const styles = {
  drawer: {
    width: "700px"
  }
};
class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.codeArea = null;
    this.editor = null;
  }
  componentDidMount() {
    this.editor = monaco.editor.create(this.codeArea, {
      value: JSON.stringify(this.props.data, null, "\t"),
      language: "json",
      lineNumbers: "on",
      roundedSelection: false,
      scrollBeyondLastLine: false,
      readOnly: false,
      theme: "vs-dark",
      //强制换行
      wordWrap: "wordWrapColumn",
      wordWrapColumn: 70,
      // Set this to false to not auto word wrap minified files
      wordWrapMinified: true,
      // try "same", "indent" or "none"
      wrappingIndent: "indent"
    });
  }

  onEditor = () => {
    this.setState({
      isOpen: true
    });
  };
  handleClose = () => {
    this.setState(
      {
        isOpen: false
      },
      () => {
        this.save();
      }
    );
  };
  save = () => {
    const text = this.editor.getValue();
    window.localStorage.setItem("resumeData", text);
    this.props.onEditor(JSON.parse(text));
  };
  onReset = () => {
    window.localStorage.clear();
    window.location.reload();
  };
  onDownload = () => {
    // qrcode.innerHTML = "请粘贴战片";
    const toolbar = document.querySelector(".editor-toolbar");
    toolbar.style.visibility = "hidden";
    window.print();
    toolbar.style.visibility = "visible";
    /*html2pdf({
      element: document.querySelector("container"),
      name: "resume"
    });*/
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div className="editor">
        <div className="editor-toolbar">
          <Button onClick={this.onEditor}>编辑简历</Button>
          <Button onClick={this.onReset}>重置简历</Button>
          <Button onClick={this.onDownload}>下载简历</Button>
        </div>
        <div className="editor-portal">
          <Drawer
            open={isOpen}
            style={styles.drawer}
            anchor="right"
            onClose={this.handleClose}
          >
            {/* {JSON.stringify(data)} */}
            <div
              ref={node => (this.codeArea = node)}
              style={{ height: "100%" }}
            />
          </Drawer>
        </div>
      </div>
    );
  }
}

export default Editor;
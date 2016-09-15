import React, { Component } from 'react';
import Quill from 'quill';

const styles = {
  container: {
    height: 300
  }
};

class QuillEditor extends Component {
  componentDidMount() {
    new Quill(this.refs.editor, {
      theme: 'snow'
    });
  }

  render() {
    return (
      <div ref="editor" style={styles.container}></div>
    );
  }
}

export default QuillEditor;

import React from 'react';

class TextArea extends React.Component {

    render() {
        return (<div>
                    <textarea ref="input"
                              className="form-control text-field"
                              placeholder="Type Text"
                              onChange={this.props.update}>
                    </textarea>
                </div>
        )
    }
}

export default TextArea
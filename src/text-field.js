import React from 'react';

class TextInput extends React.Component {

    render() {
        return (<div>
                    <textarea ref="input"
                              type="text"
                              className="form-control text-field"
                              placeholder="Type Text"
                              onChange={this.props.update}>
                    </textarea>
                </div>
        )
    }
}

export default TextInput
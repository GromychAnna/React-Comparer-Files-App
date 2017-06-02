import React from 'react';
import Helper from './compare-helper.js';
import Title from './title.js';
import TextInput from './text-field.js';
import Table from './table.js';

class ExampleApp extends React.Component{
    constructor(){
        super();
        this.state = {
            firstText: "",
            secondText: "",
            result: []
        }
    }

    update(){
        this.setState({
            firstText: this.firstText.refs.input.value,
            secondText: this.secondText.refs.input.value
        });
    }

    submit () {
        let firstTextParse = Helper.splitToStrings(this.state.firstText);
        let secondTextParse = Helper.splitToStrings(this.state.secondText);

        let resultArray = [];
        let self = this;
        if ((firstTextParse.length < secondTextParse.length)||(Helper.isEqual(firstTextParse.length, secondTextParse.length))) {
            resultArray = Helper.compareArrays(firstTextParse, secondTextParse, self);
        } else resultArray = Helper.compareArrays(secondTextParse, firstTextParse, self);

        this.setState({result: resultArray});
    }

    render(){
        return (
            <div>
                <Title />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="col-sm-6">
                                <TextInput
                                    ref={ component => this.firstText = component}
                                    update={this.update.bind(this)}
                                    />
                            </div>
                            <div className="col-sm-6">
                                <TextInput ref={ component => this.secondText = component}
                                           update={this.update.bind(this)}
                                    />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 text-center">
                        <button type="button"
                                className="btn btn-success compare"
                                onClick={this.submit.bind(this)}>
                            Compare
                        </button>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Table
                                data={this.state.result}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExampleApp
import React from 'react';
import Helper from './compare-helper.js';
import Title from './title.js';
import TextArea from './text-area.js';
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

    update () {
        this.setState({
            firstText: this.firstText.refs.input.value,
            secondText: this.secondText.refs.input.value
        });
    }

    submit () {
        let firstTextParse = this.state.firstText.split(/\r?\n/);
        let secondTextParse = this.state.secondText.split(/\r?\n/);

        let resultArray = Helper.compareArrays(secondTextParse, firstTextParse);
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
                                <TextArea
                                    ref={ component => this.firstText = component}
                                    update={this.update.bind(this)}
                                    />
                            </div>
                            <div className="col-sm-6">
                                <TextArea ref={ component => this.secondText = component}
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
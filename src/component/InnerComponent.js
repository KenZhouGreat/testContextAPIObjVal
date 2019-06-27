import React, { Component } from 'react';

export default class InnerComponent extends Component {
    constructor(props) {
        super(props);
        this.props.valueObj.val1 = "changed news";
    }
    render() {
        return (
            <div>
                {this.props.valueObj.val1}
            </div>
        )
    }
}

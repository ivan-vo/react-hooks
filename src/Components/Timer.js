import { render } from '@testing-library/react';
import React, { Component } from 'react';

export class Timer extends Component {
    constructor(props) {
        super();
        this.state = { secondsLeft: props.duration }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ secondsLeft: this.state.secondsLeft - 1 })}, 1000);
    }

    render() {
        const { name } = this.props;
        const { secondsLeft } = this.state;
        const time = `${Math.floor(secondsLeft / 60)}:${secondsLeft % 60}`;
        return (
            <div>Timer {name}: {time}</div>
        )
    }
}
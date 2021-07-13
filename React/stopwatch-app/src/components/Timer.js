import React, { Component } from 'react';

class Timer extends Component {
	constructor (props) {
		super(props);
		this.timer = { props };
		this.hours = 0;
		this.minutes = 0;
		this.seconds = 0;
		this.milliseconds = 0;
	}

	shouldComponentUpdate (nextProps) {
		this.timer = nextProps.timer;
		this.hours = Math.floor(this.timer.timeElapsed / (60 * 60 * 1000));
		this.minutes = Math.floor((this.timer.timeElapsed - this.hours * (60 * 60 * 1000)) / (60 * 1000));
		this.seconds = Math.floor(
			(this.timer.timeElapsed - this.hours * 60 * 60 * 1000 - this.minutes * 60 * 1000) / 1000
		);
		this.milliseconds = Math.floor(
			(this.timer.timeElapsed - this.hours * 60 * 60 * 1000 - this.minutes * 60 * 1000 - this.seconds * 1000) / 10
		);
		return true;
	}

	render () {
		return (
			<React.Fragment>
				<div>
					{
						this.hours >= 10 ? `${this.hours}:` :
						`0${this.hours}:`}
					{
						this.minutes >= 10 ? `${this.minutes}:` :
						`0${this.minutes}:`}
					{
						this.seconds >= 10 ? `${this.seconds}:` :
						`0${this.seconds}:`}
					{
						this.milliseconds >= 10 ? `${this.milliseconds}` :
						`0${this.milliseconds}`}
				</div>
			</React.Fragment>
		);
	}
}

export default Timer;

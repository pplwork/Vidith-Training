import React, { Component } from 'react';
import './Button.css';

class StartButton extends Component {
	constructor (props) {
		super(props);
		this.begin = props.begin;
		this.pause = props.pause;
		this.timer = props.timer;
		this.state = {
			started : props.timer.started
		};
	}

	componentDidUpdate (prevProps) {
		if (prevProps.timer.started !== this.props.timer.started) {
			this.setState({
				started : this.props.timer.started
			});
		}
	}

	render () {
		return (
			<div
				id='startBtn'
				onClick={() => {

						this.state.started ? this.pause() :
						this.begin();
				}}>
				<button className='startButton'>
					{
						this.state.started ? 'Pause' :
						'Start'}
				</button>
			</div>
		);
	}
}

export default StartButton;

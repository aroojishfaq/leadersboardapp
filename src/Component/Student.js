import React, { Component } from "react";
import "./student.css";
class Student extends Component {
	constructor() {
		super();
		this.state = {
			score: 0,
		};
	}
	componentDidMount() {
		this.setState({
			score: this.props.score,
		});
	}
	addScore() {
		this.setState({
			score: this.state.score + 1,
		});
	}
	render() {
		return (
			<div className="student">
				<div className="left">
					<h1 className="Std_name">
						{this.props.name}
						<button className="addscorebtn" onClick={() => this.addScore()}>
							+
						</button>
					</h1>
					<p className="Uni">{this.props.uni}</p>
				</div>
				<div className="right">
					<div className="score">{this.props.score}</div>
				</div>
			</div>
		);
	}
}
export default Student;

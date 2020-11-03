import "./App.css";
import { Component } from "react";
import Student from "./Component/Student";
import "./Component/student.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<div class="title">Leadersboard</div>
				<br />
				<Student
					name="Arooj Ishfaq"
					uni="Government College University"
					score={350}
				/>
				<Student name="Rabiya Habib" uni="Kinnaird College" score={343} />
				<Student name="Muhammad Saqib " uni="Punjab University" score={340} />
				<Student
					name="Sohail Akram"
					uni="University of Central Punjab"
					score={332}
				/>
			</div>
		);
	}
}

export default App;

import react, {useState} from "react";
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from "reactstrap";

const WorkoutEdit = (props) => {
	const [editDesc, setEditDesc] = useState(props.workoutToUpdate.description);
	const [editDef, setEditDef] = useState(props.workoutToUpdate.definition);
	const [editRes, setEditRes] = useState(props.workoutToUpdate.result);
  const workoutUpdate = (event, workout) => {
		event.preventDefault();
		fetch(`http://localhost:3000/log/${props.workoutToUpdate.id}`, {
			method: 'PUT',
			body: JSON.stringify({log: {description: editDesc, definition: editDef, result: editRes}}),
			headers: new Headers({
				'Content-Type': 'application',
				'Authorization': props.token
			})
		}) .then((res) => {
			props.fetchWorkouts();
			props.updateOff();
		})
	}
	return(
		<>
		This is Workout Edit
		</>
	)
}

export default WorkoutEdit;
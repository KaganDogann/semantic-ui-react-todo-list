import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "semantic-ui-react";
import { addToDoing } from "../store/actions/doingActions";
import { removeFromDone } from "../store/actions/doneActions";
import { addToToDo } from "../store/actions/toDoActions";

export default function Done() {
  const { doneItems } = useSelector((state) => state.done);
  const dispatch = useDispatch();
  const handleRemoveFromDone = (task) => {
    dispatch(removeFromDone(task));
  };
  const handleSendToDoing = (task) => {
    dispatch(addToDoing(task));
    dispatch(removeFromDone(task));
  };
  const handleSendToToDo =(task) => {
    dispatch(addToToDo(task))
    dispatch(removeFromDone(task));
  };
  return (
    <div>
      <Card fluid>
        <Card.Content>
          <Card.Header>
            <h2>Done</h2>
          </Card.Header>
        </Card.Content>
        {doneItems.map((doneItem) => (
          <Card.Content key={doneItem.task.description}>
            <Card.Description>{doneItem.task.description}</Card.Description>
            <Button.Group size="small" style={{ marginTop: "2rem" }}>
              <Button onClick={()=> handleSendToToDo(doneItem.task)} color="teal">ToDo</Button>
              <Button.Or />
              <Button
                onClick={() => handleSendToDoing(doneItem.task)}
                color="blue"
              >
                Doing
              </Button>
              <Button.Or />
              <Button
                onClick={() => handleRemoveFromDone(doneItem.task)}
                color="red"
              >
                Remove
              </Button>
            </Button.Group>
          </Card.Content>
        ))}
      </Card>
    </div>
  );
}

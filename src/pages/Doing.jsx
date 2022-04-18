import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card } from "semantic-ui-react";
import { removeFromDoing } from "../store/actions/doingActions";
import { addToDone } from "../store/actions/doneActions";
import { addToToDo } from "../store/actions/toDoActions";

export default function Doing() {
  const { doingItems } = useSelector((state) => state.doing);
  const dispatch = useDispatch()
  function handleSendToDone(task) {
    dispatch(addToDone(task));
    dispatch(removeFromDoing(task));
  }
  const handleRemoveFromDoing = (task) => {
    dispatch(removeFromDoing(task));
  }
  const handleSendToToDo =(task) => {
    dispatch(addToToDo(task))
    dispatch(removeFromDoing(task));
  }
  return (
    <div>
      <Card fluid>
        <Card.Content>
          <Card.Header><h2>Doing</h2></Card.Header>
        </Card.Content>

        {doingItems.map((doingItem) => (
          <Card.Content key={doingItem.task.description}>
            <Card.Description><h4>{doingItem.task.description}</h4></Card.Description>
            <Button.Group size='small' style={{marginTop:"2rem"}}>
              <Button onClick={()=>handleSendToToDo(doingItem.task)} color="teal">ToDo</Button>
              <Button.Or />
              <Button onClick={()=>handleSendToDone(doingItem.task)} color="blue">Done</Button>
              <Button.Or />
              <Button onClick={()=> handleRemoveFromDoing(doingItem.task)} color="red">Remove</Button>
            </Button.Group>
          </Card.Content>
        ))}
      </Card>
    </div>
  );
}

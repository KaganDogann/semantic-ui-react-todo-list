import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, FormField, Icon, Popup } from "semantic-ui-react";
import { addToDoing } from "../store/actions/doingActions";
import { addToDone } from "../store/actions/doneActions";
import { addToToDo, removeFromToDo } from "../store/actions/toDoActions";

export default function ToDo() {
  const { toDoItems } = useSelector((state) => state.toDo);
  const dispatch = useDispatch();
  const [isHiddenAddToDo, setIsHiddenAddToDo] = useState(false);
  const initialValues = { description: "", updateValue: "" };
  //const selam = "selaaaam";
  //const [toDos, setToDos] = useState([]);

  // const handleToDo = (value) => {
  //   const toDoValues = [toDos]
  //   console.log("toDoValues:",toDoValues)
  //   setToDos([value, ...toDos]);
  //   setIsHiddenAddToDo(false);
  // };

  const handleAddToDo = (task) => {
    dispatch(addToToDo(task));
    setIsHiddenAddToDo(false);
  };
  const handleHiddenAddToDo = () => {
    if (isHiddenAddToDo) {
      setIsHiddenAddToDo(false);
    } else {
      setIsHiddenAddToDo(true);
    }
  };
  const setHiddenAddToDo = () => {
    setIsHiddenAddToDo(false);
  };
  const handleSendToDone = (task) => {
    dispatch(addToDone(task));
    //setToDos(toDos.filter((item) => item.description !== task.description));
    dispatch(removeFromToDo(task));
  };
  const handleSendToDoing = (task) => {
    dispatch(addToDoing(task));
    //setToDos(toDos.filter((item) => item.description !== task.description));
    dispatch(removeFromToDo(task));
  };
  const handleRemoveFromToDo = (task) => {
    dispatch(removeFromToDo(task));
  };

  return (
    <div>
      <Card color="orange" fluid>
        <Card.Content className="gradient-custom1">
          <Card.Header>
            <h2>To Do</h2>
          </Card.Header>
        </Card.Content>

        {toDoItems.map((toDoItem) => (
          <Card.Content key={toDoItem.task.description}>
            <Card.Description>{toDoItem.task.description}</Card.Description>

            <Button.Group style={{ marginTop: "2rem" }}>
              <Button
                color="teal"
                onClick={() => handleSendToDoing(toDoItem.task)}
              >
                Doing
              </Button>
              <Button.Or />
              <Button
                color="blue"
                onClick={() => handleSendToDone(toDoItem.task)}
              >
                Done
              </Button>
              <Button.Or />
              <Button
                color="red"
                onClick={() => handleRemoveFromToDo(toDoItem.task)}
              >
                Remove
              </Button>
            </Button.Group>
          </Card.Content>
        ))}

        {isHiddenAddToDo ? (
          <Card.Content>
            <Formik
              initialValues={initialValues}
              onSubmit={(value) => {
                //console.log("formik on submit:", value);
                handleAddToDo(value);
              }}
            >
              <Form className="ui form">
                <FormField>
                  <Field
                    rows={4}
                    className="textarea"
                    name="description"
                    id="topic"
                    as="textarea"
                  ></Field>
                </FormField>
                <FormField>
                  <Button
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      float: "left",
                    }}
                    inverted
                    color="green"
                    type="submit"
                  >
                    Add
                  </Button>
                </FormField>
              </Form>
            </Formik>
            <Button
              onClick={() => setHiddenAddToDo()}
              color="red"
              inverted
              style={{
                display: "flex",
                alignItems: "flex-end",
                float: "right",
              }}
            >
              Cancel
            </Button>
          </Card.Content>
        ) : null}

        <Popup
          disabled
          trigger={
            <Button onClick={() => handleHiddenAddToDo()}>
              {" "}
              <Icon name="plus"></Icon> Add card
            </Button>
          }
        ></Popup>
      </Card>
    </div>
  );
}

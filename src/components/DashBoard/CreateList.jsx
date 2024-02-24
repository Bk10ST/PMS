import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";

import "./Dash-css/CreateList.css"

export const CreateList = () => {
  const [showForm, setShowForm] = useState(false);
  const [showTodo, setShowTodo] = useState(false);

  const handleBtn = () => {
    setShowForm(!showForm);
  }
  const handleSubmit = () => {
    setShowTodo(!setShowTodo);
  }

  return (
    <div className="create-list">
      <Container>
        <div className="text-center dashboard-title">Create List</div>
        <Button colorScheme='blue' onClick={handleBtn} className="create-btn mt-3 mx-auto">Button</Button>
        {showForm &&
          <div className="list-form">
            <FormControl className="pt-3">
              <FormLabel>Title</FormLabel>
              <Input type='email' />
              <FormLabel className="pt-3">Description</FormLabel>
              <Textarea  ></Textarea>
              <FormLabel className='pt-3'>Starting Date</FormLabel>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
              />
              <FormLabel className='pt-3'>Ending Date</FormLabel>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
              />
              <Button colorScheme='blue' className="create-btn mt-3 mx-auto" onClick={handleSubmit}>Submit</Button>
            </FormControl>
          </div>
        }
      </Container>
    </div>
  );
  return { handleSubmit };
};


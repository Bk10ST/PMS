import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Form } from "react-bootstrap";

import { Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { FaLongArrowAltRight } from "react-icons/fa";

import "./Dash-css/CreateList.css";

const CreateList = () => {
  const [showForm, setShowForm] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startingDate: "",
    endingDate: ""
  });

  useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem("todoList"));
    if (storedTodoList) {
      setTodoList(storedTodoList);
    }
  }, []);

  const handleBtn = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTodoList = [...todoList, formData];
    setTodoList(updatedTodoList);
    localStorage.setItem("todoList", JSON.stringify(updatedTodoList));
    setFormData({
      title: "",
      description: "",
      startingDate: "",
      endingDate: ""
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="create-list">
      <Container>
        <div className="text-center dashboard-title">Create List</div>
        <Button colorScheme="blue" onClick={handleBtn} className="create-btn mt-3 mx-auto">
          Create List
        </Button>
        {showForm && (
          <Form onSubmit={handleSubmit}>
            <div className="list-form">
              <FormControl className="pt-3">
                <FormLabel>Title</FormLabel>
                <Input type="text" name="title" value={formData.title} onChange={handleChange} />
                <FormLabel className="pt-3">Description</FormLabel>
                <Textarea name="description" value={formData.description} onChange={handleChange} />
                <FormLabel className="pt-3">Starting Date</FormLabel>
                <Input
                  name="startingDate"
                  placeholder="Select Date and Time"
                  size="md"
                  type="datetime-local"
                  value={formData.startingDate}
                  onChange={handleChange}
                />
                <FormLabel className="pt-3">Ending Date</FormLabel>
                <Input
                  name="endingDate"
                  placeholder="Select Date and Time"
                  size="md"
                  type="datetime-local"
                  value={formData.endingDate}
                  onChange={handleChange}
                />
                <Button colorScheme="blue" type="submit" className="create-btn mt-3 mx-auto">
                  Submit
                </Button>
                <Link to='/your-list'>
                  <Button background={'grey'} color={'white'} size='sm'    >
                    Go to My List <FaLongArrowAltRight className="ms-2" />
                  </Button>
                </Link>
              </FormControl>
            </div>
          </Form>
        )}
      </Container>
      <Container>
      </Container>
    </div>
  );
};

export default CreateList;

import React, { createElement, useState } from "react";
import Dashboard from "./Dashboard";
import "./Dash-css/CreateList.css";
import {
  Radio,
  RadioGroup,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Text,
  Stack,
  Box,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";



const CreateList = ({count}) => {
  const [lists, setList] = useState([]);
  const [createList, setCreateList] = useState("");
  const [description, setDiscription] = useState("");
  const [TaskDate, setTaskDate] = useState("");
  const [divRenderCount , setDivRendeCount]= useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handlecreatelist = (e) => {
    e.preventDefault();
    const newTodo = {
      id: lists.length + 1,
      list: createList,
      descp: description,
      date: new Date().toISOString().slice(0, 10),
    };
    setList([...lists, newTodo]);
    setCreateList("");
    setDiscription("");
  };


  
  return (
    <div className="createlist-module">
      <Dashboard />
      <div className="list-line"></div>
      <div className="createlist-container">
        <h2 className="list-title">List-Controls</h2>

        <Button
          className="btn-add"
          style={{
            backgroundColor: "var(--main-background-color)",
            color: "white",
          }}
          onClick={onOpen}
        >
          Add list 
        </Button>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your Task-List</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Task Name </FormLabel>
                <Input
                  ref={initialRef}
                  value={createList}
                  onChange={(e) => setCreateList(e.target.value)}
                  placeholder="Enter your Task name"
                />
                &nbsp;
                <FormLabel>Task Description</FormLabel>
                <Textarea
                  value={description}
                  onChange={(e) => setDiscription(e.target.value)}
                  placeholder="describe your task"
                />
                &nbsp;
                <FormLabel>Task Date</FormLabel>
                <Input
                  placeholder="Select Date and Time"
                  size="md"
                  type="datetime-local"
                  value={TaskDate}
                  onChange={(e) => setTaskDate(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handlecreatelist}>
                Create
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <div className="lists-container">  
       
          {lists.map((items, index) => {

            return (
          

              <div key={index} className="list-box">
                <SimpleGrid minChildWidth="300px" spacing="90px" row={9}>
                 
                  <Card className="list-card">
                    <CardHeader>
                      <Heading size="md" className="list-heading">
                        {items.list}
                      </Heading>
                    <div className="icon-div">
                    <DeleteIcon />
                   
                      <EditIcon />
                    </div>
                    </CardHeader>
                    <CardBody>
                      <Text>{items.descp}</Text>
                    </CardBody>
                    <CardFooter>
                      <Text>{items.date}</Text>
                    </CardFooter>
                    <RadioGroup defaultValue='2'>
  <Stack spacing={5} direction='row' className="radio-btn">
    <Radio colorScheme='green' value='1'>
    complete
    </Radio>
    <Radio colorScheme='red' value='2'>
      pending
    </Radio>
  </Stack>
</RadioGroup>
                  </Card>
               </SimpleGrid>
            
              </div>
              
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CreateList;

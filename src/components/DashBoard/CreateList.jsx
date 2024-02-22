import React, { useState } from "react";
import Dashboard from "./Dashboard";
import "./Dash-css/CreateList.css";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Badge,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  background,
} from "@chakra-ui/react";

const CreateList = () => {
  const [inputList, setInputList] = useState("");
  const [tabs, setTabs] = useState([{ title: "One", content: "one!" }]);
  const [tabLists, setTabLists] = useState([[]]);

  const addTab = () => {
    const newTabTitle = `Tab ${tabs.length + 1}`;
    setTabs([
      ...tabs,
      { title: newTabTitle, content: `${newTabTitle.toLowerCase()}!` },
    ]);
    setTabLists([...tabLists, []]); // Add an empty list array for the new tab
  };

  const handleListCreation = (e, tabIndex) => {
    e.preventDefault();
    const newLists = [...tabLists];
    newLists[tabIndex] = [
      ...newLists[tabIndex],
      { name: inputList, tasks: [], showTaskInput: false },
    ];
    setTabLists(newLists);
    setInputList("");
  };

  const handleAddingTask = (tabIndex, listIndex, taskInput) => {
    const newLists = [...tabLists];
    newLists[tabIndex][listIndex] = {
      ...newLists[tabIndex][listIndex],
      tasks: [...newLists[tabIndex][listIndex].tasks, taskInput],
    };
    setTabLists(newLists);
  };

  const handleOpenTaskField = (tabIndex, listIndex) => {
    const newLists = [...tabLists];
    newLists[tabIndex][listIndex].showTaskInput =
      !newLists[tabIndex][listIndex].showTaskInput;
    setTabLists(newLists);
  };

  return (
    <div className="createlist-module">
      <Dashboard />
      <div className="list-line"></div>
      <div className="createlist-container">
        <h2 className="list-title">List-Collection</h2>
        <div className="tab-container">
          <Tabs style={{ width: "100%" }}>
            <TabList>
              {tabs.map((tab, tabIndex) => (
                <Tab key={tabIndex}>{tab.title}</Tab>
              ))}
              <Button onClick={addTab}>Add Tab</Button>
            </TabList>
            <TabPanels>
              {tabs.map((tab, tabIndex) => (
                <TabPanel key={tabIndex}>
                  <form onSubmit={(e) => handleListCreation(e, tabIndex)}>
                    <label htmlFor="" className="list-head">
                      List Name: &nbsp;
                      <input
                        type="text"
                        value={inputList}
                        onChange={(e) => setInputList(e.target.value)}
                        placeholder="Enter list name"
                        className="list-creation"
                        required
                      />
                    </label>
                    <button type="submit" className="create">Create</button>
                  </form>
                  {tabLists[tabIndex].map((list, listIndex) => (
                    <div
                      key={listIndex}
                      className="list-div"
                      style={{ display: "block" }}
                    >
                      <Text
                        fontSize="xl"
                        fontWeight="bold"
                        className="list-name"
  
                      >
                        {list.name}
                        <Badge ml="1" fontSize="0.8em" colorScheme="green">
                          Task
                        </Badge>
                      </Text>
                      <button
                        className="task-add"
                        onClick={() => handleOpenTaskField(tabIndex, listIndex)}
                      >
                        Add
                      </button>{" "}
                      &nbsp;
                      {list.showTaskInput && (
                        <>
                          <input
                            type="text"
                            value={list.taskInput}
                            onChange={(e) => {
                              const newLists = [...tabLists];
                              newLists[tabIndex][listIndex].taskInput =
                                e.target.value;
                              setTabLists(newLists);
                            }}
                            placeholder="Enter task"
                            className="task-input"
                          />
                          <button
                            className="task-creation"
                            onClick={() =>
                              handleAddingTask(
                                tabIndex,
                                listIndex,
                                list.taskInput
                              )
                            }
                          >
                            Paste 
                          </button>
                        </>
                      )}
                      <div className="listed-items">
                        <ul>
                          {list.tasks.map((task, taskIndex) => (
                            // <li key={taskIndex}>{task}</li>
                            <Card key={taskIndex} 
                            style={{
                              borderBottom: "3px solid green"
                            }}
                            className="items">
                              <CardBody>{task}</CardBody>
                            </Card>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CreateList;

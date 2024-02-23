import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import "../Dash-css/ListOption.css";
import ActivitiImage from '../../../assets/images/got.jpg'

const ListOptions = () => {
  return (
    <div className="option-container">
      <div className="heading-list">
        <h2>Chosse List</h2>
      </div>
    <div className="choose-list">
    <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        className="card-list"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          maxH={{base: "50%" , sm: "200px"}}
          src={ActivitiImage}
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md" className="list-head">Do List</Heading>

            <Text py="2" className="box-text">
                Increases productivity. At work and at home, having a to-do list may help you prioritize your work and personal tasks.
            </Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="blue" className="go-btn">
              Go
            </Button>
          </CardFooter>
        </Stack>
      </Card>

      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        className="card-list"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={ActivitiImage}
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md" className="list-head">Do List</Heading>

            <Text py="2" className="box-text">
                Increases productivity. At work and at home, having a to-do list may help you prioritize your work and personal tasks.
            </Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Go
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </div>
    </div>
  );
};

export default ListOptions;

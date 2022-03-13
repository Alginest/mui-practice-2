import {
  BottomNavigation,
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import ImageCollage from "../components/ImageCollage";
import Accordian from "../components/Accordian";
import BasicModal from "../components/Modal";
const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src={
            "https://media.istockphoto.com/photos/las-vegas-welcome-sign-picture-id1152877191?k=20&m=1152877191&s=612x612&w=0&h=MKOZmi3jnpjvnGFkie-61gllLooLqAmAtDK6C8uZ7Yg="
          }
          alt="las vegas"
          height={325}
          width={650}
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          exercitationem asperiores aspernatur placeat necessitatibus. Minus
          tempore molestias minima, quis, natus tempora odit blanditiis
          excepturi quos porro quo dolore officiis perferendis facere id sequi
          doloribus impedit neque debitis qui, vitae corporis.
        </Typography>
      </Box>
      <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
          Frequently asked questions
        </Typography>
        <Accordian />
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default Tour;

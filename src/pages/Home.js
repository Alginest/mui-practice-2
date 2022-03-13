import React from "react";
import TourCard from "../components/TourCard";
import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import cities from "../data.json/data.json";

const useStyles = makeStyles({});
const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Container sx={{ marginY: 5 }}>
        {cities.map((city) => {
          return (
            <>
              <Typography
                variant="h4"
                component="h2"
                marginTop={5}
                marginBottom={3}
              >
                Top {city.name}
              </Typography>
              <Grid container spacing={5}>
                {city.tours.map((tour, index) => (
                  <TourCard tour={tour} key={index} />
                ))}
              </Grid>
            </>
          );
        })}
      </Container>
    </div>
  );
};

export default Home;

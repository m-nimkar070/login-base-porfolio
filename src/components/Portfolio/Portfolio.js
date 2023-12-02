import React from "react";
import { useAppContext } from "../Context/AppContext";
import style from "./portfolio.module.css";
import client from "../../Assets/client.jpg";
import gif from "../../Assets/thankyou.gif";
import Footer from "../Footer/Footer";
import {
  Grid,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const Portfolio = () => {
  const { handleLogout, data } = useAppContext();
  const slicedData = data.slice(1);

  if (!data || data.length === 0) {
    return (
      <div className={style.wrapper}>
        <p>Loading...</p>
      </div>
    );
  }

  // Check for if data[0] is available
  if (!data[0]) {
    return (
      <div className={style.wrapper}>
        <p>No user data available</p>
      </div>
    );
  }

  return (
    <Box>
      <Grid>
        <Grid item xs={12} sx={{ borderRadius: "16px" }} className={style.nav}>
          <Typography variant="h3">Welcome {data[0].name}</Typography>
          <Button
            className={style.btn}
            sx={[
              {
                color: "white",
                border: "1px solid white",
                borderRadius: "20px",
                margin: "5px",
              },
            ]}
            p={2}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Grid>
      </Grid>
      <Grid>
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={12} className={style.details}>
            <Typography variant="h3" className={style.h1}>
              I'm {data[0].name.split(" ")[0]}{" "}
              <span className={style.span}>{data[0].name.split(" ")[1]}</span>
            </Typography>
            <Typography className={style.p}>
              This is my portfolio To showcase my
              <br />
              Skills in Front-End Technologies
            </Typography>
            <a href={gif} id="download" download className={style.a}>
              Download CV
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Typography align="center">
          Following are some of my clients with their details ...!
        </Typography>
      </Grid>
      <Grid
        container
        className={style.cardContainer}
        marginY="1rem"
        paddingX="1rem"
        xs={12}
        spacing={2}
      >
        {slicedData.map((item) => (
          <Grid item xs={12} sm={6} md={6} lg={4} key={item.id}>
            <Card className="card">
              <CardMedia
                component="img"
                alt={item.name}
                sx={{ borderRadius: "10px" }}
                image={client}
              />
              <CardContent className={style.card}>
                <Grid className={style.cardContent}>
                  <Typography variant="subtitle1">Name:</Typography>
                  <Typography variant="body1">{item.name}</Typography>
                </Grid>
                <Grid className={style.cardContent}>
                  <Typography variant="subtitle1">Email:</Typography>
                  <Typography variant="body1">{item.email}</Typography>
                </Grid>
                <Grid className={style.cardContent}>
                  <Typography variant="subtitle1">Website:</Typography>
                  <Typography variant="body1">{item.website}</Typography>
                </Grid>
                <Grid className={style.cardContent}>
                  <Typography variant="subtitle1">Company:</Typography>
                  <Typography variant="body1">{item.company.name}</Typography>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        className={style.cardContainer}
        marginY="1rem"
        paddingX="1rem"
        xs={12}
        spacing={2}
      >
        <Footer />
      </Grid>
    </Box>
  );
};

export default Portfolio;

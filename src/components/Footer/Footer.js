import React from "react";
import style from "./footer.module.css";
import gitLogo from "../../Assets/icons8-github-40.png";
import twitLogo from "../../Assets/icons8-twitter-40.png";
import linkLogo from "../../Assets/icons8-linkedin-40.png";
import trademark from "../../Assets/icons8-trademark-40.png";
import { Grid, Typography, Container, Link } from "@mui/material";

const Footer = () => {
  return (
    <Grid item className={style.container}>
      <Container container className={style.main} xs={12} sm={12} spacing={3}>
        <Grid item xs={12} p={1}>
          <Typography variant="h6">
            Something Co.
            <img
              src={trademark}
              style={{ width: "20px", height: "20px" }}
              alt="trademark"
            />
          </Typography>
          <Typography variant="body2">
            Address: Bengaluru, Karnataka 560045
          </Typography>
          <Link href="#about">
            <Typography variant="body2">About</Typography>
          </Link>
        </Grid>
        <Grid item xs={12} md={6} p={1}>
          <Typography variant="body2">Connect with me</Typography>
          <Link
            className={style.link}
            href="https://www.linkedin.com/in/mahesh-nimkar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkLogo}
              alt="LinkedIn logo"
              style={{ width: "40px", height: "40px" }}
            />
          </Link>
          <Link
            className={style.link}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={twitLogo}
              alt="Twitter logo"
              style={{ width: "40px", height: "40px" }}
            />
          </Link>
          <Link
            className={style.link}
            href="https://github.com/m-nimkar070"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={gitLogo}
              alt="GitHub logo"
              style={{ width: "40px", height: "40px" }}
            />
          </Link>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Footer;

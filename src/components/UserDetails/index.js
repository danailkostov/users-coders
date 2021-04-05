import {
  Paper,
  Typography,
  Card,
  CardHeader,
  Avatar,
  Button,
  CardContent,
  Link,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import BusinessIcon from "@material-ui/icons/Business";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "inline-block",
    padding: "10px",
    borderBottomRightRadius: "0px",
    borderBottomLeftRadius: "0px",
    paddingBottom: "0px",
  },
  label: {
    padding: "10px",
    color: "#617d98",
    fontWeight: "bold",
  },
  paperTwo: {
    borderTopLeftRadius: "0px",
  },
  avatar: {
    width: "75px",
    height: "75px",
  },
  btn: {
    textTransform: "none",
    borderRadius: "25px",
    margin: "30px",
    color: "#617D98",
    border: "1px solid #617D98",
    "&:hover": {
      backgroundColor: "#2CAEBA",
      color: "white",
    },
  },
  name: {
    color: "#102a42",
    fontWeight: "bold",
  },
  twitter: {
    color: "#617D98",
  },
  minorTypos: {
    color: "#617D98",
  },
  icons: {
    verticalAlign: "top",
    display: "inline-flex",
    marginRight: "5px",
  },
  link: {
    color: "#2CAEBA",
    "&:hover": {
      color: "#551A8B",
    },
  },
}));

const UserDetails = ({
  avatar_url,
  name,
  twitter_username,
  bio,
  company,
  location,
  blog,
}) => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper} elevation="0">
        <Typography component="label" className={classes.label}>
          User
        </Typography>
      </Paper>
      <Card className={classes.paperTwo}>
        <CardHeader
          avatar={
            <Avatar
              aria-label="user"
              className={classes.avatar}
              src={avatar_url}
            />
          }
          action={
            <Button variant="outlined" className={classes.btn}>
              Follow
            </Button>
          }
          title={
            <Typography className={classes.name} component="h4">
              {name}
            </Typography>
          }
          subheader={
            <Typography className={classes.twitter} component="p">
              @{twitter_username}
            </Typography>
          }
        />

        <CardContent>
          <Typography
            variant="body1"
            color="textSecondary"
            component="p"
            gutterBottom
            paragraph
          >
            {bio}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            component="p"
            className={classes.minorTypos}
            gutterBottom
          >
            <BusinessIcon fontSize="small" className={classes.icons} />{" "}
            {company}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            component="p"
            className={classes.minorTypos}
            gutterBottom
          >
            <LocationOnIcon fontSize="small" className={classes.icons} />{" "}
            {location}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            component="p"
            className={classes.minorTypos}
          >
            <Link
              href={`https://${blog}`}
              className={classes.link}
              underline="none"
            >
              <LinkIcon fontSize="small" className={classes.icons} /> {blog}
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default UserDetails;

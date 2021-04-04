import {
  Paper,
  Typography,
  Card,
  CardHeader,
  Avatar,
  Button,
  CardContent,
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
  },
  paperTwo: {
    borderTopLeftRadius: "0px",
  },
  avatar: {
    width: "75px",
    height: "75px",
  },
  btn: {
    borderRadius: "15px",
    margin: "30px",
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
    verticalAlign: "middle",
    display: "inline-flex",
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
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom
            paragraph
          >
            {bio}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.minorTypos}
            gutterBottom
          >
            <BusinessIcon fontSize="small" className={classes.icons} />{" "}
            {company}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.minorTypos}
            gutterBottom
          >
            <LocationOnIcon fontSize="small" className={classes.icons} />{" "}
            {location}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.minorTypos}
          >
            <LinkIcon fontSize="small" className={classes.icons} /> {blog}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default UserDetails;

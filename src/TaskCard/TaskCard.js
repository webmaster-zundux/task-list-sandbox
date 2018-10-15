import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import { IMAGE_HOST } from "../config";
import { capitalize } from "../helpers";

const styles = theme => ({
  card: {},
  mediaContainer: {
    width: "100%",
    backgroundColor: "gray"
  },
  media: {
    height: 0,
    // paddingTop: "56.25%" // 16:9
    paddingTop: 240,
    backgroundSize: "contain"
    // maxHeight: 240,
    // maxWidth: 320,
  },
  content: {},
  actions: {
    display: "flex"
  }
});

class TaskCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { task = {}, classes, editable = true } = this.props;
    const { title, description, images = [], author = {} } = task;
    const { username, email } = author;

    const descriptionLabel = capitalize(description);
    const authorLabel = `${username} ( ${email} )`;
    const mainImage = images && images[0];
    const imageUrl = `${IMAGE_HOST}${mainImage}`;

    return (
      <Card className={classes.card}>
        {mainImage && (
          <div className={classes.mediaContainer}>
            <CardMedia
              className={classes.media}
              image={imageUrl}
              title={title}
            />
          </div>
        )}
        <CardContent className={classes.content}>
          <Typography variant="body1" gutterBottom>
            {descriptionLabel}
          </Typography>
          <Typography variant="caption">{authorLabel}</Typography>
        </CardContent>
        <CardActions>{editable && <Button>Edit</Button>}</CardActions>
      </Card>
    );
  }
}

TaskCard.propTypes = {
  classes: PropTypes.object.Required,
  task: PropTypes.object.Required,
  editable: PropTypes.bool
};

export default withStyles(styles)(TaskCard);

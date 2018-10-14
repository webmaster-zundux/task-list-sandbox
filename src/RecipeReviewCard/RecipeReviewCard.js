import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Edit from "@material-ui/icons/Edit";
import { IMAGE_HOST } from "../config";
import { capitalize } from "../helpers";

const styles = theme => ({
  card: {
    // maxHeight: 200
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  }
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { task = {}, classes, editable = true } = this.props;
    const { title, description, images = [], author = {} } = task;
    const { username, email } = author;

    const titleLabel = capitalize(title || "task name");
    const authorLabel = `${username || "Jerry Mouse"}
     (${email || "jerry.mouse@example.com"})`;

    const mainImage = images && images[0];
    const imageUrl = `${IMAGE_HOST}${mainImage}`;

    return (
      <Card className={classes.card}>
        <CardHeader
          action={
            editable && (
              <IconButton>
                <Edit />
              </IconButton>
            )
          }
          title={titleLabel}
          subheader={authorLabel}
        />
        {mainImage && (
          <CardMedia className={classes.media} image={imageUrl} title={title} />
        )}
        <CardContent>
          <Typography component="p">{description}</Typography>
        </CardContent>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.Required,
  task: PropTypes.object.Required,
  editable: PropTypes.bool
};

export default withStyles(styles)(RecipeReviewCard);

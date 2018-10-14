import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Edit from "@material-ui/icons/Edit";
import { IMAGE_HOST } from "../config";

const styles = theme => ({
  card: {
    // maxWidth: 400,
    // width: "80%",
    // maxHeight: 200
  },
  media: {
    // height: 0,
    // paddingTop: "56.25%" // 16:9
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
    const { classes, editable = true } = this.props;
    const { title, descrition, images = [], author } = this.props.task;

    const authorLabel = `${author.username || "Jerry Mouse"}
     (${author.email || "jerry.mouse@example.com"})`;

    const mainImage = images && images[0];
    const imageUrl = `${IMAGE_HOST}/${mainImage}`;

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
          title={title || "task name"}
          subheader={authorLabel}
        />
        <CardMedia className={classes.media} image={imageUrl} title={title} />
        <CardContent>
          <Typography component="p">{descrition}</Typography>
        </CardContent>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeReviewCard);

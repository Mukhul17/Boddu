import React from "react";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Icon from "@mui/material/Icon";
import Typography from "@mui/material/Typography";
import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) => ({
  topicContainer: {
    height: 160,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  topicIcon: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    "& > *": {
      width: "100%",
      height: "100%",
    },
  },
  topicTitle: {
    marginTop: theme.spacing(2),
  },
}));

export type TopicsCardProps = {
  title: string;
  icon: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, title: string) => void;
};

function TopicCard({ title, icon, onClick }: TopicsCardProps) {
  const classes = useStyles();

  return (
    <Card elevation={0} variant="outlined" square>
      <CardActionArea onClick={(e) => onClick(e, title)}>
        <CardContent className={classes.topicContainer}>
          <Icon fontSize="large" className={classes.topicIcon} component="div">
            {icon}
          </Icon>

          <Typography variant="subtitle2" className={classes.topicTitle}>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default TopicCard;

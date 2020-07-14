import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom';

import http from '../../utils/axios';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function Connection() {
  const classes = useStyles();
  const params = useParams();
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    async function fetchFollowers() {
      try {
        const response = await http.get(
          `/api/connections/followers/${params.username}`,
        );
        setFollowers(response.data.followers);
      } catch (error) {}
    }
    fetchFollowers();
  }, [params]);

  return (
    <List dense className={classes.root}>
      <ListSubheader>Seguidores (4)</ListSubheader>
      {followers.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem key={value} button>
            <ListItemAvatar>
              <Avatar alt={value.user.username} src={value.user.avatar} />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={value.user.username} />
            <ListItemSecondaryAction>
              {!value.following && <Button>Seguir</Button>}
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}

export default Connection;

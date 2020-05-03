import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import MessageIcon from '@material-ui/icons/Message';


const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2)
  },
  subheader: {
    display: 'flex',
    alignItems: 'cen'
  },
  caption: {
    marginRight: theme.spacing(1)
  },
  message: {
    height: 'auto',
    marginBottom: theme.spacing(2),
    padding: '0 24px'
  },
  image: {
    height: 300,
    width: '100%',
    maxWidth: '100%'
  },
  content: {
    padding: 0
  },
  favorite: {
    marginLeft: 'auto'
  }
}))

function PostCard({ post }) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardHeader 
        avatar={<Avatar src={post.author.avatar} />}
        title={<Typography variant="h6">{post.title}</Typography>}
        subheader={
          <div className={classes.subheader}>
            <Typography variant="caption" className={classes.caption}>
              {'Avaliado por'}
            </Typography> 
            <Typography variant="subtitle2" className={classes.caption}>
              {post.author.name}
            </Typography> 
            <Typography variant="caption" className={classes.caption}>
              {post.date}
            </Typography> 
          </div>
        }
        />
      <CardContent className={classes.content}>
        <Typography
          className={classes.message}
          variant="body1"
        >
          {post.hashtags}
        </Typography>
        <CardActionArea>
          <img src={post.image} className={classes.image} alt="img"/>
        </CardActionArea>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like">
          <FavoriteIcon />
          <Typography
            style={{cursor: 'pointer'}}
            color="textSecondary"
            variant="body2"
          >
            {'10'}
          </Typography>
        </IconButton>
        <IconButton aria-label="comment">
          <MessageIcon />
          <Typography
            className={classes.reactions}
            color="textSecondary"
            variant="body2"
          >
            {'30'}
          </Typography>       
        </IconButton>  
        <IconButton aria-label="favorite" className={classes.favorite}>
          <BookmarkIcon />
        </IconButton>    
      </CardActions>
    </Card>  
  )
}

export default PostCard;
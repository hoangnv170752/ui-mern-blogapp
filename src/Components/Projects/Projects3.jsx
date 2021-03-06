import React from 'react';
import './projects.css';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Blackberry } from '@icons-pack/react-simple-icons';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
        })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
  
function Projects3() {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    return(
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: Blackberry[500] }} aria-label="recipe">
            T3H
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Blog MERN app"
        subheader="December 26, 2021"
      />
      <CardMedia
        component="img"
        height="194"
        image="/img/mernblogapp.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant='body1'>
          MERN stack - Front end developer
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Project ReactJS cu???i kh??a - Blog app s??? d???ng giao di???n b???ng Reactjs, database b???ng MongoDB v?? backend s??? d???ng Nodejs
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            <Typography variant='body1'>C??ng vi???c ch??nh</Typography>
            <Typography paragraph color="text.secondary">* Thi???t k??? v?? l???p tr??nh giao di???n blog</Typography>
            <Typography paragraph color="text.secondary">* Thi???t k??? v?? l???p tr??nh lu???ng x??? l?? backend</Typography>
            <Typography paragraph color="text.secondary">* S??? d???ng firebase cloud cho ph???n ????ng nh???p, ????ng k??</Typography>
        </CardContent>
      </Collapse>
    </Card>
    );
}

export default Projects3;
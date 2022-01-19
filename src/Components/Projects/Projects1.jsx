import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import './projects.css';
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
  
function Projects1() {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    return(
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            RAL
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="RAL Smartlighting IoT"
        subheader="September 14, 2021 - February 14, 2022"
      />
      <CardMedia
        component="img"
        height="194"
        image="/img/raliot.png"
        alt="smartiot"
      />
      <CardContent>
        <Typography variant='body1'>
          Supporter - App Tester
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Dự án thông minh về đường phố, cung cấp giải pháp chiếu sáng cho người tiêu dùng
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <a href="http://14.225.13.96:5555/">
            <FavoriteIcon title="Website"/>
          </a>
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
          <Typography variant='body1'>Công việc chính</Typography>
          <Typography paragraph color="text.secondary">* Test web app và mobile app theo module trên UAT</Typography>
          <Typography paragraph color="text.secondary">* Lập trình phần giao diện web app (Angular) và tìm hiểu về mobile app (Flutter)</Typography>
        </CardContent>
      </Collapse>
    </Card>
    );
}

export default Projects1;
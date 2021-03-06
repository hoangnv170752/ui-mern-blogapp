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
  
function Projects4() {
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
        title="RAL Smartagriculture IoT"
        subheader="January 1, 2022 - April 1, 2022"
      />
      <CardMedia
        component="img"
        height="194"
        image="/img/smartagri.jpg"
        alt="Paella dish"
      />
      <CardContent>
      <Typography variant='body1'>
          Front end Developer - App Tester
        </Typography>
        <Typography variant="body2" color="text.secondary">
          D??? ??n th??ng minh v??? n??ng nghi???p, cung c???p gi???i ph??p chi???u s??ng cho ng?????i n??ng d??n
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
          <Typography paragraph color="text.secondary">* Test web app v?? mobile app theo module tr??n SRS</Typography>
          <Typography paragraph color="text.secondary">* Ph??t tri???n c??c version ti???p theo c???a d??? ??n v??? ph???n giao di???n v?? t??nh n??ng ??i???u khi???n</Typography>
        </CardContent>
      </Collapse>
    </Card>
    );
}

export default Projects4;
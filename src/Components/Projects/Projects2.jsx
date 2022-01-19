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
import { blueGrey, red } from '@mui/material/colors';
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
  
function Projects2() {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    return(
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blueGrey[500] }} aria-label="recipe">
            H
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Đồ án tốt nghiệp - Chương trình tài năng cơ điện tử HUST"
        subheader="October 25, 2021 - February 20, 2022 "
      />
      <CardMedia
        component="img"
        height="194"
        image="/img/iotsmarthome-finalyear.jpg"
        alt="Paella dish"
      />
      <CardContent>
      <Typography variant='body1'>
          Front end developer - Device programmer 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Đồ án tốt nghiệp cử nhân chương trình Tài năng ngành Cơ điện tử của đại học Bách Khoa Hà Nội
          Dự án : Ứng dụng của nhận diện dáng người trong một mô hình nhà thông minh 
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
          <Typography variant="body1">Công việc chính</Typography>
          <Typography paragraph color="text.secondary">* Lập trình giao diện web điều khiển và hiển thị các kịch bản đèn trong nhà thông minh </Typography>
          <Typography paragraph color="text.secondary">* Lập trình phần thiết bị thực nhận lệnh từ người điều khiển và chạy theo kịch bản</Typography>
        </CardContent>
      </Collapse>
    </Card>
    );
}

export default Projects2;
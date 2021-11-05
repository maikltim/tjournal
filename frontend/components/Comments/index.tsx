import React from 'react' 
import { Typography, Button, IconButton, Menu, MenuItem } from '@material-ui/core'
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';


import styles from './Comment.module.scss'


interface CommentProps {
    user: {
        fullname: string
    }
    text: string
   
}

export const Comments: React.FC<CommentProps> = ({user, text}) => {
    const [anchorEl, setAnchorEl] = useState(null)



const handleClick = (event) => {
    setAnchorEl(event.currentTargent)
}


const handleClose = () => {
    setAnchorEl(null)
}

return (
<div className={styles.comment}>
<div>
    <img 
    src="https://leonardo.osnova.io/a21ca5a9-d95b-560d-9a6f-9fa87eff7fcd/-/preview/600/-/format/webp/" 
    alt="logo" />
    <b>Frank Lefty</b>
    <span>5 часов</span>
    </div>

<Typography>
Football Hackers: The Science and Art of a Data Revolution (2019) by Christoph Bierman 
is an excellent read about the modern application of statistics to soccer.
</Typography>
<Button style={{marginLeft: -10}}>Ответить</Button>
<IconButton onClick={handleClick}>
<MoreIcon />
</IconButton>
<Menu
    id="simple-menu"
    anchorEl={anchorEl}
    elevation={3}
    keepMounted
    open={Boolean(anchorEl)}
    onClose={handleClose}>
    <MenuItem onClick={handleClose}>Удалить</MenuItem>
    <MenuItem onClick={handleClose}>Редактировать</MenuItem>
</Menu>
</div>
)
}
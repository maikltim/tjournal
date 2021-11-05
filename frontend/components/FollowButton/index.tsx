import React, {useState} from 'react';
import CheckIcon from '@material-ui/icons/CheckOutlined';
import {
    AddOutlined as AddIcon,
  } from '@material-ui/icons';
  import { Button } from '@material-ui/core';

import styles from './FollowButton.module.scss';

export const FollowButton: React.FC = () => {
    const [followed, setFollowed] = useState(false)
  return (
    <Button 
    onClick={() => setFollowed(!followed)}
    variant="contained" 
    style={{minWidth: 30, width: 35, height: 35}}>
        {!followed ? <AddIcon /> : <CheckIcon style={{fontSize: 20, color: '#2ea83a'}} />}
        <AddIcon />
    </Button>
  );
};
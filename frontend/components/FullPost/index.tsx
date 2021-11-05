import React from 'react'
import { Paper, Typography, Button } from '@material-ui/core';
import MessageIcon from '@material-ui/icons/TextsmsOutlined';
import UserAddIcon from '@material-ui/icons/PersonAddOutlined';

import styles from './FullPost.module.scss'
import { PostActions } from '../PostActions';


export const FullPost = () => {
  return (
    <>
      <Paper elevation={0} className={styles.paper}>
          <div style={{margin: '0 auto', width: 680}}>
          <Typography variant='h4' className={styles.title}>
          Superjet, летящий из Волгограда в Москву, подал сигнал бедствия. Возможно,
          в полете произошла разгерметизация
          </Typography>
          <div>
          <Typography>
          Самолет SSJ100, летящий из Волгограда в Москву, подал сигнал бедствия. Об этом 
          сообщает «Интерфакс» со ссылкой на информированный источник. По данным источника, 
          самолет резко снизился над Тамбовской областью. 
          </Typography>
          <Typography>
          Источник не уточнил названия авиакомпании и номера рейса. Судя по данным 
          Flightradar24, сейчас в небе находится один SSJ100, летящий в Москву из Волгограда. 
          Это — самолет «Аэрофлота», выполняющий рейс SU6416. На момент написания заметки 
          он уже пересек Тамбовскую область и подлетает к Москве.
          </Typography>
          <div style={{width: 250, marginLeft: -14}}>
              <PostActions />
          </div>
          <div className="d-flex justify-between align-center mt-30 mb-30">
          <div className={styles.userInfo}>
              <img 
              src="https://leonardo.osnova.io/a21ca5a9-d95b-560d-9a6f-9fa87eff7fcd/-/preview/600/-/format/webp/" 
              alt="logo" />
              <b>Donny Brasco</b>
              <span>+1654</span>
          </div>
          <div>
              <Button variant="contained" className="mr-15">
                  <MessageIcon />
              </Button>
              <Button variant="contained">
                  <UserAddIcon />
                  <b className="ml-10">Подписаться</b>
              </Button>
          </div>
          </div>
          </div>
          </div>
      </Paper>
    </>
      
  );
}
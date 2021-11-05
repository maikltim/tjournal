import {Comments} from '../../components/Comments'
import {MainLayout} from '../../layouts/MainLayout'
import { FullPost } from '../../components/FullPost';
import { Divider, Paper, Typography, Tabs, Tab} from '@material-ui/core';


export default function Home() {
  return (
    <MainLayout className="mb-50" contentFullWidth>
      <FullPost />
      <Paper elevation={0} className="mt-40 p-30">
          <Typography variant="h6" className="mb-20">
              42 комментария
          </Typography>
         
          <Tabs className="mt-10" value={0} indicatorColor="primary" textColor="primary">
            <Tab label="Популфрные" />
            <Tab label="По порядку" />
        </Tabs>
        <Divider />
        <div className="mb-20" />
          <Comments />
      </Paper>
    </MainLayout>
      
  );
}
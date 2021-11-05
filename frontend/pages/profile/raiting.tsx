import { 
    Paper,
    Typography, 
    Tabs, 
    Tab,
    Table,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from '@material-ui/core';
import { FollowButton } from '../../components/FollowButton';
import {MainLayout} from '../../layouts/MainLayout'



export default function Rating() {
  return (
    <MainLayout hideComments>
      <Paper className="pl-20 pt-20 pr-20 mb-20" elevation={0}>
        <Typography variant="h5" style={{fontWeight: 'bold', fontSize: 30, marginBottom: 6}}>
            Рейтинг сообществ и блогов
        </Typography>
        <Typography>
            Десят лучших авторов и комментаторов, а также 
            администраторы первых десяти сообществ из рейтинга по итогам месяца 
            бесплатно получат Plus аккаунт месяц
        </Typography>
        <Tabs className="mt-10" value={0} indicatorColor="primary" textColor="primary">
            <Tab label="Август" />
            <Tab label=" За 3 месяца" />
            <Tab label="За все время" />
        </Tabs>
      </Paper>

      <Paper elevation={0}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Имя пользователь</TableCell>
            <TableCell align="right">Райтинг</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                <span className="mr-15">1</span> Вася Пупкин
              </TableCell>
              <TableCell align="right">540</TableCell>
              <TableCell align="right">
                  <FollowButton />
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
      </Paper>
    </MainLayout>
      
  );
}


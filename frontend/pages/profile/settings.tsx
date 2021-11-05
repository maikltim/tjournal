import {MainLayout} from '../../layouts/MainLayout'
import { Button, Divider, Paper, TextField, Typography } from '@material-ui/core'; 


export default function Settings() {
  return (
    <MainLayout hideComments>
      <Paper className="p-20" elevation={0}> 
         <Typography variant="h6">Основные настройки</Typography>
         <Divider className="mt-20 mb='20" />
         <form className="mt-20">
             <TextField
             className="mb-15"
             size="small"
             required
             label="Никнейм"
             defaultValue="hello"
             variant="outlined"
             />
             <TextField
             className="mb-15"
             size="small"
             required
             label="Эл.почта"
             defaultValue="hello"
             variant="outlined"
             />
             <TextField
             className="mb-15"
             size="small"
             required
             label="Пароль"
             defaultValue="hello"
             variant="outlined"
             />
             <Divider className="mt-20 mb='20" /> 
             <Button color="primary" variant="contained">
                 Сохранить изменения
            </Button>
         </form>
      </Paper>
    </MainLayout>
      
  );
}
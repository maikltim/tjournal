import Link from 'next/link'
import {Paper, Avatar, Typography, Button, Tab} from '@material-ui/core' 
import {
    SettingsOutlined as SettingsIcon, 
    TextsmsOutlined as MessageIcon
} from '@material-ui/icons' 
import { Post } from '../../components/Post'
import { MainLayout } from '../../layouts/MainLayout' 


export default function Profile() {
    return (
        <MainLayout contentFullWidth hideComments>
            <Paper className="pl-20 pr-20 pt-20 mb-30" elevation={0}>
                <div className="d-flex justify-between">
                    <Avatar
                    style={{width: 120, height: 120, borderRadius: 6}}
                    src="https://leonardo.osnova.io/a21ca5a9-d95b-560d-9a6f-9fa87eff7fcd/-/preview/600/-/format/webp/"
                    />
                    <Typography style={{fontWeight: 'bold',}} className="mt-10" variant="h4">
                        Amon Bower
                    </Typography>
                </div>
                <div>
                    <Link href="/profile/settings">
                    <a>
                    <Button 
                    style={{height: 42, minWidth: 45, width: 45, marginRight: 10}}
                    variant="contained">
                        <SettingsIcon />
                    </Button>
                    </a>
                    </Link>
                    <Button style={{height: 42}} variant="contained" color="primary">
                        <MessageIcon className="mr-10" />
                        Написать
                    </Button>
                </div>
            </Paper>
        </MainLayout>
    )
}
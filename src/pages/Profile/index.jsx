
import { Avatar, Box, Container, Typography } from '@mui/material'
import React from 'react'

import ProfileImg from '../../static/images/profile.png'

import style from './style.module.scss'
import EditProfileModal from './components/EditModal'

const Profile = () => {
    const [open, setOpen] = React.useState(false);
    
    const handleClose = () => setOpen(false);

  return (
    <Container component="main" maxWidth="xs">
        <Box className={style.profileContainer}>
            <Avatar src={ProfileImg} className={style.avatar}/>
            <Typography className={style.username}>Jhon Doe</Typography>
            <Typography className={style.email}>jhondoe@mail.com</Typography>
            <Typography className={style.editProfile} onClick={() => {setOpen(true)}}>Edit profile</Typography>
        </Box>
            <EditProfileModal open={open} handleClose={handleClose}/>
    </Container>
  )
}

export default Profile
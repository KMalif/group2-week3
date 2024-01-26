import React from 'react'
import { Avatar, Box, Button, Modal, TextField, Typography } from '@mui/material'
import { FormattedMessage } from 'react-intl'
import { useDispatch } from 'react-redux';
import ProfileImg from '../../../../static/images/profile.png'

import style from './style.module.scss'

const EditProfileModal = ({ open, handleClose }) => {
    const dispatch = useDispatch()
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className={style.modalContainer}
        >
            <Box className={style.formContainer}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <FormattedMessage id='form_edit_profile_title' />
                </Typography>
                <Box component="form" noValidate sx={{ mt: 2 }}>
                    <Typography id="modal-modal-title" className={style.label}>
                        <FormattedMessage id='form_edit_profile_img' />
                    </Typography>
                    <Box className={style.avatarContainer}>
                        <Avatar src={ProfileImg} className={style.avatar} />
                        <Box className={style.buttonContainer}>
                            <Button variant="text" color="success" size='small'>Edit</Button>
                            <Typography variant="caption" className={style.textSuggest}>
                                Recomended: Square JPG, PNG
                            </Typography>
                            {/* <Button color="error" size='small'>Remove</Button> */}
                        </Box>
                    </Box>
                    <Typography id="modal-modal-title" className={style.label}>
                        <FormattedMessage id='form_edit_profile_name' />
                    </Typography>
                    <TextField
                        required
                        fullWidth
                        id="fullname"
                        variant="standard"
                        name="fullname"
                        autoComplete="fullname"
                    />
                </Box>
                <Box className={style.buttonWrap}>
                    <Button variant="outlined" color="success" size='small'>Cancel</Button>
                    <Button variant="contained" color="success" size='small'>Save</Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default EditProfileModal
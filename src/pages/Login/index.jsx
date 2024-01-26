import React, { useState } from 'react'

import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {login} from './actions'

import style from './style.module.scss'
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({})

    const onChangeHandler = (value, type) => {
      setFormData({
        ...formData,
        [type]: value
      })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const dataUser = {
          fullName: formData?.fullName,
          email: formData?.email,
          password: formData?.password
        }
        dispatch(login(
          dataUser,
          () => {
            console.log('success login')
            navigate('/')
          },
          (error) => {
            toast(error)
            console.log('failed login')
          }
        ))
    }

  return (
    <Container component="main" maxWidth="xs">
        <Box className={style.formContainer}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            <FormattedMessage id='app_title_signin'/>
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label={<FormattedMessage id='form_label_email'/>}
                  name="email"
                  autoComplete="email"
                  onChange={(e) => onChangeHandler(e.target.value, 'email')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label={<FormattedMessage id='form_label_password'/>}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => onChangeHandler(e.target.value, 'password')}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              <FormattedMessage id='app_title_signin'/>
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/signup" variant="body2">
                    <FormattedMessage id='form_suggest_signup'/>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
    </Container>
  )
}

export default Login
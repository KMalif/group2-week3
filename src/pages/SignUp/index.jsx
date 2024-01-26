
import React, { useState } from 'react'

import { Avatar, Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import style from './style.module.scss'
import { FormattedMessage } from 'react-intl';

const SignUp = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

    }

  return (
    <Container component="main" maxWidth="xs">
        <Box className={style.formContainer}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main'}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            <FormattedMessage id='app_title_signup'/>
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="fullname"
                  label={<FormattedMessage id='form_label_fullname'/>}
                  name="fullname"
                  autoComplete="fullname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label={<FormattedMessage id='form_label_email'/>}
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="password"
                    type="password"
                    label={<FormattedMessage id='form_label_password'/>}
                    name="password"
                    autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              <FormattedMessage id='app_title_signup'/>
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/login" variant="body2">
                <FormattedMessage id='form_suggest_signin'/>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
    </Container>
  )
}

export default SignUp
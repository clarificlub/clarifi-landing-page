import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  Stack,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        py: 4,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at top right, rgba(33, 150, 243, 0.1), transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6} alignItems="center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                fontWeight: 700,
                color: '#fff',
                mb: 2,
                background: 'linear-gradient(45deg, #2196f3, #f50057)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Clarifi is Coming Soon
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                mb: 4,
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Experience the future of payment management.
              Connect all your accounts, track bills, and never miss a payment.
            </Typography>
          </motion.div>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ width: '100%', maxWidth: '500px' }}
          >
            <Stack spacing={2}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 2,
                  '& .MuiOutlinedInput-root': {
                    color: '#fff',
                    height: '56px',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#2196f3',
                    },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  height: '56px',
                  background: 'linear-gradient(45deg, #2196f3, #f50057)',
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  fontWeight: 600,
                  '&:hover': {
                    background: 'linear-gradient(45deg, #1976d2, #dc004e)',
                  },
                }}
              >
                Notify Me
              </Button>
            </Stack>
          </Box>

          {submitted && (
            <Alert 
              severity="success"
              sx={{
                bgcolor: 'rgba(46, 125, 50, 0.1)',
                color: '#fff',
                '& .MuiAlert-icon': {
                  color: '#4caf50',
                },
              }}
            >
              Thanks for signing up! We'll notify you when we launch.
            </Alert>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
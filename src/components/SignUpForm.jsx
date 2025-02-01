import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Alert, Snackbar } from '@mui/material';
import { motion } from 'framer-motion';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email');
      return;
    }
    // TODO: Integrate with backend API
    setOpen(true);
    setEmail('');
    setError('');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: '100%',
        maxWidth: '500px',
        mx: 'auto',
        mt: 3,
      }}
    >
      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={Boolean(error)}
          helperText={error}
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '30px',
              '&:hover': {
                '& > fieldset': {
                  borderColor: 'primary.main',
                },
              },
            },
          }}
        />
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{
              borderRadius: '30px',
              px: 4,
              py: 2,
              background: 'linear-gradient(45deg, #ff4081 30%, #ff6e40 90%)',
              boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
              whiteSpace: 'nowrap',
            }}
          >
            Notify Me
          </Button>
        </motion.div>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Thanks for signing up! We'll notify you when we launch.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SignUpForm;
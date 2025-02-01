import React from 'react';
import { Box, Container, Typography, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AppDownload = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Box
      sx={{
        py: 12,
        background: '#f5f5f5',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <Stack spacing={6} alignItems="center" textAlign="center">
            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '3rem' },
                  color: 'primary.main',
                  mb: 2,
                }}
              >
                Get Started with Clarifi
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'text.secondary',
                  maxWidth: '800px',
                  mx: 'auto',
                  mb: 4,
                }}
              >
                see it. own it. achieve it.
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={5}>
                  <Box
                    sx={{
                      p: 4,
                      bgcolor: 'white',
                      borderRadius: '20px',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    }}
                  >
                    <Typography variant="h6" sx={{ mb: 2 }}>
                      iOS App
                    </Typography>
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://apps.apple.com/app/clarifi"
                      alt="iOS App QR Code"
                      style={{ width: '200px', height: '200px', marginBottom: '16px' }}
                    />
                    <img
                      src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                      alt="Download on App Store"
                      style={{ height: '40px' }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Box
                    sx={{
                      p: 4,
                      bgcolor: 'white',
                      borderRadius: '20px',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    }}
                  >
                    <Typography variant="h6" sx={{ mb: 2 }}>
                      Android App
                    </Typography>
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://play.google.com/store/apps/details?id=com.clarifi"
                      alt="Android App QR Code"
                      style={{ width: '200px', height: '200px', marginBottom: '16px' }}
                    />
                    <img
                      src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                      alt="Get it on Google Play"
                      style={{ height: '40px' }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </motion.div>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AppDownload;
import React from 'react';
import { Box, Container, Typography, Button, Stack, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CallToAction = () => {
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

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        yoyo: Infinity,
      },
    },
  };

  return (
    <Box
      sx={{
        py: 12,
        background: 'linear-gradient(45deg, #dc004e 30%, #ff4081 90%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.1,
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <Stack spacing={4} alignItems="center" textAlign="center">
            <motion.div variants={itemVariants}>
              <Paper
                elevation={0}
                sx={{
                  p: 6,
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '30px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    color: 'white',
                    fontWeight: 700,
                    fontSize: { xs: '2rem', md: '3rem' },
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    mb: 3,
                  }}
                >
                  Ready to Transform Your Business?
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    mb: 4,
                    maxWidth: '800px',
                    mx: 'auto',
                    lineHeight: 1.6,
                  }}
                >
                  Join thousands of businesses that trust our platform for their financial management needs
                </Typography>

                <motion.div variants={buttonVariants} whileHover="hover">
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      borderRadius: '28px',
                      px: 6,
                      py: 2,
                      fontSize: '1.2rem',
                      textTransform: 'none',
                      bgcolor: 'white',
                      color: 'secondary.main',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.9)',
                        boxShadow: '0 12px 20px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    Start Free Trial
                  </Button>
                </motion.div>
              </Paper>
            </motion.div>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CallToAction;
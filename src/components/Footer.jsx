import React from 'react';
import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Clarifi. All rights reserved.
          </Typography>
          
          <Stack direction="row" spacing={2}>
            <IconButton
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'text.secondary' }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'text.secondary' }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'text.secondary' }}
            >
              <GitHubIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;

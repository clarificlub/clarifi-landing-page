import React, { useState, useEffect } from 'react';
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

const BackgroundAnimation = () => {
  const [nodes, setNodes] = useState([]);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    // Create nodes
    const nodeCount = 40;
    const newNodes = Array.from({ length: nodeCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 2,
      velocity: {
        x: (Math.random() - 0.5) * 0.15,
        y: (Math.random() - 0.5) * 0.15,
      },
    }));

    // Create connections between nodes
    const newLines = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const distance = Math.hypot(
          newNodes[i].x - newNodes[j].x,
          newNodes[i].y - newNodes[j].y
        );
        if (distance < 40) {
          newLines.push({
            id: `${i}-${j}`,
            from: i,
            to: j,
            opacity: Math.max(0, 1 - distance / 40),
          });
        }
      }
    }

    setNodes(newNodes);
    setLines(newLines);

    // Update node positions periodically
    const interval = setInterval(() => {
      setNodes(prevNodes =>
        prevNodes.map(node => ({
          ...node,
          x: ((node.x + node.velocity.x + 100) % 100),
          y: ((node.y + node.velocity.y + 100) % 100),
        }))
      );
    }, 50); // Update every 50ms for smooth animation

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      {/* Lines between nodes */}
      {lines.map((line) => {
        const fromNode = nodes[line.from];
        const toNode = nodes[line.to];
        return (
          <motion.div
            key={line.id}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              opacity: line.opacity * 0.3,
            }}
            initial={false}
          >
            <svg
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
              }}
            >
              <line
                x1={`${fromNode.x}%`}
                y1={`${fromNode.y}%`}
                x2={`${toNode.x}%`}
                y2={`${toNode.y}%`}
                stroke="#2196f3"
                strokeWidth="1"
              />
            </svg>
          </motion.div>
        );
      })}

      {/* Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          style={{
            position: 'absolute',
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: `${node.size}px`,
            height: `${node.size}px`,
            background: 'linear-gradient(45deg, #2196f3, #f50057)',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            x: [
              `${node.velocity.x * 100}%`,
              `${-node.velocity.x * 100}%`,
              `${node.velocity.x * 100}%`,
            ],
            y: [
              `${node.velocity.y * 100}%`,
              `${-node.velocity.y * 100}%`,
              `${node.velocity.y * 100}%`,
            ],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Gradient Overlays */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at top right, rgba(33, 150, 243, 0.15), transparent 70%)',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at bottom left, rgba(245, 0, 87, 0.1), transparent 70%)',
          zIndex: 1,
        }}
      />
    </Box>
  );
};

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
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <BackgroundAnimation />

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
                fontWeight: 700,
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                background: 'linear-gradient(45deg, #2196f3, #f50057)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
                textAlign: 'center',
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
                textAlign: 'center',
              }}
            >
              Experience the future of payment management.
              Connect all your accounts, track bills, and never miss a payment.
            </Typography>
          </motion.div>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              width: '100%',
              maxWidth: '560px',
              position: 'relative',
              zIndex: 2,
              mx: 'auto',
            }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              alignItems="center"
              sx={{
                width: '100%',
                bgcolor: 'rgba(255, 255, 255, 0.03)',
                borderRadius: 2,
                p: 0.5,
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  flex: { xs: '1', sm: '1 1 auto' },
                  '& .MuiOutlinedInput-root': {
                    height: '54px',
                    bgcolor: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: 1.5,
                    color: '#fff',
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
                  '& .MuiOutlinedInput-input': {
                    px: 2,
                    '&::placeholder': {
                      color: 'rgba(255, 255, 255, 0.5)',
                      opacity: 1,
                    },
                  },
                }}
                InputProps={{
                  sx: {
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.05)',
                    },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  height: '54px',
                  background: 'linear-gradient(45deg, #2196f3, #f50057)',
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  fontWeight: 600,
                  px: { xs: 6, sm: 4 },
                  flex: { xs: '1', sm: '0 0 auto' },
                  minWidth: { xs: '100%', sm: '160px' },
                  borderRadius: 1.5,
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
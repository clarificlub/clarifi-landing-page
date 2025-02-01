import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TimelineIcon from '@mui/icons-material/Timeline';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CategoryIcon from '@mui/icons-material/Category';
import PaymentsIcon from '@mui/icons-material/Payments';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalPlayIcon from '@mui/icons-material/LocalPlay';
import AddIcon from '@mui/icons-material/Add';
import WarningIcon from '@mui/icons-material/Warning';
import SavingsIcon from '@mui/icons-material/Savings';
import UpdateIcon from '@mui/icons-material/Update';
import SecurityIcon from '@mui/icons-material/Security';

const DashboardAnimation = () => (
  <motion.div
    style={{
      width: '100%',
      height: '160px',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      perspective: '1000px',
    }}
  >
    {/* Main Dashboard Container */}
    <motion.div
      initial={{ scale: 0.8, opacity: 0, rotateX: 10 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        rotateX: [10, 5, 10],
        rotateY: [-5, 5, -5],
      }}
      transition={{ 
        duration: 0.5,
        rotateX: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotateY: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      style={{
        width: '240px',
        height: '140px',
        background: 'linear-gradient(135deg, #1e1e1e, #2d2d2d)',
        borderRadius: '16px',
        padding: '12px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
        display: 'grid',
        gridTemplateColumns: '140px 1fr',
        gridTemplateRows: '1fr 1fr',
        gap: '8px',
        transformStyle: 'preserve-3d',
        transform: 'translateZ(0)',
      }}
    >
      {/* Main Chart Section */}
      <motion.div
        style={{
          gridRow: 'span 2',
          background: 'rgba(255, 255, 255, 0.03)',
          borderRadius: '12px',
          padding: '10px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Chart Header */}
        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '8px',
          }}
        >
          <motion.div
            style={{
              width: '40px',
              height: '8px',
              background: '#2196f3',
              borderRadius: '4px',
            }}
          />
          <motion.div
            style={{
              width: '20px',
              height: '8px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '4px',
            }}
          />
        </motion.div>

        {/* Animated Line Chart */}
        <svg width="100%" height="70px" style={{ marginTop: '4px' }}>
          <motion.path
            d={`M 0 50 Q 30 45, 60 30 T 120 20`}
            fill="none"
            stroke="#2196f3"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          {/* Data Points */}
          {[
            { cx: 0, cy: 50 },
            { cx: 30, cy: 45 },
            { cx: 60, cy: 30 },
            { cx: 90, cy: 25 },
            { cx: 120, cy: 20 },
          ].map((point, index) => (
            <motion.circle
              key={index}
              cx={point.cx}
              cy={point.cy}
              r="3"
              fill="#2196f3"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: 1,
              }}
              transition={{ 
                duration: 0.5,
                delay: 0.8 + (index * 0.1),
                scale: {
                  repeat: Infinity,
                  repeatDelay: 2,
                }
              }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Top Right Widget */}
      <motion.div
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          borderRadius: '12px',
          padding: '8px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* Mini Stats */}
        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '6px',
              background: '#4caf50',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <motion.div
              style={{
                width: '12px',
                height: '12px',
                borderRight: '2px solid rgba(255, 255, 255, 0.9)',
                borderTop: '2px solid rgba(255, 255, 255, 0.9)',
                transform: 'rotate(45deg)',
              }}
            />
          </motion.div>
        </motion.div>

        {/* Mini Bar Chart */}
        <motion.div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: '3px',
            height: '20px',
          }}
        >
          {[0.4, 0.6, 0.8, 0.5, 0.7].map((height, index) => (
            <motion.div
              key={index}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
              style={{
                width: '4px',
                height: `${height * 100}%`,
                background: '#ff9800',
                borderRadius: '2px',
                transformOrigin: 'bottom',
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom Right Widget */}
      <motion.div
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          borderRadius: '12px',
          padding: '8px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Circular Progress */}
        <svg width="100%" height="100%" viewBox="0 0 36 36">
          <motion.circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="3"
          />
          <motion.circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            stroke="#f50057"
            strokeWidth="3"
            strokeDasharray="100"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 35 }}
            transition={{ 
              duration: 1.5,
              delay: 1.2,
            }}
            transform="rotate(-90 18 18)"
          />
          {/* Animated Dots around circle */}
          {[0, 60, 120, 180, 240, 300].map((angle, index) => (
            <motion.circle
              key={index}
              cx={18 + Math.cos(angle * Math.PI / 180) * 16}
              cy={18 + Math.sin(angle * Math.PI / 180) * 16}
              r="1.5"
              fill="#f50057"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: 1.5 + (index * 0.2),
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Floating Notification */}
      <motion.div
        initial={{ opacity: 0, y: 20, x: 40 }}
        animate={{ 
          opacity: [0, 1, 1, 0],
          y: [20, 0, 0, -20],
          x: [40, 0, 0, -40],
        }}
        transition={{
          duration: 3,
          delay: 2,
          repeat: Infinity,
          repeatDelay: 1,
        }}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'rgba(33, 150, 243, 0.9)',
          borderRadius: '8px',
          padding: '4px 8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        <motion.div
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#fff',
          }}
        />
        <motion.div
          style={{
            width: '20px',
            height: '4px',
            borderRadius: '2px',
            background: 'rgba(255, 255, 255, 0.8)',
          }}
        />
      </motion.div>

      {/* Live Update Indicator */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#4caf50',
          }}
        />
        <motion.div
          style={{
            width: '24px',
            height: '4px',
            borderRadius: '2px',
            background: 'rgba(255, 255, 255, 0.1)',
          }}
        />
      </motion.div>
    </motion.div>
  </motion.div>
);

const AnalyticsAnimation = () => (
  <motion.div
    style={{
      width: '100%',
      height: '160px',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <motion.div
      style={{
        width: '280px',
        height: '140px',
        background: 'linear-gradient(135deg, #1a237e, #0d47a1)',
        borderRadius: '16px',
        padding: '16px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(13, 71, 161, 0.3)',
      }}
    >
      {/* Income Bar Chart */}
      <motion.div
        style={{
          position: 'absolute',
          left: '16px',
          bottom: '16px',
          width: '120px',
          height: '60px',
          display: 'flex',
          alignItems: 'flex-end',
          gap: '6px',
        }}
      >
        {[0.6, 0.8, 0.7, 0.9, 0.75, 0.85].map((height, index) => (
          <motion.div
            key={`income-${index}`}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut"
            }}
            style={{
              width: '14px',
              height: `${height * 100}%`,
              background: 'linear-gradient(180deg, #4caf50 0%, #2e7d32 100%)',
              borderRadius: '4px',
              transformOrigin: 'bottom',
            }}
          >
            <motion.div
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
              }}
              style={{
                width: '100%',
                height: '30%',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '4px 4px 0 0',
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Spending Line Chart */}
      <motion.div
        style={{
          position: 'absolute',
          right: '16px',
          top: '16px',
          width: '120px',
          height: '60px',
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 120 60">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f50057" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#f50057" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 0 30 C 20 40, 40 20, 60 35 S 100 25, 120 15"
            fill="none"
            stroke="#f50057"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M 0 30 C 20 40, 40 20, 60 35 S 100 25, 120 15 L 120 60 L 0 60 Z"
            fill="url(#lineGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
          {/* Data Points */}
          {[30, 40, 20, 35, 25, 15].map((y, index) => (
            <motion.circle
              key={`point-${index}`}
              cx={index * 24}
              cy={y}
              r="4"
              fill="#fff"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Percentage Indicators */}
      <motion.div
        style={{
          position: 'absolute',
          right: '16px',
          bottom: '16px',
          display: 'flex',
          gap: '12px',
        }}
      >
        {['+24%', '-12%'].map((value, index) => (
          <motion.div
            key={`percent-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 + index * 0.2 }}
            style={{
              padding: '4px 8px',
              borderRadius: '12px',
              background: index === 0 ? 'rgba(76, 175, 80, 0.2)' : 'rgba(244, 67, 54, 0.2)',
              color: index === 0 ? '#4caf50' : '#f44336',
              fontSize: '12px',
              fontWeight: 'bold',
            }}
          >
            {value}
          </motion.div>
        ))}
      </motion.div>

      {/* Legend Labels */}
      <motion.div
        style={{
          position: 'absolute',
          left: '16px',
          top: '16px',
          display: 'flex',
          gap: '12px',
        }}
      >
        {[
          { label: 'Income', color: '#4caf50' },
          { label: 'Spending', color: '#f50057' }
        ].map((item, index) => (
          <motion.div
            key={`legend-${index}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <motion.div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: item.color,
              }}
            />
            <span style={{ color: '#fff', fontSize: '12px' }}>
              {item.label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Animated Gradient Overlay */}
      <motion.div
        animate={{
          background: [
            'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
            'linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 100%)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
        }}
      />
    </motion.div>
  </motion.div>
);

const CreditCardAnimation = () => (
  <motion.div
    style={{
      width: '100%',
      height: '160px',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      perspective: '1000px',
    }}
  >
    {/* Background Glow */}
    <motion.div
      animate={{
        opacity: [0.2, 0.4, 0.2],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        position: 'absolute',
        width: '240px',
        height: '150px',
        background: 'radial-gradient(circle, rgba(33, 150, 243, 0.2) 0%, transparent 70%)',
        borderRadius: '20px',
        filter: 'blur(15px)',
      }}
    />

    {/* Background Card */}
    <motion.div
      initial={{ scale: 0.8, y: 40, opacity: 0, rotateY: -15 }}
      animate={{ scale: 1, y: 0, opacity: 0.3, rotateY: -15 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      style={{
        position: 'absolute',
        width: '220px',
        height: '140px',
        background: 'linear-gradient(135deg, #1565c0, #0d47a1)',
        borderRadius: '20px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        transformStyle: 'preserve-3d',
      }}
    />
    
    {/* Main Card */}
    <motion.div
      initial={{ scale: 0.8, opacity: 0, rotateY: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        rotateY: [0, 5, 0, -5, 0],
      }}
      transition={{ 
        duration: 0.5,
        rotateY: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }
      }}
      style={{
        position: 'relative',
        width: '220px',
        height: '140px',
        background: 'linear-gradient(135deg, #2196f3, #1976d2)',
        borderRadius: '20px',
        padding: '20px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Holographic Effect */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
          backgroundSize: '200% 100%',
          borderRadius: '20px',
        }}
      />

      {/* Card Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '25px',
        }}
      >
        <motion.div
          animate={{
            rotateY: [0, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          <CreditCardIcon sx={{ 
            fontSize: 28, 
            color: '#fff',
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))',
          }} />
        </motion.div>
        <Typography
          variant="subtitle2"
          sx={{
            color: 'rgba(255, 255, 255, 0.95)',
            fontWeight: 700,
            letterSpacing: '2px',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          }}
        >
          CLARIFI
        </Typography>
      </motion.div>

      {/* EMV Chip */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        style={{
          position: 'absolute',
          top: '50px',
          left: '20px',
          width: '40px',
          height: '30px',
          background: 'linear-gradient(45deg, #FFD700, #FFA500)',
          borderRadius: '6px',
          overflow: 'hidden',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Chip Details */}
        <div style={{
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(90deg, transparent 50%, rgba(255, 255, 255, 0.15) 50%),
            linear-gradient(0deg, transparent 50%, rgba(255, 255, 255, 0.15) 50%)
          `,
          backgroundSize: '6px 6px',
        }} />
        <motion.div
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
          }}
        />
      </motion.div>
      
      {/* Card Number */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '45px',
          left: '20px',
          right: '20px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {[1, 2, 3, 4].map((group, i) => (
          <motion.div
            key={group}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + (i * 0.1) }}
            style={{ display: 'flex', gap: '3px' }}
          >
            {[1, 2, 3, 4].map((num) => (
              <motion.div
                key={num}
                style={{
                  width: '7px',
                  height: '7px',
                  background: '#fff',
                  borderRadius: '50%',
                  opacity: 0.95,
                  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
                }}
              />
            ))}
          </motion.div>
        ))}
      </motion.div>

      {/* Card Details */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          right: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <div>
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '7px',
              letterSpacing: '1px',
              display: 'block',
              marginBottom: '2px',
            }}
          >
            VALID THRU
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255, 255, 255, 0.95)',
              fontSize: '12px',
              letterSpacing: '2px',
              fontWeight: 600,
            }}
          >
            12/28
          </Typography>
        </div>
        <div style={{ textAlign: 'right' }}>
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '7px',
              letterSpacing: '1px',
              display: 'block',
              marginBottom: '2px',
            }}
          >
            CVV
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255, 255, 255, 0.95)',
              fontSize: '12px',
              letterSpacing: '2px',
              fontWeight: 600,
            }}
          >
            •••
          </Typography>
        </div>
      </motion.div>

      {/* Contactless Payment Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{ delay: 0.6 }}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          width: '24px',
          height: '24px',
        }}
      >
        <motion.svg 
          viewBox="0 0 24 24" 
          fill="white"
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path d="M12 6.5c-2.49 0-4 2.02-4 4.5v6h2v-6c0-1.66.84-2.5 2-2.5s2 .84 2 2.5v6h2v-6c0-2.48-1.51-4.5-4-4.5z" />
          <path d="M12 3.5c-3.89 0-7 3.11-7 7v6h2v-6c0-2.76 2.24-5 5-5s5 2.24 5 5v6h2v-6c0-3.89-3.11-7-7-7z" opacity="0.3" />
          <path d="M12 0.5c-5.52 0-10 4.48-10 10v6h2v-6c0-4.41 3.59-8 8-8s8 3.59 8 8v6h2v-6c0-5.52-4.48-10-10-10z" opacity="0.1" />
        </motion.svg>
      </motion.div>

      {/* Network Logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          width: '40px',
          height: '25px',
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '4px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: '#1976d2',
            fontSize: '8px',
            fontWeight: 800,
            letterSpacing: '0.5px',
          }}
        >
          VISA
        </Typography>
      </motion.div>
    </motion.div>
  </motion.div>
);

const CategoryTrackingAnimation = () => {
  const categories = [
    { name: 'Food & Dining', color: '#ff9800', icon: <RestaurantIcon sx={{ fontSize: 16 }} />, percent: 35 },
    { name: 'Shopping', color: '#e91e63', icon: <ShoppingBagIcon sx={{ fontSize: 16 }} />, percent: 25 },
    { name: 'Transport', color: '#2196f3', icon: <DirectionsCarIcon sx={{ fontSize: 16 }} />, percent: 20 },
    { name: 'Entertainment', color: '#4caf50', icon: <LocalPlayIcon sx={{ fontSize: 16 }} />, percent: 20 },
  ];

  return (
    <motion.div
      style={{
        width: '100%',
        height: '160px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <motion.div
        style={{
          width: '280px',
          height: '140px',
          background: 'linear-gradient(135deg, #2c3e50, #34495e)',
          borderRadius: '16px',
          padding: '16px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(44, 62, 80, 0.3)',
          display: 'flex',
          gap: '16px',
        }}
      >
        {/* Donut Chart */}
        <motion.div
          style={{
            width: '100px',
            height: '100px',
            position: 'relative',
          }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="8"
            />
            {categories.map((category, index) => {
              const prevPercents = categories
                .slice(0, index)
                .reduce((sum, cat) => sum + cat.percent, 0);
              const offset = (prevPercents / 100) * 251.2;
              const length = (category.percent / 100) * 251.2;

              return (
                <motion.circle
                  key={category.name}
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={category.color}
                  strokeWidth="8"
                  strokeDasharray={`${length} 251.2`}
                  strokeDashoffset={-offset}
                  initial={{ strokeDashoffset: 251.2 - offset }}
                  animate={{ strokeDashoffset: -offset }}
                  transition={{
                    duration: 1,
                    delay: index * 0.2,
                    ease: "easeOut"
                  }}
                  transform="rotate(-90 50 50)"
                />
              );
            })}
            {/* Center Pulse */}
            <motion.circle
              cx="50"
              cy="50"
              r="32"
              fill="rgba(255, 255, 255, 0.1)"
              animate={{
                r: [32, 34, 32],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
          
          {/* Live Update Indicator */}
          <motion.div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#4caf50',
              }}
            />
            <motion.div
              style={{
                color: '#fff',
                fontSize: '12px',
                opacity: 0.8,
              }}
            >
              LIVE
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Category List */}
        <motion.div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.5 + index * 0.1,
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              {/* Category Icon */}
              <motion.div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '8px',
                  background: category.color,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#fff',
                }}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.2,
                  repeat: Infinity,
                }}
              >
                {category.icon}
              </motion.div>

              {/* Category Info */}
              <motion.div
                style={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ color: '#fff', fontSize: '12px' }}>
                  {category.name}
                </span>
                <motion.span
                  style={{ color: category.color, fontSize: '12px', fontWeight: 'bold' }}
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  {category.percent}%
                </motion.span>
              </motion.div>
            </motion.div>
          ))}

          {/* New Transaction Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [20, 0, 0, -20],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 1,
            }}
            style={{
              position: 'absolute',
              bottom: '12px',
              right: '12px',
              background: 'rgba(76, 175, 80, 0.2)',
              borderRadius: '8px',
              padding: '4px 8px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <AddIcon sx={{ fontSize: 12, color: '#4caf50' }} />
            <span style={{ color: '#4caf50', fontSize: '10px', fontWeight: 'bold' }}>
              New Transaction
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const GamificationAnimation = () => (
  <motion.div
    style={{
      width: '100%',
      height: '160px',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotateY: [0, 360],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      style={{
        position: 'relative',
        width: '100px',
        height: '100px',
      }}
    >
      <TimelineIcon 
        sx={{ 
          fontSize: 64, 
          color: '#2196f3',
          filter: 'drop-shadow(0 4px 8px rgba(33, 150, 243, 0.3))',
        }} 
      />
      
      {/* Sparkles */}
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1,
            delay: i * 0.2,
            repeat: Infinity,
          }}
          style={{
            position: 'absolute',
            width: '10px',
            height: '10px',
            background: '#2196f3',
            borderRadius: '50%',
            top: '50%',
            left: '50%',
            transform: `rotate(${angle}deg) translate(40px, 0)`,
          }}
        />
      ))}
    </motion.div>
  </motion.div>
);

const PaymentProcessingAnimation = () => (
  <motion.div
    style={{
      width: '100%',
      height: '160px',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      perspective: '1000px',
    }}
  >
    {/* Main Container */}
    <motion.div
      style={{
        width: '280px',
        height: '140px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
      }}
    >
      {/* Source Payment System */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, #1e88e5, #1565c0)',
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 8px 16px rgba(21, 101, 192, 0.3)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '8px',
          }}
        >
          <AccountBalanceIcon sx={{ fontSize: 20, color: '#1565c0' }} />
        </motion.div>
        <motion.div
          style={{
            width: '40px',
            height: '4px',
            background: 'rgba(255, 255, 255, 0.6)',
            borderRadius: '2px',
          }}
        />
      </motion.div>

      {/* Payment Flow Animation */}
      <motion.div
        style={{
          flex: 1,
          height: '100%',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Connection Lines */}
        <svg
          width="100%"
          height="4"
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          <motion.line
            x1="0"
            y1="2"
            x2="100%"
            y2="2"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="2"
          />
        </svg>

        {/* Animated Payment Packets */}
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            initial={{ x: -60, opacity: 0, scale: 0.8 }}
            animate={{
              x: 60,
              opacity: [0, 1, 1, 0],
              scale: [0.8, 1, 1, 0.8],
            }}
            transition={{
              duration: 2,
              delay: index * 0.6,
              repeat: Infinity,
              repeatDelay: 1,
            }}
            style={{
              position: 'absolute',
              width: '24px',
              height: '24px',
              background: 'linear-gradient(135deg, #4caf50, #2e7d32)',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(76, 175, 80, 0.3)',
            }}
          >
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
              style={{
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.8), transparent)',
              }}
            />
          </motion.div>
        ))}

        {/* Processing Indicators */}
        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {[0, 120, 240].map((angle, index) => (
            <motion.div
              key={index}
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 1.5,
                  delay: index * 0.2,
                  repeat: Infinity,
                },
              }}
              style={{
                position: 'absolute',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '2px solid rgba(255, 255, 255, 0.1)',
                borderTopColor: '#64b5f6',
                transform: `rotate(${angle}deg)`,
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Target Payment System */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, #7cb342, #558b2f)',
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 8px 16px rgba(124, 179, 66, 0.3)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '8px',
          }}
        >
          <PaymentsIcon sx={{ fontSize: 20, color: '#558b2f' }} />
        </motion.div>
        <motion.div
          style={{
            width: '40px',
            height: '4px',
            background: 'rgba(255, 255, 255, 0.6)',
            borderRadius: '2px',
          }}
        />
      </motion.div>

      {/* Success Indicators */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0, 1, 1, 0],
          y: [0, -20, -20, -40],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
        }}
        style={{
          position: 'absolute',
          top: '50%',
          right: '20px',
          background: '#4caf50',
          borderRadius: '12px',
          padding: '4px 8px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          boxShadow: '0 4px 8px rgba(76, 175, 80, 0.3)',
        }}
      >
        <CheckCircleIcon sx={{ fontSize: 16, color: '#fff' }} />
        <motion.div
          style={{
            width: '20px',
            height: '3px',
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '2px',
          }}
        />
      </motion.div>
    </motion.div>
  </motion.div>
);

const NotificationAnimation = () => {
  const alerts = [
    {
      type: 'warning',
      icon: <WarningIcon sx={{ fontSize: 16 }} />,
      color: '#ff9800',
      message: 'Unusual spending detected',
      subtext: 'Shopping category',
    },
    {
      type: 'success',
      icon: <SavingsIcon sx={{ fontSize: 16 }} />,
      color: '#4caf50',
      message: 'Savings goal reached',
      subtext: 'Vacation fund',
    },
    {
      type: 'info',
      icon: <UpdateIcon sx={{ fontSize: 16 }} />,
      color: '#2196f3',
      message: 'Bill payment upcoming',
      subtext: 'Due in 2 days',
    },
    {
      type: 'alert',
      icon: <SecurityIcon sx={{ fontSize: 16 }} />,
      color: '#f44336',
      message: 'Security alert',
      subtext: 'New device login',
    },
  ];

  return (
    <motion.div
      style={{
        width: '100%',
        height: '160px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <motion.div
        style={{
          width: '280px',
          height: '140px',
          background: 'linear-gradient(135deg, #1a237e, #311b92)',
          borderRadius: '16px',
          padding: '16px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(26, 35, 126, 0.3)',
        }}
      >
        {/* Alert Bell with Rings */}
        <motion.div
          style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <motion.div
            animate={{
              rotate: [-10, 10, -10],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            <NotificationsIcon sx={{ fontSize: 24, color: '#fff' }} />
          </motion.div>
          {/* Notification Rings */}
          {[0, 1, 2].map((index) => (
            <motion.div
              key={`ring-${index}`}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                border: '2px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
              }}
              animate={{
                scale: [1, 1.5, 1.5],
                opacity: [0.5, 0, 0],
              }}
              transition={{
                duration: 2,
                delay: index * 0.6,
                repeat: Infinity,
              }}
            />
          ))}
        </motion.div>

        {/* Alert Counter */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            position: 'absolute',
            top: '12px',
            left: '48px',
            background: '#f50057',
            borderRadius: '10px',
            padding: '2px 6px',
            color: '#fff',
            fontSize: '10px',
            fontWeight: 'bold',
          }}
        >
          4 New
        </motion.div>

        {/* Alert List */}
        <motion.div
          style={{
            marginTop: '48px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          {alerts.map((alert, index) => (
            <motion.div
              key={alert.type}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.1,
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '8px 12px',
              }}
            >
              {/* Alert Icon */}
              <motion.div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '8px',
                  background: `${alert.color}20`,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: alert.color,
                }}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.2,
                  repeat: Infinity,
                }}
              >
                {alert.icon}
              </motion.div>

              {/* Alert Content */}
              <motion.div
                style={{
                  flex: 1,
                }}
              >
                <motion.div
                  style={{
                    color: '#fff',
                    fontSize: '12px',
                    fontWeight: '500',
                  }}
                >
                  {alert.message}
                </motion.div>
                <motion.div
                  style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: '10px',
                    marginTop: '2px',
                  }}
                >
                  {alert.subtext}
                </motion.div>
              </motion.div>

              {/* New Tag */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                style={{
                  background: `${alert.color}20`,
                  color: alert.color,
                  fontSize: '10px',
                  padding: '2px 6px',
                  borderRadius: '8px',
                  fontWeight: '500',
                }}
              >
                New
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Background Gradient */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%)',
              'radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%)',
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const featureAnimations = {
  analytics: AnalyticsAnimation,
  'credit-card': CreditCardAnimation,
  category: CategoryTrackingAnimation,
  payments: PaymentProcessingAnimation,
  notifications: NotificationAnimation,
  dashboard: DashboardAnimation,
};

const FeatureCard = ({ icon, title, description, index }) => {
  const theme = useTheme();
  const AnimationComponent = featureAnimations[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        background: theme.palette.background.paper,
        borderRadius: '24px',
        padding: '24px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
      }}
    >
      <AnimationComponent />
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {description}
      </Typography>
    </motion.div>
  );
};

const features = [
  {
    icon: 'dashboard',
    title: 'Unified Dashboard',
    description: 'View all your balances, transactions, and payment due dates in one place. Track weekly and monthly trends in your spending and savings with intuitive visualizations.',
  },
  {
    icon: 'analytics',
    title: 'Spending & Income Analytics',
    description: 'Deep dive into your finances with categorized expenses and income patterns. Get actionable insights into your spending behavior and savings opportunities.',
  },
  {
    icon: 'credit-card',
    title: 'Credit Card Management',
    description: 'Monitor outstanding balances, minimum dues, and credit utilization in real-time. Never miss a payment with smart due date tracking.',
  },
  {
    icon: 'category',
    title: 'Real-Time Category Tracking',
    description: 'Track spending across specific categories as it happens. Get instant visibility into your category-wise expenses and budget utilization.',
  },
  {
    icon: 'payments',
    title: 'Payment Processing',
    description: 'Pay your credit card bills directly through the app with multiple secure payment gateway options. Quick, safe, and hassle-free.',
  },
  {
    icon: 'notifications',
    title: 'Smart Alerts',
    description: 'Stay informed with timely payment reminders and instant alerts for unusual transactions. Keep your finances secure and on track.',
  },
];

const Features = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 3 },
        width: '100%',
        background: 'linear-gradient(180deg, #000000 0%, #0A0A0A 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 2,
              background: 'linear-gradient(45deg, #2196f3, #f50057)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Features
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            sx={{ 
              mb: { xs: 6, md: 8 },
              maxWidth: '800px',
              mx: 'auto',
              px: { xs: 2, md: 0 },
            }}
          >
            Experience the future of financial management with our powerful features
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={6} key={feature.title}>
              <FeatureCard {...feature} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
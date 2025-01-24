"use client";
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Clock, VideoIcon, UserPlus, Loader2, Bookmark } from 'lucide-react';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const MeetingJoinCard = ({ 
  title = 'Team Sync', 
  timeLeft, // Now fully controlled by parent component
  onTimeChange,
  onJoin = () => {},
  zoomLink = '', 
  meetingDetails = {}, 
  variant = 'default',
  className 
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('idle');
  const [isTimerPaused, setIsTimerPaused] = useState(false);

  useEffect(() => {
    let intervalId;

    if (!isTimerPaused && timeLeft > 0) {
      intervalId = setInterval(() => {
        if (onTimeChange) {
          onTimeChange((prevTime) => {
            if (prevTime <= 1) {
              clearInterval(intervalId);
              return 0;
            }
            return prevTime - 1;
          });
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isTimerPaused, timeLeft, onTimeChange]);

  const formattedTime = useMemo(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, [timeLeft]);

  const handleJoinMeeting = useCallback(async () => {
    setIsLoading(true);
    setStatus('loading');

    try {
      await onJoin();
      setStatus('success');
    } catch (error) {
      console.error('Error joining meeting:', error);
      setStatus('error');
    } finally {
      setTimeout(() => {
        setIsLoading(false);
        setStatus('idle');
      }, 1500);
    }
  }, [onJoin]);

  const handleBookmarkEvent = () => {
    const { 
      title: eventTitle = 'Meeting', 
      startTime, 
      endTime, 
      description = '', 
      location = '' 
    } = meetingDetails;

    const googleCalendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${encodeURIComponent(startTime)}/${encodeURIComponent(endTime)}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`;

    window.open(googleCalendarLink, '_blank');
  };

  const progressPercentage = ((timeLeft / timeLeft) * 100);

  const variants = {
    default: {
      bg: 'bg-black/80 backdrop-blur-lg border-gray-800',
      text: 'text-white',
      progressBg: 'bg-white/20',
      progressFill: 'bg-white'
    },
    modern: {
      bg: 'bg-gradient-to-br from-[#1E1E1E] to-[#2C2C2C] border-gray-700',
      text: 'text-gray-100',
      progressBg: 'bg-white/10',
      progressFill: 'bg-emerald-500'
    }
  };

  const currentVariant = variants[variant] || variants.default;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        `w-full max-w-md rounded-3xl shadow-2xl p-6 space-y-6 relative overflow-hidden`,
        currentVariant.bg,
        currentVariant.text,
        className
      )}
    >
      <div 
        className={`absolute left-0 bottom-0 h-1 ${currentVariant.progressBg}`} 
        style={{ width: '100%' }}
      >
        <motion.div 
          className={`h-full ${currentVariant.progressFill}`}
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>

      <div className="flex items-center justify-between relative z-10">
        <motion.h2 
          className="text-3xl font-bold tracking-tight"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {title}
        </motion.h2>
        <div className="flex items-center space-x-3">
          <button 
            onClick={handleBookmarkEvent}
            className="text-gray-400 hover:text-white transition-colors"
            title="Add to Google Calendar"
          >
            <Bookmark className="w-7 h-7" />
          </button>
          <VideoIcon className="text-gray-400 w-7 h-7" />
        </div>
      </div>

      <motion.div 
        className={`flex items-center justify-center border rounded-xl p-4 ${currentVariant.progressBg}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center space-x-3">
          <Clock className="text-gray-400 w-6 h-6" />
          <span className="text-3xl font-mono tracking-wider">{formattedTime}</span>
          <button 
            onClick={() => setIsTimerPaused(!isTimerPaused)}
            className="ml-2 text-gray-500 hover:text-white transition-colors"
          >
            {isTimerPaused ? 'Resume' : 'Pause'}
          </button>
        </div>
      </motion.div>

      {zoomLink ? (
        <Link href={zoomLink} target="_blank" rel="noopener noreferrer">
          <motion.button
            className={`
              w-full py-4 rounded-xl 
              flex items-center justify-center 
              space-x-3 
              transition-all duration-300
              ${status === 'success' ? 'bg-emerald-500 text-white' : 'bg-white text-black'}
              hover:scale-[1.02] active:scale-[0.98]
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
            disabled={timeLeft === 0 || isLoading}
            onClick={handleJoinMeeting}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <AnimatePresence mode="wait">
              {status === 'idle' && (
                <>
                <motion.div 
                  key="join"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center space-x-2"
                  >
                  <UserPlus className="w-5 h-5" />
                  <span>Join Meeting</span>
                </motion.div>
                    </>
              )}
              
              {status === 'loading' && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center space-x-2"
                >
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Joining...</span>
                </motion.div>
              )}
              
              {status === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center space-x-2"
                >
                  <Bell className="w-5 h-5 animate-bounce" />
                  <span>Meeting Connected!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </Link>
      ) : (
        <motion.button
          className={`
            w-full py-4 rounded-xl 
            flex items-center justify-center 
            space-x-3 
            transition-all duration-300
            bg-gray-500 text-white
            cursor-not-allowed
          `}
          disabled
        >
          <span>No Meeting Link Available</span>
        </motion.button>
      )}
    </motion.div>
  );
};

export default MeetingJoinCard;
import { Mail, Phone, Github, Twitter, MapPin, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState, useRef } from 'react';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          const playPromise = audioRef.current.play();
          if (playPromise !== undefined) {
            await playPromise;
          }
          setIsPlaying(true);
        }
      } catch (error) {
        console.error("Audio playback error:", error);
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white/30 flex flex-col items-center justify-center p-6 sm:p-12 font-sans overflow-hidden">
      {/* Audio Player */}
      <audio ref={audioRef} loop>
        <source src="/phonk.mp3" type="audio/mpeg" />
      </audio>

      {/* Audio Toggle Button */}
      <button 
        onClick={togglePlay}
        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 transition-all duration-300 text-gray-300 hover:text-white flex items-center gap-2"
        aria-label="Toggle background music"
      >
        {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        <span className="text-xs font-semibold uppercase tracking-widest hidden sm:block">Phonk</span>
      </button>

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
      >
        {/* The user should upload their video into the public folder as 'background.mp4' */}
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Subtle Background Glow for the 'Aura' effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <main className="w-full max-w-3xl flex flex-col items-center z-10 relative">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center space-y-6"
        >
          <h1 className="font-display text-8xl sm:text-[10rem] leading-none tracking-tighter font-black drop-shadow-[0_0_40px_rgba(255,255,255,0.25)] lowercase">
            2sxlow.
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-300 max-w-md text-lg sm:text-xl font-light"
          >
            Digital Creator & Designer. Let's build something beautiful together.
          </motion.p>
        </motion.div>

        {/* Contact Details Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="mt-16 w-full max-w-xl grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          <ContactCard 
            icon={<Mail className="w-5 h-5" />} 
            label="Email" 
            value="2sxlow123@gmail.com" 
            href="mailto:2sxlow123@gmail.com" 
          />
          <ContactCard 
            icon={<Phone className="w-5 h-5" />} 
            label="Phone" 
            value="+1 (555) 000-0000" 
            href="tel:+15550000000" 
          />
          <ContactCard 
            icon={<Github className="w-5 h-5" />} 
            label="GitHub" 
            value="@2sxlow" 
            href="https://github.com/2sxlow" 
          />
          <ContactCard 
            icon={<Twitter className="w-5 h-5" />} 
            label="Twitter" 
            value="@2sxlow" 
            href="https://twitter.com/2sxlow" 
          />
          <ContactCard 
            icon={<DiscordIcon className="w-5 h-5" />} 
            label="Discord" 
            value="2sxlow" 
            href="https://discord.com/users/2sxlow" 
          />
          <ContactCard 
            icon={<MapPin className="w-5 h-5" />} 
            label="Location" 
            value="Tokyo, Japan" 
            href="#" 
          />
        </motion.div>
      </main>
    </div>
  );
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
    </svg>
  );
}

function ContactCard({ 
  icon, 
  label, 
  value, 
  href 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  href: string;
}) {
  return (
    <a 
      href={href}
      className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/[0.05] hover:border-white/20 transition-all duration-300 group"
    >
      <div className="p-3 rounded-full bg-white/5 text-gray-300 group-hover:bg-white group-hover:text-black transition-colors duration-300">
        {icon}
      </div>
      <div className="flex flex-col text-left">
        <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest">{label}</span>
        <span className="text-sm font-medium text-gray-200 mt-0.5 group-hover:text-white transition-colors duration-300">
          {value}
        </span>
      </div>
    </a>
  );
}

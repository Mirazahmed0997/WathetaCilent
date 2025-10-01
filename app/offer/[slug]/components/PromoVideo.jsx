'use client'
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import transitions from '@/animations/transitions'
import { Play } from 'lucide-react'
import getYoutubeVideo from '@/utils/getYoutubeVideo'

export default function PromoVideo({ url }) {
  const [isPlaying, setIsPlaying] = useState(false)

    // Memoize video ID and thumbnail generation
    const { videoId, thumbnailUrl } = useMemo(() => {
        const id = getYoutubeVideo.id(url);
        const thumbnail = getYoutubeVideo.thumbnailFHD(id);
        return { videoId: id, thumbnailUrl: thumbnail };
    }, [url]);
  return (
    <motion.div
      variants={transitions.FadeInFromBottom}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="mt-12 w-full px-6 sm:px-10"
    >
      <div className="relative w-full overflow-hidden rounded-2xl shadow-lg aspect-video">
        {!isPlaying ? (
          <div
            className="relative w-full h-full cursor-pointer group"
            onClick={() => setIsPlaying(p=> !p)}
          >
            {/* YouTube thumbnail */}
            <img
              src={thumbnailUrl}
              alt="Video Thumbnail"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white/50 group-hover:bg-white/70 shadow-lg transition">
                <Play className="w-10 h-10 text-red-600 ml-1" />
              </div>
            </div>
          </div>
        ) : (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} // autoplay on click
            title="Promotional Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </motion.div>
  )
}

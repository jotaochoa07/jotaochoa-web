import { useState } from 'react';
import { Play } from 'lucide-react';
import { trackLocalServicesEvent } from '../../lib/analytics';

type VideoKind = 'intro' | 'coti';
type VideoType = 'youtube' | 'vimeo' | 'html5';

type LocalServicesVideoProps = {
  url?: string;
  kind?: VideoKind;
  posterImage?: string;
  title?: string;
  compact?: boolean;
  playLabel?: string;
};

const getVideoType = (url: string): VideoType => {
  if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
  if (url.includes('vimeo.com')) return 'vimeo';
  return 'html5';
};

const getEmbedUrl = (url: string, type: VideoType) => {
  if (type === 'youtube') {
    const shortsMatch = url.match(/youtube\.com\/shorts\/([^?&/]+)/);
    const id = shortsMatch?.[1]
      ?? (url.includes('youtu.be/') ? url.split('youtu.be/')[1]?.split(/[?&]/)[0] : new URL(url).searchParams.get('v'));
    return id ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1` : url;
  }
  if (type === 'vimeo') {
    const id = url.split('/').filter(Boolean).pop();
    return id ? `https://player.vimeo.com/video/${id}?autoplay=1` : url;
  }
  return url;
};

export const LocalServicesVideo = ({
  url,
  kind = 'intro',
  posterImage,
  title = 'Jota explica Local Services',
  compact = false,
  playLabel = 'Reproducir video',
}: LocalServicesVideoProps) => {
  const [active, setActive] = useState(false);
  const type = url ? getVideoType(url) : undefined;
  const embedUrl = url && type ? getEmbedUrl(url, type) : undefined;
  const event = kind === 'coti' ? 'play_coti_video' : 'play_intro_video';
  const resolvedPoster = posterImage ?? (kind === 'intro' ? '/jota-avatar.png' : undefined);
  const posterClass = posterImage
    ? 'object-cover opacity-80'
    : kind === 'intro'
      ? 'max-w-[65%] object-contain object-right-bottom opacity-85'
      : 'object-cover opacity-45';

  const activate = () => {
    if (!url) return;
    setActive(true);
    trackLocalServicesEvent(event);
  };

  const player = active && embedUrl && type === 'html5' ? (
    <video controls autoPlay preload="metadata" className="h-full w-full object-cover">
      <source src={embedUrl} />
      Tu navegador no puede reproducir este video.
    </video>
  ) : active && embedUrl ? (
    <iframe
      src={embedUrl}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="h-full w-full"
    />
  ) : (
    <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_72%_42%,rgba(24,213,229,0.2),transparent_33%),linear-gradient(135deg,#061214,#010303)]">
      {resolvedPoster && <img src={resolvedPoster} alt="" loading="lazy" className={`absolute bottom-0 right-0 h-full w-full ${posterClass}`} />}
      {!posterImage && <div className="absolute inset-0 bg-gradient-to-r from-[#020607] via-[#020607]/75 to-transparent" />}
      <div className="relative z-10 flex h-full max-w-[70%] flex-col items-start justify-end p-6 sm:p-10">
        <button
          type="button"
          onClick={activate}
          disabled={!url}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f4e900] text-black shadow-[0_0_35px_rgba(244,233,0,0.28)] transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#18d5e5] disabled:cursor-default disabled:opacity-70"
          aria-label={url ? `Reproducir ${title}` : `${title}: próximamente`}
        >
          <Play size={28} fill="currentColor" aria-hidden="true" />
        </button>
        <p className="mt-5 text-lg font-black uppercase leading-tight sm:text-2xl">{url ? playLabel : 'Video próximamente'}</p>
      </div>
    </div>
  );

  if (compact) {
    return <div className="relative aspect-video overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#071012] shadow-2xl">{player}</div>;
  }

  return (
    <section id="video" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="ls-kicker">Video en preparación</span>
          <h2 className="ls-heading-soft mt-5">Tú conoces tu negocio <span className="block text-[#18d5e5]">Yo me encargo de Internet</span></h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">Estoy preparando este video para explicarte el proceso sin tecnicismos y sin que tengas que aprender herramientas raras.</p>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-white/15 bg-[#071012] shadow-2xl">{player}</div>
      </div>
    </section>
  );
};

import { Play } from 'lucide-react';
import { trackLocalServicesEvent } from '../../lib/analytics';

type VideoType = 'youtube' | 'vimeo' | 'html5';

const getVideoType = (url: string): VideoType => {
  if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
  if (url.includes('vimeo.com')) return 'vimeo';
  return 'html5';
};

const getEmbedUrl = (url: string, type: VideoType) => {
  if (type === 'youtube') {
    const id = url.includes('youtu.be/') ? url.split('youtu.be/')[1]?.split(/[?&]/)[0] : new URL(url).searchParams.get('v');
    return id ? `https://www.youtube-nocookie.com/embed/${id}` : url;
  }
  if (type === 'vimeo') {
    const id = url.split('/').filter(Boolean).pop();
    return id ? `https://player.vimeo.com/video/${id}` : url;
  }
  return url;
};

export const LocalServicesVideo = ({ url }: { url?: string }) => {
  const type = url ? getVideoType(url) : undefined;
  const embedUrl = url && type ? getEmbedUrl(url, type) : undefined;

  return (
    <section id="video" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <span className="ls-kicker">De empresario a empresario</span>
          <h2 className="ls-heading mt-5">Jota te cuenta cómo podemos poner tu negocio en Internet</h2>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-white/15 bg-[#071012] shadow-2xl">
          {embedUrl && type === 'html5' ? (
            <video controls preload="metadata" className="h-full w-full object-cover" onPlay={() => trackLocalServicesEvent('video_play')}>
              <source src={embedUrl} />
              Tu navegador no puede reproducir este video.
            </video>
          ) : embedUrl ? (
            <iframe
              src={embedUrl}
              title="Jota explica Local Services"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          ) : (
            <div className="absolute inset-0 flex items-end overflow-hidden bg-[radial-gradient(circle_at_72%_42%,rgba(24,213,229,0.2),transparent_33%),linear-gradient(135deg,#061214,#010303)] p-6 sm:p-12">
              <img src="/jota-avatar.png" alt="Ilustración de Jota Ochoa" className="absolute bottom-0 right-[-8%] h-[95%] max-w-[62%] object-contain object-bottom opacity-90 sm:right-[4%]" />
              <div className="relative z-10 max-w-lg">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#f4e900] text-black shadow-[0_0_35px_rgba(244,233,0,0.28)]">
                  <Play size={28} fill="currentColor" aria-hidden="true" />
                </div>
                <p className="max-w-xs text-xl font-black uppercase leading-tight sm:text-3xl">Video de presentación próximamente</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

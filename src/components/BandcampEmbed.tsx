interface BandcampEmbedProps {
  albumId: string;
  trackId?: string;
  width?: number;
  height?: number;
  className?: string;
}

const BandcampEmbed = ({ 
  albumId, 
  trackId, 
  width = 400, 
  height = 400,
  className = ""
}: BandcampEmbedProps) => {
  const embedUrl = trackId 
    ? `https://bandcamp.com/EmbeddedPlayer/track=${trackId}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/`
    : `https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=large/bgcol=ffffff/linkcol=e99708/tracklist=false/artwork=small/transparent=true/`;

  return (
    <div className={`bandcamp-embed ${className}`}>
      <iframe
        style={{
          border: 0,
          width: '100%',
          height: height
        }}
        src={embedUrl}
        seamless
        title="Bandcamp Player"
        allow="encrypted-media"
      />
    </div>
  );
};

export default BandcampEmbed;
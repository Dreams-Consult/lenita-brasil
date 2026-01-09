import './index.css'

interface YouTubePlayerProps {
  videoUrl: string
  orientation?: 'vertical' | 'horizontal' | 'auto'
  title?: string
  width?: string
  height?: string
  aspectRatio?: '9/16' | '16/9' | '1/1'
}

export function YouTubePlayer({ 
  videoUrl, 
  orientation = 'auto', 
  title = 'Vídeo do YouTube',
  width,
  height,
  aspectRatio
}: YouTubePlayerProps) {
  // Determina a orientação baseada no aspectRatio se orientation for 'auto'
  let finalOrientation = orientation
  if (orientation === 'auto') {
    if (aspectRatio === '9/16') {
      finalOrientation = 'vertical'
    } else if (aspectRatio === '16/9') {
      finalOrientation = 'horizontal'
    } else {
      finalOrientation = 'horizontal' // padrão
    }
  }

  return (
    <div 
      className={`youtube-player-wrapper ${finalOrientation}`}
      style={{
        width: width || undefined,
        height: height || undefined,
        aspectRatio: aspectRatio || undefined
      }}
    >
      <iframe
        src={videoUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        title={title}
        className='youtube-player-iframe'
      />
    </div>
  )
}

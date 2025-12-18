import { AnimatedGallery, GalleryItem } from './AnimatedGallery'

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    title: 'Mountain Vista',
    description: 'Breathtaking view of snow-capped mountains at sunrise',
    alt: 'Mountain landscape'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
    title: 'Forest Path',
    description: 'A serene path winding through ancient woodland',
    alt: 'Forest path'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
    title: 'Ocean Sunset',
    description: 'Golden hour over the Pacific Ocean',
    alt: 'Ocean sunset'
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800',
    title: 'Urban Nights',
    description: 'City lights reflecting on wet streets',
    alt: 'Urban scene'
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
    title: 'Misty Valley',
    description: 'Morning fog settling in a lush valley',
    alt: 'Valley with fog'
  },
]

export default function GalleryExample() {
  return (
    <div style={{ 
      minHeight: '100vh',
      background: '#343434ff',
      padding: '60px 20px',
      position: 'relative',
      zIndex: 10000
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <h1 style={{ 
          color: 'white', 
          fontSize: '2.5rem', 
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          Animated Gallery
        </h1>

        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>
            Základní použití (3 sloupce)
          </h2>
          <AnimatedGallery 
            items={galleryItems}
            columns={3}
            gap={20}
          />
        </section>
      </div>
    </div>
  )
}
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './AnimatedGallery.module.css'

export type GalleryItem = {
  id: string
  src: string
  alt?: string
  title?: string
  description?: string
}

type AnimatedGalleryProps = {
  items: GalleryItem[]
  columns?: number
  gap?: number
  aspectRatio?: string
  borderRadius?: number
  
  // Modal styling
  modalPadding?: number
  modalMaxWidth?: string
  modalMaxHeight?: string
  overlayBlur?: number
  overlayColor?: string
  
  // Animations
  hoverScale?: number
  transitionDuration?: number
  
  onImageClick?: (item: GalleryItem) => void
  onModalClose?: () => void
}

export function AnimatedGallery({
  items,
  columns = 3,
  gap = 16,
  aspectRatio = '1/1',
  borderRadius = 12,
  
  modalPadding = 40,
  modalMaxWidth = '90vw',
  modalMaxHeight = '90vh',
  overlayBlur = 10,
  overlayColor = 'rgba(0, 0, 0, 0.8)',
  
  hoverScale = 1.05,
  transitionDuration = 0.4,
  
  onImageClick,
  onModalClose,
}: AnimatedGalleryProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  
  const selectedItem = items.find(item => item.id === selectedId)
  
  const handleImageClick = (item: GalleryItem) => {
    setSelectedId(item.id)
    onImageClick?.(item)
  }
  
  const handleClose = () => {
    setSelectedId(null)
    onModalClose?.()
  }

  return (
    <>
      <div 
        className={styles.gallery}
        style={{
          '--columns': columns,
          '--gap': `${gap}px`,
          '--aspect-ratio': aspectRatio,
          '--border-radius': `${borderRadius}px`,
          '--hover-scale': hoverScale,
        } as React.CSSProperties}
      >
        <AnimatePresence initial={false}>
          {items.map((item) => (
            !selectedId || selectedId !== item.id ? (
              <motion.div
                key={item.id}
                layoutId={`card-${item.id}`}
                className={styles.item}
                onClick={() => handleImageClick(item)}
                whileHover={{ scale: hoverScale }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }}
              >
                <img 
                  src={item.src} 
                  alt={item.alt || item.title || 'Gallery image'}
                  className={styles.image}
                />
                {item.title && (
                  <div className={styles.overlay}>
                    <h3 className={styles.title}>{item.title}</h3>
                  </div>
                )}
              </motion.div>
            ) : null
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedId && selectedItem && (
          <>
            <motion.div
              className={styles.modalOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={handleClose}
              style={{
                '--overlay-color': overlayColor,
                '--overlay-blur': `${overlayBlur}px`,
              } as React.CSSProperties}
            />
            
            <div className={styles.modalContainer}>
              <motion.div
                layoutId={`card-${selectedId}`}
                className={styles.modalContent}
                style={{
                  '--modal-padding': `${modalPadding}px`,
                  '--modal-max-width': modalMaxWidth,
                  '--modal-max-height': modalMaxHeight,
                  '--border-radius': `${borderRadius * 1.5}px`,
                  zIndex: 12000
                } as React.CSSProperties}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  className={styles.closeButton}
                  onClick={handleClose}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  ✕
                </motion.button>
                
                <img 
                  src={selectedItem.src}
                  alt={selectedItem.alt || selectedItem.title || 'Gallery image'}
                  className={styles.modalImage}
                />
                
                {(selectedItem.title || selectedItem.description) && (
                  <motion.div 
                    className={styles.modalInfo}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.15 }}
                  >
                    {selectedItem.title && (
                      <h2 className={styles.modalTitle}>{selectedItem.title}</h2>
                    )}
                    {selectedItem.description && (
                      <p className={styles.modalDescription}>{selectedItem.description}</p>
                    )}
                  </motion.div>
                )}
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
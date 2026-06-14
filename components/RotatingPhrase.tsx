'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const PHRASES = [
  'alimento que contiene',
  'sabor que conserva',
  'bien que almacena',
  'usuario que lo consume',
]

export default function RotatingPhrase() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % PHRASES.length), 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.em
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {PHRASES[index]}
        </motion.em>
      </AnimatePresence>
      {'.'}
    </>
  )
}

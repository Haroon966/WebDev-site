'use client'

import { motion, Variants } from 'framer-motion'
import {
  Rocket,
  ArrowUpRight,
  Globe,
  Mail,
  Phone,
  Palette,
  Code,
  Smartphone,
  Search,
  Zap,
  Wrench,
  ArrowUp,
  Instagram,
  Github,
  Menu,
  X,
  LucideIcon,
} from 'lucide-react'
import { forwardRef } from 'react'

// Animation variants for different icon types
const rocketVariants: Variants = {
  animate: {
    x: [0, 0, -3, 2, -2, 1, -1, 0],
    y: [0, -3, 0, -2, -3, -1, -2, 0],
    transition: {
      duration: 6,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
}

const arrowVariants: Variants = {
  animate: {
    x: [0, 4, 0],
    y: [0, -4, 0],
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
}

const floatVariants: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
}

const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
}

const rotateVariants: Variants = {
  animate: {
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 3,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
}

const shakeVariants: Variants = {
  animate: {
    rotate: [0, -5, 5, -5, 5, 0],
    transition: {
      duration: 4,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
}

interface AnimatedIconProps {
  icon?: LucideIcon
  variant?: 'rocket' | 'arrow' | 'float' | 'pulse' | 'rotate' | 'shake'
  size?: number
  className?: string
  style?: React.CSSProperties
}

const AnimatedIcon = forwardRef<SVGSVGElement, AnimatedIconProps>(
  ({ icon: Icon, variant = 'pulse', size = 24, className, style }, ref) => {
    if (!Icon) return null
    
    const variants = {
      rocket: rocketVariants,
      arrow: arrowVariants,
      float: floatVariants,
      pulse: pulseVariants,
      rotate: rotateVariants,
      shake: shakeVariants,
    }[variant]

    return (
      <motion.span
        variants={variants}
        animate="animate"
        style={{ display: 'inline-flex', ...style }}
      >
        <Icon ref={ref} size={size} className={className} />
      </motion.span>
    )
  }
)

AnimatedIcon.displayName = 'AnimatedIcon'

// Export specific animated icons
export const AnimatedRocket = (
  props: Omit<AnimatedIconProps, 'icon' | 'variant'>
) => <AnimatedIcon icon={Rocket} variant="rocket" {...props} />

export const AnimatedArrowUpRight = (
  props: Omit<AnimatedIconProps, 'icon' | 'variant'>
) => <AnimatedIcon icon={ArrowUpRight} variant="arrow" {...props} />

export const AnimatedGlobe = (
  props: Omit<AnimatedIconProps, 'icon' | 'variant'>
) => <AnimatedIcon icon={Globe} variant="float" {...props} />

export const AnimatedMail = (
  props: Omit<AnimatedIconProps, 'icon' | 'variant'>
) => <AnimatedIcon icon={Mail} variant="pulse" {...props} />

export const AnimatedPhone = (
  props: Omit<AnimatedIconProps, 'icon' | 'variant'>
) => <AnimatedIcon icon={Phone} variant="shake" {...props} />

export const AnimatedPalette = (
  props: Omit<AnimatedIconProps, 'icon' | 'variant'>
) => <AnimatedIcon icon={Palette} variant="float" {...props} />

export const AnimatedCode = (
  props: Omit<AnimatedIconProps, 'icon' | 'variant'>
) => <AnimatedIcon icon={Code} variant="pulse" {...props} />

export const AnimatedSmartphone = (
  props: Omit<AnimatedIconProps, 'icon' | 'variant'>
) => <AnimatedIcon icon={Smartphone} variant="float" {...props} />

export const AnimatedSearch = (
  props: Omit<AnimatedIconProps, 'icon' | 'variant'>
) => <AnimatedIcon icon={Search} variant="pulse" {...props} />

export const AnimatedZap = (
  props: Omit<AnimatedIconProps, 'icon' | 'variant'>
) => <AnimatedIcon icon={Zap} variant="pulse" {...props} />

export const AnimatedWrench = (
  props: Omit<AnimatedIconProps, 'icon' | 'variant'>
) => <AnimatedIcon icon={Wrench} variant="rotate" {...props} />

export const AnimatedArrowUp = (
  props: Omit<AnimatedIconProps, 'icon' | 'variant'>
) => <AnimatedIcon icon={ArrowUp} variant="float" {...props} />

export const AnimatedInstagram = (
  props: Omit<AnimatedIconProps, 'icon' | 'variant'>
) => <AnimatedIcon icon={Instagram} variant="pulse" {...props} />

export const AnimatedGithub = (
  props: Omit<AnimatedIconProps, 'icon' | 'variant'>
) => <AnimatedIcon icon={Github} variant="pulse" {...props} />

export const AnimatedMenu = (
  props: Omit<AnimatedIconProps, 'icon' | 'variant'>
) => <AnimatedIcon icon={Menu} variant="pulse" {...props} />

export const AnimatedX = (
  props: Omit<AnimatedIconProps, 'icon' | 'variant'>
) => <AnimatedIcon icon={X} variant="pulse" {...props} />


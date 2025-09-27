export const FadeInFromLeft = { 
    initial: {
        opacity: 0,
        x: -100,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'easeIn',
            duration: 0.5,
            delay: 0.5,
        },
    }
}

export const FadeInFromRight = {
    initial: {
        opacity: 0,
        x: 100,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'easeIn',
            duration: 0.5,
            delay: 0.5,
        },
    }
}

export const FadeInFromTop = {
    initial: {
        opacity: 0,
        y: -100,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'easeIn',
            duration: 0.5,
            delay: 0.2,
        },
    }
}

export const FadeInFromBottom = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'easeIn',
            duration: 0.5,
            delay: 0.2,
        },
    }
}

export const ScaleIn = {
    initial: {
        opacity: 0,
        scale: 0.8,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            duration: 0.5,
            delay: 0.2,
        },
    }
}

export const RotateIn = {
    initial: {
        opacity: 0,
        rotate: -90,
    },
    animate: {
        opacity: 1,
        rotate: 0,
        transition: {
            type: 'easeInOut',
            duration: 0.5,
            delay: 0.2,
        },
    }
}

export const ZoomIn = {
    initial: {
        opacity: 0,
        scale: 1.5,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'easeOut',
            duration: 0.5,
            delay: 0.2,
        },
    }
}

export const ZoomOut = {
    initial: {
        opacity: 0,
        scale: 0.5,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'easeOut',
            duration: 0.5,
            delay: 0.2,
        },
    }
}

export const BounceIn = {
    initial: {
        opacity: 0,
        y: -100,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
            duration: 0.6,
        },
    }
}

export const StaggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.3
        }
    }
}

export const SlideOutLeft = {
    initial: {
        opacity: 1,
        x: 0,
    },
    animate: {
        opacity: 0,
        x: -100,
        transition: {
            type: 'easeIn',
            duration: 0.5,
            delay: 0.2,
        },
    }
}

export const FlipIn = {
    initial: {
        opacity: 0,
        rotateY: -90,
    },
    animate: {
        opacity: 1,
        rotateY: 0,
        transition: {
            type: 'easeOut',
            duration: 0.5,
            delay: 0.2,
        },
    }
}

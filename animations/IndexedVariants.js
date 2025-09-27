// Fade In from Left with Index-based Animation
export const FadeInFromLeftIndexed = {
    initial: {
        opacity: 0,
        x: -100,
    },
    animate: (index) => ({
        opacity: 1,
        x: 0,
        transition: {
            type: 'easeIn',
            duration: 0.3 * index,
            // delay: 0.2,
        },
    }),
};

// Fade In from Right with Index-based Animation
export const FadeInFromRightIndexed = {
    initial: {
        opacity: 0,
        x: 100,
    },
    animate: (index) => ({
        opacity: 1,
        x: 0,
        transition: {
            type: 'easeIn',
            duration: 0.3 * index,
            // delay: 0.2,
        },
    }),
};

// Fade In from Top with Index-based Animation
export const FadeInFromTopIndexed = {
    initial: {
        opacity: 0,
        y: -100,
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            type: 'easeIn',
            duration: 0.3 * index,
            // delay: 0.2,
        },
    }),
};

// Fade In from Bottom with Index-based Animation
export const FadeInFromBottomIndexed = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            type: 'easeIn',
            duration: 0.3 * index,
            // // delay: 0.2,
        },
    }),
};

// Scale In with Index-based Animation
export const ScaleInIndexed = {
    initial: {
        opacity: 0,
        scale: 0.8,
    },
    animate: (index) => ({
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            duration: 0.3 * index,
            // delay: 0.2,
        },
    }),
};

// Rotate In with Index-based Animation
export const RotateInIndexed = {
    initial: {
        opacity: 0,
        rotate: -90,
    },
    animate: (index) => ({
        opacity: 1,
        rotate: 0,
        transition: {
            type: 'easeInOut',
            duration: 0.3 * index,
            // delay: 0.2,
        },
    }),
};

// Zoom In with Index-based Animation
export const ZoomInIndexed = {
    initial: {
        opacity: 0,
        scale: 1.5,
    },
    animate: (index) => ({
        opacity: 1,
        scale: 1,
        transition: {
            type: 'easeOut',
            duration: 0.3 * index,
            // delay: 0.2,
        },
    }),
};

// Zoom In with Index-based Animation
export const ZoomOutIndexed = {
    initial: {
        opacity: 0,
        scale: 0.5,
    },
    animate: (index) => ({
        opacity: 1,
        scale: 1,
        transition: {
            type: 'easeOut',
            duration: 0.3 * index,
            // delay: 0.2,
        },
    }),
};

// Bounce In with Index-based Animation
export const BounceInIndexed = {
    initial: {
        opacity: 0,
        y: -100,
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
            duration: 0.3 * index,
        },
    }),
};

// Stagger Container with Index-based Animation
export const StaggerContainerIndexed = {
    animate: (index) => ({
        transition: {
            staggerChildren: 0.3 * index,index
        },
    }),
};

// Slide Out Left with Index-based Animation
export const SlideOutLeftIndexed = {
    initial: {
        opacity: 1,
        x: 0,
    },
    animate: (index) => ({
        opacity: 0,
        x: -100,
        transition: {
            type: 'easeIn',
            duration: 0.3 * index,
            // delay: 0.2,
        },
    }),
};

// Flip In with Index-based Animation
export const FlipInIndexed = {
    initial: {
        opacity: 0,
        rotateY: -90,
    },
    animate: (index) => ({
        opacity: 1,
        rotateY: 0,
        transition: {
            type: 'easeOut',
            duration: 0.3 * index,
            // delay: 0.2,
        },
    }),
};

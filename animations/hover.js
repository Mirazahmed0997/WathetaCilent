// hoverAnimations.js
const ScaleOnHover = {
    initial: {
        scale: 1,
    },
    hover: (custom) => ({
        scale: 1.1,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
            duration: 0.3,
            delay: custom?.delay || 0,
        },
    }),
};

const RotateOnHover = {
    initial: {
        rotate: 0,
    },
    hover: (custom) => ({
        rotate: 15,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
            duration: 0.3,
            delay: custom?.delay || 0,
        },
    }),
};

const TranslateXOnHover = {
    initial: {
        x: 0,
    },
    hover: (custom) => ({
        x: 10,
        transition: {
            type: 'easeInOut',
            duration: 0.3,
            delay: custom?.delay || 0,
        },
    }),
};

const TranslateYOnHover = {
    initial: {
        y: 0,
    },
    hover: (custom) => ({
        y: -10,
        transition: {
            type: 'easeInOut',
            duration: 0.3,
            delay: custom?.delay || 0,
        },
    }),
};

const FadeOnHover = {
    initial: {
        opacity: 1,
    },
    hover: (custom) => ({
        opacity: 0.8,
        transition: {
            type: 'easeInOut',
            duration: 0.3,
            delay: custom?.delay || 0,
        },
    }),
};

const BlurOnHover = {
    initial: {
        filter: 'blur(0)',
    },
    hover: (custom) => ({
        filter: 'blur(4px)',
        transition: {
            type: 'easeInOut',
            duration: 0.3,
            delay: custom?.delay || 0,
        },
    }),
};

const ShadowOnHover = {
    initial: {
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    },
    hover: (custom) => ({
        boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.3)',
        transition: {
            type: 'easeInOut',
            duration: 0.3,
            delay: custom?.delay || 0,
        },
    }),
};

const SkewOnHover = {
    initial: {
        skewX: 0,
    },
    hover: (custom) => ({
        skewX: 10,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
            duration: 0.3,
            delay: custom?.delay || 0,
        },
    }),
};

// Add more hover effects as needed

const hover = {
    ScaleOnHover,
    RotateOnHover,
    TranslateXOnHover,
    TranslateYOnHover,
    FadeOnHover,
    BlurOnHover,
    ShadowOnHover,
    SkewOnHover,
};

export default hover;

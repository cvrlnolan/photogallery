import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion"

const LoadingPhotoBox = () => {

    const variants = {
        hidden: {
            opacity: 0,
            scale: 0.5,
            backgroundColor: "#bfdbf7"
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 360,
            backgroundColor: "#476c9b",
            transition: {
                type: "spring",
                damping: 10,
                stiffness: 100,
                mass: 0.5,
                restDelta: 0.5,
                delay: 0.3,
                repeat: Infinity,
                repeatType: "reverse"
            }
        },
        exit: {
            opacity: 0,
            scale: 0
        },
        hover: {
            scale: 0.8,
            rotate: 90,
            transition: {
                type: "spring",
                stiffness: 100
            },
        },
        tap: {
            rotate: 360,
            zIndex: 1,
            transition: {
                type: "spring",
                stiffness: 100
            },
        },
        drag: {
            zIndex: 1,
            velocity: 2
        }
    }

    return (
        <>
            <LazyMotion features={domAnimation}>
                <AnimatePresence>
                    <m.div
                        layout
                        drag
                        key={Math.random()}
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        whileHover="hover"
                        whileTap="tap"
                        whileDrag="drag"
                        dragConstraints={{ top: -100, bottom: -100, left: -100, right: -100 }}
                        dragElastic={1}
                        style={{
                            width: 300,
                            height: 300,
                            borderRadius: 15
                        }}
                    >
                    </m.div>
                </AnimatePresence>
            </LazyMotion>
        </>
    )
}

export default LoadingPhotoBox
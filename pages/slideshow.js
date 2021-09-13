import React from "react"
import Head from "next/head"
import { Container, useColorMode } from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { AnimatePresence, motion } from "framer-motion"
import { wrap } from "popmotion"
import { useState } from "react"
import { client } from "@/mongodb/mongodbClient"
import Navbar from "@/components/layout/navbar"

//Get album photos via Incremental Static Generation

export default function Slideshow({ photosData }) {

    const { colorMode } = useColorMode()

    const iconColor = {
        dark: "gray.900"
    }

    const variants = {
        enter: (direction) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0
            };
        }
    }

    const swipeConfidenceThreshold = 10000
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity
    }

    const [[page, direction], setPage] = useState([0, 0])

    const imageIndex = wrap(0, photosData.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    }


    return (
        <>
            <Head>
                <title>Gallery | Slideshow</title>
            </Head>
            <Navbar>
                <Container maxW="container.xl" centerContent>
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            key={page}
                            src={photosData[imageIndex].photoUrl}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            style={{
                                objectFit: "cover"
                            }}
                        />
                    </AnimatePresence>
                    <motion.div className="next" onClick={() => paginate(1)}>
                        <ArrowForwardIcon color={iconColor[colorMode]} />
                    </motion.div>
                    <motion.div className="prev" onClick={() => paginate(-1)}>
                        <ArrowForwardIcon color={iconColor[colorMode]} />
                    </motion.div>
                </Container>
            </Navbar>
        </>
    )
}

//Incremental Static Generation

export async function getStaticProps() {
    await client.connect()
    const photos = await client.db(process.env.MONGODB_DATABASE).collection("photoAlbum").
        find({}, { sort: { createdDate: -1 } }).toArray()
    await client.close()
    return {
        props: {
            photosData: JSON.parse(JSON.stringify(photos))
        },
        revalidate: 10,
    }
}
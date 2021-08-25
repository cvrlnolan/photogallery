import Head from "next/head"
import { Container, SimpleGrid } from "@chakra-ui/react"
import Navbar from "@/components/layout/navbar"
import PhotoBox from "@/components/photo/photoBox"

export default function Home() {
  return (
    <>
      <Navbar>
        <Container maxW="container.xl" centerContent>
          <SimpleGrid columns={[1, 1, 2, 3]} spacing="15px">
            <PhotoBox />
            <PhotoBox />
            <PhotoBox />
            <PhotoBox />
          </SimpleGrid>
        </Container>
      </Navbar>
    </>
  )
}

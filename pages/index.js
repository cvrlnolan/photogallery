import Head from "next/head"
import axios from "axios"
import useSWR from "swr"
import { Container, SimpleGrid } from "@chakra-ui/react"
import Navbar from "@/components/layout/navbar"
import PhotoBox from "@/components/photo/photoBox"
import LoadingPhotoBox from "@/components/layout/loadingPhotoBox"

export default function Home() {

  const fetcher = url => axios.get(url).then(res => res.data)

  const { data: photos, error } = useSWR("/api/photo/", fetcher)

  if (error) {
    return (
      <>
        {/* You can customize the UI as you wish */}
        <div>Error encountered...</div>
      </>
    )
  }

  if (!photos) {
    return (
      <>
        {/* You can customize the UI as you wish */}
        <Navbar>
          <Container maxW="container.xl" centerContent>
            <SimpleGrid columns={[1, 1, 2, 3]} spacing="15px">
              <LoadingPhotoBox />
              <LoadingPhotoBox />
              <LoadingPhotoBox />
              <LoadingPhotoBox />
              <LoadingPhotoBox />
              <LoadingPhotoBox />
            </SimpleGrid>
          </Container>
        </Navbar>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Gallery | Photo Album</title>
      </Head>
      <Navbar>
        <Container maxW="container.xl" centerContent>
          <SimpleGrid columns={[1, 1, 2, 3]} spacing="15px">
            {photos.map((photo) => (<PhotoBox key={photo._id} photo={photo} />))}
          </SimpleGrid>
        </Container>
      </Navbar>
    </>
  )
}

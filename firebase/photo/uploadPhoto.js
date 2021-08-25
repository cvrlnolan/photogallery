import firebase from "@/firebase/firebaseClientInit"
import axios from "axios"

const storage = firebase.storage()
const storageRef = storage.ref()

export default async function UploadPhoto(photoFile, photoData, toast) {
    async function upload(photo, data) {
        try {
            await storageRef.child(`${new Date().toISOString()}`).put(photo).then((snapshot) => {
                snapshot.ref.getDownloadURL().then((url) => {
                    const newPhotoData = {
                        ...data,
                        photoUrl: url
                    }
                    axios.post("/api/photo/upload", newPhotoData).then((response) => {
                        if (response.data.message === "Ok.") {
                            toast({
                                title: "Photo uploaded successfully.",
                                description: "The new photo will be added to your album.",
                                status: "success",
                                duration: 5000,
                                isClosable: true,
                            })
                        }
                    })
                })
            })
        } catch (e) {
            console.log(e)
        }
    }

    if (typeof window !== "undefined") {
        await upload(photoFile, photoData)
    }

}
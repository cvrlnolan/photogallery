import {
    Button,
    Stack,
    HStack,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Spinner,
    useToast,
    useDisclosure
} from "@chakra-ui/react"
import { DownloadIcon, CheckCircleIcon } from "@chakra-ui/icons"
import { createRef, useState } from "react"
import { useForm } from "react-hook-form"
import Compressor from "compressorjs"
import AlertPop from "@/components/formAlert"
import UploadPhoto from "@/firebase/photo/uploadPhoto"

const AddPhoto = () => {

    const toast = useToast()

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'all' })

    const { isOpen, onOpen, onClose } = useDisclosure()

    const imageInputRef = createRef()

    const [image, setImage] = useState()

    const [hide, setHide] = useState(true)

    const handleImageChange = (e) => {
        setHide(false)
        if (e.target.files[0]) {
            const image = e.target.files[0]
            new Compressor(image, {
                quality: 0.8,
                success: (compressedImage) => {
                    setImage(compressedImage)
                    setHide(true)
                }
            })
        }
    }

    const onSubmit = async (data) => {
        setHide(false)
        if (!image) {
            toast({
                title: "No image selected.",
                description: "Please choose an image to upload",
                status: "error",
                duration: 5000,
                isClosable: true,
            })
            setHide(true)
            return
        }
        await UploadPhoto(image, data, toast)
        setHide(true)
    }

    return (
        <>
            <Button mr={2} leftIcon={<DownloadIcon />} variant="outline" size="sm" onClick={onOpen}>
                Add Photo
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Photo Information</ModalHeader>
                    <ModalCloseButton />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ModalBody>
                            <Stack spacing={2}>
                                <FormControl>
                                    <FormLabel>Photo Title</FormLabel>
                                    <Input
                                        variant="flushed"
                                        name="photoTitle"
                                        {...register("photoTitle", { required: 'Please enter a title legend for your photo', minLength: { value: 5, message: 'Title too short' }, shouldUnregister: true })}
                                    />
                                    {errors.photoTitle && <AlertPop title={errors.photoTitle.message} />}
                                </FormControl>
                                <input type="file" hidden ref={imageInputRef} onChange={handleImageChange} />
                                <Button
                                    colorScheme="gray"
                                    onClick={() => imageInputRef.current.click()}
                                >
                                    Select Photo
                                </Button>
                            </Stack>
                        </ModalBody>

                        <ModalFooter>
                            <HStack spacing={2}>
                                <Spinner hidden={hide} />
                                <Button colorScheme="red" mr={3} onClick={onClose}>
                                    Close
                                </Button>
                                <Button
                                    leftIcon={image && <CheckCircleIcon />}
                                    variant="ghost"
                                    colorScheme="blue"
                                    type="submit"
                                    isDisabled={!isValid || !hide}
                                >
                                    Upload
                                </Button>
                            </HStack>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddPhoto
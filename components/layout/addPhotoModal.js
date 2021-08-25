import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from "@chakra-ui/react"
import { DownloadIcon } from "@chakra-ui/icons"

const AddPhoto = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

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
                    <ModalBody>
                        Add image....
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="red" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="ghost" colorScheme="blue">Upload</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddPhoto
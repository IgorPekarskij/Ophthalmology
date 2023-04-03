import { createStandaloneToast } from '@chakra-ui/react'
const { toast } = createStandaloneToast();

function showToast(props) {
    const {
        title,
        message = 'Message',
        status = 'success',
        duration = 3000
    } = {...props}

    const id = Math.round(Math.random() * 1000);

    if(!toast.isActive(id)) {
        toast({
            id: id,
            title: title,
            status: status,
            isClosable: true,
            description: message,
            duration: duration,
            position: 'top',
        })
    }
}

export {
    showToast
}
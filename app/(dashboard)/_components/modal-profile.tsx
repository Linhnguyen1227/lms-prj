import { useModal } from '@/hooks/use-modal-store';
import { clerkClient } from '@clerk/nextjs';

const ModalProfile = () => {
    const { isOpen, onClose, type, data } = useModal();
    const listUsers = clerkClient.users;

    return <></>;
};

export default ModalProfile;

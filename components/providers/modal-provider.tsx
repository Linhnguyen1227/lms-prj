'use client';
import { useEffect, useState } from 'react';

import ModalProfile from '../modals/modal-profile';
import ModalUserCreate from '../modals/modal-user-create';

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }
    return (
        <>
            <ModalProfile />
            <ModalUserCreate />
        </>
    );
};

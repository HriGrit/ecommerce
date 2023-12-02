"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog";

interface ModalProps {
    children: React.ReactNode;
    onClose: () => void;
    isOpen: boolean;
    title: string;
    description: string;
}

export const Modal: React.FC<ModalProps> = ({ children, onClose, isOpen, title, description }) => { 
    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };
    return (
    <Dialog open={isOpen} onOpenChange={onChange}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <div>
                {children}
            </div>
        </DialogContent>
    </Dialog>);
};
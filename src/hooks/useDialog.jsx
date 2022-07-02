import { useRef } from "react";

export default function useDialog() {
    const dialogRef = useRef();
    const open = () => dialogRef.current.showModal();
    const close = () => dialogRef.current.close();
    return { dialogRef, open, close };
}

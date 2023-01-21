import {useParams} from "react-router-dom";
import {useEffect} from "react";

export function ContactDetailPage() {
    const {id} = useParams();

    useEffect(() => {
        console.log('id', id)
    }, [id])

    return (
        <h1>{id}</h1>
    )
}
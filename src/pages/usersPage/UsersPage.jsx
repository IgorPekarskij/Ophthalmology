import { useState } from "react";
import { PillContainer } from "../../components/pillContainer/";
import { Tile } from "../../components/tile";

const defaultItems = [
    {
        id: "1",
        withIcon: true,
        href: "https://www.salesforce.com",
        label: "Avatar Pill 1",
        title: "Пилл 1",
        imageSrc:
            "https://www.lightningdesignsystem.com/assets/images/avatar1.jpg",
        avatarAltText: "User avatar",
        removeIconAltText: "Удалить",
    },
    {
        id: "2",
        withIcon: true,
        href: "",
        label: "Avatar Pill 2",
        title: "Пилл 2",
        imageSrc:
            "https://www.lightningdesignsystem.com/assets/images/avatar2.jpg",
        avatarAltText: "User avatar",
        removeIconAltText: "Удалить",
    },
    {
        id: "3",
        withIcon: false,
        href: "https://www.google.com",
        label: "Avatar Pill 3",
        title: "Пилл 3",
        imageSrc:
            "https://www.lightningdesignsystem.com/assets/images/avatar3.jpg",
        avatarAltText: "User avatar",
        removeIconAltText: "Удалить",
    },
];

export function UsersPage() {
    const [items, setItems] = useState(defaultItems);

    const removePill = (id) => {
        setItems(items.filter((i) => i.id !== id));
    };

    return (
        <>
            <h1>Users list</h1>
            <Tile />
            <PillContainer removePill={removePill} items={items} />
        </>
    );
}

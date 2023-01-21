import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/loginPage/LoginPage";
import { UsersPage } from "./pages/usersPage/UsersPage";
import { ContactsPage } from "./pages/contactsPage";
import { NotFoundPage } from "./pages/notFoundPage";
import { MainLayout } from "./components/mainLayout/";
import { MainPage } from "./pages/mainPage";
import {ContactDetailPage} from "./pages/ContactDetailPage";

export function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<MainPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="users" element={<UsersPage />} />
                <Route path="contacts" element={<ContactsPage />} />
                <Route path="contact/:id" element={<ContactDetailPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/loginPage/LoginPage";
import { UsersPage } from "./pages/usersPage/UsersPage";
import { ContactsPage } from "./pages/contactsPage/ContactsPage";
import { NotFoundPage } from "./pages/notFoundPage/NotFoundPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;

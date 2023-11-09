import { useState } from "react";
import List from "./components/List/List";
import UserForm from "./components/UserForm/UserForm";


function UserList () {
    const [users, setUsers] = useState([]);

    const deletUser = (id) => {
        setUsers((prevUsers) => prevUsers.filter((i) => i.id !== id));
    }

    return (
        <>  
            <UserForm
                setUsers={setUsers}
            />
            <List
                users={users}
                deletUser={deletUser}
            />
        </>
    );
}

export default UserList;

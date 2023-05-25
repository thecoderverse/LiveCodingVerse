import { User } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchGet } from "../../utils/fetch/get";

export default function UserList () {
    const router = useRouter()
    const [userList, setUserList] = useState<User[]>([]);
    
    const getUsers = async () => {
        const users = await fetchGet<User[]>('/api/user')
        setUserList(users)
    }

    useEffect(() => {
        getUsers()
    }, [])

    const editUser = async (id: string) => {
        router.push(`/user/${id}`)
    }
    
    return (
        <div className="flex flex-col items-center mt-4">
            <span className="text-xl">User List</span>
            <div className="flex flex-col mt-4 justify-between">
                {userList.map((user, index) => {
                    return (
                        <div key={index} className="flex flex-row justify-round">
                            <div className="text-xl">{user.name} - {user.email}</div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4" onClick={() => editUser(user.id)}>
                                Edit
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
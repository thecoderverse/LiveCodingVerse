import { Session, User, UserType, UserTypes } from "@prisma/client"
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { fetchGet } from "../../utils/fetch/get"
import { removeLocalStorage } from "../../utils/local-storage/local-storage";

const Home = () => {
    const router = useRouter()
    const [user, setUser] = useState<User>();
    const [userType, setUserType] = useState<UserTypes>();
    const [sessionList, setSessionList] = useState<Session[]>([]);
    
    const getUser = async () => {
        const response = await fetchGet<User>('/api/me/me')
        setUser(response)
    }

    const getUserType = async () => {
        const response = await fetchGet<UserType>('/api/me/type')
        console.log(response.type)
        setUserType(response.type)
    }

    const getSessionList = async () => {
        const response = await fetchGet<Session[]>('/api/session')
        setSessionList(response)
    }

    useEffect(() => {
        getUser()
        getUserType()
        getSessionList()
    }, [])

    const handleLogout = async () => {
        removeLocalStorage('token')
        router.push('/login')
    }

    const joinSession = async () => {
        console.log('join session')
    }

    const createSession = async () => {
        router.push('/session/create')
    }

    const addCriteria = async () => {
        router.push('/criteria/create')
    }

    const SessionList = () => {
        return (
            sessionList.length > 0 ?
                <div className="flex flex-col items-center justify-center mt-4">
                    <span className="text-xl">Session List</span>
                    <div className="flex flex-col items-center justify-center mt-4">
                        {sessionList.map((session, index) => {
                            return (
                                <div key={index} className="flex flex-row">
                                    <span className="text-xl">{session.name}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                :
                <div className="flex flex-col items-center justify-center mt-4">
                    <span className="text-m text-gray-400">No Session</span>
                </div>
        )
    }

    return (
        <>
            <div className="flex flex-col items-center min-h-screen py-2">
                <span className="text-2xl font-bold">Welcome to the Rating System</span>
                <div className="flex flex-col items-center justify-center mt-4">
                    <span className="text-xl">{user?.name} - {userType}</span>
                </div>
                <SessionList />
                <div className="flex flex-row mt-4">
                    {true &&
                        <button className="bg-red-500 btn-primary" onClick={createSession}>
                            Create Session
                        </button>}
                    {true &&
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 h-[200px] min-w-[200px]" onClick={addCriteria}>
                            Add Criteria
                        </button>}
                </div>
                <div className="flex flex-col mt-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
                    
            </div>
        </>
    )
}

export default Home
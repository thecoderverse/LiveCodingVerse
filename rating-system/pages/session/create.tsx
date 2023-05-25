import { Session } from "@prisma/client";
import { useState } from "react";
import { fetchPost } from "../../utils/fetch/post";

export default function CreateSession() {
    const [sessionName, setSessionName] = useState("");

    const createSession = async () => {
        const session = await fetchPost<Session>('/api/session', { name: sessionName } as Session)
        console.log(session)
    }

    return (
        <>
            <h1>Create Session</h1>
            <div className="flex flex-col items-center justify-center mt-4">
                <span className="text-xl">Session Name</span>
                <input className="border-2 border-gray-400 rounded-md w-64 h-8 px-2 mt-2" type="text" value={sessionName} onChange={(e) => setSessionName(e.target.value)} />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={createSession}>
                    Create
                </button>
            </div>
        </>
    )
}
import { Criteria } from "@prisma/client";
import { useState } from "react";
import { fetchPost } from "../../utils/fetch/post";

export default function CreateCriteria() {
    const [criteriaName, setCriteriaName] = useState("");
    const [criteriaDescription, setCriteriaDescription] = useState("");

    const createCriteria = async () => {
        const criteria = await fetchPost<Criteria>('/api/criteria', { title: criteriaName, description: criteriaDescription } as Criteria)
        console.log(criteria)
    }
    
    return (
        <>
            <h1>Create Criteria</h1>
            <div className="flex flex-col items-center justify-center mt-4">
                <span className="text-xl">Criteria Title</span>
                <input className="border-2 border-gray-400 rounded-md w-64 h-8 px-2 mt-2" type="text" value={criteriaName} onChange={(e) => setCriteriaName(e.target.value)} />
                <span className="text-xl mt-4">Criteria Description</span>
                <textarea className="border-2 border-gray-400 rounded-md w-64 h-32 px-2 mt-2" value={criteriaDescription} onChange={(e) => setCriteriaDescription(e.target.value)} />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={createCriteria}>
                    Create
                </button>
            </div>
        </>
    )
}
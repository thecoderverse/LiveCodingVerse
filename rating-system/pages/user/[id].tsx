import { User, UserTypes } from ".prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchGet } from "../../utils/fetch/get";

const UserById = () => {
    const router = useRouter();
    const { id } = router.query;

    const [user, setUser] = useState<User>();
    const [userTypeList, setUserTypeList] = useState<UserTypes[]>(
        [
            UserTypes.ADMIN,
            UserTypes.CANDIDATE,
            UserTypes.PARTICIPANT
        ]
    )

    const getUser = async () => {
        const response = await fetchGet<User>(`/api/user?id=${id}`);
        setUser(response);
    };

    useEffect(() => {
        getUser();
    }, [id]);

    const changeUserType = async () => {
        console.log('change user type')
    }

    return (
        <div className="flex flex-col items-center justify-center mt-4">
            <select className="border border-gray-400 rounded-md p-2" onChange={changeUserType}>
                {userTypeList.map((userType, index) => {
                    return (
                        <option key={index} value={userType}>{userType}</option>
                    )
                })}
            </select>
            <div className="flex flex-col items-center justify-center mt-4">
                <span className="text-xl">{user?.name}</span>
                <span className="text-xl">{user?.email}</span>
            </div>
        </div>
    )
};

export default UserById;
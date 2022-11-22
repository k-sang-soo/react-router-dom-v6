import { Link, Outlet, useParams } from 'react-router-dom';
import { users } from './../../db';

function User() {
    const { userId } = useParams();
    console.log(userId);

    return (
        <>
            <div>
                User with it {userId} is named: {users[Number(userId) - 1].name}
            </div>
            <hr />
            <Link to={`./followers`}>See followers</Link>
            {/* Outlet은 해당 라우터의 자식으로 페이지가 존재하는 경우 라우터 이동 시 해당 페이지를 불러온다  */}
            <Outlet />
        </>
    );
}

export default User;

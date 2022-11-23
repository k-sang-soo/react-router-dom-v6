import { useOutletContext } from 'react-router-dom';

interface IFollowersContext {
    nameOfMyUser: string;
}

function Followers() {
    //컴포넌트를 만들어서 props로 안 보내고 useParams || useOutletContext 사용하는 이유는 url로 바로 접속해도 페이지가 작동하게 만들기 위함
    const { nameOfMyUser } = useOutletContext<IFollowersContext>();

    return <div>Followers {nameOfMyUser}</div>;
}

export default Followers;

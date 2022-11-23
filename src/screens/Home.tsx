import { users } from '../db';
import { Link, useSearchParams } from 'react-router-dom';

function Home() {
    // useSearchParams는 파라미터를 읽거나 수정할 수 있다.
    const [readSearchParms, setSearchParams] = useSearchParams();

    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;

import { Link, useNavigate } from 'react-router-dom';

function Header() {
    //link 와 useNavigate 다른 점은 useNavigate 굳이 클릭을 안해도 유저를 이동시킬 수 있다. ex) redirect
    const navigate = useNavigate();
    const onAboutClick = () => {
        navigate('/about');
    };
    return (
        <header>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    {/* <Link to={'/about'}>About</Link> */}
                    <button onClick={onAboutClick}>About</button>
                </li>
                <li>
                    <Link to={'/list'}>list</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;

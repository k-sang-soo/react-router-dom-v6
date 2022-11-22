import { Link, Outlet } from 'react-router-dom';

function List() {
    return (
        <>
            <div>
                List
                <div>
                    <Link to={`./detail`}>Detail</Link>
                </div>
            </div>
        </>
    );
}

export default List;

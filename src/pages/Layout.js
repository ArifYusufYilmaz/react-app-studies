import {Outlet , Link} from 'react-router-dom';
// outlet renders the current route selected.
// link is used to set the url and keep track of browsing history. instead of a href use Link!
// Layout route is a shared component that inserts common content on all pages, such as a navigation menu
const Layout=()=> {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link> 
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>   
            
        </>
    );
}
export default Layout;
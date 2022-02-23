import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import Blogs from "./Blogs";
import Contact from "./Contact";
import NoPage from "./NoPage";

export default function PageManager(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>    
                    {/* index specifies this route is the default route for the parent(/) route */}
                    <Route path="blogs" element={<Blogs/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
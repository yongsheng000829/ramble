import Main from '@/views/Main';
import Login from '@/views/Login.js';
import Staff from '@/views/staff/Staff';
import StaffAdd from "@/views/staff/StaffAdd";
import User from "@/views/User";
import Amzing from "@/views/amzing/Amzing";
import Contact from "@/views/amzing/Contact";
import RoleList from "@/views/role/RoleList";
import RoleAdd from "@/views/role/RoleAdd";
import Product from "@/views/product/Product";
import ProductAdd from "@/views/product/ProductAdd";
import BookList from "@/views/book/BookList";
import BookAdd from "@/views/book/BookListAdd";
import High from '../untils/high/BeforeEach';





export default [
    {
        path: '/main',
        component: High(Main),
        children: [
            {
                path: '/main/staff',
                component: High(Staff)
            },
            {
                path: '/main/staffadd',
                component: High(StaffAdd)
            },
            {
                path: '/main/user',
                component: High(User)
            },
            {
                path: '/main/amzinglist',
                component: High(Amzing)
            },
            {
                path: '/main/contact',
                component: High(Contact)
            },
            {
                path: '/main/rolelist',
                component: High(RoleList)
            },
            {
                path: '/main/roleadd',
                component: High(RoleAdd)
            },
            {
                path: '/main/productlist',
                component: High(Product)
            },
            {
                path: '/main/productadd',
                component: High(ProductAdd)
            },
            {
                path: '/main/booklist',
                component: High(BookList)
            },
            {
                path: '/main/bookadd',
                component: High(BookAdd)
            }
        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/',
        redirect: '/login'
    }
]
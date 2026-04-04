import { useRouter } from "next/router";
import Navbar from "../navbar";
import Footer from "../footer";

const disableNavbar = ["/auth/login", "/auth/register", "/views/auth/login", "/views/auth/register", "/404"];

type AppShellProps = {
    children: React.ReactNode;
}

const AppShell = (props: AppShellProps) => {
    const { children} = props;
    const { pathname } = useRouter();
    return (
        <main>
            {!disableNavbar.includes(pathname) && <Navbar></Navbar>}
            {children}
            <Footer></Footer>
        </main>
    );
};

export default AppShell;
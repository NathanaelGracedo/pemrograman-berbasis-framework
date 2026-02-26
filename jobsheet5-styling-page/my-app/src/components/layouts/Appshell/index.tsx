import Navbar from "../navbar";
import Footer from "../footer";

type AppShellProps = {
    children: React.ReactNode;
}

const AppShell = (props: AppShellProps) => {
    const { children} = props;
    return (
        <main>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </main>
    );
};

export default AppShell;
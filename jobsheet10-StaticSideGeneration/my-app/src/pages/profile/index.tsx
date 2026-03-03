import Link from "next/link";

const ProfilPage = () => {
    return (
        <div>
           <h1>Ini halaman profile</h1> <br />
            <Link href="/profile/edit_profile">Edit Profile</Link>
        </div>
    );
};

export default ProfilPage;
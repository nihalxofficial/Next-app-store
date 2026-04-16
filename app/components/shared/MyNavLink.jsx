import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MyNavLink = ({to, children}) => {
    const pathName = usePathname()
    const isActive = pathName === to
    return (
        <Link href={to} className={ `pb-1 ${isActive? "text-purple-600 border-b border-purple-600 ": ""}`}>{children}</Link>
    );
};

export default MyNavLink;
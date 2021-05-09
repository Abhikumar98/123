import { useRouter } from 'next/router';

const useAuth = (Component: React.FC) => (props) => {
    const router = useRouter();

    const authenticated = true;

    if (!authenticated) {
        // router.push('/login');
    }

    return <Component {...props} />;
};

export default useAuth;

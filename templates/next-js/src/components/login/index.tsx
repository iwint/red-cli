'use client';

import { useAuthService } from '@/services/useAuthService';
import { Button } from '../ui/button';

const LoginSection: React.FC = () => {
    const { login, isLoginPending } = useAuthService();

    return (
        <div className="flex  gap-4">
            <Button disabled={isLoginPending} onClick={() => login({})}>
                Login with Google
            </Button>
        </div>
    );
};

export default LoginSection;

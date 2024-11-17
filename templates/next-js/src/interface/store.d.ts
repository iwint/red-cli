type useUserStoreProps = {
    user: User | null;
    setUserData: (data: { user: User }) => void;
};

type useAppStoreProps = useUserStoreProps;

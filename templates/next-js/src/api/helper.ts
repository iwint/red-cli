import {
    MutationFunction,
    useMutation,
    useQueryClient,
    useSuspenseQuery,
    UseSuspenseQueryOptions,
} from '@tanstack/react-query';

type useSendDataProps = {
    success?: (data: any) => void;
    error?: (data: any) => void;
    fn: MutationFunction;
    invalidateKey?: Array<string>;
};

export const useGetData = (options: UseSuspenseQueryOptions) => {
    return useSuspenseQuery(options);
};

export const useSendData = ({ fn, invalidateKey, error, success }: useSendDataProps) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: fn,
        onSuccess: data => {
            invalidateKey &&
                invalidateKey.forEach(key => queryClient.invalidateQueries({ queryKey: [key] }));
            //* Add Succes Toast here -> toast.success(success || data?.message)
            success && success(data);
            return data;
        },
        onError: (data: any) => {
            //* Add Error Toast here -> toast.error(error || data?.message)
            error && error(data);
            return data;
        },
        retry: 2,
    });
};

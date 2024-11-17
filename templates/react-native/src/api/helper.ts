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
            success && success(data);
            return data;
        },
        onError: (data: any) => {
            error && error(data);
            return data;
        },
    });
};

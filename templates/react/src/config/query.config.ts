import {
    useMutation,
    useQueryClient,
    useSuspenseQuery,
    UseSuspenseQueryOptions,
} from '@tanstack/react-query';

type useSendDataProps<TVariables = unknown> = {
    success?: (data: any) => void;
    error?: (data: any) => void;
    fn: (variables: TVariables) => Promise<any>;
    invalidateKey?: Array<string>;
};

export const useGetData = (options: UseSuspenseQueryOptions) => {
    return useSuspenseQuery(options);
};

export const useSendData = <TVariables = unknown>({
    fn,
    invalidateKey,
    error,
    success,
}: useSendDataProps<TVariables>) => {
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

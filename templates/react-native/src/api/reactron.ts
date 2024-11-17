import {
    QueryClientManager,
    reactotronReactQuery,
} from 'reactotron-react-query';
import Reactotron from 'reactotron-react-native';
import { queryClient } from './query-client';

const queryClientManager = new QueryClientManager({
    //@ts-ignore
    queryClient,
});

Reactotron.use(reactotronReactQuery(queryClientManager))
    .configure({ onDisconnect: () => queryClientManager.unsubscribe() })
    .useReactNative()
    .connect();

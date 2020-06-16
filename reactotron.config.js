import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const reactotronConfig = Reactotron
    .configure()
    .useReactNative()
    .use(reactotronRedux())
    .connect();
export default reactotronConfig;

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Cancel from './CancelledTab';
import Delivered from './DeliveredTab';
import Delivering from './DeliveringTab';
import Prepare from './PrepareTab';
import WaitComfirm from './WaitComfirmTab';
import WaitPay from './WaitForPayTab';

const Tab = createMaterialTopTabNavigator();
const TabNavi: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="WaitForPay" component={WaitPay} />
      <Tab.Screen name="WaitComfirm" component={WaitComfirm} />
      <Tab.Screen name="Prepare" component={Prepare} />
      <Tab.Screen name="Delivering" component={Delivering} />
      <Tab.Screen name="Delivered" component={Delivered} />
      <Tab.Screen name="Cancel" component={Cancel} />
    </Tab.Navigator>
  );
};

export default TabNavi;

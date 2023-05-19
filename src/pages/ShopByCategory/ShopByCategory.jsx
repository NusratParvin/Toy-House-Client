import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {


    const [activeTab, setActiveTab] = useState(false);

    const handleTabClick = () => {
        setActiveTab(true);
    };

    return (
        <div className='w-10/12 mx-auto'>


            <Tabs>
                <TabList className="flex justify-center border-b border-gray-200">
                    <Tab selectedClassName='bg-orange-500 text-white '
                        className="text-orange-500 text-lg font-semibold py-2 px-16 
                        hover:text-white hover:bg-orange-400 cursor-pointer"
                    >
                        Sports Car
                    </Tab>
                    <Tab selectedClassName='bg-orange-500 text-white '
                        className="text-orange-500 text-lg font-semibold py-2 px-16 
                        hover:text-white hover:bg-orange-400 cursor-pointer"
                    >        Fire Truck
                    </Tab>
                    <Tab selectedClassName='bg-orange-500 text-white '
                        className="text-orange-500 text-lg font-semibold py-2 px-16 
                        hover:text-white hover:bg-orange-400 cursor-pointer"
                    >
                        Police Car
                    </Tab>
                </TabList>

                <TabPanel>
                    <div className="py-4">Content for Tab 1</div>
                </TabPanel>
                <TabPanel>
                    <div className="py-4">Content for Tab 2</div>
                </TabPanel>
                <TabPanel>
                    <div className="py-4">Content for Tab 3</div>
                </TabPanel>
            </Tabs>



        </div>
    );
};

export default ShopByCategory;
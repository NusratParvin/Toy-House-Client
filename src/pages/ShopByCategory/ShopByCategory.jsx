import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SortedToy from '../SortedToy/SortedToy';

const ShopByCategory = () => {

    const [activeTab, setActiveTab] = useState('Sports Car');
    const [tabData, setTabData] = useState([]);

    useEffect(() => {
        fetchTabData(activeTab);
    }, [activeTab]);

    const fetchTabData = async (tabName) => {
        console.log(tabName);
        try {
            console.log(tabName);
            const response = await fetch(`https://toy-house-server-beige.vercel.app/allCars/${tabName}`);
            const data = await response.json();
            setTabData(data);
            console.log(data, 'tab data');
        } catch (error) {
            console.error('Error fetching tab data:', error);
        }
    };


    const handleTabSelect = (tabName) => {
        if (tabName == 0) { setActiveTab('Sports Car'); }
        else if (tabName == 1) { setActiveTab('Fire Truck'); }
        else if (tabName == 2) { setActiveTab('Regular Car'); }

    };

    return (
        <div className=' py-12 bg-teal-100'>
            <div className='w-full md:w-10/12 mx-auto py-12'>

                <h1 className='text-3xl font-bold text-zinc-600 text-center tracking-tighter uppercase py-12'>Shop by Category</h1>
                <Tabs selectedTab={activeTab} onSelect={handleTabSelect}>
                    <TabList className="flex justify-center border-b border-teal-100">
                        <Tab selectedClassName='bg-orange-500 text-white '
                            className="text-orange-500  text-sm md:text-lg font-semibold py-2 md:px-16 px-8
                        hover:text-white hover:bg-orange-400 cursor-pointer"
                        >
                            Sports Car
                        </Tab>
                        <Tab selectedClassName='bg-orange-500 text-white '
                            className="text-orange-500 text-sm md:text-lg font-semibold py-2 md:px-16 px-8 
                        hover:text-white hover:bg-orange-400 cursor-pointer"
                        >        Fire Truck
                        </Tab>
                        <Tab selectedClassName='bg-orange-500 text-white '
                            className="text-orange-500 text-sm md:text-lg  font-semibold py-2 md:px-16 px-8
                        hover:text-white hover:bg-orange-400 cursor-pointer"
                        >
                            Police Car
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <div className='grid md:grid-cols-3 grid-cols-1 p-4 gap-2'>
                            {tabData.slice(0, 6).map((singleCar, index) => (

                                <SortedToy key={index} singleCar={singleCar} ></SortedToy>

                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid md:grid-cols-3 grid-cols-1  p-4 gap-2'>
                            {tabData.slice(0, 6).map((singleCar, index) => (

                                <SortedToy key={index} singleCar={singleCar} ></SortedToy>

                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid md:grid-cols-3 grid-cols-1  p-4 gap-2'>
                            {tabData.slice(0, 6).map((singleCar, index) => (

                                <SortedToy key={index} singleCar={singleCar} ></SortedToy>

                            ))}
                        </div>
                    </TabPanel>

                </Tabs>

            </div>
        </div>
    );
};

export default ShopByCategory;
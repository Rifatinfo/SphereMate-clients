import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "../JobCart/JobCart";

const TabCategories = () => {
    return (
        <div className="px-4 py-8 lg:px-8">
            <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
                Browse Jobs By Categories
            </h1>

            <p className="max-w-2xl mx-auto my-6 text-center text-gray-500">
                Three categories available for the time being: Web Development, Graphics Design, and Digital Marketing. Browse them by clicking on the tabs below.
            </p>

            <div className="max-w-4xl mx-auto">
                <Tabs>
                    <div className="flex justify-center mb-6">
                        <TabList>
                            <Tab>
                                Web
                            </Tab>
                            <Tab>
                                Graphics
                            </Tab>
                            <Tab>
                                Digital Marketing
                            </Tab>
                        </TabList>
                    </div>

                    <div className="mt-6">
                        <TabPanel>
                            <div className="flex justify-center">
                                <JobCard />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <h2 className="text-center">Any content 2</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2 className="text-center">Any content 3</h2>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default TabCategories;

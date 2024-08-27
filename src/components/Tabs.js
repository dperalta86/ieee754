import { useState } from 'react';
import FloatToIEEE754 from './FloatToIEEE754';
import IEEE754ToFloat from './IEEE754ToFloat';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('float-to-ieee754');

    return (
        <div>
            <div className="tabs">
                <button onClick={() => setActiveTab('float-to-ieee754')}>Float a IEEE 754</button>
                <button onClick={() => setActiveTab('ieee754-to-float')}>IEEE 754 a Float</button>
            </div>

            <div className="tab-content">
                {activeTab === 'float-to-ieee754' && <FloatToIEEE754 />}
                {activeTab === 'ieee754-to-float' && <IEEE754ToFloat />}
            </div>
        </div>
    );
};

export default Tabs;

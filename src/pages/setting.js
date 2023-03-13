import '../styles/global.css';


import MasterPage from '@/components/master'
import dynamic from 'next/dynamic';

import React from 'react'
const UISetting = dynamic(() => import('@/components/website/pages/UISetting'));
const setting = () => {
    return (
        <MasterPage title="Task">
            <UISetting />
        </MasterPage>
    )
}

export default setting
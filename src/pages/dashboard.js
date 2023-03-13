import '../styles/global.css';



import MasterPage from '@/components/master'
import dynamic from 'next/dynamic';

import React from 'react'
const UIDashBoard = dynamic(() => import('@/components/website/pages/UIDashBoard'));
const dashboard = () => {
    return (
        <MasterPage title="Task">
            <UIDashBoard />
        </MasterPage>
    )
}

export default dashboard
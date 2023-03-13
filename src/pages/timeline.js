import '../styles/global.css';


import MasterPage from '@/components/master'
import dynamic from 'next/dynamic';

import React from 'react'
const UITimeline = dynamic(() => import('@/components/website/pages/UITimeline'));
const timeline = () => {
    return (
        <MasterPage title="Task">
            <UITimeline />
        </MasterPage>
    )
}

export default timeline
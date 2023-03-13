
import '../styles/global.css';
import '../styles/style.scss';

import MasterPage from '@/components/master'
import React from 'react'
import dynamic from 'next/dynamic';

const UILogin = dynamic(() => import('@/components/website/pages/UILogin'));


const home = () => {
    return (
        <MasterPage title="HomePage">
            <UILogin />
        </MasterPage>
    )
}

export default home
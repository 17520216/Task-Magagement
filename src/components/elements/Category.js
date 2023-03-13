import React from 'react'
import { Typography } from 'antd';
import asset from '@/plugins/assets';
const { Title } = Typography;

const titleStyle = {
    marginBottom: '0'
}
const Category = ({ title }) => {
    return (
        <div className='flex justify-between items-center rounded-[10px]  bg-[#ffffff] px-[15px] py-[10px]'>
            <Title style={titleStyle} level={3}>{title}</Title>
            <span>
                <button className='h-[30px] bg-transparent w-max outline-none border-transparent  ' ><img  src={asset("/images/Vector.png")} alt="" /></button>
                <button className='h-[20px] bg-transparent w-max outline-none border-transparent  ' ><img  src={asset('/images/add-icon.png')} alt="" /></button>
            </span>
        </div>
    )
}

export default Category
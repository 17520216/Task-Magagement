import React from 'react'
import { Typography, DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const { Title } = Typography;
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
dayjs.extend(customParseFormat);
const Description = ({ heading, imgCart, title, des, time, imgMem, amoutDone }) => {
    return (
        <div className='rounded-[12px] bg-[#ffffff] px-[18px] py-[16px] flex justify-center items-start flex-col gap-y-2 h-fit'>
            <Title  level={5}>{heading}</Title>
            <img className='rounded-[12px]' src={imgCart} alt="" />
            <p className='font-bold'>{title}</p>
            <p>{des}</p>
            <Space direction="vertical" size={12}>
                <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
            </Space>
            <span>
                <img src={imgMem} alt="" />
                <i className='flex justify-between items-center'>
                    <input type='checkbox' />
                    <p>{amoutDone}</p>
                    <p>0/8</p>
                </i>
            </span>
        </div>
    )
}

export default Description
import React from 'react'

const DashBoardBox = ({icon,title,num,imgProgress,des}) => {
    return (
        <div className='rounded-[16px] bg-[#ffffff] w-max px-[45px] py-[25px]'>
            <div className="flex justify-center items-center gap-x-[20px] pb-[15px] border-b-1 border-b-[#e8edf1] border-b-solid">
                <img src={icon} alt="" />
                <p>{title}</p>
                <p>{num}</p>
            </div>
            <div className="flex justify-between align-center">
                <img src={imgProgress} alt="" />
                <p className='max-w-[70px]'>{des}</p>
            </div>
        </div>
    )
}

export default DashBoardBox
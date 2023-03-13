import React, { useState } from "react";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Carousel, Radio, Space, Tooltip } from "antd";
import Category from "@/components/elements/Category";
import Description from "@/components/elements/Description";
import { Typography } from "antd";
import asset from "@/plugins/assets";
const { Title } = Typography;
import { ReactNode } from "react";
const contentStyle = {
    width: "max-content",
    margin: 0,
  };
  
const UITask = () => {
    const [size, setSize] = useState("middle");
    const handleSizeChange = (e) => {
      setSize(e.target.value);
    };
  
  return (
    <div className="w-[66%] mt-[70px] ml-[94px] bg-[#f3f4f8] h-full px-[40px] py-[30px]">
      <div className="flex justify-between items-center">
        <Title level={1}>🔥 Task</Title>
        <Avatar.Group
          maxCount={3}
          maxPopoverTrigger="click"
          size="large"
          maxStyle={{
            color: "#f56a00",
            backgroundColor: "#fde3cf",
            cursor: "pointer",
          }}
        >
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Avatar
            style={{
              backgroundColor: "#f56a00",
            }}
          >
            K
          </Avatar>
          <Tooltip title="Ant User" placement="top">
            <Avatar
              style={{
                backgroundColor: "#87d068",
              }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Avatar
            style={{
              backgroundColor: "#1890ff",
            }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
      </div>
      <div className="grid grid-cols-4 mb-[12px] gap-x-[20px]">
        <Category title="Backlog" />
        <Category title="To Do" />
        <Category title="In Progress" />
        <Category title="Review" />
      </div>
      <div className="grid grid-cols-4 gap-y-4 gap-x-[20px]">
        <Description
          heading="Design"
          imgCart={asset("/images/imgCart.jpg")}
          title="Create styleguide foundation"
          des="Create content for peceland App"
        />
        <Description
          heading="Research"
          title="Copywriting Content"
          des="Create content for peceland App"
        />
        <Description
          heading="Planning"
          title="Update requiment list"
          des="Create content for peceland App"
        />
        <Description
          heading="Research"
          title="Auditing information architecture"
          des="Create content for peceland App"
        />
        <Description
          heading="Content"
          imgCart={asset("/images/imgCart.jpg")}
          title="Update support documentation"
          des="Create content for peceland App"
        />
        <Description
          heading="Research"
          title="Qualitative research planning"
          des="Create content for peceland App"
        />
        <Description
          heading="Planning"
          title="Listing deliverables checklist"
          des="Create content for peceland App"
        />
        <Description
          heading="Research"
          title="Qualitative research planning"
          des="Create content for peceland App"
        />
        <Description
          heading="Design"
          imgCart={asset("/images/imgCart.jpg")}
          title="Copywriting Content"
          des="Create content for peceland App"
        />
        <Description
          heading="Content"
          imgCart={asset("/images/imgCart.jpg")}
          title="Design System"
          des="Create content for peceland App"
        />
        <Description
          heading="Design"
          title="High fedality UI Desktop"
          des="Create content for peceland App"
        />
        <Description
          heading="Content"
          title="Listing deliverables checklist"
          des="Create content for peceland App"
        />
      </div>
      <div className="fixed top-[70px] right-0 w-[27.5%] px-[40px] py-[30px] ">
        <div className="pb-[30px] border-b-[1px] border-b-solid border-b-[#E8EDF1] mb-[30px]">
          <div className="flex justify-between items-center mb-[30px]">
            <Title level={3}>Today's Scheudle</Title>
            <>
              <Radio.Group value={size} onChange={handleSizeChange}>
                <Radio.Button value="large">
                  <img
                    className="py-2"
                    src={asset("/images/menu-icon.png")}
                    alt=""
                  />
                </Radio.Button>
                <Radio.Button value="middle">
                  <img
                    className="py-2"
                    src={asset("/images/calendar-icon.png")}
                    alt=""
                  />
                </Radio.Button>
              </Radio.Group>
            </>
          </div>
          <div className="flex justify-between items-center">
            <span>
              <p className="text-[#1EA7FF] mb-[10px]">
                30 minute call with Client
              </p>
              <Title level={5}>Project Discovery Call</Title>
            </span>
            <button className="rounded-[8px] border-solid border-[1px] border-transparent bg-[#1677ff] text-[#fff] text-[12px] font-[700] mx-[10px]  px-[15px] py-[10px] tracking-[1px] capitalize transition-[0.3s] ease-in-out hover:tracking-[1.5px]  ">
              + Invite
            </button>
          </div>
          <div className="flex justify-between items-center bg-[#5051F9] px-[18px] py-[22px] rounded-[10px] ">
            <Avatar.Group>
              <Avatar /* src="https://joeschmoe.io/api/v1/random" */ />
              <a href="https://ant.design">
                <Avatar
                  style={{
                    backgroundColor: "#f56a00",
                  }}
                >
                  K
                </Avatar>
              </a>
              <Tooltip title="Ant User" placement="top">
                <Avatar
                  style={{
                    backgroundColor: "#87d068",
                  }}
                  icon={<UserOutlined />}
                />
              </Tooltip>
              <Avatar
                style={{
                  backgroundColor: "#1890ff",
                }}
                icon={<AntDesignOutlined />}
              />
            </Avatar.Group>
            <p className="text-[#ffffff]">28:35</p>
            <span className="flex justify-center items-center gap-x-[8px]">
              <button className="h-[25px] bg-transparent w-max outline-none border-transparent ">
                <img
                  className="mr-[20px]"
                  src={asset("/images/call-icon.png")}
                  alt=""
                />
              </button>
              <buttonn className="h-[20px] bg-transparent w-max ">
                <img src={asset("/images/more-icon.png")} alt="" />
              </buttonn>
            </span>
          </div>
        </div>
        <div className="pb-[30px] border-b-[1px] border-b-solid border-b-[#E8EDF1] mb-[30px]">
          <Title level={3}>New Task</Title>
          <Title level={4}> Task Title</Title>
          <input
            className="bg-[#E8EDF1] w-[100%] text-[16px] h-[40px] mb-[20px] rounded-[7px] border-[1px] border-transparent "
            type="text"
          />
          <Space wrap>
            <Button danger type="primary" >
              ADD TASK
            </Button>
          </Space>
        </div>
        <div>
          <Title level={4}> Add Collaborators</Title>
          <Carousel
            // afterChange={onChange}
            arrows={true}
            prevArrow={ReactNode}
            nextArrow={ReactNode}
          >
            <div style={contentStyle}>
              <img src={asset("/images/chris.png")} alt="" />
            </div>
            <div style={contentStyle}>
              <img src={asset("/images/chris.png")} alt="" />
            </div>
            <div style={contentStyle}>
              <img src={asset("/images/chris.png")} alt="" />
            </div>
            <div style={contentStyle}>
              <img src={asset("/images/chris.png")} alt="" />
            </div>
            <div style={contentStyle}>
              <img src={asset("/images/chris.png")} alt="" />
            </div>
            <div style={contentStyle}>
              <img src={asset("/images/chris.png")} alt="" />
            </div>
            <div style={contentStyle}>
              <img src={asset("/images/chris.png")} alt="" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default UITask;

import DashBoardBox from "@/components/elements/DashBoardBox";
import asset from "@/plugins/assets";
import React, { useState } from "react";
import {
  Typography,
  Progress,
  Radio,
  Avatar,
  Space,
  Carousel,
  Tooltip,
  DatePicker,
  Button,
} from "antd";
import { AntDesignOutlined, MoreOutlined, UserOutlined } from "@ant-design/icons";
import { ReactNode } from "react";
import { useRouter } from "next/router";
const onOk = (value) => {
  console.log("onOk: ", value);
};
const contentStyle = {
  width: "max-content",
  margin: 0,
};

const { Title } = Typography;

const UIDashBoard = () => {
  const [size, setSize] = useState("middle");
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const [valueInput, setValueInput] = useState("");

  const handleChange = (ev) => {
    var value = ev.target.value;
    setValueInput(value);
  };
  const [task, setTask] = useState([
    {
      title: "Ex: Search Inspiration for project",
    },
  ]);
  const addTask = () => {
    var newTask = [
      ...task,
      {
        title: valueInput,
      },
    ];
    setTask(newTask);
    setValueInput("");
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const remove = (i) => {
    const newTask = [...task];
    newTask.splice(i, 1);
    setTask(newTask);
  };

  return (
    <div className="w-[66%] mt-[70px] ml-[94px] bg-[#f3f4f8] h-screen px-[40px] py-[30px]">
      <div className="flex justify-between align-center">
        <DashBoardBox
          icon={asset("/images/task-completed.png")}
          title="Task Completed"
          num="08"
          imgProgress={asset("/images/progress.png")}
          des="10+ more from last week"
        />
        <DashBoardBox
          icon={asset("/images/new-task.png")}
          title="New Task"
          num="10"
          imgProgress={asset("/images/progress.png")}
          des="10+ more from last week"
        />
        <DashBoardBox
          icon={asset("/images/project-done.png")}
          title="Projetc Done"
          num="10"
          imgProgress={asset("/images/progress.png")}
          des="10+ more from last week"
        />
      </div>
      <div className="progress">
        <Title level={2}>Task Done</Title>
        <>
          <Progress percent={30} />
          <Progress percent={50} status="active" />
          <Progress percent={70} status="exception" />
          <Progress percent={100} />
          <Progress percent={50} showInfo={false} />
        </>
      </div>
      <div className="task">
        <Title level={2}>Task</Title>
        {task.map((e, i) => (
          <div
            className="flex justify-between items-center px-[25px] py-[20px] bg-[#ffffff] rounded-[9px] mb-[20px]"
            key={i}
          >
            <div className="flex justify-center items-center gap-x-[20px] ">
              <img src={asset("/images/start-icon.png")} alt="" />
              <div>
                <Title level={5}>Start From</Title>
                <Space direction="vertical" size={15}>
                  <DatePicker showTime onChange={onChange} onOk={onOk} />
                </Space>
              </div>
            </div>
            <div className="w-max">
              <Title level={5}> {e.title}</Title>
              <div className="flex gap-x-2">
                <span className="flex justify-center items-center gap-x-2">
                  <img src={asset("/images/link-icon.png")} alt="" />
                  <p>www.uistore.com</p>
                </span>
                <span className="flex justify-center items-center gap-x-2">
                  <img src={asset("/images/comment-icon.png")} alt="" />
                  <p>8 comments</p>
                </span>
              </div>
            </div>
            <div>
              <Title level={5}> Complete</Title>
              <Progress percent={30} />
            </div>
            <button className="flex gap-x-3 bg-[#EDECFE] px-[18px] py-[11px] rounded-[9px] border-[1px] border-transparent">
              <img src={asset("/images/clock.png")} alt="" />
              Reminder
            </button>
            <Button danger type="primary" onClick={() => remove(i)}>
              Remove
            </Button>
          </div>
        ))}
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
              <button className='h-[25px] bg-transparent w-max outline-none border-transparent '>
                <img
                  className="mr-[20px]"
                  src={asset("/images/call-icon.png")}
                  alt=""
                />
              </button>
              <buttonn className='h-[20px] bg-transparent w-max '>
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
            onChange={handleChange}
            value={valueInput}
          />
          <Space wrap>
            <Button danger type="primary" onClick={addTask}>
              ADD TASK
            </Button>
          </Space>
        </div>
        <div>
          <Title level={4}> Add Collaborators</Title>
          <Carousel
            afterChange={onChange}
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

export default UIDashBoard;

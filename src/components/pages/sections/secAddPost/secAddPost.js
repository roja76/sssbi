import React, { useState,useRef, useEffect } from 'react';
import { Button, Col, Form, Row, Select, Space, Table, Typography, Input, DatePicker, Image,Modal  } from 'antd';
import JoditEditor from "jodit-react";
import axios from 'axios';
import moment from 'moment';
import { ExclamationCircleOutlined } from '@ant-design/icons';



const { Title } = Typography;
const { confirm } = Modal;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 16,
        span: 8,
    },
};

const SecAddPost = () => {
    const [addPost, setAddPost] = useState(false);
    const [form] = Form.useForm();
    const [updateValue, setUpdateValue] = useState(null);
    // const [categoryList, setCategoryList] = useState([])
    const editor = useRef(null)
    const [description, setDescription] = useState('')
    const someHtml = "<p>asdsff</p><p><br></p><p>affffffffffffff</p>";

    const categoryList = [{id:1,type:'asd'},{id:2,type:'asd'}]

    const config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
	}

    const [dataSource, setDataSource] = useState();

   
      
      const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
        },
        {
            title: 'Image',
            dataIndex: 'Image', 
            render: (text, record) => (

                <Image height="70px"  width="60px" src={record.image} alt={"No image"} />


            ),
            
        },
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
        },
        {
            title: 'Category',
            dataIndex: 'name',
            key: 'name',
        },
        {
          title: 'Posted Date',
          dataIndex: 'posted_date',
          key: 'posted_date',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button type="primary" className="bg-color-2nd" onClick={() => { setDescription(record.description);setUpdateValue(record);setAddPost(true) }}>Edit</Button>
                    <Button type="danger" className="bg-color-1st" onClick={() => { deleteRecord(record.id) }}>Delete</Button>
                </Space>
            ),
        },
      ];

      const getPostList = () => {
        axios.get(`${process.env.REACT_APP_API_URL}post/getAll`)
            .then((res) => {
                // console.log(res)
                if (res.status == 200) {
                    setDataSource(res.data.data);
                    // console.log(res.data.data)
                    //  data = res.data.data;
                } else {

                }
            })
            .catch((error) => {

            });
    }

    useEffect(() => {
        getPostList();
    }, []);

    const deleteRecord = (e) => {
        console.log(e)
        confirm({
            title: 'Do you Want to delete?',
            icon: <ExclamationCircleOutlined />,
            // content: 'Some descriptions',
            onOk() {
                // axios.post(`${process.env.REACT_APP_API_URL}post/test`, [{id: e}])
                axios.post(`${process.env.REACT_APP_API_URL}post/delete`, {id: e})
                    .then((res) => {
                        if (res.status == 200) {
                            getPostList();
                        } else {

                        }
                    })
                    .catch((error) => {

                    });
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

      const onFinish = (values) => {
          if(updateValue != null){
          var obj = {...values,description,id:updateValue.id}
        }else {
          var obj = {...values,description}

        }
        console.log('Success:', {obj});

        let formData = new FormData();
        // formData.append("sampledata","hindu")
        formData.append("input_data", JSON.stringify(obj));
        if (image.length)
        formData.append(
            "uploads",
            image[0],
            image[0].name
        );
        else formData.append("uploads", "");
        console.log(formData);
        if (updateValue == null) {
            // let data = { ...values,description,image: image }
            axios.post(`${process.env.REACT_APP_API_URL}post/insert`, formData)
                .then((res) => {
                    alert('post is added');
                    setAddPost(false)
                    form.resetFields();
                    setDescription(null)
                    getPostList();
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            console.log(formData);
            // let data = {...values,description,image: image }
            axios.post(`${process.env.REACT_APP_API_URL}post/update`, formData)
                .then((res) => {
                    console.log(res);
                    alert('post is updated');
                    setAddPost(false)
                    form.resetFields();
                    setUpdateValue(null);
                    setDescription(null)
                    getPostList();
                })
        }
        
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
      

      const [image, setImage] = useState();

      const uploadImage = (event)=> {
          console.log(event)
    console.log(event.target.files);
    if (event.target.files.length != 0)
      setImage(event.target.files)
        console.log(image);
      }

    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className='card'>
                    {addPost?<div className='p-4'>
                        <div>
                        <Row>
                <Col span={24}><Title level={4}>{
            updateValue ? (
              "Update "
            ) : "Add "
          }Post </Title></Col>
            </Row>
           
                
               
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={updateValue}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}

                    >
                         <Row>
                         <Col span={8} className='p-4'>
                        <Form.Item label="Category" name="category" rules={[{ required: true, message: 'Please select category!' }]}>
                            <Select>
                                {categoryList.map((e) => (
                                    <Select.Option value={e.id}>{e.type}</Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item label="Title" name="title"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter title!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        {/* <Form.Item label="Effective From" name="effective_from" >
                            <DatePicker defaultValue={date.effective_from ? moment(date.effective_from) : null} />
                        </Form.Item>
                        <Form.Item label="Effective To" name="effective_to" >
                            <DatePicker defaultValue={date.effective_to ? moment(date.effective_to) : null} />
                        </Form.Item> */}
                        
                        {/* <Form.Item label="Status" name="status" rules={[{ required: true, message: 'Please select state!' }]}>
                            <Select>
                                <Select.Option value="Active">Active</Select.Option>
                                <Select.Option value="Inactive">Inactive</Select.Option>
                            </Select>
                        </Form.Item> */}
                        <input  type="file" accept="image/*" onChange={uploadImage} />
                        <Image
                                    width={180}
                                    height={180}
                                    src={image}
                                />
                        </Col>
                        <Col span={16}>
                         
                        <JoditEditor
                            ref={editor}
                            value={description}
                            config={config}
                            tabIndex={1} // tabIndex of textarea
                            onBlur={newContent => setDescription(newContent)} // preferred to use only this option to update the content for performance reasons
                            onChange={newContent => {}}
                        />
                        
                        <Form.Item {...tailLayout}>
                            <Row justify="space-between" className='p-5'> 
                                <Col>
                                    <Button type="primary" htmlType="submit" className="bg-color-2nd" >
                                    {
                                        updateValue ? (
                                        "Update "
                                        ) : " Post "
                                    }
                                    </Button>
                                </Col>
                                <Col>
                                    <Button type="primary" onClick={() => {
                                        // history.push("/rate-card-list");
                                        setAddPost(false); setUpdateValue(null);setDescription(null)
                                    }} className="bg-color-2nd" >
                                        Cancel
                        </Button>
                                </Col>
                            </Row>
                        </Form.Item>
                        </Col>
                        </Row>
                    </Form>
               
                
           

                        </div>
                        {/* <button className='btn bg-color-2nd text-white' onClick={()=>setAddPost(false)}>back</button> */}
                        </div>:
                        <div className='p-4'>
                    <div className='d-flex justify-content-end'>
                        <button className='btn bg-color-2nd text-white' onClick={()=>setAddPost(true)}>ADD</button>
                    </div>
                    <hr/>
                    <Table dataSource={dataSource} columns={columns} />
                    </div>
                    }
                </div>
            </div>
            <div className="Container" dangerouslySetInnerHTML={{__html: someHtml}}></div>
        </div>
    );
}

export default SecAddPost;

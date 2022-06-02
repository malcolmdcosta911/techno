import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
const { Option } = Select;
import { Input } from 'antd';
import { Card } from 'antd';

import {
    SettingOutlined,
    HomeOutlined
} from '@ant-design/icons';


import { Button } from 'react-bootstrap';
const { Search } = Input;


function SearchBarComponent(props) {



    const [department, setDepartment] = useState("");

    const [currFunction, setCurrFunction] = useState("");

    const [location, setLocation] = useState("");


    const [dataProvided, setDataProvided] = useState([{
        "id": 1055,
        "code": "JOB-01",
        "title": "Software Developer",
        "description": "string",
        "type": "Full Time",
        "positions": 5,
        "experience": "3 - 5 years",
        "salary": "$5000 - $7000",
        "industry": "Computer / Software",
        "location": {
            "id": 10030,
            "title": "US Head Office",
            "city": "Baltimore",
            "state": "MD",
            "country": "United Nation",
            "zip": 21202
        },
        "department": {
            "id": 2085,
            "title": "Software Development"
        },
        "division": {
            "id": 1055,
            "title": "Frontend Development"
        },
        "function": {
            "id": 102,
            "title": "Computer Engineering"
        },
        "postedDate": "2022-06-02T15:37:59.600Z",
        "closingDate": "2022-06-02T15:37:59.600Z",
        "hostedUrl": "https://demo.jobsoid.com/JobDetails/1055",
        "applyUrl": "https://demo.jobsoid.com/Apply/1055"
    },

    {
        "id": 1067,
        "code": "JOB-02",
        "title": "Backend Developer",
        "description": "string",
        "type": "Full Time",
        "positions": 4,
        "experience": "3 - 6 years",
        "salary": "$5000 - $7000",
        "industry": "Computer / Software",
        "location": {
            "id": 10045,
            "title": "US Head Office",
            "city": "Baltimore",
            "state": "MD",
            "country": "United States",
            "zip": 21202
        },
        "department": {
            "id": 3232,
            "title": "Development"
        },
        "division": {
            "id": 3443,
            "title": "Frontend Development"
        },
        "function": {
            "id": 132,
            "title": "Engineering"
        },
        "postedDate": "2022-06-02T15:37:59.600Z",
        "closingDate": "2022-06-02T15:37:59.600Z",
        "hostedUrl": "https://demo.jobsoid.com/JobDetails/1055",
        "applyUrl": "https://demo.jobsoid.com/Apply/1055"
    }]);



    console.log("dataProvided", dataProvided)




    useEffect(() => {

        const newData = []

        if (department) {

            dataProvided.forEach(ele => {

                if (ele.department.title == department) {
                    console.log(ele)
                    newData.push(ele)
                }
            }

            )


        }



        else if (currFunction) {

            dataProvided.forEach(ele => {

                if (ele.function.title == currFunction) {
                    newData.push(ele)
                }
            }

            )


        }



        else if (location) {

            dataProvided.forEach(ele => {
                if (ele.location.country == location) {
                    newData.push(ele)
                }
            }

            )
        }

        else {
            dataProvided.forEach(ele => {


                newData.push(ele)

            })
        }



        if (newData.length) {
            setDataProvided(newData)
        }



        console.log("newData", newData)
        // setDataProvided(newData)


    }, [department, currFunction, location]);




    const handleChangeDepartment = (value) => {
        console.log("value", value[0])
        if (value[0]) {
            setDepartment(value[0])
        }
    };

    const handleChangeLocation = (value) => {
        console.log("value", value[0])
        if (value[0]) {
            setLocation(value[0])
        }
    };

    const handleChangeFunction = (value) => {
        console.log("value", value[0])
        if (value[0]) {
            setCurrFunction(value[0])
        }
    };


    return (
        <>

            <Card bordered={false} >

                <div className='row mx-5 mt-5'>
                    <div className='col-sm-12 mb-3'>
                        <Search placeholder="Search" />

                    </div>
                    <div className='row'>
                        <div className='col-4 '>
                            <Select
                                mode="multiple"
                                style={{
                                    width: '100%',
                                }}
                                placeholder="Department"
                                // defaultValue={['china']}
                                onChange={handleChangeDepartment}
                                optionLabelProp="label"
                            >
                                {dataProvided[0] ?
                                    dataProvided.map((d, i) =>
                                        <Option value={d.department.title}
                                            label={d.department.title}
                                            key={i}>

                                            {d.department.title}
                                        </Option>)
                                    : null}

                            </Select>

                        </div>


                        <div className='col-4 '>
                            <Select
                                mode="multiple"
                                style={{
                                    width: '100%',
                                }}
                                placeholder="Location"
                                onChange={handleChangeLocation}
                                optionLabelProp="label"
                            >
                                {dataProvided[0] ?
                                    dataProvided.map((d, i) =>
                                        <Option value={d.location.country}
                                            label={d.location.country}
                                            key={i}>

                                        </Option>)
                                    : null}

                            </Select>

                        </div>


                        <div className='col-4 '>
                            <Select
                                mode="multiple"
                                style={{
                                    width: '100%',
                                }}
                                placeholder="Function"
                                // defaultValue={['china']}
                                onChange={handleChangeFunction}
                                optionLabelProp="label"
                            >
                                {dataProvided[0] ?
                                    dataProvided.map((d, i) =>
                                        <Option value={d.function.title}
                                            label={d.function.title}
                                            key={i}>

                                        </Option>)
                                    : null}

                            </Select>

                        </div>

                    </div>



                </div>

            </Card>
            <div className='row  mx-5 mt-5'>
                {dataProvided[0] ? dataProvided.map((d, i) =>
                    <div className='col-sm-12 my-3' key={i}>
                        <Card bodyStyle={{}} headStyle={{ padding: 0 }}>
                            <div className='row'>
                                <div className='col-sm-4  '>
                                    <h5 style={{ fontWeight: "bold" }} >{d.title} </h5>
                                    
                                    <span >    <SettingOutlined />  </span>
                                    <span >    {d.title}  </span>
                                    <span className=' ps-2' >  <HomeOutlined />  </span>
                                    <span >   {d.location.city}  </span>
                                </div>

                         
                            <div className='col-sm-1 text-start '>
                                <Button className="mt-3" variant="secondary" size="sm" >{d.type}</Button>
                            </div>

                                <div className='col-sm-6 text-end'>
                                    <Button variant="secondary" className="mt-3" size="md" style={{borderRadius:5, }}>Apply</Button>
                            </div>
                            </div>
                        </Card>
                    </div>) : null}

            </div>


        </>
    );
}

export default SearchBarComponent;

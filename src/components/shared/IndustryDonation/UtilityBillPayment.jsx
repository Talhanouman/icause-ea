
import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Upload } from 'antd';

import DonateYourBillSection from '../../shared/DonateYourBill';
import { useHistory } from 'react-router';

const setBillType = (selectedBill, allBills, setBills) => {
  const bill = allBills.find(({ method }) => method === selectedBill.method);
  if (!bill) {
    const bills = [...allBills, selectedBill];
    setBills(bills)
  } else {
    const bills = allBills.filter(({ method }) => method !== selectedBill.method);
    setBills(bills);
  }
}

const normFile = (e) => {
  if (e && e.fileList) {
    const updated = e.fileList.find((file, index) => {
      if (index === (e.fileList.length - 1)) {
        return file;
      } else {
        return null
      }
    });
    return updated ? [updated] : [];
  }
};


const onFinishFailed = (errorInfo) => {
};

const UtilityBillPayment = (props) => {
  const [form] = Form.useForm();
  const { getCompanyDetails, industryId, getDonationTypes, payByBill, loading, donationTypes } = props;
  const history = useHistory();

  const [stepNumber, setStepNumber] = useState(1);
  const [selectedBills, setBills] = useState([]);
  const [utilityBillHash, setUtilityBillHash] = useState({});
  const [checkbox, setCheckBox] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [fileList, setFileList] = useState([]);
  const [indexList, setIndexFile] = useState([]);
  const [imagesArr, setImagesArr] = useState([]);

  let finalAmountOfSelectedBills = 0;
  let selectedBillsToDisplay = '';

  selectedBills.forEach(({ finalAmount, name }, index) => {
    finalAmountOfSelectedBills += (finalAmount || 0);
    if (index === selectedBills.length - 1) {
      selectedBillsToDisplay += (name);
    } else {
      selectedBillsToDisplay += (name + ' + ');
    }
  });

  useEffect(() => {
    if (stepNumber === 1) {
      getDonationTypes();
    }
  }, [stepNumber]); // eslint-disable-line react-hooks/exhaustive-deps 

  const handleSelect = () => {
    setCheckBox(!checkbox);
  }

  const callApi = (values) => {
    payByBill({
      ...utilityBillHash,
      email: values.email,
      first_name: values.first_name,
      last_name: values.last_name,
      phone_number: phoneNumber,
      company_id: industryId,
      method: selectedBills.map(({ method }) => method),
      images: combineArray(selectedBills, indexList),
      values
    }).then(() => {
      getCompanyDetails(industryId);
      setStepNumber(1);
      setUtilityBillHash({});
      setBills([]);
      setImagesArr([]);
      setIndexFile([])
      setFileList([]);

      finalAmountOfSelectedBills = 0;
      selectedBillsToDisplay = '';
    }).catch(() => {
      setStepNumber(1);
      setUtilityBillHash({});
      setBills([]);

      finalAmountOfSelectedBills = 0;
      selectedBillsToDisplay = '';
    });
  }

  const onFinishOfPersonalDetail = (utilityBillHash, values, { resetFields, setFields }, setUtilityBillHash, campaignId) => {
    const images = [];
    for (let i = 0; i < selectedBills.length; i++) {
      const formData = new FormData();
      // const nameValue = indexList[i]?.name
      formData.append("filename", fileList[i]?.file);
      images.push({
        "name": indexList[i]?.name ? indexList[i]?.name : selectedBills[i]?.method,
        "index": indexList[i]?.index,
        "image": fileList[i]?.file,
      })
    }
    // const types = history.location?.state?.type;
    const id = history.location.pathname?.split('/');
    callApi({
      ...utilityBillHash,
      email: values.email,
      first_name: values.first_name,
      last_name: values.last_name,
      phone_number: phoneNumber,
      campaigns_id: id[2],
      amount: finalAmountOfSelectedBills,
      // formData,
      type: "campaign",
      company_id: id[2],
      method: selectedBills.map(({ method }) => method),
      images
    })
  };

  const onBillMethodSelection = (
    utilityBillHash,
    setStepNumber,
    { resetFields },
    setUtilityBillHash,
    selectedBills,
  ) => {
    document.body.scrollTop = 1500;
    setUtilityBillHash({
      ...utilityBillHash,
      method: selectedBills.map(({ method }) => method)
    });
  
    setStepNumber(2);
    resetFields();
  }
  
  const prop = {
    onRemove: (file, item) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },

    beforeUpload: (file) => {
      fileList.push({
        file
      })
      setFileList(fileList)
      return false;
    },
  };

  const onFinishUpload = (utilityBillHash, setStepNumber, values, { resetFields }, setUtilityBillHash) => {
    setImagesArr([]);
    document.body.scrollTop = 1500;
    setImagesArr(combineArray(selectedBills, indexList));

    setUtilityBillHash({
      ...utilityBillHash,
      values
    });
    setStepNumber(3);
    resetFields();
  };

  const handleIndex = (name, index) => {
    const preList = indexList.filter(item => item?.name === name);
    if (preList.length > 0) {
      const updatedList = indexList.filter(item => item?.name !== name);
      setIndexFile(updatedList);
    } else {
      const updateIndex = indexList
      updateIndex.push({
        "name": name,
        "index": index
      })
      setIndexFile(updateIndex);
    }
  }

  function combineArray(mainArray, subArray) {
    const newArray = [];
    const updatedSubArray = subArray.map((item, index) => {
      return {
        ...item,
        ...fileList[index]
      }
    })
    for (let item of mainArray) {
      const found = updatedSubArray.find(subItem => subItem.name === item.method);
      if (found) {
        const newItem = {
          ...found,
          ...item,
          image: true,
        }
        newArray.push(newItem)
      } else {
        newArray.push(item)
      }
    }
    return newArray;
  }

  return (
    <div className="container utility-bill-wrap">
      <div style={{ marginBottom: 40 }} className="row justify-content-center">
        <div className="col-lg-4 col-md-4 col-sm-4 col-4 utility-circle-icon">
          <div className="card after">
            <div className={stepNumber === 1 ? 'box active' : 'box'}>
              {stepNumber !== 1 ? <span className='fa fa-check'></span> : <span>1</span>}
              <svg id="user-line_1_" data-name="user-line (1)" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                <path id="Path_1347" data-name="Path 1347" d="M0,0H30V30H0Z" fill="none" />
                <path id="Path_1348" data-name="Path 1348" d="M4,27.333a10.112,10.112,0,0,1,20.222,0H21.695a7.584,7.584,0,0,0-15.167,0ZM14.111,16.048a7.524,7.524,0,1,1,7.583-7.524A7.552,7.552,0,0,1,14.111,16.048Zm0-2.508A5.016,5.016,0,1,0,9.056,8.524,5.034,5.034,0,0,0,14.111,13.54Z" transform="translate(0.889 0.222)" />
              </svg>
            </div>
            <h3>Choose bill method</h3>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-4 utility-circle-icon">
          <div className="card after">
            <div className={stepNumber === 2 ? 'box active' : 'box'}>
              {stepNumber === 3 ? <span className='fa fa-check'></span> : <span>2</span>}
              <svg id="upload-line" xmlns="http://www.w3.org/2000/svg" width="29.167" height="29.167" viewBox="0 0 29.167 29.167">
                <path id="Path_1351" data-name="Path 1351" d="M0,0H29.167V29.167H0Z" fill="none" />
                <path id="Path_1352" data-name="Path 1352" d="M3,22.73H24.97v2.439H3ZM15.205,6.668V20.291H12.764V6.668l-7.41,7.4L3.629,12.348,13.985,2,24.341,12.347l-1.726,1.724-7.41-7.4Z" transform="translate(0.599 0.399)" />
              </svg>
            </div>
            <h3>Upload utility bill</h3>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-4 utility-circle-icon">
          <div className="card">
            <div className={stepNumber === 3 ? 'box active' : 'box'}>
              <span>3</span>
              <svg id="bill-line" xmlns="http://www.w3.org/2000/svg" width="25.833" height="25.833" viewBox="0 0 25.833 25.833">
                <path id="Path_1353" data-name="Path 1353" d="M0,0H25.833V25.833H0Z" fill="none" />
                <path id="Path_1354" data-name="Path 1354" d="M21.976,24.006H4.116A1.108,1.108,0,0,1,3,22.906V3.1A1.108,1.108,0,0,1,4.116,2h17.86a1.108,1.108,0,0,1,1.116,1.1V22.906A1.108,1.108,0,0,1,21.976,24.006Zm-1.116-2.2V4.2H5.233v17.6ZM8.581,9.7h8.93v2.2H8.581Zm0,4.4h8.93v2.2H8.581Z" transform="translate(-0.13 -0.086)" />
              </svg>
            </div>
            <h3>Enter your details</h3>
          </div>
        </div>
      </div>

      {
        stepNumber === 3 &&
        <Form
          className="utility-step-form utility-step-1"
          form={form}
          layout="vertical"
          name="basic"
          onFinish={(values) => onFinishOfPersonalDetail(
            setStepNumber,
            values,
            form,
            setUtilityBillHash
          )}
          onFinishFailed={onFinishFailed}
        >
          <div className="form-row">
            <div className="form-group col-12 mb-0">
              <h6 className="step-title">1. Enter Your Details  </h6>
            </div>
            <div className="form-group col-sm-6 mb-1">
              <Form.Item
                name='first_name'
                rules={[
                  {
                    required: true,
                    message: 'Please input first name!',
                  },
                ]}>
                <Input className="form-control" placeholder='First Name' />
              </Form.Item>
            </div>
            <div className="form-group col-sm-6 mb-1">
              <Form.Item
                name='last_name'
                rules={[
                  {
                    required: true,
                    message: 'Please input last name!',
                  },
                ]}>
                <Input className="form-control" placeholder='Last Name' />
              </Form.Item>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-sm-6 mb-1">
              <Form.Item
                name='email'
                rules={[
                  {
                    required: true,
                    message: 'Please input email!',
                  },
                ]}>
                <Input type='email' className="form-control" placeholder='Email' />
              </Form.Item>
            </div>
            <div className="form-group col-sm-6 mb-1 place-dark">
              <input
              className="form-group"
                style={{ height: "44px", borderRadius: "0px", border: "none", width: "100%", outline: "none" }}
                value={phoneNumber}
                placeholder='&nbsp; e.g. (04) 12343521'
                name="phoneNumber"
                onChange={(event) => {
                  const input = event.target;
                  let value = input.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,2})/);
                  input.value = !value[2] ? value[1] : '(' + value[1] + ') ' + value[2] + (value[3] ? '' + value[3] : '') + (value[4] ? '' + value[4] : '');
                  setPhoneNumber("  " + input.value);
                  setError("");
                }}
              />
              {error && <p style={{ color: "#ff4d4f", fontSize: "12px", marginTop: "5px", marginBottom: "20px" }}>{error}</p>}
            </div>
            <div className="form-group col-12 mb-1 text-right d-flex justify-content-between">
              <Form.Item>
                <button onClick={() => setStepNumber(2)} className="custom-outine-btn mt-2" style={{ height: '39px', width: '53px' }}>
                  <svg id="arrow-right-line_4_" data-name="arrow-right-line (4)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path id="Path_5" data-name="Path 5" d="M24,0H0V24H24Z" fill="none" />
                    <path id="Path_6" data-name="Path 6" d="M7.828,11l5.364-5.364L11.778,4.222,4,12l7.778,7.778,1.414-1.414L7.828,13H20V11Z" /></svg>
                </button>
              </Form.Item>

              <Form.Item>
                <Button
                  onClick={() => {
                    setError("");
                    if (!phoneNumber) {
                      setError("Please enter phone number!")
                    }
                  }}
                  htmlType='submit'
                  style={{ height: '48px', fontWeight: '500', padding: '10px 30px' }}
                  type='primary'
                  className="btn btn-success btn-block">
                    Submit
                  {/* Donate Now */}
                </Button>
              </Form.Item>
            </div>
          </div>

        </Form>
      }
      {
        stepNumber === 2 &&
        <Form
          className="utility-step-form utility-step-2"
          form={form}
          layout="vertical"
          name="basic"
          onFinish={(values) => onFinishUpload(utilityBillHash, setStepNumber, values, form, setUtilityBillHash)}
          onFinishFailed={onFinishFailed}
        >
          <div className="form-row">
            <div className="form-group col-12 mb-0">
              <h6 className="step-title">2. Upload Utility Bills</h6>
            </div>
            {selectedBills && selectedBills.map((item, ind) => (
              <div className="form-group col-sm-12 mb-5 mt-2">
                <div className="custom-file text-center">
                <div className="upload-btn-input" onClick={() => handleIndex(item?.method, ind)}>
                  <div style={{ color: 'green', float: 'left', marginRight: '10px', width: "20%" }}>{item?.name}</div>
                    <Form.Item
                      className="text-center"
                      valuePropName="fileList"
                      name={`billFile-${item?.method}`}
                      getValueFromEvent={normFile}
                    >
                    <Upload
                      {...prop}
                    >
                      <span className="upload-placrholder">
                        <p style={{ color: imagesArr[ind]?.file?.name ? "black" : ''}}>{imagesArr[ind]?.file?.name ? imagesArr[ind]?.file?.name : item.name + ' bill.pdf'}</p>
                      </span>
                      <Button style={{ backgroundColor: 'black', color: 'white', fontWeight: '500', height: '58px', fontSize: '14px' }} className="btn btn-success">
                        <svg id="upload-line" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
                          <path id="Path_1351" data-name="Path 1351" d="M0,0H21V21H0Z" fill="none" />
                          <path id="Path_1352" data-name="Path 1352" d="M3,16.926H18.818v1.756H3ZM11.788,5.361V15.17H10.03V5.361L4.7,10.692,3.453,9.451,10.909,2l7.456,7.45-1.243,1.241L11.788,5.363Z" transform="translate(-0.409 -0.273)" fill="#fff" />
                        </svg>
                        Upload bill
                      </Button>
                      <p className="upload-info">file format: png, pdf,xls   max file size 3mb</p>
                    </Upload>
                  </Form.Item>
                  {selectedBills.length === ind + 1 ?
                    <div className="skip-div">
                      <Button
                        onClick={() => {setStepNumber(3); document.body.scrollTop = 1500;}}
                        style={{ height: '39px' }}
                        type='primary'
                        className="btn btn-success  next-btn btn-block skip-button">
                        Skip
                      </Button>
                    </div> :
                    <div className="skip-div">
                      <Button
                        // onClick={() => setStepNumber(3)}
                        style={{ height: '39px' }}
                        type='primary'
                        className="btn btn-success  next-btn btn-block skip-button">
                        {/* Skip */}
                      </Button>
                    </div>
                  }
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="form-row">
            <div className="form-group col-sm-12 col-12 mt-3 d-flex justify-content-between">
              <Form.Item>
                <button onClick={() => setStepNumber(1)} className="custom-outine-btn mt-2" style={{ height: '39px', width: '53px' }}>
                  <svg id="arrow-right-line_4_" data-name="arrow-right-line (4)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path id="Path_5" data-name="Path 5" d="M24,0H0V24H24Z" fill="none" />
                    <path id="Path_6" data-name="Path 6" d="M7.828,11l5.364-5.364L11.778,4.222,4,12l7.778,7.778,1.414-1.414L7.828,13H20V11Z" /></svg>
                </button>
              </Form.Item>
              <Form.Item>
                <Button
                  htmlType='submit'
                  style={{ height: '39px' }}
                  type='primary'
                  className="btn btn-success  next-btn btn-block">
                  <svg id="arrow-right-line_4_" data-name="arrow-right-line (4)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path id="Path_5" data-name="Path 5" d="M0,0H24V24H0Z" fill="none" />
                    <path id="Path_6" data-name="Path 6" d="M16.172,11,10.808,5.636l1.414-1.414L20,12l-7.778,7.778-1.414-1.414L16.172,13H4V11Z" fill="#fff" />
                  </svg>
                </Button>
              </Form.Item>
            </div>
          </div>
        </Form>
      }
      {
        stepNumber === 1 &&
        <Form className="utility-step-form utility-step-3"
          form={form}
          layout="vertical"
          name="basic"
          onFinish={(values) => onBillMethodSelection(
            utilityBillHash,
            setStepNumber,
            form,
            setUtilityBillHash,
            selectedBills
          )}
          onFinishFailed={onFinishFailed}
        >

          <div className="form-row">
            <div className="form-group col-12 mb-0">
              <h6 className="step-title">3. Choose Bill Method</h6>
            </div>
          </div>
          <DonateYourBillSection
            parentComponentType='donateMoney'
            loading={loading}
            data={donationTypes}
            selectedBills={selectedBills}
            selectedBillsToDisplay={selectedBillsToDisplay}
            finalAmountOfSelectedBills={finalAmountOfSelectedBills}
            setBills={(bill) => setBillType(bill, selectedBills, setBills)}
            handleSelect={handleSelect}
            checkbox={checkbox}
          />
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            {
              <div className="form-row d-flex justify-content-between m-0">
                <div className="form-group">

                </div>
                {
                  finalAmountOfSelectedBills > 0 && checkbox &&
                  <div className="form-group">
                    <Form.Item>
                      <Button htmlType='submit' style={{ height: '39px' }} type='primary' className="btn btn-success  next-btn btn-block">
                        <svg id="arrow-right-line_4_" data-name="arrow-right-line (4)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path id="Path_5" data-name="Path 5" d="M0,0H24V24H0Z" fill="none" />
                          <path id="Path_6" data-name="Path 6" d="M16.172,11,10.808,5.636l1.414-1.414L20,12l-7.778,7.778-1.414-1.414L16.172,13H4V11Z" fill="#fff" />
                        </svg>
                      </Button>
                    </Form.Item>

                  </div>
                }
              </div>
            }
          </div>
        </Form>

      }
    </div>
  );
};

export default UtilityBillPayment;

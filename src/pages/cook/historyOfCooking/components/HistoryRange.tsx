import { DatePicker, Space } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';
import moment from 'moment';
import React from 'react';

const { RangePicker } = DatePicker;

const range = (start: number, end: number) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};


const disabledDate: RangePickerProps['disabledDate'] = (current) => {
  // Can not select days after today and
  return current > moment().endOf('day');
};

const disabledDateTime = () => ({
  disabledHours: () => range(0, 24).splice(4, 20),
  disabledMinutes: () => range(30, 60),
  disabledSeconds: () => [55, 56],
});

const disabledRangeTime: RangePickerProps['disabledTime'] = (_, type) => {
  if (type === 'start') {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
};

const onChange: RangePickerProps['onChange'] = (dates, dateStrings) => {
  if (dates) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
    console.log(dateStrings);
    const divideArray = dateStrings[0].split('');
    console.log(divideArray);
  } else {
    console.log('Clear');
  }
  const date = new Date();
  console.log(typeof date.getMonth());
};

const HistoryRange: React.FC = () => (
  <Space direction="vertical" size={12}>
    {/* <DatePicker
      format="YYYY-MM-DD HH:mm:ss"
      disabledDate={disabledDate}
      disabledTime={disabledDateTime}
      showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
    /> */}
    {/* <DatePicker picker="month" disabledDate={disabledDate} /> */}
    <RangePicker
      disabledDate={disabledDate}
      onChange={onChange}
      format="DD-MM-YYYY"
    />
  </Space>
);

export default HistoryRange;

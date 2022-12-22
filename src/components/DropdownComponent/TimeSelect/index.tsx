import { DatePicker } from 'antd';
import moment from 'moment';
import icons from '../../../shared/assests/icons';
import './style.scss';

const TimeSelect = () => {
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
  return (
    <>
      <div className="element-item">
        <DatePicker
          defaultValue={moment('10/10/2021', dateFormatList[0])}
          format={dateFormatList}
        />
        <img style={{ padding: '0 10px' }} src={icons.rightTriangleIcon} alt="rightTriangleIcon" />
        <DatePicker
          defaultValue={moment('18/10/2021', dateFormatList[0])}
          format={dateFormatList}
        />
      </div>
    </>
  );
};

export default TimeSelect;

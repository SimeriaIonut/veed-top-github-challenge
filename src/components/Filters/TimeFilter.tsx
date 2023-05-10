import React from 'react';
import Input from '../Inputs/Input';

interface TimeFilterProps {
  selectedTime: number;
  onSelectTime: (days: number) => void;
}

const TimeFilter: React.FC<TimeFilterProps> = ({
  selectedTime,
  onSelectTime,
}) => {
  return (
    <div>
      <Input
        name='time-filter'
        label={'Choose days in the past'}
        value={selectedTime}
        onValueChange={onSelectTime}
      />
    </div>
  );
};

export default TimeFilter;

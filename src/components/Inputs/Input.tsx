import { DEFAULT_DAYS_AGO } from '../../api/repositories';

interface InputProps {
  type?: string;
  label: string;
  name: string;
  value: number;
  onValueChange: (value: number) => void;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  label,
  name,
  value = DEFAULT_DAYS_AGO,
  onValueChange,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className='block text-sm font-medium leading-6 text-gray-900'
      >
        {label}
      </label>
      <div className='relative mt-0.5 rounded-md shadow-sm'>
        <input
          type={type}
          name={name}
          id={name}
          className='block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          placeholder='0'
          value={value}
          onChange={(e) => onValueChange(parseInt(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Input;

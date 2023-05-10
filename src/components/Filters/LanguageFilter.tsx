import React from 'react';
import SelectInput from '../Inputs/SelectInput';

interface LanguageFilterProps {
  languages: string[];
  selectedLanguage: string;
  onSelectLanguage: (language: string) => void;
}

const LanguageFilter: React.FC<LanguageFilterProps> = ({
  languages,
  selectedLanguage,
  onSelectLanguage,
}) => {
  return (
    <div>
      {languages.length !== 0 && (
        <SelectInput
          options={['All', ...languages]}
          label={'Filter by programming language'}
          selectedValue={selectedLanguage === '' ? 'All' : selectedLanguage}
          onSelectedValue={onSelectLanguage}
        />
      )}
    </div>
  );
};

export default LanguageFilter;

import React, {useContext} from 'react';
import { TranslationContext } from '../../../../context/TranslationContext';

interface EmptyListProps {
  title: string;
}

const EmptyList = ({ title }: EmptyListProps) => {
  const {isEnglish} = useContext(TranslationContext)

  const capitalize = (tit: any) => {
    return tit.slice(0, 1).toUpperCase() + tit.slice(1);
  };

  return (
    <div className="emptyList">
      <p>{capitalize(title)} {isEnglish ? 'list is empty.' : 'jest puste.'}</p>
      <p>{isEnglish ? 'Add ingredients of' : 'Dodaj składnik posiłku:'} {title}</p>
    </div>
  );
};

export default EmptyList;

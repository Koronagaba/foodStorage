import React from "react";

interface EmptyListProps {
  title: string;
}

const EmptyList = ({ title }: EmptyListProps) => {
  const capitalize = (tit: any) => {
    return tit.slice(0, 1).toUpperCase() + tit.slice(1);
  };

  return (
    <div className="emptyList">
      <p>{capitalize(title)} list is empty.</p>
      <p>Add ingredients of {title}</p>
    </div>
  );
};

export default EmptyList;

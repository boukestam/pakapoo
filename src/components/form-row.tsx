import React from 'react';

function FormRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-2">
      <div className="text-sm text-gray-600">{label}</div>
      <div>{children}</div>
    </div>
  );
}

export default FormRow;

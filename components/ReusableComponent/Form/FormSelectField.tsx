"use client";

import { useFormContext, Controller } from "react-hook-form";
import { getErrorMessageByPropertyName } from "../../../utils/schema-validator";

export type SelectOptions = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  options: SelectOptions[];
  name: string;
  className?: string;
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  defaultValue?: any;
  required?: boolean;
  handleChange?: (el: string) => void;
};

const FormSelectField = ({ name, value, placeholder = "select", required, options, label, defaultValue, handleChange, }: SelectFieldProps) => {
  const { control, formState: { errors }, } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      {label ?
        <label className="label">
          <span className="label-text">{label} {required ? (<span className="text-error-color">* </span>) : null}</span>
        </label>
        : null
      }
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <select className={`select select-bordered w-full ${errorMessage && "errorBehavior"}`} onChange={handleChange ? handleChange : onChange}>
            {defaultValue && <option defaultValue={defaultValue}>{defaultValue}</option>}
            <option>SELECT</option>
            {name === 'division' && options?.length === 0 && <option>Loading...</option>}
            {options?.map((opt, i) => <option value={opt.value} key={i}>{opt.label}</option>)}
          </select>
        )}
      />
      <small className="text-error-color text-xs">{errorMessage}</small>
    </>
  );
};

export default FormSelectField;

"use client";


import { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { RiEyeCloseFill, RiEyeCloseLine } from "react-icons/ri";
import { getErrorMessageByPropertyName } from "../../../utils/schema-validator";

interface IInput {
  name: string;
  type?: string;
  className?: string
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  required?: boolean;
}

const FormInput = ({ name, type, value, id, placeholder, validation, className, label, required, }: IInput) => {

  const { control, formState: { errors }, } = useFormContext();
  const [showPassword, setShowPassword] = useState<boolean>(false)


  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      {label ?
        <label className="label">
          <span className="label-text">{label}{required ? (<span className="text-error-color">* </span>) : null}</span>
        </label>
        : null
      }

      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <div className="relative">
              <input
                type={showPassword ? 'text' : type}
                className={`input input-bordered ${errorMessage && "errorBehavior"}  ${className}`}
                placeholder={placeholder}
                {...field}
                value={value ? value : field.value}
              />
              <div className="absolute right-5 top-4 cursor-pointer " title="show/hide" onClick={() => setShowPassword(!showPassword)} >
                {showPassword ? <RiEyeCloseLine /> : <RiEyeCloseFill />}
              </div>
            </div>
          ) :
            (
              <input
                type={type}
                className={`input input-bordered ${errorMessage && "errorBehavior"} ${className}`}
                placeholder={placeholder}
                {...field}
                value={value ? value : field.value}
              />
            )
        }
      />
      <small className="text-error-color text-xs">{errorMessage}</small>

    </>
  );
};

export default FormInput;
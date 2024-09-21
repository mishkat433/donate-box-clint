import { Controller, useFormContext } from "react-hook-form";
import { getErrorMessageByPropertyName } from "../../../utils/schema-validator";

type TextAreaProps = {
  name: string;
  label?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
};

const FormTextArea = ({ name, label, value, placeholder, required = false, className = '' }: TextAreaProps) => {
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
        render={({ field }) =>
          <textarea
            placeholder={placeholder}
            {...field}
            value={value ? value : field.value}
            className={`textarea textarea-bordered textarea-sm w-full text-[15px] ${className}`} >
          </textarea>

        }
      />
      <small className="text-error-color text-xs ">{errorMessage}</small>

    </>
  );
};

export default FormTextArea;

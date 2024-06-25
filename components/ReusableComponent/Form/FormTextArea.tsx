import { Controller, useFormContext } from "react-hook-form";

type TextAreaProps = {
  name: string;
  label?: string;
  value?: string;
  placeholder?: string;
};

const FormTextArea = ({ name, label,  value, placeholder }: TextAreaProps) => {
  // const errorMessage = getErrorMessageByPropertyName(errors, name);
  const { control } = useFormContext();
  return (
    <>
      {label ?
        <label className="label">
          <span className="label-text">{label}</span>
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
            className="textarea textarea-bordered textarea-sm w-full text-[15px]" >
            </textarea>

        }
      />

      {/* <small className="text-error-color text-xs">{errorMessage}</small> */}

    </>
  );
};

export default FormTextArea;

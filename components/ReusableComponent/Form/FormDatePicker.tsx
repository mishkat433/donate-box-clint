import { format, FormatDateOptions } from "date-fns";
import { Controller, useFormContext } from "react-hook-form";
import { getErrorMessageByPropertyName } from "../../../utils/schema-validator";

type DBDatePikerProps = {
    onChange?: any;
    name: string;
    label?: string;
    value?: FormatDateOptions;
    className: any;
    required?: boolean;
};

const FormDatePicker = ({ name, label, onChange, className = "", required = false }: DBDatePikerProps) => {
    const { control, setValue, formState: { errors } } = useFormContext();
    const errorMessage = getErrorMessageByPropertyName(errors, name);

    const handleOnChange = (date: string) => {
        onChange ? onChange(date) : null;
        setValue(name, date);
    };

    return (
        <div>
            {label ?
                <label className="label">
                    <span className="label-text">{label}{required ? (<span className="text-error-color">* </span>) : null}</span>
                </label>
                : null
            }
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <input
                        type="date"
                        className={`input input-bordered ${errorMessage && "errorBehavior"} ${className}`}
                        // defaultValue={format((field.value || new Date()), 'ddd-MMM-yyyy')}
                        value={field.value}
                        onChange={(e) => handleOnChange(e.target.value)}

                    />
                )}
            />
            <small className="text-error-color text-xs">{errorMessage}</small>
        </div>
    );
};

export default FormDatePicker;




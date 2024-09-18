
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { getErrorMessageByPropertyName } from "../../../utils/schema-validator";

type FormTimePickerProps = {
    onChange?: any;
    name: string;
    label?: string;
    index?: number;
    required?: boolean;
    className?: string;
};
export default function FormTimePicker({ name, label, required = false, className = "", onChange }: FormTimePickerProps) {
    const { control, setValue, formState: { errors } } = useFormContext();
    const errorMessage = getErrorMessageByPropertyName(errors, name);


    const handleOnChange = (time: string) => {
        onChange ? onChange(time) : null;
        setValue(name, time);
    };

    return (
        <>
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
                        type="time"
                        name={name}
                        className={`input input-bordered ${errorMessage && "errorBehavior"} ${className}`}
                        value={field.value}
                        onChange={(e) => handleOnChange(e.target.value)}
                    />
                )}
            />
            <small className="text-error-color text-xs">{errorMessage}</small>
        </>
    );
}

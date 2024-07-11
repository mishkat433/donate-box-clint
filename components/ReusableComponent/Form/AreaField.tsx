"use client"

import { useEffect, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { locationApi } from "../../../redux/api/getLocation/getLocation";
import FormSelectField from "./FormSelectField";

type FormValues = {
    district: string
}

const AreaField = () => {
    const [areaOptions, setAreaOptions] = useState<any[]>([]);

    const { control } = useFormContext<FormValues>();
    const selectedDistrict = useWatch({ control, name: "district", });


    useEffect(() => {
        const fetchDistricts = async () => {
            if (selectedDistrict) {
                const area = await locationApi.getArea(selectedDistrict);
                setAreaOptions(area);
            }
        };
        fetchDistricts();
    }, [selectedDistrict]);

    return (
        <FormSelectField
            name="area"
            className="w-full"
            label="Select Your Area"
            options={areaOptions}
        />
    );
};


export default AreaField;
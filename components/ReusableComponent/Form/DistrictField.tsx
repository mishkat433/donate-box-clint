"use client"

import { useEffect, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { locationApi } from "../../../redux/api/getLocation/getLocation";
import FormSelectField from "./FormSelectField";

type FormValues = {
    division: string
}

const DistrictField = ({ required = true }) => {

    const [districtOptions, setDistrictOptions] = useState<any[]>([]);

    const { control } = useFormContext<FormValues>();
    const selectedDivision = useWatch({ control, name: "division", });


    useEffect(() => {
        const fetchDistricts = async () => {
            if (selectedDivision) {
                const districts = await locationApi.getDistrict(selectedDivision);
                setDistrictOptions(districts);
            }
        };
        fetchDistricts();
    }, [selectedDivision]);

    return (
        <FormSelectField
            name="district"
            className="w-full"
            label="Select District"
            options={districtOptions}
            required={required}
        />
    );
};


export default DistrictField;
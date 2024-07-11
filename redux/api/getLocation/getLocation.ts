import { axiosBaseQuery } from "../../../helpers/axios/axiosBaseQuery";
import { instance as axiosInstance } from "../../../helpers/axios/axiosInstance";

// type division = {
//     coordinates: string;
//     division: string;
//     divisionbn: string
// }

const defaultLocationUrl = "https://bdapis.com/api/v1.2";


const getDivision = async () => {
    try {
        const allDivisionName = await axiosInstance({
            url: `${defaultLocationUrl}/divisions`,
            method: "get",
            headers: { "Content-Type": "application/json" },
        });

        return await allDivisionName?.data?.data?.map((division) => (
            {
                label: division?.division,
                value: division?.division
            }
        ))

    }
    catch (err) {
        console.log(err)
        return []
    }
}


let allDistrictName: any

const getDistrict = async (division: string) => {
    try {
        allDistrictName = await axiosInstance({
            url: `${defaultLocationUrl}/division/${division}`,
            method: "get",
            headers: { "Content-Type": "application/json" },
        });

        return await allDistrictName?.data?.data?.map((district: any) => (
            {
                label: district?.district,
                value: district?.district
            }
        ))
    }
    catch (err) {
        return []
    }
}

const getArea = async (selectedDistrict: string) => {

    try {
        const findDistrict = await allDistrictName?.data?.data?.find((district: any) => district.district === selectedDistrict)
        return await findDistrict?.upazilla?.map((area: any) => (
            {
                label: area,
                value: area
            }
        ))
    }
    catch (err) {
        console.log(err)
        return []
    }
}

export const locationApi = {
    getDivision,
    getDistrict,
    getArea
}


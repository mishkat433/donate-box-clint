import * as yup from "yup";


export const addBannerSchema = yup.object().shape({
    showing: yup.boolean().required("Banner Showing status is required"), 
    path: yup.string().required("Image URL is required"),
});
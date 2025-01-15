import { Input, Textarea } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { imageUpload } from '../../Hooks/imageHooks';

const Admission = () => {
    const axiosSecure = useAxiosSecure();
    const [stateOptions, setStateOptions] = useState([]);
    const [localCountry, setLocalCountry] = useState(null);
    const [selectedStateCategory, setStateProductCategory] = useState(null);
    const [districtOption, setDistrictOption] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    useEffect(() => {
        setLoading(true);
        const options = localCountry?.value === "Bangladesh" ? [
            { value: "Dhaka", label: "Dhaka" },
            { value: "Chattogram", label: "Chattogram" },
            { value: "Khulna", label: "Khulna" },
            { value: "Barishal", label: "Barishal" },
            { value: "Sylhet", label: "Sylhet" },
            { value: "Rangpur", label: "Rangpur" },
            { value: "Rajshahi", label: "Rajshahi" }
        ] : [];

        const district = {
            Dhaka: [
                { value: "Dhaka", label: "Dhaka" },
                { value: "Faridpur", label: "Faridpur" },
                { value: "Gazipur", label: "Gazipur" },
                { value: "Gopalganj", label: "Gopalganj" },
                { value: "Kishoreganj", label: "Kishoreganj" },
                { value: "Madaripur", label: "Madaripur" },
                { value: "Manikganj", label: "Manikganj" },
                { value: "Munshiganj", label: "Munshiganj" },
                { value: "Mymensingh", label: "Mymensingh" },
                { value: "Narsingdi", label: "Narsingdi" },
                { value: "Narayanganj", label: "Narayanganj" },
                { value: "Tangail", label: "Tangail" },
                { value: "Shariatpur", label: "Shariatpur" },
                { value: "Netrokona", label: "Netrokona" }
            ],
            Chattogram: [
                { value: "Chattogram", label: "Chattogram" },
                { value: "Bandarban", label: "Bandarban" },
                { value: "Brahmanbaria", label: "Brahmanbaria" },
                { value: "Chandpur", label: "Chandpur" },
                { value: "Feni", label: "Feni" },
                { value: "Khagrachari", label: "Khagrachari" },
                { value: "Lakshmipur", label: "Lakshmipur" },
                { value: "Noakhali", label: "Noakhali" },
                { value: "Rangamati", label: "Rangamati" },
                { value: "Cox'sbazar", label: "Cox'sbazar" }
            ],
            Khulna: [
                { value: "Khulna", label: "Khulna" },
                { value: "Bagerhat", label: "Bagerhat" },
                { value: "Chuadanga", label: "Chuadanga" },
                { value: "Jessore", label: "Jessore" },
                { value: "Jhenaidah", label: "Jhenaidah" },
                { value: "Kushtia", label: "Kushtia" },
                { value: "Meherpur", label: "Meherpur" },
                { value: "Mongla", label: "Mongla" },
                { value: "Satkhira", label: "Satkhira" }
            ],
            Barishal: [
                { value: "Barishal", label: "Barishal" },
                { value: "Barguna", label: "Barguna" },
                { value: "Bhola", label: "Bhola" },
                { value: "Jhalokathi", label: "Jhalokathi" },
                { value: "Patuakhali", label: "Patuakhali" },
                { value: "Pirojpur", label: "Pirojpur" },

            ],
            Sylhet: [
                { value: "Sylhet", label: "Sylhet" },
                { value: "Habiganj", label: "Habiganj" },
                { value: "Moulvibazar", label: "Moulvibazar" },
                { value: "Sunamganj", label: "Sunamganj" },
                { value: "Mymensingh", label: "Mymensingh" },
            ],
            Rangpur: [
                { value: "Rangpur", label: "Rangpur" },
                { value: "Dinajpur", label: "Dinajpur" },
                { value: "Gaibandha", label: "Gaibandha" },
                { value: "Kurigram", label: "Kurigram" },
                { value: "Lalmonirhat", label: "Lalmonirhat" },
                { value: "Nilphamari", label: "Nilphamari" },
                { value: "Panchagarh", label: "Panchagarh" },
                { value: "Thakurgaon", label: "Thakurgaon" }, ,
            ],
            Rajshahi: [
                { value: "Rajshahi", label: "Rajshahi" },
                { value: "Bogra", label: "Bogra" },
                { value: "Chapai Nawabganj", label: "Chapai Nawabganj" },
                { value: "Naogaon", label: "Naogaon" },
                { value: "Natore", label: "Natore" },
                { value: "Pabna", label: "Pabna" },
                { value: "Rajshahi", label: "Rajshahi" },
                { value: "Rangpur", label: "Rangpur" },
                { value: "Shibganj", label: "Shibganj" },
            ]
        };

        setStateOptions(options);
        setDistrictOption(district[selectedStateCategory?.value] || []);
        setLoading(false);
    }, [localCountry, selectedStateCategory]);

    const handleCategoryChange = (selectedOption) => {
        setLocalCountry(selectedOption);
        setValue("category", selectedOption?.value || null);
        setStateProductCategory(null);
        setSelectedDistrict(null);
    };

    const handleProductCategoryChange = (selectedOption) => {
        setStateProductCategory(selectedOption);
        setValue("state_category", selectedOption?.value || null);
        setSelectedDistrict(null);
    };

    const handleDistrictChange = (selectedOption) => {
        setSelectedDistrict(selectedOption);
        setValue("district", selectedOption?.value || null);
    };

    const onSubmit = async data => {
        const photo = data.photo?.[0];
        const imageData = await imageUpload(photo);

        const admissionDetails = {
            candidateName: data.candidateName,
            country: localCountry?.value,
            state_category: data.state_category,
            district: data.district,
            email: data.email,
            address: data.address,
            contactNumber: Number(data.contactNumber), 
            dateOfBirth: parseFloat(data.dateOfBirth),
            collegeName: data.collegeName,
            photo: imageData?.data?.display_url || ""
        };

        axiosSecure.post("/admissionForm", admissionDetails)
            .then((res) => {
                if (res.data.insertedId) {
                    toast.success("Form submitted successfully!");
                }
            })
            .catch((err) => {
                console.error(err);
                toast.error("Something went wrong. Please try again.");
            });
    };

    return (
        <div  data-aos="fade-up" className="max-w-7xl mx-auto px-4">
            <Helmet>
                <meta charSet="utf-8" />
                <title>EDUBOOKER - Admission</title>
            </Helmet>
            <p className="text-2xl font-bold text-center mb-8 mt-3 uppercase">
                Fill Up Form for Admission
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input type="file" accept="image/*" name="photo" className="file-input file-input-ghost w-full border-4" {...register("photo")} />
                <div className="form-control">
                    <Input
                        type="text"
                        size="lg"
                        color="green"
                        label="Candidate Name"
                        {...register("candidateName", { required: true })}
                        className="text-black"
                    />
                    {errors.candidateName && (
                        <span className="text-red-500">This field is required</span>
                    )}
                    <br />
                    <select
                        {...register("collegeName", { required: true })}
                        className="select select-bordered w-full"
                    >
                                             <option disabled selected>Select College</option>
                                            <option>Dhaka College</option>
                                            <option>Notre Dame College</option>
                                            <option>Rajshahi College</option>
                                            <option>Chittagong College</option>
                                            <option>Holy Cross Colleg</option>
                                            <option>Comilla Victoria College</option>
                                            <option>Barisal Govt. College</option>
                                            <option>Sylhet Govt. College</option>
                                            <option>Govt. City College, Chittagong</option>


                    </select>
                    {errors.collegeName && (
                        <span className="text-red-500">This field is required</span>
                    )}
                    <br />
                    <Input
                        type="email"
                        size="lg"
                        color="green"
                        label="Email"
                        {...register("email", { required: true })}
                        className="text-black"
                    />
                    {errors.email && (
                        <span className="text-red-500">This field is required</span>
                    )}
                    <br />
                    <p className="mb-1">Date of Birth</p>
                    <input
                        type="date"
                        {...register("dateOfBirth", { required: true })}
                        className="border border-gray-400 rounded w-full p-2 mb-2"
                    />
                    {errors.dateOfBirth && (
                        <span className="text-red-500">This field is required</span>
                    )}
                    <input
                        type="number"
                        {...register("contactNumber", { required: true })}
                        placeholder="Contact Number"
                        className="p-2 w-full border-2 rounded"
                    />
                    {errors.contactNumber && (
                        <span className="text-red-500">This field is required</span>
                    )}
                    <br />
                    <Select
                        placeholder="Select Country"
                        options={[{ value: "Bangladesh", label: "Bangladesh" }]}
                        value={localCountry}
                        onChange={handleCategoryChange}
                        isClearable
                        className="w-full text-gray-700"
                    />
                    <br />
                    <Select
                        placeholder="Select State"
                        options={stateOptions}
                        value={selectedStateCategory}
                        onChange={handleProductCategoryChange}
                        isDisabled={loading || stateOptions.length === 0}
                        isClearable
                        className="w-full text-gray-800"
                    />
                    <br />
                    <Select
                        placeholder="Select District"
                        options={districtOption}
                        value={selectedDistrict}
                        onChange={handleDistrictChange}
                        isDisabled={!selectedStateCategory}
                        isClearable
                        className="w-full text-gray-800"
                    />
                    <br />
                    <Textarea
                        color="green"
                        label="Full Address"
                        {...register("address", { required: true })}
                        className="text-black"
                    />
                    {errors.address && (
                        <span className="text-red-500">This field is required</span>
                    )}
                </div>
                <button
                    type="submit"
                    className="btn w-full bg-white text-black font-bold shadow-lg"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Admission;

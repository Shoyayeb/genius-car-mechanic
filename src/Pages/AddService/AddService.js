import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                console.log(res.data);
            })
        console.log(data)
    };

    return (
        <div>
            <h1>Add a Service</h1>
            <div className="add-service">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="name" {...register("name", { required: true, maxLength: 30 })} />
                    <textarea placeholder="description" {...register("description")} />
                    <input placeholder="price" type="number" {...register("price")} />
                    <input placeholder="image url" {...register("img")} />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;
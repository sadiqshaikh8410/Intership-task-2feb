import React from "react";
import { useForm } from "react-hook-form";

export const Formdemo4 = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Hospital Registration Form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label>Patient Name</label>
          <input
            type="text"
            {...register("patientName", { required: "Patient name is required" })}
          />
          <p style={{ color: "red" }}>{errors.patientName?.message}</p>
        </div>

        <div>
          <label>Age</label>
          <input
            type="number"
            {...register("age", {
              required: "Age is required",
              min: { value: 1, message: "Age must be valid" }
            })}
          />
          <p style={{ color: "red" }}>{errors.age?.message}</p>
        </div>

        <div>
          <label>Gender</label><br />
          <input type="radio" value="male" {...register("gender", { required: "Select gender" })} /> Male
          <input type="radio" value="female" {...register("gender", { required: "Select gender" })} /> Female
          <p style={{ color: "red" }}>{errors.gender?.message}</p>
        </div>

        <div>
          <label>Contact Number</label>
          <input
            type="text"
            {...register("contact", {
              required: "Contact number required",
              minLength: { value: 10, message: "Enter valid number" }
            })}
          />
          <p style={{ color: "red" }}>{errors.contact?.message}</p>
        </div>

        <div>
          <label>Department</label>
          <select {...register("department", { required: "Select department" })}>
            <option value="">Select</option>
            <option value="cardiology">Cardiology</option>
            <option value="neurology">Neurology</option>
            <option value="orthopedic">Orthopedic</option>
          </select>
          <p style={{ color: "red" }}>{errors.department?.message}</p>
        </div>

        <div>
          <input type="submit" />
        </div>

      </form>
    </div>
  );
};

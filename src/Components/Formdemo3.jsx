import React from "react";
import { useForm } from "react-hook-form";

export const Formdemo3 = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Library Management Form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label>Student Name</label>
          <input
            type="text"
            {...register("studentName", { required: "Student name is required" })}
          />
          <p style={{ color: "red" }}>{errors.studentName?.message}</p>
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format"
              }
            })}
          />
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        </div>

        <div>
          <label>Book Name</label>
          <input
            type="text"
            {...register("bookName", { required: "Book name is required" })}
          />
          <p style={{ color: "red" }}>{errors.bookName?.message}</p>
        </div>

        <div>
          <label>Issue Date</label>
          <input
            type="date"
            {...register("issueDate", { required: "Issue date required" })}
          />
          <p style={{ color: "red" }}>{errors.issueDate?.message}</p>
        </div>

        <div>
          <label>Return Date</label>
          <input
            type="date"
            {...register("returnDate", { required: "Return date required" })}
          />
          <p style={{ color: "red" }}>{errors.returnDate?.message}</p>
        </div>

        <div>
          <input type="submit" />
        </div>

      </form>
    </div>
  );
};

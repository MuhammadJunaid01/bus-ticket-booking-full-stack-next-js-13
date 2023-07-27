import { Box, Button, TextInput } from "@mantine/core";
import React from "react";
import { FormValues, initialValues } from "../BusModal";
import useFormValidation from "@/lib/hooks/validateForm";
export interface BookingFormProps {
  // formData: React.Dispatch<React.SetStateAction<FormValues>>;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({
  handleChange,
  // formData,
}) => {
  const { formData, errors, validateForm } = useFormValidation(initialValues);

  return (
    <div>
      {/* <form onSubmit={form.onSubmit((values) => console.log(values))}> */}
      <Box>
        <TextInput
          onChange={handleChange}
          withAsterisk
          label="ID"
          name="id"
          // value={formData.id}
          type="text"
          placeholder="Enter your NID Number: "
          error={!!errors.id} // Set error prop to true when there's an error
        />
        {errors.id && <span>{errors.id}</span>}
      </Box>
      <Box>
        <TextInput
          onChange={handleChange}
          withAsterisk
          label="Name"
          name="name"
          type="text"
          // value={formData.name}
          placeholder="Jhon Doe"
          error={!!errors.name} // Set error prop to true when there's an error
        />
        {errors.name && <span>{errors.name}</span>}
      </Box>

      <Box>
        <TextInput
          onChange={handleChange}
          withAsterisk
          label="Email"
          name="email"
          type="email"
          // value={formData.email}
          placeholder="your@email.com"
          error={!!errors.email} // Set error prop to true when there's an error
        />
        {errors.email && <span>{errors.email}</span>}
      </Box>
    </div>
  );
};

export default BookingForm;

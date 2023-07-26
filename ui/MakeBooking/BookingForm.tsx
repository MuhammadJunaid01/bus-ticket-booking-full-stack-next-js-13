import { Button, Checkbox, Group, TextInput } from "@mantine/core";
import { NumberInput } from "@mantine/core";
import React from "react";
export interface BookingFormProps {
  setId: React.Dispatch<React.SetStateAction<number>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

const BookingForm: React.FC<BookingFormProps> = ({
  setId,
  setEmail,
  setName,
}) => {
  // const form = useForm({
  //   initialValues: {
  //     id: "",
  //     name: "",
  //     email: "",

  //     termsOfService: false,
  //   },

  //   validate: {
  //     id: (value) =>
  //       value.length < 10 ? " NID number must have at least 10 number" : null,
  //     name: (value) =>
  //       value.length < 3 ? " name must have at least 3 letters" : null,
  //     email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
  //   },
  // });

  return (
    <div>
      {/* <form onSubmit={form.onSubmit((values) => console.log(values))}> */}
      <TextInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setId(parseInt(e.target.value))
        }
        withAsterisk
        label="ID"
        placeholder="Enter your NID Number: "
        // {...form.getInputProps("id")}
      />

      <TextInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
        withAsterisk
        label="Name"
        placeholder="Jhon Doe"
        // {...form.getInputProps("name")}
      />
      <TextInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        withAsterisk
        label="Email"
        placeholder="your@email.com"
        // {...form.getInputProps("email")}
      />

      {/* <Checkbox
        mt="md"
        label="I agree to sell my privacy"
        // {...form.getInputProps("termsOfService", { type: "checkbox" })}
      />

      <Group position="right" mt="md">
        <Button type="submit">Submit</Button>
      </Group> */}
      {/* </form> */}
    </div>
  );
};

export default BookingForm;

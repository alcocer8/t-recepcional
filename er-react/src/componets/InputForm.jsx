import { Typography, Input } from "@material-tailwind/react";

function InputForm({ label, type, placeholder }) {
  return (
    <div className="flex flex-col gap-5">
      <Typography variant="h6" color="blue-gray" className="-mb-3">
        {label}
      </Typography>
      <Input
        type={type}
        size="lg"
        placeholder={placeholder}
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        min={type != "password" ? 4 : 6}
      />
    </div>
  );
}

export default InputForm;

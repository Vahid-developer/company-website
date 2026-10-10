
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { contactSchema } from "../schemas/contactSchema";

const initialValues = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

function useContactForm() {
  const [status, setStatus] = useState("idle");

  const {
    register,
    handleSubmit: handleFormSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: initialValues,
    mode: "onBlur",
  });

  async function onValidSubmit() {
    setStatus("submitting");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      reset(initialValues);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const handleSubmit = handleFormSubmit(
    onValidSubmit,
    () => setStatus("idle"),
  );

  function handleChange() {
    if (status === "success" || status === "error") {
      setStatus("idle");
    }
  }

  return {
    register,
    errors,
    status,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
}

export default useContactForm;

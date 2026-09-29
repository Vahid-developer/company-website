import { useState } from "react";

const initialValues = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

function normalizeDigits(value) {
  return value
    .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)));
}

function validate(values) {
  const errors = {};

  const name = values.name.trim();
  const phone = normalizeDigits(values.phone).replace(/[\s-]/g, "");
  const email = values.email.trim();
  const subject = values.subject.trim();
  const message = values.message.trim();

  if (!name) {
    errors.name = "نام و نام خانوادگی را وارد کنید.";
  } else if (name.length < 3) {
    errors.name = "نام باید حداقل ۳ حرف باشد.";
  }

  if (!phone) {
    errors.phone = "شماره تماس را وارد کنید.";
  } else if (!/^09\d{9}$/.test(phone)) {
    errors.phone = "شماره موبایل معتبر نیست (مثال: 09123456789).";
  }

  if (!email) {
    errors.email = "ایمیل را وارد کنید.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "ایمیل معتبر نیست.";
  }

  if (!subject) {
    errors.subject = "موضوع پیام را وارد کنید.";
  }

  if (!message) {
    errors.message = "متن پیام را بنویسید.";
  } else if (message.length < 10) {
    errors.message = "پیام باید حداقل ۱۰ حرف باشد.";
  }

  return errors;
}

function useContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function handleChange(event) {
    const { name, value } = event.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => {
      if (!prev[name]) return prev;

      const next = { ...prev };
      delete next[name];
      return next;
    });

    if (status === "success" || status === "error") {
      setStatus("idle");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (status === "submitting") return;

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");

    try {
      // TODO: اینجا درخواست واقعی به API یا سرویس ایمیل قرار می‌گیرد.
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setValues(initialValues);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return {
    values,
    errors,
    status,
    isSubmitting: status === "submitting",
    handleChange,
    handleSubmit,
  };
}

export default useContactForm;
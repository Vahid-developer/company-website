import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import ContactInfoCard from "./ContactInfoCard";
import useContactForm from "../hooks/useContactForm";

const contactInfo = [
  {
    icon: Phone,
    label: "تلفن تماس",
    value: "09357504152",
    href: "tel:09357504152",
    variant: "indigo",
    ltr: true,
  },
  {
    icon: Mail,
    label: "ایمیل",
    value: "vahidbanakar84@gmail.com",
    href: "mailto:vahidbanakar84@gmail.com",
    variant: "purple",
    ltr: true,
  },
  {
    icon: MapPin,
    label: "آدرس",
    value: "تهران، خیابان ولیعصر",
    variant: "cyan",
    ltr: false,
  },
];

const inputBase = `
  w-full
  rounded-xl
  border
  bg-white
  px-4
  py-3
  text-sm
  text-slate-900
  placeholder:text-slate-400
  transition-all
  duration-300
  focus:outline-none
  focus:ring-2
  dark:bg-slate-950/60
  dark:text-white
  dark:placeholder:text-slate-500
`;

const inputNormal = `
  border-slate-200
  focus:border-indigo-400
  focus:ring-indigo-200
  dark:border-white/10
  dark:focus:border-indigo-400/50
  dark:focus:ring-indigo-400/20
`;

const inputError = `
  border-rose-300
  focus:border-rose-400
  focus:ring-rose-200
  dark:border-rose-400/40
  dark:focus:border-rose-400/60
  dark:focus:ring-rose-400/20
`;

function Field({
  id,
  name,
  label,
  type = "text",
  as = "input",
  rows = 5,
  value,
  onChange,
  error,
  placeholder,
  autoComplete,
  ltr = false,
  className = "",
}) {
  const Tag = as;

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="
          mb-2
          block
          text-sm
          font-medium
          text-slate-700
          dark:text-slate-300
        "
      >
        {label}
      </label>

      <Tag
        id={id}
        name={name}
        {...(as === "input" ? { type } : { rows })}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        dir={ltr ? "ltr" : undefined}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`
          ${inputBase}
          ${error ? inputError : inputNormal}
          ${ltr ? "text-right" : ""}
          ${as === "textarea" ? "resize-none leading-7" : ""}
        `}
      />

      {error && (
        <p
          id={`${id}-error`}
          className="
            mt-2
            flex
            items-center
            gap-1.5
            text-xs
            text-rose-500
            dark:text-rose-400
          "
        >
          <AlertCircle
            size={14}
            strokeWidth={2}
            aria-hidden="true"
          />

          {error}
        </p>
      )}
    </div>
  );
}

function ContactForm() {
  const {
    values,
    errors,
    status,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <section
      id="contact-form"
      dir="rtl"
      className="
        relative
        z-30
        -mt-16
        -mb-16
        overflow-hidden
        rounded-[48px]
        bg-slate-50
        px-5
        pb-32
        pt-20
        shadow-[0_-16px_50px_rgba(15,23,42,0.10),0_16px_50px_rgba(15,23,42,0.10)]
        transition-colors
        duration-500

        dark:bg-slate-950
        dark:shadow-[0_-16px_50px_rgba(0,0,0,0.35),0_16px_50px_rgba(0,0,0,0.35)]

        sm:px-6
        md:-mt-24
        md:-mb-24
        md:rounded-[64px]
        md:px-8
        md:pb-40
        md:pt-24
        lg:px-10
      "
    >
      {/* Background glow - top left */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          -top-32
          h-72
          w-72
          rounded-full
          bg-purple-300/25
          blur-3xl
          transition-all
          duration-500
          dark:bg-purple-600/15
          sm:h-80
          sm:w-80
        "
      />

      {/* Background glow - bottom right */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-32
          h-80
          w-80
          rounded-full
          bg-cyan-300/20
          blur-3xl
          transition-all
          duration-500
          dark:bg-cyan-600/10
        "
      />

      {/* Center glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-72
          w-72
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-indigo-300/10
          blur-3xl
          dark:bg-indigo-600/10
        "
      />

      {/* Decorative bubble - top left */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-10
          top-16
          h-24
          w-24
          rounded-full
          border-2
          border-purple-200/70
          transition-colors
          duration-500
          dark:border-purple-500/20
          sm:h-28
          sm:w-28
        "
      />

      {/* Decorative bubble - bottom right */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-8
          -right-10
          h-24
          w-24
          rounded-full
          border-2
          border-cyan-200/70
          transition-colors
          duration-500
          dark:border-cyan-500/20
          sm:h-28
          sm:w-28
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div
          className="
            grid
            items-start
            gap-8
            lg:grid-cols-[1.5fr_1fr]
            lg:gap-10
          "
        >
          {/* Form card */}

          <div
            className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-xl
              transition-colors
              duration-500

              dark:border-white/10
              dark:bg-slate-900/80
              dark:shadow-black/30

              sm:p-8
            "
          >
            <h2
              className="
                text-2xl
                font-extrabold
                leading-tight
                tracking-tight
                text-slate-900
                transition-colors
                duration-500
                dark:text-white
              "
            >
              پیام خود را برای ما بنویسید
            </h2>

            <p
              className="
                mt-3
                text-sm
                leading-7
                text-slate-500
                transition-colors
                duration-500
                dark:text-slate-400
              "
            >
              فرم زیر را تکمیل کنید تا همکاران ما در اسرع وقت با شما تماس
              بگیرند.
            </p>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="mt-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="contact-name"
                  name="name"
                  label="نام و نام خانوادگی"
                  value={values.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="مثال: علی رضایی"
                  autoComplete="name"
                />

                <Field
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  label="شماره تماس"
                  value={values.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  placeholder="09123456789"
                  autoComplete="tel"
                  ltr
                />

                <Field
                  id="contact-email"
                  name="email"
                  type="email"
                  label="ایمیل"
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="example@email.com"
                  autoComplete="email"
                  ltr
                />

                <Field
                  id="contact-subject"
                  name="subject"
                  label="موضوع"
                  value={values.subject}
                  onChange={handleChange}
                  error={errors.subject}
                  placeholder="مثال: درخواست طراحی سایت"
                />

                <Field
                  id="contact-message"
                  name="message"
                  as="textarea"
                  rows={6}
                  label="پیام شما"
                  value={values.message}
                  onChange={handleChange}
                  error={errors.message}
                  placeholder="توضیحات خود را اینجا بنویسید..."
                  className="sm:col-span-2"
                />
              </div>

              {/* Status messages */}

              {status === "success" && (
                <div
                  role="status"
                  className="
                    mt-6
                    flex
                    items-start
                    gap-3
                    rounded-xl
                    border
                    border-emerald-200
                    bg-emerald-50
                    p-4
                    text-sm
                    leading-7
                    text-emerald-700

                    dark:border-emerald-400/20
                    dark:bg-emerald-500/10
                    dark:text-emerald-300
                  "
                >
                  <CheckCircle2
                    size={20}
                    strokeWidth={2}
                    className="mt-1 shrink-0"
                    aria-hidden="true"
                  />

                  پیام شما با موفقیت ارسال شد. به‌زودی با شما تماس
                  می‌گیریم.
                </div>
              )}

              {status === "error" && (
                <div
                  role="alert"
                  className="
                    mt-6
                    flex
                    items-start
                    gap-3
                    rounded-xl
                    border
                    border-rose-200
                    bg-rose-50
                    p-4
                    text-sm
                    leading-7
                    text-rose-700

                    dark:border-rose-400/20
                    dark:bg-rose-500/10
                    dark:text-rose-300
                  "
                >
                  <AlertCircle
                    size={20}
                    strokeWidth={2}
                    className="mt-1 shrink-0"
                    aria-hidden="true"
                  />

                  ارسال پیام با مشکل روبه‌رو شد. لطفاً دوباره تلاش کنید.
                </div>
              )}

              {/* Submit */}

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  mt-6
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-gradient-to-l
                  from-indigo-600
                  to-purple-600
                  px-8
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-indigo-950/10
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:from-indigo-500
                  hover:to-purple-500
                  hover:shadow-xl
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-indigo-500
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-white
                  disabled:cursor-not-allowed
                  disabled:opacity-70
                  disabled:hover:translate-y-0

                  dark:from-indigo-500
                  dark:to-purple-500
                  dark:hover:from-indigo-400
                  dark:hover:to-purple-400
                  dark:focus-visible:ring-offset-slate-900

                  sm:w-auto
                "
              >
                {isSubmitting ? (
                  <>
                    <Loader2
                      size={18}
                      strokeWidth={2}
                      className="animate-spin"
                      aria-hidden="true"
                    />
                    در حال ارسال...
                  </>
                ) : (
                  <>
                    ارسال پیام
                    <Send
                      size={18}
                      strokeWidth={2}
                      className="-scale-x-100"
                      aria-hidden="true"
                    />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact info */}

          <div>
            <h3
              className="
                text-lg
                font-bold
                text-slate-900
                transition-colors
                duration-500
                dark:text-white
              "
            >
              راه‌های ارتباطی
            </h3>

            <p
              className="
                mt-2
                mb-6
                text-sm
                leading-7
                text-slate-500
                transition-colors
                duration-500
                dark:text-slate-400
              "
            >
              می‌توانید از راه‌های زیر هم مستقیماً با ما در ارتباط باشید.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <ContactInfoCard
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  value={item.value}
                  href={item.href}
                  variant={item.variant}
                  ltr={item.ltr}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
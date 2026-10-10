
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

const inputBase = [
  "w-full rounded-xl border bg-white px-4 py-3",
  "text-sm text-slate-900 placeholder:text-slate-400",
  "transition-all duration-300 focus:outline-none focus:ring-2",
  "dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-500",
].join(" ");

const inputNormal = [
  "border-slate-200 focus:border-indigo-400 focus:ring-indigo-200",
  "dark:border-white/10 dark:focus:border-indigo-400/50",
  "dark:focus:ring-indigo-400/20",
].join(" ");

const inputError = [
  "border-rose-300 focus:border-rose-400 focus:ring-rose-200",
  "dark:border-rose-400/40 dark:focus:border-rose-400/60",
  "dark:focus:ring-rose-400/20",
].join(" ");

function Field({
  id,
  label,
  name,
  register,
  type = "text",
  as = "input",
  rows = 5,
  error,
  placeholder,
  autoComplete,
  ltr = false,
  className = "",
}) {
  const Tag = as;

  const fieldClassName = [
    inputBase,
    error ? inputError : inputNormal,
    ltr ? "text-left" : "",
    as === "textarea" ? "resize-none leading-7" : "",
  ].join(" ");

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
      >
        {label}
      </label>

      <Tag
        id={id}
        {...register(name)}
        type={as === "input" ? type : undefined}
        rows={as === "textarea" ? rows : undefined}
        placeholder={placeholder}
        autoComplete={autoComplete}
        dir={ltr ? "ltr" : undefined}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={fieldClassName}
      />

      {error && (
        <p
          id={`${id}-error`}
          className="mt-2 flex items-center gap-1.5 text-xs text-rose-500 dark:text-rose-400"
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
    register,
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
        relative z-30 -mb-16 -mt-16 overflow-hidden
        rounded-[48px] bg-slate-50 px-5 pb-32 pt-20
        shadow-[0_-16px_50px_rgba(15,23,42,0.10),0_16px_50px_rgba(15,23,42,0.10)]
        transition-colors duration-500
        dark:bg-slate-950
        dark:shadow-[0_-16px_50px_rgba(0,0,0,0.35),0_16px_50px_rgba(0,0,0,0.35)]
        sm:px-6 md:-mb-24 md:-mt-24 md:rounded-[64px]
        md:px-8 md:pb-40 md:pt-24 lg:px-10
      "
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-purple-300/25 blur-3xl transition-all duration-500 dark:bg-purple-600/15 sm:h-80 sm:w-80"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl transition-all duration-500 dark:bg-cyan-600/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-300/10 blur-3xl dark:bg-indigo-600/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-16 h-24 w-24 rounded-full border-2 border-purple-200/70 transition-colors duration-500 dark:border-purple-500/20 sm:h-28 sm:w-28"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 -right-10 h-24 w-24 rounded-full border-2 border-cyan-200/70 transition-colors duration-500 dark:border-cyan-500/20 sm:h-28 sm:w-28"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid items-start gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-10">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl transition-colors duration-500 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-black/30 sm:p-8">
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 transition-colors duration-500 dark:text-white">
              پیام خود را برای ما بنویسید
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-500 transition-colors duration-500 dark:text-slate-400">
              فرم زیر را تکمیل کنید تا همکاران ما در اسرع وقت با شما تماس بگیرند.
            </p>

            <form
              onSubmit={handleSubmit}
              onChange={handleChange}
              noValidate
              className="mt-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="contact-name"
                  name="name"
                  label="نام و نام خانوادگی"
                  register={register}
                  error={errors.name?.message}
                  placeholder="مثال: علی رضایی"
                  autoComplete="name"
                />

                <Field
                  id="contact-phone"
                  name="phone"
                  label="شماره تماس"
                  type="tel"
                  register={register}
                  error={errors.phone?.message}
                  placeholder="09123456789"
                  autoComplete="tel"
                  ltr
                />

                <Field
                  id="contact-email"
                  name="email"
                  label="ایمیل"
                  type="email"
                  register={register}
                  error={errors.email?.message}
                  placeholder="example@email.com"
                  autoComplete="email"
                  ltr
                />

                <Field
                  id="contact-subject"
                  name="subject"
                  label="موضوع"
                  register={register}
                  error={errors.subject?.message}
                  placeholder="مثال: درخواست طراحی سایت"
                />

                <Field
                  id="contact-message"
                  name="message"
                  label="پیام شما"
                  as="textarea"
                  rows={6}
                  register={register}
                  error={errors.message?.message}
                  placeholder="توضیحات خود را اینجا بنویسید..."
                  className="sm:col-span-2"
                />
              </div>

              {status === "success" && (
                <div
                  role="status"
                  className="mt-6 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-7 text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-500/10 dark:text-emerald-300"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0"
                    aria-hidden="true"
                  />

                  <p>
                    پیام شما با موفقیت بررسی شد. این ارسال آزمایشی است و هنوز به سرور ارسال نشده است.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div
                  role="alert"
                  className="mt-6 flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm leading-7 text-rose-700 dark:border-rose-400/20 dark:bg-rose-500/10 dark:text-rose-300"
                >
                  <AlertCircle
                    size={20}
                    className="mt-1 shrink-0"
                    aria-hidden="true"
                  />

                  <p>
                    در بررسی پیام مشکلی پیش آمد. لطفاً دوباره تلاش کنید.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  mt-6 inline-flex w-full items-center justify-center gap-2
                  rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-bold
                  text-white shadow-lg shadow-indigo-600/20 transition
                  duration-300 hover:bg-indigo-700
                  focus:outline-none focus:ring-2 focus:ring-indigo-400
                  focus:ring-offset-2 disabled:cursor-not-allowed
                  disabled:opacity-60 dark:focus:ring-offset-slate-900
                  sm:w-auto
                "
              >
                {isSubmitting ? (
                  <>
                    <Loader2
                      size={18}
                      className="animate-spin"
                      aria-hidden="true"
                    />
                    در حال بررسی...
                  </>
                ) : (
                  <>
                    <Send size={18} aria-hidden="true" />
                    ارسال پیام
                  </>
                )}
              </button>
            </form>
          </div>

          <aside className="space-y-5">
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg transition-colors duration-500 dark:border-white/10 dark:bg-slate-900/80 sm:p-8">
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                راه‌های ارتباطی
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                برای دریافت راهنمایی یا مطرح کردن پرسش‌های خود، از راه‌های زیر با ما در ارتباط باشید.
              </p>

              <div className="mt-6 space-y-4">
                {contactInfo.map((item, index) => (
                  <ContactInfoCard
                    key={item.label}
                    {...item}
                    index={index}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-indigo-100 bg-indigo-50/80 p-6 transition-colors duration-500 dark:border-indigo-400/20 dark:bg-indigo-500/10">
              <h3 className="font-bold text-indigo-950 dark:text-indigo-200">
                ساعت پاسخ‌گویی
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                برای پیگیری درخواست خود، از طریق تلفن یا ایمیل با ما تماس بگیرید.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;

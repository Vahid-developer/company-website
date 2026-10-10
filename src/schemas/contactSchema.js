
import { z } from "zod";

function normalizeDigits(value) {
  return value
    .replace(/[۰-۹]/g, (digit) =>
      String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)),
    )
    .replace(/[٠-٩]/g, (digit) =>
      String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)),
    );
}

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "نام و نام خانوادگی را وارد کنید.")
    .min(3, "نام باید حداقل ۳ حرف باشد."),

  phone: z
    .string()
    .trim()
    .min(1, "شماره تماس را وارد کنید.")
    .transform(normalizeDigits)
    .transform((value) => value.replace(/[\s-]/g, ""))
    .pipe(
      z
        .string()
        .regex(
          /^09\d{9}$/,
          "شماره موبایل معتبر نیست (مثال: 09123456789).",
        ),
    ),

  email: z
    .string()
    .trim()
    .min(1, "ایمیل را وارد کنید.")
    .email("ایمیل معتبر نیست."),

  subject: z
    .string()
    .trim()
    .min(1, "موضوع پیام را وارد کنید."),

  message: z
    .string()
    .trim()
    .min(1, "متن پیام را بنویسید.")
    .min(10, "پیام باید حداقل ۱۰ حرف باشد."),
});

import { House, Phone, Newspaper } from "lucide-react";
import ServiceCard from "./ServiceCard";
import webDesignImage from "../assets/web-design.jpg";

function Services() {
  return (
    <section className="bg-indigo-950 px-8 py-20 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            خدمات ما
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-indigo-200">
            راهکارهای حرفه‌ای و تخصصی برای رشد و توسعه کسب‌وکار شما
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

        <ServiceCard
          title="طراحی سایت"
          description="طراحی وب‌سایت‌های مدرن و حرفه‌ای برای کسب‌وکار شما"
          icon={House}
          image={webDesignImage}
         />

          <ServiceCard
            title="طراحی اپلیکیشن"
            description="ساخت اپلیکیشن‌های کاربردی و مدرن برای کاربران شما"
            icon={Phone}
          />

          <ServiceCard
            title="تولید محتوا"
            description="تولید محتوای حرفه‌ای برای رشد و توسعه برند شما"
            icon={Newspaper}
          />

        </div>

      </div>
    </section>
  );
}

export default Services;
import { House, Phone, Newspaper } from "lucide-react";
import ServiceCard from "./ServiceCard";
import webDesignImage from "../assets/web-design.jpg";

function Services() {
  return (
    <section id="services" className="bg-indigo-950 px-6 py-24 text-white md:px-8"> 
      
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          
          <span className="text-sm font-medium text-indigo-300">
            خدمات ما
          </span>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            راهکارهایی برای رشد کسب‌وکار شما
          </h2>

          <p className="mt-5 text-sm leading-7 text-indigo-200 md:text-base">
            راهکارهای حرفه‌ای و تخصصی برای رشد و توسعه کسب‌وکار شما
          </p>

        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">

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
            image={webDesignImage}
          />

          <ServiceCard
            title="تولید محتوا"
            description="تولید محتوای حرفه‌ای برای رشد و توسعه برند شما"
            icon={Newspaper}
            image={webDesignImage}
          />

        </div>

      </div>

    </section>
  );
}

export default Services;
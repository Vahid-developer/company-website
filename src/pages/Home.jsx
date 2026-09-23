function Home() {
  return (
    <div>
      <h1>صفحه اصلی</h1>
      <p>این صفحه‌ی اصلی سایت شرکته</p>

      {/* این بخش فقط موقته، برای تست افکت شیشه‌ای هدر */}
      <div className="h-[1500px] bg-gradient-to-b from-red-200 via-yellow-200 to-blue-200">
        <p className="p-8 text-black">این یک محتوای تستیه، اسکرول کن تا افکت شیشه‌ای هدر رو ببینی</p>
      </div>
    </div>
  )
}

export default Home
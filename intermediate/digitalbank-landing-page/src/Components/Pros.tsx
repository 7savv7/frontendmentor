function Pros() {
  return (
    <section className="flex flex-col gap-8 bg-gray100 p-10 text-center md:p-5 md:text-left md:justify-between md:gap-20 lg:py-20 lg:px-35 xl:px-50">
      <div className="flex flex-col gap-2">
        <h2 className="text-blue950 text-[2rem]">Why choose Digitalbank?</h2>

        <p className="text-gray600 md:w-[50%]">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>

      <div
        className="flex flex-col gap-8 [&_img]:rounded-full [&_img]:mb-5 [&>div]:flex [&>div]:flex-col 
        [&>div]:items-center [&>div]:gap-5 [&>div>p]:text-gray600 [&>div>h3]:text-[1.8rem] [&>div>h3]:text-blue950
        md:flex-row md:[&>div]:flex md:[&>div]:flex-1 md:[&>div]:items-start"
      >
        <div>
          <img src="/images/icon-online.svg" alt="online" />

          <h3>Online Banking</h3>

          <p>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>

        <div>
          <img src="/images/icon-budgeting.svg" alt="budgeting" />

          <h3>Simple Budgeting</h3>

          <p>
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </div>

        <div>
          <img src="/images/icon-onboarding.svg" alt="onboarding" />

          <h3>Fast Onboarding</h3>

          <p>
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>

        <div>
          <img src="/images/icon-api.svg" alt="api" />

          <h3>Open API</h3>

          <p>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Pros;

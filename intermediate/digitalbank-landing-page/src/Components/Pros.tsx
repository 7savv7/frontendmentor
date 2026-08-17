import Pro from "./Pro";

function Pros() {
  const pros = [
    {
      image: "/images/icon-online.svg",
      title: "Online Banking",
      text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    },
    {
      image: "/images/icon-budgeting.svg",
      title: "Simple Budgeting",
      text: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    },
    {
      image: "/images/icon-onboarding.svg",
      title: "Fast Onboarding",
      text: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
      image: "/images/icon-api.svg",
      title: "Open API",
      text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    },
  ];

  return (
    <section className="flex flex-col gap-8 bg-gray100 p-10 text-center md:p-5 md:text-left md:justify-between md:gap-20 lg:py-20 lg:px-35 xl:px-50">
      <div className="flex flex-col gap-2">
        <h2 className="text-blue950 text-[2rem]">Why choose Digitalbank?</h2>

        <p className="text-gray600 md:w-[50%]">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>

      <div className="flex flex-col gap-8 md:flex-row ">
        {pros.map((pro) => (
          <Pro
            key={pro.title}
            image={pro.image}
            title={pro.title}
            text={pro.text}
          />
        ))}
      </div>
    </section>
  );
}

export default Pros;

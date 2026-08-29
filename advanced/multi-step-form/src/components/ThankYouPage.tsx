function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center text-blue950 text-center py-12">
      <img className="w-[60px] h-[60px]" src="/images/icon-thank-you.svg" alt="thank-you" />

      <h1 className="text-[1.5em] font-bold mt-5">Thank you!</h1>

      <p className="mt-2 text-grey500 w-[94%]">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default ThankYouPage;

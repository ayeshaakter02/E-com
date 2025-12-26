import Container from "@/components/common/Container";
import Link from "next/link";

const Page = () => {
  return (
    <Container>
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div
          className="w-full max-w-md sm:max-w-lg lg:max-w-2xl 
                        p-6 sm:p-8 lg:p-12 
                        text-center bg-white shadow-lg rounded-xl 
                        transition-all hover:shadow-xl"
        >
          {/* Success Icon */}
          <div
            className="flex items-center justify-center 
                          w-20 h-20 sm:w-24 sm:h-24 
                          mx-auto mb-6 sm:mb-8 
                          bg-green-100 rounded-full"
          >
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Main Content */}
          <h1
            className="mb-4 sm:mb-6 
                         text-2xl sm:text-3xl lg:text-4xl 
                         font-extrabold text-green-600"
          >
            Payment Successful!
          </h1>

          <p
            className="mb-6 sm:mb-8 
                        text-base sm:text-lg lg:text-xl 
                        text-gray-700"
          >
            Thank you for your purchase.
          </p>

          {/* Contact Info */}
          <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-gray-100">
            <p className="text-base sm:text-lg text-gray-700">
              Have questions? Contact us at:
            </p>
            <a
              href="mailto:benimle@hazırlan.com"
              className="inline-block mt-2 
                         text-lg sm:text-xl 
                         font-medium text-blue-600 
                         transition-colors hover:text-blue-800 break-all"
            >
              benimle@hazırlan.com
            </a>
          </div>

          {/* Button */}
          <div className="mt-8 sm:mt-12">
            <Link
              href="/"
              className="inline-block w-full sm:w-auto
                         px-6 sm:px-8 py-3 sm:py-4 
                         text-base sm:text-lg 
                         font-semibold text-white 
                         bg-green-600 rounded-lg 
                         transition-colors hover:bg-green-700"
            >
              Return to Home Page
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;

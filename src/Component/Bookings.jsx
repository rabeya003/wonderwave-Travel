import { useEffect, useState } from "react";
import { RangeDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";
import { Link } from "react-router-dom";
const Bookings = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/travel`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const title = data?.map((d) => d.title);
  console.log(title);
  const handleSubmit = (e) => {
    e.preventDefault();
    const destination = e.target.destination.value;
    if (title.includes("Cox's Bazar") == destination) {
      return;
    }
  };
  return (
    <div>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleSubmit}>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Origin
                  </label>
                  <input
                    type="text"
                    name="origin"
                    id="origin"
                    placeholder="Select your origin"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Destination
                  </label>
                  <input
                    type="text"
                    name="destination"
                    id="destination"
                    placeholder="Your Destination"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                How many guest are you bringing?
              </label>
              <input
                type="number"
                name="guest"
                id="guest"
                placeholder="5"
                min="0"
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <label className="font-bold" htmlFor="">
                  Select CHECKIN and CHECKOUT
                </label>
                <RangeDatePicker
                  startDate={new Date(2023, 0, 15)}
                  endDate={new Date(2023, 1, 1)}
                />
              </div>
            </div>

            <div>
              <Link to={`/travel/${data?._id}`}>
                <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Start Booking
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Bookings;

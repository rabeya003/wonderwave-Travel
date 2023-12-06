import { useEffect, useState } from "react";
import { RangeDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://wanderwave-server.vercel.app/travel`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const destination = e.target.destination.value;
    const origin = e.target.origin.value;
    const guest = e.target.guest.value;
    if (data.length === 0) {
      return;
    }
    if (!origin) {
      toast.error("Please Enter your Origin");
      return;
    } else if (!destination) {
      toast.error("Please Enter your Destination");
      return;
    } else if (!guest) {
      toast.error("Guest can't be an empty");
      return;
    }
    // find data of destination's name
    const matchData = data?.find((d) =>
      d.title.toLowerCase().includes(destination.toLowerCase())
    );
    if (matchData) {
      const id = matchData._id;
      // window.location.href = `/travel/${id}`;
      navigate(`/travel/${id}`);
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
                placeholder="Number of guest"
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
              <button
                type="submit"
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Start Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Bookings;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import Cards from "./Cards";
const Hotels = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://wanderwave-server.vercel.app/travel/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [id]);

  // useEffect(() => {
  //   const fetchDetails = async () => {
  //     try {
  //       const res = await fetch(`https://wanderwave-server.vercel.app/travel/${id}`);
  //       const data = await res.json();
  //       setDetails(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchDetails();
  // }, [id]);

  // console.log(details);
  if (!details) {
    return (
      <>
        {" "}
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </>
    );
  }
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">
        Welcome to{" "}
        <span className="text-4xl text-sky-800">{details?.title}</span>
      </h1>
      <div>
        <Cards detail={details}></Cards>
      </div>
    </div>
  );
};

export default Hotels;

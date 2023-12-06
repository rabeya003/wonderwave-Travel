const CardDetails = ({ a }) => {
  const { detailsPakage } = a || {};
  // const detailsPak = detailsPakage?.map((d) => d);
  console.log(detailsPakage[0]?.name);
  return <div></div>;
};

export default CardDetails;

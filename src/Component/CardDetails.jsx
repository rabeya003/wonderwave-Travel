const CardDetails = ({ a }) => {
  const { detailsPakage } = a || {};
  const detailsPak = detailsPakage?.map((d) => d);
  console.log(detailsPak);
  return <div></div>;
};

export default CardDetails;

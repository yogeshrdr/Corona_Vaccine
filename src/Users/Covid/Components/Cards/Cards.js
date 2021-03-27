import React from "react";
import CountUp from "react-countup";
import InfoCard from '../Card/InfoCard';

const Cards = ({
  data: { confirmed, recovered, deaths},
  
}) => {

  if (!confirmed) {
    return "Loading...";
  }

  const active = confirmed["value"] - recovered["value"] - deaths["value"];

  let carddetails = [
    {
      text: "Infected",
      value: confirmed.value,
      bottomText: "infected cases of COVID-19",
    },
    {
      text: "Recovered",
      value: recovered.value,
      bottomText: "recoveries from COVID-19",
    },
    {
      text: "Deaths",
      value: deaths.value,
      bottomText: "deaths caused by COVID-19",
    },
    {
      text: "Active",
      value: active,
      bottomText: "active cases of COVID-19",
    },
  ];

  return (
    <div className="grid gap-3 mb-8 md:grid-cols-2 xl:grid-cols-4">
        {carddetails.map((detail, index) => (
          <div>
            <InfoCard >
            <div
            item
            key={index}
            style={{ margin: "0px 23.675px", padding: "12px" }}
          >
                <b>{detail.text}</b>
              <div >
                <CountUp
                  start={0}
                  end={detail.value}
                  duration={2}
                  separator=","
                />
              </div>
              <div >{detail.bottomText}</div>
          </div>
            </InfoCard>
          </div>
        ))}
      
    </div>
  );
};

export default Cards;

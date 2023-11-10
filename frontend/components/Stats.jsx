import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <div className={`flex flex-row flex-wrap w-[65%]`}>
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex-1 flex justify-start items-center flex-col m-3`}
      >
        <h4 className="font-poppins font-semibold xs:text-[30px] text-[27px] xs:leading-[40px] leading-[38px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[16px] text-[14px] text-gradient ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </div>
);

export default Stats;

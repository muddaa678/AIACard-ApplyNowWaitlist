import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type NameLabelsType = {
  className?: string;
  firstName?: string;
  muddashirPlaceholder?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const NameLabels: NextPage<NameLabelsType> = ({
  className = "",
  firstName,
  muddashirPlaceholder,
  propFlex,
  propMinWidth,
  propAlignSelf,
}) => {
  const nameLabelsStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propMinWidth, propAlignSelf]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[0.25rem] min-w-[8.5rem] text-left text-[0.75rem] text-darkgray font-montserrat ${className}`}
      style={nameLabelsStyle}
    >
      <b className="w-[6.875rem] relative inline-block z-[1]">{firstName}</b>
      <div className="self-stretch rounded-8xs flex flex-row items-start justify-start pt-[0.75rem] px-[1.625rem] pb-[0.937rem] z-[1] border-[2px] border-solid border-darkslategray">
        <div className="h-[3.125rem] w-[13.125rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-darkslategray" />
        <input
          className="w-[4.813rem] [border:none] [outline:none] font-medium font-montserrat text-[0.875rem] bg-[transparent] h-[1.063rem] relative text-white text-left inline-block p-0 z-[2]"
          placeholder={muddashirPlaceholder}
          type="text"
        />
      </div>
    </div>
  );
};

export default NameLabels;

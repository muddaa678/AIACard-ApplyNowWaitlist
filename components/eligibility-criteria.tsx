import type { NextPage } from "next";
import NameLabels from "./name-labels";

export type EligibilityCriteriaType = {
  className?: string;
};

const EligibilityCriteria: NextPage<EligibilityCriteriaType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch rounded-3xs box-border flex flex-col items-start justify-start pt-[2rem] pb-[1.937rem] pr-[2.125rem] pl-[3.375rem] gap-[2.5rem] max-w-full text-left text-[1.375rem] text-white font-montserrat border-[0px] border-solid border-gray mq800:gap-[1.25rem] mq800:pl-[1.688rem] mq800:pt-[1.313rem] mq800:pb-[1.25rem] mq800:box-border ${className}`}
    >
      <img
        className="w-[33.875rem] h-[36.688rem] relative rounded-3xs hidden max-w-full"
        alt=""
        src="/rectangle-34.svg"
      />
      <div className="w-[27.25rem] flex flex-col items-start justify-start gap-[1.437rem] max-w-full">
        <h2 className="m-0 relative text-inherit z-[1] font-inherit mq450:text-[1.125rem]">
          <p className="m-0">
            <span>
              <span className="font-medium font-montserrat">{`Sorry `}</span>
              <b>Muddashir!</b>
              <span className="font-medium">{` `}</span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="font-medium">{`You’re `}</span>
            </span>
            <b className="font-montserrat text-goldenrod">NOT</b>
            <span className="font-medium font-montserrat text-white">{` `}</span>
            <b className="font-montserrat text-goldenrod">ELIGIBLE</b>
            <span className="text-white">
              <span className="font-medium font-montserrat">{` for the `}</span>
              <b className="font-montserrat">AIA Card</b>
              <span className="font-medium font-montserrat">!</span>
            </span>
          </p>
        </h2>
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.125rem] box-border max-w-full text-[0.75rem]">
          <div className="flex-1 relative inline-block max-w-full z-[1]">
            <p className="m-0">{`Unfortunately, you do not meet our current eligibility criteria. But, you may still be eligible for the AIA Card. Our team will manually review your application. If you are eligible, one of our team members will reach out for more information. `}</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              We are working to expand our services. Join our wait list for
              updates on eligibility changes. Thank you for your understanding.
            </p>
          </div>
        </div>
      </div>
      <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[1.125rem] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.187rem] pl-[0.125rem] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start gap-[1.875rem] max-w-full mq450:flex-wrap">
            <NameLabels
              firstName="First Name"
              muddashirPlaceholder="Muddashir"
            />
            <NameLabels
              firstName="Last Name"
              muddashirPlaceholder="Siddique"
              propFlex="1"
              propMinWidth="8.5rem"
              propAlignSelf="unset"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem] max-w-full">
          <b className="w-[6.875rem] relative text-[0.75rem] inline-block font-montserrat text-darkgray text-left z-[1]">
            Email Address
          </b>
          <button className="cursor-pointer pt-[0.75rem] px-[1.625rem] pb-[0.937rem] bg-[transparent] self-stretch rounded-8xs box-border flex flex-row items-start justify-start max-w-full z-[1] border-[2px] border-solid border-darkslategray hover:bg-dimgray-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-dimgray-100">
            <div className="h-[3.125rem] w-[28.375rem] relative rounded-8xs box-border hidden max-w-full border-[2px] border-solid border-darkslategray" />
            <div className="relative text-[0.875rem] font-medium font-montserrat text-white text-left whitespace-nowrap z-[2]">
              muddashir@aianalysisexchange.com
            </div>
          </button>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.187rem] pl-[0.125rem] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start gap-[1.875rem] max-w-full mq450:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[1.625rem] min-w-[8.5rem]">
              <NameLabels
                firstName="Nationality"
                muddashirPlaceholder="Sri Lanka"
                propFlex="unset"
                propMinWidth="unset"
                propAlignSelf="stretch"
              />
              <button className="cursor-pointer [border:none] pt-[0.625rem] px-[1.875rem] pb-[0.562rem] bg-goldenrod rounded-8xs flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-darkgoldenrod">
                <div className="h-[2.25rem] w-[9.438rem] relative rounded-8xs bg-goldenrod hidden" />
                <b className="relative text-[0.875rem] inline-block font-montserrat text-black text-left min-w-[5.688rem] z-[2]">
                  Join Waitlist
                </b>
              </button>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem] min-w-[8.5rem]">
              <b className="relative text-[0.75rem] font-montserrat text-darkgray text-left z-[1]">
                Country of Residence
              </b>
              <button className="cursor-pointer pt-[0.75rem] px-[1.625rem] pb-[0.937rem] bg-[transparent] self-stretch rounded-8xs flex flex-row items-start justify-start z-[2] border-[2px] border-solid border-darkslategray">
                <div className="relative text-[0.875rem] font-medium font-montserrat text-white text-left z-[1]">
                  United Arab Emirates
                </div>
                <div className="h-[3.125rem] w-[13.063rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-darkslategray" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EligibilityCriteria;

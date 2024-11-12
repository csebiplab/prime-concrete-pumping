import { IoCaretDown } from "react-icons/io5";
import "./Faq.css";
import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';


const QAPoolInstallationQuestionsNAns = [
  {
    id: 1,
    question: "What services does Prime Concrete Pumping Barrie offer?",
    answer:
      "Prime Concrete Pumping Barrie offers a range of pumping services, including residential, commercial, and industrial pumping solutions.",
  },
  {
    id: 2,
    question: "What types of concrete pumps does Prime Concrete Pumping Barrie use?",
    answer:
      "We utilize a variety of concrete pumps, including boom pumps, line pumps, and specialized pumps for specific project requirements.",
  },
  {
    id: 3,
    question: "How experienced is the team at Prime Concrete Pumping Barrie?",
    answer:
      "Our team comprises highly experienced professionals with extensive expertise in pumping.",
  },
  {
    id: 4,
    question: "What areas does Prime Concrete Pumping Barrie serve?",
    answer:
      "We primarily serve the Barrie & Toronto area, but our services extend to surrounding regions within Ontario as well.",
  },
  {
    id: 5,
    question: "How can I request a quote or schedule a service with Prime Concrete Pumping Barrie?",
    answer:
      "To request a quote or schedule a service, simply contact us through our website, phone, or email.",
  },
  {
    id: 6,
    question: "Is Prime Concrete Pumping Barrie licensed and insured?",
    answer:
      "Yes, our company in Barrie is fully licensed and insured.",
  },
  {
    id: 7,
    question: "What sets Prime Concrete Pumping Barrie apart from other pumping companies?",
    answer:
      "At Prime Concrete Pumping Barrie, we pride ourselves on our commitment to excellence, reliability, and customer satisfaction.",
  },
  {
    id: 8,
    question: "What payment methods does Prime Concrete Pumping Barrie accept?",
    answer:
      "We accept various payment methods, including credit/debit cards, electronic funds transfer (EFT), and traditional forms of payment such as checks or cash.",
  },
  {
    id: 9,
    question: "Can Prime Concrete Pumping Barrie assist with emergency pumping needs?",
    answer:
      "Yes, our company offers emergency pumping services for urgent situations.",
  },
  {
    id: 10,
    question: "How can I learn more about Prime Concrete Pumping Barrie and stay updated on company news and projects?",
    answer:
      "For the latest updates, news, and information about our company, follow us on social media platforms and visit our website regularly.",
  }
];

const Faq = () => {
  return (
    <div className="container padding__top">
      <div>
        <div className="flex flex-col items-center justify-center">
        <HeadingIcon text={headingIconText.faq__headingIconText}/>

          <div>
            <h6 className="text-[25px] md:text-[27px] lg:text-[29px] xl:text-[30px] 2xl:text-[32px] 3xl:text-[33px] 4xl:text-[34px] 5xl:text-[36px] font-bold leading-[30px] md:leading-[40px] text-dark text-center mt-[5px]">
            <span className="text-primary">FAQ</span> for Prime Concrete Pumping Barrie
            </h6>
          </div>
        </div>
      </div>
      <div className="pt-[15px]">
        {QAPoolInstallationQuestionsNAns.map((ques, idx) => (
          <div key={idx}>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 bg-black  py-3 px-5 5xl:py-[14px] 5xl:px-8 border-2">
                <p className="font-family-secondary text-white text-sm lg:text-sm xl:text-base 5xl:text-lg 5xl:leading-[22px] font-bold">
                  {ques.question}
                </p>

                <div className="white-icon">
                  <IoCaretDown className="white-icon" fill="white" />
                </div>
              </summary>

              <p className="font-family-secondary py-3 pl-4 pr-8 lg:py-4 lg:px-6 5xl:py-5 5xl:px-7  border-2 text-black text-sm lg:text-sm 5xl:text-base font-normal 5xl:leading-[30px]">
                {ques.answer}
              </p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

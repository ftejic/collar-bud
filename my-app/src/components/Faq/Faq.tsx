import ContactForm from "./ContactForm";
import Faqs from "./Faqs";

function Faq() {
  return (
    <section id="faqs" className="container mx-auto py-10 md:py-16 space-y-10 lg:space-y-0 lg:flex lg:space-x-10">
      <div className="lg:w-1/2">
        <h2 className="font-unbounded text-center font-bold text-2xl mb-5">Ask a Question</h2>
        <ContactForm />
      </div>
      <div className="lg:w-1/2">
      <h2 className="font-unbounded text-center font-bold text-2xl mb-5">FAQs</h2>
        <Faqs />
      </div>
    </section>
  );
}

export default Faq;

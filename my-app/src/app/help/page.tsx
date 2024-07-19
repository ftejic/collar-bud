import Link from "next/link";

function Help() {
  return (
    <section className="container mx-auto mt-[68px] md:mt-[124px] lg:mt-[152px] text-center py-10 md:py-16">
      <h2 className="font-unbounded font-bold text-2xl mb-5">Help</h2>
      <ul className="space-y-5">
        <li>
          <Link href={"/help/size-charts"}>Size Charts</Link>
        </li>
        <li>
          <Link href={"/help/privacy-policy"}>Privacy Policy</Link>
        </li>
        <li>
          <Link href={"/help/terms-of-sale"}>Terms of Sale</Link>
        </li>
        <li>
          <Link href={"/help/terms-of-use"}>Terms of Use</Link>
        </li>
      </ul>
    </section>
  );
}

export default Help;

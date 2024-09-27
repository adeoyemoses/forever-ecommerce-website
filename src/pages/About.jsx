import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="About Image"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to Forever, your ultimate destination for stylish and
            affordable fashion. At Forever, we believe that fashion should be
            accessible to everyone. Our brand offers a wide range of clothing
            and accessories for men, women, and children, designed to make you
            look and feel your best.
          </p>
          <p>
            From everyday essentials to statement pieces, we cater to every
            occasion and personal style. Our commitment to quality,
            affordability, and the latest trends sets us apart. Join us on our
            journey to redefine fashion—where timeless designs meet modern
            trends. Forever, where style never fades.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            "At Forever, our mission is to empower individuals through
            accessible, high-quality fashion that blends timeless elegance with
            modern trends. We strive to inspire confidence and self-expression,
            offering styles that resonate with every personality and occasion.
            With a commitment to sustainability, inclusivity, and affordability,
            we aim to make fashion a force for positive change."
          </p>
        </div>
      </div>

      <div className="text-xl py-4 ">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            At Forever, we guarantee exceptional quality in every piece. Our
            products are crafted with care, ensuring durability, comfort, and
            style that you can trust every time.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            We prioritize your convenience. Our seamless shopping experience,
            from browsing to delivery, ensures that you can effortlessly find
            and receive your favorite fashion pieces. With easy returns, secure
            payments. We make fashion accessible and hassle-free for you.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            we prioritize your convenience. Our seamless shopping experience,
            from browsing to delivery, ensures that you can effortlessly find
            and receive your favorite fashion pieces. With easy returns, secure
            payments, and customer support, we make fashion accessible and
            hassle-free for you.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
